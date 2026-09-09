# TycoonX Google Play Pre-order One-time Product Release Gate

Last reviewed: **September 9, 2026**

This is a P0 catalog, payment, entitlement, pricing, refund, and consumer-rights release gate for Google Play one-time-product pre-order offers. It complements the canonical TycoonX Terms of Service, Purchases & Refunds Policy, existing Google Play payment gates, and mandatory law. It does not replace Google Play rules or any consumer right that cannot legally be waived.

## Current release decision

**Keep Google Play pre-order offers disabled for all current TycoonX paid products.**

Do not enable a pre-order offer for:

- purchased Diamonds;
- one-time 30-Day VIP;
- Lifetime VIP; or
- another current TycoonX paid entitlement

unless CK-Labs deliberately introduces a future product or campaign that genuinely requires advance ordering and completes a fresh legal, catalog, pricing, refund, entitlement, regional-availability, finance, support, and platform review first.

A Play Console field, migrated product configuration, stale client `ProductDetails`, experimental build, support action, or provider-side catalog default must never silently turn a normal current TycoonX product into a pre-order.

## 1. Current Google Play pre-order model

As checked on September 9, 2026, Google Play's one-time-product model separates:

- the **one-time product**, which defines what the user is buying;
- a **purchase option**, which defines how the entitlement is granted, its price, and regional availability; and
- an **offer**, which may alter how that purchase option is sold, including a discount or pre-order.

Google currently states that a pre-order offer:

- is supported only for the **buy** purchase option;
- lets the user order an item before its release;
- is not the same thing as an ordinary completed one-time purchase;
- can have region-specific availability;
- is not automatically enabled in newly supported regions; and
- becomes a completed purchase when Play charges the user at release and the purchase reaches `PURCHASED`.

TycoonX must not collapse product identity, purchase-option identity, offer identity, pre-order state, payment state, and entitlement state into one boolean such as `hasPurchased`.

## 2. Pending pre-order is not paid entitlement

Before release, a Google pre-order may appear in Order Management as **Payment Pending**. That state is not authority to grant paid TycoonX value.

TycoonX must grant paid value only after backend verification establishes the matching Google purchase in a valid `PURCHASED` state under the existing Google Play verification and idempotency rules.

For a pre-order flow:

- creating or accepting the pre-order does not mint Diamonds;
- seeing `preorderReleaseTime` does not grant an entitlement;
- a client success screen does not grant an entitlement;
- a pending order ID does not grant an entitlement;
- a screenshot of a pending order does not grant an entitlement;
- release time passing does not by itself grant an entitlement;
- only a verified completed purchase can authorize the production grant; and
- the grant remains exactly once even if RTDN, app resume, support reconciliation, or provider API lookup finds the same completed purchase again.

Google's current lifecycle guidance says an RTDN is sent when a fulfilled pre-order changes to `PURCHASED`. TycoonX must use the purchase token to obtain current authoritative purchase state from the Google Play Developer API before paid-value mutation where required by the existing gates.

## 3. Provider timestamps remain evidence, not independent authority

`ProductPurchaseV2` can expose `preorderOfferDetails.preorderReleaseTime` for a pre-order line item. Preserve that provider timestamp separately from:

- checkout initiation time;
- TycoonX server time;
- Pub/Sub receive time;
- RTDN `eventTimeMillis`;
- worker-processing time;
- local device time;
- support-ticket time; and
- the later purchase completion time.

A release timestamp is not proof that payment succeeded. A completion timestamp is not proof that the offer was lawfully available. Each fact keeps its own role.

Clock skew, late RTDN delivery, an app being closed at release, or a backend outage must not convert a pending pre-order into free paid value or cause a legitimate completed purchase to be permanently lost.

## 4. Current TycoonX product safeguards

### Purchased Diamonds

Purchased Diamonds remain consumable virtual currency and do not expire solely because time passes.

For current TycoonX operation:

- do not offer Diamond bundles as Google pre-orders;
- do not reserve or mint Diamonds when a pre-order is only pending;
- if a future reviewed Diamond pre-order were ever introduced, grant only the provider-confirmed purchased quantity exactly once after `PURCHASED`;
- a canceled or failed pre-order must not create a Diamond debt or fraud strike; and
- a later refund or void must correct only the matching transaction-specific purchased value and must preserve unrelated genuine purchases.

### One-time 30-Day VIP

30-Day VIP remains a **one-time, non-renewing entitlement lasting 30 consecutive days from activation or availability**.

For current TycoonX operation:

- do not configure 30-Day VIP as a pre-order;
- a pending period must never consume any part of the 30 days;
- a release date must never replace the canonical activation/availability rule by accident;
- the same completed purchase must not start, restart, or extend multiple 30-day periods; and
- a future Google pre-order model would require a fresh review of exactly when the entitlement becomes available, what the checkout says, and how mandatory withdrawal/remedy rules apply.

### Lifetime VIP

Lifetime VIP remains a one-time promotional entitlement available only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability.

**Do not configure Lifetime VIP as a Google Play pre-order.**

A pre-order mechanism must not be used to:

- create advance reservations outside a genuine Lifetime VIP sales window;
- keep an expired Lifetime VIP campaign commercially open;
- let a stale or cached offer bypass a closed sales window;
- convert a historical restoration into a new sale;
- promise that Lifetime VIP will return at a future release date; or
- create an expectation that a later campaign will use the same price.

A genuine historical Lifetime VIP purchase remains restorable where required by provider evidence, contract, or mandatory law. Restoration is not a new pre-order and never reopens future sale.

## 5. Pre-order catalog changes require special handling

Google's current Play Console guidance gives pre-orders their own catalog rules. Before any future TycoonX pre-order is enabled, the implementation and operating checklist must account for all current provider rules rather than reusing an ordinary buy-flow checklist.

Current Google checkpoints include:

- pre-order offers are available only for a buy purchase option;
- new Google Play regions do not automatically enable existing pre-order offers;
- Google recommends canceling associated pre-orders before making a material change to the product itself;
- an active pre-order becomes immutable starting **1 hour before the release time**;
- the release date can only be moved forward under the current configuration rules;
- removing a region from an active pre-order can cause orders in that region to be canceled **2 days before release** if the region is not re-enabled;
- once a product has been made available to buy, it cannot later be sold as a pre-order under the current model;
- only one active or fulfilled pre-order offer is allowed per region for the product under the current rules; and
- a pre-order cannot be placed inside a Google multi-product one-time-product bundle because bundled products must be available for immediate download.

These are dated platform configuration rules, not permanent player promises. Re-check current Google documentation and actual Play Console behavior before any future rollout.

## 6. Regional availability is not player culpability

Pre-order availability can differ by Google Play region. A product being unavailable, canceled, newly available, or not automatically enabled in a region is a catalog/provider condition.

Do not infer fraud, hacking, account compromise, regional-price abuse, payment abuse, or entitlement abuse merely because:

- a player travels between countries;
- their Play storefront changes;
- a country is removed from a pre-order;
- Google cancels a regional pre-order under its configuration rules;
- a new country does not inherit an old pre-order offer; or
- a stale client still displays an offer that the current Play catalog no longer returns.

Real regional-price or account abuse may still be investigated using the separate evidence-based gates. Catalog geography alone is not proof.

## 7. Pre-order pricing and lower-price behavior

Pre-order price changes do not use the ordinary completed-purchase rule mechanically because the order has not yet completed when it is still pending.

Google currently states that:

- increasing a pre-order price applies only to **new** pre-order purchases; and
- decreasing a pre-order price may affect existing pre-orders through Google's **lower price guarantee**, where applicable.

Therefore, if TycoonX ever enables a pre-order:

- preserve the product, purchase option, offer, region, displayed price/currency, provider order, and final charged amount/currency as separate evidence;
- do not charge an older pending pre-order a later increased price merely because the catalog changed;
- honor any provider-applied lower-price treatment for the transaction;
- do not use today's catalog price to rewrite a completed historical transaction;
- do not turn a provider price adjustment into a player fraud finding; and
- keep taxes, VAT, FX, regional pricing, and provider rounding tied to the provider-confirmed transaction and applicable law.

For ordinary already-completed TycoonX one-time purchases, the canonical rule remains unchanged: a later price decrease does not automatically create a refund, credit, or price-match right and a later increase does not create an extra charge, except where mandatory law or the applicable provider transaction rule requires otherwise.

## 8. EEA, UK, and German withdrawal safeguards

Google's current Play Console guidance says that all items ordered through pre-order in the **EEA and UK** are treated as having a right of withdrawal, and that refund requests for those purchases are honored from the day the pre-order is released.

That provider rule is a minimum operational checkpoint for any future TycoonX pre-order. It does not waive or narrow stronger rights under mandatory law.

For Germany, current BGB § 356(6) provides that, for paid digital content not supplied on a tangible medium, early expiry of the withdrawal right requires the statutory conditions, including commencement of performance, the consumer's express consent to performance before the withdrawal period ends, acknowledgement that the right is lost when performance begins, and the required confirmation under § 312f.

Accordingly:

- a pre-order that has not yet supplied the digital content or entitlement must not be falsely marked as fully performed merely to extinguish withdrawal rights;
- a pending Google payment state is not proof of valid German early-expiry consent;
- Play's provider refund treatment must not be used to deny a mandatory German/EU remedy;
- any legally required German electronic withdrawal function remains governed by the existing BGB § 356a release gate where CK-Labs is responsible for that online interface; and
- platform/provider allocation of refund operations does not remove CK-Labs obligations that mandatory law actually assigns to CK-Labs.

## 9. Reporting and accounting separation

Google currently states that pre-order transactions appear in the Estimated Sales and Earnings reports when the pre-order is released and Play charges the user. Before release, Order Management can show the order as Payment Pending.

TycoonX finance must therefore keep separate:

- pre-order intent/order count;
- pending provider order state;
- completed charged purchase count;
- recognized provider revenue/proceeds;
- refund/void state; and
- TycoonX entitlement delivery state.

A pending pre-order is not completed paid revenue, a completed Lifetime VIP sale, a completed Diamond sale, a chargeback, or a refund.

Do not count the same order twice when a pending record later becomes a completed transaction.

## 10. Cancellation before release

A pre-order can be canceled before it becomes a completed purchase under provider rules or catalog changes.

When authoritative Google evidence shows a pre-order was canceled before purchase completion:

- grant no paid entitlement;
- do not fabricate a completed sale;
- do not create a refund record unless money was actually charged and refunded under the applicable provider state;
- do not manufacture player debt;
- do not treat cancellation alone as fraud or chargeback abuse; and
- preserve only the minimum records reasonably necessary for reconciliation, support, accounting, security, and legal obligations.

If Google later supplies a different authoritative state for the same purchase token/order, reconcile under the existing event-ordering and idempotency gate rather than using callback arrival order.

## 11. Release-time outage and delayed delivery

A release occurring while the player is offline or while TycoonX infrastructure is unavailable does not change purchase authority.

After recovery:

- process RTDN and current Google Play Developer API evidence normally;
- require `PURCHASED` before grant;
- use transaction-level idempotency;
- preserve the provider's historical release/completion evidence;
- deliver a genuine completed entitlement exactly once; and
- do not accuse the player of abuse merely because the provider completed the purchase while TycoonX was unavailable.

Do not disable verification, signature/authenticity checks, account binding, or idempotency merely to clear an outage backlog faster.

## 12. Old clients, stale offers, and support screenshots

An old TycoonX client can display stale catalog information. A screenshot or cached `ProductDetails` object can also outlive the current Play configuration.

Neither can override the current authoritative provider state.

Support may use a receipt/order identifier and provider evidence to investigate, but must not:

- manually create a paid entitlement from a screenshot of a pending pre-order;
- recreate a closed Lifetime VIP sale;
- ask for a player's Google password or full payment-card credentials;
- treat an outdated price as automatic proof of regional-price manipulation; or
- copy unnecessary personal/payment data into support logs.

## 13. Test and production isolation

Test, license-test, staging, review, or other non-production transactions must remain isolated from unrestricted production value under the existing Google Play test-purchase safeguards.

A test pre-order or simulated completion must never create production Diamonds, production 30-Day VIP, production Lifetime VIP, real revenue, real tax settlement, a real refund, a real chargeback, or a player-enforcement strike.

A later genuine production purchase by the same tester remains a separate valid transaction and must not be dismissed merely because that person previously tested a pre-order.

## 14. Future Google changes fail closed

Google can change purchase-option types, offer rules, pre-order timing, regional behavior, reporting, RTDN schema, refund treatment, or pricing guarantees.

Unknown future pre-order states or fields must not default to:

- paid;
- refunded;
- fraud;
- a fresh Lifetime VIP sales window;
- a different Diamond quantity;
- a different 30-Day VIP duration; or
- a retroactive price rewrite.

Before adopting a future pre-order capability, re-check current Google Play Billing Library, Play Console, RTDN, ProductPurchaseV2, Orders API, refund/void, tax, and regional-payment documentation.

## 15. Regression matrix

Before enabling any Google Play pre-order path, test at least these scenarios:

1. Diamond pre-order remains disabled in the current production catalog.
2. 30-Day VIP pre-order remains disabled in the current production catalog.
3. Lifetime VIP pre-order remains disabled in the current production catalog.
4. A pending pre-order grants zero Diamonds.
5. A pending pre-order starts zero days of 30-Day VIP.
6. Passing `preorderReleaseTime` without `PURCHASED` grants nothing.
7. Fulfilled pre-order RTDN triggers authoritative API verification before grant.
8. The same completed pre-order discovered twice grants exactly once.
9. A canceled pre-order creates no entitlement and no fabricated refund.
10. A region removed from a pre-order does not create a player fraud strike.
11. A newly supported Google region does not silently inherit an old pre-order.
12. A stale client displaying an ended offer cannot create a purchase outside current provider availability.
13. A price increase affects only new pre-orders under the current Google rule.
14. A provider lower-price guarantee is honored where Google applies it.
15. Historical completed transactions are not repriced from the current catalog.
16. A backend outage at release does not lose or duplicate a genuine completed purchase.
17. Payment Pending is excluded from completed revenue and completed sales analytics.
18. EEA/UK pre-order withdrawal handling follows current provider and mandatory-law requirements.
19. German early-expiry logic is not fabricated before performance begins.
20. Support cannot grant from a pending-order screenshot alone.
21. A test pre-order never creates unrestricted production value.
22. A later genuine purchase by a former tester is still valid evidence.
23. A pre-order cannot be inserted into a Google multi-product OTP bundle.
24. Unknown future pre-order states quarantine irreversible mutation rather than guessing.
25. A closed Lifetime VIP campaign cannot be revived by an old pre-order offer or support action.
26. A refund or void after completion corrects only the matching transaction and preserves unrelated purchases.

## 16. Release blockers

**BLOCK RELEASE / BLOCK PAYMENT-PATH CHANGE** if any of the following is true:

- any current TycoonX paid product is unintentionally available as a Google pre-order;
- pending pre-orders can mint Diamonds or start VIP;
- release time alone is treated as purchase authority;
- a stale pre-order can reopen Lifetime VIP;
- a pre-order price increase is applied to an earlier pending order contrary to current provider rules;
- EEA/UK or German mandatory withdrawal protections are suppressed by the pre-order implementation;
- pending orders are counted as completed paid revenue;
- canceled regional pre-orders create player fraud/enforcement findings without separate evidence;
- test pre-orders can create production value; or
- unknown future Google states default to an irreversible grant, clawback, refund, or fraud conclusion.

## 17. Current references checked September 9, 2026

- Google Play Console Help, **Overview of one-time products**: https://support.google.com/googleplay/android-developer/answer/16430488?hl=en
- Android Developers, **One-time purchase lifecycle**: https://developer.android.com/google/play/billing/lifecycle/one-time
- Google Play Developer API, **ProductPurchaseV2**: https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.productsv2
- Android Developers, **Multi-product for one-time products**: https://developer.android.com/google/play/billing/multi-product-for-one-time-product
- German BGB § 356: https://www.gesetze-im-internet.de/bgb/__356.html

Re-check the live provider and statutory sources before enabling any pre-order feature. Dated operational details in this gate are not promises that Google or the law will remain unchanged.
