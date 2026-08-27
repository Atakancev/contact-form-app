# TycoonX Legal Localization Progress

Canonical legal source: English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository.

## Rules

- Always display the brand as **TycoonX**.
- TycoonX goes to full release on **September 1, 2026**. Do not describe the live service as beta.
- Translate for meaning, not word-for-word.
- Localized legal copy must sound natural to a native speaker while preserving the legal effect of the English source.
- Do not omit mandatory-rights language, CK-Labs protections, payment-channel responsibilities, refund/chargeback rules, price-change rules, Lifetime VIP limitations, security clauses, privacy rights, community-safety obligations, or service-discontinuation language.
- English remains canonical during localization. Refresh localized versions whenever the canonical meaning changes materially.
- Arabic uses RTL layout.
- Continue in locale order and, within each locale, in this order: Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not mark a localized document `Ready` until the corresponding page exists, contains every canonical section, preserves product/payment/legal distinctions, uses native punctuation and terminology, and contains no stale English legal paragraphs except protected product, company, platform, and legal-proper names where appropriate.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all 25 target locales and provides native-language navigation plus localized summaries.

Completed locale sets:

- **Turkish (`tr`) 4/4**
- **German (`de`) 4/4**
- **Spanish (`es`) 4/4**
- **Spanish (Mexico) (`es_MX`) 4/4**
- **French (`fr`) 4/4**
- **French (Canada) (`fr_CA`) 4/4**
- **Italian (`it`) 4/4**
- **Portuguese (`pt`) 4/4**
- **Portuguese (Brazil) (`pt_BR`) 4/4**
- **Russian (`ru`) 4/4**
- **Japanese (`ja`) 4/4**
- **Korean (`ko`) 4/4**
- **Chinese (`zh`) 4/4**
- **Chinese Simplified (`zh_Hans`) 4/4**
- **Chinese Traditional (`zh_Hant`) 4/4**
- **Arabic (`ar`) 4/4**
- **Dutch (`nl`) 4/4**
- **Swedish (`sv`) 4/4**
- **Norwegian Bokmål (`nb`) 4/4**

The next unfinished locale/document is **Polish (`pl`) Terms of Service**.

### Repository reconciliation, August 27, 2026

Tracker state is reconciled against actual repository pages rather than presumed completion. Full pages exist and are routed for every completed locale above.

Norwegian Bokmål is now complete. Terms and Purchases & Refunds were already Ready. Privacy now exists at `app/tycoonx-legal/nb/privacy/page.tsx` with full canonical parity for account/gameplay data, Apple/Google/Xsolla transaction records, fraud and exploit signals, legal bases, international transfers, retention, account deletion versus entitlement restoration, minors, automated moderation, equivalent third-party protection, and third-party AI disclosure/permission safeguards. Community Standards now exist at `app/tycoonx-legal/nb/community/page.tsx` with full parity for reporting, blocking, moderation, DSA notices, public/private UGC, child safety, IP complaints, platform rules, and future anonymous/random-chat controls. All four Norwegian Bokmål pages are routed from the `nb` legal hub.

Rows for `pl`, `th`, `vi`, `uk`, `hi`, and `id` remain `Pending` for all four full documents until actual localized pages exist. Do not infer readiness from localized hub summaries alone.

The canonical English Terms and Purchases & Refunds source were refreshed on **August 25, 2026** to remove stale pre-release wording without weakening legal protections. The canonical English Privacy Policy was refreshed on **August 26, 2026** to make current third-party data protection and third-party AI disclosure/permission safeguards explicit. The canonical English Community Standards were refreshed on **August 26, 2026** to preserve age-gating and child-safety flexibility for any future anonymous/random-chat feature under current Google Play rules.

Repository QA continues to require zero displayed `TyconX` branding and zero stale `beta` wording in player-facing legal copy. The August 27, 2026 Norwegian Bokmål QA found no `TyconX` match and no TycoonX `beta` wording.

## Current policy checkpoint, August 27, 2026

- Apple App Review Guideline 3.1.1 continues to state that purchased in-game currency may not expire and that restorable In-App Purchases should have a restore mechanism.
- Apple App Review Guideline 5.1.1 continues to require a privacy policy that identifies collected data and uses, explains retention/deletion, and confirms same or equivalent protection by third parties receiving user data. Apple also requires clear disclosure and explicit permission before sharing personal data with third-party AI where applicable.
- Apple account-deletion guidance continues to require apps that support account creation to let users initiate deletion in-app and to delete associated data except information the developer is legally required to retain.
- Google Play User Data rules continue to require apps with account creation to provide a readily discoverable account-deletion path both in-app and through an external web resource. Google's July 15, 2026 policy update also clarifies that User Data requirements apply to third-party AI integrations.
- Google Play Billing guidance continues to require entitlement only after a transaction reaches `PURCHASED`, never while it remains `PENDING`. Completed purchases should be acknowledged promptly; failure to acknowledge within three days can result in automatic refund and entitlement revocation, and the period starts only after a pending purchase becomes `PURCHASED`.
- Google Play anti-fraud guidance continues to say not to use `orderId` as the universal duplicate-purchase identifier because some valid purchases do not generate an `orderId`. Purchase-token and authoritative purchase-state verification remain the safer entitlement basis.
- Google Play Developer API release notes dated **July 6, 2026** describe a collaborative chargeback-review flow. A `PendingRefundReviewNotification` may require a response through `orders.reviewrefund` within **24 hours**, with a developer preference and relevant lawful purchase-usage evidence where available.
- EU Digital Services Act Articles 16 and 17 continue to support the Community Standards structure for notice-and-action handling and statements of reasons where those hosting-service rules apply.
- German BGB § 356a continues to require, for covered online distance contracts, a clearly labelled electronic withdrawal function that remains continuously available during the withdrawal period, a confirmation function, and prompt receipt confirmation on a durable medium.
- German BGB § 327f continues to require necessary updates, including security updates, during the legally relevant period and preserves the limited statutory protection for defects caused solely by a consumer's failure to install a properly supplied and properly explained update where all legal conditions are met.
- German BGB § 327r continues to govern qualifying changes to continuously supplied digital products beyond what is necessary to maintain conformity.
- Xsolla's current legal index lists its **Privacy Policy as updated June 3, 2026** and **Refund Policy as updated June 16, 2026**. Xsolla's Refund Policy continues to state that the applicable refund-policy type is shown at checkout.
- The August 27, 2026 recheck of Apple, Google Play, Xsolla, and German/EU requirements did not require another canonical English wording change.

## Latest checkpoints

- Norwegian Bokmål Privacy Policy: `f420e6e`
- Norwegian Bokmål Community Standards: `f54b952`
- Complete Norwegian Bokmål hub routing: `8c51827`
- Norwegian Bokmål Terms: `faee0a0`
- Norwegian Bokmål Purchases & Refunds: `100f336`
- Swedish Privacy Policy: `8b6c8dc`
- Swedish Community Standards: `6bb80c7`
- Complete Swedish hub routing: `db6cc19`
- Swedish Purchases & Refunds: `f1b915d8`
- Swedish Terms: `b0093d5`
- Complete Dutch hub routing: `f5cfaa4`
- Complete Arabic hub routing: `12aa024`
- Complete Traditional Chinese hub routing: `2059a93`
- Canonical rendered Privacy AI hardening: `90b0d70`
- Canonical Privacy Markdown AI sync: `0ed9286`
- Canonical Community child-safety hardening: `b73903c`
- Canonical Community Markdown sync: `0215590`

Full-document localization progress: **76 / 100 complete (76%)** across the 25 requested locales. All **25 / 25 localized legal hubs exist (100%)**.

| Order | Locale | Language | Legal hub | Full Terms | Purchases & Refunds | Privacy | Community Standards |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | tr | Türkçe | Ready | Ready | Ready | Ready | Ready |
| 2 | de | Deutsch | Ready | Ready | Ready | Ready | Ready |
| 3 | es | Español | Ready | Ready | Ready | Ready | Ready |
| 4 | es_MX | Español (México) | Ready | Ready | Ready | Ready | Ready |
| 5 | fr | Français | Ready | Ready | Ready | Ready | Ready |
| 6 | fr_CA | Français (Canada) | Ready | Ready | Ready | Ready | Ready |
| 7 | it | Italiano | Ready | Ready | Ready | Ready | Ready |
| 8 | pt | Português | Ready | Ready | Ready | Ready | Ready |
| 9 | pt_BR | Português (Brasil) | Ready | Ready | Ready | Ready | Ready |
| 10 | ru | Русский | Ready | Ready | Ready | Ready | Ready |
| 11 | ja | 日本語 | Ready | Ready | Ready | Ready | Ready |
| 12 | ko | 한국어 | Ready | Ready | Ready | Ready | Ready |
| 13 | zh | 中文 | Ready | Ready | Ready | Ready | Ready |
| 14 | zh_Hans | 简体中文 | Ready | Ready | Ready | Ready | Ready |
| 15 | zh_Hant | 繁體中文 | Ready | Ready | Ready | Ready | Ready |
| 16 | ar | العربية | Ready | Ready | Ready | Ready | Ready |
| 17 | nl | Nederlands | Ready | Ready | Ready | Ready | Ready |
| 18 | sv | Svenska | Ready | Ready | Ready | Ready | Ready |
| 19 | nb | Norsk bokmål | Ready | Ready | Ready | Ready | Ready |
| 20 | pl | Polski | Ready | Pending | Pending | Pending | Pending |
| 21 | th | ไทย | Ready | Pending | Pending | Pending | Pending |
| 22 | vi | Tiếng Việt | Ready | Pending | Pending | Pending | Pending |
| 23 | uk | Українська | Ready | Pending | Pending | Pending | Pending |
| 24 | hi | हिन्दी | Ready | Pending | Pending | Pending | Pending |
| 25 | id | Bahasa Indonesia | Ready | Pending | Pending | Pending | Pending |
