# TycoonX Player and Government Markets Release Gate

**Read-only implementation/legal audit. Last reviewed: September 10, 2026.**

Owner: CK-Labs  
Scope: TycoonX player production markets, shop auto-fill, system/NPC auto-market activity, Government Market direct sales, tenders, awards, delivery tasks, penalties, synchronization and related enforcement/correction rules.

This gate supplements the canonical English TycoonX Terms of Service and the synchronized localized Terms clarification. It does not waive mandatory consumer rights and does not replace engineering fixes for defects identified below.

## 1. Code-first sources reviewed

This review was derived from the current TycoonX Flutter implementation and read-only production Supabase definitions, including the current behavior of:

- `get_production_market_listings(...)`;
- `set_asset_sales(...)`, `set_livestock_asset_sales(...)`, `set_mining_asset_sales(...)`, and `set_industrial_sales(...)`;
- `market_buy_from_asset(...)`, `market_buy_from_livestock_asset(...)`, `market_buy_from_mining_asset(...)`, and `market_buy_from_industrial_facility(...)`;
- `shop_auto_fill_cheapest(...)` and the `shop_market_buy_and_store_*` helpers;
- VIP/slot auto-fill configuration and queue helpers;
- `auto_market_tick()`;
- `government_market_place_bid(...)`, `government_market_sync()`, `government_market_deliver_task(...)`, and Government direct-sale helpers; and
- the Flutter Government Market service and its client-side attempt/outcome logging.

No production database row, function, trigger, policy, schema, cron, configuration or player state was changed during this review.

## 2. What is legitimate gameplay

The following are genuine TycoonX mechanics and must not be treated as prohibited automation, collusion or value transfer merely because they move virtual value:

- a player listing genuine production for sale;
- another player buying genuine listed production at a valid price;
- a player moving their own production into their own shop through the supported internal/auto-fill path;
- eligible auto-fill buying qualifying market stock according to the feature's current rules;
- TycoonX's own system/NPC `auto_market_tick()` purchasing eligible listed production;
- selling qualifying stock to the Government at the current server-defined Government price or buyback formula;
- competing in a Government tender by submitting a valid bid;
- winning a Government tender and receiving its delivery task;
- partially delivering a Government task where the feature allows partial delivery; and
- receiving the configured Government reward when the authoritative server records the required delivery as complete.

A low price, high price, repeated sale, repeated tender win, fast retry, large Government delivery, profitable transaction or failed tender is not automatically evidence of abuse.

## 3. Current formulas and availability are not permanent promises

Current market demand, NPC purchase eligibility, Government prices, catalog values, quality effects, shipping costs, tender ceilings, bid rules, anti-sniping extensions, delivery windows, penalties, auto-fill thresholds, VIP convenience behavior, purchase cadence and other economy parameters are balance/configuration rules.

CK-Labs may change them prospectively for legitimate reasons including economy health, anti-inflation measures, fairness, abuse prevention, technical compatibility, security, feature evolution, provider/platform requirements and legal compliance, subject to mandatory law and any specific binding purchase promise.

A historical screenshot or stale client display does not create a permanent right to a former in-game market price, Government price, bid ceiling, auto-fill behavior, demand level, shipping formula, reward or penalty formula.

## 4. Authoritative settlement versus client preview

The client may display stock, price, quality, shipping, tender rank, remaining time, expected payout and other previews based on information available when the screen was loaded.

Those previews can become stale because other players transact, production changes, a tender receives another bid, anti-sniping extends the deadline, a market event changes, a server job runs, or the network reconnects.

For a completed in-game transaction, the authoritative server settlement record controls the actual quantity, price, shipping, payout, award and state transition, subject to correction where objective evidence proves a backend defect.

"Server-authoritative" does not mean "server-infallible." Duplicate jobs, stale-state bugs, invalid configuration, authorization defects and calculation defects can still create invalid server state and may require reconciliation.

## 5. P0 engineering finding: negative-price producer purchase path

The current reviewed sales-setting functions for agriculture, livestock and mining accept the caller's sale price without an obvious server-side positive-price/range check. The reviewed `market_buy_from_asset(...)`, `market_buy_from_livestock_asset(...)`, and `market_buy_from_mining_asset(...)` paths also do not visibly reject a non-positive seller price before calculating the buyer debit and seller earnings.

The normal production-market listing query filters visible external listings to positive prices. That UI/listing filter is not an authorization boundary: a direct or modified client can call a purchase RPC with a known producer asset ID.

This creates a high-priority economic-integrity risk. In particular, a negative seller price can make the calculated merchandise subtotal negative and, if it outweighs shipping, can make the calculated transaction total negative. A debit implemented as `buyer_money - total` can then increase the buyer's money instead of decreasing it. A controlled seller/buyer arrangement could also create distorted negative seller earnings while moving or manufacturing buyer value.

The industrial-facility purchase path is materially safer in this respect because the reviewed implementation explicitly rejects a missing or non-positive price.

### Required engineering hardening

Outside this legal-only run, engineering should:

1. require a finite, positive, server-valid selling price in every producer sales-setting path;
2. independently revalidate the price inside every purchase/settlement RPC, even if the listing query already filters it;
3. require a non-negative/positive subtotal and total consistent with the intended transaction before touching wallets;
4. add database-level CHECK constraints or equivalent defense-in-depth where compatible with legitimate internal states;
5. narrow generic client UPDATE capability over server-sensitive sale/economy fields where practical;
6. add regression tests for direct RPC calls that bypass the ordinary listing UI; and
7. reconcile any objectively invalid historical transactions from authoritative transaction/economy records rather than assuming the displayed client flow proves validity.

No exploit was executed during this audit, and this finding does not assert that a particular player has used the path.

## 6. Legal treatment of a price/configuration defect

A server or RPC accepting an impossible, negative or otherwise clearly invalid economic state does not create a contractual right to keep value knowingly manufactured through that defect.

At the same time, CK-Labs should not treat every player who encountered a bad visible price as a cheater. Enforcement should distinguish:

- a normal one-off transaction through the ordinary UI;
- an accidental retry;
- a stale display or server defect;
- a compromised account;
- a modified/direct client intentionally bypassing the intended interface;
- repeated exploitation after the abnormal result became apparent; and
- coordinated controlled-account activity designed mainly to create, funnel or park invalid value.

State correction and punitive enforcement are separate decisions. Corrections should target the value or state directly attributable to the invalid transaction and should not automatically remove unrelated legitimate purchases, valid VIP, legitimately earned wealth or unrelated inventory.

## 7. P0 engineering finding: shop auto-fill destination ownership is not visibly enforced

The reviewed `shop_auto_fill_cheapest(p_slot_id, ...)` is `SECURITY DEFINER` and authenticates the caller, but its initial destination-slot lookup selects a slot by `p_slot_id` without visibly proving that the slot's parent shop belongs to the authenticated caller.

The reviewed `shop_market_buy_and_store_agri/live/mine/factory(...)` helpers follow the same destination pattern: they lock the supplied shop slot and can add stock to it without an obvious destination-owner check against the authenticated user.

For caller-owned production, the auto-fill code can consume the caller's own agriculture/livestock/mining/factory stock and then add the resulting stock to the supplied destination slot. If a different player's valid slot ID is supplied, the reviewed code therefore exposes a potential cross-account stock-transfer path that the normal TycoonX UI does not appear to intend.

For paid external-market purchases, the caller may likewise be charged while the stock is written into the supplied destination slot unless another downstream guard blocks the exact route.

### Required engineering hardening

Every shop-fill and `shop_market_buy_and_store_*` entry point should server-side verify that:

- the destination slot exists;
- the slot belongs to a `user_shop_assets` row owned by `auth.uid()`;
- the product is valid for the destination shop/slot;
- the destination capacity/rule checks are authoritative; and
- the ownership check is repeated in the final write path rather than relying on the Flutter caller.

This is an authorization/economic-integrity issue, not a new intended gifting feature. Legitimate player assistance should use TycoonX features expressly designed for assistance or contribution.

## 8. Automatic market and auto-fill are not prohibited bots

`auto_market_tick()` is a TycoonX server-operated economy mechanic. Where it purchases eligible player production, the resulting sale is an intended system/NPC transaction.

Likewise, a TycoonX-provided auto-fill feature used within its server-enforced eligibility and settings is an intended convenience mechanic. A player does not violate an anti-bot rule merely because TycoonX itself performs the purchase automatically.

This does not authorize an external bot, modified client, script, replay loop, API abuse or automation that bypasses limits, fabricates transactions, targets another player's destination state, or obtains an outcome the built-in feature does not intend.

Current auto-market and auto-fill formulas, source ordering, price/quality thresholds, VIP eligibility, purchase batch behavior and cadence remain balance/configuration choices and may be changed prospectively.

## 9. Government Market direct sales

Current Government direct-sale paths consume eligible player-held stock and pay according to the applicable current server-side Government/catalog rule. Different stock categories can use different formulas.

A Government price displayed before settlement is not permission to duplicate stock, replay a delivery, race stale inventory, submit impossible quantity or manipulate a client into claiming stock that authoritative server state does not contain.

Conversely, if a player used the normal feature once and the backend accidentally overpaid, duplicated a reward or miscomputed quantity, the proper first response is economic reconciliation based on reliable records. A backend defect alone is not proof of dishonest intent.

## 10. Government tender rules derived from the current implementation

The reviewed tender implementation currently:

- requires an authenticated eligible player with Government Market access;
- requires a positive bid not exceeding the applicable tender ceiling;
- requires the bidder to hold at least some of the tender product when bidding;
- treats a lower price as the better bid;
- requires a player's replacement bid to improve their prior bid;
- requires a new bid to undercut the current best price;
- can extend a near-closing tender under anti-sniping logic;
- selects the best valid bid when the tender closes; and
- creates a delivery task for the winner.

These current implementation details explain the present feature but are not permanent promises that every future Government tender will use exactly the same ceiling, undercut rule, extension, inventory prerequisite or timing.

## 11. Government tender delivery, reward and penalty

The current reviewed task path allows partial delivery, but the Government reward is paid when the required task is completed rather than proportionally on each partial delivery.

The current synchronization path can mark an overdue task failed, charge the task's configured in-game penalty and allow that gameplay penalty to make the player's in-game wallet negative. Negative wallet state currently restricts Government Market access.

The current task penalty is calculated from the tender's initial bid unit price, quantity and the current penalty multiplier when the award/task is created, rather than automatically being recalculated from every later economic condition.

Because winning a tender can therefore create a meaningful future in-game delivery obligation and penalty consequence, the TycoonX UI should make the applicable delivery deadline and material penalty consequence clear enough before or at commitment/award. Implementation teams should not rely on a hidden backend formula as the only notice of a material gameplay consequence.

A genuine missed deadline, task penalty or resulting negative in-game wallet is a gameplay outcome, not automatically a Terms violation. Deliberate non-performance used between controlled accounts is not relevant to the Government counterpart in the same way as Company contracts, but modified-client bidding, impossible-stock manipulation, duplicate delivery, timing exploit use or other knowing abuse remains reviewable.

## 12. Government synchronization and outages

`government_market_sync()` is a privileged server-side synchronization path. Tender closure, award creation and overdue-task failure may therefore occur independently of whether a particular client screen was open at the time.

Where an outage, stale scheduler, duplicate invocation, clock defect, backend bug or reconciliation problem produces an objectively incorrect award, deadline, penalty, duplicate reward or failed task, CK-Labs may correct the affected state where reasonably feasible.

A correction must not double-penalize the same task. Support should distinguish a genuine missed obligation from a server-side failure that prevented timely delivery or settlement where reliable evidence permits that distinction.

## 13. P1 evidence-quality finding: client-authored "suspicious" Government logs

The current Flutter Government delivery service writes attempt/outcome rows into `government_market_logs`. It can mark an attempt `suspicious` based on simple client-side observations such as repeated calls in a short interval or a requested quantity greater than the client's currently cached `ownedQuantity`.

Production RLS allows authenticated users to insert their own rows into that log table. This makes those fields useful telemetry, but not sole authoritative proof of cheating:

- a modified client can omit or falsify client-authored telemetry;
- an ordinary retry/reconnect can create rapid attempts;
- cached `ownedQuantity` can be stale; and
- a client heuristic cannot override server-side inventory, finance, task and settlement records.

Serious sanctions should therefore rely on reliable server evidence and surrounding facts rather than a client-authored `suspicious=true` flag by itself.

## 14. Coordinated trading and market manipulation

Players may compete aggressively and make unusual but genuine trades. Prohibited conduct can include, where supported by evidence:

- controlled-account transactions mainly intended to funnel or park wealth rather than buy/sell for a genuine gameplay purpose;
- circular trades designed primarily to manufacture value or transaction history;
- knowingly using impossible or negative prices;
- collusive arrangements to manipulate available supply, reference prices, tender outcomes or another market signal;
- modified-client/API calls that bypass destination ownership, price, quantity, quality, capacity, cooldown or other intended server rules;
- replay/race exploitation intended to duplicate stock, payout or settlement;
- laundering exploit-created value through a later apparently ordinary market transaction; and
- prohibited real-money trading connected to an in-game market transaction.

A relationship between players, membership in the same Company/Union, repeated trading, price deviation or profitability is evidence context, not an automatic violation.

## 15. No hidden safe harbor from a numeric threshold

Current server thresholds and UI warnings are not a promise that conduct is permitted whenever it remains just below a particular amount, count, timing threshold, price ratio or detection score.

Likewise, exceeding an anomaly threshold does not automatically prove misconduct. Detection can trigger review or containment, while punitive enforcement should consider intent/repetition, technical evidence, transaction purpose, controlled-account evidence, compromise and other relevant facts.

## 16. Account compromise

Where credible evidence suggests a player's account was compromised and used for abnormal market sales, bids, purchases, shop filling or Government activity, CK-Labs may temporarily restrict relevant market functions while investigating.

Where reasonably feasible, restoration/correction should use authoritative historical records and should avoid shifting the attacker's loss onto unrelated innocent players without evidence. CK-Labs cannot promise that every compromised-game-state consequence can be reconstructed when records are incomplete or value has moved through many legitimate downstream transactions.

Players should report suspected compromise promptly and secure connected accounts/devices using available security controls.

## 17. Old clients, stale state and retries

An old or unsupported app version, stale cache, delayed realtime event, retry or reconnect can produce a different client view from current server state. This can justify rejecting or reconciling a transaction without implying player misconduct.

Knowing repeated use of stale/retry behavior to obtain duplicate or impossible settlement is different from an ordinary network retry. The enforcement record should preserve that distinction.

## 18. Corrections, balancing and economy integrity

CK-Labs may correct directly attributable invalid in-game state created by bugs, duplicate settlement, configuration errors, impossible prices, unauthorized destination writes, exploit activity or other objectively invalid economy events where permitted by the Terms and law.

Corrections may include restoring or removing directly affected in-game money, stock, sale proceeds, Government rewards, task penalties, leaderboard/statistical effects or related derived state so the account is placed as close as reasonably possible to the state the valid transaction should have produced.

This is not permission for arbitrary confiscation. Unrelated valid paid entitlements and unrelated legitimate gameplay state should remain untouched unless another independent valid reason applies. Mandatory consumer remedies remain unaffected.

Prospective economy balancing can change future profitability without promising a fixed return on investment, permanent margin, permanent Government price, permanent demand, permanent auto-fill efficiency or permanent tender economics.

## 19. Mandatory consumer-law boundary

These gameplay rules do not exclude non-waivable rights.

Where German consumer digital-product law applies, a genuine software/backend defect remains subject to the applicable conformity and remedy regime. CK-Labs cannot turn a defect into a contractual fiction that every resulting loss is simply "market risk" when mandatory law provides a remedy.

Likewise, standard-form Terms should remain clear and should not characterize intended built-in automation or ordinary legitimate market behavior as cheating while relying on undisclosed internal exceptions.

## 20. Engineering priority list from this review

No database change was made. Engineering follow-up should prioritize:

1. **P0:** reject non-positive/impossible prices in agriculture, livestock and mining setters and purchase RPCs, with settlement-side defense in depth;
2. **P0:** enforce authenticated destination-shop ownership in `shop_auto_fill_cheapest(...)` and every `shop_market_buy_and_store_*` path before any stock/wallet mutation;
3. **P0/P1:** reduce direct generic write authority over market-sensitive producer/shop fields where RPC-only transitions are more appropriate;
4. **P1:** treat client-authored Government `suspicious` telemetry as a signal, not sole evidence;
5. **P1:** ensure material Government tender delivery/penalty consequences are understandable in the player flow before or at commitment/award; and
6. **P2:** review privileged auto-fill cleanup/worker execute grants and remove public/anonymous execution where no player-facing caller requires it.

## 21. Required regression scenarios

A release should fail the market-integrity gate if any of the following behavior is allowed or legal copy contradicts the intended outcome:

1. Agriculture seller price is negative and direct purchase can increase buyer money.
2. Livestock seller price is zero/negative and settlement proceeds anyway.
3. Mining seller price is non-positive and purchase proceeds because the listing UI was bypassed.
4. Industrial market retains its positive-price settlement guard.
5. A hidden negative listing is reachable by direct known-ID RPC and treated as legitimate merely because it was not shown in the UI.
6. A normal valid low-priced player listing is automatically classified as abuse solely because it is cheap.
7. A normal valid high-priced player listing is automatically classified as abuse solely because it is expensive.
8. A player buys genuine stock from another player and receives the correct authoritative quantity/quality/cost.
9. A controlled pair repeatedly uses an impossible-price defect to manufacture or funnel value.
10. An accidental one-off bad-price transaction receives economic correction without automatic unrelated punishment.
11. A compromised account's abnormal market activity is reviewed separately from the innocent account holder's prior legitimate purchases.
12. `shop_auto_fill_cheapest(...)` is given another player's slot ID and can transfer caller-owned stock into that slot.
13. A paid `shop_market_buy_and_store_*` purchase can charge one user while filling a different user's slot.
14. A correct owned shop slot can receive the caller's own production through the supported internal-fill path.
15. Built-in TycoonX auto-fill is incorrectly described as prohibited botting.
16. Server `auto_market_tick()` sales are incorrectly described as player collusion or unauthorized automation.
17. External scripts or modified clients bypassing intended auto-fill rules are treated as equivalent to built-in automation.
18. A Government direct sale consumes actual eligible stock and pays the server-set result once.
19. A Government direct-sale retry duplicates the payout.
20. A stale client requests more than cached/actual inventory and the client heuristic alone is treated as conclusive cheating evidence.
21. A valid Government tender bid above zero and within the current ceiling is accepted under current rules.
22. A non-positive Government tender bid is accepted.
23. A bid above the tender ceiling is accepted.
24. A near-close valid bid can trigger the current anti-sniping extension without that extension being treated as a permanent contractual promise.
25. A tender winner receives an authoritative delivery task rather than an immediate full reward merely for bidding.
26. A partial task delivery incorrectly pays the full completion reward.
27. A complete task delivery pays the configured reward once.
28. A genuine overdue task receives its configured in-game failure consequence once.
29. A duplicated synchronization pass charges the same task penalty twice.
30. A server outage that prevented valid delivery is automatically labelled player fraud without evidence.
31. A Government penalty causes negative in-game wallet state and the UI/server rules remain internally consistent about the consequence.
32. A future rebalance changes a Government price/tender formula and old completed transactions are retroactively repriced without a valid correction basis.
33. A later price decrease automatically creates a right to an in-game make-good for earlier legitimate market trades.
34. A current auto-market threshold is represented in legal text as a guaranteed permanent threshold.
35. A current tender formula is represented in legal text as a guaranteed permanent formula.
36. A market bug correction removes unrelated purchased Diamonds or valid VIP without an independent lawful basis.
37. A serious sanction is imposed solely from a client-authored `suspicious=true` row.
38. A player with repeated fast legitimate retries is automatically treated as an exploiter without server evidence.
39. Market manipulation is inferred solely from Company/Union membership or friendship.
40. Circular/controlled-account trading with strong evidence of value funneling remains reviewable even if every individual RPC returned success.
41. Prohibited RMT through a market transaction remains prohibited.
42. A legitimate unusual speculative trade remains allowed when evidence does not support a prohibited purpose.
43. The canonical and localized notices preserve the distinction between legitimate built-in mechanics and abusive external automation/manipulation.
44. Arabic remains RTL.
45. All 25 required localized Terms routes receive equivalent substantive meaning.
46. Displayed legal prose spells the game name exactly `TycoonX`.
47. Current-service legal prose does not describe TycoonX as beta.
48. Mandatory consumer rights remain expressly preserved.

## 22. Player-facing synchronization requirement

`app/tycoonx-legal/PlayerGovernmentMarketRuleNotice.tsx` must carry the core market/tender meaning in English and all 25 target locales and render on:

- `/tyconx-terms-of-service`; and
- `/tycoonx-legal/{locale}/terms`.

The public notice should be concise. It should explain intended market/auto-fill/system-market/Government behavior, prohibit knowing manipulation/exploitation, avoid turning anomaly signals into automatic guilt, preserve correction/account-compromise/outage distinctions and preserve mandatory rights.

Detailed vulnerability descriptions belong in this internal gate rather than in player-facing prose.

## 23. Canonical legal effect

The English TycoonX Terms remain canonical. This gate and the synchronized rendered notice clarify how the existing genuine-purpose, anti-exploit, authoritative-record, balancing, correction, account-security and mandatory-rights clauses apply to player and Government markets.

If future implementation changes materially alter the contractual meaning, the English source must be updated first and the affected localized Terms meaning must then be resynchronized in the required locale order.
