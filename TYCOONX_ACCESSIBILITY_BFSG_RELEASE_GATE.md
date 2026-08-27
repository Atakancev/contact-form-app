# TycoonX Accessibility / BFSG Release Gate

Last reviewed: August 27, 2026

This checklist covers the German Barrierefreiheitsstärkungsgesetz (BFSG), the BFSGV accessibility requirements for e-commerce services, and the release decisions that can affect the official TycoonX web shop and other consumer-contract interfaces. It is an operational release gate, not a substitute for case-specific legal advice.

## 1. Why this matters

The BFSG has applied to covered products and services since June 28, 2025. Its service scope includes "Dienstleistungen im elektronischen Geschäftsverkehr", meaning digital services offered through websites or mobile applications that are provided electronically, on an individual consumer request, with a view to concluding a consumer contract.

For TycoonX, the official web shop, checkout-adjacent consumer flows, account/payment authentication, and other interfaces used to conclude a paid consumer contract can therefore require a BFSG classification review.

Do not assume that using Apple, Google, or Xsolla automatically removes CK-Labs from every accessibility obligation. The answer depends on which party provides and controls the relevant consumer-facing service/interface and on whether an exemption applies.

## 2. Microenterprise exemption must be verified, not guessed

BFSG § 3(3) exempts microenterprises that offer or provide services from the accessibility requirements in § 3(1).

Under BFSG § 2 no. 17, a microenterprise is an enterprise that:

- employs fewer than 10 persons; and
- has either annual turnover of no more than EUR 2 million or an annual balance-sheet total of no more than EUR 2 million.

Release gate:

- [ ] Confirm CK-Labs' current BFSG enterprise-size status for the relevant year.
- [ ] Keep evidence supporting the headcount and turnover/balance-sheet threshold assessment.
- [ ] Re-check the exemption if CK-Labs grows, reorganizes, incorporates, acquires staff, or materially changes its business structure.
- [ ] Do not state publicly that TycoonX is legally exempt unless the current facts support that conclusion.
- [ ] Do not treat a current microenterprise exemption as permanent.

If the service-provider exemption applies, that does not prevent CK-Labs from voluntarily keeping the web shop and legal/support flows accessible, and it does not remove separate accessibility duties that may arise under another law or platform rule.

## 3. If the exemption does not apply

BFSGV § 19 adds specific requirements for e-commerce services. Where applicable, verify that the relevant consumer-contract flow provides required accessibility information and that identification, authentication, security, and payment functions are perceivable, operable, understandable, and robust.

P0 implementation checks:

- [ ] Checkout can be completed using keyboard-only navigation where the relevant interface is CK-Labs-controlled.
- [ ] Focus state is visible and moves in a logical order.
- [ ] Buttons, links, form controls, error messages, and purchase confirmations have meaningful accessible names.
- [ ] Text and controls remain usable with browser zoom and text scaling.
- [ ] Color is not the sole way to communicate errors, status, eligibility, or purchase state.
- [ ] Purchase, login, authentication, and account-recovery forms expose labels and errors to assistive technology.
- [ ] Security controls do not create an unnecessary accessibility barrier when an accessible alternative is legally required.
- [ ] The final purchase control remains clear about payment obligation and is not made less understandable by accessibility treatment.
- [ ] Any CK-Labs-controlled payment or entitlement confirmation remains perceivable and understandable after purchase.
- [ ] If an external provider controls checkout, document which accessibility responsibilities are handled by that provider and which surfaces remain CK-Labs-controlled.

## 4. Xsolla / Apple / Google allocation

- [ ] Map every paid TycoonX route by platform and country: Apple IAP, Google Play Billing, Xsolla web shop, or another authorized provider.
- [ ] For Xsolla, determine which checkout and authentication surfaces are controlled by Xsolla and which pre-checkout/post-checkout surfaces remain controlled by CK-Labs.
- [ ] For Apple and Google, do not assume store checkout accessibility resolves accessibility issues in TycoonX's own purchase-entry, restore, account, support, or entitlement screens.
- [ ] Keep the legal role allocation consistent with the Terms and Purchases & Refunds Policy: provider-controlled payment processing is separate from CK-Labs' own delivery, entitlement, support, and app/web interfaces.

## 5. Accessibility information and legal notices

Where BFSG service-information duties apply:

- [ ] Provide the legally required accessibility information in an accessible form.
- [ ] Keep that information reachable from the relevant consumer-facing service or legal/support area.
- [ ] Do not copy a generic accessibility statement that claims conformance not actually verified.
- [ ] If a claimed conformance level changes, update the public statement and implementation together.

## 6. Regression testing before September 1, 2026

Before full release:

- [ ] Verify the BFSG microenterprise status or document why the exemption does not apply.
- [ ] Test the TycoonX web shop entry path with keyboard-only navigation.
- [ ] Test legal/support/account-deletion pages with browser zoom and a screen reader or platform accessibility inspector.
- [ ] Test purchase and entitlement error messages for accessible labels and understandable recovery instructions.
- [ ] Confirm the account-deletion request flow remains accessible without opening the app.
- [ ] Confirm the German electronic withdrawal route, where CK-Labs must provide it, is also accessible and not hidden behind inaccessible controls.
- [ ] Re-run this gate after any major redesign of checkout, authentication, support, or payment routing.

## 7. Founder-protective rule

Do not create an unnecessary legal admission. If CK-Labs qualifies for the BFSG microenterprise service exemption, public legal copy should not imply that every BFSG service requirement legally applies. Conversely, do not rely on the exemption without current evidence.

The safest operational posture is: verify the exemption, keep evidence, make critical consumer flows accessible anyway where reasonably practicable, and re-audit immediately if CK-Labs' size or the payment architecture changes.
