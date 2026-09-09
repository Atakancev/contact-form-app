# TycoonX Google Play Test-Purchase Production-Isolation Release Gate

Last reviewed: September 9, 2026

This is a narrow operational release gate for Google Play **test purchases** in TycoonX. It complements `TYCOONX_GOOGLE_PLAY_ACKNOWLEDGEMENT_CONSUMPTION_RELEASE_GATE.md`, `TYCOONX_GOOGLE_PLAY_PENDING_PURCHASE_ATTRIBUTION_RELEASE_GATE.md`, `TYCOONX_GOOGLE_PLAY_RTDN_PUBSUB_AUTHENTICITY_RELEASE_GATE.md`, and `TYCOONX_PAYMENT_ENTITLEMENT_RELEASE_GATES.md`. It does not replace the canonical TycoonX Purchases & Refunds Policy, Google Play rules, or mandatory consumer law.

TycoonX is in full release. Test traffic must therefore never be allowed to masquerade as ordinary paid production commerce.

## Current Google Play position

Google's current Play Billing testing guidance says license testers can use test payment methods that do not charge real money, while test purchases otherwise use the same app purchase flow as real purchases. Google also states that taxes are not computed for test purchases.

Google's current `ProductPurchaseV2` server resource exposes `testPurchaseContext` **only for test purchases**. Its current `fopType` value `TEST` means the purchase was made using a test card. The same resource separately exposes authoritative purchase state, line items, order ID where present, acknowledgement state, region, completion time, and consumption state.

This distinction is critical because being on a Google Play test track is **not** the same as making a test purchase. Google expressly warns that regular users on testing tracks can make real purchases and that test-track purchases can incur actual charges unless the buyer is using the applicable license-tester/test-payment setup. Google also documents a controlled Play Billing Lab path for testing with real payment methods. TycoonX must classify the transaction from authoritative purchase evidence, not from the build track, tester email, device, or a support assumption.

Google's current test guidance also accelerates some states. For a license-tester one-time purchase that is not acknowledged, Google says the purchase is refunded after about **3 minutes**, rather than applying the normal production three-day acknowledgement window. Test delayed-payment instruments can automatically approve or decline after a few minutes, and Google provides a test instrument that simulates a user-initiated chargeback.

## P0 release rules

### 1. `testPurchaseContext` is a commercial-value boundary

For every Google Play one-time purchase verified through the secure backend, persist whether authoritative `ProductPurchaseV2.testPurchaseContext` is present and, when present, its `fopType`.

If `testPurchaseContext.fopType == TEST`:

- classify the provider transaction as a Google Play **test purchase**;
- do not count it as real CK-Labs revenue, taxable paid consideration, ordinary paid conversion, Lifetime VIP sales revenue, or a production commercial purchase;
- do not send it into ordinary revenue, VAT, payout, cohort, ARPU, LTV, or paid-purchase analytics as though real money moved;
- do not let a generic purchase worker silently drop the test marker after acknowledgement, consumption, retry, RTDN processing, refund, or restore;
- keep its transaction identity and test classification durable enough to make every replay idempotent; and
- keep the test marker attached to any related refund, void, chargeback simulation, support action, or reconciliation event.

A valid purchase token, `PURCHASED` state, purchase completion time, acknowledgement, consumption, order ID, RTDN, or successful Play billing sheet does not override the authoritative test context.

### 2. Test purchases must not mint unrestricted production game value

A Google test payment uses the real purchase flow but does not represent an ordinary paid production sale. Therefore a test purchase must not be allowed to mint unrestricted, transferable, or economically usable production value merely because the billing flow succeeded.

The safe default for the live TycoonX backend is:

- production player accounts receive **no production Diamonds, production 30-Day VIP, or production Lifetime VIP** from a transaction marked as a test purchase;
- if CK-Labs intentionally needs end-to-end entitlement testing, use a documented allowlisted tester/account path whose resulting value is clearly marked non-commercial/test and isolated from the ordinary production economy; and
- any test entitlement must be safely reversible or disposable without touching unrelated genuine purchases or mandatory rights.

Do not implement this by checking a nickname, email domain, device model, app track, debug flag supplied by the client, or a hard-coded list in the app. The backend must first verify Google and read the authoritative test-purchase context.

Example: a license tester completes a test-card purchase for a 1,000-Diamond SKU. Google returns a valid purchase with `PURCHASED` and `testPurchaseContext.fopType=TEST`. TycoonX may exercise the test fulfillment pipeline in an isolated tester context, but it must not create 1,000 unrestricted production Diamonds that the tester can transfer, sell, use to distort the live economy, or later present as a paid commercial entitlement.

### 3. A test track or tester identity is not enough to classify a purchase as test

Do not mark a transaction as test merely because:

- the app came from an internal, closed, or open testing track;
- the Google account is known to CK-Labs as a tester;
- the account appears in a QA spreadsheet;
- the player is an administrator or developer;
- the device is a development device; or
- the purchase happened while a test build was installed.

Google says users on test tracks can make real purchases. The server-side provider record therefore controls whether a specific transaction is a test purchase.

If authoritative Google evidence does **not** identify the transaction as a test purchase and otherwise confirms a valid real purchase, do not deny the player's paid entitlement simply because the account or build is used for testing. This is especially important if real payment methods are intentionally used for a controlled test.

### 4. Test state must survive acknowledgement, consumption, RTDN and restores

Test purchases can exercise the same lifecycle machinery that production purchases use. Every path must preserve the commercial classification.

For test Diamonds:

- acknowledgement/consumption may be exercised to test integration behavior;
- Google billing consumption does not transform a test transaction into a real paid transaction;
- a later query, RTDN, restore, local cache, support replay, or consumed-history record must not re-grant the purchase as production paid value; and
- a later void/refund/chargeback simulation must reconcile only the test entitlement/ledger state associated with that transaction.

For test VIP:

- a test 30-Day VIP purchase must never become an ordinary paid 30-consecutive-day production entitlement unless a deliberately isolated test entitlement policy is active;
- a test Lifetime VIP purchase must never create an unrestricted production Lifetime VIP entitlement; and
- no test purchase, acknowledgement, restore, historical record, or refund can reopen a closed Lifetime VIP sales window.

Lifetime VIP remains a limited-time promotional one-time offering available only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous availability.

### 5. The accelerated test refund clock must not contaminate production doctrine

Google currently says an unacknowledged license-tester one-time purchase can be refunded after roughly 3 minutes. This is a testing behavior, not the production entitlement rule.

TycoonX must not:

- change the production Google acknowledgement deadline from three days to three minutes;
- teach support that ordinary purchases auto-refund after three minutes;
- classify the accelerated test refund as player fraud, chargeback abuse, account compromise, entitlement abuse, or regional-price abuse;
- use a test refund to remove genuine production entitlements from the same account; or
- let a test-refund event enter real refund-rate, chargeback-rate, tax, payout, or fraud metrics as an ordinary consumer refund.

The normal Google acknowledgement/consumption gate remains controlling for genuine purchases.

### 6. Pending and simulated chargeback test instruments stay non-commercial

Google provides test instruments that simulate delayed payment approval/decline and user-initiated chargebacks. Those scenarios are useful for verifying TycoonX's state machine, but they are not proof that a tester committed fraud or initiated a real chargeback.

Required behavior:

- test `PENDING` still grants no paid value until Google changes the purchase to `PURCHASED`;
- a test delayed decline grants nothing;
- a test delayed approval enters only the segregated test entitlement path;
- a simulated chargeback exercises reversal logic against only the corresponding test transaction; and
- no simulated refund/chargeback may create a production player sanction, debt, fraud strike, regional-price flag, account suspension, or support accusation.

Real fraud or chargeback enforcement requires separate reliable evidence tied to a genuine production transaction.

### 7. Test purchase data must not become a workaround for privacy or regional-pricing controls

Test purchase metadata is still account/payment-operation data. Retain only what is needed for QA, security, reconciliation, audit, and legal obligations, according to the existing TycoonX Privacy Policy and retention controls.

The presence of a test purchase must not be used to infer a player's residence, nationality, wealth, or ordinary payment behavior. `regionCode`, tester status, or simulated payment outcome must not become an automatic regional-price abuse finding.

Google's test flow also says taxes are not computed for test purchases. Therefore test order totals must not be used as evidence of the consumer-facing tax treatment, final price, VAT outcome, or regional price that a real purchaser would receive.

### 8. Production reporting and support tooling must make the distinction visible

Operational tooling should expose a clear `test_purchase` or equivalent immutable provider classification next to the provider transaction, without presenting the record as real revenue.

At minimum:

- finance exports exclude test purchases from real sales unless deliberately included in a separately labeled QA section;
- tax/VAT reporting excludes non-commercial test payments from real customer consideration;
- support sees that a transaction is test before manually granting, restoring, refunding, or sanctioning;
- fraud/chargeback dashboards separate simulated test events from real events;
- purchase history shown to operators does not let a test order look identical to a commercial order; and
- test records cannot satisfy checks that require proof of a genuine historical paid purchase.

A support screenshot saying “purchase successful” is not enough to override Google server evidence.

### 9. Ambiguous provider evidence fails closed for production value

If Google verification is unavailable, returns contradictory state, or the integration cannot determine whether a suspicious transaction is test or commercial from the authoritative server record, do not guess in whichever direction grants or removes more value.

Quarantine the transaction for reconciliation, preserve evidence, and retry the authoritative provider lookup. Do not grant unrestricted production Diamonds/VIP merely from client data, and do not confiscate genuine existing entitlements merely because the new transaction is ambiguous.

Provider outage or CK-Labs verification failure is not player misconduct.

### 10. Mandatory rights and genuine purchases remain untouched

Nothing in this gate reduces rights attached to a genuine paid purchase. A real Google Play purchase must still receive the correct TycoonX entitlement and all mandatory consumer remedies applicable to that transaction.

Likewise, labeling something “test” internally cannot be used to evade mandatory law if the provider evidence shows genuine paid consideration or if CK-Labs actually concluded a consumer contract on another lawful basis. The authoritative provider transaction and the actual legal relationship control.

Free, promotional, complimentary, review, staging, or test grants may be governed separately where legally useful, but they must not imply that the live TycoonX service is a beta.

## Required release evidence

Before shipping a Google Play purchase-processing change, retain evidence that:

- the secure backend reads `ProductPurchaseV2.testPurchaseContext` and its `fopType`;
- `fopType=TEST` survives durable purchase-ledger persistence and every replay path;
- production Diamonds, 30-Day VIP and Lifetime VIP cannot be minted from a test purchase by the ordinary purchase worker;
- any intentionally supported entitlement test is allowlisted and isolated from the live economy;
- a testing-track installation alone never causes a genuine purchase to be discarded as test;
- pending/approved/declined test instruments exercise the correct state machine without production value leakage;
- simulated test chargebacks/refunds cannot create production fraud sanctions or deduct genuine entitlements;
- test transactions are excluded from ordinary revenue, VAT/tax, payout, ARPU/LTV and chargeback metrics;
- the three-minute test acknowledgement/refund behavior cannot alter the production three-day rule;
- test Lifetime VIP cannot reopen a closed genuine sales window;
- support tooling visibly distinguishes test from commercial purchases; and
- current Google Play documentation is rechecked before a billing release because provider behavior can change.

## Minimum regression matrix

1. **Test Diamond purchase:** Google returns `PURCHASED` plus `testPurchaseContext.fopType=TEST`; no unrestricted production Diamonds are minted.
2. **Real Diamond purchase on test track:** Google verifies a commercial purchase with no test context; the legitimate paid entitlement is not denied merely because the app is on a test track.
3. **Test Diamond consume:** test purchase is consumed; it remains classified as test and cannot reappear as production value on restore.
4. **Test pending decline:** no entitlement is granted before or after the delayed decline.
5. **Test pending approval:** after `PURCHASED`, only the isolated test entitlement path may run.
6. **Unacknowledged test purchase:** accelerated refund after about three minutes does not change the production three-day acknowledgement rule.
7. **Test chargeback simulation:** reversal logic runs against the test record, with no real fraud strike or production entitlement deduction.
8. **Test 30-Day VIP:** test flow can be verified without starting an ordinary paid 30-consecutive-day production entitlement.
9. **Test Lifetime VIP:** no unrestricted production Lifetime VIP is created and a closed sales window remains closed.
10. **Replay through RTDN:** test transaction reaches client, backend verification and RTDN; classification remains test and fulfillment remains idempotent.
11. **Support replay:** operator attempts manual restore from a test purchase screenshot; production grant is blocked by provider classification.
12. **Ambiguous verification:** Google lookup fails while client says purchase succeeded; transaction is quarantined rather than granted or used for sanctions.
13. **Finance export:** test purchase and simulated refund are excluded from ordinary sales/refund totals.
14. **Regional analytics:** test `regionCode` and tax-free test total do not overwrite real regional-price/tax logic.
15. **Genuine historical purchase on same tester account:** a separate verified commercial transaction remains fully enforceable/restorable despite other test purchases on the account.

## Current official references

- Google Play Billing testing guidance, updated September 1, 2026: https://developer.android.com/google/play/billing/test
- Google Play Developer API `ProductPurchaseV2` reference: https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.productsv2
- Google Play Billing backend guidance, updated September 1, 2026: https://developer.android.com/google/play/billing/backend
- Google Play Billing integration guidance: https://developer.android.com/google/play/billing/integrate

This gate should be reviewed whenever Google changes `ProductPurchaseV2`, license-tester behavior, Play Billing Lab behavior, test instruments, acknowledgement timing, RTDN, or one-time-product settlement.