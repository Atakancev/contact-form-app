# TycoonX Legal Localization Progress

Canonical legal source: the English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository, together with rendered canonical Terms clarifications synchronized into every localized Terms route.

Last synchronized: **September 10, 2026**.

## Rules

- Always display the brand as **TycoonX**. Technical route/file names containing `tyconx` may remain where changing them could break URLs, but rendered prose must never display a legacy misspelling.
- TycoonX went to full release on **September 1, 2026**. Do not describe the live service, users, purchases, VIP, Diamonds, rewards, or current legal terms as beta.
- Translate for legal meaning, not word-for-word. Localized copy must sound natural to a native speaker while preserving the legal effect of the English source.
- English remains canonical. Refresh localized versions whenever canonical meaning changes materially.
- Locale variants must remain genuinely localized, including `es`/`es_MX`, `fr`/`fr_CA`, `pt`/`pt_BR`, and `zh`/`zh_Hans`/`zh_Hant`; Arabic uses RTL layout.
- Locale order is: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.
- Within each locale the order is Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not mark a localized document `Ready` until the rendered page preserves canonical legal meaning and product distinctions, uses natural native-language wording and punctuation, and contains no stale displayed brand or live-service beta wording.
- Do not use GitHub Actions or paid services for this project. Do not change any database.
- Before creating another release gate, inspect the repository and existing verifier scripts so completed doctrine is hardened incrementally instead of duplicated.
- Gameplay/community legal hardening is **code-first**: inspect current Flutter feature paths and read-only production Supabase functions, tables, policies, grants and triggers before drafting rules.
- A current server cap, permission, cooldown, formula, settlement path, moderation signal or UI control is implementation evidence, not automatically a permanent contractual promise, proof of misconduct or legal safe harbor.

## Current localization state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales. **All 25 target locales and all 100 localized full documents are current.**

Eight September 10 code-derived Terms clarifications remain synchronized across the canonical Terms route and all target locales:

1. `GameplayEconomyRuleNotice.tsx` covers genuine Company/Union value movement, contribution mechanics and the genuine-purpose rule.
2. `CompanyCommerceRuleNotice.tsx` covers Company supply, warehouse fulfillment, exports, tenders, collusion/self-dealing, artificial value-funneling, settlement/state exploitation, proportional correction, outages/account compromise and mandatory rights.
3. `UnionGovernanceRuleNotice.tsx` covers Union membership fees, leader treasury deposits/withdrawals, maintenance/closure, projects/rewards, upgrades, polls, altered-client/state manipulation, limit evasion, compromise/outage correction and mandatory rights.
4. `ArtBeggingRuleNotice.tsx` covers Art auctions/resales, formal direct offers, genuine Art trading versus disguised gifting, Begging as intended assistance, self-bidding/collusion, moderation timing, escrow reconciliation, compromise and proportional correction.
5. `PlayerGovernmentMarketRuleNotice.tsx` covers player production markets, built-in shop auto-fill, TycoonX-operated automatic market purchases, Government sales/tenders, manipulation, stale-state/evidence limits, correction and prospective balancing.
6. `BankCreditMarketsRuleNotice.tsx` covers virtual banking/savings/credit/FX/stocks/crypto, ordinary debt/default/trading outcomes, Diamond-funded FX-slot entitlement, system-operated price movement, manipulation/exploit boundaries, paid-entitlement separation, evidence quality, proportional correction and mandatory change/conformity rights.
7. `LogisticsJobsCompetitionsRuleNotice.tsx` covers truck commerce/rentals, deliveries, care jobs, Company recruitment, built-in job automation, leaderboards/competitions/rewards, Diamond-funded delivery acceleration, sham jobs, win trading, cooldown/reward manipulation, proportional correction and mandatory rights.
8. `SocialUgcRuleNotice.tsx` covers public/restricted social spaces, Company/Union/Executive chat, mentions, rooms, Post Office anonymity, Music/Books, impersonation/scams/phishing, altered-client access abuse, moderation/evidence limits, compromise, proportional correction and mandatory rights.

These clarifications display only on the canonical Terms route and `/tycoonx-legal/{locale}/terms`. Arabic uses RTL and the locale-specific Spanish, French, Portuguese and Chinese variants remain separately localized.

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

Do not duplicate completed localization. If canonical English meaning changes materially, reopen only the affected document type and resynchronize it in the required locale order.

## Active purchase/product invariants

All canonical and localized legal documents must continue to preserve that:

- purchased Diamonds do not expire solely because time passes;
- purchased Diamonds, promotional/free Diamonds, one-time 30-Day VIP, and Lifetime VIP are distinct products;
- 30-Day VIP is a **one-time, non-renewing 30-day entitlement** unless a future compliant product clearly says otherwise;
- Lifetime VIP is a one-time promotional entitlement offered only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous availability;
- Apple App Store, Google Play, and the official TycoonX webshop using Xsolla remain distinct payment channels;
- CK-Labs may change future Diamond bundles, VIP prices, regional prices, currencies and promotions subject to applicable law, while a completed one-time purchase is not retroactively repriced merely because later prices, taxes, FX or promotions differ; and
- mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy, accessibility and other non-waivable rights remain intact.

Obvious catalog/configuration errors, failed/pending/reversed payments, duplicate or accidental grants, fraud, chargebacks, account compromise, provider outages/rule changes/replacement, unsupported clients, business transfers, economy corrections and permanent service shutdown remain subject to their specific canonical rules.

A fresh September 10, 2026 platform/legal source check did not identify a material purchase-policy meaning change requiring canonical or localized purchase wording to be reopened in this run. Continue to recheck Apple, Google Play and Xsolla before final release-readiness closure because regional billing programs and provider terms can change.

## Active gameplay and community invariant

Players are expected to build TycoonX wealth through gameplay and genuine economic activity. A trade, Art or Music purchase, auction, Company transaction, job, contract, market order, Government tender, truck transaction, competition, creator sale or other mechanic must not be repurposed mainly as a disguised gift, value-funneling route, value-parking route, prohibited real-money trading route, exploit-laundering route or way to evade another feature limit.

This does not make intended value-moving, social or automatic mechanics unlawful. TycoonX intentionally contains salaries/payroll, authorized Company distributions, stock/crypto/FX mechanics, supply procurement, exports/contracts, tenders, Begging, Union contributions/fees/treasury movements, player markets, shop auto-fill, TycoonX-operated automation, Government Market systems, truck commerce/deliveries, care jobs, Company recruitment, leaderboards/rewards, chats, rooms, Post Office, Music, Books and other UGC systems. Genuine use for the intended purpose is allowed unless another rule is violated.

A large amount, high/low price, aggressive bid, legitimate default, bankruptcy, large gain/loss, high truck price, high lawful salary, repeated delivery, high rank, repeated win, favorable random reward, popular creator work, large genuine Music bid or unusual social interaction is not automatically abuse. Serious enforcement requires reliable evidence and should distinguish detection, containment, state correction and punitive enforcement.

## Completed code-first checkpoints

### Company commerce

Reviewed supply requests, member/warehouse fulfillment, exports/procurement, tenders, completion, failure and permissions. Open finding: linked-price validation is stronger on reviewed create than update paths. Detailed gate: `TYCOONX_COMPANY_SUPPLY_EXPORT_TENDER_RELEASE_GATE.md`.

### Union treasury/governance

Reviewed membership fees, leader treasury movements, maintenance/closure, project contributions/rewards, levels and polls. Open finding: leader/officer generic Union UPDATE is broader than the ordinary UI. Detailed gate: `TYCOONX_UNION_TREASURY_GOVERNANCE_RELEASE_GATE.md`.

### Art/Begging

Reviewed publication/idempotency, auctions/resales, direct offers, escrow, moderation timing and Begging. Open findings include resale-owner self-bid protection, broad Art owner UPDATE, raw active-Art deletion/refund parity and direct-offer preference enforcement. Detailed gate: `TYCOONX_ART_BEGGING_RELEASE_GATE.md`.

### Player and Government markets

Reviewed producer markets, shop auto-fill, system auto-market and Government Market. Open findings include non-positive seller-price validation gaps, destination-slot caller binding and client-authored Government anomaly evidence limits. Detailed gate: `TYCOONX_PLAYER_GOVERNMENT_MARKETS_RELEASE_GATE.md`.

### Bank/credit/FX/stocks/crypto

Reviewed banking, savings, credit, collateral, debt recovery, FX, stocks/crypto and market automation. Open findings include player-writable holdings/economic state, client-insertable market inputs, broad price-mutation helpers and over-broad internal bank/debt helpers. The FX zero-balance account-delete safeguard was confirmed. Detailed gate: `TYCOONX_BANK_CREDIT_FX_STOCKS_CRYPTO_RELEASE_GATE.md`.

### Logistics/jobs/competitions/rewards

Reviewed trucks, deliveries, Diamond acceleration, care jobs, Company recruitment, daily tasks, level/hourly rewards, rankings and match settlement. Open findings include broad global care helpers, arbitrary-user daily-task stock consumption, client-writable reward checkpoints, cross-Company job RLS correlation, stale overloads and broad match-settlement execution. Detailed gate: `TYCOONX_LOGISTICS_JOBS_COMPETITIONS_RELEASE_GATE.md`.

### Social/UGC

Reviewed Company/Union/Executive chat, mentions/replies/group mentions, polls/pins, Company meeting rooms, private social tables, Home Rooms, Post Office anonymity, Music/Books, moderation/reports/restoration and creator-content authority. Open findings include ordinary Company/Union confidentiality, message-routing authority, Executive push disclosure, Music auction-state authority, anonymous Post Office raw identity, poll parent authorization, Home Room raw reads and generic moderation-notification authority. Detailed gate: `TYCOONX_SOCIAL_UGC_RELEASE_GATE.md`.

### Cross-cutting server authority and privacy

The September 10 read-only cross-cutting sweep confirmed that the broad self-profile sensitive UPDATE surface, broad public profile SELECT, raw refund/XP helpers, connected-fill identity helpers and generic Company/moderation notification authority remain open in production. Detailed gate: `TYCOONX_CROSS_CUTTING_SERVER_AUTHORITY_PRIVACY_RELEASE_GATE.md`.

### Residual Housing/profile/energy/friends/activity/log checkpoint

This run completed the remaining mapped residual gameplay/privacy surface and explicitly rechecked remediation status rather than assuming fixes had landed.

New/expanded release-blocking findings:

1. **P0 - raw current-user XP authority:** `rpc_add_xp(amount)` still accepts a client-supplied positive XP amount without independently proving a feature-specific reward source. Current Flutter `AuthService.addXP(...)` uses it.
2. **P0 - raw current-user energy authority:** `rpc_add_energy(amount)` accepts a caller-provided positive energy amount without proving an authoritative source or applying the intended gameplay cap inside that function. Authenticated direct profile UPDATE also includes `energy` and `hunger`.
3. **P0 - Housing cooldown authority:** `new_housing_tenant_cooldowns` is player-writable for the player's own row even though the canonical rent flow relies on it to enforce the current same-owner re-rental cooldown. The raw `set_housing_tenant_cooldown(...)` helper is also broadly executable with a supplied target user.
4. **P0 - Housing supply creation:** `_spawn_next_house_plot(p_country)` remains an internal SECURITY DEFINER Housing-supply helper exposed to ordinary/anonymous client execution.
5. **P1 - Housing maintenance/foreclosure:** `new_housing_daily_cron()` and `new_housing_foreclose_overdue()` should move to a trusted service boundary, but current Flutter itself invokes the foreclosure function before mortgage reads and the function derives overdue targets from server state. Supported invocation is therefore not misconduct by itself.
6. **P1 - Housing notification authority:** raw Housing event notification helpers are too broadly callable to be authoritative evidence of the underlying rent/eviction/mortgage event.
7. **P1 - daily activity/news service proxies:** daily-activity generation/regeneration invokers expose privileged service work more broadly than current ordinary Flutter usage requires.

Positive controls confirmed in the same read-only production sweep:

- current persona compatibility training is materially hardened compared with stale migration bodies: server authentication, constrained reward shape, user/session energy receipt and structured evidence are present;
- current Housing owner-eviction/tenant-leave settlement returns or records valid tenant deposit release rather than silently treating it as forfeited;
- Housing mortgage, rent-application, Housing transaction-log, strategy-reveal and login-fingerprint reads are meaningfully scoped in the reviewed policy subset;
- `social_list_user_friends(...)` intentionally returns a narrow accepted-friends list and is used by current Flutter, so friend-list visibility is a product/privacy-design choice rather than an automatic vulnerability; and
- direct profile-money edits remain separately protected and the reviewed authenticated profile UPDATE surface still does not include Diamond balance.

The residual sweep also confirmed that the previously documented cross-cutting privileged helpers remain open in the deployed state. Role-based privacy/security policies that rely on profile admin/support flags cannot be treated as fully trustworthy until those role fields are made server-owned.

No ninth 25-locale Terms notice was added. Existing canonical/localized exploit, compromised-account, evidence-quality and proportional-correction wording already covers the legal meaning. The newly confirmed issues are technical authority/privacy defects that should be fixed in implementation, not normalized as intended player access.

## Active privacy/controller invariant

For personal-data processing described in the Privacy Policy, the controller remains disclosed as **Atakan Cevik, trading as CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Germany**, with the published privacy contact and TycoonX Support. Localized Privacy routes preserve the distinction between CK-Labs' controller role and any independent-controller role of Apple, Google, Xsolla or another provider.

Restricted chat/history, Post Office sender identity, Home Room state, gameplay finance, applications, anti-abuse signals and moderation evidence may be processed where justified to operate, secure and support TycoonX, but that does not authorize unnecessary player-to-player disclosure. Client-influenceable, over-broadly readable/writable or notification-derived records must be weighted according to their evidentiary quality rather than treated as automatically conclusive.

A player-facing anonymous option may remain identifiable to CK-Labs for lawful moderation/security/legal purposes, but the recipient should not receive hidden sender identity merely because the raw storage row contains it if the product represents that identity as hidden from the recipient.

## Current-law and platform checkpoint

As rechecked on **September 10, 2026**:

- current Apple App Store rules continue to require compliant in-app purchase handling for digital functionality/in-game currency, truthful purchase metadata, restoration where applicable and non-expiration of purchased in-game currency;
- current Google Play payment rules continue to govern in-app digital goods/virtual currency while regional billing programs can differ and must be checked per distribution/payment path;
- current Xsolla agreements/refund/chargeback terms remain a separate provider layer from CK-Labs' own entitlement-delivery and mandatory-consumer-law duties;
- GDPR Articles 5, 25 and 32 remain relevant to data minimisation, privacy by design/default and risk-appropriate security;
- German BGB § 307 and the digital-product rules including §§ 327d, 327i and 327r remain separate from anti-exploit enforcement and prospective game balancing; and
- a genuine backend/security defect cannot be relabeled misconduct merely to avoid an applicable statutory remedy.

## Next code-first audit queue

Completed substantive mapping clusters:

1. Company governance/value movement.
2. Company supply/export/tender commerce.
3. Union contribution/treasury/governance.
4. Art/Begging.
5. Player markets/shop auto-fill/system auto-market/Government Market.
6. Bank/credit/FX/stocks/crypto.
7. Logistics/jobs/competitions/rewards.
8. Social/UGC.
9. Cross-cutting server-authority/privacy.
10. Residual Housing/profile/energy/friends/activity/log sweep.

There is no unfinished localization document. The next substantive target is **P0/P1 implementation remediation verification and final legal release-readiness consolidation**: recheck every open server-authority/privacy/economy finding after engineering changes, verify that no implementation change has created a canonical/localization mismatch, and repeat the final current Apple/Google/Xsolla plus German/EU source review. Do not change production database state without explicit approval.

## Canonical source status

- English Terms: current and supplemented by eight synchronized rendered code-derived gameplay/community clarifications dated September 10, 2026.
- English Purchases & Refunds: current.
- English Privacy Policy: current; broad public profile access remains an implementation defect and is not treated as an intended disclosure.
- English Community Standards: current.
- All 25 localized Terms receive all eight synchronized code-derived clarifications without duplicating the static translated body.

## Progress metrics

The percentages intentionally include unresolved implementation/security findings rather than over-weighting completed localization. This residual sweep increased legal/implementation coverage but confirmed additional P0 authority gaps in XP, energy and Housing state, while earlier cross-cutting P0s remain open. Readiness therefore decreases until engineering remediation is verified.

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **99.6%**
- **Full commercial/legal/payment readiness:** **82.5%**
- **Overall project completion:** **97.5%**
- **Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

**Next substantive code-first target:** P0/P1 implementation remediation verification and final legal release-readiness consolidation across profiles/public data, paid/staff role state, XP/energy, Housing cooldown/plot spawn, connected-fill/refund helpers, notifications/service proxies, and the open Company/Union/Art/market/bank/Logistics/Social findings.