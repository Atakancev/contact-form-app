# TycoonX DSA Article 14 Terms, Moderation & Fundamental-Rights Release Gate

**Status:** P0 legal / moderation / platform release gate  
**Owner:** CK-Labs  
**Last reviewed:** September 2, 2026  
**Scope:** TycoonX community, chat, profile, company/union and other user-generated-content features that may qualify as intermediary or hosting services under Regulation (EU) 2022/2065 (Digital Services Act, "DSA").

## Purpose

This gate closes the operational gap between the public TycoonX Terms / Community Standards and the full set of DSA Article 14 controls that may apply when CK-Labs provides an intermediary service.

It is deliberately founder-protective without creating unfair or unenforceable powers. CK-Labs may moderate, automate triage, impose proportionate restrictions, investigate abuse, protect users and remove content under transparent lawful rules. At the same time, Article 14 does not permit hidden restrictions, arbitrary enforcement, misleading automation claims, or a generic "we can remove anything for any reason" policy.

This gate is an implementation and evidence control. It does **not** by itself amend the canonical player-facing Terms, Purchases & Refunds Policy, Privacy Policy or Community Standards. If a future implementation requires a material public wording change, update the canonical English document first and reopen only the affected localized document type in `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`.

TycoonX has been in full release since **September 1, 2026**. Current player-facing copy must not describe the live service, current users, purchases, VIP, Diamonds or rewards as a beta service.

## 1. Article 14 scope is feature-specific, but it is not a small-business optional extra

Before relying on this gate, classify the relevant TycoonX feature:

- whether CK-Labs is merely providing its own content/service;
- whether it stores information supplied by a recipient at that recipient's request and therefore may provide hosting;
- whether it disseminates stored recipient information to the public and may also qualify as an online platform; and
- whether another DSA classification or exception changes the analysis.

Examples that require assessment include public chat, group/company/union content, profile text, comments, public creative content and direct/private messaging. A private finite-recipient message is not automatically an online-platform publication merely because it is stored, but it can still involve hosting functionality.

Article 14 is part of the DSA's general obligations for intermediary services. Do **not** treat CK-Labs' possible micro- or small-enterprise status as an exemption from Article 14 itself. The separate Article 19 size exemption can affect additional online-platform duties in Section 3; it does not erase the Article 14 terms-transparency and enforcement rules that apply to an intermediary service.

## 2. Article 14(1): public terms must describe the real restriction system

For each in-scope feature, the publicly available TycoonX Terms and/or Community Standards must clearly explain the restrictions CK-Labs may impose on information supplied by users.

The disclosure must cover the real system, including as applicable:

- what categories of content or conduct are prohibited or restricted;
- the policies, procedures and measures used for content moderation;
- relevant tools such as user reports, rate limits, keyword or pattern filters, classifiers, anti-spam systems, security signals and fraud/abuse signals;
- whether algorithmic or automated means can detect, prioritize, classify, restrict or otherwise contribute to moderation decisions;
- where human review is used or available;
- the kinds of content, feature, transaction, service or account restrictions that may result;
- the rules of procedure for any internal complaint/review mechanism that actually exists; and
- any material limits needed so users can understand how the rules affect their use of the feature.

The public explanation must be **clear, plain, intelligible, user-friendly and unambiguous**. It should be specific enough to be meaningful without publishing security details that would materially enable evasion, exploitation, phishing, fraud or attacks.

### Founder-protective rule

CK-Labs does not need to disclose classifier thresholds, blocklists, fraud weights, internal prompts, exact detection signatures, security secrets or other details where disclosure is not legally required and would materially weaken enforcement or security. But "security" is not a reason to hide the existence or general role of automated moderation where Article 14 requires that information.

## 3. Public availability, easy access and machine readability

Where Article 14(1) applies, the relevant terms must be publicly available, easily accessible and in a machine-readable format.

Release requirements:

- the current Terms and Community Standards must be reachable without requiring a player to open a support ticket;
- links from relevant legal/community surfaces must not lead to dead pages or outdated copies;
- the substantive text must be available as real text, not only as screenshots, scanned images or a flattened image-only document;
- headings, paragraphs and links should remain semantically structured in the web version so ordinary assistive and machine-reading tools can parse them; and
- if CK-Labs later adds a downloadable format, it must not become the only usable version if that format is not reasonably machine-readable or accessible.

Article 14 does not prescribe one universal file extension for ordinary intermediary-service terms. The release evidence should therefore prove the actual published HTML/text can be retrieved and parsed, rather than assuming that the label "web page" alone proves compliance.

## 4. Production moderation must match the published explanation

Do not publish a human-review model if production is actually fully automated for the relevant decision. Do not publish "automated tools only prioritize reports" if a classifier can in fact automatically remove content, mute users or trigger account suspension.

Maintain a lightweight moderation-tool inventory containing, for each material system:

- function and affected feature;
- whether it detects, prioritizes, recommends or directly acts;
- whether a human reviews before or after the action;
- possible restriction types;
- escalation route;
- material false-positive safeguards;
- current version/date; and
- whether the public Terms/Community Standards accurately describe its role at the necessary level.

A provider change, model change or new automated action path must trigger an Article 14 disclosure-parity check before production rollout where the change makes the public description materially inaccurate.

## 5. Internal complaint wording must be truthful

The existing TycoonX Community Standards permit a user to contact TycoonX Support to challenge a moderation or enforcement decision unless another route is provided.

Keep three concepts separate:

1. a voluntary Support review CK-Labs offers as a practical user-support route;
2. a DSA Article 20 internal complaint-handling system, if and when that online-platform duty applies to the relevant service and CK-Labs; and
3. DSA Article 21 certified out-of-court dispute settlement, if and when applicable.

Do not label ordinary Support as a statutory Article 20 complaint system unless it actually satisfies the applicable Article 20 requirements. Conversely, if Article 20 becomes applicable, do not leave the public terms describing only an informal Support route while production operates a different statutory process.

Article 14(1) requires the terms to describe the rules of procedure of the internal complaint-handling system that is applicable. The wording must match reality and the separate Article 20/21 release gate.

## 6. Article 14(2): significant terms changes require notice

Recipients must be informed of significant changes to the terms and conditions where Article 14(2) applies.

Treat as potentially significant, for example:

- a new category of prohibited UGC;
- a materially broader account or content restriction;
- a shift from human review to automatic enforcement for a meaningful category;
- a materially different complaint/review route;
- a new age-based restriction on a community feature; or
- a change that directly affects users' ability to use a community or social feature.

Route these changes through `TYCOONX_LEGAL_DOCUMENT_CHANGE_NOTICE_RELEASE_GATE.md`.

Do not rely on a silent file replacement. Keep the version that governed the relevant historical decision identifiable, preserve the effective date, and avoid retroactively treating conduct that was allowed under the earlier rule as a violation solely because the policy changed later.

## 7. Article 14(3): minor-understandable terms are a conditional duty, not boilerplate

If an in-scope intermediary service is **primarily directed at minors or predominantly used by minors**, Article 14(3) requires CK-Labs to explain the conditions for and restrictions on use in a way minors can understand.

Release control:

- document whether the Article 14(3) threshold is met for the relevant TycoonX feature;
- use real evidence such as intended audience, product design, age settings, platform rating/targeting, known age distribution where lawfully available and other relevant circumstances;
- if the threshold is met, provide an age-appropriate explanation of the applicable conditions/restrictions rather than pointing only to dense adult legal text;
- preserve the legal meaning while simplifying vocabulary, sentence structure and examples;
- do not use a child-facing summary to hide material restrictions, complaint rights or safety consequences; and
- keep the full legal terms available alongside the understandable explanation.

A service that merely permits some minors is not automatically "primarily directed at" or "predominantly used by" minors. Do not claim the Article 14(3) threshold is met or not met without a recorded assessment.

If the threshold later changes because TycoonX's audience or feature design changes, re-run the assessment before relying on an old conclusion.

## 8. Article 14(4): enforcement must be diligent, objective and proportionate

Where Article 14 applies, CK-Labs must act in a **diligent, objective and proportionate** manner when applying and enforcing the disclosed restrictions, with due regard to the rights and legitimate interests of all parties involved, including recipients' fundamental rights such as freedom of expression and media freedom/pluralism and other Charter rights.

For a material moderation decision, assess factors such as:

- the specific rule or legal basis involved;
- the actual content/conduct and surrounding context;
- severity and realistic harm;
- whether the conduct is isolated, repeated or coordinated;
- whether the user appears to be intentionally evading restrictions;
- safety, fraud, security or evidence-preservation urgency;
- whether a narrower action would address the problem;
- scope and duration of the restriction;
- impact on the affected user and other users;
- available contrary evidence or obvious ambiguity;
- prior relevant warnings where appropriate; and
- whether human review is appropriate or legally required for a close or high-impact case.

A permanent account termination should not be the automatic response to every low-severity content issue. A content-specific violation can often justify content removal or a temporary feature restriction without requiring loss of the whole account.

### Lawful but policy-prohibited content

CK-Labs can maintain lawful private community rules that are stricter than the minimum criminal/civil-law threshold, provided those restrictions are lawful, transparent and enforced consistently and proportionately.

Do not tell a user their content was "illegal" if the actual basis was only a TycoonX Community Standards rule. Keep the statement of reasons accurate about whether the action rests on law, contractual policy, or both.

### Context-sensitive speech

The canonical Community Standards already state that ordinary criticism, disagreement, satire, competitive game talk and isolated mild profanity are not automatically prohibited merely because another user dislikes them. Production classifiers and reviewer playbooks must preserve that distinction rather than converting a broad toxicity score into automatic certainty.

## 9. Automation can assist enforcement, but it must not erase accountability

Automated tools may lawfully support TycoonX moderation where appropriate. Their use does not by itself make a decision unfair, and CK-Labs is not required to manually pre-screen every item of UGC.

Controls:

- distinguish detection/triage from final enforcement;
- record when automation materially contributed to a restriction where needed for Article 17 or other applicable transparency duties;
- use confidence thresholds and escalation appropriate to the severity of the action;
- avoid permanent high-impact actions based solely on an unreliable or untested signal where a reasonable review path is feasible or legally required;
- allow later evidence to reverse or narrow a wrong restriction;
- test known false-positive classes such as quoted abuse, satire, reclamation/context, multilingual slang and competitive game language where relevant; and
- do not infer payment fraud, chargeback abuse or exploit use merely from a content-moderation classifier unless independent evidence supports that conclusion.

## 10. Emergency and security restrictions remain possible

Article 14(4) proportionality does not prevent CK-Labs from taking immediate temporary protective action where reasonably necessary to protect a person, payment system, game integrity, evidence or infrastructure.

Emergency controls should:

- be scoped to the real risk where practical;
- preserve a timestamp and reason;
- distinguish temporary containment from a final finding;
- be reviewed once the emergency basis changes or sufficient evidence becomes available;
- provide the statement of reasons and redress information required by applicable law; and
- avoid turning a temporary safety hold into permanent forfeiture of unrelated paid value without a separate lawful basis.

## 11. Paid-product and entitlement isolation

A UGC or moderation decision does not automatically rewrite a purchase transaction.

Unless a separate lawful Terms, payment, legal-order or consumer-law basis supports a broader consequence:

- removing a message must not remove unrelated legitimately purchased Diamonds;
- a chat mute must not restart, extend, shorten or duplicate the original one-time **30-Day VIP** period;
- a content restriction must not create a hidden expiry for **Lifetime VIP** or convert it to 30-Day VIP;
- an Article 14 complaint or challenge must not itself be classified as chargeback, entitlement, regional-pricing or promotion abuse; and
- a moderation-system retry must not replay Apple, Google Play or Xsolla entitlement events.

A lawfully terminated account can have separate contractual consequences under the Terms, but those consequences require the account-enforcement and paid-product analysis that applies to the actual case. The moderation flag itself is not a universal payment clawback instruction.

## 12. Apple, Google Play and Xsolla boundaries

Apple and Google Play impose their own UGC, reporting, blocking, filtering, age-safety and platform-review requirements. Those rules may require additional product behavior, but platform compliance does not replace an applicable DSA Article 14 duty owed by CK-Labs.

Xsolla is primarily relevant to payment/checkout processing. A player buying through Xsolla does not transfer CK-Labs' responsibility for moderation of TycoonX community content to Xsolla.

Provider policy changes can justify prospective changes to TycoonX moderation or feature design. If the public moderation rules materially change as a result, run the Article 14(2) significant-change and localization checks rather than relying on a provider's terms as silent incorporation.

## 13. Privacy and evidence separation

Moderation transparency does not mean publishing reporter identities, private messages, security evidence or personal data unnecessarily.

For moderation records:

- process only data reasonably necessary for the applicable moderation, safety, fraud/security, legal, complaint or evidence purpose;
- limit reviewer access by role where practical;
- keep reporter identity confidential unless disclosure is lawful and necessary;
- retain records for a documented lawful period rather than indefinitely by default;
- apply GDPR automated-decision safeguards separately where Article 22 or another applicable rule is triggered; and
- ensure any public DSA transparency output contains only the information permitted for that public disclosure.

## 14. Localization trigger

This gate does not itself change the current canonical Community Standards meaning, so the completed localization queue remains closed.

If CK-Labs later materially changes the public Community Standards to implement this gate, for example by adding a materially new restriction, complaint procedure, automation role or Article 14(3) child-facing explanation that changes legal meaning:

1. update canonical English first;
2. reopen **Community Standards only** in `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`;
3. synchronize in this exact order: `tr`, `de`, `es`, `es_MX`, `fr`, `fr_CA`, `it`, `pt`, `pt_BR`, `ru`, `ja`, `ko`, `zh`, `zh_Hans`, `zh_Hant`, `ar`, `nl`, `sv`, `nb`, `pl`, `th`, `vi`, `uk`, `hi`, `id`;
4. keep locale variants genuinely localized;
5. preserve Arabic RTL layout; and
6. close each localized document only after its legal meaning matches canonical English.

## 15. Release evidence packet

Before declaring Article 14 production parity, retain a dated evidence packet containing at least:

- feature-by-feature DSA classification;
- current public Terms and Community Standards URLs and version identifiers;
- proof that the relevant public text is accessible without a support request and is machine-readable;
- moderation-tool inventory and human-review map;
- current complaint/review procedure and its public description;
- Article 14(3) minors-threshold assessment per material feature;
- sample moderation reason records for low-, medium- and high-impact actions;
- sample proportionality/fundamental-rights review for a severe restriction;
- significant-change notification evidence when Article 14(2) was triggered;
- false-positive/automation regression results;
- entitlement-isolation test results; and
- owner/date for the next review.

Do not retain unnecessary personal data merely to create compliance evidence. Use synthetic or redacted examples where account-specific evidence is not required.

## 16. Minimum regression scenarios

| Scenario | Expected result |
| --- | --- |
| Public Terms opened while logged out | Current terms/community rules are reachable as real text and can be parsed |
| New moderation classifier only prioritizes reports | Public disclosure remains accurate; no claim that it directly bans users |
| New classifier begins auto-muting accounts | Article 14 disclosure-parity check occurs before rollout; automation role is not hidden |
| Ordinary criticism or competitive game talk | Not automatically prohibited solely because a toxicity signal fires |
| Serious credible threat | Immediate proportionate protective action can occur; Article 18 and other safety routes assessed separately |
| Single low-severity rule violation | Narrower content/feature action considered before permanent account termination |
| User challenges a moderation action | Actual Support/statutory complaint route is described truthfully and routed correctly |
| Article 20 currently exempt but voluntary Support review exists | Support is not falsely presented as a statutory Article 20 system |
| CK-Labs later loses a relevant Article 19 size exemption | Article 20/21 and other Section 3 duties are re-audited; Article 14 wording stays truthful |
| Significant new prohibited-content rule | Recipients receive required significant-change notice; historical policy version remains identifiable |
| Feature is primarily directed at or predominantly used by minors | Conditions/restrictions receive an age-understandable explanation while full terms remain available |
| Feature is not primarily directed at or predominantly used by minors | Evidence records that conclusion; CK-Labs does not falsely claim Article 14(3) is triggered |
| Message removed for Community Standards breach only | Reason identifies the policy basis and does not falsely label content illegal |
| User receives chat mute | Unrelated purchased Diamonds and paid entitlements remain unchanged absent a separate lawful basis |
| Moderation retry or duplicate event | No duplicate restriction and no replay of Apple, Google Play or Xsolla entitlement events |
| Provider/community-tool outage | Temporary fallback is documented; stale public automation claims are not silently left in place after a material workflow change |

## 17. Release blockers

Treat Article 14 production parity as **not ready** for an in-scope feature if any of the following is true:

- public terms materially misdescribe how moderation actually works;
- a significant new restriction is deployed without the required Article 14(2) notice;
- the terms are available only through a login/support request or only as non-readable images;
- a feature meets the Article 14(3) minors threshold but there is no understandable explanation for minors;
- severe restrictions are applied through a workflow that cannot support diligent, objective and proportionate review;
- a moderation classifier can silently create permanent account/payment consequences outside the disclosed/legal workflow;
- Support is represented as a statutory Article 20 procedure when it is not one;
- Article 17 reason statements or Article 20/21 redress are suppressed merely because CK-Labs is small; or
- a moderation action can automatically erase unrelated Diamonds or alter 30-Day VIP / Lifetime VIP without a separate lawful basis.

## 18. Current-law references

Primary sources to re-check before a material release or policy redesign:

- Regulation (EU) 2022/2065, Article 14 and related recitals: `https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng`
- Bundesnetzagentur, duties of intermediary services / DSA general obligations: `https://www.bundesnetzagentur.de/DE/Fachthemen/DSC/1_Themen/PflichtenVermittlunggsdienste/start.html`
- `TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST.md`
- `TYCOONX_DSA_ARTICLE_20_21_REDRESS_RELEASE_GATE.md`
- `TYCOONX_DSA_INTERMEDIARY_LIABILITY_AUTHORITY_ORDERS_RELEASE_GATE.md`
- `TYCOONX_LEGAL_DOCUMENT_CHANGE_NOTICE_RELEASE_GATE.md`
- `TYCOONX_GDPR_AUTOMATED_DECISION_RELEASE_GATE.md`
- `TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md`

## 19. Brand and release invariant

Player-facing and legal prose must display the game name exactly as **TycoonX**. Technical paths and filenames containing `tyconx` may remain where changing them could break routes or references.

TycoonX entered full release on **September 1, 2026**. Production Terms, Community Standards, moderation notices, appeal copy and support copy must describe the live service accordingly.
