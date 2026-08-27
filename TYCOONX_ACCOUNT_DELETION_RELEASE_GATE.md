# TycoonX Account Deletion Release Gate

Last reviewed: August 27, 2026

This checklist is for the TycoonX September 1, 2026 release. It does not replace the Privacy Policy or platform rules.

## Public deletion resource

- [x] Dedicated public route exists at `/tycoonx-delete-account`.
- [x] The page explicitly identifies **TycoonX** and **CK-Labs**.
- [x] The page lets a user request deletion without reinstalling or opening the app.
- [x] The page explains that account deletion is separate from a payment refund.
- [x] The page explains that limited records may be retained where legally permitted or required for tax, accounting, fraud prevention, security, disputes, legal claims, or valid paid-entitlement restoration.
- [x] The page warns users not to send passwords, full payment-card numbers, or authentication codes.
- [x] The page supports reasonable identity verification before destructive deletion.

## Google Play release gate

Google Play currently requires apps that allow account creation to provide account deletion both in-app and through an external web resource.

Before release:

- [ ] Confirm the Android app contains an in-app account-deletion path.
- [ ] In Play Console → App content → Data safety, set the account-deletion web URL to the production `https://kurzai.com/tycoonx-delete-account` route.
- [ ] Verify the production URL returns HTTP 200 publicly without VPN, app installation, or a private login wall before the user can understand how to request deletion.
- [ ] Verify the page prominently identifies TycoonX or CK-Labs and makes the deletion-request path immediately discoverable.
- [ ] Submit the Data safety form after changing the deletion URL. The Data safety declaration is app-wide and is not updated merely by shipping a new APK/AAB.
- [ ] Confirm deletion removes the account and associated data except data retained for legitimate reasons that are accurately disclosed in the Privacy Policy.

## Apple release gate

Apple requires apps that support account creation to let users initiate account deletion from within the app.

Before release:

- [ ] Confirm the iOS app contains an in-app account-deletion path that initiates deletion rather than only deactivation or support contact.
- [ ] If account deletion requires additional steps for security, keep them proportionate and explain them clearly.
- [ ] Do not force the user to call support solely to initiate deletion unless Apple permits that flow for the specific account type.
- [ ] Keep App Store privacy disclosures consistent with actual deletion and retention behavior.

## Paid entitlement safety

- [ ] Deleting a TycoonX account must not silently create a refund.
- [ ] Deletion must not erase provider records that CK-Labs must retain to reconcile refunds, chargebacks, fraud, tax/accounting, or restore a valid non-consumable entitlement where platform rules or law require restoration.
- [ ] Restoring a valid Lifetime VIP after deletion must not recreate deleted gameplay progress, consumed Diamonds, inventory, social history, or transferred assets unless mandatory law requires otherwise.
- [ ] Reasonable purchaser verification should be required before attaching a restorable paid entitlement to a new or replacement TycoonX account.

## Verification evidence to keep

- [ ] Screenshot the live web deletion page.
- [ ] Screenshot the in-app iOS deletion path.
- [ ] Screenshot the in-app Android deletion path.
- [ ] Record the Play Console Data safety deletion URL and submission date.
- [ ] Test one real deletion request end to end and document the result without retaining unnecessary personal data.

## Current status

Public web deletion request surface: **implemented in repository**.

Still requires live-release verification: **iOS in-app deletion, Android in-app deletion, production URL deployment, Play Console Data safety URL, and end-to-end deletion behavior**.
