# TycoonX Google Play Acknowledgement & Consumption Release Gate

Last reviewed: September 8, 2026

This is a narrow operational release gate for Google Play purchase settlement in TycoonX. It complements `TYCOONX_GOOGLE_PLAY_BILLING_LIBRARY_VERSION_LIFECYCLE_RELEASE_GATE.md`, `TYCOONX_GOOGLE_PLAY_PENDING_PURCHASE_ATTRIBUTION_RELEASE_GATE.md`, and `TYCOONX_PAYMENT_ENTITLEMENT_RELEASE_GATES.md`. It does not replace Google Play rules, the canonical TycoonX Purchases & Refunds Policy, or mandatory consumer law.

TycoonX is in full release. The products covered here are purchased Diamonds, one-time non-renewing 30-Day VIP, and Lifetime VIP when that limited-time promotional product is genuinely on sale.

## Current Google Play position

Google's current Play Billing integration guidance says a completed purchase should be verified, the purchased content should be granted, and Google should then be notified that the purchase was processed. Google currently requires completed purchases to be acknowledged within **three days** so that the purchase is not automatically refunded and revoked for non-acknowledgement.

For a pending purchase, that three-day acknowledgement period starts only when the purchase moves from `PENDING` to `PURCHASED`. TycoonX must not acknowledge, consume, or grant paid value while Google still reports `PENDING`.

For consumable one-time products, Google's current guidance says a secure-backend integration should use `Purchases.products:consume` where possible, or `consumeAsync()` for a client-side flow. Consumption satisfies the acknowledgement requirement and makes the consumable product eligible to be bought again. Google recommends checking authoritative `consumptionState` before consuming again.

For non-consumable one-time products, Google's current guidance says a secure-backend integration should use `Purchases.products:acknowledge` where possible, or `BillingClient.acknowledgePurchase()` for a client-side flow, after checking whether acknowledgement has already occurred. Google exposes authoritative acknowledgement state, including `acknowledgementState` / `isAcknowledged()` depending on the API surface.

Google also recommends secure-backend processing because network loss or an app that is not reopened can otherwise prevent acknowledgement before the deadline. A server-side acknowledgement/consumption worker does not replace purchase verification or the TycoonX exactly-once entitlement ledger.

## P0 release rules

### 1. Purchase settlement starts only from a verified completed purchase

For every Google Play TycoonX purchase:

1. obtain authoritative Google purchase state on the secure backend;
2. require `PURCHASED`, never merely `PENDING`;
3. verify the purchase token, package/product mapping, quantity where applicable, and safe TycoonX account attribution;
4. check the durable TycoonX purchase/entitlement ledger so the same provider purchase cannot grant twice;
5. provision the exact paid product once; and
6. promptly perform the correct Google acknowledgement or consumption operation and persist the settlement result.

A callback, RTDN, order ID, client screen, locally cached purchase, support screenshot, or successful billing-sheet close is not enough by itself to skip authoritative verification.

If Google settlement fails after the entitlement was durably granted, retry the provider settlement idempotently without granting the product again. If the implementation instead waits for a successful consume call before making a consumable entitlement visible, it must first durably preserve the verified purchase and the player's unfulfilled claim so a timeout or restart cannot make the paid purchase disappear.

### 2. Purchased Diamonds are consumable in Google billing, not expendable in the game

Purchased Diamonds are repeatable consumable paid value. For a Google Play Diamond SKU deliberately configured/processed as consumable:

- grant the verified Diamond quantity exactly once;
- then consume the Google purchase promptly through the authoritative backend flow where available;
- treat Google consumption as a **billing settlement state** that allows the product to be purchased again;
- never interpret Google consumption as the player spending, expiring, forfeiting, or surrendering those Diamonds inside TycoonX;
- never subtract the Diamond grant merely because `consumptionState` says the provider purchase was consumed; and
- never use a repeated consume retry to grant the same Diamonds again.

Example: Google verifies a completed 500-Diamond purchase. TycoonX credits 500 Diamonds once and then successfully consumes the purchase token. The player's balance still contains those 500 Diamonds until gameplay, a valid refund/reversal, or another lawful transaction-specific correction changes it. The Google word “consume” does not mean the player already spent the Diamonds.

For multi-quantity Diamond purchases, the existing multi-quantity gate remains controlling: provision the authoritative purchased quantity exactly once and keep consumption/acknowledgement idempotent at the provider-purchase level.

### 3. One-time 30-Day VIP must not be confused with a Google subscription or with provider consumption

30-Day VIP remains a **one-time, non-renewing entitlement lasting 30 consecutive days** from its valid activation/availability under the canonical purchase policy.

If CK-Labs uses a repeatable Google one-time-product processing model so a later legitimate 30-Day VIP purchase is possible:

- Google consumption is only the billing action that permits a future purchase of that one-time product;
- consuming the Google purchase does not mean the current 30-Day VIP expired, was used up, or should be removed;
- the original TycoonX 30-day entitlement clock remains authoritative and must not be restarted by a consume callback, retry, reinstall, foreground query, RTDN, or migration replay;
- a second purchase must not be silently activated or stacked in a way that contradicts the checkout/product description;
- until overlapping repeat purchases are intentionally supported and clearly described, TycoonX should not expose a second 30-Day VIP checkout while an existing paid 30-Day VIP remains active; and
- if Google nevertheless accepts a valid second purchase through a stale or misconfigured sale path, CK-Labs must not keep the payment while refusing all corresponding value. Reconcile promptly by honoring the legally supportable product meaning or using an available lawful provider refund/unwind, with mandatory consumer remedies preserved.

Do not solve repeat-purchase availability by converting 30-Day VIP into an auto-renewing subscription. Any future recurring product requires its own compliant recurring-product terms, consent, price-change, cancellation, notice, and consumer-law implementation.

### 4. Lifetime VIP is non-consumable and must never be made repeatable by consumption

Lifetime VIP is a one-time promotional entitlement available only during selected genuine sales windows. It may be withdrawn from sale, may never return, and creates no expectation of continuous future availability.

For Google Play Lifetime VIP:

- treat the intended product as non-consumable;
- after a valid verified purchase is granted, acknowledge it through the non-consumable acknowledgement path;
- **never consume a Lifetime VIP purchase token merely to clear an acknowledgement warning or make the SKU buyable again**;
- do not use `Purchases.products:consume`, `consumeAsync()`, migration code, a support tool, or a generic “settle all purchases” worker on a Lifetime VIP transaction;
- keep the Lifetime VIP sales-window control independent from acknowledgement state; and
- do not interpret an acknowledged Lifetime VIP as permission to create a new sale.

If a bug consumes a valid Lifetime VIP purchase, the provider-side consumption event does not by itself cancel the player's already valid TycoonX Lifetime VIP. Immediately close any unintended repurchase path, preserve the original entitlement, investigate the provider record, and reconcile any later duplicate transaction lawfully. A player who buys through a CK-Labs catalog/configuration mistake is not automatically committing fraud or entitlement abuse.

### 5. The three-day Google deadline is an operational deadline, not a player penalty

The production system must track the Google acknowledgement/consumption deadline from the verified `PURCHASED` transition, including purchases that complete while the app is closed.

Required behavior:

- settle as soon as practical after valid fulfillment rather than intentionally waiting until the deadline;
- recover completed purchases through the existing foreground-query/RTDN/backend reconciliation paths;
- monitor verified `PURCHASED` purchases that remain unacknowledged/unconsumed;
- retry transient Google/API/network failures with bounded backoff while preserving exactly-once fulfillment;
- do not depend on the player reopening TycoonX before Google can be notified; and
- treat an approaching settlement deadline as an operational incident.

A Google automatic refund/revocation caused by CK-Labs failing to acknowledge or consume in time is **not by itself evidence of player fraud, chargeback abuse, hacking, account compromise, regional-price abuse, or entitlement abuse**.

When such a provider reversal is authoritative, reconcile only the value attributable to that transaction under the normal refund/correction rules. Do not use CK-Labs' processing failure to confiscate unrelated purchased Diamonds, unrelated VIP, promotional value from another transaction, or the player's general game economy.

### 6. Idempotency must exist separately for fulfillment and provider settlement

TycoonX needs at least two durable facts for a Google purchase:

- whether the verified purchase has already produced its TycoonX entitlement; and
- whether Google settlement has reached the correct acknowledged/consumed state.

Do not collapse those into one boolean that can replay the grant when settlement is retried.

A safe retry model is:

- `entitlement_granted = true`, `provider_settled = false`: retry only acknowledgement/consumption;
- `entitlement_granted = true`, `provider_settled = true`: no grant and no unnecessary settlement mutation;
- `entitlement_granted = false`, valid verified `PURCHASED`: run the controlled fulfillment path once, then settle; and
- conflicting provider/local evidence: quarantine for reconciliation rather than choosing the state that grants or revokes the most value.

The purchase token and authoritative provider state remain the Google transaction anchor. `orderId` must not become the sole idempotency key because legitimate Google purchases can exist without one.

### 7. Do not use acknowledgement/consumption state as fraud proof

The following are operational/payment signals, not automatic proof of misconduct:

- a completed purchase that is not yet acknowledged;
- a consume/acknowledge request timing out;
- an `ITEM_NOT_OWNED`, already-consumed, already-acknowledged, service-disconnected, or transient provider response that can arise during reconciliation;
- an old app version that failed to settle but has a valid provider purchase;
- a purchase completed while TycoonX was offline;
- an automatic refund caused by missed acknowledgement; or
- a product accidentally configured with the wrong consumable/non-consumable behavior.

Fraud, chargeback abuse, regional-price abuse, hacking, or entitlement abuse requires separate reliable evidence and the proportionate enforcement rules already defined elsewhere in the TycoonX legal/payment gates.

### 8. Refunds, reversals, chargebacks, and restores remain transaction-specific

Acknowledgement or consumption does not make a purchase immune from a later valid refund, reversal, chargeback, or provider correction.

- Google remains authoritative for Google purchase/refund/revocation state.
- TycoonX server records remain authoritative for what entitlement was actually granted and what transaction-specific correction has already occurred.
- A refund after a consumed Diamond purchase can still require a bounded correction of the Diamonds attributable to that purchase.
- A refund/revocation affecting 30-Day VIP cannot be transformed into a Diamond deduction from another purchase.
- A valid acknowledged Lifetime VIP remains restorable/reconcilable from authoritative records unless the underlying transaction is validly refunded, reversed, invalidated, or another lawful basis applies.
- Restore/reconciliation must not consume a non-consumable Lifetime VIP merely to make a restore operation succeed.

### 9. Mandatory German/EU consumer rights remain intact

Nothing in Google acknowledgement, consumption, automatic-refund, retry, product-classification, or anti-fraud logic waives mandatory consumer rights.

Where applicable, preserve statutory rights concerning pre-contract information, total price, withdrawal and any required consent to early digital performance, conformity, required updates, cure, price reduction, termination, refund, damages/liability, and other non-waivable remedies.

If CK-Labs' Google integration error causes a paid product not to be delivered, to be revoked incorrectly, or to become unavailable contrary to the contract, the acknowledgement rule is not a defense against a remedy required by applicable law. Likewise, a provider automatic refund does not authorize CK-Labs to characterize the consumer as abusive merely because the platform reversed the payment after CK-Labs missed its settlement obligation.

### 10. Required release evidence

Before shipping a Google Play billing change, retain evidence that:

- each live TycoonX Google product has a documented consumable/non-consumable processing classification;
- Diamond SKUs use the intended consumable settlement path;
- Lifetime VIP cannot reach any consume path;
- 30-Day VIP repeat-purchase configuration matches the one-time non-renewing product description;
- `PENDING` never grants/acknowledges/consumes paid value;
- completed purchases are settled promptly and not merely before an assumed client timer;
- backend recovery can settle a purchase even if the player never reopens the app;
- entitlement-grant and provider-settlement idempotency are separately persisted;
- settlement retries cannot duplicate Diamonds or VIP;
- provider automatic refunds are reconciled transaction-specifically without automatic player sanctions; and
- the current Google guidance was rechecked close to release because provider behavior and APIs can change.

## Minimum regression matrix

Test at least:

1. Verified 500-Diamond purchase: 500 Diamonds are granted once, then the purchase is consumed successfully.
2. Same Diamond token reaches listener, RTDN, foreground query, and retry: one Diamond grant and one final consumed state.
3. Diamond consume call times out after entitlement grant: retry settles Google without granting Diamonds again.
4. Diamond purchase is consumed successfully: the 500 Diamonds remain in the player's TycoonX balance until gameplay or a valid transaction-specific correction changes them.
5. Pending Diamond purchase: no grant, no consume, no acknowledgement; the three-day clock has not started.
6. Pending purchase becomes `PURCHASED` while the app is closed: backend/recovery grants once and settles promptly without waiting for another player login.
7. Verified non-consumable Lifetime VIP: one entitlement grant, acknowledgement succeeds, no consume call is reachable.
8. Lifetime VIP is accidentally sent to a generic consume worker: the test must fail closed before provider consumption.
9. Historical valid Lifetime VIP was accidentally consumed by a prior bug: entitlement remains preserved while the unintended repurchase path is closed and reconciled.
10. 30-Day VIP uses a repeatable one-time-product flow: provider consumption does not end or restart the existing 30-day entitlement.
11. Existing 30-Day VIP is active and an overlapping repeat purchase is not intentionally supported: current checkout does not expose a second purchase path.
12. A stale/misconfigured path nevertheless completes a second valid 30-Day VIP payment: no fraud label; CK-Labs honors a lawful product outcome or promptly refunds/unwinds instead of keeping payment for no value.
13. Settlement worker restarts after `entitlement_granted=true` but before provider settlement: only settlement is retried.
14. Google auto-refunds after CK-Labs misses acknowledgement: affected transaction is reconciled, but no unrelated entitlement is removed and no automatic abuse sanction is applied.
15. Old unsupported app misses settlement but backend later verifies the purchase: minimum-version controls may apply to the client, but the player is not punished for the valid purchase.
16. Refund occurs after a consumed Diamond purchase: only the attributable transaction value is corrected, subject to existing refund and mandatory-rights rules.
17. Restore/reconciliation sees an acknowledged Lifetime VIP: it restores/reconciles from authority and never consumes the product to make it purchasable again.
18. Purchase lacks `orderId` but has a valid verified purchase token: processing remains possible and deduplication does not rely on `orderId` alone.

## Current source references

- Google Play Billing integration and purchase processing: https://developer.android.com/google/play/billing/integrate
- Google Play Billing fraud/security guidance: https://developer.android.com/google/play/billing/security
- Google Play Android Developer API (`purchases.products` acknowledge/consume/get): https://developers.google.com/android-publisher/api-ref/rest

Recheck these sources and the live Play Console configuration before a material Google Play billing release.
