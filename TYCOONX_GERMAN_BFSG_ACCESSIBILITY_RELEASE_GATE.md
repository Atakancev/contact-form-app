# TycoonX German BFSG / European Accessibility Act Release Gate

Last reviewed: 2026-09-03  
Operator/business name used in player-facing documents: **CK-Labs**

This is an operational compliance and release gate for TycoonX under Germany's Barrierefreiheitsstärkungsgesetz (**BFSG**), its implementing regulation (**BFSGV**), and Directive (EU) 2019/882, commonly called the European Accessibility Act. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, platform terms, or case-specific legal advice.

TycoonX went to full release on **September 1, 2026**. The live service, purchases, Diamonds, one-time 30-Day VIP, Lifetime VIP, rewards, and users must not be described as beta.

## 1. Why this gate exists

The BFSG has applied in Germany since **June 28, 2025** to the products and consumer services within its scope. One listed service is **electronic commerce**. Under BFSG § 2 no. 26, electronic-commerce services are digital services offered through websites or mobile applications, provided electronically and at the individual request of a consumer with a view to concluding a consumer contract.

For TycoonX, this means accessibility cannot be treated only as a general game-UX question. The following must be classified separately:

- the CK-Labs TycoonX legal/support website;
- any CK-Labs or Xsolla-hosted TycoonX webshop;
- web pages or mobile-app screens through which a German consumer selects, configures, confirms or pays for Diamonds, 30-Day VIP, Lifetime VIP or another paid product;
- login, account binding, authentication and security steps that form part of the purchase path;
- payment, coupon, regional-price, tax/VAT and confirmation screens;
- purchase-history, entitlement-restoration, refund/withdrawal and cancellation routes where they are part of an in-scope service;
- any future browser-based TycoonX store or direct digital-content/service sale; and
- platform-owned Apple App Store or Google Play purchase UI, which must be separated from CK-Labs-controlled pre-purchase and post-purchase UI rather than treated as one undifferentiated checkout.

Do not assume that the whole TycoonX game is automatically an in-scope BFSG service merely because it is digital. Do not assume the opposite either. Classify each consumer-facing service and commerce path against the statutory definitions.

## 2. P0 scope decision: classify CK-Labs before claiming either compliance or exemption

### 2.1 Microenterprise service-provider exemption

Current BFSG § 3(3) states that the BFSG accessibility requirements do not apply to **microenterprises that offer or provide services**. BFSG § 2 no. 17 defines a microenterprise as an undertaking that:

- employs **fewer than 10 persons**; and
- either has annual turnover of **no more than EUR 2 million** or an annual balance-sheet total of **no more than EUR 2 million**.

For every live-release or material commercial change, keep a dated internal classification stating whether CK-Labs currently satisfies this definition for the relevant service.

Do **not**:

- assume the exemption forever because CK-Labs qualified once;
- publish private turnover, balance-sheet or staffing data merely to prove the exemption;
- tell users that TycoonX is "BFSG compliant" if the actual basis is only that a service-provider exemption currently applies;
- treat a business sale, merger, successor operator, linked-company restructuring or material growth as irrelevant to the classification; or
- confuse the BFSG microenterprise test with unrelated DSA, JMStV, tax or platform thresholds.

If the factual basis changes, re-run the scope determination before the next affected German commerce release.

### 2.2 The exemption is service-specific, not a universal accessibility waiver

The microenterprise exemption in § 3(3) concerns services. It does not create a general right to ignore:

- independent accessibility duties that may arise under another law;
- platform accessibility requirements;
- contractual accessibility promises CK-Labs has voluntarily made;
- anti-discrimination duties that may apply independently;
- mandatory consumer information, withdrawal, conformity, update or remedy rights; or
- BFSG product obligations if CK-Labs ever places an in-scope physical product on the market.

If CK-Labs is exempt, voluntary accessibility improvements remain encouraged but should not be marketed with unsupported legal-compliance claims.

## 3. P0 if BFSG applies: the e-commerce service must be accessible as a service, not only at the final payment button

The Federal Accessibility Centre's current BFSG e-commerce guidance states that the statutory service requirements and the BFSG monitoring method point to the **whole website or app of an online shop** being relevant, not merely the narrow screens immediately before contract conclusion.

For an in-scope TycoonX commerce service, test at least:

- landing and product-selection pages;
- navigation and search where present;
- account creation and login;
- country, language and regional-price selection;
- product details for Diamonds, 30-Day VIP and Lifetime VIP;
- promotion/coupon entry and error handling;
- tax/VAT and currency presentation;
- checkout and payment initiation;
- authentication and security challenges;
- purchase confirmation and receipts;
- entitlement restoration/reconciliation information;
- refund and withdrawal information/routes;
- German § 312j order-button flow where applicable;
- German § 312k cancellation-button flow where applicable; and
- help/contact routes used to resolve purchase-accessibility failures.

A visually accessible marketing page does not cure an inaccessible login, checkout, payment, cancellation or refund path.

## 4. BFSGV § 19: payment, identification, authentication and security are explicit high-risk areas

Current BFSGV § 19 requires, for electronic-commerce services, that identification, authentication, security and payment functions provided as part of the service be designed so they are **perceivable, operable, understandable and robust**.

For TycoonX this means, where CK-Labs controls the relevant layer:

- every form field has a programmatic label and understandable purpose;
- errors are identified in text and can be corrected without guessing;
- a user is not required to rely only on color, sound, animation or precise pointer movement;
- keyboard and assistive-technology users can reach and activate all required controls;
- focus order and visible focus are usable through product selection and payment;
- important price, quantity, duration and tax information is exposed to assistive technology;
- authentication challenges have an accessible path or a lawful accessible alternative;
- time limits do not make a purchase path unusable where an extension or alternative can reasonably be provided;
- CAPTCHA or anti-bot controls, if used, have an accessible alternative compatible with the actual risk;
- security controls are not weakened merely to make them accessible; and
- accessibility accommodations do not silently bypass fraud prevention, parental controls, sanctions restrictions, regional eligibility or payment authorization.

Accessibility and security are both requirements. Do not solve one by disabling the other.

## 5. Practical technical benchmark: EN 301 549 and WCAG, without overstating their legal status

The Federal Accessibility Centre currently identifies **EN 301 549** and the **Web Content Accessibility Guidelines (WCAG)** as major practical benchmarks for implementing digital accessibility under the BFSG. It also notes that the harmonised European standards specifically requested for the European Accessibility Act under standardisation request M/587 are still being developed/published.

Therefore:

- use the current EN 301 549 and WCAG requirements as practical engineering and QA references;
- do not claim that passing one automated WCAG scanner proves full BFSG compliance;
- do not claim a specific standard creates a presumption of conformity under the BFSG unless its current legal harmonisation/reference status for the BFSG has actually been checked;
- include manual keyboard and screen-reader checks for critical commerce journeys;
- test zoom/reflow, text spacing, contrast, focus, labels, errors and status messages;
- test the real mobile layout, not only desktop HTML; and
- recheck the standards position when the EU publishes the relevant M/587 harmonised standards.

Automated accessibility testing is evidence, not a complete legal conclusion.

## 6. BFSG § 14 and Annex 3: required accessibility information if the service is in scope

If the relevant TycoonX service is subject to the BFSG, current § 14 requires the service provider to create the Annex 3 information and make it publicly accessible in an accessible form while the service is offered/provided.

The information should cover, as applicable:

- a general description of the service in an accessible format;
- descriptions and explanations needed to understand how the service works;
- how the service meets the applicable BFSGV accessibility requirements; and
- the competent market-surveillance authority.

For Germany, the current nationwide market-surveillance body is the **Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen (MLBF AöR)**.

Do not confuse the BFSG **"Information zur Barrierefreiheit"** with the public-sector **"Erklärung zur Barrierefreiheit"** regime. Use the correct legal concept for a private CK-Labs service.

Do not publish boilerplate claiming perfect accessibility if testing shows known barriers. Describe the actual service and actual conformity basis accurately.

## 7. Third-party checkout and Xsolla: responsibility must be mapped, not guessed

The TycoonX webshop may rely on Xsolla or another provider for parts of product catalog, authentication, fraud screening, payment, tax/VAT calculation, checkout or receipt delivery.

For each German web purchase path, record:

- the URL and domain of each step;
- which legal entity provides that step;
- which entity is the contracting merchant for the transaction;
- which UI is controlled/configured by CK-Labs;
- which UI is controlled by Xsolla or another provider;
- which accessibility information each provider supplies;
- how accessibility complaints are routed; and
- how a user can complete the purchase if a provider-controlled step fails accessibility requirements.

Do not rely on a generic statement such as "Xsolla is Merchant of Record" to prove that the full TycoonX commerce journey is accessible or that CK-Labs has no BFSG duties.

Likewise, BFSG § 1(4)'s exclusion for certain third-party content should not be stretched into a blanket exclusion for every third-party payment or authentication function. The actual statutory conditions and control relationship must be assessed.

A provider migration, provider rule change or replacement of payment/authentication infrastructure is a mandatory accessibility re-test trigger.

## 8. Apple App Store and Google Play purchases: separate provider-owned UI from TycoonX-controlled UI

Native Apple App Store and Google Play billing screens are controlled by those platforms. CK-Labs should not pretend it can alter platform-owned payment UI.

However, TycoonX still controls surrounding screens such as:

- the in-game offer or shop entry point;
- product description and quantity presentation;
- price context supplied by the app;
- account-selection/binding logic;
- success/pending/failure messaging;
- entitlement delivery and restoration status;
- support links; and
- any external-webshop steering flow that leaves the app.

For each platform, accessibility evidence should distinguish platform-controlled steps from CK-Labs-controlled steps. An accessible App Store or Google Play confirmation sheet does not cure an inaccessible TycoonX offer screen, and an accessible TycoonX screen does not establish compliance for a separate external Xsolla web checkout.

## 9. Product-specific commercial safeguards

### 9.1 Diamonds

An accessible Diamond purchase path must expose, in a way assistive technology can understand:

- the real-money price and currency shown for the transaction;
- the Diamond quantity being purchased;
- any genuine bonus quantity;
- applicable tax/fee presentation where required;
- the final confirmation state; and
- any pending, failed, refunded or reversed status shown to the player.

Accessibility remediation must not silently change bundle economics or grant duplicate Diamonds.

### 9.2 One-time 30-Day VIP

The purchase path must keep the product clearly distinguishable as a **one-time, non-renewing 30-day entitlement**. Accessibility changes must not accidentally redesign it as a subscription, recurring product, auto-renewing product or indefinite service.

The user must be able to perceive and understand when the paid period begins and what entitlement is being bought.

### 9.3 Lifetime VIP

Lifetime VIP remains a **limited-time promotional offering available only during selected genuine sales windows**. It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability.

Accessibility changes must not:

- extend or restart a genuine sales countdown unintentionally;
- create artificial scarcity;
- hide the fact that the offer is a one-time entitlement rather than a recurring subscription;
- change the price after confirmation;
- add an expiry to an already valid Lifetime VIP; or
- create a claim that the product will always be offered again.

Different genuine Lifetime VIP sales windows may use different future prices, subject to the existing TycoonX pricing and consumer-law rules.

## 10. Promotions, regional pricing, currency, taxes and pricing errors

Accessibility does not change the TycoonX pricing rules.

CK-Labs may change future prices, Diamond bundle content, VIP prices, regional prices, currencies and future promotions for future purchases, subject to mandatory law and platform/provider rules.

The accessible purchase path must preserve these invariants:

- prices may differ by platform, country and channel;
- provider tax/VAT and FX handling can change the local displayed total;
- the final total shown before confirmation governs the completed transaction, subject to mandatory law and obvious legally correctable errors;
- completed purchases are not retroactively repriced merely because a later price changes;
- a later price decrease does not automatically create a refund, credit or price-match right;
- a later increase does not create an extra charge on an already completed one-time purchase;
- promotions, countdowns and crossed-out prices must remain genuine and non-misleading;
- an accessibility accommodation must not become a secret higher-priced sales channel; and
- a player must not be forced to accept a worse bundle solely because the standard purchase route is inaccessible.

If a catalog/configuration error is corrected, preserve the actual transaction record and mandatory consumer rights rather than rewriting history.

## 11. Accessibility complaint or accommodation must not mutate unrelated entitlement/payment state

An accessibility complaint is not proof of fraud, hacking, chargeback, entitlement abuse, account compromise or payment reversal.

Do not automatically:

- remove unrelated legitimately purchased Diamonds;
- create a negative Diamond balance;
- restart, shorten or duplicate a valid 30-Day VIP period;
- add an expiry to valid Lifetime VIP;
- manufacture a refund or chargeback event;
- ban or suspend a user merely because they reported an accessibility barrier; or
- bypass authoritative Apple, Google Play, Xsolla or server payment records.

If a reasonable manual accommodation is used to complete a transaction, log the transaction through the same authoritative entitlement ledger and idempotency controls used for normal purchases.

A genuine accessibility defect can require remediation, but it does not automatically determine the separate refund, withdrawal, price-reduction, damages or contract-validity result. Apply the remedy required by the governing law and transaction facts.

## 12. BFSG § 14 nonconformity and authority handling

If an in-scope service does not meet the applicable requirements, current BFSG § 14 requires corrective action and can require notification to the relevant market-surveillance authority/authorities.

Keep an operational workflow to:

1. authenticate an authority communication;
2. preserve the original message and receipt timestamp;
3. identify the affected service/version/path;
4. reproduce the barrier where possible;
5. assess immediate mitigation and durable correction;
6. preserve evidence of the correction;
7. respond only with information actually required; and
8. avoid disclosing player personal data that is not necessary to the request.

Current German market surveillance is performed nationwide by **MLBF AöR**. BFSG enforcement can require corrective measures and, if noncompliance continues, can lead to restrictions on offering/providing the service. Consumers and qualified bodies also have statutory procedural/remedy routes, including the BFSG consumer procedure and conciliation framework.

Do not ignore an MLBF message because TycoonX is a game rather than a conventional retail website.

## 13. Fundamental alteration and disproportionate burden are not casual escape clauses

BFSG §§ 16-17 contain rules concerning fundamental alteration and disproportionate burden. They are not safe wording to place in Terms as a blanket waiver.

Before relying on one of these routes:

- identify the exact requirement and affected service;
- document why the statutory conditions are met;
- apply the least restrictive accessible solution that remains feasible;
- preserve the assessment and supporting evidence for the legally required period where applicable; and
- re-assess when the service, technology, costs, standards or business facts materially change.

Do not treat ordinary engineering inconvenience, a preferred visual design or a desire to preserve conversion rate as automatically disproportionate burden.

## 14. Accessibility, security emergencies, outages and unsupported app versions

An outage or security emergency can require temporary emergency controls, but accessibility should be restored alongside the underlying service.

For a security-critical forced update or blocked old client:

- make the update requirement perceivable and understandable;
- provide an accessible path to the supported version where reasonably possible;
- do not leave screen-reader/keyboard users trapped on an obsolete version with no explanation;
- preserve paid entitlement state through the upgrade; and
- do not claim that using an old app version automatically waives mandatory consumer rights.

If Apple, Google Play, Xsolla, authentication, hosting or another provider has an accessibility outage, record the provider incident separately from TycoonX entitlement state. Provider downtime must not create duplicate entitlements, fraudulent chargebacks or lost valid VIP state.

## 15. Data minimization and accessibility testing

Accessibility QA can involve assistive-technology users and may incidentally reveal disability information. Do not build a disability-profile database simply to prove BFSG readiness.

Testing and support records should use the minimum personal data needed. Avoid storing:

- a user's medical diagnosis;
- disability documentation;
- unnecessary screen recordings containing private messages or payment data;
- full identity documents where not otherwise lawfully required; or
- inferred disability categories for marketing or pricing.

Never offer a different Diamond/VIP price because a user disclosed a disability or requested an accessibility accommodation.

## 16. Change triggers

Re-run this gate before or immediately after any of the following:

- CK-Labs no longer clearly satisfies the BFSG microenterprise service-provider definition;
- ownership, merger, restructuring or successor-operator change;
- launch or replacement of the TycoonX webshop;
- Xsolla project/checkout redesign;
- new payment provider or authentication provider;
- addition of a browser-based purchase flow;
- material redesign of the in-app shop;
- new Diamond, 30-Day VIP or Lifetime VIP purchase flow;
- new coupon, promotion, regional-pricing or currency-selection flow;
- new German cancellation/withdrawal/refund interface;
- material EN 301 549/WCAG implementation change;
- publication of new EAA/BFSG harmonised standards or official MLBF guidance; or
- confirmed accessibility complaint that affects contract conclusion or payment.

## 17. Required evidence packet

For every German commerce service that is in scope, or whenever the microenterprise classification changes, preserve a dated evidence packet containing at least:

- BFSG service-scope determination;
- current microenterprise classification and legal basis, stored privately;
- map of CK-Labs, Apple, Google Play, Xsolla and other provider-controlled screens;
- critical user journeys tested;
- keyboard test results;
- screen-reader test results for critical journeys;
- zoom/reflow and text-spacing results;
- form label/error/status-message results;
- payment/authentication accessibility results;
- mobile and desktop evidence where both are offered;
- the current "Information zur Barrierefreiheit" if § 14 requires it;
- known limitations and remediation owner/date;
- authority/contact routing; and
- version/build/deployment date.

A single Lighthouse, axe or other automated score is not a complete release-evidence packet.

## 18. Localization invariant

This operational gate does **not** by itself materially change the canonical TycoonX Terms, Purchases & Refunds Policy, Privacy Policy or Community Standards. Therefore the completed localization queue remains closed unless player-facing canonical legal meaning changes.

If a future canonical legal document is amended materially because of BFSG/accessibility requirements, reopen only the affected document type and resynchronize all 25 locales in this exact order:

**tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.**

Do not silently omit accessibility-related consumer rights or operational responsibilities from a localized legal document merely because the concept is difficult to translate.

## 19. Release decision

**PASS** only when one of these two paths is supported by evidence:

### Path A: documented BFSG service-provider exemption

- CK-Labs currently qualifies as a BFSG microenterprise for the relevant service;
- the classification is dated and supportable;
- no unrelated legal/platform duty is incorrectly treated as waived; and
- player-facing accessibility/compliance claims remain accurate.

### Path B: in-scope service is implemented and evidenced

- the relevant TycoonX commerce service is classified;
- the applicable BFSG/BFSGV requirements are implemented;
- payment/authentication/security paths are tested;
- required Annex 3 / § 14 accessibility information is available;
- third-party responsibility is mapped;
- known material barriers have an approved remediation path; and
- MLBF/complaint routing exists.

**FAIL** if CK-Labs cannot say which path applies, if an in-scope German TycoonX commerce path is materially inaccessible without a lawful basis/mitigation, or if the service makes unsupported claims of BFSG compliance.

## 20. Current official-source checkpoint

Keep current copies/links for at least:

- BFSG §§ 1-3, 14, 16-17, 28-34 and Annexes 1, 3 and 4: `https://www.gesetze-im-internet.de/bfsg/`
- BFSGV §§ 12, 19-21: `https://www.gesetze-im-internet.de/bfsgv/`
- Federal Accessibility Centre BFSG overview and e-commerce FAQ: `https://www.bundesfachstelle-barrierefreiheit.de/DE/Barrierefreiheitsstaerkungsgesetz/`
- Federal Accessibility Centre standards guidance for EN 301 549 / WCAG and M/587 status; and
- MLBF current company information and authority details: `https://www.mlbf-barrierefrei.de/`

Recheck these sources before relying on the gate after a material legal or standards update.
