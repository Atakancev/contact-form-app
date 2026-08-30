# TycoonX GDPR Breach & Security Incident Response Gate

**Release/legal operations checkpoint: August 31, 2026**

This gate translates the existing TycoonX Privacy Policy security commitments into an operational incident-response process for CK-Labs. It is designed for incidents involving TycoonX account data, gameplay/economy data, purchase and entitlement records, chats/support content, authentication information, infrastructure, logs, payment integrations, or other personal data.

This document does not replace incident-specific legal advice. Mandatory rights and notification duties remain controlling.

## 1. Distinguish a security incident from a personal data breach

Not every outage, exploit, failed login, compromised player credential, or infrastructure alert is automatically a GDPR personal data breach. The incident lead must determine whether the event caused accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to personal data within GDPR Article 4(12).

Examples that require breach assessment include:

- unauthorized access to a TycoonX database, storage bucket, support mailbox, admin panel, authentication token, private chat, or backup containing personal data;
- accidental exposure of player email addresses, IP addresses, support attachments, private messages, transaction identifiers, account-security logs, or account-linked gameplay records;
- malicious or accidental alteration/deletion of personal data where integrity or availability is affected;
- compromise of a provider credential that gave, or reasonably may have given, unauthorized access to TycoonX personal data;
- a provider informing CK-Labs that TycoonX personal data processed on CK-Labs' behalf was breached.

A single player's account takeover caused only by that player's reused password is not automatically a CK-Labs personal data breach, but it remains a security incident and must be assessed. If CK-Labs systems, authentication, reset flows, session handling, support procedures, or provider access contributed to unauthorized disclosure/access, the GDPR breach analysis must be reopened.

## 2. Start the clock from awareness, not from perfect certainty

For every suspected personal data breach, record:

- first detection time;
- when CK-Labs obtained a reasonable degree of certainty that personal data had been compromised;
- who made the assessment;
- affected systems/providers;
- known and possible categories of personal data;
- likely affected player groups and jurisdictions; and
- the current risk assessment.

The Article 33 clock must not be delayed simply because the investigation is incomplete. Where required information is not yet available, make the initial notification in time and supplement it in phases without undue further delay.

## 3. Article 33 supervisory-authority notification

Where GDPR applies, CK-Labs must notify the competent supervisory authority **without undue delay and, where feasible, within 72 hours after becoming aware** of a personal data breach, unless the breach is unlikely to result in a risk to the rights and freedoms of natural persons.

If a required notification is made after 72 hours, the notification must include the reasons for the delay.

At minimum, the incident file and notification workflow must be able to provide:

1. the nature of the breach, including where possible the categories and approximate number of affected data subjects and personal-data records;
2. the name and contact details of the data-protection contact point;
3. the likely consequences of the breach; and
4. measures taken or proposed to address the breach and mitigate adverse effects.

Do not wait for an exact user count if a defensible approximate number and phased notification are available.

## 4. Competent authority and cross-border incidents

CK-Labs must identify the competent supervisory authority for the actual processing and establishment involved. Because CK-Labs operates from Germany and TycoonX can involve users across the EEA, the incident record must consider whether the event involves cross-border processing and whether a lead supervisory authority is applicable.

For a German/NRW incident where the Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen is competent, use the current LDI NRW Article 33 reporting route rather than an outdated saved form or guessed address. If there is genuine uncertainty over the lead authority in a cross-border case, the EDPB recommends at minimum notifying the local authority where the breach took place while the competence question is resolved.

The repository must not hard-code one authority as universally competent for every future CK-Labs establishment or processing arrangement.

## 5. Article 33(5) breach register is mandatory even when no notification is sent

Every confirmed personal data breach must be documented, including breaches assessed as unlikely to create a reportable risk.

The breach register must capture enough information to demonstrate the decision, including:

- facts and chronology;
- affected systems/providers;
- categories of people and personal data;
- confidentiality, integrity and availability impact;
- approximate scale where known;
- likely consequences;
- risk/high-risk assessment and reasoning;
- containment and remediation;
- whether Article 33 notification was required and why;
- whether Article 34 communication was required and why;
- notification/communication timestamps;
- reasons for any delay; and
- follow-up corrective actions.

The register itself contains sensitive security information. Access must be restricted and retention must be justified rather than indefinite by default.

## 6. Article 34 communication to affected people

Where a personal data breach is **likely to result in a high risk** to people's rights and freedoms, CK-Labs must communicate the breach to affected people **without undue delay**, unless a lawful Article 34 exception applies.

The communication must use clear and plain language and include at least:

- the nature of the breach;
- a CK-Labs contact point for more information;
- likely consequences; and
- measures taken or proposed, including practical mitigation where appropriate.

Depending on the incident, useful player actions may include changing a password, revoking sessions, securing an email/platform account, reviewing unexpected purchase activity, or ignoring phishing messages that impersonate CK-Labs. Do not tell users to take irrelevant steps merely to make the notice look comprehensive.

Article 34 communication is not required merely because an incident occurred. The statutory exceptions must be assessed transaction-by-transaction/incident-by-incident, including effective protections such as encryption that rendered the affected data unintelligible, subsequent measures that removed the high risk, or disproportionate effort where the law instead requires an equally effective public communication or similar measure.

## 7. Risk assessment must reflect TycoonX-specific harm

Risk analysis must consider more than whether card numbers were exposed. Relevant TycoonX harm can include:

- account takeover or credential abuse;
- identity or phishing risk from email/account data;
- disclosure of private chat or support content;
- financial loss or fraudulent purchases;
- unauthorized entitlement changes or chargeback abuse;
- exposure of children/minors or other vulnerable users;
- profiling or linkage of gameplay/social behavior to an identifiable person;
- loss or manipulation of account-linked records that affects a player's ability to prove a purchase, entitlement, complaint, or legal claim; and
- combinations of seemingly low-sensitivity fields that materially increase risk when linked together.

The presence of children or vulnerable users, credential material, financial/payment-linked data, private communications, or large-scale exposure should increase scrutiny. Do not mechanically classify every incident as low risk because TycoonX does not normally receive full payment-card numbers.

## 8. Processor/provider incidents

Contracts and operational contacts for hosting, database, storage, authentication, email/support, analytics, crash reporting, moderation, security, and other processors must support prompt incident escalation.

If CK-Labs acts as controller and a processor suffers a breach, the provider's delay does not reset CK-Labs' Article 33 obligations after CK-Labs becomes aware. Relevant provider evidence must be preserved and the risk assessment must be CK-Labs' own defensible decision.

If CK-Labs ever acts as a processor for another controller, GDPR Article 33(2) requires notification to that controller **without undue delay** after awareness. The EDPB recommends prompt processor notification, with further details supplied in phases where necessary.

## 9. Payment and entitlement integrity during a breach

A security incident must not be used as a shortcut to erase legitimate paid value.

During containment or recovery:

- freeze only the systems/entitlements reasonably necessary to prevent further harm;
- preserve authoritative Apple, Google Play, Xsolla and CK-Labs transaction/entitlement evidence;
- rotate compromised secrets and invalidate affected sessions/tokens;
- do not revoke Diamonds, 30-Day VIP or Lifetime VIP merely because an account or infrastructure incident occurred;
- distinguish exploit-generated/unauthorized value from unrelated verified purchases;
- do not treat a suspected breach as proof that a payment was fraudulent;
- reconcile restored/corrected entitlements idempotently after integrity is re-established; and
- preserve mandatory refund, withdrawal, conformity, price-reduction, damages and other consumer rights.

If transaction or entitlement records themselves were altered, provider/server records must be used to reconstruct the most reliable state possible without silently granting or removing value twice.

## 10. Account-compromise response

For a reported account compromise, support must be able to:

- verify the claimant proportionately without requesting unnecessary sensitive data;
- revoke compromised sessions/credentials where appropriate;
- preserve evidence needed to investigate unauthorized actions;
- identify whether other accounts/systems are affected;
- separate unauthorized gameplay/economy actions from verified paid purchases;
- assess whether the event is an individual account-security problem or a wider CK-Labs personal data breach; and
- avoid promising restoration of every gameplay consequence where doing so would harm other players or conflict with authoritative transaction/game records.

Account compromise does not automatically entitle a player to a refund, and a refund/chargeback does not automatically prove account compromise. Each issue must be reconciled using the applicable store/provider process, TycoonX records and mandatory law.

## 11. Vulnerability and security-report intake

TycoonX Support must have a route for credible security reports. Reports indicating active unauthorized access, exposed credentials, public storage, authentication bypass, purchase-validation bypass, or personal-data exposure must be escalated immediately rather than treated as ordinary feature requests.

Do not require a reporter to exploit additional accounts or download additional personal data to prove a vulnerability.

## 12. Incident communications must stay accurate

Public or player communications must:

- say what is known and what remains under investigation;
- avoid unsupported assurances such as "no data was accessed" before that conclusion is reasonably established;
- avoid minimizing a breach merely because passwords or card numbers were not involved;
- not falsely blame Apple, Google, Xsolla, a hosting provider, or the player before evidence supports it;
- distinguish service outage, security incident, personal data breach, payment problem and entitlement correction where those are different events; and
- provide follow-up information when material facts or recommended player actions change.

A legally required breach notice is not a marketing announcement and must not be obscured by promotional language.

## 13. Release evidence

Before TycoonX full release on **September 1, 2026**, CK-Labs should be able to produce a dated dry-run showing that it can:

- timestamp awareness and calculate the 72-hour Article 33 deadline;
- create a regulator notification with Article 33(3) fields;
- submit a phased follow-up without overwriting the original chronology;
- record a non-notified low-risk breach with reasoning under Article 33(5);
- generate a clear Article 34 high-risk user notice;
- identify the currently competent supervisory-authority reporting route;
- receive and escalate a processor/provider breach notice;
- revoke sessions/rotate secrets while preserving unrelated valid paid entitlements; and
- restore transaction/entitlement integrity from authoritative records without duplicate grants or double clawbacks.

A tabletop exercise is acceptable evidence; no real personal data breach should be created for testing.

## 14. Canonical/public legal wording trigger

The current TycoonX Privacy Policy already states that CK-Labs investigates security incidents, uses technical and organizational safeguards, processes security/fraud data, and preserves applicable legal obligations and user rights. This gate therefore does not by itself require changing public canonical wording.

If CK-Labs later adds a new category of breach-response processing, recipient, international transfer, retention purpose, automated decision, security-provider disclosure, or materially different data practice not already covered by the canonical Privacy Policy, update the English Privacy Policy first and reopen all 25 localized Privacy documents in the required locale order.

## Current legal references checked August 31, 2026

- GDPR Articles 4(12), 32, 33 and 34: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- European Data Protection Board, Data breaches guide for small businesses: https://www.edpb.europa.eu/sme/assess-the-risks/data-breaches_en
- EDPB Guidelines 9/2022 on personal data breach notification: https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-92022-personal-data-breach-notification-under_en
- LDI NRW guidance/reporting information: https://www.ldi.nrw.de/

No database change, GitHub Action, paid service, or production incident is required by this gate.