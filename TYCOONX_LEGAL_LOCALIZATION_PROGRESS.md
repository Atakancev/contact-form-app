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
- Before creating another release gate, inspect the repository tree and existing verifier scripts so completed doctrine is hardened incrementally instead of duplicated under a new filename.
- Gameplay legal hardening must now be **code-first**: inspect the current Flutter feature path and read-only Supabase tables/functions/triggers before drafting a new gameplay rule. Do not invent generic prohibitions for mechanics that do not exist.
- A current server cap, permission, cooldown, formula, or UI control is implementation evidence, not automatically a permanent contractual promise or a legal safe harbor.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales. **All 25 target locales and all 100 localized full documents are current.**

The September 10 gameplay clarification is rendered on the canonical Terms route and all 25 localized Terms routes through `GameplayEconomyRuleNotice.tsx`, so the newly clarified gameplay meaning is synchronized without duplicating the complete static localized Terms bodies.

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

Future runs must not duplicate completed localization. Continue with code-first gameplay/economy/community legal QA, stale-brand/stale-release-status checks, canonical-English drift checks, duplicate-doctrine cleanup, current-law/platform verification, and remaining commercial/payment maintenance. If canonical English meaning changes materially, reopen only the affected localized document type and resynchronize it in the required locale order.

## Active legal and product invariants

All canonical and localized legal documents must continue to preserve that:

- purchased Diamonds do not expire solely because time passes;
- purchased Diamonds, promotional/free Diamonds, one-time 30-Day VIP, and Lifetime VIP are distinct products;
- 30-Day VIP is a **one-time, non-renewing 30-day entitlement** unless a future compliant product clearly says otherwise;
- Lifetime VIP is a one-time promotional entitlement offered only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous availability;
- Apple App Store, Google Play, and the official TycoonX webshop using Xsolla remain distinct payment channels;
- completed one-time purchases are not retroactively repriced merely because future prices, currencies, taxes, FX, regional prices, bundles, or promotions change, except where mandatory law requires otherwise; and
- mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy, accessibility, and other non-waivable rights remain intact.

Obvious configuration errors, failed/pending/reversed payments, duplicate or accidental grants, fraud, chargebacks, account compromise, provider outages, unsupported clients, provider replacement, business transfers, economy corrections, and permanent service shutdown remain subject to their specific canonical rules.

## Active gameplay/economy invariant

Players are expected to build their own TycoonX wealth through gameplay and genuine economic activity. A trade, art purchase, auction, Company transaction, job, contract, market order, or other mechanic must not be used mainly as a disguised gift, donation, wealth-funneling route, value-parking route, real-money-trading route, exploit-laundering route, or way to evade another feature limit.

That rule does **not** mean every mechanic that transfers value is prohibited. TycoonX includes mechanics expressly designed to move or distribute in-game value. Current code-first review confirms Company salaries/payroll, authorized Company-treasury withdrawals, dividends, IPO subscriptions, buybacks, secondary offerings, tenders, and Union Project contributions as real deployed systems. Genuine use of such a mechanic for its intended gameplay purpose is allowed unless another specific rule is violated.

Begging and an available Union Project donation feature are expressly permitted assistance/contribution mechanics within their own stated purpose and limits. Gameplay mechanics that are not designed for gifts, donations, contributions, or assistance are not substitute donation channels.

A high price, large salary, generous dividend, aggressive tender bid, unusual Company financing decision, or large Union contribution is not automatically abuse. Serious enforcement requires reasonable evidence of the prohibited purpose and must distinguish detection, containment, state correction, and punitive account enforcement.

## September 10, 2026 code-first gameplay/Supabase checkpoint

This run deliberately shifted from payment-provider hardening to actual game implementation.

Read-only inspection of the production TycoonX Supabase project and the current `Atakancev/terrax-flutter` repository confirmed deployed server/client paths for Company salaries, payroll, treasury withdrawals, IPOs, dividends, buybacks, secondary offerings, Company tenders, Union Project donations, and many additional economy systems.

The audit found a concrete legal mismatch: the previous transfer notice could be read to say that Begging was the only lawful donation/assistance mechanic, while production TycoonX also has `donate_union_project(...)`, an expressly designed Union Project contribution mechanic. The current backend records `project_donation`, applies a current cumulative per-user contribution ceiling of 50% of project target, and can distribute configured project-completion rewards to active Union members.

The canonical Terms were therefore clarified on September 10, 2026 so that:

- Begging **or another feature expressly designed for contributions/assistance**, including an available Union Project donation feature, can be used within that feature's rules;
- other mechanics still cannot be repurposed mainly as disguised donation or wealth-funneling channels;
- legitimate Company salary/payroll, authorized treasury withdrawal, dividend, IPO, buyback, secondary-offering, tender, and Union Project activity is not prohibited merely because value changes hands;
- sham salaries/distributions, collusive or manipulated tender bidding, circular Company/stock transactions, coordinated self-dealing, alternative-account limit evasion, exploit abuse, and RMT remain reviewable when supported by reasonable evidence; and
- technical server caps/permissions/cooldowns are not permanent contractual promises or automatic safe harbors.

The same meaning is rendered naturally in English plus all 25 target locales through `app/tycoonx-legal/GameplayEconomyRuleNotice.tsx`, including proper Arabic RTL handling. `scripts/verify-tycoonx-genuine-transfers.mjs` now regression-checks the canonical wording, all locales, layout integration, and the concrete deployed function map.

Internal implementation/legal map: `TYCOONX_CODE_FIRST_GAMEPLAY_LEGAL_MAP.md`.

No database data or schema was changed during the audit.

## Active privacy/controller invariant

For the TycoonX personal-data processing described in the Privacy Policy, the controller is disclosed directly as **Atakan Cevik, trading as CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Germany**, with the published privacy contact and TycoonX Support. All 25 localized Privacy routes preserve that meaning and the distinction between CK-Labs' controller role and any independent-controller role of Apple, Google, Xsolla, or other providers.

## Current-law clarity checkpoint

German BGB § 307 remains relevant to player-facing standard terms: unclear or incomprehensible standard wording can contribute to an unreasonable disadvantage. Gameplay rules should therefore identify authorized mechanics clearly enough that a legitimate feature is not made to look prohibited merely because the implementation exception was known only internally.

Mandatory German/EU digital-product rights remain separate from gameplay discipline. Gameplay balancing or enforcement must not be used as a shortcut to waive mandatory conformity, update, cure, termination, price-reduction, refund, liability, or other non-waivable rights.

## Next code-first gameplay audit queue

With the first Company/Union value-transfer mismatch corrected, the next substantive audits should continue from the deployed implementation rather than generic policy templates:

1. **Company export/supply/tender lifecycle and authority:** supply requests, export offers, warehouse deliveries, CEO/CFO/COO/manager permissions, cancellation/failure paths, and tender completion.
2. **Union treasury/governance:** leader deposits/withdrawals, membership fees, project rewards, Union closure, polls, level upgrades, and alternate-account limit evasion.
3. **Art/Begging:** auction bids, direct offers, duplicate publication, moderation, genuine art purchases, intended assistance, and collusion/self-bidding.
4. **Player and Government markets:** listings, auto-fill/auto-market, price manipulation, coordinated trading, stale prices, delivery, and award correction.
5. **Bank/credit/FX/stocks/crypto:** loans, collateral, debt recovery, interest, bankruptcy, FX cooldowns, market-price automation, and manipulation/exploit boundaries.
6. **Logistics/jobs/competitions:** trucks, deliveries, care jobs, Company jobs, automated completion, leaderboards, rewards, and win-trading/duplicate-completion risks.
7. **Social/UGC:** Company/Union chat, rooms, art/music/books, impersonation, scams, moderation, appeals, and user-content rights.

## Canonical source status

- English Terms: materially refreshed **September 10, 2026** for code-derived Company, tender, Union Project, contribution, and genuine-transaction clarity; September 5 RMT rules remain in force.
- English Purchases & Refunds: current; official-purchase versus player/off-platform-deal boundary remains in force.
- English Privacy Policy: current; direct GDPR controller identity/contact transparency and transfer/RMT privacy safeguards remain in force.
- English Community Standards: current; age-safety, UGC, moderation, reporting, blocking, review, scam, and safety protections remain in force.

## Progress metrics

The earlier near-100% estimate over-weighted payment/platform work. These percentages are intentionally recalibrated to include the still-incomplete code-first gameplay/economy legal audit.

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **96.5%**
- **Full commercial/legal/payment readiness:** **92.5%**
- **Overall project completion:** **94.5%**
- **Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

**Next substantive code-first target:** Company export/supply/tender lifecycle and CEO/CFO/COO/manager authority, beginning from the current Flutter RPC calls and read-only production Supabase function definitions.

Historical synchronization and older payment/platform release-gate checkpoints remain available in Git history. This tracker intentionally emphasizes current state, active invariants, and the implementation-driven next queue so future runs continue without duplicating completed work.