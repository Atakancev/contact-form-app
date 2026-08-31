# TycoonX EU Personalized Pricing & Automated Offers Release Gate

Last reviewed: 2026-09-01
Owner: CK-Labs
Scope: TycoonX Diamond bundles, one-time 30-Day VIP, limited-window Lifetime VIP, discounts, coupons, targeted offers, webshop pricing, Apple/Google storefront pricing decisions, Xsolla checkout parameters, experiment cohorts, automated offer selection, and any use of account/profile/behavior data to vary a consumer-facing price.

## Purpose

TycoonX may use genuine regional pricing, channel-specific pricing, different currencies, tax-inclusive prices, future promotions, and different Lifetime VIP prices in different genuine sales windows. Those practices are not automatically personalized pricing.

A separate compliance problem arises if a price or discount shown to a particular consumer, or to a profiled category of consumers, is personalized on the basis of automated decision-making. EU and German consumer law require specific pre-contract information in that situation. GDPR duties can also apply where personal data, profiling, or solely automated significant decisions are involved.

This gate exists because the regional-pricing checklist already distinguishes ordinary country/storefront pricing from individualized automated pricing. It is an implementation and release gate, not a statement that TycoonX currently uses personalized pricing.

## P0 default

Until CK-Labs has deliberately implemented and documented this gate, **do not enable automated personalized pricing or personalized automated discounts for TycoonX paid products**.

A pricing engine, experiment, CRM rule, AI model, analytics segment, Xsolla parameter, remote-config rule, or support tool must not silently vary a user's real-money price based on that user's behavior, profile, purchase history, inferred willingness to pay, age, engagement, churn likelihood, spending history, prior refusals, account value, or similar user-specific signals.

Ordinary region-wide, storefront-wide, currency-wide, tax-driven, provider-tier, or generally available promotional pricing can remain in use where otherwise lawful.

## 1. EU Consumer Rights Directive disclosure

Directive 2011/83/EU Article 6(1)(ea) requires a trader, where applicable, to tell a consumer that **the price was personalized on the basis of automated decision-making** before the consumer is bound by the distance contract or offer.

For TycoonX this means:

- the disclosure must relate to the actual offer the consumer sees;
- it must be provided before purchase, not hidden only in the Privacy Policy, Terms, FAQ, or support article;
- it must be clear and comprehensible;
- it must not be phrased so vaguely that the consumer cannot tell that their own price/discount was personalized;
- a generic statement that “prices may vary” is not a substitute for the required personalized-price disclosure when Article 6(1)(ea) applies.

European Commission Consumer Rights Directive guidance explains that the rule is particularly relevant where automated decision-making and profiling of consumer behavior are used to personalize a price for a specific consumer or category of consumers. The same guidance says a Privacy Policy disclosure alone is insufficient for this pre-contract duty.

## 2. German implementation is a checkout-level requirement

For German consumer distance contracts, Article 246a § 1(1) sentence 1 no. 6 EGBGB requires, where applicable, notice that the price was personalized on the basis of automated decision-making.

BGB § 312d(1) makes Article 246a information part of the distance-contract information framework. BGB § 312j(2) requires the information in Article 246a § 1(1) sentence 1 nos. 1 and 5 to 7, including no. 6, to be shown **clearly, comprehensibly, and prominently immediately before the consumer submits a payment-obligating order**.

Operational rule for a CK-Labs-controlled German TycoonX checkout:

- if the price is personalized on the basis of automated decision-making, the final pre-order screen must visibly disclose that fact;
- do not rely on a link to the Privacy Policy or Terms as the only disclosure;
- the disclosure must remain visible with the actual final price, currency, mandatory taxes/fees, product, and payment obligation;
- preserve dated evidence of the exact checkout wording shown for the transaction.

If Apple, Google Play, Xsolla, or another provider is the contracting trader or controls the legally relevant checkout, determine which party controls the required consumer-facing disclosure and preserve evidence. CK-Labs must not assume that provider involvement automatically satisfies CK-Labs' own duties for a CK-Labs-controlled offer or interface.

## 3. Personalized pricing is not the same as dynamic or regional pricing

Do not collapse these categories:

### Usually not personalized merely because prices differ

- different Apple storefront prices by country;
- different Google Play storefront prices by country;
- different Xsolla prices by genuine country/region;
- VAT or sales-tax differences;
- currency conversion or FX changes;
- provider price-tier changes;
- a generally available sale offered to everyone in the same market;
- a genuine Lifetime VIP sale window with one published price for all eligible consumers in that market;
- a time-based price change applied to all eligible consumers at the same time.

### Requires personalized-pricing review before launch

- a Diamond bundle price selected from the player's spending history;
- a 30-Day VIP discount triggered because the player previously refused to buy VIP;
- a Lifetime VIP discount based on inferred willingness to pay;
- a churn model that selects a lower price only for users predicted to leave;
- a higher price for “whales” or users predicted to have greater purchasing power;
- an automated discount generated from account age, engagement, purchase frequency, play pattern, or similar profile signals;
- a coupon selected automatically for a specific user based on behavioral profiling;
- a pricing experiment where individual users are assigned materially different real-money prices by an automated system.

A/B testing or randomized price assignment is not automatically safe merely because the cohort assignment is random. If consumers are assigned individual real-money prices or discounts through an automated decision process, require legal review and the relevant disclosure rather than assuming the experiment falls outside the rule.

## 4. Do not use “discount” as a loophole

The legal concern is not limited to a higher personalized list price. A personalized automated **discount** can still be a personalized price.

The European Commission/CPC Tinder enforcement example is directly relevant: the CPC Network required clear information where automated means were used to identify consumers based on behavior and offer personalized discounts.

TycoonX rule:

- do not call an automated behavior-based discount “just a coupon” to avoid the personalized-price disclosure;
- if a personalized discount is used, disclose the personalization where required before purchase;
- keep promotional scarcity, countdown, crossed-out-price, and savings claims independently truthful under the promotion/dark-pattern gate;
- do not fabricate a “standard price” merely to make a personalized discount look larger.

## 5. Criteria transparency and truthful explanations

The Consumer Rights Directive specifically requires disclosure that the price was personalized on the basis of automated decision-making. Other consumer-protection and data-protection duties may require additional transparency depending on the implementation.

Founder-protective rule: maintain an internal, reproducible description of the criteria actually used so CK-Labs can explain and defend the system.

Do not claim a discount was based on “loyalty,” “activity,” “location,” or “limited availability” if the actual model used materially different signals such as purchase history, willingness-to-pay score, churn score, or age.

Where additional criterion disclosure is legally required, provide a clear explanation rather than reverse-engineering-level source code or trade secrets. Mandatory rights cannot be avoided by calling the pricing logic confidential.

## 6. GDPR is a separate layer

Consumer-law price disclosure does not itself create a GDPR legal basis.

If personal data is used to personalize TycoonX prices or offers:

- identify the GDPR legal basis for each relevant processing purpose;
- update the privacy information where the current Privacy Policy no longer accurately describes the processing;
- apply purpose limitation and data minimization;
- do not reuse data collected for security, fraud prevention, account recovery, or legal compliance for behavioral pricing without a separate lawful basis and compatibility analysis where required;
- assess transparency duties for profiling and automated decision-making;
- assess objection rights where legitimate interests or direct-marketing profiling are involved;
- assess whether a DPIA is required if the processing is likely to create high risk.

If a material public Privacy Policy change becomes necessary, update the canonical English Privacy Policy first and then reopen and synchronize all 25 localized Privacy pages in the required locale order.

## 7. GDPR Article 22 must be assessed, not assumed

GDPR Article 22 concerns decisions based solely on automated processing, including profiling, that produce legal effects or similarly significantly affect a person.

Not every personalized TycoonX discount automatically reaches that threshold. Do not overstate Article 22.

However, before launching a pricing system that makes solely automated individualized decisions with potentially significant effects, assess Article 22 explicitly. Where Article 22 applies and an exception permits the processing, implement the required safeguards, including human intervention, the ability to express a view, and the ability to contest the decision where required.

Do not use special-category personal data to make solely automated Article 22 pricing decisions unless the strict GDPR conditions and safeguards are satisfied. As a practical TycoonX default, **do not use health, religion, political views, ethnicity, sexual orientation, biometric data, or comparable sensitive data to set Diamond or VIP prices**.

## 8. Children and vulnerable consumers

TycoonX must not exploit vulnerability when setting or presenting prices.

Do not intentionally use age, inferred financial vulnerability, compulsive-use patterns, distress, disability, or similar vulnerability signals to raise a price, intensify pressure, or create an artificially urgent purchase prompt.

The Unfair Commercial Practices Directive requires commercial practices to be assessed from the perspective of a clearly identifiable vulnerable group where the trader could reasonably foresee that the practice would materially distort that group's economic behavior.

A lower youth/education/family price can be lawful in appropriate circumstances, but age-based or other eligibility criteria still require a separate discrimination, consumer-law, platform, and privacy review. Do not infer that “discount” automatically means “safe.”

## 9. No retaliation pricing

Do not use personalized prices as punishment for exercising legal or platform rights.

Examples of prohibited TycoonX pricing logic without an independent lawful basis:

- raising a price because a user exercised a GDPR right;
- raising a price because a user requested a statutory withdrawal or refund;
- raising a price because a user submitted a good-faith chargeback or account-compromise claim;
- denying a generally applicable price because a user refused optional tracking consent;
- increasing a price because a user reported abuse or appealed moderation;
- using a support complaint as a hidden “high willingness to pay” signal.

Fraud-prevention controls can still block or review genuinely suspicious transactions where lawful. Security/risk decisions must be kept separate from retaliatory pricing.

## 10. Platform and Xsolla role separation

### Apple App Store

Apple storefront pricing, tax display, product availability, and platform rules may differ by country. A CK-Labs country-specific Apple price is not automatically personalized merely because Apple shows a different local price to another country.

If CK-Labs ever uses Apple-supported offer tooling to target users based on individualized behavior, review both Apple's then-current rules and this gate before launch.

### Google Play

Google Play country/storefront pricing and provider-controlled conversion are not automatically personalized pricing by CK-Labs. Any CK-Labs-controlled individualized offer selection still requires separate review.

### Xsolla / official TycoonX web shop

If CK-Labs sends Xsolla a user-specific SKU, price, discount, coupon, or pricing parameter generated from behavioral profiling, CK-Labs must not hide behind Xsolla's payment or merchant-of-record role. The party controlling the personalization logic and the party controlling the consumer-facing disclosure must be identified for the actual configuration.

Preserve transaction evidence linking the displayed price to the rule/provider that produced it.

## 11. Completed transaction and price-change isolation

Personalized-pricing compliance does not change the existing TycoonX rule for completed one-time purchases:

- the final total price shown before confirmation governs the completed transaction, subject to mandatory law and lawful obvious-error correction;
- a later lower price does not automatically create a refund, price-match, credit, extra Diamonds, or extra VIP time;
- a later higher price does not create an extra charge on an already completed one-time purchase;
- Lifetime VIP may have different prices in different genuine sales windows;
- completed purchases are not retroactively repriced because the pricing model later changes.

If a personalized-price disclosure was legally required but missing, do not assume the remedy is always “no effect.” Assess the actual mandatory consumer remedy, enforcement risk, and transaction circumstances.

## 12. Entitlement isolation

A personalized-price investigation is not an entitlement engine.

It must never by itself:

- grant or replay purchased **Diamonds**;
- remove unrelated legitimately purchased **Diamonds**;
- restart, shorten, extend, or duplicate a one-time **30-Day VIP**;
- revoke, duplicate, convert, or recreate **Lifetime VIP**;
- create an Apple, Google Play, or Xsolla refund;
- classify a consumer as chargeback fraud or regional-price abuse.

Entitlement changes still require the authoritative transaction/provider/ledger state and the applicable refund, invalid-payment, fraud, error, or consumer-law basis.

## 13. Release evidence for any personalized pricing feature

Before enabling personalized automated prices or discounts, retain a dated release packet containing:

1. product and channel affected;
2. market/country affected;
3. whether CK-Labs or the provider controls the pricing decision;
4. input data categories used;
5. legal basis for personal-data processing where applicable;
6. exact personalization criteria/model description at a reproducible level;
7. sample inputs and resulting prices;
8. final consumer-facing disclosure shown immediately before purchase;
9. Privacy Policy impact assessment;
10. GDPR Article 22 assessment;
11. DPIA decision and reasoning where relevant;
12. vulnerable-consumer/age review;
13. promotion/dark-pattern review;
14. Apple/Google/Xsolla rule review for the selected channel;
15. rollback switch to return to non-personalized pricing;
16. support playbook for consumer questions or disputes;
17. evidence that completed transactions and existing entitlements cannot be retroactively repriced or duplicated.

Do not retain extra behavioral or sensitive data merely to prove this checklist. Apply GDPR retention and minimization rules.

## 14. Test matrix

Before launch, test at least:

1. same region, same general offer, two ordinary users where no personalization is intended: same applicable price rule;
2. regional price difference: correctly classified as regional, not individualized, when no user-specific automated signal is used;
3. personalized automated discount: clear disclosure appears before the payment-obligating order;
4. German checkout: personalized-pricing disclosure remains prominent with final product and price immediately before order submission;
5. Privacy Policy link only: test must fail if it is the sole disclosure;
6. behavior-based coupon: correctly classified as personalized where the coupon is selected through automated profiling;
7. A/B price experiment: blocked pending legal review when users receive materially different automated real-money prices;
8. tracking-consent refusal: refusal does not create a punitive higher price unless a separately lawful and transparently designed rule applies;
9. refund/chargeback complainant: exercising rights does not secretly worsen future prices;
10. Diamond purchase: no duplicated or unrelated entitlement correction;
11. 30-Day VIP: pricing experiment does not restart or alter the entitlement clock;
12. Lifetime VIP: different genuine sale-window price remains distinct from individualized willingness-to-pay pricing;
13. Xsolla user-specific price parameter: source rule and consumer disclosure remain auditable;
14. rollback: system can disable personalization without corrupting existing transactions or entitlements.

## Current legal checkpoint

Reviewed against official law/guidance available on 2026-09-01:

- Directive 2011/83/EU, Article 6(1)(ea), requiring disclosure where a price was personalized on the basis of automated decision-making;
- German Article 246a § 1(1) sentence 1 no. 6 EGBGB;
- German BGB § 312d(1) and § 312j(2), including the prominent immediately-before-order presentation requirement for Article 246a § 1(1) nos. 5 to 7;
- European Commission 2021 Consumer Rights Directive guidance, including the distinction between personalized pricing and dynamic/real-time pricing and the statement that Privacy Policy disclosure alone is insufficient;
- Directive 2005/29/EC on unfair commercial practices, including professional diligence, misleading practices, aggressive practices, and vulnerable-consumer treatment;
- Regulation (EU) 2016/679, especially transparency, profiling, lawful basis, objection rights, DPIA obligations where applicable, and Article 22 automated individual decision-making;
- European Commission/CPC enforcement concerning Tinder personalized discounts, showing that automated behavior-based discounts are an active consumer-enforcement issue.

Primary references:

- https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011L0083-20220528
- https://www.gesetze-im-internet.de/bgbeg/art_246a__1.html
- https://www.gesetze-im-internet.de/bgb/__312d.html
- https://www.gesetze-im-internet.de/bgb/__312j.html
- https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:52021XC1229(04)
- https://eur-lex.europa.eu/eli/dir/2005/29/oj/eng
- https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679
- https://commission.europa.eu/topics/consumers/consumer-rights-and-complaints/enforcement-consumer-protection/coordinated-actions/market-places-and-digital-services_en

## Founder-protective interpretation

This gate does **not** ban TycoonX regional pricing, genuine promotions, channel-specific prices, different currencies, tax-driven differences, platform price tiers, or different Lifetime VIP sale-window prices. It protects CK-Labs by drawing the line before a more legally sensitive system is activated: if an automated system starts using a consumer's own behavior/profile to select that consumer's real-money price or discount, classify it honestly, disclose it at the correct pre-contract point, document the underlying criteria and GDPR basis, avoid exploitative/vulnerability-driven pricing, and keep payment/entitlement correction separate from the pricing model.
