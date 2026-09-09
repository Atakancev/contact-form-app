# TycoonX Code-First Gameplay Legal Map

**Read-only implementation audit. Last reviewed: September 10, 2026.**

Owner: CK-Labs  
Scope: map the player-facing TycoonX legal rules to gameplay mechanics that actually exist in the current Flutter client and production Supabase backend, so future legal hardening starts from deployed game behavior instead of generic game-policy assumptions.

## 1. Source hierarchy and safety boundary

This map is an internal implementation/legal QA document. It does not itself create a new player-facing rule and it does not replace the canonical English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, or Community Standards.

The September 10 review used:

- read-only inspection of the production TycoonX Supabase schema, function names, and selected current `pg_get_functiondef(...)` definitions;
- the current `Atakancev/terrax-flutter` Flutter repository, including service-layer RPC calls and existing economy research; and
- the current `Atakancev/contact-form-app` legal repository.

No database row, function, trigger, policy, schema object, or configuration value was changed during this legal audit.

Backend implementation is evidence of the feature's intended technical purpose, but a current server cap, permission, cooldown, formula, or parameter is not automatically a permanent player-facing promise. TycoonX balancing and feature rules can evolve under the canonical Terms and mandatory law.

## 2. Critical mismatch found: Begging is not the only intentional contribution mechanic

The public transfer rule correctly says that ordinary art, market, company, job, contract, and other mechanics must not be repurposed mainly as disguised donation or wealth-funneling channels.

However, the deployed backend also contains `donate_union_project(...)`, and the Flutter client calls that RPC as the Union Project donation action. The current server implementation is expressly donation-like: it deducts the donor's in-game money, records a `project_donation`, applies a cumulative per-user contribution ceiling of 50% of the project's target amount, and, on project completion, can move the completed amount into Union treasury and distribute a configured formulaic reward to active Union members.

Therefore, player-facing wording must not say or imply that Begging is the only gameplay feature through which a player can lawfully contribute value. The accurate rule is narrower:

- Begging and any other TycoonX feature expressly designed for assistance or contributions, including an available Union Project donation feature, may be used within that feature's stated purpose and limits;
- mechanics not designed for gifting, donations, contributions, or assistance are not substitute donation channels; and
- an authorized contribution feature still cannot be used to disguise prohibited real-money trading, exploit proceeds, coordinated limit evasion, or another separately prohibited arrangement.

This clarification prevents a legitimate Union Project donation from being falsely classified as a transfer-rule violation merely because value moves from one player into a shared Union mechanic.

## 3. Company employment and treasury mechanics actually deployed

### `company_member_set_salary(...)`

Current production behavior observed during the read-only review:

- requires the acting member to have the `change_salary` permission;
- permits a salary from 0 up to 10,000 under the current server rule;
- on a salary increase, checks projected active-member payroll against current Company treasury; and
- records salary-change history.

Legal consequence: a salary is a real TycoonX company mechanic. A legitimate salary is not a violation merely because it transfers in-game money to a member. The transfer rule should instead target a sham salary whose main purpose is to funnel wealth without a genuine company/employment purpose, especially where account coordination or other evidence supports that conclusion. The current numeric salary cap is not a safe harbor proving every salary below the cap is genuine.

### `company_run_payroll(...)`

Current production behavior:

- requires `run_payroll` authority;
- pays due active-member salaries from Company treasury into member wallets;
- records the Company transaction; and
- updates insolvency state after processing.

Legal consequence: ordinary payroll is intended value movement. Enforcement must distinguish legitimate payroll from coordinated sham employment or exploit-created payroll. A payroll transaction should not be reversed merely because the recipient and Company are economically connected; that relationship is inherent in the feature.

### `company_ceo_withdraw(...)`

Despite the historical function name, the deployed function uses the Company's `withdraw_money` permission. It computes reserved treasury, limits the action to currently withdrawable treasury, subtracts Company funds, credits the acting player's personal wallet, records `ceo_withdraw`, and records a Company-owner-distribution finance event.

Legal consequence: an authorized Company-treasury withdrawal is an intentionally supported owner/distribution mechanic and is not automatically a disguised transfer. Abuse can still exist where authority was compromised, the action exploits a bug, or coordinated transactions use Company state mainly to evade another rule. The mere fact that Company money becomes personal player money is not by itself proof of abuse.

## 4. Public-company and stock mechanics actually deployed

### `company_ipo(...)`

Current deployed IPO logic includes a seven-day subscription window, configurable share price/quantity inputs within server limits, a required active Company and stock-management permission, and an IPO state recorded in the stock system.

### `company_pay_dividend(...)`

Current deployed dividend logic:

- pays current holders of the Company's stock pro rata;
- currently limits a per-call dividend to 10% of the current share price;
- debits Company treasury;
- records stock/company transactions; and
- applies an ex-dividend share-price adjustment.

### `company_buyback(...)`

Current deployed buyback logic uses a configurable cooldown and commission, buys Company stock back against public float, debits Company treasury, and records the action.

### `company_secondary_offering(...)`

Current deployed secondary-offering logic uses a configurable cooldown, currently requires the Company to retain at least 51% Company ownership after the offering, and credits Company treasury for the offering value.

Legal consequences for all four mechanics:

- TycoonX shares and Companies remain fictional game elements, not real securities or investments.
- Genuine IPO participation, dividends, buybacks, offerings, stock purchases, and strategic Company decisions are permitted gameplay even when they create large value movements.
- A current server limit, cooldown, share-price formula, or permission does not prove that coordinated wash trading, circular self-dealing, exploit use, or disguised wealth transfer is legitimate.
- Conversely, an unusual or profitable transaction is not manipulation merely because it benefits a CEO, shareholder, Company, or related player. Serious enforcement still requires reasonable evidence and proportional review.

## 5. Company tenders actually deployed

`new_company_tender_bid(...)` currently:

- authenticates the human actor and checks `manage_tenders` authority;
- blocks an insolvent Company from bidding;
- blocks the issuing Company from bidding on its own tender;
- enforces tender visibility and maximum price;
- supports live and blind tenders;
- permits only one sealed bid from a Company in a blind tender;
- allows live bids to be updated; and
- can extend a tender near closing by 15 seconds under the current anti-sniping behavior.

The corresponding tender sweep selects a winning Company using server-side bid records.

Legal consequence: ordinary competitive bidding, including aggressive or unusual bids, is legitimate. Coordinated bid rigging, fake competition, intentional loss arrangements used mainly to transfer value, collusive tender allocation, alternate-account/Company arrangements used to defeat the intended competition, or exploitation of timing/duplicate-completion bugs can fall under the genuine-purpose, exploit, or RMT rules when supported by evidence. A low bid or repeated win alone is not proof of collusion.

## 6. Union contribution mechanics actually deployed

`donate_union_project(...)` currently:

- requires an active Union project and active Union membership;
- deducts the contributor's in-game money;
- records the contribution as `project_donation`;
- limits one user's cumulative donations to 50% of the project target under the current server rule;
- completes the project when the target is reached;
- can credit Union treasury and Union XP; and
- depending on the configured reward mode, can distribute a formulaic reward to active Union members' in-game bank accounts.

Legal consequence: this is an expressly authorized contribution mechanic. A legitimate contribution within the feature's purpose is not a prohibited disguised gift. Attempts to split contributions across controlled accounts primarily to defeat the per-user limit, manipulate project rewards, recycle the same invalid value, or exchange outside consideration for in-game contribution/reward outcomes can still be reviewed under separate anti-evasion, exploit, genuine-purpose, and RMT rules.

A current 50% server cap is a feature configuration, not a promise that the cap will never change.

## 7. Other deployed economy surfaces identified for continuing code-first review

The production read-only inventory also confirms active or retained server functions for the following TycoonX systems. Each should be audited from implementation before adding more player-facing legal examples:

- social art bidding, art-auction finalization, direct offers, moderation, and Begging;
- player markets, producer/shop/industrial market purchases, auto-market ticks, and market-event systems;
- Government Market bidding, awards, delivery, and synchronization;
- Company supply requests, warehouse deliveries, export offers, export completion/failure, and operating settlements;
- care jobs, Company job posts, job applications, logistics jobs, and automated job completion;
- bank deposits, savings, interest, loans/credit, installments, collateral, debt recovery, and bankruptcy;
- in-game FX trading and cooldowns;
- stock buying/selling and market-price automation;
- crypto-price updates;
- trucks, logistics market listings, loaded deliveries, and delivery claims;
- Union fees, Union treasury operations, projects, polls, and level upgrades;
- Football Manager market listings, bids, offers, salaries, and auctions; and
- leaderboards, competitions, rewards, and ranking systems.

Future legal runs should select the next highest-risk gameplay cluster from this real inventory, inspect the relevant current function definitions and Flutter entry points, compare them with the canonical Terms/Community Standards, then change player-facing wording only where the implementation reveals a genuine legal gap.

## 8. Enforcement principles for code-derived mechanics

For every mechanic above:

1. identify what the deployed feature is actually designed to do;
2. distinguish intended value movement from a disguised use of the feature;
3. do not treat technical permission, client visibility, or a numeric server limit as proof that every possible use is contractually permitted;
4. do not invent a hidden prohibition against normal gameplay that the feature expressly invites;
5. distinguish detection signals from final findings;
6. distinguish state correction from punitive account enforcement;
7. preserve unrelated legitimate paid value and mandatory consumer rights;
8. treat account compromise and exploit-generated value as separate causation questions; and
9. prefer authoritative server transaction records over stale client displays while preserving a meaningful support/review path for incorrect decisions.

German standard-terms clarity matters here: broad wording should not make a legitimate feature look prohibited while leaving only internal implementation knowledge to explain the exception. Code-derived player rules should be written clearly enough that a normal player can understand which mechanics are authorized and which repurposing is prohibited.

## 9. Next code-first gameplay legal audit order

Recommended continuation order based on current economic impact and abuse surface:

1. Company governance: salaries, payroll, treasury withdrawals, member permissions, IPO/dividends/buybacks/offerings.
2. Company tenders, export offers, supply contracts, warehouses, and manager authority.
3. Union treasury, project contributions/rewards, membership fees, leader withdrawals, and anti-evasion boundaries.
4. Art auctions/direct offers/Begging and the exact legitimate assistance versus sham-transfer boundary.
5. Player product markets, production markets, auto-fill, Government Market, and market manipulation.
6. Bank/credit/collateral/FX, stocks, crypto, and bankruptcy/debt recovery.
7. Logistics/truck market/deliveries and duplicate-completion/cancellation abuse.
8. Jobs, care jobs, Company employment, rewards, leaderboards, and competition manipulation.
9. Social rooms, Company/Union chat, art/music/books and other UGC/moderation surfaces.

This order is implementation-driven and can be changed when the production function inventory materially changes.