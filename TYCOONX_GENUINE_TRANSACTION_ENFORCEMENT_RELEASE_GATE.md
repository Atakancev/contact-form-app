# TycoonX Genuine Transaction & Wealth-Transfer Enforcement Release Gate

**Release QA reference. Last reviewed: September 5, 2026.**

Owner: CK-Labs  
Scope: operational enforcement of the September 5, 2026 TycoonX Terms rules requiring genuine gameplay transactions, prohibiting disguised player-to-player wealth transfers through unrelated mechanics, and prohibiting unauthorized real-money trading or off-platform exchange of TycoonX value.

## Purpose and source hierarchy

The canonical English TycoonX Terms state that players are expected to build their own in-game wealth through gameplay and genuine economic activity. Player-to-player movement of in-game money, assets, or other economic value is permitted only where it is part of a genuine gameplay transaction and the relevant feature is used for its intended purpose.

The canonical Terms also separately prohibit buying, selling, brokering, advertising, arranging, or exchanging TycoonX accounts or game value for real money, cryptocurrency, gift cards, physical goods, outside services, or other real-world consideration unless CK-Labs expressly provides a specific authorized mechanism.

This gate does **not** create a new player-facing prohibition. It explains how CK-Labs should investigate and enforce the existing September 5 Terms rules consistently, proportionately, and with enough evidence to avoid treating legitimate expensive or unusual trades as violations.

Use this gate together with:

- `tyconx-terms-of-service.md` as the canonical player-facing source;
- `TYCOONX_GAME_ECONOMY_RESET_CORRECTION_RELEASE_GATE.md` for invalid-state tracing, corrections, rollbacks, and downstream unwinds;
- `TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md` for security holds, suspensions, termination, compromise, notice, and appeals;
- `app/tycoonx-legal/TransferRuleNotice.tsx` and `app/tycoonx-legal/RealMoneyTradingNotice.tsx` for synchronized rendered Terms wording; and
- `scripts/verify-tycoonx-genuine-transfers.mjs` for canonical/localized Terms parity.

Do not duplicate those doctrines here. This gate answers the narrower questions: **when does a transaction stop being a genuine use of a TycoonX mechanic and become a disguised wealth transfer, and when does an outside benefit create a separate real-money-trading violation?**

## 1. Apply the genuine-purpose test

For every investigated transaction, first identify the intended gameplay purpose of the feature that was used. Then determine whether the transaction genuinely served that purpose.

Examples:

- **Art:** the buyer must genuinely want to acquire the artwork. Buying art mainly to send money to the artist or financially help that player is prohibited.
- **Market sale or auction:** there should be a genuine acquisition/sale reason for the item, product, asset, or right being exchanged.
- **Company transaction:** the payment or asset movement should correspond to genuine company activity, ownership, supply, employment, financing, or another permitted company mechanic rather than exist mainly to funnel personal wealth.
- **Contract or job:** the payment should correspond to the genuine in-game contract, task, work, or service represented by that feature.
- **Trade:** the parties should genuinely want the assets or value being exchanged. A trade should not merely disguise a one-way gift.
- **Begging:** financial help belongs in TycoonX's designated Begging screen or feature where available and subject to the rules of that feature. Other mechanics are not substitute donation channels.

The relevant question is the transaction's **real primary or main purpose**, assessed from the surrounding evidence. A transaction can be friendly, generous, speculative, emotional, collectible, or commercially unusual and still be genuine.

## 2. A high price is a signal, not proof

Do not create an automatic rule such as `price > X = violation` or `price is 10x average = ban`.

Potential review signals can include:

- a large deviation from recent comparable prices;
- repeated one-way value flows to the same account or group of accounts;
- circular transactions that return the underlying asset while leaving money with another account;
- rapid buy-resell or buy-return patterns with no credible gameplay purpose;
- repeated transactions involving accounts that appear to be controlled or coordinated together;
- transactions structured in small pieces to avoid limits or review thresholds;
- a seller repeatedly receiving extreme prices for low-value or interchangeable items;
- company, job, contract, art, auction, or market activity that has no credible economic substance beyond moving wealth;
- messages or other lawful evidence explicitly describing the transaction as a gift, donation, help, funnel, parking arrangement, or way around a restriction; or
- credible evidence of off-platform consideration that shows the in-game mechanic was being used for a different purpose than the feature represents or that a separate RMT arrangement existed.

None of those signals is automatically conclusive. A single expensive artwork, a generous bargain, a rare collectible, a strategic company deal, or an unusual market transaction is not a violation merely because CK-Labs would have priced it differently.

## 3. Require reasonable evidence of the prohibited purpose

Before final enforcement, CK-Labs should be able to articulate why the available evidence reasonably supports the conclusion that moving wealth was the transaction's main purpose rather than an incidental consequence of genuine gameplay, or why the evidence establishes a separate prohibited RMT arrangement.

Useful evidence may include, where lawfully available and relevant:

- server-side transaction history;
- the economic value actually exchanged in both directions;
- whether the acquired asset remained with and was used by the buyer;
- repeated transaction patterns over time;
- account-linkage or control evidence;
- relevant company, market, auction, contract, job, art, inventory, or ownership records;
- relevant in-game communications reviewed under the applicable Privacy Policy, Community Standards, and law;
- prior warnings or prior confirmed attempts to evade the same rule;
- reliable evidence of an outside payment or benefit linked to the in-game transaction; and
- reliable technical or payment evidence where the transfer was connected to another abuse investigation.

Shared IP address, household, device family, geography, friendship, company membership, or a single transaction is not by itself proof that accounts are controlled by one person or that the transaction was a sham. Corroborate material conclusions.

## 4. Separate detection, containment, correction, and punishment

These are four different decisions:

1. **Detection:** a risk rule, threshold, report, anomaly, or automated model flags a transaction for review.
2. **Containment:** CK-Labs may temporarily hold a transfer, market function, company function, or related economy feature where reasonably necessary to prevent ongoing harm while evidence is reviewed.
3. **Correction:** if the transaction violated the genuine-purpose or RMT rule, CK-Labs may reverse or unwind the specific prohibited in-game transfer in a proportionate way.
4. **Account enforcement:** warnings, feature restrictions, suspension, or final termination require a separate proportionality and evidence assessment under the account-enforcement gate.

A transaction can require reversal without proving that every recipient intentionally cheated. Likewise, suspicious conduct can justify temporary containment without yet justifying a final account penalty.

## 5. Automated systems may flag, but should not silently decide the whole case

Automated thresholds, anomaly models, relationship graphs, heuristics, velocity checks, price-deviation rules, and fraud signals may be used to prioritize review and may support reversible protective holds.

Do not make a permanent account termination or similarly serious final finding solely because an automated score crosses a threshold without the review and safeguards required by applicable law and the facts of the case.

Where GDPR Article 22 applies because a decision is based solely on automated processing and produces legal or similarly significant effects, preserve the applicable legal basis and safeguards. Where Article 22(3) applies, those safeguards include at least the right to obtain human intervention, express a point of view, and contest the decision.

Even where Article 22 does not apply, a human-review path is a strong operational safeguard for high-impact economy enforcement and helps distinguish genuine rare trades from disguised transfers.

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

German standard-terms enforcement also benefits from a clear, comprehensible rule. BGB § 307 can invalidate standard terms that unreasonably disadvantage the other party contrary to good faith, including through lack of clarity or comprehensibility. Apply the public TycoonX rules according to their stated genuine-purpose, RMT, proportionality, and reasonable-evidence limits rather than inventing hidden enforcement standards after the fact.

## 7. Account compromise changes the enforcement analysis

A compromised account can send, sell, buy, or funnel assets without the legitimate owner's intent.

If credible compromise indicators exist:

- contain the account and affected economy functions where reasonably necessary;
- preserve transaction and session evidence;
- investigate control of the account separately from the transfer itself;
- restore or correct state where reasonably verifiable and technically feasible; and
- do not treat the mere occurrence of the transfer as conclusive proof that the legitimate owner intentionally violated the rule.

Use `TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md` for the compromise and recovery decision.

## 8. Exploit-generated or invalid value follows the economy-correction gate

If the transferred value came from an exploit, duplicated transaction, invalid payment, corrupted state, replayed grant, or other invalid source, the source problem and the genuine-transaction problem are related but legally and operationally distinct.

Use `TYCOONX_GAME_ECONOMY_RESET_CORRECTION_RELEASE_GATE.md` to trace and unwind invalid value. A downstream recipient may need a narrow state correction even if CK-Labs cannot prove that the recipient knew the value was invalid. Do not label that recipient a cheater or transfer-abuser without separate evidence of intent or prohibited conduct.

Do not reverse the same invalid value twice simply because it passed through multiple accounts.

## 9. Paid entitlements remain isolated from gameplay-transfer enforcement

A prohibited in-game money or asset transfer or RMT arrangement does not by itself invalidate unrelated purchases through Apple App Store, Google Play, or Xsolla.

Keep these product invariants intact:

- **Purchased Diamonds do not expire solely because time passes.** A transfer-rule or RMT violation does not itself permit CK-Labs to delete unrelated purchased Diamonds. Transaction-specific refund, reversal, chargeback, fraud, duplication, withdrawal, or other lawful correction rules continue to apply separately.
- **30-Day VIP is a one-time, non-renewing 30-day entitlement.** A transfer investigation does not restart, duplicate, or silently extend the 30-day clock, and a temporary hold does not automatically erase the entitlement.
- **Lifetime VIP is a one-time promotional entitlement available only during selected genuine sales windows.** It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability for purchase. Economy enforcement does not reopen a closed Lifetime VIP sales window, create a second entitlement, or invent a provider refund that did not occur.

A final lawful account termination may affect future access only under the canonical Terms, the account-enforcement gate, applicable platform rules, and mandatory law. Do not use a gameplay-transfer or RMT finding as a shortcut to confiscate unrelated legitimate paid value.

## 10. Apple, Google Play, and Xsolla records prove payment facts, not gameplay intent

Platform and payment-provider records can be authoritative for questions such as whether a purchase succeeded, was refunded, was reversed, was charged back, or belongs to a particular transaction/account mapping.

They do not by themselves prove why a player bought an artwork, entered a trade, paid a company, or used another TycoonX economy mechanic.

Keep the roles separate:

- Apple App Store purchase/refund records remain payment and entitlement evidence for Apple transactions.
- Google Play purchase/order/refund/voided-purchase records remain payment and entitlement evidence for Google transactions.
- Xsolla order/payment/refund/reversal/chargeback records remain transaction-specific payment evidence for the TycoonX webshop.
- CK-Labs remains responsible for the TycoonX gameplay determination and resulting game-state correction where the issue is abuse of a TycoonX mechanic.

Apple currently permits eligible in-app-purchase items to be gifted under its rules, but that platform-level gifting permission does not transform every TycoonX gameplay mechanic into a donation or RMT channel. Google Play currently distinguishes peer-to-peer payments from digital in-app purchases and requires in-app virtual currency to stay within the app or game title for which it was purchased. Xsolla's virtual-currency tooling concerns authorized catalog/payment delivery and does not authorize player-to-player off-platform RMT.

## 11. Real-money trading is separately prohibited

The canonical September 5 Terms now separately prohibit unauthorized real-money trading and off-platform exchange of TycoonX value. Unless CK-Labs expressly provides a specific authorized mechanism, players must not buy, sell, broker, advertise, arrange, or exchange TycoonX accounts, in-game money, Diamonds, shares, companies, property, products, art, items, services, VIP, paid entitlements, or other game value for real money, cryptocurrency, gift cards, physical goods, outside services, or any other real-world consideration.

This means reliable evidence of outside consideration can support **two different enforcement theories** that must not be confused:

1. the in-game mechanic was not genuinely used for its intended purpose and instead disguised a wealth transfer; and/or
2. the parties entered into a separately prohibited RMT or off-platform exchange.

A transaction may violate one rule, both rules, or neither. Record which rule is actually supported by the evidence.

The RMT prohibition includes direct, indirect, staged, and middleman arrangements where an outside payment or benefit is linked to an in-game transfer. It also covers attempts to disguise the exchange through another person, alternative account, company, art sale, trade, auction, market order, Begging, or another mechanic.

The RMT rule does **not** prohibit:

- purchases made from CK-Labs through an authorized TycoonX channel, including Apple App Store, Google Play, and the official TycoonX web shop using Xsolla;
- a platform-supported gift that TycoonX expressly enables and that is permitted by the applicable platform rules;
- a TycoonX transfer mechanism expressly made available by CK-Labs for the relevant purpose; or
- in-game financial assistance through Begging to the extent that the Begging feature itself permits it and no outside consideration is exchanged.

Do not treat an official CK-Labs purchase or expressly authorized gift/transfer as RMT merely because real money was used in the official purchase channel.

CK-Labs does not guarantee, escrow, enforce, refund, or mediate unauthorized off-platform deals between users. This allocation does not exclude any right or liability that applicable law does not permit CK-Labs to exclude.

## 12. Do not punish retroactively solely under the September 5 rules

The September 5, 2026 genuine-transaction and RMT rules should not be used by themselves to impose new punitive account enforcement for conduct completed before the relevant rule was incorporated into the applicable Terms.

Earlier conduct may still be corrected or sanctioned where an older rule independently covered it, for example because it involved an exploit, fraud, unauthorized transfer, manipulated game state, payment abuse, account sale, or another already-prohibited act.

For continuing or repeated conduct spanning the rule change, identify the post-effective-date conduct relied on for the new rule rather than treating the entire historical pattern as automatically punishable under the new wording.

## 13. A gameplay correction is not a real-world debt

Reversing a prohibited in-game transaction does not authorize CK-Labs to:

- charge a payment card;
- create a new Apple, Google Play, or Xsolla purchase;
- convert an in-game negative balance into a real-world debt without a separate lawful basis; or
- silently debit a future purchase.

Use the narrowest reasonable in-game correction. Any genuine real-world payment claim must have its own independent legal and contractual basis.

## 14. Security incidents and outages may justify temporary transfer controls

During an exploit outbreak, account-compromise wave, provider incident, database problem, or other security/economy emergency, CK-Labs may temporarily disable or limit markets, transfers, art sales, company transactions, Begging, or other affected multiplayer economy features where reasonably necessary to protect users and game integrity.

A temporary emergency shutdown of a mechanic does not convert previously genuine transactions into violations and does not automatically extend, restart, duplicate, or revoke paid entitlements.

When the feature returns, apply the same genuine-purpose and RMT rules consistently rather than selectively allowing disguised transfers for favored users or groups.

## 15. Minimum enforcement evidence record

For a material transfer-abuse or RMT case, preserve a proportionate record containing:

- case/reference ID;
- affected account IDs;
- feature and transaction IDs;
- timestamps;
- amounts/assets transferred;
- reciprocal in-game value, if any;
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

## 16. Regression scenarios

Release and Support QA should be able to resolve at least these scenarios consistently:

1. **Genuine expensive art:** a collector buys a rare work at a very high in-game price because they genuinely want it. No contrary evidence exists. Do not treat price alone as a violation.
2. **Disguised art help:** a buyer purchases art for an extreme in-game price and says in chat that the purpose is to give the artist money because the artist needs help. The main purpose is financial assistance, so the art mechanic is being misused.
3. **One unusual trade:** a player pays far above recent market value once. Flag for review if appropriate; do not auto-ban solely from the deviation.
4. **Repeated alt-account funnel:** linked accounts repeatedly buy trivial items from one account at extreme prices and reverse/return the items. Strong evidence can support reversal plus proportionate enforcement.
5. **Proper Begging use:** a player asks for and receives financial help through the designated Begging feature under its rules, with no outside consideration. Do not classify the help itself as a disguised transfer merely because the recipient is poor.
6. **Friendly genuine discount:** a friend sells a wanted item cheaply to another friend. If there is a genuine trade purpose and no outside consideration or evidence that the mechanic is mainly being used to move wealth, friendship or generosity alone is not a violation.
7. **Compromised account:** an attacker drains an account through trades. Freeze and investigate; do not automatically punish the legitimate owner.
8. **Exploit proceeds reach an innocent buyer:** unwind proven invalid state where necessary, but treat punishment of the buyer as a separate intent question.
9. **Automated score 0.99:** the score can trigger containment/review. It is not by itself the final factual finding for permanent termination.
10. **Provider chargeback:** correct the payment-linked entitlement as required, but do not call the player a transfer abuser or RMT participant merely because a chargeback exists.
11. **Lifetime VIP holder violates a market rule:** market enforcement does not create a second Lifetime VIP, reopen a sales window, or invent a purchase refund. Any final account-access consequence follows the separate termination rules.
12. **Pre-September 5 assistance transaction:** do not impose a new punitive finding solely under the later genuine-transaction or RMT wording unless an earlier rule independently prohibited the conduct.
13. **External payment for artwork:** after the RMT rule applies, reliable evidence that one player paid another €20 outside TycoonX in exchange for an in-game artwork or for conducting a sham art transaction can support a separate RMT finding and, where applicable, a genuine-purpose violation.
14. **Large legitimate company deal:** a genuine acquisition, financing, supply, or ownership transaction should not be invalidated merely because it transfers substantial in-game value.
15. **Emergency transfer shutdown:** disabling transfers during an active exploit does not itself change valid payment entitlements or make past legitimate trades invalid.
16. **Authorized platform gift:** an eligible gift completed through a platform-supported gifting mechanism that TycoonX expressly enables is not RMT merely because the original purchaser paid real money through the authorized platform channel.

## 17. Release checklist

Before relying on these rules at scale, confirm:

- [ ] the September 5 canonical Terms genuine-transaction wording is live;
- [ ] the September 5 canonical Terms RMT/off-platform-exchange wording is live;
- [ ] all 25 localized Terms render both synchronized rules;
- [ ] Support/admin tooling distinguishes genuine-purpose abuse from standalone RMT;
- [ ] high price or amount alone cannot automatically produce permanent enforcement;
- [ ] automated detection can create a review/hold without silently becoming a final ban;
- [ ] serious final actions have a human-review path where required or appropriate;
- [ ] account compromise is checked separately;
- [ ] economy correction and account punishment are separate actions;
- [ ] purchased Diamonds, 30-Day VIP, and Lifetime VIP are isolated from unrelated gameplay corrections;
- [ ] Apple, Google Play, and Xsolla official payment state is not confused with unauthorized player-to-player RMT;
- [ ] expressly authorized platform gifting/transfer mechanisms are not misclassified as RMT;
- [ ] prohibited-transfer reversals are idempotent and cannot remove the same value twice;
- [ ] reason/appeal information is available where law or the applicable service framework requires it;
- [ ] the rules are not applied punitively retroactively solely because the wording became effective on September 5; and
- [ ] no workflow turns an in-game correction into an unauthorized real-world charge or debt.

## Reference points

- Canonical TycoonX Terms of Service: `tyconx-terms-of-service.md`
- Localized genuine-transfer wording: `app/tycoonx-legal/TransferRuleNotice.tsx`
- Localized RMT wording: `app/tycoonx-legal/RealMoneyTradingNotice.tsx`
- TycoonX game-economy correction gate: `TYCOONX_GAME_ECONOMY_RESET_CORRECTION_RELEASE_GATE.md`
- TycoonX account-enforcement gate: `TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md`
- GDPR Article 22, Regulation (EU) 2016/679: automated individual decision-making and applicable human-intervention/contest safeguards
- Digital Services Act Article 17, Regulation (EU) 2022/2065: statements of reasons for covered hosting-service restrictions
- German BGB § 307: reasonableness, clarity, and comprehensibility of standard terms
- Apple App Review Guidelines, section 3.1.1: in-app purchases, purchased in-game currency, and eligible gifting rules
- Google Play Payments policy: digital goods, peer-to-peer payment distinction, and requirement that purchased in-app virtual currency remain within the app or game title
- Xsolla virtual-currency, catalog, and refund documentation: authorized payment/catalog mechanics and transaction delivery

This document is operational release guidance. It does not replace mandatory law or expand the public TycoonX Terms beyond their actual wording.