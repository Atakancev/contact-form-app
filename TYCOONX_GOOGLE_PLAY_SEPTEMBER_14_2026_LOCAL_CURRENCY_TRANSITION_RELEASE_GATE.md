# TycoonX Google Play September 14, 2026 Local-Currency Transition Release Gate

**Last reviewed: September 9, 2026**

Owner: CK-Labs  
Scope: Google Play pricing and distribution changes scheduled for September 14, 2026, including Argentina, Azerbaijan, Uzbekistan, Ethiopia, TycoonX Diamonds, one-time 30-Day VIP, limited-window Lifetime VIP, local currencies, taxes, FX, promotions, historical transactions, refunds, support and accounting.

## Purpose

This is a narrow dated companion to `TYCOONX_PRICING_CATALOG_CONFIGURATION_ERROR_RELEASE_GATE.md`, `TYCOONX_GOOGLE_PLAY_BILLING_CONFIG_COUNTRY_PRIVACY_RELEASE_GATE.md`, and the existing Google purchase/refund gates. It does not create a new general pricing doctrine and does not materially change the canonical TycoonX Terms of Service or Purchases & Refunds Policy.

Google has announced that starting **September 14, 2026**:

- existing USD prices for apps, subscriptions and in-app products in **Argentina, Azerbaijan and Uzbekistan** will automatically convert to local currencies;
- **Ethiopia** will gain distribution support for paid apps and in-app products, with prices converting from USD to **ETB**; and
- existing products will remain available for purchase during the transition.

TycoonX must treat this as a provider pricing/distribution cutover, not as a new purchase product and not as evidence that a player changed region dishonestly.

## P0 release rules

### 1. Capture a pre-cutover evidence snapshot

Before September 14, preserve a proportionate operational snapshot of the Google Play configuration for every active TycoonX paid product that can be sold in the affected markets. Where the current product model exposes them, record:

- `productId`;
- purchase option and offer identity;
- country availability;
- currently configured/displayed price and currency;
- Diamond quantity or VIP entitlement mapped to the product;
- whether the product is active for new purchase;
- whether Lifetime VIP is intentionally open or closed for new sale; and
- the capture timestamp.

This snapshot is configuration evidence. It is not a replacement for the authoritative Google record of any completed transaction.

### 2. Reconcile the actual post-cutover Google configuration

After the cutover, re-query Google Play Console/current catalog state and compare what Google actually applied in Argentina, Azerbaijan, Uzbekistan and Ethiopia.

Do not recreate Google's converted prices with CK-Labs' own FX formula and assume the result must match. Google states that Play converts base prices to local currency, may add tax in selected countries, and applies locally relevant pricing patterns and valid exchange rates. The provider-applied catalog and purchase flow therefore control the current Google-side price.

If a post-cutover price or country is ambiguous, stale or missing, fail closed for the affected optional purchase path until the current Google configuration is clear. Do not improvise a price from an old USD cache.

### 3. Invalidate stale USD display caches near checkout

TycoonX-controlled Android purchase screens must refresh current Google product/offer pricing close to checkout rather than continuing to display a pre-cutover USD value as though it were current.

Google notes that price, SKU and distribution changes can take a few hours to appear on Google Play. During that propagation period:

- a mismatch between an old TycoonX screen and the current Google billing sheet is first a transition/configuration issue;
- do not treat the mismatch as player fraud, hacking, regional-price abuse, promotion abuse or entitlement abuse;
- do not grant a product from stale client price metadata;
- preserve any material misleading-display complaint for review; and
- where the current offer cannot be determined safely, stop that purchase path cleanly rather than guessing.

### 4. Historical USD transactions remain historical transactions

A completed Google Play purchase made before the currency transition keeps its provider-confirmed historical transaction price and currency in the TycoonX payment ledger.

The September 14 conversion must not:

- retroactively replace an old transaction currency with the new local currency;
- create an extra charge because the converted future price is higher;
- create an automatic refund, credit or price-match because the converted future price is lower;
- recalculate a completed transaction using today's FX rate; or
- alter the quantity of Diamonds or the duration/type of VIP that the valid historical purchase actually bought.

A later local-currency purchase is a separate transaction. Completed one-time purchases remain subject to the canonical rule that later price, tax, FX, currency, regional-price or promotional changes do not retroactively reprice them except where mandatory law requires a different remedy.

### 5. Refunds and reversals follow the original provider transaction

A refund, chargeback, reversal or void concerning a pre-cutover purchase must reconcile against that original Google transaction and the authoritative Google refund/void state.

Do not calculate the entitlement correction from today's local catalog price. Do not create a second refund merely because the same product now has a different currency. Discovery through RTDN, Voided Purchases or other Google records must converge on one transaction-specific correction state.

A provider-approved refund or currency change is not by itself proof of hacking, friendly fraud, regional-price abuse or account compromise.

### 6. Provider currency conversion never changes TycoonX product meaning

The currency transition changes how Google prices a purchase in affected markets. It does not change the TycoonX product that the SKU represents.

- A purchased Diamond bundle must grant the same configured transaction-specific Diamond quantity unless CK-Labs separately and lawfully changes that bundle for future purchases.
- Purchased Diamonds do not expire merely because time passes or the store currency changes.
- One-time 30-Day VIP remains exactly one non-renewing entitlement lasting **30 consecutive days** from valid activation.
- A currency conversion cannot restart, extend, pause or convert 30-Day VIP into a recurring subscription.
- Lifetime VIP remains a limited-time promotional one-time entitlement available for new purchase only during selected genuine CK-Labs sales windows, may be withdrawn from sale, may never return, and creates no expectation of continuous availability.

### 7. Ethiopia market opening must not reopen Lifetime VIP

New Google Play support for paid apps and in-app products in Ethiopia is not permission to open every historical TycoonX product there.

Before the cutover, confirm the intended Ethiopia distribution state for each paid SKU. In particular:

- if the genuine Lifetime VIP sales window is closed, every Google purchase option, offer or bundle capable of creating a new Lifetime VIP sale must remain disabled in Ethiopia;
- a newly supported country must not bypass the CK-Labs sales-window control;
- a genuine historical Lifetime VIP purchase remains restorable/reconcilable without reopening new sales; and
- ordinary active products such as an available Diamond bundle may be enabled only through the intended current Google distribution configuration.

A provider eligibility change is not an entitlement grant. Server-side purchase verification and exactly-once fulfillment remain required.

### 8. Regional currency is not proof of residence or abuse

A Google local-currency result, Play Country value, IP location, account language, payment country and legal residence are different concepts.

TycoonX must not infer nationality or permanent residence merely because Google presents a local currency. A player seeing a different currency after provider migration, relocation, travel or a Play account change is not automatically committing regional-price abuse.

The separate `BillingConfig` gate remains controlling: where `getBillingConfigAsync()` is used, its country data is ephemeral and must not be turned into a persistent location or fraud profile.

### 9. Promotion and reference-price claims need a fresh legal check

A provider currency migration does not itself create a discount.

After the cutover, review TycoonX-controlled promotional surfaces in the affected markets. Do not automatically carry forward a crossed-out USD price, percentage discount, countdown or "was" price into a new local currency unless the claim is truthful and legally supportable in that market.

For German consumer-facing TycoonX-controlled price advertising, **UWG § 5** continues to prohibit misleading commercial practices, including misleading claims capable of affecting a transactional decision. Where CK-Labs itself offers or advertises a consumer service with a price, **PAngV § 3** requires the total price and requires the total price to be highlighted if a price is broken into components.

Do not over-apply the goods-specific prior-price rule to ordinary TycoonX digital services merely because a currency conversion occurred. The existing EU promotion/dark-pattern and German price/promotion gates remain controlling.

### 10. Taxes and final consumer totals must not be hard-coded

Google states that its market-specific pricing can add tax in selected countries and apply country-specific pricing patterns. TycoonX must therefore not hard-code a global rule that every numeric Google catalog value is tax-inclusive or tax-exclusive.

For each affected market:

- use the current Google-provided checkout/catalog presentation appropriate to the integration;
- test the final billing flow before treating a displayed value as the payable total;
- do not add a second CK-Labs tax amount on top of a provider total merely because the currency changed; and
- keep any CK-Labs-controlled German total-price display compliant with mandatory German consumer-price rules.

### 11. Accounting normalization must not overwrite transaction evidence

CK-Labs may normalize revenue to EUR or another reporting currency for internal accounting. That conversion must be stored separately from the customer transaction evidence.

Do not overwrite:

- original provider amount;
- original provider currency;
- order/purchase token identity;
- transaction timestamp; or
- transaction-specific entitlement mapping.

Accounting FX and customer transaction FX are different records. A later accounting-rate change must not change what the player paid.

### 12. Keep Google, Apple and Xsolla price states separate

The September 14 change is a Google Play pricing/distribution event. It does not by itself change Apple App Store or Xsolla webshop prices, currencies, taxes, availability or refund state.

Support and reconciliation tools must identify the purchase channel before explaining a price/currency difference. A Google local-currency conversion cannot be copied into Apple or Xsolla transaction history as though the providers shared one authoritative price catalog.

## Required regression scenarios

Before treating the September 14 cutover as commercially complete, demonstrate at minimum:

1. **Argentina stale USD cache:** TycoonX has an old USD display while Google now supplies a local-currency price; the app refreshes the current Google price and does not accuse the player of manipulation.
2. **Azerbaijan conversion:** the provider-applied local price is preserved separately from a pre-cutover USD configuration snapshot.
3. **Uzbekistan conversion:** a completed pre-cutover USD purchase remains recorded in its original currency after the new local-currency catalog is live.
4. **Ethiopia ordinary product:** an intentionally active Diamond SKU becomes purchasable only after current Google distribution and authoritative purchase verification are confirmed.
5. **Ethiopia Lifetime VIP closed:** the new market does not reopen a closed Lifetime VIP sales window.
6. **Historical USD refund:** a refunded pre-cutover purchase reconciles against its original Google transaction instead of today's converted catalog price.
7. **30-Day VIP:** currency conversion does not change the exact 30-consecutive-day non-renewing entitlement.
8. **Diamond quantity:** a currency conversion does not silently change the Diamond quantity mapped to an already defined product.
9. **Propagation lag:** a few-hours catalog mismatch is treated as a provider/configuration transition issue, not player fraud.
10. **Promotion carry-over:** a crossed-out USD price is not automatically converted into a local-currency discount claim without a truthful reference-price basis.
11. **Old screenshot:** support receives a pre-cutover USD screenshot and does not treat it alone as evidence that the player fabricated a receipt or abused regional pricing.
12. **Accounting conversion:** finance normalizes a local-currency sale into EUR without overwriting the original customer transaction amount/currency.
13. **Channel isolation:** a Google price conversion does not rewrite Apple or Xsolla historical prices.
14. **Future price change:** a later local-price decrease creates no automatic price match for a completed one-time purchase, and a later increase creates no extra charge, except where mandatory law requires otherwise.
15. **Tax presentation:** each affected market's Google checkout is tested rather than applying one global tax-included/tax-excluded assumption.

## Current legal and platform checkpoint

Reviewed against official material available on September 9, 2026:

- Google Play Developers Newsletter, August 2026: September 14, 2026 local-currency conversion for Argentina, Azerbaijan and Uzbekistan; new Ethiopia paid-app/in-app-product support with USD to ETB conversion; existing products remain available during the transition.
- Google Play Console Help, "Set up your app's prices": Play converts base prices into market-specific local currency, can add tax in selected countries, applies locally relevant pricing patterns and valid exchange rates, and notes that price/SKU/distribution changes can take a few hours to propagate.
- German PAngV § 3: where applicable to CK-Labs' own consumer-facing offer/price advertising, the total price must be given and highlighted if broken into components.
- German UWG § 5: misleading commercial practices capable of affecting a consumer's transactional decision remain prohibited.

Primary references:

- https://developer.android.com/newsletter/play-monthly/2026/content/august
- https://support.google.com/googleplay/android-developer/answer/6334373
- https://www.gesetze-im-internet.de/pangv_2022/__3.html
- https://www.gesetze-im-internet.de/uwg_2004/__5.html

## Founder-protective interpretation

This gate does not promise one worldwide TycoonX price and does not stop CK-Labs from changing Google Play prices, Diamond bundle prices/content, VIP prices, regional prices, currencies or genuine future promotions for future purchases. It prevents a provider currency migration from corrupting historical transaction evidence, reopening Lifetime VIP, changing entitlement meaning, manufacturing a false discount, or turning normal provider transition behavior into unsupported abuse findings.

The safest rule is simple: preserve old transactions as they occurred, use Google's current authoritative price and distribution state for new Google purchases, keep entitlement identity separate from currency, keep provider channels separate, and preserve all mandatory consumer remedies and non-waivable rights.