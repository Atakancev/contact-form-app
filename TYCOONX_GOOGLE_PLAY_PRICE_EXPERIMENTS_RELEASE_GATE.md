# TycoonX Google Play Price Experiments Release Gate

**Last reviewed: September 9, 2026**

Owner: CK-Labs  
Scope: Google Play one-time-product price experiments involving TycoonX Diamonds, one-time 30-Day VIP, limited-window Lifetime VIP, experiment cohorts, control/variant prices, regional pricing, taxes, promotions, refunds, chargebacks, finance reporting, privacy, and German/EU consumer-law boundaries.

## Purpose

This is a narrow companion to:

- `TYCOONX_GOOGLE_PLAY_DISCOUNT_OFFER_ELIGIBILITY_RELEASE_GATE.md`, which covers Google Play discount-offer eligibility, limited quantities, offer windows and offer tokens;
- `TYCOONX_PRICING_CATALOG_CONFIGURATION_ERROR_RELEASE_GATE.md`, which covers catalog/configuration errors and authoritative checkout pricing;
- `TYCOONX_EU_PERSONALIZED_PRICING_AUTOMATED_OFFERS_RELEASE_GATE.md`, which covers personalized pricing based on automated decision-making and profiling; and
- `TYCOONX_EU_GERMAN_PRICE_PROMOTION_PERSONALIZATION_RELEASE_GATE.md`, which covers truthful promotion/reference-price evidence across Apple, Google Play and Xsolla.

Google Play price experiments are a different mechanism from discount offers. They can temporarily show different actual purchase-option prices to experiment/control groups and can test both price decreases and price increases. That creates separate legal, finance, support and Lifetime VIP risks even if no TycoonX discount badge or coupon exists.

## P0 current decision: price experiments stay disabled for current TycoonX paid products

Until CK-Labs deliberately approves a specific experiment under this gate, **do not enable Google Play price experiments for current TycoonX Diamonds, one-time 30-Day VIP, or Lifetime VIP**.

This is not a permanent promise to players and does not prohibit future lawful experiments. It is a release-control decision because same-market experiment pricing can create issues that ordinary country/channel pricing does not create, including:

- different users seeing different real-money prices for the same purchase option during the same period;
- personalized-pricing classification questions if behavioral/profile data is used for cohort selection;
- misleading discount/reference-price claims if a control price is described as a universal former price;
- refunds/support using the wrong control or variant amount;
- automatic price reversion after an experiment;
- catalog cleanup being blocked while a product is attached to an experiment; and
- Lifetime VIP accidentally remaining commercially reachable beyond a selected sales window.

A future experiment needs a recorded pre-launch approval covering product, countries/regions, purchase options, audience, variants, experiment dates, legal classification, price display, tax treatment, refunds, finance reporting, support handling and shutdown/rollback.

## 1. A Google price experiment is not a Google discount offer

Keep the platform concepts separate.

A Google Play **discount offer** is an offer associated with a purchase option and can have offer-specific metadata such as an offer ID, offer token, percentage/fixed discount, validity window and purchase limit.

A Google Play **price experiment** is an app-level A/B pricing mechanism applied at the purchase-option level. It temporarily changes the actual price seen by selected experiment groups while control/out-of-experiment users can continue to see the original price.

Therefore:

- do not require a discount `offerToken` merely because a user saw an experiment variant;
- do not create a coupon-redemption record for a price-experiment variant unless an actual separate coupon/offer exists;
- do not describe every experiment price decrease as a `sale`, `discount`, `X% off`, `was/now`, or promotion;
- do not treat a price increase variant as an entitlement upgrade;
- do not infer experiment membership from the player's TycoonX wallet or VIP state; and
- do not use experiment arm as payment or entitlement authority.

The authoritative Google purchase plus the exact provider-confirmed transaction price/currency remains the basis for paid-value delivery and reconciliation.

## 2. Current Google Play operational constraints are configuration rules, not player promises

As of September 9, 2026, Google Play's current price-experiment documentation states, among other things, that:

- only **active one-time products** can be included;
- experiments operate at the **purchase-option level**, not merely at the product level;
- an experiment can include at most **1,000 purchase options**;
- an experiment can have at most **two variants plus the control**;
- only **one experiment at a time** can run in a given country/region;
- the maximum experiment length is **six months**;
- prices also revert to the original price after **14 days** once a result becomes statistically significant if a variant has not been applied sooner;
- the same experiment cannot be rerun with overlapping one-time products and overlapping countries/regions until at least **30 days** after the previous experiment ends;
- a running experiment cannot be paused and a stopped experiment cannot be restarted;
- the price of a purchase option in a running experiment cannot ordinarily be edited without stopping the experiment;
- adding a new product or purchase option while an experiment is active does not automatically add it to that experiment;
- countries/regions or products cannot be added to a live experiment;
- experiment prices must remain within Google's permitted local price range; and
- an experiment selected for a country/region does not automatically extend to that country's associated location overrides/territories.

These are dated provider configuration checkpoints. CK-Labs must re-check current Play Console documentation before a future experiment rather than promising that these exact operational limits will never change.

## 3. Same-account price stability is support evidence, not entitlement authority

Google currently says that a user on the same account and device will see one price for the duration of an experiment.

Operationally:

- a support screenshot showing one experiment price can be consistent with normal Google behavior;
- another player seeing a different experiment/control price is not by itself evidence of hacking, regional-price abuse, account compromise or manipulated checkout;
- a price difference must not be used to infer that two TycoonX accounts belong to the same person;
- experiment assignment is not proof of residence, nationality, tax domicile, card country or entitlement ownership; and
- support should verify the actual Google order/transaction instead of trying to reconstruct entitlement from the experiment arm.

If Google later changes its assignment/stability behavior, fail closed for destructive enforcement until the provider state is understood.

## 4. Germany/EU personalized-pricing boundary requires explicit pre-launch classification

TycoonX already has a separate gate for personalized prices based on automated decision-making.

German Article 246a § 1(1) sentence 1 no. 6 EGBGB requires, where applicable, information that a price was personalized on the basis of automated decision-making. EU Consumer Rights Directive guidance distinguishes personalized pricing based on automated decision-making/profiling from ordinary dynamic pricing and generally available reductions that do not target a specific individual or profiled category.

A Google price experiment must **not** silently become a behavioral personalized-pricing system.

For any future EEA/German experiment:

- document whether the cohort assignment uses only Google's native experiment audience/control mechanism or any CK-Labs-controlled personal/profile/behavior data;
- do not feed spending history, churn likelihood, prior purchase/refusal history, account value, age, engagement, inferred wealth, device fingerprint or similar TycoonX user-level signals into price selection without passing the personalized-pricing gate;
- if the price is personalized on the basis of automated decision-making, provide every required pre-contract disclosure at the legally correct place and preserve evidence;
- do not assume that the word `experiment` removes personalized-pricing duties;
- do not assume that a price difference is personalized merely because two users happened to receive different experiment arms; classify the actual mechanism and data inputs; and
- if the legal classification or required checkout disclosure cannot be established for a market, exclude that market or block the experiment.

Current TycoonX policy remains simpler: price experiments are disabled until this review is deliberately completed.

## 5. Experiment price is not automatically a truthful discount/reference price

Google price experiments can test both a decrease and an increase relative to the control price. Google also applies local exchange rates and country-specific pricing patterns, so the actual local percentage movement can differ from the headline percentage configured in Play Console.

TycoonX must therefore not automatically publish:

- `X% off` based only on the configured experiment percentage;
- a crossed-out control price as a universal former price;
- `lowest price`, `best price`, `special sale`, or similar claims without a substantiated basis;
- an experiment end date as a fake scarcity deadline for a separate Lifetime VIP campaign; or
- a claim that every user in a country is receiving the same experiment price.

German UWG § 5 prohibits misleading commercial practices concerning, among other things, a special price advantage, price, price calculation and supply conditions. If CK-Labs chooses to add TycoonX-controlled promotional copy on top of a price experiment, the separate promotion/reference-price gates apply in full.

Where Google itself displays only the actual experiment price without a CK-Labs discount claim, do not manufacture a misleading comparison merely to make the variant look more attractive.

## 6. Variant percentages do not replace the final Google checkout total

The Play Console can show nominal percentage increases/decreases, but local exchange rates, local pricing patterns, price-range boundaries and tax treatment can affect the actual price.

For each completed experiment purchase, preserve or be able to reconcile:

- Google order/purchase token and product ID;
- purchase option ID where available;
- country/region context where lawfully available and necessary;
- the actual amount and currency paid;
- applicable provider-confirmed tax/price evidence where available;
- experiment/control price evidence needed for finance/support; and
- authoritative purchase/refund/void state.

Do **not** reconstruct the amount paid later as `control price ± configured experiment percentage`.

The final total shown through the payment flow and the authoritative provider transaction evidence govern the completed purchase, subject to mandatory consumer law.

## 7. Completed purchases are not repriced when an experiment ends or reverts

Google currently reverts experiment prices to the original price when an experiment ends and can automatically revert after the documented experiment limits.

A later reversion is a future catalog price change. It does not by itself:

- create a refund or credit for a user who paid a higher experiment price;
- create an additional charge against a user who paid a lower experiment price;
- retroactively change the recorded amount/currency of a completed order;
- restart or extend VIP;
- add/remove Diamonds; or
- prove that the earlier price was erroneous.

A later price decrease does not automatically create a refund, credit or price-match right, and a later increase does not create an extra charge on an already completed one-time purchase, except where mandatory law or a transaction-specific provider remedy requires otherwise.

If the experiment price itself was misleading, unlawfully personalized, incorrectly configured, or not the amount confirmed at checkout, address that separate issue under the applicable consumer and payment rules rather than treating all experiment reversion as a refund event.

## 8. Refunds and chargebacks use the transaction's actual paid price, never the control price

When a Google transaction from an experiment is refunded, partially refunded, voided, charged back, reversed or disputed:

- identify the specific provider transaction;
- reconcile the actual purchased product/quantity/entitlement;
- use the provider-confirmed transaction/refund evidence;
- do not calculate the refund or Diamond correction from the control price merely because it is easier to query later;
- do not treat a lower experiment price as underpayment, regional-price abuse or coupon abuse;
- do not treat a higher experiment price as extra paid entitlement; and
- keep later genuine repurchases as separate transactions even if the experiment/control price has changed.

Refund corrections remain transaction-specific and idempotent under the existing payment-ordering and Google void/refund gates.

## 9. Diamonds retain exactly the same quantity/entitlement mapping across a price-only experiment

If CK-Labs ever approves a Google price experiment for a Diamond purchase option, the experiment is a **price experiment**, not an entitlement experiment.

For the same tested purchase option:

- a lower variant price does not reduce the Diamond quantity;
- a higher variant price does not increase the Diamond quantity unless a separately configured and clearly disclosed product/bundle actually changes;
- the same verified transaction cannot grant twice because both experiment and ordinary purchase processing see it;
- purchased Diamonds do not expire solely because time passes; and
- a refund/chargeback correction remains limited to the value attributable to the affected transaction under the existing Diamond rules.

If CK-Labs wants to test different bundle content/quantities, that is not a price-only experiment and requires separate catalog, marketing, entitlement and localization review.

## 10. One-time 30-Day VIP remains exactly 30 consecutive days

A Google experiment may never change the TycoonX product definition.

One-time 30-Day VIP remains exactly one **non-renewing entitlement lasting 30 consecutive days from activation or availability**.

Control/variant assignment must not:

- change the VIP duration;
- create a subscription;
- start the entitlement before authoritative completed purchase/fulfillment;
- stack or duplicate the same transaction;
- pause or restart the paid period when experiment prices revert; or
- change refund/restore logic based on which experiment arm paid the order.

If a future recurring VIP product is introduced, it requires its own compliant recurring-product terms, price-change rules, notices, cancellation handling and localization.

## 11. Lifetime VIP is excluded from ordinary price experiments

Lifetime VIP is a limited-time promotional one-time entitlement available only during selected genuine sales windows. It may be withdrawn from sale, may never return, and creates no expectation of continuous availability.

**Do not include Lifetime VIP in an ordinary Google Play price experiment.**

A campaign-specific exception would require a separate recorded approval proving, at minimum, that:

- every experiment/control purchase path is available only during the same genuine selected Lifetime VIP sales window;
- the experiment cannot continue beyond the campaign closure;
- automatic or delayed Google reversion cannot reopen a closed sale;
- associated purchase options/offer paths are deactivated/fail closed when the window ends;
- historical Lifetime VIP restoration remains possible without creating a new sale;
- any displayed comparison/discount claim is truthful for the exact cohort and sales window; and
- support cannot manually recreate an expired experiment price or new Lifetime VIP sale from a screenshot.

Google's inability to delete a one-time product while it remains attached to an ongoing campaign or experiment is a **catalog-management state**, not authorization to keep Lifetime VIP purchasable. Sale closure must use enforceable availability controls, not rely on eventual product deletion.

A lower Lifetime VIP experiment price in one genuine window also does not create an expectation that the same price or Lifetime VIP itself will return later.

## 12. Catalog cleanup and experiment lifecycle must not create stale sale paths

Google currently says a one-time product cannot be deleted while it is used by an ongoing campaign or experiment such as Price Experiments, Featured Product or Play Points.

Before launching any future TycoonX price experiment, document rollback/cleanup:

- which product and purchase options are included;
- which catalog changes become blocked while it runs;
- how an urgent security/legal shutdown of the purchase path will be enforced even if deletion is unavailable;
- how stale app versions are prevented from launching a purchase that should no longer be sold;
- how experiment end/reversion is reconciled with remote config and in-game marketing; and
- how support distinguishes a stale display from an actually available Google purchase.

A provider restriction on deletion does not override CK-Labs' obligation to stop an unlawful, erroneous or closed-window sale through other available controls.

## 13. Country/territory scope must be verified explicitly

Google currently states that price experiments apply only to the selected country/region and do **not** automatically extend to associated location overrides. Google gives France as an example where a France experiment excludes associated French territories.

Therefore:

- do not assume a France experiment price automatically applies in French Guiana, French Polynesia, Guadeloupe, Martinique, Mayotte, New Caledonia, Réunion, Saint Barthélemy, Saint Martin, Saint Pierre and Miquelon, Wallis and Futuna or any future associated-location list merely because the parent country is selected;
- configure and QA the actual target markets shown by current Play Console evidence;
- do not infer fraud from a user legitimately seeing the control price in an associated territory;
- do not silently substitute a parent-country variant price when Google checkout shows another valid local price; and
- keep EU geo-blocking, nationality/residence discrimination and regional-price-abuse analyses separate from experiment cohorting.

A Play country/experiment arm is provider catalog context, not proof of legal residence or nationality.

## 14. Cancellation near the scheduled start can briefly expose an experiment

Google currently warns that an experiment canceled within 24 hours of its scheduled start can occasionally go live temporarily.

For any future scheduled TycoonX experiment:

- do not assume `canceled` means no user could ever have seen the variant;
- keep purchase processing capable of honoring a genuine provider-authorized completed transaction at the actual checkout price;
- do not grant value from a screenshot alone;
- do not punish a user for buying a variant Google validly exposed during provider propagation;
- reconcile a genuine catalog mistake under the existing obvious-error and mandatory-rights rules; and
- remove/refresh CK-Labs marketing promptly if the experiment should not continue.

This is another reason experiment configuration must never be entitlement authority.

## 15. Experiment audience data must not become a fraud or marketing profile by default

Google price-experiment reporting can include experiment arm, country, product/order metrics, developer currency and other analytics. Some reporting, such as new-installer metrics, can also depend on whether users share the relevant data with Google.

CK-Labs should process experiment evidence only for legitimate purposes such as:

- pricing analysis;
- transaction/refund reconciliation;
- financial reporting;
- catalog QA;
- fraud/security investigation where there is separate evidence; and
- legal/support audit where necessary.

Do not:

- infer willingness to pay, wealth, age or vulnerability merely from experiment arm;
- convert control/variant assignment into an account-sanction flag;
- attempt to reconstruct provider-withheld analytics through invasive fingerprinting merely to improve an experiment report;
- keep user-level cohort metadata indefinitely without a defined purpose/retention basis; or
- combine experiment data with behavioral profiling to personalize future prices without passing the separate personalized-pricing/privacy gate.

Data minimization and purpose limitation remain mandatory.

## 16. Finance/reporting must preserve experiment reality without inventing revenue

Google says experiment orders are visible in downloadable financial reports and that experiment analysis can report revenue, orders, buyers and experiment arms.

TycoonX finance/reconciliation should therefore:

- count only authoritative completed provider transactions as paid revenue;
- keep pending/failed/canceled transactions out of completed revenue;
- record the actual paid amount/currency rather than the control/list price;
- avoid counting one order once in experiment analytics and again as ordinary product revenue;
- preserve refunds/chargebacks against the same transaction rather than against a synthetic control-price order; and
- distinguish Google developer/reporting currency from the consumer's historical transaction currency where those differ.

Experiment statistical significance is not accounting authority and does not prove that every individual purchase was valid, invalid, profitable or fraudulent.

## 17. Release regression scenarios

Release evidence for any future TycoonX Google Play price experiment must cover at least these cases:

1. **Lower-price Diamond variant:** one user sees a lower price and receives the same Diamond quantity as the control after one valid completed purchase.
2. **Higher-price Diamond variant:** a higher price does not create extra Diamonds or a different entitlement.
3. **Same account/device stability:** the same Google account/device sees one experiment price for the experiment duration; support does not use that fact as account-ownership proof.
4. **Different users, same market:** two users legitimately see different control/variant prices; neither is auto-flagged for regional-price abuse or hacking.
5. **Experiment reversion:** Google reverts to the original price; earlier completed purchases are not retroactively repriced.
6. **Statistical-significance reversion:** the experiment reaches significance and later reverts under Google's current lifecycle; no refund/extra charge is invented.
7. **Six-month maximum:** an experiment reaches the current maximum duration and reverts; stale TycoonX marketing is removed/updated.
8. **Refund at lower variant:** refund/correction follows the actual transaction rather than the control price.
9. **Refund at higher variant:** a higher experiment price does not authorize a larger in-game entitlement.
10. **Pending purchase:** experiment price visibility does not grant Diamonds or VIP while Google purchase state remains pending.
11. **Failed purchase:** a visible experiment price with a failed/canceled payment creates no paid entitlement.
12. **30-Day VIP variant:** the experiment changes price only; entitlement remains one non-renewing 30-consecutive-day period.
13. **Lifetime VIP attempted experiment:** ordinary inclusion of Lifetime VIP blocks release unless the campaign-specific exception review is complete.
14. **Closed Lifetime window:** an experiment/catalog state never reopens a closed Lifetime VIP sale.
15. **Associated territory:** a France experiment does not cause TycoonX to assume the same variant applies to an associated French territory.
16. **Price-range boundary:** Google clamps a variant to a permitted local price boundary; TycoonX does not advertise the nominal percentage as the exact saving unless true.
17. **Tax/local pricing:** local Google pricing patterns or taxes change the actual displayed price; the provider checkout total remains authoritative.
18. **Personal-data targeting attempted:** a TycoonX behavioral segment is proposed for price selection; launch blocks until the personalized-pricing gate is satisfied.
19. **Pure provider cohort:** no TycoonX spending/behavior profile is used; the legal classification is documented before EEA/German launch rather than assumed.
20. **Catalog deletion blocked:** a product cannot be deleted while in an experiment; CK-Labs still closes an unlawful/expired purchase path using other enforceable controls.
21. **Canceled near start:** Google briefly exposes a scheduled experiment that CK-Labs canceled within 24 hours; a genuine completed order is reconciled without accusing the buyer of abuse.
22. **New purchase option added mid-test:** Google omits it from the running experiment; TycoonX does not assume it received the variant price.
23. **Experiment ends after outage:** backlog/reconciliation uses transaction evidence, not whichever catalog price is current after recovery.
24. **Support screenshot:** screenshot of a cheaper experiment price does not by itself recreate a purchase, refund or expired promotion.
25. **Experiment report opt-out/data gap:** CK-Labs does not fingerprint users to reconstruct provider analytics merely because some optional reporting is unavailable.
26. **Unknown future Google behavior:** a material new experiment state or API field is treated as unknown until reviewed and cannot destructively change paid entitlements.

## Current Google platform checkpoint

This gate reflects official Google Play Console documentation checked on September 9, 2026 concerning:

- active one-time-product prerequisites;
- purchase-option-level experiments;
- app-level experiments;
- up to two variants plus control;
- one experiment per country/region;
- maximum six-month duration;
- 14-day post-statistical-significance automatic end/reversion behavior;
- 30-day overlap cooldown for the same overlapping products/countries;
- inability to pause/restart a stopped experiment;
- inability to edit selected purchase-option prices while the experiment is running, subject to Google's documented exceptions;
- new purchase options/products being omitted from an already active experiment;
- country/region and product scope not being expandable after launch;
- audience percentage and control/variant allocation;
- same account/device seeing one price for the duration of the experiment;
- local price ranges and country-specific pricing patterns;
- selected countries not automatically including associated location overrides;
- experiment orders appearing in financial reports; and
- one-time products being non-deletable while attached to ongoing campaigns/experiments.

These are provider implementation checkpoints, not permanent contractual promises to TycoonX players.

## German/EU legal checkpoint

Current legal references checked for this gate include:

- German **UWG § 5**, including misleading claims concerning a special price advantage, price, price calculation and supply conditions;
- German **Article 246a § 1(1) sentence 1 no. 6 EGBGB**, requiring where applicable notice that a price was personalized on the basis of automated decision-making;
- the EU Consumer Rights Directive / Commission guidance distinction between personalized pricing based on automated decision-making/profiling and price variation that is not based on personal profiling; and
- the existing TycoonX mandatory-rights, total-price, promotion, withdrawal, conformity, refund, update, liability and digital-product gates.

Nothing in this gate waives mandatory rights or authorizes misleading, discriminatory, unlawful or unfair price testing.

## Release blockers

**BLOCK GOOGLE PLAY PRICE EXPERIMENTS for current TycoonX paid products** unless a specific experiment has documented evidence for all applicable items below:

1. product/purchase-option IDs and exact entitlement mapping;
2. target countries/regions and associated-location exclusions;
3. control and variant prices/ranges;
4. audience/variant allocation and experiment start/end lifecycle;
5. no hidden CK-Labs behavioral/profile targeting, or full personalized-pricing compliance where such targeting exists;
6. truthful promotion/reference-price presentation;
7. final-price/tax/currency reconciliation;
8. refund/void/chargeback handling using actual transaction evidence;
9. Diamonds or exact 30-Day VIP entitlement invariants;
10. Lifetime VIP exclusion or a separate campaign-specific exception approval;
11. stale-client/catalog shutdown and deletion-block handling;
12. finance/reporting idempotency;
13. privacy purpose/retention limits;
14. German/EU mandatory-rights review; and
15. regression evidence for the scenarios above.

## References

Google Play:

- https://support.google.com/googleplay/android-developer/answer/13343030?hl=en
- https://support.google.com/googleplay/android-developer/answer/16431770?hl=en
- https://support.google.com/googleplay/android-developer/answer/16430488?hl=en

German/EU:

- https://www.gesetze-im-internet.de/uwg_2004/__5.html
- https://www.gesetze-im-internet.de/bgbeg/art_246a__1.html
- https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A52021XC1229%2804%29

## Founder-protective interpretation

The safest useful rule is not to pretend that a lower or higher Google experiment price is an error merely because another player saw the control price.

CK-Labs may test future pricing when it deliberately chooses to do so and when the experiment is legally and operationally ready. It may end an experiment, reject stale purchase paths, correct genuine catalog mistakes, reconcile refunds and protect Lifetime VIP sales windows.

But an experiment arm is not entitlement authority, residence proof, fraud evidence, a discount claim, or permission to bypass consumer law. Completed purchases remain tied to their actual provider-confirmed transaction, and current TycoonX paid products remain outside Google Play price experiments until CK-Labs deliberately approves the specific experiment under this gate.
