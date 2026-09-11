# TycoonX DSA Hosting & Content Moderation 2026 Gate

Last reviewed: **September 11, 2026**  
Operator: **CK-Labs**  
Status: **classification and operational compliance gate**

TycoonX has been in full release since **September 1, 2026**. This gate must not be read as describing the current service, users, purchases, VIP, Diamonds, rewards or legal terms as a pre-release service.

## 1. Why this gate exists

TycoonX is not only a tycoon/business simulation. It also stores and displays information supplied by players through public chat, country chat, profiles, creator content, Music, Books, social spaces, Company and Union chat, Executive Company Chat, Post Office and other communication or creator features.

The existing TycoonX legal wording already preserves applicable Digital Services Act rights and states that CK-Labs may use automated and human moderation. That is useful, but it does not by itself prove that the operational service satisfies Regulation (EU) 2022/2065, the Digital Services Act (DSA).

This gate therefore separates three questions that must not be collapsed into one:

1. Which TycoonX features qualify as an intermediary service or hosting service under the DSA?
2. Which, if any, qualify as an online platform because user-provided information is disseminated to the public?
3. Which duties apply to CK-Labs at its actual size and service classification?

Do not assume that a game is outside the DSA merely because gameplay is its main purpose. Equally, do not automatically classify the whole game as an online platform merely because it contains chat or creator features. Classification is feature- and fact-dependent.

## 2. DSA classification map for TycoonX

Under Article 3(g) DSA, a hosting service stores information provided by, and at the request of, a recipient of the service.

Under Article 3(i), an online platform is a hosting service that, at the request of a recipient, stores and disseminates information to the public, unless the public-dissemination functionality is a minor and purely ancillary feature of another service and the statutory conditions for that exception are satisfied.

For TycoonX, the following features require explicit classification rather than assumption:

- **Public and country chat:** player text is stored and made available to a broad audience. This is a strong candidate for hosting and potentially online-platform functionality.
- **Public profiles and creator listings:** player-supplied profile, Art, Music, Book and similar information may be visible to an open or potentially unlimited player audience. These are strong candidates for hosting and potentially online-platform functionality.
- **Public creator comments, reviews or reactions, where enabled:** classify in the same way as other publicly disseminated user-provided information.
- **Company, Union and Executive Company Chat:** these are clearly user-provided stored information, but the audience is restricted. They can still be hosting functionality even where they are not dissemination to the public.
- **Private rooms, admitted meeting rooms and restricted social tables:** do not call these public merely because many users may participate. DSA "dissemination to the public" depends on the audience and admission mechanics.
- **Post Office and direct communications:** storage of user-provided information may still be hosting, while private recipient-to-recipient delivery does not automatically make the feature an online platform.
- **Server-generated game news, NPC content and CK-Labs editorial content:** do not classify these as user-generated hosting merely because they appear beside UGC.

**Required classification evidence:** maintain a short internal record for every material UGC surface describing who supplies the information, who stores it, who can receive it, whether access is automatic or individually admitted, whether it can be reached by a potentially unlimited number of third parties, and whether the dissemination feature is genuinely minor and purely ancillary to the principal service.

Do not use the "minor and purely ancillary" exception as a convenience label. If public social or creator features become a meaningful attraction, retention loop, economy surface or product promise, re-evaluate the classification.

## 3. Duties that may apply even to a small operator

A small-company assumption must not be used as a blanket DSA exemption.

If TycoonX qualifies as an intermediary service, Article 11 and Article 12 require appropriate contact points. Article 14 governs terms and conditions. If a TycoonX feature qualifies as hosting, Articles 16, 17 and 18 contain hosting-specific duties.

The DSA micro/small-enterprise exclusions do **not** automatically switch off all of these baseline duties.

### Article 11 - authority contact point

Where applicable, CK-Labs must have a single electronic point of contact for Member State authorities, the European Commission and the European Board for Digital Services. The necessary information must be publicly available, easy to access and kept current. The supported communication languages must satisfy Article 11.

Do not use a player-facing AI support bot as the sole Article 11 authority channel.

### Article 12 - player/user contact point

Where applicable, recipients of the service must be able to communicate directly and rapidly with CK-Labs electronically and in a user-friendly way. The communication method must not rely solely on automated tools.

TycoonX may use automation to triage reports, but a user must not be trapped permanently inside an AI-only loop where Article 12 applies.

### Article 14 - terms and moderation transparency

Where applicable, the Terms must describe restrictions imposed in relation to information supplied by users, including the policies, procedures, measures and tools used for content moderation. This includes relevant algorithmic decision-making, human review and the rules of any internal complaint-handling system.

The information must be clear, plain, intelligible, user-friendly and unambiguous, and publicly available in an easily accessible and machine-readable format.

Significant changes to those terms must be communicated as required by Article 14(2).

The current TycoonX wording already says that moderation can be automated or human and that reports or AI flags are signals rather than automatic proof. Preserve that. If DSA classification confirms Article 14 applies, the canonical Terms should be rechecked for enough operational detail about reporting, moderation, reasons and complaint handling, then any material canonical change must be synchronized across all 25 localized Terms in the required locale order.

If TycoonX is primarily directed at minors or predominantly used by them, Article 14 contains an additional requirement to explain conditions and restrictions in a way minors can understand. Do not collect extra age data merely to avoid a classification question.

## 4. Article 16 - illegal-content notice and action

If a TycoonX feature is a hosting service, the ordinary "Report" button used only for Community Standards complaints is not automatically sufficient for Article 16.

Where Article 16 applies, CK-Labs needs an electronic mechanism that is easy to access and user-friendly and that enables sufficiently precise and adequately substantiated notices of allegedly illegal content.

The process must support, as applicable:

- identification of the specific content or location being reported;
- a sufficiently substantiated explanation of alleged illegality;
- required notifier contact information subject to the statutory exceptions;
- the notifier's bona-fide confirmation required by Article 16;
- confirmation of receipt without undue delay where contact information is available;
- a decision notification without undue delay;
- information on available redress; and
- disclosure where automated means were used for processing or decision-making.

Notices must be processed in a timely, diligent, non-arbitrary and objective manner.

**TycoonX implementation rule:** retain separate report reasons for "illegal content" and ordinary "violates TycoonX Community Standards" where useful. A user should not have to guess which category applies, but the backend must preserve enough structured context to determine the legal basis and response workflow.

A report is a signal, not proof. Do not automatically suspend a user merely because a report was submitted.

## 5. Article 17 - clear and specific reasons for moderation restrictions

If Article 17 applies, a generic message such as "Your content violated our rules" is not an adequate default for every restriction.

When CK-Labs restricts user-provided information because it considers the information illegal or incompatible with the Terms, the affected recipient should receive a clear and specific statement of reasons as required by Article 17.

The moderation decision record should be capable of supporting, where relevant:

- what restriction was imposed, such as removal, access disabling, demotion or another visibility restriction;
- any related restriction of monetary payments;
- suspension or termination of the service in whole or in part;
- suspension or termination of the account;
- territorial scope and duration where relevant;
- the material facts and circumstances relied upon;
- whether the decision followed an Article 16 notice or CK-Labs' own investigation;
- the legal ground or exact Terms/Community Standards ground relied upon;
- whether automated means were used, including the role of automated moderation in the decision; and
- available redress possibilities.

Do not disclose reporter identity unless legally permitted and genuinely necessary. Do not expose security-sensitive information, private evidence or personal data merely to make the reason longer.

**Important scope distinction:** not every TycoonX economy correction is automatically DSA content moderation. A server-side correction of duplicated Diamonds, an invalid auction settlement, an exploit-created resource balance or a reversed payment is primarily an economy/payment integrity action unless it is also imposed because user-provided information is illegal or incompatible with the Terms. Preserve consumer, contractual and procedural fairness independently of DSA classification.

## 6. Article 18 - threats to life or safety

If TycoonX qualifies as a hosting service and CK-Labs becomes aware of information giving rise to suspicion that a criminal offence involving a threat to the life or safety of a person has taken place, is taking place or is likely to take place, Article 18 requires prompt reporting to the appropriate law-enforcement or judicial authorities as specified by the DSA.

This is separate from ordinary harassment moderation and separate from GDPR personal-data-breach notification.

Create an internal escalation path for at least:

- credible threats of imminent physical violence;
- credible threats to life;
- information indicating an ongoing serious offence involving personal safety; and
- equivalent high-risk cases that meet the Article 18 threshold.

Do not promise users that every abusive message is reported to police. The Article 18 threshold is specific.

## 7. Micro and small enterprise status does not erase the hosting baseline

Article 19 exempts qualifying micro and small enterprises from most additional obligations in the DSA section for online platforms, subject to the Regulation's exceptions. Article 15 also contains a separate micro/small exemption from the annual transparency-reporting obligation for qualifying providers that are not very large online platforms.

That does not mean Articles 11, 12, 14, 16, 17 and 18 disappear whenever a provider is small.

CK-Labs should therefore record, at least annually and whenever ownership, staffing or financial scale changes:

1. whether it qualifies as a micro or small enterprise under Recommendation 2003/361/EC, including linked/partner-enterprise rules where relevant;
2. whether any 12-month post-threshold transition rule applies;
3. whether TycoonX is an online platform or only contains hosting features; and
4. which additional online-platform duties become applicable if the exemption is lost.

Do not rely only on the number of direct employees. EU SME status can depend on financial thresholds and linked or partner undertakings.

## 8. Growth-triggered online-platform obligations

If a TycoonX UGC surface qualifies as an online platform and CK-Labs does not qualify for the Article 19 exclusion, additional DSA obligations can become relevant, including internal complaint handling, out-of-court dispute settlement, trusted-flagger processing, misuse controls, transparency, interface design, advertising and recommender-system rules, plus protection-of-minors duties where applicable.

Article 24(5) can also require online platforms within scope to send Article 17 moderation decisions and reasons to the European Commission's DSA Transparency Database without personal data.

Do not implement these blindly before classification, but do not wait until a regulator complaint to determine whether the growth threshold has been crossed.

## 9. German enforcement checkpoint

For a provider established in Germany, the Digital Services Coordinator at the Bundesnetzagentur is the central coordinating body for DSA enforcement in Germany.

This is operationally relevant, not merely theoretical. The Bundesnetzagentur's 2025 activity report recorded more than 2,000 complaints, with many concerning inadequate reasons for account/content/service restrictions and user-unfriendly illegal-content reporting systems. In July 2026 the German DSC publicly identified alleged DSA defects in eBay's notice-and-action implementation, including accessibility and user-friendliness of the reporting mechanism.

TycoonX should therefore treat the following as testable product requirements where the DSA applies:

- the illegal-content reporting path is easy to find;
- it works on the actual mobile interfaces used by players;
- it does not require a legal expert to identify the content being reported;
- receipt and outcome messages are generated reliably;
- moderation reasons are specific enough to understand the decision; and
- redress information is not hidden in unrelated support text.

## 10. Automated moderation and AI

TycoonX may use automated moderation, human review or a combination of both. The legal documents must not state or imply that an AI flag is itself conclusive proof of a violation.

Operationally:

- preserve the exact policy/model version used where reasonably necessary for a contested decision;
- record whether the final restriction was automated, human-confirmed or human-initiated;
- retain enough context for meaningful review;
- provide human review where required by applicable law or the applicable complaint procedure;
- distinguish sexual/profane-content moderation from illegal-content assessment;
- avoid silently expanding moderation into unrelated private or economic enforcement; and
- do not use automated moderation to fabricate certainty about intent, account ownership or exploit knowledge.

Account compromise, stale state, translation ambiguity, sarcasm, quoted material and provider outages must remain possible counter-explanations where factually relevant.

## 11. Platform-policy cross-check

DSA compliance does not replace store-policy compliance.

As of this review:

- **Apple App Store:** Guideline 1.2 continues to require UGC/social apps to provide a method for filtering objectionable material, a mechanism to report offensive content with timely responses, the ability to block abusive users and published contact information. Creator content is also treated as UGC for App Review purposes.
- **Google Play:** the current UGC policy requires robust, effective and ongoing moderation, Terms/User Policy acceptance before creating/uploading UGC, definitions and prohibitions of objectionable behavior, in-app reporting, and blocking where the interaction type requires it. Publicly accessible UGC requires in-app reporting of users/content and blocking. One-to-one interaction such as messaging, tagging and mentions requires blocking functionality.

The stricter applicable rule wins. A store's approval of TycoonX does not prove DSA compliance, and DSA compliance does not guarantee continued Apple or Google approval.

Xsolla payment processing does not make Xsolla responsible for TycoonX UGC moderation merely because the same player also bought Diamonds or VIP through the official webshop. Payment-provider responsibilities and content-hosting responsibilities must remain separate.

## 12. Relationship to purchases and entitlements

A content moderation action must not silently rewrite unrelated authoritative purchase history.

For example:

- removing a prohibited chat message does not by itself cancel an unrelated valid Diamond purchase;
- suspending a creator listing does not by itself erase an unrelated one-time 30-Day VIP entitlement;
- a valid Lifetime VIP purchase record does not become fraudulent merely because another piece of user content was removed;
- a lawful full-account suspension can affect access to the Service where the Terms and applicable law allow it, but mandatory consumer remedies remain intact; and
- refunds, chargebacks, reversed payments and entitlement corrections remain governed by their authoritative payment records and the separate purchase/reversal rules.

Where a moderation decision also restricts a content-linked monetary payment and Article 17 applies, include that restriction in the statement of reasons.

## 13. Required evidence model

For every material moderation restriction where the DSA may apply, CK-Labs should be able to reconstruct at least:

- moderation decision ID;
- affected account ID;
- affected content ID and surface;
- public/restricted/private audience classification;
- exact action and duration;
- policy/Terms version;
- legal or contractual basis;
- underlying report ID where applicable;
- whether the report was an illegal-content notice or ordinary standards report;
- timestamps for receipt, review, decision and notification;
- whether automated systems were used;
- human reviewer identity/role where applicable;
- reason text/version sent to the affected user;
- redress information sent;
- restoration/reversal record if the decision changes; and
- escalation record where Article 18 or another legal reporting duty applies.

Do not retain personal data longer merely because this gate lists an evidence field. Retention remains subject to the Privacy Policy, GDPR principles and applicable legal obligations.

## 14. Regression and tabletop tests

Before calling this area operationally ready, verify at least the following:

1. A public chat message can be reported as allegedly illegal content through an easy-to-find path.
2. A Company-chat rule violation can be reported without exposing the restricted conversation to outsiders.
3. A valid Article 16 notice receives an acknowledgement where required.
4. The notifier receives the decision and redress information where required.
5. A user whose public creator content is removed receives a specific reason rather than a generic ban string where Article 17 applies.
6. A user whose account is suspended for user-provided illegal/incompatible content receives the required statement of reasons where Article 17 applies.
7. An automated moderation decision records and communicates the automation fact where required.
8. A successful appeal/restoration creates an auditable reversal without deleting the original evidence.
9. A malicious mass reporter cannot turn reports into automatic sanctions.
10. A compromised account can be distinguished from deliberate abuse when evidence supports compromise.
11. A credible life/safety threat enters the Article 18 escalation path immediately rather than an ordinary slow moderation queue.
12. An ordinary profanity report does not automatically trigger law-enforcement escalation.
13. A moderation action does not alter unrelated RevenueCat, Apple, Google Play or Xsolla purchase records.
14. A Diamond refund/reversal does not masquerade as content moderation.
15. Restricted Company/Union/Executive content remains protected while a report is reviewed.
16. The Article 11 authority contact point is current and reachable where required.
17. The Article 12 user contact point is usable without relying solely on an automated bot where required.
18. The service-size/classification record is current and identifies whether Article 19 exclusions apply.
19. If the Article 19 exclusion no longer applies, the additional online-platform obligations are activated before launch/continued operation at the new scope.
20. All player-facing and legal prose spells the game name exactly as **TycoonX**.

## 15. Canonical/localization decision for this review

No canonical English legal meaning is changed by this gate alone.

The existing `SocialUgcRuleNotice.tsx` already tells players that TycoonX may use automated and human moderation, that reports and AI flags are not automatic proof, that proportionate corrections should distinguish bugs/outages/account compromise from knowing abuse, and that applicable Digital Services Act and appeal rights remain intact.

Because DSA service classification and the exact operational report/reason/complaint implementation still require verification, this review does **not** add speculative detailed DSA procedures to the canonical Terms or duplicate them across all 25 localized Terms.

If the feature-classification review confirms Article 14 applies and the current Terms do not contain enough information about the actual moderation/report/complaint procedure, amend the canonical English Terms first and then synchronize that exact legal meaning across all target locales in this order:

`tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id`.

Arabic must remain RTL and regional language variants must remain genuinely localized.

## 16. Release decision

**Legal wording status:** the current wording preserves DSA rights but this gate identifies a separate operational/classification question that is not proven by legal text alone.

**Operational DSA status:** **not verified**.

Highest-priority next checks are:

1. feature-by-feature intermediary/hosting/online-platform classification;
2. Article 11 and Article 12 contact-point verification;
3. Article 16 illegal-content notice workflow;
4. Article 17 structured statement-of-reasons workflow;
5. Article 18 life/safety criminal-offence escalation procedure; and
6. current micro/small-enterprise status and the resulting Article 19 scope.

Do not increase TycoonX commercial/legal readiness merely because this document exists. Readiness increases only when the corresponding operational controls are verified.

## 17. Official references

- Regulation (EU) 2022/2065, Digital Services Act: https://eur-lex.europa.eu/eli/reg/2022/2065/oj
- European Commission DSA information: https://digital-strategy.ec.europa.eu/en/policies/digital-services-act
- German Digital Services Coordinator, Bundesnetzagentur: https://www.bundesnetzagentur.de/DSC
- Apple App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Google Play User-generated content policy: https://support.google.com/googleplay/android-developer/answer/9876937
