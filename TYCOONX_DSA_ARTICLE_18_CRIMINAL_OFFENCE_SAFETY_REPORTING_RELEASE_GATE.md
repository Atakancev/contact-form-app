# TycoonX DSA Article 18 Criminal-Offence Safety Reporting Release Gate

**Status:** P0 legal / trust & safety / incident-response release gate  
**Owner:** CK-Labs  
**Review date:** September 4, 2026  
**Scope:** TycoonX features in which CK-Labs stores information supplied by users at their request and therefore may act as a provider of hosting services under Regulation (EU) 2022/2065 (Digital Services Act, "DSA"), including chat, profile text, company/union content, comments, public creative works, support-linked UGC and other hosted user content.

## Purpose

This gate operationalizes **DSA Article 18, notification of suspicions of criminal offences**, for TycoonX. It closes the gap between ordinary moderation, Article 16 illegal-content notices, emergency safety handling and the separate duty to notify law-enforcement or judicial authorities when the Article 18 threshold is actually met.

It is a narrow companion to:

- `TYCOONX_DSA_ARTICLE_16_NOTICE_ACTION_RELEASE_GATE.md`;
- `TYCOONX_DSA_ARTICLE_17_PAYMENT_MODERATION_BOUNDARY_GATE.md`;
- `TYCOONX_DSA_INTERMEDIARY_LIABILITY_AUTHORITY_ORDERS_RELEASE_GATE.md`;
- `TYCOONX_EU_GERMAN_TERRORIST_CONTENT_ONLINE_RELEASE_GATE.md`;
- `TYCOONX_EU_AI_ACT_NCII_CSAM_PROHIBITION_RELEASE_GATE.md`;
- `TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST.md`; and
- `TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md`.

This is implementation and evidence guidance. It does **not** by itself amend the canonical player-facing Terms, Purchases & Refunds Policy, Privacy Policy or Community Standards. If future implementation requires materially different public legal meaning, update canonical English first and reopen only the affected localized document type in `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`.

TycoonX has been in full release since **September 1, 2026**. Do not describe the live service, users, purchases, VIP, Diamonds or rewards as beta.

## 1. Article 18 is a hosting-service duty, not an online-platform-only duty

Article 18 sits in **DSA Section 2**, which contains additional duties for providers of hosting services, including online platforms.

For each TycoonX social or UGC feature, maintain a factual service classification. The relevant question is whether CK-Labs stores information supplied by a recipient of the service at that recipient's request. Do not assume every database-backed game feature is hosting, and do not assume private or limited-recipient content is automatically outside hosting merely because it is not public.

### Article 19 micro/small-enterprise boundary

Do **not** use the DSA Article 19 micro/small-enterprise exemption to switch off Article 18 for an in-scope hosting service.

Article 19 concerns additional **Section 3** online-platform duties. Article 18 is in **Section 2**. A valid Article 19 exemption can therefore affect certain online-platform duties without erasing an Article 18 duty that otherwise applies to a TycoonX hosting feature.

## 2. Preserve the actual Article 18 threshold

Article 18 is not a general instruction to report every Terms violation, rude message, allegation, suspicious account or potentially illegal item to police.

The escalation must assess whether CK-Labs has become aware of information giving rise to a **suspicion that a criminal offence involving a threat to the life or safety of a person or persons**:

- has taken place;
- is taking place; or
- is likely to take place.

The workflow should therefore distinguish at least these questions:

1. Is there information giving rise to a genuine suspicion rather than only a vague unsupported label?
2. Does the suspected conduct potentially constitute a **criminal offence** under relevant law?
3. Does that suspected offence involve a **threat to life or safety** of one or more persons?
4. Is there enough context to identify the relevant Member State or Member States with reasonable certainty?
5. What relevant information is already available to CK-Labs and should be included in the notification?

A normal profanity report, a payment complaint, a gameplay dispute, an ordinary copyright complaint or a non-safety Terms violation does not become an Article 18 notification merely because a user calls it "illegal."

Likewise, a report rejected under Article 16 is not automatically malicious, and an Article 18 escalation is not proof that the reported user committed a crime.

## 3. Examples are indicators, not an exhaustive criminal-law taxonomy

The European Commission's current Article 18 materials identify examples that may fall within scope, including **incitement to terrorism, sexual abuse and exploitation of children, and trafficking in human beings**.

Those examples are not a complete list and do not replace the applicable criminal law of the relevant Member State.

TycoonX-specific signals that may require qualified Article 18 review can include, depending on context and law:

- a credible threat to kill or seriously injure an identified person;
- credible coordination of imminent serious violence;
- child sexual abuse or exploitation conduct;
- trafficking or coercive exploitation involving a person's safety;
- terrorism-related conduct that creates the statutory life/safety risk; or
- another suspected criminal offence where the available facts genuinely involve a threat to life or safety.

Do not hard-code a closed list of offence names into the backend as though every Member State has identical criminal-law terminology.

The Commission published a factual summary of its targeted Article 18 consultation on **March 18, 2026** and specifically identified the notification process, identification of Member States and the offences considered in scope under national law as areas for continuing clarification. Treat future Commission, European Board for Digital Services, German Digital Services Coordinator or competent-authority guidance as a release-review trigger.

## 4. Awareness can arise from more than an Article 16 notice

An Article 18 check may be triggered by information CK-Labs becomes aware of through:

- an Article 16 notice;
- an ordinary in-app report;
- a Support ticket;
- human moderation;
- a credible safety escalation from a platform/provider;
- a lawful authority communication;
- a voluntary safety investigation; or
- an automated safety signal that is sufficiently corroborated for qualified review.

Do not require the reporter to know the words "Article 18" or to select a special legal category before the safety team can recognize the trigger.

Conversely, the existence of an automated keyword/classifier hit alone should not be treated as conclusive proof of a criminal offence. Use context and qualified review where time and safety permit.

## 5. Prompt notification needs a dedicated urgent path

When the Article 18 threshold is met, CK-Labs must **promptly** inform the competent law-enforcement or judicial authorities and provide the relevant information available.

Operational rule:

- Article 18 cases must not wait in an ordinary community-support batch;
- create a P0 safety/legal escalation path with an auditable receipt timestamp;
- record when the Article 18 threshold was identified;
- record when the competent authority notification was sent;
- preserve the reason for any material delay; and
- use the fastest appropriate lawful route where the facts indicate an imminent threat.

Do not invent a fixed statutory number of minutes where Article 18 itself says "promptly." Internal service targets may be stricter than the legal text, but they must not be presented to players as the statutory deadline.

For an imminent real-world safety emergency, do not wait for a routine legal-review cycle if an appropriate emergency or law-enforcement channel is available. Article 18 is not a reason to downgrade emergency response into ordinary Support.

## 6. Identify the Member State or Member States correctly

Under Article 18, a **Member State concerned** can be a Member State:

- in which the suspected offence has taken place, is taking place or is likely to take place;
- where the suspected offender resides or is located; or
- where the victim of the suspected offence resides or is located.

More than one Member State can therefore be concerned.

The case record should document the routing facts actually known, such as a reliable location stated in the content, account country information, relevant IP/session geography if lawfully available and genuinely relevant, or information provided by the reporter/authority.

Do not infer a person's actual location solely from a selected game country, language, regional-price setting or storefront unless there is a justified reason to treat that signal as location evidence.

## 7. Reasonable-certainty fallback must be implemented

If CK-Labs **cannot identify the Member State concerned with reasonable certainty**, Article 18(2) provides a fallback: inform the law-enforcement authorities of the Member State in which the hosting provider is established or where its legal representative resides or is established, or inform **Europol**, or both.

Maintain an internal routing directory that records:

- the current establishment/legal-representative position relevant to Article 18;
- the operational contact/channel for the competent national authority or authorities;
- the Europol fallback route where appropriate;
- channel authentication requirements;
- after-hours/emergency procedures; and
- the date the routing information was last verified.

Do not improvise a police email address from an unverified web search during an active threat if a validated route should already exist in the incident playbook.

## 8. The notification packet should be relevant, factual and auditable

A minimum Article 18 case packet should normally contain, where available and relevant:

- internal case ID;
- date/time the triggering information was received or discovered;
- date/time the Article 18 threshold was identified;
- exact content/message/item identifier;
- preserved copy or reliable representation of the relevant content;
- account/profile identifier connected to the content;
- known victim or target information only to the extent relevant;
- relevant timestamps and session/security metadata;
- relevant IP/network/device information only where lawfully available and materially useful;
- a concise statement of the suspected offence/safety concern without presenting suspicion as conviction;
- the facts supporting the life/safety concern;
- routing rationale for the Member State or Member States selected;
- any urgent protective action already taken;
- evidence-preservation status; and
- CK-Labs contact information for authority follow-up.

If a translation is supplied, preserve the original content as the primary evidence and identify the translation as a translation rather than silently replacing the original.

## 9. "All relevant information available" does not mean dump the whole account

Article 18 requires the provider to supply the relevant information available. That is not a license to export every piece of data ever associated with the player.

Apply purpose limitation and data minimization to the case packet while still meeting the Article 18 duty:

- do not attach unrelated private chats;
- do not attach unrelated payment histories;
- do not expose unrelated users' personal data;
- do not include full payment-card data that CK-Labs does not need or does not possess;
- do not include Support correspondence unrelated to the safety suspicion; and
- do not use the notification as a reason to create a general intelligence dossier on the player.

Where personal data relating to suspected offences is processed, assess the applicable GDPR framework, including the legal-obligation basis, data minimization, security, retention and **Article 10** safeguards for offence-related personal data. The DSA obligation does not erase GDPR accountability.

## 10. Preserve evidence without creating indefinite shadow retention

When a credible Article 18 case arises, preserve relevant evidence against ordinary deletion/rotation long enough to satisfy the applicable legal, authority, security and dispute needs.

The legal hold should be:

- case-specific;
- documented;
- limited to relevant data;
- access-controlled;
- protected against accidental editing/deletion;
- reviewed when the purpose ends; and
- released or narrowed when retention is no longer justified.

An account-deletion or GDPR erasure request does not require CK-Labs to destroy information that must lawfully be retained for an active Article 18/legal process, but the existence of one safety case also does not justify preserving an entire account forever.

## 11. Article 18 does not create a general monitoring duty

DSA Article 8 prohibits imposing a general obligation on intermediary providers to monitor all transmitted/stored information or actively seek facts indicating illegal activity.

TycoonX therefore does not need to read every private message merely because Article 18 exists.

At the same time, DSA Article 7 protects good-faith, diligent voluntary own-initiative investigations from destroying the Articles 4 to 6 liability exemptions solely because the provider undertakes those activities.

CK-Labs may use proportionate safety tooling, abuse classifiers, user reports and human moderation. The operational goal is to recognize an Article 18 trigger when relevant information actually becomes known, not to build indiscriminate surveillance of every player communication.

## 12. Article 16 notice-and-action and Article 18 notification are separate tracks

An Article 16 notice:

- lets a person notify specific allegedly illegal hosted information;
- can create Article 16(3) actual knowledge/awareness for the specific item when its conditions are met; and
- leads to the Article 16 receipt/decision process where applicable.

An Article 18 notification:

- is a provider-to-authority safety/criminal-offence notification;
- has its own threshold involving a suspected criminal offence plus threat to life/safety; and
- can be triggered even when no Article 16 notice was submitted.

One case may involve both tracks, but never use one status field such as `illegal_report=true` to pretend all legal consequences are identical.

## 13. Article 18 is not an Article 9 authority order

A provider notifying an authority under Article 18 is not the same as CK-Labs receiving a valid Article 9 order to act against illegal content.

Keep separate records for:

- provider-originated Article 18 notification;
- authority-originated Article 9 order;
- ordinary police request;
- preservation request/order;
- judicial process; and
- any other statutory authority route.

Validate authority requests and orders under the separate authority-order gate. Do not convert a voluntary/requested disclosure into a fictional binding removal order.

## 14. Terrorist Content Online procedures remain separate

The EU Terrorist Content Online Regulation can impose its own removal-order and related obligations. A terrorist-content case may also trigger Article 18 if the Article 18 threshold is met, but the workflows are not interchangeable.

A one-hour TCO removal order must not be left in an ordinary Article 18 queue, and a provider-originated Article 18 notification is not itself a TCO removal order.

Use `TYCOONX_EU_GERMAN_TERRORIST_CONTENT_ONLINE_RELEASE_GATE.md` for TCO-specific deadlines, competent-authority validation and evidence.

## 15. Child sexual abuse/exploitation cases need specialized handling

Child sexual abuse/exploitation information can fall within Article 18 and can also engage other mandatory child-protection, criminal-law, platform and evidence-handling rules.

Controls:

- prioritize immediate child-safety review;
- do not require an Article 16 reporter's name/email where Article 16(2)(c)'s specific offence exception applies;
- avoid unnecessary reproduction or internal circulation of illegal imagery;
- preserve hashes, identifiers and other evidence in a secure manner where lawful and useful;
- use the specialized statutory reporting route where another law requires one; and
- do not assume that making an Article 18 notification automatically satisfies every separate child-safety reporting duty.

## 16. Do not automatically tip off a suspected offender

Article 18 does not require TycoonX to send the suspected user a message saying that CK-Labs reported them to law enforcement.

Keep separate decisions for:

- whether content/account restrictions require an Article 17 statement of reasons;
- whether law, an authority instruction, safety needs or investigation integrity restrict what can be disclosed;
- what information can safely be shared with the affected user; and
- what reporter/victim information must remain protected.

Do not fabricate a false reason for a moderation action. If a legally required reason must be limited, document the lawful basis for the limitation and provide the information that can lawfully be given.

## 17. Reporter and victim identity require special care

Do not disclose a reporter's or victim's identity to the suspected offender by default.

The authority packet should include identifying information only when relevant, available and lawfully disclosable. Internally, restrict access to sensitive reporter/victim data to people who need it for safety/legal handling.

A reporter's use of a pseudonym or inability to identify the suspected offender does not automatically invalidate a safety signal. Assess the underlying information and the statutory threshold.

## 18. Account compromise changes attribution, not the safety facts

A threatening or exploitative message originating from an account is evidence about activity associated with that account, but it does not automatically establish who controlled the account at the time.

If account compromise is plausible:

- preserve relevant login/session/security evidence;
- contain the account where proportionate;
- distinguish account attribution from legal identity;
- avoid telling an authority that the legitimate account owner definitely authored the content unless evidence supports that statement; and
- allow the legitimate owner to challenge separate account-enforcement consequences where appropriate.

A compromised account does not make a credible threat less urgent, but it does matter to attribution and fairness.

## 19. Article 18 must not mutate payment or entitlement state by itself

An Article 18 escalation or authority notification is **not** an Apple refund, Google refund, Xsolla refund, chargeback, payment reversal or entitlement-correction event.

Therefore the Article 18 workflow must not by itself:

- remove purchased Diamonds;
- create a negative Diamond balance;
- restart, shorten or cancel the **one-time, non-renewing 30-Day VIP**;
- expire or reopen a sale for **Lifetime VIP**;
- manufacture a refund or chargeback;
- mark a payment as fraudulent; or
- erase unrelated legitimate purchased value.

If the same facts independently justify proportionate account safety restrictions, suspension or termination under the Terms, use the separate enforcement workflow. If the same facts independently establish payment fraud, refund, reversal, duplicate entitlement or exploit abuse, use the corresponding payment/economy workflow.

### Lifetime VIP invariant

Lifetime VIP remains a **one-time promotional entitlement available only during selected genuine sales windows**. CK-Labs may withdraw it from future sale, it may never return, and its past availability creates no expectation of continuous future availability.

Article 18 does not change that product definition and does not create an automatic Lifetime VIP cancellation rule.

## 20. Temporary protective action can precede final attribution

Where a serious safety risk exists, CK-Labs may take proportionate temporary protective action before every fact is finally resolved, for example:

- remove or restrict the threatening item;
- freeze a dangerous social interaction;
- preserve evidence;
- temporarily limit messaging;
- secure a potentially compromised account; or
- escalate for human/legal review.

Record the reason and scope. Temporary safety action is not a criminal conviction and should be revisited when material new evidence appears.

Do not use a safety emergency as a pretext to confiscate unrelated legitimate purchased value.

## 21. Old app versions and provider outages cannot silently disable the safety route

An old/unsupported client, push outage, moderation-vendor outage, authentication-provider incident or infrastructure failure must not silently make Article 18 impossible.

Maintain a server-side or operational fallback capable of:

- receiving safety escalations;
- preserving exact content identifiers and timestamps;
- accessing relevant server-side evidence;
- reaching the validated authority route; and
- recording the notification result.

If a client version is too old to provide safe or legally compliant UGC functionality, CK-Labs may require a supported version where permitted by the Terms and mandatory digital-product/update law.

## 22. Business transfer or provider replacement requires safety-process continuity

If CK-Labs changes moderation, authentication, hosting, support or security providers, or if TycoonX is transferred as part of a lawful business sale, merger or reorganization, the Article 18 process must remain operational during the transition.

Migration must preserve active legal holds, open safety cases, authority correspondence and the ability to identify the content/account records needed for a pending case, subject to lawful transfer and retention rules.

A successor operator must not inherit a folder of unexplained high-risk cases with no routing metadata.

## 23. Permanent service discontinuation does not erase open safety/legal duties

If TycoonX is lawfully permanently discontinued, shut down ordinary gameplay systems only after the shutdown plan has identified open Article 18 cases, active legal holds and authority follow-up that still require limited retention or access.

This does not require CK-Labs to operate the full game forever. It requires preserving the minimum evidence and contact capability still justified by applicable law or an active case.

## 24. Human review and automation controls

Automation can help detect urgency, extract content IDs, deduplicate reports, prioritize known child-safety patterns or surface high-confidence threats.

Do not let a low-confidence model output automatically become a factual statement to police that a named person committed a crime.

Where time permits, a qualified human should verify:

- the relevant content and context;
- the Article 18 threshold;
- the suspected offence/safety rationale;
- the Member State routing; and
- the evidence packet.

For an imminent threat, the process must allow urgent escalation without waiting for an unavailable specialist, while still preserving auditability and factual language.

## 25. Minimum audit record

For each Article 18 assessment that reaches the safety/legal queue, record at least:

- case ID;
- source of awareness;
- content/item/account identifiers;
- trigger timestamp;
- severity/urgency classification;
- Article 18 threshold result: `met`, `not met`, or `uncertain/escalated`;
- suspected criminal-offence category or free-text legal rationale;
- life/safety rationale;
- Member State routing analysis;
- authority/Europol route used where notified;
- notification timestamp;
- information categories disclosed;
- preservation/legal-hold state;
- temporary protective actions;
- linked Article 16/17/TCO/authority-order/child-safety case IDs where applicable;
- account-compromise indicator where relevant;
- reviewer/decision source;
- follow-up requests and responses; and
- closure/retention-review date.

Do not use this record as a hidden general-purpose fraud score, marketing profile or regional-pricing classifier.

## 26. Minimum regression scenarios

Before treating Article 18 handling as production-ready, test at least:

1. **Credible imminent violence:** a message plausibly threatening imminent serious violence enters the P0 path rather than ordinary Support.
2. **Ordinary insult:** abusive profanity without a credible criminal life/safety threat does not automatically generate a police notification.
3. **Article 16 crossover:** a legal-content notice can trigger Article 18 review without merging the two case types.
4. **Multiple Member States:** victim and suspected offender are in different Member States and routing analysis records both.
5. **Uncertain Member State:** reasonable-certainty test fails and the Article 18(2) establishment/legal-representative or Europol fallback is available.
6. **Child-safety case:** identity-exempt Article 16 intake can still trigger urgent Article 18/specialized child-safety handling.
7. **Account compromise:** threat remains urgent while authorship is recorded as uncertain pending security evidence.
8. **Automation false positive:** classifier hit is reviewed without automatically accusing the player of a crime.
9. **Deletion request during legal hold:** relevant safety evidence is preserved lawfully while unrelated data remains subject to normal deletion rules.
10. **Payment isolation:** Article 18 case creation cannot remove Diamonds, change VIP or create a refund/chargeback.
11. **Provider outage:** moderation-provider failure does not disable the validated authority-notification fallback.
12. **Old client:** unsupported client cannot evade server-side evidence preservation or urgent safety escalation.
13. **TCO crossover:** a valid terrorist-content removal order is routed to the TCO process rather than waiting in Article 18.
14. **Authority follow-up:** subsequent police/judicial request is recorded as a separate authority interaction and validated appropriately.

## 27. Release blockers

Treat the following as **P0 blockers** for a TycoonX hosted-UGC surface where Article 18 applies:

- no documented hosting-service scope assessment;
- no urgent Article 18 escalation path;
- no validated authority-routing directory;
- no Article 18(2) reasonable-certainty fallback;
- no method to identify exact content and account records;
- no secure evidence-preservation capability;
- workflow that reports every illegal-content complaint automatically to police;
- workflow that ignores credible imminent safety threats until normal Support review;
- authority packet that indiscriminately exports unrelated private/payment data;
- no account-compromise/attribution distinction;
- Article 18 notification automatically mutates Diamonds or VIP;
- no child-safety/TCO/Article 9 workflow separation;
- no operational fallback for critical provider outages; or
- public or internal instructions that describe TycoonX as a current beta service.

## 28. Current legal reference checkpoint

Reviewed on **September 4, 2026** against:

- Regulation (EU) 2022/2065, especially Articles 7, 8, 16, 18 and 19;
- European Commission, **Targeted consultation on the notification of suspicions of criminal offences under the DSA**, published November 18, 2025;
- European Commission, **Factual Summary Report on the targeted consultation on the notification of suspicions of criminal offences under DSA**, published March 18, 2026;
- Bundesnetzagentur / German Digital Services Coordinator guidance on hosting-provider duties under DSA Articles 16 to 18; and
- the separate TycoonX TCO, child-safety, authority-order, moderation, privacy and account-enforcement release gates.

Primary references:

- https://eur-lex.europa.eu/eli/reg/2022/2065/oj
- https://digital-strategy.ec.europa.eu/en/news/commission-launches-targeted-consultation-notification-suspicions-criminal-offences-under-digital
- https://digital-strategy.ec.europa.eu/en/library/factual-summary-report-targeted-consultation-notification-suspicions-criminal-offences-under-dsa
- https://www.bundesnetzagentur.de/DE/Fachthemen/DSC/1_Themen/PflichtenVermittlunggsdienste/artikel.html

## 29. Canonical/legal-localization impact of this gate

This gate does **not** change the current canonical legal documents' material player-facing meaning. The canonical Community Standards already prohibit serious safety abuse, allow proportionate immediate protective action, preserve/report evidence where required by law, and commit CK-Labs to mandatory DSA duties where applicable.

Accordingly:

- do not reopen completed localizations merely because this operational gate was added;
- keep `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md` unchanged unless canonical English meaning materially changes; and
- if a future public clause materially changes Article 18, safety-reporting, privacy, moderation or entitlement meaning, update canonical English first and then synchronize the affected localized document type across all 25 target locales.
