# TycoonX Apple Refund & Entitlement Reconciliation Release Gate

Last reviewed: September 7, 2026

This is an internal release and operations gate for Apple App Store In-App Purchases used by TycoonX. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Apple Custom EULA, mandatory consumer law, or Apple rules.

The purpose is to prevent duplicate grants, stale VIP access, lost Lifetime VIP restores, incorrect Diamond clawbacks, missed refunds, and privacy mistakes when Apple changes a transaction outside the running app.

## P0 before relying on Apple IAP in production

### 1. Keep the TycoonX product types distinct

Treat each paid TycoonX product according to the Apple product type actually configured in App Store Connect and the public legal meaning:

- **Diamonds:** consumable In-App Purchase.
- **Lifetime VIP:** non-consumable In-App Purchase unless a later Apple-approved implementation intentionally changes the product type and the public legal wording is reviewed first.
- **30-Day VIP:** one-time, non-renewing time-limited entitlement. If implemented as an Apple non-renewing subscription, TycoonX is responsible for determining the active 30-day access period and making the purchase available across the user's devices.

Do not collapse these products into one generic "paid" flag.

Apple's current `Transaction.currentEntitlements` behavior matters here:

- consumables do **not** appear in `currentEntitlements`;
- refunded or revoked products do **not** appear in `currentEntitlements`;
- non-consumables can appear while they remain valid; and
- the latest transaction for a non-renewing subscription can appear even when the time-limited service has already finished.

Therefore:

- do not attempt to restore spent Diamonds from `currentEntitlements`;
- do not treat mere presence of a 30-Day VIP non-renewing transaction in `currentEntitlements` as proof that the 30-day period is still active;
- calculate the 30-Day VIP active period from the authoritative transaction/account record and the disclosed activation rule; and
- restore Lifetime VIP only from a verified, non-refunded, non-revoked entitlement and keep the operation idempotent.

### 2. Use App Store Server Notifications V2 plus StoreKit transaction updates

Configure **App Store Server Notifications V2** for both production and sandbox and verify the actual endpoints in App Store Connect.

For every incoming V2 notification:

- verify Apple's signed JWS payload before acting on it;
- verify the expected bundle/environment/app context before mapping it to TycoonX;
- persist the relevant Apple transaction identity before entitlement mutation;
- deduplicate by `notificationUUID` and make the entitlement action idempotent;
- preserve `transactionId`, `originalTransactionId` where relevant, product ID, environment, `appAccountToken` where present, notification type/subtype, `signedDate`, and the resulting entitlement-ledger action; and
- if multiple snapshots affect the same transaction, do not let an older retry overwrite a newer state merely because it arrived later. Apple documents `signedDate` as the snapshot-signing time and recommends using the more recent signed state.

The iOS client may also see a verified purchase or transaction update. A single Apple purchase can therefore reach TycoonX through both client-side StoreKit and the server-notification path. Grant exactly once.

### 3. Handle `ONE_TIME_CHARGE` as a server-side purchase signal

Apple made the V2 `ONE_TIME_CHARGE` notification available in production on **May 27, 2025** for one-time In-App Purchases.

TycoonX may use a verified `ONE_TIME_CHARGE` transaction as a server-side purchase signal for Diamonds, Lifetime VIP, or a non-renewing 30-Day VIP where the configured product type matches.

However:

- the same purchase must not be granted once from the device and again from `ONE_TIME_CHARGE`;
- the Apple transaction identifier must map to one TycoonX fulfillment record;
- a retry or replay must not duplicate Diamonds or restart a 30-Day VIP period; and
- a later refund or revocation must reconcile against the same transaction record.

### 4. Treat pending, deferred, and interrupted purchases as unpaid until verified completion

StoreKit 2 can return `Product.PurchaseResult.pending` when the purchase still requires action from the customer. Apple explicitly uses **Ask to Buy** as one example. Strong Customer Authentication and other interrupted purchase flows can likewise complete after the original purchase UI has ended.

For TycoonX:

- `pending` is **not** a paid transaction and must grant no Diamonds, 30-Day VIP time, or Lifetime VIP access;
- do not start the 30-Day VIP clock while a purchase is pending;
- do not mark an order as successfully paid merely because the Apple confirmation sheet was shown or the app received a pending result;
- `userCancelled` must grant nothing and must not create a fake refund, reversal, fraud event, or entitlement correction;
- an Ask to Buy decline may result in no completed transaction being delivered at all, so absence of a later transaction must not trigger a clawback for value that was never granted;
- do not grant an `unverified` StoreKit transaction merely because its product identifier and local UI look plausible;
- keep a `Transaction.updates` listener active from app launch, not only while the store screen is visible, so an approved Ask to Buy or otherwise interrupted purchase can be processed when it completes later;
- if the app restarts, backgrounds, loses network connectivity, or the original purchase view disappears while approval/authentication is pending, the later verified transaction must still reconcile correctly;
- a later verified success can arrive through the direct purchase result, `Transaction.updates`, `ONE_TIME_CHARGE`, or server reconciliation, but the entitlement must be granted exactly once across all paths; and
- let the player continue using the app while approval/authentication is pending rather than blocking normal gameplay behind a spinner that implies payment already succeeded.

Finish a verified transaction only after TycoonX has durably completed the fulfillment work required for that transaction. Do not call `Transaction.finish()` before the entitlement/ledger action is safely recorded. If CK-Labs intentionally manages finishing from the server with Apple's Finish Transaction endpoint, use one consistent ownership model so the app and server do not race to finish before fulfillment.

For consumable Diamonds this sequencing is especially important: a replayed unfinished transaction must not grant the same Diamond bundle twice, while a prematurely finished transaction must not disappear before TycoonX has durably recorded the grant.

### 5. Do not rely on notification delivery alone

Apple currently documents the following retry behavior for **production** V2 notifications after an unsuccessful attempt: five retries at approximately **1, 12, 24, 48, and 72 hours** after the previous attempt. Sandbox does not provide the same retry behavior and may attempt delivery only once.

Therefore a valid TycoonX entitlement must not depend on one webhook arriving successfully.

Keep a recovery process that can use Apple's current server APIs, including:

- **Get Notification History** for missed V2 notifications;
- **Get Transaction History** for current transaction history/state where appropriate;
- **Get Refund History** when support or reconciliation needs authoritative refunded-transaction evidence; and
- StoreKit/current entitlement state for the device-side restore path.

Apple currently makes notification history available for up to **180 days in production** and **30 days in sandbox**. A historical notification is a snapshot of state at the time it was signed; where current status matters, re-check the authoritative current transaction state rather than assuming an old notification still represents the present state.

Run Apple's test-notification flow during release QA and after any infrastructure, domain, TLS, routing, proxy, or webhook-secret/certificate change.

### 6. Distinguish refund request, refund decision, and entitlement correction

Do not revoke paid value merely because a refund was **requested**.

Treat the Apple refund lifecycle as separate events:

- `CONSUMPTION_REQUEST`: Apple is asking for information that may inform a refund decision. It is not itself proof that a refund has been granted.
- `REFUND_DECLINED`: do not remove the paid entitlement merely because the request existed.
- `REFUND`: reconcile the corresponding TycoonX entitlement/value because Apple has refunded the transaction.
- `REVOKE`: handle the specific revocation reason and current entitlement state. Do not assume every revocation is the purchaser receiving a cash refund.

Apple's current signed transaction data also distinguishes the result through `revocationType`:

- `REFUND_FULL`: the transaction has a full refund;
- `REFUND_PRORATED`: the transaction has a prorated refund; and
- `FAMILY_REVOKE`: access was revoked through Family Sharing and must not be misclassified as a purchaser refund.

For `REFUND_PRORATED`, use Apple's final signed `revocationPercentage` as the authoritative refunded/revoked fraction for entitlement correction. Do **not** use the earlier `consumptionPercentage` submitted by CK-Labs as if it were Apple's final refund result, because Apple expressly states that the final refund percentage may differ from the consumption percentage supplied during decisioning.

There is an important unit boundary that must be regression-tested:

- in App Store Server API / signed transaction data, `revocationPercentage` is an integer in **milliunits from 0 through 100000**, where `40000` means 40%;
- in StoreKit's `Transaction.revocationPercentage`, the value is a `Decimal` percentage from **0.0 through 100.0**, where `40.0` means 40%; and
- never feed one representation into code written for the other representation. A milliunit/decimal mix-up can create a 1000x over-clawback or under-clawback.

For TycoonX Diamonds, a prorated correction must be derived from the original verified Diamond grant for that exact transaction and Apple's final `revocationPercentage`. Apply the correction idempotently and never remove more purchased Diamond value than that transaction originally granted. If the proportional result cannot be represented exactly in whole Diamonds, use one deterministic documented rounding rule that never expands the correction beyond the provider-authoritative refunded share, preserve any calculation remainder in the ledger if needed for later reconciliation, and never debit an unrelated Diamond purchase merely to make the arithmetic convenient.

For 30-Day VIP and Lifetime VIP, do not invent a fractional entitlement solely from a percentage field. Reconcile the current verified Apple transaction/entitlement state and the product's public legal meaning. A prorated monetary refund must not restart a 30-Day VIP clock, turn a one-time 30-Day VIP into recurring access, reopen a closed Lifetime VIP sales window, or silently create a new Lifetime VIP entitlement. Where an indivisible VIP entitlement cannot be safely mapped automatically from a prorated result, fail into a reviewable reconciliation state rather than guessing.

If a refund is later reversed or authoritative current state no longer contains a non-reversed refund, do not replay an old `REFUND` snapshot or stale local transaction to claw back value again. Apple documents `revocationPercentage` as absent when the refund is reversed; resolve current state before any compensating entitlement action.

Corrections must stay transaction-specific:

- refunded Lifetime VIP: remove the refunded Lifetime VIP entitlement, not unrelated purchases;
- refunded 30-Day VIP: correct the refunded time-limited entitlement according to the transaction state and mandatory law, without disturbing unrelated VIP purchases;
- refunded Diamonds: correct only the related purchased value under the TycoonX legal framework and mandatory law. Do not restore or remove unrelated Diamond purchases merely because they share the same product ID.

Never classify a lawful consumer refund request as fraud merely because the entitlement must be corrected after Apple grants the refund.

### 7. `CONSUMPTION_REQUEST` data requires separate customer consent and current V2 semantics

Apple's current **Send Consumption Information** endpoint uses the current `ConsumptionRequest` model and supports refund-request information for consumables, non-consumables, non-renewing subscriptions, and auto-renewable subscriptions. Apple's earlier **Send Consumption Information V1** path is deprecated and must not be the design target for new TycoonX work.

If TycoonX chooses to send consumption information to Apple:

- respond within Apple's current **12-hour** production window when the information is to be used for refund decisioning;
- send it only where the customer gave valid consent for this specific data sharing;
- do not use the App Tracking Transparency prompt as a substitute for this consent;
- if the customer did not consent, do not send consumption data in response to the `CONSUMPTION_REQUEST`; Apple's current documentation says not to respond, and a request with `customerConsented: false` is rejected;
- keep the submitted data accurate, transaction-specific, and no broader than needed for the refund purpose;
- review the TycoonX Privacy Policy and App Store privacy-label disclosures before enabling this data flow in production; and
- provide a way to stop future sharing if the consent is withdrawn or otherwise ceases to be valid.

The optional developer `refundPreference` is input to Apple's refund decision process. It is not permission to misstate consumption, obstruct a statutory remedy, or override Apple/mandatory consumer rights. If CK-Labs does not have a defensible preference, omit the optional preference rather than manufacturing one.

If `GRANT_PRORATED` is used for Diamonds, a non-consumable, or a non-renewing 30-Day VIP purchase, the submitted `consumptionPercentage` must follow Apple's current rules: greater than `0` and less than `100000` milliunits. If `deliveryStatus` is not `DELIVERED`, the consumption percentage must be `0`. Do not send `consumptionPercentage` for a future auto-renewable subscription because Apple calculates that value itself for that product type.

`consumptionPercentage` describes CK-Labs' accurate evidence of consumption for refund decisioning. It does not authorize CK-Labs to pre-emptively claw back that percentage and it is not the final refund percentage. Wait for the authoritative refund decision and signed revocation state.

**Release blocker:** do not enable Send Consumption Information in production until the CK-Labs implementation has a lawful consent flow, privacy-disclosure parity, a verified 12-hour response path, and correct V2 request/percentage validation.

### 8. Keep 30-Day VIP time logic server-authoritative

If 30-Day VIP uses Apple's non-renewing subscription type, Apple states that the app/developer is responsible for determining the active period and making the purchase available across devices.

TycoonX must therefore keep an authoritative record sufficient to determine:

- which Apple transaction started the entitlement;
- the disclosed activation/start timestamp;
- the exact end timestamp for the 30 consecutive days;
- whether the purchase was refunded or revoked;
- whether the same Apple transaction was already applied to this TycoonX account; and
- whether a restore is recovering the same valid period rather than creating 30 additional days.

Presence in `currentEntitlements` is not enough because Apple can return finished non-renewing transactions there.

A restore must recover the valid remaining/recorded period. It must not restart an expired 30-Day VIP merely because the historical Apple transaction is visible again.

### 9. Lifetime VIP restore and Family Sharing state

Keep a visible restore mechanism for restorable purchases and test Lifetime VIP after reinstall, device change, sign-out/sign-in, and TycoonX account relinking.

If Family Sharing is **not** intended for Lifetime VIP, verify the App Store Connect configuration and release evidence accordingly.

If Family Sharing is intentionally enabled, handle Apple's purchaser-versus-family-member entitlement state correctly. Apple documents that a family member may receive a `REVOKE` event when sharing ends, while the original purchaser may still own the product directly. Before removing Lifetime VIP after a Family Sharing revocation, verify whether that TycoonX account also has its own valid direct purchase.

Do not let Family Sharing behavior silently contradict TycoonX account-transfer restrictions or the public Lifetime VIP wording.

### 10. Support and order reconciliation

For Apple purchase support, preserve enough non-excessive transaction evidence to match:

- the TycoonX account;
- Apple product ID;
- `transactionId` / `originalTransactionId` where applicable;
- Apple Order ID when supplied by the user and resolved through Apple's supported server API;
- purchase date;
- refund/revocation state; and
- the exact TycoonX entitlement-ledger action.

A screenshot or local success screen is supporting evidence, not final transaction authority.

Where Apple has already refunded a purchase, support must not manually grant the same paid entitlement again merely because the client still displays stale local state.

### 11. Minimum release evidence

Before declaring the Apple IAP path fully payment-ready, retain dated QA evidence for at least:

1. successful Diamond purchase with one and only one grant even if both the client and `ONE_TIME_CHARGE` are received;
2. successful Lifetime VIP purchase, reinstall, Restore Purchases, and idempotent recovery;
3. successful 30-Day VIP purchase with the correct 30-day start/end calculation and a restore that does not restart the period;
4. Ask to Buy pending purchase that grants nothing before approval, then grants exactly once after a later verified completion through `Transaction.updates` even if the original store screen is gone;
5. Ask to Buy decline or `userCancelled` proving no entitlement is granted and no fake refund/clawback event is created;
6. interrupted/SCA-style purchase that leaves the original flow and later completes after backgrounding or relaunch, proving recovery through the persistent transaction listener/reconciliation path;
7. duplicate direct-purchase / `Transaction.updates` / `ONE_TIME_CHARGE` delivery proving one fulfillment only;
8. duplicate V2 notification replay proving no duplicate grant or duplicate clawback;
9. missed-webhook recovery using Notification History / transaction reconciliation;
10. `CONSUMPTION_REQUEST` with consent and without consent, proving no consumption data is sent in the no-consent case;
11. current Send Consumption Information sandbox test using `GRANT_PRORATED`, proving the resulting `REFUND` carries `REFUND_PRORATED` plus `revocationPercentage` and that the correction uses the final Apple value rather than the submitted consumption percentage;
12. sandbox prorated-refund timing test proving the response is sent inside Apple's current **five-minute sandbox decisioning window** even though the production response window is 12 hours;
13. a 40% server-side `revocationPercentage` represented as `40000` and the corresponding StoreKit percentage represented as `40.0`, proving the two unit systems cannot produce a 1000x correction error;
14. prorated Diamond refund proving only the matching transaction's refunded share is corrected, the action is idempotent, and unrelated Diamond purchases remain untouched;
15. `REFUND_DECLINED` proving the entitlement is not wrongly removed;
16. confirmed full `REFUND` proving only the matching paid value is corrected;
17. Lifetime VIP restore after refund proving refunded entitlement is not resurrected; and
18. Family Sharing revocation behavior if Family Sharing is enabled for any relevant non-consumable.

## Public-legal parity check

This operational gate does not itself require a new public contract clause. The current public TycoonX Terms and Purchases & Refunds Policy already distinguish Diamonds, one-time 30-Day VIP, Lifetime VIP, provider-side refunds/revocations, restoration, authoritative records, and mandatory consumer rights.

If CK-Labs actually enables Apple's Send Consumption Information data flow, the Privacy Policy and App Store privacy disclosures must be checked against the precise personal data sent and the consent flow **before** production use. A material new disclosure would require the canonical English Privacy Policy to be updated and the 25 localized Privacy pages to be reopened in the required locale order.

## Official Apple references checked September 7, 2026

- App Store Server Notifications V2: https://developer.apple.com/documentation/appstoreservernotifications/app-store-server-notifications-v2
- Responding to App Store Server Notifications: https://developer.apple.com/documentation/appstoreservernotifications/responding-to-app-store-server-notifications
- App Store Server Notifications changelog: https://developer.apple.com/documentation/appstoreservernotifications/app-store-server-notifications-changelog
- Get Notification History: https://developer.apple.com/documentation/appstoreserverapi/get-notification-history
- App Store Server API: https://developer.apple.com/documentation/appstoreserverapi/
- Send Consumption Information: https://developer.apple.com/documentation/appstoreserverapi/send-consumption-information
- `consumptionPercentage`: https://developer.apple.com/documentation/appstoreserverapi/consumptionpercentage
- `revocationType`: https://developer.apple.com/documentation/appstoreserverapi/revocationtype
- App Store Server API `revocationPercentage`: https://developer.apple.com/documentation/appstoreserverapi/revocationpercentage
- StoreKit `Transaction.revocationPercentage`: https://developer.apple.com/documentation/storekit/transaction/revocationpercentage
- Testing refund requests: https://developer.apple.com/documentation/storekit/testing-refund-requests
- `Transaction.currentEntitlements`: https://developer.apple.com/documentation/storekit/transaction/currententitlements
- `Product.PurchaseResult`: https://developer.apple.com/documentation/storekit/product/purchaseresult
- `Transaction.updates`: https://developer.apple.com/documentation/storekit/transaction/updates
- Testing Ask to Buy in Xcode: https://developer.apple.com/documentation/storekit/testing-ask-to-buy-in-xcode
- Preparing for Strong Customer Authentication: https://developer.apple.com/support/sca/
- Finish Transaction: https://developer.apple.com/documentation/appstoreserverapi/finish-transaction
- In-App Purchase overview: https://developer.apple.com/in-app-purchase/

## Manual regression command

Run locally without GitHub Actions or paid services:

```bash
node scripts/verify-tycoonx-apple-refunds.mjs
```
