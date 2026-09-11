# TycoonX German BFSG / European Accessibility Act E-Commerce Accessibility Gate

Status: **release/commercial compliance gate**

Scope: TycoonX consumer purchase and contract-forming interfaces operated or controlled by CK-Labs, including any CK-Labs web shop or purchase landing flow, app-side product selection and purchase entry points, authentication/security steps used for purchasing, the Xsolla hand-off/return journey, and related consumer-facing information where the German Barrierefreiheitsstärkungsgesetz (BFSG) applies.

This gate does **not** change the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy or Community Standards by itself. It identifies an applicability question and implementation obligations that must be resolved before CK-Labs claims BFSG compliance or relies on a BFSG exemption.

## 1. Why this gate exists

Germany's BFSG implements Directive (EU) 2019/882, the European Accessibility Act. The BFSG has applied to covered consumer services since **June 28, 2025**.

For TycoonX, the relevant category is potentially a **service in electronic commerce**. Under § 2 no. 26 BFSG, this means a digital service offered through websites or mobile applications and provided electronically, at the individual request of a consumer, with a view to concluding a consumer contract.

An online purchase flow for Diamonds, one-time 30-Day VIP or Lifetime VIP can therefore be within the BFSG e-commerce analysis even though the underlying TycoonX virtual item is not a physical product.

Do not use either of these shortcuts:

- `TycoonX is a game, so the BFSG cannot apply.`
- `The payment processor handles checkout, so CK-Labs has no accessibility responsibility.`

The correct analysis is interface-by-interface and role-by-role.

## 2. First decision: document whether CK-Labs is currently a BFSG microenterprise

§ 3(3) BFSG exempts **microenterprises that offer or provide services** from the BFSG accessibility duty.

Under § 2 no. 17 BFSG, a microenterprise is an undertaking that:

1. employs **fewer than 10 persons**, and
2. has either annual turnover of **not more than EUR 2 million** or an annual balance-sheet total of **not more than EUR 2 million**.

### Required evidence

Before treating the TycoonX e-commerce service as exempt, CK-Labs should keep a dated internal record of:

- the relevant undertaking/legal operator;
- current employee/person count under the applicable definition;
- annual turnover;
- annual balance-sheet total;
- the accounting period/data used;
- who performed the assessment; and
- when the status will be reassessed.

Do not publish private accounting records merely to prove the exemption.

### Important limitation

The microenterprise exemption is a legal scope exemption for covered **services**. It is not a statement that accessibility is unnecessary, and it must not be carried forward forever without checking whether CK-Labs still meets the statutory thresholds.

If CK-Labs ceases to qualify, the commercial flow must not continue relying on an obsolete exemption assessment.

## 3. If the exemption does not apply, treat accessibility as a release requirement

Under § 3(1) BFSG, covered services must be accessible. Under § 14 BFSG, a service provider may offer or provide the service only if the applicable accessibility requirements are met and the required accessibility information has been prepared and made publicly accessible in an accessible form.

For a covered TycoonX e-commerce service, this is not merely a recommendation to make the final payment button larger. The German Federal Accessibility Centre's current e-commerce guidance states that the general BFSGV requirements indicate that the **whole website or app** offering the covered service should meet the applicable accessibility requirements, not just the narrow final checkout path.

Applicability to the full TycoonX game client should be assessed carefully rather than assumed from this sentence alone. The key question is which website/app/service is actually offering the consumer e-commerce service and how tightly the contract-forming functionality is integrated with the rest of that service.

## 4. Current BFSGV requirements relevant to TycoonX

The current BFSGV, including its 2026 amendments, requires covered services to be designed so that relevant information and functionality are perceivable, operable, understandable and robust.

### General service requirements

For covered services, § 12 BFSGV includes requirements that:

- information about the service is findable and understandable;
- information can be perceived through appropriate sensory channels;
- text can support alternative assistive formats;
- typography, contrast and spacing are suitable for the expected context;
- non-text content has an alternative presentation where required;
- digital information required for the service is provided consistently and accessibly; and
- websites, associated online applications, mobile services and mobile apps are designed in a perceivable, operable, understandable and robust manner.

Where support services such as a help desk or technical support are available, accessibility and assistive-technology information must also be available through accessible communication means where the regulation requires it.

### E-commerce-specific requirements

Under § 19 BFSGV, a covered e-commerce service must additionally address:

1. accessibility information for products/services being sold where such information is supplied by the responsible economic operator;
2. identification, authentication, security and payment functions so they are perceivable, operable, understandable and robust; and
3. identification/authentication methods, electronic signatures and payment services, where provided, so they are perceivable, operable, understandable and robust.

This is especially relevant to TycoonX because inaccessible security or payment steps can block a player from the transaction even when the product-selection page itself is accessible.

## 5. TycoonX product presentation requirements

Accessibility must not change the legal or commercial meaning of the products.

### Diamonds

An accessible Diamond purchase flow should make the following information programmatically and visually understandable where shown:

- Diamond quantity;
- final total monetary price;
- currency;
- mandatory tax/fee treatment where applicable;
- whether a promotion is applied;
- any relevant purchase-channel distinction; and
- the fact that Diamonds are TycoonX virtual currency, not cash, a deposit account or an investment.

Purchased Diamonds must not be made to expire merely because an accessibility setting, assistive technology or consent preference changes.

### One-time 30-Day VIP

The accessible description must preserve that current 30-Day VIP is:

- one purchase;
- one 30-day entitlement;
- **non-renewing**; and
- not an automatically recurring subscription.

Do not use a visually prominent label saying `30 days` while hiding `one-time/non-renewing` from screen-reader or keyboard users.

### Lifetime VIP

The accessible description must preserve that Lifetime VIP is:

- a one-time promotional entitlement;
- available only during selected genuine sales windows;
- capable of being withdrawn from future sale;
- possibly never offered again; and
- not a promise that TycoonX will operate forever.

A countdown or scarcity message must convey the same meaning to users of assistive technology as it conveys visually. A genuine sale window may end, but accessibility must not be used to hide material conditions or to create misleading urgency.

## 6. Pricing, promotions, taxes and regional presentation

Where CK-Labs controls the interface, users relying on assistive technology must receive the same material price information as other users.

At minimum, test that:

- the final total price is announced/read in a logical order;
- currency is unambiguous;
- tax/VAT or mandatory fee information is not conveyed only by color or tooltip;
- crossed-out prices have a meaningful accessible relationship to the current price;
- promotion/coupon errors are announced and can be corrected;
- sale countdowns are understandable without relying solely on animation or color;
- country/channel differences are not hidden from assistive technology;
- price updates do not silently change after focus has moved past the price field; and
- the final confirmation step exposes the same total that a sighted user sees.

Accessibility does not change the existing TycoonX pricing rule: future prices, bundles, regional prices, currencies and promotions may change for future purchases subject to law, while completed one-time purchases are not retroactively repriced merely because a later price differs.

## 7. Apple App Store responsibility split

Apple controls substantial portions of the App Store / StoreKit payment interface and its own platform accessibility.

CK-Labs remains responsible for CK-Labs-controlled TycoonX interfaces, including for example:

- how the product is named and described before StoreKit is invoked;
- whether the player can find and select the intended product;
- whether important product distinctions are accessible;
- whether custom pre-purchase warnings or gift-recipient selectors are accessible;
- whether the app correctly handles a success, pending, failure or cancellation state; and
- whether support/legal routes controlled by CK-Labs remain accessible where required.

Do not claim that Apple's accessibility work automatically proves the entire TycoonX purchase journey is BFSG-compliant.

## 8. Google Play responsibility split

Google controls substantial portions of Google Play Billing and Play-owned payment UI.

CK-Labs remains responsible for its own Android product-selection, purchase-entry, external-offer/alternative-billing routing where applicable, entitlement and support surfaces.

If TycoonX participates in a Google Play alternative billing or external offers programme, accessibility testing must include the programme-specific information/choice screens and the transition between CK-Labs and provider-controlled surfaces.

Do not create an inaccessible custom screen immediately before or after an otherwise accessible Google-controlled checkout.

## 9. Xsolla / CK-Labs webshop responsibility split

Using Xsolla does not by itself resolve CK-Labs' BFSG assessment.

For the actual TycoonX webshop journey, document:

- which domain/page is the CK-Labs-controlled e-commerce service;
- which page displays the offer and final price;
- when the player enters a provider-controlled Xsolla surface;
- who controls authentication, fraud checks and payment methods;
- who controls the final binding payment control;
- which accessibility statement/information covers each surface;
- what happens if the user returns from Xsolla with payment pending, failed, canceled or successful; and
- which party fixes an accessibility defect in each part of the journey.

A contractual allocation with Xsolla may be operationally useful, but CK-Labs should not assume that a private contract can remove statutory responsibility for a CK-Labs-controlled covered service.

## 10. Authentication, security, anti-fraud and CAPTCHA

Security is not a general exception from accessibility.

If a TycoonX purchase flow uses authentication, device verification, anti-fraud challenges, CAPTCHA or similar controls, test that a disabled user has an effective way to complete the legitimate transaction without being forced to defeat a visual/audio barrier that other users do not face.

This includes CK-Labs-controlled uses of CAPTCHA/anti-bot technology. A security provider being popular or technically sophisticated is not enough evidence that the complete user journey is accessible.

Accessibility accommodations must not be classified as fraud, automation, hacking or exploit behavior merely because they change the user's interaction pattern.

## 11. Error handling and correction

Purchase errors must be understandable without relying solely on color, position, animation or short-lived toast messages.

Examples:

- `Gift recipient not found` should be programmatically associated with the recipient field.
- `Coupon invalid` should be announced and not only turn the field red.
- `Payment pending` must be distinguishable from `payment failed` and `payment completed`.
- `You already have Lifetime VIP` must be exposed to screen readers if it blocks or changes a purchase.
- A duplicate-submit prevention state must not trap keyboard focus.

Accessible error handling must preserve existing payment-integrity rules. It must never cause a pending transaction to be treated as paid or allow a duplicate callback to grant the same entitlement twice.

## 12. Refunds, withdrawal and post-purchase support

Where a covered CK-Labs-controlled flow provides refund, statutory withdrawal, correction or support functions, those functions must not become inaccessible simply because the initial payment was accessible.

Accessibility testing should cover, where applicable:

- the German electronic withdrawal function;
- identifying the relevant transaction;
- selecting the correct Diamond or VIP purchase;
- refund/support forms;
- durable confirmation of a submitted request;
- notices about failed/reversed payments;
- refund/reversal status; and
- account-compromise support.

A disabled player's use of an accessibility feature must not reduce mandatory consumer remedies.

A refund of one transaction must continue to affect only the value attributable to that source. Accessibility remediation does not justify wiping unrelated Diamonds, another valid 30-Day VIP source or Lifetime VIP.

## 13. BFSG Annex 3 accessibility information

If CK-Labs is in scope and not exempt, § 14 BFSG together with Annex 3 requires public accessibility information about the service.

The information must be made available in an accessible form and should include, as applicable:

- a general description of the covered service in an accessible format;
- descriptions/explanations needed to understand how the service is performed;
- an explanation of how the service meets the applicable accessibility requirements; and
- identification of the competent market-surveillance authority.

As of September 2026, Germany's nationwide BFSG market-surveillance body is the **Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen (MLBF AöR)**. Verify its current official details before publishing them rather than copying stale contact data indefinitely.

Do not publish an accessibility statement that claims full conformity unless actual testing supports the claim.

## 14. Technical testing baseline

German official accessibility guidance points businesses to EN 301 549 and WCAG as important technical standards. They are useful testing baselines, but passing a small automated WCAG scan is not proof of full BFSG compliance.

Manual and assistive-technology testing should cover at least:

1. keyboard-only navigation;
2. visible focus and logical focus order;
3. screen-reader names, roles, states and relationships;
4. headings and landmarks;
5. form labels and instructions;
6. errors and validation;
7. zoom/reflow and text enlargement;
8. contrast and non-color-dependent meaning;
9. target size and motor accessibility;
10. dynamic price/status announcements;
11. modal/dialog focus management;
12. language metadata and localized content;
13. Arabic RTL purchase/legal presentation where applicable;
14. countdowns/time limits and any necessary extension behavior;
15. reduced-motion/seizure-risk considerations where applicable;
16. accessible authentication and security challenges;
17. mobile VoiceOver/TalkBack paths;
18. external-provider redirect and return paths;
19. downloadable/public documents that fall within scope; and
20. the complete transaction from product selection through confirmation and support.

Automated tools can support this work but must not be the sole release criterion.

## 15. Do not misuse the microenterprise or disproportionate-burden rules

Do not write public language such as:

> CK-Labs is exempt from accessibility law and therefore does not provide accessible purchasing.

Instead, keep the legal scope assessment internally and provide accessible experiences voluntarily wherever reasonably possible.

If CK-Labs later relies on a fundamental-alteration or disproportionate-burden provision under §§ 16 or 17 BFSG, perform and retain the assessment required by law. Do not use those provisions as a blanket excuse for ordinary checkout defects.

## 16. EU markets outside Germany

The BFSG is Germany's implementation of Directive (EU) 2019/882. Other EU/EEA markets can have their own national implementation, regulator, procedures and penalties.

Therefore:

- do not assume German microenterprise analysis or German regulator details automatically answer every other EEA country's implementation question;
- do not hard-code a Germany-only statement into all locales as though it were universal EU law; and
- when CK-Labs materially expands direct webshop activity in another EEA market, check that market's local implementation and language/information requirements.

This does not require changing the canonical English TycoonX contract wording merely because an implementation gate exists.

## 17. Enforcement / commercial risk

Under the current BFSG:

- market surveillance can test services, including websites/mobile applications;
- the authority can require corrective measures;
- persistent nonconformity can lead to an order stopping the offer or provision of the service; and
- specified violations involving offering/providing a service contrary to § 14(1) can be fined up to **EUR 100,000**.

These are statutory maximum/enforcement powers, not a prediction that every defect will receive the maximum penalty.

## 18. Production regression scenarios

Do not mark this gate closed without testing the actual relevant production journey where BFSG applies.

### Scenario A: Diamond purchase with screen reader

A German user selects a Diamond package using VoiceOver/TalkBack or a desktop screen reader. Quantity, final price, currency, tax information and the binding action are understandable in the correct order.

**Expected:** no hidden material term and no duplicate grant.

### Scenario B: one-time 30-Day VIP

The user can determine without sight that the product is one-time, lasts 30 days and does not renew automatically.

**Expected:** no subscription implication.

### Scenario C: Lifetime VIP sale

A genuine Lifetime VIP sale window uses a visible countdown.

**Expected:** assistive-technology users receive the same material deadline and product limitations without misleading urgency.

### Scenario D: keyboard-only checkout

The user completes CK-Labs-controlled purchase steps without a mouse.

**Expected:** no focus trap, invisible control or inaccessible modal.

### Scenario E: coupon error

A coupon fails.

**Expected:** the reason/status is announced programmatically and is not conveyed only by red color.

### Scenario F: final price changes after country/tax calculation

The total changes before confirmation because of a legitimate tax/FX/provider calculation.

**Expected:** the user is made aware of the updated final total before becoming bound.

### Scenario G: CAPTCHA / anti-fraud challenge

Security tooling challenges the transaction.

**Expected:** a disabled legitimate customer has an effective accessible path; accessibility tooling is not treated as cheating merely because interaction differs.

### Scenario H: provider hand-off

The user moves from a CK-Labs page to Xsolla or a platform-owned payment surface and back.

**Expected:** focus/context is understandable, status is clear, and a browser return is not mistaken for authoritative proof of payment.

### Scenario I: pending payment

The provider reports pending.

**Expected:** accessible status says pending and TycoonX does not grant completed paid value prematurely.

### Scenario J: failed payment

Payment fails.

**Expected:** failure is announced accessibly and no entitlement is granted.

### Scenario K: duplicate callback

The same successful transaction is delivered twice.

**Expected:** accessibility-related retries do not defeat transaction idempotency.

### Scenario L: withdrawal/refund function

A disabled German user needs to invoke a covered withdrawal/refund route.

**Expected:** the post-purchase remedy is usable with keyboard and assistive technology and identifies the correct transaction.

### Scenario M: account compromise

A disabled player reports an account compromise through support.

**Expected:** accessible support path; no assumption that unusual assistive-technology interaction proves account abuse.

### Scenario N: microenterprise threshold changes

CK-Labs no longer satisfies the statutory microenterprise definition.

**Expected:** an old exemption memo is not treated as permanent; scope is reassessed before continuing to rely on it.

### Scenario O: accessibility statement

CK-Labs becomes in-scope and non-exempt.

**Expected:** Annex 3 information is published in accessible form with a truthful service description, compliance explanation and current competent authority details.

## 19. Release decision

### Gate may be marked `EXEMPT-CURRENTLY`

Only when CK-Labs has documented that the relevant service provider qualifies for § 3(3) BFSG and the assessment is current.

### Gate may be marked `READY`

Only when:

- the service is in scope and no applicable exemption is relied upon;
- the required TycoonX/checkout surfaces have been tested;
- material defects are remediated;
- Annex 3/§ 14 information is available in accessible form where required;
- provider responsibility boundaries are documented; and
- regression coverage protects the payment and entitlement invariants above.

### Gate remains `OPEN`

If applicability, microenterprise status, required accessibility information, provider boundaries or production accessibility have not been verified.

**Current repository conclusion:** `OPEN / APPLICABILITY AND PRODUCTION VERIFICATION REQUIRED`.

No evidence located in the repository before creating this gate established either (a) a documented BFSG microenterprise exemption assessment or (b) a complete BFSG accessibility/conformity assessment for the TycoonX e-commerce journey.

## 20. Official legal/reference sources

- German BFSG: https://www.gesetze-im-internet.de/bfsg/
- § 1 BFSG scope: https://www.gesetze-im-internet.de/bfsg/__1.html
- § 2 BFSG definitions: https://www.gesetze-im-internet.de/bfsg/__2.html
- § 3 BFSG accessibility and microenterprise service exemption: https://www.gesetze-im-internet.de/bfsg/__3.html
- § 14 BFSG service-provider obligations: https://www.gesetze-im-internet.de/bfsg/__14.html
- Annex 3 BFSG service accessibility information: https://www.gesetze-im-internet.de/bfsg/anlage_3.html
- § 29 BFSG service enforcement: https://www.gesetze-im-internet.de/bfsg/__29.html
- § 37 BFSG fines: https://www.gesetze-im-internet.de/bfsg/__37.html
- BFSGV: https://www.gesetze-im-internet.de/bfsgv/
- § 12 BFSGV general service requirements: https://www.gesetze-im-internet.de/bfsgv/__12.html
- § 19 BFSGV e-commerce requirements: https://www.gesetze-im-internet.de/bfsgv/__19.html
- § 21 BFSGV functional performance criteria: https://www.gesetze-im-internet.de/bfsgv/__21.html
- Federal Accessibility Centre BFSG overview: https://www.bundesfachstelle-barrierefreiheit.de/DE/Barrierefreiheitsstaerkungsgesetz/barrierefreiheitsstaerkungsgesetz
- Federal Accessibility Centre e-commerce FAQ: https://www.bundesfachstelle-barrierefreiheit.de/DE/Barrierefreiheitsstaerkungsgesetz/FAQ-elektronischer-Geschaeftsverkehr/faq-elektronischer-Geschaeftsverkehr_node
- MLBF: https://mlbf-barrierefrei.de/
- Directive (EU) 2019/882: https://eur-lex.europa.eu/eli/dir/2019/882/oj
