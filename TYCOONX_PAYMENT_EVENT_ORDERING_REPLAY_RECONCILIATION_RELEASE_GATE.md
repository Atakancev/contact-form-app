# TycoonX Payment Event Ordering, Replay & Reconciliation Release Gate

Last reviewed: **September 9, 2026**

This is a P0 operational release gate for payment and entitlement events affecting TycoonX purchases through Apple App Store, Google Play, and the official TycoonX webshop using Xsolla. It complements the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and existing provider-specific release gates. It does not replace mandatory consumer law or transaction-specific platform/provider rules.

## Core invariant

**Webhook arrival order is not entitlement authority.**

A payment callback, notification, queue delivery, retry, replay, support action, or reconciliation job may arrive late, more than once, concurrently, or after a newer provider state already exists. TycoonX must not use “last callback received wins,” local receive time, queue order, or one raw webhook field as the sole basis for granting, revoking, restoring, refunding, or re-pricing paid value.

For every paid transaction, state changes must be derived from authenticated provider evidence, a stable provider/transaction identity, provider-specific chronology or version evidence where available, current authoritative provider state where required, the existing TycoonX entitlement ledger, and idempotent mutation records.

If those sources conflict in a way that could cause an irreversible paid-value change, **fail closed for the irreversible mutation and reconcile**. Do not guess.

## 1. Provider-neutral transaction state model

TycoonX payment processing must keep these concepts separate:

- **provider event:** the notification or API event that arrived;
- **provider transaction:** the Apple transaction, Google purchase token/order, or Xsolla transaction/order to which the event belongs;
- **payment state:** pending, completed/paid, refunded, reversed, charged back, canceled, invalid, or another provider state;
- **entitlement state:** not granted, granted, partially corrected where lawful, revoked/corrected, restored, or under reconciliation;
- **mutation state:** the exact TycoonX grant, correction, or restore operation already applied for that provider transaction; and
- **enforcement state:** any separate fraud/security/account decision, which must not be inferred merely from event ordering or retry behavior.

A provider event is evidence about a provider transaction. It is not itself a new purchase.

## 2. Idempotency before side effects

Before a paid event can change Diamonds or VIP:

- identify the payment channel;
- verify provider authenticity and environment;
- normalize the stable transaction/purchase identity;
- resolve the TycoonX account binding using the provider-specific verified mapping;
- determine whether the exact entitlement mutation was already applied; and
- perform the state transition atomically or with an equivalent concurrency-safe mechanism.

Two workers processing the same payment at the same time must converge on one economic result. A retry after a timeout must be safe even if the first attempt actually committed but its acknowledgment was lost.

Never use only a user ID, product SKU, client receipt timestamp, local queue timestamp, order screen state, or current account balance as the idempotency key.

Use channel-qualified identities so an Apple transaction identifier, Google purchase token/order identifier, and Xsolla transaction identifier cannot collide merely because their raw strings happen to match.

## 3. Stale-event protection

For a given provider transaction, an older event arriving later must not roll the transaction back to an older state merely because it was received last.

Examples that must remain safe:

- paid -> refunded -> delayed duplicate paid;
- pending -> purchased -> delayed pending/canceled signal;
- valid entitlement -> provider revocation -> historical restore/replay;
- successful correction -> duplicate refund/chargeback webhook;
- outage backlog -> mixed old and new events processed after recovery.

Store enough provider chronology/version evidence to detect stale events where the provider supplies it. Where the event itself is only a signal, query the provider's authoritative current transaction state before making a destructive or restorative entitlement change.

## 4. Apple App Store ordering and replay

For App Store Server Notifications V2:

- verify the signed JWS, bundle/application identity, and `environment` before any production mutation;
- use `notificationUUID` to suppress duplicate processing of the same notification while still allowing safe reconciliation if a previous attempt failed before completion;
- retain `signedDate` because Apple defines it as the time Apple signed the JWS snapshot;
- when multiple notifications concern the same transaction ID, do not let a notification with an older `signedDate` overwrite the state represented by a newer `signedDate` merely because the older notification arrived later;
- remember that Apple states `signedDate` remains the same when a notification is resent during a retry;
- do not interpret a duplicate UUID, retry, delayed notification, sandbox callback, or notification-history recovery item as a second purchase;
- where notification state is incomplete, contradictory, or safety-critical, reconcile against current verified StoreKit/App Store Server API transaction/entitlement history rather than inventing chronology; and
- keep sandbox/TestFlight/Xcode evidence isolated from unrestricted production value under the existing Apple environment gates.

`notificationUUID` deduplication is transport idempotency. Transaction-level idempotency is still required because different Apple notifications can legitimately refer to the same transaction over its lifecycle.

## 5. Google Play RTDN and Pub/Sub replay

Google Real-time Developer Notifications are a **change signal**, not the complete purchase record. Google currently instructs developers to call the Google Play Developer API after receiving RTDN to obtain the complete status and update backend state.

Therefore:

- validate the expected Pub/Sub/project/topic/application context and package name;
- use Pub/Sub `messageId` to reduce duplicate notification processing, but do not treat it as the purchase identity;
- use the Google purchase token as the key purchase identity where applicable;
- after relevant RTDN, query the appropriate Google Play Developer API before granting or destructively changing paid value when current state is required;
- treat `eventTimeMillis` as event metadata, not as a substitute for the authoritative purchase state;
- do not assume delivery order, because ordinary Pub/Sub subscriptions are at-least-once by default and have no ordering guarantee unless ordering is deliberately configured;
- remain idempotent even when Pub/Sub redelivers a message after acknowledgment or after a replay/seek operation;
- process `VoidedPurchaseNotification` against the matching purchase token/order and refund type, including quantity-aware logic where Google reports a quantity-based partial refund; and
- never let a replayed older positive signal re-grant value after authoritative Google evidence shows the same transaction was voided/refunded.

TycoonX must remain correct even if queue ordering is disabled, a subscriber restarts, messages are replayed, or multiple workers receive related events close together.

## 5A. Google multi-quantity partial refunds and multi-product distinction

Google currently distinguishes a **multi-quantity purchase** from a **multi-product one-time-product purchase**. TycoonX must not treat those as the same billing shape.

For a multi-quantity one-time-product purchase:

- `VoidedPurchaseNotification.refundType = REFUND_TYPE_QUANTITY_BASED_PARTIAL_REFUND` means part of the purchased quantity was voided;
- Google states that one purchase may be partially voided multiple times;
- when the remaining total quantity is refunded, Google reports `REFUND_TYPE_FULL_REFUND` rather than another quantity-partial value;
- the current `purchases.productsv2` response exposes the original `quantity` and the remaining `refundableQuantity`, where `refundableQuantity` reflects quantity-based partial refunds and full refunds; and
- TycoonX must reconcile the **cumulative refunded quantity** from authoritative purchase state and its own already-applied correction ledger, rather than assuming that each partial-refund notification represents one new unit to claw back.

For quantity reconciliation, the safe target is the provider-supported equivalent of:

`cumulative refunded quantity = original quantity - current refundableQuantity`

The next TycoonX economic correction is only the positive delta between that cumulative provider-refunded quantity and the quantity already corrected for that purchase. Duplicate or replayed partial-refund notifications must therefore converge to zero additional correction when `refundableQuantity` has not changed.

Example: a player buys quantity `3` of a 1,000-Diamond Google product, so the authorized purchase represents 3,000 Diamonds. If authoritative Google state moves from `refundableQuantity = 3` to `2`, TycoonX corrects at most the transaction-specific value for one 1,000-Diamond unit. A duplicate RTDN while authoritative state remains `2` performs no second correction. If a later partial refund changes the value to `1`, only one additional unit is corrected. If the final remaining unit is then refunded and Google reports a full refund with `refundableQuantity = 0`, TycoonX corrects only the final outstanding unit; it must not claw back all three units again.

Google billing **consumption** is separate from a player's later in-game spending of Diamonds. Consumption state must not be used as a substitute for `refundableQuantity`, and a consumed purchase must not be assumed fully spent by the player. Refund correction remains transaction-scoped and must preserve unrelated genuine purchased value and mandatory consumer rights.

For a Google **multi-product one-time-product purchase**, one Google purchase can contain multiple different one-time products. Google currently states that individual items in such a multi-product purchase cannot be refunded separately: refund/cancellation is for the entire multi-product purchase, and all entitlements associated with that purchase are canceled. The RTDN `sku` is not supplied for a multi-product purchase, so TycoonX must resolve the purchase's full item set from the appropriate Google Play Developer API line-item data rather than guessing from a missing SKU.

Do not enable a new TycoonX multi-quantity or multi-product Google purchase shape unless fulfillment, partial/full refund handling, finance reconciliation, support tooling, and idempotency have been tested for that exact shape. A multi-product bundle containing Lifetime VIP requires a separate explicit review before sale because a bundle refund must not be allowed to reopen a closed Lifetime VIP sales window or create a replacement sale.

## 6. Xsolla webhook retry and reconciliation

For the official TycoonX webshop:

- verify the Xsolla webhook signature against the required request representation before accepting a payment mutation;
- key fulfillment and correction to stable Xsolla transaction/order identity and the TycoonX-side external/order identity where configured;
- do not treat each `order_paid`, `order_canceled`, `payment`, or `refund` delivery as a new economic event simply because Xsolla retried it;
- keep webhook handlers idempotent because Xsolla documents retry behavior when the endpoint does not acknowledge successfully;
- never resolve a paid/canceled/refunded conflict using HTTP arrival order alone;
- when webhook evidence conflicts or a destructive correction is ambiguous, use Xsolla transaction/report evidence or the applicable current Xsolla API/Publisher Account transaction record before mutating paid value; and
- preserve test/sandbox separation, refund-settlement state, refund-reason evidence limits, regional-pricing evidence rules, and merchant/payment-role distinctions established by the existing Xsolla gates.

Xsolla's transaction-report API can return detailed transaction information and is expressly documented for financial reconciliation. That makes it a reconciliation source when webhook delivery history alone is unsafe.

## 7. Diamonds exactly-once invariant

A valid purchased Diamond transaction may increase purchased Diamond value exactly once for the amount authorized by the transaction.

A duplicate, retry, replay, restore scan, app restart, background reconciliation, support retry, or worker crash recovery must not mint the same purchased Diamonds again.

If the underlying transaction is later authoritatively refunded, reversed, charged back, duplicated, fraudulent, technically erroneous, or otherwise invalid, CK-Labs may correct the corresponding transaction-specific value as permitted by the canonical policy and mandatory law. That correction must not become a second independent clawback when the same reversal is reported again.

Purchased Diamonds do not expire solely because time passes. A stale positive event after a completed reversal cannot re-grant the original purchased Diamonds merely because it arrives last.

Unrelated genuine purchased value from another transaction or channel must remain isolated.

## 8. One-time 30-Day VIP invariant

30-Day VIP remains one **one-time, non-renewing entitlement lasting 30 consecutive days**.

For one valid purchase, retries, duplicate callbacks, restore scans, app restarts, or reconciliation jobs must not:

- start a second overlapping 30-day period;
- restart the original start date;
- extend the entitlement by another 30 days;
- convert it into recurring billing; or
- create a second refund/correction target.

If repeat 30-Day VIP purchases are legitimately supported, each separate provider-confirmed purchase must retain its own transaction identity and contractually intended activation logic.

## 9. Lifetime VIP invariant

Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability.

A delayed callback, restored historical transaction, server-notification-history replay, Pub/Sub replay, Xsolla retry, old cached purchase record, support reconciliation, or provider API history item may restore a genuine already-purchased Lifetime VIP where appropriate, but it must **never create a new sale or reopen a closed sales window**.

A legitimate historical Lifetime VIP entitlement must not be deleted merely because a recent event stream is temporarily incomplete.

## 10. Refunds, chargebacks and repurchases

Reversal logic must be transaction-scoped.

If transaction A was refunded and the same user later makes valid transaction B for the same product:

- a delayed refund/reversal event for A must not revoke B;
- a stale paid event for A must not re-grant A;
- a restore operation for B must not reactivate A; and
- support must be able to identify which transaction a correction actually concerns.

`refund_requested`, `refund_processing`, `refund_settled`, failed/rejected refund, and ambiguous states remain distinct where the provider workflow requires that distinction. A request or processing acknowledgment is not automatically proof that money was returned.

## 11. Historical price, currency and tax integrity

Event replay or reconciliation does not retroactively reprice a completed one-time purchase.

Preserve the transaction's provider-confirmed historical price, currency, tax/fee evidence where applicable, product/bundle identity, quantity, and completion timestamp separately from the current catalog.

Future price decreases do not automatically create a refund, credit, price match, extra Diamonds, or extra VIP time, and future price increases do not create an extra charge on an already completed one-time purchase, except where mandatory law requires otherwise.

A refund or legal price reduction must be calculated under the applicable provider flow and law for that transaction, not by substituting today's catalog price or FX rate merely because a reconciliation job ran later.

## 12. Outage, backlog and recovery mode

An outage does not justify disabling verification or idempotency.

When Apple, Google, Xsolla, CK-Labs infrastructure, authentication, queues, databases, or network dependencies recover after an incident:

- backlog processing uses the same signature/authenticity checks as live processing;
- old events are still checked for staleness;
- duplicate suppression and transaction-level idempotency stay active;
- concurrency remains controlled;
- ambiguous destructive mutations are reconciled rather than guessed;
- genuine completed purchases delayed by the outage are delivered after authoritative confirmation; and
- users are not accused of fraud or entitlement abuse merely because provider events arrived late or twice.

## 13. Manual support and administrative correction

A manual support/admin correction must have its own auditable mutation identity and reason. It must not overwrite or fabricate the underlying Apple, Google, or Xsolla transaction history.

If support retries a grant because delivery appears missing, the operation must re-check the transaction ledger first. “Try grant again” must be unable to duplicate an already committed entitlement whose earlier response was lost.

If a provider later supplies contradictory authoritative evidence, reconcile the manual mutation against that evidence and mandatory law rather than hiding the provider history.

## 14. Unknown future event types and schema changes

Providers can add notification types, fields, and enum values.

Unknown future payment/reversal event types must be authenticated, retained only as necessary, and routed to safe reconciliation. They must not default to “paid,” “refund,” “fraud,” or “ignore forever” when doing so could irreversibly mutate paid value or deny a mandatory remedy.

A newly introduced event type does not authorize a new recurring product, reopen Lifetime VIP, change Diamond quantity, alter 30-Day VIP duration, or rewrite historical price/currency by implication.

## 15. Security and enforcement separation

Duplicate, delayed, replayed, or out-of-order provider events are not by themselves evidence that a player hacked TycoonX, compromised an account, manipulated regional pricing, abused a promotion, initiated a chargeback, or committed entitlement abuse.

Real fraud, exploit, account-compromise, or payment abuse evidence may still justify proportionate security action under the canonical Terms and provider-specific gates. The evidence must be evaluated separately from transport behavior.

Do not use a payment ordering bug to manufacture player debt or a permanent suspension without transaction-specific evidence and the applicable review/mandatory-rights safeguards.

## 16. Privacy and data minimization

Event logs should retain only the provider identifiers, event metadata, account-binding evidence, transaction facts, entitlement mutations, reconciliation outcomes, and audit data reasonably necessary for payment delivery, fraud/security, refunds, disputes, accounting, tax, legal obligations, and mandatory remedies.

Do not copy full raw webhook bodies indefinitely merely because doing so is convenient. Avoid duplicating unnecessary email, IP, device, payment-instrument, or other personal data into general logs. Apply retention and access controls consistent with the canonical Privacy Policy and applicable law.

## 17. Mandatory German/EU consumer-rights override

This gate is an implementation safeguard, not a waiver of consumer rights.

Where the German digital-product rules apply, BGB § 327d requires the covered digital product to be provided free from product and legal defects, and BGB § 327i preserves statutory remedies where its conditions are met, including cure, contract termination or price reduction, and applicable damages.

A stale webhook, missing callback, queue failure, duplicate notification, local state mismatch, unsupported client, or reconciliation bug must not be used to defeat a mandatory right. Equally, mandatory rights do not require CK-Labs to duplicate a valid entitlement merely because transport delivered the same provider event more than once.

Nothing in this gate limits non-waivable withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy, accessibility, or other mandatory rights.

## 18. Minimum regression matrix

Before release, production payment changes, webhook/queue migrations, or recovery after a payment incident, verify at minimum:

1. Apple paid event processed once, then identical `notificationUUID` retried.
2. Apple refund/revocation snapshot processed, then an older `signedDate` paid snapshot arrives later.
3. Apple notification-history recovery returns an already processed notification.
4. Two Apple workers process different notifications for the same transaction concurrently.
5. Google one-time purchase RTDN arrives twice with the same Pub/Sub `messageId`.
6. Google related RTDN messages arrive out of order and the backend still converges from Developer API state.
7. Pub/Sub replay/seek redelivers an acknowledged historical notification.
8. Google purchase is voided, then an older positive RTDN is replayed.
9. Google quantity `3` of a 1,000-Diamond product moves from `refundableQuantity = 3` to `2`; only one 1,000-Diamond unit becomes newly eligible for transaction-specific correction.
10. The same quantity-partial-refund RTDN is delivered again while `refundableQuantity` remains `2`; no second correction occurs.
11. A second partial refund moves `refundableQuantity` from `2` to `1`; exactly one additional unit becomes newly eligible for correction.
12. The final remaining Google unit is refunded as `REFUND_TYPE_FULL_REFUND` with `refundableQuantity = 0`; only the final not-yet-corrected unit is applied, not all three units again.
13. A consumed Google Diamond purchase receives a quantity-based partial refund; Google billing consumption is not treated as proof that the player spent all Diamonds in game.
14. A Google multi-product one-time-product purchase is fully refunded; TycoonX resolves all line items and does not invent an unsupported item-level refund from the missing RTDN `sku`.
15. Xsolla `order_paid` is retried after the original handler committed but failed to acknowledge.
16. Xsolla cancellation/refund evidence arrives before a delayed payment webhook for the same transaction.
17. Xsolla webhook evidence conflicts and the transaction is reconciled against current Xsolla transaction/report evidence.
18. 1,000 purchased Diamonds are granted once, refunded once, then an old payment event is replayed without re-granting or double-clawing back.
19. 30-Day VIP duplicate delivery does not restart or extend the 30 consecutive days.
20. Lifetime VIP historical restore succeeds after the sales window closes without making Lifetime VIP newly purchasable.
21. Refunded transaction A cannot revoke a later valid repurchase B of the same product.
22. An outage backlog contains paid, refund, and duplicate events in mixed arrival order.
23. A worker crashes after entitlement commit but before webhook acknowledgment; retry produces no second grant.
24. Two concurrent workers attempt the same Diamond grant and only one economic mutation commits.
25. A support agent retries a missing-delivery correction after the first correction actually committed.
26. A provider introduces an unknown event enum and TycoonX performs no irreversible paid mutation until reviewed.
27. Apple, Google, and Xsolla raw identifiers that happen to look identical remain isolated by channel namespace.
28. Current catalog price changes after purchase and later reconciliation preserves the original completed transaction amount/currency.
29. A transport duplicate or reordering event creates no fraud strike, regional-price-abuse flag, account-compromise finding, or suspension by itself.

## 19. Release-blocking conditions

**BLOCK RELEASE / BLOCK PAYMENT-PATH CHANGE** if any of the following remains true:

- entitlement state is effectively “last webhook received wins”;
- a duplicate provider event can grant or remove paid value twice;
- concurrent workers can both commit the same transaction mutation;
- Apple older `signedDate` snapshots can overwrite newer state solely because they arrived later;
- Google RTDN is treated as complete current purchase authority without required Developer API reconciliation;
- Google quantity-based partial refunds are applied per notification rather than reconciled from cumulative authoritative quantity state;
- a final Google full refund can repeat quantities already corrected by earlier partial refunds;
- Google multi-product and multi-quantity purchases are treated as interchangeable refund models;
- Pub/Sub duplicate/out-of-order/replay behavior can change economic outcome;
- Xsolla retries can duplicate grants or cancellations;
- refund/reversal events can affect a different later purchase of the same product;
- stale events can reopen Lifetime VIP sales or extend 30-Day VIP;
- outage recovery bypasses normal verification/idempotency controls;
- ambiguous conflicts are silently guessed instead of reconciled; or
- mandatory consumer remedies can be denied because local event state is stale or incomplete.

## Current reference checkpoint

Reviewed against current official references on **September 9, 2026**:

- Apple App Store Server Notifications `signedDate` documentation;
- Google Play Real-time Developer Notifications reference, including `REFUND_TYPE_QUANTITY_BASED_PARTIAL_REFUND`;
- Google Play `purchases.productsv2` `quantity` / `refundableQuantity` semantics;
- Google Play multi-product one-time-product purchase/refund guidance;
- Google Cloud Pub/Sub delivery, ordering, and replay documentation;
- Xsolla webhook and transaction-report documentation; and
- current German BGB §§ 327d and 327i.

Provider documentation and law can change. Re-verify the operative rules before a material payment architecture migration, a new payment product, or a release that depends on newly changed provider behavior.