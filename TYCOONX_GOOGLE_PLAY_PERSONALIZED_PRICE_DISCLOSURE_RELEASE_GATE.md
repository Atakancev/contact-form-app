# TycoonX Google Play Personalized Price Disclosure Release Gate

**Review date: September 8, 2026**

Owner: CK-Labs

Scope: Google Play purchases of TycoonX Diamond bundles, one-time 30-Day VIP, limited-window Lifetime VIP, and any future one-time paid TycoonX product where CK-Labs uses automated decision-making to personalize a consumer-facing price or discount.

## Purpose and relationship to existing doctrine

This is a narrow Google Play implementation gate. It does not replace or restate the substantive rules in `TYCOONX_EU_PERSONALIZED_PRICING_AUTOMATED_OFFERS_RELEASE_GATE.md`, `TYCOONX_EU_GERMAN_PRICE_PROMOTION_PERSONALIZATION_RELEASE_GATE.md`, the canonical TycoonX Purchases & Refunds Policy, or the regional-pricing gates.

The existing TycoonX rule remains: ordinary country/storefront pricing, taxes, FX, provider conversions, generally available promotions, and different genuine Lifetime VIP sales-window prices are not automatically personalized pricing. A materially different compliance path applies where a consumer's real-money price or discount is personalized on the basis of automated decision-making.

This gate closes the Google Play-specific implementation gap around `BillingFlowParams.Builder.setIsOfferPersonalized(...)` and stale `ProductDetails` handling. It is not a statement that TycoonX currently uses personalized pricing.

## P0 release default

Until CK-Labs deliberately implements the substantive personalized-pricing gate, **do not enable automated personalized pricing or personalized automated discounts for TycoonX paid products**.

If a Google Play offer cannot be reliably classified as personalized or non-personalized before `launchBillingFlow()`, do not silently rely on the API default. Block that personalized offer or fall back to a genuinely non-personalized eligible offer whose price and eligibility are independently valid.

Do not use `setIsOfferPersonalized(false)` as a legal conclusion merely because it is the SDK default.

## 1. Current Google Play disclosure switch

Google's current Play Billing integration guidance for apps distributed to users in the European Union says to use `setIsOfferPersonalized()` when calling `launchBillingFlow()` to disclose that an item's price was personalized using automated decision-making.

The current platform behavior is:

- `setIsOfferPersonalized(true)` causes the Google Play purchase UI to include the personalized-price disclosure;
- `setIsOfferPersonalized(false)` omits that Google Play disclosure; and
- the default value is `false`.

Google expressly directs developers to assess Consumer Rights Directive 2011/83/EU Article 6(1)(ea) to determine whether the offered price is personalized.

TycoonX release rule: where the actual Google Play price offered to an EU consumer is personalized on the basis of automated decision-making and the disclosure duty applies, the `BillingFlowParams` used for that actual purchase flow must set `setIsOfferPersonalized(true)` before `launchBillingFlow()`.

A true flag must not be set mechanically on every EU purchase. A false flag must not be used to hide an offer that is in fact personalized.

## 2. Classification must follow the actual pricing logic

The Google flag follows the real offer-selection logic, not the label that CK-Labs gives the campaign.

Usually not personalized merely because prices differ:

- a German Google Play storefront price differs from a Turkish storefront price;
- VAT, tax treatment, currency, provider conversion, or Google pricing configuration creates a local price difference;
- every eligible consumer in the same market receives the same genuine sale price during the same campaign;
- Lifetime VIP has a different truthful price in a later genuine sales window;
- a future price change applies prospectively to all eligible users in the same defined market.

Requires personalized-pricing review before launch:

- a Diamond price selected from the player's purchase history or spending profile;
- a 30-Day VIP discount selected because the player previously refused an offer;
- a Lifetime VIP price selected from inferred willingness to pay;
- a churn model that gives a lower real-money price only to users predicted to leave;
- a model that charges a higher price to users predicted to spend more;
- automated behavior-based coupon, discount, or offer selection that produces an individualized price.

Do not call a behavior-based personalized discount a generic promotion merely to keep `setIsOfferPersonalized(false)`.

## 3. Google Play UI does not erase CK-Labs duties

The Google Play disclosure is an important provider-controlled checkout signal. It does not prove by itself that every CK-Labs pre-contract information duty has been satisfied.

For German consumer distance contracts, current Article 246a § 1(1) sentence 1 no. 6 EGBGB requires, where applicable, notice that the price was personalized on the basis of automated decision-making. The existing TycoonX personalized-pricing gate also preserves the relevant BGB § 312d and § 312j checkout presentation requirements.

Accordingly:

- use Google's required personalized-price flag where applicable;
- separately verify whether a CK-Labs-controlled screen, offer card, webshop surface, or other pre-contract step needs its own compliant disclosure;
- do not hide the only CK-Labs-controlled disclosure in the Privacy Policy or Terms;
- preserve mandatory total-price, tax, withdrawal, conformity, update, liability, refund, and other consumer rights;
- do not tell a consumer that Google alone is responsible for a price that CK-Labs' own automated model selected.

Provider involvement can allocate operational roles, but it does not create a waiver of non-waivable German or EU rights.

## 4. Fresh ProductDetails and offer parity

Google currently advises against caching `ProductDetails` because stale objects can cause `launchBillingFlow()` failures. For one-time products, Google returns user-eligible offers through the current product-details query.

For a TycoonX personalized offer:

1. query current eligible product/offer details close enough to purchase that a stale client object is not the source of truth;
2. identify the exact product, purchase option/offer, localized price, currency, and `offerToken` where applicable;
3. determine whether the price for that exact offer is personalized under the approved rule;
4. set `setIsOfferPersonalized(true)` or `false` consistently with that determination;
5. launch the Google Play flow using the same current eligible offer; and
6. grant entitlement only after the normal authoritative Google purchase verification succeeds.

Do not display one personalized price in TycoonX, launch a stale or different Google offer, and then rely on the personalization flag to excuse the mismatch.

An expired or ineligible personalized offer must not be reconstructed client-side. Refresh the eligible product details or stop the purchase flow.

## 5. Fail closed when classification and checkout disagree

Treat these as release-blocking inconsistencies:

- the personalization engine says `personalized=true` but the launched Google flow uses `setIsOfferPersonalized(false)` or the default;
- the personalization engine says no personalized price was used but the app mechanically sets the flag true for every EU purchase;
- the displayed TycoonX price or offer ID differs materially from the current Google offer sent to `launchBillingFlow()`;
- the offer-selection rule changes after the UI is rendered but before purchase and the disclosure state is not recalculated;
- the app cannot reconstruct which personalization rule and flag state produced a disputed transaction.

The safe fallback is to stop the affected personalized offer or show a valid non-personalized offer. Do not guess.

## 6. Lifetime VIP sales-window isolation

Lifetime VIP remains a limited-time promotional offering available for new purchase only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability.

If personalized Lifetime VIP pricing is ever approved:

- the underlying Lifetime VIP sales window must independently be open for that market and channel;
- automated pricing cannot reopen, extend, or create a hidden purchase route after the genuine sales window closes;
- a personalized offer token or cached product object does not override a closed CK-Labs sales window;
- different personalized prices must not be marketed through fake scarcity, fake countdowns, or misleading reference-price claims;
- a valid Lifetime VIP purchased during a genuine authorized flow remains the purchased entitlement even if the pricing model later changes;
- a later lower Lifetime VIP price does not automatically create a refund, credit, or price-match right, except where mandatory law requires otherwise; and
- a later higher price does not create an extra charge on an already completed one-time Lifetime VIP purchase.

A personalized-price disclosure is not permission to keep Lifetime VIP continuously available.

## 7. Diamonds and one-time 30-Day VIP remain separate products

Personalized-price implementation must not alter product semantics.

**Diamonds** remain the verified quantity purchased in the authoritative transaction. A pricing/disclosure defect does not by itself authorize CK-Labs to delete unrelated legitimately purchased Diamonds. Purchased Diamonds do not expire solely because time passes.

**30-Day VIP** remains a one-time, non-renewing entitlement for exactly 30 consecutive days. A different offer price, repeated billing-flow launch, restore attempt, or corrected personalization flag must not restart, duplicate, shorten, or extend the entitlement clock unless a separate lawful remedy specifically requires an adjustment.

The personalization flag is disclosure metadata for the purchase flow. It is not an entitlement identifier.

## 8. Refund, chargeback and abuse isolation

A missing, incorrect, or disputed personalization flag can create a compliance problem. It is not automatically evidence that the player committed fraud, hacking, exploiting, chargeback abuse, coupon abuse, entitlement abuse, account compromise, or regional-price abuse.

Similarly, accepting a price that Google Play and TycoonX genuinely offered does not by itself prove regional-price abuse merely because another user paid more.

Any entitlement correction, refund, reversal, suspension, or termination still requires its own authoritative provider/account evidence and lawful basis. Mandatory consumer remedies remain available where applicable.

Do not respond to a disclosure/configuration error by confiscating unrelated paid value or inventing a real-world debt.

## 9. Evidence and privacy minimization

For each released personalized Google Play pricing rule, retain enough evidence to reconstruct compliance without retaining unnecessary profiling data:

- product ID and offer/purchase-option identifier;
- country/storefront or relevant market classification;
- final localized price and currency shown by Google Play;
- personalization rule/model version or immutable decision-rule identifier;
- whether personalization applied to that offer;
- the boolean value supplied through `setIsOfferPersonalized(...)`;
- Google offer token where applicable;
- timestamp and app/Billing Library version;
- authoritative purchase token/order linkage after successful payment; and
- release version of the consumer-facing disclosure logic.

Do not copy raw behavioral histories, sensitive attributes, support conversations, security data, or full profiling inputs into payment logs merely to prove that a boolean flag was set. Existing GDPR purpose-limitation, minimization, retention, access-control, and security rules remain applicable.

## 10. Price-change and promotion isolation

The existing TycoonX pricing rules remain unchanged:

- CK-Labs may change future Diamond bundle prices/content, VIP prices, regional prices, currencies, and genuine future promotions for future purchases;
- prices may differ by platform, country, and channel;
- tax, VAT, FX, and provider pricing changes can alter local future prices;
- the final total price shown before confirmation governs a completed one-time transaction, subject to mandatory law and lawful obvious-error correction;
- completed one-time purchases are not retroactively repriced merely because a personalization rule, regional price, or campaign later changes;
- a later price decrease does not automatically create a refund, credit, or price-match right; and
- a later increase does not create an extra charge on an already completed one-time purchase.

Promotional claims, countdowns, crossed-out prices, and discount claims must remain truthful. Personalization disclosure does not cure a misleading promotion.

If CK-Labs later introduces a recurring paid TycoonX product, it requires its own then-current subscription, renewal, price-change, consent, notice, cancellation, and platform compliance review. Do not copy these one-time-product rules onto a recurring product.

## 11. Minimum regression matrix

Before any personalized Google Play price is enabled, test at least:

1. non-personalized German regional price: correct local price, `setIsOfferPersonalized(false)`, no false personalization claim;
2. personalized German Diamond discount: current eligible offer, `setIsOfferPersonalized(true)`, Play disclosure present before confirmation;
3. personalized 30-Day VIP discount: disclosure present and one 30-consecutive-day entitlement starts only after verified purchase;
4. personalized Lifetime VIP offer while the genuine sales window is open: disclosure present and exactly one verified Lifetime entitlement is granted;
5. Lifetime VIP offer after the genuine sales window closes: purchase path blocked even if a cached personalized offer still exists;
6. stale `ProductDetails`: refresh rather than launching the stale personalized offer;
7. personalization model changes after screen render: offer and disclosure state are recomputed before launch;
8. true personalization with the SDK default left false: test fails closed;
9. ordinary VAT/FX/storefront difference: not misclassified as personalized merely because the local price differs;
10. generally available sale in one market: not misclassified merely because another country has a different price;
11. behavior-based coupon: treated as personalized where the approved legal classification requires it;
12. failed or pending Google payment: no Diamonds or VIP granted merely because the disclosure was shown;
13. completed purchase followed by later lower personalized price: no automatic price match or duplicate value;
14. consumer complains about missing disclosure: no automatic fraud/abuse flag and no unrelated entitlement confiscation;
15. evidence replay: support can reconstruct product, final price, rule version, flag state, offer token and authoritative transaction without exposing unnecessary profiling data; and
16. rollback: CK-Labs can disable personalized pricing and return to valid non-personalized offers without changing already completed purchase prices or valid entitlements.

## 12. Current legal and platform checkpoint

Reviewed against official material available on September 8, 2026:

- Google Play Billing integration guidance, last updated September 1, 2026, including `setIsOfferPersonalized()`, its true/false behavior, its default `false` value, EU distribution guidance, and Google's warning against stale `ProductDetails` caching;
- Directive 2011/83/EU Article 6(1)(ea), requiring disclosure where the price was personalized on the basis of automated decision-making;
- current German Article 246a § 1(1) sentence 1 no. 6 EGBGB, requiring the corresponding information where applicable; and
- the existing TycoonX EU/German personalized-pricing, promotion, regional-pricing, payment-verification, refund, entitlement, and mandatory-rights gates.

Primary references:

- https://developer.android.com/google/play/billing/integrate
- https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011L0083-20220528
- https://www.gesetze-im-internet.de/bgbeg/art_246a__1.html

## Founder-protective interpretation

This gate does not prohibit lawful TycoonX regional pricing, country-specific prices, provider conversions, tax/FX changes, genuine promotions, or different Lifetime VIP prices in different genuine sales windows. It prevents a more sensitive automated individualized pricing system from silently shipping with Google's disclosure flag left at its default, with stale offers, or with weak evidence.

If CK-Labs ever chooses to use automated personalized Google Play pricing, the defensible path is simple: classify the real pricing logic honestly, use the current eligible Google offer, set the platform disclosure flag correctly, preserve only necessary evidence, keep Lifetime VIP sale windows genuine, and never turn a disclosure/configuration mistake into an unrelated entitlement confiscation or player-fraud accusation.