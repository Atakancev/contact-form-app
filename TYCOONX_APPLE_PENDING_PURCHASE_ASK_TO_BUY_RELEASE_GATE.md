# TycoonX Apple Pending Purchase and Ask to Buy Release Gate

**Release status:** TycoonX is a full-release service from **September 1, 2026**. This gate must not describe the live game, purchases, VIP, Diamonds, users, or rewards as beta.

This is a focused implementation companion to `TYCOONX_MINOR_PURCHASE_PARENTAL_AUTHORIZATION_RELEASE_GATE.md`, `TYCOONX_APPLE_SANDBOX_TESTFLIGHT_PRODUCTION_ISOLATION_RELEASE_GATE.md`, and `TYCOONX_PAYMENT_EVENT_ORDERING_REPLAY_RECONCILIATION_RELEASE_GATE.md`. It does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, or mandatory consumer law.

The purpose is to make Apple's StoreKit **pending-purchase state** safe for TycoonX, especially Ask to Buy and other customer-action flows, without turning a pending request into paid value, a failed purchase, a fraud finding, or an artificial reservation of a limited Lifetime VIP offer.

## 1. Core invariant: pending is neither purchased nor failed

Apple's current StoreKit `Product.PurchaseResult` distinguishes `success`, `pending`, and `userCancelled`.

For TycoonX:

- `.pending` means the purchase requires further action from the customer;
- `.pending` is **not** a verified completed transaction;
- `.pending` is **not** evidence that money finally settled;
- `.pending` is **not** a failed transaction;
- `.pending` is **not** a refund, revocation, chargeback, or fraud event;
- `.pending` is **not** proof that the player is a minor or that Ask to Buy is necessarily the reason;
- `.pending` grants **no purchased Diamonds, no 30-Day VIP, and no Lifetime VIP**.

Only a subsequently verified Apple transaction that validly completes the purchase may authorize production paid-value delivery.

Do not implement `pending = success`, `pending = failed`, or `pending = minor` shortcuts.

## 2. StoreKit completion can arrive later

Apple's current StoreKit documentation says that if a pending purchase later completes, the completed transaction becomes available through `Transaction.updates`.

TycoonX must therefore have a transaction-update listener and reconciliation path that survives the original purchase UI lifecycle.

Operationally:

1. Start the StoreKit transaction update listener early enough in the app lifecycle to receive later completed transactions.
2. Verify the transaction before granting purchased value.
3. Reconcile the transaction against the authoritative TycoonX entitlement/payment ledger.
4. Grant the corresponding economic mutation **exactly once**.
5. Finish the StoreKit transaction only after the required TycoonX delivery/reconciliation step has succeeded or is durably recorded for safe retry.
6. If delivery cannot be confirmed, keep the transaction recoverable rather than marking value delivered merely to clear the queue.
7. Replayed or repeated transaction updates must remain idempotent.

A player does not need to keep the original purchase screen open for TycoonX to recognize a valid later completion.

## 3. Ask to Buy is an approval workflow, not entitlement authority

Apple provides Ask to Buy so an eligible family member can request approval for an app or In-App Purchase. In StoreKit testing, Apple exposes an Ask to Buy pending state that can later be approved or declined.

For TycoonX:

- creating an Ask to Buy request grants nothing;
- displaying an approval-request UI grants nothing;
- a parent or family organizer approving the request is transaction-specific evidence, but TycoonX still waits for the underlying Apple purchase to become a verified completed transaction;
- one Ask to Buy approval cannot authorize later Diamond bundles, a later 30-Day VIP, a later Lifetime VIP sale, an Xsolla purchase, or a Google Play purchase;
- a declined or never-completed request creates no paid entitlement;
- absence of a completed transaction must not be converted into an account debt, negative Diamond balance, fraud strike, or chargeback finding.

Do not infer that every StoreKit `.pending` result is Ask to Buy. Pending may reflect another customer action or provider condition.

## 4. German minor-law boundary remains case-specific

Where German law applies, Apple approval evidence does not replace the required legal analysis of contractual capacity.

In particular, under current **BGB § 108**, where a minor concludes a contract without required prior consent, the contract's effectiveness can depend on later approval by the legal representative. This does not mean that every Apple family approval automatically proves every element of German contractual validity, and it does not mean every transaction by a person under 18 is automatically void.

Release/support handling must keep these questions separate:

- what Apple reports about the specific purchase;
- whether the TycoonX purchase completed and was verified;
- whether required representative consent or later approval exists under applicable law;
- whether another rule such as BGB § 110 is relevant on the actual facts;
- whether a refund, unauthorized-payment remedy, withdrawal right, conformity remedy, or other mandatory right applies.

An Apple platform approval must never be described as a waiver of non-waivable German/EU consumer rights.

## 5. Diamonds: no provisional minting

For purchased Diamonds:

- never mint spendable production Diamonds merely because StoreKit returned `.pending`;
- never create a spendable "temporary" Diamond balance while approval is outstanding;
- never let a pending Diamond quantity enter auctions, companies, markets, transfers, contracts, shops, or any other live economic path;
- never book pending Diamonds as settled paid revenue;
- when Apple later produces one verified completed purchase, grant the purchased Diamond quantity exactly once;
- if the same completed transaction is observed again, do not grant it again;
- if the request never completes, there is nothing to claw back because no purchased Diamond value should have been granted from pending state.

Purchased Diamonds still do not expire merely because time passes.

## 6. One-time 30-Day VIP: clock starts only from valid entitlement availability

One-time 30-Day VIP remains a **one-time, non-renewing entitlement lasting 30 consecutive days**.

A pending Apple purchase must not:

- start the 30-day period;
- consume any portion of the 30-day period;
- create recurring billing;
- reserve a hidden renewal;
- restart an existing 30-Day VIP;
- create overlapping 30-day periods unless a separate valid purchase is lawfully supported by the product configuration and TycoonX rules.

If Apple later confirms one valid completed transaction, activate or make the corresponding 30-Day VIP available under the canonical product rule and record the authoritative entitlement timestamps exactly once.

A later replay or restore of the same transaction must not create a fresh 30-day clock.

## 7. Lifetime VIP and limited sales windows

Lifetime VIP remains a **limited-time promotional one-time entitlement** offered only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability.

The pending-state rules must preserve both sides of that promise:

1. **No reservation from pending alone.** Opening the paywall, tapping buy, creating an Ask to Buy request, or receiving `.pending` does not by itself reserve Lifetime VIP, reserve an earlier price, or create an entitlement.
2. **No reopening after closure.** Once a Lifetime VIP sales window closes, TycoonX must disable new purchase paths for that closed offer. A stale client, old paywall, support action, cached product, or old pending request must not create a new sale.
3. **Honor a genuine later provider completion when applicable.** If Apple later produces a verified completed transaction that validly belongs to the original in-window offer under Apple's rules, TycoonX may honor that provider-confirmed transaction even though the promotional window has since closed, as already stated in the canonical Purchases & Refunds Policy.
4. **Do not manually recreate a failed/expired request.** If the original pending request expires, is declined, disappears, or never becomes a valid completed Apple transaction, Support must not manually issue a new paid Lifetime VIP sale merely because the player once had a pending request.
5. **No price rewrite.** A later valid completion uses the provider-confirmed transaction and legally binding offer information for that transaction. Do not reprice the historical purchase using a later Lifetime VIP price, later regional price, later currency, or current FX rate.
6. **One valid transaction = one Lifetime VIP entitlement.** Retries, restores, later transaction updates, or account recovery must not duplicate Lifetime VIP.

Closing a sales window affects future availability. It does not cancel an already valid completed Lifetime VIP purchase or prevent restoration of a genuine historical entitlement.

## 8. Pending state must survive app lifecycle and account friction safely

A pending purchase can outlive the original screen or app session.

TycoonX must not lose the ability to reconcile a later valid completion merely because:

- the app was backgrounded or terminated;
- the user reopened TycoonX later;
- the user changed device;
- the player reauthenticated;
- a transient network outage occurred;
- CK-Labs had an infrastructure outage;
- the app updated to a newer supported version;
- the original UI request object no longer exists in memory.

At the same time, TycoonX must not bind a later transaction to the wrong game account merely because the local session changed while the purchase was pending. Use verified Apple transaction/account-binding evidence and the existing account-binding reconciliation rules.

If account deletion occurred while a provider-side purchase was pending, do not silently recreate deleted gameplay state. Reconcile any later completed Apple transaction according to the canonical account-deletion, restore, purchaser-control, and mandatory-rights rules.

## 9. Pending is not a fraud or enforcement signal

A pending Apple purchase alone must not create or increase:

- a fraud score;
- an exploit or hack flag;
- a chargeback strike;
- a regional-price-abuse finding;
- an account-compromise finding;
- an entitlement-abuse label;
- a player debt;
- an account suspension or termination decision.

Repeated requests can be investigated where there is independent evidence of abuse, but merely retrying after an unresolved or failed provider flow is not enough to prove abuse.

Do not infer age, parental status, household structure, or legal incapacity from `.pending` alone.

## 10. Finance, tax, and analytics separation

Pending purchase attempts are not settled sales.

They must not be counted as completed paid revenue, completed Lifetime VIP sales, paid Diamond sales, completed 30-Day VIP sales, VAT/tax settlement, chargebacks, refunds, or successful promotion conversions unless and until the relevant authoritative transaction state supports that classification.

It is acceptable to measure a privacy-compliant aggregate funnel stage such as `purchase_pending` where there is a lawful basis and it is genuinely needed, but analytics must not become entitlement authority.

The historical provider-confirmed amount, currency, product, quantity, and purchase timestamp of a later completed transaction must remain separate from current catalog prices and internal EUR accounting conversions.

## 11. Sandbox, TestFlight, and StoreKit Testing remain isolated

Ask to Buy and pending scenarios should be tested, but test results cannot leak into production economics.

Apple's sandbox and StoreKit Testing environments can simulate pending/Ask to Buy behavior. TestFlight In-App Purchases use Apple's sandbox environment.

Therefore:

- a sandbox/TestFlight/Xcode pending request must never mint unrestricted production Diamonds or production VIP;
- an approved sandbox Ask to Buy transaction remains sandbox evidence;
- production fraud, revenue, tax, and chargeback metrics must exclude test transactions;
- clearing sandbox purchase history cannot affect a real customer purchase;
- a test approval cannot reopen a production Lifetime VIP sales window.

Use `TYCOONX_APPLE_SANDBOX_TESTFLIGHT_PRODUCTION_ISOLATION_RELEASE_GATE.md` as the production/test boundary.

## 12. Unknown future StoreKit purchase result/state

Future Apple SDKs may add or change states.

For an unknown purchase result or provider state:

1. preserve the raw verified provider value where reasonably necessary for reconciliation;
2. do not coerce it to `success`;
3. do not coerce it to fraud or chargeback;
4. do not grant paid Diamonds or VIP from the unknown state;
5. do not destructively revoke an existing unrelated entitlement solely because the new value is unknown;
6. verify current Apple documentation and update TycoonX mapping before enabling irreversible behavior.

Fail closed for new paid-value creation while preserving mandatory consumer remedies and safe support escalation.

## 13. Support workflow for a stuck Apple pending purchase

When a player reports that an Apple purchase is still pending:

1. identify the exact TycoonX account and Apple product involved without requesting Apple credentials;
2. do not ask for Apple Account passwords, CVV/CVC, full card data, OTP/TAN/authenticator codes, or family-organizer credentials;
3. check whether TycoonX already has a verified completed Apple transaction for the purchase;
4. check whether the same transaction was already fulfilled to prevent a duplicate grant;
5. distinguish pending from refund, revocation, failed purchase, and completed purchase;
6. if Apple still has not provided a completed authoritative transaction, do not manually mint paid value merely from a screenshot of a pending request;
7. direct payment-status or Ask to Buy approval issues to the appropriate Apple/family flow where Apple controls that process;
8. if a later verified completion arrives, reconcile it transaction-specifically and exactly once;
9. preserve unrelated legitimate Apple, Google Play, and Xsolla purchases;
10. keep any legal/minor authorization review separate from technical payment-state reconciliation.

## 14. Mandatory regression scenarios

Before shipping changes to Apple paid-entitlement handling, test at least:

1. Diamond purchase returns `.pending`; zero purchased Diamonds are granted.
2. Pending Diamond purchase later completes through `Transaction.updates`; the bundle grants once.
3. The same completed Diamond transaction is replayed; it does not grant again.
4. Ask to Buy request exists but is not yet approved; no paid entitlement exists.
5. Ask to Buy is approved but the underlying Apple purchase has not produced a verified completed transaction; no paid entitlement exists yet.
6. Ask to Buy later completes while the app is not on the purchase screen; TycoonX reconciles the verified transaction once.
7. Ask to Buy request is declined or never completes; no clawback runs because nothing was granted from pending state.
8. A non-Ask-to-Buy Apple condition returns `.pending`; TycoonX does not label the player a minor.
9. 30-Day VIP returns `.pending`; the 30-day clock does not start.
10. 30-Day VIP later completes; one 30-consecutive-day entitlement is created according to the canonical activation/availability rule.
11. The same 30-Day VIP transaction is restored/replayed; no new 30-day clock is created.
12. Lifetime VIP request becomes pending during an open genuine sales window, but the window closes before completion; no entitlement exists from pending alone.
13. Apple later returns a valid completed transaction that genuinely belongs to that original in-window Lifetime VIP offer; TycoonX honors it once without reopening the catalog.
14. The old Lifetime VIP pending request never completes after the window closes; Support does not manually create a new sale.
15. A stale app still displays the closed Lifetime VIP offer; new purchase initiation is blocked/fails safely rather than reopening the campaign.
16. App is terminated while purchase is pending; later verified completion is recovered through the transaction-update/reconciliation path.
17. Player changes TycoonX session/account while an Apple purchase is pending; later completion is not blindly attached to the current wrong account.
18. Pending purchase remains unresolved during an outage; outage recovery does not convert it to paid value or fraud.
19. Sandbox Ask to Buy approval completes; no production entitlement or production revenue is created.
20. Support receives only a screenshot saying an Apple purchase is pending; Support does not manually grant paid Diamonds/VIP.
21. An unknown future StoreKit result appears; no paid value is granted and no unrelated entitlement is destroyed.
22. Parent disputes a later completed minor purchase; payment correction, legal authorization analysis, and account enforcement remain separate.
23. A pending purchase eventually fails without a completed transaction; no negative balance, debt, or fraud strike is generated from the pending attempt.
24. Two workers observe the same later completed transaction concurrently; exactly one economic mutation occurs.

## 15. Release checklist

Do not ship Apple purchase changes unless all are true:

- [ ] `.pending` grants no paid TycoonX value.
- [ ] `Transaction.updates` or an equivalent current StoreKit reconciliation path is handled.
- [ ] only verified completed Apple transactions authorize production paid-value delivery.
- [ ] completed transaction delivery is idempotent and concurrency-safe.
- [ ] pending state is distinct from failure, refund, revocation, chargeback, fraud, and minor status.
- [ ] Diamonds are never provisionally minted from pending state.
- [ ] 30-Day VIP does not start while pending and remains one-time/non-renewing for 30 consecutive days.
- [ ] Lifetime VIP pending state does not reserve the offer or reopen a closed sales window.
- [ ] a genuine later Apple completion validly tied to the original Lifetime VIP offer can still be honored without recreating the sale.
- [ ] account/session changes cannot blindly remap a pending transaction to the wrong TycoonX account.
- [ ] sandbox/TestFlight/Xcode pending flows remain isolated from production.
- [ ] pending attempts are excluded from settled revenue/tax/refund/chargeback metrics.
- [ ] support does not grant from screenshots or request payment credentials.
- [ ] unknown future Apple states fail closed for paid-value creation.
- [ ] German/EU mandatory consumer and minor-contract rights remain intact.
- [ ] rendered/legal prose spells the game **TycoonX** exactly.
- [ ] no live-service beta wording appears.

## 16. Canonical/localization impact

The canonical English Purchases & Refunds Policy already states that:

- an Apple purchase still reported as pending creates no TycoonX paid entitlement until Apple reports a completed valid transaction;
- a provider-approved pending Apple transaction that later validly completes may be granted at that later time, including where a limited promotion ended meanwhile and the transaction validly relates to that offer;
- a pending state before a Lifetime VIP sales window closes does not by itself reserve Lifetime VIP or an earlier price;
- pending purchases do not create duplicate entitlements;
- Apple, Google Play, and Xsolla remain distinct channels;
- mandatory rights remain intact.

This gate therefore **does not materially change canonical player-facing meaning and does not reopen the completed localization queue**. If canonical meaning changes later, update the affected localized document type in the required locale order.

## 17. Sources checked September 9, 2026

Official sources used for this gate:

- Apple StoreKit `Product.PurchaseResult`: https://developer.apple.com/documentation/storekit/product/purchaseresult
- Apple StoreKit In-App Purchase overview: https://developer.apple.com/in-app-purchase/
- Apple StoreKit Test `pendingAskToBuyConfirmation`: https://developer.apple.com/documentation/storekittest/sktesttransaction/pendingasktobuyconfirmation
- Apple WWDC21 `Meet StoreKit 2` transaction-update/Ask to Buy example: https://developer.apple.com/videos/play/wwdc2021/10114/
- Apple sandbox testing overview: https://developer.apple.com/help/app-store-connect/test-in-app-purchases/overview-of-testing-in-sandbox
- German BGB § 108: https://www.gesetze-im-internet.de/bgb/__108.html

Review this gate whenever Apple materially changes StoreKit purchase-result semantics, `Transaction.updates`, Ask to Buy, Family Sharing purchase approval behavior, sandbox/TestFlight transaction behavior, or the relevant German/EU mandatory-law baseline.
