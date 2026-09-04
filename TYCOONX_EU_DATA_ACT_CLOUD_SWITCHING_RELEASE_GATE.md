# TycoonX EU Data Act Cloud Switching & Provider Exit Release Gate

**Operational commercial/legal release QA. Last reviewed: September 5, 2026.**

This gate protects CK-Labs when TycoonX depends on cloud, database, hosting, storage, authentication, observability, messaging, CDN, compute, or other services that may qualify as **data processing services** under Regulation (EU) 2023/2854 (the EU Data Act).

It is primarily a **CK-Labs-as-customer** continuity and contract-exit gate. It does not assume that ordinary TycoonX gameplay itself is a data processing service offered by CK-Labs. If CK-Labs later sells a separate cloud, hosting, platform, software-as-a-service, or similar data processing service to customers in the Union, perform a fresh provider-side Data Act analysis before launch.

The Data Act has applied generally since **September 12, 2025**. Chapter VI applies to providers of data processing services, irrespective of where they are established, when they provide those services to customers in the Union. This gate complements `TYCOONX_THIRD_PARTY_PROVIDER_CONTINUITY_OUTAGE_RELEASE_GATE.md`; it does not replace GDPR, payment-provider rules, platform rules, German digital-product consumer protections, security duties, or provider-specific contracts.

This operational gate does **not** materially change the canonical player-facing Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards. Therefore it does not reopen localization by itself.

## 1. Scope: classify the service before relying on Data Act switching rights

For every material infrastructure dependency, record whether the contracted service appears to be a Data Act **data processing service** and why.

Chapter VI is aimed at digital services that enable ubiquitous and on-demand network access to a shared pool of configurable, scalable and elastic computing resources. Depending on the actual service, this can cover cloud and edge services and can include infrastructure, platform, database, or software services that fit the statutory definition.

Do not assume that every vendor used by TycoonX is covered merely because it has an API. A payment processor, app store, advertising service, legal service, bank, marketplace, or ordinary telecom service may involve different legal classifications. Likewise, do not assume that a vendor outside the EU is outside Chapter VI: Article 1(3)(f) reaches providers of data processing services irrespective of establishment where they provide such services to customers in the Union.

Maintain for each critical dependency:

- provider and legal entity;
- contracted service/product/tier;
- contracting CK-Labs entity and establishment;
- whether CK-Labs is a customer in the Union;
- Data Act Chapter VI scope assessment;
- source contract and current terms version;
- data location and infrastructure jurisdiction information where published;
- switching/export documentation URL;
- exportable data and digital assets identified;
- termination/notice period;
- switching/transitional period;
- retrieval period after transition;
- switching or egress charges currently stated;
- destination/on-premises options; and
- date of the last verification.

## 2. Data Act switching is a legal continuity tool, not a reason to wait for an outage

Article 23 requires covered providers to remove pre-commercial, commercial, technical, contractual and organisational obstacles that inhibit effective switching to another provider covering the same service type, switching to on-premises ICT infrastructure, or, where relevant, using several providers in parallel.

For TycoonX, this means provider exit planning should start **before** an emergency.

At minimum, CK-Labs should be able to answer:

1. What exact data can be exported?
2. What configuration or digital assets can be moved?
3. Which items are provider-owned or legitimately excluded?
4. In what format can export occur?
5. How are incremental writes handled during migration?
6. How will payment and entitlement events crossing the cutover be reconciled exactly once?
7. How will login identities remain mapped to the same internal TycoonX account?
8. How will private messages, moderation evidence, security logs, and legally required records be preserved or lawfully deleted?
9. What is the rollback boundary?
10. What provider-specific features create lock-in even if raw data can technically be exported?

A legal switching right is not a backup strategy. CK-Labs still needs tested backups, exports, restore procedures, reconciliation, and provider-independent internal identifiers.

## 3. Contract rights that CK-Labs should verify now

Article 25 requires covered providers to set switching rights and obligations out clearly in a written contract that the customer can store and reproduce.

For an in-scope contract, verify that the contract addresses at least:

- switching to another provider covering the same service type or to on-premises ICT infrastructure;
- reasonable assistance during the switch;
- continuity during the transitional period;
- known continuity risks;
- security during transfer and retrieval;
- support for the customer's exit strategy;
- a maximum notice period to initiate switching that does not exceed **two months**;
- the categories of portable/exportable data and digital assets;
- narrowly described provider-internal exclusions where relevant;
- a normal maximum switching/transitional period of **30 calendar days** after the applicable notice period;
- a retrieval period of at least **30 calendar days** after the transition ends;
- deletion/erasure treatment after the retrieval period where the switching process has completed successfully; and
- switching charges permitted, if any, during the current transitional fee period.

Do not sign a new critical-provider contract simply because the vendor is popular. Store the exact contract version and verify whether its exit provisions actually match the current law and the operational needs of TycoonX.

## 4. The 30-day transition is the normal maximum, not a guaranteed migration duration in every case

The normal Article 25 switching period is no more than **30 calendar days** after the applicable notice period.

Where that period is technically unfeasible, Article 25(4) allows the source provider to use an alternative transitional period only if it:

- notifies the customer within **14 working days** of the switching request;
- duly justifies the technical unfeasibility; and
- specifies an alternative transitional period that does not exceed **seven months**.

Service continuity must still be maintained throughout the alternative transitional period under the statutory framework.

The contract must also provide the customer a right to extend the transitional period once for a period the customer considers more appropriate for its own purposes, subject to the Regulation's conditions.

CK-Labs should therefore record separately:

- `switch_request_at`;
- `notice_period_end_at`;
- `normal_transition_deadline`;
- `provider_unfeasibility_notice_at` if any;
- provider's stated technical justification;
- `alternative_transition_deadline` if any;
- any CK-Labs-requested extension; and
- actual completion time.

Do not silently convert a provider delay into TycoonX entitlement loss or a user suspension.

## 5. Exportable data and digital assets must be mapped before cutover

The Data Act's switching concept is broader than downloading one database table.

For each covered dependency, map the data and digital assets necessary for continuity, including where relevant:

- TycoonX account identifiers and account-link mappings;
- profile and gameplay state;
- purchased Diamond ledger/provenance;
- one-time 30-Day VIP start and expiry records;
- Lifetime VIP entitlement provenance;
- Apple, Google Play, and Xsolla transaction mapping held by CK-Labs;
- user-generated content and messages subject to applicable retention/privacy rules;
- moderation and account-enforcement records;
- fraud/security state and open incident evidence;
- support and mandatory legal-remedy state;
- configuration, schemas, indexes, functions, queues, object-storage metadata, and other customer-controlled assets where portable;
- service configuration and access-control metadata that CK-Labs has the right to use independently of the outgoing provider; and
- audit/reconciliation metadata needed to prove that the cutover did not duplicate or lose paid value.

Article 25 permits certain provider-internal data to be excluded where justified, including where necessary to protect the provider's trade secrets, but an exclusion must not be used to impede or delay switching contrary to Article 23.

Do not demand provider trade secrets or assets CK-Labs has no right to receive. Do not accept an artificial export that omits CK-Labs-owned data needed to operate the same TycoonX account safely at the destination.

## 6. Formats, interfaces, and functional equivalence

Article 26 requires covered providers to give customers information about switching/porting methods, formats, restrictions, and known technical limitations, together with access to an up-to-date register covering relevant data structures, data formats, standards, and open interoperability specifications.

Article 30 adds technical switching duties. Depending on the service category:

- infrastructure providers must take reasonable measures to facilitate **functional equivalence** when switching to the same service type;
- other covered data processing services must make relevant open interfaces available free of charge for switching; and
- where applicable common specifications or harmonised interoperability standards are not yet available, the provider must, on request, export all exportable data in a **structured, commonly used and machine-readable format**.

Functional equivalence does not mean that a destination provider must recreate every unique feature of the source provider. For TycoonX, the practical target is that the migrated service can reproduce the legally and commercially important results for shared functionality without paid-value loss, account duplication, or corrupted authoritative records.

## 7. Switching charges: September 2026 rule and January 12, 2027 change

The current fee rule is time-sensitive.

Until **January 12, 2027**, Article 29 allows a covered provider to impose **reduced switching charges**, but those charges may not exceed the costs directly linked to the switching process. Providers must disclose applicable standard service fees, early termination penalties, and reduced switching charges before contract conclusion.

From **January 12, 2027**, providers of data processing services may **not impose switching charges on the customer for the switching process** under Article 29(1).

This includes the Data Act's removal of switching charges, including data-egress charges that are part of the switching process. Do not automatically assume that every network/data-transfer charge in every multi-cloud architecture becomes unlawful: ongoing in-parallel use can have a different treatment from a one-off switching process.

Before a major TycoonX provider exit:

1. obtain a written quote/itemisation of any switching/egress charge;
2. identify whether the charge is actually part of the statutory switching process;
3. verify the date the charge would be imposed;
4. compare it to Article 29's then-current rule;
5. preserve the provider's pricing/contract evidence; and
6. challenge a charge where the current law and contract support doing so rather than simply building it into player pricing.

Provider exit costs are CK-Labs infrastructure economics. They must not be presented to players as a fabricated mandatory tax, Apple fee, Google fee, Xsolla fee, or government charge.

## 8. Multi-cloud and parallel use are separate from a completed switch

Article 23 can also protect the ability to use several providers in parallel where relevant. This can reduce lock-in and improve TycoonX resilience.

However, do not confuse:

- **switching**, where a source service is being exited; with
- **in-parallel use**, where data continues to flow between multiple active services.

The Data Act specifically recognises that ongoing data egress for in-parallel use is different from one-off egress required for switching. Build cost models accordingly.

A multi-cloud design should not create three independently writable sources of truth for purchased Diamonds, VIP, refunds, account identity, or payment reconciliation. Redundancy is not permission to duplicate authority.

## 9. Good-faith cooperation does not remove CK-Labs migration duties

Article 27 requires all parties involved, including destination providers, to cooperate in good faith to make switching effective, enable timely data transfer, and maintain continuity.

CK-Labs must therefore cooperate too. Do not:

- refuse reasonable destination-provider details requested for the switch;
- intentionally delay exports while continuing to accumulate avoidable writes;
- use a migration to evade lawful security, privacy, tax, audit, or payment record duties;
- instruct a destination provider to replay every historical purchase as a new entitlement; or
- delete the source before verifying destination completeness and the agreed retrieval/rollback window.

Document destination-provider responsibilities, source-provider responsibilities, and CK-Labs responsibilities separately.

## 10. International-access transparency is a contract review checkpoint

Article 28 requires covered data processing providers to publish and keep current information about:

- the jurisdiction to which the ICT infrastructure used for the individual service is subject; and
- a general description of technical, organisational, and contractual measures designed to prevent conflicting third-country governmental access or transfer of non-personal data held in the Union.

Before selecting or renewing a critical provider, capture this information where available and review it together with GDPR transfer analysis for personal data.

Do not confuse Data Act Article 28/32 non-personal-data safeguards with GDPR Chapter V. A migration can involve both personal and non-personal data, and both frameworks may need separate analysis.

## 11. Data Act rights do not override security, privacy, IP, or trade-secret boundaries

Provider switching must not become an excuse to:

- export another customer's data;
- bypass access controls;
- demand source code or trade secrets that CK-Labs has no right to receive;
- weaken encryption or integrity controls;
- transfer personal data to a new provider without an appropriate GDPR role, contract, security, and international-transfer analysis where applicable; or
- retain the outgoing provider's data forever merely because a migration occurred once.

Use data minimisation and purpose limitation during migration. Keep only the records required for continuity, security, accounting, disputes, legal obligations, and other documented purposes.

## 12. Payment channels and infrastructure providers remain different roles

The Data Act cloud-switching framework does not turn Apple, Google Play, or Xsolla into interchangeable infrastructure providers, and it does not change the legal merchant/payment authority of historic transactions.

During any infrastructure migration:

- Apple transaction/refund state remains verified through the applicable Apple authority path;
- Google Play purchase/refund/void state remains verified through the applicable Google authority path;
- Xsolla transaction/refund/chargeback state remains verified through the configured Xsolla authority path;
- CK-Labs remains responsible for mapping verified payment state to the correct TycoonX entitlement; and
- the database or hosting provider must not be treated as payment authority merely because it stores a cached transaction record.

Changing database/cloud vendor cannot rewrite the original merchant, final completed consumer price, tax treatment, currency, refund state, or chargeback provenance of a completed transaction.

## 13. Purchased Diamonds migration invariant

Purchased Diamonds must survive a provider switch where the underlying valid TycoonX account and purchase entitlement survive.

Rules:

- purchased Diamonds do not expire merely because CK-Labs changes cloud/database/hosting provider;
- an export/import replay must not grant the same Diamond purchase twice;
- a partial migration must not silently erase purchased Diamond provenance;
- a negative correction must remain linked to the actual refunded/reversed/invalid transaction rather than to the provider migration itself;
- free, promotional, test, or gameplay-earned value may follow its own separately disclosed rules, but must not be relabelled as purchased value or vice versa merely for migration convenience; and
- if authoritative records disagree after migration, freeze risky writes and reconcile rather than guessing.

## 14. One-time 30-Day VIP migration invariant

**30-Day VIP is a one-time, non-renewing 30-day entitlement.**

A provider switch must preserve:

- original purchase/activation authority;
- original start time;
- original expiry time; and
- any separately documented mandatory remedy or lawful extension.

Export/import, restore, failover, rollback, or re-authentication must not start a fresh 30 days. If an infrastructure failure materially prevented use during the paid period, assess the appropriate consumer remedy separately rather than secretly changing the product definition.

## 15. Lifetime VIP migration invariant

**Lifetime VIP is a one-time promotional entitlement available only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase.**

A cloud/database/provider switch must preserve one valid Lifetime VIP where authoritative evidence supports it. It must not:

- add a hidden expiry;
- convert Lifetime VIP to 30-Day VIP;
- duplicate Lifetime VIP;
- reopen a closed Lifetime VIP sales window;
- use provider migration as a pretext to charge the user again; or
- treat provider exit as the end of TycoonX's commercial operating lifetime where TycoonX continues through replacement infrastructure.

Permanent TycoonX service shutdown is a separate event governed by the canonical Terms and mandatory law.

## 16. Account compromise and fraud remain separate from migration errors

A missing login mapping, failed import, duplicate row, provider outage, corrupted export, or stale backup is not proof that the legitimate player committed fraud, hacking, chargeback abuse, or entitlement abuse.

During a migration incident:

- preserve authentication/session evidence where relevant;
- separate player-controlled activity from infrastructure-generated errors;
- restore valid entitlements using authoritative evidence;
- do not ask for full payment credentials or passwords to compensate for weak internal records; and
- keep moderation/suspension decisions separate unless independent evidence supports enforcement.

## 17. User-facing continuity and mandatory consumer rights

The Data Act switching rights are principally about the provider/customer relationship between CK-Labs and covered data processing providers. They do not reduce the rights of TycoonX players.

If a migration causes non-supply, non-conformity, loss of paid functionality, security problems, or a material modification, assess the applicable German/EU digital-product rules independently, including cure, updates, price reduction, termination/refund, modification notice, or other mandatory remedies where applicable.

Do not tell a user that no remedy exists merely because CK-Labs was legally entitled to switch cloud providers.

A voluntary Diamond grant or VIP extension can be goodwill but must not silently replace a mandatory monetary or statutory remedy where mandatory law requires something else.

## 18. Provider contract/exits evidence packet

For each critical provider and each material switch, preserve an appropriately minimised evidence packet with:

- provider/legal entity and service;
- scope determination;
- signed/current contract version;
- notice and transitional periods;
- exportable-data/digital-asset map;
- provider switching documentation;
- interface/export format information;
- stated switching/egress fees and date;
- migration request and acknowledgement;
- 14-working-day technical-unfeasibility notice if any;
- alternative transition period if any;
- retrieval and deletion dates;
- data/security/GDPR assessment;
- cutover and rollback timestamps;
- record counts/checksums or equivalent integrity evidence;
- payment/entitlement reconciliation samples;
- unresolved provider disputes; and
- final migration sign-off.

The purpose is to prove continuity and enforce CK-Labs's rights without retaining unnecessary player data in a legal checklist.

## 19. Release regression scenarios

| Scenario | Expected invariant |
| --- | --- |
| Critical covered cloud provider contract has no documented export path | Provider is not treated as safely replaceable; scope/contract escalation occurs before dependency deepens |
| CK-Labs requests a normal switch | Notice and 30-calendar-day transition rules are tracked from the correct events |
| Provider says 30 days is technically impossible | Written notice is received within 14 working days, justification is preserved, alternative period does not exceed seven months |
| Provider offers only a proprietary export | Article 26/30 portability and machine-readable-format requirements are checked rather than accepted blindly |
| Provider tries to charge a large September 2026 exit fee | Charge is itemised and checked against Article 29's direct-cost cap for reduced switching charges |
| Provider tries to charge a switching fee on January 12, 2027 or later | Article 29(1) no-switching-charge rule is applied to the statutory switching process |
| Multi-cloud remains active after cutover | Ongoing egress is classified separately from one-off switching; no false zero-fee assumption |
| Database migration replays Apple transaction rows | No second Diamond or VIP grant; Apple authority/provenance remains transaction-specific |
| Database migration replays Google purchase tokens | Fulfilment remains idempotent; no duplicate paid value |
| Xsolla historical transaction imported to new infrastructure | Historic Xsolla merchant/payment/refund provenance remains unchanged |
| Purchased Diamond record is missing after import | Risky writes freeze and authoritative reconciliation occurs; migration itself is not treated as expiry |
| 30-Day VIP is imported twice | Original start/expiry remain; no new 30-day period |
| Lifetime VIP import runs twice | Exactly one valid Lifetime VIP remains |
| Old auth provider is unavailable during migration | Existing TycoonX account is recovered rather than replaced with an accidental duplicate account |
| Migration exposes another user's data | Security/GDPR incident process starts; the event is not hidden as a normal switching problem |
| User reports missing value after provider switch | Support investigates migration/payment evidence; report is not automatically classified as fraud |
| Source provider enters outage during switch | Continuity/rollback path is used; no speculative bulk entitlement revocation |
| Provider exit causes a multi-day paid-feature defect | Mandatory consumer-remedy analysis remains separate from Data Act provider rights |

## 20. Go-live / renewal blockers

Treat the following as blockers before deliberately deepening reliance on a critical covered data processing provider:

- no stored/reproducible contract or exit terms;
- no documented scope assessment;
- no known exportable-data/digital-asset inventory;
- no tested export/restore path for authoritative TycoonX state;
- no stable provider-independent internal account identifier;
- a migration can replay or lose paid transactions;
- purchased Diamonds can disappear merely because the provider changed;
- 30-Day VIP can restart on import;
- Lifetime VIP can expire, duplicate, convert, or be sold after a closed window because of migration;
- old transaction merchant/payment provenance would be rewritten;
- personal data would be moved without required GDPR analysis;
- switching/egress charges are accepted without checking the then-current Article 29 rule;
- a provider claims technical impossibility without the Article 25 timing/justification being recorded where applicable; or
- CK-Labs cannot distinguish provider-switching evidence from fraud, account compromise, refund, chargeback, or game-moderation evidence.

## 21. Canonical/public legal boundary

This gate strengthens CK-Labs's infrastructure procurement and continuity posture. It does not require a public Data Act chapter in the TycoonX Terms merely because CK-Labs is a customer of a covered cloud provider.

The existing public baseline should continue to say, in substance, that:

- CK-Labs may replace, add, or discontinue providers for legitimate operational/legal reasons;
- provider changes do not retroactively rewrite completed purchases;
- provider outages do not automatically waive mandatory consumer rights;
- valid paid entitlements are handled according to their product terms and authoritative records;
- permanent service shutdown is a separate lawful event; and
- non-waivable German/EU rights remain unaffected.

If a future product change makes CK-Labs itself a provider of a covered data processing service, or if provider switching materially changes what TycoonX promises to players, update canonical English first and then reopen only the affected localized document type in `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`.

## 22. Brand, release, and localization invariants

- Player-facing and legal prose must display **TycoonX** exactly.
- Technical route/file names containing `tyconx` may remain only where changing them would break URLs or integrations.
- TycoonX is in full release as of **September 1, 2026**.
- Do not describe the live game, legal terms, purchases, VIP, Diamonds, users, rewards, or current service as beta.
- Genuine free, promotional, test, staging, review, or complimentary grants can be described accurately where legally useful without implying that live TycoonX is a beta.
- This operational gate creates no localization work by itself because it does not materially alter canonical player-facing legal meaning.

## 23. Official references checked September 5, 2026

- Regulation (EU) 2023/2854 (Data Act): https://eur-lex.europa.eu/eli/reg/2023/2854/oj/eng
- European Commission, Data Act policy page: https://digital-strategy.ec.europa.eu/en/policies/data-act
- European Commission, Data Act explained, Chapter VI switching: https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained
- European Commission Data Act implementation FAQs / support materials: https://digital-strategy.ec.europa.eu/en/library/commission-publishes-frequently-asked-questions-about-data-act

Key current checkpoints used by this gate:

- Regulation applies generally from **September 12, 2025**.
- Article 1(3)(f): provider establishment outside the EU does not by itself remove scope where a covered data processing service is provided to customers in the Union.
- Article 23: removal of obstacles to effective switching and relevant parallel use.
- Article 25: written switching terms; maximum notice period of two months; normal maximum 30-calendar-day transitional period; 14-working-day notice if 30 days is technically unfeasible; alternative period no longer than seven months; minimum 30-calendar-day retrieval period.
- Article 26: switching/porting procedure and format information.
- Article 27: good-faith cooperation.
- Article 28: infrastructure-jurisdiction and third-country access transparency.
- Article 29: reduced switching charges limited to directly linked costs until January 12, 2027; no switching charges from January 12, 2027.
- Article 30: technical switching, open interfaces, functional equivalence, and structured/common/machine-readable export requirements as applicable.

The Commission has discussed/proposed later simplification amendments in its digital-policy work. Do not treat a proposal as enacted law. Recheck the final Regulation text and current Commission guidance before a major provider contract or exit.

## 24. Manual regression

Run locally without GitHub Actions or paid CI:

```bash
node scripts/verify-tycoonx-eu-data-act-cloud-switching.mjs
```

Also run the provider continuity and repository-wide legal verifiers where practical:

```bash
node scripts/verify-tycoonx-provider-continuity.mjs
node scripts/verify-tycoonx-legal.mjs
```
