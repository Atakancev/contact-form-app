# TycoonX Genuine Transaction & Wealth-Transfer Enforcement Release Gate

**Release QA reference. Last reviewed: September 10, 2026.**

Owner: CK-Labs  
Scope: operational enforcement of the September 5, 2026 TycoonX genuine-transaction/RMT rules as clarified on September 10, 2026 against the gameplay mechanics actually deployed in the Flutter client and production Supabase backend.

## Purpose and source hierarchy

The canonical English TycoonX Terms state that players are expected to build their own in-game wealth through gameplay and genuine economic activity. Player-to-player movement of in-game money, assets, or other economic value is permitted only where it is part of a genuine gameplay transaction and the relevant feature is used for its intended purpose.

The canonical Terms also separately prohibit buying, selling, brokering, advertising, arranging, or exchanging TycoonX accounts or game value for real money, cryptocurrency, gift cards, physical goods, outside services, or other real-world consideration unless CK-Labs expressly provides a specific authorized mechanism.

This gate does **not** create a new player-facing prohibition. It explains how CK-Labs should investigate and enforce those rules consistently and proportionately without treating legitimate gameplay, including mechanics intentionally designed to distribute value, as abuse merely because money or assets move between participants.

Use this gate together with:

- `tyconx-terms-of-service.md` as the canonical player-facing source;
- `TYCOONX_CODE_FIRST_GAMEPLAY_LEGAL_MAP.md` for the read-only September 10 implementation map of deployed Company, tender, Union, market, banking, jobs, logistics, and other economy surfaces;
- `TYCOONX_GAME_ECONOMY_RESET_CORRECTION_RELEASE_GATE.md` for invalid-state tracing, corrections, rollbacks, and downstream unwinds;
- `TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md` for security holds, suspensions, termination, compromise, notice, and appeals;
- `app/tycoonx-legal/TransferRuleNotice.tsx`, `app/tycoonx-legal/GameplayEconomyRuleNotice.tsx`, and `app/tycoonx-legal/RealMoneyTradingNotice.tsx` for synchronized rendered Terms wording; and
- `scripts/verify-tycoonx-genuine-transfers.mjs` for canonical/localized Terms parity and code-derived mechanic checks.

Do not duplicate those doctrines here. This gate answers the narrower questions: **when does a transaction stop being a genuine use of a TycoonX mechanic and become a disguised wealth transfer, when is value movement itself the intended mechanic, and when does an outside benefit create a separate real-money-trading violation?**

## 1. Apply the genuine-purpose test to the feature that actually exists

For every investigated transaction, first identify the intended gameplay purpose of the feature that was used. Determine that purpose from the current TycoonX implementation, player-facing description, and applicable legal wording rather than from a generic assumption that all value movement is suspicious. Then determine whether the transaction genuinely served that purpose.

Examples:

- **Art:** the buyer must genuinely want to acquire the artwork. Buying art mainly to send money to the artist or financially help that player is prohibited.
- **Market sale or auction:** there should be a genuine acquisition/sale reason for the item, product, asset, or right being exchanged.
- **Company transaction:** the payment or asset movement should correspond to genuine Company activity, ownership, supply, employment, financing, distribution, or another permitted Company mechanic rather than exist mainly to funnel personal wealth.
- **Company salary/payroll:** salary and payroll are expressly supported value-transfer mechanics. A genuine salary is not prohibited merely because Company treasury becomes personal player money. A sham salary arranged mainly to funnel wealth may be investigated with supporting evidence.
- **Company treasury withdrawal:** an authorized withdrawal under the deployed Company permission model is an intended distribution mechanic. It is not automatically abuse merely because Company money is credited to the acting player's wallet.
- **Dividend / IPO / buyback / secondary offering:** these are genuine fictional Company/stock mechanics. They can move substantial value without being abusive. Circular self-dealing, manipulation, exploit use, or coordinated funneling remains separately reviewable.
- **Company tender:** aggressive, low, high, repeated, live, or sealed bids are not automatically collusion. Evidence of bid rigging, fake competition, coordinated allocation, intentional loss arrangements used to transfer value, or limit/timing exploitation can justify review.
- **Contract or job:** the payment should correspond to the genuine in-game contract, task, employment, work, or service represented by that feature.
- **Trade:** the parties should genuinely want the assets or value being exchanged. A trade should not merely disguise a one-way gift.
- **Begging:** Begging is an expressly designed assistance feature and may be used within its own rules.
- **Union Project contribution:** `donate_union_project(...)` is an expressly designed contribution mechanic. A legitimate Union Project donation within the feature's purpose is not a prohibited disguised gift merely because a player contributes money to a shared project or because the project can later produce configured shared rewards.

Gameplay mechanics that are not expressly designed for gifts, donations, contributions, or assistance are not substitute donation channels. An expressly authorized contribution feature can still be abused if it is used to evade feature limits, move exploit-generated value, manipulate rewards, or complete prohibited RMT.

The relevant question is the transaction's **real primary or main purpose**, assessed from the surrounding evidence. A transaction can be friendly, generous, speculative, emotional, collectible, strategic, or commercially unusual and still be genuine.

## 2. A high price or large value movement is a signal, not proof

Do not create an automatic rule such as `price > X = violation`, `salary > X = funneling`, `large dividend = abuse`, `large Union contribution = abuse`, or `price is 10x average = ban`.

Potential review signals can include:

- a large deviation from recent comparable prices;
- repeated one-way value flows to the same account or group of accounts where the feature does not itself explain the flow;
- circular transactions that return the underlying asset while leaving money with another account;
- rapid buy-resell or buy-return patterns with no credible gameplay purpose;
- repeated transactions involving accounts that appear to be controlled or coordinated together;
- transactions structured in small pieces to avoid limits or review thresholds;
- a seller repeatedly receiving extreme prices for low-value or interchangeable items;
- Company, job, contract, art, auction, market, tender, stock, or Union activity that has no credible gameplay/economic substance beyond moving wealth;
- repeated use of alternative accounts primarily to evade a per-user or per-account feature limit;
- messages or other lawful evidence explicitly describing the transaction as a gift, donation, funnel, parking arrangement, sham salary, rigged bid, or way around a restriction where the feature was not intended for that purpose; or
- credible evidence of off-platform consideration showing that the in-game mechanic was used for a different purpose or as part of separate RMT.

None of those signals is automatically conclusive. A single expensive artwork, generous bargain, rare collectible, strategic Company deal, large legitimate salary/dividend, unusual tender bid, or valid Union Project contribution is not a violation merely because CK-Labs would have chosen different economics.

## 3. Require reasonable evidence of the prohibited purpose

Before final enforcement, CK-Labs should be able to articulate why the available evidence reasonably supports the conclusion that prohibited wealth movement, manipulation, exploit abuse, or RMT was the main purpose rather than an incidental or intended consequence of genuine gameplay.

Useful evidence may include, where lawfully available and relevant:

- server-side transaction history;
- the exact server function/feature path involved and its intended purpose;
- the economic value actually exchanged in both directions;
- whether the acquired asset remained with and was used by the buyer;
- repeated transaction patterns over time;
- account-linkage or control evidence;
- relevant Company salary/payroll, treasury, shareholder, tender, supply, market, Union contribution/reward, auction, contract, job, art, inventory, or ownership records;
- relevant in-game communications reviewed under the applicable Privacy Policy, Community Standards, and law;
- prior warnings or prior confirmed attempts to evade the same rule;
- reliable evidence of an outside payment or benefit linked to the in-game transaction; and
- reliable technical or payment evidence where the transfer was connected to another abuse investigation.

Shared IP address, household, device family, geography, friendship, Company or Union membership, shareholder relationship, or a single transaction is not by itself proof that accounts are controlled by one person or that the transaction was a sham. Corroborate material conclusions.

## 4. Separate detection, containment, correction, and punishment

These are four different decisions:

1. **Detection:** a risk rule, threshold, report, anomaly, or automated model flags a transaction for review.
2. **Containment:** CK-Labs may temporarily hold a transfer, market function, Company function, Union function, or related economy feature where reasonably necessary to prevent ongoing harm while evidence is reviewed.
3. **Correction:** if the transaction violated the genuine-purpose or RMT rule, CK-Labs may reverse or unwind the specific prohibited in-game transfer in a proportionate way.
4. **Account enforcement:** warnings, feature restrictions, suspension, or final termination require a separate proportionality and evidence assessment under the account-enforcement gate.

A transaction can require reversal without proving that every recipient intentionally cheated. Likewise, suspicious conduct can justify temporary containment without yet justifying a final account penalty.

## 5. Automated systems may flag, but should not silently decide the whole case

Automated thresholds, anomaly models, relationship graphs, heuristics, velocity checks, price-deviation rules, payroll/tender/contribution risk rules, and fraud signals may be used to prioritize review and may support reversible protective holds.

Do not make a permanent account termination or similarly serious final finding solely because an automated score crosses a threshold without the review and safeguards required by applicable law and the facts of the case.

Where GDPR Article 22 applies because a decision is based solely on automated processing and produces legal or similarly significant effects, preserve the applicable legal basis and safeguards. Where Article 22(3) applies, those safeguards include at least the right to obtain human intervention, express a point of view, and contest the decision.

Even where Article 22 does not apply, a human-review path is a strong operational safeguard for high-impact economy enforcement and helps distinguish genuine rare trades or strategic Company/Union actions from disguised transfers.

Record enough reason codes and evidence to explain the decision, but do not collect or retain unnecessary personal data merely because more data might make enforcement easier.

## 6. Give usable reasons and an appeal route where required

A material enforcement record should identify, at minimum:

- the feature involved;
- the transaction or transaction group reviewed;
- the rule relied on;
- the main factual reasons supporting the conclusion;
- whether automated detection materially contributed;
- the correction or restriction imposed;
- the duration of a temporary restriction where known; and
- the available TycoonX Support or other applicable review route.

Where the EU Digital Services Act Article 17 actually applies to a hosting-service decision based on recipient-provided information being illegal or incompatible with the terms, provide the clear and specific statement of reasons required by that Article for covered restrictions, including covered payment, service, or account restrictions. Do not claim that every gameplay-economy decision worldwide is automatically governed by DSA Article 17.

German standard-terms enforcement also benefits from a clear, comprehensible rule. BGB § 307 can invalidate standard terms that unreasonably disadvantage the other party contrary to good faith, including through lack of clarity or comprehensibility. Apply the public TycoonX rules according to their stated genuine-purpose, authorized-feature, RMT, proportionality, and reasonable-evidence limits rather than inventing hidden enforcement standards after the fact.

## 7. Account compromise changes the enforcement analysis

A compromised account can send, sell, buy, bid, withdraw, distribute, donate, or funnel assets without the legitimate owner's intent.

If credible compromise indicators exist:

- contain the account and affected economy functions where reasonably necessary;
- preserve transaction and session evidence;
- investigate control of the account separately from the transfer itself;
- restore or correct game state where reasonably verifiable and technically feasible; and
- do not treat the mere occurrence of the transfer as conclusive proof that the legitimate owner intentionally violated the rule.

Use `TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md` for the compromise and recovery decision.

## 8. Exploit-generated or invalid value follows the economy-correction gate

If the transferred value came from an exploit, duplicated transaction, invalid payment, corrupted state, replayed grant, unintended payroll/tender/project completion, or other invalid source, the source problem and the genuine-transaction problem are related but legally and operationally distinct.

Use `TYCOONX_GAME_ECONOMY_RESET_CORRECTION_RELEASE_GATE.md` to trace and unwind invalid value. A downstream recipient may need a narrow state correction even if CK-Labs cannot prove that the recipient knew the value was invalid. Do not label that recipient a cheater or transfer-abuser without separate evidence of intent or prohibited conduct.

Do not reverse the same invalid value twice simply because it passed through multiple accounts, Companies, Unions, markets, or reward paths.

## 9. Paid entitlements remain isolated from gameplay-transfer enforcement

A prohibited in-game money or asset transfer or RMT arrangement does not by itself invalidate unrelated purchases through Apple App Store, Google Play, or Xsolla.

Keep these product invariants intact:

- **Purchased Diamonds do not expire solely because time passes.** A transfer-rule or RMT violation does not itself permit CK-Labs to delete unrelated purchased Diamonds. Transaction-specific refund, reversal, chargeback, fraud, duplication, withdrawal, or other lawful correction rules continue to apply separately.
- **30-Day VIP is a one-time, non-renewing 30-day entitlement.** A transfer investigation does not restart, duplicate, or silently extend the 30-day clock, and a temporary hold does not automatically erase the entitlement.
- **Lifetime VIP is a one-time promotional entitlement available only during selected genuine sales windows.** It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability for purchase. Economy enforcement does not reopen a closed Lifetime VIP sales window, create a second entitlement, or invent a provider refund that did not occur.

A final lawful account termination may affect future access only under the canonical Terms, the account-enforcement gate, applicable platform rules, and mandatory law. Do not use a gameplay-transfer or RMT finding as a shortcut to confiscate unrelated legitimate paid value.

## 10. Apple, Google Play, and Xsolla records prove payment facts, not gameplay intent

Platform and payment-provider records can be authoritative for questions such as whether a purchase succeeded, was refunded, was reversed, was charged back, or belongs to a particular transaction/account mapping.

They do not by themselves prove why a player bought an artwork, entered a trade, paid a Company salary, withdrew Company treasury under authority, paid a dividend, placed a tender bid, contributed to a Union Project, or used another TycoonX economy mechanic.

Keep the roles separate:

- Apple App Store purchase/refund records remain payment and entitlement evidence for Apple transactions.
- Google Play purchase/order/refund/voided-purchase records remain payment and entitlement evidence for Google transactions.
- Xsolla order/payment/refund/reversal/chargeback records remain transaction-specific payment evidence for the TycoonX webshop.
- CK-Labs remains responsible for the TycoonX gameplay determination and resulting game-state correction where the issue is abuse of a TycoonX mechanic.

Platform-level gifting permission does not transform every TycoonX gameplay mechanic into a donation or RMT channel. Conversely, an explicitly designed TycoonX assistance/contribution mechanic is not prohibited merely because a separate platform has its own digital-gifting rules.

## 11. Real-money trading is separately prohibited

The canonical September 5 Terms separately prohibit unauthorized real-money trading and off-platform exchange of TycoonX value. Unless CK-Labs expressly provides a specific authorized mechanism, players must not buy, sell, broker, advertise, arrange, or exchange TycoonX accounts, in-game money, Diamonds, shares, Companies, property, products, art, items, services, VIP, paid entitlements, or other game value for real money, cryptocurrency, gift cards, physical goods, outside services, or any other real-world consideration.

Reliable evidence of outside consideration can support **two different enforcement theories** that must not be confused:

1. the in-game mechanic was not genuinely used for its intended purpose and instead disguised a wealth transfer; and/or
2. the parties entered into a separately prohibited RMT or off-platform exchange.

A transaction may violate one rule, both rules, or neither. Record which rule is actually supported by the evidence.

The RMT prohibition includes direct, indirect, staged, and middleman arrangements where an outside payment or benefit is linked to an in-game transfer. It also covers attempts to disguise the exchange through another person, alternative account, Company, art sale, trade, auction, market order, Begging, Union Project contribution, salary, dividend, tender, stock transaction, or another mechanic.

The RMT rule does **not** prohibit:

- purchases made from CK-Labs through an authorized TycoonX channel, including Apple App Store, Google Play, and the official TycoonX web shop using Xsolla;
- a platform-supported gift that TycoonX expressly enables and that is permitted by the applicable platform rules;
- a TycoonX transfer mechanism expressly made available by CK-Labs for the relevant purpose;
- in-game financial assistance through Begging to the extent that the Begging feature itself permits it and no outside consideration is exchanged; or
- a Union Project contribution or another expressly designed in-game contribution mechanic used according to that feature's purpose and limits without outside consideration.

Do not treat an official CK-Labs purchase, authorized Company/Union value-distribution mechanic, or expressly authorized gift/transfer as RMT merely because value moves in-game or real money was used in an official purchase channel.

CK-Labs does not guarantee, escrow, enforce, refund, or mediate unauthorized off-platform deals between users. This allocation does not exclude any right or liability that applicable law does not permit CK-Labs to exclude.

## 12. Do not punish retroactively solely under later wording

The September 5, 2026 genuine-transaction/RMT rules and September 10, 2026 implementation clarification should not be used by themselves to impose a new punitive account finding for conduct completed before the relevant rule applied.

The September 10 clarification also must **not** be read backwards to say that legitimate Union Project donations or other intended value-distribution mechanics were prohibited before the clarification. It clarifies the intended-purpose test against actual deployed features rather than inventing a new offense.

Earlier conduct may still be corrected or sanctioned where an older rule independently covered it, for example because it involved an exploit, fraud, unauthorized transfer, manipulated game state, payment abuse, account sale, collusion already prohibited by another rule, or another already-prohibited act.

For continuing or repeated conduct spanning a rule change, identify the conduct and rule actually relied on rather than treating the entire historical pattern as automatically punishable under later wording.

## 13. A gameplay correction is not a real-world debt

Reversing a prohibited in-game transaction does not authorize CK-Labs to:

- charge a payment card;
- create a new Apple, Google Play, or Xsolla purchase;
- convert an in-game negative balance into a real-world debt without a separate lawful basis; or
- silently debit a future purchase.

Use the narrowest reasonable in-game correction. Any genuine real-world payment claim must have its own independent legal and contractual basis.

## 14. Security incidents and outages may justify temporary economy controls

During an exploit outbreak, account-compromise wave, provider incident, database problem, or other security/economy emergency, CK-Labs may temporarily disable or limit markets, transfers, art sales, Company transactions, tender bidding, Union contributions, Begging, or other affected multiplayer economy features where reasonably necessary to protect users and game integrity.

A temporary emergency shutdown of a mechanic does not convert previously genuine transactions into violations and does not automatically extend, restart, duplicate, or revoke paid entitlements.

When the feature returns, apply the same genuine-purpose and RMT rules consistently rather than selectively allowing disguised transfers for favored users or groups.

## 15. Minimum enforcement evidence record

For a material transfer-abuse, manipulation, collusion, limit-evasion, or RMT case, preserve a proportionate record containing:

- case/reference ID;
- affected account IDs;
- affected Company/Union IDs where relevant;
- feature and transaction IDs;
- timestamps;
- amounts/assets transferred;
- reciprocal in-game value, if any;
- feature purpose and relevant server rule/configuration at the time;
- outside consideration alleged or proven, if relevant;
- reason the feature's intended purpose was or was not genuinely served;
- evidence supporting account linkage or coordination, if relied on;
- relevant communications or reports, only where lawfully processed and necessary;
- automated flags and their role in the case;
- human reviewer conclusion for serious final actions;
- specific rule or rules found violated;
- correction applied;
- account restriction applied, if any;
- provider/payment transaction references only where relevant;
- paid-value isolation check;
- compromise check;
- notice/reason supplied where required; and
- appeal/review outcome.

Avoid retaining unnecessary raw personal data after the applicable purpose and retention period ends.

## 16. Code-first deployed mechanic map: September 10, 2026

This section records the gameplay paths specifically inspected during the September 10 read-only audit. It is implementation evidence, not a promise that the current numeric configuration will never change.

### Company salary and payroll

- `company_member_set_salary(...)` currently uses Company permission checks, server-side salary bounds, treasury/payroll checks on raises, and salary history.
- `company_run_payroll(...)` pays due active-member salaries from Company treasury to player wallets and records the Company transaction.

**Enforcement boundary:** legitimate salary/payroll is intended value movement. A server-approved salary amount is not automatically proof of abuse and not an automatic safe harbor for a sham salary whose primary purpose is unrelated wealth funneling.

### Company treasury distribution

- `company_ceo_withdraw(...)` currently uses the Company's `withdraw_money` permission, limits withdrawal to available treasury after reserved amounts, credits the acting player, and records the withdrawal/distribution.

**Enforcement boundary:** the transfer from Company treasury to an authorized actor is part of the deployed mechanic. Investigate compromise, permission abuse, exploit use, or sham/circular arrangements separately rather than treating every withdrawal as prohibited self-dealing.

### Company public-stock actions

- `company_ipo(...)` supports the deployed Company IPO process and subscription window.
- `company_pay_dividend(...)` distributes Company value pro rata to current stockholders and applies the deployed ex-dividend mechanics.
- `company_buyback(...)` and `company_secondary_offering(...)` implement current buyback/secondary-offering behavior with server-side permissions, limits/cooldowns, and transaction recording.

**Enforcement boundary:** IPO participation, dividends, buybacks, offerings, and stock ownership are fictional gameplay systems. Unusual profitability or a large distribution alone is not manipulation. Wash/circular trading, coordinated self-dealing, exploit use, or arrangements mainly intended to funnel value can be reviewed on evidence.

### Company tenders

- `new_company_tender_bid(...)` currently checks tender-management authority, Company status, issuer/self-bid restrictions, visibility, maximum price, blind/live tender rules, and near-closing extension behavior.

**Enforcement boundary:** a low or aggressive bid, repeated win, or last-minute bid is not alone proof of collusion. Bid rigging, fake competition, alternate-Company coordination, intentional loss arrangements mainly used to transfer value, or exploit-driven duplicate completion require evidence and a separate correction/enforcement analysis.

### Union Project contributions

- `donate_union_project(...)` is an expressly designed donation/contribution mechanic.
- The current implementation records `project_donation`, currently caps a user's cumulative contribution at 50% of the project target, and can complete the project into Union treasury/XP and configured active-member rewards.

**Enforcement boundary:** an ordinary Union Project donation is authorized gameplay. Do not apply the old shorthand “Begging only” logic to it. Attempts to split controlled accounts mainly to evade the current per-user cap, recycle exploit value, manipulate configured rewards, or link the contribution to outside consideration can be reviewed under the applicable anti-evasion, exploit, genuine-purpose, or RMT rule.

The detailed implementation inventory and next audit order are maintained in `TYCOONX_CODE_FIRST_GAMEPLAY_LEGAL_MAP.md`.

## 17. Regression scenarios

Release and Support QA should be able to resolve at least these scenarios consistently:

1. **Genuine expensive art:** a collector buys a rare work at a very high in-game price because they genuinely want it. No contrary evidence exists. Do not treat price alone as a violation.
2. **Disguised art help:** a buyer purchases art for an extreme in-game price and says in chat that the purpose is to give the artist money because the artist needs help. The main purpose is financial assistance, so the art mechanic is being misused.
3. **One unusual trade:** a player pays far above recent market value once. Flag for review if appropriate; do not auto-ban solely from the deviation.
4. **Repeated alt-account funnel:** linked accounts repeatedly buy trivial items from one account at extreme prices and reverse/return the items. Strong evidence can support reversal plus proportionate enforcement.
5. **Proper Begging use:** a player asks for and receives financial help through Begging under its rules, with no outside consideration. Do not classify the help itself as a disguised transfer merely because the recipient is poor.
6. **Proper Union Project contribution:** a player lawfully contributes to a Union Project within the feature rules. Do not classify the contribution itself as disguised gifting merely because it moves player funds into the shared project or because completion can produce configured shared rewards.
7. **Union cap evasion:** evidence shows one person controls several accounts and splits Union Project contributions mainly to defeat the deployed per-user cap. Review the evasion; do not pretend each technically accepted call is automatically legitimate merely because the server processed it.
8. **Friendly genuine discount:** a friend sells a wanted item cheaply to another friend. If there is a genuine trade purpose and no outside consideration or evidence that the mechanic is mainly being used to move wealth, friendship or generosity alone is not a violation.
9. **Legitimate salary:** a Company pays a large but genuine salary through the supported payroll system. Amount alone is not proof of funneling.
10. **Sham salary funnel:** Company/account history and communications reasonably show a salary was arranged mainly to move wealth to a coordinated account with no genuine Company/employment purpose. The salary mechanic can be treated as misused even if the amount was technically accepted by the server.
11. **Authorized Company treasury withdrawal:** an actor with the relevant Company authority uses the deployed withdrawal mechanic for a genuine Company-owner/distribution purpose. The personal credit is not automatically a violation.
12. **Legitimate dividend:** a Company declares a supported dividend and current stockholders receive the formulaic pro-rata distribution. Do not treat the distribution itself as RMT or gifting.
13. **Tender collusion:** independent evidence shows two Companies coordinated sham bids to allocate a tender or transfer value. Investigate the collusion; do not infer it merely from a low bid or repeated winner.
14. **Compromised account:** an attacker drains an account through trades, salary changes, withdrawals, bids, or contributions. Freeze and investigate; do not automatically punish the legitimate owner.
15. **Exploit proceeds reach an innocent buyer or shared reward recipient:** unwind proven invalid state where necessary, but treat punishment of the downstream recipient as a separate intent question.
16. **Automated score 0.99:** the score can trigger containment/review. It is not by itself the final factual finding for permanent termination.
17. **Provider chargeback:** correct the payment-linked entitlement as required, but do not call the player a transfer abuser or RMT participant merely because a chargeback exists.
18. **Lifetime VIP holder violates a market rule:** market enforcement does not create a second Lifetime VIP, reopen a sales window, or invent a purchase refund. Any final account-access consequence follows the separate termination rules.
19. **Pre-September 5 assistance transaction:** do not impose a new punitive finding solely under the later genuine-transaction or RMT wording unless an earlier rule independently prohibited the conduct.
20. **External payment for artwork or Union contribution:** reliable evidence that one player paid another outside TycoonX in exchange for an in-game transfer/contribution can support a separate RMT finding even when the in-game feature itself normally permits legitimate use.
21. **Large legitimate Company deal:** a genuine acquisition, financing, supply, ownership, salary, dividend, or treasury-distribution transaction should not be invalidated merely because it transfers substantial in-game value.
22. **Emergency economy shutdown:** disabling affected Company, Union, market, art, or transfer functions during an active exploit does not itself change valid payment entitlements or make past legitimate actions invalid.
23. **Authorized platform gift:** an eligible gift completed through a platform-supported gifting mechanism that TycoonX expressly enables is not RMT merely because the original purchaser paid real money through the authorized platform channel.

## 18. Release checklist

Before relying on these rules at scale, confirm:

- [ ] the September 10 canonical Terms genuine-transaction/authorized-contribution wording is live;
- [ ] the September 5 canonical Terms RMT/off-platform-exchange wording remains live;
- [ ] all 25 localized Terms render the synchronized transfer, gameplay-economy, and RMT rules;
- [ ] Union Project contributions are not misclassified under a stale “Begging only” interpretation;
- [ ] Support/admin tooling distinguishes intended Company/Union value movement from genuine-purpose abuse and standalone RMT;
- [ ] high price, salary, dividend, tender bid, withdrawal, or contribution alone cannot automatically produce permanent enforcement;
- [ ] server acceptance of an amount/action is not treated as an automatic legal safe harbor for a sham arrangement;
- [ ] automated detection can create a review/hold without silently becoming a final ban;
- [ ] serious final actions have a human-review path where required or appropriate;
- [ ] account compromise is checked separately;
- [ ] economy correction and account punishment are separate actions;
- [ ] purchased Diamonds, 30-Day VIP, and Lifetime VIP are isolated from unrelated gameplay corrections;
- [ ] Apple, Google Play, and Xsolla official payment state is not confused with unauthorized player-to-player RMT;
- [ ] expressly authorized platform gifting/transfer and in-game assistance/contribution mechanisms are not misclassified as RMT;
- [ ] prohibited-transfer reversals are idempotent and cannot remove the same value twice;
- [ ] reason/appeal information is available where law or the applicable service framework requires it;
- [ ] the rules are not applied punitively retroactively solely because later wording clarified the implementation; and
- [ ] no workflow turns an in-game correction into an unauthorized real-world charge or debt.

## Reference points

- Canonical TycoonX Terms of Service: `tyconx-terms-of-service.md`
- Code-first gameplay implementation/legal map: `TYCOONX_CODE_FIRST_GAMEPLAY_LEGAL_MAP.md`
- Localized genuine-transfer wording: `app/tycoonx-legal/TransferRuleNotice.tsx`
- Localized Company/tender/Union gameplay clarification: `app/tycoonx-legal/GameplayEconomyRuleNotice.tsx`
- Localized RMT wording: `app/tycoonx-legal/RealMoneyTradingNotice.tsx`
- TycoonX game-economy correction gate: `TYCOONX_GAME_ECONOMY_RESET_CORRECTION_RELEASE_GATE.md`
- TycoonX account-enforcement gate: `TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md`
- GDPR Article 22, Regulation (EU) 2016/679: automated individual decision-making and applicable human-intervention/contest safeguards
- Digital Services Act Article 17, Regulation (EU) 2022/2065: statements of reasons for covered hosting-service restrictions
- German BGB § 307: reasonableness, clarity, and comprehensibility of standard terms

This document is operational release guidance. It does not replace mandatory law or expand the public TycoonX Terms beyond their actual wording.