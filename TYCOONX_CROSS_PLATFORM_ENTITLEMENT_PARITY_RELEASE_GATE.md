# TycoonX Cross-Platform Entitlement & Store-Parity Release Gate

Last reviewed: 2026-08-31  
Operator/business name used in player-facing documents: **CK-Labs**

This gate covers a specific TycoonX risk that sits between payment policy and entitlement delivery: a player may buy Diamonds or VIP through Apple App Store In-App Purchase, Google Play, or the official TycoonX webshop using Xsolla and then use the same TycoonX account on another supported device or platform.

The goal is to let legitimate purchases follow the player's TycoonX account where permitted without turning cross-platform access into duplicate value, an unauthorized external-payment flow, a regional-price bypass, or a false restore.

This is an operational release gate. It does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, mandatory consumer law, or the then-current Apple, Google Play, and Xsolla rules.

## 1. Core distinction: entitlement access is not payment steering

Keep these questions separate:

1. **May TycoonX recognize and supply a valid entitlement that was purchased through another supported platform or the TycoonX webshop?**
2. **May the iOS or Google Play app advertise, link to, initiate, or encourage that external purchase from inside the app?**

A rule permitting cross-platform access does not automatically permit an in-app Xsolla link, external-purchase call to action, web checkout, or alternative billing flow.

For every storefront and country, document both decisions separately:

| Surface | Existing off-platform entitlement usable here? | External purchase promoted or linked here? | Governing program/rule recorded? |
| --- | --- | --- | --- |
| iOS App Store build | [ ] | [ ] | [ ] |
| Google Play build | [ ] | [ ] | [ ] |
| Official TycoonX webshop | [ ] | n/a | [ ] |
| Other future authorized distribution | [ ] | [ ] | [ ] |

If the second column is allowed but the third is not, the app may recognize an already valid entitlement after sign-in while keeping external purchase steering out of the app.

## 2. Apple App Review Guideline 3.1.3(b) multiplatform-services gate

Apple's current App Review Guideline **3.1.3(b), Multiplatform Services**, permits an app operating across multiple platforms to let users access content, subscriptions, or features acquired on another platform or the developer's website, including **consumable items in multi-platform games**, provided those items are also available as In-App Purchases within the app.

For TycoonX this means the iOS release must not casually assume that every web-only paid gameplay item can be injected into the iOS game merely because the same CK-Labs account exists on the web.

Before allowing a paid TycoonX item acquired outside Apple's In-App Purchase system to be used in the iOS app:

- [ ] confirm the item/content/feature falls within the current multiplatform-services rule or another valid current Apple rule;
- [ ] where Guideline 3.1.3(b) is the basis, confirm the relevant item is also genuinely available as an Apple In-App Purchase in the iOS app;
- [ ] preserve a dated catalog mapping between the externally purchased item and the corresponding iOS In-App Purchase availability;
- [ ] do not represent Guideline 3.1.3(b) as requiring identical pricing across Apple, Google Play, Xsolla, countries, currencies, or genuine promotional windows unless another applicable rule actually requires that result;
- [ ] do not use a nominal, hidden, unavailable, or permanently non-purchasable Apple product merely to claim that an item is "also available" as an In-App Purchase;
- [ ] recheck the rule before introducing a new web-exclusive paid gameplay item that will be usable inside the iOS app; and
- [ ] treat Apple's separate external-purchase, linkout, entitlement, storefront, and EU program rules as separate release gates.

### Apple catalog mapping examples

A practical release map should identify at least:

| TycoonX value | Outside-iOS source | Used inside iOS? | Corresponding iOS IAP availability checked? | Result |
| --- | --- | --- | --- | --- |
| Purchased Diamonds | Xsolla webshop | yes/no | [ ] | [ ] |
| Purchased Diamonds | Google Play | yes/no | [ ] | [ ] |
| One-time 30-Day VIP | Xsolla webshop | yes/no | [ ] | [ ] |
| One-time 30-Day VIP | Google Play | yes/no | [ ] | [ ] |
| Lifetime VIP | Xsolla webshop | yes/no | [ ] | [ ] |
| Lifetime VIP | Google Play | yes/no | [ ] | [ ] |

Do not infer from this gate that CK-Labs must sell every channel at the same price. The canonical legal framework already permits genuine channel, country, currency, tax, and promotional differences for future purchases, subject to applicable law and platform rules.

## 3. Apple access does not authorize an in-app Xsolla sales funnel

Even if a valid Xsolla purchase may be recognized in iOS, the iOS app must not automatically:

- show an Xsolla `Buy` button;
- open a web checkout;
- tell a player to pay on the website;
- display a cheaper off-App-Store price as an in-app call to action;
- use a webview to circumvent Apple's purchase rules; or
- steer to an external payment method in a storefront where the then-current Apple rules do not permit it.

Any external-purchase link or alternative-payment option must independently satisfy the then-current Apple storefront/program requirements, entitlements, disclosures, transaction reporting, tax setup, App Review requirements, and other applicable conditions.

Cross-platform **recognition** and in-app **acquisition/steering** must therefore have separate feature flags and separate release evidence.

## 4. Google Play payments and consumption-only distinction

Google Play's current Payments policy requires Play-distributed apps accepting payment for in-app digital goods or features, including virtual currency and game functionality, to use Google Play's billing system unless an applicable policy section or enrolled regional program permits another method.

Google's current policy also recognizes consumption-only apps in which users sign in and access digital content paid for elsewhere, but a consumption-only configuration means the app does not enable users to purchase the relevant digital goods or services from within that app.

For TycoonX:

- [ ] if the Google Play build sells Diamonds or VIP from inside the app, use Google Play Billing where required or a valid enrolled alternative/external-offers program where permitted;
- [ ] do not treat the ability to recognize an already purchased Xsolla or Apple entitlement as permission to insert an unapproved Xsolla payment flow into the Play build;
- [ ] if CK-Labs ever makes a particular Play build genuinely consumption-only, document that product decision and confirm that its purchase UI actually matches the consumption-only model;
- [ ] keep the existing Google Play billing-choice, alternative-billing, external-offers, and external-link program gates controlling any in-app purchase steering;
- [ ] recheck country/program eligibility before enabling any alternative purchase call to action; and
- [ ] do not hide or disable required Play Billing while leaving an external in-app payment path available in a storefront that requires Play Billing.

Google states that apps do not need feature or price parity across platforms. Do not invent a universal "same price everywhere" rule. What matters is that the actual Play purchase flow, storefront/program, and disclosures comply with the rule that applies to that transaction.

## 5. Purchased Diamonds: one cross-platform ledger, no replay

Purchased Diamonds are consumable TycoonX game value. Cross-platform availability must never create a second copy of the same purchase.

Required model:

- each successful Apple, Google Play, or Xsolla Diamond transaction has a unique source transaction identity;
- each valid transaction can create its purchased-Diamond grant **once and only once**;
- the TycoonX server-side Diamond ledger, not a device-local balance or client screenshot, is authoritative for account value;
- signing into the same account on iPhone, Android, web, or another supported client shows the same resulting account balance rather than replaying source purchases per device;
- reinstalling the app does not replay previously consumed Diamond transactions;
- account relinking does not recreate consumed Diamonds;
- platform restore functionality for non-consumables must not be misused to restore consumed Diamond packs; and
- duplicate Apple transaction updates, Google notifications, Xsolla webhooks, retries, race conditions, or reconnects cannot produce another grant.

### Google Play virtual-currency scope

Google Play's current Payments policy says in-app virtual currency must only be used within the app or game title for which it was purchased.

TycoonX Diamonds therefore remain **TycoonX-only** game value. Cross-platform support means the same TycoonX game/account may recognize them on supported TycoonX clients. It does not mean Diamonds become a CK-Labs-wide wallet, transferable currency for unrelated games, cash substitute, or cross-title payment instrument.

## 6. One-time 30-Day VIP: preserve one clock

Cross-platform recognition of a valid one-time 30-Day VIP must preserve the original entitlement period.

- [ ] Store one authoritative `starts_at` / `expires_at` or equivalent server entitlement period.
- [ ] Logging in on another platform must not restart the 30 days.
- [ ] Reinstalling or restoring must not add another 30 days.
- [ ] Receiving the same provider event twice must not extend the expiry.
- [ ] A second legitimate later purchase, if the product is designed to permit one, must use the documented stacking/activation rule rather than accidental duplication.
- [ ] A refund or reversal corrects only the entitlement period/value associated with the affected transaction, subject to applicable law.

Example: a valid 30-Day VIP bought on the Xsolla webshop with 12 days remaining should still have 12 days remaining when the player signs into the iOS app. The iOS login must not transform it into a new 30-day entitlement.

## 7. Lifetime VIP: one valid entitlement, not one copy per store

Lifetime VIP remains a one-time entitlement offered only during selected genuine sales windows. Cross-platform support must preserve exactly one valid entitlement for the eligible purchasing account.

- [ ] A Lifetime VIP bought through Apple, Google Play, or Xsolla must not be duplicated merely because the player later signs into another supported platform.
- [ ] A second platform login does not create a separately refundable second purchase.
- [ ] Apple Restore Purchases may re-establish an Apple-backed entitlement after verification, but it must reconcile with any already-linked valid TycoonX entitlement rather than create a second Lifetime VIP.
- [ ] An Xsolla entitlement restored from CK-Labs server/payment evidence is not falsely described as an Apple or Google restore transaction.
- [ ] A Google-backed Lifetime VIP is not converted into an Apple-owned transaction simply because it is usable on iOS.
- [ ] Source channel, source transaction identity, purchaser/account linkage, original offer/sales window, and current entitlement status remain auditable.
- [ ] Ending future Lifetime VIP sales does not remove an already valid purchase merely because the player changes device or platform.

If TycoonX permanently discontinues service, the separate permanent-shutdown gate and mandatory consumer law control. Cross-platform mapping is not a hidden way to redefine "Lifetime" or terminate a valid purchase early.

## 8. Restore semantics must identify the source

Do not show a single ambiguous `Restore Purchases` operation that silently treats every channel as the same financial transaction source.

A recovery flow may provide one user-facing entry point, but internally it must distinguish:

- **Apple restore/reconciliation:** verified StoreKit/App Store transaction and entitlement state;
- **Google Play reconciliation:** verified Google Play purchase/order state and server entitlement mapping;
- **Xsolla/account recovery:** CK-Labs/Xsolla authoritative paid-order and entitlement evidence for the same verified purchaser/account; and
- **server entitlement recovery:** rebuilding current TycoonX access from already validated transaction-ledger state without replaying the original grant.

The recovery result should be idempotent. Repeating it should converge to the same valid entitlement state, not increment purchased value each time.

## 9. Source-of-truth fields for every paid grant

For each paid entitlement or Diamond grant, preserve enough lawful evidence to answer:

- which channel produced the purchase: `apple`, `google_play`, `xsolla`, or another authorized future source;
- source transaction/order identity;
- source product identifier;
- TycoonX account to which the purchase was validly linked;
- purchase state and authoritative confirmation time;
- amount/currency/tax information where needed for transaction support, accounting, refund, or legal obligations;
- entitlement type and quantity;
- original grant event;
- current entitlement/balance effect;
- refund/reversal/chargeback state where applicable; and
- every later correction or migration event without overwriting the historical transaction identity.

Do not use a shared entitlement ledger as a reason to erase the original merchant/payment-channel identity. Refund, chargeback, tax, and payment-dispute responsibilities can remain transaction-specific even when gameplay access is cross-platform.

## 10. Refunds and reversals remain transaction-specific

Cross-platform access does not create a universal refund processor.

- an Apple purchase remains an Apple purchase for App Store transaction/refund handling;
- a Google Play purchase remains tied to Google Play order/refund/void state and the applicable developer/provider processes;
- an Xsolla webshop purchase remains tied to the actual Xsolla transaction, merchant/refund configuration, and applicable law;
- CK-Labs remains responsible for accurate TycoonX entitlement delivery and reconciliation where its role requires it; and
- a refund on one channel must not remove unrelated legitimate value purchased through another channel.

Example: if 500 Diamonds bought through Xsolla are refunded, do not subtract a later unrelated 500-Diamond Apple purchase merely because the combined account balance happens to be 500 at the time of correction. Use transaction-specific ledger evidence and the lawful correction rules for consumed/transferred value.

## 11. Regional pricing and cross-platform access

Cross-platform access must not become a regional-price arbitrage entitlement.

CK-Labs may lawfully maintain different future prices, currencies, taxes, bundles, and genuine promotions by channel or region where platform rules and applicable law permit it. A player who legitimately purchased an eligible product in one region may continue to have the corresponding valid entitlement where the contract and law require it, but users must not falsify country, tax location, payment credentials, residency, storefront eligibility, or account information to obtain a price or promotion for which they are not eligible.

Operational safeguards:

- [ ] do not automatically move an account to a cheaper storefront because the player logs in from a different IP address;
- [ ] do not require a player to repurchase an already valid entitlement merely because the current device uses another storefront;
- [ ] do not promise the lowest price available anywhere across Apple, Google Play, or Xsolla;
- [ ] do not retroactively reprice a completed one-time purchase because another platform later offers a lower price;
- [ ] do not impose an extra charge on a completed one-time purchase because the player's later platform has a higher price; and
- [ ] keep genuine promotions and Lifetime VIP sales-window pricing auditable.

## 12. Account compromise and entitlement hijacking

A valid provider transaction must not be permanently rebound to an attacker merely because the attacker obtains a temporary TycoonX session.

Where account compromise is suspected:

- temporary protective restrictions may be used where proportionate and lawful;
- preserve the original transaction-to-account/purchaser evidence;
- do not migrate a Lifetime VIP or another restorable entitlement to a new account solely on the basis of a client claim;
- require reasonable verification before a supported entitlement move or re-link;
- use atomic migration where a real move is supported so the entitlement cannot exist on two accounts at once;
- do not use account-compromise investigation as a reason to confiscate unrelated purchases without evidence; and
- preserve applicable support, appeal, consumer, privacy, and automated-decision safeguards.

## 13. Provider outage, migration, and replacement

If Apple, Google Play, Xsolla, authentication, database, webhook, or infrastructure systems are unavailable or replaced:

- do not manufacture a fresh paid grant merely because the original provider cannot be reached temporarily;
- queue/reconcile uncertain transactions when authoritative state becomes available;
- preserve transaction-source identifiers through migrations;
- make migration idempotent and reconcile counts/value before and after cutover;
- never convert all historical purchases into one synthetic transaction that destroys refund/chargeback provenance;
- preserve one 30-Day VIP clock and one Lifetime VIP entitlement state; and
- preserve mandatory remedies if a provider change materially impairs a continuously supplied digital service.

A replacement payment or infrastructure provider does not by itself erase valid paid entitlements.

## 14. Free, promotional, test, review, and goodwill grants

Non-purchased grants must remain distinguishable from paid Apple, Google Play, or Xsolla transactions.

- A free or promotional Diamond grant does not become a refundable Apple/Google/Xsolla purchase merely because it appears in the same Diamond balance.
- A complimentary VIP grant must not overwrite the provenance or expiry of a separately purchased 30-Day VIP.
- A test or review grant must not be restored as though the player paid for Lifetime VIP.
- A goodwill extension should be recorded as a separate adjustment so it does not rewrite the original transaction.
- Correcting an invalid free grant must not remove unrelated purchased value.

## 15. Family Sharing and shared access are separate from owned cross-platform entitlement

If Apple Family Sharing is enabled for an eligible Apple product, shared access must remain distinguishable from an individually owned TycoonX purchase.

A family member's shared Apple access must not automatically:

- create an independently owned Lifetime VIP transaction;
- become transferable to another TycoonX account;
- survive an authoritative Apple family-sharing revocation merely because it was once visible on another platform; or
- create a second refundable purchase record.

Handle Apple shared ownership/revocation state according to the dedicated Apple account-binding and Family Sharing rules.

## 16. Mandatory consumer rights and conformity

Nothing in cross-platform entitlement logic may be used to waive mandatory rights concerning withdrawal, conformity, updates, modifications, termination, price reduction, refund, reimbursement, liability, access to qualifying user-created content, or other mandatory digital-product remedies.

If a paid entitlement is marketed as usable across supported platforms, that public statement can become relevant to contractual conformity and reasonable consumer expectations. Before making a cross-platform claim, verify that the supported platforms and account-linking behavior actually work.

Do not market:

- `Buy once, works everywhere` unless the real entitlement and platform-policy matrix supports that statement;
- `Lifetime VIP on every platform forever` where that overstates the defined commercial-lifetime product; or
- `Diamonds sync everywhere` if a supported client/storefront cannot lawfully or technically recognize the shared account balance.

## 17. Required release evidence

Before treating cross-platform paid entitlements as production-ready, preserve a dated evidence packet containing:

- [ ] current Apple Guideline 3.1.3(b) review;
- [ ] Apple catalog mapping for externally acquired TycoonX items usable inside iOS;
- [ ] current Google Play Payments-policy review;
- [ ] Google Play program/storefront decision for any alternative purchase steering;
- [ ] Xsolla webshop product-to-entitlement mapping;
- [ ] authoritative product identifiers and source-channel mapping;
- [ ] transaction-idempotency evidence;
- [ ] account-linking and compromise-recovery procedure;
- [ ] regional/storefront availability matrix;
- [ ] refund/reversal source mapping;
- [ ] current Terms/Purchases links and checkout disclosures; and
- [ ] tests listed below.

Do not use Xsolla integration/marketing documentation as authority for what Apple or Google permits in a particular App Store or Play storefront. The current Apple/Google rule and any enrolled program terms control the platform-policy question.

## 18. Required regression tests

At minimum test all applicable cases before release and after material payment/account changes:

1. **Xsolla Diamonds -> iOS:** valid paid webhook grants once; same account on iOS sees the correct server balance; no second grant on login; Apple 3.1.3(b) catalog condition documented where applicable.
2. **Google Play Diamonds -> iOS:** valid Google purchase grants once; iOS login does not replay it; source remains Google Play.
3. **Apple Diamonds -> Android:** Android login shows the resulting TycoonX account balance without replaying the Apple purchase.
4. **Duplicate provider event:** repeated Apple notification, Google notification, or Xsolla webhook does not add the same paid value twice.
5. **Simultaneous devices:** two clients opening the same account cannot race into duplicate entitlement creation.
6. **30-Day VIP cross-platform:** original expiry timestamp remains unchanged across iOS, Android, and web sign-in.
7. **30-Day VIP restore:** reinstall/reconciliation does not restart or extend the 30-day clock.
8. **Lifetime VIP cross-platform:** one valid Lifetime VIP remains one entitlement after use on multiple supported platforms.
9. **Lifetime VIP restore collision:** StoreKit restore does not create a second Lifetime VIP if the same underlying entitlement is already linked.
10. **Xsolla refund after cross-platform use:** only the affected transaction/value is corrected; unrelated Apple/Google purchases remain intact.
11. **Apple refund after cross-platform use:** the same rule applies transaction-specifically; Xsolla/Google purchases remain intact.
12. **Google refund/void after cross-platform use:** the same rule applies transaction-specifically; Apple/Xsolla purchases remain intact.
13. **Account compromise:** attacker login cannot permanently steal or duplicate a restorable entitlement.
14. **Account relink:** a supported re-link is atomic and cannot leave the same non-consumable entitlement active on two separate accounts unless the platform entitlement itself lawfully supports shared access.
15. **Regional change:** changing device/storefront does not retroactively reprice an existing completed one-time purchase.
16. **Provider outage:** uncertain transactions are not guessed into paid state and later reconcile correctly.
17. **External-purchase steering disabled:** where Apple or Google external-purchase steering is not authorized, the app can still recognize an already valid permitted entitlement without exposing an external checkout call to action.

## 19. Release blockers

Treat the following as **P0 blockers** for cross-platform payment availability:

- the same provider transaction can grant Diamonds more than once;
- 30-Day VIP restarts when the player changes platform or reinstalls;
- Lifetime VIP is duplicated once per platform/account-link attempt;
- iOS consumes a web-only paid gameplay item under Guideline 3.1.3(b) without the required iOS In-App Purchase availability where that rule is the relied-upon basis;
- the app assumes cross-platform recognition automatically authorizes an Xsolla link or external checkout;
- a Google Play build silently bypasses required Play Billing without a valid current exception/program;
- a refund on one channel removes unrelated value bought on another channel;
- source transaction/merchant provenance is lost after entitlement migration;
- account compromise permits entitlement theft or duplicate re-linking;
- external steering remains active in an ineligible storefront; or
- public cross-platform claims materially exceed the actual supported/platform-compliant behavior.

## 20. Founder-protective operating rule

CK-Labs may operate one coherent TycoonX entitlement system across supported platforms while still keeping Apple, Google Play, and Xsolla transaction identities, pricing, taxes, refund routes, chargebacks, storefront rules, and provider responsibilities separate.

The safe model is:

**one TycoonX account entitlement state + transaction-specific source evidence + idempotent fulfillment + platform-specific purchase rules.**

This protects players from losing valid purchases when they change devices while protecting CK-Labs from duplicate grants, refund arbitrage, entitlement hijacking, regional-price abuse, payment-provider ambiguity, and platform-policy violations.
