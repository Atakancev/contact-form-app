# TycoonX Google Play BillingConfig Country & Privacy Release Gate

Last reviewed: September 8, 2026
Owner: CK-Labs
Scope: Google Play Billing Library `getBillingConfigAsync()`, Play Country handling, regional pricing, purchase eligibility, fraud/support decisions, analytics, logs, and TycoonX entitlement processing.

## Purpose

Google Play Billing Library can expose the country the user currently uses for Google Play through `getBillingConfigAsync()`. That value is useful only as current Play billing context. It is not a durable TycoonX profile attribute, not proof of nationality or residence, and not authoritative payment or entitlement evidence.

Google's current billing guidance is unusually strict here: data returned by `getBillingConfigAsync()` is designed for one-time use, can change at any time, must not be stored, and may not be used to create or enhance a user profile or to target or track customers for advertising or marketing purposes.

This gate prevents a regional-pricing or anti-abuse implementation from turning an ephemeral Play billing value into a persistent location history, marketing signal, fraud label, or entitlement authority.

This is an implementation and platform-compliance gate. It supplements the TycoonX Privacy Policy, Terms of Service, Purchases & Refunds Policy, EU regional-pricing controls, Google Play purchase-verification controls, and mandatory law. It does not replace Google's current rules or non-waivable consumer/data-protection rights.

## P0 rules

### 1. Treat `BillingConfig` data as ephemeral

If TycoonX calls `BillingClient.getBillingConfigAsync()`:

- use the returned data only for the immediate permitted billing-context purpose for which it was queried;
- do **not** persist the returned `countryCode` or any other `BillingConfig` field in the TycoonX database;
- do **not** place it into account metadata, a user profile, fraud history, regional-price history, support notes, analytics properties, ad/marketing audiences, crash breadcrumbs, long-lived logs, data-warehouse exports, or telemetry intended for later reuse;
- do **not** copy it into another persistent field under a different name to evade the storage restriction;
- clear or let the value fall out of scope after the current use; and
- query again when a later current-use decision genuinely requires Play billing configuration, because Google says the data can change at any time.

A screenshot, debug log, analytics event, or support export containing the value is still storage. "We only stored it in logs" is not an exception.

### 2. Do not use Play Country to build or enrich a user profile

The Play Country returned by `getBillingConfigAsync()` must not be used to create or enhance a TycoonX profile of the player's location, residence, nationality, spending power, migration history, travel pattern, or likely willingness to pay.

In particular, do not:

- append the current Play Country to the player's account for later segmentation;
- combine repeated queries into a country-history timeline;
- feed the value into advertising, retargeting, cross-promotion, marketing attribution, churn marketing, or lookalike-audience systems;
- use it as a feature in a personalized-pricing or willingness-to-pay model;
- infer nationality, citizenship, tax residence, or permanent residence from it; or
- treat a change in Play Country as proof that the player manipulated regional pricing.

If TycoonX ever uses automated individualized pricing, that flow must follow the separate personalized-pricing release gates and cannot use `getBillingConfigAsync()` data in a way Google prohibits.

### 3. Play Country is not transaction or entitlement authority

`getBillingConfigAsync()` does not prove that a purchase occurred and must never itself grant, restore, revoke, extend, or shorten paid value.

For Google Play purchases:

- current user-eligible `ProductDetails` / offer data controls what Play offers in the billing flow;
- the final Google purchase flow controls the price the user confirms;
- authoritative purchase-token verification controls fulfillment;
- refund, voided-purchase, and other provider records control later payment-state reconciliation; and
- the TycoonX entitlement ledger remains the exactly-once delivery record.

A returned country code cannot replace any of those records.

### 4. Do not substitute Play Country for legal residence, tax location, or identity

Google describes the value as the country the user uses for Google Play. TycoonX must keep that concept separate from:

- nationality or citizenship;
- habitual or permanent residence;
- tax residence or VAT evidence;
- current physical location or IP geolocation;
- payment-instrument issuing country;
- billing address;
- Apple storefront country;
- Xsolla country-resolution inputs;
- `obfuscatedAccountId` or `obfuscatedProfileId`; and
- the country shown in a historical transaction record.

A current Play Country can legitimately differ from any of those values because of travel, relocation, account changes, payment configuration, provider rules, or stale/transitioning state.

### 5. A country mismatch is a risk signal at most, not proof of abuse

Do not automatically classify a user as committing fraud, hacking, exploiting, account compromise, chargeback abuse, entitlement abuse, promotion abuse, or regional-price abuse because:

- Play Country differs from IP location;
- Play Country differs from a TycoonX account country or language;
- Play Country differs from an older purchase's country or currency;
- Play Country changes between two sessions; or
- `getBillingConfigAsync()` fails, returns no usable value, or returns a value different from another provider signal.

Any enforcement must rely on the actual offer eligibility rule and reliable transaction/account evidence. Legitimate travel or relocation must remain plausible explanations until stronger evidence shows otherwise.

### 6. Do not retain the value merely to prove a later regional-pricing case

Because Google says not to store `getBillingConfigAsync()` data, TycoonX must not retain it "just in case" it may later help a dispute.

For a completed Google Play transaction, preserve the provider-authoritative information TycoonX is permitted and required to retain for purchase, accounting, entitlement, refund, and dispute purposes, such as the product, purchase token, transaction/order evidence where available, price/currency evidence where available, offer identity, purchase state, refund/void state, and entitlement mapping.

Do not attempt to reconstruct a historical `BillingConfig` value later and present that reconstructed value as though it was transaction-time evidence.

### 7. Regional pricing remains lawful only through the supported current purchase flow

TycoonX may maintain genuine future regional prices where lawful, but the app must not use a stored Play Country to force a later purchase into an old regional price.

For each Google Play purchase attempt:

1. connect to Play Billing normally;
2. query current eligible product/offer information close to the purchase flow;
3. if the app genuinely needs current Play Country for a permitted immediate billing-context decision, query it at that time and keep it ephemeral;
4. display the current Google-provided localized price/offer information;
5. launch the matching current billing flow; and
6. verify the completed purchase server-side before fulfillment.

If the current Play offer/price differs from a previous session, treat that first as provider/current-catalog state, not as evidence that the player changed regions dishonestly.

### 8. Lifetime VIP sales windows remain independent

A Play Country result cannot open or extend Lifetime VIP availability.

Lifetime VIP remains a limited-time promotional one-time entitlement available for new purchase only during selected genuine CK-Labs sales windows. It may be withdrawn from sale, may never return, and creates no expectation of continuous availability.

Therefore:

- a stored or stale country value must never reopen a closed Lifetime VIP sale;
- a country change must not bypass the current CK-Labs sales-window check;
- a Google offer returned from stale client state must not override the genuine sales-window state;
- a valid completed Lifetime VIP purchase remains valid merely because the user's later Play Country changes; and
- later regional price changes do not retroactively reprice an earlier completed Lifetime VIP purchase, except where mandatory law requires another remedy.

### 9. Diamonds and 30-Day VIP remain isolated

The Play Country value must never become part of Diamond or VIP entitlement identity.

- Purchased Diamonds remain consumable virtual currency and do not expire merely because time passes or Play Country changes.
- One-time 30-Day VIP remains a non-renewing entitlement lasting exactly 30 consecutive days from its valid activation.
- Re-querying `BillingConfig`, changing country, reinstalling the app, or returning from travel must not duplicate Diamonds or restart a 30-Day VIP period.
- A regional-pricing investigation concerning one transaction must not confiscate unrelated legitimate Diamonds, 30-Day VIP, or Lifetime VIP.

### 10. Privacy and GDPR boundary

Even apart from Google's platform restriction, any location/storefront-related information that CK-Labs processes in connection with an identifiable account must be handled under the TycoonX Privacy Policy and applicable data-protection law.

The operational design must preserve:

- GDPR Article 5 principles including purpose limitation, data minimization, accuracy, and storage limitation;
- data protection by design/default under Article 25;
- appropriate security under Article 32; and
- the rule that a platform value must not be repurposed for advertising, profiling, or another incompatible purpose merely because the SDK exposes it.

The safest production design for `getBillingConfigAsync()` is therefore no persistent CK-Labs storage at all, consistent with Google's explicit instruction.

### 11. Error handling must fail safely

If `getBillingConfigAsync()` fails, times out, returns a non-OK BillingResult, returns null, or returns an unexpected country code:

- do not fabricate a country;
- do not silently fall back to a stored historical `BillingConfig` country;
- do not block a valid paid entitlement restoration merely because current billing country is unavailable;
- do not treat the error as player misconduct;
- continue only with the purchase/availability behavior that is valid without that value; and
- if the current flow truly requires the value, stop that optional flow cleanly and let the player retry after Play Billing is available.

### 12. Logging, analytics, and support redaction

Before release, search the Android client, backend request payloads, analytics events, logging wrappers, crash reporting, and support tooling for accidental persistence of `BillingConfig.countryCode` or an equivalent copied field.

Minimum rules:

- no account-table or profile-table field for this Play value;
- no analytics user property containing it;
- no advertising/marketing event containing it;
- no long-lived server log containing it;
- no support dashboard field that stores it;
- no automated fraud score that persists it; and
- no debug-only persistence left enabled in production.

If temporary developer diagnostics are necessary in a non-production environment, use synthetic/test accounts where possible and do not turn the provider value into a production user history.

## Required regression matrix

Before shipping a code path that uses `getBillingConfigAsync()`, verify at minimum:

1. **Normal current Play Country lookup**
   - value is used only for the immediate permitted purpose;
   - value is not written to persistent storage or analytics.

2. **App restart after lookup**
   - no historical Play Country is loaded from TycoonX storage;
   - a later needed value is queried again.

3. **Play Country changes between sessions**
   - future Play offers may change normally;
   - prior completed purchases and valid entitlements remain intact;
   - no fraud flag is created solely from the change.

4. **Play Country differs from IP**
   - no automatic regional-price-abuse conclusion;
   - no forced rewriting of the Google-provided purchase offer.

5. **Play Country differs from account language/country**
   - no automatic identity or residence conclusion;
   - no profile enrichment occurs.

6. **`getBillingConfigAsync()` failure/null response**
   - no fabricated or cached fallback country;
   - no unrelated entitlement loss.

7. **Google Play price changed since previous session**
   - fresh `ProductDetails` / eligible offers are used;
   - old Play Country or stale price is not treated as authority.

8. **Lifetime VIP campaign closed**
   - country lookup cannot reopen the sale;
   - valid earlier Lifetime VIP stays active.

9. **Diamond purchase and country change**
   - purchase is fulfilled exactly once from verified transaction evidence;
   - later country change does not deduct or duplicate Diamonds.

10. **30-Day VIP and country change**
    - original 30-consecutive-day clock is unchanged;
    - no restart or extension occurs from billing-config refresh.

11. **Regional-pricing investigation**
    - evidence uses authoritative transaction/offer records and actual eligibility rules;
    - no stored `BillingConfig` history is relied on;
    - unrelated purchases remain untouched.

12. **Telemetry inspection**
    - analytics, crash reports, logs, and support tools contain no persisted Play `BillingConfig` country value.

## Current platform and legal checkpoint

Reviewed against official material available on September 8, 2026:

- Google Play Billing integration guidance, last updated September 1, 2026, states that `getBillingConfigAsync()` provides the country the user uses for Google Play.
- The same Google guidance states not to store data returned by `getBillingConfigAsync()`, says the data is designed for one-time use and can change at any time, and prohibits using it to create or enhance a user profile or to target or track customers for advertising or marketing.
- Google currently documents `BillingConfig.countryCode` as an ISO-3166-1 alpha-2 country code.
- Google separately recommends current `ProductDetails` / eligible-offer queries for the purchase flow and warns against treating stale product details as price authority.
- The TycoonX EU regional-pricing gate separately covers EU geo-blocking, provider storefront authority, regional-price abuse, price differences, and mandatory consumer protections.
- GDPR Articles 5, 25, and 32 continue to require appropriate purpose limitation/minimization, data protection by design/default, and security for personal-data processing within their scope.

Primary references:

- https://developer.android.com/google/play/billing/integrate
- https://developer.android.com/reference/com/android/billingclient/api/BillingConfig
- https://eur-lex.europa.eu/eli/reg/2016/679/oj

## Founder-protective interpretation

This gate does not force one worldwide TycoonX price and does not prevent CK-Labs from investigating genuine regional-price fraud. It prevents a weak and provider-restricted signal from becoming a permanent location profile or automatic fraud verdict.

The commercially safer rule is simple: use Google's current billing context only when the current billing flow needs it, do not store it, use fresh Play product/offer state for future purchases, use authoritative transaction records for completed purchases, and keep corrections tied to proven invalid transactions. That protects CK-Labs from stale-country bugs, privacy leakage, false regional-abuse sanctions, and unsupported entitlement reversals while preserving legitimate regional-pricing flexibility and mandatory consumer rights.
