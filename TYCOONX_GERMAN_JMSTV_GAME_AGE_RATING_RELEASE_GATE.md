# TycoonX German JMStV Game Age-Rating & Youth-Protection Release Gate

Last reviewed: **2026-09-05**  
Operator/business name used in player-facing documents: **CK-Labs**

This checklist covers the current German youth-media-protection requirements most relevant to TycoonX as an online game with community, communication, purchase, promotion, and user-generated-content features. It is an operational release gate. It does not replace the TycoonX Terms, Privacy Policy, Purchases & Refunds Policy, Community Standards, the Jugendmedienschutz-Staatsvertrag (JMStV), the Jugendschutzgesetz (JuSchG), platform rules, or case-specific German legal advice.

TycoonX went to full release on **September 1, 2026**. The requirements below are current production requirements and must never be described as beta requirements.

## 1. P0 now: the German online-game age-label rule is already in force

The current JMStV text applies from **December 1, 2025**. Under § 25(4), the new § 5c(3) labeling rule became applicable six months later. The KJM currently states expressly that, from **June 1, 2026**, providers of online films, series, and **game programs** must label them with an age classification.

For TycoonX this must be treated as a current release/compliance item, not a future planning note.

Under current § 5c(3) JMStV, a telemedia provider offering a game program as its own content must point to an age classification under § 5(1) JMStV or the JuSchG by a **clearly perceptible label before or at the beginning of the offer**. The law also says providers should indicate the main reasons for the age classification and risks to the personal integrity of children and young people.

Current age levels under § 5(1) are:

- without age restriction;
- age 6+;
- age 12+;
- age 16+; and
- age 18+.

### Release checks

- [ ] Establish the legally supportable German age classification for the **current live TycoonX build and service**, not merely an old store version.
- [ ] Identify every German-facing surface on which CK-Labs itself offers TycoonX as a game program and document how § 5c(3) is satisfied on that surface.
- [ ] Ensure the age label is clearly perceptible before or at the beginning of the relevant offer where § 5c(3) applies.
- [ ] Preserve the rating evidence, date, assessed build/service version, questionnaire or classification basis, and any descriptors/reasons.
- [ ] Reassess after a material gameplay, community, communication, monetization, or safety change that could affect the rating.
- [ ] Do not infer that an old physical-game rating, a generic global store age, or a marketing target age automatically remains correct for the current online service.

**Current blocker:** do not mark German youth-media-protection parity complete until CK-Labs has saved evidence of TycoonX’s current Germany-specific age classification and the actual § 5c(3) display path.

## 2. Personal-integrity risks now form part of the German rating analysis

The current § 5(1) JMStV does not limit age assessment to story, language, violence, or visual content. It expressly allows significant, concrete risks to the **personal integrity** of children and young people to influence the overall assessment where they are an enduring part of how the medium is used.

The statute specifically identifies risks including:

- communication and contact functions;
- purchase functions;
- gambling-like mechanisms;
- mechanisms encouraging excessive media use;
- disclosure of account or usage data to third parties without consent; and
- age-inappropriate purchase appeals, including promotional references to other media.

That makes the following TycoonX systems legally relevant to the German youth-protection review when present in the live build:

- public, company, group, or direct chat and other contact functions;
- user profiles and discoverability;
- art, music, books, posts, comments, reactions, or other UGC/community surfaces;
- Diamonds and real-money purchase entry points;
- one-time 30-Day VIP;
- Lifetime VIP sales windows;
- promotions, countdowns, coupons, bundles, and purchase calls to action;
- any random-reward, spin, loot, chance-based, or gambling-like mechanic, if introduced;
- energy loops, timers, push notifications, streaks, or other mechanics that could materially encourage excessive use; and
- data-sharing or advertising/analytics behavior relevant to minors.

Do not rate TycoonX only from screenshots or narrative content while ignoring the actual social and commercial mechanics.

## 3. Store ratings and German JMStV compliance are related but not interchangeable

A platform age rating is useful evidence, but CK-Labs must not assume every platform rating automatically satisfies every German provider duty.

### Google Play / IARC

USK currently explains that Google Play participates in the IARC system and that the IARC process produces a Germany-specific USK age classification for participating digital storefronts. This can be strong evidence for the German age-rating analysis where the current TycoonX Google Play questionnaire and resulting German USK classification accurately reflect the live feature set.

Release checks:

- [ ] Keep the current Google Play / IARC questionnaire answers and resulting German USK classification as evidence.
- [ ] Re-run the questionnaire when material social, purchase, random-reward, data, or excessive-use risk factors change.
- [ ] Do not copy an IARC result from another build if the German-relevant feature set differs.

### Apple

Apple has its own App Store age-rating framework and, from September 2026, separate social-media capability declarations. Those Apple answers must remain accurate, but **do not assume Apple’s global or regional App Store rating alone is automatically the legal classification or display method required by § 5c(3) JMStV** unless that equivalence is specifically verified for the relevant TycoonX offer.

Keep the Apple social-media/age gate and this German JMStV gate separate. A correct Apple submission does not remove a German statutory obligation, and a German rating does not remove Apple’s separate platform requirements.

### Webshop and legal website

The TycoonX Xsolla webshop, legal site, marketing site, and support site should not invent or display a contradictory German age label. If a surface actually offers or launches the game in a way that brings it within § 5c(3), use the verified German classification and required display treatment. A pure legal-information page should not be turned into a fake age-verification mechanism merely to appear compliant.

## 4. Development-impairing content requires more than a label in some cases

Under § 5(1) JMStV, if an offer is suitable to impair the development of children or young people of a particular age group, the provider must ensure that children or young people in the affected age group do not normally perceive it.

Current § 5(3) provides routes that can include:

1. technical or other means that make perception impossible or substantially more difficult for the affected age group;
2. an age label readable by suitable youth-protection programs; or
3. time-based access windows.

Current § 5(4) provides specific time-window rules for certain 16+/18+ content. Current § 5(5) also contains a separate rule for offers directed at children where the adverse effect is only assumed for children under 14.

For a continuously available online game, CK-Labs should not casually rely on late-night access windows as a substitute for an appropriate product design or technical solution.

Release checks:

- [ ] Determine whether the verified TycoonX rating creates any access-control obligation beyond displaying the classification.
- [ ] If a technical/other measure is relied on, test it across fresh sessions, old clients, deep links, push destinations, restored sessions, and multiple devices.
- [ ] Do not use a Terms sentence such as “you must be 18” as a substitute for an effective technical youth-protection measure where the law requires more.
- [ ] Re-evaluate after introducing a feature that materially changes personal-integrity risk.

## 5. Child-directed purchase appeals and advertising need their own review

Current § 6 JMStV restricts advertising that harms minors or exploits their inexperience or credulity. Among other things, advertising must not directly call on children or young people to buy or rent goods/services by exploiting their inexperience, and must not directly tell them to persuade parents or third parties to make a purchase.

TycoonX therefore needs a youth-protection review for:

- Diamond purchase banners;
- 30-Day VIP offers;
- Lifetime VIP sales windows;
- limited-time promotions and countdowns;
- coupon or bundle messages;
- push notifications about paid products;
- cross-promotion; and
- any future child-directed ad or creator/influencer campaign.

### Founder-protective rule

CK-Labs may lawfully sell digital products, use genuine promotional windows, alter future prices, offer regional pricing, and discontinue a Lifetime VIP sales window. The safer founder-protective approach is to keep the promotion **truthful and age-appropriate**, rather than trying to obtain a short-term conversion uplift from coercive or child-directed pressure.

- Do not tell a child to ask a parent to buy Diamonds or VIP.
- Do not use a fake countdown, fake scarcity claim, or misleading crossed-out price.
- Do not present an internal Apple, Google, Xsolla, cloud, VAT, FX, or infrastructure cost as a government charge if it is not one.
- Do not make the paid offer look mandatory for account safety, moderation, or legal compliance when it is optional.

The separate TycoonX promotion/dark-pattern and pricing gates remain applicable.

## 6. Jugendschutzbeauftragter under § 7 JMStV: classify the actual TycoonX surfaces

Current § 7(1) JMStV requires a youth-protection officer for business-like providers of generally accessible telemedia **where the offers contain development-impairing or youth-endangering content**. Required information about the youth-protection officer must be easily recognizable, directly accessible, and permanently available, including name and data enabling rapid electronic contact.

Current § 7(2) allows a telemedia provider with **fewer than 50 employees OR demonstrably fewer than 10 million accesses per month on annual average** to avoid appointing its own officer only if it joins a recognized voluntary self-regulatory organization, assigns that organization the youth-protection-officer functions, and involves/informs it as required.

Current § 7(3) excludes intermediary services within the meaning of Article 3(g) DSA from the § 7(1) duty. TycoonX can contain a mixture of CK-Labs own game content and intermediary/hosting-type UGC functions, so do not assume that one intermediary-services classification exempts the entire game or every surface.

### Release checks

- [ ] Determine whether the current TycoonX own-content offer triggers § 7(1).
- [ ] Separately classify UGC/intermediary functions instead of treating the whole service as one legal category.
- [ ] Record the current employee-count/access evidence relevant to § 7(2); the two thresholds are alternatives, not cumulative conditions.
- [ ] If relying on § 7(2), retain evidence of membership in a recognized self-regulatory organization and the assignment of youth-protection functions.
- [ ] If CK-Labs appoints its own youth-protection officer, publish the required contact information and preserve independence, expertise, resources, and timely involvement as required by § 7.
- [ ] Recheck the analysis if traffic, staffing, content, or service architecture materially changes.

Do not publish a made-up youth-protection contact merely to fill a footer. The person/organization and legal basis must be real.

## 7. UGC complaint handling: do not over- or under-apply § 5b

Current § 5b JMStV creates a specific electronic complaint procedure for **video-sharing services** concerning unlawful audiovisual content. TycoonX should not falsely claim that § 5b applies merely because users can upload an image, text, track, avatar, or other UGC.

However, if TycoonX later qualifies as a video-sharing service for a relevant feature, the complaint process must be readily recognizable, easy to use, directly accessible, permanently available, allow reasoning, and enable prompt review as required by § 5b.

Regardless of § 5b classification, the existing DSA notice-and-action, Community Standards, Apple/Google moderation, child-safety, and illegal-content procedures remain separate obligations where applicable.

## 8. Age rating is not a fraud, moderation, payment, or entitlement decision

A German age classification, age-label change, youth-protection restriction, or KJM/USK review does **not** by itself prove that a player:

- hacked or exploited TycoonX;
- committed fraud;
- abused regional pricing;
- initiated a chargeback;
- misused an entitlement;
- compromised an account; or
- violated the Community Standards.

Likewise, a moderation report or account compromise does not automatically justify changing TycoonX’s age classification without a proper rating analysis.

Keep age-rating evidence, account-security evidence, payment evidence, and moderation evidence separately attributable.

## 9. Paid-product and mandatory-remedy isolation

Youth-protection compliance must not become an entitlement-deletion shortcut.

### Purchased Diamonds

- Purchased Diamonds do not expire solely because time passes.
- A German age-rating change or youth-protection restriction does not itself delete purchased Diamonds.
- If a restriction materially prevents lawful supply/use of paid value, assess conformity, price reduction, termination, refund, or another mandatory remedy separately under the actual transaction and mandatory law.
- Do not use an age-rating migration to duplicate Diamonds or erase unrelated legitimate balances.

### 30-Day VIP

- 30-Day VIP remains a **one-time, non-renewing 30-day entitlement**.
- An age-gate, parental-control, classification update, or German storefront change must not restart or duplicate the original 30-day period.
- If mandatory law requires a remedy because CK-Labs can no longer supply a paid benefit as agreed, apply that remedy separately rather than silently shortening the entitlement.

### Lifetime VIP

- Lifetime VIP remains a **one-time promotional entitlement available only during selected genuine sales windows**.
- It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase.
- A German age-rating or youth-protection change must not reopen a closed Lifetime VIP sales window, recreate the product, add an expiry to an existing valid entitlement, or convert it into 30-Day VIP.

### Refunds and chargebacks

A youth-protection event is not itself an Apple refund, Google Play refund, Xsolla refund, statutory withdrawal, or chargeback. Keep the legal/payment event tied to the authoritative transaction record and the applicable consumer-remedy process.

## 10. Old and unsupported app versions

A new German age classification or safety restriction is ineffective if old clients can still bypass it.

Where server-side restriction is required:

- [ ] enforce the sensitive feature server-side where reasonably possible;
- [ ] invalidate or constrain stale capability flags;
- [ ] protect deep links and direct API calls;
- [ ] handle restored sessions and multiple devices;
- [ ] require a supported app version where a security or youth-protection fix cannot otherwise be enforced; and
- [ ] keep mandatory digital-product update and conformity rights intact.

CK-Labs may discontinue support for old versions and require a reasonable update for security, legal compliance, compatibility, or service integrity where lawful. That does not permit avoiding mandatory update, notice, conformity, refund, or termination rights.

## 11. Live-service feature changes can require re-rating

Re-run the German youth-protection assessment before or promptly with material additions such as:

- direct messaging or expanded public chat;
- anonymous/random matching or contact features;
- public UGC discovery or recommendation;
- image/video upload;
- location sharing;
- creator monetization;
- new Diamond purchase mechanics;
- new VIP benefits tied to social functionality;
- random-reward or gambling-like mechanics;
- stronger streak/retention/excessive-use mechanics;
- materially more aggressive promotion or purchase calls; or
- a change in data-sharing behavior affecting minors.

A live-service business can change features. The founder-protective approach is to reserve that product flexibility in the Terms while also updating the legally required rating, disclosures, technical restrictions, and mandatory remedies when the real product changes.

## 12. Enforcement risk is material

Current § 24 JMStV expressly treats, among other things, these as administrative offenses:

- offering telemedia without the § 5c(3) required age-classification notice; and
- failing to appoint a youth-protection officer where § 7 requires one.

For the § 5c(3)/§ 7 category, § 24(3) places the offense in the general group for which a fine of up to **EUR 500,000** can apply. Separate newer operating-system/app youth-protection offenses in § 24(1) nos. 11-24 have a different, higher statutory ceiling, but CK-Labs must not assume those provisions apply to TycoonX before their specific scope and transition conditions are met.

This gate is designed to prevent a cheap-to-fix labeling or governance omission from becoming a regulatory incident.

## 13. Minimum regression scenarios

Before marking German JMStV parity complete, test/document at least:

1. The German age classification corresponds to the current live TycoonX feature set.
2. The classification is clearly perceptible before or at the beginning of the relevant CK-Labs own-content offer where § 5c(3) applies.
3. The evidence identifies the assessed build/service date and rating basis.
4. Google Play Germany/IARC evidence is current and not copied from an obsolete build.
5. An Apple age rating is not silently assumed to satisfy § 5c(3) without verification.
6. Direct/public chat is included in the personal-integrity risk analysis.
7. Diamond/VIP purchase functions are included in the personal-integrity risk analysis.
8. Any random-reward/gambling-like mechanic, if present, is included in the analysis.
9. Excessive-use mechanics and notifications are included where materially relevant.
10. A child-directed purchase message cannot tell a minor to persuade a parent to buy.
11. A rating change does not erase purchased Diamonds.
12. A rating change does not restart or duplicate 30-Day VIP.
13. A rating change does not reopen, recreate, or expire Lifetime VIP.
14. A youth-protection event is not automatically classified as fraud, hacking, chargeback abuse, or entitlement abuse.
15. An old client cannot bypass a server-required youth-protection restriction.
16. The § 7 youth-protection-officer analysis records the actual own-content/intermediary classification.
17. If § 7(2) is used, the qualifying threshold evidence and recognized self-regulatory arrangement are real and retained.
18. If an own youth-protection officer is required, the published contact is real, current, and rapidly reachable electronically.
19. A new material community/monetization feature triggers re-rating review.
20. Mandatory consumer remedies remain available where a lawful restriction materially prevents promised paid digital performance.

## 14. Release evidence to retain

Retain at minimum:

- [ ] current Germany-specific age classification;
- [ ] classification source/method and date;
- [ ] assessed TycoonX build/service feature inventory;
- [ ] screenshots/export showing the § 5c(3) display path on relevant CK-Labs own-content surfaces;
- [ ] rating descriptors/reasons and personal-integrity risk analysis;
- [ ] current Google Play/IARC Germany result, if relied on as evidence;
- [ ] current Apple age-rating/social-media answers as separate platform evidence;
- [ ] § 7 own-content/intermediary analysis;
- [ ] employee/access evidence relevant to § 7(2), if applicable;
- [ ] youth-protection officer or recognized self-regulatory arrangement evidence, if applicable;
- [ ] child-directed advertising/purchase-appeal review;
- [ ] server/old-client restriction test evidence where access controls are required; and
- [ ] date/person responsible for the final release check.

## 15. Current TycoonX status

- [x] Canonical Terms preserve age-gating, legal-compliance, feature-change, old-version, and mandatory-consumer-right flexibility.
- [x] Privacy Policy contains age/age-range and child-safety processing safeguards.
- [x] Community Standards contain child-safety, illegal-content, reporting, and proportionate-enforcement safeguards.
- [x] Separate Apple social-media/age requirements are documented.
- [x] Payment/entitlement legal gates isolate Diamonds, 30-Day VIP, Lifetime VIP, refunds, and chargebacks.
- [ ] **P0 NOW:** retain evidence of the current Germany-specific TycoonX age classification and the actual § 5c(3) label/display path on each relevant CK-Labs own-content offer.
- [ ] **P0 if triggered:** complete the § 7 Jugendschutzbeauftragter / recognized-self-regulation route and publish the required real contact information.
- [ ] **P1:** maintain a German youth-protection re-rating trigger in every material community, monetization, UGC, data, or safety feature release checklist.

Do not mark these P0 items complete based only on an App Store global rating, an old Google Play screenshot, a Terms age clause, or an assumption that TycoonX is “just a game.” The current German JMStV expressly brings online game programs, commercial mechanics, communication/contact risks, and other personal-integrity risks into the analysis.

## Official references checked 2026-09-05

- Current JMStV (text applicable from December 1, 2025), especially §§ 5, 5b, 5c, 6, 7, 24, and 25:  
  https://www.gesetze-bayern.de/Content/Document/JMStV/true
- KJM, **Alterseinstufung**: states that from June 1, 2026 providers of online films, series, and game programs must display an age classification and consider personal-integrity risks:  
  https://www.kjm-online.de/themen/technischer-jugendmedienschutz/alterseinstufung/
- KJM, technical youth-media protection / current age-verification and protection information:  
  https://www.kjm-online.de/themen/technischer-jugendmedienschutz/
- KJM FAQ, including current § 7 youth-protection-officer threshold/recognized-self-regulation explanation:  
  https://www.kjm-online.de/ueber-uns/fragen-und-antworten/
- USK, online provider obligations:  
  https://usk.de/fuer-unternehmen/pflichten-fuer-anbieter/
- USK, IARC age ratings for games/apps and participating storefronts:  
  https://usk.de/en/the-usk/faqs/which-age-ratings-apply-online/
- JuSchG, including § 14 game-program classifications:  
  https://www.gesetze-im-internet.de/juschg/

## 16. Legal-change watch

This gate reflects the law and regulator guidance checked on **September 5, 2026**. Recheck it when:

- the JMStV is amended;
- the KJM publishes new common criteria for § 5c descriptors/personal-integrity notices;
- the KJM activates or changes operating-system/app youth-protection transition requirements affecting § 12/§ 12a;
- USK/IARC platform participation or classification rules materially change;
- Apple/Google alter Germany-specific age-rating behavior;
- TycoonX introduces a materially new social, UGC, monetization, random-reward, or data-use mechanic; or
- a German authority issues TycoonX-specific guidance or an order.

When a legal or platform change affects player-facing legal meaning, update the canonical English legal source first and reopen only the affected localized document type in the required locale order. This gate by itself does not change canonical player-facing meaning.