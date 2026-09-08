# TycoonX Xsolla Webhook Ingress & Proxy Security Release Gate

**Last reviewed:** September 8, 2026  
**Owner:** CK-Labs  
**Scope:** Official TycoonX webshop using Xsolla

This is a focused ingress-security companion to `TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md` and `TYCOONX_XSOLLA_USER_VALIDATION_WEBHOOK_RESPONSE_RELEASE_GATE.md`. The existing refund/chargeback gate remains the primary Xsolla signature, secret-rotation, retry, refund, and chargeback doctrine. This gate closes a narrower deployment gap: source-IP validation, reverse-proxy trust, CSRF scoping, preservation of the exact signed request body, and the durable-ingest boundary before a successful webhook acknowledgement.

It does not change the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, or any mandatory consumer right.

## Why this gate exists

Xsolla currently requires HTTPS for webhooks, instructs developers to verify the webhook signature against the raw request body without parsing or re-encoding it, recommends exempting the webhook endpoint from CSRF middleware, and publishes source IP addresses that applications should accept for webhook traffic.

Those controls can fail in production even when the application-level signature code is correct. A CDN, reverse proxy, load balancer, WAF, framework body parser, or generic forwarded-IP helper can make the application validate the wrong source address or the wrong request bytes. A broad CSRF exemption can also unintentionally weaken unrelated routes.

The result can be either a security bypass or a false rejection of legitimate Xsolla payment/refund traffic. Neither outcome may be converted into a player-fraud conclusion.

## 1. Current Xsolla source-address checkpoint

As of the review date above, Xsolla's current webhook documentation lists the following base webhook sources:

- `185.30.20.0/24`
- `185.30.21.0/24`
- `185.30.22.0/24`
- `185.30.23.0/24`
- `34.102.38.178`
- `34.94.43.207`
- `35.236.73.234`
- `34.94.69.44`
- `34.102.22.197`

Xsolla currently lists additional source addresses when its Login product is integrated:

- `34.94.0.85`
- `34.94.14.95`
- `34.94.25.33`
- `34.94.115.185`
- `34.94.154.26`
- `34.94.173.132`
- `34.102.48.30`
- `35.235.99.248`
- `35.236.32.131`
- `35.236.35.100`
- `35.236.117.164`

Do not treat this dated list as immutable. Before a production deployment that changes webhook networking, and periodically thereafter, compare the configured ingress allowlist with Xsolla's current official documentation. If Xsolla adds, removes, or replaces addresses, update the infrastructure deliberately and preserve dated release evidence.

Do not add the Login-only addresses merely because they appear in documentation if the CK-Labs project does not use the relevant Xsolla Login flow. Likewise, if that flow is later enabled, do not assume the base payment list alone is sufficient.

## 2. Signature verification remains the primary authenticity control

An allowed source IP is defense in depth. It does not replace the existing signature control.

For every Xsolla webhook surface that uses the standard Xsolla signature contract:

- read `Authorization: Signature <signature_value>`;
- capture the exact raw request body before JSON parsing or re-serialization;
- calculate the signature using Xsolla's current `raw_body + project secret` SHA-1 lowercase-hex construction;
- use a constant-time comparison where supported;
- fail closed on a missing, malformed, or mismatching signature; and
- do not grant, revoke, refund, restore, suspend, or otherwise mutate TycoonX paid value merely because the source IP looks valid.

The Web Shop-specific user-validation surface must continue to follow the authentication and response contract documented for that exact endpoint. This gate must not invent a signature field for a provider request that does not use the standard signed-webhook contract.

A valid signature proves that the callback passed the configured authenticity/integrity check. It does not by itself prove payment success, refund completion, player identity, product eligibility, or entitlement ownership. Those decisions remain subject to the provider event type/state, transaction/account/product mapping, environment checks, idempotency, and the existing TycoonX entitlement ledger.

## 3. Reverse proxies and `X-Forwarded-For`

If the Xsolla endpoint sits behind a CDN, reverse proxy, load balancer, API gateway, or WAF, the application socket may see the intermediary's address rather than Xsolla's address. The implementation must have an explicit trusted-proxy model.

Minimum rules:

- trust `X-Forwarded-For`, `Forwarded`, or another forwarded-client-IP header only when the immediate network peer is an explicitly trusted CK-Labs infrastructure component that is configured to overwrite or sanitize that header;
- never let an arbitrary internet client choose the effective source IP by supplying its own `X-Forwarded-For` value;
- if the origin can be reached directly as well as through the trusted proxy, either block the direct path or apply source validation to the actual socket peer without trusting forwarded headers;
- do not use a naive string-prefix test for CIDR membership;
- normalize the address representation before comparing it with an allowlist so equivalent representations do not create accidental bypasses or false rejects; and
- test the exact production proxy chain, not only a local development server.

Example: if the public endpoint is behind a load balancer and the application blindly trusts the leftmost value of `X-Forwarded-For`, an attacker may submit `X-Forwarded-For: 34.102.38.178` from an unrelated IP. That header alone must never satisfy the Xsolla source check.

Source-IP validation is still secondary to signature verification. A proxy configuration mistake must not cause CK-Labs to disable signature verification as a workaround.

## 4. Preserve the exact signed body through ingress

Xsolla's signature is based on the exact request payload. The ingress chain must not silently transform the payload before the signature verifier sees it.

Before production, verify that the CDN/proxy/WAF/framework path:

- preserves the body bytes used for signature verification;
- does not parse and re-serialize JSON before signature verification;
- does not normalize whitespace, key order, escaping, or character encoding in a way that changes the signed bytes;
- captures the raw body before ordinary JSON middleware consumes it; and
- applies request-size limits that are high enough for legitimate Xsolla webhooks but still bounded against abuse.

If a middleware upgrade changes raw-body behavior and valid Xsolla signatures begin failing, fail closed and reconcile provider transactions. Do not temporarily accept unsigned callbacks to restore availability.

## 5. CSRF exemption must be narrow

Xsolla currently recommends exempting the webhook endpoint from CSRF middleware because server-to-server callbacks do not carry a browser CSRF token.

The exemption must apply only to the dedicated Xsolla server-to-server callback route or the smallest technically necessary route set. Do not disable CSRF protection for the whole TycoonX website, account settings, support forms, checkout-return pages, administration routes, or other browser-driven state-changing endpoints merely to make Xsolla webhooks work.

Removing CSRF middleware does not remove the webhook's own security requirements. Signature verification, source validation where used, schema validation, environment isolation, and idempotency still apply.

## 6. Durable ingest before a success acknowledgement

Xsolla's current webhook guidance recommends quick `204` or `200` acknowledgement after verification and asynchronous business processing. TycoonX must combine that recommendation with crash-safe ingestion.

The safe boundary is:

1. receive the request without modifying the signed body;
2. verify authenticity and the expected environment/project context;
3. validate enough envelope/schema information to identify the event safely;
4. durably record or enqueue the verified event together with its idempotency identity and the minimum provider metadata required for reconciliation;
5. only then return the provider-appropriate successful acknowledgement; and
6. process the heavier entitlement/refund/support side effects asynchronously and idempotently.

Do not return `2xx` merely because the signature matched if the event exists only in process memory and would be permanently lost by an immediate crash.

Conversely, do not keep Xsolla waiting while unrelated gameplay work, analytics, notifications, or support enrichment runs synchronously. A payment webhook listener should have a small, deterministic pre-acknowledgement path.

The standard `user_validation` flow remains different because its response is itself a synchronous purchase-authorization decision. Follow the dedicated validation gate rather than blindly applying an "enqueue and always 204" model to that request.

## 7. Unknown, malformed, and unsupported events

After authenticity checks, parse and validate the event against the webhook model actually configured for the CK-Labs project.

- An unknown `notification_type` must not fall through to a generic "paid" branch.
- Missing product, account, transaction, order, quantity, amount, currency, environment, or other fields required for the applicable mutation must fail closed or enter reconciliation.
- A valid signature does not make malformed business data trustworthy enough to grant value.
- Do not guess a product from price alone.
- Do not guess an account from nickname or email alone.
- Do not map an unfamiliar future Xsolla event to the closest existing event merely because their JSON looks similar.

When a provider schema changes, preserve the raw provider event or a privacy-minimized forensic representation long enough to investigate under the existing retention policy, then update the parser deliberately.

## 8. Logging, secrets, and privacy

Operational logging must be useful without becoming a second payment-data store.

Do not put the Xsolla project secret, full `Authorization` signature value, full payment-token material, full raw webhook payload, or unnecessary player personal data into general application logs, analytics, crash reports, support messages, or public error responses.

Prefer structured audit fields such as:

- provider and environment;
- event type;
- provider transaction/order identifier where needed;
- internal TycoonX account identifier or a suitably pseudonymized reference;
- signature result without the signature value;
- source-check result;
- idempotency result;
- ingest/processing status; and
- timestamp/correlation identifier.

Apply the canonical Privacy Policy, purpose limitation, data minimization, integrity/confidentiality, and the existing payment-record retention rules. Security debugging does not justify indefinite retention of every raw webhook body.

## 9. Sandbox and testing isolation

A technically valid Xsolla signature can exist on a test webhook. Authenticity does not make a sandbox transaction production money.

Preserve the existing environment controls, including the configured Xsolla project/environment and provider test markers such as `order.mode: "sandbox"` or other current markers applicable to the configured webhook model.

Test callbacks, webhook-console tests, local tunnels, staging endpoints, and production callbacks must not share an entitlement mutation path unless the environment is explicitly separated before any paid-value change.

Do not point the live production Xsolla project at a temporary receiver merely to test ingress behavior. The existing refund/chargeback gate's one-webhook-URL and endpoint-change controls remain authoritative.

## 10. Source-list or ingress incidents are not player misconduct

A newly documented Xsolla source IP, stale firewall rule, broken proxy header configuration, WAF update, expired TLS certificate, body-parser regression, secret-rotation mistake, or queue outage is an infrastructure/provider-integration incident until evidence shows otherwise.

Do not classify a player as fraudulent, suspend an account, revoke unrelated value, or deny a mandatory remedy merely because a webhook arrived from an unexpected network path or failed local signature validation during such an incident.

Fail closed for the unverified mutation, alert operators, preserve the relevant correlation evidence, and reconcile the affected transaction from authoritative Xsolla records. Enforcement still requires independent evidence tied to the player/account/transaction.

## 11. Product-specific entitlement invariants

### Diamonds

A webhook passes ingress checks before it can become a Diamond entitlement input. A verified successful purchase grants the provider-confirmed Diamond quantity exactly once. Duplicate callbacks, proxy retries, queue retries, or replayed signed events cannot grant the purchase again.

Purchased Diamonds do not expire merely because time passes. A refund or chargeback correction remains limited to value attributable to the affected transaction under the existing refund/reconciliation controls and mandatory law.

### One-time 30-Day VIP

Passing ingress checks does not start VIP by itself. The one-time non-renewing 30-Day VIP begins only after the applicable verified successful-payment and entitlement rules are satisfied and lasts 30 consecutive days.

A retried or replayed webhook for the same transaction cannot restart, duplicate, or extend the same 30-Day VIP purchase.

### Lifetime VIP

Lifetime VIP remains a limited-time promotional one-time entitlement available only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability.

A correctly signed stale webhook, cached checkout, replayed event, test event, or delayed network delivery does not by itself reopen a closed Lifetime VIP sales window. The transaction must still belong to a valid provider-confirmed purchase under the applicable genuine offer and mandatory law.

A valid Lifetime VIP already purchased during a genuine sales window must not be removed merely because CK-Labs later changes its proxy, firewall, webhook URL, source-IP list, or secret infrastructure.

## 12. Mandatory consumer-rights boundary

This security gate may delay an unverified entitlement mutation while CK-Labs reconciles a payment. It may not be used to waive or evade mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy, accessibility, or other non-waivable rights.

If CK-Labs' own ingress failure causes a paid entitlement not to be delivered, the failure remains a delivery/conformity issue to be corrected under the canonical policy and applicable law. Security controls are not permission to keep payment without providing the purchased digital product or a legally required remedy.

## 13. Minimum regression matrix

Before production go-live and after material proxy/WAF/webhook changes, test at least:

1. valid Xsolla source + valid signature + valid paid event -> durable ingest, one entitlement;
2. allowed source + invalid signature -> `4xx`, no mutation;
3. disallowed source + forged `X-Forwarded-For` containing an allowed Xsolla IP -> rejected/quarantined, no mutation;
4. trusted proxy + correctly sanitized forwarded source matching Xsolla -> signature verification still required;
5. direct-origin request that bypasses the trusted proxy -> cannot spoof forwarded-IP trust;
6. valid signed payload parsed and re-serialized before verification -> regression test proves this path is rejected/not used;
7. exact raw payload verified before JSON middleware -> accepted when otherwise valid;
8. missing/malformed `Authorization` signature header -> no mutation;
9. unknown future `notification_type` with a valid signature -> no paid-value mutation;
10. Xsolla source-list change -> alert/configuration review rather than player-fraud classification;
11. CSRF-free Xsolla route -> works, while unrelated browser state-changing routes remain CSRF-protected;
12. crash immediately after durable enqueue and successful acknowledgement -> event is recovered and applied at most once;
13. crash before durable enqueue -> no successful acknowledgement is emitted;
14. duplicate/replayed signed `order_paid` -> idempotent previous result, no duplicate Diamonds/VIP;
15. `order.mode: "sandbox"` or applicable test marker -> no production entitlement mutation;
16. ingress failure on a paid transaction later confirmed by Xsolla -> provider reconciliation delivers/remedies without accusing the player;
17. 30-Day VIP replay -> original 30-consecutive-day period is not restarted;
18. Lifetime VIP event after sales-window closure -> only a genuinely valid provider-confirmed transaction belonging to the offer is honored; stale/replayed/test traffic does not reopen sale.

## 14. Release evidence

Before treating this gate as passing, retain dated evidence of:

- current official Xsolla webhook source ranges/addresses reviewed against production network rules;
- whether Xsolla Login-specific webhook sources are actually relevant to the CK-Labs project;
- the trusted proxy/CDN/load-balancer chain and how forwarded-client-IP headers are sanitized;
- a test proving a forged direct `X-Forwarded-For` cannot satisfy the source check;
- a test proving the exact raw request body reaches signature verification before JSON re-serialization;
- a test proving the CSRF exemption is limited to the server-to-server Xsolla route;
- a crash/retry test demonstrating durable ingest before success acknowledgement;
- idempotency evidence for duplicate successful-payment and cancellation/refund events;
- sandbox/test isolation evidence; and
- the exact application revision and infrastructure revision tested.

## Release decision

**PASS** only when the production Xsolla ingress preserves raw-body signature verification, has a deliberate source-IP/proxy trust model, scopes CSRF exemptions narrowly, reaches a durable idempotent ingest point before a successful acknowledgement, isolates sandbox traffic, and preserves the TycoonX product/legal invariants above.

**FAIL CLOSED** if the effective client source can be spoofed through untrusted forwarding headers, the body is modified before signature verification, signatures are bypassed because of an allowlisted IP, the entire site is exempted from CSRF protection, a `2xx` can be returned before durable ingest, test traffic can reach production entitlements, or an ingress incident is being used as automatic evidence of player misconduct.