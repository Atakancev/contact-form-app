# TycoonX German E-Commerce Checkout & Contract-Formation Release Gate

Last reviewed: August 30, 2026
Owner: CK-Labs
Scope: paid TycoonX web checkout, Xsolla-powered webshop handoff, CK-Labs-owned order screens, and release evidence for Apple App Store and Google Play purchases where the platform controls the final payment interface.

## Purpose

TycoonX already has public rules for prices, refunds, withdrawal, Diamonds, one-time 30-Day VIP, limited-window Lifetime VIP, provider roles, and entitlement delivery. This gate covers a different release risk: whether the **actual electronic ordering flow forms the contract correctly and gives the consumer the required information at the required time**.

This is an implementation and evidence gate. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, mandatory consumer law, or the transaction-specific terms of Apple, Google, Xsolla, or another contracting merchant.

## P0: first identify the contracting trader and final order interface

Before applying a CK-Labs checkout rule, record for the transaction/channel:

- who is the contracting trader or merchant of record;
- who controls the final order button or equivalent confirmation control;
- who displays the final total price, currency, taxes, and unavoidable charges;
- who sends the order/contract confirmation or receipt;
- who owns the statutory withdrawal/refund interface for the transaction; and
- which TycoonX entitlement CK-Labs must deliver after authoritative payment confirmation.

Do not assume that CK-Labs is the contracting trader merely because the player started from a TycoonX page. Do not assume that Apple, Google, or Xsolla owns every legal duty merely because it processes payment.

For the current Xsolla framework, the transaction-specific Xsolla company can depend on the payment method. Xsolla's current Refund Policy states that the relevant Xsolla company and legal address are shown at checkout after the payment method is chosen and again on the receipt. The same policy states that the customer's transaction is with Xsolla rather than the partner under that arrangement, and that the contract is formed when Xsolla sends the order confirmation email. Release evidence must verify what the real TycoonX checkout actually shows instead of hard-coding one Xsolla entity or contract-formation assumption.

## 1. German BGB § 312j: payment-obligation checkout

Where German BGB § 312j applies to a consumer order interface for which CK-Labs is the responsible trader, the live flow must satisfy all of the following.

### At the beginning of the ordering process

Clearly and legibly disclose:

- any applicable delivery or availability restrictions; and
- the accepted payment methods.

For digital TycoonX products, a relevant restriction can include genuine country/storefront/payment-method availability. Do not invent a delivery restriction merely to deter a region, and do not hide an important restriction until after the consumer has attempted to pay.

### Immediately before the consumer submits the paid order

Provide the legally required essential information clearly, understandably, and prominently. For TycoonX this can include, as applicable:

- the main characteristics of the exact product, such as the Diamond quantity, one-time 30-Day VIP duration, or Lifetime VIP entitlement;
- the total price including taxes and mandatory charges;
- any unavoidable additional costs;
- contract duration or termination information where relevant;
- any minimum duration of the consumer's obligations; and
- for a future recurring product, the recurring total price/cost information required for that product.

The final ordering screen must not force the consumer to infer the product, price, duration, or payment obligation from an earlier page that is no longer visible or from a legal-policy link alone.

### Final order control

The order flow must make the payment obligation explicit. If the order is placed with a button, the button must be labelled only with `zahlungspflichtig bestellen` or another wording that is genuinely equivalent and unambiguous in the language of the checkout.

Do not rely on nearby text, a checkbox, a price displayed elsewhere, or explanatory copy below the button to cure an ambiguous order-button label. The Court of Justice of the European Union held in Case C-249/21 (Fuhrmann-2) that the assessment of equivalent wording is based on the words on the button or similar function itself.

Do not treat the button rule as irrelevant merely because the payment obligation is conditional or may arise only after a later event. The Court of Justice held in Case C-400/22 (Conny) that the Article 8(2) payment-obligation requirement also applies where payment becomes due only after a subsequent condition is satisfied.

For a CK-Labs-controlled German checkout, failure of the required payment-obligation control is not a cosmetic defect: BGB § 312j(4) states that the contract covered by § 312j(2) is concluded only if the trader complies with the payment-obligation requirement in § 312j(3).

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

Where CK-Labs is the responsible trader for an applicable distance contract, provide the consumer with a confirmation of the contract on a **durable medium** within a reasonable time after conclusion and, at the latest, before performance of the service begins where the statutory timing rule requires that.

The confirmation must reproduce the contractual content and the required pre-contract information unless that information was already supplied on a durable medium in the legally sufficient manner.

If CK-Labs relies on the special rules for early performance of non-physical digital content and loss of a withdrawal right, the contract confirmation must also preserve the legally required record of the consumer's express consent to early performance and acknowledgement of the consequence, where those conditions actually apply.

Do **not** use this rule to characterize purchased TycoonX Diamonds as immediately supplied digital content merely to extinguish an otherwise applicable withdrawal right. The canonical TycoonX Terms and Purchases & Refunds Policy deliberately preserve the separate August 29, 2026 purchased-Diamond withdrawal treatment.

For one-time 30-Day VIP and Lifetime VIP, do not assume that immediate activation automatically removes all withdrawal, conformity, refund, termination, or other mandatory digital-service/product remedies. Apply the correct transaction-specific legal classification and conditions.

## 4. German BGB § 312e: undisclosed extra costs

Do not attempt to collect an unavoidable service fee, processing fee, tax component, delivery charge, or other additional cost from a German consumer if the legally required cost information was not provided in the required way.

BGB § 312e limits the trader's ability to demand additional costs that were not properly disclosed. This is separate from the ban on misleading drip pricing in `TYCOONX_EU_PROMOTION_DARK_PATTERN_RELEASE_GATE.md`.

For TycoonX, the safe operational rule is:

- the amount represented as the final payable total must match the authoritative final checkout amount;
- mandatory taxes and unavoidable charges must not appear only after the consumer has already committed to the order; and
- a CK-Labs marketing page must not call a pre-tax or incomplete amount the final total if the actual checkout necessarily adds mandatory charges.

## 5. Xsolla-specific release evidence

For the official TycoonX webshop, retain a dated test purchase or non-production checkout evidence showing, without retaining unnecessary personal data:

- the Xsolla entity and legal address displayed for the selected payment method;
- the product name and TycoonX entitlement purchased;
- price, currency, taxes, and any other unavoidable charge;
- the final order/confirmation control as actually rendered to a German/EU consumer;
- the applicable refund-policy type or link shown in checkout;
- the receipt and order-confirmation behavior;
- the transaction/order identifier used to reconcile the purchase;
- the point at which Xsolla treats the contract as formed under the applicable transaction terms; and
- the point at which CK-Labs grants the TycoonX entitlement after valid server-side confirmation.

Xsolla's current Refund Policy states that prices are quoted including applicable taxes at purchase under that policy and that a processed order is followed by an electronic purchase receipt/order confirmation. Verify those facts in the actual CK-Labs project configuration rather than treating policy text as proof that the live checkout is correctly configured.

If the Xsolla checkout itself controls the final legally relevant order button and is the contracting merchant, CK-Labs should not add a second fake 'contract formation' step that conflicts with the provider flow. CK-Labs should instead validate the provider-controlled flow and keep its own TycoonX pre-checkout page accurate about product, price expectations, merchant role, and entitlement delivery.

## 6. Apple App Store and Google Play responsibility split

For Apple App Store In-App Purchase and Google Play purchases, the platform normally controls the final store payment sheet, transaction confirmation, and platform receipt/order record.

TycoonX must still verify that:

- the CK-Labs-owned product screen accurately describes Diamonds, one-time 30-Day VIP, or limited-window Lifetime VIP;
- the price shown before invoking the platform sheet is current enough not to mislead and the platform sheet remains authoritative for the completed transaction;
- a pending, declined, canceled, or unverified platform purchase does not grant paid value;
- the player is not shown a CK-Labs control that falsely suggests a paid contract is already concluded before the platform completes its required confirmation flow; and
- the provider-controlled receipt/order confirmation and the CK-Labs entitlement ledger can be reconciled to the same purchase.

Do not copy the German `zahlungspflichtig bestellen` label mechanically into an Apple or Google flow that the platform legally and technically controls. The release question is whether the responsible trader/interface satisfies the applicable rule, not whether every screen contains the same German phrase.

## 7. Lifetime VIP checkout formation

A limited-window Lifetime VIP sale must additionally prove before purchase that:

- the sales window is genuine and its advertised deadline matches the offer configuration;
- the final checkout identifies Lifetime VIP as a one-time entitlement rather than a recurring subscription;
- the total price and currency are clear;
- the commercial-lifetime meaning is available clearly at or immediately before checkout;
- the final payment-obligation control is compliant for the responsible merchant/interface;
- a later lower price does not retroactively reprice the completed purchase unless mandatory law requires otherwise; and
- ending the sales window does not alter an already binding valid purchase.

A user merely opening the product page, adding the product to a cart, or reaching a pending-payment state does not by itself override the provider's legally relevant contract-formation and payment-confirmation rules.

## 8. Release test matrix

Before go-live, capture at least these scenarios for each applicable channel:

1. normal successful purchase;
2. user changes quantity/product/account information before submission;
3. user cancels before the final payment obligation;
4. payment method unavailable for the user's region;
5. final price differs from an earlier cached/localized display;
6. tax or currency presentation changes at checkout;
7. pending/async payment that completes later;
8. failed or declined payment;
9. provider receipt/order confirmation delayed;
10. refund/withdrawal route after completed purchase; and
11. Lifetime VIP purchased near the real end of a sales window.

For German CK-Labs-controlled web ordering, the evidence must also show the exact final-order control wording, the immediately-before-order summary, error-correction capability, electronic acknowledgement, and durable-medium contract confirmation.

## 9. Regression rules

This gate must never be weakened to say that:

- a generic `Continue`, `Confirm`, `Complete`, `Get VIP`, or similar ambiguous button is automatically sufficient for a German payment-obligation order;
- nearby explanatory text can always repair an ambiguous final-order button;
- a hidden fee becomes collectible merely because a provider later charged it;
- an in-game success screen replaces the contracting merchant's required receipt/order confirmation;
- provider processing removes CK-Labs' separate responsibility to deliver the paid TycoonX entitlement correctly; or
- any of these rules waive a mandatory withdrawal, conformity, update, price-reduction, termination, refund, or liability right.

## Current legal checkpoint

Reviewed against the current texts available on August 30, 2026:

- German BGB § 312i, electronic-commerce mechanics and immediate electronic order acknowledgement;
- German BGB § 312j, payment-obligation checkout information and order-button requirement;
- German BGB § 312e, consequences of missing cost disclosure;
- German BGB § 312f, durable-medium contract confirmation;
- EGBGB Article 246a § 1, including main characteristics, total price, personalized-price disclosure where applicable, additional costs, duration/termination and minimum-duration information;
- EGBGB Article 246c, technical steps, contract-text storage/access, input-error correction, contract languages and codes of conduct;
- Directive 2011/83/EU Article 8(2);
- CJEU Case C-249/21 (Fuhrmann-2), confirming that only the words on the order button/similar function are used to assess whether the wording is an unambiguous equivalent; and
- CJEU Case C-400/22 (Conny), confirming that the payment-obligation rule also applies where payment depends on a later condition.

## Founder-protective interpretation

This gate does not prevent CK-Labs from changing future prices, using different genuine regional prices, correcting an obvious catalog/configuration error before a binding order is formed, ending a genuine Lifetime VIP sales window, refusing an unconfirmed payment, or using Apple, Google, or Xsolla as the responsible payment/merchant interface where lawfully configured. It protects CK-Labs by making the moment of contract formation, payment obligation, receipt, provider authority, and entitlement delivery provable instead of ambiguous.
