# TycoonX Game Economy Reset & Correction Release Gate

**Release QA reference. Last reviewed: September 1, 2026.**

This gate turns the existing TycoonX Terms, Purchases & Refunds Policy, virtual-currency safeguards, and digital-product rules into an operational process for economy rebalancing, exploit corrections, rollbacks, migrations, broad resets, and payment-linked state corrections.

It is intentionally founder-protective: CK-Labs must be able to correct invalid state, stop exploits, reverse duplicated value, and rebalance a multiplayer economy without promising a fixed exchange rate, yield, market value, production speed, reward rate, ranking, company valuation, or permanent gameplay advantage. At the same time, those powers must not be used as a shortcut to confiscate unrelated legitimate paid value or to avoid mandatory consumer remedies.

The canonical English TycoonX Terms and Purchases & Refunds Policy remain the player-facing legal source. This gate does not materially change their current public meaning. If a future implementation decision changes that meaning, reopen only the affected localized document type and resynchronize all 25 locales in the required order.

## 1. Classify the action before changing state

Do not use `economy reset` as one generic label. Every production action must be classified before destructive state changes begin.

Use one of these categories:

1. **Prospective balancing change** - future production speeds, formulas, taxes, rewards, market parameters, NPC behavior, progression, probabilities, limits, fees, or other mechanics are changed for legitimate game-economy reasons.
2. **Targeted invalid-state correction** - a known exploit, duplication, impossible calculation, payment reversal, invalid receipt, race condition, replayed webhook, corrupted record, or unauthorized tool created identifiable invalid value.
3. **Downstream tainted-state unwind** - invalid value moved through transfers, trades, companies, markets, gifts, or other users and a narrow downstream correction is needed.
4. **Technical rollback or disaster recovery** - a database or application incident requires restoration from a known-good snapshot or reconstruction from authoritative logs.
5. **Broad economy reset or migration** - a large population, server, economy version, or account set is reset, migrated, or recalculated in a way that can affect legitimate state.
6. **Consumer-remedy correction** - a refund, statutory withdrawal, price reduction, contract termination, provider reversal, or conformity remedy requires a transaction-specific entitlement or balance adjustment.

The category controls the evidence, notice, remedy, and paid-value checks that follow. A prospective balance change is not proof that existing holdings were invalid. A payment refund is not proof that a player exploited the game. A security incident is not automatically a broad-reset justification.

## 2. Separate game value from payment provenance

The economy ledger must preserve enough provenance to distinguish, where technically relevant and reasonably possible:

- purchased Diamonds, including payment channel, provider transaction reference, product/SKU, quantity, transaction time, currency, and transaction state;
- free, event, compensation, tester, review, promotional, or goodwill Diamonds;
- gameplay-earned Diamonds and other gameplay rewards;
- value received through legitimate transfers or market transactions;
- exploit-generated, duplicated, replayed, corrupted, or otherwise invalid value;
- value tied to a refunded, reversed, charged-back, cancelled, or invalid payment;
- active one-time 30-Day VIP, including the original authoritative start and expiry;
- valid Lifetime VIP, including the purchase/provider provenance or separately classified free/promotional grant; and
- any correction already applied so the same incident cannot be reversed twice.

Perfect unit-by-unit tracing is not required where the architecture does not support it. A transaction-lot, append-only finance ledger, reliable audit trail, or other reconstruction method can be sufficient. What is not acceptable is a destructive correction that cannot distinguish known purchased value from known invalid value merely because both appear in one current balance.

If provenance is temporarily uncertain, prefer freezing the affected economy function and reconciling the evidence over deleting value first and investigating later, unless an immediate narrow correction is reasonably necessary to stop ongoing harm.

## 3. Authoritative records and conflict resolution

For destructive economy corrections, evidence should be ranked by reliability. Depending on the incident, useful authoritative sources can include:

- CK-Labs server-side finance and entitlement records;
- signed or verified Apple transaction and refund/revocation records;
- verified Google Play purchase-token, order, refund, and voided-purchase records;
- verified Xsolla payment, order, refund, reversal, and chargeback records;
- immutable or append-only audit events;
- known-good snapshots and backups;
- server-side marketplace, transfer, company, union, shop, or production logs; and
- reproducible calculation inputs and formula versions.

A stale client display, screenshot, local cache, unsupported app version, or manipulated client must not override stronger verified server/provider evidence. Conversely, an authoritative payment record proves a transaction state, not that every downstream in-game calculation was correct.

Users must have a practical support route to challenge a correction that used the wrong account, wrong transaction, wrong quantity, or incomplete evidence.

## 4. Prospective balancing is not retroactive invalidation

TycoonX is a multiplayer business simulation. CK-Labs may prospectively rebalance production speeds, input/output ratios, rewards, prices, taxes, fees, limits, NPC behavior, energy costs, probabilities, market parameters, company rules, progression, or other gameplay systems for valid reasons such as economy health, inflation control, fairness, technical stability, security, abuse prevention, or game evolution.

Such a balancing change does **not** by itself mean that previously legitimate gameplay was an exploit or that previously valid purchased Diamonds became invalid.

TycoonX does not promise that:

- a Diamond will keep a fixed in-game purchasing power;
- a production building will keep one production speed forever;
- a company, house, share, product, or other fictional asset will keep one market value;
- a reward, tax, fee, yield, ranking, or probability will never change; or
- a player will retain a particular relative competitive advantage after a lawful balancing change.

This founder protection is subject to mandatory digital-product law and to specific paid promises actually made at purchase. A broad Terms clause cannot convert a materially impaired ongoing paid entitlement into a risk-free change merely by calling it `balance`.

## 5. Apply BGB § 327r when a balance change materially changes an ongoing paid digital product

Where German BGB § 327r applies to a continuously supplied digital product, a change beyond what is necessary to maintain conformity requires, among other things:

- a contractual basis containing a valid reason;
- no additional cost to the consumer; and
- clear and comprehensible information about the change.

If access or usability is impaired by more than an insignificant amount, the additional durable-medium notice and 30-day no-cost termination rules in § 327r must be assessed, subject to the unchanged-conforming-version exception.

Examples that require this assessment can include:

- materially removing or degrading a promised VIP function in the name of economy balance;
- making a paid ongoing automation or convenience benefit substantially unusable;
- a broad reset that materially changes access to a paid ongoing entitlement; or
- replacing a purchased ongoing function with one that is substantially less useful.

Ordinary changes to the surrounding fictional economy are not automatically the same as a defect or material paid-entitlement modification. Record why the change is or is not inside the covered paid product.

## 6. Conformity and remedies stay available where applicable

Where a digital product is defective or no longer conforms, do not route the issue only through an `economy reset` workflow.

Where German digital-product law applies, preserve the applicable remedies, including:

- cure under **BGB § 327l**;
- contract termination under **BGB § 327m** where its conditions are met;
- price reduction under **BGB § 327n**; and
- repayment consequences under **BGB § 327o**.

For continuously supplied digital products, § 327n can require a proportionate reduction for the period of non-conformity, and covered overpayments must be returned within the statutory timeframe. Do not replace a legally required monetary remedy with arbitrary in-game Diamonds unless the consumer validly agrees and the law permits it.

A voluntary Diamond credit or VIP extension can still be offered as goodwill, but it must be recorded as goodwill rather than falsely marked as the statutory remedy.

## 7. Targeted exploit correction should restore integrity, not create a windfall

When reliable evidence identifies invalid state, the preferred correction is the narrowest method that restores integrity without deleting unrelated legitimate value.

Use this order of preference where technically possible:

1. restore the exact known-good pre-incident state for the affected transaction or asset;
2. reverse the exact invalid transaction or duplicated grant;
3. remove the proven invalid net value from the affected account or downstream path; or
4. use a documented approximation only where exact reconstruction is impossible and the method is reasonable, consistent, and reviewable.

Example: an account has 10,000 exploit-generated Diamonds plus 500 verified purchased and unused Diamonds. The correction should isolate the invalid 10,000 rather than wiping all 10,500 merely because the values are commingled in the current client balance.

Do not use an exploit incident as a reason to replay historical purchases, grant extra entitlement time, or erase unrelated legitimate Apple, Google Play, or Xsolla purchases.

## 8. Correction and punishment are separate decisions

Invalid state may need correction even if CK-Labs cannot prove that the current holder intentionally caused the bug. Account discipline requires its own evidence and proportionality review.

Examples:

- a player deliberately repeats a duplication exploit after warnings: correction plus account enforcement may both be justified;
- a player receives invalid value through a market trade without knowing its source: the invalid state may still require a narrow correction, but the receipt alone is not proof of intentional cheating;
- a compromised account is used to exploit a bug: immediate containment and state correction may be needed, while responsibility of the legitimate owner remains a separate account-compromise assessment.

Do not label every recipient of tainted value a fraudster merely because an unwind reaches their account.

## 9. Downstream transfers and market trades need transaction-graph review

Before reversing value that moved through the economy, reconstruct as much of the affected path as reasonably possible:

- source transaction or exploit event;
- transfers, gifts, trades, auctions, shop sales, company payments, union activity, or other downstream movements;
- whether a downstream user gave identifiable legitimate in-game consideration;
- whether the asset/value still exists or has been consumed/transformed;
- whether the same invalid value has already been corrected elsewhere; and
- whether a broad unwind would create more inconsistency than a narrow source correction.

There is no automatic promise that every downstream in-game trade involving invalid state will be preserved. Equally, CK-Labs should not reverse unrelated transactions simply because they happened near the same time.

If a downstream correction materially affects verified purchased value, stop and run the paid-value/remedy review before finalizing the correction.

## 10. Do not turn an in-game correction into an unauthorized real-money debt

An economy correction is not permission to charge the user's card, create a new Apple/Google/Xsolla purchase, or silently debit a future real-money transaction.

If invalid value was already consumed, CK-Labs may use a proportionate in-game correction where the Terms and applicable law permit it and the amount can be tied to the identified invalid state. Any negative in-game balance or temporary economy restriction must be documented and must not be presented as a real-world debt unless a separate lawful real-world claim actually exists.

Do not use an invented negative Diamond balance as punishment for exercising a statutory withdrawal right, filing a good-faith payment dispute, or reporting account compromise.

## 11. Refunds, withdrawal, chargebacks, and provider reversals are transaction-specific

A payment event must not be conflated with a generic economy exploit.

For each refund, reversal, chargeback, cancellation, statutory withdrawal, or invalidated purchase:

- identify the exact provider transaction;
- identify the exact paid product and quantity;
- determine what corresponding TycoonX value was actually delivered and what remains;
- apply the provider and mandatory-law consequences to that transaction; and
- preserve unrelated legitimate purchases.

Purchased Diamonds that remain subject to an applicable statutory withdrawal right retain that treatment under the canonical Terms and Purchases Policy. If purchased Diamonds were already spent, transferred, or exchanged, mandatory law and the actual transaction history determine the consequences rather than a blanket exploit label.

A genuine chargeback can arise from account compromise, duplicate billing, provider error, misunderstanding, or deliberate abuse. Payment-risk enforcement therefore remains separate from the mathematical balance correction.

## 12. Rollbacks must reconcile payments that happened across the snapshot boundary

A database or server rollback creates a high risk of losing valid purchases or granting them twice.

Before restoring a snapshot, preserve or be able to re-query the authoritative transaction stream for the affected interval. After restoration, reconcile at least:

- Apple transactions and later refund/revocation state;
- Google Play purchase tokens, pending-to-purchased transitions, refunds, and voided purchases;
- Xsolla successful payments, order state, refunds, reversals, chargebacks, and retried webhooks;
- CK-Labs entitlement records; and
- in-flight support or manual corrections.

A payment completed after the snapshot time but before the outage must not disappear merely because the database was restored to an earlier point. A webhook or store notification replayed after recovery must not grant the same purchase twice.

Every rollback runbook should define an idempotency key or equivalent transaction identity for each purchase channel.

## 13. Protect 30-Day VIP clocks during economy resets and recovery

A balance reset, economy migration, or rollback must not silently restart, extend, shorten, or erase a valid one-time 30-Day VIP.

Preserve:

- the original valid transaction;
- authoritative activation/start time;
- original expiry time;
- any separately recorded voluntary compensation extension; and
- refund/reversal status.

If a snapshot predates a valid purchase, post-restore reconciliation must restore only the remaining legitimate period, not issue a fresh 30 days.

If the original VIP expired before recovery completes, do not revive it as a new purchase merely because a stale snapshot showed it active. Mandatory outage/conformity remedies are assessed separately.

## 14. Protect Lifetime VIP during resets, migrations, and recovery

A balance reset or server migration must not create a hidden expiry for a valid Lifetime VIP, convert it to 30-Day VIP, remove it because the new database lacks the old flag, or duplicate it because the entitlement is replayed from multiple providers.

Reconstruct Lifetime VIP from authoritative entitlement and provider records where necessary. One valid purchase should result in one valid Lifetime VIP entitlement.

If the underlying Lifetime VIP transaction was actually refunded, reversed, invalid, or fraudulently obtained, correct that specific entitlement through the payment/entitlement workflow rather than a generic economy reset.

## 15. Promotional and free value can have different correction rules

Free, event, goodwill, compensation, tester, review, or promotional value may have different clearly disclosed conditions where lawful. CK-Labs can generally correct accidental or duplicated free grants more flexibly than purchased value, subject to the actual promise and applicable law.

However:

- a free grant must not overwrite, shorten, or reclassify a purchased entitlement;
- a later correction of promotional Diamonds must not automatically delete purchased Diamonds;
- a tester or review grant must not imply that the live TycoonX service is a beta; and
- a goodwill credit must not be rewritten as proof that the user waived a statutory remedy.

## 16. Broad resets require a written paid-value impact assessment

Before a broad reset, server reset, migration, mass recalculation, or rollback that can affect legitimate paid value, prepare a dated impact assessment covering at least:

- purchased and unused Diamonds;
- purchased Diamonds already spent or transferred;
- free/promotional/gameplay-earned Diamonds;
- active 30-Day VIP and remaining paid time;
- valid Lifetime VIP;
- other paid digital items or benefits directly linked to a transaction;
- exploit-generated, duplicated, corrupted, or invalid state;
- refunded/reversed/chargeback-affected transactions;
- Apple, Google Play, and Xsolla transactions crossing the reset window;
- user-created content or other non-economy data that could be unintentionally lost;
- consumer notice, cure, price-reduction, termination, or refund consequences where applicable; and
- post-reset support and appeal/review capacity.

A broad reset must have a clearly defined scope and cutoff time. Avoid `reset everything and see who complains` as an operational strategy.

## 17. Preserve historical formulas and before/after evidence

For any material mass recalculation, preserve enough evidence to reproduce the result later. At minimum record:

- incident/change ID;
- reason and action classification;
- affected environment, server, country, product, or account population;
- old formula/configuration version;
- new formula/configuration version;
- cutoff timestamp;
- pre-change snapshot or reproducible aggregate/ledger state;
- correction query/algorithm version or script hash where applicable;
- affected transaction/provider references;
- before/after values for sampled and disputed accounts;
- reviewer/approver and deployment timestamp; and
- consumer notice/remedy analysis.

Do not store more personal data than necessary for the evidence purpose. Existing GDPR retention and security gates continue to apply.

## 18. Economy changes must not become misleading commercial claims

If CK-Labs knows a material economy change will significantly affect the practical use of a paid product, purchase marketing should not continue using a materially outdated representation through the change window.

Examples:

- do not sell VIP using a specific production-speed claim that CK-Labs has already decided will be removed immediately after purchase without appropriate disclosure;
- do not advertise a Diamond item as providing a fixed permanent advantage if the advantage is known to be temporary;
- do not use a fake `before reset` countdown or false scarcity claim to pressure purchases; and
- do not imply that a reset will multiply, preserve, or refund value unless that result is actually supported.

The CPC Network's 2025 Key Principles on In-Game Virtual Currencies are an enforcement-position and best-practice reference rather than a standalone new statute. They nevertheless reinforce existing EU consumer-law expectations around transparent pricing, avoiding hidden or forced virtual-currency costs, withdrawal rights, and consumer vulnerability, especially children.

## 19. Security emergencies may justify a temporary economy freeze

During an active exploit, cyberattack, payment incident, or serious data-integrity event, CK-Labs may temporarily disable purchases, transfers, markets, withdrawals of in-game functions, company payments, or other economy features where reasonably necessary to contain harm.

Record:

- what was frozen;
- start time;
- reason;
- affected users/platforms;
- review point;
- whether paid 30-Day VIP time continued running;
- whether purchases were still accepted; and
- how transactions received during the freeze will be reconciled.

A freeze is containment, not proof of player wrongdoing and not an automatic waiver of consumer remedies.

## 20. Old clients and stale displays must not rewrite authoritative state

Unsupported or stale app versions may calculate or display old production rates, taxes, prices, balances, or entitlement labels incorrectly after an economy migration.

Where reliable server/provider records conflict with the stale client, CK-Labs may use the authoritative records to correct display/state. But a server-side correction must still be accurate and challengeable. `The server says so` is not a substitute for fixing a server-side error.

If an update is required for conformity, the existing BGB § 327f update safeguards remain applicable where German digital-product law applies.

## 21. Business transfers and provider migrations must carry provenance forward

If TycoonX is sold, merged, reorganized, or transferred to a successor operator, or if CK-Labs changes payment, database, hosting, authentication, or finance infrastructure, the migration plan should preserve enough provenance to distinguish:

- purchased versus free/promotional value;
- valid versus refunded/reversed transactions;
- active 30-Day VIP clocks;
- valid Lifetime VIP;
- prior correction history; and
- open disputes or mandatory remedy cases.

If the successor or new system cannot reliably distinguish these states, pause destructive mass corrections until a lawful reconciliation method exists. A migration is not a reason to reset all users to zero merely because the new schema is simpler.

## 22. Permanent shutdown is separate from an economy reset

Do not use an `economy reset` label to zero paid-value records early when CK-Labs has actually decided to permanently discontinue TycoonX.

The permanent-shutdown gate controls that scenario and requires product-by-product treatment of purchased Diamonds, remaining 30-Day VIP time, Lifetime VIP, refunds/remedies, purchase cutoff, data/export, and post-shutdown support.

Historical payment and entitlement evidence needed for legal, tax, fraud, refund, chargeback, withdrawal, conformity, or dispute purposes must remain available for the applicable retention period even if live game balances are no longer usable after lawful shutdown.

## 23. Release evidence scenarios

Production parity is not complete until the following scenarios can be reconstructed and corrected without collateral paid-value loss:

| Scenario | Required result |
| --- | --- |
| Prospective production-speed rebalance | Future formula changes without reclassifying prior legitimate production as exploit value; paid-product impact assessed separately |
| 10,000 exploit Diamonds plus 500 verified purchased Diamonds | Remove/reverse the proven invalid 10,000 while preserving the verified purchased 500 unless a separate transaction-specific event affects them |
| One valid 500-Diamond provider transaction delivered twice | Consolidate the duplicate technical grant without changing the underlying valid purchase |
| Invalid Diamonds traded to another account | Reconstruct the transfer path, correct only what can reasonably be tied to invalid state, and separate recipient fault from state correction |
| Refunded 500-Diamond purchase already spent | Apply transaction-specific provider/legal correction; do not label the refund itself an exploit or remove unrelated valid purchases |
| Good-faith chargeback after account compromise | Contain payment risk and reconcile the transaction without automatically treating the legitimate owner as an intentional exploiter |
| Database rollback crosses a valid Apple/Google/Xsolla purchase | Reconcile provider transaction after restore exactly once, even if the restored snapshot predates the purchase |
| Snapshot restores stale 30-Day VIP state | Recover the original clock and only the legitimate remaining period, not a fresh 30 days |
| Lifetime VIP missing after server migration | Restore one valid Lifetime VIP from authoritative provenance without duplicate grant or hidden expiry |
| Promotional Diamond event accidentally grants twice | Correct the duplicated free grant without touching separately purchased Diamonds |
| Material paid VIP feature weakened for economy reasons | Run § 327r/conformity assessment, notice/remedy path where applicable, rather than relying only on the word `balance` |
| Broad reset affects mixed purchased and gameplay value | Produce a dated paid-value impact assessment, snapshot/reconciliation evidence, and post-reset review path |
| Old client shows pre-rebalance formula | Server-side state controls if accurate, supported update path exists, and entitlement/payment evidence remains unchanged |
| Permanent closure is planned | Use the dedicated shutdown process, not a reset script, and preserve transaction/remedy evidence |

## 24. Minimum production sign-off

Before executing a destructive mass correction, rollback, or reset, the operator should be able to answer **yes** to all applicable items:

- [ ] Is the action classified as balance, invalid-state correction, downstream unwind, disaster recovery, broad reset/migration, or consumer-remedy correction?
- [ ] Is there a dated incident/change ID and cutoff timestamp?
- [ ] Can purchased Diamonds be distinguished from known promotional/gameplay/invalid value sufficiently for this correction?
- [ ] Are 30-Day VIP start/expiry records isolated from economy balances?
- [ ] Is Lifetime VIP provenance isolated from economy balances?
- [ ] Are Apple, Google Play, and Xsolla transactions crossing the affected window reconcilable?
- [ ] Is the correction idempotent so retries cannot remove or grant value twice?
- [ ] Has downstream tainted-state movement been assessed where relevant?
- [ ] Is account punishment separated from mathematical state correction?
- [ ] Is any negative in-game balance tied to identified invalid state rather than used as a punitive real-world debt?
- [ ] Has the BGB § 327r/conformity/remedy impact been assessed for ongoing paid products where applicable?
- [ ] Are unrelated legitimate purchases explicitly protected?
- [ ] Is there a support/review path for a demonstrably incorrect correction?
- [ ] Are old/new formula and snapshot/reconstruction evidence retained where needed?
- [ ] Does the change avoid misleading pricing, countdown, or paid-feature claims?

## 25. Brand, release, and localization invariants

- Player-facing and legal prose must display **TycoonX** exactly.
- Technical routes or filenames containing `tyconx` may remain where changing them could break URLs or integrations.
- TycoonX is in full release from **September 1, 2026**.
- Do not describe the live game, current purchases, current VIP, Diamonds, users, rewards, or legal terms as beta.
- Genuine test, staging, review, promotional, or complimentary grants may be described as such only where legally useful and must not imply that the live Service is a beta.
- The current localization queue remains **100/100 full documents and 25/25 hubs** unless canonical English meaning materially changes.
- If this gate later requires a material canonical change, update English first, reopen only the affected localized document type, then resynchronize all 25 locales in the required order.

## 26. Official references checked September 1, 2026

- German BGB § 327, scope of digital-product rules: https://www.gesetze-im-internet.de/bgb/__327.html
- German BGB § 327b, supply and burden of proving supply: https://www.gesetze-im-internet.de/bgb/__327b.html
- German BGB § 327e, conformity/product defects: https://www.gesetze-im-internet.de/bgb/__327e.html
- German BGB § 327f, required updates: https://www.gesetze-im-internet.de/bgb/__327f.html
- German BGB § 327l, cure: https://www.gesetze-im-internet.de/bgb/__327l.html
- German BGB § 327m, termination for defects: https://www.gesetze-im-internet.de/bgb/__327m.html
- German BGB § 327n, price reduction and repayment: https://www.gesetze-im-internet.de/bgb/__327n.html
- German BGB § 327o, termination declaration and repayment consequences: https://www.gesetze-im-internet.de/bgb/__327o.html
- German BGB § 327r, modifications to digital products: https://www.gesetze-im-internet.de/bgb/__327r.html
- Directive (EU) 2019/770, including Article 19 on modifications: https://eur-lex.europa.eu/eli/dir/2019/770/oj/eng
- European Commission, CPC Network Key Principles on In-Game Virtual Currencies overview: https://commission.europa.eu/topics/consumers/consumer-rights-and-complaints/enforcement-consumer-protection/coordinated-actions/social-media-online-games-and-search-engines_en
- European Commission workshop summary on the CPC Key Principles, June 3, 2025: https://commission.europa.eu/news-and-media/news/european-commission-hosts-stakeholders-talks-application-cpc-networks-key-principles-games-virtual-2025-06-03_en

## Release decision

Do not mark the economy-reset/correction path production-ready until CK-Labs can prove that a broad reset or narrow exploit correction can be replayed from evidence, reconciles payment events across the affected window, preserves valid 30-Day VIP and Lifetime VIP state, isolates purchased value from known invalid value, and provides the mandatory notice/remedy treatment where a covered paid digital product is materially changed or non-conforming.
