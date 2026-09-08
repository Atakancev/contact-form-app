# TycoonX Apple Multi-Quantity IAP Release Gate

Last reviewed: September 8, 2026

This is an internal release and operations gate for Apple App Store In-App Purchases used by TycoonX. It complements the existing Apple refund, pricing, promoted-IAP, account-binding, and cross-platform entitlement gates. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Apple Custom EULA, mandatory consumer law, or Apple rules.

## Why this gate exists

Apple StoreKit can purchase more than one unit in a single transaction. The current Swift StoreKit API exposes `Product.PurchaseOption.quantity(_:)`; the default quantity is 1, the maximum is 10, and Apple says the option applies to consumable In-App Purchases and non-renewing subscriptions. A verified StoreKit transaction exposes `purchasedQuantity`, and App Store Server transaction data exposes `quantity` for purchased consumables.

For TycoonX this creates a material entitlement risk because a single Apple transaction can represent more than one Diamond bundle. A backend that assumes every transaction means one bundle can under-grant the player. A retry path that multiplies the grant twice can over-grant. A refund path that ignores the original transaction quantity can over-claw back or under-correct.

## P0 release rules

### 1. Fail closed by product

- **Diamonds:** Apple multi-quantity may be enabled only after the full quantity, fulfillment, refund, and display regression matrix below passes.
- **30-Day VIP:** keep purchase quantity fixed at 1. StoreKit technically allows the quantity option for non-renewing subscriptions, but TycoonX must not interpret quantity 2 as 60 days, two overlapping 30-day clocks, or a future renewal product.
- **Lifetime VIP:** quantity must remain 1. Lifetime VIP is a limited-time promotional one-time entitlement offered only during selected genuine sales windows, may be withdrawn from sale, may never return, and creates no expectation of continuous availability.

Do not expose a quantity selector for VIP products.

### 2. One Apple transaction, one fulfillment record, quantity-aware value

For a verified Diamond transaction:

`grantedDiamonds = configuredDiamondsPerUnitAtPurchase × verifiedPurchasedQuantity`

Example: if the verified product grants 500 Diamonds per unit and Apple reports quantity 3, the transaction grants **1,500 Diamonds exactly once**.

The durable entitlement ledger must preserve at least:

- Apple `transactionId`;
- product ID;
- verified quantity / `purchasedQuantity`;
- per-unit TycoonX Diamond grant applicable to that product version;
- total Diamond grant applied;
- Apple environment;
- purchase timestamp;
- later refund/revocation evidence; and
- fulfillment status/idempotency state.

Never infer quantity from local button taps, UI state, client analytics, payment amount alone, or a cached cart. Use verified Apple transaction data.

If StoreKit/client quantity and App Store Server quantity conflict, are missing unexpectedly, or are outside the product's allowed range, quarantine the transaction for reconciliation rather than silently assuming 1 or choosing the larger value.

### 3. Quantity does not create multiple transaction identities

A quantity-3 Apple purchase is still one Apple transaction for TycoonX idempotency purposes. A direct purchase result, `Transaction.updates`, `ONE_TIME_CHARGE`, restored server state, or notification retry for the same `transactionId` must not grant quantity 3 multiple times.

Likewise, finishing the transaction must happen only after the quantity-aware grant is durably recorded. A replay of an unfinished transaction must be safe.

### 4. Current Apple price data includes quantity

Apple's current App Store Server `price` value is expressed in currency milliunits and, for a consumable purchase, reflects the **total transaction amount for the purchased quantity**, not merely the single-unit configured price. Do not multiply that server transaction price by quantity again.

The transaction `currency` must not be used to infer storefront; Apple directs developers to use the transaction `storefront` value for storefront identity. App Store Connect financial/reporting tools remain authoritative for Apple financial accounting.

If TycoonX presents a custom quantity selector or pre-confirmation total, build it from fresh StoreKit product information and the selected quantity. Do not hard-code a converted currency amount or continue displaying a stale per-unit/total price after the selected quantity changes. The final Apple confirmation sheet/provider transaction remains authoritative for the completed Apple charge.

For German consumers, any CK-Labs-controlled price presentation must continue to comply with the current PAngV § 3 total-price rule. Where CK-Labs itself operates an electronic checkout rather than Apple's native App Store confirmation flow, the existing BGB § 312j checkout controls remain applicable and must not be bypassed by a quantity selector.

### 5. Refund and prorated-refund calculations are based on the whole verified transaction

The existing Apple refund gate remains authoritative for `REFUND`, `REFUND_PRORATED`, `revocationPercentage`, `refundPercentage`, and `CONSUMPTION_REQUEST` behavior.

For a multi-quantity Diamond transaction:

- calculate any final provider-authoritative proportional correction against the **total original Diamond grant for that transaction**;
- never calculate the refund against one unit and then multiply a provider percentage a second time;
- never use a local quantity estimate as a substitute for Apple's final refund/revocation state;
- cap the cumulative Diamond correction at the original verified total grant for that Apple transaction; and
- never debit an unrelated Diamond transaction to make the arithmetic convenient.

Apple's current `consumptionPercentage` documentation explicitly gives a quantity example: if a transaction contains quantity 2 and one item is fully consumed, the consumption percentage is 50% (`50000` milliunits). Treat that percentage as transaction-wide refund-decision input, not as permission to pre-emptively remove Diamonds.

A later Apple final refund percentage remains the provider-authoritative refund result even if it differs from CK-Labs' earlier consumption percentage.

### 6. 30-Day VIP and Lifetime VIP are not stackable through quantity

Any Apple transaction presented for 30-Day VIP or Lifetime VIP with an unexpected quantity greater than 1 must fail into reconciliation before irreversible entitlement mutation.

It must not:

- create 60/90/etc. days of 30-Day VIP;
- create parallel 30-Day VIP periods;
- restart an existing 30-Day VIP clock;
- create multiple Lifetime VIP entitlements;
- extend or reopen a closed Lifetime VIP sale; or
- be used as evidence that the player exploited the game merely because the client/provider produced unexpected quantity state.

### 7. Promotions, pricing errors, and product migrations

Quantity is not a workaround for a promotion/bundle change. Future Diamond bundle contents and prices may change prospectively under the canonical Purchases & Refunds rules, but a completed transaction is fulfilled according to the verified product/quantity and entitlement mapping applicable to that transaction.

If a product configuration error accidentally exposes quantity for a VIP SKU, fail closed for new fulfillment until the product-aware reconciliation path determines what Apple actually charged and what mandatory consumer remedy applies. Do not invent a retroactive price, extra charge, new renewal, or Lifetime VIP availability window.

When migrating product IDs or fulfillment code, preserve historical quantity and per-unit grant provenance. Do not recompute an old quantity-3 transaction using a later Diamond-bundle size.

### 8. Security and abuse boundary

Quantity mismatches, provider retries, stale clients, duplicated callbacks, or a malformed local cart are not automatically proof of hacking, fraud, chargeback abuse, regional-price abuse, or entitlement abuse.

Use verified Apple transaction evidence and the TycoonX entitlement ledger. Deliberate manipulation may still be handled under the canonical fraud/exploit rules when supported by evidence, but the implementation must not turn its own quantity bug into a player sanction.

## Minimum release evidence

Before Apple multi-quantity is enabled for any TycoonX Diamond SKU, retain dated QA evidence for at least:

1. quantity 1 grants the normal Diamond bundle once;
2. quantity 2 grants exactly two units once;
3. quantity 10 is either deliberately supported or safely blocked by TycoonX product policy;
4. duplicate client/server delivery for the same quantity-N transaction grants only once;
5. app restart before finish does not replay the quantity-N Diamond grant;
6. client `purchasedQuantity` and server `quantity` agreement is persisted;
7. deliberate quantity conflict enters reconciliation instead of assuming 1 or choosing the larger value;
8. server transaction `price` is treated as the quantity-inclusive total and is not multiplied by quantity again;
9. custom quantity UI updates its displayed total when quantity changes and uses fresh StoreKit pricing;
10. a quantity-2 refund-decision fixture verifies that one fully consumed unit maps to `consumptionPercentage=50000` without a pre-emptive clawback;
11. final prorated refund correction applies to the whole original quantity-N Diamond grant exactly once;
12. cumulative refund correction can never exceed the original transaction's Diamond grant;
13. quantity >1 for 30-Day VIP is blocked/quarantined and cannot become 60+ days;
14. quantity >1 for Lifetime VIP is blocked/quarantined and cannot create multiple entitlements or reopen a closed sale;
15. old app versions cannot bypass server-side product/quantity validation; and
16. sandbox/TestFlight quantity fixtures never mutate production entitlements.

## Public-legal parity

This gate does not by itself materially change the current player-facing TycoonX legal contract because Apple multi-quantity is fail-closed unless CK-Labs deliberately enables it for a Diamond product, and the canonical rules already cover product identity, completed-purchase pricing, provider authority, refunds, errors, and mandatory rights.

If CK-Labs later markets a specific multi-unit Diamond offer or changes the public meaning of a Diamond bundle, review the canonical English Purchases & Refunds wording first and then reopen only the affected localized document type if the legal meaning materially changes.

## Official references checked September 8, 2026

- StoreKit `Product.PurchaseOption.quantity(_:)`: https://developer.apple.com/documentation/storekit/product/purchaseoption/quantity(_:)
- StoreKit `Transaction.purchasedQuantity`: https://developer.apple.com/documentation/storekit/transaction/purchasedquantity
- App Store Server / Notifications `quantity`: https://developer.apple.com/documentation/appstoreserverapi/quantity
- App Store Server `price`: https://developer.apple.com/documentation/appstoreserverapi/price
- App Store Server `consumptionPercentage`: https://developer.apple.com/documentation/appstoreserverapi/consumptionpercentage
- German PAngV § 3: https://www.gesetze-im-internet.de/pangv_2022/__3.html
- German BGB § 312j: https://www.gesetze-im-internet.de/bgb/__312j.html

## Manual regression command

Run locally without GitHub Actions or paid services:

```bash
node scripts/verify-tycoonx-apple-multi-quantity-iap.mjs
```
