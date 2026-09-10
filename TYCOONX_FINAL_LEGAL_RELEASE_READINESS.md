# TycoonX Final Legal Release-Readiness Consolidation

**Last reviewed: September 10, 2026.**  
Owner: CK-Labs  
Scope: internal legal/implementation release-readiness control for TycoonX.

This document does not replace the canonical English Terms of Service, Purchases & Refunds Policy, Privacy Policy or Community Standards. It consolidates the code-first release gates and the current production remediation status so CK-Labs does not confuse completed localization with complete operational readiness.

## 1. Non-negotiable baseline

- Player-facing and legal prose must display the brand exactly as **TycoonX**. Technical route/file identifiers containing `tyconx` may remain where changing them would break compatibility.
- TycoonX has been in full release since **September 1, 2026**. Current service, purchases, VIP, Diamonds, rewards and current terms must not be described as beta.
- The localized legal hub and all four full legal documents are complete for all 25 required locales. A localization is reopened only when canonical English meaning materially changes.
- Apple App Store purchases, Google Play purchases and the official CK-Labs TycoonX webshop using Xsolla remain separate payment channels under one coherent TycoonX legal framework.
- Purchased Diamonds, promotional/free Diamonds, one-time non-renewing 30-Day VIP and Lifetime VIP are distinct entitlements. Ordinary gameplay debt, bankruptcy or unrelated economy correction is not by itself a basis to remove unrelated valid purchased Diamonds or valid VIP.
- Lifetime VIP is a limited-time promotional one-time offering available only during selected genuine sales windows. It may be withdrawn from future sale and may never return. A past sale creates no expectation that Lifetime VIP will remain continuously available.
- A technically accepted request is not automatically legitimate gameplay if a player knowingly exploits an authorization, validation, replay, race or settlement defect. The reverse is equally important: an abnormal/server-accepted state alone does not prove intentional exploitation.
- Enforcement must distinguish detection, temporary containment, state correction and punitive sanctions. Reliable evidence, account-compromise analysis and proportionality matter.
- Mandatory German/EU consumer, digital-product, privacy, liability, notice, conformity, modification, withdrawal, termination, price-reduction and other non-waivable rights remain intact.

## 2. Current production conclusion

The implementation-derived legal map is substantively complete, but **full commercial/legal/payment readiness is not yet achieved** because multiple P0 server-authority, economy-integrity and confidentiality findings remain open in the production definitions rechecked on September 10, 2026.

No production database change is authorized by this document. The fixes below require a separate engineering migration/change process and verification. This legal audit remains read-only with respect to production data, functions, policies, grants, triggers, schema, cron, balances and configuration.

## 3. P0 findings verified still open

### A. Profile, entitlement and staff authority

1. **Sensitive self-profile UPDATE remains too broad.** Authenticated profile UPDATE permissions still include server/staff-controlled state such as `vip`, staff/admin/mod/support/tester flags, moderation state, anti-abuse state, reward checkpoints, energy/hunger and other internal fields. Role-based policies that trust profile role flags cannot be considered fully trustworthy until those flags are server-owned.
2. **Public profile exposure remains too broad.** The current profile read surface exposes substantially more account/device/moderation/security/economic state than a minimal public player card requires. This is an implementation/privacy defect, not an intended disclosure that should be normalized in the Privacy Policy.

Required direction: expose a minimal public profile projection, use a strict ordinary-player editable-column allowlist, and make staff, entitlement, moderation, security, progression and sensitive account fields server-owned.

### B. XP, energy, rewards and raw credit authority

3. `rpc_add_xp(amount)` still accepts caller-provided positive XP for the current user without independently proving the gameplay event that earned it.
4. `rpc_add_energy(amount)` still accepts caller-provided positive energy without independently proving a timer/reward/purchase/gameplay source; direct authenticated profile UPDATE also includes energy/hunger.
5. `gain_xp(user_id, amount)` and `award_collect_xp(user_id, amount)` remain broadly executable arbitrary-target progression helpers.
6. `specialization_upgrade_refund_wallet_credit(user_id, amount)` remains a broadly executable raw wallet-credit helper.
7. `hourly_chart_rewards` cooldown/control state remains writable by the affected player while the trusted reward RPC relies on that state.
8. `profiles.last_level_reward_claimed` remains inside the broad self-profile UPDATE surface, allowing a reward checkpoint to be influenced outside the canonical claim path.

Required direction: every reward/progression mutation must derive identity, amount, eligibility and idempotency from a specific authoritative server event. Ordinary clients should read reward state, not author the state that decides whether a reward is payable.

### C. Housing authority

9. `new_housing_tenant_cooldowns` remains player-writable for the player's own row even though the rent path relies on it to enforce the current re-rental restriction. `set_housing_tenant_cooldown(...)` is also broadly executable with a supplied target user.
10. `_spawn_next_house_plot(p_country)` remains a privileged Housing-supply creation helper exposed to ordinary/anonymous execution.

Required direction: Housing cooldown and auction/supply creation state must be server-owned. Current cooldown lengths and market formulas remain balance parameters rather than permanent contractual promises.

### D. Connected-fill identity and shop destination binding

11. `_internal_shop_connected_fill(...)` and `_internal_industrial_connected_fill(...)` remain broadly executable internal helpers that accept a supplied user identity and can rebind effective request identity.
12. `shop_auto_fill_cheapest(...)` and reviewed shop market buy-and-store helpers still do not sufficiently bind the supplied destination slot to the authenticated caller before storing goods.

Required direction: remove client execution of internal identity helpers and derive the destination owner from authenticated authoritative state inside every fill/purchase path.

### E. Player production market settlement

13. Agriculture, livestock and mining sale-setting paths still permit non-positive seller prices, while the corresponding direct purchase paths do not independently reject a non-positive seller price before wallet math. The ordinary listing UI filtering does not make a direct RPC settlement safe.

Required direction: enforce strictly positive, finite, bounded prices in both the setter and the final settlement function. Do not rely on client/UI filtering.

### F. Company supply and recruitment authority

14. The richer current `company_supply_request_update(...)` path still does not visibly reapply the linked export-contract/export-offer price ceiling that is present in stronger creation/legacy update logic.
15. Company job post/application RLS still contains cross-Company correlation conditions equivalent to `mm.company_id = mm.company_id`, rather than binding the manager's Company to the protected post/application Company.

Required direction: revalidate linked commercial constraints at every mutable transition, and correlate Company permissions against the exact target Company in RLS as well as in RPCs.

### G. Union governance authority

16. Current Union RLS still allows an active leader/officer a generic UPDATE surface broader than the ordinary settings UI. Server-owned treasury/progression/governance state should not depend on generic row UPDATE access.

Required direction: move player-editable Union settings to a narrow allowlist/RPC and make treasury, progression, leadership/status and maintenance state trusted-server fields.

### H. Art auction authority

17. `social_art_posts` still allows the current owner a generic UPDATE over an Art row, including auction-sensitive state that should be changed only by validated auction/settlement transitions.
18. Raw owner DELETE remains possible on Art rows, creating refund/settlement parity risk for an active auction unless every delete path blocks or atomically reconciles the current bid/escrow.
19. The reviewed bidding implementation still checks self-bidding against the original artist `user_id`, not the current resale `owner_id`, so current-owner self-bidding protection remains incomplete for relisted Art.

Required direction: make auction state server-owned, bind self-bid checks to the current seller/owner, and centralize active-auction cancellation/deletion with atomic refund/release settlement.

### I. Stocks, crypto and market-price authority

20. `user_stocks` remains directly writable by the owning authenticated player rather than being exclusively mutated by trusted buy/sell settlement.
21. `stock_transactions` remains client-insertable for the caller's user ID while automated pricing can consume transaction history as a market input.
22. `stock_price_history` remains insertable through an over-broad policy/grant surface while price automation can consume that history as momentum/reference input.
23. `force_update_stock(...)`, `bulk_update_crypto_prices(...)`, `automate_stock_prices()` and `run_stock_price_automation_safe()` remain executable more broadly than an ordinary client needs.

Required direction: holdings, transaction evidence and price history must be server-authored; price-mutation/automation helpers must be trusted service/cron/admin operations with fail-closed internal authorization as well as restricted EXECUTE privileges.

### J. Bank internal authority

24. Internal banking/debt helpers including `new_bank_debt_recovery_resolve_note(...)`, `new_bank_log_transaction(...)`, `new_bank_get_transactions_internal(...)`, `new_bank_get_quote_internal(...)` and `new_bank_push_notification(...)` remain more broadly executable than their trusted/internal roles require.

Required direction: bind target user and economic facts to server state, restrict internal helpers, and never treat a convenience notification as authoritative proof of an underlying debt/default/seizure event.

### K. Jobs, daily tasks and global settlement

25. `_auto_complete_care_jobs_aged(...)` and `_auto_post_care_jobs_batched(...)` remain broadly executable global care-job workers.
26. `_daily_task_consume_user_product_stock(user_id, ...)` remains a broadly executable arbitrary-user inventory-consumption helper.
27. `fm_settle_match_rewards()` remains globally executable more broadly than an ordinary client needs, even though its reviewed idempotency controls reduce duplicate-settlement risk.

Required direction: system-wide workers and arbitrary-user mutation helpers must be trusted scheduler/service operations; ordinary gameplay should use caller-bound feature RPCs.

### L. Social/chat confidentiality and official-notification authority

28. Ordinary `messages` SELECT remains globally permissive at the raw policy layer instead of consistently inheriting the membership/audience restrictions represented by Company, Union and Executive chat.
29. Previously documented Social/UGC findings remain open, including ordinary Company/Union history boundaries, message-routing/privileged-row authority, Executive notification disclosure, Music auction-state authority, poll parent authorization, Home Room raw-read boundaries and anonymous Post Office identity protection.
30. Generic official-looking notification functions including `send_company_event_notification(...)`, `notify_moderation_event(...)` and Housing notification helpers remain too broadly callable to be treated as reliable evidence of the underlying official event.

Required direction: enforce audience authorization on the raw read path and every notification/push fan-out path; make official event notifications consequences of authoritative server events rather than caller-authored assertions.

## 4. Important positive controls and closed false positives

The final risk list must not keep stale findings after production has improved. Current positive/closed points include:

- Finance V2 separately protects direct `profiles.money` edits in the reviewed deployment.
- The reviewed generic authenticated profile UPDATE does not include the Diamond balance column.
- The previously suspected FX account zero-balance delete bypass is **not confirmed**: current production RLS and the dedicated clear-account path enforce the substantive zero-balance condition.
- Current persona compatibility training is materially hardened compared with stale migration bodies, including authentication, constrained reward shape and server evidence/energy-receipt controls.
- Current Housing owner-eviction/tenant-leave settlement returns or records a valid tenant deposit release; do not claim automatic deposit forfeiture from obsolete migration code.
- The reviewed industrial external-purchase path independently rejects a non-positive seller price; the confirmed negative-price settlement gap concerns the reviewed agriculture/livestock/mining paths.
- `social_postoffice_letters` raw table SELECT is sender/recipient scoped in the reviewed policy set; the remaining anonymity issue concerns whether other raw/helper paths can reveal identity contrary to the player-facing anonymous presentation.
- Built-in TycoonX automation, including system market behavior, job automation and server-operated price movement, is intended gameplay and is not player botting merely because it is automatic.
- Supported invocation of a globally scoped function is not retroactively misconduct merely because CK-Labs later decides the architecture should move that function behind a scheduler/service boundary.

## 5. Evidence and enforcement rule while remediation is pending

Until the technical P0s are fixed, enforcement must not assume every database row or accepted request is pristine authoritative evidence. For a serious sanction, correlate the best available evidence across server finance/settlement records, immutable/provider records where relevant, timestamps, ownership, authentication/session evidence, repeated behavior, impossible-state transitions and surrounding facts.

Examples:

- A player with an abnormal XP balance is not automatically an exploiter merely because `rpc_add_xp` is weak. Repeated direct calls with impossible reward provenance are materially different from a duplicated supported UI action or server retry.
- A negative-price market state accepted by the backend can be corrected, but an innocent buyer who encounters one anomalous listing once through ordinary UI behavior should not automatically receive the same punitive treatment as a player deliberately creating and repeatedly purchasing negative-price listings through direct RPC calls.
- A current Art owner bidding on their own relisted Art through a modified/direct client can be investigated as self-bidding, but a settlement/refund defect caused by an owner deletion or moderation path must be reconstructed before blaming the bidder.
- A notification saying that a default, moderation action or Company event occurred is supporting telemetry, not independent proof if the notification helper itself is caller-influenceable.
- A compromised account, stale client, provider outage, replay/retry, race condition or CK-Labs backend defect must be distinguished from knowing exploitation wherever reasonably possible.

Correct directly attributable invalid game state proportionately. Do not automatically erase unrelated legitimate wealth or paid entitlements. Mandatory statutory remedies remain available where applicable.

## 6. Commercial and payment readiness boundary

The legal purchase framework remains coherent across Apple, Google Play and Xsolla, but provider rules remain external and can change by date, region and program.

As rechecked on September 10, 2026:

- Apple's current App Review Guidelines continue to require In-App Purchase for in-app digital functionality/currency within the applicable framework, state that purchased in-game IAP currency may not expire, and require restoration where applicable.
- Google Play continues to regulate billing for in-app digital goods/virtual currency, with regional/program-specific alternatives that must be checked for the actual distribution/payment path rather than described as one universal rule.
- Xsolla's current refund/legal framework remains a separate provider/merchant layer for the webshop. CK-Labs remains responsible for its own TycoonX entitlement delivery, truthful product description and any mandatory consumer-law obligations that cannot be shifted to the payment provider.
- German BGB §§ 307, 327d, 327i and 327r continue to limit unfair/unclear standard terms, preserve applicable digital-product conformity/remedies, and impose conditions on certain changes to continuously supplied digital products.
- GDPR data-minimisation, privacy-by-design/default and security duties remain relevant to the broad profile/social access defects and must be addressed technically rather than normalized in player-facing privacy prose.

No material current-law/provider meaning change was identified in this consolidation that requires reopening all localized purchase/legal documents.

## 7. Remediation order

### Phase 1 - identity, privilege and raw-value authority

1. Lock down sensitive `profiles` columns and expose a minimal public profile projection.
2. Remove/restrict raw XP, energy, wallet-credit, reward-checkpoint and arbitrary-user mutation helpers.
3. Restrict connected-fill identity helpers and destination-slot ownership.
4. Restrict Housing cooldown/supply helpers and server-own the enforcement state.

### Phase 2 - economy settlement integrity

5. Fix positive-price validation for agriculture/livestock/mining at setter and settlement layers.
6. Revalidate linked Company supply pricing on every update transition.
7. Narrow Union and Art generic owner/officer update surfaces; fix Art current-owner self-bid and active-auction deletion/refunds.
8. Server-own stock holdings, market transactions/history and price automation.
9. Restrict bank/debt internal helpers.
10. Restrict global care/daily-task/reward settlement workers.

### Phase 3 - confidentiality and official event authority

11. Enforce Company/Union/Executive/social audiences at raw read, derived-data and notification layers.
12. Fix Company job cross-Company RLS correlation.
13. Restrict generic Company/moderation/Housing notification helpers.
14. Close remaining Music, polls, Home Room and anonymous Post Office authority/privacy gaps.

### Phase 4 - branding and verification

15. Replace legacy player-facing/database-generated brand misspellings with `TycoonX` through an approved database migration while leaving compatibility-sensitive technical identifiers unchanged.
16. Re-run every code-first gate against production after engineering remediation.
17. Run repository verifiers without GitHub Actions, repeat provider/German/EU source checks, and reopen only any localized document whose canonical legal meaning actually changed.

## 8. Readiness closure criteria

Full commercial/legal/payment readiness should not be marked complete merely because the legal pages are translated. Close this gate only when:

- no known P0 server-authority, economy-integrity or confidentiality defect above remains open;
- P1 findings are remediated or have an explicit, justified owner/risk decision that does not contradict mandatory law;
- canonical English Terms, Purchases & Refunds, Privacy and Community Standards match deployed behavior and current product offerings;
- all affected localized pages remain semantically synchronized with any material canonical change;
- rendered player-facing text contains no legacy brand misspelling and no current-service beta wording;
- paid-entitlement restoration/refund/chargeback paths remain consistent across Apple, Google Play and Xsolla roles;
- proportional correction, compromised-account handling and evidence-quality safeguards remain intact; and
- current German/EU and provider requirements have been rechecked immediately before closure.

## 9. Current go/no-go assessment

**Legal/localization coverage: essentially complete. Technical commercial-readiness gate: still open.**

TycoonX can continue to operate subject to CK-Labs' ordinary incident/security judgment, but the P0 items above should be treated as urgent engineering hardening. This document does not instruct or authorize an emergency shutdown, a database migration, player sanctions or entitlement removal.

The next audit step is **implementation remediation verification**: compare production definitions against this exact matrix after engineering changes, close only findings that are demonstrably fixed, and avoid lowering the standard merely because a weak backend previously accepted the state.