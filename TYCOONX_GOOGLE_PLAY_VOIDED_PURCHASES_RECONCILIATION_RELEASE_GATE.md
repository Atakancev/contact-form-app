# TycoonX Google Play Voided Purchases Reconciliation Gate

Last reviewed: September 8, 2026

This is a narrow companion to `TYCOONX_GOOGLE_PLAY_REFUND_API_MODERNIZATION_2026_GATE.md`, `TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md`, and the RTDN authenticity gate. It governs recovery and reconciliation through Google Play's server-side `purchases.voidedpurchases.list` API. It does not replace RTDN, current purchase verification, the TycoonX entitlement ledger, or mandatory consumer rights.

TycoonX is in full release. This gate must not be used to describe the live game or its purchases as beta.

## 1. Current Google API boundary

As of September 8, 2026, Google's current Voided Purchases API documents these material behaviors:

- `GET /androidpublisher/v3/applications/{packageName}/purchases/voidedpurchases` lists purchases that were canceled, refunded, or charged back for that package.
- `startTime` cannot be older than 30 days. If omitted, Google defaults it to the current time minus 30 days.
- `endTime` cannot be later than the current time. If omitted, Google defaults it to the current time.
- The `startTime` and `endTime` filters apply to when Google's systems **see the record as voided**, not to the `voidedTimeMillis` value returned in the record.
- When a pagination token is supplied, Google ignores `startTime` and `endTime` for that request.
- Token pagination can expose a `nextPageToken`; a reconciliation run must exhaust the applicable page chain before advancing its durable scan boundary.
- The default `type` is `0`, which returns only voided in-app product purchases. `type=1` also includes voided subscriptions.
- Before relying on subscription results, Google warns that renewal orders can share a `purchaseToken`; `orderId` is the identifier that uniquely distinguishes a one-time purchase, subscription purchase, or subscription renewal in this resource.
- `includeQuantityBasedPartialRefund` defaults to `false`. If multi-quantity purchases are possible and partial-quantity refunds must be reconciled, TycoonX must deliberately request `includeQuantityBasedPartialRefund=true` rather than assuming those records are included automatically.
- For returned quantity-based partial refunds, `voidedQuantity` reports the quantity refunded by that partial-refund record.
- Google currently documents `voidedSource` values as user, developer, or Google, and `voidedReason` values including remorse, not received, defective, accidental purchase, fraud, friendly fraud, chargeback, and unacknowledged purchase.
- The endpoint requires the `androidpublisher` OAuth scope. Credentials remain server-side.

These provider fields are evidence about Google Play state. They are not a substitute for TycoonX's own durable transaction and entitlement history.

## 2. The 30-day window is a recovery limit, not a ledger-retention policy

The Voided Purchases API is not a permanent historical ledger. Because Google does not permit `startTime` older than 30 days, CK-Labs must retain its own durable purchase, entitlement, correction, and provider-event history for the period required by the applicable legal, accounting, support, security, and reconciliation purposes.

Do not delete TycoonX payment history merely because the affected Google void is no longer queryable through this API. Do not interpret the absence of a transaction from a 30-day Voided Purchases response as proof that the transaction has never been refunded, revoked, canceled, or charged back.

A reconciliation worker should run often enough that ordinary outages do not consume the entire provider lookback window. If the worker is unavailable long enough that a gap can no longer be covered by the API's 30-day query boundary, fail closed for the missing interval and reconcile through other authoritative Google records, RTDN history retained by CK-Labs, order/purchase APIs, Play Console evidence where appropriate, and the durable TycoonX ledger. Do not guess that all purchases in the gap remain valid and do not mass-revoke them.

## 3. Use a durable scan boundary and intentional overlap

Persist a durable reconciliation boundary only after the relevant page chain has been processed successfully.

A production scanner must:

1. choose a bounded query interval within Google's permitted lookback;
2. include a deliberate overlap with the previously completed interval so late visibility, retry timing, or process interruption does not create a silent gap;
3. process results idempotently, so overlap cannot create a second correction;
4. follow every returned pagination token until the chain is exhausted; and
5. advance the durable boundary only after the complete interval has been durably reconciled.

The overlap duration is an operational parameter, not a consumer entitlement rule. It may be adjusted based on provider behavior and incident evidence, but removing overlap entirely requires evidence that no reconciliation gap is introduced.

Because Google says the time filter is based on when its systems see a record as voided rather than the record's `voidedTimeMillis`, TycoonX must not advance a watermark solely from the largest `voidedTimeMillis` encountered. Preserve both the provider-reported void time and TycoonX ingestion/reconciliation metadata.

## 4. Pagination tokens and time filters must not be mixed incorrectly

Google currently ignores `startTime` and `endTime` when a pagination token is present. Therefore:

- treat a pagination token as continuation state for the current scan, not as a new independent time query;
- do not change the scan's intended time interval halfway through a token chain and assume the new timestamps took effect;
- do not mark an interval complete after only the first page;
- do not reuse an old pagination token as proof of the current refund state; and
- if a token expires, fails, or produces contradictory state, restart or reconcile the affected interval safely rather than skipping forward.

A successful first page is not proof that later pages are empty.

## 5. Quantity-based partial refunds must be explicitly included

If TycoonX permits any Google Play multi-quantity Diamond SKU, its Voided Purchases reconciliation path must use `includeQuantityBasedPartialRefund=true` wherever this API is relied upon to discover quantity-based partial refunds.

Leaving the flag at Google's default `false` while claiming the scan covers all Diamond voids is a release blocker. The missing records could otherwise leave refunded Diamond value on the account or make later full-refund reconciliation appear inconsistent.

For each partial-quantity record:

- bind `voidedQuantity` to the authoritative original purchase/order and product mapping;
- preserve the cumulative quantity already corrected;
- cap the cumulative correction at the original verified purchased quantity and attributable TycoonX value;
- reconcile with current `purchases.productsv2` state and `refundableQuantity` where required by the existing refund-modernization gate; and
- never infer a new purchase merely because another partial-refund record exists for the same purchase token.

Example: a verified purchase of quantity 5 for a 200-Diamond SKU originally granted 1,000 Diamonds. If the API returns a legitimate partial void of quantity 2, the transaction-specific correction budget is at most 400 Diamonds for that occurrence, subject to the existing ledger state. If a later provider path shows the remaining three units were also refunded, the total correction remains capped at the original 1,000 Diamonds. Duplicate scans and overlapping windows do not increase that cap.

## 6. `type` and identifier namespaces must be intentional

TycoonX currently sells one-time products. A scanner relying on Google's default `type=0` must document that scope rather than accidentally assuming subscription results are included.

If CK-Labs later introduces a recurring Google Play product and chooses `type=1`, the implementation must preserve subscription-renewal identity correctly. A shared subscription `purchaseToken` must not collapse separate renewal orders into one event when Google provides `orderId` to distinguish them.

Keep these namespaces separate:

- Google `packageName`;
- Google `orderId`;
- Google `purchaseToken`;
- TycoonX product/SKU mapping;
- TycoonX account identifier;
- provider void record and quantity state; and
- TycoonX entitlement/correction ledger identity.

Do not use a nickname, email address, device identifier, Pub/Sub `messageId`, or refund reason as a substitute for the authoritative transaction mapping.

## 7. `voidedSource` and `voidedReason` are not automatic punishment signals

Provider metadata must not be converted directly into a player sanction.

Examples:

- `voidedSource=developer` can reflect a CK-Labs/provider refund workflow and is not evidence that the player abused chargebacks.
- `voidedReason=unacknowledged purchase` can result from CK-Labs acknowledgement or infrastructure failure and is not proof of fraud.
- `voidedReason=fraud`, `friendly fraud`, or `chargeback` is relevant risk evidence but still must be tied to the correct authoritative transaction and surrounding account evidence before TycoonX imposes account-level suspension, termination, or broader value removal.
- remorse, accidental purchase, defective, or not-received reasons do not by themselves prove hacking, regional-price abuse, account compromise, or entitlement abuse.

Transaction-specific correction and account-level enforcement are separate decisions. Never turn a provider refund reason into an automatic global account debt or permanent ban.

## 8. RTDN and Voided Purchases must converge on one correction budget

RTDN, the Voided Purchases API, `orders.refund`, `purchases.productsv2`, Play Console actions, support recovery, and client-side reconciliation can all surface the same underlying transaction state.

TycoonX must converge those paths onto one durable provider transaction and one cumulative correction budget. A refund discovered first through RTDN and later through a Voided Purchases overlap scan is one refund, not two. Likewise, a Voided Purchases record processed before a delayed RTDN must not cause the RTDN to remove the same value again.

`messageId`, pagination position, scanner run ID, and request timestamp are transport/processing identities, not entitlement identities.

## 9. Product invariants

### Purchased Diamonds

Purchased Diamonds do not expire merely because time passes. A verified Google void may correct only the amount attributable to that affected transaction, subject to the existing refund/correction ledger and mandatory law. Unrelated purchased Diamonds are not a reserve that CK-Labs may seize because one transaction was voided.

### One-time 30-Day VIP

30-Day VIP remains one non-renewing entitlement lasting 30 consecutive days. Google multi-quantity mechanics must not be used to manufacture fractional VIP periods, stacked clocks, or an undocumented recurring product. A duplicate void scan must not terminate the same VIP twice or affect a separate legitimate VIP purchase.

### Lifetime VIP

Lifetime VIP remains a one-time promotional entitlement available only during selected genuine sales windows. It may be withdrawn from future sale and may never return. A Voided Purchases record can reconcile the underlying historical transaction when appropriate, but an old order, pagination token, refund record, unsupported client, or restored historical transaction cannot reopen a closed Lifetime VIP sales window or recreate the old promotional price.

## 10. Provider/API failures are operational failures, not player fraud

A Google 5xx, authorization failure, expired OAuth token, quota/rate-limit problem, network outage, malformed provider response, pagination failure, or CK-Labs worker crash must not be classified automatically as fraud, chargeback abuse, hacking, regional-price abuse, or account compromise.

Do not grant new paid value from an unverified failed scan. Do not remove existing valid value merely because the reconciliation API is temporarily unavailable. Preserve the affected interval/case for retry or manual reconciliation.

Server credentials for `androidpublisher` must not be placed in the TycoonX mobile app, committed to the repository, exposed in support output, or accepted from the player.

## 11. Mandatory consumer-rights boundary

This operational recovery mechanism cannot reduce mandatory German/EU consumer rights. Google API retention limits, missing pagination data, a provider outage, or an automated reconciliation limitation do not eliminate any statutory right to conformity, cure, price reduction, termination, refund, withdrawal, damages, or another non-waivable remedy where its legal conditions are met.

In particular, current German BGB digital-product rules preserve remedies for defective digital products and allow price reduction under the statutory conditions. If an automated Google path cannot express the legally required result, CK-Labs must use an available lawful provider/manual route or otherwise provide the mandatory outcome.

## 12. Fail-closed regression matrix

Release-block the affected reconciliation path if any of these are true:

1. the scanner assumes the Voided Purchases API is an unlimited historical ledger;
2. `startTime` is requested more than 30 days back and failure is silently treated as a clean scan;
3. the watermark is advanced from `voidedTimeMillis` even though Google applies query filters to the time its systems see the record as voided;
4. only the first page is processed despite a `nextPageToken`;
5. a pagination token is used while new `startTime`/`endTime` values are incorrectly assumed to control that page;
6. a failed page advances the durable scan boundary;
7. overlap is processed without transaction-level idempotency and causes a second correction;
8. a multi-quantity Diamond flow relies on the default `includeQuantityBasedPartialRefund=false` while claiming partial refunds are covered;
9. cumulative `voidedQuantity` corrections exceed the original verified purchased quantity/value;
10. default `type=0` is assumed to include future subscription voids;
11. subscription renewals are collapsed solely by a shared `purchaseToken` after a future recurring product is introduced;
12. `voidedSource=developer` or `voidedReason=unacknowledged purchase` is automatically classified as player fraud;
13. any `voidedReason` automatically triggers permanent suspension or termination without transaction/account evidence and proportional review;
14. the same Google void is applied once from RTDN and again from the Voided Purchases scanner;
15. absence from the latest 30-day result is treated as proof that an old transaction can never have been voided;
16. a provider/API outage causes existing Lifetime VIP or unrelated purchased Diamonds to be removed;
17. a 30-Day VIP void creates a fractional, recurring, or duplicate VIP clock;
18. a historical Lifetime VIP record reopens a closed sales window;
19. OAuth credentials are delegated to the mobile client or exposed to a player; or
20. an API limitation is used to deny a mandatory consumer remedy.

## 13. Official checkpoints

Re-check before changing this production path:

- Google Play Developer API, `purchases.voidedpurchases.list`: https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.voidedpurchases/list
- Google Play Developer API, `VoidedPurchase`: https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.voidedpurchases
- Google Play Billing, Query Purchase History migration guidance: https://developer.android.com/google/play/billing/query-purchase-history
- Google Play RTDN reference: https://developer.android.com/google/play/billing/rtdn-reference
- Google Play Developer API, `purchases.productsv2`: https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.productsv2
- German BGB digital-product remedies, including §§ 327i, 327m and 327n: https://www.gesetze-im-internet.de/bgb/

Run the dedicated verifier after changing this gate or the related reconciliation rules:

```bash
node scripts/verify-tycoonx-google-play-voided-purchases.mjs
```
