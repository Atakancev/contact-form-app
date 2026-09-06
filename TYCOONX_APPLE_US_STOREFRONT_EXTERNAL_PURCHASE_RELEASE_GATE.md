# TycoonX Apple U.S. Storefront External-Purchase Steering Release Gate

Last reviewed: September 6, 2026

## Purpose

This gate controls any TycoonX iOS or iPadOS button, link, price card, call to action, or purchase flow that directs a customer from the Apple App Store version of TycoonX to the official CK-Labs TycoonX webshop and an Xsolla checkout.

It exists to use the current United States storefront permission without accidentally applying that permission worldwide, confusing Apple purchases with Xsolla purchases, or granting paid entitlements before an authoritative payment result exists.

This is an operational implementation gate. The canonical TycoonX Terms of Service and Purchases & Refunds Policy remain authoritative for player-facing contractual meaning and mandatory consumer rights.

## 1. Current Apple rule and scope

Apple App Review Guideline 3.1.1(a) currently states that developers may use buttons, external links, or other calls to action to alternative purchase methods in apps on the **United States storefront** without obtaining the StoreKit external-purchase-link entitlement that is required for certain other storefront programs.

Apple's May 1, 2025 guideline update expressly tied this United States storefront treatment to the U.S. court decision concerning buttons, external links, and other calls to action. Apple also keeps the App Review Guidelines as a living policy that can change.

Therefore:

- the U.S. rule is a **storefront-specific permission**, not a worldwide permission;
- a U.S. purchase link must not leak into another storefront merely because the user is physically in the United States, uses English, has a U.S. IP address, or previously used the U.S. storefront;
- another storefront may use an alternative-payment or external-link path only if the current Apple rules and the separate TycoonX gate for that storefront/program permit it;
- the existence of the U.S. steering permission does not waive Apple agreement terms, App Review requirements, consumer law, tax law, payment-provider rules, or TycoonX's own contractual promises.

### Release blocker

Do not ship or remotely enable a U.S.-only external-purchase CTA until the implementation determines the current Apple storefront correctly and fails closed when it cannot do so.

## 2. Storefront determination is authoritative

Use StoreKit storefront information as the decision input. The modern implementation should use `Storefront.current` and its `countryCode`. Apple defines that code using ISO 3166-1 alpha-3; the United States code is `USA`.

The permission decision must **not** be based solely on:

- GPS or device location;
- IP geolocation;
- device language or locale;
- SIM country;
- TycoonX profile country;
- a previously cached storefront;
- the billing address supplied to another payment provider.

Apple documents that storefront information can change at any time. TycoonX must retrieve or refresh the current storefront immediately before displaying purchase availability or the external-purchase CTA and must re-evaluate when the storefront changes.

Do not persist Apple storefront information for advertising, profiling, or unrelated marketing. Store only the minimum transaction/reconciliation evidence that is actually needed for the purchase path, legal compliance, fraud prevention, support, or claims.

### Fail-closed rule

If `Storefront.current` is unavailable, unknown, stale, or changes while the external-purchase screen is active, hide or disable the U.S.-specific CTA until eligibility is re-established. A failure to determine the storefront must never default to Xsolla.

## 3. U.S. steering is not blanket permission for embedded alternative payment processing

This gate authorizes **external steering** from an eligible U.S. storefront experience to an official web purchase surface. It must not be read as permission to embed an Xsolla card form, another payment-service-provider checkout, or a browser-like in-app alternative payment implementation unless a separate current Apple rule and agreement clearly authorize that design.

The external destination should be a CK-Labs-owned or CK-Labs-maintained TycoonX web surface for which CK-Labs remains responsible. Xsolla may provide the checkout/payment-processing layer behind that official TycoonX purchase surface.

The U.S. steering permission also is not, by itself, a reason to remove, hide, degrade, or make unreliable an otherwise approved Apple in-app-purchase path. Any decision to change the Apple IAP offering must be reviewed separately against the then-current App Review Guidelines, Apple agreements, storefront program terms, product design, and mandatory consumer law.

## 4. Storefront-safe UI and App Store metadata

A CTA such as “Buy on the TycoonX webshop” may be shown only where the current storefront/program allows it.

Do not place a U.S.-only external-purchase CTA in globally shared App Store metadata, screenshots, descriptions, promotional text, or a globally identical in-app surface if that content would also appear in storefronts where the CTA is not permitted.

Before App Review submission, preserve evidence showing:

- where the CTA appears;
- the storefront gate used to decide visibility;
- the official destination;
- what non-U.S. users see instead;
- which separately authorized regional paths, if any, can replace the U.S. path;
- App Review notes that accurately describe the routing where useful.

Never attempt to hide the true purchase behavior from App Review.

## 5. Payment authority and entitlement delivery

Opening a link, returning from a browser, reaching a “success” page, or receiving a client-side callback is **not** authoritative evidence that an Xsolla purchase succeeded.

For a TycoonX webshop purchase, the server-side Xsolla transaction/payment state is authoritative for whether the Xsolla payment completed. TycoonX's server-side entitlement ledger is authoritative for what was granted after valid payment confirmation.

Entitlement delivery must be idempotent. Duplicate webhooks, retries, reconnects, browser returns, support replays, or restore operations must not create duplicate Diamonds or duplicate VIP entitlement periods.

At minimum, the reconciliation record should be able to associate:

- TycoonX order ID;
- TycoonX account/user ID;
- Xsolla transaction ID or equivalent authoritative provider reference;
- product/SKU and quantity;
- storefront observed when the offer was displayed;
- currency and final total presented/confirmed;
- payment status and relevant timestamps;
- entitlement grant/restoration event;
- refund, reversal, chargeback, cancellation, or failed-payment state where applicable.

A pending, failed, cancelled, reversed, or unverified payment must not create a permanent paid entitlement.

## 6. Apple purchase and Xsolla purchase remain different transactions

Support, refund, restoration, fraud-review, and tax handling must preserve the actual channel.

- Apple is authoritative for the Apple App Store transaction state and Apple-controlled refund process for an Apple purchase.
- Xsolla is authoritative for the Xsolla payment transaction state and its applicable checkout/refund handling for an Xsolla purchase.
- CK-Labs remains responsible for TycoonX entitlement delivery, account state, game-side correction, support, and mandatory consumer remedies that legally fall on CK-Labs.

Do not send a user to Apple for a refund of a transaction that Apple did not process. Do not tell a user that Xsolla can reverse an Apple transaction. Do not use one provider's failed/reversed transaction as automatic proof that an unrelated transaction through another channel was invalid.

Chargebacks, unauthorized-payment reports, refunds, and entitlement corrections must remain transaction-specific and must respect the existing TycoonX no-double-recovery safeguards.

## 7. Price, tax, FX, regional pricing, and promotions

TycoonX may lawfully offer different future prices or bundles by country, storefront, platform, payment channel, currency, or genuine promotion, subject to current law and platform rules.

Any Apple-versus-webshop comparison shown to a user must be current, truthful, and like-for-like. Do not claim a percentage saving or “cheaper” price using:

- a stale Apple price;
- a different Diamond quantity without clear disclosure;
- a different VIP duration or included benefit;
- a pre-tax amount compared with a tax-inclusive amount;
- a different currency without making the basis clear;
- a fictitious crossed-out/reference price;
- a price that the relevant user cannot actually obtain.

The final total price shown before confirmation governs the completed transaction, subject to mandatory law. Taxes, VAT, fees, currency conversion, and provider/platform FX changes must be displayed or handled as required by applicable law and the responsible payment channel.

Completed one-time purchases are not retroactively repriced merely because a future price later rises or falls. A later decrease does not automatically create a refund, credit, or price-match right, and a later increase does not create an extra charge on a completed one-time purchase, except where mandatory law requires otherwise.

## 8. TycoonX product invariants

### Purchased Diamonds

Purchased Diamonds are an in-game virtual entitlement. They do not expire merely because time passes. They remain subject to lawful correction for refunds, reversals, duplicate grants, fraud, exploits, configuration errors, or other grounds already described in the canonical TycoonX legal documents, without removing unrelated legitimate value.

### One-time 30-Day VIP

30-Day VIP is a **one-time, non-renewing 30-day entitlement**. It must not silently become a recurring subscription because a web purchase route is used. A restore/reconciliation operation must not restart the original 30-day clock unless the user actually acquired a separate valid entitlement that lawfully creates another period.

### Lifetime VIP

Lifetime VIP is a **limited-time promotional offering available only during selected genuine sales windows**. CK-Labs may withdraw it from future sale, a closed sales window may never return, and no U.S. storefront steering permission creates an expectation of continuous Lifetime VIP availability. Different genuine sales windows may use different lawful future prices.

## 9. Consumer rights and account enforcement remain separate

Using an official TycoonX webshop route does not waive mandatory withdrawal, conformity, update, liability, refund, price-reduction, termination, notice, consent, or other consumer rights that apply under German/EU or other mandatory law.

Likewise, a payment dispute does not automatically prove cheating, and a gameplay/account sanction does not automatically extinguish an otherwise applicable consumer remedy for a legitimate purchase. Account enforcement, payment state, and entitlement state must remain separate decision records.

## 10. Minimum regression matrix

The release must pass at least these cases:

1. `Storefront.current.countryCode == "USA"` -> the approved U.S. external-purchase CTA may be shown.
2. German, French, Turkish, Japanese, or another non-U.S. storefront -> the U.S. CTA is absent; only a separately authorized regional path may appear.
3. Storefront changes from `USA` to a non-U.S. storefront while the purchase screen is open -> eligibility is re-evaluated and the U.S. path is hidden/disabled.
4. Storefront is unavailable or cannot be verified -> fail closed; do not default to Xsolla.
5. Device is physically in the U.S. but StoreKit storefront is non-U.S. -> do not use the U.S. steering rule.
6. Device locale is English (United States) but StoreKit storefront is non-U.S. -> do not use the U.S. steering rule.
7. User reaches an external “success” page before authoritative server confirmation -> no paid entitlement yet.
8. Valid Xsolla payment confirmation arrives twice -> one entitlement grant only.
9. Xsolla transaction is pending, failed, cancelled, refunded, reversed, or charged back -> reconciliation follows the authoritative state without double recovery.
10. Apple IAP and Xsolla purchase exist for the same account -> each remains separately identifiable and separately refundable/reconcilable through the correct channel.
11. App Store metadata is reused globally -> no U.S.-only purchase CTA leaks into storefronts where it is not allowed.
12. Diamond purchase through Xsolla -> purchased Diamonds retain the non-expiry invariant.
13. 30-Day VIP through Xsolla -> exactly one non-renewing 30-day entitlement is created.
14. Lifetime VIP window is closed -> a previously cached U.S. CTA or checkout URL cannot reopen the sale.
15. Price comparison across Apple and Xsolla -> quantity, product, currency, tax basis, and current price are all comparable and truthful.
16. User requests an Xsolla refund -> support does not route the user to Apple as though Apple processed that purchase.
17. User requests an Apple refund -> support does not represent the Apple transaction as an Xsolla transaction.
18. App Review or Apple policy changes the U.S. rule -> the CTA can be remotely disabled/fail closed until the new rule is reviewed.

## 11. Release evidence checklist

Before enabling the U.S. external-purchase CTA in production, retain evidence of:

- current Apple App Review Guideline 3.1.1(a) and the current United States storefront treatment;
- the StoreKit storefront-routing implementation and tests;
- `USA` alpha-3 matching and non-U.S. fail-closed behavior;
- storefront-change handling;
- the exact TycoonX webshop destination;
- Xsolla server-side payment confirmation and idempotent entitlement handling;
- refund/reversal/chargeback reconciliation;
- product-specific Diamond, 30-Day VIP, and Lifetime VIP tests;
- App Store metadata/storefront review;
- current Apple agreement/commercial-term review so CK-Labs does not assume a permanent fee, reporting, or program condition that Apple has not actually promised;
- support routing that distinguishes Apple from Xsolla;
- mandatory consumer-law review for the affected markets.

## 12. Sources to re-check before material implementation changes

- Apple App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Apple Developer News, May 1, 2025, “Updated guidelines now available”: https://developer.apple.com/news/?id=9txfddzf
- Apple StoreKit `Storefront`: https://developer.apple.com/documentation/storekit/storefront
- Apple StoreKit `Storefront.countryCode`: https://developer.apple.com/documentation/storekit/storefront/countrycode
- Existing TycoonX EU Apple alternative-payment gates for any EU storefront path.

Because Apple rules and agreements can change, this gate must be rechecked before a material change to U.S. purchase steering, before relying on a new Apple commercial assumption, and after a relevant Apple guideline/agreement update.
