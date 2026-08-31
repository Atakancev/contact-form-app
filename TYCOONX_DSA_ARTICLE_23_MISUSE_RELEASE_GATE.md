# TycoonX DSA Article 23 Misuse & Suspension Release Gate

Last reviewed: 2026-09-01  
Operator/business name used in player-facing documents: **CK-Labs**

This gate covers misuse of TycoonX community features, repeated manifestly illegal content, abusive illegal-content notices, abusive moderation complaints, and the suspension safeguards in Articles 19, 22, 23, and 24 of Regulation (EU) 2022/2065 (the Digital Services Act, or **DSA**).

It is an operational release gate, not a substitute for qualified legal advice. It does not create a new statutory duty where the relevant TycoonX feature or CK-Labs business status falls outside that duty.

## 1. First classify the feature and CK-Labs status

Article 23 sits in **Section 3 of the DSA**, which contains additional duties for providers of **online platforms**. It is not automatically a duty for every TycoonX chat, support inbox, direct message, game feature, or hosting function.

Before CK-Labs relies on Article 23 as a statutory suspension route, preserve a dated record for each relevant TycoonX feature showing:

- whether the feature is an intermediary service at all;
- if it stores user-provided information, whether it qualifies as a hosting service;
- if it disseminates stored user-provided information to the public at the user's request, whether it also qualifies as an online platform;
- whether the feature is genuinely private or limited-recipient communication rather than public dissemination; and
- whether CK-Labs currently qualifies for the **Article 19(1) DSA micro/small-enterprise exclusion** from Section 3.

Under Article 19(1), Section 3 generally does not apply while the online-platform provider qualifies as a micro or small enterprise under Recommendation 2003/361/EC, except for Article 24(3). The exclusion generally continues for **12 months after loss of micro/small status**, unless the service is designated a very large online platform under Article 33.

**Release rule:** do not present Article 23 as a mandatory TycoonX procedure unless the relevant feature is an online platform and the Article 19 exclusion is unavailable or has ceased to apply. A voluntary anti-abuse policy may still exist under the Terms and Community Standards, but it must not be mislabeled as a statutory Article 23 suspension.

## 2. Current public Community Standards are a baseline, not a substitute for Article 23(4)

The current TycoonX Community Standards already say that:

- good-faith reporting is permitted;
- knowingly false, malicious, repetitive, or abusive reports intended to harass another user, manipulate moderation, or overwhelm Support may lead to proportionate restrictions;
- moderation decisions consider context, severity, recurrence, evidence, and applicable law/platform requirements; and
- serious or repeated violations may lead to suspension or termination where permitted.

That wording is useful and founder-protective for ordinary contractual moderation. However, if Article 23 becomes applicable, Article 23(4) requires the provider to set out **clearly and in detail in its terms and conditions** its policy on the misuse described in Article 23(1) and (2), including **examples of the facts and circumstances** considered when assessing misuse and the **duration of the suspension**.

Therefore:

- [ ] if Article 23 is currently exempt, keep the present conditional public wording and preserve the exemption evidence;
- [ ] if Article 23 becomes applicable, treat the current general sentence as **insufficient by itself** for Article 23(4);
- [ ] before using the statutory Article 23 route, add a dedicated clear and detailed misuse section to the canonical Community Standards or Terms;
- [ ] when that public canonical meaning changes, reopen the **Community Standards** localization type and resynchronize all 25 locales in the required order; and
- [ ] never backdate a policy change to make earlier conduct automatically qualify for a statutory misuse suspension.

## 3. Two different Article 23 misuse categories

Do not collapse Article 23 into a generic `abuse` flag.

### 3.1 Frequent provision of manifestly illegal content

Article 23(1) concerns a recipient of the service who **frequently provides manifestly illegal content**.

If Article 23 applies, CK-Labs must:

- establish that the relevant material is **manifestly illegal**, not merely disliked, controversial, reported, suspicious, or potentially against a house rule;
- establish the required pattern of frequent conduct rather than treating one ordinary incident as enough;
- issue a **prior warning** before the Article 23 suspension;
- use a suspension for a **reasonable period of time**; and
- complete the required case-by-case assessment before imposing the statutory misuse suspension.

Nothing here prevents a separate temporary emergency restriction under another lawful basis where an immediate safety, security, child-protection, fraud, infrastructure, or evidence-preservation risk genuinely requires it. But an emergency security restriction must not be falsely recorded as an Article 23 suspension if the Article 23 prerequisites were not met.

### 3.2 Frequent manifestly unfounded notices or complaints

Article 23(2) concerns individuals, entities, or complainants who **frequently submit notices or complaints that are manifestly unfounded** through the Article 16 notice-and-action mechanism or Article 20 internal complaint-handling system.

If Article 23 applies, the statutory consequence is a temporary suspension of **processing those notices or complaints**, after a prior warning and for a reasonable period. Do not automatically convert this into a full TycoonX account ban, game ban, payment freeze, or forfeiture of paid entitlements.

A report or complaint is not manifestly unfounded merely because CK-Labs ultimately disagrees with it. In particular, do not classify as Article 23 misuse solely because:

- the reporter made a factual mistake in good faith;
- a legal question is genuinely uncertain;
- a complaint asks CK-Labs to reconsider a close moderation judgment;
- a user successfully or unsuccessfully exercises an Article 20, Article 21, consumer, privacy, payment, or court remedy;
- a reporter submits several accurate notices during a real abuse incident; or
- a user repeatedly reports serious safety concerns that require investigation.

## 4. Required Article 23(3) assessment

Before an Article 23 suspension, the assessment must be **case-by-case, timely, diligent, and objective** and must consider all relevant facts and circumstances apparent from the information available to CK-Labs.

The decision record must include at least:

1. **Absolute number** of manifestly illegal items, manifestly unfounded notices, or manifestly unfounded complaints within the selected time frame.
2. **Relative proportion** of those items compared with the person's total content, notices, or complaints in that time frame.
3. **Gravity, nature, and consequences** of the misuse.
4. **Intention**, where it is possible to identify it from available evidence.

Operationally, also record:

- the chosen time frame and why it is appropriate;
- the feature/surface involved;
- the relevant content, notice, or complaint identifiers;
- which items were counted and which were excluded;
- whether automated systems contributed to detection or scoring;
- human reviewer findings;
- account-compromise/security signals where relevant;
- prior warning date and content;
- proposed suspension scope and duration;
- the reason the duration is proportionate; and
- available redress or review information where law requires it.

**No fixed-volume shortcut:** do not implement a rule such as `5 reports = abuse` or `3 illegal posts = automatic Article 23 ban` without the full assessment. Absolute count is only one required factor and must be considered together with relative proportion, gravity, and intention where identifiable.

## 5. Prior warning is a real prerequisite

If Article 23 applies, the Article 23 suspension follows a **prior warning**.

The warning should, to the extent appropriate and lawful:

- identify the relevant misuse category;
- explain what conduct triggered concern with enough specificity to be useful;
- tell the recipient that continued qualifying misuse may result in a temporary Article 23 suspension;
- avoid exposing reporter identities, anti-abuse secrets, or third-party personal data unnecessarily; and
- preserve an auditable copy, timestamp, delivery channel, and delivery result.

Do not treat a generic Community Standards acceptance screen from months earlier as the Article 23 prior warning for a specific misuse pattern.

If a separate urgent safety/security action is necessary before a warning can be completed, record that emergency action under its real lawful basis. Do not rewrite the history later to pretend the warning preceded it.

## 6. Suspension must be limited and proportionate

Article 23 requires suspension for a **reasonable period of time**. A statutory Article 23 suspension must not silently become an indefinite or permanent punishment.

For each Article 23 suspension, record:

- start time;
- end time or objectively determinable expiry condition;
- affected feature or processing route;
- whether the suspension concerns service provision, Article 16 notice processing, or Article 20 complaint processing;
- reasoned duration decision;
- any review outcome; and
- restoration/re-enablement state.

A permanent account termination may still be available under the Terms or other law for independently serious/repeated violations where lawful, but it should be classified and justified under that separate basis rather than mislabeled as the temporary Article 23 measure.

## 7. Good-faith reporting must remain usable

TycoonX should protect itself from malicious notice spam without creating a chilling effect for genuine reporting.

Release safeguards:

- [ ] ordinary rate limits may protect infrastructure, but they must not be used to make a legally required Article 16 mechanism practically unusable;
- [ ] duplicate-identical submissions may be deduplicated operationally, but the original valid notice must still be processed;
- [ ] high reporting volume alone does not prove abuse;
- [ ] accurately reporting many illegal items during a real incident is not itself misuse;
- [ ] a user who makes a genuine mistake should not be treated like a malicious spammer without supporting facts;
- [ ] do not retaliate against users for exercising mandatory complaint, consumer, privacy, refund, withdrawal, or judicial rights; and
- [ ] preserve the Article 16 exception under which the reporter's name/email need not be required for notices concerning information considered to involve offences referred to in Articles 3 to 7 of Directive 2011/93/EU.

## 8. Trusted flaggers are a separate Article 22 path

Do not treat a trusted flagger like an ordinary bulk reporter merely because it submits many notices.

Where Article 22 applies:

- notices from a certified trusted flagger acting within its designated expertise receive priority and are processed without undue delay;
- if CK-Labs has information indicating that a trusted flagger submitted a **significant number** of insufficiently precise, inaccurate, or inadequately substantiated Article 16 notices, Article 22(6) requires communication of that information, with explanations and supporting documents, to the Digital Services Coordinator that awarded the status; and
- CK-Labs should not invent its own `trusted flagger revoked` state. Suspension or revocation of trusted-flagger status is handled by the competent Digital Services Coordinator under the DSA.

This does not prevent Article 23 analysis where its legal conditions genuinely apply, but the dedicated Article 22 process must not be bypassed when the subject is a certified trusted flagger.

## 9. Account compromise changes the analysis

Repeated illegal content or abusive notices can be generated from a compromised account.

Where compromise is reasonably possible:

- investigate credential/session compromise separately from the Article 23 misuse assessment;
- preserve relevant login/session/security evidence lawfully;
- contain the security threat using proportionate temporary controls where necessary;
- do not automatically infer the account owner's malicious intention merely from activity performed through the account;
- provide a recovery route where reasonably possible; and
- distinguish the security incident from any later contractual or Article 23 decision.

A compromised account can still require immediate protective restrictions. The safeguard is that CK-Labs records the true security reason rather than treating every victim of compromise as an intentional repeat offender.

## 10. Automation may detect patterns, but must not manufacture the legal conclusion

Automated systems may help detect repeated content, duplicate notices, unusual volume, coordinated abuse, or likely illegality. They should not make the final Article 23 determination by applying an unexplained threshold alone.

Release requirements:

- preserve which automated signal or classifier contributed to the case;
- keep raw counts separate from the legal label `manifestly illegal` or `manifestly unfounded`;
- require human or otherwise legally compliant review appropriate to the decision and applicable Article 20/GDPR safeguards;
- avoid hidden risk scores that cannot be reconstructed for a later complaint; and
- ensure an automation outage or duplicate event cannot extend a suspension indefinitely.

If the resulting restriction falls within Article 17, the affected recipient must receive the applicable statement of reasons. If Article 20 applies, the internal complaint route must remain available for the legally required period except to the extent a valid Article 23(2) suspension lawfully affects complaint processing.

## 11. Article 24 reporting linkage

If Article 23 applies, the transparency-data model must separately count Article 23 suspensions for:

1. provision of manifestly illegal content;
2. submission of manifestly unfounded notices; and
3. submission of manifestly unfounded complaints.

Do not collapse these into a generic `abuse suspension` metric. Article 24(1)(b) requires those categories to be distinguished in the applicable transparency reporting.

The reporting record must not contain unnecessary player personal data, private-message content, full support transcripts, credentials, payment details, Apple/Google/Xsolla tokens, or reporter identities merely to support a public aggregate statistic.

## 12. Diamonds, 30-Day VIP, Lifetime VIP, and payments are isolated

Article 23 is a content/reporting misuse rule, not payment authority.

An Article 23 warning or suspension must **not by itself**:

- remove unrelated legitimately purchased **Diamonds**;
- replay, duplicate, or reverse a Diamond grant;
- restart, shorten, extend, or duplicate a valid one-time **30-Day VIP**;
- revoke, duplicate, convert, migrate, or recreate **Lifetime VIP**;
- create an Apple, Google Play, or Xsolla refund;
- treat a valid refund/withdrawal request as a manifestly unfounded moderation complaint; or
- convert a content-moderation dispute into chargeback, regional-pricing, entitlement, or payment fraud without separate evidence.

If an account is independently suspended or terminated under the Terms, any effect on access to paid digital products must still be assessed under the Terms, the Purchases & Refunds Policy, platform/provider records, and mandatory consumer law. An Article 23 label never overrides non-waivable consumer remedies.

## 13. Data minimisation and evidence retention

Keep enough evidence to prove the warning, assessment, suspension, review, and reporting classification without building an unlimited behavioral dossier.

At minimum, define retention for:

- counted content/notice/complaint identifiers;
- assessment factors and reviewer decision;
- warning evidence;
- suspension start/end;
- appeal/review outcome;
- Article 22 trusted-flagger escalation evidence where applicable; and
- Article 24 aggregate reporting evidence where applicable.

Do not retain unrelated chats, precise locations, contact lists, payment credentials, or device data merely because an Article 23 case exists. Apply the TycoonX Privacy Policy, GDPR retention/deletion gates, legal holds where genuinely needed, and access controls.

## 14. Minimum release tests

Before CK-Labs treats Article 23 as operationally ready, test at least:

1. **High-volume good-faith reporting:** one user accurately reports many genuinely illegal posts. The user is not suspended merely because the volume is high.
2. **Repeated malicious notices:** a user submits many demonstrably fabricated Article 16 notices. The system records absolute count, relative proportion, gravity, intention where identifiable, warning, and a proportionate temporary processing suspension.
3. **Mixed-quality reporter:** a user submits 20 notices, 4 of which are unfounded. The backend does not classify the user as abusive solely from raw count.
4. **Single severe illegal post:** emergency safety action may occur under the correct separate basis, but the system does not falsely record one incident as frequent Article 23 misuse.
5. **Compromised account:** a hijacked account posts repeated illegal content. Security containment occurs, compromise evidence is considered, and malicious intent is not automatically attributed to the account owner.
6. **Duplicate automation event:** a repeated worker/event cannot create a second warning, double suspension, or extend the expiry unintentionally.
7. **Expiry:** a temporary Article 23 suspension ends when intended and does not become indefinite because a scheduled job fails.
8. **Redress:** an applicable Article 17/20 reason and review route remains coherent with the Article 23 decision.
9. **Trusted flagger quality issue:** where Article 22 applies, the case follows the Digital Services Coordinator information route rather than CK-Labs inventing a revocation.
10. **Entitlement isolation:** the suspension does not remove Diamonds, change the 30-Day VIP clock, revoke Lifetime VIP, or create a payment-provider action.
11. **Transparency categorisation:** any applicable Article 24 report distinguishes illegal-content, unfounded-notice, and unfounded-complaint suspensions.
12. **Exemption mode:** when Article 19 applies, the UI/legal copy does not falsely advertise the voluntary anti-abuse workflow as a mandatory Article 23 procedure.

## 15. Release evidence packet

Keep a dated internal packet containing:

- feature-by-feature DSA classification;
- current Article 19 enterprise-size analysis and evidence;
- canonical Terms/Community Standards version used;
- Article 23(4) detailed-policy check if the duty applies;
- sample prior warning;
- sample case-by-case assessment;
- sample temporary suspension and expiry evidence;
- Article 22 trusted-flagger escalation template if relevant;
- Article 24 category mapping if relevant;
- Article 17/20/21 redress mapping;
- privacy/retention classification; and
- evidence that payments and entitlements are isolated from moderation misuse decisions.

## 16. Founder-protective but lawful operating rule

The protective model is not `never suspend reporters` and it is not `ban anyone who reports too much`.

The correct model is:

> TycoonX may protect its community, moderators, and infrastructure from genuinely repeated and demonstrable misuse, while preserving good-faith reporting, proportionality, prior-warning and case-by-case safeguards where Article 23 applies, separate security treatment for compromised accounts, mandatory redress, privacy, and unrelated paid entitlements.

That gives CK-Labs meaningful tools against coordinated spam, malicious reports, and repeated manifest illegality without turning a founder-protective rule into an arbitrary or unenforceable punishment.

## 17. Canonical/localization consequence

This operational gate does **not by itself materially change** the current public TycoonX Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards. The current Community Standards already contain a conditional anti-abuse and good-faith-reporting baseline.

Accordingly, no localized document should be reopened merely because this gate exists.

If Article 23 becomes applicable and CK-Labs adds the detailed Article 23(4) misuse policy to the canonical Community Standards or Terms, that **will** be a material public legal change. At that point:

- reopen the affected localized document type;
- synchronize all 25 locales in the required order;
- preserve natural native-language examples and suspension terminology;
- update `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`; and
- do not mark the localization queue complete again until all affected pages are current.

## Sources checked for this gate

- Regulation (EU) 2022/2065, Articles 16, 17, 19, 20, 22, 23 and 24, official EUR-Lex text, checked September 1, 2026.
- Canonical TycoonX Community Standards & Moderation Policy in this repository.

## Current status

**Operational legal design:** hardened.  
**Article 23 applicability:** conditional on the real feature classification and Article 19 enterprise-size status.  
**Production readiness:** not complete until classification evidence and the tests above exist.  
**Localization impact this run:** none.
