# TycoonX Apple Sandbox and TestFlight Production-Isolation Release Gate

Last reviewed: September 9, 2026

This is an internal payment, security, QA, and entitlement release gate for Apple In-App Purchases used by TycoonX. It complements the existing Apple signed-data JWS, refund, restore, account-binding, pricing, and provider-continuity gates. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Apple Custom EULA, mandatory consumer law, or Apple rules.

The purpose is to make sure Apple sandbox, TestFlight, StoreKit Testing in Xcode, simulated refund/failure scenarios, and other test purchase data can exercise the TycoonX purchase pipeline without ever becoming unrestricted production paid value, production revenue, or player-misconduct evidence.

## P0 before Apple purchase testing can touch shared infrastructure

### 1. Apple test transactions are not production purchases

Apple currently documents three relevant StoreKit transaction environments:

- `production` for App Store production transactions;
- `sandbox` for App Store sandbox transactions, including In-App Purchases made from TestFlight; and
- `xcode` for StoreKit Testing in Xcode.

Apple's App Store Server API identifies server data as `Sandbox` or `Production`. StoreKit Testing in Xcode is a local test environment and does not process actual payments.

For every Apple transaction or notification that can affect paid value, TycoonX must preserve the verified environment as a first-class transaction attribute. Environment is not optional metadata that may be discarded after receipt verification.

**Only a verified production Apple transaction may authorize unrestricted production paid entitlement or production purchase revenue.**

A correctly signed or otherwise valid sandbox/test transaction is still a test transaction.

### 2. TestFlight In-App Purchases are sandbox purchases

Apple currently states that In-App Purchases made through TestFlight use the sandbox environment, are free to testers, and do not carry over into production after the app is released on the App Store.

Therefore:

- a TestFlight Diamond purchase must not mint unrestricted production Diamonds;
- a TestFlight 30-Day VIP purchase must not start or extend unrestricted production paid VIP;
- a TestFlight Lifetime VIP purchase must not create an unrestricted production Lifetime VIP entitlement;
- a TestFlight purchase must not enter production revenue, VAT/tax, payout, or chargeback reporting as if money moved; and
- restoring or replaying a TestFlight sandbox transaction must never convert it into a production purchase.

If CK-Labs intentionally lets a TestFlight build connect to production gameplay infrastructure, payment value must still be isolated by the verified Apple transaction environment. A shared backend does not make the sandbox transaction production.

### 3. StoreKit Testing in Xcode is even less authoritative for production value

StoreKit Testing in Xcode can simulate successful transactions locally without App Store payment processing. Apple exposes the `xcode` StoreKit environment for this purpose.

TycoonX must never treat an Xcode StoreKit test transaction as evidence that:

- Apple charged a customer;
- CK-Labs earned revenue;
- a consumer acquired a paid production entitlement;
- a refund or chargeback occurred in production;
- a production promotion was redeemed; or
- a player committed payment or entitlement abuse.

Local Xcode transaction identifiers, test product states, restore behavior, and simulated failures may exercise code paths only inside an explicitly non-production test boundary.

### 4. Sandbox is real App Store infrastructure, but no real payment authority

Apple's sandbox uses App Store infrastructure and can return transactions as though payments were successfully processed, but Apple states that test transactions do not incur charges.

This distinction is critical. A sandbox transaction may look operationally realistic: it can have a product identifier, transaction identifier, storefront, purchase date, refund/failure simulation, signed data, and server notification. Those fields do not upgrade the transaction into a real-money purchase.

Do not use the presence of a plausible Apple order/transaction record, a successful JWS verification, a purchased state, a restore, or a server notification as a substitute for verifying the production environment.

### 5. Environment verification belongs before entitlement mutation

Apply the existing `TYCOONX_APPLE_SIGNED_DATA_JWS_VERIFICATION_RELEASE_GATE.md` first. For Apple-signed data, verify signature/certificate trust, TycoonX app identity, and environment before business logic.

For production entitlement mutation:

1. verify the Apple-signed data using the expected production TycoonX app context;
2. require the verified environment to be production;
3. resolve the authoritative transaction identity and TycoonX account binding;
4. apply product-specific fulfillment/idempotency rules; and
5. record the environment with the purchase ledger action.

A server must not construct a sandbox verifier, accept a sandbox result, and then relabel that result as production in application code.

If an Apple object or local StoreKit result reports an environment that CK-Labs does not understand, fail closed for paid-value mutation and reconcile it before taking any entitlement action. Do not coerce unknown values to production.

### 6. Separate production and sandbox server routes where Apple provides them

App Store Connect lets developers configure production and sandbox App Store Server Notification URLs separately. Use that separation where practical.

However, endpoint routing is only a defense in depth. The notification URL that received a request is not the authoritative environment by itself. A sandbox notification accidentally routed to production infrastructure must remain sandbox after signed-data verification, and a production notification must not be downgraded merely because an operator routed it through a test host.

Keep environment validation in the signed-data/provider layer, not only in DNS, URL paths, headers, or deployment names.

### 7. App Store Server API lookups must remain environment-bound

Apple's App Store Server API uses different production and sandbox base URLs. Apple currently instructs developers who already know the environment to call the matching environment. If the environment is unknown, Apple documents a production-first lookup and a sandbox retry only after `TransactionIdNotFoundError`.

TycoonX may use that documented discovery pattern for reconciliation, but:

- a sandbox lookup success must remain sandbox evidence;
- a production `TransactionIdNotFoundError` is not proof of fraud, refund, or fabrication;
- a sandbox fallback must not create a production entitlement;
- the resolved environment must be persisted with the transaction; and
- future reconciliation must not bounce between environments as though they were interchangeable histories.

An environment lookup is a classification step, not permission to promote test value into production.

### 8. Sandbox accounts, storefront switching, and cleared history are test controls

Apple Sandbox Apple Accounts are test-only accounts. Apple lets developers change a sandbox tester's App Store country/region and clear sandbox purchase history.

Therefore sandbox country, storefront, purchase history, or history deletion must not become production evidence of:

- the player's residence or nationality;
- regional-price abuse or VPN abuse;
- a production refund;
- a fabricated production receipt;
- account compromise; or
- entitlement abuse.

Clearing a sandbox tester's purchase history is a QA action. It must not delete or alter a real customer's production TycoonX entitlements or purchase ledger.

Likewise, a sandbox tester deliberately switching among storefronts for QA is not a production regional-pricing violation.

### 9. Simulated refunds, failures, and interrupted purchases must not punish a live player

Apple lets sandbox testers exercise failures, interrupted purchases, refunds, and other payment scenarios. These are valuable regression tests but are not real adverse payment events.

A sandbox/test refund or simulated failure may test TycoonX's correction pipeline, but it must not:

- reverse a separate genuine production purchase;
- create real player debt;
- create a fraud/chargeback strike;
- suspend or terminate the production account;
- lower a production trust/reputation score;
- classify the player as a hacker/exploiter;
- create a regional-price-abuse finding; or
- become evidence in a real payment dispute.

Test corrections must be scoped to the same test transaction and environment.

### 10. Tester identity and build channel are not substitutes for transaction evidence

Do not mark every purchase by a developer, tester, CK-Labs administrator, or historical TestFlight participant as fake merely because that person has test access.

The same person can later install the production App Store build and complete a genuine production purchase. That purchase remains a real purchase if authoritative Apple production evidence establishes it.

Conversely, the fact that a TestFlight tester uses a normal Apple Account does not convert the TestFlight In-App Purchase into production; Apple currently states that TestFlight IAP runs in sandbox automatically.

Classify the transaction from verified Apple environment/provider evidence, not from the person's role, email address, device, IP address, nickname, or prior tester status.

### 11. Production finance, tax, and business metrics must exclude test purchases

Apple sandbox and Xcode test transactions must be segregated from production commercial reporting.

They must not inflate or distort:

- gross sales or net revenue;
- VAT/sales-tax estimates;
- paid conversion or ARPU/ARPPU;
- refund or chargeback rates;
- Lifetime VIP units sold;
- Diamond package sales;
- 30-Day VIP paid activations;
- promotion redemption rates; or
- payment-provider success/failure metrics used for commercial decisions.

Test events may be stored in a clearly identified QA/payment-test ledger with restricted retention and access where operationally useful.

Do not issue customer-facing invoices, tax receipts, or paid-purchase confirmations from CK-Labs merely because a sandbox transaction completed. Apple/provider test UI may display test transaction details as part of the testing flow.

### 12. Product rules remain exact in every environment

Testing must exercise the same product semantics without changing the production contract.

- **Diamonds:** a sandbox/Xcode grant may exist only inside the permitted test boundary. It cannot be mixed into unrestricted production purchased-Diamond balances. Genuine purchased Diamonds do not expire merely because time passes.
- **30-Day VIP:** the production product remains a one-time, non-renewing entitlement lasting exactly 30 consecutive days. Sandbox/Xcode clocks, resets, test-history clearing, or simulated purchases cannot start, extend, or restart production 30-Day VIP.
- **Lifetime VIP:** remains a limited-time promotional one-time entitlement offered only during selected genuine sales windows. A sandbox/TestFlight/Xcode product configuration, test purchase, restore, refund, or old test transaction can never open or reopen a production Lifetime VIP sales window.

A historical genuine production Lifetime VIP can still be restored when authoritative Apple and TycoonX records establish that it remains valid. Test data is not a substitute for that evidence.

### 13. Test catalog availability is not production sale availability

Apple notes that product metadata changes can take time to appear in sandbox, and sandbox/test configurations may intentionally differ from live merchandising.

TycoonX must not infer production availability, pricing, promotion status, or Lifetime VIP sales-window status from sandbox/TestFlight/Xcode catalog results alone.

In particular:

- a product visible in sandbox but intentionally closed in production remains closed in production;
- a production product missing temporarily from sandbox does not prove it was withdrawn from the App Store;
- a sandbox price or storefront exercise is not a customer-facing production price promise; and
- test catalog mistakes must not be repaired by changing genuine completed production transactions.

### 14. Privacy and evidence separation

Sandbox and TestFlight data can still contain identifiers and transaction metadata. Test status is not permission to retain everything indefinitely.

Apply data minimization and purpose limitation:

- retain the minimum test metadata needed for QA, security, reconciliation, and audit;
- keep test purchase evidence out of general player profiling and marketing segmentation;
- do not use sandbox storefront switching as a durable location/residence profile;
- do not expose tester emails, Apple identifiers, signed payloads, or transaction data in broad logs/support channels; and
- delete or age out disposable QA records under the applicable retention policy when they are no longer needed.

A test transaction may be useful to prove the payment pipeline worked. It is not automatically useful for unrelated analytics.

### 15. Real consumer purchases and mandatory rights must never be downgraded to test data

Production/test isolation protects CK-Labs from fake value, but it must also protect consumers from the reverse error.

If authoritative Apple production records establish a real purchase, CK-Labs may not relabel it as sandbox/test merely because:

- the account was once a tester;
- the device previously ran TestFlight;
- the user is a developer or administrator;
- the same product was also tested in sandbox;
- a support screenshot resembles a sandbox flow; or
- production verification is temporarily unavailable.

A temporary Apple/provider verification outage is not proof that the genuine purchase was a test transaction. Quarantine and reconcile instead of erasing paid value.

Mandatory German/EU rights for qualifying paid digital products, including conformity, update, refund/price-reduction/termination remedies, liability, and other non-waivable protections, remain intact for genuine production purchases. Nothing in this gate permits CK-Labs to use a test classification to evade a mandatory remedy.

### 16. Incident and migration safety

If sandbox data has accidentally entered production:

1. stop the affected test grant path;
2. identify transactions by verified environment and transaction identity;
3. separate test value from genuine production purchases before correcting balances;
4. avoid mass clawbacks based only on tester role, build version, date range, device, or account email;
5. preserve genuine production Diamonds/VIP and mandatory remedies;
6. correct finance/tax/analytics records without rewriting historical genuine provider evidence; and
7. document the incident and add a regression test before reopening the path.

Where test value has already mixed with gameplay or transferred value, use a proportionate transaction-specific correction rather than an arbitrary account-wide confiscation. Do not create a fraud sanction merely because CK-Labs failed to isolate its own test pipeline.

## Release evidence required

Before production sign-off, CK-Labs should be able to show:

1. verified Apple environment is persisted with every Apple transaction that can affect paid value;
2. only verified production Apple transactions can authorize unrestricted production paid entitlements;
3. TestFlight In-App Purchases are treated as sandbox even when TestFlight connects to shared production infrastructure;
4. Xcode StoreKit test transactions cannot create production revenue or paid entitlements;
5. sandbox server notifications and API lookups cannot mutate production value;
6. production and sandbox notification endpoints are configured intentionally where available;
7. environment is verified from signed/provider evidence rather than URL, build name, tester role, or client claims alone;
8. sandbox purchase-history clearing cannot delete production entitlement history;
9. sandbox storefront switching cannot create production regional-price-abuse evidence;
10. simulated sandbox refunds/chargebacks/failures cannot create production sanctions;
11. genuine production purchases by current or former testers still fulfill normally;
12. test purchases are excluded from production revenue/tax/commercial metrics;
13. Diamonds, 30-Day VIP, and Lifetime VIP retain their separate production rules;
14. closed Lifetime VIP sales windows stay closed even if the product remains testable in sandbox;
15. ambiguous/unknown environments fail closed for new paid-value mutation without destroying existing valid value;
16. test data retention follows privacy minimization and purpose limitation; and
17. a documented incident path exists for removing accidentally leaked test value without harming genuine purchases.

## Minimum regression matrix

| Scenario | Required result |
| --- | --- |
| TestFlight user buys a Diamond pack | Verified sandbox transaction; no unrestricted production Diamonds or production revenue |
| TestFlight user buys 30-Day VIP | Test-only entitlement path; production 30-Day VIP is not started or extended |
| TestFlight user buys Lifetime VIP while the production sale is closed | No production Lifetime VIP and no reopening of the production sales window |
| StoreKit Testing in Xcode returns a successful purchase | Test code path only; no production entitlement, revenue, tax, refund, or abuse evidence |
| Sandbox JWS verifies cryptographically | Remains sandbox; successful signature verification does not promote it to production |
| Sandbox notification hits the production HTTP endpoint | Signed environment still controls; no production mutation |
| Production notification accidentally hits a test route | Valid production transaction is reconciled as production rather than discarded based only on route |
| Production API lookup returns `TransactionIdNotFoundError`, sandbox lookup succeeds | Record remains sandbox; no production entitlement |
| Production API temporarily unavailable | No automatic sandbox classification, clawback, fraud flag, or deletion of existing valid value |
| Sandbox tester changes storefront repeatedly | Permitted QA behavior; no production regional-price-abuse finding |
| Sandbox tester clears purchase history | No change to any production TycoonX purchase or entitlement ledger |
| Sandbox simulated refund arrives | Correct only the test transaction; no production fraud strike, debt, or unrelated clawback |
| Former TestFlight tester buys from the production App Store | Genuine production evidence fulfills normally despite historical tester status |
| Developer/admin buys a genuine production pack | Role does not downgrade authoritative production purchase to test |
| Test transaction appears in analytics | Regression fails unless excluded from production commercial metrics |
| Sandbox Lifetime VIP product remains visible after production sale closes | Test visibility does not reopen production availability |
| Unknown future Apple environment value | Quarantine/fail closed for paid-value mutation; no coercion to production |
| Accidentally leaked test Diamonds mixed with gameplay | Transaction-specific, proportionate incident correction; genuine purchases are preserved |
| EU/German consumer with genuine production purchase also has sandbox history | Mandatory rights attach to the genuine purchase and cannot be denied because test history exists |

## Canonical/legal synchronization rule

This gate hardens implementation of the existing TycoonX rule that authoritative store/payment and CK-Labs server records govern paid purchase fulfillment and that free/test/promotional grants are not interchangeable with paid production purchases. It does not change the player-facing meaning of Diamonds, one-time 30-Day VIP, Lifetime VIP, refunds, promotions, or mandatory consumer rights.

If CK-Labs later lets test purchases create transferable production value, changes the commercial meaning of a paid product, changes how tester/payment data is used, or otherwise materially changes the player-facing legal position, update the canonical English TycoonX legal documents first and then synchronize every affected localized legal document before release.

## Current references checked September 9, 2026

- Apple Developer: In-App Purchase, including TestFlight sandbox behavior.
- App Store Connect Help: Overview of testing in sandbox.
- App Store Connect Help: Testing subscriptions and In-App Purchases in TestFlight.
- App Store Connect Help: Create and manage Sandbox Apple Accounts.
- Apple Developer: App Store Server API and the `environment` field.
- Apple Developer: StoreKit `Transaction.environment` and App Store environment values, including `production`, `sandbox`, and `xcode`.
- Apple Developer: Understanding StoreKit workflows and StoreKit Testing in Xcode.
- Existing TycoonX Apple signed-data JWS, refund, restore, pricing, account-binding, and provider-continuity gates.
