# TycoonX Apple EU October 2026 Transition Gate

Last reviewed: August 30, 2026

This gate prepares TycoonX for Apple’s updated EU business terms announced on August 18, 2026 and taking effect for an account on **October 1, 2026 or the date the Account Holder agrees to the updated terms, whichever is later**. It is an operational checklist, not public legal copy. It complements the TycoonX Terms, Purchases & Refunds Policy, Apple Custom EULA, Privacy Policy, Payment & Entitlement Release Gates, and Xsolla release gates.

## Why this exists

Apple is moving EU App Store apps to a unified set of business terms under Attachment 14 of the Apple Developer Program License Agreement. The Alternative Terms Addendum for Apps in the EU and the StoreKit External Purchase Link Entitlement (EU) Addendum are being phased out. Do not assume a pre-October entitlement, payment election, commission model, reporting route, or tax setup remains valid after the unified terms apply to the CK-Labs developer account.

## P0 before enabling EU alternative payments under the unified terms

### 1. Account Holder acceptance and effective date

- Verify that the Apple Developer Program **Account Holder** has reviewed and accepted the updated Developer Program License Agreement containing Attachment 14.
- Record the acceptance date internally.
- Treat the unified EU terms as applying to the CK-Labs account on **October 1, 2026 or the acceptance date, whichever is later**, consistent with Apple’s current transition guidance.
- Do not assume that merely reaching October 1 makes the new entitlement or payment configuration available if the Account Holder has not completed the required agreement step.
- Do not rely on a Developer, App Manager, or another role to accept terms that Apple requires the Account Holder to accept.
- Recheck App Store Connect, Certificates/Identifiers/Profiles, tax information, and entitlement configuration after acceptance.

### 2. Decide and lock the TycoonX EU payment model

Document which payment option or combination TycoonX will actually offer in EU App Store storefronts once the unified terms apply:

- Apple In-App Purchase only;
- Apple In-App Purchase plus alternative in-app payment processing;
- Apple In-App Purchase plus an actionable out-of-app Xsolla offer/link;
- Apple In-App Purchase plus alternative in-app processing and out-of-app offers;
- alternative payment options without Apple In-App Purchase where Apple permits that exact configuration; or
- another Apple-permitted combination.

Apple’s current unified EU framework says the selected payment option or combination applies across all EU storefronts and must remain in effect for **12 months**. Subsequent election changes are also subject to a 12-month period. Do not treat one EU country as a test market for a different actionable payment election unless Apple expressly permits it.

Apple separately states that out-of-app offers **without an actionable link** are not part of this 12-month election lock, although other applicable Attachment 14 and App Review requirements still apply. Keep that distinction explicit in implementation and review notes.

#### Alternative-only configuration safeguard

If TycoonX chooses to offer **only alternative payment options** in the EU app and also presents any out-of-app offer, Apple’s current guidance requires a **genuine opportunity to choose alternative payment processing within the app**. That in-app alternative processing option must be **viewable and selectable on the same screen as any out-of-app offers** and must not be discouraged, hidden, or obfuscated.

Therefore:

- do not ship an actionable “Xsolla website only” purchase screen as TycoonX’s alternative-only model if the then-current Apple rules require an in-app alternative-processing choice;
- do not make an out-of-app Xsolla button the only practically usable option while technically including an unusable or obscured in-app alternative-processing option; and
- if CK-Labs does not intend to support compliant alternative payment processing within the app, retain Apple In-App Purchase or another Apple-permitted configuration instead of assuming an alternative-only web-link model is allowed.

### 3. StoreKit entitlement and allowed regions

If TycoonX offers alternative payment processing or out-of-app offers in EU storefronts:

- configure the **StoreKit External Purchases or Offers Entitlement** that applies under the unified EU terms;
- verify the entitlement is present in the correct App ID, provisioning profile, Xcode entitlements, and production binary;
- configure `com.apple.developer.storekit.custom-purchase-link.allowed-regions` deliberately for the storefronts actually supported;
- do not reuse an obsolete entitlement name or pre-October configuration without confirming Apple still accepts it under Attachment 14;
- keep non-EU storefront behavior separately gated because the EU entitlement does not create a global right to show Xsolla links; and
- retain a dated screenshot/export of the production entitlement and allowed-region configuration as release evidence.

Apple’s current entitlement profile is limited to EU storefronts and has minimum supported OS requirements, including at least iOS/iPadOS 26.2 for the new profile and later minimum versions on other Apple platforms. If TycoonX supports an earlier OS version, do not expose a payment UI that depends on an unavailable entitlement or API. Use Apple’s prescribed compatibility route or keep a compliant fallback.

### 4. Runtime checks and ExternalPurchaseCustomLink

Before initiating an alternative purchase flow, verify the Apple-required runtime sequence:

1. call `canMakePayments`;
2. check `ExternalPurchaseCustomLink.isEligible`; and
3. after a deliberate user action, call the required `showNotice` disclosure flow before the alternative payment path.

When TycoonX processes an alternative digital purchase inside the app or sends a user to an out-of-app offer using an actionable link, use the Apple-required External Purchase API and disclosure sheet. A normal web link or a custom TycoonX warning is not a substitute where Apple requires the StoreKit flow.

Test at minimum:

- successful alternative-payment initiation;
- cancelled disclosure sheet;
- `canMakePayments == false`;
- `isEligible == false`;
- unsupported OS version;
- unavailable or misconfigured entitlement;
- wrong/non-EU storefront;
- user returning to TycoonX without purchasing;
- user returning after a successful Xsolla purchase;
- delayed Xsolla confirmation;
- duplicate return/deep-link events;
- refund/reversal after entitlement delivery; and
- an account that changes storefront or age/parental status between sessions.

### 5. Apple In-App Purchase parity and prominence

If TycoonX offers Apple In-App Purchase together with alternative payment processing or actionable out-of-app offers, Apple’s current EU guidance requires Apple In-App Purchase to be offered at the same time for each digital purchase merchandised on that user interface and to be displayed **at least as prominently** as the alternative option.

Release checks:

- do not make the Xsolla or alternative-payment button visually dominant over Apple In-App Purchase;
- do not use wording, color, positioning, repeated prompts, or visual treatment that disparages, discourages, interrupts, or makes Apple In-App Purchase appear unsafe or inferior;
- use Apple’s current In-App Purchase branding assets where required;
- if different prices or benefits are shown, keep them accurate and non-misleading;
- do not silently remove Apple In-App Purchase from a screen while still showing an actionable alternative payment path unless the selected Apple-permitted payment model allows that exact configuration; and
- preserve dated screenshots for the actual EU production purchase screens used for Diamonds, 30-Day VIP, and any Lifetime VIP sales window.

### 6. App Store product-page and metadata separation

Apple’s current EU guidance says an **App Store product page may not include information** about purchasing with an alternative payment option.

Therefore:

- do not place Xsolla prices, Xsolla purchase instructions, alternative-payment URLs, QR codes, or calls to action in App Store descriptions, screenshots, promotional text, or other product-page metadata unless Apple later expressly permits it for that surface;
- keep the public TycoonX website free to explain lawful web purchases, but do not assume the same copy belongs in App Store metadata; and
- keep App Review notes factual and reviewer-oriented, not consumer-facing purchase promotion.

### 7. PSP readiness and App Review notes

If TycoonX uses Xsolla or another alternative payment service provider in the EU flow:

- identify the PSP by name in App Review notes where Apple requires it;
- verify the PSP is ready to complete a real transaction from the submitted build/environment;
- verify the PSP satisfies the current **PCI Level 1** requirement applicable to payment-card handling in Apple’s alternative-payment framework;
- make sure the customer-support process can handle unauthorized-transaction disputes, refunds, payment problems, purchase history and subscription management if recurring products are ever introduced;
- do not submit a build whose external payment path points only to a sandbox, test-only, broken, region-ineligible, or incomplete checkout; and
- make sure App Review can reach any test account, test product, and explanatory notes needed to exercise the actual path without exposing real player payment credentials.

### 8. External-purchase token and transaction reporting

For qualifying alternative-payment activity, verify the required Apple reporting path before release.

Apple’s current guidance requires a monthly report **within 15 days after the end of the calendar month** and requires reporting of **all relevant external purchase tokens, including tokens that did not result in a completed purchase**. Reporting can include refunds, corrections, renewals, one-time purchases, and transactions that did not result in a purchase.

Current implementation split:

- on iOS, iPadOS, macOS, tvOS, visionOS, and watchOS **26.4 and later**, use the **External Purchase Server API** for the applicable EU reporting flow;
- for qualifying EU transactions on **OS versions earlier than 26.4**, use Apple’s prescribed manual/example reporting route rather than silently omitting the transaction; and
- if Apple changes this version split or reporting mechanism, update the implementation and this gate before relying on the changed behavior.

Release gate:

- every qualifying Xsolla/alternative-payment token has an Apple-reporting state, including transactionless/non-purchase tokens where Apple requires them;
- every external purchase token is associated with the correct TycoonX account/transaction where required;
- retries are idempotent;
- failed reports are retried safely;
- refunds, corrections, reversals, and renewals reconcile against the same underlying transaction/token where applicable;
- records are retained long enough to support Apple reporting, audit and invoice disputes while respecting privacy/data-minimization rules;
- reporting failures cannot duplicate TycoonX entitlement delivery; and
- the monthly reporting deadline is operationally owned rather than left as an undocumented manual task.

### 9. Commission, attribution, tax, VAT, and invoice reconciliation

Do not treat Xsolla merchant-of-record settlement as proof that no Apple commission, reporting, tax-information, or invoice obligation exists.

Before enabling Xsolla or another alternative payment option from the EU app:

- confirm the exact Apple commission model that applies to the selected TycoonX payment election;
- preserve the Apple external-purchase token and other attribution data required by the then-current terms;
- reconcile Apple-reportable alternative transactions with Xsolla transaction IDs, TycoonX entitlement delivery, refunds, corrections, chargebacks, and Apple invoices;
- verify who is responsible for collection and remittance of transaction taxes under the actual Apple/Xsolla arrangement rather than assuming Apple handles taxes for alternative payments;
- keep records sufficient to answer an Apple audit or invoice dispute; and
- do not treat a provider refund or chargeback as automatically changing what must be reported to Apple without applying Apple’s current reporting rules for the corresponding correction.

#### EU VAT ID blocker

Apple’s current App Store Connect tax guidance says a developer using alternative payment options on an **EU storefront must provide an EU-specific VAT ID demonstrating VAT registration**, and that **one EU VAT ID is sufficient for all EU storefronts**.

Before TycoonX enables the alternative-payment entitlement in production:

- verify CK-Labs has the legally valid VAT registration required for the selected setup;
- verify the correct EU-specific VAT ID has been supplied and accepted in App Store Connect where Apple requires it;
- do not invent, guess, or substitute another tax/TIN identifier for an EU VAT ID;
- if the VAT-registration requirement is unresolved, keep the EU alternative-payment path disabled until the requirement is satisfied or Apple confirms a different treatment for the actual account;
- do not assume Xsolla acting as merchant of record removes Apple’s separate developer-account VAT-ID requirement; and
- if German law independently requires the resulting VAT ID to appear in the public TycoonX Impressum, synchronize the legal notice after the real number exists rather than publishing a placeholder.

#### Apple invoices

Apple’s current EU guidance says qualifying developers receive monthly invoices for applicable commission/fees and that payment is due **within 30 days of receiving the invoice**. Treat this as a live operational obligation:

- assign ownership for invoice retrieval, reconciliation, and payment;
- reconcile the invoice to submitted transaction reports before disputing an amount;
- preserve evidence needed for a legitimate correction or dispute; and
- do not allow a missed internal accounting task to create avoidable App Store or Developer Program consequences.

### 10. Customer-support allocation

For alternative payment options, Apple states that the developer is responsible for customer support rather than Apple for issues such as refunds, purchase history, subscription management, unauthorized transactions, and payment problems.

TycoonX Support must therefore be able to identify whether a purchase came from:

- Apple In-App Purchase;
- Xsolla through an EU alternative-payment flow;
- the standalone TycoonX web shop outside the app;
- Google Play; or
- another authorized channel.

Support must not tell an Xsolla purchaser to use Apple’s refund flow or tell an Apple IAP purchaser that Xsolla controls the transaction. Where Xsolla or another merchant controls a refund procedure, TycoonX Support should still handle TycoonX-side entitlement-delivery defects and provide the correct transaction-routing information.

### 11. Child-safety payment gates

Apple’s unified EU alternative-payment rules include child-safety requirements.

If TycoonX uses alternative payment options in EU storefronts:

- users under 13, or under a higher locally applicable parental-consent threshold, must have alternative in-app payment processing behind the required parental gate and must not receive out-of-app offers where Apple prohibits them;
- users aged 13 to 17, or the corresponding higher local band, must have both alternative in-app payment processing and out-of-app purchase offers behind a parental gate;
- call `canMakePayments` before initiating a payment path;
- do not infer age solely from an editable TycoonX profile field if Apple requires platform-age information or another approved mechanism; and
- document fail-closed behavior when required age/eligibility information is unknown or unavailable.

If TycoonX is ever listed in Apple’s Kids category, apply the stricter Kids-category restrictions, including the prohibition on out-of-app offers where Apple imposes it.

### 12. Public legal and checkout parity

The public TycoonX legal framework already says external-purchase availability depends on platform, country, program, and law. Keep that wording unless the actual implementation changes materially.

Before enabling the unified-EU alternative-payment path, compare the live implementation against:

- TycoonX Terms of Service;
- Purchases & Refunds Policy;
- Apple Custom EULA;
- TycoonX Privacy Policy;
- Xsolla checkout terms and transaction-specific refund policy;
- TycoonX Payment & Entitlement Release Gates;
- TycoonX Xsolla Refund & Chargeback Release Gate; and
- this transition gate.

Do not promise that Apple handles refunds for an Xsolla alternative-payment transaction. Do not describe Xsolla as the merchant of record for a transaction unless the actual checkout/receipt identifies the relevant Xsolla entity in that role.

## Recommended rollout decision

For the September 1, 2026 TycoonX full release, do not rush an EU alternative-payment implementation merely because the Xsolla webshop exists. A conservative release path is to keep the currently compliant storefront behavior, finish the October unified-terms acceptance, payment election, entitlement, runtime API, in-app alternative-processing requirement where applicable, VAT-ID setup, reporting, support, child-safety, commission, invoice, tax and App Review work, and only then enable EU alternative payment options when the full flow is verified end to end.

## Source checkpoint

Apple’s current August 2026 guidance and Attachment 14 transition materials state that:

- the updated Apple Developer Program License Agreement was published August 18, 2026;
- the unified EU terms apply starting October 1, 2026 or the date the Account Holder agrees, whichever is later;
- alternative-payment elections apply across EU storefronts and are subject to a 12-month commitment;
- an alternative-only configuration that also presents out-of-app offers must give users a genuine opportunity to select alternative payment processing within the app, viewable/selectable on the same screen as the out-of-app offers;
- qualifying alternative-payment flows require the StoreKit External Purchases or Offers Entitlement and, where applicable, `ExternalPurchaseCustomLink` plus Apple’s disclosure sheet;
- Apple In-App Purchase must be at least as prominent when shown alongside actionable alternatives;
- alternative-payment information may not be promoted on the App Store product page;
- qualifying alternative transactions and tokens require reporting within 15 days after month-end, including applicable tokens that did not result in a purchase;
- qualifying EU transactions on Apple OS versions 26.4 and later use the External Purchase Server API, while earlier-version reporting follows Apple’s prescribed manual/example route;
- developers using EU alternative payment options must provide Apple with an EU-specific VAT ID demonstrating VAT registration, with one EU VAT ID sufficient for all EU storefronts;
- qualifying Apple invoices are payable within 30 days of receipt;
- child-safety parental-gate restrictions apply; and
- developers using alternative payments take on additional support, payment, tax, reporting, reconciliation, and compliance responsibilities.
