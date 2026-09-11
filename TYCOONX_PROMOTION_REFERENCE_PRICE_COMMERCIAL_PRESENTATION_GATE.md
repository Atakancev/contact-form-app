# TycoonX Promotion, Reference-Price & Commercial Presentation Gate

**Reviewed:** 2026-09-11  
**Status:** Mandatory commercial-presentation release gate  
**Scope:** CK-Labs-controlled TycoonX legal, marketing, in-game shop and webshop surfaces, plus consistency checkpoints for Apple App Store, Google Play and Xsolla checkout/promotion surfaces.

## Purpose

The canonical TycoonX legal framework already allows CK-Labs to change future prices, Diamond bundle pricing/content, VIP pricing, regional prices, currencies and genuine future promotions, while requiring promotions, countdowns, crossed-out prices and discount claims not to mislead consumers. This gate converts that principle into concrete release and QA controls.

It does **not** create a player right to perpetual discounts, price matching, retroactive repricing or continuous availability of any offer. It also does not weaken mandatory German/EU consumer rights.

## Legal scope and the important 30-day nuance

German UWG § 5 applies broadly to misleading commercial practices. In particular, misleading information about the existence of a special price advantage, the price, the way the price is calculated or the conditions of supply can be unlawful where it is capable of influencing a transactional decision.

UWG § 5(5) adds a specific founder-relevant evidence rule: advertising a price reduction is presumed misleading if the supposedly higher price was demanded only for an unreasonably short time. If it is disputed whether and for how long that higher price was actually demanded, the advertiser bears the burden of proof. TycoonX campaign records therefore need to prove the factual reference price rather than relying on a current catalog value or staff memory.

German PAngV § 11 contains a more specific prior-price rule for announcements of price reductions for **goods (Waren)**. Where that rule applies, the lowest total consumer price applied during the previous 30 days must be indicated, subject to the statutory exceptions.

The European Commission's official Article 6a Price Indication Directive guidance is explicit that this specific regime applies to goods and **does not apply to services, including digital services, or to digital content**. The guidance separately confirms that promotional price-advantage practices concerning digital content and all kinds of services remain subject to the EU Unfair Commercial Practices Directive.

For the current purely digital TycoonX products, including Diamonds, one-time non-renewing 30-Day VIP and promotional Lifetime VIP, do **not** mechanically apply the PAngV § 11 / Article 6a 30-day formula merely because a sale, crossed-out price or percentage claim exists. Instead, apply the broader non-misleading commercial-practice rules and maintain evidence for every claimed reference price.

If TycoonX later sells physical merchandise or a combined offer containing physical goods, perform a fresh § 11 PAngV / Article 6a assessment for that physical-goods element. Do not reuse the digital-product conclusion automatically.

Where another mandatory prior-price/reference-price rule applies to a particular offer or jurisdiction, CK-Labs must calculate, retain and display the legally required reference price and reference period exactly as required by that rule. Do not replace that calculation with a convenient marketing number.

## German total-price baseline still applies to digital offers

The goods-only scope of § 11 PAngV does **not** mean digital TycoonX offers are outside German price-transparency law.

PAngV § 3 requires the total price when a trader offers goods or services to consumers or advertises them with prices. PAngV § 6 requires additional price information for distance contracts, including that the requested price includes VAT and other price components and whether additional delivery, shipping or other costs apply. Additional costs that can reasonably be calculated in advance must be stated in amount.

For TycoonX this means:

- a German consumer-facing headline price must not intentionally omit mandatory VAT or another mandatory price component and reveal the real payable total only at the binding payment step;
- if Apple, Google Play or Xsolla changes the local total because of tax, currency or provider pricing, the CK-Labs-controlled pre-checkout presentation must not continue to advertise a contradictory final amount without resolving the difference before the consumer becomes bound; and
- a tax or FX adjustment by a provider is not automatically a CK-Labs promotional discount or surcharge claim.

## Required commercial-presentation controls

### 1. Reference prices must be truthful and like-for-like

A crossed-out price, `was` price, percentage saving or similar comparison must refer to a genuinely comparable offer. The comparison must not silently mix:

- another country or region;
- another platform or payment channel;
- another currency;
- a different Diamond quantity or bundle composition;
- a different VIP duration or entitlement type;
- a tax-exclusive business price with a consumer total price;
- a temporary provider/FX conversion with CK-Labs' own reference price; or
- a Lifetime VIP sales window with a different product or materially different included rights.

If the comparison basis is not obvious, identify it clearly enough that an ordinary consumer can understand what is being compared.

Do not use a price that was merely configured but never genuinely offered as though it were a former consumer price. Do not briefly raise or publish a nominal price solely to manufacture a larger later discount claim.

### 2. Platform, country and channel differences are not automatically discounts

Apple App Store, Google Play and the CK-Labs TycoonX webshop using Xsolla may lawfully show different prices because of platform pricing, country availability, local purchasing power, taxes, VAT, currency conversion, provider rules or genuine channel-specific offers.

A lower price in one platform, country or channel must not be marketed as a percentage discount from another platform, country or channel unless the comparison itself is lawful, genuinely comparable and clearly explained.

A converted foreign price is not automatically a meaningful `regular price` for a German player. Avoid comparisons that silently ignore different tax treatment, currencies or provider price points.

### 3. Countdown timers and sales windows must be genuine

A countdown, `ends in...`, `last chance`, `today only`, `this weekend` or similar scarcity statement must correspond to a real campaign rule.

Do not automatically reset a countdown for the same consumer, silently extend it indefinitely, or make an offer appear about to disappear when the campaign is in fact continuous. A genuine campaign may be extended or replaced by a new campaign, but the presentation must not falsely make the extension or replacement look like a newly urgent deadline.

Keep auditable campaign start/end timestamps, time zone, affected SKU/channel/market, what actually changes at expiry, and the reason for any extension or replacement.

### 4. Lifetime VIP remains a genuine limited-window promotional product

Lifetime VIP may be offered only during selected genuine sales windows. It may be withdrawn from sale, may never return and creates no expectation of continuous availability.

Different genuine Lifetime VIP sales windows may use different prices. That freedom does not permit a misleading reference price. In particular:

- do not imply that Lifetime VIP was continuously sold at a higher `regular` price when it was not continuously available;
- do not create a fake permanent discount by repeatedly reopening an effectively identical short window with a resetting countdown;
- if a prior Lifetime VIP window is used as a comparison, make the comparison basis and relevant channel/region clear;
- do not state that Lifetime VIP `will never return` unless CK-Labs has actually made that decision; the standing lawful formulation is that it may be withdrawn and may never return; and
- a later lower Lifetime VIP price does not automatically create a refund, credit or price-match right for an earlier completed purchase, except where mandatory law requires otherwise.

The Lifetime VIP product name does not promise that TycoonX itself, CK-Labs, Apple, Google, Xsolla or every individual feature will operate forever. Mandatory remedies for non-conformity, material modifications or lawful service discontinuation remain intact.

### 5. One-time 30-Day VIP must not be presented as recurring

TycoonX 30-Day VIP is a one-time, non-renewing entitlement unless CK-Labs introduces a separate compliant recurring product in the future. Promotion copy, expiry reminders and checkout copy must not imply automatic renewal, automatic rebilling or subscription cancellation obligations for the one-time product.

Do not calculate a supposed `saving` against a hypothetical monthly subscription price that TycoonX does not genuinely offer.

A future recurring VIP product would require its own compliant subscription disclosures, billing frequency, renewal/cancellation rules, price-change process and required notices.

### 6. Diamond promotions must identify the actual bundle

A Diamond promotion must make clear what quantity is being purchased and what, if anything, is promotional. If a bundle changes from, for example, 200 Diamonds to 220 Diamonds at the same money price, that is a content/bundle change and should not automatically be described as the same percentage price reduction as a cash-price discount.

If a promotion says `bonus Diamonds`, define the real baseline quantity against which the bonus is calculated. Do not continually inflate the supposed standard quantity solely to manufacture a bonus claim.

Promotional Diamonds, purchased Diamonds and other grants should remain technically distinguishable where that distinction is needed for refunds, reversals, abuse correction, accounting or mandatory rights.

### 7. Personalized coupons and targeted offers need a truthful scope

A genuine personal coupon, account-specific grant, recovery offer or targeted promotion may differ from a public price. It must not be presented as a universal public prior price or universal market discount if it is personal.

CK-Labs may reject duplicate, forged, manipulated, region-abusive or otherwise invalid coupon use where lawful, but a correctly redeemed valid coupon must be honored according to its stated conditions unless a lawful correction/remedy applies.

If automated decision-making personalizes the monetary price itself, also apply the separate TycoonX personalised-pricing gate. Do not assume that calling a price a `coupon` avoids the applicable disclosure analysis.

### 8. Introductory/new-product pricing needs a real comparison basis

Do not invent a `regular price` for a new product that has never genuinely been offered at that price merely to create a crossed-out anchor. If TycoonX launches a new bundle or VIP configuration at an introductory price, call it an introductory or launch offer without fabricating prior sales history.

### 9. VAT, tax, currency and FX changes must not become fake sales claims

A consumer's local displayed price may change because of VAT/tax rules, store price configuration, currency conversion or provider FX adjustments. Such a change is not automatically a CK-Labs promotion.

Where German/EU law requires a consumer total price, display the required total including mandatory taxes/fees. The final total price shown to the player before confirmation governs the completed transaction, subject to mandatory law and lawful handling of obvious errors, failed/pending/reversed payments and provider corrections.

### 10. Completed purchases are not retroactively repriced

A later price decrease does not automatically create a refund, credit or price-match right. A later price increase does not create an additional charge on an already completed one-time purchase. Apply any exception required by mandatory consumer law, an express promotion promise, provider/store rules or a specific remedy owed to the consumer.

### 11. Obvious catalog/configuration errors require a truthful correction path

A clear pricing, currency, catalog, bundle or configuration error may be corrected for future offers. Do not silently change the amount charged after purchase confirmation.

For a completed or attempted transaction affected by an obvious error, determine the legally permitted outcome using the actual checkout state, provider/store records, whether payment completed, whether entitlement was delivered, consumer notice and mandatory law. Never use an error clause as a blanket power to keep payment while withholding the promised valid entitlement.

Do not relabel a genuine low promotional price as an `obvious error` merely because CK-Labs later regrets the campaign economics.

### 12. Promotion conditions must be available before the decision

Material conditions such as eligible country, channel, account group, product, start/end time, coupon limit, minimum purchase, one-use limit or sales-window restriction must be disclosed clearly enough before the consumer commits to the purchase.

Do not hide a material exclusion only after payment or in support correspondence.

### 13. Provider responsibilities and CK-Labs responsibilities must remain distinct

Apple, Google Play and Xsolla may control or influence their checkout UI, regional availability, payment authorization, fraud screening, tax handling, currency conversion, refunds and provider-specific promotional features.

CK-Labs remains responsible for the truthfulness of CK-Labs-controlled TycoonX marketing and legal statements, correct entitlement delivery/reconciliation from authoritative provider records, and mandatory consumer obligations that cannot lawfully be delegated away.

If a platform/provider surface independently renders a promotion incorrectly, preserve evidence and correct CK-Labs-controlled surfaces promptly while following the provider's correction/support process.

### 14. Promotion evidence must be retained

For each material paid promotion, retain enough authoritative records to reconstruct what the consumer was shown. As appropriate, record:

- campaign or offer identifier;
- product/bundle and entitlement definition;
- sales channel/platform;
- eligible country/region;
- currency;
- consumer-facing price and mandatory tax treatment;
- reference price and factual/legal/commercial basis if one was displayed;
- evidence that the reference price was genuinely offered and for how long where relevant;
- campaign start/end time, time zone and any extension;
- coupon/targeting conditions;
- checkout/provider product identifier;
- provider price configuration or export sufficient to reconstruct the campaign; and
- final transaction/order identifier for completed purchases.

Do not rely only on screenshots, mutable catalog state or profile flags where provider/store/server transaction records exist.

## Provider-specific commercial controls

### Apple App Store

Apple currently allows developers to schedule global, temporary and custom In-App Purchase price changes. Temporary changes can have definite start and end dates. Apple can generate comparable prices across storefronts from a base country or region and, where prices are not manually managed, may periodically adjust storefront prices for tax and foreign-exchange changes.

For TycoonX:

- verify the actual target-storefront price and scheduled dates before advertising an Apple-specific promotion;
- treat the authoritative Apple storefront amount as the Apple transaction price rather than assuming a copied CK-Labs website amount remains current;
- do not describe an Apple tax/FX adjustment as a CK-Labs discount unless CK-Labs actually launched a promotion; and
- preserve the affected storefront/SKU/price schedule when a material discount claim is published.

### Google Play

Google Play currently supports market-specific local pricing. Its published pricing guidance describes local-currency conversion, applicable tax handling in selected countries, locally relevant pricing patterns and exchange rates, and permits market-specific price management.

For TycoonX:

- verify the live Google Play price in the target country before advertising a Google-specific saving;
- do not assume Google, Apple and Xsolla will show identical local totals;
- do not market an exchange-rate refresh or tax adjustment as a CK-Labs sale unless it actually is one; and
- keep the Google product/order provenance needed for transaction-specific refunds and entitlement reconciliation.

### CK-Labs webshop using Xsolla

Xsolla's current catalog model supports real-money prices and regional-price data, and its item/catalog controls can include display periods and purchase limits. Those tools can help implement real campaigns, but configuration alone does not make an urgency or discount claim truthful.

For TycoonX:

- the CK-Labs banner/product page and the Xsolla checkout must refer to the same intended SKU, entitlement and campaign;
- an expired CK-Labs banner must not continue to advertise a stale amount after the provider/catalog campaign changes;
- a configured Xsolla display period should correspond to the real public Lifetime VIP or other promotional window if it is used to support an `ends at` claim;
- provider tax, FX or regional-price differences must not be re-labeled as CK-Labs discounts without a truthful basis; and
- Xsolla refunds/reversals/chargebacks must reconcile only the value created by the affected authoritative transaction.

## Minimum QA evidence before publishing a discount claim

Before CK-Labs publishes a TycoonX crossed-out price, percentage discount or time-limited paid promotion on a CK-Labs-controlled surface, QA should be able to answer all of the following from records rather than memory:

1. What exact product or entitlement is being sold?
2. Which platform/channel, region and currency does the comparison cover?
3. What price/reference price is being claimed and where did it come from?
4. Is the product a digital service/content product or does a physical-goods element trigger a specific statutory prior-price rule?
5. If a specific statutory prior-price rule applies, has the required reference period and method been followed exactly?
6. If the claim relies on a former higher price, can CK-Labs prove that the higher price was genuinely demanded and for what period?
7. Is the campaign window genuine and technically enforced?
8. Are mandatory taxes/fees and the final total displayed as required?
9. Are all material eligibility/exclusion conditions visible before purchase?
10. Can the completed purchase later be reconciled to authoritative store/payment records without relying on a client-controlled flag?

## Regression scenarios

The following scenarios should pass before a promotion subsystem is treated as commercially ready:

1. A genuine one-week Diamond sale uses a truthful same-channel/same-region comparison basis without falsely invoking the goods-only 30-day rule.
2. A lower webshop price than an App Store price is not automatically rendered as `20% off` from the App Store price.
3. A local price move caused only by VAT, currency or provider FX does not automatically become a CK-Labs sale claim.
4. Lifetime VIP returns in a later genuine sales window at a different price without creating a fake continuous `regular price`.
5. A Lifetime VIP countdown naturally expires and the offer is actually withdrawn or changed according to the campaign rule.
6. A genuine campaign extension is recorded and communicated as an extension rather than silently resetting urgency.
7. A personalized coupon is not presented as a universal public prior price.
8. An introductory price for a new bundle does not invent sales history that never existed.
9. A Diamond bonus-content promotion correctly distinguishes extra Diamonds from a money-price reduction.
10. A one-time 30-Day VIP promotion never implies automatic renewal or rebilling.
11. The German pre-confirmation checkout shows the legally required total price and a completed transaction is not later surcharged because the price increased.
12. A later lower price does not trigger an automatic price-match/refund unless a mandatory rule or express promise requires it.
13. A catalog/configuration error is stopped/corrected without silently changing the amount already confirmed and charged.
14. A genuine low promotional price is not retroactively reclassified as an error simply because the campaign was commercially unfavorable.
15. A regional promotion cannot be obtained merely by falsifying region where CK-Labs lawfully restricts eligibility, while genuine residents are not denied because of an unrelated platform price difference.
16. Provider outage, stale cache or delayed configuration cannot make an expired promotion appear permanently urgent or produce contradictory checkout totals without a fail-safe.
17. Apple has a scheduled temporary German price but the CK-Labs banner still shows the old amount; the promotion must fail closed or be corrected before advertising the saving.
18. Google refreshes a local price because of exchange rates; TycoonX does not automatically label the change a sale.
19. Xsolla has a country-specific price or display period that differs from a cached CK-Labs campaign; the player sees one coherent truthful offer before becoming bound.
20. Campaign records can reconstruct the product, channel, region, displayed total, comparison basis, campaign window and completed provider transaction for a dispute.
21. A future TycoonX physical-merchandise promotion is not launched under this digital-product assumption and receives its own § 11 PAngV / Article 6a review.

## Canonical/localization impact

No canonical TycoonX legal meaning needs to change solely because of this gate. The existing canonical purchase/price framework already requires genuine, non-misleading promotions, total consumer pricing where required, truthful Lifetime VIP sales windows, future-price flexibility and preservation of mandatory rights. This document adds operational precision and release tests.

Therefore this gate by itself does **not** trigger a 25-locale synchronization pass. If future legal review materially changes the canonical meaning of promotion, pricing, withdrawal, remedies, payment-channel responsibilities or entitlement treatment, update every affected localized document in the defined locale order.

## Current official reference points checked on 2026-09-11

Germany:

- PAngV § 3, total-price rule: https://www.gesetze-im-internet.de/pangv_2022/__3.html
- PAngV § 6, distance-contract price information including VAT and additional costs: https://www.gesetze-im-internet.de/pangv_2022/__6.html
- PAngV § 11, specific prior-price rule for announced reductions for goods: https://www.gesetze-im-internet.de/pangv_2022/__11.html
- UWG § 5, misleading commercial practices and § 5(5) price-reduction evidence rule: https://www.gesetze-im-internet.de/uwg_2004/__5.html

European Union:

- European Commission Notice on Article 6a of the Price Indication Directive, including the explicit clarification that the Article 6a regime does not apply to services, digital services or digital content: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021XC1229(06)

Apple:

- Schedule price changes for In-App Purchases: https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/schedule-price-changes-for-in-app-purchases/
- Set a price / storefront pricing and tax-FX adjustment model: https://developer.apple.com/help/app-store-connect/manage-app-pricing/set-a-price/

Google Play:

- Set up app prices / local-price, currency and tax handling: https://support.google.com/googleplay/android-developer/answer/6334373

Xsolla:

- Current catalog model and regional-price fields: https://developers.xsolla.com/solutions/web-shop/catalog-and-items/
- Catalog purchase limits and display-period relationship: https://developers.xsolla.com/items-catalog/catalog-features/items-catalog-number-limits/

## Release conclusion

TycoonX may change future prices, bundles, channels, regional pricing and genuine promotions, but the commercial presentation must remain truthful. The current purely digital TycoonX products should not be forced into the goods-only PAngV § 11 / Article 6a 30-day formula merely because a promotion exists, while the broader UWG/EU unfair-commercial-practice rules still prohibit fabricated price advantages and create a real evidence burden around claimed former higher prices. Total-price and distance-contract price transparency continue to apply where required. Provider price schedules, tax changes and FX movements must not be mislabeled as CK-Labs sales, and genuine Lifetime VIP windows must remain genuinely time-limited rather than artificial scarcity.