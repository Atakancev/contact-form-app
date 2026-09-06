# TycoonX Apple Japan Alternative Payment Release Gate

**Last reviewed: September 6, 2026**

Owner: CK-Labs  
Scope: TycoonX iPhone distribution on the Japan App Store storefront when CK-Labs considers Apple In-App Purchase together with an alternative payment processor or an out-of-app offer such as the official TycoonX webshop using Xsolla.

This is an internal production-compliance gate. It does not itself enable alternative payments, change the public TycoonX legal documents, or authorize a payment flow merely because the technical code exists.

TycoonX is a fully released service. If CK-Labs does not intentionally enroll, receive the required entitlement, implement the current StoreKit flow, and pass this gate, the Japan App Store build must fail closed to the ordinary approved Apple In-App Purchase path.

## 1. Current Apple Japan checkpoint

Apple currently documents that, beginning with iOS 26.2, apps distributed on the Japan App Store can offer additional payment options for digital goods and services. The documented options include:

- Apple In-App Purchase;
- in-app payment using an alternative payment processor; and
- an out-of-app offer that directs the user to a website in a web browser, with or without an actionable link.

Using the alternative-payment options requires the **StoreKit External Purchases or Offers Entitlement** and the current Japan business terms. The entitlement profile is documented as compatible only with apps on the **Japan storefront on iPhone running iOS 26.2 or later**.

Current Apple source of truth:

- https://developer.apple.com/support/payment-options-on-the-app-store-in-japan
- https://developer.apple.com/support/app-distribution-in-japan/

Do not infer future Apple requirements from this September 6, 2026 snapshot. Recheck the live Apple documentation and accepted Apple Developer Program License Agreement before each material implementation or submission because APIs, disclosure sheets, fee structures, reporting methods, and eligibility rules can change.

## 2. Enrollment and entitlement are P0 prerequisites

Do not show or activate an alternative payment option in the Japan App Store build merely because TycoonX has a webshop.

Before release, retain evidence that:

1. the Account Holder has accepted the then-current Apple Developer Program License Agreement and Japan business terms;
2. the TycoonX App ID is eligible for and configured with the required StoreKit External Purchases or Offers Entitlement;
3. the entitlement metadata uses the current allowed-region key and the single Japan ISO 3166-1 alpha-2 value `jp` as required by Apple;
4. the signed production binary contains the intended entitlement and provisioning profile;
5. the exact alternative payment architecture was described accurately to App Review; and
6. any alternative payment service provider named in review notes is actually production-ready for the intended flow.

A development entitlement, stale provisioning profile, local feature flag, successful sandbox redirect, or approved webshop by itself is not production authorization.

If any prerequisite is unknown, unavailable, revoked, rejected, or inconsistent with the current Apple terms, hide the alternative payment route and keep the permitted Apple In-App Purchase route available.

## 3. Japan storefront and device-version boundary

This gate is **not** a worldwide steering permission.

The alternative-payment entitlement described by Apple is limited to the Japan storefront and iPhone running iOS 26.2 or later. TycoonX must therefore evaluate the current StoreKit/storefront eligibility at runtime rather than using a player's physical location as a substitute.

Do not treat any of these as sufficient proof of Japan eligibility:

- GPS location;
- IP geolocation;
- device language;
- SIM country;
- TycoonX profile country;
- billing address stored by CK-Labs;
- a prior storefront cached indefinitely; or
- the fact that the player selected Japanese as the TycoonX language.

A player can physically be in Japan while using a different App Store storefront, or can use the Japan storefront while temporarily elsewhere. The Apple storefront/program state is the relevant platform boundary.

If current StoreKit eligibility cannot be established, fail closed. Re-evaluate after storefront/account changes and before presenting a payment choice that depends on the Japan entitlement.

## 4. Apple In-App Purchase must remain available and at least as prominent

Apple currently requires Apple In-App Purchase to be presented at the same time when the app:

- offers in-app payments using an alternative processor; or
- provides an actionable link that sends the user to a website to buy digital goods or services.

For the applicable Japan flow:

- Apple In-App Purchase must be available on every screen where TycoonX merchandises a digital good/service for purchase and offers a payment option;
- Apple In-App Purchase must be displayed at least as prominently as the alternative option considering layout, wording, font, size, color, and the overall experience;
- use Apple-provided In-App Purchase artwork where Apple requires it and do not fabricate a TycoonX-localized imitation of Apple artwork;
- do not use color, wording, animation, default selection, button placement, or friction to make the alternative option look like the required/default choice while demoting Apple In-App Purchase; and
- do not make Apple In-App Purchase intentionally slower, unreliable, hidden, or materially harder to complete.

TycoonX may present truthful different prices or benefits where Apple permits them, but any comparison must use the actual current offer, currency, taxes, bundle contents, and eligibility. Do not claim a percentage saving by comparing materially different Diamond quantities or VIP benefits as though the products were identical.

## 5. App Store product-page metadata must not advertise the alternative purchase route

Apple currently states that an app's App Store product page in this Japan program may not include information about purchasing on the developer website or with alternative payment processing.

Therefore do not place Japan alternative-purchase messaging in globally shared or Japan App Store metadata such as:

- app description;
- promotional text;
- screenshots;
- preview videos;
- subtitle; or
- other product-page creative,

unless a then-current Apple rule expressly allows that exact metadata use.

This is separate from what an eligible in-app screen may present after the app is installed.

## 6. StoreKit flow order for an actionable alternative purchase

For the current Apple-documented flow, before TycoonX initiates an actionable alternative purchase path it must follow the current StoreKit requirements in order.

At minimum, the September 6, 2026 implementation gate requires:

1. check `canMakePayments` before starting a purchase/payment-information flow;
2. check `ExternalPurchaseCustomLink.isEligible` before offering the external purchase action; and
3. when the user taps an alternative payment button, invoke the Apple-required disclosure using the current `showNotice` flow before routing the user onward.

Do not bypass the disclosure because the user used the webshop before, because TycoonX already displayed its own warning, or because Xsolla will display another checkout notice. StoreKit is authoritative for whether Apple's required system/program disclosure is needed.

Apple's page currently notes a transition from a manually designed disclosure on iOS 26.2 toward a system-provided disclosure in a future iOS release. That means the implementation must be version-aware and must follow the then-current StoreKit API rather than permanently hard-coding a September 2026 screenshot or modal copy.

If StoreKit reports the user ineligible, payments unavailable, the disclosure flow fails, or required state is unavailable, do not silently bypass Apple and open the webshop anyway.

## 7. Preferred TycoonX/Xsolla architecture and embedded-payment caution

The existing official TycoonX commercial architecture uses the CK-Labs TycoonX webshop with Xsolla. For Japan, the lower-risk implementation is to keep that architecture explicit:

**TycoonX iOS app → eligible Apple-controlled disclosure → official CK-Labs/TycoonX web purchase surface → Xsolla checkout → authoritative server-side payment confirmation → TycoonX entitlement grant.**

Apple also permits in-app alternative processing under the Japan program, but TycoonX must not assume that the existing webshop/Xsolla integration is automatically approved for an embedded in-app processor flow.

Before embedding an alternative processor inside the app, separately verify:

- Apple entitlement/review requirements for that exact architecture;
- whether the selected Xsolla integration is intended and approved for that architecture;
- the PSP's current PCI obligations and Apple review requirements;
- tax, refund, unauthorized-payment, privacy, and support responsibilities; and
- any StoreKit reporting or disclosure differences from the out-of-app web flow.

Do not silently convert a browser-based webshop integration into an embedded card/payment form.

## 8. PSP, support, unauthorized-transaction, refund, and tax readiness

Apple currently requires the named alternative PSP used for the Japan flow to meet the program's payment/security requirements, including Level 1 PCI compliance for card handling, and to provide an appropriate customer-service process that covers unauthorized-transaction disputes, subscription management where applicable, and refund requests.

Before submitting or enabling the alternative TycoonX option, record the actual production responsibility matrix for:

- payment authorization and settlement;
- card/payment credential handling;
- fraud screening;
- unauthorized-payment disputes;
- refunds and reversals;
- chargebacks;
- VAT/consumption tax and other transaction taxes;
- receipts and transaction history;
- customer support;
- privacy notices and controller/processor roles; and
- TycoonX entitlement delivery/unwind.

Apple states that when an alternative payment method is used, Apple does not provide the same refund, purchase-history, subscription-management, Family Sharing, or Report a Problem support that accompanies Apple In-App Purchase. TycoonX must therefore never tell an Xsolla/webshop purchaser to rely on Apple's purchase history or Apple refund route for that Xsolla transaction.

Conversely, Xsolla must not be presented as able to refund or reverse an Apple In-App Purchase transaction.

## 9. Child and teen purchasing controls are a P0 gate

Apple's current Japan requirements add specific child-safety conditions for alternative payment options.

For an app outside the Kids category, the current Apple rules require support for parental purchasing controls and parental consent when offering alternative payment options. In particular, Apple currently documents that:

- for users **under 13**, an in-app alternative payment flow may be offered only behind a parental gate, and an out-of-app website purchase offer must not be provided; and
- for users **13 through 17**, an in-app alternative payment flow or out-of-app website offer may be provided only behind a parental gate.

The TycoonX implementation must use current Apple-provided eligibility/age/payment-control signals where available and must not infer adulthood merely from a self-entered profile age when Apple requires a platform control.

If CK-Labs cannot reliably satisfy the current parental-control requirement for an account/session, fail closed to the permitted Apple-controlled purchase experience rather than exposing an unprotected Xsolla/webshop route.

Do not use a payment workaround to bypass Ask to Buy, Screen Time, parental gates, or another Apple safety control.

## 10. Reporting, commissions, and audit evidence

Alternative payment does **not** mean commission-free or reporting-free.

Apple's current Japan page states that qualifying alternative transactions are subject to the applicable Apple business terms and that developers must track and report alternative-payment activity for fee calculation. The current snapshot includes:

- reporting of refunds, corrections, renewals, one-time purchases, and transactions that did not result in a purchase;
- monthly reporting within 15 days after the end of the calendar month;
- use of the External Purchase Server API for apps running iOS 26.4 and later; and
- a different Apple-directed reporting process for apps running iOS 26.2 and iOS 26.3.

For actionable out-of-app links, Apple currently describes a store-services commission for qualifying sales occurring within the current attribution period after the link tap. The September 6, 2026 Apple page describes that period as **7 days**.

The exact fee percentages, exemptions, program participation, tax calculation, and reporting schema are time-sensitive commercial terms. Do not hard-code them into player-facing TycoonX legal copy or accounting logic without a current Apple source and the actual CK-Labs program status.

The server-side ledger must be able to correlate, where relevant:

- TycoonX account;
- internal order ID;
- product/SKU and offer version;
- Apple storefront/program eligibility;
- Apple external-purchase token/identifier required by the current API;
- link/disclosure timestamp where relevant;
- Xsolla transaction ID;
- payment currency and final total;
- authoritative payment state;
- entitlement grant/revocation/restoration event;
- refund/correction/reversal state;
- Apple reporting status and timestamp; and
- any later reconciliation correction.

Reporting retries must be idempotent. A failed Apple report must not cause TycoonX to grant the user twice, charge the user twice, or reverse an otherwise valid entitlement merely to make the reporting ledger balance.

## 11. Server authority and entitlement delivery

A browser redirect, `success` page, deep link back into TycoonX, client callback, StoreKit disclosure completion, or Xsolla UI message is not sufficient proof that an alternative payment succeeded.

For the TycoonX webshop/Xsolla route:

- grant paid value only after the configured authoritative server-side Xsolla payment state confirms the transaction;
- validate webhook/authenticity requirements server-side;
- make fulfillment idempotent;
- map later refund, reversal, chargeback, and correction events to the originating transaction;
- never replay the entitlement merely because the app reopens; and
- keep Apple reporting state separate from Xsolla payment authority and TycoonX entitlement authority.

A pending/failed Xsolla transaction grants no Diamonds or VIP. An Apple IAP purchase and an Xsolla purchase are separate transactions even if they buy the same TycoonX product.

## 12. Product-specific invariants

### Purchased Diamonds

- Purchased Diamonds do not expire solely because time passes.
- Do not duplicate Diamonds because both the browser return and Xsolla webhook were processed.
- A refund/reversal may correct only the affected transaction/value as permitted by applicable law; do not remove unrelated legitimate Diamonds.
- Do not market a web price as cheaper than Apple unless the actual quantity, taxes, currency, and final payable total support the comparison.

### One-time 30-Day VIP

- 30-Day VIP remains a **one-time, non-renewing 30-day entitlement**.
- An alternative payment route must not silently turn it into a recurring subscription.
- Restoring/reconciling a valid transaction must not restart or extend the original 30-day clock unless a new valid purchase or mandatory remedy legally requires it.
- If CK-Labs later launches a recurring product, that product needs its own compliant recurring-payment, cancellation, price-change, and notice framework.

### Limited-time Lifetime VIP

- Lifetime VIP remains a **limited-time promotional offering available only during selected genuine sales windows**.
- It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability for purchase.
- An Apple Japan alternative-payment path must respect the genuine current sales-window state server-side.
- A stale cached web link, old app version, browser history, or deep link must not reopen a closed Lifetime VIP offer.
- A later sales window may lawfully use a different price for future purchases, but completed purchases are not retroactively repriced except where mandatory law requires otherwise.

## 13. Consumer-law and provider-role boundary

The Apple Japan payment program is a platform permission/business framework. It is not a waiver of mandatory Japanese or other applicable consumer rights.

TycoonX Support must identify the actual transaction and contracting/payment channel before giving refund guidance. At minimum distinguish:

- Apple IAP transaction;
- Xsolla/webshop transaction;
- in-app alternative-processor transaction if CK-Labs ever implements one;
- failed/pending attempt that never became a paid transaction;
- statutory remedy or withdrawal/cancellation right where applicable;
- provider discretionary refund;
- chargeback/payment reversal; and
- TycoonX entitlement correction.

Do not use Apple program wording to disclaim a remedy that mandatory law gives the consumer, and do not promise a remedy that belongs exclusively to another transaction/provider without verifying responsibility.

## 14. Privacy and security boundary

Do not send unnecessary TycoonX profile, gameplay, device, or payment data to Xsolla or Apple merely because an external-purchase program exists.

External URLs must not expose passwords, raw payment credentials, authentication secrets, unrelated profile data, or sensitive identifiers in query strings. Use purpose-limited transaction references and server-side correlation.

Payment-provider and Apple reporting logs must follow the TycoonX Privacy Policy, retention controls, security controls, and applicable law. Do not retain full payment credentials inside the TycoonX backend.

## 15. Emergency disable and provider/rule changes

The Japan alternative-payment route must be remotely disableable without deleting valid user entitlements.

Disable/fail closed if, for example:

- Apple revokes or changes the entitlement;
- the Apple program becomes unavailable for the app;
- the current StoreKit APIs fail materially;
- the Xsolla route is unavailable or security-compromised;
- the required disclosure/parental-control flow cannot be satisfied;
- CK-Labs cannot meet a reporting deadline reliably;
- a tax/payment-provider configuration becomes invalid; or
- App Review or current Apple rules require remediation.

Disabling new purchases must not expire purchased Diamonds, shorten an active one-time 30-Day VIP, revoke a valid Lifetime VIP, or prevent mandatory refund/conformity remedies for earlier transactions.

## 16. Production regression matrix

Before enabling Apple Japan alternative payments, test at least:

1. Japan storefront + iPhone + supported iOS + valid entitlement + eligible user;
2. Japan physical location but non-Japan storefront;
3. Japan storefront with iOS below the program minimum;
4. storefront changes while the TycoonX purchase view is open;
5. `canMakePayments == false`;
6. `ExternalPurchaseCustomLink.isEligible == false`;
7. disclosure flow fails or is cancelled;
8. alternative button never bypasses the disclosure by opening a browser directly;
9. Apple IAP remains available on every relevant purchase screen and is at least as prominent;
10. App Store product-page metadata contains no prohibited webshop/alternative-payment promotion;
11. under-13 user is never given an out-of-app website purchase offer;
12. under-13 allowed alternative in-app flow is blocked until the required parental gate succeeds;
13. age 13-17 alternative purchase route is blocked until the required parental gate succeeds;
14. Xsolla browser returns `success` before server payment confirmation and TycoonX grants nothing;
15. duplicate Xsolla webhook grants exactly once;
16. Xsolla refund/reversal unwinds only the affected transaction;
17. Apple IAP refund does not mutate an unrelated Xsolla transaction;
18. Xsolla refund does not mutate an unrelated Apple IAP transaction;
19. Apple reporting retry does not replay fulfillment;
20. iOS 26.4+ transaction uses the then-current External Purchase Server API reporting path;
21. iOS 26.2/26.3 follows the then-current Apple legacy/reporting instruction rather than pretending the same API is available;
22. purchased Diamonds retain unrelated legitimate value after a different transaction is refunded;
23. 30-Day VIP remains one-time/non-renewing and does not restart on reconciliation;
24. Lifetime VIP closed sales window cannot be reopened by stale URL/deep link;
25. alternative-payment emergency disable leaves existing entitlements intact; and
26. current Apple terms are rechecked immediately before App Review submission.

## 17. P0 release blockers

Do not enable the Apple Japan alternative-payment route if any of these is true:

- no verified current Apple entitlement/business-term acceptance;
- entitlement/storefront/device-version eligibility is guessed from IP, GPS, language, or TycoonX profile country;
- Apple IAP is absent, hidden, degraded, or less prominent where Apple currently requires simultaneous presentation;
- the App Store product page advertises the prohibited alternative purchase route;
- the app can open the alternative payment route without the required StoreKit eligibility/disclosure sequence;
- parental purchasing controls required by Apple are missing or bypassable;
- CK-Labs cannot identify/support/refund the alternative transaction through the correct provider route;
- PSP readiness or required unauthorized-transaction/refund support is not verified;
- Xsolla client/browser state can grant an entitlement without authoritative server confirmation;
- Apple transaction reporting is missing, non-idempotent, or cannot meet the current reporting requirement;
- Apple reporting state, Xsolla payment state, and TycoonX entitlement state are collapsed into one unreliable boolean;
- a refund/chargeback can remove unrelated legitimate purchases;
- 30-Day VIP can become recurring accidentally;
- a stale link can reopen a closed Lifetime VIP window; or
- TycoonX copy claims the alternative route eliminates mandatory consumer rights.

## 18. Canonical/localization rule

This gate is operational/platform hardening only. It does not materially change the canonical player-facing Terms of Service, Purchases & Refunds Policy, Privacy Policy, or Community Standards.

If CK-Labs later changes public contractual meaning concerning Japan alternative payments, Apple-versus-Xsolla responsibilities, product pricing/availability, refunds, tax handling, consumer rights, Diamonds, 30-Day VIP, or Lifetime VIP, update the English canonical document first and then synchronize the affected document type across all 25 locales before the localization tracker remains complete.
