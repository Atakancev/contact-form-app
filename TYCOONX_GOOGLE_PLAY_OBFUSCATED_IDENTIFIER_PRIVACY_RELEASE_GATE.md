# TycoonX Google Play Obfuscated Identifier & Privacy Release Gate

**Status:** P0 purchase attribution / privacy / chargeback-evidence gate

**Last reviewed:** September 8, 2026

**Applies to:** TycoonX Google Play purchase flows, server-side purchase attribution, Real-time Developer Notifications, and collaborative chargeback evidence involving `obfuscatedAccountId` or `obfuscatedProfileId`.

This is a focused implementation gate. It complements `TYCOONX_GOOGLE_PLAY_PENDING_PURCHASE_ATTRIBUTION_RELEASE_GATE.md` and `TYCOONX_GOOGLE_PLAY_CHARGEBACK_REVIEW_RELEASE_GATE.md`; it does not duplicate their pending-purchase, refund, or entitlement rules. It exists because Google's current identifier fields have specific privacy, length, attribution, and evidence semantics that must remain consistent across the full purchase lifecycle.

TycoonX is in full release. The paid products covered here are purchased Diamonds, one-time non-renewing 30-Day VIP, and Lifetime VIP when that limited-time promotional product is genuinely available during a selected sales window.

## 1. Current Google Play checkpoint

Google's current Play Billing documentation states that:

- `BillingFlowParams.Builder.setObfuscatedAccountId()` accepts an optional obfuscated string uniquely associated with the purchaser's user account in the app;
- `setObfuscatedProfileId()` accepts an optional obfuscated string uniquely associated with the purchaser's in-app profile;
- Google can use these identifiers to detect irregular activity and developers can use them to attribute purchases to the correct in-app account/profile;
- Google says **not to place personally identifiable information such as clear-text email addresses in these fields** and warns that doing so can cause purchases to be blocked;
- Google recommends encryption or a one-way hash to create the obfuscated value;
- each identifier is currently limited to **64 characters**;
- Google's current `PendingRefundReviewNotification` can contain `obfuscatedAccountId` and `obfuscatedProfileId` alongside the pending-refund token and order ID; and
- Google's current `orders.reviewrefund` schema allows each optional `consumptionUsageEvents[]` entry to contain `obfuscatedAccountId` and `obfuscatedProfileId` as purchase-usage evidence.

Official checkpoints reviewed for this gate:

- Google Play Billing integration guide, last updated September 1, 2026: https://developer.android.com/google/play/billing/integrate
- `BillingFlowParams.Builder`, last updated May 19, 2026: https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder
- Google Play RTDN reference, last updated September 1, 2026: https://developer.android.com/google/play/billing/rtdn-reference
- Google Play Developer API `orders.reviewrefund`, last updated July 6, 2026: https://developers.google.com/android-publisher/api-ref/rest/v3/orders/reviewrefund

Because Google can change these fields or semantics, CK-Labs must re-check current official documentation before materially changing the production mapping.

## 2. The identifier is pseudonymous attribution metadata, not entitlement authority

An obfuscated account/profile identifier helps correlate a Google purchase with a TycoonX account. It is not proof by itself that payment completed and is not a replacement for authoritative Google purchase verification.

TycoonX must never grant, restore, refund, revoke, or migrate paid value solely because an `obfuscatedAccountId` or `obfuscatedProfileId` matches.

The secure backend must still verify the relevant Google purchase token/order state, product, quantity, payment state, refund/void state, and existing entitlement-ledger history under the applicable Google payment gates.

A matching identifier can strengthen attribution. It cannot turn a forged, pending, refunded, duplicate, sandbox, or otherwise non-authoritative transaction into a valid paid entitlement.

## 3. Construction rules: never send clear-text PII

For production purchase flows, use a stable pseudonymous identifier derived from the internal TycoonX account/profile identity rather than sending the underlying identity directly.

Do not use as the Google obfuscated identifier:

- email address;
- phone number;
- display name or nickname;
- legal name;
- raw support-ticket address;
- an authentication secret, session token, password, refresh token, API key, or other credential;
- a value that embeds the user's country, language, age, VIP status, spending tier, moderation state, or fraud score; or
- another human-readable string that unnecessarily reveals account information.

A strong implementation can use a one-way keyed derivation or appropriately encrypted/obfuscated stable token, provided the resulting value is deterministic where attribution requires stability, does not expose the underlying user identity, and stays within Google's current **64-character** limit.

The secret/key used to derive a pseudonymous identifier must remain server-side or otherwise protected as security-sensitive material. Never place the derivation secret into the mobile app, logs, analytics events, customer-visible receipts, support screenshots, or public source.

## 4. Identifier namespace and versioning

Do not let a future implementation change make historical Google purchases impossible to attribute.

If CK-Labs changes the derivation algorithm, key, namespace, or account model:

- version the mapping;
- retain the minimum lawful historical mapping needed to reconcile/restorable paid entitlements and disputes;
- never rewrite historical purchase records to make them appear as if a new identifier had been attached at purchase time;
- do not silently bind an old purchase to a different TycoonX account just because the newly generated identifier differs; and
- test restores, refunds, chargebacks, account recovery, and support reconciliation across the old and new identifier versions.

Use separate, deliberate namespaces for production and non-production/test environments where needed to prevent sandbox identifiers and test evidence from being confused with production purchase attribution. This namespace separation does not permit a sandbox purchase to create production Diamonds or VIP.

## 5. Profile identifiers must not create a second ownership system

TycoonX normally has one account identity that owns its paid entitlements. If `obfuscatedProfileId` is used for a narrower in-app profile/character concept, it remains subordinate to the verified account/purchase relationship.

Do not let a profile identifier:

- transfer a purchase between two TycoonX accounts;
- let two profiles independently claim the same Google purchase token;
- replace the account-level purchase ledger;
- restart a one-time 30-Day VIP period when a player changes profile; or
- create a second Lifetime VIP entitlement from one purchase.

When the profile field is used, follow the current Billing Library requirements for providing the corresponding obfuscated account identifier in the same purchase flow. If the account/profile relationship is inconsistent, fail attribution safely rather than inventing ownership.

## 6. Missing identifiers are a reconciliation case, not fraud

Google's current billing guidance recognizes legitimate purchase paths where obfuscated identifiers can be absent, including purchases initiated outside the app. Existing TycoonX pending-purchase attribution rules already preserve a secure account-selection/reconciliation path for those transactions.

Therefore:

- absence of `obfuscatedAccountId` or `obfuscatedProfileId` is not automatic evidence of fraud, hacking, account compromise, promo abuse, chargeback abuse, or regional-price abuse;
- do not fabricate a missing identifier from nickname, email, IP address, country, language, device model, billing currency, or the first TycoonX account that asks support;
- do not permanently orphan an otherwise valid verified purchase merely because the optional identifiers are missing; and
- once a purchase token has been validly and finally bound to one TycoonX account, a later missing-identifier restore attempt cannot duplicate the entitlement on another account.

## 7. Identifier mismatch requires quarantine, not automatic reassignment

A mismatch between:

- the identifier stored with the original purchase;
- the identifier returned by the verified purchase;
- the identifier present in a `PendingRefundReviewNotification`;
- the current logged-in TycoonX account mapping; or
- the identifier CK-Labs would generate today

must enter a transaction-specific reconciliation path.

Do not automatically choose whichever account is currently logged in. Do not automatically move the purchase to the account represented by the newest identifier. Do not overwrite historical evidence to eliminate the mismatch.

A mismatch can result from account recovery, an old identifier algorithm, an implementation bug, out-of-app purchase behavior, stale local state, or genuine abuse. The mismatch itself is therefore a **risk signal, not proof** of fraud, account sharing, account compromise, chargeback abuse, regional-price abuse, or entitlement abuse.

Until ownership is resolved, keep unrelated legitimate Diamonds, 30-Day VIP periods, Lifetime VIP entitlements, and unrelated purchases untouched.

## 8. Chargeback review: preserve identifier provenance

Google's current collaborative chargeback-review schema allows `consumptionUsageEvents[]` to include optional obfuscated account/profile identifiers. If CK-Labs uses those fields as evidence:

- submit only the identifier actually associated with the relevant consumption event or reliably linked purchase/account context;
- do not populate every historical usage event with the player's current identifier merely because the current account is convenient;
- do not rewrite an old event after an identifier rotation and present the new value as contemporaneous evidence;
- if identifier provenance is uncertain, omit the optional identifier rather than guess;
- keep the pending-notification identifiers separately from the identifiers on each usage event, because they serve related but not identical evidentiary roles; and
- preserve contradictory identifier evidence internally rather than hiding it to strengthen a `DECLINE` recommendation.

The `ReviewRefund` request remains dispute evidence only. An identifier match or mismatch does not itself revoke Diamonds/VIP and does not itself prove that Google granted or denied the chargeback.

## 9. Consumption events must describe the event that actually happened

For chargeback evidence, `obfuscatedAccountId` and `obfuscatedProfileId` sit alongside fields such as `consumptionTime`, IP address, item description, and coarse location. Treat each event as a factual record, not as a container for a current user snapshot.

Example: a player bought 500 Diamonds under identifier version `v1`, consumed 200 of those Diamonds while `v1` was still the live mapping, then CK-Labs rotated to `v2`. A later chargeback review should not silently relabel the old 200-Diamond consumption event as `v2`. Preserve `v1` provenance or omit the optional identifier if reliable historical provenance was not stored.

This protects CK-Labs from presenting internally inconsistent evidence and protects the player from a false fraud inference.

## 10. GDPR and German/EU privacy boundary

An obfuscated or hashed identifier is not automatically anonymous data. If CK-Labs can reconnect it to a TycoonX account using additional information, it remains personal data/pseudonymous data for GDPR purposes.

Where the GDPR applies, keep the implementation aligned with:

- Article 5 principles including purpose limitation, data minimization, and accuracy;
- Article 25 data protection by design and by default, including appropriate pseudonymization and minimization; and
- Article 32 security of processing, including appropriate confidentiality, integrity, resilience, and testing safeguards.

The existing TycoonX Privacy Policy already explains processing of account identifiers, purchase/entitlement information, IP/security data, fraud and chargeback information, and sharing with Google/payment-platform partners for validation, disputes, fraud, and compliance. This implementation gate does not authorize collecting new unrelated telemetry merely because Google exposes an optional evidence field.

Only collect, retain, and disclose identifier/evidence data that is necessary for a documented purpose such as purchase attribution, restoration, fraud prevention, account security, support, a payment dispute, or a legal claim. Apply retention limits, access controls, and deletion/anonymization rules consistently with the Privacy Policy and applicable law.

## 11. Logging, analytics, and support surfaces

Obfuscated identifiers should not become broadly searchable quasi-usernames across CK-Labs systems.

- Keep full identifier values out of ordinary analytics dashboards where a shorter transaction reference or masked form is sufficient.
- Avoid placing them in client crash logs, public support threads, screenshots, community moderation notes, or push notifications.
- Restrict full-value access to systems/personnel that actually need purchase attribution, fraud, security, dispute, or support evidence.
- Never log the underlying clear-text account data and the obfuscated identifier together merely for convenience when a narrower audit reference is sufficient.
- If support needs to compare two identifiers, use a safe exact-match tool or masked representation rather than asking the player to post the identifier publicly.

## 12. Product-specific safeguards

### Purchased Diamonds

- The verified purchase token/product/quantity remains the entitlement authority.
- An identifier match cannot replay an already fulfilled Diamond grant.
- An identifier mismatch cannot justify deducting unrelated Diamond purchases.
- A chargeback usage event must not attribute promotional/gameplay-earned Diamonds to a paid Google transaction merely because the same account identifier appears.

### One-time 30-Day VIP

- Start one period of exactly 30 consecutive days only after the completed Google purchase is verified and safely attributed.
- Identifier rotation, profile change, reinstall, restore, chargeback review, or re-login cannot restart the 30-day clock.
- A mismatch does not permit CK-Labs to cancel an unrelated separately purchased VIP period.

### Lifetime VIP

- Lifetime VIP remains a limited-time promotional offering available only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous availability.
- Identifier rotation or account reconciliation cannot reopen a closed sales window or manufacture a new Lifetime VIP purchase.
- A valid existing Lifetime VIP must not disappear merely because CK-Labs changes its obfuscated-identifier implementation.
- A final provider-authoritative refund/void can affect the specific Lifetime VIP transaction where lawful, but a pending review or identifier mismatch alone cannot revoke it.

## 13. Account compromise and recovery

If a player reports account compromise, preserve the distinction between:

- who controlled the TycoonX account;
- who controlled the Google account/payment method;
- which obfuscated identifier was attached at purchase time;
- whether the paid product was delivered/used; and
- whether Google later refunds, voids, or upholds the transaction.

Do not use the existence of a matching pseudonymous identifier as proof that the player personally authorized a payment. A technically correct account mapping can coexist with stolen credentials or unauthorized payment-method use.

Account recovery may change login credentials or internal profile state without changing the historical owner of a verified purchase. Rebinding must follow the dedicated account-recovery/entitlement process rather than replacing historical identifier evidence.

## 14. Release tests

Before relying on this identifier model in production, keep dated test evidence covering at least:

1. a normal purchase carries a pseudonymous `obfuscatedAccountId` and no clear-text email/name;
2. identifiers longer than 64 characters are rejected by TycoonX before launch rather than truncated into collisions;
3. the derivation secret is absent from the client, logs, analytics, and support output;
4. the same production account maps deterministically under the same identifier version;
5. test/sandbox namespace cannot be mistaken for a production entitlement;
6. identifier-algorithm/key rotation preserves historical purchase reconciliation;
7. a legitimate out-of-app purchase with no identifier enters secure reconciliation and is not labelled fraud;
8. a purchase-token replay on another TycoonX account cannot duplicate Diamonds or VIP;
9. a current-account identifier mismatch quarantines attribution and does not auto-transfer the purchase;
10. a `PendingRefundReviewNotification` identifier mismatch is preserved as evidence and does not directly revoke value;
11. a historical chargeback usage event retains its contemporaneous identifier version after rotation;
12. optional `consumptionUsageEvents[]` identifier evidence is omitted when provenance cannot be established;
13. support can compare identifiers without exposing clear-text account data or public full identifiers;
14. Diamond fulfillment remains exactly once despite repeated/matching identifiers;
15. one-time 30-Day VIP remains one 30-consecutive-day period after reinstall, restore, or identifier rotation;
16. Lifetime VIP remains valid through an identifier migration and no closed sales window is reopened; and
17. unrelated purchases remain untouched during any identifier mismatch investigation.

## 15. Release blocker

Treat the Google Play purchase-attribution implementation as **not production-ready** if any of the following is true:

- clear-text PII is sent through the obfuscated identifier fields;
- an identifier can exceed Google's current 64-character limit or is silently truncated into a collision;
- the derivation secret exists in the app/client or ordinary logs;
- an identifier alone can grant or revoke paid value;
- missing identifiers are automatically classified as fraud;
- mismatches automatically reassign purchases or punish an account;
- a mapping/key rotation makes historical purchases or refunds unreconcilable;
- sandbox/test identifiers can produce production entitlements;
- chargeback usage events are backfilled with guessed/current identifiers rather than reliable event provenance;
- optional chargeback identifier evidence is fabricated instead of omitted;
- identifiers are broadly exposed in analytics/support surfaces without need;
- a 30-Day VIP period can restart or Lifetime VIP can be duplicated through identifier replay; or
- mandatory privacy, consumer, refund, conformity, security, or legal-claim rights are treated as waivable because the identifier is pseudonymous.

Until these controls are proven, CK-Labs should prefer a conservative purchase-token/provider-state reconciliation path and manual account verification over automatic entitlement reassignment or aggressive fraud conclusions.