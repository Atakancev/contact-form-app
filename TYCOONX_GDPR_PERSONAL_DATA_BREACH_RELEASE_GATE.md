# TycoonX GDPR Personal Data Breach Release Gate

**Status:** P0 privacy / security / incident-response release gate  
**Owner:** CK-Labs  
**Last reviewed:** September 2, 2026  
**Scope:** TycoonX mobile and web apps, backend services, legal/support surfaces, community systems, purchase/entitlement systems, analytics, authentication, hosting, storage and processors that handle personal data.

## Purpose

This gate closes the operational gap between the TycoonX Privacy Policy's security commitments and the incident-response duties that can arise under Articles 4(12), 32, 33 and 34 GDPR.

It is founder-protective without weakening mandatory rights. CK-Labs may investigate carefully, contain incidents, preserve evidence, avoid unnecessary public speculation and use risk-based notification rules. But CK-Labs must not delay a required notification merely to wait for perfect forensic certainty, call every technical incident "not a data breach" without assessment, or use payment/game-economy corrections as a substitute for privacy incident handling.

This gate is an implementation and evidence control. It does **not** by itself amend the canonical player-facing Terms, Purchases & Refunds Policy, Privacy Policy or Community Standards. If implementation later requires a material public wording change, update the canonical English document first and reopen only the affected localized document type in `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`.

TycoonX has been in full release since **September 1, 2026**. Current player-facing copy must not describe the live service, current users, purchases, VIP, Diamonds or rewards as a beta service.

## 1. A personal data breach is broader than a leaked database

Use the GDPR Article 4(12) concept: a security breach that leads accidentally or unlawfully to destruction, loss, alteration, unauthorized disclosure of, or access to personal data.

Assess all three security dimensions:

- **confidentiality:** unauthorized disclosure or access;
- **integrity:** unauthorized or accidental alteration; and
- **availability:** accidental or unlawful destruction or loss, including loss of access where this affects personal data.

Examples relevant to TycoonX can include:

- a database or storage bucket accidentally exposed to the internet;
- an attacker obtaining account, support, chat or transaction data;
- a support export sent to the wrong recipient;
- private messages made publicly accessible because of an authorization bug;
- account-reset links or authentication tokens exposed to another user;
- unauthorized modification of account or entitlement records that include personal data;
- ransomware or destructive corruption that makes personal data unavailable and no adequate recovery copy exists;
- a third-party SDK sending personal data to an unauthorized recipient;
- logs exposing email addresses, IP addresses, transaction identifiers or support content; and
- a compromised admin/support account allowing unauthorized access to player data.

Not every outage, crash, exploit or cybersecurity alert is necessarily a personal data breach. But every credible incident that may have compromised personal data requires a recorded assessment rather than an assumption.

## 2. Keep the incident clock separate from the forensic investigation

The GDPR notification clock is tied to when CK-Labs becomes **aware** of a personal data breach, not when every forensic detail is known.

Use the EDPB awareness standard: CK-Labs should be treated as aware when it has a **reasonable degree of certainty** that a security incident occurred and led to personal data being compromised.

Operational rule:

1. record the first alert time;
2. begin the initial investigation promptly;
3. record when the evidence reached the reasonable-degree-of-certainty threshold;
4. treat that time as the Article 33 awareness timestamp unless legal review establishes another defensible timestamp; and
5. continue the deeper investigation in parallel with notification work where notification may be required.

A short initial investigation can be appropriate to determine whether personal data were actually compromised. It must not become an artificial waiting period designed to postpone awareness.

Do not wait for:

- exact attacker identity;
- a complete list of every affected record;
- final root-cause analysis;
- a finished penetration-test report;
- confirmation that stolen data were later misused; or
- provider postmortems that arrive after the statutory deadline,

if CK-Labs already has reasonable certainty that a qualifying breach occurred.

## 3. Three GDPR notification levels

For every confirmed personal data breach, classify the likely impact on natural persons.

### Level A: unlikely to result in a risk

If the breach is unlikely to result in a risk to individuals' rights and freedoms:

- Article 33(1) supervisory-authority notification is generally not required on that basis;
- Article 34 communication to individuals is generally not required on that basis; but
- the breach must still be documented under Article 33(5), including the facts, effects, assessment and remedial action.

"Low volume" does not automatically mean "no risk". Consider data sensitivity, identifiability, ease of misuse, account-takeover potential, vulnerable users, financial/payment context, private communications and realistic consequences.

### Level B: likely to result in a risk

If the breach is likely to result in a risk to rights and freedoms, notify the competent supervisory authority **without undue delay and, where feasible, not later than 72 hours after awareness**.

If notification is made later than 72 hours, record and provide the reasons for the delay as required.

### Level C: likely to result in a high risk

If the breach is likely to result in a **high risk** to rights and freedoms:

- make the required Article 33 supervisory-authority notification; and
- communicate the breach to affected individuals **without undue delay** unless an Article 34(3) exception is genuinely satisfied.

High-risk assessment must consider the actual incident, not merely the internal severity label used by engineering.

## 4. Supervisory-authority notification content

A required Article 33 notification must contain at least, where available:

- the nature of the breach;
- categories and approximate number of affected individuals;
- categories and approximate number of affected personal-data records;
- the name and contact details of the DPO, if one exists, or another contact point where more information can be obtained;
- likely consequences of the breach; and
- measures taken or proposed to address the breach, including measures to mitigate adverse effects where appropriate.

Do not invent precise affected-user or record counts merely to complete a form. Where exact figures are not yet known, use defensible estimates and update them when more reliable information becomes available.

## 5. Phased notification is safer than missing the deadline

Article 33(4) allows information to be provided in phases where it cannot be provided at the same time.

If a notifiable breach is known but the investigation is incomplete:

- submit the initial notification within the required period using the facts then available;
- identify material information that remains under investigation;
- provide later information without undue further delay; and
- preserve a timeline showing what became known when.

Do not hold a known notifiable breach past 72 hours solely because CK-Labs wants to submit one polished final report.

## 6. Every breach needs an incident record, including non-notified breaches

Article 33(5) requires documentation sufficient for the supervisory authority to verify compliance.

Maintain a breach register with at least:

- incident ID;
- first alert timestamp;
- awareness timestamp and why that threshold was reached then;
- systems/providers involved;
- affected data categories;
- approximate affected persons/records;
- confidentiality, integrity and/or availability impact;
- risk and high-risk assessment with reasons;
- decision whether authority notification is required;
- decision whether individual communication is required;
- authority/authorities notified and timestamps;
- individual-notification method and timestamp where applicable;
- containment and remediation actions;
- evidence preservation;
- processor/controller notifications received or sent;
- delayed-notification reasons, if any;
- phased-notification follow-ups;
- entitlement/game-state isolation actions; and
- closure/root-cause/prevention notes.

Do not erase the breach record merely because the technical problem was fixed quickly or no player complained.

## 7. Processor incidents must reach CK-Labs fast enough to act

A processor must notify its controller of a personal data breach **without undue delay** under Article 33(2).

For TycoonX processors and service providers that handle personal data, contracts and operational contacts should support prompt incident escalation. Review the actual agreement/DPA rather than assuming a vendor's public privacy policy is the incident-notification contract.

For each important processor/provider, record:

- controller/processor/independent-controller role for the relevant processing;
- security-incident contact route;
- contractual notification timing, if specified;
- what minimum incident facts the provider should send;
- escalation contact if the ordinary support route fails; and
- how CK-Labs will preserve its own 72-hour analysis even if the provider is still investigating.

A processor's notification does not automatically prove that CK-Labs must notify users or a supervisory authority. It triggers CK-Labs' own Article 33/34 assessment using the facts and risk.

Conversely, a provider saying "we are investigating" does not pause CK-Labs' clock after CK-Labs itself has reached the awareness threshold.

## 8. Apple, Google Play and Xsolla boundaries

Apple, Google Play and Xsolla may each control different pieces of purchase, platform, fraud, account and payment data. Their own incident duties do not replace CK-Labs' GDPR duties for personal data under CK-Labs' control.

### Apple

Apple's current App Review Guidelines require apps to comply with applicable privacy law and require third parties receiving app user data to provide the same or equivalent protection described in the app privacy policy and required by the guidelines.

Release implication:

- an incident in a TycoonX SDK or CK-Labs backend remains CK-Labs' incident to assess merely because the app is distributed by Apple;
- an Apple-side incident involving data Apple controls is not automatically a CK-Labs breach; and
- if Apple supplies incident facts showing TycoonX-controlled data or credentials were affected, CK-Labs must assess its own obligations promptly.

### Google Play

Google Play's current User Data policy requires transparent, secure handling of user data and makes the developer responsible for compliant third-party SDK behavior.

Release implication:

- an SDK-caused unauthorized transmission can be both a platform-policy issue and a GDPR personal-data-breach issue;
- Play policy compliance does not replace Article 33/34 assessment; and
- Data safety declarations must be corrected separately if an incident reveals that shipped data flows differ from the declared model.

### Xsolla

Xsolla may process payment and customer data in its own roles and its public privacy materials address security-breach notification to affected users. The actual TycoonX/Xsolla contract, DPA, project configuration and transaction flow must be checked to determine what incident information Xsolla owes CK-Labs and which party controls each affected data set.

Do not assume "merchant of record" means Xsolla is responsible for every TycoonX privacy breach. Do not assume the opposite either.

## 9. Individual breach communications must be useful, not defensive boilerplate

Where Article 34 requires communication to affected individuals, it must be in clear and plain language and should help them reduce risk.

Include at least:

- the nature of the breach;
- CK-Labs' DPO or other contact point for further information;
- likely consequences; and
- measures CK-Labs has taken or proposes to take, including mitigation where appropriate.

Where useful, also give concrete protective steps, for example:

- change a compromised password or linked credential;
- revoke suspicious sessions;
- enable stronger authentication where available;
- watch for targeted phishing using leaked account/support information;
- contact a payment provider if payment-related credentials controlled by that provider may be at risk; or
- contact TycoonX Support if unauthorized account changes are observed.

Do not tell players that all payment cards were exposed if CK-Labs never received full card data. Do not minimize an incident as "technical maintenance" if a high-risk personal data breach actually requires Article 34 communication.

## 10. Article 34(3) exceptions require evidence

Communication to affected individuals may not be required under Article 34(3) where, for example:

- appropriate protection measures such as effective encryption rendered affected data unintelligible to unauthorized persons;
- later measures ensure the high risk is no longer likely to materialize; or
- individual communication would involve disproportionate effort, in which case an equally effective public communication or similar measure is required.

These are not blanket exemptions.

For encryption, verify that the actual affected data were protected and that keys/secrets were not compromised. Encryption may reduce confidentiality risk but does not automatically solve integrity or availability consequences.

If CK-Labs relies on a later mitigation measure, record why it genuinely removed the high risk rather than merely making the incident less embarrassing.

If disproportionate effort is relied upon, document why direct communication is genuinely disproportionate and how the alternative communication is equally effective.

## 11. Account compromise and credential incidents

A single compromised account can still be a personal data breach if CK-Labs' security failure or unauthorized access exposed or altered personal data.

But keep these situations separate:

- credential reuse/phishing entirely outside CK-Labs systems;
- compromise of a player's device;
- compromise caused by a CK-Labs authentication/session flaw;
- compromise of a CK-Labs admin/support account; and
- compromise of an authentication provider.

Do not automatically classify every player's report of unauthorized gameplay as a reportable GDPR breach. Investigate whether personal data were actually compromised and whether CK-Labs is controller for the affected processing.

At the same time, do not reject a credible privacy incident simply because the attacker also stole virtual assets or changed game state.

## 12. Security incident handling must not corrupt paid entitlements

Privacy containment is not a payment reversal.

Unless a separate valid purchase, refund, fraud, legal-order or Terms basis requires an entitlement correction:

- a data-breach investigation must not delete unrelated legitimately purchased Diamonds;
- locking an account to stop an attacker must not restart, extend, shorten or duplicate the original one-time **30-Day VIP** period;
- a privacy incident must not introduce a hidden expiry for **Lifetime VIP** or convert it into 30-Day VIP;
- restoring a compromised account must not replay Apple, Google Play or Xsolla entitlement events; and
- a breach-notification email must not be treated as evidence of chargeback, exploit, promotion or regional-price abuse.

If unauthorized transactions or entitlement mutations occurred during a compromise, correct only the affected ledger/state using authoritative records and idempotent restoration logic.

## 13. Breach communications must not become marketing

A required or necessary security/breach communication is a service/legal communication, not marketing permission.

Do not:

- insert a substantial Diamond/VIP promotion into a breach notice;
- re-subscribe an opted-out player because a security email is being sent;
- use the breach recipient list for later marketing without an independent lawful basis; or
- condition receipt of breach/security information on optional marketing consent.

Keep the direct-marketing suppression rules and security-notice delivery rules separate.

## 14. Cross-border breach authority mapping

Determine the competent supervisory authority before an incident, not while the 72-hour clock is expiring.

Where CK-Labs has an EEA main establishment and the breach concerns cross-border processing, assess the applicable lead-supervisory-authority / one-stop-shop rules.

If the relevant establishment is in North Rhine-Westphalia, verify at incident time whether the **Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)** is the competent authority for the affected non-public processing. LDI NRW currently provides an Article 33 breach-notification web process and explains that the 72-hour period begins when the controller knows that a personal data breach exists.

Do not hard-code one authority forever. A change of establishment, corporate structure, controller role or cross-border decision-making can change the competent authority.

If a future successor operator is **not established in the EEA** but remains subject to GDPR Article 3(2) or 3(3), do not assume that appointing an Article 27 representative creates one-stop-shop protection. EDPB Guidelines 9/2022 state that the representative alone does not trigger one-stop-shop and that notification may be required to every supervisory authority for which affected data subjects reside in that Member State.

## 15. Business transfers, provider replacements and shutdown

A sale, merger, reorganization, successor operator, hosting migration, authentication-provider replacement or payment-provider replacement must preserve incident-response continuity.

Before material provider/operator changes:

- migrate incident contacts and breach-register custody;
- identify which party owns open incident investigations;
- preserve lawful evidence and notification records;
- avoid losing processor-notification routes;
- make sure a successor knows which notifications/follow-ups remain outstanding; and
- keep data retention limited to what is lawfully needed.

Permanent shutdown of TycoonX does not erase an existing Article 33/34 duty or permit deletion of the evidence needed to complete a legally required breach response.

## 16. Do not use the breach process to conceal other obligations

A personal data breach can trigger other workflows at the same time. Keep them coordinated but legally separate.

Possible parallel workflows include:

- account-compromise containment;
- app/platform security review;
- DSA illegal-content/safety workflows;
- consumer conformity/remedy handling after an outage;
- payment/provider fraud reporting;
- law-enforcement reporting where lawful and appropriate;
- vulnerability remediation;
- processor contract enforcement; and
- communication with insurers/advisers where applicable.

A GDPR authority notification does not itself prove a Terms violation by a player. A police report does not replace Article 33. A provider outage does not eliminate a high-risk Article 34 communication.

## 17. Minimum incident-response decision tree

For every credible security incident:

1. **Contain safely** without destroying evidence.
2. **Ask whether personal data may be affected.**
3. **Record the first alert time.**
4. **Investigate promptly** to reach a reasonable degree of certainty.
5. **Record awareness time** once the personal-data-breach threshold is met.
6. **Classify confidentiality / integrity / availability impact.**
7. **Assess risk to individuals.**
8. **If risk is likely, prepare Article 33 notification immediately.**
9. **If high risk is likely, prepare Article 34 communication immediately unless a documented exception applies.**
10. **Use phased notification** where facts are incomplete.
11. **Reconcile processor/provider facts** without surrendering CK-Labs' own deadline control.
12. **Correct affected account/game state idempotently** without touching unrelated paid value.
13. **Update the breach register** even if no external notification is required.
14. **Complete root-cause and prevention work** after urgent legal/technical response.

## 18. Release evidence required

Before treating this gate as production-ready, keep evidence of:

- a named incident-response owner and backup contact;
- the competent supervisory-authority decision for CK-Labs' current establishment;
- a current Article 33 notification route/bookmark;
- a processor/provider incident-contact table;
- breach-register template;
- risk/high-risk assessment template;
- Article 33 authority-notification template;
- Article 34 player-communication template;
- proof that phased notification is operationally possible;
- proof that account locks cannot restart 30-Day VIP or destroy Lifetime VIP;
- proof that incident-response scripts do not replay Diamond/VIP grants;
- a tabletop test involving at least one CK-Labs breach and one processor-reported breach;
- a test showing an unlikely-risk incident is still documented; and
- a test showing a high-risk breach can reach affected players without marketing consent.

## 19. Regression scenarios

At minimum, test these scenarios:

1. **Wrong-recipient support export:** one user's support attachment and email are sent to another user. Assess risk, record awareness and determine Article 33/34 duties.
2. **Public storage exposure:** a bucket containing account/support data is reachable without authorization for a known period. Do not wait for proof of misuse before applying the reasonable-certainty test.
3. **Ransomware availability breach:** personal data are encrypted/deleted and no adequate recovery copy exists. Assess availability harm even if exfiltration is unproven.
4. **Encrypted stolen backup:** backup is stolen but strong encryption is intact and keys are not compromised. Document why risk/communication conclusions differ from an unencrypted theft.
5. **Admin compromise:** attacker can read private chats and support records. Treat private-content exposure as a serious risk factor.
6. **SDK unauthorized transmission:** analytics/security SDK sends extra user data to an unauthorized endpoint. Run both GDPR and Google/Apple disclosure/security analysis.
7. **Xsolla incident notice:** Xsolla reports an incident involving data in its environment. Determine roles and affected data before deciding CK-Labs notification obligations.
8. **Provider investigating:** processor says the scope will take five days to finalize, but CK-Labs already has reasonable certainty that TycoonX personal data were compromised. Use phased notification where required.
9. **False alarm:** intrusion alert is investigated promptly and no personal data were compromised. Preserve the security-incident assessment without inventing a GDPR breach.
10. **Low-risk breach:** limited low-impact data are accidentally disclosed to a trusted recipient who confirms secure deletion. Document the breach and reasoned no-notification conclusion if applicable.
11. **High-risk credential exposure:** authentication/reset tokens and identifying data are exposed. Notify affected users without undue delay where Article 34 applies and give concrete protective steps.
12. **Cross-border breach:** players in multiple EEA states are affected. Verify competent/lead authority rather than filing reflexively to an arbitrary DPA.
13. **Successor outside EEA:** future successor has no EEA establishment but is subject to GDPR Article 3(2). Do not incorrectly rely on representative-based one-stop-shop.
14. **Entitlement isolation:** account is temporarily locked during a breach response. Purchased Diamonds, the original 30-Day VIP clock and valid Lifetime VIP remain intact unless a separate lawful correction is necessary.
15. **Duplicate recovery event:** restoring an affected account does not replay the same Apple/Google/Xsolla purchase.
16. **Breach notice to opted-out player:** necessary security communication is delivered while marketing suppression remains respected.
17. **Delayed notification:** an exceptional incident cannot be filed within 72 hours. Preserve and provide the reason for delay and all available initial facts.
18. **Phased update:** material new facts arrive after the initial authority notification. Send the follow-up without treating the initial report as final and immutable.

## 20. Current-law and provider references checked September 2, 2026

Use current primary/official materials when this gate is reviewed again:

- GDPR, especially Articles 4(12), 32, 33 and 34: `https://eur-lex.europa.eu/eli/reg/2016/679/oj`
- European Commission, "Notifying data breaches": `https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations_en`
- EDPB, Data Protection Guide for Small Business, "Data breaches": `https://www.edpb.europa.eu/sme/assess-the-risks/data-breaches_en`
- EDPB Guidelines 9/2022 on personal data breach notification under GDPR, final version 2.0: `https://www.edpb.europa.eu/documents/guideline/guidelines-92022-on-personal-data-breach-notification-under-gdpr_en`
- EDPB Guidelines 01/2021 on examples regarding personal data breach notification: `https://www.edpb.europa.eu/documents/guideline/guidelines-012021-on-examples-regarding-personal-data-breach-notification_en`
- LDI NRW Article 33 reporting guidance/instructions: `https://www.ldi.nrw.de/`
- Apple App Review Guidelines, Privacy: `https://developer.apple.com/app-store/review/guidelines/`
- Google Play User Data policy: `https://support.google.com/googleplay/android-developer/answer/10144311`
- Xsolla Privacy Policy/current contractual privacy materials: `https://xsolla.com/privacypolicy`

## Release decision

Do **not** mark this gate complete merely because TycoonX has a privacy policy or because no breach has occurred yet.

Mark it production-ready only when CK-Labs can demonstrate that it can detect and timestamp awareness, classify risk, notify the competent authority within the applicable timeline, communicate high-risk breaches to players, preserve a complete breach register, obtain processor incident facts promptly, and contain/recover accounts without corrupting Diamonds, 30-Day VIP or Lifetime VIP.
