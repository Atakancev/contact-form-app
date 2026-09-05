# TycoonX DSA Transparency Reporting & Transparency Database Release Gate

Last reviewed: **2026-09-05**  
Operator/business name used in player-facing documents: **CK-Labs**

TycoonX went to full release on **September 1, 2026**. All rendered legal, support, moderation, payment, and store-facing prose must display **TycoonX** exactly.

This is a narrow operational companion to the existing TycoonX DSA, moderation, account, privacy, and payment release gates. It does not replace `TYCOONX_DSA_ARTICLE_17_PAYMENT_MODERATION_BOUNDARY_GATE.md`, `TYCOONX_DSA_ARTICLE_20_21_REDRESS_RELEASE_GATE.md`, `TYCOONX_DSA_ARTICLE_23_MISUSE_RELEASE_GATE.md`, `TYCOONX_DSA_ARTICLE_16_NOTICE_ACTION_RELEASE_GATE.md`, or the canonical Terms and Community Standards.

Its purpose is to prevent CK-Labs from missing or over-applying the current Digital Services Act transparency-reporting and DSA Transparency Database duties, especially while CK-Labs is a small operator and TycoonX contains a mix of game, chat, profile, community, creative-content, commerce, and account functionality.

## 1. P0 release conclusion

Do **not** treat `we are a solo developer`, `we have few users`, `we have chat`, or `we use a database` as a complete DSA classification.

Before every material community/moderation release, and at least once per accounting year, preserve a dated decision record for:

1. which TycoonX surfaces are intermediary services, hosting services, or online-platform functions under Regulation (EU) 2022/2065;
2. whether CK-Labs currently qualifies as a **micro or small enterprise** under Recommendation 2003/361/EC, including partner/linked-enterprise rules rather than only raw headcount;
3. whether Article 15 annual transparency reporting currently applies;
4. whether the additional online-platform duties in DSA Section 3 currently apply, including Article 24(5) Transparency Database submissions;
5. whether Article 24(3) requires CK-Labs to provide current monthly-active-recipient information after a request even where the micro/small exclusion otherwise applies; and
6. the date on which any exemption is lost and the corresponding activation date of each duty.

Until this classification is documented, TycoonX moderation must continue to satisfy duties that already apply independently, including applicable Articles 14, 16, 17, and 18. A micro/small exemption from Article 15 reporting or Section 3 duties is **not** a general DSA exemption.

## 2. Current legal baseline checked on 2026-09-05

### DSA Article 15

Article 15(1) requires providers of intermediary services, where the reporting duty applies, to make publicly available at least once a year clear and comprehensible reports on content moderation. The reports must be easily accessible and machine-readable.

The report can include, depending on the service classification:

- Member State authority orders and response timing;
- Article 16 notices, including trusted-flagger notices where applicable;
- CK-Labs' own-initiative content moderation;
- restrictions affecting availability, visibility, accessibility, or a user's ability to provide information;
- complaints and reversals;
- use of automated moderation tools;
- the purpose of those tools, accuracy/error indicators, and safeguards; and
- other template fields required by the current implementing rules for the relevant provider type.

### Micro/small Article 15 exemption

Article 15(2) exempts providers of intermediary services that qualify as micro or small enterprises under Recommendation 2003/361/EC and are not designated VLOPs.

Do not determine this only from `number of developers` or `monthly TycoonX users`.

The Recommendation uses enterprise-size tests that include staff and financial thresholds and can require aggregation with partner or linked enterprises. As a practical headline:

- micro enterprise: fewer than 10 persons and annual turnover or annual balance-sheet total not exceeding EUR 2 million;
- small enterprise: fewer than 50 persons and annual turnover or annual balance-sheet total not exceeding EUR 10 million.

The exact Recommendation rules, including linked/partner enterprise calculations and the timing of status changes, govern. Preserve the actual annual evidence used.

### DSA Article 19

Article 19 excludes qualifying micro and small online-platform providers from the additional Section 3 duties, except Article 24(3). The exclusion also continues for 12 months after loss of micro/small status under the conditions stated in Article 19, unless the service is designated a VLOP.

This distinction matters:

- Article 15 is in Section 1 and has its own Article 15(2) micro/small exemption;
- Article 17 is in the hosting-services section and is not removed by Article 19;
- Article 24(5) is in Section 3 and is subject to Article 19's micro/small exclusion;
- Article 24(3) is expressly carved out of the Article 19 exclusion.

Do not implement one global `dsa_exempt = true` flag.

## 3. Harmonised reporting rules are already in force

Commission Implementing Regulation (EU) 2024/2835 has applied to the harmonised transparency-reporting templates since **July 1, 2025**.

For non-VLOP intermediary/hosting/online-platform providers to which Article 15 reporting applies:

- the annual reporting period is **January 1 through December 31**;
- the report must be made public no later than **two months after the end of the reporting period**;
- the harmonised CSV/XLSX templates in Annex I must be used;
- the published report must be machine-readable and easily accessible;
- reports must be retained for at least **five years** after publication; and
- all published versions must remain publicly available for that retention period.

A corrected report is allowed, but revised versions must be explicitly identifiable by version/date. Never silently overwrite a material mistake in a published report.

The first full harmonised annual cycle is **January 1, 2026 through December 31, 2026**. If CK-Labs is subject to Article 15 for that cycle, the resulting report is due by the end of **February 2027**. This does not erase any earlier reporting duty that may have applied before the full 2026 cycle.

As of March 2026, the Commission confirmed that the first round of harmonised transparency reports had already reached its publication deadline for providers that were subject to those duties. The harmonised regime is therefore not a future feature.

## 4. Article 24 reporting for an online-platform surface

Where TycoonX is an online platform for a particular service surface and the Article 19 exclusion does not apply, Article 24 adds online-platform reporting requirements to the Article 15 report, including as applicable:

- disputes submitted to certified out-of-court dispute settlement bodies, outcomes, timing, and implementation share;
- suspensions under Article 23 for manifestly illegal content, manifestly unfounded notices, or manifestly unfounded complaints; and
- other fields required by the current harmonised template for online platforms.

Do not count an Apple refund, Google Play void, Xsolla chargeback, Diamond ledger correction, security lock, or account-compromise recovery as an Article 23 suspension unless the legal facts actually satisfy Article 23.

Similarly, a normal customer-support complaint about a purchase is not an Article 20 moderation complaint merely because the player is unhappy.

## 5. Article 24(5) DSA Transparency Database

Where TycoonX qualifies as an **online platform** for the relevant surface and Article 24(5) applies, CK-Labs must submit the decisions and Article 17 statements of reasons to the European Commission's DSA Transparency Database **without undue delay**.

The database submission is not the same event as the Article 17 notice to the affected player.

Maintain two separately auditable steps:

1. `article17_user_notice` — the clear and specific reason delivered to the affected recipient where Article 17 applies; and
2. `article24_5_database_submission` — the structured, public-database submission where Article 24(5) separately applies.

Do not mark one complete merely because the other succeeded.

### Personal-data prohibition

Article 24(5) requires the platform to ensure that the information submitted to the public database contains **no personal data**.

Before submission, remove or prevent inclusion of data such as:

- player name where identifiable;
- email address;
- internal user UUID where it can identify a natural person;
- IP address;
- device/session identifiers;
- private-message content that identifies a person;
- support-ticket text containing personal information;
- Apple transaction identifiers tied to a person;
- Google Play purchase tokens/order identifiers tied to a person;
- Xsolla transaction/customer identifiers tied to a person;
- account-recovery or security evidence; or
- personal data about reporters, victims, alleged offenders, or third parties.

Do not solve this by making the Article 17 explanation vague. The affected user notice and the public database record have different audiences and privacy constraints.

## 6. Current Commission submission methods

The Commission's current DSA Transparency Database supports:

- an API for submitting individual statements of reasons;
- a batch API for **1 to 100** statements per call; and
- a webform intended for providers expecting a low volume of statements.

The webform documentation requires a platform-unique identifier (`puid`) that is unique within the platform. Treat the PUID as an idempotency/reconciliation key, not as a place to insert personal data.

For a small TycoonX moderation volume, the webform may be operationally simpler if and when Article 24(5) applies. For higher volumes, the API may be appropriate. The legal duty is not changed by which supported submission method CK-Labs uses.

Never use the public/research API as though it were a provider-submission endpoint.

## 7. Germany onboarding route

For a provider established in Germany, the Digital Services Coordinator is the **Bundesnetzagentur**.

The current Bundesnetzagentur provider portal expressly provides:

- registration/onboarding for the DSA Transparency Database;
- submission of transparency reports; and
- legal-representative notification where relevant for providers without an EU establishment.

If CK-Labs becomes subject to Article 24(5), complete the provider onboarding through the competent DSC route before production submissions are needed. Preserve:

- date of onboarding request;
- service/platform name used;
- competent DSC;
- platform identifier assigned;
- sandbox access date;
- production access date;
- API/webform method selected;
- responsible CK-Labs operator; and
- proof of successful test and production submission.

Do not submit real player personal data to a sandbox.

## 8. Micro/small exemption is a documented status, not a forever assumption

Because CK-Labs may grow, create an annual DSA enterprise-size evidence record that includes at least:

- accounting period;
- staff headcount methodology;
- annual turnover;
- annual balance-sheet total;
- any partner enterprises;
- any linked enterprises;
- ownership/control changes;
- resulting Recommendation 2003/361/EC category;
- evidence source; and
- reviewer/date.

Re-run the assessment after a merger, sale, reorganisation, successor-operator change, material investment/control change, or acquisition that could affect linked/partner-enterprise calculations.

A business sale or reorganisation must not accidentally continue an exemption that no longer exists.

## 9. Losing micro/small status: do not activate every duty on the same date

If CK-Labs ceases to qualify as micro or small, map each duty separately.

At minimum:

- reassess Article 15(2) immediately under the Recommendation's status rules;
- separately calculate Article 19's 12-month post-loss period for Section 3 online-platform duties;
- do not use the Article 19 grace period to delay Article 15 where Article 15's own exemption has ended;
- do not use the Article 19 grace period to delay Article 17, because Article 17 is not a Section 3 duty;
- preserve the date the service stopped qualifying and the date each additional duty activates; and
- if VLOP designation ever occurs, do not rely on the micro/small exclusion.

## 10. Article 24(3) remains important even while small

Article 19 expressly preserves Article 24(3).

Therefore, even if TycoonX currently benefits from the micro/small exclusion for other Section 3 duties, CK-Labs must be able to respond **without undue delay** if the competent Digital Services Coordinator or the Commission asks for updated information used to assess average monthly active recipients of the service in the Union.

Maintain a reproducible EU-user-count methodology rather than trying to reconstruct it after a regulator request.

Do not include personal data in the information supplied under Article 24(3).

## 11. Consistency between moderation records, annual reports, and the DSA database

Since July 1, 2025, the Commission aligned the Transparency Database content categories/keywords with the harmonised transparency-reporting categories. In March 2026 the Commission expressly highlighted that the two transparency sources can be compared at scale for mismatches.

CK-Labs therefore needs one moderation event model that can produce consistent aggregates without rewriting history.

For every moderation event, preserve as applicable:

- immutable event ID;
- affected service surface;
- hosting versus online-platform classification;
- content category;
- illegal-content category where relevant;
- Terms/Community Standards ground where relevant;
- source: authority order, Article 16 notice, trusted flagger, own initiative, automated detection, or other;
- decision type;
- restriction type;
- territorial scope;
- start/end or duration where relevant;
- automation used for detection;
- automation used for decision;
- human-review state;
- Article 17 notice state;
- Article 20 complaint state if applicable;
- Article 21 dispute state if applicable;
- Article 23 misuse classification if applicable;
- Article 24(5) submission state if applicable; and
- report-period bucket.

If a historical classification is corrected, preserve the correction trail rather than silently changing past counts.

## 12. Do not count ordinary game or economy actions as content moderation

The DSA report is not a general TycoonX analytics report.

Do not automatically count as content moderation:

- attacking another player;
- prison/jail state;
- game-company role changes;
- job completion;
- market buy/sell activity;
- NPC economy adjustments;
- balance changes caused by normal gameplay;
- anti-inflation or economy rebalancing;
- lawful rollback of a duplicated reward;
- production/warehouse corrections;
- future item-price changes;
- regional price differences;
- taxes/VAT/FX changes;
- a provider outage; or
- permanent service discontinuation.

A game action can still become moderation-relevant if CK-Labs restricts user-provided information or an account on a content/rules ground. Classify the actual decision rather than the game feature name.

## 13. Hacks, exploits, fraud, and account compromise

A moderation label such as `scam`, `fraud`, `exploit`, `automation`, or `hack` must match the actual moderation ground and evidence.

Keep separate records for:

- content-moderation decision;
- security incident;
- account compromise;
- gameplay exploit correction;
- payment fraud review;
- chargeback; and
- entitlement reconciliation.

If a compromised account posted prohibited content, the public DSA database record must not identify the victim or expose account-recovery/security data. The moderation decision also must not automatically become a finding that the legitimate account holder personally intended the conduct.

## 14. Apple, Google Play, and Xsolla remain separate systems of record

DSA transparency reporting must not mutate payment authority.

A statement of reasons or transparency-report line must never itself:

- create or cancel an Apple purchase;
- create or cancel a Google Play purchase;
- create or cancel an Xsolla transaction;
- fabricate a refund;
- mark a pending payment successful;
- create a chargeback;
- change tax/VAT/FX history;
- change the completed consumer price;
- remove purchased Diamonds; or
- create, restart, shorten, extend, or duplicate VIP.

Payment-provider identifiers should not be copied into a public DSA Transparency Database record where they are personal data or unnecessary.

## 15. Diamonds, 30-Day VIP, and Lifetime VIP isolation

### Purchased Diamonds

Purchased Diamonds do not expire solely because time passes.

A DSA moderation report, statement-of-reasons submission, corrected transparency report, account restriction, or database onboarding event cannot itself expire purchased Diamonds or create a negative Diamond balance.

If a separate lawful payment reversal or entitlement correction applies, process it through the relevant Apple, Google Play, Xsolla, or CK-Labs entitlement workflow with mandatory consumer rights preserved.

### One-time 30-Day VIP

30-Day VIP remains a **one-time, non-renewing 30-day entitlement**.

A moderation event, Article 17 notice, Article 24(5) submission, appeal, regulator request, report correction, or account-recovery event cannot restart the original 30-day clock.

### Lifetime VIP

Lifetime VIP remains a **one-time promotional entitlement available only during selected genuine sales windows**. It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability for purchase.

A DSA moderation/database event cannot:

- reopen a closed Lifetime VIP sales window;
- duplicate Lifetime VIP;
- convert Lifetime VIP into 30-Day VIP;
- add an invented expiry merely because an account was moderated; or
- require the player to repurchase the entitlement after a successful account restoration.

Any lawful suspension or termination consequences must remain subject to the canonical Terms, mandatory consumer law, proportionality, and the separate account/moderation decision.

## 16. Price changes and promotions are not transparency-report corrections

CK-Labs may lawfully change future TycoonX prices, Diamond bundle pricing/content, VIP prices, regional prices, currencies, and future promotions subject to the canonical Terms and applicable consumer law.

Those future commercial changes do not retroactively change a completed purchase or past moderation report.

A later price decrease does not automatically create a refund, credit, or price-match right, and a later increase does not create an extra charge on an already completed one-time purchase, except where mandatory law requires otherwise.

Lifetime VIP may have different genuine prices in different genuine sales windows. Promotional claims, countdowns, crossed-out prices, and discount claims must remain truthful and non-misleading.

Do not hide a price/catalog/configuration mistake by changing moderation statistics or deleting a DSA record.

## 17. Outages and provider failures

A DSA reporting API/webform outage does not authorize CK-Labs to delete or backdate moderation events.

If a required submission or report publication is delayed by a provider/platform outage:

- preserve the original moderation decision timestamp;
- preserve the first attempted submission/publication timestamp;
- preserve error details/screenshots where reasonable;
- retry safely without creating duplicate records;
- retain the successful submission/publication receipt; and
- document the reason for any material delay.

A Commission/Bundesnetzagentur outage is not itself a reason to suspend a TycoonX player or alter paid entitlements.

## 18. Permanent service shutdown and business transfer

If TycoonX is lawfully permanently discontinued, preserve required historical DSA reports for their applicable retention period to the extent CK-Labs remains legally required and technically able to do so.

A shutdown does not erase mandatory consumer remedies for paid digital products.

If the business or service transfers to a successor operator, the transfer plan must preserve:

- DSA classification history;
- exemption/status evidence;
- moderation-event history needed for open disputes and reporting;
- published-report versions and retention deadlines;
- Transparency Database submission reconciliation; and
- user/payment/entitlement separation.

Do not transfer personal data beyond the lawful basis and disclosures applicable to the transaction.

## 19. Fail-closed production checklist

Do not mark DSA transparency readiness complete unless all applicable items are evidenced:

- [ ] TycoonX service surfaces classified as intermediary/hosting/online-platform as applicable.
- [ ] Current CK-Labs Recommendation 2003/361/EC enterprise-size assessment stored.
- [ ] Article 15(2) reporting exemption/applicability decision stored.
- [ ] Article 19 Section 3 exemption/applicability decision stored.
- [ ] Article 24(3) regulator-request workflow exists irrespective of the Section 3 exemption.
- [ ] Article 17 notices remain available where applicable even if Article 24(5) is exempt.
- [ ] If Article 15 applies, current Regulation (EU) 2024/2835 CSV/XLSX template process is ready.
- [ ] If Article 15 applies, January-December report cycle and end-February publication deadline are calendared.
- [ ] If Article 15 applies, report versions remain public for at least five years.
- [ ] If Article 24(5) applies, DSC onboarding and DSA Transparency Database access are complete.
- [ ] Sandbox submission uses no real player personal data.
- [ ] PUID/idempotency design cannot expose personal data.
- [ ] Required Article 24(5) submissions cannot leak personal data.
- [ ] Moderation categories reconcile with annual report categories.
- [ ] Duplicate database/API retries are idempotent.
- [ ] Account compromise/security evidence is excluded from public reporting unless legally required and appropriately non-personal.
- [ ] Apple/Google Play/Xsolla transaction state remains separate from DSA moderation state.
- [ ] Purchased Diamonds remain isolated from DSA reporting actions.
- [ ] 30-Day VIP remains one-time and non-renewing.
- [ ] Lifetime VIP remains a selected-window one-time promotional entitlement.
- [ ] No stale live-service pre-release wording appears in rendered TycoonX legal/support copy.
- [ ] Rendered brand is exactly `TycoonX`.

## 20. Production regression scenarios

| # | Scenario | Required result |
| --- | --- | --- |
| 1 | CK-Labs qualifies as micro/small and TycoonX has a public UGC surface | Preserve Article 17 and other applicable hosting duties; do not assume Article 15/Article 24(5) apply merely because public UGC exists; retain exemption evidence. |
| 2 | Regulator requests current EU monthly-active-recipient methodology while CK-Labs is micro/small | Article 24(3) response workflow remains available without personal data. |
| 3 | CK-Labs loses micro/small status | Calculate Article 15 and Article 19 activation separately; do not apply one generic 12-month delay to everything. |
| 4 | Public player content removed for a Community Standards violation | Send applicable Article 17 reason; submit to the DSA database only if Article 24(5) separately applies. |
| 5 | Private support message removed from an internal queue | Do not automatically classify it as an online-platform public-dissemination event. |
| 6 | A low-volume operator becomes subject to Article 24(5) | Complete DSC onboarding; webform is acceptable if operationally suitable; preserve unique PUID and submission receipt. |
| 7 | A high-volume moderation burst occurs | Batch API may submit 1-100 records per call; retries must be idempotent. |
| 8 | Article 17 notice contains player's email and transaction number | Deliver required user notice privately; strip personal data before any public database submission. |
| 9 | Database submission accidentally includes personal data | Treat as privacy incident, contain/correct through the available process, preserve evidence, and assess GDPR obligations separately. |
| 10 | Apple refunds a Diamond purchase | Process payment/entitlement reconciliation; do not invent a DSA moderation record. |
| 11 | Google cancels a pending purchase | Do not count as content moderation or an Article 23 suspension. |
| 12 | Xsolla chargeback follows a genuine account compromise | Keep chargeback, security, account-recovery, moderation, and DSA reporting decisions separately attributable. |
| 13 | Player is banned for repeated manifestly illegal public content | If Article 23 applies, record its specific basis and include required aggregates if reporting duties apply; do not touch unrelated paid value automatically. |
| 14 | Automated moderation removes content and human review later reverses it | Preserve automation use, original action, complaint/review outcome, reversal, and reporting correction trail as applicable. |
| 15 | Annual report contains an aggregation mistake | Publish a clearly versioned correction; keep the prior version available for the required retention period. |
| 16 | DSA database API is unavailable for several hours | Preserve original decision time, retry without duplicates, retain outage evidence, and do not backdate or erase the event. |
| 17 | Account compromise posts scam content | Contain/moderate content; do not publicly identify the legitimate account holder or infer personal intent without evidence. |
| 18 | Economy reset changes item values | Do not count ordinary economy correction as content moderation; preserve consumer remedies separately where applicable. |
| 19 | 30-Day VIP account receives a moderation warning | Original VIP clock continues unless a separate lawful entitlement/account decision applies; warning does not restart or extend it. |
| 20 | Lifetime VIP holder is moderated | Do not reopen/duplicate the entitlement or reopen the sales window; any account restriction follows the separate moderation/Terms analysis. |
| 21 | CK-Labs business is sold or reorganised | Reassess micro/small status and linked/partner-enterprise rules; preserve report/database history and paid-entitlement provenance. |
| 22 | TycoonX permanently shuts down | Preserve required report history and mandatory consumer remedies; reporting cleanup cannot erase payment/refund evidence. |

## 21. Official references checked 2026-09-05

- Regulation (EU) 2022/2065, especially Articles 15, 17, 19, and 24.
- Commission Implementing Regulation (EU) 2024/2835, especially Articles 1-3 and Annexes I-II.
- European Commission, `Harmonised transparency reporting rules under the Digital Services Act now in effect`, 1 July 2025.
- European Commission, `Harmonised transparency reports under the DSA bring enhanced clarity on content moderation practices online`, updated 3 March 2026.
- European Commission, DSA Transparency Database Questions & Answers, updated 7 July 2025.
- European Commission DSA Transparency Database webform documentation and API v2 migration documentation.
- Bundesnetzagentur / German Digital Services Coordinator provider portal and current DSA provider-duty guidance checked 2026-09-05.
- Commission Recommendation 2003/361/EC on micro, small, and medium-sized enterprises.

## 22. Founder-protective conclusion

The safest lawful position is neither `report everything because we might be a platform` nor `report nothing because CK-Labs is small`.

The protective implementation is:

1. classify each TycoonX service surface correctly;
2. prove the current micro/small status each year rather than assuming it forever;
3. keep Article 17 user explanations working independently;
4. keep Article 24(3) regulator-response evidence ready even while small;
5. activate Article 15 and Article 24 obligations only when their legal triggers actually apply;
6. make required public data non-personal and internally reconcilable;
7. keep moderation, security, payment, refund, chargeback, and entitlement ledgers separate; and
8. preserve all non-waivable EU/German consumer, privacy, redress, conformity, update, liability, and digital-product rights.
