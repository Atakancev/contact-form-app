# TycoonX DSA Article 20 / 21 Redress Release Gate

**Last reviewed: September 4, 2026**

This gate covers the EU Digital Services Act (DSA) internal complaint and certified out-of-court dispute-settlement rules that can apply to a TycoonX feature qualifying as an **online platform**. It is deliberately separate from German consumer-contract ADR under the VSBG, the discontinued EU ODR platform, Apple / Google Play / Xsolla payment disputes, statutory withdrawal rights, and ordinary court proceedings.

Nothing in this gate limits mandatory consumer rights, DSA rights, court access, statutory withdrawal, conformity, refund, data-protection, or other non-waivable remedies.

## 1. Classify the TycoonX feature before applying Article 20 or 21

DSA Articles 20 and 21 sit in **Section 3, Additional provisions applicable to providers of online platforms**. Do not apply them mechanically to every stored message, support ticket, payment record, or private communication.

For each TycoonX community/social surface, keep a dated classification of whether it is:

- merely a hosting/intermediary feature;
- an **online platform** within the DSA meaning because stored information is disseminated to the public at a user's request; or
- outside the relevant DSA intermediary-service scope for the particular processing.

Public or potentially broadly disseminated UGC can require a different classification from finite-recipient private messaging.

A feature can still be subject to Articles 14, 16, 17, or 18 as applicable even when Articles 20 and 21 are not currently mandatory.

## 2. Article 19 micro/small-enterprise exclusion must be evidence-based

Under current **Article 19(1) DSA**, Section 3 generally does not apply to providers of online platforms that qualify as micro or small enterprises under Recommendation 2003/361/EC, except for Article 24(3).

The exclusion also generally continues for **12 months after loss of micro/small status** under the conditions in Article 19, unless the service is designated a very large online platform under Article 33.

Release rule:

- do not assume CK-Labs is exempt merely because TycoonX is independently operated;
- preserve the actual enterprise-size analysis, including linked/partner-enterprise effects where relevant;
- record the assessment date and supporting headcount/financial evidence;
- re-check after material growth, financing, ownership, restructuring, acquisition, merger, or other status change; and
- if the exclusion is unavailable or expires, activate the Article 20/21 controls before treating the affected online-platform feature as compliant.

Voluntarily offering an appeal does not by itself mean CK-Labs has waived an Article 19 exemption for every Section 3 duty. If CK-Labs voluntarily models a process on Article 20 or 21, describe it accurately and do not falsely state that a statutory procedure applies when it does not.

## 3. Article 20 internal complaint-handling system

Where Article 20 applies, TycoonX must provide eligible recipients, including eligible individuals or entities that submitted notices, access to an effective internal complaint-handling system **electronically and free of charge for at least six months** after the relevant decision.

The Article 20 complaint route must cover the relevant statutory decision categories, including decisions taken after receipt of a notice and decisions taken because user-provided information is considered illegal or incompatible with TycoonX Terms / Community Standards concerning:

- whether or not to remove, disable access to, or restrict visibility of the information;
- whether or not to suspend or terminate provision of the service, in whole or in part;
- whether or not to suspend or terminate the recipient's account; and
- whether or not to suspend, terminate, or otherwise restrict the ability to monetise user-provided information, where that category is relevant.

An eligible notice submitter must also be able to challenge a **decision not to act upon the notice** where Article 20 applies. Do not design the appeal surface only for the account whose content was restricted.

The six-month period starts on the day the recipient is informed of the relevant decision in accordance with Article 16(5) or Article 17, as applicable. Preserve that notification timestamp rather than starting the clock from an internal moderation timestamp the user never received.

The system must be:

- electronic;
- free of charge to the complainant;
- easy to access and user-friendly;
- capable of receiving and facilitating sufficiently precise and adequately substantiated complaints; and
- operated in a timely, non-discriminatory, diligent, and non-arbitrary manner.

**Recital 58 is an important anti-formalism control.** The complaint system should not impose formal requirements such as forcing the complainant to identify a specific legal provision, quote the DSA, use legal terminology, or provide an elaborate legal explanation. TycoonX can ask for enough facts to identify the decision and understand the challenge, but a substantively understandable complaint must not be rejected merely because the player is not a lawyer or selected the wrong internal category.

Examples of prohibited friction where Article 20 applies:

- requiring `Article 20` or another statute number in the complaint text;
- rejecting a complaint because it says `my post was removed by mistake` instead of identifying a legal basis;
- hiding the appeal behind an unrelated payment-support form;
- requiring purchase of VIP or Diamonds to obtain review;
- imposing an arbitrary character minimum that prevents a concise but sufficiently clear complaint; or
- forcing a notice submitter to create a new paid entitlement or accept unrelated commercial terms to challenge a rejected notice.

If a complaint provides sufficient grounds showing that a decision not to act upon a notice was unfounded, that the information is not illegal or incompatible with the applicable Terms, or that the complainant's conduct did not warrant the measure taken, the relevant decision must be reversed without undue delay under the applicable Article 20 standard.

The reasoned decision on the complaint must be taken under the supervision of appropriately qualified staff and must **not be taken solely on the basis of automated means**.

TycoonX may use automation to triage, group evidence, detect duplicates, translate, or help staff review a complaint, but an AI classifier or rule engine must not be the sole final Article 20 decision-maker where Article 20 applies. The production record should show that qualified human supervision actually occurred rather than merely stating that a human could theoretically intervene.

## 4. Article 20 outcome notice must preserve Article 21 redress

Where Article 20 applies, TycoonX must inform the complainant without undue delay of its reasoned decision and of:

- the possibility of certified out-of-court dispute settlement under **Article 21**; and
- other available redress routes that are legally required to be identified.

Do not hide the Article 21 information only inside a long general legal policy if the law requires it to be communicated with the Article 20 outcome.

Do not state or imply that the user must finish the internal complaint first before using a court or Article 21 body. Article 21 expressly preserves the right to initiate judicial proceedings **at any stage**, and Article 21 can cover complaints that have not been resolved through the internal complaint system.

## 5. Article 21 right to choose a certified body

Where Article 21 applies, recipients addressed by the relevant Article 20 decisions, including eligible individuals or entities that submitted notices, may select a certified DSA out-of-court dispute-settlement body to resolve a dispute about that decision.

The selected body must actually be certified and its certified **subject-matter/platform expertise and language coverage must fit the dispute**.

Current Commission guidance says certification is valid across all 27 EU Member States, but a body's certification can be limited by subject matter, platform type, or language. A national Digital Services Coordinator can also revoke a certification if the body no longer satisfies the statutory conditions. Therefore:

- do not hard-code one body forever;
- do not reject a body solely because it is certified in another EU Member State;
- do not claim a body can hear TycoonX disputes merely because it appears somewhere on the Commission list;
- verify the body's current certification, expertise, language coverage, rules of procedure, and any platform-specific scope at the time of the dispute;
- retain the Commission-list/version date and the body's rules/procedure version used for the check; and
- re-check current status before treating a previously cached body as competent in a later case.

As of the European Commission list last updated **July 2, 2026**, the certified list contains bodies with materially different scopes. **ADROIT**, certified by the Malta Communications Authority on July 10, 2024, is currently listed with expertise that expressly includes `Gaming, gambling and betting platforms` and with Dutch, English, French, German, Italian, Maltese, Portuguese, and Spanish language coverage. Several other bodies are limited to named social-media services, specified forms of illegal content, specified platform types, or narrower language sets.

ADROIT's current gaming entry is a useful **discovery signal**, not a permanent designation of ADROIT as the TycoonX dispute body and not proof that ADROIT must accept every TycoonX dispute. At case intake, verify the actual dispute, the current Commission certification data, the body's current rules, language, competence, admissibility requirements, and any relevant change in certification.

If a certification or scope changes while a matter is already pending, do not silently close the user's TycoonX appeal or invent a new competence rule. Preserve the case record and follow the body/certifying-authority transition or procedural directions that lawfully apply, while keeping court and other mandatory redress available.

## 6. Article 21 information must be easy to find when applicable

Article 21 requires online platforms to ensure that information about access to the certified out-of-court route is **easily accessible on the online interface, clear, and user-friendly** when the duty applies.

Production evidence should therefore include the actual surface where an affected TycoonX user can learn about the Article 21 option. A generic support email, hidden footer, or internal staff note is not enough if the applicable Article 21 rule requires user-facing access information.

The Community Standards may remain conditional while Article 19 status and feature classification are conditional, but the live product must expose the legally required route when Article 21 becomes applicable.

## 7. CK-Labs and the user must engage in good faith, and the refusal exception is narrow

When Article 21 applies and a competent certified body is selected, both parties must engage with that body **in good faith** with a view to resolving the dispute.

TycoonX support/moderation operations must not:

- ignore a competent certified body's correspondence merely because the decision is non-binding;
- submit fabricated evidence or a knowingly incomplete decision record;
- retaliate against a user merely for invoking Article 21;
- suspend or terminate an account merely because the user used a statutory redress route; or
- classify a good-faith Article 21 request as chargeback fraud, entitlement abuse, or malicious reporting without separate evidence.

**Article 21(2)'s provider refusal exception is narrower than a generic lis-pendens or duplicate-case rule.** CK-Labs may refuse to engage with the selected certified body where a dispute **has already been resolved concerning the same information and the same grounds of alleged illegality or incompatibility of content**.

Do **not** broaden that exception merely because:

- an internal Article 20 complaint was already decided;
- a court case is merely pending;
- another certified-body procedure is merely pending;
- the user previously complained about different information;
- the same information is disputed on a materially different ground; or
- the case is difficult, repetitive, expensive, or inconvenient.

A separate procedural rule of a competent court or certified body may affect a pending case, but do not falsely describe such a rule as the Article 21(2) provider-refusal exception. Record the exact legal/procedural basis actually relied on.

## 8. Article 21 outcomes are not binding settlements

A certified Article 21 body does **not** have power under Article 21 to impose a binding settlement on the parties.

The user remains able to initiate judicial proceedings at any stage in accordance with applicable law. CK-Labs must not describe Article 21 as:

- mandatory arbitration;
- a waiver of court access;
- a final binding judgment;
- an exclusive remedy; or
- a replacement for consumer-contract ADR, refund rights, withdrawal rights, or data-protection remedies.

An Article 21 outcome can still be important evidence and should receive a documented good-faith operational response.

## 9. Fee and expense rules

Where Article 21 applies, preserve the statutory cost allocation rather than inventing a generic `each side pays its own costs` rule.

Current Article 21 provides that:

- for recipients of the service, the procedure must be available **free of charge or at a nominal fee**;
- if the certified body decides the dispute in favour of the recipient, the online-platform provider bears the body's fees and reimburses the recipient for other reasonable expenses paid in relation to the dispute;
- if the body decides in favour of the online-platform provider, the recipient is not required to reimburse the provider's fees or expenses unless the body finds that the recipient **manifestly acted in bad faith**; and
- the body's provider-facing fees must be reasonable and cannot exceed the body's costs.

The body must disclose its fees or fee-calculation mechanism before the dispute settlement begins.

TycoonX should retain evidence of the applicable fee schedule, invoice, outcome, and any reimbursement made. Do not deduct Article 21 costs from a user's Diamond balance or convert a statutory reimbursement into in-game value without the user's legally valid agreement where such agreement would be permitted.

## 10. Decision timing belongs to the certified body, not a TycoonX SLA promise

Article 21 requires the certified body to make its decision available within a reasonable period and no later than **90 calendar days** after receiving the complaint. For highly complex disputes, the body may extend that period by up to another **90 days**, for a maximum total of **180 days**.

Do not promise that CK-Labs itself controls the certified body's timetable.

CK-Labs should instead:

- answer the body within the time reasonably requested;
- preserve evidence needed for the dispute;
- record when the body received the complaint where known;
- record any extension communicated by the body; and
- preserve the body outcome and CK-Labs' response.

## 11. Keep DSA redress separate from German VSBG and the old EU ODR platform

DSA Article 21 is a **content/platform-decision redress mechanism**. It is not the same thing as consumer-contract ADR under the German VSBG.

The former EU Online Dispute Resolution platform was discontinued, and Regulation (EU) No 524/2013 was repealed with effect from **July 20, 2025**. Do not direct a TycoonX user to the old ODR platform as an active Article 21 route.

For a purchase/refund disagreement, the relevant route may instead involve:

- TycoonX Support;
- Apple App Store refund procedures;
- Google Play refund/dispute procedures;
- the applicable Xsolla merchant/refund process;
- a statutory withdrawal mechanism;
- German/EU consumer ADR where applicable; or
- the courts.

The fact that a dispute started after a moderation action does not automatically turn a payment/refund dispute into Article 21 content-moderation redress.

## 12. Payment and entitlement isolation

An Article 20 complaint or Article 21 proceeding is not itself authoritative payment evidence.

Unless there is a separate lawful, transaction-specific reason:

- do not remove purchased Diamonds because a user filed or won/lost a DSA moderation dispute;
- do not restart, shorten, or duplicate a valid one-time **30-Day VIP** period because of a DSA redress event;
- do not revoke, duplicate, convert, or migrate **Lifetime VIP** merely because a moderation dispute is pending;
- do not reverse an Apple, Google Play, or Xsolla transaction because a certified DSA body is reviewing a content/account decision; and
- do not use a moderation-cost reimbursement as a substitute for a cash/payment-channel refund owed under another legal framework.

If the underlying moderation decision itself lawfully suspends or terminates access to the Service, apply the separate Terms, DSA statement-of-reasons, digital-product, refund, and mandatory consumer-rights analysis for any paid entitlement affected by that access restriction.

**Product invariants:** 30-Day VIP is a one-time, non-renewing 30-day entitlement. Lifetime VIP is a one-time promotional entitlement offered only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous availability. Article 20/21 redress cannot independently rewrite those commercial terms.

## 13. Account compromise, impersonation, and evidence quality

A disputed moderation event can involve a compromised account. Preserve the distinction between:

- who owned or controlled the TycoonX account;
- who created the disputed content;
- who received the moderation decision;
- what security signals existed at the time; and
- whether CK-Labs later concluded the account was compromised.

Do not treat account ownership as conclusive proof that the owner personally authored every disputed message or action.

A later security finding can justify revisiting a moderation decision. Preserve the original decision and reason, the complaint, the new evidence, the revised decision, and the dates rather than overwriting history.

## 14. Privacy and data minimisation in Article 20/21 files

The DSA redress process is not a blanket permission to disclose unrelated personal or payment data.

For a complaint or certified-body submission, share only information reasonably necessary and lawful for the dispute, such as:

- the challenged content or relevant excerpt;
- content/message/post identifier;
- the applicable Terms/Community Standards provision;
- the factual basis for the moderation decision;
- relevant timestamps;
- relevant notice/complaint history; and
- necessary account-security context where directly relevant.

Do not include unrelated private messages, unrelated support tickets, full payment-card details, reusable credentials, secret keys, unrelated purchase history, unnecessary IP/location history, or reporter identity unless disclosure is legally justified and necessary.

Where reporter or third-party information is sensitive, preserve the separate Article 17 / GDPR necessity analysis rather than dumping the full moderation record into the dispute file.

## 15. Evidence packet for an applicable Article 20/21 case

For every production case where the statutory route applies, retain an auditable record containing at least:

- feature classification and the Article 19 status used;
- original moderation/notice decision ID and timestamp;
- exact statement of reasons or Article 16(5) communication sent;
- date and timestamp the recipient was informed and the six-month Article 20 window began;
- complaint timestamp and complaint content;
- whether the complainant was the affected content/account user, a notice submitter, or another eligible recipient;
- any automation used for triage/recommendation and the human-supervised Article 20 review record;
- role/qualification basis for the staff supervision, without unnecessarily publishing staff personal data;
- reasoned Article 20 outcome and timestamp;
- Article 21/redress information shown to the user;
- selected certified body's name, Commission/certifying-authority status checked, check date, certification date, expertise, language basis, and rules/procedure version;
- body correspondence and submitted evidence;
- if CK-Labs refuses to engage, the exact facts showing a previously resolved dispute concerning the **same information and same grounds**, or the separate non-Article-21 legal/procedural basis actually relied on;
- fee schedule and invoice information;
- body outcome and outcome date;
- any user expense reimbursement due under Article 21;
- CK-Labs' good-faith response to the outcome; and
- any later judicial, consumer-ADR, payment, or account-security process kept clearly separate.

Do not keep these records indefinitely merely because a moderation dispute existed. Apply the separate GDPR retention/deletion gate and any concrete legal-claim hold narrowly.

## 16. Release tests

Before marking this gate operationally complete for a feature where Articles 20/21 apply, test at least:

1. A content removal can be challenged electronically and free of charge during the Article 20 window.
2. A visibility restriction produces an eligible complaint path where Article 20 applies.
3. A notice submitter can challenge a decision not to act on the notice where Article 20 applies.
4. A concise understandable complaint is not rejected merely because it contains no statute number, legal terminology, or elaborate legal explanation.
5. The six-month clock is anchored to the recipient-facing Article 16(5)/Article 17 notification date rather than an invisible internal timestamp.
6. The complaint decision is not made solely by automation and the record proves qualified human supervision occurred.
7. A successful internal complaint reverses the challenged decision without undue delay.
8. The Article 20 outcome includes the Article 21 option and other required redress information.
9. The user can find Article 21 information easily on the relevant online interface.
10. A certified body from another EU Member State is not rejected merely because it is foreign.
11. A body outside the dispute's current certified expertise/language is not falsely treated as competent.
12. A previously cached body is re-checked for current certification, scope, language, and procedure before reliance.
13. A competent certified-body request is handled in good faith.
14. A previously resolved dispute involving the same information but a materially different ground is not automatically rejected under Article 21(2).
15. A merely pending court or certified-body case is not falsely described as falling within Article 21(2)'s already-resolved provider-refusal exception.
16. A body decision in the user's favour produces the correct fee/expense handling without granting Diamonds as a substitute.
17. A body decision in CK-Labs' favour does not charge the user CK-Labs' costs unless the statutory manifest-bad-faith condition is actually met.
18. A DSA redress case cannot replay, revoke, or duplicate Apple, Google Play, or Xsolla entitlements by itself.
19. Purchased Diamonds remain unchanged absent a separate transaction-specific legal basis.
20. One-time 30-Day VIP keeps its original clock absent a separate lawful entitlement event.
21. Lifetime VIP remains one entitlement absent a separate lawful entitlement event.
22. The old EU ODR URL is not presented as the Article 21 route.
23. A normal consumer refund complaint is not automatically misrouted into DSA Article 21.
24. A compromised-account allegation is reviewed without treating account ownership as conclusive proof of authorship.
25. A body certification/scope change is handled from current evidence rather than a stale hard-coded allowlist.

## 17. Public-document / localization rule

The canonical Community Standards already state, conditionally, that CK-Labs will provide an internal complaint-handling system, out-of-court redress information, or another formal review mechanism where mandatory law requires it. That conditional public wording remains appropriate while feature classification and Article 19 status can change.

This operational gate therefore does **not** by itself materially change the canonical English Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards.

If CK-Labs later publishes a new unconditional promise about statutory Article 20/21 availability, names a specific certified body as a permanent TycoonX route, or otherwise changes canonical public legal meaning, reopen only the affected localized document type and resynchronize all 25 locales in the required order.

## 18. Brand and release invariants

- All player-facing and legal prose must display **TycoonX**, never `TyconX`.
- TycoonX went to full release on **September 1, 2026**.
- Do not describe current TycoonX, purchases, Diamonds, 30-Day VIP, Lifetime VIP, users, rewards, or legal terms as beta.
- Technical route/file names containing `tyconx` may remain only where changing them risks breaking URLs or integrations.

## Official sources reviewed

- Regulation (EU) 2022/2065, Recital 58 and Articles 19, 20 and 21: `https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng`
- European Commission, certified DSA out-of-court dispute-settlement bodies, last updated July 2, 2026: `https://digital-strategy.ec.europa.eu/en/policies/dsa-out-court-dispute-settlement`
- European Commission, Digital Services Coordinators: `https://digital-strategy.ec.europa.eu/en/policies/dsa-dscs`
- Regulation (EU) 2024/3228 discontinuing the former EU ODR platform: `https://eur-lex.europa.eu/eli/reg/2024/3228/oj/eng`
- Existing TycoonX German consumer ADR / ODR sunset gate: `TYCOONX_GERMAN_ADR_ODR_RELEASE_GATE.md`