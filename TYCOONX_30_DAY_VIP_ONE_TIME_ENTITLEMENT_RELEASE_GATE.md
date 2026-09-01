# TycoonX One-Time 30-Day VIP Release Gate

**Status:** P0 commercial / payment / entitlement / consumer release gate  
**Owner:** CK-Labs  
**Last reviewed:** September 1, 2026  
**Scope:** TycoonX one-time 30-Day VIP sold through Apple App Store In-App Purchase, Google Play, and the official TycoonX web shop using Xsolla.

## Purpose

TycoonX 30-Day VIP is intentionally a **one-time, non-renewing digital entitlement**. It is not an auto-renewing subscription, it does not create recurring billing, and it must never silently turn into one because of a store configuration, provider migration, restore flow, retry, or future product redesign.

The founder-protective objective is to keep one clear entitlement clock per valid purchase, make provider reconciliation idempotent, permit repeat purchases only through a deliberate supported model, isolate refunds and reversals to the affected transaction, and preserve all mandatory consumer rights.

This file is an operational release gate. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, platform terms, transaction-specific checkout information, or mandatory law.

## 1. Core product invariant

The current TycoonX product described as **30-Day VIP**, **30 Days VIP**, or equivalent must satisfy all of the following:

- it is a one-time purchase;
- it is non-renewing;
- it does not automatically renew;
- it does not create a recurring payment obligation;
- it provides the purchased VIP entitlement for **30 consecutive days** beginning when the entitlement is activated or otherwise made available to the purchasing TycoonX account;
- one provider transaction must never create more than one 30-Day VIP entitlement period merely because notifications, restores, retries, devices, or platforms repeat the same transaction;
- it remains legally and technically distinct from purchased Diamonds, Lifetime VIP, and any future recurring subscription; and
- any future auto-renewing VIP product must use its own product identifiers, checkout copy, entitlement lifecycle, cancellation logic, recurring-price rules, legal review, and localized legal update where the canonical public meaning changes.

Do not use the phrase `subscription` in consumer-facing copy in a way that makes the current one-time 30-Day VIP look auto-renewing. An Apple technical product type named **Non-Renewing Subscription** may be used where appropriate, but checkout and support copy must still explain that the TycoonX purchase is one-time and does not renew automatically.

## 2. Authoritative entitlement record

A production 30-Day VIP record should be recoverable from authoritative server/provider evidence and should identify, at minimum where available:

- TycoonX account ID;
- payment channel/provider;
- provider transaction, order, or purchase-token identifier;
- provider product/SKU identifier;
- transaction status;
- confirmation timestamp;
- activation/effective-start timestamp;
- authoritative expiry timestamp;
- refund, reversal, chargeback, cancellation, or invalidation state;
- whether a provider event has already been fulfilled;
- correction/recovery history where material; and
- any voluntary compensation or statutory remedy that altered access duration.

Do not make a device-local timer, client cache, screenshot, or locally stored receipt the sole authority for paid expiry.

The implementation must make fulfillment **idempotent**. Replaying the same provider event, restoring on another device, reconnecting after an outage, receiving a duplicate webhook, reinstalling the app, or signing into another supported TycoonX platform must not create another 30-day period from the same underlying purchase.

## 3. Start time and the 30-day clock

The default contractual clock follows the current canonical TycoonX wording: 30 consecutive days from activation or availability to the purchasing TycoonX account.

Operationally:

- do not start paid time merely because the user opened checkout;
- do not start paid time merely because an order object exists;
- do not start paid time while the authoritative provider state remains pending;
- start fulfillment only after a valid successful purchase has been confirmed and the entitlement can actually be activated or made available;
- persist the exact start and expiry timestamps server-side; and
- once validly started, ordinary logout, reinstall, platform switching, app updates, device changes, or restore operations do not reset the original clock.

If payment is validly completed but a CK-Labs or provider failure prevents the entitlement from being supplied, route the incident through the TycoonX delivery/conformity-remedy process. Do not silently burn a material part of the purchased 30-day period while the player cannot access the entitlement and then rely on the nominal transaction date as if full supply occurred.

## 4. Restore, reinstall, and cross-platform recognition

A restore or recovery action must reconcile the same paid entitlement rather than create a new purchase.

Examples:

- A player with 12 days remaining who reinstalls TycoonX should recover the same remaining entitlement, not receive a fresh 30 days.
- A player whose 30-Day VIP expired yesterday should not receive another 30 days merely because they press Restore Purchases.
- If the same valid purchase is recognized on another supported TycoonX platform, the entitlement follows the same original expiry clock unless a separate valid purchase or mandatory remedy says otherwise.
- A duplicate provider record representing the same underlying transaction must not stack another 30-day period.

If TycoonX supports separate genuine repeat 30-Day VIP purchases, define the stacking rule before launch. Do not leave concurrency behavior accidental. The supported rule must state whether a second valid purchase begins immediately, queues after the current period, or is blocked until expiry. Any user-facing representation must match the actual implementation.

The safest default while no stacking promise is published is to prevent accidental duplicate/concurrent purchases and preserve each separately completed valid transaction for reconciliation rather than silently discarding it.

## 5. Apple App Store mapping

Apple currently distinguishes Consumable, Non-Consumable, Auto-Renewable Subscription, and **Non-Renewing Subscription** In-App Purchase types. Apple describes a Non-Renewing Subscription as a service with limited duration that **does not renew automatically**.

For the current TycoonX 30-Day VIP model:

- use an Apple-approved non-renewing entitlement configuration consistent with the one-time product represented to the player;
- where the Apple catalog uses **Non-Renewing Subscription**, ensure the duration and product metadata match the real 30-day benefit;
- never configure the current product as an Auto-Renewable Subscription merely to simplify repeated billing;
- do not display automatic-renewal or cancellation-of-renewal language for the current one-time product unless the product model is deliberately changed and the legal/localization work is completed first;
- keep authoritative TycoonX entitlement state sufficient to determine remaining time and recover a still-valid purchase where required; and
- treat Apple refund/revocation state as transaction-specific evidence for the related entitlement rather than permission to modify unrelated purchased value.

Apple's current product taxonomy is a platform configuration rule, not a waiver of EU/German withdrawal, conformity, refund, or digital-service rights.

## 6. Google Play mapping

Google Play separates **one-time products** from subscriptions. For the current one-time, non-renewing TycoonX 30-Day VIP, do not configure the product as a recurring Google Play subscription unless CK-Labs deliberately launches a different recurring product and completes the separate recurring-subscription release gate.

The current implementation should use the applicable Google Play one-time-product path and must:

- distinguish `ProductType.INAPP` one-time products from `ProductType.SUBS` subscriptions;
- query current product details rather than relying indefinitely on stale cached catalog data;
- validate the provider purchase token/order state;
- grant the entitlement only after Google reports the purchase as `PURCHASED`, not while it is `PENDING`;
- acknowledge or consume the purchase as required by the selected one-time-product configuration after entitlement is granted; and
- keep server-side expiry and fulfillment evidence even if the provider-side product is consumed to permit a later legitimate repurchase.

Google's current Billing guidance states that purchases received through Play Billing must be acknowledged after entitlement is granted and that an unacknowledged purchase can be automatically refunded and revoked after three days. For a pending purchase, that three-day period begins when the transaction reaches `PURCHASED`, not while it remains `PENDING`.

### Consumable versus non-consumable decision

A 30-day time entitlement creates a practical repeat-purchase question on Google Play:

- if configured as a **consumable one-time product** so the same player can legitimately buy another 30-Day VIP later, consuming the provider purchase must not erase CK-Labs' authoritative transaction and expiry evidence;
- if configured as a **non-consumable one-time product**, verify that the permanent Google Account association does not unintentionally prevent the later repeat-purchase model CK-Labs intends; and
- whichever configuration is chosen, document it and test purchase, expiry, repeat purchase, refund, restore/recovery, and duplicate-notification behavior before release.

Do not solve repeat purchasing by silently converting the current one-time product into a recurring subscription.

## 7. Xsolla web shop mapping

The official TycoonX web shop must treat current 30-Day VIP as a **one-time 30-day entitlement**, not as an automatically renewing Xsolla subscription plan, unless CK-Labs deliberately introduces a separate recurring product later.

For Xsolla fulfillment:

- identify the TycoonX account before granting the entitlement;
- grant only after valid successful payment/order confirmation;
- process the applicable Xsolla webhook model for the actual project;
- make `order_paid`/payment handling idempotent;
- make `order_canceled`/refund handling transaction-specific;
- verify webhook authenticity according to Xsolla's current requirements;
- expect provider retry delivery and never use a repeated webhook as a reason to extend the 30-day clock; and
- keep the provider transaction reference necessary to reconcile refunds, reversals, chargebacks, delayed payment, and account recovery.

Xsolla's current documentation states that item delivery should follow successful-payment confirmation and documents `order_paid` and `order_canceled` flows for newer combined-webhook projects, with payment/refund plus order webhooks in the older separate model. The project must process the model actually configured for CK-Labs rather than assuming one webhook shape for all Xsolla accounts.

## 8. Pending, failed, delayed, and reversed payments

Provider payment state and TycoonX entitlement state must be related but not collapsed into one ambiguous status.

- `PENDING` or equivalent does not grant 30-Day VIP.
- A valid provider completion after a delay may grant the entitlement at actual confirmed fulfillment according to the transaction and applicable offer.
- A failed, rejected, canceled, or never-confirmed payment does not create paid VIP.
- A provider refund, reversal, chargeback, or invalidation may justify correcting the corresponding entitlement, subject to mandatory law and provider rules.
- A payment dispute must not automatically remove unrelated purchased Diamonds, another separate valid 30-Day VIP purchase, or Lifetime VIP.

If a provider later reverses a transaction after the player already used part of the entitlement, use the transaction-specific refund/chargeback rules. Do not invent a second charge or silently debit a different payment method.

## 9. Refunds, withdrawal, conformity, and outages

30-Day VIP is a paid digital service/entitlement supplied over time. A one-time price does not mean every EU/German consumer remedy disappears upon activation.

Where applicable law provides a withdrawal right, early-performance consequences depend on the legally required transaction-specific information, request/consent, acknowledgement, and provider/merchant role. Accepting general TycoonX Terms is not automatically a substitute for a separate transaction-specific step where the law requires one.

Where German law applies, the current BGB framework can require:

- supply of the digital product and proof of supply under § 327b;
- conformity under §§ 327d and following;
- cure where § 327l applies;
- termination or price reduction under §§ 327m and 327n when their conditions are met; and
- service-withdrawal consequences under §§ 356 and 357a where applicable.

A short incidental outage does not automatically entitle every player to a full 30-Day VIP refund. A material multi-day failure during a paid period also must not be rejected automatically under a blanket no-downtime-refunds rule. Record the affected period, functionality, severity, cause, cure, provider state, and any mandatory or voluntary remedy.

A voluntary extension can be used as goodwill where appropriate, but should be recorded separately from the original paid clock so support can distinguish contractual entitlement from discretionary compensation.

## 10. Suspension, account compromise, and enforcement

A security containment action, moderation restriction, payment-risk hold, exploit correction, and final account termination are separate decisions.

- Temporarily restricting a compromised account does not create a new 30-day clock.
- A player should not receive a fresh 30 days merely because a security hold ended.
- If a CK-Labs mistake wrongly prevented access during a meaningful part of the paid period, assess restoration, extension, price reduction, termination, refund, or another remedy under the applicable contract and mandatory law rather than blindly resetting the product.
- A chargeback associated with a compromise claim is not automatically proof that the account owner committed fraud.
- Exploit-generated or duplicate benefits may be corrected without removing the independently valid 30-Day VIP unless the paid VIP transaction itself is invalid or lawful account termination has a separate effect.

## 11. Price, regional pricing, promotions, taxes, and FX

CK-Labs may change the 30-Day VIP price, currencies, regional prices, or future promotions for **future purchases**.

For each completed one-time purchase:

- the final legally binding checkout total and provider transaction record control, subject to lawful obvious-error correction;
- a later price decrease does not automatically create a refund, credit, price-match right, or extra VIP time;
- a later price increase does not create an extra charge on that completed purchase;
- platform/country/channel prices may differ where lawful;
- tax, VAT, FX, platform-tier, and provider changes may change future local prices; and
- genuine coupons or promotions may have disclosed eligibility conditions but must not be misleading or abused.

Regional-pricing abuse, coupon abuse, or an obvious configuration error must be investigated transaction-specifically. Ordinary travel, a provider routing difference, or acceptance of a genuinely displayed offer is not automatically fraud.

## 12. Catalog and mapping errors

Treat product mapping errors as fulfillment/conformity incidents before treating them as player misconduct.

Examples:

- If a valid 30-Day VIP transaction accidentally activates Lifetime VIP, investigate and correct the unsupported excess entitlement without rewriting the underlying provider transaction or touching unrelated value.
- If a valid Lifetime VIP transaction activates only 30-Day VIP, cure the missing Lifetime VIP entitlement rather than claiming the buyer purchased 30-Day VIP.
- If a valid 30-Day VIP purchase activates for only three days, restore the contracted duration/remedy as required rather than silently changing the purchase history.
- If the same 30-Day VIP event is fulfilled twice because a webhook is retried, consolidate the duplicate technical grant while preserving the valid underlying purchase.

Obvious CK-Labs configuration mistakes are not automatically hacks or exploitation by the player. Intentional abuse of a known defect can be investigated separately using evidence.

## 13. Old app versions and provider migrations

CK-Labs may require a supported TycoonX version for security, payment validation, or correct entitlement display where lawful.

An outdated client must not be used as a reason to erase a valid authoritative 30-Day VIP transaction. If the old client displays the wrong remaining time, reliable server/provider records control subject to mandatory rights and the user's ability to challenge an incorrect record.

When CK-Labs changes authentication, payment, infrastructure, or entitlement providers:

- preserve each still-valid entitlement's original expiry where technically and legally required;
- migrate transaction provenance needed for refund/recovery handling;
- do not reset every migrated 30-Day VIP to 30 days;
- do not expire every migrated 30-Day VIP immediately; and
- test accounts near start, middle, and end of their paid period before production cutover.

## 14. Business sale, merger, or successor operator

If TycoonX is transferred to a successor and the Service continues, a still-valid 30-Day VIP should continue with the remaining paid period subject to the applicable contract, transfer rules, and mandatory law.

A corporate transaction is not a valid technical reason to restart, duplicate, or erase every current 30-Day VIP. The successor migration must preserve the evidence needed to determine original start, expiry, provider, and transaction status.

## 15. Permanent service shutdown

Before a planned permanent TycoonX shutdown:

- stop selling new 30-Day VIP sufficiently early where reasonably practicable so CK-Labs does not knowingly sell a 30-day service that cannot be supplied for the represented period;
- consider pending provider transactions and delayed confirmations;
- identify players whose paid 30-Day VIP extends beyond the shutdown time; and
- apply the notice, conformity, price-reduction, termination, refund, or other remedy required by the circumstances and mandatory law.

A permanent shutdown does not automatically convert unused VIP time into cash value beyond what applicable law or a voluntary remedy requires, but CK-Labs also must not rely on the shutdown clause to eliminate a mandatory remedy for an unsupplied paid period.

## 16. Support decision matrix

Support should identify the incident before changing entitlement state:

| Scenario | Default route |
|---|---|
| Valid payment, VIP missing | Verify transaction and fulfill once |
| Provider still pending | Wait for authoritative completion; do not grant yet |
| Reinstall with active VIP | Restore remaining original period |
| Restore after expiry | Do not create a fresh 30 days |
| Duplicate webhook | No duplicate period |
| Valid separate second purchase | Apply documented stacking/repeat-purchase rule |
| Provider refund/reversal | Correct only affected entitlement, subject to law |
| Wrong SKU delivered | Cure exact purchased product |
| Multi-day paid-feature failure | Conformity/remedy review |
| Account compromise | Security containment plus separate entitlement review |
| Exploit unrelated to VIP purchase | Correct exploit state without automatically voiding VIP |
| Permanent shutdown before expiry | Shutdown/remedy review |

## 17. Release QA scenarios

Before any material 30-Day VIP payment or entitlement change, test at least:

1. Apple successful purchase creates exactly one 30-day period.
2. Apple restore with 12 days remaining restores 12 days, not 30.
3. Apple restore after expiry does not reactivate the entitlement.
4. Google `PENDING` purchase grants nothing until `PURCHASED`.
5. Google valid purchase is acknowledged/consumed correctly and does not auto-refund because fulfillment forgot acknowledgement.
6. Google repeat purchase behaves according to the documented consumable/non-consumable decision.
7. Xsolla `order_paid` or applicable payment confirmation starts exactly one entitlement.
8. Repeated Xsolla webhook delivery does not extend the clock.
9. Xsolla cancellation/refund affects only the related 30-Day VIP transaction.
10. Switching iOS to Android or web preserves the same expiry for one recognized purchase.
11. Reinstalling during an outage does not reset expiry.
12. A valid 30-Day VIP purchase mapped to the wrong VIP product is cured correctly.
13. A mistaken account suspension can be reversed without duplicating paid time.
14. An exploit correction leaves unrelated valid VIP intact.
15. A regional-price change affects future purchases only.
16. A support goodwill extension is identifiable separately from the original paid period.
17. Provider migration preserves start/expiry and transaction provenance.
18. Planned shutdown identifies every active paid period crossing the shutdown date.

## 18. Evidence to retain

Retain only what is reasonably necessary under the Privacy Policy and applicable retention law, including where relevant:

- provider transaction/order/purchase-token identifier;
- product/SKU and channel;
- payment confirmation and status changes;
- activation and expiry timestamps;
- fulfillment idempotency key/state;
- refund/reversal/chargeback status;
- material correction or recovery record;
- applicable offer/checkout version where needed for a dispute;
- support remedy or voluntary extension; and
- provider migration mapping where needed to preserve the entitlement.

Do not retain unnecessary payment credentials, full card data, passwords, or unrelated personal data merely because an entitlement record exists.

## 19. Localization consequence

This gate does **not** change the current canonical public meaning. The English Terms and Purchases & Refunds Policy already define 30-Day VIP as a one-time, non-renewing 30-consecutive-day entitlement, distinguish it from Lifetime VIP and future recurring products, and preserve mandatory remedies.

Therefore this operational gate alone does not reopen the completed localization queue.

If CK-Labs later changes any player-facing legal meaning, including converting the product to auto-renewal, changing when the 30-day clock starts, promising a new stacking rule, changing material refund/withdrawal consequences, or changing the entitlement's duration, update the canonical English source first and then reopen the affected localized document type in the exact required locale order.

## 20. Current legal/platform checkpoint

This release gate was reviewed against the rules available on September 1, 2026, including:

- Apple App Store Connect's current In-App Purchase taxonomy, which describes Non-Renewing Subscriptions as limited-duration services that do not renew automatically;
- Google Play Billing's current distinction between one-time products and subscriptions, `PENDING` versus `PURCHASED` fulfillment, and acknowledgement requirements;
- Xsolla's current successful-payment/order-cancellation webhook model and refund/order-tracking documentation;
- German BGB §§ 327 and following on digital products, including supply and conformity remedies; and
- German BGB §§ 356 and 357a where their withdrawal/service-performance rules apply.

Re-check current provider documentation before any material payment-model migration because platform product taxonomies, lifecycle APIs, and regional rules can change.

## Founder-protective interpretation

Nothing in this gate prevents CK-Labs from changing the future price of 30-Day VIP, withdrawing it from future sale, replacing it with another future product, supporting repeat one-time purchases under a documented model, correcting duplicate technical grants, reversing a refunded or invalid transaction, requiring supported software, changing providers, or permanently discontinuing TycoonX where lawful.

The protection comes from keeping the current product genuinely one-time and non-renewing, preserving authoritative transaction evidence, applying the original clock consistently, making fulfillment idempotent, separating provider payment state from entitlement state, and preserving mandatory consumer remedies rather than relying on ambiguous billing or support behavior.