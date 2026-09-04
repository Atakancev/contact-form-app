# TycoonX EU e-Evidence Production & Preservation Release Gate

Last reviewed: September 4, 2026  
Owner: CK-Labs  
Scope: Regulation (EU) 2023/1543, Directive (EU) 2023/1544, Germany's Elektronische-Beweismittel-Umsetzungs-und-Durchführungsgesetz (EBewMG), and TycoonX systems that may hold in-scope electronic evidence.

## Purpose

Regulation (EU) 2023/1543 has applied since **August 18, 2026**. It creates European Production Orders and European Preservation Orders for electronic evidence in criminal proceedings. Directive (EU) 2023/1544 separately requires covered service providers offering services in the Union to designate an establishment or appoint a legal representative that can receive, comply with and be subject to enforcement of covered orders.

This gate closes an operational gap that is different from TycoonX's existing DSA authority-order, DSA Article 18 safety-reporting, GDPR data-subject-request, payment-dispute and ordinary support workflows.

The goals are to ensure that CK-Labs can respond lawfully and fast to a genuine cross-border criminal-evidence order without:

1. disclosing data merely because an email claims to be from police or a court;
2. confusing preservation with disclosure;
3. missing the Regulation's short production deadlines;
4. silently preserving an entire account or unrelated players beyond the lawful scope;
5. treating an account named in an order as proof that the legitimate account owner committed a crime;
6. altering purchased Diamonds, 30-Day VIP or Lifetime VIP merely because evidence is preserved or produced; or
7. assuming the DSA Article 9/10 authority-order workflow is legally interchangeable with the e-Evidence Regulation.

This is an operational compliance gate. It does not itself determine that every TycoonX feature is in scope and it does not replace case-specific legal review for a real compulsory request.

## P0: perform and retain the TycoonX scope determination

Do not assume the e-Evidence regime applies merely because TycoonX is online. Do not assume it is outside scope merely because TycoonX is primarily a game.

Directive (EU) 2023/1544 defines covered service providers to include, among other categories, information-society services that:

- enable their users to communicate with each other; or
- make it possible to store or otherwise process data on behalf of users where storage is a defining component of the service.

TycoonX has community, chat and other user-to-user functionality, so CK-Labs must document a current legal scope assessment of the actual production architecture and EU offering rather than rely on a generic game classification.

The Directive's `offering services in the Union` test also requires a substantial connection based on factual criteria such as an establishment, a significant number of users in one or more Member States, or targeting activities toward one or more Member States.

The Directive does not apply to a provider established in one Member State that offers the relevant services exclusively in that same Member State. This exclusion must not be assumed where TycoonX is genuinely offered across multiple EU countries.

### Scope evidence packet

Keep a dated internal record showing at least:

- the legal operator assessed;
- relevant TycoonX communication/storage features;
- EU countries in which the relevant service is genuinely offered or targeted;
- factual substantial-connection basis;
- establishment(s), if any;
- whether the single-Member-State exclusive-service exclusion is actually available;
- whether a designated establishment or legal representative is required; and
- who approved the assessment and when it must be rechecked.

Recheck scope after a material business transfer, change of operator, establishment move, major social-feature redesign, EU market expansion or withdrawal, or material change to the applicable law.

## P0: designated establishment or legal representative

For covered providers that were offering the relevant services in the Union on February 18, 2026, Directive (EU) 2023/1544 required the designated establishment or legal representative to be in place by **August 18, 2026**. A provider beginning the relevant EU offering later generally has six months from the date it starts offering those services in the Union.

The addressee cannot be a ceremonial mailbox. It must have the powers and resources necessary to receive and comply with covered decisions and orders and to cooperate with competent authorities under the applicable framework.

Record:

- exact designated establishment or legal representative;
- legal identity and address;
- geographic/instrument scope;
- accepted official EU language(s);
- monitored secure contact channel;
- 24/7 emergency escalation path capable of meeting an eight-hour production deadline;
- legal and engineering owners;
- backup contacts and outage path; and
- date the designation/contact details were notified to the competent central authority.

Do not publish personal mobile numbers, private credentials or unnecessary security details merely because contact information must be made available through the statutory system.

## Germany: EBewMG designation and central authority

Germany enacted the **EBewMG on March 10, 2026**. The relevant Regulation-implementation provisions entered into force on August 18, 2026.

Where the German designation rules apply, the EBewMG requires covered providers to designate or appoint the applicable addressee and to equip it with the necessary powers and resources.

For addressees established in Germany, CK-Labs must account for the German notification rules, including notification of the addressee's contact details and changes. The German central authority for the designation/contact obligations is the **Bundesamt für Justiz**.

Where an addressee is established in Germany, German must be included among the languages in which that addressee can be addressed.

Do not hard-code Germany as the correct addressee jurisdiction if the actual CK-Labs legal establishment or designation changes. Use the real statutory structure for the operator at the relevant time.

## Keep the legal instruments separate

The following are distinct workflows even if the same account or message is involved:

- **EPOC:** European Production Order Certificate under Regulation (EU) 2023/1543, requiring production of specified electronic evidence when valid and enforceable;
- **EPOC-PR:** European Preservation Order Certificate, requiring preservation of specified electronic evidence without itself authorizing disclosure;
- **DSA Article 9:** order to act against specific illegal content;
- **DSA Article 10:** order to provide specific information about one or more recipients under the DSA framework;
- **DSA Article 18:** provider-originated notification where the statutory serious criminal-offence threat-to-life/safety threshold is met;
- **GDPR data-subject request:** an individual's exercise of privacy rights;
- **payment-provider request:** Apple, Google Play, Xsolla, bank/card-network fraud or transaction process; and
- **ordinary police/support email:** a communication that may need authentication and legal assessment but is not automatically an EPOC or EPOC-PR.

Never use one label merely because the other workflow has a convenient backend action.

## P0: authenticate and classify every incoming certificate

For every apparent EPOC or EPOC-PR, capture before substantive disclosure where the deadline permits:

- date/time of valid receipt and time zone;
- certificate type;
- issuing authority;
- validating authority where applicable;
- enforcing authority where relevant;
- official case/reference number;
- target account/user identifiers;
- requested data category and time range;
- stated emergency status if any;
- transmission channel and authentication result;
- language;
- requested delivery destination;
- whether notification to an enforcing authority is implicated;
- legal reviewer/escalation owner; and
- exact deadline calculated from receipt.

A display name such as `Police`, `Court`, `Prosecutor`, `EU`, `Bundesamt`, or `e-Evidence` is not authentication.

For suspicious domains, mismatched reply-to addresses, credential requests, unsafe attachments, altered certificates, inconsistent case numbers or unusual delivery instructions, verify independently through known official channels without unnecessarily missing a genuine emergency deadline.

Do not send passwords, authentication secrets, private signing keys, full payment-card credentials or database administrator credentials in response to an evidence request.

## European Production Order: preserve first, produce only after validation

Upon receipt of an EPOC, the Regulation requires the addressee to act expeditiously to preserve the requested data while the production process is handled.

The ordinary production deadline is **10 days following receipt**. In a duly established emergency case the production deadline is **8 hours**.

The production workflow must therefore be capable of:

1. freezing the narrowly requested evidence against routine deletion or overwrite;
2. validating the certificate and routing requirements;
3. locating the exact responsive records;
4. separating responsive from unrelated data;
5. maintaining integrity and chain-of-custody evidence where appropriate;
6. transmitting through the authorized secure route by the applicable deadline; and
7. recording exactly what was transmitted, when, to whom and under which certificate.

Do not delay a valid eight-hour emergency order until ordinary business hours. Conversely, do not treat an authority's use of the word `urgent` as enough by itself to bypass the legal emergency criteria and certificate requirements.

Where the Regulation requires notification to the enforcing authority for a particular category/circumstance, implement the applicable suspensive/refusal process rather than treating every EPOC as an immediate direct-production command.

## European Preservation Order: preservation is not disclosure

An EPOC-PR requires the specified data to be preserved **without undue delay**. The normal preservation period is **60 days**. The issuing authority may extend that period by **30 days** where the Regulation's conditions are met.

A preservation order must not automatically disclose the preserved material.

Production after preservation requires the applicable subsequent production request/order or other valid legal basis. The preservation state machine should distinguish at least:

`received -> authenticated -> scope_locked -> preservation_active -> extended_or_followup_received -> released_or_produced -> hold_closed`

Do not implement `preserve()` as `exportAndEmailEverything()`.

If a valid follow-up production request is received during the preservation period, maintain the hold as required while that process is completed. When the legal hold ends, remove the exceptional hold and return the data to the ordinary lawful retention/deletion lifecycle unless another independent basis requires continued retention.

## Data categories and minimization

Regulation (EU) 2023/1543 distinguishes categories including subscriber data, data requested solely to identify the user, traffic data and content data.

TycoonX systems may contain potentially relevant records such as:

- account identifiers and verified contact information actually held;
- login/session/IP/device events actually retained;
- public or private community messages and associated metadata actually retained;
- moderation/support records;
- gameplay event or security logs where within the valid request;
- transaction identifiers or entitlement records actually controlled by CK-Labs; and
- evidence of account compromise or session attribution where relevant.

Do not disclose an entire TycoonX profile merely because one category is requested. Apply the exact account, date range, fields and data category required by the valid instrument.

Do not create a new category of surveillance data solely because a future authority might want it. The e-Evidence framework is not a general data-retention mandate and does not create a general monitoring obligation.

## Account compromise and attribution

An EPOC or EPOC-PR identifying an account does not prove that the legitimate owner personally authored every message or event associated with that account.

Where account compromise is plausible:

- preserve relevant authentication/session/security evidence within the lawful scope;
- distinguish `activity associated with account X` from `activity proven to have been performed by person Y`;
- do not automatically ban the legitimate owner for the criminal allegation alone;
- do not mark the player's payment history as fraudulent merely because criminal evidence was requested; and
- do not destroy compromise evidence through an automatic password-reset cleanup job.

A reasonable security restriction may still be used where independently justified to protect the account or Service.

## Privacy, confidentiality and legal holds

The TycoonX Privacy Policy already states that CK-Labs may process data to comply with legal obligations and may disclose information where required by valid legal process. That public wording does not authorize unlimited disclosure.

For each e-Evidence case:

- use an appropriate legal basis;
- limit internal access to personnel who need it;
- preserve confidentiality, secrecy and integrity required by the Regulation and applicable national law;
- keep the evidence packet outside broad support-ticket visibility where practical;
- record the exact hold start/end basis;
- avoid copying unrelated user data into legal notes;
- use secure transmission appropriate to the authority channel;
- do not notify the affected user where a valid legal restriction or the applicable framework prohibits or delays notification; and
- when user notification is legally permitted/required, do not invent criminal conclusions that the order itself does not establish.

Legal holds are exceptions to normal deletion. They must be case-specific, scoped and reviewed. Account deletion requests should delete data that is no longer needed while preserving only the records that must lawfully remain subject to the valid hold or another independent retention basis.

## Conflicting legal obligations and protected material

A production request can raise genuine conflicts involving another country's law, privileges or immunities, fundamental rights, confidentiality protections or other protected interests.

Do not improvise a refusal merely because compliance is inconvenient. Do not blindly produce data where the Regulation provides a procedure for an impossibility, conflict, clarification, refusal or enforcement issue.

Escalate promptly when:

- the certificate is incomplete or manifestly erroneous;
- the requested data does not exist or is not controlled by CK-Labs;
- compliance is de facto impossible;
- the service/account cannot be identified from the information supplied;
- the request appears to conflict with another legal obligation;
- privilege, immunity, freedom-of-press or another specially protected interest may be implicated;
- the enforcing authority has raised or may need to assess a statutory refusal ground; or
- the requested scope would require materially more data than the certificate identifies.

Preserve the requested data while clarification/refusal procedures are pending where the Regulation requires preservation, so that legal review does not accidentally destroy evidence.

## Apple, Google Play, Xsolla and infrastructure-provider boundary

An e-Evidence order to CK-Labs reaches data within the lawful scope of that order and the data CK-Labs can actually produce. It does not magically give CK-Labs data held only by another provider.

For example:

- CK-Labs generally should not possess a player's full card number merely because Xsolla processed a payment;
- an Apple or Google transaction identifier held by CK-Labs may be responsive if lawfully requested, while separate store-account or payment information controlled only by Apple or Google may require the authority to use the appropriate provider route;
- an infrastructure provider may independently receive an order concerning data it controls; and
- a provider telling CK-Labs that it received an order is not automatically proof that the same order is legally addressed to CK-Labs.

Do not fabricate missing provider data or over-disclose unrelated payment records to make an evidence packet look more complete.

## Paid-entitlement isolation

An EPOC, EPOC-PR, legal hold or evidence disclosure is not itself a refund, chargeback, fraud finding, exploit finding, entitlement correction or account-termination decision.

Therefore, unless an independent lawful basis requires a separate action:

- preserving or producing account data must not remove unrelated purchased Diamonds;
- it must not create a negative Diamond balance;
- it must not refund or reverse an Apple, Google Play or Xsolla purchase;
- it must not restart, extend, shorten or duplicate the original **one-time, non-renewing 30-Day VIP** period;
- it must not create a hidden expiry for valid Lifetime VIP; and
- it must not reopen a closed Lifetime VIP sales window.

**Lifetime VIP remains a one-time promotional entitlement available only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability.** A valid existing Lifetime VIP remains governed by its purchase terms, the TycoonX Terms and mandatory law.

If a separate valid order actually requires account restriction, suspension, seizure or another action, execute that legal action through a separately recorded enforcement state rather than disguising it as a payment correction.

## Hacks, exploits and criminal-evidence requests

A law-enforcement evidence request may relate to alleged hacking, cheating, exploit activity, fraud, account takeover, threats or other misconduct. The existence of the request is not conclusive proof of a TycoonX Terms violation.

If CK-Labs independently has reliable evidence of exploit or payment abuse, it may handle that under the Terms and relevant anti-abuse/payment process. Keep the evidence-request record and the independent game-enforcement record distinguishable so later review can tell which factual basis caused which action.

Do not use an e-Evidence hold to preserve an unlimited anti-cheat dossier forever.

## Outages and emergency continuity

This is a P0 legal workflow because an emergency EPOC can carry an eight-hour production deadline.

The production design must account for:

- nights, weekends and holidays;
- primary-mailbox outage;
- staff unavailability;
- authentication-service outage;
- database/storage outage;
- failed secure transmission;
- cloud/provider migration; and
- loss of access to a legacy system containing responsive data.

Maintain an escalation path that can receive an urgent certificate, authenticate the authority, preserve responsive data and involve a legally competent decision-maker without depending on the ordinary player-support queue.

An outage does not justify guessing. Record the outage, preserve what can lawfully be preserved, notify the competent authority through the applicable procedure where required, and use the Regulation's impossibility/clarification mechanisms rather than silently missing the deadline.

## Provider replacement, business transfer and permanent shutdown

Changing a hosting, authentication, email, payment or support provider must not silently destroy active e-Evidence holds, certificate metadata or deadline records.

Before a merger, sale, reorganization or successor-operator transfer:

- identify open EPOC/EPOC-PR matters;
- determine which legal entity remains responsible;
- preserve required evidence and confidentiality;
- update designated-establishment/legal-representative details where required;
- notify the competent central authority of changes where required; and
- ensure the successor has the powers/resources and secure records needed to finish outstanding obligations.

Permanent discontinuation of TycoonX does not automatically extinguish an outstanding preservation/production duty or legally required evidence record. Close or transfer each active legal hold through the applicable lawful process rather than bulk-deleting it with ordinary game data.

## German enforcement exposure

The German EBewMG makes failures relating to designation/contact duties and specified Regulation obligations enforceable administrative offences.

For relevant Regulation execution failures, German law provides fines up to **EUR 500,000** for specified categories and, for providers above the statutory worldwide-turnover thresholds, can permit turnover-based fines of up to **2%** for specified violations. Other categories have different caps/thresholds.

Do not turn those maximum figures into public threats to users. They are internal compliance reasons to keep the legal-intake workflow reliable.

## Production data model

At minimum, the legal-process system should be able to represent:

- `legal_process_id`
- `instrument_type` (`EPOC`, `EPOC_PR`, or other separately classified instrument)
- `received_at`
- `deadline_at`
- `emergency_status`
- `issuing_authority`
- `validating_authority`
- `enforcing_authority`
- `official_case_reference`
- `authentication_status`
- `target_account_ids`
- `requested_data_categories`
- `requested_time_range`
- `preservation_started_at`
- `preservation_expires_at`
- `preservation_extension_until`
- `clarification_or_conflict_status`
- `production_completed_at`
- `production_manifest_hash_or_equivalent_integrity_record`
- `delivery_channel`
- `user_notification_status`
- `legal_hold_release_at`
- `reviewer`
- `audit_log_reference`

Do not store raw evidence inside an unrestricted analytics table merely because the legal-process metadata needs auditing.

## Production regression matrix

Before marking this gate production-ready, test at least these cases:

1. fake police email requesting a full TycoonX database export;
2. valid ordinary EPOC for one account, with a correctly calculated 10-day deadline;
3. valid emergency EPOC with an eight-hour deadline arriving outside business hours;
4. valid EPOC-PR preserving only specified data for 60 days;
5. valid 30-day preservation extension;
6. EPOC-PR that never receives a production follow-up and releases correctly at the lawful end of the hold;
7. production follow-up received while the preservation hold is active;
8. certificate with an incomplete account identifier requiring clarification;
9. request for data CK-Labs does not possess because it is controlled only by Apple, Google or Xsolla;
10. account-compromise case where session evidence is preserved without falsely attributing activity to the legitimate owner;
11. account deletion request while a narrow valid legal hold exists;
12. EPOC concerning a player with purchased Diamonds, with the Diamond balance remaining untouched absent a separate basis;
13. EPOC concerning an active 30-Day VIP account, with the original VIP clock unchanged;
14. EPOC concerning a valid Lifetime VIP account, with no hidden expiry or reopened sales window;
15. duplicate delivery of the same certificate without duplicate disclosure or duplicate game enforcement;
16. production-system outage during an emergency deadline;
17. conflicting-law or protected-material escalation while responsive data stays preserved where required;
18. provider migration with an active preservation hold;
19. business transfer with open orders and updated addressee responsibility; and
20. permanent service shutdown with an outstanding legal hold kept separate from ordinary deletion.

## P0 blockers

Treat the e-Evidence workflow as not production-ready if any of these are true:

- no current scope assessment exists;
- a required designated establishment/legal representative has not been determined or established;
- no monitored intake can meet the eight-hour emergency path;
- preservation automatically discloses data;
- evidence requests are handled through an unrestricted normal-support mailbox with no authentication process;
- legal holds cannot override routine deletion for the narrow requested records;
- holds cannot be released after the lawful basis ends;
- the system cannot distinguish EPOC from EPOC-PR;
- an evidence request automatically flags payment fraud or removes entitlements;
- the system assumes an account owner authored activity merely because the account appears in an order;
- provider-only payment data is fabricated or demanded from the player; or
- a business/provider migration can silently drop open legal-process deadlines.

## Canonical public-law boundary

The public TycoonX Privacy Policy already covers processing needed to comply with legal obligations, lawful authority requests and legally required recordkeeping, plus disclosure required by law or valid legal process. It also says personal data is kept only as long as reasonably necessary or required/permitted by law.

Therefore this gate is operational hardening and **does not by itself change the canonical player-facing legal meaning**. Do not reopen all localized Privacy Policies solely because this internal release gate exists.

If CK-Labs later changes the public Privacy Policy's substantive description of law-enforcement disclosure, retention, user notice or legal-process rights, update the canonical English policy first and synchronize all 25 localized Privacy Policies before treating that material wording as current.

## Release rule

Do not claim TycoonX e-Evidence production readiness until the actual operator's scope/designation status is documented and the production system can prove the 10-day ordinary production path, eight-hour emergency production path, narrow 60-day preservation hold, 30-day extension, secure/authenticated intake, lawful release of holds, privacy minimization, provider boundary and paid-entitlement isolation.

TycoonX is a fully released service. This gate is current-service legal hardening and must not be described as a beta requirement.