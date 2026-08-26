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
- **Chinese (`zh`) 4/4**: Terms, Purchases & Refunds, Privacy, Community Standards. Native-language/full-release and canonical-parity QA completed on August 26, 2026.

Current in-progress locale:

- **Chinese Simplified (`zh_Hans`) 2/4**: Terms and Purchases & Refunds Ready. Privacy and Community Standards Pending.

The next unfinished locale/document is **Chinese Simplified (`zh_Hans`) Privacy Policy**.

The canonical English Terms and Purchases & Refunds source were refreshed on **August 25, 2026** to remove stale pre-release wording without weakening legal protections. The canonical English Privacy Policy was refreshed on **August 26, 2026** to make current third-party data protection and third-party AI disclosure/permission safeguards explicit. The canonical English Community Standards were refreshed on **August 26, 2026** to preserve age-gating and child-safety flexibility for any future anonymous/random-chat feature under current Google Play rules.

Repository QA on August 26, 2026 continues to return no displayed `TyconX` branding and no stale `beta` wording.

## Current policy checkpoint, August 26, 2026

- Apple App Review Guideline 3.1.1 still states that purchased credits or in-game currencies may not expire and that restorable In-App Purchases need a restore mechanism. Apple also continues to require current entitlement handling for valid past purchases.
- Google Play Billing still requires entitlement only after a transaction reaches `PURCHASED`, never while it remains `PENDING`. Completed purchases should be acknowledged promptly; current Google guidance warns that failure to acknowledge within three days can result in automatic refund/revocation.
- Google also currently warns not to use `orderId` as a universal duplicate-purchase key or database primary key because not every valid purchase receives one, including certain promo-code purchases. Purchase-token/provider-transaction identity and verified entitlement state are the safer authoritative basis.
- Effective **August 26, 2026**, Google Play expands Age-Restricted Content and Functionality and Child Safety Standards requirements to anonymous/random-chat apps. Qualifying apps must use Play Console controls to block minors; the Families policy also prohibits anonymous-chat apps from targeting children. TycoonX must re-review these rules before any future anonymous/random-chat feature ships.
- Google Play Child Safety Standards for covered apps require published standards against child sexual abuse and exploitation, an in-app reporting mechanism, appropriate action on known CSAM, compliance with applicable reporting laws, and a child-safety contact.
- German BGB § 356a continues to require, for covered online distance contracts, a clearly labelled electronic withdrawal function that remains continuously available during the withdrawal period, a confirmation function, and prompt receipt confirmation on a durable medium.
- German BGB § 327f continues to require necessary updates, including security updates, during the legally relevant period and preserves the limited statutory protection for defects caused solely by a consumer's failure to install a properly supplied and properly explained update where all legal conditions are met.
- German BGB § 327r continues to govern qualifying changes to continuously supplied digital products beyond what is necessary to maintain conformity.
- Xsolla's current legal index lists its **Privacy Policy as updated June 3, 2026** and **Refund Policy as updated June 16, 2026**. Transaction-specific Xsolla checkout information remains the safer source for the applicable Xsolla entity and refund-policy variant.
- The August 26, 2026 recheck of current Apple, Google Play, Xsolla, and German BGB sources did not require another canonical English wording change.

## Latest checkpoints

- Chinese Terms: `40d35f7`
- Chinese Terms hub routing: `28749fa`
- Chinese Purchases & Refunds: `e187e936`
- Chinese Privacy Policy: `d81d2605`
- Chinese Community Standards: `8df7db3d`
- Chinese complete hub routing: `a50a7f62`
- Simplified Chinese Terms: `d4c76de`
- Simplified Chinese Terms hub routing: `3c23793`
- Simplified Chinese Purchases & Refunds: `e6d04a9`
- Simplified Chinese Purchases hub routing: `60ffaaf`
- Canonical rendered Privacy AI hardening: `90b0d70`
- Canonical Privacy Markdown AI sync: `0ed9286`
- Canonical Community child-safety hardening: `b73903c`
- Canonical Community Markdown sync: `0215590`

Full-document localization progress: **54 / 100 complete (54%)** across the 25 requested locales. All **25 / 25 localized legal hubs exist (100%)**.

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
| 14 | zh_Hans | 简体中文 | Ready | Ready | Ready | Pending | Pending |
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
