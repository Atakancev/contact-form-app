# TycoonX Xsolla User Validation & Webhook Response Release Gate

**Last reviewed:** September 8, 2026  
**Owner:** CK-Labs  
**Scope:** Official TycoonX webshop using Xsolla

This is a focused payment-integrity release gate for Xsolla user validation, account attribution, and webhook HTTP-response semantics. It supplements `TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md`, `TYCOONX_XSOLLA_TRANSACTION_ID_EXTERNAL_ID_RELEASE_GATE.md`, the canonical TycoonX Purchases & Refunds Policy, Terms of Service, and Privacy Policy. It does not replace the existing signature, refund, chargeback, tax, privacy, entitlement, or mandatory-consumer-rights controls.

## Why this gate exists

Xsolla currently documents `user_validation` as a required webhook for Web Shop and Store/Payments integrations that use the relevant webhook flow. It is a **pre-payment gate**, not a fulfillment event.

Current Xsolla behavior creates two easy-to-miss risks:

1. `user_validation` is **not retried**. If Xsolla receives `400`, `5xx`, or no response, the player sees an error and later payment / successful-order webhooks are not sent for that attempt.
2. webhook HTTP status codes can have financial consequences. For combined order webhooks, certain `4xx` responses can trigger an automatic refund when Xsolla's automatic-refund functionality is enabled, while no response or server errors can enter retry logic and can ultimately produce an automatic refund when that functionality is enabled.

A generic webhook handler that returns the same error code for every exception can therefore create failed purchases, lost fulfillment, or unintended refunds even though the TycoonX entitlement logic itself is correct.

This gate also closes an identity-mapping risk. Xsolla currently documents `user.id` in the `user_validation` flow, while the combined `order_paid` model identifies the game-side user through `user.external_id`. TycoonX must deliberately map these values to one stable internal account identity rather than assume every Xsolla webhook uses the same user field.

## 1. User validation is synchronous purchase authorization, not entitlement fulfillment

For a TycoonX Xsolla purchase flow that uses `user_validation`:

- verify the Xsolla signature before trusting the request;
- identify the Xsolla project/environment expected for the request;
- resolve the supplied game-side user identifier to an existing eligible TycoonX account;
- return success only after the required account-existence/eligibility decision has actually been made;
- do not grant Diamonds, start 30-Day VIP, grant Lifetime VIP, restore value, or mark payment complete merely because `user_validation` succeeded; and
- do not treat `user_validation` as evidence that money was charged.

A successful validation only means the account may proceed through the provider purchase flow. Fulfillment still requires the authoritative successful-payment/order event and the normal TycoonX idempotent entitlement ledger.

## 2. Do not acknowledge a nonexistent or unsafe account just to keep checkout moving

TycoonX must not return a success response to `user_validation` before it knows whether the referenced account is valid for the attempted purchase.

Do not use an asynchronous "acknowledge first, validate later" pattern for the account-existence decision itself. That pattern can be appropriate for heavy post-payment business logic after durable recording, but it is unsafe for a pre-payment validation webhook whose result controls whether the player may proceed.

Return the provider-documented rejection response when the supplied user cannot be validated. Do not fabricate a substitute account, attach the purchase to the most recently active account, or silently replace an invalid identifier with another player's identifier.

A temporary CK-Labs infrastructure failure is not the same thing as an invalid player account. Do not label the player as `INVALID_USER` merely because an internal dependency timed out.

## 3. Current no-retry behavior for user validation

Xsolla currently documents that when `user_validation` receives `400`, `5xx`, or no response:

- the validation webhook is not resent;
- the player sees an error; and
- the subsequent payment / successful-payment-for-order webhooks are not sent for that attempt.

Operational consequences for TycoonX:

- keep the validation path fast and highly available;
- keep its dependency chain smaller than the full gameplay stack where practical;
- do not assume a transient `5xx` will be retried later by Xsolla;
- show a neutral retry-later message to the player when the failure is technical rather than account-invalid;
- never create a local paid entitlement merely to compensate for a failed validation attempt; and
- if authoritative Xsolla records later show that a payment nevertheless completed, reconcile from the authoritative provider transaction rather than the earlier validation failure.

A failed validation attempt is not proof of fraud, hacking, account compromise, regional-price abuse, chargeback abuse, or entitlement abuse.

## 4. Stable account identity, not nickname or email

The TycoonX identifier placed into Xsolla purchase/account fields should be a stable internal account identifier designed for payment attribution.

Do not use a mutable nickname as the authoritative payment identity. A player may lawfully change a display nickname, two users may historically have similar names, and support staff may mistype one.

Do not use an email address as the sole payment identity. Email addresses can change, can be subject to account recovery, can be entered with case/alias variations, and unnecessarily expose personal data where an internal pseudonymous identifier is sufficient.

Minimum rule:

- one immutable TycoonX account identifier is the canonical game-side payment identity;
- any Xsolla-facing user identifier is mapped to that account deliberately;
- old identifiers remain traceable for historical transactions when a migration is unavoidable;
- account deletion/recreation does not silently recycle an old payment identifier onto a different person; and
- support cannot move a purchase to another account merely by editing a nickname/email field.

This is an attribution rule, not permission to create hidden cross-account tracking. Apply the Privacy Policy, GDPR purpose limitation/data minimization, and existing payment-record retention rules.

## 5. Keep `user.id`, `user.external_id`, transaction ID, external ID, and order ID distinct

The following identifiers serve different purposes and must not be collapsed into one generic `id` field:

- Xsolla `user.id` in user-validation / relevant legacy flows;
- Xsolla combined-order `user.external_id` used to identify the game-side user;
- Xsolla transaction ID;
- the TycoonX/Xsolla transaction `external_id` covered by the dedicated identifier gate; and
- Xsolla order ID used for order-level idempotency in the combined order flow.

Do not infer that equal-looking strings mean equal namespaces.

Do not use an order ID as a player ID, a player ID as a transaction ID, or a transaction ID as an entitlement ID.

Keep the exact raw provider identity fields in the transaction record needed for reconciliation, but expose only the minimum necessary information to support staff and players.

## 6. Combined `order_paid` account and order reconciliation

For the combined webhook model currently documented by Xsolla:

- use the verified `user.external_id` to resolve the intended TycoonX account;
- validate that it matches the account/order mapping created for checkout;
- validate the item SKU, quantity, order amount/currency, environment, and transaction identity before fulfillment;
- deduplicate fulfillment on the authoritative order/transaction identity, including the Xsolla `order.id` as the order-level idempotency key where the current integration uses that model;
- preserve `order.mode` so sandbox/test orders cannot mutate production entitlements; and
- quarantine identity conflicts rather than guessing which account should receive the purchase.

If the original pre-payment `user.id` mapping and later verified `user.external_id` / order mapping materially disagree, do not automatically grant to either account. Reconcile the transaction first.

An identity mismatch is a risk signal, not automatic proof that either player committed fraud.

## 7. Webhook HTTP responses are financial controls

The webhook handler must choose HTTP responses deliberately according to the event and failure type.

For supported Xsolla webhooks, current documentation recognizes `200`, `201`, or `204` as success responses. Use success only when the event has passed signature validation and the handler has reached the durable-processing point required by the existing Xsolla refund/chargeback gate.

Do not return a business-rejection `4xx` for a transient CK-Labs database, queue, cache, network, or downstream-service outage simply because it is convenient for application code.

Do not return `2xx` before durable recording of a paid/cancel/refund event merely to suppress retries if a process crash could then permanently lose the entitlement mutation.

## 8. Automatic-refund configuration changes the meaning of `4xx`

Xsolla currently documents that, when automatic payment refund functionality is enabled for the project, certain `4xx` responses to combined order webhooks can trigger an automatic refund.

Therefore:

- verify whether automatic payment refund is enabled in the actual CK-Labs Xsolla project before go-live and after configuration changes;
- treat the setting as a production payment-control setting, not a harmless preference;
- do not return a listed `4xx` for a recoverable server problem;
- do not intentionally use `4xx` as an undocumented refund API substitute;
- do not revoke TycoonX value merely because the handler emitted `4xx`; reconcile the provider's authoritative refund/cancellation state first; and
- if a `4xx` was emitted accidentally, immediately place the transaction into reconciliation rather than resubmitting or regranting blindly.

When automatic refund is disabled, a `4xx` may not cause the same provider refund action, so support and backend code must not infer refund settlement solely from the HTTP response it sent.

## 9. Retry exhaustion is not a player-fraud signal

For combined `order_paid` / `order_canceled`, Xsolla currently documents repeated delivery attempts after no response or server errors, with a maximum retry window handled by the provider. Where automatic refunds are enabled, exhaustion without successful acknowledgement can result in an automatic refund.

TycoonX must:

- process retries idempotently;
- retain the same order/account mapping across retries;
- avoid repeated Diamond grants or repeated VIP activation;
- avoid repeated clawbacks on a cancellation retry;
- reconcile provider state after a prolonged delivery incident;
- never infer that the player caused the webhook failure; and
- never suspend/terminate an account merely because CK-Labs failed to acknowledge a provider webhook.

Infrastructure failure, deployment error, secret rotation, queue outage, or malformed local exception handling is a CK-Labs operational incident until evidence shows otherwise.

## 10. Product-specific entitlement safeguards

### Diamonds

A successful user validation does not grant Diamonds. A verified successful order grants the purchased Diamond quantity exactly once. A later automatic/provider refund can correct only the value attributable to that transaction, subject to the existing refund/reconciliation gates and mandatory law.

Purchased Diamonds do not expire solely because time passes.

### One-time 30-Day VIP

A successful user validation does not start the VIP clock. The one-time non-renewing 30-Day VIP period begins only under the verified entitlement rules for a valid completed purchase and lasts 30 consecutive days.

Retrying validation, checkout, or `order_paid` must not restart or stack the same transaction's 30-day period.

### Lifetime VIP

Lifetime VIP remains a limited-time promotional one-time entitlement available only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability.

User validation must also verify the current product/checkout flow is allowed to sell Lifetime VIP. A stale Xsolla item, cached purchase URL, replayed validation request, or old identifier must not reopen a closed sales window.

If a provider later authoritatively confirms a valid transaction that belongs to a genuine offer under the provider rules, handle it under the canonical Purchases & Refunds Policy and mandatory law. Do not use the fact that the public sales window later closed as an excuse to ignore an already valid provider-confirmed transaction.

## 11. Suspended, compromised, deleted, or recovering accounts

Do not create avoidable purchases into an account that TycoonX knows cannot lawfully receive/use the product.

For an account that is suspended, deleted, under verified compromise containment, or in an unresolved ownership-recovery state:

- apply the existing account/enforcement policy and the actual purchase eligibility intended for that state;
- if purchase is blocked, return a neutral provider-compatible result and player-facing explanation that does not disclose security-sensitive details;
- do not characterize a compromised-account victim as the attacker merely because a validation attempt used the account identifier;
- do not transfer the purchase to a replacement account until entitlement ownership is verified; and
- preserve mandatory remedies for a payment that actually completed.

A support lock or security hold must not become a mechanism for retaining money without delivering the product or providing a legally required remedy.

## 12. Privacy and support handling

Support may ask for enough information to identify the affected Xsolla order, but must not ask the player to send full card details, passwords, webhook secrets, API keys, or unrelated private account data.

Support views should distinguish:

- validation failed before payment;
- checkout opened but payment did not complete;
- payment completed but fulfillment is pending;
- payment completed and fulfillment succeeded;
- provider refund/cancellation is pending; and
- refund/cancellation completed.

Do not tell a player "the payment failed" merely because user validation failed if authoritative payment status has not been checked for a disputed case.

## 13. Minimum regression matrix

Before enabling or materially changing the Xsolla webshop flow, test at least:

1. valid existing account -> `user_validation` succeeds and grants nothing;
2. nonexistent account -> validation rejects and no substitute account is created;
3. mutable nickname change -> historical purchase still resolves to the same internal account;
4. changed email -> historical purchase still resolves without using email as sole authority;
5. validation database timeout -> neutral technical failure, no `INVALID_USER` fraud inference, no entitlement;
6. duplicate validation request -> no entitlement and no duplicate order state;
7. combined `order_paid` with matching `user.external_id` -> one correct fulfillment;
8. combined `order_paid` with mismatching account mapping -> quarantine, no guessed grant;
9. duplicate `order_paid` with same `order.id` -> no duplicate Diamonds/VIP;
10. sandbox `order.mode` -> no production entitlement mutation;
11. accidental listed `4xx` while automatic refunds are enabled -> transaction reconciliation, no blind regrant or clawback;
12. temporary server failure -> correct retry-safe response semantics rather than intentional business-rejection `4xx`;
13. retry delivery -> idempotent fulfillment/cancellation;
14. retry exhaustion -> no player misconduct classification;
15. 30-Day VIP -> one 30-consecutive-day entitlement only;
16. Lifetime VIP outside a closed genuine sales window -> validation cannot create a new hidden sale route;
17. valid provider-confirmed Lifetime VIP transaction from a genuine offer -> preserve the completed purchase under the canonical policy;
18. account-compromise hold -> no automatic transfer to an attacker or replacement account;
19. deleted/recreated account -> old payment identifier is not silently recycled to a different person; and
20. provider refund after webhook-response incident -> correction is limited to the affected transaction and mandatory consumer rights remain intact.

## 14. Release blockers

Do not ship or keep the Xsolla webshop purchase route enabled when:

- `user_validation` returns success without actually validating the account;
- a mutable nickname or email is the sole authoritative Xsolla-to-TycoonX identity;
- `user.id` and `user.external_id` are treated as interchangeable without a deliberate mapping;
- sandbox/test orders can grant production Diamonds or VIP;
- the handler returns the same `4xx`/`5xx` for all failures without considering Xsolla's financial/retry semantics;
- the team does not know whether automatic payment refund is enabled for the production project;
- webhook retries can duplicate grant/revocation;
- an identity mismatch automatically grants to one of the candidate accounts;
- a failed validation automatically becomes a player fraud/enforcement event; or
- mandatory EU/German consumer remedies could be denied because CK-Labs' validation/webhook implementation failed.

## Current Xsolla checkpoint

As of **September 8, 2026**, current Xsolla documentation states that:

- user validation is required for the applicable Web Shop / Store and Payments integration flow;
- `user_validation` is not resent after `400`, `5xx`, or no response, the player sees an error, and later payment / successful-order webhooks are not sent for that attempt;
- successful webhook responses include `200`, `201`, and `204`;
- combined `order_paid` currently carries purchased items, payment data, `user.external_id`, `order.id`, and `order.mode`;
- Xsolla recommends order-level idempotency so repeated delivery does not regrant items;
- sandbox combined orders are identifiable through `order.mode` and must not mutate production state; and
- combined-order response codes can interact with automatic payment refund functionality, so the production setting must be known and tested.

Provider behavior can change. Recheck the live Xsolla webhook documentation and actual CK-Labs Publisher Account settings before a production payment release.

## Mandatory rights boundary

Nothing in this gate authorizes CK-Labs to waive mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, refund, termination, liability, privacy, or other non-waivable consumer rights.

A CK-Labs validation or webhook implementation failure is not a basis to keep consumer money without delivering the valid purchase or providing a mandatory remedy.

## Manual verification

Run locally without GitHub Actions or paid services:

```bash
node scripts/verify-tycoonx-xsolla-user-validation-webhook-response.mjs
```
