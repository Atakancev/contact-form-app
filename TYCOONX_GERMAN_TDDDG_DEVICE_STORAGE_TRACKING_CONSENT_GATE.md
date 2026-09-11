# TycoonX German TDDDG Device Storage & Tracking Consent Gate

Last reviewed: September 11, 2026

Purpose: prevent TycoonX web, mobile, support, checkout, analytics, anti-abuse, attribution, advertising, and third-party SDK integrations from storing information on or reading information from a user's device in Germany without the consent or statutory necessity required by § 25 TDDDG, while keeping GDPR, Apple, Google Play, payment-provider, security, and game-integrity responsibilities separate.

This is an implementation and release gate. It does not claim that every technology listed below currently exists in TycoonX, and it does not turn every device-side access into unlawful tracking. The correct result depends on the exact technology, purpose, timing, provider, and whether the access is strictly necessary for a digital service expressly requested by the user.

## Why this is separate from the Privacy Policy

The canonical TycoonX Privacy Policy already explains usage/analytics data, security/fraud data, third-party providers, consent where legally required, and the rule that merely using TycoonX is not consent to optional processing.

That high-level wording is not a substitute for the point-of-use requirements of § 25 TDDDG. Where consent is required for storing or accessing information on terminal equipment, the user must receive clear and comprehensive information and valid consent must be obtained before the relevant non-exempt access occurs. A generic statement in the Privacy Policy or Terms cannot by itself make optional tracking lawful.

No canonical legal wording should be changed merely to describe technical implementation details that belong in a consent layer, SDK inventory, platform disclosure, or internal compliance record. If TycoonX later introduces a materially different data practice that changes the canonical Privacy Policy meaning, update English first and then resynchronize all affected localized Privacy documents.

## Core German rule

§ 25 TDDDG protects information in an end user's terminal equipment.

As a default rule, storing information in the terminal equipment or accessing information already stored there requires the end user's consent based on clear and comprehensive information. The information and consent standard follows the GDPR.

Consent is not required where the sole purpose is:

1. transmitting a communication over a public telecommunications network; or
2. storing/accessing information that is **strictly necessary** to provide a digital service expressly requested by the user.

The necessity exception is narrow. A technology does not become strictly necessary merely because it is convenient, commercially useful, improves retention, makes analytics easier, increases advertising performance, reduces engineering effort, or is bundled by default into a third-party SDK.

## P0 release inventory

Before treating a TycoonX web or mobile release as TDDDG-ready for Germany, keep a current inventory of every technology that can store or read information on a user's device.

For each technology record at least:

- exact feature or SDK name;
- provider;
- platform and surface: iOS, Android, CK-Labs website, support form, official webshop, embedded/redirected checkout, or another TycoonX-controlled surface;
- information written to or read from the device;
- purpose;
- whether the information is personal data or non-personal information;
- whether the operation happens before any consent decision;
- retention/lifetime where applicable;
- whether the operation is first-party or third-party;
- whether the access is claimed as § 25(2) strictly necessary or is consent-based;
- the factual reasoning for that classification;
- the GDPR legal basis for any subsequent personal-data processing; and
- where consent is relied on, the actual consent text/version, locale, timestamp/evidence, withdrawal path, and SDK state before and after the choice.

Do not classify an SDK solely from its marketing category. Inspect what it actually does in the current configuration.

## Scope: not only browser cookies

Do not reduce § 25 TDDDG to a "cookie banner" issue.

Potentially relevant device-side technologies can include, depending on implementation:

- browser cookies;
- localStorage, sessionStorage, IndexedDB, caches, or equivalent browser storage;
- mobile app preferences, local databases, key/value stores, or identifiers where information is written/read for the relevant purpose;
- advertising or attribution identifiers;
- SDK-generated installation or device identifiers;
- pixels, tags, scripts, fingerprinting techniques, or similar device-derived signals;
- cross-app/cross-site tracking technologies;
- fraud, abuse, bot, or integrity SDK signals that access device information;
- analytics/session-replay technologies;
- notification or messaging SDK state;
- embedded webviews and third-party checkout/support widgets; and
- future consent-management signals or device-side feature flags.

The rule can apply even when the information accessed is not personal data. If the resulting information is personal data, the later collection/use also needs a valid GDPR basis and the relevant transparency, minimisation, retention, processor/transfer, security, and rights controls.

Conversely, purely server-side processing that does not store or access information in terminal equipment may fall outside § 25 TDDDG while still being subject to GDPR or other law.

## Strictly necessary vs optional: TycoonX examples

### Likely necessity candidates, subject to actual implementation

The following can be candidates for § 25(2)(2) where the device access is objectively required for the expressly requested function and is limited to that purpose:

- maintaining a login/session needed for a user who expressly signs in;
- remembering a shopping basket during a checkout that the user requested;
- storing a security token genuinely required to complete the requested authenticated session;
- preserving a language or accessibility choice that the user expressly selected where the storage is genuinely needed to provide that requested presentation;
- implementing a user-requested setting that cannot reasonably operate without local state; or
- device-side state strictly required for a specific feature the user actively requested.

Do not turn these examples into a blanket exemption. For example, a login token required for authentication does not automatically justify sending the same identifier to an advertising network.

### Normally consent-sensitive unless a documented exception genuinely applies

Treat the following as consent-sensitive by default in Germany when they involve § 25 device storage/access and are not strictly necessary to deliver the requested service:

- advertising tracking;
- cross-app or cross-site tracking;
- marketing attribution beyond what is objectively necessary for the requested service;
- optional product analytics;
- optional A/B testing that is not needed to provide the requested function;
- behavioural profiling for marketing or monetisation;
- optional heatmaps/session replay;
- optional third-party social/media tracking; or
- SDK data collection enabled only because it is the vendor default.

A legitimate interest under GDPR does not replace § 25 TDDDG consent where § 25 itself requires consent.

## Security, fraud and anti-abuse

TycoonX has legitimate needs to protect accounts, purchases, Diamonds, one-time 30-Day VIP, Lifetime VIP, the economy, community features, and infrastructure against fraud, hacking, exploits, chargebacks, automation, botting, account compromise, and other abuse.

Do not assume that every anti-fraud or anti-abuse device signal is automatically consent-free. For each signal, document:

- what information is read or written on the device;
- whether that access is strictly necessary to provide the expressly requested service securely;
- whether the same objective can reasonably be achieved without the disputed device access;
- whether the signal is reused for analytics, advertising, profiling, or unrelated purposes; and
- whether a third-party provider independently uses the signal for its own purposes.

A security control may have a strong necessity argument in one configuration and require consent in another. Keep the assessment technology- and purpose-specific.

Refusing optional analytics or advertising consent must not be treated as cheating, fraud, exploit evidence, payment abuse, or account-compromise evidence.

## Consent quality

Where consent is required:

- [ ] ask before the non-exempt storage/access begins;
- [ ] use clear and comprehensive information about the relevant purposes and actors;
- [ ] make consent specific rather than bundling unrelated optional purposes into one unavoidable choice;
- [ ] use a genuine affirmative action;
- [ ] do not pre-enable optional categories merely because the SDK is already loaded;
- [ ] do not make rejection materially harder than acceptance;
- [ ] do not condition access to core TycoonX gameplay, previously purchased Diamonds, valid 30-Day VIP, valid Lifetime VIP, mandatory legal pages, or account/support rights on optional tracking consent unless the conditioning itself is lawfully justified;
- [ ] allow consent to be withdrawn for future processing as easily as reasonably required by GDPR standards;
- [ ] stop or reconfigure the relevant SDK/technology after withdrawal where required;
- [ ] preserve consent evidence without creating excessive tracking merely to prove consent; and
- [ ] request fresh consent when the purpose, provider, data access, or other material consent facts change enough that the original choice no longer covers the operation.

A "Continue" button that merely enters TycoonX is not consent to optional tracking.

## Consent management services

Germany's Einwilligungsverwaltungsverordnung (EinwV) has applied since April 1, 2025 and creates a framework for recognised consent-management services.

Do not state that TycoonX is legally required to adopt a particular recognised consent-management service unless that is actually required for the specific implementation. CK-Labs may use its own compliant consent interface where lawful. If a recognised consent-management service is integrated, ensure the TycoonX implementation honours the relevant transmitted user settings and does not silently override them with conflicting SDK defaults.

## Mobile apps are not outside the rule

Do not assume § 25 TDDDG applies only to the CK-Labs website. German supervisory guidance on digital services treats websites and apps as common use cases for terminal-equipment access.

For the TycoonX iOS and Android apps, inventory device-side identifiers, SDK local storage, attribution, analytics, advertising, anti-fraud, notification, authentication, crash/diagnostic, and embedded-webview behavior separately.

A store-approved SDK is not automatically TDDDG-compliant.

## Apple App Store separation

Apple's App Tracking Transparency (ATT) rules are separate from § 25 TDDDG.

- ATT permission must be obtained where Apple's definition of tracking and current platform rules require it.
- A positive ATT choice does not automatically prove valid TDDDG consent for every German device access or every purpose.
- A TDDDG consent does not automatically satisfy ATT where Apple requires ATT.
- Do not fingerprint or otherwise work around an ATT denial.
- Keep App Store privacy disclosures consistent with actual SDK behavior.
- Do not require tracking permission merely to access core app functionality or previously purchased TycoonX content where Apple prohibits such conditioning.

Where TycoonX shares user data with a third-party SDK, keep the canonical Privacy Policy and Apple's required disclosures/permissions accurate for the actual sharing.

## Google Play separation

Google Play's User Data, SDK, permissions, advertising-ID, and Data Safety requirements are also separate from § 25 TDDDG.

- CK-Labs remains responsible for third-party SDK behavior integrated into TycoonX.
- Prominent disclosure and consent may be required by Google Play independently of German law for certain sensitive or unexpected data access.
- Keep the Data Safety section accurate for data collected or shared through third-party SDKs.
- Do not join persistent device identifiers with personal/sensitive data or resettable advertising identifiers in ways prohibited by current Google Play rules.
- Use the appropriate Google-sanctioned identifier for advertising use cases and respect user reset/delete controls where applicable.

Meeting Google Play policy does not itself establish German TDDDG compliance, and vice versa.

## Webshop and payment providers

Apple, Google, Xsolla, card networks, fraud-screening providers, and banks can have their own device-access, security, fraud, tax, and payment responsibilities.

For the CK-Labs TycoonX webshop and Xsolla flow:

- distinguish CK-Labs-controlled scripts/storage from Xsolla-controlled checkout technology;
- document whether a third-party checkout is embedded, redirected, or otherwise loaded in a CK-Labs-controlled page;
- do not falsely claim that CK-Labs controls a provider's independent storage/access where it does not;
- do not use a provider's independent responsibility as an excuse for CK-Labs-controlled optional tracking loaded before or around checkout;
- keep payment/fraud device access separated from marketing/analytics reuse; and
- ensure refusal of optional tracking does not block a legally available payment/refund/withdrawal/support route unless technically unavoidable and lawfully justified.

The final total price, refund rights, withdrawal rights, 30-Day VIP, Lifetime VIP, and Diamond entitlements remain governed by their own purchase rules. A consent decision must not silently alter a paid entitlement.

## Support form and anti-bot tooling

The current CK-Labs contact form loads Cloudflare Turnstile through a client-side component. That is a concrete third-party browser integration and must remain in the device-access inventory.

Do not assume either that Turnstile automatically requires consent or that it is automatically exempt. Verify the current Turnstile configuration and provider behavior actually used by CK-Labs, including any storage/access, cookies/tokens, device/browser signals, retention, processor/controller role, and whether the anti-bot operation is strictly necessary for the requested support form in its actual configuration.

If the support form cannot lawfully run a particular non-essential third-party device-access before consent, reconfigure or defer that access instead of hiding it behind a broad Privacy Policy sentence.

## No paid-entitlement consequences from consent state

A user's privacy choice must not itself alter or destroy source-authoritative paid value.

Examples:

- declining optional analytics cannot delete purchased Diamonds;
- withdrawing optional tracking consent cannot shorten a one-time 30-Day VIP;
- refusing advertising attribution cannot cancel Lifetime VIP;
- a missing marketing identifier is not proof that a purchase is fraudulent;
- a consent-management error must not be treated as a chargeback; and
- correcting an unlawfully granted entitlement must rely on payment/entitlement evidence, not on whether the player accepted analytics or advertising consent.

## Data minimisation after device access

Even where § 25 TDDDG consent or an exception permits device access, any resulting personal-data processing still needs its own GDPR analysis.

- collect only data needed for the stated purpose;
- avoid sending reusable secrets, payment credentials, private messages, or unrelated account data to analytics/advertising SDKs;
- limit retention;
- apply processor/controller and international-transfer requirements;
- keep SDK access scoped to documented purposes;
- remove deprecated SDKs and stale identifiers;
- ensure deletion/withdrawal propagates where legally required; and
- re-evaluate providers when SDK terms, subprocessors, hosting regions, or collection behavior materially change.

## Enforcement exposure

§ 28 TDDDG treats unlawful storage/access contrary to § 25(1) as an administrative offence. The statutory maximum for the relevant offence category can reach **EUR 300,000**.

Treat this as a maximum, not as a prediction that a particular issue would produce that fine. GDPR consequences can separately apply where personal data is involved.

Do not use possible fines to justify deceptive consent screens, unnecessary blocking, or exaggerated statements that every device identifier is forbidden.

## Release regression scenarios

A Germany-targeted release should be able to answer these scenarios consistently:

1. **Fresh website visitor rejects optional analytics**  
   Necessary legal/support pages continue to work and optional analytics device access does not start.

2. **Player accepts analytics but rejects advertising**  
   The system enables only the consented category; advertising SDK/device access stays off where consent is required.

3. **Consent withdrawal**  
   Future optional device access stops as required, without deleting the account, Diamonds, VIP, game progress, or support rights.

4. **Authenticated session**  
   A strictly necessary login token is used only for the required session/security purpose and is not silently reused for advertising.

5. **30-Day VIP purchase**  
   Declining optional tracking does not block delivery/restoration of a valid one-time non-renewing 30-Day VIP.

6. **Lifetime VIP sale window**  
   A limited-time Lifetime VIP offer does not condition its advertised purchase price or entitlement on unrelated optional tracking consent unless the legal/commercial basis for that condition has been separately validated and clearly disclosed.

7. **Diamond purchase**  
   Payment reconciliation relies on Apple/Google/Xsolla/server transaction records, not on an advertising or analytics identifier.

8. **Security signal**  
   A fraud SDK's device access is documented purpose-by-purpose; marketing reuse is not smuggled into the security necessity argument.

9. **ATT denied on iOS**  
   TycoonX respects ATT and separately applies German TDDDG/GDPR rules; denial is not treated as cheating or entitlement abuse.

10. **Advertising ID reset on Android**  
    TycoonX and its SDKs respect the reset and do not reconstruct the old advertising profile using prohibited identifier joins.

11. **Support form with Turnstile**  
    The current browser-side anti-bot behavior is documented and classified under § 25 based on actual technical behavior, not assumption.

12. **Xsolla redirect**  
    CK-Labs distinguishes its own page technologies from Xsolla's independent checkout technologies and does not load optional CK-Labs trackers merely because the user opened checkout.

13. **SDK update**  
    A vendor update that adds a new device identifier or purpose triggers a new legal/configuration review before production rollout.

14. **Consent banner failure**  
    A broken consent UI fails closed for optional device access instead of silently enabling all optional SDKs.

15. **Multiple users on one device**  
    Consent/account logic does not assume device ownership equals the identity or consent choice of every person who later uses that device.

16. **User requests a feature requiring local state**  
    The strictly necessary access is limited to that requested feature rather than becoming a general analytics exemption.

## Evidence packet

For every material Germany-facing release retain enough evidence to reconstruct the real configuration:

- SDK/script/version inventory;
- device information stored/accessed;
- purpose and provider;
- § 25 classification and reasoning;
- consent UI screenshots/text by relevant locale;
- consent and withdrawal event model;
- SDK initialization order showing optional access does not precede consent;
- Apple ATT classification where relevant;
- Google Play disclosure/Data Safety mapping where relevant;
- processor/controller and transfer documentation where personal data is involved;
- test results for accept/reject/withdraw states;
- evidence for the actual anti-bot/support behavior;
- checkout separation evidence for CK-Labs vs payment-provider technology; and
- date/reviewer for the assessment.

## Current repository observations

- The canonical TycoonX Privacy Policy already says that optional processing requiring consent is handled separately, that merely using TycoonX is not consent where consent is legally required, and that usage/analytics and security/fraud data may be processed.
- The current `contact-form-app` dependency list does not show a general-purpose analytics or advertising SDK, but the support form does include the client-side `@marsidev/react-turnstile` integration. This repository review alone cannot prove what SDKs or identifiers exist inside the separate TycoonX iOS/Android application or the external Xsolla checkout.
- No repository evidence reviewed for this gate establishes that TycoonX currently performs unlawful device tracking. The open requirement is to verify the actual production web/mobile/checkout SDK configuration against this gate.

## Founder-protective rule

Use TDDDG compliance to separate legitimate game/security operation from optional tracking, not to weaken anti-fraud or account-security controls unnecessarily.

CK-Labs may continue to use lawful, proportionate, strictly necessary security/session technology where the statutory conditions are genuinely met. But labelling every anti-abuse, analytics, attribution, fingerprinting, or third-party SDK operation as "necessary" without a purpose-specific assessment creates avoidable regulatory and evidentiary risk.

A clean inventory plus purpose-specific classification is more founder-protective than an overbroad consent banner or a blanket necessity claim.

## Official legal references

- Germany, TDDDG § 25: protection of privacy in terminal equipment.
- Germany, TDDDG § 28: administrative offences and fine framework.
- Germany, EinwV: recognised consent-management services framework, effective since April 1, 2025.
- German Data Protection Conference (DSK), guidance for providers of digital services / earlier telemedia guidance addressing websites, apps, device storage/access, consent, and strict necessity.
- Apple App Review Guidelines and App Tracking Transparency requirements.
- Google Play User Data, SDK, permissions, Advertising ID, and Data Safety requirements.

This gate preserves all mandatory GDPR, German/EU consumer, platform, refund, withdrawal, conformity, update, liability, and digital-product rights. It does not create a waiver of non-waivable rights and does not turn optional tracking consent into a condition of unrelated paid entitlements.