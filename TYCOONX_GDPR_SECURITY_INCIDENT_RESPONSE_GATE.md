# TycoonX GDPR Security Incident Response Gate

Last reviewed: August 28, 2026

This is a release and incident-response checklist for CK-Labs. It complements the TycoonX Privacy Policy, Terms of Service, security-reporting page, and the separate EU Cyber Resilience Act (CRA) reporting gate. It is not a promise that every technical incident is a personal-data breach and it does not replace case-specific legal analysis.

## 1. Separate the incident types first

Before starting any external notification flow, classify the event accurately.

- A security incident is not automatically a personal-data breach.
- A personal-data breach exists where personal data is accidentally or unlawfully destroyed, lost, altered, disclosed without authorization, or accessed without authorization. Loss of availability can also qualify, for example where ransomware makes personal data unavailable.
- An economy exploit, duplicated entitlement, game-balance bug, ordinary outage, or cheating incident that does not compromise personal data is not a GDPR personal-data breach merely because it is serious for the game.
- A single incident can trigger more than one regime. For example, an exploited authentication vulnerability could be both a GDPR personal-data breach and, once the CRA reporting rules apply, a separately reportable cybersecurity event.

TycoonX examples requiring immediate privacy triage include unauthorized database access, exposed backups, stolen administrative credentials, leaked private messages, session-token theft, unauthorized account access that exposes profile or transaction data, misdirected exports, public storage buckets containing personal data, or a provider breach affecting TycoonX data.

## 2. Record the awareness time immediately

The GDPR notification clock is tied to when the controller becomes aware of the personal-data breach, not when the root cause is finally understood.

Operational requirement:

1. Record the first report or alert time.
2. Record when CK-Labs reached a reasonable degree of certainty that personal data had been compromised.
3. Record who made that determination and on what evidence.
4. Preserve later changes to the assessment rather than overwriting the original timeline.

Do not delay the awareness timestamp while waiting for perfect forensic certainty.

## 3. Supervisory-authority notification: 72-hour gate

Where CK-Labs is the controller, a personal-data breach must be notified to the competent supervisory authority without undue delay and, where feasible, within 72 hours after awareness, unless the breach is unlikely to result in a risk to the rights and freedoms of natural persons.

If the notification is late, the reasons for the delay must accompany it.

Do not use a blanket rule such as “all incidents are reported” or “only confirmed hacks are reported.” The decision must be based on the GDPR risk threshold for the actual personal-data breach.

Before full release, CK-Labs should identify the competent authority for its establishment and cross-border processing position and keep the correct reporting route available to the person handling incidents. Do not assume that the federal German authority is automatically competent for every private-sector incident. If the competent authority is uncertain during an active cross-border incident, obtain case-specific advice quickly and at minimum preserve the notification timeline and risk assessment.

## 4. Notification can be phased

Lack of complete forensic information is not a reason to miss the 72-hour window.

Where all required information cannot be provided at once, the initial notification may be made with the information then available and supplemented in phases without undue further delay.

The Article 33 notification should, at minimum, cover:

- the nature of the breach;
- where possible, the categories and approximate number of affected people;
- where possible, the categories and approximate number of affected personal-data records;
- a contact point for further information;
- the likely consequences; and
- measures taken or proposed to address and mitigate the breach.

## 5. Affected-user notification: high-risk gate

If the personal-data breach is likely to result in a high risk to the rights and freedoms of affected people, CK-Labs must communicate the breach to them without undue delay unless a statutory exception applies.

The user communication must be clear and plain, should explain what happened in terms a player can understand, and should include the relevant contact point, likely consequences, response measures, and practical steps the player can take.

Possible TycoonX mitigation instructions can include resetting a password, revoking sessions, re-authenticating a connected account, watching for phishing, or contacting the relevant payment provider where payment-account security is affected.

Do not use vague language such as “technical maintenance” to conceal a reportable breach from affected users.

## 6. Exceptions to direct user communication are narrow

Article 34 can remove the direct-notification requirement in specific situations, including where:

- appropriate technical protection, such as effective encryption, rendered the affected personal data unintelligible to unauthorized persons;
- subsequent measures ensure the high risk is no longer likely to materialize; or
- individual communication would involve disproportionate effort, in which case an equally effective public communication or similar measure is required.

Do not assume that “we use encryption” automatically eliminates the Article 34 duty. The actual affected data, keys, access path, and residual risk must be assessed.

## 7. Document every personal-data breach

CK-Labs must document personal-data breaches even when the final decision is that supervisory-authority notification is not required.

The incident record should include at least:

- facts and timeline;
- systems and data involved;
- affected categories and approximate scale where known;
- risk assessment and rationale;
- effects or likely effects;
- containment and remedial measures;
- whether Article 33 notification was made and why;
- whether Article 34 user communication was made and why;
- copies or references to notifications and follow-up submissions; and
- closure/review notes.

Documentation should be sufficient to demonstrate compliance but should not become an excuse to retain unrelated personal data indefinitely.

## 8. Processor and provider incidents

Where a processor handling TycoonX personal data becomes aware of a personal-data breach, the GDPR requires the processor to notify the controller without undue delay.

CK-Labs should therefore ensure relevant processor agreements and incident contacts allow rapid escalation from hosting, database, authentication, storage, communications, analytics, moderation, and other providers.

For a provider incident:

- preserve the provider's first alert and incident timeline;
- determine whether TycoonX personal data was actually affected;
- request the information needed for CK-Labs's own Article 33/34 assessment;
- do not assume the provider's notification to its regulator satisfies CK-Labs's controller obligations; and
- do not wait for the provider's final postmortem if CK-Labs already has enough information to become aware of a personal-data breach.

## 9. Account compromise and entitlement integrity

A compromised player account can be both a security-support incident and a personal-data breach depending on how the compromise occurred and what data was exposed.

CK-Labs may take proportionate protective steps such as revoking sessions, resetting authentication, temporarily restricting sensitive features, freezing suspicious purchase/economy activity, or requiring re-verification while the incident is investigated.

Those measures must not be used as a blanket reason to confiscate unrelated legitimate purchases or entitlements. Any Diamond, VIP, refund, chargeback, or game-state correction should be tied to authoritative TycoonX, Apple, Google, Xsolla, or other relevant provider records and remain subject to mandatory consumer rights.

## 10. Fraud, chargebacks, and breach evidence

Security evidence may overlap with fraud or chargeback handling, but the purposes must remain proportionate.

- Share only evidence reasonably necessary for the dispute or legal obligation.
- Do not send unrelated private chats, unrelated purchases, or excessive account history merely because a chargeback exists.
- Do not fabricate, exaggerate, or selectively misrepresent evidence.
- Keep an audit trail of material disclosures made to payment/platform partners where appropriate.
- A consumer exercising a refund, withdrawal, complaint, or chargeback right is not by itself evidence of fraud.

## 11. GDPR and CRA clocks must not be merged

The GDPR and the EU Cyber Resilience Act use different triggers, thresholds, recipients, and deadlines.

For incidents occurring once the CRA Article 14 reporting duties become applicable on September 11, 2026:

- run the GDPR personal-data-breach assessment and CRA cybersecurity reporting assessment in parallel;
- keep one factual incident timeline but separate the legal decisions and reporting destinations;
- do not assume a CRA report satisfies GDPR Articles 33 or 34;
- do not assume a GDPR notification satisfies CRA Article 14; and
- keep user communications factually consistent while tailoring them to the legally required purpose.

## 12. Release test before September 1, 2026

Before full release, verify all of the following:

- [ ] A human owner is assigned for privacy/security incident escalation.
- [ ] The competent GDPR supervisory-authority reporting route is identified and accessible.
- [ ] The 72-hour deadline can be tracked from the recorded awareness time.
- [ ] CK-Labs can issue an initial phased notification before the investigation is complete.
- [ ] Affected-user communications can be sent without relying on a future app update.
- [ ] Active sessions/tokens can be revoked quickly where account compromise requires it.
- [ ] Provider incident contacts and contractual notification paths are documented.
- [ ] All breaches, including non-notified breaches, can be recorded with the Article 33(5) facts, effects, and remedial actions.
- [ ] GDPR and CRA incident clocks are tracked separately.
- [ ] Privacy incident handling does not silently remove unrelated paid TycoonX value.
- [ ] Security communications use the exact `TycoonX` brand and do not describe the released service as beta.

## 13. Source checkpoint

Current official references checked on August 28, 2026:

- Regulation (EU) 2016/679 (GDPR), Articles 32, 33 and 34.
- European Data Protection Board, “Data breaches” guidance for small businesses: controllers must document breaches, notify the relevant DPA within 72 hours unless the breach is unlikely to result in a risk, and communicate high-risk breaches to affected individuals without undue delay.
- European Data Protection Board DPA notification directory and breach-notification guidance.
- LDI NRW Article 33 reporting guidance, which records that the 72-hour period begins when the controller becomes aware that a personal-data breach exists.

This gate should be rechecked after material changes to TycoonX authentication, data storage, messaging, payment integrations, security architecture, or the applicable EU/German incident-reporting framework.
