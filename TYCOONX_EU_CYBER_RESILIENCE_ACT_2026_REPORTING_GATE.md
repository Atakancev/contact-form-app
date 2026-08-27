# TycoonX EU Cyber Resilience Act 2026 Reporting Gate

Last reviewed: 2026-08-28

This is a release and operations checklist for CK-Labs. It is not a substitute for case-specific legal advice.

## Why this is a P0 now

TycoonX is scheduled for full release on September 1, 2026. The EU Cyber Resilience Act (Regulation (EU) 2024/2847, CRA) applies its Article 14 manufacturer reporting obligations from **September 11, 2026**, before the CRA's main obligations begin on December 11, 2027.

The European Commission states that the September 11, 2026 reporting duties apply to products with digital elements already made available on the Union market, including products placed on the market before December 11, 2027.

TycoonX is network-connected software made available commercially. Under the CRA, a "product with digital elements" includes software and relevant remote data-processing solutions, and a "manufacturer" includes a person that develops a product with digital elements and markets it under its name or trademark, including where monetised or supplied free of charge. On that basis, TycoonX should be treated as potentially in scope unless a documented legal assessment establishes otherwise.

Do not assume that being a solo developer, microenterprise, mobile app, game, free download, or App Store/Google Play-distributed product removes the September 11 reporting obligation. The Commission specifically describes mobile applications and computer games as ordinary CRA product examples for the later conformity regime, generally subject to manufacturer self-assessment rather than mandatory third-party assessment.

## Official references

- Regulation (EU) 2024/2847: https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng
- European Commission CRA reporting guidance: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting
- European Commission CRA summary: https://digital-strategy.ec.europa.eu/en/policies/cra-summary
- European Commission CRA conformity-assessment guidance: https://digital-strategy.ec.europa.eu/en/policies/cra-conformity-assessment

## P0 gate 1: Confirm TycoonX CRA role and reporting endpoint

Before September 11, 2026:

- [ ] Record the legal person or natural person that places TycoonX on the EU market under the relevant name/trademark and confirm who is the CRA "manufacturer" for TycoonX.
- [ ] Record the Member State of the manufacturer's main establishment for CRA reporting purposes. CRA Article 14 uses where cybersecurity decisions for the product are predominantly taken as the primary test.
- [ ] Identify the CSIRT designated as coordinator and the correct electronic notification endpoint for that Member State.
- [ ] Confirm access to ENISA's CRA Single Reporting Platform when it becomes operational.
- [ ] Record a fallback responsible person who can file a report if the primary operator is unavailable.
- [ ] Keep a simple list of EU Member States in which TycoonX is made available, because Article 14 notices can require that information.

Do not wait for the December 2027 general compliance date before doing this setup.

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
- [ ] Update a report if the designated CSIRT requests an intermediate status report.

## P0 gate 4: User notification is separate from regulator reporting

Article 14 also requires manufacturers, after becoming aware of an actively exploited vulnerability or severe incident, to inform impacted users and, where appropriate, all users of the vulnerability/incident and any corrective or risk-mitigation measures users can take.

For TycoonX:

- [ ] Prepare an emergency in-app/post-office notification template that can be sent without an app-store release.
- [ ] Prepare an email/support-site fallback where direct in-app communication is unavailable.
- [ ] Explain the practical action a player should take, such as updating TycoonX, re-authenticating, rotating a password on a linked service where relevant, revoking sessions, or avoiding a compromised feature.
- [ ] Do not disclose exploit details that would unnecessarily increase exploitation risk before remediation.
- [ ] Do not hide a required security notice merely to avoid reputational harm.
- [ ] Keep the notice factual and distinguish confirmed facts from investigation status.

This duty is different from ordinary outage notices, balancing announcements, refund communications, or community moderation notices.

## P0 gate 5: Evidence, privacy and payment integrity

A CRA incident process must not create a second legal problem.

- [ ] Preserve relevant server, authentication, entitlement, payment-provider, app-version, device/session and security evidence where lawful and necessary.
- [ ] Apply GDPR data minimisation and access controls to incident evidence.
- [ ] Do not include unnecessary player private messages, full payment credentials, secrets, tokens, passwords, or unrelated personal data in a CRA report.
- [ ] Reconcile security-driven entitlement corrections against authoritative Apple, Google, Xsolla and TycoonX records.
- [ ] Distinguish a security compromise from a chargeback, refund, duplicate grant, ordinary failed payment or legitimate restore operation.
- [ ] If an account compromise created fraudulent spending, transfers or entitlement use, correct only the affected state where possible and preserve mandatory consumer/payment remedies.

## P0 gate 6: Security hotfix and supported-version path

The existing TycoonX Terms allow security emergencies, supported-version requirements, provider changes and corrections subject to mandatory law. Operationally:

- [ ] Maintain a way to disable or server-gate a vulnerable feature without deleting unrelated paid entitlements.
- [ ] Be able to force a minimum supported app version where reasonably necessary for security.
- [ ] Ensure security-related blocking does not misrepresent a valid Apple/Google/Xsolla purchase as permanently lost.
- [ ] Keep a restore/migration path for valid Lifetime VIP and other restorable entitlements after a security remediation or account recovery where required.
- [ ] Document emergency changes so later support/refund disputes can be reconstructed from authoritative records.

## P0 gate 7: Vulnerability intake before September 11

Even though the CRA's broader single-point-of-contact and user-information obligations mainly sit in the later general regime, CK-Labs needs a usable vulnerability intake now to meet the 24-hour clock.

- [ ] Publish or clearly identify one security/vulnerability contact that reaches a human operator.
- [ ] Do not require researchers to post exploit details in public chat, Discord, app reviews, or GitHub issues.
- [ ] Record the time a credible vulnerability report is first received.
- [ ] Preserve researcher contact details only as necessary and lawfully.
- [ ] Create a severity triage step that checks CRA Article 14 independently from ordinary bug priority.
- [ ] Do not threaten good-faith security reporters merely for reporting a vulnerability; investigate abuse separately where there is actual malicious conduct.

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
- EU declaration of conformity and CE-marking requirements when applicable.

The Commission's current guidance states that most ordinary mobile applications and computer games are expected to use manufacturer self-assessment, while higher-risk product categories can require stricter conformity procedures.

## Microenterprise note

Do not treat small size as a blanket CRA exemption. The CRA provides support and some proportionate treatment for microenterprises and SMEs, but Article 14 reporting applies to manufacturers in scope. The Regulation expressly provides CSIRT helpdesk support for manufacturers, particularly microenterprises and SMEs.

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
3. 24h / 72h / final-report incident procedure exists.
4. User security-notification path exists.
5. Security evidence and GDPR-minimisation rules exist.
6. A human-reachable vulnerability intake exists.
7. A server-side emergency mitigation/update path exists.
