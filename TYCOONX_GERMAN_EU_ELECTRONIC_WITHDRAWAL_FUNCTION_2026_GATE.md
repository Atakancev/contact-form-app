# TycoonX German/EU Electronic Withdrawal Function Gate

Status: implementation and release-readiness gate

Last legal recheck: 11 September 2026

This gate documents the German electronic withdrawal-function requirement that has applied since 19 June 2026 and turns it into concrete TycoonX checkout, entitlement, evidence, and QA requirements. It supplements the canonical TycoonX Purchases & Refunds Policy. It does not replace transaction-specific legal analysis or mandatory consumer rights.

## 1. Why this gate exists

German § 356a BGB requires a trader, for covered distance contracts concluded through an online user interface, to ensure that the consumer can submit a withdrawal declaration through an electronic withdrawal function while the statutory withdrawal period is running.

The function must be continuously available during that period, prominently placed, easy to access, and labelled clearly with `Vertrag widerrufen` or another equally unambiguous formulation. After the consumer supplies or confirms the required identifying information, a second confirmation function must be presented and clearly labelled `Widerruf bestätigen` or an equally unambiguous formulation. After submission, the trader must immediately send confirmation on a durable medium containing at least the content of the withdrawal declaration and the date and time of receipt.

This requirement implements Article 11a of Directive 2011/83/EU as inserted by Directive (EU) 2023/2673. The relevant German rules apply from 19 June 2026.

Primary legal references:

- § 356a BGB: https://www.gesetze-im-internet.de/bgb/__356a.html
- § 355 BGB: https://www.gesetze-im-internet.de/bgb/__355.html
- § 356 BGB: https://www.gesetze-im-internet.de/bgb/__356.html
- Directive (EU) 2023/2673, Article 11a: https://eur-lex.europa.eu/eli/dir/2023/2673/oj

## 2. Scope rule for TycoonX

Do not treat every refund, reversal, chargeback, or support ticket as a statutory withdrawal. The first question is whether the consumer has a statutory withdrawal right for the specific transaction and whether that right is still running.

The second question is who is the contracting trader and who controls the online interface through which the contract was concluded. The answer may differ between:

- the CK-Labs-controlled TycoonX webshop;
- an embedded or redirected Xsolla checkout;
- Apple App Store In-App Purchase;
- Google Play Billing; and
- any future authorized purchase channel.

The existence of a provider-hosted checkout does not justify silently removing a mandatory consumer right. At the same time, CK-Labs must not create a parallel purchase or withdrawal flow that conflicts with a platform-controlled legally operative interface. The merchant/interface allocation must be established from the real production checkout and transaction documents.

## 3. Minimum two-stage withdrawal flow

Where § 356a BGB applies and CK-Labs is responsible for the relevant online interface, the production flow must satisfy all of the following:

1. During the running withdrawal period, show an easy-to-find, prominently placed and continuously available function labelled `Vertrag widerrufen` or an equally unambiguous formulation.
2. Do not hide this function only inside a support FAQ, generic contact form, refund article, account-delete screen, or chatbot.
3. After activation, allow the consumer to provide or confirm at least:
   - the consumer's name;
   - information identifying the contract or the part of the contract to be withdrawn; and
   - the electronic means to which the receipt confirmation should be sent.
4. Then display a separate confirmation control labelled `Widerruf bestätigen` or an equally unambiguous formulation.
5. Treat a declaration submitted through the confirmation function before expiry of the withdrawal period as received within that period in accordance with § 356a(5) BGB.
6. Immediately send a durable-medium receipt confirmation containing at least the withdrawal declaration content plus date and time of receipt.
7. Do not make the electronic function the consumer's only legally valid method of withdrawal where other methods remain available under mandatory law.

A button called `Request refund`, `Contact support`, `Cancel purchase`, or similar is not automatically equivalent to the statutory withdrawal function. The legal function, labels, availability, confirmation step, and durable-medium acknowledgment must independently satisfy the applicable requirements.

## 4. Withdrawal period and early-expiry evidence

The ordinary German statutory withdrawal period under § 355 BGB is 14 days where the law grants that right, subject to the special commencement and expiry rules that apply to the transaction.

Do not assume that instant delivery automatically destroys the withdrawal right.

For paid digital content not supplied on a tangible medium, § 356(6) BGB requires specific conditions before the withdrawal right can expire early after performance begins, including the consumer's express consent to early performance, acknowledgment of the resulting loss of the withdrawal right, and the required confirmation under § 312f BGB.

For paid services, § 356(5) BGB has a different rule and generally links early expiry to complete performance plus the legally required prior consent and acknowledgment. Product classification therefore matters.

A generic acceptance of the TycoonX Terms, a pre-ticked box, mere payment, opening the game, spending Diamonds, using VIP, or receiving a server entitlement must not be treated by itself as proof that the statutory withdrawal right lawfully expired.

Where CK-Labs relies on early expiry, retain durable, transaction-linked evidence of the exact consent, acknowledgment, disclosure version, timestamp, product and transaction.

## 5. TycoonX product mapping

### Purchased Diamonds

Purchased Diamonds are virtual in-game currency/digital value. Their exact consumer-law classification and the legal conditions for any early loss of withdrawal rights must be assessed against the actual checkout and supply model.

If a valid statutory withdrawal is exercised, reconciliation must be source-specific. Do not wipe unrelated earned, promotional, compensated, gifted, or separately purchased Diamonds merely because one paid Diamond transaction is withdrawn.

If some attributable paid Diamonds have already been consumed, apply the legally correct transaction-specific consequence rather than inventing an unsupported cash exchange rate or deleting unrelated account value.

### One-time 30-Day VIP

30-Day VIP is a one-time, non-renewing entitlement. It must never be described or processed as a recurring subscription merely to fit a provider workflow.

Whether a specific 30-Day VIP transaction is legally digital content, a digital service, another digital product category, or a mixed arrangement must be assessed from the real performance promised and supplied. Do not assume that activation alone ends the withdrawal right.

A valid withdrawal/refund/reversal of one 30-Day VIP transaction must remove or correct only the value attributable to that source. It must not delete a separate Lifetime VIP entitlement or another independently valid VIP source.

### Lifetime VIP

Lifetime VIP is a one-time promotional entitlement that may be sold only during selected genuine sales windows. It may be withdrawn from future sale and may never return. It does not create an expectation of continuous future availability.

The limited sales window does not remove mandatory withdrawal rights. A genuine countdown may describe how long the offer remains available for new purchases, but it must not falsely imply that a statutory withdrawal right expires when the sales window closes.

A withdrawn Lifetime VIP transaction must be reconciled against that exact purchase source. It must not remove unrelated Diamonds, another valid paid entitlement, or unrelated promotional value.

### Future recurring products

If TycoonX ever introduces a recurring subscription, it needs its own compliant cancellation, renewal, withdrawal, price-change, notice, and entitlement logic. The current one-time 30-Day VIP and Lifetime VIP rules cannot be reused as a shortcut for recurring billing.

## 6. Xsolla webshop responsibility check

For every production-equivalent German Xsolla flow, capture evidence showing:

- the contracting/merchant entity shown before purchase;
- whether checkout is embedded, redirected, or otherwise provider-hosted;
- which party controls the legally operative online interface;
- where and how the statutory withdrawal function is exposed while the period is running;
- the exact labels used in German;
- what contract identifier is accepted;
- where the consumer chooses or confirms the electronic confirmation destination;
- the confirmation-step wording;
- the durable-medium receipt generated after submission;
- how Xsolla and CK-Labs exchange the resulting transaction state; and
- how TycoonX entitlement reconciliation occurs exactly once.

Do not infer compliance from a provider logo, generic refund portal, or contract clause. Verify the actual German production flow.

## 7. Apple and Google Play responsibility check

Apple and Google control substantial portions of their native purchase and transaction-management interfaces. TycoonX should use the platform-required purchase mechanisms where applicable and should not fabricate a competing system screen that misstates the merchant or platform process.

For each platform, retain current evidence of:

- the product type and SKU/product ID;
- the storefront/merchant presentation;
- the transaction confirmation and receipt;
- the applicable platform refund/withdrawal route;
- any CK-Labs player-facing disclosure or link needed to preserve mandatory rights; and
- the server-side outcome used to grant, revoke, restore, or correct only the affected entitlement.

A platform allocation does not authorize CK-Labs to say that EU/German mandatory withdrawal rights never apply. Conversely, CK-Labs should not promise that it can directly issue or control a platform refund where the platform is the legally operative processor or merchant for that transaction.

## 8. Evidence that must be retained

For a covered checkout, retain enough immutable or tamper-resistant evidence to reconstruct the transaction and withdrawal path without relying on screenshots supplied by the player alone. At minimum, where available and lawful, capture:

- provider/channel;
- provider transaction, order, or purchase-token identity;
- TycoonX account identity;
- purchaser identity and, for a supported gift, the actual recipient identity separately;
- product/SKU and product type;
- monetary amount, currency, taxes and country/storefront;
- checkout/legal disclosure version;
- product characteristics shown before purchase;
- withdrawal-right information shown before purchase;
- any express early-performance consent;
- any acknowledgment of loss of withdrawal right;
- timestamps for those acts;
- start and calculated end of the withdrawal period where determinable;
- withdrawal-function first-stage event;
- confirmation-stage event;
- content of the submitted withdrawal declaration;
- date/time of receipt;
- durable-medium acknowledgment status and destination;
- provider refund/reversal/void state; and
- exact entitlement correction performed by TycoonX.

Data collection and retention must remain proportionate and consistent with the TycoonX Privacy Policy and applicable privacy law.

## 9. Separation from other consumer/payment events

The implementation must distinguish at least these events:

- statutory withdrawal;
- voluntary/provider refund;
- statutory conformity remedy or price reduction;
- ordinary cancellation of a future recurring product, if such a product is ever introduced;
- chargeback/payment dispute;
- failed or pending payment;
- fraud or regional-price abuse;
- unauthorized purchase/account compromise;
- minor/parental-authorization dispute;
- duplicate/accidental entitlement grant; and
- provider reversal or refund reversal.

They can overlap factually, but they are not legally or operationally interchangeable.

For example, a German consumer exercising a still-valid statutory withdrawal right should not be labelled as committing a chargeback abuse. An account-compromise report should not automatically revoke unrelated purchases. A provider refund received first should be recorded so a later delayed webhook cannot accidentally re-grant the withdrawn entitlement.

## 10. Accessibility and reliability

Where the electronic withdrawal function is required, it must remain practically usable. QA must cover at least:

- mobile and desktop layouts;
- keyboard-only navigation;
- screen-reader naming and focus order;
- zoom/reflow;
- German localization;
- network retry without duplicate submission;
- provider timeout/failure;
- missing or malformed contract identifier;
- expired withdrawal period;
- durable-medium confirmation delivery failure; and
- clear recovery instructions that do not cause the consumer to lose a still-running deadline because of TycoonX or provider failure.

This gate is separate from, and should be read together with, the TycoonX German BFSG/e-commerce accessibility gate.

## 11. Regression and tabletop scenarios

Do not mark this gate complete until production-equivalent testing covers at least the following scenarios:

1. German consumer buys a Diamond package and the statutory withdrawal period remains running.
2. Diamond transaction for which CK-Labs asserts lawful early expiry of the withdrawal right; the exact consent/acknowledgment evidence is verified.
3. User accepted only generic Terms; system does not infer early loss of withdrawal right from that fact alone.
4. One-time 30-Day VIP purchase with immediate activation and no recurring billing.
5. 30-Day VIP withdrawal where a separate Lifetime VIP source remains valid.
6. Lifetime VIP purchased during an active genuine promotional sales window; withdrawal function remains governed by law after the sales window closes.
7. Xsolla redirect checkout.
8. Xsolla embedded checkout.
9. Covered transaction where Xsolla is shown as merchant of record.
10. Covered transaction where CK-Labs is the responsible contracting trader/interface operator.
11. Apple purchase with platform-controlled purchase/refund process.
12. Google Play purchase with platform-controlled purchase/refund process.
13. Gift purchase where purchaser and recipient differ.
14. Withdrawal submitted seconds before the statutory period ends.
15. Duplicate click/retry of the confirmation function does not create duplicate refunds or duplicate entitlement removals.
16. Provider acknowledgment delivery fails after receipt; system preserves the original receipt timestamp and retries acknowledgment safely.
17. Transaction already partly consumed; reconciliation does not wipe unrelated value.
18. Withdrawal request is confused with a generic support refund; routing preserves the statutory deadline.
19. Chargeback arrives after a valid withdrawal/refund; no second economic reversal occurs.
20. Refund reversal restores exactly the attributable value once.

## 12. Canonical legal/localization sync rule

The canonical English Purchases & Refunds Policy already states that, since 19 June 2026, covered German online-interface transactions require an electronic withdrawal function and that mandatory rights are not removed merely because Apple, Google, Xsolla, or another provider controls a relevant purchase process.

Do not reopen all 25 localizations merely to duplicate implementation detail from this gate.

If the canonical English legal meaning later changes materially, update the English source first and then synchronize all 25 target locales in the required order, preserving the same legal effect and product distinctions. Update `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md` after any such localization change.

## 13. Release closure criteria

This gate is closed only when all of the following are true:

- the real German production-equivalent webshop flow has been inspected;
- merchant/interface responsibility is documented per channel;
- any required § 356a function is actually available for the legally required period;
- first-stage and confirmation labels are compliant and unambiguous;
- the required data can be supplied/confirmed by the consumer;
- durable-medium receipt confirmation works and includes content, date and time;
- early-expiry logic is backed by transaction-specific legal evidence rather than assumptions;
- withdrawal/refund processing is transaction-specific and idempotent;
- unrelated Diamonds/VIP sources are preserved;
- gift purchaser/recipient provenance is retained where relevant;
- Apple, Google Play and Xsolla outcomes reconcile correctly with TycoonX entitlements; and
- QA evidence is retained for the regression scenarios above.

Until those points are verified against production-equivalent purchase flows, the existence of legal wording alone must not be treated as proof that TycoonX checkout implementation is compliant.
