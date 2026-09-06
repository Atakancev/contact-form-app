# TycoonX Apple EU Allowed-Regions Source Conflict Gate

Last reviewed: September 6, 2026

TycoonX went to full release on **September 1, 2026**. This is an internal release and operations gate. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, Apple Custom EULA, or the broader `TYCOONX_APPLE_EU_OCTOBER_2026_TRANSITION_GATE.md`.

## Why this gate exists

Apple's current documentation for the StoreKit External Purchases or Offers Entitlement is not perfectly aligned on the storefront codes shown for the new `com.apple.developer.storekit.custom-purchase-link.allowed-regions` entitlement.

As checked on **September 6, 2026**:

- Apple's current program-specific **Payment options on the App Store in the EU** page lists **Iceland (`is`) and Norway (`no`)** among the valid country codes for `com.apple.developer.storekit.custom-purchase-link.allowed-regions`, together with the EU member-state codes.
- Apple's current generic entitlement documentation for **StoreKit external purchases or offers entitlement** says that, in addition to Brazil (`br`) and Japan (`jp`), the permitted **EU country codes** are the EU member-state codes, but its displayed list currently does **not** include Iceland or Norway.

Do not hide this divergence, silently choose the more commercially convenient interpretation, or turn either documentation list into a permanent hard-coded promise.

## P0 rule: Apple program eligibility is not a geopolitical shortcut

For TycoonX payment routing, the phrase "EU storefront" is an **Apple program term**, not a safe substitute for a political or treaty-membership test in application code.

In particular:

- do not implement `isAlternativePaymentEligible = isEuropeanUnionMember(country)`;
- do not state that Iceland or Norway are EU member states;
- do not exclude a storefront solely because it is outside the political EU if Apple's current program-specific terms and actual account entitlement expressly support that storefront;
- do not include a storefront solely because it is geographically European;
- do not copy a static country list from a blog post, cached documentation page, old entitlement, or previous StoreKit program and treat it as permanent authority; and
- do not use the player's device language, GPS location, IP address, SIM country, billing-address guess, or VPN detection as the sole proof that an Apple alternative-payment route is available.

The production decision must use the **then-current Apple program rules plus actual TycoonX account/app eligibility and StoreKit runtime eligibility**.

## P0 source-conflict resolution

Before enabling an Apple alternative-payment route for any storefront whose status is disputed or changed, CK-Labs must retain dated evidence for all material layers that are available:

1. the current Apple program-specific support page for the payment option being used;
2. the current entitlement/API documentation for the entitlement being shipped;
3. the Apple Developer Program License Agreement / Attachment 14 version actually accepted by the Account Holder where applicable;
4. the TycoonX App ID capability state in Certificates, Identifiers & Profiles;
5. the provisioning profile generated from that App ID;
6. the entitlements embedded in the production-signed binary;
7. the `allowed-regions` values actually shipped in that binary;
8. the App Store Connect storefront and submission configuration; and
9. the runtime `canMakePayments` and `ExternalPurchaseCustomLink.isEligible` result where that API path applies.

If current official Apple sources materially disagree and the actual App ID/profile/App Store Connect/StoreKit state does not resolve the disputed storefront, **fail closed for the alternative-payment route in that storefront**. Keeping or falling back to Apple In-App Purchase where available is safer than guessing that an Xsolla or other alternative route is permitted.

Do not fail open merely because:

- an entitlement key compiles;
- Xcode accepts a country code syntactically;
- Xsolla can process a payment from that country;
- the TycoonX webshop is reachable there;
- a user can open a browser link;
- an older Apple page listed the country;
- a newer Apple page appears more favorable commercially; or
- a test account happened to complete a transaction once.

## Current September 6, 2026 region evidence

The current program-specific Apple page for **Payment options on the App Store in the EU** lists these values for the new `allowed-regions` entitlement:

`at`, `be`, `bg`, `hr`, `cy`, `cz`, `dk`, `ee`, `fi`, `fr`, `de`, `gr`, `hu`, `is`, `ie`, `it`, `lv`, `lt`, `lu`, `mt`, `nl`, `no`, `pl`, `pt`, `ro`, `sk`, `si`, `es`, `se`.

This checkpoint records what Apple displays **today**. It is not a promise that the list will remain unchanged.

The generic entitlement documentation currently describes Brazil (`br`) and Japan (`jp`) separately and then lists the EU member-state codes without `is` or `no`. Those Brazil/Japan references do not put Brazil or Japan under the EU Attachment 14 commercial framework. Region support under another Apple program must be gated by that program's own terms, entitlement, storefront, review, payment, reporting, tax, and consumer-support requirements.

## Implementation architecture

### 1. Separate Apple storefront eligibility from TycoonX locale

Use separate concepts for:

- TycoonX UI/legal locale;
- App Store storefront;
- Apple payment-program eligibility;
- StoreKit runtime eligibility;
- Xsolla/payment-provider country support;
- displayed currency and tax state; and
- server-side entitlement ownership.

A German-language TycoonX session is not proof of the German App Store storefront. A player using English in Norway is not proof of an ineligible storefront. A changed device region is not proof that a purchase route should change.

### 2. Use an auditable release manifest, not scattered booleans

The Apple alternative-payment configuration should be versioned and auditable. At minimum record:

- app version/build;
- accepted Apple terms/version/date;
- entitlement family;
- intended storefront set;
- shipped `allowed-regions` array;
- whether Apple IAP is offered on the same surface;
- alternative processor used, if any;
- effective date of the configuration; and
- source-check date.

Do not maintain unrelated copies of the region list in Swift, backend feature flags, checkout configuration, support macros, and analytics without one authoritative release configuration and parity checks.

### 3. Runtime remains authoritative for the attempted route

Even where a storefront is present in the release manifest:

- call `canMakePayments` before starting the applicable purchase flow;
- check `ExternalPurchaseCustomLink.isEligible` before exposing or initiating the applicable custom-link route;
- call Apple's required notice/disclosure API after deliberate user action where required; and
- fail closed when eligibility is false, unavailable, stale, or cannot be established.

A configured country code is permission to attempt the compliant StoreKit path, not proof that every user in that storefront can use it.

### 4. Storefront changes are re-evaluated

If the App Store storefront changes between sessions, do not reuse a stale alternative-payment eligibility result. Re-evaluate the route before showing the next purchase action.

Changing storefront or correcting a region configuration must **not** itself:

- delete purchased Diamonds;
- restore spent Diamonds;
- restart or extend a one-time 30-Day VIP period;
- add an expiry date to Lifetime VIP;
- reopen a closed Lifetime VIP promotional sales window; or
- treat the player as a hacker, fraudster, chargeback abuser, or regional-pricing abuser.

Transaction-specific refunds, reversals, proven fraud, or other lawful entitlement corrections remain handled under the applicable TycoonX and payment-channel rules.

## Completed purchases and later region changes

A later Apple documentation change, entitlement-list correction, storefront change, or CK-Labs release-configuration correction does not retroactively rewrite a completed transaction.

For a completed purchase:

- the final total price shown before confirmation remains the transaction price, subject to mandatory law;
- a later price decrease does not automatically create a refund, credit, or price-match right unless mandatory law requires it;
- a later increase does not create an extra charge on that completed one-time purchase;
- do not retroactively levy a newly discovered Apple fee on the player;
- do not double-charge because a route was later reclassified; and
- preserve the original store/provider transaction ID, storefront/program context, payment status, tax state, and entitlement-delivery record needed for refunds, chargebacks, audits, restoration, and corrections.

## Regional pricing and abuse controls

The Apple allowed-region configuration is not a license to mislead users about pricing or to punish legitimate travel or storefront changes.

CK-Labs may maintain lawful platform/country/channel regional prices for future purchases. Taxes, VAT, currencies, FX conversion, platform tiers, and provider adjustments may produce genuine local-price differences. The total consumer price and mandatory taxes/fees must be shown as required before confirmation.

Regional-price abuse should be acted on only from reliable transaction/account evidence and under the TycoonX Terms. A VPN signal, language choice, IP mismatch, or storefront change alone is not sufficient proof of abuse.

## Product invariants

This routing gate does not change the TycoonX products:

- **Diamonds** are the quantity actually purchased and validly delivered. Purchased Diamonds do not expire merely because time passes or Apple changes a storefront/payment program.
- **30-Day VIP** is a **one-time, non-renewing** 30-day entitlement. A routing retry, storefront change, restoration event, or payment-provider migration must not silently create a subscription or restart the original period.
- **Lifetime VIP** is a **limited-time promotional offering available only during selected genuine sales windows**. CK-Labs may withdraw it from sale and it may never return. Closing or changing a sales window does not cancel an already valid purchased Lifetime VIP entitlement, subject to transaction-specific refunds/reversals, mandatory remedies, or lawful permanent service discontinuation.

## Provider and responsibility separation

Do not collapse these states:

- Apple program/storefront eligibility;
- StoreKit runtime eligibility;
- Xsolla or another PSP's ability to accept payment;
- payment authorization/settlement;
- Apple reporting/commission state;
- tax/VAT state;
- refund/chargeback state; and
- TycoonX entitlement delivery.

A successful Xsolla payment is not proof that Apple allowed the route. An Apple-eligible route is not proof that payment settled. Apple reporting success is not proof that TycoonX delivered the entitlement. A refund or chargeback requires transaction-specific reconciliation rather than a global account wipe.

## Release tests

Before enabling or changing this route, test at minimum:

- Germany or another undisputed code in the current program-specific list;
- Iceland (`is`);
- Norway (`no`);
- a storefront not enabled in the shipped array;
- a user whose device locale differs from App Store storefront;
- storefront change between sessions;
- `canMakePayments == false`;
- `ExternalPurchaseCustomLink.isEligible == false`;
- stale/mismatched provisioning profile;
- production binary whose embedded entitlements differ from intended configuration;
- Xsolla success followed by delayed TycoonX entitlement delivery;
- successful entitlement delivery followed by refund/reversal;
- duplicate payment-provider callbacks;
- changed Apple documentation after the build was released; and
- a current-source conflict that remains unresolved by actual developer-account/platform state.

The unresolved-conflict test must prove that the alternative route disappears or stays disabled **without deleting existing entitlements**.

## Evidence retention

For every production change to this region routing, keep enough evidence to reconstruct why it was enabled:

- source titles and URLs;
- source publication/update date where available;
- retrieval date;
- accepted Apple agreement version/date;
- App ID capability screenshot/export;
- provisioning-profile identifier;
- signed-build identifier;
- embedded entitlement/region values;
- App Store Connect review/submission state; and
- release-config commit/build reference.

Do not retain unnecessary player personal data merely to prove Apple program eligibility. Apply the TycoonX Privacy Policy, GDPR minimization, retention, security, and deletion rules.

## Source checkpoint

Rechecked **September 6, 2026** against:

- Apple Developer Support, **Payment options on the App Store in the EU**: `https://developer.apple.com/support/payment-options-on-the-app-store-in-the-eu`
- Apple Developer Documentation, **StoreKit external purchases or offers entitlement** (`com.apple.developer.storekit.custom-purchase-link.allowed-regions`): `https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.storekit.custom-purchase-link.allowed-regions`
- Apple Developer Support, **Changes for apps in the European Union**: `https://developer.apple.com/support/apps-in-the-eu/`

Apple can revise these pages, account eligibility, country support, APIs, entitlement rules, commercial terms, reporting, review requirements, and tax treatment. Recheck them before a material production routing change. Where current official sources still conflict, rely on the actual accepted program/account/app configuration and **fail closed rather than guessing**.

## Localization impact

This gate changes operational routing evidence, not the canonical player-facing meaning of the TycoonX Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards. It therefore does **not** reopen completed localizations by itself. If the actual player-facing payment availability, responsibility allocation, product meaning, price-change logic, refund rights, or mandatory-rights consequences later change materially, update the canonical English legal source first and then reopen affected localized documents in the required locale order.