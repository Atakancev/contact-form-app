# TycoonX Google Play Collaborative Chargeback Review Release Gate

**Status:** P0 payment / entitlement / dispute-evidence gate

**Last reviewed:** August 31, 2026

**Applies to:** TycoonX purchases made through Google Play when Google sends a `PendingRefundReviewNotification` and permits CK-Labs to submit a response through `orders.reviewrefund` / the `ReviewRefund` API.

This is an internal operational gate. It complements the public TycoonX Terms of Service, Purchases & Refunds Policy, and `TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md`. It does not replace Google Play rules, payment-network rules, or mandatory consumer law.

## 1. Current Google Play checkpoint

Google's current documentation states that:

- Google Play can send a `PendingRefundReviewNotification` when a user initiates a chargeback that requires developer review;
- the developer should evaluate the request and respond within **24 hours** by calling the `ReviewRefund` API;
- current pending refund reviews support **`CHARGEBACK`** as the refund reason;
- the response can include a refund preference and relevant purchase-usage evidence;
- the current refund-preference values are **`APPROVE`**, **`DECLINE`**, and **`NEUTRAL`**; and
- critically, Google records the **first API call** made in response to the notification and ignores later calls even though later calls can still return an `OK` status.

Official checkpoints reviewed for this gate:

- Google Play Billing, *Help Google dispute chargebacks*, last updated July 20, 2026: https://developer.android.com/google/play/billing/provide-refund-and-chargeback-suggestions
- Google Play Billing, *Real-time developer notifications reference guide*: https://developer.android.com/google/play/billing/rtdn-reference
- Google Play Developer API, `orders.reviewrefund`: https://developers.google.com/android-publisher/api-ref/rest/v3/orders/reviewrefund

Because Google can change this workflow, CK-Labs must re-check the current official documentation before materially changing the production integration.

## 2. First-call-final rule

Treat the first successful `ReviewRefund` submission for a pending refund review as **operationally final**.

TycoonX must not:

- call `ReviewRefund` immediately with placeholder/default data merely to acknowledge receipt;
- send an automatic `DECLINE` before relevant evidence has been checked;
- submit an empty or guessed response and expect to correct it later;
- interpret a later HTTP/API `OK` response as proof that Google replaced the first review response; or
- retry with a different preference or materially different evidence after a first accepted submission.

A normal HTTP retry policy is therefore unsafe unless the integration can prove whether the first call was actually submitted and can replay the **same immutable request** only where the current API semantics make that appropriate.

## 3. Exactly-once review state

For each pending review, keep a durable state machine such as:

1. `received`
2. `evidence_collecting`
3. `ready_to_submit`
4. `submitted_once`
5. `provider_outcome_pending`
6. `reconciled`

At minimum preserve:

- Google `pendingRefundToken`;
- Google `orderId`;
- Pub/Sub `messageId` and notification event time where available;
- TycoonX account/order reference;
- product ID and product type;
- response deadline;
- selected preference (`APPROVE`, `DECLINE`, or `NEUTRAL`);
- exact evidence fields submitted;
- an immutable request hash or equivalent audit fingerprint;
- submission timestamp;
- API response/result;
- later authoritative refund/void/chargeback outcome; and
- the resulting TycoonX entitlement-ledger action, if any.

Use Pub/Sub `messageId` deduplication for duplicate RTDN delivery, but do not rely on `messageId` alone as the durable business identity of the pending review. The `pendingRefundToken` / matching Google order review is the stronger transaction-specific reference for the review workflow.

## 4. 24-hour deadline handling

The 24-hour response period is a real operational deadline.

TycoonX should:

- calculate and store the review deadline as soon as the notification is accepted;
- surface approaching deadlines in internal monitoring;
- prioritize review evidence collection over unrelated batch work;
- preserve whether the deadline was met or missed; and
- not fabricate evidence merely because the deadline is close.

If the evidence is genuinely inconclusive, `NEUTRAL` can be more appropriate than inventing facts or automatically opposing the chargeback. The preference must reflect CK-Labs' real position based on evidence available at submission time.

Missing the collaborative-review window must not become a reason to punish the player or remove value before Google reports the authoritative transaction outcome.

## 5. Chargeback review is not the same as a normal refund or withdrawal request

A current `PendingRefundReviewNotification` is specifically part of Google's chargeback-review workflow. Do not route every ordinary refund request, statutory withdrawal request, technical delivery problem, or support complaint into this process.

Keep these paths distinct:

- ordinary Google Play refund requests;
- German/EU statutory withdrawal requests where applicable;
- non-supply or conformity complaints;
- suspected unauthorized purchase / account compromise reports;
- Google collaborative chargeback review; and
- final Google refund, void, reversal, or chargeback state used for entitlement reconciliation.

A user exercising a lawful refund, withdrawal, conformity, or dispute right is not automatically committing fraud or chargeback abuse.

## 6. Evidence quality and data minimization

Only submit evidence that is accurate, relevant, proportionate, and already lawfully held for legitimate purchase, entitlement, security, fraud-prevention, support, or dispute purposes.

Depending on the product and what Google currently accepts, relevant evidence can include facts such as:

- whether purchased Diamonds were credited;
- whether and when purchased Diamonds were consumed or transferred;
- whether a one-time 30-Day VIP entitlement was activated and used;
- whether Lifetime VIP was delivered and used;
- purchase/account identifiers already linked to the transaction;
- consumption timing or percentage where accurately available; and
- optional network/location evidence such as IP or coarse location only where it is genuinely relevant, lawfully held, and appropriate to submit.

Do not submit unrelated private chat, support conversations, contacts, message contents, unrelated purchase history, precise location, credentials, authentication secrets, full payment-card data, or other excessive personal data merely to make a chargeback response look stronger.

Never invent, infer beyond reliable evidence, or alter IP, geography, device, login, consumption, gameplay, entitlement, or account-compromise facts.

## 7. Preference rules

Use the current Google preference values intentionally:

- **`APPROVE`** when CK-Labs' evidence supports allowing the full refund/chargeback resolution or the purchase appears unauthorized/invalid and approving is appropriate;
- **`DECLINE`** when reliable evidence supports CK-Labs' position that the valid purchase was authorized/delivered/used and Google should reject the refund; or
- **`NEUTRAL`** when CK-Labs does not have a justified preference or the available evidence is insufficient to recommend approval or rejection.

Do not configure `DECLINE` as the universal default simply because chargebacks cost money. Do not configure `APPROVE` merely to avoid manual review where the evidence clearly indicates entitlement abuse. The goal is accurate evidence, not maximizing either approvals or denials.

## 8. The review response must not itself grant or revoke TycoonX value

Calling `ReviewRefund` is a dispute-evidence action. It is not a purchase-success event and it is not, by itself, authoritative proof that a refund or chargeback has become final.

Therefore a `ReviewRefund` request or response must never directly:

- grant Diamonds;
- extend or restart one-time 30-Day VIP;
- grant another Lifetime VIP;
- revoke value merely because CK-Labs recommended `APPROVE`;
- revoke value merely because a chargeback review was opened; or
- punish an account merely because Google requested CK-Labs' view.

Final entitlement correction must reconcile against authoritative Google transaction/refund/void state through the applicable Google Play APIs and TycoonX's own durable entitlement ledger.

## 9. Product-specific entitlement reconciliation

If Google later reports a final refund, void, reversal, or chargeback affecting a purchase, correct only the value attributable to that transaction, subject to mandatory law.

### Purchased Diamonds

- Remove only corresponding unspent purchased value where directly traceable and lawful.
- If refunded purchased value was already consumed or transferred, use only a documented transaction-specific correction permitted by the TycoonX Terms and mandatory law.
- Do not remove unrelated purchased Diamonds from other valid transactions merely because one order was charged back.
- Do not confuse promotional/gameplay-earned Diamonds with the refunded purchased grant unless the ledger proves they are part of the affected transaction.

### One-time 30-Day VIP

- A final invalidation/refund may justify ending the remaining benefit tied to that purchase where lawful.
- Do not restart a 30-day clock during reconciliation.
- Do not remove another separately purchased 30-Day VIP period that is not part of the disputed order.

### Lifetime VIP

- A final refund/void of the specific Lifetime VIP purchase may justify revoking that specific entitlement where lawful.
- A pending review alone does not justify revocation.
- Do not revoke a different valid Lifetime VIP record from another authorized transaction or provider merely because one order is disputed.
- Ending or withdrawing Lifetime VIP from future sale remains separate from the validity of an already completed purchase.

## 10. Account compromise and unauthorized purchases

Where the player credibly reports account or payment compromise:

- preserve the report as separate evidence;
- investigate authoritative login, transaction, entitlement, and provider records;
- do not treat the player's fraud report as proof that the player is lying merely because purchased value was delivered;
- consider whether `APPROVE` or `NEUTRAL` is appropriate if authorization cannot reasonably be established; and
- separately secure the TycoonX account, sessions, credentials, and payment-linked access as needed.

A genuine account compromise can coexist with a technically valid Google transaction record. Payment validity, authorization, entitlement delivery, and account security are separate facts and should not be collapsed into one automated fraud flag.

## 11. Failed, duplicate, and retried review processing

The implementation must safely handle:

- duplicate Pub/Sub deliveries;
- worker restarts;
- network timeouts around the first `ReviewRefund` call;
- ambiguous client/network failures where CK-Labs cannot immediately tell whether Google accepted the first request;
- repeated queue delivery;
- delayed authoritative refund state; and
- later `VoidedPurchaseNotification` or Voided Purchases API reconciliation.

The safe rule is **same review, same immutable evidence package, at most one intended substantive submission**. Do not allow two workers to race with different preferences.

If a network failure makes the first-call state ambiguous, retain the uncertainty and reconcile against Google's current API behavior/support guidance rather than blindly sending a materially different second response.

## 12. Support and enforcement safeguards

A collaborative Google chargeback review must not automatically trigger account suspension or termination.

Stronger enforcement should require separate evidence of conduct such as:

- knowingly false fraud claims;
- repeated abusive chargebacks for valid purchases that were received/used;
- coordinated payment abuse;
- exploit-linked refund cycling; or
- deliberate retention or laundering of refunded paid value.

Even then, enforcement must remain proportionate, preserve mandatory rights, and avoid confiscating unrelated legitimate purchases.

## 13. Release tests

Before relying on this workflow in production, keep dated test evidence covering at least:

- [ ] receipt of a test `PendingRefundReviewNotification`;
- [ ] correct extraction/storage of `pendingRefundToken`, `orderId`, and deadline;
- [ ] duplicate RTDN delivery does not create a second substantive review;
- [ ] two workers cannot race to submit different preferences;
- [ ] the system refuses to send a placeholder review before evidence is ready;
- [ ] `APPROVE`, `DECLINE`, and `NEUTRAL` are supported without inventing evidence;
- [ ] the exact first submitted payload is stored immutably;
- [ ] a simulated later retry cannot silently replace the stored first response merely because an API call returns `OK`;
- [ ] the `ReviewRefund` response itself does not change Diamonds or VIP;
- [ ] a later final Google void/refund corrects the matching entitlement exactly once;
- [ ] unrelated purchased Diamonds, another 30-Day VIP, and unrelated Lifetime VIP remain untouched; and
- [ ] chargeback evidence excludes unnecessary private messages, credentials, and excessive personal data.

Google's Play Billing testing documentation currently includes a test instrument for user-initiated chargebacks. Use current Google test tooling where available rather than experimenting with real consumer payments.

## 14. Release blocker

Treat the Google collaborative chargeback-review integration as **not production-ready** if any of the following is true:

- there is no reliable 24-hour queue/owner;
- the backend can submit a placeholder response before evidence is ready;
- retries can submit a different preference/evidence package after the first call;
- the system assumes a later `OK` means the first review was replaced;
- `ReviewRefund` directly grants or revokes TycoonX value;
- chargeback review is automatically classified as fraud;
- evidence collection is excessive or fabricated;
- final refunds/voids cannot be mapped to the exact Diamond/VIP transaction; or
- unrelated legitimate purchases can be removed during reconciliation.

Until those controls are proven, CK-Labs should continue to rely on normal authoritative Google refund/void reconciliation and support evidence rather than treating collaborative review as a safe automated fraud-loss control.
