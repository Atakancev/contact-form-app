# TycoonX GDPR Processor, Subprocessor and Vendor Release Gate

Last reviewed: **September 2, 2026**

Purpose: operationalize the provider language already present in the canonical TycoonX Privacy Policy and create a concrete GDPR Article 28 gate for CK-Labs before any vendor, SDK, infrastructure provider, support tool, AI service, authentication provider, analytics service, payment integration, moderation service, notification service, or other third party processes personal data on CK-Labs' behalf.

This is an internal release/compliance gate. It does not replace transaction-specific legal advice and it does not waive any mandatory privacy, security, consumer, payment, or platform rights.

## P0 release rule

Before a provider receives TycoonX personal data on CK-Labs' behalf, CK-Labs must be able to identify and document:

1. the exact contracting and processing legal entity;
2. the real GDPR role for each relevant processing activity;
3. the categories of personal data and affected users;
4. the purpose, nature, duration, and instructions for the processing;
5. the provider's technical and organisational safeguards;
6. the Article 28 contract or other binding legal act where the provider is a processor;
7. all material subprocessors and the authorization mechanism for changes;
8. the international-transfer mechanism for any third-country access or onward transfer;
9. deletion, return, retention, backup, and export behavior at termination;
10. breach, data-subject-rights, DPIA, regulator, and audit assistance;
11. the provider's own secondary-use, training, advertising, analytics, or product-improvement rights;
12. the Privacy Policy, platform disclosures, records of processing, and consent/disclosure parity; and
13. an owner and review date for the vendor record.

A provider being large, well known, certified, listed in a marketplace, available through an official SDK, or described by marketing materials as `GDPR compliant` is not enough by itself.

## 1. Role classification is factual, not a label

Use GDPR Articles 4, 26, and 28 together with the EDPB's final Guidelines 07/2020 on controllers and processors.

The practical question is who actually determines the purposes and essential means of the processing.

For each processing activity, classify the provider as one or more of:

- **processor** acting on CK-Labs' documented instructions;
- **subprocessor** engaged by a processor for CK-Labs-controlled processing;
- **independent controller** determining its own purposes and essential means;
- **joint controller** where CK-Labs and another party jointly determine purposes and essential means; or
- **recipient with another lawful role** where the facts do not fit a processor relationship.

A single company can have different roles for different activities. Do not force every Apple, Google, Xsolla, cloud, fraud, analytics, or support activity into one global role.

If a provider that is supposed to be a processor starts determining its own purposes and means for a processing activity, Article 28(10) can make it a controller for that processing. The contract label does not prevent that consequence.

Official reference:
https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en

## 2. Article 28(1): sufficient guarantees before use

CK-Labs may use a processor only where it provides sufficient guarantees to implement appropriate technical and organisational measures so that the processing meets GDPR requirements and protects data-subject rights.

The assessment must be proportionate to the data and risk. Depending on the service, evidence can include:

- security documentation and access-control design;
- encryption and key-management information;
- authentication and administrator controls;
- vulnerability and patch-management practices;
- logging and incident response;
- deletion and backup lifecycle;
- resilience and disaster recovery;
- privacy/security certifications where relevant;
- staff confidentiality and access restrictions;
- data-location and subprocessor information;
- prior material incident history where lawfully available;
- contractual commitments; and
- the provider's ability to assist CK-Labs with GDPR obligations.

Certification can support the assessment but does not replace the contract, role analysis, configuration review, or CK-Labs' own accountability.

## 3. Article 28(3): the processor contract must match reality

Where Article 28 applies, processing must be governed by a binding written contract or other legal act, including electronic form, that covers the real processing.

At minimum the operative terms must address:

- subject matter and duration;
- nature and purpose;
- types of personal data;
- categories of data subjects;
- CK-Labs' rights and obligations;
- documented processing instructions, including international transfers where relevant;
- confidentiality obligations for authorized personnel;
- Article 32 security measures;
- subprocessor conditions;
- assistance with data-subject requests;
- assistance with security, breaches, DPIAs, and prior consultation where applicable;
- deletion or return of personal data after the service ends, subject to lawful retention;
- information needed to demonstrate compliance;
- audit and inspection rights as required by Article 28; and
- the processor's duty to tell CK-Labs if an instruction would infringe the GDPR or other applicable EU or Member State data-protection law.

Do not accept a DPA whose annexes say only `customer data` or `standard services` when TycoonX actually sends identifiable account, support, moderation, security, purchase, or authentication information.

Official legal baseline: GDPR Article 28.

## 4. Documented instructions and secondary use

A processor must process personal data only on CK-Labs' documented instructions unless Union or Member State law requires the processor to do otherwise. Where legally permitted, the processor must inform CK-Labs before processing required by such law.

The provider record must identify:

- the permitted purpose;
- permitted data categories;
- permitted retention period;
- permitted support/admin access;
- permitted regions;
- permitted subprocessors;
- whether model training, product improvement, advertising, profiling, or unrelated analytics are allowed; and
- the configuration that implements those limits.

If CK-Labs intends a vendor to act purely as a processor, unrelated provider training, advertising, sale of personal data, or independent reuse is a release blocker unless the role, legal basis, transparency, platform rules, and user rights for that separate activity have been reviewed and lawfully implemented.

A checkbox in a provider dashboard is part of the real compliance state. Preserve evidence of material privacy/security configuration, not only the signed DPA.

## 5. Article 28(2) and (4): subprocessor authorization

A processor must not engage another processor for CK-Labs-controlled processing without the required prior specific or general written authorization.

Where general written authorization is used:

1. the processor must inform CK-Labs of intended additions or replacements of subprocessors;
2. CK-Labs must have a genuine opportunity to object before the change affects the relevant processing;
3. CK-Labs must assess material changes to data, purpose, location, security, and transfer risk; and
4. the new subprocessor must receive the same data-protection obligations required for the relevant processing.

The initial processor remains responsible to CK-Labs for the subprocessor's performance of those obligations as provided by Article 28(4).

Do not treat a hidden, stale, or unreachable subprocessor web page as an adequate operational change process. Maintain a working notification route and review owner.

An objection process must have a practical outcome. If CK-Labs reasonably objects because the proposed arrangement cannot lawfully protect TycoonX data, CK-Labs must be able to prevent that processing, change configuration, remove the affected feature/provider, or use another lawful solution.

## 6. International transfers remain a separate gate

An Article 28 DPA does not by itself solve GDPR Chapter V.

For every processor or subprocessor outside the EEA, and for relevant remote access or onward transfers, run:

`TYCOONX_GDPR_INTERNATIONAL_TRANSFER_RELEASE_GATE.md`

The processor/subprocessor register must link to the actual adequacy, DPF, SCC, or other lawful transfer analysis where required.

An EU data center does not prove that support staff, backups, logs, subprocessors, or emergency administrators never access data from a third country.

## 7. Security and Article 32 parity

The processor's safeguards must be appropriate to the actual TycoonX data and risk.

Higher-risk examples include:

- authentication secrets or account-recovery data;
- private communications and support attachments;
- moderation evidence;
- fraud and anti-abuse evidence;
- IP/device/session information;
- purchase and entitlement history;
- security incident artifacts; and
- data concerning minors where processed.

Do not send a high-risk dataset to a vendor merely because the vendor already processes a lower-risk analytics event.

Security review must include least privilege, environment separation, production access, credential handling, logging, encryption, deletion, backup lifecycle, incident response, and secure provider offboarding as relevant.

## 8. Breach notification from processor to CK-Labs

GDPR Article 33(2) requires a processor to notify the controller without undue delay after becoming aware of a personal-data breach.

The provider contract and incident runbook must therefore give CK-Labs a route that is fast enough to run CK-Labs' own Article 33 and Article 34 analysis and, where applicable, the 72-hour supervisory-authority clock.

For material processors, preserve:

- security/breach contact channel;
- escalation path;
- time first reported to CK-Labs;
- affected systems and data categories;
- known/estimated users affected;
- containment and remediation information;
- subprocessor involvement;
- cross-border implications; and
- follow-up/update cadence while facts are incomplete.

A vendor saying `investigation ongoing` does not pause CK-Labs' legal clock once CK-Labs itself has enough certainty to be aware of a personal-data breach.

Run the separate GDPR breach gates when applicable.

## 9. Data-subject-rights assistance

A processor must assist CK-Labs, taking account of the nature of the processing, with appropriate technical and organisational measures for data-subject requests.

Before release, determine whether the provider can support, where applicable:

- access;
- rectification;
- deletion;
- restriction;
- objection-related implementation;
- portability/export;
- consent-related deletion or suppression; and
- account-deletion workflows.

The provider must not require a TycoonX player to open a separate provider account merely to exercise rights that CK-Labs is responsible for handling, unless the legal/role architecture genuinely requires the person to deal directly with an independent controller.

Processor deletion must not silently destroy records CK-Labs is lawfully required to retain, while lawful retention must not be used to keep unrelated personal data indefinitely.

## 10. End of service: return, deletion, and transition

At the end of processor services, Article 28 requires deletion or return of personal data at the controller's choice, unless applicable law requires storage.

The offboarding plan must distinguish:

- active production data;
- backups and disaster-recovery copies;
- logs;
- support exports;
- local caches;
- provider-generated derivatives that remain personal data;
- subprocessors; and
- evidence that must lawfully be retained.

Record the deletion/return request, completion evidence, backup expiration timeline, known legal-retention exception, and subprocessor completion where relevant.

Provider replacement is not permission to replay purchase events or rebuild entitlements from unverified data.

## 11. Audits and compliance evidence

Article 28 requires processors to make available information needed to demonstrate compliance and to allow/contribute to audits and inspections by the controller or its mandated auditor.

For a solo operator, this does not mean CK-Labs must physically inspect every hyperscale provider's data center. A proportionate evidence model can rely on appropriate third-party audit reports, certifications, security documentation, contractual audit rights, questionnaires, or targeted follow-up where these provide sufficient evidence for the actual risk.

However, a contract that categorically prevents CK-Labs from obtaining any meaningful Article 28 compliance evidence is a blocker for processor use.

Document exceptions and risk acceptance rather than treating `enterprise vendor` as automatic proof.

## 12. Apple, Google, and Xsolla role separation

Do not describe Apple, Google, or Xsolla globally as CK-Labs processors.

The canonical Privacy Policy correctly states that Apple, Google, Xsolla, banks, card networks, and other payment participants may act as independent controllers for parts of their own payment, fraud, tax, account, or platform processing.

Current provider checkpoints:

### Apple
Apple's current App Review Guidelines require TycoonX to disclose its data practices and confirm that third parties receiving app user data, including analytics tools, advertising networks, and third-party SDKs, provide the same or equivalent protection stated in the app privacy policy and required by Apple's rules.

This platform responsibility is additional to GDPR role classification. Apple policy does not turn every SDK vendor into an Article 28 processor.

Official source:
https://developer.apple.com/app-store/review/guidelines/

### Google Play
Google Play's current User Data policy states that developers remain responsible for third-party code and SDK practices involving app user data. CK-Labs must ensure integrated third-party code complies with Google Play's use, disclosure, consent, and user-data requirements.

This also does not replace the GDPR role analysis or Article 28 DPA where applicable.

Official source:
https://support.google.com/googleplay/android-developer/answer/10144311

### Xsolla
Xsolla's current Privacy Policy expressly says its role varies with the relationship. For sales of digital content under its EULA it primarily describes Xsolla entities as a business or joint controller for the processing covered by that policy, while noting that Xsolla can also act as a processor/service provider under particular partner arrangements.

Therefore CK-Labs must classify the exact Xsolla product and data flow actually used by the TycoonX webshop. Merchant-of-record, payment, fraud, tax, support, Login, and partner-service activities must not be collapsed into one assumed role.

Official source:
https://xsolla.com/privacypolicy

## 13. SDK and dependency change gate

Every new SDK or material SDK version can change actual data processing even if the app's visible feature does not change.

Before shipping a new or materially changed SDK:

1. review the SDK's current data collection and default settings;
2. compare them with TycoonX Privacy Policy disclosures;
3. update App Store privacy declarations and Google Play Data safety where necessary;
4. classify the provider role;
5. verify Article 28 terms if the provider is a processor;
6. review subprocessors and transfer routes;
7. disable unnecessary data collection and secondary use where possible;
8. verify consent/prominent-disclosure requirements where applicable; and
9. preserve the version and review evidence.

Google Play explicitly makes developers responsible for SDK-caused User Data policy violations. Apple likewise requires equivalent third-party protection and accurate disclosure.

## 14. AI, moderation, support, and fraud vendors

These providers can receive especially sensitive operational context even when no GDPR special-category data is intentionally collected.

Do not send unrestricted private chats, support attachments, payment disputes, security evidence, identity material, or full account histories to a third-party AI, moderation, support, or fraud provider merely because an API is convenient.

For each such provider:

- minimize fields;
- define the purpose;
- define retention;
- identify model-training or product-improvement behavior;
- disable unrelated reuse where the intended role requires it;
- restrict support/admin access;
- identify subprocessors;
- assess international transfers;
- document deletion and DSR support; and
- ensure automated outputs do not become unreviewable entitlement or account-enforcement decisions where law or TycoonX policy requires human review.

## 15. Payment and entitlement isolation

Vendor governance must never become an accidental entitlement mutation path.

A DPA change, subprocessor change, vendor outage, privacy complaint, deletion request, provider offboarding, or transfer-mechanism change must not by itself:

- delete or duplicate legitimately purchased Diamonds;
- replay Apple, Google Play, or Xsolla purchase events;
- restart, shorten, extend, or duplicate the original one-time **30-Day VIP** period;
- create an undisclosed expiry for valid **Lifetime VIP**;
- convert Lifetime VIP into 30-Day VIP;
- manufacture a refund or chargeback event;
- label a legitimate purchase as fraud; or
- erase evidence CK-Labs must lawfully preserve for a real entitlement dispute.

Where a data-subject request affects account-linked data, use the dedicated privacy/deletion and entitlement gates so that privacy compliance and valid payment records are reconciled lawfully.

## 16. Provider failure, replacement, and emergency migration

A security or availability emergency can justify rapid provider replacement, but not undocumented indefinite processing.

Before or as soon as safely possible during an emergency migration:

- identify the replacement provider and role;
- limit data to what is necessary for containment/service restoration;
- execute or verify Article 28 terms where required;
- establish the international-transfer route where required;
- verify key security configuration;
- document temporary subprocessors;
- preserve the incident timeline; and
- complete the normal vendor review before the temporary arrangement becomes permanent.

An emergency does not authorize sending a full production database to an unreviewed personal account, consumer AI tool, unmanaged file share, or unrelated support service.

## 17. Business sale, merger, or successor operator

A business sale or reorganization does not automatically convert every vendor contract or DPA to the successor operator.

Before a successor operates TycoonX, review:

- assignment/change-of-control clauses;
- controller identity;
- processor instructions;
- DPA parties;
- subprocessor notices;
- international-transfer mechanisms;
- security contacts;
- provider account ownership and credentials;
- Privacy Policy/operator disclosures; and
- deletion/return obligations for the old operator.

Do not leave providers processing under obsolete instructions issued by an operator that no longer controls the service.

## 18. Vendor register required

Maintain a dated register with at least:

| Field | Required evidence |
| --- | --- |
| Provider | Product/service name |
| Legal entity | Exact contracting/processing entity |
| Feature | Hosting, auth, payments, AI, analytics, support, etc. |
| Role | Processor, subprocessor, independent controller, joint controller, other |
| Data | Specific categories |
| Data subjects | Users, support contacts, minors where relevant, etc. |
| Purpose/instructions | What the provider may do |
| DPA / Article 28 | Contract/version/date if applicable |
| Security evidence | TOMs, reports, configuration review |
| Subprocessors | List/source and notification method |
| Transfer route | Link to Chapter V assessment |
| Retention/deletion | Active, backup, termination treatment |
| Breach contact | Operational route |
| DSR support | Export/delete/restrict capability |
| Secondary use | Training, advertising, analytics, product improvement |
| Platform disclosure | Apple privacy / Google Data safety / consent parity |
| Privacy parity | Canonical Privacy Policy / ROPA mapping |
| Owner / review date | Responsible person and next review |

For a solo operator, the responsible owner can be CK-Labs' operator, but the field must still be explicit.

## 19. Release-blocking failures

Treat the following as blockers for the affected processing:

- provider legal entity unknown;
- controller/processor role not classified for a material processing activity;
- no Article 28 contract where the provider acts as a processor;
- DPA annexes that materially fail to describe the actual TycoonX processing;
- undisclosed or uncontrolled provider secondary use inconsistent with the intended processor role;
- no workable subprocessor authorization/change process;
- no ability to identify material subprocessors;
- no lawful Chapter V route where required;
- no processor breach-notification route;
- no meaningful deletion/return treatment at service end;
- provider cannot reasonably assist with applicable data-subject rights;
- no meaningful evidence of security for high-risk processing;
- privacy policy or store disclosures materially contradict the provider's real data handling;
- SDK behavior materially exceeds disclosed/authorized collection; or
- emergency provider use has become indefinite without completing the normal review.

## 20. Regression scenarios

Before treating this gate as production-ready, test/document at least these cases:

1. New hosting vendor processes account and gameplay identifiers on CK-Labs' instructions.
2. Existing hosting vendor adds a new non-EEA support subprocessor.
3. Processor provides only a generic DPA with blank security/data annexes.
4. Analytics SDK begins collecting a new device identifier after an SDK update.
5. SDK has collection enabled by default that TycoonX does not need.
6. Support provider wants to use ticket content to train its own general-purpose model.
7. AI provider is configured with training disabled and a documented retention limit.
8. Provider suffers a breach and notifies CK-Labs while facts remain incomplete.
9. Provider refuses to support deletion of data it processes solely for CK-Labs.
10. Provider contract ends and backups expire on a documented later lifecycle.
11. Provider is an independent controller for payment fraud/tax processing rather than a processor.
12. Xsolla has different roles for payment sale processing and a separate partner service.
13. Apple or Google changes a platform privacy requirement affecting third-party SDK disclosure.
14. General subprocessor authorization notice arrives and CK-Labs objects on documented security grounds.
15. Emergency vendor is introduced during an outage and then reviewed before becoming permanent.
16. Business successor takes over TycoonX and processor contracts/instructions are reassigned or replaced.
17. Account deletion requires a processor deletion request while minimal lawful purchase evidence is retained separately.
18. Provider offboarding must not duplicate Diamonds.
19. Provider callback retry must not restart 30-Day VIP.
20. Vendor migration must not create a hidden Lifetime VIP expiry.

## 21. Canonical and localization rule

This gate currently **does not materially change** the canonical public Privacy Policy.

The Privacy Policy already states that CK-Labs may use providers for hosting, databases, authentication, storage, analytics, diagnostics, moderation, communications, notifications, security, payment/platform operations, and other technical operations; that providers receive only information reasonably necessary for their roles and are subject to applicable contractual/legal safeguards; that Apple, Google, Xsolla and payment participants may act as independent controllers for parts of their own processing; and that international transfers use appropriate safeguards where required.

Therefore the 25 localized Privacy documents remain current and the completed localization queue remains closed.

If a future provider materially changes the public meaning, for example by creating a new data purpose, recipient category, AI use, advertising use, materially different retention, new controller-sharing arrangement, new user-facing consent requirement, or other disclosure not already covered, update the canonical English Privacy Policy first and then reopen and synchronize **all 25 localized Privacy documents** in the required order.

## 22. Safe verification only

No production database changes are needed for this gate. Do not expose live personal data, credentials, payment tokens, or support attachments merely to test vendor compliance.

Use contracts, DPAs, privacy notices, subprocessor lists, provider security documentation, dashboard configuration, SDK manifests, test accounts, and synthetic test data.

## Current official-source snapshot, September 2, 2026

- GDPR Article 28 remains the legal baseline for processor selection, contracts, subprocessors, assistance, audits, deletion/return, and processor instructions.
- EDPB Guidelines 07/2020 remain the final EDPB guidance on factual controller/processor role classification.
- Commission Implementing Decision (EU) 2021/915 remains available as standard contractual clauses for controller-processor contracts under Article 28(7); using those clauses does not remove the need to populate the real processing details or separately satisfy Chapter V where applicable.
- Apple's current App Review Guidelines continue to require accurate privacy disclosure and same/equivalent protection by third parties receiving app user data.
- Google Play's current User Data policy continues to make the developer responsible for third-party code/SDK data practices in the app.
- Xsolla's Privacy Policy, current as of this review, expressly describes role-dependent processing and says it can act as a business/joint controller for relevant sale processing and as a processor/service provider in certain partner arrangements.

Re-check provider terms and official platform policies at the time a material integration changes. Do not freeze a 2026 provider role or subprocessor list indefinitely.
