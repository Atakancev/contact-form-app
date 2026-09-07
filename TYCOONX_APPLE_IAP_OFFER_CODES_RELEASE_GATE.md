# TycoonX Apple In-App Purchase Offer Codes Release Gate

Last reviewed: 2026-09-07

This gate protects CK-Labs before Apple In-App Purchase offer codes are used for TycoonX Diamonds, one-time 30-Day VIP, Lifetime VIP, or any future one-time paid entitlement. It supplements the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Lifetime VIP rules, promotion/dark-pattern controls, Apple transaction verification controls, refund/revocation controls, and mandatory German/EU consumer protections.

Apple reference: https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/create-offer-codes-for-in-app-purchases

## Release position

TycoonX is a fully released service as of September 1, 2026. Apple offer codes are a production promotion/payment mechanism, not a beta or test entitlement path.

Do not enable or distribute a production Apple offer code for a TycoonX product until the product mapping, campaign window, eligible storefronts, price/free status, redemption rules, entitlement behavior, refund/revocation behavior, support wording, and consumer-law consequences are documented and tested.

An offer code, redemption URL, marketing post, screenshot, support message, or successful code-entry screen is never sufficient entitlement authority by itself. TycoonX grants paid or promotional value only after the corresponding Apple transaction is authoritatively verified and mapped to the correct TycoonX account and product, exactly once.

## Current Apple operational facts to preserve

Apple currently permits In-App Purchase offer codes that can provide discounted or free access. Customers can redeem qualifying codes through an Apple redemption URL, the App Store where Apple supports that path, or inside the app where the required StoreKit flow is supported.

Apple currently supports three code classes for this system:

- one-time-use codes, which are unique and can each be redeemed once;
- custom codes, which can be shared and redeemed up to the configured campaign limit; and
- sandbox codes, which are for testing and must never grant production TycoonX value.

For production one-time-use or custom code generation, the app must be Ready for Distribution and the associated In-App Purchase must be Approved. Apple currently permits up to 10 active In-App Purchase offers at a time and up to 1,000,000 one-time-use plus custom codes per app per quarter, shared across In-App Purchases. Sandbox codes have a separate current quarterly limit of 10,000.

Apple currently limits a customer to one code redemption per offer. CK-Labs must not implement an app-side retry or support override that turns one Apple offer into repeated entitlement grants.

Apple currently lets CK-Labs choose offer eligibility based on App Store purchase history within the app, including customers who never purchased, purchased within the last 30 days, or purchased more than 30 days ago. Apple also lets CK-Labs choose countries/regions and a paid or free offer.

An Apple eligibility result is an offer-eligibility result, not proof of fraud, account compromise, regional-price abuse, chargeback abuse, hacking, or entitlement abuse.

## Product mapping

### Diamonds

A verified Apple offer-code transaction for a Diamond product grants only the exact Diamond quantity attached to that verified product/transaction, exactly once.

A free Apple Diamond offer is a genuine promotional grant. A discounted Apple Diamond offer is a discounted purchase. Neither path may silently change another Diamond bundle, another transaction, VIP, or unrelated account value.

Expiration or deactivation of the code controls whether an unused code can still be redeemed. It does not make Diamonds already validly granted from a completed transaction expire merely because time passed.

A replayed code, redemption URL, transaction update, app restart, support retry, or server retry must not duplicate the Diamond grant.

### One-time 30-Day VIP

A verified Apple offer-code transaction for one-time 30-Day VIP starts one 30-consecutive-day entitlement once, according to the authoritative transaction and the existing TycoonX 30-Day VIP rules.

Redemption replay must not restart the 30-day clock. A free or discounted code does not turn the product into an auto-renewing subscription and does not create recurring billing.

If a player already has overlapping or adjacent VIP entitlement, the existing documented entitlement-merging/restoration rule must be applied deterministically. Support must not invent extra time merely because a code was promotional.

### Lifetime VIP

Lifetime VIP remains a limited-time promotional offering available only during selected genuine sales windows. It may be withdrawn from sale, may never return, and creates no expectation of continuous availability.

An Apple Lifetime VIP offer-code campaign is itself a controlled promotional distribution path and must be tied to a documented genuine sales/redemption window. Creating or distributing a code must not become an undocumented backdoor that leaves Lifetime VIP effectively on sale after the intended campaign is closed.

Before a Lifetime VIP offer-code campaign is launched, CK-Labs must document at least:

- whether the campaign requires code redemption, completed Apple purchase, or both before the campaign cutoff;
- the actual Apple code expiration/deactivation behavior;
- the eligible Apple storefront countries/regions;
- whether the offer is free or paid;
- the displayed price/discount claim where paid;
- the customer eligibility rule;
- the maximum redemption volume; and
- how already distributed but unredeemed codes are handled when the campaign ends.

Closing the ordinary in-app Lifetime VIP purchase button while leaving valid Apple offer codes redeemable can extend the real acquisition window. The legal/marketing description of the campaign must match the actual Apple redemption configuration.

A Lifetime VIP code redeemed after a public campaign page disappears is not automatically fraud. TycoonX must first determine whether Apple still validly allowed redemption under the configured campaign and whether the transaction is authoritative.

A completed valid Lifetime VIP transaction is not revoked merely because the offer later expires, is deactivated, is withdrawn from marketing, or a future Lifetime VIP sale uses a different price.

## Code creation, activation and expiration

Apple currently requires one-time-use code expiration and allows a maximum validity of six months. Apple currently permits custom codes to have no end date or an optional expiration date, with a maximum six-month expiration horizon when a date is set.

Apple currently says codes with an expiration date expire at 12:00 a.m. Pacific Time on the configured expiration date. CK-Labs must not market a different local cutoff such as “midnight in your country” unless the actual campaign configuration and player-facing disclosure make that statement true.

If a TycoonX campaign is advertised with a specific local date/time, the Apple code configuration, TycoonX in-app state, webshop/social/support wording, and campaign records must be aligned to avoid a misleading earlier or later redemption window.

Apple currently warns that newly generated one-time-use or custom codes may take up to one hour before they become redeemable. TycoonX must not advertise “active now” until CK-Labs has confirmed the campaign is actually redeemable, and an initial provider-side activation delay must not be classified as player abuse.

Apple currently allows one-time-use code batches from 500 to 25,000 codes. Apple currently allows a custom-code redemption limit up to 25,000 at a time and permits further batches for the same custom code. CK-Labs campaign controls must therefore use the authoritative Apple campaign/batch limits, not an assumed one-code or one-batch ceiling.

Apple currently says an offer cannot be edited after creation. If customer eligibility must change, CK-Labs must create a new offer. That makes pre-launch review mandatory: do not create a production offer with guessed eligibility, storefronts, free/paid status, or price and then rely on editing it later.

## Custom-code extensions and hidden campaign extensions

Apple currently permits CK-Labs to extend a custom code by creating a new batch using the same code with a later expiration date. Apple redeems from the earliest non-expired batch first, so old and new batches can remain usable concurrently until expiration or their redemption limits are reached.

For Lifetime VIP and other genuinely time-limited promotions, creating a later custom-code batch is a new or extended promotional availability decision. It must not be used silently to manufacture fake scarcity, recycle an expired “last chance” claim, or keep a supposedly closed sale running invisibly.

If CK-Labs wants the original custom-code batch to stop being redeemable before a replacement batch is created, the original batch must be deactivated first according to Apple’s current controls.

## Deactivation does not undo completed entitlements

Apple currently says deactivating offer codes causes unused codes to expire immediately. Deactivation is a forward-looking redemption control.

TycoonX must not treat code deactivation as a refund or revocation of a transaction already completed and fulfilled. Already completed entitlements remain governed by the authoritative Apple transaction/refund/revocation state and the TycoonX ledger.

Unused/deactivated codes do not create a right to an entitlement merely because the user possessed a screenshot, URL, email, printed card, or message containing the code, subject always to mandatory law and any enforceable campaign promise CK-Labs actually made.

## Paid offers, storefronts, tax and FX

For a paid offer, Apple currently asks CK-Labs to select a discounted price for a base country/region and provides comparable prices across App Store storefronts taking taxes and foreign-exchange rates into account. CK-Labs can override specific storefront prices where Apple permits it.

TycoonX must use the authoritative Apple product/offer/storefront transaction data for fulfillment and support. A code marketed in one country or currency does not promise identical availability or an identical nominal price in every country, platform, or channel.

A legitimate Apple tax/FX/storefront conversion or configured regional offer price is not by itself a pricing error or regional-price abuse.

The final total price shown through the applicable Apple purchase confirmation flow governs the completed Apple transaction, except where mandatory law or a lawful correction of an obvious configuration/catalog error requires otherwise. A later price decrease does not automatically create a refund, credit, or price-match right, and a later increase does not create an extra charge on an already completed one-time purchase, except where mandatory law requires otherwise.

Promotional percentages, crossed-out prices, “free” claims, countdowns, redemption deadlines, and “last chance” wording must be truthful and must follow the existing TycoonX EU promotion/dark-pattern gate.

## Redemption outside the app and account attribution

A customer may reach an Apple offer-code flow outside TycoonX through an Apple redemption URL or App Store flow. Therefore CK-Labs must not rely on an in-app button press as proof that the correct TycoonX account owns the resulting transaction.

The backend must bind the verified Apple transaction to the correct TycoonX account using the existing authoritative account-attribution and transaction-lineage rules. If attribution is genuinely ambiguous, isolate the entitlement for reconciliation rather than granting it to whichever account first presents a code or screenshot.

A support agent must never manually grant Diamonds, 30-Day VIP, or Lifetime VIP solely because a user knows a valid-looking custom code or has an image of a one-time-use code.

Once the same Apple transaction has been finally bound and fulfilled, another TycoonX account must not receive the same paid or promotional entitlement by replaying the code, redemption link, transaction identifier, receipt screenshot, or support conversation.

## Eligibility, privacy and fraud boundaries

Apple purchase-history eligibility should be used for the offer purpose for which it is configured. TycoonX must not transform “not eligible for this Apple offer” into a broad fraud label or infer more about the player than the evidence supports.

A code being shared outside its intended audience, exhausted, expired, already redeemed, not yet active, unavailable in a storefront, or rejected by Apple is not by itself sufficient proof that the user hacked TycoonX or compromised another account.

Where there is reliable evidence of deliberate code theft, automated redemption abuse, forged transaction evidence, account takeover, or coordinated promotion abuse, CK-Labs may investigate and apply proportionate transaction/account controls under the existing Terms and Community Standards. Corrections must remain transaction-specific and may not confiscate unrelated valid purchases merely as punishment.

## Refunds, reversals and chargebacks

Offer-code purchases and promotional grants must remain linked to the authoritative Apple transaction lineage.

A later authoritative refund, revocation, reversal, Family Sharing revocation where relevant, or other Apple entitlement change is processed under the existing Apple refund/reconciliation gates. The code itself is not refund authority.

A failed or pending redemption does not justify a clawback when no completed entitlement was granted. A provider-side failure, eligibility rejection, code activation delay, or campaign configuration mistake must not automatically become a chargeback/fraud strike against the player.

If CK-Labs accidentally configures a free or discounted offer more broadly than intended and Apple validly completes a transaction under that configuration, the incident must be reviewed as a configuration/promotion issue first. CK-Labs must not automatically accuse the player of exploitation merely for accepting the genuine Apple offer shown to them.

## Sandbox isolation

Sandbox codes are test-only. They must never grant production Diamonds, production 30-Day VIP, production Lifetime VIP, production refund credit, or production payment history.

Production and sandbox transaction identifiers, environment flags, account mappings, logs, support tools, and entitlement ledgers must remain separated. A sandbox code appearing in a production support ticket must not be manually converted into production value.

TycoonX is not a beta service. Sandbox terminology describes Apple’s payment testing environment only.

## German/EU consumer protections

Nothing in an Apple offer-code campaign waives mandatory German/EU consumer protections, including applicable pre-contract information duties, truthful total-price and tax disclosure, withdrawal rights where applicable, conformity and update rights, cure, price reduction, termination, refund rights, damages/liability rules, unfair-commercial-practice protections, and other non-waivable remedies.

A promotional code cannot be used to characterize a paid digital product as legally remedy-free. “Free” promotional grants also must not be described in a way that hides a price, required consideration, material data use, or another condition where disclosure is legally required.

Lifetime VIP scarcity and deadlines must be genuine. CK-Labs must not repeatedly extend or recreate a supposedly final code window in a way that makes the urgency claim misleading.

## Release blockers

Block production Apple In-App Purchase offer codes for TycoonX if any of the following is true:

- the product-to-entitlement mapping is not transaction-verified and idempotent;
- sandbox codes can touch production entitlements;
- Lifetime VIP codes can remain redeemable outside the documented genuine sales/redemption window without an intentional reviewed campaign rule;
- the player-facing expiration time conflicts with Apple’s configured Pacific Time expiration behavior;
- a new custom-code batch can silently extend a “final” Lifetime VIP deadline;
- the app grants from code text, screenshot, redemption URL, or support assertion before verified Apple transaction evidence;
- 30-Day VIP can restart from a repeated redemption callback;
- Diamond grants can duplicate from retries;
- offer rejection is automatically classified as fraud;
- paid offer storefront/tax/FX differences are automatically classified as regional-price abuse;
- code deactivation is treated as retroactive entitlement revocation;
- active production offers were created with unreviewed eligibility/storefront/free-paid configuration that CK-Labs expected to edit later;
- completed transactions can be corrected without authoritative Apple refund/revocation evidence;
- mandatory German/EU remedies are excluded; or
- any rendered legal, checkout, support, marketing, or campaign copy spells the game name other than `TycoonX` or describes the live service as beta.

## QA examples

### Example 1: Lifetime VIP custom code crosses the public sale cutoff

The public Lifetime VIP campaign ends at 20:00, but a custom Apple code remains valid until a later Apple-configured expiration. The real redemption window is therefore still open for that code. CK-Labs must either align/deactivate the code at the intended cutoff or disclose and document that code holders have a different genuine redemption window. A valid post-20:00 Apple redemption is not automatically fraud merely because the public banner disappeared.

### Example 2: Apple code says it expires on September 30

Apple currently expires dated codes at 12:00 a.m. Pacific Time on the configured expiration date. TycoonX must not tell a German player that the code remains valid until September 30 at 23:59 German time unless CK-Labs has actually structured the campaign so that statement is true.

### Example 3: 200-Diamond free code

A player validly redeems a free Apple offer for the 200-Diamond product. After the Apple transaction is verified, TycoonX grants exactly 200 Diamonds once. A second callback or support retry grants zero additional Diamonds. Later offer deactivation does not delete the already validly granted Diamonds.

### Example 4: 30-Day VIP discounted code

A discounted code creates a verified 30-Day VIP transaction. TycoonX starts the one 30-day entitlement once. Reopening the app, restoring purchases, or receiving another transaction update must not create another 30 days from the same transaction.

### Example 5: code created but not yet redeemable

CK-Labs creates a code batch and advertises it immediately. Apple has not finished activating the codes, so a player gets a rejection during Apple’s documented activation window. The correct response is provider/campaign support handling, not an exploit sanction.

### Example 6: broader-than-intended free offer

CK-Labs accidentally configures a free offer as eligible for everyone. A player who meets Apple’s configured eligibility redeems it legitimately. TycoonX isolates and reviews the configuration incident; it does not automatically confiscate unrelated purchases or ban the player for accepting an authentic Apple offer.

## Canonical/localization sync rule

This gate is an implementation and campaign-control safeguard. It does not by itself change the canonical player-facing Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards.

If CK-Labs actually launches an Apple offer-code campaign whose promises or product meaning materially differ from the current canonical English legal wording, update the canonical English source first and then synchronize every affected localized legal document before launch. After any such localization change, update `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md` accurately.
