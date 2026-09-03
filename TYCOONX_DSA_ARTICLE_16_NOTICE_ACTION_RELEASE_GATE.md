# TycoonX DSA Article 16 Notice-and-Action Release Gate

**Status:** P0 legal / moderation / platform release gate  
**Owner:** CK-Labs  
**Last reviewed:** September 3, 2026  
**Scope:** TycoonX features that store information supplied by users and may qualify as hosting services under Regulation (EU) 2022/2065 (Digital Services Act, "DSA"), including public or group chat, profile text, company/union content, comments, public creative works and other hosted UGC. Private or limited-recipient features require their own classification rather than being assumed in or out of scope.

## Purpose

This gate closes the operational gap between the public TycoonX Community Standards and the DSA Article 16 notice-and-action requirements.

It is a narrow companion to `TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST.md`, `TYCOONX_DSA_ARTICLE_14_TERMS_MODERATION_RELEASE_GATE.md`, `TYCOONX_DSA_ARTICLE_17_PAYMENT_MODERATION_BOUNDARY_GATE.md`, `TYCOONX_DSA_ARTICLE_20_21_REDRESS_RELEASE_GATE.md`, `TYCOONX_DSA_ARTICLE_22_TRUSTED_FLAGGER_RELEASE_GATE.md`, `TYCOONX_DSA_ARTICLE_23_MISUSE_RELEASE_GATE.md`, and `TYCOONX_DSA_INTERMEDIARY_LIABILITY_AUTHORITY_ORDERS_RELEASE_GATE.md`. It does not replace those controls.

This gate is implementation and evidence guidance. It does **not** by itself amend the canonical player-facing Terms, Purchases & Refunds Policy, Privacy Policy or Community Standards. If implementation later requires materially different public legal meaning, update canonical English first and reopen only the affected localized document type in `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`.

TycoonX has been in full release since **September 1, 2026**. Current player-facing copy must not describe the live service, users, purchases, VIP, Diamonds or rewards as a beta service.

## 1. Article 16 applies at the hosting-service layer

Article 16 sits in DSA Section 2, which contains additional provisions for providers of hosting services, including online platforms.

For each TycoonX UGC or social feature, document whether CK-Labs stores information supplied by a recipient of the service at that recipient's request and therefore provides hosting for that feature. Do not assume that every TycoonX screen is a hosting service merely because it has data, and do not assume a feature is outside hosting merely because it is not publicly searchable.

A feature may qualify as hosting without also qualifying as an online platform. Public dissemination matters to online-platform classification, while Article 16 itself is a hosting-service duty.

### Micro/small-enterprise boundary

Do **not** use the DSA Article 19 micro/small-enterprise exemption to switch off Article 16 for an in-scope hosting service.

Article 19 exempts qualifying micro/small online-platform providers from the additional duties in **Section 3**, subject to its conditions and the VLOP exception. Article 16 is in **Section 2**. Accordingly, a valid Article 19 exemption can affect later online-platform duties such as Articles 20 to 23, but it does not by itself erase Article 16 notice-and-action duties for a TycoonX feature that qualifies as hosting.

This distinction must appear in the internal scope record so a future employee-count or enterprise-status assessment cannot accidentally disable the core illegal-content reporting route.

## 2. The Article 16 mechanism must be genuinely usable

For every in-scope TycoonX hosting feature, the mechanism for notifying alleged illegal content must be:

- easy to access;
- user-friendly;
- available by electronic means;
- capable of identifying the specific hosted item being reported;
- usable without requiring the reporter to guess internal database terminology; and
- designed to facilitate sufficiently precise and adequately substantiated notices.

A generic support inbox can supplement the route, but it is not enough merely to say "email us" if the practical result is that a reporter cannot reliably identify the content, state the legal concern or receive the required acknowledgement and decision information.

### TycoonX-specific location identifiers

The exact electronic location does not always need to be a public web URL. The interface should collect an identifier adapted to the feature, for example:

- chat or message ID;
- profile/user ID plus the specific profile field;
- company or union post/content ID;
- art, music, book or other creative-content ID;
- comment ID;
- public share URL where one exists; or
- another immutable or sufficiently stable locator that lets a diligent reviewer retrieve the exact content.

A screenshot can be useful supporting evidence, but a screenshot alone should not be the only locator where the underlying item can be identified by a stable service-side ID.

## 3. Facilitate the four Article 16(2) notice elements

The Article 16 flow should make it straightforward to submit all required elements:

1. **Why it is allegedly illegal:** a sufficiently substantiated explanation of why the reporter considers the specific information illegal.
2. **Where it is:** the exact electronic location, such as an exact URL or an adapted content/message identifier plus any additional information needed to identify the item.
3. **Who can be contacted:** the reporter's name and email address, subject to the statutory exception described below.
4. **Bona fide confirmation:** a confirmation that the reporter believes in good faith that the information and allegations in the notice are accurate and complete.

Do not replace the first element with a single mandatory category selector that gives the reporter no practical way to explain the alleged illegality. Category selection may support triage, but the mechanism must facilitate an adequately substantiated explanation.

Do not make the location field so web-centric that an in-app message, profile field or creative item cannot be reported simply because it has no normal browser URL.

## 4. Child-sexual-abuse offence reports need the identity exception

Article 16(2)(c) contains an important exception: the mechanism must not require the reporter's name and email address in the case of information considered to involve one of the offences referred to in Articles 3 to 7 of Directive 2011/93/EU.

Implementation control:

- do not block a qualifying child-sexual-abuse/exploitation notice merely because the reporter declines to provide a name or email address;
- do not force a reporter to disclose identifying information as the price of submitting that category of notice;
- if safe optional electronic contact information is supplied, it may be used for legally required receipt/decision communications subject to privacy rules;
- route the content through the separate child-safety, criminal-offence and evidence-preservation procedures where applicable; and
- do not promise anonymity where another mandatory law or lawful authority process requires disclosure.

This exception concerns the Article 16 notice fields. It does not create a public anonymous-posting right and does not prevent CK-Labs from collecting information that another law specifically requires for a different lawful purpose.

## 5. Incomplete reports can still be useful, but do not falsely label them Article 16-complete

TycoonX may receive ordinary community reports that omit one or more Article 16 elements. Those reports should not be discarded automatically when they reveal a credible safety, abuse or legal concern.

Classify them accurately:

- an ordinary Community Standards report can be triaged under the Community Policy;
- a report can be converted into a sufficiently precise Article 16 notice if the missing information is supplied;
- an obviously urgent safety signal can be escalated even if the form is incomplete; and
- a report that does not permit identification of the allegedly illegal item should not be treated as giving CK-Labs magical legal certainty about unspecified content.

Where practical, the interface may ask the reporter to complete a missing locator, explanation or good-faith confirmation rather than silently rejecting the report.

## 6. A notice is not an automatic takedown order

An Article 16 notice is not the same thing as a court order, administrative removal order, trusted-flagger determination, final judicial finding or automatic proof of illegality.

CK-Labs must process notices and decide what to do with the specific information in a **timely, diligent, non-arbitrary and objective** manner.

Possible outcomes include, depending on law, facts and the TycoonX rules:

- no action because the notice is insufficient or the content is not shown to be illegal/policy-prohibited;
- requesting clarification where appropriate;
- restricting or removing the specific content;
- applying a narrower Community Standards action;
- preserving evidence;
- escalating to a specialist/legal/safety review;
- taking urgent temporary protective action; or
- routing the matter into a separate statutory process such as a valid authority order, terrorist-content order, intellectual-property procedure or criminal-offence notification duty.

The German Digital Services Coordinator has also publicly emphasized that providers decide how to respond to notified content under applicable law, while the final binding determination of illegality remains for the competent courts/authorities.

## 7. Article 16(3) actual-knowledge handling is content-specific

A sufficiently complete notice can have important liability consequences.

Under Article 16(3), a notice gives rise to actual knowledge or awareness for Article 6 purposes **with respect to the specific item concerned** when it allows a diligent hosting provider to identify the illegality of the relevant activity or information without a detailed legal examination.

When that threshold is met, Article 6's hosting rule requires expeditious removal or disabling of access to the illegal content for the relevant liability exemption.

Operational rules:

- timestamp receipt and material review events;
- preserve the exact content locator and version reviewed;
- record whether the Article 16(3) threshold was considered met, not met or uncertain;
- if illegality is identifiable without detailed legal examination, do not leave the item live merely to wait for a routine support batch;
- if the issue genuinely requires detailed legal examination, do not falsely state that Article 16(3) itself already established illegality;
- keep the assessment tied to the specific notified item rather than treating one notice as knowledge of every similar post or every item ever created by that user; and
- apply separate urgent safety duties where the facts trigger them.

Article 8 of the DSA also says intermediary providers are not subject to a general obligation to monitor all information they transmit/store or actively seek facts indicating illegal activity. Article 16 therefore requires an effective notice-and-action route; it does not create a blanket instruction to read every TycoonX message proactively.

## 8. Voluntary safety review does not destroy the hosting framework by itself

Under DSA Article 7, good-faith and diligent voluntary own-initiative investigations or measures aimed at detecting, identifying, removing or disabling illegal content do not, solely because CK-Labs performs them, make the provider ineligible for the Article 4 to 6 liability exemptions.

That allows TycoonX to use reasonable user reports, safety classifiers, spam/fraud signals and voluntary review without adopting the false legal position that "we must never look at content or we lose hosting protection."

It does not excuse careless or unlawful moderation, and it does not replace the Article 16 route.

## 9. Confirmation of receipt must be sent without undue delay when contact information exists

Where the notice contains electronic contact information, send a confirmation of receipt **without undue delay**.

The acknowledgement should at minimum allow the reporter to understand:

- that the notice was received;
- which item/report reference it relates to;
- the receipt date/time or another auditable reference;
- that receipt is not a promise of removal or a finding that the content is illegal; and
- how the reporter can provide additional information if the mechanism supports it.

Do not delay acknowledgement until the merits decision is complete.

For an identity-exempt child-safety notice with no electronic contact information, do not invent a requirement that CK-Labs send an acknowledgement to an address it does not have.

## 10. Decision notice to the reporter must also be sent without undue delay

Article 16 requires the provider to notify the individual or entity of its decision regarding the reported information without undue delay and to provide information on possibilities for redress in respect of that decision.

The reporter-side decision notice should accurately describe the outcome at the level law permits, for example content removed, access restricted, no action taken, or another relevant outcome.

It must not disclose unnecessary private data, security evidence, payment records, another player's private communications or internal enforcement secrets.

If automated means were used to process the notice or make the decision, Article 16(6) requires the reporter notification to include information on that use.

## 11. Article 17 reasons to the affected user are a separate communication

If CK-Labs restricts content/account/service/monetisation on the ground that user-provided information is illegal or incompatible with TycoonX rules, assess the separate Article 17 statement-of-reasons duty.

Keep these records separate:

- **reporter communication:** Article 16 receipt and decision/redress information;
- **affected-user communication:** Article 17 reason statement where applicable; and
- **internal evidence:** content, moderation signals, reporter data, legal analysis and security information retained only as lawfully necessary.

Article 17 says the affected-user reason may identify whether the decision followed an Article 16 notice, but notifier identity should be disclosed only where **strictly necessary** and lawful.

Do not copy the reporter's name, email, IP address, private narrative or other personal data into the uploader's reason notice by default.

## 12. Article 20/21 redress depends on online-platform scope and Article 19 status

Article 16 itself is a hosting-service duty. Articles 20 and 21 are additional online-platform redress duties in Section 3 and therefore require a separate scope analysis, including Article 19.

If Article 20 applies, individuals/entities that submitted notices can have access to the statutory internal complaint-handling system for relevant decisions for at least the period required by that Article. If Article 20 is currently exempt because CK-Labs validly qualifies under Article 19, do not falsely advertise ordinary Support as a statutory Article 20 system.

Even where Article 20 does not apply, Article 16(5) still requires the applicable reporter-side decision and redress information. Provide only redress routes that actually exist and are legally applicable.

## 13. Trusted flaggers and misuse are separate layers

If Article 22 applies to the relevant online-platform service, notices from certified trusted flaggers within their designated expertise receive the legally required priority. Do not manufacture trusted-flagger status merely because a reporter is a large organization or sends many notices.

If Article 23 applies, repeated manifestly unfounded notices may support the specific misuse process subject to its warning, proportionality and case-by-case requirements.

A single wrong notice, a notice CK-Labs ultimately rejects, criticism of TycoonX, a refund complaint or a good-faith legal report is not automatically notice abuse.

Link the implementation to:

- `TYCOONX_DSA_ARTICLE_22_TRUSTED_FLAGGER_RELEASE_GATE.md`; and
- `TYCOONX_DSA_ARTICLE_23_MISUSE_RELEASE_GATE.md`.

## 14. Criminal threats to life or safety require an Article 18 check

An Article 16 review can surface information giving rise to a suspicion that a criminal offence involving a threat to the life or safety of a person has taken place, is taking place or is likely to take place.

That scenario requires a separate DSA Article 18 assessment and, where triggered, prompt notification to the appropriate law-enforcement or judicial authority with the relevant information available.

Do not make the reporter responsible for knowing Article 18. The moderation/escalation workflow must recognize the trigger.

Do not turn every abusive message into an Article 18 report. Preserve the statutory threshold and route credible high-risk cases for qualified review.

## 15. Authority orders and terrorist-content orders must not be processed as ordinary Article 16 reports

A court/administrative order under DSA Article 9, a law-enforcement request, or a Terrorist Content Online Regulation removal order has its own authentication, territorial, timing and response rules.

Do not downgrade a valid authority order into the normal community-report queue.

Conversely, a user selecting "illegal" in the TycoonX report interface does not transform that report into a government order.

Use the existing controls:

- `TYCOONX_DSA_INTERMEDIARY_LIABILITY_AUTHORITY_ORDERS_RELEASE_GATE.md`; and
- `TYCOONX_EU_GERMAN_TERRORIST_CONTENT_ONLINE_RELEASE_GATE.md`.

## 16. Intellectual-property reports can need their specialist route

Copyright, trademark and other intellectual-property allegations can constitute illegal-content notices, but they often require specialist evidence, ownership/licensing analysis and statutory procedures.

The Article 16 interface may route those notices into the dedicated IP flow while preserving the Article 16 receipt, locator, decision and redress requirements that apply.

Do not automatically remove a creative work solely because another player says "copyright." Preserve counter-evidence and the applicable `TYCOONX_UGC_COPYRIGHT_URHDAG_RELEASE_GATE.md` controls.

## 17. Payment and entitlement state must remain isolated

An Article 16 notice is about specific hosted information. It is not itself a payment reversal, refund, chargeback or entitlement ledger event.

Without a separate lawful basis:

- a report must not delete unrelated legitimately purchased **Diamonds**;
- a rejected or accepted notice must not create a negative Diamond balance;
- a content notice must not restart, shorten, extend or duplicate the one-time, non-renewing **30-Day VIP** entitlement;
- a notice must not add an expiry to valid **Lifetime VIP**;
- a reporter's allegation must not automatically classify an Apple App Store, Google Play or Xsolla transaction as fraudulent;
- an Article 16 workflow retry must not replay a payment-provider webhook or entitlement grant; and
- a moderation outcome must not manufacture a refund or chargeback.

**Lifetime VIP** remains a one-time promotional entitlement available only during selected genuine sales windows. CK-Labs may withdraw it from future sale, it may never return, and no sale creates an expectation of continuous future availability. Different genuine sales windows may use different future prices. An Article 16 notice does not rewrite a completed valid purchase.

A serious, proven Terms violation can separately support account enforcement under the canonical Terms where lawful. The report itself is not a universal payment clawback instruction.

## 18. Account compromise must not be confused with deliberate misconduct

If illegal or prohibited content appears from a compromised TycoonX account:

- contain an immediate safety risk where appropriate;
- preserve relevant session/security evidence lawfully;
- distinguish the content decision from the attribution decision;
- allow account-recovery evidence to be considered;
- do not automatically label the legitimate owner a fraudster merely because their account posted the content; and
- do not create unrelated chargeback, regional-pricing or entitlement-abuse findings without independent evidence.

The Article 16 content decision can proceed even while account attribution is uncertain. Use `TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md` for the account-enforcement layer.

## 19. Reporter privacy, data minimisation and security

The notice system must not become a public doxxing mechanism or an unnecessary personal-data collection form.

Controls:

- collect only notice data reasonably necessary for the legal/moderation purpose;
- keep reporter contact details access-controlled;
- do not expose the reporter's identity to the reported user by default;
- do not put raw email addresses, access tokens, private message bodies or sensitive evidence in analytics events or public URLs;
- redact/minimise evidence used for QA where full personal data is unnecessary;
- define retention according to legal, moderation, dispute, security and evidence needs rather than "forever" by default; and
- apply the canonical Privacy Policy and GDPR release gates to any new report-form fields or automated classification.

## 20. Logging and audit evidence

For each Article 16 notice, retain an auditable record proportionate to the case, such as:

- report ID;
- receipt timestamp;
- electronic locator(s) and content ID/version;
- alleged-illegality explanation/category;
- whether reporter identity/contact was supplied or a statutory identity exception was used;
- bona fide confirmation state;
- acknowledgement timestamp where contact information exists;
- automation used in triage/decision, if any;
- reviewer/decision state;
- Article 16(3) actual-knowledge assessment where relevant;
- outcome, territorial scope and action timestamp where relevant;
- reporter decision-notice timestamp;
- redress route communicated;
- linked Article 17 reason record if an affected user was restricted;
- linked authority/TCO/IP/Article 18 escalation if applicable; and
- retention/deletion state for report evidence.

Avoid using one overloaded `status` field to represent notice completeness, content legality, moderation outcome, account culpability, payment state and entitlement state.

## 21. Transparency reporting must be fed by accurate Article 16 data

Where the DSA transparency-reporting duty applies, Article 15 requires hosting-provider reports to include Article 16 notice statistics such as categories of alleged illegal content, notices from trusted flaggers where relevant, actions taken under law versus terms, automated processing and median action times.

The reporting pipeline therefore needs reliable structured Article 16 records rather than reconstructed support-chat history.

Apply the separate micro/small-enterprise scope analysis for Article 15 transparency reporting. Do not confuse an exemption from Article 15 reporting with an exemption from Article 16's notice mechanism itself.

Use `TYCOONX_DSA_TRANSPARENCY_REPORTING_GATE.md` for publication rules.

## 22. Current German enforcement makes Article 16 a practical priority

This is not a theoretical checkbox.

The Bundesnetzagentur's Digital Services Coordinator reported on **April 30, 2026** that it received more than **2,000 DSA complaints in 2025**. It said a major focus of national proceedings included inadequate implementation of **Article 16**, Article 17 and Article 20.

On **June 12, 2026**, the German DSC announced an investigation into the gaming platform Steam focused on whether the DSA requirements for reporting potentially illegal content were correctly implemented and whether notices were appropriately handled. The announcement expressly framed the issue as the reporting/review process, not as the DSC itself finally deciding whether the underlying game content was illegal.

On **July 6, 2026**, the German DSC announced that its eBay investigation had identified, among other issues, improper implementation of notice-and-action mechanism rules, including accessibility and user-friendliness concerns. The authority stated that this was not yet a final decision at that stage.

For TycoonX, an Article 16 route that technically exists but is buried, unusable on mobile, unable to locate in-app UGC, or not followed by a decision is therefore a real release/compliance risk.

## 23. Minimum regression scenarios

| Scenario | Expected result |
| --- | --- |
| Reporter opens illegal-content flow from a public chat item | Exact message is pre-identified; form remains usable and lets the reporter explain alleged illegality |
| Report concerns an in-app item with no public URL | Stable TycoonX content/message identifier can satisfy the adapted location requirement |
| Reporter provides all Article 16 elements | Receipt is timestamped; acknowledgement is sent without undue delay when contact information exists |
| CSAM/exploitation category | Name/email is not forced where Article 16(2)(c) exception applies; urgent specialist route is available |
| Reporter omits a locator | Form requests/permits clarification; vague report is not falsely treated as knowledge of all user content |
| Notice clearly identifies obviously illegal specific content without detailed legal examination | Article 16(3)/Article 6 path is assessed promptly and action is not left in a routine support backlog |
| Complex legal dispute | Reviewer does not falsely state Article 16 notice alone conclusively proved illegality |
| Notice rejected after review | Reporter receives decision and applicable redress information without undue delay |
| Automation triages the notice | Reporter decision notification discloses the applicable use of automated means |
| Content is removed | Affected user receives separate Article 17 reason where applicable; reporter identity is not copied by default |
| CK-Labs validly qualifies for Article 19 exemption | Article 20/21/22/23 scope is handled separately; Article 16 mechanism remains operational |
| Certified trusted flagger notice where Article 22 applies | Routed with required priority; ordinary reporters are not falsely labelled trusted flaggers |
| One manifestly unfounded notice | No automatic reporter suspension; Article 23 conditions remain separate |
| Credible threat-to-life criminal content | Article 18 escalation is assessed promptly |
| Government removal order arrives | Authority-order gate is used, not ordinary Article 16 queue |
| TCO removal order arrives | One-hour TCO workflow is used; report queue does not dilute the statutory order deadline |
| Copyright complaint | Dedicated IP evidence route is available without treating an allegation as automatic proof |
| Notice concerns content from a compromised account | Content safety decision and account-owner culpability are assessed separately |
| Content notice submitted against Lifetime VIP owner | Valid Lifetime VIP purchase is unchanged absent separate lawful entitlement/account basis |
| Duplicate report processing | No duplicate payment webhook, refund, Diamond clawback or VIP entitlement event |
| Legal-report provider outage | Fallback intake preserves timestamp/content locator and is reconciled when the provider recovers |

## 24. Release blockers

Treat Article 16 production parity as **not ready** for an in-scope TycoonX hosting feature if any of the following is true:

- there is no electronic illegal-content notice mechanism;
- the mechanism is materially difficult to access or unusable on the relevant interface;
- it cannot reliably identify the specific in-app content being reported;
- it forces a name/email in a case covered by the Article 16(2)(c) child-offence exception;
- sufficiently complete notices can sit unreviewed in a generic support backlog without a timely/diligent workflow;
- the system treats every notice as an automatic takedown or, conversely, ignores notices unless a court order already exists;
- acknowledgement/decision notifications are not sent without undue delay where the required contact information is available;
- automated processing is used but its applicable use is omitted from the reporter decision notice;
- reporter identity is routinely disclosed to the reported user without necessity;
- Article 19 micro/small-enterprise status can disable the Article 16 route;
- authority orders, TCO orders and ordinary user notices share one undifferentiated queue that can miss statutory deadlines;
- a content notice can automatically erase Diamonds or alter 30-Day VIP/Lifetime VIP without a separate lawful basis; or
- production cannot produce a reliable audit trail for receipt, decision and communication timing.

## 25. Localization trigger

This gate does not materially change the current canonical Community Standards meaning. The canonical policy already states that, where a TycoonX feature qualifies as a DSA hosting service, CK-Labs will provide the legally required electronic notice-and-action mechanism and will process sufficiently precise notices in a timely, diligent, non-arbitrary and objective manner.

The completed localization queue therefore remains closed.

If CK-Labs later changes player-facing Community Standards or Terms in a way that materially changes this legal meaning:

1. update canonical English first;
2. reopen **only the affected document type** in `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`;
3. synchronize in the exact order `tr`, `de`, `es`, `es_MX`, `fr`, `fr_CA`, `it`, `pt`, `pt_BR`, `ru`, `ja`, `ko`, `zh`, `zh_Hans`, `zh_Hant`, `ar`, `nl`, `sv`, `nb`, `pl`, `th`, `vi`, `uk`, `hi`, `id`;
4. keep locale variants genuinely localized;
5. preserve Arabic RTL; and
6. close each localization only after it preserves the canonical legal meaning.

## 26. Release evidence packet

Before declaring Article 16 production parity, retain dated evidence containing at least:

- feature-by-feature hosting/online-platform classification;
- screenshot or recording of the notice entry point on each material UGC surface;
- sample notice containing all Article 16(2) elements;
- sample identity-exempt child-safety notice path;
- sample in-app content locator that does not rely on a public URL;
- acknowledgement timing proof;
- no-action and action decision-notice samples with redress information;
- automated-processing disclosure sample where automation was used;
- Article 16(3)/Article 6 escalation sample using synthetic content;
- Article 17 linked-reason sample with notifier privacy protected;
- Article 19 scope memo showing why Article 16 stays enabled;
- authority-order/TCO routing test;
- Article 18 escalation test;
- payment/entitlement isolation test for Diamonds, 30-Day VIP and Lifetime VIP;
- account-compromise separation test;
- transparency-reporting data mapping where applicable; and
- owner/date for the next review.

Use synthetic/redacted evidence where real personal or harmful content is unnecessary.

## 27. Current-law references

Primary sources to re-check before a material implementation change:

- Regulation (EU) 2022/2065, Articles 6 to 8, 16 to 23 and related recitals: `https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng`
- Bundesnetzagentur, Digital Services Coordinator 2025 activity report, published April 30, 2026: `https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/EN/2026/20260430_TB_DSC.html`
- Bundesnetzagentur, investigation into Steam, published June 12, 2026: `https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/EN/2026/20260612_DSC.html`
- Bundesnetzagentur, eBay DSA investigation update, published July 6, 2026: `https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/EN/2026/20260706_DSC_ebay.html`
- `tycoonx-community-standards.md`
- `TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST.md`
- `TYCOONX_DSA_ARTICLE_17_PAYMENT_MODERATION_BOUNDARY_GATE.md`
- `TYCOONX_DSA_ARTICLE_20_21_REDRESS_RELEASE_GATE.md`
- `TYCOONX_DSA_ARTICLE_22_TRUSTED_FLAGGER_RELEASE_GATE.md`
- `TYCOONX_DSA_ARTICLE_23_MISUSE_RELEASE_GATE.md`
- `TYCOONX_DSA_INTERMEDIARY_LIABILITY_AUTHORITY_ORDERS_RELEASE_GATE.md`
- `TYCOONX_EU_GERMAN_TERRORIST_CONTENT_ONLINE_RELEASE_GATE.md`
- `TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md`

## 28. Brand and release invariant

Player-facing and legal prose must display the game name exactly as **TycoonX**. Technical paths and filenames containing `tyconx` may remain where changing them would break routes or references.

TycoonX entered full release on **September 1, 2026**. Production notice forms, acknowledgement copy, decision notices, moderation reasons, redress copy and support copy must describe the live service accordingly.