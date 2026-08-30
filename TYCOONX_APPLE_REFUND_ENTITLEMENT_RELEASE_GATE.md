# TycoonX Apple Refund & Entitlement Reconciliation Release Gate

Last reviewed: August 30, 2026

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

### 4. Do not rely on notification delivery alone

Apple currently documents the following retry behavior for **production** V2 notifications after an unsuccessful attempt: five retries at approximately **1, 12, 24, 48, and 72 hours** after the previous attempt. Sandbox does not provide the same retry behavior and may attempt delivery only once.

Therefore a valid TycoonX entitlement must not depend on one webhook arriving successfully.

Keep a recovery process that can use Apple's current server APIs, including:

- **Get Notification History** for missed V2 notifications;
- **Get Transaction History** for current transaction history/state where appropriate;
- **Get Refund History** when support or reconciliation needs authoritative refunded-transaction evidence; and
- StoreKit/current entitlement state for the device-side restore path.

Apple currently makes notification history available for up to **180 days in production** and **30 days in sandbox**. A historical notification is a snapshot of state at the time it was signed; where current status matters, re-check the authoritative current transaction state rather than assuming an old notification still represents the present state.

Run Apple's test-notification flow during release QA and after any infrastructure, domain, TLS, routing, proxy, or webhook-secret/certificate change.

### 5. Distinguish refund request, refund decision, and entitlement correction

Do not revoke paid value merely because a refund was **requested**.

Treat the Apple refund lifecycle as separate events:

- `CONSUMPTION_REQUEST`: Apple is asking for information that may inform a refund decision. It is not itself proof that a refund has been granted.
- `REFUND_DECLINED`: do not remove the paid entitlement merely because the request existed.
- `REFUND`: reconcile the corresponding TycoonX entitlement/value because Apple has refunded the transaction.
- `REVOKE`: handle the specific revocation reason and current entitlement state. Do not assume every revocation is the purchaser receiving a cash refund.

Corrections must stay transaction-specific:

- refunded Lifetime VIP: remove the refunded Lifetime VIP entitlement, not unrelated purchases;
- refunded 30-Day VIP: correct the refunded time-limited entitlement according to the transaction state and mandatory law, without disturbing unrelated VIP purchases;
- refunded Diamonds: correct only the related purchased value under the TycoonX legal framework and mandatory law. Do not restore or remove unrelated Diamond purchases merely because they share the same product ID.

Never classify a lawful consumer refund request as fraud merely because the entitlement must be corrected after Apple grants the refund.

### 6. `CONSUMPTION_REQUEST` data requires separate customer consent

Apple's current **Send Consumption Information V2** endpoint supports refund-request information for consumables, non-consumables, non-renewing subscriptions, and auto-renewable subscriptions.

If TycoonX chooses to send consumption information to Apple:

- respond within Apple's current **12-hour** window when the information is to be used for refund decisioning;
- send it only where the customer gave valid consent for this specific data sharing;
- do not use the App Tracking Transparency prompt as a substitute for this consent;
- if the customer did not consent, do not send consumption data in response to the `CONSUMPTION_REQUEST`;
- keep the submitted data accurate, transaction-specific, and no broader than needed for the refund purpose;
- review the TycoonX Privacy Policy and App Store privacy-label disclosures before enabling this data flow in production; and
- provide a way to stop future sharing if the consent is withdrawn or otherwise ceases to be valid.

The optional developer `refundPreference` is input to Apple's refund decision process. It is not permission to misstate consumption, obstruct a statutory remedy, or override Apple/mandatory consumer rights.

**Release blocker:** do not enable Send Consumption Information in production until the CK-Labs implementation has a lawful consent flow, privacy-disclosure parity, and a verified 12-hour response path.

### 7. Keep 30-Day VIP time logic server-authoritative

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

### 8. Lifetime VIP restore and Family Sharing state

Keep a visible restore mechanism for restorable purchases and test Lifetime VIP after reinstall, device change, sign-out/sign-in, and TycoonX account relinking.

If Family Sharing is **not** intended for Lifetime VIP, verify the App Store Connect configuration and release evidence accordingly.

If Family Sharing is intentionally enabled, handle Apple's purchaser-versus-family-member entitlement state correctly. Apple documents that a family member may receive a `REVOKE` event when sharing ends, while the original purchaser may still own the product directly. Before removing Lifetime VIP after a Family Sharing revocation, verify whether that TycoonX account also has its own valid direct purchase.

Do not let Family Sharing behavior silently contradict TycoonX account-transfer restrictions or the public Lifetime VIP wording.

### 9. Support and order reconciliation

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

### 10. Minimum release evidence

Before declaring the Apple IAP path fully payment-ready, retain dated QA evidence for at least:

1. successful Diamond purchase with one and only one grant even if both the client and `ONE_TIME_CHARGE` are received;
2. successful Lifetime VIP purchase, reinstall, Restore Purchases, and idempotent recovery;
3. successful 30-Day VIP purchase with the correct 30-day start/end calculation and a restore that does not restart the period;
4. deferred/pending purchase that grants nothing before verified completion;
5. duplicate V2 notification replay proving no duplicate grant or duplicate clawback;
6. missed-webhook recovery using Notification History / transaction reconciliation;
7. `CONSUMPTION_REQUEST` with consent and without consent, proving no consumption data is sent in the no-consent case;
8. `REFUND_DECLINED` proving the entitlement is not wrongly removed;
9. confirmed `REFUND` proving only the matching paid value is corrected;
10. Lifetime VIP restore after refund proving refunded entitlement is not resurrected; and
11. Family Sharing revocation behavior if Family Sharing is enabled for any relevant non-consumable.

## Public-legal parity check

This operational gate does not itself require a new public contract clause. The current public TycoonX Terms and Purchases & Refunds Policy already distinguish Diamonds, one-time 30-Day VIP, Lifetime VIP, provider-side refunds/revocations, restoration, authoritative records, and mandatory consumer rights.

If CK-Labs actually enables Apple's Send Consumption Information data flow, the Privacy Policy and App Store privacy disclosures must be checked against the precise personal data sent and the consent flow **before** production use. A material new disclosure would require the canonical English Privacy Policy to be updated and the 25 localized Privacy pages to be reopened in the required locale order.

## Official Apple references checked August 30, 2026

- App Store Server Notifications V2: https://developer.apple.com/documentation/appstoreservernotifications/app-store-server-notifications-v2
- Responding to App Store Server Notifications: https://developer.apple.com/documentation/appstoreservernotifications/responding-to-app-store-server-notifications
- App Store Server Notifications changelog: https://developer.apple.com/documentation/appstoreservernotifications/app-store-server-notifications-changelog
- Get Notification History: https://developer.apple.com/documentation/appstoreserverapi/get-notification-history
- App Store Server API: https://developer.apple.com/documentation/appstoreserverapi/
- Send Consumption Information: https://developer.apple.com/documentation/appstoreserverapi/send-consumption-information
- `Transaction.currentEntitlements`: https://developer.apple.com/documentation/storekit/transaction/currententitlements
- In-App Purchase overview: https://developer.apple.com/in-app-purchase/

## Manual regression command

Run locally without GitHub Actions or paid services:

```bash
node scripts/verify-tycoonx-apple-refunds.mjs
```
