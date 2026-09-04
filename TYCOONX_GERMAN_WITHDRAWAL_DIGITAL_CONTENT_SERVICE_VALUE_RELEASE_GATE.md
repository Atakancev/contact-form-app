# TycoonX German Withdrawal: Digital Content, Services & Value Compensation Release Gate

**Last reviewed: September 4, 2026**

This is an internal production-compliance companion to `TYCOONX_GERMAN_ECOMMERCE_CHECKOUT_RELEASE_GATE.md`. It focuses narrowly on German withdrawal-law classification, early performance, proof of consent, early expiry of the withdrawal right, and value compensation. It does not replace the existing electronic withdrawal-function, checkout, refund, payment-provider, or digital-product conformity gates.

TycoonX is a fully released service. This gate must be applied to the real Apple App Store, Google Play, and official TycoonX web-shop/Xsolla purchase architecture where German consumer law applies.

## 1. Current German-law checkpoint

The production implementation must use the current BGB numbering and substance, not an older template copied from historical legal text.

For the current BGB reviewed on September 4, 2026:

- **BGB § 356(4)** governs early expiry of the withdrawal right for contracts for services. For a paid service, full performance is required, and before performance begins the consumer must have expressly consented to performance beginning before the withdrawal period ends and acknowledged that the withdrawal right expires upon full performance. The additional durable-medium requirement applies to the consent in the off-premises case specified by the statute.
- **BGB § 356(5)** governs early expiry for digital content not supplied on a tangible medium. For paid digital content, the trader must have begun performance, the consumer must have expressly consented to beginning before the withdrawal period ends, the consumer must have acknowledged that this causes the withdrawal right to expire when performance begins, and the trader must provide the confirmation required by **BGB § 312f**.
- **BGB § 357a(2)** allows proportionate value compensation for paid services supplied before withdrawal only where the consumer expressly requested early performance and the statutory information requirements were met. The agreed total price is the normal calculation basis; where that price is disproportionately high, market value is the statutory fallback.
- **BGB § 357a(3)** states that a consumer withdrawing a contract for digital content not supplied on a tangible medium owes **no value compensation** for that digital content.
- **BGB § 357(8)** applies the relevant consequences in **BGB § 327p** correspondingly to withdrawal from contracts for digital products.

These rules must not be collapsed into one generic checkbox such as `I waive all withdrawal rights immediately`.

## 2. Classify the actual product before designing the withdrawal flow

Every German-facing paid product/SKU must have a documented, transaction-specific classification for withdrawal-law purposes. The analysis must consider the actual contractual promise and supply model, not the label most convenient for engineering.

At minimum, record whether the transaction is treated as:

- non-tangible digital content;
- a digital service or another service;
- a package containing separable content and service elements; or
- another category requiring separate legal analysis.

Do not assume that every in-game entitlement is automatically digital content merely because it is represented by data. Do not assume that every timed entitlement is automatically a service merely because time passes after activation. Where classification is genuinely uncertain, the checkout must not rely on the most aggressive early-expiry interpretation until the classification has been resolved.

## 3. Evidence required per German consumer transaction

The authoritative transaction record should be able to reconstruct, where relevant:

- TycoonX account and internal order ID;
- product/SKU and offer version;
- Apple, Google, Xsolla, or other authorized channel;
- contracting trader/merchant and legally relevant checkout interface;
- legal classification used for withdrawal processing;
- checkout country/storefront and applicable German-law determination;
- withdrawal-information version shown before purchase;
- withdrawal-period start and calculated end;
- exact early-performance request or consent text/version;
- consent timestamp and affirmative interaction evidence;
- exact acknowledgment-of-loss text/version where required;
- acknowledgment timestamp and affirmative interaction evidence;
- BGB § 312f contract-confirmation record and delivery timestamp where required;
- authoritative payment-success timestamp;
- entitlement/performance-start timestamp;
- full-performance timestamp where legally relevant;
- withdrawal submission timestamp and route;
- electronic withdrawal-function evidence where BGB § 356a applies;
- refund/reversal/unwind outcome; and
- the authoritative provider transaction and entitlement IDs used for reconciliation.

A preselected checkbox, buried terms link, inferred consent from login, ordinary continued use, app launch, or a server-side default flag is not treated as affirmative proof of a legally required express consent or acknowledgment.

## 4. Paid non-tangible digital content

If a TycoonX purchase is correctly classified as paid digital content not supplied on a tangible medium, the early-expiry path must satisfy **all** current BGB § 356(5) conditions that apply.

Production rule:

1. Payment or order creation alone does not prove early expiry.
2. Performance must actually have begun.
3. The consumer's early-performance consent must be affirmative and provable.
4. The consumer's acknowledgment that the right will expire when performance begins must be affirmative and provable.
5. The required BGB § 312f confirmation must be provided and retained as evidence.
6. If any required element cannot be proven, Support and refund logic must not pretend the withdrawal right already expired merely because the entitlement was delivered or used.

Most importantly, **BGB § 357a(3) means there is no consumer value-compensation claim for withdrawn non-tangible digital content**. CK-Labs must not invent a contractual `used digital content fee`, `consumed Diamonds debt`, `restocking fee`, or similar penalty to recreate a value-compensation right that German law does not provide.

This does not mean a valid withdrawal lets a consumer retain both the returned money and the paid digital content indefinitely. The legally permitted post-withdrawal consequences, including BGB § 327p where applicable, must be handled separately and without affecting unrelated legitimate transactions.

## 5. Paid services and partial performance

If a TycoonX product is correctly classified as a paid service, starting performance does **not** by itself mean the withdrawal right has expired. Under current BGB § 356(4), the paid-service early-expiry rule is tied to full performance plus the required pre-performance consent and acknowledgment.

Where a consumer validly withdraws after requesting performance to begin during the withdrawal period but before full performance, any value-compensation claim must satisfy **BGB § 357a(2)**. It must be proportionate, based on the service actually supplied up to withdrawal, and supported by the required express request and information. It is not a cancellation penalty or a tool for discouraging withdrawal.

Production must not automatically charge 100% of a 30-day or longer service merely because it was activated. If the agreed total price is the statutory basis, the system must be capable of calculating the portion actually supplied; if the agreed total price is disproportionately high, the statutory market-value fallback must remain possible.

## 6. Diamonds

Purchased Diamonds remain governed by the canonical rule that **purchased Diamonds do not expire solely because time passes**.

For German withdrawal processing:

- do not hard-code a public legal conclusion that every Diamond transaction necessarily has the same classification in every architecture without reviewing the actual product and contract;
- if a Diamond purchase is treated as non-tangible digital content, spending some or all Diamonds does not itself prove that every BGB § 356(5) prerequisite was satisfied;
- if a valid withdrawal exists, do not create a `used Diamonds` value-compensation debt contrary to BGB § 357a(3) where that provision applies;
- a legally valid unwind may remove or block the corresponding paid digital value to the extent permitted by applicable law and authoritative records, but it must not remove unrelated paid purchases, unrelated promotional value, or VIP solely because the withdrawn transaction involved Diamonds;
- duplicate grants, technical errors, fraudulent transactions, genuine chargebacks, and payment reversals remain separate factual/legal grounds and must not be disguised as withdrawal-value compensation.

## 7. One-time 30-Day VIP

**30-Day VIP is a one-time, non-renewing 30-day entitlement.** It must never silently become a recurring subscription.

Its German withdrawal treatment must follow the actual legal classification. The production architecture must not choose `instant digital content` solely to make the withdrawal right disappear at activation, and it must not choose `service` solely to manufacture a value-compensation claim.

If a service analysis applies, activation alone is not full performance. A valid BGB § 357a(2) value-compensation calculation must be proportionate to what was actually supplied before withdrawal and must satisfy the statutory request/information requirements.

A valid withdrawal must not restart the 30-day clock, create a second entitlement, or alter an unrelated 30-Day VIP purchase. Provider refunds and statutory withdrawal are separate routes that must reconcile to the same originating transaction without double refunding or double revocation.

## 8. Limited-time Lifetime VIP

**Lifetime VIP is a one-time promotional entitlement offered only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability.** A valid Lifetime VIP already purchased is not cancelled merely because a later sales window closes.

Its German withdrawal treatment must also follow the actual legal classification and evidence. A limited sales window, countdown, or later unavailability does not by itself remove a mandatory withdrawal right for a completed transaction.

Do not force a consumer to accept an unsupported `instant and irreversible waiver` merely because Lifetime VIP may never be sold again. If a valid statutory withdrawal is exercised, the transaction can be unwound as the law permits; that does not reopen the closed promotion or create a right to buy Lifetime VIP again later at the old price.

## 9. Apple, Google Play, and Xsolla role separation

The German-law analysis must identify the contracting trader/merchant and the interface responsible for the legally relevant consent, confirmation, withdrawal, and refund flow for each channel.

- **Apple App Store:** Apple may control the App Store purchase/refund interface and transaction record while CK-Labs controls TycoonX entitlement delivery. App Store refund tooling must not be described internally as proof that German statutory withdrawal requirements are irrelevant.
- **Google Play:** Google may control the Play purchase/refund interface and payment state while CK-Labs controls entitlement delivery. A Play refund or cancellation is not automatically the same legal event as a German withdrawal declaration.
- **Official TycoonX web shop using Xsolla:** the transaction-specific Xsolla entity may act as merchant of record depending on the checkout arrangement. The actual contract, checkout, receipt, and allocation of consumer-law responsibilities must be verified rather than inferred from a generic provider label.

CK-Labs must not tell a German consumer `the platform handled payment, so no statutory right exists` unless the legal allocation and actual transaction support that conclusion.

## 10. Payment state, chargebacks, fraud, and account compromise

A pending, failed, rejected, or unconfirmed payment does not create a paid entitlement merely because a withdrawal UI exists. Authoritative provider/payment state remains required for paid fulfillment.

A withdrawal request, missing consent record, or successful statutory withdrawal is not fraud, exploit abuse, chargeback abuse, or proof that the account holder acted dishonestly.

A chargeback is a payment dispute and must be reconciled through the payment/entitlement framework. A compromised-account investigation is a security matter. Neither should be used to manufacture missing withdrawal-consent evidence after the fact.

## 11. Price changes, promotions, and obvious errors

A valid withdrawal right is not a price-match mechanism. A later lower price does not automatically create a refund right for an earlier completed one-time purchase, and a later higher price does not create an extra charge, except where mandatory law requires otherwise.

Lifetime VIP may use different prices in different genuine sales windows. Closing or changing a future offer does not cure a defective earlier withdrawal-consent flow.

An obvious catalog or configuration error may be corrected under the applicable contract, provider rules, and law, but `obvious error` must not be used to bypass an otherwise valid withdrawal or to impose an invented value-compensation penalty.

## 12. Withdrawal, refund, conformity, and termination are different remedies

Support tooling must not collapse these events into one generic `refund` reason:

- statutory withdrawal;
- provider/platform refund;
- chargeback or payment reversal;
- refund for non-delivery;
- conformity remedy under German/EU digital-product law;
- price reduction;
- contract termination;
- goodwill credit; and
- technical entitlement correction.

They can have different evidence requirements and downstream effects. A lawful entitlement unwind should be transaction-scoped and idempotent.

## 13. Privacy and evidence minimization

Retain enough evidence to prove the legally relevant disclosure, request, consent, acknowledgment, confirmation, performance, withdrawal, refund, and entitlement state. Do not turn withdrawal compliance into indefinite behavioral surveillance.

Avoid retaining unnecessary full session recordings, unrelated chat history, unrelated device activity, raw payment credentials, or unrelated gameplay history merely to prove a checkout checkbox was clicked. Evidence retention must also follow the Privacy Policy and applicable retention/deletion rules.

## 14. Production regression matrix

Before declaring the German withdrawal path production-ready, test at least these cases:

1. paid digital-content purchase with all BGB § 356(5) evidence present;
2. same purchase with missing express consent;
3. same purchase with missing acknowledgment of loss;
4. same purchase with missing BGB § 312f confirmation;
5. consent checkbox preselected by default;
6. valid digital-content withdrawal after some purchased Diamonds were spent;
7. system attempts to create `used Diamonds` value compensation and is blocked;
8. paid-service product activated but not fully performed;
9. service withdrawal with valid early-performance request and proportionate BGB § 357a(2) calculation;
10. service withdrawal with no provable early-performance request and no value compensation charged;
11. active one-time 30-Day VIP withdrawal without creating a second 30-day clock;
12. Lifetime VIP withdrawal after the genuine sales window has closed, without reopening the sale;
13. Apple provider refund reconciled separately from statutory withdrawal;
14. Google provider refund reconciled separately from statutory withdrawal;
15. Xsolla merchant/refund responsibility matched to the actual transaction entity;
16. duplicated webhook or refund callback remains idempotent;
17. account-compromise case does not become an automatic fraud finding;
18. old app/client cannot bypass current consent/confirmation requirements;
19. provider outage does not fabricate consent evidence or prematurely mark a right expired; and
20. withdrawal of one transaction does not remove unrelated Diamonds, 30-Day VIP, or Lifetime VIP.

## 15. P0 release blockers

Do not treat the German withdrawal implementation as production-ready if any of these is true:

- the backend cannot state which legal classification the checkout relied on;
- paid digital content is marked `withdrawal expired` without the complete current BGB § 356(5) evidence chain;
- a paid service is marked `withdrawal expired` merely because performance started rather than because the current BGB § 356(4) requirements are met;
- service value compensation is charged without the BGB § 357a(2) request/information prerequisites;
- any BGB § 357a(3) digital-content case creates a consumer value-compensation debt;
- spending Diamonds is treated as a substitute for express consent and acknowledgment;
- 30-Day VIP or Lifetime VIP uses a forced blanket waiver unsupported by the applicable classification;
- Apple, Google, or Xsolla responsibility is assumed rather than verified transaction-by-transaction;
- withdrawal can double-refund, double-revoke, or mutate unrelated paid entitlements; or
- mandatory German/EU consumer rights are described as waivable by Terms, checkbox, continued use, or technical implementation.

## 16. Canonical/localization rule

This gate is an internal compliance and implementation control. It does not itself change the canonical player-facing Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards.

If CK-Labs later changes the canonical public meaning concerning withdrawal expiry, value compensation, product classification, Diamonds, 30-Day VIP, Lifetime VIP, or channel responsibilities, the affected canonical document must be updated first and all 25 localized versions of that document must then be synchronized before the localization tracker can remain complete.
