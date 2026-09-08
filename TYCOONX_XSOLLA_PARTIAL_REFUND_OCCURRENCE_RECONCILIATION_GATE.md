# TycoonX Xsolla Partial-Refund Occurrence & Reconciliation Gate

Last reviewed: September 8, 2026
Owner: CK-Labs
Scope: official TycoonX webshop purchases processed through Xsolla

This is a narrow implementation companion to `TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md`, especially its partial-refund and reconciliation sections. It does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, mandatory consumer law, or Xsolla's transaction-specific checkout/refund rules.

The purpose of this gate is to prevent one specific class of high-impact accounting bug: **several legitimate partial refunds can belong to the same original Xsolla payment, while Xsolla can show a partial refund in financial reports as a new transaction with the same number as the original payment**. TycoonX therefore must not use the original Xsolla transaction number alone as the unique identity of a refund occurrence.

## 1. Current Xsolla facts that drive the design

As reviewed on September 8, 2026, Xsolla's current Refund documentation states that:

- more than one partial refund can be issued for one charge;
- cumulative requested refunds cannot exceed the original charge amount;
- partial refunds are available only for eligible payment methods and transaction states;
- the refund amount is calculated using the fees and exchange rates of the original payment;
- a partial refund is displayed in financial reports as a **new transaction with the same number as the original payment**;
- the `partial_refund` webhook is sent when the user receives the funds;
- the Partial refund webhook exposes the partial-refund amount in `purchase.total.amount` and the currency in `purchase.total.currency`;
- the webhook also carries the Xsolla `transaction.id`, `transaction.external_id`, and refund metadata such as `refund_details.date`, `refund_details.reason`, `refund_details.code`, and `refund_details.author` where provided; and
- fixed fees from the original charge are returned to the merchant only when the full payment is canceled, while other merchant-side fee calculations can be proportional.

These provider details are operational evidence rules. They do not create a contractual right for CK-Labs to charge the player additional fees or to remove unrelated TycoonX value.

## 2. P0: the original transaction ID is not a refund-occurrence idempotency key

A single Xsolla purchase can legitimately receive partial refund A and later partial refund B while both relate to the same original transaction number. Therefore:

- keep the original Xsolla transaction/order identity as the **parent payment identity**;
- create a separate durable **refund-occurrence record** for each verified partial-refund occurrence;
- do not implement `UNIQUE(xsolla_transaction_id)` or equivalent logic for refund events if it would cause a later legitimate partial refund to be discarded as a duplicate;
- do not mark every later webhook with the same transaction ID as already processed merely because one earlier refund for that transaction was processed;
- do not use `transaction.id` alone as the entitlement-correction idempotency key; and
- do not use a refund amount alone as the occurrence identity, because two legitimate partial refunds can have the same amount.

The refund-occurrence record should preserve, where available and reasonably necessary:

- parent Xsolla transaction/order identity;
- TycoonX order and account mapping;
- provider environment/project context;
- verified webhook type;
- refund amount and currency from the verified provider record;
- refund date/time and refund metadata supplied by Xsolla;
- a stable internal event/occurrence identity or cryptographic fingerprint of the verified provider event used for deduplication;
- the entitlement correction applied for that occurrence;
- cumulative authoritative refunded amount after reconciliation; and
- processing/reconciliation timestamps.

Do not assume `refund_details.date` by itself is globally unique. Do not invent a provider event ID that Xsolla does not document. If the live webhook model does not provide a provider-unique refund-event identifier, use a durable internal occurrence identity/fingerprint plus authoritative cumulative reconciliation rather than pretending the original payment transaction number distinguishes every refund.

## 3. Duplicate delivery versus a second legitimate partial refund

TycoonX must distinguish these cases:

### Duplicate delivery

The same verified partial-refund occurrence is delivered again because of retry, replay, duplicate processing, or recovery. It must not remove Diamonds or VIP value a second time.

### Separate legitimate partial refund

A later verified refund occurrence applies another refund to the same original payment. It must not be rejected merely because the parent Xsolla transaction ID was seen before.

### Ambiguous evidence

If two provider records share the same parent transaction and amount but the system cannot prove whether they represent a duplicate delivery or two separate completed partial refunds, **do not guess in the direction of a larger clawback**. Quarantine the transaction and reconcile from authoritative Xsolla state and the existing TycoonX refund ledger.

A transport retry and a new refund occurrence have different economic effects even when they contain the same parent transaction ID. Idempotency must operate at the occurrence level, while financial safety must also operate at the cumulative transaction level.

## 4. Cumulative refund invariant

For each original Xsolla payment, TycoonX must maintain or be able to reconstruct:

`authoritative cumulative refunded amount <= authoritative original paid amount`

and:

`cumulative TycoonX correction for that payment <= value attributable to that original purchase, subject to mandatory law`

Every newly verified partial or full refund must be reconciled against the amount/value already corrected for the same originating transaction.

Example: a user buys 1,000 Diamonds for one Xsolla transaction.

1. First completed partial refund represents 25% of the original payment. TycoonX corrects only the attributable portion once.
2. A second completed partial refund represents another 25%. TycoonX increases the cumulative correction only to the provider-authoritative cumulative refunded portion.
3. If Xsolla later completes cancellation/refund of the remaining 50%, TycoonX reconciles the transaction to a total 100% refunded state.
4. TycoonX must **not** apply the earlier 50% of corrections and then subtract another full 100% merely because the final event is described as a full refund/cancellation.

The final correction must converge on authoritative total refunded value, not on the arithmetic sum of every raw webhook amount interpreted independently without transaction history.

## 5. Partial-then-full refund safety

A later full refund or full cancellation after one or more partial refunds is a specific P0 case.

- Before applying the final correction, read the transaction's already-processed refund occurrences and cumulative correction.
- Determine the provider-authoritative total refunded state for the original transaction.
- Apply only the **remaining delta** needed to bring TycoonX to that authoritative state.
- Never subtract the original full entitlement again on top of already-applied partial-refund corrections.
- Never restore an earlier partial correction merely because a later full-refund record uses the original transaction number.
- If provider records conflict about whether the transaction is partially or fully refunded, freeze irreversible extra correction and reconcile rather than choosing the most punitive interpretation.

This rule applies whether the final state arrives by a verified webhook, provider support action, authoritative reconciliation after an outage, or another valid Xsolla record.

## 6. Full-refund-after-partial example for Diamonds

Original verified purchase: 2,000 Diamonds.

- Refund occurrence A: authoritative 500-Diamond-equivalent portion refunded. Cumulative correction: up to 500.
- Refund occurrence B: another 500-Diamond-equivalent portion refunded. Cumulative correction: up to 1,000.
- Final provider state: entire original payment refunded. Remaining correction: up to 1,000 more.

The maximum correction attributable to that transaction is 2,000 Diamonds, not 3,000 or 4,000.

If the player has already spent or transferred some of the attributable refunded value, use the narrowest lawful economy correction allowed by the canonical Terms, Purchases & Refunds Policy, provider state, and mandatory law. Do not confiscate unrelated legitimate purchases to make the arithmetic easy.

Purchased Diamonds do not expire solely because time passes.

## 7. 30-Day VIP and Lifetime VIP are not fractional money buckets

One-time 30-Day VIP remains a one-time, non-renewing entitlement for **30 consecutive days**. Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows; it may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability.

For either VIP product:

- do not convert a 25%, 50%, or other partial monetary refund mechanically into a fractional VIP duration;
- do not restart 30-Day VIP because a refund record was replayed or reconciled;
- do not create two 30-Day VIP clocks because two refund events exist;
- do not create a `25% Lifetime VIP`, `half Lifetime VIP`, or similar invented entitlement state;
- do not reopen a closed Lifetime VIP sales window because a refund/reconciliation event is being processed; and
- do not revoke a valid unrelated VIP purchase merely because another Xsolla transaction was partially or fully refunded.

If an indivisible VIP transaction receives a provider-authoritative partial refund, place it into deliberate transaction-specific reconciliation rather than guessing at access duration or inventing a new product model.

## 8. Merchant fee accounting is not player entitlement authority

Xsolla's current documentation describes merchant-side fee treatment during partial refunds, including fixed-fee treatment when a payment becomes fully canceled. That is CK-Labs/Xsolla commercial accounting.

Do not:

- deduct extra Diamonds to recover an Xsolla fixed fee;
- shorten VIP because CK-Labs did not receive a merchant fee back yet;
- create a negative player balance merely to offset processor/refund fees;
- classify a player as abusive because the provider's fee calculation reduced CK-Labs' payout; or
- use merchant-side fee return timing as proof that the consumer received or did not receive a refund.

Any attempt to recover a fee directly from a consumer would require its own valid, transparent contractual and legal basis and must respect mandatory consumer law. This gate does not create such a basis.

## 9. Currency and FX evidence

Use the provider-authoritative purchase/refund currency and amount for financial reconciliation. Do not derive the refund amount merely by multiplying a current Diamond price, current exchange rate, later regional price, or current Lifetime VIP sale price.

A later FX movement, price decrease, price increase, tax change, promotion, or different regional price does not retroactively reprice the completed one-time purchase. Where Xsolla/payment-rail mechanics produce a refund-currency discrepancy, preserve the provider evidence and do not manufacture extra TycoonX entitlement corrections solely to force a present-day FX match.

## 10. Fraud, chargeback, account-compromise, and regional-price boundaries

Multiple partial refunds for one charge are not automatically proof of fraud; Xsolla currently supports more than one partial refund of a charge.

Likewise:

- a duplicate webhook is not proof the player replayed it;
- an internal idempotency bug is not proof of entitlement abuse;
- a refund requested by support or Xsolla is not automatically a chargeback;
- an account-compromise report requires its own security evidence;
- a refund-related currency difference is not automatically regional-price abuse; and
- a provider/accounting mismatch is not enough by itself to suspend or permanently terminate the player.

Actual fraud, exploit abuse, chargeback abuse, entitlement abuse, or regional-price abuse can still be investigated and acted on under the canonical TycoonX rules when supported by reliable evidence.

## 11. Outages, retries, migrations, and old code

During webhook outages, provider migrations, refund-ledger migrations, or restoration from old records:

- preserve the original parent transaction and each known refund occurrence separately;
- never compact several refund occurrences into one record in a way that loses the already-applied cumulative correction;
- never re-run all historic refund rows as fresh corrections after a migration;
- never mark an old transaction fully refunded simply because a legacy boolean lacks the partial-refund detail;
- never treat missing local refund history as proof that no provider refund happened;
- never treat missing provider history as permission to apply the maximum possible correction; and
- reconcile against authoritative provider/payment state before irreversible entitlement changes when historical evidence is incomplete.

An old unsupported app version cannot bypass server-side refund reconciliation, restore already-refunded purchased value, or replay the original Xsolla purchase.

## 12. Required QA matrix

Before treating Xsolla partial-refund handling as production-ready, test at least:

1. one completed partial refund for a Diamond purchase;
2. duplicate delivery of that same partial-refund occurrence;
3. two legitimate partial refunds for the same original Xsolla transaction;
4. two legitimate partial refunds with the same monetary amount;
5. two provider records with the same parent transaction where occurrence identity is ambiguous;
6. partial refund A processed, app/backend restart, then partial refund B processed;
7. partial refund A processed, webhook outage, then authoritative reconciliation discovers partial refund B;
8. one partial refund followed by a completed full refund/cancellation;
9. two partial refunds followed by a completed full refund/cancellation;
10. final full-refund event is delivered twice after earlier partial refunds;
11. partial-refund amount plus prior cumulative amount would exceed the original charge and is quarantined;
12. original transaction ID is reused by financial-report records but legitimate refund occurrences remain separately reconcilable;
13. refund amount alone is not used as the unique event key;
14. `refund_details.date` alone is not treated as a guaranteed globally unique key;
15. merchant fixed-fee accounting changes without changing the player's entitlement correction;
16. 30-Day VIP partial monetary refund does not invent a fractional duration or second clock;
17. Lifetime VIP partial monetary refund does not invent fractional Lifetime VIP or reopen a closed sale;
18. unrelated purchased Diamonds/VIP remain untouched;
19. sandbox/test refund evidence cannot mutate production entitlements;
20. account-compromise case remains separate from refund idempotency; and
21. incomplete migration evidence pauses irreversible extra correction rather than selecting the largest possible clawback.

## 13. P0 release blockers

Do not declare Xsolla refund reconciliation production-ready if any of these is true:

- refund-event deduplication is keyed only by the original Xsolla transaction ID;
- a second legitimate partial refund for the same charge is discarded as a duplicate;
- the same partial-refund occurrence can be applied more than once;
- a later full refund subtracts the original full entitlement on top of previously applied partial corrections;
- cumulative TycoonX correction can exceed the value attributable to the original purchase;
- merchant fee accounting is converted into extra player debt or entitlement clawback;
- partial monetary refunds invent fractional 30-Day VIP or Lifetime VIP states;
- a refund event can reopen a closed Lifetime VIP sales window;
- conflicting provider evidence automatically chooses the most aggressive correction;
- unrelated legitimate purchases can be removed to satisfy one refunded transaction; or
- mandatory German/EU consumer remedies are treated as waivable by this operational gate.

## 14. Canonical and localization boundary

This gate changes implementation evidence and idempotency requirements, not the public contractual meaning of TycoonX purchases. The canonical Purchases & Refunds Policy already requires transaction-scoped refund/reversal handling, protects unrelated legitimately purchased value, distinguishes provider responsibilities, and preserves mandatory rights.

Therefore this internal hardening does not itself require reopening the 25 localized Purchases & Refunds documents. If CK-Labs later changes the canonical player-facing meaning of refunds, Diamonds, 30-Day VIP, Lifetime VIP, pricing, payment-provider responsibility, or consumer remedies, update the English canonical document first and synchronize all affected localized documents before the localization tracker remains complete.

## Manual verification

Run locally without GitHub Actions or paid services:

```bash
node scripts/verify-tycoonx-xsolla-partial-refund-occurrences.mjs
```
