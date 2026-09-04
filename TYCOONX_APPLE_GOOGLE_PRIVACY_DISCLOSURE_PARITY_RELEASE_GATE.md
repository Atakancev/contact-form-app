# TycoonX Apple / Google Privacy Disclosure Parity Release Gate

**Review date: September 4, 2026**

Owner: CK-Labs

Scope: TycoonX iOS and Android builds, App Store Connect App Privacy disclosures, Apple privacy manifests and Required Reason APIs, Google Play Data safety declarations, integrated SDKs, hosted/web checkout handoffs, and the canonical TycoonX Privacy Policy.

## Purpose

TycoonX can have a legally sound Privacy Policy and still fail store review if the actual binary, SDK behavior, App Store privacy answers, Google Play Data safety answers, and user-facing disclosures do not agree.

This gate closes that operational gap. It does not replace GDPR analysis, consent requirements, the TycoonX Privacy Policy, account-deletion rules, or provider-specific payment/privacy terms.

The core rule is simple: **the shipped app, its SDKs, store privacy declarations, and the TycoonX Privacy Policy must describe the same real data practices using each platform's own definitions.**

## 1. Five-layer privacy truth chain

For every production release, CK-Labs should be able to reconcile:

1. **Binary behavior**: what the iOS/Android app and integrated SDKs actually access, collect, transmit, retain, link, or share.
2. **Backend behavior**: what CK-Labs servers receive, derive, store, disclose, or send to providers.
3. **Platform declarations**: App Store Connect App Privacy and Google Play Data safety answers.
4. **Apple implementation metadata**: privacy manifests, tracking declarations, Required Reason API declarations, and required third-party SDK manifests/signatures.
5. **Public legal disclosure**: the canonical TycoonX Privacy Policy and any legally required just-in-time consent/prominent disclosure.

A release is not privacy-ready if one layer materially contradicts another.

## 2. Platform labels are not a GDPR legal basis or consent

App Store privacy labels and Google Play Data safety disclosures are transparency tools. They do not themselves create:

- GDPR consent;
- a lawful basis under GDPR Article 6;
- consent for tracking, marketing, terminal access, cookies, or advertising identifiers;
- parental authorization;
- permission to use sensitive data for a new purpose; or
- a waiver of deletion, access, objection, withdrawal, portability, or other mandatory rights.

If TycoonX needs consent or another legal basis for a processing activity, that requirement must be satisfied separately.

Likewise, a privacy manifest is not a substitute for the App Store privacy label or Privacy Policy.

## 3. Apple App Store privacy answers

Apple currently requires App Store Connect privacy answers to reflect data collected by TycoonX **and by third-party partners whose code is integrated into the app**. CK-Labs remains responsible for keeping those answers accurate and up to date.

Before each material iOS release:

- inventory all first-party collection and every integrated SDK/library that can transmit data off device;
- use the current shipped app version as the factual basis for App Store privacy answers;
- identify each collected data type and its use;
- determine whether the data is linked to the user under Apple's definition;
- determine whether any data is used for tracking under Apple's definition;
- verify that a removed SDK or collection path is actually absent from the shipped version before removing the disclosure;
- verify that a newly added SDK/data type is declared before or with release as required;
- keep the App Store privacy answers consistent with the Privacy Policy without assuming their taxonomies are identical.

Apple's disclosure model is app-level. If a TycoonX Apple-platform app collects more data on one supported Apple platform than another under the same app-level disclosure, the answers must be sufficiently comprehensive for the actual supported behavior.

## 4. Apple definition of collection must be applied correctly

For App Store privacy details, Apple currently describes collection as transmitting data off device in a way that allows CK-Labs or a third-party partner to access it for longer than necessary to service the transmitted request in real time.

Do not overstate or understate collection by importing a different platform's definition.

Examples:

- an account identifier retained by the TycoonX backend for login/game state is collected;
- gameplay/economy events retained for analytics, fraud, support, balancing, or account history are collected where they fall within Apple's data categories;
- a crash/diagnostic SDK retaining device-linked diagnostics can require disclosure;
- information transmitted only to service a real-time request and immediately discarded may fall outside Apple's App Store privacy collection definition, but that does not automatically mean it is outside GDPR or another law;
- pseudonymizing an identifier does not automatically make it unlinked if CK-Labs or the SDK can reasonably reconnect it to the account/device.

## 5. Apple linked-data and tracking classification

For every declared Apple data type, determine whether it is linked to the user's identity through an account, device, or other identifier.

Do not classify data as unlinked merely because the visible nickname is absent if the record still contains a stable account ID, transaction ID, device ID, or other linkage that can reasonably reconnect it to the user.

Tracking is a separate Apple concept. If TycoonX or an integrated SDK links app data with third-party data for targeted advertising/advertising measurement, or shares app data with a data broker as Apple defines tracking, perform the applicable tracking/ATT analysis and disclosures.

Do not mark ordinary fraud prevention, provider transaction validation, or first-party gameplay analytics as tracking merely because an identifier exists. Conversely, do not hide genuine cross-company advertising profiling behind labels such as `analytics`, `security`, or `service provider`.

## 6. Apple privacy manifests are a separate release artifact

A TycoonX iOS release should maintain a valid privacy manifest where required and review the aggregated Xcode privacy report before submission.

The privacy manifest can describe:

- collected data categories;
- tracking state/domains; and
- use of Apple's Required Reason APIs.

The Xcode privacy report should be compared against the App Store privacy answers before release.

A manifest generated by an SDK is evidence about that SDK, not proof that CK-Labs' whole App Store privacy label is complete.

## 7. Required Reason APIs

Where TycoonX or an included SDK accesses an Apple Required Reason API, the app/SDK must declare an approved reason that truthfully matches the actual use.

Do not:

- copy an approved reason simply because it makes submission pass;
- use data returned by a Required Reason API for an unrelated purpose prohibited by Apple's rules;
- assume an SDK declaration cures first-party misuse;
- remove a declared reason while the shipped binary still uses the covered API.

A new SDK version can change Required Reason API use even if CK-Labs' own source code did not change. Dependency updates therefore trigger a privacy-manifest review.

## 8. Apple third-party SDK manifests and signatures

Apple currently maintains a list of commonly used privacy-impacting SDKs for which a privacy manifest is required in specified App Store submissions, and signatures are required where those listed SDKs are used as binary dependencies under Apple's stated conditions.

TycoonX release QA must:

- compare the dependency graph against Apple's current third-party SDK requirements list;
- include/repackage only compliant versions of covered SDKs;
- investigate missing-manifest/signature warnings instead of suppressing them;
- treat transitive or repackaged listed SDKs as potentially in scope;
- re-check the list when adding or materially upgrading an SDK.

SDK compliance does not transfer responsibility away from CK-Labs. Apple expressly places responsibility for integrated third-party code on the app developer.

## 9. Google Play Data safety is a separate taxonomy

Google Play requires a complete and accurate Data safety section for published apps, including collection/sharing performed through third-party libraries and SDKs.

For Google Play, `collect` currently includes user data transmitted from the app off device, including data sent by SDKs, regardless of whether it goes to CK-Labs or directly to a third-party server.

This differs from Apple's precise real-time-retention boundary. Do not copy the Apple label mechanically into Google Play.

Before each material Android release:

- inventory actual off-device transmissions from first-party code and SDKs;
- map them to Google's current data types and purposes;
- determine whether each type is collected, shared, or both under Google's definitions;
- determine whether collection is required or optional using Google's global-form rules;
- verify encryption-in-transit answers against the behavior of all relevant app/SDK transmissions;
- keep the Data safety section consistent with the Privacy Policy;
- update the declaration whenever the app's data practices materially change.

## 10. Google global declaration rule

Google currently uses one global Data safety form per package name. The declaration represents the sum of relevant data practices across versions of the app presently distributed on Google Play, including regional/user-age differences under Google's stated rules.

Therefore:

- do not mark a data type `optional` if it is required for any users in an app version covered by Google's rule;
- do not remove a data type from the declaration merely because the EU build stopped using it if another currently distributed covered version still does;
- do not assume a country-specific feature automatically produces a country-specific Data safety label;
- review old active production/open/closed-track artifacts where Google's current rules require them to be included.

Internal-only testing has separate treatment under Google's current documentation; do not use that exception to misdescribe a production, open, or closed test release.

## 11. Google ephemeral processing is not the same as no processing

Google currently requires ephemeral off-device processing to be included in the form response, while qualifying ephemeral processing is not displayed as collected on the public Data safety section.

Qualifying ephemeral processing means data is used only in memory and retained no longer than necessary to service the specific real-time request.

Do not classify data as ephemeral if TycoonX or an SDK logs it, retains it for fraud/analytics, builds a profile from it, or otherwise uses it after the real-time request.

A Google ephemeral classification does not eliminate GDPR, confidentiality, security, consent, or other legal obligations.

## 12. Google `sharing` exceptions do not erase legal disclosure duties

Google's Data safety taxonomy currently excludes certain transfers from the platform definition of `sharing`, including qualifying transfers to service providers processing on the developer's behalf, certain legal-purpose transfers, qualifying user-initiated transfers, and fully anonymized data.

That is a **Google label classification**, not a statement that no disclosure or legal analysis is needed.

For example, a hosting/analytics processor may be excluded from Google's public `sharing` category while still being a GDPR processor/recipient that belongs in CK-Labs' Article 28/vendor, transfer, security, and Privacy Policy analysis.

Do not tell players `we never share data with third parties` solely because Google Data safety classifies a processor transfer as not `shared`.

## 13. Payment-provider and Xsolla boundary

Apple, Google, Xsolla, banks, card networks, and other payment participants can collect data under their own terms and may act as independent controllers for parts of payment, fraud, tax, or platform processing.

The canonical TycoonX Privacy Policy already distinguishes those independent roles and says CK-Labs generally does not receive full payment-card numbers from platform stores/payment processors.

For Google Data safety, Google's current guidance says payment information collected directly by an external payment service does not need to be declared as app collection where **both** of these conditions are met:

1. TycoonX never accesses that payment information; and
2. the payment service collects it directly from the user under that service's terms.

Do not extend that exception to data TycoonX actually receives, such as purchase history, transaction/order IDs, entitlement state, refund/chargeback state, or relevant fraud/risk data.

For an Xsolla checkout:

- if full card/payment credentials are entered directly into Xsolla-controlled checkout and TycoonX never accesses them, do not falsely claim CK-Labs collects the full card number;
- if the app/backend receives Xsolla transaction identifiers, payment status, country, fraud/risk result, or other user-linked information, classify that actual received data under the relevant Apple/Google/legal rules;
- if a WebView is used, apply Google's current rule distinguishing a WebView whose code/behavior the app controls from navigation of the open web;
- do not turn Xsolla checkout data into gameplay profiling, advertising, or unrelated analytics without a separate lawful basis and correct disclosures.

The same principle applies to Apple and Google purchase confirmation: store transaction/entitlement records received by CK-Labs are different from card data handled only by the payment provider.

## 14. TycoonX data inventory minimum set

The release evidence inventory should explicitly review whether the current app/backend processes these TycoonX categories:

- account ID, email, nickname, avatar, language, authentication/recovery events;
- gameplay state, economy events, inventory, companies, market activity, rewards, and progression;
- Diamond balance and transaction ledger;
- 30-Day VIP and Lifetime VIP entitlement state;
- Apple/Google/Xsolla product and transaction identifiers;
- refund, revocation, chargeback, restore, migration, and correction records;
- IP address, session/login records, app version, OS/device information;
- crash/diagnostic/performance events;
- chat, profile text, reports, support tickets, attachments, and other UGC;
- push token/notification state;
- age/parental/platform age signals where implemented;
- analytics/campaign/referral information;
- security, exploit, anti-fraud, anti-abuse, and moderation logs.

This list is a review checklist, not a statement that every build necessarily collects every category.

## 15. Diamonds and VIP privacy isolation

Privacy-label corrections must never mutate commercial entitlement state.

Specifically:

- changing an App Store privacy answer cannot remove purchased Diamonds;
- correcting Google Data safety cannot restart or cancel a valid one-time, non-renewing 30-Day VIP;
- a privacy-manifest warning cannot expire Lifetime VIP;
- refusal of optional analytics/marketing consent cannot by itself create a refund, chargeback, fraud finding, or entitlement-abuse finding;
- an SDK removal cannot erase authoritative purchase/entitlement evidence that CK-Labs must lawfully retain for restoration, accounting, fraud, disputes, or mandatory consumer rights.

Lifetime VIP remains a one-time promotional entitlement available only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability. Those commercial rules do not change because a privacy disclosure is updated.

## 16. Account compromise and security logs

Security/anti-fraud telemetry may be necessary to investigate an account compromise, exploit, suspicious refund, or chargeback. The store declaration should accurately describe the relevant collection/use where the platform taxonomy requires it.

However:

- a device or session signal is not automatic proof that the legitimate account owner committed fraud;
- an App Store/Google privacy classification is not an authorization to retain security logs forever;
- optional marketing/analytics consent must not be made mandatory merely because security processing is mandatory;
- privacy requests should not delete records that lawfully must be retained for an active security/payment dispute, but retention must remain limited to the lawful purpose/period.

## 17. Old and unsupported app versions

A privacy change is not complete merely because the newest source branch is compliant.

Before removing a store disclosure or vendor from the privacy inventory, determine whether:

- an older version remains distributed or materially active under the platform's declaration rules;
- its backend endpoints continue accepting/transmitting the relevant data;
- the SDK still exists in a currently distributed artifact;
- a mandatory upgrade is needed for security/privacy reasons;
- stored data from the old practice remains subject to the Privacy Policy, retention rules, rights, or transfer safeguards.

CK-Labs may require a supported app version for valid security, privacy, legal, or compatibility reasons, subject to mandatory digital-product/update rights.

## 18. Provider outage or rule change

Apple, Google, Xsolla, SDK vendors, authentication providers, analytics vendors, or infrastructure providers may change APIs, SDK behavior, privacy terms, store disclosure taxonomies, or availability.

When that happens:

1. determine whether real data flow changed;
2. update manifests/declarations before or with the affected release where required;
3. update the Privacy Policy/localizations only if the canonical public meaning materially changes;
4. preserve minimum lawful purchase/entitlement continuity;
5. do not silently repurpose already-collected data for a new incompatible purpose merely because a provider changed its product;
6. replace/discontinue the provider where reasonably necessary and lawful.

A provider outage does not itself authorize CK-Labs to bypass privacy, consent, payment-confirmation, or entitlement rules.

## 19. Release evidence packet

Retain a lightweight, dated privacy-parity packet for each material app release:

- app version/build number and release date;
- dependency lockfile or SDK inventory;
- first-party endpoint/data-flow inventory;
- Apple Xcode privacy report;
- Apple privacy manifest and Required Reason API review;
- current Apple required-third-party-SDK list comparison;
- App Store Connect privacy answers snapshot/export;
- Google Play Data safety answers snapshot/export;
- relevant Google Play SDK Index/vendor disclosures used as evidence;
- Privacy Policy version/date;
- consent/prominent-disclosure screenshots where applicable;
- account-deletion/privacy-choices links used in stores;
- payment-provider integration mode, including whether TycoonX can access full payment credentials;
- reviewer name/date and unresolved discrepancies.

Do not put secrets, full card numbers, private chat exports, raw access tokens, or unnecessary personal data into this evidence packet.

## 20. Minimum regression scenarios

Before a material privacy-affecting release, test at least:

1. A new SDK that transmits an identifier cannot ship without being assessed for both Apple and Google disclosures.
2. A removed SDK is not removed from store disclosures until the relevant shipped artifact no longer uses it.
3. Xcode privacy report is reviewed against App Store Connect answers.
4. A Required Reason API used by first-party code has an approved truthful reason.
5. A listed Apple privacy-impacting SDK has the required manifest/signature under Apple's current submission rules.
6. Device-linked diagnostics are not mislabeled as anonymous merely because a nickname is absent.
7. Google Data safety includes off-device transmissions made directly by an SDK.
8. A Google service-provider exception is not turned into a false Privacy Policy statement that no third party receives data.
9. Qualifying Google ephemeral processing is not used to hide retained logs or profiling.
10. A directly hosted payment-provider card form does not cause CK-Labs to claim it receives full card details when it does not.
11. Xsolla/Apple/Google transaction IDs and entitlement status received by TycoonX are still assessed as data TycoonX actually processes.
12. An optional analytics opt-out stops the optional analytics path without breaking account security or valid purchase restoration.
13. Privacy metadata changes cannot remove Diamonds, alter 30-Day VIP, or expire Lifetime VIP.
14. An old active app version cannot silently continue an undeclared data flow after the newest version's label is narrowed.
15. Store declarations, Privacy Policy, and real app behavior have no unresolved material contradiction.

## 21. Release blockers

Do **not** ship a privacy-affecting TycoonX release when any of these is unresolved:

- an SDK/data transmission exists in the binary but is missing from a required Apple/Google declaration;
- App Store Connect says data is unlinked while CK-Labs/SDK records retain a stable user/account/device link;
- genuine Apple tracking is occurring without the required classification/permission path;
- a Required Reason API is used with no truthful approved reason;
- a covered Apple third-party SDK lacks a required privacy manifest/signature;
- Google Data safety omits data transmitted off device by an SDK;
- Google `optional`/`required`, collection, sharing, encryption, or purpose answers contradict real behavior;
- the Privacy Policy materially omits a real collection/use/provider category;
- TycoonX claims it never receives payment data while it actually stores provider-linked purchase/transaction data;
- a privacy/consent change can corrupt purchased Diamonds or VIP entitlements;
- an unresolved old-version data flow makes the current store declaration materially inaccurate.

## 22. Current platform references reviewed September 4, 2026

Apple:

- App privacy details on the App Store: https://developer.apple.com/app-store/app-privacy-details/
- Manage app privacy in App Store Connect: https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy/
- App Review Guidelines, including privacy-policy requirements: https://developer.apple.com/app-store/review/guidelines/
- App Privacy Configuration / privacy manifests: https://developer.apple.com/documentation/bundleresources/app-privacy-configuration
- Describing data use in privacy manifests: https://developer.apple.com/documentation/bundleresources/describing-data-use-in-privacy-manifests
- Third-party SDK requirements: https://developer.apple.com/support/third-party-SDK-requirements/

Google Play:

- User Data policy: https://support.google.com/googleplay/android-developer/answer/10144311
- Data safety form guidance: https://support.google.com/googleplay/android-developer/answer/10787469

Canonical TycoonX public policy:

- `tyconx-privacy-policy.md`

## 23. Canonical/localization effect

This gate does **not** change the current canonical Privacy Policy's material legal meaning. The canonical policy already discloses account/profile, gameplay/economy, purchase/entitlement, security/fraud, UGC/support, analytics, provider, retention, rights, deletion, age, security, automated-system, international-transfer, and business-transfer categories, and already distinguishes provider-controlled payment processing from CK-Labs entitlement processing.

Therefore the completed localized Privacy Policies do not need to be reopened solely because this operational parity gate was added.

If production inspection later discovers a real material data practice that the canonical Privacy Policy does not cover, update the English canonical Privacy Policy first and then synchronize all 25 localized Privacy Policies before treating localization as current.

## Release decision

TycoonX privacy disclosure parity is release-ready only when the **real shipped app/SDK behavior, backend behavior, Apple privacy artifacts, Google Data safety declaration, and canonical Privacy Policy materially agree**.

This protects CK-Labs from store-review and privacy-enforcement risk without pretending that Apple's taxonomy, Google's taxonomy, and GDPR are the same legal system.