# TycoonX Legal Localization Progress

Canonical legal source: the English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository, together with the rendered canonical Terms clarifications synchronized into every localized Terms route.

Last synchronized: **September 10, 2026**.

## Rules

- Always display the brand as **TycoonX**. Technical route/file names containing `tyconx` may remain where changing them could break URLs, but rendered prose must never display a legacy misspelling.
- TycoonX went to full release on **September 1, 2026**. Do not describe the live service, users, purchases, VIP, Diamonds, rewards, or current legal terms as beta.
- English remains canonical. Reopen localized documents only when canonical English meaning materially changes.
- Translate for legal meaning, not word-for-word. Localized copy must sound natural to a native speaker while preserving exact legal effect, product distinctions, payment-channel responsibilities and mandatory-rights caveats.
- Locale variants must remain genuinely localized, including `es`/`es_MX`, `fr`/`fr_CA`, `pt`/`pt_BR`, and `zh`/`zh_Hans`/`zh_Hant`; Arabic uses RTL layout.
- Required locale order is: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.
- Within each locale the order is Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not use GitHub Actions or paid services for this project. Do not change any production database row, function, trigger, policy, grant, schema, cron, balance or configuration as part of this legal audit.
- Gameplay/community hardening is code-first: inspect current Flutter behavior and read-only production Supabase authority/settlement paths before changing legal meaning.
- A current cap, cooldown, formula, permission, settlement rule, moderation signal or UI control is implementation evidence, not automatically a permanent contractual promise, proof of misconduct or safe harbor for knowing exploitation.

## Current localization state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** required locales.

**Localized hubs: 25/25. Localized full documents: 100/100.** Every locale has current Terms, Purchases & Refunds, Privacy and Community Standards.

Exact next unfinished locale/document: **None. All 25 target locales and all 100 localized full documents are current.**

Do not duplicate completed localization. If canonical English meaning changes materially, reopen only the affected document type and resynchronize it in the required locale order.

## Synchronized player-facing Terms clarifications

Eight September 10 code-derived Terms clarifications remain synchronized across the canonical Terms route and all target locales:

1. `GameplayEconomyRuleNotice.tsx`.
2. `CompanyCommerceRuleNotice.tsx`.
3. `UnionGovernanceRuleNotice.tsx`.
4. `ArtBeggingRuleNotice.tsx`.
5. `PlayerGovernmentMarketRuleNotice.tsx`.
6. `BankCreditMarketsRuleNotice.tsx`.
7. `LogisticsJobsCompetitionsRuleNotice.tsx`.
8. `SocialUgcRuleNotice.tsx`.

They cover genuine intended gameplay, Company/Union commerce, Art/Begging, player/Government markets, banking/credit/FX/stocks/crypto, Logistics/jobs/competitions/rewards and Social/UGC, while preserving exploit/compromise/evidence/proportional-correction and mandatory-rights boundaries. They display only on the canonical Terms route and `/tycoonx-legal/{locale}/terms`; Arabic uses RTL and required regional variants remain separately localized.

No ninth public notice is currently required for the cross-cutting authority defects. Existing canonical/localized Terms already cover the material exploit/server-acceptance/account-compromise/evidence/correction rules. Security defects should be fixed technically rather than normalized as intended player access.

## Active purchase/product invariants

All canonical and localized legal documents must continue to preserve that:

- purchased Diamonds do not expire solely because time passes;
- purchased Diamonds, promotional/free Diamonds, one-time 30-Day VIP and Lifetime VIP are distinct products;
- 30-Day VIP is a **one-time, non-renewing 30-day entitlement** unless a future compliant product clearly says otherwise;
- Lifetime VIP is a one-time promotional entitlement available only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous availability;
- Apple App Store, Google Play and the official CK-Labs TycoonX webshop using Xsolla are distinct payment channels;
- CK-Labs may change future Diamond bundle prices/content, VIP prices, regional prices, currencies and future promotions subject to applicable law;
- prices may differ by country, platform and channel, including because of provider tax/VAT/FX handling;
- the final total price shown before confirmation governs a completed transaction, subject to mandatory law and correction of legally relevant errors;
- completed one-time purchases are not retroactively repriced merely because a later price, tax, FX rate, sale or promotion differs;
- a later decrease does not automatically create a refund/credit/price-match right, and a later increase does not create an extra charge on a completed one-time purchase, except where mandatory law requires otherwise;
- Lifetime VIP may have different genuine prices in different sales windows and misleading countdown/crossed-out/discount claims are not permitted;
- total consumer prices and mandatory taxes/fees are displayed as required by applicable German/EU law;
- any future recurring product requires its own compliant recurring-price, renewal, notice and cancellation treatment; and
- mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy and other non-waivable rights remain intact.

Obvious pricing/catalog/configuration errors, failed/pending/reversed payments, duplicate or accidental grants, fraud, chargebacks, regional-price abuse, promotion/coupon abuse, account compromise, provider outages/rule changes/replacement, unsupported clients, business sale/reorganization/successor operation, economy corrections, feature replacement and lawful permanent service discontinuation remain covered by their canonical rules.

## Active gameplay/enforcement invariant

TycoonX intentionally contains value-moving and automatic mechanics. Genuine salaries/payroll, Company distributions, supply/export/tenders, Begging, Union contributions/fees/treasury movements, player markets, shop auto-fill, TycoonX-operated automation, Government Market systems, Art/Music/Books, trucks/deliveries, care jobs, Company recruitment, bank/FX/stocks/crypto, competitions/rewards, chats, rooms and other supported systems are not prohibited merely because they move value or operate automatically.

A large amount, unusual price, aggressive bid, default, bankruptcy, large gain/loss, high salary, repeated delivery, repeated win, favorable reward or popular creator work is not automatically abuse. A mechanic becomes legally/enforcement-relevant when reliable evidence supports knowing manipulation, disguised value funneling, controlled-account evasion, prohibited RMT, external automation, altered-client/API abuse, exploit laundering, fraud or another actual rule violation.

A successful RPC/row mutation is not an absolute safe harbor if an authorization/validation defect clearly enabled an unintended manipulated state. Conversely, server acceptance or abnormal state alone does not prove knowledge or intent. Enforcement must distinguish detection, containment, state correction and punishment, consider account compromise/outages/retries/races, and correct directly attributable invalid state proportionately rather than automatically destroying unrelated valid paid value.

## Completed code-first legal map

Substantive mapping is complete for:

1. Company governance/value movement.
2. Company supply/export/tender commerce.
3. Union contribution/treasury/governance.
4. Art/Begging.
5. Player markets/shop auto-fill/system auto-market/Government Market.
6. Bank/credit/FX/stocks/crypto.
7. Logistics/jobs/competitions/rewards.
8. Social/UGC.
9. Cross-cutting profile/server-authority/privacy.
10. Residual Housing/profile/energy/friends/activity/log authority.

Detailed gates remain authoritative implementation QA references:

- `TYCOONX_COMPANY_SUPPLY_EXPORT_TENDER_RELEASE_GATE.md`
- `TYCOONX_UNION_TREASURY_GOVERNANCE_RELEASE_GATE.md`
- `TYCOONX_ART_BEGGING_RELEASE_GATE.md`
- `TYCOONX_PLAYER_GOVERNMENT_MARKETS_RELEASE_GATE.md`
- `TYCOONX_BANK_CREDIT_FX_STOCKS_CRYPTO_RELEASE_GATE.md`
- `TYCOONX_LOGISTICS_JOBS_COMPETITIONS_RELEASE_GATE.md`
- `TYCOONX_SOCIAL_UGC_RELEASE_GATE.md`
- `TYCOONX_CROSS_CUTTING_SERVER_AUTHORITY_PRIVACY_RELEASE_GATE.md`
- `TYCOONX_CODE_FIRST_GAMEPLAY_LEGAL_MAP.md`

## September 10 final remediation recheck

A fresh read-only production recheck was performed before final release-readiness consolidation. The previously documented P0/P1 implementation findings were **not assumed fixed merely because legal wording is complete**.

The following high-risk categories are still open in the reviewed production definitions:

- sensitive self-profile UPDATE and excessive public profile exposure;
- raw/client-trusting XP, energy, reward-checkpoint and refund-credit authority;
- arbitrary-target or globally scoped internal helpers exposed to ordinary client roles;
- Housing cooldown/supply authority;
- connected-fill identity rebinding and destination-slot ownership gaps;
- non-positive agriculture/livestock/mining price validation gaps at settlement;
- richer Company supply update not visibly reapplying linked price ceilings;
- cross-Company Company-job RLS correlation defect;
- broad Union leader/officer generic UPDATE;
- Art generic owner UPDATE/raw DELETE and resale-current-owner self-bid gap;
- player-writable stock holdings and client-insertable stock transaction/price-history inputs;
- broadly executable stock/crypto price automation/mutation functions;
- overly broad internal bank/debt helpers;
- broadly executable care-job/daily-task/global reward helpers;
- globally permissive raw message reads and remaining Social/UGC confidentiality/authority issues; and
- generic Company/moderation/Housing official-looking notification helpers.

The exact consolidated matrix, positives/closed false positives, evidence rules and engineering remediation order are now maintained in `TYCOONX_FINAL_LEGAL_RELEASE_READINESS.md`.

Important positive/closed points remain recorded there, including Finance V2 money protection, no generic profile Diamond UPDATE, current FX zero-balance delete protection, hardened persona training, Housing deposit-release behavior, industrial positive-price purchase validation, intended built-in automation, and scoped raw Post Office letter reads.

No production database mutation was made during this recheck.

## Active privacy/controller invariant

For personal-data processing described in the Privacy Policy, the controller remains disclosed as **Atakan Cevik, trading as CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Germany**, with the published privacy contact and TycoonX Support. Localized Privacy routes preserve the distinction between CK-Labs' controller role and any independent-controller role of Apple, Google, Xsolla or another provider.

Restricted social/history data, anonymous Post Office sender identity, gameplay finance, applications, anti-abuse signals and moderation evidence may be processed where justified to operate, secure and support TycoonX, but that does not authorize unnecessary player-to-player disclosure. Client-influenceable, over-broadly readable/writable or notification-derived records must be weighted according to evidentiary quality rather than treated as automatically conclusive.

## Current-law and provider checkpoint

Rechecked on **September 10, 2026**:

- Apple's current App Review Guidelines continue to regulate in-app digital functionality/currency through the applicable In-App Purchase framework, state that purchased in-game IAP currency may not expire, and require restoration where applicable.
- Google Play continues to regulate billing for in-app digital goods/virtual currency, with region/program-specific alternatives that must be checked for the actual distribution/payment path rather than described as one universal rule.
- Xsolla's current refund/legal framework remains a separate provider/merchant layer from CK-Labs' own TycoonX entitlement-delivery and mandatory-consumer-law duties.
- German BGB § 307 continues to restrict unfair/unclear standard terms; §§ 327d and 327i preserve applicable digital-product conformity/remedies; § 327r imposes conditions and, for qualifying material access/usability changes, notice/termination protections for certain continuously supplied digital products.
- GDPR data minimisation, privacy by design/default and appropriate security remain relevant to broad profile/social access defects.

No material current-law/provider meaning change was identified in this recheck that requires reopening the canonical or localized purchase/legal documents.

## Next code-first audit queue

There is no unfinished localization document and no unmapped substantive gameplay cluster.

The next substantive target is **implementation remediation verification**. After engineering changes land, recheck the production definitions against `TYCOONX_FINAL_LEGAL_RELEASE_READINESS.md`, close only findings demonstrably fixed, verify that deployed behavior still matches canonical/legal notices, repeat current Apple/Google/Xsolla plus German/EU checks, and reopen only localized document types affected by a material canonical meaning change.

Database remediation remains outside this legal audit unless explicitly approved.

## Canonical source status

- English Terms: current and supplemented by eight synchronized code-derived clarifications.
- English Purchases & Refunds: current.
- English Privacy Policy: current; broad profile/social exposure remains an implementation defect and is not treated as intended disclosure.
- English Community Standards: current.
- All 25 localized Terms receive all eight synchronized code-derived clarifications.

## Progress metrics

Legal/localization coverage is essentially complete, while operational readiness remains deliberately lower because the verified P0 implementation findings remain open. Completing the consolidated risk/remediation matrix increases project completion without pretending those server-authority/privacy defects have been fixed.

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **99.6%**
- **Full commercial/legal/payment readiness:** **82.5%**
- **Overall project completion:** **97.7%**
- **Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

**Next substantive code-first target:** implementation remediation verification against `TYCOONX_FINAL_LEGAL_RELEASE_READINESS.md`, followed by final regression and current-law/provider closure once the verified P0/P1 fixes have actually landed.