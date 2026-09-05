# TycoonX German Checkout / Order-Button Release Gate

Last reviewed: **September 5, 2026**.

TycoonX went to full release on **September 1, 2026**. This document is an operational release/compliance gate for Germany-facing paid purchase journeys. It does not replace the canonical English TycoonX Terms of Service or Purchases & Refunds Policy and does not waive any mandatory consumer rights.

## Why this gate exists

German electronic-commerce law contains a strict final-order-step rule for consumer purchases. For a paid electronic-commerce contract, the consumer must be shown the legally required key information immediately before ordering, and the ordering action itself must expressly and unambiguously communicate that clicking it creates a payment obligation.

Under **BGB § 312j(3)**, if the consumer places the order by activating a button, that button must be easily legible and contain nothing other than `zahlungspflichtig bestellen` or a corresponding unambiguous formulation. Under **BGB § 312j(4)**, the contract is formed only if the § 312j(3) requirement is satisfied.

This is not merely a wording preference. It is a contract-formation release gate.

## Current German legal baseline

### BGB § 312i: electronic-commerce process duties

For an electronic-commerce contract covered by § 312i, the trader must provide, among other things:

- appropriate, effective and accessible technical means to identify and correct input errors before the order is submitted;
- the information required by Article 246c EGBGB in time before ordering;
- an electronic confirmation of receipt of the order without undue delay; and
- a way to retrieve and save the contractual terms, including the applicable terms and conditions, at the time of contracting.

### BGB § 312j: consumer paid-order duties

For Germany-facing consumer checkout:

1. At the beginning of the ordering process, the website must clearly state relevant delivery restrictions and accepted payment methods where § 312j(1) applies.
2. Immediately before the consumer submits a paid order, the trader must clearly, understandably and prominently provide the information referenced by § 312j(2), including the relevant product/service characteristics and price information.
3. The final ordering action must expressly confirm the payment obligation.
4. If a button is used, the legal effect must be clear from the **button text itself**.
5. If § 312j(3) is not satisfied, § 312j(4) provides that the contract is not formed through that order flow.

### Information that matters immediately before the order

BGB § 312j(2) incorporates Article 246a § 1(1) sentence 1 numbers 1, 5 to 8, 14 and 15 EGBGB. Depending on the product, that includes:

- the essential characteristics of the paid product or service;
- the **total price including taxes and charges**;
- where applicable, that a displayed price was personalized on the basis of automated decision-making;
- additional costs where applicable;
- for subscriptions or indefinite-duration products, the relevant recurring total-price information;
- where applicable, contract duration / cancellation conditions; and
- where applicable, the minimum duration of the consumer's obligations.

TycoonX does not currently treat 30-Day VIP or Lifetime VIP as recurring subscriptions. They must not be displayed as recurring products merely to fit a generic checkout template.

## Current case-law checkpoint

### CJEU C-249/21, Fuhrmann-2

The Court of Justice held that, when assessing whether the final button adequately communicates the payment obligation, the decisive wording is the wording **on the button or equivalent function itself**. Surrounding checkout text cannot cure an ambiguous final button.

For TycoonX this means a German checkout should not rely on nearby price text to rescue a vague final CTA such as:

- `Continue`;
- `Confirm`;
- `Finish`;
- `Get now`;
- `Redeem` where real money will be charged;
- `Complete`;
- `Place order` if the German wording used is not unambiguously understood as creating a payment obligation; or
- a generic icon-only confirmation.

A safe implementation must use wording that unambiguously conveys the payment obligation in the language actually shown to that consumer.

### BGH X ZR 81/23, June 4, 2024

The German Federal Court of Justice held that, where a single order flow concludes multiple paid contracts or covers multiple independent paid services, the order screen containing the final button must make clear which paid services the consumer is committing to. A single final button can be used, but the consumer must be able to understand the full payment commitment from the final ordering screen.

TycoonX must therefore not silently bundle a paid Diamond package with an additional paid service, VIP product, donation, support product or other charge unless the final screen clearly identifies every paid component and the total commitment.

### BGH I ZR 159/24, October 9, 2025

The Federal Court of Justice confirmed that non-compliance with § 312j(3) / (4) can make the electronic contract **finally ineffective**, not merely temporarily pending. A later user action cannot be treated as an easy workaround for a defective order button. Any later fresh contract formation still has to satisfy the relevant consumer-protection requirements.

Operational rule: do not try to "repair" an invalid checkout after the fact by pointing to gameplay use, login activity, support messages, delivery of Diamonds, VIP activation, or other later conduct.

## TycoonX product-specific order-step requirements

### Purchased Diamonds

Immediately before the order is placed, the Germany-facing purchase flow must make clear at minimum:

- the Diamond quantity being purchased;
- the final real-money price and currency;
- required taxes/charges as legally applicable;
- the relevant merchant/payment channel;
- that this is a one-time purchase and not a recurring subscription; and
- the final paid-order action through which the consumer becomes obligated to pay.

Purchased Diamonds do not expire solely because time passes.

The order-button rule must not be abused to characterize purchased Diamonds as immediately supplied digital content merely to remove an otherwise applicable statutory withdrawal right. The canonical TycoonX withdrawal treatment remains controlling.

### 30-Day VIP

30-Day VIP remains a **one-time, non-renewing 30-day entitlement**.

The final order screen must not imply:

- automatic monthly renewal;
- an indefinite subscription;
- a hidden recurring charge;
- that the 30 days restart after reinstall, restoration or support contact; or
- that a later price increase applies retroactively to the completed purchase.

If a generic store template uses subscription language around 30-Day VIP, release must be blocked until the display is corrected.

### Lifetime VIP

Lifetime VIP remains a **limited-time promotional one-time entitlement** offered only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase.

Immediately before a Lifetime VIP order, the flow must show the actual current purchase price and must not misrepresent:

- a recurring fee where none exists;
- a fake renewal date;
- a false permanent availability promise;
- a fake countdown or fake scarcity claim;
- a reference price that is not lawfully supportable; or
- a different paid product as though it were the same Lifetime VIP entitlement.

Different genuine Lifetime VIP sales windows may use different future prices. A completed purchase is not retroactively repriced merely because a later window has a different price, except where mandatory law requires a remedy.

## Apple App Store purchase flow

Apple can control the final StoreKit/App Store purchase confirmation and can be the contracting/payment channel for the App Store purchase.

Release rules:

- Do not assume that a TycoonX-controlled `Buy` button is the legally decisive order button if it merely launches Apple's own final purchase sheet and does not itself conclude the paid contract.
- Preserve Apple's provider-owned final price / product confirmation where Apple controls it.
- The TycoonX-controlled pre-purchase screen must still accurately describe the product being offered and must not contradict the provider-owned final confirmation.
- Do not place misleading TycoonX UI over or around the Apple confirmation that obscures the total price, one-time status or product identity.
- If a future Apple configuration causes a TycoonX-controlled web page or TycoonX-controlled button itself to conclude the paid contract, classify that interface independently under the applicable German electronic-commerce rules.
- A StoreKit success callback is not itself a substitute for contract-formation evidence. Preserve the authoritative Apple transaction record and reconcile entitlement delivery exactly once.

## Google Play purchase flow

Google can control the final Play Billing confirmation and can be the contracting/payment channel for a Google Play purchase.

Release rules mirror the Apple separation:

- A TycoonX `Buy` CTA that only launches the Google Play purchase UI is not automatically the same thing as the legally decisive final order button.
- Preserve the Google-controlled final product/price confirmation where Google owns that step.
- TycoonX product copy must match the actual Play product, one-time/recurring status and current localized price.
- Do not hide, cover or contradict the Google purchase sheet.
- If TycoonX routes a German user to an approved external-payment or alternative-payment flow, classify that external flow and its final paid-order action separately. Do not assume that Play's compliant native UI cures a later non-compliant Xsolla/web checkout.
- A Google billing success signal is not itself a substitute for authoritative purchase-token/order reconciliation and idempotent entitlement delivery.

## CK-Labs TycoonX webshop using Xsolla

The Xsolla webshop is the highest-risk surface for this gate because the purchase may occur through a browser-based checkout rather than through a provider-native app-store sheet.

Before enabling a Germany-facing Xsolla checkout, preserve a dated production evidence packet showing:

- the actual product/SKU and entitlement quantity;
- the actual language shown to the consumer;
- the merchant identity shown to the consumer;
- the final total price, currency and tax/fee presentation;
- the exact final order/payment button wording;
- the immediately preceding product/price/duration information visible on the same final ordering step;
- the accepted payment method selected;
- the order/transaction confirmation;
- the applicable withdrawal/refund route;
- the Xsolla transaction/order identifier; and
- the resulting TycoonX entitlement-ledger action.

Do not assume `Xsolla is Merchant of Record` by itself proves German § 312j compliance. The actual consumer-facing interface and the actual contracting structure control the analysis.

If Xsolla owns the final payment UI, CK-Labs should preserve evidence of that provider-owned step and should not replace or obscure it with a TycoonX-controlled ambiguous confirmation.

If a TycoonX-controlled button itself creates the paid order before Xsolla shows another screen, that TycoonX-controlled step must be classified carefully rather than casually labelled `pre-checkout`.

## Checkout button localization

The brand remains exactly **TycoonX** in displayed prose, but the paid-order CTA should be naturally localized to the checkout language while preserving the legally required meaning.

For German consumers, `zahlungspflichtig bestellen` is the statutory model wording. An alternative should be used only where it is genuinely just as unambiguous about the payment obligation.

Do not translate a compliant German payment CTA word-for-word into every other market and assume legal equivalence. Each market can have its own mandatory language / consumer-contract rules.

## No dark-pattern workaround

Do not weaken the payment-obligation message through visual design.

Release-blocking examples include:

- tiny price-obligation text while the main final button says only `Continue`;
- an icon-only final payment control;
- showing the final price only after the click;
- hiding a second paid product below a collapsed element;
- preselecting an extra paid product without clear disclosure;
- using a countdown or animation that pressures the player before the price information can reasonably be read;
- making `Cancel` much harder to use while an ambiguous positive CTA triggers payment;
- allowing a stale client to submit an old price or old SKU while the visible checkout shows a different offer; or
- relying on Terms text several screens earlier to cure an unclear final order action.

## Pricing and promotion invariants

This gate must operate together with the TycoonX pricing/promotion release gates.

CK-Labs may lawfully change future prices, Diamond bundle pricing/content, VIP prices, regional prices, currencies and future promotions for **future purchases**, subject to applicable law and truthful presentation.

For completed one-time purchases:

- the final total price shown before confirmation governs that completed transaction, subject to mandatory law and actual authoritative transaction records;
- a later price decrease does not automatically create a refund, credit or price-match right unless mandatory law requires one;
- a later increase does not create an additional charge on an already completed one-time purchase;
- Lifetime VIP can have different prices in different genuine sales windows;
- price, tax, VAT and FX changes must not be presented as though the already completed purchase were being retroactively repriced; and
- obvious pricing/catalog/configuration errors must be handled under the dedicated pricing-error rules, not by silently changing the amount after the user has submitted the order.

## Failed, pending, reversed and duplicated payments

A valid paid-order UI does not itself prove that payment succeeded.

Entitlement delivery must still reconcile against authoritative Apple, Google or Xsolla/payment records.

- Failed payment: do not grant paid entitlement merely because the consumer reached the final button.
- Pending payment: do not misrepresent the entitlement as fully paid before the provider reports an authoritative paid state.
- Reversed/refunded/charged-back payment: handle transaction-specific entitlement correction under the applicable refund/chargeback rules and mandatory consumer rights.
- Duplicate callback: do not grant the same Diamonds or VIP twice.
- Duplicate accidental grant: correct only the duplicate/unsupported value with a durable audit trail; do not remove unrelated legitimate purchases.
- Provider outage: keep the order/payment state pending or recoverable rather than guessing success or failure.

## Account compromise, fraud and regional-pricing abuse

A checkout formatting defect is not evidence of player misconduct.

Do not classify a consumer as a hacker, fraudster, chargeback abuser or regional-pricing abuser merely because:

- a checkout failed;
- the user disputes whether a contract formed;
- the order button was ambiguous;
- a provider displayed a wrong localized price;
- a transaction is pending;
- the consumer invokes statutory withdrawal or conformity rights; or
- the consumer challenges a duplicate charge.

Fraud, account compromise, exploit abuse, chargeback abuse and regional-pricing abuse require independent evidence.

## Old/unsupported app versions

An old TycoonX client must not be able to bypass a new legally required paid-order gate or submit an obsolete product/price combination that contradicts the current checkout.

Where a mandatory checkout fix is required, CK-Labs may require a lawful and proportionate app update, disable the affected paid flow on unsupported versions, or route the user to a compliant provider flow. This must not be used to erase already purchased legitimate entitlements.

## Provider outages and provider replacement

If Apple, Google Play, Xsolla, authentication, pricing, tax or checkout infrastructure is unavailable:

- fail closed for new paid orders where the final price or payment obligation cannot be reliably shown;
- do not charge based on cached or guessed prices;
- preserve recoverable pending state where technically appropriate;
- continue to restore/reconcile legitimate existing entitlements from authoritative records where possible; and
- keep mandatory consumer remedies intact.

Replacing Apple/Google/Xsolla or another provider in the future does not permit CK-Labs to treat old legitimate purchases as new purchases or to replay their paid-order events.

## Business sale, merger, reorganization or successor operator

A successor operator may continue TycoonX subject to applicable law and valid transfer arrangements, but the change does not erase the need to preserve transaction provenance.

The successor must be able to distinguish:

- historical Apple purchases;
- historical Google Play purchases;
- historical Xsolla/webshop purchases;
- migrated entitlements;
- free/promotional/test grants; and
- later new purchases.

Migration must not duplicate Diamonds, restart 30-Day VIP, add an expiry to legitimate Lifetime VIP, or reopen an old Lifetime VIP sale window.

## Permanent service discontinuation

A lawful permanent shutdown does not retroactively validate a defective order flow and does not waive non-waivable consumer remedies.

Before taking new paid orders during a planned shutdown period, CK-Labs must review whether the product description, expected service period, updates/conformity obligations and shutdown disclosure remain accurate and lawful.

Do not sell a new paid entitlement through a normal-looking checkout where CK-Labs already knows the material service will be permanently discontinued in a way that makes the offer misleading or non-conforming.

## Mandatory EU/German rights remain intact

Nothing in this gate or in the TycoonX Terms is intended to waive non-waivable rights relating to, as applicable:

- contract formation;
- withdrawal;
- conformity of digital products/services;
- cure;
- price reduction;
- termination;
- refund;
- updates;
- damages/liability;
- unfair commercial practices;
- transparency; or
- other mandatory German/EU consumer protections.

A technically successful payment does not allow CK-Labs to assert that the user waived a mandatory right simply by clicking an ambiguous or legally defective control.

## Production evidence model

For every Germany-facing paid SKU or offer type, preserve a dated sample of:

`market -> language -> product/SKU -> entitlement -> one-time/recurring classification -> merchant -> platform/channel -> visible product characteristics -> visible final total price/tax/currency -> final order-button wording -> provider confirmation -> authoritative transaction identifier -> entitlement-ledger action -> refund/withdrawal route`

For Lifetime VIP also preserve:

`sales-window start/end -> price/reference-price basis -> countdown/scarcity evidence -> final CTA -> authoritative completed transaction`

## Regression scenarios

1. **German Xsolla Diamond purchase:** final screen shows exact Diamond quantity, total price and a clearly payment-obligating final button before the consumer orders.
2. **Ambiguous Xsolla CTA:** final button says only `Continue`; release fails even though the price appears above it.
3. **Icon-only payment:** final purchase can be triggered through an unlabeled icon; release fails.
4. **30-Day VIP:** checkout clearly states one-time/non-renewing 30-day entitlement and does not show monthly renewal language.
5. **Lifetime VIP:** checkout clearly identifies one-time Lifetime VIP at the current genuine sales-window price without fake recurring wording.
6. **Apple native purchase:** TycoonX product copy matches the product and price while Apple owns the final purchase confirmation.
7. **Google native purchase:** TycoonX product copy matches Play while Google owns the final purchase confirmation.
8. **External-payment switch:** native Play/App Store compliance is not reused as proof for a separate Xsolla/web flow.
9. **Bundled paid products:** final order screen identifies every paid component and the complete price commitment.
10. **Failed payment:** user clicks a valid final CTA but provider returns failure; no paid entitlement is granted.
11. **Pending payment:** no duplicate grant occurs while provider status remains pending.
12. **Duplicate callback:** one completed order creates exactly one entitlement grant.
13. **Wrong displayed price:** UI says EUR 4.99 but provider intends EUR 5.99; paid flow is blocked until reconciled rather than silently charging EUR 5.99.
14. **Old client:** obsolete app cannot submit a retired SKU/price without a compliant current final confirmation.
15. **Withdrawal dispute:** consumer challenges the purchase; support does not classify that challenge as fraud or entitlement abuse without independent evidence.
16. **Provider outage:** checkout cannot confirm authoritative total price; new paid order is disabled rather than charged from stale cache.
17. **Business transfer:** migrated legitimate purchases remain historical entitlements and are not replayed as new orders.
18. **Permanent shutdown:** CK-Labs does not continue a normal paid sales flow using materially misleading service-availability assumptions.

## Release checklist

- [ ] Germany-facing paid flows are mapped by actual contracting/payment channel.
- [ ] Each final paid-order step has been identified: TycoonX-controlled, Apple-controlled, Google-controlled, Xsolla-controlled or another provider-controlled step.
- [ ] Every TycoonX/Xsolla Germany-facing final paid-order button is reviewed under **BGB § 312j(3)**.
- [ ] Ambiguous CTA wording is rejected even where nearby text mentions the price.
- [ ] The final screen shows the relevant § 312j(2) / Article 246a information immediately before ordering.
- [ ] Input errors can be identified/corrected before submission where § 312i applies.
- [ ] Order receipt is confirmed electronically without undue delay where required.
- [ ] Applicable contractual terms can be retrieved/saved at contract formation where required.
- [ ] Purchased Diamonds are clearly one-time and preserve the canonical withdrawal treatment.
- [ ] 30-Day VIP is clearly one-time, non-renewing and 30 days.
- [ ] Lifetime VIP is clearly one-time, limited-window promotional, may be withdrawn from future sale and may never return.
- [ ] Future price changes are not retroactively applied to completed one-time purchases.
- [ ] Apple, Google and Xsolla responsibilities are separated from CK-Labs entitlement-delivery responsibilities.
- [ ] Failed/pending/reversed/duplicate payment paths remain idempotent.
- [ ] A checkout dispute is not treated as fraud/account abuse without independent evidence.
- [ ] Unsupported app versions cannot bypass required paid-order controls.
- [ ] Provider outages fail closed for new paid orders where price/contract state is uncertain.
- [ ] Evidence screenshots/logs are retained for at least one live Germany-facing sample per paid product/channel configuration.

## Official / primary references

- German Civil Code, **BGB § 312i**: https://www.gesetze-im-internet.de/bgb/__312i.html
- German Civil Code, **BGB § 312j**: https://www.gesetze-im-internet.de/bgb/__312j.html
- EGBGB, **Article 246a § 1**: https://www.gesetze-im-internet.de/bgbeg/art_246a__1.html
- Court of Justice of the European Union, **C-249/21, Fuhrmann-2**, April 7, 2022: https://curia.europa.eu/juris/liste.jsf?num=C-249/21
- German Federal Court of Justice, **X ZR 81/23**, June 4, 2024: https://juris.bundesgerichtshof.de/cgi-bin/rechtsprechung/document.py?Gericht=bgh&Art=en&nr=138189
- German Federal Court of Justice, **I ZR 159/24**, October 9, 2025: https://juris.bundesgerichtshof.de/cgi-bin/rechtsprechung/document.py?Gericht=bgh&Art=en&nr=143483
- Xsolla current catalog/order documentation: https://developers.xsolla.com/api/catalog/order

## Canonical-language impact

**Canonical-language impact: none in this run.**

The current public English TycoonX Terms / Purchases framework already preserves product identity, transaction-channel roles, price and mandatory-rights concepts. This gate adds a Germany-specific checkout implementation/contract-formation control. Because the canonical English legal meaning did not materially change, no localized Terms, Purchases & Refunds, Privacy or Community Standards page is reopened by this file alone.
