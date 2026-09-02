# TycoonX Community Moderation & DSA Release Checklist

Last reviewed: 2026-09-02  
Operator/business name used in player-facing documents: **CK-Labs**

This checklist covers TycoonX user-generated content (UGC), chat, social/community features, Apple App Store UGC requirements, Google Play UGC requirements, and EU Digital Services Act (DSA) obligations that may apply to hosting/intermediary features. It is an operational checklist, not a substitute for qualified legal advice.

## 1. Public community policy

- [x] Public Community Standards & Moderation Policy exists at `/tycoonx-community-standards`.
- [x] The rendered policy uses **TycoonX**, never `TyconX`.
- [x] The Community Policy states that its more specific UGC/moderation/public-private licensing rules control over a conflicting general Terms provision for that subject, to the extent permitted by law.
- [x] The public Terms of Service link to the Community Standards.
- [ ] Link the Community Standards from relevant in-app community/reporting surfaces.
- [ ] Ensure users can retrieve the applicable Terms/Community Standards before creating or uploading UGC.
- [ ] Where Google Play policy applies, obtain Terms/User Policy acceptance before the user can create or upload UGC.

## 2. Objectionable content definition

The public policy should prohibit, at minimum where relevant:
- threats and targeted harassment;
- hateful abuse;
- child sexual abuse/exploitation and grooming;
- non-consensual intimate content;
- unlawful disclosure of private information;
- impersonation, phishing, scams, malicious links, and payment/credential theft;
- spam, coordinated abuse, and disruptive automated UGC;
- intellectual-property infringement;
- prohibited facilitation of illegal activity; and
- moderation/block/ban evasion.

Do not write the rule so broadly that normal criticism, disagreement, satire, competitive game talk, or isolated mild profanity automatically becomes a violation.

## 3. Apple App Store UGC and age-safety gate

Apple App Review Guideline 1.2 currently requires UGC/social apps to include:
- [ ] a method for filtering objectionable material from being posted;
- [ ] a mechanism to report offensive content;
- [ ] timely responses to reports/concerns;
- [ ] the ability for users to block abusive users; and
- [ ] published contact information users can easily reach.

Operational checks:
- [ ] Verify report content/user actions are available from the relevant in-app surfaces.
- [ ] Verify user blocking actually prevents the intended interaction, especially direct messages and other 1:1 interactions.
- [ ] Verify moderation queues/reports are actually reviewed and acted on.
- [ ] Verify support/contact information is accurate in the app and Support URL.
- [ ] Verify the App Store age-rating questionnaire accurately declares TycoonX social-media capabilities. Apple updated the questionnaire starting July 2026 and states that apps/games declaring social-media capabilities receive a minimum 13+ age rating; if social-media capabilities are disabled for users under 13, the Social Media Time Allowance category is not applied to those users under 13.
- [ ] If TycoonX relies on age-based disabling of social features, verify the actual product gating matches the App Store declaration and does not merely rely on legal text.
- [ ] If random or anonymous chat is ever introduced, perform a fresh App Review/age-safety audit before release. Apple clarified in February 2026 that random or anonymous chat is subject to Guideline 1.2.

## 4. Google Play UGC and child-safety gate

Google Play currently requires robust, effective, and ongoing UGC moderation.

- [ ] Users accept the Terms of Use/User Policy before creating or uploading UGC.
- [ ] Terms define objectionable content and prohibited behavior.
- [ ] In-app reporting exists for objectionable content and users where required by the UGC experience.
- [ ] In-app user blocking exists for 1:1 interaction and other relevant social features.
- [ ] Publicly accessible UGC can be reported from inside the app.
- [ ] Reports lead to appropriate moderation action when justified.
- [ ] Monetization does not encourage or reward objectionable UGC behavior.
- [ ] Any incidental sexual content treatment, if such content can exist at all, follows Google Play’s then-current filtering and age-safety rules.
- [ ] **Effective August 26, 2026:** if TycoonX ever becomes an app whose core functionality is anonymous chat or random chat, use the required Play Console age-restriction functionality to block minors and complete a dedicated child-safety review before release. Do not treat legal text alone as compliance.
- [ ] If anonymous/random chat is ever added even as a non-core feature, re-check the then-current Age-Restricted Content and Functionality, Families, Child Safety Standards, Target Audience, and content-rating rules before shipping it.
- [ ] Verify whether TycoonX falls within Google Play’s Child Safety Standards scope for social apps and, if so, complete the required self-certifications: published standards expressly prohibiting child sexual abuse/exploitation, in-app user feedback/reporting, appropriate action on known CSAM, and compliance with applicable reporting laws.

## 5. EU DSA Article 14 terms transparency

Where a TycoonX community feature falls within the DSA intermediary-service framework, the Terms/Community Policy should clearly explain restrictions imposed on user-provided information.

- [x] Community Policy explains prohibited content/conduct.
- [x] Community Policy explains that moderation can use reports, filters, automated rules/classifiers, security signals, and human review.
- [x] Community Policy explains possible moderation actions.
- [x] Community Policy explains that users can challenge a decision through Support unless another route is provided.
- [x] Community Policy states that its specific UGC/moderation rules control over a conflicting general Terms provision for that subject.
- [x] The public Terms now link the Community Policy and directly reproduce the narrower public/private UGC rules.
- [ ] Keep significant Terms/community-policy changes appropriately communicated where required.

## 6. EU DSA Article 16 notice-and-action mechanism

If a TycoonX feature qualifies as a hosting service under the DSA, Article 16 requires an easy-to-access, user-friendly electronic mechanism for notices about specific allegedly illegal content. Article 16 is written so that **any individual or entity** can use that mechanism. Do not make a TycoonX account or successful login a hidden precondition where that would prevent an external rights holder, regulator, victim, parent, or other non-user from submitting a legally sufficient notice.

The production mechanism should be able to collect, as applicable:
- [ ] a sufficiently substantiated explanation of why the reporter considers the specific information illegal;
- [ ] the exact electronic location of the information, such as a direct link, message/post ID, or other sufficiently precise locator adapted to the TycoonX feature;
- [ ] reporter name and email where Article 16 requires them, while respecting the statutory exception for notices concerning offences covered by Articles 3 to 7 of Directive 2011/93/EU;
- [ ] the reporter's good-faith statement that the information and allegations are accurate and complete; and
- [ ] enough data to investigate without asking for unnecessary personal information.

Operational behavior:
- [ ] send receipt confirmation without undue delay when legally required and contact details are available;
- [ ] process notices in a timely, diligent, non-arbitrary, and objective manner;
- [ ] tell the reporter the decision and available redress without undue delay where legally required;
- [ ] if automated means materially process or decide the notice, provide the legally required information about that use;
- [ ] preserve evidence only for lawful, necessary periods;
- [ ] do not assume a generic support mailbox is sufficient unless the real flow satisfies Article 16's notice fields and processing behavior;
- [ ] when a report starts from a specific TycoonX post, message, profile, artwork, music item, book, or other UGC object, prefill a stable content locator where technically possible instead of forcing the reporter to reconstruct it manually;
- [ ] provide a fallback electronic reporting route for an external reporter who cannot open the app or authenticate, while still applying reasonable anti-abuse and security controls; and
- [ ] test discoverability and usability end-to-end on every supported reporting surface, including the mobile app, public web surfaces, and any desktop/web layout that exposes the relevant hosted content. A compliant path on one client does not cure an inaccessible path on another client.

### 2026 German DSA enforcement checkpoint

Treat the following as concrete enforcement signals, not merely theoretical UX guidance:

- On **June 12, 2026**, the German Digital Services Coordinator at the Bundesnetzagentur announced an investigation concerning the gaming platform Steam. The authority specifically highlighted whether the platform had correctly implemented the DSA mechanism for reporting potentially illegal content and appropriately handled complaints. The announcement stated that a reporting mechanism must be easily accessible and user-friendly and that notices must be reviewed promptly and carefully. This is an investigation, not a final infringement decision.
- On **July 6, 2026**, the Bundesnetzagentur announced that, in its eBay investigation, it had identified DSA infringements and required eBay to respond and remedy them. It specifically criticised the desktop notice-and-action implementation as not easily accessible and overall not user-friendly, and also identified incomplete reasons for measures against users. The authority stated that the proceeding had not yet reached a final decision.

Production consequence for TycoonX:

- [ ] Test Article 16 access from a logged-out browser and from a user who cannot access the original account.
- [ ] Test the shortest realistic path from visible UGC to the illegal-content notice form and record the clicks/screens required.
- [ ] Test both narrow/mobile and wide/desktop web layouts rather than assuming responsive rendering preserves discoverability.
- [ ] Test that the report can still be submitted if the content is later hidden from ordinary navigation but a stable identifier remains available.
- [ ] Distinguish an **illegal-content notice** from a normal Community Standards report. They may share infrastructure, but a generic policy-report flow must not discard the Article 16 fields, receipt, decision, or redress requirements.
- [ ] Preserve a dated screenshot or screen recording of each production reporting path as release evidence.

## 7. EU DSA Article 17 statement of reasons

Article 17 is a **hosting-service duty**, not merely an additional large-platform duty. Where it applies and CK-Labs knows the affected recipient's electronic contact details, the statement of reasons must be sent **at the latest when the restriction is imposed**, regardless of whether the restriction came from a user report, CK-Labs' own investigation, automation, or another moderation route. The statutory exception for deceptive high-volume commercial content must not be generalized to ordinary spam, ordinary users, or other moderation cases.

The production reason object/template must be capable of recording and communicating, as applicable:

- [ ] the exact type of restriction: removal, disabling access, demotion/visibility restriction, monetary-payment restriction, service restriction/suspension/termination, or account suspension/termination;
- [ ] territorial scope and duration where relevant;
- [ ] the facts and circumstances relied on, including whether the decision followed an Article 16 notice or a voluntary own-initiative investigation;
- [ ] notifier identity only where its disclosure is **strictly necessary** and otherwise protect reporter/privacy information;
- [ ] whether automated means were used in the decision and whether automated means detected or identified the affected content;
- [ ] for allegedly illegal content, the legal ground relied on and an explanation of why the information is considered illegal on that ground;
- [ ] for a Terms/Community Policy decision, the specific contractual/policy ground and an explanation of why the content is incompatible with that ground; and
- [ ] clear, user-friendly information about available redress, including applicable internal complaint, certified out-of-court dispute settlement, and judicial redress routes.

Quality gate:

- [ ] Do not send a generic reason such as `policy violation`, `illegal content`, `spam`, or `automated moderation` by itself when Article 17 requires a more specific explanation.
- [ ] Generate reasons that are clear, easily comprehensible, and as precise and specific as reasonably possible while still protecting security-sensitive anti-abuse details and third-party personal data.
- [ ] Preserve an immutable/auditable copy of the reason actually sent and the decision timestamp so CK-Labs can prove what the affected user was told.
- [ ] Verify the actual reason is visible to the affected user at the time of restriction through a usable delivery surface. A complete reason stored only in an internal admin log does not satisfy the user-facing duty.
- [ ] A voluntary Support appeal does not replace a mandatory Article 17 statement or any Article 20/21 route that actually applies.

## 8. DSA Article 18 serious-criminal-offence escalation gate

Where a TycoonX feature qualifies as a hosting service and CK-Labs becomes aware of information giving rise to a suspicion that a criminal offence **involving a threat to the life or safety of a person** has taken place, is taking place, or is likely to take place, Article 18 requires prompt escalation to the appropriate law-enforcement or judicial authority and provision of the relevant available information.

Operational requirements:

- [ ] Create a documented emergency escalation route for moderators/support rather than leaving these cases in an ordinary moderation queue.
- [ ] Train reviewers to distinguish the Article 18 threshold from ordinary Terms violations, insults, game threats, or low-severity reports.
- [ ] Preserve the relevant content, account identifiers, timestamps, technical evidence, and decision trail only to the extent lawful and reasonably necessary.
- [ ] Identify the Member State concerned using the Article 18 criteria. If CK-Labs cannot identify it with reasonable certainty, use the authority route specified by Article 18 rather than guessing.
- [ ] Keep a dated record of the basis for the escalation, the authority contacted, what information was provided, and the time of transmission.
- [ ] Do not promise a suspected offender or reporter advance notice where doing so would conflict with law, evidence preservation, safety, or a lawful authority request.
- [ ] Keep GDPR/data-minimization, confidentiality, and security controls around the escalation; Article 18 is not a blanket permission to disclose unrelated account data.

For CK-Labs as a Germany-established operator, the **Digital Services Coordinator at the Bundesnetzagentur** is the central German DSA coordination/supervision authority. This does not mean every Article 18 criminal-offence report is sent to the DSC: the Article itself points to competent law-enforcement or judicial authorities (or Europol in the specified fallback situation). Keep the DSC contact available for DSA-compliance questions and supervisory coordination.

## 9. DSA Article 24(5) Transparency Database gate

Do not confuse the user-facing Article 17 statement with the separate Commission database duty.

- Article 17 can apply to a hosting service even when the online-platform Section 3 duties are exempt because CK-Labs qualifies as a micro or small enterprise.
- Article 24(5) is an additional **online-platform** duty in Section 3. Under Article 19, Section 3 generally does not apply while the provider qualifies as a micro or small enterprise, subject to the Regulation's stated exceptions and transition after loss of that status.
- Public/private feature classification matters. A feature that stores user information and disseminates it to a potentially unlimited number of recipients can fall within the online-platform definition, while finite-person private messaging does not become an online platform merely because messages are stored.

Before release and whenever the business/service changes:

- [ ] document, per TycoonX social feature, whether it is merely a hosting function or also an online-platform function under the DSA;
- [ ] document CK-Labs' current micro/small-enterprise status under Recommendation 2003/361/EC and the date/evidence used for that assessment;
- [ ] if the Article 19 exemption is unavailable or ceases to apply, onboard the applicable online-platform service for the Commission DSA Transparency Database through the German DSC process;
- [ ] submit covered Article 17 decisions/statements **without undue delay** as Article 24(5) requires;
- [ ] strip all personal data before database submission, even where individualized data was legitimately present in the user-facing reason;
- [ ] do not copy user-specific redress options into the public database payload; the Commission's current guidance says those are not included in the Transparency Database;
- [ ] map moderation categories to the Commission's current taxonomy and keep the mapping version/date in release evidence; and
- [ ] choose and document the operational submission method (API or Commission webform) and recovery procedure for failed or delayed submissions.

A future growth event, restructuring, or loss of micro/small status must trigger a fresh Article 19/20-28 assessment rather than relying on an old founder/headcount assumption.

## 10. DSA size-status review

The DSA contains exemptions from some additional online-platform duties for micro and small enterprises, but those exemptions do **not** mean all DSA hosting/intermediary duties disappear.

- [ ] Confirm CK-Labs' current enterprise-size status for the relevant year and preserve the supporting calculation.
- [ ] Re-check obligations if CK-Labs grows beyond the micro/small thresholds or the service changes materially.
- [ ] Do not assume Articles 14, 16, 17, or 18 can be ignored solely because CK-Labs is small.
- [ ] Treat Article 20 through most of Section 3, including Article 24(5), as conditionally exempt only after a documented Article 19 analysis rather than a generic `small developer` assumption.
- [ ] Remember the 12-month transition language in Article 19 after loss of micro/small status, and re-check immediately if TycoonX were ever designated a very large online platform.
- [ ] If size/status changes, re-audit complaint handling, out-of-court redress, Transparency Database reporting, trusted flaggers, recommender/ad rules, minor-safety obligations, and other DSA sections that may become applicable.

## 11. Public vs private UGC licensing

- [x] Community Policy limits the operational UGC license to what is reasonably necessary to host, store, format, translate, transmit, display, moderate, back up, secure, support, and improve TycoonX.
- [x] Public UGC may be featured for TycoonX community/promotional purposes only where consistent with context, settings, law, and third-party rights.
- [x] Private direct messages, private support communications, and non-public reports are not licensed for public promotional use merely because CK-Labs processes them.
- [x] The main Terms now use the same narrow public/private UGC distinction and incorporate the Community Policy for specific moderation/UGC rules.
- [x] The Privacy Policy now explains the same public/private distinction, requires an appropriate legal basis for public promotional use, and states that consent will be requested where legally required.

## 12. Moderation records and privacy

- [x] Privacy Policy identifies chats, reports, support content, moderation status, anti-abuse signals, and automated security/moderation as processed data or purposes.
- [x] Privacy Policy now states that private communications are not retained indefinitely merely because moderation once occurred; longer retention requires a separate lawful need.
- [x] Privacy Policy now limits moderation/legal-review access to private communications to reasonably necessary and lawful circumstances.
- [ ] Verify actual production retention periods match the policy and are proportionate to safety, fraud/security, dispute, legal-claim, or mandatory-law needs.
- [ ] Verify production tooling does not expose reporter identity to the reported user unless legally required or strictly necessary under a valid process.
- [ ] Verify human reviewers see only data reasonably necessary for their moderation role.
- [ ] Verify automated moderation with significant legal/similarly significant effects receives GDPR safeguards where required.
- [ ] Ensure the public DSA Transparency Database path, if it becomes applicable, receives no personal data from moderation records.

## 13. Founder-protective moderation wording

The legal framework preserves CK-Labs' ability, subject to mandatory law, to:
- use proportionate automated and human moderation;
- take temporary protective action before a full review where serious safety/security risk exists;
- reverse or modify a moderation decision if later evidence changes the assessment;
- act on serious or repeated Terms violations;
- preserve relevant evidence for lawful claims or authority requests;
- reject abusive or malicious reporting behavior;
- restrict or age-gate community features where law/platform rules or child-safety requirements justify it;
- discontinue or redesign a community feature if platform rules, legal requirements, abuse patterns, or technical risks make it unreasonable to continue unchanged; and
- avoid promising that every item is pre-screened or that every violation will be detected immediately.

Do not use these protections to remove unrelated legitimate paid digital value, expose reporter/private data unnecessarily, evade a mandatory statement of reasons, or waive mandatory redress rights.

## 14. Current P0/P1 gaps

1. **P0: UGC acceptance implementation:** verify the actual app flow requires Terms/User Policy acceptance before UGC creation where Google Play requires it.
2. **P0: DSA Article 16 implementation evidence:** verify a compliant illegal-content notice-and-action flow for every TycoonX feature that qualifies as hosting under the DSA, including the Article 16 notice fields, reporter good-faith statement, logged-out/external-reporter access, stable content locators, and discoverability/usability on every supported reporting surface.
3. **P0: DSA Article 17 reason-generation evidence:** verify moderation/admin tooling can generate and actually deliver the complete Article 17 reason object at or before the restriction, including specific legal/contract ground, facts, automation use, duration/scope where relevant, and user redress without leaking security/private information.
4. **P0: DSA Article 18 emergency escalation:** implement and test the serious-criminal-offence/life-or-safety escalation path, authority-selection logic, evidence preservation, and audit trail.
5. **P0: Apple/Google in-app report + block verification:** legal text alone is not sufficient; the production app must implement the required controls.
6. **P0: Google August 26 child-safety classification:** verify whether TycoonX falls within Google Play's Child Safety Standards scope as a social app. Confirm TycoonX does not have anonymous/random chat as a core function; if that changes, use required Play Console age-restriction tools to block minors and complete the applicable child-safety requirements before release.
7. **P1: DSA feature/size classification:** document which TycoonX features are hosting services versus online platforms, document current Recommendation 2003/361/EC micro/small status, and determine whether Article 24(5) Transparency Database onboarding is currently exempt or required.
8. **P1: App Store age-rating/social configuration:** verify the July 2026 social-media questionnaire answer and any under-13 feature gating match real TycoonX behavior.
9. **P1: Privacy implementation parity:** verify actual retention periods, reviewer access, reporter confidentiality, DSA public-database sanitization, and automated-decision safeguards match the synchronized Privacy Policy and this gate.
