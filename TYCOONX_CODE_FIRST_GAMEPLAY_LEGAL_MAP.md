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

## 8. Completed legal mapping: Bank/credit/FX/stocks/crypto

Reviewed implementation includes retained legacy banking, current cash/savings, savings accrual, credit quotes and notes, installments, collateral, debt recovery, bankruptcy, FX accounts/trading/cooldowns, Diamond-funded FX slot unlocks, stock/crypto positions and settlement, transaction/price history, automated stock prices and crypto price updates.

Player-facing baseline:

- these are fictional TycoonX simulation systems, not real bank deposits, securities, investments, legal tender or real cryptoassets;
- ordinary interest, borrowing, default, collateral loss, bankruptcy, trading gains and losses are gameplay outcomes, not automatic misconduct;
- current rates, credit criteria, collateral values, cooldowns, fees, spreads, sessions, volatility and price formulas may be changed prospectively for legitimate game reasons, subject to mandatory change/notice/conformity rights;
- ordinary in-game debt does not by itself make unrelated valid purchased Diamonds, one-time 30-Day VIP or Lifetime VIP collateral;
- a valid Diamond spend for an eligible FX slot buys that in-game slot entitlement, not a promise of investment profit;
- TycoonX-operated market-price automation is intended gameplay; and
- modified-client/direct-API state fabrication, wash/circular trading, controlled-account manipulation, unauthorized automation, price-input tampering, replay/race exploitation, exploit laundering and prohibited RMT remain reviewable when evidence supports them.

### P0: `user_stocks` is directly writable

Production RLS currently permits players to INSERT, UPDATE and DELETE their own `user_stocks` rows. The Finance V2 stock-basis trigger mirrors those rows rather than rejecting non-settlement writes. The canonical sell path then trusts position quantity for wallet settlement. This creates a material risk that a fabricated positive position can be monetized through the normal sale path.

Engineering priority: make player positions server-owned and mutable only through trusted buy/sell, IPO, corporate-action, migration or correction transitions.

### P0: client-inserted `stock_transactions` can affect price automation

Authenticated players can currently insert their own `stock_transactions` rows. The reviewed automated stock-price logic consumes recent buy/sell totals as market demand/volume input. Table constraints validate shape but do not prove actual wallet/position settlement.

Engineering priority: transaction history used for economics or enforcement must be created by and linked to canonical settlement, not generic client INSERT.

### P0: public `stock_price_history` insertion can affect momentum

The production INSERT policy named `Service role can insert price history` is currently scoped to `public` with an unrestricted check, and anon/authenticated roles have INSERT privileges. The price automation consumes recent history for momentum/reference calculations.

Engineering priority: make price history server-owned and written only by trusted pricing/corporate-action/migration paths.

### P0: market-price mutation helpers are publicly executable

Reviewed SECURITY DEFINER functions `force_update_stock(...)`, `bulk_update_crypto_prices(...)`, `automate_stock_prices()` and `run_stock_price_automation_safe()` currently expose EXECUTE to public/anonymous/authenticated roles without a sufficient internal trusted-caller boundary. `cleanup_stock_price_history()` is also broadly executable maintenance authority.

Engineering priority: service/cron/admin-only execution plus internal fail-closed caller checks.

### P0: retained legacy bank economic state is client-writable

Production RLS currently permits users to UPDATE their own legacy `bank_accounts`, `bank_loans` and `bank_profiles`. Those rows contain principal/rates/due state, loan state and credit score, and retained compatibility functions still rely on them. Finance V2 legacy triggers mirror the state but do not make it immutable.

Engineering priority: while compatibility paths remain callable, value-bearing legacy bank fields must be server-owned and mutated only by narrow server transitions.

### P0: debt-resolution helper exposes arbitrary-note mutation

`new_bank_debt_recovery_resolve_note(p_note_id, p_user_id)` is currently broadly executable as SECURITY DEFINER. Its reviewed body updates installments and pledged collateral by note ID before the later note update applies a user filter.

Engineering priority: service/internal-only execution and authorization before every mutation.

### P0/P1: internal bank helpers expose integrity and private game-finance data

The read-only review found broad execution on helpers including:

- `new_bank_log_transaction(...)`, allowing authoritative-looking transaction insertion for a supplied user;
- `new_bank_get_transactions_internal(...)`, reading a supplied user's combined bank history;
- `new_bank_get_quote_internal(...)`, exposing/processing wallet, debt, savings, FX, collateral and credit-related state for a supplied user;
- `new_bank_get_collateral_candidates(...)` and `new_bank_get_professor_recovery_assets(...)`, exposing supplied-user asset/value details; and
- `new_bank_push_notification(...)`, capable of creating official-looking bank notifications for a supplied player when its allowed event type is used.

Public/system-style processing helpers such as `new_bank_process_credit_for_user(...)`, `new_bank_process_due_items()` and `new_bank_roll_forward_savings(...)` should also be narrowed to the trusted roles actually required.

Engineering priority: separate user-facing wrappers that derive the subject from `auth.uid()` from internal arbitrary-user helpers that are service-only. Ledger/event creation must come from trusted settlement paths. A convenience push or client-influenceable row must never be treated as sole proof of default, seizure or cheating.

### Protected paths confirmed during the same review

The audit also confirmed useful controls that should be preserved:

- canonical `buy_stock(...)` and `sell_stock(...)` bind the supplied player ID to `auth.uid()`;
- `new_bank_debt_recovery_bankrupt_user(...)` and `new_bank_seize_collateral(...)` are restricted to trusted roles;
- `new_bank_sell_debt_recovery_asset(...)` authenticates and binds the active recovery case to the caller;
- current FX-account DELETE RLS requires the authenticated owner and an effectively zero holding; and
- `new_bank_fx_clear_account(...)` independently checks ownership and near-zero balance.

This last point corrects an earlier preliminary concern: the current Flutter direct FX delete does **not** by itself bypass the zero-balance rule under the production policy reviewed on September 10, 2026.

Detailed control: `TYCOONX_BANK_CREDIT_FX_STOCKS_CRYPTO_RELEASE_GATE.md`.

## 9. Player-facing synchronized Terms notices

The following route-gated Terms clarifications are synchronized in English plus all 25 target locales:

1. `GameplayEconomyRuleNotice.tsx`
2. `CompanyCommerceRuleNotice.tsx`
3. `UnionGovernanceRuleNotice.tsx`
4. `ArtBeggingRuleNotice.tsx`
5. `PlayerGovernmentMarketRuleNotice.tsx`
6. `BankCreditMarketsRuleNotice.tsx`

They display only on the canonical Terms route and localized Terms routes. Arabic uses RTL and the required Spanish, French, Portuguese and Chinese locale variants remain separately localized.

## 10. Current German-law boundary

German BGB § 307 remains relevant because unclear or incomprehensible standard wording can contribute to an unreasonable disadvantage. Gameplay rules must therefore explain intended game systems and exceptions clearly.

German digital-product conformity/remedy rules, including BGB §§ 327d and 327i where applicable, remain separate from gameplay discipline. A genuine backend defect cannot simply be relabeled ordinary market or credit risk to contract around mandatory remedies.

For qualifying continuous digital-product contracts, BGB § 327r can condition changes beyond those necessary to maintain conformity. A broad balancing clause is therefore not a waiver of any required valid reason, no-extra-cost condition, clear information, advance durable-medium notice, termination right or other statutory consequence that applies to the particular change.

## 11. Remaining deployed systems for implementation-first review

The next active inventory is:

- trucks, logistics-market listings, loaded deliveries, delivery claims, expiry and compensation/correction paths;
- care jobs, Company jobs, applications, salaries and automated completion;
- leaderboards, competitions, event rewards and ranking systems;
- Company/Union chat, rooms and social features;
- music/books and remaining UGC; and
- impersonation, scams, moderation, appeals and user-content rights across those social surfaces.

## 12. Next code-first gameplay legal audit order

Completed substantive clusters:

1. Company governance/value movement.
2. Company supply/export/tender commerce.
3. Union contribution exception.
4. Union treasury/governance.
5. Art/Begging.
6. Player markets/shop auto-fill/system auto-market/Government Market.
7. Bank/credit/FX/stocks/crypto.

Continue in this order:

1. **Logistics/jobs/competitions:** trucks, deliveries, care jobs, Company jobs, automated completion, leaderboards, rewards and win-trading/duplicate-completion risks.
2. **Social/UGC:** Company/Union chat, rooms, music/books and remaining UGC, impersonation, scams, moderation, appeals and user-content rights.

Future runs should continue from this deployed implementation inventory rather than generic game-policy templates.
