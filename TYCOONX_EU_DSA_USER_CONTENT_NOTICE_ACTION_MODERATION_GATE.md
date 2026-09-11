# TycoonX EU Digital Services Act User Content, Notice-and-Action & Moderation Gate

Status: **OPEN IMPLEMENTATION / CLASSIFICATION GATE**  
Last reviewed: **September 11, 2026**

This gate converts the existing TycoonX Community Standards and social/UGC rules into a concrete EU Digital Services Act (DSA) implementation checklist. It is intentionally classification-aware. It does **not** assume every TycoonX social feature is automatically an "online platform" under Regulation (EU) 2022/2065.

The DSA has applied generally since **February 17, 2024**. TycoonX is a fully released game. Current social and community functionality must therefore be assessed against the live technical behavior of each feature rather than relying on old launch-stage assumptions.

This gate is an engineering/compliance control. It does not replace the TycoonX Terms of Service, Community Standards, Privacy Policy, mandatory consumer rights, or a case-specific legal assessment.

## 1. Why this gate exists

The canonical TycoonX Community Standards already state that:

- the policy applies to public/group chat, direct messages, profile text, company or union content, names, descriptions, comments, reports, images, creative works, and other UGC;
- CK-Labs may use reports, platform signals, rate limits, keyword/pattern filters, automated rules/classifiers, transaction/security signals, and human review;
- a legally required electronic notice-and-action mechanism will be provided where a TycoonX feature qualifies as a hosting service under the DSA;
- sufficiently precise illegal-content notices are to be processed in a timely, diligent, non-arbitrary, and objective manner where the legal requirement applies;
- legally required reasons, complaint handling, and redress information will be supplied when applicable; and
- moderation should not confiscate unrelated legitimate paid digital value without a separate lawful reason.

Those are appropriate player-facing principles, but they do not by themselves prove that the production reporting UI, moderation records, decision notices, appeals, safety escalation, transparency records, and service classification satisfy the DSA.

The release gate therefore remains open until the real TycoonX social surfaces and workflows are classified and tested.

## 2. Classify each social surface before relying on an exemption

For each live or planned social feature, record at minimum:

| Feature | Stores user information at user request? | Disseminates it to the public? | Intended audience | Candidate DSA classification | Owner |
| --- | --- | --- | --- | --- | --- |
| public/global chat | TBD | TBD | TBD | assess | CK-Labs |
| company/union/group chat | TBD | TBD | TBD | assess | CK-Labs |
| direct messages | TBD | normally limited recipients | TBD | assess separately | CK-Labs |
| profiles / bios / names | TBD | TBD | TBD | assess | CK-Labs |
| art / images / creative uploads | TBD | TBD | TBD | assess | CK-Labs |
| comments / rooms / social posts | TBD | TBD | TBD | assess | CK-Labs |
| support tickets / reports | TBD | normally non-public | CK-Labs/support | assess separately | CK-Labs |

Under Article 3 DSA, a hosting service is, in substance, a service that stores information provided by and at the request of a recipient. An online platform is a hosting service that, at the user's request, stores and disseminates information to the public, unless the public-dissemination activity is only a minor and purely ancillary feature satisfying the Regulation's conditions.

Do not classify a feature merely from its name. Classification depends on actual technical functionality and audience.

Examples:

- A public artwork gallery where players upload works for unrestricted viewing is a stronger online-platform candidate than a one-to-one support ticket.
- A direct message stored for the sender and recipient may still require hosting-service analysis even though it is not normally dissemination to the public.
- A company chat available only to a defined private group should not automatically be treated the same as a global public feed.
- A system-generated TycoonX news item is not user information merely because users can read it.

Document the conclusion, facts relied upon, date, and reviewer. Reassess when the feature changes.

## 3. Core hosting-service obligations must not be confused with online-platform-only duties

If a TycoonX feature qualifies as a hosting service, the Section 2 obligations in Articles 16 to 18 need their own assessment. Do not assume that CK-Labs being small automatically removes those core hosting-service duties.

Article 19 provides an exclusion for qualifying micro and small enterprises from **Section 3 additional online-platform duties**, subject to the Regulation's exceptions. It is not a blanket exemption from all DSA obligations.

Separately, Article 15(2) exempts qualifying micro or small intermediary-service providers that are not very large online platforms from the Article 15(1) transparency-reporting obligation.

Before relying on any size-based exemption:

1. document the legal entity/operator actually providing the relevant service;
2. calculate the applicable enterprise size under the referenced EU SME rules, including linked/partner-enterprise issues where relevant;
3. keep dated evidence for the assessment;
4. distinguish Article 15's exemption from Article 19's Section 3 exclusion; and
5. reassess if headcount, turnover, structure, ownership, or service scale changes.

Do not publish a broad statement such as "small companies are exempt from the DSA." That is inaccurate.

## 4. Article 14 Terms and moderation transparency

Where TycoonX is an intermediary service within Article 14, the applicable Terms must explain restrictions imposed on user-provided information and the policies, procedures, measures, and tools used for content moderation, including algorithmic decision-making and human review where used.

The live TycoonX Community Standards already provide a high-level explanation of automated rules/classifiers and human review. Production QA must additionally verify that the description remains materially true.

Required controls:

- Do not claim human review for every decision if the system actually uses automatic enforcement without review.
- Do not claim purely automated moderation if human moderators routinely make or override decisions.
- If an automated classifier is only a triage signal, describe it as triage rather than a final legal determination.
- If keyword/pattern filters can automatically hide, reject, mute, or block content, that effect belongs in the internal moderation inventory.
- If the moderation architecture changes materially, review whether the Community Standards / Terms description needs an update and localized synchronization.
- Make applicable terms clear, plain, intelligible, user-friendly, and readily accessible.
- Moderation rules must be applied with due regard to users' fundamental rights where the DSA requires that standard.

A moderation model or vendor name does not need to be exposed merely for attackers to evade safeguards, but the legally required explanation cannot be replaced by vague language that gives users no meaningful idea how restrictions can arise.

## 5. Article 16 electronic notice-and-action mechanism

For every TycoonX surface qualifying as a hosting service, implement an electronic mechanism that allows any individual or entity to notify CK-Labs of specific information alleged to be illegal.

The mechanism must be easy to access and user-friendly. A generic support inbox can be part of the route only if it actually supports the required information and workflow reliably.

The notice flow should enable the notifier to provide:

1. a sufficiently substantiated explanation of why the information is alleged to be illegal;
2. the exact electronic location or other precise identifier needed to find the content, adapted to TycoonX's content model;
3. notifier name and email where legally required, while preserving statutory exceptions; and
4. the required good-faith confirmation about the accuracy and completeness of the notice.

For TycoonX, an "exact electronic location" may need to be represented by stable content identifiers rather than a conventional public URL. Examples include message ID, artwork/display ID, room ID plus message ID, public-profile identifier, company/union content ID, or another server-side immutable reference sufficient to find the exact item.

Do not force a reporter to guess an internal UUID if the UI can populate the relevant identifier automatically.

### Receipt and decision workflow

Where Article 16 applies:

- confirm receipt to the notifier electronically without undue delay where electronic contact details are available;
- process the notice in a timely, diligent, non-arbitrary, and objective manner;
- do not treat a report as proof merely because it was submitted;
- preserve enough evidence to reconstruct what was reported and what decision was made;
- distinguish action based on alleged illegality from action based on the TycoonX Terms or Community Standards;
- if automated means are used in processing or deciding the notice, ensure the legally required disclosure is included in the relevant communication; and
- notify the notifier of the decision regarding the reported information and applicable redress possibilities where required.

### Founder-protective effect

A sufficiently precise and adequately substantiated Article 16 notice can be legally significant for knowledge/awareness analysis under the DSA. It is therefore safer to route notices into one auditable workflow instead of allowing serious illegal-content reports to disappear across chat messages, ad hoc moderator DMs, emails, or informal spreadsheets.

That does not mean every notice proves illegality. It means the notice must be assessed and handled consistently.

## 6. Article 17 statement of reasons

Where Article 17 applies, a clear and specific statement of reasons must be supplied to an affected user when CK-Labs imposes covered restrictions because user-provided information is considered illegal or incompatible with the Terms.

Potential covered restrictions include:

- removing content;
- disabling access to content;
- reducing or restricting content visibility;
- suspending, terminating, or otherwise restricting monetary payments connected to the relevant information where the Article applies;
- suspending or terminating all or part of the service; or
- suspending or terminating an account.

The reason record and user notice should be capable of covering, as applicable:

- the specific restriction and its territorial/duration scope;
- the facts and circumstances relied on;
- whether a notice or own-initiative investigation triggered the decision;
- whether automated means were used;
- the legal ground if the information is treated as illegal;
- the relevant Terms / Community Standards ground if it is a contractual-policy decision; and
- available redress options.

Do not send a generic "you violated our rules" notice when the DSA requires a specific statement of reasons.

### Safety exception handling

Do not disclose reporter identity or sensitive investigative information merely because a reason notice is required. The DSA itself recognizes that notifier identity is included only where strictly necessary in the relevant Article 17 circumstances. Other law may also require confidentiality, victim protection, evidence protection, or temporary non-disclosure.

## 7. Keep moderation separate from payment reconciliation

Content moderation, game-integrity enforcement, and payment reconciliation are different legal/technical events.

Examples:

- Removing an unlawful image must not automatically reverse a valid Apple Diamond transaction.
- Muting a player's chat must not automatically shorten a valid one-time non-renewing 30-Day VIP.
- Suspending a user for repeated harassment must not automatically delete an unrelated Lifetime VIP source unless the Terms and applicable law independently justify loss of service/entitlement and mandatory consumer remedies are respected.
- Reversing a fraudulent Xsolla payment must be handled from the authoritative payment transaction even if the same user also has an unrelated moderation warning.
- A chargeback is not proof that the user's speech was illegal.
- A moderation report is not proof that a payment was unauthorized.

If an account-level suspension lawfully prevents service access, entitlement and consumer-remedy consequences must still be assessed under the Terms, Purchases & Refunds Policy, provider rules, and mandatory law. Do not invent a payment forfeiture merely because an account restriction exists.

## 8. Cheats, hacks, exploits, fraud, and Community Standards

The DSA illegal-content workflow must not weaken TycoonX's separate ability to protect game integrity.

CK-Labs may still investigate and proportionately act on:

- altered-client or API abuse;
- unauthorized automation;
- exploit laundering;
- fraudulent payment conduct;
- chargeback/entitlement abuse;
- account compromise indicators;
- impersonation/phishing/scams;
- coordinated abuse; or
- other genuine Terms violations.

But classification matters:

- "illegal content" is a legal conclusion or allegation governed by applicable law;
- "incompatible with TycoonX rules" is a contractual/policy conclusion;
- "security anomaly" is an investigative signal;
- "payment reversal" is a transaction state; and
- "game economy correction" is a state-reconciliation action.

Do not collapse these into one generic "fraud/abuse" flag with no provenance.

A large in-game transfer, high salary, unusual price, aggressive bid, high win rate, repeated delivery, or other abnormal state is not automatically illegal content or knowing exploitation. Evidence and context still matter.

## 9. Account compromise and moderation

A compromised account can produce content the legitimate account holder did not author.

Where reasonably supportable:

1. preserve the original content, moderation trigger, timestamps, sessions/devices/IP evidence subject to privacy rules, and security signals;
2. contain immediate safety/security risk;
3. distinguish temporary protective restriction from final punitive enforcement;
4. investigate the compromise claim using available account-security evidence;
5. restore access or reverse moderation where justified; and
6. preserve separate payment and entitlement provenance.

Do not make a user choose between reporting account compromise and retaining unrelated valid paid value.

## 10. Article 18 serious criminal-offence escalation

If a TycoonX feature qualifies as a hosting service and CK-Labs becomes aware of information giving rise to suspicion that a criminal offence involving a threat to the life or safety of a person has taken place, is taking place, or is likely to take place, Article 18 requires prompt notification to the relevant law-enforcement or judicial authorities and provision of relevant available information.

Create a written emergency escalation procedure that covers:

- what facts trigger Article 18 review;
- who may make the escalation decision;
- how to identify the Member State(s) concerned;
- the fallback route where the relevant Member State cannot be identified with reasonable certainty;
- preservation of relevant evidence;
- data minimization and access control;
- record of what was disclosed, to whom, when, and on what legal basis; and
- coordination with other mandatory reporting regimes without duplicate or contradictory handling.

Do not make a public/community moderator personally improvise law-enforcement disclosure from a private device or personal email account.

Do not promise users that all reports remain confidential in circumstances where law requires disclosure.

## 11. Additional online-platform duties if TycoonX qualifies and Article 19 does not exclude them

If a relevant TycoonX feature qualifies as an online platform and CK-Labs cannot rely on the Article 19 exclusion for the relevant period, assess and implement the Section 3 duties, including as applicable:

### Article 20 internal complaint handling

- electronic and free complaint route;
- access for the legally required period following covered decisions;
- easy-to-access and user-friendly design;
- timely, non-discriminatory, diligent, and non-arbitrary handling; and
- reversal without undue delay where the complaint shows the prior decision was unfounded.

Do not rely on an informal support conversation if the law requires the structured Article 20 system.

### Article 21 out-of-court dispute settlement

Ensure decision communications and the internal process can supply the legally required information about certified out-of-court dispute settlement where applicable. This DSA mechanism is separate from German VSBG consumer-conciliation duties and ordinary store/payment-provider disputes.

### Article 22 trusted flaggers

Notices from entities holding official DSA trusted-flagger status within their designated expertise must receive the legally required priority and processing where this Article applies. Do not create a fake "trusted flagger" label for ordinary VIP users, ambassadors, moderators, testers, or commercial partners.

### Article 23 misuse

Where Article 23 applies, repeated manifestly illegal content and repeated manifestly unfounded notices/complaints require the Regulation's case-by-case, objective approach, including prior warning and reasonable suspension rules. The Terms must clearly explain the misuse policy and relevant assessment factors.

A player who reports several genuine problems must not be punished merely for being persistent.

### Article 24 transparency / active recipients

Assess the applicable publication/reporting duties, including the average monthly active recipient requirements where applicable. Do not guess or publish a marketing DAU figure as the DSA average monthly active recipient calculation without applying the legally required method.

### Article 25 interface design

Where applicable, moderation/reporting/appeal interfaces must not be designed to deceive or manipulate users or materially impair free and informed decisions within the Article's scope.

Examples of risky patterns include making "appeal" technically available but visually hidden behind repeated discouraging screens, or making withdrawal of a report far easier than submitting one in a way designed to suppress legitimate notices.

### Article 28 minors

If the relevant online platform is accessible to minors and Article 28 applies, assess the required appropriate and proportionate measures for a high level of privacy, safety, and security. Keep this aligned with Apple/Google age controls and the separate TycoonX child-safety rules.

## 12. Automated moderation controls

TycoonX may use automated tools, but the system must remain auditable.

Minimum controls:

- record which model/rule/filter version contributed to a moderation event;
- distinguish detection, recommendation/triage, temporary containment, and final decision;
- log whether a human reviewed or overrode the result;
- retain the content identifier and relevant policy/legal category;
- do not fabricate a human review that did not occur;
- measure false-positive/false-negative patterns where reasonably feasible;
- do not train or repurpose private communications beyond the disclosed/lawful basis merely because they passed through a moderation system;
- avoid permanent sanctions based only on weak classifier confidence where additional review is reasonably necessary; and
- make sure language-specific moderation does not silently impose a harsher standard merely because the model performs worse in that language.

A model flag such as "sexual content" is a signal, not automatically the final legal or Community Standards conclusion.

## 13. Privacy and data-minimization boundary

DSA compliance does not suspend GDPR/TDDDG obligations.

For notices, appeals, moderation evidence, and law-enforcement escalation:

- collect only data reasonably needed for the workflow and legal obligations;
- define access roles;
- define retention based on purpose, dispute/security needs, and legal obligations;
- do not expose a reporter's private contact information to the reported user unless law requires it;
- do not put sensitive report/evidence payloads into public analytics logs;
- protect child-safety and victim information with stricter access where appropriate;
- keep moderation records separate from public profile data unless a justified product purpose requires linkage; and
- record the lawful basis for authority disclosures where required.

Deletion requests must be assessed against lawful evidence-retention, security, legal-claim, and mandatory-reporting needs rather than automatically deleting evidence needed for a live dispute or safety case.

## 14. Service outages, old clients, and provider changes

A moderation service or AI-provider outage must not silently turn TycoonX into an unmoderated public surface where required safeguards disappear.

Define degraded-mode behavior, for example:

- keep reporting available even if automated classification is down;
- queue notices with reliable timestamps;
- apply narrowly tailored temporary safety limits when needed;
- prioritize imminent safety/illegal-content escalations;
- do not lose queued reports during deployment/restart;
- communicate material feature limitations where appropriate; and
- process backlog without treating delayed handling as proof the original report was invalid.

If an old app version cannot support a legally required reporting/appeal/safety function, CK-Labs may require an update or restrict the affected feature, subject to mandatory consumer/update rights. Do not keep an insecure legacy social surface active solely because some users have not updated.

Replacing a moderation, hosting, authentication, or infrastructure provider must preserve required notice records, reason history, appeal state, and security evidence to the extent lawfully necessary.

## 15. Business transfer / successor operator

If TycoonX is sold, reorganized, merged, or transferred to a lawful successor operator:

- DSA classification and obligations must be reassessed against the successor structure;
- open illegal-content notices and appeals must not simply disappear;
- moderation/evidence records may transfer only on an appropriate legal basis and with required privacy transparency;
- published legal operator/contact information must be updated; and
- player-facing terms must not imply CK-Labs remains the operator if it no longer is.

## 16. Permanent shutdown

A lawful permanent TycoonX shutdown does not erase already-open legal obligations.

Before closure, assess:

- how users can submit legally required notices while the service remains available;
- what happens to open notices, reason notices, appeals, and authority requests;
- retention/deletion of moderation and safety evidence;
- final operator/contact route for unresolved legal matters; and
- coordination with the separate permanent-service-discontinuation and consumer-remedies gate.

Do not keep selling social-feature-dependent products on a materially misleading basis after shutdown is sufficiently certain.

## 17. Production data model / audit trail requirements

This gate does **not** authorize a database change. When engineering work is separately approved, the implementation should be able to represent the following concepts without relying on free-form moderator notes alone:

- report/notice ID;
- reporter identity/contact where lawfully collected;
- reporter category, including verified trusted flagger where legally applicable;
- exact content identifier/location;
- snapshot/hash or evidence reference where appropriate;
- alleged illegality category;
- Community Standards / Terms category;
- timestamps for receipt, acknowledgment, decision, notification, appeal, and reversal;
- decision state and restriction type;
- legal or contractual ground;
- automated-system involvement and version where relevant;
- human-review state;
- reason statement delivered to affected user;
- notifier decision notice;
- redress route offered;
- emergency/law-enforcement escalation metadata with strict access control;
- retention/deletion status; and
- linkage to account-security/payment cases only where actually relevant.

Avoid one overloaded `reason = abuse` field. Provenance is legally and operationally valuable.

## 18. Concrete QA scenarios

The following scenarios must be testable before marking this gate closed.

1. A logged-out person reports a specific public artwork as allegedly illegal and can identify the exact item electronically.
2. A logged-in player reports a global-chat message; the content ID is attached automatically instead of requiring a guessed identifier.
3. A vague report saying only "this player is illegal" is distinguishable from a sufficiently precise notice and can be handled without pretending it establishes illegality.
4. A sufficiently precise notice is acknowledged and enters an auditable decision workflow.
5. Content is removed for a Community Standards violation that is not alleged to be illegal; the reason record correctly uses the contractual/policy ground.
6. Content is removed because CK-Labs determines it is illegal; the reason workflow records the legal ground and required redress information.
7. An automated classifier flags a harmless image; a human reverses the restriction and the audit trail shows both steps.
8. A filter auto-hides content pending review; the system does not falsely label the action as completed human moderation.
9. A user's content is removed, but their unrelated purchased Diamonds remain unchanged.
10. A chat restriction is imposed, but an unrelated valid one-time 30-Day VIP remains intact unless a separate lawful account/service restriction has different consequences.
11. A user with valid Lifetime VIP receives a moderation sanction; Lifetime VIP is not silently converted into a payment-reversal event.
12. An Xsolla chargeback is reconciled from the transaction record and is not treated as proof of illegal speech.
13. A compromised account posts prohibited content; protective containment, ownership recovery, and final enforcement are distinguishable.
14. A credible threat to life/safety triggers the Article 18 escalation playbook rather than an ordinary low-priority moderation queue.
15. A reporter's email address is not exposed to the reported player merely because a reason notice is sent.
16. A repeated malicious-report campaign is handled proportionately and does not suppress legitimate reports from other users.
17. If Article 20 applies, an affected user can submit a free electronic complaint and a successful complaint reverses the prior restriction without undue delay.
18. If Article 22 applies, a verified official trusted flagger notice receives the required priority; an ordinary TycoonX role cannot self-assign that legal status.
19. If Article 23 applies, suspension for repeated manifestly unfounded notices follows the required warning/case-by-case process.
20. A moderation-provider outage keeps the reporting channel available and does not lose queued notices.
21. An old unsupported client is prevented from exposing a social surface that lacks mandatory safety/reporting behavior where an update is required.
22. A provider migration preserves open notice/appeal state and relevant reason records.
23. A permanent shutdown plan includes treatment of unresolved moderation/legal reports.
24. A German/EU user sees only **TycoonX** in player-facing moderation/legal copy, even where compatibility-sensitive technical routes still contain older route identifiers.
25. Current service copy contains no stale pre-release framing.

## 19. Closure criteria

Do not mark this gate closed until all of the following are evidenced:

- each relevant social/UGC surface has a dated DSA classification;
- any relied-upon micro/small-enterprise exemption or exclusion is documented accurately and scoped to the correct Articles;
- applicable Article 14 moderation disclosures match production behavior;
- every hosting-service surface has an Article 16-compliant notice route where required;
- receipt/decision communications are operational;
- Article 17 reason statements are generated for covered restrictions;
- Article 18 emergency escalation is documented and usable;
- any applicable Section 3 online-platform duties are implemented or a valid Article 19 exclusion is documented;
- automated moderation involvement can be reconstructed;
- appeals/reversals do not destroy unrelated valid paid entitlements;
- privacy/access/retention controls are defined;
- outage and provider-migration behavior has been tested;
- Community Standards, Terms, support copy, and moderation UI remain consistent; and
- required localized player-facing wording is synchronized if canonical meaning materially changes.

## 20. Current assessment

**Canonical wording:** The existing TycoonX Community Standards already contain an appropriately cautious high-level DSA framework, including illegal-content notice handling, automated/human moderation disclosure, reasons, review, and preservation of unrelated legitimate paid value. No new permanent player-facing contractual promise is required solely to create this gate.

**Open implementation issue:** Repository legal wording does not itself establish whether each live social feature is a hosting service or online platform, whether the production notice mechanism captures Article 16 information, whether covered Article 17 reason statements are actually delivered, or whether Article 18 escalation and any non-exempt Section 3 processes are operational.

**Localization consequence:** Because this file is an internal implementation gate and does not materially change the canonical player-facing legal meaning, it does not reopen the 100 completed localized legal documents. If later implementation review requires a material Community Standards/Terms change, synchronize that affected document type across the 25 locales in the required order.

## 21. Primary legal reference

Regulation (EU) 2022/2065 (Digital Services Act), especially Articles 3, 14 to 25, 28, and 93:

https://eur-lex.europa.eu/eli/reg/2022/2065/oj

This gate must be rechecked if the relevant EU rules, Commission guidance, service architecture, public/private UGC model, company-size status, or moderation technology materially changes.
