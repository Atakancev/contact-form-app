# TycoonX EU AI Act NCII and CSAM Prohibition Release Gate

Last reviewed: September 3, 2026

Purpose: prevent TycoonX from placing on the market, putting into service, or using AI functionality in a way that conflicts with the new EU AI Act prohibitions on non-consensual intimate material and child sexual abuse material, while avoiding overbroad moderation, unnecessary surveillance, or automatic payment and entitlement penalties.

This is a release and implementation gate. It does not state that TycoonX currently offers player-facing generative image, video, audio, or nudification functionality.

TycoonX went to full release on **September 1, 2026**.

## Legal checkpoint

Regulation (EU) **2026/1744** (Digital Omnibus on AI) amended Article 5 of Regulation (EU) 2024/1689. It was published in the Official Journal on 24 July 2026 and entered into force on **27 July 2026**. The new Article 5(1)(ba), Article 5(1)(bb), Article 5(1a), and Article 5(1b) rules apply from **2 December 2026**.

The new rules are not merely a transparency or labelling obligation. Where the prohibition applies, adding an `AI-generated` label does not make the prohibited generation or use lawful.

This gate is therefore a **2 December 2026 go-live blocker** for any affected TycoonX AI feature.

## 1. Scope inventory before 2 December 2026

Before 2 December 2026, inventory every TycoonX or CK-Labs AI system that can generate or manipulate images, video, audio, or similar media, including:

- player-facing creation tools;
- AI-assisted art, avatar, profile-picture, music-video, voice, or media features;
- support or moderation tools that can transform uploaded media;
- internal content-generation tools used to create material later published in TycoonX;
- third-party APIs, models, SDKs, hosted tools, and plug-ins used under the TycoonX name;
- tools that accept a real person's photo, voice, likeness, or other identifying media;
- tools capable of image editing, inpainting, face replacement, clothes removal, body editing, voice cloning, or similar transformation; and
- developer or moderator tools that could reasonably be used to generate or manipulate covered content in production.

For every system, record at minimum:

- provider and model/system name;
- CK-Labs role as provider, deployer, downstream provider, or another applicable role;
- intended purpose;
- user-facing capabilities;
- input and output media types;
- whether identifiable natural persons can be depicted;
- relevant provider safety settings;
- TycoonX-side safety controls;
- reasonably foreseeable misuse;
- observed or reported misuse; and
- the date of the last assessment.

Do not assume that using a third-party AI API makes CK-Labs legally irrelevant. The TycoonX integration and the way CK-Labs places or uses the system must be classified separately.

## 2. Article 5(1)(ba): non-consensual intimate material

Do not place on the market, put into service, or use an AI system in a prohibited manner to generate or manipulate realistic images, videos, audio, or similar material of:

- an identifiable natural person's intimate parts; or
- an identifiable natural person engaged in sexually explicit activities,

without the freely given, specific, informed, unambiguous, and explicit consent required by Article 5(1)(ba) for that generation or manipulation.

For TycoonX this means, among other things:

- no `nudify`, `undress`, `remove clothes`, sexual deepfake, or equivalent feature involving an identifiable person without the legally required consent;
- no prompt, preset, edit mode, avatar workflow, or hidden API route intentionally designed to achieve the same prohibited result;
- no moderator or staff workaround that uses a general-purpose model for that purpose; and
- no claim that a Terms checkbox or general account consent substitutes for the specific consent required for the particular generation or manipulation.

Consent evidence, where relevant, must be handled consistently with GDPR requirements. Do not collect excessive identity documents or intimate material merely to create a compliance record.

## 3. Article 5(1)(bb): child sexual abuse material

Do not place on the market, put into service, or use an AI system in a prohibited manner to generate or manipulate material or performances falling within Article 5(1)(bb), including wholly or partially synthetic child sexual abuse material where the legal definition is met.

There is no product, promotion, artistic-feature, role-play, fictional-character, or `AI only` exception that CK-Labs may invent for material that legally falls within this prohibition.

Any narrow statutory `without right` defence or legally authorized red-team, evaluation, criminal-investigation, or comparable activity must be treated as exceptional legal work, separately authorized and documented. It is not a player-facing feature exemption.

## 4. Provider-side prohibition test under Article 5(1a)

For placing on the market or putting into service, do not use an overbroad rule such as `the underlying model can theoretically generate bad content, therefore it is automatically prohibited`.

The Article 5(1a) assessment must consider whether:

1. generation or manipulation of the covered material is the intended purpose of the AI system; or
2. the system's design, training, architecture, capabilities, or user-facing functionality makes the covered generation or manipulation a **reasonably foreseeable and reproducible outcome without significant technical modification**, and the system lacks **reasonable and adequate technical safety measures and other safeguards** to reliably prevent it, taking reasonably foreseeable misuse into account, and to correct observed or reported misuse.

For a TycoonX integration, document the actual exposed feature rather than only the theoretical capabilities of a foundation model.

## 5. Deployer-side purpose test

The Article 5(1a) deployer/use rule is purpose-sensitive. Accidental generation is not automatically the same as deliberately using an AI system for the prohibited purpose.

Operationally:

- a user or staff member deliberately requesting prohibited NCII or CSAM is materially different from an accidental model failure;
- accidental generation still requires containment, investigation, correction, and safety review;
- do not falsely accuse a player of deliberate sexual-content abuse solely because a classifier or model produced an unexpected result; and
- preserve enough evidence to distinguish the prompt/input, model output, safety response, account-compromise indicators, and later moderator decision.

## 6. Reasonable and adequate safeguards

Where a TycoonX AI system could foreseeably produce covered material, use proportionate safeguards appropriate to the feature. Depending on the actual system, this can include:

- provider safety controls enabled in production;
- prompt/input controls;
- output classifiers or moderation;
- blocking or safely transforming prohibited edit requests;
- limits on real-person likeness editing;
- controls for image-to-image and face/voice transformation;
- rate limits where abuse at scale is foreseeable;
- human escalation for serious or ambiguous cases;
- abuse-report channels;
- rapid correction when a reproducible bypass is discovered;
- adversarial testing of the exposed TycoonX workflow; and
- versioned evidence showing what protections were actually active.

A single keyword blacklist is not automatically sufficient. Conversely, CK-Labs does not need to invent unlimited surveillance or impossible zero-risk guarantees. Controls should be proportionate to reasonably foreseeable misuse and the actual capability exposed.

## 7. Correct observed or reported misuse

A reproducible bypass that allows covered prohibited generation must not be knowingly left available because the feature is popular, profitable, difficult to patch, or supplied by a third party.

When credible misuse is found:

1. preserve the minimum evidence reasonably needed for investigation and legal obligations;
2. contain the unsafe path where necessary;
3. determine whether the issue is a user misuse case, system-safeguard failure, account compromise, or a combination;
4. notify the relevant AI provider where appropriate;
5. patch, disable, restrict, or replace the affected path where necessary;
6. test that the correction works; and
7. record the decision and deployment date.

A provider outage or vendor delay does not justify knowingly keeping a prohibited TycoonX path live. CK-Labs may temporarily disable the affected AI feature while preserving unrelated TycoonX functionality.

## 8. Do not confuse legal NCII scope with all nudity or all art

The new non-consensual-intimate-material prohibition is specific. Do not describe every nude, artistic, medical, fictional, or non-realistic work as prohibited by Article 5(1)(ba) when the legal elements are not met.

The regulation distinguishes, among other things, realistic depictions of identifiable natural persons from categories that can fall outside the prohibition, subject to other applicable laws and platform rules.

TycoonX Community Standards may lawfully be stricter than the minimum AI Act boundary. If CK-Labs chooses a stricter product rule, describe it as a **TycoonX safety/community rule**, not falsely as something the AI Act always requires.

## 9. Existing intimate-material manipulation

Do not treat every technical edit of pre-existing intimate material as automatically falling within Article 5(1)(ba). Article 5(1b) excludes a manipulation that does not increase exposure of depicted intimate parts or alter the nature of depicted sexually explicit activities from that specific prohibition.

This narrow statutory distinction does not override:

- consent law;
- GDPR;
- copyright and personality rights;
- criminal law;
- child-protection law;
- TycoonX Community Standards; or
- Apple, Google Play, or other platform rules.

## 10. Player reporting and moderation

If TycoonX receives a report involving suspected AI-generated NCII or CSAM:

- prioritize safety and legal review;
- avoid redistributing the material unnecessarily inside support tools;
- restrict moderator access to people who genuinely need it;
- do not ask a reporting user to repeatedly upload harmful material if sufficient evidence already exists;
- follow applicable preservation, reporting, removal, authority-order, and victim-protection law;
- keep DSA, criminal-law, TCO, privacy, and platform obligations separate rather than assuming this AI Act gate replaces them; and
- do not promise a specific law-enforcement report unless the legal duty and reporting route have actually been verified for the case.

## 11. Private communications and privacy

This prohibition does not itself authorize indiscriminate scanning of every private TycoonX communication or collection of intimate personal data.

Any detection or review of private communications must separately satisfy applicable privacy, ePrivacy/TDDDG, data-protection, communications-confidentiality, child-safety, and platform requirements.

Use the least intrusive measure that is reasonably effective for the actual risk and lawful basis.

## 12. Account compromise and false positives

A prohibited request or output appearing under an account is not automatically proof that the legitimate account owner intentionally created it.

Where account compromise is plausible:

- preserve login/session/security evidence where lawfully available;
- invalidate compromised sessions or credentials where appropriate;
- separate safety containment from final culpability;
- give a reasonable review route where appropriate and legally permitted; and
- do not use an AI safety classifier as the sole proof of fraud, cheating, chargeback abuse, or intentional prohibited-content generation.

Immediate restriction may still be appropriate where necessary to protect people or prevent further generation while the investigation is pending.

## 13. Payment and entitlement isolation

A content-safety event, prohibited prompt, blocked generation, provider safety refusal, or AI Act investigation does **not by itself** change payment state.

- Purchased **Diamonds** must not be deleted merely because an AI feature blocked or flagged unrelated content.
- A valid one-time **30-Day VIP** must not be restarted, shortened, converted into a subscription, or removed merely because an AI moderation signal exists.
- Valid **Lifetime VIP** must not receive a new expiry or be revoked merely because of an automated content flag.
- A content violation does not manufacture a refund, chargeback, payment reversal, or regional-price-abuse finding.
- If an account is lawfully suspended or terminated for a serious violation, paid-product consequences remain governed by the TycoonX Terms, the relevant purchase contract, platform/provider rules, and mandatory consumer law.

Lifetime VIP remains a one-time entitlement offered only during selected genuine promotional sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future sales availability.

## 14. Apple, Google Play, Xsolla, and provider boundaries

### Apple and Google Play

Before shipping a generative or media-editing feature, confirm current App Store and Google Play rules for sexual content, child safety, UGC, AI-generated content, user reporting, and moderation.

A model provider allowing generation does not prove Apple or Google Play allows the feature. A store approving the app does not prove compliance with the EU AI Act.

### Xsolla and payments

Xsolla payment or fraud systems do not determine whether AI media is prohibited under Article 5. Do not send unnecessary intimate content to a payment provider as proof of a content violation.

### AI providers

A third-party provider's safety policy is useful evidence but does not replace CK-Labs' assessment of the actual TycoonX implementation. Preserve material provider-safety settings and changes where the TycoonX feature depends on them.

## 15. Promotions and monetization

Do not create a monetization incentive to bypass the prohibition.

Examples of unacceptable designs include:

- charging Diamonds to unlock a prohibited nudification mode;
- advertising VIP as removing NCII/CSAM safety filters;
- giving Lifetime VIP purchasers access to a prohibited generation mode;
- selling a coupon or `uncensored` tier that disables legally necessary safeguards; or
- using a limited-time countdown to pressure users into buying access to an unsafe feature.

A lawful adult-oriented creative feature, if ever considered, still requires separate Apple/Google, youth-protection, privacy, consumer-law, content-safety, and AI Act review before monetization.

## 16. Security emergencies and provider changes

If a model/provider update unexpectedly removes or weakens a safeguard, CK-Labs may immediately disable or restrict the affected TycoonX AI feature while investigating.

If an AI provider is discontinued, becomes unavailable, changes policy, changes model behavior, or can no longer support the required safety controls, CK-Labs may replace the provider or remove the affected feature. This does not automatically entitle CK-Labs to remove unrelated valid Diamonds or VIP benefits.

If removal or replacement materially changes an ongoing paid digital product, apply the existing digital-product change and mandatory consumer-remedy rules.

## 17. Evidence packet

Before any affected AI feature remains available on or after **2 December 2026**, preserve a dated evidence packet containing:

- feature name and user-facing surface;
- provider/model and material version;
- CK-Labs AI Act role classification;
- Article 5(1)(ba)/(bb) applicability analysis;
- Article 5(1a) intended-purpose / reasonably-foreseeable-and-reproducible test;
- applicable consent design where relevant;
- production safety controls and provider settings;
- adversarial test cases and outcomes;
- known bypasses and correction history;
- incident/report workflow;
- account-compromise and false-positive safeguards;
- privacy/legal-basis analysis for any detection involving personal/private data;
- Apple/Google policy check where applicable; and
- sign-off date.

Do not retain prohibited or intimate content in the evidence packet merely to make the folder look complete. Prefer hashes, identifiers, redacted screenshots, event metadata, safety-decision records, or other minimized evidence where those are sufficient and lawful.

## 18. 2 December 2026 release decision

Before **2 December 2026**, every TycoonX AI feature capable of relevant media generation/manipulation must be classified as one of:

1. **Not exposed / not applicable** with a documented reason;
2. **Applicable and compliant** with reasonable and adequate safeguards and the required use restrictions;
3. **Disabled pending remediation**; or
4. **Removed/replaced**.

Do not leave the status as `unknown` for a production feature capable of realistic person-based image/video/audio generation or manipulation.

## 19. Canonical legal synchronization rule

This gate does not currently require a material amendment to the canonical TycoonX Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards because those documents already prohibit unlawful/abusive use and preserve mandatory rights.

If CK-Labs later introduces a player-facing generative-media feature, a new consent flow, or a material Community Standards restriction because of this prohibition, review whether the canonical documents must change. If canonical player-facing meaning materially changes, reopen the affected document type across all 25 locales and update `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md` before treating localization as current.

## 20. Source checkpoint

Current legal source for this gate:

- Regulation (EU) 2026/1744, especially the amendments inserting Article 5(1)(ba), Article 5(1)(bb), Article 5(1a), Article 5(1b), and the amended Article 113 application date.

Recheck official EU guidance before December 2, 2026 and whenever the Commission publishes specific guidance materially affecting these new prohibited practices.

This gate is intentionally narrower than `TYCOONX_AI_TRANSPARENCY_RELEASE_GATE.md`. Transparency/labelling and prohibited-practice analysis are separate: disclosure can satisfy a transparency obligation, but disclosure cannot legalize an AI practice that Article 5 prohibits.
