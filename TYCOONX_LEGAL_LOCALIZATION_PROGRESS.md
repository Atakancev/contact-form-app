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
- **Polish (`pl`) 4/4**

Thai (`th`) is now **1/4 complete**. The full Thai Terms of Service exists and the Thai legal hub routes the Terms card to that localized page. Purchases & Refunds, Privacy, and Community Standards remain Pending.

The next unfinished locale/document is **Thai (`th`) Purchases & Refunds Policy**.

Rows for `vi`, `uk`, `hi`, and `id` remain `Pending` for all four full documents until actual localized pages exist. Do not infer readiness from localized hub summaries alone.

## Canonical source status

- English Terms and Purchases & Refunds were refreshed on **August 25, 2026** to remove stale pre-release wording without weakening legal protections.
- English Privacy Policy was refreshed on **August 26, 2026** to make third-party data protection and third-party AI disclosure/permission safeguards explicit.
- English Community Standards were refreshed on **August 26, 2026** to preserve age-gating and child-safety flexibility for any future anonymous/random-chat feature under current Google Play rules.
- Repository QA requires zero displayed `TyconX` branding and zero stale `beta` wording in player-facing legal copy.

## Current policy checkpoint, August 27, 2026

- Apple App Review Guideline 3.1.1 continues to require In-App Purchase for covered digital unlocks, states that purchased in-game currencies may not expire, and requires a restore mechanism for restorable In-App Purchases.
- Apple App Review Guideline 5.1.1 continues to require an accessible privacy policy explaining collected data, uses, retention/deletion, and equal or equivalent protection by third parties receiving user data. Guideline 5.1.2 continues to require clear disclosure and explicit permission before sharing personal data with third parties, including third-party AI, where the rule applies.
- Apple App Review Guideline 1.2 continues to require filtering, reporting, timely response, user blocking, and published contact information for user-generated-content and social apps.
- Google Play Billing guidance continues to require entitlement only after a transaction reaches `PURCHASED`, never while it remains `PENDING`. Completed purchases should be acknowledged promptly; failure to acknowledge within three days can result in automatic refund and revocation, and the three-day period starts only after a pending purchase becomes `PURCHASED`.
- Google Play anti-fraud guidance continues to say not to use `orderId` as the universal duplicate-purchase identifier because some valid purchases, including certain promo-code purchases, do not generate one.
- Google Play User Data requirements continue to require account deletion both in-app and through an external web resource for apps that allow account creation, with legally necessary retention disclosed accurately.
- Google Play UGC requirements continue to require clear Terms or user policy acceptance before creating UGC, robust ongoing moderation, in-app reporting, and blocking appropriate to the interaction type.
- German BGB § 356a continues to require, for covered online distance contracts, a clearly labelled electronic withdrawal function that remains continuously available during the withdrawal period, a confirmation function, and prompt receipt confirmation on a durable medium.
- German BGB § 327f continues to require necessary updates, including security updates, during the legally relevant period and preserves the limited statutory protection for defects caused solely by a consumer's failure to install a properly supplied and explained update where all legal conditions are met.
- German BGB § 327r continues to govern qualifying changes to continuously supplied digital products beyond what is necessary to maintain conformity.
- EU Digital Services Act Articles 16 and 17 continue to require, where applicable, accessible notice-and-action handling for sufficiently precise illegal-content notices and clear reasons for covered content, payment, service, or account restrictions.
- Xsolla's Refund Policy remains updated **June 16, 2026**, identifies the applicable refund-policy type at checkout, and Xsolla's Privacy Policy remains updated **June 3, 2026**.
- The August 27, 2026 recheck of Apple, Google Play, Xsolla, German consumer law, and DSA requirements did not require another canonical English wording change.

## Latest checkpoints

- Thai Terms: `8d306858`
- Thai Terms hub routing: `d592afd`
- Polish Purchases & Refunds Policy: `96a1363`
- Polish Privacy Policy: `d39d8b1`
- Polish Community Standards: `2c240ec`
- Complete Polish hub routing: `4702080`
- Polish Terms: `baf0d74`
- Complete Norwegian Bokmål hub routing: `8c51827`
- Complete Swedish hub routing: `db6cc19`
- Complete Dutch hub routing: `f5cfaa4`
- Complete Arabic hub routing: `12aa024`
- Complete Traditional Chinese hub routing: `2059a93`
- Canonical rendered Privacy AI hardening: `90b0d70`
- Canonical Privacy Markdown AI sync: `0ed9286`
- Canonical Community child-safety hardening: `b73903c`
- Canonical Community Markdown sync: `0215590`

Full-document localization progress: **81 / 100 complete (81%)** across the 25 requested locales. All **25 / 25 localized legal hubs exist (100%)**.

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
| 20 | pl | Polski | Ready | Ready | Ready | Ready | Ready |
| 21 | th | ไทย | Ready | Ready | Pending | Pending | Pending |
| 22 | vi | Tiếng Việt | Ready | Pending | Pending | Pending | Pending |
| 23 | uk | Українська | Ready | Pending | Pending | Pending | Pending |
| 24 | hi | हिन्दी | Ready | Pending | Pending | Pending | Pending |
| 25 | id | Bahasa Indonesia | Ready | Pending | Pending | Pending | Pending |
