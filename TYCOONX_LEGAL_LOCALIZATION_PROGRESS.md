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

The Spanish wording consistently uses natural Spain-oriented legal language such as `Condiciones de uso`, `Compras y reembolsos`, `Política de privacidad`, `derecho de desistimiento`, `conformidad`, `reembolso`, `restauración` and `derechos digitales`, while protected product/platform names such as TycoonX, CK-Labs, Diamonds, 30-Day VIP, Lifetime VIP, Apple, Google Play, Xsolla and Family Sharing remain recognizable. The Spanish pages preserve the full canonical founder-protective scope, including price changes, genuine limited Lifetime VIP sales windows, regional pricing, pending/failed payments, duplicate grants, chargebacks, exploits, authoritative records, supported versions, provider changes, permanent service discontinuation, account deletion/restoration, moderation, privacy, and mandatory consumer rights.

**Spanish (Mexico) (`es_MX`) is now complete for all four full legal documents and has completed a native-language/full-release terminology pass**:
- `/tycoonx-legal/es_MX/terms`
- `/tycoonx-legal/es_MX/purchases`
- `/tycoonx-legal/es_MX/privacy`
- `/tycoonx-legal/es_MX/community`

The Mexican Spanish wording is intentionally localized rather than copied from Spain Spanish, using natural Mexico-oriented wording such as `Términos de Servicio`, `rentar`, `costos`, `en línea`, `cuenta regresiva`, `fallas`, `cancelación`, `contracargo`, `proceso de pago`, `reembolso`, `tratamiento de datos`, `responsable`, `monitoreo`, `eliminación de cuenta`, `reportes` and `bloqueos`, while preserving the same canonical legal effect and EU/German-specific legal concepts where those are actually applicable. The four pages preserve the complete canonical scope for account security, Diamonds, VIP, Lifetime VIP, prices, Apple/Google/Xsolla responsibilities, pending/failed payments, refunds, chargebacks, exploits, economy corrections, outages, account deletion/restoration, privacy, UGC/moderation, minors, platform rules, and mandatory consumer rights.

The localized hub routing uses an explicit per-locale document map instead of hard-coded nested locale conditions, making partial and complete future locale rollouts safer and easier to maintain.

The next unfinished locale/document is **French (`fr`) Terms of Service**.

The canonical English Terms and Purchases & Refunds source were refreshed on **August 25, 2026** to remove remaining stale beta wording without weakening the legal protections. Current repository search finds no exact displayed `TyconX` branding and no stale `beta` wording.

A current-policy recheck on August 25, 2026 confirmed that Apple App Review Guideline 1.2 still requires filtering, reporting, blocking, timely moderation response, and published contact information for UGC/social apps; Google Play still requires robust ongoing UGC moderation, Terms/User Policy acceptance before users create or upload UGC, and in-app reporting/blocking appropriate to the experience. Google Play's announced expansion of its Age-Restricted Content and Functionality, Child Safety Standards, and Families rules for apps whose core functionality is anonymous or random chat becomes effective **August 26, 2026**. TycoonX does not gain a promise to provide anonymous or random chat from these documents, and any such future feature must undergo a fresh child-safety/platform review before release. The existing Community Standards already preserve CK-Labs' ability to age-gate, restrict, redesign, or discontinue social features where law, platform rules, safety, technical limits, or abuse patterns justify it.

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

Full-document localization progress: **16 / 100 complete** across the 25 requested locales. All **25 / 25 localized legal hubs** exist.

| Order | Locale | Language | Legal hub | Full Terms | Purchases & Refunds | Privacy | Community Standards |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | tr | Türkçe | Ready | Ready | Ready | Ready | Ready |
| 2 | de | Deutsch | Ready | Ready | Ready | Ready | Ready |
| 3 | es | Español | Ready | Ready | Ready | Ready | Ready |
| 4 | es_MX | Español (México) | Ready | Ready | Ready | Ready | Ready |
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
