# TycoonX EU/German Device Storage, Tracking & Consent Release Gate

Last reviewed: 2026-09-02  
Owner: CK-Labs  
Scope: TycoonX mobile apps, CK-Labs-controlled TycoonX websites/webshop entry surfaces, analytics/crash/attribution SDKs, browser cookies, local storage, device identifiers, consent banners/settings, Apple AppTrackingTransparency, Google Play User Data requirements, and Xsolla handoffs.

## Purpose

TycoonX may use device storage and technical telemetry where lawful and proportionate. The compliance risk is treating every cookie/SDK as automatically necessary, treating GDPR legitimate interest as permission to bypass device-access consent, firing optional SDKs before a valid choice, making rejection harder than acceptance, or assuming Apple/Google/Xsolla controls remove CK-Labs' own obligations.

This gate keeps four questions separate:

1. may TycoonX store information on or access information from the user's terminal device under German TDDDG § 25 / the EU ePrivacy framework;
2. if personal data is then processed, what GDPR legal basis and transparency duties apply;
3. what platform-specific permission or disclosure rules also apply; and
4. which party actually controls a provider-hosted checkout or tracking technology.

This is an operational release gate. It supplements the TycoonX Privacy Policy, Terms, Purchases & Refunds Policy, direct-marketing gate, platform rules, and mandatory law. It does not create a new paid product or change Diamonds, 30-Day VIP, or Lifetime VIP.

## P0 rules

### 1. TDDDG § 25 is the German terminal-device baseline

For German users, storing information in a user's terminal equipment or accessing information already stored there generally requires consent based on clear and comprehensive information under **TDDDG § 25(1)**.

The two statutory § 25(2) exceptions are narrow:

1. the sole purpose is carrying out transmission of a communication over a public telecommunications network; or
2. the storage/access is **strictly necessary** to provide a digital service expressly requested by the user.

Do not classify a technology as exempt merely because it is useful, common, revenue-supporting, security-branded, analytics-related, or included by an SDK vendor.

Official source: https://www.gesetze-im-internet.de/ttdsg/__25.html

### 2. The rule is about terminal-device access, not only personal data

The § 25 device-access question must be assessed even where the information stored or accessed is not itself obviously personal data. If the resulting information is personal data, the GDPR analysis applies in addition.

Do not collapse the two layers into one statement such as `legitimate interest under GDPR means no cookie consent is needed`.

The Court of Justice's Planet49 case also confirms that the ePrivacy device-storage rule is not limited to information that qualifies as personal data.

Official reference: CJEU C-673/17, Planet49.

### 3. Strict necessity must be assessed by concrete function

For every cookie, local-storage key, SDK storage/access operation, device identifier, pixel, web beacon, or equivalent technology, record:

- the exact technology/provider;
- the information stored/accessed;
- the concrete purpose;
- whether it is first- or third-party controlled;
- whether it runs before a consent choice;
- why the function is strictly necessary for a service the user expressly requested, if relying on § 25(2)(2);
- retention/lifetime where relevant; and
- the separate GDPR basis if personal data is processed.

A blanket category such as `functional`, `security`, `analytics`, or `fraud prevention` is not enough by itself.

### 4. Core service and optional functions must be separated

A user opening TycoonX does not automatically request every optional function embedded in the app or website.

Examples that may be capable of falling within a strict-necessity assessment when genuinely required include:

- session continuity needed for authenticated account access;
- a shopping-cart or payment-flow state once the user actually starts that requested function;
- narrowly configured security/fraud-prevention storage genuinely necessary to protect the requested service; or
- storing the user's consent choice itself where implemented proportionately.

Examples that are **not automatically necessary** merely because CK-Labs finds them useful include:

- behavioral analytics;
- A/B testing;
- advertising attribution;
- cross-service profiling;
- retargeting;
- session-replay tooling;
- heatmaps; or
- optional social/marketing integrations.

The German Data Protection Conference (DSK) specifically requires a granular assessment of websites/apps and warns that analytics or additional functions are not automatically part of the requested base service.

Current DSK reference: https://www.datenschutzkonferenz-online.de/media/oh/OH_Digitale_Dienste.pdf

### 5. Optional device access must stay off until valid consent

Where § 25(1) consent is required, the relevant storage/access must not start before valid consent.

Release behavior must be fail-closed:

- no optional analytics/advertising SDK should transmit or access device information before the required choice;
- a timeout, consent-manager failure, missing locale string, network error, or unknown state must not default to consent granted;
- `unknown`, `not asked`, `failed`, or `migration missing` must not be converted into `accepted`;
- changing providers must not silently reset a previous rejection to acceptance; and
- consent state must be applied before optional SDK initialization where technically necessary to prevent pre-consent processing.

### 6. Consent must be informed, specific, freely given, and demonstrable

Where consent is relied upon, apply the GDPR consent standard referenced by TDDDG § 25(1):

- clear, plain, accessible information;
- sufficiently specific purposes;
- an unambiguous affirmative action;
- no pre-ticked boxes or implied consent from scrolling/continued use;
- appropriate granularity where different purposes/providers materially differ;
- evidence sufficient to demonstrate the consent; and
- no bundling of optional tracking consent into Terms acceptance or purchase authorization.

Merely using TycoonX is not consent to optional tracking.

### 7. Reject must not be artificially harder than accept

The DSK's current guidance says consent and rejection choices should have equivalent communication effect and warns that requiring materially more clicks/attention to reject can undermine voluntariness.

TycoonX release baseline:

- if `Accept all` is offered on the first layer, provide a clear first-layer way to reject all consent-requiring purposes with substantially equivalent effort;
- do not label the rejection path ambiguously as `Settings or reject` when it merely opens another layer;
- do not use misleading color, contrast, button size, placement, countdowns, repeated nagging, or obstruction to steer acceptance;
- do not make refusal disable paid Diamonds, VIP, account security, purchase restoration, or the ordinary core game where optional tracking is not necessary for those functions.

### 8. Withdrawal must be as easy as giving consent

If TycoonX obtains device/privacy consent through an in-app or web consent interface, users must be able to revisit and withdraw the relevant consent without disproportionate friction.

Do not require account deletion, a support ticket, postal mail, or searching through long legal text as the only withdrawal route where consent was given directly in the product interface.

Withdrawal applies prospectively. It does not make prior lawful processing retroactively unlawful, but optional future storage/access and dependent processing must stop or reconfigure as required.

### 9. Consent records must be minimal and versioned

Keep enough evidence to demonstrate the choice without creating an unnecessary tracking identifier merely to prove consent.

Where relevant record:

- consent interface/version;
- purposes/vendor categories shown;
- accepted/rejected state;
- timestamp or version transition information;
- platform/surface; and
- enough account/device context to apply the choice accurately without excessive identification.

Do not retain a long-lived unique identifier solely because a consent framework makes it convenient if a less intrusive record can prove the process.

### 10. GDPR processing after device access needs its own basis

Passing the TDDDG § 25 device-access test does not automatically make later personal-data processing lawful.

For any resulting personal-data processing, separately document the GDPR basis, purpose limitation, minimization, retention, transparency, processor/controller roles, international-transfer safeguards where applicable, and data-subject rights.

Likewise, a valid GDPR legitimate-interest assessment does not by itself remove a § 25(1) device-access consent requirement.

### 11. Analytics must not be assumed necessary

TycoonX may use proportionate analytics, but release engineering must classify the actual implementation rather than the product label.

For each analytics/crash/performance tool, answer:

- does it write to/read from terminal equipment;
- does it use a persistent or resettable identifier;
- is data linked to a TycoonX account;
- is it shared with or reused by the provider for independent purposes;
- is it used for advertising/attribution/profiling;
- can the tool be configured without consent-requiring storage/access;
- what is the retention period; and
- does the Privacy Policy/App Store/Google Play disclosure match reality.

Crash reporting needed to diagnose a user-requested service is not automatically exempt from § 25 simply because it is labeled `crash`.

### 12. Apple AppTrackingTransparency is a separate platform gate

Apple's current rules require **AppTrackingTransparency (ATT)** permission when data collected from the app is used to track the user across apps or websites owned by other companies, subject to Apple's defined exceptions.

TycoonX must not:

- use IDFA or another identifier to work around an ATT denial;
- gate ordinary app functionality or paid entitlement access on granting ATT permission;
- incentivize or manipulate the user into allowing tracking in the ATT prompt; or
- assume a website consent can override an ATT denial for app-collected data used for tracking.

Apple's current definition of tracking includes linking app data such as user/device identifiers with third-party data for targeted advertising or advertising measurement, and can include third-party SDK behavior even where CK-Labs did not intend to use the SDK for tracking.

Official Apple references:
- https://developer.apple.com/app-store/user-privacy-and-data-use/
- https://developer.apple.com/app-store/app-privacy-details/

### 13. Apple App Privacy disclosures must match actual SDK behavior

Before each iOS release, CK-Labs must reconcile App Store Connect privacy disclosures against the actual app and integrated third-party SDKs.

Do not rely only on what TycoonX code intentionally calls. Apple requires developers to account for data collected by integrated third-party partners as well.

A provider/SDK update that changes data collection, linkage, tracking, or purpose can require an App Store privacy-answer update even when TycoonX player-facing features did not change.

### 14. Google Play User Data policy remains separate from legal consent

Google Play requires app developers to handle personal/sensitive user data consistently with its User Data policy and can require **prominent in-app disclosure and affirmative consent** when access, collection, use, or sharing may not be within the user's reasonable expectation.

Third-party SDK behavior remains CK-Labs' responsibility for Play-policy purposes. A vendor saying its SDK is `compliant` is not sufficient release evidence.

For every relevant Android SDK, retain evidence of:

- data accessed/collected/shared;
- purpose;
- default behavior before consent;
- whether prominent disclosure/consent is required under Play policy;
- Data safety declaration impact; and
- whether the SDK has functionality beyond the purpose CK-Labs actually needs.

Current Google Play reference: https://support.google.com/googleplay/android-developer/answer/13323374

### 15. Google consent tooling does not decide German legality for CK-Labs

Google UMP/Consent Mode can help implement consent state for Google products, but a Google SDK setting is not itself a legal determination that TDDDG/GDPR consent is or is not required.

If TycoonX uses Google Analytics/Firebase/Ads tooling, CK-Labs must configure consent states to match the lawful user choice and the actual product configuration.

Current Google app-consent reference: https://developers.google.com/tag-platform/security/guides/app-consent

### 16. Xsolla checkout has a separate provider privacy boundary

Xsolla currently publishes its own Cookie Policy for its sites/products, including essential, analytics/performance, functional, targeting cookies, privacy settings, local storage, and other tracking technologies.

Where the user is on a genuinely Xsolla-controlled checkout surface and Xsolla independently determines its cookies/privacy controls, Xsolla may carry its own controller/provider obligations for that surface.

But CK-Labs must still document:

- whether the TycoonX webshop page embeds Xsolla or merely redirects to it;
- which scripts/cookies/storage are loaded on the CK-Labs-controlled page **before** the user reaches Xsolla;
- whether CK-Labs receives tracking/analytics data back from Xsolla;
- whether CK-Labs configures or instructs optional Xsolla tracking/marketing behavior; and
- whether the handoff is accurately described in the TycoonX Privacy Policy.

Do not label the entire funnel `Xsolla responsibility` if CK-Labs controls the entry page, embedded code, campaign parameters, or returned analytics.

Current Xsolla Cookie Policy: https://xsolla.com/cookie

### 17. Purchase and entitlement delivery must not depend on optional tracking consent

Refusing optional device tracking/cookies must not by itself prevent a user from:

- purchasing Diamonds where the payment channel is otherwise available;
- receiving already purchased Diamonds;
- activating or using one-time 30-Day VIP;
- restoring valid Lifetime VIP;
- requesting a refund/withdrawal/conformity remedy;
- using account recovery/security functions; or
- contacting Support.

If a narrowly necessary payment/security technology is required for a requested purchase function, classify and document that concrete necessity. Do not use the necessity of payment security as a pretext to activate unrelated analytics or advertising tools.

### 18. Diamonds remain transaction-specific

Consent withdrawal, cookie rejection, ATT denial, analytics opt-out, or a consent-manager failure must not:

- delete legitimately purchased Diamonds;
- convert purchased Diamonds into promotional Diamonds;
- cause duplicate Diamond delivery on SDK reinitialization; or
- create a refund/chargeback record by itself.

A separate authoritative payment reversal, refund, fraud finding, or correction can still change the affected transaction according to the existing payment gates and mandatory law.

### 19. 30-Day VIP clock is independent from consent state

Current 30-Day VIP is a one-time, non-renewing entitlement.

Changing privacy choices must never:

- restart the 30-day clock;
- pause the clock merely because optional analytics was disabled;
- extend the clock through consent re-prompting; or
- create another paid entitlement from a tracking/SDK migration.

A genuine service-conformity/outage remedy remains a separate legal question.

### 20. Lifetime VIP cannot acquire a tracking condition

Lifetime VIP is a limited-time promotional offering available only during selected genuine sales windows and may be withdrawn from sale or never return.

Once validly acquired, optional tracking consent cannot become a hidden condition for keeping or restoring Lifetime VIP.

Do not:

- expire Lifetime VIP because ATT was denied;
- downgrade it to 30-Day VIP because cookies were rejected;
- require advertising consent to restore it; or
- grant a duplicate Lifetime VIP merely because a consent identifier changed.

### 21. Account compromise/security controls remain separate

Security telemetry may be important, but `security` is not a magic exemption.

For device-access operations used for account-takeover/fraud defense:

- document the concrete threat and why the storage/access is strictly necessary if relying on § 25(2)(2);
- minimize identifier scope and retention;
- keep fraud/security purpose separate from advertising or behavioral analytics;
- do not repurpose security identifiers for marketing without a separate lawful basis/permission; and
- do not treat a refusal of optional analytics/ATT as evidence of fraud or account compromise.

### 22. Minors require heightened caution

Where TycoonX knows or reasonably treats a user as a minor, avoid unnecessary behavioral tracking, profiling, advertising identifiers, or manipulative consent design.

Age/parental controls, platform child-safety rules, GDPR child protections, Google Families requirements where applicable, and the separate minor-purchase gate must remain aligned.

A parent's approval of a purchase does not automatically provide consent for optional tracking or analytics.

### 23. Provider outages and consent-manager failures fail closed

If a consent provider/CMP, SDK configuration service, remote config, tag manager, or privacy-settings endpoint is unavailable:

- keep optional consent-requiring technologies disabled where the required state cannot be established;
- keep strictly necessary account/security/payment functions available where technically possible;
- do not infer acceptance from stale/missing state unless a still-valid previously documented choice can lawfully be applied;
- preserve the user's prior rejection across reasonable outages/migrations; and
- restore settings without duplicating entitlements or transactions.

### 24. Provider replacement requires a fresh data-flow review

Before replacing analytics, crash, attribution, marketing, authentication, or payment infrastructure, review:

- new device storage/access behavior;
- new identifiers;
- new controller/processor roles;
- new international transfers;
- new consent purposes;
- Apple privacy/ATT impact;
- Google Play Data safety/User Data impact;
- Xsolla/webshop boundary changes; and
- whether Privacy Policy meaning materially changes.

If canonical Privacy Policy meaning materially changes, reopen all 25 localized Privacy pages in the required locale order and update `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md` before declaring localization current again.

### 25. Security emergency changes are temporary, scoped, and reviewed

A genuine security emergency may justify urgent technical changes, but CK-Labs must still document the lawful basis and device-access rule that applies.

Emergency configuration must not silently become permanent optional tracking after the incident ends. Reassess and remove temporary collection/storage that is no longer necessary.

### 26. Consent cannot waive mandatory consumer rights

No cookie banner, ATT prompt, analytics toggle, Google consent dialog, Xsolla privacy setting, or TycoonX consent control may be drafted to waive:

- statutory withdrawal rights;
- conformity/update/remedy rights;
- refund rights required by law;
- privacy rights;
- court/ADR rights; or
- liability that cannot legally be excluded.

Consent to optional tracking is not consent to a price increase, recurring charge, account termination, economy reset, or waiver of a purchased entitlement.

## Release evidence checklist

Before production release or a material SDK/CMP/provider change, retain a dated evidence pack containing:

- [ ] inventory of cookies/local storage/SDK storage and device-access operations on TycoonX web/app surfaces;
- [ ] § 25(1) consent versus § 25(2) exception classification for each relevant operation;
- [ ] concrete strict-necessity rationale where an exception is used;
- [ ] proof optional technologies remain off before consent;
- [ ] first-layer consent/reject screenshots or recordings for German/EU users;
- [ ] direct withdrawal/settings route and proof it is no harder than granting consent;
- [ ] consent-state migration/outage test;
- [ ] GDPR basis/retention/recipient/transfer mapping for resulting personal-data processing;
- [ ] iOS ATT test for allow/deny/not-determined/restricted states where tracking exists;
- [ ] current App Store privacy answers reconciled to all integrated SDKs;
- [ ] Google Play User Data/Data safety review for all integrated Android SDKs;
- [ ] Google consent configuration evidence where Google analytics/ads tooling is used;
- [ ] Xsolla handoff map showing CK-Labs-controlled versus Xsolla-controlled storage/tracking;
- [ ] test proving optional consent refusal does not remove or duplicate Diamonds;
- [ ] test proving consent changes do not restart one-time 30-Day VIP;
- [ ] test proving Lifetime VIP survives optional tracking refusal and consent-ID migration;
- [ ] child/minor configuration review where applicable;
- [ ] privacy/provider change assessment; and
- [ ] rollback procedure for a consent/SDK configuration defect.

## Regression scenarios

1. German user opens TycoonX with no stored choice: optional analytics remains off until valid consent.
2. German user taps `Reject all`: core game remains usable and rejection is not hidden behind extra friction.
3. User previously rejected, CMP state endpoint is down: optional tracking remains off.
4. User accepts analytics and later withdraws in the same product: future optional tracking stops without account deletion.
5. Analytics SDK labels itself `essential` but performs behavioral measurement: release is blocked until correctly classified/configured.
6. Security SDK stores a device token solely for proportionate account-takeover defense: documented strict-necessity assessment is required; token cannot be reused for ads.
7. iOS user denies ATT: TycoonX does not substitute hashed email/device fingerprinting to track across other companies' properties.
8. Website consent says yes but ATT says no for app-collected cross-company tracking: ATT denial governs the Apple tracking permission question.
9. Third-party iOS SDK begins tracking after an SDK update: App Store privacy answers and ATT behavior are reassessed before release.
10. Android SDK collects unexpected sensitive data by default: Google prominent-disclosure/consent and User Data review blocks release until corrected.
11. Google Consent Mode returns unknown/unset: it is not treated as legal consent granted.
12. TycoonX webshop redirects to Xsolla: CK-Labs maps its own pre-redirect cookies separately from Xsolla's checkout controls.
13. Xsolla privacy settings change: CK-Labs does not overwrite TycoonX's own consent/suppression choices or infer new CK-Labs consent.
14. Player rejects optional analytics immediately after buying Diamonds: paid Diamonds remain unchanged.
15. Player changes consent on day 12 of 30-Day VIP: VIP still expires on the original clock.
16. Lifetime VIP holder reinstalls app and declines ATT: exactly one valid Lifetime VIP is restored where otherwise eligible.
17. Consent identifier rotates during provider migration: no Diamond/VIP entitlement is duplicated.
18. Minor's parent approves a purchase: that approval is not reused as analytics/advertising consent.
19. Security emergency temporarily adds diagnostic collection: emergency configuration is removed/reassessed when necessity ends.
20. Privacy-policy meaning changes because a new provider independently reuses analytics data: canonical Privacy and affected localizations must be reopened and synchronized.

## Current-law / platform references checked 2026-09-02

- German TDDDG § 25: https://www.gesetze-im-internet.de/ttdsg/__25.html
- German TDDDG consolidated text (last amended March 10, 2026): https://www.gesetze-im-internet.de/ttdsg/BJNR198210021.html
- German Einwilligungsverwaltungsverordnung (EinwV), effective since April 1, 2025: https://www.gesetze-im-internet.de/einwv/BJNR0200B0025.html
- DSK Orientation Guide for providers of digital services, including websites/apps and consent design: https://www.datenschutzkonferenz-online.de/media/oh/OH_Digitale_Dienste.pdf
- GDPR Articles 6, 7 and 13: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- ePrivacy Directive Article 5(3): https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02002L0058-20091219
- CJEU C-673/17 Planet49: https://curia.europa.eu/juris/liste.jsf?num=C-673/17
- Apple User Privacy and Data Use / ATT: https://developer.apple.com/app-store/user-privacy-and-data-use/
- Apple App Privacy Details: https://developer.apple.com/app-store/app-privacy-details/
- Google Play SDK/User Data requirements: https://support.google.com/googleplay/android-developer/answer/13323374
- Google consent mode for apps: https://developers.google.com/tag-platform/security/guides/app-consent
- Xsolla Cookie Policy, last updated April 21, 2026: https://xsolla.com/cookie

## Release decision

**PASS only if** the real TycoonX app/webshop behavior matches the classified device-access map, optional storage/tracking stays off until any required consent, refusal/withdrawal works without losing paid/core rights, Apple/Google disclosures match SDK behavior, provider boundaries are documented, and entitlement isolation tests pass.

**BLOCK release/change** if optional device tracking runs before required consent, rejection/withdrawal is materially obstructed, an SDK/provider performs undisclosed tracking, a provider migration turns `unknown` into `accepted`, Apple ATT is bypassed, Google Play disclosure/consent duties are unmet, or privacy choices can damage/duplicate Diamonds, 30-Day VIP, or Lifetime VIP.
