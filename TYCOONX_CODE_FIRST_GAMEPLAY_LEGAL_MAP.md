# TycoonX Code-First Gameplay Legal Map

**Read-only implementation audit. Last reviewed: September 10, 2026.**

Owner: CK-Labs  
Scope: map player-facing TycoonX legal rules to gameplay/community mechanics that actually exist in the current Flutter client and production Supabase backend, so legal hardening starts from deployed behavior instead of generic policy assumptions.

## 1. Source hierarchy and safety boundary

This is an internal implementation/legal QA document. It does not replace the canonical English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy or Community Standards.

Reviews use read-only production Supabase schema/function/policy/trigger inspection, current `Atakancev/terrax-flutter` source and the current `Atakancev/contact-form-app` legal repository. No database row, function, trigger, policy, grant, schema object, cron or configuration is changed as part of this legal audit.

Backend implementation is evidence of a feature's current technical purpose, but a current server cap, permission, cooldown, formula, UI control, moderation signal or anomaly threshold is not automatically a permanent contractual promise, proof of wrongdoing or safe harbor for knowing exploit use.

## 2. Cross-system legal and enforcement principles

For every gameplay/community mechanic:

1. inspect the deployed Flutter entry point and current server authority/settlement path;
2. distinguish intended value movement and social access from disguised, unauthorized or exploit-driven use;
3. do not invent hidden prohibitions against ordinary gameplay the feature expressly invites;
4. do not freeze current formulas, limits, timings or moderation thresholds into permanent promises;
5. distinguish anomaly/report/moderation signals from findings and containment from punishment;
6. prefer reconciled authoritative server evidence while recognizing that server data can itself be contaminated by authorization/software defects;
7. distinguish account compromise, outages, stale state and accidental one-off actions from knowing/repeated exploitation;
8. correct directly attributable invalid state proportionately rather than automatically rewriting unrelated legitimate paid-value records; and
9. preserve mandatory consumer, privacy, notice, conformity, change, appeal and remedy rights.

A successful RPC or row mutation is not an absolute safe harbor if an authorization or validation defect clearly enabled an unintended manipulated state. Conversely, server acceptance or an abnormal result alone does not prove that the player knowingly exploited a defect.

## 3. Completed cluster: Company governance and value movement

Reviewed salaries/payroll, authorized Company treasury value movement, IPOs, dividends, buybacks and secondary offerings. Genuine use is permitted; sham employment/distributions, circular self-dealing, controlled-account arrangements, exploits and prohibited RMT remain reviewable. TycoonX Companies and shares are fictional game elements, not real securities or investments.

## 4. Completed cluster: Company supply, exports and tenders

Reviewed `manage_supply`, member/warehouse fulfillment, Company-to-Company procurement/export settlement, `manage_tenders`, live/blind bidding, targeted visibility, completion, failure and penalties.

Open finding: reviewed linked-price validation is stronger on Company supply request creation than update. Detailed control: `TYCOONX_COMPANY_SUPPLY_EXPORT_TENDER_RELEASE_GATE.md`.

## 5. Completed cluster: Union contribution, treasury and governance

Reviewed Union Project donations, membership fees, leader deposits/withdrawals, maintenance, project rewards, upgrades, polls and closure. Genuine use is allowed; controlled-account limit evasion, state manipulation, duplicate/replay abuse, exploit laundering and prohibited RMT remain reviewable.

Open finding: active Union leaders/officers have a broader generic row UPDATE surface than the normal UI. Detailed control: `TYCOONX_UNION_TREASURY_GOVERNANCE_RELEASE_GATE.md`.

## 6. Completed cluster: Art and Begging

Reviewed Art publication/idempotency, escrow bidding, auction finalization, resales, direct offers, moderation timing and Begging as genuine assistance.

Open findings remain: resale-owner self-bid protection, broad Art owner UPDATE, raw active-Art deletion/refund parity and direct-offer preference enforcement. Detailed control: `TYCOONX_ART_BEGGING_RELEASE_GATE.md`.

## 7. Completed cluster: Player markets, shop auto-fill, system auto-market and Government Market

Reviewed agriculture/livestock/mining/industrial listings and purchases, shop auto-fill, TycoonX `auto_market_tick()`, Government direct sales, tenders, awards, partial delivery, completion rewards and penalties. Built-in TycoonX automation is intended gameplay, not player botting.

Open findings remain: inconsistent positive-price enforcement in agriculture/livestock/mining settlement, destination-slot ownership binding for shop fill helpers, broad market-sensitive write surfaces and client-authored Government anomaly evidence limits. Detailed control: `TYCOONX_PLAYER_GOVERNMENT_MARKETS_RELEASE_GATE.md`.

## 8. Completed cluster: Bank, credit, FX, stocks and crypto

Reviewed legacy/current banking, savings, credit, installments, collateral, debt recovery, bankruptcy, FX, Diamond-funded FX slots, stocks/crypto, transaction/price history and automated prices.

Player-facing baseline: these are fictional TycoonX simulation systems, not real bank deposits, securities, investments, legal tender or real cryptoassets. Ordinary debt/default/trading outcomes are gameplay, not automatic misconduct. Valid purchased Diamonds/VIP are not ordinary in-game debt collateral. System-operated market automation is intended gameplay.

Open implementation/security findings remain: direct player write authority over `user_stocks`; client-insertable `stock_transactions`; broad `stock_price_history` insertion; broadly executable market-price mutation helpers; client-writable retained legacy bank economic state; overly broad debt-resolution and internal bank helpers. The production FX zero-balance DELETE safeguard was confirmed.

Detailed control: `TYCOONX_BANK_CREDIT_FX_STOCKS_CRYPTO_RELEASE_GATE.md`.

## 9. Completed cluster: Logistics, jobs, competitions and rewards

Reviewed truck sales/rentals, new/loaded deliveries, claims, Diamond acceleration, care jobs/automation, Company recruitment, daily tasks, level-up/hourly rewards, rankings and match settlement.

Open findings remain: broadly executable global care helpers; arbitrary-user daily-task stock consumption; client-writable hourly cooldown state; client-influenceable level-reward checkpoint; cross-Company job RLS correlation defect; stale job overloads; broad match-settlement execution; stale legacy Logistics dependency.

Detailed control: `TYCOONX_LOGISTICS_JOBS_COMPETITIONS_RELEASE_GATE.md`.

## 10. Completed cluster: Social, chat and UGC

Current Flutter plus read-only production Supabase review covered ordinary/global/country/Company/Union/Executive chat, direct/group/team mentions, replies, polls, pins, Company meeting rooms, restaurant/private social tables, Home Rooms, Post Office, Music, Books, moderation, reports, restoration and creator-content access/settlement.

### P0: ordinary Company/Union chat confidentiality is not server-bound

Current `messages` SELECT policies include broad permissive access. The reviewed restrictive server read boundary is specific to Executive Company Chat. Ordinary Company and Union history is filtered by the Flutter query but is not equivalently membership-bound at the server policy layer.

Legal meaning: restricted channels are intended for their authorized audience. A direct-API read through an authorization defect is not permitted merely because the backend returned data. CK-Labs should not promise absolute secrecy or end-to-end encryption, but it must not use legal language to excuse avoidable unauthorized disclosure.

### P0: ordinary message routing and privileged row fields are too client-writable

The Flutter chat service inserts directly into `messages` with client-supplied routing fields. Current non-executive INSERT/owner UPDATE authority does not visibly make all Company/Union routing fields immutable or server-validate membership. Row-wide owner UPDATE can also undermine the dedicated permission-aware pin RPC.

Required direction: server-authoritative destination validation, immutable routing after creation, server-owned pin state, and narrow player-editable message fields.

### P0: Executive Company Chat can leak through notifications

`can_access_executive_company_chat(...)` itself applies a meaningful current role boundary. However, reviewed mention/reply/channel/group-notification logic can include the full message body without applying the same current audience check. This can expose Executive Company Chat content to specialists, outsiders mentioned by nickname, or former recipients in reply paths.

Required direction: every content-bearing restricted push must reuse the same current authorization rule as reading the parent message.

### P0: Music auction settlement trusts owner-writable listing state

The normal Flutter path uses `social_create_music_post(...)` and `social_bid_music(...)`; the canonical bid RPC authenticates, locks, blocks owner self-bids, checks funds and records the bid.

But current Music owner UPDATE policy is broader than the validated auction RPC and can expose auction-managed fields. Reviewed finalization/cancellation credits wallets based on listing `highest_bid` / `highest_bidder_id` state without independently establishing that every credited amount is backed by the authoritative accepted bid/hold.

Required direction: settlement-managed Music fields must be server-owned, and wallet credits must reconcile to authoritative bid/hold evidence within an idempotent locked settlement boundary.

Legal meaning: a genuine high Music bid is not abuse. Fabricated bid/settlement state, controlled-account circular trades, exploit-created value and prohibited RMT remain reviewable. Contaminated state or receipt of a bad settlement alone does not automatically prove intentional exploitation.

### P1: anonymous Post Office presentation is not enforced in the raw recipient read

The real Post Office send path includes an `is_anonymous` option, but stored rows retain `from_user_id` and the current recipient is authorized to SELECT the row. A technically capable recipient can therefore potentially obtain sender identity despite the ordinary interface's anonymous presentation.

Required direction: if anonymity to the recipient remains a product promise, use a recipient-safe read surface that redacts sender identity while retaining lawful CK-Labs identity access for moderation/security/legal obligations.

### P1: polls do not consistently inherit parent-message authorization

`vote_chat_poll(...)`, vote-count access and vote-row visibility focus on poll/voter rules without consistently proving that the caller may read the parent restricted message. Parent-message authorization should be shared by poll participation, counts, voter identity, reactions, replies and derived features.

### P1: Home Room private collection state bypasses the intended entrance RPC

Home Room entry, profile loading, chat, collection saving and playback RPCs contain meaningful audience/ownership checks. However, several underlying collection/profile tables use broad authenticated SELECT policies, allowing direct reads that bypass the intended entrance requirement.

Required direction: align raw table reads with the intended active-room audience or expose only an intentional minimal public view.

### P1: official-looking moderation notification is broadly callable

`notify_moderation_event(...)` is SECURITY DEFINER, can send official-looking moderation pushes using a server notification secret, and the reviewed function does not establish a trusted caller before using caller-provided event facts.

Required direction: trigger/service/staff-internal execution only, preferably deriving notification facts from an authoritative moderation event. A push notification is evidence that a notification was sent, not proof that the underlying violation occurred.

### Brand defect in deployed notification prose

The reviewed `handle_new_message_mention()` fallback still contains `TyconX Community Global Chat Channel`. This is player-facing server-generated prose and violates the mandatory brand rule. No database change was made. The next approved migration touching the function should change it to `TycoonX Community Global Chat Channel` and search all notification branches for the same misspelling.

### Positive controls confirmed

- Executive Company Chat has a restrictive read function based on current Company access.
- Private social-table chat binds reads/inserts to active table membership and validates reply-table consistency.
- Company meeting-room validation checks current Company membership and management/admission state.
- Home Room entry/chat RPCs use resident/invitation/admission/current-visit checks.
- Message/user reports bind reporter identity and expose staff review separately.
- moderation restoration functions include internal staff checks and recovery reasons.
- Book publication, restocking, pricing and review RPCs enforce caller/author/ownership/eligibility rules.

### Legal doctrine synchronized

The Social/UGC Terms clarification now explains public versus restricted audiences, operator-side lawful access, anonymous-feature limits, altered-client/access-control abuse, impersonation/phishing/scams/doxxing, Music/Book commerce, moderation timing, evidence quality, account compromise, proportional correction and mandatory appeal/privacy/consumer rights.

General creator rights, the limited UGC licence, copyright complaint handling and UrhDaG classification remain governed by `TYCOONX_UGC_COPYRIGHT_URHDAG_RELEASE_GATE.md` rather than duplicated here.

Detailed control: `TYCOONX_SOCIAL_UGC_RELEASE_GATE.md`.

## 11. Player-facing synchronized Terms notices

The following route-gated Terms clarifications are synchronized in English plus all 25 target locales:

1. `GameplayEconomyRuleNotice.tsx`
2. `CompanyCommerceRuleNotice.tsx`
3. `UnionGovernanceRuleNotice.tsx`
4. `ArtBeggingRuleNotice.tsx`
5. `PlayerGovernmentMarketRuleNotice.tsx`
6. `BankCreditMarketsRuleNotice.tsx`
7. `LogisticsJobsCompetitionsRuleNotice.tsx`
8. `SocialUgcRuleNotice.tsx`

They display only on the canonical Terms route and localized Terms routes. Arabic uses RTL and required Spanish, French, Portuguese and Chinese variants remain separately localized.

## 12. Current law and platform boundary

As rechecked on September 10, 2026, Apple App Review Guideline 1.2 and Google Play's UGC policy continue to require meaningful moderation/reporting/blocking safeguards for relevant UGC/social interactions. Where applicable, the EU Digital Services Act preserves content-moderation reason/complaint safeguards. GDPR processing principles and security/confidentiality duties remain independent of in-game access labels.

German BGB mandatory consumer and digital-product rights remain separate from gameplay/community discipline. A genuine confidentiality, moderation, entitlement or backend defect cannot simply be relabeled ordinary gameplay risk to contract around a mandatory remedy.

## 13. Next code-first audit order

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

Next: **cross-cutting server-authority/privacy remediation and residual-gap sweep**. Revisit all open P0/P1 findings, inspect privileged SQL/Edge Functions and legacy paths not yet mapped, and verify that current legal wording still matches deployed behavior. Database remediation remains outside this legal audit unless explicitly approved.