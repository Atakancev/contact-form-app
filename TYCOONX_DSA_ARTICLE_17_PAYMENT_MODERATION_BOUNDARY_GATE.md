# TycoonX DSA Article 17 Payment & Moderation Boundary Release Gate

Last reviewed: 2026-09-03  
Operator/business name used in player-facing documents: **CK-Labs**

This is a narrow companion to `TYCOONX_COMMUNITY_MODERATION_RELEASE_CHECKLIST.md` and the existing DSA release gates. It does not replace them. Its purpose is to stop TycoonX from confusing an EU Digital Services Act content-moderation payment restriction with an ordinary purchase, refund, chargeback, fraud, tax, entitlement, or payment-provider event.

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

> A TycoonX payment or entitlement event is not automatically an Article 17 moderation decision merely because money, Diamonds, VIP, a refund, or a chargeback is involved. Equally, CK-Labs must not relabel a genuine content-moderation restriction as `payment risk`, `fraud`, or `commerce` merely to avoid an Article 17 statement of reasons.

## 2. DSA scope must be classified before the workflow fires

For each TycoonX surface, document whether it is:

1. not an intermediary/hosting function for the relevant operation;
2. a hosting-service function under the DSA; or
3. an online-platform function that also disseminates stored user information to the public.

Examples that may need feature-specific hosting analysis include public chat, profiles, public company/union descriptions, player-created art, music, books, listings, reviews, and other stored user-provided information.

Do not assume a feature is a hosting service solely because it has a database row. Do not assume a payment ledger is hosted UGC solely because it is associated with a player account.

Article 17 is in the hosting-service layer of the DSA. The separate Article 19 micro/small-enterprise exemption concerns additional Section 3 online-platform duties. A valid micro/small classification can therefore affect duties such as Articles 20-28, but it does not erase an Article 17 hosting-service duty where Article 17 itself applies.

## 3. Article 17 decision test

Before classifying a decision as an Article 17 moderation event, record all of the following:

- the TycoonX feature and information object involved;
- whether the information was supplied by or at the request of a recipient of the service;
- whether CK-Labs is acting as a hosting-service provider for that information;
- the exact restriction imposed;
- whether the restriction is imposed because the information is allegedly illegal or because it conflicts with a specific TycoonX Terms/Community Standards rule;
- whether the restriction arose from an Article 16 notice, another report, an authority communication, automated detection, or CK-Labs' own investigation; and
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

Examples:

- CK-Labs removes a public player-created listing for an alleged scam and simultaneously disables revenue or monetisation associated with that listing;
- CK-Labs suspends a creator payout feature because the creator's hosted content is found to violate the applicable content rules; or
- CK-Labs restricts marketplace monetisation specifically as a moderation response to hosted user-provided information.

In those cases, do not send only a financial message such as `payout disabled` or `payment restricted`. The moderation reason must satisfy the applicable Article 17 requirements.

## 6. Mixed incident rule: separate moderation from commerce

A single factual incident can create more than one legal/operational decision. Do not collapse them into one opaque action.

Where both layers exist, create linked but separate records:

### Moderation record

Record:

- content/information object;
- moderation ground;
- restriction type and duration/scope;
- facts/circumstances relied upon;
- automation involvement;
- Article 17 statement sent and timestamp;
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

Where Article 17 applies and CK-Labs knows the recipient's electronic contact details, deliver the statement **at the latest when the restriction is imposed**, subject to the Regulation's specific exception for deceptive high-volume commercial content.

The reason object must be capable of communicating, as applicable:

- the exact restriction imposed;
- territorial scope and duration where relevant;
- facts and circumstances relied on;
- whether the decision followed a notice or CK-Labs' own investigation;
- notifier identity only where disclosure is strictly necessary and lawful;
- whether automated means were used to detect/identify the information or to take the decision;
- for allegedly illegal information, the legal ground and why the information is considered illegal on that ground;
- for a TycoonX Terms/Community Standards decision, the specific contractual/policy ground and why the information conflicts with it; and
- available redress, including any internal complaint, certified out-of-court dispute settlement, and judicial route that actually applies.

Do not use `policy violation`, `fraud`, `security reasons`, `payment issue`, `illegal content`, or `automated moderation` as a complete reason where a more specific explanation is required.

## 8. Security-sensitive information and anti-abuse rules

Article 17 transparency does not require CK-Labs to publish credentials, internal security architecture, reusable fraud thresholds, secret detection signatures, reporter contact details, or personal data that is not required for the explanation.

The statement should be specific enough to let the affected user understand the action and exercise available redress without giving an attacker a reusable playbook for bypassing security controls.

If immediate containment is necessary, the workflow must still produce the legally required statement at the required time using the information that can lawfully be provided. A generic permanent `security reasons` placeholder is not a substitute for a compliant reason.

## 9. Account compromise boundary

A moderation event on a compromised TycoonX account must not automatically become a final finding that the legitimate owner intentionally posted the information.

Where relevant:

- contain dangerous content or account activity promptly;
- preserve the moderation basis and the actual session/content evidence;
- separately investigate account-compromise indicators;
- keep the Article 17 reason focused on the restriction and the information involved rather than falsely attributing intent;
- provide the appropriate account-recovery route; and
- do not manufacture a chargeback, entitlement-abuse, regional-pricing-abuse, or fraud finding from the moderation event alone.

## 10. Diamonds, 30-Day VIP, and Lifetime VIP isolation

### Diamonds

A content moderation decision does not by itself authorize CK-Labs to erase unrelated legitimately purchased Diamonds or create a negative Diamond balance. Any Diamond correction must have its own lawful transaction, exploit, fraud, chargeback, contractual, or other valid basis and must preserve mandatory consumer rights.

### 30-Day VIP

TycoonX 30-Day VIP remains a **one-time, non-renewing 30-day entitlement**. A moderation statement does not by itself restart, shorten, convert, or extend its contractual duration. If account access is separately restricted, entitlement and consumer-remedy consequences must still follow the Terms, purchase contract, provider rules, and mandatory law.

### Lifetime VIP

TycoonX Lifetime VIP remains a **one-time promotional entitlement offered only during selected genuine sales windows**. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future sales availability. A moderation action does not by itself create an expiry date, rewrite a completed purchase price, or turn Lifetime VIP into a recurring product.

If a serious Terms violation independently supports suspension or termination, apply the account-enforcement framework and preserve all mandatory consumer remedies. Do not describe an unrelated entitlement forfeiture as part of Article 17 merely because both actions occur on the same day.

## 11. Apple, Google Play, Xsolla, and CK-Labs role separation

### Apple App Store

Apple can control App Store transaction confirmation, store-side refunds/reversals, and applicable platform terms. An Apple transaction event does not substitute for a CK-Labs Article 17 reason where CK-Labs made a separate content-moderation decision.

### Google Play

Google can control Play transaction confirmation, refunds, voided purchases, chargebacks, and applicable platform rules. RTDN or Developer API state is payment evidence, not a TycoonX moderation reason.

### Xsolla webshop

Xsolla can perform transaction processing, fraud screening, tax/VAT functions, refunds/reversals, chargeback handling, and merchant-of-record functions according to the applicable transaction/project terms. A Xsolla payment event is not automatically evidence that user-provided TycoonX information violated the Community Standards.

### CK-Labs

CK-Labs remains responsible for its own TycoonX moderation decisions, its own entitlement-delivery/reconciliation logic, and the player-facing reason required for a CK-Labs moderation restriction where Article 17 applies.

## 12. Article 24(5) Transparency Database separation

Do not confuse the user-facing Article 17 statement with the separate Article 24(5) DSA Transparency Database duty.

Where TycoonX qualifies as an online platform and the Article 24(5) duty applies after the required Article 19 size/status analysis:

- covered Article 17 moderation decisions must be submitted without undue delay;
- personal data must be removed from the public-database submission;
- public taxonomy/category mapping must match the current Commission schema; and
- user-specific private redress details must not be copied blindly into the public payload.

A pure Apple, Google Play, Xsolla, tax, refund, chargeback, or entitlement-ledger event that is not an Article 17 moderation decision must not be injected into the DSA Transparency Database merely because it affected money or account value.

## 13. 2026 German enforcement signal

This is an operational priority, not theoretical drafting.

- On **April 30, 2026**, the Digital Services Coordinator at the Bundesnetzagentur reported that it received more than **2,000 DSA complaints in 2025**. The majority concerned inadequate reasons for restrictions to accounts, content or services or for content removal/non-removal, and the usability of illegal-content reporting systems.
- On **July 6, 2026**, the German DSC announced that it had identified DSA infringements in its eBay investigation, including incomplete compliance with statement-of-reasons requirements. The authority emphasized that reasons must be clear, comprehensible, and precise so users can understand the measure and exercise their rights. The announcement expressly stated that this was **not yet a final decision**.

Production consequence for TycoonX:

- [ ] test at least one content removal;
- [ ] test one visibility/demotion restriction if the product uses one;
- [ ] test one account/service restriction triggered by hosted information;
- [ ] test one UGC-linked monetary/monetisation restriction if such a feature exists;
- [ ] test one ordinary refund/chargeback and confirm it does **not** create a fake Article 17 moderation record;
- [ ] test one mixed moderation + payment incident and confirm two linked but independent records are produced; and
- [ ] preserve dated screenshots/log evidence of the actual reason visible to the affected user.

## 14. Release evidence packet

Before relying on this gate, preserve a dated evidence packet containing:

- feature-by-feature DSA hosting/online-platform classification;
- CK-Labs Article 19 size/status assessment;
- moderation decision schema;
- payment/transaction decision schema;
- mapping showing which decisions trigger Article 17;
- a sample Article 17 statement for each supported restriction type;
- test evidence for account-compromise handling;
- test evidence for provider refund/reversal handling;
- proof that legitimate Diamonds and VIP are not automatically removed by a moderation reason;
- Article 24(5) submission configuration if applicable; and
- reviewer name/date for the production check.

## 15. Source-of-truth references

Re-check these before a material moderation/payments release because law and enforcement practice can change:

1. Regulation (EU) 2022/2065, especially Articles 17, 19, 20, 21 and 24 and Recital 55:  
   https://eur-lex.europa.eu/eli/reg/2022/2065/oj
2. European Commission DSA Transparency Database Q&A:  
   https://digital-strategy.ec.europa.eu/en/faqs/dsa-transparency-database-questions-and-answers
3. European Commission DSA transparency overview:  
   https://digital-strategy.ec.europa.eu/en/policies/dsa-brings-transparency
4. Bundesnetzagentur DSC 2025 activity report announcement, 30 April 2026:  
   https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/EN/2026/20260430_TB_DSC.html
5. Bundesnetzagentur eBay DSA announcement, 6 July 2026:  
   https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/EN/2026/20260706_DSC_ebay.html

## 16. Final go-live rule

Do not ship a TycoonX moderation/payment integration that uses one generic `fraud/payment/policy` status for every action. Keep content moderation, transaction state, entitlement state, security/account compromise, and DSA reporting as independently auditable state machines, linked where necessary but never silently substituted for one another.

This gate adds operational protection only. It does **not** waive statutory withdrawal, conformity, update, termination, price-reduction, refund, liability, privacy, judicial-redress, or other mandatory consumer rights.
