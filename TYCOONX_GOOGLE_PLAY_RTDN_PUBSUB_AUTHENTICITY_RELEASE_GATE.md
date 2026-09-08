# TycoonX Google Play RTDN & Pub/Sub Authenticity Release Gate

Last reviewed: September 8, 2026

This gate governs how CK-Labs receives and processes Google Play Real-time Developer Notifications (RTDN) for TycoonX. It complements the existing Google Play payment-transition, pending-purchase, refund, chargeback, acknowledgement/consumption, account-binding, and catalog gates.

TycoonX is in full release. RTDN is an operational synchronization mechanism. It is not a replacement for the TycoonX Purchases & Refunds Policy, Google Play's current rules, or mandatory German/EU consumer rights.

## Current Google baseline

As of September 8, 2026, Google's current documentation says:

- Google Play publishes RTDN through Google Cloud Pub/Sub.
- RTDN can be consumed through a push subscription that sends HTTPS requests to a backend endpoint, or through a pull subscription using Cloud Pub/Sub client libraries.
- Google explicitly requires the backend to call the Google Play Developer API after receiving RTDN to obtain the complete purchase status before updating backend state. RTDN says that purchase state changed; it is not the complete purchase record.
- The Pub/Sub envelope contains a base64-encoded `message.data` field and a `messageId`. Google recommends checking `messageId` uniqueness to avoid redundant processing and unnecessary API quota use.
- `DeveloperNotification` includes the TycoonX app package identity through `packageName`, the provider event time through `eventTimeMillis`, and exactly one applicable notification body such as `oneTimeProductNotification`, `voidedPurchaseNotification`, `pendingRefundReviewNotification`, `subscriptionNotification`, or `testNotification` under the current schema.
- Google Play's setup currently grants Pub/Sub Publisher permission to `google-play-developer-notifications@system.gserviceaccount.com` for the configured topic.
- For an authenticated Pub/Sub push subscription, Pub/Sub can send a Google-signed OpenID Connect JWT in the HTTP `Authorization: Bearer ...` header. Google's current validation guidance requires signature/integrity validation and matching the configured audience and service-account email; `email_verified` must also be true. The documented issuer is Google Accounts.
- If no custom OIDC audience is configured, Pub/Sub uses the push endpoint URL as the audience.
- A successful push HTTP response acknowledges the Pub/Sub message. For pull delivery, the subscriber acknowledges the pulled message through Pub/Sub.

These transport facts do not change TycoonX product semantics. Purchased Diamonds, one-time non-renewing 30-Day VIP, and Lifetime VIP remain governed by the canonical TycoonX legal and entitlement rules.

## P0: RTDN is a signal, never standalone payment authority

Never grant, revoke, refund, restore, suspend, terminate, or otherwise change paid TycoonX value solely because an RTDN JSON body says that an event occurred.

After an authentic RTDN is durably accepted:

1. identify the expected TycoonX Google Play application from trusted server configuration;
2. validate the notification structure and expected `packageName`;
3. resolve the relevant provider identifier such as the Google purchase token or order/review identity;
4. call the applicable Google Play Developer API to obtain the authoritative current purchase/refund/subscription state where Google's current flow requires it;
5. compare that provider state with the durable TycoonX payment and entitlement ledger; and
6. apply only the still-unapplied transaction-specific entitlement transition, idempotently.

A valid Pub/Sub transport message proves only that an authenticated messaging path delivered a message. It does not itself prove that money settled, a refund finalized, a chargeback was decided, a VIP period should restart, or Lifetime VIP is currently for sale.

## Public push endpoints must authenticate Pub/Sub, not merely accept Google-looking JSON

Where CK-Labs uses a public HTTPS Pub/Sub push endpoint for RTDN, production must use authenticated Pub/Sub push with a dedicated least-privilege service account and explicit audience, or another independently reviewed ingress design that provides equivalent authenticated origin protection before the message can reach payment logic.

For the normal authenticated-push design, validate the bearer token before trusting or durably queueing the RTDN as authentic:

- verify the Google JWT cryptographic signature with a maintained Google authentication library or equivalent verified Google key handling;
- require the expected audience configured for the production push subscription;
- require the expected dedicated Pub/Sub push-auth service-account email;
- require `email_verified` to be true;
- require an accepted Google issuer (`accounts.google.com` or `https://accounts.google.com` according to the maintained verification library/provider contract);
- enforce token expiry and other standard JWT validity checks;
- do not disable these checks because token verification, certificate retrieval, clock skew, CDN routing, or deployment configuration temporarily fails; and
- keep production and test/staging audiences, service-account identities, endpoints, topics, and ledgers separated.

A request is not authentic merely because:

- its body contains a plausible `packageName`, purchase token, Google order ID, `messageId`, or `eventTimeMillis`;
- its source IP looks like Google Cloud;
- it carries a user-supplied secret in a query string without validated Pub/Sub identity;
- it contains a self-asserted service-account email;
- its JWT can be base64-decoded; or
- it reaches the same endpoint normally used by Pub/Sub.

Do not let a proxy, CDN, WAF, API gateway, or framework strip the `Authorization` header or replace verified identity with an untrusted forwarded header. If the edge validates the Pub/Sub JWT on behalf of the application, the trust boundary between edge and application must itself be authenticated and direct-origin bypass must be blocked.

## Pull subscriptions use Google IAM, not an invented HTTP bypass

If CK-Labs uses Pub/Sub pull delivery instead of push:

- the backend worker must authenticate to Google Cloud using a server-side workload/service-account identity with least-privilege Pub/Sub Subscriber access;
- mobile clients must never receive the subscriber credential or be allowed to pull RTDN directly;
- IAM authentication of the pull channel still does not make the RTDN body complete payment authority; and
- the worker must still verify package/product/provider identity and call the Google Play Developer API for complete purchase state before entitlement mutation.

Do not create a separate unauthenticated HTTP endpoint merely to emulate pull delivery.

## Topic and app isolation

Google Play requires RTDN to be configured for each Android app separately. TycoonX must therefore enforce the expected production application identity even if CK-Labs shares a Google Cloud project or Pub/Sub infrastructure with another application.

At minimum:

- compare RTDN `packageName` with the expected TycoonX production package from trusted server configuration;
- do not route an event into TycoonX merely because it arrived on a topic also used by another CK-Labs app;
- keep test/staging app events from mutating the production TycoonX payment ledger;
- bind any topic/subscription routing table to explicit app/environment identities; and
- reject or quarantine an unexpected package rather than guessing the closest known app.

A correctly authenticated Pub/Sub message for a different CK-Labs app is not a TycoonX purchase.

## Durable ingest before acknowledgement

A successful Pub/Sub push response acknowledges the message. Therefore, after transport authentication and basic structure/app checks, do not return success until CK-Labs has durably recorded the event or durably enqueued it with enough identity to recover processing after a crash.

The durable record should preserve, as appropriate:

- Pub/Sub `messageId`;
- subscription/topic or trusted routing identity;
- environment and expected app identity;
- RTDN `packageName` and `eventTimeMillis`;
- notification family/type/version;
- relevant purchase token/order/review identifier;
- ingest timestamp;
- processing/reconciliation state; and
- a privacy-safe correlation identifier.

Heavy Google Developer API lookup and entitlement reconciliation may happen after durable ingest. If durable ingest fails, do not acknowledge merely to silence retries. A provider retry must not cause duplicate Diamonds, a second VIP period, or a second refund correction.

Do not intentionally force endless retry loops for permanently malformed or unsupported input. Authenticate, classify and quarantine such input with safe diagnostics according to an explicit failure policy.

## Duplicate delivery and message identity

Google documents `messageId` as unique for a Pub/Sub notification and recommends checking it for duplicate processing. Use it to suppress repeated delivery/API work, but do not make it the sole entitlement idempotency key.

Entitlement idempotency must remain anchored to the authoritative Google transaction/purchase token and the durable TycoonX entitlement/correction ledger. The same underlying Google purchase state can be discovered through RTDN, the Android client, foreground reconciliation, Voided Purchases API, support tooling, process recovery, or another legitimate server path.

Conversely, two different `messageId` values are not proof that two separate paid entitlements exist.

Example: one verified Diamond purchase is seen first by the Android client and later through RTDN. It grants purchased Diamonds once. A new Pub/Sub message about a later refund is a state-change signal for that same provider transaction, not a second purchase and not permission to deduct more than the value attributable to the refunded transaction.

## Delayed, retried and out-of-order events

Do not make final entitlement state depend on RTDN receipt order alone.

Use authoritative Google purchase/refund state, provider event time where relevant, and the durable TycoonX ledger to determine whether a transition is new, already applied, superseded, contradictory, or requires reconciliation.

A delayed `ONE_TIME_PRODUCT_PURCHASED` message must not resurrect value after authoritative Google state shows that the same purchase was later voided. A delayed void/refund signal must not remove the same transaction twice after its correction has already been applied through another provider path.

If current provider state is temporarily unavailable, leave the transaction pending reconciliation rather than choosing whichever interpretation grants or removes the largest amount of player value.

## Test notifications and environment safety

Google Play Console can send `testNotification` messages to verify RTDN configuration. A test notification proves only that the notification path is configured and reachable.

A `testNotification` must never:

- grant Diamonds;
- start, extend, restart or cancel one-time 30-Day VIP;
- grant or revoke Lifetime VIP;
- create a real payment/refund/chargeback record;
- mark a player as fraudulent or abusive; or
- reopen a closed Lifetime VIP sales window.

Test/staging Pub/Sub configuration must not share a production entitlement-writing path without explicit environment isolation.

## Unknown versions, notification families and enum values

Fail closed on an unsupported future RTDN version, notification family, or enum value.

Do not map an unknown value to the nearest existing purchase/refund state, do not guess a product from price or nickname, and do not treat an unknown future event as paid merely because it contains a purchase-looking token.

Where enough independently verified provider identity exists, use the Google Play Developer API to reconcile current state. Otherwise quarantine the event for safe review. Provider evolution is not player fraud.

## Account attribution and compromise safety

An RTDN purchase token is provider transaction evidence, not permission to reassign a transaction to whichever TycoonX account triggered the latest request.

- preserve established purchase-token-to-account bindings;
- use verified `obfuscatedAccountId`/`obfuscatedProfileId` and other authoritative account-binding evidence where available under the dedicated Google account-binding rules;
- do not map by nickname, email similarity, IP address, device model, country, support message, or a caller-supplied order ID alone;
- quarantine conflicts instead of silently moving paid value between accounts; and
- treat missing or conflicting attribution as a reconciliation problem, not automatic proof of account compromise, hacking, fraud, regional-price abuse, chargeback abuse, or entitlement abuse.

A forged or unauthenticated RTDN must not be able to select an attacker-controlled purchase token and cause TycoonX to query or mutate an unrelated player's transaction.

## Product-specific invariants

### Purchased Diamonds

Purchased Diamonds are granted only from a verified completed Google transaction and exactly once. They do not expire solely because time passes.

RTDN retries, duplicate message IDs, a second discovery channel, stale purchase signals, test notifications, or an unauthenticated push cannot grant a second copy. Refund/void reconciliation may correct only the amount attributable to the affected verified transaction and must respect the existing cumulative correction limits and mandatory rights.

### One-time 30-Day VIP

30-Day VIP remains one non-renewing entitlement lasting 30 consecutive days. RTDN delivery does not turn it into a subscription.

Rediscovering the same valid purchase cannot restart the clock. A refund/void event for that transaction is reconciled under the canonical rules without touching unrelated paid periods.

### Lifetime VIP

Lifetime VIP remains a limited-time promotional one-time entitlement available only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability.

RTDN can help restore or reconcile a genuine historical Lifetime VIP transaction after authoritative Google verification. It cannot create a new Lifetime VIP transaction after the sale closes, reopen an expired sales window, revive an old catalog route, or manufacture the historical price for a new purchase.

## Refunds, chargebacks and enforcement

RTDN may signal a voided purchase or a pending chargeback review, but those events must follow the dedicated Google refund and chargeback gates.

Do not automatically suspend or terminate an account merely because:

- a refund/void RTDN arrived;
- a chargeback review is pending;
- a message was duplicated or delayed;
- Pub/Sub delivery failed;
- JWT verification temporarily failed because of a CK-Labs/provider infrastructure incident; or
- Google Developer API reconciliation is temporarily unavailable.

Fraud, exploit, chargeback-abuse, or entitlement-abuse enforcement requires the evidence and proportional process already defined by the canonical TycoonX rules. Correct the specific affected entitlement where provider state and law support it, rather than using RTDN as a shortcut to punitive account-wide action.

## Outages, security incidents and old clients

A Cloud Pub/Sub outage, Google Play outage, Google Developer API outage, CK-Labs backend failure, lost subscription configuration, IAM error, expired credential, JWT verification outage, or delayed RTDN is an operational/security incident, not automatic player misconduct.

TycoonX must remain recoverable from authoritative Google APIs and the durable CK-Labs payment ledger. RTDN loss must not force players to reinstall or reopen the app before CK-Labs can reconcile server-side paid state.

Old/unsupported clients cannot bypass server-side verification. A client that does not understand a new RTDN-driven provider state does not get to choose the server entitlement state.

## Privacy and secrets

Do not log bearer JWTs, service-account private keys, OAuth access tokens, full raw Pub/Sub bodies, or unnecessary personal/account data into general application logs, analytics, support tickets, or crash reports.

Prefer structured payment-security telemetry containing only what is necessary, such as environment, message ID, notification family, pseudonymous internal account reference, provider transaction reference where needed, authentication result, reconciliation result and timestamps.

Pub/Sub push-auth service-account credentials and Google Play Developer API credentials remain server-side. The mobile app never needs them.

## Mandatory German/EU rights

Transport authentication and RTDN reconciliation are implementation controls. They do not waive or narrow mandatory rights concerning pre-contract information, total price, withdrawal/early-performance consent where applicable, digital-product conformity and updates, cure, price reduction, termination, refunds, liability, privacy, or other non-waivable consumer protections.

If CK-Labs' RTDN/Pub/Sub outage or security failure prevents correct delivery of paid digital content or causes an incorrect entitlement state, the player retains any mandatory remedy applicable under German/EU law. A provider or infrastructure failure cannot be converted into a clause saying that no remedy exists.

## Minimum regression matrix

Before a production change to RTDN delivery, test at least:

1. valid authenticated push, correct audience/service-account/package: durable ingest then reconciliation;
2. missing bearer token on public push endpoint: no payment mutation;
3. invalid JWT signature: no durable authentic-event status and no payment mutation;
4. valid Google JWT with wrong audience: rejected/quarantined;
5. valid Google JWT with wrong service-account email: rejected/quarantined;
6. valid Pub/Sub delivery for another CK-Labs package: cannot mutate TycoonX;
7. staging/test event reaches production endpoint: cannot mutate production entitlements;
8. `testNotification`: route health only, zero paid-value mutation;
9. same `messageId` delivered twice: one ingest/process path without duplicate entitlement work;
10. different RTDN messages refer to the same purchase: transaction-level idempotency prevents duplicate value;
11. client purchase result plus RTDN for the same Diamond transaction: one Diamond grant;
12. delayed purchase RTDN after authoritative refund: refunded state is not resurrected;
13. delayed void RTDN after correction already occurred through another path: no second clawback;
14. unknown notification version/type: fail closed and reconcile, never guess;
15. Google Developer API temporarily unavailable: no invented paid/refund state and no fraud label;
16. durable queue/storage fails before push acknowledgement: do not falsely acknowledge and lose the event;
17. process crashes after durable ingest but before entitlement reconciliation: recover from durable event without duplicate grant;
18. one-time 30-Day VIP RTDN replay: original clock is not restarted;
19. Lifetime VIP historical restore: valid old purchase can be reconciled but sale remains closed unless a genuine window is open;
20. refund/chargeback RTDN: only affected transaction enters its dedicated lawful reconciliation flow;
21. account-binding conflict: no automatic reassignment or cross-account grant;
22. Pub/Sub/JWT infrastructure outage: operational incident, not player fraud or account sanction; and
23. mandatory consumer remedy remains available even if the automated RTDN path fails.

## Official source checkpoints

Re-check before material implementation changes:

- Google Play RTDN setup: https://developer.android.com/google/play/billing/getting-ready
- Google Play RTDN reference: https://developer.android.com/google/play/billing/rtdn-reference
- Google Play backend integration: https://developer.android.com/google/play/billing/backend
- Google Cloud authenticated push subscriptions: https://cloud.google.com/pubsub/docs/authenticate-push-subscriptions
- Google Cloud Pub/Sub authentication/IAM documentation.

Run the dedicated verifier after changing this gate or related RTDN transport logic:

```bash
node scripts/verify-tycoonx-google-play-rtdn-pubsub-authenticity.mjs
```
