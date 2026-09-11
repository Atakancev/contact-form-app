# TycoonX Personalised Pricing and Automated-Decision 2026 Gate

**Last reviewed: September 11, 2026.**  
Owner: CK-Labs  
Scope: pre-contract pricing, promotions and checkout controls for TycoonX purchases offered to consumers in Germany and the EU.

This is an internal implementation/commercial-readiness control. It does not replace the canonical English Terms of Service, Purchases & Refunds Policy, Privacy Policy or Community Standards.

## 1. Why this gate exists

TycoonX may lawfully use different prices in different countries, stores, currencies, channels or genuine sale windows, subject to the applicable consumer, platform and anti-discrimination rules. That ordinary price differentiation is not automatically "personalised pricing".

A separate transparency rule applies where the price shown to a consumer is **personalised on the basis of automated decision-making**.

For German distance contracts, Article 246a § 1(1) no. 6 EGBGB requires the trader, where applicable, to inform the consumer that the price was personalised on the basis of automated decision-making. This implements Article 6(1)(ea) of Directive 2011/83/EU as amended by Directive (EU) 2019/2161.

The European Commission's Consumer Rights Directive guidance explains that the disclosure is relevant where automated decision-making and profiling of consumer behaviour are used to personalise a price for specific consumers or specific categories of consumers. It also explains that ordinary dynamic or real-time pricing responding to market variables does not fall within this particular disclosure rule when it does not involve personalisation based on automated decision-making.

This gate therefore prevents two opposite mistakes:

1. hiding an individually/profile-driven automated price behind generic language such as "regional pricing"; and
2. falsely labelling every country, tax, foreign-exchange, platform or genuine sale-window difference as automated personalised pricing.

## 2. Current TycoonX product rule

Until CK-Labs deliberately approves a different design after legal/privacy/checkout review, the preferred product policy is:

> **Do not personalise the monetary price of TycoonX Diamonds, one-time 30-Day VIP or Lifetime VIP using a player's spending history, inferred purchasing power, device/profile characteristics, engagement history, account wealth, VIP history or similar user-specific behavioural profile.**

Ordinary country/channel/platform prices, mandatory tax/VAT differences, currency conversion, provider FX treatment, generally available promotions and genuine sale-window prices can remain, provided they are truthful and otherwise lawful.

If personalised pricing is introduced later, it is a release-blocking commercial change until this gate is satisfied.

## 3. Classification test before any price experiment

For every pricing, coupon, promotion, paywall, offer-ranking or checkout experiment, document the answers to all of the following:

1. **Is the monetary price different?** If only non-price UI presentation changes, this specific personalised-price disclosure rule may not be triggered, although other consumer/privacy rules may still apply.
2. **Is the difference tied to the individual consumer or an automatically selected consumer category?**
3. **Is automated decision-making or behavioural profiling used to select that price?**
4. **Which inputs influence the result?** Examples include purchase history, search history, device attributes, inferred purchasing power, account activity, geography, referral source or engagement.
5. **Would two consumers buying the same product at the same time and under the same ordinary market conditions see different prices because of those profiles?**
6. **Who controls the final price and disclosure surface: CK-Labs, Apple, Google Play or Xsolla?**
7. **Is the final total price, including mandatory taxes/fees where required, shown clearly before confirmation?**

If answers 2 and 3 are yes, treat the flow as a personalised-pricing candidate and require legal/privacy review before release.

## 4. What is not automatically personalised pricing

The following differences are not automatically personalised pricing merely because users see different totals:

- different genuine country or regional prices;
- different Apple App Store, Google Play or Xsolla channel prices;
- VAT or other mandatory tax differences;
- currency and provider foreign-exchange differences;
- a generally available temporary promotion or Lifetime VIP sales window;
- a public coupon offered to everyone who meets transparent objective conditions;
- dynamic pricing based on non-customer market variables where no automated consumer profiling personalises the price;
- a later genuine price increase or decrease applying prospectively to future purchases.

These flows still remain subject to TycoonX's existing rules on truthful price presentation, non-misleading promotions, regional-price abuse controls, mandatory taxes/fees, final-price confirmation and non-retroactive repricing of completed purchases.

## 5. High-risk examples that require review

Treat the following as high-risk personalised-pricing candidates:

- a player classified as a "high spender" by an automated model sees a higher Diamond bundle price than another player in the same country/channel at the same time;
- a model infers that a player is likely to pay more and raises that player's 30-Day VIP price;
- a "win-back" or "VIP conversion" model chooses a different monetary price for each player based on purchase/engagement history;
- a coupon amount is automatically selected from behavioural profiling so that different profiled users receive different effective prices;
- a Lifetime VIP price is varied by automated purchasing-power or spending segmentation rather than by a genuine public sale window or ordinary regional pricing.

Do not hide these cases behind wording such as "special offer", "regional pricing", "dynamic pricing" or "A/B test" if the actual price is personalised through automated decision-making.

## 6. Mandatory pre-contract disclosure when applicable

If CK-Labs uses automated decision-making to personalise a price in a covered German/EU distance-contract flow, the consumer must be clearly informed **before being bound by the purchase** that the price was personalised on the basis of automated decision-making.

The disclosure must be tied to the transaction. A generic sentence buried only in the Privacy Policy is not a substitute for the required pre-contract pricing information.

For a CK-Labs-controlled checkout, preserve evidence of:

- the product/SKU;
- consumer country/region and sales channel;
- currency;
- base/reference price logic where relevant;
- whether the personalised-price flag was triggered;
- the automated rule/model or version that selected the price;
- the principal input category used for that decision, without exposing security-sensitive anti-fraud details unnecessarily;
- the exact disclosure shown to the consumer;
- the final total price and mandatory taxes/fees shown before confirmation;
- timestamp and transaction/order identity;
- the provider that processed the payment.

Do not create a false statement that a price was personalised when it was not, and do not omit the disclosure when the underlying facts make it applicable.

## 7. Apple, Google Play and Xsolla responsibility mapping

### Apple App Store

Apple controls substantial parts of StoreKit price presentation, tax/local-currency handling and system purchase confirmation. Ordinary App Store country/storefront pricing is not automatically TycoonX personalised pricing.

CK-Labs must nevertheless review any logic that chooses different TycoonX products, offers or effective prices for different users before handing off to StoreKit. A platform-controlled confirmation screen does not cure a CK-Labs-controlled misleading or undisclosed personalised price upstream.

### Google Play

Google controls substantial parts of Play Billing price presentation, tax/local-currency handling and system confirmation. Ordinary Play country pricing or provider tax/FX treatment is not automatically personalised pricing.

If CK-Labs uses profile-driven automated logic to select a different offer, SKU or effective price for a user, the legal character of that selection must be reviewed even though Google processes the payment.

### CK-Labs TycoonX webshop using Xsolla

Map exactly which party controls the catalogue price, regional configuration, coupon/promotion rule, tax/FX treatment, final checkout presentation and payment confirmation.

If CK-Labs supplies an automatically personalised price or personalised effective discount to the Xsolla flow, responsibility cannot be avoided merely because Xsolla renders the final payment interface. Conversely, ordinary Xsolla country/currency/tax handling must not be described as CK-Labs behavioural personalised pricing when it is not.

## 8. Product-specific controls

### Diamonds

- The quantity and final monetary total must remain clear before purchase.
- Automated spending/purchasing-power profiling must not silently change the monetary Diamond price without the required review and disclosure.
- A completed transaction is not retroactively repriced because a later user receives a lower price.
- A later generally available price decrease does not automatically create a price-match/refund right unless mandatory law requires otherwise.

### One-time 30-Day VIP

- Keep the product clearly one-time and non-renewing.
- Do not use subscription-style personalised retention pricing unless a genuinely different recurring product is introduced and separately made compliant.
- If two users receive different 30-Day VIP prices because of automated behavioural profiling, treat the flow as a personalised-pricing candidate.

### Lifetime VIP

- Lifetime VIP remains a limited-time promotional offering available only during selected genuine sales windows, which may be withdrawn and may never return.
- Different prices in different genuine sale windows do not by themselves mean automated personalised pricing.
- A sale-window countdown must be truthful and must not be reset or fabricated for individual pressure.
- Do not automatically raise or lower a user's Lifetime VIP price based on inferred purchasing power, historical spend or similar behavioural profiling without satisfying this gate.

## 9. Promotions, coupons and experiments

A promotion can be genuine without being identical for every consumer, but targeted pricing requires fact-specific review.

Before releasing an A/B test, coupon engine or personalised offer system, determine whether it changes only presentation/eligibility or actually changes the consumer's monetary price through automated profiling.

Examples:

- **Public 20% weekend sale:** not automatically personalised pricing.
- **Country-specific lawful price tier:** not automatically personalised pricing.
- **User manually enters a public coupon:** not automatically personalised pricing.
- **Automated model gives Player A 10% off and Player B 30% off because of predicted willingness to pay:** personalised-pricing review required.
- **Fraud or regional-price-abuse control blocks an ineligible transaction:** not a personalised price merely because access differs, but the anti-fraud decision must still be accurate, proportionate and otherwise lawful.

Promotional claims, crossed-out prices, countdowns, scarcity claims and discount percentages must remain truthful independently of this gate.

## 10. Privacy and automated-decision interaction

Price personalisation based on consumer data is also a privacy-design issue.

Before using personal data for such a system, document at minimum:

- lawful basis and purpose;
- categories of personal data used;
- transparency to the player;
- retention/minimisation controls;
- whether profiling occurs;
- whether GDPR rules concerning automated decision-making are engaged on the actual facts;
- security/access controls around pricing profiles; and
- how a consumer can exercise applicable data-protection rights.

Do not automatically claim that every pricing algorithm falls within GDPR Article 22. The Article 22 analysis depends on the actual degree of automation and whether the decision produces legal effects or similarly significant effects. But do not treat the Consumer Rights Directive pricing disclosure as a replacement for GDPR compliance either.

## 11. Mandatory QA scenarios

Before any personalised-pricing-capable production release, test and preserve evidence for at least these cases:

1. German user sees ordinary German App Store price and German VAT treatment only.
2. German user sees ordinary Google Play country price only.
3. German user sees ordinary Xsolla German/local-currency price only.
4. Two German users in the same channel receive the same price under the same non-personal market conditions.
5. Two German users receive different Diamond prices solely because an automated spending-profile model classified them differently.
6. Automated model changes 30-Day VIP price based on prior purchases.
7. Lifetime VIP genuine public sale window starts and ends at the same disclosed time for eligible users.
8. Lifetime VIP price differs between two genuine historical sale windows without user profiling.
9. Public coupon code is entered voluntarily.
10. Automated behavioural model chooses different coupon values for different users.
11. VAT rate or mandatory tax changes the final total.
12. FX/provider conversion changes local currency total.
13. Apple/Google provider price changes while CK-Labs SKU/product meaning stays the same.
14. CK-Labs changes the future Diamond bundle catalogue price for all users in a region.
15. A completed purchase is followed by a later lower price; no automatic retroactive repricing occurs unless mandatory law requires otherwise.
16. Regional-price-abuse control blocks a transaction without inventing a fake personalised price.
17. Personalised-price disclosure is shown before binding confirmation when the classification requires it.
18. The disclosure is not merely buried in the Privacy Policy.
19. Checkout evidence retains the price/disclosure decision associated with the correct transaction.
20. A pricing experiment is disabled/rolled back without altering already completed transaction prices.

## 12. Release acceptance criteria

This gate is closed only when either:

### Path A - no personalised pricing

- CK-Labs confirms in the commercial implementation that no TycoonX monetary price is personalised using automated consumer profiling;
- current regional/platform/channel/tax/FX and promotion logic is documented sufficiently to distinguish it from personalised pricing; and
- engineering/product policy prevents a future personalised-price experiment from bypassing legal/privacy/checkout review.

### Path B - personalised pricing is used

- the exact automated price-selection mechanism is documented;
- Article 246a § 1(1) no. 6 EGBGB / Article 6(1)(ea) CRD disclosure is implemented where applicable before the consumer is bound;
- the disclosure is transaction-specific and clearly visible;
- GDPR and unfair-commercial-practice implications are reviewed on the actual design;
- provider/CK-Labs responsibilities are mapped;
- final price/tax/fee presentation remains compliant;
- evidence is retained for the applicable decision and transaction; and
- the regression scenarios above pass.

## 13. Source-authoritative rule

For disputes, CK-Labs should preserve the provider/store transaction record and the TycoonX price-selection evidence relevant to that exact transaction. A later catalogue price, promotion or another player's price is not itself proof that the completed transaction was mispriced.

Obvious catalogue/configuration errors, failed/pending/reversed payments, fraud, chargebacks and entitlement abuse remain separate issues and must be handled under their own source-specific controls. Do not use "personalised pricing" as a label to obscure an ordinary configuration mistake or an invalid payment.

## 14. Current legal references

Rechecked September 11, 2026:

- German Article 246a § 1 EGBGB, especially § 1(1) no. 6: https://www.gesetze-im-internet.de/bgbeg/art_246a__1.html
- Directive 2011/83/EU, Article 6(1)(ea), consolidated text: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011L0083-20220528
- Directive (EU) 2019/2161, including recital 45 and the personalised-price amendment: https://eur-lex.europa.eu/eli/dir/2019/2161/oj
- European Commission guidance on Directive 2011/83/EU, section 3.3.1 on personalised price: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021XC1229(04)

## 15. Current conclusion

No repository evidence reviewed in this legal run establishes that TycoonX currently uses automated behavioural personalised pricing. Therefore this document records a **preventive commercial release gate, not a finding that CK-Labs is currently violating the personalised-price disclosure rule**.

The safest current TycoonX posture is to keep monetary pricing based on transparent product, country, channel, currency, tax and genuine promotion rules rather than individual purchasing-power or spending profiles. If that product policy changes, treat it as a material checkout/privacy/commercial change before launch.