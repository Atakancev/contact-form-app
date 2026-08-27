# TycoonX Legal Localization Progress

Canonical legal source: English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository.

## Rules

- Always display the brand as **TycoonX**.
- TycoonX goes to full release on **September 1, 2026**. Do not describe the live service as beta.
- Translate for meaning, not word-for-word.
- Localized legal copy must sound natural to a native speaker while preserving the legal effect of the English source.
- Do not omit mandatory-rights language, CK-Labs protections, payment-channel responsibilities, refund/chargeback rules, price-change rules, Lifetime VIP limitations, security clauses, privacy rights, community-safety obligations, or service-discontinuation language.
- English remains canonical. Refresh localized versions whenever the canonical meaning changes materially.
- Arabic uses RTL layout.
- Locale order is: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.
- Within each locale the order is Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not mark a localized document `Ready` until the corresponding page exists, contains every canonical section, preserves product/payment/legal distinctions, uses native punctuation and terminology, and contains no stale English legal paragraphs except protected product, company, platform, and legal-proper names where appropriate.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all 25 target locales and provides native-language navigation plus localized summaries.

**All 25 locale sets are now 4/4 complete.**

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
- **Chinese (`zh`) 4/4**
- **Chinese Simplified (`zh_Hans`) 4/4**
- **Chinese Traditional (`zh_Hant`) 4/4**
- **Arabic (`ar`) 4/4**
- **Dutch (`nl`) 4/4**
- **Swedish (`sv`) 4/4**
- **Norwegian Bokmål (`nb`) 4/4**
- **Polish (`pl`) 4/4**
- **Thai (`th`) 4/4**
- **Vietnamese (`vi`) 4/4**
- **Ukrainian (`uk`) 4/4**
- **Hindi (`hi`) 4/4**
- **Indonesian (`id`) 4/4**

There is **no unfinished locale/document** in the requested localization queue. Future runs should first check for canonical English changes, platform/legal changes, broken localized routing, brand/release wording drift, or localization parity regressions before making edits.

## Canonical source status

- English Terms and Purchases & Refunds were refreshed on **August 25, 2026** to remove stale pre-release wording without weakening legal protections.
- English Privacy Policy was refreshed on **August 26, 2026** to make third-party data protection and third-party AI disclosure/permission safeguards explicit.
- English Community Standards were refreshed on **August 26, 2026** to preserve age-gating and child-safety flexibility for any future anonymous/random-chat feature under current Google Play rules.
- Repository QA requires zero displayed `TyconX` branding and zero stale `beta` wording in player-facing TycoonX legal copy.

## Current policy checkpoint, August 27, 2026

- Apple App Review Guideline 3.1.1 continues to require In-App Purchase for covered digital unlocks, states that purchased in-game currencies may not expire, and requires a restore mechanism for restorable In-App Purchases.
- Google Play Billing guidance continues to require entitlement only after a transaction reaches `PURCHASED`, never while it remains `PENDING`. Completed purchases must be acknowledged promptly; Google states that an unacknowledged purchase can be automatically refunded after three days, and the three-day window starts only after a pending transaction becomes `PURCHASED`.
- Google Play guidance recommends secure-backend verification and checking that a purchase token has not already been used before granting entitlement again.
- German BGB § 356a continues to require, for covered online distance contracts, an electronic withdrawal function that is continuously available during the withdrawal period, a clear confirmation function, and prompt confirmation on a durable medium.
- German BGB § 327f continues to require necessary updates, including security updates, during the legally relevant period and preserves the limited statutory protection for a defect caused solely by failure to install a properly supplied and explained update when all statutory conditions are met.
- German BGB § 327r continues to govern qualifying changes to continuously supplied digital products beyond what is necessary to maintain conformity, including advance durable-medium information and termination rights for certain more-than-insignificant impairments.
- Xsolla's legal index continues to show its Privacy Policy as updated **June 3, 2026** and Refund Policy as updated **June 16, 2026**; the applicable refund-policy type is identified in Xsolla checkout.
- The August 27, 2026 recheck remains consistent with the canonical English legal framework. No new canonical English wording change was required in this run.

## Latest checkpoints

- Hindi Purchases & Refunds: `869de5d`
- Hindi Privacy Policy: `292a8c9`
- Hindi Community Standards: `3f26d5c`
- Indonesian Terms: `d01595d`
- Indonesian Purchases & Refunds: `17b507f`
- Indonesian Privacy Policy: `b0e1793`
- Indonesian Community Standards: `6d379c4`
- Complete Hindi + Indonesian hub routing: `8e64489`
- Hindi Terms: `a45a7fa`
- Complete Ukrainian hub routing: `1b0a591`
- Complete Vietnamese hub routing: `94388ed`
- Complete Thai hub routing: `5c833e64`
- Complete Polish hub routing: `4702080`
- Complete Norwegian Bokmål hub routing: `8c51827`
- Complete Swedish hub routing: `db6cc19`
- Complete Dutch hub routing: `f5cfaa4`
- Canonical rendered Privacy AI hardening: `90b0d70`
- Canonical Privacy Markdown AI sync: `0ed9286`
- Canonical Community child-safety hardening: `b73903c`
- Canonical Community Markdown sync: `0215590`

Full-document localization progress: **100 / 100 complete (100%)** across the 25 requested locales. All **25 / 25 localized legal hubs exist (100%)**.

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
| 14 | zh_Hans | 简体中文 | Ready | Ready | Ready | Ready | Ready |
| 15 | zh_Hant | 繁體中文 | Ready | Ready | Ready | Ready | Ready |
| 16 | ar | العربية | Ready | Ready | Ready | Ready | Ready |
| 17 | nl | Nederlands | Ready | Ready | Ready | Ready | Ready |
| 18 | sv | Svenska | Ready | Ready | Ready | Ready | Ready |
| 19 | nb | Norsk bokmål | Ready | Ready | Ready | Ready | Ready |
| 20 | pl | Polski | Ready | Ready | Ready | Ready | Ready |
| 21 | th | ไทย | Ready | Ready | Ready | Ready | Ready |
| 22 | vi | Tiếng Việt | Ready | Ready | Ready | Ready | Ready |
| 23 | uk | Українська | Ready | Ready | Ready | Ready | Ready |
| 24 | hi | हिन्दी | Ready | Ready | Ready | Ready | Ready |
| 25 | id | Bahasa Indonesia | Ready | Ready | Ready | Ready | Ready |
