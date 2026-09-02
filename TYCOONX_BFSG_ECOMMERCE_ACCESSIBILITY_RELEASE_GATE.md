# TycoonX German BFSG / European Accessibility Act E-Commerce Release Gate

Last reviewed: September 2, 2026
Owner: CK-Labs
Scope: TycoonX consumer-facing websites, the official TycoonX web shop, CK-Labs-controlled checkout and account flows, purchase-related pages inside the TycoonX apps, legal/support information connected to those flows, and third-party payment handoffs where CK-Labs must verify that the complete consumer journey remains legally usable.

## Purpose

TycoonX already has detailed legal gates for contract formation, prices, withdrawal, refunds, Diamonds, one-time 30-Day VIP, limited-window Lifetime VIP, Apple App Store purchases, Google Play purchases, and the Xsolla-powered web shop. This gate covers a different issue: **accessibility of an electronic-commerce service under the German Barrierefreiheitsstärkungsgesetz (BFSG), which implements the European Accessibility Act (Directive (EU) 2019/882).**

The BFSG has applied to covered services provided to consumers since **June 28, 2025**. German official guidance expressly identifies services in electronic commerce, including online shops, as covered services where the statutory scope applies.

This is an implementation, evidence, and public-information gate. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, mandatory consumer law, or transaction-specific Apple, Google, Xsolla, or other provider terms.

This gate does **not** assume that CK-Labs is currently subject to every BFSG service obligation. The first release question is whether the statutory **microenterprise service exemption** applies. Do not publish a false claim of statutory BFSG compliance, and do not claim an exemption without dated evidence.

## P0: determine BFSG scope before relying on either compliance or exemption

For every German consumer-facing paid TycoonX flow, record:

- the service being provided;
- whether it is a service in electronic commerce within the BFSG scope;
- which entity is the service provider for the relevant part of the flow;
- whether CK-Labs is relying on the BFSG microenterprise exemption for that service;
- the evidence supporting that status;
- which third party controls any payment, authentication, or checkout step;
- whether the user can complete the complete relevant flow using assistive technology where the BFSG applies; and
- whether a public BFSG accessibility information notice under § 14 and Annex 3 is legally required.

Do not assume that a video game is entirely outside the BFSG merely because its primary purpose is entertainment. A website or app can contain a consumer electronic-commerce service even if the surrounding product has another primary purpose.

Do not make the opposite mistake either. The existence of an in-app purchase does not by itself prove that every gameplay screen is a separate electronic-commerce service. Classify the real service and user journey rather than using a blanket label.

## 1. Microenterprise service exemption: BFSG § 3(3)

BFSG § 3(3) excludes **microenterprises that offer or provide services** from the accessibility requirement in § 3(1).

For this purpose, BFSG § 2 no. 17 defines a microenterprise as an undertaking that:

- employs **fewer than 10 persons**; and
- either has annual turnover of **no more than €2 million** or an annual balance-sheet total of **no more than €2 million**.

### Release rule when CK-Labs relies on the exemption

Keep a dated, reproducible status memo containing at least:

- the relevant legal entity/operator;
- the employee/person-count calculation used;
- annual turnover evidence;
- annual balance-sheet-total evidence where relied on;
- any legally relevant partner/linked-enterprise analysis where applicable;
- the accounting period used;
- the date the assessment was approved; and
- the event that will trigger the next reassessment.

Reassess at least when annual accounts become available and after a material change such as hiring, restructuring, business sale, merger, transfer to a successor operator, or a change that could affect the enterprise calculation.

A microenterprise exemption is not a permanent product feature and must not be hard-coded as `true` forever.

### What the exemption does not mean

Even when the BFSG service exemption applies:

- CK-Labs must not make misleading accessibility claims;
- mandatory consumer information must still be clear and usable under other applicable law;
- discrimination and other applicable disability/consumer protections remain separate questions;
- Apple or Google accessibility metadata must remain accurate if CK-Labs publishes it;
- a provider-controlled payment page must still satisfy that provider's own applicable duties;
- CK-Labs should not intentionally introduce avoidable barriers into withdrawal, refund, account recovery, or paid-entitlement management; and
- losing the exemption later must trigger a new scope review before continuing to rely on it.

Voluntary accessibility improvements do not waive the exemption and should not be described as a legally required certification unless that is true.

## 2. If the exemption does not apply: BFSG § 14 becomes a release gate

Where CK-Labs provides an in-scope service and cannot rely on the microenterprise service exemption, BFSG § 14 requires the service to satisfy the applicable accessibility requirements and requires the public information described in Annex 3.

Do not launch or continue an in-scope German consumer electronic-commerce flow on the assumption that an accessibility statement alone cures an inaccessible service. The technical service and the required public information are separate obligations.

The service provider must also keep the Annex 3 information for as long as the service is offered or provided and must account for changes in the service, applicable accessibility requirements, harmonised standards, and technical specifications.

## 3. Public accessibility information: BFSG § 14 + Annex 3

Where required, provide the information **in the Terms or in another clearly perceivable manner**, and make it accessible to the public in an accessible format.

At minimum, the TycoonX BFSG information must contain, as applicable:

1. a general description of the relevant service in an accessible format;
2. descriptions and explanations necessary to understand how the service is performed;
3. a description of how the service meets the applicable accessibility requirements; and
4. the competent market-surveillance authority.

As of September 2, 2026, the German official accessibility authority guidance identifies the **Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen (MLBF)** as the nationwide competent market-surveillance body for BFSG consumer complaints and oversight. Verify the current authority name and contact route immediately before publishing or updating the notice rather than freezing a 2026 authority reference forever.

### Public notice quality rule

Do not publish boilerplate such as `TycoonX is fully accessible` unless the evidence supports that statement across the service actually described.

A compliant notice should identify:

- the service and surfaces covered;
- the relevant accessibility requirements;
- the actual measures used to meet them;
- any legally valid limitation or exception relied on;
- a usable contact route for accessibility issues; and
- the current competent authority.

If CK-Labs is exempt as a microenterprise and still publishes a voluntary accessibility page, label it accurately as voluntary accessibility information rather than presenting a false statutory conformity declaration.

## 4. BFSGV § 12: general service accessibility

Where the BFSG applies, the relevant TycoonX website/app/service information must be provided so that it is, as applicable:

- available through more than one sensory channel;
- findable;
- understandable;
- perceivable;
- available in text formats capable of generating alternative assistive formats;
- presented with appropriate text size, form, contrast, and spacing;
- accompanied by an alternative representation for non-text content where needed; and
- provided consistently in a way that is **perceivable, operable, understandable, and robust**.

BFSGV § 12 also requires websites, associated online applications, mobile-device services, and mobile apps within scope to be designed consistently and appropriately so they are perceivable, operable, understandable, and robust.

Where support services such as help desk or technical support are available, accessibility and assistive-technology information about the service must be available through accessible communication means.

### Do not reduce accessibility to one automated score

A Lighthouse, axe, Accessibility Scanner, or similar automated score is useful evidence but not proof of legal conformity. Manual testing with assistive technologies and task completion remains necessary.

## 5. BFSGV § 19: electronic-commerce functions

For an in-scope electronic-commerce service, BFSGV § 19 adds specific requirements. TycoonX must ensure, where applicable, that:

- accessibility information supplied by the responsible economic operator for products/services offered for sale is made available;
- identification functions are perceivable, operable, understandable, and robust;
- authentication functions are perceivable, operable, understandable, and robust;
- security functions are perceivable, operable, understandable, and robust;
- payment functions are perceivable, operable, understandable, and robust; and
- supplied identification methods, authentication methods, electronic signatures, and payment services meet those same principles.

This means accessibility testing must include the **real purchase journey**, not only the marketing page.

For TycoonX, test at least:

- product selection;
- Diamond bundle selection;
- one-time 30-Day VIP selection;
- Lifetime VIP selection while a genuine sales window exists;
- price/currency/tax presentation;
- login and account identification where required;
- MFA/OTP or other authentication where used;
- security warnings and fraud-review steps that the user must complete;
- final order review;
- payment method selection;
- confirmation/receipt access;
- refund or withdrawal navigation where CK-Labs controls it;
- purchase restoration/reconciliation where user action is required; and
- Support access for a failed or disputed transaction.

A security control is not compliant merely because it prevents fraud. A CAPTCHA, OTP, anti-bot challenge, risk screen, or forced gesture that blocks users of assistive technology needs an accessible alternative where required.

## 6. The whole relevant shop journey matters

Current German official guidance states that where electronic-commerce services are offered through websites or apps, the accessibility requirements are not limited to the last payment button. The guidance indicates that the whole website/app of the online shop can be relevant, including the path to contract conclusion.

For TycoonX, do not scope testing only to `Buy`. Include the entry point, product information, legal information needed for the transaction, cart/order review if used, checkout, authentication, payment, confirmation, and post-purchase controls that are part of the electronic-commerce service.

Where a page mixes gameplay and commerce, document which portions are part of the paid consumer journey and test the actual path a player must use.

## 7. Accessibility of legal and consumer-protection controls

If a legal control is required and BFSG applies to the surrounding electronic-commerce service, accessibility cannot stop just before that control.

Test, as applicable:

- the German BGB § 356a electronic withdrawal function;
- any future BGB § 312k termination button for a covered recurring product;
- refund-request links;
- purchase-history/order details;
- account recovery used to reach paid entitlements;
- legal-policy links shown before checkout;
- consent/acknowledgement controls required for early performance where applicable; and
- durable-medium confirmations or accessible versions of documents generated by the service.

A visually prominent withdrawal button that a screen-reader or keyboard-only user cannot operate is not an acceptable implementation merely because its German wording is correct.

Do not require an accessibility user to call Support if other users can complete the statutory or commercial process online, unless a legally valid reason genuinely requires a different channel.

## 8. Technical benchmark and standards-change control

German official guidance currently identifies **EN 301 549 V3.2.1 (2021-03)** as the central technical reference for digital accessibility and notes that its web criteria refer to WCAG 2.1. The official guidance also says the standard is being revised for the European Accessibility Act and is expected to move toward WCAG 2.2.

Therefore:

- use the current officially relevant standard and BFSGV requirements as the legal benchmark;
- use WCAG 2.2 as forward-looking engineering guidance where it improves readiness;
- do not falsely state that a future or draft standard is already the binding harmonised standard;
- re-check the Bundesfachstelle's `Normen und Standards` page before major releases and when the revised EN 301 549 is published/cited; and
- treat a standards change as a trigger to reassess the public Annex 3 description if the service is in scope.

The public notice must describe actual conformity, not merely say `WCAG compliant` because a library claims it.

## 9. Apple App Store accessibility metadata is separate

Apple's current Accessibility Nutrition Labels allow developers to publish accessibility support by device and feature. Apple says a claimed feature should support **all common tasks**, and explicitly treats first launch, login, purchase, and settings as common tasks where applicable.

For TycoonX:

- do not claim VoiceOver, Voice Control, Larger Text, Sufficient Contrast, or another Apple accessibility feature unless the current app actually meets Apple's published evaluation criteria for the supported device;
- include the purchase flow when evaluating an accessibility claim;
- keep App Store accessibility metadata current after material UI changes; and
- use Apple's optional accessibility URL only if the linked information is accurate and maintained.

Apple accessibility metadata does not prove BFSG conformity, and BFSG conformity does not automatically authorize an inaccurate App Store label.

## 10. Google / Android accessibility engineering is separate

Google's current Android accessibility guidance recommends that common app flows work with assistive technologies such as TalkBack and Switch Access and emphasizes content labels, sufficient contrast, usable touch targets, and manual plus automated accessibility testing.

For TycoonX:

- test purchase and account-management flows with TalkBack and keyboard/switch-style navigation where relevant;
- ensure custom controls expose useful semantics and labels;
- do not communicate state only through color;
- ensure required controls can be focused and activated without a gesture-only path; and
- use automated Android accessibility checks as a supplement to manual testing, not as the complete BFSG legal assessment.

If TycoonX ever uses Android's AccessibilityService API, review Google Play's separate Accessibility API policy before release. Ordinary accessibility support for users does not require TycoonX to declare itself an accessibility tool.

Google engineering guidance and Play policy do not replace German statutory accessibility duties where those duties apply.

## 11. Xsolla and third-party checkout responsibility

The official TycoonX web shop can redirect to or embed Xsolla-controlled checkout/payment components. This creates a responsibility boundary, not an accessibility exemption by itself.

For every German release, record:

- the CK-Labs-controlled entry point;
- the exact transition to Xsolla;
- the Xsolla entity/merchant role shown to the consumer;
- which party controls authentication and payment UI;
- whether the relevant Xsolla checkout can be operated with keyboard/screen-reader assistive technology in the tested configuration;
- whether payment-method widgets introduce inaccessible steps;
- whether a failed provider step returns the user to an accessible recovery route;
- who provides legally required accessibility information for the service; and
- which party receives and resolves accessibility complaints about each part of the flow.

Do not assume that a third-party payment provider's generic marketing statement proves the live TycoonX project configuration is BFSG-conformant. Test the actual project and payment methods offered to German consumers.

Likewise, do not promise that CK-Labs controls a provider screen that it cannot technically change. Document the boundary and escalate provider defects that block a legally required flow.

## 12. Nonconformity, correction, and authority notification

Where BFSG § 14 applies and an in-scope service does not satisfy the applicable accessibility requirements, CK-Labs must not treat the issue as a normal cosmetic backlog item.

The release/incident workflow must:

1. record the nonconformity and affected service;
2. assess user impact and the specific legal requirement;
3. take necessary corrective measures to restore conformity;
4. preserve evidence of the correction and retest it; and
5. where § 14(4) requires, inform the competent German market-surveillance authority and the relevant authorities of other EU Member States where the service is offered/provided, with the required detail on the nonconformity and corrective measures.

Do not delay a legally required authority notification merely to wait for a perfect redesign.

If the microenterprise exemption applies, do not falsely file a statutory nonconformity notification as though CK-Labs were subject to a duty that does not apply. Record the scope/exemption decision and still fix material user barriers where appropriate.

## 13. Fundamental alteration and disproportionate burden are narrow, documented routes

Do not use `too expensive`, `third-party SDK`, `small team`, or `game design` as an informal accessibility exemption.

Where CK-Labs is not covered by the microenterprise service exemption and considers relying on a statutory fundamental-alteration or disproportionate-burden provision, require a separate written legal/technical assessment under the applicable BFSG provisions and Annex 4 criteria before release.

The assessment must identify:

- the exact requirement affected;
- the feature/service involved;
- why compliance would fundamentally alter the basic nature of the service or create the claimed disproportionate burden;
- the evidence and calculation used;
- whether an alternative accessible implementation is available;
- the review/renewal date required by law; and
- any authority information/notification duty triggered by reliance on the exception.

Do not convert a narrow exception for one feature into a blanket exemption for the whole TycoonX service.

## 14. Accessibility changes must not alter paid entitlement state

Accessibility remediation, assistive-technology metadata, a provider accessibility defect, or an accessibility complaint must remain separate from payment entitlement truth.

Specifically:

- fixing an inaccessible Diamond purchase screen must not duplicate purchased Diamonds;
- re-rendering or replaying a checkout cannot create a second entitlement grant;
- accessibility testing must never use production refund/reversal controls against a real player account without an authorized test plan;
- an accessibility complaint is not evidence of fraud, chargeback abuse, account compromise, exploit use, or regional-price abuse;
- fixing or replacing a 30-Day VIP purchase UI must not restart, pause, extend, shorten, or duplicate an already valid one-time 30-Day VIP period;
- fixing a Lifetime VIP sales screen cannot create a hidden expiry, downgrade, or duplicate a valid Lifetime VIP;
- withdrawal/refund accessibility changes must remain idempotent and transaction-scoped; and
- Apple, Google, or Xsolla accessibility/provider retries must never replay entitlement fulfillment.

If an inaccessible flow caused a consumer to receive an incorrect charge or miss a mandatory remedy, correct the specific transaction under applicable law and authoritative records rather than making a game-wide economy correction.

## 15. Price, promotion, regional pricing, and accessibility

Accessibility cannot be used to show disabled users a materially different commercial offer unless there is a lawful, transparent reason unrelated to disability discrimination.

The accessible path must preserve the same legally relevant information as the ordinary path, including:

- Diamond quantity;
- 30-Day VIP duration and one-time/non-renewing status;
- Lifetime VIP limited-window and commercial-lifetime meaning;
- final price and currency;
- mandatory taxes/fees;
- genuine promotion conditions;
- regional eligibility;
- refund/withdrawal route; and
- contracting merchant/provider identity where required.

Alternative text, screen-reader labels, or simplified presentation must not silently omit a price limitation, countdown condition, subscription status, tax, or material product distinction.

## 16. Security and old/unsupported versions

Accessibility does not prevent CK-Labs from deploying reasonable security controls, forcing a security update, or ending support for an old app version where legally permitted.

However:

- security prompts needed to continue a purchase must themselves be accessible where required;
- a forced update must not strand a user without a reasonable way to restore paid entitlements;
- an unsupported old version cannot be used as the sole excuse to erase valid Diamonds, 30-Day VIP, or Lifetime VIP;
- emergency provider replacement must include accessibility regression testing for the new purchase/authentication path; and
- accessibility fixes must not weaken authentication or fraud controls unnecessarily when an accessible secure alternative exists.

## 17. Business sale, merger, or successor operator

A sale, merger, reorganization, or successor operator can change the BFSG enterprise-size analysis, service-provider identity, public accessibility information, and authority/contact details.

Before the successor continues the German electronic-commerce service:

- reassess the microenterprise exemption;
- update the Annex 3 information if required;
- update the service-provider/contact identity;
- retest the paid purchase path;
- verify third-party provider contracts/configuration; and
- preserve valid paid entitlements and mandatory consumer remedies during migration.

Do not assume the predecessor's exemption or conformity evidence automatically transfers unchanged.

## 18. Release evidence packet

Keep a dated packet for each material German storefront release containing:

- BFSG scope classification;
- microenterprise exemption memo or non-exempt compliance decision;
- current employee/person and turnover/balance-sheet evidence used for the scope decision;
- the current Annex 3 public accessibility information if required;
- confirmation of the current MLBF/competent-authority details where cited;
- the standards/version baseline used;
- automated accessibility scan results;
- manual keyboard navigation evidence for the web shop;
- screen-reader test evidence for critical flows;
- iOS VoiceOver purchase/login/settings test evidence where relevant;
- Android TalkBack purchase/login/settings test evidence where relevant;
- text scaling/zoom evidence;
- contrast/non-color-only evidence;
- focus-order and modal/dialog evidence;
- accessible authentication/security challenge evidence;
- Xsolla provider-boundary test evidence for representative German payment methods;
- legal/withdrawal/refund control accessibility evidence;
- Apple Accessibility Nutrition Label reconciliation if labels are published;
- nonconformity/correction records; and
- a sign-off confirming that accessibility testing did not mutate real paid entitlements.

Do not retain unnecessary player personal data, payment credentials, or production secrets in screenshots/test evidence.

## 19. Minimum regression scenarios

Before treating the gate as release-ready, test at least the following scenarios.

1. **Microenterprise exemption applies:** evidence proves the current threshold conditions; the system records a reassessment trigger rather than permanently hard-coding exemption.
2. **Microenterprise exemption is lost:** the release cannot continue relying on the old memo; Annex 3 and technical conformity become release work where BFSG applies.
3. **Keyboard-only webshop:** a user can reach product, price, order review, checkout handoff, and recovery without a mouse.
4. **Screen-reader product selection:** Diamond quantity and VIP product distinctions are announced correctly.
5. **30-Day VIP:** assistive technology announces that the product is one-time and non-renewing and identifies the 30-day duration.
6. **Lifetime VIP:** assistive technology exposes the limited sales-window nature and commercial-lifetime meaning without hiding it behind an unlabeled tooltip.
7. **Price and tax:** the same final material price/currency/tax information is available through the accessible route.
8. **Color independence:** sale status, validation errors, selected payment method, and success/failure are not communicated only by color.
9. **Authentication:** OTP/MFA/security steps are labeled and operable with assistive technology.
10. **CAPTCHA/anti-bot:** a required security challenge has an accessible path or alternative where required.
11. **Xsolla handoff:** focus and context are understandable before and after the provider transition.
12. **Provider failure:** an inaccessible or failed payment widget returns to a usable recovery path without granting value.
13. **German withdrawal function:** `Vertrag widerrufen` / `Widerruf bestätigen` or valid equivalents can be found and operated through assistive technology where CK-Labs controls the applicable function.
14. **Durable-medium receipt:** the resulting withdrawal/order confirmation is perceivable and usable in an accessible format where BFSG applies.
15. **Duplicate accessibility retry:** refreshing, re-focusing, or retrying a provider widget cannot duplicate Diamonds or VIP.
16. **Apple accessibility label:** any published VoiceOver/other accessibility claim matches the current common-task test including purchase/login/settings.
17. **Android TalkBack:** the user can complete the representative purchase path without unlabeled custom controls.
18. **Legal text:** the user can navigate headings and links in Terms/Purchases information needed for the transaction without an image-only or inaccessible document barrier.
19. **Nonconformity discovered:** the issue enters the BFSG correction/authority decision workflow instead of a cosmetic backlog.
20. **Successor operator:** a merger/sale triggers fresh exemption/scope/provider/public-information assessment without harming existing paid entitlements.

## 20. Canonical-document and localization trigger

This gate is operational and does **not** by itself change the current public meaning of the English Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards.

Therefore the completed TycoonX localization queue remains closed unless a future BFSG implementation requires a **material new player-facing legal promise or statutory disclosure inside a canonical legal document**.

If CK-Labs becomes non-exempt and chooses to put mandatory Annex 3 information inside the canonical Terms or Purchases policy rather than on a separate clearly perceivable accessibility page, that is a canonical meaning change. Reopen the affected localized document type and resynchronize all 25 locales in the required order.

If a separate BFSG accessibility-information page is created, decide deliberately whether and how it should be localized. Do not silently claim that an English-only notice satisfies every language/accessibility obligation without checking the actual German/EU service and audience.

## 21. Release decision

Do not mark the German TycoonX electronic-commerce accessibility gate `PASS` until one of these two paths is evidenced:

### Path A: valid microenterprise service exemption

- current BFSG § 2 no. 17 / § 3(3) evidence is documented;
- a reassessment trigger exists;
- no misleading statutory conformity claim is published; and
- platform/provider accessibility metadata remains truthful.

### Path B: BFSG applies

- the in-scope service passes the applicable BFSG/BFSGV accessibility requirements;
- the real end-to-end purchase/auth/payment/support path has been tested;
- Annex 3 public accessibility information exists and is accessible;
- the current competent authority is identified;
- nonconformity/correction handling is operational;
- third-party provider boundaries are evidenced; and
- Diamonds, 30-Day VIP, Lifetime VIP, refunds, withdrawals, and chargebacks remain idempotent and transaction-scoped.

A release is **blocked** if CK-Labs cannot evidence either path and the German consumer electronic-commerce service remains enabled.

## Primary references reviewed September 2, 2026

- German BFSG §§ 2, 3, 14, 28-30 and Annex 3.
- German BFSGV §§ 12 and 19.
- Bundesfachstelle Barrierefreiheit: BFSG overview, electronic-commerce FAQ, microenterprise guidance, and current norms/standards guidance.
- Market-surveillance update identifying the MLBF website and nationwide BFSG oversight role, published June 8, 2026.
- Apple App Store Connect Accessibility Nutrition Labels and VoiceOver evaluation criteria.
- Google Android accessibility implementation/testing guidance current in 2026.

Provider documentation and standards evolve. Re-check current official sources before relying on a specific standard version, authority address, App Store accessibility label, Google policy, or Xsolla checkout behavior.
