# TycoonX Dormant and Inactive Account Entitlement Release Gate

Last reviewed: September 1, 2026

This gate governs dormancy, archival, inactivity cleanup, long-absence reactivation, and paid-entitlement preservation for TycoonX. It supplements the canonical Terms of Service, Privacy Policy, Purchases & Refunds Policy, account-deletion gate, account-enforcement gate, provider-continuity gate, economy-correction gate, business-transfer gate, and permanent-shutdown gate.

The purpose is to let CK-Labs reduce unnecessary data and operational load without silently converting inactivity into forfeiture of valid purchased value. It is an operational release gate, not a substitute for transaction-specific legal review.

## 1. Core rule: inactivity is a state, not a penalty

A TycoonX account that has not been used for a long period may be marked dormant or archived for operational purposes. Inactivity by itself must not be treated as:

- fraud;
- account compromise;
- a chargeback;
- exploit use;
- regional-price abuse;
- abandonment of mandatory consumer rights;
- a request to delete the account;
- consent to new Terms or a new privacy purpose;
- a refund request;
- a waiver of an unresolved purchase dispute; or
- permission to confiscate unrelated legitimate purchased value.

A long absence may justify reasonable re-authentication or security checks when the player returns. It does not by itself prove misconduct.

## 2. Keep account states separate

Production logic should distinguish, at minimum, the following concepts instead of using one generic `inactive` flag:

- **ACTIVE:** ordinary account access is available.
- **DORMANT:** the account still exists, but recent use is absent and optional/background processing may be reduced.
- **ARCHIVED:** selected account data is moved to lower-cost or restricted-access storage while a supported reactivation path remains.
- **SECURITY_RESTRICTED:** access or sensitive actions are temporarily limited because of a concrete security or abuse concern.
- **DELETION_PENDING:** the user has requested account deletion and the deletion workflow is being completed.
- **DELETED:** the account has been deleted or anonymized subject to lawful retained-record exceptions.
- **TERMINATED:** CK-Labs has lawfully ended access under the Terms or applicable law.

Changing an account to `DORMANT` or `ARCHIVED` must not silently perform the legal or commercial consequences of `DELETED` or `TERMINATED`.

## 3. Dormancy threshold and change control

- [ ] Keep the inactivity threshold used by production documented and versioned.
- [ ] Record what event counts as activity, for example authenticated use, successful account recovery, or another deliberate account interaction.
- [ ] Do not use a payment-provider webhook, background notification, analytics callback, or automated server job as proof that the player personally returned unless that meaning is actually justified.
- [ ] Record the exact account fields, jobs, listings, social visibility, or gameplay systems that change when dormancy begins.
- [ ] Re-review the legal and product effect before changing the inactivity threshold or making a dormant-state action more destructive.
- [ ] If a future policy introduces deletion or forfeiture after inactivity, perform a fresh canonical Terms, consumer-law, privacy, platform-rule, purchase, notice, and localization review before deployment.

This gate does not approve a blanket rule that valid paid entitlements disappear merely because a player has not logged in for a fixed number of days.

## 4. GDPR storage limitation and dormant-account minimization

Dormancy is not a reason to keep all identifiable account data forever. GDPR Article 5(1)(e) requires personal data to be kept in identifiable form no longer than necessary for the purposes for which it is processed. GDPR Article 17 can require erasure where data is no longer necessary, subject to the Regulation's applicable exceptions and other lawful retention grounds.

For dormant accounts:

- [ ] Maintain a category-specific retention schedule rather than one indefinite account-wide retention period.
- [ ] Review whether old analytics, device/session data, obsolete support attachments, inactive social metadata, and other nonessential data still need to remain identifiable.
- [ ] Prefer deletion, irreversible anonymization, aggregation, or access-restricted archival where the original identified-data purpose has ended and no other lawful ground supports continued retention.
- [ ] Do not retain an entire historical profile merely because a narrow transaction, tax, entitlement, fraud, security, or legal-claims record still needs to exist.
- [ ] Keep the minimum payment and entitlement evidence reasonably necessary for purchase validation, restoration, refund/reversal reconciliation, accounting/tax obligations, disputes, fraud/security, or legal claims where a valid legal basis exists.
- [ ] Separate retained entitlement/payment evidence from ordinary gameplay, social, marketing, and profiling data as far as reasonably practicable.
- [ ] Keep dormant/archived data protected by proportionate access controls, logging, backup controls, and security measures.
- [ ] When the lawful purpose for a retained record ends, delete or anonymize it rather than relying on dormancy as permanent storage authority.

An account remaining eligible for a valid Lifetime VIP does not mean every piece of personal data associated with the account may be retained forever.

## 5. Account deletion remains separate

If a dormant player requests account deletion, use the dedicated account-deletion workflow and GDPR analysis. Do not merely switch the account from `DORMANT` to `DELETED` without the required deletion, retention, confirmation, entitlement, and platform handling.

Likewise, CK-Labs choosing to archive dormant accounts is not the same as a user requesting erasure.

The account-deletion rules remain authoritative for:

- lawful retained-record exceptions;
- Apple and Google account-deletion obligations;
- Sign in with Apple token revocation where applicable;
- deletion confirmation;
- separation of deletion from refunds and statutory withdrawal;
- non-consumable/restorable entitlement evidence; and
- the fact that restoration of a valid entitlement does not recreate deleted gameplay progress.

## 6. German standard-term fairness guard

If CK-Labs ever considers a contractual inactivity-forfeiture clause, do not assume that calling it an "inactivity policy" makes it enforceable. BGB § 307 requires standard terms to avoid unreasonable disadvantage contrary to good faith and to be clear and understandable. Restrictions on essential contractual rights can also be problematic where they jeopardize the purpose of the contract.

Founder-safe rule for the current release:

- [ ] Do not rely on a blanket clause saying all paid value is forfeited after inactivity.
- [ ] Keep any future dormant-account restriction proportionate, clearly disclosed, tied to a valid reason, and consistent with the purchased product promise and mandatory law.
- [ ] Do not use an internal data-retention preference as a shortcut to erase an otherwise valid paid entitlement.
- [ ] Preserve mandatory withdrawal, conformity, update, termination, price-reduction, refund, damages, and other non-waivable rights where they apply.

This gate does not state that every inactivity-related limitation is automatically unlawful. It requires transaction/product-specific review before CK-Labs relies on one against a consumer.

## 7. Purchased Diamonds

The canonical Terms state: **Purchased Diamonds do not expire solely because time passes.**

Dormancy handling must preserve that rule.

- [ ] Purchased Diamonds must not expire solely because an account is dormant, archived, or unused.
- [ ] Do not impose an inactivity fee, dormant-account fee, maintenance debit, or negative balance that consumes purchased Diamonds merely because the player did not log in.
- [ ] Apple App Review Guideline 3.1.1 currently says credits or in-game currencies purchased through In-App Purchase may not expire.
- [ ] Preserve enough server-side ledger/provenance evidence to distinguish purchased Diamonds from free, promotional, exploit-generated, duplicated, refunded, reversed, or otherwise invalid value when a dormant account is reactivated.
- [ ] If a dormant-account migration changes storage schemas or balance representation, reconcile the legitimate purchased balance before and after the migration.
- [ ] Do not replay a historic consumable purchase as a second Diamond grant merely because a player returns after a long absence.
- [ ] Promotional or free Diamonds may follow separately disclosed valid expiry/eligibility rules where permitted, but those rules must not be silently applied to purchased Diamonds.
- [ ] Game-economy corrections and exploit-generated value remain governed by the dedicated economy-correction gate, not by dormancy.

Example: if a player returns after two years with 500 valid unused purchased Diamonds and 100 expired promotional Diamonds whose expiry was lawfully disclosed, the dormant-account process must not treat all 600 as one forfeitable bucket.

## 8. One-time 30-Day VIP

30-Day VIP is a one-time, non-renewing entitlement for 30 consecutive days from activation or availability as described in the canonical Terms.

Dormancy must not change the original clock.

- [ ] A player choosing not to log in does not pause the 30 consecutive days.
- [ ] A player returning during the original 30-day period receives only the legitimate remaining period, not a fresh 30 days.
- [ ] A player returning after the original 30-day period has ended does not receive another 30 days from a historical transaction replay.
- [ ] Archival, restore, account relinking, provider replay, or migration must not reset the original activation/start time.
- [ ] If TycoonX itself was materially unavailable or non-conforming, assess any legally required remedy separately. Do not call an operator-side outage "player inactivity" to avoid that analysis.
- [ ] A voluntary goodwill extension may be offered where appropriate, but it must be recorded as a separate goodwill action and must not rewrite the original purchase record.

## 9. Lifetime VIP

Lifetime VIP is a limited-window, one-time promotional entitlement for the commercial operating lifetime of the TycoonX Service for the purchasing account, subject to the canonical Terms and mandatory law.

Dormancy alone is not a hidden expiry event.

- [ ] Do not cancel Lifetime VIP solely because the purchaser has not logged in for a fixed period.
- [ ] Do not convert Lifetime VIP to 30-Day VIP because the account was dormant or archived.
- [ ] Preserve a durable entitlement mapping sufficient to restore or reactivate one valid Lifetime VIP exactly once where supported.
- [ ] If internal account identifiers are migrated, link the entitlement through stable CK-Labs account identity plus authoritative provider transaction evidence rather than relying only on a mutable username, email, or device.
- [ ] A reactivation or restore must not create duplicate Lifetime VIP on multiple accounts from one purchase.
- [ ] If account ownership is uncertain after a long absence, CK-Labs may require reasonable purchaser/account verification before restoring the entitlement.
- [ ] Lawful account termination, a refunded or invalid Lifetime VIP transaction, permanent service shutdown, or another event expressly recognized by the canonical Terms is handled under its own gate. It must not be relabeled as "dormancy."

Lifetime VIP remaining restorable does not require CK-Labs to preserve deleted gameplay, consumed Diamonds, old chats, old listings, or other unrelated historical state indefinitely.

## 10. Apple purchase and restore parity

For Apple-origin purchases:

- [ ] Purchased in-game currency must continue to respect Apple's non-expiry rule for purchased credits/in-game currencies.
- [ ] Maintain a restore/reconciliation mechanism for restorable In-App Purchases as required by the applicable Apple rules.
- [ ] A non-consumable Lifetime VIP restore should grant access only after verified entitlement evidence and must be idempotent.
- [ ] Do not treat Apple restoration of a restorable entitlement as permission to replay historic consumable Diamond purchases.
- [ ] If the CK-Labs account mapping was archived, recover the correct account/transaction relationship before attaching the entitlement.
- [ ] If a historical Apple transaction was refunded, revoked, or otherwise invalidated, reconcile that provider state before restoration.
- [ ] Do not delete the only practical server-side mapping needed to honor a valid entitlement unless another reliable supported restoration path remains.

An App Store transaction and a TycoonX account are related evidence, not interchangeable identities.

## 11. Google Play purchase and backend-history parity

Google currently recommends keeping purchase lifecycle and entitlement logic synchronized through a secure backend for one-time purchases as well as subscriptions.

For dormant/reactivated Android accounts:

- [ ] Use `queryPurchasesAsync()` where appropriate on launch, foreground, or reconnection to discover current purchases that may have completed while the app was not active.
- [ ] Verify relevant `purchaseToken` values with the Google Play Developer API before granting or changing paid entitlement state.
- [ ] Keep secure backend purchase metadata and entitlement history sufficient to map purchases to the correct TycoonX account.
- [ ] Do not depend on a deprecated client purchase-history API as the only historical evidence. Google Play Billing's `queryPurchaseHistory()` is deprecated, and historical purchase records needed by the app should be tracked on the backend.
- [ ] Do not use an `orderId` as the sole deduplication key where Google documentation says a purchase token is the safer purchase identity and some purchases may not have an order ID.
- [ ] A consumed Diamond purchase must not be replayed as a new consumable grant simply because a returning device cannot see the old client-side history.
- [ ] Reconcile RTDN, Developer API, backend ledger, and current account state idempotently where they are applicable.

Dormancy must not turn a secure backend purchase record into a new entitlement. The record proves what happened; it does not authorize a duplicate delivery.

## 12. Xsolla historical transaction parity

For official TycoonX webshop purchases processed by Xsolla:

- [ ] Preserve the transaction/order identifier and account mapping needed to verify a historical paid entitlement or later refund/reversal.
- [ ] Xsolla currently documents `new`, `paid`, `done`, `canceled`, and `expired` order states. Do not infer a new paid transaction merely from the fact that an old order record exists.
- [ ] Entitlement delivery or restoration must be tied to authoritative successful payment/order state and must be idempotent.
- [ ] If a historical order was canceled/refunded, do not restore the corresponding paid value as though it remained valid.
- [ ] Preserve transaction-time merchant/provider, price, currency, and tax evidence where required for disputes, accounting, or consumer-rights handling.
- [ ] A dormant-account reactivation must not create another Xsolla order or silently charge a payment method.

Xsolla payment-state handling remains subject to the dedicated Xsolla refund/chargeback and provider-continuity gates.

## 13. Inactivity cleanup must be product-aware

Before any bulk inactivity cleanup that can affect account data:

- [ ] identify whether the account has unused purchased Diamonds;
- [ ] identify whether the account has an active or historical 30-Day VIP;
- [ ] identify whether the account has valid Lifetime VIP;
- [ ] identify unresolved refunds, withdrawals, chargebacks, or payment disputes;
- [ ] identify security/account-compromise cases that still require evidence;
- [ ] identify provider transactions that still need reconciliation;
- [ ] identify legal, tax, accounting, moderation, or authority-related holds; and
- [ ] identify data that can be safely deleted or anonymized independently of those records.

A bulk cleanup should fail closed for paid-entitlement destruction: if the system cannot reliably distinguish paid entitlement evidence from removable dormant data, preserve the minimum necessary record and route the account for review instead of wiping everything.

## 14. Dormant social and economy state

CK-Labs may reduce operational load from dormant accounts where the game design permits, for example by stopping active production, automated market actions, matchmaking visibility, scheduled game jobs, or public discovery.

Those gameplay measures must be distinguished from paid-value forfeiture.

- [ ] Stop or suspend only the gameplay systems the documented inactivity design intends to stop.
- [ ] Do not call a market delisting, production pause, or other game-state action a refund or entitlement revocation.
- [ ] If dormant market/company/union state is unwound for economy integrity, preserve a transaction trail sufficient to explain resulting balances.
- [ ] Do not use dormancy to confiscate unrelated purchased Diamonds or VIP.
- [ ] If a gameplay rule materially changes the value or usability of a continuing paid digital product, apply the separate digital-product change/conformity analysis.

## 15. First login after long inactivity

A return after a long absence may carry additional security risk, but the response should be evidence-based.

- [ ] Require normal authentication and any proportionate risk-based verification needed for a suspicious login.
- [ ] If there is evidence of account takeover, use the account-compromise gate and temporarily freeze sensitive transfers or purchases where reasonably necessary.
- [ ] Do not permanently revoke paid entitlements merely because the device, IP address, country, app version, or authentication provider changed over a long absence.
- [ ] A country/IP mismatch can justify review but is not by itself proof of fraud or regional-price abuse.
- [ ] If an old app version cannot safely display current checkout data, block new purchases until update rather than using the old version as a reason to invalidate historic purchases.
- [ ] Restore normal access after verification where no separate lawful restriction remains.

## 16. Provider migration and business changes

Dormancy does not sever historical purchase provenance.

- If CK-Labs replaces Apple/Google authentication, Xsolla, hosting, database, storage, or another provider, preserve the minimum mapping needed to reconcile still-valid entitlements.
- If TycoonX or CK-Labs is sold, merged, reorganized, or transferred, use the business-transfer/successor gate rather than treating dormant players as unowned data.
- If TycoonX is permanently discontinued, use the permanent-shutdown gate and mandatory consumer-remedy analysis rather than deleting dormant paid accounts first to avoid that analysis.
- A temporary provider outage is not permanent service shutdown and must not be used as an inactivity-forfeiture event.

## 17. No hidden reactivation charge

CK-Labs must not create a surprise real-money debt merely because a player returns.

- [ ] Do not charge a stored payment method to "reactivate" a dormant account unless the player deliberately purchases a clearly disclosed product and validly confirms payment.
- [ ] Do not turn an internal dormant-account maintenance cost into an undisclosed fee against existing purchased Diamonds.
- [ ] Do not require repurchase of a still-valid Lifetime VIP merely because an archived account needs to be reactivated.
- [ ] Do not require a new 30-Day VIP purchase to access unrelated base account data if the base Service is otherwise available to that account.
- [ ] Future reactivation products, if ever introduced, require their own pricing, checkout, fairness, and consumer-law review before release.

## 18. Support and dispute handling

Support should be able to distinguish:

1. "I have not played for a long time and cannot log in."
2. "My purchased Diamonds disappeared."
3. "My old 30-Day VIP shows a wrong start/expiry time."
4. "My Lifetime VIP is missing after account/provider migration."
5. "I previously deleted my account and now want a restorable entitlement."
6. "My purchase was refunded or charged back."
7. "I believe my account was compromised while inactive."

Do not answer all of these cases with a generic "inactive account" template.

For paid disputes, collect only reasonable non-secret evidence such as transaction/order IDs, non-sensitive receipts, timestamps, product IDs, account identifiers, or provider state. Support must not request passwords, full card numbers, CVVs, OTP/TAN/SMS codes, or authentication backup codes.

## 19. Regression scenarios

Release QA should cover at least:

1. **Unused purchased Diamonds after long absence:** account becomes dormant and returns; legitimate purchased balance remains.
2. **Promotional expiry:** only a separately disclosed, lawful promotional balance expires; purchased Diamonds remain.
3. **30-Day VIP returns on day 10:** original clock continues; only the legitimate remaining time is available.
4. **30-Day VIP returns after expiry:** no fresh 30 days are created from historical purchase evidence.
5. **Lifetime VIP dormant:** entitlement is restored/reactivated exactly once.
6. **Apple non-consumable restore:** valid Lifetime VIP restores without replaying consumable Diamonds.
7. **Apple refunded entitlement:** a refunded entitlement is not restored merely because the account returns.
8. **Google purchase completes while app absent:** reconciliation through current provider/backend state grants exactly once.
9. **Google consumed Diamond history:** historical consumable evidence does not grant Diamonds twice.
10. **Xsolla historical paid order:** valid entitlement maps to the correct account without a new payment.
11. **Xsolla canceled order:** canceled/refunded order does not restore value.
12. **Archived profile:** nonessential old profile/social data can be minimized while minimum lawful entitlement evidence remains.
13. **GDPR erasure request:** dormancy does not replace the dedicated erasure/deletion workflow.
14. **Security-restricted return:** suspicious login can be temporarily protected without immediate permanent entitlement loss.
15. **Provider migration:** stable entitlement provenance survives authentication/database/provider replacement.
16. **Business transfer:** dormant users follow the successor-transfer gate.
17. **Permanent shutdown:** dormant paid accounts are included in the shutdown/remedy assessment rather than silently purged first.
18. **Economy cleanup:** dormant production/market jobs can stop without deleting unrelated purchased value.
19. **Outdated app:** returning player must update before a new unsafe purchase flow, but historic valid entitlements remain reconcilable.
20. **Duplicate restore event:** retries and provider replays remain idempotent.

## 20. Evidence to retain for release

Keep dated evidence for the actual production implementation:

| Evidence | Why it matters |
| --- | --- |
| current inactivity threshold and definition of activity | proves what triggers dormancy |
| state-transition table | prevents dormant/archive/delete/terminate confusion |
| data-category retention schedule | GDPR storage-limitation evidence |
| dormant-account data inventory | shows what is minimized and what remains |
| entitlement preservation test for purchased Diamonds | proves no inactivity expiry |
| 30-Day VIP original start/expiry test | proves no pause or reset |
| Lifetime VIP dormant/reactivation test | proves no hidden expiry or duplicate restore |
| Apple restore/non-expiry test | App Store parity |
| Google backend/token reconciliation test | Play entitlement parity |
| Xsolla paid/canceled order reactivation test | webshop entitlement parity |
| security-restricted reactivation test | separates compromise from inactivity |
| deletion-versus-dormancy test | keeps user erasure separate |
| bulk cleanup dry-run and before/after counts | prevents destructive mass mistakes |
| rollback procedure | allows recovery if cleanup corrupts entitlement state |

Evidence should be sufficient to reconstruct why a specific dormant account changed state and what happened to its paid entitlements without requiring retention of unrelated personal data forever.

## 21. Official references checked September 1, 2026

- GDPR Article 5, storage limitation: https://eur-lex.europa.eu/eli/reg/2016/679/art_5/oj/eng
- GDPR Article 17, right to erasure and exceptions: https://eur-lex.europa.eu/eli/reg/2016/679/art_17/oj/eng
- German BGB § 307, standard-term content control: https://www.gesetze-im-internet.de/bgb/__307.html
- Apple App Review Guidelines, section 3.1.1: https://developer.apple.com/app-store/review/guidelines/
- Google Play Billing, purchase verification/backend metadata: https://developer.android.com/google/play/billing/developer-payload
- Google Play Billing backend integration: https://developer.android.com/google/play/billing/backend
- Xsolla order lifecycle/status tracking: https://developers.xsolla.com/api/catalog/order

## 22. Release decision

Dormant/inactive account handling is not release-ready merely because an account can be marked inactive.

Before CK-Labs relies on a production inactivity cleanup, it should prove that:

- purchased Diamonds do not expire solely due to inactivity;
- 30-Day VIP keeps its original consecutive-day clock and never restarts on reactivation;
- Lifetime VIP has no hidden inactivity expiry and restores at most once;
- Apple, Google Play, and Xsolla purchase evidence reconciles to the correct account without duplicate grants;
- dormant personal data is minimized under a documented retention schedule rather than retained indefinitely;
- deletion, security restriction, termination, business transfer, provider outage, economy correction, and permanent shutdown remain separate workflows; and
- a bulk cleanup can be rolled back or reconstructed without destroying authoritative paid-entitlement provenance.

Until those production controls are proven, destructive dormant-account cleanup that could erase or forfeit valid paid value should remain disabled or constrained to a non-destructive state transition.
