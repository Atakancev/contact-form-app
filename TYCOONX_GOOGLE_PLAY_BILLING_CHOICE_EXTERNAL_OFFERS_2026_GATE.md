# TycoonX Google Play Billing Choice & External Offers 2026 Gate

**Status:** Release/commercial implementation gate. This document does not by itself prove that the live Google Play configuration is compliant.

**Reviewed:** September 11, 2026.

## Purpose

TycoonX is a fully released game. Its Android purchase implementation must keep Google Play policy/program eligibility, German/EU consumer law, Xsolla payment processing, and CK-Labs entitlement fulfillment as separate but coordinated layers.

Google changed important billing-choice and service-fee rules for the EEA, United Kingdom, and United States in 2026. A generic assumption that an Android game may always show an Xsolla/webshop link, or that using Xsolla by itself creates permission to bypass Google Play Billing, is unsafe.

This gate is deliberately implementation-focused. It does not change the canonical TycoonX Terms of Service or Purchases & Refunds Policy unless later verification reveals a material mismatch in the player-facing legal meaning.

## Current official Google Play framework checked on September 11, 2026

Google currently documents multiple opt-in payment/linking programs rather than one universal rule:

1. **Billing choice programme.** In available markets, an eligible app/game may offer Google Play Billing alongside either an alternative in-app billing system or external web links, but only after programme enrollment and implementation of the required Google APIs and UX. Google currently lists the United Kingdom and EEA for this programme, with different existing programs also remaining available in some markets.
2. **EEA alternative billing without user choice.** An eligible registered business may use an alternative in-app billing system for EEA users under the separate EEA programme, subject to enrollment, user-protection, reporting/API, support, and fee requirements.
3. **EEA external offers programme.** An eligible app/game may direct EEA users to approved external offers only after enrollment/approval and use of the external-offers APIs. Under that programme, Google currently says an enrolled Play-managed app may not combine those external-offer links with Google Play Billing or user-choice billing; it must follow the programme's alternative-billing configuration.
4. **United States programs.** Current US alternative-billing and external-content-link rules are separate from EEA rules. US eligibility must not be copied into Germany/EEA routing or vice versa.
5. **Ordinary Google Play Billing.** If TycoonX is not enrolled in an applicable alternative/external-link programme for a user/market, the safe default is the ordinary Google Play payment path required by the then-current Payments policy.

Google's current billing-choice page requires programme enrollment before offering the alternative option, choice between Google Play Billing and the eligible alternative route, applicable customer-support/refund paths, external-link destination controls, billing-choice API integration, and reporting of authorised alternative transactions to Google Play within 24 hours. Eligibility and requirements are expressly subject to change.

Google's current EEA external-offers page separately requires enrollment/approval, EEA-only routing, the external-offers APIs, customer support and unauthorised-transaction dispute handling, applicable transaction reporting, and programme-specific service fees. It also states that the external-offers programme is open to games as well as apps.

### Primary Google references

- Google Play Console Help, **Enrolling in the billing choice programme**: https://support.google.com/googleplay/android-developer/answer/17161464
- Google Play Console Help, **Offering an alternative billing system for users in the European Economic Area (EEA)**: https://support.google.com/googleplay/android-developer/answer/12348241
- Google Play Console Help, **Enrolling in the external offers programme**: https://support.google.com/googleplay/android-developer/answer/14372887
- Google Play Console Help, **Service fees**: https://support.google.com/googleplay/android-developer/answer/112622

These pages are operational references, not permanent contractual promises by Google. Before a release that changes Android payment routing, recheck the current Google Play Console programme status and current Google documentation.

## P0 rule: no external Xsolla/webshop route without authoritative programme eligibility

TycoonX must not decide that an Android user may be sent to an Xsolla/webshop checkout merely because:

- the user appears to be in Germany or another EEA country;
- an IP address or device locale suggests an eligible region;
- Xsolla supports the user's country;
- the webshop itself is legally available there;
- another platform permits external payments;
- an older Google policy page once permitted a similar flow; or
- CK-Labs would prefer a lower payment-processing cost.

Before displaying or activating an in-app external purchase route from a Google Play-distributed build, the system/release configuration must have authoritative evidence that the specific TycoonX app/package and relevant market are enrolled/configured for the applicable current Google Play programme.

If the required enrollment/configuration cannot be confirmed, fail closed to the compliant ordinary Google Play path or hide/disable the external route. Do not guess.

## P0 rule: Xsolla does not create Google Play policy eligibility

Xsolla may process an authorised web or alternative payment, handle payment methods, fraud screening, tax/VAT/FX presentation, chargebacks, and refunds according to the configured commercial relationship. That does **not** by itself make an in-app external link or alternative checkout permissible in a Google Play-distributed TycoonX build.

The roles must stay separated:

- **Google Play** controls Play programme enrollment, relevant Play Billing/external-link APIs, programme UX, transaction-reporting requirements, Play service fees, store policy, and Play-side regional eligibility.
- **Xsolla** can process the authorised non-Play payment flow configured by CK-Labs and provide its payment/refund/reversal records.
- **CK-Labs** chooses the TycoonX product/offer, controls its own app/webshop presentation and entitlement fulfillment, must implement the correct regional/program routing, and must reconcile the correct payment source without deleting unrelated valid value.

## Product mapping must remain exact

The Android commercial flow must preserve the same product distinctions as the canonical TycoonX legal framework:

### Diamonds

- Diamonds are virtual currency used inside TycoonX, not cash, a bank deposit, an investment, or a transferable real-world monetary account.
- Purchased Diamonds and promotional/free/earned Diamonds must remain source-distinguishable for refund/reversal reconciliation where technically necessary.
- Purchased Diamonds must not expire merely because time passes.
- A refund or chargeback of one transaction must not blindly erase unrelated earned, promotional, or separately purchased Diamonds.

### One-time 30-Day VIP

- Current 30-Day VIP is a **one-time, non-renewing 30-day entitlement**.
- Checkout and post-purchase messaging must not describe it as a subscription that renews automatically.
- If multiple valid VIP sources overlap or stack, entitlement provenance must be source-aware so reversing one transaction does not remove time belonging to another valid source.

### Lifetime VIP

- Lifetime VIP is a **limited-time promotional one-time offering** available only during selected genuine sales windows.
- It may be withdrawn from future sale and may never return.
- It creates no expectation that Lifetime VIP will be continuously available for purchase.
- Its existence does not promise that TycoonX will operate forever; mandatory consumer rights remain intact.
- A refund/reversal of another product or another VIP source must not revoke an independently valid Lifetime VIP.

## Regional routing and regional-price abuse

Google Play programme eligibility and TycoonX commercial pricing are related but different questions.

CK-Labs may use genuine country/platform/channel pricing and may change future Diamond bundle prices/content, VIP prices, currencies, regional prices, and future promotions subject to applicable law. Different prices can legitimately result from tax, VAT, FX, provider fees, platform rules, or genuine channel promotions.

However:

- do not use a self-declared profile country alone to authorize an otherwise restricted payment route;
- do not use VPN/IP geolocation alone as the authoritative proof of Google programme eligibility;
- do not intentionally help users evade regional restrictions or regional prices;
- do not punish an ordinary user merely because legitimate provider region, travel, residence, payment method, account country, or network location differ;
- use provider/store-authoritative region/program signals where available and handle ambiguous cases conservatively;
- regional-price abuse requires reliable evidence of deliberate circumvention, not just a price difference or unusual location signal.

## Price presentation and promotions

For every authorised route, the consumer must receive the legally required total-price information before the binding transaction.

TycoonX may have different future prices across Google Play, the CK-Labs webshop/Xsolla, countries, currencies, and genuine sale windows. The following rules remain mandatory:

- the final total price shown before confirmation governs the completed transaction, subject to mandatory law and correction of legally relevant errors;
- completed one-time purchases are not retroactively repriced merely because a later price, tax, FX rate, channel price, or promotion differs;
- a later price decrease does not automatically create a refund, credit, or price-match right unless mandatory law says otherwise;
- a later increase does not create an additional charge on an already completed one-time purchase;
- Lifetime VIP may have different genuine prices in different genuine sales windows;
- countdowns, crossed-out prices, savings statements, reference prices, scarcity statements, and coupon claims must be genuine and not misleading;
- a TycoonX web/Xsolla offer must not be described as cheaper than Google Play unless that statement is true, current, legally supportable, and permitted in the specific Google programme/UX context;
- do not hide mandatory taxes/fees or create a false comparison by comparing tax-inclusive and tax-exclusive totals.

## Programme-specific UX must not be improvised

If TycoonX uses Google's billing-choice programme, follow the then-current required Google information/choice UX and APIs. Google currently allows an eligible developer to use Google-rendered choice UX or, where permitted, its own compliant choice screen subject to Google's guidelines and Play Console configuration.

If TycoonX uses the EEA external-offers programme, the external-offer link must follow that programme's API/information-screen and destination requirements. Do not reuse a billing-choice UX as though every Google programme were interchangeable.

The app should have a safe remote/configuration fallback so a programme rule change can disable a now-ineligible external route without disabling access to previously acquired TycoonX entitlements.

## External destination rules

Where a current Google programme permits an external link to the official TycoonX webshop:

- link only to the intended CK-Labs-owned/authorised TycoonX offer destination permitted by the applicable programme;
- clearly identify the destination and purpose before leaving the app where Google requires it;
- do not place unprotected personal data in the URL;
- do not redirect deceptively to a different offer/destination;
- use HTTPS and normal security controls;
- keep legal/support/refund information accessible;
- preserve the exact product identity and recipient/account to which the entitlement will be granted;
- do not silently substitute a different Diamond amount, VIP duration, or Lifetime VIP product at checkout.

## Payment state and entitlement state are not the same thing

For Google Play and Xsolla alike, TycoonX must distinguish at least:

1. checkout/order started;
2. payment pending;
3. payment authorised/paid;
4. entitlement fulfillment attempted;
5. entitlement successfully granted;
6. refund/cancellation/reversal/chargeback initiated;
7. refund/cancellation/reversal authoritative;
8. entitlement correction completed; and
9. refund reversal/restoration, where applicable.

A browser return, client callback, success screen, or locally cached flag must not substitute for the authoritative server/provider payment state.

Pending or failed payments must not be treated as completed paid entitlements. Duplicate callbacks must be idempotent.

## Cross-channel refund and reversal isolation

A Google Play transaction and an Xsolla transaction are different authoritative sources.

Examples:

- If a player buys Diamonds through Google Play and a different Xsolla Diamond transaction is later refunded, remove/reconcile only the value attributable to the Xsolla source. Do not invalidate the Google Play purchase.
- If a player buys one 30-Day VIP through Google Play and later another 30-Day VIP through Xsolla, refunding either source must preserve the other valid source and recompute effective VIP from authoritative remaining sources.
- If the player already owns valid Lifetime VIP, an unrelated refund of a 30-Day VIP or Diamond purchase must not remove Lifetime VIP.
- A Google Play purchase token/order must not be used as proof that an Xsolla payment succeeded, and an Xsolla invoice/transaction must not be used as proof that Google Play Billing succeeded.

If paid Diamonds from a refunded source have already been consumed, use an attributable, bounded and documented reconciliation/debt model where lawful rather than deleting unrelated earned/promotional value or blindly driving unrelated balances negative.

## Reporting and records

Where a Google programme requires reporting of alternative/external transactions, reporting must be server-authoritative, idempotent, timely, and linked to the exact transaction/order.

The minimum durable source record for a paid TycoonX grant should be capable of resolving:

- channel/provider;
- Google programme/routing mode where relevant;
- provider transaction/order/purchase token identity;
- TycoonX product/SKU;
- purchaser identity;
- actual recipient identity for a gift, if different;
- amount/quantity or VIP duration granted;
- relevant country/market/program context;
- authoritative payment state;
- refund/reversal/chargeback state;
- entitlement correction/restoration state; and
- idempotency evidence.

Do not use a mutable aggregate `vip=true` style cache as the sole proof that a particular paid VIP transaction remains valid.

## Old/unsupported app versions and policy changes

A stale Android client must not be able to bypass current Google routing by retaining an old external-payment button or old programme assumptions.

If Google changes eligibility, APIs, fees, required UX, or a programme is suspended/withdrawn:

1. fail closed for new purchase routing if eligibility is uncertain;
2. disable or replace the affected payment entry point through an appropriate compliant release/configuration mechanism;
3. preserve existing valid paid entitlements;
4. do not retroactively charge a player merely because provider fees later change;
5. continue refund/reversal reconciliation for historical transactions through their authoritative source; and
6. update legal/commercial wording only when the player-facing legal meaning materially changes.

A provider outage or rule change does not permit CK-Labs to waive mandatory German/EU consumer rights.

## German/EU consumer law remains separate from Google programme permission

Google Play programme enrollment is not a substitute for compliance with mandatory consumer law.

For a CK-Labs/Xsolla-controlled consumer checkout, independently verify the applicable requirements for total-price presentation, electronic order formation, withdrawal rights/function where applicable, digital-content/service consent rules, durable-medium confirmation, conformity, updates, remedies, minors, accessibility, privacy/device access, and dispute/support information.

Conversely, satisfying German consumer law does not itself create permission under Google Play policy to place an external purchase route in a Play-distributed app.

## No false recurring-product treatment

Current 30-Day VIP and Lifetime VIP are one-time products. Do not apply recurring subscription concepts, renewal reminders, recurring price-change consent, or cancellation mechanics to them merely because some Google documentation discusses subscriptions alongside other digital transactions.

If CK-Labs introduces a recurring product in the future, it requires a separate commercial/legal implementation review covering renewal, recurring price changes, notices, cancellation, store rules, and mandatory consumer rights.

## Production verification checklist

Do not mark this gate ready until each applicable item is evidenced for the live Android release:

- [ ] Confirm whether the TycoonX package is enrolled in any current Google billing-choice, EEA alternative-billing, EEA external-offers, US alternative-billing, or US external-content-link programme.
- [ ] Record the exact countries/markets and effective configuration for each enrolled programme.
- [ ] Confirm whether Google Play Billing, alternative in-app billing, or external web links are permitted together under that exact programme.
- [ ] Confirm the app implements the required current Google API for the chosen programme.
- [ ] Confirm required Google information/choice screens are rendered correctly.
- [ ] Confirm authorised alternative/external transactions are reported to Google within the current required timeframe where applicable.
- [ ] Confirm applicable Play service-fee reporting/invoicing is configured.
- [ ] Confirm ineligible countries/users cannot see or activate an external route.
- [ ] Confirm ambiguous/unknown programme state fails closed rather than guessing.
- [ ] Confirm Xsolla/webshop links identify the intended destination and do not leak personal data in URLs.
- [ ] Confirm Diamond, 30-Day VIP and Lifetime VIP product definitions match canonical legal wording.
- [ ] Confirm source-aware refund/reversal handling across Google Play and Xsolla.
- [ ] Confirm pending/failed payments do not grant completed entitlements.
- [ ] Confirm duplicate callbacks cannot double-grant value.
- [ ] Confirm a policy/programme change can disable external routing without deleting existing entitlements.
- [ ] Confirm old app versions cannot keep an unauthorised payment route alive indefinitely.
- [ ] Confirm German/EU checkout and mandatory consumer-rights controls are independently satisfied.

## Mandatory tabletop/regression scenarios

1. **German user, no verified Google programme enrollment:** TycoonX does not expose an Xsolla/web external purchase route from the Play build; the safe Google Play route remains available if otherwise configured.
2. **German user, verified billing-choice enrollment:** only the programme-approved choice UX/routes appear and the required Google API/reporting flow is used.
3. **German user, verified external-offers enrollment:** TycoonX follows the external-offers programme rules rather than combining incompatible Google Play Billing/user-choice UX with external-offer links.
4. **US programme only:** US eligibility does not unlock the same external route for a German user.
5. **Region mismatch:** profile country says Germany but authoritative Play/program signals are not eligible; the app fails closed instead of relying only on profile/IP/locale.
6. **Legitimate travel/move:** differing IP, payment method and account-region signals trigger conservative routing/review, not automatic punishment for regional-price abuse.
7. **Google Diamond purchase + Xsolla Diamond refund:** only the attributable Xsolla value is reconciled; the valid Google purchase survives.
8. **Xsolla Diamond purchase + Google refund:** only the attributable Google source is reconciled; unrelated Xsolla and earned/promotional value survives.
9. **Google 30-Day VIP + Xsolla 30-Day VIP:** reversing one source preserves the other valid source/duration.
10. **Lifetime VIP + unrelated refund:** an independently valid Lifetime VIP survives an unrelated Diamond or 30-Day VIP refund.
11. **Pending Xsolla transaction:** no completed paid entitlement is granted until authoritative paid state exists.
12. **Duplicate webhook/browser callback:** one transaction grants value exactly once.
13. **Refund reversal:** a previously corrected entitlement is restored exactly once where the provider reverses the refund and restoration is legally/technically appropriate.
14. **External offer tax/FX:** the legally required final total is shown before confirmation; later tax/FX movement does not retroactively reprice the completed purchase.
15. **Lifetime VIP promotion:** a genuine sales-window countdown is not falsely described as a permanent everyday price reduction and does not imply Lifetime VIP will always remain for sale.
16. **Web price comparison:** TycoonX does not claim the webshop is cheaper unless the claim is current, accurate, legally supportable, and permitted in the applicable Google programme UX.
17. **Old Android version:** an old external-payment route cannot continue functioning after the corresponding Google programme/configuration has been disabled.
18. **Google rule/API change:** the affected external route can be disabled safely while existing purchased Diamonds and VIP remain available according to their valid entitlement records.
19. **Provider outage:** a Google or Xsolla outage does not cause duplicate grants after retry and does not erase unrelated valid value.
20. **Gift purchase:** purchaser, payment source, recipient, grant and later refund/reversal stay linked so a later correction targets the actual gifted entitlement rather than an unrelated account.

## Founder-protective but fair default

The safest default for CK-Labs is simple:

> An alternative or external payment route is a capability that must be positively authorised for the specific Play app, programme and market. It is not an assumed entitlement. When authority is unclear, fail closed for new external payment routing while preserving every already-valid TycoonX entitlement and every non-waivable consumer right.

This protects CK-Labs from Google policy/account risk, reduces entitlement/refund mismatches, and avoids turning a provider-rule mistake into a player-value loss.

## Gate result for this review

**Documentation status: PASS. Production-program verification: OPEN.**

The repository now contains an explicit 2026 Google Play billing-choice/external-offers control, but this document does not establish the actual Play Console enrollment of the TycoonX package or prove the live Android routing/transaction reporting configuration. Those facts must be verified from the current Play Console/integration before this gate can be marked production-ready.

No database change is required by this document. No paid service or GitHub Actions workflow is required by this document.
