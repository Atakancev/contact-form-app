# TycoonX Apple Signed-Data JWS Verification Release Gate

Last reviewed: September 8, 2026

This is an internal security, payment, and entitlement release gate for Apple App Store purchases used by TycoonX. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Apple Custom EULA, mandatory consumer law, or Apple rules.

The purpose is to make sure CK-Labs never grants, restores, revokes, refunds, or reassigns TycoonX paid value from Apple data that has merely been decoded but has not actually been verified as Apple-signed data for the correct TycoonX app and environment.

## P0 before relying on Apple signed data in production

### 1. Verification must happen before business logic

App Store Server Notifications V2, App Store Server API signed transactions, StoreKit-supplied signed transactions forwarded to the server, signed renewal information, and signed app-transaction data use JSON Web Signature (JWS) data.

For every signed Apple object that can influence paid value:

1. verify the JWS cryptographic signature and certificate chain;
2. verify that the signed object belongs to the expected TycoonX app and environment;
3. only then decode/map the verified fields into the payment and entitlement pipeline; and
4. apply the existing transaction-level idempotency, refund, restore, account-binding, and sales-window rules.

Do **not** base a grant, restore, revocation, refund correction, account transfer, fraud conclusion, or support decision on an unsigned JSON decode of the JWS payload.

A library call that merely parses Base64URL sections is not verification. A decoded payload that looks structurally valid is still untrusted until the verification step succeeds.

### 2. Prefer Apple's App Store Server Library verifier

For supported server languages, prefer Apple's maintained App Store Server Library `SignedDataVerifier` rather than implementing the certificate/JWS rules by hand.

As of this review, Apple's verifier takes the following security context:

- Apple root certificates;
- the expected `bundleId`;
- the expected App Store environment;
- `appAppleId` for production; and
- the `enableOnlineChecks` choice for certificate revocation/current-date checking.

Use the verifier methods appropriate to the object, including `verifyAndDecodeNotification`, `verifyAndDecodeTransaction`, `verifyAndDecodeRenewalInfo`, and `verifyAndDecodeAppTransaction` where relevant.

Do not replace these checks with a home-grown shortcut that verifies only the JWS signature bytes but omits certificate trust, app identity, or environment validation.

### 3. Anchor trust in Apple PKI, not in the incoming `x5c` chain itself

Apple-signed JWS data carries an `x5c` certificate chain. The incoming chain is evidence to validate, not a trust store supplied by the sender.

TycoonX must:

- provision trusted Apple root certificate authority certificates from Apple's official PKI source;
- build/verify the presented certificate chain back to a locally trusted Apple root;
- verify certificate validity and the Apple signing-purpose constraints required by Apple's verifier;
- reject a chain that cannot be anchored to an approved Apple root;
- never accept the last certificate in a request's `x5c` array as trusted merely because the request says it is a root; and
- never trust an arbitrary system/public Web PKI root just because it can validate a TLS-style certificate path.

Apple currently publishes multiple Apple root certificates and rotates/intermediates over time. Do not permanently pin a single leaf or WWDR intermediate certificate fingerprint as the only valid App Store signer.

Keep the approved Apple root set under normal CK-Labs change control. Review Apple's PKI page and the maintained App Store Server Library during dependency/security reviews and before an expiring/rotated certificate causes a production outage.

### 4. Enforce the expected JWS algorithm and certificate purpose

Apple currently documents App Store signed data with the `ES256` JWS signing algorithm. Do not allow an attacker-controlled `alg` header to select a weaker or unrelated verification mode.

When the maintained Apple library is used, let it enforce the current Apple certificate-chain and signing-purpose requirements. If CK-Labs ever implements equivalent verification manually, it must preserve Apple's current chain-purpose checks rather than validating only mathematical signatures.

In particular, a technically valid signature made by a certificate that is not authorized for App Store signed data must not become TycoonX payment authority.

### 5. Verify `bundleId`, `appAppleId`, and environment before mutation

Cryptographic proof that Apple signed an object is not enough if the object belongs to a different app or environment.

For production TycoonX Apple data:

- the verified `bundleId` must match the production TycoonX bundle identifier configured by CK-Labs;
- the verified `appAppleId` must match the TycoonX App Store app where Apple's signed object supplies/checks it;
- the verified environment must be production for production entitlement mutation; and
- sandbox/TestFlight/test data must remain isolated from production entitlements even if it reaches the same HTTP infrastructure.

Apple's current Node App Store Server Library requires `appAppleId` when `Environment.PRODUCTION` is selected and permits it to be omitted for sandbox verification. Do not weaken production verification by constructing a sandbox verifier and then using its results to mutate production.

A correctly signed Apple object for another CK-Labs app is **not** a valid TycoonX purchase.

### 6. Verify nested signed objects separately

An App Store Server Notification V2 has its own signed payload and can contain nested signed transaction or renewal information.

After verifying the outer notification, do not treat an inner JWS string as automatically verified merely because it arrived inside a verified outer object. Run the relevant nested `signedTransactionInfo` or `signedRenewalInfo` through the appropriate verifier before using transaction/product/refund fields from it.

The reverse is also true: a valid signed transaction does not make arbitrary surrounding JSON trusted.

Keep one clear rule in code: **every JWS whose claims affect paid value is verified before those claims are used.**

### 7. Live revocation checks and retryable failures must fail safely

Apple's maintained libraries expose `enableOnlineChecks`. In the current Node implementation, enabling it checks certificate expiration against the current date and performs online OCSP revocation checking; OCSP/network failures can surface as a retryable verification failure.

For newly received production notifications and current purchase/restore decisions, CK-Labs should use the maintained library's live verification mode unless there is a documented Apple-compatible reason not to.

A retryable verifier/OCSP/network failure is **not** proof that:

- the player committed fraud;
- the Apple purchase is refunded or invalid;
- a chargeback occurred;
- regional-price abuse occurred;
- the account is compromised; or
- an existing valid Lifetime VIP should be removed.

Quarantine/retry the verification or reconcile through authoritative Apple APIs. Do not grant new value from the unverified payload while waiting, and do not claw back existing value merely because Apple's revocation service or CK-Labs networking is temporarily unavailable.

Use bounded retry/backoff and operational alerting so an OCSP/provider incident does not create a retry storm.

### 8. Historical verification is not a shortcut around current state

The current Apple server-library implementations can use the signed object's `signedDate` as the certificate-validity reference when online checks are disabled. This can be useful when verifying older signed snapshots whose signing certificate is no longer current.

If CK-Labs uses that mode:

- use it only as an explicit historical/recovery decision, not as a fallback that silently disables live security checks after an error;
- remember that disabling online checks also disables the library's live revocation lookup;
- preserve the original verified `signedDate` and transaction identity;
- do not treat an old successfully verified snapshot as proof of today's entitlement state; and
- where current paid state matters, reconcile against current App Store Server API transaction/refund/entitlement evidence.

An old signed purchase snapshot can be genuine and still have been refunded or revoked later.

### 9. Verification failures must not create an attacker-controlled reconciliation path

If a JWS fails verification, do not trust fields decoded from that failed JWS to decide which TycoonX account or transaction should be mutated.

In particular, do not take an unverified `transactionId`, `originalTransactionId`, `productId`, `appAccountToken`, `bundleId`, or refund field and use it as if it were trusted evidence.

If the same transaction is already known from a trusted CK-Labs ledger record or another independently verified Apple path, reconciliation may use that trusted identifier to request fresh provider state. The invalid JWS itself does not upgrade its embedded identifiers into trusted facts.

### 10. Keep product rules intact after verification

Successful JWS verification proves authenticity/integrity and app context. It does **not** by itself decide the TycoonX business action.

After verification, still enforce product-specific rules:

- **Diamonds:** grant only the verified quantity/bundle attributable to that exact Apple transaction, exactly once. Purchased Diamonds do not expire merely because time passes.
- **30-Day VIP:** one verified purchase creates only the legally/configurationally intended one-time, non-renewing period of 30 consecutive days. Replayed signed data cannot restart or extend the clock unless there is a separate valid purchase that intentionally permits it.
- **Lifetime VIP:** remains a limited-time promotional one-time entitlement offered only during selected genuine sales windows. A valid signature on stale/replayed data, an old product identifier, or a historical transaction cannot reopen a closed sales window or create an expectation that Lifetime VIP remains continuously available.

A verified Apple transaction may still be pending, refunded, revoked, already fulfilled, sandbox-only, for another product, or otherwise ineligible for the requested mutation. Verification is necessary, not sufficient.

### 11. Keep refunds and current-state reconciliation idempotent

The same verified Apple transaction can appear through the device, `ONE_TIME_CHARGE`, App Store Server Notification V2, Notification History, support reconciliation, or App Store Server API calls.

Use the authoritative Apple transaction identity plus the TycoonX entitlement ledger so these paths converge on one outcome.

A fresh successful verification must not:

- grant Diamonds twice;
- restart 30-Day VIP;
- recreate Lifetime VIP after a verified refund;
- apply the same Diamond refund correction twice; or
- reverse a newer provider state merely because an older signed snapshot arrived later.

Use `signedDate` and current provider state as appropriate to prevent stale snapshots from overwriting newer state.

### 12. Protect Apple private keys separately from Apple root certificates

Apple root certificates used to verify Apple-signed data are public trust anchors. App Store Connect API private keys used by CK-Labs to authenticate outbound App Store Server API requests are secrets.

Do not mix these concepts in configuration or incident response.

- Root certificates may be deployed as public verification material.
- CK-Labs App Store Connect `.p8` private keys must remain server-side secret material with least privilege and rotation/revocation procedures.
- Never commit a real private key to this repository, bundle it in the TycoonX client, expose it in logs, or send it to support tooling.
- A compromise of a CK-Labs private key requires key revocation/rotation and incident review; changing Apple public roots is not the remedy.

### 13. Log enough to investigate without logging unnecessary signed payloads

For successful and failed verification, prefer structured metadata such as:

- environment;
- verification result/status;
- notification UUID where already verified;
- verified transaction/order identity;
- verifier/library version;
- retryable versus permanent verification class;
- correlation timestamp; and
- entitlement-ledger action.

Do not place full signed payloads, full Apple receipts, private keys, or unnecessary account/payment data into general analytics, crash logs, or support messages merely for convenience.

If a failed JWS is retained temporarily for security diagnosis, isolate access, apply a documented retention period, and do not expose unverified embedded fields as factual player/payment data.

### 14. Old/unsupported clients and provider outages

A legacy TycoonX client that cannot perform the newest StoreKit flow must not cause CK-Labs to weaken server verification globally. Maintain a provider-supported server reconciliation route where feasible, or require an app update for a purchase-specific flow when necessary for security.

If Apple changes its certificate chain, JWS schema, server library, API rules, or verification infrastructure:

- fail paid-value mutation safely;
- update the verifier/root configuration through controlled deployment;
- preserve already-valid TycoonX entitlements while current state is unresolved unless authoritative evidence requires correction;
- communicate a material purchase/restore outage when appropriate; and
- preserve mandatory consumer remedies for paid digital products.

A provider/security outage does not waive German/EU conformity, update, refund, withdrawal, liability, or other non-waivable rights.

## Release evidence required

Before production sign-off, CK-Labs should be able to show:

1. Apple App Store Server Library or equivalently complete JWS verification is used before paid-value mutation.
2. Trusted roots come from Apple PKI and are not learned from an incoming request.
3. `bundleId`, production `appAppleId`, and environment checks are configured for TycoonX.
4. Sandbox-signed data cannot mutate production entitlements.
5. A tampered JWS fails before business logic.
6. A validly signed Apple object for another app fails TycoonX app-identity validation.
7. A valid sandbox object fails production validation.
8. An untrusted/root-substituted `x5c` chain fails verification.
9. Nested transaction/renewal JWS data is verified before its claims are used.
10. Retryable OCSP/network verification failures are queued/retried without grant, clawback, or fraud classification.
11. Historical offline verification cannot silently become the live production default.
12. Old signed snapshots cannot overwrite newer refund/revocation state.
13. Duplicate verified delivery paths converge on one transaction-level entitlement action.
14. Diamonds, 30-Day VIP, and Lifetime VIP keep their separate product rules.
15. Apple private keys are absent from source/client/log output.
16. Certificate/root rotation has an owned operational review path.
17. Mandatory German/EU consumer rights remain intact during verification/provider incidents.

## Minimum regression matrix

| Scenario | Required result |
| --- | --- |
| Valid production TycoonX V2 notification | JWS, app identity, environment, and relevant nested signed data verify before mutation |
| One payload byte changed | Verification fails; no grant/revoke/refund action |
| JWS decoded without signature verification | Test must prove decoded claims cannot reach paid-value business logic |
| Attacker supplies own `x5c` root | Chain does not anchor to trusted Apple PKI root; no mutation |
| Wrong `bundleId` | Rejected as wrong app |
| Wrong production `appAppleId` | Rejected as wrong app |
| Sandbox signed payload sent to production endpoint | Remains sandbox; no production mutation |
| Correctly signed data for another CK-Labs app | No TycoonX mutation |
| Valid outer notification + corrupt nested `signedTransactionInfo` | Nested transaction claims are not used |
| OCSP/network temporarily unavailable | Retryable verification path; no new grant, clawback, or fraud flag |
| Old signed snapshot verified historically | Preserved as historical evidence only; current state reconciled before current entitlement decision |
| Replayed verified purchase | Exactly-once grant |
| Replayed verified refund | Exactly-once correction |
| Same transaction arrives from device + notification + history | One entitlement-ledger outcome |
| Purchased Diamonds age over time | No expiry solely from time |
| 30-Day VIP signed purchase replay | Original 30-day period is not restarted |
| Lifetime VIP old signed transaction after sale closes | Valid existing entitlement may restore if still valid, but sale does not reopen |
| Apple public certificate/root rotation | Controlled trust-store update; no shortcut disabling verification |
| CK-Labs App Store private key exposure test | Key is not in repository/client/logs; incident path is rotation/revocation |
| Verification incident affecting EU/German consumer | Mandatory remedies and non-waivable rights remain available |

## Canonical/legal synchronization rule

This gate currently hardens implementation of the already-disclosed rule that Apple/provider records and valid entitlement evidence control Apple purchase fulfillment and reconciliation. It does not change the player-facing meaning of Diamonds, 30-Day VIP, Lifetime VIP, refunds, or mandatory consumer rights.

If a future implementation change materially changes what CK-Labs promises players, how Apple purchase data is used, product availability, refund consequences, privacy handling, or a mandatory-rights consequence, update the canonical English TycoonX legal documents first and then synchronize all completed localized legal documents before release.

## Current references checked September 8, 2026

- Apple Developer: Receiving App Store Server Notifications.
- Apple Developer: Simplifying your implementation by using the App Store Server Library.
- Apple App Store Server Library Node/Java/Swift `SignedDataVerifier` documentation and maintained source.
- Apple Developer WWDC23: Meet the App Store Server Library.
- Apple PKI certificate authority repository.
- Existing TycoonX Apple refund, account-binding, purchase, restore, pricing, and provider-continuity gates.
