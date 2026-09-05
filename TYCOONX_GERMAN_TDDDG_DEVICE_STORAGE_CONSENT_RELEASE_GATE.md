# TycoonX German TDDDG Device Storage / Consent Release Gate

**Last reviewed: September 5, 2026**

TycoonX went to full release on **September 1, 2026**. This gate covers German requirements for storing information on, or accessing information already stored on, a user's terminal equipment under **§ 25 Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG)**, together with the related GDPR consent layer and Apple / Google platform privacy controls.

This is an operational release gate. It does not replace transaction-specific legal advice and must not be used to waive mandatory privacy, consumer, platform, or payment rights.

## 1. P0 rule: § 25 TDDDG is not only a browser-cookie rule

Current § 25 TDDDG applies when information is stored in a user's terminal equipment or information already stored there is accessed. German supervisory guidance expressly treats websites and **apps** as common use cases.

For TycoonX, do not scope this review only to HTTP cookies. The inventory must cover, where actually used:

- cookies;
- browser or WebView local/session storage;
- app-local storage and preferences where a service or SDK reads/writes them;
- SDK-created identifiers or installation identifiers;
- advertising or attribution identifiers;
- cached identifiers and tokens;
- analytics / diagnostics SDK state;
- fraud, security, device-integrity, or abuse-prevention SDK state;
- Xsolla or other checkout WebView/browser storage controlled by CK-Labs where applicable;
- push / notification-related local state;
- feature flags, experiment assignments, referral/campaign state, and similar client-side state;
- any other technology that stores or reads information on the user's device.

The legal question is not limited to whether the information is personal data. § 25 TDDDG protects terminal-equipment information as such. A separate GDPR analysis can still be required where personal data is processed afterward.

## 2. Two layers must be classified separately: TDDDG and GDPR

Never collapse the analysis into one field such as `gdpr_legal_basis`.

For every relevant device storage/access event preserve at least:

`feature -> technology/SDK -> information stored/accessed -> device surface -> TDDDG purpose -> §25(2) exception or §25(1) consent -> subsequent personal-data processing -> GDPR legal basis -> provider -> retention -> withdrawal/disable behavior -> evidence version`.

A technology can be permitted under § 25(2) TDDDG while subsequent server-side personal-data processing still needs its own GDPR legal basis.

Conversely, a claimed GDPR legitimate interest does **not** by itself remove a § 25(1) TDDDG consent requirement for device storage/access.

## 3. Default rule under § 25(1): informed consent before non-exempt storage/access

Current § 25(1) TDDDG says storage of information in terminal equipment, or access to information already stored there, is permitted only after the end user has consented on the basis of clear and comprehensive information, unless an exception applies.

Where TycoonX relies on consent:

- disclose the relevant purpose before the storage/access begins;
- require a real affirmative action;
- do not treat app launch, scrolling, continuing to play, closing a notice, or silence as consent;
- do not pre-enable an optional analytics/advertising category merely because it is described in the Privacy Policy;
- preserve the consent version, purposes, timestamp, applicable device/account context and later withdrawal;
- block the consent-requiring technology until consent exists; and
- make withdrawal effective for future access/processing without pretending that already-lawful past processing becomes unlawful retroactively.

TycoonX's canonical Privacy Policy already states that mere use is not treated as consent where consent is legally required. Production behavior must match that promise.

## 4. § 25(2)(1): transmission-only exception is narrow

Consent is not required where the sole purpose of the storage/access is carrying out the transmission of a communication over a public telecommunications network.

Do not use this exception as a generic justification for analytics, advertising, attribution, profiling, retention measurement, campaign tracking, product experiments, or unrelated device identification.

The **sole-purpose** requirement matters.

## 5. § 25(2)(2): strictly necessary for an expressly requested digital service

Consent is not required where the storage/access is **strictly necessary** so that the provider can make available a digital service **expressly requested by the user**.

This is not the same as:

- useful to CK-Labs;
- commercially valuable;
- convenient for product analytics;
- standard in the games industry;
- enabled by default in an SDK;
- helpful for future features; or
- described somewhere in the Terms.

Classify necessity from the user's requested service and the actual technical purpose.

Examples that may be candidates for a § 25(2)(2) classification where the facts support it include narrowly scoped authentication/session state, shopping-cart or checkout state after the user actually starts a purchase, user-requested language/settings state, security state strictly required to keep the requested account/service safe, and entitlement/reconciliation state strictly required to deliver the requested paid feature.

Do **not** hard-code those examples as automatically exempt. Preserve the purpose and necessity reasoning for the actual TycoonX implementation.

## 6. A feature can become expressly requested only after the user actually invokes it

German supervisory guidance emphasizes that optional additional functions are not automatically requested merely because a person opened a website or app.

For TycoonX this matters for features such as:

- opening a support/contact form;
- opening a chat/community surface;
- opening a map or third-party embedded service;
- selecting a payment method;
- opening the Xsolla webshop;
- requesting push notifications;
- activating an optional social or sharing feature.

If a device-storage/access operation is only necessary after the player explicitly invokes such a feature, do not fire it silently on first app launch and then claim it was necessary for the user's request.

## 7. Required consent must gate the SDK before initialization, not after the first event

A common failure mode is:

1. app starts;
2. analytics/attribution SDK initializes and reads/writes identifiers;
3. TycoonX displays a consent dialog;
4. player presses Reject.

That sequence is not a safe consent implementation where step 2 itself required prior consent.

Release QA must verify the real cold-start network/device behavior, including third-party SDK auto-initialization, before any consent-requiring access occurs.

Where an SDK cannot be configured to remain dormant until the legal condition is satisfied, replace or remove that configuration/provider rather than using the Privacy Policy as a substitute for technical control.

## 8. Consent UI must not use deceptive pressure

Where interaction with a consent layer is required to continue, German supervisory guidance expects a real refusal path rather than forcing acceptance through obstructive design.

TycoonX consent UX must not:

- use an `Accept` button that is clear and prominent while hiding refusal behind multiple confusing screens where the first layer blocks use;
- use misleading button text such as `Continue` where the action actually means analytics/tracking consent;
- make refusal look like an error;
- use preselected optional purposes;
- repeatedly interrupt a player immediately after a valid refusal solely to pressure acceptance;
- claim an optional tracking purpose is required to play when the game can lawfully operate without it; or
- condition already-purchased Diamonds or VIP on an unrelated optional tracking consent.

Consent for genuinely optional analytics/advertising must be separate from acceptance of the TycoonX Terms and from the act of buying a product.

## 9. Privacy Policy / imprint must remain accessible before consent

German supervisory guidance says a consent interface must not prevent access to legally required privacy/legal information.

For TycoonX web or WebView surfaces, verify that the Privacy Policy and applicable imprint/legal notice can be reached without first accepting optional tracking/device access.

Do not implement a consent wall that makes the user accept tracking merely to learn who the controller is or how to withdraw consent.

## 10. Analytics and performance diagnostics require purpose-by-purpose classification

TycoonX may need performance monitoring to keep the live service stable, but `diagnostics` is not one universal legal category.

Separate at least:

- crash reports;
- performance traces;
- server-side operational logs;
- client-side device/installation identifiers;
- session replay, if ever used;
- feature analytics;
- retention analytics;
- attribution/campaign analytics;
- advertising analytics; and
- A/B testing/experiment assignments.

A server log generated from a request can have a different TDDDG analysis from an SDK that writes and later reads a persistent device identifier.

Do not claim all analytics are strictly necessary merely because analytics helps improve TycoonX.

## 11. Security, fraud, entitlement and anti-cheat tooling needs its own necessity record

Founder protection requires strong anti-fraud and anti-cheat controls. It does **not** require vague device surveillance.

For device-level security tooling preserve:

- the exact threat or entitlement-integrity purpose;
- what information is stored/accessed;
- whether a less intrusive implementation can provide the requested service safely;
- why any § 25(2)(2) necessity claim is strictly necessary for the requested service;
- subsequent GDPR legal basis;
- false-positive controls;
- retention; and
- human review / appeal where an adverse enforcement action depends on the signal.

A missing consent or disabled optional analytics SDK is not evidence of hacking, exploit use, account compromise, fraud, chargeback abuse, entitlement abuse, or regional-price abuse.

## 12. Purchase and entitlement flows must not be broken by consent choices

Keep privacy consent state separate from payment state.

For Apple App Store, Google Play, and the CK-Labs TycoonX webshop using Xsolla:

- authoritative store/payment records remain authoritative for the transaction state;
- required purchase validation and entitlement delivery must remain available when optional analytics/advertising consent is refused;
- a refusal cannot silently suppress purchase reconciliation callbacks;
- a consent withdrawal must not delete transaction evidence that CK-Labs is legally permitted/required to retain for entitlement, accounting, fraud, dispute, tax or consumer-remedy purposes; and
- optional tracking consent must not be treated as consideration required to receive an already-paid product.

## 13. Purchased Diamonds invariant

**Purchased Diamonds do not expire solely because time passes.**

A TDDDG consent refusal, withdrawal, SDK disablement, device reset, browser storage clearing or analytics-provider migration must not:

- expire purchased Diamonds;
- grant them a second time;
- remove them without a transaction-specific lawful basis;
- convert purchased Diamonds into free/promotional Diamonds; or
- destroy the authoritative provenance needed for a valid refund/withdrawal/chargeback/entitlement correction.

If local device state is lost, reconcile against authoritative CK-Labs and Apple / Google / Xsolla records as applicable.

## 14. One-time 30-Day VIP invariant

**30-Day VIP remains a one-time, non-renewing 30-day entitlement.**

Clearing cookies, local storage, app preferences, advertising identifiers, analytics identifiers or reinstalling the app must not restart the original 30-day clock.

Optional consent withdrawal must not shorten the entitlement. If a privacy-compatible implementation of a feature becomes unavailable, apply the actual contract/consumer-remedy rules rather than silently redefining the product.

## 15. Lifetime VIP invariant

**Lifetime VIP remains a limited-time promotional one-time entitlement offered only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase.**

Device storage/access consent changes must not:

- add an expiry to a legitimate Lifetime VIP;
- remove it merely because an analytics or attribution identifier disappeared;
- grant it twice after reinstall/storage clearing;
- convert it to 30-Day VIP;
- reopen a closed Lifetime VIP sales window; or
- require the existing owner to purchase it again.

A future genuine Lifetime VIP sales window may have a different future price, but that commercial decision is separate from privacy consent.

## 16. Xsolla / webshop WebView and browser storage

When a player deliberately opens the official TycoonX webshop or an eligible external-purchase flow, classify separately:

- CK-Labs website storage/access;
- Xsolla-controlled checkout storage/access;
- platform-required external-offer tokens or state;
- fraud/security state;
- strictly necessary checkout/session state; and
- optional analytics/marketing/attribution state.

Do not assume `payment provider` means every cookie or local-storage entry is necessary.

Where Xsolla or another provider is an independent controller for its own checkout/privacy processing, its own consent and privacy duties may apply. CK-Labs remains responsible for the TycoonX-controlled site/app behavior and for selecting/configuring providers lawfully where CK-Labs determines the relevant purposes/means.

## 17. Apple ATT is not a substitute for German TDDDG consent

Apple's App Tracking Transparency (ATT) permission is a platform control for Apple's definition of tracking.

Rules:

- where ATT applies, obtain ATT authorization before Apple-defined tracking begins;
- do not assume `ATT authorized` automatically satisfies every German § 25 / GDPR consent requirement;
- do not assume `ATT denied` means every strictly necessary TycoonX storage/access operation must stop;
- do not require tracking permission merely to access ordinary gameplay, already-purchased content, or compensation where Apple rules prohibit that conditioning; and
- keep the ATT purpose string and actual data behavior consistent.

Apple privacy-manifest declarations are transparency metadata, not a magic legal basis for device storage/access.

## 18. Google Play Data safety and prominent disclosure are also separate layers

Google Play currently requires accurate Data safety disclosures and makes developers responsible for data handled by integrated SDKs.

Where Google's Prominent Disclosure & Consent policy applies to personal/sensitive data, the disclosure must appear in-app before the relevant access/collection and consent must require affirmative action.

Rules:

- a truthful Play Data safety form does not itself create § 25 TDDDG consent;
- a TDDDG consent dialog does not automatically make the Play Data safety form accurate;
- review third-party SDK behavior, not only TycoonX first-party code;
- keep the privacy policy, Play declaration and actual binary behavior aligned; and
- if a third-party SDK collects data by default, disable/default-gate it or disclose/consent as legally and contractually required rather than hiding behind the provider.

## 19. Consent withdrawal / preference changes must propagate

Where consent is the legal basis, withdrawal must be effective for future processing and should be as easy as giving consent under applicable GDPR rules.

TycoonX should provide a durable privacy/preference control where needed and propagate the change to relevant SDKs/providers.

Test at least:

- allow -> withdraw while app open;
- allow -> withdraw -> app restart;
- allow -> withdraw -> reinstall / restore where consent should not be silently resurrected;
- reject -> later voluntarily allow;
- reject -> paid purchase succeeds;
- parental/age restriction where a valid consent cannot be obtained independently; and
- provider outage while a consent-state update is pending.

Do not infer renewed consent merely because a provider SDK regenerated an identifier.

## 20. Consent records are evidence, not permanent tracking permission

Where CK-Labs keeps consent evidence, retain only what is reasonably necessary to prove the consent/withdrawal state and comply with legal claims/obligations.

The consent record must not itself become an excuse to build a new unrelated behavioral profile.

Recommended minimum evidence:

- policy/consent version;
- purpose/category;
- affirmative action;
- timestamp;
- withdrawal timestamp where applicable;
- app/web version;
- coarse jurisdiction/configuration context where needed;
- provider/SDK configuration version; and
- proof that blocked technologies remained blocked before consent.

Do not store full payment tokens, chat content, raw device fingerprints or unrelated security logs inside the consent record merely for convenience.

## 21. Old/unsupported clients and fail-open behavior

An old app version must not bypass a newly required consent gate merely because that client predates the UI.

If a server-side/provider configuration change makes a previously non-consent device access consent-requiring, CK-Labs must either:

- gate/disable the affected feature for old clients;
- require an update where lawful and proportionate; or
- deploy another compliant implementation.

Do not fail open after a consent-service outage by initializing every optional SDK.

For service continuity, strictly necessary account/authentication/payment/security operations can remain available where their independent legal classification supports that operation.

## 22. Provider replacement / business transfer / permanent shutdown

Replacing an analytics, crash, hosting, authentication, payment or consent-management provider requires a fresh inventory if device storage/access purposes or technologies change.

A sale, merger, reorganization or successor operator does not automatically transfer old optional consent to materially new purposes. Reassess controller identity, purposes, transparency and consent requirements.

On lawful permanent service shutdown:

- do not use a shutdown event to harvest new device identifiers;
- preserve legally required transaction/consumer-remedy evidence separately;
- stop optional tracking that no longer has a valid purpose; and
- keep mandatory privacy and consumer rights intact.

## 23. Enforcement exposure

Current § 28 TDDDG treats intentional or negligent storage/access contrary to § 25(1) as an administrative offense. The statutory fine ceiling for the specified § 25 offense is currently **EUR 300,000**.

This is separate from possible GDPR exposure for subsequent personal-data processing and separate from Apple / Google platform enforcement.

Do not present the statutory maximum as the automatic fine for every mistake. Risk depends on the facts, authority, applicable law, intent/negligence and enforcement circumstances.

## 24. Production inventory required before claiming compliance

Maintain one current device-access inventory for each production surface:

### iOS
- first-party storage/access;
- linked SDKs;
- privacy manifests;
- required-reason API use where applicable;
- ATT status/flow where applicable;
- network domains observed in App Privacy Report / equivalent test evidence;
- pre-consent cold-start behavior.

### Android
- first-party storage/access;
- third-party SDKs;
- Play Data safety mapping;
- prominent disclosure/consent where applicable;
- advertising/app-set/install identifiers where used;
- pre-consent cold-start behavior.

### Web / Xsolla webshop
- cookies/local/session storage;
- consent categories;
- strictly necessary storage;
- provider scripts/tags;
- WebView versus external-browser differences;
- marketing/analytics state;
- checkout storage; and
- consent withdrawal behavior.

Do not sign off from source-code names alone. Observe actual network/device behavior of the release build.

## 25. Regression scenarios

A release is not ready until the applicable scenarios pass:

1. **Fresh German install, no optional consent:** no consent-requiring analytics/advertising SDK device access occurs before choice.
2. **Reject optional analytics:** core TycoonX gameplay still works unless a specifically requested feature genuinely requires separate storage/access.
3. **Reject then purchase Diamonds:** authoritative purchase validates and Diamonds are delivered exactly once.
4. **Reject then buy 30-Day VIP:** one-time non-renewing entitlement activates correctly without optional tracking.
5. **Existing Lifetime VIP + reject:** Lifetime VIP remains active and the closed sale does not reopen.
6. **Withdraw after accepting:** future consent-dependent SDK access stops and does not silently re-enable after restart.
7. **Consent provider outage:** optional technologies fail closed rather than starting by default.
8. **First app launch:** optional chat/map/support/payment-related technology does not initialize merely because the app opened where the feature has not yet been requested.
9. **Open Xsolla checkout:** necessary checkout state is separated from optional marketing/analytics state.
10. **Clear local storage / reinstall:** purchased Diamonds and VIP are reconciled from authoritative entitlement/payment state without duplicate grants.
11. **ATT denied:** Apple-defined tracking stays off; strictly necessary non-tracking account/payment behavior still works where otherwise lawful.
12. **ATT allowed but German consent refused:** German consent-dependent device access stays off; ATT is not treated as overriding German law.
13. **Google Data safety accurate but German consent absent:** production gate still fails if § 25 consent was required.
14. **Privacy Policy says consent required:** actual binary does not initialize the relevant SDK before consent.
15. **Old app version:** server-side controls prevent bypass of a newly required optional-consent gate.
16. **Security signal missing because optional SDK disabled:** player is not automatically accused of cheating/fraud.
17. **Provider migration:** old consent is not silently stretched to a materially different new purpose.
18. **Consent record export/deletion request:** privacy-right handling does not erase independently required transaction/entitlement evidence.
19. **Permanent shutdown:** optional tracking stops; mandatory transaction/consumer-remedy evidence follows its lawful retention rules.
20. **Cold-start traffic audit:** every unexpected device/network access has an identified owner, purpose, TDDDG classification and GDPR/platform classification.

## 26. Release evidence packet

For each production release that materially changes SDKs, consent, tracking, checkout, device identifiers, or analytics, preserve:

- release/build number;
- inventory version;
- iOS and Android dependency/SDK list;
- web tag/script list where applicable;
- TDDDG classification per storage/access purpose;
- GDPR legal basis per personal-data purpose;
- screenshots/video of consent and refusal flows;
- cold-start network/device-access evidence before consent;
- withdrawal/restart evidence;
- Apple ATT / privacy-manifest evidence where applicable;
- Google Play Data safety / prominent-disclosure evidence where applicable;
- Xsolla/webshop cookie/storage evidence;
- purchase tests with optional consent refused;
- Diamond / 30-Day VIP / Lifetime VIP reconciliation tests; and
- reviewer/date.

## 27. Canonical legal synchronization rule

This gate currently operationalizes the canonical Privacy Policy's existing promises that:

- mere use is not consent where consent is legally required;
- consent is used where required for optional processing such as certain cookies/analytics;
- optional processing is handled separately;
- consent can be withdrawn for future processing; and
- Apple / Google / Xsolla and other providers can have separate privacy roles.

Therefore this gate does **not** by itself change canonical public legal meaning and does not reopen the completed 25-locale Privacy localization queue.

If CK-Labs later changes the canonical Privacy Policy's meaning, data categories, purposes, legal bases, provider roles, consent model, user rights, or retention promises materially, reopen **Privacy only** and resynchronize all 25 localized Privacy pages in the required locale order before marking them current again.

## 28. Source checkpoints

Re-verify these before a material implementation change:

- German TDDDG § 25: https://www.gesetze-im-internet.de/ttdsg/__25.html
- German TDDDG § 28: https://www.gesetze-im-internet.de/ttdsg/__28.html
- German Data Protection Conference, Orientation Guidance for Digital Services: https://www.datenschutzkonferenz-online.de/media/oh/OH_Digitale_Dienste.pdf
- Apple App Review Guidelines, privacy/data use: https://developer.apple.com/app-store/review/guidelines/
- Apple privacy manifests: https://developer.apple.com/documentation/bundleresources/describing-data-use-in-privacy-manifests
- Google Play User Data policy: https://support.google.com/googleplay/android-developer/answer/10144311

## 29. Release checklist

Do not mark the German device-storage/privacy gate complete until all applicable items are true:

- [ ] Every relevant iOS, Android, web and checkout storage/access event has a purpose-specific § 25 TDDDG classification.
- [ ] The inventory distinguishes TDDDG terminal-access permission from subsequent GDPR legal bases.
- [ ] Consent-requiring SDKs do not initialize before valid consent.
- [ ] Strict-necessity claims identify the expressly requested service and why the access is indispensable.
- [ ] Consent refusal and withdrawal work without deleting legitimate paid entitlements.
- [ ] Privacy Policy / legal notice remains accessible without optional tracking consent.
- [ ] Apple ATT/privacy-manifest state is consistent but not treated as a substitute for German law.
- [ ] Google Play Data safety/prominent-disclosure state is consistent but not treated as a substitute for German law.
- [ ] Xsolla/webshop necessary storage is separated from optional analytics/marketing storage.
- [ ] Purchased Diamonds do not expire solely because time passes and remain recoverable from authoritative state.
- [ ] 30-Day VIP remains one-time and non-renewing after reinstall/storage clearing/consent changes.
- [ ] Lifetime VIP remains a one-time limited-window promotional entitlement with no new expiry or reopened sale caused by privacy state.
- [ ] Refusing optional consent does not itself trigger fraud, hacking, exploit, chargeback or entitlement-abuse sanctions.
- [ ] Old clients cannot bypass the required consent behavior.
- [ ] Provider outage fails closed for optional technologies.
- [ ] Current release evidence was reviewed and dated.
