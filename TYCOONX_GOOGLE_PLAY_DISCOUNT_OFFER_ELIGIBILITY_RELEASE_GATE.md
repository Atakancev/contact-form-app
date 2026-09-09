# TycoonX Google Play One-Time Discount Offer Eligibility Release Gate

**Last reviewed: September 9, 2026**

Owner: CK-Labs  
Scope: Google Play one-time-product purchase options and discount offers used for TycoonX Diamonds, one-time 30-Day VIP, limited-window Lifetime VIP, regional prices, promotions, offer limits, offer time windows, pending purchases, refunds, chargebacks, price display, and support/reconciliation.

## Purpose

This is a narrow companion to `TYCOONX_PRICING_CATALOG_CONFIGURATION_ERROR_RELEASE_GATE.md`. It does not redefine TycoonX products or the canonical Terms, Privacy Policy, Purchases & Refunds Policy, or Community Standards.

Its purpose is to prevent a current Google Play one-time-product offer feature from creating incorrect grants, false fraud findings, misleading promotion claims, or accidental reopening of Lifetime VIP.

Google Play can now expose multiple eligible one-time purchase options and offers for the same product. Discount offers can be limited by country/region, redemption quantity, and a valid time window. Those provider eligibility mechanics are not the same thing as a TycoonX entitlement, a completed payment, a refund verdict, or evidence of abuse.

## P0 rule: Google offer eligibility is not entitlement authority

A Google Play discount offer being returned, disappearing, becoming unavailable, or becoming available again must never by itself:

- grant or remove Diamonds;
- start, restart, pause, extend, shorten, or stack one-time 30-Day VIP;
- grant, revoke, or reopen the sale of Lifetime VIP;
- mark a payment as completed, refunded, charged back, fraudulent, or unauthorized;
- change the historical price of a completed one-time purchase; or
- override mandatory German/EU consumer rights.

Paid value changes only after the authoritative Google purchase/refund state is verified and reconciled through the existing TycoonX payment-entitlement gates.

## 1. Preserve the exact offer selected at checkout

For every Google Play one-time-product purchase launched from an offer, preserve enough evidence to distinguish:

- `productId`;
- `purchaseOptionId`;
- `offerId` where present;
- the `offerToken` selected for the billing flow;
- offer tags as non-authoritative merchandising metadata;
- formatted price and currency shown by the current Google result;
- `fullPriceMicros` / discount display metadata where present;
- valid-time-window metadata where present;
- limited-quantity metadata where present;
- the relevant Play country/region context where available;
- provider purchase token and authoritative server-side purchase state; and
- the TycoonX entitlement mapping expected for that product.

Do not choose an offer merely because it is the first, cheapest, previously cached, or most profitable offer in a returned list. Google requires the billing flow to use the offer token corresponding to the offer selected for the user.

Offer tags are useful for catalog organization, but they are not payment or entitlement authority. A tag such as `lifetime`, `vip`, `sale`, or `diamonds` must never substitute for the verified product/purchase mapping.

## 2. Limited-quantity offers have provider-specific counting rules

Google Play currently exposes `LimitedQuantityInfo` with a maximum quantity and remaining quantity for the user.

Important current behavior:

- when the maximum redemptions are used, the offer is no longer returned as an eligible offer;
- Google calculates remaining quantity using the user's owned quantity;
- **consumed purchases count** toward that calculation;
- **pending purchases count** toward that calculation; and
- purchases that were canceled, refunded, or charged back do not count toward that owned-quantity calculation.

TycoonX must not reproduce these rules by guessing from the in-game wallet or VIP state. Provider offer eligibility and TycoonX entitlement state are different ledgers.

### Consequences for Diamonds

If a player bought a discounted 1,000-Diamond package once and Google limits that discount to one redemption, consuming the Google purchase for billing settlement does **not** mean the discount quota resets. Google currently counts consumed purchases toward the offer limit.

TycoonX must therefore not:

- re-enable the discount merely because the Play purchase was consumed;
- infer that consumed Diamonds were spent in-game;
- grant another 1,000 Diamonds because a local promotion counter was reset; or
- accuse the player of abuse if Google itself later returns the offer as eligible.

Purchased Diamonds do not expire merely because time passes. Google billing consumption remains separate from in-game Diamond spending.

### Pending purchases can temporarily consume offer eligibility

Google currently counts pending purchases when calculating remaining offer quantity. A player can therefore see a limited offer disappear or show no remaining quantity even though no paid TycoonX entitlement has been granted yet.

During that state:

- do not grant the paid product while the purchase remains pending;
- do not mark the missing offer as proof that payment completed;
- do not mark repeated checks as promotion abuse;
- do not deduct another redemption in a separate TycoonX counter merely because Google already reserved eligibility; and
- wait for authoritative transition to the completed/canceled state and reconcile idempotently.

If the pending purchase is canceled, provider eligibility may later change again. That change is not itself a new purchase.

## 3. Refunds and chargebacks can change offer eligibility without creating free value

Google currently excludes canceled, refunded, and charged-back purchases from the limited-quantity owned count. A previously exhausted discount offer can therefore become eligible again after a qualifying provider reversal.

That re-eligibility must not be confused with entitlement restoration.

Example: a user buys a one-redemption discounted 1,000-Diamond offer, receives 1,000 Diamonds, and Google later authoritatively refunds the transaction. The refund must be reconciled transaction-specifically under the existing refund/void rules. If Google then makes the discount eligible again, a later successful repurchase is a **new provider transaction**, not a restoration of the refunded one.

Never use provider offer re-eligibility to:

- keep both the refunded purchased value and a new paid grant without the applicable refund/downstream-value analysis;
- double-claw back the old transaction;
- turn a provider-approved refund into automatic fraud evidence; or
- retroactively reprice the historical refunded transaction using the later offer price.

## 4. Valid time windows are eligibility windows, not fake urgency tools

Google Play can return a `ValidTimeWindow` for an eligible one-time offer, including start and end timestamps. A null start or end can represent an offer without that boundary.

TycoonX must treat these provider timestamps as offer-eligibility metadata, not as permission to create misleading urgency.

Release rules:

- do not display a TycoonX countdown that continues after the provider offer is no longer eligible;
- do not invent a shorter or longer deadline and present it as Google's deadline;
- do not promise that a price remains purchasable merely because it was displayed before the provider window expired;
- refresh current offer eligibility at checkout rather than launching a stale cached token after the window closes;
- if an offer expires between display and purchase launch, fail gracefully and refresh the catalog rather than treating the player as abusive; and
- preserve any consumer remedy that may arise from genuinely misleading TycoonX-controlled promotional copy separately from the provider's eligibility decision.

A limited-time promotion can be genuine. The problem is false scarcity, false countdown behavior, or an inaccurate claimed price advantage.

## 5. Country and region eligibility can legitimately change between display and launch

Google Play evaluates offer availability using the user's Play country/region. Google currently warns that eligibility can change between displaying an offer and launching the billing flow, and it rechecks country eligibility when checkout is launched. An ineligible launch can return `ITEM_UNAVAILABLE`.

Therefore:

- `ITEM_UNAVAILABLE` after a previously visible offer is not by itself evidence of VPN use, regional-price abuse, hacking, or account manipulation;
- refresh the user's current eligible offers instead of retrying a stale offer token indefinitely;
- do not silently substitute another country's cached offer;
- do not compare a valid completed regional offer to another country's price and label the purchaser an underpayer; and
- preserve the separate TycoonX EU geo-blocking/regional-pricing gate for any discrimination, residency, nationality, or payment-access issue.

Intentional manipulation can still be investigated when separate reliable evidence exists. The provider eligibility transition alone is not that evidence.

## 6. `fullPriceMicros` is provider metadata, not automatic legal authority for a crossed-out price claim

For a discounted offer, Google Play can expose the full non-discounted price and discount-display information. TycoonX may use accurate current provider data where appropriate, but CK-Labs must not assume that the existence of `fullPriceMicros`, a percentage discount, or an absolute discount automatically makes every marketing presentation lawful.

In Germany, **UWG § 5** prohibits misleading commercial practices concerning, among other things, the existence of a specific price advantage, the price, the way the price is calculated, and conditions of supply. The EU Unfair Commercial Practices Directive likewise treats misleading claims about price or a specific price advantage as potentially unlawful.

Release rules:

- a crossed-out/reference price must represent what CK-Labs can truthfully substantiate for the relevant claim and context;
- a Google full-price field must not be relabeled as a historic price, usual price, “was” price, or saving period if that statement is not actually true;
- a provider discount percentage must not be combined with a contradictory TycoonX-controlled price or countdown;
- genuine regional differences must not be presented as universal savings; and
- promotion text must stay accurate when the purchase option, offer, region, tax treatment, or provider configuration changes.

Do not over-apply Germany's special prior-price rule for **goods** in PAngV § 11 to a TycoonX digital-service scenario where it does not apply merely because there is a crossed-out price. The broader anti-misleading rules still apply.

## 7. Displayed Google price can be tax-exclusive in some countries

Google's current `OneTimePurchaseOfferDetails.getFormattedPrice()` documentation states that, for tax-exclusive countries, the formatted offer price does not include tax.

TycoonX must therefore not globally label every Google `formattedPrice` value as “final total including all taxes” without knowing that statement is true for the relevant country and provider flow.

For German consumer-facing TycoonX-controlled price advertising, PAngV § 3 requires the total price when a business offers or advertises goods or services to consumers with a price. The final Google Play billing sheet and provider-confirmed total remain the payment-channel authority for the completed Google transaction.

Release rules:

- distinguish a catalog/teaser price from the final provider total where tax can be added later under the applicable market rules;
- do not hide mandatory taxes or fees that CK-Labs is legally required to include in its own consumer price presentation;
- do not recalculate a completed purchase afterward using today's VAT or FX rate; and
- preserve the provider-confirmed historical price/currency/tax record where available.

## 8. Lifetime VIP must not rely on redemption limits to close its sales window

Lifetime VIP remains a limited-time promotional one-time entitlement available only during selected genuine sales windows. It may be withdrawn from sale, may never return, and creates no expectation of continuous availability.

If a Google Play offer for Lifetime VIP uses a purchase limit, that limit is only an additional eligibility rule. It is **not** the sales-window control.

When the Lifetime VIP sales window closes:

- deactivate every Google purchase option/offer/bundle that can create a new Lifetime VIP sale;
- do not rely on `remainingQuantity == 0` to keep the sale closed;
- do not rely on a prior purchase continuing to count, because a refund or chargeback can change provider offer eligibility;
- keep historical genuine Lifetime VIP purchases restorable/reconcilable without making a new sale available; and
- treat any unexpected provider re-eligibility after closure as configuration drift to fail closed, not as player fraud.

If the sales window is still genuinely open and Google makes a user eligible again after an authoritative refund, a new purchase may proceed only through the then-current valid offer and creates a new transaction. It does not resurrect the refunded transaction.

## 9. 30-Day VIP remains one non-renewing 30-consecutive-day entitlement

A Google discount offer does not change the TycoonX 30-Day VIP product definition.

One-time 30-Day VIP remains exactly one non-renewing entitlement lasting **30 consecutive days**. Purchase-limit or offer-window metadata must not:

- pause the 30-day clock;
- start the clock before authoritative completed purchase/fulfillment;
- restart an already expired entitlement without a new valid purchase;
- convert the product into a recurring subscription; or
- allow an overlapping purchase path if the current product rules intentionally prohibit overlap.

A future recurring VIP product, if ever introduced, needs its own compliant recurring-product terms, notices, price-change rules, cancellation handling, and localization review.

## 10. Pre-order offers are not approved for current TycoonX paid products

Google currently documents one-time-product pre-order offers as an Early Access Program feature. A pre-order lets the user agree to pay when the item is released, unless canceled before release; the charge occurs at release.

Current TycoonX Diamonds, one-time 30-Day VIP, and Lifetime VIP are immediate paid digital entitlements. Do **not** configure them as Google Play pre-order offers without a separate product/legal/payment review because doing so would materially change payment timing, delivery timing, cancellation expectations, support flows, and potentially consumer disclosures.

A pre-order must also never be inserted into a Google multi-product bundle where Google requires immediate availability.

## 11. Support and anti-abuse decision rules

When a player reports that a Google discount disappeared, reappeared, failed at launch, or showed a different remaining quantity:

1. retrieve current Google eligible offers rather than relying only on a screenshot or cached app state;
2. inspect the provider purchase token/state for any pending/completed/reversed transaction;
3. separate provider offer eligibility from the TycoonX entitlement ledger;
4. check whether a pending, consumed, canceled, refunded, or charged-back purchase explains Google's remaining-quantity calculation;
5. check valid-time and region eligibility;
6. preserve the exact selected offer token and price evidence for any completed transaction;
7. reconcile refunds/voids only once through the existing transaction-specific paths; and
8. require separate evidence before creating any fraud, regional-price-abuse, exploit, account-compromise, or chargeback-abuse finding.

Do not punish a player for normal Google eligibility behavior or a CK-Labs catalog/configuration defect.

## 12. Release regression scenarios

Release evidence should cover at least these cases:

1. **Consumed Diamond offer:** a one-redemption Diamond discount was purchased and consumed for Google billing settlement; the offer remains exhausted and TycoonX does not reset the discount merely because the purchase is consumed.
2. **Pending quantity:** a pending purchase counts against Google's remaining offer quantity; no paid TycoonX value is granted and the missing offer is not treated as proof of completed payment.
3. **Canceled pending purchase:** a pending purchase is canceled and Google later makes the offer eligible again; no duplicate entitlement or fraud flag is created.
4. **Refund re-eligibility:** a completed discounted Diamond purchase is refunded and later becomes eligible again; the original refund correction and a later new purchase remain separate transaction records.
5. **Expired offer:** the offer expires between catalog display and billing launch; TycoonX refreshes instead of using a stale token or accusing the user of abuse.
6. **Region change:** a previously visible offer returns `ITEM_UNAVAILABLE` after Play-country eligibility changes; TycoonX refreshes current offers and does not auto-flag regional-price abuse.
7. **Offer-tag collision:** an offer tag says `lifetime`, but the verified product mapping is not Lifetime VIP; the tag does not create Lifetime VIP.
8. **Reference-price claim:** `fullPriceMicros` exists, but TycoonX does not publish an unsupported “was” price or fake saving claim.
9. **Tax-exclusive market:** Google's formatted price can exclude tax; TycoonX does not globally label it as an all-in final total where that is false.
10. **Lifetime sale closure:** Lifetime VIP's sales window closes after a prior purchase; every new-sale path is deactivated even if a later refund would otherwise restore provider offer eligibility.
11. **30-Day VIP offer:** a discount or purchase limit does not change the 30-consecutive-day, non-renewing entitlement definition.
12. **Pre-order misconfiguration:** a TycoonX Diamond or VIP SKU appears as a Google pre-order offer; release is blocked pending separate product/legal/payment review.

## Current platform and legal checkpoint

This gate reflects the Google Play one-time-product offer documentation checked on September 9, 2026, including:

- multiple purchase options and eligible offer lists;
- required selected `offerToken` handling;
- discount offer price metadata;
- `ValidTimeWindow`;
- `LimitedQuantityInfo` maximum/remaining quantity behavior;
- Google counting consumed and pending purchases toward limited-quantity eligibility while canceled/refunded/charged-back purchases do not count;
- country/region eligibility being rechecked at billing launch and possible `ITEM_UNAVAILABLE`;
- offer-tag inheritance;
- pre-order offer status and payment-at-release model; and
- current ProductPurchaseV2 line-item offer fields such as `offerId`, `purchaseOptionId`, `offerToken`, quantity, refundable quantity, and consumption state.

German/EU legal checkpoint:

- UWG § 5 misleading-commercial-practice rules, including misleading claims about price or a specific price advantage;
- PAngV § 3 total-price requirements where applicable to CK-Labs consumer-facing price advertising;
- PAngV § 11's special price-reduction provision for goods is not silently generalized to every TycoonX digital offer; and
- mandatory digital-product, withdrawal, conformity, refund, update, liability, and other non-waivable consumer rights remain intact.

References:

- https://developer.android.com/google/play/billing/one-time-product-multi-purchase-options-offers
- https://developer.android.com/reference/com/android/billingclient/api/ProductDetails.OneTimePurchaseOfferDetails
- https://developer.android.com/reference/com/android/billingclient/api/ProductDetails.OneTimePurchaseOfferDetails.LimitedQuantityInfo
- https://developer.android.com/reference/com/android/billingclient/api/ProductDetails.OneTimePurchaseOfferDetails.ValidTimeWindow
- https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.productsv2
- https://www.gesetze-im-internet.de/uwg_2004/__5.html
- https://www.gesetze-im-internet.de/pangv_2022/__3.html
- https://www.gesetze-im-internet.de/pangv_2022/__11.html
- https://eur-lex.europa.eu/eli/dir/2005/29/2022-05-28/eng

## Founder-protective interpretation

The strongest lawful protection is accurate classification.

CK-Labs may stop stale, expired, region-ineligible, exhausted, misconfigured, or closed-window offers from creating new purchases. It may reconcile genuine refunds and duplicate grants transaction-specifically. It may investigate intentional manipulation using reliable separate evidence.

But normal Google Play eligibility changes, pending purchases, provider-side redemption counting, provider-approved refunds, a changing Play country, `ITEM_UNAVAILABLE`, or a CK-Labs configuration mistake do not become fraud merely because they are inconvenient. Preserving that boundary reduces false sanctions, duplicate payouts/clawbacks, misleading pricing risk, and disputes while keeping the existing TycoonX legal protections enforceable.