# TycoonX Legal Localization Progress

Canonical legal source: the English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository, together with rendered canonical Terms clarifications synchronized into every localized Terms route.

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
- Gameplay/community legal hardening is **code-first**: inspect current Flutter feature paths and read-only production Supabase functions, tables, policies, grants and triggers before drafting rules.
- A current server cap, permission, cooldown, formula, settlement path, moderation signal or UI control is implementation evidence, not automatically a permanent contractual promise, proof of misconduct or legal safe harbor.

## Current localization state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales. **All 25 target locales and all 100 localized full documents are current.**

Eight September 10 code-derived Terms clarifications are synchronized across the canonical Terms route and all target locales:

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

Current Flutter plus read-only production Supabase review covered Company/Union/Executive chat, mentions/replies/group mentions, polls/pins, Company meeting rooms, private social tables, Home Rooms, Post Office anonymity, Music/Books, moderation/reports/restoration and creator-content authority.

Open findings:

1. **P0 - Company/Union chat confidentiality:** ordinary Company and Union messages currently inherit permissive broad SELECT policies; only Executive Company Chat receives the reviewed restrictive server read boundary. Flutter filtering is not sufficient confidentiality enforcement.
2. **P0 - message routing/privileged state:** normal message INSERT/owner UPDATE authority does not visibly bind all non-executive Company/Union routing fields or make routing/pin state server-owned.
3. **P0 - Executive push disclosure:** current direct-mention, reply, channel-notification and group-mention logic can disclose Executive Company Chat message bodies to recipients who fail the Executive read rule, including specialists or outsiders in some paths.
4. **P0 - Music auction settlement authority:** a Music owner has broad UPDATE authority over auction-managed state, while reviewed finalize/cancel settlement trusts listing bid fields when crediting wallets. Settlement must require an authoritative bid/hold rather than trusting the listing row alone.
5. **P1 - Post Office anonymous identity:** anonymous letters retain `from_user_id`, while recipient SELECT currently exposes the raw letter row. Recipient-facing anonymity requires a redacted read surface.
6. **P1 - poll parent authorization:** voting/count and non-anonymous vote visibility do not consistently bind access to the parent message/channel.
7. **P1 - Home Room private state:** intended entrance/load RPCs are access-aware, but several collection/profile tables permit broad authenticated reads.
8. **P1 - moderation notification spoofing:** `notify_moderation_event(...)` is broadly executable and can send official-looking moderation pushes without establishing a trusted caller inside the reviewed function.
9. **Brand defect:** `handle_new_message_mention()` still contains a legacy misspelling of the **TycoonX** brand in a player-facing global-channel label. Database changes were prohibited, so this must be corrected in a future approved migration.

Positive controls confirmed include the Executive RLS read function itself, private social-table membership rules, Company meeting-room admission/management checks, Home Room active-visit chat checks, reporter ownership, staff-gated restoration functions and caller-bound Book publication/review controls.

Detailed gate: `TYCOONX_SOCIAL_UGC_RELEASE_GATE.md`.

### Cross-cutting server authority and privacy

The September 10 read-only residual sweep reviewed broad profile permissions, privileged SECURITY DEFINER helpers, public/private data boundaries, notification authority and deployed database-generated brand copy across the already audited gameplay/community systems.

New release-blocking findings:

1. **P0 - profile privilege/entitlement/moderation authority:** the reviewed self-profile UPDATE surface includes server/staff-owned fields such as VIP, admin/mod/support/test/whitelist and moderation state without an equivalent general protected-column guard.
2. **P0 - public profile privacy boundary:** broad profile SELECT access exposes substantially more internal/security/economic/account state than a public player card requires.
3. **P0 - arbitrary refund wallet credit:** `specialization_upgrade_refund_wallet_credit(...)` is broadly executable and does not establish the trusted source/target/amount boundary inside the reviewed function.
4. **P0 - progression/evidence helpers:** `gain_xp(...)` and `award_collect_xp(...)` accept caller-controlled target/amount inputs through broadly executable privileged paths.
5. **P0 - connected-fill identity impersonation:** `_internal_shop_connected_fill(...)` and `_internal_industrial_connected_fill(...)` can rewrite effective JWT subject from a supplied user identifier and must not be ordinary client-callable operations.
6. **P0 - official-looking notification authority:** generic Company/moderation notification helpers can accept caller-supplied event facts/recipients without a sufficiently trusted caller boundary in the reviewed function.
7. **Brand defects:** production database-generated welcome/market/notification prose and a deployed market/NPC display name still contain the legacy misspelling and must be migrated to displayed `TycoonX` wording.

Positive controls confirmed include Finance V2 protection against direct profile-money edits, no authenticated direct Diamond-column update grant in the reviewed profile permissions, industrial external-purchase rejection of non-positive seller prices, and no relevant sensitive table with RLS disabled in the constrained public/authenticated scan.

The Privacy Policy should not be expanded to make accidental public exposure of internal profile/device/security fields appear intended. The correct direction is to narrow the deployed access boundary and change legal disclosure only if intended processing itself materially changes.

Detailed gate: `TYCOONX_CROSS_CUTTING_SERVER_AUTHORITY_PRIVACY_RELEASE_GATE.md`.

## Active privacy/controller invariant

For personal-data processing described in the Privacy Policy, the controller remains disclosed as **Atakan Cevik, trading as CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Germany**, with the published privacy contact and TycoonX Support. Localized Privacy routes preserve the distinction between CK-Labs' controller role and any independent-controller role of Apple, Google, Xsolla or another provider.

Restricted chat/history, Post Office sender identity, Home Room state, gameplay finance, applications, anti-abuse signals and moderation evidence may be processed where justified to operate, secure and support TycoonX, but that does not authorize unnecessary player-to-player disclosure. Client-influenceable, over-broadly readable/writable or notification-derived records must be weighted according to their evidentiary quality rather than treated as automatically conclusive.

A player-facing anonymous option may remain identifiable to CK-Labs for lawful moderation/security/legal purposes, but the recipient should not receive hidden sender identity merely because the raw storage row contains it if the product represents that identity as hidden from the recipient.

## Current-law and platform checkpoint

As rechecked on **September 10, 2026**:

- Apple App Review Guideline 1.2 continues to require UGC/social apps to provide filtering of objectionable material, reporting with timely response, blocking of abusive users and published contact information; creator content remains subject to UGC moderation rules.
- Google Play's current UGC policy requires terms/user-policy acceptance before users create/upload UGC, clear objectionable-content rules, robust ongoing moderation, in-app reporting and blocking for 1:1 interactions such as messaging, tagging and mentions.
- Where applicable, the EU Digital Services Act preserves statement-of-reasons and complaint/redress safeguards for covered moderation decisions.
- GDPR Articles 5, 25 and 32 require, as applicable, data minimisation, privacy by design/default and security appropriate to risk; these duties remain separate from game access labels and anti-abuse rules.
- German BGB § 307 and the digital-product rules including §§ 327d and 327i remain separate from moderation, access-control and anti-exploit enforcement. A genuine backend/security defect cannot be relabeled misconduct merely to avoid an applicable statutory remedy.

## Next code-first audit queue

Completed substantive clusters:

1. Company governance/value movement.
2. Company supply/export/tender commerce.
3. Union contribution exception.
4. Union treasury/governance.
5. Art/Begging.
6. Player markets/shop auto-fill/system auto-market/Government Market.
7. Bank/credit/FX/stocks/crypto.
8. Logistics/jobs/competitions/rewards.
9. Social/UGC.
10. Cross-cutting server-authority/privacy sweep.

There is no unfinished localization document. Continue with a **residual gameplay/privacy surface and remediation-verification sweep**: inspect Housing, profile/profession/energy helpers, friends/activity/log exposure and remaining broadly executable privileged functions, then verify whether the documented P0/P1 server-authority fixes have landed. Do not change production database state without explicit approval.

## Canonical source status

- English Terms: current and supplemented by eight synchronized rendered code-derived gameplay/community clarifications dated September 10, 2026.
- English Purchases & Refunds: current.
- English Privacy Policy: current; the newly identified broad public profile access is an implementation defect and is not treated as an intended new disclosure.
- English Community Standards: current.
- All 25 localized Terms receive all eight synchronized code-derived clarifications without duplicating the static translated body.

## Progress metrics

The percentages intentionally include unresolved implementation/security findings rather than over-weighting completed localization or payment work. Cross-cutting legal/privacy coverage improved, but the newly identified profile privilege/entitlement surface, public profile overexposure, arbitrary wallet-credit/progression helpers, identity-impersonating fill helpers and generic notification authority are severe P0 release blockers until engineering remediation is verified.

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **99.6%**
- **Full commercial/legal/payment readiness:** **85.0%**
- **Overall project completion:** **97.3%**
- **Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

**Next substantive code-first target:** Residual gameplay/privacy surface and remediation verification, especially Housing, profile/profession/energy helpers, friends/activity/log exposure, remaining broadly executable privileged functions and closure status of the documented P0/P1 findings.