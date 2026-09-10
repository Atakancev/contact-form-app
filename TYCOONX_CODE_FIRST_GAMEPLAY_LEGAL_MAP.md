# TycoonX Code-First Gameplay Legal Map

**Read-only implementation audit. Last reviewed: September 10, 2026.**

Owner: CK-Labs  
Scope: map player-facing TycoonX legal rules to gameplay/community mechanics that actually exist in the current Flutter client and production Supabase backend, so legal hardening starts from deployed behavior instead of generic policy assumptions.

## 1. Source hierarchy and safety boundary

This is internal implementation/legal QA. It does not replace the canonical English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy or Community Standards.

Reviews use read-only production Supabase schema/function/policy/trigger inspection, current `Atakancev/terrax-flutter` source and current `Atakancev/contact-form-app` legal source. No database row, function, trigger, policy, grant, schema object, cron or configuration is changed as part of this legal audit.

Backend implementation is evidence of a feature's current technical purpose, but a current cap, permission, cooldown, formula, UI control, moderation signal or anomaly threshold is not automatically a permanent contractual promise, proof of wrongdoing or safe harbor for knowing exploit use.

## 2. Cross-system legal and enforcement principles

For every gameplay/community mechanic:

1. inspect the deployed Flutter entry point and current server authority/settlement path;
2. distinguish intended value movement and social access from disguised, unauthorized or exploit-driven use;
3. do not invent hidden prohibitions against ordinary gameplay the feature expressly invites;
4. do not freeze current formulas, limits, timings or moderation thresholds into permanent promises;
5. distinguish anomaly/report/moderation signals from findings and containment from punishment;
6. prefer reconciled authoritative server evidence while recognizing that server data can itself be contaminated by authorization/software defects;
7. distinguish account compromise, outages, stale state and accidental one-off actions from knowing/repeated exploitation;
8. correct directly attributable invalid state proportionately rather than automatically rewriting unrelated legitimate paid-value records; and
9. preserve mandatory consumer, privacy, notice, conformity, change, appeal and remedy rights.

A successful RPC or row mutation is not an absolute safe harbor if an authorization or validation defect clearly enabled an unintended manipulated state. Conversely, server acceptance or an abnormal result alone does not prove that the player knowingly exploited a defect.

## 3. Completed cluster: Company governance and value movement

Reviewed salaries/payroll, authorized Company treasury value movement, IPOs, dividends, buybacks and secondary offerings. Genuine use is permitted; sham employment/distributions, circular self-dealing, controlled-account arrangements, exploits and prohibited RMT remain reviewable. TycoonX Companies and shares are fictional game elements, not real securities or investments.

## 4. Completed cluster: Company supply, exports and tenders

Reviewed `manage_supply`, member/warehouse fulfillment, Company-to-Company procurement/export settlement, `manage_tenders`, live/blind bidding, targeted visibility, completion, failure and penalties.

Open finding: reviewed linked-price validation is stronger on Company supply request creation than update. Detailed control: `TYCOONX_COMPANY_SUPPLY_EXPORT_TENDER_RELEASE_GATE.md`.

## 5. Completed cluster: Union contribution, treasury and governance

Reviewed Union Project donations, membership fees, leader deposits/withdrawals, maintenance, project rewards, upgrades, polls and closure. Genuine use is allowed; controlled-account limit evasion, state manipulation, duplicate/replay abuse, exploit laundering and prohibited RMT remain reviewable.

Open finding: active Union leaders/officers have a broader generic row UPDATE surface than the normal UI. Detailed control: `TYCOONX_UNION_TREASURY_GOVERNANCE_RELEASE_GATE.md`.

## 6. Completed cluster: Art and Begging

Reviewed Art publication/idempotency, escrow bidding, auction finalization, resales, direct offers, moderation timing and Begging as genuine assistance.

Open findings remain: resale-owner self-bid protection, broad Art owner UPDATE, raw active-Art deletion/refund parity and direct-offer preference enforcement. Detailed control: `TYCOONX_ART_BEGGING_RELEASE_GATE.md`.

## 7. Completed cluster: Player markets, shop auto-fill, system auto-market and Government Market

Reviewed agriculture/livestock/mining/industrial listings and purchases, shop auto-fill, TycoonX `auto_market_tick()`, Government direct sales, tenders, awards, partial delivery, completion rewards and penalties. Built-in TycoonX automation is intended gameplay, not player botting.

Open findings remain: inconsistent positive-price enforcement in agriculture/livestock/mining settlement, destination-slot ownership binding for shop fill helpers, broad market-sensitive write surfaces and client-authored Government anomaly evidence limits. Detailed control: `TYCOONX_PLAYER_GOVERNMENT_MARKETS_RELEASE_GATE.md`.

## 8. Completed cluster: Bank, credit, FX, stocks and crypto

Reviewed legacy/current banking, savings, credit, installments, collateral, debt recovery, bankruptcy, FX, Diamond-funded FX slots, stocks/crypto, transaction/price history and automated prices.

Player-facing baseline: these are fictional TycoonX simulation systems, not real bank deposits, securities, investments, legal tender or real cryptoassets. Ordinary debt/default/trading outcomes are gameplay, not automatic misconduct. Valid purchased Diamonds/VIP are not ordinary in-game debt collateral. System-operated market automation is intended gameplay.

Open implementation/security findings remain: direct player write authority over `user_stocks`; client-insertable `stock_transactions`; broad `stock_price_history` insertion; broadly executable market-price mutation helpers; client-writable retained legacy bank economic state; overly broad debt-resolution and internal bank helpers. The production FX zero-balance DELETE safeguard was confirmed.

Detailed control: `TYCOONX_BANK_CREDIT_FX_STOCKS_CRYPTO_RELEASE_GATE.md`.

## 9. Completed cluster: Logistics, jobs, competitions and rewards

Reviewed truck sales/rentals, new/loaded deliveries, claims, Diamond acceleration, care jobs/automation, Company recruitment, daily tasks, level-up/hourly rewards, rankings and match settlement.

Open findings remain: broadly executable global care helpers; arbitrary-user daily-task stock consumption; client-writable hourly cooldown state; client-influenceable level-reward checkpoint; cross-Company job RLS correlation defect; stale job overloads; broad match-settlement execution; stale legacy Logistics dependency.

Detailed control: `TYCOONX_LOGISTICS_JOBS_COMPETITIONS_RELEASE_GATE.md`.

## 10. Completed cluster: Social, chat and UGC

Reviewed ordinary/global/country/Company/Union/Executive chat, direct/group/team mentions, replies, polls, pins, Company meeting rooms, restaurant/private social tables, Home Rooms, Post Office, Music, Books, moderation, reports, restoration and creator-content access/settlement.

Open findings remain:

- ordinary Company/Union history is not equivalently server-membership-bound to the Executive channel;
- ordinary message routing and privileged row fields are too client-writable;
- Executive Company Chat can leak message content through notification branches that do not reapply the current audience rule;
- Music owner UPDATE authority is broader than the validated auction settlement path;
- Post Office anonymous recipient presentation can be undermined by raw row access;
- poll-derived data does not consistently inherit parent-message authorization;
- some Home Room collection/profile tables are broader than the intended entrance/read RPC boundary; and
- generic moderation notification authority is too broad.

Positive controls include restrictive Executive read logic, private social-table membership rules, Company meeting-room admission checks, Home Room active-visit checks, reporter ownership, staff-gated restoration and caller-bound Book controls.

Detailed control: `TYCOONX_SOCIAL_UGC_RELEASE_GATE.md`.

## 11. Completed cluster: residual profile, privacy, Housing, energy, friends/activity/log authority

The September 10 residual sweep rechecked current production instead of assuming previously documented P0/P1 remediation had landed.

### Still-open cross-cutting P0s

The reviewed deployment still exposes broad self-profile UPDATE over sensitive profile state and broad public profile reads. Previously documented privileged paths also remain open in the inspected production definitions: `specialization_upgrade_refund_wallet_credit(...)`, `gain_xp(...)`, `award_collect_xp(...)`, `_internal_shop_connected_fill(...)`, `_internal_industrial_connected_fill(...)`, `send_company_event_notification(...)` and `notify_moderation_event(...)`.

### New/expanded P0: raw XP and energy authority

`rpc_add_xp(amount)` still accepts a client-supplied positive XP amount for the authenticated user without independently proving a feature-specific reward event. Current Flutter `AuthService.addXP(...)` uses that path, including current job UI usage.

`rpc_add_energy(amount)` likewise accepts a caller-provided positive energy amount without independently proving a source event or enforcing the intended gameplay cap in the reviewed function. Authenticated profile UPDATE also includes `energy` and `hunger`, so the root problem is broader than one RPC.

### Positive remediation: persona training

Current production persona compatibility RPCs are materially safer than stale migration bodies suggest. The reviewed deployed `rpc_add_persona_stats(...)` authenticates, restricts the reward shape, consumes a user/session-bound energy receipt and records structured evidence. Current `rpc_spend_energy_for_persona(...)` validates the cost/reward relationship and delegates to the server-owned quick-training path. Do not classify the obsolete migration version as current behavior.

### New P0 Housing findings

`new_housing_tenant_cooldowns` is used to enforce the current same-owner re-rental cooldown, but the affected authenticated user can INSERT/UPDATE their own cooldown row in the reviewed policy/grant set. `set_housing_tenant_cooldown(...)` is also broadly executable and accepts an arbitrary target user. Server enforcement therefore relies on player-writable state and an over-broad raw setter.

`_spawn_next_house_plot(p_country)` is a privileged internal Housing supply-creation helper, but current reviewed privileges allow anonymous/authenticated execution. It should be callable only from trusted Housing maintenance/settlement paths.

### Housing maintenance nuance

`new_housing_foreclose_overdue()` and `new_housing_daily_cron()` are global maintenance/settlement functions and should be service-bound. However, current Flutter bank code itself invokes `new_housing_foreclose_overdue()` before mortgage reads, and the function derives overdue targets from server state. Ordinary invocation through that supported client flow is therefore not misconduct by itself.

The current Finance V2-wrapped Housing rent/leave paths also positively confirm tenant-deposit return/release behavior, including owner-eviction deposit return. Older migration bodies should not be used to claim a current deposit-forfeiture defect without rechecking production.

### Friends/log privacy nuance

The reviewed Housing transaction logs, profile strategy reveals and login fingerprint tables did not show a comparable broad cross-user read in this subset. `social_list_user_friends(p_user_id, ...)` intentionally returns a narrow accepted-friends list for another user and is used by the current Flutter Friends service, so that is a product/privacy-design decision rather than an automatic security defect. Broader public profile exposure remains a separate P0.

### Additional P1 service surfaces

Housing notification helpers are too broadly callable to serve as authoritative evidence of rent/eviction/mortgage events. Daily-activity/news invocation/regeneration helpers are privileged service proxies exposed more broadly than current ordinary Flutter usage requires. They should be trusted scheduler/staff/service operations.

Detailed control: `TYCOONX_CROSS_CUTTING_SERVER_AUTHORITY_PRIVACY_RELEASE_GATE.md`.

## 12. Player-facing synchronized Terms notices

The following route-gated Terms clarifications remain synchronized in English plus all 25 target locales:

1. `GameplayEconomyRuleNotice.tsx`
2. `CompanyCommerceRuleNotice.tsx`
3. `UnionGovernanceRuleNotice.tsx`
4. `ArtBeggingRuleNotice.tsx`
5. `PlayerGovernmentMarketRuleNotice.tsx`
6. `BankCreditMarketsRuleNotice.tsx`
7. `LogisticsJobsCompetitionsRuleNotice.tsx`
8. `SocialUgcRuleNotice.tsx`

They display only on the canonical Terms route and localized Terms routes. Arabic uses RTL and required Spanish, French, Portuguese and Chinese variants remain separately localized.

No ninth player-facing notice was added for the residual authority sweep because existing canonical/localized Terms already state the material exploit/server-acceptance/compromise/correction rule. Newly identified insecure implementation surfaces should be remediated technically, not normalized as intended player access.

## 13. Current-law and platform boundary

As rechecked on September 10, 2026, the existing legal framework continues to preserve current Apple/Google digital-purchase requirements, current Xsolla payment/refund/chargeback boundaries, mandatory German digital-product/AGB rules, GDPR privacy/security duties and applicable content-moderation safeguards.

A genuine authorization, confidentiality, settlement, entitlement or backend defect cannot simply be relabeled ordinary gameplay risk to contract around a mandatory remedy. Likewise, knowing use of an altered client/API path to manipulate protected state is not automatically legitimized merely because a defective backend accepted the request.

## 14. Next code-first audit order

Completed substantive mapping clusters:

1. Company governance/value movement.
2. Company supply/export/tender commerce.
3. Union contribution/treasury/governance.
4. Art/Begging.
5. Player markets/shop auto-fill/system auto-market/Government Market.
6. Bank/credit/FX/stocks/crypto.
7. Logistics/jobs/competitions/rewards.
8. Social/UGC.
9. Cross-cutting profile/server-authority/privacy.
10. Residual Housing/profile/energy/friends/activity/log remediation verification.

The implementation-derived legal map is now substantively complete. The next work is **P0/P1 remediation verification and final release-readiness consolidation**: recheck every open implementation finding after engineering changes, confirm the canonical/legal notices still match deployed behavior, repeat current Apple/Google/Xsolla and German/EU source checks, and close readiness only when the server-authority/privacy blockers are actually remediated. Database remediation remains outside this legal audit unless explicitly approved.