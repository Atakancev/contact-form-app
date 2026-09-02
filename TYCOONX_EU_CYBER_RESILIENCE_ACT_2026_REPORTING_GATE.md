# TycoonX EU Cyber Resilience Act 2026 Reporting Gate

Last reviewed: 2026-09-03

This is a release and operations checklist for CK-Labs. It is not a substitute for case-specific legal advice.

## Why this is a P0 now

TycoonX went to full release on **September 1, 2026**. The EU Cyber Resilience Act (Regulation (EU) 2024/2847, CRA) applies its Article 14 manufacturer reporting obligations from **September 11, 2026**, before the CRA's main obligations generally begin on **December 11, 2027**.

The European Commission states that the September 11, 2026 reporting duties apply to in-scope products with digital elements already placed on the Union market, including products placed on the market before December 11, 2027.

TycoonX is network-connected software made available commercially. Under the CRA, a "product with digital elements" includes software and relevant remote data-processing solutions, and a "manufacturer" includes a person that develops a product with digital elements and markets it under its name or trademark, including where monetised or supplied free of charge. On that basis, TycoonX should be treated as potentially in scope unless a documented legal assessment establishes otherwise.

Do not assume that being a solo developer, microenterprise, mobile app, game, free download, or App Store/Google Play-distributed product removes the September 11 reporting obligation. The Commission's current conformity-assessment guidance lists **mobile applications and computer games** as examples in the default CRA product category, normally eligible for manufacturer self-assessment under the later conformity regime.

The Commission published practical CRA implementation guidance on **July 27, 2026**. ENISA's CRA Single Reporting Platform FAQ was most recently updated on **August 31, 2026**. As of September 3, 2026, ENISA still states that the platform is scheduled to be operational by September 11, 2026 and that the dedicated public SRP URL will be published before go-live. CK-Labs must not claim that the SRP is already live, validated, or tested by CK-Labs until that is actually verified.

## Official references

- Regulation (EU) 2024/2847: https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng
- European Commission CRA policy page: https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act
- European Commission CRA reporting guidance: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting
- European Commission CRA summary: https://digital-strategy.ec.europa.eu/en/policies/cra-summary
- European Commission CRA conformity-assessment guidance: https://digital-strategy.ec.europa.eu/en/policies/cra-conformity-assessment
- European Commission July 27, 2026 implementation guidance announcement: https://digital-strategy.ec.europa.eu/en/library/commission-publishes-new-guidance-support-timely-cyber-resilience-act-implementation
- ENISA CRA Single Reporting Platform: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp
- ENISA Single Reporting Platform FAQ, updated August 31, 2026: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/frequently-asked-questions
- ENISA AR registration guidance, updated August 3, 2026: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/cra-srp-guidance-ar-user-registration
- ENISA AR notification guidance, updated August 3, 2026: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/cra-srp-guidance-ar-notification-submission-and-update
- ENISA AR interface guidance, updated August 14, 2026: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/cra-srp-guidance-ar-interface-functions

## P0 gate 1: Confirm TycoonX CRA role and reporting endpoint

Before September 11, 2026:

- [ ] Record the legal or natural person that places TycoonX on the EU market under the relevant name or trademark and confirm who is the CRA "manufacturer" for TycoonX.
- [ ] Record the Member State of the manufacturer's main establishment for CRA reporting purposes. CRA Article 14(7) primarily uses where decisions related to the cybersecurity of the manufacturer's products with digital elements are predominantly taken.
- [ ] Identify the **CSIRT designated as coordinator** for that Member State and preserve the then-current official reporting guidance.
- [ ] Keep the detailed Article 14(7) fallback analysis in `TYCOONX_CRA_SRP_ROUTING_USER_NOTIFICATION_RELEASE_GATE.md`; do not choose a country merely because Apple, Google Play, Xsolla, a cloud provider, a data centre, or a storefront is located there.
- [ ] Create or confirm a **personal EU Login** account for the responsible CK-Labs representative. ENISA's August 31 FAQ says two-factor authentication is required for SRP access and advises against using a functional mailbox as the representative identity.
- [ ] Do not treat advance EU Login creation as proof that the SRP representative is validated. Validation by the selected CSIRT designated as coordinator occurs after first access in parallel with reporting and must not be used as a reason to miss a reporting deadline.
- [ ] ENISA currently advises representatives to initiate SRP registration and validation when a notification actually needs to be submitted rather than creating unnecessary pre-registration workload. Preserve that distinction: have EU Login ready, but follow the then-current ENISA registration instruction.
- [ ] If operationally useful, document who would be the Primary Assigned Representative and who could act as a Secondary/backup representative. ENISA's August 31 FAQ currently describes one Primary AR and up to **20 Secondary ARs** per manufacturer.
- [ ] Do not assume a pending validation blocks reporting. ENISA currently states that a **non-validated AR can submit up to 20 notifications** for a manufacturer while validation is pending.
- [ ] Record a fallback responsible person or emergency-access procedure so one person's temporary unavailability does not consume most of a 24-hour legal window.
- [ ] Keep a simple list of EU Member States in which TycoonX is made available, because the SRP reporting fields and dissemination process can use this information.
- [ ] Re-check the official SRP page, dedicated public URL, FAQ revision date, CSIRT list, user guidance, and helpdesk immediately before September 11 and again before any real submission.

Do not wait for the December 2027 general compliance date before completing this setup.

## P0 gate 1A: Use the current SRP workflow, not a cached August procedure

ENISA's **August 31, 2026** FAQ adds and confirms implementation details that belong in the incident runbook:

- the dedicated public SRP URL is to be published before the platform goes live; do not invent or hard-code an unverified endpoint;
- Assigned Representatives authenticate using a personal **EU Login** with two-factor authentication;
- representative validation is performed by the selected CSIRT designated as coordinator after first access and runs in parallel with reporting;
- ENISA currently says **no reporting API will be provided at this stage**. CK-Labs may automate internal evidence collection, but the September 2026 process must support a human completing the SRP submission;
- one SRP submission is routed to the selected CSIRT designated as coordinator and, absent the CRA's exceptional confidentiality route, is made available simultaneously to **ENISA**; the initial CSIRT then disseminates it to other relevant CSIRTs and market-surveillance authorities as required;
- after the 24-hour Early Warning is submitted, CK-Labs should continue using the **same notification record** for the 72-hour notification, later updates and the Final Report;
- voluntary-reporting functionality is described by ENISA as a later SRP phase. Do not confuse that with the mandatory Article 14 workflow that starts September 11, 2026;
- at launch, ENISA currently expects the SRP itself to be **English only**. CK-Labs should be able to prepare a clear English regulatory report even though player-facing TycoonX notices may require other languages for the affected audience;
- the SRP is **different from the European Vulnerability Database (EUVD)**. A CVE or EUVD record can be relevant evidence but does not substitute for a mandatory CRA SRP notification.

### Minimum incident packet to have ready internally

ENISA has published reporting-template fields. CK-Labs does not need every final-report fact at the 24-hour stage, but it should be able to assemble the minimum packet without searching ad hoc through production systems:

- manufacturer/operator legal name;
- product name **TycoonX** and product classification where known;
- notification type: actively exploited vulnerability or severe incident;
- a short factual title;
- first reliable awareness timestamp;
- Member States where TycoonX is available, where that information is available;
- for a severe incident, whether unlawful or malicious acts are suspected;
- known nature of the vulnerability or incident and initial impact assessment;
- corrective or mitigating measures already taken;
- corrective or mitigating measures users can take;
- whether submitted information is particularly sensitive;
- for later stages, known CVE/EUVD identifiers where applicable, severity and impact, root cause or threat type, date a corrective measure became available, and details of the security update or corrective measure.

- [ ] Maintain a one-page incident worksheet with these fields so a 24-hour report does not depend on memory.
- [ ] Record which fields are confirmed, unknown, estimated, or not applicable instead of inventing certainty.
- [ ] Preserve the submitted **24-hour, 72-hour and final-report versions as immutable evidence**, together with acknowledgements, later corrections, supplements and CSIRT requests.

## P0 gate 1B: SRP outage contingency

ENISA's August 31 FAQ now gives an explicit rule for temporary platform unavailability:

- [ ] If the **SRP is temporarily unavailable**, preserve evidence of the outage and continue preparing the report.
- [ ] Submit the required notification through the SRP as soon as it becomes available again.
- [ ] If immediate communication is necessary before restoration, **contact the designated CSIRT directly** using a verified official channel.
- [ ] A direct CSIRT contact during the outage does **not** replace the SRP filing. The notification must still be submitted through the SRP once it is available again.
- [ ] Do not change the incident awareness timestamp or fabricate a later awareness time because the platform was unavailable.
- [ ] Preserve screenshots, timestamps, error messages, direct-CSIRT correspondence and the eventual SRP receipt so a late submission can be reconstructed accurately.

Do not create an unofficial reporting endpoint or send sensitive exploit details to an unverified email address merely because the SRP is unavailable.

## P0 gate 1C: Sensitive-notification handling is not a self-created secrecy veto

ENISA's current FAQ explains that dissemination may be delayed or withheld in exceptional or particularly exceptional cybersecurity-related circumstances under the CRA and the applicable delegated rules.

For TycoonX:

- [ ] Do not omit a mandatory CRA report merely because it contains sensitive exploit information.
- [ ] Clearly identify sensitive fields and explain the concrete dissemination risk where the CRA mechanism allows this.
- [ ] Do not assume CK-Labs can **unilaterally prevent** the CSIRT, ENISA, other CSIRTs, or market-surveillance authorities from receiving information that the CRA requires them to receive.
- [ ] Do not put credentials, secret keys, reusable tokens, full payment credentials, or unnecessary player personal data into the report merely because the SRP is designed to protect confidentiality.

## P0 gate 2: Know what triggers mandatory reporting

### Actively exploited vulnerability

The CRA defines an actively exploited vulnerability as a vulnerability for which there is **reliable evidence that a malicious actor has exploited** it in a system without the system owner's permission.

TycoonX examples that require immediate CRA assessment include:

- a remotely exploitable authentication bypass being used against real TycoonX accounts;
- a vulnerability used to obtain another player's session, personal data, payment-related data, or privileged game state;
- malicious exploitation of a TycoonX client, backend-facing protocol, or remote-processing component where that component forms part of the product under the CRA;
- reliable evidence that attackers are exploiting a shipped vulnerability even if CK-Labs has already begun developing a fix.

A theoretical weakness, scanner result, bug report, or vulnerability with no reliable evidence of malicious exploitation is not automatically an actively exploited vulnerability under Article 14. It can still require urgent remediation and may be reportable under another rule.

### Severe incident having an impact on product security

Article 14 treats a **severe incident** as one meeting the statutory security-impact criteria, including where it negatively affects or is capable of negatively affecting the product's ability to protect the availability, authenticity, integrity or confidentiality of sensitive or important data or functions, or where it has led or is capable of leading to malicious code being introduced or executed in the product or a user's systems.

TycoonX examples requiring immediate CRA assessment include:

- compromise of authentication or session integrity at a scale or severity capable of exposing important account functions;
- an incident corrupting authoritative entitlement or payment state in a way that is security-driven rather than an ordinary balancing or gameplay bug;
- malicious code execution enabled through TycoonX or a product component;
- a security incident capable of materially exposing private chats, account identifiers, security credentials, or other sensitive data;
- a supply-chain compromise affecting a shipped TycoonX dependency where the CRA severe-incident criteria are met.

Ordinary service downtime, a non-security economy imbalance, a harmless UI bug, or a routine failed payment is not automatically a CRA severe incident. Classify the actual security impact instead of over-reporting every operational problem.

## P0 gate 3: Start the statutory clock at awareness

Once CK-Labs becomes aware of a reportable event, preserve the awareness timestamp immediately. Do not reset the clock because investigation is incomplete.

### Actively exploited vulnerability

- **Within 24 hours:** submit the early warning through the CRA Single Reporting Platform, without undue delay.
- **Within 72 hours:** submit the vulnerability notification unless the relevant information was already provided.
- **Final report:** no later than **14 days after a corrective or mitigating measure becomes available**.

### Severe incident

- **Within 24 hours:** submit the early warning, including whether unlawful or malicious acts are suspected.
- **Within 72 hours:** submit the incident notification unless the relevant information was already provided.
- **Final report:** within **one month after the submission of the 72-hour incident notification**.

- [ ] Security logs must preserve the first reliable awareness timestamp.
- [ ] The incident record must identify who assessed reportability and when.
- [ ] Do not delay the 24-hour warning while waiting for root-cause certainty.
- [ ] Do not delay the 72-hour notification merely because every affected user, country, root cause, or technical indicator has not yet been confirmed. Submit the information available and supplement it where the CRA process allows.
- [ ] Update a report if the designated CSIRT requests an intermediate status report.
- [ ] Treat CRA reporting independently from GDPR breach reporting, DSA emergency reporting, Apple or Google security escalation, payment-provider reporting, or criminal-law notification. One incident can trigger **more than one legal/process clock**.

The Regulation states that the **mere act of making a notification does not itself subject the notifying person to increased liability**. This is not a defence for an underlying security failure, but CK-Labs should not delay a required notification merely from fear that filing the report itself creates extra liability.

## P0 gate 4: User notification is separate from regulator reporting

CRA **Article 14(8) requires manufacturers to inform impacted users**, and where appropriate all users, after becoming aware of an actively exploited vulnerability or severe incident, and where necessary to tell them about risk-mitigation or corrective measures they can deploy.

This is **not the same threshold as GDPR Article 34**. A CRA user notice must not be skipped merely because a separate GDPR assessment concludes that a personal-data breach is not likely to result in a high risk to individuals.

For TycoonX:

- [ ] Maintain an emergency in-app or post-office notification path that does not require waiting for an app-store release.
- [ ] Maintain an email or support-site fallback where direct in-app communication is unavailable.
- [ ] Explain practical action a player should take, such as updating TycoonX, re-authenticating, revoking sessions, rotating a credential on a linked service where relevant, or avoiding a compromised feature.
- [ ] Assess whether the notice should reach impacted users only or all users.
- [ ] Record whether a structured, machine-readable representation is appropriate, consistent with Article 14(8) and the companion CRA communication gate.
- [ ] Do not disclose exploit details that would unnecessarily increase exploitation risk before remediation.
- [ ] Do not hide a required security notice merely to avoid reputational harm.
- [ ] Preserve when the notice was issued, to whom, in which languages, by which channel, and what mitigation instructions were provided.

This duty is different from ordinary outage notices, balancing announcements, refund communications, community moderation notices and GDPR high-risk breach notices.

## P0 gate 5: Evidence, privacy and payment integrity

A CRA incident process must not create a second legal problem.

- [ ] Preserve relevant server, authentication, entitlement, payment-provider, app-version, device/session and security evidence where lawful and necessary.
- [ ] Apply **GDPR data minimisation** and access controls to incident evidence.
- [ ] Do not include unnecessary player private messages, full payment credentials, secrets, tokens, passwords, or unrelated personal data in a CRA report.
- [ ] Reconcile security-driven entitlement corrections against authoritative Apple, Google, Xsolla and TycoonX records.
- [ ] Distinguish a security compromise from a chargeback, refund, duplicate grant, ordinary failed payment or legitimate restore operation.
- [ ] If an account compromise created fraudulent spending, transfers or entitlement use, correct only the affected state where possible and preserve mandatory consumer and payment remedies.
- [ ] Keep CRA security evidence separate enough from ordinary support data that a vulnerability report does not unnecessarily broaden access to unrelated player records.

## P0 gate 6: Security hotfix and supported-version path

The existing TycoonX Terms allow security-emergency measures, supported-version requirements, provider changes and corrections subject to mandatory law. Operationally:

- [ ] Maintain a way to disable or server-gate a vulnerable feature without deleting unrelated paid entitlements.
- [ ] Be able to require a minimum supported app version where reasonably necessary for security.
- [ ] Ensure security-related blocking does not misrepresent a valid Apple, Google Play or Xsolla purchase as permanently lost.
- [ ] Keep a restore or migration path for valid Lifetime VIP and other restorable entitlements after security remediation or account recovery where required.
- [ ] Document emergency changes so later support and refund disputes can be reconstructed from authoritative records.
- [ ] If a security hotfix materially changes an ongoing paid digital service, separately run the applicable German/EU digital-product-change notice and remedy analysis instead of assuming a CRA response overrides consumer law.

## P0 gate 7: Vulnerability intake before September 11

Even though broader CRA product-information obligations mainly sit in the later general regime, CK-Labs needs a **human-reachable vulnerability intake** now to meet the Article 14 awareness and reporting clock.

- [ ] Publish or clearly identify one human-reachable vulnerability intake that reaches a human operator.
- [ ] Do not require researchers to post exploit details in public chat, Discord, app reviews, or GitHub issues.
- [ ] Record the time a credible vulnerability report is first received.
- [ ] Preserve researcher contact details only as necessary and lawfully.
- [ ] Create a severity triage step that checks CRA Article 14 independently from ordinary bug priority.
- [ ] Do not threaten good-faith security reporters merely for reporting a vulnerability; investigate abuse separately where there is actual malicious conduct.
- [ ] Ensure an inbox outage or operator absence cannot silently consume most of the 24-hour window without escalation.

## P0 gate 8: Micro/small status is not a reporting exemption

Do **not treat small size as a blanket CRA exemption**. Article 14 reporting applies to in-scope manufacturers regardless of whether they are solo developers, microenterprises, or small enterprises.

The CRA's penalty rule contains a narrow protection: qualifying **microenterprises and small enterprises are not subject to administrative fines for missing the 24-hour early-warning deadline** in Article 14(2)(a) or Article 14(4)(a). That protection does not erase:

- the underlying duty to make the early warning;
- the **72-hour** vulnerability or incident notification;
- the **final-report** duty;
- the Article 14(8) **impacted-user** notification duty;
- other CRA duties that apply; or
- other laws or remedies triggered by the same event.

The Regulation separately requires CSIRT helpdesk support for manufacturers, particularly microenterprises and SMEs. CK-Labs should use official helpdesk or coordinator support if the reporting route is unclear rather than treating uncertainty as permission to miss the clock.

## P0 gate 9: Apple, Google Play, Xsolla and provider incidents remain separate

A store, payment processor, authentication provider, cloud vendor, analytics SDK, communications provider or CDN can be an important security evidence source without becoming CK-Labs' CRA manufacturer or reporting authority.

- Apple security, StoreKit or App Store information can trigger investigation but does not replace an SRP filing where Article 14 applies.
- Google Play security, integrity, billing or policy information can trigger investigation but does not determine CK-Labs' CRA main establishment.
- Xsolla can have its own payment-security, fraud, refund or chargeback duties, but an Xsolla entity on a receipt does not by itself become the TycoonX CRA manufacturer.
- A cloud, database, authentication or CDN region does not by itself determine where product-cybersecurity decisions are predominantly taken.
- Do not assume a provider filed CK-Labs' manufacturer report unless the legal role and actual filing are verified.

One provider incident can trigger CRA, GDPR, store, processor and contractual workflows at the same time. Keep the clocks and evidence linked but legally distinct.

## P0 gate 10: Paid entitlements stay isolated during security response

A CRA report, security containment step, provider outage, CSIRT communication or emergency update does not itself change a valid purchase transaction.

- [ ] Do not delete or duplicate legitimately purchased **Diamonds** merely because an account, server, region, or provider appears in an incident.
- [ ] Do not restart, pause, shorten, extend, or duplicate the original one-time **30-Day VIP** period merely because security access is temporarily restricted.
- [ ] Do not create a hidden expiry for valid **Lifetime VIP**, downgrade it to 30-Day VIP, or require a new purchase merely because an incident requires account recovery, provider migration or a security hotfix.
- [ ] Do not replay Apple, Google Play or Xsolla entitlement events during restoration.
- [ ] If an exploit actually created invalid Diamonds, duplicate entitlements, unauthorized transfers or fraudulent purchases, correct only the affected state using reliable authoritative evidence and preserve mandatory consumer/payment remedies.

Lifetime VIP remains a one-time TycoonX entitlement offered only during selected genuine promotional sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability.

## December 11, 2027 roadmap, not a September 2026 substitute

The CRA's main obligations generally apply from December 11, 2027. TycoonX should begin preparing, but these later requirements must not be confused with the September 11, 2026 Article 14 reporting deadline.

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
- a **cessation-of-operations plan** because the later CRA regime contains manufacturer, user and authority obligations when a manufacturer ceases operations and can no longer comply.

The Commission's current guidance states that most ordinary mobile applications and computer games are expected to use manufacturer self-assessment, while higher-risk product categories can require stricter conformity procedures.

## Public legal wording decision

No immediate change to the canonical TycoonX Terms, Purchases & Refunds Policy, Privacy Policy or Community Standards is required solely because Article 14 starts on September 11, 2026. The current public legal framework already preserves security-emergency measures, mandatory legal obligations, account-compromise investigation, authoritative server/store/payment records, supported-version requirements, provider replacement, lawful entitlement correction and mandatory consumer rights.

The CRA issue is primarily a **security incident detection, awareness, reporting, routing and user-notification implementation gate**. If later CRA guidance requires new permanent user-facing product information or support-period wording before December 2027, update the canonical English documents first and then refresh every localized document whose legal meaning changes.

## September 2026 operational status

**BLOCKED until operationally verified for September 11, 2026:**

1. CRA manufacturer and role assessment recorded.
2. Correct CSIRT designated as coordinator and Article 14(7) route recorded.
3. Personal EU Login with two-factor authentication is usable.
4. The operator knows that representative validation runs in parallel and does not block initial reporting.
5. The incident runbook does not depend on a non-existent SRP API.
6. Current August 31 ENISA reporting-template fields and the same-record 24h/72h/final workflow are understood.
7. SRP outage evidence, direct-CSIRT emergency contact and later mandatory SRP filing are documented.
8. 24-hour, 72-hour and final-report procedures exist.
9. Article 14(8) impacted-user security-notification path exists.
10. Security evidence and GDPR-minimisation rules exist.
11. A human-reachable vulnerability intake exists.
12. A server-side emergency mitigation and minimum-supported-version path exists.
13. Micro/small status is documented without being treated as a blanket reporting exemption.
14. Sensitive-notification handling is understood as a regulated CRA/CSIRT process, not a unilateral CK-Labs secrecy veto.
15. The dedicated SRP public URL, launch status, CSIRT list and ENISA guidance are re-checked immediately before September 11, 2026 and before any real filing.
