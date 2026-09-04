# TycoonX Apple EU Attachment 14 Commission & Attribution Release Gate

Last reviewed: September 4, 2026

TycoonX went to full release on **September 1, 2026**. This is an internal production/commercial control for the Apple App Store EU transition. It complements, rather than replaces, `TYCOONX_APPLE_EU_OCTOBER_2026_TRANSITION_GATE.md`, `TYCOONX_APPLE_EU_SELLER_MERCHANT_AUDIT_RELEASE_GATE.md`, the TycoonX Terms, Purchases & Refunds Policy, and the Xsolla payment gates.

## Why this gate exists

Apple's August 18, 2026 Developer Program License Agreement added Attachment 14 for apps in the EU. Attachment 14 becomes effective for the CK-Labs account on **October 1, 2026 or the date the Account Holder signs the agreement including Attachment 14, whichever is later**.

The existing transition gate correctly requires CK-Labs to determine the exact commission model before enabling alternative payments. This gate makes the current rate card, attribution window, and reconciliation rules explicit so a payment-routing decision cannot be based on the false assumption that an Xsolla transaction triggered from the iOS app owes only Xsolla fees.

The percentages below are operational checkpoints from Apple's current September 4, 2026 materials. **Recheck the signed Apple agreement and current Apple materials before production activation and after any Apple terms change.** The signed/current Apple terms control if Apple later changes a rate, eligibility rule, attribution rule, tax treatment, or reporting method.

## 1. Current Attachment 14 EU rate card

When Attachment 14 applies to the CK-Labs account, Apple's current EU App Store rate card is:

| Purchase route | Current Apple rate | Current reduced rate where applicable |
| --- | ---: | ---: |
| Apple In-App Purchase | **26%** | **15%** |
| Alternative payment processing within the app | **20%** | **10%** |
| Out-of-app offer with an actionable link | **15% store services commission** | **10%** |

The reduced rates currently apply to the qualifying cases described by Apple, including relevant transactions while the developer participates in the App Store Small Business Program and certain other Apple programs. Apple's current terms also include reduced treatment for qualifying auto-renewable subscription transactions after their first year. **TycoonX does not currently sell a recurring subscription product.** Do not convert one-time 30-Day VIP or Lifetime VIP into a subscription for commission optimization or reporting convenience.

Before production activation, record for the CK-Labs account:

- whether CK-Labs is currently enrolled in the App Store Small Business Program;
- the exact effective Apple rate for Apple IAP;
- the exact effective Apple rate for alternative in-app processing;
- the exact effective Apple rate for an actionable out-of-app offer;
- the date and Apple source/contract version used for that determination; and
- who owns monthly Apple commission reconciliation.

Never hard-code a reduced rate merely because annual revenue appears below a threshold. Program enrollment and transaction eligibility must be verified against Apple's actual account state and current program rules.

## 2. Seven-calendar-day actionable-link attribution

For an **out-of-app offer with an actionable link**, Attachment 14 currently gives Apple a store services commission on sales of promoted digital goods or services at the destination when the sale is initiated within **seven (7) calendar days after the user taps or scans the actionable link** from the app.

For TycoonX, that means an Xsolla webshop purchase can still create an Apple commission obligation even though:

- payment is processed outside Apple IAP;
- Xsolla is the payment provider or transaction-specific merchant of record;
- the user completes checkout in a browser; and
- CK-Labs receives a settlement net of Xsolla/provider charges.

A provider settlement amount is therefore **not** the same as the final net economics of the transaction.

### Attribution record

For every qualifying actionable-link flow, preserve enough data to reconstruct:

- TycoonX account identifier;
- Apple storefront and relevant app/platform context;
- Apple external-purchase token where required;
- actionable-link event identifier;
- link tap/scan timestamp;
- destination/campaign identifier where relevant;
- Xsolla/order transaction identifier;
- payment-success timestamp;
- product/SKU and quantity;
- customer currency and final customer price;
- transaction taxes;
- refund/reversal/chargeback state;
- Apple reporting state; and
- expected Apple rate and commission basis.

Do not use the seven-day rule as permission to create unnecessary cross-service tracking. Store only the transaction and attribution evidence needed for Apple reporting, accounting, fraud/security, consumer remedies, or other lawful purposes, and apply the TycoonX Privacy Policy and retention rules.

## 3. "Promoted" can be broader than the single button label

Attachment 14 currently says that where an actionable link refers to a specific App Store app or to specific items within that app, **all digital goods and services usable within that app can be treated as promoted** for the applicable out-of-app commission rule.

Do not assume a link labelled only `Buy Diamonds` necessarily limits Apple's commission scope to the particular Diamond pack shown on the originating screen. If the destination also sells 30-Day VIP or a currently valid Lifetime VIP offer, determine attribution using Apple's current definition rather than the TycoonX button label alone.

This is a commercial/accounting rule. It does not change the player's product contract or merge separate entitlements.

## 4. Standalone webshop visits are not the same event as an actionable in-app referral

The Apple actionable-link commission rule is attribution-based. Keep the following states distinct:

1. user independently visits the public TycoonX webshop;
2. user sees a non-actionable in-app offer with no tappable/scannable referral;
3. user taps/scans an actionable out-of-app offer from the Apple-distributed app; and
4. user uses alternative payment processing inside the Apple-distributed app.

Do not automatically label every Xsolla webshop sale as an Apple actionable-link sale merely because the buyer also has TycoonX installed on an Apple device. Conversely, do not intentionally drop or rewrite qualifying referral/token evidence to make a commissionable transaction appear independent.

Where attribution is ambiguous, keep the transaction in an unresolved reconciliation state until the current Apple reporting rule is applied. Do not alter the player's valid entitlement merely because CK-Labs has an accounting classification dispute with Apple.

## 5. Reconciliation model: customer price is not CK-Labs net revenue

For each relevant Apple-EU alternative-payment transaction, keep separate ledger fields for at least:

- final total customer price;
- transaction taxes/VAT charged to the customer;
- Xsolla/payment-provider fee and settlement amount;
- Apple commission category;
- Apple commission rate;
- Apple commission basis;
- Apple expected commission;
- Apple invoice/correction state;
- refund/reversal/chargeback amount; and
- final CK-Labs economic result after reconciliation.

### Example

If a user follows an actionable TycoonX link from the Apple-distributed EU app and completes a **EUR 10.00** qualifying promoted purchase within seven calendar days, a 15% Apple store-services rate represents **EUR 1.50** before applying the exact tax/commission-base rules in the current agreement. If the same transaction validly qualifies for the current 10% reduced rate, that checkpoint would be **EUR 1.00**. Xsolla/provider costs and applicable taxes are separate.

This is an internal estimation example only. The actual Apple invoice, current contract, transaction taxes, refunds/reversals, and eligibility determine the final amount owed.

## 6. Taxes and merchant-of-record wording do not erase the Apple layer

Apple's current Attachment 14 allocates tax and reporting duties for covered sales between Apple and the developer under its own contract. Xsolla may separately act as payment provider or merchant of record for a particular checkout and may calculate, collect, remit, or document taxes under the applicable Xsolla arrangement.

Therefore:

- do not say `Xsolla is Merchant of Record, so Apple gets nothing`;
- do not say `Apple calls CK-Labs the seller, so the Xsolla receipt is wrong` without checking the transaction-specific contracts;
- reconcile the Apple contractual layer and Xsolla transaction layer separately;
- preserve the legal entity actually shown to the customer on the transaction receipt; and
- use `TYCOONX_APPLE_EU_SELLER_MERCHANT_AUDIT_RELEASE_GATE.md` for the detailed seller/MoR responsibility map.

## 7. Refunds, reversals, and chargebacks

Apple's current Attachment 14 commission provisions account for refunds, reversals, and chargebacks. A later Apple invoice credit or commission correction is an **accounting event**, not a second player refund or a new entitlement event.

Release rules:

- a valid provider refund/reversal should unwind only the affected paid transaction where legally and technically appropriate;
- the Apple report/correction must point to the same underlying transaction;
- an Apple commission credit must not re-grant Diamonds or VIP;
- a chargeback is evidence of a payment dispute, not automatic proof that the legitimate account owner committed fraud;
- unrelated purchased Diamonds, unrelated 30-Day VIP periods, and unrelated Lifetime VIP entitlements must not be removed merely because another transaction was disputed; and
- mandatory German/EU consumer remedies remain available regardless of CK-Labs's Apple/Xsolla accounting process.

## 8. Product invariants

### Diamonds

Purchased Diamonds remain transaction-specific digital value and **do not expire solely because time passes**. An Apple commission classification, reporting correction, invoice dispute, storefront change, or provider migration is not a reason to expire valid purchased Diamonds.

### 30-Day VIP

30-Day VIP remains a **one-time, non-renewing 30-day entitlement**. It is not an auto-renewing subscription. Apple/Xsolla retries, duplicate attribution events, or commission corrections must not start the same paid period twice or restart its clock.

### Lifetime VIP

Lifetime VIP remains a **one-time promotional entitlement available only during selected genuine sales windows**. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase. It is not a recurring subscription.

A stale Apple referral, cached webshop page, delayed callback, or commission-reconciliation event must not reopen a closed Lifetime VIP sales window. A valid Lifetime VIP purchase already completed during an authorized sales window remains governed by its transaction and the canonical TycoonX terms, including mandatory consumer remedies.

## 9. Prices, regional prices, future bundles, and promotions

Apple currently permits different prices and benefits for alternative payment options, subject to its presentation rules. That does not remove German/EU consumer-price and advertising requirements.

CK-Labs may change Diamond bundle prices/content, VIP prices, supported currencies, regional prices, channel prices, and future genuine promotions for **future purchases**. Apply these safeguards:

- display the legally required total consumer price and mandatory taxes/fees before confirmation;
- the final total shown before the consumer confirms the transaction governs the completed purchase, subject to mandatory law and obvious-error rules;
- do not retroactively reprice a completed one-time purchase because Apple's commission rate, Xsolla fee, tax rate, or FX rate later changes;
- a later price decrease does not automatically create a refund, credit, or price-match right unless mandatory law requires it;
- a later price increase does not create an extra charge on an already completed one-time purchase;
- Lifetime VIP may legitimately have different prices in different genuine sales windows;
- countdowns, crossed-out prices, promotion claims, and regional-price comparisons must not be misleading; and
- regional pricing must not be manipulated through false country, storefront, payment, or eligibility data.

Do not create a misleading `Apple surcharge` label for a consumer merely to pass through commission economics. If channel prices differ, show the actual total price lawfully and clearly rather than presenting an internal platform commission as though it were a government tax or mandatory Apple charge imposed directly on that user.

## 10. Future recurring products

TycoonX currently has no recurring subscription product. If CK-Labs later introduces one, do not reuse the one-time VIP logic.

Before launch, separately review:

- Apple recurring-product eligibility and commission treatment, including the then-current first-year/later-renewal rules;
- Apple and Xsolla subscription cancellation/management requirements;
- German/EU recurring-contract checkout, renewal, notice, cancellation-button, and price-change rules;
- withdrawal and digital-service conformity rights; and
- how actionable-link attribution applies to later renewals under the then-current Apple terms.

## 11. P0 production blockers

Do not enable the Attachment 14 alternative-payment configuration for TycoonX if any of the following remains true:

- CK-Labs does not know which Apple rate currently applies to its actual account/program status;
- actionable-link events are not timestamped;
- the system cannot distinguish an independent webshop visit from an Apple actionable-link referral where the distinction matters;
- Xsolla settlement is treated as final net revenue without Apple reconciliation;
- transaction taxes and Apple commission basis cannot be reconstructed;
- refunds/chargebacks cannot be correlated to the original Apple report and TycoonX entitlement;
- a reporting or commission correction can accidentally grant/revoke unrelated Diamonds or VIP;
- a closed Lifetime VIP offer can still be purchased through stale Apple/Xsolla catalog state;
- the live UI violates Apple's IAP prominence/election requirements; or
- the signed/current Attachment 14 terms have not been checked against this gate.

## 12. Minimum production regression scenarios

Before activation, test at least:

1. Apple IAP purchase under the account's correct current rate.
2. Alternative in-app Xsolla/PSP purchase under the correct current rate.
3. Actionable out-of-app link followed by purchase inside seven calendar days.
4. Actionable link followed by no purchase.
5. Independent webshop purchase with no qualifying Apple actionable-link event.
6. Actionable link followed by a purchase whose Apple attribution classification is ambiguous.
7. Link advertising Diamonds while destination also offers another TycoonX paid product.
8. Duplicate app-link callback without duplicate entitlement or reporting.
9. Xsolla refund after Apple reporting.
10. Chargeback after entitlement use without automatic fraud conclusion.
11. Apple invoice correction without a second player refund.
12. Purchased Diamonds surviving an accounting reconciliation.
13. 30-Day VIP clock surviving a duplicate callback unchanged.
14. Closed Lifetime VIP sales window rejecting stale catalog/referral attempts.
15. Existing valid Lifetime VIP surviving an unrelated transaction dispute.
16. Regional-price difference with correct total-price display.
17. Future price change leaving earlier completed one-time purchases untouched.
18. Apple or Xsolla outage leaving entitlement/reporting state recoverable and idempotent.

## Source checkpoint

Apple's official EU payment-options guidance and current Developer Program License Agreement were rechecked on **September 4, 2026**. The current materials state, for the unified Attachment 14 EU model, that:

- Apple IAP uses a **26%** rate, with **15%** for the currently specified reduced-rate cases;
- alternative payment processing within the app uses a **20%** rate, with **10%** for the currently specified reduced-rate cases;
- actionable out-of-app offers use a **15% store services commission**, with **10%** for the currently specified reduced-rate cases;
- the actionable-link store services commission covers qualifying promoted digital-goods/service sales initiated within **seven calendar days** after the link tap/scan;
- Apple reporting for alternative payment activity remains separate from TycoonX entitlement delivery;
- refunds, reversals, and chargebacks affect commission reconciliation under Apple's terms; and
- these unified terms apply from October 1, 2026 or the Account Holder's later acceptance date for the agreement including Attachment 14.

Recheck official Apple materials before activation because Apple can amend its business terms, rates, APIs, entitlement requirements, and reporting instructions.