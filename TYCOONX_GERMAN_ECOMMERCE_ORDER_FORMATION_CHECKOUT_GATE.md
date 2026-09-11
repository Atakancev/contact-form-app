# TycoonX German e-commerce order-formation and checkout gate

Status: legal/commercial implementation gate for German consumer purchases on CK-Labs-controlled online interfaces.

Last reviewed: 2026-09-11.

This document does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy or Community Standards. It translates current German electronic-commerce contract-formation duties into implementation and QA requirements. Mandatory consumer rights always prevail over this internal gate.

## 1. Scope

Apply this gate whenever CK-Labs itself offers a German consumer a paid TycoonX transaction through a CK-Labs-controlled website, webview or other online interface, including the TycoonX webshop where Xsolla is used as payment/checkout provider.

Products presently relevant include:

- purchased Diamonds;
- one-time, non-renewing 30-Day VIP;
- Lifetime VIP when genuinely offered during a selected limited-time promotional sales window; and
- any future paid TycoonX bundle or digital product.

Lifetime VIP may be withdrawn from sale and may never return. Its availability during one sales window creates no promise of continuous availability or of a later sales window.

This gate must not be used to describe TycoonX as a beta service. TycoonX has been in full release since September 1, 2026.

## 2. Core German checkout rule

For a German consumer contract in electronic commerce that obliges the consumer to pay, § 312j BGB requires the order situation to make the payment obligation explicit.

Immediately before the consumer places the order, the checkout must prominently and clearly present the information required by § 312j(2) BGB and Article 246a § 1(1) nos. 1, 5-8, 14 and 15 EGBGB where applicable. This includes, depending on the product:

- the essential characteristics of the product;
- the total price including taxes and charges that must legally be included;
- any additional unavoidable costs;
- any applicable disclosure that a price was personalised using automated decision-making;
- total recurring-period costs if a future subscription product is ever introduced;
- applicable contract duration or termination conditions; and
- any minimum duration of the consumer's obligations.

For TycoonX, the final review must make the product distinction unmistakable:

- Diamonds are the stated quantity of virtual currency, not cash, a deposit or an investment;
- 30-Day VIP is a one-time, non-renewing 30-day entitlement and must not be presented as an automatically renewing subscription;
- Lifetime VIP is a one-time promotional entitlement for the commercial operating lifetime of TycoonX, subject to mandatory consumer rights and the canonical legal terms, and is not a promise that TycoonX will operate forever.

## 3. Final order button

If a CK-Labs-controlled German checkout uses a button to place the binding paid order, the button must satisfy § 312j(3) BGB. The statutory safe wording is `zahlungspflichtig bestellen`; an alternative is acceptable only if it is equally unambiguous that pressing it creates a payment obligation.

A button such as `Weiter`, `Fortfahren`, `Bestätigen`, `Registrieren`, `VIP aktivieren` or `Jetzt erhalten` is not an acceptable final paid-order label merely because an earlier screen displayed a price. Such wording may be used on a non-binding navigation step if a later final control independently satisfies the payment-obligation rule.

Do not visually separate the final price/product summary so far from the binding button that the payment consequence becomes unclear.

Under § 312j(4) BGB, the paid consumer contract covered by that provision is formed only if the trader complies with the final-button requirement. This is therefore a contract-formation control, not cosmetic checkout copy.

## 4. Checkout-start information

Where § 312j(1) BGB applies to the website, the consumer must be told clearly, at the latest when the order process begins:

- whether delivery/availability restrictions apply; and
- which payment methods are accepted.

For TycoonX, relevant restrictions can include genuine country, platform, provider or legal availability restrictions. Do not invent scarcity or a regional restriction that does not actually exist.

If Xsolla determines which payment methods are available after country/currency/risk checks, the CK-Labs flow may rely on the provider to render the current methods, but the combined checkout must still give the consumer the legally required information at the required time.

## 5. Error recognition and correction before ordering

Under § 312i BGB, a CK-Labs-controlled electronic-commerce flow must provide appropriate, effective and accessible technical means to identify and correct input errors before the order is submitted.

The review/correction path should cover, where relevant:

- selected TycoonX product or bundle;
- Diamond quantity or package;
- selected TycoonX account or intended gift recipient;
- country/region selection where user-editable and legally relevant;
- currency where user-selectable;
- coupon or promotion code;
- quantity, if quantity can vary;
- email or other order-confirmation destination; and
- any optional consent choices that affect the transaction.

Do not force the consumer to complete a charge and then contact support merely to correct an error that the CK-Labs checkout could reasonably have allowed them to fix before the binding order.

## 6. Pre-contract electronic-commerce information

Article 246c EGBGB information must be given clearly and in time before the order where applicable. The CK-Labs-controlled flow must explain:

1. the technical steps that lead to conclusion of the contract;
2. whether CK-Labs stores the contract text after conclusion and whether it remains accessible to the customer;
3. how the customer can identify and correct input errors before ordering;
4. the languages available for concluding the contract; and
5. any relevant codes of conduct to which the trader has actually committed, including how they can be accessed electronically.

Do not claim adherence to a code of conduct that CK-Labs has not actually adopted.

## 7. Terms must be retrievable and storable

At contract formation, § 312i requires a way for the customer to retrieve and save the contractual provisions including applicable Terms.

For a CK-Labs TycoonX webshop flow, the final purchase experience should expose stable links to the applicable TycoonX Terms of Service and Purchases & Refunds Policy and should allow the consumer to retain them in a reproducible form.

A transient tooltip that disappears after payment is not a substitute for a retrievable legal text.

If a localized German checkout is used, do not silently link the consumer to materially different or stale legal wording.

## 8. Order-receipt acknowledgment is not the same thing as payment or entitlement proof

§ 312i requires electronic acknowledgment of receipt of the order without undue delay. Operationally keep these concepts separate:

- **order received**: the consumer's order reached the relevant system;
- **payment authorised/paid**: the payment provider reports the applicable payment state;
- **contract confirmation**: the durable-medium confirmation required by applicable consumer law;
- **entitlement fulfilled**: authoritative TycoonX records show that the exact purchased Diamonds or VIP source was granted;
- **refund/reversal/chargeback**: the specific payment source later changed state.

Do not send `Purchase successful` merely because an order record was created while payment remains pending.

Do not grant the same entitlement twice merely because both a browser return URL and a provider webhook are received.

## 9. Durable-medium contract confirmation

For a qualifying distance contract, § 312f BGB requires a contract confirmation reproducing the contractual content on a durable medium within a reasonable time after contract conclusion and no later than the statutory deadline applicable to the supply/performance.

The confirmation should preserve or link to the information legally required for that transaction, including where applicable:

- product/SKU and understandable product name;
- quantity or entitlement duration;
- total price, currency and applicable tax/charge presentation;
- transaction/order reference;
- contract date/time;
- trader identity/contact information required by law;
- applicable withdrawal information;
- relevant Terms/Policies or the contractual text; and
- where legally relevant for digital content, evidence of an express request/consent to begin performance before the withdrawal period ends and the consumer's acknowledgment of the statutory consequence.

An ordinary on-screen success toast alone is not a durable-medium contract confirmation.

## 10. Digital-content withdrawal evidence must remain separate from the order button

The final payment button must not be used as a vague catch-all for every legally distinct consent.

If CK-Labs relies on early expiry of a statutory withdrawal right for qualifying paid digital content under the applicable German rules, retain the separate, legally required express consent/acknowledgment evidence. Do not infer it merely from:

- pressing the paid-order button;
- launching TycoonX;
- spending Diamonds;
- receiving VIP;
- accepting general Terms; or
- a provider saying the card payment succeeded.

The separate electronic withdrawal-function requirements applicable to covered German online-interface purchases from June 19, 2026 remain governed by the dedicated TycoonX withdrawal-function gate and are not replaced by this document.

## 11. Price, tax, FX and regional-price presentation

Immediately before the binding order, present the actual total payable amount that governs that transaction as required by applicable law.

TycoonX may lawfully have different future prices by country, platform, channel, currency, genuine promotional window or provider, subject to applicable consumer law and platform rules. Apple, Google Play or Xsolla tax/FX mechanics may alter the local amount presented before confirmation.

Rules for completed transactions:

- do not retroactively reprice a completed purchase merely because a later price changed;
- a later lower price does not automatically create a price-match, refund or credit right unless mandatory law requires a remedy;
- a later higher price does not create an extra charge for an already completed one-time purchase;
- obvious catalogue/configuration errors must be handled under applicable law and the canonical TycoonX legal framework, not by silently charging a different amount after confirmation;
- promotional countdowns, crossed-out prices and discount claims must be genuine and non-misleading; and
- a Lifetime VIP price may differ between genuine sales windows without creating an expectation that a previous price will return.

## 12. No subscription dark pattern

Current one-time TycoonX products must not be presented through subscription-style copy that contradicts their actual billing model.

For the one-time 30-Day VIP product:

- show one charge;
- state that it does not renew automatically;
- do not display a fake monthly recurring equivalent as though it were the actual billing frequency; and
- do not demand a subscription cancellation to prevent a renewal that does not exist.

For Lifetime VIP:

- show it as a one-time limited-time promotional offering when available;
- do not imply automatic renewal;
- do not imply continuous sale availability; and
- do not represent `lifetime` as a guarantee that TycoonX can never lawfully be discontinued.

If CK-Labs ever introduces a genuinely recurring product, it must receive a separate legal/product review covering recurring-price disclosure, cancellation and price-change/notice rules before launch.

## 13. Gifts

If CK-Labs permits a TycoonX purchase to be gifted, the checkout and payment records must distinguish at minimum:

- purchaser;
- intended recipient;
- provider transaction/order identifier;
- product/SKU;
- amount/currency; and
- exact entitlement source granted to the recipient.

The recipient must not be falsely presented as the payer. Refund handling must preserve provider rules and mandatory consumer rights and must not delete unrelated entitlements merely because one gifted transaction is refunded.

## 14. Pending, failed, reversed and duplicated payment states

A binding-order UI does not justify granting permanent value before the authoritative provider state permits fulfillment.

Implementation requirements:

- pending payment must not be treated as finally paid merely because the consumer returned to TycoonX;
- failed/canceled payment must not grant paid value;
- duplicated webhook or redirect events must be idempotent;
- provider-authoritative refunds/reversals must reconcile only the attributable source/value;
- a refunded Diamond source must not erase unrelated earned, promotional or separately purchased Diamonds;
- a reversed/refunded 30-Day VIP source must not delete Lifetime VIP or another valid VIP source; and
- unmatched authoritative refund/reversal events must be retained safely for later reconciliation rather than discarded and later fulfilled as if nothing happened.

## 15. Apple App Store responsibility split

For purchases completed through Apple's system checkout, Apple controls substantial portions of the payment UI, local price/tax presentation and transaction confirmation. CK-Labs must not replace those native purchase steps with a non-compliant private checkout where Apple's rules require In-App Purchase.

CK-Labs remains responsible for matters it controls, including accurate TycoonX product configuration, descriptions and entitlement delivery. Apple's current categories distinguish consumable, non-consumable, auto-renewable subscription and non-renewing subscription products. The TycoonX product configuration must match the actual commercial promise.

Purchased in-game currency on Apple must also respect Apple's current rule that purchased in-app currency does not expire.

## 16. Google Play responsibility split

For Google Play-distributed app transactions, Google controls substantial parts of its billing UI and payment processing. Google Play's current Payments policy generally requires Play Billing for in-app digital goods and functionality unless an applicable policy exception applies.

CK-Labs remains responsible for accurate TycoonX product/offer metadata and for authoritative entitlement reconciliation on its own service. A Google order-success screen must not be treated as permission to grant value twice when the server later receives the corresponding provider event.

## 17. Xsolla and CK-Labs webshop responsibility split

Using Xsolla does not erase CK-Labs obligations for the portions of the offer and order journey CK-Labs controls.

Before launch or after a major checkout redesign, verify the combined CK-Labs/Xsolla experience end-to-end, including:

- where the product and total price are displayed;
- which interface contains the binding paid-order control;
- what wording appears on that control for German consumers;
- whether the consumer can correct relevant errors before ordering;
- when the order is legally submitted;
- which party sends the immediate order-receipt acknowledgment;
- which party supplies durable-medium purchase/contract confirmation;
- how withdrawal information/functionality is surfaced where required;
- how taxes, currencies and payment methods are presented; and
- which provider/server event is authoritative for fulfillment, refund and reversal.

Do not assume that a provider's generic global checkout automatically satisfies every German requirement for the particular TycoonX integration.

## 18. Security, fraud and account compromise

Checkout controls may use proportionate fraud/security measures, but they must not rewrite the commercial facts of a valid purchase.

A compromised-account complaint should trigger source-authoritative investigation rather than automatic deletion of all TycoonX value. Preserve purchase, device/security and provider evidence as lawfully permitted. Correct only the transaction/value that can reasonably be attributed to the affected source, subject to mandatory law and provider decisions.

## 19. Checkout evidence to retain

Subject to the Privacy Policy, retention limits and data-minimisation requirements, the transaction evidence model should be able to establish:

- product/SKU and version of the offer shown;
- one-time/non-renewing/Lifetime product classification;
- price, currency, tax/fees and relevant regional context;
- provider/channel;
- provider transaction/order/purchase-token identity;
- purchaser account and gift recipient if applicable;
- timestamp of order;
- version or snapshot reference for applicable Terms/Policy;
- legally relevant consent/acknowledgment evidence;
- order-receipt acknowledgment status;
- authoritative payment state;
- exact entitlement source fulfilled; and
- later refund, reversal or chargeback state.

Do not retain unnecessary payment-card data merely to prove that a purchase existed.

## 20. Minimum production QA scenarios

Before treating a CK-Labs-controlled German checkout as release-ready, test at least these cases:

1. German consumer buys Diamonds and sees the full payable amount immediately before ordering.
2. Final binding button clearly communicates payment obligation.
3. A `Continue` button that is not binding leads to a later compliant final paid-order control.
4. Consumer changes the selected Diamond package before binding submission.
5. Consumer corrects a mistyped gift recipient before ordering.
6. 30-Day VIP is clearly one-time and non-renewing.
7. Lifetime VIP is clearly a limited-time promotional offer and not a recurring product.
8. Genuine Lifetime VIP countdown reaches zero and the offer actually closes as represented.
9. Coupon changes the total price and the final review reflects the actual amount.
10. Tax/FX/provider adjustment changes local price before confirmation and the updated total is shown before the binding order.
11. Payment stays pending after order submission and no completed entitlement is falsely shown.
12. Provider webhook and browser return arrive twice and value is granted exactly once.
13. Provider refund removes only the attributable purchase source/value.
14. A refunded 30-Day VIP transaction does not remove an independent Lifetime VIP source.
15. A refunded Diamond transaction does not wipe unrelated earned/promotional Diamonds.
16. Order receipt is acknowledged electronically without being confused with successful payment.
17. Consumer receives a durable-medium contract confirmation where required.
18. Applicable Terms can be retrieved and saved at contract formation.
19. German-language checkout does not contain stale `TyconX` or beta wording.
20. Apple, Google Play and Xsolla flows each preserve their actual provider role rather than pretending CK-Labs controls every checkout step.

## 21. Release blockers

Treat the following as P0/P1 commercial/legal blockers for a CK-Labs-controlled German paid checkout:

- ambiguous final paid-order button;
- missing final total price/product characteristics;
- inability to identify/correct relevant input errors before binding order;
- 30-Day VIP shown as recurring;
- Lifetime VIP shown as permanently available or as an impossible promise of perpetual service;
- pending payment shown as completed;
- duplicate entitlement grant from non-idempotent payment events;
- no retrievable/storable contract terms;
- missing required electronic order-receipt acknowledgment;
- missing required durable-medium contract confirmation;
- withdrawal consent inferred from generic Terms/payment acceptance instead of collected as legally required;
- source-unaware refund/reversal that destroys unrelated value; or
- stale beta or `TyconX` player-facing wording.

## 22. Official legal/platform references checked on 2026-09-11

- German BGB § 312i, general duties in electronic commerce: https://www.gesetze-im-internet.de/bgb/__312i.html
- German BGB § 312j, special duties for paid consumer e-commerce orders: https://www.gesetze-im-internet.de/bgb/__312j.html
- German BGB § 312f, contract copies/confirmations: https://www.gesetze-im-internet.de/bgb/__312f.html
- Article 246a § 1 EGBGB, consumer information duties: https://www.gesetze-im-internet.de/bgbeg/art_246a__1.html
- Article 246c EGBGB, electronic-commerce information duties: https://www.gesetze-im-internet.de/bgbeg/BJNR006049896.html
- Directive 2011/83/EU, including Article 8 consumer online-order requirements: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0083
- Apple App Review Guidelines, current payment/IAP requirements: https://developer.apple.com/app-store/review/guidelines/
- Apple App Store Connect In-App Purchase types: https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-types/
- Google Play Payments policy: https://support.google.com/googleplay/android-developer/answer/9858738

## 23. Relationship to the canonical legal documents

This gate is intentionally operational. It does not itself alter the canonical English TycoonX legal promise. If checkout implementation review reveals that the canonical English Terms or Purchases & Refunds Policy materially misstate or omit a player-facing legal consequence, update the canonical English source first and then synchronize all 25 localized sets in the required locale order, updating `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md` after each localization change.
