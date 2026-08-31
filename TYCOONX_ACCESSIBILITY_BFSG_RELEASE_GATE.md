# TycoonX Accessibility / BFSG Release Gate

Last reviewed: August 31, 2026

This checklist covers the German Barrierefreiheitsstärkungsgesetz (BFSG), the BFSGV accessibility requirements for covered e-commerce services, the current German market-surveillance authority, Apple accessibility metadata, and the release decisions that can affect the official TycoonX web shop and other consumer-contract interfaces. It is an operational release gate, not a substitute for case-specific legal advice.

## 1. Why this matters

The BFSG has applied to covered products and services since June 28, 2025. Its service scope includes "Dienstleistungen im elektronischen Geschäftsverkehr", meaning digital services offered through websites or mobile applications that are provided electronically, on an individual consumer request, with a view to concluding a consumer contract.

For TycoonX, the official web shop, checkout-adjacent consumer flows, account/payment authentication, withdrawal interfaces, purchase restoration and other interfaces used to prepare, conclude or administer a paid consumer contract therefore require a BFSG classification review.

Do not assume that using Apple, Google, or Xsolla automatically removes CK-Labs from every accessibility obligation. The answer depends on which party provides and controls the relevant consumer-facing service/interface and on whether an exemption applies.

## 2. Microenterprise exemption must be verified, not guessed

BFSG § 3(3) exempts microenterprises that offer or provide services from the accessibility requirements in BFSG § 3(1).

Under BFSG § 2 no. 17, a microenterprise is an enterprise that:

- employs fewer than 10 persons; and
- has either annual turnover of no more than EUR 2 million or an annual balance-sheet total of no more than EUR 2 million.

Release gate:

- [ ] Confirm CK-Labs' current BFSG enterprise-size status for the relevant year.
- [ ] Keep dated evidence supporting the headcount and turnover/balance-sheet threshold assessment.
- [ ] Re-check the exemption if CK-Labs grows, reorganizes, incorporates, acquires staff, changes ownership or materially changes its business structure.
- [ ] Do not state publicly that TycoonX is legally exempt unless the current facts support that conclusion.
- [ ] Do not treat a current microenterprise exemption as permanent.
- [ ] Keep the BFSG classification separate from any other legal or platform accessibility duty that may apply independently.

If the service-provider exemption applies, that does not prevent CK-Labs from voluntarily keeping the web shop, legal, support and account flows accessible. Voluntary accessibility improvements should not be phrased as an admission that every BFSG service duty applies where the statutory exemption is actually available.

## 3. Covered e-commerce duties if the exemption does not apply

BFSGV § 19 adds specific requirements for services in electronic commerce. Where applicable, the relevant service must provide required accessibility information and identification, authentication, security and payment functions must be perceivable, operable, understandable and robust.

P0 implementation checks:

- [ ] Checkout can be completed using keyboard-only navigation where the relevant interface is CK-Labs-controlled.
- [ ] Focus state is visible and moves in a logical order.
- [ ] Buttons, links, form controls, error messages and purchase confirmations have meaningful accessible names.
- [ ] Text and controls remain usable with browser zoom and text scaling.
- [ ] Color is not the sole way to communicate errors, status, eligibility, discounts, timers or purchase state.
- [ ] Purchase, login, authentication, account-recovery and withdrawal forms expose labels and errors to assistive technology.
- [ ] Security controls do not create an unnecessary accessibility barrier when an accessible alternative is legally required.
- [ ] The final purchase control remains clear about payment obligation and is not made less understandable by accessibility treatment.
- [ ] Any CK-Labs-controlled payment or entitlement confirmation remains perceivable and understandable after purchase.
- [ ] A user who cannot operate an optional visual control has an equivalent way to complete a legally required consumer action where applicable.
- [ ] Accessibility failure never changes the confirmed price, creates a duplicate charge, blocks a lawful refund/withdrawal route or silently changes entitlement state.
- [ ] If an external provider controls checkout, document which accessibility responsibilities are handled by that provider and which surfaces remain CK-Labs-controlled.

## 4. BFSG service information is a real legal deliverable

BFSG § 14(1) requires a covered, non-exempt service provider to create the information described in BFSG Annex 3 no. 1 and make it publicly accessible in an accessible form. BFSG § 14(2) requires that information to be retained for as long as the service is offered or provided.

Annex 3 requires the service provider to explain, in its terms or another clearly perceptible place, how the covered service satisfies the applicable accessibility requirements. The information must include, where applicable:

- a general description of the service in an accessible format;
- descriptions and explanations needed to understand how the service is performed;
- a description of how the service meets the relevant accessibility requirements; and
- the competent market-surveillance authority.

Release gate if BFSG applies:

- [ ] Publish a TycoonX-specific **Information zur Barrierefreiheit** for the covered service before relying on BFSG conformity.
- [ ] Keep that information clearly reachable from the relevant web shop/legal/support surface.
- [ ] Keep the page itself accessible.
- [ ] Describe the real TycoonX service and real tested accessibility behavior, not a generic template.
- [ ] Do not claim a WCAG, EN 301 549 or other conformance level unless the actual relevant service has been tested to the claimed level.
- [ ] Keep the information current after material checkout, login, payment, support or authentication changes.
- [ ] Preserve the historic version/evidence that supported each material release where useful for compliance records.

Important terminology: the private-sector BFSG information described above is not automatically the same legal instrument as the **Erklärung zur Barrierefreiheit** used for public-sector websites under the public-sector accessibility regime. Do not publish the wrong type of statement merely because a public-authority template is easy to find.

## 5. Current German market-surveillance authority

As of August 31, 2026, the competent nationwide German BFSG market-surveillance body is the **Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen (MLBF AöR)** in Magdeburg. Its public website went online in June 2026, and the authority states that it has exercised nationwide BFSG market-surveillance functions since September 2025.

If BFSG Annex 3 information is required for TycoonX, the competent-authority information must therefore be checked against the current MLBF details rather than an older placeholder or pre-launch authority reference.

Current authority checkpoint:

- Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen - Anstalt öffentlichen Rechts (MLBF AöR)
- Carl-Miller-Straße 6, 39112 Magdeburg, Germany
- Website: https://www.mlbf-barrierefrei.de/

Release gate:

- [ ] Re-check the MLBF name/contact before publishing or materially updating a mandatory BFSG information page.
- [ ] Keep a human-readable route for accessibility feedback/support even where CK-Labs is exempt.
- [ ] If the MLBF opens an inquiry, preserve the relevant release evidence and do not alter historic test results or accessibility claims after the fact.

## 6. Non-conformity, correction and enforcement

Where BFSG applies, BFSG § 14 requires the service provider to maintain conformity and to take necessary corrective measures after non-conformity. The MLBF's current business guidance states that covered service providers must act on non-conformity and provide the required BFSG information publicly and accessibly.

BFSG §§ 29 and 30 allow the authority to require correction of substantive or formal non-conformity and, if compliance is not restored, to take further measures including restricting or prohibiting the service. BFSG § 37 can impose a fine of up to EUR 100,000 for offering or providing a covered service contrary to BFSG § 14(1) in conjunction with the BFSGV.

Founder-protective response rule:

- [ ] Treat a confirmed accessibility defect as a fix-and-evidence event, not as a reason to rewrite historic records.
- [ ] Preserve the defect report, affected version, remediation, test evidence and release date.
- [ ] Do not make a blanket admission that every TycoonX screen violates BFSG because one control failed.
- [ ] Do not use an accessibility complaint as a reason to suspend an account, revoke paid value or accuse the reporter of abuse unless there is separate reliable evidence of misconduct.

## 7. Fundamental alteration and disproportionate burden are narrow, documented routes

If BFSG applies, BFSG §§ 16 and 17 contain specific routes concerning fundamental alteration and disproportionate burden. They are not informal excuses to skip accessibility work.

Where CK-Labs ever relies on one of these routes:

- [ ] Perform the statutory assessment for the specific service/function instead of using a generic sentence.
- [ ] Preserve the assessment for the required period where the statutory documentation duty applies.
- [ ] Reassess disproportionate burden for the relevant service category at the statutory intervals and after relevant changes where required.
- [ ] Do not rely on disproportionate burden where the law removes that option because accessibility-improvement funding has been received.
- [ ] Notify the competent authority where the applicable provision requires notification.
- [ ] Keep unaffected parts of the service accessible rather than treating one narrow exception as a full-service exemption.

## 8. Xsolla / Apple / Google allocation

- [ ] Map every paid TycoonX route by platform and country: Apple IAP, Google Play Billing, Xsolla web shop or another authorized provider.
- [ ] For Xsolla, determine which checkout, identification, authentication, fraud/security and payment surfaces are controlled by Xsolla and which pre-checkout/post-checkout surfaces remain controlled by CK-Labs.
- [ ] For Apple and Google, do not assume store checkout accessibility resolves accessibility issues in TycoonX's own purchase-entry, restore, account, support, withdrawal or entitlement screens.
- [ ] Keep the legal role allocation consistent with the Terms and Purchases & Refunds Policy: provider-controlled payment processing is separate from CK-Labs' own delivery, entitlement, support and app/web interfaces.
- [ ] If a provider-controlled inaccessible flow blocks a consumer right or paid entitlement, preserve the provider incident and provide any reasonable CK-Labs-controlled alternative required by applicable law rather than silently denying the request.

## 9. Apple Accessibility Nutrition Labels

Apple's current App Store Connect accessibility labels are a separate platform-transparency layer. As of August 31, 2026, Apple describes submission of this accessibility support information as initially optional, while stating that it is intended to become required for future app submissions or updates after developers receive time to prepare.

Current Apple behavior also allows a developer to provide a TycoonX-specific accessibility URL. Apple says an accessibility feature should only be claimed when users can complete the app's common tasks using that feature under Apple's evaluation criteria.

Release gate:

- [ ] Do not claim VoiceOver, Voice Control, Larger Text, Sufficient Contrast, Reduced Motion, Captions or another Apple accessibility label unless the current TycoonX build satisfies Apple's evaluation criteria for that device.
- [ ] Re-test common tasks before changing App Store accessibility labels.
- [ ] Keep Apple accessibility metadata current after a material UI change.
- [ ] If an accessibility URL is provided, make it TycoonX-specific and keep its statements aligned with the real app behavior.
- [ ] Do not copy a BFSG legal statement into Apple metadata if the wording would misleadingly claim broader product support than was actually tested.

Apple's current documentation: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels

## 10. Paid entitlements and accessibility must remain isolated

Accessibility handling must never create or destroy value by itself.

- A failed screen-reader path does not invalidate a legitimate Diamond purchase.
- An inaccessible restore button does not terminate an otherwise valid one-time 30-Day VIP.
- A provider checkout accessibility problem does not convert valid Lifetime VIP into Diamonds, 30-Day VIP or a refund automatically.
- Fixing an accessibility defect must not replay an Apple, Google or Xsolla transaction and grant paid value twice.
- A complaint about accessibility must not be treated as chargeback fraud, entitlement abuse, exploit use or regional-price abuse without separate reliable evidence.
- Any refund, withdrawal, cancellation or entitlement correction still follows the transaction-specific legal/payment record and mandatory consumer law.

## 11. Regression testing before and after September 1, 2026

Before full release and after material consumer-contract UI changes:

- [ ] Verify the BFSG microenterprise status or document why the exemption does not apply.
- [ ] Test the TycoonX web shop entry path with keyboard-only navigation.
- [ ] Test legal/support/account-deletion pages with browser zoom and a screen reader or platform accessibility inspector.
- [ ] Test purchase, login and entitlement error messages for accessible labels and understandable recovery instructions.
- [ ] Confirm the account-deletion request flow remains accessible without opening the app where that route is intentionally offered.
- [ ] Confirm the German electronic withdrawal route, where CK-Labs must provide it, is accessible and not hidden behind inaccessible controls.
- [ ] Test any CK-Labs-controlled coupon, regional-pricing, Lifetime VIP sale-window and checkout countdown UI without relying only on color, animation or pointer input.
- [ ] Re-test after replacing or materially reconfiguring Xsolla, authentication, anti-fraud or checkout providers.
- [ ] Re-test Apple accessibility metadata after a material iOS interface change.

## 12. Founder-protective rule

Do not create an unnecessary legal admission. If CK-Labs qualifies for the BFSG microenterprise service exemption, public legal copy should not imply that every BFSG service requirement legally applies. Conversely, do not rely on the exemption without current evidence.

If the exemption no longer applies, switch deliberately: complete the applicability assessment, publish the required TycoonX-specific accessibility information, verify the relevant BFSGV service functions, record the current MLBF authority, and preserve the release evidence before continuing the covered service.

The safest operational posture is to verify the exemption, keep evidence, make critical consumer flows accessible where reasonably practicable, keep platform accessibility claims truthful, and re-audit immediately if CK-Labs' size or the payment architecture changes.

## 13. Official sources reviewed August 31, 2026

- BFSG § 2 no. 17, microenterprise definition: https://www.gesetze-im-internet.de/bfsg/__2.html
- BFSG § 3, accessibility rule and microenterprise service exemption: https://www.gesetze-im-internet.de/bfsg/__3.html
- BFSG § 14, service-provider duties: https://www.gesetze-im-internet.de/bfsg/__14.html
- BFSG §§ 16 and 17, fundamental alteration and disproportionate burden: https://www.gesetze-im-internet.de/bfsg/BJNR297010021.html
- BFSG § 37, fines: https://www.gesetze-im-internet.de/bfsg/__37.html
- BFSG Annex 3, service accessibility information: https://www.gesetze-im-internet.de/bfsg/anlage_3.html
- BFSGV § 12, general service requirements: https://www.gesetze-im-internet.de/bfsgv/__12.html
- BFSGV § 19, e-commerce requirements: https://www.gesetze-im-internet.de/bfsgv/__19.html
- Bundesfachstelle Barrierefreiheit e-commerce guidance: https://www.bundesfachstelle-barrierefreiheit.de/DE/Barrierefreiheitsstaerkungsgesetz/E-Commerce/online-shops_node
- MLBF business guidance and current authority details: https://www.mlbf-barrierefrei.de/Informationen-f%C3%BCr-Unternehmen/
- Apple App Store Connect accessibility labels: https://developer.apple.com/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels
