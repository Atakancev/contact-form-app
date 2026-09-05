# TycoonX Refunded / Transferred Value Reconciliation Release Gate

**Status:** P0 payment-integrity / economy-correction gate

**Last reviewed:** September 5, 2026

This operational gate governs the narrow case where value from a TycoonX purchase is later refunded, reversed, charged back, cancelled, or otherwise invalidated after some or all corresponding in-game value has already been consumed, exchanged, traded, transferred, routed through a company, spent in a market, or moved to another account.

It complements, and does not replace:

- the canonical TycoonX Terms of Service and Purchases & Refunds Policy;
- `TYCOONX_GAME_ECONOMY_RESET_CORRECTION_RELEASE_GATE.md`;
- `TYCOONX_APPLE_REFUND_ENTITLEMENT_RELEASE_GATE.md`;
- `TYCOONX_GOOGLE_PLAY_CHARGEBACK_REVIEW_RELEASE_GATE.md`;
- `TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md`;
- the genuine-transaction and real-money-trading enforcement gates; and
- mandatory consumer, payment, privacy, and digital-product law.

This gate does **not** create a new player-facing conduct rule. It standardizes how CK-Labs should reconcile an already-existing transaction-specific refund or invalidation without double-clawing value, punishing innocent recipients merely because they are downstream, or converting an in-game correction into real-world debt.

## 1. Final payment state first, economy correction second

Do not start a destructive downstream clawback merely because a player asks for a refund, opens a payment dispute, reports account compromise, or triggers a provider review.

A destructive payment-linked correction requires an authoritative state showing that the relevant purchase has actually been refunded, reversed, voided, charged back, cancelled after delivery, or otherwise invalidated, or another separate lawful basis for the correction.

Provider-specific examples include:

- **Apple:** verified current transaction/refund/revocation information, including an applicable App Store Server Notification such as `REFUND` or another authoritative Apple transaction state. A `CONSUMPTION_REQUEST` is a refund-decision input, not proof that a refund was granted.
- **Google Play:** authoritative Google Play purchase/refund/void state, including a `VoidedPurchaseNotification`, Voided Purchases API result, or the applicable Developer API purchase state. A `PendingRefundReviewNotification` or CK-Labs refund suggestion is not itself a final refund.
- **Xsolla:** the transaction-specific Xsolla payment/refund/reversal/chargeback state from the configured authoritative integration. An evidence request or open dispute alone is not a completed refund event.

If provider state is ambiguous or still pending, prefer a proportionate temporary purchase/economy restriction where justified and continue reconciliation rather than permanently deleting value as though the outcome were final.

## 2. One invalid source transaction creates one correction budget

Every payment-linked reconciliation must start from one identified source transaction and one measurable amount of paid value attributable to that transaction.

Create a correction case with at least:

- `correction_case_id`;
- payment channel;
- provider transaction / purchase-token / order reference;
- TycoonX account originally credited;
- product and quantity;
- original grant amount;
- authoritative provider state and event timestamp;
- amount of affected value still present at the source;
- amount already consumed or transformed;
- amount transferred downstream;
- correction already applied at the source;
- correction already applied downstream; and
- **remaining correction budget**.

The maximum in-game correction attributable to the payment event must not exceed the value actually attributable to the invalidated transaction, subject to a separately documented legal or gameplay basis.

A refund of one Diamond bundle must not become permission to remove the same Diamond amount from the purchaser **and again** from every downstream recipient.

Use a simple conservation invariant:

`remaining_correction_budget = attributable_invalid_value - value_already_recovered_for_this_case`

The exact internal units can vary by product and game mechanic, but the case must have one auditable ceiling so retries, parallel workers, support actions, and downstream graph processing cannot recover the same invalid value twice.

## 3. Source-first correction is the default

Where the refunded or invalid value is still identifiable and available on the original purchasing account, correct it there first.

Preferred order where technically and legally appropriate:

1. remove or reverse the directly traceable unused value from the source account;
2. reverse the directly traceable transaction that moved the affected value, if doing so restores both sides consistently;
3. trace only the remaining unrecovered portion downstream; and
4. use a documented in-game deficit or another proportionate reconstruction only where exact recovery is impossible and the canonical Terms and applicable law permit it.

Do not trace downstream merely because graph traversal is technically possible. If a narrow source correction fully restores integrity, the remaining correction budget is zero and downstream accounts must not be debited for that same source event.

## 4. Downstream tracing must preserve transaction context

If affected value left the source account before the provider invalidation, reconstruct the relevant path as far as reasonably necessary.

For each downstream edge, preserve where available:

- sender and recipient account references;
- timestamp;
- mechanic used, such as transfer, art purchase, company payment, market trade, contract, job, Begging, or another supported feature;
- amount/value moved;
- identifiable consideration given by the recipient;
- whether the received value was later moved again, consumed, or transformed;
- relationship to the source correction case; and
- whether any correction for that edge or value lot was already applied.

Do not assume that every later transaction by the same account contains the refunded value. Mixed balances require a documented allocation/reconstruction method rather than a blanket assumption that all current money, Diamonds, inventory, company assets, or market activity are tainted.

Where unit-level tracing is unavailable, use a reasonable, consistent, reviewable approximation. Record the method. Do not invent precision the ledger does not support.

## 5. A downstream recipient can be corrected without automatically being punished

State correction and account fault remain separate decisions.

Examples:

- A player knowingly helps the purchaser move refunded value after a chargeback: the transaction may require correction, and separate evidence may also support enforcement.
- A player receives value through an apparently ordinary market trade and gives genuine in-game consideration without knowing the source purchase was later charged back: a narrow state correction may still be necessary, but receipt alone is not proof of fraud, RMT, exploit abuse, or entitlement abuse.
- A compromised account sends purchased value away before the legitimate owner reports the takeover: the transaction graph may need correction while responsibility of the legitimate owner remains a separate account-compromise question.

A downstream correction should not silently become a permanent ban, fraud label, or RMT finding. Use the relevant public Terms rule and evidence standard for any separate punishment.

## 6. Avoid double loss where genuine consideration can be reconstructed

A technically valid unwind can still be unnecessarily destructive if one innocent transaction party loses both what they paid and what they received while CK-Labs recovers the same invalid value elsewhere.

Where reasonably possible, reverse both sides of a directly linked in-game transaction together rather than deleting only the downstream recipient's received asset while leaving the recipient's genuine consideration with the source account.

Example:

- Player A buys Diamonds, converts or uses them to obtain game value, and transfers $1,000,000 in game money to Player B in exchange for an item.
- The underlying Diamond purchase is later authoritatively charged back.
- If the exact A-B trade is unwound, the implementation should consider restoring the item/consideration consistently rather than taking $1,000,000 from B while A also keeps B's item and CK-Labs separately recovers the full source value.

This is an integrity rule, not a promise that every downstream trade involving invalid value must be preserved. Where restoration is impossible, the correction must remain within the documented correction budget and use the narrowest reasonable method.

## 7. Sinks, transformations, and missing value

Refunded value may have been spent on NPCs, taxes, upgrades, production inputs, fees, irreversible actions, or other sinks rather than remaining in another player's balance.

Do not fabricate a downstream recipient when the value no longer exists as transferable state.

Possible responses, depending on the canonical Terms, technical feasibility, and applicable law, include:

- leaving the sink transaction in place and applying a source-account in-game deficit tied to the identified invalid value;
- reversing a directly attributable upgrade/item/result where that is technically safe and proportionate;
- temporarily limiting economy functions while the invalid-value deficit is resolved through legitimate gameplay; or
- accepting that exact recovery is impossible where further correction would create greater inconsistency or unlawfully affect unrelated legitimate value.

Any negative in-game balance is an internal game-state correction only. It must not be represented as a real-world debt, sent to collections, charged to a card, deducted from an unrelated future purchase, or used to force the player to buy Diamonds.

## 8. Lawful refund, withdrawal, or chargeback activity is not automatically fraud

The mathematical need to reverse refunded paid value does not prove misconduct.

Keep separate factual questions:

1. Did the provider or mandatory law invalidate/refund the payment?
2. What TycoonX value was actually delivered from that transaction?
3. Where is that value now?
4. What correction is needed to prevent the player from retaining both the returned real-world payment and the corresponding paid game value?
5. Is there separate evidence that somebody intentionally abused refunds, chargebacks, RMT, account sharing, exploits, or transfer rules?

A statutory withdrawal, good-faith fraud report, successful provider refund, or legitimate chargeback can require value reconciliation without supporting account punishment.

Do not describe a consumer's exercise of a mandatory remedy as cheating merely because the corresponding digital value must be unwound.

## 9. If the authoritative payment state later changes, reconcile the correction too

A payment dispute can move through intermediate states. A stale temporary or provisional correction must not survive indefinitely after the authoritative transaction becomes valid again.

Where a chargeback is withdrawn, a dispute is resolved in CK-Labs' favor, a provisional void is reversed, or another authoritative provider update establishes that the purchase remains valid:

- stop additional clawback work for that case;
- recompute the remaining correction budget;
- restore a wrongly removed entitlement or game value where reasonably reconstructable and required;
- release temporary payment/economy restrictions whose only basis disappeared; and
- retain an audit record explaining the reversal of the correction.

Do not automatically grant fresh value on top of value that was never removed. Restoration must itself be idempotent.

## 10. Product-specific boundaries

### Purchased Diamonds

Purchased Diamonds are the main TycoonX paid consumable that may be spent, exchanged, or indirectly moved through the game economy.

- Purchased Diamonds do not expire solely because time passes.
- A refund or invalidation may justify transaction-specific correction of the corresponding value under the canonical legal framework.
- A mixed Diamond balance must not be wiped merely because one purchase lot was refunded.
- Promotional, earned, compensation, or separately purchased Diamonds are not automatically part of the correction case.

### One-time 30-Day VIP

30-Day VIP remains a one-time, non-renewing 30-day entitlement.

- A refund/invalidation concerns the specific purchase and its remaining/used service period under the applicable provider and mandatory-law rules.
- Reconciliation must not restart the 30-day clock.
- Another separately purchased 30-Day VIP period is outside the correction case.
- 30-Day VIP must not be converted into transferable game currency merely to make a clawback easier.

### Lifetime VIP

Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase.

- A final refund/invalidation of the specific Lifetime VIP transaction may justify correcting that entitlement where lawful.
- The correction does not reopen or extend a closed Lifetime VIP sales window.
- Another valid Lifetime VIP provenance record or unrelated paid value must not be removed merely because one transaction is disputed.

VIP is not a general downstream-transfer graph asset unless TycoonX expressly enables a supported transfer/gift mechanism for that product.

## 11. Provider-specific idempotency keys

The economy correction must map to the strongest stable provider identity available for the actual transaction.

Examples:

- Apple transaction identity and verified refund/revocation state;
- Google Play `purchaseToken` plus the authoritative void/refund state, with `orderId` retained where available but not treated as a universal purchase-token substitute; and
- Xsolla transaction/order identity from the configured server-side integration.

Provider webhook/event IDs can be useful for delivery deduplication but should not replace the underlying business transaction identity used for the correction case.

A repeated provider notification must be able to say: `this source transaction was already reconciled under correction_case_id X` and stop without subtracting anything again.

## 12. Multi-product and multi-quantity purchases need the provider's actual refund shape

Do not infer a refund shape from the TycoonX catalog alone.

For Google Play in particular:

- a multi-product one-time purchase can contain several product IDs under one purchase token;
- Google's current documentation states that individual items in that multi-product purchase are not separately refundable through the multi-product refund flow and a full refund cancels all entitlements associated with the purchase;
- quantity-based partial refunds are a different mechanism for multi-quantity purchases and must not be reinterpreted as a partial refund of one product from a multi-product bundle; and
- authoritative `refundType`, purchase-token, and line-item data must determine the correction scope.

If a provider refund necessarily invalidates several line items, TycoonX must reconcile those line items without touching purchases outside the affected provider transaction.

## 13. Mandatory EU/German consumer rights remain outside the clawback shortcut

This gate does not decide whether a consumer was entitled to withdraw, terminate, obtain a price reduction, receive a refund, or exercise another statutory remedy. Those questions remain governed by the canonical policies, the actual transaction, the responsible merchant/payment channel, and mandatory law.

Where German digital-product law applies, contract termination can require repayment of payments under BGB § 327o. A game-state reconciliation after such a remedy must not be used to claw back the real-world refund through a disguised card charge, invented debt, or forced repurchase.

Likewise, if mandatory law requires a broader or narrower consequence than this operational default, mandatory law controls.

## 14. Privacy and evidence minimization

A transaction graph can reveal account relationships and behavior. Use only the service data reasonably necessary to identify and correct the affected value.

- Do not inspect private communications merely because a refund occurred.
- Review relevant communications only where separately necessary and lawful for a fraud, transfer, RMT, account-compromise, or dispute investigation under the TycoonX Privacy Policy.
- Do not expose one player's private payment identifiers or personal data to another player merely to explain a correction.
- Preserve enough audit data for correction integrity, support challenges, repeated-abuse detection, legal claims, accounting, and provider reconciliation, but apply the applicable retention and access-control rules.

## 15. Support and challenge route

A player affected by a significant correction should have a practical way to report that CK-Labs used the wrong source transaction, wrong account, wrong quantity, wrong downstream path, or duplicate correction.

Support review should be able to answer at least:

- which provider transaction triggered the correction;
- what product/quantity was involved;
- what amount of correction budget existed;
- what had already been recovered;
- which in-game transaction(s) were reversed or adjusted; and
- whether a later provider update changed the result.

Do not disclose another player's protected personal information while explaining the affected user's own correction.

## 16. Minimum regression matrix

Before relying on automated downstream reconciliation, test at minimum:

1. refunded Diamond bundle remains entirely unused on the purchaser: source-only correction, no downstream action;
2. half the refunded value remains at source and half was transferred once: total recovery cannot exceed the original affected value;
3. A → B → C transfer chain: a retry cannot subtract the full source amount from A, B, and C;
4. a downstream recipient gave genuine consideration: correction and punishment remain separate, and a reversible two-sided trade is unwound consistently where feasible;
5. downstream recipient knew about a chargeback scheme: state correction plus a separately evidenced enforcement case;
6. affected value was spent into an NPC/tax/upgrade sink: no imaginary recipient is created and no real-world debt is generated;
7. mixed Diamond balance containing several valid purchases plus one refunded purchase: unrelated purchase lots remain intact;
8. duplicate Apple refund/revocation event: exactly one correction;
9. duplicate Google `VoidedPurchaseNotification`: exactly one correction;
10. duplicate Xsolla refund/cancellation webhook: exactly one correction;
11. Google quantity-based partial refund: only the provider-confirmed quantity scope enters the correction budget;
12. Google multi-product full refund: all affected line items in that provider transaction are reconciled, no unrelated order is touched;
13. pending Apple refund request / Google refund review / Xsolla dispute: no destructive final clawback before authoritative outcome;
14. chargeback later resolved with the purchase remaining valid: stale correction/restriction is reversed idempotently where appropriate;
15. compromised purchaser account: payment/economy correction and owner fault are assessed separately;
16. statutory withdrawal: corresponding value is reconciled without labelling the consumer a cheater merely for exercising the right;
17. refunded 30-Day VIP: no restart of the 30-day clock and no unrelated VIP period removed; and
18. refunded Lifetime VIP: only the specific invalidated entitlement provenance is corrected and no sales window is reopened.

## 17. Release blockers

Treat downstream refunded-value automation as **not production-ready** if any of these is true:

- there is no source transaction identity;
- there is no correction-case idempotency key;
- there is no remaining-correction-budget / anti-double-recovery control;
- one provider event can subtract the same value more than once;
- a pending refund request is treated as a final refund;
- all current Diamonds are assumed tainted when one purchase is refunded;
- downstream receipt automatically creates a fraud/RMT/cheating finding;
- the system can charge a real payment method or create real-world debt as an automatic game-state correction;
- a stale dispute state can leave valid value permanently revoked after the purchase becomes valid again;
- 30-Day VIP can restart during refund reconciliation;
- a closed Lifetime VIP sales window can be reopened by restore/reconciliation logic; or
- unrelated legitimate Apple, Google Play, or Xsolla purchases can be confiscated by the same correction case.

## 18. Current official references checked September 5, 2026

- Apple App Store Server API and refund history / notification recovery: https://developer.apple.com/documentation/appstoreserverapi/
- Apple StoreKit refund request lifecycle: https://developer.apple.com/documentation/storekit/transaction/beginrefundrequest(in:)
- Google Play RTDN / VoidedPurchaseNotification: https://developer.android.com/google/play/billing/rtdn-reference
- Google Play one-time products and multi-product purchase behavior: https://developer.android.com/google/play/billing/one-time-products
- Xsolla Refund Policy, current version dated June 16, 2026: https://xsolla.com/refund-policy
- German BGB § 327o, declaration and consequences of contract termination for digital products: https://www.gesetze-im-internet.de/bgb/__327o.html

## Public-law / localization decision

No new public player-facing legal meaning is introduced by this gate. The canonical TycoonX Terms already permit transaction-specific correction where refunded value was consumed or transferred while protecting unrelated legitimate paid value, and the Purchases & Refunds Policy already preserves provider-specific and mandatory consumer rights.

Therefore this operational hardening does **not** reopen Terms, Purchases & Refunds, Privacy, or Community Standards localization. If CK-Labs later chooses a materially broader player-facing clawback power than the canonical wording currently allows, update the canonical English document first and then reopen only the affected localized document type in the required locale order.