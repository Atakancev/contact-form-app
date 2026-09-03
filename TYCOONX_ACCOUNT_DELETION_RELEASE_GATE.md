# TycoonX Account Deletion Release Gate

Last reviewed: September 4, 2026

This checklist is for the live TycoonX service. It supplements, but does not replace, the TycoonX Privacy Policy, Terms of Service, Purchases & Refunds Policy, mandatory consumer law, or platform rules.

## Public deletion resource

- [x] Dedicated public route exists at `/tycoonx-delete-account`.
- [x] The page explicitly identifies **TycoonX** and **CK-Labs**.
- [x] The page lets a user request deletion without reinstalling or opening the app.
- [x] The page explains that account deletion is separate from a payment refund or statutory withdrawal request.
- [x] The page explains that limited records may be retained where legally permitted or required for tax, accounting, fraud prevention, security, disputes, legal claims, or valid paid-entitlement restoration.
- [x] The page warns users not to send passwords, full payment-card numbers, or authentication codes.
- [x] The page supports reasonable identity verification before destructive deletion.
- [x] The page states a realistic processing target, explains that additional verification or a lawful extension may take longer, and promises completion confirmation.
- [x] The page explains the effect of deletion on Diamonds, 30-Day VIP, Lifetime VIP, and any future recurring product without implying that deletion waives mandatory refund, withdrawal, conformity, or other consumer rights.
- [x] The page states that, where applicable digital-product law gives the user a separate right to retrieve qualifying content they provided or created, account deletion does not waive that right.

## Google Play release gate

Google Play currently requires apps that allow account creation to provide account deletion both in-app and through an external web resource. Google also permits retention of data for legitimate reasons such as security, fraud prevention, or regulatory compliance where the retention is accurately disclosed.

Before release or any material deletion-flow change:

- [ ] Confirm the Android app contains an in-app account-deletion path.
- [ ] In Play Console → App content → Data safety, set the account-deletion web URL to the production `https://kurzai.com/tycoonx-delete-account` route.
- [ ] Verify the production URL returns HTTP 200 publicly without VPN, app installation, or a private login wall before the user can understand how to request deletion.
- [ ] Verify the page prominently identifies TycoonX or CK-Labs and makes the deletion-request path immediately discoverable.
- [ ] Submit the Data safety form after changing the deletion URL. The Data safety declaration is app-wide and is not updated merely by shipping a new APK/AAB.
- [ ] Confirm deletion removes the account and associated user data except data retained for legitimate reasons that are accurately disclosed in the Privacy Policy.
- [ ] Confirm the external deletion URL remains functional even if the user has uninstalled TycoonX and does not require reinstalling the app.
- [ ] Confirm temporary account deactivation, disabling, or freezing is not presented as account deletion.
- [ ] Confirm any retained payment, entitlement, anti-fraud, security, tax, accounting, or legal-claims record is limited to what is actually necessary for the stated lawful purpose rather than retaining the full deleted profile by default.

## Apple release gate

Apple requires apps that support account creation to let users initiate account deletion from within the app. Apple also says the deletion flow should be straightforward and transparent, should explain how billing and cancellation are handled, should tell users when deletion takes additional time, and should provide confirmation when deletion is completed.

Before release or any material deletion-flow change:

- [ ] Confirm the iOS app contains an in-app account-deletion path that initiates deletion rather than only deactivation or support contact.
- [ ] If deletion can be completed directly in-app, do not unnecessarily force the user through email or telephone support.
- [ ] If account deletion requires additional steps for security, keep them proportionate and explain them clearly.
- [ ] If a website is required to finish deletion, link directly to the deletion page rather than to a generic support homepage.
- [ ] Tell the user the expected processing time before final submission when deletion is not immediate, and send a completion confirmation when the account has actually been deleted.
- [ ] Because TycoonX supports In-App Purchases, explain separately that deleting the TycoonX account does not itself cancel, reverse, or refund an Apple transaction.
- [ ] TycoonX currently offers one-time purchases rather than an auto-renewing VIP subscription. If any recurring Apple product is introduced later, the deletion flow must explain that Apple billing can continue until separately canceled and must provide a compliant subscription-management route.
- [ ] If Sign in with Apple is used for account creation/authentication, revoke the user's Sign in with Apple tokens as part of the deletion workflow where Apple's current requirements apply.
- [ ] Keep App Store privacy disclosures consistent with actual deletion and retention behavior.
- [ ] Where Apple requires associated user-generated content to be deleted with the account, do not rely on a broader contractual license or a German-law continued-use exception as a reason to ignore the stricter applicable App Store requirement. Preserve only content or records that a specific law, platform exception, third-party right, or technically unavoidable backup cycle permits or requires.

## GDPR and German/EU deletion safeguards

Account deletion and a GDPR erasure request can overlap, but they are not always identical. GDPR Article 17 contains both erasure rights and exceptions, while Articles 12 and 17 do not justify retaining a whole deleted account merely because a narrow tax, fraud, entitlement, or legal-claims record must remain.

- [ ] Delete or irreversibly anonymize personal data that is no longer necessary after the account is closed.
- [ ] Retain only the minimum data still supported by a valid legal basis and document the purpose, category, access restrictions, and retention period.
- [ ] Do not use an erasure exception as a reason to keep unrelated gameplay, profile, chat, social, or marketing data.
- [ ] Keep transaction/accounting records only for the legally required or otherwise lawful period, then delete or anonymize them when the purpose expires.
- [ ] Keep fraud/security evidence only where proportionate to the identified risk, dispute, legal claim, or legitimate anti-abuse purpose.
- [ ] If a privacy-right request requires additional time under applicable law, notify the user within the original response period and explain the reason where required.
- [ ] Account deletion must not be presented as a waiver of mandatory consumer remedies, an applicable statutory withdrawal right, or a valid unresolved payment dispute.
- [ ] A request to exercise a GDPR right is not itself proof of fraud, chargeback abuse, ban evasion, account compromise, or entitlement abuse.

## German/EU digital-product termination and user-created content

For covered German consumer contracts on digital products, **BGB § 327p** creates consequences that are separate from ordinary GDPR erasure. The equivalent EU rule is Article 16 of Directive (EU) 2019/770. These rules matter when a covered digital-product contract is legally terminated; they do not mean that every voluntary account deletion is automatically the same legal event.

### Classification first

- [ ] Record whether the event is only an account-deletion request, a GDPR erasure request, a statutory withdrawal, a termination of a specific paid digital-product contract, a termination for non-conformity, a whole-service contract termination, or a combination of these.
- [ ] Do not force a consumer to delete the whole TycoonX account merely to exercise a transaction-specific statutory withdrawal, refund, price-reduction, conformity, or termination remedy.
- [ ] Do not treat deletion of the profile UI as proof that every underlying purchase contract, payment-provider record, tax record, legal claim, or restorable entitlement has legally ceased to exist.
- [ ] Do not use a content-export request as evidence that the player wants a refund, chargeback, account termination, or deletion unless the player separately makes that request.

### BGB § 327p post-termination rules

Where BGB § 327p applies after termination of a covered digital-product contract:

- [ ] CK-Labs may prevent further use of the terminated digital product, including making the affected service/account access unavailable, while preserving the statutory content-retrieval right where applicable.
- [ ] CK-Labs must not continue using non-personal content that the consumer supplied or created through the covered digital product unless a statutory exception applies.
- [ ] The current statutory exceptions include content that has no utility outside the TycoonX context; content connected exclusively to the consumer's use of TycoonX; content aggregated with other data that cannot be disaggregated or can be disaggregated only with disproportionate effort; and jointly created content where other consumers can continue to use it.
- [ ] Do not expand those exceptions by contract. A broad TycoonX user-content license does not override a mandatory § 327p consequence where the section applies.
- [ ] On a valid request, provide qualifying non-personal content that the user supplied or created free of charge, without hindrance, within a reasonable time, and in a commonly used / customary machine-readable format where the law requires it.
- [ ] The retrieval exception in § 327p(3) currently excludes the statutory categories corresponding to no outside utility, exclusively use-related content, and inseparable/disproportionately difficult aggregated content. Do **not** automatically exclude jointly created content from retrieval merely because other users may continue using it; the German text permits continued use of that jointly created content by CK-Labs in the stated circumstances but does not include that fourth category in the § 327p(3) retrieval exclusion.
- [ ] Where the consumer's request covers personal data instead, route that part through the GDPR/privacy-right workflow rather than pretending § 327p is a substitute for GDPR access or portability rights.

### Withdrawal can trigger the same content consequences

German **BGB § 357(8)** applies § 327p correspondingly to withdrawal from contracts for the supply of digital products. Therefore:

- [ ] A valid statutory withdrawal involving a covered digital product must be checked for the same non-personal-content continued-use and retrieval consequences where § 357(8) applies.
- [ ] The withdrawal workflow must not delete qualifying user-created content so quickly that CK-Labs makes a legally required retrieval impossible, while also not using this as a reason to retain unrelated personal data indefinitely.
- [ ] Purchased Diamonds, 30-Day VIP, and Lifetime VIP must not be recharacterized as user-created exportable content. Their refund, withdrawal, reconciliation, and entitlement consequences remain governed by the purchase contract, payment channel, mandatory consumer law, and authoritative entitlement records.

### Practical TycoonX content classification

Before automating an export or deletion, classify the data instead of exporting the entire database row set:

- **Personal data** such as account identifiers, IP logs, support identity data, or account-linked communications: governed primarily by GDPR/data-protection rules.
- **Potentially qualifying non-personal user-provided or user-created content** such as a user's own creative work or other material they supplied/created in TycoonX: evaluate under § 327p / Article 16 when the statutory trigger exists.
- **Joint content** such as collaboratively created company/community material: evaluate the continued-use exception and the separate retrieval rule carefully rather than assuming one rule controls both.
- **Purely service-context/gameplay state** such as server-calculated levels, market history, virtual production state, or other data with no utility outside TycoonX or connected exclusively to use of TycoonX: may fall within a statutory exception, but do not use the label mechanically where a particular item has independent utility.
- **Payment and entitlement records** such as Apple/Google/Xsolla transaction identifiers, Diamond purchase ledgers, 30-Day VIP activation periods, and Lifetime VIP validity: not a § 327p cash-out or portability mechanism; retain, reconcile, refund, restore, or delete them under the applicable payment, tax, accounting, contract, fraud, and privacy rules.

### Service shutdown readiness

A permanent TycoonX shutdown can create the same problem at larger scale if covered contracts terminate.

- [ ] The shutdown plan must identify whether users have qualifying non-personal content that may need to be made retrievable under mandatory digital-product law.
- [ ] Where legally required, provide a reasonable retrieval mechanism or support process without promising that all gameplay state, virtual assets, leaderboards, or internal logs are portable.
- [ ] Do not convert Diamonds, 30-Day VIP, or Lifetime VIP into cash or an exportable asset merely because user-created content may be retrievable. Mandatory refund, price-reduction, termination, or other remedies remain separate.
- [ ] If the service infrastructure is being retired, preserve only the minimum data and tooling necessary to satisfy remaining legal, payment, tax, dispute, entitlement-restoration, and qualifying content-retrieval obligations for the required period rather than keeping the whole live game stack indefinitely.

## BGB § 327q and privacy-right declarations

German **BGB § 327q** protects the exercise of data-protection rights from being silently converted into a contractual punishment.

- [ ] Exercising data-subject rights or making a data-protection declaration after contract conclusion does not, by itself, invalidate the contract.
- [ ] Withdrawing consent or objecting to further processing does not automatically authorize CK-Labs to terminate TycoonX access, remove Diamonds, cancel 30-Day VIP, expire Lifetime VIP, or treat the player as abusive.
- [ ] For a covered contract involving a series of digital supplies or continuous supply, § 327q(2) can permit termination without a notice period only where, after considering the processing that remains lawful and balancing both parties' interests, continuing the contract until the ordinary end or notice period is unreasonable for the trader. Treat this as a specific legal test, not a blanket "consent withdrawn = account closed" rule.
- [ ] CK-Labs must not claim damages from the consumer merely because exercising data-protection rights or making a data-protection declaration restricts otherwise permissible processing where § 327q(3) applies.
- [ ] If an optional consent is withdrawn, disable only the optional processing/feature that truly depends on that consent where possible rather than deleting the entire account or paid entitlements.
- [ ] If essential processing can no longer lawfully occur and continued contractual performance is genuinely impossible or unreasonable, document the legal basis, affected product, proportionality analysis, remaining lawful processing, notice/termination consequences, and mandatory consumer remedies before acting.

## Paid entitlement safety

Deletion must distinguish account state from payment-provider transaction history.

- [ ] Deleting a TycoonX account must not silently create a refund.
- [ ] Deleting a TycoonX account must not silently waive an applicable refund, statutory withdrawal, conformity, price-reduction, damages, or other mandatory remedy.
- [ ] If a player wants a refund or statutory withdrawal instead of deletion, direct them to the applicable Apple, Google, Xsolla, CK-Labs, or statutory process without making deletion a prerequisite.
- [ ] Deletion must not erase provider records that CK-Labs must retain to reconcile refunds, chargebacks, fraud, tax/accounting, or restore a valid restorable entitlement where platform rules, contract, or law require restoration.
- [ ] Purchased or earned Diamonds, gameplay inventory, and other account state may be deleted with the account only subject to applicable mandatory rights and any unresolved transaction-specific refund/withdrawal claim.
- [ ] 30-Day VIP is a one-time, non-renewing, time-limited entitlement. Deletion must not restart its 30-day clock, and a later restore must not create a fresh 30 days merely because an old store transaction exists.
- [ ] Lifetime VIP is a one-time promotional entitlement available only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability. Ending a sales window does not cancel an already valid Lifetime VIP purchase.
- [ ] A valid Lifetime VIP purchase may remain restorable after deletion where platform records, contract, or mandatory law support restoration. Restoration must not automatically recreate deleted gameplay progress, consumed Diamonds, inventory, social history, companies, assets, or transferred value.
- [ ] Reasonable purchaser verification should be required before attaching a restorable paid entitlement to a new or replacement TycoonX account.
- [ ] A verified store transaction that was already fulfilled to one TycoonX account must not create a second copy on another account merely because the original account was deleted.
- [ ] A legitimate supported entitlement migration should move the entitlement atomically after verification rather than duplicating it.
- [ ] Minimum transaction/entitlement evidence retained for restoration must be separated from ordinary profile/gameplay data as far as reasonably practicable and must not be repurposed for unrelated marketing or profiling.

## Current and future billing disclosure

TycoonX currently distinguishes:

- **Diamonds:** one-time virtual-currency purchases;
- **30-Day VIP:** one-time, non-renewing 30-day access;
- **Lifetime VIP:** one-time limited-window promotional access for the commercial operating lifetime of TycoonX, not a recurring subscription.

The account-deletion UI must not call these current products subscriptions or imply that deleting the account cancels a recurring charge that does not exist.

If CK-Labs later introduces a recurring product:

- account deletion must not be relied on as the cancellation mechanism;
- the user must receive the platform/provider cancellation route before deletion;
- deletion may be offered immediately even where platform billing continues until separately canceled, unless a different mandatory rule applies; and
- the public legal terms and localized documents must be refreshed before launch if the recurring product materially changes the canonical legal framework.

## Account-compromise and destructive-request safety

Deletion is irreversible enough that a compromised session must not become a cheap account-destruction mechanism.

- [ ] Require proportionate reauthentication or ownership verification for a destructive deletion request, especially after a recent credential reset, suspicious login, account-recovery event, or payment-account change.
- [ ] Do not require excessive identity documents merely because a player owns Diamonds or VIP; use the least intrusive verification reasonably sufficient for the risk.
- [ ] A deletion request sent by an attacker does not prove that the legitimate account holder intended to waive gameplay state, abandon a payment dispute, or commit fraud.
- [ ] Where there is credible evidence of compromise, CK-Labs may temporarily hold destructive deletion long enough to verify ownership, but the hold must not become an indefinite pretext to defeat a valid erasure or deletion request.
- [ ] Keep security containment, GDPR processing, consumer-contract remedies, payment reconciliation, and misconduct findings as separate states.

## Verification evidence to keep

- [ ] Screenshot the live web deletion page, including processing-time, purchase/entitlement, and qualifying-content-retrieval explanations.
- [ ] Screenshot the in-app iOS deletion path.
- [ ] Screenshot the in-app Android deletion path.
- [ ] Record the Play Console Data safety deletion URL and submission date.
- [ ] Test one deletion request end to end, including acknowledgement, identity verification where needed, actual deletion, lawful retained-record separation, and completion confirmation.
- [ ] Test deletion of an account with unused Diamonds and document the transaction-specific treatment without silently destroying a live mandatory refund/withdrawal claim.
- [ ] Test deletion of an account with active 30-Day VIP and prove a historical restore does not restart the 30-day period.
- [ ] Test deletion of an account with valid Lifetime VIP and prove any supported restore grants at most one entitlement and does not recreate deleted gameplay state.
- [ ] Verify that deleted public user-generated content is removed or anonymized except where a specific lawful retention/continued-use rule and applicable platform requirements permit otherwise.
- [ ] Test a covered digital-product termination with qualifying non-personal user-created content and prove the user can retrieve that content free of charge, without hindrance, within a reasonable time, and in a commonly used machine-readable format where § 327p applies.
- [ ] Test the four § 327p continued-use exception categories separately; especially prove that the jointly-created-content continued-use exception is not accidentally treated as one of the three retrieval exclusions in § 327p(3).
- [ ] Test a covered statutory withdrawal under BGB § 357(8) and verify the corresponding § 327p content handling without conflating the withdrawal with full-account deletion.
- [ ] Test withdrawal of an optional privacy consent and prove it does not automatically terminate the account or alter unrelated Diamonds, 30-Day VIP, or Lifetime VIP.
- [ ] If any § 327q(2) termination path is implemented, keep a dated legal/product decision record showing why continued performance was unreasonable after considering remaining lawful processing and both parties' interests.

## Official references checked September 4, 2026

- Apple, **Offering account deletion in your app**: https://developer.apple.com/support/offering-account-deletion-in-your-app
- Apple, **App Review Guidelines 5.1.1(v)**: https://developer.apple.com/app-store/review/guidelines/
- Google Play, **User Data / account deletion requirement**: https://support.google.com/googleplay/android-developer/answer/10144311
- GDPR Article 17, **Right to erasure**: https://eur-lex.europa.eu/eli/reg/2016/679/art_17/oj/eng
- German BGB § 327p, **Weitere Nutzung nach Vertragsbeendigung**: https://www.gesetze-im-internet.de/bgb/__327p.html
- German BGB § 327q, **Vertragsrechtliche Folgen datenschutzrechtlicher Erklärungen des Verbrauchers**: https://www.gesetze-im-internet.de/bgb/__327q.html
- German BGB § 357(8), **withdrawal consequences for digital products**: https://www.gesetze-im-internet.de/bgb/__357.html
- Directive (EU) 2019/770, Article 16, **Obligations of the trader in the event of termination**: https://eur-lex.europa.eu/eli/dir/2019/770/oj/eng

## Current status

Public web deletion request surface: **implemented in repository and already includes a qualifying digital-product content-retrieval disclosure**.

Legal/operational gate: **hardened for GDPR erasure, BGB §§ 327p and 327q, BGB § 357(8), Apple/Google deletion rules, paid-entitlement isolation, account compromise, service shutdown, and post-termination user-content retrieval**.

Still requires live-service verification: **iOS in-app deletion, Android in-app deletion, production URL deployment, Play Console Data safety URL, Sign in with Apple token revocation if applicable, end-to-end deletion behavior, completion confirmation, BGB § 327p content-retrieval behavior, § 357(8) withdrawal/content behavior, § 327q privacy-right behavior, and paid-entitlement restore tests**.