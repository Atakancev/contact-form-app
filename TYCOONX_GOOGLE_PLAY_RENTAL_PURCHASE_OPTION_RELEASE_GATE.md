# TycoonX Google Play Rental Purchase Option Release Gate

**Status:** P0 Google Play catalog / entitlement / consumer release gate  
**Owner:** CK-Labs  
**Last reviewed:** September 9, 2026  
**Scope:** Google Play one-time-product `Rent` purchase options and their interaction with purchased Diamonds, one-time 30-Day VIP, Lifetime VIP, refunds, pricing, regional availability, old clients, provider reconciliation, and mandatory consumer rights.

## Purpose

Google Play's newer one-time-product object model can distinguish **Buy** and **Rent** purchase options. A Rent purchase option gives access for a defined period rather than the ordinary permanent/consumable acquisition semantics of a Buy option. That flexibility is not a safe drop-in configuration for the current TycoonX paid catalog.

This gate prevents an accidental or future Google Play rental configuration from changing the legal or commercial meaning of TycoonX products, causing purchased Diamonds or Lifetime VIP to expire, extending 30-Day VIP beyond its disclosed period, or creating inconsistent behavior between Google Play, Apple App Store, and the official TycoonX web shop using Xsolla.

TycoonX is in full release. This operational gate supplements, and does not replace, the TycoonX Terms of Service, Purchases & Refunds Policy, current Google Play rules, transaction-specific checkout information, or mandatory consumer law.

## Current September 9, 2026 Google position

Google's current Play Console one-time-product guidance says:

- a one-time product must have at least one purchase option;
- a purchase option can currently be configured as **Buy** or **Rent**;
- Buy means the user acquires the entitlement;
- Rent means the user receives access for a fixed period;
- a rental requires a rental period and can optionally have an expiry period measured from the time the user starts consuming the entitlement;
- currently documented rental periods include 48 hours, 72 hours, 30 days, and 60 days, with only specified shorter expiry periods available for each;
- Google surfaces the selected rental and expiry values to users;
- Google says it does **not** control access to the rented product, so the developer must enforce the appropriate access period;
- where an expiry period is configured, access can continue past the nominal rental period. Google's example says a 30-day rental with a 48-hour expiry period can remain accessible until day 32 when use begins on the last day;
- only Buy purchase options can be marked backwards compatible for older Play Billing Library purchase flows;
- pre-orders are supported only for Buy purchase options; and
- Google's current multi-product one-time-purchase feature does not support Rent purchase options.

The current Android Publisher API models a rent purchase option with `rentalPeriod` and optional `expirationPeriod`. The API describes `rentalPeriod` as beginning when the purchase flow completes and `expirationPeriod` as beginning when the user starts using the entitlement. Current Billing Library product details expose rental information through `RentalDetails` and return it only for rent offers.

Google's help page also warns that some newer one-time-product features are currently available only through an early access program and may have limited support. CK-Labs must therefore verify current production eligibility before relying on any rental feature, even if the field is visible in documentation or an API schema.

## P0 production decision

**Do not activate Google Play Rent purchase options for purchased Diamonds, one-time 30-Day VIP, or Lifetime VIP.**

A rental purchase option for any current TycoonX paid product requires a deliberate product/legal/payment review before activation. The review must verify the exact live Google capability, Billing Library support, catalog behavior, checkout copy, product duration, entitlement timing, refund behavior, regional availability, old-client behavior, consumer-law consequences, finance reporting, support procedures, and cross-channel consistency.

Unknown or newly introduced Google purchase-option types must fail closed for production paid entitlement until explicitly reviewed.

## 1. Purchased Diamonds must never become time-limited because of a rental configuration

Purchased Diamonds are virtual currency acquired for use inside TycoonX. The canonical Purchases & Refunds Policy states that purchased Diamonds do not expire merely because time passes.

Therefore:

- use a Google Play Buy purchase option consistent with the current Diamond purchase model;
- do not map a Rent period or rental expiry to the player's purchased Diamond balance;
- do not delete, zero, freeze, or claw back purchased Diamonds merely because a Google rental timer elapsed;
- do not convert spent-vs-unspent Diamond accounting into a Google rental-consumption timer;
- do not treat Google `expirationPeriod` as authority to expire unrelated purchased Diamonds; and
- keep refund, reversal, chargeback, duplicate-grant, fraud, and configuration-error corrections transaction-specific.

If a Diamond SKU is accidentally exposed as Rent, stop new affected checkout initiation where reasonably practicable and reconcile completed transactions against what the consumer was actually shown and what mandatory law requires. Do not accuse the buyer of exploiting CK-Labs' catalog mistake.

If the checkout clearly represented a normal permanent Diamond purchase while Google was misconfigured as Rent, the default incident response is to cure the promised product or provide the legally required refund/remedy. A provider rental timeout is not a lawful shortcut to erase paid value that was represented as an ordinary Diamond purchase.

## 2. One-time 30-Day VIP must remain exactly the disclosed one-time 30-day product

TycoonX 30-Day VIP is one-time, non-renewing, and lasts **30 consecutive days from activation or availability** to the purchasing account.

A Google 30-day Rent option is not automatically equivalent to the TycoonX 30-Day VIP contract because Google can model rental timing differently and can optionally add an expiry period after first use. In particular:

- do not configure current 30-Day VIP as Rent merely because Google offers a 30-day rental-period value;
- do not start the TycoonX paid clock from a Google purchase-flow timestamp when the entitlement is not yet actually activated or available;
- do not configure an optional rental expiry period that can turn the disclosed 30-day entitlement into 31, 32, or another duration;
- do not restart the period when the player first opens a VIP feature if the authoritative TycoonX period already began on activation/availability;
- do not use a rental timeout to bypass the existing 30-Day VIP outage/conformity-remedy rules; and
- do not use Rent to make the product silently recurring or auto-renewing.

If CK-Labs ever deliberately wants a Google rental implementation for 30-Day VIP, legal and localized checkout meaning must first be shown to match the canonical 30-day entitlement exactly in all material states, including delayed fulfillment, offline use, first-use timing, restore, refund, account migration, and provider outage. If it cannot match, do not launch the rental mapping.

## 3. Lifetime VIP must never be Rent

Lifetime VIP is a one-time premium entitlement offered only during selected genuine promotional sales windows. For a valid purchase, it is intended to remain active for the commercial operating lifetime of the TycoonX Service for the purchasing account, subject to the canonical Terms, valid transaction corrections, lawful account termination, service shutdown, and mandatory law.

Therefore:

- Lifetime VIP must not use a Google Rent purchase option;
- no `rentalPeriod`, `expirationPeriod`, rental-access timestamp, or rental UI may impose a hidden calendar expiry on a valid Lifetime VIP;
- a rental configuration must never be used to create a cheaper temporary product while still calling it "Lifetime VIP";
- deactivating or expiring a rental purchase option cannot revoke a valid historical Lifetime VIP purchase;
- a provider-side rental state cannot reopen a closed Lifetime VIP sales window; and
- support must not convert a rental screenshot, cached rental offer, old catalog response, or expired rental state into a new Lifetime VIP sale after a window closes.

If Lifetime VIP is accidentally sold through a Rent option, freeze new affected sales and investigate the transaction-specific checkout representation. If the player was clearly sold Lifetime VIP, cure the valid Lifetime entitlement or provide the remedy required by the provider rules, contract, and mandatory law. Do not transform the player-facing "Lifetime" promise into a temporary rental after payment.

## 4. Buy and Rent are separate commercial meanings, not interchangeable implementation flags

TycoonX checkout and support must not hide the distinction between acquiring a product and renting temporary access.

Before any future rental launch:

- the purchase screen must clearly state the temporary duration and any first-use expiry condition that materially limits access;
- product name, description, icon, price presentation, button labels, confirmation, receipt/support copy, and in-game entitlement display must not imply permanent ownership where only temporary access is sold;
- a Rent option must not be used as a technical substitute for a Buy option without updating the actual offer and legal review;
- a Buy option must not be described as a rental merely to justify later expiry; and
- CK-Labs must preserve the final product/purchase-option/offer identifiers and provider-confirmed price/currency for each completed transaction.

The final total price shown before confirmation still governs the completed transaction, subject to lawful obvious-error correction and mandatory law. A later catalog change between Buy and Rent does not retroactively rewrite an earlier completed purchase.

## 5. Rental and first-use timing must not be inferred from unreliable client signals

If a future TycoonX product legitimately uses Google Rent, the implementation must define and persist the authoritative timing model before launch.

Do not make these events interchangeable:

- payment-flow completion;
- Google purchase state becoming `PURCHASED`;
- CK-Labs entitlement fulfillment;
- TycoonX account activation/availability;
- first use or first consumption of the rented entitlement;
- app foregrounding;
- device-local clock time; and
- provider-reported rental/expiry timing.

A client-side boolean such as `hasOpenedFeature`, a device clock, local preferences, or a screenshot must not be the sole authority for paid expiry. Offline/reinstall/device-change handling must not grant a fresh rental period from the same transaction.

If Google exposes timing data that contradicts CK-Labs state, pause destructive expiry and reconcile authoritative provider/server evidence instead of choosing whichever timestamp shortens the entitlement most.

## 6. Old and unsupported app versions must fail safely

Google currently says only Buy purchase options can be marked backwards compatible. That creates a specific old-client risk.

For TycoonX:

- do not assume an older Billing Library/client can understand or display a Rent option correctly;
- if a current client sees an unexpected rental offer for an existing TycoonX product, fail closed rather than silently selecting it;
- if an old app version cannot represent the material rental duration/expiry disclosure, it must not initiate that rental purchase;
- requiring a supported TycoonX version for a new rental checkout does not permit CK-Labs to erase valid historical purchases; and
- cached old Buy metadata must not be used to launch a newly configured Rent transaction, or vice versa.

A stale or unsupported client is an implementation/configuration issue first, not evidence that the player attempted price abuse, entitlement abuse, hacking, or fraud.

## 7. Rent cannot be silently combined with unsupported Google purchase models

Current Google documentation states that:

- pre-order offers are supported only for Buy purchase options; and
- multi-product one-time purchases do not support Rent purchase options.

TycoonX must therefore not synthesize unsupported combinations client-side or server-side. Specifically:

- do not attach a pre-order lifecycle to a rental merely because both features exist elsewhere in the one-time-product model;
- do not bundle a rented item with Diamonds, 30-Day VIP, Lifetime VIP, or another product through a multi-product flow that Google does not support;
- do not emulate an unsupported rent bundle by granting extra entitlements that were not actually purchased; and
- if Google later adds support for these combinations, fail closed until CK-Labs separately reviews refund scope, entitlement mapping, pricing, and mandatory disclosures.

## 8. Refunds, reversals, chargebacks, and expiry are different states

Rental expiry is not a refund, reversal, chargeback, payment failure, or fraud event.

For any future legitimate rental:

- ordinary expiry should end only the specific time-limited access the player actually purchased;
- expiry must not generate a fake provider refund or chargeback record;
- refund/reversal handling must remain transaction-specific and use authoritative Google evidence;
- a player who simply lets a rental expire must not receive an abuse or fraud strike;
- a refund of a separate Diamond, 30-Day VIP, or Lifetime VIP transaction must not be inferred from a rental expiry; and
- a chargeback or invalid payment must not be disguised as natural rental expiration merely to avoid support or mandatory-remedy handling.

If CK-Labs accidentally granted a permanent entitlement from a transaction clearly sold as a temporary rental, correct only the unsupported excess where legally permitted and proportionate. Preserve the actual transaction, mandatory rights, and any use already supplied when assessing the remedy.

## 9. Regional pricing, taxes, currency, and promotions remain transaction-specific

A Rent option can have its own regional pricing and availability. That does not change the existing TycoonX price rules.

- prices may differ lawfully by country, platform, channel, purchase option, and genuine promotion;
- the checkout's final total price and currency for the completed transaction control, subject to mandatory law and lawful obvious-error correction;
- tax/VAT treatment must follow the applicable transaction/provider evidence rather than be inferred from the word Rent;
- local pricing differences or Google price-conversion patterns are not by themselves regional-price abuse;
- a future rental promotion must be genuine and not use misleading countdowns, crossed-out prices, savings claims, or hidden duration limits; and
- changing a future Rent price does not retroactively reprice an earlier completed Buy purchase, and changing a Buy price does not retroactively reprice a completed Rent purchase.

A later price decrease does not automatically create a price-match, credit, refund, extra Diamonds, or extra access right, and a later increase does not create an extra charge on an already completed one-time transaction, except where mandatory law requires otherwise.

## 10. Apple and Xsolla channel semantics remain independent

A Google catalog flag must never rewrite another provider's transaction.

- Apple purchased Diamonds remain governed by their Apple transaction and TycoonX Diamond rules.
- Apple 30-Day VIP remains governed by the applicable Apple one-time/non-renewing entitlement model.
- Apple Lifetime VIP remains the valid non-consumable Lifetime entitlement where purchased.
- Xsolla Diamonds and VIP remain governed by the official web-shop transaction and configured one-time entitlement.

If CK-Labs ever launches a Google-only rental product, it must have a distinct, accurate product meaning. It cannot cause Apple or Xsolla users with a differently sold entitlement to expire merely because a shared TycoonX SKU name was reused incorrectly.

## 11. Account compromise, fraud, and abuse decisions remain evidence-based

The following are not, by themselves, proof of player misconduct:

- a Rent option unexpectedly appearing;
- a purchase completing on an old or different device;
- a rental timer disagreeing with a stale client;
- Google returning a different purchase-option ID than an old cached build expected;
- a player asking why an entitlement expired;
- a provider/configuration mistake that exposed Rent instead of Buy; or
- a buyer completing a genuinely offered rental price.

Investigate fraud, exploit use, entitlement abuse, chargebacks, account compromise, coupon/promotion abuse, or regional-price abuse with transaction-specific evidence. CK-Labs may correct invalid or exploit-generated value where lawful, but must not turn its own catalog error into automatic player culpability.

## 12. Outages, provider changes, and service discontinuation

A Google Play, CK-Labs, authentication, network, or infrastructure outage must not silently alter a paid rental clock contrary to the actual offer or mandatory law.

For a future legitimate rental:

- preserve authoritative start/end state through outages;
- if a material outage prevents use during paid access, assess conformity/cure/extension/price reduction/termination/refund or other required remedy instead of applying a blanket no-refund rule;
- provider migration must preserve the actual remaining entitlement or provide the required remedy;
- do not extend Lifetime VIP sales because a rental provider feature was unavailable; and
- before permanent service shutdown, stop selling time-limited access early enough where reasonably practicable and address paid periods that cannot be supplied.

A provider rule change can justify changing or discontinuing a future rental product, but does not erase mandatory remedies or retroactively change completed purchases.

## 13. German/EU mandatory consumer protections

Where the German digital-product rules apply, BGB § 327d requires covered digital products to be supplied free from product and legal defects. Under § 327e, contractual characteristics such as quantity, functionality, compatibility, interoperability, continuity, and the agreed period can be relevant to conformity. Statutory remedies remain available when their requirements are met, including cure and, in qualifying cases, termination, price reduction, and damages.

Accordingly:

- a product represented as permanent cannot be made temporary merely by a hidden Google Rent flag;
- a product represented as 30 days cannot silently use a first-use expiry design that materially changes the supplied duration;
- a material rental duration/expiry condition must be disclosed clearly before purchase where required;
- CK-Labs cannot contractually waive non-waivable withdrawal, conformity, update, cure, termination, price-reduction, refund, liability, or information rights; and
- provider tooling does not replace the legal analysis of who is the trader/merchant responsible for the particular obligation.

This gate is founder-protective because it prevents accidental over-delivery, duplicate grants, and catalog abuse while also reducing the risk that a misconfigured store product creates an unenforceable or misleading customer promise.

## 14. Required catalog and backend controls

Before each production release touching Google one-time products:

1. Inventory active purchase options for every paid TycoonX Google product.
2. Assert current Diamond purchase options are Buy, not Rent.
3. Assert current 30-Day VIP purchase options are Buy under the approved one-time model, not Rent.
4. Assert every Lifetime VIP purchase option is Buy and only active during a genuine authorized sales window.
5. Reject unknown purchase-option types in entitlement code until reviewed.
6. Persist provider product ID, purchase-option ID, offer ID where applicable, purchase token, state, amount/currency, and entitlement mapping needed for reconciliation.
7. Never derive Diamond expiration from rental fields.
8. Never derive Lifetime VIP expiration from rental fields.
9. Never allow a rental expiry period to extend the current 30-Day VIP beyond the canonical 30-day meaning.
10. Validate old-client handling before a new purchase-option feature is activated.
11. Keep Google refund/void processing separate from ordinary time expiry.
12. Re-run checkout disclosure and mandatory-rights review before any future rental launch.

## 15. Regression scenarios

At minimum test:

1. Diamond SKU has ordinary Buy option: paid Diamonds are granted once and do not expire by time.
2. Diamond SKU accidentally returns Rent details: checkout fails closed; no silent rental purchase is launched.
3. A Diamond transaction was accidentally completed as Rent while UI promised ordinary Diamonds: incident is cured/refunded lawfully, not blamed on the player.
4. 30-Day VIP has a Buy option: exactly one non-renewing 30-day period is supplied.
5. 30-Day VIP accidentally receives a 30-day Rent option with 48-hour expiry: TycoonX does not silently turn the product into up to 32 days.
6. 30-Day VIP is paid but activation is delayed by CK-Labs outage: Google purchase-flow time does not silently burn unsupplied contractual time contrary to the canonical rule.
7. Lifetime VIP SKU receives Rent details: purchase initiation is blocked and the sales window is not reopened.
8. Historical valid Lifetime VIP exists while current Google catalog is changed: historical entitlement remains valid subject to its original transaction and Terms.
9. Rental expiry occurs: no fake refund, chargeback, or fraud event is created.
10. Refund occurs before a hypothetical rental ends: only that transaction is reconciled using authoritative Google state.
11. Rent purchase appears on an old client that cannot display the material duration: checkout is blocked rather than misrepresented.
12. Cached Buy offer token/purchase-option data points to a now-Rent option: TycoonX refreshes/fails closed instead of launching stale terms.
13. A future rental is unavailable in a player's region: no regional-price-abuse flag is created from the availability difference alone.
14. Google local price differs from CK-Labs internal conversion: provider-confirmed local price is not treated as fraud merely due to rounding/pricing patterns.
15. Player asks support to restore an expired rental: support does not create a new paid period from a screenshot.
16. Player restores a still-valid ordinary Lifetime VIP: rental code does not shorten it.
17. Multi-product flow contains a Rent option: TycoonX blocks the unsupported combination under current Google rules.
18. Pre-order configuration is attempted on Rent: TycoonX blocks the unsupported combination under current Google rules.
19. Same rent transaction is rediscovered after reinstall: no second access period is created.
20. Device clock is changed: paid expiry is not extended or shortened solely from local time.
21. Google/CK-Labs outage crosses a rental expiry boundary: entitlement/remedy is reconciled rather than automatically accusing the player of abuse.
22. Account compromise occurs during a hypothetical rental: security containment is separate from refund, expiry, and fraud decisions.
23. Future Google API introduces an unknown purchase-option type: production entitlement fails closed until reviewed.
24. Google changes its documented rental periods: hard-coded old periods do not silently become authority for new transactions.
25. Rental feature is still EAP or unavailable for CK-Labs: no production catalog dependency is introduced.
26. Apple/Xsolla transaction exists for the same TycoonX account: Google rental metadata does not rewrite those provider-specific purchases.

## 16. Release blockers

Block release or the affected Google purchase path if any of the following is true:

- a current Diamond, 30-Day VIP, or Lifetime VIP purchase option is configured as Rent without the required deliberate review;
- purchased Diamonds can expire from Google rental fields;
- Lifetime VIP can expire from Google rental fields;
- 30-Day VIP can become longer or shorter than the canonical product because of Google rental/first-use timing;
- old clients can buy a rental without accurately receiving its material duration/expiry terms;
- rental expiry is treated as a refund, chargeback, or fraud event;
- an unsupported rent + pre-order or rent + multi-product combination is synthesized;
- unknown purchase-option types default to a paid entitlement;
- cross-channel Apple/Xsolla entitlements inherit Google rental expiry; or
- the implementation suppresses mandatory consumer remedies because Google controls the catalog.

## Official references checked on September 9, 2026

- Google Play Console Help, **Overview of one-time products**: https://support.google.com/googleplay/android-developer/answer/16430488?hl=en
- Android Developers, **ProductDetails.OneTimePurchaseOfferDetails**: https://developer.android.com/reference/com/android/billingclient/api/ProductDetails.OneTimePurchaseOfferDetails
- Android Developers, **Multi-product for one-time products**: https://developer.android.com/google/play/billing/multi-product-for-one-time-product
- Google Play Developer API, **monetization.onetimeproducts / OneTimeProductRentPurchaseOption**: https://developers.google.com/android-publisher/api-ref/rest/v3/monetization.onetimeproducts
- German BGB § 327d: https://www.gesetze-im-internet.de/bgb/__327d.html
- German BGB § 327e: https://www.gesetze-im-internet.de/bgb/__327e.html
- German BGB § 327m: https://www.gesetze-im-internet.de/bgb/__327m.html
- German BGB § 327n: https://www.gesetze-im-internet.de/bgb/__327n.html
