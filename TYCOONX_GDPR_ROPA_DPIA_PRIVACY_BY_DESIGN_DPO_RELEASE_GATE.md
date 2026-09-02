# TycoonX GDPR RoPA, DPIA, Privacy-by-Design & DPO Release Gate

**Review date: September 2, 2026**  
Owner: CK-Labs

## Purpose

This gate closes an internal GDPR-accountability gap for TycoonX. The public Privacy Policy already explains the main categories of data, purposes, legal bases, recipients, international transfers, retention, security, automated security/moderation and user rights. That public notice does not replace CK-Labs' internal duties to know what processing actually exists, design it with data protection built in, assess high-risk processing before launch, and appoint a data protection officer where EU or German law requires one.

This document is an operational compliance gate. It does **not** reopen the completed TycoonX localization queue unless the canonical public meaning later changes materially.

## 1. Records of processing activities are a production requirement

Under GDPR Article 30, CK-Labs should maintain a written/electronic record of processing activities (RoPA) for TycoonX.

The current Article 30(5) text contains a limited derogation for enterprises or organisations employing fewer than 250 persons, but that derogation does not apply where the relevant processing is not occasional, is likely to create risk to data subjects' rights and freedoms, or includes Article 9 special-category data or Article 10 criminal-offence data.

TycoonX's ordinary account, authentication, persistent game-state, purchase/entitlement, security, fraud, support, community, moderation and service-operation processing is recurring rather than a one-off event. CK-Labs must therefore not assume that being a solo or very small developer removes the Article 30 recordkeeping duty for those routine operations.

Pending EU proposals to simplify Article 30 must not be treated as enacted law before they actually enter into force and apply. Re-check the consolidated GDPR before relying on any future amended exemption.

### Minimum controller RoPA fields

For each material TycoonX processing activity, record at least:

- processing activity name and accountable owner;
- controller identity/contact details and, where applicable, representative/DPO details;
- purposes of processing;
- categories of data subjects;
- categories of personal data;
- categories of recipients;
- relevant processors/subprocessors and factual role notes where useful;
- transfers to third countries/international organisations and the applicable safeguard where required;
- envisaged erasure/retention periods where possible;
- a general description of relevant technical and organisational security measures where possible;
- the operational legal basis and any additional conditions required for special-category or criminal-offence data;
- systems/providers where the processing occurs;
- date last reviewed and the change that triggered the review.

The legal-basis field is operationally useful even though Article 30(1) does not list it as a standalone mandatory controller-record field. It helps CK-Labs keep the RoPA, Privacy Policy, consent flows, legitimate-interest assessments and product behavior aligned.

A RoPA is an internal accountability record, not something CK-Labs must publish to all players. It must be available to the competent supervisory authority on request.

## 2. Suggested TycoonX RoPA activity map

The production RoPA should not be one generic row saying `operate game`. Separate at least the materially different activities that create different purposes, recipients, retention rules or risks, for example:

1. account creation, authentication, login/session and recovery;
2. persistent gameplay/profile/economy state;
3. Apple App Store purchase validation and entitlement reconciliation;
4. Google Play purchase validation and entitlement reconciliation;
5. CK-Labs TycoonX webshop/Xsolla purchase, fraud, tax and entitlement flows;
6. Diamonds ledger and correction history;
7. one-time 30-Day VIP entitlement state;
8. Lifetime VIP entitlement/restoration state;
9. customer support, attachments and dispute handling;
10. public community features, chat, profiles and reports;
11. private messages and moderation access where applicable;
12. anti-cheat, exploit, fraud, account-takeover and security monitoring;
13. automated moderation/security signals and human review;
14. analytics, diagnostics, crash/performance telemetry;
15. push/service notifications;
16. age-related controls and parental/guardian handling where applicable;
17. legal/accounting/tax recordkeeping;
18. data-subject-rights handling, deletion and export;
19. breach/security-incident response;
20. backups, disaster recovery and audit/security logging.

This is a starting map, not a substitute for inspecting the actual shipped systems and SDKs.

## 3. RoPA change-control trigger

Update or review the affected RoPA entry **before or at the time of** a material processing change, including:

- adding an SDK, analytics tool, AI provider, moderation service or fraud vendor;
- changing authentication provider;
- adding device identifiers, fingerprinting or new anti-abuse signals;
- adding age assurance or parental controls;
- adding a new public/private social feature;
- materially changing private-message moderation/access;
- launching automated profiling, scoring or recommendation logic using personal data;
- changing retention periods;
- adding a new country/hosting region or international transfer path;
- replacing Apple, Google, Xsolla, hosting, authentication or infrastructure providers;
- adding a recurring paid product in the future;
- a merger, sale, reorganisation or successor operator;
- a material security incident revealing that the documented data flow was incomplete.

Do not wait for the annual Privacy Policy review if production data flows have already changed.

## 4. GDPR Article 25 privacy by design and by default

Privacy safeguards must be considered when CK-Labs decides **how** a feature will work, not only after deployment.

For each new or materially changed personal-data feature, ask and document:

- What exact data is necessary for the stated purpose?
- Can the same result be achieved with less data, lower precision, shorter retention or local/on-device processing?
- Who needs access, and does every role/provider genuinely need the same fields?
- Can identifiers be pseudonymised or separated from content/telemetry?
- Is the default visibility the least exposing state compatible with the feature?
- Are retention/deletion rules implemented rather than merely described?
- Can a user exercise access, deletion, objection, restriction or consent withdrawal without a hidden data dependency breaking the process?
- Does a new log/debug field accidentally contain credentials, message contents, purchase tokens or unnecessary profile data?
- Can security and fraud goals be met without indefinite or indiscriminate monitoring?
- Does the feature expose information to an indefinite number of people by default when that is not necessary?

### TycoonX-specific defaults

- Private messages should not become public by default.
- Support attachments should not become broadly accessible internally or externally.
- Security logs should use role-limited access and proportionate retention.
- Public profile/community fields should be limited to what the public feature actually needs.
- Age/minor safeguards should not collect additional identity data merely because collecting more data is technically easy.
- Optional analytics/marketing processing requiring consent should not be enabled merely because the user opened TycoonX.
- A feature should not require unnecessary precise location, contacts, photos or device data when ordinary game functionality does not need it.

## 5. DPIA screening happens before high-risk processing starts

GDPR Article 35 requires a Data Protection Impact Assessment before processing likely to result in a high risk to individuals' rights and freedoms.

Do not use `we are small` or `this is only a game` as a DPIA exemption.

At design/release review, screen new or materially changed processing against Article 35, the applicable supervisory-authority Article 35(4) list, and the EDPB high-risk criteria.

EDPB guidance identifies criteria including:

- evaluation or scoring;
- automated decision-making with legal or similarly significant effects;
- systematic monitoring;
- sensitive or highly personal data;
- processing on a large scale;
- matching or combining datasets;
- data concerning vulnerable people;
- innovative use of technological or organisational solutions;
- processing that itself prevents a person from exercising a right or using a service/contract.

Meeting two criteria is an important EDPB screening signal in many cases, but it is not a mechanical safe harbor: one exceptionally high-risk criterion can still justify a DPIA, and the competent authority's mandatory list must also be checked.

### TycoonX features that require explicit DPIA screening

Do a written DPIA-screening decision before introducing or materially expanding, for example:

- account-level fraud/abuse scoring that materially affects access or purchases;
- automated ban/suspension systems with significant effects and little/no human review;
- broad analysis of private communications for safety, fraud or moderation;
- systematic profiling of player behavior across long periods;
- behavioral advertising or individualized monetization based on profiling;
- age-estimation/age-assurance technology using biometric or identity evidence;
- precise location tracking;
- large-scale matching of platform/payment/account/security datasets;
- AI systems that infer sensitive or highly personal traits;
- new device-fingerprinting or persistent cross-service tracking;
- systematic processing concerning minors or other vulnerable users where the scale/context materially increases risk;
- a security/anti-cheat system that makes high-impact decisions from opaque device/account signals.

This list does not state that every listed feature is automatically prohibited or that every current TycoonX feature necessarily requires a DPIA. It means CK-Labs must make the screening decision deliberately before launch.

## 6. Minimum DPIA contents

Where a DPIA is required, document at least:

1. a systematic description of the planned processing and purposes, including any legitimate interest relied upon;
2. necessity and proportionality of the processing in relation to those purposes;
3. the risks to the rights and freedoms of affected people;
4. the measures planned to address those risks, including safeguards, security controls and mechanisms demonstrating GDPR compliance;
5. residual risk after the controls;
6. owner, approval date, implementation dependencies and review triggers.

Consult relevant processors/vendors for information they must provide under Article 28 where their systems are part of the assessed processing.

The EDPB's 2026 DPIA template can be used as a practical structure, but do not describe a consultation-stage/template version as binding law or assume that using a template alone proves compliance.

## 7. DPIA lifecycle, not a one-time PDF

Review a DPIA when risk changes materially, for example after:

- a new model/algorithm or moderation rule;
- a new data source or dataset match;
- a major increase in users/scale;
- a new age group or vulnerable population;
- a new processor/subprocessor or transfer location;
- a security incident or demonstrated abuse pattern;
- a change from human-assisted review to autonomous enforcement;
- a change in retention, public visibility or access rights;
- a material platform/provider rule change.

A DPIA describing a retired design does not approve a materially different production system.

## 8. Article 36 prior consultation: high residual risk is a stop condition

If a required DPIA shows that processing would still result in a high risk in the absence of further measures that CK-Labs can implement to reduce that risk, consult the competent supervisory authority under GDPR Article 36 **before** starting the processing.

Do not ship first and plan to consult later merely because the product deadline is close.

Keep the DPIA, risk decision, correspondence, advice and resulting product changes in the release evidence packet.

## 9. Germany: DPO decision must follow both GDPR Article 37 and BDSG § 38

CK-Labs should keep a dated Data Protection Officer (DPO) necessity assessment.

### GDPR Article 37 triggers

A DPO is mandatory in particular where the controller's/processor's core activities consist of:

- regular and systematic monitoring of data subjects on a large scale; or
- large-scale processing of Article 9 special-category data or Article 10 criminal-offence data.

`Large scale` is contextual. Do not assume a user count automatically proves or disproves it without considering number/proportion of people, data volume, duration and geographical scope.

### Additional German BDSG § 38 triggers

For a German non-public body, § 38 BDSG currently adds a DPO obligation where:

- the controller/processor generally employs at least **20 persons** continuously engaged in automated processing of personal data; or
- **regardless of headcount**, the controller/processor performs processing that is subject to a DPIA under GDPR Article 35; or
- the other specific commercial transfer/anonymised-transfer/market-or-opinion-research conditions in § 38 apply.

This creates an important TycoonX dependency: a conclusion that a planned processing operation actually **requires a DPIA** can also trigger a German DPO obligation even for a very small operator.

Do not casually label a support contact, founder, contractor or privacy consultant `DPO`. A voluntary DPO is permitted, but once someone is formally designated as DPO, the GDPR rules on the DPO's position, independence, resources and tasks apply.

If a DPO is required or voluntarily designated, assess conflicts of interest and ensure the DPO is involved properly and early in personal-data matters. CK-Labs remains responsible for GDPR compliance; appointing a DPO does not transfer the controller's legal responsibility away from CK-Labs.

## 10. Platform/provider records do not replace CK-Labs accountability

Apple App Store privacy disclosures, Google Play Data safety declarations, Xsolla dashboards, processor DPAs, SDK privacy manifests and provider security reports can supply evidence, but they do not replace the CK-Labs RoPA, DPIA screening or Article 25 design analysis.

Keep the factual boundaries clear:

- **Apple** may independently process App Store/account/payment data while also imposing platform privacy-disclosure requirements on CK-Labs.
- **Google** may independently process Play/account/payment data while requiring accurate Data safety disclosures and compliant SDK behavior.
- **Xsolla** can have different controller/processor roles depending on the actual TycoonX payment/webshop/data flow; do not assign one blanket role to every Xsolla activity.
- Hosting, database, analytics, authentication, moderation, AI and security vendors must be mapped according to their real role and data flow.

The RoPA/vendor register, Privacy Policy, store disclosures and actual deployed SDK/provider configuration should reconcile with each other.

## 11. Automated security/moderation and founder-protective controls

TycoonX may lawfully use proportionate security, fraud, anti-cheat and moderation tools. GDPR accountability does not require CK-Labs to reveal exploit-detection thresholds, anti-fraud secrets or information that would undermine security.

However, internal records should still identify:

- the purpose and data categories used;
- the legal basis;
- key recipients/providers;
- retention;
- whether profiling/automated decisions occur;
- the human-review or appeal safeguards where required;
- the DPIA screening result;
- security controls protecting the signals.

A DPIA/RoPA is not a public exploit manual.

## 12. Paid-value and entitlement isolation

Privacy-governance changes must never become an unrelated economy/payment mutation.

- **Diamonds:** updating a RoPA, deleting unnecessary analytics data, changing a processor or responding to a privacy request must not itself delete or duplicate legitimately purchased Diamonds. Any entitlement correction remains tied to authoritative transaction/economy evidence and applicable law.
- **30-Day VIP:** privacy changes must not restart, pause, shorten, extend or duplicate the original one-time 30-Day VIP period unless a separate lawful remedy specifically requires an adjustment.
- **Lifetime VIP:** a DPIA, vendor migration, account-security measure or data-minimisation change must not create a hidden expiry, downgrade Lifetime VIP to 30-Day VIP or replay a purchase. Lifetime VIP remains a one-time entitlement offered only during selected genuine sales windows and may be withdrawn from future sale without expiring an already valid entitlement.

A data-protection request, DPIA finding or refusal of optional tracking is not itself evidence of fraud, chargeback abuse, exploit use, coupon abuse or regional-price abuse.

## 13. Security emergencies and incident changes

A genuine security emergency may require rapid temporary processing changes. CK-Labs may act to protect accounts, purchases and infrastructure, but should then promptly reconcile:

- the RoPA;
- legal basis;
- retention/access controls;
- processor/subprocessor records;
- international-transfer analysis;
- DPIA screening/update;
- Privacy Policy or user notice if the public data practice materially changed;
- breach-notification duties where applicable.

Emergency is not a permanent exemption from documentation.

## 14. Business sale, merger or successor operator

Before a merger, asset transfer, sale or successor-operator migration involving TycoonX personal data:

- identify the data categories and processing activities being transferred;
- update controller/recipient/processor roles;
- assess legal basis and required transparency;
- update the RoPA and relevant transfer documentation;
- review existing DPIAs where risks/controllers/systems change;
- preserve paid-entitlement evidence needed to honor legitimate Diamonds/VIP without transferring unrelated data unnecessarily;
- update canonical and localized public notices where the public legal meaning materially changes.

## 15. Minimum release regression scenarios

Before a material privacy/data-processing release, verify at least:

1. a new analytics SDK cannot ship without a RoPA/vendor/privacy-disclosure review;
2. a new provider region triggers a transfer/RoPA check;
3. new fraud scoring receives documented DPIA screening before production;
4. a significant automated-ban system is screened for Article 35 and automated-decision safeguards;
5. private-message analysis cannot silently expand beyond its documented purpose;
6. new age-assurance technology receives DPIA screening and data-minimisation review;
7. a new public profile field defaults to no broader exposure than necessary;
8. debug logs cannot capture passwords, full payment credentials or unrelated message content by accident;
9. retention deletion jobs match the documented period/category;
10. a vendor change updates the RoPA without replaying purchase fulfillment;
11. a privacy-request workflow cannot delete legally retained transaction evidence needed for disputes/restores;
12. a RoPA update cannot delete purchased Diamonds;
13. a privacy/vendor migration cannot restart 30-Day VIP;
14. a DPIA or DPO decision cannot create a Lifetime VIP expiry;
15. a required DPIA with unresolved high residual risk blocks launch pending Article 36 handling;
16. a processing activity that requires a DPIA triggers a German § 38 DPO check regardless of headcount;
17. a voluntary privacy consultant is not falsely presented as a statutory DPO without the required position/independence setup;
18. a business transfer updates controller/RoPA/public-notice status without dropping entitlement evidence;
19. a security emergency is documented after immediate containment rather than becoming undocumented permanent processing;
20. Apple/Google/Xsolla store/provider declarations are compared against actual deployed processing instead of being copied blindly.

## 16. Release evidence packet

Maintain a lightweight, access-controlled packet containing:

- current TycoonX RoPA;
- processing/activity owner and review dates;
- processor/subprocessor/vendor register cross-reference;
- retention schedule cross-reference;
- international-transfer map cross-reference;
- privacy-by-design decision notes for material features;
- DPIA screening decisions;
- completed DPIAs and review dates where required;
- Article 36 consultation correspondence where applicable;
- current DPO necessity assessment under Article 37 GDPR and § 38 BDSG;
- DPO designation/contact/involvement evidence where applicable;
- relevant Apple privacy, Google Data safety and provider configuration snapshots;
- production release/test evidence for the scenarios above.

Do not collect extra player data merely to prove compliance. The evidence packet itself must be access-controlled and retained proportionately.

## 17. Current legal checkpoint reviewed September 2, 2026

This gate reflects the currently applicable GDPR accountability framework, including:

- GDPR Article 5(2) accountability;
- Article 24 controller responsibility;
- Article 25 data protection by design and by default;
- Article 30 records of processing activities;
- Article 35 DPIA requirements;
- Article 36 prior consultation;
- Articles 37-39 DPO designation, position and tasks;
- German BDSG § 38 additional DPO triggers for non-public bodies.

Current EDPB materials also emphasize that organisations should keep records of processing, implement privacy by design/default and conduct DPIAs before processing likely to create high risk. The EDPB's 2026 DPIA template consultation has closed, but its public page still states that the template will be finalised after consultation; re-check the final status before treating a particular template version as final authority.

The EU has also been considering amendments that would simplify the Article 30(5) recordkeeping derogation. Until an amendment is enacted, enters into force and applies, CK-Labs must follow the current consolidated GDPR rather than a proposed future threshold.

## 18. Release decision

A material TycoonX data-processing feature is **not release-ready** if:

- CK-Labs cannot identify the processing in its RoPA;
- the actual SDK/provider/data flow materially contradicts the Privacy Policy or store disclosure;
- a high-risk feature skipped required DPIA screening;
- a required DPIA is incomplete or leaves unresolved high residual risk without the required Article 36 path;
- a German DPO obligation created by GDPR Article 37 or BDSG § 38 has not been assessed;
- privacy-by-default settings expose or retain more personal data than needed without a documented lawful reason;
- a vendor/transfer change is undocumented;
- the release would use a privacy/compliance change to damage unrelated purchased Diamonds, alter the original one-time 30-Day VIP period or weaken a valid Lifetime VIP entitlement.

This gate protects CK-Labs by making privacy compliance auditable and feature-specific without creating promises beyond mandatory law or disclosing sensitive anti-abuse/security details.