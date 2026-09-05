# TycoonX German BFSG Accessibility / E-Commerce Release Gate

Last reviewed: September 5, 2026

TycoonX went to full release on September 1, 2026. This document is an operational German accessibility and e-commerce compliance gate for CK-Labs. It complements the TycoonX Terms of Service, Privacy Policy, Purchases & Refunds Policy, Community Standards, webshop/payment gates and platform-specific release gates. It does not replace the BFSG, BFSGV, mandatory consumer law, accessibility testing, or advice for CK-Labs's actual business structure.

## Why this gate exists

Germany's Barrierefreiheitsstärkungsgesetz (BFSG), implementing the European Accessibility Act, has applied to covered services since **June 28, 2025**. Services in electronic commerce are expressly within the statutory scope. For TycoonX, the relevant risk is not that every gameplay screen automatically becomes a BFSG-regulated e-commerce service. The relevant risk is that consumer-facing digital flows used to conclude TycoonX purchase contracts can fall within the electronic-commerce category, including web and mobile-app purchase journeys.

The repository previously had no dedicated BFSG classification/evidence gate. This creates two opposite risks:

1. CK-Labs could wrongly assume that being a small independent operator automatically removes every accessibility duty forever; or
2. CK-Labs could publish a broad legal claim that the whole game is BFSG-compliant even when the statutory microenterprise service exemption actually applies or the relevant production flows have not been tested.

Both are avoidable. The correct approach is to classify CK-Labs and each relevant consumer-contract flow, preserve the evidence, and only make public accessibility claims that are accurate for the actual service and current law.

## P0 scope/classification rule

Before relying on the BFSG microenterprise service exemption or publishing a BFSG accessibility statement for TycoonX, CK-Labs must preserve a dated classification showing:

1. whether the relevant TycoonX surface is a BFSG-covered service, especially a service in electronic commerce;
2. whether CK-Labs qualifies as a **Kleinstunternehmen / microenterprise** under the statutory definition at that time;
3. whether the microenterprise service exemption in § 3(3) BFSG actually applies to the relevant service;
4. whether another covered product/service category applies independently;
5. if CK-Labs is not exempt, which BFSG/BFSGV accessibility requirements apply to the purchase and support journey;
6. where the required service-accessibility information under § 14 BFSG and Annex 3 is made publicly available; and
7. who owns remediation, market-surveillance correspondence and re-testing after material changes.

Unknown scope is not a pass. Equally, unknown scope is not permission to tell players that TycoonX violates the BFSG.

## 1. Current statutory dates and scope

The BFSG has applied to covered services supplied to consumers since **June 28, 2025**.

For this gate, the core current legal references are:

- BFSG § 1 for covered products/services;
- BFSG § 2 no. 17 for the microenterprise definition;
- BFSG § 2 no. 26 for services in electronic commerce;
- BFSG § 3, including the service exemption in § 3(3);
- BFSG § 14 and Annex 3 for covered service-provider duties and public accessibility information;
- BFSG §§ 16-17 for fundamental-alteration / disproportionate-burden analysis where applicable;
- BFSG §§ 28-30 for service market surveillance and corrective measures;
- BFSG § 37 for administrative fines;
- BFSGV §§ 12-13 for general service accessibility; and
- BFSGV § 19 for electronic-commerce services.

Do not substitute a blog post, accessibility plugin badge or automated WCAG score for the statutory classification.

## 2. Microenterprise exemption: do not guess from headcount alone

BFSG § 2 no. 17 currently defines a microenterprise as an undertaking that:

- employs **fewer than 10 persons**; and
- either has annual turnover of **no more than EUR 2 million** or an annual balance-sheet total of **no more than EUR 2 million**.

BFSG § 3(3) provides that the general accessibility obligation in § 3(1) does not apply to microenterprises that offer or provide **services**.

Operational rules:

- Do not mark `bfsg_exempt = true` merely because CK-Labs has fewer than 10 workers.
- Preserve the relevant employee/headcount evidence and the financial threshold evidence for the period relied on.
- Reassess after a material corporate reorganization, acquisition, business sale, major hiring change or financial growth that could change classification.
- Do not assume the exemption for a separate covered **product** merely because it applies to a service. The statutory service exemption is not a blanket exemption for products.
- Do not publish wording such as `TycoonX is permanently exempt from the BFSG`. A present classification can change.
- If CK-Labs is currently exempt, accessibility improvements can still be implemented voluntarily without representing them as a legally mandated certification.

### Required evidence record

At minimum preserve:

- assessment date;
- legal operator/entity assessed;
- employed-person count and source;
- annual turnover figure and source;
- annual balance-sheet-total figure and source;
- period/year to which the evidence relates;
- conclusion: `microenterprise / not microenterprise / unresolved`;
- services assessed;
- person making the classification; and
- next reassessment trigger/date.

Do not commit tax returns, bank statements, payroll files or other unnecessary sensitive evidence into this public legal repository. Store only the operational conclusion/reference here; retain underlying records in the appropriate secure business/accounting system.

## 3. What counts as a TycoonX electronic-commerce flow

BFSG § 2 no. 26 defines a service in electronic commerce as a digital service offered through websites or mobile applications and provided electronically, at the individual request of a consumer, with a view to concluding a consumer contract.

For TycoonX, classify at least these surfaces rather than treating the entire game as one undifferentiated object:

- Apple App Store in-app purchase journey for Diamonds or VIP;
- Google Play purchase journey for Diamonds or VIP;
- CK-Labs TycoonX webshop purchase journey using Xsolla;
- any lawful in-app alternative-payment/external-offer flow used in a market where it is actually permitted and enrolled;
- login/account-recovery steps that are necessary to complete or restore a purchase;
- offer selection, cart/checkout, confirmation and entitlement-status surfaces under CK-Labs control;
- refund/withdrawal initiation controls under CK-Labs control where German/EU law requires them; and
- customer-support interfaces that communicate accessibility information for a covered service.

A public chat feed, company room, map, production screen or ordinary gameplay surface does not become an electronic-commerce service merely because it exists inside the same app. However, accessibility obligations can reach functionality that forms part of the covered service journey. Classify by actual function.

## 4. Platform/payment-provider boundary

Apple, Google Play and Xsolla can control parts of the purchase interface and payment processing, but CK-Labs must not use that fact to ignore the parts of the consumer journey that CK-Labs itself designs or controls.

Evidence should distinguish:

- **Apple-controlled** App Store/StoreKit screens and Apple transaction state;
- **Google-controlled** Play Billing / Google information screens and Google transaction state;
- **Xsolla-controlled** payment/checkout components and Xsolla transaction state; and
- **CK-Labs-controlled** TycoonX offer pages, buttons, price descriptions, account binding, entitlement delivery, support, withdrawal/refund routing and web content.

If a provider component creates an accessibility failure, record whether CK-Labs can configure, replace, upgrade or report it. Do not falsely state that CK-Labs can remediate provider-owned UI that it cannot control. Conversely, provider ownership does not excuse an inaccessible CK-Labs-controlled button that is necessary to reach the provider checkout.

## 5. If the microenterprise service exemption applies

If the dated assessment shows that CK-Labs qualifies under § 2 no. 17 and § 3(3) applies to the relevant service:

- preserve the evidence supporting that conclusion;
- do not manufacture a fake BFSG conformity statement;
- do not imply that the exemption removes unrelated duties under consumer, anti-discrimination, platform, contract, privacy or other applicable law;
- keep critical purchase/refund/account-recovery flows reasonably accessible as a product-quality and risk-reduction measure where feasible;
- re-check classification when the operator or economic facts materially change; and
- if the exemption stops applying, run the non-exempt workflow below before continuing to rely on old exemption wording.

The exemption is founder-protective when it genuinely applies. It should be documented precisely rather than used casually.

## 6. If CK-Labs is not exempt: covered-service accessibility baseline

Where the TycoonX service is covered and CK-Labs cannot rely on § 3(3), BFSG § 14 currently requires the service to satisfy the applicable BFSGV accessibility requirements and requires the Annex 3 service information to be created and made publicly accessible in an accessible form.

BFSGV § 12 requires covered service information and websites/mobile services to be provided consistently and appropriately so they are **perceivable, operable, understandable and robust**. It also addresses alternative formats, non-text content, contrast/readability and accessible support information.

For TycoonX release evidence, test at minimum:

- keyboard/switch navigation for relevant web checkout controls;
- screen-reader names/roles/states for purchase, confirmation, refund and account controls;
- focus order and visible focus;
- text scaling and zoom without loss of essential purchase information;
- sufficient contrast for material price/offer/error information;
- non-color-only communication of payment state, errors and required fields;
- form labels, validation and error recovery;
- accessible authentication/account-recovery steps;
- accessible price, tax and currency presentation;
- countdown/promotion information that is not conveyed only visually;
- support contact paths and accessibility information; and
- usable confirmation/receipt status after the transaction.

The legal test is not `an automated scanner reports 100%`. Automated tools are useful evidence, but manual assistive-technology and user-flow testing is still required for critical purchase functions.

## 7. Special electronic-commerce requirements under BFSGV § 19

For covered electronic-commerce services, BFSGV § 19 currently adds requirements including:

1. providing available accessibility information about products/services offered for sale where the responsible economic operator has supplied it;
2. making identification, authentication, security and payment functions perceivable, operable, understandable and robust when provided as part of the service; and
3. making provided identification/authentication methods, electronic signatures and payment services perceivable, operable, understandable and robust.

For TycoonX this makes the following release failures especially serious where the non-exempt rules apply:

- `Buy` or `Confirm` control has no accessible name;
- a login challenge cannot be completed with assistive technology;
- payment errors are shown only by color;
- a security challenge traps keyboard focus;
- material total price/tax/currency is inaccessible to a screen reader;
- a required withdrawal/refund form cannot be navigated or submitted accessibly; or
- a player cannot reach support/accessibility information without using an inaccessible control.

## 8. Annex 3 public accessibility information

If the covered-service duties apply, BFSG § 14 and Annex 3 require information explaining how the service meets applicable accessibility requirements. The information can appear in general terms/conditions or another clearly perceptible place, but it must itself be accessible.

The production information should include, as applicable:

- a general description of the service in an accessible format;
- descriptions/explanations needed to understand how the service is performed;
- a description of how the service meets the relevant accessibility requirements; and
- the competent market-surveillance authority.

Release rules:

- Do not publish a generic template saying `fully accessible` unless CK-Labs can substantiate it for the covered production service.
- Do not copy the authority from an old template without checking the authority actually competent at publication time.
- If the microenterprise service exemption applies, do not publish Annex 3 wording as though § 14 necessarily applies solely to look more compliant.
- If public accessibility information is created because the duty applies, ensure it is reachable from the relevant German purchase/legal surface and remains accessible itself.

## 9. Current German market-surveillance route

As of September 5, 2026, the **Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen (MLBF)** is the nationwide market-surveillance body described by the Federal Accessibility Centre for BFSG enforcement. Its public website has been live since June 2026 and allows consumers to report accessibility barriers.

Do not permanently hard-code one mailing address or complaint URL into backend logic. Verify current authority/contact details before publication or formal correspondence.

If CK-Labs receives an authority request:

- preserve the request and deadline;
- identify the exact TycoonX service/surface under review;
- provide accurate classification/evidence;
- do not delete or rewrite logs to make a test look successful;
- isolate accessibility remediation from payment/fraud enforcement; and
- retain proof of correction/re-test where remediation is required.

## 10. Corrective action and enforcement

BFSG §§ 28-30 allow market surveillance of services, including sampling of websites/mobile applications and corrective orders. If non-conformity is not corrected within the authority's deadline, the authority can escalate and can ultimately order that the non-compliant service offering/provision stop until conformity is restored.

BFSG § 37 currently permits administrative fines of up to **EUR 100,000** for specified violations including offering/providing a service contrary to § 14(1) in conjunction with the applicable accessibility regulation. Other specified information/cooperation violations can carry lower statutory maxima.

Founder-protective rule: do not panic-disable the entire TycoonX game because one checkout label is broken if the authority/law does not require that response. Scope the issue, remediate the affected service path, preserve consumer access and paid entitlements where lawful, and follow any actual authority order precisely.

## 11. Fundamental alteration / disproportionate burden is not a shortcut

BFSG §§ 16-17 contain limited mechanisms concerning fundamental alteration and disproportionate burden. They are not a generic `too expensive` button.

Where CK-Labs is non-exempt and intends to rely on one of these provisions:

- perform the statutory assessment before relying on it;
- document the assessment where the law requires;
- preserve the required period/reassessment cadence;
- reassess when the service changes or the authority requires it;
- account for any external/public/private funding received specifically to improve accessibility where relevant; and
- make any required authority notification.

Do not use this route to justify an inaccessible purchase button that is inexpensive and straightforward to fix.

## 12. Price, promotion and regional-pricing information must remain accessible

Accessibility does not change the existing TycoonX price rules. It changes whether the player can perceive and operate the offer correctly.

For relevant purchase flows, ensure a user relying on assistive technology can determine before confirmation:

- the product: Diamonds, one-time 30-Day VIP or limited-window Lifetime VIP;
- quantity/content of the offer;
- total consumer price and currency;
- mandatory taxes/fees where they must be displayed;
- material promotion conditions and genuine end time where applicable;
- whether the purchase is one-time/non-renewing;
- channel/merchant information required by the flow; and
- the action that actually submits/confirms the purchase.

Do not hide a higher total price from a screen reader while visually showing it, and do not expose only a crossed-out price without an accessible current price.

## 13. Product invariants: accessibility failures never become entitlement authority

An accessibility bug, BFSG complaint, authority inquiry, failed screen-reader path or provider accessibility incident is **not itself** a payment reversal, refund, chargeback, fraud finding, hack/exploit finding or entitlement-abuse finding.

### Purchased Diamonds

- Purchased Diamonds do not expire solely because time passes.
- An accessibility incident must not automatically delete, duplicate or regrant purchased Diamonds.
- If a player was charged but an inaccessible post-checkout flow prevented normal fulfillment, reconcile the authoritative Apple/Google/Xsolla transaction and deliver/correct the entitlement once.
- A refund/withdrawal remains transaction-specific and follows mandatory law plus the authoritative payment/refund state.

### One-time 30-Day VIP

- 30-Day VIP remains a **one-time, non-renewing 30-day entitlement**.
- Fixing an accessibility problem, reinstalling the app or changing checkout UI does not restart the original 30-day clock.
- If a CK-Labs-controlled non-conformity materially prevents use and mandatory digital-service remedies apply, assess cure, extension/price reduction, termination/refund or other mandatory remedy separately rather than silently changing the product definition.

### Lifetime VIP

- Lifetime VIP remains a **one-time promotional entitlement offered only during selected genuine sales windows**.
- It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase.
- Accessibility remediation cannot reopen a closed Lifetime VIP sales window, create a duplicate Lifetime entitlement, add an expiry to an existing valid Lifetime entitlement or require a legitimate owner to buy it again.
- Different genuine future Lifetime VIP sales windows may have different prices under the existing TycoonX pricing rules.

## 14. Refunds, withdrawal and mandatory consumer rights remain intact

Nothing in this gate removes mandatory German/EU consumer rights.

If an accessibility failure means a paid digital service is not supplied/conforming as required by mandatory law, CK-Labs must still assess the consumer's applicable cure, conformity, update, price-reduction, termination, refund, withdrawal, damages or other non-waivable rights.

Do not use any of these statements as a blanket denial:

- `accessibility is only best effort`;
- `Apple/Google/Xsolla is responsible, so CK-Labs has no duty`;
- `the game is provided as-is, so no remedy exists`; or
- `the player accepted the Terms, so accessibility law is waived`.

Likewise, a player reporting an accessibility barrier is not evidence of abuse and must not be auto-suspended for making the complaint.

## 15. Provider outage, business transfer and permanent shutdown

Accessibility obligations and entitlement continuity must survive operational changes.

For provider replacement/outage:

- preserve a reachable fallback support path where reasonable;
- do not remove accessibility information simply because a checkout provider is temporarily unavailable;
- re-test CK-Labs-controlled purchase/account/refund paths after provider migration; and
- preserve authoritative transaction/entitlement mappings.

For a business sale, merger, reorganization or successor operator:

- transfer the current BFSG classification/evidence and unresolved accessibility cases to the lawful successor where appropriate;
- reassess microenterprise status because the operator/economic facts can change; and
- do not treat the corporate transaction as authority to reset purchased Diamonds or VIP.

For a lawful permanent service shutdown:

- accessibility law does not convert Lifetime VIP into an obligation to operate TycoonX forever;
- follow mandatory notice, conformity/remedy and consumer-law consequences applicable to the shutdown;
- keep required shutdown/refund/support communications reasonably accessible; and
- do not claim that the BFSG allows CK-Labs to waive mandatory remedies.

## 16. Old / unsupported versions and security emergencies

CK-Labs may require reasonable app updates for security, platform or legal compliance where permitted by the Terms and mandatory law.

If an old version contains an inaccessible purchase flow:

- disable the affected checkout only where necessary and lawful;
- direct the player to a supported accessible route where available;
- do not invalidate already completed purchases merely because the old client can no longer buy new items; and
- preserve mandatory digital-product update/conformity rights.

A genuine security emergency can justify temporary protective measures, but `security` must not be used as a pretext to leave an inaccessible flow indefinitely if a workable accessible alternative exists.

## 17. Accessibility evidence packet

For each non-exempt production purchase channel/surface, preserve a dated packet containing at least:

- BFSG scope classification;
- microenterprise classification or reason it does not apply;
- production URL/app build/storefront tested;
- responsible operator;
- platform/payment-provider split;
- accessibility test date and method;
- assistive technologies / input methods used;
- critical findings and severity;
- remediation owner and target;
- re-test result;
- location/version of Annex 3 information where required;
- competent-authority verification date;
- material provider limitations; and
- evidence that completed purchases/entitlements are not modified merely by accessibility test state.

Do not store player passwords, payment credentials, health/disability details, private signing keys or unnecessary personal data in this packet.

## 18. Regression scenarios

The release process should fail if any applicable scenario below cannot be answered correctly.

1. **Microenterprise evidence complete** -> CK-Labs qualifies under both the headcount and one financial limb -> document the service exemption; do not publish a fake conformity certificate.
2. **Headcount only** -> fewer than 10 persons but financial threshold is unknown -> classification remains unresolved; do not assume exemption.
3. **Growth beyond exemption** -> CK-Labs no longer qualifies -> run non-exempt covered-service compliance and Annex 3 workflow before relying on old exemption wording.
4. **Product vs service** -> a separate covered product is introduced -> do not apply the service exemption automatically to the product.
5. **Xsolla webshop checkout** -> `Pay` button lacks an accessible name -> fail release for the affected non-exempt covered route until corrected.
6. **Apple provider UI issue** -> issue is wholly inside Apple-controlled UI -> document/escalate provider ownership; do not falsely claim CK-Labs can patch Apple's binary UI.
7. **CK-Labs button issue before StoreKit** -> inaccessible TycoonX-controlled purchase button -> provider ownership does not excuse it.
8. **Google Play purchase error by color only** -> add accessible status/error communication.
9. **Authentication trap** -> keyboard/screen-reader user cannot complete required login/security step -> fail covered flow.
10. **Price mismatch by accessibility tree** -> visual total is EUR 5.99 but screen reader announces stale EUR 7.99 -> fail checkout until one authoritative current total is exposed.
11. **Lifetime VIP countdown** -> visual timer is genuine but inaccessible -> provide equivalent accessible timing/condition information without changing the genuine sales window.
12. **Annex 3 template copied blindly** -> authority/contact or compliance claim is unverified -> fail publication.
13. **Authority complaint arrives** -> preserve evidence/deadline and remediate; do not auto-ban the reporting player.
14. **Automated scanner says 100%** -> manual critical-flow testing still required where duties apply.
15. **Purchased Diamonds after accessibility failure** -> payment verified -> grant/reconcile once; do not duplicate or expire balance.
16. **30-Day VIP restoration** -> accessibility fix/reinstall -> preserve original entitlement clock.
17. **Lifetime VIP restoration** -> preserve one valid Lifetime entitlement and do not reopen a closed sales window.
18. **Provider migration** -> re-test the covered flow and preserve entitlements/payment provenance.
19. **Business transfer** -> successor classification changes -> reassess BFSG status instead of inheriting the old exemption automatically.
20. **Permanent shutdown** -> accessible notice/support where required and mandatory remedies assessed; Lifetime VIP still does not mean perpetual operation.

## 19. Current authoritative reference set

Review these sources again whenever the classification or production flow materially changes:

- BFSG consolidated law: https://www.gesetze-im-internet.de/bfsg/
- BFSG § 2 definitions: https://www.gesetze-im-internet.de/bfsg/__2.html
- BFSG § 3 / microenterprise service exemption: https://www.gesetze-im-internet.de/bfsg/__3.html
- BFSG § 14 service-provider duties: https://www.gesetze-im-internet.de/bfsg/__14.html
- BFSG Annex 3 service information: https://www.gesetze-im-internet.de/bfsg/anlage_3.html
- BFSG § 17 disproportionate burden: https://www.gesetze-im-internet.de/bfsg/__17.html
- BFSG § 28 service market surveillance: https://www.gesetze-im-internet.de/bfsg/__28.html
- BFSG § 29 corrective measures: https://www.gesetze-im-internet.de/bfsg/__29.html
- BFSG § 37 administrative fines: https://www.gesetze-im-internet.de/bfsg/__37.html
- BFSGV consolidated regulation: https://www.gesetze-im-internet.de/bfsgv/
- BFSGV § 12 general service requirements: https://www.gesetze-im-internet.de/bfsgv/__12.html
- BFSGV § 19 electronic-commerce requirements: https://www.gesetze-im-internet.de/bfsgv/__19.html
- Federal Accessibility Centre BFSG overview: https://www.bundesfachstelle-barrierefreiheit.de/DE/Barrierefreiheitsstaerkungsgesetz/barrierefreiheitsstaerkungsgesetz
- Federal Accessibility Centre e-commerce FAQ: https://www.bundesfachstelle-barrierefreiheit.de/DE/Barrierefreiheitsstaerkungsgesetz/FAQ-elektronischer-Geschaeftsverkehr/faq-elektronischer-Geschaeftsverkehr_node

## 20. Release checklist

Before marking German BFSG accessibility readiness complete:

- [ ] CK-Labs's current microenterprise status is evidenced, not guessed.
- [ ] Each relevant TycoonX consumer-contract flow is classified separately.
- [ ] Apple, Google Play, Xsolla and CK-Labs UI ownership boundaries are documented.
- [ ] If § 3(3) applies, the exemption evidence and reassessment trigger are preserved.
- [ ] If the exemption does not apply, applicable BFSG/BFSGV requirements are tested on the production service.
- [ ] Critical identification/authentication/security/payment controls are perceivable, operable, understandable and robust where required.
- [ ] Required Annex 3 public information is accurate, accessible and points to the currently competent authority.
- [ ] Automated checks are supplemented with manual critical-flow testing.
- [ ] Promotions, countdowns, prices, currencies and tax information remain accessible.
- [ ] Accessibility complaints cannot automatically trigger fraud/abuse enforcement.
- [ ] Purchased Diamonds, 30-Day VIP and Lifetime VIP remain governed by authoritative payment/entitlement state, not accessibility test state.
- [ ] Mandatory consumer remedies remain intact.
- [ ] Provider migration/business-transfer/shutdown plans preserve accessible communications and entitlement evidence.
- [ ] Brand scan shows only `TycoonX` in player-facing/legal prose.
- [ ] No stale live-service beta wording exists.

Until the applicable classification and evidence are complete, record German BFSG accessibility readiness as operationally unresolved rather than inventing either a pass or a violation.