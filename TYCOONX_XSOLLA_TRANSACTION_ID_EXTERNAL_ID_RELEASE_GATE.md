# TycoonX Xsolla Transaction ID & External ID Release Gate

Last reviewed: September 9, 2026

This operational gate applies to purchases made through the official CK-Labs TycoonX webshop using Xsolla. It supplements the public TycoonX Terms of Service, Purchases & Refunds Policy and Privacy Policy, plus the existing Xsolla refund/chargeback and entitlement gates. It does not change mandatory consumer rights or make a browser redirect or Pay Station access token authoritative for a purchase.

## Why this gate exists

Xsolla's current documentation says that, starting **June 1, 2026**, its transaction ID is passed as an `int64`, with a maximum value of **(2^63)-1 = 9,223,372,036,854,775,807**. Xsolla specifically recommends testing with an ID greater than `2^32`, for example `4,300,000,000`.

This is release-critical for a JavaScript/TypeScript web stack because ordinary JavaScript `Number` values cannot exactly represent every integer in the Xsolla `int64` range. An identifier that is rounded, truncated, converted through a 32-bit type, serialized inconsistently, or reformatted can point at the wrong transaction or fail to match the later webhook/refund record.

Xsolla separately defines `settings.external_id` as the transaction/order ID in the game and currently requires a new unique external ID for each payment. Its current payment FAQ expressly says an external ID must be unique across both **sandbox and live** payments. If a sandbox payment already used `external_id = "1"`, the same external ID cannot later be reused for a real payment.

Xsolla's current Pay Station API documentation also says that its payment token has a **24-hour lifetime by default**, that a different company-wide lifetime can be configured through Xsolla, and that Xsolla provides an idempotent **Invalidate token** endpoint which expires all sessions using that token. A checkout token is therefore a temporary bearer capability for opening payment UI, not proof that money was paid or that a TycoonX entitlement exists.

The safe TycoonX model therefore treats Xsolla's transaction ID, CK-Labs' external ID and the temporary Pay Station token as separate values with different authorities and lifecycles.

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
- `9,007,199,254,740,993`, which is above JavaScript's largest safe integer and is not exactly representable as a `Number`; and
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

### 4A. Treat Pay Station access tokens as temporary checkout capabilities

As of September 9, 2026, Xsolla's current Pay Station API says a payment token has a **24-hour lifetime by default** and provides an idempotent `POST /projects/{project_id}/token/{token}/expire` operation to invalidate a token. Xsolla describes invalidation as preventing the token from opening the payment UI and expiring other sessions opened with the same token.

TycoonX must therefore treat the token as temporary checkout authorization only:

- **Token issuance is not payment.** Creating, displaying, opening or possessing a Pay Station token must never grant Diamonds, start 30-Day VIP, activate Lifetime VIP, record completed revenue, mark a refund, or create a chargeback.
- The token is not a substitute for Xsolla's authenticated completed-transaction evidence. If webhook delivery is delayed or ambiguous, reconcile against Xsolla's authoritative transaction/report state rather than trusting the token, return URL or browser screen.
- A token must be bound to the expected CK-Labs order, external ID, internal account, environment and intended product context. A later login, account switch, browser restore or device change must not silently reassign the purchase to whichever TycoonX account happens to be active.
- Do not rely on Xsolla's default 24-hour expiry as the only control for a shorter TycoonX sale, corrected catalog entry, security incident or selected promotional window. Use a token lifetime compatible with the commercial flow where Xsolla configuration permits it, stop issuing new tokens immediately when an offer closes, and explicitly invalidate still-unpaid tokens when continuing use would bypass the intended closure or create a security risk.
- Token invalidation is a checkout control, **not a refund or revocation mechanism**. Invalidating a token after Xsolla has already authoritatively completed the matching payment must not erase or revoke the legitimate completed transaction or its entitlement.
- The invalidate-token operation is idempotent. Repeating an invalidation call must not create duplicate refunds, entitlement removals, fraud events or support actions.

#### Lifetime VIP stale-token rule

Lifetime VIP is a limited-time promotional offering available only during selected genuine sales windows, may be withdrawn from sale, may never return, and creates no expectation of continuous availability.

- A Pay Station token, checkout URL, QR code, screenshot, cached browser tab or unfinished session created while a Lifetime VIP window was open does **not by itself reserve Lifetime VIP, reserve the old price or keep the sales window open**.
- When a Lifetime VIP window closes, TycoonX must stop issuing new Lifetime VIP tokens and should invalidate still-unpaid Lifetime VIP tokens that could otherwise remain usable after the window. The normal 24-hour token lifetime is not an acceptable substitute when it extends beyond the selected campaign boundary.
- A stale or replayed token after closure cannot create a new Lifetime VIP sale, and support must not manually recreate a sale merely because a player can show an old token URL or checkout screenshot.
- This closure rule does not cancel a purchase that was already validly and authoritatively completed under Xsolla and the applicable sales-window rules. If provider confirmation arrives late because of an outage or webhook delay, reconcile the actual transaction chronology and honor a legitimate completed purchase exactly once where required.
- Token invalidation, campaign closure, provider migration or service recovery can never reopen Lifetime VIP for unrelated users or create an expectation that another Lifetime VIP sales window will occur.

#### 30-Day VIP and Diamonds

- For one-time 30-Day VIP, token creation or checkout opening does not start the 30-day clock. A valid completed purchase creates one non-renewing entitlement of 30 consecutive days from activation or availability under the canonical TycoonX rule.
- For Diamonds, token creation grants zero Diamonds. Grant the verified purchased bundle exactly once only after authoritative successful payment evidence.
- If the same token/session is retried or opened concurrently, transaction/external-ID idempotency must still prevent a second economic mutation.

#### Price, promotion, regional price, tax and catalog changes

- A stale token is not permission to bypass a corrected catalog/configuration error, a closed promotion, a regional-availability restriction, a future price change, an updated currency/tax/FX configuration, an unsupported old client, or a security emergency.
- Conversely, a purchase that Xsolla has already validly completed is not retroactively repriced merely because the catalog, FX rate, tax handling, bundle or promotion later changed. Preserve the actual provider-confirmed amount, currency, item and applicable transaction evidence.
- A later price decrease does not automatically create a price-match/refund/credit right and a later price increase does not create an extra charge on an already completed one-time purchase, except where mandatory law requires otherwise.
- If checkout remains open across a material price or catalog change and the provider cannot guarantee accurate final pre-confirmation information, require a fresh checkout rather than silently charging stale commercial terms.

#### Security, privacy and incident response

- Treat a live Pay Station token as sensitive bearer-style checkout metadata. Do not deliberately place full tokens in analytics events, crash logs, support notes, public URLs controlled by CK-Labs, screenshots, chat messages or other storage that does not need the token to operate the payment flow.
- If a token may have leaked or an unpaid checkout is associated with a credible account-compromise/security incident, invalidate the affected unpaid token where appropriate and require a fresh authenticated checkout. Do not confiscate unrelated legitimate paid value merely because a checkout token was exposed.
- A token screenshot or copied checkout URL is a support lead, not transaction proof and not sufficient evidence of entitlement ownership, fraud, account compromise or payment completion.
- Sandbox Pay Station tokens must remain sandbox-only. Copying a sandbox token, URL or screenshot into production must never create production Diamonds, 30-Day VIP, Lifetime VIP or production revenue.
- During replacement or discontinuation of Xsolla or another payment/infrastructure provider, retire or invalidate unused tokens where practical while preserving the records needed to restore and reconcile legitimate completed purchases.

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

### If a Pay Station token outlives an offer or security decision

Do not wait passively for the default token lifetime when continued checkout would violate an intentional TycoonX commercial or security boundary. Stop issuing the affected checkout immediately, invalidate still-unpaid tokens where appropriate, and require a fresh token/order if the product later becomes lawfully available again.

For Lifetime VIP, a later new campaign is a new genuine sales window. It must issue fresh checkout context under that campaign's then-current price, country/channel availability, tax/FX configuration and promotion terms. Never revive an old campaign token.

If a payment appears to have completed around the same time as invalidation or campaign closure, do not decide entitlement from local timestamps alone. Reconcile Xsolla's authoritative transaction state and chronology, apply exactly-once fulfillment, and preserve mandatory consumer rights.

## Mandatory German/EU rights

Nothing in this gate waives or narrows mandatory consumer rights. If an identifier/integration failure, stale checkout, token invalidation error or provider delay causes non-delivery, duplicate charging, incorrect entitlement removal, incorrect price handling or inability to exercise a valid refund/withdrawal/conformity remedy, CK-Labs must provide the remedy required by applicable law. Mandatory rights concerning withdrawal, conformity, updates, cure, price reduction, termination, refunds, liability, information and unfair commercial practices remain intact.

## Regression scenarios

At minimum, verify these token-lifecycle cases in addition to the existing identifier tests:

1. A Lifetime VIP token is created ten minutes before a genuine sales window closes but remains unpaid at closure. The window closes, token issuance stops, and the stale token cannot create a new Lifetime VIP sale afterward.
2. The same Lifetime VIP token would otherwise remain valid under Xsolla's default 24-hour lifetime. TycoonX does not rely on that default when it exceeds the campaign boundary.
3. CK-Labs invalidates an unpaid token after discovering an obvious catalog/configuration error. No entitlement is granted and no refund is fabricated.
4. Xsolla had already authoritatively completed the transaction before the token was invalidated. The valid completed purchase remains reconcilable and is not revoked merely because the token later expires.
5. A support ticket contains a screenshot or copied Pay Station token URL. It is treated as a lookup lead, not proof of payment or entitlement ownership.
6. A credible account-compromise incident exposes an unpaid token. The affected checkout can be invalidated without confiscating unrelated legitimate purchases.
7. A 30-Day VIP token is created hours before payment completes. The 30-day entitlement does not start at token creation.
8. A Diamond checkout is opened twice in parallel with the same token/order context. Only one authoritative completed transaction can produce one economic grant.
9. A stale checkout crosses a regional-price, currency, VAT/FX or promotion change. TycoonX either obtains accurate provider-confirmed final terms or requires a fresh checkout; it does not silently infer a price from the old token.
10. A provider outage delays the webhook until after token expiry. TycoonX reconciles the Xsolla transaction instead of assuming expiry means payment failed.
11. A sandbox token or sandbox Pay Station URL is copied into a production support flow. It never creates production paid value.
12. The same `external_id` appears with a newly requested token after an ambiguous prior attempt. TycoonX reconciles the prior order instead of blindly charging again.
13. The player switches TycoonX accounts while Pay Station remains open. Fulfillment remains attached to the intended verified order/account rather than the currently logged-in account.
14. Xsolla is replaced or disabled. Unused tokens are retired where practical while completed purchases remain restorable from authoritative records.
15. An invalidation request is retried. Because invalidation is idempotent, the retry cannot create a second entitlement correction, refund or fraud action.

## Release evidence

Before considering this gate satisfied, CK-Labs should retain evidence that:

- Xsolla provider transaction IDs survive the full TycoonX stack exactly as `int64`-range identifiers;
- tests include values above `2^32` and above JavaScript's safe-integer boundary;
- redirect parsing does not grant or revoke entitlements;
- an empty redirect `invoice_id` cannot become a fabricated transaction;
- external IDs are newly generated and unique across sandbox and live payments;
- transaction ID, external ID and user ID remain separate fields;
- duplicate/replayed events remain idempotent for Diamonds, 30-Day VIP and Lifetime VIP;
- refund tooling resolves the exact transaction from authoritative order mappings rather than a rounded/manual identifier;
- sandbox transactions cannot reach production entitlements;
- Pay Station token issuance alone grants no paid value and creates no completed revenue;
- time-limited offers, especially Lifetime VIP, do not rely on the default 24-hour token lifetime when the token would outlive the selected sales window;
- still-unpaid stale/security-sensitive tokens can be invalidated through the provider-supported flow without revoking an already completed legitimate transaction;
- token/order/account/environment binding survives retries, app restarts and account switching; and
- full live Pay Station tokens are excluded from unnecessary analytics, crash logs, support notes and other non-payment storage.

## Current reference points

- Xsolla, **Configure redirects**: documents `user_id`, `foreigninvoice`, `invoice_id`, redirect statuses, empty `invoice_id` on an unfinished checkout, and the June 1, 2026 move to `int64` transaction IDs.
- Xsolla, **Payment configuration FAQ**: documents `external_id`, cross-sandbox/live uniqueness, a fresh external ID per payment, and the recommendation to test transaction IDs above `2^32` such as `4,300,000,000`.
- Xsolla, **Pay Station token API**: documents `settings.external_id`; the current default 24-hour token lifetime; production and sandbox Pay Station URLs; and the idempotent Invalidate token endpoint that expires other sessions using the same payment token.
- Xsolla webhook/API schemas: currently type provider `transaction.id` / transaction path IDs as `integer(int64)`.

Provider behavior can change. Re-check the current Xsolla documentation before materially changing the webshop integration.
