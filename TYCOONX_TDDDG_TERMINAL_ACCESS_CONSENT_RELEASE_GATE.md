# TycoonX TDDDG Terminal-Access and Consent Release Gate

**Status:** production/legal QA gate for CK-Labs.  
**Checked against current German law and regulator guidance:** September 2, 2026.  
**Public canonical impact:** this gate operationalizes the existing TycoonX Privacy Policy statement that consent is requested separately where legally required. It does **not** materially change the canonical Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards by itself.

## 1. Why this gate exists

TycoonX is a mobile and web digital service. German privacy compliance is not limited to GDPR analysis after data reaches CK-Labs servers.

Section 25 of the German **Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG)** separately regulates the act of:

- storing information on an end user's terminal equipment; or
- accessing information already stored on that terminal equipment.

This applies to websites **and apps** and is not limited to classic browser cookies. The German Data Protection Conference (DSK) expressly treats mobile apps and technologies such as device identifiers, advertising identifiers, local or session storage, fingerprinting and comparable terminal-access techniques as potentially within the rule.

The protection is about terminal privacy. Personal-data status is not a prerequisite for Section 25 TDDDG to apply. If personal data is then processed after the terminal access, GDPR legality must be assessed separately as the second step.

**Release rule:** do not ship a new or changed TycoonX SDK, analytics feature, fraud tool, attribution tool, advertising technology, web cookie, local-storage mechanism, fingerprinting technique or device-access feature for German users until the concrete storage/access operation has been classified under this gate.

## 2. Current legal baseline

### 2.1 Default rule: consent before non-exempt terminal access

Section 25(1) TDDDG permits storage of information in terminal equipment or access to already stored information only where the end user has consented on the basis of clear and comprehensive information. The information and consent must satisfy the GDPR consent framework.

The consent must exist **before** the consent-requiring storage/access occurs.

TycoonX must not:

- initialize an optional analytics or tracking SDK so that it reads or writes terminal information before consent and then ask afterwards;
- create optional identifiers before consent merely because they are not immediately uploaded;
- treat opening the app, continuing to play, scrolling, closing a banner, silence or inactivity as consent;
- bundle unrelated optional terminal-access purposes into acceptance of the Terms or purchase terms;
- claim that a privacy-policy link alone is consent; or
- assume that an OS permission dialog automatically supplies all legally required consent for unrelated purposes.

### 2.2 The two statutory exceptions are narrow

Consent under Section 25(1) is not required only where the concrete operation falls within Section 25(2):

1. the **sole purpose** of the storage/access is carrying out transmission of a communication over a public telecommunications network; or
2. the storage/access is **strictly necessary** so the provider can make available a digital service expressly requested by the user.

The second exception is not a generic "legitimate interests" exception.

Economic usefulness, revenue optimization, analytics convenience, attribution value, anti-churn value, advertising value or the fact that a provider SDK is commercially standard do **not** by themselves make terminal access strictly necessary.

### 2.3 Section 25 TDDDG and GDPR are separate layers

For each relevant mechanism, CK-Labs must record two distinct answers:

1. **TDDDG:** may TycoonX store/access the information on the terminal, and if so on what Section 25 basis?
2. **GDPR:** if personal data is subsequently processed, what GDPR legal basis, transparency, retention, recipient, transfer and rights rules apply?

A GDPR legitimate-interest assessment cannot cure terminal access that required consent under Section 25 TDDDG.

Likewise, valid Section 25 terminal access does not automatically create a GDPR legal basis for every downstream use.

## 3. Required terminal-access inventory

Maintain a dated inventory for every production TycoonX web and mobile release. At minimum review:

| Technology / operation | Examples to examine | Section 25 decision required? |
| --- | --- | --- |
| Browser cookies | session, preferences, analytics, attribution, fraud, checkout | Yes |
| Web storage | localStorage, sessionStorage, IndexedDB or similar | Yes |
| Mobile app local storage | persistent identifiers, SDK state, install IDs, attribution state | Yes |
| Device / hardware identifiers | advertising ID, vendor/device IDs, hardware-derived identifiers | Yes |
| Fingerprinting | device/browser configuration combined into a stable identifier | Yes |
| SDK-generated identifiers | analytics, crash, attribution, fraud, engagement SDK IDs | Yes |
| Clipboard / contacts / SMS / call information | where a feature attempts access | Yes, plus platform permission/legal review |
| Bluetooth / beacon information | where accessed by a feature or SDK | Yes, plus platform permission/legal review |
| Remember-me / persistent login state | long-lived authentication storage | Yes |
| Consent-state storage | storing the user's consent choice | Yes, classify narrowly |
| Xsolla or other checkout cookies | CK-Labs page, embedded handoff, provider-controlled checkout | Yes, role and domain boundary required |

The inventory must identify:

- exact app/web component and SDK version;
- information written or read;
- terminal location or API involved;
- purpose;
- first access time;
- duration / persistence;
- first party or third party able to read it;
- whether a stable or unique identifier is involved;
- Section 25(1) consent or the exact Section 25(2) exception relied on;
- separate GDPR basis if personal data is processed downstream;
- user-facing disclosure/consent control where applicable; and
- evidence owner and review date.

## 4. Strict-necessity decision test

Do not classify an operation as strictly necessary merely because the app contains the feature.

The DSK's current approach is granular. Ask what **specific function** the user actually requested, then whether the particular storage/access is technically indispensable to providing that function.

For each claimed Section 25(2)(2) operation, record:

1. **Requested function:** what did the user expressly request at that moment?
2. **Timing:** does the access begin only when the function is actually used?
3. **Content:** is only the minimum information needed stored/read?
4. **Duration:** does it persist only as long as needed?
5. **Audience:** who can read or reuse it?
6. **Alternative:** can the requested function work without this terminal access or with a materially less intrusive method?
7. **Separate purpose:** is the same identifier also used for analytics, advertising, cross-service profiling, product improvement or another provider purpose?

If a less intrusive technically workable method provides the same requested function, the broader operation should not be labelled strictly necessary without documented legal review.

### Examples

Potentially supportable as strictly necessary **only when the concrete implementation actually meets the test**:

- a short-lived session/authentication token needed to keep a user securely signed in after they request account access;
- user-oriented security state genuinely needed to protect that requested login/session against repeated authentication abuse;
- checkout/session state activated when the user actually starts a TycoonX purchase flow and required to complete that requested transaction;
- minimal state needed to remember a user's explicit consent choice without creating an unnecessary long-lived unique tracking identifier.

Do not automatically classify as strictly necessary:

- general product analytics;
- retention analytics;
- campaign attribution;
- advertising or cross-app tracking;
- an SDK's persistent install ID merely because the SDK creates one by default;
- broad device fingerprinting for generic fraud scoring without a granular necessity analysis;
- long-lived "remember me" behavior that the user did not request;
- third-party security tracking that serves the third party's wider network rather than the specific TycoonX function requested by the user; or
- any optional personalization that can be provided without unique device identification.

## 5. Consent UX requirements

Where Section 25(1) consent is required, TycoonX must provide a real choice.

### Before access

The optional storage/access must remain blocked until valid consent exists.

### Clear information

Before the choice, the user must be able to understand at least:

- who is accessing/storing terminal information;
- what type of information is accessed/stored;
- the specific purpose;
- material duration/persistence;
- whether a third party can access or reuse it; and
- the relevant downstream personal-data purpose where applicable.

### Affirmative action

Consent requires an unambiguous affirmative action. No pre-ticked boxes, silence, inactivity or inferred acceptance from normal gameplay.

### Reject must be genuinely available

Where a consent layer blocks normal access, refusal of optional storage/access must not require materially more effort than acceptance. A clear first-layer acceptance button paired with a hidden multi-step refusal path is a legal release risk.

### Granularity

Do not force one blanket consent where materially distinct optional purposes should be separable. Examples include analytics, personalized advertising/attribution, optional personalization and provider-specific tracking.

### Withdrawal

Withdrawal must be as easy as giving consent. If TycoonX obtains the choice inside the app or website, the user must have a directly reachable in-app or web method to change that choice without being forced to email Support or search through unrelated documents.

Withdrawal stops future consent-based terminal access and associated consent-based downstream processing as applicable. It does not retroactively make lawful earlier access unlawful.

### Re-consent after material change

Do not silently reuse an old consent after a material change to purpose, SDK/provider, terminal information, recipients, persistence or tracking behavior that moves the processing beyond the original specific informed choice.

## 6. Mobile-app rules

Section 25 TDDDG is not a browser-cookie-only rule.

For TycoonX iOS and Android builds, review at minimum:

- advertising identifiers;
- vendor/app-scoped identifiers;
- SDK install IDs;
- device fingerprint components;
- app-local persistent storage;
- diagnostic SDK identifiers;
- attribution parameters;
- push token use where combined with additional profiling;
- OS/device settings read by third-party SDKs; and
- any permission-protected device data.

A platform permission and a TDDDG consent question can overlap, but they are not interchangeable by default.

## 7. Apple boundary

Apple's App Tracking Transparency (ATT), App Privacy disclosures and privacy manifests are separate platform requirements.

### ATT

If TycoonX or an included SDK tracks a person across apps/websites owned by other companies as Apple defines tracking, CK-Labs must follow ATT requirements and request permission before tracking.

A granted ATT permission does **not** automatically prove that every German Section 25 storage/access purpose has valid consent. The TycoonX disclosure and consent flow still needs to cover the actual TDDDG operation where Section 25(1) applies.

An ATT denial also must not be bypassed by alternative identifiers, fingerprinting, provider-side matching or another SDK route that recreates prohibited tracking.

### Privacy manifests and SDKs

TycoonX must keep Apple privacy declarations accurate for first-party and relevant third-party SDK behavior. Before an SDK update, inspect whether the SDK begins collecting new data, contacting tracking/profiling domains, generating new identifiers or using required-reason APIs differently.

An SDK privacy manifest is evidence, not a substitute for CK-Labs' own legal classification.

## 8. Google Play boundary

Google Play's User Data and SDK requirements are separate from German TDDDG compliance.

TycoonX must:

- keep Google Play Data safety disclosures accurate;
- provide in-app prominent disclosure and affirmative consent where Google policy requires them;
- remain responsible for third-party SDK collection behavior; and
- avoid collecting sensitive or unexpected data before the applicable disclosure/consent step.

An Android runtime permission does not automatically authorize an unrelated analytics, attribution or advertising terminal-access purpose.

Likewise, a Section 25(2) strict-necessity conclusion does not automatically satisfy every Google Play disclosure, permission or sensitive-data rule.

## 9. Xsolla and TycoonX webshop boundary

The TycoonX webshop and an Xsolla-hosted payment flow may involve different actors, domains and cookie/storage configurations.

Before production release, record separately:

1. cookies/storage created on CK-Labs-controlled TycoonX pages before provider handoff;
2. storage/access used only after the user initiates checkout;
3. Xsolla-controlled checkout-domain storage;
4. analytics, attribution or campaign technologies added around checkout;
5. whether any embedded/iframe integration causes a third party to access terminal information before the user chooses checkout; and
6. which party is responsible for each disclosure/consent control.

Do not assume that Xsolla's own cookie or privacy notice cures a CK-Labs-controlled pre-handoff access that independently required consent.

Do not assume that every checkout cookie requires consent either. A narrowly configured checkout/session mechanism can potentially satisfy Section 25(2)(2) once the user actually requests the payment function. The decision must match the real implementation.

## 10. Analytics, crash reporting and anti-fraud

### Analytics

Optional audience measurement, feature analytics, retention analytics and attribution require a Section 25 classification even where CK-Labs believes the downstream GDPR processing may rely on legitimate interests.

### Crash reporting

Do not automatically classify all crash-reporting SDK terminal access as strictly necessary. Review whether the SDK reads/writes persistent identifiers, device configuration or unrelated analytics state and whether a more limited diagnostic configuration is available.

### Fraud / anti-cheat / account security

Protecting paid entitlements, accounts and the TycoonX economy is important, but "security" is not a magic Section 25 exemption.

A user-oriented security mechanism needed to protect the requested login/session can be strictly necessary in appropriate circumstances. A broad persistent fingerprint reused across unrelated customers/services, or a provider's network-wide profiling identifier, requires a separate granular analysis.

If a particular fraud-control access is genuinely indispensable to complete a user-requested paid transaction, document why the exact data, timing, duration and recipients are technically necessary.

## 11. Consent refusal must not damage paid entitlements

Refusing or withdrawing consent for **optional** terminal access must not itself:

- delete or duplicate legitimately purchased **Diamonds**;
- remove unrelated legitimately acquired Diamond balances;
- restart, pause, extend or duplicate the original one-time **30-Day VIP** period;
- create an expiry, downgrade or conversion in a valid **Lifetime VIP** entitlement;
- convert Lifetime VIP into 30-Day VIP;
- replay Apple App Store, Google Play or Xsolla purchase fulfillment;
- manufacture a refund, chargeback, fraud or exploit finding; or
- block core paid functionality merely to pressure the user into optional analytics/tracking consent.

If a specific paid function genuinely cannot technically operate without a particular terminal access, classify that function under the strict-necessity test and explain the requirement narrowly. Do not bundle unrelated analytics or tracking into that necessity claim.

Lifetime VIP remains a one-time limited-window promotional entitlement that may be offered only during selected genuine sales windows, may be withdrawn from future sale and may never return. TDDDG consent handling does not alter those commercial characteristics or any mandatory consumer rights.

## 12. Consent records and minimization

CK-Labs should be able to prove what consent mechanism and information were presented without creating unnecessary new tracking.

Retain proportionate evidence such as:

- consent configuration/version;
- categories/purposes offered;
- timestamp or decision event where needed;
- app/web version;
- relevant provider/SDK configuration; and
- withdrawal/change event where appropriate.

Do not assume a long-lived unique consent-cookie ID is automatically necessary. The DSK specifically warns that consent evidence can often be maintained without creating an excessive persistent unique identifier.

Preserve historic consent copy/configuration for the period reasonably necessary to demonstrate what the user was shown when a dispute concerns the validity of the consent.

## 13. Release blockers

Block the relevant German release/configuration until resolved if any of the following is true:

- optional terminal storage/access starts before consent;
- the team cannot identify what an SDK writes or reads from the device;
- Section 25(2)(2) is claimed solely because analytics/security is commercially useful;
- a stable identifier is created for an optional purpose before consent;
- acceptance is easy but refusal is hidden or materially harder;
- withdrawal requires Support/email while consent was given directly in the app/site;
- a third-party SDK reuses TycoonX terminal data for independent advertising/profiling without an appropriate legal/platform basis;
- ATT denial is bypassed by another tracking method;
- Google Play/Apple disclosures do not match shipped SDK behavior;
- Xsolla/CK-Labs cookie responsibility is unknown in the actual German checkout path;
- consent refusal changes paid entitlements or game balances; or
- a new SDK version materially changes terminal access without a fresh review.

## 14. Release evidence packet

For each material release or SDK/provider change, retain:

1. terminal-access inventory diff;
2. Section 25 basis for each new/changed operation;
3. strict-necessity analysis where Section 25(2)(2) is used;
4. screenshots/video of the consent and refusal flow where consent is required;
5. evidence that optional SDK access is blocked before consent;
6. evidence that withdrawal is directly accessible and effective;
7. Apple ATT/App Privacy/privacy-manifest parity evidence where applicable;
8. Google Play Data safety/User Data/SDK parity evidence where applicable;
9. Xsolla checkout cookie/storage responsibility map where applicable;
10. network/storage inspection showing actual runtime behavior;
11. provider and SDK versions tested;
12. evidence that Diamonds, 30-Day VIP and Lifetime VIP remain unaffected by optional-consent refusal/withdrawal; and
13. reviewer/date and any follow-up trigger.

## 15. Regression scenarios

1. **Fresh German web visitor, analytics rejected:** optional analytics cookies/local storage never initialize; the legal page and ordinary site remain usable.
2. **Fresh German mobile install, analytics rejected:** optional SDK install identifier is not created/read before consent where Section 25(1) applies.
3. **Consent accepted:** only the purposes actually disclosed are enabled.
4. **Consent withdrawn:** future optional access stops without deleting legitimate gameplay or paid entitlements.
5. **SDK update adds persistent device ID:** release is blocked until Section 25 and platform declarations are re-reviewed.
6. **ATT denied on iOS:** TycoonX does not recreate cross-app tracking through fingerprinting or an alternate identifier.
7. **Android permission denied:** core gameplay continues where that permission is not technically necessary.
8. **User logs in:** a narrowly necessary session token can function without enabling unrelated analytics.
9. **Remember-me option not chosen:** TycoonX does not silently create unnecessarily long-lived authentication tracking state.
10. **Failed-login protection:** security state is limited to what is actually needed for the requested account-security function.
11. **Broad third-party fraud fingerprint:** it is not labelled strictly necessary without granular evidence.
12. **User opens webshop but does not start checkout:** payment-only terminal access does not initialize prematurely merely because a payment feature exists elsewhere on the page.
13. **User starts Xsolla checkout:** narrowly necessary payment/session storage can be activated where the concrete Section 25(2)(2) test is satisfied.
14. **Xsolla page has its own optional analytics:** provider-controlled consent responsibility is documented and CK-Labs does not misrepresent it as a CK-Labs consent.
15. **Consent banner accept/reject:** both choices are clearly visible and materially equivalent in effort when the banner blocks access.
16. **Historic consent dispute:** CK-Labs can identify what purposes/provider/version the user was shown without relying on an excessive permanent tracking ID.
17. **Diamond purchase after analytics refusal:** valid purchase delivery works and no unrelated Diamond balance is removed.
18. **30-Day VIP after analytics refusal:** the original one-time period is delivered normally and is not restarted by later consent changes.
19. **Lifetime VIP after analytics refusal:** valid Lifetime VIP remains lifetime under its contract and is not given an artificial expiry.
20. **Account compromise investigation:** necessary security processing may continue on its own lawful basis, but optional tracking consent is not fabricated from the incident.
21. **Crash-reporting provider adds advertising functionality:** release is blocked until the new purpose and terminal access are separated or consented to as required.
22. **Consent purpose changes materially:** old consent is not silently reused for the new purpose.
23. **Consent refusal:** it is not treated as fraud, abuse, regional-price abuse, chargeback risk or exploit behavior.
24. **Business/provider migration:** a successor SDK/provider does not inherit old consent automatically where the original informed choice no longer covers the new actor or purpose.

## 16. Canonical and localization rule

The canonical TycoonX Privacy Policy already states that:

- consent is requested separately where legally required;
- merely using TycoonX is not treated as consent to processing that requires consent;
- consent can be withdrawn for future processing; and
- optional cookies/analytics/other optional features use consent controls where applicable.

This gate gives production meaning to those existing promises. It does **not materially change** the canonical public legal meaning by itself, so the completed 25-locale Privacy queue is not reopened in this run.

If future implementation requires the public Privacy Policy to add a materially new terminal-access purpose, new provider role, new tracking practice, or new consent consequence, update the canonical English Privacy Policy first and then resynchronize **Privacy only** across the 25 locales in the mandated order.

## 17. Brand and release invariants

- Player-facing/legal prose must always display **TycoonX**.
- Technical routes or filenames containing `tyconx` may remain when changing them could break URLs.
- TycoonX is in full release from **September 1, 2026**. This gate must not describe the live service, purchases, users, VIP, Diamonds, rewards or legal terms as beta.

## 18. Current official references

- German TDDDG, especially Sections 25 and 28: https://www.gesetze-im-internet.de/ttdsg/
- DSK, *Orientierungshilfe der Aufsichtsbehörden für Anbieter:innen von digitalen Diensten*, Version 1.2, November 2024: https://www.datenschutzkonferenz-online.de/media/oh/OH_Digitale_Dienste.pdf
- Apple App Review Guidelines / privacy requirements: https://developer.apple.com/app-store/review/guidelines/
- Apple privacy manifests: https://developer.apple.com/documentation/bundleresources/describing-data-use-in-privacy-manifests
- Google Play User Data policy: https://support.google.com/googleplay/android-developer/answer/10144311
- Google Play SDK requirements: https://support.google.com/googleplay/android-developer/answer/13323374

## 19. Risk note

A violation of Section 25(1) is an administrative offence under Section 28 TDDDG and the statute permits a fine of up to **EUR 300,000** for the relevant Section 25 offence category. This is separate from any GDPR, consumer-law, contractual or platform consequences that may arise from the same implementation.

The purpose of this gate is to prevent accidental overreach while preserving CK-Labs' lawful ability to use genuinely necessary session, security, checkout and service technologies and to operate TycoonX without turning optional analytics or tracking into a condition for unrelated paid value.