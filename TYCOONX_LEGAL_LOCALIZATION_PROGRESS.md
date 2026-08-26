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
- Do not mark a localized document `Ready` until it contains every canonical section, preserves product/payment/legal distinctions, uses native punctuation and terminology, and contains no stale English legal paragraphs except protected product, company, platform, and legal-proper names where appropriate.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all 25 target locales and provides native-language navigation plus localized summaries.

Completed locale sets:

- **Turkish (`tr`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Native-language/full-release QA completed.
- **German (`de`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Native-language/full-release QA completed.
- **Spanish (`es`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Spain-oriented QA completed.
- **Spanish (Mexico) (`es_MX`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Mexico-oriented QA completed.
- **French (`fr`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. France-oriented QA completed.
- **French (Canada) (`fr_CA`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Canadian-French QA completed.
- **Italian (`it`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Native-language/full-release QA completed.
- **Portuguese (`pt`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. European-Portuguese/full-release QA completed.

Portuguese (Brazil) localization is in progress:

- The Brazilian Portuguese legal hub exists at `/tycoonx-legal/pt_BR`.
- **Terms of Use is Ready** at `/tycoonx-legal/pt_BR/terms` with Brazilian-Portuguese wording and full canonical section parity.
- **Purchases & Refunds is Ready** at `/tycoonx-legal/pt_BR/purchases` with Brazilian-Portuguese wording and all canonical purchase-policy sections preserved.
- **Privacy Policy is Ready** at `/tycoonx-legal/pt_BR/privacy` with Brazilian-Portuguese wording, full canonical privacy section parity, Apple-equivalent third-party data protection language, and locally appropriate references to the LGPD/ANPD where relevant without reducing EU/German rights.
- Community Standards continues to fall back to the canonical English page until the localized version is completed.

The localized hub routing uses an explicit per-locale document map so partially completed locales route only completed localized documents and safely fall back to canonical English for unfinished documents.

The next unfinished locale/document is **Portuguese (Brazil) (`pt_BR`) Community Standards**.

The canonical English Terms and Purchases & Refunds source were refreshed on **August 25, 2026** to remove stale pre-release wording without weakening legal protections. The canonical English Privacy Policy was refreshed on **August 26, 2026** to make the third-party data-protection safeguard required by current Apple privacy rules explicit. Repository QA continues to require no displayed `TyconX` branding and no stale wording implying the live service is a beta.

## Current policy checkpoint, August 26, 2026

- Apple App Review Guideline 5.1.1 continues to require an accessible privacy policy explaining collected data, uses, sharing, retention/deletion and consent withdrawal, and apps supporting account creation must offer account deletion within the app.
- Apple account-deletion guidance continues to expect deletion of account-associated user data, including user-generated content, except where retention is legally required and disclosed.
- Google Play's User Data policy continues to require a comprehensive privacy policy consistent with the Data safety section. Apps that allow account creation must provide account deletion both in-app and through an external web resource; legitimate retention for security, fraud prevention or regulatory reasons must be disclosed.
- Google Play's July 15, 2026 policy announcement clarifies that User Data requirements also apply to third-party AI integrations and developers remain responsible for limited use, disclosure and consent compliance.
- German BGB § 356a continues to require the electronic withdrawal function, confirmation function and prompt receipt confirmation on a durable medium for covered online distance contracts.
- German BGB § 327f continues to require updates, including security updates, necessary to keep covered digital products in conformity during the legally relevant period, with the statutory protection for defects caused solely by a consumer's failure to install a properly supplied and explained update where all conditions are met.
- Xsolla's legal index lists its Privacy Policy as updated **June 3, 2026** and its Refund Policy as updated **June 16, 2026**.
- The canonical English Privacy Policy explicitly states that, where platform rules require it, third parties receiving user data from CK-Labs must provide the same or an equivalent level of protection. The Brazilian Portuguese Privacy localization contains the same protection.
- Previously completed localized Privacy pages should be checked for equivalent third-party-protection wording during parity QA if not already present.

## Latest checkpoints

- Brazilian Portuguese Terms: `3639545`
- Brazilian Portuguese Terms hub routing: `59e27da`
- Brazilian Portuguese Purchases & Refunds: `5f96375`
- Brazilian Portuguese Purchases hub routing: `ac9bc05`
- Brazilian Portuguese Privacy: `73d0f99`
- Brazilian Portuguese Privacy hub routing: `652bd82`
- Canonical rendered Privacy hardening: `bb320b6`
- Canonical Privacy Markdown sync: `9d08cb2`

Full-document localization progress: **35 / 100 complete (35%)** across the 25 requested locales. All **25 / 25 localized legal hubs exist (100%)**.

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
| 9 | pt_BR | Português (Brasil) | Ready | Ready | Ready | Ready | Pending |
| 10 | ru | Русский | Ready | Pending | Pending | Pending | Pending |
| 11 | ja | 日本語 | Ready | Pending | Pending | Pending | Pending |
| 12 | ko | 한국어 | Ready | Pending | Pending | Pending | Pending |
| 13 | zh | 中文 | Ready | Pending | Pending | Pending | Pending |
| 14 | zh_Hans | 简体中文 | Ready | Pending | Pending | Pending | Pending |
| 15 | zh_Hant | 繁體中文 | Ready | Pending | Pending | Pending | Pending |
| 16 | ar | العربية | Ready | Pending | Pending | Pending | Pending |
| 17 | nl | Nederlands | Ready | Pending | Pending | Pending | Pending |
| 18 | sv | Svenska | Ready | Pending | Pending | Pending | Pending |
| 19 | nb | Norsk bokmål | Ready | Pending | Pending | Pending | Pending |
| 20 | pl | Polski | Ready | Pending | Pending | Pending | Pending |
| 21 | th | ไทย | Ready | Pending | Pending | Pending | Pending |
| 22 | vi | Tiếng Việt | Ready | Pending | Pending | Pending | Pending |
| 23 | uk | Українська | Ready | Pending | Pending | Pending | Pending |
| 24 | hi | हिन्दी | Ready | Pending | Pending | Pending | Pending |
| 25 | id | Bahasa Indonesia | Ready | Pending | Pending | Pending | Pending |
