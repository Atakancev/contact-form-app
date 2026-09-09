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
- Before creating another release gate, inspect the repository tree and existing verifier scripts so completed doctrine is hardened incrementally instead of duplicated.
- Gameplay legal hardening is **code-first**: inspect current Flutter feature paths and read-only production Supabase functions/tables/triggers before drafting gameplay rules. Do not invent generic prohibitions for mechanics that do not exist.
- A current server cap, permission, cooldown, formula, overload, settlement path or UI control is implementation evidence, not automatically a permanent contractual promise or legal safe harbor.

## Current localization state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales. **All 25 target locales and all 100 localized full documents are current.**

Two September 10 code-derived Terms clarifications are now synchronized across the canonical Terms route and all target locales:

1. `GameplayEconomyRuleNotice.tsx` covers genuine Company/Union value movement, contribution mechanics and the genuine-purpose rule.
2. `CompanyCommerceRuleNotice.tsx` covers Company supply, warehouse fulfillment, exports, tenders, collusion/self-dealing, artificial value-funneling prices, settlement/state exploitation, proportional correction, outages/account compromise and mandatory-rights protection.

`CompanyCommerceRuleNotice.tsx` is mounted through the root layout and route-gated to the canonical `/tyconx-terms-of-service` route plus `/tycoonx-legal/{locale}/terms`, including RTL Arabic and locale-specific Spanish, French, Portuguese and Chinese variants.

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
- completed one-time purchases are not retroactively repriced merely because future prices, currencies, taxes, FX, regional prices, bundles, or promotions change, except where mandatory law requires otherwise; and
- mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy, accessibility, and other non-waivable rights remain intact.

Obvious configuration errors, failed/pending/reversed payments, duplicate or accidental grants, fraud, chargebacks, account compromise, provider outages, unsupported clients, provider replacement, business transfers, economy corrections, and permanent service shutdown remain subject to their specific canonical rules.

## Active gameplay/economy invariant

Players are expected to build TycoonX wealth through gameplay and genuine economic activity. A trade, art purchase, auction, Company transaction, job, contract, market order, or other mechanic must not be repurposed mainly as a disguised gift, donation, wealth-funneling route, value-parking route, RMT route, exploit-laundering route, or way to evade another feature limit.

This does **not** make every mechanic that transfers value unlawful. TycoonX intentionally contains salaries/payroll, authorized Company distributions, stock mechanics, Company supply procurement, warehouse specialist fulfillment, Company-to-Company exports/contracts, tenders, Begging and Union Project contributions. Genuine use for the feature’s intended purpose is allowed unless another specific rule is violated.

A high or low price, large salary, generous dividend, aggressive tender bid, large Union contribution, profitable Company delivery, contract failure, penalty or insolvency is not automatically abuse. Serious enforcement requires reasonable evidence of the prohibited purpose and should distinguish detection, containment, state correction and punitive account enforcement.

## September 10 code-first Company commerce checkpoint

Read-only production Supabase inspection and current Flutter/economy-source review confirmed the deployed Company commerce lifecycle:

- supply requests use `manage_supply` and support member inventory delivery and authorized Company warehouse fulfillment;
- ordinary member supply delivery is a real goods-for-value transfer from Company treasury to the supplying member;
- the current warehouse-fulfillment path consumes Company warehouse stock and credits the authorized acting specialist, a route already classified by Finance V2 research as a specialist supply transfer;
- current Company export/procurement offers use `manage_exports`, with acceptance separate from final goods-for-value completion;
- export completion validates supplier Company stock/quality and, for Company procurement, moves goods to the buyer while moving treasury value to the supplier Company;
- current tenders use `manage_tenders`, support live/blind bidding and targeted visibility, and the sweep awards the lowest bid with time as tie-breaker; and
- contract failure/overdue handling can apply a Company penalty and insolvency consequences as a normal gameplay outcome.

### Important implementation/legal finding

The reviewed richer `company_supply_request_create(...)` path validates the initial price of a linked export/V2 supply request against the linked contract/offer price.

The reviewed richer `company_supply_request_update(...)` path does **not clearly reapply that linked contract/V2-offer price ceiling** before writing a changed unit price. Older retained overloads have different historic checks.

This creates source-drift and enforcement risk: a server-success response can potentially create a linked-request state that the current creation path would not permit. The legal treatment is therefore explicit:

- server acceptance is not conclusive authorization for knowing exploitation of an obviously inconsistent settlement state;
- sham/artificial pricing used mainly to funnel Company value can be reviewed when supported by evidence;
- accidental or ordinary one-off use must be distinguished from knowing or repeated extraction;
- directly attributable invalid state may be reconciled without treating the correction itself as a fraud finding; and
- unrelated legitimate paid value and mandatory consumer rights remain protected.

Engineering follow-up is required outside this legal project to make linked price validation symmetric and resolve retained overload drift. **No database change was made by this run.**

Detailed gate: `TYCOONX_COMPANY_SUPPLY_EXPORT_TENDER_RELEASE_GATE.md`.  
Implementation/legal map: `TYCOONX_CODE_FIRST_GAMEPLAY_LEGAL_MAP.md`.

## Active privacy/controller invariant

For the TycoonX personal-data processing described in the Privacy Policy, the controller is disclosed directly as **Atakan Cevik, trading as CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Germany**, with the published privacy contact and TycoonX Support. Localized Privacy routes preserve the distinction between CK-Labs’ controller role and any independent-controller role of Apple, Google, Xsolla or other providers.

## Current-law clarity checkpoint

German BGB § 307 remains relevant to standard terms: unclear or incomprehensible wording can contribute to an unreasonable disadvantage. Gameplay rules therefore need to explain real authorized mechanics clearly rather than making an intended feature look prohibited while relying on hidden implementation knowledge for the exception.

German digital-product conformity/remedy rules remain separate from gameplay discipline. BGB § 327d requires covered digital products to be supplied in conformity with the statutory regime, and § 327i preserves qualifying remedies for defective digital products. Gameplay balancing, Company penalties, anti-exploit correction or account enforcement must not be used as a shortcut to waive mandatory remedies.

## Next code-first gameplay audit queue

Completed substantive gameplay clusters:

1. Company governance/value movement: salaries, payroll, treasury distributions, IPO/dividends/buybacks/offerings.
2. Company commerce: supply requests, member delivery, warehouse specialist fulfillment, export/procurement offers, tenders, completion, failure/penalties and permissions.
3. Union Project contribution exception: expressly authorized contribution versus ordinary mechanics used as disguised donation channels.

Continue in this order:

1. **Union treasury/governance:** membership fees, leader deposits/withdrawals, maintenance, projects/rewards, polls, level upgrades, Union closure and alternate-account/limit-evasion boundaries.
2. **Art/Begging:** auction bids, direct offers, duplicate publication, moderation, genuine art purchases, intended assistance, collusion and self-bidding.
3. **Player and Government markets:** listings, auto-fill/auto-market, price manipulation, coordinated trading, stale prices, delivery and award correction.
4. **Bank/credit/FX/stocks/crypto:** loans, collateral, debt recovery, interest, bankruptcy, FX cooldowns, market-price automation and manipulation/exploit boundaries.
5. **Logistics/jobs/competitions:** trucks, deliveries, care jobs, Company jobs, automated completion, leaderboards, rewards and win-trading/duplicate-completion risks.
6. **Social/UGC:** Company/Union chat, rooms, art/music/books, impersonation, scams, moderation, appeals and user-content rights.

## Canonical source status

- English Terms: current and supplemented by synchronized rendered code-derived gameplay clarifications on September 10, 2026.
- English Purchases & Refunds: current.
- English Privacy Policy: current.
- English Community Standards: current.
- All 25 localized Terms now receive the Company commerce clarification without duplicating the full static translated body.

## Progress metrics

The percentages intentionally include the still-incomplete code-first gameplay/economy/community audit rather than over-weighting completed payment/platform work.

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **97.0%**
- **Full commercial/legal/payment readiness:** **93.5%**
- **Overall project completion:** **95.2%**
- **Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

**Next substantive code-first target:** Union treasury/governance, beginning with current production functions for membership fees, leader deposits/withdrawals, maintenance, projects/rewards, polls, level upgrades and Union closure.

Historical payment/platform hardening remains available in Git history. This tracker emphasizes current state, active invariants and the implementation-driven next queue so future runs continue without duplicating completed work.
