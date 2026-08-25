# TycoonX Legal Localization Progress

Canonical legal source: English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository.

## Rules

- Always display the brand as **TycoonX**.
- TycoonX goes to full release on **September 1, 2026**. Do not describe the live service as beta.
- Translate for meaning, not word-for-word.
- Localized legal copy must sound natural to a native speaker while preserving the exact legal effect of the English source.
- Do not omit mandatory-rights language, CK-Labs protections, payment-channel responsibilities, refund/chargeback rules, price-change rules, Lifetime VIP limitations, security clauses, privacy rights, community-safety obligations, or service-discontinuation language.
- English remains the canonical source during localization. A localized version must be refreshed when the canonical meaning changes.
- Arabic uses RTL layout.
- Continue in locale order and, within each locale, in this order: Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` is available for all target locales and provides native-language navigation plus localized summaries.

Completed locale sets:

- **Turkish (`tr`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Native terminology/full-release QA completed.
- **German (`de`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Cross-document terminology/full-release QA completed.
- **Spanish (`es`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Spain-oriented native-language/full-release QA completed.
- **Spanish (Mexico) (`es_MX`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Mexico-oriented native-language/full-release QA completed.
- **French (`fr`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. France-oriented terminology/full-release consistency pass completed.

French routes:

- `/tycoonx-legal/fr/terms`
- `/tycoonx-legal/fr/purchases`
- `/tycoonx-legal/fr/privacy`
- `/tycoonx-legal/fr/community`

The French wording uses natural legal terminology such as `Conditions d’utilisation`, `Achats et remboursements`, `Politique de confidentialité`, `Règles communautaires`, `droit de rétractation`, `conformité`, `support durable`, `remboursement`, `rétrofacturation`, `responsable du traitement`, `résiliation` and `médiation de la consommation`. The full canonical scope is preserved, including Diamonds, one-time 30-Day VIP, limited-time Lifetime VIP, future and regional price changes, Apple/Google/Xsolla roles, pending and failed payments, duplicate grants, chargebacks, account compromise, exploits, authoritative records, economy corrections, restore behavior, cross-platform recognition, Family Sharing, data protection, account deletion, moderation, UGC, DSA notice-and-action concepts, platform safeguards and permanent service discontinuation.

The localized hub routing uses an explicit per-locale document map so partially completed locales route only completed localized documents and safely fall back to canonical English for unfinished documents.

The next unfinished locale/document is **French (Canada) (`fr_CA`) Terms of Service**.

The canonical English Terms and Purchases & Refunds source were refreshed on **August 25, 2026** to remove remaining stale beta wording without weakening legal protections. Repository QA continues to require no displayed `TyconX` branding and no stale `beta` wording.

A current-policy recheck on **August 25, 2026** confirmed:

- German BGB §356a still requires, for covered online distance contracts, a clearly labelled, continuously available and easily accessible electronic withdrawal function, a confirmation step, and receipt confirmation on a durable medium.
- Apple App Review Guideline 3.1.1 still requires In-App Purchase for covered in-app digital unlocks, says purchased in-game currency may not expire, and requires restoration for restorable purchases. Apple Family Sharing remains limited to eligible non-consumables/auto-renewable subscriptions when enabled by the developer, with revocation handling required.
- Apple App Review Guideline 5.1.1 still requires an accessible privacy policy describing collection, use, third-party sharing, retention/deletion, consent withdrawal and account/data deletion, and apps supporting account creation must offer account deletion in-app.
- Apple App Review Guideline 1.2 still requires UGC/social apps to include filtering, reporting, blocking and published contact information.
- Google Play still requires entitlement to be withheld while a purchase is `PENDING`, granted only after a valid `PURCHASED` state, and completed purchases to be acknowledged within the applicable period to avoid automatic refund/revocation.
- Google Play's User Data policy still requires a comprehensive privacy policy, accurate Data Safety disclosures and account deletion both in-app and through an external web resource for apps that support account creation.
- The EU Digital Services Act continues to require, where applicable, a sufficiently usable notice-and-action mechanism for allegedly illegal content and clear reasons for qualifying restrictions.
- Xsolla's current legal index lists its Refund Policy as updated **June 16, 2026** and its Privacy Policy as updated **June 3, 2026**.

Latest checkpoints:

- French Terms: `c5206be`
- French Terms hub routing: `68434d4`
- French Purchases & Refunds: `1af8051`
- French Purchases hub routing: `d265625`
- French Privacy Policy: `8942994`
- French Privacy hub routing: `b08ef06`
- French Community Standards: `1a241a1`
- French complete hub routing: `1502af4`

Full-document localization progress: **20 / 100 complete (20%)** across the 25 requested locales. All **25 / 25 localized legal hubs exist (100%)**.

| Order | Locale | Language | Legal hub | Full Terms | Purchases & Refunds | Privacy | Community Standards |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | tr | Türkçe | Ready | Ready | Ready | Ready | Ready |
| 2 | de | Deutsch | Ready | Ready | Ready | Ready | Ready |
| 3 | es | Español | Ready | Ready | Ready | Ready | Ready |
| 4 | es_MX | Español (México) | Ready | Ready | Ready | Ready | Ready |
| 5 | fr | Français | Ready | Ready | Ready | Ready | Ready |
| 6 | fr_CA | Français (Canada) | Ready | Pending | Pending | Pending | Pending |
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

Do not mark a localized document `Ready` until it has every canonical section, preserves product/payment/legal distinctions, uses native punctuation and terminology, and contains no stale English legal paragraphs except protected product/company/platform names where appropriate.
