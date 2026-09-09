# TycoonX Code-First Gameplay Legal Map

**Read-only implementation audit. Last reviewed: September 10, 2026.**

Owner: CK-Labs  
Scope: map player-facing TycoonX legal rules to gameplay mechanics that actually exist in the current Flutter client and production Supabase backend, so legal hardening starts from deployed game behavior instead of generic policy assumptions.

## 1. Source hierarchy and safety boundary

This is an internal implementation/legal QA document. It does not replace the canonical English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy or Community Standards.

The September 10 reviews used:

- read-only inspection of the production TycoonX Supabase schema and selected current `pg_get_functiondef(...)` definitions;
- the current `Atakancev/terrax-flutter` Flutter repository and economy research; and
- the current `Atakancev/contact-form-app` legal repository.

No database row, function, trigger, policy, schema object or configuration value was changed.

Backend implementation is evidence of a feature’s current technical purpose, but a current server cap, permission, cooldown, formula, overload or UI control is not automatically a permanent contractual promise or a safe harbor for knowing exploit use.

## 2. First gameplay mismatch already corrected: Begging is not the only contribution mechanic

Production TycoonX contains `donate_union_project(...)`, and the client uses it as a real Union Project contribution action. The current server records project donations, applies the current contribution rules and can distribute configured completion rewards.

Therefore the public rule is now correctly narrower:

- Begging and any TycoonX feature expressly designed for assistance or contributions, including an available Union Project donation feature, may be used within that feature’s purpose and limits;
- mechanics not designed for gifts, donations, contributions or assistance are not substitute donation channels; and
- an authorized contribution feature still cannot be used for RMT, exploit laundering, coordinated limit evasion or another separately prohibited arrangement.

This clarification is synchronized to all 25 localized Terms routes.

## 3. Company employment, treasury and public-company mechanics already reviewed

Current deployed systems reviewed include:

- Company salaries and payroll;
- authorized Company treasury deposits/withdrawals;
- IPOs;
- dividends;
- buybacks; and
- secondary offerings.

Legal baseline:

- these are genuine TycoonX mechanics intentionally capable of moving Company/player value;
- a legitimate salary, payroll payment, authorized owner distribution, dividend, IPO participation, buyback or offering is not prohibited merely because value changes hands;
- current limits/cooldowns/permissions do not prove every arrangement under those limits is genuine;
- sham employment, circular self-dealing, controlled-account arrangements, exploit use and RMT remain reviewable when evidence supports the prohibited purpose; and
- unusual profitability or generosity alone is not enough for a serious enforcement finding.

TycoonX Companies and shares remain fictional game elements rather than real securities, deposits or investments.

## 4. Company supply requests now reviewed from current production definitions

The current rich `company_supply_request_create(...)` path:

- requires an authenticated actor with `manage_supply`;
- rejects an insolvent Company;
- validates product, quantity, quality, price, deadline and note inputs;
- supports a link to a legacy export contract or current V2 offer;
- checks the Company/link relationship;
- checks the initial linked request price against the relevant contract/offer price; and
- applies a current catalog-derived price ceiling to ordinary unlinked requests.

The repository retains older overloads with historic rule differences. Those differences are source drift, not player-facing promises.

The current `company_supply_request_delete(...)` path prevents ordinary deletion after deliveries and uses cancellation for current V2-linked requests. `company_supply_request_close(...)` requires `manage_supply`.

Legal baseline:

A genuine supply request is procurement gameplay. Price, margin and Company membership are evidence inputs, not automatic proof of donation or abuse. Sham procurement, artificial value-funneling prices, false fulfillment, exploit-generated stock or coordinated controlled-account transactions can be investigated when the evidence supports that purpose.

## 5. Company member supply delivery is an intended goods-for-value transfer

The current public `company_supply_deliver(...)` path delegates into the Finance V2 inner delivery implementation. The deployed design requires a real supply request and qualifying inventory/quality, consumes the supplying member’s goods, pays the supplying player from Company treasury, progresses the request and records the economic event.

Legal consequence:

- a Company member selling genuine qualifying goods to their Company is allowed gameplay;
- a member earning a large margin is not automatically cheating;
- the Company/member relationship is inherent in the mechanic and is not itself evidence of collusion; and
- review should focus on whether there was genuine stock/delivery and a genuine Company purpose rather than the mere transfer of treasury money.

## 6. Company warehouse fulfillment is a specialist transfer in the deployed economy

The current `company_supply_deliver_from_warehouse(...)` path requires `manage_supply`, consumes stock from the Company warehouse, debits Company treasury and credits the acting user. Current Finance V2 research classifies the route as a **specialist supply transfer**.

That matters legally: CK-Labs should not silently treat every such specialist credit as invalid when the live mechanic itself intentionally produces it.

However, technical availability does not protect deliberate abuse. Repeated or coordinated use mainly to extract treasury value outside the genuine supply purpose, especially together with manipulated request terms or controlled accounts, may be reviewed. Ordinary one-off use of a visible control should not automatically be punished as knowing exploit abuse without evidence of knowledge, repetition or another relevant factor.

## 7. Company integrity finding: linked supply-request update price validation is asymmetric

The current richer `company_supply_request_create(...)` validates a linked legacy export contract or V2 offer and prevents the initial supply-request unit price from exceeding the linked commercial price.

The reviewed current richer `company_supply_request_update(...)` preserves important linked fields, but it does **not clearly reapply the linked contract/V2-offer price ceiling before writing a changed `unit_price`**. Older retained overloads contain different historic validation behavior.

This creates a material implementation/legal risk:

- a `manage_supply` actor may be able to produce a server-accepted linked request price state that the current creation path would reject;
- if that state is then used to settle Company supply, server acceptance alone cannot be treated as conclusive legal authorization;
- knowing/repeated use of an obviously inconsistent state to funnel treasury value can fall under exploit/self-dealing rules; and
- accidental or ordinary use must remain distinguishable from knowing exploitation.

Engineering follow-up is required outside this legal run: make linked-price validation symmetric between create/update and resolve retained overload drift. No production change was made by this audit.

## 8. Current Company export/procurement offers now reviewed

Current `new_company_offer_create(...)` supports export/procurement offers and tenders. It uses feature-specific permissions, blocks insolvent Companies, checks treasury/capacity, applies current price/penalty guards and supports targeted visibility.

For the current `export` path, the issuer is a Company buyer requesting goods. Another Company with `manage_exports` can accept through `new_company_export_accept(...)`. Acceptance records the supplier Company and actor but does not itself complete the goods-for-value settlement.

Current `new_company_export_complete(...)` is the settlement step. It checks the accepted supplier Company, `manage_exports`, deadline, warehouse quantity and quality. For Company procurement it also verifies buyer treasury and capacity, then:

- removes goods from the supplier Company warehouse;
- debits the buyer Company treasury;
- adds goods to the buyer Company warehouse;
- credits the supplier Company treasury;
- records the transactions; and
- marks the contract complete.

Legal baseline:

Genuine Company-to-Company procurement is permitted gameplay. Acceptance is a commitment, not proof of delivery. Completion is a real goods-for-value settlement. A profitable contract or expensive supplier is not automatically manipulation, but controlled-Company self-dealing, false fulfillment, exploit-created stock or artificial terms used mainly to transfer value remain reviewable.

## 9. Current Company tenders now reviewed

Current production `new_company_tender_bid(...)`:

- authenticates the actor and derives their current Company;
- requires `manage_tenders`;
- blocks insolvent Companies;
- blocks the issuing Company from bidding on its own tender;
- respects targeted visibility;
- supports live and blind tenders;
- permits one sealed Company bid in a blind tender;
- permits live-bid updates; and
- currently extends bidding near closing under anti-sniping logic.

Current `new_company_tenders_sweep()` chooses the lowest bid, using bid time as the tie-breaker, and creates an accepted supplier contract for the winning Company.

Legal baseline:

Ordinary competitive bidding is allowed. A low bid, unusual bid or repeated win is not proof of collusion. Bid rigging, fake competition between commonly controlled Companies, coordinated tender allocation, deliberate false bidding/non-performance, timing exploit use or RMT-connected outcomes can be reviewed when evidence supports the arrangement.

## 10. Export failure and penalty are normal gameplay outcomes

Current `new_company_export_fail_internal(...)` distinguishes an unaccepted expired offer from an accepted failed contract. For an accepted contract it applies the configured/current penalty to the supplier Company and, for a Company procurement request, can credit the buyer Company. It updates insolvency state and records the result.

Current `new_company_export_sweep_overdue()` processes accepted contracts that pass their deadline and cleans up older unresolved states.

Legal baseline:

- failure, penalty and resulting insolvency can be ordinary gameplay outcomes;
- they are not automatically Terms violations;
- deliberate failure between controlled Companies to transfer value or manipulate Company state can be reviewed separately;
- outages, stale jobs or backend errors must be separated from voluntary non-performance; and
- corrections must not double-penalize one event.

## 11. Company commerce uses feature-specific authority

Current reviewed Company commerce uses:

- `manage_supply` for supply-request management and warehouse fulfillment;
- `manage_exports` for current export acceptance/completion/failure; and
- `manage_tenders` for tender creation/bidding.

Current role/custom-permission state can change. A permission in one Company feature is not a promise of authority in another. Support/enforcement should use authoritative actor/Company/permission evidence from the relevant time rather than a later screenshot of a changed role.

Account compromise and rogue-officer conduct remain causation questions; they should not automatically be attributed to every Company member.

## 12. Server-authoritative does not mean server-infallible

For the reviewed systems, server transaction and state records are the primary operational evidence. They can still reflect bugs, duplicated jobs, stale state, configuration errors or source-drifted overloads.

Code-first enforcement rules therefore remain:

1. prefer authoritative server records over stale client displays;
2. do not treat a successful RPC as an absolute safe harbor for knowing exploit use;
3. do not treat a server record as immune from correction where objective technical evidence proves invalid state;
4. correct directly attributable invalid state rather than unrelated legitimate wealth;
5. distinguish economic correction from punitive enforcement;
6. distinguish accidental one-off use, outages and compromise from knowing/repeated exploitation; and
7. preserve unrelated legitimate paid value and mandatory consumer rights.

## 13. Player-facing synchronization for the Company commerce audit

`app/tycoonx-legal/CompanyCommerceRuleNotice.tsx` provides the same substantive clarification in English plus all 25 target locales. It is route-gated to:

- `/tyconx-terms-of-service`; and
- `/tycoonx-legal/{locale}/terms`.

The root layout renders the route-gated component, so the clarification is available on the canonical English Terms route and every localized Terms route without duplicating 25 full static Terms bodies.

The notice clarifies that supply, warehouse fulfillment, exports and tenders are genuine mechanics while prohibiting sham procurement, collusive bidding, controlled-account self-dealing, false fulfillment, deliberate non-performance, artificial value-funneling prices and knowing duplicate/stale/cancellation/settlement exploitation. It also states that price/profit/failure alone does not prove abuse and preserves proportional correction, outage/account-compromise distinctions, unrelated legitimate paid value and mandatory rights.

Detailed internal control: `TYCOONX_COMPANY_SUPPLY_EXPORT_TENDER_RELEASE_GATE.md`.

## 14. Union treasury/governance now reviewed from current Flutter + production server behavior

The current Flutter Union service invokes dedicated RPCs for membership fees, maintenance, leader treasury deposits/withdrawals, projects/donations, level upgrades, polls, member removal and Union closure. Ordinary Union settings such as description, membership fee, approval mode and payment mode are currently updated directly on the `unions` table.

Current production behavior reviewed:

- `pay_union_membership_fee()` moves the active member’s player money into Union treasury and advances the next fee-due time;
- `union_leader_deposit(...)` is leader-only and intentionally moves player value into Union treasury;
- `union_leader_withdraw(...)` is leader-only and intentionally moves Union treasury value into the leader’s wallet;
- `pay_union_maintenance_now()` can pay one currently unpaid maintenance day from Union treasury;
- active `union_daily_sweep()` automatically handles due auto-pay membership fees and daily Union maintenance;
- the current maintenance sweep closes an active Union after seven unpaid maintenance days and marks active members as left;
- `donate_union_project(...)` enforces the current 50% cumulative per-user project-contribution cap, moves completed project value into Union treasury, grants Union XP, and can distribute a configured portion of project value among active members;
- `start_union_level_upgrade()` is leader-only, immediately debits current upgrade cost and stores a future completion time; `sync_union_level_upgrade(...)` later spends the required XP, raises the level and updates the member limit;
- Union polls are gameplay governance tools whose vote behavior follows the poll configuration; and
- `collapse_union()` is leader-only, closes the Union, marks active members left, cancels pending applications, disables recruitment and records the closure.

Legal baseline:

- these are genuine gameplay mechanics, so a legitimate high membership fee, deposit, leader withdrawal, project contribution/reward, maintenance charge or upgrade expense is not automatically cheating merely because significant value moves;
- Union treasury is shared in-game state rather than a bank account, real-world escrow, partnership asset or personal member claim;
- inability to afford a fee or maintenance consequence is gameplay, not fraud;
- a legitimate project reward is a feature-defined Union distribution rather than a disguised gift by another player;
- current numeric fees, thresholds, contribution caps, reward percentages, upgrade costs/durations and member limits are implementation/balance rules, not permanent contractual promises;
- controlled-account limit evasion, modified-client state manipulation, prohibited RMT, exploit-created value and duplicate/replay abuse remain reviewable where evidence supports them; and
- outages, duplicate jobs, stale state and account compromise must be separated from intentional abuse.

Detailed internal control: `TYCOONX_UNION_TREASURY_GOVERNANCE_RELEASE_GATE.md`.

## 15. Union authority security finding: generic `unions` UPDATE is broader than the normal UI

The production `unions` table currently has RLS enabled. Its UPDATE policy allows an active Union leader or officer to update the relevant Union row through `is_union_leader_or_officer(id)`. Authenticated UPDATE privileges currently cover all `unions` columns, including `leader_id`, `status`, `union_level`, `union_xp`, `member_limit`, maintenance state and treasury.

The current Finance V2 deferred authority trigger checks treasury consistency while Finance V2 is in `FULL_AUTHORITY`, but the reviewed trigger does not make non-treasury governance/progression fields immutable. The reviewed Union constraints likewise do not make `leader_id` immutable.

This produces an important server-authority distinction:

- the ordinary Flutter settings UI writes only a small intended subset of settings;
- a modified/direct client may be able to attempt broader state changes that the UI never offers;
- server acceptance caused by an over-broad authorization surface is not proof that manipulated state was intended gameplay; and
- later leader-only RPCs must not rely on a manipulable leadership field without a hardened transition path.

Engineering follow-up outside this legal project should narrow generic Union UPDATE to intended mutable settings, make server-owned state non-writable by ordinary clients, and implement any intended leadership transfer through a dedicated constrained/audited server operation. No production policy or function was modified by this review.

## 16. Player-facing synchronization for the Union audit

`app/tycoonx-legal/UnionGovernanceRuleNotice.tsx` now provides the Union clarification in English plus all 25 required locales and is route-gated to the canonical English Terms route and every localized Terms route.

It explains that:

- membership fees, leader treasury movements, projects/rewards, maintenance, upgrades and polls are genuine mechanics;
- current repeated unpaid maintenance can close a Union, with the present implementation using seven unpaid days;
- current numeric mechanics may be rebalanced prospectively;
- Union treasury is shared fictional game state rather than an individual real-money claim;
- outages, duplicate jobs, stale state and account compromise can justify transaction/state reconciliation where reliable evidence exists; and
- modified-client state changes, alternate-account limit evasion, replay/duplicate exploits and prohibited RMT remain prohibited even where a defective server authorization surface accepts a request.

Arabic is rendered RTL and the regional language variants remain separately localized.

## 17. Other deployed economy surfaces identified for continuing code-first review

The read-only production inventory and Flutter repository confirm additional active or retained systems requiring implementation-first legal review:

- social art bidding, art-auction finalization, direct offers, moderation and Begging;
- player markets, producer/shop/industrial purchases, auto-fill/auto-market and market events;
- Government Market bidding, awards, delivery and synchronization;
- care jobs, Company jobs, applications, logistics jobs and automated completion;
- bank deposits, savings, interest, loans/credit, installments, collateral, debt recovery and bankruptcy;
- in-game FX trading and cooldowns;
- stock buying/selling and market-price automation;
- crypto-price updates;
- trucks, logistics-market listings, loaded deliveries and delivery claims;
- Football Manager listings, bids, offers, salaries and auctions; and
- leaderboards, competitions, rewards and ranking systems.

## 18. Code-first enforcement principles

For each remaining mechanic:

1. identify what the deployed feature is actually designed to do;
2. inspect both Flutter entry points and current server authority/settlement functions;
3. distinguish intended value movement from disguised use;
4. do not turn a current numeric cap, permission or visible button into a permanent contractual promise;
5. do not invent a hidden prohibition against normal gameplay the feature expressly invites;
6. distinguish detection signals from findings;
7. distinguish containment/state correction from punitive account enforcement;
8. preserve unrelated legitimate paid value and mandatory consumer rights;
9. treat account compromise and exploit-generated value as separate causation questions; and
10. document material implementation drift before relying on it for player sanctions.

German BGB § 307 remains relevant because standard terms must be clear and understandable and must not unreasonably disadvantage users. Mandatory digital-product conformity/remedy rules remain separate from gameplay discipline.

## 19. Next code-first gameplay legal audit order

Completed substantive clusters:

1. **Company governance/value movement:** salaries, payroll, treasury distributions, IPO/dividends/buybacks/offerings.
2. **Company commerce:** supply requests, member delivery, warehouse specialist fulfillment, export/procurement offers, live/blind tenders, completion, failure/penalties and authority.
3. **Union contribution exception:** Union Project donation as an authorized contribution mechanic.
4. **Union treasury/governance:** membership fees, leader deposits/withdrawals, daily maintenance/closure, projects/rewards, polls, level upgrades, closure, alternate-account/limit evasion and the generic Union UPDATE authority risk.

Next queue:

1. **Art/Begging:** auction bids, direct offers, duplicate publication, moderation, genuine art purchases, intended assistance, collusion and self-bidding.
2. **Player and Government markets:** listings, auto-fill/auto-market, price manipulation, coordinated trading, stale prices, delivery and award correction.
3. **Bank/credit/FX/stocks/crypto:** loans, collateral, debt recovery, interest, bankruptcy, FX cooldowns, market-price automation and manipulation/exploit boundaries.
4. **Logistics/jobs/competitions:** trucks, deliveries, care jobs, Company jobs, automated completion, leaderboards, rewards and win-trading/duplicate-completion risks.
5. **Social/UGC:** Company/Union chat, rooms, art/music/books, impersonation, scams, moderation, appeals and user-content rights.

Future runs should continue from this deployed implementation inventory rather than generic game-policy templates.
