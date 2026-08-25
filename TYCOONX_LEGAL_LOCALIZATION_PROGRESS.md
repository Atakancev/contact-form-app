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

**Spanish (Mexico) (`es_MX`) Terms of Service is now complete** at `/tycoonx-legal/es_MX/terms`. It is intentionally localized rather than copied from Spain Spanish, using Mexico-oriented wording such as `Términos de Servicio`, `rentar`, `costos`, `en línea`, `cuenta regresiva`, `fallas` and `cancelación`, while preserving the same canonical legal effect and the EU/German-specific legal concepts where those are actually applicable.

The localized hub routing now uses an explicit per-locale document map instead of hard-coded nested locale conditions, making partial and complete future locale rollouts safer and easier to maintain.

The next unfinished locale/document is **Spanish (Mexico) (`es_MX`) Purchases & Refunds Policy**.

The canonical English Terms and Purchases & Refunds source were refreshed on **August 25, 2026** to remove remaining stale beta wording without weakening the legal protections. Current repository search finds no exact displayed `TyconX` branding and no stale `beta` wording.

A current-policy recheck on August 25, 2026 confirmed the localized legal structure against current official sources: BGB § 356a still requires an electronic withdrawal function for covered online distance contracts, including a clearly labelled withdrawal control, confirmation step and durable-medium acknowledgement; BGB § 327f still governs required digital-product/security updates and consequences where a consumer does not install a properly supplied and notified update; Apple still requires UGC apps to comply with Guideline 1.2 and still supports Family Sharing for eligible non-consumable In-App Purchases; Google Play still maintains provider/developer refund responsibilities and transaction-status controls; Xsolla's current legal index still lists its Refund Policy as updated June 16, 2026 and Privacy Policy as updated June 3, 2026; and localized wording does not replace transaction-specific checkout disclosures, consent controls, Data Safety/App Privacy disclosures, moderation tooling, or platform configuration.

Google Play's announced expansion of its age-restricted content rules for apps whose core functionality is anonymous or random chat becomes effective **August 26, 2026**. TycoonX does not gain a promise to provide such functionality from these documents; any future anonymous/random-chat feature must undergo a fresh age-safety/platform review before release.

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

| Order | Locale | Language | Legal hub | Full Terms | Purchases & Refunds | Privacy | Community Standards |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | tr | Türkçe | Ready | Ready | Ready | Ready | Ready |
| 2 | de | Deutsch | Ready | Ready | Ready | Ready | Ready |
| 3 | es | Español | Ready | Ready | Ready | Ready | Ready |
| 4 | es_MX | Español (México) | Ready | Ready | Pending | Pending | Pending |
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
