# TycoonX Apple Account Binding & Proportional Revocation Release Gate

Last reviewed: August 30, 2026
Owner: CK-Labs
Scope: Apple App Store In-App Purchases for TycoonX, including Diamonds, one-time 30-Day VIP, Lifetime VIP, purchase restoration, account compromise, entitlement migration, Family Sharing, refunds, and revocations.

This is an internal release and operations gate. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Apple Custom EULA, mandatory consumer law, or Apple rules.

The purpose is to prevent a valid Apple purchase from being duplicated onto multiple TycoonX accounts, silently attached to the wrong account, stolen through a restore flow, or over-revoked after a partial refund.

## P0 release rules

### 1. Bind new Apple purchases to the intended TycoonX account with `appAccountToken`

When a player is signed in to a TycoonX account and starts an Apple In-App Purchase, use a server-generated UUID as StoreKit's `appAccountToken` purchase option wherever the supported purchase path allows it.

For TycoonX:

- generate the token on the trusted CK-Labs side and map it to exactly one TycoonX account;
- use the same `appAccountToken` value for all ordinary Apple In-App Purchases made by that TycoonX account, following Apple's current recommendation;
- treat the token as an opaque internal identifier, not as a player-facing account ID and not as a place to encode email addresses, names, nicknames, or other unnecessary personal data;
- persist the mapping before or as part of the purchase-attribution workflow so a later server notification can be resolved without relying on the device that initiated the purchase;
- when Apple returns `appAccountToken` in a verified transaction, compare it with the expected TycoonX account mapping before mutating paid value; and
- never grant the same Apple transaction to a second TycoonX account merely because another device presents the transaction later.

Apple currently returns the `appAccountToken` supplied at purchase in signed transaction information. Apple's 2025 App Store Server guidance recommends using the same token for all In-App Purchases made by a given customer account.

### 2. A missing token is not automatically fraud

`appAccountToken` can be absent for legacy purchases, purchases made before TycoonX adopted the token, Family Sharing transactions, or purchase paths where the token was not set.

Therefore:

- do not reject an otherwise verified legitimate Apple purchase solely because `appAccountToken` is absent;
- do not invent a token locally and claim Apple signed it;
- use the verified `transactionId`, `originalTransactionId` where relevant, product ID, environment, `inAppOwnershipType`, `appTransactionId`, existing CK-Labs fulfillment records, and supported Apple server APIs to reconcile the purchase;
- where attribution remains ambiguous, quarantine the entitlement for support review rather than duplicating it across accounts; and
- never label the player fraudulent merely because an old Apple transaction lacks a modern attribution field.

### 3. Use `appTransactionId` as a continuity and collision signal, not as the sole login credential

Apple currently documents `appTransactionId` as a globally unique identifier for an Apple Account for a specific app. Apple states that it remains static across redownloads, refunds, repurchases, and storefront changes, and Family Sharing gives each family member a distinct value.

TycoonX should persist a verified `appTransactionId` where available and use it to support:

- restore/reinstall continuity;
- detection that multiple Apple transactions likely belong to the same Apple Account for TycoonX;
- support investigation when a Lifetime VIP restore appears on a different device;
- identifying suspicious attempts to bind the same Apple purchase history to multiple unrelated TycoonX accounts; and
- recovery after a device is lost or the app is reinstalled.

However:

- `appTransactionId` is not a TycoonX password, not proof that the current human is the original purchaser, and not permission to bypass TycoonX account security;
- do not automatically merge TycoonX accounts merely because they present the same Apple-account continuity signal;
- do not expose the identifier publicly or use it as a shareable support secret; and
- apply Family Sharing rules before treating an identifier difference as suspicious.

### 4. Resolve cross-account entitlement collisions safely

If a verified Apple transaction is already fulfilled to TycoonX account A and a later restore or device session attempts to attach the same transaction to TycoonX account B:

1. do not grant a second copy;
2. do not silently move the entitlement to account B;
3. record the collision and preserve the original fulfillment history;
4. compare the verified Apple transaction, `appAccountToken`, `appTransactionId`, `inAppOwnershipType`, refund/revocation state, and TycoonX account-security history;
5. require reasonable ownership verification before any supported migration; and
6. provide a support path for genuine account-compromise, account-recovery, or mistaken-binding cases.

For a valid account migration or correction that CK-Labs supports, move a restorable entitlement atomically rather than copying it. A migration must not create two active Lifetime VIP entitlements from one Apple non-consumable purchase.

Consumed Diamonds are not a transferable non-consumable restore right. Do not recreate already consumed Diamond value on a second account merely because a historical consumable transaction is discoverable.

### 5. Treat `Set App Account Token` as a privileged correction operation

Apple's current App Store Server API allows CK-Labs to use **Set App Account Token** to set a token for a transaction completed outside the app or to update an existing token. Apple states that the new value overrides the previous `appAccountToken` for that transaction.

Because that can change the server-side association of a purchase:

- never expose this endpoint directly to an untrusted client;
- require a verified server-side ownership decision before changing the association;
- record the old token, new token, Apple transaction identifier, reason, actor/service, and timestamp in a security/audit record with appropriate retention controls;
- do not use the endpoint as an automatic response to every client-side mismatch;
- if an account is suspected compromised, resolve account ownership before re-binding valuable purchases; and
- after a change, re-run entitlement reconciliation so the purchase exists on only the intended eligible TycoonX account.

A Set App Account Token update is an attribution correction. It must not create a second paid entitlement or erase mandatory consumer remedies.

### 6. Family Sharing must not look like purchase theft

For any TycoonX product where Apple Family Sharing is enabled or can affect entitlement state:

- inspect `inAppOwnershipType` and current Apple entitlement state;
- remember that Apple states `appAccountToken` is not available for family-shared transactions;
- a family member can have a different `appTransactionId` from the purchaser;
- a `FAMILY_REVOKE` event concerns shared access and must not automatically revoke a separate direct purchase owned by that TycoonX account; and
- if Family Sharing is not intended for Lifetime VIP or another product, verify the actual App Store Connect configuration rather than relying only on application assumptions.

### 7. Handle Apple's current proportional revocation fields exactly

Current Apple signed transaction data can distinguish:

- `REFUND_FULL`;
- `REFUND_PRORATED`; and
- `FAMILY_REVOKE`.

When `revocationType` is `REFUND_PRORATED`, use Apple's signed `revocationPercentage` for the affected transaction. In App Store Server signed payloads Apple expresses this percentage in milliunits from `0` to `100000`; StoreKit exposes the rounded percentage as a decimal from `0.0` to `100.0`.

For TycoonX:

- a full refund can remove the full paid value tied to that transaction, subject to mandatory law and the existing refund framework;
- a prorated refund must not be processed as though Apple refunded 100% of the purchase;
- calculate the correction against the original transaction's paid entitlement, not against the player's entire Diamond balance or all VIP history;
- if a Diamond bundle is partially refunded, correct only the proportional value attributable to that transaction and keep deterministic rounding/audit rules;
- for a 30-Day VIP partial refund, apply only the transaction-specific time/value correction supported by the provider state and mandatory law; do not disturb unrelated VIP purchases;
- for a binary Lifetime VIP entitlement, do not invent a fake fractional-Lifetime-VIP product state. If Apple reports a prorated refund, route the transaction through a product-specific reconciliation rule that preserves the unrefunded value/remedy and does not automatically treat a partial refund as a full refund; and
- `FAMILY_REVOKE` must be handled as Family Sharing loss of access, not automatically as a full cash refund to the current TycoonX account.

If the correct product-specific treatment is not deterministic, hold the transaction for support/legal review instead of over-correcting the player's account.

### 8. Keep transaction identity and accounting roles separate

For entitlement reconciliation, preserve the verified Apple transaction identifiers and state needed to identify the exact purchase.

For financial/accounting reconciliation, follow Apple's current instruction that **App Store Connect reporting is the source of truth for financial and accounting purposes**. Do not use `price` / `currency` fields from signed transaction payloads as the sole revenue-recognition ledger.

A support screenshot, device-local receipt display, or client cache is not stronger authority than a verified Apple signed transaction plus authoritative CK-Labs fulfillment records.

### 9. Minimum release evidence

Before considering Apple account-binding and restore behavior production-ready, retain dated QA evidence for at least:

1. a Diamond purchase made while signed into TycoonX account A with the expected `appAccountToken`, proving the verified transaction resolves to account A and grants once;
2. the same Apple transaction presented while signed into TycoonX account B, proving no duplicate grant and no silent transfer;
3. a Lifetime VIP reinstall/restore where `appTransactionId` supports continuity and the entitlement remains attached to the correct eligible TycoonX account;
4. a legacy or intentionally tokenless verified transaction proving absence of `appAccountToken` does not automatically become a fraud decision;
5. a controlled Set App Account Token correction proving the old/new association is audited and only one entitlement remains active;
6. a suspected-account-compromise case proving high-value entitlement migration requires ownership verification;
7. Family Sharing behavior, if enabled, proving a family entitlement is not confused with a direct purchase;
8. a `REFUND_FULL` test proving only the matching paid value is corrected;
9. a `REFUND_PRORATED` test proving `revocationPercentage` is applied transaction-specifically and is not rounded into a full refund; and
10. a `FAMILY_REVOKE` test proving the system checks for any separate direct purchase before removing access.

## Public-legal parity check

This gate does not by itself require a new public contract clause. The current TycoonX Terms and Purchases & Refunds Policy already cover account security, authoritative store/server records, entitlement restoration, refunds/reversals, duplicate grants, account compromise, and correction of only the affected paid value while preserving mandatory consumer rights.

If CK-Labs later introduces a player-facing entitlement-transfer feature, changes the public meaning of Lifetime VIP restoration, or begins exposing additional Apple-linked identifiers to players or third parties, review the canonical English Terms/Privacy wording first. A material change to public legal meaning requires reopening only the affected localized document type in the required locale order.

## Official Apple references checked August 30, 2026

- `appAccountToken`: https://developer.apple.com/documentation/appstoreserverapi/appaccounttoken
- StoreKit `appAccountToken(_:)`: https://developer.apple.com/documentation/storekit/product/purchaseoption/appaccounttoken(_:)
- App Store Server API: https://developer.apple.com/documentation/appstoreserverapi
- `JWSTransactionDecodedPayload`: https://developer.apple.com/documentation/appstoreservernotifications/jwstransactiondecodedpayload
- `revocationType`: https://developer.apple.com/documentation/appstoreserverapi/revocationtype
- StoreKit `revocationPercentage`: https://developer.apple.com/documentation/storekit/transaction/revocationpercentage
- WWDC25, Dive into App Store server APIs for In-App Purchase: https://developer.apple.com/videos/play/wwdc2025/249/
- WWDC25, What's new in StoreKit and In-App Purchase: https://developer.apple.com/videos/play/wwdc2025/241/

## Manual regression command

Run locally without GitHub Actions or paid services:

```bash
node scripts/verify-tycoonx-apple-account-binding.mjs
```
