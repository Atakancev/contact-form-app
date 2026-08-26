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
- Do not mark a localized document `Ready` until the corresponding page exists, contains every canonical section, preserves product/payment/legal distinctions, uses native punctuation and terminology, and contains no stale English legal paragraphs except protected product, company, platform, and legal-proper names where appropriate.

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
- **Chinese (`zh`) 4/4**
- **Chinese Simplified (`zh_Hans`) 4/4**
- **Chinese Traditional (`zh_Hant`) 4/4**
- **Arabic (`ar`) 4/4**
- **Dutch (`nl`) 4/4**

Swedish (`sv`) is now **2/4**: Terms and Purchases & Refunds Ready; Privacy and Community Standards Pending.

The next unfinished locale/document is **Swedish (`sv`) Privacy Policy**.

### Repository reconciliation, August 27, 2026

Tracker state is reconciled against actual repository pages rather than presumed completion. Full pages exist and are routed for every completed locale above. Swedish now has complete Terms and Purchases & Refunds pages at `app/tycoonx-legal/sv/terms/page.tsx` and `app/tycoonx-legal/sv/purchases/page.tsx`; the Swedish hub routes those two cards to localized pages while Privacy and Community Standards continue to fall back to the canonical English documents until translated.

Rows for `nb`, `pl`, `th`, `vi`, `uk`, `hi`, and `id` are intentionally `Pending` for all four full documents until actual localized pages exist. Do not infer readiness from the localized hub summaries alone.

The canonical English Terms and Purchases & Refunds source were refreshed on **August 25, 2026** to remove stale pre-release wording without weakening legal protections. The canonical English Privacy Policy was refreshed on **August 26, 2026** to make current third-party data protection and third-party AI disclosure/permission safeguards explicit. The canonical English Community Standards were refreshed on **August 26, 2026** to preserve age-gating and child-safety flexibility for any future anonymous/random-chat feature under current Google Play rules.

Repository QA continues to require zero displayed `TyconX` branding and zero stale `beta` wording in player-facing legal copy.

## Current policy checkpoint, August 27, 2026

- Apple App Review Guideline 3.1.1 continues to state that purchased in-game currencies may not expire and that apps should provide a restore mechanism for restorable In-App Purchases.
- Apple privacy rules continue to require disclosure of collected data and uses, retention/deletion practices, and same or equivalent protection by third parties receiving user data. Apple also requires clear disclosure and explicit permission before sharing personal data with third-party AI where its rules or applicable law require it.
- Google Play Billing guidance continues to require entitlement only after a transaction reaches `PURCHASED`, never while it remains `PENDING`. Completed purchases should be acknowledged promptly; failure to acknowledge within three days can result in automatic refund and entitlement revocation, and the period starts only after a pending purchase becomes `PURCHASED`.
- Google Play anti-fraud guidance continues to say not to use `orderId` as the universal duplicate-purchase identifier because some valid purchases do not generate an `orderId`. Purchase-token and authoritative purchase-state verification remain the safer entitlement basis.
- Google Play Developer API release notes dated **July 6, 2026** describe a collaborative chargeback-review flow. A `PendingRefundReviewNotification` may require a response through `orders.reviewrefund` within **24 hours**, with a developer preference and relevant lawful purchase-usage evidence where available.
- Google Play User Data rules continue to require apps with account creation to provide a readily discoverable account-deletion path both in-app and through an external web resource. Google's July 15, 2026 policy update also clarifies that User Data requirements apply to third-party AI integrations.
- EU Digital Services Act Articles 16 and 17 continue to support the Community Standards structure for notice-and-action handling and statements of reasons where those hosting-service rules apply.
- German BGB § 356a continues to require, for covered online distance contracts, a clearly labelled electronic withdrawal function that remains continuously available during the withdrawal period, a confirmation function, and prompt receipt confirmation on a durable medium.
- German BGB § 327f continues to require necessary updates, including security updates, during the legally relevant period and preserves the limited statutory protection for defects caused solely by a consumer's failure to install a properly supplied and properly explained update where all legal conditions are met.
- German BGB § 327r continues to govern qualifying changes to continuously supplied digital products beyond what is necessary to maintain conformity.
- Xsolla's current legal index lists its **Privacy Policy as updated June 3, 2026** and **Refund Policy as updated June 16, 2026**. Xsolla's Refund Policy continues to state that the applicable refund-policy type is shown at checkout.
- The August 27, 2026 recheck of Apple, Google Play, Xsolla, and German BGB sources did not require another canonical English wording change.

## Latest checkpoints

- Swedish Purchases & Refunds: `f1b915d8`
- Swedish Purchases hub routing: `66eae5f`
- Swedish Terms: `b0093d5`
- Swedish Terms hub routing: `1110ec3`
- Dutch Privacy Policy: `e7ed04e`
- Dutch Community Standards: `a5e3b9b`
- Complete Dutch hub routing: `f5cfaa4`
- Complete Arabic hub routing: `12aa024`
- Complete Traditional Chinese hub routing: `2059a93`
- Simplified Chinese Community Standards: `395997b`
- Canonical rendered Privacy AI hardening: `90b0d70`
- Canonical Privacy Markdown AI sync: `0ed9286`
- Canonical Community child-safety hardening: `b73903c`
- Canonical Community Markdown sync: `0215590`

Full-document localization progress: **70 / 100 complete (70%)** across the 25 requested locales. All **25 / 25 localized legal hubs exist (100%)**.

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
| 18 | sv | Svenska | Ready | Ready | Ready | Pending | Pending |
| 19 | nb | Norsk bokmål | Ready | Pending | Pending | Pending | Pending |
| 20 | pl | Polski | Ready | Pending | Pending | Pending | Pending |
| 21 | th | ไทย | Ready | Pending | Pending | Pending | Pending |
| 22 | vi | Tiếng Việt | Ready | Pending | Pending | Pending | Pending |
| 23 | uk | Українська | Ready | Pending | Pending | Pending | Pending |
| 24 | hi | हिन्दी | Ready | Pending | Pending | Pending | Pending |
| 25 | id | Bahasa Indonesia | Ready | Pending | Pending | Pending | Pending |
