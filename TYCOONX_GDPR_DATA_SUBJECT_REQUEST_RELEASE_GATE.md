# TycoonX GDPR Data Subject Request Release Gate

Last reviewed: August 31, 2026
Owner: CK-Labs
Scope: TycoonX privacy-right requests under GDPR Articles 12-22, including access, rectification, erasure, restriction, objection, portability, consent withdrawal, automated-decision safeguards, and requests involving payment/entitlement/security records.

## Purpose

The TycoonX Privacy Policy already tells users that they may have rights of access, correction, deletion, restriction, objection, portability, consent withdrawal, and supervisory-authority complaint. This gate turns those public rights into a repeatable operational process without creating unnecessary disclosures, deleting legally required records, or exposing other users' data, anti-fraud controls, payment secrets, or security-sensitive information.

This is an implementation and evidence gate. It does not replace the TycoonX Privacy Policy, Terms of Service, Purchases & Refunds Policy, Community Standards, mandatory law, or the independent privacy obligations of Apple, Google, Xsolla, banks, card networks, or other providers.

## P0: recognize a rights request even if the user does not say “GDPR”

A request can qualify even if the user does not cite an article number or use legal terminology.

Examples that should enter the rights-request workflow include:

- “Send me everything you have about my account.”
- “What personal data do you store about me?”
- “Fix my email/profile information.”
- “Delete my personal data.”
- “Stop using my data for this purpose.”
- “Give me my data in a format I can take elsewhere.”
- “Who did you share my data with?”
- “Why did your automated system make this decision about my account?”

A support ticket, in-game message, or email that clearly expresses one of these requests must not be ignored merely because it did not arrive through a dedicated privacy form. Route it internally to the privacy-right owner while preserving the original receipt timestamp.

A gameplay complaint, refund request, entitlement dispute, account-compromise report, moderation appeal, or bug report is not automatically a GDPR rights request. It can become one if the user also asks to exercise a data-protection right.

## 1. Start and track the Article 12 deadline

For requests under GDPR Articles 15-22:

- record the date and time the request reached an official CK-Labs/TycoonX channel;
- acknowledge receipt promptly where practicable;
- respond without undue delay and, as a rule, within **one month** of receipt;
- do not convert “one month” into an internal blanket “30-day” rule where calendar-month calculation produces a different deadline;
- if the request is genuinely complex or there are enough requests to justify more time, an extension of up to **two further months** may be used only where Article 12 permits it;
- tell the user about the extension within the original one-month period and explain the reason;
- if CK-Labs will not act on the request, inform the user without delay and at the latest within one month, state the reasons, and explain the right to complain to a supervisory authority and seek a judicial remedy.

Do not use ordinary workload, lack of an internal process, holidays, or the fact that CK-Labs is a small business as an automatic reason to extend every request.

If proportionate additional information is genuinely needed to confirm identity and CK-Labs asks for it without undue delay, record the identity-verification pause/suspension consistently with current EDPB access guidance. Do not manipulate this step to delay the request.

## 2. Identity verification must be proportionate

The goal is to avoid disclosing one player's data to another person without turning identity verification into a new data-collection exercise.

Prefer an existing authenticated relationship where it gives reasonable confidence, for example:

- an authenticated TycoonX account session;
- the verified email or sign-in provider already associated with the account;
- a support challenge using information CK-Labs already legitimately holds;
- an account-specific verification route that does not require new high-risk identity data.

Only request additional identity information where there are **reasonable doubts** about the requester's identity and only request what is necessary to resolve those doubts.

Do not automatically require a passport, national ID card, selfie, notarized document, full payment-card number, authentication code, or unrelated personal information for every rights request. If unusually strong proof is genuinely necessary because the requested data is highly sensitive or the account appears compromised, document why a less intrusive method was insufficient and protect/delete the verification material according to its own retention need.

A compromised-account report is a reason to strengthen verification proportionately, not a reason to deny all privacy rights indefinitely.

## 3. Article 15 access package

An access response should cover the personal data CK-Labs actually processes about the requester and the supplementary Article 15 information that applies, including as relevant:

- purposes of processing;
- categories of personal data;
- recipients or categories of recipients;
- retention period or criteria where applicable;
- applicable rights and complaint information;
- source information where data was not obtained directly from the user;
- applicable automated-decision/profiling information; and
- transfer safeguards where Article 15 requires them.

For TycoonX, the data search should consider at least:

- account/profile/authentication data;
- gameplay and persistent economy data linked to the user;
- Diamond, VIP, purchase, restore, refund, revocation, and entitlement records;
- support tickets and attachments;
- moderation actions and reports linked to the requester;
- security, fraud, exploit, login, session, and audit records linked to the requester;
- public/private community content linked to the requester where it is personal data;
- analytics/diagnostic identifiers linked to the requester where CK-Labs can identify them;
- records held by CK-Labs processors that fall within CK-Labs' controller responsibility.

Do not answer only with a generic privacy-policy link when Article 15 requires an individualized access response.

## 4. What “copy” means and how to protect other people

The first Article 15 copy is generally provided free of charge. CJEU Cases **C-487/21 (Österreichische Datenschutzbehörde and CRIF)** and **C-307/22 (FT)** confirm that the user must receive a faithful and intelligible reproduction of the personal data, and that extracts from documents, database extracts, or in some cases entire documents can be required where essential to make the personal data understandable.

This does **not** mean CK-Labs must automatically export its entire database, source code, internal fraud rules, server secrets, or complete documents containing mostly other people's data.

Article 15(4) requires protection of the rights and freedoms of others. Where a record mixes the requester's personal data with another player's personal data, trade secrets, intellectual property, authentication material, security-sensitive detection logic, or confidential third-party information:

1. identify the requester's personal data;
2. provide it in an intelligible form;
3. redact or isolate third-party/confidential material where necessary and proportionate;
4. provide context/excerpts where needed for intelligibility; and
5. do not use “trade secret”, “anti-fraud”, “security”, or “other users” as a blanket reason to refuse all access.

For example, a moderation report can require disclosure of personal data about the requester while still protecting the reporter's identity where disclosure would unjustifiably affect that other person's rights.

## 5. Actual recipients, not only generic categories, where required

For an Article 15 recipient request, do not assume that saying only “service providers” is always enough.

CJEU Case **C-154/21 (Österreichische Post)** held that where personal data have been or will be disclosed to recipients, the controller must, on request, provide the actual identity of those recipients where they can be identified, subject to the limits recognized by law such as a manifestly unfounded/excessive request or a situation where the recipients cannot yet be identified.

For TycoonX, this can require checking the actual configured provider/entity, not merely listing broad labels such as “payments” or “hosting”. Keep the international-transfer inventory and processor list sufficiently current to answer this safely.

Independent-controller processing by Apple, Google, Xsolla, banks, card networks, or another provider remains legally distinct. CK-Labs must provide the personal data and recipient information within CK-Labs' responsibility, but must not promise that a TycoonX access response includes every piece of data those independent controllers hold under their own systems.

## 6. Rectification must not corrupt authoritative transaction history

A user can request correction of inaccurate personal data. Do not interpret rectification as permission to rewrite immutable evidence incorrectly.

Examples:

- correct a wrong email, profile attribute, or factual support record where appropriate;
- if an audit log accurately recorded that an event occurred but the event was later found invalid, preserve the historical log where lawfully needed and add/correct the linked status rather than falsifying history;
- do not rewrite an Apple, Google Play, or Xsolla transaction identifier merely because the user prefers a different identifier;
- do not alter a genuine refund/chargeback record into a “successful purchase” record as a privacy correction;
- do correct an inaccurate CK-Labs attribution that wrongly links another person's transaction or activity to the requester.

Where Article 19 applies, communicate qualifying rectification, erasure, or restriction to recipients unless impossible or disproportionate, and tell the user about those recipients if requested.

## 7. Erasure is not the same as account deletion, refund, or entitlement cancellation

A GDPR Article 17 erasure request and a TycoonX account-deletion request often overlap, but they are not automatically identical.

Do not tell a user that they must forfeit a refund, withdrawal right, paid entitlement, or consumer claim before CK-Labs will consider an erasure request.

Where erasure applies, delete or irreversibly anonymize personal data without undue delay. Where a statutory exception applies, retain only the data genuinely needed for that exception and document the purpose and retention period.

Examples of records that may lawfully need separate retention depending on the case include:

- legally required tax/accounting evidence;
- transaction/entitlement evidence needed for an unresolved refund, chargeback, withdrawal, or legal claim;
- narrowly necessary fraud/security evidence;
- minimum evidence required to prevent duplicate restoration of a valid Lifetime VIP or other restorable entitlement;
- data required to establish, exercise, or defend legal claims.

Do not use one narrow retained transaction record as a reason to keep unrelated profile, chat, social, marketing, analytics, or gameplay data indefinitely.

The existing `TYCOONX_ACCOUNT_DELETION_RELEASE_GATE.md` remains the dedicated product/account-deletion implementation gate.

## 8. Restriction and objection need real system states

Where Article 18 restriction applies, the affected personal data should be marked or isolated so ordinary use stops while storage and the limited legally permitted processing remain possible.

Examples:

- a contested fraud flag may need restricted use while accuracy is verified;
- disputed identity data may need a temporary restriction while CK-Labs checks the correct record;
- restricted data should not continue feeding optional analytics, marketing, or unrelated profile decisions merely because deletion has not occurred.

Where a user objects under Article 21 to legitimate-interest processing, perform and record the required balancing/override assessment instead of treating the objection as automatically granted or automatically denied.

A privacy objection is not proof of fraud, cheating, chargeback abuse, or Terms violation.

## 9. Data portability is narrower than “export my whole TycoonX world”

Article 20 portability applies under its statutory conditions, including where relevant processing is based on consent or contract and carried out by automated means.

The portable dataset should contain qualifying personal data the user provided, interpreted consistently with applicable law and guidance, in a structured, commonly used, machine-readable format.

Portability does **not** automatically require CK-Labs to:

- transfer ownership of a TycoonX account;
- transfer Lifetime VIP or 30-Day VIP to another person;
- duplicate purchased Diamonds;
- export CK-Labs source code, formulas, anti-fraud models, or proprietary game logic;
- create interoperability with another game that does not exist;
- export other players' personal data merely because it appears in multiplayer records.

A data-portability export also does not by itself erase the original data. Erasure is a separate right with its own conditions.

## 10. Requests involving automated decisions

Where the user asks for information about an automated decision, coordinate with `TYCOONX_GDPR_AUTOMATED_DECISION_RELEASE_GATE.md`.

Do not respond only with “our system detected suspicious activity” where Article 15/22 requires meaningful information. At the same time, disclosure should be framed so the user can understand the relevant logic and effect without publishing source code, exploitable anti-fraud thresholds, authentication secrets, or third-party personal data when those details are not legally required.

A user exercising access, erasure, objection, portability, or another privacy right must not be penalized by automatically revoking Diamonds, 30-Day VIP, Lifetime VIP, or unrelated account value.

## 11. Fees and refusal are exceptional

Article 12 rights communications/actions are generally free of charge.

Only where CK-Labs can demonstrate that a request is **manifestly unfounded or excessive**, particularly because of repetitive character, may it use the Article 12(5) fee/refusal route.

Do not label a request excessive merely because:

- the account has a long gameplay history;
- the user previously contacted support;
- the request involves purchase/security records;
- gathering the data is inconvenient;
- the user is angry or threatens a complaint; or
- CK-Labs is a solo/small operator.

If refusing or charging a fee, retain the reasoning showing why the statutory threshold was met. The burden of demonstrating manifestly unfounded/excessive character lies with the controller.

A request for a first access copy is not chargeable merely because the user says they may use it in a dispute. CJEU Case C-307/22 confirms that the requester does not have to justify the access request and that the first copy is, in principle, free.

## 12. Security and delivery of the response

A privacy response can itself create a data breach if it is sent to the wrong person.

Before delivery:

- verify the recipient proportionately;
- avoid emailing an unencrypted archive containing unnecessary secrets or unrelated users' data;
- use a secure authenticated download or appropriately protected delivery method where the sensitivity/volume warrants it;
- expire temporary download links reasonably;
- do not include password hashes, secret keys, authentication tokens, raw session secrets, full payment-card data, or other credentials simply because they appear in internal systems;
- maintain an audit record that the response was prepared and delivered without retaining an unnecessary permanent second copy of the full export.

If an access export would reveal an ongoing security secret, redact the secret while still providing the requester's personal data and enough explanation to make the response intelligible where required.

## 13. Processor and third-party coordination

A complete response can require data from processors used by CK-Labs. Maintain a provider map and a process for requesting or deleting data from processors where the relevant controller obligation requires it.

Do not tell the user to contact a CK-Labs processor instead merely because CK-Labs outsourced storage or support. Processor assistance obligations should be handled under the applicable Article 28 arrangement.

For independent controllers such as a store/payment provider acting independently for part of the processing, explain the role split accurately and, where useful, point the user to that provider's own privacy-right channel. Do not pretend CK-Labs can delete or export data that the independent controller lawfully holds under its own responsibility.

## 14. Minimum internal request record

Keep a proportionate request log containing:

- request ID;
- date/time received and official channel;
- rights invoked/understood;
- relevant account/user identifiers;
- identity-verification method and any pause;
- one-month deadline;
- any extension notice, date, and reason;
- systems/providers searched;
- redactions and Article 15(4) balancing where relevant;
- action taken or refusal reason;
- date and delivery method;
- recipients notified under Article 19 where applicable;
- any supervisory-authority/legal escalation; and
- deletion date for the request case file when it is no longer needed.

Do not turn the privacy-request log into an indefinite behavioral profile of users who exercise their rights.

## 15. Release test matrix

Before production release and after material data-model/provider changes, safely test at least:

1. access request from an authenticated account;
2. access request from a different email that requires proportionate verification;
3. access request involving Apple/Google/Xsolla transaction and entitlement records;
4. mixed record containing the requester plus another player's personal data;
5. request for actual recipients;
6. rectification of inaccurate account data without falsifying audit history;
7. erasure request where narrow tax/entitlement evidence must lawfully remain;
8. restriction request on disputed data;
9. legitimate-interest objection requiring a recorded balancing decision;
10. portability request producing a machine-readable export without duplicating game entitlements;
11. automated-decision explanation request;
12. request that is genuinely repetitive/excessive enough to require Article 12(5) assessment;
13. extension notice sent within the original one-month period; and
14. secure delivery to the correct verified requester.

For paid-value scenarios, prove that exercising a privacy right does not itself remove unrelated purchased Diamonds, active 30-Day VIP, or valid Lifetime VIP.

## 16. Localization and canonical-policy rule

This gate does not materially change the current public meaning of the canonical English Privacy Policy. It operationalizes the rights already disclosed in Section 9 and related sections.

If the canonical English Privacy Policy later materially changes the public description, scope, deadline, or legal effect of data-subject rights, **reopen all 25 localized Privacy documents** and resynchronize them in the required locale order before marking them current again.

Never introduce displayed `TyconX` branding or describe the released/current TycoonX service as beta.

## Current legal checkpoint

Reviewed against current materials available on August 31, 2026:

- Regulation (EU) 2016/679, especially Articles 11-22 and Recitals 59, 63, and 64;
- EDPB, **Guidelines 01/2022 on data subject rights - Right of access**, final version adopted April 17, 2023;
- EDPB, **Data protection guide for small business - Respect individuals' rights**, current online guidance;
- CJEU C-154/21, **Österreichische Post**, January 12, 2023, on actual recipients;
- CJEU C-487/21, **Österreichische Datenschutzbehörde and CRIF**, May 4, 2023, on a faithful and intelligible copy and document/database extracts where essential; and
- CJEU C-307/22, **FT**, October 26, 2023, on the first copy being free in principle and no need for the requester to justify the request.

Official references:

- GDPR: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng
- EDPB right-of-access guidelines: https://www.edpb.europa.eu/documents/guideline/guidelines-012022-on-data-subject-rights-right-of-access_en
- EDPB SME rights guide: https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en
- C-154/21: https://curia.europa.eu/juris/liste.jsf?num=C-154/21
- C-487/21: https://curia.europa.eu/juris/liste.jsf?num=C-487/21
- C-307/22: https://curia.europa.eu/juris/liste.jsf?num=C-307/22

## Founder-protective interpretation

This gate protects CK-Labs by making privacy requests provable and bounded. It does not require exposing other users' data, security secrets, source code, proprietary formulas, or entire internal databases where those materials are not required to make the requester's personal data intelligible. It also does not require deleting tax, fraud, entitlement, or legal-claims records that applicable law genuinely permits or requires CK-Labs to retain.

At the same time, those protections must be applied narrowly and documented. “Security”, “trade secret”, “fraud prevention”, “payment provider”, “small developer”, or “too much data” must never become blanket excuses to refuse a valid request or withhold all responsive personal data.
