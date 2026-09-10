# TycoonX German/EU Paid-Order Button & Final Checkout Gate

Last reviewed: **September 11, 2026**

Status: **implementation / commercial release gate**. This document does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, or any mandatory consumer right.

## Why this gate exists

TycoonX sells or may sell digital products through the Apple App Store, Google Play, and the official CK-Labs TycoonX webshop using Xsolla. The existing legal documents already preserve mandatory consumer rights, distinguish the products and channels, and state that the final total price presented before confirmation governs a completed transaction subject to applicable law.

A separate implementation check is still required for the **actual final ordering interface** used with German and EU/EEA consumers. Correct legal pages cannot cure a checkout that fails a mandatory ordering-interface rule.

The immediate priority is the German rule in **BGB § 312j**, read together with Article 246a § 1 EGBGB and Article 8(2) of Directive 2011/83/EU.

## German § 312j BGB: hard release requirements

For a consumer contract concluded in electronic commerce that obliges the consumer to pay, the German ordering flow must be designed so that the consumer expressly confirms the payment obligation.

Immediately before the consumer submits the paid order, the trader must provide the information referenced by the current § 312j(2) BGB clearly, comprehensibly and prominently. The current statutory cross-reference is Article 246a § 1(1), sentence 1, **nos. 1, 5 to 7, 8, 14 and 15 EGBGB**.

For TycoonX, the relevant information must therefore be mapped to the exact product and transaction. Depending on the offer, this includes in particular:

- the essential characteristics of the purchased product;
- the total consumer price including taxes and charges, or the legally permitted method of calculation where a total cannot reasonably be calculated in advance;
- where applicable, disclosure that a price was personalized on the basis of automated decision-making;
- any additional mandatory costs;
- for an indefinite or subscription contract, the required recurring/periodic total-price information;
- where applicable, contract duration or termination conditions for indefinite or automatically renewing contracts; and
- where applicable, the minimum duration of the consumer's obligations.

TycoonX's present **30-Day VIP is a one-time, non-renewing entitlement**, not a subscription. Its checkout must not describe it as automatically renewing or create the impression that the player must cancel recurring billing. If CK-Labs later introduces a recurring VIP product, it must receive its own compliant recurring-product checkout and legal review instead of inheriting the one-time VIP presentation.

## The final order button or equivalent function

Where the order is placed by pressing a button, § 312j(3) BGB requires the button to be easily legible and labelled with nothing other than **“zahlungspflichtig bestellen”** or an equally unambiguous formulation that makes the payment obligation clear.

For a German consumer flow, do not rely on surrounding text to repair an ambiguous final button. The Court of Justice of the European Union held in **C-249/21, Fuhrmann-2** that, when deciding whether the wording corresponds to “order with obligation to pay”, only the words on the button or similar ordering function are taken into account.

Accordingly, the final function must not use vague wording such as the following unless a current legal review establishes that the exact localized wording unambiguously communicates an obligation to pay:

- Continue
- Confirm
- Finish
- Complete
- Get VIP
- Get Diamonds
- Redeem offer
- Claim

The safest German implementation is wording whose ordinary meaning itself makes the payment obligation unmistakable. The interface must not force the consumer to infer payment from a price shown elsewhere on the page.

Under § 312j(4) BGB, the statutory consequence is severe: a contract falling within § 312j(2) comes into existence only if the trader complies with the obligation in § 312j(3). This is therefore a commercial release blocker, not a cosmetic copy preference.

## EU baseline

Article 8(2) of Directive 2011/83/EU likewise requires a consumer placing an electronic distance order to explicitly acknowledge that the order implies an obligation to pay. If a button or similar function is used, it must be labelled in an easily legible manner with “order with obligation to pay” or a corresponding unambiguous formulation.

The CJEU has reinforced this requirement:

- **C-249/21, Fuhrmann-2 (7 April 2022):** only the wording on the ordering button or similar function is considered when assessing whether the payment obligation is communicated unambiguously.
- **C-400/22, Conny (30 May 2024):** the Article 8(2) protection also applies where the consumer's payment obligation depends on a later condition being satisfied.

Country-specific implementation can impose additional or more detailed formal requirements. Passing the German gate does not by itself prove compliance in every EU/EEA jurisdiction.

## Channel responsibility must be verified, not assumed

### Official CK-Labs TycoonX webshop using Xsolla

For each actual German consumer checkout configuration, record whether the final legally operative order button/function is controlled by:

1. CK-Labs,
2. Xsolla, or
3. another expressly identified merchant/payment interface.

If the final ordering function is rendered inside an Xsolla-hosted or embedded interface, CK-Labs must still verify the actual localized consumer experience and the allocation of merchant/legal responsibility. A contract with a payment provider does not itself prove that every localized checkout configuration satisfies mandatory consumer-interface law.

No gate may be closed merely because the payment provider is widely used or because a generic provider template is expected to be compliant.

### Apple App Store and Google Play

Apple and Google control material parts of their native purchase confirmation interfaces and impose their own store terms. CK-Labs should not attempt to overwrite provider-controlled system confirmation text where the platform does not permit it.

For these channels, the evidence file should instead identify the platform-controlled purchase flow, the product displayed by TycoonX before handoff, the amount/currency shown, the provider confirmation step, and which party is responsible for the legally operative ordering interface in the relevant transaction.

TycoonX copy must not contradict the platform's actual purchase state, price, renewal status, refund process or entitlement status.

## Product-specific final-checkout requirements

### Diamonds

Immediately before a paid Diamond order is placed, the consumer-facing flow must clearly identify at least:

- the Diamond quantity/package being bought;
- the final monetary total required by applicable law;
- the transaction currency;
- mandatory taxes/fees where and as legally required; and
- any genuine coupon or promotion that changes the final price or content.

Purchased Diamonds must not be presented as a cash investment, deposit, security, withdrawable monetary balance or guaranteed store of value. The separate TycoonX EU virtual-currency gate continues to govern withdrawal-right handling, real-money-equivalent presentation and Diamond-funded downstream digital-content purchases.

### One-time 30-Day VIP

The final paid-order context must make clear that the current product is:

- **one-time**;
- **non-renewing**; and
- a **30-day entitlement**.

A player must not be led to believe that a recurring subscription is being created. Conversely, a future recurring product must not be disguised as the existing one-time product.

### Lifetime VIP

When Lifetime VIP is genuinely on sale, the final order context must accurately identify the one-time Lifetime VIP entitlement and its final transaction price.

Lifetime VIP remains a **limited-time promotional offering available only during selected genuine sales windows**. It may be withdrawn from future sale, may never return, and creates no expectation that it will be continuously available. Different genuine sales windows may use different future prices, subject to applicable law and non-misleading promotion rules.

A countdown, crossed-out price, “last chance” statement or other urgency/discount presentation must remain consistent with the separate TycoonX promotion/reference-price gate.

## Price, tax, FX, regional and configuration integrity

The final paid-order screen must be consistent with the canonical TycoonX rule that the **final total price presented before confirmation** governs a completed transaction, subject to mandatory law and legally relevant correction rights.

Before the final order action:

- any coupon actually applied must already be reflected or clearly accounted for as required by law;
- required taxes, VAT and mandatory fees must be included/disclosed in the legally required manner;
- provider-driven FX or local-price changes must be reflected in the actual final total shown to the consumer;
- a regional price must correspond to the consumer/storefront/payment configuration actually being used;
- the displayed product quantity and entitlement must match the SKU/order configuration; and
- a consumer must not discover an unavoidable additional charge only after activating the legally operative final order control.

Prices may legitimately differ by country, platform, channel, currency, provider tax/FX treatment, genuine campaign or future catalog decision. Such differences must not be converted into misleading discount claims.

A later price decrease does not automatically create a refund, credit or price-match right, and a later increase does not create an extra charge on an already completed one-time purchase, except where mandatory law requires otherwise. Obvious catalog/configuration errors must be handled under the canonical TycoonX terms and mandatory consumer law; they are not permission to silently debit an additional amount after the consumer completed the order.

## Failed, pending and reversed payments

The ordering-interface gate does not determine whether a payment ultimately settles.

TycoonX must continue to distinguish:

- order submitted;
- payment pending;
- payment failed;
- payment completed;
- payment later refunded/reversed/charged back; and
- entitlement granted, withheld, corrected, migrated or restored.

A successful button interaction is not itself authoritative proof that funds settled. Store/provider/server transaction records remain relevant to fulfillment and later reconciliation. Conversely, payment-processing failures do not authorize CK-Labs to rewrite what price or product the consumer was actually shown when the order was placed.

The existing RevenueCat and Xsolla refund/entitlement gates remain open and are not closed by this UI gate.

## Accessibility, localization and device coverage

For German consumer checkout, the legally operative control must remain easily legible on the actual devices and layouts used in production. Test at minimum:

- common phone widths;
- common desktop widths;
- browser zoom / dynamic text conditions that can affect visibility;
- embedded/iframe variants if used;
- redirect-based payment variants if used;
- light/dark presentation where applicable; and
- failed/pending/retry paths that may redisplay the order interface.

The German final-order wording must not silently fall back to an ambiguous English label. Other EU/EEA locales require a native formulation whose ordinary meaning unambiguously communicates the payment obligation under the law applicable to that market.

Arabic and other localized legal-page layout rules are separate from the checkout requirement but should not be broken by shared components.

## Evidence required to close this gate

For every materially distinct German paid ordering route, retain reproducible evidence showing:

1. environment and build/version;
2. date/time of verification;
3. country/storefront used;
4. product and provider SKU/offer ID;
5. product type: Diamonds, one-time 30-Day VIP, Lifetime VIP or another future product;
6. currency;
7. displayed final total price;
8. displayed tax/fee treatment where applicable;
9. any coupon/promotion/reference-price claim visible;
10. the information displayed immediately before ordering;
11. the **exact text on the final order button or equivalent function**;
12. whether the button/function is controlled by CK-Labs, Xsolla, Apple, Google or another identified party;
13. whether activating it is the legally operative act that submits the paid order;
14. purchase result: completed, pending, failed or canceled;
15. resulting provider transaction/order identifier in a non-production or otherwise safely controlled test where possible; and
16. screenshots or equivalent durable QA captures sufficient to reconstruct the final ordering state without relying on memory.

Do not perform unnecessary real-money production purchases merely to satisfy this gate. Provider sandbox/test environments and controlled non-production flows should be preferred where they faithfully reproduce the relevant interface.

## Minimum regression cases

The gate is not closed until the actual production-equivalent flow passes at least these cases:

1. German consumer buys a standard Diamond package.
2. German consumer buys one-time 30-Day VIP and sees no subscription/auto-renew implication.
3. German consumer buys Lifetime VIP during a genuine active sales window.
4. A valid coupon changes the final price before the legally operative order action.
5. A coupon is rejected/expired and the consumer sees the actual final price before ordering.
6. A tax or provider-local-price difference changes the local total before ordering.
7. A German Xsolla redirect checkout exposes an unambiguous final payment-obligation control.
8. Any German Xsolla embedded checkout variant exposes the same substantive protection.
9. A mobile viewport does not truncate or obscure the final product/price/button information.
10. A failed or pending payment does not falsely display the entitlement as definitively purchased.
11. A retry path does not skip the mandatory final-order information/button state.
12. A catalog/configuration mismatch is blocked or corrected before the consumer places the paid order.
13. An Apple purchase handoff does not cause TycoonX to invent or contradict the platform-controlled final confirmation state.
14. A Google Play purchase handoff does not cause TycoonX to invent or contradict the platform-controlled final confirmation state.
15. Any future recurring VIP product receives a separate recurring-contract checkout review rather than reusing one-time 30-Day VIP wording.
16. A conditional-payment scenario is not treated as exempt merely because payment becomes due only if a later condition occurs.

## Founder-protective but lawful operating rule

This gate protects CK-Labs by making the transaction evidence clearer, not by trying to waive consumer rights.

A strong checkout record helps distinguish genuine completed purchases from abandoned flows, failed provider attempts, manipulated screenshots, coupon abuse, regional-price abuse, chargeback disputes and entitlement claims. The correct protection is an auditable, unambiguous ordering flow tied to authoritative transaction records.

Do not add a clause saying that a consumer is bound despite a defective mandatory order button, that provider terms waive non-waivable German/EU rights, or that CK-Labs may charge a different amount than the final total validly presented before confirmation.

## Current authority baseline

Rechecked September 11, 2026 against:

- German **BGB § 312j**, especially paragraphs 2 to 4;
- German **Article 246a § 1 EGBGB**, including the current information categories referenced by § 312j(2);
- **Directive 2011/83/EU, Article 8(2)**; and
- CJEU **C-249/21, Fuhrmann-2** and **C-400/22, Conny**.

This gate should be rechecked after a material amendment to the German electronic-commerce ordering rules, the Consumer Rights Directive, relevant CJEU case law, or a material change to the actual Apple, Google or Xsolla purchase flow used by TycoonX.

## Current conclusion

**Legal-document localization does not need to be reopened for this gate.** The canonical TycoonX documents already preserve mandatory consumer rights, product distinctions, final-price logic and channel allocation. What remains unverified is the actual production-equivalent checkout implementation.

Until the German paid-order UI is captured and verified against the requirements above, this item remains an **open commercial/legal implementation gate** rather than a completed legal-document task.
