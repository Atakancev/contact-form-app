# TycoonX EU/German Price Promotion and Personalization Release Gate

**Review date: September 2, 2026**

This release gate hardens TycoonX pricing, discount, promotion, crossed-out-price, regional-price and personalized-price behavior for CK-Labs. It supplements the canonical TycoonX Terms of Service and Purchases & Refunds Policy without replacing mandatory consumer law or the transaction-specific rules of Apple, Google Play, Xsolla, or another contracting merchant.

The goal is not to prevent lawful sales. The goal is to make sure a real Diamond, 30-Day VIP, Lifetime VIP, coupon or bundle campaign is marketed with a price reference that is true, reproducible and legally supportable.

## 1. Core release rule

Before a TycoonX promotion goes live, CK-Labs must be able to answer all of these questions from retained evidence:

1. What exact product, bundle or entitlement is being promoted?
2. What channel and storefront is the offer on: Apple App Store, Google Play, or the official TycoonX web shop using Xsolla?
3. What country/region and currency does the offer target?
4. What price is actually payable at checkout, including mandatory taxes and unavoidable charges where applicable?
5. What does any crossed-out price, percentage, `save`, `was`, `regular price`, `sale`, countdown or limited-time claim refer to?
6. Was that reference price genuinely charged or otherwise lawfully usable for the claimed comparison?
7. Is the offer generally available, region-based, eligibility-based, coupon-based, first-purchase-only, or personalized using automated decision-making?
8. Is a legally required personalized-price disclosure shown before the consumer places the order?
9. Is the promotion period genuine and technically synchronized with the catalog and checkout?
10. Can CK-Labs prove the offer history after the campaign ends?

If the answer to a legally material question is unknown, the risky claim should not ship until it is resolved.

## 2. German total-price baseline

German PAngV § 3 requires a trader advertising or offering goods or services to consumers with prices to state the total price, and where a price is broken into components the total price must be highlighted.

For TycoonX, this means that a CK-Labs-controlled purchase surface must not make a consumer reconstruct the real payable amount from a Diamond price, VAT line, mandatory fee or other unavoidable component where German law requires the total price to be shown.

The same principle is reinforced by German UWG § 5b for consumer invitations to purchase: the total price, or where it cannot reasonably be calculated in advance the method of calculation and relevant additional charges, is material information.

The final checkout total may legitimately differ by country, currency, VAT treatment, platform tax handling, payment method or provider rules. That difference must be real and must not be disguised as a fake discount.

## 3. PAngV § 11 and the 30-day prior-price rule must not be overgeneralized

German PAngV § 11 expressly applies to announcements of price reductions for **goods (`Waren`)** and requires the lowest total price used during the previous 30 days as the reference price, subject to the statutory exceptions.

TycoonX Diamonds, 30-Day VIP and Lifetime VIP are digital game currency/content/services or digital entitlements, not ordinary physical goods. Therefore CK-Labs must **not automatically claim that PAngV § 11 itself directly governs every TycoonX digital promotion** merely because a sale uses a crossed-out price.

However, that does not create a loophole for fake digital discounts. Misleading price claims for digital products and services remain subject to German unfair-commercial-practice rules, including UWG §§ 5, 5a and 5b, and to the corresponding EU Unfair Commercial Practices Directive framework.

Operational rule:

- for any TycoonX digital offer, the reference price must still be truthful, clear and supportable;
- if a future TycoonX offer includes a product that is legally a `Ware`, or another jurisdiction extends a statutory prior-price rule to that offer, use the applicable statutory history rule;
- if legal classification is uncertain, do not use a strong `X% off`, `was`, crossed-out price, or equivalent savings claim until the reference basis is reviewed.

## 4. EU Article 6a / German PAngV price-reduction logic where it actually applies

Where Directive 98/6/EC Article 6a or German PAngV § 11 applies to a covered good, the reference price is the lowest price applied during at least the previous 30 days, subject to lawful national exceptions.

The Court of Justice of the European Union confirmed in **Case C-330/23, Aldi Süd, judgment of September 26, 2024**, that a percentage reduction or other promotional statement highlighting the advantageous nature of the announced price must be determined on the basis of that legally defined prior price.

Do not:

- briefly raise a covered price and then calculate a dramatic percentage discount from the inflated price;
- calculate `50% off` from a higher reference price when the legally relevant prior price is lower;
- use a crossed-out amount that consumers reasonably understand as the former selling price when it was never genuinely applicable;
- restart a supposedly new sale merely to manufacture a new higher reference price.

Keep per-channel/per-storefront price history where the applicable law measures the prior price separately for those sales channels.

## 5. Digital TycoonX promotions still need truthful reference prices

For Diamonds, 30-Day VIP, Lifetime VIP and other digital offers, CK-Labs should treat every savings claim as requiring a documented comparison basis even where PAngV § 11 is not directly applicable.

Acceptable examples, if true and presented clearly:

- `€7.99, previously €9.99 on the TycoonX web shop from August 1 to August 31`;
- `20% launch discount compared with the price that will apply after September 10`, where the future price and campaign are genuine and the presentation is not misleading;
- `€2 lower than the current Google Play price in Germany`, where the channel comparison is accurate and clearly identifies the compared channel;
- `First purchase offer`, where eligibility is genuine and the user is not falsely told that a universal market price was reduced.

Unsafe examples:

- a crossed-out `€19.99` that was never actually offered or was only displayed momentarily to create an anchor;
- `50% off` when the normal comparison price cannot be evidenced;
- `Best price ever` without sufficient historical evidence;
- `Only today` while the same timer automatically restarts every day;
- `Last chance` when CK-Labs already configured the same Lifetime VIP offer to continue unchanged;
- a discount percentage calculated from a different bundle size without clearly explaining the changed quantity.

## 6. Lifetime VIP sales-window rules

Lifetime VIP remains a **limited-time promotional offering available only during selected genuine sales windows**. It may be withdrawn from sale, may never return, and creates no expectation of continuous availability.

Different genuine Lifetime VIP sales windows may use different future prices. A later lower price does not automatically create a refund, credit or price-match right for an earlier completed purchase, and a later higher price does not create an extra charge on an earlier completed one-time purchase, except where mandatory law requires otherwise.

For every Lifetime VIP campaign retain:

- campaign start and end timestamp plus time zone;
- country/storefront/channel scope;
- displayed price and currency;
- any crossed-out/reference price and its evidence;
- countdown source and end-time configuration;
- eligibility conditions;
- screenshots or equivalent durable evidence of the live offer;
- final checkout total;
- whether a coupon, bonus or bundled Diamond amount was part of the offer.

If CK-Labs extends a sales window, the extension must be real and the surrounding marketing must not falsely present the extension as a brand-new expiring offer if that would mislead consumers.

## 7. Personalized pricing based on automated decision-making

Under Consumer Rights Directive Article 6(1)(ea), implemented in Germany through Article 246a § 1(1) no. 6 EGBGB, a consumer must be informed where the price presented in a distance/off-premises contract has been personalized on the basis of automated decision-making.

This is different from ordinary regional or dynamic pricing.

Examples that are generally **not personalized pricing merely because prices differ**:

- Apple storefront prices by country;
- Google Play local prices;
- Xsolla country/currency/VAT differences;
- exchange-rate or tax adjustments;
- a generally available German promotion shown to every eligible German consumer;
- time-based dynamic pricing that reacts to market conditions without using consumer-specific automated profiling.

Examples that can trigger the personalized-price disclosure:

- the system predicts that a particular player is willing to pay more and shows that player a higher Lifetime VIP price;
- an automated profile based on purchase history, device data, spending behavior or inferred purchasing power changes the real-money Diamond price for that person or automated consumer segment;
- a model selects different real-money prices for otherwise comparable consumers using individual behavioral data.

Where the rule applies, the disclosure must be clear and provided before the order is placed. Hiding it only in the Privacy Policy or Terms is not enough for the transaction-specific pre-contract information duty.

## 8. Personalized offers are not always personalized prices

An automated system may decide **who receives an offer** without changing the actual price for people who receive it. That can be an eligibility/promotion issue rather than personalized pricing under Article 6(1)(ea).

Example: every player who reaches level 20 automatically receives the same €4.99 Diamond bundle offer. The rule may be automated, but the price is not necessarily personalized on the basis of automated decision-making in the legal sense.

However, the promotion still must be truthful, must comply with privacy/data-protection rules for the data used, and must not unfairly exploit children or other vulnerable consumers.

Do not label a genuinely individualized automated price as a mere `offer eligibility` rule to avoid the disclosure duty.

## 9. Regional pricing versus personalized pricing

Regional pricing and personalized pricing must be recorded separately.

A price based on genuine storefront, country, tax, currency, payment-provider or lawful regional-market configuration is not automatically a personalized price just because a user in Germany sees a different amount from a user in Türkiye.

A price based on the individual user's predicted willingness to pay, behavioral profile or purchasing power can be personalized even if the system also considers country.

The separate TycoonX EU geo-blocking/regional-pricing gate still applies. A personalized-pricing label does not legalize nationality/residence discrimination, and a regional-pricing label does not legalize covert automated price personalization.

## 10. Coupons, promo codes and targeted promotions

A coupon may lawfully create an individual price reduction without implying that every consumer was offered the same public reduction.

Promotion evidence should record:

- campaign or coupon ID;
- eligibility rule;
- issue and expiry period;
- number of permitted redemptions;
- whether it is combinable;
- applicable SKUs/bundles;
- discount calculation order where multiple promotions stack;
- actual final total;
- reason a user was eligible where eligibility was automated.

Duplicate redemption, account farming, coupon replay, manipulated eligibility and technical bugs may be corrected where lawful. The correction should target only the invalid promotional value or affected transaction and must not remove unrelated legitimate purchases.

## 11. Xsolla promotion configuration

Xsolla currently supports discount promotions for virtual items, virtual-currency packages and bundles, can return both regular and discounted prices in catalog/cart price objects, and can configure promotion periods and user-attribute conditions.

Xsolla also documents that multiple discounts can stack and that its Site Builder can display timers for promotions with an end date.

Release rule:

- do not assume that a regular price returned by Xsolla is automatically a legally valid crossed-out/reference price for every jurisdiction;
- verify what CK-Labs configured, what Xsolla actually displays, and what final price the checkout charges;
- if multiple Xsolla promotions stack, test the final arithmetic and the user-facing savings claim;
- if a Xsolla timer is shown, confirm its period is genuine and does not create false scarcity;
- retain the Xsolla promotion ID/configuration and a sample checkout record.

Xsolla's technology can implement a discount. It does not replace CK-Labs' duty to ensure a CK-Labs-created promotion is lawful and non-misleading.

## 12. Apple App Store pricing boundary

Apple currently supports country/storefront-specific In-App Purchase pricing and scheduled temporary/custom price changes, and Apple may automatically adjust non-custom storefront prices for tax and foreign-exchange changes depending on the pricing setup.

Release rule:

- use the price returned/displayed by the current Apple purchase surface as the transaction price;
- do not hard-code a stale euro amount in TycoonX marketing if Apple has changed the German storefront price;
- record whether a storefront price is Apple-generated from a base region or manually set by CK-Labs;
- if TycoonX itself says `save X%` or shows a crossed-out price outside Apple's native purchase UI, CK-Labs remains responsible for the truthfulness of that marketing claim;
- an Apple tax/FX adjustment is not automatically a CK-Labs `sale` or `discount`.

## 13. Google Play pricing boundary

Google Play currently allows market-specific local prices and can convert a base price using local currency, taxes, pricing patterns and exchange rates. Google also supports certain sale/promotion mechanisms depending on product type.

Release rule:

- retrieve fresh eligible product/pricing data close to checkout rather than relying on a stale cached marketing price;
- record country/storefront and product ID when a promotion is tested;
- do not describe a Google-generated tax/FX/local-price change as a CK-Labs discount unless it genuinely is one;
- if CK-Labs advertises a comparison between Google Play and the TycoonX web shop, identify the compared channel and make sure both compared prices are contemporaneous and comparable.

## 14. Obvious pricing and catalog errors

A promotion bug must not be disguised as a valid campaign after the fact.

Examples:

- a €99.99 Lifetime VIP price accidentally entered as €9.99;
- a 500-Diamond bundle accidentally configured as 5,000 Diamonds;
- a coupon unexpectedly stacks ten times;
- the checkout currency label is EUR but the numerical amount was imported from another currency;
- a stale campaign continues after its genuine end time.

The canonical Terms already allow correction of obvious pricing/configuration errors where law permits. Operationally:

1. stop or correct the erroneous future offer;
2. preserve catalog, checkout and transaction evidence;
3. determine whether a binding contract already exists under the applicable law/provider flow;
4. do not unilaterally charge the consumer more after a completed one-time purchase;
5. where lawful, cancel/refund an unfulfilled obvious-error transaction rather than inventing a new price;
6. preserve mandatory consumer remedies and provider-specific procedures.

## 15. Completed purchases are not retroactively repriced

A completed one-time Diamond, 30-Day VIP or Lifetime VIP purchase keeps the transaction price that governed that completed purchase, subject to lawful correction of an invalid transaction or obvious error.

A later sale does not automatically create a refund, credit, additional Diamonds or additional VIP time.

A later price increase does not permit CK-Labs to collect an extra amount from the old transaction.

This does not prevent mandatory remedies, provider refunds, settlements, chargeback outcomes, or corrections required by law.

## 16. Entitlement isolation

Promotion or pricing investigations must be transaction-specific.

Do not:

- remove unrelated purchased Diamonds because a coupon on another purchase was invalid;
- restart or extend the original one-time 30-Day VIP clock because a later promotion is cheaper;
- downgrade Lifetime VIP to 30-Day VIP because the Lifetime VIP price later changed;
- create a hidden expiry for Lifetime VIP because its sales window closed;
- treat a consumer complaint about a misleading discount as fraud or regional-price abuse without independent evidence.

A valid refund/reversal/invalid transaction may still support correction of the corresponding paid value under the canonical Terms and mandatory law.

## 17. Children and vulnerable consumers

Do not use price personalization, countdown pressure or scarcity design to exploit children or other clearly vulnerable consumers.

A child's purchase-approval mechanism is not permission to apply a higher individualized price. A parental approval for one purchase is transaction-specific and does not authorize future promotions, future purchases or behavioral price profiling.

Direct exhortations to children to buy, or to persuade parents or other adults to buy, remain separately restricted under EU unfair-commercial-practice rules.

## 18. Required release evidence

For every major Diamond/VIP campaign retain, at minimum:

- product/SKU and entitlement type;
- campaign ID/name;
- channel and storefront;
- country/region and currency;
- campaign start/end with time zone;
- ordinary/current price immediately before the campaign;
- any statutory prior-price record if applicable;
- every displayed crossed-out/reference price and what it means;
- discount percentage calculation;
- final total including applicable mandatory taxes/charges;
- eligibility rule and whether automated decision-making is used;
- personalized-price disclosure where required;
- screenshots or equivalent evidence of offer and final checkout;
- provider configuration/export or API evidence;
- actual test transaction result or sandbox equivalent where available;
- rollback/correction plan for obvious configuration errors.

## 19. Minimum regression scenarios

Before release or a material pricing-system change, test at least these scenarios:

1. German web-shop Diamond bundle with ordinary price and no discount.
2. Genuine Lifetime VIP sale with a real start/end time.
3. Crossed-out price whose historical basis is documented.
4. Fake/inflated reference price rejected before publication.
5. Percentage discount arithmetic matches the declared comparison basis.
6. Two overlapping Xsolla discounts produce the expected final checkout amount.
7. Expired coupon cannot be replayed.
8. Duplicate coupon redemption removes only invalid promotional value.
9. Apple German storefront price differs after tax/FX adjustment without being labeled a CK-Labs sale.
10. Google Play local price differs from Xsolla web-shop price without implying a universal discount.
11. Country-based regional price is not mislabeled as personalized pricing.
12. Automated willingness-to-pay pricing triggers the required personalized-price disclosure before order.
13. Automated level-based offer with one common price is evaluated separately from individualized price personalization.
14. Personalized-price disclosure remains visible after navigation back/forward and immediately before ordering where required.
15. Minor/parental approval does not silently authorize future personalized pricing.
16. Pricing/catalog error is stopped without charging an old completed transaction extra.
17. Later lower Lifetime VIP sale does not rewrite an earlier completed transaction.
18. Later higher Lifetime VIP sale does not create a surcharge on an earlier buyer.
19. Refund of one promotional Diamond purchase preserves unrelated purchased Diamonds.
20. A promotion complaint does not automatically flag the account as fraud.

## 20. Current-law references reviewed September 2, 2026

- German PAngV § 3, total-price duty: https://www.gesetze-im-internet.de/pangv_2022/__3.html
- German PAngV § 11, 30-day prior price for price reductions concerning goods: https://www.gesetze-im-internet.de/pangv_2022/__11.html
- German UWG §§ 5a/5b, material and price information: https://www.gesetze-im-internet.de/uwg_2004/
- Article 246a § 1(1) no. 6 EGBGB, personalized-price disclosure: https://www.gesetze-im-internet.de/bgbeg/art_246a__1.html
- Consumer Rights Directive 2011/83/EU Article 6(1)(ea), as amended by Directive (EU) 2019/2161: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011L0083-20220528
- Commission CRD guidance on personalized prices: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021XC1229(04)
- Directive 98/6/EC Article 6a and Commission price-reduction guidance: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021XC1229(06)
- CJEU Case C-330/23, Aldi Süd, judgment of September 26, 2024: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62023CJ0330
- Apple In-App Purchase pricing: https://developer.apple.com/in-app-purchase/
- Apple scheduled In-App Purchase price changes: https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/schedule-price-changes-for-in-app-purchases/
- Google Play price setup: https://support.google.com/googleplay/android-developer/answer/6334373
- Xsolla discount promotions: https://developers.xsolla.com/solutions/web-shop/promotions/discounts/

## 21. Release decision

A TycoonX price promotion is **not release-ready** if any of the following remains unresolved:

- final total price is unclear;
- a crossed-out/reference price cannot be evidenced;
- a percentage discount is calculated from an unsupported anchor;
- a timer or `limited-time` claim is not genuine;
- Lifetime VIP scarcity wording does not match the configured sales window;
- CK-Labs cannot distinguish regional pricing from automated personalized pricing;
- a required personalized-price disclosure is absent;
- Apple/Google/Xsolla price state is stale or inconsistent with CK-Labs marketing;
- a provider-generated regular price is being treated automatically as a legally valid prior/reference price without checking applicable law;
- promotion correction could remove unrelated Diamonds, alter the original 30-Day VIP clock, or damage valid Lifetime VIP.

This gate is intentionally conservative. It protects CK-Labs by allowing flexible future pricing and genuine sales while keeping promotional claims reproducible, transaction-specific and compatible with mandatory German/EU consumer protections.