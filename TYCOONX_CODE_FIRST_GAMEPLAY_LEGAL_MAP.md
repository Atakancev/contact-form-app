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

Backend implementation is evidence of a feature's current technical purpose, but a current server cap, permission, cooldown, formula, overload, UI control or anomaly threshold is not automatically a permanent contractual promise, a finding of wrongdoing or a safe harbor for knowing exploit use.

## 2. Cross-system legal/enforcement principles

For every gameplay mechanic reviewed:

1. identify what the deployed feature is actually designed to do;
2. inspect both Flutter entry points and current server authority/settlement functions;
3. distinguish intended value movement from disguised or exploit-driven use;
4. do not turn a current numeric cap, permission, formula or visible button into a permanent contractual promise;
5. do not invent a hidden prohibition against ordinary gameplay that the feature expressly invites;
6. distinguish anomaly/detection signals from findings;
7. distinguish containment and state correction from punitive account enforcement;
8. prefer reliable server settlement/history over stale client displays, while recognizing that server state can itself be wrong because of bugs;
9. distinguish account compromise and accidental one-off activity from knowing/repeated exploitation;
10. preserve unrelated legitimate paid value and mandatory consumer rights; and
11. document material implementation drift/security gaps before relying on them for player sanctions.

A successful RPC is not an absolute safe harbor if an authorization, validation or configuration defect clearly allowed an unintended manipulated state. Conversely, server acceptance alone does not prove a player knowingly exploited a defect.

## 3. Completed: Company governance and value movement

Reviewed deployed mechanics include salaries/payroll, authorized Company treasury value movement, IPOs, dividends, buybacks and secondary offerings.

Legal baseline:

- these are genuine TycoonX mechanics capable of intentionally moving Company/player value;
- a legitimate salary, dividend, offering, buyback or authorized distribution is not prohibited merely because a large amount moves;
- current limits/cooldowns do not prove every arrangement under them is genuine;
- sham employment, circular self-dealing, controlled-account arrangements, exploit use and prohibited RMT remain reviewable where evidence supports the prohibited purpose; and
- TycoonX Companies and shares are fictional game elements, not real securities, deposits or investments.

## 4. Completed: Company supply, exports and tenders

Reviewed current behavior includes `manage_supply`, member supply delivery, Company warehouse specialist fulfillment, `manage_exports`, current Company-to-Company procurement/export settlement, `manage_tenders`, live/blind tender bidding, targeted visibility, completion, failure and penalties.

Legal baseline:

- genuine procurement, inventory delivery, warehouse specialist fulfillment, exports and tenders are intended commerce gameplay;
- price, profit, Company relationship, repeated tender wins, failure, penalties and insolvency are evidence context, not automatic abuse;
- sham procurement, controlled-Company self-dealing, false fulfillment, collusive bids, artificial value-funneling terms, exploit-created stock and prohibited RMT remain reviewable where evidence supports them; and
- outages, stale jobs and backend errors must be separated from voluntary non-performance.

Open implementation finding: the reviewed richer `company_supply_request_create(...)` validates a linked export/V2 request's initial price against the linked commercial price, while the reviewed richer update path does not clearly reapply that ceiling to an edited `unit_price`. Engineering should make linked-price validation symmetric and resolve retained overload drift.

Detailed control: `TYCOONX_COMPANY_SUPPLY_EXPORT_TENDER_RELEASE_GATE.md`.

## 5. Completed: Union contribution exception

Production TycoonX contains `donate_union_project(...)`, so Begging is not the only feature expressly designed to let value move without ordinary commercial consideration.

Legal baseline:

- Begging and any TycoonX feature expressly designed for assistance/contributions, including an available Union Project contribution feature, may be used according to that feature's purpose and limits;
- ordinary mechanics not designed for gifts/contributions are not substitute donation channels; and
- an authorized contribution feature still cannot be used for exploit laundering, controlled-account limit evasion or prohibited RMT.

## 6. Completed: Union treasury and governance

Reviewed current systems include membership fees, leader treasury deposits/withdrawals, daily maintenance, current closure after repeated unpaid maintenance, Union Project contributions/rewards, level upgrades, polls and leader-triggered Union closure.

Legal baseline:

- legitimate fees, deposits, leader withdrawals, maintenance, project rewards and upgrade spending are genuine game systems;
- Union treasury is shared fictional game state rather than a bank account or personal member claim;
- current fees, thresholds, project contribution caps, reward percentages, upgrade costs/durations and member limits may be rebalanced prospectively; and
- modified-client state manipulation, controlled-account limit evasion, duplicate/replay abuse and prohibited RMT remain reviewable.

Open implementation finding: production RLS currently gives active Union leaders/officers a broader generic `unions` UPDATE surface than the ordinary Flutter settings UI. Sensitive server-owned governance/progression fields should be made non-writable through generic client updates and should use dedicated constrained transitions.

Detailed control: `TYCOONX_UNION_TREASURY_GOVERNANCE_RELEASE_GATE.md`.

## 7. Completed: Art and Begging

Reviewed current behavior includes Art publication/idempotency, bidding and escrow, auction finalization, resales, formal direct offers, owner-facing offer preferences, moderation before or after publication, and Begging as a genuine assistance feature.

Legal baseline:

- legitimate collecting, speculation and Art direct-offer negotiation are allowed;
- genuine Begging donations are allowed precisely because Begging is designed for assistance without consideration;
- a high Art price or large Begging donation alone is not proof of abuse;
- self-bidding, collusion, controlled-account/circular trades, manipulated auction state, Art used mainly as disguised gifting, exploit laundering and prohibited RMT remain reviewable where evidence supports the prohibited purpose; and
- moderation outages do not create permanent approval of otherwise prohibited content.

Open implementation findings remain:

1. **P0:** reviewed Art self-bid logic does not clearly block a different current resale owner from bidding on their own relisted Art.
2. **P0:** Art owner UPDATE authority is broader than the validated auction RPC flow and does not visibly make all auction-managed fields immutable.
3. **P0:** a raw active-Art deletion is not visibly refund-equivalent to safe cancellation/moderation paths for a current bidder hold.
4. **P1:** the reviewed direct-offer server path does not visibly enforce all recipient offer-enabled/minimum preferences exposed by the client.

Detailed control: `TYCOONX_ART_BEGGING_RELEASE_GATE.md`.

## 8. Completed: Player production markets

Reviewed current player-market behavior includes agriculture, livestock, mining and industrial producer listings; seller pricing; player purchases; shipping; quality; seller proceeds; ordinary market visibility; and direct server purchase RPCs.

Legal baseline:

- genuine listings and purchases are intended gameplay;
- a low price, high price, repeated sale, profit or relationship between players is not automatically abuse;
- controlled-account value funneling, circular trading, impossible-price exploitation, duplicate settlement, market manipulation and prohibited RMT remain reviewable when reliable evidence supports them; and
- current demand, shipping, price relationships, quality effects and market eligibility are balance/configuration rules rather than permanent promises.

### P0 market integrity finding: non-positive producer prices

The reviewed agriculture/livestock/mining sales-setting paths do not visibly enforce a positive server-valid price. Their reviewed purchase RPCs also do not independently reject a non-positive seller price before calculating subtotal/total and wallet effects.

The ordinary production listing query filters external visible listings to positive prices, but that is only a UI/discovery filter. A modified/direct client with a producer asset ID can call the settlement RPC directly.

A negative subtotal can make the transaction total negative, causing a debit expressed as `buyer_money - total` to increase buyer money instead. This is a material economy-integrity risk. The reviewed industrial-facility purchase path does contain an explicit non-positive-price rejection.

Engineering priority:

- validate finite positive price in every setter;
- revalidate it in every settlement RPC;
- reject impossible subtotal/total before wallet writes;
- add database defense-in-depth where compatible;
- narrow generic market-sensitive client UPDATE authority where practical; and
- test direct RPC/UI-bypass cases.

No exploit was executed and this audit does not claim a particular player used the path.

## 9. Completed: Shop auto-fill and system auto-market

Reviewed current behavior includes `shop_auto_fill_cheapest(...)`, `shop_market_buy_and_store_*`, user auto-fill settings and TycoonX-operated `auto_market_tick()`.

Legal baseline:

- built-in TycoonX auto-fill and system/NPC automatic market purchases are intended automation, not prohibited external botting;
- current VIP eligibility, source ordering, max price/quality rules, batch size, cadence and NPC-demand logic may be rebalanced prospectively; and
- external scripts, modified clients or direct API use that bypass ownership/price/quantity/limit rules are different from the built-in automation feature.

### P0 shop authorization finding: destination ownership

The reviewed `shop_auto_fill_cheapest(p_slot_id, ...)` authenticates the caller but its initial destination lookup selects a shop slot by ID without visibly proving that the slot's parent `user_shop_assets` row belongs to `auth.uid()`.

The reviewed `shop_market_buy_and_store_agri/live/mine/factory(...)` helpers follow the same destination pattern. Caller-owned production can be consumed and then written into the supplied slot; paid external purchases can also use the supplied destination.

This creates a potential cross-account stock-transfer path if another player's slot ID is supplied. It is an authorization/economy-integrity gap, not an intended gifting feature.

Engineering priority: every shop-fill/store RPC must verify destination-shop ownership before any source consumption, wallet mutation, average-cost write or destination stock change, and the final mutation must remain ownership-bound.

## 10. Completed: Government direct sales and tenders

Reviewed current behavior includes Government product pricing, direct stock sale/delivery, `government_market_place_bid(...)`, privileged synchronization, tender closure, task creation, partial delivery, completion reward and overdue-task penalty.

Current implementation evidence includes:

- bids must currently be positive and at/below the applicable ceiling;
- lower bids are better;
- replacement bids must improve;
- near-closing bids can currently extend the tender;
- tender closure creates the winner's delivery task;
- partial task delivery does not itself pay the full completion reward;
- overdue tasks can receive an in-game penalty and can make the player's in-game wallet negative; and
- negative wallet state currently restricts Government Market access.

These current numbers/formulas/timings are gameplay rules, not permanent contractual promises.

Legal baseline:

- genuine Government sales, bids, wins, deliveries, missed deadlines and penalties are gameplay outcomes, not automatic Terms violations;
- impossible-stock manipulation, modified-client bidding, duplicate delivery/reward exploitation, stale/race exploitation and other knowing manipulation remain reviewable; and
- backend/scheduler defects must be separated from genuine player non-performance.

The player flow should make material tender delivery and penalty consequences understandable before or at the relevant commitment/award rather than relying only on a hidden backend formula.

## 11. Government telemetry is a signal, not a verdict

The current Flutter Government delivery service writes attempt/outcome rows to `government_market_logs` and can label a row `suspicious` using simple client observations such as several attempts in a short interval or a requested quantity above the client's cached owned quantity.

Production RLS permits users to insert their own log rows. Therefore:

- a modified client can omit or manipulate client-authored telemetry;
- ordinary retries/reconnects can create rapid attempts;
- cached quantity can be stale; and
- the client flag cannot override authoritative inventory, finance, task and settlement history.

Serious sanctions should not rely solely on `suspicious=true` from this client-authored log.

## 12. Player-facing synchronization through current market audit

The following rendered Terms clarifications are synchronized in English plus all 25 target locales and route-gated to the canonical Terms route and localized Terms routes:

- `GameplayEconomyRuleNotice.tsx`;
- `CompanyCommerceRuleNotice.tsx`;
- `UnionGovernanceRuleNotice.tsx`;
- `ArtBeggingRuleNotice.tsx`; and
- `PlayerGovernmentMarketRuleNotice.tsx`.

The market notice explains intended player-market/auto-fill/system-market/Government behavior, prohibits knowing manipulation/exploitation, states that built-in TycoonX automation is not equivalent to an unauthorized external bot, limits reliance on stale previews/anomaly flags, preserves proportional correction and account-compromise/outage distinctions, and preserves mandatory rights.

Detailed control: `TYCOONX_PLAYER_GOVERNMENT_MARKETS_RELEASE_GATE.md`.

## 13. Current German-law boundary

German BGB § 307 remains relevant to standard terms because unclear or incomprehensible standard wording can contribute to an unreasonable disadvantage. TycoonX rules should therefore distinguish built-in intended automation and ordinary market behavior from prohibited external manipulation instead of relying on hidden implementation knowledge.

German digital-product conformity and remedy rules, including BGB §§ 327d and 327i where applicable, remain separate from gameplay discipline. A genuine backend defect cannot simply be relabeled ordinary "market risk" to contract around mandatory remedies.

## 14. Remaining deployed systems for implementation-first review

Production/Flutter inventory confirms additional active or retained areas that still need code-first legal mapping:

- bank deposits, savings, interest, loans/credit, installments, collateral, debt recovery and bankruptcy;
- in-game FX trading and cooldowns;
- stock buying/selling and market-price automation;
- crypto-price updates and crypto transactions;
- trucks, logistics-market listings, loaded deliveries and delivery claims;
- care jobs, Company jobs, applications and automated completion;
- leaderboards, competitions, rewards and ranking systems;
- Company/Union chat, rooms and social features;
- music/books and remaining UGC; and
- impersonation, scams, moderation, appeals and user-content rights across those social surfaces.

## 15. Next code-first gameplay legal audit order

Completed substantive clusters:

1. **Company governance/value movement.**
2. **Company supply/export/tender commerce.**
3. **Union contribution exception.**
4. **Union treasury/governance.**
5. **Art/Begging.**
6. **Player markets/shop auto-fill/system auto-market/Government Market.**

Continue in this order:

1. **Bank/credit/FX/stocks/crypto:** loans, collateral, debt recovery, interest, bankruptcy, FX cooldowns, stock/crypto transactions, market-price automation and manipulation/exploit boundaries.
2. **Logistics/jobs/competitions:** trucks, deliveries, care jobs, Company jobs, automated completion, leaderboards, rewards and win-trading/duplicate-completion risks.
3. **Social/UGC:** Company/Union chat, rooms, music/books and remaining UGC, impersonation, scams, moderation, appeals and user-content rights.

Future runs should continue from this deployed implementation inventory rather than generic game-policy templates.
