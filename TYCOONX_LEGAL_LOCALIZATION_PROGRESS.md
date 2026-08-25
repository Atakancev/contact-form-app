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

**Turkish is complete for all four full legal documents** and has completed a terminology/full-release QA pass:
- `/tycoonx-legal/tr/terms`
- `/tycoonx-legal/tr/purchases`
- `/tycoonx-legal/tr/privacy`
- `/tycoonx-legal/tr/community`

**German is complete for all four full legal documents and has completed a cross-document terminology/full-release QA pass**:
- `/tycoonx-legal/de/terms`
- `/tycoonx-legal/de/purchases`
- `/tycoonx-legal/de/privacy`
- `/tycoonx-legal/de/community`

**Spanish (`es`) is complete for all four full legal documents and has completed a native-language/full-release consistency pass**:
- `/tycoonx-legal/es/terms`
- `/tycoonx-legal/es/purchases`
- `/tycoonx-legal/es/privacy`
- `/tycoonx-legal/es/community`

The Spanish wording consistently uses natural Spain-oriented legal language such as `Condiciones de uso`, `Compras y reembolsos`, `Política de privacidad`, `derecho de desistimiento`, `conformidad`, `reembolso`, `restauración` and `derechos digitales`, while protected product/platform names such as TycoonX, CK-Labs, Diamonds, 30-Day VIP, Lifetime VIP, Apple, Google Play, Xsolla and Family Sharing remain recognizable.

**Spanish (Mexico) (`es_MX`) is complete for all four full legal documents and has completed a native-language/full-release terminology pass**:
- `/tycoonx-legal/es_MX/terms`
- `/tycoonx-legal/es_MX/purchases`
- `/tycoonx-legal/es_MX/privacy`
- `/tycoonx-legal/es_MX/community`

The Mexican Spanish wording is intentionally localized rather than copied from Spain Spanish, while preserving the same canonical legal effect and the same EU/German-specific concepts where those rules are actually applicable.

**French (`fr`) Terms of Service are now complete and routed from the French legal hub**:
- `/tycoonx-legal/fr/terms`

The French Terms use natural France-oriented legal language such as `Conditions d’utilisation`, `droit de rétractation`, `conformité`, `support durable`, `remboursement`, `rétrofacturation`, `résiliation`, `droits numériques` and `médiation de la consommation`. The full canonical scope is preserved, including account security, virtual assets, Diamonds, one-time 30-Day VIP, limited-time Lifetime VIP, Apple/Google/Xsolla roles, regional and future price changes, obvious pricing/configuration errors, duplicate grants, pending/failed payments, chargebacks, exploits, authoritative records, economy corrections, supported versions, outages, provider changes, permanent discontinuation, business transfer, UGC, liability, cross-platform recognition, Family Sharing and mandatory consumer rights.

The localized hub routing uses an explicit per-locale document map instead of hard-coded nested locale conditions, making partial and complete future locale rollouts safer and easier to maintain.

The next unfinished locale/document is **French (`fr`) Purchases & Refunds Policy**.

The canonical English Terms and Purchases & Refunds source were refreshed on **August 25, 2026** to remove remaining stale beta wording without weakening the legal protections. Current repository search finds no exact displayed `TyconX` branding and no stale `beta` wording.

A current-policy recheck on **August 25, 2026** confirmed that German BGB §356a still requires a clearly labelled, continuously available and easily accessible electronic withdrawal function for covered online distance contracts, together with a confirmation step and receipt confirmation on a durable medium. Apple still requires UGC/social apps to provide filtering, reporting, blocking and published contact information under App Review Guideline 1.2, and Apple Family Sharing for eligible non-consumable In-App Purchases still depends on CK-Labs enabling the feature in App Store Connect and handling revocations correctly. Google Play still requires its billing system for covered in-app digital goods unless an applicable exception/program applies. Xsolla's current legal index continues to list its Refund Policy as updated **June 16, 2026**, with the transaction-specific applicable refund-policy type shown through Xsolla checkout.

Current checkpoints:
- English Terms rendered: `8e9913e`
- Turkish Terms: `4907266`
- English Purchases & Refunds source: `ca8ff53`
- Turkish Purchases & Refunds: `ac38e4b`
- Turkish Privacy Policy: `6417815`
- Turkish Community Standards: `831d73e`
- Turkish legal hub routing: `4271350`
- German Terms: `a7f8ade`
- German Terms contact parity: `5d166cb`
- German Purchases & Refunds: `05df5f4`
- German Privacy Policy: `5e5b91f`
- German Community Standards: `b35806e`
- German legal hub routing: `31dfdda`
- Spanish Terms: `b6f5de8`
- Spanish Purchases & Refunds: `fae87ab`
- Spanish Privacy Policy: `418fb8a`
- Spanish Community Standards: `a0ada4e`
- Spanish legal hub routing/refactor: `fe27666`
- Mexican Spanish Terms: `ae5a05f`
- Mexican Spanish Terms hub routing: `d42e61e`
- Mexican Spanish Purchases & Refunds: `ec83467`
- Mexican Spanish Purchases hub routing: `7e8a02a`
- Mexican Spanish Privacy Policy: `8f4e6c5`
- Mexican Spanish Privacy hub routing: `a02de5f`
- Mexican Spanish Community Standards: `a396bfa`
- Mexican Spanish complete hub routing: `22a4795`
- French Terms: `c5206be`
- French Terms hub routing: `68434d4`

Full-document localization progress: **17 / 100 complete** across the 25 requested locales. All **25 / 25 localized legal hubs** exist.

| Order | Locale | Language | Legal hub | Full Terms | Purchases & Refunds | Privacy | Community Standards |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | tr | Türkçe | Ready | Ready | Ready | Ready | Ready |
| 2 | de | Deutsch | Ready | Ready | Ready | Ready | Ready |
| 3 | es | Español | Ready | Ready | Ready | Ready | Ready |
| 4 | es_MX | Español (México) | Ready | Ready | Ready | Ready | Ready |
| 5 | fr | Français | Ready | Ready | Pending | Pending | Pending |
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
