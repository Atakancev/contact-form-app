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
- **Portuguese (Brazil) (`pt_BR`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Brazilian-Portuguese/full-release QA completed.

The Russian Terms of Service are now available at `/tycoonx-legal/ru/terms` with full canonical parity for all substantive Terms areas, including Diamonds, one-time 30-Day VIP, limited-time Lifetime VIP, regional/future pricing, Apple/Google/Xsolla roles, obvious errors, failed and pending payments, duplicate grants, chargebacks, exploits, account compromise, economy corrections/resets, supported versions, third-party/provider changes, outages, force majeure, permanent shutdown, business transfer, UGC, liability, cross-platform recognition, Family Sharing, German/EU mandatory rights and consumer-dispute handling.

The localized hub routing uses an explicit per-locale document map so partially completed locales route only completed localized documents and safely fall back to canonical English for unfinished documents.

The next unfinished locale/document is **Russian (`ru`) Purchases & Refunds Policy**.

The canonical English Terms and Purchases & Refunds source were refreshed on **August 25, 2026** to remove stale pre-release wording without weakening legal protections. The canonical English Privacy Policy was refreshed on **August 26, 2026** to make current third-party data protection and third-party AI disclosure/permission safeguards explicit. Repository QA continues to require no displayed `TyconX` branding and no stale wording implying the live service is a beta.

## Current policy checkpoint, August 26, 2026

- Apple App Review Guideline 1.2 continues to require UGC/social apps to provide objectionable-content filtering, in-app reporting with timely responses, blocking of abusive users, and published developer contact information.
- Apple clarified on **February 6, 2026** that random or anonymous chat is subject to Guideline 1.2.
- Apple App Review Guideline 5.1.1 continues to require an accessible privacy policy explaining collected data, uses, sharing, retention/deletion and consent withdrawal, and apps supporting account creation must offer account deletion within the app.
- Apple App Review Guideline 5.1.2 continues to require clear disclosure of where personal data is shared with third parties, including third-party AI, and explicit permission before sharing where required by the guideline.
- Apple App Review Guideline 3.1.1 continues to state that purchased in-game currencies may not expire and that restorable In-App Purchases need a restore mechanism. Family Sharing for eligible purchases must be explicitly enabled and revocation handled correctly.
- Google Play's UGC policy continues to require users to accept the app's Terms/User Policy before they create or upload UGC, robust ongoing moderation, in-app reporting, and blocking appropriate to the feature.
- Effective **August 26, 2026**, Google Play expands Age-Restricted Content and Functionality and Child Safety Standards requirements to anonymous/random chat apps and requires qualifying apps to use Play Console tools to block minors. The Families policy also prohibits anonymous chat apps from targeting children. TycoonX must re-review these rules before introducing any anonymous or random-chat feature.
- Google Play's Child Safety Standards continue to require covered social apps to publish standards prohibiting child sexual abuse and exploitation, provide an in-app reporting mechanism, take appropriate action on known CSAM, and comply with applicable reporting laws.
- Google Play's User Data policy continues to require a comprehensive privacy policy consistent with the Data safety section. Apps that allow account creation must provide account deletion both in-app and through an external web resource; legitimate retention for security, fraud prevention or regulatory reasons must be disclosed.
- Google Play's July 15, 2026 policy announcement clarifies that User Data requirements also apply to third-party AI integrations and developers remain responsible for limited use, disclosure and consent compliance.
- Google Play Billing continues to require entitlement only after a transaction reaches `PURCHASED`, not while it is `PENDING`, and completed purchases must be acknowledged promptly to avoid automatic refund/revocation.
- The EU Digital Services Act Article 16 continues to require covered hosting services to provide an easy-to-access, user-friendly electronic mechanism for notices about specific allegedly illegal content; Article 17 requires clear and specific statements of reasons for covered moderation restrictions.
- German BGB § 356a continues to require the electronic withdrawal function, confirmation function and prompt receipt confirmation on a durable medium for covered online distance contracts.
- German BGB § 327f continues to require updates, including security updates, necessary to keep covered digital products in conformity during the legally relevant period, with the statutory protection for defects caused solely by a consumer's failure to install a properly supplied and explained update where all conditions are met.
- Xsolla's legal index lists its Privacy Policy as updated **June 3, 2026** and its Refund Policy as updated **June 16, 2026**; the applicable refund-policy type is identified in the Xsolla checkout.
- The Brazilian Portuguese Privacy localization also reflects LGPD/ANPD rights such as confirmation/access, correction, anonymization/blocking/deletion where applicable, portability, consent withdrawal, information on sharing and review of qualifying automated decisions.
- Previously completed localized Privacy pages should be checked for equivalent third-party AI and third-party-protection wording during parity QA if not already present.

## Latest checkpoints

- Brazilian Portuguese Terms: `3639545`
- Brazilian Portuguese Terms hub routing: `59e27da`
- Brazilian Portuguese Purchases & Refunds: `5f96375`
- Brazilian Portuguese Purchases hub routing: `ac9bc05`
- Brazilian Portuguese Privacy: `73d0f99`
- Brazilian Portuguese Privacy hub routing: `652bd82`
- Brazilian Portuguese Privacy AI safeguard sync: `0b1518c`
- Brazilian Portuguese Community Standards: `b88a75b`
- Brazilian Portuguese Community hub routing: `02e43ab`
- Canonical rendered Privacy AI hardening: `90b0d70`
- Canonical Privacy Markdown AI sync: `0ed9286`
- Russian Terms: `e46e9d8`
- Russian Terms hub routing: `dc6ce11`

Full-document localization progress: **37 / 100 complete (37%)** across the 25 requested locales. All **25 / 25 localized legal hubs exist (100%)**.

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
| 10 | ru | Русский | Ready | Ready | Pending | Pending | Pending |
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
