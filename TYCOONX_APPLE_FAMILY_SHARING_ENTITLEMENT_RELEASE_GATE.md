# TycoonX Apple Family Sharing Entitlement Release Gate

**Status:** P0 Apple catalog / entitlement / payment / consumer release gate  
**Owner:** CK-Labs  
**Last reviewed:** September 7, 2026  
**Scope:** Apple App Store In-App Purchases for TycoonX, especially Lifetime VIP, plus the boundary with purchased Diamonds and one-time 30-Day VIP.

## Purpose

This gate supplements, rather than replaces, the existing TycoonX Lifetime VIP and Apple refund/reconciliation gates. It covers a separate Apple configuration risk: **Family Sharing is an entitlement-distribution setting that can materially expand who receives access, and Apple currently says that once Family Sharing is turned on for an In-App Purchase in App Store Connect it cannot be turned off for that product.**

For TycoonX, this is commercially important because the intended Apple mapping for Lifetime VIP is a non-consumable, and Apple permits Family Sharing for non-consumables. Enabling it on the current Lifetime VIP product could make one valid purchase shareable with up to five additional family members and could affect existing purchasers after restore/reconciliation. It must therefore never be switched on as a casual catalog experiment.

This is an internal implementation and release gate. It does not create a new player-facing promise that Lifetime VIP, 30-Day VIP, or Diamonds are family-shareable. The current TycoonX commercial model remains account-specific unless CK-Labs deliberately launches a compliant family-sharing offer and synchronizes all legally material public wording.

## 1. Current TycoonX default: do not enable Apple Family Sharing

Until CK-Labs deliberately approves a different product model:

- keep **Apple Lifetime VIP Family Sharing disabled** for the current live product ID;
- do not enable Family Sharing for purchased **Diamonds**; Apple Family Sharing is not a consumable-product sharing mechanism;
- do not change one-time **30-Day VIP** into another Apple product type merely to make it family-shareable;
- if 30-Day VIP is implemented as a non-renewing subscription, keep its one-time non-renewing 30-day legal meaning and server-authoritative duration logic intact; and
- do not represent any of these products as "for the whole family", "share with family", or equivalent unless the actual Apple product configuration, entitlement backend, checkout wording, support flow, and legal copy all support that statement.

**Release blocker:** the current Lifetime VIP product must not have Family Sharing switched on unless the irreversible-config review in this file has been completed and approved.

## 2. Treat the setting as effectively irreversible for that Apple product ID

Apple's current App Store Connect documentation states that once Family Sharing is turned on for an In-App Purchase, it cannot be turned off for that In-App Purchase.

Before anyone with App Store Connect permission enables it, preserve a dated decision record covering at least:

- exact Apple product ID;
- current Apple product type;
- whether the product is already live or has historical purchasers;
- whether the product is part of an active or future Lifetime VIP sales window;
- expected effect on existing purchasers and their family members;
- expected support/refund/restoration consequences;
- server entitlement changes required;
- checkout/store wording changes required;
- canonical English legal changes, if any;
- localization synchronization required by those public legal changes;
- revenue/economy impact of one purchase potentially serving several family members; and
- rollback strategy if the product itself later needs to be withdrawn from future sale.

Do not treat "we can disable it later" as a rollback plan. For the affected product ID, Apple currently says that is not available.

If CK-Labs later wants a distinct family-shareable Lifetime VIP offer, prefer a separately reviewed Apple product architecture where Apple policy and App Review permit it, instead of casually changing the current individual Lifetime VIP SKU. If a separate product cannot lawfully or operationally be used, the existing product must not be changed until the consequences for historical purchasers and public promises have been reviewed.

## 3. Family Sharing changes entitlement scope, not payment ownership

A Family Sharing beneficiary is not automatically the purchaser of Lifetime VIP.

Keep separate provenance for:

- the Apple purchaser/direct owner;
- a family member receiving derivative shared access;
- the Apple transaction or shared transaction presented for that family member;
- the TycoonX account to which that access is attached;
- whether the ownership type is direct/purchased or family-shared;
- the current revocation state; and
- any independent direct Lifetime VIP purchase held by that same TycoonX account.

Do not flatten a family-shared entitlement into the same record as a direct paid Lifetime VIP without retaining its provenance.

A family member who receives access through Family Sharing:

- did not necessarily pay CK-Labs for that entitlement;
- does not thereby obtain the purchaser's payment credentials, refund authority, tax record, or support identity;
- must not be shown the purchaser's protected payment information; and
- must not be treated as having made a second Lifetime VIP payment merely because Apple creates a transaction/receipt state for that family member.

## 4. Use Apple ownership state instead of guessing

When Family Sharing is enabled for a product, use Apple's current transaction/entitlement evidence to distinguish purchased versus family-shared ownership.

Where available, process the current Apple ownership type and revocation state rather than inferring ownership from:

- matching surnames;
- household address;
- IP address;
- device family;
- TycoonX nickname;
- language;
- country;
- support message; or
- another family member's screenshot.

Apple's StoreKit product metadata exposes whether a product is family-shareable through `isFamilyShareable`. If the app displays a family-sharing benefit, derive that display from current provider-backed product configuration rather than a stale hard-coded flag.

## 5. Existing purchasers can be affected after Family Sharing is enabled

Do not assume Family Sharing affects only purchases made after the configuration change.

Apple's current guidance distinguishes new and existing purchasers. For non-consumables purchased before Family Sharing was enabled, qualifying family members can obtain shared access through restore/receipt/server-notification handling once the Apple sharing conditions are met.

Therefore enabling Family Sharing on an already-sold Lifetime VIP SKU can expand the scope of historical purchases. Before enabling it on an existing SKU:

- estimate the historical-purchaser impact;
- test restore behavior for existing purchasers and family members;
- verify that old TycoonX entitlement records can represent derivative family access without cloning a paid purchase;
- verify that closing a Lifetime VIP sales window does not incorrectly erase valid shared access derived from a still-valid historical purchase; and
- verify that later Family Sharing revocation does not erase an independent direct purchase.

## 6. Family member transactions must not create duplicate paid Lifetime VIP

Apple documents Family Sharing as creating transaction/receipt state for family members so apps can unlock access.

For TycoonX:

- one purchaser's Lifetime VIP must remain one paid provider purchase even if several family members receive shared access;
- a family member transaction must create or update a **derivative entitlement**, not a second paid Lifetime VIP purchase record;
- repeated StoreKit delivery, restore, server notification, app reinstall, or account relink must remain idempotent;
- a family member later buying Lifetime VIP directly must create separate direct-purchase provenance without losing the historical family-shared record; and
- if a user has both valid direct ownership and family-shared access, the direct entitlement must survive loss of family sharing.

Never count family-shared access as extra Lifetime VIP sales revenue.

## 7. `REVOKE` is not the same thing as `REFUND`

Apple's current Family Sharing behavior can revoke a family member's shared access for reasons including family membership/sharing changes, the app being hidden from purchase history, the organizer stopping purchase sharing for non-consumables, or the purchaser receiving a refund.

TycoonX must keep these events distinct:

- **Purchaser refund:** reconcile the purchaser's direct transaction under the Apple refund gate and mandatory law.
- **Family-member `REVOKE` / Family Sharing revocation:** remove only the derivative family-shared access that is no longer valid, after checking whether that TycoonX account also owns the product directly.
- **Direct purchase remains valid:** do not remove it merely because Family Sharing access was revoked.

A `FAMILY_REVOKE` / Family Sharing revocation is not automatically evidence that the family member committed fraud, initiated a chargeback, abused regional pricing, hacked TycoonX, compromised an account, or violated the Terms.

Do not create a real-world debt for a family member merely because derivative shared access ends.

## 8. Do not let a closed Lifetime VIP sales window become a Family Sharing loophole or a forfeiture tool

Lifetime VIP remains a limited-time promotional offering available only during selected genuine sales windows. Family Sharing does not change that commercial rule.

If Family Sharing is ever deliberately enabled:

- closing a Lifetime VIP sales window stops new direct sales through that closed offer, subject to the normal pending-transaction rules;
- closing the window does **not** by itself revoke a valid purchaser's existing Lifetime VIP;
- closing the window does **not** by itself revoke valid derivative family access while Apple still reports it as valid;
- a family member gaining derivative access after the direct sales window closes is not automatically a new Lifetime VIP sale or promotion reopening;
- CK-Labs must not create a hidden post-window purchase route by misusing Family Sharing configuration; and
- a family member whose derivative access later ends does not acquire a right to reopen a closed Lifetime VIP sales window or buy at an expired promotional price merely because shared access once existed.

## 9. Checkout and marketing must match the Apple configuration

If Family Sharing is ever enabled for a sellable TycoonX product, review every material presentation before sale:

- App Store product metadata;
- in-app paywall and product card;
- checkout-adjacent explanation;
- FAQ/support copy;
- canonical Terms and Purchases & Refunds wording if the contractual meaning changes;
- all 25 localized legal variants when canonical public legal meaning materially changes; and
- promotional claims involving household/family access.

Do not advertise Family Sharing before it is actually enabled and functioning. Do not advertise a product as individual-only if the actual Apple configuration and intended entitlement model grant family sharing in a way material to the purchase decision.

Apple exposes `isFamilyShareable` so the app can identify the current configuration. Use that provider-backed state where appropriate instead of trusting stale catalog text.

Under German BGB § 327e, public statements can contribute to the objective conformity expectations for digital products. This is another reason not to let store configuration and player-facing promises diverge.

## 10. 30-Day VIP and Diamonds remain separate

### Diamonds

Purchased Diamonds are consumable virtual currency and remain governed by their own transaction/ledger rules. Family Sharing of a Lifetime VIP must not:

- clone purchased Diamonds to family members;
- restore spent Diamonds from a family member's receipt;
- merge the purchaser's Diamond ledger with a family member's ledger; or
- make a Family Sharing revocation deduct unrelated purchased Diamonds.

### One-time 30-Day VIP

30-Day VIP remains a one-time, non-renewing 30-consecutive-day entitlement. Do not reclassify it as an auto-renewable subscription or a permanent non-consumable merely to obtain Family Sharing functionality.

If Apple does not support Family Sharing for the product type actually used for 30-Day VIP, leave it unshared rather than changing the legal product merely for convenience.

Family Sharing must never restart a 30-Day VIP clock, create repeated 30-day periods from restore events, or convert 30-Day VIP into recurring access.

## 11. Account linking, compromise, and support disputes

Family Sharing can make the same Apple purchase relevant to several people, so TycoonX account binding must remain conservative.

Support must not:

- move the purchaser's direct Lifetime VIP to a family member merely because that family member previously had shared access;
- convert derivative shared access into a permanent direct purchase after the Apple family relationship ends;
- clone a direct purchase to several TycoonX accounts outside the authoritative Family Sharing state;
- reveal another family member's account or payment information without a lawful need; or
- treat a legitimate family-group change as account compromise by default.

Where a TycoonX account was actually compromised, run the separate account-security review. Family Sharing status is evidence about entitlement provenance, not proof of who controlled a TycoonX login at a particular moment.

## 12. Regional pricing, taxes, and Family Sharing

Family Sharing is not a regional-price bypass mechanism by itself.

A family member legitimately receiving Apple-authorized shared access must not automatically be accused of regional-price abuse because their TycoonX language, physical location, travel status, device region, or other profile data differs from the purchaser.

Keep the original purchaser's authoritative Apple transaction, price, storefront/tax evidence where available and lawfully retained, and do not fabricate a second sale, VAT event, or FX conversion for each family member merely because shared access exists.

If a genuine provider/storefront inconsistency suggests abuse, investigate the original transaction and current Apple entitlement state transaction-specifically. Do not punish a family member solely because Apple delivered a valid family-shared entitlement.

## 13. Service changes, provider changes, and permanent shutdown

A future Apple policy change, StoreKit migration, provider change, or TycoonX infrastructure rewrite must preserve the difference between direct and family-shared Lifetime VIP.

Do not migrate every historical family-shared record into permanent direct Lifetime VIP. Likewise, do not delete a valid direct Lifetime VIP because the old system also recorded family-sharing state.

If TycoonX is permanently and lawfully discontinued, apply the existing permanent-shutdown and mandatory digital-product-remedy analysis. Family Sharing does not waive conformity, update, notice, withdrawal, termination, refund, price-reduction, or non-waivable liability rights where their legal conditions apply.

For changes to continuously supplied digital products, German BGB § 327r can require a contractual basis and valid reason, no additional cost, clear information, and additional notice/remedy consequences for certain impairing changes. Do not use a Family Sharing configuration change as a shortcut around those mandatory rules.

## 14. Minimum release evidence before ever enabling Family Sharing

Before CK-Labs enables Family Sharing for any TycoonX paid product, preserve dated QA evidence showing at least:

1. exact Apple product ID and product type;
2. App Store Connect screenshot/config evidence showing current Family Sharing state;
3. acknowledgement that enabling it is not reversible for that product ID under Apple's current rules;
4. direct purchaser fulfillment remains exactly once;
5. family member receives derivative access without creating a second paid sale;
6. `isFamilyShareable` matches the intended product presentation;
7. StoreKit/server entitlement state distinguishes direct and family-shared ownership;
8. existing pre-enable non-consumable purchase restore behavior is tested;
9. purchaser refund produces correct purchaser correction plus family access revocation without double clawback;
10. family-only `REVOKE` removes derivative access but preserves an independent direct purchase;
11. leaving/changing the family group is not classified as fraud;
12. purchased Diamonds are not copied, restored, or deducted through Family Sharing;
13. 30-Day VIP cannot be silently retyped or restarted;
14. Lifetime VIP sales-window close does not incorrectly revoke existing direct or valid derivative access;
15. family member access does not reopen a closed Lifetime VIP sale;
16. support can distinguish purchaser, family beneficiary, and direct owner without exposing unrelated private/payment data;
17. canonical English legal wording has been reviewed for any material public-meaning change;
18. all localized legal pages have been synchronized if that canonical public meaning changed; and
19. mandatory German/EU consumer remedies remain intact.

## 15. Regression scenarios

At minimum test:

1. Lifetime VIP Family Sharing disabled: no family member is granted Lifetime VIP from another person's purchase.
2. Deliberately approved family-shareable non-consumable: purchaser receives direct Lifetime VIP exactly once and qualifying family member receives derivative access.
3. Same family-shared transaction arrives repeatedly: no duplicate entitlement or sale is created.
4. Existing purchaser bought before Family Sharing was enabled: restore path produces the correct derivative family state without cloning the purchaser's paid transaction.
5. Family member leaves the family: derivative access ends, unrelated purchases remain.
6. Purchaser disables purchase sharing / relevant family sharing condition ends: derivative access is reconciled without fraud sanction.
7. Purchaser receives refund: purchaser transaction is reconciled and family member loses derivative access without a second monetary refund being invented.
8. Family member has their own valid direct Lifetime VIP and also shared access: family revocation preserves the direct Lifetime VIP.
9. Lifetime VIP sale closes: no new direct sale is opened, but existing valid purchaser entitlement remains.
10. Family member obtains valid derivative access after sale close from an existing purchaser: it is not counted as a new sale and does not reopen the promotion.
11. Diamond purchase exists on purchaser account: family member does not receive duplicated Diamonds.
12. 30-Day VIP exists: Family Sharing does not restart, extend, duplicate, or convert it.
13. Support sees different country/language data for purchaser and family member: no automatic regional-price-abuse sanction.
14. App Store Connect configuration accidentally enables Family Sharing on current Lifetime VIP: freeze further catalog changes, preserve evidence, assess historical purchasers, and do not accuse players who receive Apple-authorized access.

## 16. Current reference points

Re-check these sources before any production Family Sharing change because Apple rules and StoreKit behavior can change:

- Apple App Store Connect, Turn on Family Sharing for In-App Purchases: https://developer.apple.com/help/app-store-connect/configure-in-app-purchase-settings/turn-on-family-sharing-for-in-app-purchases
- Apple StoreKit, `Product.isFamilyShareable`: https://developer.apple.com/documentation/storekit/product/isfamilyshareable
- Apple StoreKit, Family Sharing revocation handling: https://developer.apple.com/documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:didrevokeentitlementsforproductidentifiers:)
- Apple developer material, Supporting/Exploring Family Sharing for In-App Purchases: https://developer.apple.com/videos/play/tech-talks/110345/
- German BGB § 327e: https://www.gesetze-im-internet.de/bgb/__327e.html
- German BGB § 327r: https://www.gesetze-im-internet.de/bgb/__327r.html

## 17. Release rule

**Do not enable Apple Family Sharing for the current TycoonX Lifetime VIP product as an experiment.** It is an entitlement-scope and catalog decision with an Apple-documented irreversible configuration consequence for that product ID.

If CK-Labs deliberately launches Family Sharing later, the implementation must distinguish direct and derivative ownership, preserve the limited-time Lifetime VIP sales model, keep Diamonds and one-time 30-Day VIP separate, handle `REVOKE` versus `REFUND` correctly, update player-facing/legal wording where materially required, synchronize all affected localizations, and preserve all mandatory consumer rights.
