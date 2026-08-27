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

### 2. Decide and lock the TycoonX EU payment model

Document which payment options TycoonX will actually offer in EU App Store storefronts from October 1, 2026:

- Apple In-App Purchase only;
- Apple In-App Purchase plus alternative in-app payment processing;
- Apple In-App Purchase plus an actionable out-of-app Xsolla offer/link;
- alternative payment processing without Apple In-App Purchase where Apple permits that model; or
- another Apple-permitted combination.

Apple’s current Attachment 14 framework says the selected payment option or combination applies across all EU storefronts and must remain in effect for 12 months. Subsequent election changes are also subject to a 12-month period. Do not treat one EU country as a test market for a different actionable payment election unless Apple expressly permits it.

Apple separately states that out-of-app offers **without an actionable link** are not part of this 12-month election lock, although the other Attachment 14 requirements still apply. Keep that distinction explicit in implementation and review notes.

### 3. StoreKit entitlement and allowed regions

If TycoonX offers alternative payment processing or out-of-app offers in EU storefronts:

- configure the StoreKit External Purchases or Offers Entitlement that applies under the new EU terms;
- verify the entitlement is present in the correct App ID, provisioning profile, Xcode entitlements, and production binary;
- configure the allowed EU country codes deliberately rather than assuming the entitlement is global;
- do not reuse an obsolete entitlement name or pre-October configuration without confirming Apple still accepts it under Attachment 14; and
- keep non-EU storefront behavior separately gated because the EU entitlement does not create a global right to show Xsolla links.

Apple’s current entitlement profile is restricted to EU storefronts and requires newer OS versions, including at least iOS/iPadOS 26.2 for the new profile. If TycoonX supports earlier OS versions, do not expose a payment UI that depends on an unavailable entitlement/API; obtain Apple’s required compatibility guidance or keep a compliant fallback.

### 4. Runtime checks and ExternalPurchaseCustomLink

Before initiating an alternative purchase flow, verify the Apple-required runtime sequence:

1. call `canMakePayments`;
2. check `ExternalPurchaseCustomLink.isEligible`;
3. after a deliberate user action, call the required `showNotice` disclosure flow before the external or alternative payment path.

When TycoonX either processes an alternative digital purchase inside the app or sends a user to an out-of-app offer using an actionable link, use the Apple-required ExternalPurchaseCustomLink API and disclosure sheet. A normal web link or custom in-app warning is not a substitute where Apple requires the StoreKit API flow.

Test:

- successful link launch;
- cancelled disclosure sheet;
- `canMakePayments == false`;
- `isEligible == false`;
- unsupported OS version;
- unavailable entitlement;
- user returning to TycoonX without purchasing;
- user returning after a successful Xsolla purchase;
- delayed Xsolla confirmation; and
- refund/reversal after entitlement delivery.

### 5. Apple In-App Purchase parity and prominence

If TycoonX offers Apple In-App Purchase together with alternative payment processing or actionable out-of-app offers, Apple’s current EU rules require Apple In-App Purchase to be offered at the same time for each digital purchase merchandised on that user interface and to be displayed at least as prominently as the alternative option.

Release checks:

- do not make the Xsolla or alternative-payment button visually dominant over Apple In-App Purchase;
- do not use wording or visual treatment that disparages, discourages, interrupts, or makes Apple In-App Purchase appear unsafe or inferior;
- use Apple’s current In-App Purchase branding requirements where required;
- if different prices or benefits are shown, keep them accurate and non-misleading; and
- do not silently remove Apple In-App Purchase from a screen while still showing an actionable alternative payment path unless the selected Apple-permitted payment model allows that exact configuration.

### 6. App Store product-page and metadata separation

Apple’s current EU guidance says an App Store product page may not include information about purchasing with an alternative payment option.

Therefore:

- do not place Xsolla prices, Xsolla purchase instructions, alternative-payment URLs, or calls to action in App Store descriptions, screenshots, promotional text, or other product-page metadata unless Apple later expressly permits it for that surface;
- keep the public TycoonX website free to explain lawful web purchases, but do not assume the same copy belongs in App Store metadata; and
- keep App Review notes factual and reviewer-oriented, not consumer-facing purchase promotion.

### 7. PSP readiness and App Review notes

If TycoonX uses Xsolla or another alternative payment service provider in the EU flow:

- identify the PSP by name in App Review notes where Apple requires it;
- verify the PSP is ready to complete a real transaction from the submitted build/environment;
- verify the PSP satisfies the current PCI Level 1 requirement applicable to payment-card handling in Apple’s alternative-payment framework;
- make sure the customer-support process can handle unauthorized-transaction disputes, refunds, and subscription management if recurring products are ever introduced; and
- do not submit a build whose external payment path still points to sandbox-only or incomplete checkout infrastructure.

### 8. Transaction reporting to Apple

For qualifying alternative-payment transactions, verify the required Apple reporting path.

Apple’s current EU guidance requires reporting of alternative-payment activity for commission calculation, including refunds, corrections, one-time purchases, renewals where applicable, and certain tracked flows that do not result in a completed purchase. Reports are due monthly within 15 days after the end of the calendar month.

For supported newer OS versions, use the External Purchase Server API. Earlier supported OS versions may require another Apple-prescribed reporting process.

Release gate:

- every qualifying Xsolla/alternative transaction has an Apple-reporting state;
- every external purchase token is associated with the correct TycoonX account/transaction where required;
- retries are idempotent;
- failed reports are retried safely;
- refunds and reversals reconcile against the same transaction;
- records are retained long enough to support Apple audit and invoice disputes;
- reporting failures cannot duplicate TycoonX entitlement delivery; and
- the monthly reporting deadline is operationally owned rather than left as an undocumented manual task.

### 9. Commission, attribution, tax, and invoice reconciliation

Do not treat Xsolla merchant-of-record settlement as proof that no Apple commission or reporting obligation is owed.

Apple’s current EU framework distinguishes alternative in-app processing from actionable out-of-app offers and applies different commission rules. Current guidance also describes a store-services commission for qualifying sales made within seven days after an actionable out-of-app link tap.

Before enabling Xsolla from the EU app:

- confirm the exact commission model that applies to the selected TycoonX payment election;
- preserve the Apple external-purchase token/link-attribution data needed to support the seven-day attribution rule where applicable;
- reconcile Apple-reportable alternative transactions with Xsolla transaction IDs, TycoonX entitlement delivery, refunds, chargebacks, and Apple invoices;
- verify who is responsible for collection/remittance of transaction taxes under the actual Apple/Xsolla arrangement rather than assuming Apple handles taxes for alternative payments; and
- preserve records sufficient to answer an Apple audit or invoice dispute.

Apple states that unpaid commissions can have platform consequences. Treat commission/reporting reconciliation as a release requirement, not only an accounting clean-up task.

### 10. Customer-support allocation

For alternative payment options, Apple states that the developer is responsible for customer support rather than Apple for issues such as refunds, purchase history, subscription management, and payment problems.

TycoonX Support must therefore be able to identify whether a purchase came from:

- Apple In-App Purchase;
- Xsolla through an EU alternative-payment flow;
- the standalone TycoonX web shop outside the app;
- Google Play; or
- another authorized channel.

Support must not tell an Xsolla purchaser to use Apple’s refund flow or tell an Apple IAP purchaser that Xsolla controls the transaction.

### 11. Child-safety payment gates

Apple’s new EU alternative-payment rules include specific child-safety requirements.

If TycoonX uses alternative payment options in EU storefronts:

- users under 13, or under a higher locally applicable parental-consent threshold, must have alternative in-app payment processing behind the required parental gate and must not receive out-of-app purchase offers where Apple prohibits them;
- users aged 13 to 17, or the corresponding higher local band, must have both alternative in-app payment processing and out-of-app purchase offers behind a parental gate;
- call `canMakePayments` before initiating a payment path;
- do not infer age solely from an editable TycoonX profile field if Apple requires platform-age information or another approved mechanism; and
- document how the app behaves when the user’s age status is unknown or unavailable.

If TycoonX is ever listed in Apple’s Kids category, apply the stricter Kids-category restrictions, including the prohibition on out-of-app offers for Kids-category apps.

### 12. Public legal and checkout parity

The public legal framework already says external-purchase availability depends on platform, country, program, and law. Keep it that way unless the actual TycoonX implementation changes materially.

Before October 1, compare the live implementation against:

- TycoonX Terms of Service;
- Purchases & Refunds Policy;
- Apple Custom EULA;
- TycoonX Privacy Policy;
- Xsolla checkout terms and refund policy; and
- this transition gate.

Do not promise that Apple handles refunds for an Xsolla alternative-payment transaction. Do not describe Xsolla as the merchant of record for a transaction unless the actual checkout identifies the relevant Xsolla entity in that role.

## Recommended rollout decision

For the September 1, 2026 TycoonX full release, do not rush an EU alternative-payment implementation merely because the Xsolla webshop exists. A conservative release path is to keep the currently compliant storefront behavior, finish the October 1 entitlement, reporting, support, child-safety, commission, and App Review work, and only then enable EU alternative payment options when the full Apple flow is verified end to end.

## Source checkpoint

Apple announced the updated EU Developer Program terms on August 18, 2026. The new unified terms and alternative-payment framework take effect on October 1, 2026. Apple’s current guidance and Attachment 14 state that:

- alternative-payment elections apply across EU storefronts and are subject to a 12-month commitment;
- actionable alternative-payment flows require the StoreKit External Purchases or Offers Entitlement and, where applicable, ExternalPurchaseCustomLink plus the Apple disclosure sheet;
- Apple In-App Purchase must be at least as prominent when shown alongside actionable alternatives;
- alternative-payment information may not be promoted on the App Store product page;
- qualifying alternative transactions require reporting, with monthly reporting due within 15 days after month-end;
- child-safety parental-gate restrictions apply; and
- developers using alternative payments take on additional support, payment, tax, reporting, and reconciliation responsibilities.
