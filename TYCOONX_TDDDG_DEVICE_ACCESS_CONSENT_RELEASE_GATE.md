# TycoonX TDDDG Device Access and Consent Release Gate

**Status:** Release-readiness gate for Germany/EU privacy and device-access compliance  
**Reviewed:** August 31, 2026  
**Release context:** TycoonX full release is September 1, 2026.

This gate operationalizes the current TycoonX Privacy Policy for browser and app technologies that store information on, or access information from, a user's device. It is intentionally separate from the GDPR legal-basis analysis. A technology can trigger German device-access consent rules even when the information itself is not personal data.

This document is an implementation and release checklist. It does not replace the canonical English TycoonX Privacy Policy, Terms of Service, Purchases & Refunds Policy, or Community Standards. If implementation review reveals a material new public data practice, update the canonical English Privacy Policy first and reopen all 25 localized Privacy documents in the required locale order.

## 1. Core German rule

German TDDDG § 25 protects information stored in or accessed from an end user's terminal equipment.

Release rule:

- storing information on a user's device or accessing information already stored there requires the user's informed consent unless a statutory exception applies;
- the rule is not limited to browser cookies;
- the rule can apply to mobile apps, SDKs, local storage, device identifiers, advertising identifiers, fingerprinting signals and similar device-access operations;
- personal-data status is not the threshold for § 25. Device access can require consent even when the accessed information is not personal data;
- if the resulting information is personal data, the subsequent processing must separately satisfy the GDPR or other applicable data-protection law.

Do not treat a GDPR legitimate-interest assessment as a substitute for a consent requirement under TDDDG § 25.

## 2. Narrow exceptions

Consent is not required under TDDDG § 25(2) only where the actual storage/access fits a statutory exception.

The two current exceptions are:

1. the sole purpose is carrying out transmission of a communication over a public telecommunications network; or
2. the storage/access is strictly necessary to provide a digital service expressly requested by the user.

For TycoonX, "strictly necessary" must be assessed per technology and purpose. It must not be used as a label for everything that is useful to CK-Labs.

Likely candidates for a necessity analysis can include, depending on the actual implementation:

- authentication/session continuity that is genuinely needed to keep the user signed in;
- security or anti-abuse device access that is genuinely required to provide a requested login, purchase, support or account-security function;
- local preferences explicitly requested by the user when the device storage is needed to remember that choice;
- purchase-state or entitlement continuity that is genuinely required to complete or restore a user-requested transaction; and
- anti-bot protection on a support form when the relevant device access is genuinely necessary to keep the requested form functional and secure.

The following must not be declared strictly necessary merely because they are commercially useful:

- advertising profiling;
- cross-service tracking;
- non-essential analytics;
- attribution or campaign measurement that is not strictly necessary to deliver the requested service;
- fingerprinting for marketing or audience building; or
- optional experimentation/personalization that the user did not request.

A technology with multiple purposes must be assessed by its real behavior. Do not hide an optional analytics or advertising purpose inside an otherwise necessary SDK.

## 3. Required device-access inventory

Before release and after every material SDK/provider change, maintain a dated inventory covering both TycoonX applications and the CK-Labs TycoonX web/support surfaces.

For every first-party or third-party technology that can touch the user's terminal equipment, record:

- technology/SDK/provider name and version;
- platform: iOS, Android, web, support site or other surface;
- exact storage/access operation;
- information read, written or derived;
- purpose or purposes;
- whether data leaves the device;
- recipient/provider if data leaves the device;
- retention or device-storage lifetime where applicable;
- whether the operation occurs before login, after login, only during purchase, only during support, or in another state;
- TDDDG § 25 basis: consent, § 25(2)(1), or § 25(2)(2);
- separate GDPR legal basis if personal data is processed;
- how consent is obtained where required;
- how consent can be withdrawn;
- what happens when consent is refused; and
- evidence used to verify the SDK's real behavior, not only the vendor's marketing description.

Unknown behavior is a release blocker for an optional SDK. Disable or remove the SDK until its behavior is understood.

## 4. Consent quality

Where TDDDG § 25 consent is required, TycoonX or the responsible CK-Labs web surface must obtain consent before the optional storage/access occurs.

The consent must be based on clear and comprehensive information and satisfy the applicable GDPR consent standard. At minimum:

- no pre-checked boxes or default-on optional tracking;
- no optional SDK should initialize and access the device before the required consent exists;
- accepting and refusing optional access must both be genuine choices;
- purpose descriptions must be understandable to an ordinary player;
- third parties must be identified or otherwise disclosed as required;
- relevant storage/access duration must be disclosed where required;
- consent must be as granular as applicable law requires;
- withdrawal must be possible for future storage/access without an unreasonable obstacle; and
- withdrawal must stop future optional access for the withdrawn purpose and update the consent state used by downstream SDKs.

Do not infer TDDDG consent from merely opening TycoonX, creating an account, accepting the Terms, buying Diamonds, buying 30-Day VIP, buying Lifetime VIP, or continuing to use the Service.

A purchase must never be conditioned on optional advertising or analytics consent unless a separate lawful basis genuinely permits that design.

## 5. Consent records and versioning

Maintain evidence sufficient to demonstrate the consent state without creating an unnecessary tracking system.

Where applicable record:

- consent decision and purpose;
- consent-text/version identifier;
- timestamp;
- platform/surface;
- withdrawal or change timestamp; and
- enough technical context to prove which SDK/purpose configuration the decision controlled.

Do not store more identity/device information than necessary merely to prove consent.

If the purpose, third party, device-access behavior or consent language changes materially, determine whether fresh consent is required before the new optional access starts.

## 6. Website and support-form review

The current `contact-form-app` dependency manifest includes `@marsidev/react-turnstile`, and `app/ContactForm.tsx` renders Cloudflare Turnstile on the message step before a support message can be submitted.

Before September 1, 2026, confirm and document the actual Turnstile behavior for the deployed CK-Labs configuration, including any cookies, local storage, browser/device information or other terminal-equipment access.

If the relevant access is relied on as strictly necessary under TDDDG § 25(2)(2), retain a short necessity assessment explaining why the anti-bot function is required for the user-requested support form and why a less intrusive configuration is not reasonably sufficient.

Do not automatically extend that assessment to unrelated analytics, advertising, attribution or tracking technologies on the same website.

If Turnstile or another provider changes behavior materially, reassess the § 25 classification before deploying that change.

## 7. Native mobile app review

The same device-access analysis applies to TycoonX mobile code and embedded third-party SDKs.

Review at least:

- local storage and shared preferences used by first-party code;
- advertising identifiers and app-set or vendor identifiers;
- device/hardware identifiers;
- fingerprinting or anti-fraud device signals;
- analytics/crash SDK identifiers and persistent installation IDs;
- attribution/deep-link SDKs;
- push/notification identifiers;
- authentication SDKs;
- purchase SDKs;
- anti-cheat/security SDKs;
- remote-config/experimentation SDKs; and
- any webview or embedded browser storage.

An operating-system permission does not automatically replace TDDDG consent. Conversely, a TDDDG consent screen does not replace an iOS/Android runtime permission where the platform requires one. Both layers must be satisfied when both apply.

## 8. Apple privacy overlay

For iOS releases:

- App Tracking Transparency permission must be obtained before tracking or access to Apple's advertising identifier where Apple's rules require ATT;
- denying ATT must be respected and must not be bypassed through fingerprinting;
- Apple's current required-reason API rules and privacy-manifest declarations must match the actual use of covered APIs, including third-party SDK behavior; and
- a privacy-manifest declaration is not itself TDDDG consent and does not legalize optional device access that requires consent under German law.

Do not use device signals to reconstruct an advertising/tracking identity after the user refuses ATT or resets an identifier.

## 9. Google Play / Android privacy overlay

For Android releases:

- Play Console Data Safety disclosures must match actual first-party and third-party SDK data handling;
- access to sensitive permissions/APIs must be limited to disclosed, implemented and permitted purposes;
- user refusals of non-critical sensitive permissions must be respected without manipulation;
- Advertising ID and other device identifiers must be used in accordance with current Google Play rules, including reset/opt-out behavior; and
- Play policy disclosure or Android permission approval does not replace TDDDG consent where § 25 separately requires it.

Do not bridge a reset/opt-out advertising identifier through another persistent identifier or fingerprinting technique in a way prohibited by platform rules or applicable law.

## 10. Analytics, diagnostics and security

Do not treat all telemetry the same.

For every analytics, diagnostics, crash, anti-fraud or anti-cheat signal, document:

- whether it reads/writes the terminal equipment;
- whether that access is strictly necessary to provide the expressly requested TycoonX service;
- whether a less intrusive configuration exists;
- whether the provider generates a persistent identifier;
- whether the signal is later reused for advertising, profiling or unrelated purposes; and
- the separate GDPR legal basis where personal data is processed.

Security/fraud prevention can be a strong necessity or legitimate-interest use case, but that label is not automatic. The technical behavior and purpose must support it.

If an optional analytics SDK cannot be prevented from accessing the device before consent, do not ship that SDK to users for whom consent is required.

## 11. Paid products and entitlement integrity

TDDDG consent must remain separate from TycoonX purchase rights.

Refusing optional analytics/advertising consent must not:

- remove already purchased Diamonds;
- stop valid 30-Day VIP time;
- revoke Lifetime VIP;
- block a legally required restore/refund/withdrawal route; or
- be treated as fraud, chargeback abuse or entitlement abuse.

Necessary purchase validation and entitlement reconciliation may continue where lawfully justified, but optional tracking must not be disguised as necessary purchase validation.

Apple, Google Play and Xsolla transaction records remain separate authoritative evidence for payment/entitlement purposes under the existing TycoonX payment release gates.

## 12. Children and age-related safeguards

For minors or users subject to age-related platform controls:

- do not initialize optional advertising/tracking SDKs before the applicable consent/age requirements are satisfied;
- do not infer parental authorization for optional tracking merely from approval of a purchase;
- do not infer purchase authorization from privacy/tracking consent;
- preserve the stricter platform or legal rule where several rules overlap; and
- minimize age/parental data collected solely to apply these controls.

## 13. Provider and SDK change control

A provider or SDK update can silently change device-access behavior.

Before adopting a material SDK update:

1. review release notes and current privacy documentation;
2. compare privacy manifests/Data Safety declarations and permission changes;
3. inspect actual runtime behavior where proportionate and feasible;
4. update the device-access inventory;
5. reassess TDDDG § 25 and GDPR bases;
6. update consent controls before enabling new optional access; and
7. determine whether the canonical Privacy Policy needs a material update.

Do not rely indefinitely on a historical consent for a materially expanded purpose.

## 14. Release evidence

Before TycoonX full release on September 1, 2026, retain dated evidence showing:

- the current device-access/SDK inventory;
- which operations rely on consent and which rely on each § 25(2) exception;
- the exact consent UI and refusal path where consent is required;
- proof that optional SDKs do not access the terminal equipment before consent;
- proof that withdrawal stops future optional access;
- the current Apple privacy-manifest and ATT configuration;
- the current Google Play Data Safety/permission configuration;
- the deployed support site's Turnstile assessment; and
- confirmation that refusing optional consent does not alter Diamonds, 30-Day VIP or Lifetime VIP entitlement state.

## 15. Safe regression scenarios

Run non-production or privacy-safe checks for at least:

1. first launch with all optional consent refused;
2. first launch with selected optional purposes accepted;
3. withdrawal after prior consent;
4. app restart after refusal and after withdrawal;
5. SDK/provider update that adds a new device-access purpose;
6. iOS ATT denial while core TycoonX remains usable;
7. Android Advertising ID opt-out/reset behavior where relevant;
8. support-form use with Turnstile and no unrelated tracker initialization;
9. a valid Diamond purchase with optional analytics refused;
10. active 30-Day VIP with optional analytics refused; and
11. Lifetime VIP restore with optional analytics refused.

## 16. Canonical/localization trigger

The current canonical Privacy Policy already states that consent is requested separately where legally required, that merely using TycoonX is not consent, and that certain optional analytics/cookies require consent where applicable. This gate therefore operationalizes the existing public meaning.

If future review reveals a new material data/device-access practice that is not fairly described by the canonical Privacy Policy, update canonical English first and **reopen all 25 localized Privacy documents**. Resynchronize them in the required locale order before marking localization complete again.

## 17. Current legal references checked August 31, 2026

- German TDDDG § 25, protection of privacy in terminal equipment.
- German DSK orientation guidance for providers of digital services, including the narrow § 25 exceptions and the rule that personal-data status is not required for § 25 to apply.
- Directive 2002/58/EC Article 5(3) and CJEU C-673/17 (Planet49) on active consent and terminal-equipment storage/access.
- Apple App Tracking Transparency and required-reason API/privacy-manifest requirements.
- Google Play User Data and sensitive-permission/API requirements.

## Release decision

**Do not mark device-access/privacy parity complete until the actual TycoonX mobile builds and deployed CK-Labs web/support surfaces have been inventoried and tested.** Generic Privacy Policy wording is not evidence that an SDK behaves compliantly at runtime.
