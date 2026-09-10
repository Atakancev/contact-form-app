# TycoonX Xsolla Refund and VIP Entitlement Reconciliation Recheck

**Last reviewed: September 10, 2026.**  
Owner: CK-Labs  
Scope: read-only production verification of Xsolla-backed TycoonX webshop purchase, refund/reversal, Diamond clawback and one-time VIP reconciliation.

This is an internal legal/implementation release gate. It does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, Xsolla terms, or mandatory law. It does not authorize a database, balance, entitlement, purchase, sanction or player-account change.

## 1. Result

A new P0 entitlement-integrity defect is confirmed in the current Xsolla one-time VIP reversal path.

The purchase path correctly records each Xsolla purchase and, for VIP, appends the purchased duration to an aggregate Xsolla VIP expiry. The reversal path then removes `vip_duration_days` by subtracting the **full original duration** from the player's current aggregate Xsolla expiry.

That subtraction is only safe when the reversed purchase is effectively the latest still-unconsumed tail of the aggregate pass. If a player has legitimately stacked a later Xsolla VIP purchase and an earlier purchase is subsequently refunded or reversed after some of the earlier period has already elapsed, subtracting the earlier purchase's full duration can remove time attributable to the later valid purchase.

The canonical TycoonX legal wording already permits source-specific reconciliation of refunded/reversed payments while preserving unrelated valid paid value. The implementation should be changed to match that rule rather than weakening the legal wording.

## 2. P0: reversing an earlier Xsolla VIP purchase can consume later valid VIP time

Current production `xsolla_apply_store_purchase(...)` stores, per purchase, `vip_duration_days`, `vip_started_at` and `vip_expires_at`, while the player's effective Xsolla pass is represented by a single aggregate `xsolla_vip_pass_state.expires_at` value.

Current `xsolla_reverse_store_purchase(...)` does the following for a VIP purchase:

1. finds the original purchase by Xsolla transaction/order identifiers;
2. locks the purchase and current Xsolla pass state;
3. calculates a new pass expiry as the current aggregate expiry minus the purchase's **entire** `vip_duration_days`;
4. marks the identified purchase reversed; and
5. recomputes the profile VIP cache from the resulting effective entitlement state.

The purchase identification and idempotent `reversed` flag are useful controls, but the aggregate expiry subtraction loses source attribution.

### Concrete example

Assume two legitimate 30-Day VIP webshop purchases from the same player:

- Purchase A starts first and initially covers days 1-30.
- Purchase B is bought while A is active and is queued behind A, so the aggregate Xsolla expiry becomes day 60.
- On day 20, Purchase A is refunded.

At that point only 10 future days of A remain. The current reversal logic subtracts all 30 days of A from the aggregate day-60 expiry and moves the aggregate expiry to day 30. That leaves only 10 days of future VIP even though Purchase B is still a separate valid 30-day purchase.

The player should not lose valid later paid VIP time merely because an earlier source is refunded. The correction needs source-aware scheduling/recomputation rather than full-duration subtraction from a shared tail timestamp.

## 3. Required source-aware VIP model

Before this gate can close, Xsolla VIP should be reconciled from authoritative per-purchase entitlement provenance.

A robust model should:

- keep each one-time VIP purchase as an immutable source record with provider transaction/order identity, granted duration, effective start/end or equivalent schedule data, reversal state and audit timestamps;
- on refund/reversal, remove only the **remaining unconsumed entitlement attributable to that source**;
- preserve the complete remaining entitlement attributable to every later valid Xsolla purchase;
- recompute or compact the future Xsolla VIP schedule after a source is reversed so valid later periods can move forward without losing their purchased duration;
- never extend the player beyond the sum of remaining valid source durations merely because a prior source was removed;
- remain idempotent under duplicate/retried refund webhooks;
- recompute effective VIP together with valid RevenueCat, Diamond-funded, Lifetime VIP and documented complimentary/staff sources rather than trusting `profiles.vip` as entitlement proof; and
- retain enough transaction-level evidence to explain which source was granted, consumed, reversed, shifted and preserved.

A single aggregate expiry may remain as a cache for fast reads, but it should be derived from authoritative source records rather than being the only mutable truth used for reversal arithmetic.

## 4. P1 resilience: `purchase_not_found` reversal is currently terminal/ignored

`xsolla_reverse_store_purchase(...)` records the refund/reversal webhook event and attempts to find the corresponding purchase by transaction ID or order ID. If no purchase is present, it marks the webhook event `ignored` with reason `purchase_not_found` and returns.

The normal purchase handler does not visibly consult a prior negative/refund event for the same transaction/order before granting a later purchase record.

Xsolla's current documentation says Store/Payments webhooks for specific events are sent sequentially, and its retry documentation describes retries for payment/order and refund/cancellation events. This reduces the likelihood of ordinary network delivery producing a refund before its purchase event in a correctly configured integration. It does not make a terminal `purchase_not_found` state ideal for reconciliation, because recovery/import issues, transaction-record loss, migration mistakes, concurrent processing, webhook-model transitions, or other operational defects can still leave a legitimate refund without a local purchase row.

This is therefore recorded as P1 resilience rather than evidence that Xsolla normally sends refund webhooks out of order.

Required hardening:

- persist a transaction/order-level negative payment state when an authoritative refund/reversal cannot yet be matched;
- make any later fulfillment for the same immutable transaction/order consult that state before granting Diamonds or VIP;
- either reconcile/hold the purchase safely or require trusted review instead of silently granting against an already-known reversal;
- keep refund state idempotent across retries and combined-vs-legacy webhook models; and
- never infer player fraud solely from a provider/order synchronization failure.

## 5. Diamond reversal is materially stronger

The reviewed Xsolla Diamond reversal logic already has several useful source-specific controls:

- the original Xsolla purchase is located by provider transaction/order identity;
- each purchase stores the gross Diamond amount, amount actually granted and amount used to repay pre-existing clawback debt;
- duplicate reversal is blocked by the purchase-level `reversed` state;
- the reversal removes at most the currently recoverable granted Diamonds; and
- any unrecoverable portion plus debt-repayment effect is moved into `xsolla_diamond_accounts.clawback_debt` rather than blindly making the visible Diamond balance negative.

This is a stronger pattern than an undifferentiated wallet correction and should be retained. It also provides a useful model for RevenueCat Diamond refund reconciliation.

The Diamond model still needs the same general protections: preserve unrelated promotional/gameplay-earned value where source attribution permits, keep authoritative audit records, handle provider corrections idempotently, and preserve mandatory consumer remedies.

## 6. Current production evidence

Aggregate read-only checks during this review found:

- 9 live/default Xsolla VIP purchases;
- 6 live/default Xsolla Diamond purchases;
- no live/default Xsolla VIP purchase currently marked reversed;
- no live/default Xsolla Diamond purchase currently marked reversed;
- no player currently has more than one recorded live/default Xsolla VIP purchase;
- one sandbox refund/reversal event exists; and
- zero webhook events were currently marked `ignored` with `purchase_not_found`.

Accordingly, this document identifies a **structural P0** in the current VIP reversal algorithm. It does not claim that a live player has already lost stacked Xsolla VIP time through this defect.

## 7. Current Xsolla/provider implications

Xsolla's current webhook documentation states that a canceled payment can produce a refund webhook containing the canceled transaction details. Refund retries differ according to who initiated the refund, and a refund may still complete even when CK-Labs' webhook endpoint fails or rejects delivery in some documented cases.

Xsolla also documents two Store/Payments webhook models: newer projects generally use combined `order_paid` / `order_canceled` webhooks, while older configurations can receive separate payment/refund plus order webhooks. The implementation should therefore normalize all supported provider event shapes into one authoritative transaction state rather than coupling entitlement truth to a single webhook name.

The server-side TycoonX entitlement ledger, not a local profile flag, should remain responsible for deciding the in-game consequence after the provider confirms payment, reversal or refund state.

## 8. Legal effect

The canonical TycoonX purchase framework should continue to preserve all of the following:

- a failed, reversed, refunded, charged-back or otherwise invalidated transaction may cause the corresponding entitlement to be withheld, corrected or reversed as permitted by the applicable payment-provider/store rules and law;
- the correction should be attributable to the affected transaction/source rather than used as a blanket basis to erase unrelated valid paid value;
- a separate valid one-time 30-Day VIP, Lifetime VIP, Diamond-funded VIP period, Apple/Google entitlement, Xsolla entitlement or documented complimentary entitlement survives an unrelated refund unless another independent lawful basis requires correction;
- a refund or provider reversal is not by itself proof of fraud or abuse;
- knowing refund/chargeback abuse, fabricated payment state or exploit-assisted entitlement abuse may still be investigated under the existing rules using reliable evidence; and
- mandatory EU/German withdrawal, conformity, price-reduction, termination, refund and liability rights remain intact.

No new public Terms clause is required solely because the current Xsolla reversal arithmetic is defective. Correct the implementation to match the existing source-specific and proportional legal rule.

## 9. Acceptance tests

Do not close this gate until production verification demonstrates at least these cases:

1. A single unconsumed 30-Day Xsolla VIP purchase refunded immediately removes only that source and does not affect another valid entitlement source.
2. A partially consumed Xsolla VIP purchase refunded while no later Xsolla VIP exists removes only its remaining future Xsolla time.
3. Purchase A is partially consumed, Purchase B is legitimately queued behind it, then A is refunded: B retains its full remaining 30-day value and moves forward consistently under the chosen stacking model.
4. Purchase A and B are stacked, B is refunded before it begins: A's valid remaining period is unchanged.
5. Purchase A and B are stacked, B is partially consumed, then B is refunded: only B's remaining attributable period is removed.
6. Three stacked Xsolla VIP purchases are present and the middle purchase is refunded: the first and third sources remain intact and the future schedule is recomputed without a gap or overgrant.
7. The same refund webhook is retried: no second time removal occurs.
8. A refund refers to a transaction/order not yet present locally: a durable negative/hold state is recorded instead of silently forgetting the refund.
9. A later purchase webhook for a transaction/order already carrying a trusted negative/refund state cannot grant value without reconciliation.
10. A valid RevenueCat, Diamond-funded or Lifetime VIP remains effective when an unrelated Xsolla VIP source is refunded.
11. A refunded Xsolla Diamond purchase removes only recoverable source value and records bounded clawback debt for the attributable consumed remainder.
12. A sandbox reversal remains isolated from live/default purchase state.
13. Provider retries are idempotent across whichever combined or legacy Xsolla webhook model the project actually uses.
14. `profiles.vip` is updated only as a derived/cache consequence of authoritative remaining entitlement sources.
15. No refund/reversal path is treated as automatic proof of player misconduct.

Until the source-aware VIP reversal and unmatched-reversal resilience controls are implemented and reverified, this Xsolla payment-integrity gate remains open.