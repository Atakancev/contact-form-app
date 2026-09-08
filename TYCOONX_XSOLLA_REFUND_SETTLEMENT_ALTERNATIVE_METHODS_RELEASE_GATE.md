# TycoonX Xsolla Refund Settlement & Alternative Methods Release Gate

**Last reviewed: September 9, 2026**

Owner: CK-Labs  
Scope: official TycoonX webshop purchases processed through Xsolla

This is a narrow operational companion to `TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md` and `TYCOONX_XSOLLA_PARTIAL_REFUND_OCCURRENCE_RECONCILIATION_GATE.md`. It does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, the transaction-specific Xsolla checkout/refund terms, or mandatory consumer law.

Its purpose is to prevent one high-impact class of refund bug: **treating a refund request, API acceptance, support ticket, or local admin action as if the player had already received the money back.** Xsolla's current refund flow can involve payment-method-specific settlement delays and alternative refund methods, so TycoonX needs a durable request-versus-settlement state machine.

## 1. Current Xsolla facts that drive this gate

As reviewed on September 9, 2026, Xsolla's current Refund documentation states that:

- the refund period depends on the payment method and can be **up to 5-10 banking days**;
- once a refund is issued, it **cannot be canceled**;
- common methods such as payment cards and some wallets can be refunded automatically to the payment account;
- some payment methods require manual transfer by Xsolla support;
- some payment methods do not support ordinary refunds and can instead require an **alternative refund**, including PayPal or Xsolla balance;
- for alternative refunds, Xsolla may need the user's email so it can contact the user about the available refund method, and a refund request can be rejected when the necessary email is unavailable;
- in the documented full-refund flow, the payment is canceled and the Refund webhook is sent **only after the money is transferred back to the user**;
- for partial refunds, Xsolla likewise documents the partial-refund webhook as arriving when the user receives the funds;
- partial-refund calculations use the fees and currency exchange rates of the original payment; and
- Xsolla currently warns that a WeChat payment made in CNY can be converted to USD during refund processing, which can create a difference between the requested amount and the amount received.

These are provider workflow facts, not a waiver of mandatory consumer rights and not permission to invent extra player debt.

## 2. P0: use an explicit refund lifecycle

For every Xsolla refund that TycoonX or CK-Labs can observe or initiate, preserve a transaction-scoped lifecycle that can distinguish at least:

1. `refund_requested` - a request or support action exists, but provider settlement is not yet authoritative;
2. `refund_processing` - Xsolla or the payment rail has accepted or is processing the refund, but final money return is not yet established;
3. `refund_settled` - authoritative provider evidence confirms the refund/cancellation has completed to the extent represented by that record;
4. `refund_failed_or_rejected` - the requested refund did not complete, including where required information or payment-rail support was unavailable; and
5. `refund_ambiguous` - local and provider evidence conflicts or is incomplete and irreversible additional correction must pause pending reconciliation.

Do not collapse these states into a single `refunded=true` flag if doing so causes a request to be treated as completed settlement or causes a failed request to remain permanently corrected as if money had been returned.

A support ticket saying "refund requested", an API request returning successfully, a local admin button, or a provider acknowledgement that processing started is not by itself proof that the user received funds.

## 3. Request acceptance is not final settlement

When CK-Labs requests a refund through Xsolla:

- durably record the refund intent before the provider call, as already required by the main Xsolla refund gate;
- distinguish the provider's acceptance of the request from the later authoritative settled/canceled state;
- do not tell support or the player that the refund has been received merely because the API request was accepted;
- do not mark a financial report, support case, or player account as finally refunded solely from the outbound request;
- do not submit the same refund again merely because settlement is taking time; and
- use authoritative provider status/webhook/reconciliation evidence to move from processing to settled or failed.

If the provider makes the refund irreversible once issued, that fact can justify a narrow transaction-specific pending-correction or reservation state where operationally necessary to prevent duplicate use of the same paid value. Any such temporary restriction must be proportionate, reversible if settlement fails, limited to the affected transaction/value, and must not be presented as a fraud sanction.

Do not permanently remove unrelated purchased Diamonds, unrelated 30-Day VIP time, or an unrelated valid Lifetime VIP merely because another Xsolla refund is still processing.

## 4. Full-refund webhook timing is a settlement signal, not a request signal

Under Xsolla's currently documented full-refund flow, the payment is canceled and the Refund webhook is sent only after the money has been transferred back to the user.

For the webhook model actually configured for the CK-Labs project:

- authenticate and durably record the authoritative cancellation/refund event before applying permanent transaction correction;
- keep legacy `refund` and combined `order_canceled` semantics separate and follow the configured model documented in the main Xsolla gate;
- do not assume an absent webhook proves that no refund request exists or that no mandatory remedy is owed;
- do not assume a refund request is settled merely because no webhook has arrived yet;
- if webhook delivery is lost, delayed, misconfigured, or blocked by an outage, reconcile the authoritative Xsolla transaction state rather than leaving a settled refund active in TycoonX indefinitely; and
- never apply both a request-time correction and a later webhook-time full correction as two independent clawbacks.

The existing idempotency and transaction-correction budget rules continue to apply.

## 5. Alternative refund methods require their own pending state

Some payment methods can require an alternative refund through PayPal or Xsolla balance rather than an ordinary return to the original payment method.

TycoonX and CK-Labs support must therefore:

- not promise that every Xsolla refund returns through the original payment instrument;
- not invent an alternative destination or choose one on the player's behalf when Xsolla requires the user to select or confirm a method;
- treat a provider request for additional contact information as a refund-processing requirement, not proof that the player is ineligible for a remedy;
- keep the refund pending until the provider confirms the actual result;
- if the refund is rejected because necessary information is unavailable, move the transaction to a truthful failed/rejected or manual-review state instead of keeping it marked settled; and
- preserve a support path for mandatory consumer remedies even when the ordinary Xsolla rail cannot automatically return funds.

A provider limitation does not by itself eliminate a mandatory statutory reimbursement obligation that falls on CK-Labs or another contracting trader.

## 6. Email collection for alternative refunds must be minimal and purpose-bound

Xsolla currently says an email is recommended for refund requests and can be required for alternative refunds to PayPal or Xsolla balance so the user can be contacted about the refund method.

If the transaction already contains an authoritative payment email that may lawfully be used for refund handling, do not duplicate-collect it without need. If an email must be newly collected:

- explain that it is needed for the specific refund/payment-provider process;
- collect only what is reasonably necessary;
- do not silently replace the Xsolla transaction's user identity with whichever TycoonX account happens to use the same email;
- do not treat email possession as proof of account ownership or payment authorization;
- restrict access to payment/refund/support personnel and systems that need it;
- apply the applicable retention and deletion rules; and
- ensure the deployed processing remains covered by the TycoonX Privacy Policy and actual Xsolla/payment-provider role allocation.

Do not copy a refund email into marketing lists or unrelated analytics merely because it was supplied during refund handling.

## 7. Settlement delay is not fraud or entitlement abuse

A refund taking several banking days, requiring manual support, waiting for the user to select an alternative method, or waiting for a payment rail to complete is not evidence that the player committed:

- fraud;
- friendly fraud;
- chargeback abuse;
- hacking or exploit abuse;
- account compromise;
- regional-price abuse;
- promotion/coupon abuse; or
- entitlement abuse.

Likewise, a failed or rejected refund request does not automatically prove misconduct. Investigate actual abuse only from reliable transaction/account/security evidence under the canonical TycoonX rules.

Provider or CK-Labs outages, webhook failures, refund-API failures, email-delivery problems, and payment-rail delays are operational events, not player sanctions.

## 8. Currency, FX, fees, and alternative destinations do not reprice the purchase

Use the provider-authoritative original purchase and refund records for accounting and entitlement reconciliation.

- A refund-currency conversion does not retroactively change the historical checkout price or currency.
- A CNY-to-USD refund conversion or another provider-supported currency difference does not create a second TycoonX purchase, a second refund, or automatic regional-price abuse.
- Do not calculate entitlement correction from today's FX rate, today's Diamond price, today's VIP price, or a later regional price.
- Do not deduct extra Diamonds or VIP to compensate CK-Labs for processor fees, FX spread, manual-refund costs, or a less favorable exchange rate.
- Do not charge the player a new fee merely because Xsolla or a payment rail used an alternative refund method, unless a separate lawful and transparent basis exists and mandatory law permits it.
- A later price decrease or increase does not retroactively change the amount/value of the original completed one-time transaction.

The dedicated Xsolla partial-refund occurrence gate remains controlling for cumulative partial refunds and partial-then-full reconciliation.

## 9. Product-specific entitlement rules remain unchanged

### Diamonds

Purchased Diamonds do not expire solely because time passes. A settled refund or reversal can justify a transaction-specific correction to the purchased value attributable to that transaction, subject to mandatory law and the existing downstream-value rules.

A refund request still processing must not cause repeated Diamond deduction on every polling attempt, webhook retry, support refresh, or reconciliation run.

### One-time 30-Day VIP

One-time 30-Day VIP remains one non-renewing entitlement for **30 consecutive days**. A refund request does not create a second clock, restart the entitlement, or convert the product into a subscription.

If a refund ultimately settles and a correction is legally appropriate, reconcile that exact transaction. Do not shorten unrelated 30-Day VIP obtained through another valid purchase.

### Lifetime VIP

Lifetime VIP remains a limited-time promotional one-time entitlement available only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability.

A refund request, refund settlement, alternative refund method, support interaction, old order, or restoration flow must never reopen a closed Lifetime VIP sales window. A genuine historical non-refunded Lifetime VIP purchase can still be restored or reconciled where the provider record, contract, or mandatory law requires it.

## 10. Account compromise and payment disputes remain separate

If a player reports an unauthorized Xsolla purchase or compromised TycoonX account:

- preserve the provider transaction and account-mapping evidence;
- use the dedicated account-compromise and fraud rules rather than assuming the refund request proves the story either way;
- do not attach the refund to a different TycoonX account solely because that account supplies a matching email, name, IP, device, or support statement;
- do not restore refunded value merely because the account password was later changed; and
- do not permanently suspend or terminate the player solely because an ordinary refund route took longer than expected.

A provider-approved refund and a chargeback are not automatically the same event and must not be mislabeled for sanctioning or support statistics.

## 11. Mandatory German/EU consumer rights override operational convenience

This gate cannot be used to delay or deny a remedy that mandatory law requires.

Where CK-Labs is the trader that owes a statutory reimbursement for a covered digital product under German law, the applicable BGB rules remain controlling. In particular, **BGB § 327n(4)** requires reimbursement of an overpayment following a valid price reduction without undue delay and in any event within 14 days, using the same means of payment unless another method is expressly agreed without additional cost to the consumer. **BGB § 327o** applies corresponding reimbursement rules after a qualifying contract termination.

Therefore:

- an Xsolla/payment-rail processing limitation is not a contractual waiver of the statutory deadline where that deadline legally binds CK-Labs;
- if the ordinary processor route cannot satisfy a mandatory remedy, escalate to the legally appropriate merchant/provider/manual route rather than letting the case expire silently;
- do not force an alternative refund instrument where mandatory law requires the original payment method unless the consumer expressly agrees to another cost-free method and the legal conditions are satisfied;
- do not deduct CK-Labs or processor refund costs from a statutory reimbursement where the law forbids charging those costs to the consumer; and
- preserve any additional rights under the applicable transaction-specific consumer law.

Where Xsolla or another provider is the contracting merchant responsible for the reimbursement, CK-Labs must still cooperate with entitlement correction and support while accurately directing the consumer to the responsible refund process. Role allocation must not be used to create a circular support dead end.

## 12. Support wording and status display

Support/admin tooling should distinguish at least:

- refund requested;
- refund processing;
- additional information required;
- refund settled/completed;
- refund rejected/failed;
- partial refund; and
- refund state unclear/reconciliation required.

Do not show "Refunded" to staff or the player when the system only knows that a request was submitted. Do not show "Not refunded" merely because the webhook is delayed while provider status says processing.

Do not promise an exact settlement date unless the applicable provider/payment rail actually guarantees it for that transaction. It is acceptable to explain that Xsolla currently says the refund period depends on payment method and can take up to 5-10 banking days, while making clear that transaction-specific timing can vary and mandatory legal deadlines remain unaffected where applicable.

## 13. Required QA matrix

Before treating Xsolla refund settlement as production-ready, test at least:

1. full refund request accepted but provider settlement still processing;
2. full refund request accepted and the player receives the funds several banking days later;
3. outbound refund request times out after provider may have accepted it and the system reconciles before retrying;
4. settled refund webhook arrives after an earlier local `refund_requested` state and causes only one final correction;
5. refund webhook is lost but provider reconciliation later proves settlement;
6. automatic refund to the original payment instrument;
7. payment method requiring manual Xsolla support processing;
8. alternative refund requiring PayPal or Xsolla balance selection;
9. alternative refund requires an email that was not present in the original transaction;
10. email is collected only for the refund process and is not rebound as TycoonX account authority;
11. refund request is rejected because required information is unavailable and TycoonX does not leave the transaction marked settled;
12. CNY/WeChat or other documented provider conversion produces a refund-currency discrepancy without triggering regional-price abuse or extra entitlement correction;
13. refund processing delay does not create a fraud or suspension flag;
14. duplicate polling/webhook delivery does not deduct Diamonds twice;
15. processing refund for one Diamond transaction does not touch unrelated purchased Diamonds;
16. processing refund for one 30-Day VIP does not alter a separate valid VIP purchase or restart a clock;
17. Lifetime VIP refund/reconciliation does not reopen a closed sales window;
18. account-compromise investigation remains separate from refund settlement state;
19. mandatory German reimbursement deadline is escalated when the ordinary processor route cannot satisfy it; and
20. sandbox/test refund evidence cannot mutate production entitlements or production refund status.

## 14. P0 release blockers

Do not declare the Xsolla refund path production-ready if any of these is true:

- a submitted refund request is immediately stored as final settlement with no later provider reconciliation;
- the same transaction can be permanently corrected at request time and again at settlement time;
- support cannot distinguish processing from completed refunds;
- a refund is silently abandoned because a payment method needs manual/alternative handling;
- an email required for an alternative refund is repurposed as account ownership proof or unrelated marketing data;
- FX or alternative-refund mechanics can create extra Diamond/VIP debt beyond the affected transaction;
- a payment-rail delay automatically creates a fraud, abuse, or suspension flag;
- a failed refund remains marked completed;
- an unrelated valid entitlement can be removed because another transaction is awaiting settlement;
- Lifetime VIP can be reopened for sale through a refund/reconciliation path; or
- operational/provider rules are treated as waiving mandatory German/EU consumer rights.

## 15. Canonical and localization boundary

This gate strengthens implementation state, provider-role, privacy-minimization, support-status, and settlement evidence. It does **not** change the public contractual meaning of TycoonX purchases.

The canonical Purchases & Refunds Policy already distinguishes Apple, Google Play, and Xsolla roles; permits transaction-specific entitlement correction after a verified refund/reversal; protects mandatory rights; keeps completed one-time prices historical; and keeps Diamonds, one-time 30-Day VIP, and Lifetime VIP distinct.

Accordingly, this internal hardening does not by itself require reopening the 25 localized Purchases & Refunds documents. If CK-Labs later changes the canonical player-facing meaning of refund timing, payment-provider responsibility, alternative refund methods, Diamonds, 30-Day VIP, Lifetime VIP, price changes, or statutory remedies, update the English canonical policy first and then synchronize all affected localized documents before the localization tracker remains complete.

## Current references checked

- Xsolla, **Refund**, last updated August 7, 2026: https://developers.xsolla.com/payment-ui-and-flow/features/refund/
- Xsolla, **Refund webhook**: https://developers.xsolla.com/webhooks/payments/refund
- Xsolla, **Partial refund webhook**: https://developers.xsolla.com/webhooks/payments/partial-refund
- German Civil Code (BGB) § 327n: https://www.gesetze-im-internet.de/bgb/__327n.html
- German Civil Code (BGB) § 327o: https://www.gesetze-im-internet.de/bgb/__327o.html

## Manual verification

Run locally without GitHub Actions or paid services:

```bash
node scripts/verify-tycoonx-xsolla-refund-settlement.mjs
```
