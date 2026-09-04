# TycoonX Payment & Entitlement Release Gates

Last reviewed: September 4, 2026

This is an operational release gate for TycoonX purchases through Apple App Store, Google Play, and the official CK-Labs TycoonX webshop using Xsolla. It complements the public legal documents and does not replace mandatory law, platform rules, or the transaction-specific payment-provider terms.

## P0 payment and entitlement production gates

### 1. Google Play purchase authority

- Never grant Diamonds, 30-Day VIP, Lifetime VIP, or any other paid entitlement while Google reports the purchase as `PENDING`.
- Grant only after the purchase reaches `PURCHASED` and server-side verification succeeds.
- Treat the Google purchase token as the important idempotency/verification identity. Do not use `orderId` as the universal duplicate-purchase key or database primary key because Google states that not every valid purchase receives an `orderId`, including some promo-code purchases.
- Before granting value, verify that the purchase token has not already been used for the same entitlement delivery.
- Query current eligible `ProductDetails` close to the purchase flow and do not rely on long-lived cached product or offer objects as authoritative price, eligibility, or catalog state. Google warns that stale `ProductDetails` can cause billing-flow failures. The Google purchase UI and the verified transaction record control the completed Play purchase, subject to mandatory law.
- When the app launches, returns to the foreground, or re-establishes the Billing connection, use `queryPurchasesAsync()` so purchases completed during a network interruption, on another device, outside the app, or after a `PENDING` transition are reconciled. Real-time Developer Notifications are useful backend signals but must not be the only recovery path.
- Where technically appropriate, attach `obfuscatedAccountId` or `obfuscatedProfileId` to help attribute purchases and reduce fraud/mis-linking. Verify those identifiers on the secure backend before using them for entitlement attribution. Do not reject an otherwise valid purchase solely because such identifiers are absent, because some out-of-app or promotional purchases may not contain them.
- For consumables, consume through the correct Google flow after valid delivery. For non-consumables, acknowledge after valid delivery.
- Acknowledge or consume promptly. Google states that an unacknowledged completed purchase can be automatically refunded after three days; the three-day window starts only after a pending purchase becomes `PURCHASED`.
- Test duplicate callbacks, duplicate Real-time Developer Notifications, app restart, foreground reconciliation, delayed payment completion, multi-device completion, refund, chargeback, cancellation, and entitlement reconciliation.

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
- Preserve enough transaction evidence to identify the Xsolla entity shown as the contracting party/merchant for that payment method, the checkout price and currency, applicable taxes, transaction ID, payment status, and the refund-policy type presented for the transaction. Do not assume every Xsolla payment has the same merchant entity or refund configuration.
- Do not hard-code one universal Xsolla refund policy. Xsolla currently states that the applicable refund-policy type is shown in checkout.
- Do not hard-code one Xsolla group company as merchant of record unless the actual CK-Labs checkout configuration makes that statement true for the transaction.
- Account suspension, bans, fraud controls, or provider terms must not be treated as a blanket waiver of a mandatory statutory withdrawal, conformity, refund, price-reduction, or other non-waivable consumer remedy. Fraudulent or invalid transactions may still be investigated and corrected to the extent permitted by law.

### 4. Germany: electronic withdrawal function

For covered online distance contracts where CK-Labs is the contracting trader responsible for the online interface, verify the actual implementation of the German electronic withdrawal function required by BGB § 356a.

The release is not fully ready merely because the legal text mentions the right. The live interface must, where the rule applies:

- keep the withdrawal function continuously available during the applicable withdrawal period, prominently placed, easy to access, and clearly labelled `Vertrag widerrufen` or with another equally clear equivalent formulation;
- allow the consumer to provide or confirm, without unnecessary friction, the consumer's name, information identifying the contract or part of the contract being withdrawn, and the electronic communication method to which the receipt confirmation should be sent;
- after those details are provided or confirmed, provide a distinct confirmation control clearly labelled `Widerruf bestätigen` or with another equally clear equivalent formulation;
- allow the consumer to submit an unambiguous withdrawal declaration electronically without forcing a support conversation, telephone call, account-login detour, or other unnecessary barrier where the statutory function itself is required;
- immediately send a receipt confirmation on a durable medium containing at least the withdrawal information/declaration submitted and the date and time of receipt; and
- treat a withdrawal submitted through the function before expiry of the withdrawal period as received in time, subject to the statutory rule.

Where Apple, Google, or Xsolla is the contracting merchant/controller of the relevant purchase interface, verify the provider route that actually satisfies the applicable withdrawal/refund requirement instead of creating a conflicting CK-Labs flow.

The § 356a function supplements other legally valid ways to exercise withdrawal rights. Do not design the interface or support process in a way that falsely suggests the electronic function is the consumer's only lawful route.

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

### 11. Apple EU October 1, 2026 transition

Apple updated the Developer Program License Agreement on August 18, 2026 and announced new unified EU business terms effective October 1, 2026. TycoonX must not assume the pre-October EU external-purchase rules continue unchanged after that date.

Before October 1, 2026:

- have the Apple Developer Program Account Holder review and accept the updated agreement containing Attachment 14;
- deliberately choose and document the TycoonX EU payment model, because Apple states that the selected EU payment options must be maintained for 12 months;
- if TycoonX uses alternative in-app processing or promotes out-of-app digital offers in EU storefronts, configure the StoreKit External Purchases or Offers Entitlement required by the new framework;
- when an actionable out-of-app link or alternative in-app processor is used, implement Apple’s ExternalPurchaseCustomLink API and required disclosure-sheet flow rather than a plain custom link;
- implement the applicable transaction-reporting path to Apple for qualifying alternative-payment transactions and reconcile retries, refunds, chargebacks, Xsolla transaction IDs, TycoonX entitlements, and Apple invoices;
- apply Apple’s new child-safety rules to alternative payment flows, including parental-gate and out-of-app-offer restrictions for minors according to the user’s applicable storefront age rules;
- keep alternative-payment UI conditional on supported OS/API/entitlement availability; and
- ensure TycoonX Support handles Xsolla/alternative-payment refund and purchase-history issues rather than incorrectly sending those users to Apple.

The detailed operational checklist is maintained in `TYCOONX_APPLE_EU_OCTOBER_2026_TRANSITION_GATE.md`.

### 12. Google Play multi-product one-time purchase bundles

Google Play's current one-time-product system can place several one-time products into one Play Billing transaction. TycoonX must not enable that feature merely because the client can pass several `ProductDetails` objects to `launchBillingFlow()`.

Treat multi-product one-time purchases as a separate P0 fulfillment and refund shape:

- one Google `Purchase` and purchase token can represent **multiple product IDs**; do not assume `one purchase token = one SKU`;
- after server-side verification, resolve the complete product set from `Purchase.getProducts()` and the `lineItems` returned by the Google Play Developer API before granting anything;
- grant every valid line item exactly once, and make a retry of the same purchase token incapable of granting any line item twice;
- keep a per-line-item entitlement ledger or equivalent idempotent mapping so a partial fulfillment failure can be safely retried without duplicating the items that already succeeded;
- do not grant any line item while the overall purchase is `PENDING`; the normal rule remains that paid value is delivered only after Google reports `PURCHASED` and server-side verification succeeds;
- for a multi-product purchase, do not rely on the RTDN `sku` field to determine what was bought. Google's current documentation says that field is not supplied for multi-product one-time purchases; use the purchase token to query authoritative purchase data and resolve all items;
- do not treat several line items sharing the same Google Order ID as several independent charges. Google's financial reports can contain separate rows for the line items while they belong to the same multi-product transaction;
- do not combine a subscription with a multi-product one-time bundle. Google currently excludes subscriptions from these bundles;
- do not combine products classified by Google as digital content and digital services in the same multi-product one-time bundle. Before ever bundling Diamonds with a VIP product, perform a current Play classification review rather than assuming those products may be combined;
- do not use a multi-product bundle for a pre-order or rental purchase option where Google's current feature rules prohibit those shapes; and
- query current eligible product/offer details immediately before sale. A closed Lifetime VIP sales window must not remain purchasable merely because an old bundle definition or cached `ProductDetails` still includes it.

#### Refund and revocation invariant

Google's current multi-product one-time purchase documentation states that individual items in such a purchase cannot be separately refunded through that multi-product refund flow: the multi-product purchase is refunded as a whole, and canceling it cancels all entitlements associated with that purchase.

Therefore:

- never interpret a full refund of a multi-product purchase as permission to leave one of its paid line-item entitlements active merely because TycoonX internally prefers to keep that item;
- never revoke unrelated purchases outside that purchase token/order merely because one bundled transaction was refunded;
- if only one component is disputed, defective, or subject to a mandatory consumer remedy that cannot be cleanly delivered through Google's all-or-nothing multi-product refund mechanics, escalate the case instead of fabricating a provider-side partial refund that Google did not process;
- if the product design predictably requires independent refundability, do **not** bundle those products into one Google multi-product transaction in the first place;
- distinguish **multi-product** purchases from **multi-quantity** purchases. Google's RTDN `REFUND_TYPE_QUANTITY_BASED_PARTIAL_REFUND` currently applies to quantity-based partial refunds for multi-quantity purchases; it must not be reinterpreted as “refund one product from a multi-product bundle” without authoritative Google purchase data; and
- refunded multi-product orders should be reconciled from Google's Voided Purchases / RTDN signals plus an authoritative Developer API lookup, not from client state alone.

#### TycoonX product invariants inside a Google bundle

- Purchased Diamonds remain consumable virtual currency and do not expire solely because time passes.
- 30-Day VIP remains a **one-time, non-renewing 30-day entitlement**. A bundle callback or retry must not start or extend its 30-day clock twice.
- Lifetime VIP remains a **one-time promotional entitlement available only during selected genuine sales windows**. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability. A Google bundle must not bypass the sales window, add an expiry to a valid Lifetime VIP, or retroactively reprice an earlier purchase.
- Bundle discounts, bundle composition and future bundle prices may change for future purchases, but the checkout must show the actual final transaction before confirmation and completed purchases are not retroactively repriced, subject to mandatory law.
- A later lower bundle price does not automatically create a refund, credit or price-match right for a completed one-time purchase, while a later increase does not create an extra charge on that completed purchase, except where mandatory law requires otherwise.

#### Multi-product regression matrix

Before enabling a multi-product Google Play offer, test at minimum:

1. a successful purchase containing two eligible one-time products;
2. one purchase token resolving to all expected `lineItems`;
3. duplicate `onPurchasesUpdated()` delivery;
4. duplicate RTDN delivery;
5. a backend failure after the first line item is granted but before the second, followed by safe retry;
6. a `PENDING` purchase that later becomes `PURCHASED`;
7. an RTDN event without a `sku`, confirming the backend queries authoritative purchase data instead of guessing;
8. a full refund/cancellation, confirming every entitlement belonging to that multi-product purchase is reconciled once;
9. a quantity-based partial-refund notification, confirming it is not mistaken for a one-item multi-product refund;
10. a separately purchased unrelated Diamond/VIP entitlement, confirming it survives the bundled refund;
11. a Lifetime VIP product after its genuine sales window has closed, confirming it cannot remain available through stale bundle/catalog state; and
12. financial reconciliation showing multiple item rows under one Google Order ID without double-counting revenue or purchases.

Until those tests pass in the actual production architecture, keep Google multi-product one-time purchases disabled for TycoonX and continue using independently verifiable purchase flows.

**Current Google checkpoint:** rechecked September 4, 2026 against Google's multi-product one-time product, Play Billing integration, RTDN and Developer API guidance, including documentation updated September 1, 2026.

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

For each purchase channel, keep a dated release-evidence sample that can be reviewed without relying on memory: the visible product name, price/currency/tax presentation, one-time versus recurring status, merchant/payment channel, order confirmation, entitlement grant, restore/reconciliation behavior where applicable, and the correct refund/withdrawal route. For limited-window Lifetime VIP, preserve evidence that the sales window and any countdown/discount claim were genuine. This is internal release evidence, not a requirement to retain unnecessary personal data.

## Manual regression command

Run this without GitHub Actions or any paid service:

```bash
node scripts/verify-tycoonx-legal.mjs
```

The verifier checks the 25 localized hubs, all 100 full localized documents, TycoonX brand spelling, stale beta wording, Arabic RTL coverage, and the shared localized-legal formatter that prevents raw `**...**` markers from leaking into the rendered pages.
