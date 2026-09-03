# TycoonX German BGB § 312j Order Button & Checkout Release Gate

Review date: **September 3, 2026**

TycoonX went to full release on **September 1, 2026**. This gate is for the live TycoonX service and its German consumer checkout flows. It supplements, and does not replace, the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, mandatory consumer law, or the transaction-specific Apple, Google Play, and Xsolla rules.

## Why this gate exists

German BGB § 312j contains a strict online-order rule for consumer contracts in electronic commerce that create a payment obligation. It is separate from the German withdrawal function under BGB § 356a and the cancellation-button rules under BGB § 312k.

The important consequence is unusually strong: under **BGB § 312j(4)**, a covered contract comes into existence only if the trader complies with the payment-confirmation requirement in § 312j(3). A compliant legal policy cannot repair a defective final order screen after the fact.

This is a production-interface gate. It applies to the actual German web checkout used for TycoonX purchases, including a CK-Labs/Xsolla web purchase route where the statutory conditions are met. The current `contact-form-app` repository does not appear to contain the live TycoonX/Xsolla commerce implementation, so static legal QA here is not evidence that the live checkout is compliant.

## Current legal baseline

As of September 3, 2026, BGB § 312j requires, for a covered consumer contract in electronic commerce that obliges the consumer to pay:

- at the beginning of the ordering process, clear information about delivery restrictions and accepted payment methods where § 312j(1) applies;
- immediately before the consumer submits the order, the information referenced by § 312j(2) must be provided clearly, understandably, and in a highlighted manner;
- the ordering situation must be designed so the consumer expressly confirms that the order creates a payment obligation;
- if the order is placed by clicking a button, that button must be easily legible and labelled with **nothing other than** `zahlungspflichtig bestellen` or an equally unambiguous formulation indicating the payment obligation; and
- a contract covered by § 312j(2) comes into existence only if the § 312j(3) payment-confirmation requirement is satisfied.

For the current version of § 312j(2), the highlighted pre-order information cross-refers to Article 246a § 1(1) sentence 1 numbers 1, 5 to 7, 8, 14 and 15 EGBGB. In practical TycoonX terms, the final order screen must make the paid product and final financial obligation intelligible, including the product's essential characteristics, total price including taxes and charges, any additional costs, any applicable personalized-price disclosure, and the relevant duration/minimum commitment information where those items apply.

Do not use Terms, a footer, a tooltip, a support article, an earlier catalog page, or a hidden accordion as a substitute for information that the statute requires immediately before the order.

## P0 German final-order-screen rule

For a covered German web checkout, the final screen immediately before the order must make the following clear enough that the player can understand exactly what payment obligation the click creates:

1. the exact TycoonX product being purchased;
2. the final real-money price and currency;
3. mandatory taxes and charges as required by law, or a final total that already includes them;
4. whether the product is one-time, time-limited, recurring, or otherwise continuing;
5. the material quantity or entitlement delivered;
6. any minimum duration or continuing commitment that is legally relevant;
7. any additional paid item or independent paid contract created by the same click; and
8. any legally required personalized-price disclosure if automated individualized pricing is actually used.

The order button itself must remain unambiguous about the payment obligation. For the German CK-Labs-controlled flow, the safest default wording is **`zahlungspflichtig bestellen`**. If Xsolla or another contracting merchant uses a different German formulation, do not assume it is valid merely because it says `Weiter`, `Bestätigen`, `Abschließen`, `Submit`, `Continue`, `Claim`, `Activate`, `Start`, or another neutral action. The alternative must unambiguously communicate that the click creates a payment obligation.

A button such as `Jetzt kaufen` can be sufficiently clear in some contexts, but CK-Labs must not generalize one judgment into a rule that every `Buy now`-style label is automatically compliant in every TycoonX flow. The surrounding contract structure, the screen and the services being ordered still matter.

## CJEU: only the button wording cures the payment-label duty

The Court of Justice held in **C-249/21, Fuhrmann-2 (April 7, 2022)** that, when deciding whether a button uses a formulation equivalent to `order with obligation to pay`, only the wording on the button or similar function itself is relevant.

Operational rule:

- an earlier sentence such as `you will be charged` does not cure an ambiguous final button;
- a Terms checkbox does not cure an ambiguous final button;
- a price displayed elsewhere on the page does not turn `Continue` or `Complete` into a payment-obligation label; and
- do not rely on color, an icon, a cart symbol, a lock symbol, or placement alone to communicate the payment obligation.

## CJEU: conditional payment obligations still need the rule

In **C-400/22, Conny (May 30, 2024)**, the Court of Justice confirmed that Article 8(2) of the Consumer Rights Directive can apply where the consumer's payment obligation is conditional on a future event rather than unconditional at the instant of ordering.

For TycoonX, do not try to escape the order-button rule through a future design such as:

- `pay only if X happens`;
- a success-fee or contingent-fee style digital service;
- a deferred charge that becomes payable later if a condition is met;
- a free or discounted initial phase that converts into a paid obligation; or
- a future recurring product whose first charge occurs later.

If the ordering action legally creates the relevant payment obligation, classify the checkout under the rule rather than assuming `no immediate charge` means `no § 312j issue`.

## BGH X ZR 81/23: one click creating several paid contracts

The Bundesgerichtshof held on **June 4, 2024, X ZR 81/23** that the screen containing the order button must allow the consumer to see which services create a payment obligation. If one ordering process concludes contracts for several services that are in principle independently provided, the order screen must clearly indicate that clicking the button submits a declaration aimed at concluding all of those contracts.

Apply this to TycoonX whenever a single checkout action could create more than one independently relevant paid obligation, for example:

- a Diamond pack plus a separately priced VIP product;
- a future paid membership plus a separate digital item;
- a paid product plus a separately priced third-party service;
- a promotional bundle that is implemented as more than one independent contract; or
- any Xsolla/payment-provider add-on that itself creates a separate paid contract.

Do not hide the second paid obligation in an earlier step, collapsed panel, preselected add-on, trial text, tooltip, or Terms link.

A genuine free bonus included in the one paid product does not need to be misdescribed as a second paid contract. The implementation must reflect the real legal/commercial structure rather than inventing complexity.

## BGH I ZR 159/24: defective order flow is not a harmless technicality

In **BGH I ZR 159/24, judgment of October 9, 2025**, the Court treated a contract that failed the § 312j(3) requirement as definitively ineffective under § 312j(4), not merely pending. The Court also held that a later confirmation intended to recreate the contract must itself respect the § 312j payment-confirmation protection so that the rule cannot be circumvented.

Operational rule:

- do not grant paid value on the theory that `the consumer obviously meant to buy` if the legally relevant contract was not formed;
- do not try to repair a defective payment button using a later generic email, support message, gameplay use, login, or `accept updated terms` prompt;
- do not auto-convert a failed contract-formation case into account debt;
- do not invent a chargeback or fraud marker merely because entitlement delivery already occurred before the defect was discovered; and
- escalate a real § 312j formation defect for transaction-specific legal/refund/entitlement handling.

## Product-specific checkout requirements

### Diamonds

For a normal one-time Diamond purchase:

- show the exact paid Diamond quantity and any genuine bonus quantity clearly;
- show the final real-money price/currency and mandatory tax treatment as required;
- do not make the player calculate the price from a virtual-currency conversion layer at the final order stage;
- do not hide a paid add-on behind a preselected checkbox;
- do not label the final payment action merely `Get Diamonds`, `Activate`, `Continue`, or `Confirm` if that wording does not unambiguously communicate the real-money payment obligation;
- a completed purchase is not retroactively repriced because a later Diamond bundle is cheaper or larger, except where mandatory law requires otherwise; and
- a later higher price does not create an additional charge on the completed purchase.

A Diamond pack is not a recurring contract merely because the player can spend Diamonds later.

### One-time 30-Day VIP

The 30-Day VIP product remains a **one-time, non-renewing 30-day entitlement** unless CK-Labs deliberately introduces a different product in the future.

Immediately before a covered German web order, make clear:

- `30-Day VIP`;
- the final price and currency;
- that payment is one-time;
- that the entitlement lasts 30 days;
- that it does not automatically renew; and
- when the paid period begins if activation is not immediate.

Do not allow the checkout UI, Xsolla product title, coupon copy, or final button to make the one-time 30-Day VIP look like a recurring subscription.

### Lifetime VIP

Lifetime VIP remains a **one-time entitlement offered only during selected genuine promotional sales windows**. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability.

The final covered German web order must make clear:

- `Lifetime VIP`;
- the final one-time price and currency;
- that the purchase is not a recurring subscription;
- the material entitlement being bought;
- the applicable service-lifetime meaning used by the canonical TycoonX legal documents; and
- any genuine promotion or sales-window condition that is materially relevant to the purchase decision.

A later Lifetime VIP sales window may use a different genuine price. A later lower price does not automatically create a refund, credit, price match, or retroactive repricing right, subject to mandatory law. A later higher price does not create an extra charge on an already completed purchase.

A countdown, crossed-out price, scarcity statement or `last chance` claim must remain genuine and must not be used to distract from or visually overpower the statutory final-order information.

## Promotions, coupons and regional pricing

The order-button rule does not authorize misleading pricing.

For the final covered German order:

- show the actual final total after a valid coupon or promotion;
- do not display an expired or ineligible coupon as though it will reduce the completed purchase;
- do not add a fee after the player activates the final order control unless mandatory law and the actual payment method transparently allow that treatment;
- keep ordinary country/storefront/currency pricing distinct from automated individualized price personalization;
- where price personalization based on automated decision-making is legally present, preserve the required disclosure;
- do not use region abuse, VPN suspicion or unsupported client state to replace the authoritative final checkout record; and
- correct genuine catalog/configuration errors transaction-by-transaction subject to mandatory rights instead of confiscating unrelated entitlements.

## Obvious catalog/configuration errors

A server or catalog error does not grant CK-Labs the right to use an ambiguous order button, and an ambiguous order button does not prevent CK-Labs from investigating a genuine catalog/configuration mistake.

Keep these questions separate:

1. Was a legally effective consumer contract formed?
2. What product, price, tax, currency and entitlement did the final checkout actually present?
3. Was there an obvious pricing/catalog/configuration error?
4. Was payment completed, pending, failed, reversed or refunded?
5. What correction is permitted under the contract, platform/provider rules and mandatory law?

Do not use a backend `expected price` field as automatic proof that the consumer agreed to that amount if the final consumer checkout showed something else.

## Pending, failed and reversed payments

The order-button requirement and payment-state authority are separate layers.

- A compliant button does not turn a `PENDING` payment into a completed transaction.
- A completed provider payment does not prove that every German contract-formation requirement was satisfied.
- Do not grant Diamonds, 30-Day VIP or Lifetime VIP while the authoritative payment remains pending where the applicable provider flow requires completed payment first.
- Failed, canceled, expired or reversed payments must not be presented as completed purchases.
- Refunds, chargebacks and reversals must affect only the matching transaction/entitlement to the extent permitted by law.
- Duplicate webhooks or callbacks must remain idempotent.

## Apple App Store and Google Play boundary

BGB § 312j is a German consumer-contract rule for electronic commerce, but the actual contracting interface and merchant role must be mapped before CK-Labs assumes that its own website must duplicate a platform checkout control.

For native Apple App Store and Google Play purchases:

- do not place a second CK-Labs `zahlungspflichtig bestellen` button after the platform has already concluded the platform purchase;
- rely on the legally relevant platform order interface where Apple/Google is the contracting/payment channel for that transaction, while preserving CK-Labs's separate entitlement-delivery and consumer-rights duties;
- do not misstate Apple or Google as responsible for TycoonX gameplay entitlement delivery when CK-Labs controls that delivery; and
- if a mobile app opens an external TycoonX/Xsolla web checkout, classify the **web checkout** separately under German law and the applicable Apple/Google external-purchase program rules.

## Xsolla Merchant-of-Record boundary

Xsolla's current Publisher Account Terms, last updated **June 30, 2026**, state that Xsolla acts as merchant of record for Digital Content according to the applicable Agreement. Xsolla also offers Web Shop/Pay Station purchase flows that can operate as an external browser-based checkout.

Do **not** infer from the phrase `Merchant of Record` alone that CK-Labs has no § 312j risk or that Xsolla automatically satisfies every German final-order requirement for every project configuration.

For the live TycoonX German webshop, preserve a dated contract/configuration map showing:

- the exact German purchase URL;
- the contracting Xsolla entity shown to the consumer;
- the TycoonX product/SKU;
- the final order screen immediately before the payment obligation is created;
- the final order-button wording in German;
- the final total, currency and tax presentation;
- whether an additional independent paid contract is created in the same flow;
- the transaction confirmation/receipt;
- the server-side payment state used for entitlement delivery; and
- how refund, reversal, chargeback, withdrawal and § 312k cancellation events reach TycoonX where relevant.

If Xsolla changes the Pay Station/Web Shop UI, German wording, merchant entity, payment method, legal terms or checkout architecture, re-run this gate. Do not rely on an old screenshot as permanent evidence.

## Account compromise, fraud and entitlement abuse

A § 312j problem and a fraud problem are not the same thing.

- A compromised account can contain a validly formed unauthorized payment dispute, an invalid transaction, or a valid purchase made by the account holder. Investigate the evidence.
- Do not classify a consumer's invocation of § 312j, withdrawal, cancellation, refund or conformity rights as fraud merely because it creates operational cost.
- A genuine stolen-payment-method or entitlement-abuse case may still be investigated and corrected under applicable law.
- Do not remove unrelated legitimate Diamonds or unrelated paid VIP because one transaction is disputed.
- Do not restart, extend, shorten, duplicate or convert the original one-time 30-Day VIP period merely because another transaction is challenged.
- Do not add an expiry date to a valid Lifetime VIP because a later sale, refund, provider migration or unrelated dispute occurs.

## Outages and third-party failures

If the checkout, provider, network, authentication service or CK-Labs backend fails during ordering:

- preserve the authoritative transaction/payment state;
- do not fabricate a completed order from a client-side success screen;
- do not fabricate a failure when the provider completed the transaction;
- reconcile idempotently after recovery;
- preserve the final checkout evidence where reasonably possible;
- do not silently switch the final button to a neutral/non-payment label during fallback; and
- do not extend or restart a genuine Lifetime VIP promotion countdown merely because a provider outage occurred unless the promotion is deliberately and truthfully extended for everyone under its stated rules.

A temporary provider outage does not itself create a permanent refund right, and it does not remove mandatory remedies that otherwise apply.

## Old and unsupported app versions

An unsupported client must not be allowed to bypass the current authoritative web checkout by submitting a stale product, price, coupon or entitlement payload directly.

Where an old app opens a web checkout:

- the live server/provider checkout controls the current product availability and final price;
- stale client text does not override the final consumer-facing checkout;
- if the old client cannot safely represent a required purchase flow, block or upgrade-gate the purchase rather than guessing; and
- do not retroactively charge a completed purchase because the old client displayed outdated pre-checkout information.

## Future recurring products

TycoonX currently distinguishes the one-time 30-Day VIP and one-time Lifetime VIP from recurring subscriptions.

If CK-Labs ever introduces a recurring product:

- do not silently convert an existing one-time VIP into it;
- disclose recurrence, billing interval, total/recurrent cost, minimum duration and cancellation rules as required before order;
- re-check § 312j, § 312k, withdrawal, digital-product and platform subscription rules together;
- use the platform/provider recurring-product configuration that matches the public promise; and
- apply any separate mandatory recurring-price-change/notice rules before changing an existing recurring contract.

## September 27, 2026 German-law checkpoint

German consumer-information rules are scheduled to change again on **September 27, 2026**, including an amendment to the information references in § 312j(2). The new harmonized guarantee-label rules principally target sales of goods, including goods with digital elements. TycoonX's current paid products are digital content/services, not physical goods.

Before September 27:

- re-check the then-current official wording of § 312j and Article 246a EGBGB;
- do not invent a `commercial durability guarantee` for Diamonds or VIP merely because goods-law labels change;
- if CK-Labs begins selling physical merchandise or goods with digital elements, run a separate goods/warranty checkout review; and
- update this gate if the final statutory cross-references materially affect TycoonX's digital checkout.

## Production evidence required

A German web-checkout evidence packet should contain at least one current real or sandbox/test transaction for each actually offered TycoonX product, using a legally safe test method that does not create an uncontrolled real consumer charge.

For each product, preserve:

- storefront/country and language;
- date/time;
- exact product title;
- material product description visible before order;
- final price, currency and tax/fee presentation;
- final order-button wording;
- screenshot or equivalent durable capture of the screen immediately before order;
- merchant/contracting entity shown to the user;
- provider transaction identifier;
- payment state transition;
- resulting TycoonX entitlement ledger action;
- refund/reversal route; and
- whether the flow created one paid contract or several independently paid contracts.

For Lifetime VIP, also preserve evidence that any sales window, countdown, crossed-out price or discount claim was genuine.

Do not retain unnecessary payment-card or personal data merely to satisfy this evidence requirement.

## Current repository parity checkpoint

A September 3, 2026 repository search found no dedicated § 312j / `zahlungspflichtig bestellen` gate before this document was added, and no obvious in-repository TycoonX checkout implementation. Therefore:

- this new document fills a legal/implementation QA gap;
- it does **not** prove that the external live TycoonX/Xsolla checkout is compliant;
- do **not** add a fake static order button to the legal/support site merely to make a verifier pass; and
- the live Xsolla/CK-Labs German final-order screen remains a manual production-evidence item.

## Canonical public-law parity

No canonical English public legal wording needs to change merely because this internal implementation gate was added. The existing public documents already distinguish Diamonds, one-time 30-Day VIP, Lifetime VIP, Apple App Store, Google Play, Xsolla, price changes, regional pricing, refunds, chargebacks, mandatory rights, account compromise, outages, service changes and permanent shutdown.

If a future checkout implementation exposes a material promise that contradicts the canonical English source, fix the implementation or update the canonical English document. If canonical meaning changes materially, reopen only the affected localized document type and resynchronize the 25 locales in the required order.

## Manual regression scenarios

At minimum, verify these without GitHub Actions or paid services:

1. German Diamond purchase shows the product, quantity, final total and unambiguous payment button.
2. A Diamond bonus is shown as a bonus rather than a hidden separately paid product.
3. German 30-Day VIP shows one-time payment, 30-day duration and no auto-renewal.
4. German Lifetime VIP shows one-time payment and does not look like a subscription.
5. A valid coupon changes the final total before the order button is clicked.
6. An invalid coupon does not silently add a higher charge after clicking.
7. A neutral `Continue` button cannot submit a paid order.
8. A Terms checkbox cannot cure a neutral payment button.
9. An earlier pricing screen cannot cure a neutral payment button.
10. A single click creating two independent paid contracts identifies both on the final order screen.
11. A genuinely free bonus is not falsely labelled as a second paid contract.
12. A pending Xsolla payment grants no paid entitlement until the configured authoritative completed state.
13. Duplicate provider callbacks do not duplicate Diamonds or VIP.
14. A reversed/refunded transaction corrects only the matching entitlement.
15. A disputed transaction does not remove unrelated valid Diamonds or VIP.
16. A checkout outage reconciles without inventing a success or failure.
17. A stale app version cannot force an old price into the current web checkout.
18. Regional pricing displays the actual final country/currency total.
19. A future personalized price triggers the applicable disclosure rather than being mislabeled as ordinary regional pricing.
20. A Lifetime VIP countdown remains genuine and is not manipulated by checkout errors.
21. A provider UI change triggers a new German evidence capture.
22. Apple/Google native purchases do not get an unnecessary second CK-Labs payment-confirmation button.
23. An external Xsolla web flow opened from a mobile app is separately classified under German law and platform rules.
24. A future recurring product cannot reuse the one-time 30-Day VIP product copy or entitlement state.
25. A known § 312j formation defect is not `fixed` through a generic later email or gameplay activity.

## Source checkpoint

Reviewed September 3, 2026 against:

- German BGB § 312j, current official text at `gesetze-im-internet.de`;
- Article 246a § 1 EGBGB, current official text at `gesetze-im-internet.de`;
- Directive 2011/83/EU Article 8(2) and CJEU **C-249/21 Fuhrmann-2**;
- CJEU **C-400/22 Conny**, judgment of May 30, 2024;
- BGH **X ZR 81/23**, judgment of June 4, 2024;
- BGH **I ZR 159/24**, judgment of October 9, 2025; and
- Xsolla Publisher Account Terms of Use, last updated June 30, 2026.

This gate must be rechecked if German checkout law, the Consumer Rights Directive, Xsolla's merchant/payment architecture, or the live TycoonX purchase flow materially changes.
