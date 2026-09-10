# TycoonX RevenueCat Refund and Entitlement Reconciliation Recheck

**Last reviewed: September 10, 2026.**  
Owner: CK-Labs  
Scope: read-only production verification of RevenueCat-backed Apple/Google one-time purchase, refund, cancellation, gift and entitlement reconciliation paths used by TycoonX.

This is an internal legal/implementation release gate. It does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, Apple/Google rules, RevenueCat terms, or mandatory law. It does not authorize a database, balance, entitlement, purchase, sanction or player-account change.

## 1. Result

A new P0 payment-integrity gap is confirmed in the current production function family: RevenueCat `CANCELLATION` events are recorded, but the reviewed fulfillment code does not distinguish an ordinary subscription cancellation from a refund/revocation of a non-renewing purchase and does not reconcile the corresponding Diamond or one-time VIP grant.

This matters because RevenueCat currently defines `CANCELLATION` as covering a subscription or non-renewing purchase that was canceled **or refunded**. A one-time/non-subscription refund is not equivalent to a subscriber merely turning off future renewal. The corresponding provider-backed entitlement may need immediate source-specific correction, while unrelated valid purchases and entitlements must remain intact.

The canonical TycoonX legal wording already permits reconciliation of failed, reversed or refunded transactions subject to platform/provider rules and mandatory consumer rights. The legal documents should not be weakened or expanded to normalize the implementation defect. The provider-event reconciliation path should be fixed technically.

## 2. P0: RevenueCat non-renewing refunds are logged but not economically reconciled

The current production `apply_revenuecat_purchase_event_v2(...)` handles a qualifying VIP `NON_RENEWING_PURCHASE` itself and delegates other RevenueCat event types to `apply_revenuecat_purchase_event(...)`.

The base function currently:

- grants Diamonds only for `INITIAL_PURCHASE` or `NON_RENEWING_PURCHASE`;
- activates VIP for subscription-style activation/renewal event families;
- removes VIP on `EXPIRATION` only when the remaining effective-entitlement checks permit it; and
- records other event types, including `CANCELLATION`, without a source-specific Diamond clawback or one-time VIP reversal.

A `CANCELLATION` event for a refunded non-renewing purchase therefore does not currently undo the corresponding one-time fulfillment. The function also does not currently implement `REFUND_REVERSED` restoration logic.

### Why cancellation reason matters

An ordinary recurring-subscription cancellation and a refund must not be treated the same way:

- **Ordinary unsubscribe/cancel:** the already-paid entitlement normally continues through its paid period and should not be removed early merely because auto-renewal was turned off.
- **Refund/revocation of the latest paid period or a non-renewing purchase:** the provider/store state can require immediate loss or correction of the entitlement attributable to the refunded transaction.
- **Refund reversal:** if the store/provider reverses the refund, any prior source-specific correction must be restored idempotently from the authoritative transaction state.

Current RevenueCat documentation explicitly states that `CANCELLATION` can mean either cancellation or refund, so the backend must inspect authoritative event fields such as the cancellation reason and transaction identifiers rather than treating the event name alone as the business meaning.

## 3. Diamond refund/clawback acceptance rule

A refunded Diamond purchase must be reconciled against the **specific refunded transaction**, not against a vague current Diamond balance.

Before this gate can close, the implementation should:

1. resolve the original RevenueCat purchase by immutable event/store/original transaction identifiers;
2. determine the Diamond amount actually granted for that transaction;
3. mark the provider transaction/refund state idempotently so webhook retries cannot claw back twice;
4. remove only the still-recoverable amount attributable to the reversed paid grant;
5. if some of the paid Diamonds were already consumed, record a bounded source-specific clawback/debt/reconciliation state rather than blindly driving the player's balance negative or deleting unrelated earned/promotional Diamonds;
6. preserve unrelated valid purchased, promotional or gameplay-earned Diamonds except to the extent a lawful, clearly attributable reconciliation actually requires otherwise;
7. handle `REFUND_REVERSED` by reversing the prior clawback exactly once; and
8. retain a transaction-level audit trail showing what was granted, reversed, restored and why.

The current Xsolla path already demonstrates a useful pattern by recording purchase-level Diamond grants and clawback debt for reversed webshop purchases. RevenueCat does not currently have an equivalent reviewed reconciliation mechanism.

## 4. One-time 30-Day VIP refund acceptance rule

For a refunded one-time 30-Day VIP, the system must correct **only the duration/source attributable to the refunded transaction** and then recompute effective VIP from all other authoritative entitlement sources.

The fix must not remove:

- a separate valid Lifetime VIP;
- another valid one-time 30-Day VIP purchase;
- a valid Diamond-funded VIP period;
- a valid Xsolla entitlement;
- another valid RevenueCat/store entitlement;
- a documented complimentary/staff grant; or
- another independently valid entitlement merely because one transaction was refunded.

Likewise, if the player has no other valid source, a refunded one-time VIP must not remain active merely because stale `profiles.vip` state is still true. The existing server-authoritative VIP-provenance gate therefore remains directly relevant.

## 5. P0/P1 gift-refund provenance gap

`apply_revenuecat_purchase_event_v3(...)` resolves a gift intent and redirects fulfillment to the recipient only for `INITIAL_PURCHASE` and `NON_RENEWING_PURCHASE` events. Later event types, including `CANCELLATION`, are delegated without re-resolving the original gift fulfillment target.

That creates a refund-provenance risk for gifted Diamonds or VIP. A later refund must be mapped to the **recipient who actually received the entitlement** by the original transaction/event/gift record. The buyer's current account identity in a later provider event is not sufficient by itself to decide whose in-game entitlement must be reconciled.

Production currently contains delivered RevenueCat gift intents for both Diamonds and VIP, so this is not a purely hypothetical product path. No matching cancellation event was observed for the delivered gift transactions in the aggregate read-only check performed during this review, so this document does **not** claim an actual gift refund incident occurred.

Acceptance criteria:

- persist and use original purchase-to-gift-recipient provenance;
- on refund/reversal, resolve the original fulfillment target from the stored transaction rather than trusting a current caller/user mapping;
- never remove unrelated value from the purchaser merely because the original purchase was a gift;
- if a refunded gift was already consumed by the recipient, use the same proportionate source-specific reconciliation logic as a direct purchase;
- preserve dispute/support evidence and allow correction of mapping mistakes without treating them as automatic fraud.

## 6. P1: cross-channel one-time VIP stacking is asymmetric

The reviewed one-time VIP implementations do not currently use one uniform cross-channel stacking rule:

- Diamond-to-VIP considers active RevenueCat, Xsolla and existing Diamond-pass expiries when choosing the next start time;
- the Xsolla one-time pass path considers its existing Xsolla pass and active RevenueCat expiry but does not include an active Diamond-pass expiry in the same calculation; and
- the RevenueCat one-time path extends the RevenueCat subscriber-state expiry but does not queue behind an active Xsolla or Diamond-pass expiry.

This can make two legitimate 30-day purchases overlap instead of extending the player's effective VIP period in the same way across channels.

This document does not assume TycoonX legally promises universal stacking where the checkout does not say so. The commercial requirement is consistency and clarity: either prevent a purchase that would create unintended overlap, clearly disclose the actual timing before confirmation, or implement a uniform server-side stacking rule. Do not represent an additional purchase as adding another 30 days if the actual provider/channel implementation will run that period concurrently with an already-active entitlement.

## 7. Reminder interaction

The existing VIP-expiry reminder gate remains open and this refund audit adds another exclusion rule.

A refunded/revoked entitlement must not remain an expiry-reminder candidate merely because its previous expiry timestamp is still in the future. The reminder processor must resolve the current authoritative provider/refund state before creating a purchase-oriented message.

For RevenueCat specifically:

- an ordinary `UNSUBSCRIBE` cancellation can remain a valid end-of-paid-period reminder candidate if the entitlement is still valid;
- a refund/revocation cancellation must not be treated as the same state;
- one-time 30-Day VIP reminders must continue to say that the entitlement does not renew automatically; and
- Lifetime VIP must not receive an ordinary expiry reminder.

## 8. Production evidence from this read-only review

Aggregate checks, without exposing player identities, showed:

- 43 recorded RevenueCat Diamond `NON_RENEWING_PURCHASE` events with 8,750 Diamonds logged as granted;
- 26 recorded RevenueCat VIP `NON_RENEWING_PURCHASE` events;
- 15 recorded RevenueCat VIP `CANCELLATION` events;
- all 15 currently recorded VIP cancellations carry the nested RevenueCat cancellation reason `UNSUBSCRIBE` in the stored payload;
- 3 recorded VIP `EXPIRATION` events;
- no recorded Diamond `CANCELLATION` event in the reviewed event table at the time of this check;
- delivered RevenueCat gift intents exist for both Diamonds and VIP; and
- no matching cancellation event was found for those delivered gift transactions in the aggregate linkage check.

These facts mean the refund-handling weakness is presently a structural release-readiness defect. They do **not** establish that a player exploited it or that a specific refund has already been mishandled.

## 9. Current provider references

Rechecked September 10, 2026:

- RevenueCat's current webhook event reference says `CANCELLATION` is emitted when a subscription or non-renewing purchase is canceled or refunded and separately defines `REFUND_REVERSED`. Its current refund guidance states that refunded one-time/non-subscription purchases lose the associated entitlement and notes platform-specific refund-detection requirements.
- Apple documents refund server notifications for consumable, non-consumable and non-renewing purchases and provides refund-history/consumption-information server APIs. A cross-platform game economy should keep server-side purchase state reconciled with those authoritative transaction events.
- Google Play's current purchase-management documentation distinguishes refunds from revocation and exposes server notification/API mechanisms for refunded or revoked purchases. Its current one-time-product documentation also states that refunded orders can appear in the Voided Purchases API/real-time developer notifications.

Provider rules and event formats can change. The implementation should therefore use the authoritative provider/store transaction state and remain tolerant of new fields/event types rather than hard-coding a legal assumption that every `CANCELLATION` means the same thing.

## 10. Legal effect

The canonical TycoonX legal framework should continue to say, in substance, that a failed, reversed, refunded, charged-back or otherwise invalidated payment may cause the corresponding entitlement to be withheld, reversed or reconciled as permitted by the applicable provider terms and law. It must also continue to preserve mandatory consumer remedies and prevent unrelated valid paid value from being removed merely because a separate transaction was corrected.

No new public Terms clause is required solely because the backend currently lacks refund reconciliation. The correct response is to make the implementation match the existing lawful product/payment meaning.

A refund, provider reversal or entitlement correction is also not by itself proof of fraud. Repeated intentional refund abuse, fabricated payment state, chargeback abuse or exploit use can be investigated under the existing rules using reliable evidence, while ordinary refunds, account compromise, provider mistakes and support corrections must remain distinguishable.

## 11. Closure checklist

Do not close this gate until production verification confirms all of the following:

1. RevenueCat `CANCELLATION` events are classified by authoritative reason/state rather than treated uniformly.
2. Ordinary recurring unsubscribe does not prematurely remove a valid paid period.
3. A refunded/revoked Diamond purchase is reconciled idempotently against the exact purchase transaction.
4. Spent refunded Diamonds use a bounded reconciliation/debt model instead of silently erasing unrelated value.
5. A refunded/revoked one-time 30-Day VIP removes only the affected source/duration and recomputes effective VIP from all remaining authoritative sources.
6. `REFUND_REVERSED` restores the corresponding source-specific correction exactly once.
7. Gift refunds resolve the original fulfillment recipient from stored transaction/gift provenance.
8. Refunded/revoked entitlements cannot generate a false expiry/renewal reminder.
9. Cross-channel active-VIP purchases are either consistently stacked, blocked when they would overlap unexpectedly, or accurately disclosed before confirmation.
10. Apple/Google refund detection and reconciliation are tested with current production notification/provider configuration, including missed-notification recovery where available.
11. No valid Lifetime VIP, separate 30-Day VIP, Diamond grant, Xsolla entitlement, documented complimentary entitlement or mandatory consumer remedy is lost because a different transaction was refunded.
12. No refund or correction is treated as automatic proof of player misconduct.

Until these controls are implemented and reverified, this payment-integrity gate remains open.