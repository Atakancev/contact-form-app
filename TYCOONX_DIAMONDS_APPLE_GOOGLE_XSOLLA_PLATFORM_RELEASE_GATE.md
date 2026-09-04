# TycoonX Diamonds Apple, Google Play & Xsolla Platform Release Gate

**Review date:** September 4, 2026  
**Owner:** CK-Labs  
**Status:** P0 payment / entitlement / platform-policy companion gate

## Purpose

This is a narrow provider-integration companion to `TYCOONX_EU_VIRTUAL_CURRENCY_RELEASE_GATE.md`, `TYCOONX_PAYMENT_ENTITLEMENT_RELEASE_GATES.md`, `TYCOONX_PAYMENT_ENTITLEMENT_EVENT_STATE_MACHINE_GATE.md`, and the canonical TycoonX Terms and Purchases & Refunds Policy.

It does not redefine Diamonds or duplicate the EU consumer-law analysis. Its purpose is to make the same paid Diamond promise survive correctly across Apple App Store In-App Purchase, Google Play, and the official TycoonX web shop using Xsolla.

TycoonX has been in full release since September 1, 2026. Treat these as current production invariants.

## 1. Canonical Diamond invariant

The public contract already distinguishes paid value from free/promotional value:

- **Purchased Diamonds do not expire solely because time passes.**
- Promotional, gifted, event, test, review, compensation, or free Diamonds may have separately disclosed conditions, limits, eligibility rules, or expiry where permitted by law and platform rules.
- A refund, reversal, chargeback, duplicate grant, fraud finding, technical error, or other invalid transaction may justify a transaction-specific correction where permitted by law.
- A correction must not silently confiscate unrelated legitimate purchased value.

Never reclassify purchased Diamonds as `promotional` merely to impose an expiry, avoid a refund/conformity obligation, or simplify a migration.

## 2. Apple App Store: purchased currency must not expire

Apple App Review Guideline 3.1.1 currently states that credits or in-game currencies purchased through In-App Purchase may not expire.

For TycoonX Apple purchases:

- Diamond packs are intended to be **consumable** In-App Purchases.
- Do not attach a time-based expiry to purchased Apple Diamond value.
- Do not run a cron, inactivity cleanup, season rollover, economy reset, account-age rule, app-version migration, or provider migration that expires legitimate purchased Apple Diamonds solely because time passed.
- A promotion can end for future buyers without expiring Diamonds already validly purchased during that promotion.
- A Lifetime VIP sales window ending has no effect on an existing paid Diamond balance.

Apple's non-expiry rule applies to the purchased credits/currency. It does not require CK-Labs to promise that every free event grant, compensation grant, test grant, or other non-purchased promotional benefit lasts forever, provided the distinction and any permitted expiry are real and clearly disclosed.

## 3. Apple consumable versus restoration

Apple also tells developers to provide a restore mechanism for **restorable** In-App Purchases. That must not be confused with replaying consumable Diamond purchases.

Production rule:

- Lifetime VIP, when sold as the intended non-consumable product, must follow its applicable restoration path while valid.
- Purchased Diamond packs are consumable transactions and must not be duplicated merely because the user taps `Restore Purchases`, reinstalls the app, signs into a second device, restores a device backup, or retries StoreKit synchronization.
- If TycoonX persists the remaining paid Diamond balance on the server/account, restoring access to that same authoritative balance is not a new Diamond grant.
- Never implement `restore` by blindly summing every historical consumable receipt and granting those Diamonds again.

### Example

A player buys 500 Diamonds on iOS, spends 300, reinstalls TycoonX, and signs back into the same account. If the authoritative TycoonX balance is 200, the goal is to recover access to that 200. The reinstall must not recreate the original 500 as a second grant.

## 4. Apple payment-route boundary

Apple currently requires In-App Purchase for digital features/content unlocked in the app unless a current law, storefront entitlement, program, or App Store rule expressly permits another route.

Do not assume that because Xsolla sells Diamonds on the official web shop, every iOS storefront may freely contain an Xsolla purchase button or external-purchase call to action. The current Apple EU/external-purchase gates control those surfaces separately.

Likewise, Apple payment-route restrictions do not change the underlying TycoonX product definition: an authorized web-shop Diamond purchase remains a TycoonX transaction governed by its actual payment channel and applicable law.

## 5. Google Play: title-scoped virtual currency

Google Play's current Payments policy states that in-app virtual currencies must only be used within the app or game title for which they were purchased.

For TycoonX:

- paid Diamonds are for TycoonX and must not become a generic CK-Labs currency spendable in another game or unrelated app;
- do not advertise Diamonds as transferable to a future unrelated CK-Labs title unless the then-current platform rules and legal design expressly support that different product;
- a shared TycoonX account across supported devices does not by itself turn Diamonds into cross-title currency;
- Google Play's title-scope rule is not a reason to erase a valid balance merely because the user changes device.

Do not reinterpret `only within the app or game title` as `must be spent only on the exact Android device that made the purchase` unless a separate current platform rule requires that limitation.

## 6. Google Play purchase state and consumable processing

Google's current Play Billing integration guidance requires the app/backend to verify the purchase, grant content, and then acknowledge delivery. For consumable one-time products, consumption makes the product available to purchase again.

For a Google Diamond purchase:

1. receive the purchase/purchase token;
2. verify it against authoritative Google data on the secure backend;
3. confirm that the purchase is in the `PURCHASED` state, not merely `PENDING`;
4. verify the expected TycoonX package/product and quantity;
5. grant the corresponding Diamonds exactly once;
6. record idempotent fulfillment against the authoritative purchase token and, where applicable, line item/quantity;
7. consume the consumable purchase through the supported Google flow so it can be purchased again; and
8. reconcile later refund, reversal, chargeback, cancellation, or voided-purchase information without touching unrelated transactions.

A client callback alone is not authoritative enough to grant Diamonds.

## 7. Google three-day acknowledgement/consumption risk

Google's current billing guidance says a completed purchase must be acknowledged within three days or the user is automatically refunded and the purchase is revoked. For a consumable product, the supported consume operation fulfills that acknowledgement requirement.

Operational consequence:

- never grant Diamonds and then forget to complete the required Google consume/acknowledgement lifecycle;
- retry transient consume failures safely;
- do not grant a second time merely because a consume request is retried;
- reconcile automatic refund/revocation if the required processing did not complete;
- do not punish the player as fraud merely because CK-Labs failed to acknowledge/consume on time.

The three-day window starts after a pending transaction reaches `PURCHASED`, not while it remains pending.

## 8. Google pending transactions

A pending Google transaction must not grant paid Diamonds yet.

Required states:

- `PENDING` -> no paid entitlement grant;
- `PURCHASED` after authoritative verification -> grant exactly once and complete the required processing;
- canceled/expired pending purchase -> no paid grant;
- duplicate notification/callback -> no duplicate grant.

A UI that optimistically shows Diamonds before authoritative completion can create an exploitable negative-balance/refund problem and is not production-safe.

## 9. Google multi-quantity and multi-product separation

The existing Google multi-product gate remains authoritative for transactions containing several one-time products.

For Diamonds specifically:

- if multi-quantity purchasing is enabled for a Diamond product, fulfillment must use Google's authoritative quantity instead of assuming quantity `1`;
- do not enable multi-quantity before the backend can grant and reverse the exact quantity safely;
- do not confuse a multi-quantity partial-refund event with a partial refund of one product inside a multi-product purchase;
- one purchase token must not be reused as if it represented a new purchase after successful consumption.

## 10. Google pricing disclosure and billing UI parity

Google's current Payments policy requires clear and accurate terms/pricing and says in-app pricing must match the user-facing Play billing interface.

Therefore:

- show fresh eligible Google product price information rather than a stale hard-coded amount;
- if TycoonX marketing says `500 Diamonds for €X`, the actual eligible Play billing flow must correspond to the same product/quantity and current price;
- provider tax, currency, local-pricing, or offer changes must not be invented into a CK-Labs discount claim;
- a mismatch is a pricing/support incident, not evidence that the player manipulated the purchase.

## 11. Xsolla: catalog state is not payment state

Xsolla currently supports virtual currencies and virtual-currency packages in its catalog. For custom delivery, Xsolla recommends receiving successful-order/payment data on the game backend and granting the currency on the developer side.

For the TycoonX web shop:

- a catalog item being `Available` does not mean it has been paid;
- opening Pay Station does not grant Diamonds;
- an order created but unpaid does not grant Diamonds;
- a successful authoritative Xsolla payment/order event may grant the mapped Diamond package exactly once;
- duplicate webhooks or status retries must remain idempotent;
- refunds, reversals, chargebacks, or payment cancellation must reconcile the affected transaction under the Purchases & Refunds Policy and mandatory law;
- do not use an Xsolla catalog update to overwrite authoritative player balances.

## 12. Xsolla inventory and expiry configuration

Xsolla's catalog can express virtual-currency and inventory configuration, but provider capability is not permission to contradict the TycoonX contract.

If CK-Labs uses Xsolla inventory/catalog fields for paid Diamonds:

- configure paid Diamond value so that no provider-side time expiry contradicts the canonical non-expiry promise;
- distinguish paid Diamond packages from deliberately time-limited free/promotional grants;
- treat regional price, package quantity, availability, and promotion windows as future-offer configuration rather than a command to mutate past paid balances;
- after any catalog migration, verify that package SKU -> Diamond quantity mapping still matches checkout and server fulfillment.

## 13. Xsolla hard-currency/platform-linking feature is not automatically a TycoonX legal requirement

Xsolla documentation describes a `hard currency` configuration that can be linked to a platform of purchase. That is a provider feature, not by itself a rule that every TycoonX Diamond must be permanently siloed by payment channel.

Before changing TycoonX from one shared account balance to channel-specific balances, separately assess:

- Apple rules for the relevant storefront/program;
- Google Play's game-title restriction;
- Xsolla project configuration;
- the product representation made when the Diamonds were sold;
- refund/reversal traceability; and
- mandatory consumer law.

Do not introduce a retroactive platform silo that strands legitimate paid value without a valid legal/technical reason and the safeguards required by law.

## 14. Authoritative transaction lineage

Every paid Diamond grant should be reconstructable to one authoritative transaction lineage containing at least:

- TycoonX account/user identifier;
- provider/channel (`apple`, `google`, or `xsolla`);
- provider transaction/order/purchase token identifiers as appropriate;
- TycoonX product/SKU;
- purchased Diamond quantity;
- provider purchase state;
- fulfillment/idempotency state;
- grant timestamp;
- refund/reversal/chargeback state if later applicable;
- Diamond correction tied to that transaction if one occurs; and
- enough audit history to prove that retries did not create duplicate paid value.

Do not store full payment-card credentials or unrelated player data merely to build this lineage.

## 15. Purchased, promotional, and gameplay-earned Diamond buckets

Where the implementation needs different legal/payment behavior, maintain enough provenance to distinguish:

- purchased Diamonds;
- free/promotional/compensation/test/review grants; and
- gameplay-earned value.

This does not require exposing three confusing balances in the player UI. It means the backend must not lose the provenance needed for refunds, expiry rules, corrections, withdrawal/conformity remedies, provider disputes, or migrations.

A FIFO, LIFO, proportional, or other spending-allocation method may be used only if it is consistently implemented and does not defeat mandatory consumer rights or the public contract. Document the method if refund/correction outcomes depend on it.

## 16. Refunds, chargebacks, and negative balances

A provider refund or chargeback can justify correcting the value from the affected transaction, but the correction logic must be transaction-aware.

Do not:

- delete every Diamond in the account because one 100-Diamond purchase was refunded;
- remove Lifetime VIP because a Diamond pack was charged back;
- restart or cancel 30-Day VIP because an unrelated Diamond order changed state;
- label every chargeback as deliberate player fraud;
- create a permanent negative balance from a provider/CK-Labs processing error without reviewing the actual transaction and mandatory remedies.

Where some refunded Diamonds were already consumed, follow the canonical refund/chargeback and consumer-rights rules. Security/account-compromise evidence may require a separate investigation.

## 17. Account compromise

A disputed Diamond purchase does not by itself prove that the legitimate TycoonX account owner committed fraud.

Where account compromise is plausible:

- preserve relevant login/session/device/payment-event evidence proportionately;
- isolate the disputed transaction;
- prevent duplicate restoration while the transaction is investigated;
- do not silently remove unrelated paid value;
- restore/correct valid entitlements once authoritative evidence supports the outcome; and
- keep payment dispute, security investigation, and game-moderation decisions as separate records unless the facts genuinely connect them.

## 18. Economy changes do not authorize paid-currency confiscation

CK-Labs may rebalance the game economy and future Diamond utility for valid reasons subject to mandatory digital-product law. That flexibility does not mean CK-Labs can expire or delete legitimately purchased Diamonds solely because an economy reset is easier to implement.

For a currency redenomination or major wallet migration:

- preserve economically equivalent valid purchased balances unless a lawful change permits something else;
- preserve transaction lineage;
- test rounding so small balances are not silently lost;
- keep refunds and chargebacks traceable after migration;
- provide required notice/remedies for materially impairing changes; and
- never use a migration as a disguised expiry.

## 19. Provider outage and delayed event handling

Apple, Google Play, Xsolla, network, webhook, API, authentication, or TycoonX infrastructure outages can delay verification.

Fail safely:

- do not fabricate `success` because verification is temporarily unavailable;
- queue/retry idempotently where appropriate;
- do not create a second purchase request merely to repair a delayed first one;
- reconcile late provider success exactly once;
- reconcile late refund/reversal against the same transaction;
- communicate material delays without promising a grant that authoritative payment records do not support.

## 20. Provider replacement, app transfer, sale, or reorganization

A payment-provider migration, Apple/Google app transfer, business sale, merger, reorganization, or successor operator must preserve the ability to distinguish valid purchased Diamonds from promotional/free value and to reconcile surviving provider transactions.

Migration acceptance criteria:

- no paid Diamond expiry caused solely by migration;
- no duplicate historical grant;
- no loss of provider transaction lineage;
- no cross-account entitlement leakage;
- open refund/chargeback cases remain resolvable;
- current prices/catalogs can change for future purchases without rewriting completed transactions; and
- mandatory consumer remedies remain available.

## 21. Permanent service shutdown

Permanent lawful discontinuation of TycoonX is governed by the dedicated shutdown gate and mandatory consumer law.

The Apple non-expiry rule and the TycoonX non-expiry promise do not mean CK-Labs promises to operate TycoonX forever. Conversely, service shutdown cannot be used to erase mandatory refund, conformity, termination, price-reduction, damages, or other non-waivable remedies that arise from the actual facts.

## 22. VIP isolation

Diamond processing must not mutate the two VIP products unless the same authoritative transaction legitimately includes and justifies that entitlement under a supported bundle flow.

- **30-Day VIP** remains a one-time, non-renewing 30-day entitlement. A Diamond callback, restore, consume retry, refund, or migration must not start, restart, extend, shorten, or cancel it by accident.
- **Lifetime VIP** remains a one-time promotional entitlement available only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability. Diamond processing must not reopen a closed Lifetime VIP sales window or expire a valid Lifetime VIP.

## 23. Production regression matrix

Before a material Diamond/payment release, test at least:

1. iOS successful consumable Diamond purchase grants once.
2. iOS repeated StoreKit callback does not duplicate the grant.
3. iOS reinstall/account sign-in restores access to the authoritative remaining balance without replaying historical consumable grants.
4. Apple purchased Diamonds remain after an inactivity/season/date rollover test.
5. An explicitly time-limited free Diamond grant can expire without touching paid Diamonds.
6. Google `PENDING` purchase grants nothing.
7. Google transition to `PURCHASED` grants exactly once.
8. Google duplicate callback/RTDN does not duplicate the grant.
9. Google consume retry does not duplicate the grant.
10. Google automatic refund/revocation caused by failed acknowledgement processing reconciles only the affected transaction.
11. Google multi-quantity purchase grants the authoritative quantity exactly once when that feature is enabled.
12. Google Diamonds cannot be spent in another CK-Labs game/title.
13. Xsolla catalog view/order creation without successful payment grants nothing.
14. Xsolla successful order/payment event grants exactly once.
15. Xsolla duplicate webhook grants nothing extra.
16. Xsolla refund/chargeback affects only the associated transaction/value under the canonical rules.
17. A refunded Diamond purchase does not remove unrelated Lifetime VIP.
18. A Diamond refund does not restart or cancel unrelated 30-Day VIP.
19. A compromised-account dispute remains separate from an automatic fraud finding.
20. A wallet/provider migration preserves paid Diamond provenance and total valid balance.
21. A price/package change affects future offers without mutating a completed transaction.
22. An Apple/Google/Xsolla outage can recover without double-granting paid Diamonds.

## 24. P0 blockers

Do not release a material Diamond/payment change if any of the following is true:

- purchased Diamonds can expire merely because time passes;
- Apple consumable history can be replayed through `Restore Purchases` to create duplicate Diamonds;
- Google `PENDING` purchases can grant paid value;
- Google purchase tokens are not verified/idempotent;
- Google consumable processing can time out into refund/revocation without reconciliation;
- Google Diamonds can be spent in another game title contrary to the current Payments policy;
- Xsolla catalog/order creation is treated as payment confirmation;
- duplicate Xsolla webhooks can grant twice;
- paid and promotional Diamond provenance is lost where refund/expiry/correction behavior depends on it;
- a refund or chargeback can delete unrelated legitimate paid value;
- Diamond processing can mutate unrelated 30-Day VIP or Lifetime VIP;
- a provider migration can expire paid Diamonds or replay historical grants; or
- a platform rule is being used to waive mandatory German/EU consumer rights.

## 25. Current provider references reviewed September 4, 2026

- Apple App Review Guidelines, sections 3.1.1 and 3.2.1: https://developer.apple.com/app-store/review/guidelines/
- Google Play Payments policy: https://support.google.com/googleplay/android-developer/answer/9858738
- Google Play Billing integration guide: https://developer.android.com/google/play/billing/integrate
- Xsolla virtual currency documentation: https://developers.xsolla.com/items-catalog/items-type/virtual-currency/
- Xsolla Web Shop/catalog documentation: https://developers.xsolla.com/solutions/web-shop/catalog-and-items/manual-items/

Recheck these provider documents before a material payment architecture change because platform rules and APIs can change faster than the public TycoonX legal documents.

## Release decision

This gate passes only when paid Diamond value has one auditable, provider-aware lifecycle from authoritative payment through grant, spending, refund/reversal, migration, and support handling without accidental expiry, duplication, cross-title use, or damage to unrelated VIP/paid entitlements.
