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
- Gameplay/community hardening is code-first: inspect current Flutter behavior and read-only production authority/settlement paths before changing legal meaning.
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

They cover genuine intended gameplay, Company/Union commerce, Art/Begging, player/Government markets, banking/credit/FX/stocks/crypto, Logistics/jobs/competitions/rewards and Social/UGC while preserving exploit/compromise/evidence/proportional-correction and mandatory-rights boundaries. They display only on the canonical Terms route and `/tycoonx-legal/{locale}/terms`; Arabic uses RTL and required regional variants remain separately localized.

No ninth public Terms notice is currently required for the cross-cutting authority defects. Existing canonical/localized Terms already cover the material exploit/server-acceptance/account-compromise/evidence/correction rules. Security and commercial-message implementation defects should be fixed technically rather than normalized as intended player access or product behavior.

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
- any future recurring product requires its own compliant recurring-price, renewal, notice, cancellation and reminder treatment; and
- mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy and other non-waivable rights remain intact.

Obvious pricing/catalog/configuration errors, failed/pending/reversed payments, duplicate or accidental grants, fraud, chargebacks, regional-price abuse, promotion/coupon abuse, account compromise, provider outages/rule changes/replacement, unsupported clients, business sale/reorganization/successor operation, economy corrections, feature replacement and lawful permanent service discontinuation remain covered by their canonical rules.

## Active gameplay/enforcement invariant

TycoonX intentionally contains value-moving and automatic mechanics. Genuine salaries/payroll, Company distributions, supply/export/tenders, Begging, Union contributions/fees/treasury movements, player markets, shop auto-fill, TycoonX-operated automation, Government Market systems, Art/Music/Books, trucks/deliveries, care jobs, Company recruitment, bank/FX/stocks/crypto, competitions/rewards, chats, rooms and other supported systems are not prohibited merely because they move value or operate automatically.

A large amount, unusual price, aggressive bid, default, bankruptcy, large gain/loss, high salary, repeated delivery, repeated win, favorable reward or popular creator work is not automatically abuse. A mechanic becomes legally/enforcement-relevant when reliable evidence supports knowing manipulation, disguised value funneling, controlled-account evasion, prohibited RMT, external automation, altered-client/API abuse, exploit laundering, fraud or another actual rule violation.

A successful RPC/row mutation is not an absolute safe harbor if an authorization/validation defect clearly enabled an unintended manipulated state. Conversely, server acceptance or abnormal state alone does not prove knowledge or intent. Enforcement must distinguish detection, containment, state correction and punishment, consider account compromise/outages/retries/races, and correct directly attributable invalid state proportionately rather than automatically destroying unrelated valid paid value.

## Completed code-first legal map

Substantive mapping is complete for Company governance/value movement; Company supply/export/tender commerce; Union contribution/treasury/governance; Art/Begging; player markets/shop auto-fill/system auto-market/Government Market; bank/credit/FX/stocks/crypto; Logistics/jobs/competitions/rewards; Social/UGC; cross-cutting profile/server-authority/privacy; and residual Housing/profile/energy/friends/activity/log authority.

Detailed implementation gates remain the QA source of truth:

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
- `TYCOONX_VIP_ENTITLEMENT_COMMERCIAL_INTEGRITY_RECHECK.md`

## September 10 production remediation verification

Latest read-only production follow-ups are recorded in `TYCOONX_PRODUCTION_REMEDIATION_RECHECK.md` and `TYCOONX_VIP_ENTITLEMENT_COMMERCIAL_INTEGRITY_RECHECK.md`. Previously documented P0/P1 findings are not assumed fixed merely because legal wording is complete.

No complete verified closure was found among the representative critical controls sampled in the latest follow-up. Caller-controlled XP and energy, arbitrary-target/raw-credit authority, Housing authority helpers, broad market-price controls, sensitive profile write/read exposure and generic official-looking notification authority remain open in the reviewed production definitions.

A partial hardening remains verified in `_internal_shop_connected_fill(...)`: its current destination lookup resolves the slot through `user_shop_assets` and requires the shop to belong to the supplied `p_user_id`. This is a real improvement but does not close the identity-authority finding because the SECURITY DEFINER helper remains broadly executable, accepts caller-supplied `p_user_id` and rewrites effective JWT subject state to that identity. The effective user must be derived or independently authorized by the server. `_internal_industrial_connected_fill(...)` remains open on the same identity boundary.

The player-facing shop paths remain separately open. `shop_auto_fill_cheapest(...)` and reviewed `shop_market_buy_and_store_*` helpers use shop metadata but still do not establish the required authenticated-owner predicate inside the privileged settlement path before wallet/source/destination mutation.

The profile recheck remains release-blocking. Authenticated self-update authority still includes sensitive entitlement/staff/moderation/progression fields, while public/anonymous reads expose substantially more raw profile state than a minimal public player card requires. The reviewed generic authenticated UPDATE surface still does not include the Diamond balance, which remains a positive control.

### VIP provenance and expiry-message follow-up

A focused entitlement check confirms why the self-writable `profiles.vip` field is especially serious. `activate_vip_with_diamonds()` can preserve a pre-existing VIP state when no recognized authoritative provider/Diamond entitlement explains it, and the Xsolla entitlement path can similarly preserve a pre-existing profile VIP when creating a first provider record. Effective-VIP logic can then treat that preserved state as continuing entitlement. An untrusted cache boolean must not become authoritative merely because a later legitimate purchase or Diamond exchange occurs.

A separate commercial-communication P0 remains open. `send_vip_expiry_professor_notification(...)` is SECURITY DEFINER and currently executable by anonymous/authenticated roles, accepts target user, expiry time, lead days and source from the caller, and does not independently resolve those commercial facts from authoritative entitlement records before sending an official-looking reminder.

The current reminder copy also introduces a **newly verified product-description defect**: the same renewal-oriented message family is used for candidates that include one-time/non-renewing entitlement sources. Current TycoonX 30-Day VIP is a one-time, non-renewing product. Its reminder must therefore say that the current entitlement ends, does not renew automatically, and that a separate future VIP purchase is possible only if an eligible offer is actually available. It must not imply automatic renewal or rebilling.

Lifetime VIP should not receive an ordinary expiry reminder. Any future genuinely recurring product must receive separate subscription-specific billing, renewal, cancellation, price-change and reminder treatment rather than reusing the one-time 30-Day VIP message.

The global `process_vip_expiry_professor_reminders(...)` function is materially safer than the raw sender because it derives candidates from provider records, excludes conflicting active/later sources and deduplicates reminders. It is nevertheless a global service/scheduler operation and remains executable by ordinary client roles, so it should be restricted to the trusted worker path.

Commercial reminder localization should use the canonical TycoonX locale resolver and source-specific native copy for every supported locale/variant. The reviewed sender has many localized branches but does not cleanly mirror the full app/legal locale model, including generic locale variants. Arabic presentation must remain RTL in the UI.

The historical free-VIP claim path remains disabled in production. Its stale player-readable pre-release error wording should be retired or neutralized without reactivating that historical offer.

### Other confirmed open/closed findings

The Company supply finding remains precise: the older update overload applies linked export-contract price validation, while the richer six-argument overload can still write caller-supplied `unit_price`; no reviewed BEFORE trigger independently restores the missing linked-price validation.

Company recruitment RLS remains open where reviewed policies use a tautological Company comparison instead of correlating the manager's Company with the protected Company. Art resale self-bid protection remains open because the reviewed settlement compares the bidder against the original artist rather than the current resale owner.

Executive Company Chat retains an effective RESTRICTIVE raw-read policy and should not be misreported as open. Equivalent authoritative membership restrictions were not found for ordinary Company/Union message reads in the reviewed policy set, so those channels remain the raw-read hardening target.

The production branding migration also remains outstanding. The latest read-only scan still found the legacy misspelled brand string in **12 deployed function definitions**. Any player-facing text emitted by those functions must render `TycoonX`; technical identifiers may remain only where compatibility requires them. No database function or content was changed by this legal audit.

## Active privacy/controller invariant

For personal-data processing described in the Privacy Policy, the controller remains disclosed as **Atakan Cevik, trading as CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Germany**, with the published privacy contact and TycoonX Support. Localized Privacy routes preserve the distinction between CK-Labs' controller role and any independent-controller role of Apple, Google, Xsolla or another provider.

Restricted social/history data, anonymous Post Office sender identity, gameplay finance, applications, anti-abuse signals and moderation evidence may be processed where justified to operate, secure and support TycoonX, but that does not authorize unnecessary player-to-player disclosure. Client-influenceable, over-broadly readable/writable or notification-derived records must be weighted according to evidentiary quality rather than treated as automatically conclusive.

## Current-law and provider checkpoint

Rechecked on **September 10, 2026**:

- EU Unfair Commercial Practices Directive Article 6 treats a practice as misleading where false or deceptive information about material product/sales facts causes or is likely to cause a transactional decision the consumer would not otherwise take. German UWG § 5 similarly addresses misleading commercial acts capable of influencing a consumer's business decision. This makes source-accurate VIP expiry/purchase messaging a commercial-integrity requirement, not merely a stylistic preference.
- Apple distinguishes auto-renewable subscriptions from one-time products. Current Apple subscription documentation describes auto-renewable subscriptions as renewing unless canceled and uses provider subscription state to determine renewal/expiry behavior. TycoonX's one-time 30-Day VIP should therefore not be described with auto-renewal semantics.
- Google Play's current subscription policy requires clear, accurate disclosure of subscription terms, billing frequency and automatic renewal and expressly says one-time benefits must not be disguised or mischaracterized as subscriptions. This supports keeping current one-time 30-Day VIP copy clearly non-recurring.
- Xsolla remains a separate payment/provider layer from CK-Labs' TycoonX entitlement-delivery and mandatory-consumer-law duties.
- German BGB § 307 continues to restrict unfair/unclear standard terms; §§ 327d and 327i preserve applicable digital-product conformity/remedies; § 327r imposes conditions and, for qualifying material access/usability changes, notice/termination protections for certain continuously supplied digital products.
- GDPR Articles 5, 25 and 32 continue to support data minimisation, privacy by design/default and risk-appropriate confidentiality/security controls.

No material current-law/provider meaning change was identified that requires reopening the canonical or localized legal documents. The newly verified renewal-language problem is a live commercial-notification implementation/content mismatch against legal wording that is already correct.

## Next code-first audit queue

There is no unfinished localization document and no unmapped substantive gameplay cluster.

The next substantive target is **implementation remediation verification**. Highest priority is server-authoritative VIP provenance plus the VIP-expiry sender/processor and source-aware one-time 30-Day VIP copy. Close this gate only when ordinary clients cannot generate expiry messages, target/source/expiry are independently derived, one-time reminders expressly avoid auto-renewal semantics, Lifetime VIP does not receive an ordinary expiry reminder, supported locale dispatch is complete, and legitimate paid/documented entitlements survive the fix.

Then continue closing the existing profile/public-data, XP/energy/wallet, Housing, connected-fill/shop, Company/Union/Art, market/bank/stock, Social/confidentiality and trusted-worker findings only when deployed definitions/policies/grants demonstrate the remediation. After engineering changes land, verify deployed behavior against canonical/legal notices, repeat current Apple/Google/Xsolla plus German/EU checks, and reopen only localized document types affected by a material canonical meaning change.

Database remediation remains outside this legal audit unless explicitly approved.

## Canonical source status

- English Terms: current and supplemented by eight synchronized code-derived clarifications.
- English Purchases & Refunds: current.
- English Privacy Policy: current; broad profile/social exposure remains an implementation defect and is not treated as intended disclosure.
- English Community Standards: current.
- All 25 localized Terms receive all eight synchronized code-derived clarifications.

## Progress metrics

Legal/localization coverage is essentially complete. This follow-up did not close a production blocker, but it identified a concrete commercially material copy mismatch in the live VIP-expiry path and added source-aware closure criteria. Operational commercial readiness is therefore reduced slightly rather than hidden behind completed localization.

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **99.6%**
- **Full commercial/legal/payment readiness:** **80.5%**
- **Overall project completion:** **98.1%**
- **Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

**Next substantive code-first target:** verify server-authoritative VIP provenance and service-only/source-aware VIP-expiry messaging first, then close only P0/P1 findings demonstrably fixed in production before final regression and current-law/provider closure.