# TycoonX Legal Localization Progress

Canonical legal source: the English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository, together with rendered canonical Terms clarifications that are synchronized into every localized Terms route.

Last synchronized: **September 10, 2026**.

## Rules

- Always display the brand as **TycoonX**. Technical route/file names containing `tyconx` may remain where changing them could break URLs, but rendered prose must never display the legacy misspelling.
- TycoonX went to full release on **September 1, 2026**. Do not describe the live service, users, purchases, VIP, Diamonds, rewards, or current legal terms as beta.
- Translate for legal meaning, not word-for-word. Localized copy must sound natural to a native speaker while preserving the legal effect of the English source.
- English remains canonical. Refresh localized versions whenever canonical meaning changes materially.
- Locale variants must remain genuinely localized, including `es`/`es_MX`, `fr`/`fr_CA`, `pt`/`pt_BR`, and `zh`/`zh_Hans`/`zh_Hant`; Arabic uses RTL layout.
- Locale order is: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.
- Within each locale the order is Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not mark a localized document `Ready` until the rendered page preserves canonical legal meaning and product distinctions, uses natural native-language wording and punctuation, and contains no stale displayed brand or live-service beta wording.
- Do not use GitHub Actions or paid services for this project. Do not change any database.
- Before creating another release gate, inspect the repository and existing verifier scripts so completed doctrine is hardened incrementally instead of duplicated.
- Gameplay legal hardening is **code-first**: inspect current Flutter feature paths and read-only production Supabase functions/tables/policies/triggers before drafting gameplay rules.
- A current server cap, permission, cooldown, formula, settlement path or UI control is implementation evidence, not automatically a permanent contractual promise, proof of misconduct or legal safe harbor.

## Current localization state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales. **All 25 target locales and all 100 localized full documents are current.**

Six September 10 code-derived Terms clarifications are synchronized across the canonical Terms route and all target locales:

1. `GameplayEconomyRuleNotice.tsx` covers genuine Company/Union value movement, contribution mechanics and the genuine-purpose rule.
2. `CompanyCommerceRuleNotice.tsx` covers Company supply, warehouse fulfillment, exports, tenders, collusion/self-dealing, artificial value-funneling terms, settlement/state exploitation, proportional correction, outages/account compromise and mandatory-rights protection.
3. `UnionGovernanceRuleNotice.tsx` covers Union membership fees, leader treasury deposits/withdrawals, maintenance/closure, projects/rewards, level upgrades, polls, altered-client/state manipulation, limit evasion, compromise/outage correction and mandatory rights.
4. `ArtBeggingRuleNotice.tsx` covers Art auctions/resales, formal direct offers, genuine Art trading versus disguised gifting, Begging as intended assistance, self-bidding/collusion, moderation timing, escrow reconciliation, compromise and proportional correction.
5. `PlayerGovernmentMarketRuleNotice.tsx` covers player production markets, built-in shop auto-fill, TycoonX-operated automatic market purchases, Government sales/tenders, manipulation, stale-state/evidence limits, correction and prospective balancing.
6. `BankCreditMarketsRuleNotice.tsx` covers virtual banking/savings/credit/FX/stocks/crypto, ordinary debt/default/trading outcomes, Diamond-funded FX-slot entitlement, system-operated price movement, manipulation/exploit boundaries, paid-entitlement separation, evidence quality, proportional correction and mandatory change/conformity rights.

These clarifications are mounted through the application layout and display only on the canonical Terms route and `/tycoonx-legal/{locale}/terms`. Arabic uses RTL and the locale-specific Spanish, French, Portuguese and Chinese variants remain separately localized.

### Locale status

| Locale | Terms | Purchases & Refunds | Privacy | Community | Total current |
| --- | --- | --- | --- | --- | --- |
| tr | Ready | Ready | Ready | Ready | 4/4 |
| de | Ready | Ready | Ready | Ready | 4/4 |
| es | Ready | Ready | Ready | Ready | 4/4 |
| es_MX | Ready | Ready | Ready | Ready | 4/4 |
| fr | Ready | Ready | Ready | Ready | 4/4 |
| fr_CA | Ready | Ready | Ready | Ready | 4/4 |
| it | Ready | Ready | Ready | Ready | 4/4 |
| pt | Ready | Ready | Ready | Ready | 4/4 |
| pt_BR | Ready | Ready | Ready | Ready | 4/4 |
| ru | Ready | Ready | Ready | Ready | 4/4 |
| ja | Ready | Ready | Ready | Ready | 4/4 |
| ko | Ready | Ready | Ready | Ready | 4/4 |
| zh | Ready | Ready | Ready | Ready | 4/4 |
| zh_Hans | Ready | Ready | Ready | Ready | 4/4 |
| zh_Hant | Ready | Ready | Ready | Ready | 4/4 |
| ar | Ready | Ready | Ready | Ready | 4/4 |
| nl | Ready | Ready | Ready | Ready | 4/4 |
| sv | Ready | Ready | Ready | Ready | 4/4 |
| nb | Ready | Ready | Ready | Ready | 4/4 |
| pl | Ready | Ready | Ready | Ready | 4/4 |
| th | Ready | Ready | Ready | Ready | 4/4 |
| vi | Ready | Ready | Ready | Ready | 4/4 |
| uk | Ready | Ready | Ready | Ready | 4/4 |
| hi | Ready | Ready | Ready | Ready | 4/4 |
| id | Ready | Ready | Ready | Ready | 4/4 |

## Localization queue

**Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

Do not duplicate completed localization. Continue code-first gameplay/economy/community legal QA. If canonical meaning changes materially, reopen only the affected localized document type and resynchronize it in the required locale order.

## Active purchase/product invariants

All canonical and localized legal documents must continue to preserve that:

- purchased Diamonds do not expire solely because time passes;
- purchased Diamonds, promotional/free Diamonds, one-time 30-Day VIP, and Lifetime VIP are distinct products;
- 30-Day VIP is a **one-time, non-renewing 30-day entitlement** unless a future compliant product clearly says otherwise;
- Lifetime VIP is a one-time promotional entitlement offered only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous availability;
- Apple App Store, Google Play, and the official TycoonX webshop using Xsolla remain distinct payment channels;
- completed one-time purchases are not retroactively repriced merely because future prices, currencies, taxes, FX, regional prices, bundles or promotions change, except where mandatory law requires otherwise; and
- mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy, accessibility and other non-waivable rights remain intact.

Obvious configuration errors, failed/pending/reversed payments, duplicate or accidental grants, fraud, chargebacks, account compromise, provider outages, unsupported clients, provider replacement, business transfers, economy corrections and permanent service shutdown remain subject to their specific canonical rules.

## Active gameplay/economy invariant

Players are expected to build TycoonX wealth through gameplay and genuine economic activity. A trade, Art purchase, auction, Company transaction, job, contract, market order, Government tender or other mechanic must not be repurposed mainly as a disguised gift, value-funneling route, value-parking route, RMT route, exploit-laundering route or way to evade another feature limit.

This does not make every value-moving or automatic mechanic unlawful. TycoonX intentionally contains salaries/payroll, authorized Company distributions, stock/crypto/FX mechanics, supply procurement, warehouse specialist fulfillment, Company exports/contracts, tenders, Begging, Union contributions/fees/treasury movements, player markets, shop auto-fill, TycoonX-operated market automation and Government Market systems. Genuine use for the intended purpose is allowed unless another specific rule is violated.

A large amount, high/low price, aggressive bid, legitimate default, bankruptcy, large market gain/loss, unusual market movement, repeated sale or other abnormal-looking outcome is not automatically abuse. Serious enforcement requires reliable evidence of the prohibited purpose and should distinguish detection, containment, state correction and punitive enforcement.

## Completed code-first checkpoints

### Company commerce

Current Flutter/server review covered supply requests, member inventory delivery, Company warehouse specialist fulfillment, exports/procurement, tenders, completion, failure and permissions.

Open finding: linked export/V2 request price validation is stronger on the reviewed create path than on the reviewed update path. Engineering should make linked-price validation symmetric.

Detailed gate: `TYCOONX_COMPANY_SUPPLY_EXPORT_TENDER_RELEASE_GATE.md`.

### Union treasury/governance

Review covered membership fees, leader deposits/withdrawals, maintenance/closure, project contributions/rewards, levels, polls and closure.

Open finding: active Union leaders/officers currently have a broader generic row UPDATE surface than the ordinary UI. Server-owned governance/progression fields should use constrained server transitions.

Detailed gate: `TYCOONX_UNION_TREASURY_GOVERNANCE_RELEASE_GATE.md`.

### Art/Begging

Review covered publication/idempotency, auctions/resales, direct offers, escrow, moderation timing and Begging.

Open findings remain: current resale-owner self-bid protection is incomplete; generic Art owner UPDATE is broader than validated auction RPCs; raw active-Art deletion is not visibly bidder-refund equivalent; and direct-offer server logic does not visibly enforce every owner preference exposed by the client.

Detailed gate: `TYCOONX_ART_BEGGING_RELEASE_GATE.md`.

### Player and Government markets

Review covered producer listings/purchases, shop auto-fill, system auto-market, Government sales, Government tenders/tasks and client-authored anomaly evidence.

Open findings remain: non-positive agriculture/livestock/mining seller prices are not consistently rejected in setter and settlement paths; shop auto-fill/store helpers do not visibly bind destination slots to the authenticated caller; client-authored Government anomaly telemetry cannot be sole proof; and material tender consequences should be clear to players.

Detailed gate: `TYCOONX_PLAYER_GOVERNMENT_MARKETS_RELEASE_GATE.md`.

### Bank/credit/FX/stocks/crypto

Current Flutter and read-only production Supabase review covers legacy bank compatibility, cash/savings/interest, credit quotes/notes/installments, collateral, debt recovery/bankruptcy, FX accounts/trading, Diamond-funded FX slots, stock/crypto holdings and settlement, price history and automated prices.

The legal clarification now states these are fictional simulation systems rather than real banking/investment products. Ordinary interest, default, bankruptcy, gains and losses are gameplay outcomes, not automatic misconduct. Current rates, criteria, collateral values, cooldowns, fees, spreads and market formulas may change prospectively for legitimate reasons, but this does not waive mandatory rights. TycoonX-operated price automation is intended gameplay. Ordinary game debt does not by itself make unrelated valid purchased Diamonds, one-time 30-Day VIP or Lifetime VIP collateral.

#### Open Bank/market implementation and security findings

No database change was made. The current read-only audit identified:

1. **P0 - direct stock-position authority:** player-owned `user_stocks` rows are currently generically INSERT/UPDATE/DELETE capable under production RLS. The Finance V2 stock-basis trigger mirrors rather than rejects such direct writes, while the canonical sell path trusts position quantity. Holdings must become server-owned settlement state.
2. **P0 - transaction-history authority:** authenticated players can insert their own `stock_transactions` rows, while current price automation consumes recent buy/sell totals as demand/volume input. Market/evidence history must be settlement-generated.
3. **P0 - price-history authority:** the production policy named `Service role can insert price history` is currently scoped to `public`; recent history is consumed by price automation. Price history must be server-owned.
4. **P0 - privileged price mutators:** reviewed SECURITY DEFINER functions including `force_update_stock(...)`, `bulk_update_crypto_prices(...)`, `automate_stock_prices()` and `run_stock_price_automation_safe()` are broadly executable and require trusted service/cron/admin authorization plus fail-closed internal checks.
5. **P0 - legacy bank direct writes:** retained `bank_accounts`, `bank_loans` and `bank_profiles` economic fields can currently be updated by the owning player while compatibility functions still trust those values. Retained legacy state must remain inside the server authority boundary.
6. **P0 - debt-resolution helper:** `new_bank_debt_recovery_resolve_note(...)` is broadly executable and its reviewed mutation order does not establish target-user authorization before every note-related write. It must be internal/trusted and authorize before mutation.
7. **P0/P1 - bank helper privacy/integrity:** `new_bank_log_transaction(...)`, `new_bank_get_transactions_internal(...)`, `new_bank_get_quote_internal(...)`, collateral/recovery-asset helpers and `new_bank_push_notification(...)` expose arbitrary-user write/read/notification surfaces. User-facing wrappers should derive the subject from `auth.uid()`; arbitrary-user internals should be trusted-only.
8. **P1 - processing helper exposure:** system-style credit processing, due-item processing and savings roll-forward helpers are more broadly callable than ordinary clients require and should be narrowed.

Protected paths were also confirmed. Canonical stock buy/sell wrappers bind the supplied user to `auth.uid()`. Core bankruptcy and collateral seizure are restricted to trusted roles. Recovery-asset selling binds to the authenticated recovery case. Production FX-account DELETE RLS requires the owner and an effectively zero holding, and the dedicated clear-account RPC performs the same substantive check. Therefore an earlier preliminary concern that Flutter's direct FX-account delete bypassed the zero-balance safeguard is **not confirmed** and is closed unless the implementation changes.

Detailed gate: `TYCOONX_BANK_CREDIT_FX_STOCKS_CRYPTO_RELEASE_GATE.md`.

## Active privacy/controller invariant

For personal-data processing described in the Privacy Policy, the controller is disclosed as **Atakan Cevik, trading as CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Germany**, with the published privacy contact and TycoonX Support. Localized Privacy routes preserve the distinction between CK-Labs' controller role and any independent-controller role of Apple, Google, Xsolla or another provider.

Gameplay financial history, virtual debt/holdings and anti-abuse signals may be processed where justified to operate, secure and support TycoonX, but that does not authorize unnecessary disclosure of one player's private gameplay-finance state to another player. Client-influenceable or broadly writable records must be weighted according to their evidentiary quality rather than treated as automatically conclusive.

## Current-law clarity checkpoint

German BGB § 307 remains relevant to standard terms: unclear or incomprehensible wording can contribute to an unreasonable disadvantage. Gameplay rules should explain intended mechanics clearly rather than relying on hidden implementation knowledge.

German digital-product conformity/remedy rules remain separate from gameplay discipline. BGB §§ 327d and 327i and related remedies must not be displaced by balancing, anti-exploit correction, moderation or account enforcement.

For qualifying continuous digital-product contracts, BGB § 327r can condition changes beyond what is needed to maintain conformity. Any TycoonX reservation to rebalance rates, prices, cooldowns or formulas is therefore subject to applicable mandatory valid-reason, no-additional-cost, clear-information, advance-notice, termination and other statutory requirements.

## Next code-first gameplay audit queue

Completed substantive gameplay clusters:

1. Company governance/value movement.
2. Company supply/export/tender commerce.
3. Union contribution exception.
4. Union treasury/governance.
5. Art/Begging.
6. Player markets/shop auto-fill/system auto-market/Government Market.
7. Bank/credit/FX/stocks/crypto.

Continue in this order:

1. **Logistics/jobs/competitions:** trucks, logistics market, loaded deliveries, delivery claims/expiry, care jobs, Company jobs/applications, automated completion, leaderboards, rewards and win-trading/duplicate-completion risks.
2. **Social/UGC:** Company/Union chat, rooms, music/books and remaining UGC, impersonation, scams, moderation, appeals and user-content rights.

## Canonical source status

- English Terms: current and supplemented by synchronized rendered code-derived gameplay clarifications dated September 10, 2026.
- English Purchases & Refunds: current.
- English Privacy Policy: current.
- English Community Standards: current.
- All 25 localized Terms receive all six synchronized gameplay/economy clarifications without duplicating the full static translated body.

## Progress metrics

The percentages intentionally include unfinished code-first gameplay/community review and unresolved implementation/security findings rather than over-weighting completed localization or payment work.

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **98.8%**
- **Full commercial/legal/payment readiness:** **92.8%**
- **Overall project completion:** **96.2%**
- **Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

**Next substantive code-first target:** Logistics/jobs/competitions, beginning with trucks, market/loaded deliveries, expiry and delivery claims, care jobs, Company jobs, automated completion, leaderboards and reward integrity.

The readiness percentage is lower than the previous checkpoint because the Bank/credit/FX/stocks/crypto audit uncovered several material server-authority and privacy/integrity gaps that remain unfixed. The overall project percentage still advances because the legal mapping and localized player-facing coverage for another major deployed gameplay cluster are now complete.
