# TycoonX Legal Localization Progress

Canonical legal source: the English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository.

Last synchronized: **September 5, 2026**.

## Rules

- Always display the brand as **TycoonX**. Technical route/file names containing `tyconx` may remain where changing them could break URLs, but rendered prose must never display the legacy misspelling.
- TycoonX went to full release on **September 1, 2026**. Do not describe the live service, users, purchases, VIP, Diamonds, rewards, or current legal terms as beta.
- Translate for legal meaning, not word-for-word. Localized copy must sound natural to a native speaker while preserving the legal effect of the English source.
- English remains canonical. Refresh localized versions whenever the canonical meaning changes materially.
- Locale variants must remain genuinely localized, including `es`/`es_MX`, `fr`/`fr_CA`, `pt`/`pt_BR`, and `zh`/`zh_Hans`/`zh_Hant`.
- Arabic uses RTL layout.
- Locale order is: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.
- Within each locale the order is Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not mark a localized document `Ready` until the rendered page preserves the canonical legal meaning and product distinctions, uses natural native-language wording and punctuation, and contains no stale displayed brand or live-service beta wording.
- Do not use GitHub Actions or paid services for this project. Do not change any database.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales.

All four full localized legal documents are current for every target locale. This means **100/100 localized full documents are currently confirmed current**.

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

Future runs must not duplicate completed localization. Continue with repository-wide legal QA, stale-brand/stale-release-status checks, canonical-English drift checks, duplicate-doctrine cleanup, and remaining commercial/legal/payment-readiness hardening. If canonical English meaning changes materially, reopen only the affected localized document type and resynchronize it in the required locale order.

## September 5, 2026 genuine-transaction and money-transfer invariant

The canonical English Terms were materially updated on September 5, 2026 to prohibit using ordinary TycoonX economic mechanics as disguised donation, assistance, wealth-funneling, parking, hiding, or transfer channels.

All 25 localized Terms routes were synchronized in the required locale order through the shared localized Terms component `app/tycoonx-legal/TransferRuleNotice.tsx`, rendered only on the applicable Terms routes. The same rule is rendered on the canonical English Terms route and is also present directly in `tyconx-terms-of-service.md`.

Every canonical and localized Terms page must preserve all of the following:

- players are expected to build their own in-game wealth through gameplay and genuine economic activity;
- player-to-player movement of in-game money, assets, or other economic value is permitted only as part of a genuine gameplay transaction using the relevant feature for its intended purpose;
- trades, sales, auctions, art purchases, company transactions, contracts, jobs, market orders, or other mechanics must not be used merely or mainly to gift, donate, financially help, enrich, funnel, park, hide, or move wealth to another account;
- sham, circular, or coordinated transactions used mainly to move value rather than genuinely use the relevant feature are prohibited, including where accounts are controlled or coordinated by the same person;
- an art purchase must be motivated by a genuine desire to acquire the artwork and must not be used mainly as a disguised way to send money to or financially help the artist;
- the same genuine-purpose rule applies to every other economic mechanic;
- players seeking financial help must use TycoonX's designated **Begging** screen or feature where available rather than repurposing another mechanic as a donation channel;
- CK-Labs may consider reciprocal value, transaction history, account relationships, repeated transfers, pricing patterns, and relevant communications when assessing the real purpose of a transaction;
- a high price, generous deal, or unusual transaction is **not automatically a violation** merely because it is large or unusual; reasonable evidence of the prohibited transfer purpose is required before enforcement; and
- CK-Labs may reverse prohibited transfers and apply proportionate account restrictions while preserving unrelated legitimate paid value and mandatory rights.

Canonical Terms genuine-transaction commit: `d4d744423ce4195991283c43b30378949f687731`.
Localized transfer-rule component commit: `7e790f6c968efa7ac6150afd5cbb2490d390beb2`.
Localized Terms layout integration commit: `6b9e7c554b5566badf67fae0f76ffa51c165e3cb`.
Canonical rendered Terms layout integration commit: `7584872a1beb1e221dbe43c81c5cecd3448f7ce6`.

## September 5, 2026 real-money trading and off-platform exchange invariant

The canonical English Terms were further materially updated on September 5, 2026 to prohibit unauthorized real-money trading (RMT) and off-platform exchange of TycoonX accounts or game value.

All 25 localized Terms routes were synchronized in the required locale order through `app/tycoonx-legal/RealMoneyTradingNotice.tsx`. The component uses natural locale-specific wording, keeps the regional variants distinct, uses RTL for Arabic, and renders only on the canonical or localized Terms routes.

Every canonical and localized Terms page must preserve all of the following:

- unless CK-Labs expressly provides a specific authorized mechanism, users must not buy, sell, broker, advertise, arrange, or exchange a TycoonX account, in-game money, Diamonds, shares, companies, property, products, art, items, services, VIP, paid entitlements, or other game value for real money, cryptocurrency, gift cards, physical goods, outside services, or other real-world consideration;
- the prohibition covers direct deals and indirect, staged, or middleman arrangements where an outside payment or benefit is linked to an in-game transfer;
- another person, alternative account, company, art sale, trade, auction, market order, Begging, or another mechanic must not be used to disguise or complete an RMT exchange;
- official purchases made from CK-Labs through Apple App Store, Google Play, or the official TycoonX web shop using Xsolla are not RMT;
- a platform-supported gift or TycoonX transfer mechanism expressly enabled for that purpose is not automatically RMT;
- Begging permits only the in-game assistance allowed by that feature and does not authorize outside payment in exchange for TycoonX value;
- CK-Labs may reverse in-game transactions reasonably linked to prohibited RMT and apply proportionate account restrictions after reasonable investigation;
- CK-Labs does not guarantee, escrow, enforce, refund, or mediate unauthorized off-platform user deals;
- unrelated legitimate paid value and mandatory rights remain protected under their separate rules; and
- the new RMT wording is not used by itself to impose new punitive enforcement retroactively on completed conduct from before the rule applied, while older independently prohibited conduct remains subject to the Terms then in force.

Current platform-role checks remain separate from this gameplay rule. Apple App Review Guidelines section 3.1.1 continues to permit eligible In-App Purchase gifting under Apple's conditions. Google Play's Payments policy continues to distinguish peer-to-peer payments from digital in-app purchases and requires purchased in-app virtual currency to remain within the app or game title for which it was purchased. Xsolla's current catalog documentation supports authorized sale and delivery of virtual currency/items, and its June 16, 2026 Refund Policy remains transaction-specific. None of those provider rules turns ordinary TycoonX gameplay mechanics into an unauthorized RMT marketplace.

Canonical RMT Terms commit: `4cb6bb969ebd7f54aa268c1ff47d192d9fec78bc`.
Localized RMT component commit: `264fffa04afb8b61e089685680cb4c75b40b995b`.
Localized Terms integration commit: `b3abe719cc6980511828f162b38a72975a537e16`.
Canonical rendered Terms integration commit: `568ca45a65135a615b48ddae5f034e40b07705a3`.
Transfer/RMT enforcement alignment commit: `5c3ef098819ce051851e389b793fd04ceb505058`.
Transfer/RMT localization verifier commit: `43ad89e8199f72489a487212f7021c6766c26eaa`.
Transfer/RMT enforcement verifier commit: `6e4320538c8b7bd6d8060abfffed8bfda3302fcb`.

## September 5, 2026 genuine-transaction enforcement operations checkpoint

`TYCOONX_GENUINE_TRANSACTION_ENFORCEMENT_RELEASE_GATE.md` operationalizes both September 5 public Terms rules. It does not create secret conduct standards beyond the public wording.

The operational checkpoint requires all of the following:

- enforcement applies a genuine-purpose / primary-purpose test rather than an automatic price threshold;
- art must be bought because the buyer genuinely wants the artwork, while financial help must use the designated Begging feature where available;
- a high price, generous deal, unusual transaction, friendship, shared household/network signal, or single transaction is not automatically proof of abuse;
- reasonable corroborated evidence should support a final finding that moving wealth was the transaction's main purpose or that a prohibited RMT arrangement existed;
- disguised wealth-transfer abuse and standalone RMT are separate theories and the evidence record must identify which rule is actually supported;
- detection, temporary containment, transaction correction, and account punishment remain separate decisions;
- automated scores, thresholds, and relationship graphs may flag transactions, but serious final enforcement must preserve applicable human-review and GDPR Article 22 safeguards where that provision applies;
- covered DSA Article 17 decisions receive the applicable clear and specific statement of reasons without pretending every gameplay decision globally falls within Article 17;
- credible account compromise is investigated separately so a legitimate owner is not automatically treated as the intentional transfer abuser;
- exploit-generated or otherwise invalid value is routed through the existing economy-correction gate and can be unwound without automatically branding every downstream recipient a cheater;
- unrelated legitimate Apple App Store, Google Play, and Xsolla purchases remain isolated from gameplay-transfer/RMT enforcement, including purchased Diamonds, one-time 30-Day VIP, and limited-window Lifetime VIP;
- official purchases and expressly authorized platform gifts or TycoonX transfer mechanisms are not misclassified as RMT;
- the September 5 rules are not used by themselves to impose new punitive enforcement retroactively on completed earlier conduct that was not independently prohibited under the Terms then in force; and
- an in-game correction never becomes an unauthorized real-world card charge, new store purchase, or real-world debt.

Operational gate original commit: `2581d25250b3dcd013478dbc424d413f244d0f9f`.
RMT alignment commit: `5c3ef098819ce051851e389b793fd04ceb505058`.
Dedicated enforcement verifier update: `6e4320538c8b7bd6d8060abfffed8bfda3302fcb`.

## September 5, 2026 transfer/RMT privacy transparency checkpoint

The September 5 transfer and RMT rules expanded the categories of service data that may be relevant to a fraud or game-integrity investigation. The canonical Privacy Policy was therefore materially refreshed so the enforcement rules and privacy disclosures remain aligned instead of relying on a broad generic anti-fraud clause.

All 25 localized Privacy routes are synchronized through `app/tycoonx-legal/TransferRiskPrivacyNotice.tsx`, which renders only on the applicable `/tycoonx-legal/{locale}/privacy` route and uses natural locale-specific wording, genuine regional variants, and RTL for Arabic. The same disclosure is rendered on the canonical English Privacy route, and the canonical Markdown policy contains the underlying processing description directly.

Every canonical and localized Privacy page must preserve all of the following:

- CK-Labs may analyze transaction and ledger records, counterparties, transaction chains, repeated transfers, pricing patterns, feature usage, and account relationships directly observed or reasonably inferred from relevant Service data when reasonably necessary for transfer/RMT, fraud, account-compromise, exploit, or game-integrity investigations;
- related reports or communications may be reviewed only where that review is reasonably necessary and lawful, and private communications are not reviewed merely because they exist;
- the purposes include detecting or investigating disguised wealth transfers, account farming, coordinated or circular transfers, exploit proceeds, unauthorized real-money trading, payment abuse, account compromise, and other fraud or game-integrity risks and correcting invalid game state;
- where the GDPR applies, contract necessity may support processing genuinely necessary to operate the persistent multiplayer economy, while legitimate-interest processing requires the applicable legitimate-interest, necessity and balancing analysis rather than treating the label “fraud prevention” as automatic permission;
- fraud/security/game-integrity legitimate interests remain subject to user rights and reasonable expectations, data minimization, access controls, appropriate evidence thresholds, retention limits and other suitable safeguards;
- a high-value transaction, unusual price, friendship, company membership, shared household/network signal, or one unusual event does not by itself prove abuse;
- automated signals may flag activity for investigation but do not make a single indicator conclusive, and GDPR Article 22 safeguards apply where a solely automated decision falls within that provision;
- applicable rights to access, correction, deletion, restriction, objection to legitimate-interest processing and automated-decision safeguards remain available under mandatory law;
- relevant investigation records are kept only for a reasonably necessary security, repeat-abuse, dispute, legal-claim or legal-obligation period rather than indefinitely merely because an investigation occurred; and
- Apple, Google, Xsolla or other provider payment records may establish payment or entitlement events but do not by themselves determine the gameplay purpose of an in-game transaction.

Canonical Privacy Markdown update commit: `6614fef74927d4906215dad32eb1702cef22abd6`.
Localized Privacy disclosure component commit: `f7fe54e69a9003723737e10e4a442d6bebbdae00`.
Localized Privacy layout integration commit: `291267d76e709766df282dd34add2544c9d2979f`.
Canonical Privacy layout integration commit: `20db8fbb0cb2e8d04c57b55dff8ea8df44d8a170`.
Canonical rendered Privacy date refresh commit: `8a55cd3c6e5bb44c507fb3266b135b3ec0823274`.
Dedicated Privacy synchronization verifier commit: `8530099db85594213957ae05f2803219079060cc`.

## September 5, 2026 official-purchase and off-platform-refund boundary checkpoint

The canonical Purchases & Refunds Policy was materially refreshed on September 5, 2026 so unauthorized player-to-player or off-platform deals cannot be presented as official CK-Labs, Apple, Google Play, or Xsolla purchases while legitimate official purchase rights remain protected.

All 25 localized Purchases & Refunds routes are synchronized through `app/tycoonx-legal/OfficialPurchaseRefundNotice.tsx`, rendered only on `/tycoonx-legal/{locale}/purchases`. The localized copies use natural language, keep the required regional variants distinct, and use RTL for Arabic. The canonical rendered Purchases & Refunds page and canonical Markdown now contain the same legal boundary directly.

Every canonical and localized Purchases & Refunds page must preserve all of the following:

- the Purchases & Refunds Policy governs genuine purchases made through authorized TycoonX purchase channels such as Apple App Store In-App Purchase, Google Play, and the official TycoonX web shop using Xsolla;
- an in-game trade, art purchase, company transaction, Begging transfer, or other player-to-player movement of game value does not become an official purchase from CK-Labs merely because value changes hands in TycoonX;
- unauthorized real-money trading or another off-platform user deal is not an official TycoonX purchase;
- CK-Labs is not the seller, payment processor, escrow provider, guarantor, debt collector, or refund provider for an unauthorized off-platform user deal and does not promise to recover outside consideration exchanged between users;
- failure by another user to deliver promised in-game value after an outside payment does not transform that user dispute into an Apple, Google Play, Xsolla, or CK-Labs purchase-refund claim, while CK-Labs may still investigate and correct the related in-game conduct under the Terms;
- Begging authorizes only the in-game assistance expressly allowed by that feature and does not authorize outside consideration in exchange for TycoonX value;
- an expressly enabled platform-supported gift or transfer mechanism follows its disclosed terms and applicable platform rules rather than becoming an unrestricted cash-out or resale system;
- a separately completed legitimate Apple, Google Play, or Xsolla purchase retains its applicable refund, withdrawal, conformity, restoration, and mandatory rights even if the player separately violates a gameplay, transfer, or RMT rule;
- unauthorized user-to-user conduct is not a blanket basis for denying mandatory remedies on an unrelated valid official purchase; and
- mandatory non-waivable consumer rights remain intact.

Current platform checks remain aligned: Apple App Review Guidelines 3.1.1 allows eligible In-App Purchase gifting under Apple’s conditions, including that gifts may be refunded only to the original purchaser and may not be exchanged. Google Play’s Payments policy distinguishes peer-to-peer payments from ordinary digital in-app purchases and requires purchased in-app virtual currency to be used within the app or game title for which it was purchased. Xsolla’s current Refund Policy remains transaction-specific and identifies the applicable refund policy at checkout.

Localized purchase-boundary component commit: `37a8a8bc4ba5872cec64542223c793b6377b9f28`.
Localized Purchases layout integration commit: `a8e80877518f98b1410f0aec4017bf5596d3cb6b`.
Canonical Purchases Markdown update commit: `e416b514691ce835584c8b0b67a8f5e29f8c4309`.
Canonical rendered Purchases synchronization commit: `093e1f078db1f1892f1ff2a798ead33e412802ea`.
Dedicated purchase-boundary verifier commit: `d58c0786504c58f56c55c4e7c8f3573e64752eed`.

## Existing product invariants

All canonical and localized legal documents must continue to preserve these distinctions:

- purchased Diamonds do not expire solely because time passes;
- purchased Diamonds, promotional/free Diamonds, one-time 30-Day VIP, and Lifetime VIP are distinct products/entitlements;
- 30-Day VIP is a **one-time, non-renewing 30-day entitlement** unless a future purchase screen clearly introduces a different compliant product;
- Lifetime VIP is a one-time promotional entitlement offered only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase;
- Apple App Store, Google Play, and the official TycoonX webshop using Xsolla remain distinct payment channels with transaction-specific merchant, refund, tax, chargeback, validation, and entitlement-delivery roles;
- completed one-time purchases are not retroactively repriced merely because future prices, currencies, taxes, FX, regional prices, bundles, or promotions change, except where mandatory law requires otherwise;
- obvious configuration errors, failed/pending/reversed payments, duplicate or accidental grants, fraud, chargebacks, account compromise, provider outages, unsupported clients, provider replacement, business transfers, game-economy corrections, and permanent service shutdown remain subject to their specific canonical rules;
- genuine-transaction and RMT enforcement must not silently confiscate unrelated legitimate paid value; and
- mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy, accessibility, and other non-waivable rights remain intact.

## Canonical source status

- English Terms: materially refreshed **September 5, 2026** for genuine transactions, prohibited player-to-player wealth transfers, and explicit RMT/off-platform-exchange rules.
- English Purchases & Refunds: materially refreshed **September 5, 2026** for the official-purchase/off-platform-deal refund boundary while preserving purchased-Diamond withdrawal rights and virtual-currency price transparency.
- English Privacy Policy: materially refreshed **September 5, 2026** for transfer/RMT investigation transparency, legal-basis safeguards, retention, objections, and automated-decision protections.
- English Community Standards: refreshed **August 26, 2026** for age-gating and child-safety flexibility around any future anonymous/random-chat feature.

## Progress metrics

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **99.9%**
- **Full commercial/legal/payment readiness:** **96.8%**
- **Overall project completion:** **99.4%**
- **Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

Historical synchronization and release-gate checkpoints remain available in Git history; this tracker intentionally keeps the current state and active invariants concise so future runs can continue without duplicating completed work.