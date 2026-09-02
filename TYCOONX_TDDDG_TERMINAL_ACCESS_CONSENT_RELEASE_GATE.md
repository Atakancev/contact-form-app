# TycoonX TDDDG Terminal-Access and Consent Release Gate

**Status:** production/legal QA source of truth for CK-Labs  
**Reviewed against current law and provider documentation:** September 3, 2026  
**Scope:** TycoonX iOS and Android apps, CK-Labs-controlled websites and webshop entry surfaces, support/contact pages, browser storage, mobile SDK storage/access, analytics, diagnostics, attribution, fraud/security tooling, consent management, Apple App Tracking Transparency, Google Play privacy controls, and Xsolla checkout handoffs.

This is the single TycoonX operational gate for German terminal-device storage/access under the Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG). It operationalizes the existing canonical TycoonX Privacy Policy. It does not itself change the public contractual meaning of the Terms of Service, Purchases & Refunds Policy, Privacy Policy, or Community Standards.

## 1. Core German rule

Section 25(1) TDDDG generally permits storing information on an end user's terminal equipment or accessing information already stored there only with consent based on clear and comprehensive information. The information and consent must follow the GDPR consent framework.

The rule is about terminal equipment, not only personal data. Personal-data status is not a prerequisite for Section 25 TDDDG to apply. If personal data is processed after the access, the downstream GDPR analysis is a separate legal step.

This applies to websites **and apps**. Relevant technologies can include cookies, localStorage, sessionStorage, IndexedDB, app-local storage, SDK-generated installation identifiers, advertising or vendor identifiers, fingerprinting signals, browser/device configuration, webview storage and similar mechanisms.

A violation of Section 25(1) is included in the administrative-offence framework in Section 28 TDDDG. The current statutory maximum for the relevant offence category is EUR 300,000.

## 2. The statutory exceptions are narrow

Section 25(2) contains two relevant exceptions to the consent rule:

1. the sole purpose of the storage/access is transmitting a communication over a public telecommunications network; or
2. the storage/access is **strictly necessary** so the provider can make available a digital service expressly requested by the user.

Economic usefulness, revenue optimization, analytics convenience, attribution value, conversion improvement, anti-churn value, advertising value, or the fact that a vendor calls a tool `security` do not by themselves make terminal access strictly necessary.

For each claimed Section 25(2)(2) operation, record:

- **Requested function:** what specific function did the user expressly request at that moment?
- **Timing:** does access begin only when that function is actually used?
- **Content:** is only the minimum terminal information needed read or written?
- **Duration:** does it persist only as long as reasonably necessary?
- **Audience:** who can read, receive or reuse it?
- **Alternative:** can the requested function work with a materially less intrusive implementation?
- **Separate purpose:** is the same identifier or signal also reused for analytics, advertising, profiling or another provider purpose?

Potentially supportable examples, depending on the real implementation, include a short-lived session/authentication token needed to keep a requested login working, narrowly configured checkout state after the user starts checkout, or proportionate security state genuinely necessary to protect that requested session.

Do not automatically classify general product analytics, campaign attribution, cross-service advertising, A/B testing, heatmaps, session replay, optional personalization, a persistent SDK install ID, or broad device fingerprinting as strictly necessary.

## 3. Keep TDDDG and GDPR decisions separate

For each technology, document both questions:

1. **TDDDG:** may TycoonX store/access the terminal information, and is the basis consent, Section 25(2)(1), or Section 25(2)(2)?
2. **GDPR:** if personal data is processed afterwards, what legal basis, purpose, retention, recipients, international-transfer safeguards, transparency and rights rules apply?

A GDPR legitimate-interest assessment cannot cure terminal access that required consent under Section 25 TDDDG. Conversely, a valid Section 25 exception does not automatically create a GDPR legal basis for every downstream use.

## 4. Required terminal-access inventory

Maintain a dated production inventory for every material release, SDK change, consent-manager change and provider migration.

| Technology / operation | Examples to inspect | Decision required |
| --- | --- | --- |
| Browser cookies | session, preferences, fraud, checkout, analytics, attribution | Section 25 classification |
| Web storage | localStorage, sessionStorage, IndexedDB, Cache API | Section 25 classification |
| Mobile app local storage | persistent SDK state, install IDs, app preferences | Section 25 classification |
| Device / hardware identifiers | advertising IDs, vendor IDs, hardware-derived signals | Section 25 plus platform review |
| Fingerprinting | browser/device configuration used to derive a stable identity | Section 25 plus Apple/Google review |
| SDK-generated identifiers | analytics, crash, fraud, engagement, attribution SDK IDs | Section 25 classification |
| Remember-me / persistent login state | long-lived authentication storage | Section 25 classification |
| Consent-state storage | evidence/preferences for the user's privacy choice | narrow necessity analysis |
| Xsolla or other checkout cookies | CK-Labs page, embed, redirect, provider domain | role and Section 25 boundary |
| Cloudflare Turnstile | challenge token, optional clearance state, device/security signals | actual configuration review |

Each inventory record must identify the provider/SDK and version, platform/surface, exact read/write operation, information involved, purpose, first access time, lifetime, first/third-party access, whether a stable identifier exists, Section 25 basis, separate GDPR basis where relevant, consent/disclosure control, and evidence owner/review date.

Unknown behavior is a blocker for an optional SDK. Do not ship an optional technology merely because its vendor documentation is vague.

## 5. Consent must happen before optional access

Where Section 25(1) consent is required, the optional storage/access must remain blocked until valid consent exists.

Do not initialize an optional SDK so that it reads or writes terminal information before consent and then ask afterwards. Do not infer consent from opening TycoonX, accepting the Terms, creating an account, buying Diamonds, buying 30-Day VIP, buying Lifetime VIP, scrolling, closing a banner, silence or continued use.

Consent requires a genuine affirmative choice. No pre-ticked boxes, silence, inactivity or inferred acceptance.

### Fail closed on unknown state

Consent-state handling must fail closed for consent-requiring technology. `unknown`, `not asked`, `failed`, `migration missing`, a consent-manager timeout, a remote-config error or a provider outage must not silently become `accepted`.

A provider or CMP migration must preserve a valid prior rejection where reasonably possible. If the system cannot establish a lawful consent state, optional consent-requiring access stays disabled until the state is resolved.

## 6. Reject and withdrawal UX

**Reject must be genuinely available.** Where an `Accept all` control is presented on the first layer, provide a clear first-layer route to reject all consent-requiring purposes with substantially equivalent effort. Do not hide refusal behind unnecessary extra screens, misleading labels, low contrast, smaller controls, countdowns, repeated nagging or other steering design.

Withdrawal must be as easy as giving consent. If the choice is made directly in the app or website, users should have a directly reachable in-product method to change it rather than being forced to email Support or search through unrelated legal text.

A material change to purpose, provider, recipient, persistence, identifier or tracking behavior can require a new consent assessment and potentially fresh consent. Do not silently stretch a historical consent to cover materially broader processing.

## 7. Current repository checkpoint: Cloudflare Turnstile

The current `contact-form-app` dependency manifest includes `@marsidev/react-turnstile`, and `app/ContactForm.tsx` renders Cloudflare Turnstile on the message step before the support/contact message can be submitted.

This is a concrete production checkpoint, not proof of a legal conclusion. Do not assume `Turnstile is security` automatically proves Section 25(2)(2), and do not force a consent banner for a genuinely strictly necessary security mechanism merely because a third party is involved.

For the deployed widget, preserve evidence of:

- the configured hostnames and widget mode;
- whether pre-clearance is enabled and the clearance level;
- whether a `cf_clearance` cookie is actually set in the relevant production flow;
- whether Ephemeral IDs are enabled or available for the deployed plan/configuration;
- whether cookies, local storage or other terminal state appear in browser or mobile/webview use;
- which browser/device/security signals are transmitted;
- relevant provider retention/controller/processor information;
- Siteverify/server-side validation configuration;
- the exact Section 25 classification; and
- the separate GDPR basis and Privacy Policy fit where personal data is processed.

Current Cloudflare documentation says ordinary Turnstile widgets issue a one-time token by default, while pre-clearance can additionally issue a `cf_clearance` cookie. Cloudflare also documents Ephemeral IDs as short-lived device identifiers that do not require cookies or local storage, but availability depends on the relevant Enterprise configuration. CK-Labs must classify its actual deployed configuration rather than copying a generic vendor description.

A package-list search alone is not proof that the deployed site is cookie-free or that no hosting/provider layer accesses terminal information.

## 8. Apple boundary

Apple App Tracking Transparency (ATT), App Privacy disclosures, privacy manifests and required-reason API rules are separate platform controls.

If TycoonX or an included SDK tracks users across apps or websites owned by other companies as Apple defines tracking, permission must be obtained before that tracking occurs. A granted ATT permission does **not** automatically prove German Section 25 consent for every terminal-access purpose.

An ATT denial also must not be bypassed with another identifier, hashed account data, fingerprinting or SDK/device signals that recreate prohibited tracking. Apple also makes developers responsible for third-party code included in their apps, so SDK behavior must be reconciled against the shipped privacy declarations.

## 9. Google Play boundary

Google Play's User Data and SDK requirements are separate from German TDDDG compliance.

TycoonX must keep Data safety and relevant in-app disclosures accurate for first-party and third-party SDK behavior. Where Google Play requires prominent disclosure and consent for personal or sensitive user data outside reasonable user expectation, the disclosure must occur before the relevant access/collection and consent must be affirmative.

An Android runtime permission does not automatically authorize unrelated analytics, attribution or advertising terminal access. Likewise, a Section 25 exception does not automatically satisfy every Google Play disclosure, permission or SDK requirement.

## 10. Xsolla and webshop boundary

The CK-Labs TycoonX webshop and an Xsolla-controlled checkout may involve different actors, domains and storage configurations.

Record separately:

1. CK-Labs-controlled cookies/storage before provider handoff;
2. storage/access activated only after the user starts checkout;
3. Xsolla-controlled checkout-domain storage;
4. embedded/iframe behavior that can run before checkout is consciously selected;
5. analytics, attribution or campaign parameters around checkout; and
6. which party controls each disclosure and consent mechanism.

Do not assume Xsolla's privacy/cookie notices cure a CK-Labs-controlled access that independently required consent. Do not assume every checkout cookie requires consent either. A narrowly configured checkout/session mechanism can potentially qualify as strictly necessary once the user actually requests the payment function.

## 11. Analytics, crash reporting, fraud and anti-cheat

Optional audience measurement, retention analytics, feature analytics and attribution require their own Section 25 classification.

Do not automatically classify all crash-reporting SDK terminal access as strictly necessary. Inspect persistent identifiers, device configuration, independent provider reuse and whether a more limited diagnostic mode exists.

Protecting accounts, purchases and the TycoonX economy is important, but `security` is not a magic Section 25 exemption. User-oriented security state genuinely required to protect a requested login or purchase can support a necessity analysis. Broad network-wide profiling or long-lived fingerprinting needs a separate granular review.

Security identifiers must not be silently repurposed for advertising or unrelated behavioral profiling.

## 12. Minors and age-related controls

Where TycoonX knows or reasonably treats a user as a minor, avoid unnecessary behavioral tracking, profiling and manipulative consent design.

A parent's approval of a purchase does not automatically provide consent to optional tracking or analytics. Conversely, privacy consent does not authorize a purchase. GDPR child protections, German youth rules, Apple/Google age controls and TDDDG remain separate questions.

## 13. Paid entitlement isolation

Refusing or withdrawing consent for **optional** terminal access must not itself:

- delete or duplicate legitimately purchased **Diamonds**;
- convert purchased Diamonds into promotional Diamonds or create an unrelated negative balance;
- restart, pause, extend, shorten or duplicate the original one-time **30-Day VIP** period;
- create an expiry, downgrade or conversion in a valid **Lifetime VIP** entitlement;
- convert Lifetime VIP into 30-Day VIP;
- block lawful purchase restoration merely to pressure the user into tracking consent;
- replay Apple App Store, Google Play or Xsolla purchase fulfillment; or
- manufacture a refund, chargeback, fraud, exploit or account-compromise finding.

Lifetime VIP remains a one-time limited-window promotional offering available only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability for future buyers.

A separate authoritative refund, reversal, fraud finding or lawful entitlement correction can still affect the transaction to which it actually relates.

## 14. Provider outages and replacements

If a CMP, remote-config service, tag manager, SDK configuration endpoint or privacy-settings service is unavailable, optional consent-requiring technology stays disabled where the required consent state cannot be established. Strictly necessary login, security, support and payment functions should remain available where technically possible.

Provider replacement requires a fresh data-flow review covering new device access, identifiers, purposes, controller/processor roles, international transfers, Apple declarations, Google Play declarations, consent needs and Privacy Policy impact.

A security emergency may justify urgent technical changes, but emergency scope must be necessary, proportionate, documented and reviewed afterwards. An emergency does not authorize unrelated advertising or profiling.

## 15. Consent evidence and minimization

Keep enough evidence to demonstrate the choice without creating unnecessary tracking. Depending on implementation, retain the consent interface/version, purposes or vendor categories shown, accepted/rejected state, timestamp or version transition, platform/surface, withdrawal/change event and enough context to connect the choice to the configuration it controlled.

Do not create a long-lived unique identifier solely because it is convenient for consent logging if a less intrusive record can demonstrate compliance.

## 16. Release blockers

Block the relevant German release or configuration change if optional storage/access starts before required consent, an optional SDK's behavior is unknown, a strict-necessity claim is based only on commercial usefulness, rejection is materially harder than acceptance, an unknown consent state becomes accepted, withdrawal does not stop future optional access, ATT denial is bypassed, Apple/Google declarations do not match shipped behavior, the CK-Labs/Xsolla boundary is unknown, the actual Turnstile configuration is unclassified, or privacy choices can damage/duplicate paid entitlements.

## 17. Release evidence packet

For every material app/web release, SDK update, provider migration or consent redesign, retain:

- terminal-access inventory diff;
- Section 25 basis for each new/changed operation;
- strict-necessity analysis where Section 25(2)(2) is used;
- screenshots/video of consent, reject and withdrawal paths where consent is required;
- network/storage evidence showing optional technology remains off before consent;
- fail-closed tests for `unknown`, outage and migration states;
- Apple ATT/App Privacy/privacy-manifest parity evidence where applicable;
- Google Play Data safety/User Data/SDK parity evidence where applicable;
- Xsolla checkout responsibility map where applicable;
- Cloudflare Turnstile production configuration and runtime-storage evidence;
- provider and SDK versions tested;
- proof that Diamonds, 30-Day VIP and Lifetime VIP remain unaffected by optional-consent refusal/withdrawal; and
- reviewer/date plus re-review triggers.

## 18. Regression scenarios

At minimum test first launch with optional consent refused; selected purposes accepted; withdrawal after prior consent; app restart after refusal; CMP timeout; unknown/missing migrated state; provider replacement; iOS ATT denial; Android permission/Advertising ID changes where relevant; support-form submission with Turnstile; Turnstile pre-clearance disabled and enabled where used; valid Diamond purchase with optional analytics refused; active 30-Day VIP with optional analytics refused; Lifetime VIP restore with optional analytics refused; Xsolla checkout with optional CK-Labs tracking refused; fraud/security tooling without unrelated profiling; and a material SDK update that adds a new identifier.

## 19. Canonical and localization trigger

The canonical TycoonX Privacy Policy already says that mere use is not consent where consent is legally required, separates optional processing where required, and preserves withdrawal for future consent-based processing. This gate therefore does not by itself reopen localization.

If production review reveals a materially new public data practice not fairly described by the canonical Privacy Policy, update canonical English first, then reopen the Privacy Policy across all 25 target locales in the required order and update `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`.

## 20. Consolidation rule

This file is the sole TDDDG terminal-access implementation gate. The following older overlapping gates are obsolete and must remain deleted:

- `TYCOONX_TDDDG_COOKIE_TRACKING_RELEASE_GATE.md`
- `TYCOONX_TDDDG_DEVICE_ACCESS_CONSENT_RELEASE_GATE.md`
- `TYCOONX_EU_GERMAN_DEVICE_STORAGE_TRACKING_CONSENT_RELEASE_GATE.md`

The single matching verifier is `scripts/verify-tycoonx-tdddg-terminal-access.mjs`. Older overlapping TDDDG/device-tracking verifiers must remain deleted so legal changes cannot drift across competing sources of truth.

## 21. Current reference checkpoint

Reviewed September 3, 2026 against the current German TDDDG Sections 25 and 28, current German Data Protection Conference orientation guidance for digital services, current Apple user privacy and ATT guidance, current Google Play User Data/SDK requirements, and current Cloudflare Turnstile documentation for pre-clearance, `cf_clearance` and Ephemeral IDs.

## Release decision

**PASS only if** CK-Labs can show what the live TycoonX app/web/support/payment stack reads or writes on terminal equipment, why every consent-free operation fits a real Section 25 exception, that consent-requiring technology stays off until a lawful choice, that reject/withdrawal and outage states behave correctly, that Apple/Google/provider declarations match shipped SDK behavior, that Turnstile and Xsolla boundaries are based on actual configuration, and that privacy choices cannot corrupt Diamonds, 30-Day VIP or Lifetime VIP.

Mandatory consumer, privacy, withdrawal, conformity, update, liability and other non-waivable rights remain intact.