# TycoonX Apple South Korea Alternative Payment Release Gate

**Last reviewed: September 6, 2026**

Owner: CK-Labs  
Scope: TycoonX iOS/iPadOS distribution on the South Korea App Store storefront if CK-Labs considers replacing Apple In-App Purchase in a South Korea-only binary with an approved third-party in-app payment provider.

This is an internal production-compliance gate. It does not enable alternative payments, change public TycoonX legal terms, or establish that Xsolla is approved for Apple's South Korea entitlement.

TycoonX is a fully released service. Unless CK-Labs intentionally chooses the South Korea entitlement architecture, obtains Apple's approval for the exact bundle ID and payment service provider, ships the required South Korea-only binary, and satisfies this gate, TycoonX must keep using the ordinary approved Apple In-App Purchase path for the South Korea storefront.

## 1. Current Apple South Korea checkpoint

Apple currently documents a South Korea-specific **StoreKit External Purchase Entitlement** under which an eligible app distributed solely on the South Korea App Store storefront may use an approved third-party payment service provider for in-app purchases.

Current Apple source of truth:

- https://developer.apple.com/support/storekit-external-entitlement-kr
- https://developer.apple.com/documentation/storekit/externalpurchase

This September 6, 2026 snapshot is operational guidance only. Before implementation, submission, PSP changes, pricing changes, or material architecture changes, recheck the live Apple entitlement terms, App Review Guidelines, Developer Program License Agreement, reporting template, commission rules, and required StoreKit APIs.

## 2. This is a separate South Korea-only binary, not a feature flag in the ordinary global app

Apple currently requires the entitlement to be assigned per bundle ID and states that it can be assigned only to a bundle ID that has not already been published on the App Store. After approval, the developer submits a separate iOS and/or iPadOS app binary distributed solely on the South Korea storefront.

Release blockers:

- do not add the entitlement to the ordinary worldwide TycoonX App Store binary;
- do not assume a runtime country flag can convert the current global binary into the South Korea entitlement build;
- do not reuse an already-published bundle ID if Apple's current entitlement terms still require an unpublished bundle ID;
- limit App Store Connect availability for the entitlement build to South Korea;
- keep binary, provisioning profile, App ID, entitlement metadata, PSP identity, support URL, and App Review submission evidence consistent; and
- if replacing a South Korea version that currently uses Apple In-App Purchase, follow Apple's current migration/removal sequence before the entitlement-enabled app is approved.

A local build, TestFlight build, entitlement request, sandbox payment, or approved webshop does not by itself authorize production distribution.

## 3. Apple In-App Purchase and the South Korea external-purchase entitlement are mutually exclusive in the same app

Apple currently states that the South Korea StoreKit External Purchase Entitlement **cannot be used in the same app with Apple's in-app purchase system**.

This is materially different from TycoonX's current Japan alternative-payment model, where Apple currently requires Apple In-App Purchase to remain available alongside certain alternative options.

Therefore, for the South Korea entitlement binary:

- do not ship Apple In-App Purchase code/merchandising as an alternative checkout route in the same entitlement-enabled app if Apple's current rule still prohibits coexistence;
- do not show a fake Apple IAP button that cannot complete;
- do not use remote configuration to switch the same signed entitlement binary back and forth between Apple IAP and third-party payment without a fresh Apple compliance review; and
- do not infer Japan, EU, or U.S. payment permissions into South Korea.

If CK-Labs wants to retain Apple IAP in South Korea, use the ordinary Apple-approved path rather than the mutually exclusive entitlement architecture unless Apple changes the rule.

## 4. PSP approval is a P0 gate, and Xsolla must not be assumed approved

Apple currently lists KCP, Inicis, Toss, and NICE as pre-approved South Korea PSPs. Apple also permits a developer to propose a different PSP for review, but says a non-pre-approved provider can delay or prevent entitlement approval.

For TycoonX:

- Xsolla is **not automatically approved** merely because it powers the official TycoonX webshop or works on another platform/region;
- if CK-Labs wants Xsolla as the South Korea in-app PSP, submit Xsolla to Apple in the entitlement request/update process and retain Apple's approval evidence before production;
- only one PSP may be used per entitlement under Apple's current rule;
- a PSP change requires the then-current Apple entitlement update process before rollout;
- CK-Labs must not itself store or transmit payment credentials unless it independently meets the PSP criteria Apple requires; and
- the selected PSP must satisfy Apple's current security, privacy, fraud-prevention, broad-payment-support, secure billing/card-storage, and split-payment requirements where applicable.

A production feature flag must fail closed if the configured PSP does not match the Apple-approved entitlement record.

## 5. Native in-app payment experience: no ordinary webshop/webview reuse

Apple currently requires the South Korea third-party payment flow to provide a **native experience within the app** and says it may not be provided in a web view. The user may leave the app only when legally required to go to a website or another app to complete the purchase.

Therefore the existing TycoonX architecture of opening the official CK-Labs TycoonX webshop in a browser must **not** be reused as though it were automatically the South Korea entitlement flow.

Before using Xsolla or another PSP in this program, verify that the exact SDK/native integration:

- is approved by Apple for the entitlement;
- is genuinely native rather than a disguised webview checkout;
- uses only the approved PSP;
- contains no hidden, dormant, undocumented, or remotely activated payment behavior outside the reviewed design;
- leaves the app only where legally required and where Apple permits it; and
- still gives the player the price, currency, taxes/fees, product contents, refund/support information, and other mandatory pre-contract information required by applicable law.

Do not treat the U.S. external-web-link architecture, Japan web-offer architecture, Google Play South Korea webview architecture, or the standalone TycoonX webshop as interchangeable with this Apple South Korea native-payment program.

## 6. Required entitlement and StoreKit metadata

For the current Apple architecture, the production binary must use the then-current required entitlement and metadata, including:

- `com.apple.developer.storekit.external-purchase = true`; and
- `SKExternalPurchase` containing the single ISO 3166-1 alpha-2 country value `KR`.

Do not silently broaden the allowed-country array. Do not add unrelated countries because the PSP accepts them.

The signed binary, provisioning profile, App ID capability, Info.plist, and App Store Connect territory configuration must agree.

## 7. Storefront authority and payment eligibility

Before each payment or payment-information flow, follow Apple's current StoreKit requirements.

At the September 6, 2026 checkpoint this includes:

1. check `canMakePayments` before every flow to make a purchase or enter payment information;
2. use the StoreKit External Purchase API where required to present Apple's external-purchase notice; and
3. when not calling that API, use `Storefront` or `SKStorefront` to confirm that South Korea is the current App Store storefront before the relevant payment flow.

Do not substitute:

- GPS location;
- IP geolocation;
- device language;
- SIM country;
- TycoonX profile country;
- stored billing address; or
- a stale indefinitely cached storefront.

If the required storefront/payment state cannot be confirmed, fail closed rather than opening the third-party payment flow.

## 8. Apple's External Purchase Modal Sheet is mandatory

Apple currently requires an in-app modal sheet explaining that purchases are managed outside Apple's payment system.

For devices on iOS/iPadOS 15.4 or later, use the current StoreKit External Purchase API. For older supported versions where Apple still requires a developer-rendered version, reproduce the current Apple-prescribed design and text exactly rather than translating or redesigning it casually.

The sheet is currently required before:

- each purchase/payment flow until the user has tapped Continue on that device; and
- each flow to enter payment information, even where it is not tied to a specific immediate purchase, until the user has tapped Continue on that device.

Do not bypass the Apple notice because the player used the PSP before, TycoonX already showed its own disclosure, the user came from a promotional offer, the PSP will show another warning, or a remote flag says the notice was displayed on another device.

If Apple's notice flow cannot be completed as required, do not open the alternative payment flow.

## 9. Support, refund, purchase-history, and provider-role separation

Apple currently states that it will not be aware of purchases made through the South Korea alternative payment provider and therefore cannot provide the same refund, purchase-history, subscription-management, and related support for those transactions.

TycoonX Support must first identify the actual transaction channel before giving payment guidance.

For a South Korea entitlement transaction:

- CK-Labs/its approved PSP owns the customer-support path required by the entitlement and applicable law;
- do not send the player to Apple's refund path for a third-party PSP transaction;
- do not tell the player that Apple has a record of the third-party purchase when Apple does not;
- do not present Xsolla or another PSP as able to refund an unrelated Apple IAP transaction;
- preserve support evidence for failed, pending, reversed, refunded, chargeback, fraud-screened, or disputed transactions; and
- keep any mandatory Korean or other applicable consumer remedy intact even if the Apple entitlement terms allocate operational responsibility differently.

Provider responsibility must be documented for payment authorization, fraud screening, payment credentials, receipts, transaction history, refunds, reversals, chargebacks, taxes, customer support, and entitlement corrections.

## 10. Commission, taxes, reporting, invoicing, and audit are separate from entitlement delivery

Apple currently states that entitlement transactions are subject to a **26% commission on the price paid by the user, gross of value-added taxes**, under the current South Korea entitlement terms. Apple also states that the developer is responsible for applicable tax collection/remittance as specified in the entitlement addendum.

This rate is time-sensitive commercial information. Do not hard-code it into player-facing TycoonX legal copy, and do not assume it remains unchanged for future accounting periods.

Apple currently requires a sales report recording each qualifying sale of digital goods/content facilitated through the App Store. The report is due **monthly within 15 calendar days following the end of Apple's fiscal month**. Apple currently invoices qualifying developers from those reports, with payment due within **45 days following the end of Apple's fiscal month**, and reserves audit rights.

The finance/reporting system must keep separate:

- PSP payment authorization/settlement state;
- TycoonX entitlement state;
- Apple reportable transaction state;
- Apple reporting submission state;
- Apple invoice/commission state;
- tax/VAT state; and
- later refund/reversal/correction state.

A successful Apple report does not prove the PSP charge succeeded. A successful PSP charge does not prove the Apple report was submitted. An Apple invoice does not grant or revoke a TycoonX entitlement.

Retain sufficient records to reconcile Apple audits without inventing transaction history after the fact.

## 11. Authoritative server-side entitlement delivery

Regardless of PSP, the client UI must not be the entitlement authority.

Do not grant Diamonds or VIP solely because of a client-side success callback, navigation to a success screen, a PSP SDK UI state, the Apple disclosure completing, app foregrounding after payment, or a local receipt-like object that has not been validated according to the approved PSP architecture.

The approved payment backend/server-side state must confirm the transaction before TycoonX grants paid value. Fulfillment must be idempotent and traceable to a unique provider transaction/order.

The ledger should correlate, where applicable: TycoonX account; internal order ID; Apple South Korea program/binary/bundle identifier; approved PSP; PSP transaction ID; product/SKU and offer version; currency, taxes, and final total; payment state; entitlement grant/revocation/restoration event; refund/reversal/chargeback/correction state; Apple report period/submission status; and reconciliation adjustments.

Duplicate callbacks, retries, app restarts, or reporting retries must not duplicate entitlements.

## 12. Product-specific invariants

### Purchased Diamonds

- Purchased Diamonds do not expire solely because time passes.
- A duplicate PSP callback/reporting retry must not grant purchased Diamonds twice.
- A refund, reversal, chargeback, or confirmed payment failure may correct only the affected transaction/value as allowed by applicable law; do not remove unrelated legitimately purchased value.
- Regional/PSP pricing must be truthful. Do not claim a saving against Apple or another channel unless product quantity, tax basis, currency, bundle contents, and final payable total support the comparison.

### One-time 30-Day VIP

- 30-Day VIP remains a **one-time, non-renewing 30-day entitlement**.
- A PSP integration must not silently convert it into a recurring subscription.
- Restoring or reconciling an existing valid order does not restart the original 30-day period unless a new valid purchase or mandatory remedy requires it.
- Any future recurring VIP requires its own compliant renewal, cancellation, notice, price-change, and withdrawal framework.

### Limited-time Lifetime VIP

- Lifetime VIP remains a **limited-time promotional offering available only during selected genuine sales windows**.
- It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability for purchase.
- The South Korea binary and PSP catalog must enforce the current server-authoritative sales-window state.
- A stale app version, cached PSP product, old deep link, receipt restoration, or reporting retry must not reopen a closed Lifetime VIP sale.
- Different genuine future sales windows may use different prices for future purchases, while completed purchases are not retroactively repriced except where mandatory law requires otherwise.

## 13. Pricing, catalog, promotions, regional pricing, tax, and FX controls

Alternative payment does not relax TycoonX's existing commercial-law safeguards.

Before confirmation, the player must see the applicable final total and legally required tax/fee information. CK-Labs may change future prices, Diamond bundle contents/prices, VIP prices, currencies, regional prices, and genuine promotions for future purchases, subject to applicable law.

Preserve that:

- completed one-time purchases are not retroactively repriced merely because a later price is higher/lower;
- a later price decrease does not automatically create a refund/credit/price-match right unless mandatory law requires it;
- a later price increase does not create an extra charge on an already completed one-time purchase;
- platform/PSP tax, VAT, currency, and FX changes may alter future local prices;
- an obvious catalog/configuration error can be stopped/corrected lawfully before or after attempted purchase depending on transaction status and mandatory consumer law;
- regional-pricing abuse, false-location/payment manipulation, or coupon/promotion abuse can be investigated with proportionate evidence rather than automatic guilt assumptions; and
- promotional countdowns, crossed-out prices, discount claims, scarcity claims, and Lifetime VIP sales-window claims must be genuine and not misleading.

## 14. Security, compromise, outages, unsupported clients, and provider changes

The South Korea alternative-payment route must be remotely disableable without deleting valid user entitlements.

Fail closed or temporarily disable new purchases when reasonably necessary for Apple entitlement suspension/revocation or rule changes, PSP compromise/outage, security emergency, fraud spike, material reconciliation failure, tax/reporting failure that makes continued sales unlawful or noncompliant, obsolete/unsupported app versions that cannot execute required disclosures securely, or a provider migration that has not completed Apple approval.

A PSP outage must not be misrepresented as a successful purchase. A provider replacement requires Apple's then-current entitlement update/approval where applicable. Do not silently switch from the approved PSP to another processor because the preferred provider is unavailable.

Account compromise protections, entitlement restoration, chargeback review, and lawful suspension/termination rules continue to apply independently of this payment program.

## 15. Mandatory consumer rights remain intact

Apple's South Korea entitlement is a platform/commercial framework, not a waiver of mandatory consumer law.

Nothing in this gate permits CK-Labs to waive a non-waivable right concerning conformity of digital content/services, required updates, statutory refunds/price reductions/termination/damages, withdrawal/cancellation where applicable, unfair commercial practices, privacy/data protection, payment authorization, or mandatory liability.

Where the PSP, Apple terms, TycoonX policy, and mandatory law differ, apply the legally required consumer protection and route operational responsibilities correctly.

## 16. Regression matrix before enabling the South Korea entitlement binary

At minimum test and retain evidence for:

1. South Korea entitlement binary is available only on the South Korea App Store storefront.
2. Global TycoonX binary does not accidentally contain/activate the South Korea external-purchase entitlement.
3. Entitlement bundle ID and Apple approval match production.
4. `SKExternalPurchase` contains `KR` and no unauthorized country expansion.
5. `canMakePayments == false` blocks the payment flow.
6. Non-South-Korea storefront fails closed.
7. Apple-required External Purchase notice is presented correctly.
8. User cancellation of the Apple notice does not continue to the PSP.
9. Apple IAP is not offered in the same entitlement-enabled app while the current mutual-exclusion rule applies.
10. Only the Apple-approved PSP is reachable.
11. A non-approved Xsolla configuration cannot be enabled by remote flag.
12. Payment flow is native and does not silently fall back to a webview.
13. Client success without authoritative payment confirmation grants nothing.
14. Duplicate PSP callback grants exactly once.
15. Pending/failed payment grants nothing.
16. Refund/reversal/chargeback adjusts only the originating transaction/value subject to mandatory law.
17. Apple reporting retry does not grant or revoke user value.
18. Purchased Diamonds survive ordinary passage of time.
19. 30-Day VIP remains one-time and non-renewing.
20. Closed Lifetime VIP window cannot be reopened by stale catalog/cache/app version.
21. Current tax/currency/final-total display is correct before confirmation.
22. Support routes PSP transaction issues to the correct provider path rather than Apple's unrelated IAP refund flow.
23. PSP outage/security emergency disables new purchases without deleting valid entitlements.
24. PSP replacement cannot activate until Apple approval/entitlement metadata is updated where required.
25. Monthly Apple report can be reconciled to PSP payments, TycoonX entitlements, refunds, and later corrections without double counting.

## 17. Production evidence bundle

Before enabling the South Korea entitlement build, retain the current Apple source snapshot/review date; entitlement approval confirmation; approved bundle ID/App ID capability; signed production entitlement/provisioning evidence; App Store Connect South Korea-only availability evidence; Apple-approved PSP identity; required disclosure/native-payment screenshots; StoreKit/storefront tests; server idempotency/reconciliation evidence; refund/reversal/chargeback tests; product catalog evidence; tax/final-price evidence; support process; Apple reporting owner/calendar; and rollback owner.

## 18. Release decision

**GO** only if every P0 item above is evidenced against Apple's current South Korea entitlement terms and the exact production architecture.

**NO-GO** if CK-Labs lacks entitlement approval for the exact South Korea bundle ID; the app is not South Korea-only; the binary combines Apple IAP with the mutually exclusive entitlement; Xsolla/another PSP is not the approved provider; more than one PSP is reachable; the flow is an ordinary webshop/webview reuse instead of the approved native architecture; StoreKit disclosure/storefront rules are bypassed; client UI is treated as payment authority; Apple reporting cannot be reconciled; prices/taxes/product contents are misleading; product invariants are broken; or mandatory consumer rights would be waived/misrouted.

If this program is not commercially justified, the safer default is to keep the ordinary Apple In-App Purchase build in South Korea rather than operating a second South Korea-only binary, separate PSP approval, monthly Apple reporting, and a distinct support/refund stack.
