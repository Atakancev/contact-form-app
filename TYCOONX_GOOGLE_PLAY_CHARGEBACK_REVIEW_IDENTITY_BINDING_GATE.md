# TycoonX Google Play Chargeback Review Identity-Binding Gate

**Status:** P0 payment / entitlement / dispute-evidence companion gate

**Last reviewed:** September 8, 2026

**Applies to:** TycoonX Google Play `PendingRefundReviewNotification` handling and every CK-Labs call to `orders.reviewrefund` / `ReviewRefund`.

This gate is intentionally narrow. It supplements `TYCOONX_GOOGLE_PLAY_CHARGEBACK_REVIEW_RELEASE_GATE.md` and does not replace its 24-hour deadline, evidence-quality, privacy, product-reconciliation, account-compromise, or mandatory-rights rules.

## 1. Current Google Play identity contract

Google's current `orders.reviewrefund` API uses this request shape:

`POST https://androidpublisher.googleapis.com/androidpublisher/v3/applications/{packageName}/orders/{orderId}:reviewrefund`

The path requires the application `packageName` and the Google Play `orderId`. The request body separately requires the `pendingRefundToken`, `sampleContentProvided`, and `refundPreference`. A successful response body is empty. The API requires the `https://www.googleapis.com/auth/androidpublisher` OAuth scope.

Google's current RTDN reference says a `PendingRefundReviewNotification` contains a unique `pendingRefundToken`, `orderId`, `refundReason`, and, where applicable, `obfuscatedAccountId` and `obfuscatedProfileId`. Current pending reviews support `CHARGEBACK` as the refund reason.

Google also currently states that it records the **first** `ReviewRefund` API call for a notification and ignores subsequent calls even when later calls still return `OK`.

Official checkpoints reviewed for this companion gate:

- Google Play Billing, *Help Google dispute chargebacks*, last updated July 20, 2026: https://developer.android.com/google/play/billing/provide-refund-and-chargeback-suggestions
- Google Play Billing, *Real-time developer notifications reference guide*, last updated September 1, 2026: https://developer.android.com/google/play/billing/rtdn-reference
- Google Play Developer API, `orders.reviewrefund`, current API reference reviewed September 8, 2026: https://developers.google.com/android-publisher/api-ref/rest/v3/orders/reviewrefund

## 2. Bind one immutable review identity before submission

For every pending review, CK-Labs must bind one immutable provider identity tuple before a worker can call Google:

- expected TycoonX Android application / `packageName`;
- Google `orderId` from the same pending-review notification;
- Google `pendingRefundToken` from the same pending-review notification;
- raw notification `refundReason` and notification version;
- Pub/Sub `messageId` for delivery deduplication; and
- the durable TycoonX account/order reference resolved from authoritative server records.

The `packageName`, `orderId`, and `pendingRefundToken` used in the outbound `ReviewRefund` call must come from the **same durable review case**. Never combine the path for Order A with the token from Order B, even if both belong to the same player.

Do not obtain any of these provider identifiers from a mobile-client request, URL/query parameter supplied by the player, support-ticket free text, nickname, email address, screenshot, or other untrusted input when constructing the Google API call.

## 3. Package-name fail closed

Before a pending-review notification can create a production dispute case, its top-level application identity must match the production TycoonX Android application expected by the backend.

A correctly formatted RTDN belonging to another application must not:

- open a TycoonX chargeback case;
- submit a TycoonX `ReviewRefund` request;
- remove Diamonds;
- end one-time 30-Day VIP;
- revoke Lifetime VIP; or
- create a fraud or entitlement-abuse sanction in TycoonX.

If CK-Labs operates multiple Android applications, application routing must happen before entitlement or dispute logic. A shared Pub/Sub consumer must not infer the target game merely from the product ID or player identity.

## 4. `orderId` and `pendingRefundToken` are separate namespaces

Do not use `orderId` and `pendingRefundToken` interchangeably.

- `orderId` identifies the Google Play purchase/order in the API path.
- `pendingRefundToken` identifies the pending refund review and belongs in the request body.
- Pub/Sub `messageId` identifies a delivery message and is not the business identity of the order or review.
- A TycoonX internal entitlement ID is a separate namespace again.

Never derive one identifier from another, truncate them into a shared key, or store them in a single overloaded `transaction_id` field that loses which namespace it came from.

If Google ever sends distinct valid `pendingRefundToken` values concerning the same `orderId`, preserve them as distinct review cases unless current Google documentation says otherwise. Do not collapse them only because the order is the same. Later entitlement reconciliation must still remain transaction-specific and must not apply the same final refund twice.

## 5. Prevent cross-order first-call poisoning

Because Google's current workflow records the first API call and ignores later calls, a cross-order mix-up can permanently waste CK-Labs' review opportunity even if a later corrected call returns `OK`.

Immediately before submission, the worker must atomically verify that:

1. the review case is still `ready_to_submit` and has not already recorded a first submission;
2. the outbound path `packageName` equals the case's expected application;
3. the outbound path `orderId` equals the case's immutable Google order;
4. the body `pendingRefundToken` equals the case's immutable pending-review token;
5. the selected `refundPreference` and evidence package are the frozen version approved for this case; and
6. no newer reconciliation state has made submission obsolete.

If any binding check fails, **do not call Google**. Quarantine the case for reconciliation. Never "fix" the request by searching for a nearby order/token or by picking the first Google order attached to the TycoonX account.

## 6. Never submit `REFUND_PREFERENCE_UNSPECIFIED` as a fallback

Google's current API enum includes `REFUND_PREFERENCE_UNSPECIFIED` and states that the value is not used.

TycoonX must never turn an unknown, null, timed-out, or unreviewed internal decision into `REFUND_PREFERENCE_UNSPECIFIED` merely to satisfy serialization or beat the 24-hour deadline.

The only intentional current preferences are:

- `APPROVE`;
- `DECLINE`; or
- `NEUTRAL`.

If CK-Labs genuinely has no justified preference, use `NEUTRAL` with truthful evidence where appropriate. If the integration encounters an unknown future enum or cannot build a valid request, fail closed and preserve the case rather than invent a preference.

## 7. An empty `2xx` body is not a refund outcome

Google's current `ReviewRefund` success response has an empty body. A successful HTTP/API response therefore means only that the review submission call succeeded under the provider's API semantics.

It does **not** prove that Google:

- granted a refund;
- rejected a refund;
- finalized a chargeback;
- restored a payment;
- confirmed that the purchase was authorized; or
- authorized TycoonX to change a paid entitlement.

The existing rule remains: the review call itself cannot grant or revoke value. Final Diamonds, 30-Day VIP, Lifetime VIP, refund, void, reversal, and chargeback reconciliation must use authoritative Google transaction/refund/void state plus the TycoonX entitlement ledger.

## 8. OAuth and credential boundary

The `androidpublisher` OAuth authority used for `ReviewRefund` is a server-side provider credential boundary.

CK-Labs must:

- keep Google Play Developer API credentials and refresh material off the mobile app and out of player-facing JavaScript;
- never expose service-account private keys or access tokens in support output, logs intended for users, crash reports, analytics payloads, or repository prose/examples;
- authorize only the server component that needs the relevant Play Developer API capability;
- rotate/revoke credentials promptly after a credible compromise; and
- treat a credential outage or permission error as an operational failure, not evidence that the player committed chargeback abuse.

A mobile client may request a support/status refresh, but it must never be able to choose the Google `orderId`, `pendingRefundToken`, preference, or evidence that the privileged backend submits.

## 9. Obfuscated IDs are attribution aids, not cardholder proof

`obfuscatedAccountId` and `obfuscatedProfileId`, when present, can help CK-Labs associate the Google transaction with the correct TycoonX account/profile. They are not proof that the named human personally authorized the card/payment method or that an account-compromise report is false.

Missing obfuscated identifiers also do not by themselves make a purchase fraudulent. Resolve attribution through authoritative provider and CK-Labs records. If identity evidence conflicts, preserve the conflict for reconciliation instead of selecting the interpretation that produces the largest entitlement clawback.

## 10. Product safeguards remain unchanged

### Purchased Diamonds

A pending chargeback review cannot remove Diamonds by itself. Only a later authoritative refund/void/reversal outcome can trigger a transaction-specific lawful correction. Duplicate review notifications or distinct review cases must never cause the same Diamond grant to be clawed back twice.

### One-time 30-Day VIP

The product remains one non-renewing entitlement lasting **30 consecutive days**. Opening or responding to a pending chargeback review cannot restart, extend, shorten, or duplicate the period by itself.

### Lifetime VIP

Lifetime VIP remains a limited-time promotional one-time entitlement available only during selected genuine sales windows. A pending review, review-token retry, stale Android client, restored historical order, or dispute workflow cannot reopen a closed Lifetime VIP sales window. A separately valid historical Lifetime VIP remains protected unless authoritative provider state and applicable law justify correction of that specific purchase.

## 11. Mandatory consumer and account-security boundary

Nothing in this gate converts use of a payment dispute mechanism into automatic fraud. A lawful refund, chargeback, withdrawal, non-supply, conformity, account-compromise, or unauthorized-payment claim must remain subject to the rights and remedies that cannot be waived under applicable German/EU or other mandatory law.

If CK-Labs misses the 24-hour collaborative-review window, misroutes an RTDN, loses API credentials, submits the wrong case, or suffers a provider outage, that operational failure does not itself prove player misconduct and cannot justify confiscating unrelated legitimate purchases.

## 12. Minimum regression matrix

Keep dated evidence for at least these cases:

- [ ] valid TycoonX notification -> matching package, order and token -> one intended review call;
- [ ] Order A path + Order B `pendingRefundToken` -> blocked before Google call;
- [ ] correct token + wrong `orderId` -> blocked before Google call;
- [ ] another CK-Labs application's notification -> does not enter TycoonX entitlement/dispute handling;
- [ ] player-supplied order/token values -> ignored for privileged request construction;
- [ ] duplicate Pub/Sub delivery with same `messageId` -> no duplicate evidence collection/submission;
- [ ] same order with a distinct provider-issued pending-review token -> preserved as a distinct review case, not silently collapsed;
- [ ] `REFUND_PREFERENCE_UNSPECIFIED` fallback attempt -> blocked;
- [ ] genuinely inconclusive evidence -> intentional `NEUTRAL`, not guessed `DECLINE`;
- [ ] Google returns successful empty response -> no entitlement mutation;
- [ ] ambiguous network timeout around first call -> no second materially different submission;
- [ ] missing `obfuscatedAccountId` / `obfuscatedProfileId` -> no automatic fraud finding;
- [ ] credible account-compromise report -> separate security investigation, not automatic chargeback-abuse sanction;
- [ ] final void/refund arrives later -> exactly one transaction-specific entitlement correction;
- [ ] two review cases relating to one order -> no double Diamond clawback or duplicate VIP correction;
- [ ] expired/revoked Google API credential -> operational alert/reconciliation, no player punishment;
- [ ] 30-Day VIP review -> no restart or conversion into recurring billing;
- [ ] closed Lifetime VIP sales window -> dispute processing cannot reopen checkout;
- [ ] provider outage -> no unrelated entitlement confiscation; and
- [ ] mandatory German/EU remedy applies -> preserved notwithstanding this internal workflow.

## 13. Release blocker

Do not enable automated Google Play chargeback-review submission for TycoonX unless the implementation can prove package/order/token binding, first-call race protection, intentional preference selection, server-only provider credentials, and separation between review submission and final entitlement state.

When evidence is incomplete or identifiers conflict, **fail closed on irreversible paid-value mutation and preserve the player's mandatory rights while CK-Labs reconciles authoritative records**.
