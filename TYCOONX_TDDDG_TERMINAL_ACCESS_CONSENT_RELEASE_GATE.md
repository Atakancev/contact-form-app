# TycoonX TDDDG Terminal-Access and Consent Release Gate

**Status:** single production/legal QA source of truth for CK-Labs  
**Last reviewed:** September 5, 2026  
**Scope:** TycoonX iOS and Android apps, CK-Labs-controlled websites and webshop entry surfaces, support/contact pages, browser/WebView storage, mobile SDK storage/access, analytics, diagnostics, attribution, fraud/security tooling, consent management, Apple privacy controls, Google Play privacy controls, Cloudflare Turnstile, and Xsolla checkout handoffs.

TycoonX went to full release on **September 1, 2026**. This gate operationalizes the canonical TycoonX Privacy Policy and does not itself change the public contractual meaning of the Terms of Service, Purchases & Refunds Policy, Privacy Policy, or Community Standards. Mandatory privacy, consumer, withdrawal, conformity, update, liability, and other non-waivable rights remain intact.

## 1. Core German rule

Current **§ 25(1) TDDDG** generally permits storing information on an end user's terminal equipment or accessing information already stored there only after consent based on clear and comprehensive information. The information and consent follow the GDPR consent framework.

This is not only a browser-cookie rule. It applies to websites **and apps**, and the protected terminal information need not itself be personal data. If personal data is processed after the terminal access, the GDPR analysis is a separate legal step.

Relevant TycoonX technologies can include cookies, local/session storage, IndexedDB or WebView storage, app preferences, cached tokens, SDK-generated installation identifiers, advertising or attribution identifiers, device or browser configuration, persistent fraud/security signals, analytics state, experiment assignments, referral/campaign state, and similar client-side reads/writes.

Current **§ 28 TDDDG** places a violation of § 25(1) within the administrative-offence framework. The statutory maximum for the specified offence is currently **EUR 300,000**. That is a ceiling, not an automatic fine, and GDPR/platform exposure can be separate.

## 2. The statutory exceptions are narrow

Current **§ 25(2) TDDDG** contains two relevant exceptions:

1. the sole purpose of the storage/access is transmitting a communication over a public telecommunications network; or
2. the storage/access is **strictly necessary** so the provider can make available a digital service **expressly requested by the user**.

Economic usefulness, analytics value, conversion improvement, anti-churn value, industry practice, an SDK default, or a vendor label such as `security` do not themselves prove strict necessity.

For each § 25(2)(2) operation preserve at least:

- **Requested function:** what did the player actually request at that moment?
- **Timing:** does the access begin only when that function is invoked?
- **Information:** what exactly is read or written?
- **Minimum scope:** is less intrusive terminal access reasonably possible?
- **Duration:** how long does the state persist?
- **Recipients:** who can access or reuse the signal?
- **Separate purpose:** is it reused for analytics, advertising, profiling, attribution, or another purpose?
- **Evidence:** which build, SDK/provider version, and configuration were tested?

Potential candidates, depending on the real implementation, can include narrowly scoped authentication/session state, checkout state after a player actually starts checkout, a requested language/preference, or proportionate security state genuinely required to keep a requested account or payment flow safe. Do not hard-code those examples as automatically exempt.

## 3. A feature is not requested merely because TycoonX opened

German supervisory guidance requires a granular user-perspective analysis. A player opening TycoonX does not automatically request every additional feature.

For example, terminal access needed only for a contact form, chat/community surface, map/embed, payment method, official Xsolla webshop, notification feature, or sharing feature should not silently fire at cold start merely because that feature exists. Where the operation is only necessary after the user invokes the feature, trigger it only at that point.

General visitor measurement, A/B testing, retention analytics, attribution, and similar background functionality are not automatically part of the expressly requested core service.

## 4. Keep TDDDG and GDPR decisions separate

For every material technology document both layers:

`feature -> technology/SDK -> terminal information -> TDDDG purpose -> §25(2) exception or §25(1) consent -> downstream personal-data processing -> GDPR legal basis -> provider/recipient -> retention -> withdrawal/disable behavior -> evidence version`.

A GDPR legitimate-interest assessment cannot cure terminal access that independently required § 25(1) consent. Conversely, a valid § 25 exception does not automatically create a GDPR legal basis for every downstream use.

Do not collapse the implementation into a single field such as `gdpr_legal_basis` or `cookie_necessary`.

## 5. Required production inventory

Maintain a dated inventory for every material app/web release, SDK change, consent-manager change, checkout change, or provider migration.

At minimum inspect:

- browser cookies and WebView cookies;
- localStorage, sessionStorage, IndexedDB, Cache API, and equivalent browser state;
- app-local preferences and persistent SDK state;
- SDK-generated installation IDs;
- advertising, attribution, vendor, app-set, or similar identifiers where used;
- device/browser configuration or fingerprint-like signals;
- remember-me and persistent-login state;
- crash/performance diagnostic state;
- feature, retention, attribution, campaign, or advertising analytics;
- experimentation/feature-flag assignments;
- push/notification-related local state;
- consent-state storage itself;
- CK-Labs webshop/Xsolla handoff state; and
- Cloudflare Turnstile behavior on CK-Labs support/contact surfaces.

Each record should identify provider/SDK and version, platform/surface, exact read/write, purpose, first-access time, lifetime, first/third-party access, whether a stable identifier exists, TDDDG basis, separate GDPR basis where relevant, consent/disclosure control, and evidence owner/review date.

Unknown behavior is a blocker for optional technology. A package name, vendor marketing page, or SDK category is not proof of the live configuration.

## 6. Consent must precede consent-requiring access

Where § 25(1) consent is required, the storage/access must remain blocked until a valid affirmative choice exists.

Do not:

- initialize an optional SDK so it reads/writes identifiers before consent and ask afterward;
- infer consent from opening TycoonX, accepting the Terms, creating an account, scrolling, closing a notice, buying Diamonds, buying 30-Day VIP, buying Lifetime VIP, silence, or continued use;
- use preselected optional purposes; or
- treat a provider-generated identifier as evidence of consent.

Release QA must inspect real **cold-start network and terminal behavior**. If a provider cannot remain dormant until the required legal condition is satisfied, disable, reconfigure, or replace that integration rather than using Privacy Policy wording as a substitute for technical control.

### Fail closed

`unknown`, `not asked`, `failed`, `migration missing`, consent-manager timeout, remote-config failure, or provider outage must not silently become `accepted` for consent-requiring technology.

A provider/CMP migration should preserve a valid rejection where reasonably possible. If a lawful consent state cannot be established, optional consent-requiring access stays disabled until resolved.

## 7. Reject, withdrawal, and legal-information UX

Where an `Accept all` option is offered, provide a clear route to reject consent-requiring purposes with substantially equivalent effort. Do not hide refusal behind unnecessary extra screens, misleading labels, lower contrast, smaller controls, countdowns, repeated nagging, or error-like styling.

Withdrawal must be effective for future consent-based access/processing and should be as easy as giving consent where applicable. TycoonX should expose a durable privacy/preference control where needed and propagate changes to relevant SDKs/providers.

Test at least:

- accept -> withdraw while open;
- accept -> withdraw -> restart;
- accept -> withdraw -> reinstall/restore without silently resurrecting optional consent;
- reject -> later voluntarily accept;
- reject -> paid purchase succeeds; and
- provider outage while a consent-state update is pending.

Privacy Policy and legally required provider/imprint information must remain reachable without forcing optional tracking consent.

## 8. Analytics, diagnostics, security, anti-cheat, and account compromise

Do not treat `analytics`, `diagnostics`, `fraud`, or `security` as universal legal categories. Separate crash reporting, server-side operational logs, persistent client identifiers, performance traces, session replay if ever introduced, feature analytics, retention analytics, attribution, advertising analytics, experimentation, device-integrity signals, and anti-cheat signals.

For security/fraud/anti-cheat terminal access preserve the exact threat, the information accessed, the necessity reasoning, less intrusive alternatives, downstream GDPR basis, retention, false-positive controls, and human review/appeal where an adverse account action depends materially on the signal.

A missing consent, rejected optional analytics, regenerated identifier, privacy setting, or unavailable optional SDK is **not by itself evidence** of hacking, exploits, account compromise, fraud, chargeback abuse, entitlement abuse, or regional-price abuse.

A security emergency may justify urgent proportionate changes, but it does not authorize unrelated advertising or behavioral profiling.

## 9. Cloudflare Turnstile is a concrete repository checkpoint

The current repository includes `@marsidev/react-turnstile`, and `app/ContactForm.tsx` renders Cloudflare Turnstile in the support/contact flow. That is a configuration checkpoint, not a predetermined legal conclusion.

For the deployed widget preserve evidence of:

- configured hostnames and widget mode;
- whether pre-clearance is enabled and its clearance level;
- whether a `cf_clearance` cookie is actually set;
- whether Ephemeral IDs are enabled/available for the actual plan;
- whether cookies, local storage, WebView state, or other terminal state appear in production;
- browser/device/security signals transmitted;
- Siteverify/server-side validation configuration;
- provider role/retention information relevant to the actual setup;
- the exact § 25 classification; and
- separate GDPR basis/transparency where personal data is processed.

Current Cloudflare documentation says pre-clearance can set a `cf_clearance` cookie. Cloudflare also documents Ephemeral IDs as short-lived device identifiers that do not require cookies or local storage, while current availability depends on Enterprise configuration. Classify the deployed TycoonX/CK-Labs configuration, not a generic vendor description.

## 10. Apple boundary

Apple App Tracking Transparency (ATT), App Privacy disclosures, privacy manifests, required-reason API rules, and German TDDDG/GDPR analysis are separate layers.

Where Apple-defined tracking occurs, obtain the required ATT authorization before that tracking begins. ATT authorization does **not** automatically prove German § 25/GDPR consent for every purpose, and ATT denial does not require unrelated strictly necessary non-tracking account/payment operations to stop.

Do not bypass ATT denial with another identifier, hashed account data, fingerprinting, or SDK/device signals that recreate prohibited tracking. Keep the ATT purpose string, App Privacy disclosures, privacy manifests, third-party SDK behavior, and shipped binary consistent.

## 11. Google Play boundary

Google Play Data safety, User Data, SDK, runtime-permission, and prominent-disclosure requirements are separate from German TDDDG analysis.

Where Google requires prominent disclosure and affirmative consent for personal/sensitive user data, comply before the relevant access/collection. A truthful Data safety form does not itself create § 25 consent; a German consent dialog does not by itself make Play disclosures accurate; and an Android runtime permission does not authorize unrelated analytics or attribution.

CK-Labs remains responsible for third-party SDK behavior in the shipped TycoonX build under applicable Play rules.

## 12. Xsolla and webshop boundary

For the official CK-Labs TycoonX webshop and Xsolla checkout, record separately:

1. CK-Labs-controlled storage/access before provider handoff;
2. storage/access activated only after a player starts checkout;
3. Xsolla-controlled checkout-domain storage;
4. WebView/iframe behavior that can run before checkout is consciously selected;
5. platform-required external-offer tokens/state;
6. fraud/security state;
7. strictly necessary checkout/session state; and
8. optional analytics, marketing, or attribution state.

Do not assume `payment provider` means every cookie/storage item is necessary, and do not assume every checkout cookie requires consent. Apply the actual role, purpose, timing, and configuration.

## 13. Purchases and entitlements are independent from optional consent

Keep privacy-consent state separate from transaction and entitlement state across the **Apple App Store**, **Google Play**, and the **CK-Labs TycoonX webshop using Xsolla**.

Required transaction validation, entitlement delivery, restoration, accounting/tax evidence, fraud investigation, and legally required consumer-remedy records must remain available where their independent legal basis permits/needs them even when optional analytics/advertising consent is refused or withdrawn.

A refusal must not silently suppress purchase reconciliation or be treated as consideration required to receive an already-paid product.

### Purchased Diamonds

**Purchased Diamonds do not expire solely because time passes.** Clearing storage, reinstalling, withdrawing optional consent, changing SDKs, or replacing a provider must not expire, duplicate, misclassify, or silently delete purchased Diamonds. Reconcile lost local state against authoritative CK-Labs and Apple/Google/Xsolla transaction records as applicable.

### One-time 30-Day VIP

**30-Day VIP remains a one-time, non-renewing 30-day entitlement.** Clearing cookies, local storage, identifiers, or reinstalling cannot restart the original 30-day clock. Optional consent withdrawal must not shorten it.

### Lifetime VIP

**Lifetime VIP remains a limited-time promotional one-time entitlement offered only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase.**

Privacy/storage changes cannot add an expiry, remove a legitimate entitlement merely because an analytics identifier disappeared, grant it twice, convert it to 30-Day VIP, reopen a closed Lifetime VIP sales window, or force an existing owner to buy it again. Future genuine sales windows may use different future prices.

## 14. Minors and age-related controls

A parent's approval of a purchase does not automatically provide consent for optional tracking/analytics, and privacy consent does not authorize a purchase. Where TycoonX knows or reasonably treats a user as a minor, keep TDDDG, GDPR child protections, German youth rules, and Apple/Google age controls separate and avoid unnecessary behavioral tracking or manipulative consent design.

## 15. Old clients, outages, provider replacement, and business transfer

An old/unsupported app version must not bypass a newly required consent gate merely because it predates the current UI. If a changed provider/configuration makes previously deployed terminal access consent-requiring, gate/disable the affected optional function, require a proportionate update where lawful, or deploy a compliant alternative.

A consent-service/CMP/remote-config outage must fail closed for optional consent-requiring technology while allowing independently lawful strictly necessary authentication, support, security, and payment operations where technically possible.

Replacing analytics, crash, authentication, payment, consent, or other providers requires a fresh inventory where technology, purpose, identifier, recipient, or role changes.

A sale, merger, reorganization, or successor operator does not automatically stretch old optional consent to materially new purposes. Reassess controller identity, purposes, transparency, and consent requirements.

On lawful permanent service shutdown, stop optional tracking that no longer has a valid purpose and retain only transaction/privacy/consumer-remedy evidence that has an independent lawful retention basis.

## 16. Consent evidence and minimization

Retain enough evidence to demonstrate the choice without turning consent logging into a new tracking system. Depending on implementation, preserve policy/consent version, purpose/category, affirmative action, accepted/rejected state, timestamp/version transition, withdrawal/change event, app/web version, platform/surface, provider/SDK configuration version, and evidence that blocked technology remained blocked before consent.

Do not store full payment tokens, chat content, raw device fingerprints, or unrelated security logs in the consent record merely for convenience. Do not create a long-lived identifier solely because it makes consent logging easier where less intrusive proof works.

## 17. Release blockers

Block the relevant German release/configuration if any applicable condition exists:

- consent-requiring storage/access starts before valid consent;
- an optional SDK's terminal behavior is unknown;
- strict necessity is based only on commercial usefulness;
- rejection is materially harder than acceptance;
- unknown/outage/migration state becomes accepted;
- withdrawal does not stop future optional access;
- legal/privacy information is hidden behind optional consent;
- old clients can bypass the required gate;
- ATT denial is bypassed;
- Apple/Google declarations do not match shipped behavior;
- CK-Labs/Xsolla responsibility or storage boundary is unknown;
- actual Turnstile behavior/configuration is unclassified; or
- privacy choices can damage, duplicate, restart, or reopen paid entitlements.

## 18. Release evidence packet

For each material app/web release, SDK update, provider migration, checkout change, or consent redesign retain:

- terminal-access inventory diff;
- § 25 basis for each new/changed operation;
- strict-necessity analysis where § 25(2)(2) is used;
- separate GDPR basis where personal data is processed;
- consent/reject/withdrawal UI evidence;
- cold-start network/storage evidence proving optional technology stays off before consent;
- fail-closed tests for `unknown`, outage, and migration states;
- iOS ATT/App Privacy/privacy-manifest parity evidence where applicable;
- Google Play Data safety/User Data/SDK parity evidence where applicable;
- Xsolla checkout responsibility/storage map where applicable;
- Cloudflare Turnstile production configuration/runtime-storage evidence;
- provider/SDK versions tested;
- old-client behavior where applicable;
- proof that legitimate Diamonds, 30-Day VIP, and Lifetime VIP remain unaffected by optional-consent refusal/withdrawal; and
- reviewer/date.

## 19. Regression scenarios

At minimum test:

1. fresh German install with optional consent refused;
2. cold start before any choice;
3. selected purposes accepted;
4. withdrawal while app is open;
5. withdrawal then restart;
6. reinstall/restore after withdrawal without resurrecting optional consent;
7. CMP timeout/unknown/missing migrated state;
8. provider replacement;
9. old client after a new consent requirement;
10. iOS ATT denied while lawful non-tracking core operations still work;
11. Android/Play disclosure and runtime-permission separation;
12. support-form submission with Turnstile;
13. Turnstile pre-clearance disabled/enabled where actually used;
14. Xsolla checkout with optional CK-Labs tracking refused;
15. Diamond purchase with optional analytics refused, delivered exactly once;
16. active 30-Day VIP with optional analytics refused, clock unchanged;
17. Lifetime VIP restore with optional analytics refused, no reopened sale;
18. anti-fraud/security tooling without unrelated profiling;
19. consent-state migration after provider change;
20. permanent shutdown with optional tracking stopped and lawful evidence retained; and
21. a cold-start traffic audit where every unexpected device/network access has an owner, purpose, TDDDG classification, and GDPR/platform classification.

## 20. Canonical/localization trigger

The canonical TycoonX Privacy Policy already states that mere use is not consent where consent is legally required, describes consent for certain optional cookies/analytics, permits withdrawal for future consent-based processing, and distinguishes provider roles. This consolidated operational gate therefore does **not** by itself change canonical public legal meaning and does not reopen localization.

If production review reveals a materially new public data practice not fairly described by the canonical Privacy Policy, update canonical English first, then reopen **Privacy only** and resynchronize all 25 target locales in the required order before marking them current again.

## 21. Consolidation rule

This file is the **single TycoonX operational gate** for TDDDG terminal-device storage/access. Competing TDDDG/device-tracking gates must not be reintroduced because legal rules, provider facts, and release checks can drift between duplicate sources.

The sole matching verifier is `scripts/verify-tycoonx-tdddg-terminal-access.mjs`.

The following obsolete overlapping gates must remain deleted:

- `TYCOONX_TDDDG_COOKIE_TRACKING_RELEASE_GATE.md`
- `TYCOONX_TDDDG_DEVICE_ACCESS_CONSENT_RELEASE_GATE.md`
- `TYCOONX_EU_GERMAN_DEVICE_STORAGE_TRACKING_CONSENT_RELEASE_GATE.md`
- `TYCOONX_GERMAN_TDDDG_DEVICE_STORAGE_CONSENT_RELEASE_GATE.md`

The following obsolete overlapping verifiers must remain deleted:

- `scripts/verify-tycoonx-tdddg-cookie-tracking.mjs`
- `scripts/verify-tycoonx-tdddg-device-access.mjs`
- `scripts/verify-tycoonx-device-tracking-consent.mjs`
- `scripts/verify-tycoonx-german-tdddg-device-consent.mjs`

## 22. Current reference checkpoint

Reviewed **September 5, 2026** against:

- current German TDDDG §§ 25 and 28;
- current German Data Protection Conference orientation guidance for digital services;
- current Apple App Review/user-privacy and ATT guidance;
- current Google Play User Data/SDK requirements; and
- current Cloudflare Turnstile documentation for pre-clearance, `cf_clearance`, and Ephemeral IDs.

The TDDDG currently published by the German Federal Ministry of Justice shows its latest amendment through **March 10, 2026**. Re-verify before a material implementation change.

### Reference URLs

- https://www.gesetze-im-internet.de/ttdsg/__25.html
- https://www.gesetze-im-internet.de/ttdsg/__28.html
- https://www.datenschutzkonferenz-online.de/media/oh/OH_Digitale_Dienste.pdf
- https://developer.apple.com/app-store/review/guidelines/
- https://support.google.com/googleplay/android-developer/answer/10144311
- https://developers.cloudflare.com/turnstile/additional-configuration/hostname-management/pre-clearance/
- https://developers.cloudflare.com/turnstile/additional-configuration/ephemeral-id/

## Release decision

**PASS only if** CK-Labs can show what the live TycoonX app/web/support/payment stack reads or writes on terminal equipment, why every consent-free operation fits a real § 25 exception, that consent-requiring technology stays off until a lawful choice, that reject/withdrawal and outage states behave correctly, that old clients do not bypass the gate, that Apple/Google/provider declarations match shipped behavior, that Turnstile/Xsolla boundaries reflect actual configuration, and that privacy choices cannot corrupt Diamonds, 30-Day VIP, or Lifetime VIP.