# TycoonX GDPR Personal Data Breach Response Release Gate

**Release QA reference. Last reviewed: September 4, 2026.**

Owner: CK-Labs  
Scope: TycoonX personal-data security incidents, account compromise, provider incidents, confidentiality/integrity/availability breaches, GDPR Articles 28, 32, 33 and 34, notification evidence, cross-border authority routing, outages, payment-provider separation, and entitlement isolation.

## Purpose

TycoonX already has a public Privacy Policy, Security & Vulnerability Reporting page, account-compromise controls, payment reconciliation rules, and provider-specific release gates. This gate closes a different operational gap: deciding when a technical or security event becomes a **personal data breach under the GDPR**, when CK-Labs must notify a supervisory authority, when affected people must be informed, and how those actions remain separate from moderation, payment, fraud, and entitlement decisions.

The core rule is:

> A security incident, a compromised player account, a provider outage, and a GDPR personal data breach are related concepts, but they are not interchangeable states.

A fast containment action may be justified before the final legal assessment is complete. That must not become a reason to miss the GDPR notification clock, over-notify every harmless incident, accuse a player of misconduct without evidence, or mutate unrelated Diamonds or VIP.

The canonical English TycoonX Privacy Policy remains the player-facing source. This gate does not materially change its current public meaning. If production policy later changes that meaning, update the canonical English Privacy Policy first and reopen only Privacy localization across the 25 locales in the required order.

## 1. Legal baseline

The production incident process must preserve these current GDPR distinctions.

### Article 4(12) - what counts as a personal data breach

A personal data breach is a security breach leading to accidental or unlawful:

- destruction of personal data;
- loss of personal data;
- alteration of personal data;
- unauthorized disclosure of personal data; or
- unauthorized access to personal data.

That means a breach can concern **confidentiality, integrity, or availability**. It is not limited to public leaks.

Examples for TycoonX:

- an attacker reading private messages or support records can be a confidentiality breach;
- a bug or attacker changing account or transaction records can be an integrity breach;
- ransomware or destructive failure making personal data unavailable can be an availability breach;
- an ordinary FPS drop or temporary feature slowdown with no personal-data impact is not automatically a GDPR personal data breach.

### Article 33 - supervisory-authority notification

Where CK-Labs is the controller, a personal data breach must be notified to the competent supervisory authority **without undue delay and, where feasible, not later than 72 hours after CK-Labs becomes aware of it**, unless the breach is unlikely to result in a risk to the rights and freedoms of natural persons.

If the notification is made after 72 hours, the notification must include the reasons for the delay.

The notification must include at least, to the extent available:

- the nature of the breach;
- where possible, the categories and approximate number of affected data subjects;
- where possible, the categories and approximate number of affected personal-data records;
- a data-protection officer or other contact point;
- likely consequences; and
- measures taken or proposed to address the breach and mitigate adverse effects.

Information may be provided in phases without undue further delay where it cannot all be supplied at the same time.

### Article 33(5) - document every personal data breach

CK-Labs must document personal data breaches, including:

- the facts relating to the breach;
- its effects; and
- remedial action taken.

This documentation duty is broader than the external-notification duty. A breach assessed as **unlikely to result in risk** and therefore not notified externally still needs an internal breach record sufficient to support that assessment.

### Article 34 - communication to affected people

Where a personal data breach is likely to result in a **high risk** to the rights and freedoms of natural persons, CK-Labs must communicate the breach to affected data subjects without undue delay, unless a statutory exception applies.

The communication must use clear and plain language and include the legally required contact point, likely consequences, and remediation/mitigation information.

Article 34 communication may not be required, for example, where:

- appropriate protection such as effective encryption rendered the affected personal data unintelligible to unauthorized persons;
- subsequent measures ensure the high risk is no longer likely to materialize; or
- individual communication would involve disproportionate effort, in which case an equally effective public communication or similar measure is required.

The competent supervisory authority can require communication to data subjects where the legal conditions are met.

### Article 28 - processors must escalate to the controller

A processor must notify its controller **without undue delay** after becoming aware of a personal data breach.

For TycoonX this means processor contracts and operational contacts should make it possible for CK-Labs to learn promptly about relevant incidents at hosting, database, storage, authentication, analytics, communications, security, or other processors. A provider incident cannot safely remain in a vendor-support queue while nobody assesses the Article 33 clock.

## 2. The 72-hour clock must have an explicit start event

Do not model the 72-hour rule as `incident_created_at + 72h`.

Store separately:

- `first_signal_at`: first alert, player report, vendor notice, log anomaly, or internal observation;
- `investigation_opened_at`;
- `controller_awareness_at`: the point CK-Labs has a reasonable degree of certainty that a security incident occurred and personal data were compromised;
- `authority_deadline_at`;
- `authority_notified_at` where applicable; and
- `late_notification_reason` where applicable.

A short initial investigation can be appropriate to determine whether a breach actually occurred. It must not be used as an artificial way to postpone awareness after CK-Labs already has sufficient certainty.

Do not wait for:

- a complete forensic report;
- the final attacker identity;
- exact record counts where only estimates are currently possible;
- a final root-cause fix; or
- a final provider postmortem

before making a required initial notification. Use phased notification where the law allows it.

## 3. Every security incident needs a breach classification record

Use a state model such as:

```text
security_incident
  -> no_personal_data_impact
  -> suspected_personal_data_breach
  -> confirmed_personal_data_breach
       -> unlikely_risk_no_article33_notification
       -> risk_article33_notification
       -> high_risk_article33_and_article34
```

The assessment record should include:

- affected TycoonX systems/features;
- affected personal-data categories;
- confidentiality, integrity, and/or availability impact;
- approximate affected data-subject count and record count where known;
- duration and geographic scope;
- whether data were encrypted/pseudonymized and whether protective keys were affected;
- ease of identifying individuals;
- sensitivity and volume of data;
- possible identity theft, fraud, financial, reputation, safety, discrimination, account-takeover, or other effects;
- vulnerable/minor data-subject considerations where relevant;
- containment and mitigation already completed;
- residual risk;
- Article 33 decision and rationale;
- Article 34 decision and rationale; and
- reviewer and timestamps.

Do not reduce this to `breach = true/false` without the risk reasoning.

## 4. Account compromise must be assessed separately from the GDPR breach question

A compromised TycoonX account can arise from:

- credentials stolen outside CK-Labs;
- credential stuffing using reused passwords;
- phishing;
- a compromised email or platform account;
- a TycoonX authentication/security defect;
- session-token theft;
- support impersonation; or
- another cause.

The fact that the user account was compromised does **not** by itself prove that CK-Labs violated the GDPR or that the legitimate player committed fraud.

However, unauthorized access to personal data through a compromised TycoonX account can still require a GDPR breach assessment even where the original credential theft occurred elsewhere.

Keep these decisions separate:

1. security containment and account recovery;
2. GDPR personal-data-breach assessment;
3. payment/chargeback investigation;
4. exploit or moderation investigation; and
5. final contractual enforcement.

A player's prompt good-faith account-compromise report should never be converted automatically into an admission of chargeback abuse, cheating, or negligence.

## 5. Outages and availability incidents need a personal-data test

Not every TycoonX outage is a personal data breach.

Examples that ordinarily are **not automatically** Article 33 events:

- a view loads slowly;
- a game feature is temporarily unavailable but personal data remain intact and recoverable;
- an upstream network problem blocks access without destruction, loss, alteration, unauthorized disclosure, or unauthorized access to personal data.

Examples that require a serious breach assessment:

- ransomware encrypts production personal data and CK-Labs cannot restore availability promptly;
- backups containing personal data are destroyed or corrupted;
- a deployment irreversibly deletes account/support/transaction data;
- a database incident corrupts ownership or entitlement records linked to identifiable users;
- an outage reveals another user's private information during recovery or failover.

The user-facing outage message and the GDPR breach decision may therefore have different content, audiences, and timing.

## 6. Provider incidents cannot be handled with one universal rule

TycoonX uses or may use providers in different legal roles.

### Processor or subprocessor scenario

Where a provider processes personal data on behalf of CK-Labs as processor/subprocessor:

- require a real breach-escalation contact path;
- preserve the provider's original notification time and content;
- determine `controller_awareness_at` promptly;
- obtain enough incident facts for risk assessment and notification;
- do not wait for a polished provider incident report if Article 33 information is already sufficient; and
- document missing information and follow up through phased notification if needed.

### Independent-controller scenario

Apple, Google, Xsolla, banks, card networks, or other providers may act as independent controllers for parts of their own account, fraud, tax, platform, or payment processing.

A provider's independent-controller breach does not automatically become CK-Labs's breach. CK-Labs must still assess whether:

- TycoonX data controlled by CK-Labs were affected;
- the provider was also processing any data on CK-Labs's behalf;
- CK-Labs received compromised data or credentials;
- CK-Labs must take containment or user-protection action; or
- a separate platform/provider contractual notification is required.

Do not fabricate provider-only facts or tell users that CK-Labs exposed data merely because an independent provider reported its own incident.

## 7. Payment security and GDPR notifications are different state machines

A personal-data breach notification is not itself:

- a refund;
- a chargeback;
- proof of payment fraud;
- proof of entitlement abuse;
- an Apple, Google, or Xsolla purchase reversal;
- a reason to create a negative Diamond balance; or
- a reason to suspend an account permanently.

Likewise, a chargeback or failed payment is not automatically a personal data breach.

If a security incident affects purchase or entitlement data, preserve enough authoritative transaction evidence to reconcile the affected purchase after containment without creating duplicate value or removing unrelated value.

## 8. Product isolation is mandatory

### Purchased Diamonds

- A GDPR investigation does not expire purchased Diamonds.
- Temporary security containment may restrict risky spending/transfer functions where proportionate, but it must not silently convert valid purchased Diamonds into invalid value.
- If transaction records are corrupted, reconstruct them from authoritative TycoonX/provider evidence and isolate uncertain value instead of deleting the entire balance.
- A user-notification email must not itself trigger a Diamond correction.

### One-time 30-Day VIP

- 30-Day VIP remains a one-time, non-renewing 30-day entitlement.
- A security incident, authority notification, or user breach communication must not restart its clock.
- If a CK-Labs-caused incident materially prevents use of a paid period, separately assess conformity, extension, price reduction, termination, refund, or another mandatory remedy where applicable.

### Limited-window Lifetime VIP

- Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows.
- It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase.
- A breach investigation does not reopen a closed Lifetime VIP sales window.
- Incident recovery must restore one valid Lifetime VIP entitlement where authoritative records support it, not create a duplicate.
- Permanent service discontinuation and mandatory consumer remedies remain governed by the canonical Terms and applicable law, not by the breach workflow.

## 9. Article 33 notification must be reconstructable

For each notified breach keep a durable notification packet containing, as applicable:

- internal incident ID;
- controller-awareness timestamp and deadline calculation;
- competent/lead supervisory-authority analysis;
- notification submission timestamp;
- submission reference/receipt;
- copy/version of the notification content;
- categories and approximate numbers reported;
- known consequences;
- measures taken/proposed;
- missing facts and planned follow-up;
- later phased submissions;
- delay explanation if outside 72 hours; and
- closure decision.

The incident response system must preserve enough evidence to show why an incident was or was not notified.

## 10. German supervisory-authority routing

If CK-Labs remains established in North Rhine-Westphalia and no different lead-authority analysis applies, the **Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)** is the practical German supervisory-authority checkpoint for private-sector GDPR breach reporting.

LDI NRW's current Article 33 reporting guidance states that the 72-hour period begins when the controller becomes aware that a personal data breach exists, and its reporting process supports estimated incident timing where exact timing is not yet known.

Before submitting:

- verify the current competent authority and current reporting route;
- for cross-border processing, assess whether a lead supervisory authority applies under GDPR Articles 55/56;
- if there is genuine doubt about lead-authority identity and a notification is due, do not let that uncertainty consume the notification deadline without documented legal assessment; and
- preserve the final submitted authority and basis for selecting it.

Do not hard-code one authority forever in production without periodic verification.

## 11. Cross-border incidents need a lead-authority checkpoint

Where a breach concerns cross-border processing, the EDPB guidance explains that the controller should determine the lead supervisory authority for the relevant cross-border processing.

The incident record should therefore include:

- whether the processing is cross-border;
- CK-Labs's main/single establishment analysis;
- affected establishments/member states where relevant;
- likely affected data-subject member states; and
- selected authority/authorities and rationale.

The location of the attacker, server, or one affected player is not by itself the complete lead-authority test.

## 12. Article 34 communications must help people protect themselves

When individual communication is legally required, do not send a generic marketing-style notice.

The message should, in clear and plain language:

- identify that a personal data breach occurred;
- describe what categories of their information were affected where known;
- explain the likely consequences relevant to them;
- state what CK-Labs has done or is doing;
- give a contact point;
- recommend proportionate protective action where useful, such as changing a password or reviewing account/payment activity; and
- avoid unsupported claims about attacker identity, payment fraud, player fault, or data misuse.

Do not include unnecessary exploit details, secret keys, another player's information, or forensic material that creates a second security risk.

Where affected users speak different languages, the communication process should be capable of producing understandable localized notices where necessary for the communication to be clear and effective. This operational ability does not require the canonical Privacy Policy itself to promise a particular translation workflow.

## 13. Do not use the breach notice as a liability waiver

A legally required breach communication must not say or imply that:

- CK-Labs has no responsibility under any circumstances;
- the user waives GDPR or consumer remedies by continuing to play;
- receiving free Diamonds or VIP compensation settles mandatory legal claims unless a valid settlement is separately reached under applicable law;
- opening the notice means accepting revised Terms; or
- failure to respond means consenting to new processing.

CK-Labs can explain known facts, uncertainty, remediation, and protective steps without making an unnecessary admission of legal liability before the investigation is complete.

## 14. Security-report intake must escalate personal-data indicators

The public TycoonX Security & Vulnerability Reporting page already allows reports about accounts, data, purchases, entitlements, infrastructure, and active incidents.

Production support should route a report into GDPR assessment where it credibly indicates:

- unauthorized access to another user's personal data;
- exposed private messages, support tickets, email addresses, IP/session data, transaction identifiers, or account data;
- corrupted/deleted personal data;
- leaked authentication/session tokens connected to identifiable accounts;
- compromised backups; or
- a provider incident affecting TycoonX-controlled personal data.

A security mailbox cannot become a dead end separate from the Article 33 process.

## 15. Evidence preservation must respect minimization

Incident investigation can justify temporary preservation of logs, backups, access records, messages, transaction evidence, and support communications relevant to the incident.

That does not justify indefinite retention of every player's unrelated data.

For each extended incident hold record:

- the incident/legal purpose;
- data categories held;
- scope and affected users;
- hold start;
- review date;
- release condition; and
- deletion/normal-retention transition when the hold ends.

Do not collect passwords, full payment-card data, authentication backup codes, or unrelated sensitive information merely to make a breach file look complete.

## 16. Provider replacement, business transfer, and shutdown

A change of hosting, database, authentication, analytics, payment, or security provider must preserve:

- processor/controller role mapping;
- incident escalation contacts;
- historical breach records still required under Article 33(5) or other law;
- open authority correspondence;
- unresolved user communications;
- entitlement/payment evidence needed for affected transactions; and
- deletion/retention controls.

A sale, merger, reorganization, or successor operator must not erase open breach obligations or the evidence required to finish them lawfully.

Permanent discontinuation of TycoonX does not erase already-triggered GDPR authority or data-subject notification obligations.

## 17. Minimum production incident data model

A practical incident record should support at least:

```text
incident_id
incident_type
first_signal_at
investigation_opened_at
controller_awareness_at
article33_deadline_at
breach_status
confidentiality_impact
integrity_impact
availability_impact
affected_systems
affected_data_categories
approx_data_subject_count
approx_record_count
affected_countries
processor_or_provider_refs
risk_level
risk_reasoning
article33_required
article33_authority
article33_notified_at
article33_receipt_ref
late_notification_reason
article34_required
article34_exception_basis
article34_communicated_at
article34_audience
containment_actions
remediation_actions
entitlement_isolation_confirmed
payment_state_isolation_confirmed
incident_hold_scope
incident_hold_review_at
closure_at
reviewer
```

Do not store secrets in this record merely because a field called `evidence` exists. Store secure references to appropriately protected evidence where possible.

## 18. Production regression matrix

Before treating the breach workflow as production-ready, test at least these scenarios:

1. **Harmless technical outage**: no personal-data impact. Correct result: operational incident, no invented GDPR breach.
2. **Private-message exposure to another player**: confidentiality breach. Correct result: Article 33/34 risk assessment starts.
3. **Single-account credential stuffing**: attacker reads account data. Correct result: account recovery plus GDPR breach assessment, no automatic owner-fraud finding.
4. **Leaked session tokens from CK-Labs logs**: potentially multiple account takeovers. Correct result: containment, awareness timestamp, risk triage, token invalidation.
5. **Ransomware with restorable encrypted backups**: availability breach assessment records restoration time and residual risk.
6. **Ransomware without reliable restore**: heightened availability and rights/freedoms assessment.
7. **Provider processor notification**: provider alerts CK-Labs. Correct result: processor event escalates immediately into controller assessment.
8. **Provider independent-controller incident**: provider reports its own breach. Correct result: assess TycoonX impact without falsely claiming CK-Labs caused the provider breach.
9. **Incident becomes clear at hour 60**: notification is required. Correct result: initial Article 33 notification before hour 72 where feasible, follow-up later.
10. **Notification after hour 72**: correct result includes reason for delay rather than hiding the timing.
11. **Low-risk confirmed breach**: correct result includes Article 33(5) internal documentation even if authority notification is not required.
12. **High-risk breach**: correct result includes Article 34 communication without undue delay unless a documented statutory exception applies.
13. **Effectively encrypted data stolen, keys not compromised**: correct result assesses the Article 34 encryption exception rather than assuming it automatically.
14. **Disproportionate individual-contact effort**: correct result uses an equally effective public/similar measure if the statutory condition is actually met.
15. **Duplicate player security reports**: one incident record, no duplicate authority notification or duplicate entitlement action solely because reports repeat.
16. **Purchased Diamonds unaffected by breach**: no Diamond removal/expiry.
17. **30-Day VIP active during incident**: no clock restart; separate remedy assessment only if service impairment legally warrants it.
18. **Lifetime VIP account recovered after compromise**: one valid entitlement restored, no reopening of the sales window and no duplicate grant.
19. **Payment data corruption**: reconstruct affected transactions from authoritative records; unrelated transactions remain untouched.
20. **Business transfer during open incident**: successor workflow preserves authority/user communication and Article 33(5) evidence.
21. **Permanent service shutdown during open incident**: notification duties that already arose continue to completion.
22. **Cross-border breach**: correct lead/competent supervisory-authority assessment is recorded rather than routing solely by server location.

## 19. P0 blockers

Treat GDPR breach readiness as **not production-ready** if any of the following is true:

- no one can establish when CK-Labs became aware of a confirmed personal data breach;
- the 72-hour deadline exists only as a calendar reminder with no incident-state linkage;
- provider breach notices can remain unread or untriaged through the deadline;
- the team waits for a complete forensic report before deciding whether an initial Article 33 notification is required;
- low-risk breaches are discarded without Article 33(5) documentation;
- high-risk incidents have no clear Article 34 communication path;
- the competent/lead supervisory authority cannot be determined or verified;
- account compromise automatically becomes a fraud/ban decision;
- GDPR notifications can directly mutate Diamonds or VIP;
- an authority/user notice can accidentally trigger a refund or chargeback workflow;
- security holds retain unrelated personal data indefinitely; or
- a provider migration/business transfer can orphan open breach records.

## 20. Current reference set

Verify these sources again before a material production change:

- GDPR, especially Articles 4(12), 28, 32, 33, 34, 55 and 56: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- European Data Protection Board, Personal data breaches: https://www.edpb.europa.eu/topics/security-data-breaches/personal-data-breaches_en
- EDPB Guidelines 9/2022 on personal data breach notification under GDPR, final version April 4, 2023: https://www.edpb.europa.eu/documents/guideline/guidelines-92022-on-personal-data-breach-notification-under-gdpr_en
- EDPB Guidelines 01/2021 on examples regarding personal data breach notification, final version January 3, 2022: https://www.edpb.europa.eu/documents/guideline/guidelines-012021-on-examples-regarding-personal-data-breach-notification_en
- LDI NRW Article 33 reporting guidance/manual, current reporting route to be rechecked before use: https://www.ldi.nrw.de/

## 21. Release evidence

Before this gate is treated as operationally complete, retain evidence of:

- a written breach-classification/risk matrix;
- a monitored processor/provider escalation path;
- an incident record containing separate signal, awareness, and notification timestamps;
- one simulated Article 33 notification packet with phased-update capability;
- one simulated Article 34 user communication in clear/plain language;
- authority-routing logic including the cross-border checkpoint;
- evidence that security, payment, moderation, and entitlement state machines remain separate; and
- a tabletop exercise demonstrating that an incident discovered outside normal working hours can still be escalated and assessed within the legal clock.

This is an operational release gate, not a substitute for incident-specific legal assessment where the facts are uncertain or high risk.