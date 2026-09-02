# TycoonX DSA Advertising, Recommender Systems, and Minors Release Gate

Last reviewed: **September 2, 2026**  
Operator/business name used in player-facing documents: **CK-Labs**

This gate covers a distinct EU Digital Services Act compliance layer for TycoonX community and social surfaces: **Article 26 advertising transparency, Article 27 recommender-system transparency, and Article 28 protection of minors**. It complements the existing moderation, Article 14, promotion, privacy, device-tracking, youth-protection, and platform-policy gates. It does not replace them.

TycoonX entered full release on **September 1, 2026**. Nothing in this gate describes the live service, users, purchases, VIP, Diamonds, rewards, or legal terms as beta.

## 1. Start with scope, not assumptions

Articles 26, 27, and 28 sit in DSA Section 3, which applies to providers of **online platforms**. Under Article 19, Section 3 generally does not apply to qualifying micro or small enterprises, except for Article 24(3), during the statutory exemption period unless the provider is designated a very large online platform.

Therefore, before treating any TycoonX social feature as subject to Articles 26, 27, or 28:

- [ ] classify the feature as an intermediary service, hosting service, online platform, or neither for the relevant DSA purpose;
- [ ] preserve a dated Recommendation 2003/361/EC micro/small-enterprise assessment for CK-Labs;
- [ ] record whether the Article 19 exclusion currently applies;
- [ ] record any date on which CK-Labs ceased to qualify and the relevant Article 19 transition period;
- [ ] re-run the analysis if ownership, linked-enterprise status, headcount, turnover, balance-sheet figures, or feature architecture materially changes; and
- [ ] do not claim a Section 3 statutory system publicly merely to appear more compliant when the duty does not actually apply.

Article 19 is an exemption from specified Section 3 duties, not a statement that advertising, profiling, child safety, privacy, consumer-protection, App Store, or Google Play rules cease to apply. Other laws and platform rules can still apply independently.

Official legal baseline checked September 2, 2026:

- Regulation (EU) 2022/2065, especially Articles 3(r), 3(s), 19, 26, 27, and 28: https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng
- European Commission DSA guidance, including the July 14, 2025 guidelines on protection of minors: https://digital-strategy.ec.europa.eu/en/policies/dsa-guidelines
- Apple App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Google Play Families Policy Requirements: https://support.google.com/googleplay/android-developer/answer/9893335

## 2. Do not call every TycoonX promotion a DSA advertisement

The DSA uses a specific definition. Article 3(r) defines an `advertisement` as information designed to promote a legal or natural person's message and presented by an online platform on its online interface **against remuneration specifically for promoting that information**.

That means a TycoonX Diamond bundle card, VIP purchase screen, Lifetime VIP sales-window announcement, game event notice, or CK-Labs house promotion is not automatically an Article 26 advertisement merely because it is commercial or promotional.

Those CK-Labs-controlled commercial surfaces remain subject to the separate rules already covered by the TycoonX promotion, checkout, pricing, dark-pattern, consumer, tax, and platform-policy gates.

Conversely, do not avoid Article 26 by renaming paid placement as `sponsored content`, `featured`, `partner content`, `boosted`, `recommended partner`, or another label if the actual arrangement satisfies the DSA definition.

## 3. Article 26(1): per-advertisement transparency if it applies

If an in-scope TycoonX online-platform feature presents DSA advertisements and Article 19 does not exclude Article 26, each specific advertisement presented to each individual recipient must enable that person to identify, clearly, concisely, unambiguously, and in real time:

- [ ] **that the information is an advertisement**, using a prominent marking;
- [ ] the natural or legal person **on whose behalf** the advertisement is presented;
- [ ] the natural or legal person **who paid for** the advertisement if different; and
- [ ] meaningful information, directly and easily accessible from the advertisement, about the **main parameters** used to determine the recipient to whom it was presented and, where applicable, how to change those parameters.

Do not hide the advertiser or targeting explanation several screens away behind a generic privacy-policy link.

Do not use vague statements such as `shown because it may interest you` if material targeting inputs actually include country, language, age band, prior interactions, community interests, device signals, or another meaningful criterion that must be explained.

The targeting explanation should describe the material criteria without exposing proprietary model weights, anti-fraud controls, abuse-detection thresholds, security secrets, or personal data about other users.

## 4. Article 26(2): user commercial-communication declaration

If Article 26(2) applies to a TycoonX online-platform surface on which recipients can provide content that is or contains commercial communications, production must provide a practical way for the content provider to declare that fact.

Where the user makes the declaration:

- [ ] other recipients can identify clearly and unambiguously, in real time, that the content is or contains a commercial communication;
- [ ] the marking survives ordinary rendering, resharing, reposting, or feed placement where technically applicable;
- [ ] a creator cannot remove the label merely by editing text after declaring the commercial relationship; and
- [ ] moderation can act against deceptive evasion under the applicable rules without inventing a financial penalty unrelated to the conduct.

Do not build this feature merely because a player mentions a business name. The Article 26(2) workflow is for the legal scope actually covered by the provision.

## 5. Article 26(3): no profiling ads using GDPR special-category data

Where Article 26(3) applies, TycoonX must **not present advertisements based on profiling that uses special categories of personal data under GDPR Article 9(1)**.

Do not target or infer ad audiences from protected/special-category data such as racial or ethnic origin, political opinions, religious or philosophical beliefs, trade-union membership, genetic or biometric data used for unique identification, health data, or data concerning a person's sex life or sexual orientation.

This is a DSA prohibition where applicable. It is not made lawful merely because a person clicked a generic advertising-consent toggle, because a vendor offers the targeting segment, or because CK-Labs believes the segment would improve conversion.

Security, fraud, moderation, or legal-compliance data must not be silently repurposed into advertising-profile inputs.

## 6. Article 27: recommender-system transparency if it applies

Article 3(s) defines a `recommender system` broadly as a fully or partially automated system used by an online platform to suggest specific information to recipients or prioritize information, including through search or by determining relative order or prominence.

A chronological list with no automated prioritisation may require a different analysis from a feed that ranks community posts, player-created art, music, books, profiles, groups, marketplace/community content, or other recipient-provided information according to predicted relevance or engagement.

If an in-scope TycoonX online-platform feature uses a recommender system and Article 27 applies, the Terms or other legally qualifying terms and conditions must explain in **plain and intelligible language**:

- [ ] the **main parameters** used by the recommender system;
- [ ] the criteria most significant in determining what is suggested;
- [ ] why those criteria have their relative importance; and
- [ ] any options recipients have to modify or influence those parameters.

Do not publish source code, model weights, exact ranking formulas, anti-manipulation thresholds, anti-cheat logic, private user features, or security-sensitive implementation details merely to satisfy transparency. Explain the main decision logic at the level the DSA requires.

If several user-selectable recommender options are available and Article 27(3) applies, the option-selection functionality must be directly and easily accessible from the part of the interface where information is prioritised, and users must be able to select and modify their preferred option at any time.

### Canonical-document trigger

The current TycoonX Terms and Community Standards do **not** claim that TycoonX operates a DSA Article 27 recommender system. That is safer than inventing one.

Before CK-Labs launches or materially changes a ranking/recommendation feature that causes Article 27 to apply:

1. document the actual ranking inputs and user controls;
2. add the legally required main-parameter explanation to the canonical English terms/conditions;
3. assess whether the change is significant under DSA Article 14(2) and the TycoonX legal-document change gate;
4. update all affected localized legal documents before or with the production rollout; and
5. verify that the public description matches the shipped ranking behavior.

Do not silently add a production recommender system first and treat the legal disclosure as a later documentation task.

## 7. Article 28(1): high level of privacy, safety, and security for minors

Where a TycoonX online platform is **accessible to minors**, Article 28(1) requires appropriate and proportionate measures to ensure a high level of privacy, safety, and security for minors when the provision applies.

The Commission's guidelines on protection of minors were published on **July 14, 2025**. They are guidance rather than a substitute for the Regulation, but they are a current reference point for assessing appropriate and proportionate measures.

For any TycoonX social feature accessible to minors, keep a dated risk-based assessment addressing, where relevant:

- [ ] default privacy and discoverability;
- [ ] unwanted contact, grooming, bullying, harassment, and harmful-content exposure;
- [ ] reporting, blocking, muting, and support routes;
- [ ] addictive or manipulative engagement patterns;
- [ ] recommendation controls and amplification of harmful content;
- [ ] commercial pressure and age-inappropriate monetisation;
- [ ] age assurance that is proportionate, reliable, privacy-preserving, and non-discriminatory; and
- [ ] whether a safer design can reduce the need to collect additional age data.

Do not collect identity documents, exact dates of birth, or extra profiling data merely because Article 28 exists. Article 28(3) expressly says compliance does not oblige online platforms to process additional personal data to assess whether a recipient is a minor.

## 8. Article 28(2): no profiling-based ads to known minors

Where Article 28(2) applies, TycoonX must not present advertisements based on profiling using the recipient's personal data when CK-Labs is **aware with reasonable certainty that the recipient is a minor**.

The prohibition must fail safe across ad vendors and mediation layers. If production knows with reasonable certainty that a user is a minor:

- [ ] do not send that user into a profiling-based ad audience;
- [ ] do not substitute another identifier to recreate the same profile;
- [ ] do not treat parental purchase approval as consent to profiling-based advertising;
- [ ] do not treat an App Store or Google Play purchase as advertising permission; and
- [ ] do not infer that a user who refuses tracking must therefore be an adult or a fraud risk.

Article 28(3) means CK-Labs should not collect extra personal data merely to create a more detailed advertising profile under the label of age assurance.

## 9. Article 19 micro/small exclusion must be implemented honestly

If CK-Labs currently qualifies for Article 19's micro/small-enterprise exclusion and is not a VLOP, the correct operational position is:

- retain evidence supporting the exclusion;
- do not falsely market TycoonX as having a statutory Article 26/27/28 system that does not currently apply;
- keep Apple, Google Play, GDPR, TDDDG, consumer, youth-protection, and ordinary safety requirements active where they independently apply;
- design ad/recommendation architecture so that loss of the exemption can be handled without rebuilding the service from scratch; and
- re-run the legal analysis promptly when the enterprise-size status or feature scope changes.

The safest founder position is precise scope, not over-compliance theatre and not `small business means no rules`.

## 10. Apple App Store ad-policy parity

Apple's current App Review Guidelines independently require, among other things, that display ads be appropriate for the app's age rating, that users can see the information used to target them for an ad without leaving the app, that targeted or behavioural advertising is not based on sensitive user data in prohibited cases, and that ads include a way to report inappropriate or age-inappropriate ads where the guideline applies.

Apple also places stricter restrictions on apps in the Kids Category, including restrictions on third-party analytics and third-party advertising, subject to the limited cases Apple describes.

For TycoonX:

- [ ] keep App Store age-rating and actual ad inventory consistent;
- [ ] do not treat Apple ATT permission as a substitute for DSA/GDPR/TDDDG compliance;
- [ ] do not treat DSA compliance as a substitute for ATT where ATT independently applies;
- [ ] provide any Apple-required ad-reporting path if ads are displayed; and
- [ ] reassess the Kids Category rules before ever selecting or marketing TycoonX as a Kids Category app.

A denial of ATT, optional analytics consent, or advertising personalisation must not remove purchased Diamonds, 30-Day VIP, Lifetime VIP, account security, purchase restoration, or ordinary Support access.

## 11. Google Play ad and Families-policy parity

Google Play's current Families Policy Requirements independently regulate advertising and monetisation when children are in the declared target audience. The policy includes ads, cross-promotions, offers for in-app purchases, and other commercial content, and imposes additional requirements on ads shown to children or users of unknown age.

Where the Google Play Families rules apply, among other things:

- [ ] advertising/monetisation is clearly distinguishable from game content;
- [ ] ads to children or users of unknown age do not use interest-based advertising or remarketing;
- [ ] applicable child-directed ad SDK requirements are satisfied;
- [ ] ad content is age-appropriate;
- [ ] prohibited device identifiers are not transmitted from children or users of unknown age; and
- [ ] target-audience declarations match the actual shipped experience.

Do not add children to the Google Play target audience casually. Conversely, do not declare an adult-only target merely to evade Families requirements if the actual product design, marketing, content, or intended audience makes that declaration inaccurate.

A Google Play policy classification does not decide DSA Article 19, 26, 27, or 28 scope by itself. Keep the analyses separate and reconcile the stricter applicable requirement in production.

## 12. Xsolla and CK-Labs commercial messages are separate from DSA platform ads

Xsolla checkout merchandising, CK-Labs webshop promotions, Diamond bundles, 30-Day VIP, and Lifetime VIP sales windows can trigger consumer, promotion, tax, pricing, privacy, or provider requirements without automatically becoming Article 26 DSA advertisements.

If CK-Labs ever sells paid placement inside a qualifying TycoonX online-platform surface, however, an Xsolla or other payment record for that placement must not be used to hide the identity of the advertiser or payer where Article 26 requires disclosure.

Payment-provider transaction records and advertising-transparency records have different purposes. Do not publish private Xsolla order identifiers, payment tokens, card data, billing addresses, tax identifiers, or other unnecessary payment data in an ad label or targeting explanation.

## 13. Recommendation and advertising systems must not become entitlement authorities

Advertising and recommender systems are not authoritative purchase ledgers.

- A targeting or ranking bug must not delete, grant, or duplicate **purchased Diamonds**.
- A recommendation experiment must not restart, pause, shorten, extend, or duplicate the original one-time **30-Day VIP** period.
- Ad-personalisation state, age-assurance state, or a recommendation option must not create an expiry, downgrade, replacement, or duplicate of **Lifetime VIP**.
- A vendor retry, ad callback, recommendation job, or analytics event must never replay Apple, Google Play, or Xsolla purchase entitlements.
- An ad-policy violation by a third-party advertiser is not evidence that the player committed payment fraud, exploit abuse, chargeback abuse, or regional-price abuse.

If a commercial campaign is itself fraudulent or unlawful, act on the relevant advertiser/content/payment relationship without automatically clawing back unrelated player entitlements.

## 14. Data minimisation and system separation

For ad targeting and recommender systems:

- [ ] maintain an inventory of inputs actually used;
- [ ] map the legal basis and device-access basis where personal/device data are involved;
- [ ] keep special-category data out of profiling-based advertising where Article 26(3) applies;
- [ ] keep known-minor profiles out of profiling-based advertising where Article 28(2) applies;
- [ ] prevent fraud/security features from silently becoming ad-targeting features;
- [ ] document retention for ad/recommendation logs separately from purchase, fraud, and moderation evidence; and
- [ ] delete or de-identify data when the relevant lawful purpose ends, subject to legitimate retention obligations.

Do not make a user accept personalised advertising as a hidden condition for restoring an entitlement, using Support, exercising a consumer right, or securing a compromised account.

## 15. Release and regression scenarios

Before enabling any materially new paid-placement, social-feed ranking, or minor-accessible recommendation feature, test at least the relevant scenarios below.

1. **CK-Labs house promotion only**: classify it correctly without automatically labelling it a DSA Article 26 advertisement.
2. **Paid third-party placement**: advertiser, payer, ad label, and main targeting parameters are visible where Article 26 applies.
3. **Different payer**: advertiser and paying agency are both identified where required.
4. **User commercial communication**: declaration functionality and public marking work where Article 26(2) applies.
5. **Special-category segment**: system rejects profiling-based ad targeting using GDPR Article 9(1) data where Article 26(3) applies.
6. **Chronological community feed**: do not invent Article 27 recommender disclosures if there is no qualifying automated prioritisation.
7. **Ranked community feed**: main ranking parameters and user controls are documented before launch where Article 27 applies.
8. **Ranking-model update**: public description remains materially accurate after the model or weighting logic changes.
9. **Minor known with reasonable certainty**: no profiling-based advertisement is served where Article 28(2) applies.
10. **Unknown age**: do not infer adulthood merely to preserve an advertising profile.
11. **Age assurance**: collect no more age data than is proportionate and necessary for the actual purpose.
12. **Apple ad flow**: targeting information/reporting and age-rating requirements are reconciled with the shipped ad SDK/inventory.
13. **Google child/unknown-age flow**: applicable Families ad, identifier, and SDK restrictions are enforced before any prohibited transmission.
14. **ATT/consent refusal**: core game and paid entitlements remain available subject to ordinary product rules.
15. **Vendor outage**: default behavior does not silently switch a known minor to personalised ads or lose required ad labels.
16. **Duplicate callback**: ad/recommendation retries cannot replay a Diamond or VIP entitlement.
17. **Micro/small status loss**: Article 19 transition and new Section 3 obligations are identified from a dated legal-status change.
18. **Feature no longer public platform-like**: remove unnecessary statutory claims rather than keeping misleading boilerplate.

## 16. Evidence pack

Keep a lightweight dated evidence pack containing, as applicable:

- the DSA feature-classification matrix;
- the current Article 19 enterprise-size assessment;
- ad inventory and whether each placement meets Article 3(r);
- advertiser/payer/targeting-label screenshots;
- ad-targeting parameter inventory;
- special-category-data exclusion evidence;
- minor-targeting exclusion evidence;
- recommender-system architecture and main-parameter description;
- user recommendation-control screenshots;
- Apple ad/age-rating/reporting review evidence;
- Google Play target-audience/Families policy review evidence;
- vendor/SDK versions materially affecting advertising or recommendations;
- regression-test results; and
- canonical/localized legal-document review evidence when a disclosure change is required.

Do not retain more personal data than necessary merely to prove that the compliance test was performed.

## 17. Change triggers

Re-run this gate if any of the following happens:

- CK-Labs loses or may lose Article 19 micro/small status;
- TycoonX becomes or may become a DSA online platform for a materially new feature;
- CK-Labs accepts paid third-party placement, sponsorship, boosted content, or creator commercial communications;
- a community/search/feed/gallery/profile discovery surface becomes algorithmically ranked;
- ranking criteria or recommendation controls materially change;
- a new advertising, analytics, recommendation, moderation, or age-assurance SDK is introduced;
- the declared App Store/Google Play age or target audience changes;
- TycoonX becomes primarily directed at or predominantly used by minors for a relevant feature;
- the Commission, Bundesnetzagentur, Apple, or Google changes materially relevant rules; or
- a business transfer or successor operator changes enterprise size, platform scope, or ad/recommendation architecture.

## 18. Founder-protective rule

Do not promise more than the law requires, but do not rely on labels to avoid duties that genuinely apply.

For each TycoonX feature, classify DSA scope first, preserve evidence for any Article 19 exclusion, distinguish CK-Labs house promotions from DSA-paid advertisements, explain real recommender logic only when a qualifying system exists, block prohibited profiling-based advertising, protect minors proportionately, keep Apple/Google rules separate, and keep all advertising/recommendation state technically isolated from Diamonds and VIP entitlement authority.

Mandatory consumer, privacy, child-safety, platform, and other non-waivable rights remain unaffected.