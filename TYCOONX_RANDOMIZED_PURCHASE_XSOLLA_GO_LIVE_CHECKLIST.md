# TycoonX Randomized-Purchase & Xsolla Go-Live Checklist

Last reviewed: August 27, 2026

This checklist is a release gate for TycoonX. It complements the public Terms, Purchases & Refunds Policy, Apple Custom EULA, Privacy Policy, Community Standards, and the broader Payment & Entitlement Release Gates. It does not create a randomized-purchase mechanic and does not state that TycoonX currently has one.

## P0: randomized paid items / loot-box style mechanics

Before release, confirm whether any TycoonX paid product, paid currency spend, paid bundle, paid spin, paid chest, paid draw, or other purchase flow can result in a randomized virtual item or randomized reward.

If the answer is **no**, keep this gate documented as not applicable and do not add unnecessary loot-box wording to public legal copy.

If the answer is **yes**, do not ship the mechanic until all of the following are true:

- Apple: disclose the odds of receiving each type of randomized virtual item before the purchase, as required by App Review Guideline 3.1.1.
- Google Play: clearly disclose the odds in advance of, and in close and timely proximity to, the purchase.
- The disclosure must describe the actual live probability table used by the server/configuration. Do not use stale marketing percentages or screenshots that can drift from the backend.
- If probabilities vary by player state, pity system, guaranteed-drop step, event, country, account history, or other condition, disclose the rules accurately enough that the displayed odds are not misleading.
- Do not silently alter odds during a live paid promotion. If odds change, update the disclosure at the same time and preserve enough configuration/version evidence to answer refund, platform-review, or regulator questions.
- The final paid-purchase screen must not imply a guaranteed item when the result is random.
- A refund or chargeback must reconcile the corresponding paid value without creating duplicate paid value or removing unrelated legitimate purchases.
- If a jurisdiction imposes stricter probability-item rules, age restrictions, registration, or display requirements, apply the stricter local rule before distributing that mechanic there.

### Korea-specific check

If TycoonX distributes a paid randomized-item mechanic in South Korea, perform a separate Korea release review before enabling it. Google Play specifically flags Korean requirements for games offering probabilistic items, in addition to the general Play odds-disclosure rule.

## P0: Xsolla real-payment go-live validation

The Xsolla webshop is not production-ready merely because sandbox checkout works.

Before the September 1, 2026 full release:

- Confirm the production token request no longer contains `"sandbox": true` when a real payment is intended.
- Make at least one controlled real-payment test using an eligible real payment method.
- Confirm the provider-side transaction reaches the correct successful state before TycoonX grants Diamonds, 30-Day VIP, Lifetime VIP, or any other paid entitlement.
- Confirm the TycoonX fulfillment path is idempotent under duplicate/retried webhook delivery.
- Confirm the test transaction appears in Xsolla Publisher Account transaction search with the expected amount, currency, user/account mapping, product, and status.
- Exercise the available refund flow for the test payment method and verify the corresponding TycoonX entitlement/value is reconciled correctly.
- Do not assume every Xsolla payment method supports the same refund path. The checkout-specific refund policy and payment method remain relevant.
- Verify that production and sandbox users/configuration cannot be mixed accidentally after go-live.
- Keep enough transaction identifiers and server logs to connect the Xsolla payment, TycoonX user, entitlement grant, refund/reversal, and any later support case without storing unnecessary payment-card data.

## P0: App Review purchase visibility

Before submitting the September 1 release to Apple:

- Every configured In-App Purchase that Apple needs to review must be complete, up to date, visible, and functional in the submitted build.
- If a configured paid item is intentionally unavailable to the reviewer, explain exactly why in App Review Notes instead of leaving a broken or hidden purchase surface unexplained.
- Describe new or materially changed purchase behavior specifically in App Review Notes, including Diamonds, one-time 30-Day VIP, Lifetime VIP sales-window behavior, restore behavior, and any permitted external-purchase route.
- Keep App Store screenshots/description clear about which showcased functionality requires an additional purchase.

## P1: public legal wording trigger

Do not add a public randomized-item clause solely because this checklist exists. Add or update public Terms/Purchases wording only if TycoonX actually introduces a paid randomized-item mechanic or another material purchase behavior that users need to understand contractually.

If such a mechanic is introduced, update the canonical English legal source first, then refresh all 25 localized legal sets for the material change.

## Sources checked on August 27, 2026

- Apple App Review Guideline 3.1.1: purchased in-game currency may not expire; restorable purchases need a restore mechanism; paid randomized virtual-item mechanisms must disclose item odds before purchase.
- Apple App Review Guideline 2.1(b): configured IAPs submitted for review should be complete, visible, functional, and material product changes should be described specifically in App Review Notes.
- Google Play Payments policy: purchase mechanisms that provide randomized virtual items must disclose odds in advance and close to the purchase; alternative billing/external offers remain program-dependent.
- Google Play country/region requirements: South Korea has additional probabilistic-item requirements for affected games.
- Xsolla real-payment testing documentation, updated August 10, 2026: production real-payment testing requires removing the sandbox token flag, and Xsolla recommends validating a real transaction/refund flow because not all payment methods support refunds identically.
