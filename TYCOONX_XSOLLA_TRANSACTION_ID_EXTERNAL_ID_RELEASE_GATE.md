# TycoonX Xsolla Transaction ID & External ID Release Gate

Last reviewed: September 7, 2026

This operational gate applies to purchases made through the official CK-Labs TycoonX webshop using Xsolla. It supplements the public TycoonX Terms of Service, Purchases & Refunds Policy and Privacy Policy, plus the existing Xsolla refund/chargeback and entitlement gates. It does not change mandatory consumer rights or make a browser redirect authoritative for a purchase.

## Why this gate exists

Xsolla's current documentation says that, starting **June 1, 2026**, its transaction ID is passed as an `int64`, with a maximum value of **(2^63)-1 = 9,223,372,036,854,775,807**. Xsolla specifically recommends testing with an ID greater than `2^32`, for example `4,300,000,000`.

This is release-critical for a JavaScript/TypeScript web stack because ordinary JavaScript `Number` values cannot exactly represent every integer in the Xsolla `int64` range. An identifier that is rounded, truncated, converted through a 32-bit type, serialized inconsistently, or reformatted can point at the wrong transaction or fail to match the later webhook/refund record.

Xsolla separately defines `settings.external_id` as the transaction/order ID in the game and currently requires a new unique external ID for each payment. Its current payment FAQ expressly says an external ID must be unique across both **sandbox and live** payments. If a sandbox payment already used `external_id = "1"`, the same external ID cannot later be reused for a real payment.

The safe TycoonX model therefore treats Xsolla's transaction ID and CK-Labs' external ID as separate, exact, immutable identifiers with different authorities.

## P0 release requirements

### 1. Preserve the Xsolla transaction ID exactly

- Treat the Xsolla transaction ID as an **opaque exact identifier**, not as a value on which TycoonX performs arithmetic.
- At JavaScript/TypeScript boundaries, prefer a decimal string representation unless the entire parsing, transport, storage and comparison path is proven to preserve 64-bit integers exactly.
- Do not pass a transaction ID through JavaScript `Number`, a 32-bit integer, floating-point analytics field, spreadsheet-style scientific notation, or another representation that can silently alter digits.
- If a JSON library parses Xsolla `int64` values into an unsafe numeric type before application code sees them, configure an exact-integer/string strategy or use a parser/runtime that preserves the value.
- Validate the provider transaction ID before use. For a decimal-string implementation, accept only the expected unsigned decimal representation and reject malformed, signed, fractional, exponential-notation or out-of-range values rather than normalizing them into a different ID.
- Preserve the exact provider ID in the durable transaction mapping, refund/chargeback reconciliation record, support tooling and audit log.
- Never fabricate a missing provider transaction ID merely to satisfy an application schema.

### 2. Test beyond both the 32-bit and JavaScript-safe-integer boundaries

Before production release, test the Xsolla integration with identifier values that expose common truncation bugs:

- Xsolla's documented example: `4,300,000,000`, which is greater than `2^32`;
- `9,007,199,254,740,993`, which is one above JavaScript's largest exactly representable safe integer and must survive as the exact decimal identifier rather than being rounded; and
- the documented Xsolla `int64` upper bound `9,223,372,036,854,775,807`, where the applicable test surface permits it.

The test must cover every path that handles a transaction identity: token/order correlation, webhook ingestion, durable persistence, lookup, support display, refund preparation, chargeback evidence, logs and any return/redirect parser. A test that succeeds only at checkout but fails during refund reconciliation is not sufficient.

### 3. Browser redirects are navigation state, never entitlement authority

Xsolla currently documents return-URL parameters including `user_id`, `foreigninvoice`, `invoice_id` and `status`. Current redirect statuses include `done`, `invoice`, `delivering`, `troubled` and `full_change`.

- Never grant Diamonds, start 30-Day VIP, activate Lifetime VIP, mark a refund complete or close a chargeback solely from a return URL or redirect status.
- Even `status=done` is a user-facing navigation signal, not a substitute for the configured authenticated server-side Xsolla payment confirmation.
- A redirect can be replayed, bookmarked, copied, truncated, altered, logged by intermediaries or reached after the underlying provider state changes.
- If the user closes the payment UI before completing payment, Xsolla can redirect with an empty `invoice_id`. An empty ID must remain an incomplete/unknown checkout result. Do not generate a fake transaction ID, attach the checkout to the most recent payment, or grant an entitlement from that redirect.
- `delivering` is not completion; `invoice` is not payment; `troubled` is not proof of player fraud; and `full_change` is not permission to bypass normal server-side confirmation.
- The browser return page may tell the user that TycoonX is checking the payment. The backend remains authoritative for delivery.

### 4. Keep `external_id` globally unique across sandbox and live

Xsolla's current payment configuration documentation says `settings.external_id` identifies the game's transaction/order and must be unique for each user payment. It also says uniqueness applies across test and live environments.

TycoonX must therefore:

- generate a fresh immutable external ID for every intended Xsolla payment;
- never reset a short numeric sequence when moving from sandbox to production;
- never reuse an external ID after a canceled, failed, expired, refunded or abandoned attempt simply because no paid entitlement was ultimately retained;
- never reuse another CK-Labs project's external ID namespace where the same Xsolla configuration can cause a collision;
- use a collision-resistant scheme such as an environment-aware UUID/order identifier while still honoring Xsolla's cross-environment uniqueness rule;
- persist the external ID before launching checkout so a retry or process restart does not accidentally mint multiple competing order identities for the same intended checkout; and
- keep the external ID immutable after it has been sent to Xsolla.

Where Xsolla external-ID validation is enabled, a duplicate external-ID error is an **integration/idempotency signal**, not a reason to silently generate a second payment for an order that may already exist. Reconcile the existing TycoonX order and Xsolla state first.

### 5. Never confuse Xsolla transaction ID, TycoonX external ID and player ID

These identifiers serve different purposes:

- **Xsolla transaction ID:** provider-side payment identity assigned by Xsolla;
- **TycoonX `external_id`:** CK-Labs order/payment correlation identity supplied to Xsolla; and
- **TycoonX user ID:** the account to which the verified purchase belongs.

Do not substitute one for another. In particular:

- a valid-looking Xsolla transaction ID does not prove which TycoonX account owns it;
- an external ID does not by itself prove that payment completed;
- a player ID does not identify a unique payment; and
- a user-supplied screenshot, redirect URL, invoice number or external ID is not sufficient authority to grant or revoke paid value.

A completed transaction should reconcile all available authoritative fields against the expected CK-Labs order before fulfillment.

### 6. Exactly-once product fulfillment

Identifier correctness must preserve the existing product distinctions:

- **Diamonds:** grant only the exact verified purchased bundle/quantity once. A duplicate webhook, redirect replay, ID-format retry or support reconciliation cannot create a second grant.
- **One-time 30-Day VIP:** start one non-renewing period of 30 consecutive days once. Re-reading the same Xsolla transaction under a differently formatted ID cannot restart or extend that period.
- **Lifetime VIP:** grant the verified purchase once and only for a transaction legitimately completed under the applicable genuine sales-window rules. Lifetime VIP remains a limited-time promotional product that may be withdrawn from sale, may never return, and creates no expectation of continuous availability.

An identifier parsing bug is a CK-Labs integration incident. It is not automatic evidence that a player hacked TycoonX or abused an entitlement.

### 7. Refund, reversal and chargeback safety

A corrupted identifier is especially dangerous because Xsolla's refund APIs operate on provider transaction IDs.

- Never submit a full or partial refund until the exact provider transaction ID has been resolved from CK-Labs' authoritative order mapping and cross-checked against the expected account, product, amount, currency and environment.
- Never copy a transaction ID from a rounded analytics value, spreadsheet export, browser display or manually retyped support note into an automated refund path.
- If two records become ambiguous because of a historical truncation/precision bug, stop automated entitlement correction and reconcile the provider records. Do not guess which player or purchase to debit.
- A mismatch created by CK-Labs' own ID parsing is not proof of chargeback abuse, fraud, account compromise, regional-price abuse or hacking.
- A refund or chargeback can correct only the entitlement attributable to the authoritative affected transaction. Unrelated legitimate purchases remain protected.
- The existing Xsolla refund/chargeback gate continues to control request-versus-settlement handling, partial refunds, evidence, privacy and mandatory consumer-rights safeguards.

### 8. Sandbox isolation remains mandatory

Cross-environment uniqueness of `external_id` does **not** merge sandbox and production entitlements.

- Sandbox/test transactions must never grant production Diamonds, 30-Day VIP, Lifetime VIP, refund credits or paid-purchase history.
- The production entitlement path must verify the expected environment/provider state in addition to the identifiers.
- Support and analytics should clearly label test records without altering the exact underlying provider transaction ID.
- A collision discovered because an external ID was already used in sandbox is a configuration issue. Do not punish the player and do not bypass Xsolla's uniqueness control by weakening validation in production.

### 9. Price, tax, currency and regional-price integrity

Transaction IDs are identities, not prices.

- Never infer amount, currency, VAT, tax treatment, Diamond quantity, VIP duration or regional eligibility from the digits of a transaction/external ID.
- Reconcile the authoritative completed amount/currency and catalog item separately.
- A provider-created ID-format change has no effect on the rule that the final total price shown before confirmation governs a completed transaction, subject to mandatory law and lawful correction of genuine obvious configuration errors.
- Future prices, Diamond bundle contents, VIP prices, currencies, regional prices and genuine promotions may change prospectively. Completed purchases are not retroactively repriced merely because identifiers or backend schemas changed.

### 10. Privacy and support handling

Return URLs can be copied into browser history, proxy logs, analytics or support conversations.

- Do not add payment secrets, access tokens, full payment credentials or unnecessary personal data to the return URL.
- Do not expose internal fraud scores or backend entitlement decisions in redirect parameters.
- Treat transaction IDs and external IDs as transaction metadata. Share them only with staff/providers who need them for payment, refund, accounting, fraud, dispute or support purposes.
- When a player supplies an ID, use it as a lookup lead. Do not disclose another account's personal data merely because the supplied identifier exists.

The TycoonX Privacy Policy and mandatory data-protection rules continue to govern retention, access, disclosure and security.

## P1 founder-protective failure handling

### If historical code already stored unsafe numeric IDs

Do not mass-correct by arithmetic or by choosing the nearest-looking transaction. Instead:

1. identify every component that may have coerced an Xsolla ID through a 32-bit or unsafe floating-point representation;
2. compare the affected TycoonX orders with authoritative Xsolla records using independent order/account/payment evidence;
3. quarantine ambiguous automated refund or entitlement actions;
4. repair only transaction mappings that can be supported by reliable evidence;
5. preserve an audit trail of the original corrupted value and the verified correction; and
6. do not convert CK-Labs' technical incident into a fraud accusation against affected players without separate reliable evidence.

### If a redirect and server record disagree

The authenticated server/provider state wins for entitlement and refund processing. Preserve the redirect as troubleshooting evidence only. Show the player a neutral processing/support state rather than claiming payment success, fraud or cancellation from the URL alone.

### If an external ID collision occurs

Do not create another charge blindly. Determine whether the existing external ID corresponds to a sandbox attempt, abandoned checkout, failed payment, completed purchase or another valid order. Create a new external ID only for a genuinely new payment attempt after the existing state is understood and the product flow permits another purchase.

## Mandatory German/EU rights

Nothing in this gate waives or narrows mandatory consumer rights. If an identifier/integration failure causes non-delivery, duplicate charging, incorrect entitlement removal, incorrect price handling or inability to exercise a valid refund/withdrawal/conformity remedy, CK-Labs must provide the remedy required by applicable law. Mandatory rights concerning withdrawal, conformity, updates, cure, price reduction, termination, refunds, liability, information and unfair commercial practices remain intact.

## Release evidence

Before considering this gate satisfied, CK-Labs should retain evidence that:

- Xsolla provider transaction IDs survive the full TycoonX stack exactly as `int64`-range identifiers;
- tests include values above `2^32` and above JavaScript's safe-integer boundary;
- redirect parsing does not grant or revoke entitlements;
- an empty redirect `invoice_id` cannot become a fabricated transaction;
- external IDs are newly generated and unique across sandbox and live payments;
- transaction ID, external ID and user ID remain separate fields;
- duplicate/replayed events remain idempotent for Diamonds, 30-Day VIP and Lifetime VIP;
- refund tooling resolves the exact transaction from authoritative order mappings rather than a rounded/manual identifier; and
- sandbox transactions cannot reach production entitlements.

## Current reference points

- Xsolla, **Configure redirects**: documents `user_id`, `foreigninvoice`, `invoice_id`, redirect statuses, empty `invoice_id` on an unfinished checkout, and the June 1, 2026 move to `int64` transaction IDs.
- Xsolla, **Payment configuration FAQ**: documents `external_id`, cross-sandbox/live uniqueness, a fresh external ID per payment, and the recommendation to test transaction IDs above `2^32` such as `4,300,000,000`.
- Xsolla, **Pay Station token API**: documents `settings.external_id` as a string transaction/order identity that must be unique for each user payment.
- Xsolla webhook/API schemas: currently type provider `transaction.id` / transaction path IDs as `integer(int64)`.

Provider behavior can change. Re-check the current Xsolla documentation before materially changing the webshop integration.
