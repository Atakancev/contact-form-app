# TycoonX Code-First Gameplay Legal Map

**Read-only implementation audit. Last reviewed: September 10, 2026.**

Owner: CK-Labs  
Scope: map player-facing TycoonX legal rules to gameplay mechanics that actually exist in the current Flutter client and production Supabase backend, so legal hardening starts from deployed game behavior instead of generic policy assumptions.

## 1. Source hierarchy and safety boundary

This is an internal implementation/legal QA document. It does not replace the canonical English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy or Community Standards.

Reviews use read-only production Supabase schema/function/policy/trigger inspection, current `Atakancev/terrax-flutter` source and the current `Atakancev/contact-form-app` legal repository. No database row, function, trigger, policy, grant, schema object, cron or configuration is changed as part of this legal audit.

Backend implementation is evidence of a feature's current technical purpose, but a current server cap, permission, cooldown, formula, UI control or anomaly threshold is not automatically a permanent contractual promise, proof of wrongdoing or a safe harbor for knowing exploit use.

## 2. Cross-system legal and enforcement principles

For every gameplay mechanic:

1. inspect the deployed Flutter entry point and current server authority/settlement path;
2. distinguish intended value movement from disguised or exploit-driven use;
3. do not invent hidden prohibitions against ordinary gameplay that the feature expressly invites;
4. do not freeze current formulas, limits or timings into permanent promises;
5. distinguish anomaly signals from findings and containment from punishment;
6. prefer reconciled server settlement evidence while recognizing that server data can itself be contaminated by authorization or software defects;
7. distinguish account compromise, outages, stale state and accidental one-off actions from knowing/repeated exploitation;
8. correct directly attributable invalid state proportionately rather than automatically removing unrelated legitimate paid value or wealth; and
9. preserve all mandatory consumer, privacy, notice, conformity, change and remedy rights.

A successful RPC is not an absolute safe harbor if an authorization or validation defect clearly enabled an unintended manipulated state. Conversely, server acceptance or an abnormal result alone does not prove that the player knowingly exploited a defect.

## 3. Completed cluster: Company governance and value movement

Reviewed mechanics include salaries/payroll, authorized Company treasury value movement, IPOs, dividends, buybacks and secondary offerings. These are genuine TycoonX mechanics capable of moving Company/player value. Large legitimate amounts are not automatically abuse. Sham employment, circular self-dealing, controlled-account arrangements, exploit use and prohibited RMT remain reviewable when reliable evidence supports the prohibited purpose.

TycoonX Companies and shares are fictional game elements, not real securities or investments.

## 4. Completed cluster: Company supply, exports and tenders

Reviewed mechanics include `manage_supply`, member supply delivery, Company warehouse specialist fulfillment, `manage_exports`, Company-to-Company procurement/export settlement, `manage_tenders`, live/blind bidding, targeted visibility, completion, failure and penalties.

Open implementation finding: the reviewed richer `company_supply_request_create(...)` validates a linked export/V2 request's initial price against the linked commercial price, while the reviewed richer update path does not clearly reapply that ceiling to an edited `unit_price`. Engineering should make linked-price validation symmetric.

Detailed control: `TYCOONX_COMPANY_SUPPLY_EXPORT_TENDER_RELEASE_GATE.md`.

## 5. Completed cluster: Union contribution, treasury and governance

Begging is not the only intentional assistance/contribution mechanic. Production includes `donate_union_project(...)`, membership fees, leader treasury deposits/withdrawals, maintenance, project rewards, level upgrades, polls and Union closure.

Genuine use of those systems is allowed. Controlled-account limit evasion, state manipulation, duplicate/replay abuse, exploit laundering and prohibited RMT remain reviewable.

Open implementation finding: production RLS gives active Union leaders/officers a broader generic `unions` UPDATE surface than the normal settings UI. Sensitive server-owned governance/progression fields should use constrained server transitions.

Detailed control: `TYCOONX_UNION_TREASURY_GOVERNANCE_RELEASE_GATE.md`.

## 6. Completed cluster: Art and Begging

Reviewed behavior includes Art publication/idempotency, escrow bidding, auction finalization, resales, direct offers, owner-facing offer preferences, moderation before or after publication, and Begging as genuine assistance.

Open implementation findings:

1. **P0:** reviewed Art self-bid logic does not clearly block a different current resale owner from bidding on their own relisted Art.
2. **P0:** Art owner UPDATE authority is broader than validated auction RPCs and does not visibly make all auction-managed fields immutable.
3. **P0:** raw active-Art deletion is not visibly refund-equivalent to safe cancellation/moderation paths for a current bidder hold.
4. **P1:** reviewed direct-offer server logic does not visibly enforce all recipient offer-enabled/minimum preferences exposed by the client.

Detailed control: `TYCOONX_ART_BEGGING_RELEASE_GATE.md`.

## 7. Completed cluster: Player markets, shop auto-fill, system auto-market and Government Market

Reviewed behavior includes agriculture/livestock/mining/industrial listings and purchases, shop stock filling, built-in auto-fill, TycoonX-operated `auto_market_tick()`, Government direct sales, tenders, awards, partial delivery, completion rewards and overdue penalties.

Built-in TycoonX automation is intended gameplay, not player botting. Low/high prices, repeated sales, tender wins, ordinary failures and penalties are not automatically abuse.

Open implementation findings:

1. **P0:** reviewed agriculture/livestock/mining sale-setting and purchase paths do not consistently enforce a positive server-valid seller price. A direct known-ID settlement path can potentially bypass the ordinary positive-price listing filter, and a negative total can invert a wallet debit. Industrial settlement has a positive-price guard.
2. **P0:** `shop_auto_fill_cheapest(...)` and reviewed `shop_market_buy_and_store_*` helpers do not visibly bind the supplied destination slot to the authenticated caller before mutation.
3. **P0/P1:** broad market-sensitive own-row writes increase the impact of settlement validation gaps.
4. **P1:** Flutter-authored Government `suspicious` telemetry is useful as a signal but not sole authoritative evidence.
5. **P1:** material tender delivery/penalty consequences should be understandable before or at commitment/award.

Detailed control: `TYCOONX_PLAYER_GOVERNMENT_MARKETS_RELEASE_GATE.md`.

## 8. Completed cluster: Bank, credit, FX, stocks and crypto

Reviewed implementation includes retained legacy banking, current cash/savings, savings accrual, credit quotes and notes, installments, collateral, debt recovery, bankruptcy, FX accounts/trading/cooldowns, Diamond-funded FX slot unlocks, stock/crypto positions and settlement, transaction/price history, automated stock prices and crypto price updates.

Player-facing baseline:

- these are fictional TycoonX simulation systems, not real bank deposits, securities, investments, legal tender or real cryptoassets;
- ordinary interest, borrowing, default, collateral loss, bankruptcy, trading gains and losses are gameplay outcomes, not automatic misconduct;
- current rates, credit criteria, collateral values, cooldowns, fees, spreads, sessions, volatility and price formulas may be changed prospectively for legitimate game reasons, subject to mandatory change/notice/conformity rights;
- ordinary in-game debt does not by itself make unrelated valid purchased Diamonds, one-time 30-Day VIP or Lifetime VIP collateral;
- a valid Diamond spend for an eligible FX slot buys that in-game slot entitlement, not a promise of investment profit;
- TycoonX-operated market-price automation is intended gameplay; and
- modified-client/direct-API state fabrication, wash/circular trading, controlled-account manipulation, unauthorized automation, price-input tampering, replay/race exploitation, exploit laundering and prohibited RMT remain reviewable when evidence supports them.

Open implementation/security findings remain:

1. **P0:** player-owned `user_stocks` rows are directly writable while canonical sale settlement trusts position quantity.
2. **P0:** authenticated users can insert `stock_transactions`, while current automated pricing consumes recent transaction totals as demand/volume input.
3. **P0:** `stock_price_history` insertion is broader than its service-role policy name suggests and current automation consumes recent history.
4. **P0:** market-price mutation helpers including `force_update_stock(...)`, `bulk_update_crypto_prices(...)`, `automate_stock_prices()` and `run_stock_price_automation_safe()` are more broadly executable than ordinary clients require.
5. **P0:** retained legacy `bank_accounts`, `bank_loans` and `bank_profiles` economic fields remain directly writable by owning players while compatibility functions still trust them.
6. **P0:** `new_bank_debt_recovery_resolve_note(...)` exposes arbitrary-note mutation without establishing target-user authorization before every related mutation.
7. **P0/P1:** arbitrary-user bank helper functions expose integrity/private gameplay-finance surfaces that should be internal or caller-bound.
8. **P1:** system-style credit/due/savings processing helpers should be narrowed to trusted execution paths.

Protected paths confirmed include caller binding in canonical stock buy/sell, trusted-role bankruptcy/collateral seizure, caller-bound recovery-asset selling, and the production FX-account zero-balance DELETE safeguard. An earlier preliminary concern that Flutter's direct FX delete bypassed that safeguard is closed under the reviewed policy.

Detailed control: `TYCOONX_BANK_CREDIT_FX_STOCKS_CRYPTO_RELEASE_GATE.md`.

## 9. Completed cluster: Logistics, jobs, competitions and rewards

Current Flutter and read-only production review covered truck sales/rentals, new and loaded fleet delivery, delivery claims, delivery speed-up, rental/expiry behavior, care jobs and automatic care processing, Company job posts/applications, daily tasks, level-up rewards, hourly random rewards, rankings and game-match reward settlement.

Player-facing baseline:

- truck commerce, deliveries, care jobs, Company jobs, TycoonX-operated automatic job processing, leaderboards, competitions and free gameplay rewards are intended game systems;
- a high truck price, large valid salary, repeated delivery, high rank, repeated win or favorable random reward is not automatically misconduct;
- built-in TycoonX automation is not player botting;
- Diamond-funded delivery speed-up purchases the eligible represented in-game acceleration, not a guaranteed profit, delivery result or rank;
- current fees, rental limits, cooldowns, delivery times, job requirements, reward tables and competition/ranking formulas are prospective game parameters rather than permanent promises, subject to mandatory rights; and
- modified-client/direct-API manipulation, sham jobs, controlled-account value funneling, circular truck trades, fabricated progress, win trading, unauthorized bots, cooldown/reward tampering, duplicate/replay/race exploitation, exploit laundering and prohibited RMT remain reviewable when reliable evidence supports them.

### P0: global care automation helpers are too broadly executable

Reviewed SECURITY DEFINER helpers including `_auto_complete_care_jobs_aged(...)` and `_auto_post_care_jobs_batched(...)` are executable by public/anonymous/authenticated roles without an adequate trusted service/cron caller boundary. They can scan or mutate global care-job state. System-wide job automation should be trusted-only; ordinary player wrappers should remain caller-bound.

### P0: arbitrary-user daily-task stock consumption

`_daily_task_consume_user_product_stock(p_user_id, p_product_name, p_quantity)` is broadly executable as SECURITY DEFINER and mutates the supplied user's agriculture/livestock/mining/industrial stock without binding the target to `auth.uid()`. The normal `daily_task_claim(...)` is caller-bound and should remain the public path. Arbitrary-user daily-task helpers should be internal/trusted only.

### P0: hourly reward cooldown tracker is client-writable

Production RLS currently permits a player generic modification of their own `hourly_chart_rewards` row. The reward RPC trusts `next_spin_at` from that row before awarding money, XP, energy or a free gameplay Diamond. Cooldown and reward-control state should be server-owned and ordinary clients should have read-only access.

### P0: level-up reward checkpoint is not visibly monotonic/server-owned

`claim_level_up_rewards()` relies on `profiles.last_level_reward_claimed` to decide which historical levels still pay money/energy. The generic profile UPDATE policy and reviewed trigger set do not visibly prevent an ordinary client from lowering that checkpoint. It should be server-owned and monotonic outside a trusted migration/correction path.

### P0/P1: Company job RLS cross-company authorization/privacy defect

The reviewed `company_job_posts` management policy and `company_job_applications` manager-read policy contain `mm.company_id = mm.company_id`, which is a tautology rather than a correlation to the protected row's Company. This can permit a qualifying manager/HR/CEO of one Company to satisfy the subquery for another Company's rows. The safer RPCs perform Company-specific checks and should remain canonical. RLS must be correlated to the target `company_id`.

### P1: stale Company job overload validation

The richer current Company job-create path used by Flutter clamps salary to a non-negative value and includes current level/research/specialization requirements. Older retained overloads have weaker validation. Unused overloads should be retired or delegate to one authoritative implementation.

### P1: system-wide match/reward settlement should use least privilege

`fm_settle_match_rewards()` is currently executable by authenticated users even though it is a global SECURITY DEFINER settlement sweep. It has useful row-locking and `reward_paid=false` idempotency protection, and reviewed match/team/player tables are not generically writable by ordinary players, so this is not itself proof of a value exploit. It should nevertheless be service/scheduler-only unless there is a documented product reason for public triggering.

### P2: stale legacy Logistics compatibility dependency

`finance_v2_start_logistics_job(...)` currently delegates to `public.rpc_logistics_start_job(...)`, while the read-only production lookup found no current function by that name. Current new Logistics paths are separate. Retire or repair this stale compatibility path rather than creating an implied promise to keep unsupported legacy behavior.

Detailed control: `TYCOONX_LOGISTICS_JOBS_COMPETITIONS_RELEASE_GATE.md`.

## 10. Player-facing synchronized Terms notices

The following route-gated Terms clarifications are synchronized in English plus all 25 target locales:

1. `GameplayEconomyRuleNotice.tsx`
2. `CompanyCommerceRuleNotice.tsx`
3. `UnionGovernanceRuleNotice.tsx`
4. `ArtBeggingRuleNotice.tsx`
5. `PlayerGovernmentMarketRuleNotice.tsx`
6. `BankCreditMarketsRuleNotice.tsx`
7. `LogisticsJobsCompetitionsRuleNotice.tsx`

They display only on the canonical Terms route and localized Terms routes. Arabic uses RTL and the required Spanish, French, Portuguese and Chinese locale variants remain separately localized.

## 11. Current German-law boundary

German BGB § 307 remains relevant because unclear or incomprehensible standard wording can contribute to an unreasonable disadvantage. Gameplay rules must therefore explain intended game systems and exceptions clearly.

German digital-product conformity/remedy rules, including BGB §§ 327d and 327i where applicable, remain separate from gameplay discipline. A genuine backend defect cannot simply be relabeled ordinary market, delivery, job or competition risk to contract around mandatory remedies.

For qualifying continuous digital-product contracts, BGB § 327r can condition changes beyond those necessary to maintain conformity. A broad balancing clause is therefore not a waiver of any required valid reason, no-extra-cost condition, clear information, advance durable-medium notice, termination right or other statutory consequence that applies to the particular change.

## 12. Remaining deployed systems for implementation-first review

The next active inventory is Social/UGC:

- Company and Union chat, executive/private chat and mentions;
- social/home rooms and avatars;
- music, books and remaining user-submitted or shareable content;
- impersonation, scams, phishing, external-payment solicitation and prohibited real-money trading signals;
- moderation, reporting, appeals and statements of reasons where applicable;
- copyright/user-content licensing and repeat infringement handling;
- privacy/access-control boundaries for chat/history/content; and
- evidence quality for moderation and sanctions.

## 13. Next code-first gameplay legal audit order

Completed substantive clusters:

1. Company governance/value movement.
2. Company supply/export/tender commerce.
3. Union contribution exception.
4. Union treasury/governance.
5. Art/Begging.
6. Player markets/shop auto-fill/system auto-market/Government Market.
7. Bank/credit/FX/stocks/crypto.
8. Logistics/jobs/competitions/rewards.

Continue next with **Social/UGC**, derived from the deployed client and production server authority rather than generic game-policy templates.
