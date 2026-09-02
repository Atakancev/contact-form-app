# TycoonX DSA Transparency Reporting Release Gate

Last reviewed: **September 2, 2026**  
Operator/business name used in player-facing documents: **CK-Labs**

This gate covers EU Digital Services Act transparency-reporting duties that can apply to TycoonX community, chat, hosting, and other intermediary-service features. It complements `TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST.md`; it does not replace the Article 14, 16, 17, 18, or 24(5) moderation controls already documented there.

TycoonX went to full release on **September 1, 2026**. Nothing in this gate describes the live service, users, purchases, VIP, Diamonds, rewards, or legal terms as beta.

## 1. Current legal baseline

The current baseline is:

- Regulation (EU) 2022/2065, especially **Article 15** for transparency reports by providers of intermediary services;
- **Article 15(2)**, which exempts qualifying micro or small enterprises from Article 15(1) where they are not a very large online platform;
- **Article 19**, which separately exempts qualifying micro and small online platforms from most Section 3 duties, subject to the Regulation's exceptions and transition rules;
- **Article 24**, which adds online-platform reporting and active-recipient obligations where those provisions apply; and
- Commission Implementing Regulation **(EU) 2024/2835**, which standardises the form, content, reporting periods, publication deadline, template format, correction/version handling, and retention period for DSA transparency reports.

The harmonised rules have applied since **July 1, 2025**. For providers of intermediary services, hosting services, and online platforms that are subject to Article 15(1), the ordinary annual reporting period is now **January 1 through December 31**, and the report must be made publicly available no later than **two months after the end of the reporting period**. The first full annual reporting cycle that must follow the harmonised templates throughout the entire cycle is **January 1 through December 31, 2026**.

The first round of reports using the harmonised framework was published by the end of **February 2026** for the applicable transitional period. Do not confuse that transitional cycle with the first full January-to-December harmonised cycle in 2026.

Official references checked September 2, 2026:

- DSA: https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng
- Implementing Regulation (EU) 2024/2835: https://eur-lex.europa.eu/eli/reg_impl/2024/2835/oj/eng
- Commission transparency-reporting overview: https://digital-strategy.ec.europa.eu/en/news/harmonised-transparency-reporting-rules-under-digital-services-act-now-effect
- Commission March 2026 update on the first harmonised reports: https://digital-strategy.ec.europa.eu/en/news/harmonised-transparency-reports-under-dsa-bring-enhanced-clarity-content-moderation-practices-online
- DSA Transparency Database Q&A: https://digital-strategy.ec.europa.eu/en/faqs/dsa-transparency-database-questions-and-answers

## 2. First release question: does Article 15(1) currently apply to CK-Labs?

Do not assume that every TycoonX community feature automatically creates an Article 15 report, and do not assume that being a small independent operator automatically proves the exemption.

Before relying on Article 15(2), preserve a dated enterprise-size determination under Recommendation 2003/361/EC showing the facts used to determine whether CK-Labs qualifies as a **micro or small enterprise** and confirming that TycoonX is not a designated very large online platform.

- [ ] Record the relevant employee/headcount calculation.
- [ ] Record the relevant turnover and/or balance-sheet figures used by the Recommendation.
- [ ] Record whether any linked or partner-enterprise rules affect the calculation.
- [ ] Record the assessment date and person responsible for rechecking it.
- [ ] Reassess when ownership, financing, group structure, headcount, turnover, or balance-sheet figures materially change.

### If the Article 15(2) exemption applies

CK-Labs does **not** need to publish an Article 15(1) annual transparency report merely to appear more compliant. Keep the exemption evidence instead.

Do not turn a voluntary community-statistics page into a representation that it is the statutory DSA transparency report unless the statutory report actually applies and the current template/instructions are followed.

The Article 15(2) exemption does **not** erase separately applicable DSA duties such as Articles 14, 16, 17, or 18. It must not be used as a generic `small business means no DSA duties` shortcut.

### If the Article 15(2) exemption does not apply

Treat the reporting system as a production compliance requirement. The Article 15 report must be publicly available, easily accessible, clear, comprehensible, and machine-readable, and must use the current harmonised format and reporting period required by Implementing Regulation (EU) 2024/2835.

If CK-Labs determines that Article 15(1) applied during a period for which a harmonised report should already have been published, do not backdate or fabricate a report. Preserve the actual determination date, reconstruct reliable data where possible, document limitations, and obtain appropriate legal/compliance review for remediation.

## 3. Exact 2024/2835 reporting cycle and transition controls

Do not calculate reporting periods from the date TycoonX launched or from the date CK-Labs first created a moderation database.

For an in-scope non-VLOP intermediary, hosting service, or online platform:

- the ordinary annual reporting period under Article 2(1) of Implementing Regulation (EU) 2024/2835 is **January 1 to December 31**;
- the publication deadline is **no later than two months after the end of the reporting period**;
- the transition period ended on **December 31, 2025**;
- the second DSA reporting cycle was shortened so that it ended on December 31, 2025;
- the harmonised Annex I template/instructions became mandatory for content-moderation data from **July 1, 2025** onward within that transitional cycle; and
- the first full annual cycle using the harmonised framework throughout is **January 1 to December 31, 2026**.

If CK-Labs was exempt under Article 15(2) for a period, do not invent a statutory report for that period. If CK-Labs later loses the Article 15(2) exemption, determine the actual legal reporting start point and cycle from the then-current rules instead of backfilling fictional historical obligations.

The Article 19 online-platform transition and the Article 15(2) reporting exemption are separate legal mechanisms. Do **not** import Article 19's 12-month transition after loss of micro/small status into Article 15 automatically.

## 4. Mandatory file format, versioning, and five-year public retention

Where the harmonised transparency-reporting duty applies, a generic PDF, webpage, screenshot, or hand-written Markdown report is not a substitute for the prescribed template.

Implementing Regulation (EU) 2024/2835 requires providers to use the **CSV or XLSX version of the Annex I templates**, completed in accordance with Annex II. The Regulation specifically harmonises machine-readability and easy accessibility. Therefore:

- [ ] Generate the required report using the then-current Commission CSV or XLSX template.
- [ ] Do not silently change column names, category codes, units, or required structure to make internal analytics easier.
- [ ] Validate that exported numeric fields, percentages, medians, dates, and category codes match the template instructions.
- [ ] A human-readable HTML/PDF summary may be offered in addition where useful, but it must not replace the required harmonised template.
- [ ] Preserve the exact machine-readable file that was publicly released.

The Regulation also requires transparency reports to be retained for **at least five years after publication**, and requires the reports, including **all published versions**, to remain publicly accessible throughout that retention period.

If a published report is corrected because of an inconsistency, calculation error, or methodology change:

- [ ] publish a corrected version rather than silently overwriting history;
- [ ] explicitly mark the **version and date** so readers can distinguish versions;
- [ ] preserve the previous published version and keep it publicly available for the required retention period;
- [ ] record what changed, why it changed, and who approved the correction; and
- [ ] do not use a correction to conceal a missed deadline, known data-quality problem, or materially different methodology.

A corrected transparency report is not an admission that the underlying moderation action was unlawful. Likewise, correcting a moderation event does not justify editing payment entitlements.

## 5. Article 15 event data that must be measurable if reporting applies

The production moderation/audit model should be able to aggregate the Article 15 categories without reconstructing them manually from screenshots.

### Member State orders

Be able to report, where applicable:

- [ ] orders from Member State authorities, including Article 9 and Article 10 orders;
- [ ] the relevant illegal-content category;
- [ ] the issuing Member State; and
- [ ] the timing metrics required by the current Article 15/template rules.

Do not store more personal data than necessary merely to produce aggregate transparency statistics.

### Article 16 illegal-content notices

For hosting functions, be able to aggregate:

- [ ] the number of Article 16 notices;
- [ ] the type of alleged illegal content;
- [ ] trusted-flagger status where legally relevant;
- [ ] whether action was taken under law or under TycoonX Terms/Community Standards;
- [ ] whether automated means processed the notice; and
- [ ] the required timing metrics.

A normal support request, gameplay report, refund request, account-compromise report, or bug report must not be counted as an Article 16 illegal-content notice unless it actually meets the relevant classification.

### Own-initiative moderation

Be able to aggregate meaningful information about CK-Labs' own-initiative moderation, including where applicable:

- [ ] use of automated tools;
- [ ] training and assistance for people performing moderation;
- [ ] restriction type, such as removal, visibility restriction, service restriction, or account restriction;
- [ ] illegal-content or Terms/Community Standards category;
- [ ] detection method; and
- [ ] the type of restriction imposed.

Do not expose anti-cheat detection thresholds, security secrets, exploit signatures, private reporter information, or other details whose publication is not required and would create a security or abuse risk.

### Complaints and reversals

Where applicable, be able to aggregate:

- [ ] complaint counts;
- [ ] the basis of the complaints;
- [ ] decisions on those complaints;
- [ ] required median decision times; and
- [ ] how often moderation decisions were reversed.

This is not permission to identify individual players in a public report.

### Automated moderation

Where automated means are used for content moderation, maintain enough validated data to support the current reporting requirements concerning:

- [ ] a qualitative description of the automated system's use;
- [ ] its precise purpose;
- [ ] accuracy indicators;
- [ ] possible error rates; and
- [ ] safeguards applied.

Do not publish invented accuracy figures because the tooling does not currently measure them. If the statutory report applies, measurement quality becomes part of the release/compliance work.

## 6. Article 24 online-platform reporting is a separate layer

Do not merge Article 15 and Article 24 into one generic `DSA report` assumption.

Where a TycoonX feature qualifies as an **online platform** and the Article 19 micro/small exclusion is unavailable, Article 24 can add further reporting duties, including information concerning eligible out-of-court disputes and suspensions under Article 23.

Article 24(2) also contains a six-month publication rule for average monthly active recipients of an online platform or online search engine. While Article 19 generally excludes qualifying micro/small online platforms from Section 3, **Article 24(3) is expressly excepted from that exclusion**. Therefore:

- [ ] document whether each relevant TycoonX social feature is a hosting service, an online platform, or neither for the relevant DSA purpose;
- [ ] if Article 19 applies, record which Article 24 duties are currently excluded and do not accidentally promise the excluded public reporting duties;
- [ ] maintain a way to respond without undue delay if the Digital Services Coordinator or Commission requests current active-recipient information under Article 24(3); and
- [ ] never send personal data as part of the Article 24(3) active-recipient calculation response where the Regulation says that information shall not include personal data.

## 7. Article 24(5) DSA Transparency Database alignment

The public Article 15 transparency report and the Article 24(5) DSA Transparency Database are separate outputs. Do not treat publication of one as completion of the other.

Article 24(5) requires providers of **online platforms** within scope to submit Article 17 statements of reasons to the Commission's DSA Transparency Database without undue delay after the moderation decision, subject to the DSA's scope/exemption rules. The Commission's database accepts submissions through its web form or API and requires personal data to be removed from the submitted information.

From **July 1, 2025**, the Commission aligned the Transparency Database content categories and submission requirements with the harmonised transparency-reporting framework. As a result:

- [ ] use the current Transparency Database schema, not a locally cached 2023/2024 schema;
- [ ] keep Article 17 user-facing statement-of-reasons generation separate from the sanitized Article 24(5) database payload;
- [ ] remove personal data before database submission;
- [ ] preserve submission status, error/retry state, decision identifier, category mapping, and submission timestamp;
- [ ] ensure retries are idempotent and do not create multiple moderation actions or multiple payment/entitlement actions;
- [ ] reconcile category mappings between Article 15/24 reports and the Transparency Database, while recognising that the datasets have different legal scopes and do not have to contain identical totals; and
- [ ] treat a material unexplained mismatch as a data-quality investigation trigger rather than automatically changing player sanctions.

The Commission's Q&A currently states that statements can be submitted individually or in batches of up to 100 through the API. That is an implementation option, not a reason to create a paid reporting dependency.

If Article 19 currently excludes Article 24(5) for a qualifying micro/small TycoonX online-platform feature, preserve the classification evidence and re-evaluate before the exemption is lost. Do not voluntarily upload personal or moderation data to the Transparency Database merely to imitate a statutory submission that is not legally required.

## 8. Reporting data must remain separate from payment and entitlement enforcement

A DSA transparency report is not a purchase ledger and is not a reason to expose transaction-level consumer data.

- Do not publish Apple, Google Play, or Xsolla order IDs, payment tokens, card data, tax data, refund evidence, or chargeback evidence in a public DSA report.
- Do not publish account IDs, email addresses, IP addresses, device identifiers, reporter identities, private-message content, or support-ticket content merely to make the report more detailed.
- Do not alter purchased Diamonds, valid one-time 30-Day VIP, or valid Lifetime VIP because an event was included in, excluded from, corrected in, or reclassified for DSA reporting.
- A moderation-statistics correction must not replay, revoke, or duplicate a payment entitlement.
- A Transparency Database retry must not restart or extend the original one-time 30-Day VIP period, expire Lifetime VIP, duplicate Diamonds, or manufacture a refund/chargeback event.

## 9. Data-quality and audit controls

If Article 15 reporting applies, reporting evidence should be reproducible from authoritative event records.

- [ ] Use stable event/category identifiers rather than free-text-only labels.
- [ ] Version the moderation taxonomy and record when a category mapping changes.
- [ ] Deduplicate retries and repeated provider/webhook/admin events before aggregation.
- [ ] Preserve enough audit evidence to explain material report totals without indefinitely retaining unnecessary personal content.
- [ ] Separate event time, decision time, notification time, appeal time, reversal time, Transparency Database submission time, and report-publication time.
- [ ] Record automated versus human involvement using actual system state rather than reviewer memory.
- [ ] Validate that totals reconcile across Article 16 notices, Article 17 restrictions, appeals/reversals, and any applicable Article 24(5) Transparency Database submissions without assuming those datasets must be numerically identical.

Different DSA datasets can legitimately differ because their scopes are different. A mismatch is an investigation trigger, not automatic proof of wrongdoing.

## 10. Public-report publication controls if the duty applies

Before publishing a statutory transparency report:

- [ ] use the then-current Implementing Regulation (EU) 2024/2835 **CSV or XLSX Annex I template** and Annex II instructions rather than an old spreadsheet copied from another platform;
- [ ] verify the correct service/provider identity is **TycoonX / CK-Labs**;
- [ ] verify the correct reporting period and the two-month publication deadline;
- [ ] verify required machine-readable output and template structure;
- [ ] remove personal data and unnecessary security-sensitive details;
- [ ] preserve an immutable copy/hash of every version actually published;
- [ ] record each publication URL, version, date, and timestamp;
- [ ] keep every published version publicly available for **at least five years after publication**; and
- [ ] test the public URL while logged out so the required file is genuinely accessible.

Do not use GitHub Actions or a paid reporting service merely to satisfy this gate. A local/manual generation process is acceptable if it reliably produces the required current format.

## 11. Change triggers

Re-run the DSA reporting assessment before or promptly after any of the following:

- CK-Labs ceases to qualify as a micro or small enterprise;
- ownership or corporate structure changes in a way that affects Recommendation 2003/361/EC calculations;
- TycoonX community functionality materially expands;
- a private feature becomes publicly disseminated to a potentially unlimited audience;
- TycoonX introduces user monetisation, creator payments, or materially different moderation restrictions;
- the Commission changes the transparency-reporting template, taxonomy, instructions, file format, reporting period, or Transparency Database schema;
- the Bundesnetzagentur or Commission requests active-recipient information or other DSA evidence; or
- TycoonX is ever assessed for or designated as a very large online platform.

Do **not** import Article 19's 12-month transition after loss of micro/small status into Article 15 automatically. Article 15 has its own exemption text and must be reassessed on its own legal basis.

## 12. Release/current-operation gate

Before treating the DSA reporting layer as ready for current operation:

- [ ] complete and retain the current Article 15(2) enterprise-size assessment;
- [ ] classify the relevant TycoonX community features as intermediary/hosting/online-platform functions where applicable;
- [ ] if Article 15(1) applied during the transitional 2025 period, confirm whether the February 2026 harmonised reporting obligation was triggered and remediate any missed obligation without fabricating history;
- [ ] if Article 15(1) applies for 2026, collect the full January 1 through December 31, 2026 dataset using the current harmonised taxonomy and prepare for publication no later than two months after year-end;
- [ ] if Article 15(1) is exempt, retain the exemption evidence and a recheck trigger rather than building unnecessary public compliance claims;
- [ ] ensure moderation data can be aggregated prospectively if status changes;
- [ ] ensure any applicable Article 24(5) submission uses the current post-July-1-2025 database schema and has personal data removed;
- [ ] ensure Article 24(3) authority-request readiness is not lost merely because Article 19 excludes other Section 3 duties;
- [ ] ensure published reports and every corrected version can remain publicly accessible for at least five years; and
- [ ] keep reporting and Transparency Database workflows separate from entitlement/refund/chargeback reconciliation.

## 13. Founder-protective rule

The legally safer position is not `publish everything` and not `we are small so nothing applies`.

Use the exact statutory classification, preserve dated evidence for any exemption, publish only what is actually required in the current **CSV/XLSX harmonised format** when the duty applies, retain every published report version for the required **five-year public-access period**, remove personal data from Article 24(5) database submissions, keep security-sensitive information out of public reporting unless law truly requires it, and re-open the analysis whenever CK-Labs, TycoonX, the Commission template, or the Transparency Database schema materially changes.
