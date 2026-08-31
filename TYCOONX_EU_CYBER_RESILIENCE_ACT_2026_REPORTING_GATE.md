# TycoonX EU Cyber Resilience Act 2026 Reporting Gate

Last reviewed: 2026-08-31

This is a release and operations checklist for CK-Labs. It is not a substitute for case-specific legal advice.

## Why this is a P0 now

TycoonX is scheduled for full release on September 1, 2026. The EU Cyber Resilience Act (Regulation (EU) 2024/2847, CRA) applies its Article 14 manufacturer reporting obligations from **September 11, 2026**, before the CRA's main obligations begin on December 11, 2027.

The European Commission states that the September 11, 2026 reporting duties apply to products with digital elements already made available on the Union market, including products placed on the market before December 11, 2027.

TycoonX is network-connected software made available commercially. Under the CRA, a "product with digital elements" includes software and relevant remote data-processing solutions, and a "manufacturer" includes a person that develops a product with digital elements and markets it under its name or trademark, including where monetised or supplied free of charge. On that basis, TycoonX should be treated as potentially in scope unless a documented legal assessment establishes otherwise.

Do not assume that being a solo developer, microenterprise, mobile app, game, free download, or App Store/Google Play-distributed product removes the September 11 reporting obligation. The Commission's current conformity-assessment guidance lists mobile applications and computer games as examples in the default CRA product category, normally eligible for manufacturer self-assessment under the later conformity regime.

The Commission published practical CRA implementation guidance on **July 27, 2026**. ENISA's CRA Single Reporting Platform FAQ was updated on **August 3, 2026** and confirms that the platform is scheduled to be operational by September 11, 2026. As of August 31, 2026, functional and security testing is still under way. CK-Labs should therefore finish the legal and operational setup before September 11 rather than treating platform launch day as the start of preparation.

## Official references

- Regulation (EU) 2024/2847: https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng
- European Commission CRA policy page: https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act
- European Commission CRA reporting guidance: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting
- European Commission CRA summary: https://digital-strategy.ec.europa.eu/en/policies/cra-summary
- European Commission CRA conformity-assessment guidance: https://digital-strategy.ec.europa.eu/en/policies/cra-conformity-assessment
- European Commission July 27, 2026 implementation guidance announcement: https://digital-strategy.ec.europa.eu/en/library/commission-publishes-new-guidance-support-timely-cyber-resilience-act-implementation
- ENISA CRA Single Reporting Platform: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp
- ENISA Single Reporting Platform FAQ, updated August 3, 2026: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/frequently-asked-questions

## P0 gate 1: Confirm TycoonX CRA role and reporting endpoint

Before September 11, 2026:

- [ ] Record the legal person or natural person that places TycoonX on the EU market under the relevant name/trademark and confirm who is the CRA "manufacturer" for TycoonX.
- [ ] Record the Member State of the manufacturer's main establishment for CRA reporting purposes. CRA Article 14 uses where cybersecurity decisions for the product are predominantly taken as the primary test.
- [ ] Identify the CSIRT designated as coordinator for that Member State and preserve the then-current official reporting guidance.
- [ ] Create or confirm access to an **EU Login** account that the responsible CK-Labs representative can use for the CRA Single Reporting Platform. ENISA says the EU Login account can be created in advance.
- [ ] Do **not** treat advance EU Login creation as proof that the SRP representative is already validated. ENISA says the designated CSIRT validates whether a representative may submit for a manufacturer after first access, in parallel with the reporting process.
- [ ] Follow ENISA's current advice not to initiate manufacturer-representative validation merely for pre-registration unless a specific notification needs to be submitted, unless later official guidance changes this process.
- [ ] Record a fallback responsible person who can file a report if the primary operator is unavailable and make sure that person can obtain the required company/product facts without needing production secrets they do not otherwise need.
- [ ] Keep a simple list of EU Member States in which TycoonX is made available, because the SRP template can require this information where available and the receiving CSIRT can disseminate the notification to relevant Member States.
- [ ] Save the current official CRA/ENISA reporting instructions and the date they were checked, because the SRP is still being operationalised immediately before the September 11 start date.

Do not wait for the December 2027 general compliance date before doing this setup.

## P0 gate 1A: Prepare for the actual August 2026 SRP workflow

ENISA's August 3, 2026 FAQ adds implementation details that should be reflected in the incident runbook:

- the SRP will use a dedicated public URL to be published by ENISA before go-live;
- manufacturer/open-source-steward representatives will use **EU Login**;
- representative validation is performed by the selected CSIRT designated as coordinator and runs after first access in parallel with reporting, so validation must not be treated as a reason to miss a statutory deadline;
- ENISA currently says **no reporting API will be provided at this stage**. CK-Labs may automate its internal incident evidence collection, but the September 2026 plan must still support a human completing the SRP submission;
- one SRP submission is routed to the selected CSIRT designated as coordinator and, absent the CRA's exceptional confidentiality route, made available simultaneously to ENISA. The initial CSIRT then disseminates it to other relevant CSIRTs where the product is available and to market-surveillance authorities as needed;
- voluntary-reporting functionality is a later SRP phase. Do not confuse a future voluntary report with the mandatory Article 14 workflow that starts September 11, 2026.

### Minimum incident packet to have ready internally

ENISA has now published the reporting-template fields. CK-Labs does not need every final-report fact at the 24-hour stage, but it should be able to assemble the minimum packet without searching ad hoc through production systems:

- manufacturer/operator legal name;
- product name **TycoonX** and product classification where known;
- notification type: actively exploited vulnerability or severe incident;
- a short factual title;
- first reliable awareness timestamp;
- Member States where TycoonX is available, where that information is available;
- for a severe incident, whether unlawful or malicious acts are suspected;
- known nature of the vulnerability/incident and initial impact assessment;
- corrective or mitigating measures already taken;
- corrective or mitigating measures users can take;
- whether submitted information is particularly sensitive;
- for later stages, known CVE/EUVD identifiers where applicable, severity/impact, root cause/threat type, date a corrective measure became available, and the security update/corrective-measure details.

- [ ] Maintain a one-page incident worksheet with these fields so a 24-hour report does not depend on memory.
- [ ] Record which fields are confirmed, unknown, estimated, or not applicable instead of inventing certainty.
- [ ] Preserve the submitted 24-hour, 72-hour and final-report versions as immutable evidence, together with later corrections or supplements.

## P0 gate 1B: Sensitive-notification handling is not a self-created secrecy veto

ENISA's current FAQ says a receiving CSIRT can delay or withhold dissemination to other Member States only in exceptional security-related circumstances under the CRA and the December 11, 2025 delegated rules. In particularly exceptional cases, the manufacturer can flag at the 72-hour stage that Article 16(2) conditions may apply, which can limit what ENISA initially receives until the receiving CSIRT decides on disclosure.

For TycoonX:

- [ ] Do not omit a mandatory CRA report merely because it contains sensitive exploit information.
- [ ] Clearly identify sensitive fields and explain the concrete dissemination risk where the CRA mechanism allows this.
- [ ] Do not assume CK-Labs can unilaterally prevent the CSIRT, ENISA, other CSIRTs, or market-surveillance authorities from receiving information that the CRA requires them to receive.
- [ ] Do not put credentials, secret keys, reusable tokens, full payment credentials, or unnecessary player personal data into the report just because the SRP is designed to protect confidentiality.

## P0 gate 2: Know what triggers mandatory reporting

### Actively exploited vulnerability

The CRA defines an actively exploited vulnerability as a vulnerability for which there is reliable evidence that a malicious actor exploited it in a system without the system owner's permission.

TycoonX examples that may require immediate CRA assessment include:

- a remotely exploitable authentication bypass being used against real TycoonX accounts;
- a vulnerability used to obtain another player's session, personal data, payment-related data, or privileged game state;
- malicious exploitation of a TycoonX client, backend-facing protocol, or remote processing component where that component forms part of the product under the CRA;
- reliable evidence that attackers are exploiting a shipped vulnerability even if CK-Labs has already begun developing a fix.

A theoretical weakness, scanner result, bug report, or vulnerability with no reliable evidence of malicious exploitation is not automatically an "actively exploited vulnerability" under Article 14. It can still require urgent remediation and may be reportable under another rule.

### Severe incident having an impact on product security

Article 14 treats an incident as severe where it negatively affects, or is capable of negatively affecting, the product's ability to protect the availability, authenticity, integrity or confidentiality of sensitive or important data or functions, or where it has led or is capable of leading to malicious code being introduced or executed in the product or a user's systems.

TycoonX examples requiring immediate CRA assessment include:

- compromise of authentication or session integrity at a scale or severity capable of exposing important account functions;
- an incident corrupting authoritative entitlement or payment state in a way that is security-driven rather than an ordinary balancing or gameplay bug;
- malicious code execution enabled through TycoonX or a product component;
- a security incident capable of materially exposing private chats, account identifiers, security credentials, or other sensitive data;
- a supply-chain compromise affecting a shipped TycoonX dependency where the CRA severe-incident criteria are met.

Ordinary service downtime, a non-security economy imbalance, a harmless UI bug, or a routine failed payment is not automatically a CRA severe incident. Classify the actual security impact rather than over-reporting every operational problem.

## P0 gate 3: Start the statutory clock at awareness

Once CK-Labs becomes aware of a reportable event, preserve the awareness timestamp immediately. Do not reset the clock because investigation is incomplete.

### Actively exploited vulnerability

- **Within 24 hours:** submit the early warning through the CRA Single Reporting Platform, without undue delay.
- **Within 72 hours:** submit the vulnerability notification unless the required information was already provided.
- **Final report:** no later than **14 days after a corrective or mitigating measure becomes available**.

### Severe incident

- **Within 24 hours:** submit the early warning, including whether unlawful or malicious acts are suspected.
- **Within 72 hours:** submit the incident notification unless the required information was already provided.
- **Final report:** within **one month after the 72-hour incident notification**.

- [ ] Security logs must preserve the first reliable awareness timestamp.
- [ ] The incident record must identify who made the report and when.
- [ ] Do not delay the 24-hour warning while waiting for root-cause certainty.
- [ ] Do not delay the 72-hour notification merely because every affected user, country, root cause, or technical indicator has not yet been confirmed. Submit the information available and supplement it where the CRA process allows.
- [ ] Update a report if the designated CSIRT requests an intermediate status report.
- [ ] Treat CRA reporting independently from GDPR breach reporting, DSA emergency reporting, Apple/Google security escalation, payment-provider reporting, or criminal-law notification. One incident can trigger more than one legal/process clock.

The Regulation also states that the mere act of making a CRA notification under the relevant mandatory/voluntary reporting provisions does **not itself subject the notifying person to increased liability**. This is not a defence for the underlying security failure, but CK-Labs should not delay a required notification merely from fear that filing the report itself creates extra liability.

## P0 gate 4: User notification is separate from regulator reporting

Article 14(8) requires manufacturers, after becoming aware of an actively exploited vulnerability or severe incident, to **inform impacted users**, and where appropriate all users, of that vulnerability or incident and, where necessary, of risk-mitigation or corrective measures users can deploy.

This is not the same threshold as GDPR Article 34. A CRA user notice must not be skipped merely because a separate GDPR assessment concludes that a personal-data breach is not likely to result in a high risk to individuals.

For TycoonX:

- [ ] Prepare an emergency in-app/post-office notification template that can be sent without an app-store release.
- [ ] Prepare an email/support-site fallback where direct in-app communication is unavailable.
- [ ] Explain the practical action a player should take, such as updating TycoonX, re-authenticating, rotating a password on a linked service where relevant, revoking sessions, or avoiding a compromised feature.
- [ ] Do not disclose exploit details that would unnecessarily increase exploitation risk before remediation.
- [ ] Do not hide a required security notice merely to avoid reputational harm.
- [ ] Keep the notice factual and distinguish confirmed facts from investigation status.
- [ ] Preserve evidence of when the notice was issued, to whom, by which channel, and what mitigation instructions were provided.

This duty is different from ordinary outage notices, balancing announcements, refund communications, community moderation notices, and GDPR high-risk breach notices.

## P0 gate 5: Evidence, privacy and payment integrity

A CRA incident process must not create a second legal problem.

- [ ] Preserve relevant server, authentication, entitlement, payment-provider, app-version, device/session and security evidence where lawful and necessary.
- [ ] Apply GDPR data minimisation and access controls to incident evidence.
- [ ] Do not include unnecessary player private messages, full payment credentials, secrets, tokens, passwords, or unrelated personal data in a CRA report.
- [ ] Reconcile security-driven entitlement corrections against authoritative Apple, Google, Xsolla and TycoonX records.
- [ ] Distinguish a security compromise from a chargeback, refund, duplicate grant, ordinary failed payment or legitimate restore operation.
- [ ] If an account compromise created fraudulent spending, transfers or entitlement use, correct only the affected state where possible and preserve mandatory consumer/payment remedies.
- [ ] Keep CRA security evidence separate enough from ordinary support data that a vulnerability report does not unnecessarily broaden access to unrelated player records.

## P0 gate 6: Security hotfix and supported-version path

The existing TycoonX Terms allow security emergencies, supported-version requirements, provider changes and corrections subject to mandatory law. Operationally:

- [ ] Maintain a way to disable or server-gate a vulnerable feature without deleting unrelated paid entitlements.
- [ ] Be able to force a minimum supported app version where reasonably necessary for security.
- [ ] Ensure security-related blocking does not misrepresent a valid Apple/Google/Xsolla purchase as permanently lost.
- [ ] Keep a restore/migration path for valid Lifetime VIP and other restorable entitlements after a security remediation or account recovery where required.
- [ ] Document emergency changes so later support/refund disputes can be reconstructed from authoritative records.
- [ ] If a security hotfix materially changes an ongoing paid digital service, separately run the applicable German/EU digital-product-change notice/remedy analysis instead of assuming a CRA response overrides consumer law.

## P0 gate 7: Vulnerability intake before September 11

Even though the CRA's broader single-point-of-contact and user-information obligations mainly sit in the later general regime, CK-Labs needs a usable vulnerability intake now to meet the 24-hour clock.

- [ ] Publish or clearly identify one human-reachable vulnerability intake that reaches a human operator.
- [ ] Do not require researchers to post exploit details in public chat, Discord, app reviews, or GitHub issues.
- [ ] Record the time a credible vulnerability report is first received.
- [ ] Preserve researcher contact details only as necessary and lawfully.
- [ ] Create a severity triage step that checks CRA Article 14 independently from ordinary bug priority.
- [ ] Do not threaten good-faith security reporters merely for reporting a vulnerability; investigate abuse separately where there is actual malicious conduct.
- [ ] Ensure an inbox outage or operator absence cannot silently consume most of the 24-hour window without escalation.

## P0 gate 8: Micro/small status is not a reporting exemption

Do not treat small size as a blanket CRA exemption. Article 14 reporting applies to in-scope manufacturers regardless of whether they are solo developers, microenterprises, or small enterprises.

The CRA's penalty rule contains a **narrow** protection: qualifying microenterprises and small enterprises are not subject to the CRA administrative fines for missing the specific **24-hour early-warning deadline** in Article 14(2)(a) or Article 14(4)(a). That protection does not erase:

- the underlying duty to make the early warning;
- the 72-hour vulnerability/incident notification;
- the final-report duty;
- the Article 14(8) impacted-user notification duty;
- other CRA duties that apply; or
- other laws or remedies triggered by the same event.

The Regulation separately requires CSIRT helpdesk support for manufacturers, particularly microenterprises and SMEs. CK-Labs should use that support if the correct reporting route or SRP process is unclear rather than treating uncertainty as permission to miss the clock.

## December 11, 2027 roadmap, not a September 2026 substitute

The CRA's main obligations generally apply from December 11, 2027. TycoonX should begin preparing, but these later requirements must not be confused with the September 11, 2026 Article 14 reporting deadline.

Preparation should include:

- cybersecurity risk assessment and technical documentation;
- vulnerability-handling and coordinated vulnerability-disclosure processes;
- secure-by-design/default requirements;
- security update processes and support-period decisions;
- product/user information required by Annex II;
- a clearly identifiable vulnerability contact point;
- support-period disclosure;
- software component/SBOM processes where required;
- conformity assessment;
- EU declaration of conformity and CE-marking requirements when applicable; and
- a cessation-of-operations plan because the later CRA regime contains manufacturer/user/authority obligations when the manufacturer ceases operations and can no longer comply.

The Commission's current guidance states that most ordinary mobile applications and computer games are expected to use manufacturer self-assessment, while higher-risk product categories can require stricter conformity procedures.

## Public legal wording decision

No immediate change to the canonical TycoonX Terms, Purchases & Refunds Policy, Privacy Policy or Community Standards is required solely because Article 14 starts on September 11, 2026. The current public legal framework already preserves:

- security-emergency measures;
- mandatory legal obligations;
- account-compromise investigation;
- authoritative server/store/payment records;
- feature disabling/replacement for security;
- required updates and unsupported-version treatment;
- provider outages/replacement;
- entitlement correction without waiving mandatory consumer rights;
- lawful user and authority notices.

The CRA issue is primarily a **security incident detection, clock, reporting and user-notification implementation gate**. If later CRA guidance requires new permanent user-facing product information or support-period wording before December 2027, update the canonical English documents first and then refresh all localized versions whose legal meaning changes.

## Release status

**BLOCKED until operationally verified for September 11, 2026:**

1. CRA manufacturer/role assessment recorded.
2. Responsible CSIRT / Single Reporting Platform route recorded.
3. EU Login access exists and the team understands that CSIRT representative validation occurs after first access in parallel with reporting.
4. The incident runbook does not depend on a non-existent SRP API and contains the current ENISA reporting-template fields.
5. 24h / 72h / final-report incident procedure exists.
6. Article 14(8) impacted-user security-notification path exists.
7. Security evidence and GDPR-minimisation rules exist.
8. A human-reachable vulnerability intake exists.
9. A server-side emergency mitigation/update path exists.
10. Micro/small status is documented without being treated as a blanket reporting exemption.
11. Sensitive-notification handling is understood as a regulated CSIRT/CRA process, not a unilateral CK-Labs secrecy veto.
