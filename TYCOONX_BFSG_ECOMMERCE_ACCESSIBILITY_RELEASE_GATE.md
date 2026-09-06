# TycoonX German BFSG / European Accessibility Act E-Commerce Release Gate

Last reviewed: September 6, 2026
Owner: CK-Labs
Scope: TycoonX consumer-facing websites, the official TycoonX web shop, CK-Labs-controlled checkout and account flows, purchase-related pages inside the TycoonX apps, legal/support information connected to those flows, and third-party payment handoffs where CK-Labs must verify that the complete consumer journey remains legally usable.

## Purpose and single-source rule

This is the single TycoonX operational doctrine for German BFSG / European Accessibility Act e-commerce accessibility. It does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, mandatory consumer law, or transaction-specific Apple, Google Play, Xsolla, or other provider terms.

The BFSG has applied to covered consumer services since **June 28, 2025**. Services in electronic commerce, including online shops, can be in scope. A game is not automatically outside the BFSG merely because its primary purpose is entertainment, but the existence of an in-app purchase also does not make every gameplay screen a separate electronic-commerce service. Classify the real consumer-contract path.

This gate does **not** assume CK-Labs is currently subject to every BFSG service obligation. The first live-service question is whether the statutory microenterprise service exemption applies. Never claim statutory BFSG conformity or an exemption without dated evidence.

## 1. P0 scope and microenterprise classification

For every German consumer-facing paid TycoonX flow, record:

- the service being provided;
- whether it is a service in electronic commerce within BFSG scope;
- the entity providing the relevant part of the service;
- whether CK-Labs relies on the BFSG microenterprise service exemption;
- evidence supporting that status;
- which party controls each payment, authentication, security, checkout, and support step;
- whether the complete relevant flow can be completed with applicable assistive technology where BFSG applies; and
- whether public BFSG information under § 14 and Annex 3 is required.

BFSG § 3(3) exempts **microenterprises that offer or provide services** from the general service accessibility requirement. BFSG § 2 no. 17 defines a microenterprise as an undertaking that:

- employs **fewer than 10 persons**; and
- either has annual turnover of **no more than €2 million** or an annual balance-sheet total of **no more than €2 million**.

The financial limb is an **OR**, not an AND. Do not incorrectly treat CK-Labs as outside the statutory definition merely because one of turnover or balance-sheet total exceeds €2 million while the other remains within the threshold. Conversely, the person-count requirement still has to be satisfied. Record the exact facts and accounting basis rather than relying on an informal `small company` label.

If CK-Labs relies on that exemption, retain a dated internal memo containing the relevant legal operator, person-count method, annual turnover evidence, annual balance-sheet evidence where relied on, relevant partner/linked-enterprise analysis where applicable, accounting period, decision date, and reassessment trigger.

Reassess at least when annual accounts become available and after material hiring, financial change, restructuring, sale, merger, reorganization, or successor-operator change. The exemption is **not a permanent product feature** and must not be hard-coded forever.

The service exemption is **not a universal BFSG exemption**. A separately covered product requires its own analysis. Even where the service exemption applies, do not publish misleading accessibility claims, misuse disability/accessibility information, or intentionally create avoidable barriers in refunds, withdrawals, account recovery, support, or paid-entitlement management.

Do not publish private financial evidence on a public legal page.

## 2. BFSG § 14 and Annex 3 if the exemption does not apply

Where CK-Labs provides an in-scope service and cannot rely on the microenterprise service exemption, BFSG § 14 is a release gate. The service may be offered or provided only when the applicable accessibility requirements are met and the Annex 3 information has been created and made publicly accessible in an accessible form.

The service provider must keep that information **as long as the service is offered or provided** and must account for changes in the service, accessibility requirements, harmonised standards, and technical specifications.

Annex 3 no. 1 requires the service accessibility information to appear **in the terms and conditions or in another clearly perceptible manner**. Do not satisfy this with a hidden, orphaned, non-indexed, inaccessible, or support-only document that an ordinary consumer cannot reasonably find. Where a separate TycoonX accessibility-information page is used, link it clearly from the relevant shop/legal journey and keep the information itself accessible.

At minimum, the TycoonX Annex 3 information must contain, as applicable:

1. a general description of the relevant service in an accessible format;
2. descriptions and explanations necessary to understand how the service is performed;
3. a description of how the service meets the applicable accessibility requirements; and
4. the competent market-surveillance authority.

Current authority checkpoint as of September 6, 2026:

- Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen - Anstalt öffentlichen Rechts (MLBF AöR)
- Carl-Miller-Straße 6, 39112 Magdeburg, Germany
- Phone: +49 391 289 230 23
- Email: kontakt@mlbf-barrierefrei.de
- Website: https://www.mlbf-barrierefrei.de/

Verify the current authority name and contact route immediately before publishing or updating a mandatory notice.

Do not publish boilerplate such as `TycoonX is fully accessible`, `BFSG certified`, `EAA certified`, or `fully WCAG compliant` unless the evidence supports the exact claim. The private-sector BFSG information under § 14 and Annex 3 is not automatically the same instrument as the public-sector **Erklärung zur Barrierefreiheit**.

Missing, incomplete, or not-accessibly-published Annex 3 information is not just a documentation-quality issue. BFSG § 30 treats the specified Annex 3 defects as **formal nonconformity**, with a statutory correction and enforcement path. Release evidence must therefore test both substantive accessibility and the completeness/accessibility of the required public information.

## 3. BFSGV § 12 general service accessibility

Where BFSG applies, the relevant TycoonX service must be designed consistently and appropriately so information and functions are, as applicable, perceivable, operable, understandable, and robust.

Release QA must cover at least:

- information that is findable and understandable;
- more than one sensory channel where legally required;
- appropriate text size, spacing, contrast, zoom, larger-text and orientation behavior;
- an appropriate alternative representation for non-text content;
- meaningful accessible names, roles, values, states, and error messages;
- logical focus order and focus restoration after dialogs/provider handoffs;
- keyboard, switch, screen-reader and platform-assistive-technology navigation where relevant;
- validation errors that identify the affected field and explain recovery;
- session expiry, security timeout, or countdown behavior that does not unnecessarily trap users who need more time;
- confirmation, cancellation, refund, withdrawal, and support controls that remain perceivable and operable; and
- accessible support communication where support services are offered.

Automated scanners are supporting evidence, not proof of legal conformity. Manual end-to-end task testing remains necessary.

## 4. BFSGV § 19 electronic-commerce functions

For an in-scope electronic-commerce service, BFSGV § 19 specifically requires relevant **identification, authentication, security, and payment functions** to be perceivable, operable, understandable, and robust.

BFSGV § 19 also requires the electronic-commerce service to provide **information on the accessibility of products for sale and services offered insofar as that information is supplied by the responsible economic operator**. If Apple, Google, Xsolla, CK-Labs, or another responsible operator supplies such information for an item actually offered in the TycoonX commerce journey, do not silently strip it from the accessible path. Equally, do not invent an accessibility characteristic, certification, or provider statement that the responsible operator did not supply or that CK-Labs cannot substantiate.

Test the real transaction journey, not only the marketing page. For TycoonX, include at least:

- product selection;
- Diamond bundle selection;
- one-time 30-Day VIP selection;
- Lifetime VIP selection while a genuine sales window exists;
- product identity, quantity, duration, one-time/non-recurring status, and material limitations;
- final price, currency, tax/fee presentation and regional-pricing information;
- relevant product/service accessibility information supplied by the responsible economic operator;
- login, account binding, MFA/OTP, SCA/3DS, CAPTCHA/anti-bot and fraud-review steps where used;
- final order review and the legally relevant payment-obligation control;
- payment method selection;
- success, pending, cancellation, failure, refund, reversal and restoration states;
- confirmation/receipt access;
- refund or withdrawal navigation where CK-Labs controls it; and
- support access for failed or disputed transactions.

A security control is not compliant merely because it prevents fraud. A CAPTCHA, OTP, anti-bot challenge, SCA/3DS flow, risk screen, forced gesture, or timer that blocks assistive-technology users needs an accessible route or alternative where required. Accessibility does not require CK-Labs to weaken reasonable security, parental controls, fraud prevention, account-compromise protection, or legally required purchase confirmations. Implement those controls accessibly instead.

## 5. The whole relevant shop journey matters

Do not scope accessibility testing only to `Buy` or the last payment button. Include the entry point, product information, legal information needed for the transaction, cart/order review if used, account identification, authentication, security, checkout, payment, confirmation, post-purchase administration, refund/withdrawal controls, and recovery from errors or provider failure.

Where a sampled page is one step in a procedure, the full procedure must be tested for release evidence. Use BFSG Annex 1 as the market-surveillance risk model: include home/entry, login, contact/support, help, legal-information pages, accessibility information where required, materially different page types, and a complete transaction/error-recovery path.

## 6. Legal and consumer-protection controls must remain accessible

Where applicable to the covered service, test:

- the German BGB § 356a electronic withdrawal function;
- any future BGB § 312k termination button for a covered recurring product;
- refund-request and purchase-history/order-detail controls;
- account recovery used to reach paid entitlements;
- legal-policy links required before checkout;
- transaction-specific consent/acknowledgement controls required for early performance where applicable; and
- durable-medium confirmations or accessible versions of documents generated by the service.

A visually prominent legal control that a screen-reader or keyboard-only user cannot operate is not acceptable merely because its wording is legally correct. Do not force an accessibility user into phone support if other users can complete the required process online unless a legally valid reason genuinely requires a different channel.

## 7. Apple, Google Play, Xsolla and third-party responsibility boundaries

Accessibility responsibility follows the actual UI and legal role.

### Apple App Store

Apple controls its StoreKit/App Store payment UI. CK-Labs remains responsible for TycoonX-controlled product selection, labels, navigation, account binding, purchase initiation, entitlement status, restore/help surfaces, and other CK-Labs-controlled parts of the relevant journey. Apple Accessibility Nutrition Labels are separate metadata claims and must match the current app and common tasks such as first launch, login, purchase, and settings where applicable.

### Google Play

Google controls Play Billing UI where Play Billing is used. CK-Labs remains responsible for TycoonX-controlled product selection, purchase initiation, account binding, entitlement, restore/help, and alternative-billing/external-offer choice and handoff screens. Test representative Android flows with TalkBack and, where relevant, Switch Access/keyboard navigation.

### Xsolla web shop

Where Xsolla hosts or controls checkout/payment components, document the boundary rather than assuming a vendor exemption. For every material German storefront change record the CK-Labs entry point, transition to Xsolla, merchant/provider role, party controlling authentication/payment UI, representative assistive-technology result, recovery path from failure, complaint ownership, and vendor evidence for the actual configuration/payment methods offered to German consumers.

A provider's generic marketing statement is not proof that the live TycoonX configuration is accessible. Likewise, CK-Labs must not promise control over provider UI it cannot change.

### Third-party content

BFSG § 1(4)(4) is narrow. It is not a blanket rule for every third-party SDK, iframe, browser sheet, hosted checkout, widget, or provider template. If relying on that exclusion, retain evidence that the particular content is neither financed nor developed by CK-Labs nor under CK-Labs control. Reassess after customization or a change in contractual/technical control.

## 8. Technical standards, statutory numbering and change control

Use the currently applicable BFSG/BFSGV requirements and officially relevant harmonised standards/technical specifications as the legal benchmark. EN 301 549 V3.2.1 (2021-03) remains an important engineering reference and its web criteria use WCAG 2.1. Use WCAG 2.2 as forward-looking engineering guidance where it improves readiness, but do not falsely state that a future or draft standard is already the binding harmonised standard.

Keep the statute and regulation numbering distinct. **BFSG § 14** is the service-provider duty used above. **BFSGV § 14** is a different provision concerning telecommunications services. The BFSGV amendment dated **July 10, 2026 and effective July 16, 2026** amended BFSGV § 7 on self-service terminals and replaced BFSGV § 14 on telecommunications; it did **not** replace BFSGV § 19 on electronic-commerce services. Do not copy the 2026 BFSGV § 14 telecom text into TycoonX e-commerce compliance merely because the section number matches BFSG § 14.

Recheck official German/EU standards guidance before major releases and after material changes to the cited standards. The BFSGV in force has been amended since its original adoption, so do not freeze an old technical baseline indefinitely or assume every BFSGV amendment changes e-commerce obligations.

## 9. Fundamental alteration and disproportionate burden are narrow routes

Do not use `too expensive`, `third-party SDK`, `small team`, or `game design` as an informal exemption.

Where CK-Labs is not covered by the microenterprise service exemption and considers relying on BFSG §§ 16 or 17, require a written legal/technical assessment using the applicable statutory test and Annex 4 criteria.

For a BFSG § 17 disproportionate-burden assessment:

- identify the exact requirement, service/function, evidence, calculation, alternative implementation, and decision owner;
- document the assessment and, where § 17(2) applies, retain it for **five years from the last provision of the service**;
- under § 17(3), reassess the relevant service category/type **at least every five years**, and also whenever the service changes or the competent authority requests a new assessment;
- under § 17(4), do not rely on disproportionate burden where CK-Labs has received relevant non-own public or private funding specifically intended to improve accessibility and the statutory restriction applies; and
- satisfy any authority information/notification requirement, including the § 17(5) rule where applicable rather than assuming the exception is self-executing.

Do not convert a narrow exception for one feature into a blanket exemption for the whole TycoonX service.

## 10. Accessibility state must not become pricing, fraud, or entitlement logic

Accessibility settings, screen-reader use, larger text, keyboard/switch navigation, disability-related support contact, or a request for an accessible format must **not** by themselves be used to:

- increase or decrease a player's price;
- deny an otherwise valid genuine promotion;
- assign a worse regional price;
- classify the player as fraudulent, abusive, compromised, or high risk;
- change fraud scoring merely because assistive technology is used;
- remove or duplicate Diamonds;
- start, restart, pause, extend, shorten, or cancel 30-Day VIP;
- add an expiry, downgrade, duplicate, or reopen a Lifetime VIP sales window;
- block a statutory refund, withdrawal, conformity, termination, privacy, account-deletion, or other mandatory remedy; or
- reduce ordinary customer support.

Accessibility telemetry, if collected, must follow the TycoonX Privacy Policy, applicable GDPR/platform rules, purpose limitation, security, and data minimization. Do not create an unnecessary disability profile merely to prove that the UI was tested. Preserve only evidence reasonably needed for accessibility QA or legal compliance.

## 11. Paid-product distinctions and accessible copy

Accessibility changes must preserve the same product meaning available visually.

### Diamonds

Purchased Diamonds remain purchased in-game virtual currency and **do not expire solely because time passes**. Accessibility remediation, a provider retry, or a test cannot silently convert paid Diamonds into a promotional grant, delete unrelated legitimate purchased value, or replay fulfillment.

### One-time 30-Day VIP

30-Day VIP remains a **one-time, non-renewing 30-day entitlement**. Visible text, screen-reader labels, hidden accessibility strings, App Store/Play descriptions, and Xsolla checkout descriptions must not call it a subscription or recurring product. Accessibility changes cannot restart, pause, extend, shorten, or duplicate an already valid period.

### Lifetime VIP

Lifetime VIP remains a **one-time promotional entitlement offered only during selected genuine sales windows**. It may be withdrawn from future sale, may never return, and past or current availability creates no expectation of continuous future availability. Accessible/hidden text must preserve the same limited-window conditions, price information, and commercial-lifetime meaning as the visual offer and must not invent a permanent availability promise or different expiry.

## 12. Price, promotion, regional pricing, payment state and accessibility

The accessible path must preserve the same legally relevant material information as the ordinary path, including Diamond quantity, 30-Day VIP duration and one-time status, Lifetime VIP limited-window meaning, final price/currency, mandatory taxes/fees, genuine promotion conditions, regional eligibility, refund/withdrawal route, and contracting merchant/provider identity where required.

A provider outage or accessibility defect does not authorize CK-Labs to fabricate a successful transaction or grant paid value without authoritative payment confirmation. Failed, pending, reversed, refunded, charged-back, duplicated, or restored transactions remain transaction-scoped payment/entitlement events. Accessibility retries must be idempotent.

An accessibility complaint or request is not evidence of fraud, chargeback abuse, exploit use, account compromise, entitlement abuse, or regional-price abuse without separate reliable evidence.

## 13. Nonconformity, correction and enforcement

Where BFSG § 14 applies and an in-scope service fails the applicable requirements, the issue is not merely cosmetic. The incident workflow must:

1. record the nonconformity and affected service/version;
2. distinguish a substantive accessibility defect from **formal nonconformity under BFSG § 30**, including missing, incomplete, or not-accessibly-published Annex 3 information;
3. assess user impact and the legal requirement;
4. take necessary corrective measures to restore conformity;
5. preserve correction and retest evidence; and
6. where § 14(4) requires, inform the competent German market-surveillance authority and relevant authorities in other EU Member States where the service is offered/provided, including the nature of the nonconformity and corrective measures.

For formal nonconformity, do not wait for a functional accessibility failure before correcting the public information. BFSG § 30 provides its own authority correction/enforcement path and can ultimately lead to measures restricting the offer or provision of the service if formal defects are not remedied.

BFSG § 37 currently allows fines up to **€100,000** for specified violations. Consumers and eligible organizations also have statutory routes under BFSG §§ 32 and 33 where the statutory conditions are met.

Do not rewrite historic evidence after a complaint arrives, make a blanket admission that the entire TycoonX service violates BFSG because one control failed, or classify an accessibility complaint as enforcement abuse.

## 14. Old versions, outages, provider replacement and security emergencies

An accessibility fix in the newest build does not prove still-supported old versions are compliant. Where BFSG applies:

- identify supported/distributed versions and test material purchase paths on versions consumers can still use;
- require a supported update where reasonably necessary for security, legal compliance, or accessibility, subject to mandatory digital-product/update rights;
- preserve lawful pending-purchase, refund, withdrawal, entitlement-restoration, and support routes during outages;
- ensure a provider or consent/accessibility component outage does not default to an inaccessible paid flow;
- re-test after material Apple, Google Play, Xsolla, authentication, payment, fraud/security, infrastructure, or accessibility-provider changes; and
- keep security prompts accessible where required without weakening security unnecessarily.

An unsupported old version is not a basis to erase valid Diamonds, 30-Day VIP, or Lifetime VIP.

## 15. Permanent service discontinuation and successor operators

Permanent TycoonX service discontinuation does not eliminate accrued mandatory consumer remedies, lawful payment records that must be retained, valid refund/chargeback processing, privacy duties, authority cooperation, or other surviving legal obligations.

A sale, merger, reorganization, or successor operator can change the BFSG enterprise-size analysis, service-provider identity, public accessibility information, vendor configuration, and authority/contact details. Before the successor continues the German electronic-commerce service, reassess the microenterprise exemption, update Annex 3 information if required, update provider/contact identity, retest paid flows, and preserve valid paid entitlements and mandatory remedies during migration.

## 16. Release evidence packet

For each materially changed German TycoonX purchase path, keep a compact access-controlled packet containing:

- build/site version and release date;
- BFSG scope classification and microenterprise-exemption memo or non-exempt decision;
- current Annex 3 information if required, including where it is clearly presented to consumers;
- current authority details where cited;
- applicable standards/version baseline;
- automated scan results and manual keyboard/screen-reader/switch tests;
- zoom/text-size/orientation/contrast evidence;
- focus, dialog, error, timeout, and security-challenge evidence;
- Apple, Google Play, or Xsolla integration mode and provider-boundary evidence;
- product/service accessibility information supplied by a responsible economic operator and how it is preserved in the commerce flow where § 19 requires it;
- price/product/offer/entitlement accessibility checks;
- legal/withdrawal/refund control accessibility evidence;
- nonconformity/correction/retest records, including formal-nonconformity decisions;
- unresolved defects, severity, workaround and owner;
- next review date; and
- confirmation that accessibility testing did not mutate real production paid entitlements.

Do not retain unnecessary player personal data, full payment credentials, private chat content, authentication secrets, disability profiles, or unrelated financial records in this packet.

## 17. Minimum regression scenarios

Before treating a materially changed German consumer-commerce path as ready, test at least:

1. valid microenterprise exemption with dated evidence and reassessment trigger;
2. exemption lost after growth/reorganization;
3. statutory microenterprise calculation preserves the turnover-or-balance-sheet alternative together with the fewer-than-10-person requirement;
4. keyboard-only webshop purchase selection and recovery;
5. screen-reader Diamond bundle and final-price reading;
6. 30-Day VIP announced as one-time, non-renewing and 30 days;
7. Lifetime VIP limited genuine sales-window meaning exposed accessibly;
8. large text/zoom/orientation without hidden buy/cancel/price controls;
9. non-color-only sale, error, selected-payment and success/failure states;
10. MFA/OTP/SCA/security challenge with accessible recovery;
11. timeout/session-expiry flow for a user needing more time;
12. Xsolla handoff and return with understandable focus/context;
13. Apple/Google provider cancellation without a false entitlement grant;
14. pending payment without a false success announcement;
15. provider failure/outage without fraud classification or fabricated payment success;
16. German § 356a withdrawal controls operable with assistive technology where CK-Labs controls them;
17. durable-medium receipt/confirmation accessible where required;
18. accessibility retry cannot duplicate Diamonds or VIP;
19. accessibility-support request cannot change price, promotion, regional pricing or fraud score;
20. accessibility telemetry cannot create an unnecessary disability profile;
21. third-party-content claim is rejected for content CK-Labs finances, develops, controls, or materially customizes;
22. responsible-economic-operator accessibility information is preserved when BFSGV § 19 requires it and unsupported accessibility claims are not invented;
23. Annex 3 information is in the terms or another clearly perceptible accessible location and missing/incomplete/inaccessible information enters the BFSG § 30 formal-nonconformity workflow;
24. the July 2026 BFSGV § 14 telecommunications amendment is not mistaken for BFSG § 14 or BFSGV § 19 e-commerce law;
25. disproportionate-burden reliance has documented five-year retention plus § 17(3) reassessment cadence and funding/authority checks;
26. nonconformity enters the correction/authority-decision workflow;
27. old client/update scenario preserves restoration/refund/support routes;
28. successor operator triggers fresh scope/provider/public-information review; and
29. permanent shutdown preserves surviving remedies and records without creating new paid entitlement promises.

## 18. Canonical-document and localization trigger

This operational gate does **not** materially change the current public meaning of the English Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards. The completed TycoonX localization queue therefore remains closed.

If a future BFSG implementation requires a material new player-facing contractual promise, merchant-role statement, purchase limitation, mandatory accessibility disclosure inside a canonical legal document, or other canonical legal change, update the English canonical document first and reopen only the affected localized document type in the exact locale order recorded in `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`.

## 19. Live-service decision

Do not mark the German TycoonX e-commerce accessibility gate `PASS` until one of these paths is evidenced:

### Path A: valid microenterprise service exemption

- current BFSG § 2 no. 17 / § 3(3) evidence is documented using the correct person-count plus turnover-or-balance-sheet test;
- a reassessment trigger exists;
- no misleading statutory conformity claim is published; and
- platform/provider accessibility metadata remains truthful.

### Path B: BFSG applies

- the in-scope service passes applicable BFSG/BFSGV accessibility requirements;
- the real end-to-end purchase/authentication/security/payment/support path has been tested;
- Annex 3 public accessibility information exists, is accessible, and is presented in the terms or another clearly perceptible manner;
- BFSGV § 19 accessibility information supplied by responsible economic operators is preserved where required;
- the current competent authority is identified;
- substantive and formal nonconformity/correction handling is operational;
- third-party provider boundaries are evidenced; and
- Diamonds, 30-Day VIP, Lifetime VIP, refunds, withdrawals, and chargebacks remain idempotent and transaction-scoped.

Continued operation of the German consumer electronic-commerce service is blocked if CK-Labs cannot evidence either path and the service remains within BFSG scope.

## Primary references reviewed September 6, 2026

- BFSG § 1: https://www.gesetze-im-internet.de/bfsg/__1.html
- BFSG § 2: https://www.gesetze-im-internet.de/bfsg/__2.html
- BFSG § 3: https://www.gesetze-im-internet.de/bfsg/__3.html
- BFSG § 14: https://www.gesetze-im-internet.de/bfsg/__14.html
- BFSG §§ 16-17: https://www.gesetze-im-internet.de/bfsg/__16.html and https://www.gesetze-im-internet.de/bfsg/__17.html
- BFSG §§ 28, 30, 32, 33, 37: https://www.gesetze-im-internet.de/bfsg/
- BFSG Annex 1, Annex 3 and Annex 4: https://www.gesetze-im-internet.de/bfsg/
- BFSGV §§ 12, 14 and 19: https://www.gesetze-im-internet.de/bfsgv/__12.html, https://www.gesetze-im-internet.de/bfsgv/__14.html and https://www.gesetze-im-internet.de/bfsgv/__19.html
- BFSGV amendment dated July 10, 2026 (BGBl. 2026 I No. 205), effective July 16, 2026
- Bundesfachstelle Barrierefreiheit e-commerce guidance: https://www.bundesfachstelle-barrierefreiheit.de/DE/Barrierefreiheitsstaerkungsgesetz/E-Commerce/online-shops_node
- MLBF AöR: https://www.mlbf-barrierefrei.de/

Provider and standards documentation evolves. Re-check current Apple accessibility guidance, Google Android accessibility guidance, the actual Xsolla checkout configuration, and current harmonised standards before relying on a provider, platform, or standards claim.