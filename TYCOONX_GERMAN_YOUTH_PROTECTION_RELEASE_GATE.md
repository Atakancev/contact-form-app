# TycoonX German Youth Protection & Age-Rating Release Gate

Last reviewed: 2026-08-31  
Operator/business name used in player-facing documents: **CK-Labs**

This is an operational release gate for TycoonX under the current German youth-media-protection framework and the current Apple App Store / Google Play age-rating and UGC rules. It does not replace the TycoonX Terms, Privacy Policy, Community Standards, the separate German minor-purchase gate, or case-specific legal advice.

TycoonX goes to full release on **September 1, 2026**. The live service, purchases, Diamonds, one-time 30-Day VIP, Lifetime VIP, rewards, and users must not be described as beta.

## 1. P0: classify the actual TycoonX offer, not just the game genre

Before release and after every material feature change, keep a dated inventory of what German users can actually access.

The review must include at least:

- game content and themes;
- global/public chat;
- direct or one-to-one messaging;
- profile names, biographies, avatars and other profile UGC;
- public art, music, books or other player-created content;
- comments, reactions, feeds, discovery, search, sharing or amplification of UGC if present;
- blocking, reporting and moderation controls;
- communication/contact functions;
- purchase functions, including Diamonds, one-time 30-Day VIP and limited-window Lifetime VIP;
- promotions and purchase prompts;
- randomized or gambling-like mechanics if any exist now or are added later;
- mechanics that could materially encourage excessive use, if any;
- data-sharing behavior relevant to minors;
- advertising or third-party content shown inside the app; and
- any feature that behaves differently by age or parental-control state.

Do not assume that "business simulation" means the age-protection analysis ends with the underlying economic gameplay. Under the current JMStV, the assessment of development-impairing effects can also take permanent usage risks into account where a concrete risk assessment makes them significant, including risks from communication/contact functions, purchase functions, gambling-like mechanisms, mechanisms promoting excessive media use, certain data disclosures, and age-inappropriate purchase appeals.

## 2. Current German law checkpoint: JMStV effective December 1, 2025

The current Jugendmedienschutz-Staatsvertrag (JMStV), as amended in 2025 and effective from **December 1, 2025**, is the baseline for TycoonX online distribution in Germany.

Release owner must preserve a dated legal-source snapshot showing at least:

- § 4: prohibited / severely youth-endangering content rules;
- § 5: development-impairing offers and the current usage-risk factors;
- § 5c: age-rating / notice duties for games offered as own content where applicable;
- § 6: youth-protection restrictions for advertising and purchase appeals;
- § 7: youth-protection-officer requirements where their factual conditions are met; and
- §§ 11-12b: current technical youth-protection framework to be rechecked when TycoonX relies on or interoperates with a recognized youth-protection mechanism.

Do not keep a pre-December-2025 JMStV checklist as the current source after release.

## 3. Development-impairing content and access controls

If TycoonX or a TycoonX surface is assessed as development-impairing for a particular age group, CK-Labs must not rely on a sentence in the Terms as the only control.

Under § 5 JMStV, depending on the applicable classification and factual setup, lawful measures can include technical or other means that prevent or materially hinder access by the affected age group, recognized age-readable labeling, or time-based access restrictions. Current statutory time windows include **22:00-06:00** for content whose development-impairing effect is assumed for users under 16 and **23:00-06:00** for content whose effect is assumed for minors generally.

Release checks:

- [ ] Record the age-protection classification of the shipped build and the facts supporting it.
- [ ] If access restrictions are legally required, verify them server-side or through another effective control rather than only through UI text.
- [ ] Test fresh accounts, existing sessions, multiple devices, deep links, push destinations and unsupported/old client behavior for bypasses.
- [ ] Do not call a simple self-declared birthday an age-verification system unless it actually meets the legal/platform standard required for the specific use case.
- [ ] If no German age restriction is legally required, retain the assessment that supports that conclusion and re-open it when functionality changes materially.

This gate does **not** declare TycoonX to be USK 0, 6, 12, 16 or 18. The actual age rating must come from the applicable rating process and the shipped product facts.

## 4. German age labels, IARC and distribution-channel separation

Do not treat one storefront rating as a universal age certificate for every TycoonX distribution channel.

USK currently explains that IARC ratings obtained through participating storefronts apply inside the corresponding IARC environment. They are not automatically a cross-platform statutory USK classification for physical distribution or unrelated non-IARC channels.

For each German distribution path, record:

| Distribution path | Required release evidence |
| --- | --- |
| Apple App Store | Current App Store age-rating questionnaire, resulting German storefront rating/descriptors, social-media capability answer, build/version tied to evidence |
| Google Play | Current Play Console IARC questionnaire, resulting German rating/descriptors, build/version tied to evidence |
| CK-Labs/Xsolla web checkout linking to the game | Confirm whether and where an existing applicable age rating/descriptors must be displayed at the online point of sale and ensure checkout/landing pages do not contradict the store rating |
| Direct browser-play, direct download or another non-IARC distribution route, if ever offered | Fresh JMStV/USK classification analysis before launch; never copy an IARC storefront label outside its valid framework without a valid basis |
| Physical media or public exhibition, if ever introduced | Separate JuSchG/USK review before distribution/exhibition |

Where CK-Labs has a legally applicable USK age rating for a game offered online, current USK guidance says the age rating and issued descriptors must be displayed perceptibly and near the age rating at the online point of sale. Preserve screenshots of the actual German product/checkout surface.

## 5. Apple App Store age-rating parity

The existing `TYCOONX_APPLE_SOCIAL_MEDIA_AGE_RELEASE_GATE.md` remains the detailed Apple-specific gate and must be completed rather than duplicated here.

Cross-check before the first September 2026 submission/update and after relevant feature changes:

- [ ] Answer the current App Store age-rating questionnaire based on actual shipped functionality.
- [ ] Beginning in **September 2026**, answer Apple's required social-media capability question for a new app/update or applicable notarization submission.
- [ ] If TycoonX has social-media capabilities, ensure the App Store declaration matches feeds/discovery/amplification/community behavior in the build.
- [ ] If CK-Labs selects Apple's "social media disabled for users under 13" configuration, enforce that choice in production and use Apple's Declared Age Range API at minimum as Apple's current framework requires.
- [ ] Do not represent Apple's age-rating or Declared Age Range tooling as a substitute for German JMStV duties, German purchase-capacity rules, or any stronger legally required age-verification system.
- [ ] Re-answer the questionnaire when a feature change makes an existing answer inaccurate.

An App Store rating is a distribution/platform classification. It is not a promise by CK-Labs that every piece of UGC will always be appropriate for every user at that rating.

## 6. Google Play IARC and UGC parity

Google Play currently requires every app to have a content rating and requires the Play Console rating questionnaire to be complete and accurate. A new questionnaire is required when app content/features change in a way that affects the answers.

For TycoonX UGC/community functionality:

- [ ] Require acceptance of the applicable Terms/User Policy before users create or upload UGC where Google Play policy requires it.
- [ ] Keep objectionable-content rules clear in the Community Standards.
- [ ] Provide in-app reporting for objectionable content/users where required by the UGC experience.
- [ ] Provide user blocking for relevant one-to-one interaction and publicly accessible UGC as Google Play policy requires.
- [ ] Maintain reasonable, effective and ongoing moderation.
- [ ] Ensure monetization does not encourage objectionable UGC behavior.
- [ ] Re-answer content-rating questions if chat, UGC, public sharing, mature content, randomized mechanics or another rating-relevant feature changes.
- [ ] If TycoonX ever becomes an app whose core functionality is random communication with strangers, anonymous communication, dating/matchmaking, or another current Google age-restricted category, use the then-current Play age-restriction tools before launch.

Google Play's IARC result does not waive a German JMStV duty that independently applies.

## 7. Purchase functions, Diamonds and youth-directed commercial design

The separate `TYCOONX_GERMAN_MINOR_PURCHASE_RELEASE_GATE.md` controls capacity, consent/approval and disputed minor purchases. An age rating does not prove that a particular minor was authorized to buy.

Under the current JMStV advertising rules, youth-directed advertising must not exploit children/young people's inexperience or credulity and must not directly urge them to persuade parents or third parties to make a purchase.

TycoonX commercial checks:

- [ ] Do not use a child-directed prompt such as "Ask your parents now so you do not miss this deal" or equivalent pressure language.
- [ ] Do not design a Lifetime VIP countdown, Diamond promotion, coupon flow or VIP upgrade prompt to exploit a minor's inexperience, fear of missing out or dependence on a parent.
- [ ] Keep real-money price information clear where it appears and preserve mandatory total-price/tax disclosures.
- [ ] Keep Lifetime VIP truthful as a limited-time promotional offering available only in selected genuine sales windows; it may be withdrawn and may never return, but scarcity/countdown claims must be genuine.
- [ ] Do not make core safety/report/block tools conditional on buying Diamonds or VIP.
- [ ] Do not infer parental authorization from an App Store/Play age rating.

A lawful age rating does not convert an unauthorized payment into an authorized transaction, and a parental purchase dispute is not by itself proof of fraud or exploit abuse.

## 8. Randomized mechanics and usage-risk changes

The current JMStV expressly allows certain permanent usage risks, including gambling-like mechanisms and purchase functions, to influence the development-impairment assessment when a concrete risk assessment makes them significant.

Before adding or materially changing any randomized paid mechanic, prize wheel, chance-based paid reward, loot-box-like system, casino-style presentation, streak pressure, compulsive countdown, or other high-pressure monetization loop:

- [ ] re-run the German youth-protection classification;
- [ ] re-run Apple and Google content/age-rating questionnaires where affected;
- [ ] re-run the existing TycoonX randomized-purchase / consumer-protection gates;
- [ ] verify the feature is not gambling or another regulated product under applicable law;
- [ ] review whether the design changes the age suitability of TycoonX; and
- [ ] do not launch first and correct the rating later.

Ordinary random gameplay does not automatically become gambling. Classification must follow the actual mechanic, consideration/prize structure, presentation and current law/platform rules.

## 9. Youth Protection Officer (§ 7 JMStV) classification

This is a specific factual/legal classification and must not be guessed from company size alone.

Under current § 7 JMStV, the appointment duty can apply to a **commercial provider of generally accessible telemedia when the offer contains development-impairing or youth-endangering content**. If the factual conditions are not met, do not publish a fictitious officer merely to make the Impressum look more complete.

If the conditions may be met:

- [ ] document the § 7 applicability analysis before release or before introducing the triggering content/functionality;
- [ ] determine whether CK-Labs must appoint an independent, suitably knowledgeable youth-protection officer;
- [ ] if an officer is required, publish the legally required essential contact information so it is easily recognizable, directly accessible and permanently available;
- [ ] involve the officer appropriately and early in production, acquisition, planning, design and youth-protection decisions;
- [ ] preserve the officer's independence and required resources; and
- [ ] do not appoint the business owner/manager without first resolving the independence/conflict issue under current German guidance.

Current § 7(2) contains a route for qualifying smaller telemedia providers (fewer than 50 employees **or** demonstrably fewer than 10 million average monthly accesses in a year) to omit their own appointment **only if** they join a recognized voluntary self-regulation body and bind that body to perform the officer's tasks. Small size by itself is therefore not a blanket exemption.

No paid membership or external service should be purchased merely because this checklist mentions the option. Any paid compliance service requires a separate business decision.

## 10. Child/youth safety reports and illegal content

Age ratings and parental controls do not replace content safety.

Maintain the separate Community Moderation & DSA checklist, including:

- report and block functionality;
- child sexual abuse/exploitation prohibitions;
- grooming, threats, harassment and privacy protections;
- emergency escalation where legally required;
- evidence preservation where lawful and necessary; and
- appropriate moderation of public UGC and one-to-one interactions.

If a feature ever qualifies as a video-sharing service or another specially regulated service, re-open the current JMStV duties for complaint/reporting systems and age-protection measures instead of assuming the ordinary game analysis is enough.

## 11. Feature-change trigger: rating and law review must happen before rollout

The following changes automatically reopen this gate before production rollout:

- public or private chat added, removed or materially expanded;
- random/anonymous matching or communication;
- public feed, discovery, sharing, reactions, comments or UGC amplification;
- new categories of player-created art, music, books, images, audio or video;
- new mature violent, sexual, drug, gambling-like or other age-sensitive content;
- new purchase pressure, randomized paid mechanics or materially changed Diamond/VIP sales design;
- a new ad network or materially more mature advertising;
- a change in target audience or child-directed marketing;
- a new web/direct-download/physical distribution route;
- a material change to age-assurance or parental controls; or
- a store/platform/legal rule change affecting age classification.

If the currently published rating becomes inaccurate, correct the rating/metadata and, where necessary for safety or law, temporarily disable the affected feature rather than knowingly continuing with a false classification.

## 12. Evidence pack to retain per relevant release

Keep a dated evidence pack containing:

- shipped build/version and release date;
- Germany feature/risk matrix;
- Apple age-rating questionnaire and result;
- Apple social-media capability answer and Declared Age Range test evidence where applicable;
- Google Play IARC questionnaire, certificate/result and UGC compliance evidence;
- applicable German age label/descriptors and point-of-sale screenshots;
- § 5 JMStV usage-risk assessment;
- § 6 purchase-prompt/advertising review;
- § 7 youth-protection-officer applicability analysis;
- report/block/moderation smoke-test results;
- any age-gating/access-control test results; and
- the legal/platform source versions and dates used.

Do not retain extra child personal data merely to prove compliance. Evidence should prove the control without unnecessarily storing exact dates of birth, identity documents or private messages.

## 13. Founder-protective rules that remain lawful

Subject to mandatory law and platform rules, CK-Labs may:

- set a higher internal minimum age or restrict a risky social feature by age where justified;
- disable or redesign a community, chat, purchase or randomized feature when its risk profile becomes unacceptable;
- use platform age-range signals instead of collecting exact birth dates where sufficient for the specific purpose;
- update ratings and descriptors when product functionality changes;
- temporarily restrict a feature while a credible youth-safety classification problem is investigated; and
- discontinue an optional feature rather than operate it in a non-compliant way.

These protections do not authorize CK-Labs to revoke unrelated legitimate purchased Diamonds, an active one-time 30-Day VIP entitlement or valid Lifetime VIP merely because a social feature is age-restricted or redesigned. Mandatory refund, conformity, withdrawal, privacy and other consumer rights remain intact.

## 14. Localization and public-legal-text trigger

This gate is operational and does not by itself change the canonical English Terms, Privacy Policy, Purchases & Refunds Policy or Community Standards.

If implementing this gate later requires a **material new player-facing contractual/privacy/community rule**, update the canonical English document first and then reopen that document type in all 25 locales in the required order:

`tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id`.

Do not silently patch only German or only English if the canonical meaning changes.

## 15. Current status

- [x] Canonical Terms already preserve age/parental/platform eligibility requirements and mandatory consumer rights.
- [x] Community Standards and the Community Moderation checklist already cover core UGC safety/moderation rules.
- [x] Separate German minor-purchase handling exists.
- [x] Separate Apple social-media/age-range gate exists.
- [x] All 25 localized hubs and 100 localized full documents are current as of this review.
- [ ] **P0 before/at full release:** preserve the actual German age-rating/IARC evidence for the shipped build and verify that chat, UGC, purchase and social features were answered accurately.
- [ ] **P0:** complete a written § 5 JMStV usage-risk classification for current communication/contact and purchase functions.
- [ ] **P0:** complete a written § 7 JMStV youth-protection-officer applicability determination. Do not assume solo/small status automatically removes the duty.
- [ ] **P0 for the next Apple submission/update in September 2026:** complete the required Apple social-media capability answer and ensure production behavior matches it.
- [ ] **P1:** retain a release evidence pack and make this gate a mandatory trigger for future rating-relevant feature changes.

## Primary current references checked 2026-08-31

- Current JMStV text, effective December 1, 2025, including §§ 4, 5, 5c, 6, 7 and 11-12b.
- Die Medienanstalten, current JMStV publication/status page.
- USK, Obligations for content providers.
- USK, IARC and online/storefront age-rating guidance.
- Apple Developer, current App Store age-rating / Social Media capability requirements for September 2026.
- Google Play, current Content Ratings policy and User Generated Content policy.
