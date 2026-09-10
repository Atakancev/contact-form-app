# TycoonX CRA Article 14 Security Reporting Gate

Status: active compliance gate from **September 11, 2026**.

This gate records the operational Cyber Resilience Act (CRA) reporting requirements that now apply separately from the broader CRA obligations that generally become applicable on December 11, 2027. It is an internal CK-Labs compliance and incident-response gate. It does not expand player obligations, waive consumer or privacy rights, or turn every bug, outage, support ticket, exploit report, or data incident into a CRA notification.

## 1. Why this now matters to TycoonX

Regulation (EU) 2024/2847 applies to products with digital elements made available on the EU market. European Commission CRA guidance expressly uses **computer games** and **mobile applications** as examples of ordinary products with digital elements. TycoonX should therefore be treated operationally as within the CRA product category unless a documented legal assessment establishes otherwise for a particular distribution arrangement.

For CRA purposes, CK-Labs should also operate on the conservative assumption that it is the manufacturer where it develops TycoonX and markets the product under its own name or trademark. Store, cloud, authentication, analytics, payment, or infrastructure providers do not automatically replace CK-Labs' manufacturer responsibilities.

The main CRA regime generally applies from **December 11, 2027**, but Article 14 reporting obligations apply from **September 11, 2026**. Article 14 also applies to covered products with digital elements that were placed on the EU market before December 11, 2027.

## 2. Events that require Article 14 triage

Every credible security report or internal detection involving TycoonX must be triaged promptly for both of these Article 14 categories:

1. **Actively exploited vulnerability.** A vulnerability for which there is reliable evidence that a malicious actor has exploited it in a system without the system owner's permission.
2. **Severe incident having an impact on the security of TycoonX.** For Article 14 purposes, an incident is severe where it negatively affects, or is capable of negatively affecting, TycoonX's ability to protect the availability, authenticity, integrity, or confidentiality of sensitive or important data or functions, or where it has led, or is capable of leading, to malicious code being introduced or executed in TycoonX or a user's network and information systems.

A vulnerability being technically exploitable is not by itself proof that it is actively exploited. A normal service outage is not automatically a severe security incident. Conversely, a small number of affected users does not automatically make a malicious compromise non-reportable.

## 3. Awareness clock

The incident record must contain one explicit **CRA awareness timestamp (T0)**. The reporting clocks are measured from when CK-Labs becomes aware of the reportable actively exploited vulnerability or severe security incident, not from when a convenient investigation milestone is reached.

Potential security reports from players, researchers, Apple, Google, Xsolla, cloud providers, authentication providers, libraries, monitoring systems, app-store security teams, or other third parties must therefore be escalated quickly enough to determine whether Article 14 is triggered.

Do not delay T0 merely because root cause, attacker identity, complete impact, or the final remediation is still unknown. The CRA reporting process is staged precisely so that information can be supplemented after the early warning.

## 4. Mandatory reporting timeline

Where Article 14 is triggered, CK-Labs' incident owner must preserve evidence of each submission and deadline.

### Actively exploited vulnerability

- **Within 24 hours of awareness:** submit the early warning without undue delay through the CRA Single Reporting Platform.
- **Within 72 hours of awareness:** submit the vulnerability notification unless the relevant information was already supplied. Include available general information about TycoonX, the exploit/vulnerability, corrective or mitigating measures already taken, measures users can take, and sensitivity where applicable.
- **Final report:** no later than **14 days after a corrective or mitigating measure becomes available**, unless the required information was already provided. Preserve the vulnerability description, severity/impact, available malicious-actor information, and details of the security update or other corrective measure.

### Severe security incident

- **Within 24 hours of awareness:** submit the early warning without undue delay, including at least whether unlawful or malicious acts are suspected and applicable Member-State availability information.
- **Within 72 hours of awareness:** submit the incident notification unless already supplied, including the available nature and initial assessment of the incident, measures taken, measures users can take, and sensitivity where applicable.
- **Final report:** within **one month after the 72-hour incident notification**, unless the required information was already provided. Preserve the detailed incident description, severity/impact, likely threat or root cause, and applied/ongoing mitigation measures.

A request for an intermediate report from the designated CSIRT must be tracked as part of the same incident record.

## 5. Where to report

Mandatory Article 14 notifications are submitted through ENISA's **CRA Single Reporting Platform (SRP)** using the electronic notification endpoint of the CSIRT designated as coordinator for the Member State of the manufacturer's CRA main establishment in the Union. The notification is made simultaneously accessible to ENISA under the Article 14/16 process.

Before the first live report, CK-Labs must verify and document:

- the legal manufacturer identity used for the filing;
- the Member State constituting CK-Labs' CRA main establishment under Article 14(7);
- the correct coordinator/endpoint available through the SRP;
- the EU Login/SRP access needed by the responsible person;
- a backup responsible person or contingency procedure if the primary reporter is unavailable; and
- the procedure to follow if the SRP is temporarily unavailable.

Do not wait for a real 24-hour incident to discover that the required account, access, or company information is missing.

## 6. User notification is a separate CRA duty

Article 14(8) is not satisfied only by filing with ENISA/CSIRT. After awareness of an actively exploited vulnerability or severe incident affecting TycoonX security, CK-Labs must inform impacted users and, where appropriate, all users about the vulnerability or incident and, where necessary, about risk-mitigation and corrective measures users can deploy.

The communication should be timely, factual, security-conscious, and limited so it does not unnecessarily publish exploit details that would increase risk. A provider's public status page, an App Store notice, a support reply, or a CRA filing is not automatically a substitute for the user communication required from the manufacturer.

This duty does not mean every ordinary outage, gameplay bug, balance correction, payment-provider failure, or non-security incident requires a CRA security broadcast.

## 7. Keep CRA, GDPR, consumer, and platform tracks separate

A single event may trigger several independent legal or contractual processes. The incident owner must assess them separately rather than assuming one notification satisfies all duties.

- **CRA Article 14:** actively exploited vulnerabilities and severe incidents affecting the security of the product with digital elements.
- **GDPR Articles 33/34:** personal data breaches, with their separate risk thresholds, supervisory-authority reporting rules, and affected-person communication rules.
- **Consumer/digital-product law:** conformity, security update, cure, termination, price-reduction, refund, notice, or other mandatory remedies where applicable.
- **Apple / Google / Xsolla / infrastructure contracts:** provider-specific security, payment, fraud, account, or incident escalation obligations.
- **Other cybersecurity law:** NIS2 or another sector-specific framework where separately applicable to CK-Labs or a relevant provider.

A CRA incident is not automatically a GDPR personal data breach, and a GDPR personal data breach is not automatically an Article 14 reportable TycoonX event. The same facts can, however, meet both tests.

## 8. Third-party components and providers

TycoonX uses third-party platforms, services, SDKs, libraries, payment providers, infrastructure, authentication services, and app-store channels. Their involvement must not create an incident-reporting blind spot.

For a security event involving a third-party component or provider, record at least:

- whether the vulnerable component is contained in, bundled with, remotely used by, or otherwise affects TycoonX;
- the affected TycoonX versions/builds/platforms and remote services;
- the provider's advisory/CVE/incident identifier where available;
- the time CK-Labs first had reliable information about active exploitation or severe product impact;
- whether TycoonX users or important/sensitive TycoonX functions or data are affected or capable of being affected;
- mitigation available to CK-Labs and mitigation available to users;
- provider remediation status and expected replacement/update path; and
- whether the event requires a CRA report even if the root vulnerability originated outside CK-Labs code.

Do not assume that Apple, Google, Xsolla, Supabase, a cloud provider, or an open-source maintainer will make CK-Labs' CRA manufacturer notification for TycoonX.

## 9. Old and unsupported TycoonX versions

Old app versions require explicit triage. A report concerning an older client is not safely dismissible merely because a newer TycoonX build exists.

The record should establish whether the affected version remains a covered product on the Union market, whether users can still run it, whether the issue can affect current backend/data/security functions, whether a free secure update path exists, whether the vulnerability is actively exploited, and whether user-facing mitigation or minimum-version enforcement is necessary.

The separate Terms provisions allowing CK-Labs to require supported versions do not waive Article 14 reporting or any mandatory security/update rights.

## 10. Pre-September 11 vulnerabilities

Do not create a false retrospective incident simply because a vulnerability existed before September 11, 2026.

ENISA's current CRA SRP FAQ states that a manufacturer is not required to retrospectively report an actively exploited vulnerability where the manufacturer was already aware of the active exploitation before September 11, 2026. If CK-Labs becomes aware of the active exploitation on or after September 11, 2026, the reporting obligation applies even if the underlying vulnerability itself existed or was known earlier.

Preserve the evidence supporting the awareness date.

## 11. Required internal incident evidence

For every Article 14 candidate, preserve enough evidence to reconstruct the decision without relying on memory:

- unique incident/security-case identifier;
- reporter/source and intake timestamp;
- CRA awareness timestamp and why that timestamp was selected;
- affected TycoonX product, platform, version/build, backend/service, country/market footprint where known;
- vulnerability or incident classification;
- evidence for or against active exploitation;
- severity assessment against Article 14(5);
- affected or potentially affected security properties/functions/data;
- user impact and known geographic scope;
- third-party component/provider involvement;
- containment, mitigation, update, rollback, minimum-version, credential/session invalidation, or feature-disable actions;
- user mitigation instructions where necessary;
- GDPR/personal-data-breach assessment where relevant;
- consumer-remedy or purchase/entitlement impact where relevant;
- 24-hour, 72-hour, intermediate, and final-report deadlines;
- SRP/CSIRT/ENISA submission identifiers, timestamps, copies, amendments, and acknowledgements;
- user-notification decision, audience, wording, timing, and delivery evidence;
- reasons for any decision that Article 14 is not triggered; and
- closure/root-cause evidence.

Sensitive exploit information must be access-controlled and should not be copied into ordinary public support threads or player-facing logs.

## 12. Minimum response playbook

When a credible security report arrives:

1. preserve the original report and timestamp;
2. contain immediate risk without destroying evidence;
3. assign an incident owner;
4. establish the CRA awareness timestamp;
5. determine whether there is reliable evidence of active exploitation;
6. assess the Article 14 severe-incident criteria;
7. separately assess GDPR and other legal/provider tracks;
8. if Article 14 is triggered, submit the 24-hour early warning through the SRP;
9. continue investigation and submit the 72-hour notification;
10. inform impacted users and, where appropriate, all users, with necessary mitigation/corrective guidance;
11. deploy corrective/mitigating measures as safely and promptly as possible;
12. submit the required final report and any requested intermediate report; and
13. retain the complete decision/submission evidence.

A pending legal analysis is not a reason to ignore an approaching 24-hour deadline. Where classification is genuinely uncertain, escalate immediately and document the decision path.

## 13. Regression / tabletop scenarios

This gate is not complete until CK-Labs can walk through at least these scenarios without inventing the process during the incident:

1. A researcher supplies reliable evidence that an authentication flaw is being used against live TycoonX accounts.
2. A server-side authorization flaw is actively exploited to access another player's private information.
3. A vulnerability exists but there is no reliable evidence of active exploitation and no severe security incident.
4. A normal infrastructure outage causes downtime but has no severe security impact.
5. An incident allows malicious modification of important TycoonX account or entitlement data.
6. Malicious code is introduced through a compromised dependency used by TycoonX.
7. Apple, Google, Xsolla, Supabase, or another provider reports active exploitation in a component or service affecting TycoonX.
8. A personal data breach also satisfies the CRA severe-incident test, requiring parallel CRA and GDPR workflows.
9. A personal data breach does not satisfy the CRA test, but still requires GDPR assessment.
10. An actively exploited flaw affects only an old TycoonX client that users can still run.
11. CK-Labs knew before September 11, 2026 that a vulnerability was actively exploited and must document why the new reporting duty is not being applied retrospectively to that pre-application awareness.
12. The vulnerability existed before September 11, 2026, but CK-Labs first learns of active exploitation after that date.
13. The primary person responsible for SRP filing is unavailable with four hours remaining on the 24-hour clock.
14. The SRP is unavailable when a mandatory report is due.
15. A report is initially incomplete, but enough is known to trigger the early-warning deadline.
16. A severe security incident is mitigated quickly but still requires the staged notification/final-report process.
17. Impacted users need an urgent workaround before an app-store security update completes review.
18. A false-positive exploit report is closed with evidence explaining why neither Article 14 trigger applies.

## 14. Player-facing legal wording

The current TycoonX legal framework should **not** promise that CK-Labs will publicly disclose every vulnerability, attack, outage, or report. Public exploit detail can itself create security risk.

Existing player-facing wording may continue to state that CK-Labs can investigate, contain, restrict vulnerable features, correct invalid state, cooperate with competent authorities/providers, and provide legally required security or user notifications, while preserving mandatory privacy, digital-product, consumer, refund, conformity, liability, and security-update rights.

The operational Article 14 filing details belong primarily in this internal release gate rather than being copied into all 25 localized Terms/Privacy/Purchases/Community documents. A localized legal-document synchronization is required only if canonical player-facing legal meaning materially changes.

## 15. Broader CRA preparation remains separate

Do not misrepresent Article 14 becoming applicable as meaning the entire CRA is already fully applicable. The main CRA requirements generally apply from **December 11, 2027**.

Before that date, CK-Labs should separately prepare for the wider manufacturer obligations, including secure-development and vulnerability-handling requirements, support-period decisions, security updates, product/user information, manufacturer/contact identification, technical documentation, conformity assessment, EU declaration of conformity, CE-marking requirements where applicable, and the CRA single point of contact. The precise implementation must be rechecked against then-current Commission/ENISA guidance before release gates are marked complete.

## 16. Current authoritative references

Checked September 11, 2026:

- Regulation (EU) 2024/2847 (Cyber Resilience Act), especially Articles 14, 16, 17 and 71: https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng
- European Commission, Cyber Resilience Act - Reporting obligations: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting
- European Commission, CRA legislative summary: https://digital-strategy.ec.europa.eu/en/policies/cra-summary
- European Commission, CRA conformity assessment guidance (expressly includes computer games and mobile applications among ordinary products): https://digital-strategy.ec.europa.eu/en/policies/cra-conformity-assessment
- ENISA, CRA Single Reporting Platform FAQ, updated September 10, 2026: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/frequently-asked-questions

## 17. Release/readiness status

**OPEN - current legal obligation, operational readiness not yet verified.**

This gate is not closed merely because this document exists. Closure requires evidence that CK-Labs can actually identify the responsible CRA manufacturer/main establishment, access the Single Reporting Platform, capture a defensible awareness timestamp, classify Article 14 events, meet the 24-hour/72-hour/final-report clocks, notify impacted users where required, preserve filing evidence, and run CRA/GDPR/provider/consumer tracks in parallel without confusing them.

No production database change is required by this document.