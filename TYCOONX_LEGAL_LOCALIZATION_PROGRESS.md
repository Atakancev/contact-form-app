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

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all 25 target locales and provides native-language navigation plus localized summaries.

Completed locale sets:

- **Turkish (`tr`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Native-language/full-release QA completed.
- **German (`de`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Native-language/full-release QA completed.
- **Spanish (`es`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Spain-oriented QA completed.
- **Spanish (Mexico) (`es_MX`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Mexico-oriented QA completed.
- **French (`fr`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. France-oriented QA completed.
- **French (Canada) (`fr_CA`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Canadian-French QA completed.

Italian localization is now in progress:

- `/tycoonx-legal/it/terms` is complete and routed from the Italian legal hub.
- `/tycoonx-legal/it/purchases` is complete and routed from the Italian legal hub.
- Privacy and Community Standards still fall back to the canonical English pages until their Italian versions are complete.
- The Italian legal wording uses native terminology such as `Termini di Servizio`, `diritto di recesso`, `conformità`, `supporto durevole`, `chargeback`, `ripristino`, `risoluzione`, `negozio web`, `rimborso` and `controversie`, while preserving the full canonical legal scope.

The localized hub routing uses an explicit per-locale document map so partially completed locales route only completed localized documents and safely fall back to canonical English for unfinished documents.

The next unfinished locale/document is **Italian (`it`) Privacy Policy**.

The canonical English Terms and Purchases & Refunds source were refreshed on **August 25, 2026** to remove stale pre-release wording without weakening legal protections. Repository QA continues to require no displayed `TyconX` branding and no stale wording implying the live service is a beta.

## Current policy checkpoint, August 25, 2026

- German BGB §356a still requires, for covered online distance contracts, a clearly labelled, continuously available and easily accessible electronic withdrawal function, a confirmation step, and receipt confirmation on a durable medium.
- Apple App Review Guideline 1.2 still requires UGC/social apps to provide filtering of objectionable material, an in-app reporting mechanism with timely responses, user blocking, and published developer contact information.
- Google Play still requires robust and ongoing UGC moderation, Terms/User Policy acceptance before users create or upload UGC, in-app reporting and blocking appropriate to the interaction type, and safeguards preventing in-app monetization from encouraging objectionable user behavior.
- Under the EU Digital Services Act, Article 16 still requires an easy-to-access electronic notice-and-action mechanism for specific allegedly illegal content when the service qualifies as a hosting service, and Article 17 still requires clear and specific statements of reasons for covered moderation restrictions.
- Apple App Review Guideline 5.1 still requires an easily accessible privacy policy that identifies collected data, collection methods and uses, describes retention/deletion and consent withdrawal, and requires apps supporting account creation to offer account deletion within the app.
- Apple’s account-deletion guidance still requires deletion of the whole account and associated data that the developer is not legally required to retain, while allowing legally required retention and requiring users to be informed about purchase/subscription consequences.
- Google Play still requires apps offering account creation to provide both an in-app account-deletion path and an external Web resource where users can request deletion of the app account and associated data.
- Apple App Review Guideline 3.1.1 still requires In-App Purchase for covered in-app digital unlocks, says purchased in-game currency may not expire, and requires a restore mechanism for restorable purchases.
- Apple Family Sharing remains available only for eligible non-consumables and auto-renewable subscriptions when enabled by the developer. Once enabled for an eligible In-App Purchase in App Store Connect, it cannot be turned off, and entitlement revocation must be handled.
- Google Play still requires entitlement to be withheld while a purchase is `PENDING`, granted only after a valid `PURCHASED` state, and completed purchases to be acknowledged within three days to avoid automatic refund/revocation.
- Xsolla’s Privacy Policy is listed as updated **June 3, 2026** and its Refund Policy as updated **June 16, 2026**. Xsolla states that the applicable refund-policy type is shown in the checkout and describes its own data-processing role separately from CK-Labs’s processing.

Latest checkpoints:

- French complete set routing: `1502af4`
- Canadian French Terms: `0c80692`
- Canadian French Purchases & Refunds: `baca7e1`
- Canadian French Privacy: `d29d586`
- Canadian French Community Standards: `9da20fc`
- Canadian French complete hub routing: `86c167f`
- Italian Terms: `943f337`
- Italian Terms hub routing: `3c51c92`
- Italian Purchases & Refunds: `be082e7`
- Italian Purchases hub routing: `cdab78d`

Full-document localization progress: **26 / 100 complete (26%)** across the 25 requested locales. All **25 / 25 localized legal hubs exist (100%)**.

| Order | Locale | Language | Legal hub | Full Terms | Purchases & Refunds | Privacy | Community Standards |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | tr | Türkçe | Ready | Ready | Ready | Ready | Ready |
| 2 | de | Deutsch | Ready | Ready | Ready | Ready | Ready |
| 3 | es | Español | Ready | Ready | Ready | Ready | Ready |
| 4 | es_MX | Español (México) | Ready | Ready | Ready | Ready | Ready |
| 5 | fr | Français | Ready | Ready | Ready | Ready | Ready |
| 6 | fr_CA | Français (Canada) | Ready | Ready | Ready | Ready | Ready |
| 7 | it | Italiano | Ready | Ready | Ready | Pending | Pending |
| 8 | pt | Português | Ready | Pending | Pending | Pending | Pending |
| 9 | pt_BR | Português (Brasil) | Ready | Pending | Pending | Pending | Pending |
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

## Translation completion rule

Do not mark a localized document `Ready` until it contains every canonical section, preserves product/payment/legal distinctions, uses native punctuation and terminology, and contains no stale English legal paragraphs except protected product, company, platform, and legal-proper names where appropriate.
