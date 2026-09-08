# TycoonX Xsolla User Validation & Webhook Response Release Gate

**Last reviewed:** September 8, 2026  
**Owner:** CK-Labs  
**Scope:** Official TycoonX webshop using Xsolla

This is a focused payment-integrity release gate for Xsolla user validation, account attribution, and webhook HTTP-response semantics. It supplements `TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md`, `TYCOONX_XSOLLA_TRANSACTION_ID_EXTERNAL_ID_RELEASE_GATE.md`, the canonical TycoonX Purchases & Refunds Policy, Terms of Service, and Privacy Policy. It does not replace the existing signature, refund, chargeback, tax, privacy, entitlement, or mandatory-consumer-rights controls.

## Why this gate exists

Xsolla currently documents **two distinct user-validation surfaces** that must not be collapsed into one handler contract:

1. the Payments/Store **User validation** webhook with notification type `user_validation`; and
2. the Site Builder/Web Shop-specific **User validation in Web Shop** endpoint, documented separately as `user-validation-in-webshop` and without a `notification_type` value in its current request schema.

The standard `user_validation` webhook is a pre-payment gate, not a fulfillment event. Xsolla currently documents that if this webhook receives `400`, `5xx`, or no response, it is **not resent**, the player sees an error, and the later Payment and Successful payment for order webhooks are not sent for that attempt.

The Web Shop-specific validation endpoint has a different current contract: Xsolla documents a request containing project/merchant settings plus `user.id` (and optionally country), and response choices of `200` with user information or `404`. Its response can include `appPlayerId`, which Xsolla says is passed in `custom_parameters` when obtaining a payment token.

These flows must not inherit each other's response codes, retry assumptions, request shape, or identity semantics merely because both are called "user validation."

A separate risk exists after validation: for combined order webhooks, certain `4xx` responses can trigger an automatic refund when Xsolla's automatic-payment-refund functionality is enabled, while other failures can enter retry logic and can ultimately lead to an automatic refund when that functionality is enabled. A generic exception-to-status-code mapping can therefore create failed purchases or unintended refunds.

## 1. Identify which validation flow TycoonX actually uses

Before enabling the production Xsolla webshop, record whether the live CK-Labs project uses:

- standard Payments/Store `user_validation`;
- Web Shop-specific `user-validation-in-webshop`;
- both for different purchase entry points; or
- another current Xsolla-supported identity flow.

Do not infer the flow from a code sample, account age, or filename alone. Confirm it using the current Publisher Account configuration and an actual provider-approved test.

The implementation must route the two current validation surfaces deliberately. Do not send every Xsolla-looking request through one branch that assumes `notification_type`, one set of response codes, and one authentication shape.

## 2. Standard `user_validation` is synchronous purchase authorization, not fulfillment

For a TycoonX purchase flow that uses the standard `user_validation` webhook:

- verify the Xsolla webhook signature against the raw request body under the existing Xsolla signature gate;
- verify the expected Xsolla project/environment;
- resolve `user.id` to an existing TycoonX account under the configured mapping;
- return success only after the required account-existence decision has actually been made;
- use the provider-documented invalid-user response only when the user is actually invalid;
- use the provider-documented temporary-error response for a genuine temporary server failure;
- do not grant Diamonds, start 30-Day VIP, grant Lifetime VIP, restore value, or mark payment complete merely because validation succeeded; and
- do not treat successful validation as evidence that money was charged.

A successful standard validation only permits the payment flow to continue. Fulfillment still requires the authoritative successful-payment/order event and the normal TycoonX exactly-once entitlement ledger.

Do not use an "acknowledge first, validate later" design for the account-existence decision itself. Heavy post-payment business logic may be queued after durable event recording, but the validation answer must reflect the actual account decision.

A temporary CK-Labs database, cache, network, or dependency failure is not the same thing as an invalid player. Do not return `INVALID_USER` merely because an internal dependency timed out.

## 3. Standard `user_validation` no-retry behavior

Xsolla currently documents that when the standard `user_validation` webhook receives `400`, `5xx`, or no response:

- the validation webhook is not resent;
- the player sees an error; and
- the subsequent Payment and Successful payment for order webhooks are not sent for that attempt.

Therefore:

- keep this validation path fast and highly available;
- keep its dependency chain smaller than the full gameplay stack where practical;
- do not assume a temporary `5xx` will be retried by Xsolla;
- surface a neutral retry-later outcome when the failure is technical rather than account-invalid;
- never create a local paid entitlement merely to compensate for a failed validation attempt; and
- if authoritative provider records later show that a payment nevertheless completed, reconcile from the provider transaction rather than the earlier validation result.

A failed validation attempt is not proof of fraud, hacking, account compromise, regional-price abuse, chargeback abuse, or entitlement abuse.

## 4. Web Shop-specific user validation has a different contract

Xsolla currently documents **User validation in Web Shop** separately from the standard `user_validation` webhook. The current Web Shop request includes `settings.project_id`, `settings.merchant_id`, `user.id`, and optionally `user.country`; the documented response is `200` with user information or `404` when the user is not found.

For this endpoint:

- do not require `notification_type: user_validation` when the current Web Shop request contract does not send it;
- do not blindly return standard `204`/`400`/`5xx` semantics where the current Web Shop endpoint documents `200`/`404`;
- validate the current project/merchant identity and the request source using the security controls Xsolla currently documents for this exact endpoint and the actual CK-Labs project;
- do not invent an unsupported authentication field merely because another Xsolla webhook uses it;
- likewise, do not waive an authentication/signature check if Xsolla's actual production request or current documentation requires one;
- confirm the endpoint with Xsolla's real test flow before production rather than relying only on the example request;
- return only the minimum user data required for the feature; and
- never grant a paid entitlement merely because this endpoint returned a user record.

Xsolla currently documents the Web Shop-specific request as coming from IP `34.102.38.178`. Treat that as provider documentation that can change, not as a permanent identity guarantee. An IP allowlist may be a defense-in-depth control where compatible with the current Xsolla setup, but it must not replace whatever authentication/integrity control Xsolla currently requires for the exact production flow.

## 5. `appPlayerId` is attribution data, not payment authority

The current Web Shop-specific response schema can include `appPlayerId`, described by Xsolla as the user ID assigned by the app owner at registration and passed in `custom_parameters` for the payment-token flow.

For TycoonX:

- derive `appPlayerId` from the stable internal account mapping, not from a mutable nickname;
- do not use email as the sole `appPlayerId`/payment identity where an internal pseudonymous identifier is sufficient;
- never accept a client-supplied `appPlayerId` as authoritative merely because it has the right format;
- preserve the mapping used for the transaction so later support/refund/chargeback reconciliation can identify the actual account; and
- do not treat `appPlayerId` as transaction ID, order ID, refund ID, or proof of successful payment.

If Xsolla later changes how this value is propagated, update the mapping deliberately rather than silently remapping historical purchases.

## 6. Stable account identity, not nickname or email

The TycoonX identifier used for Xsolla account/payment attribution should be a stable internal account identifier.

Do not use a mutable nickname as the authoritative payment identity. Do not use an email address as the sole payment identity. Nicknames and emails can change; support staff can mistype them; account recovery can alter them; and an email exposes personal data where a pseudonymous internal identifier can be sufficient.

Minimum rule:

- one immutable TycoonX account identifier is the canonical game-side payment identity;
- every Xsolla-facing user identifier is mapped to that account deliberately;
- old mappings remain traceable for historical transactions when a migration is unavoidable;
- account deletion/recreation does not silently recycle an old payment identifier onto a different person; and
- support cannot move a purchase to another account merely by editing a nickname or email field.

This is an attribution rule, not permission to create hidden cross-account tracking. Apply the Privacy Policy, GDPR purpose limitation/data minimization, and existing payment-record retention rules.

## 7. Keep Xsolla identifier namespaces distinct

The following values serve different purposes and must not be collapsed into one generic `id` field:

- standard user-validation `user.id`;
- Web Shop validation `user.id`;
- Web Shop response `user.appPlayerId` when used;
- combined-order `user.external_id`;
- Xsolla transaction ID;
- TycoonX/Xsolla transaction `external_id` covered by the dedicated identifier gate; and
- Xsolla `order.id`.

Equal-looking strings do not make these namespaces interchangeable.

Do not use an order ID as a player ID, a player ID as a transaction ID, or a transaction ID as an entitlement ID. Keep enough raw provider identity fields for reconciliation, while exposing only the minimum necessary data to support staff and players.

## 8. Combined `order_paid` account and order reconciliation

For the combined webhook model currently documented by Xsolla:

- use verified `user.external_id` to resolve the intended TycoonX account;
- verify that it matches the account/order mapping established for checkout;
- verify item SKU, quantity, order amount/currency, environment, and transaction identity before fulfillment;
- deduplicate on the authoritative order/transaction identity, including `order.id` as the order-level idempotency key where applicable;
- preserve `order.mode` so `sandbox` orders cannot mutate production entitlements; and
- quarantine identity conflicts rather than guessing which account should receive the purchase.

If standard `user.id`, Web Shop `user.id`/`appPlayerId`, and later verified `user.external_id` materially disagree, do not automatically grant to any candidate account. Reconcile the transaction first.

An identity mismatch is a risk signal, not automatic proof that either player committed fraud.

## 9. Webhook HTTP responses are financial controls

For standard signed payment/order/refund webhooks, current Xsolla documentation recognizes `200`, `201`, or `204` as success responses. Use success only after signature verification and after the handler reaches the durable-processing point required by the existing refund/chargeback gate.

Do not return a business-rejection `4xx` for a transient CK-Labs database, queue, cache, network, or downstream-service outage merely because it is convenient for application code.

Do not return `2xx` before durable recording of a paid/cancel/refund event merely to suppress retries if a process crash could permanently lose the entitlement mutation.

This rule does not rewrite the Web Shop-specific validation endpoint's separate current `200`/`404` response contract.

## 10. Automatic-refund configuration changes the meaning of combined-order `4xx`

Xsolla currently documents that, when automatic payment refund is enabled, certain `4xx` responses to combined order webhooks can trigger an automatic refund. The documented list currently includes `400`, `401`, `402`, `403`, `404`, `409`, `415`, and `422`. When automatic refund is disabled, Xsolla currently documents no automatic refund action for those response codes.

Therefore:

- verify whether automatic payment refund is enabled in the actual CK-Labs production project before go-live and after configuration changes;
- treat that setting as a production payment-control setting;
- do not return a listed combined-order `4xx` for a recoverable server problem;
- do not use `4xx` as an undocumented refund API substitute;
- do not revoke TycoonX value merely because the handler emitted `4xx`; reconcile authoritative provider refund/cancellation state first; and
- if a listed `4xx` was emitted accidentally, place the transaction into reconciliation rather than blindly regranting or clawing back value.

Do not confuse this combined-order automatic-refund table with the separate Web Shop user-validation `404` response. The same HTTP number can have different meaning on different Xsolla endpoints.

## 11. Retry exhaustion is not a player-fraud signal

For combined `order_paid` / `order_canceled`, Xsolla currently documents repeated delivery after no response or server errors, with up to 20 attempts within 12 hours. Where automatic refunds are enabled, exhausting the documented delivery attempts without a successful response can result in an automatic refund.

TycoonX must process retries idempotently, preserve the same order/account mapping, avoid duplicate Diamond/VIP grants and duplicate clawbacks, and reconcile provider state after a prolonged delivery incident.

Never infer that the player caused the webhook failure. Never suspend or terminate an account merely because CK-Labs failed to acknowledge a provider webhook. Infrastructure failure, deployment error, secret rotation, queue outage, or malformed local error handling is a CK-Labs operational incident until evidence shows otherwise.

## 12. Product-specific entitlement safeguards

### Diamonds

Validation does not grant Diamonds. A verified successful order grants the purchased Diamond quantity exactly once. A later authoritative refund can correct only value attributable to that transaction, subject to the existing refund/reconciliation gates and mandatory law.

Purchased Diamonds do not expire solely because time passes.

### One-time 30-Day VIP

Validation does not start the VIP clock. The one-time non-renewing 30-Day VIP period begins only under the verified entitlement rules for a valid completed purchase and lasts 30 consecutive days.

Retrying validation, checkout, or `order_paid` must not restart or stack the same transaction's 30-day period.

### Lifetime VIP

Lifetime VIP remains a limited-time promotional one-time entitlement available only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability.

The **surrounding catalog/token/checkout eligibility path**, not a user-validation payload that lacks product context, must prevent a stale Xsolla item, cached purchase URL, old token, replayed request, or old identifier from reopening a closed Lifetime VIP sales window.

If Xsolla later authoritatively confirms a valid Lifetime VIP transaction that belongs to a genuine offer under the provider rules, handle it under the canonical Purchases & Refunds Policy and mandatory law. Do not use the fact that the public sales window later closed as an excuse to ignore an already valid provider-confirmed transaction.

## 13. Suspended, compromised, deleted, or recovering accounts

Do not create avoidable purchases into an account that TycoonX knows cannot lawfully receive/use the product.

For a suspended, deleted, compromise-contained, or unresolved recovery account, apply the existing account/enforcement policy and the purchase eligibility intended for that state. If purchase is blocked, provide a neutral provider-compatible result without disclosing security-sensitive details. Do not characterize a compromised-account victim as the attacker merely because a validation attempt used the account identifier, and do not transfer a purchase to a replacement account until ownership is verified.

A support lock or security hold must not become a mechanism for retaining money without delivering a valid completed purchase or providing a legally required remedy.

## 14. Privacy and support handling

Support may ask for enough information to identify the affected Xsolla order, but must not ask the player to send full card details, passwords, webhook secrets, API keys, or unrelated private account data.

Support and internal tooling should distinguish validation failed before payment, checkout opened but unpaid, completed payment with fulfillment pending, completed payment with fulfillment delivered, provider refund/cancellation pending, and completed refund/cancellation.

Do not tell a player "the payment failed" merely because validation failed if authoritative payment status has not been checked for a disputed case.

## 15. Minimum regression matrix

Before enabling or materially changing the Xsolla webshop flow, test at least:

1. standard `user_validation`, valid account -> success and no entitlement;
2. standard `user_validation`, nonexistent account -> documented rejection and no substitute account;
3. standard validation dependency timeout -> temporary failure, no `INVALID_USER` fraud inference;
4. standard validation `400`/`5xx`/no-response path -> no assumption that Xsolla will resend validation;
5. Web Shop-specific validation request without `notification_type` -> routed to the correct contract;
6. Web Shop-specific existing user -> documented `200` response with only required user data;
7. Web Shop-specific missing user -> documented `404`, not a combined-order refund event;
8. `appPlayerId` -> maps to the stable TycoonX account and grants nothing by itself;
9. nickname or email change -> historical purchase still resolves to the same internal account;
10. deleted/recreated account -> old payment identity is not silently recycled;
11. combined `order_paid` with matching `user.external_id` -> one correct fulfillment;
12. combined `order_paid` with mismatching identity mapping -> quarantine, no guessed grant;
13. duplicate `order_paid` with same `order.id` -> no duplicate Diamonds/VIP;
14. `order.mode: sandbox` -> no production entitlement mutation;
15. listed combined-order `4xx` while automatic refund is enabled -> provider reconciliation, no blind regrant or clawback;
16. the same numeric `404` on Web Shop validation -> remains separate from the combined-order refund table;
17. temporary combined-order server failure -> retry-safe response semantics, not intentional business rejection;
18. combined-order retry exhaustion -> no player misconduct classification;
19. 30-Day VIP -> one 30-consecutive-day entitlement only;
20. stale Lifetime VIP item/token after a genuine sales window closes -> no hidden new sale route;
21. valid provider-confirmed Lifetime VIP transaction from a genuine offer -> completed purchase preserved;
22. account-compromise hold -> no automatic transfer to an attacker or replacement account; and
23. provider refund after a response-code incident -> correction limited to the affected transaction and mandatory rights preserved.

## 16. Release blockers

Do not ship or keep the Xsolla webshop purchase route enabled when:

- the implementation cannot distinguish standard `user_validation` from Web Shop-specific validation where both are relevant;
- standard `user_validation` returns success before the account-existence decision;
- Web Shop-specific validation is forced through incompatible standard-webhook response semantics;
- the actual authentication/integrity mechanism for the live Web Shop validation endpoint is unknown;
- a mutable nickname or email is the sole authoritative Xsolla-to-TycoonX identity;
- `user.id`, `appPlayerId`, `user.external_id`, transaction ID, external ID, and order ID are treated as interchangeable;
- sandbox/test orders can grant production Diamonds or VIP;
- the handler returns the same `4xx`/`5xx` for all Xsolla endpoints without considering endpoint-specific financial/retry semantics;
- CK-Labs does not know whether automatic payment refund is enabled for the production project;
- webhook retries can duplicate grant/revocation;
- an identity mismatch automatically grants to one of the candidate accounts;
- a failed validation automatically becomes a player fraud/enforcement event; or
- mandatory EU/German consumer remedies could be denied because CK-Labs' validation/webhook implementation failed.

## Current Xsolla checkpoint

As of **September 8, 2026**, current Xsolla documentation states that:

- standard User validation uses notification type `user_validation` and checks whether a user exists in the game;
- standard `user_validation` currently uses `user.id`, supports `200`/`201`/`204` success, `400` for specified validation/signature errors, and `5xx` for temporary server issues;
- if standard `user_validation` receives `400`, `5xx`, or no response, it is not resent, the player sees an error, and later Payment / Successful payment for order webhooks are not sent for that attempt;
- User validation in Web Shop is separately documented without a notification type, with a request containing project/merchant settings and `user.id`, and current `200`/`404` responses;
- the Web Shop-specific response can include `appPlayerId`, which Xsolla says is passed through payment-token `custom_parameters`;
- combined `order_paid` uses `user.external_id`, `order.id`, and `order.mode`, and sandbox orders must not mutate production state;
- Xsolla recommends order-level idempotency so repeated delivery does not regrant items;
- combined order webhooks can be retried up to 20 attempts within 12 hours after the documented failure conditions; and
- combined-order response codes interact with automatic-payment-refund functionality, which is disabled by default in the current documentation unless enabled for the project.

Provider behavior can change. Recheck the live Xsolla webhook/Web Shop documentation and the actual CK-Labs Publisher Account settings before a production payment release.

## Mandatory rights boundary

Nothing in this gate authorizes CK-Labs to waive mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, refund, termination, liability, privacy, or other non-waivable consumer rights.

A CK-Labs validation or webhook implementation failure is not a basis to keep consumer money without delivering the valid purchase or providing a mandatory remedy.

## Manual verification

Run locally without GitHub Actions or paid services:

```bash
node scripts/verify-tycoonx-xsolla-user-validation-webhook-response.mjs
```
