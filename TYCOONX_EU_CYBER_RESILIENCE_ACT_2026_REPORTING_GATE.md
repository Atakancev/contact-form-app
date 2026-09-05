# TycoonX EU Cyber Resilience Act 2026 Reporting Gate

Last reviewed: 2026-09-05

This is a release and operations checklist for CK-Labs. It is not a substitute for case-specific legal advice.

## Why this is a P0 now

TycoonX went to full release on **September 1, 2026**. The EU Cyber Resilience Act, Regulation (EU) 2024/2847 (CRA), applies its Article 14 manufacturer reporting obligations from **September 11, 2026**, before the CRA's main obligations generally begin on **December 11, 2027**.

The European Commission states that the September 11, 2026 reporting duties apply to in-scope products with digital elements already placed on the Union market, including products placed on the market before December 11, 2027.

TycoonX is network-connected software made available commercially. Under the CRA, a "product with digital elements" includes software and relevant remote data-processing solutions, and a "manufacturer" includes a person that develops a product with digital elements and markets it under its name or trademark, whether for payment, monetisation, or free of charge. On that basis, TycoonX should be treated as potentially in scope unless a documented legal assessment establishes otherwise.

Do not assume that being a solo developer, microenterprise, mobile app, computer game, free download, or App Store/Google Play-distributed product removes the September 11 reporting obligation. The Commission's current conformity-assessment guidance lists **mobile applications and computer games** as examples in the default CRA product category, normally eligible for manufacturer self-assessment under the later conformity regime.

The Commission published practical CRA implementation guidance on **July 27, 2026**. ENISA's CRA Single Reporting Platform FAQ was updated on **September 4, 2026**. As of that update, ENISA states that the Single Reporting Platform (SRP) is scheduled to be operational from September 11, 2026 and that the dedicated public SRP URL will be published before the platform goes live. CK-Labs must not claim that the SRP is already live, validated, or tested by CK-Labs until that is actually verified.

## Official references

- Regulation (EU) 2024/2847: https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng
- European Commission CRA policy page: https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act
- European Commission CRA implementation guidance, July 27, 2026: https://digital-strategy.ec.europa.eu/en/library/commission-publishes-new-guidance-support-timely-cyber-resilience-act-implementation
- European Commission CRA implementation FAQs: https://digital-strategy.ec.europa.eu/en/library/cyber-resilience-act-implementation-frequently-asked-questions
- ENISA CRA Single Reporting Platform: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp
- ENISA CRA SRP FAQ, updated September 4, 2026: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/frequently-asked-questions
- ENISA SRP Assigned Representative guidance: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp

## P0 gate 1: Confirm TycoonX CRA role and reporting route

Before September 11, 2026:

- [ ] Record the legal or natural person that places TycoonX on the EU market under the relevant name or trademark and confirm who is the CRA manufacturer for TycoonX.
- [ ] Record the Member State of the manufacturer's main establishment for CRA reporting. Article 14(7) primarily uses where decisions related to the cybersecurity of the manufacturer's products with digital elements are predominantly taken.
- [ ] Identify the **CSIRT designated as coordinator** for that Member State and preserve the then-current official route.
- [ ] Keep the detailed Article 14(7) fallback analysis in `TYCOONX_CRA_SRP_ROUTING_USER_NOTIFICATION_RELEASE_GATE.md`. Do not choose a country merely because Apple, Google Play, Xsolla, a cloud provider, a data centre, or a storefront is located there.
- [ ] Keep a simple list of EU Member States where TycoonX is made available because the reporting process can require that information.
- [ ] Re-check the official SRP page, dedicated public URL, FAQ revision date, CSIRT list, user guidance, and helpdesk immediately before September 11 and before any real submission.

Do not wait for the December 2027 general compliance date before completing the reporting setup.

## P0 gate 1A: Current SRP access and Assigned Representative workflow

ENISA's **September 4, 2026** FAQ states or confirms the following operational rules:

- the dedicated public SRP URL is to be published before the platform goes live;
- Assigned Representatives use a **personal EU Login with Multi Factor Authentication (MFA)** enabled;
- EU Login accounts are personal and should not be treated as a shared functional identity;
- there can be **one Primary AR and up to 20 Secondary ARs** for a manufacturer;
- the Primary AR creates the initial manufacturer association and can invite or remove Secondary ARs;
- the selected CSIRT designated as coordinator validates the AR-manufacturer association;
- validation runs in parallel with reporting and must not be used as a reason to miss a legal deadline;
- a **non-validated AR can submit up to 20 notifications** for one manufacturer before validation becomes mandatory;
- ENISA currently advises manufacturers to have EU Login ready and initiate SRP registration/validation when a notification needs to be submitted rather than creating unnecessary advance validation workload;
- **no reporting API is provided in the initial SRP release**, so CK-Labs may automate internal evidence collection but must support a human completing the official SRP submission;
- at initial launch, the SRP is intended for mandatory CRA reporting; voluntary reporting functionality is planned for a later phase; and
- the SRP is **different from the European Vulnerability Database (EUVD)**. A CVE or EUVD record can be useful evidence but does not replace a mandatory SRP notification.

- [ ] Have at least one responsible person's EU Login and MFA usable before September 11.
- [ ] Document a backup responsible person or emergency-access procedure so one person's absence does not consume most of a 24-hour legal window.
- [ ] Do not use a shared password or shared EU Login account as the fallback.
- [ ] Keep the legal entity name, product name, coordinator CSIRT, and internal incident owner ready for a fast registration/submission path.

## P0 gate 1B: Do not use the SRP countdown display as the legal deadline clock

The September 4 ENISA FAQ contains a current implementation detail that can cause a false deadline impression if CK-Labs relies only on the SRP interface.

ENISA states that the current **72-hour counter** is calculated by showing a due date/time **48 hours after the 24-hour report is submitted**, rather than from the legal awareness timestamp. ENISA warns that this can make a notification appear overdue before 72 hours have actually elapsed from awareness. ENISA says this logic is intended to be updated in a future release so the counter uses the awareness field.

This means:

- [ ] Record the first reliable **awareness timestamp** in CK-Labs' own incident record.
- [ ] Calculate the 24-hour and 72-hour deadlines independently from that awareness timestamp.
- [ ] Treat SRP counters and reminder emails as operational aids, not as the authoritative legal clock.
- [ ] Do not delay a filing because the SRP counter appears to allow more time.
- [ ] Do not rewrite the awareness timestamp merely to match the interface counter.
- [ ] Preserve the submitted timestamp, SRP display, and internal deadline calculation where there is any discrepancy.

For final reports, keep the statutory distinction:

- an actively exploited vulnerability final report is due no later than **14 days after a corrective or mitigating measure becomes available**; and
- a severe-incident final report is due within **one month after the submission of the 72-hour incident notification**.

ENISA states that the current SRP does not implement the same type of final-report counter for actively exploited vulnerabilities because that deadline depends on when a corrective or mitigating measure becomes available.

## P0 gate 1C: SRP outage contingency

ENISA's September 4 FAQ gives an explicit rule for temporary platform unavailability:

- [ ] If the **SRP is temporarily unavailable**, preserve evidence of the outage and continue preparing the report.
- [ ] Submit the required notification through the SRP as soon as it becomes available again.
- [ ] If immediate communication is necessary before restoration, **contact the designated CSIRT directly** using a verified official channel.
- [ ] A direct CSIRT contact during the outage does **not** replace the SRP filing. The notification still has to be submitted through the SRP once it is available again.
- [ ] Do not change the incident awareness timestamp or fabricate a later awareness time because the platform was unavailable.
- [ ] Preserve screenshots, timestamps, error messages, direct-CSIRT correspondence, and the eventual SRP receipt.

Do not create an unofficial reporting endpoint or send sensitive exploit details to an unverified address merely because the SRP is unavailable.

## P0 gate 1D: Exact SRP field readiness and immutable submission evidence

CK-Labs does not need every final-report fact at the 24-hour stage, but the **current ENISA SRP field matrix** requires more than a generic incident note. For the Early Warning stage, prepare the following before an incident so the legal clock is not spent discovering form requirements:

- **notification type**: actively exploited vulnerability or severe incident — required;
- **notification level**: 24-hour Early Warning — required;
- **title** — required;
- **summary** — required;
- **manufacturer name** — required;
- **product name**: **TycoonX** — required;
- **product version** — required;
- **Member States where the product is available** — required if that information is available;
- for an **actively exploited vulnerability**, the date/time when CK-Labs became aware — required; and
- for a **severe incident**, whether unlawful or malicious acts are suspected and the date/time when CK-Labs became aware — required.

Do **not** weaken the product-version field to “where known”. Keep an incident-ready version map for the current iOS, Android, web/backend and relevant remote-processing releases. If the exact affected version boundary is genuinely uncertain, provide the most accurate factual version information the SRP accepts, identify the uncertainty in the summary or appropriate field, and update it as facts develop. Do not invent a version and do not delay a required Early Warning merely to achieve perfect root-cause certainty.

The current ENISA matrix treats **product type, product class, product category, end-of-support indicator, component name, expected-shortly mitigation, user action and attack vector** as optional at the 24-hour stage. Collect them when useful, but do not let optional classification work consume the legal filing window.

At the **72-hour stage**, the current matrix requires, among other applicable fields, corrective or mitigating measures taken and measures users can take. For actively exploited vulnerabilities, general vulnerability information becomes required. For severe incidents, general information about the nature of the incident and an initial assessment become required. Continue using the same notification record and update carried-forward fields where the facts have changed.

At the **final-report stage**, complete the type-specific mandatory facts. For an actively exploited vulnerability this includes the date a corrective or mitigating measure became available and the required severity/impact description. For a severe incident this includes the required mitigation, severity, impact and likely threat/root-cause information. Do not copy an old draft forward without checking what became mandatory at the later stage.

ENISA currently states that **only one notification is required for a given actively exploited vulnerability or severe incident**, even where a manufacturer has multiple EU branches or subsidiaries or a parent company outside the EU. CK-Labs must coordinate internally rather than create duplicate corporate filings for the same occurrence.

The current Assigned Representative guidance also states that the notification becomes **non-editable after the Final Report is submitted**. Before final submission, verify the factual record, preserve a local immutable copy, and keep any later authority-requested clarification or correction as separate dated evidence rather than silently rewriting the historical submission.

- [ ] Record each field as confirmed, unknown, estimated, not applicable, or pending verification instead of inventing certainty.
- [ ] Preserve the submitted **24-hour, 72-hour and final-report versions as immutable evidence**, together with acknowledgements, corrections, supplements, and CSIRT requests.
- [ ] Preserve the SRP notification ID and all submission timestamps.
- [ ] Continue later stages on the same incident/notification record where the SRP workflow requires it.
- [ ] Do not create a second notification merely because another CK-Labs contact, branch, provider, platform, or internal team becomes involved in the same occurrence.

## P0 gate 2: Know what triggers mandatory reporting

### Actively exploited vulnerability

The CRA defines an actively exploited vulnerability as a vulnerability for which there is **reliable evidence that a malicious actor has exploited** it in a system without the system owner's permission.

TycoonX examples requiring immediate CRA assessment include:

- a remotely exploitable authentication bypass being used against real TycoonX accounts;
- a vulnerability used to obtain another player's session, personal data, payment-related data, or privileged game state;
- malicious exploitation of a TycoonX client, backend-facing protocol, or remote-processing component where that component forms part of the product under the CRA; or
- reliable evidence that attackers are exploiting a shipped vulnerability even if CK-Labs has already begun developing a fix.

A theoretical weakness, scanner result, bug report, or vulnerability with no reliable evidence of malicious exploitation is not automatically an actively exploited vulnerability under Article 14. It can still require urgent remediation and may trigger another legal or platform process.

### Severe incident having an impact on product security

Article 14 treats a **severe incident** as one meeting the statutory security-impact criteria, including where it negatively affects or is capable of negatively affecting the product's ability to protect the availability, authenticity, integrity or confidentiality of sensitive or important data or functions, or where it has led or is capable of leading to malicious code being introduced or executed in the product or a user's systems.

TycoonX examples requiring immediate CRA assessment include:

- compromise of authentication or session integrity capable of exposing important account functions;
- security-driven corruption of authoritative entitlement or payment state;
- malicious code execution enabled through TycoonX or a relevant component;
- a security incident capable of materially exposing private chats, account identifiers, credentials, or other sensitive data; or
- a supply-chain compromise affecting a shipped TycoonX dependency where the CRA severe-incident criteria are met.

Ordinary service downtime, a non-security economy imbalance, a harmless UI bug, or a routine failed payment is not automatically a CRA severe incident. Classify the actual security effect.

## P0 gate 2A: September 11 transition and older products

The September 4 ENISA FAQ points to the Commission's CRA guidance confirming that Article 14 reporting applies from **September 11, 2026** to all in-scope products with digital elements, including products placed on the market before December 11, 2027.

For vulnerabilities whose exploitation predates September 11:

- if the manufacturer was already aware of the active exploitation before September 11, 2026, the current Commission/ENISA guidance does not require a retrospective Article 14 report merely because the reporting regime starts; but
- if the manufacturer becomes aware on or after September 11, the Article 14 reporting duty can apply even where the underlying vulnerability or exploitation began earlier.

- [ ] Preserve when CK-Labs first became aware, not merely when a CVE was published or when a third party first discovered the issue.
- [ ] Do not manufacture a pre-September awareness timestamp to avoid a report.
- [ ] Do not mass-file old issues that were already known before the start date merely to create the appearance of compliance.

## P0 gate 3: Statutory reporting clocks

Once CK-Labs becomes aware of a reportable event, preserve the awareness timestamp immediately. Do not reset the clock because investigation is incomplete.

### Actively exploited vulnerability

- **Within 24 hours:** submit the early warning through the CRA Single Reporting Platform, without undue delay.
- **Within 72 hours:** submit the vulnerability notification unless the relevant information was already provided.
- **Final report:** no later than **14 days after a corrective or mitigating measure becomes available**.

### Severe incident

- **Within 24 hours:** submit the early warning, including whether unlawful or malicious acts are suspected.
- **Within 72 hours:** submit the incident notification unless the relevant information was already provided.
- **Final report:** within **one month after the submission of the 72-hour incident notification**.

- [ ] The incident record must identify who assessed reportability and when.
- [ ] Do not wait for full root-cause certainty before the 24-hour warning.
- [ ] Do not wait for every affected user, country, or indicator before the 72-hour stage where the process permits available information to be submitted and supplemented later.
- [ ] Update the report if the coordinator CSIRT requests an intermediate status report.
- [ ] Treat CRA reporting independently from GDPR breach reporting, DSA reporting, Apple/Google security escalation, payment-provider reporting, or criminal-law notification. One incident can trigger **more than one legal/process clock**.

The Regulation states that the **mere act of making a notification does not itself subject the notifying person to increased liability**. That is not a defence for an underlying security failure, but CK-Labs should not miss a mandatory report merely because it fears that filing the report itself creates additional liability.

## P0 gate 4: User notification is separate from regulator reporting

CRA **Article 14(8) requires manufacturers to inform impacted users**, and where appropriate all users, after becoming aware of an actively exploited vulnerability or severe incident, and where necessary to provide risk-mitigation or corrective measures users can deploy.

This is **not the same threshold as GDPR Article 34**. A CRA user notice must not be skipped merely because a separate GDPR assessment concludes that a personal-data breach is not likely to result in a high risk to individuals.

For TycoonX:

- [ ] Maintain an emergency in-app or post-office notification path that does not depend on waiting for an app-store release.
- [ ] Maintain an email or support-site fallback where direct in-app communication is unavailable.
- [ ] Explain practical action such as updating TycoonX, re-authenticating, revoking sessions, rotating a linked credential where relevant, or avoiding a compromised feature.
- [ ] Decide whether impacted users only or all users should receive the notice.
- [ ] Consider a structured, machine-readable format where appropriate.
- [ ] Do not disclose unnecessary exploit detail that would increase attack risk.
- [ ] Preserve when the notice was issued, to whom, in which languages, by which channel, and what mitigation instructions were provided.

The detailed routing and user/public-notification analysis remains in `TYCOONX_CRA_SRP_ROUTING_USER_NOTIFICATION_RELEASE_GATE.md`.

## P0 gate 5: Sensitive reports and data minimisation

Sensitive exploit information is not a self-created secrecy veto.

- [ ] Do not omit a mandatory CRA report because it contains sensitive security information.
- [ ] Use the CRA/CSIRT sensitivity mechanisms where applicable.
- [ ] Do not assume CK-Labs can **unilaterally prevent** the CSIRT, ENISA, other CSIRTs, or market-surveillance authorities from receiving information the CRA requires them to receive.
- [ ] Apply **GDPR data minimisation** and access controls to incident evidence.
- [ ] Do not put credentials, private keys, reusable tokens, full payment credentials, unrelated private messages, or unnecessary player personal data into a regulatory report.

## P0 gate 6: Human-reachable vulnerability intake and security hotfix path

CK-Labs needs a **human-reachable vulnerability intake** now because a credible external report can start the Article 14 awareness analysis.

- [ ] Keep the public TycoonX security contact reachable by a human.
- [ ] Do not require security researchers to post exploit details publicly.
- [ ] Record the time a credible report is received and the later point at which the Article 14 awareness threshold is reached.
- [ ] Do not threaten good-faith reporters merely for reporting a vulnerability; investigate actual malicious conduct separately.
- [ ] Maintain a way to server-disable or server-gate a vulnerable feature without deleting unrelated paid entitlements.
- [ ] Be able to require a reasonable minimum supported app version where security requires it.
- [ ] Preserve emergency changes so later support, payment, and consumer-remedy disputes can be reconstructed.

## P0 gate 7: Micro/small status is not a reporting exemption

Do **not treat small size as a blanket CRA exemption**. Article 14 reporting applies to in-scope manufacturers even when they are solo developers, microenterprises, or small enterprises.

The CRA contains a narrow penalty protection: qualifying **microenterprises and small enterprises are not subject to administrative fines for missing the 24-hour early-warning deadline** in Article 14(2)(a) or Article 14(4)(a).

That protection does not erase:

- the underlying early-warning duty;
- the **72-hour** vulnerability or incident notification;
- the **final-report** duty;
- the Article 14(8) **impacted-user** notification duty; or
- other CRA or non-CRA obligations triggered by the same event.

Do not design the runbook around the fine exception. Design it to meet the legal deadline.

## P0 gate 8: Apple, Google Play, Xsolla and infrastructure remain separate roles

A store, payment processor, authentication provider, cloud vendor, analytics SDK, communications provider, or CDN can be an important security evidence source without becoming CK-Labs' CRA manufacturer or reporting authority.

- Apple security, StoreKit, or App Store information can trigger investigation but does not replace an SRP filing where Article 14 applies.
- Google Play security, integrity, billing, or policy information can trigger investigation but does not determine CK-Labs' CRA main establishment.
- Xsolla can have its own payment-security, fraud, refund, or chargeback duties, but an Xsolla entity on a receipt does not by itself become the TycoonX CRA manufacturer.
- A cloud, database, authentication, or CDN region does not by itself determine where product-cybersecurity decisions are predominantly taken.
- Do not assume a provider filed CK-Labs' manufacturer report unless the legal role and actual filing are verified.

One provider incident can trigger CRA, GDPR, store, processor, contractual, and consumer-remedy workflows at the same time. Keep the clocks and evidence linked but legally distinct.

## P0 gate 9: Paid entitlements stay isolated during security response

A CRA report, security containment step, provider outage, CSIRT communication, emergency update, or SRP retry does not itself change a valid purchase transaction.

- [ ] Do not delete or duplicate legitimately purchased **Diamonds** merely because an account, server, region, or provider appears in an incident.
- [ ] Do not restart, pause, shorten, extend, or duplicate the original one-time **30-Day VIP** period merely because security access is temporarily restricted.
- [ ] Do not create a hidden expiry for valid **Lifetime VIP**, downgrade it to 30-Day VIP, or require a new purchase merely because an incident requires account recovery, provider migration, or a security hotfix.
- [ ] Do not replay Apple, Google Play, or Xsolla entitlement events during restoration.
- [ ] If an exploit actually created invalid Diamonds, duplicate entitlements, unauthorized transfers, or fraudulent purchases, correct only the affected state using reliable authoritative evidence and preserve mandatory consumer/payment remedies.
- [ ] Keep a security containment action separate from a refund, chargeback, store revocation, Terms sanction, or account-compromise correction unless the evidence supports both.

Purchased Diamonds continue to follow their transaction-specific rules and do not expire solely because time passes.

30-Day VIP remains a one-time, non-renewing 30-day entitlement.

Lifetime VIP remains a one-time TycoonX entitlement offered only during **selected genuine promotional sales windows**. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase.

## P0 gate 10: Regression scenarios

Before treating the September 2026 process as ready, exercise at least these cases:

1. A researcher reports a theoretical vulnerability with no evidence of exploitation: security triage occurs, but the system does not automatically create an Article 14 mandatory report.
2. Reliable evidence shows active exploitation at 03:00: the awareness timestamp is preserved and the 24-hour process starts immediately.
3. The 24-hour report is submitted ten hours after awareness: the internal 72-hour deadline remains based on awareness, not a later SRP countdown display.
4. The SRP displays an apparently earlier 72-hour due time because it currently counts 48 hours from the 24-hour submission: CK-Labs follows the statutory awareness-based clock and still files without undue delay.
5. The SRP is unavailable: outage evidence is preserved, urgent direct-CSIRT contact is made if necessary, and the SRP filing is completed after restoration.
6. An AR is not yet validated: the current allowed pending-validation submission path is used rather than missing the deadline.
7. A severe incident affects authentication but not payment state: unrelated Diamonds and VIP remain untouched.
8. An account compromise causes unauthorized transfers: only supported affected state is corrected after evidence review.
9. A provider reports a breach: CK-Labs separately evaluates CRA, GDPR, store, and contractual duties rather than assuming the provider handled every obligation.
10. A qualifying issue existed before September 11 but CK-Labs first becomes aware after September 11: the current Article 14 transition rule is evaluated from the awareness date.
11. CK-Labs was already aware of active exploitation before September 11: the event is not mass-filed retrospectively merely because the start date arrives.
12. The 72-hour report is incomplete: available facts are submitted without undue delay and later supplemented rather than waiting for perfect certainty.
13. A corrective measure becomes available for an actively exploited vulnerability: the 14-day final-report clock is recorded from that event.
14. A severe-incident 72-hour notification is submitted: the one-month final-report deadline is recorded from that submission.
15. A security notice is needed for users: practical mitigation is sent without unnecessary exploit details.
16. A duplicate SRP submission or retry occurs: it does not duplicate a Diamond or VIP entitlement event.
17. A security hotfix requires a minimum supported app version: valid paid entitlements remain recoverable and consumer remedies remain separate.
18. A future Lifetime VIP sales window is closed during an incident: incident handling does not reopen the sales window or invalidate an existing valid Lifetime VIP.
19. A tabletop Early Warning lacks a product version, title, or summary: the drill fails and the packet is corrected before production reporting begins.
20. Two CK-Labs contacts or corporate branches identify the same occurrence: they coordinate one SRP notification rather than submitting duplicates.
21. A Final Report is submitted and new information appears later: the historical final submission remains immutable and the later clarification is preserved and routed appropriately rather than assuming the SRP record can still be edited.

## December 11, 2027 roadmap, not a September 2026 substitute

The CRA's main obligations generally apply from December 11, 2027. TycoonX should begin preparing, but those later requirements must not be confused with the September 11, 2026 Article 14 reporting deadline.

Preparation should include:

- cybersecurity risk assessment and technical documentation;
- vulnerability-handling and coordinated vulnerability-disclosure processes;
- secure-by-design and secure-by-default requirements;
- security update processes and support-period decisions;
- product and user information required by Annex II;
- a clearly identifiable vulnerability contact point;
- support-period disclosure;
- software component and SBOM processes where required;
- conformity assessment;
- EU declaration of conformity and CE-marking requirements when applicable; and
- a **cessation-of-operations plan** because the later CRA regime contains manufacturer, user, and authority obligations when a manufacturer ceases operations and can no longer comply.

The Commission's current guidance says most ordinary mobile applications and computer games fall in the default category, normally allowing manufacturer self-assessment under the later conformity regime unless the product's core functionality places it in a stricter category.

## Public legal wording decision

No immediate change to the canonical TycoonX Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards is required solely because Article 14 starts on September 11, 2026. The current public framework already preserves security-emergency measures, mandatory legal obligations, account-compromise investigation, authoritative server/store/payment records, supported-version requirements, provider replacement, lawful entitlement correction, and mandatory consumer rights.

The CRA issue is primarily a **security incident detection, awareness, reporting, routing, and user-notification implementation gate**. If later CRA guidance requires new permanent user-facing product information or support-period wording before December 2027, update the canonical English documents first and then refresh every localized document whose legal meaning changes.

## September 2026 operational status

**BLOCKED until operationally verified for September 11, 2026:**

1. CRA manufacturer and role assessment recorded.
2. Correct CSIRT designated as coordinator and Article 14(7) route recorded.
3. Personal EU Login with MFA is usable.
4. A backup responsible person or emergency-access route exists.
5. The operator knows validation runs in parallel and does not block initial reporting where the current ENISA process permits submission.
6. The runbook does not depend on a reporting API that is not available in the initial SRP release.
7. The September 4 ENISA staged 24h/72h/final field matrix is understood, including required Early Warning title, summary, manufacturer name, TycoonX product name, product version, and type-specific awareness fields.
8. Current iOS, Android, web/backend and relevant remote-processing version identifiers can be produced quickly during an incident.
9. Internal legal deadline calculation is based on awareness and does not trust the current SRP 72-hour counter as the legal clock.
10. SRP outage evidence, direct-CSIRT emergency contact, and later mandatory SRP filing are documented.
11. Article 14(8) impacted-user security-notification path exists.
12. Security evidence and GDPR-minimisation rules exist.
13. A human-reachable vulnerability intake exists.
14. A server-side emergency mitigation and minimum-supported-version path exists.
15. Micro/small status is documented without being treated as a blanket reporting exemption.
16. Paid entitlement isolation is tested for Diamonds, one-time 30-Day VIP, and Lifetime VIP.
17. Internal responders understand that one occurrence should not be duplicated across branches/contacts and that the same notification progresses through later stages.
18. Final-report submission is treated as an immutable operational checkpoint because the current SRP guidance says the notification becomes non-editable afterward.
19. The dedicated SRP public URL, launch status, CSIRT list, and ENISA guidance are re-checked immediately before September 11, 2026 and before any real filing.