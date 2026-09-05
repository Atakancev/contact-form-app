# TycoonX Xsolla Mandatory Consumer Rights Override Release Gate

**Last reviewed:** September 5, 2026

This is an operational CK-Labs gate for TycoonX purchases processed through the official TycoonX web shop using Xsolla. It supplements `TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md`, the canonical TycoonX Terms of Service, and the canonical Purchases & Refunds Policy. It does not replace the transaction-specific Xsolla checkout contract, and it does not expand or waive any right that mandatory law gives or withholds for a particular transaction.

## Why this gate exists

Xsolla's current Refund Policy is transaction-specific and the applicable policy type is identified at checkout. The policy also contains broad provider-language about banned accounts, technical software problems, use of digital content, and refund eligibility. Some of that language is expressly qualified elsewhere by applicable national law and EU/EEA withdrawal provisions.

TycoonX Support and entitlement logic therefore must not reduce a German/EU consumer-rights question to a keyword copied from a provider policy. The correct order is:

1. identify the exact transaction and contracting merchant;
2. identify the TycoonX product and actual payment/provider state;
3. identify whether the request is a discretionary provider refund, statutory withdrawal, digital-product conformity remedy, price reduction, termination, non-supply remedy, unauthorized-payment case, or another legal basis;
4. apply the transaction-specific provider rules where they govern; and
5. preserve any mandatory consumer right that cannot lawfully be excluded by provider terms, TycoonX terms, account enforcement, or support wording.

This gate is intentionally conservative. It does not promise a refund whenever a player asks for one. It prevents CK-Labs from denying a legally required remedy for the wrong reason.

## 1. Provider policy is not a mandatory-rights waiver

For every Xsolla TycoonX dispute:

- treat the transaction-specific Xsolla checkout terms and Refund Policy as an important source of the payment contract and provider procedure;
- do not treat a provider policy sentence as overriding mandatory German/EU consumer law where that law applies to the transaction;
- do not tell a consumer that accepting TycoonX Terms or Xsolla terms means they waived rights that the law does not permit them to waive;
- distinguish a provider's discretionary refund policy from statutory withdrawal, conformity, price-reduction, termination, reimbursement, warranty, unauthorized-payment, or other mandatory remedies; and
- where the responsible contracting trader is Xsolla, route the consumer through the applicable Xsolla procedure while CK-Labs supplies accurate TycoonX-side delivery/entitlement information and does not obstruct the mandatory remedy.

A payment-provider role allocation changes who processes a request. It does not by itself erase the underlying mandatory right.

## 2. Banned or suspended accounts

Xsolla's current Refund Policy contains broad language stating that customers whose accounts are banned do not have a right to demand a refund. TycoonX must not use that sentence as an automatic global rule for every German/EU consumer case.

Operational rule:

- a lawful TycoonX suspension or termination can remain valid when independently justified by the Terms, evidence, and applicable law;
- account enforcement does not automatically extinguish a statutory remedy that already exists for an official purchase;
- do not reject a statutory withdrawal, non-supply, lack-of-conformity, price-reduction, termination, or reimbursement claim solely because the TycoonX account is banned or suspended;
- do not restore access merely because a refund or statutory remedy is granted if separate account enforcement remains valid;
- do not use a ban imposed after a refund request as a device for avoiding the request; and
- do not convert a valid refund into a promise that unrelated sanctions, exploit corrections, RMT findings, or community enforcement will be canceled.

### Example

A player is permanently banned for independently proven RMT. That does not automatically mean a separate valid official Xsolla purchase that was never delivered or that is subject to a non-waivable statutory remedy can be ignored. The payment/remedy issue and the account-enforcement issue must be decided separately.

Conversely, if a banned player simply wants a discretionary refund for a valid, conforming, fully supplied purchase and no mandatory legal right applies, the applicable Xsolla policy may still refuse that discretionary refund.

## 3. Technical problems, non-supply, and lack of conformity

Xsolla's current Refund Policy can route technical Software problems to the vendor and can state that a refund is not allowed under a provider refund category. That does not authorize TycoonX Support to answer every technical problem with "no refund" or "contact Xsolla".

For a TycoonX-side defect:

- determine whether the user was charged and whether the purchased entitlement was supplied correctly;
- distinguish a transient support issue from non-supply or a legally relevant lack of conformity;
- first provide cure, restoration, correction, update, or other remedy where applicable and legally appropriate;
- where mandatory digital-product law permits a price reduction, termination, reimbursement, or other remedy because cure is unavailable, refused, unsuccessful, disproportionately delayed, or another statutory condition is met, do not deny that remedy merely because the provider's discretionary refund category says technical problems are not refundable;
- where Xsolla is the contracting trader/payment route, coordinate the remedy through the transaction-specific provider process rather than pretending CK-Labs can directly alter Xsolla's payment rails; and
- preserve evidence of the actual delivery state, defect, attempted cure, resolution, and provider transaction outcome.

Directive (EU) 2019/770 and the German BGB digital-product rules distinguish cure, price reduction, termination, and reimbursement. A support label such as "technical problem" is not a legal conclusion.

## 4. Digital-content withdrawal must use the actual statutory conditions

Xsolla's current Refund Policy contains both a general statement suggesting that starting to use Software removes the cooling-off right and a more specific EU/UK section describing prior express consent, acknowledgement of loss of the withdrawal right, and confirmation on a durable medium for digital content.

TycoonX must use the legally applicable conditions for the actual product and transaction, not the broadest provider sentence.

For a claimed loss of an EU/EEA withdrawal right involving digital content not supplied on a tangible medium:

- verify whether the transaction legally qualifies for that withdrawal-loss rule;
- verify any required prior express request or consent to begin performance before expiry of the withdrawal period;
- verify any required acknowledgement that the withdrawal right would be lost when performance begins;
- verify the required contractual confirmation on a durable medium where applicable;
- do not treat generic acceptance of TycoonX Terms as a substitute for transaction-specific consent where law requires separate consent;
- do not infer valid withdrawal-loss consent solely because an account logged in, the app launched, an entitlement was credited, or a user clicked through an unrelated screen; and
- if the legally required conditions cannot be evidenced, do not deny the withdrawal claim merely by quoting "you started using it" from provider boilerplate.

The canonical TycoonX Terms already preserve the rule that merely crediting purchased Diamonds does not automatically extinguish an applicable EU/EEA withdrawal right and that 30-Day VIP and Lifetime VIP are ongoing/time-based entitlements whose immediate activation or one-time price does not automatically eliminate every statutory remedy.

## 5. Product-specific handling

### Purchased Diamonds

- Purchased Diamonds do not expire solely because time passes.
- A refund, withdrawal, reversal, or chargeback must be reconciled to the exact underlying transaction and affected value.
- Do not deny an applicable mandatory remedy solely because the TycoonX account is banned.
- Do not treat mere crediting of purchased Diamonds as automatic proof that every applicable withdrawal right was lost.
- If Diamonds were already spent or transferred, apply the canonical transaction-specific mandatory-law treatment and the refunded/transferred-value reconciliation gate rather than a blanket no-refund or double-clawback rule.

### One-time 30-Day VIP

- 30-Day VIP remains a one-time, non-renewing 30-day entitlement unless the purchase screen clearly introduced a different compliant product.
- A ban, temporary restriction, technical failure, or refund request does not silently restart, pause, extend, or erase the 30-day clock.
- If a legally relevant defect or restriction deprived the consumer of paid service, assess the cure, price-reduction, termination, reimbursement, extension, or other remedy actually required for the case.
- Do not promise that every lost day creates a cash refund; apply the applicable contract, provider procedure, and mandatory law.

### Lifetime VIP

- Lifetime VIP remains a one-time promotional entitlement offered only during selected genuine sales windows.
- It may be withdrawn from future sale and may never return; a consumer remedy does not reopen a closed Lifetime VIP sales window.
- A provider-confirmed refund or valid reversal of the underlying Lifetime VIP transaction can remove the corresponding entitlement, subject to mandatory law.
- A ban or suspension by itself is not a provider-confirmed refund event and must not be used as an automatic substitute for transaction reconciliation.
- A statutory remedy for one transaction does not create a second Lifetime VIP, new sales-window access, or a right to a future promotional price.

## 6. Refund, remedy, and enforcement are three separate states

Keep three independent state machines:

- **payment/remedy state:** paid, pending, refunded, reversed, withdrawn, price-reduced, terminated, reimbursed, disputed, or otherwise provider-confirmed;
- **entitlement state:** not delivered, active, consumed, expired, restored, partially corrected, revoked because the source payment is invalid, or otherwise reconciled; and
- **account-enforcement state:** unrestricted, temporarily restricted, suspended, terminated, or under investigation for a separate Terms violation.

Never make one state silently prove the other two.

Examples:

- `account_banned = true` does not mean `statutory_refund_right = false`;
- `refund_approved = true` does not mean `account_ban = false`;
- `technical_defect = true` does not automatically mean `cash_refund_due = true` before the applicable cure/remedy rules are evaluated; and
- `chargeback_open = true` does not mean `fraud_proven = true`.

## 7. Support decision record

For any disputed Xsolla TycoonX purchase, the support/review record should be able to answer:

- Xsolla transaction/order ID and the transaction-specific contracting entity where available;
- refund-policy type shown for that transaction;
- TycoonX product: Diamonds, 30-Day VIP, Lifetime VIP, or another item;
- total price, currency, taxes shown, and authoritative payment state;
- entitlement delivery/activation/consumption state;
- whether the account is separately restricted or terminated and why;
- consumer's asserted basis: discretionary refund, withdrawal, non-supply, defect/lack of conformity, price reduction, contract termination, unauthorized payment, duplicate payment, or another ground;
- which party controls the procedural refund/payment action;
- whether mandatory law changes or overrides the discretionary provider-policy result;
- evidence supporting any claimed loss of withdrawal rights;
- remedy/correction actually applied; and
- whether unrelated legitimate paid value and independent account enforcement were left untouched.

A support macro that contains only "refund allowed / refund not allowed" is not enough for a legally sensitive case.

## 8. No double remedy and no double punishment

Preserving mandatory rights does not mean the user may retain both the refunded money and the corresponding paid digital value where the law and transaction permit reconciliation.

- Reconcile an actual refund or termination against the corresponding TycoonX entitlement/value idempotently.
- Use one correction budget for refunded value that was consumed or transferred; do not claw back the same economic value repeatedly from several accounts.
- Do not confiscate unrelated legitimate purchases merely because another purchase was refunded or the account was banned.
- Do not add a provider chargeback fee to a user's game balance without a separate transparent and lawful basis.
- Do not create an unauthorized real-world debt from an internal game-state correction.
- Do not punish a consumer merely for exercising a genuine withdrawal, conformity, refund, or unauthorized-payment right.
- Fraud, refund cycling, false reports, exploit abuse, and RMT may still be enforced separately when supported by evidence.

## 9. Minimum regression cases

Before materially changing Xsolla support/refund logic, test at least these cases:

1. **Banned account + proven non-supply:** do not deny the legally available transaction remedy solely because the account is banned; keep independently justified enforcement separate.
2. **Banned account + purely discretionary refund request:** apply the actual Xsolla policy and mandatory law; do not invent a statutory right that does not exist.
3. **Technical delivery defect:** route through CK-Labs cure/conformity analysis and the correct merchant/payment procedure instead of replying only "technical problems are non-refundable."
4. **Digital content started, consent evidence missing:** do not treat use alone as conclusive proof that an applicable withdrawal right expired.
5. **Digital content started with all legally required withdrawal-loss conditions evidenced:** apply the lawful result for that transaction; do not promise a withdrawal right that has validly expired.
6. **Refund completed:** reconcile the exact TycoonX value once and only once.
7. **Refund completed but account ban independently justified:** do not restore the account merely because the payment was refunded.
8. **Chargeback opened but unresolved:** do not mark fraud proven or permanently revoke unrelated value merely because the dispute exists.
9. **30-Day VIP defect:** assess the actual service/remedy consequence without silently restarting the entitlement or assuming every defect requires a full refund.
10. **Lifetime VIP refund:** revoke the refunded entitlement where lawful without reopening the promotional sales window or changing unrelated purchases.

## 10. Release blockers

Do not ship or operate Xsolla refund/support logic that:

- globally maps `banned account` to `no consumer remedy`;
- globally maps `technical problem` to `no remedy`;
- globally maps `content used` to `withdrawal right lost` without checking the applicable legal conditions;
- lets a provider refund policy erase mandatory German/EU rights;
- lets a refund automatically erase unrelated account enforcement;
- lets an account ban automatically revoke unrelated official purchases;
- lets a refund/termination produce repeated entitlement clawbacks;
- tells a consumer that CK-Labs controls a refund decision actually controlled by the transaction-specific Xsolla merchant/provider;
- tells a consumer that Xsolla can fix a TycoonX-side entitlement defect while CK-Labs refuses to investigate delivery; or
- removes unrelated legitimately purchased value as a penalty for requesting a lawful remedy.

## 11. Current legal/provider checkpoint

As of September 5, 2026:

- Xsolla's legal index lists the Refund Policy as updated **June 16, 2026**.
- Xsolla states that the applicable Refund Policy type is shown at the bottom of checkout and that the relevant Xsolla group company can depend on the transaction/payment method.
- Xsolla's Refund Policy contains broad banned-account and technical-problem language, but also states that faulty Product remedies can follow the consumer's national legislation and includes an EU/EEA 14-day withdrawal section.
- That EU/EEA section describes early expiration of the withdrawal right for digital content using prior express consent, acknowledgement of loss, and contractual confirmation on a durable medium.
- Directive (EU) 2019/770 preserves remedies for lack of conformity and requires reimbursement owed after price reduction or termination without undue delay and, in any event, within 14 days.
- German BGB digital-product rules provide cure/remedy structures for deficient digital products, while BGB § 307 prevents standard terms from unreasonably disadvantaging consumers and treats lack of clarity and comprehensibility as a possible source of unfairness.

Provider documentation and law can change. Recheck the live transaction terms and current law before changing the production refund decision tree.

## Manual verification

Run locally without GitHub Actions or paid services:

```bash
node scripts/verify-tycoonx-xsolla-consumer-rights-override.mjs
```
