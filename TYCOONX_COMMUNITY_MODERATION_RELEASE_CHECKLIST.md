# TycoonX Community Moderation & DSA Release Checklist

Last reviewed: 2026-08-24  
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

## 4. Google Play UGC gate

Google Play currently requires robust, effective, and ongoing UGC moderation.

- [ ] Users accept the Terms of Use/User Policy before creating or uploading UGC.
- [ ] Terms define objectionable content and prohibited behavior.
- [ ] In-app reporting exists for objectionable content and users where required by the UGC experience.
- [ ] In-app user blocking exists for 1:1 interaction and other relevant social features.
- [ ] Publicly accessible UGC can be reported from inside the app.
- [ ] Reports lead to appropriate moderation action when justified.
- [ ] Monetization does not encourage or reward objectionable UGC behavior.
- [ ] Any incidental sexual content treatment, if such content can exist at all, follows Google Play’s then-current filtering and age-safety rules.
- [ ] Re-check the July 15, 2026 child-safety/age-restricted-content policy changes before introducing anonymous or random chat. Do not add those modes without a dedicated policy and child-safety review.

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

If a TycoonX feature qualifies as a hosting service under the DSA, Article 16 requires an easy-to-access, user-friendly electronic mechanism for notices about specific allegedly illegal content.

The production mechanism should be able to collect, as applicable:
- [ ] identification/location of the specific content, such as message/post ID or direct link/context;
- [ ] an explanation of why the reporter considers the content illegal;
- [ ] reporter name/contact details where legally required or appropriate, while respecting exceptions;
- [ ] a good-faith accuracy statement where required by the legal notice format;
- [ ] enough data to investigate without asking for unnecessary personal information.

Operational behavior:
- [ ] send receipt confirmation without undue delay when legally required and contact details are available;
- [ ] process notices in a timely, diligent, non-arbitrary, and objective manner;
- [ ] tell the reporter the decision and available redress where legally required;
- [ ] if automated means materially process/decide the notice, provide the legally required information about that use;
- [ ] preserve evidence only for lawful, necessary periods.

A generic support mailbox alone should not be assumed sufficient without checking whether the real flow meets Article 16 requirements.

## 7. EU DSA Article 17 statement of reasons

Where Article 17 applies and the required electronic contact information is known, affected users may need a clear and specific statement of reasons when CK-Labs restricts UGC because it is illegal or incompatible with the Terms.

Verify the moderation system can produce a reason for relevant actions such as:
- [ ] content removal or access restriction;
- [ ] visibility reduction/demotion where used;
- [ ] suspension or restriction of monetization/payment connected to the UGC decision, if applicable;
- [ ] suspension/termination of a service or feature; and
- [ ] account suspension/termination.

Reasons should be specific enough to identify the decision basis without exposing security-sensitive anti-abuse internals or another user’s private data.

## 8. DSA size-status review

The DSA contains exemptions from some additional online-platform duties for micro and small enterprises, but those exemptions do **not** mean all DSA hosting/intermediary duties disappear.

- [ ] Confirm CK-Labs’ current enterprise-size status for the relevant year.
- [ ] Re-check obligations if CK-Labs grows beyond the micro/small thresholds or the service changes materially.
- [ ] Do not assume Article 14, Article 16, or Article 17 can be ignored solely because CK-Labs is small.
- [ ] If size/status changes, re-audit complaint handling, transparency reporting, trusted flaggers, recommender/ad rules, minor-safety obligations, and other DSA sections that may become applicable.

## 9. Public vs private UGC licensing

- [x] Community Policy limits the operational UGC license to what is reasonably necessary to host, store, format, translate, transmit, display, moderate, back up, secure, support, and improve TycoonX.
- [x] Public UGC may be featured for TycoonX community/promotional purposes only where consistent with context, settings, law, and third-party rights.
- [x] Private direct messages, private support communications, and non-public reports are not licensed for public promotional use merely because CK-Labs processes them.
- [x] The main Terms now use the same narrow public/private UGC distinction and incorporate the Community Policy for specific moderation/UGC rules.
- [x] The Privacy Policy now explains the same public/private distinction, requires an appropriate legal basis for public promotional use, and states that consent will be requested where legally required.

## 10. Moderation records and privacy

- [x] Privacy Policy identifies chats, reports, support content, moderation status, anti-abuse signals, and automated security/moderation as processed data or purposes.
- [x] Privacy Policy now states that private communications are not retained indefinitely merely because moderation once occurred; longer retention requires a separate lawful need.
- [x] Privacy Policy now limits moderation/legal-review access to private communications to reasonably necessary and lawful circumstances.
- [ ] Verify actual production retention periods match the policy and are proportionate to safety, fraud/security, dispute, legal-claim, or mandatory-law needs.
- [ ] Verify production tooling does not expose reporter identity to the reported user unless legally required or necessary under a valid process.
- [ ] Verify human reviewers see only data reasonably necessary for their moderation role.
- [ ] Verify automated moderation with significant legal/similarly significant effects receives GDPR safeguards where required.

## 11. Founder-protective moderation wording

The legal framework preserves CK-Labs’ ability, subject to mandatory law, to:
- use proportionate automated and human moderation;
- take temporary protective action before a full review where serious safety/security risk exists;
- reverse or modify a moderation decision if later evidence changes the assessment;
- act on serious or repeated Terms violations;
- preserve relevant evidence for lawful claims or authority requests;
- reject abusive or malicious reporting behavior;
- restrict or age-gate community features where law/platform rules or child-safety requirements justify it;
- discontinue or redesign a community feature if platform rules, legal requirements, abuse patterns, or technical risks make it unreasonable to continue unchanged; and
- avoid promising that every item is pre-screened or that every violation will be detected immediately.

Do not use these protections to remove unrelated legitimate paid digital value or to waive mandatory redress rights.

## 12. Current P0/P1 gaps

1. **P0: UGC acceptance implementation:** verify the actual app flow requires Terms/User Policy acceptance before UGC creation where Google Play requires it.
2. **P0: DSA Article 16 implementation evidence:** verify a compliant illegal-content notice-and-action flow for every TycoonX feature that qualifies as hosting under the DSA.
3. **P0: Apple/Google in-app report + block verification:** legal text alone is not sufficient; the production app must implement the required controls.
4. **P1: App Store age-rating/social configuration:** verify the July 2026 social-media questionnaire answer and any under-13 feature gating match real TycoonX behavior.
5. **P1: Article 17 reason generation:** verify moderation/admin tooling can send specific reasons for covered restrictions without leaking security/private information.
6. **P1: Privacy implementation parity:** verify actual retention periods, reviewer access, reporter confidentiality, and automated-decision safeguards match the now-synchronized Privacy Policy.
