# TycoonX Apple Transaction History V2 Reconciliation Release Gate

Last reviewed: September 8, 2026

This is a narrow internal implementation and operations companion to `TYCOONX_APPLE_REFUND_ENTITLEMENT_RELEASE_GATE.md`, `TYCOONX_APPLE_SIGNED_DATA_JWS_VERIFICATION_RELEASE_GATE.md`, and the canonical TycoonX legal documents. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, Apple Custom EULA, mandatory consumer law, or Apple rules.

Its purpose is to prevent duplicate Diamond grants, stale VIP restoration, missed refunds, incomplete account recovery, and incorrect player sanctions when CK-Labs uses Apple **Get Transaction History** as an authoritative reconciliation source.

## Current Apple baseline

As of September 8, 2026:

- Apple's current transaction-history endpoint is **Get Transaction History V2** at `/inApps/v2/history/{anyTransactionId}`.
- Apple's App Store Server API changelog says the current endpoint provides transaction history for **all In-App Purchases, including finished consumable In-App Purchases**.
- **Get Transaction History V1 is deprecated**. New TycoonX work must not depend on V1's narrower finished-consumable behavior.
- Apple permits **any transaction ID** from the same customer's app transaction history as the path identifier; CK-Labs does not need to force every caller to manufacture or guess an `originalTransactionId` first.
- Results are paginated with a `revision` token and `hasMore`.
- If optional query parameters are used, Apple requires the **same query parameters** on subsequent requests that include the `revision` token.
- Apple sorts transaction history by recently modified date. A transaction can appear again after Apple modifies it, including when it becomes revoked.
- Apple's current production rate limit for Get Transaction History is **50 requests per second per app**; sandbox limits are 10% of production. Apple can change these limits.

Primary current Apple references:

- https://developer.apple.com/documentation/appstoreserverapi/get-transaction-history
- https://developer.apple.com/documentation/appstoreserverapi/app-store-server-api-changelog
- https://developer.apple.com/documentation/appstoreserverapi/identifying-rate-limits
- https://developer.apple.com/videos/play/wwdc2024/10062/

## P0 release requirements

### 1. Use V2 for full-history reconciliation

TycoonX server code that intends to perform a complete Apple purchase-history refresh must use the current V2 transaction-history endpoint.

Do not treat a V1 result as a complete purchase history. V1 historically omitted finished consumable transactions that V2 now returns.

For TycoonX this distinction is especially important for Diamonds. A player can have a valid, old Diamond purchase that was already finished on the device. A V1-style history scan can therefore be incomplete even though the original payment was valid.

Migration to V2 must not itself grant old Diamonds again. V2's broader history is a better source of **purchase evidence**, not permission to replay historical fulfillment.

### 2. Preserve one Apple transaction identity across every discovery path

A verified Apple transaction can be discovered through:

- the direct StoreKit purchase result;
- `Transaction.updates`;
- App Store Server Notifications V2, including `ONE_TIME_CHARGE`;
- Get Transaction Info;
- Get Transaction History V2;
- Get Refund History;
- support/recovery tooling; or
- a later reconciliation job.

All paths must converge on the same durable Apple transaction identity and TycoonX fulfillment/correction record.

Do not create a new entitlement merely because the same transaction appears in a newly fetched V2 history page.

### 3. Do not confuse "historical purchase exists" with "entitlement is currently owed"

Get Transaction History V2 is an authoritative Apple transaction source, but the legal/product meaning differs by TycoonX product.

#### Diamonds

A finished consumable Diamond transaction proves that Apple has a purchase record. It does **not** prove the player still owns the originally granted Diamonds.

TycoonX's server-side Diamond ledger remains authoritative for gameplay spending, transfers, lawful corrections, and the remaining attributable balance.

Example:

- verified Apple transaction A originally granted 500 Diamonds;
- the player later spent 400 through ordinary gameplay;
- V2 history still contains transaction A;
- a recovery scan must **not** restore another 500 Diamonds merely because transaction A is present.

The correct result is one historical 500-Diamond purchase record and no duplicate grant.

#### One-time 30-Day VIP

A historical non-renewing 30-Day VIP purchase does not prove the VIP period is currently active.

TycoonX must preserve the existing public meaning: one non-renewing entitlement lasting **30 consecutive days** under the disclosed activation rule. Historical transaction presence cannot restart an expired clock, extend it to 60 days, or create a subscription.

#### Lifetime VIP

A verified, non-refunded, non-revoked historical Lifetime VIP purchase can support restoration of the already-purchased entitlement.

It does not reopen the sale. Lifetime VIP remains a limited-time promotional one-time entitlement available only during selected genuine sales windows, which may be withdrawn from future sale and may never return.

### 4. Exhaust pagination before declaring a full refresh complete

A complete V2 account refresh must:

1. start with the intended transaction-history request;
2. verify each returned signed transaction before using its claims;
3. apply each transaction idempotently to the reconciliation ledger;
4. preserve the returned `revision` token;
5. continue while `hasMore` is true; and
6. only mark the refresh successful after the final page is durably processed.

Stopping after the first page is not a complete account refresh.

If a worker crashes after page 2 of 5, the job must resume from durable state or restart idempotently. It must not mark the customer as fully reconciled merely because the first request returned `200`.

### 5. Treat `revision` as Apple-owned continuation state, not a transaction ID

The `revision` token is opaque Apple continuation state.

Do not:

- parse it for account meaning;
- expose it as a player-visible purchase identifier;
- use it as the TycoonX entitlement idempotency key;
- substitute it for `transactionId` or `originalTransactionId`;
- reuse it for a different customer; or
- reuse it with a materially different filter set.

Persist it only where operationally useful for the same Apple history stream and request definition.

### 6. Keep the query definition stable while paging

Apple currently requires the same optional query parameters on follow-up requests that include a `revision` token.

If TycoonX begins a paginated scan with filters, preserve that exact filter definition through the entire chain.

Do not silently change:

- `productType`;
- `productId`;
- `subscriptionGroupIdentifier`;
- start/end date filters;
- in-app ownership filters;
- revoked/non-revoked filters; or
- sort order

mid-scan and then continue using the previous revision.

A filter change starts a new logical scan.

### 7. Do not hide revocations during refund/reconciliation audits

Apple supports filters that can exclude revoked transactions. That can be useful for narrow product views, but it is unsafe as the only input to a refund/revocation audit.

When TycoonX is determining whether paid value remains valid, the reconciliation process must have a path that can observe revoked/refunded state rather than permanently filtering it away.

An `excludeRevoked=true` product listing cannot be treated as proof that the account has never had a revoked transaction.

A revoked Apple transaction must still be bound to the exact original TycoonX purchase before any correction occurs. It is not permission for a broad account-wide clawback.

### 8. A repeated transaction can be an updated snapshot, not a second purchase

Apple documents that transaction-history ordering is based on recently modified date and that a transaction can be returned again when its data changes.

Therefore:

- repeated `transactionId` is not a second sale;
- the newer verified signed state can update the stored Apple transaction snapshot;
- entitlement mutation remains idempotent and transaction-specific;
- a later revoked/refunded state can trigger one lawful correction;
- the earlier purchase state and later revoked state must not be counted as two independent monetary events; and
- a later purchase snapshot must not resurrect value already authoritatively refunded/revoked.

If signed snapshots materially conflict in a way the system cannot order safely, quarantine the transaction for reconciliation instead of choosing the state that produces the largest grant or clawback.

### 9. Verify every returned JWS transaction

Get Transaction History V2 returns signed transaction data.

TycoonX must run the same Apple JWS trust process required by `TYCOONX_APPLE_SIGNED_DATA_JWS_VERIFICATION_RELEASE_GATE.md` before using product, transaction, refund, account-binding, quantity, environment, or entitlement claims.

A successful HTTP response does not make an unverified decoded payload authoritative.

Production logic must still validate the expected TycoonX app identity and production environment. Sandbox/TestFlight evidence must not mutate production Diamonds or VIP.

### 10. Do not use V2 history to infer a human's fraud intent

Transaction History is payment-state evidence, not proof of player intent.

The existence of:

- a refund;
- a revocation;
- an updated transaction;
- an old client;
- a repeated snapshot;
- a Family Sharing state;
- an interrupted purchase; or
- provider-side inconsistency

must not automatically classify the player as a hacker, fraudster, chargeback abuser, regional-price abuser, or entitlement abuser.

Account suspension/termination requires the separate TycoonX enforcement rules and sufficient evidence.

### 11. Rate limits and Apple outages fail into reconciliation, not player punishment

Apple currently lists 50 Get Transaction History requests per second per app in production, with sandbox at 10% of production. Apple may change those limits.

On `HTTP 429` / `RateLimitExceededError`:

- respect Apple's `Retry-After` value;
- keep the scan resumable and idempotent;
- do not infer that no refund exists;
- do not revoke Lifetime VIP merely because history could not be fetched;
- do not regrant Diamonds merely because current history could not be fetched; and
- do not classify the provider failure as player abuse.

The same fail-safe applies to temporary Apple outages, authentication failures, and network failures.

### 12. Preserve provider history without exceeding the lawful retention purpose

TycoonX may retain transaction identifiers, product/entitlement facts, refund/revocation evidence, timestamps, reconciliation state, and accounting/support evidence where lawfully necessary for contract performance, fraud prevention, legal claims, tax/accounting, mandatory remedies, and entitlement restoration.

Do not retain raw Apple payloads forever merely because V2 can return them. Follow the TycoonX Privacy Policy, GDPR retention/minimization rules, and the existing retention gate.

Do not place Apple credentials, full JWS payloads, or unnecessary personal/payment data into ordinary analytics, crash logs, support chat, or player-visible error messages.

## Product invariants this gate must never weaken

- Purchased Diamonds do not expire solely because time passes.
- A historical Diamond purchase is not a duplicate-grant instruction.
- A refund/correction cannot remove more attributable purchased Diamond value than the related transaction originally granted, except where a separate lawful debt/claim basis exists and mandatory law permits it.
- One-time 30-Day VIP remains one non-renewing **30-consecutive-day** entitlement.
- A historical 30-Day VIP transaction cannot restart an expired period.
- Lifetime VIP remains a limited-time promotional one-time entitlement offered only during selected genuine sales windows.
- A historical Lifetime VIP transaction can support restoration of a still-valid entitlement but cannot reopen a closed sales window.
- Completed one-time purchases are not retroactively repriced merely because later prices, regional prices, taxes, currencies, FX, bundles, or promotions differ, except where mandatory law requires otherwise.
- Mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy, accessibility, and other non-waivable rights remain intact.

## Minimum regression matrix

Release QA must cover at least:

1. V2 returns an old finished consumable Diamond transaction and TycoonX does not grant it twice.
2. The same Apple transaction arrives through StoreKit and V2 history and produces one fulfillment record.
3. A five-page history is not marked complete until `hasMore=false`.
4. A crash between pages resumes idempotently without duplicate grants.
5. A `revision` token is never reused for another player/customer.
6. A filter change while paging starts a new scan instead of reusing the old revision.
7. A repeated transaction with a newer revoked state becomes one updated transaction plus one correction, not a second purchase.
8. A refund/revocation audit does not permanently hide revoked transactions behind `excludeRevoked=true`.
9. An unverified signed transaction in a successful V2 response cannot mutate Diamonds or VIP.
10. Sandbox transaction history cannot mutate production entitlements.
11. A 500-Diamond historical transaction whose grant was already spent is not restored merely because V2 returns it.
12. Expired 30-Day VIP history does not restart the 30-day clock.
13. Valid historical Lifetime VIP can be restored after verification without reopening Lifetime VIP for sale.
14. Refunded Lifetime VIP is not resurrected from an older purchase snapshot.
15. `HTTP 429` preserves the pending reconciliation job and creates no player fraud flag.
16. An Apple outage creates no automatic grant, clawback, suspension, or termination.
17. Account history with a lawful refund is not automatically classified as chargeback abuse.
18. A current V2 full-history refresh includes finished consumables and does not rely on deprecated V1 completeness.
19. Every returned signed transaction passes Apple JWS/app/environment verification before use.
20. Logs expose no Apple private key, authorization token, full raw signed payload, or unnecessary payment/account data.

## Localization impact

This gate does **not** materially change the current player-facing TycoonX Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards. It narrows implementation behavior so the existing legal promises and mandatory consumer protections are applied correctly.

Therefore the completed 25-locale / 100-document localization set does not need to be reopened for this change.

If CK-Labs later changes the public product meaning, restore rules, Diamond expiration rule, 30-Day VIP duration, Lifetime VIP availability promise, refund rules, or personal-data disclosures, update canonical English first and then resynchronize the affected localized document type in the required locale order.
