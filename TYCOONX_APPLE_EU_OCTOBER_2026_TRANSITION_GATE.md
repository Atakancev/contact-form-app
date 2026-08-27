# TycoonX Apple EU October 2026 Transition Gate

Last reviewed: August 27, 2026

This gate prepares TycoonX for Apple’s updated EU business terms announced on August 18, 2026 and taking effect on October 1, 2026. It is an operational checklist, not public legal copy. It complements the TycoonX Terms, Purchases & Refunds Policy, Apple Custom EULA, and Payment & Entitlement Release Gates.

## Why this exists

Apple is moving EU App Store apps to a unified set of business terms under Attachment 14 of the Apple Developer Program License Agreement. The new terms take effect on October 1, 2026. For TycoonX, this matters because the game may use Apple In-App Purchase and may also want to surface the official Xsolla-powered TycoonX webshop or another alternative payment option in EU storefronts.

Do not assume the pre-October EU entitlement rules remain valid after October 1, 2026.

## P0 before October 1, 2026

### 1. Account Holder acceptance

- Verify that the Apple Developer Program Account Holder has reviewed and accepted the updated Developer Program License Agreement containing Attachment 14.
- Record the acceptance date internally.
- Do not rely on a developer, App Manager, or other role to accept terms that Apple requires the Account Holder to accept.
- Recheck App Store Connect after acceptance for new or changed entitlement configuration.

### 2. Decide the TycoonX EU payment model

Document which payment options TycoonX will actually offer in EU App Store storefronts from October 1, 2026:

- Apple In-App Purchase only;
- Apple In-App Purchase plus alternative in-app payment processing;
- Apple In-App Purchase plus an out-of-app Xsolla offer/link;
- another Apple-permitted combination.

Do not expose multiple payment paths experimentally without recording the selected model. Apple states that developers must maintain their selected EU payment options for 12 months under the new model.

### 3. StoreKit entitlement

If TycoonX offers alternative payment processing or out-of-app offers in EU storefronts:

- configure the StoreKit External Purchases or Offers Entitlement that applies under the new EU terms;
- verify the entitlement is present in the correct App ID, provisioning profile, Xcode entitlements, and production binary;
- do not reuse an obsolete entitlement name or pre-October configuration without confirming Apple still accepts it under Attachment 14;
- keep non-EU storefront behavior separately gated because the EU entitlement does not create a global right to show Xsolla links.

### 4. ExternalPurchaseCustomLink API and disclosure sheet

When TycoonX either:

- processes an alternative digital purchase inside the app; or
- sends a user to an out-of-app offer using an actionable link,

verify the Apple-required ExternalPurchaseCustomLink API integration and disclosure sheet.

A normal web link or custom in-app warning is not a substitute where Apple requires the StoreKit API flow.

Test:

- successful link launch;
- cancelled disclosure sheet;
- unsupported OS version;
- unavailable entitlement;
- user returning to TycoonX without purchasing;
- user returning after a successful Xsolla purchase;
- delayed Xsolla confirmation;
- refund/reversal after entitlement delivery.

### 5. Transaction reporting to Apple

For commissionable alternative-payment transactions, verify the required reporting path.

Apple’s current EU guidance says that for supported newer OS versions the External Purchase Server API is used to report transactions. Earlier supported OS versions may require another Apple-prescribed reporting process.

Release gate:

- every qualifying Xsolla/alternative transaction has an Apple-reporting state;
- retries are idempotent;
- failed reports are retried safely;
- refunds and reversals reconcile against the same transaction;
- records are retained long enough to support Apple audit and invoice disputes;
- reporting failures cannot duplicate TycoonX entitlement delivery.

### 6. Commission and invoice reconciliation

Do not treat Xsolla merchant-of-record settlement as proof that no Apple commission is owed.

Maintain an internal monthly reconciliation that can match:

- Apple-reportable alternative transactions;
- Xsolla transaction IDs;
- TycoonX account/entitlement delivery;
- refunds and chargebacks;
- Apple commission/invoice calculations.

Apple states that it may audit reported digital transactions and that unpaid commission can have platform consequences.

### 7. Customer-support allocation

For alternative payment options, Apple states that the developer is responsible for customer support rather than Apple for issues such as refunds, purchase history, and payment-management problems.

TycoonX Support must therefore be able to identify whether a purchase came from:

- Apple In-App Purchase;
- Xsolla through an EU alternative-payment flow;
- the standalone TycoonX web shop outside the app;
- Google Play or another channel.

Support must not tell an Xsolla purchaser to use Apple’s refund flow or tell an Apple IAP purchaser that Xsolla controls the transaction.

### 8. Child-safety payment gates

Apple’s new EU alternative-payment rules include child-safety requirements.

If TycoonX uses alternative payment options in EU storefronts:

- users below the applicable Apple child threshold must not reach an out-of-app purchase offer where Apple prohibits it;
- alternative in-app payment flows for minors must be placed behind the required parental gate;
- users aged 13 to 17, or the higher locally applicable age band Apple specifies, must receive the required parental gate for alternative payment processing and out-of-app offers;
- do not infer age solely from an editable TycoonX profile field if Apple requires platform-age information or another approved mechanism;
- document how the app behaves when the user’s age status is unknown or unavailable.

If TycoonX is ever listed in Apple’s Kids category, apply the stricter Kids-category rules.

### 9. OS-version compatibility

Apple’s new EU entitlement and APIs have minimum OS-version requirements.

Before enabling a single EU purchase UI globally:

- test every supported iOS/iPadOS version in TycoonX’s deployment range;
- make the alternative-payment UI conditional on entitlement/API availability;
- keep Apple IAP or another compliant fallback where required;
- do not leave an Xsolla button visible if the required Apple flow cannot be completed on that device/version.

### 10. Public legal and checkout parity

The public legal framework already says external-purchase availability depends on platform, country, program, and law. Keep it that way unless the actual TycoonX implementation changes materially.

Before October 1, compare the live implementation against:

- TycoonX Terms of Service;
- Purchases & Refunds Policy;
- Apple Custom EULA;
- TycoonX Privacy Policy;
- Xsolla checkout terms and refund policy;
- this transition gate.

Do not promise that Apple handles refunds for an Xsolla alternative-payment transaction. Do not describe Xsolla as the merchant of record for a transaction unless the actual checkout identifies the relevant Xsolla entity in that role.

## Recommended rollout decision

For the September 1, 2026 TycoonX full release, do not rush an EU alternative-payment implementation merely because the Xsolla webshop exists. A conservative release path is to keep the currently compliant storefront behavior, finish the October 1 entitlement/reporting/child-safety work, and only then enable EU alternative payment options when the full Apple flow is verified end to end.

## Source checkpoint

Apple announced the updated EU Developer Program terms on August 18, 2026. The new unified terms and alternative-payment framework take effect on October 1, 2026. Apple’s current guidance says that alternative payment options in EU App Store apps use the StoreKit External Purchases or Offers Entitlement, require the ExternalPurchaseCustomLink API for alternative in-app processing or actionable out-of-app links, include child-safety requirements, and require transaction reporting for qualifying alternative purchases.
