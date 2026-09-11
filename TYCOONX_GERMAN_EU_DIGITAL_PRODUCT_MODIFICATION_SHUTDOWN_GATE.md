# TycoonX German/EU Digital Product Modification & Service Discontinuation Gate

Status: implementation/commercial release gate for CK-Labs. TycoonX has been in full release since September 1, 2026.

This document is an operational compliance gate. It does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, mandatory consumer law, or provider/store rules.

## 1. Why this gate exists

TycoonX is a continuously evolving digital game/service. CK-Labs may need to rebalance systems, replace features, migrate infrastructure, require newer app versions, change third-party providers, correct exploit-created value, or eventually discontinue part or all of the service.

Those situations are legally different. They must not be handled by one broad clause saying that CK-Labs may change anything at any time without consequences.

For German consumers, the digital-product rules in BGB §§ 327 et seq. can apply to qualifying consumer contracts. In particular, BGB § 327r regulates certain modifications to digital products supplied continuously over time. Directive (EU) 2019/770 Article 19 provides the corresponding EU framework.

Core rule for implementation: founder protection comes from documenting legitimate change reasons, preserving source-specific purchase records, giving the notices the law requires, and applying mandatory remedies correctly. It must not depend on attempting to waive non-waivable consumer rights.

## 2. Legal sources to verify before release decisions

Primary current references:

- German BGB § 327: scope of the digital-product consumer rules: https://www.gesetze-im-internet.de/bgb/__327.html
- German BGB § 327f: updates, including security updates: https://www.gesetze-im-internet.de/bgb/__327f.html
- German BGB § 327r: changes to digital products: https://www.gesetze-im-internet.de/bgb/__327r.html
- German BGB § 327c: remedies where a digital product is not supplied: https://www.gesetze-im-internet.de/bgb/__327c.html
- German BGB §§ 327m to 327p: termination, price reduction and consequences where applicable: https://www.gesetze-im-internet.de/bgb/
- Directive (EU) 2019/770, especially Article 19: https://eur-lex.europa.eu/eli/dir/2019/770/oj

The applicability and remedy for a specific TycoonX purchase depends on the exact contract, product, duration, change and jurisdiction. Do not mechanically apply this file as if every game change were automatically a § 327r modification.

## 3. Classify the event before changing production

Every material TycoonX change should be classified into one or more of these categories before rollout.

### A. Conformity, maintenance or security update

Examples:

- security patch;
- compatibility update required by Apple or Google;
- server protocol migration necessary to keep TycoonX functional;
- bug fix restoring a feature to the promised state;
- anti-cheat change required to protect legitimate users and the game economy.

BGB § 327f requires updates necessary to maintain conformity during the legally relevant period, including security updates. Required maintenance should not be mislabeled as a discretionary commercial feature cut.

Where an update must be installed by the player, preserve evidence that the player was informed about availability and the consequences of not installing it where those facts are legally relevant.

### B. Discretionary modification beyond what is necessary for conformity

Examples:

- replacing a game system with a materially different system;
- materially reducing or removing functionality that players had continuing access to;
- changing an ongoing VIP feature set;
- materially changing access to a digital service supplied over time.

For qualifying continuously supplied digital products, BGB § 327r requires more than a generic right-to-change sentence. A modification beyond what is needed to maintain conformity is permitted under § 327r(1) only where the contract allows it and contains a valid reason, the modification creates no additional cost for the consumer, and the consumer is informed clearly and comprehensibly.

### C. More-than-minor adverse modification

If a qualifying modification impairs access to or usability of the digital product and the impairment is more than minor, BGB § 327r requires additional advance information on a durable medium within a reasonable period before the modification. The notice must identify the features and timing of the modification and the applicable consumer rights.

Under § 327r(3), a qualifying consumer may terminate free of charge within 30 days. The statutory starting point depends on receipt of the notice and, where the modification occurs later, the time of the modification. Under § 327r(4), that termination right is excluded where the impact is only minor or where the unchanged conforming version remains available without extra cost.

Do not hide a qualifying adverse modification only inside patch notes, a Discord post, an in-game news feed that disappears, or a revised Terms page if the law requires durable-medium advance notice.

### D. Source-specific entitlement/payment correction

This is not automatically a product modification.

Examples:

- reversing Diamonds granted twice because one webhook was processed twice;
- correcting an entitlement that was created by an obvious server/configuration error;
- removing only the value attributable to a refunded or reversed transaction;
- reversing exploit-created value after investigation;
- correcting a gift that was attached to the wrong recipient because of a proven fulfillment error.

These actions require source-specific records, proportional correction and mandatory-rights review. They must not be disguised as a general economy rebalance, and they must not wipe unrelated legitimate value.

### E. Economy/content balancing

Examples:

- changing production speed;
- changing NPC market parameters;
- changing job rewards;
- adding, removing or replacing game content;
- changing free reward cadence;
- changing future Diamond bundle contents or future VIP offers.

Normal balancing is not automatically prohibited. The legal risk increases when the change materially alters the continuing access or utility of a paid digital product or contradicts a concrete purchase representation.

Every material balance change affecting paid value should therefore answer:

1. What exactly was promised at purchase?
2. Is the affected element itself the purchased digital product, an ancillary gameplay parameter, or a free/live-service feature?
3. Is the change required for conformity/security, or discretionary?
4. Is any negative impact more than minor?
5. Is advance durable-medium notice required?
6. Are mandatory termination, price-reduction, reimbursement or other remedies potentially triggered?

### F. Provider/infrastructure/authentication replacement

Examples:

- replacing Xsolla or another webshop/payment component;
- changing authentication provider;
- migrating backend infrastructure;
- replacing analytics, anti-fraud, messaging or hosting providers;
- Apple/Google rule or API migration.

Provider replacement must not silently erase valid entitlements. Migration plans must preserve authoritative purchase provenance and allow restoration/reconciliation of valid Diamonds, one-time 30-Day VIP and Lifetime VIP where technically and legally required.

### G. Old/unsupported application versions

CK-Labs may need to require a newer version for genuine security, compatibility, legal, provider or protocol reasons.

Before blocking an old version:

- document the reason;
- provide a reasonably accessible update path where possible;
- verify the update is available in the relevant store/region before forcing it where practicable;
- account for provider/store outages;
- preserve mandatory update and conformity rights;
- do not use an unsupported-version label merely to avoid a continuing contractual obligation.

### H. Permanent service discontinuation

A permanent shutdown is not automatically just another § 327r feature modification. It requires a separate legal and commercial review of the affected contracts, remaining supply obligations, remedies, notices, refunds/reimbursements where required, privacy/data closure and provider wind-down.

TycoonX Terms may state that the service is not promised to operate forever, but that statement must not be used to waive mandatory consumer remedies.

## 4. Valid reasons for discretionary changes

Where BGB § 327r or equivalent law requires the contract to contain a valid reason for a qualifying change, reasons should be concrete enough to be meaningful rather than circular.

Potential legitimate reasons, depending on the actual facts, include:

- security and abuse prevention;
- anti-cheat and exploit containment;
- legal or regulatory requirements;
- Apple, Google Play, Xsolla or other provider rule/API changes;
- technical compatibility, performance, reliability or scalability;
- replacement or discontinuation of a third-party dependency;
- maintaining game balance, economic integrity or fair competition;
- preventing fraud or manipulation;
- correcting design defects or unintended interactions;
- introducing, replacing, consolidating or retiring features to maintain or improve the service;
- accessibility, safety or privacy improvements.

Do not manufacture a reason after the decision. Keep a dated internal record of the real reason and evidence supporting it.

## 5. TycoonX product-specific rules

### 5.1 Diamonds

Diamonds are TycoonX virtual currency, not cash, a bank balance or an investment.

For purchased Diamonds:

- do not make purchased Diamonds expire merely because time passed where store/platform rules prohibit that;
- preserve source/channel/transaction provenance;
- correct only the value attributable to the affected transaction where technically possible and legally appropriate;
- a refund or reversal for one Apple, Google Play or Xsolla transaction must not delete unrelated purchased Diamonds from another transaction or provider;
- earned, promotional or complimentary Diamonds should remain distinguishable from purchased Diamonds where this is necessary for correct reconciliation;
- if refunded Diamonds have already been spent, use a documented and proportionate source-specific reconciliation rule rather than blindly wiping unrelated value.

A global economy rebalance and a transaction correction are different events and must be logged differently.

### 5.2 One-time 30-Day VIP

Current 30-Day VIP is a one-time, non-renewing entitlement for 30 days. It must not be described as an auto-renewing subscription.

For stacked or multiple sources:

- keep each source identifiable;
- reversing one 30-Day VIP purchase must remove only the attributable period/value and must not destroy another valid VIP source;
- do not derive refund/reversal logic only from a shared aggregate `vip` flag or aggregate expiry date;
- if a material feature change affects active 30-Day VIP access, assess whether the change is minor, whether advance durable-medium notice is required, and what mandatory remedy applies.

### 5.3 Lifetime VIP

Lifetime VIP is a limited-time promotional one-time offering available only during selected genuine sale windows. CK-Labs may withdraw it from future sale, and it may never return. A past sale does not create an expectation that Lifetime VIP will always remain purchasable.

Different genuine sale windows may use different lawful future prices. A later lower price does not automatically create a refund, credit or price-match right, and a later higher price cannot create an extra charge on a completed one-time purchase, except where mandatory law requires otherwise.

Lifetime VIP does not mean that TycoonX, CK-Labs, a specific feature, Apple, Google Play, Xsolla or any infrastructure provider is promised to operate forever. However, that limitation does not permit CK-Labs to ignore mandatory rights that may arise from a material modification, lack of conformity or permanent discontinuation.

If CK-Labs plans a material reduction of Lifetime VIP benefits or a permanent shutdown:

- stop treating the generic 'lifetime' label as the entire legal analysis;
- identify the exact purchase representation and applicable jurisdiction;
- identify whether the affected supply is ongoing/continuous;
- assess advance notice and durable-medium requirements;
- assess statutory termination, reimbursement, price-reduction or other remedies;
- preserve evidence of the notice and remedy offered.

## 6. Future pricing and catalog changes

CK-Labs may change future prices, Diamond bundle prices/content, 30-Day VIP prices, Lifetime VIP sale-window prices, regional prices, currencies and future promotions, subject to law and provider rules.

Operational rules:

- prices may differ by platform, country and payment channel for legitimate reasons;
- Apple, Google Play, Xsolla, taxes, VAT and FX can cause local-price differences;
- the final total price shown before the consumer confirms a completed transaction governs that transaction, subject to mandatory law and lawful correction of obvious errors;
- completed purchases are not retroactively repriced merely because a later offer differs;
- a later price decrease does not automatically create a refund, credit or price-match entitlement;
- a later price increase does not create an additional charge on an already completed one-time purchase;
- Lifetime VIP may have different prices in different genuine sales windows;
- countdowns, crossed-out prices, reference prices and discount claims must be genuine and not misleading;
- mandatory taxes/fees and total consumer prices must be displayed as required;
- if CK-Labs ever introduces a recurring paid product, it requires its own compliant recurring billing, cancellation, notice and price-change flow.

Do not use a prospective catalog-price rule as authority to reduce an already-purchased entitlement retroactively.

## 7. Platform and payment-provider boundaries

### Apple App Store

Apple may control purchase confirmation, storefront price presentation, taxes, refunds and certain transaction-state information for App Store purchases. CK-Labs remains responsible for accurately mapping authoritative Apple transaction state to TycoonX entitlements and for its own representations about TycoonX.

### Google Play

Google may control Play checkout, eligible billing routes, local price presentation, taxes, refunds and transaction-state information. CK-Labs remains responsible for correct server-side validation, product mapping, fulfillment and any CK-Labs-controlled product-change notice.

### Xsolla / CK-Labs webshop

Xsolla may control parts of checkout, payment processing, tax/FX presentation, fraud screening and refunds. CK-Labs remains responsible for TycoonX product descriptions, its own legal notices, and correct entitlement delivery/reconciliation from authoritative payment events.

Provider outage, webhook failure, store delay or provider replacement is not a reason to guess entitlement state. Use authoritative records and an auditable reconciliation path.

## 8. Security emergencies and exploit containment

A security emergency can justify rapid action, including temporarily disabling a vulnerable function, requiring an update, freezing a suspicious fulfillment route or correcting exploit-created value.

Emergency action should still be scoped:

- identify the affected feature and risk;
- use the least destructive reasonable measure;
- preserve logs and transaction provenance;
- avoid deleting unrelated valid paid value;
- communicate material consumer impact when legally required;
- restore conforming functionality when reasonably possible;
- assess mandatory remedies if the emergency response creates a continuing material impairment.

A player reporting a vulnerability in good faith must not automatically be treated as an exploiter. Fraud/exploit findings should be based on evidence.

## 9. Force majeure and third-party outages

TycoonX may depend on hosting, networks, Apple, Google, Xsolla, authentication, cloud and other third parties. Outages and events outside CK-Labs' reasonable control can affect service availability.

Do not convert a force-majeure clause into a blanket exclusion of all mandatory remedies. Record:

- provider/event;
- start/end time;
- affected regions and functionality;
- whether purchases or entitlement delivery were affected;
- pending/reversed payment states;
- mitigation taken;
- consumer communication;
- whether any mandatory remedy or correction is required.

## 10. Business sale, merger, reorganization or successor operator

A lawful business sale, merger, reorganization or successor operation may require transfer or migration of service operations and relevant contracts/data subject to applicable law.

The migration plan should address:

- continuing validity/restoration of purchased entitlements;
- transaction provenance;
- privacy information and controller changes;
- provider-account migrations;
- support responsibility;
- refunds/reversals in flight;
- mandatory notice/consent requirements where applicable.

Do not describe a corporate transaction as automatically extinguishing consumer rights.

## 11. Permanent service discontinuation release gate

Before any planned permanent TycoonX shutdown, CK-Labs should complete and retain a shutdown decision record covering at least:

1. reason and planned shutdown date;
2. jurisdictions and player cohorts affected;
3. whether new sales must be stopped before shutdown and when;
4. active one-time 30-Day VIP entitlements extending beyond shutdown;
5. Lifetime VIP purchases and exact purchase representations;
6. unspent purchased Diamonds and provider/store rules;
7. pending, failed, refunded, reversed and charged-back transactions;
8. transaction-specific refund/remedy assessment by channel and jurisdiction;
9. mandatory consumer-law notice and remedy assessment;
10. durable-medium notice where required;
11. Apple/Google/Xsolla catalog deactivation sequence;
12. data export/retrieval rights where applicable;
13. privacy retention/deletion and controller closure plan;
14. support window and dispute handling;
15. provider/webhook shutdown sequence that avoids losing late refund/reversal events;
16. final entitlement and financial reconciliation;
17. evidence archive sufficient to handle later disputes.

Do not keep selling a product immediately before a known shutdown without reviewing whether the sales presentation, remaining utility and required disclosure/remedy are lawful.

Do not publish 'no refunds under any circumstances.' Mandatory rights remain intact.

## 12. Change notice evidence

For each material change requiring notice, retain at least:

- internal change ID/version;
- decision date;
- legal/business/technical reason;
- affected feature/product;
- affected purchase cohorts;
- jurisdictions;
- whether the change is necessary for conformity/security or discretionary;
- assessment of negative impact and whether it is more than minor;
- date/time of planned rollout;
- notice text and locale;
- notice channel;
- durable-medium evidence where required;
- time sent/delivered;
- support and remedy route;
- whether unchanged conforming access can be maintained;
- rollout/rollback result.

A live-service news item can supplement, but should not replace, a legally required durable-medium notice.

## 13. Minimum QA / tabletop scenarios

Before marking this gate complete, test or tabletop at least these cases:

1. Cosmetic UI rearrangement with no access/usability impairment.
2. Mandatory security update requiring a newer app version.
3. Store delay means the forced-update version is unavailable in one country.
4. Performance fix that restores promised functionality.
5. Material removal of a feature actively used as part of an ongoing paid VIP benefit.
6. Replacement feature with substantially equivalent access and utility.
7. More-than-minor adverse modification with durable-medium notice and 30-day statutory termination flow where § 327r applies.
8. Unchanged conforming version remains available without extra cost.
9. Diamond economy rebalance that does not alter purchased Diamond quantity.
10. Proposed economy change that could materially impair the utility represented at purchase.
11. Duplicate Diamond grant correction tied to one transaction.
12. Xsolla refund after those specific Diamonds were partially spent.
13. Apple refund must not remove separate Google Play Diamonds.
14. One 30-Day VIP reversal while another valid 30-Day VIP source remains.
15. 30-Day VIP material feature change during the active 30-day period.
16. Lifetime VIP feature replacement.
17. Lifetime VIP withdrawn from future sale while existing valid holders retain the entitlement subject to lawful service changes.
18. Xsolla replacement/migration with existing entitlements preserved.
19. Authentication-provider replacement.
20. Third-party outage prevents entitlement delivery while payment is pending.
21. Compromised account with valid purchases still attributable to the real account owner.
22. Exploit-created value corrected without wiping unrelated purchases.
23. Old client blocked for a documented security reason.
24. Permanent shutdown with active 30-Day VIP extending beyond shutdown.
25. Permanent shutdown affecting Lifetime VIP holders.
26. Permanent shutdown with unspent purchased Diamonds.
27. Sale/merger to successor operator preserving purchase provenance.
28. Notice delivery fails for one consumer and is retried/audited.
29. Refund/reversal arrives after provider migration.
30. Support can distinguish modification remedy, ordinary refund, withdrawal, conformity claim, chargeback and fraud investigation.

## 14. Release-blocking conditions

Treat this gate as not complete if any of the following is true:

- a material paid-feature change is launched without classifying whether mandatory digital-product modification rules apply;
- a more-than-minor qualifying adverse change is made without the required advance durable-medium information;
- the product-change logic relies on a clause purporting to waive non-waivable consumer rights;
- refund/reversal corrections cannot identify the source transaction;
- one reversed transaction can erase unrelated valid Diamonds or VIP;
- provider migration can lose valid entitlements or late refund/reversal state;
- an old app version is blocked with no documented security/compatibility/legal reason and no reasonable update path where one should exist;
- Lifetime VIP is described as guaranteeing that TycoonX will operate forever;
- a planned shutdown has no purchase-cohort, provider, remedy, privacy and notice plan;
- CK-Labs continues new sales into a known shutdown window without reviewing whether the presentation and remaining utility are lawful;
- support cannot identify which remedy path applies to a player's complaint.

## 15. Founder-protective implementation principle

The safest long-term position is not 'CK-Labs can change or remove anything.' It is:

- TycoonX is a live digital service that may legitimately evolve;
- the Terms identify lawful, concrete reasons for qualifying future changes;
- CK-Labs may change future prices, catalog and promotions prospectively;
- CK-Labs can correct fraud, exploit, duplicate grants and reversed transactions using authoritative source-specific records;
- security, provider and compatibility changes can be made when genuinely necessary;
- valid unrelated purchases are preserved;
- affected users receive legally required information and remedies;
- mandatory German/EU consumer rights are never purportedly waived;
- any eventual permanent shutdown is handled as a controlled legal, payment, entitlement, privacy and support project rather than an instant switch-off.

Only mark this gate complete after the actual production change-management, notice, entitlement-reconciliation and shutdown procedures can demonstrate those controls.