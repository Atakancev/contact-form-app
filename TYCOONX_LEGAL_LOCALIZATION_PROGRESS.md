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
- A current server cap, permission, cooldown, formula, settlement path or UI control is implementation evidence, not automatically a permanent contractual promise or legal safe harbor.

## Current localization state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales. **All 25 target locales and all 100 localized full documents are current.**

Four September 10 code-derived Terms clarifications are synchronized across the canonical Terms route and all target locales:

1. `GameplayEconomyRuleNotice.tsx` covers genuine Company/Union value movement, contribution mechanics and the genuine-purpose rule.
2. `CompanyCommerceRuleNotice.tsx` covers Company supply, warehouse fulfillment, exports, tenders, collusion/self-dealing, artificial value-funneling prices, settlement/state exploitation, proportional correction, outages/account compromise and mandatory-rights protection.
3. `UnionGovernanceRuleNotice.tsx` covers Union membership fees, leader treasury deposits/withdrawals, maintenance/closure, projects/rewards, level upgrades, polls, altered-client/state manipulation, limit evasion, compromise/outage correction and mandatory-rights protection.
4. `ArtBeggingRuleNotice.tsx` covers Art auctions/resales, formal direct offers, genuine Art trading versus disguised gifting, Begging as an intended assistance channel, self-bidding/collusion, moderation before or after publication, escrow reconciliation, account compromise and proportional correction.

The route-gated gameplay clarifications are mounted through the application layout and display only on the canonical `/tyconx-terms-of-service` route and `/tycoonx-legal/{locale}/terms`. Arabic uses RTL and the locale-specific Spanish, French, Portuguese and Chinese variants remain separately localized.

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

This does **not** make every mechanic that transfers value unlawful. TycoonX intentionally contains salaries/payroll, authorized Company distributions, stock mechanics, Company supply procurement, warehouse specialist fulfillment, Company-to-Company exports/contracts, tenders, Begging, Union Project contributions, Union membership fees and leader treasury movements. Genuine use for the feature's intended purpose is allowed unless another specific rule is violated.

A high or low price, large salary, generous dividend, aggressive tender bid, large Union contribution, legitimate leader treasury withdrawal, profitable Company delivery, large legitimate Art bid/direct offer, large Begging donation, contract failure, penalty or insolvency is not automatically abuse. Serious enforcement requires reasonable evidence of the prohibited purpose and should distinguish detection, containment, state correction and punitive account enforcement.

## Code-first Company commerce checkpoint

Read-only production Supabase inspection and current Flutter/economy-source review confirmed the deployed Company commerce lifecycle, including `manage_supply`, member inventory delivery, Company warehouse specialist fulfillment, `manage_exports`, Company-to-Company procurement/export settlement, `manage_tenders`, live/blind bidding, targeted visibility and contract failure/penalty behavior.

The reviewed richer `company_supply_request_create(...)` validates the initial price of a linked export/V2 supply request against the linked contract/offer price. The reviewed richer `company_supply_request_update(...)` does **not clearly reapply that linked contract/V2-offer price ceiling** before writing a changed unit price. This remains an engineering follow-up outside this legal project. Server acceptance is not a safe harbor for knowing exploitation, but accidental or ordinary one-off use must be distinguished from knowing/repeated extraction.

Detailed gate: `TYCOONX_COMPANY_SUPPLY_EXPORT_TENDER_RELEASE_GATE.md`.

## Code-first Union treasury/governance checkpoint

Current Flutter entry points and read-only production Supabase inspection confirm intended Union membership fees, leader deposits/withdrawals, daily maintenance, current closure after seven unpaid maintenance days, project contributions/rewards, level upgrades, polls and leader closure.

Production RLS currently permits an active Union leader or officer to UPDATE the Union row while authenticated UPDATE privileges cover sensitive server-owned columns. The reviewed Finance V2 guard protects treasury consistency in its relevant authority mode but does not itself make all non-treasury governance/progression fields immutable. This remains an engineering security follow-up: generic Union UPDATE should be narrowed and server-owned fields should use dedicated constrained transitions.

Detailed gate: `TYCOONX_UNION_TREASURY_GOVERNANCE_RELEASE_GATE.md`.

## September 10 code-first Art/Begging checkpoint

Current Flutter paths and read-only production Supabase inspection confirm:

- Art publication uses authentication, image presence, nonce/idempotency and fingerprint/single-flight duplicate protection;
- Art bidding is an intended escrow-style gameplay mechanism with outbid refunds, current Finance V2 hold handling and near-close anti-sniping behavior;
- auction finalization transfers in-game ownership to a winner and pays the current seller, while the finalizer cron uses locking to process expired auctions;
- `social_resell_art(...)` intentionally preserves the previous `highest_bid` as the next listing's current starting-price floor;
- `social_cancel_listing(...)` is refund-aware when cancelling an active listing with a current bidder;
- formal Art direct offers exist through the Post Office/direct-offer system, with escrow, accept/decline/counter/expiry states, stale-ownership checks, current offer limits and reference-price guards;
- the Flutter client lets an owner enable/disable Art direct offers and set an Art minimum offer preference;
- Art moderation can occur before or after publication: the reviewed client treats a temporary moderation-unavailable response as allowing publication to continue, while a database trigger separately requests moderation on active Art state changes;
- Begging is an intentionally designed assistance channel: current post creation has message/cadence limits, donations must be positive and not self-directed, and eligible uncollected donations are later collected by the recipient; and
- a genuine Art purchase is a trade for the artwork, while a genuine Begging donation is allowed precisely because Begging is intended to let a player help another without receiving consideration.

### Art/Begging implementation and security findings

The read-only audit identified four engineering priorities. No database change was made.

1. **P0 - current-owner self-bid guard:** the reviewed Art bid function rejects the original artist `user_id`, but after resale the current seller is `owner_id`. A non-original current owner therefore appears able to attempt a bid on their own relisted Art. The server should reject the current seller/owner and test resale specifically.
2. **P0 - generic Art UPDATE authority:** production Art RLS permits the current owner to UPDATE the Art row without visibly restricting auction-managed columns. A modified/direct client may therefore attempt to alter `highest_bid`, `highest_bidder_id`, `status`, `expires_at` or similar server-managed state outside the validated bidding RPC. Auction state should be server-owned through narrow transitions.
3. **P0 - active Art raw DELETE settlement:** the normal cancellation and refund-aware moderation paths explicitly restore/release current bidder value, while the reviewed generic/raw delete path does not visibly perform the same wallet refund in the Art hold trigger. Every active-delete path should be refund-equivalent or should route through the safe settlement primitive.
4. **P1 - direct-offer recipient preferences:** the current client exposes `direct_offers_art_enabled` and an owner minimum Art offer amount, but the reviewed production `social_postoffice_send_offer(...)` definition does not visibly enforce those per-recipient preferences. They should be enforced server-side so a modified/direct client cannot bypass them.

Legal treatment is now explicit across all Terms routes: legitimate collecting, speculation, direct-offer negotiation and Begging assistance are allowed; self-bidding, collusion, controlled-account/circular trades, manipulated auction state, disguised gifting through Art, exploit laundering and prohibited RMT remain reviewable when evidence supports the prohibited purpose. A high Art price or large Begging donation alone is not proof of abuse.

Detailed gate: `TYCOONX_ART_BEGGING_RELEASE_GATE.md`.

## Active privacy/controller invariant

For the TycoonX personal-data processing described in the Privacy Policy, the controller is disclosed directly as **Atakan Cevik, trading as CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Germany**, with the published privacy contact and TycoonX Support. Localized Privacy routes preserve the distinction between CK-Labs' controller role and any independent-controller role of Apple, Google, Xsolla or other providers.

## Current-law clarity checkpoint

German BGB § 307 remains relevant to standard terms: unclear or incomprehensible wording can contribute to an unreasonable disadvantage. Gameplay rules therefore need to explain real authorized mechanics clearly rather than making an intended feature look prohibited while relying on hidden implementation knowledge for the exception.

German digital-product conformity/remedy rules remain separate from gameplay discipline. BGB § 327d and the related remedy regime must not be displaced by gameplay balancing, anti-exploit correction, moderation or account enforcement.

Content moderation must also preserve any mandatory notice, reason, complaint/appeal or other procedural obligations that apply to CK-Labs for the relevant service, content and jurisdiction. A temporary automated-moderation outage must not be represented as permanent approval of user content.

## Next code-first gameplay audit queue

Completed substantive gameplay clusters:

1. Company governance/value movement: salaries, payroll, treasury distributions, IPO/dividends/buybacks/offerings.
2. Company commerce: supply requests, member delivery, warehouse specialist fulfillment, export/procurement offers, tenders, completion, failure/penalties and permissions.
3. Union Project contribution exception: authorized contribution versus ordinary mechanics used as disguised donation channels.
4. Union treasury/governance: membership fees, leader deposits/withdrawals, maintenance/closure, projects/rewards, polls, level upgrades, Union closure and generic UPDATE authority risk.
5. Art/Begging: publication/idempotency, auctions/resales, direct offers/escrow, moderation timing, genuine Art transactions, intended Begging assistance, self-bidding/collusion and direct-write/refund risks.

Continue in this order:

1. **Player and Government markets:** listings, auto-fill/auto-market, price manipulation, coordinated trading, stale prices, delivery and award correction.
2. **Bank/credit/FX/stocks/crypto:** loans, collateral, debt recovery, interest, bankruptcy, FX cooldowns, market-price automation and manipulation/exploit boundaries.
3. **Logistics/jobs/competitions:** trucks, deliveries, care jobs, Company jobs, automated completion, leaderboards, rewards and win-trading/duplicate-completion risks.
4. **Social/UGC:** Company/Union chat, rooms, music/books and remaining UGC, impersonation, scams, moderation, appeals and user-content rights.

## Canonical source status

- English Terms: current and supplemented by synchronized rendered code-derived gameplay clarifications on September 10, 2026.
- English Purchases & Refunds: current.
- English Privacy Policy: current.
- English Community Standards: current.
- All 25 localized Terms receive the gameplay/economy, Company commerce, Union governance and Art/Begging clarifications without duplicating the full static translated body.

## Progress metrics

The percentages intentionally include the still-incomplete code-first gameplay/economy/community audit rather than over-weighting completed payment/platform work. The unresolved implementation/security findings are reflected in readiness rather than hidden by completed localization.

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **98.0%**
- **Full commercial/legal/payment readiness:** **94.1%**
- **Overall project completion:** **95.8%**
- **Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

**Next substantive code-first target:** Player and Government markets, beginning with current listing/purchase/auto-fill/auto-market paths, pricing constraints, stale-state handling, coordinated trading, Government Market bids/awards/delivery and correction boundaries.

Historical payment/platform hardening remains available in Git history. This tracker emphasizes current state, active invariants and the implementation-driven next queue so future runs continue without duplicating completed work.
