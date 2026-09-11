# TycoonX German/EU Promotional Pricing and Reference Price Gate

Status: commercial and legal implementation gate
Last reviewed: 2026-09-11
Scope: Germany and EU consumer-facing TycoonX pricing, with Apple App Store, Google Play and Xsolla channel separation

## Purpose

This gate governs price advertising for TycoonX Diamonds, one-time non-renewing 30-Day VIP, limited-time promotional Lifetime VIP, bundles, coupons, regional prices, temporary sales, crossed-out prices, percentage discounts, countdowns and similar commercial claims.

The goal is to let CK-Labs change future prices and run genuine promotions without accidentally creating a misleading reference price, fake urgency, retroactive price promise or inconsistent cross-channel claim.

This gate does not create a permanent standard price for any TycoonX product. CK-Labs may change future prices, bundle contents, currencies, regional prices and genuine promotions subject to applicable law and the provider rules for the channel being used.

## 1. German total-price baseline

Under § 3 PAngV, an entrepreneur offering goods or services to consumers or advertising them with prices must state the total price. If a price is broken into components, the total price must be highlighted.

Under § 6 PAngV, for distance contracts the consumer-facing price information must additionally state that the requested prices include VAT and other price components and whether additional delivery, shipping or other costs apply. Any additional costs that can reasonably be calculated in advance must be stated in amount.

For TycoonX this means that a German consumer should not be shown a headline price that excludes mandatory VAT or other mandatory price components and then discover the real payable amount only at the final payment step.

Where Apple, Google Play or Xsolla controls tax calculation or the final local checkout amount, CK-Labs must keep its own pre-checkout price claims consistent with the provider-controlled total and must surface an updated total before the consumer becomes bound if the provider total changes.

## 2. Important limit of the German 30-day prior-price rule

§ 11 PAngV is expressly a rule for announced price reductions for `Waren` (goods). It requires the lowest total price used for consumers during the preceding 30 days when a covered price reduction for goods is announced.

The European Commission's guidance on Article 6a of the Price Indication Directive likewise explains that this specific prior-price rule applies to goods and does not apply to services, including digital services, or digital content.

TycoonX Diamonds, VIP access and other purely digital in-game products should therefore not automatically be treated as physical goods subject to the § 11 PAngV 30-day prior-price formula merely because a promotion exists.

Do not turn that distinction into a loophole. Misleading price-reduction advertising remains restricted by the UWG and general EU unfair-commercial-practice rules.

If CK-Labs later sells physical merchandise, or a promotion combines a digital TycoonX product with physical goods, perform a fresh § 11 PAngV analysis for the physical-goods element instead of reusing the digital-product assumption.

## 3. German UWG still governs TycoonX digital price claims

Under § 5 UWG, a commercial practice can be misleading where it contains false or deceptive information about a special price advantage, the price, how the price is calculated or the conditions under which the product or service is supplied.

For TycoonX, claims such as these require a real and supportable basis:

- `20% off`;
- `sale`;
- `special price`;
- `launch price`;
- `weekend offer`;
- `only EUR 9.99 instead of EUR 19.99`;
- a crossed-out former price;
- `lowest price`;
- `exclusive discount`;
- `last chance`;
- `ends tonight`; and
- any countdown that creates an impression that a price opportunity is about to disappear.

Under § 5(5) UWG, advertising a price reduction is presumed misleading if the higher reference price was demanded only for an unreasonably short period. If it is disputed whether and for how long the higher price was demanded, the advertiser bears the burden of proof.

The safe TycoonX rule is therefore simple: never invent a reference price merely so a discount looks larger.

## 4. Crossed-out price rules

A crossed-out price must have a truthful, documented meaning.

Before publishing a crossed-out price, record what the crossed-out amount represents, for example:

- the genuine previous CK-Labs price for the same product in the same channel and market;
- a genuinely scheduled future or former platform price, where the presentation is not misleading;
- another clearly identified comparison basis that is lawful and meaningful to the consumer.

Do not silently use any of these as if they were the player's former same-channel price:

- a price from another country;
- a price from another currency;
- a different Apple, Google Play or Xsolla channel price;
- a different Diamond bundle size;
- a different VIP duration;
- a different Lifetime VIP sales window;
- a tax-exclusive amount compared with a tax-inclusive amount; or
- a price that was configured but never genuinely offered to consumers.

If the comparison basis needs an explanation to avoid misleading the player, place the explanation close enough to the price claim that the player can understand it before the purchase decision.

## 5. Percentage and amount-off claims

A percentage or fixed-amount discount must use a consistent and supportable denominator.

Example: if a 500-Diamond package changes to 600 Diamonds for the same money, do not automatically call the new package `20% cheaper`. Product quantity and price are different variables. State the actual package and price, or calculate a comparison only where the basis is clear and mathematically valid.

Example: if 30-Day VIP is EUR 5.99 in one channel and EUR 6.49 in another because of provider pricing, do not call EUR 5.99 a `discount` from EUR 6.49 unless CK-Labs is intentionally making a clear, lawful cross-channel comparison and identifies the basis.

Round percentage claims conservatively. Do not round a 19.1% reduction to `20% off` if that would overstate the actual advantage.

## 6. Lifetime VIP sale windows

Lifetime VIP is a limited-time promotional offering available only during selected genuine sales windows.

CK-Labs may:

- open a genuine Lifetime VIP sales window;
- close that sales window;
- withdraw Lifetime VIP from sale;
- decide that it never returns;
- offer it again in a later genuine sales window; and
- use a different lawful price in a later genuine sales window.

None of those actions creates an obligation to keep Lifetime VIP continuously available.

However, each sales window and urgency claim must be genuine. Do not use an automatically resetting countdown that tells every visitor that the sale will end in a few hours when there is no real corresponding sales deadline.

If a genuine Lifetime VIP sales window is extended, document the reason and update the public end time. Repeated unexplained extensions can undermine an `ends today`, `last chance` or equivalent urgency claim.

Do not present a prior Lifetime VIP sales-window price as the permanent `regular price` unless that description is factually supportable.

The Lifetime VIP name does not promise that TycoonX itself, CK-Labs, Apple, Google, Xsolla, or any individual feature will operate forever. Mandatory consumer remedies for non-conformity, material modification or lawful service discontinuation remain intact.

## 7. 30-Day VIP

TycoonX 30-Day VIP is a one-time, non-renewing 30-day entitlement.

A discount or promotion must not make it look like an auto-renewing subscription. The checkout and surrounding offer should continue to identify the one-time payment and the 30-day duration clearly.

Do not compare a 30-Day VIP price with a hypothetical monthly recurring price that TycoonX does not actually offer and label the difference as a consumer saving.

If a future recurring product is ever introduced, it requires a separate compliant recurring-price, renewal, cancellation and price-change flow. Do not reuse this one-time product gate as subscription compliance.

## 8. Diamonds

Diamonds are TycoonX virtual currency, not cash, a bank deposit or an investment.

Diamond bundle promotions may change future bundle quantity and future price. Keep quantity and price visible together so a player can understand what the promotion actually changes.

Do not fabricate a `value` or crossed-out real-money amount for bonus Diamonds unless the comparison has a real, documented pricing basis.

Where a bundle advertises `bonus Diamonds`, define the baseline quantity against which the bonus is calculated. Do not continually inflate the supposed standard quantity solely to manufacture a bonus claim.

A later lower Diamond price does not automatically create a refund, credit or price-match right for an earlier completed purchase, except where mandatory law requires otherwise. A later increase does not create an additional charge on an already completed one-time purchase.

## 9. Coupons and targeted discounts

A genuine coupon may use eligibility conditions such as campaign, country, channel, user segment or redemption limit where lawful and clearly communicated when material.

Do not call a coupon `for everyone` if a material undisclosed eligibility rule excludes part of the audience.

Do not advertise a single-use coupon while designing the backend to fail after payment without preserving a clear remedy for the consumer.

Individual price reductions are excluded from the specific § 11 PAngV rule for goods, but individualized and targeted discounts remain subject to general misleading-practice rules and, where automated decision-making personalizes the monetary price, the separate TycoonX personalised-pricing gate.

Promotion abuse, coupon farming, VPN manipulation, account cycling, false eligibility data or technical exploitation can be restricted where the rules are clear and enforcement is proportionate. Correct abuse at the affected promotion or entitlement source. Do not use coupon abuse as a reason to erase unrelated legitimate purchases.

## 10. Regional pricing is not automatically a discount

Different lawful prices in different countries or channels do not automatically mean one player received a discount and another paid a surcharge.

Regional prices can differ because of:

- local purchasing-power strategy;
- Apple or Google storefront configuration;
- Xsolla regional-price configuration;
- local currency;
- VAT or other tax treatment;
- foreign-exchange movement;
- provider pricing conventions;
- lawful channel economics; or
- a genuine local promotion.

Do not describe an ordinary regional price as `20% off` merely because another country currently has a higher converted price.

Do not create fake regional comparisons by converting foreign prices with an arbitrary FX rate while ignoring taxes or provider price points.

Regional-price abuse can be investigated and restricted where supported by provider rules and applicable law, but a user merely seeing another region's different price is not by itself evidence of fraud.

## 11. Apple App Store channel

Apple currently allows developers to set In-App Purchase prices by storefront and to schedule temporary price changes. Apple can automatically generate comparable storefront prices from a base country or region, taking account of certain taxes, foreign exchange rates and local pricing conventions. Apple can also adjust applicable non-base storefront prices when taxes or foreign exchange rates change unless the developer manually manages those storefronts.

For TycoonX:

- treat the Apple storefront's live payable amount as authoritative for the Apple transaction;
- do not promise that a manually copied website price will always equal Apple's local price;
- when advertising an Apple-specific temporary sale outside the App Store, verify the scheduled Apple price and dates before publishing the campaign;
- do not present Apple's tax/FX repricing as if CK-Labs had necessarily launched a promotional discount; and
- keep the TycoonX product identity and entitlement source tied to the Apple transaction.

A CK-Labs advertisement does not become truthful merely because Apple technically accepts the configured price.

## 12. Google Play channel

Google Play currently supports market-specific local prices calculated from a developer-set base price, with currency conversion, locally relevant pricing patterns and tax treatment depending on configuration and market.

For TycoonX:

- verify the live Google Play price in the target country before advertising a Google-specific promotion;
- do not assume the converted Google price equals Apple or Xsolla;
- do not describe provider tax or FX movement as a CK-Labs promotional reduction unless it truly is one; and
- preserve the Google order/purchase provenance for any later refund, reversal or entitlement correction.

If Google Play changes its pricing or billing rules, update the commercial configuration and this gate rather than promising a fixed cross-platform price.

## 13. CK-Labs webshop and Xsolla

Xsolla currently supports regional prices for virtual items and virtual-currency packages. Its documentation explains that where regional prices are not configured, the payment interface can use a default price and convert it using current exchange-rate and pricing rules, and that Pay Station can include applicable taxes in the user's country currency presentation.

For the TycoonX webshop:

- the CK-Labs product page, promotion banner and Xsolla checkout must refer to the same intended product;
- a stale CK-Labs banner must not continue showing an expired price after the Xsolla promotion ended;
- a change caused by Xsolla tax, FX or local pricing must not be falsely labeled as a CK-Labs discount;
- the final total shown before confirmation governs the completed transaction subject to mandatory law and legally relevant error correction; and
- Xsolla refund, reversal and chargeback events must reconcile only the entitlement source created by the affected transaction.

Xsolla's ability to configure a display period for an item can support a genuine Lifetime VIP sales window, but a configured timer does not by itself make a marketing claim legally non-misleading. The actual public representation and actual availability must match.

## 14. Countdown and urgency claims

Every countdown must have a defined event behind it.

Before publishing one, record:

- what ends when the timer reaches zero;
- which SKU, country and channel are affected;
- the authoritative start and end timestamps;
- the time zone;
- whether the item disappears, the price changes or only a coupon expires;
- what happens to a checkout already opened before expiry; and
- who can approve an extension.

Do not silently reset the same `last chance` countdown for each new visitor.

Do not say `Lifetime VIP will never return` unless CK-Labs has actually decided that it will never return. The safer standing description is that the offer is available only in selected sales windows, may be withdrawn and may never return.

## 15. Obvious pricing and catalog errors

TycoonX may correct genuine pricing, catalog and configuration errors prospectively and may take proportionate action on an obviously erroneous transaction where applicable law and the controlling payment-provider rules permit it.

Do not use an `obvious error` label merely because CK-Labs later regrets a genuine published price.

Preserve evidence of:

- configured SKU and price;
- consumer-facing price shown;
- provider-confirmed amount;
- tax and currency;
- campaign state;
- transaction time; and
- the specific configuration error.

Do not retroactively charge a higher amount to a completed one-time transaction merely because the intended catalog price was higher. Any correction to an already completed transaction requires its own provider and legal basis.

## 16. Future price changes

CK-Labs may change prices for future purchases, including:

- Diamond bundle prices and contents;
- 30-Day VIP prices;
- Lifetime VIP prices in future genuine sales windows;
- regional prices;
- supported currencies;
- channel-specific prices; and
- future promotions.

Completed purchases are not retroactively repriced merely because a later price changes.

A later decrease does not automatically create a refund, credit or price-match right. A later increase does not create an additional charge on a completed one-time purchase. Mandatory law remains unaffected.

## 17. Promotion records

For each material monetary campaign, preserve enough evidence to reconstruct what was actually offered without relying on memory or a mutable current catalog.

Recommended record fields include:

- campaign identifier;
- product/SKU;
- product quantity or VIP duration;
- channel;
- country/region;
- currency;
- normal or comparison price and its factual basis;
- promotional price;
- percentage/amount claim shown;
- start and end timestamps and time zone;
- coupon code or eligibility rule where applicable;
- tax presentation;
- relevant Apple/Google/Xsolla price configuration snapshot or export;
- consumer-facing copy or screenshot;
- extension/cancellation history and reason; and
- reviewer/approval timestamp.

Do not collect unrelated personal data merely to prove a promotion existed.

## 18. Source-specific entitlement isolation

Pricing and promotion disputes must remain transaction-specific.

Examples:

- refunding one discounted Xsolla Diamond purchase must not erase Diamonds bought separately through Apple;
- reversing one promotional 30-Day VIP must not remove another valid 30-Day VIP source;
- a coupon-abuse finding on a Diamond purchase must not cancel an independently valid Lifetime VIP; and
- a pricing error on one Lifetime VIP transaction must not alter another player's valid purchase solely because the same campaign existed.

Authoritative provider transaction records and TycoonX entitlement provenance should determine the correction, not a mutable aggregate VIP flag or current Diamond balance alone.

## 19. P0 release gates for promotions

Do not publish or activate a TycoonX monetary promotion if any of the following is true:

1. The reference price has no documented factual basis.
2. The advertised percentage does not match the actual comparison.
3. A crossed-out price comes from another market/channel but is presented as the user's previous price.
4. A countdown has no real expiration event.
5. A Lifetime VIP `last chance` claim is configured to reset automatically without a genuine new sales decision.
6. The CK-Labs price and provider checkout price materially conflict and the difference is not clearly resolved before the binding order.
7. A German consumer headline price omits mandatory price components that must be included.
8. The promotion makes 30-Day VIP look recurring.
9. The promotion describes regional tax/FX movement as a CK-Labs discount when it is not one.
10. Entitlement provenance is insufficient to reverse only the affected transaction if the payment later fails or is refunded.

## 20. QA and tabletop scenarios

1. Lifetime VIP is sold for EUR 29.99 in one genuine window and EUR 24.99 in a later genuine window.
2. A banner says `50% off` but the alleged former price was never genuinely offered.
3. A crossed-out price was configured for only a few minutes before the sale.
4. A `sale` countdown reaches zero and the price genuinely reverts.
5. A countdown reaches zero and silently restarts for every visitor.
6. A genuine Lifetime VIP sale is extended once for a documented operational reason.
7. The same sale is repeatedly extended while every banner says `final chance`.
8. Apple automatically changes a local price because of FX movement.
9. Google Play shows a different local price from Apple.
10. Xsolla converts a default USD catalog price into local currency.
11. Xsolla has a specific German regional price that differs from Italy.
12. The German CK-Labs banner still shows yesterday's price after the provider schedule changed.
13. A 500-Diamond bundle becomes 600 Diamonds at the same price.
14. A Diamond promotion claims `bonus 100` against a documented 500-Diamond baseline.
15. A coupon applies only to first-time webshop purchasers and that limitation is clearly disclosed.
16. A personalized automated discount is introduced and triggers the separate personalised-pricing review.
17. A player uses a VPN to seek another region's price and provider rules require investigation.
18. A price is clearly a configuration error rather than a genuine campaign.
19. A developer regrets a genuine low sale price after transactions completed and incorrectly calls it a configuration error.
20. One discounted Xsolla purchase is refunded while unrelated Apple value remains intact.
21. One of two stacked one-time 30-Day VIP purchases is reversed.
22. A Diamond refund occurs on an account that also has valid Lifetime VIP.
23. A German consumer sees a tax-exclusive headline and a higher mandatory total only at confirmation.
24. A promotional claim uses another country's converted price as the `regular` price without explanation.
25. An old app version caches an expired promotion after the live catalog changed.
26. Apple, Google or Xsolla changes pricing behaviour and TycoonX must update copy/configuration without retroactively repricing completed purchases.
27. A future recurring VIP product is proposed and is blocked from launch until separate recurring-price rules exist.

## 21. Canonical English and localization sync trigger

This file is an implementation and commercial-review gate. It does not replace the canonical TycoonX Terms or Purchases & Refunds Policy.

The canonical framework already permits future lawful price, bundle, regional, currency and promotion changes, distinguishes completed purchases from future prices, and preserves mandatory consumer rights.

If CK-Labs later adds a new player-facing promise such as a permanent standard price, guaranteed price match, permanent discount, fixed future Lifetime VIP price, recurring renewal price or new refund entitlement, review the canonical English documents first. If their legal meaning materially changes, update all affected localized documents and `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md` in the required locale order.

## 22. Official references checked on 2026-09-11

Germany:

- PAngV § 3, total price: https://www.gesetze-im-internet.de/pangv_2022/__3.html
- PAngV § 6, distance-contract price information: https://www.gesetze-im-internet.de/pangv_2022/__6.html
- PAngV § 11, prior price for announced reductions for goods: https://www.gesetze-im-internet.de/pangv_2022/__11.html
- UWG § 5, misleading commercial practices including price advantages and price reductions: https://www.gesetze-im-internet.de/uwg_2004/__5.html
- UWG § 5a, misleading omissions: https://www.gesetze-im-internet.de/uwg_2004/__5a.html
- UWG § 5b, material information including total price: https://www.gesetze-im-internet.de/uwg_2004/__5b.html

European Union:

- Commission Notice, guidance on Article 6a of the Price Indication Directive, including the clarification that the specific prior-price rule does not apply to services, digital services or digital content: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=oj:JOC_2021_526_R_0002

Apple:

- Set a price for an In-App Purchase: https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/set-a-price-for-an-in-app-purchase/
- Schedule price changes for In-App Purchases: https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/schedule-price-changes-for-in-app-purchases/

Google Play:

- Set up app prices: https://support.google.com/googleplay/android-developer/answer/6334373

Xsolla:

- Local prices: https://developers.xsolla.com/doc/shop-builder/features/pricing-policy/
- Virtual items and regional prices: https://developers.xsolla.com/items-catalog/items-type/virtual-items/
- Item display periods: https://developers.xsolla.com/items-catalog/catalog-features/limiting-display-time/
