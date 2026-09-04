# TycoonX EU e-Evidence Article 19 Transmission Release Gate

Last reviewed: September 4, 2026  
Owner: CK-Labs  
Scope: the secure communication layer for Regulation (EU) 2023/1543, especially Articles 19-25 and 34, Commission Implementing Regulation (EU) 2025/1550, and the Commission's current 2026 contingency/deadline guidance.

## Purpose and relationship to the main e-Evidence gate

This is a narrow operational companion to `TYCOONX_EU_EEVIDENCE_PRODUCTION_PRESERVATION_RELEASE_GATE.md`.

The main gate controls scope, designated-establishment/legal-representative status, EPOC/EPOC-PR validation, preservation, production, privacy, provider boundaries and paid-entitlement isolation. This companion does **not** duplicate those rules. It closes the transmission-layer gap: how CK-Labs receives, sends, records and proves e-Evidence communications when the decentralised IT system is available, when it is unavailable, and when electronic evidence is too large for the system.

A valid legal instrument and a valid transmission route are separate questions. A technically authenticated message can still be legally defective. A legally valid order can still be mishandled if it is sent through an insecure or unrecorded fallback channel.

## Current legal state

Regulation (EU) 2023/1543 applies from **August 18, 2026**.

Article 19 requires written communication between competent authorities and designated establishments or legal representatives under the Regulation, including forms and requested data, to use the secure and reliable **decentralised IT system**. Service providers must ensure that their designated establishment or legal representative can use that system via the relevant national IT system to receive EPOCs/EPOC-PRs, send requested data and communicate with issuing/enforcing authorities.

Article 34(2) ties the Article 19 system-use obligation to one year after adoption of the Article 25 implementing acts. Commission Implementing Regulation (EU) 2025/1550 was adopted on July 28, 2025. Because the substantive Regulation itself applies from August 18, 2026, CK-Labs must treat Article 19 secure-system readiness as a **current production obligation wherever the Regulation and the relevant national infrastructure are operational**, subject to the statutory Article 19(5) fallback where the decentralised IT system cannot be used for the particular transmission.

Do not treat ordinary email as the default simply because it was historically used for law-enforcement requests.

## Germany is currently a live readiness jurisdiction

The European Commission's current Member-State readiness publication, last updated August 20, 2026 and published through the Commission implementation page on August 27, 2026, identifies **Germany as legally and technically ready both to issue and to receive EPOCs/EPOC-PRs**. It states that Germany's national components of the decentralised IT system are operational in production for issuing and receiving Article 19 communications, including access for designated establishments/legal representatives of service providers established there.

For a German designated establishment/legal representative, do not operate on a blanket assumption that the German e-Evidence IT path is unavailable. CK-Labs must establish the actual production access route made available through the German national system and keep it monitored.

If CK-Labs's actual designated establishment/legal representative is in another Member State, use the current Commission readiness information and that Member State's official implementation information rather than importing the German result.

## P0: establish the real production access path

Before claiming readiness, record:

- designated establishment/legal representative that will actually receive orders;
- Member State providing its Article 19 access;
- production access URL/application or national portal;
- whether the Commission reference-implementation service-provider web interface is involved;
- enrolled operator/admin accounts;
- authentication method and recovery process;
- accepted languages;
- 24/7 alerting for new EPOC/EPOC-PR messages;
- legal and engineering escalation owners;
- backup operator access that does not depend on one person's device;
- secure method for exporting evidence packages where needed;
- tested fallback route under Article 19(5); and
- date of the last live or sandbox-equivalent access test.

The Commission currently publishes a **service-provider web-based interface user manual (Version 1.0, May 21, 2026)** for the reference implementation connected to the decentralised IT system. Use the actual national/Commission onboarding material supplied for the designated establishment. Do not invent credentials, endpoints or access methods from screenshots or third-party blog posts.

## Primary route: decentralised IT system / e-CODEX

Commission Implementing Regulation (EU) 2025/1550 requires the decentralised IT system to support service-based communication through interoperable **e-CODEX access points**.

The production workflow should treat the system as the primary route for:

- receipt of EPOCs and EPOC-PRs;
- statutory forms and clarification messages;
- communication with issuing and, where applicable, enforcing authorities;
- transmission of electronic evidence within the system's supported size limit; and
- records needed to establish origin, receipt and integrity.

Do not forward an Article 19 message into a broad player-support mailbox and then make that mailbox the authoritative legal record.

## 25 MB evidence threshold

Under Implementing Regulation (EU) 2025/1550, electronic evidence is transmitted through the decentralised IT system insofar as it does not exceed **25 megabytes (25,600 kilobytes)**.

Electronic evidence exceeding that threshold is transmitted under the Article 19(5) alternative-means framework.

Engineering must therefore measure the final evidence package before transmission and select the route deliberately. Do not split one evidence package into arbitrary fragments merely to bypass the 25 MB rule if doing so would damage integrity, context or the authority's ability to validate the material.

A package that is smaller than 25 MB does not automatically justify fallback. Use the primary system unless Article 19(5) genuinely applies.

## Article 19(5): fallback is an exception, not a convenience setting

Alternative means are available when communication through the decentralised IT system is not possible because of circumstances such as:

- disruption of the decentralised IT system;
- the nature of the transmitted material;
- technical limitations, including data size;
- legal constraints relating to admissibility or forensic requirements; or
- exceptional circumstances.

The alternative route must still be the most appropriate route and must support an exchange that is **swift, secure and reliable and allows the recipient to establish authenticity**.

A staff preference for email, an unfamiliar portal UI, a forgotten login, or a desire to avoid Article 19 audit records is not itself a valid fallback ground.

The Commission's July 11, 2026 contingency guidance is expressly informal and non-binding, but it is a useful operational reference. It identifies realistic fallback methods including:

- secure email using S/MIME or an equivalent mechanism providing encryption, sender authentication and integrity protection, preferably with reliable acknowledgement of receipt;
- secure government cloud solutions with strict access control;
- secure service-provider law-enforcement platforms where compatible with the Regulation; and
- where electronic transmission is unavailable or inappropriate, traceable physical delivery with reliable proof of dispatch/receipt and chain of custody.

For secure-cloud fallback, transmit access credentials through a **separate secure channel** from the evidence link where practical.

Do not send a production package through ordinary unencrypted email merely because the authority asks for speed.

## Article 19(6): fallback must be recorded

When a transmission is carried out by alternative means under Article 19(5), the originator must record the transmission in the decentralised IT system **without undue delay**.

For authority/service-provider communications, Implementing Regulation (EU) 2025/1550 requires the recorded information to include at least:

- case or file reference number;
- date and time of transmission;
- sender;
- recipient;
- file name; and
- file size.

CK-Labs's legal-process tooling should preserve equivalent local evidence of that recording event, including the Article 19(5) fallback reason and the identifier of the person/system that completed the record.

Do not treat successful fallback delivery as the end of the workflow while leaving the statutory system record blank.

## Alternative-production manifest

Where electronic evidence produced under a European Production Order is transmitted or made available through alternative means, the Implementing Regulation requires a manifest containing the information needed to associate and verify the evidence.

At minimum, capture and transmit as applicable:

- sender and recipient;
- metadata associating the evidence with the relevant European Production/Preservation Order;
- date and time of transmission or availability;
- the transmission means, such as the secure-link record or proof of delivery;
- full file names;
- data size;
- at least one cryptographically strong hash digest; and
- the hash algorithm used.

The Implementing Regulation gives examples of strong hash algorithms such as SHA-512, SHA3-512, BLAKE2 or RIPEMD-160, while requiring an algorithm in common use and not subject to publicly disclosed weaknesses such as collisions. Do not hard-code an algorithm forever merely because it appears in the 2025 implementing act; keep the implementation upgradeable as cryptographic practice changes.

If evidence is made available for retrieval instead of pushed directly, the manifest should state the availability end date/time. Under the Implementing Regulation, that retrieval period must provide a reasonable timeframe of **at least 10 calendar days and no more than 45 calendar days** from the moment the evidence is made available, unless extended for the individual case at the issuing authority's request.

Expiry of a download link must not destroy an independent legal preservation hold that is still valid.

## Security controls required by the implementing framework

The Article 19 transmission design must preserve the security objectives in Implementing Regulation (EU) 2025/1550, including:

- confidentiality, including secure communication channels;
- integrity of messages, forms, documents and electronic evidence at rest and in transit;
- non-repudiation of origin;
- non-repudiation of receipt;
- availability and continuity;
- security-event logging;
- user authentication and authorisation; and
- verification of the identity of systems connected to the decentralised IT system.

The technical specifications contemplate mechanisms such as TLS, X.509 certificates, public-key infrastructure, digital signatures, OAuth/OpenID Connect and SOAP/WS-Security in relevant parts of the system. CK-Labs should use the actual national/reference implementation rather than attempting to recreate the e-CODEX security architecture independently.

Where a document transmitted under Article 19 requires a seal or signature under the Regulation, Article 21 points to the eIDAS framework and requires the applicable **qualified electronic seal or qualified electronic signature**.

## Deadline calculation is a production function, not mental arithmetic

The Commission published updated informal guidance on **August 19, 2026** for calculating Article 10 and Article 11(1) deadlines under Regulation (EEC, Euratom) No 1182/71.

For the ordinary **10-day EPOC deadline** and the **60-day preservation period / 30-day extension**:

- the day of receipt is not counted;
- the period begins at the start of the following day;
- Saturdays, Sundays and public holidays are included while counting;
- if the last day falls on a Saturday, Sunday or relevant public holiday, expiry moves to the end of the following working day; and
- for public-holiday calculations, the Commission guidance identifies the **enforcing State**, not the issuing State, as the relevant State.

For the **8-hour emergency EPOC deadline**:

- the hour during which the EPOC is received is not counted;
- the deadline starts at the beginning of the following hour;
- it expires eight hours later; and
- there is **no weekend/public-holiday extension** if that eight-hour period ends on a Saturday, Sunday or public holiday.

Example: an emergency EPOC received Friday at 17:10 starts its eight-hour clock at 18:00 and expires Saturday at 02:00 under the Commission's current guidance.

Store both the raw `received_at` timestamp and the calculated `deadline_at`, plus the rule/version used. Do not rely only on a portal alert. The Commission guidance specifically warns that current JUDEX alerts are indicative and can show an earlier expiry in some weekend/public-holiday situations.

## Availability and outage handling

The implementing framework sets 24/7 availability objectives for national/Union components, but that does not eliminate outages. CK-Labs still needs a tested contingency path.

When the decentralised IT system cannot be used:

1. capture the outage/fallback reason;
2. authenticate the authority independently;
3. preserve responsive data immediately where required;
4. choose the most appropriate swift, secure, reliable and authentic alternative route;
5. transmit within the applicable legal deadline;
6. create the required alternative-production manifest where applicable;
7. record the fallback transmission in the decentralised IT system without undue delay when the system is available; and
8. preserve local audit evidence linking the fallback event to the legal-process case.

Using fallback does **not** change the addressee, legal instrument, notification requirement, review path, enforcement path, privacy rule or entitlement rule.

## Do not confuse contingency with the old transition period

Article 24 governed the transition period **before** the Article 19 system obligation became applicable and allowed the most appropriate alternative means during that transition.

Current production handling after the Regulation's application date must not label every email-based process as `transition mode`. Where the decentralised IT system cannot be used now, record the current statutory basis, normally Article 19(5), and preserve the Article 19(6) recording requirement.

The Commission's July 2026 contingency guidance expressly addresses situations after August 18, 2026 in which one or more technical components may still not be operational and explains that the rest of the Regulation remains applicable.

## Payment, entitlement and account-compromise isolation

Transmission mechanics must not alter the substantive boundaries in the main e-Evidence gate.

An Article 19 message, fallback record, evidence manifest, hash, portal notification or failed transmission is **not itself**:

- proof of hacking, fraud or exploit abuse;
- a refund or chargeback;
- authority to remove purchased Diamonds;
- authority to restart, shorten or extend 30-Day VIP;
- authority to expire Lifetime VIP; or
- proof that the legitimate account owner personally performed the activity associated with the requested account.

Purchased Diamonds remain governed by the canonical TycoonX Terms and the transaction-specific payment record. **30-Day VIP remains a one-time, non-renewing entitlement. Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability.**

If a separate legally valid order or independently supported TycoonX enforcement decision requires another action, record and execute that action through its own workflow.

## Privacy and data minimisation in transmission logs

Article 19 auditability does not justify copying raw evidence into every operational log.

Keep transmission metadata separate from the evidence payload where practical. Do not put private messages, full payment details, passwords, authentication secrets or unrelated player data into fallback-reason fields, monitoring alerts or generic support tickets.

A hash is an integrity control, not permission to retain the underlying evidence forever. When the preservation/production basis ends, the evidence returns to the ordinary lawful retention/deletion lifecycle unless another independent basis requires continued retention.

## Production data model additions

In addition to the main e-Evidence data model, support at least:

- `article19_primary_channel`
- `article19_national_system`
- `article19_message_id`
- `fallback_used`
- `fallback_legal_basis`
- `fallback_reason`
- `fallback_channel`
- `fallback_sent_at`
- `fallback_recorded_in_system_at`
- `fallback_system_record_reference`
- `package_size_bytes`
- `manifest_sender`
- `manifest_recipient`
- `manifest_order_reference`
- `manifest_file_names`
- `manifest_hash_algorithm`
- `manifest_hash_digest`
- `manifest_available_until`
- `receipt_timestamp_raw`
- `deadline_calculation_rule_version`
- `deadline_at`
- `delivery_acknowledgement_reference`

Do not make these fields authoritative payment or entitlement state.

## Production regression matrix

Before marking Article 19 transmission ready, test at least:

1. valid EPOC received through the German production Article 19 path;
2. fake authority email attempting to bypass the official route;
3. evidence package below 25 MB transmitted through the decentralised IT system;
4. evidence package above 25 MB routed through a valid Article 19(5) alternative channel;
5. secure-email fallback with sender authentication and receipt evidence;
6. secure-cloud fallback with credentials sent through a separate secure channel;
7. alternative transmission recorded in the decentralised IT system after recovery;
8. fallback production manifest with full filenames, sizes, order metadata and strong hash;
9. download link with an availability window inside the 10-to-45-calendar-day rule;
10. download-link expiry while an independent preservation hold remains active;
11. ordinary 10-day EPOC received before a weekend, with the final-day rule calculated correctly;
12. emergency EPOC received Friday at 17:10, producing the current-guidance 02:00 Saturday deadline;
13. portal outage during an eight-hour emergency with successful fallback and later system recording;
14. duplicate fallback notification without duplicate evidence disclosure;
15. account-compromise case where transmission metadata does not become proof against the legitimate owner;
16. EPOC for a player with purchased Diamonds and active 30-Day VIP, with entitlement state unchanged by transmission events;
17. EPOC for a valid Lifetime VIP player, with no hidden expiry and no reopened sales window; and
18. business/provider migration where portal credentials, backup operator access and open Article 19 records continue safely.

## P0 blockers

Treat the Article 19 layer as not production-ready if any of the following is true:

- CK-Labs does not know which national system its designated establishment/legal representative must use;
- no monitored production account exists;
- access depends on one person's private device with no recovery path;
- ordinary email is treated as the default despite an operational primary system;
- packages above 25 MB have no secure fallback route;
- fallback transmissions are not recorded in the decentralised IT system after recovery;
- alternative production lacks the required integrity/manifest evidence;
- the deadline calculator treats an eight-hour emergency like an ordinary business-hours timer;
- the system relies solely on a portal/JUDEX alert for legal deadline calculation;
- fallback credentials and evidence links are sent together through an insecure channel;
- transmission logs copy unrestricted raw evidence into general support/analytics systems; or
- an Article 19 event can directly alter Diamonds or VIP entitlements.

## Source checkpoints

Revalidate these before a material implementation change:

- Regulation (EU) 2023/1543, especially Articles 19-25 and 34;
- Commission Implementing Regulation (EU) 2025/1550 of July 28, 2025;
- European Commission e-Evidence implementation page, checked September 4, 2026;
- Commission contingency guidance, last updated July 11, 2026;
- Commission deadline-calculation guidance, last updated August 19, 2026;
- Commission Member-State readiness publication, last updated August 20, 2026; and
- the current national implementation/onboarding material for CK-Labs's actual designated establishment/legal representative.

Official references:

- https://eur-lex.europa.eu/eli/reg/2023/1543/oj/eng
- https://eur-lex.europa.eu/eli/reg_impl/2025/1550/oj/eng
- https://commission.europa.eu/law/cross-border-cases/judicial-cooperation/types-judicial-cooperation/e-evidence-cross-border-access-electronic-evidence_en

## Canonical/localization boundary

This gate changes operational evidence-transmission readiness, not the canonical player-facing meaning of the TycoonX Terms, Purchases & Refunds Policy, Privacy Policy or Community Standards.

Do not reopen completed localizations merely because this internal Article 19 gate was added. If a future change materially alters the public description of authority disclosure, legal-process retention, user notification, purchased Diamonds, 30-Day VIP, Lifetime VIP or mandatory rights, update the English canonical document first and then resynchronize the affected localized document type in the required locale order.

TycoonX is a fully released service. This gate must not be described as a beta requirement.
