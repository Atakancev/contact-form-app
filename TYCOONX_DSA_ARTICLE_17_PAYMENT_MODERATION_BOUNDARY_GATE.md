# TycoonX DSA Article 17 Payment & Moderation Boundary Release Gate

Last reviewed: **September 4, 2026**  
Operator/business name used in player-facing documents: **CK-Labs**

This is a narrow companion to `TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST.md`, `TYCOONX_DSA_INTERMEDIARY_LIABILITY_AUTHORITY_ORDERS_RELEASE_GATE.md`, and the existing DSA release gates. It does not replace them. Its purpose is to stop TycoonX from confusing an EU Digital Services Act content-moderation restriction with an ordinary purchase, refund, chargeback, fraud, tax, entitlement, payment-provider event, or authority order.

TycoonX went to full release on **September 1, 2026**. All rendered legal/support copy must use **TycoonX** exactly.

## 1. Why this boundary matters

Article 17 of Regulation (EU) 2022/2065 requires a hosting-service provider to give the affected recipient a clear and specific statement of reasons when the provider imposes certain restrictions because information supplied by the recipient is considered illegal or incompatible with the provider's terms and conditions.

Covered restrictions can include:

- removing information or disabling access to it;
- restricting visibility, including demotion;
- suspending, terminating, or otherwise restricting **monetary payments**;
- suspending or terminating the service, in whole or in part; and
- suspending or terminating the recipient's account.

The words `monetary payments` must not be read as meaning that every payment-related TycoonX event is a DSA content-moderation decision. Recital 55 specifically discusses monetisation or revenue associated with information provided by the recipient. The Article 17 trigger remains tied to a restriction imposed because user-provided information is considered illegal or incompatible with the terms.

### Release invariant

> A TycoonX payment or entitlement event is not automatically an Article 17 moderation decision merely because money, Diamonds, VIP, a refund, or a chargeback is involved. Equally, CK-Labs must not relabel a genuine content-moderation restriction as `payment risk`, `fraud`, `commerce`, `spam`, or `authority action` merely to avoid an Article 17 statement of reasons.

## 2. DSA scope must be classified before the workflow fires

For each TycoonX surface, document whether it is:

1. not an intermediary/hosting function for the relevant operation;
2. a hosting-service function under the DSA; or
3. an online-platform function that also disseminates stored user information to the public.

Examples that may need feature-specific hosting analysis include public chat, profiles, public company/union descriptions, player-created art, music, books, listings, reviews, and other stored user-provided information.

Do not assume a feature is a hosting service solely because it has a database row. Do not assume a payment ledger is hosted UGC solely because it is associated with a player account.

Article 17 is in the hosting-service layer of the DSA. The separate Article 19 micro/small-enterprise exemption concerns additional Section 3 online-platform duties. A valid micro/small classification can therefore affect duties such as Articles 20 to 28, but it does not erase an Article 17 hosting-service duty where Article 17 itself applies.

## 3. Article 17 decision test

Before classifying a decision as an Article 17 moderation event, record all of the following:

- the TycoonX feature and information object involved;
- whether the information was supplied by or at the request of a recipient of the service;
- whether CK-Labs is acting as a hosting-service provider for that information;
- the exact restriction imposed;
- whether the restriction is imposed because the information is allegedly illegal or because it conflicts with a specific TycoonX Terms/Community Standards rule;
- whether the restriction arose from an Article 16 notice, another report, an authority communication, automated detection, or CK-Labs' own investigation;
- whether the action is actually an Article 9 order, which has its own statutory workflow and is excluded from Article 17 by Article 17(5);
- whether the narrow deceptive-high-volume-commercial-content exception in Article 17(2) is being relied on and, if so, the documented factual basis; and
- whether known electronic contact details exist for the affected recipient.

If the answer shows that the event is only a transaction-state or entitlement-reconciliation event, route it to the commerce/payment workflow instead of inventing a DSA moderation reason.

## 4. Ordinary commerce events that are not automatically Article 17 decisions

The following are not automatically Article 17 moderation decisions merely because they can affect a user's money, Diamonds, VIP, account access, or purchase history:

- an Apple App Store refund or reversal;
- a Google Play refund, voided purchase, pending-purchase cancellation, or chargeback;
- an Xsolla failed, pending, canceled, refunded, reversed, or charged-back transaction;
- strong-customer-authentication or 3DS failure;
- VAT, tax, FX, regional-availability, sanctions, or payment-method restrictions;
- a payment-provider fraud-screening decline;
- duplicate payment callbacks or duplicate entitlement grants being corrected idempotently;
- restoration or migration of a valid entitlement;
- a pricing/catalog/configuration error being corrected under the applicable purchase contract and mandatory law;
- a Diamond balance reconciliation following a genuine payment reversal;
- a 30-Day VIP entitlement reconciliation following the actual transaction state; or
- a Lifetime VIP entitlement reconciliation following the actual transaction state.

These events still need the separate TycoonX purchase, refund, chargeback, security, consumer-law, and provider-specific safeguards already maintained in this repository.

## 5. When a payment restriction can be part of an Article 17 moderation decision

A monetary restriction can fall within Article 17 where it is imposed because user-provided information is considered illegal or incompatible with TycoonX rules.

Examples include:

- CK-Labs removes a public player-created listing for an alleged scam and simultaneously disables revenue or monetisation associated with that listing;
- CK-Labs suspends a creator payout feature because the creator's hosted content is found to violate the applicable content rules; or
- CK-Labs restricts marketplace monetisation specifically as a moderation response to hosted user-provided information.

In those cases, do not send only a financial message such as `payout disabled` or `payment restricted`. The moderation reason must satisfy the applicable Article 17 requirements.

## 6. Mixed incident rule: separate moderation from commerce

A single factual incident can create more than one legal/operational decision. Do not collapse them into one opaque action.

Where both layers exist, create linked but separate records.

### Moderation record

Record:

- content/information object;
- moderation ground;
- restriction type and duration/scope;
- facts/circumstances relied upon;
- automation involvement;
- Article 16/Article 9/own-initiative source classification;
- Article 17 statement sent and timestamp, or the precise documented reason Article 17 does not apply;
- applicable moderation redress; and
- Article 24(5) reporting state if that separate duty applies.

### Commerce/payment record

Record:

- store/provider and transaction identifier;
- authoritative payment state;
- product/SKU;
- price/currency/tax information where relevant;
- refund/reversal/chargeback state;
- entitlement action;
- idempotency key; and
- payment/refund dispute route.

A moderation decision must not silently overwrite authoritative Apple, Google Play, Xsolla, or CK-Labs transaction records. A provider refund or reversal must not silently generate a moderation violation.

## 7. Article 17 statement-of-reasons minimum

Where Article 17 applies and CK-Labs knows the recipient's relevant electronic contact details, deliver the statement **at the latest from the date the restriction is imposed**, subject to the Regulation's specific deceptive-high-volume-commercial-content exception and the Article 9 exclusion described below.

The reason object must be capable of communicating, as applicable:

- the exact restriction imposed;
- territorial scope and duration where relevant;
- facts and circumstances relied on;
- whether the decision followed an Article 16 notice or CK-Labs' own voluntary investigation;
- notifier identity only where disclosure is strictly necessary and lawful;
- whether automated means were used to detect/identify the information or to take the decision;
- for allegedly illegal information, the legal ground and why the information is considered illegal on that ground;
- for a TycoonX Terms/Community Standards decision, the specific contractual/policy ground and why the information conflicts with it; and
- clear, user-friendly information about redress actually available, including any applicable internal complaint, certified out-of-court dispute settlement, and judicial route.

Article 17(4) requires the information to be clear and easily comprehensible and as precise and specific as reasonably possible in the circumstances so the recipient can effectively use the available redress routes.

Do not use `policy violation`, `fraud`, `security reasons`, `payment issue`, `illegal content`, `spam`, or `automated moderation` as a complete reason where a more specific explanation is required.

## 8. Article 17(5): Article 9 authority orders are a separate notice path

Article 17(5) expressly says that Article 17 does **not** apply to orders referred to in Article 9. This is an important boundary, not a loophole.

When CK-Labs acts because of a valid Article 9 order to act against illegal content:

- route the order through `TYCOONX_DSA_INTERMEDIARY_LIABILITY_AUTHORITY_ORDERS_RELEASE_GATE.md`;
- authenticate the authority and legal instrument before treating it as compulsory process;
- preserve the order's content locator, legal basis, territorial scope, action timestamp, effect response, and required recipient-notice state;
- use the Article 9(5) recipient-notification workflow and any lawful procedural restriction or delay that applies, rather than manufacturing a duplicate Article 17 statement;
- do not describe an authority's order as though it were CK-Labs' independent contractual finding; and
- do not create an Article 24(5) Transparency Database statement solely by pretending an Article 9 order was an Article 17 decision.

### Separate CK-Labs decision after an Article 9 order

The same underlying information can later support a **separate** CK-Labs decision under the TycoonX Terms or Community Standards. If CK-Labs independently imposes a restriction on that separate ground, classify that later decision on its own facts. Article 17 can apply to the separate CK-Labs decision even though Article 17 did not apply to the authority order itself.

Operationally, preserve two records rather than one ambiguous status:

- `authority_order_action`, with authority/order provenance and Article 9 notice state; and
- `provider_moderation_action`, only if CK-Labs actually made a separate provider decision, with its own Article 17 classification and reason state.

Never duplicate a sanction merely because both records exist. One removal caused by one order must not be executed twice, and a duplicate event must not delete additional content, suspend additional features, or touch paid entitlements.

## 9. Article 17(2): deceptive high-volume commercial content is a narrow exception

Article 17(2) says the paragraph 1 statement-of-reasons obligation does not apply where the information is **deceptive high-volume commercial content**. Recital 55 links this exception to intentional manipulation of the service, including inauthentic use such as bots, fake accounts, or other deceptive uses.

Treat this as a narrow anti-spam/inauthentic-commercial-abuse exception, not a generic way to avoid explanations.

Before relying on it, preserve a short internal record of why the information qualifies, including where relevant:

- the commercial nature of the information;
- the high-volume dissemination pattern;
- the deceptive or inauthentic element;
- bot/fake-account or coordinated manipulation indicators where relevant;
- the content/account identifiers affected;
- whether automation contributed to the classification; and
- the reviewer or rule version responsible for the classification.

Do **not** rely on the exception merely because:

- a message is unwanted or repetitive;
- a player sent several messages quickly;
- content mentions a product, company, Diamond price, or trade;
- a report labels the content `spam`, `scam`, `commercial`, or `fraud`;
- an account is new or unpopular; or
- providing a reason would be operationally inconvenient.

The exception is not a finding of criminal fraud, does not create a chargeback, and does not waive other applicable contractual, consumer, privacy, safety, platform, or judicial-redress rights. If another law or platform rule requires a notice or explanation, Article 17(2) does not erase that separate duty.

Where the factual basis is uncertain, do not stretch the exception. Classify the decision normally and provide the Article 17 statement if its conditions are met, while withholding only security-sensitive details that law does not require CK-Labs to disclose.

## 10. Security-sensitive information and anti-abuse rules

Article 17 transparency does not require CK-Labs to publish credentials, internal security architecture, reusable fraud thresholds, secret detection signatures, reporter contact details, or personal data that is not required for the explanation.

The statement should be specific enough to let the affected user understand the action and exercise available redress without giving an attacker a reusable playbook for bypassing security controls.

If immediate containment is necessary, the workflow must still produce the legally required statement at the required time using the information that can lawfully be provided. A generic permanent `security reasons` placeholder is not a substitute for a compliant reason.

## 11. Account compromise boundary

A moderation event on a compromised TycoonX account must not automatically become a final finding that the legitimate owner intentionally posted the information.

Where relevant:

- contain dangerous content or account activity promptly;
- preserve the moderation basis and the actual session/content evidence;
- separately investigate account-compromise indicators;
- keep the Article 17 reason focused on the restriction and the information involved rather than falsely attributing intent;
- provide the appropriate account-recovery route; and
- do not manufacture a chargeback, entitlement-abuse, regional-pricing-abuse, or fraud finding from the moderation event alone.

An Article 9 order naming a compromised account also does not prove that the legitimate owner authored the underlying content. The authority-order action and attribution/account-recovery investigation remain separate.

## 12. Diamonds, 30-Day VIP, and Lifetime VIP isolation

### Diamonds

A content moderation decision, Article 9 order, or reliance on the deceptive-high-volume-content exception does not by itself authorize CK-Labs to erase unrelated legitimately purchased Diamonds or create a negative Diamond balance. Any Diamond correction must have its own lawful transaction, exploit, fraud, chargeback, contractual, or other valid basis and must preserve mandatory consumer rights.

### 30-Day VIP

TycoonX 30-Day VIP remains a **one-time, non-renewing 30-day entitlement**. A moderation statement, Article 9 order, or spam classification does not by itself restart, shorten, convert, or extend its contractual duration. If account access is separately restricted, entitlement and consumer-remedy consequences must still follow the Terms, purchase contract, provider rules, and mandatory law.

### Lifetime VIP

TycoonX Lifetime VIP remains a **one-time promotional entitlement offered only during selected genuine sales windows**. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future sales availability. A moderation action, Article 9 order, or Article 17 exception does not by itself create an expiry date, rewrite a completed purchase price, or turn Lifetime VIP into a recurring product.

If a serious Terms violation independently supports suspension or termination, apply the account-enforcement framework and preserve all mandatory consumer remedies. Do not describe an unrelated entitlement forfeiture as part of Article 17 merely because both actions occur on the same day.

## 13. Apple, Google Play, Xsolla, and CK-Labs role separation

### Apple App Store

Apple can control App Store transaction confirmation, store-side refunds/reversals, and applicable platform terms. An Apple transaction event does not substitute for a CK-Labs Article 17 reason where CK-Labs made a separate content-moderation decision. Separately, Apple's current App Review Guideline 1.2 requires UGC/social apps to maintain filtering, reporting, timely response, user-blocking, and contact safeguards; those product safeguards do not replace DSA classification or notice duties.

### Google Play

Google can control Play transaction confirmation, refunds, voided purchases, chargebacks, and applicable platform rules. RTDN or Developer API state is payment evidence, not a TycoonX moderation reason. Google Play's current UGC rules likewise require appropriate ongoing moderation/reporting safeguards where applicable; those platform requirements are distinct from Article 17.

### Xsolla webshop

Xsolla can perform transaction processing, fraud screening, tax/VAT functions, refunds/reversals, chargeback handling, and merchant-of-record functions according to the applicable transaction/project terms. A Xsolla payment event is not automatically evidence that user-provided TycoonX information violated the Community Standards.

### CK-Labs

CK-Labs remains responsible for its own TycoonX moderation decisions, its own entitlement-delivery/reconciliation logic, authority-order handling where applicable, and the player-facing reason required for a CK-Labs moderation restriction where Article 17 applies.

## 14. Article 24(5) Transparency Database separation

Do not confuse the user-facing Article 17 statement with the separate Article 24(5) DSA Transparency Database duty.

Where TycoonX qualifies as an online platform and the Article 24(5) duty applies after the required Article 19 size/status analysis:

- covered Article 17 moderation decisions must be submitted without undue delay;
- personal data must be removed from the public-database submission;
- public taxonomy/category mapping must match the current Commission schema; and
- user-specific private redress details must not be copied blindly into the public payload.

The Commission's Transparency Database concerns statements submitted by **online platforms**, which are a subset of hosting services. Do not assume that every hosting-service Article 17 decision creates an Article 24(5) database duty without the separate online-platform/scope analysis.

A pure Apple, Google Play, Xsolla, tax, refund, chargeback, or entitlement-ledger event that is not an Article 17 moderation decision must not be injected into the DSA Transparency Database merely because it affected money or account value. Likewise, an Article 9 order must not be converted into a fake Article 17 decision merely to generate a Transparency Database payload.

## 15. 2026 German enforcement signal

This is an operational priority, not theoretical drafting.

- On **April 30, 2026**, the Digital Services Coordinator at the Bundesnetzagentur reported that it received more than **2,000 DSA complaints in 2025**. The majority concerned inadequate reasons for restrictions to accounts, content or services or for content removal/non-removal, and the usability of illegal-content reporting systems.
- On **July 6, 2026**, the German DSC announced that it had identified DSA infringements in its eBay investigation, including incomplete compliance with statement-of-reasons requirements. The authority emphasized that reasons must be clear, comprehensible, and precise so users can understand the measure and exercise their rights. The announcement expressly stated that this was **not yet a final decision**.

Production consequence for TycoonX:

- [ ] test at least one own-initiative content removal and verify a specific Article 17 reason;
- [ ] test one Article 16 notice-based restriction and verify the notice source is recorded;
- [ ] test one visibility/demotion restriction if the product uses one;
- [ ] test one account/service restriction triggered by hosted information;
- [ ] test one UGC-linked monetary/monetisation restriction if such a feature exists;
- [ ] test one ordinary refund/chargeback and confirm it does **not** create a fake Article 17 moderation record;
- [ ] test one mixed moderation + payment incident and confirm two linked but independent records are produced;
- [ ] test one valid Article 9 order and confirm the Article 9 notice workflow is used without a duplicate Article 17 statement;
- [ ] test one fake/invalid authority email and confirm it does not enter the Article 9 or Article 17 execution path;
- [ ] test one deceptive-high-volume commercial-content classification and confirm the narrow factual basis is preserved;
- [ ] test one ordinary repeated/non-commercial message and confirm it is **not** pushed into the exception merely to suppress a reason; and
- [ ] preserve dated screenshots/log evidence of the actual reason visible to the affected user where Article 17 applies.

## 16. Release evidence packet

Before relying on this gate, preserve a dated evidence packet containing:

- feature-by-feature DSA hosting/online-platform classification;
- CK-Labs Article 19 size/status assessment;
- moderation decision schema;
- payment/transaction decision schema;
- authority-order decision schema;
- mapping showing which decisions trigger Article 17;
- mapping showing Article 9 orders are routed out of Article 17 under Article 17(5);
- criteria and evidence fields used before relying on the deceptive-high-volume-commercial-content exception;
- a sample Article 17 statement for each supported restriction type;
- a sample Article 9 recipient notice generated through the authority-order workflow;
- test evidence for account-compromise handling;
- test evidence for provider refund/reversal handling;
- proof that legitimate Diamonds and VIP are not automatically removed by a moderation reason, authority order, or exception classification;
- Article 24(5) submission configuration if applicable; and
- reviewer name/date for the production check.

## 17. Source-of-truth references

Re-check these before a material moderation/payments release because law and enforcement practice can change:

1. Regulation (EU) 2022/2065, especially Articles 9, 17, 19, 20, 21 and 24 and Recital 55:  
   https://eur-lex.europa.eu/eli/reg/2022/2065/oj
2. European Commission DSA Transparency Database Q&A:  
   https://digital-strategy.ec.europa.eu/en/faqs/dsa-transparency-database-questions-and-answers
3. European Commission DSA transparency overview:  
   https://digital-strategy.ec.europa.eu/en/policies/dsa-brings-transparency
4. Apple App Review Guidelines, especially Guideline 1.2 for user-generated content:  
   https://developer.apple.com/app-store/review/guidelines/
5. Google Play User Generated Content policy:  
   https://support.google.com/googleplay/android-developer/answer/9876937
6. Bundesnetzagentur DSC 2025 activity report announcement, April 30, 2026:  
   https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/EN/2026/20260430_TB_DSC.html
7. Bundesnetzagentur eBay DSA announcement, July 6, 2026:  
   https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/EN/2026/20260706_DSC_ebay.html

## 18. Final go-live rule

Do not ship a TycoonX moderation/payment integration that uses one generic `fraud/payment/policy/spam/authority` status for every action. Keep content moderation, Article 9 authority orders, transaction state, entitlement state, security/account compromise, Article 17 exception classification, and DSA reporting as independently auditable state machines, linked where necessary but never silently substituted for one another.

This gate adds operational protection only. It does **not** waive statutory withdrawal, conformity, update, termination, price-reduction, refund, liability, privacy, judicial-redress, or other mandatory consumer rights.
