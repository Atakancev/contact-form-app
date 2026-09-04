# TycoonX German E-Commerce Checkout & Contract-Formation Release Gate

Last reviewed: September 4, 2026
Owner: CK-Labs
Scope: paid TycoonX web checkout, Xsolla-powered webshop handoff, CK-Labs-owned order screens, and release evidence for Apple App Store and Google Play purchases where the platform controls the final payment interface.

## Purpose

TycoonX already has public rules for prices, refunds, withdrawal, Diamonds, one-time 30-Day VIP, limited-window Lifetime VIP, provider roles, and entitlement delivery. This gate covers a different release risk: whether the **actual electronic ordering and withdrawal flows form, document, and where applicable unwind the contract correctly**.

This is an implementation and evidence gate. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, mandatory consumer law, or the transaction-specific terms of Apple, Google, Xsolla, or another contracting merchant.

The current canonical Purchases & Refunds Policy already tells German consumers that a legally required electronic withdrawal function will be provided where applicable. This gate defines the operational requirements for that promise. It does not reopen localization unless the public contractual meaning changes materially.

## P0: first identify the contracting trader and legally relevant interface

Before applying a CK-Labs checkout or withdrawal rule, record for the transaction/channel:

- who is the contracting trader or merchant of record;
- who controls the final order button or equivalent confirmation control;
- who displays the final total price, currency, taxes, and unavoidable charges;
- who sends the order/contract confirmation or receipt;
- who owns and controls the legally relevant withdrawal interface for the transaction;
- who decides and processes a refund or reversal;
- which authoritative order/payment record proves the transaction state; and
- which TycoonX entitlement CK-Labs must deliver, preserve, restore, or unwind after authoritative confirmation.

Do not assume that CK-Labs is the contracting trader merely because the player started from a TycoonX page. Do not assume that Apple, Google, or Xsolla owns every legal duty merely because it processes payment.

For the Xsolla webshop, record the actual Xsolla entity and role shown for the selected payment method and the actual contract-formation, withdrawal, refund, and receipt flow. Provider documentation is not proof that the live TycoonX project is configured correctly.

## 1. German BGB § 312j: payment-obligation checkout

Where German BGB § 312j applies to a consumer order interface for which CK-Labs is the responsible trader, the live flow must satisfy all of the following.

### At the beginning of the ordering process

Clearly and legibly disclose:

- any applicable delivery or availability restrictions; and
- the accepted payment methods.

For digital TycoonX products, a relevant restriction can include genuine country, storefront, or payment-method availability. Do not invent a delivery restriction merely to deter a region, and do not hide an important restriction until after the consumer has attempted to pay.

### Immediately before the consumer submits the paid order

Provide the legally required essential information clearly, understandably, and prominently. For TycoonX this can include, as applicable:

- the main characteristics of the exact product, such as the Diamond quantity, one-time 30-Day VIP duration, or Lifetime VIP entitlement;
- the total price including taxes and mandatory charges;
- any unavoidable additional costs;
- contract duration or termination information where relevant;
- any minimum duration of the consumer's obligations; and
- for a future recurring product, the recurring total price and billing information required for that product.

The final ordering screen must not force the consumer to infer the product, price, duration, or payment obligation from an earlier page that is no longer visible or from a legal-policy link alone.

### Final order control

The order flow must make the payment obligation explicit. If the order is placed with a button, the button must be labelled only with `zahlungspflichtig bestellen` or another wording that is genuinely equivalent and unambiguous in the language of the checkout.

Do not rely on nearby text, a checkbox, a price displayed elsewhere, or explanatory copy below the button to cure an ambiguous order-button label. The CJEU held in Case C-249/21 (Fuhrmann-2) that the assessment of equivalent wording is based on the words on the button or similar function itself.

Do not treat the button rule as irrelevant merely because the payment obligation is conditional or may arise only after a later event. The CJEU held in Case C-400/22 (Conny) that the Article 8(2) payment-obligation requirement also applies where payment becomes due only after a subsequent condition is satisfied.

For a CK-Labs-controlled German checkout, failure of the required payment-obligation control is not cosmetic: BGB § 312j(4) states that the covered contract is concluded only if the trader complies with § 312j(3).

## 2. German BGB § 312i and EGBGB Article 246c: electronic-order mechanics

Where these rules apply to a CK-Labs-controlled electronic contracting flow, the consumer must have an effective way to:

- detect and correct input errors before submitting the order;
- receive the required information about the technical steps leading to contract conclusion;
- understand whether the contract text will be stored after conclusion and whether the customer can access it;
- understand how input errors can be identified and corrected;
- know the languages available for contract conclusion; and
- access any applicable code of conduct to which the trader has committed, where relevant.

The system must also:

- confirm receipt of the order electronically without undue delay; and
- allow the customer to retrieve and save the contract terms, including applicable terms and conditions, in a reproducible form at the time of contract conclusion.

A browser return from Xsolla, a TycoonX success animation, or an entitlement appearing in-game is not a substitute for the legally relevant order acknowledgement or contract confirmation where the contracting merchant must provide one.

## 3. German BGB § 312f: durable-medium contract confirmation

Where CK-Labs is the responsible trader for an applicable distance contract, provide the consumer with a confirmation of the contract on a **durable medium** within the legally required time.

The confirmation must reproduce the contractual content and required pre-contract information unless that information was already supplied on a durable medium in the legally sufficient manner.

If CK-Labs relies on special rules for early performance of digital content or a service and loss of a withdrawal right, the confirmation must preserve the legally required evidence of the consumer's express request or consent, acknowledgement of the consequence, and the other statutory conditions where applicable.

Do **not** characterize purchased TycoonX Diamonds as immediately supplied digital content merely to extinguish an otherwise applicable EU/EEA withdrawal right. The canonical TycoonX Terms and Purchases & Refunds Policy preserve separate purchased-Diamond withdrawal treatment.

For one-time 30-Day VIP and Lifetime VIP, do not assume that immediate activation automatically removes all withdrawal, conformity, refund, termination, or other mandatory digital-product rights. Apply the correct transaction-specific legal classification and conditions.

## 4. German BGB § 356a: electronic withdrawal function

### Current release rule

For a distance contract concluded through an online user interface where a statutory withdrawal right is running, the responsible trader must ensure that the consumer can submit the withdrawal declaration through an electronic withdrawal function on that online interface.

For a CK-Labs-controlled TycoonX interface, the first function must be clearly readable and labelled **`Vertrag widerrufen`** or another genuinely equivalent, unambiguous formulation. During the running withdrawal period it must be:

- continuously available;
- prominently placed; and
- easily accessible to the consumer.

Do not bury the function behind Support, a FAQ, a generic refund form, several unrelated account menus, a marketing opt-out, or a dark-pattern flow. A login requirement or identity check must not make the statutory function no longer easily accessible. Proportionate verification may be used to identify the correct contract and prevent account abuse.

### Required information and confirmation step

The withdrawal function must allow the consumer to provide or confirm, without unnecessary friction:

1. the consumer's name;
2. information identifying the contract or the part of the contract the consumer wants to withdraw from; and
3. the electronic communication method to which the receipt confirmation should be sent.

After those details are provided or confirmed, the consumer must be able to submit the withdrawal declaration through a clearly readable confirmation function labelled **`Widerruf bestätigen`** or another genuinely equivalent, unambiguous formulation.

Do not force unrelated data collection, marketing consent, a reason for withdrawal, a telephone call, a chat with Support, or an upsell/win-back step as a condition of using the statutory function.

### Immediate durable-medium receipt

Once the consumer activates the final confirmation function, the responsible trader must send an **immediate receipt confirmation on a durable medium**. It must contain at least:

- the content of the withdrawal declaration and the information supplied for it; and
- the date and time the withdrawal was received.

The system must use a reliable server-side receipt timestamp. If the consumer sent the declaration through the function before the withdrawal period expired, the declaration is treated as received within the period under BGB § 356a(5). A queue delay, email delay, provider retry, or later manual review must not convert a timely submission into a late one.

The receipt is evidence of receipt, not automatic proof that every requested transaction was legally withdrawable. A disputed classification may still be reviewed, but the consumer's timely declaration and evidence must be preserved.

### Pre-contract information about the withdrawal function

Where Article 246a § 1 EGBGB requires it, the consumer must be informed before contracting about the withdrawal conditions, deadlines, procedure, and the existence and placement of the electronic withdrawal function. Do not wait until after purchase to reveal that the statutory function exists.

### Withdrawal function is not the only valid withdrawal route

The electronic withdrawal function supplements other legally valid ways to exercise the withdrawal right. Do not tell a consumer that a withdrawal is invalid merely because they used another legally effective declaration route instead of the online function.

### Do not confuse withdrawal with BGB § 312k termination

The **BGB § 356a withdrawal function** and **BGB § 312k termination button** solve different legal problems:

- withdrawal concerns undoing an eligible distance contract during the statutory withdrawal period;
- termination concerns ending a covered continuing-obligation contract prospectively.

`Vertrag widerrufen` / `Widerruf bestätigen` do not replace `Verträge hier kündigen` / `jetzt kündigen` where § 312k applies, and the § 312k buttons do not replace § 356a.

If CK-Labs later launches a recurring TycoonX product through a German website, the flow may need both mechanisms at different points in the subscription lifecycle. Current 30-Day VIP remains one-time and non-renewing, and Lifetime VIP remains a one-time limited-window promotional entitlement.

### Do not hide the function based on an assumed early expiry

Do not remove or disable the § 356a function merely because TycoonX value was delivered immediately.

For a paid contract for non-physical digital content, current BGB § 356(5) requires the statutory conditions before an existing withdrawal right can expire early, including commencement of performance, the consumer's express consent to begin before the period ends, acknowledgement that this causes loss of the withdrawal right when performance begins, and the required confirmation under § 312f.

For a paid service, current BGB § 356(4) uses a different rule and requires full performance plus the applicable express consent/knowledge conditions before early expiry. Classify the product before applying an expiry rule.

The separate `TYCOONX_GERMAN_WITHDRAWAL_DIGITAL_CONTENT_SERVICE_VALUE_RELEASE_GATE.md` controls the current digital-content/service classification evidence and BGB § 357a value-compensation boundary. In particular, a service start is not automatically full performance, and BGB § 357a(3) does not create a value-compensation claim for withdrawn non-tangible digital content.

Purchased Diamonds must continue to follow the canonical TycoonX withdrawal treatment. Merely crediting Diamonds is not an automatic switch that hides the withdrawal function. For 30-Day VIP and Lifetime VIP, document the transaction-specific product classification and withdrawal status instead of assuming that activation alone ended the right.

If the authoritative record does not prove that a withdrawal right lawfully expired, fail safely by preserving the submission path and allowing legal review rather than silently blocking the consumer.

## 5. BGB § 312e: undisclosed extra costs

Do not attempt to collect an unavoidable service fee, processing fee, tax component, delivery charge, or other additional cost from a German consumer if the legally required cost information was not provided in the required way.

For TycoonX, the safe operational rule is:

- the amount represented as the final payable total must match the authoritative final checkout amount;
- mandatory taxes and unavoidable charges must not appear only after the consumer has already committed to the order; and
- a CK-Labs marketing page must not call a pre-tax or incomplete amount the final total if the actual checkout necessarily adds mandatory charges.

## 6. Xsolla-specific release evidence and withdrawal routing

For the official TycoonX webshop, retain a dated test purchase or non-production checkout evidence showing, without retaining unnecessary personal data:

- the Xsolla entity and legal address displayed for the selected payment method;
- the product name and TycoonX entitlement purchased;
- price, currency, taxes, and any other unavoidable charge;
- the final order/confirmation control as actually rendered to a German/EU consumer;
- the applicable refund/withdrawal information shown in checkout;
- the receipt and order-confirmation behavior;
- the transaction/order identifier used to reconcile the purchase;
- the point at which the contracting merchant treats the contract as formed;
- who provides the § 356a withdrawal function where it applies;
- where that function is located and how it can be reached without unnecessary friction;
- the durable-medium withdrawal receipt behavior; and
- the point at which CK-Labs grants or unwinds the TycoonX entitlement after authoritative confirmation.

If Xsolla is the contracting merchant and controls the legally relevant checkout/withdrawal interface, validate the Xsolla-controlled flow rather than creating a contradictory CK-Labs fake merchant flow. If CK-Labs controls a legally relevant online interface or remains responsible for a particular statutory duty, a redirect to Xsolla does not automatically erase that CK-Labs duty.

A Xsolla refund request, payment reversal, and German statutory withdrawal are related but not automatically identical concepts. Preserve the transaction-specific legal reason and authoritative state.

## 7. Apple App Store and Google Play responsibility split

For Apple App Store In-App Purchase and Google Play purchases, the platform normally controls the final native store payment sheet, transaction confirmation, and platform receipt/order record.

TycoonX must still verify that:

- the CK-Labs-owned product screen accurately describes Diamonds, one-time 30-Day VIP, or limited-window Lifetime VIP;
- the price shown before invoking the platform sheet is current enough not to mislead and the platform sheet remains authoritative for the completed transaction;
- a pending, declined, canceled, or unverified platform purchase does not grant paid value;
- the player is not shown a CK-Labs control that falsely suggests a paid contract is already concluded before the platform completes its confirmation flow;
- the provider-controlled receipt/order confirmation and CK-Labs entitlement ledger reconcile to the same purchase; and
- the legally responsible party's withdrawal/refund route is accurately described and remains available where mandatory law requires it.

Do not copy `zahlungspflichtig bestellen`, `Vertrag widerrufen`, or `Widerruf bestätigen` mechanically into a native Apple or Google interface that the platform legally and technically controls. First identify the responsible trader and interface.

Provider responsibility does not allow CK-Labs to deny a valid provider-approved refund/withdrawal state or to replay a purchase when reconciling the result.

## 8. Lifetime VIP checkout formation

A limited-window Lifetime VIP sale must additionally prove before purchase that:

- the sales window is genuine and its advertised deadline matches the offer configuration;
- the final checkout identifies Lifetime VIP as a one-time entitlement rather than a recurring subscription;
- the total price and currency are clear;
- the commercial-lifetime meaning is available clearly at or immediately before checkout;
- the final payment-obligation control is compliant for the responsible merchant/interface;
- the applicable withdrawal information/function is not hidden merely because activation is immediate;
- a later lower price does not retroactively reprice the completed purchase unless mandatory law requires otherwise; and
- ending the sales window does not alter an already binding valid purchase.

A user merely opening the product page, adding the product to a cart, or reaching a pending-payment state does not by itself override the provider's legally relevant contract-formation and payment-confirmation rules.

## 9. Withdrawal, refund, and entitlement isolation

A withdrawal submission must be mapped to the **specific transaction or part of a transaction** identified by the consumer and the authoritative payment/order record.

The withdrawal flow must be idempotent. Duplicate clicks, browser retries, provider webhooks, email retries, or support escalation must not create duplicate refunds, duplicate revocations, duplicate negative balances, or duplicate entitlement restoration.

For TycoonX paid value:

- a valid withdrawal/refund of a Diamond purchase may unwind only the affected purchased value as permitted by law and the authoritative transaction state; unrelated legitimate Diamonds must not be deleted;
- a withdrawal involving one-time 30-Day VIP must not restart, extend, duplicate, or silently convert the original 30-day period;
- a valid withdrawal/refund of a Lifetime VIP purchase may unwind that affected entitlement where legally appropriate, but must not create a hidden expiry for an unrelated valid Lifetime VIP or convert it into 30-Day VIP;
- a withdrawal request is not itself proof of fraud, chargeback abuse, regional-price abuse, or account compromise; and
- a provider refund/withdrawal callback must never replay an Apple, Google, or Xsolla entitlement grant.

Where paid value has already been used or transferred, apply the mandatory legal remedy and the narrow transaction-specific correction rules in the TycoonX Terms/Purchases policy. Do not use a withdrawal request as authority for unrelated confiscation.

## 10. Privacy, security, accessibility, and language

The § 356a function necessarily processes identifying and transaction data. Collect only what is needed for the legal function, security, and the resulting legal/accounting record. Do not repurpose the withdrawal contact method for marketing merely because the consumer supplied it to receive the statutory confirmation.

Protect withdrawal endpoints against CSRF, account-takeover abuse, enumeration, forged order IDs, and duplicate submission without making the lawful function inaccessible. Security controls must remain proportionate.

The function must remain usable on supported mobile and desktop interfaces and must meet applicable accessibility requirements. For a German consumer flow, use clear German wording or an equally clear localized equivalent rather than hiding the legal function behind an unexplained English-only `refund` label.

A security or provider outage must not silently destroy a timely withdrawal attempt. Preserve request timestamps and provide a reasonable fallback route while restoring the primary function.

## 11. Release test matrix

Before go-live or after a material checkout/withdrawal change, capture at least these scenarios for each applicable channel:

1. normal successful purchase;
2. user changes product/account information before submission;
3. user cancels before the final payment obligation;
4. payment method unavailable for the user's region;
5. final price differs from an earlier cached/localized display;
6. tax or currency presentation changes at checkout;
7. pending/async payment that completes later;
8. failed or declined payment;
9. provider receipt/order confirmation delayed;
10. § 356a function visible and easily accessible while the withdrawal right is running;
11. first withdrawal control uses `Vertrag widerrufen` or a clear equivalent;
12. final withdrawal control uses `Widerruf bestätigen` or a clear equivalent;
13. immediate durable-medium withdrawal receipt includes declaration content, date, and time;
14. withdrawal sent seconds before the deadline and processed later remains recorded as timely;
15. duplicate withdrawal submission is idempotent;
16. consumer identifies only part of a contract/order where partial withdrawal is legally possible;
17. wrong or unverifiable order identifier receives a safe review path without exposing another user's data;
18. right has genuinely expired early and the evidence satisfies the correct § 356 rule;
19. provider outage or notification delay during withdrawal;
20. Apple-controlled purchase/refund route;
21. Google-controlled purchase/refund route;
22. Xsolla merchant/withdrawal role and actual German web flow;
23. one-time 30-Day VIP withdrawal/refund without period restart or duplication;
24. Lifetime VIP near the end of a genuine sales window without hidden withdrawal suppression;
25. Diamond withdrawal/correction without removal of unrelated legitimate value;
26. account-compromise investigation without treating withdrawal as fraud by default;
27. guest/logged-out access where login would otherwise create unlawful friction; and
28. mobile, keyboard, screen-reader, and localized-label accessibility.

For German CK-Labs-controlled web ordering, evidence must also show the exact final-order control wording, immediately-before-order summary, error-correction capability, electronic acknowledgement, durable-medium contract confirmation, the live § 356a path, and the timestamped withdrawal receipt.

## 12. Evidence to retain

For each material German checkout release, retain a dated evidence packet containing:

- product identifier and product classification;
- contracting trader / merchant-of-record mapping;
- screenshots or recordings of pre-contract information and final-order controls;
- final total price/currency/tax evidence;
- contract confirmation/receipt example;
- statutory withdrawal classification and expected period;
- screenshot or recording of the § 356a function and its placement;
- labels used for both withdrawal steps;
- fields collected in the withdrawal flow;
- durable-medium withdrawal receipt example with timestamp;
- server-side receipt timestamp behavior near the deadline;
- evidence supporting any early expiry of the withdrawal right;
- provider role mapping for Apple, Google, or Xsolla;
- idempotency/reconciliation evidence; and
- proof that unrelated Diamonds, one-time 30-Day VIP, and Lifetime VIP remain unaffected.

Do not retain unnecessary payment credentials, full card data, or unrelated personal data merely for screenshots.

## 13. Regression rules

This gate must never be weakened to say that:

- a generic `Continue`, `Confirm`, `Complete`, `Get VIP`, or similar ambiguous button is automatically sufficient for a German payment-obligation order;
- nearby explanatory text can always repair an ambiguous final-order button;
- a generic Support/refund form automatically satisfies BGB § 356a;
- `Verträge hier kündigen` or `jetzt kündigen` can replace the § 356a withdrawal controls;
- `Vertrag widerrufen` can replace the § 312k termination function for a recurring contract;
- immediate delivery or activation automatically extinguishes every withdrawal right;
- crediting Diamonds automatically extinguishes an applicable statutory withdrawal right;
- the consumer must give a reason, accept marketing, call Support, or accept a win-back offer before withdrawing;
- a queue or email delay can make a declaration late when the consumer submitted it through the function before the deadline;
- a hidden fee becomes collectible merely because a provider later charged it;
- an in-game success screen replaces the contracting merchant's required receipt/order confirmation;
- provider processing removes CK-Labs' separate responsibility to deliver or reconcile the paid TycoonX entitlement correctly; or
- any of these rules waive a mandatory withdrawal, conformity, update, price-reduction, termination, refund, or liability right.

## Current legal/platform checkpoint

Reviewed against current sources available September 4, 2026:

- German BGB § 356a, including `Vertrag widerrufen`, continuous/prominent/easy availability, the required name/contract/contact fields, `Widerruf bestätigen`, immediate durable-medium receipt, and the timely-submission rule;
- current German BGB § 356(4) for services and § 356(5) for non-tangible digital content, which use different conditions for early expiry of withdrawal rights;
- German BGB § 357a(2) for proportionate service value compensation and § 357a(3) for the no-value-compensation rule on withdrawn non-tangible digital content;
- EGBGB Article 246a § 1, including withdrawal information and, where applicable, information about the existence and placement of the § 356a function;
- German BGB § 312i, § 312j, § 312e, and § 312f;
- EGBGB Article 246c;
- CJEU Case C-249/21 (Fuhrmann-2) and Case C-400/22 (Conny);
- Apple's current native purchase/refund framework and current subscription price-increase consent treatment for Germany;
- Google Play's current purchase/subscription state model, where RTDN is a change signal and the Developer API remains authoritative for full state; and
- Xsolla's current subscription/refund webhook model, which distinguishes payment, updated subscription, canceled subscription, and refund events.

Provider rules and product interfaces can change. Re-check the actual production checkout and the current provider documentation when the payment or withdrawal flow changes.

## Founder-protective interpretation

This gate does not prevent CK-Labs from changing future prices, using different genuine regional prices, correcting an obvious catalog/configuration error before a binding order is formed, ending a genuine Lifetime VIP sales window, refusing an unconfirmed payment, investigating fraud, or using Apple, Google, or Xsolla as the responsible payment/merchant interface where lawfully configured.

It protects CK-Labs by making the moment of contract formation, payment obligation, withdrawal receipt, merchant responsibility, refund/reversal state, and entitlement correction provable. A lawful withdrawal can be processed precisely without converting every refund request into fraud and without damaging unrelated TycoonX purchases.