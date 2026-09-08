# TycoonX Apple Get Refund History V2 Reconciliation Release Gate

Last reviewed: September 8, 2026

This is an internal release, support, privacy, and payment-reconciliation gate for TycoonX Apple App Store purchases. It complements `TYCOONX_APPLE_REFUND_ENTITLEMENT_RELEASE_GATE.md`, `TYCOONX_APPLE_SIGNED_DATA_JWS_VERIFICATION_RELEASE_GATE.md`, and `TYCOONX_APPLE_TRANSACTION_HISTORY_V2_RECONCILIATION_RELEASE_GATE.md`. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Apple rules, or mandatory consumer law.

The purpose is narrow: make Apple's current **Get Refund History** endpoint safe to use without missed pages, duplicate Diamond clawbacks, stale revision checkpoints, cross-account disclosure, or accidental changes to 30-Day VIP or Lifetime VIP.

## P0 before using Get Refund History in production

### 1. Use the current V2 endpoint, not the deprecated V1 assumptions

Use Apple's current endpoint:

`GET https://api.storekit.apple.com/inApps/v2/refund/lookup/{anyTransactionId}`

Use the sandbox host only for sandbox data:

`GET https://api.storekit-sandbox.apple.com/inApps/v2/refund/lookup/{anyTransactionId}`

Apple deprecated **Get Refund History V1**. Do not carry V1 assumptions into V2 code. In particular, V1 could return up to 50 refunded transactions in one response, while current V2 returns at most **20** per page and uses `revision` pagination.

The path parameter `anyTransactionId` may be an `originalTransactionId`, `transactionId`, or `appTransactionId` that belongs to the customer for the app. Treat that identifier as a provider lookup key, not as authorization to mutate a TycoonX account.

### 2. Treat the endpoint as customer-level refund history, not a single-order lookup

One valid `anyTransactionId` can be used to retrieve the customer's refund history for TycoonX, not merely the refund state of the one transaction supplied in the path.

That creates an important privacy and support boundary:

- keep App Store Server API credentials and calls server-side;
- do not expose a public "proxy" endpoint that accepts an arbitrary Apple transaction ID and returns Apple's raw refund-history response;
- do not display another customer's full Apple refund history merely because a support agent or player supplied a transaction identifier;
- bind the lookup to the authenticated TycoonX account, the existing CK-Labs payment ledger, or a controlled support case before exposing or mutating account data;
- after JWS verification, confirm that returned transactions belong to the expected TycoonX app/environment and reconcile them against the correct account records; and
- log only the minimum transaction metadata needed for support and audit. Do not copy full signed payloads into ordinary analytics, chat, or support notes.

Knowing or guessing an Apple transaction identifier is not proof of ownership of the corresponding TycoonX account.

### 3. Start complete scans without a revision and paginate until `hasMore=false`

For a customer's **full** refund history, start without a `revision`.

Each `RefundHistoryResponse` includes:

- `signedTransactions`, containing up to 20 Apple-signed refunded transactions;
- `hasMore`; and
- a `revision` token.

If `hasMore=true`, request the next page with the exact `revision` returned by the previous page. The `revision` is required for subsequent pages.

A full scan is not complete merely because the first page returned HTTP 200.

Do not:

- stop after the first 20 results;
- invent or parse meaning out of `revision`;
- substitute a revision copied from another customer;
- use a revision from production against sandbox, or vice versa;
- treat `revision` as a TycoonX user ID, Apple transaction ID, entitlement ID, or fraud signal; or
- advance the durable customer checkpoint until all pages for that scan have been verified and reconciled.

### 4. Make the revision checkpoint crash-safe and customer-scoped

Apple says the revision from the final results page can be stored and reused later to request newly refunded transactions since the previous lookup.

Use that as an optimization, not as the source of truth for entitlement identity.

Persist a refund-history cursor with enough scope to prevent cross-use, for example:

- TycoonX account/payment-ledger identity;
- Apple app/bundle identity;
- production or sandbox environment;
- the customer grouping used for the Apple lookup;
- final completed `revision`; and
- completion timestamp / reconciliation status.

Only replace the durable revision after every page before it has been safely processed. If page 2 of 4 fails, crashes, rate-limits, or contains an unverifiable JWS, resume or restart safely. Do not save page 1's revision as if the customer were fully reconciled.

A stale or missing local revision is an operational recovery issue. It is not player fraud, chargeback abuse, hacking, regional-price abuse, or entitlement abuse.

### 5. Verify every returned JWS before using any refund claim

`signedTransactions` contains Apple-signed JWS transactions.

For every item:

- verify the Apple JWS signature and certificate trust according to the existing TycoonX Apple signed-data gate;
- verify expected TycoonX bundle/app identity and environment;
- reject sandbox/TestFlight data from production entitlement mutation;
- bind the verified Apple transaction identity to the CK-Labs ledger before changing paid value; and
- preserve the provider refund/revocation facts needed for a traceable, idempotent correction.

An HTTP 200 from Get Refund History authenticates the API response channel but does not remove the requirement to verify each signed transaction before trusting its claims.

Never decode a failed JWS and use its attacker-controlled `transactionId`, product ID, refund fields, or account token to choose which player to debit.

### 6. Understand what an empty result does and does not prove

Apple says a successful response can contain an empty `signedTransactions` array when the customer has no **App Store-approved refunds** returned by this history.

An empty response does not, by itself, prove any of the following:

- that no refund request is pending;
- that no mandatory consumer remedy exists;
- that no chargeback/payment reversal exists through a different authoritative channel;
- that a historical entitlement is currently valid;
- that the player committed no abuse; or
- that CK-Labs may restore value that another current Apple transaction state says is revoked.

Refund History is authoritative evidence for App Store-approved refunds it returns. It is not a universal "no dispute exists" certificate.

### 7. Converge Refund History and `REFUND` notifications onto one refund fact

Apple says the refund information returned by Get Refund History is the same information represented by one or more `REFUND` App Store Server Notifications.

Therefore:

- a refund first processed from a `REFUND` notification and later seen in Refund History is still one refund;
- a refund first discovered through Refund History and later replayed by Notification History is still one refund;
- do not subtract Diamonds once per delivery path;
- do not cancel 30-Day VIP twice;
- do not remove Lifetime VIP twice; and
- keep one transaction-specific cumulative correction budget.

Use the verified Apple transaction/refund identity as the business idempotency key. The history `revision`, notification UUID, HTTP request ID, or support ticket ID is not the entitlement idempotency key.

### 8. Respect the refund ordering without treating it as a grant sequence

Apple currently sorts `RefundHistoryResponse.signedTransactions` in ascending order by `revocationDate`.

That ordering is useful for deterministic reconciliation, but it does not mean each row is an independent purchase grant or that the newest row automatically overrides all other provider state.

A historical refunded transaction must never be replayed as a new Diamond purchase merely because the history worker encounters it for the first time.

If multiple provider snapshots or APIs materially disagree about a transaction, quarantine that transaction for reconciliation rather than choosing the outcome that removes the most player value.

### 9. Keep Diamond corrections transaction-specific

Get Refund History can return App Store-approved refunds for consumables, including TycoonX Diamonds.

For Diamonds:

- locate the original verified Diamond grant for that exact Apple transaction;
- apply the provider-authoritative refund/revocation result idempotently;
- if Apple provides a prorated refund percentage, use the normalized percentage rules in the existing Apple refund gate;
- never remove more purchased Diamond value than that transaction originally granted;
- never debit an unrelated Diamond purchase merely because it uses the same product ID;
- never treat free, promotional, support, test, or complimentary Diamonds as part of a paid Apple refund unless the ledger proves they were the value granted by that exact transaction; and
- if the player's current wallet is lower than the transaction-specific correction amount, follow the existing lawful negative-balance/reconciliation policy instead of inventing a second charge or unrelated clawback.

Example: if transaction A granted 500 Diamonds and transaction B granted another 500, a full refund of A has a maximum transaction-specific purchased-value correction of 500. Seeing A through both `REFUND` notification and Refund History must not create a 1,000-Diamond deduction.

### 10. Preserve the exact 30-Day VIP product meaning

One-time 30-Day VIP remains a non-renewing entitlement lasting **30 consecutive days** under the canonical TycoonX legal meaning.

A Refund History entry can support correction of the refunded transaction. It cannot:

- restart the 30-day clock;
- convert the product into a subscription;
- shorten or remove a different 30-Day VIP purchase;
- stack a second correction for the same refund; or
- treat a mere empty refund-history response as proof that an expired 30-Day VIP should become active again.

If the product is indivisible and provider refund evidence cannot be mapped safely to current access, place the transaction into reconciliation rather than guessing.

### 11. Preserve Lifetime VIP sales-window rules

Lifetime VIP remains a limited-time promotional one-time entitlement available only during genuine selected sales windows. It may be withdrawn from sale, may never return, and creates no expectation of continuous availability.

Refund History can show that a historical Lifetime VIP transaction was refunded. It cannot reopen Lifetime VIP for sale.

Conversely, absence from Refund History alone is not sufficient to manufacture or restore Lifetime VIP. Restoration must still use verified historical purchase/entitlement evidence and current Apple state under the existing Lifetime VIP and Apple transaction-history gates.

An old app version, stored revision, historical transaction ID, support tool, or refund-history result must never bypass the current server-side sales-window switch.

### 12. Do not turn refund history into automatic misconduct findings

An App Store-approved refund is a payment/refund event, not automatically proof of:

- hacking or exploit use;
- account compromise;
- friendly fraud;
- chargeback abuse;
- regional-price abuse;
- promotion abuse; or
- entitlement abuse.

Apply a broader suspension or termination only when separate reliable evidence supports it and the TycoonX Terms and mandatory law permit the action.

A refund caused by CK-Labs delivery failure, product defect, platform/provider issue, or a valid consumer remedy must not be reclassified as player misconduct merely because it appears in Refund History.

### 13. Respect rate limits and provider outages

Apple currently lists Get Refund History at **10 requests per second in production**. Sandbox limits are **10%** of production. Apple reserves the ability to change limits.

If Apple returns HTTP `429` / `RateLimitExceededError`:

- honor `Retry-After`, which Apple documents as a UNIX timestamp in milliseconds;
- keep the same idempotent reconciliation job retryable;
- do not advance the durable revision past unprocessed pages;
- do not infer that no refund exists;
- do not grant or restore paid value merely because the lookup is temporarily unavailable; and
- do not flag the player for fraud or abuse because CK-Labs or Apple hit a rate limit.

Treat `5xx`, network failures, expired server credentials, and Apple service incidents similarly as operational/provider failures unless separate evidence says otherwise.

### 14. Preserve mandatory German/EU consumer remedies

This gate is an operational protection, not a waiver of consumer rights.

For German consumer contracts involving digital products, the BGB digital-product regime can provide statutory rights including cure (`Nacherfüllung`), contract termination, price reduction, damages, and repayment consequences where the legal requirements are satisfied.

A missing refund-history row, an expired revision, a provider outage, or an internal CK-Labs ledger problem cannot contractually erase a mandatory remedy.

Where Apple is the merchant/payment channel for an App Store purchase, follow Apple's required refund/payment processes while CK-Labs still performs its own legally required obligations for the TycoonX digital product. Do not promise a remedy that only Apple can technically execute, and do not claim Apple responsibility eliminates non-waivable CK-Labs obligations.

### 15. Data minimization, retention, and support access

Refund history is payment-related personal data.

Use it only for legitimate support, accounting, fraud prevention, entitlement reconciliation, legal compliance, and related purposes already covered by the applicable TycoonX Privacy Policy and lawful basis.

Apply role-based access and retention appropriate to payment records. Avoid exposing:

- raw JWS values;
- full App Store Server API bearer credentials;
- full refund history to ordinary player-facing clients;
- unnecessary Apple transaction identifiers in public support responses; or
- another player's refund history in a support case.

If CK-Labs materially expands the categories, purposes, recipients, or retention of refund-history data beyond the current canonical Privacy Policy, update the English Privacy Policy first and then reopen all 25 localized Privacy pages in the required locale order.

## Minimum release evidence

Before relying on Get Refund History for production reconciliation, document at least these scenarios:

1. V2 initial call without `revision`, then more than 20 refunds proving pagination continues until `hasMore=false`;
2. a V1-only implementation proving release is blocked until the deprecated endpoint assumptions are removed;
3. crash after page 1 of a multi-page scan proving the durable final revision does not advance past unprocessed pages;
4. stored final revision used later to fetch newly refunded transactions without replaying corrections;
5. revision from customer A deliberately supplied to customer B proving it is rejected and cannot disclose or mutate B;
6. production revision deliberately used against sandbox, proving environment isolation;
7. raw arbitrary `anyTransactionId` supplied through a player-facing path proving it cannot proxy another customer's refund history;
8. one corrupted `signedTransactions` JWS proving the transaction is quarantined and no player is debited from decoded unverified claims;
9. a refund seen first through `REFUND` notification and later through Get Refund History proving one correction only;
10. an empty `signedTransactions` response proving it does not automatically restore value or close a pending support/legal claim;
11. two same-SKU Diamond purchases where only one is refunded, proving only the matching transaction's grant can be corrected;
12. one 500-Diamond refund delivered through two Apple recovery paths proving the cumulative correction remains capped at 500;
13. expired 30-Day VIP plus empty refund history proving the 30-day period is not restarted;
14. refunded Lifetime VIP proving the entitlement is corrected but the closed Lifetime VIP sales window remains closed;
15. a 429 response proving `Retry-After` is honored and the durable revision does not skip pages;
16. Apple `5xx`/network outage proving no fraud flag, no speculative refund, and no speculative restore;
17. support access proving only the minimum refund metadata for the authenticated account/case is shown;
18. mandatory-rights case proving an absent Apple refund-history row does not suppress a valid German/EU statutory remedy; and
19. App Store approved refund caused by a CK-Labs delivery defect proving it is not automatically labeled chargeback abuse or fraud.

## Public-legal parity check

This gate does not by itself change the canonical player-facing contract. The current TycoonX legal framework already distinguishes provider-approved refunds, entitlement correction, Diamonds, one-time 30-Day VIP, Lifetime VIP, authoritative provider/server records, fraud/abuse, payment-channel responsibilities, privacy, and mandatory consumer rights.

Do not reopen localized legal documents merely because this implementation gate is added.

Reopen the relevant canonical English document and then the matching 25 localized documents only if implementation introduces a material new player-facing meaning or privacy practice.

## Official references checked September 8, 2026

- Apple Get Refund History: https://developer.apple.com/documentation/appstoreserverapi/get-refund-history
- Apple `RefundHistoryResponse`: https://developer.apple.com/documentation/appstoreserverapi/refundhistoryresponse
- Apple App Store Server API changelog: https://developer.apple.com/documentation/appstoreserverapi/app-store-server-api-changelog
- Apple App Store Server API rate limits: https://developer.apple.com/documentation/appstoreserverapi/identifying-rate-limits
- Apple In-App Purchase overview and refunds: https://developer.apple.com/in-app-purchase/
- TycoonX Apple refund reconciliation parent gate: `TYCOONX_APPLE_REFUND_ENTITLEMENT_RELEASE_GATE.md`
- TycoonX Apple JWS verification gate: `TYCOONX_APPLE_SIGNED_DATA_JWS_VERIFICATION_RELEASE_GATE.md`
- TycoonX Apple transaction history V2 gate: `TYCOONX_APPLE_TRANSACTION_HISTORY_V2_RECONCILIATION_RELEASE_GATE.md`

## Manual regression command

Run locally without GitHub Actions or paid services:

```bash
node scripts/verify-tycoonx-apple-refund-history-v2.mjs
```
