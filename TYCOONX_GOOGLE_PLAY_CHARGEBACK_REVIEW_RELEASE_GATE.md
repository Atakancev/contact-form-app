# TycoonX Google Play Collaborative Chargeback Review Release Gate

**Status:** P0 payment / entitlement / dispute-evidence gate

**Last reviewed:** September 7, 2026

**Applies to:** TycoonX purchases made through Google Play when Google sends a `PendingRefundReviewNotification` and permits CK-Labs to submit a response through `orders.reviewrefund` / the `ReviewRefund` API.

This is an internal operational gate. It complements the public TycoonX Terms of Service, Purchases & Refunds Policy, and `TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md`. It does not replace Google Play rules, payment-network rules, or mandatory consumer law.

## 1. Current Google Play checkpoint

Google's current documentation states that:

- Google Play can send a `PendingRefundReviewNotification` when a user initiates a chargeback that requires developer review;
- the developer should evaluate the request and respond within **24 hours** by calling the `ReviewRefund` API;
- current pending refund reviews support **`CHARGEBACK`** as the refund reason, while Google's RTDN documentation says integrations should safely handle new refund reasons if Google adds them later;
- the required `ReviewRefund` request fields include the matching `pendingRefundToken`, `sampleContentProvided`, and `refundPreference`;
- the current refund-preference values are **`APPROVE`**, **`DECLINE`**, and **`NEUTRAL`**;
- optional `consumptionPercentageMilliunits` is an integer from **0 through 100000 milliunits**, where **`45200` means `45.2%`**, not 45,200 percent;
- optional `consumptionUsageEvents` is limited to **1000 events** and requests with more than 1000 events are rejected;
- a usage event's free-form `consumptionItemDescription` is limited to **5000 characters**;
- when coarse location evidence is supplied, Google's `regionCode` is **never inferred** by Google and CK-Labs is responsible for its correctness; and
- critically, Google records the **first API call** made in response to the notification and ignores later calls even though later calls can still return an `OK` status.

Official checkpoints reviewed for this gate:

- Google Play Billing, *Help Google dispute chargebacks*, last updated July 20, 2026: https://developer.android.com/google/play/billing/provide-refund-and-chargeback-suggestions
- Google Play Billing, *Real-time developer notifications reference guide*, last updated September 1, 2026: https://developer.android.com/google/play/billing/rtdn-reference
- Google Play Developer API, `orders.reviewrefund`, last updated July 6, 2026: https://developers.google.com/android-publisher/api-ref/rest/v3/orders/reviewrefund

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
- Pub/Sub `messageId`;
- Google's RTDN `eventTimeMillis` where available;
- the **first CK-Labs receipt timestamp** for the notification;
- raw notification version and `refundReason` value;
- TycoonX account/order reference;
- product ID and product type;
- response deadline;
- selected preference (`APPROVE`, `DECLINE`, or `NEUTRAL`);
- the exact required `sampleContentProvided` value and the factual basis for it;
- any submitted `consumptionPercentageMilliunits`, its source calculation, and the underlying transaction-specific numerator/denominator where applicable;
- the exact `consumptionUsageEvents` submitted and the selection rule used if more relevant events existed than Google accepts;
- exact evidence fields submitted;
- an immutable request hash or equivalent audit fingerprint;
- submission timestamp;
- API response/result;
- later authoritative refund/void/chargeback outcome; and
- the resulting TycoonX entitlement-ledger action, if any.

Use Pub/Sub `messageId` deduplication for duplicate RTDN delivery, but do not rely on `messageId` alone as the durable business identity of the pending review. The `pendingRefundToken` / matching Google order review is the stronger transaction-specific reference for the review workflow.

## 4. 24-hour deadline handling

The 24-hour response period is a real operational deadline. Google's current guidance says to respond within 24 hours of receiving the notification.

TycoonX should:

- calculate and store the review deadline from the **first CK-Labs receipt timestamp**, not from a later worker start, queue retry, app restart, or duplicate Pub/Sub delivery;
- preserve Google's `eventTimeMillis` separately so delivery delay and event chronology remain auditable;
- never reset the 24-hour deadline because the same notification is redelivered or requeued;
- surface approaching deadlines in internal monitoring;
- prioritize review evidence collection over unrelated batch work;
- preserve whether the deadline was met or missed; and
- not fabricate evidence merely because the deadline is close.

If delivery appears materially delayed or the first-receipt time is uncertain, escalate the review and preserve the uncertainty rather than manufacturing additional response time. If the evidence is genuinely inconclusive, `NEUTRAL` can be more appropriate than inventing facts or automatically opposing the chargeback. The preference must reflect CK-Labs' real position based on evidence available at submission time.

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

## 6. Evidence quality, field fidelity, and data minimization

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

### `consumptionPercentageMilliunits` unit safety

If CK-Labs submits `consumptionPercentageMilliunits`:

- it must be a whole-number integer from **0 through 100000**;
- **`45200` means `45.2%`**;
- do not send a normal decimal percentage such as `45.2` into the milliunit field;
- do not interpret `100000` as 100,000 percent;
- derive the value from usage attributable to the exact Google purchase under review rather than unrelated purchases, promotional/gameplay-earned Diamonds, or unrelated VIP periods;
- do not silently clamp an impossible or out-of-range value merely to make the API accept it; and
- if the percentage cannot be calculated reliably, omit this optional field rather than guess.

For example, suppose a Google Play transaction granted **500 purchased Diamonds** and reliable transaction-level records show that **226 Diamonds attributable to that exact grant** were consumed. `226 / 500 = 45.2%`, so the corresponding API value is `45200`. This value is **dispute evidence only**. It is not Google's final refund percentage, is not an instruction to remove 226 Diamonds, and must not itself trigger an entitlement clawback.

### `sampleContentProvided` must reflect reality

`sampleContentProvided` is a required boolean. Set it according to what was actually provided before the purchase for the product under review.

- Do not set it to `true` merely because TycoonX itself is free-to-play.
- Do not set it to `true` merely because the player could see a Diamond or VIP product card, price, description, or ordinary game functionality.
- Set it to `true` only when the relevant free sample, trial, or product/function preview contemplated by Google's field was genuinely provided and CK-Labs can support that fact.
- Otherwise set it to `false`; do not guess.

### Usage-event count and descriptions

Google currently rejects a `ReviewRefund` request with more than **1000 `consumptionUsageEvents`**. TycoonX therefore must not blindly attach every raw gameplay event.

If more than 1000 potentially relevant records exist, select a truthful, transaction-specific, proportionate set under a documented and repeatable selection rule. The selection must not cherry-pick only facts that exaggerate CK-Labs' position, manufacture usage, or hide known contradictory evidence. Preserve the larger internal audit trail where lawfully appropriate even though only the permitted subset is submitted.

Each free-form `consumptionItemDescription` sent to Google must remain within the current **5000 characters** limit and must not contain credentials, authentication secrets, full payment data, or unnecessary private communications.

### Coarse location must not be invented

When a usage event includes Google's coarse location object, `regionCode` is **never inferred** by Google. CK-Labs must therefore send a region only when it is accurately and lawfully known for the relevant usage event.

TycoonX must not:

- convert a guessed IP geolocation into asserted consumption location without a reliable factual basis;
- treat the player's regional-price catalog, storefront, currency, billing country, language, or VPN suspicion as proof of where gameplay consumption occurred;
- manufacture a region to strengthen a regional-price-abuse or chargeback theory; or
- populate optional locality fields merely because they are available.

If reliable location evidence is unavailable, omit optional location evidence rather than guess. Regional pricing and regional-price abuse remain separate questions that require their own evidence.

## 7. Preference and future-refund-reason rules

Use the current Google preference values intentionally:

- **`APPROVE`** when CK-Labs' evidence supports allowing the full refund/chargeback resolution or the purchase appears unauthorized/invalid and approving is appropriate;
- **`DECLINE`** when reliable evidence supports CK-Labs' position that the valid purchase was authorized/delivered/used and Google should reject the refund; or
- **`NEUTRAL`** when CK-Labs does not have a justified preference or the available evidence is insufficient to recommend approval or rejection.

Do not configure `DECLINE` as the universal default simply because chargebacks cost money. Do not configure `APPROVE` merely to avoid manual review where the evidence clearly indicates entitlement abuse. The goal is accurate evidence, not maximizing either approvals or denials.

Google currently documents `CHARGEBACK` as the supported pending-review refund reason, but its RTDN documentation says developers should handle new reasons as they become available. Therefore an unknown future `refundReason` must enter a safe current-documentation/manual-review path. TycoonX must not automatically map an unknown value to `CHARGEBACK`, auto-decline it, auto-approve it, label it fraud, or change paid entitlements merely because the integration does not recognize the new enum yet.

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
- Lifetime VIP remains a limited-time promotional offering available only during selected genuine sales windows; a chargeback workflow must not reopen a closed sales window or create an expectation that the offer will continuously remain available or return.

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

Even then, enforcement must remain proportionate, preserve mandatory consumer rights, and avoid confiscating unrelated legitimate purchases.

## 13. Release tests

Before relying on this workflow in production, keep dated test evidence covering at least:

- [ ] receipt of a test `PendingRefundReviewNotification`;
- [ ] correct extraction/storage of `pendingRefundToken`, `orderId`, `eventTimeMillis`, raw `refundReason`, first CK-Labs receipt time, and deadline;
- [ ] duplicate RTDN delivery does not create a second substantive review and does not reset the 24-hour deadline;
- [ ] two workers cannot race to submit different preferences;
- [ ] the system refuses to send a placeholder review before evidence is ready;
- [ ] `APPROVE`, `DECLINE`, and `NEUTRAL` are supported without inventing evidence;
- [ ] an unknown future `refundReason` is preserved and routed for review rather than auto-mapped to `CHARGEBACK`;
- [ ] `sampleContentProvided=true` and `sampleContentProvided=false` are both tested against real factual scenarios rather than guessed defaults;
- [ ] a **45.2%** transaction-specific consumption calculation becomes exactly **`45200`** `consumptionPercentageMilliunits` and does not become `45.2`, `452`, or `45200000`;
- [ ] an unreliable consumption percentage is omitted rather than guessed or silently clamped;
- [ ] more than 1000 candidate usage records cannot produce an API request containing more than 1000 `consumptionUsageEvents`;
- [ ] a generated `consumptionItemDescription` cannot exceed 5000 characters;
- [ ] optional coarse `regionCode` is omitted when location is not reliably known and is never inferred from regional price, currency, language, or VPN suspicion;
- [ ] the exact first submitted payload is stored immutably;
- [ ] a simulated later retry cannot silently replace the stored first response merely because an API call returns `OK`;
- [ ] the `ReviewRefund` response and `consumptionPercentageMilliunits` evidence itself do not change Diamonds or VIP;
- [ ] a later final Google void/refund corrects the matching entitlement exactly once;
- [ ] unrelated purchased Diamonds, another 30-Day VIP, and unrelated Lifetime VIP remain untouched; and
- [ ] chargeback evidence excludes unnecessary private messages, credentials, and excessive personal data.

Google's Play Billing testing documentation currently includes a test instrument for user-initiated chargebacks. Use current Google test tooling where available rather than experimenting with real consumer payments.

## 14. Release blocker

Treat the Google collaborative chargeback-review integration as **not production-ready** if any of the following is true:

- there is no reliable 24-hour queue/owner;
- duplicate delivery, worker restart, or requeue can reset the response deadline;
- the backend can submit a placeholder response before evidence is ready;
- retries can submit a different preference/evidence package after the first call;
- the system assumes a later `OK` means the first review was replaced;
- a normal decimal percentage can be sent into `consumptionPercentageMilliunits` or the milliunit scale can be interpreted as a normal percentage;
- optional consumption, usage-event, sample, or location evidence can be guessed or fabricated;
- more than 1000 `consumptionUsageEvents` can be submitted;
- an unknown future `refundReason` is automatically treated as fraud, automatically approved/declined, or mapped to `CHARGEBACK` without review;
- `ReviewRefund` directly grants or revokes TycoonX value;
- chargeback review is automatically classified as fraud;
- evidence collection is excessive or fabricated;
- final refunds/voids cannot be mapped to the exact Diamond/VIP transaction; or
- unrelated legitimate purchases can be removed during reconciliation.

Until those controls are proven, CK-Labs should continue to rely on normal authoritative Google refund/void reconciliation and support evidence rather than treating collaborative review as a safe automated fraud-loss control.
