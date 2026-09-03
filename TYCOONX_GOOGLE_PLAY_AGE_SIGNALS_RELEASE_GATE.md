# TycoonX Google Play Age Signals & Parental-State Release Gate

Last reviewed: 2026-09-04  
Operator/business name used in player-facing documents: **CK-Labs**

This is an operational release gate for TycoonX use of Google Play Age Signals. It complements, and does not replace, the TycoonX Privacy Policy, Terms of Service, Purchases & Refunds Policy, German youth-protection gate, German minor-purchase gate, DSA minors gate, Google Play payment gates, or case-specific legal analysis.

TycoonX went to full release on **September 1, 2026**. The live service, users, purchases, Diamonds, one-time 30-Day VIP, Lifetime VIP, rewards, and legal documents must not be described as beta.

## 1. P0 rule: age-signal data is a compliance/safety input, not a commercial targeting asset

If CK-Labs integrates Google Play Age Signals, information returned by the API must be purpose-limited to age-appropriate experiences and applicable legal/regulatory compliance.

Under Google Play's current Age Signals API terms and User Data policy, do **not** use Age Signals data for:

- advertising or ad targeting;
- marketing;
- personalized sales pressure or promotional targeting;
- user profiling;
- analytics or business intelligence;
- deciding which player should receive a higher or lower Diamond, VIP, Lifetime VIP, coupon, regional-price, or promotional price merely because of the age signal;
- selling, licensing, or commercially exploiting the signal; or
- sharing or transferring the signal to a third party except where strictly required by applicable law.

A player's age range, age-range source, significant-change state, or install identifier must not be copied into ordinary marketing, CRM, ad-tech, general analytics, player-value scoring, monetization segmentation, or unrelated fraud-scoring pipelines.

Google Play currently classifies Age Signals API data as personal and sensitive user age and parental-consent data. Treat it accordingly even when a particular field looks like a coarse range rather than an exact date of birth.

**Founder-protective result:** CK-Labs may use the minimum signal necessary to comply with a real age-related obligation or deliver an age-appropriate experience, but must not build a valuable commercial profile around data Google contractually restricts.

## 2. Current Google implementation baseline: use the supported 0.0.4 flow

As of this review, Google's active documentation uses:

```gradle
implementation 'com.google.android.play:age-signals:0.0.4'
```

Version 0.0.4 introduced a two-function architecture:

1. call `requestAgeSignalsAccess(...)` to obtain the sharing/access state; and
2. call `checkAgeSignals(...)` only when the result permits retrieval of age signals.

Do not build a new TycoonX integration around the older 0.0.3 `userStatus` model. Google documents `userStatus` as deprecated and unsupported in version 0.0.4 and higher.

Release checks:

- [ ] Android production build uses the currently supported Age Signals library version, not a copied obsolete sample.
- [ ] `requestAgeSignalsAccess(...)` is integrated before `checkAgeSignals(...)`.
- [ ] the app does not call `checkAgeSignals(...)` as if consent/sharing were always present;
- [ ] the app has explicit handling for API/service errors and unsupported/outdated-client states; and
- [ ] CK-Labs re-checks Google's active documentation before each material Age Signals release because the API and Play Console features are still evolving.

Do not describe Google's API versioning as a TycoonX release state. TycoonX itself is fully released.

## 3. P0: distinguish `SHARED`, `NOT_SHARED`, and `VERIFICATION_REQUIRED`

The current `requestAgeSignalsAccess(...)` flow can return:

- `SHARED`;
- `NOT_SHARED`; or
- `VERIFICATION_REQUIRED`.

The states are not interchangeable.

### `SHARED`

If the state is `SHARED`, TycoonX may call `checkAgeSignals(...)` and use only the returned fields that are necessary for the lawful age-appropriate purpose.

### `NOT_SHARED`

`NOT_SHARED` is **not proof that a player is an adult or a child**. It can reflect a user's or parent's choice not to share, an in-app prompt decision, or another non-sharing state described by Google.

Do not:

- infer an exact age from non-sharing;
- silently classify the player as 18+;
- silently classify the player as a minor;
- punish the player for exercising an available non-sharing choice;
- use non-sharing as evidence of fraud, chargeback abuse, account compromise, or entitlement abuse; or
- deny unrelated already-purchased value merely because the signal is unavailable.

Where a feature genuinely cannot lawfully be offered without age assurance, restrict only the affected feature to the extent necessary and provide a lawful resolution path. Do not convert a feature-specific legal restriction into a global account punishment.

### `VERIFICATION_REQUIRED`

Google documents `VERIFICATION_REQUIRED` for an unknown-age user in an applicable jurisdiction or region where verification and age-signal sharing are mandatory. The app should direct the user to the appropriate Google Play resolution flow rather than inventing an age locally or bypassing the required verification.

Do not use `VERIFICATION_REQUIRED` as a sales funnel or pressure technique.

## 4. P0: do not hard-code one universal age model

Google currently documents default ranges of:

- 0-12;
- 13-15;
- 16-17; and
- 18+.

Google also supports custom age ranges configured in Play Console. Current documentation allows up to three minimum ages, requires minimum ages to be at least two years apart, and states that the configured minimum ages can be changed once annually.

Therefore:

- [ ] use `ageLower` and `ageUpper` as returned rather than assuming the four default bands forever;
- [ ] treat the highest band as open-ended when `ageUpper == null` and `ageLower` is present;
- [ ] treat both bounds being unavailable consistently with the returned access/state fields rather than inventing an age;
- [ ] keep server rules range-based rather than storing a guessed exact birth date; and
- [ ] document any Play Console custom-range configuration as release evidence.

A future custom range such as 0-12 / 13-16 / 17+ must not break TycoonX because the client assumed `13-15` and `16-17` were immutable protocol constants.

## 5. `ageRangeSource` is provenance, not a marketing or culpability score

Current Google documentation distinguishes age-range source tiers, including:

- `TIER_A`: self-declared age;
- `TIER_B`: age managed by a parent or guardian;
- `TIER_C`: age assessed using one of Google's documented assessment/verification methods; and
- `TIER_D`: age checked using Google's stronger documented verification combination/digital-identity method.

Use this provenance only where needed for the age-related legal/safety decision.

Do not treat a lower or higher tier as:

- a wealth or purchasing-power signal;
- a fraud score;
- an account-trust score for unrelated gameplay;
- permission to show different paid offers;
- permission to collect the underlying identity material used by Google; or
- proof that CK-Labs itself verified the person's identity.

TycoonX receives the signal fields, not a general license to obtain or retain the source identity document, selfie, tax identifier, credit-card verification evidence, or other underlying Google verification material.

## 6. Age Signals does not prove authorization of a TycoonX purchase

An age signal and a payment authorization answer different questions.

In particular:

- `TIER_B` or another supervised-user signal does **not** prove that a parent authorized a specific Diamond or VIP purchase;
- a parent's approval of a significant app change does **not** authorize a later purchase;
- an App Store or Google Play content rating does **not** prove contractual capacity for an individual transaction;
- a Google Play purchase-approval flow does not rewrite German/EU rules on capacity, withdrawal, conformity, refunds, or mandatory consumer remedies; and
- an age signal must not be used to bypass the separate `TYCOONX_GERMAN_MINOR_PURCHASE_RELEASE_GATE.md` and `TYCOONX_MINOR_PURCHASE_PARENTAL_AUTHORIZATION_RELEASE_GATE.md` analysis.

For purchase disputes involving a minor, preserve the payment-provider record, the transaction-specific approval evidence if any, the TycoonX entitlement record, and the legal-capacity/authorization analysis separately.

## 7. Paid-product isolation: Diamonds, 30-Day VIP and Lifetime VIP

Age-related restrictions must not corrupt entitlement semantics.

### Diamonds

Legitimately purchased Diamonds remain subject to the purchase contract, provider transaction state, entitlement ledger, applicable refund/reversal rules, exploit correction, and mandatory law. An Age Signals state alone cannot create a negative Diamond balance or delete unrelated purchased Diamonds.

Where a future law or platform rule prevents a minor from buying a particular paid item, block or route the **prospective transaction** as required. Do not silently rewrite unrelated completed purchases merely because the user's age state later changes, except where a valid legal/payment basis specifically requires a correction.

### One-time 30-Day VIP

30-Day VIP remains a **one-time, non-renewing 30-day digital entitlement**. An age signal, parent-sharing change, API outage, device reset, or Play account change must not restart its 30-day period or turn it into a subscription.

### Lifetime VIP

Lifetime VIP remains a **limited-time promotional one-time entitlement available only during selected genuine sales windows**. It:

- may be withdrawn from future sale;
- may never return;
- creates no expectation of continuous future availability; and
- may be priced differently in different genuine future sales windows.

Age Signals may be used to prevent or route a future sale where a real law/platform rule requires that result. It must not be used to target minors with scarcity pressure, secretly personalize Lifetime VIP pricing, or add an expiry to an already valid Lifetime VIP entitlement.

A parental or age-related access restriction also does not convert Lifetime VIP into a cash-redeemable asset or create a new refund right beyond the applicable purchase contract and mandatory law.

## 8. Do not send Google Age Signals to Apple, Xsolla, ad-tech, or ordinary analytics

The Android Age Signals response is not a universal CK-Labs customer attribute.

Unless strictly required by applicable law:

- do not send it to Xsolla for ordinary payment processing, fraud scoring, regional pricing, or offer selection;
- do not copy it into Apple-side account metadata;
- do not send it to advertising or attribution SDKs;
- do not place it in general analytics/event payloads;
- do not include it in customer-support screenshots/log exports unless necessary for a specific age-compliance case and appropriately minimized; and
- do not expose it in public URLs, profile APIs, leaderboards, chat metadata, or player-facing diagnostics.

Apple App Store, Google Play, and the CK-Labs TycoonX webshop using Xsolla remain separate payment/distribution channels. A Google age signal does not change who confirms a transaction, processes a provider refund/chargeback, handles applicable taxes, or supplies authoritative payment evidence for another channel.

## 9. Data minimization, retention, GDPR and Play Data Safety

Google documents that the Age Signals client library itself does not collect data for the app, but Google also states that the developer remains responsible for its own Google Play Data Safety answers.

These are different questions.

If TycoonX stores or transmits any returned field:

- [ ] identify the precise purpose and legal basis;
- [ ] store only the minimum field/range needed;
- [ ] do not derive or store an exact date of birth that the API did not provide;
- [ ] set a retention period tied to the compliance purpose rather than indefinite account history;
- [ ] restrict employee/service access;
- [ ] document deletion/refresh behavior when the signal changes or is no longer needed;
- [ ] ensure the Play Data Safety form describes CK-Labs's actual handling, not merely the client library's behavior;
- [ ] re-check the canonical Privacy Policy if implementation creates a materially new category, purpose, recipient, retention rule, automated-decision use, or child-data flow; and
- [ ] where GDPR/ePrivacy/German law applies, preserve all independent transparency, legal-basis, data-minimization, security, data-subject-rights, and child-protection requirements.

Do not request or retain Age Signals globally merely because the API is available if TycoonX has no valid age-appropriate/compliance reason to use the signal in that context.

## 10. `installId` is a narrow revocation identifier

Google currently documents `installId` as an identifier assigned to supervised-user installs for revoked-app-approval handling.

If CK-Labs stores it:

- [ ] bind it only to the minimum internal record needed to act on a lawful revocation workflow;
- [ ] do not use it as a cross-device advertising ID, fingerprint, permanent account ID, ban-evasion identifier, monetization key, or analytics identity;
- [ ] expect it not to persist across device resets;
- [ ] do not infer account takeover merely because it changes after a reset; and
- [ ] handle repeat revocation events idempotently because the same `installId` may appear again after re-approval and a later revocation.

Google's current documentation says revoked identifiers shown in the Play Console report are listed for 90 days before deletion.

### Current feature-availability warning

As of this review, Google's active documentation says the **revoked app approvals Play Console functionality is not yet live**.

Do not:

- claim in player-facing copy that CK-Labs receives a live revocation feed when it does not;
- make production access depend on a Console feed that is not yet available; or
- build a fake replacement by over-collecting age/identity data.

When Google activates the feature, re-check the then-current documentation before enabling the production workflow.

## 11. Significant app changes and parental approval

Some applicable jurisdictions can require parental approval for certain significant app changes. Google's current Age Signals design separates these approvals from ordinary app releases.

Current documented concepts include:

- `significantChangeStatus`: `APPROVED`, `PENDING`, `DECLINED`, or `null` as applicable;
- `significantChangeApprovalDate`: the effective date of the most recently approved significant change;
- significant changes are cumulative; and
- the approval state is relevant to supervised users in applicable jurisdictions, not a general global contract-consent field.

### Current Play Console availability warning

As of this review, Google's active documentation says the **significant-change Play Console functionality is not yet live**.

Do not make a current TycoonX production feature depend on a workflow that Google has not yet activated.

When Google activates it, current documentation indicates that CK-Labs should expect to provide an upcoming effective date and a short description shown to parents. The currently documented configuration rules include:

- English (`en-US`) description required, with optional additional supported-language descriptions;
- up to three submitted significant changes;
- submission up to 90 days in advance; and
- significant-change effective dates more than two days apart.

Before relying on those limits in production, re-check Google's live documentation because this tooling is still evolving.

### P0 decision rule once live

If a supervised user's status for a legally relevant significant change is `PENDING` or `DECLINED`, restrict only the content/functionality related to that unapproved significant change to the extent the applicable law requires.

Do not automatically:

- terminate the entire TycoonX account;
- erase account history;
- delete unrelated purchased Diamonds;
- restart/shorten 30-Day VIP;
- expire Lifetime VIP;
- create a refund or chargeback;
- mark the parent or player as fraudulent; or
- treat the status as a ban from every pre-existing lawful feature.

Google's current help materials state that Google Play itself does not revoke app access merely because a parent denies a significant change. CK-Labs remains responsible for determining the legally required product behavior in the applicable jurisdiction.

## 12. Current U.S.-state rollout is a legal-classification trigger, not a universal global mandate

Google's current Play Console Help states that some U.S. states have adopted app-store age-verification laws and that developers may have new obligations in applicable states. Google also states that Google Play itself does not universally mandate developers to use the Age Signals features; developers remain responsible for determining whether and how the law applies to their app.

The same current Google help page states that the Texas App Store Accountability Act is now in effect after a federal appeals court stayed the earlier preliminary injunction.

Therefore:

- [ ] maintain a dated jurisdiction matrix before relying on a state-law requirement;
- [ ] re-check injunctions, effective dates, amendments, and Google implementation status rather than copying an old launch timeline;
- [ ] do not globally lock every player into a U.S.-state compliance flow merely because one state requires it; and
- [ ] do not claim that Google has made Age Signals mandatory worldwide when its current documentation says otherwise.

If CK-Labs decides not to distribute a feature in a jurisdiction rather than implement a legal requirement, the geo-restriction itself must be accurate, proportionate, technically enforced, and reflected consistently in player-facing availability information.

## 13. Purchase SKU age ratings are separate from app content ratings and transaction consent

Google's current U.S.-state guidance says Texas law may require age ratings for in-app products and that Google is introducing SKU age-rating support for applicable Play Billing purchase approval flows.

If TycoonX uses this feature:

- [ ] assign product/SKU age ratings from the actual product/content and applicable rules;
- [ ] do not assume the app's IARC rating automatically answers the SKU-specific question;
- [ ] do not use a SKU age rating as proof that a particular minor has contractual capacity;
- [ ] do not use it as proof that a parent approved the transaction unless the transaction record actually contains the applicable approval; and
- [ ] preserve Apple/Xsolla product catalogs separately because Google-specific SKU metadata is not automatically authoritative for other payment channels.

## 14. Security: do not blindly trust a client-side age decision

Google currently recommends considering Play Integrity when Age Signals are used so the developer can assess whether the request is coming from an untampered app on a certified device.

This is a recommendation, not a statement that Play Integrity is legally mandatory for every TycoonX age check.

For a feature with a meaningful legal age boundary:

- [ ] do not rely only on a mutable local boolean such as `isMinor = false`;
- [ ] protect any server-side age-gated authorization from simple client tampering/replay;
- [ ] preserve the minimum audit facts needed to explain why access was allowed or restricted;
- [ ] fail safely for the affected regulated feature when a mandatory signal cannot be obtained, while avoiding unnecessary global account lockout; and
- [ ] do not log raw sensitive responses more broadly than necessary for debugging/compliance.

An API error, old Play Store version, offline state, device reset, or temporary Google outage is not proof of wrongdoing by the player.

## 15. Account compromise and family-account changes

Age/parental state can legitimately change. A parent can change sharing settings; supervision can change; a device can reset; an account can move between devices; and the legitimate TycoonX account itself can be compromised.

Keep these state machines separate:

1. Google age/sharing state;
2. TycoonX authentication/account-control state;
3. purchase/payment-provider state;
4. TycoonX entitlement state; and
5. moderation/fraud/exploit state.

A changed Age Signals response does not automatically prove account compromise. A reported account compromise does not automatically invalidate every historical parental approval or paid transaction. A chargeback does not automatically prove the age signal was false.

Security containment may be immediate where necessary, but final fraud/abuse findings should use the relevant authoritative evidence rather than an age signal as a shortcut.

## 16. Pricing, promotions, regional pricing, tax and FX

Age Signals must not become a covert pricing engine.

CK-Labs may continue to change future TycoonX prices, Diamond bundle prices/content, VIP prices, supported currencies, genuine promotions and genuine regional pricing for future purchases, subject to the canonical Terms/Purchases rules and applicable law.

But the Age Signals API must not be used to:

- charge a child more because they appear more susceptible to a purchase prompt;
- selectively show a fake Lifetime VIP scarcity message to supervised users;
- choose a more expensive regional catalog based on age;
- infer a player's country/tax residency from age data;
- alter tax/VAT treatment; or
- retroactively reprice a completed one-time purchase.

The final total price shown before confirmation remains the transaction price for the completed purchase, subject to mandatory law. A later price decrease does not automatically create a refund, credit, or price-match right, and a later increase does not add a charge to a completed one-time purchase, except where mandatory law requires otherwise.

## 17. Old clients, provider outages and platform changes

Google can change the Age Signals SDK, fields, policies, regional rollout, parental-control tooling, or Play Console workflow. CK-Labs must not promise that a specific Google API or provider mechanism will exist forever.

If Google deprecates, replaces, restricts, or withdraws an Age Signals mechanism:

- update TycoonX to a supported lawful method where needed;
- disable only the affected regulated feature temporarily if that is the safest compliant option;
- do not treat provider downtime as player misconduct;
- preserve unrelated legitimate paid entitlements;
- re-check whether the Privacy Policy/Data Safety disclosures materially change; and
- re-open any player-facing localized text only if canonical legal meaning materially changes.

An unsupported old Android client must not be allowed to bypass a legally required age restriction merely because it predates the Age Signals integration. At the same time, an old client should not lose unrelated paid value solely because a new compliance API was introduced.

## 18. Player-facing wording rules

If TycoonX tells a player why a feature is unavailable, prefer accurate, narrow explanations such as:

> This feature is unavailable until the required age or parental approval step is completed through Google Play.

Do not say:

- "Google says you are a child" when the actual state is merely `NOT_SHARED` or `VERIFICATION_REQUIRED`;
- "Your parent cancelled your TycoonX account" when only a specific significant change was declined;
- "Your VIP was refunded" unless an actual authoritative refund occurred;
- "Age verification failed, so your account is fraudulent"; or
- anything implying that TycoonX itself is in beta.

Displayed product/brand prose must always say **TycoonX**. Existing technical filenames/routes containing `tyconx` may remain where required for compatibility.

## 19. Evidence package before production use

Before enabling Age Signals-dependent behavior, preserve a dated evidence package containing at least:

- Android app version/build and Age Signals SDK version;
- Play Console Age Signals configuration and custom ranges, if any;
- jurisdiction/legal trigger matrix;
- exact mapping from `SHARED`, `NOT_SHARED`, and `VERIFICATION_REQUIRED` to product behavior;
- mapping from `ageLower`, `ageUpper`, and `ageRangeSource` to the minimum necessary age-gated decisions;
- evidence that Age Signals are excluded from marketing, ad-tech, analytics, business intelligence, monetization targeting, and ordinary Xsolla data flows;
- Data Safety assessment and Privacy Policy delta assessment;
- significant-change feature availability and configuration evidence, once Google activates it;
- revoked-app-approval feature availability and retention evidence, once Google activates it;
- test evidence for device reset, account switching, supervision/sharing changes, API errors, Play Store outage, unsupported client, and process death;
- test evidence proving an Age Signals event cannot independently grant, remove, restart, or expire Diamonds/30-Day VIP/Lifetime VIP;
- purchase test evidence proving parental age/supervision status is not substituted for transaction-specific authorization; and
- a source snapshot/date for the Google documentation relied upon.

## 20. Release blockers

Do **not** enable Age Signals-dependent production behavior if any of the following is true:

- Age Signals data is sent to marketing, advertising, profiling, analytics, BI, or unrelated third parties;
- TycoonX assumes `NOT_SHARED` means adult or minor;
- TycoonX hard-codes obsolete `userStatus` logic from SDK 0.0.3 into a new integration;
- the app calls `checkAgeSignals(...)` without respecting the current access/sharing flow;
- a significant-change or revoked-approval workflow is treated as live before Google actually activates the corresponding Play Console functionality;
- a parent's app/significant-change approval is treated as authorization for a specific purchase;
- age state can independently delete legitimate paid Diamonds, restart/shorten 30-Day VIP, or expire Lifetime VIP;
- `installId` is repurposed as a tracking/fingerprinting/monetization identifier;
- Age Signals are used to select prices, coupons, regional pricing, or Lifetime VIP scarcity pressure;
- an unsupported client can bypass a legally required age restriction;
- the Play Data Safety assessment assumes the client library's own no-collection statement automatically answers CK-Labs's backend/app-data handling; or
- a material Privacy Policy/Terms/Purchases meaning change was made without reopening the complete localization sync.

## 21. Localization and canonical legal-text control

This gate is operational and does **not** by itself change the canonical player contract or Privacy Policy.

The localization tracker currently records all **25 localized hubs** and all **100 localized full documents** as complete. Do not reopen completed translations merely because this operational gate was added.

If implementation later requires a material canonical change to the Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards, update the English canonical text first and then update affected localized full documents in this exact order:

`tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id`

Never silently omit a clause in translation. Arabic must retain proper RTL presentation. Locale variants must remain genuinely localized rather than mechanically copied.

## 22. Source snapshot used for this gate

Re-check these current official sources before production activation because Google is actively evolving the feature:

- Google Play Age Signals overview: `https://developer.android.com/google/play/age-signals/overview`
- Request age signals: `https://developer.android.com/google/play/age-signals/request-age-signals`
- Understand age signals responses: `https://developer.android.com/google/play/age-signals/understand-age-signals-responses`
- Release notes: `https://developer.android.com/google/play/age-signals/release-notes`
- Significant changes: `https://developer.android.com/google/play/age-signals/notify-significant-changes`
- Revoked app approvals: `https://developer.android.com/google/play/age-signals/revoked-app-approval`
- Google Play Age Signals API / User Data policy: `https://support.google.com/googleplay/android-developer/answer/16909972`
- Google Play applicable U.S.-state guidance: `https://support.google.com/googleplay/android-developer/answer/16569691`

This gate intentionally does not promise that any current SDK version, U.S.-state legal status, Console feature availability, age band, or provider workflow will remain unchanged. Re-check current primary sources when the implementation or law changes.
