# TycoonX EU/German Payment-Method Fee & Surcharge Release Gate

Last reviewed: September 1, 2026
Owner: CK-Labs
Status: P0 for any CK-Labs-controlled checkout fee and P0 review for provider-controlled consumer payment fees

## Purpose

TycoonX already has strong rules for final total price, taxes, regional pricing, Apple App Store purchases, Google Play purchases, the Xsolla webshop, refunds, chargebacks, and entitlement delivery. This gate closes a narrower but important release risk: **fees that appear because of the consumer's payment method or checkout route**.

A payment processor's merchant fee, an app-store commission, an FX adjustment, a tax, an optional add-on, and a consumer-facing payment-method surcharge are not the same thing. The implementation must classify them before showing, charging, refunding, or disputing them.

This gate is implementation guidance. It does not replace mandatory consumer law, payment-services law, the TycoonX Terms of Service, Purchases & Refunds Policy, the transaction-specific Apple/Google/Xsolla terms, or a provider's legally controlling checkout.

## P0: classify every amount before charging it

For every amount above the advertised TycoonX product price, classify it as exactly one of the following or document why another category is needed:

1. product price;
2. mandatory tax or VAT component;
3. unavoidable general checkout/service charge;
4. payment-method-specific surcharge paid by the consumer;
5. merchant-side payment-processing/provider fee borne by CK-Labs or the merchant of record;
6. optional add-on expressly selected by the consumer;
7. currency conversion performed by the merchant/payment provider;
8. external bank/card-issuer/wallet FX or account fee not charged by CK-Labs or the contracting merchant; or
9. refund, reversal, dispute, or chargeback accounting item.

Do not label all of these as `fees` in the database or support tooling and then assume they have the same legal treatment.

A merchant-side fee deducted from CK-Labs' or the merchant's payout is **not automatically a fee that may be passed on to the consumer**. The existence of a provider API field or financial-report entry does not itself establish a legal basis to add that amount to the customer's total.

## 1. German BGB § 312a(4): consumer payment-method fees

Where German BGB § 312a(4) applies, an agreement requiring a consumer to pay a fee for using a particular payment method is ineffective if either:

- the consumer is not offered a **customary and reasonable payment method that is free of charge**; or
- the agreed fee exceeds the cost borne by the trader for use of that payment method.

This is a ceiling and availability rule. It is not permission to charge a fee merely because the trader can identify some internal processing cost.

Before a CK-Labs-controlled German checkout charges a consumer-facing payment-method fee, retain evidence showing:

- the exact payment method;
- whether BGB § 270a separately prohibits the surcharge;
- which customary and reasonable free payment method was actually available to the same consumer in the same checkout, where § 312a(4) requires one;
- the trader's actual cost basis for the payment method;
- the consumer-facing fee amount;
- the final total displayed before the payment obligation is created; and
- the merchant/contracting trader responsible for imposing the fee.

Do not justify a fee using broad business overhead, fraud losses, marketing cost, platform commission, developer commission, support cost, or desired margin if those amounts are not legally part of the cost that may be charged for use of that payment method.

## 2. German BGB § 270a: stronger surcharge prohibition for listed cashless methods

BGB § 270a contains a stronger rule for certain cashless payment methods.

An agreement requiring the debtor to pay a fee for use of:

- a SEPA Core Direct Debit;
- a SEPA Business-to-Business Direct Debit;
- a SEPA credit transfer; or
- a payment card in a consumer payment transaction where Chapter II of Regulation (EU) 2015/751 applies

is ineffective under the conditions stated in § 270a.

For TycoonX, the safe German checkout rule is: **do not add a CK-Labs consumer surcharge merely because the player selected an ordinary covered card, SEPA transfer, or SEPA direct debit**.

The Deutsche Bundesbank's current PSD2 consumer/merchant guidance likewise summarizes the surcharge prohibition as preventing extra consumer fees for card payments, transfers, or direct debits.

Do not overgeneralize § 270a to every payment instrument in the world. A wallet, carrier bill, voucher, cash-based alternative method, or other method may require a different classification. BGB § 312a(4), the Consumer Rights Directive, provider terms, and other applicable rules still need checking.

## 3. EU Consumer Rights Directive Article 19

Article 19 of Directive 2011/83/EU requires Member States to prohibit traders from charging consumers, for use of a given means of payment, fees exceeding the cost borne by the trader for use of that means.

For TycoonX this is a minimum cross-EU release principle, not a reason to ignore stricter national rules such as Germany's BGB § 270a.

The country-specific release check must therefore distinguish:

- the EU-level cost ceiling;
- any stricter national surcharge prohibition;
- which party is the trader/merchant imposing the fee; and
- which checkout interface actually presents and collects it.

## 4. Do not disguise a payment surcharge as another fee

Changing the label does not change the substance.

If a charge is imposed only because the consumer selected a specific payment method, calling it `service fee`, `handling fee`, `processing fee`, `convenience fee`, `payment service fee`, or `platform fee` does not automatically remove it from payment-method-fee rules.

Conversely, a genuine general service charge that applies independently of payment method is not automatically a payment-method surcharge. It still requires separate legal review and correct pre-contract price disclosure.

The implementation must compare the amount across payment methods. A fee that appears only for one payment method or varies because of the payment method must be flagged for surcharge review even if its UI label is generic.

## 5. Total-price and no-drip-pricing interaction

This gate works together with `TYCOONX_GERMAN_ECOMMERCE_CHECKOUT_RELEASE_GATE.md` and `TYCOONX_EU_PROMOTION_DARK_PATTERN_RELEASE_GATE.md`.

For a CK-Labs-controlled paid checkout:

- mandatory taxes and unavoidable charges must be disclosed as required before the consumer becomes bound;
- a payment-method fee must not appear only after the consumer has submitted the paid order;
- an optional paid extra must require the legally required express selection rather than a default/preselected option;
- the final total immediately before order confirmation must reconcile to the amount actually charged by the responsible merchant; and
- a marketing page must not call an incomplete amount the `final total` if an unavoidable charge will necessarily be added later.

Do not split one mandatory product price into an artificially low headline price plus a compulsory `payment fee` merely to make TycoonX look cheaper in marketing.

## 6. Apple App Store purchases

When Apple controls the In-App Purchase transaction, treat Apple's App Store commission and payment-processing fee as **developer/merchant economics**, not as an automatic authorization for CK-Labs to add a separate consumer payment-method surcharge on top of the App Store price.

Apple's current EU business documentation separately describes App Store commission and payment-processing fees that apply to developers under the applicable business terms. Those developer-facing fees must not be confused with an extra amount TycoonX may silently charge the player after the Apple purchase sheet confirms the storefront price.

For an Apple In-App Purchase:

- the authoritative completed transaction remains the Apple transaction at the storefront price Apple presents and confirms;
- CK-Labs must not debit extra Diamonds, create a second payment request, or charge a later `Apple fee` because Apple's developer commission or processing fee changed;
- an Apple fee change affects CK-Labs economics and potentially **future** configured prices, not the historical consumer transaction price; and
- any alternative-payment flow in an EU App Store context must be reviewed under the exact current Apple terms and the law applicable to the responsible merchant/interface.

Apple's August 18, 2026 EU terms update introduces further changes that take effect October 1, 2026. Re-check the exact Apple business/payment model before changing any consumer-facing fee or routing behavior around that date.

## 7. Google Play purchases

Google Play service fees and billing fees charged under the developer's Google Play commercial terms are likewise not automatically consumer payment-method surcharges.

For a Google Play Billing purchase:

- use the current user-eligible `ProductDetails`/offer information and Google-controlled purchase UI for the transaction;
- do not append a CK-Labs `Google fee`, `Play fee`, or payment-method fee after the Play purchase flow confirms the transaction;
- a change in Google's developer service-fee structure may justify reviewing future catalog prices but must not retroactively alter a completed purchase; and
- the TycoonX entitlement must reconcile to the authoritative verified Google transaction, not to the net amount CK-Labs receives after provider fees.

Google's current 2026 service-fee documentation distinguishes developer service fees and billing fees for transactions. That commercial cost structure is separate from the user's TycoonX entitlement quantity and must not cause a 500-Diamond purchase to deliver fewer Diamonds because the developer's net payout is lower.

## 8. Xsolla webshop

Xsolla requires special care because the transaction-specific Xsolla entity can act as merchant of record and the available payment methods can differ by country and method.

Current Xsolla payment webhook documentation can include financial fields such as `xsolla_fee` and `payment_method_fee`. **The existence of those merchant/payment accounting fields is not by itself proof that CK-Labs may impose the same amount as a consumer surcharge or that the consumer was charged that amount separately.**

For a German/EU TycoonX Xsolla checkout, retain dated evidence for representative payment methods showing:

- the merchant/entity shown to the consumer;
- product price, currency, taxes, and final amount;
- whether any consumer-facing fee varies by payment method;
- the payment method selected;
- the amount actually confirmed/charged;
- any Xsolla `payment_method_fee` or similar merchant-side financial field;
- the order/transaction identifier;
- the receipt/order confirmation; and
- the TycoonX entitlement granted.

If a provider-controlled Xsolla payment method presents a separate consumer fee, do not assume the fee is compliant merely because Pay Station rendered it. Identify the contracting trader, applicable country law, payment instrument, fee basis, and whether a free customary/reasonable method is available where required.

Xsolla's current Refund Policy states that the order price is quoted including applicable taxes at purchase and that the transaction-specific contract is formed on the documented order-confirmation path. Validate the actual TycoonX checkout rather than using policy text as proof that every local payment-method fee is correct.

## 9. Provider cost, consumer charge, and TycoonX entitlement must remain separate

For every successful purchase, preserve at least three separate values where applicable:

1. **consumer charged total** in the transaction currency;
2. **merchant/provider fee and settlement amount**; and
3. **TycoonX entitlement promised** by the purchased SKU/offer.

Do not calculate the number of Diamonds or VIP duration from CK-Labs' net payout after provider fees.

Example: if the consumer validly buys a 500-Diamond product and the provider deducts a merchant-side processing fee from settlement, the player still receives the 500 Diamonds. The processing fee is not a reason to grant 470 Diamonds.

The same isolation applies to one-time 30-Day VIP and Lifetime VIP. Merchant fees cannot shorten the 30-Day VIP clock or convert, expire, or partially revoke Lifetime VIP.

## 10. Refunds, reversals, and unlawful/invalid fee disputes

A transaction refund and a payment-method-fee dispute are related but not identical.

When a refund occurs:

- use the authoritative Apple, Google, Xsolla, or other merchant/provider route applicable to the transaction;
- preserve the original transaction price, currency, tax, fee, and entitlement evidence;
- do not invent a new current exchange rate or current catalog price as the historical purchase amount;
- do not withhold an otherwise required refund merely because CK-Labs paid a provider fee; and
- do not remove unrelated legitimately purchased Diamonds, active 30-Day VIP, or valid Lifetime VIP.

If a consumer challenges a payment-method fee as unlawful or incorrectly disclosed, do not automatically treat that challenge as chargeback abuse or fraud. Investigate the fee and the underlying product transaction separately.

Xsolla's current refund documentation notes that refund calculations use fees and exchange rates from the original payment. That provider accounting rule must still be reconciled with any mandatory consumer repayment rights that apply to the actual transaction.

## 11. External bank, issuer, wallet, and FX charges

A consumer's own bank, card issuer, wallet provider, telecom carrier, or other external payment service may impose an account, FX, cross-border, cash-advance, or similar charge that CK-Labs and the contracting merchant do not collect.

Do not record such an independent external charge as TycoonX revenue or a TycoonX payment-method surcharge merely because it appears on the player's bank statement.

Support should distinguish:

- amount charged by the contracting merchant;
- merchant/provider transaction currency;
- any merchant-controlled conversion;
- any separately disclosed provider charge; and
- any independent issuer/bank fee outside the merchant's control.

If CK-Labs or its contracting merchant selects or controls a currency-conversion charge, it cannot be reclassified as an unrelated bank fee simply to avoid disclosure or payment-fee rules.

## 12. Promotions, regional pricing, and payment methods

A genuine regional price or promotion may differ by country, storefront, channel, currency, or sale window. That is separate from charging the same consumer more solely because of a selected payment method.

Do not use a payment-method fee to defeat a genuine promotion. For example, advertising `Lifetime VIP €19.99 total` and then necessarily adding a €2 card fee at the final step is not consistent with a claim that €19.99 was the consumer's final total.

A payment-method mismatch, card-country mismatch, VPN, travel, or IP-country mismatch is not automatically fraud. Apply the regional-pricing and account-compromise gates before taking punitive action.

If a payment method is genuinely unavailable in a country or for a provider, that availability restriction can be disclosed. Do not invent an extra fee as a substitute for an availability restriction that the merchant/provider does not support.

## 13. Failed, pending, duplicate, and reversed payments

A payment-method fee must never create entitlement before the underlying purchase is authoritative and successful.

- `Pending` is not paid.
- A declined payment must not grant Diamonds or VIP merely because a separate fee authorization appeared.
- A duplicate provider event must not duplicate the purchased entitlement or a fee.
- A reversed/refunded transaction may trigger transaction-specific entitlement correction where lawful, but not unrelated-value confiscation.
- A payment-method fee discrepancy must not be repaired by silently charging the difference on a future TycoonX purchase.

If provider records disagree about the product total versus the fee breakdown, freeze the risky reconciliation write and investigate instead of guessing which amount represents the actual completed consumer transaction.

## 14. Payment-provider migration

Replacing Xsolla, changing Apple/Google payment options, or adding another future provider does not rewrite historical transactions.

Historical records should preserve:

- original merchant/provider;
- payment method where available and necessary;
- product/SKU;
- final consumer total;
- currency;
- taxes;
- consumer-facing fee if one existed;
- merchant-side provider fees where relevant to accounting;
- refund/reversal state; and
- delivered TycoonX entitlement.

Do not migrate historical merchant-side fees into a new provider's fee model and then use the difference to alter prior customer entitlements.

## 15. Release test matrix

Before enabling or materially changing payment methods for German/EU consumers, test at least:

1. covered consumer card with no CK-Labs surcharge;
2. SEPA transfer with no CK-Labs surcharge where § 270a applies;
3. SEPA direct debit with no CK-Labs surcharge where § 270a applies;
4. payment method that has higher merchant cost but the same consumer total;
5. any payment method for which the provider presents a separate consumer fee;
6. checkout with a genuine free customary/reasonable method and another fee-bearing method, where legally relevant;
7. fee amount greater than documented merchant cost, which must fail review where § 312a(4) applies;
8. hidden fee appearing only after an earlier `final total`, which must fail review;
9. Apple IAP after a developer commission/processing-fee change;
10. Google Play purchase after a developer service-fee change;
11. Xsolla payment where webhook contains `payment_method_fee` but consumer-facing total does not show a separate payment surcharge;
12. Xsolla payment where the consumer-facing fee varies by payment method;
13. refund after a provider/merchant fee was deducted from settlement;
14. account/card-country mismatch without independent fraud evidence;
15. 500-Diamond purchase where provider net settlement is less than gross consumer payment;
16. active 30-Day VIP purchased through a higher-cost payment channel;
17. Lifetime VIP purchased during a genuine limited sales window through different supported payment methods; and
18. provider migration while old transactions remain refundable or disputable.

## 16. Evidence and support requirements

For a disputed payment-method fee, support should be able to retrieve or escalate for:

- transaction/provider ID;
- merchant of record;
- payment method category;
- transaction-time final total and currency;
- tax amount or tax-inclusive status where available;
- consumer-facing fee label and amount;
- screenshot/reproducible checkout evidence where retained lawfully;
- merchant/provider fee record;
- entitlement delivered;
- refund/reversal/chargeback state; and
- applicable country/storefront.

Do not require the player to provide a full card number, CVV, password, authentication backup code, or other unnecessary secret to investigate a fee.

## 17. Regression rules

Never weaken this gate to say that:

- any provider processing fee may automatically be passed to the consumer;
- a fee becomes lawful because it is called a `service fee`;
- Germany permits card/SEPA surcharges whenever the fee equals CK-Labs' cost;
- a provider webhook field named `payment_method_fee` proves the consumer lawfully owes that fee;
- Apple's or Google's developer commission may be deducted from purchased Diamonds or VIP duration;
- a provider's net payout is the authoritative quantity of the TycoonX entitlement;
- an unlawful or disputed surcharge proves chargeback fraud;
- a mandatory fee may be hidden until after the payment obligation;
- a historical purchase may be repriced because provider fees changed later; or
- any payment-fee clause waives a mandatory refund, withdrawal, conformity, price-reduction, termination, liability, or other consumer right.

## Current legal/platform checkpoint

Reviewed against law and official/current guidance available on **September 1, 2026**, including:

- German BGB § 312a(4), consumer payment-method fee limits;
- German BGB § 270a, agreements on fees for certain cashless payment methods;
- Directive 2011/83/EU Article 19, fees for use of means of payment;
- the Deutsche Bundesbank's PSD2 guidance summarizing the surcharge prohibition for consumer card payments, transfers, and direct debits;
- current Apple EU/App Store documentation distinguishing developer commissions and payment-processing fees from the customer-facing purchase transaction;
- current Google Play documentation on developer service/billing fees and current Play Billing product information;
- current Xsolla payment-webhook documentation, including `xsolla_fee` and `payment_method_fee` financial fields; and
- current Xsolla Refund Policy and refund documentation.

These laws, platform rules, provider products, and commercial terms can change. Re-check them before introducing a new consumer-facing payment-method fee or materially changing the payment stack.

## Founder-protective interpretation

This gate does **not** require CK-Labs to absorb every possible bank, wallet, FX, carrier, or provider charge in every country. It does not require TycoonX to accept every payment method. It does not promise identical merchant economics across Apple, Google Play, Xsolla, countries, or payment methods.

It protects CK-Labs by keeping the legal categories clean: the consumer pays the lawfully disclosed transaction total, the provider/merchant fee remains separately auditable, and TycoonX delivers the exact purchased entitlement. CK-Labs can choose future prices and supported payment methods lawfully without using hidden or prohibited payment surcharges to repair provider economics after checkout.
