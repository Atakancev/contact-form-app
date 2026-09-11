# TycoonX German BFSG / E-Commerce Accessibility Gate

Status: implementation and legal-classification gate

Date checked: 11 September 2026

Scope: TycoonX consumer-facing purchase, checkout, account, support and legal-information surfaces offered in Germany, especially the CK-Labs TycoonX webshop using Xsolla, plus any TycoonX-owned mobile/web surface that is itself part of concluding a consumer contract.

This gate does not change the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy or Community Standards. It exists because the German Barrierefreiheitsstärkungsgesetz (BFSG), implementing Directive (EU) 2019/882, has applied since 28 June 2025 and the repository previously had no dedicated BFSG classification or release gate.

## 1. Why this matters

German BFSG rules apply to specified products and services supplied to consumers after 28 June 2025. The covered services expressly include "Dienstleistungen im elektronischen Geschäftsverkehr" (e-commerce services).

Under § 2 no. 26 BFSG, an e-commerce service is a digital service offered through websites or mobile applications, provided electronically and at the individual request of a consumer with a view to concluding a consumer contract.

For TycoonX, the strongest candidate is the official TycoonX webshop flow used to offer Diamonds, one-time 30-Day VIP and limited-time promotional Lifetime VIP to consumers. A TycoonX-owned page that is merely informational is not automatically an e-commerce service, but a page, app screen or embedded flow used to select, authenticate, pay for or confirm a consumer purchase may form part of the e-commerce service.

Do not assume that every part of the TycoonX game is covered by BFSG merely because it is a mobile app. Classify the concrete service and transaction function.

## 2. First gate: determine whether the microenterprise service exemption applies

§ 3(3) BFSG exempts microenterprises that offer or provide services from the accessibility obligation in § 3(1).

§ 2 no. 17 BFSG defines a microenterprise as an undertaking that:

1. employs fewer than 10 persons; and
2. has either annual turnover of no more than EUR 2 million or an annual balance-sheet total of no more than EUR 2 million.

Do not hard-code "CK-Labs is exempt" into TycoonX legal pages, checkout copy or permanent compliance documentation. The exemption depends on actual business facts and can stop applying as the business grows.

### Required evidence

At least once per financial year, and again after a material business restructuring, record:

- relevant headcount under the applicable legal method;
- annual turnover;
- annual balance-sheet total;
- the accounting period used;
- whether linked/partner-enterprise rules or another attribution rule changes the SME assessment;
- the date the assessment was approved; and
- the person/source responsible for the figures.

If the criteria are satisfied, record the microenterprise-service exemption as the current legal basis for not treating BFSG service accessibility as a mandatory release blocker.

If either required limb fails, immediately reopen this gate as mandatory compliance work.

Voluntary accessibility work should continue even while exempt so that loss of the exemption does not create a sudden release blocker.

## 3. Do not confuse the service exemption with a blanket BFSG exemption

The microenterprise exemption in § 3(3) BFSG is for microenterprises offering or providing services. It is not a general statement that every activity of a small business falls outside the BFSG.

If CK-Labs later places a separately covered physical product on the market, performs another regulated economic-operator role, or offers a service that is not covered by the service exemption for another reason, assess that activity separately.

For the present TycoonX legal-commerce project, this gate focuses on digital e-commerce services.

## 4. Provider/channel responsibility must be mapped, not guessed

TycoonX uses multiple purchase channels:

- Apple App Store in-app purchases;
- Google Play purchases; and
- the official CK-Labs TycoonX webshop using Xsolla.

BFSG responsibility follows the actual service/provider role and the concrete interface being supplied to the consumer. Do not state that Apple, Google or Xsolla "takes care of accessibility" without contract/interface evidence.

For every purchase path, record:

- who owns the page/app surface where the product is selected;
- who controls identification and authentication;
- who controls the final order/confirmation control;
- who controls the payment UI;
- who is the contracting merchant/seller for the transaction;
- who issues the receipt or durable confirmation;
- who can change the accessibility implementation; and
- which party receives accessibility complaints for that surface.

A platform-controlled payment sheet does not automatically remove CK-Labs responsibility for a TycoonX-owned product-selection or pre-checkout surface if that surface itself forms part of the e-commerce service.

Likewise, CK-Labs should not promise control over accessibility defects in a native Apple, Google or Xsolla interface that only that provider can change. The TycoonX support process should route provider-controlled issues to the responsible provider while preserving any mandatory rights against CK-Labs that still apply.

## 5. Mandatory accessibility standard if BFSG applies

Under § 3(1) BFSG, covered services must be accessible. A service is accessible when people with disabilities can find, access and use it in the generally customary manner, without particular difficulty and in principle without assistance.

The detailed service requirements are supplied by the BFSGV.

### § 12 BFSGV baseline

Where applicable, TycoonX e-commerce surfaces must make service information:

- available through more than one sensory channel where required;
- findable;
- understandable;
- perceivable;
- available in text formats suitable for assistive alternatives;
- readable with appropriate sizing, form, contrast and spacing;
- accompanied by alternatives for non-text content; and
- consistently perceivable, operable, understandable and robust.

Websites, associated online applications and mobile services/apps within scope must be designed in a consistently perceivable, operable, understandable and robust way.

Support services that provide accessibility/assistive-technology information must provide that information through accessible communication means.

### § 19 BFSGV e-commerce-specific functions

Where provided as part of the e-commerce service, the following must be perceivable, operable, understandable and robust:

- identification functions;
- authentication functions;
- security functions;
- payment functions;
- identification methods;
- authentication methods;
- electronic signatures; and
- payment services.

This means accessibility testing cannot stop at static legal text. The actual purchase journey matters.

## 6. TycoonX checkout acceptance criteria

If BFSG applies to a TycoonX-owned or CK-Labs-responsible purchase surface, the following are release-blocking requirements.

### Product selection

- Diamond bundle quantity and price can be understood without relying only on color, icon shape or visual placement.
- 30-Day VIP is announced clearly as a one-time, non-renewing 30-day entitlement.
- Lifetime VIP is announced clearly as the limited-time promotional one-time offering actually on sale in that genuine sales window.
- Disabled/unavailable purchase states have text or programmatic meaning, not only visual dimming.
- Sale price, regular/reference price, taxes/fees and currency are exposed to assistive technology where displayed.
- Crossed-out price styling does not hide the underlying semantic text.

### Focus and keyboard/switch operation

- Every actionable checkout element can receive visible focus.
- Focus order follows the logical transaction order.
- A keyboard or equivalent assistive input can select the product, open the purchase flow, accept required choices and reach the final order control.
- Focus is not trapped inside promotional carousels, cookie banners, country selectors, coupon dialogs or provider embeds.
- Closing a modal returns focus to a sensible control.

### Screen-reader semantics

- Product cards expose product name, quantity/duration and price programmatically.
- Buttons have unambiguous accessible names.
- The final paid-order control is announced with the same legal/commercial meaning visible on screen.
- Error summaries and field errors are associated with the affected fields.
- Loading, payment-pending, payment-failed, payment-success and entitlement-delivered states are announced where technically feasible.
- Decorative graphics are hidden from assistive technology; meaningful images/icons have appropriate alternatives.

### Authentication and security

- Login and purchase authentication do not rely exclusively on a cognitive puzzle or inaccessible challenge where an accessible alternative is legally/technically required.
- One-time codes can be entered and understood with assistive technology.
- Password-manager/paste behavior is not unnecessarily blocked.
- Security controls remain strong. Accessibility is not a reason to weaken fraud prevention or account security; provide an accessible secure alternative instead.

### Payments

- Payment method choice is keyboard/screen-reader operable where CK-Labs controls it.
- Currency and final total are announced correctly.
- Coupon success/failure is perceivable without color alone.
- Failed or reversed payment states are distinguishable from successful entitlement delivery.
- A pending provider response does not create a visually successful but programmatically ambiguous state.
- If an iframe/provider component is inaccessible, record who controls it and escalate to the responsible provider rather than masking the defect.

### Responsive/mobile use

- Zoom and text resizing do not hide the final price or order control.
- Landscape/portrait changes do not orphan focus or hide required information.
- Touch targets are usable without requiring unusually precise gestures.
- Purchase controls do not depend on drag-only gestures if an equivalent simple control can be provided.

## 7. Legal-information accessibility if BFSG applies

§ 14(1)(2) BFSG requires a covered service provider to create the information specified in Annex 3 no. 1 and make it publicly available in accessible form.

Annex 3 requires the information, in the terms or another clearly perceptible location, to explain how the service meets the accessibility requirements. Where relevant it must include:

- a general description of the service in an accessible format;
- explanations necessary to understand how the service works;
- a description of how the service meets the applicable accessibility requirements; and
- the competent market-surveillance authority.

As of the September 2026 check, Germany's common competent authority is the Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen (MLBF), which began operating after the Länder treaty entered into force on 26 September 2025 and published its website in June 2026.

Do not hard-code an authority address or URL forever. Verify the currently competent authority when publishing or materially revising the accessibility information.

### Recommended TycoonX implementation if mandatory

Create a plainly named player-facing page such as `Accessibility / Barrierefreiheit` linked from the webshop/legal footer. It should:

- identify the covered TycoonX e-commerce service;
- explain the relevant accessibility functionality in plain language;
- identify known limitations honestly;
- state how to request accessible support;
- identify the current competent market-surveillance authority as required;
- be available in an accessible format itself; and
- not make an absolute "100% accessible" claim that cannot be continuously substantiated.

This page is not a substitute for actually making the service accessible.

## 8. Continuous-conformity duty if BFSG applies

§ 14(3) BFSG requires covered service providers to keep the accessibility requirements satisfied while offering/providing the service and to account for changes in the service, requirements, harmonized standards and technical specifications.

Therefore a one-time audit is insufficient.

Re-run accessibility regression checks when TycoonX changes:

- webshop framework/layout;
- product cards;
- Diamond bundle catalog;
- VIP catalog;
- coupon/promotion UI;
- tax/currency display;
- authentication provider;
- payment provider;
- Xsolla integration mode;
- cookie/consent UI;
- modal/dialog library;
- routing/navigation;
- checkout confirmation page; or
- any provider component embedded into the purchase path.

## 9. Nonconformity procedure if BFSG applies

Under § 14(4) BFSG, a covered service provider that discovers nonconformity must take necessary corrective measures. The statute also requires information to market-surveillance authorities where the service does not meet the applicable requirements.

Operationally maintain:

- discovery timestamp;
- affected route/component/provider;
- accessibility requirement affected;
- affected user group;
- severity and transaction impact;
- temporary mitigation;
- responsible owner/provider;
- remediation commit/version;
- validation evidence; and
- authority-notification assessment where applicable.

Do not silently classify a serious checkout accessibility defect as a cosmetic bug.

## 10. Enforcement exposure

§ 37 BFSG provides administrative-fine exposure. Offering/providing a service contrary to § 14(1) together with the BFSGV requirements can be punishable by a fine of up to EUR 100,000. Certain information/cooperation failures can carry lower but still material fines.

This is conditional on the BFSG obligation actually applying. Do not quote the maximum fine to players or imply that CK-Labs currently violates the law merely because a compliance gate exists.

## 11. Engineering benchmark

For TycoonX web/app surfaces, use WCAG 2.2 AA and the relevant EN 301 549 criteria as practical engineering/testing references where appropriate.

Do not state that merely passing an automated WCAG scanner proves BFSG compliance. Automated tools cannot reliably test focus logic, accessible names, error recovery, screen-reader behavior, cognitive clarity, provider embeds or the complete legal standard.

Minimum testing should combine:

- automated accessibility scan;
- keyboard-only navigation;
- screen-reader test;
- 200%/400% zoom or equivalent responsive text check where relevant;
- contrast/non-color check;
- mobile assistive-technology spot check;
- checkout happy path;
- checkout failed/pending path; and
- provider-redirect/embed path.

## 12. Microenterprise-safe strategy

If CK-Labs currently qualifies for § 3(3) BFSG, the recommended approach is:

1. document the exemption evidence;
2. keep the exemption out of player-facing permanent marketing promises;
3. voluntarily keep new TycoonX legal and purchase UI reasonably accessible;
4. use accessibility-friendly components for all new development;
5. keep the purchase-provider responsibility map current; and
6. trigger a mandatory BFSG readiness review before business growth causes loss of microenterprise status.

This avoids paying a large accessibility remediation cost all at once when the business crosses the threshold.

## 13. Provider replacement/discontinuation scenario

If CK-Labs replaces Xsolla, authentication, hosting, checkout UI or another provider, accessibility is part of the migration acceptance criteria.

A provider replacement must not silently remove:

- keyboard access;
- screen-reader labels;
- accessible authentication;
- accessible payment methods;
- accessible error messages;
- final price visibility;
- mandatory withdrawal/order controls; or
- legally required accessibility information.

Provider discontinuation or emergency migration may justify temporary technical measures, but does not create a contractual waiver of mandatory accessibility rights where the BFSG applies.

## 14. Relationship with TycoonX legal/payment rules

This gate does not change the following canonical TycoonX rules:

- purchased Diamonds do not expire merely because time passes;
- promotional/free Diamonds remain distinguishable from paid Diamonds;
- 30-Day VIP is a one-time, non-renewing 30-day entitlement;
- Lifetime VIP is a limited-time promotional offering available only in selected genuine sales windows, may be withdrawn from future sale and may never return;
- prices can legitimately differ by country/platform/channel;
- future prices, bundles, currencies and promotions may change subject to applicable law;
- the final total shown before confirmation governs a completed purchase subject to mandatory law and legally relevant error correction;
- later price decreases do not automatically create a price-match/refund right and later increases do not retroactively surcharge an already completed one-time purchase, except where mandatory law requires otherwise;
- chargebacks/refunds/reversals must be reconciled against authoritative transaction provenance;
- mandatory withdrawal, conformity, update, liability and other consumer rights remain intact; and
- platform/provider responsibilities must be distinguished from CK-Labs responsibilities.

Accessibility failure must not be used as a reason to erase an unrelated valid Diamond or VIP entitlement. Conversely, a valid entitlement does not excuse an inaccessible checkout where accessibility law applies.

## 15. Regression scenarios

### BFSG-01: microenterprise criteria satisfied

Expected: retain dated evidence of both the headcount condition and the turnover-or-balance-sheet condition; classify § 3(3) service exemption; keep voluntary accessibility backlog active.

### BFSG-02: headcount reaches 10 or more

Expected: do not continue relying on § 3(3); perform full service classification and mandatory compliance review before continuing affected German e-commerce service without remediation.

### BFSG-03: financial threshold exceeded while headcount remains under 10

Expected: reassess the microenterprise definition using the exact statutory criteria instead of assuming small headcount alone is sufficient.

### BFSG-04: German Diamond webshop purchase with screen reader

Expected if mandatory: bundle quantity, currency, price, final total, order control, payment result and entitlement result can be understood and operated without sight.

### BFSG-05: 30-Day VIP purchase using keyboard only

Expected if mandatory: full purchase can be completed without pointer-only interaction; product is clearly one-time/non-renewing and 30 days.

### BFSG-06: Lifetime VIP sale window

Expected if mandatory: promotional status, actual price and final order control remain accessible; no countdown animation or crossed-out price removes semantic purchase information.

### BFSG-07: coupon error communicated only in red

Expected: fail. Add text/programmatic error information.

### BFSG-08: Xsolla iframe keyboard trap

Expected: identify provider-controlled defect, preserve an accessible exit/recovery path where CK-Labs can, escalate to Xsolla, and do not claim full compliance while unresolved if CK-Labs remains legally responsible for the affected service.

### BFSG-09: Apple or Google native sheet

Expected: document the provider-controlled interface and CK-Labs handoff; do not duplicate native controls with an unofficial replacement that conflicts with store policy.

### BFSG-10: authentication challenge blocks assistive technology

Expected: fail if no accessible secure alternative exists and CK-Labs controls the function.

### BFSG-11: provider changes local currency/VAT presentation

Expected: price remains understandable and operable; accessibility regression is tested together with commercial price correctness.

### BFSG-12: accessible legal text but inaccessible final payment button

Expected: fail. Static legal-page accessibility does not satisfy § 19 BFSGV payment-function requirements.

### BFSG-13: automated scanner reports zero errors

Expected: not sufficient evidence alone. Run manual keyboard/screen-reader/zoom and transaction-state checks.

### BFSG-14: accessibility information missing competent authority

Expected if Annex 3 duty applies: fail and add currently competent market-surveillance authority.

### BFSG-15: CK-Labs loses microenterprise status after growth

Expected: trigger mandatory BFSG review and publish required Annex 3 information before relying on the formerly exempt implementation as compliant.

### BFSG-16: support receives accessibility complaint

Expected: classify separately from ordinary gameplay/support complaint, retain the affected surface/version/provider facts, offer accessible communication, and route for timely remediation.

## 16. Release decision

Current legal wording/localization status is not blocked by this gate because no canonical TycoonX legal meaning needed to change in this review.

Commercial implementation status remains conditional until CK-Labs has a documented current microenterprise assessment or, if the exemption is unavailable, evidence that each responsible German TycoonX e-commerce surface satisfies the applicable BFSG/BFSGV duties.

Do not mark BFSG operational readiness 100% merely because this document exists.

## 17. Primary sources checked

- German BFSG, especially §§ 1, 2, 3, 14, 37 and Annex 3: https://www.gesetze-im-internet.de/bfsg/
- German BFSGV, especially §§ 3, 12 and 19: https://www.gesetze-im-internet.de/bfsgv/
- Bundesfachstelle Barrierefreiheit BFSG guidance and current FAQ: https://www.bundesfachstelle-barrierefreiheit.de/DE/Barrierefreiheitsstaerkungsgesetz/
- Bundesfachstelle e-commerce guidance: https://www.bundesfachstelle-barrierefreiheit.de/DE/Barrierefreiheitsstaerkungsgesetz/E-Commerce/online-shops_node
- Directive (EU) 2019/882: https://eur-lex.europa.eu/eli/dir/2019/882/oj

Legal note: this is a compliance engineering gate, not a substitute for jurisdiction-specific legal advice. Mandatory consumer and accessibility rights always prevail over inconsistent TycoonX wording.