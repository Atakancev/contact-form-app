# TycoonX Pricing, Catalog & Configuration Error Release Gate

**Last reviewed: September 1, 2026**

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
2. **catalog configuration error before contract formation**: the wrong price, currency, bundle size, SKU, product title, eligibility rule, or promotion was published but no binding transaction was yet concluded;
3. **completed transaction at the configured price**: Apple, Google Play, Xsolla, or another contracting merchant confirmed a purchase at the mistaken configured price;
4. **product-mapping or fulfillment error**: the customer paid for one product but TycoonX delivered another product or the wrong quantity;
5. **duplicate or excess entitlement grant**: the payment was correct, but retries, a race condition, webhook replay, restore bug, or server defect granted more value than the valid transaction purchased;
6. **tax/currency/provider adjustment**: the local price changed because of VAT, tax, foreign exchange, provider price-tier, or storefront rules rather than a CK-Labs typo;
7. **promotion/coupon misuse**: the displayed offer itself was genuine but the user bypassed an eligibility, redemption, region, or technical restriction through fraud or abuse; or
8. **account compromise or payment fraud**: the purchase may be valid in provider records while the legitimate account owner disputes authorization.

These categories can lead to different legal and operational outcomes. Never label all of them “fraud” and never use one generic clawback routine for all of them.

## 1. Identify the contracting party and contract-formation point first

Before canceling, refunding, repricing, or removing value, identify:

- whether the relevant contract is with CK-Labs, Apple, Google Play, an Xsolla entity, or another merchant;
- the exact offer and product identifier;
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

Google Play's current one-time-product flow requires the backend to verify the purchase state and recommends authoritative server-side handling. Current `ProductDetails` offer data provides the user-facing formatted price, currency, offer token, valid time window, and discounted/full-price information where applicable.

Release rules:

- fetch eligible current `ProductDetails` near checkout rather than relying on a stale locally cached price;
- use the selected offer token for the actual eligible one-time offer where required;
- do not grant value while a purchase remains pending;
- verify the completed purchase token/state before fulfillment;
- treat the purchase token/order/provider state as separate from the mutable current catalog; and
- use Google's refund/void state for the provider-side reversal path instead of inventing a client-only cancellation state.

A stale local price should not override the actual Google Play billing sheet that clearly showed the final payable price before confirmation. Conversely, if Google Play actually completed the transaction at the configured mistaken offer price, do not silently charge or claw back the price difference without the legally applicable correction/refund path.

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

Different Apple, Google Play, Xsolla, country, currency, tax, and genuine promotion prices can be lawful.

Do not call a price “wrong” merely because another country is cheaper.

Before correcting an apparent discrepancy, determine whether it resulted from:

- provider tax/VAT treatment;
- currency conversion;
- provider-created comparable price tiers;
- an intentional CK-Labs regional price;
- a genuine promotional window;
- a personalized automated price, which has its own disclosure gate; or
- an actual catalog/configuration mistake.

Travel, migration, multiple storefronts, or payment-provider routing are not by themselves proof of regional-price abuse.

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
2. preserve the exact catalog, checkout, transaction, entitlement, and timestamp evidence;
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
- affected product/SKU/product ID;
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

## Current legal and platform checkpoint

This gate reflects, as of September 1, 2026:

- **BGB § 119** on avoidance for qualifying mistakes in declarations;
- **BGB § 121** requiring avoidance under §§ 119/120 without culpable delay after knowledge of the ground;
- **BGB § 122** on potential reliance damages and the knowledge/negligent-ignorance exception;
- **BGB § 143** requiring the avoidance declaration to the proper counterparty;
- mandatory German/EU digital-product, withdrawal, conformity, unfair-commercial-practice, checkout, and liability rules preserved by the canonical TycoonX legal documents;
- Apple's current App Store transaction-price records and current IAP price-scheduling model;
- Google Play's current one-time-product `ProductDetails`, purchase-state, purchase-token, backend-verification, refund, and void lifecycle; and
- Xsolla's current transaction/webhook/refund/reversal model.

## Founder-protective interpretation

Nothing here forces CK-Labs to honor a nonbinding manipulated screenshot, stale cached display, invalid pending payment, duplicate entitlement grant, fraudulent coupon replay, or transaction that the law and applicable merchant rules validly allow to be canceled or avoided.

Likewise, nothing here gives a consumer a perpetual right to an accidental future catalog price.

The protection is stronger when CK-Labs avoids overclaiming. A real completed transaction should be corrected through the actual legal and merchant path, not through a blanket clause that may be unenforceable. Transaction-specific evidence, prompt action, narrow correction, and preservation of mandatory rights protect both CK-Labs and legitimate TycoonX players.
