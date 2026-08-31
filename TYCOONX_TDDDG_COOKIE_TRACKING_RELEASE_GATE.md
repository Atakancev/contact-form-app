# TycoonX TDDDG Cookie / Device-Storage Release Gate

**Status:** privacy and release implementation gate for CK-Labs  
**Last legal/source review:** August 31, 2026  
**Applies to:** TycoonX websites, the CK-Labs TycoonX webshop, support/contact pages, browser-based TycoonX surfaces, and app/SDK behavior that stores information on or accesses information from a user's terminal equipment.

This gate does not change the canonical public Privacy Policy. The Privacy Policy already states that TycoonX does not treat mere use of the Service as consent and that consent is used where legally required for optional processing such as certain marketing, cookies, analytics, or other optional features. This gate turns that public principle into a concrete German TDDDG and GDPR implementation checklist.

## 1. Current repository finding

As of August 31, 2026:

- `tyconx-privacy-policy.md` already distinguishes contract, legitimate-interest, legal-obligation, and consent processing and expressly says that merely using TycoonX is not consent where consent is legally required.
- `app/tyconx-privacy-policy/page.tsx` preserves the same high-level rule in rendered English legal copy.
- `app/ContactForm.tsx` embeds Cloudflare Turnstile through `@marsidev/react-turnstile` before a support/contact message can be submitted.
- `package.json` currently includes `@marsidev/react-turnstile` and does not itself prove whether other runtime scripts, hosting features, tag managers, SDKs, payment widgets, or infrastructure add terminal-storage access outside the package dependency list.

Therefore release readiness requires an actual runtime storage/access inventory. Do not assume that a package-list search proves the website or app is cookie-free.

## 2. German TDDDG baseline

The current German rule is **§ 25 TDDDG**, not the old TTDSG name.

Under § 25(1) TDDDG, storing information in a user's terminal equipment or accessing information already stored there generally requires consent based on clear and comprehensive information, with the information and consent following GDPR standards.

Consent is not required under § 25(2) only where one of the statutory exceptions actually applies, including:

1. storage/access whose sole purpose is carrying out transmission of a communication over a public telecommunications network; or
2. storage/access that is **strictly necessary** so the provider can make available a digital service expressly requested by the user.

Official current source:

- https://www.gesetze-im-internet.de/ttdsg/__25.html

The filename/URL used by the federal source still contains `ttdsg`, but the current statutory title is Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz, abbreviated **TDDDG**.

## 3. TDDDG and GDPR are two separate legal layers

For every browser/app storage or access operation, answer both questions separately:

1. **TDDDG question:** may CK-Labs or the third party store/access information on the terminal equipment without § 25 consent, or is consent required?
2. **GDPR question:** if personal data is then processed, what Article 6 legal basis and transparency/retention/rights rules apply to that processing?

A legitimate interest under GDPR does not automatically remove a § 25 TDDDG consent requirement.

Likewise, a § 25(2) TDDDG exception does not automatically create a GDPR legal basis for subsequent personal-data processing.

Do not use one generic `legitimate interests` statement to collapse both analyses.

## 4. Inventory every terminal-storage/access operation

Before release, keep a dated inventory covering at least:

- first-party cookies;
- third-party cookies;
- `localStorage`, `sessionStorage`, IndexedDB, Cache API, service-worker storage, and similar browser storage;
- authentication/session identifiers;
- security, rate-limit, bot-detection, anti-fraud, device-integrity, or abuse-prevention state;
- consent-management state;
- analytics identifiers and event SDK state;
- advertising/marketing identifiers or attribution state;
- referral/campaign identifiers;
- A/B testing or personalization identifiers;
- payment/checkout scripts and fraud-screening integrations;
- Xsolla-hosted or embedded checkout components used by the CK-Labs TycoonX webshop;
- Apple/Google web or account components if later embedded on CK-Labs-controlled web surfaces;
- push/notification identifiers where terminal access is involved;
- app SDK reads/writes to device identifiers, key-value storage, secure storage, clipboard, advertising identifiers, or similar terminal information where § 25 TDDDG can apply; and
- Cloudflare Turnstile and any Cloudflare pre-clearance or challenge state.

For each entry record:

- exact technology/vendor;
- domain or SDK;
- data/item name where known;
- purpose;
- whether it stores, reads, or does both;
- duration/lifetime;
- first party or third party;
- whether third parties receive/access the information;
- § 25(2) exception relied on, if any, with a short factual justification;
- consent purpose/category if consent is required;
- GDPR legal basis for resulting personal-data processing;
- retention/deletion behavior; and
- production owner.

## 5. Strictly necessary means actually necessary

Do not label a technology `strictly necessary` merely because it is useful, popular, improves conversion, reduces marketing cost, or makes analytics easier.

A § 25(2)(2) classification should be tied to a digital service the user actually requested and to storage/access that is strictly necessary to provide that requested service.

Examples that may be capable of qualifying depending on the actual implementation include:

- a session mechanism required to keep an authenticated user signed in;
- cart or checkout state required to complete a purchase the user requested;
- a load-balancing/security mechanism without which the requested service cannot safely be supplied; or
- a proportionate anti-abuse mechanism genuinely necessary to provide a public support form without it being overwhelmed by automated abuse.

Examples that normally need a separate consent analysis rather than being declared necessary by convenience include:

- audience measurement that is not indispensable to the requested service;
- marketing attribution;
- advertising profiling;
- cross-site tracking;
- optional personalization; and
- conversion experimentation unrelated to completing the user's requested transaction.

If a security or fraud technology performs additional analytics, advertising, cross-service profiling, or unrelated measurement, classify those additional purposes separately instead of extending the security exemption to everything the vendor does.

## 6. Consent design where § 25 consent is required

Where consent is required:

- do not write/read the optional technology before valid consent;
- require an active affirmative choice;
- do not use pre-ticked boxes or silence/inactivity as consent;
- describe the purposes clearly enough for an informed decision;
- identify relevant third-party access and storage duration/lifetime information as required;
- keep consent separable by materially different purposes where bundling would make it non-specific;
- do not hide refusal behind materially more burdensome navigation while presenting `Accept all` as the immediate route;
- do not repeatedly pressure a user who has refused optional tracking merely to wear down that refusal;
- do not condition core TycoonX gameplay, purchased Diamonds, valid one-time 30-Day VIP, valid Lifetime VIP, account access, support, or a completed purchase on optional tracking consent unless there is a separate lawful basis for that design; and
- make withdrawal available for the future as easily as consent was given where GDPR consent governs the related personal-data processing.

The CJEU's **Planet49** judgment, C-673/17, confirms that a pre-checked checkbox is not valid consent for cookie storage/access and that users must receive information including cookie duration and whether third parties may access the cookies.

Official source:

- https://eur-lex.europa.eu/legal-content/EN/SUM/?uri=CELEX:62017CJ0673

GDPR Article 7 additionally requires CK-Labs to be able to demonstrate consent and states that withdrawing consent must be as easy as giving it.

Official GDPR text:

- https://eur-lex.europa.eu/eli/reg/2016/679/oj

German DSK guidance for websites/apps remains a useful supervisory reference for consent/storage implementation:

- https://www.datenschutzkonferenz-online.de/media/oh/20221130_OH_Telemedien_2021_Version_1_1.pdf

## 7. Consent records and proof

Do not keep only a boolean such as `cookiesAccepted = true`.

Where consent is relied on, preserve enough evidence to reconstruct what the user actually chose, for example:

- consent-policy/banner version;
- timestamp;
- purpose/category selection;
- vendors or vendor-set version where relevant;
- locale;
- source surface;
- whether the user accepted all, selected purposes, or rejected optional storage;
- later withdrawal/change timestamp; and
- any re-consent event after a material purpose/vendor change.

Avoid retaining consent evidence longer than reasonably needed. Consent logs are not a justification for indefinite device/profile tracking.

## 8. Changes to vendors or purposes

A consent collected for one defined purpose/vendor configuration must not silently become consent for a materially different tracking purpose.

Reassess and, where required, obtain fresh consent before introducing or materially changing:

- advertising or retargeting;
- a new analytics provider;
- cross-service/cross-device profiling;
- a new advertising identifier;
- materially broader campaign attribution;
- a new third party receiving terminal information; or
- another purpose outside the scope of the original valid consent.

A backend vendor replacement that does not change the purpose, access, data categories, legal basis, or user-facing information may not always require new consent, but still requires a documented assessment.

## 9. TycoonX webshop and payment flow

Payment security and optional marketing must remain separated.

For every CK-Labs/Xsolla webshop release evidence sample:

1. identify which storage/access happens on CK-Labs-controlled pages before redirect/embedding;
2. identify which storage/access happens on Xsolla-controlled checkout pages or widgets;
3. distinguish strictly necessary checkout/session/fraud controls from optional analytics/advertising;
4. do not fire optional CK-Labs marketing pixels before consent merely because the user clicked `Buy`;
5. do not change the already confirmed TycoonX purchase price or paid entitlement because the user refuses optional tracking;
6. preserve the separate Apple, Google Play, and Xsolla merchant/payment role analysis; and
7. do not interpret an Apple/Google/Xsolla fraud decision as consent to CK-Labs marketing or analytics.

If Xsolla or another payment provider acts as an independent controller for some provider-side storage/processing, that does not authorize CK-Labs to misstate its own role or omit CK-Labs-controlled tracking from its own analysis.

## 10. Cloudflare Turnstile checkpoint for the current repository

`app/ContactForm.tsx` currently embeds a Turnstile widget before contact-form submission.

Cloudflare's current Turnstile documentation states that the widget runs client-side browser/security challenges and processes data needed for bot detection. Current Cloudflare documentation also shows that configuration matters:

- Turnstile **Ephemeral IDs** can operate without cookies or client-side storage;
- Cloudflare's mobile/WebView guidance states that cookies and local storage can be relevant to Turnstile operation in those environments; and
- Turnstile **pre-clearance** can set a `cf_clearance` cookie when configured.

Current Cloudflare sources:

- https://developers.cloudflare.com/turnstile/
- https://developers.cloudflare.com/turnstile/additional-configuration/ephemeral-id/
- https://developers.cloudflare.com/turnstile/reference/content-security-policy/
- https://developers.cloudflare.com/turnstile/get-started/mobile-implementation/

### P0 Turnstile release evidence

Before full production sign-off, preserve the actual Turnstile widget configuration used for TycoonX support, including:

- permitted hostnames;
- widget mode;
- whether pre-clearance is enabled and its clearance level;
- whether Ephemeral IDs are enabled/available;
- whether a `cf_clearance` or other terminal-storage item is created in the actual production flow;
- what browser/device/security signals are transmitted to Cloudflare;
- retention/provider documentation used for the privacy assessment; and
- the precise § 25 TDDDG classification and GDPR basis for CK-Labs' use of the service.

Do not assume `Turnstile is security` automatically proves the § 25(2) exception. Conversely, do not force a consent banner for a genuinely strictly necessary security mechanism merely because a third-party script is involved. Record the actual facts and legal classification.

## 11. Native app and SDK storage

§ 25 TDDDG is about terminal equipment, not merely browser cookies.

When TycoonX mobile builds read or write device information through SDKs, classify that behavior too. This can include analytics SDK identifiers, advertising identifiers, attribution SDKs, device-integrity signals, secure storage, keychain/keystore entries, or similar device data.

Apple App Tracking Transparency or Google Play privacy rules do **not** replace TDDDG/GDPR analysis where German law applies. Likewise, satisfying TDDDG does not by itself satisfy App Store or Google Play privacy disclosures.

Keep the legal and platform layers separate.

## 12. Purchased entitlements must not depend on optional tracking

A refusal or withdrawal of optional cookie/tracking consent must not by itself:

- delete purchased Diamonds;
- revoke purchased and unused Diamonds;
- end an active one-time 30-Day VIP early;
- revoke valid Lifetime VIP;
- block restore/reconciliation of a legitimate purchase;
- create a chargeback/fraud flag; or
- change a user's completed-purchase price.

A security restriction based on separate, lawfully processed fraud/security evidence remains possible. Do not relabel a tracking-consent refusal as fraud.

## 13. Children and age-related processing

Where a consent-based terminal technology also processes personal data of a child, run the relevant GDPR child-consent/parental-authority assessment separately where Article 8 or national rules apply.

Do not use a child-oriented flow to obtain optional analytics/advertising consent through confusing language or stronger pressure than is used for adults.

Age-gating, youth-protection, App Store/Google Play age controls, and TDDDG consent remain distinct compliance questions.

## 14. Privacy notice parity

The canonical Privacy Policy already preserves the key high-level rule that consent is required for optional processing where law requires it and that mere use of TycoonX is not consent.

Release evidence must still show that the actual cookie/device-storage notice, preference interface, and provider disclosures match the live implementation.

If CK-Labs later adds a materially new public privacy meaning, such as named advertising providers, cross-site profiling, materially new cookie purposes, or a new data-sharing purpose, update the canonical English Privacy Policy and then reopen only the Privacy document across the 25 localized legal hubs in the required locale order.

Do not reopen the completed localization queue merely to add internal implementation detail that does not change the public legal meaning.

## 15. Prohibited shortcuts

Do not:

- call all cookies `necessary`;
- call all security scripts `consent-free` without analysis;
- claim GDPR legitimate interest overrides § 25 TDDDG;
- load optional analytics before the user's choice and then try to treat later rejection as withdrawal;
- use a pre-selected consent control;
- make refusal materially harder by design while keeping acceptance immediate;
- treat continued browsing as consent;
- block paid entitlement restoration because optional analytics consent is absent;
- preserve old consent after a materially different tracking purpose is introduced;
- infer consent from Apple, Google Play, or Xsolla payment acceptance;
- assume a payment-provider cookie policy covers CK-Labs-controlled scripts; or
- describe TycoonX as beta or use displayed `TyconX` branding.

## 16. Minimum release evidence package

For September 1, 2026 production readiness, preserve:

- dated browser storage inventory for TycoonX public/legal/support/webshop surfaces;
- dated mobile SDK/device-storage inventory for the shipped TycoonX builds;
- actual Turnstile production configuration and § 25/GDPR assessment;
- screenshots or test evidence showing the state before consent, reject/decline state, granular settings where used, acceptance, and withdrawal/change path;
- network/storage evidence showing optional technology does not fire before consent;
- evidence that checkout and paid entitlement restoration still function where optional tracking is refused;
- vendor/purpose/duration/third-party-access disclosures used by the consent interface;
- consent version/log schema where consent is relied on; and
- a re-review trigger whenever tracking, analytics, attribution, payment widgets, fraud tooling, app SDKs, or consent design materially changes.

## 17. Canonical product invariants

Nothing in this gate changes these TycoonX rules:

- Diamonds are a virtual in-game entitlement and are not cash, bank deposits, or investments.
- One-time 30-Day VIP is not an automatically renewing subscription.
- Lifetime VIP is a one-time limited-window promotional offering that may be withdrawn from sale, may never return, and creates no expectation of continuous availability for future buyers.
- Future prices, bundles, currencies, taxes, regional prices, and promotions may change for future purchases subject to law and platform rules.
- A later price decrease does not automatically create a refund, credit, or price-match right, and a later price increase does not create an extra charge on an already completed one-time purchase, except where mandatory law requires otherwise.
- Mandatory consumer, privacy, withdrawal, conformity, update, liability, and other non-waivable rights remain intact.

## 18. Release decision

Do not mark the TycoonX German web/privacy storage layer production-ready merely because a cookie banner exists.

Release-ready means CK-Labs can show:

1. what each live website/app technology reads or writes on terminal equipment;
2. why each consent-free item qualifies for § 25(2), if relied on;
3. that optional storage/access is held back until valid consent;
4. that the later GDPR processing has its own valid legal basis and transparency;
5. that users can refuse/withdraw optional processing without losing legitimate paid entitlements or core requested service;
6. that the current Turnstile configuration has been classified using its real production settings; and
7. that public Privacy wording remains accurate.

If those facts cannot be demonstrated, keep the relevant optional tracking disabled until they can.