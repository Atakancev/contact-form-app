# TycoonX Price Promotion Provider-Evidence Companion Gate

**Review date: September 5, 2026**

Owner: CK-Labs

This is a narrow integration gate. It intentionally does **not** duplicate the completed substantive rules in:

- `TYCOONX_EU_PROMOTION_DARK_PATTERN_RELEASE_GATE.md` for genuine sales windows, countdowns, crossed-out/reference prices, German PAngV § 11 scope, German UWG price-history rules, C-330/23 Aldi Süd, total-price presentation, children and promotion abuse; and
- `TYCOONX_EU_PERSONALIZED_PRICING_AUTOMATED_OFFERS_RELEASE_GATE.md` for Consumer Rights Directive Article 6(1)(ea), Article 246a EGBGB, individualized automated pricing, GDPR profiling and regional-vs-personalized pricing.

Its purpose is to close the remaining operational gap between a truthful CK-Labs marketing claim and the **actual price/configuration shown by Apple, Google Play or Xsolla at the moment of purchase**.

## 1. Four-layer price truth chain

For every material TycoonX paid campaign, CK-Labs should be able to reconcile four layers:

1. **CK-Labs marketing layer**: banner, in-game card, email/push copy, webshop landing page, crossed-out price, percentage saving, countdown and eligibility wording.
2. **Provider/catalog layer**: the configured Apple product/storefront price, Google Play product/offer price, or Xsolla SKU/package/bundle/promotion configuration.
3. **Checkout layer**: the final product, quantity, currency, tax treatment and total displayed immediately before the consumer confirms payment.
4. **Authoritative transaction layer**: the provider/server transaction record used to decide whether Diamonds, one-time 30-Day VIP or Lifetime VIP may be granted, restored, reversed or corrected.

A campaign is not release-ready if CK-Labs cannot explain a material mismatch between these layers.

Marketing metadata must never override an authoritative failed, pending, canceled, refunded or reversed payment state.

## 2. German/EU legal scope checkpoint for digital promotions

Do not mechanically apply one price-history formula to every TycoonX offer.

- German **PAngV § 11** is formulated for an announced price reduction for a **Ware**. The corresponding EU Article 6a price-indication regime is a goods rule. Ordinary TycoonX Diamonds, one-time 30-Day VIP and Lifetime VIP are digital monetization products, so CK-Labs must not describe the 30-day lowest-price rule as automatically governing those digital entitlements merely because a discount is advertised.
- This goods-only scope is **not** a loophole for manufactured digital discounts. German UWG §§ 3 and 5 continue to govern misleading commercial practices involving goods and services, including digital content and digital services.
- German UWG § 5(5) creates a specific price-history risk even outside a mechanical PAngV workflow: an advertised price reduction is presumed misleading where the supposedly higher price was demanded only for an unreasonably short period, and the advertiser carries the burden of proving whether and for how long that higher price was demanded.
- German UWG Annex no. 7 always prohibits falsely stating that goods or services are generally, or on stated conditions, available only for a very limited time in order to force an immediate decision without adequate time and opportunity to decide.
- If CK-Labs later sells qualifying tangible goods, merchandise, or a materially different mixed product, perform a fresh PAngV § 11 scope analysis instead of copying the digital-entitlement conclusion.

Operational consequence: a TycoonX `was €99.99 / now €49.99`, `50% off`, `lowest price`, `best price`, or countdown claim must have a documented commercial basis even where the goods-only statutory 30-day rule is not the applicable formula.

A prior Lifetime VIP sales-window price does not automatically become a truthful `was` price for a later window. Different genuine Lifetime VIP windows may lawfully use different future prices, but any comparison with an earlier window must describe the comparison accurately and must not suggest an uninterrupted former price history that did not exist.

## 3. Provider-generated prices are not automatically CK-Labs discounts

A storefront/provider can change a displayed local amount because of currency conversion, tax treatment, local pricing conventions, provider pricing tiers or other provider-controlled mechanisms.

Do not automatically describe that movement as:

- a CK-Labs sale;
- `X% off`;
- a Lifetime VIP promotional reduction;
- a crossed-out former CK-Labs price; or
- evidence that another TycoonX channel is more expensive.

A CK-Labs savings claim needs its own truthful comparison basis under the existing promotion gate.

## 4. Apple App Store evidence

Apple currently supports storefront-specific In-App Purchase pricing and scheduled **global, temporary and custom** price changes. A temporary price change can have definite start and end dates. Depending on the pricing setup, Apple can also periodically adjust non-manually-managed storefront prices for tax or foreign-exchange changes.

For every material Apple TycoonX price campaign:

- identify the Apple product ID;
- identify the storefront/country used for the test;
- record the price-change type: global, temporary, custom, or no scheduled CK-Labs change;
- for a temporary promotion, record Apple's configured start date, end date and affected storefronts;
- record whether CK-Labs manually set that storefront price or whether it derives from Apple's pricing configuration;
- retrieve/display the current App Store purchase price rather than relying on a stale hard-coded marketing amount;
- capture the final native purchase price for a representative test;
- account for propagation timing instead of assuming every storefront changes at precisely the same instant;
- do not label an Apple tax/FX/storefront adjustment as a CK-Labs discount unless it genuinely is one;
- if CK-Labs advertises a comparison against a webshop or Google Play price, timestamp both compared prices and compare the same entitlement/bundle quantity on a like-for-like tax basis.

A scheduled future Apple price change does not retroactively reprice an already completed one-time purchase.

A TycoonX countdown tied to an Apple temporary price must be reconciled to the actual Apple price schedule. If the native storefront has not yet switched, the app must not pretend that the consumer is currently receiving a discount that the Apple checkout does not provide.

## 5. Google Play evidence

Google Play Billing now exposes one-time purchase offer details including the localized payable price, currency, offer token, full/non-discounted price where applicable, valid time window, and discount display information.

The important implementation rule is explicit: **`DiscountDisplayInfo` is display information only. Do not calculate the final Google Play offer price from its percentage or discount amount. Use the authoritative localized offer price from `getPriceAmountMicros()` / `getFormattedPrice()` for the purchase offer.**

For every material Google Play TycoonX campaign:

- identify the Google Play product ID and purchase option/offer ID where applicable;
- identify the country/storefront used for the test;
- retrieve fresh eligible `OneTimePurchaseOfferDetails` close enough to purchase that a stale cache does not become the marketing source of truth;
- record the `offerToken` used to launch the billing flow where the offer requires one;
- record any `ValidTimeWindow` and verify the marketing countdown/availability against it;
- capture `getFormattedPrice()`, `getPriceAmountMicros()`, `getPriceCurrencyCode()` and, for discounted offers where present, `getFullPriceMicros()`;
- treat `DiscountDisplayInfo` only as display metadata, never as the arithmetic source for the final payable price;
- capture the final Google Play purchase price for a representative test;
- record whether the price difference is a CK-Labs promotion, a market-specific configured price, or a provider conversion/tax effect;
- if CK-Labs compares Google Play with Apple or the TycoonX webshop, timestamp all compared prices and compare the same product/quantity and relevant tax basis.

A Google-generated local price change is not automatically a CK-Labs `sale`.

An expired or ineligible offer token must not be converted client-side into a different price or entitlement. Refresh the eligible product details and let the store-confirmed flow control the payable offer.

## 6. Xsolla promotion evidence

Xsolla currently documents discount promotions for virtual items, virtual-currency packages and bundles. Its Web Shop promotion tooling can expose regular and discounted catalog prices, promotion validity periods, eligibility limits, promo codes and multiple simultaneous discounts.

That implementation flexibility creates two specific evidence risks:

1. **a provider-returned `regular` price is not automatically a legally valid reference price for every CK-Labs crossed-out-price claim or jurisdiction**; and
2. **multiple percentage discounts are not normally additive**. Xsolla documents simultaneous discounts as being applied one by one. For example, 10%, 20% and 5% on a €10 item produce €6.84, not a simplistic `35% off = €6.50` calculation.

For each material Xsolla TycoonX promotion, retain:

- project/product/SKU or package identifier;
- promotion ID and promotion type;
- country/region and currency;
- configured start/end timestamps and time zone;
- configured discount amount/percentage;
- eligibility/user-attribute conditions, first-purchase or redemption limits where used;
- promo-code identity/rules where a code is used, without retaining unnecessary player data;
- whether multiple promotions can combine for the tested order;
- the actual arithmetic/order of stacked discounts where stacking occurs;
- any excluded-promotion configuration used to prevent stacking;
- the provider-returned regular and discounted price fields used by the surface;
- the final Xsolla checkout total;
- a screenshot or equivalent durable evidence of any timer/crossed-out price shown by a CK-Labs-controlled surface;
- a sample authoritative order/payment state used for entitlement delivery.

Do not assume Xsolla's technical ability to show a regular/discounted pair proves that the regular amount is a lawful statutory prior price or truthful marketing reference. The existing TycoonX promotion gate still controls that legal question.

If a promo code is accepted before payment but payment is never successfully completed, do not treat the mere validation step as proof of a completed paid entitlement. Reconcile redemption and entitlement state against the provider's authoritative payment/order result.

## 7. Xsolla timer and stacking test

Before a Lifetime VIP or Diamond campaign using Xsolla promotion tooling goes live:

- test the price before the campaign starts;
- test it during the campaign;
- test it immediately after the configured end;
- verify that a displayed countdown uses the same real end time and time zone as the promotion configuration;
- verify that the timer does not reset while the same unchanged offer remains available as if the deadline had not passed;
- verify the final amount when a coupon or another promotion can stack;
- verify that the user-facing stated saving matches the actual sequential discount calculation rather than an incorrect sum of percentages;
- verify that an expired/ineligible promotion does not grant the promotional entitlement or price through a stale client state.

A genuine separately supportable extension remains possible under the existing promotion gate, but the provider configuration and public deadline must be reconciled. If the same stated deadline expires and the identical offer silently continues under an automatically reset timer, treat the campaign as a failed release condition.

## 8. Cross-channel price comparisons

A claim such as `cheaper than the App Store`, `save €2 on the webshop`, or `best TycoonX price` needs more than one channel's current number.

Before publishing a cross-channel comparison, record:

- compared channel/storefront;
- country/region;
- currency;
- product/SKU and quantity;
- whether mandatory tax is included;
- retrieval timestamp for each price;
- relevant coupon/eligibility conditions;
- whether one side is a temporary promotion;
- the final payable totals used in the calculation.

Do not compare 500 Diamonds on one channel with 600 promotional Diamonds on another as if the products were identical without explaining the quantity difference.

Do not compare a tax-inclusive German checkout with a pre-tax or different-country amount and present the difference as a CK-Labs discount.

Regional-price eligibility must be assessed using objective storefront/account/payment-region evidence under the separate regional-pricing gate. Nationality by itself is not proof of regional-price abuse.

## 9. Promotion evidence model

For each material campaign, the minimum machine-readable or durable evidence should be reconstructible around the following fields, whether stored in one record or several existing systems:

- `promotion_id` / internal campaign identifier;
- product/SKU and entitlement quantity;
- channel/provider;
- country/storefront/region and currency;
- campaign start/end timestamps and time zone;
- eligibility rules and coupon/offer-token rules where applicable;
- reference-price claim type and basis;
- dated evidence of the actual reference/former price and how long it was genuinely demanded where relevant;
- final local price shown before confirmation and whether tax is included;
- provider catalog/configuration snapshot or durable equivalent;
- Apple price-schedule type/dates, Google offer token/valid window, or Xsolla promotion-period/stacking evidence as applicable;
- exact countdown source and the behavior after expiry;
- authoritative provider transaction/order identifier;
- refund/reversal/chargeback state where later relevant;
- audit timestamp and operator/configuration version.

This evidence may be distributed across provider records and CK-Labs logs. Do not duplicate personal data merely to create a promotion archive.

## 10. Stale-cache and propagation failure handling

Price changes can propagate through app clients, remote configuration, store catalogs, CDN caches and payment-provider systems at different times.

Release behavior should fail safely:

- do not grant an entitlement based only on a marketing price object;
- do not charge a different amount outside the provider's confirmed checkout;
- if CK-Labs marketing is stale but checkout is correct, stop/correct the misleading marketing and assess any affected consumer remedy rather than pretending the discrepancy did not occur;
- if a provider checkout is stale or inconsistent with the intended campaign, pause the affected campaign where feasible until the provider state is understood;
- never silently modify the confirmed price of an already completed one-time transaction after the fact.

## 11. Pending, failed, canceled, refunded and reversed payments

Promotion state and payment state are separate.

A valid coupon or sale does not turn a failed or pending payment into a completed purchase. Likewise, a promotion ending while a provider payment is pending must be resolved according to the provider's authoritative transaction result and the TycoonX Purchases & Refunds Policy, not by inventing a new post-payment price.

Entitlement delivery must remain idempotent: one authoritative successful transaction must not produce duplicate Diamonds, duplicate Lifetime VIP or a restarted 30-Day VIP clock merely because the client retries after a promotion changes.

A later provider refund, reversal or chargeback must be reconciled to the affected transaction. It must not become a reason to remove unrelated legitimate purchases or promotional grants.

## 12. Obvious configuration errors

Examples include:

- Lifetime VIP intended as €99.99 but configured as €9.99;
- a 500-Diamond package configured as 5,000 Diamonds;
- a coupon stacking repeatedly because of an integration bug;
- a EUR label paired with an amount imported from another currency;
- an expired Xsolla campaign remaining active because a cached catalog was not invalidated;
- a Google marketing card calculating an apparent discount from `DiscountDisplayInfo` while the actual store price differs;
- a Lifetime VIP countdown expiring while the same provider offer continues unchanged because the visual timer and catalog schedule use different clocks.

When this happens:

1. stop or correct the future erroneous offer;
2. preserve marketing, catalog, checkout and transaction evidence;
3. identify whether an actual completed transaction exists and which party was the contracting merchant;
4. follow the canonical obvious-error, refund and mandatory-consumer-rights rules;
5. do not unilaterally add a surcharge to an already completed one-time transaction;
6. keep any entitlement correction tied to the affected transaction rather than unrelated paid value.

## 13. Product and completed-price isolation

Provider-price reconciliation must preserve the existing product distinctions:

- **Diamonds**: an invalid promotion affecting one purchase must not erase unrelated legitimately purchased Diamonds. Purchased Diamonds do not expire solely because time passes.
- **30-Day VIP**: this remains a one-time, non-renewing 30-day entitlement. A later price change, campaign retry or restore attempt must not restart, extend, shorten or duplicate the original period unless a separate lawful remedy specifically requires an adjustment.
- **Lifetime VIP**: this remains a limited-time promotional offering available only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability for purchase. Different genuine future sales windows may use different prices. Closing a sales window does not expire an already valid Lifetime VIP.

For a completed one-time transaction, the final total price and currency shown before confirmation govern that completed purchase subject to mandatory law and valid correction/remedy rules. A later decrease does not automatically create a refund, credit or price-match right, and a later increase does not create an extra charge on the already completed purchase, except where mandatory law requires otherwise.

A consumer reporting a price mismatch is not automatically committing fraud, chargeback abuse, coupon abuse or regional-price abuse.

## 14. Minimum provider-parity regression scenarios

Before a material pricing/promotion system release, test at least:

1. Apple German storefront amount equals the amount displayed by the current native purchase flow.
2. Apple temporary-price campaign dates and storefronts match the TycoonX countdown/marketing window.
3. Apple tax/FX/storefront movement is not mislabeled as a CK-Labs sale.
4. Google Play German market amount is fetched from current eligible one-time purchase offer details rather than an obsolete cached marketing price.
5. Google final offer price comes from `getPriceAmountMicros()` / `getFormattedPrice()`, not arithmetic over `DiscountDisplayInfo`.
6. Google `offerToken` and `ValidTimeWindow` are respected and an expired offer refreshes rather than being recreated client-side.
7. Google-generated local price movement is not mislabeled as a CK-Labs sale.
8. Xsolla ordinary price with no promotion matches checkout.
9. Xsolla promotion start switches to the expected discounted total.
10. Xsolla promotion end removes the discount and any countdown expires consistently.
11. Two or more combinable Xsolla discounts produce the documented sequential/multiplicative arithmetic and user-facing saving.
12. A non-combinable or excluded promotion does not silently stack.
13. A promo code validated before payment does not grant paid value when the payment fails/cancels.
14. A cross-channel comparison uses the same product quantity, country, currency/tax basis and near-contemporaneous prices.
15. A pending payment that completes after a campaign deadline grants exactly the entitlement justified by the authoritative provider transaction, without repricing it after the fact.
16. A retry after a promotion change cannot duplicate Diamonds, restart 30-Day VIP or recreate Lifetime VIP.
17. An obvious catalog error can be paused and investigated without altering unrelated purchases.
18. A briefly inflated reference price cannot be used to manufacture a digital discount claim without evidence satisfying the applicable UWG analysis.
19. A Lifetime VIP countdown that expires actually changes/closes the stated offer rather than silently resetting the same claim.
20. A price-mismatch complaint does not itself flag the account as fraud.

## 15. Release evidence packet

For each major Diamond or VIP campaign retain a lightweight dated packet containing:

- campaign/product IDs;
- channel/storefront;
- country/region and currency;
- CK-Labs marketing copy and price claim;
- provider/catalog configuration;
- campaign start/end and time zone;
- current/reference price basis where claimed;
- current provider price retrieval timestamp;
- checkout screenshot or equivalent durable evidence;
- final total and tax treatment as shown by the provider;
- Apple scheduled-price evidence where applicable;
- Google offer-token, time-window and final-price evidence where applicable;
- Xsolla promotion stack/eligibility/redemption evidence where applicable;
- authoritative sample transaction state;
- rollback/disable procedure;
- result of the provider-parity scenarios above.

Retention must remain proportionate and follow the Privacy Policy. Do not retain unrelated player data merely to prove a price existed.

## 16. Current references reviewed September 5, 2026

Legal scope and marketing truth:

- German UWG, including §§ 3 and 5 and the Annex to § 3(3): https://www.gesetze-im-internet.de/uwg_2004/
- German PAngV § 11: https://www.gesetze-im-internet.de/pangv_2022/__11.html
- Directive 98/6/EC Article 6a and Commission Notice 2021/C 526/02, as already analyzed in the substantive promotion gate.

Provider implementation:

- Apple scheduled In-App Purchase price changes: https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/schedule-price-changes-for-in-app-purchases/
- Apple In-App Purchase price configuration: https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/set-a-price-for-an-in-app-purchase/
- Google Play Billing `OneTimePurchaseOfferDetails`: https://developer.android.com/reference/com/android/billingclient/api/ProductDetails.OneTimePurchaseOfferDetails
- Google Play Billing `DiscountDisplayInfo`: https://developer.android.com/reference/com/android/billingclient/api/ProductDetails.OneTimePurchaseOfferDetails.DiscountDisplayInfo
- Xsolla Web Shop discount promotions: https://developers.xsolla.com/solutions/web-shop/promotions/discounts/
- Xsolla promo-code promotions: https://developers.xsolla.com/xps/game-keys/promotions/promo-codes/

## 17. Release decision

A provider-mediated TycoonX campaign is **not release-ready** if:

- CK-Labs marketing and the provider checkout materially disagree and the difference is unexplained;
- a provider-generated amount is being marketed as a CK-Labs discount without a truthful basis;
- a digital `was/now` or percentage-saving claim relies on a briefly inflated or otherwise unsupported reference price;
- an Xsolla `regular` price is being treated automatically as a legally valid crossed-out/reference price;
- Xsolla stacked discounts produce a different result from the stated saving;
- Google final price is being calculated from `DiscountDisplayInfo` instead of using the current eligible offer price;
- an Apple/Google/Xsolla timer or offer-validity window disagrees with the public countdown;
- a supposedly very-limited-time offer silently resets or remains materially identical after the advertised deadline without truthful explanation;
- a cross-channel comparison uses stale, non-comparable or differently taxed amounts without explanation;
- entitlement delivery depends on a marketing/catalog price object instead of an authoritative successful transaction state; or
- correcting a pricing problem could unintentionally remove unrelated Diamonds, alter the original one-time 30-Day VIP clock or damage a valid Lifetime VIP.

This companion gate protects CK-Labs by making each promotion reproducible across the real provider stack without restating the already-completed substantive consumer-law and personalized-pricing analysis.