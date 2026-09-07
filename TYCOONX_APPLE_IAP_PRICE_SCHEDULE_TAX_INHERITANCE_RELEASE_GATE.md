# TycoonX Apple IAP Price Schedule & Tax Inheritance Release Gate

**Last reviewed: September 7, 2026**

Owner: CK-Labs  
Scope: Apple App Store In-App Purchase pricing for TycoonX Diamonds, one-time 30-Day VIP, limited-window Lifetime VIP, regional storefront prices, scheduled price changes, base-country inheritance, tax categories, tax/FX adjustments, promotional sale windows, and historical transaction reconciliation.

## Purpose

Apple App Store Connect pricing has several inheritance and scheduling behaviors that can silently change future TycoonX prices when a product is edited. This gate prevents a routine App Store Connect change from deleting a planned promotion, detaching a product from automatic tax/FX updates, creating a misleading Lifetime VIP sale, or causing CK-Labs to misclassify a legitimate storefront price as player abuse.

This gate supplements `TYCOONX_PRICING_CATALOG_CONFIGURATION_ERROR_RELEASE_GATE.md`, the Apple refund gate, the Lifetime VIP gate, and the German/EU price and promotion gates. It does not change the canonical TycoonX product promises.

## P0 release rule

A change to an Apple IAP base country, regional price, price schedule, manual storefront price, or tax category is a **commercial configuration migration**, not a harmless metadata edit.

Before publishing such a change, CK-Labs must preserve the current configuration, understand which Apple inheritance rules will stop applying, verify every intended future sale window, and check the final consumer-facing prices in affected storefronts.

No completed purchase may be retroactively repriced because the current App Store Connect configuration later changed.

## 1. Apple price schedule states must remain distinct

Apple currently supports three relevant IAP price-change models:

- **Global Price Change:** CK-Labs chooses a price in the IAP base country or region and Apple provides comparable prices in the other storefronts. Apple may later adjust non-base storefront prices for tax and foreign-exchange changes.
- **Temporary Price Change:** CK-Labs chooses start and end dates for selected countries or regions. The longest Apple temporary price change is currently **one year**. During the temporary period, Apple does not automatically adjust the selected prices in the same way as normal global pricing.
- **Custom Price Change:** CK-Labs manually manages selected storefronts or all storefronts. Apple does not automatically update manually managed storefront prices for tax or foreign-exchange changes.

Do not collapse these into a single `price_override=true` state. Preserve which model is controlling each storefront and the effective dates.

A price schedule is not the same thing as product availability. A low scheduled Lifetime VIP price does not itself prove that Lifetime VIP should be purchasable, and ending a price schedule does not by itself prove every acquisition route is closed.

## 2. Changing an IAP base country can delete scheduled price changes

Apple currently warns that **changing an In-App Purchase's base country or region deletes any scheduled price changes** for that IAP.

Therefore, before editing the base country or region for a TycoonX IAP:

1. export or otherwise preserve the current price schedule and affected storefronts;
2. record every pending global, temporary, and custom price change;
3. record any genuine promotion start/end dates, especially Lifetime VIP sales windows;
4. verify which manually managed storefronts exist;
5. record the current tax-category inheritance state;
6. perform the base-country change only as an approved configuration migration; and
7. recreate and verify every intended future schedule that Apple deleted before the product is treated as commercially ready.

A checkbox in App Store Connect acknowledging deletion is not a substitute for this reconciliation.

### Lifetime VIP fail-closed rule

Lifetime VIP is a limited-time promotional offering available only during selected genuine sales windows. It may be withdrawn from sale and may never return.

If an Apple base-country or pricing edit deletes a scheduled Lifetime VIP price change, TycoonX must **fail closed for new direct Lifetime VIP acquisition until the intended sale configuration is revalidated**. The edit must not silently:

- extend an expired sale;
- reopen a closed sale;
- leave a promotional price active outside the advertised window;
- create a permanent route to Lifetime VIP;
- promise a future sale or price match; or
- revoke a valid Lifetime VIP already purchased during a genuine sales window.

A player who buys through an official Apple flow at a price Apple genuinely presents is not automatically committing promotion abuse or regional-price abuse merely because CK-Labs accidentally deleted or changed a schedule.

## 3. IAP-level pricing edits can break app-level base-country inheritance

Apple currently states that once an individual IAP's base country or region is edited, or the IAP's pricing is updated separately, that IAP no longer inherits later changes to the app's base country or region.

TycoonX must therefore maintain an inventory showing, for every Apple product ID:

- whether it still inherits the parent app's base country or region;
- whether it has been independently edited;
- which storefronts are manually managed;
- the current base country and currency;
- any pending scheduled changes; and
- the expected product mapping: Diamonds, one-time 30-Day VIP, or Lifetime VIP.

Changing the app-level base country is not enough evidence that every TycoonX IAP moved with it. Independently edited IAPs require explicit verification.

## 4. Manual storefront pricing transfers tax/FX maintenance risk to CK-Labs

Apple's current pricing model periodically adjusts comparable storefront prices for taxes and foreign-exchange changes when Apple is managing those prices. If CK-Labs manually manages a storefront, Apple says it will no longer make those automatic pricing adjustments for that storefront.

Release rules:

- identify every storefront marked or effectively treated as **Manually Adjusted**;
- review those storefronts after material tax, VAT, currency, or FX changes;
- do not assume Apple will update a manually managed German or EU storefront price;
- do not call a legitimate price difference fraud merely because an automatically managed storefront changed while a manual storefront did not;
- reconcile intentional regional prices separately from stale manual prices; and
- preserve the final Apple checkout price/currency for completed transactions.

A manual pricing decision is CK-Labs configuration responsibility. It is not evidence by itself that the player manipulated country, region, tax, currency, or storefront data.

## 5. Temporary price changes have a bounded duration

Apple currently limits an IAP Temporary Price Change to a maximum of **one year**.

Do not design a TycoonX commercial promise that assumes an Apple temporary-price object can run forever. If CK-Labs wants a normal future standard price, use the appropriate supported pricing configuration rather than disguising an indefinite standard price as a temporary promotion.

For Lifetime VIP, the Apple scheduling mechanism must match the genuine sale claim. A repeated or automatically recreated temporary schedule must not be used to create fake scarcity, a permanently repeating "last chance" campaign, or a misleading crossed-out/reference price.

## 6. Apple tax-category inheritance must be tracked separately from price

Apple currently applies the app's tax category to an IAP by default unless CK-Labs gives that IAP its own tax category.

Apple also currently states that:

- an IAP tax-category change affects **future transactions only**;
- changing the IAP tax category **does not change the IAP price**; and
- after an IAP receives its own tax category, future changes to the app's tax category do not affect that IAP unless it is set back to **Match to parent app**.

Release rules:

- record whether each TycoonX IAP inherits the app tax category or has an independent category;
- verify that the selected category accurately describes the product under Apple's current rules;
- re-audit individually managed IAP tax categories whenever the parent app tax category changes;
- never infer that a price should have changed merely because a tax-category value changed;
- never retroactively alter a completed purchase price because the tax category is corrected later; and
- preserve provider tax/transaction evidence needed for accounting, support, refunds, and mandatory consumer rights.

A tax-category configuration correction can affect future tax treatment or CK-Labs proceeds. It does not rewrite the historical customer transaction.

## 7. Total-price and promotion presentation remain a separate legal obligation

For German consumer-facing offers, the current Preisangabenverordnung, including **PAngV § 3**, requires the total price to be stated where a business offers or advertises goods or services to consumers with prices. The total consumer price and mandatory components must be presented as required by applicable law.

Provider tax/FX automation does not excuse TycoonX-controlled marketing from displaying a lawful, non-misleading total price where CK-Labs itself makes a price claim.

Before publishing a German/EU campaign, compare:

- the TycoonX-controlled displayed price;
- the current Apple storefront price;
- the applicable genuine promotion window;
- mandatory tax/price information; and
- the final confirmation flow.

If those disagree, stop or correct the TycoonX-controlled claim instead of assuming the player will discover the difference at checkout.

## 8. Completed transactions remain historical facts

A future Apple base-country edit, tax-category change, FX adjustment, custom price, temporary promotion, or global price change does not retroactively reprice an already completed one-time TycoonX purchase.

Subject to mandatory law and a lawful correction of a genuine error where permitted:

- the provider-confirmed completed transaction remains associated with its transaction-time price and currency;
- a later price increase does not create an extra charge on that completed purchase;
- a later price decrease does not automatically create a refund, credit, or price-match right;
- a later tax-category edit does not create a second tax debit against the player; and
- a later Lifetime VIP campaign may lawfully use a different genuine price without creating continuous-availability or prior-purchaser price-match expectations.

If Apple or mandatory law provides a refund, withdrawal, conformity, price-reduction, termination, or other remedy, preserve it. This gate must never be used to waive non-waivable rights.

## 9. Configuration drift is not player misconduct

The following events are not, by themselves, evidence of fraud, hacking, exploitation, account compromise, chargeback abuse, entitlement abuse, or regional-price abuse:

- CK-Labs changed an IAP base country and deleted a planned schedule;
- an independently edited IAP stopped inheriting the app base-country change;
- Apple automatically adjusted one storefront for tax/FX while another storefront was manually managed;
- CK-Labs selected an incorrect IAP tax category;
- a temporary price change ended or was recreated incorrectly;
- Apple displayed a valid regional price different from another country's price; or
- a cached TycoonX price disagreed with the final Apple checkout price.

Enforcement requires separate reliable evidence of intentional abuse. Configuration mistakes should first be handled as configuration, support, accounting, fulfillment, or consumer-remedy incidents.

## 10. Change-control checklist

Before any production Apple IAP pricing or tax-category edit:

1. identify the exact Apple product ID and TycoonX entitlement;
2. snapshot current base country, storefront prices, scheduled changes, availability, promotions, and tax-category inheritance;
3. identify whether the product still inherits app-level pricing/base-country changes;
4. identify manually managed storefronts and resulting tax/FX maintenance responsibility;
5. verify any Lifetime VIP sale start/end and all acquisition routes;
6. confirm TycoonX-controlled marketing and checkout-facing price claims;
7. make the App Store Connect change;
8. re-fetch/review the resulting Apple configuration;
9. confirm intended scheduled changes still exist;
10. confirm tax-category inheritance state;
11. verify current storefront prices for representative countries including Germany where offered;
12. preserve the change record and effective time; and
13. monitor the first live transactions without mutating historical purchases.

If the post-change state cannot be confidently reconciled, stop new affected purchases until the configuration is understood. Do not guess.

## 11. Minimum regression scenarios

1. **Base-country schedule deletion:** Lifetime VIP has a future seven-day Apple price schedule. CK-Labs changes the IAP base country. The scheduled change disappears. New Lifetime VIP acquisition remains blocked until the genuine sale configuration is restored and verified.
2. **No silent sale extension:** a deleted/recreated Lifetime VIP schedule cannot keep the promotional price active after the advertised end time.
3. **Historical purchase isolation:** a player bought Lifetime VIP in an earlier genuine window. A later base-country edit does not alter that valid entitlement or historical price.
4. **Broken inheritance detection:** the app base country changes, but a separately edited 500-Diamond IAP does not inherit it. QA detects the independent configuration instead of assuming all IAPs changed.
5. **Manual storefront drift:** Apple adjusts an automatically managed storefront for tax/FX while a manually managed storefront stays unchanged. Support does not label purchasers in the cheaper storefront abusive merely because the prices diverge.
6. **Tax-category independence:** CK-Labs assigns an IAP-specific tax category and later changes the parent app category. QA detects that the IAP remains separately managed.
7. **Future-only tax change:** correcting an IAP tax category affects future transactions and does not retroactively reprice an earlier completed Diamond purchase.
8. **Temporary duration:** a plan that assumes one Apple Temporary Price Change can last longer than one year is rejected before publication.
9. **30-Day VIP mapping:** a price migration does not convert one-time 30-Day VIP into a recurring subscription or restart a valid 30-day clock.
10. **Diamond mapping:** a pricing migration never changes the number of Diamonds granted for an already completed transaction.
11. **German total-price check:** a TycoonX-controlled German promotion is blocked if its displayed total price no longer matches the current lawful commercial configuration.
12. **No fraud inference:** a player completes an official Apple purchase during CK-Labs configuration drift. No enforcement occurs without independent evidence of intentional abuse.

## Current platform and legal checkpoint

Checked September 7, 2026 against current Apple App Store Connect Help and current German law:

- Apple supports Global, Temporary, and Custom IAP price changes.
- Apple's current maximum duration for an IAP Temporary Price Change is one year.
- Changing an individual IAP base country or region deletes its scheduled price changes.
- An independently edited IAP no longer inherits later app base-country changes.
- Apple does not automatically tax/FX-adjust storefronts that CK-Labs manually manages.
- IAP tax categories inherit from the app by default; a separately selected IAP category becomes independently managed.
- IAP tax-category changes affect future transactions and do not change the IAP price.
- Current German PAngV § 3 requires total-price disclosure for consumer offers or price advertising within its scope.

Platform behavior can change. Re-check Apple documentation before relying on a configuration-sensitive rule in a future migration.

## Founder-protective interpretation

This gate protects CK-Labs by preventing invisible App Store Connect inheritance changes from becoming accidental promises, false scarcity, stale regional prices, tax/FX drift, entitlement disputes, or support accusations that cannot be supported by transaction evidence.

It does not require CK-Labs to keep a future price, promotion, regional price, Diamond bundle, VIP price, or Lifetime VIP sale continuously available. CK-Labs may lawfully change future prices, bundles, currencies, storefronts, and genuine promotions subject to applicable law and provider rules.

It also does not allow CK-Labs to rewrite completed transactions after the fact or waive mandatory German/EU consumer rights.