# TycoonX Price Promotion Provider-Evidence Companion Gate

**Review date: September 2, 2026**

Owner: CK-Labs

This is a narrow integration gate. It intentionally does **not** duplicate the completed substantive rules in:

- `TYCOONX_EU_PROMOTION_DARK_PATTERN_RELEASE_GATE.md` for genuine sales windows, countdowns, crossed-out prices, PAngV § 11 scope, C-330/23 Aldi Süd, total-price presentation, children and promotion abuse; and
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

## 2. Provider-generated prices are not automatically CK-Labs discounts

A storefront/provider can change a displayed local amount because of currency conversion, tax treatment, local pricing conventions, provider pricing tiers or other provider-controlled mechanisms.

Do not automatically describe that movement as:

- a CK-Labs sale;
- `X% off`;
- a Lifetime VIP promotional reduction;
- a crossed-out former CK-Labs price; or
- evidence that another TycoonX channel is more expensive.

A CK-Labs savings claim needs its own truthful comparison basis under the existing promotion gate.

## 3. Apple App Store evidence

Apple supports storefront-specific In-App Purchase pricing and scheduled price changes. Depending on the pricing setup, Apple can also update prices in other storefronts for tax or foreign-exchange changes.

For every material Apple TycoonX price campaign:

- identify the Apple product ID;
- identify the storefront/country used for the test;
- record whether CK-Labs manually set that storefront price or whether it derives from Apple's pricing configuration;
- retrieve/display the current App Store purchase price rather than relying on a stale hard-coded marketing amount;
- capture the final native purchase price for a representative test;
- do not label an Apple tax/FX/storefront adjustment as a CK-Labs discount unless it genuinely is one;
- if CK-Labs advertises a comparison against a webshop or Google Play price, timestamp both compared prices and compare the same entitlement/bundle quantity on a like-for-like tax basis.

A scheduled future Apple price change does not retroactively reprice an already completed one-time purchase.

## 4. Google Play evidence

Google Play supports market-specific local prices and may calculate local prices from a base price using currency conversion, tax treatment and local pricing patterns according to its current product configuration.

For every material Google Play TycoonX campaign:

- identify the Google Play product ID;
- identify the country/storefront used for the test;
- retrieve fresh eligible product/price information close enough to purchase that a stale cache does not become the marketing source of truth;
- capture the final Google Play purchase price for a representative test;
- record whether the price difference is a CK-Labs promotion, a market-specific configured price, or a provider conversion/tax effect;
- if CK-Labs compares Google Play with Apple or the TycoonX webshop, timestamp all compared prices and compare the same product/quantity and relevant tax basis.

A Google-generated local price change is not automatically a CK-Labs `sale`.

## 5. Xsolla promotion evidence

Xsolla currently documents discount promotions for virtual items, virtual-currency packages and bundles. Its current Web Shop documentation also describes regular and discounted prices in catalog/cart responses, promotion periods, eligibility conditions, discount stacking behavior and promotion timers in supported Site Builder flows.

That implementation flexibility creates a specific evidence risk: **a provider-returned `regular` price is not automatically a legally valid reference price for every CK-Labs crossed-out-price claim or jurisdiction**.

For each material Xsolla TycoonX promotion, retain:

- project/product/SKU or package identifier;
- promotion ID and promotion type;
- country/region and currency;
- configured start/end timestamps and time zone;
- configured discount amount/percentage;
- eligibility/user-attribute conditions, if any;
- whether multiple promotions can combine for the tested order;
- the actual arithmetic/order of stacked discounts where stacking occurs;
- the provider-returned regular and discounted price fields used by the surface;
- the final Xsolla checkout total;
- a screenshot or equivalent durable evidence of any timer/crossed-out price shown by a CK-Labs-controlled surface;
- a sample authoritative order/payment state used for entitlement delivery.

Do not assume Xsolla's technical ability to show a regular/discounted pair proves that the regular amount is a lawful statutory prior price or truthful marketing reference. The existing TycoonX promotion gate still controls that legal question.

## 6. Xsolla timer and stacking test

Before a Lifetime VIP or Diamond campaign using Xsolla promotion tooling goes live:

- test the price before the campaign starts;
- test it during the campaign;
- test it immediately after the configured end;
- verify that a displayed countdown uses the same real end time as the promotion configuration;
- verify that the timer does not reset while the same unchanged offer remains available as if the deadline had not passed;
- verify the final amount when a coupon or another promotion can stack;
- verify that the user-facing stated saving matches the actual discount calculation;
- verify that an expired/ineligible promotion does not grant the promotional entitlement or price through a stale client state.

A genuine separately supportable extension remains possible under the existing promotion gate, but the provider configuration and public deadline must be reconciled.

## 7. Cross-channel price comparisons

A claim such as `cheaper than the App Store`, `save €2 on the web shop`, or `best TycoonX price` needs more than one channel's current number.

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

## 8. Stale-cache and propagation failure handling

Price changes can propagate through app clients, remote configuration, store catalogs, CDN caches and payment-provider systems at different times.

Release behavior should fail safely:

- do not grant an entitlement based only on a marketing price object;
- do not charge a different amount outside the provider's confirmed checkout;
- if CK-Labs marketing is stale but checkout is correct, stop/correct the misleading marketing and assess any affected consumer remedy rather than pretending the discrepancy did not occur;
- if a provider checkout is stale or inconsistent with the intended campaign, pause the affected campaign where feasible until the provider state is understood;
- never silently modify the confirmed price of an already completed one-time transaction after the fact.

## 9. Pending, failed, canceled, refunded and reversed payments

Promotion state and payment state are separate.

A valid coupon or sale does not turn a failed or pending payment into a completed purchase. Likewise, a promotion ending while a provider payment is pending must be resolved according to the provider's authoritative transaction result and the TycoonX Purchases & Refunds Policy, not by inventing a new post-payment price.

Entitlement delivery must remain idempotent: one authoritative successful transaction must not produce duplicate Diamonds, duplicate Lifetime VIP or a restarted 30-Day VIP clock merely because the client retries after a promotion changes.

## 10. Obvious configuration errors

Examples include:

- Lifetime VIP intended as €99.99 but configured as €9.99;
- a 500-Diamond package configured as 5,000 Diamonds;
- a coupon stacking repeatedly because of an integration bug;
- a EUR label paired with an amount imported from another currency;
- an expired Xsolla campaign remaining active because a cached catalog was not invalidated.

When this happens:

1. stop or correct the future erroneous offer;
2. preserve marketing, catalog, checkout and transaction evidence;
3. identify whether an actual completed transaction exists and which party was the contracting merchant;
4. follow the canonical obvious-error, refund and mandatory-consumer-rights rules;
5. do not unilaterally add a surcharge to an already completed one-time transaction;
6. keep any entitlement correction tied to the affected transaction rather than unrelated paid value.

## 11. Product isolation

Provider-price reconciliation must preserve the existing product distinctions:

- **Diamonds**: an invalid promotion affecting one purchase must not erase unrelated legitimately purchased Diamonds.
- **30-Day VIP**: a later price change, campaign retry or restore attempt must not restart, extend, shorten or duplicate the original one-time 30-Day VIP period unless a separate lawful remedy specifically requires an adjustment.
- **Lifetime VIP**: selected genuine sales windows may use different future prices; closing a sales window does not expire an already valid Lifetime VIP, and a later cheaper/higher window does not retroactively reprice the old completed transaction except where mandatory law requires otherwise.

A consumer reporting a price mismatch is not automatically committing fraud, chargeback abuse, coupon abuse or regional-price abuse.

## 12. Minimum provider-parity regression scenarios

Before a material pricing/promotion system release, test at least:

1. Apple German storefront amount equals the amount displayed by the current native purchase flow.
2. Apple tax/FX/storefront movement is not mislabeled as a CK-Labs sale.
3. Google Play German market amount is fetched from current product information rather than an obsolete cached marketing price.
4. Google-generated local price movement is not mislabeled as a CK-Labs sale.
5. Xsolla ordinary price with no promotion matches checkout.
6. Xsolla promotion start switches to the expected discounted total.
7. Xsolla promotion end removes the discount and any countdown expires consistently.
8. Two combinable Xsolla discounts produce the documented arithmetic and user-facing saving.
9. A non-combinable coupon does not silently stack.
10. A cross-channel comparison uses the same product quantity, country, currency/tax basis and near-contemporaneous prices.
11. A pending payment that completes after a campaign deadline grants exactly the entitlement justified by the authoritative provider transaction, without repricing it after the fact.
12. A retry after a promotion change cannot duplicate Diamonds, restart 30-Day VIP or recreate Lifetime VIP.
13. An obvious catalog error can be paused and investigated without altering unrelated purchases.
14. A price-mismatch complaint does not itself flag the account as fraud.

## 13. Release evidence packet

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
- Xsolla promotion stack/eligibility evidence where applicable;
- authoritative sample transaction state;
- rollback/disable procedure;
- result of the provider-parity scenarios above.

Retention must remain proportionate and follow the Privacy Policy. Do not retain unrelated player data merely to prove a price existed.

## 14. Current provider references reviewed September 2, 2026

- Apple In-App Purchase pricing: https://developer.apple.com/in-app-purchase/
- Apple scheduled In-App Purchase price changes: https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/schedule-price-changes-for-in-app-purchases/
- Google Play price setup: https://support.google.com/googleplay/android-developer/answer/6334373
- Xsolla Web Shop discount promotions: https://developers.xsolla.com/solutions/web-shop/promotions/discounts/

The substantive German/EU legal references remain maintained in the existing promotion and personalized-pricing gates rather than being duplicated here.

## 15. Release decision

A provider-mediated TycoonX campaign is **not release-ready** if:

- CK-Labs marketing and the provider checkout materially disagree and the difference is unexplained;
- a provider-generated amount is being marketed as a CK-Labs discount without a truthful basis;
- an Xsolla `regular` price is being treated automatically as a legally valid crossed-out/reference price;
- stacked discounts produce a different result from the stated saving;
- a timer and the provider promotion end time disagree;
- a cross-channel comparison uses stale, non-comparable or differently taxed amounts without explanation;
- entitlement delivery depends on a marketing/catalog price object instead of an authoritative successful transaction state; or
- correcting a pricing problem could unintentionally remove unrelated Diamonds, alter the original one-time 30-Day VIP clock or damage a valid Lifetime VIP.

This companion gate protects CK-Labs by making each promotion reproducible across the real provider stack without restating the already-completed substantive consumer-law and personalized-pricing analysis.