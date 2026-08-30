# TycoonX Account Deletion Release Gate

Last reviewed: August 30, 2026

This checklist is for the TycoonX September 1, 2026 release. It supplements, but does not replace, the TycoonX Privacy Policy, Terms of Service, Purchases & Refunds Policy, mandatory consumer law, or platform rules.

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

## Google Play release gate

Google Play currently requires apps that allow account creation to provide account deletion both in-app and through an external web resource. Google also permits retention of data for legitimate reasons such as security, fraud prevention, or regulatory compliance where the retention is accurately disclosed.

Before release:

- [ ] Confirm the Android app contains an in-app account-deletion path.
- [ ] In Play Console → App content → Data safety, set the account-deletion web URL to the production `https://kurzai.com/tycoonx-delete-account` route.
- [ ] Verify the production URL returns HTTP 200 publicly without VPN, app installation, or a private login wall before the user can understand how to request deletion.
- [ ] Verify the page prominently identifies TycoonX or CK-Labs and makes the deletion-request path immediately discoverable.
- [ ] Submit the Data safety form after changing the deletion URL. The Data safety declaration is app-wide and is not updated merely by shipping a new APK/AAB.
- [ ] Confirm deletion removes the account and associated data except data retained for legitimate reasons that are accurately disclosed in the Privacy Policy.
- [ ] Confirm the external deletion URL remains functional even if the user has uninstalled TycoonX and does not require reinstalling the app.
- [ ] Confirm any retained payment, entitlement, anti-fraud, security, tax, accounting, or legal-claims record is limited to what is actually necessary for the stated lawful purpose rather than retaining the full deleted profile by default.

## Apple release gate

Apple requires apps that support account creation to let users initiate account deletion from within the app. Apple also says the deletion flow should be straightforward and transparent, should explain how billing and cancellation are handled, should tell users when deletion takes additional time, and should provide confirmation when deletion is completed.

Before release:

- [ ] Confirm the iOS app contains an in-app account-deletion path that initiates deletion rather than only deactivation or support contact.
- [ ] If deletion can be completed directly in-app, do not unnecessarily force the user through email or telephone support.
- [ ] If account deletion requires additional steps for security, keep them proportionate and explain them clearly.
- [ ] If a website is required to finish deletion, link directly to the deletion page rather than to a generic support homepage.
- [ ] Tell the user the expected processing time before final submission when deletion is not immediate, and send a completion confirmation when the account has actually been deleted.
- [ ] Because TycoonX supports In-App Purchases, explain separately that deleting the TycoonX account does not itself cancel, reverse, or refund an Apple transaction.
- [ ] TycoonX currently offers one-time purchases rather than an auto-renewing VIP subscription. If any recurring Apple product is introduced later, the deletion flow must explain that Apple billing can continue until separately canceled and must provide a compliant subscription-management route.
- [ ] If Sign in with Apple is used for account creation/authentication, revoke the user's Sign in with Apple tokens as part of the deletion workflow where Apple's current requirements apply.
- [ ] Keep App Store privacy disclosures consistent with actual deletion and retention behavior.

## GDPR and German/EU deletion safeguards

Account deletion and a GDPR erasure request can overlap, but they are not always identical. GDPR Article 17 contains both erasure rights and exceptions, while Articles 12 and 17 do not justify retaining a whole deleted account merely because a narrow tax, fraud, entitlement, or legal-claims record must remain.

- [ ] Delete or irreversibly anonymize personal data that is no longer necessary after the account is closed.
- [ ] Retain only the minimum data still supported by a valid legal basis and document the purpose, category, access restrictions, and retention period.
- [ ] Do not use an erasure exception as a reason to keep unrelated gameplay, profile, chat, social, or marketing data.
- [ ] Keep transaction/accounting records only for the legally required or otherwise lawful period, then delete or anonymize them when the purpose expires.
- [ ] Keep fraud/security evidence only where proportionate to the identified risk, dispute, legal claim, or legitimate anti-abuse purpose.
- [ ] If a privacy-right request requires additional time under applicable law, notify the user within the original response period and explain the reason where required.
- [ ] Account deletion must not be presented as a waiver of mandatory consumer remedies, an applicable statutory withdrawal right, or a valid unresolved payment dispute.

## Paid entitlement safety

Deletion must distinguish account state from payment-provider transaction history.

- [ ] Deleting a TycoonX account must not silently create a refund.
- [ ] Deleting a TycoonX account must not silently waive an applicable refund, statutory withdrawal, conformity, price-reduction, damages, or other mandatory remedy.
- [ ] If a player wants a refund or statutory withdrawal instead of deletion, direct them to the applicable Apple, Google, Xsolla, CK-Labs, or statutory process without making deletion a prerequisite.
- [ ] Deletion must not erase provider records that CK-Labs must retain to reconcile refunds, chargebacks, fraud, tax/accounting, or restore a valid restorable entitlement where platform rules, contract, or law require restoration.
- [ ] Purchased or earned Diamonds, gameplay inventory, and other account state may be deleted with the account only subject to applicable mandatory rights and any unresolved transaction-specific refund/withdrawal claim.
- [ ] 30-Day VIP is a one-time time-limited entitlement. Deletion must not restart its 30-day clock, and a later restore must not create a fresh 30 days merely because an old store transaction exists.
- [ ] A valid Lifetime VIP purchase may remain restorable after deletion where platform records, contract, or mandatory law support restoration. Restoration must not automatically recreate deleted gameplay progress, consumed Diamonds, inventory, social history, companies, assets, or transferred value.
- [ ] Reasonable purchaser verification should be required before attaching a restorable paid entitlement to a new or replacement TycoonX account.
- [ ] A verified store transaction that was already fulfilled to one TycoonX account must not create a second copy on another account merely because the original account was deleted.
- [ ] A legitimate supported entitlement migration should move the entitlement atomically after verification rather than duplicating it.
- [ ] Minimum transaction/entitlement evidence retained for restoration must be separated from ordinary profile/gameplay data as far as reasonably practicable and must not be repurposed for unrelated marketing or profiling.

## Current and future billing disclosure

TycoonX currently distinguishes:

- **Diamonds:** one-time virtual-currency purchases;
- **30-Day VIP:** one-time, non-recurring 30-day access;
- **Lifetime VIP:** one-time limited-window promotional access for the commercial operating lifetime of TycoonX, not a recurring subscription.

The account-deletion UI must not call these current products subscriptions or imply that deleting the account cancels a recurring charge that does not exist.

If CK-Labs later introduces a recurring product:

- account deletion must not be relied on as the cancellation mechanism;
- the user must receive the platform/provider cancellation route before deletion;
- deletion may be offered immediately even where platform billing continues until separately canceled, unless a different mandatory rule applies; and
- the public legal terms and localized documents must be refreshed before launch if the recurring product materially changes the canonical legal framework.

## Verification evidence to keep

- [ ] Screenshot the live web deletion page, including processing-time and purchase/entitlement explanations.
- [ ] Screenshot the in-app iOS deletion path.
- [ ] Screenshot the in-app Android deletion path.
- [ ] Record the Play Console Data safety deletion URL and submission date.
- [ ] Test one deletion request end to end, including acknowledgement, identity verification where needed, actual deletion, lawful retained-record separation, and completion confirmation.
- [ ] Test deletion of an account with unused Diamonds and document the transaction-specific treatment without silently destroying a live mandatory refund/withdrawal claim.
- [ ] Test deletion of an account with active 30-Day VIP and prove a historical restore does not restart the 30-day period.
- [ ] Test deletion of an account with valid Lifetime VIP and prove any supported restore grants at most one entitlement and does not recreate deleted gameplay state.
- [ ] Verify that deleted public user-generated content is removed or anonymized except where a specific lawful retention reason applies.

## Official references checked August 30, 2026

- Apple, **Offering account deletion in your app**: https://developer.apple.com/support/offering-account-deletion-in-your-app
- GDPR Article 17, **Right to erasure**: https://eur-lex.europa.eu/eli/reg/2016/679/art_17/oj/eng
- Google Play account deletion policy resource: https://support.google.com/googleplay/android-developer/answer/13327111

## Current status

Public web deletion request surface: **implemented in repository and hardened for purchase/entitlement, timing, and mandatory-rights disclosure**.

Still requires live-release verification: **iOS in-app deletion, Android in-app deletion, production URL deployment, Play Console Data safety URL, Sign in with Apple token revocation if applicable, end-to-end deletion behavior, completion confirmation, and paid-entitlement restore tests**.
