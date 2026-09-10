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
- `TYCOONX_FINAL_LEGAL_RELEASE_READINESS.md`
- `TYCOONX_PRODUCTION_REMEDIATION_RECHECK.md`

## September 10 production remediation verification

The latest read-only production follow-up is recorded in `TYCOONX_PRODUCTION_REMEDIATION_RECHECK.md`. Previously documented P0/P1 findings were not assumed fixed merely because the legal wording is complete.

No complete verified closure was found among the representative critical controls sampled in the latest follow-up. Caller-controlled XP and energy, arbitrary-target/raw-credit authority, Housing authority helpers, broad market-price controls and generic official-looking notification authority remain open in the reviewed production definitions.

A **partial hardening** remains verified in `_internal_shop_connected_fill(...)`: its current destination lookup resolves the slot through `user_shop_assets` and requires the shop to belong to the supplied `p_user_id`. This is a real improvement and is now recorded as such. It does not close the identity-authority finding because the SECURITY DEFINER helper is still broadly executable, still accepts caller-supplied `p_user_id`, and still rewrites effective JWT subject state to that supplied identity. The effective user must be derived or independently authorized by the server.

The latest follow-up separately reconfirmed `_internal_industrial_connected_fill(...)` with the same identity-boundary problem. It ties facility/source state to the supplied `p_user_id`, but the helper remains broadly executable and rewrites effective JWT subject state to that caller-supplied identity.

The player-facing shop paths remain separately open. `shop_auto_fill_cheapest(...)` and the reviewed `shop_market_buy_and_store_*` helpers do use `user_shop_assets` for shop metadata, but the reviewed destination lookups still do not require the destination owner to equal `auth.uid()` before wallet/source/destination mutation. A metadata join is not an ownership check.

The profile recheck also remains release-blocking. Authenticated self-update authority still includes sensitive entitlement/staff/moderation/progression fields, while public/anonymous reads expose substantially more raw profile state than a minimal public player card requires. The reviewed generic authenticated UPDATE surface still does not include the Diamond balance, which remains a positive control.

The Company supply finding remains precise and was strengthened by trigger inspection. The older update overload applies the linked export-contract price check. The richer six-argument overload recognizes linked export/V2 state for quantity/minimum-quality behavior but still writes the caller-supplied `unit_price`; no reviewed BEFORE trigger on `company_supply_requests` independently restores the missing linked-price validation.

Company recruitment RLS remains open: the reviewed Company job-post management and manager application-read policies still contain the tautological condition `mm.company_id = mm.company_id` rather than correlating the manager's Company with the protected Company.

Art resale self-bid protection also remains open. The reviewed `social_bid_art(...)` settlement still checks the bidder against the original artist `user_id`, not the current resale `owner_id`.

The Social/UGC read finding remains nuanced. Executive Company Chat has an effective RESTRICTIVE raw-read policy. Equivalent authoritative membership restrictions were not found for ordinary Company and Union messages in the reviewed policy set, so those ordinary restricted channels remain the raw-read hardening target.

The previously identified production branding migration remains outstanding. A fresh scan still finds the legacy misspelled brand string in **12 deployed function definitions**. Player-facing text generated from deployed backend functions must render `TycoonX`; technical identifiers may remain only where compatibility requires them. No database function or text was changed during this legal audit.

## Active privacy/controller invariant

For personal-data processing described in the Privacy Policy, the controller remains disclosed as **Atakan Cevik, trading as CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Germany**, with the published privacy contact and TycoonX Support. Localized Privacy routes preserve the distinction between CK-Labs' controller role and any independent-controller role of Apple, Google, Xsolla or another provider.

Restricted social/history data, anonymous Post Office sender identity, gameplay finance, applications, anti-abuse signals and moderation evidence may be processed where justified to operate, secure and support TycoonX, but that does not authorize unnecessary player-to-player disclosure. Client-influenceable, over-broadly readable/writable or notification-derived records must be weighted according to evidentiary quality rather than treated as automatically conclusive.

## Current-law and provider checkpoint

Rechecked on **September 10, 2026**:

- Apple's current App Review Guidelines continue to regulate in-app digital functionality/currency through the applicable In-App Purchase framework, state that purchased in-game IAP currency may not expire, require restoration where applicable, and apply storefront/program-specific rules to external purchase links and related exceptions.
- Google Play continues to regulate billing for in-app digital goods/virtual currency, requires clear and accurate purchase pricing, restricts virtual currency to the app/game title for which it was purchased, and limits alternative-billing/external-offer paths to eligible regional/program frameworks.
- Xsolla's current refund/legal framework remains a separate provider/payment layer from CK-Labs' own TycoonX entitlement-delivery and mandatory-consumer-law duties. Its current refund documentation distinguishes matters such as technical/integration issues, duplicate purchases, unauthorized payments, payment-method rules and applicable EU/EEA withdrawal treatment. Xsolla's developer refund documentation, updated **September 7, 2026**, also documents full/partial refund processing and refund webhooks; this operational update does not require a canonical legal meaning change.
- German BGB § 307 continues to restrict unfair/unclear standard terms; §§ 327d and 327i preserve applicable digital-product conformity/remedies; § 327r imposes conditions and, for qualifying material access/usability changes, notice/termination protections for certain continuously supplied digital products.
- GDPR Articles 5, 25 and 32 continue to support data minimisation, privacy by design/default and risk-appropriate confidentiality/security controls.

No material current-law/provider meaning change was identified in this follow-up that requires reopening the canonical or localized purchase/legal documents.

## Next code-first audit queue

There is no unfinished localization document and no unmapped substantive gameplay cluster.

The next substantive target is **implementation remediation verification**. After engineering changes land, recheck the production definitions against `TYCOONX_FINAL_LEGAL_RELEASE_READINESS.md` and `TYCOONX_PRODUCTION_REMEDIATION_RECHECK.md`, close only findings demonstrably fixed, verify that deployed behavior still matches canonical/legal notices, repeat current Apple/Google/Xsolla plus German/EU checks, and reopen only localized document types affected by a material canonical meaning change.

Database remediation remains outside this legal audit unless explicitly approved.

## Canonical source status

- English Terms: current and supplemented by eight synchronized code-derived clarifications.
- English Purchases & Refunds: current.
- English Privacy Policy: current; broad profile/social exposure remains an implementation defect and is not treated as intended disclosure.
- English Community Standards: current.
- All 25 localized Terms receive all eight synchronized code-derived clarifications.

## Progress metrics

Legal/localization coverage is essentially complete, while operational readiness remains deliberately lower because the verified P0 implementation findings remain open. The latest production follow-up increases remediation-verification precision without falsely treating partial controls, metadata joins or internal refactors as closed release blockers.

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **99.6%**
- **Full commercial/legal/payment readiness:** **82.5%**
- **Overall project completion:** **97.9%**
- **Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

**Next substantive code-first target:** implementation remediation verification against `TYCOONX_FINAL_LEGAL_RELEASE_READINESS.md` and `TYCOONX_PRODUCTION_REMEDIATION_RECHECK.md`, closing only P0/P1 findings demonstrably fixed in production, followed by final regression and current-law/provider closure once those fixes have actually landed.