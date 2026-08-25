# TycoonX Legal Localization Progress

Canonical legal source: English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository.

## Rules

- Always display the brand as **TycoonX**.
- TycoonX goes to full release on **September 1, 2026**. Do not describe the live service as beta.
- Translate for meaning, not word-for-word.
- Localized legal copy must sound natural to a native speaker while preserving the exact legal effect of the English source.
- Do not omit mandatory-rights language, CK-Labs protections, payment-channel responsibilities, refund/chargeback rules, price-change rules, Lifetime VIP limitations, security clauses, or service-discontinuation language.
- English remains the canonical source during localization. A localized version must be refreshed when the canonical meaning changes.
- Arabic uses RTL layout.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` is available for all target locales below. It provides native-language navigation and a localized overview of Terms, Purchases & Refunds, Privacy, and Community Standards.

**Turkish is now complete for all four full legal documents** and has completed a terminology/full-release QA pass:
- `/tycoonx-legal/tr/terms`
- `/tycoonx-legal/tr/purchases`
- `/tycoonx-legal/tr/privacy`
- `/tycoonx-legal/tr/community`

The Turkish hub now links directly to all four Turkish documents. The next unfinished locale/document is **German Terms of Service**.

The canonical English Terms and Purchases & Refunds source were refreshed on **August 25, 2026** to remove remaining stale beta wording without weakening the legal protections. Current repository search finds no exact displayed `TyconX` branding and no stale `beta` wording.

A current-policy recheck on August 25, 2026 confirmed that the privacy structure remains aligned with the current Apple App Review privacy disclosure requirements, Google Play User Data/Data Safety requirements, and Xsolla's Privacy Policy dated June 3, 2026. Localized wording does not replace platform-specific privacy disclosures or consent controls.

Current checkpoints:
- English Terms rendered: `8e9913e`
- Turkish Terms: `4907266`
- English Purchases & Refunds source: `ca8ff53`
- Turkish Purchases & Refunds: `ac38e4b`
- Turkish Privacy Policy: `6417815`
- Turkish Community Standards: `a26a9f3`
- Turkish legal hub routing: `4271350`

| Order | Locale | Language | Legal hub | Full Terms | Purchases & Refunds | Privacy | Community Standards |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | tr | Türkçe | Ready | Ready | Ready | Ready | Ready |
| 2 | de | Deutsch | Ready | Pending | Pending | Pending | Pending |
| 3 | es | Español | Ready | Pending | Pending | Pending | Pending |
| 4 | es_MX | Español (México) | Ready | Pending | Pending | Pending | Pending |
| 5 | fr | Français | Ready | Pending | Pending | Pending | Pending |
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

## Translation order

Complete full-document parity in the table order above. Within each locale, use this order:

1. Terms of Service
2. Purchases & Refunds Policy
3. Privacy Policy
4. Community Standards
5. Native-language QA and cross-document terminology check

Do not advance a locale to `Ready` for a full document until the translated version has all canonical sections, preserves product/payment/legal distinctions, uses native punctuation and terminology, and has no stale English legal paragraphs except protected product/company/platform names where appropriate.
