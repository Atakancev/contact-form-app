# TycoonX Google Play External Transaction Financial Reporting Release Gate

Last reviewed: September 9, 2026

This is a narrow implementation and accounting companion to `TYCOONX_GOOGLE_PLAY_BILLING_CHOICE_PBL_9_1_IMPLEMENTATION_GATE.md` and `TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md`. It covers the Google Play Developer API `externaltransactions` record that CK-Labs may need when a qualifying TycoonX transaction is completed through Xsolla or another lawfully available developer-managed payment route under an enrolled Google Play program.

It does not create a new TycoonX product, make external billing available in a country where Google does not permit it, replace Xsolla's payment evidence, or waive any mandatory consumer right.

TycoonX went to full release on September 1, 2026. Do not describe the live service, purchases, Diamonds, VIP, users, rewards, or this payment flow as beta.

## P0 rule

A Google external-transaction report is a platform-compliance/accounting record. It is **not payment confirmation and not entitlement authority**.

For every reportable TycoonX transaction:

1. first establish authoritative provider payment completion for the exact order;
2. bind the Google reporting token/program to that same order and TycoonX account;
3. preserve the actual transaction amount, tax, currency and completion time from transaction-specific evidence;
4. create exactly one stable, non-PII `externalTransactionId` for that external transaction;
5. report through the current Google Play Developer API within the applicable current deadline;
6. reconcile the returned Google record without overwriting the original provider transaction evidence; and
7. process later refunds or reversals transaction-by-transaction and idempotently.

If any material field is unknown, contradictory, stale, or cannot be tied to the transaction being reported, stop and reconcile it. Do not invent a tax amount, tax jurisdiction, timestamp, external transaction ID, program, or payment state merely to satisfy the reporting deadline.

## 1. `externalTransactionId` is a privacy and idempotency boundary

Google's current `externaltransactions.createexternaltransaction` API requires an `externalTransactionId` that is unique across transactions for the app. As of this checkpoint, Google documents a length of 1-63 characters, permits letters, digits, `_` and `-`, and explicitly says not to put personally identifiable information such as email addresses in the value.

TycoonX rules:

- generate a random or internal opaque reporting ID that contains no email, nickname, phone number, IP address, real name, date of birth, payment-card fragment, Xsolla login or other directly identifying user data;
- keep the Google reporting ID distinct from the public TycoonX nickname and from human-readable support notes;
- persist the mapping `externalTransactionId -> Google program/token -> TycoonX order -> Xsolla/provider transaction -> entitlement ledger entry` server-side;
- never recycle an old external transaction ID for a later purchase, even if the same player buys the same product again;
- never create a second ID merely because the first API request timed out before CK-Labs saw the response; first reconcile whether Google already created the record; and
- do not use the presence of an ID as proof that payment succeeded or that an entitlement should exist.

A duplicate-reporting bug must not become a duplicate-Diamond or duplicate-VIP bug.

## 2. Report the transaction that actually happened, not today's catalog

For an initial external transaction Google currently requires, among other applicable program-specific fields:

- `originalPreTaxAmount`;
- `originalTaxAmount`;
- `transactionTime`;
- `userTaxAddress`; and
- the applicable one-time/recurring transaction details and reporting token/program details.

For current TycoonX products, the financial values must come from the completed transaction's authoritative checkout/provider evidence, not from a later app catalog lookup.

### Amount rules

- `originalPreTaxAmount` is the original pre-tax amount reported before refunds.
- `originalTaxAmount` is the original tax amount reported before refunds.
- Both must use the actual transaction currency applicable to the completed payment.
- Do not replace the customer's original currency with CK-Labs's settlement, payout, bookkeeping, or developer-account currency.
- Do not recompute an old purchase from today's Diamond bundle price, today's VIP price, a later regional price, a later FX rate, or a later VAT/tax configuration.
- Do not add tax twice when the provider's transaction evidence already separates or includes tax as applicable.
- Do not silently force tax to zero because CK-Labs cannot immediately parse a provider field. An unknown tax field is a reconciliation problem, not permission to fabricate a value.

A later legitimate price decrease does not automatically create a refund, credit, or price-match right for an already completed one-time purchase, and a later increase does not create an extra charge, except where mandatory law or a transaction-specific provider rule requires otherwise.

## 3. `transactionTime` means completion time

Google currently defines `transactionTime` as the time the transaction was completed and accepts RFC 3339 timestamps.

Do not substitute:

- checkout-open time;
- Google reporting-token creation time;
- Xsolla Pay Station token creation time;
- browser-return/deep-link time;
- TycoonX entitlement-grant time;
- webhook arrival time;
- worker-processing time;
- Google API request time;
- support-ticket time; or
- the server's current time.

If an Xsolla/payment-provider webhook was delayed by an outage, preserve the provider-confirmed completion time and separately retain the later ingestion/reporting timestamps. A late webhook does not make the payment occur later than it actually did.

Google's output-only `createTime` is the time Google was notified of the external transaction. It must not overwrite `transactionTime` or the provider's own payment-completion timestamp.

## 4. Tax address is for the transaction, not a fraud shortcut

Google currently requires `userTaxAddress` for tax computation. The external-transactions resource uses a two-letter `regionCode`; the current API also requires `administrativeArea` for India transactions.

Operational rules:

- derive the value from lawful, transaction-specific tax/billing/provider evidence appropriate to the program and purchase;
- do not blindly use TycoonX UI language, profile country, device locale, IP geolocation alone, nationality, prior travel location, or a stale address from another purchase;
- do not use `userTaxAddress` as proof of permanent residence, citizenship, account ownership, age, regional-price abuse, fraud, or entitlement abuse;
- retain only the tax/location detail actually necessary for the legal/payment/reporting purpose and applicable retention period; and
- if provider and Google-required tax-jurisdiction evidence materially conflict, hold the report for reconciliation rather than silently choosing whichever value produces a lower fee or tax.

Country and tax-address reporting must not be used to deprive a consumer of non-waivable rights that apply for another legally relevant reason.

## 5. One-time TycoonX purchases stay one-time products

Current TycoonX paid products covered by this gate are not recurring subscriptions merely because Google's external-transactions resource can represent recurring transactions.

### Purchased Diamonds

- A Google reporting token or successful Google external-transaction report grants zero Diamonds by itself.
- Grant the paid Diamond quantity exactly once only after authoritative payment confirmation.
- Purchased Diamonds do not expire solely because time passes.
- A report retry, Google `getexternaltransaction` reconciliation, or refund-report retry must never duplicate a Diamond grant.

### One-time 30-Day VIP

- 30-Day VIP remains one non-renewing entitlement lasting 30 consecutive days from activation or availability.
- Google reporting-token creation, report submission and `createTime` do not start the VIP clock.
- A delayed Google report does not shorten, restart, extend, or duplicate the 30-day entitlement.
- Do not report current 30-Day VIP as an auto-renewing subscription to make the Google schema easier to use.

### Lifetime VIP

- Lifetime VIP remains a limited-time promotional one-time entitlement offered only during selected genuine sales windows.
- It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability.
- A Google external-transaction report, reporting retry, historical reconciliation, refund record or migrated legacy record cannot reopen a closed Lifetime VIP sales window.
- Historical restoration of a valid Lifetime VIP entitlement is not a new sale.

## 6. Manual reporting sunset and migration fields are not shortcuts

Google's current alternative-billing documentation says manual reporting of alternative billing only and user-choice billing is being sunset in favor of the alternative-billing APIs and `externaltransactions` backend flow.

TycoonX production rules:

- do not design a new production Xsolla flow around spreadsheets, monthly manual Play reporting or support staff re-entering sales by hand;
- use the current enrolled Play client-side flow and backend `externaltransactions` API where Google requires it;
- keep any historical manual-reporting records only for legitimate reconciliation/audit needs rather than rewriting them into fake new purchases;
- Google documents `migratedTransactionProgram` for migrating subscriptions from manual monthly reporting to automated reporting; do not use that field for purchased Diamonds, one-time 30-Day VIP or Lifetime VIP merely to bypass the normal initial-transaction token flow; and
- if CK-Labs ever introduces a recurring product, migration of a legacy recurring series requires a separate review under the future recurring-subscription gate.

## 7. Google record state does not replace payment or entitlement state

The current external-transactions resource exposes output-only `transactionState` values including `TRANSACTION_REPORTED` and `TRANSACTION_CANCELED`, with Google documenting `TRANSACTION_CANCELED` as fully refunded.

Maintain separate state domains:

- provider payment state;
- Google external-reporting state;
- TycoonX entitlement-delivery state;
- refund/reversal/chargeback state; and
- support/manual-review state.

`TRANSACTION_REPORTED` means the external transaction was successfully reported to Google. It does not prove that a player should receive value if CK-Labs's underlying provider/order mapping is corrupt.

Likewise, a Google reporting error does not by itself mean a valid Xsolla payment never happened. Reconcile the actual payment and consumer entitlement separately while fixing the platform-reporting failure.

## 8. Refund reporting uses the affected external transaction

Google's current `refundexternaltransaction` method supports a full refund of the remaining amount or a partial refund.

For a partial refund, Google currently requires a unique `refundId` for that individual transaction and a `refundPreTaxAmount` that is less than the remaining pre-tax amount. For a full refund, the API refunds the remaining amount. The request also carries the actual `refundTime`.

TycoonX safeguards:

- bind every Google refund report to the exact provider refund/reversal and original external transaction;
- do not invent a partial-refund amount from the current catalog price;
- do not reuse a successful `refundId` for another partial refund;
- do not backfill `refundTime` with support-action time if the provider refund occurred at another verified time;
- do not send an additional tax-refund amount that Google's current request model does not ask CK-Labs to supply; reconcile Google's returned `currentTaxAmount` instead;
- after a partial refund, reconcile `currentPreTaxAmount` and `currentTaxAmount` against the expected remaining economics;
- after a full refund, Google may move the external transaction to `TRANSACTION_CANCELED`; treat that as reporting/refund state, not as permission to remove unrelated purchases; and
- entitlement correction remains transaction-specific and subject to the canonical refund rules and mandatory law.

A refund of transaction A must never revoke Diamonds, VIP or Lifetime VIP granted by unrelated legitimate transaction B.

## 9. Test transactions are never production revenue or entitlement evidence

Google's external-transactions resource exposes `testPurchase` for test-account transactions and states that Google will not charge for a test transaction.

Therefore:

- keep test and production external-transaction IDs in isolated environments/namespaces;
- do not count a Google test transaction as production revenue, tax, payout, a paid Diamond sale, a paid 30-Day VIP sale or a Lifetime VIP sale;
- never use a test transaction to open, extend, or prove a Lifetime VIP sales window; and
- test callbacks must not create a production fraud strike, debt, refund, chargeback or entitlement correction.

## 10. Ambiguous API outcomes must reconcile, not duplicate

A network timeout after `createexternaltransaction` can leave CK-Labs unsure whether Google accepted the request.

Recovery rule:

1. keep the same stable `externalTransactionId` and original transaction payload;
2. check the stored response/reporting ledger;
3. when needed, use Google's `getexternaltransaction` path to determine whether the record exists;
4. retry only in a way that cannot create a second TycoonX entitlement or a second logically distinct external sale; and
5. never generate a fresh external transaction ID simply to make an ambiguous error disappear.

If Google's reporting service is unavailable, queue bounded retries and alert before the applicable reporting deadline is endangered. Do not fabricate success, payment completion, tax data or refund data.

If an outage creates a material period in which CK-Labs cannot comply with a required platform reporting obligation, the safe commercial response can include pausing new affected alternative-billing offers until reporting is healthy. That operational pause must not confiscate already valid purchases or accuse affected players of misconduct.

## 11. Provider replacement, shutdown and business transfer

If CK-Labs replaces Xsolla, changes authentication/infrastructure providers, reorganizes, sells the business, or lawfully winds down TycoonX:

- preserve transaction/report/refund evidence required for legitimate accounting, tax, platform, dispute and consumer-rights purposes;
- preserve the mapping needed to restore valid paid entitlements while the service lawfully continues;
- do not migrate unnecessary card data, passwords or unrelated private gameplay data merely because financial records are retained;
- keep original transaction currency, amount, tax and provider identifiers historically accurate after migration; and
- do not transform a provider replacement into a reason to reopen Lifetime VIP or retroactively reprice completed purchases.

Permanent service discontinuation remains subject to the canonical TycoonX terms and all mandatory notice, conformity, refund, damages and other consumer remedies that cannot lawfully be excluded.

## 12. Security and least privilege

The `externaltransactions` endpoints use the Android Publisher OAuth scope and belong on CK-Labs's secure backend, not in the game client.

Release blockers include:

- Android Publisher credentials embedded in the TycoonX APK/app bundle;
- client code able to choose arbitrary tax amounts, refund amounts or external transaction IDs without server validation;
- support users able to create/refund arbitrary Google external transactions without transaction-specific authorization/audit logging;
- external transaction IDs containing PII;
- production/test environment mixing; or
- logs that unnecessarily expose Google reporting tokens, Xsolla checkout tokens or other reusable payment secrets.

## 13. Required regression cases

Test at minimum:

1. a completed Xsolla Diamond sale reports the provider-confirmed pre-tax amount, tax, currency and completion time;
2. a later Diamond price decrease does not rewrite the old Google external transaction;
3. settlement currency differs from customer currency and does not overwrite the reported customer transaction currency;
4. external transaction ID generation rejects email/nickname/PII and produces a unique opaque value;
5. a timeout after create reconciles the existing ID rather than creating a second logical sale;
6. token generation without payment grants zero Diamonds and creates no completed external sale;
7. a delayed provider webhook preserves the original payment completion time rather than worker time;
8. Google `createTime` remains distinct from transaction completion time;
9. wrong/stale profile country is not silently used as `userTaxAddress` when transaction evidence says otherwise;
10. India reporting requires the applicable administrative-area detail;
11. a different IP/device location alone does not create a fraud or regional-price-abuse finding;
12. Google report success cannot double-grant an already delivered Diamond purchase;
13. delayed reporting does not restart or shorten one-time 30-Day VIP;
14. a closed Lifetime VIP sales window cannot be reopened by a reporting retry or historical reconciliation;
15. partial external refund uses a unique refund ID and the provider-backed remaining economics;
16. repeated delivery of the same provider refund cannot create a second entitlement clawback;
17. a full refund of transaction A cannot remove unrelated transaction B;
18. test external transactions cannot create production Diamonds/VIP/revenue;
19. manual-reporting migration fields cannot be used to manufacture current one-time TycoonX purchases;
20. a Google reporting outage queues/reconciles without fabricated success;
21. a provider replacement preserves historical currency/tax/report mappings without reopening promotions;
22. a future unknown Google transaction/program field fails closed pending review; and
23. mandatory German/EU consumer remedies remain available regardless of a Google reporting/configuration error.

## 14. Mandatory consumer-rights boundary

Google's reporting schema, Google service fees, an Xsolla merchant/payment role, a reporting delay, or CK-Labs's own bookkeeping do not remove mandatory consumer rights.

Where German/EU digital-content law applies, TycoonX must continue to preserve mandatory rights concerning provision, conformity, updates, cure, termination, price reduction, damages, withdrawal where applicable, transparent total-price information and other non-waivable remedies.

An internal reporting mistake must not be rewritten as player fraud. A tax/reporting correction must not silently confiscate unrelated purchased value. A valid consumer remedy must not be denied merely because Google, Xsolla or CK-Labs stored different accounting timestamps or because a platform reporting endpoint was temporarily unavailable.

## 15. Evidence required before production reliance

Keep a dated evidence packet containing at minimum:

- current Google program enrollment and market/payment-mode mapping;
- current Google reporting deadline for the applicable program;
- a redacted successful `externaltransactions.createexternaltransaction` example from production-like testing;
- proof that `externalTransactionId` contains no PII and is unique/stable;
- Xsolla/provider transaction -> pre-tax/tax/currency/completion-time -> Google report mapping;
- one-time Diamond and 30-Day VIP tests showing report state is separate from entitlement authority;
- any currently sold Lifetime VIP test showing the sales-window check is separate from report creation;
- ambiguous-create timeout/reconciliation test;
- partial and full refund reconciliation tests;
- test-purchase isolation evidence;
- permission/credential review showing Android Publisher credentials are backend-only; and
- evidence that legacy manual alternative-billing reporting is not the production transaction-reporting architecture.

## Source checkpoints

Current official sources rechecked September 9, 2026:

- Google for Developers, **REST Resource: externaltransactions**, last updated September 2, 2026: required original pre-tax/tax amounts, transaction/completion time, Google create time, tax address, current amounts, test purchase, transaction state and program-specific fields.
- Google for Developers, **externaltransactions.createexternaltransaction**: unique 1-63 character `externalTransactionId`, permitted characters, explicit prohibition on storing PII such as emails in that ID, Android Publisher authorization scope and create request shape.
- Google for Developers, **externaltransactions.refundexternaltransaction**, last updated September 2, 2026: full/partial refund structure, actual refund timestamp, unique partial `refundId` and remaining pre-tax amount rules.
- Android Developers, **Backend integration guidance for monetization outside Google Play Billing**: initial external transactions, backend reporting and migration away from manual alternative-billing reporting.
- Android Developers, **Alternative billing APIs / in-app integration guidance**, current September 2026 guidance: manual reporting sunset and 24-hour backend reporting requirement for applicable alternative-billing transactions.

## Manual verification

Run locally:

```bash
node scripts/verify-tycoonx-google-play-external-transaction-financial-reporting.mjs
node scripts/verify-tycoonx-google-play-billing-choice-pbl91.mjs
node scripts/verify-tycoonx-legal.mjs
```

Then manually verify the then-current Google Play program enrollment, external transaction reporting deadline, API field definitions, tax handling, refund reporting and Xsolla provider evidence before changing production payment steering.