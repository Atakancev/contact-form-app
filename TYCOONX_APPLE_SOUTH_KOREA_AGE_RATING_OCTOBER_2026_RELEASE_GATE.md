# TycoonX Apple South Korea Age-Rating October 2026 Release Gate

**Status:** Required before Apple’s announced October 2026 South Korea age-rating transition  
**Owner:** CK-Labs  
**Product:** TycoonX  
**Last reviewed:** September 9, 2026

## Purpose

Apple announced on August 12, 2026 that, starting in October 2026, two content descriptors will move from the South Korea App Store rating of **All** to **12+**:

- **Infrequent profanity and crude humor**
- **Infrequent mature or suggestive themes**

This is a South Korea App Store distribution and content-classification change. It must not be confused with a player’s legal age, contractual capacity, purchase authorization, account ownership, payment identity, parental consent, fraud status, regional-pricing eligibility, or entitlement status.

Apple has not identified a specific October day in the current public announcement. CK-Labs must therefore treat **starting in October 2026** as the implementation window and monitor the actual App Store Connect/storefront rollout rather than hard-code an unsupported date.

## 1. Pre-transition evidence snapshot

Before the October 2026 transition, CK-Labs should preserve a dated internal snapshot of:

1. TycoonX’s current App Store Connect age-rating questionnaire answers;
2. the current Apple global age rating and Republic of Korea region-specific rating;
3. the live app version/build and relevant content/features represented by those answers;
4. whether TycoonX contains infrequent profanity/crude humor or infrequent mature/suggestive themes;
5. current user-generated-content, chat, messaging, moderation and filtering capabilities relevant to the questionnaire;
6. any existing Korean GRAC Rating Classification Number (RCN) or App Review correspondence, if applicable; and
7. screenshots or exported evidence sufficient to show what CK-Labs declared before the transition.

The purpose is not to create personal player data. The snapshot should document app/content metadata and provider configuration.

## 2. Questionnaire answers must describe the actual live product

CK-Labs must answer Apple’s age-rating questionnaire based on TycoonX’s actual shipped/live content and capabilities, not the rating CK-Labs would prefer commercially.

Do not understate profanity, mature/suggestive content, chat, messaging, user-generated content, social features, simulated gambling, contests, loot boxes, violence, weapons, or other questionnaire elements merely to obtain a lower rating.

Do not overstate a descriptor solely to force a higher South Korea rating if the descriptor is not actually present. If CK-Labs wants a higher rating for a legitimate product-positioning or EULA reason, use Apple’s supported age-rating override mechanism where applicable rather than submitting inaccurate questionnaire answers.

Material feature or content changes that affect Apple’s questionnaire must trigger a fresh review of the answers.

## 3. October 2026 South Korea transition

Once Apple applies the announced change, CK-Labs must verify the actual Republic of Korea storefront result rather than assuming the transition succeeded.

At minimum, check:

- the current App Store Connect calculated/global and Republic of Korea ratings;
- the Republic of Korea App Store product page on a supported current OS;
- whether either affected descriptor is present in TycoonX’s questionnaire;
- whether App Review has issued any South Korea-specific message;
- whether a GRAC-issued rating or RCN override applies; and
- whether older-OS rating presentation differs from current OS presentation.

If the South Korea rating or metadata is inconsistent with the actual product or Apple’s current requirements, correct the declaration/metadata through the supported App Store Connect flow. Do not attempt to solve a classification problem by changing paid entitlements or punishing players.

## 4. Age rating is distribution metadata, not proof of player age

A South Korea storefront rating such as **All**, **12+**, **15+**, or **19+** is app distribution/content-classification metadata. It is not reliable proof that a specific TycoonX player:

- is at least that age;
- has legal capacity to enter a contract;
- owns the Apple Account or payment method;
- has parental or guardian permission;
- is the cardholder;
- is resident in the Republic of Korea;
- is eligible for a regional price;
- validly authorized a particular purchase; or
- committed fraud, an exploit, account compromise, or regional-price abuse.

TycoonX must not convert the storefront rating into a stored personal-age fact or use it as a substitute for any legally or technically required age-assurance, parental-consent, purchase-authorization, fraud, or account-security process.

## 5. Separation from Apple Declared Age Range and social-age controls

This gate is separate from `TYCOONX_APPLE_SOCIAL_MEDIA_AGE_RELEASE_GATE.md`.

Apple’s storefront age rating classifies the app/content. A privacy-preserving Declared Age Range or other Apple-supported age signal, where CK-Labs lawfully uses one, concerns information about a user’s age range. The two concepts must not be merged.

A change from a South Korea rating of All to 12+ does not prove that existing users are 12+, does not authorize collecting birthdays unnecessarily, and does not by itself justify disabling a player account.

## 6. Separation from South Korea payment-channel rules

This gate is also separate from `TYCOONX_APPLE_SOUTH_KOREA_ALTERNATIVE_PAYMENT_RELEASE_GATE.md`.

The South Korea age rating must not select or alter:

- Apple In-App Purchase versus any lawfully available alternative payment method;
- merchant-of-record or payment-processor responsibilities;
- VAT/tax treatment;
- currency or FX treatment;
- refund or chargeback authority;
- fraud screening;
- final checkout pricing; or
- regional-price eligibility.

A rating change therefore cannot retroactively reprice a completed purchase or transform a valid transaction into regional-price abuse.

## 7. Paid entitlement isolation

A South Korea age-rating change must not itself grant, revoke, shorten, extend, migrate, reprice, refund, charge, or duplicate any TycoonX paid entitlement.

### Diamonds

A rating transition does not change the quantity or validity of a completed Diamond purchase. Purchased Diamonds do not expire merely because time passes. Any refund/reversal correction must continue to be tied to authoritative payment evidence and the specific affected transaction.

### One-time 30-Day VIP

One-time 30-Day VIP remains a non-renewing entitlement lasting **30 consecutive days** under the canonical purchase rules. An age-rating change cannot restart the clock, add another period, cancel a legitimate period, or convert it into a subscription.

### Lifetime VIP

Lifetime VIP remains a limited-time promotional one-time product available only during selected genuine sales windows. It may be withdrawn from sale, may never return, and creates no expectation of continuous availability.

A South Korea age-rating transition, metadata correction, App Review request, GRAC rating, temporary regional delisting, restore flow, support action, or provider outage must never reopen a closed Lifetime VIP sales window. A legitimate historical Lifetime VIP entitlement may be restored according to authoritative purchase records without creating a new sale.

## 8. Temporary restriction, delisting or review hold

If Apple temporarily restricts, removes, delays, or holds TycoonX in the Republic of Korea because age-rating metadata requires correction or review, classify the event as a platform/distribution compliance event unless separate evidence establishes player misconduct.

Do not:

- ban or suspend players merely because the app is unavailable in the region;
- erase legitimate paid entitlements;
- treat the platform event as a chargeback or fraud event;
- fabricate a refund state; or
- use the interruption to avoid mandatory consumer remedies.

When lawful access resumes, restore/reconcile legitimate entitlements from authoritative server/store/payment records. Mandatory statutory remedies remain unaffected where they apply.

## 9. Existing GRAC rating and RCN handling

Apple currently provides a supported Republic of Korea override path when GRAC has issued an official rating that differs from the existing App Store rating. If CK-Labs receives such a notice, use the official RCN and the actual GRAC-issued rating through App Store Connect as instructed by Apple.

Never invent an RCN, select a GRAC rating that was not issued, or treat an RCN override as evidence of a player’s age or identity.

If App Review or GRAC requires a higher regional rating, update distribution metadata and app compliance as required. Do not silently rewrite TycoonX purchase history or paid-entitlement records.

## 10. Old app versions and OS-version presentation

Apple currently notes that age-rating presentation can differ for devices running earlier OS versions. An old TycoonX binary or older OS may therefore display rating information differently from the current storefront.

For distribution/compliance decisions, use current App Store Connect and Apple storefront/provider evidence. Do not revoke paid value simply because a player used an old or unsupported client that displayed an older age-rating label.

CK-Labs may require a supported app version for security, compatibility or legal reasons under the canonical terms, but that is a separate rule and does not make an older displayed rating evidence of abuse.

## 11. Regional pricing and promotion safeguards

South Korea age-rating metadata is not a regional-pricing control. It must not be used as evidence that a player is resident in Korea or entitled to a Korean price.

Future prices, Diamond bundle prices/content, VIP prices, regional prices, currencies and genuine promotions may change for future purchases under the canonical rules. The final total price shown before confirmation governs a completed transaction, subject to mandatory law.

A later rating change does not create automatic price matching, refunds or credits for completed purchases, and it cannot create an extra charge on an already completed one-time purchase. Promotional claims, countdowns and crossed-out prices must remain truthful and independently compliant.

## 12. Privacy and data minimization

The app’s South Korea rating and questionnaire answers are product/compliance metadata. CK-Labs should not turn them into unnecessary player-level personal data.

Do not infer or persist a player’s exact age, birthday, family status, legal capacity, residence, payment ownership or parental consent from the app rating.

Any player-specific age signal used elsewhere must have its own lawful purpose, minimization, retention and access controls. The age-rating audit itself should normally require no player-level personal data.

## 13. Provider outages, configuration errors and security incidents

During an Apple/App Store Connect outage, propagation delay, metadata mismatch or CK-Labs configuration error:

- fail safely for new distribution/compliance decisions where the current rating cannot be verified;
- preserve existing legitimate paid entitlements;
- do not mass-ban or mass-flag players;
- preserve evidence of the discrepancy and remediation; and
- reconcile the current provider state when systems recover.

If there is evidence that CK-Labs credentials, App Store Connect access or provider configuration was compromised, secure the account and reconcile authoritative metadata before relying on the changed rating. A security incident does not automatically make players culpable.

## 14. Mandatory rights remain intact

Nothing in this gate waives non-waivable consumer, digital-content, contract, privacy, refund, conformity, update, liability, notice, consent or withdrawal rights under applicable law.

A platform age-rating change is not a contractual waiver by the player and is not a substitute for any remedy required by German/EU or other mandatory consumer law.

If a regional restriction or classification issue prevents CK-Labs from supplying a paid digital element as legally required, the normal mandatory-rights analysis still applies.

## 15. Operational release checklist

Before treating the October 2026 South Korea transition as complete, CK-Labs should confirm all of the following:

1. Current App Store Connect questionnaire answers were reviewed against the live TycoonX feature set.
2. Both announced descriptors were explicitly checked: infrequent profanity/crude humor and infrequent mature/suggestive themes.
3. No questionnaire answer was changed merely to obtain a preferred commercial rating.
4. A pre-transition screenshot/evidence snapshot exists.
5. The post-transition Republic of Korea storefront rating was verified after Apple actually applies the change.
6. Any App Review or GRAC message was handled using the supported official process.
7. No storefront rating is used as proof of a player’s legal age, capacity, residence or purchase authorization.
8. Declared Age Range/social-age logic remains separate.
9. South Korea payment-channel logic remains separate.
10. No completed purchase was repriced because of the rating transition.
11. No Diamond balance changed merely because of the rating transition.
12. No 30-Day VIP clock changed merely because of the rating transition.
13. No Lifetime VIP sales window reopened.
14. Temporary regional unavailability does not fabricate fraud, chargeback or player-abuse findings.
15. Older OS/app rating differences do not trigger entitlement confiscation.
16. Rating metadata is not used to infer unnecessary player-level personal data.
17. Outage/configuration mismatch handling preserves authoritative evidence and legitimate entitlements.
18. Mandatory consumer rights remain available.

## 16. Regression scenarios

1. **No affected content:** TycoonX truthfully has neither affected descriptor. CK-Labs leaves those answers accurate rather than selecting them merely to force 12+.
2. **Infrequent profanity exists:** TycoonX truthfully declares it. After Apple’s October transition, CK-Labs verifies the actual South Korea rating rather than hard-coding a date/result.
3. **Infrequent mature/suggestive themes exist:** same treatment as scenario 2.
4. **Both affected descriptors exist:** questionnaire remains truthful and current; no player entitlement changes.
5. **Apple rollout is later than expected:** CK-Labs monitors actual provider state and does not fabricate an October day.
6. **GRAC issues a different official rating:** CK-Labs uses the supported RCN override process and does not invent metadata.
7. **South Korea storefront moves to 12+:** existing players are not assumed to be at least 12 years old.
8. **Player made a valid Diamond purchase before rating change:** purchase quantity/history remains unchanged.
9. **Player has active 30-Day VIP:** its 30-consecutive-day period continues normally.
10. **Lifetime VIP sale is closed:** the age-rating transition cannot reopen it.
11. **Historical Lifetime VIP holder restores:** valid restoration works without a new sale.
12. **Temporary Korean delisting:** classify as distribution/compliance event, preserve legitimate entitlements and mandatory remedies.
13. **Player travels into/out of Korea:** rating metadata is not residency or regional-pricing evidence.
14. **Old iOS version shows older rating:** do not classify the player as abusive or revoke paid value.
15. **App Store Connect propagation delay:** preserve evidence and recheck; do not mass-edit entitlements.
16. **Account compromise changes metadata:** secure/reconcile provider configuration; do not blame players without evidence.
17. **Declared Age Range says a user is in another age band:** do not overwrite that user signal with the storefront app rating.
18. **Alternative payment is available in Korea:** age rating does not choose the payment rail or refund authority.
19. **Support sees screenshot of old All rating:** support does not treat it as proof of age or entitlement.
20. **Future Apple rating taxonomy changes:** unknown/new values are reviewed before automation uses them; no irreversible paid-value or enforcement action is based solely on an unknown rating.

## 17. Release blockers

Do not consider the South Korea October 2026 age-rating transition production-ready if any of these are true:

- the App Store Connect questionnaire does not match the live TycoonX product;
- the two announced October descriptors were not reviewed;
- code treats the South Korea storefront rating as proof of player age, capacity, residence, purchase authorization or fraud;
- rating changes can mutate paid entitlements;
- Lifetime VIP can reopen because of rating, review, restore or regional-availability state;
- a GRAC override can be created without an official RCN/rating;
- South Korea age-rating logic is coupled to payment-channel or regional-price eligibility;
- temporary delisting causes automatic bans or fabricated refunds;
- player-level personal data is inferred unnecessarily from the app rating; or
- CK-Labs hard-codes an unsupported exact October cutover date rather than verifying Apple’s live rollout.

## 18. Legal/localization impact

This gate does **not** change the current canonical player-facing TycoonX contract. It implements a provider-specific South Korea distribution/classification requirement while preserving the existing Terms, Purchases & Refunds Policy, Privacy Policy and Community Standards.

Therefore it does not trigger retranslation of the 100 completed localized full documents. If CK-Labs later changes the canonical English legal meaning because of this transition, the localized versions must then be synchronized in the required locale order and `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md` updated accurately.

## Current references

- Apple Developer News, **“Updates to age ratings for the Republic of Korea”**, August 12, 2026.
- Apple App Store Connect Help, **“Set an app age rating.”**
- Apple App Store Connect Help, **“Age ratings values and definitions.”**

Review these sources again immediately before the October 2026 rollout because Apple can update provider requirements and rating definitions.
