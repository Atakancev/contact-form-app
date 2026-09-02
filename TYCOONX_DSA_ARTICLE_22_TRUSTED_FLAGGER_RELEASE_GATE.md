# TycoonX DSA Article 22 Trusted Flagger Release Gate

Last reviewed: 2026-09-02

This is an internal legal and operations checklist for CK-Labs. It is not a substitute for case-specific legal advice.

## Why this gate exists

TycoonX already has DSA controls for Article 14 terms/moderation transparency, Article 16 notice-and-action handling, Article 17 statements of reasons, Articles 20 and 21 redress, Article 23 misuse, authority orders, and other moderation duties. One separate online-platform rule still needs its own operational path: **DSA Article 22 trusted flaggers**.

A trusted flagger is not simply a player, moderator, police contact, platform partner, journalist, rights holder, or organisation that CK-Labs happens to trust. Article 22 status is awarded by the Digital Services Coordinator of the Member State where the entity is established, for a designated area of expertise, and that status is recognised across the EU for online platforms within Article 22 scope.

For TycoonX, the safe rule is:

> A valid Article 22 trusted-flagger notice gets priority review and a decision without undue delay when Article 22 applies. Priority does not mean automatic removal, automatic account punishment, automatic illegality, or automatic loss of paid entitlements.

## Official references

- Digital Services Act, Regulation (EU) 2022/2065, Articles 16, 19, 22 and related recitals: https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng
- European Commission trusted flaggers overview and EU list: https://digital-strategy.ec.europa.eu/en/policies/trusted-flaggers-under-dsa
- Commission draft trusted-flagger guidelines, published May 29, 2026: https://digital-strategy.ec.europa.eu/en/library/draft-commission-guidelines-trusted-flaggers
- Commission targeted consultation, closed July 10, 2026: https://digital-strategy.ec.europa.eu/en/consultations/targeted-consultation-draft-guidelines-trusted-flaggers-under-digital-services-act-dsa
- Bundesnetzagentur / German Digital Services Coordinator: https://www.bundesnetzagentur.de/dsc
- Bundesnetzagentur trusted-flagger certification information: https://www.bundesnetzagentur.de/DE/Fachthemen/DSC/2_Service/Zertifizierung/start.html

As of September 2, 2026, the Commission's public trusted-flagger page still describes the 2026 guidelines as draft/under development following the consultation. Do not treat the draft as final binding guidance unless the Commission adopts a final version later.

## Gate 1: Determine whether Article 22 applies to the specific TycoonX feature

Article 22 sits in DSA Section 3, the additional provisions for providers of **online platforms**.

Article 19 currently excludes qualifying micro and small enterprises from Section 3, except Article 24(3), subject to the Regulation's conditions. The exclusion also continues for 12 months after loss of micro/small status under the conditions stated in Article 19, unless the service is designated a very large online platform.

Before treating Article 22 as a live statutory duty for a TycoonX feature:

- [ ] Classify the feature as an intermediary service, hosting service, online platform, or neither.
- [ ] Record why user-provided information is or is not disseminated to the public at the user's request.
- [ ] Record CK-Labs' current micro/small-enterprise status using Recommendation 2003/361/EC criteria and dated evidence.
- [ ] Reassess after corporate restructuring, acquisition, linked-enterprise changes, material growth, or other facts that could change enterprise status.
- [ ] If micro/small status is lost, calculate the Article 19 transition correctly rather than assuming Article 22 applies instantly or never applies.
- [ ] If a TycoonX feature becomes a very large online platform, do not rely on the micro/small exclusion.

Do not use this scope assessment to weaken Article 16 or other DSA duties that can apply to hosting services even when Article 22 itself is excluded.

## Gate 2: Verify trusted-flagger status, identity and designated expertise

A message saying `we are a trusted flagger` is not enough.

Before applying Article 22 priority treatment:

- [ ] Verify the submitting entity against the Commission's current public trusted-flagger information or the relevant Digital Services Coordinator record.
- [ ] Record the entity name and the Digital Services Coordinator that awarded the status.
- [ ] Record the trusted flagger's designated area of expertise.
- [ ] Confirm the notice concerns that designated area of expertise.
- [ ] Confirm the notice came through the Article 16 mechanism or an Article 16-compatible trusted-flagger route.
- [ ] Use a stable identifier for the trusted flagger where available instead of trusting only a display name or email signature.
- [ ] Protect the intake route against spoofed domains, compromised accounts and fake authority-style messages.
- [ ] Recheck status if the Commission/DSC list shows suspension, revocation, changed expertise or other material change.

A trusted flagger whose expertise concerns one category of illegal content does not automatically get Article 22 priority for unrelated categories.

## Gate 3: Priority means queue priority, not automatic takedown

Article 22(1) requires technical and organisational measures so qualifying notices are **given priority and processed and decided upon without undue delay**.

For TycoonX:

- [ ] Put verified qualifying notices ahead of ordinary notices in the relevant moderation/legal-review queue.
- [ ] Preserve the received timestamp and the time priority status was assigned.
- [ ] Route urgent categories to an operator who can assess the applicable law and evidence.
- [ ] Avoid internal queue rules that technically mark the item `priority` but leave it waiting behind ordinary work.
- [ ] Preserve a decision timestamp and the action actually taken.
- [ ] Escalate if the notice cannot be assessed promptly because of language, jurisdiction, safety, evidence or legal complexity.

Priority does **not** mean:

- automatic deletion;
- automatic visibility restriction;
- automatic account suspension;
- automatic permanent termination;
- automatic finding that content is illegal;
- automatic finding that a user acted intentionally;
- automatic finding of fraud, chargeback abuse, exploit abuse or regional-pricing abuse;
- or automatic removal of unrelated purchased value.

The European Commission's current public explanation states that online platforms remain responsible for verifying whether the notified content is illegal. The Bundesnetzagentur likewise explains that trusted flaggers and the German DSC do not themselves delete content or order its removal merely by submitting a trusted-flagger notice.

## Gate 4: Article 16 quality requirements still matter

Trusted-flagger priority runs through the Article 16 notice-and-action mechanism. Do not create a second legal standard in which a priority label replaces the underlying notice assessment.

For each trusted-flagger notice, preserve enough information to assess:

- the exact item of information concerned, such as message/post/content ID and location;
- the reason the notifier alleges illegality;
- the legal category or legal basis where supplied;
- relevant factual context;
- the trusted flagger's identity and expertise area;
- whether the notice is sufficiently precise and adequately substantiated;
- and whether a diligent provider can identify the alleged illegality without a detailed legal examination for the Article 16(3) knowledge/awareness effect.

A trusted-flagger notice can be highly persuasive and deserves statutory priority when applicable, but it is not an irrebuttable legal judgment.

## Gate 5: Do not confuse a trusted flagger with an authority order

Keep these workflows separate:

1. **Article 16 notice**: an illegal-content notice from a user/entity.
2. **Article 22 trusted-flagger notice**: an Article 16 notice with statutory priority when Article 22 applies and the notifier is acting within designated expertise.
3. **Article 9 order**: an order from a competent judicial or administrative authority to act against specific illegal content.
4. **Article 10 order**: an authority order to provide specific information about one or more recipients.
5. **Article 18 safety/criminal escalation**: a hosting-provider notification to law enforcement/judicial authorities when the statutory threat-to-life/safety threshold is met.

A trusted flagger is not transformed into a court, police authority or regulator merely because Article 22 status is valid.

Likewise, a message from the Bundesnetzagentur/DSC about certification, supervision or a complaint must be classified according to its actual legal basis rather than being treated automatically as an Article 9 removal order.

## Gate 6: Human review, proportionality and fundamental rights remain relevant

A priority notice still needs a diligent, objective and non-arbitrary decision.

Where a restriction is considered:

- [ ] distinguish illegal content from content that merely violates TycoonX Community Standards;
- [ ] distinguish the reported item from the entire account;
- [ ] consider context, language, satire, quotation, reporting, criticism and other relevant facts;
- [ ] use appropriately qualified human review for genuinely ambiguous or high-impact decisions where feasible;
- [ ] avoid converting a classifier score or trusted-flagger label into automatic certainty;
- [ ] use a narrower action where it lawfully addresses the problem and a broader restriction is not justified;
- [ ] generate the applicable Article 17 statement of reasons when required;
- [ ] preserve Article 20/21 redress where those rules apply.

A trusted flagger's priority status must not become a hidden way to bypass the existing Article 14 proportionality and fundamental-rights safeguards.

## Gate 7: Article 22(6) creates a platform-side escalation when trusted-flagger notices are repeatedly poor

Article 22 does not require blind deference forever.

Where an online platform has information indicating that a trusted flagger submitted a **significant number of insufficiently precise, inaccurate or inadequately substantiated notices** through Article 16, Article 22(6) requires the provider to communicate that information to the Digital Services Coordinator that awarded the status, with necessary explanations and supporting documents.

If this rule applies to TycoonX:

- [ ] Do not report one good-faith disagreement as systemic misuse.
- [ ] Track notice-quality defects consistently enough to identify an actual significant pattern.
- [ ] Preserve examples, dates, notice IDs, reasons and review outcomes.
- [ ] Distinguish `content ultimately stayed up` from `notice was inaccurate or inadequately substantiated`.
- [ ] Include relevant internal complaint outcomes where Article 20(4) information supports the pattern.
- [ ] Send the information to the **awarding** Digital Services Coordinator, not just whichever authority email is easiest to find.
- [ ] Keep the submission factual and proportionate and avoid unnecessary player personal data.

The Digital Services Coordinator, not CK-Labs, decides whether the statutory conditions for suspension or revocation of trusted-flagger status are met.

## Gate 8: Status suspension or revocation must propagate into routing

Article 22 provides for suspension during certain DSC investigations and revocation when the entity no longer meets the criteria.

Operationally:

- [ ] Keep the trusted-flagger routing list refreshable instead of hard-coding permanent status into a user/account record.
- [ ] If status is suspended, stop granting Article 22 priority unless current official guidance requires otherwise.
- [ ] If status is revoked, process future submissions under the ordinary applicable notice route unless another valid priority basis exists.
- [ ] Do not retrospectively invalidate lawful past actions merely because status later changes.
- [ ] Do not retrospectively punish the trusted flagger's past reported users merely because the notifier later loses status.

## Gate 9: Germany-specific operating rule

For Germany, the Bundesnetzagentur hosts the Digital Services Coordinator.

Current German official guidance confirms that:

- the DSC certifies trusted flaggers that meet the Article 22 criteria;
- Germany has certified multiple trusted flaggers;
- trusted flaggers and the DSC do not themselves delete notified content merely through the trusted-flagger mechanism;
- platform providers decide what to do with the notified content under applicable law;
- and moderation outcomes can remain subject to complaint, out-of-court redress and court review as applicable.

On July 2, 2026, the German DSC also held a dedicated `Trusted Flagger @DSC` exchange on practical implementation. This is evidence that the mechanism is operational rather than theoretical.

Do not hard-code one German trusted-flagger list into TycoonX legal text. Certification, expertise, suspension and revocation can change, so production should consult a current authoritative source.

## Gate 10: Draft 2026 Commission guidelines are a watch item, not final law

The Commission opened a targeted consultation on draft trusted-flagger guidelines on May 29, 2026. The consultation closed July 10, 2026, and the Commission stated that it planned to adopt guidelines in the second half of 2026.

As of this review on September 2, 2026, the Commission's public trusted-flagger page still presents the guidelines as draft/under development.

- [ ] Recheck for final guidelines before changing the technical intake format or trusted-flagger verification logic.
- [ ] If final guidelines are adopted, compare them against this gate, especially technical notice interfaces, verification, Article 22(6) evidence, suspension/revocation handling and transparency.
- [ ] Do not tell players that a draft consultation document itself creates a new penalty or waives their rights.

## Gate 11: Security, privacy and fake-notice protection

Trusted-flagger handling can contain sensitive reports. Apply normal security and privacy controls.

- [ ] Do not expose reporter contact data or sensitive evidence to the reported user unless legally required and appropriate.
- [ ] Do not put passwords, reusable session tokens, full payment credentials or unrelated private messages into escalation records.
- [ ] Verify attachments and links safely before opening potentially malicious content.
- [ ] Treat a compromised trusted-flagger mailbox/account as a security event, not as automatic proof that every notice from that account is valid.
- [ ] Rate-limit abusive technical traffic without silently defeating legally required priority handling.
- [ ] Preserve enough audit data to show receipt, verification, priority, review, decision, notification and later appeal outcome.

## Gate 12: Apple, Google Play and Xsolla do not become trusted flaggers automatically

Apple, Google Play and Xsolla can send policy notices, fraud information, chargeback/refund events, safety reports or legal requests through their own channels. None of those roles automatically gives that provider Article 22 trusted-flagger status.

For TycoonX:

- an App Store policy notice is handled under Apple/platform obligations and applicable law;
- a Google Play policy notice is handled under Google/platform obligations and applicable law;
- an Xsolla payment/fraud/refund notice is handled under payment-provider and contractual rules;
- a provider can separately qualify as a trusted flagger only if the Article 22 status and expertise requirements are actually met.

Do not convert payment-provider fraud signals into illegal-content findings without evidence, and do not convert a trusted-flagger content notice into a payment reversal without a separate lawful payment basis.

## Gate 13: Paid-entitlement isolation

Content moderation and paid entitlement accounting must stay separated.

A trusted-flagger notice or related moderation action must not, by itself:

- delete unrelated legitimately purchased **Diamonds**;
- regrant or duplicate Diamonds;
- restart, pause, shorten, extend or duplicate the original one-time **30-Day VIP** period;
- introduce an expiry for valid **Lifetime VIP**;
- convert Lifetime VIP into 30-Day VIP;
- replay an Apple App Store, Google Play or Xsolla entitlement event;
- create a chargeback or refund;
- or classify an unrelated completed purchase as fraudulent.

If independently established fraud, chargeback, invalid payment, exploit abuse or account termination supports a payment/entitlement correction, apply that correction through the relevant payment/account gate using authoritative records and preserving mandatory consumer rights.

## Gate 14: No retaliation merely for being reported or appealing

Being named in a trusted-flagger notice does not itself prove wrongdoing.

A player must not lose unrelated purchase rights, Support access, statutory remedies or appeal rights merely because a trusted flagger reported them or because they challenge the resulting moderation decision in good faith.

Likewise, a successful appeal can correct the moderation action without automatically creating compensation, Diamonds or a fresh VIP period unless a separate legal, contractual or support basis justifies that remedy.

## Gate 15: Change triggers

Re-run this gate when any of these change:

- CK-Labs micro/small-enterprise status;
- TycoonX feature classification as an online platform;
- a social/community feature becomes materially more public;
- the Commission adopts final trusted-flagger guidelines;
- a trusted-flagger verification/interface standard is adopted;
- the German DSC changes its certification/verification process;
- TycoonX introduces a new Article 16 notice interface;
- moderation becomes materially more automated;
- the Article 20/21 complaint/redress route changes;
- CK-Labs changes operator/successor entity;
- or a major provider/security migration changes the moderation intake architecture.

If a material public legal meaning changes, update the canonical English Terms or Community Standards first and then update every affected localization. Do not reopen completed translations merely because an internal routing procedure changes without changing public legal meaning.

## Release and regression scenarios

Before treating Article 22 as production-ready, test at least these cases:

1. **Ordinary player notice** - valid Article 16 notice, but no trusted-flagger priority label.
2. **Fake trusted flagger** - sender claims status but cannot be verified; route ordinarily and investigate spoofing if appropriate.
3. **Verified status, correct expertise** - give priority and decide without undue delay if Article 22 applies.
4. **Verified status, wrong expertise** - do not apply Article 22 priority solely because the entity has trusted-flagger status in another field.
5. **Micro/small exclusion currently applies** - preserve Article 16 handling while documenting that Section 3 Article 22 is not currently mandatory.
6. **Loss of micro/small status** - calculate the Article 19 transition and prepare the routing change without prematurely claiming immediate applicability.
7. **Priority notice alleges obvious illegal content** - act promptly on the actual evidence and law, not merely on the label.
8. **Priority notice is legally/contextually ambiguous** - prioritise the review but do not auto-delete.
9. **Reported user appeals successfully** - correct the moderation decision and preserve audit history.
10. **Repeated low-quality trusted-flagger notices** - gather evidence and assess Article 22(6), without retaliatory or exaggerated reporting.
11. **Trusted-flagger status suspended** - stop statutory-priority routing based on current official status.
12. **Trusted-flagger status revoked** - future notices follow ordinary routing unless another valid basis applies.
13. **Fake German DSC email** - verify independently before changing trusted-flagger status or disclosing data.
14. **Apple/Google/Xsolla report** - classify under the provider's actual role, not automatically as Article 22.
15. **Moderation action on account with purchased Diamonds** - content action leaves unrelated purchased value intact.
16. **Moderation action during active 30-Day VIP** - the original 30 consecutive day clock is not restarted or duplicated.
17. **Lifetime VIP account** - content action does not silently expire or convert Lifetime VIP.
18. **Duplicate notice delivery** - idempotent moderation processing; no duplicate punishment or entitlement changes.
19. **Intake outage** - priority items are recovered/escalated and timestamps preserved rather than silently lost.
20. **Final Commission guidelines adopted** - legal owner compares the final text against production before claiming continued parity.

## Evidence pack

Keep a compact dated evidence pack containing:

- the feature-by-feature DSA classification;
- current micro/small-enterprise assessment;
- current official trusted-flagger verification source;
- trusted-flagger identity/expertise fields supported by the intake system;
- Article 16 and Article 22 queue-routing diagram;
- sample ordinary and priority notice records;
- receipt, priority, decision and appeal timestamps;
- Article 22(6) escalation procedure and evidence template;
- fake-notice verification procedure;
- moderation/entitlement separation test results;
- the date final Commission guidelines were last checked;
- and any material public Terms/Community Standards change generated by the feature.

## Canonical-language decision for this run

No new public promise is required merely to create this Article 22 operations gate. The current TycoonX Community Standards and Terms already describe illegal-content moderation, automated/human review, reasons/challenges, account enforcement and mandatory-rights limits at a general level.

Therefore this run does **not** materially change the canonical English legal meaning and does not reopen the completed 25-locale localization queue.

If Article 22 later becomes applicable to a TycoonX online-platform feature and production introduces a material user-facing notice/appeal rule that is not accurately described by the canonical documents, update the canonical English source first and then resynchronise the affected localized document type.

## Full-release and brand invariants

TycoonX has been in full release since **September 1, 2026**. Do not describe the current live TycoonX service, current purchases, current VIP products, Diamonds or current users as a pre-release product.

All rendered legal/player-facing text must spell the game name exactly **TycoonX**. Technical filenames or routes may retain legacy spellings only where changing them would break compatibility.