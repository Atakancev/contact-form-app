# TycoonX German/EU Accessibility and E-Commerce Release Gate

**Legal review date: September 4, 2026**

This is an operational release gate for CK-Labs. It does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, or transaction-specific Apple, Google Play, or Xsolla terms.

The purpose is to prevent a legally avoidable accessibility failure in TycoonX purchase flows, especially the official TycoonX web shop, in-app purchase-selection surfaces, authentication/security steps linked to a purchase, and checkout handoffs to Apple, Google Play, or Xsolla.

## 1. Current German/EU rule

Germany's **Barrierefreiheitsstärkungsgesetz (BFSG)** implements Directive (EU) 2019/882, the European Accessibility Act. The BFSG accessibility rules have applied to covered consumer services provided after **June 28, 2025**.

Under BFSG § 1(3)(5), covered services include **services in electronic commerce**. BFSG § 2(26) defines those services as digital services offered through websites or mobile applications that are provided electronically and at the individual request of a consumer with a view to concluding a consumer contract.

For TycoonX, that definition can be relevant to consumer-contract flows such as:

- the official TycoonX web shop;
- a CK-Labs webpage where a player chooses a paid Diamond or VIP product before checkout;
- a TycoonX mobile-app surface that forms part of the path to conclude a consumer purchase where the BFSG applies;
- identification, authentication, security, or payment functions that form part of the covered e-commerce service; and
- support or information surfaces that are legally part of the covered service.

Do **not** assume that every gameplay screen is automatically an e-commerce service merely because TycoonX also sells paid products. Classify the actual consumer-contract path and the functions legally connected to that covered service.

## 2. Microenterprise exemption must be verified, not guessed

BFSG § 3(3) exempts **microenterprises that offer or provide services** from the BFSG accessibility requirements for those services.

BFSG § 2(17) currently defines a microenterprise as an enterprise that:

1. employs **fewer than 10 persons**; and
2. either has annual turnover of **not more than EUR 2 million** or an annual balance-sheet total of **not more than EUR 2 million**.

This is a service-side exemption. It must not be assumed merely because TycoonX is independently developed, because CK-Labs has a small team, or because a previous year qualified.

### Required exemption evidence

Before relying on the exemption, maintain a dated internal record covering:

- the legal operator whose enterprise status is being tested;
- employee/headcount status under the applicable legal test;
- the relevant annual turnover figure;
- the relevant annual balance-sheet total;
- the accounting period used;
- whether any reorganization, merger, successor structure, or other legal change affects the analysis; and
- the date on which the classification will next be rechecked.

Recheck before relying on the exemption after a material headcount increase, material financial change, sale, merger, reorganization, or operator change.

Do **not** put private financial evidence into a public legal page. The public site should contain only legally required or voluntarily chosen accessibility information, while the underlying qualification evidence stays access-controlled.

If the microenterprise exemption is clearly available, CK-Labs may rely on it. Accessibility improvements may still be adopted voluntarily, but TycoonX must not make a false claim of statutory BFSG conformity or certified WCAG compliance that has not actually been established.

If the exemption is not clearly available, treat the covered service as in scope until the issue is resolved.

## 3. If BFSG applies, service conformity is an ongoing duty

BFSG § 14 requires an in-scope service provider to offer or provide the service only when the applicable accessibility requirements are met and the required service-accessibility information has been created and made publicly accessible in an accessible form.

Compliance is not a one-time launch checkbox. The provider must keep applicable requirements satisfied while offering or providing the service and must account for changes to the service, applicable accessibility requirements, harmonized standards, and relevant technical specifications.

For TycoonX this means a compliant checkout cannot be treated as permanently compliant after later UI redesigns, SDK replacements, Xsolla integration changes, authentication changes, new price/bundle layouts, new consent screens, or new payment-routing logic.

## 4. Annex 3 accessibility information

Where BFSG service obligations apply, BFSG Annex 3 requires information explaining how the service meets the applicable accessibility requirements. The information must be provided in the Terms/AGB or in another clearly perceivable way and itself be accessible.

The information should, as applicable, include:

- a general description of the covered service in an accessible format;
- descriptions and explanations needed to understand how the service operates;
- a description of how the service meets the applicable accessibility requirements; and
- the competent market-surveillance authority.

Do not publish a generic statement such as `TycoonX is fully accessible` unless the actual covered service has been evaluated sufficiently to support that claim.

If CK-Labs currently qualifies for the microenterprise service exemption, do not publish Annex 3 wording as though it were a mandatory BFSG conformity declaration unless there is a deliberate reason to do so. A voluntary accessibility page should say what has actually been tested and supported.

## 5. General service requirements under BFSGV § 12

Where BFSG applies, the service should be designed so the relevant information and digital service are consistently and appropriately **perceivable, operable, understandable, and robust**.

Release QA for the covered TycoonX e-commerce path should include, at minimum:

- information is findable and understandable;
- essential information is not communicated only through color, sound, animation, or another single sensory channel where the law requires more;
- text can be perceived with appropriate font sizing, spacing, and contrast;
- non-text content has an appropriate alternative where required;
- information is available in text formats that can support assistive presentation where required;
- websites, online applications, and relevant mobile-app surfaces work with reasonable keyboard/switch/screen-reader navigation where applicable;
- controls have meaningful accessible names and states;
- focus order follows the intended purchase flow;
- validation errors identify the affected field and explain how to correct it;
- timeout, security, or session-expiry behavior does not make the purchase path unusable for a person who needs more time where an accessible alternative is required;
- zoom, larger text, orientation, and platform accessibility settings do not hide the product, total price, mandatory tax/fee information, consent, confirmation, or cancellation controls; and
- support channels can provide relevant accessibility/compatibility information using accessible communication means where required.

The accessibility requirement does not authorize CK-Labs to weaken payment security, fraud prevention, age controls, parental authorization, SCA/3DS, account-compromise protection, or legally required purchase confirmations. Those controls should instead be implemented in an accessible way.

## 6. E-commerce-specific requirements under BFSGV § 19

For covered e-commerce services, BFSGV § 19 specifically requires relevant identification, authentication, security, and payment functions to be **perceivable, operable, understandable, and robust**.

For TycoonX, test the real transaction path, not only the marketing landing page.

### Required transaction-path tests

1. Product selection is understandable without relying only on visual placement or color.
2. The product identity is explicit: Diamonds, one-time 30-Day VIP, or limited-window Lifetime VIP.
3. Quantity, duration, and one-time/non-recurring status are available to assistive technology.
4. The final total price and mandatory tax/fee information shown by the responsible checkout can be perceived before confirmation as required by applicable law.
5. Any regional-pricing or country-selection information is understandable and does not depend solely on inaccessible maps, flags, or color.
6. Authentication and account-binding steps expose meaningful labels, errors, and status messages.
7. Security challenges do not silently trap keyboard, screen-reader, switch-control, or other assistive-technology users.
8. The final purchase/confirmation control clearly communicates that the action creates a payment obligation where applicable.
9. Success, pending, failure, cancellation, refund, and restoration states are programmatically understandable where the interface exposes them.
10. A player can reach the legally applicable support, refund, withdrawal, privacy, and account-help paths without a pointer-only interaction.

## 7. Product distinctions must survive accessibility changes

Accessibility work must not blur TycoonX product meaning.

### Diamonds

- Paid Diamonds remain purchased in-game virtual currency.
- Purchased Diamonds do not expire solely because time passes.
- Accessibility remediation cannot silently convert paid Diamonds into a promotional grant or delete unrelated legitimate purchased value.
- A refund, reversal, chargeback, duplicate grant, exploit correction, or payment invalidation remains a separate entitlement-ledger event requiring its own basis.

### One-time 30-Day VIP

- 30-Day VIP remains a **one-time, non-renewing 30-day entitlement**.
- Accessibility text must not accidentally describe it as a subscription or recurring billing product.
- A screen-reader label, button title, hidden accessibility string, App Store/Play description, or Xsolla checkout description must preserve that one-time meaning.

### Lifetime VIP

- Lifetime VIP remains a **one-time promotional entitlement offered only during selected genuine sales windows**.
- It may be withdrawn from future sale and may never return.
- Past or current availability creates no expectation of continuous future availability.
- Accessibility text must expose the same limited-window conditions, price information, and commercial-lifetime meaning available visually.
- Hidden accessible text must not contradict the visible offer, invent a permanent availability promise, or create a different price/expiry representation.

## 8. Apple, Google Play, and Xsolla responsibility split

Accessibility responsibility must follow the actual UI and legal role. Do not assume one company is responsible for the entire transaction simply because it processes payment.

### Apple App Store

Apple controls its own App Store / StoreKit purchase UI and payment-processing surfaces. CK-Labs remains responsible for TycoonX-controlled screens, labels, product descriptions, navigation, account binding, purchase initiation, entitlement status, restoration/help surfaces, and any other TycoonX UI in the covered path.

Do not alter or imitate Apple-controlled purchase confirmations in a way that creates a misleading parallel checkout.

### Google Play

Google controls its own Play Billing UI and payment-processing surfaces where Play Billing is used. CK-Labs remains responsible for TycoonX-controlled product-selection, purchase-initiation, account-binding, entitlement, restoration/help, and other in-app UI in the covered path.

Alternative-billing or external-offer programs do not remove accessibility analysis for the TycoonX-controlled choice, information, and handoff screens.

### Xsolla web shop

Where Xsolla hosts or controls a checkout component, Xsolla may be responsible for accessibility of its own payment UI under the law and contract applicable to that component. That does **not** automatically remove CK-Labs responsibility for:

- the TycoonX web-shop landing/product-selection pages;
- the accessibility of CK-Labs-controlled price, product, scarcity, tax/fee, and offer information;
- the handoff into and return from the Xsolla checkout;
- account identification/binding controlled by TycoonX;
- post-payment entitlement and support information; or
- choosing, configuring, or continuing to use an integration known to create an inaccessible dead end where CK-Labs has a reasonable compliant alternative.

Maintain current vendor evidence for the accessibility of material third-party checkout components. If a provider changes its widget, redirect flow, authentication, anti-fraud challenge, or payment UI, re-test the integration.

A provider outage or accessibility defect does not authorize CK-Labs to fabricate a successful transaction, grant paid value without authoritative payment confirmation, or remove unrelated valid entitlements.

## 9. Third-party-content exception is not a blanket vendor escape

BFSG § 1(4)(4) excludes certain third-party website/app content that the relevant economic operator neither finances, develops, nor controls.

Do not assume every embedded SDK, hosted checkout, payment widget, ad, community post, or external page qualifies.

For each material third-party element in a covered purchase path, record:

- who developed it;
- who finances/procures it;
- what CK-Labs can configure or control;
- whether CK-Labs selected it as part of the transaction design;
- whether an alternative implementation is reasonably available; and
- whether the element is necessary to conclude the contract.

The legal classification should follow the facts rather than a generic `third party` label.

## 10. Fundamental alteration and disproportionate burden are narrow safeguards

BFSG §§ 16 and 17 contain safeguards for a fundamental alteration of the service and for disproportionate burden. They are not equivalent to `accessibility is inconvenient` or `the founder is busy`.

If CK-Labs is in scope and relies on one of these safeguards, use the statutory assessment/documentation process that applies to the specific case.

For disproportionate burden under BFSG § 17, the assessment for a service must be revisited at least every five years and also when the service is changed or when the competent authority requires a new assessment. Where non-own public or private funding is received specifically to improve accessibility, the statutory rule restricts reliance on the disproportionate-burden exception.

Do not use a burden assessment to justify hiding a price, making the payment button inaccessible, removing mandatory consumer information, or refusing a simple low-cost remediation where the statutory test is not actually met.

## 11. Market surveillance and enforcement

Germany now has the **Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen (MLBF)** as the nationwide market-surveillance body for BFSG compliance. Its public website went live in 2026 and allows consumers to report accessibility barriers, including barriers in online shops.

BFSG § 28 allows service market surveillance both on a reason-to-believe basis and through appropriate sampling, including examination of websites and mobile applications.

BFSG § 30 treats missing/incomplete required Annex 3 information or failure to make that information accessible as formal service non-conformity and provides for corrective measures.

BFSG § 37 currently permits fines of up to **EUR 100,000** for certain violations, including offering or providing a service contrary to BFSG § 14(1) in conjunction with the applicable accessibility regulation.

Do not market TycoonX as `BFSG certified`, `EAA certified`, `fully WCAG compliant`, or equivalent unless there is a factual basis for the exact claim.

## 12. Accessibility must not become discriminatory pricing or entitlement logic

Accessibility settings, screen-reader use, larger text, keyboard navigation, disability-related support contact, or a request for an accessible format must **not** be used to:

- increase a player's price;
- deny a genuine promotion for which the player otherwise qualifies;
- assign a worse regional price;
- flag the account as fraudulent;
- change fraud-risk scoring merely because assistive technology is used;
- remove Diamonds;
- cancel 30-Day VIP;
- expire Lifetime VIP;
- block a statutory refund, withdrawal, conformity, termination, privacy, or account-deletion right; or
- reduce ordinary customer support.

Accessibility telemetry, if collected, must also follow the Privacy Policy, data-minimization requirements, and applicable platform/privacy rules. Do not create an unnecessary disability profile merely to prove that the UI was tested.

## 13. Old app versions, outages, and provider changes

An accessibility fix in the newest TycoonX build does not prove that older still-supported versions are compliant.

Where BFSG applies:

- identify which versions remain distributed/supported;
- test material purchase paths on those versions where consumers can still use them;
- require a supported update where reasonably necessary for security, legal compliance, or accessibility, subject to mandatory digital-product/update rights;
- preserve a lawful route for pending purchases, refunds, withdrawals, entitlement restoration, and support during an outage;
- do not treat a failed accessibility widget or provider outage as player fraud; and
- re-run this gate when Apple, Google Play, Xsolla, authentication, payment, or infrastructure providers materially change the covered purchase path.

Permanent TycoonX service discontinuation does not eliminate accrued mandatory consumer remedies, payment records that must lawfully be retained, valid refund/chargeback processing, or other surviving legal obligations.

## 14. Business sale, merger, reorganization, or successor operator

A successor operator must not inherit only the commercial benefits of TycoonX while losing the evidence needed to operate a covered e-commerce service lawfully.

A transition plan should preserve, where lawful and necessary:

- the BFSG applicability/exemption determination;
- accessibility assessments and issue records;
- relevant vendor accessibility evidence;
- Annex 3 information if applicable;
- support/escalation ownership;
- product and payment-channel mappings; and
- evidence that purchased Diamonds, 30-Day VIP, and Lifetime VIP remain distinct from accessibility-compliance records.

If the successor changes the service or no longer qualifies for an exemption, re-evaluate before continuing the affected consumer-contract flow.

## 15. Release evidence packet

For each materially changed TycoonX purchase path, retain a compact, access-controlled evidence packet containing:

- build/site version and release date;
- BFSG applicability or microenterprise-exemption determination date;
- screenshots or recordings of product selection, final price, and confirmation states;
- keyboard/switch/screen-reader test notes for the covered flow;
- accessible-name/state/error results for critical controls;
- zoom/text-size/contrast checks;
- current Apple, Google Play, or Xsolla integration mode;
- vendor accessibility evidence for material third-party checkout components;
- Annex 3 accessibility information version if BFSG applies;
- unresolved defects, severity, workaround, and owner;
- date of the next review; and
- proof that accessibility state is not used to alter paid entitlements or fraud classification.

Do not put full card data, security credentials, private chat content, unrelated personal data, raw authentication secrets, or unnecessary financial records into this packet.

## 16. P0 release blockers

Treat the relevant purchase path as blocked for German consumers if BFSG applies and any of the following remains unresolved:

- the final purchase button cannot be operated with required assistive input;
- product identity or price cannot be perceived before purchase;
- 30-Day VIP is exposed as recurring when it is actually one-time;
- Lifetime VIP's selected-sales-window limitation is omitted from an accessible representation that otherwise carries the offer terms;
- required authentication/security/payment functions are not perceivable, operable, understandable, and robust;
- a player cannot correct a checkout error using the relevant assistive technology;
- required Annex 3 information is absent or inaccessible;
- the service relies on an undocumented microenterprise exemption;
- a third-party checkout creates an inaccessible dead end and CK-Labs has not evaluated the legal/integration consequences;
- accessibility settings change pricing, entitlement validity, fraud treatment, or mandatory consumer remedies; or
- the purchase flow falsely claims accessibility certification or conformity.

## 17. Regression scenarios

Before a materially changed covered purchase path ships, test at least:

1. keyboard/switch-only purchase selection;
2. screen-reader reading of a Diamond bundle and final total price;
3. screen-reader reading of the one-time/non-renewing nature of 30-Day VIP;
4. screen-reader reading of Lifetime VIP's selected genuine sales-window limitation;
5. large-text/zoom checkout without a hidden purchase or cancel control;
6. authentication failure with an understandable error and recovery path;
7. Xsolla redirect/return flow with preserved account and transaction context;
8. Apple or Google provider cancellation without a false entitlement grant;
9. pending payment without a false `success` announcement;
10. refunded or reversed payment without removal of unrelated purchased value;
11. unsupported/old client requiring an update without losing a lawful support/refund route;
12. provider outage without fraud classification;
13. accessibility-support request without marketing or price discrimination;
14. microenterprise classification recheck after a hypothetical headcount/financial change; and
15. successor-operator scenario where the BFSG classification and accessibility evidence are transferred appropriately.

## 18. Current official sources

Use current versions at release time:

- Germany BFSG, especially §§ 1, 2, 3, 14, 16, 17, 28, 30, 37 and Annex 3: https://www.gesetze-im-internet.de/bfsg/
- Germany BFSGV, especially §§ 12, 13 and 19: https://www.gesetze-im-internet.de/bfsgv/
- Directive (EU) 2019/882: https://eur-lex.europa.eu/eli/dir/2019/882/oj
- MLBF: https://www.mlbf-barrierefrei.de/
- Apple accessibility resources: https://developer.apple.com/accessibility/
- Google Android accessibility guidance: https://developer.android.com/guide/topics/ui/accessibility
- Xsolla developer documentation for the actual checkout integration in use: https://developers.xsolla.com/

## 19. Relationship to canonical TycoonX legal documents

This gate does **not** materially change the canonical player-facing legal meaning as of September 4, 2026. It operationalizes existing obligations around clear purchase information, payment-channel roles, accessibility, mandatory consumer rights, supported app versions, provider changes, and entitlement integrity.

Therefore it does not reopen completed localization by itself.

If a future BFSG analysis produces a material new player-facing contractual statement, merchant-role statement, purchase limitation, mandatory accessibility disclosure inside the Terms/Purchases policy, or other canonical legal change, update the canonical English document first and then reopen only the affected localized document type in the exact locale order recorded in `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`.
