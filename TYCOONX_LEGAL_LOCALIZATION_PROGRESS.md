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

Partially completed locale:

- **French (Canada) (`fr_CA`) 2/4**: Terms and Purchases & Refunds Ready. Privacy and Community Standards Pending.

Canadian French localized routes:

- `/tycoonx-legal/fr_CA/terms`
- `/tycoonx-legal/fr_CA/purchases`

The Canadian French copy uses Canada-oriented wording such as `Soutien TycoonX`, `admissibilité`, `renseignements`, `boutique Web`, `marchand officiel`, `bogues`, `réinitialisation`, `rétrofacturation`, `rabais` and `différends`, while preserving the same legal scope as the canonical English source. The Purchases & Refunds page includes all canonical sections covering Diamonds, one-time 30-Day VIP, limited-time Lifetime VIP, Apple/Google/Xsolla roles, failed/pending payments, future and regional price changes, checkout information, German electronic withdrawal requirements, restore/cross-device recovery, duplicate grants, promotions, refunds, chargebacks, unauthorized purchases, EU/German withdrawal rights, cross-platform recognition, Family Sharing, and permanent service discontinuation.

The localized hub routing uses an explicit per-locale document map so partially completed locales route only completed localized documents and safely fall back to canonical English for unfinished documents.

The next unfinished locale/document is **French (Canada) (`fr_CA`) Privacy Policy**.

The canonical English Terms and Purchases & Refunds source were refreshed on **August 25, 2026** to remove stale pre-release wording without weakening legal protections. Repository QA continues to require no displayed `TyconX` branding and no stale wording implying the live service is a beta.

## Current policy checkpoint, August 25, 2026

- German BGB §356a still requires, for covered online distance contracts, a clearly labelled, continuously available and easily accessible electronic withdrawal function, a confirmation step, and receipt confirmation on a durable medium.
- Apple App Review Guideline 3.1.1 still requires In-App Purchase for covered in-app digital unlocks, says purchased in-game currency may not expire, and requires a restore mechanism for restorable purchases.
- Apple Family Sharing remains available only for eligible non-consumables and auto-renewable subscriptions when enabled by the developer. Once enabled for an eligible In-App Purchase in App Store Connect, it cannot be turned off, and entitlement revocation must be handled.
- Google Play still requires entitlement to be withheld while a purchase is `PENDING`, granted only after a valid `PURCHASED` state, and completed purchases to be acknowledged within the applicable period to avoid automatic refund/revocation.
- Xsolla’s legal index lists its Refund Policy as updated **June 16, 2026**. The applicable Xsolla refund-policy type and contracting Xsolla company depend on the transaction-specific checkout/payment arrangement.

Latest checkpoints:

- French complete set routing: `1502af4`
- Canadian French Terms: `0c80692`
- Canadian French Terms hub routing: `7cf6a95`
- Canadian French Purchases & Refunds: `baca7e1`
- Canadian French Purchases hub routing: `3e7dcdd`

Full-document localization progress: **22 / 100 complete (22%)** across the 25 requested locales. All **25 / 25 localized legal hubs exist (100%)**.

| Order | Locale | Language | Legal hub | Full Terms | Purchases & Refunds | Privacy | Community Standards |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | tr | Türkçe | Ready | Ready | Ready | Ready | Ready |
| 2 | de | Deutsch | Ready | Ready | Ready | Ready | Ready |
| 3 | es | Español | Ready | Ready | Ready | Ready | Ready |
| 4 | es_MX | Español (México) | Ready | Ready | Ready | Ready | Ready |
| 5 | fr | Français | Ready | Ready | Ready | Ready | Ready |
| 6 | fr_CA | Français (Canada) | Ready | Ready | Ready | Pending | Pending |
| 7 | it | Italiano | Ready | Pending | Pending | Pending | Pending |
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
