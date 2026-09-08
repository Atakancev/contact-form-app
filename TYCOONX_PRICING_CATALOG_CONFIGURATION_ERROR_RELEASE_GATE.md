# TycoonX Pricing, Catalog & Configuration Error Release Gate

**Last reviewed: September 8, 2026**

Owner: CK-Labs  
Scope: TycoonX Diamonds, one-time 30-Day VIP, limited-window Lifetime VIP, Apple App Store purchases, Google Play purchases, the official TycoonX webshop using Xsolla, promotions, regional prices, currencies, taxes, cached prices, product mapping, duplicate grants, and mistaken catalog configuration.

## Purpose

TycoonX must be able to correct genuine pricing, catalog, currency, tax, SKU, quantity, entitlement, and checkout configuration mistakes without pretending that every mistake automatically destroys a completed consumer contract.

The founder-protective rule is simple: **classify the error first, identify the contracting party and contract-formation point, preserve authoritative transaction evidence, then use the legally available correction path for that transaction.**

Do not use a generic “obvious error” clause as a substitute for the applicable contract, consumer, payment-provider, refund, withdrawal, conformity, or mistake-of-declaration rules.

This gate does not change the canonical TycoonX Terms or Purchases & Refunds Policy. It operationalizes their existing rule that obvious pricing or configuration errors may be corrected only where legally permitted and subject to any already binding contract and mandatory rights.

## P0 release rule: never collapse different error types into one state

For every incident, record which of these actually happened:

1. **non-authoritative display/cache error**: an old or local screen showed the wrong price but the legally relevant checkout showed the correct final total before confirmation;
2. **catalog configuration error before contract formation**: the wrong price, currency, bundle size, SKU, product title, eligibility rule, purchase option, offer, or promotion was published but no binding transaction was yet concluded;
3. **completed transaction at the configured price**: Apple, Google Play, Xsolla, or another contracting merchant confirmed a purchase at the mistaken configured price;
4. **product-mapping or fulfillment error**: the customer paid for one product but TycoonX delivered another product or the wrong quantity;
5. **duplicate or excess entitlement grant**: the payment was correct, but retries, a race condition, webhook replay, restore bug, or server defect granted more value than the valid transaction purchased;
6. **tax/currency/provider adjustment**: the local price changed because of VAT, tax, foreign exchange, provider price-tier, storefront, purchase-option, or provider experiment rules rather than a CK-Labs typo;
7. **promotion/coupon misuse**: the displayed offer itself was genuine but the user bypassed an eligibility, redemption, region, or technical restriction through fraud or abuse; or
8. **account compromise or payment fraud**: the purchase may be valid in provider records while the legitimate account owner disputes authorization.

These categories can lead to different legal and operational outcomes. Never label all of them “fraud” and never use one generic clawback routine for all of them.

## 1. Identify the contracting party and contract-formation point first

Before canceling, refunding, repricing, or removing value, identify:

- whether the relevant contract is with CK-Labs, Apple, Google Play, an Xsolla entity, or another merchant;
- the exact offer, purchase option where applicable, and product identifier;
- what the user saw at the legally relevant final confirmation step;
- whether the transaction was only initiated/pending or was already completed;
- the provider-confirmed price and currency;
- whether the provider later refunded, reversed, voided, canceled, or invalidated the transaction; and
- which TycoonX entitlement was actually delivered.

Do not assume that a TycoonX banner, cached client price, provider product page, payment authorization, order creation, successful return URL, or server-side entitlement grant all represent the same legal moment.

The existing TycoonX German Terms-incorporation and checkout gates remain controlling for contract formation and evidence.

## 2. German mistake law is a legal path, not an automatic magic clause

Where German law governs a CK-Labs declaration and an already concluded contract contains a genuine declaration mistake, **BGB § 119** can provide a right to avoid a declaration where its statutory conditions are met.

Operational safeguards:

- do not state that every wrong price is automatically void;
- do not state that a consumer must accept a higher replacement price merely because CK-Labs made a mistake;
- determine whether there was actually a legally relevant mistake in the declaration and whether CK-Labs is the party entitled to invoke it;
- where avoidance is relied upon, **BGB § 143** requires an avoidance declaration to the proper counterparty;
- under **BGB § 121**, avoidance based on §§ 119/120 must be made without culpable delay after CK-Labs learns of the ground for avoidance; and
- **BGB § 122** can create reliance-damage exposure where its conditions apply, subject to the statutory exception where the other person knew or negligently failed to know the reason for invalidity/avoidability.

A price being “obviously too low” can be relevant evidence, including to the BGB § 122 knowledge question, but **obviousness alone is not a replacement for the statutory analysis and required declaration**.

Never build a support macro that says “our Terms make every erroneous completed price void.”

## 3. No unilateral retroactive repricing of a completed one-time purchase

A completed one-time TycoonX purchase must not silently become a different completed price after the fact.

If a valid completed transaction is not lawfully canceled, avoided, refunded, reversed, or otherwise corrected under the applicable rules:

- the completed transaction price remains the transaction price;
- a later catalog increase does not create an additional charge;
- a later catalog decrease does not automatically create a price-match or refund right; and
- CK-Labs must not debit another card, wallet, Diamond balance, or future payment to collect the difference without a separate lawful basis and authorization.

If the legally available correction path is cancellation/avoidance plus refund, refund the transaction through the proper channel and unwind only the affected transaction/value to the lawful extent. Do not secretly keep the original payment and also remove the paid entitlement.

## 4. A wrong catalog price is different from a wrong fulfillment

If checkout clearly sold **500 Diamonds for €4.99** and TycoonX credited only 50 Diamonds, this is primarily a delivery/conformity problem. The cure is normally to deliver the missing transaction-specific value, not to declare that the catalog must have meant 50 Diamonds.

If checkout clearly sold **Lifetime VIP** and TycoonX accidentally activated one-time 30-Day VIP, this is primarily a product-mapping/fulfillment defect. Do not use an internal SKU mistake to silently downgrade the consumer to 30-Day VIP.

If checkout clearly sold one-time **30-Day VIP** but a server retry accidentally created a second 30-Day entitlement, the excess grant can be treated as a technical duplicate rather than a second paid purchase.

If a valid Lifetime VIP was attached twice because of restore or webhook replay, consolidate to the one valid Lifetime VIP entitlement instead of pretending two purchases existed.

The separate TycoonX digital-product conformity/remedies gate controls non-supply and defective fulfillment.

## 5. Duplicate and excess grants can be corrected without rewriting the purchase

A correct transaction can still produce incorrect in-game value because of:

- duplicate webhooks;
- retries after timeouts;
- race conditions;
- client restore loops;
- duplicated store notifications;
- accidental admin/support grants;
- server migration duplication; or
- entitlement reconciliation bugs.

Where reliable records show that one valid transaction was fulfilled more than once, CK-Labs may remove or consolidate the duplicate value so the account keeps what was actually purchased, subject to mandatory law and the circumstances of any downstream transfer or consumption.

Do not change the historical provider transaction price merely because the entitlement ledger was wrong.

Do not remove unrelated purchased Diamonds, unrelated 30-Day VIP time, or a separate valid Lifetime VIP as a shortcut for balancing the account.

## 6. Apple App Store handling

Apple currently records the transaction price and currency for an In-App Purchase, including the configured price at the purchase date and applicable offer/quantity information. Apple also permits scheduled temporary, global, and custom price changes for future transactions.

Release rules:

- retain the verified Apple transaction/original transaction identifiers and transaction-time price/currency evidence where available;
- do not use today's App Store Connect price as proof of what a historical transaction cost;
- do not treat a later scheduled Apple price change as permission to retroactively reprice an earlier completed purchase;
- if an Apple transaction is pending, do not grant paid value merely because an earlier screen showed a favorable price;
- if Apple confirms a completed transaction, reconcile the corresponding TycoonX entitlement exactly once; and
- if Apple refunds or revokes the transaction, reconcile the transaction-specific entitlement through the existing Apple refund gate.

Where the payment contract or refund decision is controlled by Apple, do not send the consumer a CK-Labs-only “price mistake cancellation” message that contradicts the actual Apple transaction/refund state.

## 7. Google Play handling

Google Play's current one-time-product object model separates **what is sold** from **how it is sold**. A one-time product can have multiple purchase options, and a purchase option can have multiple offers. The purchase option defines how the entitlement is granted, its price, and regional availability; an offer can modify the linked purchase-option price, for example through a discount or pre-order. Product ID alone is therefore not sufficient evidence of the price or eligibility that applied to a particular checkout.

Current `queryProductDetailsAsync()` can return multiple user-eligible one-time offers. `QueryProductDetailsResult` can also return `UnfetchedProduct` entries explaining products that could not be fetched. Google advises against caching `ProductDetails` because stale objects can cause `launchBillingFlow()` failures.

Release rules:

- fetch eligible current `ProductDetails` near checkout rather than relying on a stale locally cached price or offer token;
- if a product is `UnfetchedProduct`, has no currently eligible safe purchase option/offer, or the catalog response is incomplete, do not resurrect a stale cached offer merely to keep checkout available;
- model and preserve the relevant `productId`, purchase-option identity, selected offer token/offer identity, storefront or region context, formatted displayed price/currency, purchase token/order state, and TycoonX entitlement mapping as distinct data;
- use the selected offer token for the actual eligible one-time offer where required and do not choose an offer merely because it is the first or cheapest entry returned by an API list;
- do not grant value while a purchase remains pending;
- verify the completed purchase token/state before fulfillment;
- treat the purchase token/order/provider state as separate from the mutable current catalog; and
- use Google's refund/void state for the provider-side reversal path instead of inventing a client-only cancellation state.

A stale local price should not override the actual Google Play billing sheet that clearly showed the final payable price before confirmation. Conversely, if Google Play actually completed the transaction at the configured mistaken offer price, do not silently charge or claw back the price difference without the legally applicable correction/refund path.

### 7A. Multiple purchase options, offers, old clients, and fallback behavior

The current Google Play model can legitimately expose different purchase options for the same product in different regions or under different sales configurations. This is not automatically a pricing error. TycoonX must not compare a completed transaction to another purchase option for the same product and conclude that the player “underpaid.”

When multiple eligible offers exist, TycoonX must apply a deterministic product/merchandising rule and launch the exact offer token that matches what was shown to the player. List order is not a contractual pricing rule. A backend or client must not silently substitute the cheapest, most expensive, first returned, or previously cached offer.

Google currently states that one-time-product queries return only user-eligible offers. If the user nevertheless attempts to purchase an offer for which they are no longer eligible, Google Play may inform the user and allow purchase using the underlying purchase-option offer instead. TycoonX must therefore:

- not promise that a discount remains available merely because the app previously displayed it;
- not grant a discounted quantity or promotional entitlement based only on the stale offer token if the completed provider transaction used a different eligible purchase path;
- treat the final provider purchase sheet/confirmed transaction as the relevant provider-side purchase evidence while preserving any separate misleading-advertising or mandatory-consumer issue caused by stale TycoonX copy; and
- never use such a fallback as evidence of player fraud, regional-price abuse, or entitlement abuse.

For Play Billing Library 7 or older purchase flows, Google currently requires at least one **Buy** purchase option to be marked backwards compatible, and only Buy purchase options can be backwards compatible. Backwards compatibility is a client-compatibility mechanism, not a promise that an old price or promotion remains available forever.

Release rules for old clients:

- do not keep an obsolete promotional Buy purchase option active solely so an old client can continue obtaining a historic discount;
- if the current product cannot be sold correctly and lawfully to an old client, fail closed or require an app update rather than exposing a stale/mismatched price;
- closing a Lifetime VIP sales window must also close/deactivate every Play purchase option or offer that could still sell Lifetime VIP, including any backwards-compatible Buy path, without affecting restoration of a genuine historical purchase; and
- unsupported/old-client behavior is an implementation issue, not proof that a player attempted abuse.

Google also supports a **Rent** purchase option that grants access for a provider-defined fixed rental period. Current TycoonX Diamonds, one-time 30-Day VIP, and Lifetime VIP must not be configured as Google Play Rent products merely because one of them has a duration. The 30-Day VIP duration comes from the TycoonX product contract: it is one non-renewing entitlement for 30 consecutive days. Converting it to Google Rent semantics, or converting Lifetime VIP to a rental, would be a material product change requiring separate legal/product review and localization synchronization before release.

Multi-quantity is a separate feature. Where TycoonX ever enables Google multi-quantity for an eligible consumable Diamond purchase option, use the dedicated payment-entitlement gate. Do not assume that every discount offer supports the same multi-quantity behavior.

### 7B. Purchase-option price experiments and genuine price differences

Google Play price experiments for one-time products operate on selected purchase options. A user can therefore legitimately receive an experiment price that differs from another user, another region, another purchase option, or the later post-experiment price.

Treat a properly configured experiment price as genuine provider pricing unless evidence shows a separate configuration error. Do not retroactively reprice a completed experiment transaction when the experiment ends or a winning price is applied. If the price is personalized using automated decision-making in a situation where the EU disclosure rule applies, the separate TycoonX personalized-pricing gate and Google's `setIsOfferPersonalized()` flow remain controlling.

Price-experiment, purchase-option, offer, region, tax, and FX differences must not be collapsed into an automatic fraud score.

### 7C. Multi-product one-time bundles are one provider purchase with multiple line items

Google Play's current **multi-product for one-time products** feature can combine several one-time products into one purchase flow. This changes fulfillment and refund shape enough that TycoonX must not treat a multi-product purchase like a normal single-SKU purchase.

Do not enable a Google Play multi-product one-time bundle for TycoonX unless the client, backend, refund reconciliation, support tooling, and catalog evidence all understand the bundle as one provider purchase containing multiple product line items.

Current Google constraints must be preserved:

- subscriptions cannot be included in a multi-product one-time bundle;
- products classified as digital content and products classified as a service cannot be mixed in the same bundle;
- every bundled product must be available for immediate delivery, so a pre-order product cannot be placed in the bundle;
- the multi-product feature does not support the **Rent** purchase option; and
- all `ProductDetails` used for the purchase flow must belong to the same app.

Do not assume that Diamonds, 30-Day VIP, and Lifetime VIP may be combined merely because all are TycoonX products. Confirm the Google Play product classification and current platform eligibility for every proposed bundle before publication. If a combination is not currently supported, fail closed rather than changing the legal/product meaning to fit the catalog.

Fulfillment rules:

- one multi-product purchase is still represented by a single Google Play `Purchase`, but it is associated with all products acquired in that transaction;
- on the client, enumerate the complete `Purchase.getProducts()` result rather than reading only one product ID;
- on the server, retrieve the authoritative purchase and enumerate the complete `lineItems` from the current Google Play Developer API response;
- preserve the shared purchase token/order identity plus each line item's `productId` and relevant purchase-option/offer/quantity state;
- grant each verified included TycoonX entitlement exactly once, while keeping all line items linked to the same provider purchase; and
- never infer a missing bundle item from the displayed bundle name or local catalog if the authoritative Google response does not confirm it.

For RTDN, Google currently states that the `sku` field is not provided for multi-product one-time purchases because the purchase represents more than one product. A multi-product RTDN must therefore trigger authoritative Google Play Developer API reconciliation. Do not interpret a missing RTDN `sku` as an unknown purchase, and do not guess the bundle contents from a cached client screen.

Refund and correction rules:

- Google currently does **not** support a player or developer refund for only one item inside a multi-product one-time purchase; refund/cancellation is for the entire multi-product purchase;
- when Google authoritatively refunds or cancels that purchase, reconcile all entitlements associated with that provider purchase, subject to transaction-specific consumption, downstream-value, conformity, and mandatory-rights rules;
- do not invent a provider-side item-level partial refund that Google does not support;
- if a mandatory consumer remedy is triggered by a defect affecting only one included product, route the case through the applicable legal/provider remedy analysis rather than falsely representing that Google can refund only that line item;
- refunded multi-product orders can be discovered through Voided Purchases and RTDN, so all discovery paths must converge on one purchase-level correction state and must not claw back the same bundle twice; and
- a refund/cancellation event is not automatically proof that the player committed fraud, chargeback abuse, regional-price abuse, hacking, or entitlement abuse.

Financial and reporting rules:

- Google currently reports separate financial rows for the individual products in a multi-product purchase while using the same Order ID for the related transaction rows;
- do not count those itemized financial rows as separate customer purchases merely because the report has multiple lines; and
- reconcile charges, fees, taxes, refunds, and TycoonX entitlement delivery against the shared provider order plus its line-item set.

TycoonX product invariants still control. Purchased Diamonds do not expire merely because time passes. One-time 30-Day VIP remains one non-renewing entitlement lasting **30 consecutive days**. Lifetime VIP remains a limited-time promotional one-time entitlement available only during selected genuine sales windows. **Any Google bundle or offer that contains Lifetime VIP is itself a Lifetime VIP sales path and must be deactivated when that genuine sales window closes**, while a genuine historical completed purchase remains restorable/reconcilable without reopening the sale.

## 8. Xsolla webshop handling

For the official TycoonX webshop, preserve the actual Xsolla order/transaction record, item/SKU, amount, currency, tax presentation, merchant/contracting entity where applicable, successful-payment state, refund/reversal state, and the matching TycoonX entitlement action.

Release rules:

- a successful redirect from checkout is not enough to prove payment;
- `order_paid` / payment evidence must reconcile idempotently to exactly one entitlement grant under the project's actual Xsolla webhook configuration;
- `order_canceled` / refund or other authoritative reversal evidence must reconcile the same transaction rather than removing arbitrary account value;
- if a pricing/catalog incident requires a refund, use the transaction-specific Xsolla/provider process where that channel controls the refund; and
- do not assume that returning an error to a refund webhook can veto a provider-initiated refund.

Xsolla merchant-of-record involvement does not authorize CK-Labs to rewrite the provider-confirmed transaction price in the TycoonX ledger after the fact.

## 9. Cached, stale, unofficial, or manipulated displays

A screenshot can be useful evidence, but it is not automatically the authoritative contract record.

Examples:

- a cached TycoonX screen from yesterday shows €5.99 but the current legally relevant checkout clearly shows €7.99 before confirmation: the old cached screen does not by itself create a completed €5.99 transaction;
- a modified client, rooted-device overlay, unofficial APK, browser DOM edit, or image manipulation does not override authoritative provider and server records;
- a stale marketing banner that contradicts the final checkout can still create consumer-law/advertising risk and should be corrected quickly even if it did not itself conclude the purchase; and
- a materially misleading public promise can still matter under conformity or unfair-commercial-practice law even where the final transaction record is technically correct.

Do not reject a genuine complaint merely because the player cannot provide a screenshot if CK-Labs or the provider already has reliable transaction evidence.

## 10. Promotion and coupon mistakes

A promotion can be misconfigured without the player committing abuse.

Examples:

- CK-Labs accidentally publishes a 90% Lifetime VIP discount to everyone;
- a coupon configured for one redemption is accidentally accepted twice by the normal UI without manipulation;
- a regional promotional price is assigned to the wrong storefront;
- a countdown expires but the backend continues the same price because of a deployment bug.

Investigate the configuration first. Do not automatically classify every recipient as fraudulent.

Fraud/abuse treatment requires separate evidence such as bypassing eligibility, manipulating region/account data, replaying redemption calls, exploiting a known technical defect after warning, automation, or other intentional abuse.

Where a user merely accepted an offer the official interface normally presented and processed, the pricing-error analysis remains separate from promotion-abuse analysis.

## 11. Regional pricing, tax, and FX are not automatically errors

Different Apple, Google Play, Xsolla, country, currency, tax, purchase-option, experiment, and genuine promotion prices can be lawful.

Do not call a price “wrong” merely because another country, purchase option, experiment cohort, or channel is cheaper.

Before correcting an apparent discrepancy, determine whether it resulted from:

- provider tax/VAT treatment;
- currency conversion;
- provider-created comparable price tiers;
- an intentional CK-Labs regional price;
- a Google Play purchase option or price experiment;
- a genuine promotional window;
- a personalized automated price, which has its own disclosure gate; or
- an actual catalog/configuration mistake.

Travel, migration, multiple storefronts, provider-assigned experiment cohorts, or payment-provider routing are not by themselves proof of regional-price abuse.

## 12. Account compromise remains separate

A pricing incident does not prove that the account owner authorized the purchase, and an account-compromise report does not prove that the catalog price was invalid.

If an attacker used the legitimate account during a genuine low-price sale, preserve both questions separately:

1. was the price/offer valid or erroneous; and
2. was the purchase authorized by the account holder.

Do not deny an account-compromise claim merely because the transaction was technically valid at the provider.

Do not use a pricing-error correction as evidence that the player committed chargeback fraud.

## 13. Support decision tree

When a pricing/catalog/configuration incident is reported:

1. freeze further publication of the erroneous offer if still live;
2. preserve the exact catalog, purchase option/offer where relevant, bundle line items where relevant, checkout, transaction, entitlement, and timestamp evidence;
3. identify the contracting merchant and contract-formation state;
4. classify the incident using the P0 categories above;
5. stop duplicate fulfillment but do not automatically confiscate unrelated value;
6. determine whether there is a completed transaction and its confirmed price/currency;
7. if fulfillment is wrong, use the conformity/delivery cure path;
8. if the transaction itself contains a legally relevant declaration mistake, obtain the appropriate legal/merchant decision before relying on cancellation or BGB avoidance;
9. where avoidance is used under German law, send a clear counterparty-facing declaration promptly and preserve the timestamp/reason;
10. use the proper Apple, Google Play, Xsolla, or CK-Labs refund route;
11. unwind only the affected transaction/value to the lawful extent;
12. preserve mandatory withdrawal, refund, conformity, price-reduction, termination, liability, and court rights; and
13. fix all stale public surfaces so the same error cannot continue creating new cases.

## 14. Evidence packet for material incidents

For a material pricing/catalog incident, retain a proportionate evidence packet containing:

- incident identifier and detection time;
- affected product/SKU/product ID and, where relevant, purchase option/offer identity and multi-product line-item set;
- affected storefronts/countries;
- intended price/quantity/product mapping;
- actually published price/quantity/product mapping;
- start/end time of the bad configuration;
- screenshots or immutable copies of affected TycoonX-controlled surfaces;
- provider checkout/transaction evidence;
- completed/pending/refunded/reversed state;
- TycoonX entitlement ledger action;
- number of affected transactions;
- whether users could reasonably detect the mistake;
- whether abuse/manipulation evidence exists separately;
- legal/merchant classification and correction method;
- BGB § 119/§ 121/§ 122/§ 143 analysis where German avoidance is actually relied upon;
- customer communication sent;
- refund/reversal evidence where applicable; and
- remediation preventing recurrence.

Apply the Privacy Policy, purpose limitation, minimization, access controls, and retention rules. A pricing incident is not a reason to retain unrelated player messages, precise location, full device history, or unrelated purchase behavior indefinitely.

## 15. Release regression scenarios

The production implementation should be able to demonstrate all of these without touching a database during this legal QA run:

1. **Cached price:** TycoonX locally shows an old €5.99 VIP price; Google Play billing sheet clearly shows €7.99; no purchase occurs at €5.99 and the stale surface is corrected.
2. **Completed mistaken provider price:** a provider actually confirms an erroneous €0.99 transaction; TycoonX does not silently debit the difference from another payment source.
3. **Wrong Diamond quantity:** checkout sold 500 Diamonds but only 50 arrive; the missing 450 are delivered exactly once.
4. **Duplicate Diamonds:** one 500-Diamond transaction grants 1,000 because of webhook replay; the duplicate 500 can be corrected without changing the provider transaction price.
5. **Lifetime mapping defect:** checkout sold Lifetime VIP but the backend activates 30-Day VIP; the issue routes to fulfillment/conformity rather than silently downgrading the purchase.
6. **Duplicate Lifetime restore:** one valid Lifetime VIP appears twice; the duplicate state is consolidated without revoking the valid entitlement.
7. **30-Day duplicate:** one valid 30-Day VIP is accidentally activated twice; only the unsupported duplicate is corrected and the valid original clock is preserved.
8. **Pending purchase:** a favorable catalog price appears but the provider purchase never completes; no paid entitlement is granted.
9. **Provider refund:** the provider later refunds a mistaken transaction; only the corresponding paid value is reconciled.
10. **Promotion bug without abuse:** the official interface normally gives the consumer the misconfigured discount; support does not label the consumer fraudulent without separate evidence.
11. **Promotion exploit:** a user intentionally replays coupon-redemption calls beyond a stated limit; promotion-abuse evidence is handled separately from the price-error classification.
12. **Regional price:** one country legitimately has a lower provider price; no automatic fraud or correction occurs merely because another market is more expensive.
13. **Account compromise:** a valid low-price transaction is disputed as unauthorized; authorization and price validity are investigated separately.
14. **German avoidance:** if CK-Labs relies on BGB § 119 for a completed CK-Labs contract, the file shows a timely § 121 decision, a § 143 counterparty declaration, and § 122 consideration rather than only an internal “void” flag.
15. **Unrelated value isolation:** correction of one mistaken Diamond order does not remove a separate valid Lifetime VIP or unrelated purchased Diamonds.
16. **Two Google Play purchase options:** the same product has different active regional purchase options; TycoonX uses the eligible option and does not call the cheaper region fraudulent or retroactively reprice it.
17. **Stale Google offer:** a previously displayed discount is no longer eligible; Google Play offers the underlying purchase-option path, and TycoonX neither promises the expired discount nor grants value from the stale offer token rather than the completed transaction.
18. **Multiple eligible Google offers:** two offers are returned; TycoonX selects according to a deterministic eligibility/merchandising rule rather than array order or cheapest-price guessing.
19. **Unfetched product:** `queryProductDetailsAsync()` returns the product as `UnfetchedProduct`; TycoonX does not launch checkout from a cached stale `ProductDetails`/offer token.
20. **Old Play client:** a PBL 7-or-older client can see only the intended backwards-compatible Buy path; an obsolete promotional price is not kept alive merely for compatibility.
21. **Lifetime VIP closed sale:** every active/backwards-compatible Google sale path for Lifetime VIP is closed when the genuine sale window ends, while a valid historical purchase remains restorable.
22. **Rent misconfiguration:** Diamonds, 30-Day VIP, or Lifetime VIP appear as a Google Rent purchase option; release is blocked rather than silently changing TycoonX product meaning.
23. **Google price experiment:** a valid user receives an experiment price at the purchase-option level; the completed provider-confirmed transaction is not treated as a configuration error merely because another cohort paid a different price.
24. **Multi-product fulfillment:** one Google purchase contains a Diamond product and another eligible one-time product; the backend enumerates all authoritative `lineItems` and grants each confirmed entitlement once without turning one purchase into duplicate payments.
25. **Multi-product RTDN:** Google sends RTDN for a multi-product purchase without `sku`; TycoonX queries the Play Developer API and resolves the complete line-item set instead of guessing from the client catalog.
26. **Whole-bundle refund:** Google refunds a multi-product order; all entitlements associated with that provider purchase enter one idempotent reconciliation flow, and TycoonX does not pretend Google issued an unsupported one-item provider refund.
27. **Invalid bundle composition:** a proposed bundle mixes product classifications Google does not permit, includes a pre-order, or uses Rent; publication is blocked rather than silently changing the offer.
28. **Lifetime VIP bundle closure:** a Google bundle containing Lifetime VIP is active when the limited sales window closes; that bundle sales path is deactivated while genuine historical purchases remain restorable.
29. **Financial-report fan-out:** one multi-product order appears as multiple itemized financial rows with the same Order ID; reconciliation does not count them as multiple customer purchases.

## Current legal and platform checkpoint

This gate reflects, as of September 8, 2026:

- **BGB § 119** on avoidance for qualifying mistakes in declarations;
- **BGB § 121** requiring avoidance under §§ 119/120 without culpable delay after knowledge of the ground;
- **BGB § 122** on potential reliance damages and the knowledge/negligent-ignorance exception;
- **BGB § 143** requiring the avoidance declaration to the proper counterparty;
- mandatory German/EU digital-product, withdrawal, conformity, unfair-commercial-practice, checkout, personalized-pricing, and liability rules preserved by the canonical TycoonX legal documents;
- Apple's current App Store transaction-price records and current IAP price-scheduling model;
- Google Play's current one-time-product object model, including multiple purchase options and offers, `ProductDetails`/`UnfetchedProduct`, eligible-offer behavior, offer tokens, backwards-compatible Buy options for old PBL clients, Rent purchase options, purchase-option price experiments, multi-product one-time bundles and their `lineItems`/whole-bundle refund semantics, purchase-state, purchase-token, backend-verification, refund, and void lifecycle; and
- Xsolla's current transaction/webhook/refund/reversal model.

## Founder-protective interpretation

Nothing here forces CK-Labs to honor a nonbinding manipulated screenshot, stale cached display, invalid pending payment, stale or ineligible Google offer, unsupported bundle composition, duplicate entitlement grant, fraudulent coupon replay, or transaction that the law and applicable merchant rules validly allow to be canceled or avoided.

Likewise, nothing here gives a consumer a perpetual right to an accidental future catalog price, expired offer, obsolete backwards-compatible purchase option, unsupported Google bundle, or closed Lifetime VIP sales window.

The protection is stronger when CK-Labs avoids overclaiming. A real completed transaction should be corrected through the actual legal and merchant path, not through a blanket clause that may be unenforceable. Transaction-specific evidence, prompt action, narrow correction, and preservation of mandatory rights protect both CK-Labs and legitimate TycoonX players.