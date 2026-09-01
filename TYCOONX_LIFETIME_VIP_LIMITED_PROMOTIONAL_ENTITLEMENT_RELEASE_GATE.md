# TycoonX Lifetime VIP Limited Promotional Entitlement Release Gate

**Status:** P0 commercial / payment / entitlement / consumer release gate  
**Owner:** CK-Labs  
**Last reviewed:** September 1, 2026  
**Scope:** TycoonX Lifetime VIP sold through Apple App Store In-App Purchase, Google Play, and the official TycoonX web shop using Xsolla.

## Purpose

TycoonX Lifetime VIP is a **one-time premium entitlement offered only during selected limited promotional sales windows**. It is not a permanently available catalog promise, it is not an auto-renewing subscription, and previous availability does not create a right or expectation that it will remain available, return later, or return at the same price.

At the same time, a valid completed Lifetime VIP purchase is a real paid digital entitlement. CK-Labs must not use the limited-window nature of the offer, the word "Lifetime", provider migration, account recovery, balance corrections, feature changes, or a later pricing decision as a shortcut to remove or silently downgrade a valid purchase.

The founder-protective objective is to make the offer genuinely limited when marketed as limited, preserve one authoritative entitlement per valid purchase, prevent duplicate or accidental grants, permit lawful correction of invalid transactions, keep payment-provider roles separate from CK-Labs fulfillment duties, and preserve all mandatory consumer remedies.

This file is an operational release gate. It does not replace the TycoonX Terms of Service, Purchases & Refunds Policy, transaction-specific checkout information, provider terms, or mandatory law.

## 1. Core product invariant

The current TycoonX product described as **Lifetime VIP** must satisfy all of the following:

- it is a one-time paid digital entitlement;
- it does not automatically renew;
- it does not create a recurring payment obligation;
- it is offered only during selected genuine sales windows chosen by CK-Labs;
- CK-Labs may withdraw it from future sale, may choose never to offer it again, and may use a different lawful price in a later genuine sales window;
- closing a sales window affects future availability only and does not by itself cancel, shorten, or convert an already valid Lifetime VIP entitlement;
- one valid provider transaction must never create multiple Lifetime VIP entitlements merely because notifications, restores, retries, devices, accounts, or platforms repeat the same transaction;
- Lifetime VIP remains legally and technically distinct from purchased Diamonds, one-time 30-Day VIP, free or promotional grants, and any future recurring subscription; and
- any future recurring VIP product must use separate product identifiers, checkout copy, billing logic, cancellation rules, renewal rules, legal review, and localized legal synchronization where public legal meaning changes.

Do not call a recurring subscription "Lifetime VIP". Do not convert Lifetime VIP into a recurring product by changing a store SKU while keeping old consumer-facing wording.

## 2. What "Lifetime" means

The canonical TycoonX Terms define Lifetime VIP as intended to remain active for the **commercial operating lifetime of the TycoonX Service for the purchasing account**, while TycoonX continues to be operated and made available and while the account remains eligible to use the Service.

Operationally, this means:

- a valid Lifetime VIP must not have an arbitrary hidden calendar expiry while the TycoonX Service continues and the entitlement remains valid;
- normal logout, reinstall, device replacement, supported platform switching, app updates, server maintenance, or provider migration do not start a new term and do not end the existing entitlement;
- "Lifetime" does not mean the biological lifetime of the purchaser, CK-Labs, an owner, a device, a payment provider, a server, or another company;
- "Lifetime" is not a promise that TycoonX will operate forever or for an undisclosed fixed minimum number of years;
- the commercial-lifetime meaning must be disclosed clearly at or immediately before checkout wherever Lifetime VIP is sold; and
- the commercial-lifetime definition cannot be used as a pretext for arbitrary early expiry, a silent downgrade to 30-Day VIP, or removal of a valid entitlement while the relevant TycoonX service continues.

Potential lawful end states include a provider-confirmed refund or invalidation of the underlying purchase, a lawful account termination with the required legal analysis, a permanent lawful end of the TycoonX Service, or another circumstance recognized by applicable law. Mandatory consumer remedies remain unaffected.

## 3. Genuine limited sales windows

A Lifetime VIP sales window must be a real commercial event, not manufactured urgency.

For each window, preserve a campaign record containing where applicable:

- internal window/campaign ID;
- planned start and end date/time, including the operational timezone;
- countries, regions, storefronts, and payment channels included;
- eligible account classes where an eligibility restriction exists;
- product/SKU identifiers per payment channel;
- price and currency by channel/region or the provider pricing rule used;
- bundle contents or stated Lifetime VIP benefits relevant to the offer;
- campaign copy, countdown wording, crossed-out/reference-price basis, and screenshots or reproducible configuration evidence;
- any extension, shortening, pause, restart, or early closure and the genuine business reason for it; and
- the final date/time at which each storefront stopped accepting new purchases.

The sales window may be shortened, extended, paused, or ended for a genuine reason where lawful, but the public representation must remain truthful. If a stated countdown is extended, record why and update the displayed deadline rather than allowing a false expired timer to reset automatically.

Do not:

- use a countdown that reaches zero and immediately resets while the same claimed expiring offer continues unchanged;
- say "last chance", "never again", "final sale", "only today", or equivalent unless that statement is genuinely supportable;
- invent scarcity based on fake stock quantities for a digital entitlement;
- hide a known continuation of the same offer while representing the current window as a final opportunity; or
- use repeated push notifications or interface pressure in a way that makes a genuine limited offer misleading or coercive.

EU consumer law can treat a commercial practice as misleading where false or deceptive information about availability, price advantage, or other material characteristics causes or is likely to cause a transactional decision the consumer otherwise would not have made. Commission consumer-enforcement work has specifically identified fake countdown timers as a dark-pattern risk.

## 4. Closing a sales window and pending transactions

Opening a product page, putting Lifetime VIP in a cart, beginning checkout, seeing an earlier cached price, or entering a pending payment state before a sales window closes does not by itself reserve Lifetime VIP or an earlier price for an unlimited period.

The authoritative outcome depends on the transaction-specific provider record, applicable checkout information, provider rules, the actual offer, and mandatory law.

Operational rules:

- stop presenting the offer as purchasable after the applicable window closes;
- stop generating new web-shop payment sessions for a closed Lifetime VIP offer where the integration permits it;
- preserve enough evidence to reconcile provider-approved transactions that complete after a processing delay;
- if Apple, Google Play, or Xsolla later confirms a valid transaction that legally and technically belongs to the closed sales window, reconcile and honor or otherwise remedy that specific transaction according to the applicable offer, provider rules, and mandatory law;
- do not infer a valid purchase merely because the user opened checkout before closing; and
- do not reject a provider-confirmed transaction merely because the webhook or notification arrived after the public window had closed.

If CK-Labs intentionally wants a hard payment-completion cutoff instead of an offer-initiation cutoff, that rule must be reflected consistently in the checkout configuration and consumer-facing offer where legally material.

## 5. Authoritative Lifetime VIP entitlement record

A production Lifetime VIP record should be recoverable from authoritative server/provider evidence and should identify, at minimum where available:

- TycoonX account ID;
- payment channel/provider;
- provider product/SKU identifier;
- provider transaction, order, or purchase-token identifier;
- provider transaction status;
- original sales-window/campaign identifier;
- transaction confirmation timestamp;
- entitlement fulfillment timestamp;
- entitlement status;
- refund, reversal, chargeback, cancellation, or invalidation state;
- account-linking/restoration history where material;
- provider migration history where material;
- business-transfer/successor migration history where material; and
- any correction, appeal, or consumer-remedy event affecting the entitlement.

A device-local flag, client cache, screenshot, local receipt copy, or profile boolean must not be the sole authority for a paid Lifetime VIP.

Fulfillment must be **idempotent**. Replaying the same provider event, restoring on another device, reconnecting after an outage, receiving a duplicate webhook, reinstalling TycoonX, or signing into another supported platform must not create another Lifetime VIP from the same purchase.

## 6. Apple App Store mapping

Apple currently describes a **Non-Consumable** In-App Purchase as a product purchased once that does not expire or decrease with use. That is the intended Apple product type for current TycoonX Lifetime VIP.

For the live Apple mapping:

- use a dedicated Lifetime VIP non-consumable product ID;
- do not configure Lifetime VIP as a consumable merely to permit repeat purchases;
- do not configure it as an Auto-Renewable Subscription;
- do not configure it as a Non-Renewing Subscription intended for a limited-duration service;
- preserve server-side entitlement/account binding needed for TycoonX access while treating the signed App Store transaction as authoritative provider evidence;
- support restoration or recovery of the valid non-consumable where Apple rules, the transaction, the contract, or mandatory law requires it; and
- when the product is removed from future App Store sale, preserve already purchased valid entitlement access and transaction recognition rather than treating "Developer Removed from Sale" as a refund or revocation.

Apple's current App Store Connect documentation says customers who already purchased a developer-removed In-App Purchase retain access and those transactions remain available through StoreKit and App Store Server API. Apple's review guidelines also require a restore mechanism for restorable In-App Purchases.

The Apple product type is a platform configuration fact, not a waiver of EU/German consumer rights or a guarantee that the TycoonX Service itself will operate forever.

## 7. Google Play mapping

Current TycoonX Lifetime VIP should use the Google Play **one-time product** path and be treated as a permanent/non-consumable entitlement for the purchasing Google Account rather than a recurring subscription.

The production integration must:

- use a dedicated one-time product identifier for Lifetime VIP;
- query current product details rather than relying indefinitely on stale cached catalog data;
- validate the provider purchase token and purchase state;
- grant Lifetime VIP only after Google reports the purchase as `PURCHASED`, not while it remains `PENDING`;
- verify the purchase before granting the entitlement;
- acknowledge a valid non-consumable purchase after entitlement delivery as required by Google Play;
- do not consume a Lifetime VIP purchase merely to make the same user able to buy the same Lifetime product again;
- keep transaction and account-linking evidence after acknowledgment; and
- process refund/voided-purchase information transaction-specifically.

Google's current one-time purchase lifecycle recommends backend verification and states that non-consumable purchases are acknowledged rather than consumed. If a valid purchase is not acknowledged within the applicable Google timeframe, Google can automatically refund and revoke it.

Do not use an `orderId` alone as the universal identity for Google Lifetime VIP fulfillment. The purchase token and verified current provider state are the more appropriate entitlement-level keys under Google's current guidance.

## 8. Xsolla web-shop mapping

The official TycoonX web shop must sell Lifetime VIP as a **one-time digital entitlement**, not as an automatically renewing Xsolla subscription plan unless CK-Labs deliberately launches a separate recurring product later.

For Xsolla fulfillment:

- identify the TycoonX account before granting the entitlement;
- use a dedicated Lifetime VIP SKU/item identifier;
- grant only after valid successful payment/order confirmation;
- verify webhook authenticity using the currently required Xsolla mechanism;
- make successful-payment/order handling idempotent;
- make cancellation/refund handling transaction-specific;
- preserve the Xsolla transaction reference and item information needed for refund, chargeback, dispute, recovery, and audit handling; and
- process the combined or separate webhook model actually configured for the CK-Labs project.

Xsolla currently documents `order_paid` and `order_canceled` combined webhooks for newer projects, while older projects can use separate payment/refund plus order webhooks. The implementation must follow the actual project configuration rather than assuming one webhook model for every Xsolla account.

A browser return URL, client-side success message, cart object, payment-session creation, or order creation is not by itself sufficient proof that Lifetime VIP was paid.

## 9. Already-owned and duplicate-purchase prevention

Lifetime VIP is not a quantity product. A second copy normally does not create a second lifetime or a stronger entitlement.

Therefore:

- if TycoonX already knows the account has a valid Lifetime VIP, suppress or disable another Lifetime VIP purchase path where reasonably practicable;
- before an authenticated Xsolla web-shop purchase, check the current account entitlement where technically possible and clearly warn/block a redundant purchase;
- on Apple/Google, reconcile existing ownership before offering an in-app repurchase where the provider product model already represents permanent ownership;
- if separate channels allow a player to complete two genuine Lifetime VIP payments before ownership can be reconciled, do not create duplicate paid status flags or duplicate restoration rights from the same account-level benefit;
- investigate the second transaction as a duplicate-payment/duplicate-entitlement support case and apply the provider, contract, and mandatory-law refund or remedy rules that actually govern it; and
- do not silently keep a redundant duplicate payment merely because the entitlement database cannot represent two copies.

A duplicate technical grant created by retries or restore bugs may be consolidated without affecting the underlying valid purchase. A genuinely separate second payment is not the same thing as a technical duplicate and must be reviewed transaction-specifically.

## 10. Restore, reinstall, platform switching, and account deletion

A restore or recovery action must reconnect the same valid entitlement rather than create another purchase.

Examples:

- A player with valid Apple Lifetime VIP who reinstalls TycoonX should recover the same Lifetime VIP, not a second Lifetime VIP.
- A player moving to another supported TycoonX platform may receive account-level recognition of the same valid Lifetime VIP where the cross-platform model permits it, without creating another provider transaction.
- A provider migration must preserve the existing Lifetime VIP and its provenance rather than issuing a new paid purchase record.
- A restore after account deletion does not recreate deleted gameplay progress, consumed Diamonds, inventory, social history, or transferred assets unless mandatory law requires otherwise.

Deleting a TycoonX account may remove profile/gameplay data, but it does not necessarily erase a separate valid non-consumable platform entitlement. Where Apple, Google Play, Xsolla records, the contract, or mandatory law require recovery, CK-Labs may request reasonable evidence that the claimant controls the relevant provider/payment account before attaching the entitlement to an eligible TycoonX account.

Do not require passwords, full card numbers, CVVs, authentication backup codes, or unrelated sensitive information for ordinary entitlement recovery.

## 11. Account compromise and entitlement theft

A compromised TycoonX account can justify immediate security containment while ownership is investigated, but the compromise itself does not prove that the legitimate owner transferred, sold, duplicated, or fraudulently obtained Lifetime VIP.

Where a Lifetime VIP appears on the wrong account after compromise:

- preserve the provider transaction and original account-binding evidence;
- freeze transfer/relink operations if necessary to prevent further harm;
- use reasonable account and provider evidence to identify the proper entitled account;
- avoid cloning the entitlement onto multiple accounts while ownership remains disputed;
- separate the security decision from any fraud or Terms-enforcement decision; and
- preserve unrelated valid Diamonds, 30-Day VIP, and other purchases unless they have their own independent correction basis.

Lifetime VIP must not become a tradable account asset merely because support can technically relink an entitlement during a verified recovery case.

## 12. Refunds, reversals, chargebacks, and invalid transactions

A refunded or invalid Lifetime VIP transaction does not entitle the user to keep both the returned money and the related paid entitlement.

Subject to applicable law:

- a provider-confirmed refund, reversal, cancellation, chargeback, or invalidation may justify revoking the Lifetime VIP created by that specific transaction;
- do not revoke a separate valid Lifetime VIP funded by a different still-valid transaction merely because another transaction was reversed;
- do not remove unrelated purchased Diamonds or another valid 30-Day VIP merely because Lifetime VIP is disputed;
- where the refund/dispute arises from account compromise, duplicate billing, integration error, or another non-fraud reason, do not automatically classify the account owner as fraudulent; and
- if a chargeback is contested, keep the payment dispute, account security decision, and game-moderation decision as separate records.

Where the payment provider controls refund approval or settlement, CK-Labs may rely on provider-authoritative transaction status while remaining responsible for TycoonX entitlement state within CK-Labs' control.

## 13. Feature changes and the value of Lifetime VIP

Lifetime VIP grants access to the Lifetime VIP tier during its valid commercial lifetime. It does not freeze every individual gameplay parameter, automation setting, balance number, convenience feature, interface, or economy rule forever.

CK-Labs may improve, replace, rebalance, add, or remove individual VIP features for valid reasons such as balance, economy stability, abuse prevention, security, technical compatibility, accessibility, platform rules, legal requirements, or evolution of TycoonX, but only within the contract and mandatory digital-product law.

Founder-protective limits:

- do not use the feature-change clause to convert Lifetime VIP into 30-Day VIP;
- do not create an arbitrary hidden expiry while TycoonX continues;
- do not remove substantially all meaningful Lifetime VIP value and argue that the label alone satisfies the purchase;
- do not promise an exact feature as permanent in checkout advertising unless CK-Labs is prepared to honor that representation or lawfully change it later; and
- preserve required notice, conformity, cure, termination, price-reduction, refund, or other remedies where mandatory law applies.

Under current German digital-product rules, public statements can affect objective conformity expectations. For continuously supplied digital products, changes beyond what is necessary to maintain conformity can require a valid contractual reason, no additional cost, clear information, and, for changes impairing access or usability, additional advance durable-medium information and potentially a termination route under the applicable conditions.

## 14. Permanent service shutdown

The commercial-lifetime definition allows Lifetime VIP to end when the TycoonX Service is lawfully permanently discontinued. That does not mean a shutdown clause automatically eliminates every consumer remedy.

Before a planned permanent shutdown:

- stop opening new Lifetime VIP sales windows once a shutdown decision has become sufficiently concrete that marketing an ordinary "Lifetime" offer would be misleading or commercially irresponsible;
- do not market "Lifetime VIP", "final Lifetime sale", or similar without conspicuous legally reviewed disclosure if CK-Labs already knows the service will end materially sooner than a reasonable purchaser would expect;
- preserve records of recent Lifetime VIP sales, prices, sales-window claims, checkout wording, and transaction dates;
- identify purchasers potentially affected by non-supply, material impairment, or a legally relevant change;
- coordinate Apple, Google Play, and Xsolla transaction/refund roles; and
- apply notice, conformity, cure, price-reduction, termination, refund, or other mandatory remedies where their legal conditions are satisfied.

Permanent shutdown does not turn Lifetime VIP into a cash investment or guarantee a pro-rata cash value beyond what applicable law or a voluntary remedy requires. It also does not authorize CK-Labs to keep selling a knowingly unsustainable Lifetime offer without truthful disclosure.

## 15. Business sale, merger, reorganization, and successor operator

A business transfer does not automatically terminate Lifetime VIP.

If TycoonX continues under a lawful successor operator:

- preserve valid Lifetime VIP entitlements and transaction provenance where the applicable contract and law require continuity;
- preserve provider transaction identifiers and restoration evidence needed after migration;
- do not reset Lifetime VIP into 30-Day VIP during migration;
- do not duplicate Lifetime VIP because both old and new systems independently import the same entitlement; and
- update public legal/controller/operator information and required notices as applicable.

If the transaction instead leads to permanent service discontinuation, use the shutdown and digital-product-remedy analysis rather than treating the corporate transaction itself as an automatic forfeiture event.

## 16. Prices, regional pricing, promotions, VAT, tax, and FX

CK-Labs may set different lawful Lifetime VIP prices for different genuine future sales windows and may vary prices by platform, country, region, currency, tax treatment, or authorized payment channel.

For each completed purchase:

- the final legally binding checkout total and provider-confirmed transaction record control, subject to a lawful obvious-error correction;
- a later lower Lifetime VIP price does not automatically create a refund, credit, price match, Diamonds, or another benefit;
- a later higher price does not create an extra charge on an already completed purchase;
- a prior sales window does not promise that a future window will use the same price or currency;
- platform pricing tiers, VAT/tax changes, FX movements, and provider adjustments can change future local prices;
- total consumer prices and mandatory taxes/fees must be displayed as required by applicable law; and
- reference prices, crossed-out prices, percentages, savings claims, countdowns, and promotional statements must be genuine and not misleading.

Regional-pricing abuse, coupon abuse, or a manipulated purchase can be investigated using transaction-specific evidence. Ordinary travel, genuine storefront differences, provider FX conversion, or acceptance of a genuinely displayed offer is not automatically fraud.

## 17. Obvious catalog, SKU, and entitlement errors

Treat mapping/configuration errors as transaction and fulfillment incidents before treating them as player misconduct.

Examples:

- If a valid Lifetime VIP purchase activates only 30-Day VIP, cure the missing Lifetime VIP rather than rewriting the provider transaction as 30-Day VIP.
- If a valid 30-Day VIP purchase accidentally activates Lifetime VIP, correct the unsupported excess entitlement where legally permitted while preserving the valid underlying 30-Day purchase and mandatory remedies.
- If one Lifetime VIP payment creates two account flags because a webhook is retried, consolidate the technical duplicate while preserving the valid Lifetime VIP.
- If a provider catalog accidentally displays an obviously erroneous Lifetime VIP price, use the separate TycoonX pricing/catalog-error gate. Do not silently retroactively charge the difference.

A CK-Labs configuration mistake is not automatically a hack or exploit by the buyer. Deliberate exploitation of a known defect can be investigated separately using evidence.

## 18. Free, promotional, tester, review, or complimentary Lifetime-like grants

A free or promotional long-term VIP grant must be classified separately from purchased Lifetime VIP unless CK-Labs intentionally grants the same purchased entitlement contractually.

Where lawful and clearly disclosed, a free/promotional/test/review/compensation grant may have separate conditions or an expiry. Such a grant:

- must not be described as a purchased Lifetime VIP if it is not equivalent;
- must not overwrite or shorten an independently purchased Lifetime VIP;
- must not be used to create fake "Lifetime VIP sale" scarcity;
- does not create a recurring payment obligation; and
- does not imply that the live TycoonX Service is a beta.

If a free grant is accidentally recorded in the same field as a paid Lifetime VIP, migrate the record using provenance evidence before making any correction that could affect a real purchase.

## 19. Old app versions, security emergencies, and provider replacement

CK-Labs may require a supported TycoonX version for security, fraud prevention, entitlement verification, or provider compatibility where lawful.

An outdated client, removed storefront product, replaced payment provider, authentication migration, or security emergency must not by itself erase a valid Lifetime VIP.

During a provider or infrastructure migration:

- preserve provider provenance and current entitlement status;
- make migration idempotent;
- test accounts with Apple, Google Play, Xsolla, manually restored, refunded, disputed, and cross-platform Lifetime VIP histories;
- preserve the distinction between purchased and free/promotional grants; and
- retain rollback evidence sufficient to correct a migration that accidentally removes or duplicates Lifetime VIP.

If a third-party provider ends support or changes its rules, CK-Labs may replace that provider where lawful. The provider change alone is not permission to cancel all valid paid entitlements.

## 20. Support decision matrix

| Scenario | Default route |
|---|---|
| Valid payment, Lifetime VIP missing | Verify transaction and fulfill once |
| Provider still pending | Wait for authoritative completion; do not grant yet |
| Reinstall with valid Lifetime VIP | Restore/relink the same entitlement |
| Same provider event received twice | No duplicate Lifetime VIP |
| Already owns Lifetime VIP and tries to buy again | Block where possible; otherwise duplicate-payment review |
| Apple product removed from future sale | Preserve valid prior entitlement; do not treat removal as refund |
| Google Lifetime purchase still `PENDING` | Do not grant until `PURCHASED` and verified |
| Xsolla order created but unpaid | Do not grant |
| Provider confirms refund/reversal | Correct only the affected Lifetime transaction, subject to law |
| Account compromised | Security containment plus separate ownership review |
| Lifetime attached to wrong account after compromise | Preserve evidence, avoid cloning, relink only after reasonable verification |
| 30-Day VIP purchase mapped to Lifetime VIP | Correct mapping; preserve the valid 30-Day purchase |
| Lifetime purchase mapped to 30-Day VIP | Cure the missing Lifetime entitlement |
| Feature materially impaired | Digital-product conformity/change/remedy review |
| User deleted TycoonX account | Apply deletion rules; provider entitlement may remain restorable where required |
| Business transferred and TycoonX continues | Preserve valid Lifetime VIP through successor migration where required |
| Planned permanent shutdown | Stop misleading sales and run shutdown/remedy analysis |
| Lower Lifetime price appears in later sale | No automatic price match except where mandatory law requires otherwise |
| Fake/repeating countdown detected | Stop campaign, correct offer, preserve evidence, legal review |

## 21. Minimum release evidence

Before a Lifetime VIP sales window opens, CK-Labs should be able to produce:

- [ ] the exact sales-window start/end and truthful campaign wording;
- [ ] Apple Lifetime VIP product ID and confirmation that it is configured as a non-consumable;
- [ ] Google Lifetime VIP one-time product ID and confirmation that it is handled as non-consumable/permanent entitlement rather than a subscription;
- [ ] Xsolla Lifetime VIP SKU and confirmation that it is one-time rather than recurring;
- [ ] server-side entitlement key/idempotency design;
- [ ] provider transaction reconciliation rules;
- [ ] already-owned/duplicate-purchase prevention behavior;
- [ ] account-binding and recovery behavior;
- [ ] refund/reversal/chargeback handling for each provider;
- [ ] cross-platform recognition rule;
- [ ] sales-window price/currency/region evidence;
- [ ] truthful countdown/reference-price evidence where those claims are used;
- [ ] shutdown and successor-operator handling;
- [ ] proof that Lifetime VIP cannot be silently converted to 30-Day VIP;
- [ ] proof that unrelated Diamonds and 30-Day VIP are isolated from a Lifetime payment dispute;
- [ ] canonical Terms and Purchases wording matching the actual product; and
- [ ] localized legal copies marked current only if canonical public meaning has not materially changed.

Do not open the production Lifetime VIP sale if provider configuration contradicts the represented one-time/permanent entitlement, if restore/idempotency is untested, if the campaign uses false scarcity, or if the checkout does not clearly communicate the commercial-lifetime meaning.

## 22. Regression scenarios

At minimum test these cases before and after payment/provider changes:

1. Apple Lifetime VIP purchased once and restored after reinstall without duplicate grant.
2. Apple Lifetime VIP removed from future sale while an existing purchaser still retains valid access.
3. Google Lifetime VIP remains `PENDING` and no entitlement is granted.
4. Google Lifetime VIP reaches `PURCHASED`, is verified, granted once, and acknowledged.
5. Google purchase notification repeats and does not create another Lifetime VIP.
6. Xsolla `order_paid` repeats and remains idempotent.
7. Xsolla order is created but never paid and no Lifetime VIP is granted.
8. Xsolla order is canceled/refunded and only its related Lifetime VIP is corrected.
9. A user already owning Lifetime VIP tries to purchase again through another channel.
10. A valid Lifetime VIP transaction is accidentally mapped to 30-Day VIP and is cured to Lifetime VIP.
11. A valid 30-Day VIP transaction is accidentally mapped to Lifetime VIP and the excess is corrected without rewriting the purchase.
12. Account compromise moves or exposes the entitlement and recovery does not clone it.
13. Account deletion occurs and provider-restorable Lifetime VIP is handled separately from deleted gameplay data.
14. Authentication/provider migration preserves one Lifetime VIP and provenance.
15. A later genuine sales window uses a lower price and no automatic price-match credit is created.
16. A campaign countdown reaches zero and the offer actually closes rather than silently resetting.
17. A genuine campaign extension updates the public deadline and records the reason.
18. A feature change does not convert Lifetime VIP to 30-Day VIP or erase substantially all paid value without legal review.
19. A business transfer continues TycoonX and existing Lifetime VIP survives the migration where required.
20. A planned shutdown decision stops new misleading Lifetime sales and routes affected purchasers through the shutdown/remedy process.
21. A refund dispute does not remove unrelated purchased Diamonds.
22. A free promotional long-term VIP grant does not overwrite a purchased Lifetime VIP.

## 23. Current legal and platform reference points

This gate should be reviewed against current sources before a future material Lifetime VIP campaign or provider change, including:

- Apple App Store Connect, In-App Purchase types: https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-types
- Apple App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Apple App Store Connect, In-App Purchase statuses: https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-statuses
- Google Play Billing, one-time purchase lifecycle: https://developer.android.com/google/play/billing/lifecycle/one-time
- Google Play Billing, fraud and abuse guidance: https://developer.android.com/google/play/billing/security
- Xsolla webhook documentation: https://developers.xsolla.com/webhooks
- Directive 2005/29/EC on unfair commercial practices: https://eur-lex.europa.eu/eli/dir/2005/29/oj/eng
- Commission consumer enforcement material on dark patterns: https://commission.europa.eu/topics/consumers/consumer-rights-and-complaints/enforcement-consumer-protection/sweeps_en
- German BGB § 327e on conformity expectations: https://www.gesetze-im-internet.de/bgb/__327e.html
- German BGB § 327r on changes to continuously supplied digital products: https://www.gesetze-im-internet.de/bgb/__327r.html
- German BGB §§ 327m and 327n on termination and price reduction: https://www.gesetze-im-internet.de/bgb/__327m.html and https://www.gesetze-im-internet.de/bgb/__327n.html

Provider documentation, applicable law, and the actual merchant/checkout configuration can change. Re-check them when the production product, sales model, country program, merchant role, or legal framework changes.

## 24. Release rule

**Do not open or continue a TycoonX Lifetime VIP sales window if the offer is not genuinely limited as represented, the commercial-lifetime meaning is hidden or misleading, the live provider product is recurring or consumable contrary to the represented product, fulfillment/restoration is not idempotent, duplicate ownership is not safely handled, or the production implementation would remove mandatory consumer remedies.**

A failed gate blocks the Lifetime VIP sales window until the affected commercial, legal, payment, or entitlement issue is corrected.