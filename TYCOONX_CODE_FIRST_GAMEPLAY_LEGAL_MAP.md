# TycoonX Code-First Gameplay Legal Map

**Read-only implementation audit. Last reviewed: September 10, 2026.**

Owner: CK-Labs  
Scope: map TycoonX legal rules to gameplay/community mechanics that actually exist in the current Flutter client and production Supabase backend so legal hardening follows deployed behavior rather than generic assumptions.

## 1. Source hierarchy and safety boundary

This is internal implementation/legal QA. It does not replace the canonical English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy or Community Standards.

Reviews use current source plus read-only production Supabase schema/function/policy/grant/trigger inspection. No database row, function, trigger, policy, grant, schema object, cron, configuration, player balance or entitlement is changed as part of this legal audit.

A current cap, permission, cooldown, formula, settlement path, UI control or moderation signal is implementation evidence, not automatically a permanent contractual promise, proof of wrongdoing or safe harbor for knowing exploit use.

## 2. Cross-system legal and enforcement principles

For every gameplay/community mechanic:

1. inspect the deployed client entry point and current server authority/settlement path;
2. distinguish intended value movement/social access from disguised, unauthorized or exploit-driven use;
3. do not invent prohibitions against ordinary gameplay the feature expressly invites;
4. do not freeze current formulas, limits, timings or moderation thresholds into permanent promises;
5. distinguish anomaly/report signals from findings and containment from punishment;
6. prefer reconciled authoritative evidence while recognizing that server data can itself be contaminated by authorization/software defects;
7. distinguish compromise, outages, stale state, retries/races and accidental one-off actions from knowing/repeated exploitation;
8. correct directly attributable invalid state proportionately instead of automatically rewriting unrelated legitimate paid-value records; and
9. preserve mandatory consumer, privacy, notice, conformity, modification, appeal and remedy rights.

A successful RPC or row mutation is not an absolute safe harbor when an authorization/validation defect clearly enabled unintended manipulated state. Conversely, server acceptance or an abnormal result alone does not prove knowledge or intent.

## 3. Completed mapping clusters

### 3.1 Company governance and value movement

Reviewed salaries/payroll, authorized Company treasury movements, IPOs, dividends, buybacks and secondary offerings. Genuine use is permitted; sham employment/distributions, circular self-dealing, controlled-account arrangements, exploits and prohibited RMT remain reviewable. TycoonX Companies/shares are fictional gameplay elements, not real securities or investments.

### 3.2 Company supply, exports and tenders

Reviewed `manage_supply`, member/warehouse fulfillment, procurement/export settlement, live/blind tenders, targeted visibility, completion, failure and penalties.

Open implementation point: the richer current Company supply update path does not visibly reapply every linked price ceiling enforced by stronger creation/legacy paths.

Detailed gate: `TYCOONX_COMPANY_SUPPLY_EXPORT_TENDER_RELEASE_GATE.md`.

### 3.3 Union contribution, treasury and governance

Reviewed Union Project donations, membership fees, leader deposits/withdrawals, maintenance, project rewards, upgrades, polls and closure. Genuine use is allowed; controlled-account limit evasion, state manipulation, replay abuse, exploit laundering and prohibited RMT remain reviewable.

Open implementation point: active Union leader/officer generic UPDATE remains broader than the ordinary settings UI and includes server-owned state risk.

Detailed gate: `TYCOONX_UNION_TREASURY_GOVERNANCE_RELEASE_GATE.md`.

### 3.4 Art and Begging

Reviewed Art publication/idempotency, escrow bidding, auction finalization, resales, direct offers, moderation timing and Begging as genuine assistance.

Open implementation points include resale-current-owner self-bid protection, broad Art owner UPDATE, raw active-Art deletion/refund parity and direct-offer preference enforcement.

Detailed gate: `TYCOONX_ART_BEGGING_RELEASE_GATE.md`.

### 3.5 Player markets, shop auto-fill, system auto-market and Government Market

Reviewed agriculture/livestock/mining/industrial listings/purchases, shop auto-fill, TycoonX-operated automatic market activity, Government direct sales, tenders, awards, partial delivery, completion rewards and penalties. Built-in TycoonX automation is intended gameplay, not player botting.

Open implementation points include non-positive agriculture/livestock/mining settlement prices, destination-slot caller binding and client-authored anomaly evidence limits.

Detailed gate: `TYCOONX_PLAYER_GOVERNMENT_MARKETS_RELEASE_GATE.md`.

### 3.6 Bank, credit, FX, stocks and crypto

Reviewed banking, savings, credit/installments, collateral, debt recovery, bankruptcy, FX, Diamond-funded FX slots, stocks/crypto, transaction/price history and automated prices.

These are fictional TycoonX simulation systems, not real bank deposits, securities, investments, legal tender or real cryptoassets. Ordinary debt/default/trading outcomes are gameplay. Valid purchased Diamonds/VIP are not ordinary in-game debt collateral.

Open implementation points include player-writable stock holdings, client-insertable transaction/price inputs, broadly executable price mutation/automation and overly broad internal bank/debt helpers. The production FX zero-balance account-delete safeguard is confirmed.

Detailed gate: `TYCOONX_BANK_CREDIT_FX_STOCKS_CRYPTO_RELEASE_GATE.md`.

### 3.7 Logistics, jobs, competitions and rewards

Reviewed truck sales/rentals, deliveries, claims, Diamond acceleration, care jobs/automation, Company recruitment, daily tasks, level/hourly rewards, rankings and match settlement.

Open implementation points include global care helpers, arbitrary-user daily-task stock consumption, client-writable reward state/checkpoints, cross-Company job RLS correlation and broad global reward settlement execution.

Detailed gate: `TYCOONX_LOGISTICS_JOBS_COMPETITIONS_RELEASE_GATE.md`.

### 3.8 Social, chat and UGC

Reviewed global/country/Company/Union/Executive chat, mentions/replies, polls/pins, Company meeting rooms, private social tables, Home Rooms, Post Office, Music/Books, moderation, reports, restoration and creator-content access/settlement.

Open implementation points include ordinary Company/Union confidentiality, message routing/privileged row authority, Executive notification disclosure, Music auction-state authority, poll parent authorization, Home Room raw-read boundaries, anonymous Post Office identity protection and generic moderation-notification authority.

Detailed gate: `TYCOONX_SOCIAL_UGC_RELEASE_GATE.md`.

### 3.9 Cross-cutting profile/server authority and privacy

Reviewed public/self profile access, staff/entitlement flags, raw refund/XP/energy helpers, connected-fill identity helpers, notifications and evidence quality.

Open implementation points include broad sensitive self-profile UPDATE, excessive public profile exposure, client-trusting XP/energy/reward state, raw wallet/XP helpers, connected-fill identity rebinding and official-looking notification helpers.

Detailed gate: `TYCOONX_CROSS_CUTTING_SERVER_AUTHORITY_PRIVACY_RELEASE_GATE.md`.

### 3.10 Residual Housing/profile/energy/friends/activity/log authority

Reviewed Housing cooldown/supply/maintenance, persona compatibility paths, Housing deposits, friend-list design, activity/news service proxies and remaining log/read boundaries.

Open implementation points include player-writable Housing cooldown enforcement state, broad raw cooldown setter, broadly executable Housing plot creation and service/notification helpers. Positive controls include materially hardened persona training and current Housing deposit release/return behavior.

Detailed gate: `TYCOONX_CROSS_CUTTING_SERVER_AUTHORITY_PRIVACY_RELEASE_GATE.md`.

## 4. Player-facing synchronized Terms notices

The following route-gated clarifications remain synchronized in English plus all 25 target locales:

1. `GameplayEconomyRuleNotice.tsx`
2. `CompanyCommerceRuleNotice.tsx`
3. `UnionGovernanceRuleNotice.tsx`
4. `ArtBeggingRuleNotice.tsx`
5. `PlayerGovernmentMarketRuleNotice.tsx`
6. `BankCreditMarketsRuleNotice.tsx`
7. `LogisticsJobsCompetitionsRuleNotice.tsx`
8. `SocialUgcRuleNotice.tsx`

They display only on the canonical Terms route and localized Terms routes. Arabic uses RTL and the required Spanish, French, Portuguese and Chinese locale variants remain separately localized.

No ninth player-facing notice is required solely to describe insecure implementation surfaces. Existing canonical/localized Terms already contain the material exploit, server-acceptance, compromised-account, evidence-quality and proportional-correction rules. Technical authority/privacy defects should be fixed technically, not normalized as intended access.

## 5. Final production remediation recheck

A fresh September 10, 2026 read-only recheck confirmed that many previously documented P0/P1 findings remain open rather than having silently disappeared.

The consolidated current matrix, positive/closed false positives, evidence rules, remediation order and readiness closure criteria are maintained in:

**`TYCOONX_FINAL_LEGAL_RELEASE_READINESS.md`**

This consolidation includes the still-open profile/role/entitlement, XP/energy/reward, Housing, connected-fill, production-market, Company, Union, Art, stocks/crypto, bank, jobs/global-worker and Social/chat authority/confidentiality findings.

## 6. Current-law and payment boundary

As rechecked on September 10, 2026, the existing legal framework continues to preserve the applicable Apple/Google digital-purchase rules, Xsolla payment/refund boundaries, mandatory German digital-product/AGB protections and GDPR privacy/security duties.

A genuine authorization, confidentiality, settlement, entitlement or backend defect cannot simply be relabeled ordinary gameplay risk to contract around a mandatory remedy. Knowing altered-client/API manipulation is not automatically legitimized merely because a defective backend accepted the request.

No material provider/current-law meaning change was identified in the final consolidation that requires reopening the already-current 25-locale document set.

## 7. Next work

The implementation-derived legal map is now substantively complete and the final readiness matrix exists.

The next work is **implementation remediation verification**:

1. compare production functions, grants, policies and trusted-server fields against `TYCOONX_FINAL_LEGAL_RELEASE_READINESS.md` after engineering changes;
2. close only findings demonstrably fixed in the deployed state;
3. re-run the relevant legal/verifier checks without GitHub Actions;
4. verify canonical/legal notices still match deployed behavior;
5. repeat current Apple, Google Play, Xsolla and German/EU source checks before final closure; and
6. reopen localization only if a material canonical English legal meaning actually changes.

Database remediation remains outside this legal audit unless explicitly approved.