# TycoonX Apple Promoted In-App Purchase & Lifetime VIP Sale-Window Release Gate

**Status:** P0 Apple commerce / promotion / entitlement / consumer release gate  
**Owner:** CK-Labs  
**Last reviewed:** September 7, 2026  
**Scope:** Promoted TycoonX In-App Purchases shown on Apple App Store surfaces, with special protection for limited-time Lifetime VIP sales windows.

## Purpose

Apple can surface approved In-App Purchases on the App Store product page, in search, and in other App Store merchandising surfaces. A customer can begin a promoted purchase outside TycoonX and then continue it after TycoonX opens. That creates a separate commercial entry point from the in-game store.

For TycoonX, this matters especially for Lifetime VIP because Lifetime VIP is a **one-time premium entitlement offered only during selected genuine limited promotional sales windows**. App Store promotion must never become an accidental backdoor that keeps a closed Lifetime VIP sale effectively available, creates fake urgency, presents stale price or availability claims, or causes a valid App Store-initiated purchase to be lost or duplicated.

This gate supplements the canonical TycoonX Terms of Service, Purchases & Refunds Policy, `TYCOONX_LIFETIME_VIP_LIMITED_PROMOTIONAL_ENTITLEMENT_RELEASE_GATE.md`, Apple refund/revocation gates, and mandatory law. It does not replace them.

## 1. Current Apple promoted-IAP facts to design around

As reverified on September 7, 2026, Apple currently states that:

- promoted In-App Purchases can appear on an app's App Store product page, can appear in search results, and may be featured on the Today, Games, and Apps tabs;
- up to **20 In-App Purchases** may be promoted on the product page at the same time;
- a customer who does not yet have the app installed can select a promoted In-App Purchase, receive a prompt to install the app, and then continue the transaction in the app;
- current App Store Connect guidance requires the app to support the **`PurchaseIntent` API** for promoted product pages;
- all promoted In-App Purchases and their metadata must be approved by App Review;
- App Store Connect promotion-setting changes can take **up to 24 hours** to reflect on the App Store product page;
- `Product.PromotionInfo` can customize promoted-product order or visibility on a particular device; and
- Apple's older `paymentQueue(_:shouldAddStorePayment:for:)` path is deprecated in favor of `PurchaseIntent.intents`, although it remains relevant to supported older-system implementations. Apple says not to use the old and new promoted-purchase handling paths simultaneously for the same runtime flow.

These are platform-operation facts. They do not change TycoonX product definitions or waive mandatory consumer rights.

## 2. Promotion is merchandising, not entitlement authority

A promoted App Store card, product image, search result, App Store product-page placement, `PurchaseIntent`, or app launch from an App Store promotion is **not by itself proof of payment**.

TycoonX must grant paid value only after the normal authoritative Apple transaction verification succeeds.

Therefore:

- do not grant Diamonds merely because TycoonX receives a purchase intent;
- do not start one-time 30-Day VIP merely because the user tapped the promoted item;
- do not activate Lifetime VIP merely because the App Store opened TycoonX for that product;
- do not trust a screenshot of an App Store promotion as proof that a purchase completed; and
- keep purchase-intent handling idempotent with the same transaction/entitlement reconciliation used for ordinary Apple purchases.

A single verified Apple transaction must create the corresponding TycoonX entitlement once, even if the intent, app launch, transaction update, server notification, restore, or support reconciliation is observed more than once.

## 3. Lifetime VIP may be promoted only during a genuine authorized sales window

Lifetime VIP remains a limited-time promotional offering available only during selected genuine sales windows. Promoting it on the App Store does not change that product definition.

Before CK-Labs promotes Lifetime VIP on any Apple App Store surface, record at minimum:

- the internal Lifetime VIP campaign/window ID;
- the intended start and end timestamp and operational timezone;
- the Apple product ID;
- the countries/storefronts included;
- the current Apple price configuration by storefront or pricing rule;
- the exact public Lifetime VIP campaign wording;
- the App Store display name, description, image, and promotion visibility configuration;
- the time the App Store promotion is enabled;
- the time CK-Labs requests the promotion to be hidden or removed; and
- storefront evidence showing what customers could actually see around the start and end of the campaign.

Do not intentionally leave Lifetime VIP promoted after the corresponding authorized sale has closed merely because the underlying non-consumable product still exists for restoration or transaction recognition.

The fact that a previously purchased Lifetime VIP must remain restorable does **not** require CK-Labs to continue merchandising it to new purchasers.

## 4. The Apple 24-hour propagation warning is not a safe sale cutoff

Apple currently warns that App Store promotion-setting changes may take up to **24 hours** to reflect on the App Store product page.

For that reason, the visible disappearance of a promoted Lifetime VIP card must not be the only technical control that closes a sale.

If a Lifetime VIP campaign has an exact public end time:

- enforce the campaign's current buy eligibility in TycoonX when the purchase intent is handled;
- use the current provider product information and current campaign state rather than an old locally cached sale flag;
- stop ordinary in-game presentation of the Lifetime VIP purchase path at the advertised end;
- request App Store de-promotion in a way consistent with the campaign plan and Apple's propagation behavior;
- monitor the real storefront around the change rather than assuming App Store Connect save time equals public disappearance time; and
- preserve evidence of any Apple propagation delay that causes a stale merchandising card to remain visible.

Do not promise consumers that an App Store card will disappear at an exact minute if Apple propagation makes that promise unreliable. The legally meaningful sale rules, in-app continuation flow, and campaign wording must remain truthful even if the App Store merchandising surface updates later.

## 5. Stale promoted card after the Lifetime VIP window closes

A customer who taps a Lifetime VIP promotion still visible because of App Store propagation delay is **not automatically abusing TycoonX**.

A stale Apple merchandising surface must not by itself become evidence of:

- fraud;
- hacking or exploiting;
- regional-price abuse;
- coupon or promotion abuse;
- account compromise;
- entitlement abuse; or
- chargeback intent.

If TycoonX receives an outside-app Lifetime VIP purchase intent after the authorized sale has closed:

1. verify the current campaign state and the relevant Apple product state;
2. do not silently resurrect the closed offer merely because the stale card existed;
3. do not charge the customer under an expired or materially changed offer without the current legally required price/product information and confirmation;
4. if the transaction was already legitimately initiated or became binding under the applicable Apple flow and the actual campaign rules before closing, preserve enough evidence to reconcile that transaction fairly; and
5. if no valid completed purchase exists, do not create Lifetime VIP merely because the customer saw or tapped stale merchandising.

If an Apple-confirmed transaction completes and legally belongs to the genuine prior sales window, grant it once or provide the remedy required by the transaction, Apple rules, the TycoonX contract, and mandatory law. Do not discard a valid payment solely because the final transaction update or app launch arrived after the public countdown reached zero.

## 6. PurchaseIntent handling

TycoonX must treat `PurchaseIntent` as an **outside-app purchase initiation signal**, not as a transaction receipt.

For supported StoreKit versions:

- observe `PurchaseIntent.intents` using the current Apple-recommended implementation;
- identify the Apple product selected by the customer;
- route it through the same current catalog, eligibility, price-display, account-binding, verification, and fulfillment controls used for a direct in-app purchase;
- do not bypass a closed Lifetime VIP window merely because the intent originated from the App Store;
- do not bypass already-owned checks for a non-consumable Lifetime VIP;
- do not bypass supported-account/version/security requirements where those requirements are lawful and necessary;
- preserve any valid transaction that later completes even if TycoonX was restarted; and
- make replay of the same eventual Apple transaction harmless.

Where TycoonX still supports the deprecated `paymentQueue(_:shouldAddStorePayment:for:)` path on an older OS, do not run both promoted-purchase mechanisms for the same runtime flow in a way that can duplicate payment initiation or fulfillment.

## 7. App not installed when the customer selects the promotion

Apple allows a customer without TycoonX installed to select a promoted In-App Purchase, install TycoonX, and then continue the transaction in the app.

This creates a timing gap that must be tested explicitly.

Example:

- Lifetime VIP sale is valid when the customer selects it on the App Store;
- TycoonX is not installed;
- installation completes after the public Lifetime VIP window has ended; and
- the customer opens TycoonX to continue.

TycoonX must not guess the legal outcome from app-install time alone. Reconcile the actual Apple purchase flow, the campaign rule for offer initiation versus payment completion, current product information, and mandatory law.

If CK-Labs wants the campaign to require **completed payment before the cutoff**, say and configure that consistently where legally material. If CK-Labs intentionally honors an Apple purchase initiated before the cutoff even when completion occurs later, record that rule consistently and apply it without favoritism.

## 8. Product-specific controls

### Purchased Diamonds

- Diamonds remain consumable paid virtual value.
- A promoted Diamond product still requires a verified completed Apple transaction before grant.
- Never duplicate Diamonds because the same promoted flow is observed through both `PurchaseIntent` and transaction updates.
- Purchased Diamonds do not expire merely because time passes.
- A stale promoted Diamond card is not entitlement authority and is not automatically abuse evidence.

Apple's current promotion guidance notes that consumable In-App Purchases do not appear in App Store search results. Do not assume that means consumables cannot be merchandised on other allowed App Store surfaces.

### One-time 30-Day VIP

- One-time 30-Day VIP remains one paid, non-renewing entitlement for **30 consecutive days**.
- An App Store promotion must not describe it as recurring or subscription-renewing if that is not the actual product.
- Receiving or replaying a purchase intent must never restart an already-started valid 30-Day VIP period.
- A valid completed purchase is fulfilled according to the authoritative transaction and product rules, not according to how many times the promotion was tapped.

### Lifetime VIP

- Lifetime VIP remains a one-time non-consumable entitlement for the commercial operating lifetime of the TycoonX Service for the eligible purchasing account, subject to the contract and mandatory law.
- It remains available for **new purchase only during selected genuine sales windows**.
- It may be withdrawn from future sale and may never return.
- A later genuine sales window may use a different lawful price.
- App Store promotion does not create a right to continuous sale, a future return, an expired price, or a price match.
- A valid prior purchaser's restore right must not be confused with a right for new customers to keep buying after the promotional window closes.

## 9. Already-owned Lifetime VIP

Apple promoted-product visibility can be customized on a device with `Product.PromotionInfo`.

Where technically appropriate, TycoonX should hide or suppress a Lifetime VIP promotion for an account/device that already has the relevant valid entitlement, but this is a convenience and duplicate-purchase control, not entitlement authority.

Do not rely on device-local promotion visibility alone because:

- the user may have multiple devices;
- app-specific promotion visibility may not yet have been synchronized;
- App Store surfaces can be visible before the app has ever been opened on that device; and
- the authoritative ownership decision still comes from Apple transaction state plus the TycoonX entitlement record.

If a separately valid second payment somehow occurs through another channel, treat it as a duplicate-payment/remedy case rather than silently creating a second Lifetime VIP flag or keeping a commercially useless duplicate without review.

## 10. Metadata and misleading claims

Apple requires promoted In-App Purchase metadata to be approved by App Review. Its current App Review Guidelines also prohibit misleading marketing and require accurate promoted-IAP public metadata.

For TycoonX:

- the promoted display name and description must match the actual product;
- do not display a false price, fake discount, fake countdown, fake scarcity claim, or an expired "limited time" claim;
- do not imply Lifetime VIP is permanently purchasable;
- do not imply one-time 30-Day VIP auto-renews;
- do not imply purchased Diamonds expire by time;
- do not describe a family-sharing benefit unless it is actually enabled and supported under the separate Apple Family Sharing gate; and
- do not use the short App Store promotion description as a substitute for legally required checkout disclosures that must appear before purchase confirmation.

If material public product meaning changes, review the canonical English TycoonX legal wording first and synchronize every affected localized legal page before marking it current.

## 11. German/EU limited-time-offer protection

A genuine limited sale can protect CK-Labs by giving Lifetime VIP a clear commercial window. A fake limited sale creates the opposite risk.

Germany's current UWG Annex no. 7 treats as an always-prohibited commercial practice a false statement that goods or services are available, generally or on particular terms, only for a very limited time when the purpose is to cause an immediate consumer decision without adequate time or opportunity to make an informed choice. This implements the corresponding EU Unfair Commercial Practices Directive rule.

Therefore:

- the Lifetime VIP deadline must be genuine;
- a closed campaign must not silently continue through a stale or intentionally retained App Store promotion;
- if Apple propagation creates temporary stale merchandising, preserve evidence and make the actual transaction flow truthful rather than exploiting the stale card as pressure;
- do not reset or recycle a countdown while keeping materially the same claimed expiring offer continuously available; and
- any extension, reopening, or later sales window must have a genuine supportable basis and truthful public wording.

This gate does not limit mandatory German/EU withdrawal, conformity, update, cure, price-reduction, termination, refund, liability, information, or other non-waivable consumer rights.

## 12. Price, currency, tax, and regional-price boundaries

A promoted App Store surface is not an excuse to hard-code a stale local price.

Before purchase confirmation, use current Apple product information and the actual storefront/payment flow. Subject to mandatory law and lawful obvious-error handling:

- the final total price shown before the completed transaction governs that completed purchase;
- a future Lifetime VIP sale may have a different lawful price;
- a later lower price does not automatically create a refund, credit, price match, Diamonds, or additional VIP time;
- a later higher price does not create an extra charge on an already completed one-time purchase;
- prices may differ by platform, country, storefront, channel, currency, VAT/tax treatment, and provider pricing configuration;
- Apple tax, FX, storefront, or price-tier changes can affect future local prices; and
- accepting a genuinely displayed Apple storefront price is not automatically regional-price abuse.

If a promoted item displays stale or contradictory price information, fail that purchase continuation safely and refresh current product information rather than guessing which amount applies.

## 13. Account compromise, fraud, and support evidence

A purchase intent can exist without a completed purchase. Treat support evidence accordingly.

Do not treat any of the following alone as proof of fraud or entitlement ownership:

- a screenshot of the promoted App Store item;
- the fact that TycoonX opened from the App Store;
- a stale Lifetime VIP card after a campaign ended;
- a user reporting that they tapped Buy;
- a promotional image; or
- a device-local promotion visibility state.

Use the authoritative Apple transaction plus the TycoonX server entitlement record.

If a verified transaction is associated with a compromised TycoonX account, separate account-recovery/security analysis from payment/refund and Terms-enforcement decisions. Do not confiscate unrelated Diamonds, 30-Day VIP, or Lifetime VIP purchases without their own transaction-specific basis.

## 14. Refunds, reversals, and promotion-originated purchases

A purchase that originated from an App Store promotion follows the same authoritative Apple refund/revocation rules as the corresponding product purchased from inside TycoonX.

Do not create a special no-refund rule merely because the user discovered the product through App Store merchandising.

When Apple authoritatively reports a refund or revocation:

- reconcile only the entitlement/value attributable to the affected transaction;
- keep full versus prorated refund handling consistent with the Apple refund gate;
- preserve separate direct ownership before removing any family-shared access;
- do not remove unrelated purchases; and
- preserve mandatory consumer remedies.

## 15. Required tests before enabling promoted Lifetime VIP

At minimum test all of the following in StoreKit sandbox/Xcode tooling and the real App Store configuration where applicable:

1. Lifetime VIP promotion visible during an active sales window.
2. Lifetime VIP no longer presented as purchasable by TycoonX after the campaign cutoff.
3. App Store promotion-setting change does not become the only sale-cutoff control.
4. Promotion remains visually stale while the backend/app campaign is closed.
5. Stale promoted card does not grant Lifetime VIP without a completed verified purchase.
6. Purchase intent received while the campaign is active.
7. Purchase intent received after the campaign closes.
8. User selects promoted Lifetime VIP without TycoonX installed, installs later, and continues.
9. Sale closes between App Store selection and in-app continuation.
10. Purchase intent repeats and does not duplicate purchase initiation or entitlement fulfillment.
11. App restart occurs before a promoted transaction completes.
12. Verified Apple transaction completes after a valid earlier initiation and is reconciled exactly once.
13. User already owns Lifetime VIP and the promotion is suppressed where practicable.
14. Device-level `Product.PromotionInfo` visibility changes do not overwrite server ownership.
15. Diamond promoted purchase grants the verified quantity/value once.
16. 30-Day VIP promoted purchase starts one 30-consecutive-day period once.
17. Refunded promoted purchase corrects only the affected transaction.
18. Storefront/currency changes refresh current Apple product information before confirmation.
19. Promotional metadata contains no stale full-release, product, price, or limited-window claim.
20. App Store promotion disappears later than the App Store Connect save event without causing the closed sale to reopen.

Apple documents a purchase-intent test URL and Xcode StoreKit transaction-manager support for promoted-purchase testing. Use those free Apple development tools rather than relying on untested production behavior.

## 16. Minimum release evidence

Before promoted Lifetime VIP is enabled, CK-Labs should be able to produce:

- [ ] campaign/window ID and exact genuine start/end time;
- [ ] Apple Lifetime VIP product ID and current non-consumable configuration;
- [ ] App Store promotion metadata screenshots or exports;
- [ ] proof the promoted metadata was approved;
- [ ] current `PurchaseIntent` handling implementation or justified supported-version fallback;
- [ ] proof that promoted purchase intent grants nothing before verified completion;
- [ ] proof that campaign eligibility is rechecked in TycoonX;
- [ ] proof that a closed campaign cannot be reopened solely by stale App Store merchandising;
- [ ] plan for Apple's up-to-24-hour public promotion propagation delay;
- [ ] already-owned suppression/duplicate-payment behavior;
- [ ] current-price/storefront refresh behavior;
- [ ] refund/revocation linkage to the Apple transaction;
- [ ] evidence that unrelated paid products are isolated;
- [ ] truthful limited-time wording under German/EU unfair-commercial-practice rules; and
- [ ] confirmation that canonical/localized TycoonX legal wording still matches the actual public product meaning.

## 17. Current reference points

Reverify these sources before a material Apple merchandising change or future Lifetime VIP campaign:

- Apple App Store Connect Help, Promote In-App Purchases: https://developer.apple.com/help/app-store-connect/configure-in-app-purchase-settings/promote-in-app-purchases
- Apple, Promoting your In-App Purchases: https://developer.apple.com/app-store/promoting-in-app-purchases/
- Apple StoreKit, `paymentQueue(_:shouldAddStorePayment:for:)`: https://developer.apple.com/documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:shouldaddstorepayment:for:)
- Apple StoreKit, Testing promoted In-App Purchases: https://developer.apple.com/documentation/storekit/testing-promoted-in-app-purchases
- Apple App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- German UWG Annex no. 7: https://www.gesetze-im-internet.de/uwg_2004/anhang.html
- EU Directive 2005/29/EC on unfair commercial practices: https://eur-lex.europa.eu/eli/dir/2005/29/oj/eng

Provider behavior and law can change. Reverify against the production StoreKit/App Store Connect configuration before a future material campaign.

## 18. Release rule

**Do not promote Lifetime VIP on the App Store unless the sale window is genuine, the current Apple price/product state is used, `PurchaseIntent` is handled safely, a stale App Store promotion cannot reopen a closed sale, verified Apple transactions remain the only paid-entitlement authority, and mandatory consumer rights remain intact.**

A failed gate blocks App Store promotion of Lifetime VIP until the affected merchandising, transaction, entitlement, or legal issue is corrected. It does not by itself invalidate prior valid Lifetime VIP purchases.