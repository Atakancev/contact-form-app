# TycoonX Google Play `purchaseCompletionTime` Release Gate

**Status:** P0 payment / entitlement / reconciliation / consumer release gate  
**Owner:** CK-Labs  
**Last reviewed:** September 9, 2026  
**Scope:** Google Play one-time TycoonX purchases that are verified through `purchases.productsv2.getproductpurchasev2`, especially purchases that move from `PENDING` to `PURCHASED` after delayed payment.

## Purpose

This gate is a narrow companion to `TYCOONX_GOOGLE_PLAY_PENDING_PURCHASE_ATTRIBUTION_RELEASE_GATE.md`, `TYCOONX_GOOGLE_PLAY_ACKNOWLEDGEMENT_CONSUMPTION_RELEASE_GATE.md`, and `TYCOONX_PAYMENT_EVENT_ORDERING_REPLAY_RECONCILIATION_RELEASE_GATE.md`. Those controls already define the general pending-purchase, fulfillment, acknowledgement, and replay rules. This file closes one remaining timestamp-specific gap: how CK-Labs must interpret Google's `ProductPurchaseV2.purchaseCompletionTime` without shortening paid access, fabricating sale eligibility, rewriting historical prices, or confusing backend receipt time with provider completion time.

Google currently defines `purchaseCompletionTime` as the time a purchase was successful, meaning when the purchase state changed to `PURCHASED`. The field is not present until payment is complete. Google specifically gives a pending transaction as an example where the field remains absent until the user completes the required payment steps.

The founder-protective objective is simple: preserve Google's provider timestamp as evidence, but never let one timestamp become a substitute for verified purchase state, product identity, account binding, sale-window evidence, refund state, or mandatory consumer rights.

This file is an operational release gate. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, Google Play terms, transaction-specific checkout information, or mandatory law.

## 1. Core authority rule

For a Google Play one-time purchase:

- `purchaseStateContext.purchaseState == PURCHASED` remains a required provider-state condition before TycoonX grants paid value;
- `PENDING` means the purchase has not yet completed and grants no paid Diamonds, 30-Day VIP, or Lifetime VIP;
- `purchaseCompletionTime` is provider timestamp evidence, not independent entitlement authority;
- a populated `purchaseCompletionTime` must not bypass purchase-token verification, product/SKU validation, account attribution, test-purchase isolation, idempotency, refund/reversal checks, or applicable sale-window eligibility;
- an absent `purchaseCompletionTime` must not by itself be treated as fraud, account compromise, entitlement abuse, payment failure, or proof that a purchase never completed; and
- if the provider state and timestamp materially conflict, fail closed for irreversible paid-value mutation and re-query current Google Play Developer API evidence rather than guessing.

Never implement a rule equivalent to `if purchaseCompletionTime exists then grant`.

## 2. Preserve the provider timestamp exactly

When Google returns `purchaseCompletionTime`, CK-Labs should preserve the provider value in a durable transaction record in RFC 3339-compatible form and separately record the time TycoonX actually processed, granted, activated, or corrected the entitlement.

Do not overwrite Google's provider completion timestamp with:

- the time the player first opened the billing flow;
- the client-side purchase initiation time;
- the device clock;
- the time a `PurchasesUpdatedListener` callback happened to arrive;
- the time an RTDN or Pub/Sub message reached CK-Labs;
- the time a queue worker processed the event;
- a database `created_at` or `updated_at` value;
- the time the player next opened TycoonX;
- the time support investigated the purchase; or
- a guessed timestamp reconstructed from a screenshot, email, order display, or local cache.

A delayed RTDN or outage may make CK-Labs learn about a completed purchase later than Google completed it. Preserve both facts instead of collapsing them into one timestamp.

## 3. Missing field is not automatically an error

Google documents `purchaseCompletionTime` as absent until payment is complete. The field therefore has strong meaning when a purchase is still pending, but CK-Labs must not create an unsupported assumption that every legitimate historical or ordinary purchase record will always expose the field in every API version, migration path, cached object, or legacy support workflow.

If the field is absent:

1. inspect `purchaseStateContext.purchaseState` from a fresh server query;
2. validate the purchase token, package/app identity, product line items, account attribution, test context, and relevant acknowledgement/consumption state;
3. use other authoritative Google transaction evidence where the purchase is validly `PURCHASED`;
4. keep the actual TycoonX grant/activation timestamp separate; and
5. do not fabricate a provider completion timestamp merely to satisfy an internal schema.

If a schema requires a completion field, support an explicit `unknown/not supplied by provider` state rather than substituting server receipt time and later treating that substitute as Google evidence.

## 4. Pending Diamonds

A pending Google Play Diamond purchase grants **zero paid Diamonds**.

If the purchase later becomes `PURCHASED` and Google supplies `purchaseCompletionTime`:

- verify the current provider state and transaction identity;
- grant the purchased Diamond quantity exactly once;
- preserve the original product, quantity, price/currency evidence, and provider completion timestamp where available;
- record the separate TycoonX fulfillment timestamp; and
- acknowledge or consume according to the applicable Google one-time-product configuration after valid entitlement delivery.

Example: a player starts a 1,000-Diamond purchase at 18:00, completes cash payment the following morning, Google changes the state to `PURCHASED`, and CK-Labs receives the RTDN two hours later. TycoonX must not claim the paid Diamonds existed from 18:00, and it must not rewrite Google's completion time to the later RTDN receipt time. The 1,000 Diamonds are granted once after verified completion.

Purchased Diamonds do not expire merely because time passes. A late provider timestamp, delayed notification, app reinstall, or support reconciliation does not authorize deletion of unrelated legitimate purchased Diamonds.

## 5. One-time 30-Day VIP

TycoonX 30-Day VIP remains a **one-time, non-renewing entitlement lasting 30 consecutive days from activation or availability to the purchasing TycoonX account**.

For a Google purchase that begins as `PENDING`:

- do not activate VIP while the purchase is pending;
- do not backdate the paid VIP start to checkout initiation merely because the player began payment earlier;
- if Google later reports `PURCHASED`, treat `purchaseCompletionTime` as the earliest provider evidence that the transaction had successfully completed where that field is present;
- record the actual TycoonX activation/availability timestamp separately;
- never start the paid entitlement before valid completion;
- never silently burn part of the promised 30-day period merely because CK-Labs learned about completion late or fulfillment was delayed by a CK-Labs/provider outage; and
- replaying the same completion, RTDN, restore, support action, or server reconciliation must not create another 30-day period.

Example: a 30-Day VIP purchase remains pending for three days and then completes. TycoonX must not treat those three pending days as three already-consumed VIP days. If CK-Labs has a later delivery failure after the provider completed payment, apply the existing delivery/conformity-remedy process instead of silently shortening the paid benefit.

## 6. Lifetime VIP and genuine sales windows

Lifetime VIP remains a limited-time promotional one-time offering available only during selected genuine sales windows. CK-Labs may withdraw it from future sale, may never offer it again, and previous availability creates no expectation of continuous availability.

`purchaseCompletionTime` does **not** prove by itself that Lifetime VIP was lawfully on sale, that the displayed price was valid, that the account was eligible for a promotion, or that a stale client was authorized to initiate a new purchase.

For Lifetime VIP:

- preserve sale-window/campaign evidence separately from payment-completion evidence;
- preserve the product/SKU, offer or purchase-option evidence, checkout price/currency, and provider transaction identity;
- a pending transaction initiated during a genuine open sales window does not by itself reserve Lifetime VIP indefinitely;
- if Google later confirms a valid transaction that legitimately belongs to the earlier genuine sales window, reconcile that specific transaction under the existing pending-purchase gate and mandatory law;
- if a stale or unsupported client improperly exposes Lifetime VIP after the sales window closed, a later timestamp alone must not convert a configuration error into authorized general availability;
- honoring one valid delayed transaction never reopens Lifetime VIP for other users; and
- support, restore, migration, replay, outage recovery, or timestamp correction may never create a new Lifetime VIP sale after the relevant window is closed.

A historical valid Lifetime VIP entitlement remains restorable according to its authoritative transaction evidence without reopening future sales.

## 7. Price, currency, tax, and promotion boundaries

A delayed payment can cross a price change, regional-price update, tax/VAT change, currency transition, promotion end, or Lifetime VIP sales-window boundary. `purchaseCompletionTime` is not permission to retroactively recalculate the commercial terms of an already completed transaction.

For a completed purchase:

- preserve the final provider-confirmed transaction price and currency and the checkout/catalog evidence applicable to that transaction;
- do not reprice the completed purchase using today's regional price, exchange rate, VAT treatment, currency, Diamond bundle, or VIP price;
- a later price decrease does not automatically create a refund, credit, price-match, or additional Diamond/VIP right;
- a later price increase does not create an additional charge on an already completed one-time purchase;
- a change in tax, VAT, FX, or provider currency presentation during the pending period must be reconciled against the actual provider-confirmed transaction rather than a CK-Labs guess; and
- mandatory law remains controlling where it requires a different result.

Promotion eligibility and truthful discount claims need their own campaign evidence. Do not use `purchaseCompletionTime` to fabricate a claim that an expired countdown, crossed-out price, coupon, or regional promotion was still available when it was not.

## 8. Acknowledgement deadline

Google currently requires eligible purchases to be acknowledged after entitlement is granted. For a pending transaction, Google's three-day acknowledgement window begins when the purchase transitions from `PENDING` to `PURCHASED`, not while it remains pending.

Operationally:

- do not acknowledge a purchase while Google still reports `PENDING`;
- after verified transition to `PURCHASED`, fulfill valid entitlement and acknowledge/consume promptly under the applicable Google rules;
- where `purchaseCompletionTime` is present, it is useful evidence for when Google says the successful state began;
- do not calculate the acknowledgement deadline from checkout initiation, app launch, or first pending callback; and
- do not change TycoonX's contractual 30-Day VIP duration merely to match Google's separate acknowledgement deadline.

An acknowledgement failure that triggers a Google refund/revocation must be reconciled transaction-specifically under the existing refund and entitlement-correction controls.

## 9. Refunds, reversals, and chargebacks

`purchaseCompletionTime` records successful purchase completion. It is not the current refund, reversal, or chargeback state.

Therefore:

- query/use authoritative current Google refund, void, and purchase-state evidence when correcting paid value;
- preserve the original completion timestamp even if the transaction is later refunded or revoked;
- do not overwrite completion time with refund time;
- do not treat a historical completion timestamp as proof that a later refund is invalid;
- do not treat a late refund event as permission to correct an unrelated repurchase of the same SKU; and
- maintain transaction-level idempotency so repeated refund/void events cannot apply the same economic correction twice.

## 10. Test purchases and production isolation

Google test purchases must remain isolated under `TYCOONX_GOOGLE_PLAY_TEST_PURCHASE_PRODUCTION_ISOLATION_RELEASE_GATE.md`.

A test transaction can contain realistic purchase-state and timing behavior, including delayed completion. A valid-looking `purchaseCompletionTime` in test evidence does not create production revenue, unrestricted production Diamonds, production 30-Day VIP, or production Lifetime VIP.

Conversely, a legitimate production purchase is not a test purchase merely because the player is a tester, developer, administrator, or previously used a test build. Provider test context and transaction evidence control.

## 11. Outages, delayed notifications, and clock skew

If Google Play, Pub/Sub, CK-Labs infrastructure, authentication, queues, networking, or TycoonX is unavailable:

- backlog processing must preserve the provider completion timestamp where available;
- delayed notification receipt must not be rewritten as purchase completion;
- worker clock drift must not change the provider timestamp;
- server clock skew must not shorten a 30-Day VIP entitlement or fabricate promotion eligibility;
- notification arrival order must not override newer authoritative Google state; and
- recovery must remain idempotent.

If a provider timestamp is malformed, impossible, or materially inconsistent with the current purchase record, quarantine irreversible economic mutation, re-query Google, log the discrepancy, and resolve it without inventing a player-fault narrative.

## 12. Account compromise, fraud, and regional-price abuse

A delayed completion, unusually old `purchaseCompletionTime`, long pending period, late RTDN, clock discrepancy, or payment completed from another device does not by itself prove:

- fraud;
- hacking or exploitation;
- account compromise;
- regional-price abuse;
- entitlement abuse;
- chargeback abuse; or
- intentional misrepresentation of residence.

Use the existing risk, payment-provider, account-security, and regional-pricing evidence controls. Enforcement must be based on sufficiently reliable evidence and remain proportionate. Correct transaction-specific invalid value where justified without indiscriminately confiscating unrelated legitimate purchases.

## 13. Privacy and retention

`purchaseCompletionTime` is transaction metadata. Process it only for legitimate purposes such as:

- purchase verification and delivery;
- entitlement timing and restoration;
- refund/reversal/chargeback reconciliation;
- fraud and security review where relevant;
- financial and tax reconciliation where applicable;
- support and dispute resolution; and
- compliance and required recordkeeping.

Do not turn the timestamp into unrelated behavioral profiling, advertising targeting, or marketing segmentation. Apply GDPR purpose limitation, data minimization, accuracy, retention, access-control, and security principles.

## 14. Mandatory German/EU consumer rights

Nothing in this gate waives mandatory consumer rights. In particular, payment timestamps and internal reconciliation records cannot eliminate statutory rights concerning proper provision, conformity, remedies for defective digital products, withdrawal where applicable, refunds, damages, notice, consent, or other non-waivable protections.

German BGB § 327d requires covered digital products to be supplied free from product and legal defects. BGB § 327i preserves statutory remedies where a covered digital product is defective and the relevant requirements are met. A missing, delayed, or incorrectly processed Google timestamp therefore cannot be used as a contractual shortcut to deny an otherwise mandatory remedy.

## 15. Required implementation record

For each Google Play one-time purchase, persist or be able to recover, where available and legally appropriate:

- provider channel (`google_play`);
- package/application identity;
- purchase token;
- order ID where one exists, without relying on it as the universal primary key;
- product line item(s), quantity, and offer/purchase-option identifiers where present;
- current `purchaseStateContext.purchaseState`;
- raw/provider-normalized `purchaseCompletionTime` where Google supplied it;
- separate TycoonX receipt/processing timestamp;
- separate entitlement grant/activation timestamp;
- acknowledgement/consumption state;
- test-purchase context;
- account-attribution identifiers where intentionally supplied;
- region code where lawfully relevant;
- original transaction price/currency evidence available from the applicable purchase/accounting records;
- refund/void/reversal state and applied correction quantity/state;
- idempotency/economic-mutation record; and
- material support/manual correction history.

Do not require every optional provider field to exist before a legitimate purchase can be supported. Preserve explicit unknown states.

## 16. Regression scenarios

The release must pass at least these scenarios:

1. **Pending Diamonds complete later:** 1,000 Diamonds stay ungranted while `PENDING`, then grant exactly once after verified `PURCHASED` completion.
2. **Late RTDN:** Google completed the purchase at 09:00 but CK-Labs receives the RTDN at 11:00; provider completion and backend receipt remain separate.
3. **30-Day VIP pending for three days:** no VIP time is consumed during the pending period; the paid 30-day entitlement is not silently shortened.
4. **30-Day VIP delivery outage:** payment completes, but entitlement activation is materially delayed; the conformity/remedy path prevents silent loss of purchased access time.
5. **Missing timestamp on otherwise valid record:** the backend does not fabricate fraud or invent a provider timestamp and instead reconciles current Google state.
6. **Duplicate completion processing:** the same transaction reaches multiple workers; Diamonds or VIP are granted only once.
7. **Lifetime VIP closes while pending:** the pending record does not keep the public catalog open or create unlimited reservation rights.
8. **Valid delayed Lifetime transaction:** Google later confirms a transaction that legitimately belongs to the earlier genuine sales window; only that transaction is reconciled without reopening sales.
9. **Stale Lifetime UI after closure:** a late timestamp alone cannot legitimize a stale-client configuration error as a new general sale.
10. **Price changes during pending:** a completed purchase is not repriced to today's price merely because completion happened after the catalog changed.
11. **Currency/tax transition during pending:** provider-confirmed transaction evidence controls rather than an independently reconstructed FX/VAT calculation.
12. **Acknowledgement deadline:** the three-day Google acknowledgement period is measured from transition to `PURCHASED`, not from the original pending initiation.
13. **Refund after completion:** the original completion timestamp remains historical evidence while the current refund/void state controls the correction.
14. **Repurchase after refund:** an old refund/reversal for transaction A cannot revoke later genuine transaction B for the same product.
15. **Test delayed payment:** realistic test completion timing never creates production paid value.
16. **App reinstall during pending:** a later verified completion is recoverable without relying on the old device clock or client cache.
17. **Server clock skew:** CK-Labs clock error does not rewrite Google's timestamp, shorten 30-Day VIP, or invent promotion eligibility.
18. **Provider outage/backlog:** replayed or delayed events remain idempotent and chronological provider evidence is preserved.
19. **Malformed/future timestamp:** irreversible mutation is quarantined and Google is re-queried rather than guessing.
20. **Support screenshot:** an image showing a pending or completed time is not used as sole authority to grant Diamonds or Lifetime VIP.

## 17. Release blockers

Do not ship or keep enabled any Google Play purchase flow that:

- grants paid value from `PENDING`;
- uses `purchaseCompletionTime` as the only proof of purchase validity;
- overwrites provider completion time with local/server receipt time while representing it as Google evidence;
- backdates 30-Day VIP to pending initiation and silently shortens the paid 30-day period;
- allows a delayed timestamp to reopen Lifetime VIP sales;
- retroactively reprices a completed purchase because catalog, region, currency, tax, or promotion values changed;
- treats missing or delayed timestamp data as automatic fraud or abuse;
- lets test completion timing create production value;
- processes duplicate completion/refund events non-idempotently; or
- uses timestamp/reconciliation logic to waive mandatory consumer remedies.

## 18. Current source anchors

Reviewed September 9, 2026 against:

- Google Play Developer API, `purchases.productsv2` / `ProductPurchaseV2` (`purchaseCompletionTime`, purchase state, test context, product line items): https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.productsv2
- Google Play Billing, integrate / handling pending transactions: https://developer.android.com/google/play/billing/integrate#pending
- Google Play Billing, one-time purchase lifecycle: https://developer.android.com/google/play/billing/lifecycle/one-time
- Google Play Billing, fraud and abuse guidance: https://developer.android.com/google/play/billing/security
- German BGB § 327d: https://www.gesetze-im-internet.de/bgb/__327d.html
- German BGB § 327i: https://www.gesetze-im-internet.de/bgb/__327i.html
- Existing TycoonX pending-purchase, acknowledgement/consumption, test-purchase, 30-Day VIP, Lifetime VIP, pricing, refund, payment-ordering, and EU/German consumer release gates.

## 19. Localization impact

This gate does **not** change the canonical player-facing legal meaning. It makes implementation more precise about a Google provider timestamp while preserving existing public rules for pending purchases, paid-value delivery, 30-Day VIP, Lifetime VIP, prices, refunds, and mandatory rights.

Therefore no localized legal document should be reopened solely for this gate. If a future canonical English legal change materially changes what players are promised, update the canonical source first, then update all affected localized documents and `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md` in the required locale order.
