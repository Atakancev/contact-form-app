# TycoonX Google Play Refund API Modernization Gate

Last reviewed: September 7, 2026

This gate governs Google Play refund and purchase-history tooling for TycoonX. It complements the TycoonX Purchases & Refunds Policy, `TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md`, and `TYCOONX_GOOGLE_PLAY_CHARGEBACK_REVIEW_RELEASE_GATE.md`.

TycoonX is in full release. This gate is an operational control and does not reduce mandatory consumer rights or replace Google Play's current terms and APIs.

## Current Google API baseline

As of September 7, 2026:

- Google documents `queryPurchaseHistory()` as deprecated since Play Billing Library 7.
- For purchases that need processing on-device, use `queryPurchasesAsync(QueryPurchaseParams, PurchasesResponseListener)` where appropriate.
- For voided or cancelled purchases, use Google's server-side Voided Purchases API rather than `queryPurchaseHistory()`.
- If TycoonX needs a historical purchase record, maintain that history on the TycoonX backend from authoritative provider/server events rather than treating an old client purchase-history call as the ledger.
- Google documents `orders.refund` as the current Orders API method for refunding a user's subscription or in-app purchase order.
- Google's legacy `purchases.subscriptions.refund` endpoint is deprecated and points developers to `orders.refund` instead.
- Google's current RTDN schema distinguishes `REFUND_TYPE_FULL_REFUND` from `REFUND_TYPE_QUANTITY_BASED_PARTIAL_REFUND`. Quantity-based partial refunds apply only to multi-quantity purchases and the same purchase can be partially voided more than once.
- For partially voided multi-quantity purchases, Google documents `purchases.productsv2` `refundableQuantity` as the remaining purchased quantity that has not yet been voided.
- Google's current multi-product one-time-product flow can return several products under one purchase. The client exposes them through `Purchase.getProducts()` and the server purchase record exposes the items through `lineItems`.

Do not reintroduce `queryPurchaseHistory()` as a required refund, restoration, fraud, chargeback, or entitlement-reconciliation dependency.

## Refund authority and identifiers

A refund request must be tied to an authoritative Google transaction. Do not invent an `orderId`, `purchaseToken`, product identifier, quantity, price, country, refund reason, or account mapping merely to make an API call succeed.

`orders.refund` requires the relevant package name and Google order ID. Google also exposes an optional `revoke` parameter. Where `revoke=true` is used, access to the purchased item is terminated immediately according to Google's API behavior. Consumed in-app items still require TycoonX-side correction because Google does not reconstruct the in-game balance for CK-Labs.

Not every legitimate Google transaction should be assumed to have an order ID usable in every workflow. If a required identifier is genuinely unavailable, use the current lawful Google Play Console/support/provider path rather than fabricating one or treating the player as fraudulent.

The TycoonX entitlement ledger must continue to use authoritative purchase/provider state and stable idempotency keys. An order ID is useful for refund administration, but it must not become the sole universal proof that a purchase existed or the sole deduplication key for every Google entitlement.

## Explicit refunds instead of ambiguous acknowledgement failure

For a purchase that CK-Labs determines is illegitimate after proper server-side validation or abuse checks, Google's current security guidance recommends explicitly refunding through `orders.refund` or another applicable Play Developer API with revocation where appropriate instead of intentionally leaving the purchase unacknowledged and relying on an automatic refund.

Do not deliberately create acknowledgement failures as a pseudo-refund mechanism. A timeout, acknowledgement failure, provider outage, client retry, or delayed webhook is ambiguous and must not be used as evidence that the player committed fraud.

## Product-specific correction rules

### Purchased Diamonds

Purchased Diamonds do not expire solely because time passes. If Google lawfully refunds, reverses, voids, or charges back a Diamond purchase, TycoonX may correct only the value attributable to that affected transaction, subject to mandatory law and the existing single-correction-budget rules.

Where Google states that a consumed in-app item must be handled by the developer's app, TycoonX must reconcile the server-side Diamond ledger idempotently. Never double-remove the same Diamond value because both `orders.refund`, RTDN, Voided Purchases API, support tooling, or a replayed event report the same underlying refund.

A legitimate refund does not by itself prove hacking, fraud, regional-price abuse, account compromise, or entitlement abuse.

### One-time 30-Day VIP

30-Day VIP remains a one-time, non-renewing 30-day entitlement. A Google refund/revoke operation may end or correct the affected entitlement where lawful, but API retries must not restart its original 30-day clock, silently convert it into recurring billing, or remove unrelated purchases.

If access was already partly consumed, apply the actual provider state, applicable contract, and mandatory consumer law rather than inventing a second refund or an extra punitive entitlement removal.

### Lifetime VIP

Lifetime VIP remains a one-time promotional entitlement available only during selected genuine sales windows. It may be withdrawn from future sale and may never return.

Migrating refund APIs, changing an order-management endpoint, or closing a sales window does not by itself revoke a valid Lifetime VIP purchase. A valid Lifetime VIP may be corrected or revoked only when the underlying transaction is actually refunded, reversed, voided, invalidated, or another lawful canonical entitlement rule applies.

A refund retry must not reopen a closed Lifetime VIP sales window or create a replacement purchase at a historical price.

## Whole-order, quantity and multi-product safety

Do not assume every Google refund has the same granularity.

- Preserve the exact Google order, product/line-item, quantity, refund, void, and entitlement relationships available from authoritative Google records.
- Quantity-based partial-refund events must correct only the affected quantity/value.
- A whole-order refund must not be implemented as a second independent refund for each TycoonX ledger event unless the provider record actually requires that treatment.
- For Google multi-product one-time purchases, follow the dedicated multi-product rules and do not manufacture an item-level provider refund when Google's applicable purchase/refund mechanism does not support it.
- Never revoke unrelated legitimate purchases merely because they share the same TycoonX account.

If Google Play Console offers a manual partial-refund route that differs from the Developer API, record the actual provider result and reconcile from that authoritative result. Do not pretend an API performed a partial refund it did not perform.

### Quantity-based partial refunds: use cumulative authoritative state, not `refundType` alone

Google's current RTDN documentation makes two details important for TycoonX:

1. `REFUND_TYPE_QUANTITY_BASED_PARTIAL_REFUND` can occur multiple times for one multi-quantity purchase.
2. When the remaining quantity is finally refunded, Google reports `REFUND_TYPE_FULL_REFUND` rather than another partial-refund type.

Because of that second rule, `REFUND_TYPE_FULL_REFUND` must not be interpreted as "remove the original full quantity again" when earlier partial corrections already happened.

For a multi-quantity Diamond transaction, persist the authoritative original purchased quantity, the latest authoritative remaining `refundableQuantity` when available, and the cumulative quantity/value already corrected. Reconcile each new provider event against those values. The total corrected quantity for that purchase token must never exceed the original verified purchased quantity.

Example: a verified Google purchase contains quantity 5 of a 200-Diamond product, so the original grant is 1,000 Diamonds. Google first partially refunds quantity 2. TycoonX corrects at most 400 attributable Diamonds and records that two of five units have been voided. If Google later refunds the remaining three units, RTDN can report `REFUND_TYPE_FULL_REFUND`. TycoonX must correct only the still-unreconciled three units, at most 600 attributable Diamonds. It must not subtract all five units again and produce a seven-unit correction.

RTDN tells TycoonX that state changed but is not a substitute for all quantity state. For a partial void, retrieve the current authoritative Google purchase state where needed, including `purchases.productsv2` and its `refundableQuantity`, and compare it with the durable transaction ledger. If the exact newly voided quantity cannot be resolved safely because events are missing, out of order, contradictory, or the provider state is temporarily unavailable, place that transaction in reconciliation rather than guessing a quantity.

Duplicate RTDN delivery, Voided Purchases polling, support replay, process restart, or an event arriving out of order must not create an additional correction. Idempotency must cover the underlying Google transaction and cumulative void state, not merely the Pub/Sub message ID.

A quantity-based partial refund is not by itself evidence that the player exploited multi-quantity purchasing, manipulated regional pricing, compromised an account, or initiated a fraudulent chargeback.

### Multi-product one-time-product bundles

Google's current multi-product one-time-product feature can combine several eligible one-time products in one purchase. It creates additional refund and entitlement risks that TycoonX must not treat like an ordinary single-SKU transaction.

Current Google constraints include:

- a multi-product one-time purchase returns multiple items through `Purchase.getProducts()` and server-side `lineItems`;
- the RTDN `sku` field is not provided for a multi-product one-time purchase, so the server must fetch authoritative purchase data to determine every included item;
- Google currently does not support refunding an individual item inside a multi-product one-time purchase; the purchase can be refunded as a whole, and a refund/cancellation of the bundle cancels the associated entitlements;
- subscriptions cannot be included in such a bundle;
- a multi-product one-time bundle cannot mix digital content and a service under Google's current rules; and
- the bundled products must be available for immediate download, so Google's current multi-product flow cannot contain a pre-order, and it does not support the rent purchase option.

Do not enable a TycoonX multi-product bundle merely because Play Console exposes the feature. Before using it for any combination involving Diamonds, one-time 30-Day VIP, Lifetime VIP, or another paid entitlement, confirm the then-current Google eligibility/classification, player-facing product description and total price, tax treatment, entitlement mapping, refund consequence, support flow, and mandatory consumer-law treatment.

Do not assume that one missing RTDN `sku` means the purchase is invalid. Resolve all authoritative `lineItems` from Google before granting or revoking value. A valid multi-product transaction must be fulfilled exactly once across every included TycoonX line item, and a later whole-bundle refund must reconcile every affected entitlement exactly once without touching unrelated purchases outside that Google transaction.

Do not promise an item-level refund for a Google multi-product one-time purchase when Google does not support it. Conversely, provider bundle limitations do not remove a mandatory consumer remedy. If mandatory law requires a remedy that the automated Google bundle refund path cannot express, CK-Labs must use an available lawful provider/manual path or otherwise provide the legally required outcome.

Lifetime VIP remains limited to selected genuine sales windows even if it is ever technically included in a permitted bundle. Bundling must not create a hidden continuous Lifetime VIP sales route, reopen a closed sales window, or let a later refund restore Lifetime VIP at an expired promotional price.

## Current purchases, voids and historical ledger

Use the right source for the right question:

- `queryPurchasesAsync(...)`: current purchases requiring on-device processing/reconciliation where applicable;
- Google Play Developer APIs: authoritative server verification and order state;
- `purchases.voidedpurchases.list`: voided, cancelled, refunded, or charged-back purchase reconciliation where applicable;
- TycoonX backend ledger: durable historical entitlement and correction history derived from authoritative events.

Do not use a stale client cache, screenshot, local receipt copy, or deprecated `queryPurchaseHistory()` response as the sole authority for granting, restoring, removing, or refunding Diamonds or VIP.

## Future recurring products

TycoonX currently distinguishes its one-time products from recurring subscriptions. If CK-Labs later introduces a recurring product, that product requires its own compliant recurring-price, renewal, cancellation, notice, consent, refund, and termination rules.

Do not build a future subscription refund flow on deprecated `purchases.subscriptions.refund`. Re-check Google's then-current Orders and SubscriptionsV2 APIs before launch. A technical migration does not waive mandatory consumer remedies or authorize undisclosed recurring billing.

## Mandatory consumer-rights boundary

Google's API limits and operational tooling do not remove statutory remedies. If German/EU or other mandatory consumer law requires a refund, price reduction, termination, restoration, conformity remedy, withdrawal remedy, or another result that one Google API endpoint does not directly expose, CK-Labs must use an available lawful provider/manual process or otherwise provide the mandatory remedy.

Do not tell a consumer that a mandatory remedy is unavailable merely because a deprecated API was removed, an automated refund endpoint rejected the request, an order is too old for that endpoint, or CK-Labs must use a different provider process.

## Security and account compromise

A suspected account compromise, device change, refund request, chargeback, provider mismatch, or missing historical client record is a reason to verify authoritative evidence, not an automatic admission of fraud.

Keep payment evidence proportionate. Do not collect unrelated private messages, credentials, full card data, precise location, or other excessive personal data merely to compensate for a missing Google identifier.

## Fail-closed regression cases

Fail the affected refund/reconciliation workflow if any of these occur:

- production logic depends on deprecated `queryPurchaseHistory()` for historical authority;
- a voided purchase is ignored because it does not appear in a client purchase-history call;
- a developer fabricates an order ID or product mapping to force `orders.refund` through;
- a refund API success directly grants a replacement entitlement;
- the same refund removes purchased value twice through API, RTDN, Voided Purchases, support tooling, or replay;
- a quantity-based partial refund is treated as the full original purchase without authoritative quantity reconciliation;
- a final `REFUND_TYPE_FULL_REFUND` after earlier partial refunds removes the original quantity a second time;
- cumulative quantity corrections exceed the original verified purchased quantity;
- an RTDN `sku` is assumed for a multi-product one-time purchase instead of resolving authoritative `lineItems`;
- a multi-product bundle grants or revokes only the first returned product while silently ignoring the other line items;
- TycoonX promises or fabricates an item-level Google refund inside a multi-product one-time purchase when the applicable Google refund route supports only the whole purchase;
- an acknowledgement timeout is intentionally used as the refund mechanism;
- a lawful refund is automatically labelled fraud;
- a Diamond refund removes unrelated purchased Diamonds;
- a 30-Day VIP refund restarts the 30-day clock or creates recurring billing;
- a Lifetime VIP refund or bundle migration reopens a closed sales window;
- a deprecated subscription-refund endpoint is used for a newly launched recurring product; or
- an API/tool limitation is used to deny a mandatory consumer remedy.

## Official source checkpoints

Re-check before material refund-tooling changes:

- Google Play Billing, Query Purchase History: https://developer.android.com/google/play/billing/query-purchase-history
- Google Play Developer API, `orders.refund`: https://developers.google.com/android-publisher/api-ref/rest/v3/orders/refund
- Deprecated `purchases.subscriptions.refund`: https://developers.google.com/android-publisher/deprecated-apis/purchases.subscriptions/refund
- Google Play Billing security guidance: https://developer.android.com/google/play/billing/security
- Google Play RTDN reference: https://developer.android.com/google/play/billing/rtdn-reference
- Google Play multi-product one-time products: https://developer.android.com/google/play/billing/multi-product-for-one-time-product
- Google Play Developer API / Voided Purchases and `purchases.productsv2` documentation.

Run the dedicated verifier after changing this gate or related refund logic:

```bash
node scripts/verify-tycoonx-google-refunds.mjs
```
