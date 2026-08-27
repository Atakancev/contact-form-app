# TycoonX Payment & Entitlement Release Gates

Last reviewed: August 27, 2026

This is an operational release gate for TycoonX purchases through Apple App Store, Google Play, and the official CK-Labs TycoonX webshop using Xsolla. It complements the public legal documents and does not replace mandatory law, platform rules, or the transaction-specific payment-provider terms.

## P0 before the September 1, 2026 full release

### 1. Google Play purchase authority

- Never grant Diamonds, 30-Day VIP, Lifetime VIP, or any other paid entitlement while Google reports the purchase as `PENDING`.
- Grant only after the purchase reaches `PURCHASED` and server-side verification succeeds.
- Treat the Google purchase token as the important idempotency/verification identity. Do not use `orderId` as the universal duplicate-purchase key or database primary key because Google states that not every valid purchase receives an `orderId`, including some promo-code purchases.
- Before granting value, verify that the purchase token has not already been used for the same entitlement delivery.
- For consumables, consume through the correct Google flow after valid delivery. For non-consumables, acknowledge after valid delivery.
- Acknowledge or consume promptly. Google states that an unacknowledged completed purchase can be automatically refunded after three days; the three-day window starts only after a pending purchase becomes `PURCHASED`.
- Test duplicate callbacks, duplicate Real-time Developer Notifications, app restart, delayed payment completion, refund, chargeback, cancellation, and entitlement reconciliation.

### 2. Apple restore and transaction authority

- Purchased in-game currency must not expire solely because time passes.
- Maintain a visible Restore Purchases action for restorable Apple purchases.
- Restore valid Lifetime VIP from authoritative Apple/StoreKit entitlement state without duplicating consumable Diamonds.
- Keep restore idempotent and reconcile Apple refund/revocation events against the matching TycoonX entitlement only.
- Use StoreKit current entitlement/transaction state as authoritative evidence rather than a client-side success screen.
- For support cases, preserve enough transaction identity to match the user-supplied Apple Order ID/receipt to the correct TycoonX entitlement and refund state.
- Pending/approval-style transactions must not grant paid value before Apple reports valid completion.

### 3. Xsolla webshop authority

- Do not treat a browser return URL, client-side success message, or locally created order as final payment authority.
- Grant paid value only after the configured Xsolla server-side payment confirmation is valid.
- Verify webhook authenticity/signatures and make fulfillment idempotent so retries cannot duplicate Diamonds or VIP.
- Reconcile refunds, reversals, chargebacks, and invalid transactions against the same authoritative transaction identity.
- Do not hard-code one universal Xsolla refund policy. Xsolla currently states that the applicable refund-policy type is shown in checkout.
- Do not hard-code one Xsolla group company as merchant of record unless the actual CK-Labs checkout configuration makes that statement true for the transaction.

### 4. Germany: electronic withdrawal function

For covered online distance contracts where CK-Labs is the contracting trader responsible for the online interface, verify the actual implementation of the German electronic withdrawal function required by BGB § 356a.

The release is not fully ready merely because the legal text mentions the right. The live interface must, where the rule applies:

- keep the withdrawal function clearly labelled and continuously available during the applicable withdrawal period;
- provide the legally required confirmation step;
- allow the consumer to submit an unambiguous withdrawal declaration electronically; and
- provide prompt confirmation on a durable medium where required.

Where Apple, Google, or Xsolla is the contracting merchant/controller of the relevant purchase interface, verify the provider route that actually satisfies the applicable withdrawal/refund requirement instead of creating a conflicting CK-Labs flow.

### 5. Lifetime VIP checkout wording

Every Lifetime VIP purchase surface must clearly show before confirmation:

- that it is a one-time entitlement;
- that it is offered only during a genuine limited promotional sales window;
- the final price and currency;
- the current material VIP benefits;
- that later genuine sales windows may use different prices;
- that a later lower price does not automatically create a price-match or refund right, subject to mandatory law; and
- that “Lifetime” means the commercial operating lifetime of the TycoonX Service for the purchasing account while the Service continues, not a promise that TycoonX will operate forever.

Do not use fake countdowns, fake scarcity, or misleading crossed-out prices.

### 6. Account deletion versus paid entitlement

- Deleting a TycoonX account may delete gameplay/profile data but must not silently destroy a separately restorable Apple/Google entitlement where platform rules or mandatory law require restoration.
- A restored Lifetime VIP does not recreate deleted gameplay progress, consumed Diamonds, inventory, social history, or transferred assets unless mandatory law requires otherwise.
- Require reasonable proof that the same purchaser controls the relevant platform/payment identity before re-linking a paid entitlement.

### 7. Price and region abuse

- Final provider-confirmed checkout data and authoritative transaction records control completed purchases, subject to mandatory law.
- A stale screenshot, cached client price, manipulated client, or unsupported app version does not by itself override a valid final checkout record.
- Users must not falsify region, tax location, account identity, or payment eligibility to obtain a price or promotion for which they are not eligible.
- Corrections must target invalid or duplicated value and must not confiscate unrelated legitimate purchases.

### 8. Storefront-specific external purchase and Xsolla linking

The existence of the official TycoonX Xsolla webshop does not create a universal right to advertise or link to it from the mobile apps.

**Apple / iOS:**

- Current Apple App Review Guideline 3.1.1(a) allows buttons, external links, or calls to action to other purchase methods in United States storefront apps without the StoreKit external-purchase-link entitlement.
- Outside the United States storefront, do not assume the same rule applies. Where Apple requires a StoreKit External Purchase Link Entitlement or another regional program, use the applicable entitlement and follow its terms before showing a webshop purchase link or call to action.
- In storefronts where no applicable permission exists, do not put buttons, external links, or calls to action in the app or its metadata that direct users to Xsolla or another non-IAP purchase mechanism.
- Cross-platform access to a legitimately purchased TycoonX entitlement must remain consistent with Apple rules. If an item bought elsewhere is usable in the iOS app, verify that the corresponding item is also offered through IAP where Apple requires that parity.
- App Review notes must explain the TycoonX business model and paid-product mapping clearly enough that a reviewer can find and test Diamonds, 30-Day VIP, Lifetime VIP, restore behavior, and any permitted external-purchase behavior.

**Google Play / Android:**

- Do not assume the Xsolla webshop may be promoted from the Google Play app globally without program enrollment or reporting duties.
- If TycoonX offers alternative billing inside the Play-distributed app or sends users to an external web purchase flow for in-app digital goods, verify the applicable country/program eligibility and enroll in the required Google Play billing-choice or external-offers program before release.
- Where Google requires alternative-billing or external-transaction APIs, report qualifying transactions through the required APIs and preserve the required transaction identifiers and reconciliation state.
- Keep the app behavior, Play Console enrollment, checkout wording, service-fee/reporting treatment, and public TycoonX legal wording consistent for the user’s storefront.

### 9. EU personalized-price disclosure

- Regional pricing by country, storefront, currency, tax, or a generally available promotion is not automatically a personalized price.
- If TycoonX ever personalizes an individual consumer’s price through automated decision-making, verify whether EU consumer law requires disclosure before the order is placed.
- On Google Play, when the price is personalized in this sense, use the Play Billing `setIsOfferPersonalized(true)` mechanism so Google’s purchase UI includes the disclosure.
- Do not set the personalized-price flag merely because ordinary regional pricing differs between countries, but do not leave it false when an actual automated individualized price is being used.
- Keep enough configuration/audit evidence to explain why a price was classified as regional/general or personalized if a consumer, platform, or authority questions it.

### 10. App Store marketing and paid-feature disclosure

- If App Store descriptions, screenshots, previews, or promotional text feature Diamonds, VIP functionality, premium automation, or another item that requires an additional purchase, make that paid nature clear enough to satisfy Apple App Review Guideline 2.3.2.
- Do not show a paid feature in metadata in a way that reasonably suggests it is included free with the base download when it is not.
- Keep current prices out of screenshots/descriptions unless there is a deliberate localization/update process for every affected storefront; stale public prices create avoidable review and consumer-law risk.

## Apple Custom EULA gate

Before release, verify in App Store Connect that the custom TycoonX EULA is actually saved and assigned to every intended country/region. Apple states that its Standard EULA applies in countries/regions not covered by the custom agreement.

The custom EULA must remain plain text in App Store Connect and must continue to contain all Apple minimum terms, including developer name/address, telephone/email, warranty allocation, product claims, IP claims, legal-compliance representation, applicable third-party terms, and Apple third-party-beneficiary language.

## Public legal parity gate

Before release, compare the live purchase UI and provider configuration against:

- TycoonX Terms of Service;
- TycoonX Purchases & Refunds Policy;
- TycoonX Privacy Policy;
- TycoonX Community Standards;
- TycoonX Apple Custom EULA; and
- TycoonX Impressum / Legal Notice.

A legal clause is not an implementation. If the actual checkout, restore, refund, deletion, withdrawal, external-purchase-link, personalized-pricing, or entitlement flow differs materially from the public wording, fix the implementation or the wording before release.

## Manual regression command

Run this without GitHub Actions or any paid service:

```bash
node scripts/verify-tycoonx-legal.mjs
```

The verifier checks the 25 localized hubs, all 100 full localized documents, TycoonX brand spelling, stale beta wording, Arabic RTL coverage, and the shared localized-legal formatter that prevents raw `**...**` markers from leaking into the rendered pages.
