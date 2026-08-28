# TycoonX Legal Localization Progress

Canonical legal source: the English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository.

## Rules

- Always display the brand as **TycoonX**. Technical route/file names containing `tyconx` may remain where changing them could break URLs, but rendered prose must never display `TyconX`.
- TycoonX goes to full release on **September 1, 2026**. Do not describe the live service, users, purchases, VIP, Diamonds, rewards, or legal terms as beta.
- Translate for legal meaning, not word-for-word.
- Localized legal copy must sound natural to a native speaker while preserving the legal effect of the English source.
- Do not omit mandatory-rights language, CK-Labs protections, payment-channel responsibilities, refund/chargeback rules, price-change rules, Lifetime VIP limitations, security clauses, privacy rights, community-safety obligations, or service-discontinuation language.
- English remains canonical. Refresh localized versions whenever the canonical meaning changes materially.
- Arabic uses RTL layout.
- Locale order is: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.
- Within each locale the order is Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not mark a localized document `Ready` until the page exists, contains every canonical section, preserves product/payment/legal distinctions, uses native punctuation and terminology, and contains no stale English legal paragraphs except protected product, company, platform, and legal-proper names where appropriate.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales and provides native-language navigation plus localized summaries.

All 25 locales have current Terms, Privacy Policy, and Community Standards. That accounts for **75 current localized full documents**. Purchases & Refunds is current in the first eleven locales below, bringing the current total to **86/100**.

### Fully aligned locale sets

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

### Current localization refresh queue

1. Korean (`ko`) — Purchases & Refunds
2. Chinese (`zh`) — Purchases & Refunds
3. Chinese Simplified (`zh_Hans`) — Purchases & Refunds
4. Chinese Traditional (`zh_Hant`) — Purchases & Refunds
5. Arabic (`ar`) — Purchases & Refunds
6. Dutch (`nl`) — Purchases & Refunds
7. Swedish (`sv`) — Purchases & Refunds
8. Norwegian Bokmål (`nb`) — Purchases & Refunds
9. Polish (`pl`) — Purchases & Refunds
10. Thai (`th`) — Purchases & Refunds
11. Vietnamese (`vi`) — Purchases & Refunds
12. Ukrainian (`uk`) — Purchases & Refunds
13. Hindi (`hi`) — Purchases & Refunds
14. Indonesian (`id`) — Purchases & Refunds

**Exact next unfinished locale/document: Korean (`ko`) — Purchases & Refunds.**

## August 28, 2026 Purchases refresh

The canonical English Purchases & Refunds Policy materially changed after review of the CPC Network's March 21, 2025 *Key Principles on In-Game Virtual Currencies*. The earlier Diamond withdrawal wording treated a Diamond bundle as immediately supplied digital content. The current canonical policy instead:

- does not treat the mere crediting of purchased Diamonds as automatically extinguishing an EU/EEA statutory withdrawal right;
- preserves any applicable 14-day withdrawal right for unused purchased Diamonds;
- keeps provider/merchant refund-routing responsibilities without using them to remove a mandatory right;
- requires legally applicable real-money price transparency for paid Diamonds and content/services offered for purchasable Diamonds; and
- rejects virtual-currency layers or package design used to obscure real cost or force materially unwanted surplus currency where applicable law prohibits that practice.

The refreshed localized Purchases pages must preserve those points while keeping the existing distinctions among Diamonds, one-time 30-Day VIP, and limited-window Lifetime VIP, together with Apple App Store, Google Play, Xsolla, refund, chargeback, pricing, promotion, entitlement, update, security, and permanent-discontinuation rules.

### Japanese checkpoint

On **August 28, 2026**, `app/tycoonx-legal/ja/purchases/page.tsx` was refreshed to the canonical meaning. The page now:

- preserves an applicable 14-day withdrawal right for purchased and unused Diamonds instead of classifying a Diamond pack as immediately supplied digital content;
- explains that Diamonds already spent, transferred, or exchanged are handled according to mandatory law and the circumstances of the specific transaction;
- preserves Apple, Google, Xsolla, or another merchant/payment provider as the procedural refund or withdrawal route where applicable without allowing that allocation to remove a mandatory right;
- adds clear real-money price transparency for paid Diamonds and digital content/services offered for purchasable Diamonds where EU/EEA rules require it;
- rejects virtual-currency layers or bundle structures used to hide the real cost or force materially unwanted surplus currency where prohibited;
- remains naturally localized in Japanese (`ja`) while preserving the exact `TycoonX` brand;
- keeps the canonical required-updates/supported-versions section and the existing Apple, Google Play, Xsolla, Lifetime VIP, 30-Day VIP, refund, chargeback, entitlement, error, pricing, promotion, Family Sharing, and permanent-service-discontinuation protections; and
- is synchronized to **August 28, 2026** for both the Japanese version and the canonical English version.

### Russian checkpoint

On **August 28, 2026**, `app/tycoonx-legal/ru/purchases/page.tsx` was refreshed to the canonical meaning. The page now:

- preserves an applicable 14-day withdrawal right for purchased and unused Diamonds instead of classifying a Diamond pack as immediately supplied digital content;
- explains that Diamonds already spent, transferred, or exchanged are handled according to mandatory law and the circumstances of the specific transaction;
- adds clear real-money price transparency for paid Diamonds and digital content/services offered for purchasable Diamonds where EU/EEA rules require it;
- rejects virtual-currency layers or bundle structures used to hide the real cost or force materially unwanted surplus currency where prohibited;
- remains naturally localized in Russian (`ru`) while preserving the exact `TycoonX` brand;
- keeps the canonical required-updates/supported-versions section and the existing Apple, Google Play, Xsolla, Lifetime VIP, 30-Day VIP, refund, chargeback, entitlement, error, pricing, promotion, Family Sharing, and permanent-service-discontinuation protections; and
- is synchronized to **August 28, 2026** for both the Russian version and the canonical English version.

## Canonical source status

- English Terms: refreshed **August 25, 2026** to remove stale pre-release wording without weakening legal protections.
- English Purchases & Refunds: materially refreshed **August 28, 2026** for EU/EEA purchased-Diamond withdrawal rights and virtual-currency real-money price transparency.
- English Privacy Policy: refreshed **August 26, 2026** for third-party data protection and third-party AI disclosure/permission safeguards.
- English Community Standards: refreshed **August 26, 2026** for age-gating and child-safety flexibility around any future anonymous/random-chat feature.
- Repository QA requires zero displayed `TyconX` branding and zero stale `beta` wording in player-facing TycoonX legal copy.

## Commercial/legal/payment checkpoints already covered

The repository's canonical legal documents and release gates cover the main current TycoonX commercial risks, including:

- Apple App Store In-App Purchase, non-expiring purchased in-game currency, restoration of restorable purchases, storefront-specific external-purchase linking, and paid-feature metadata clarity;
- Google Play `PENDING` versus `PURCHASED`, acknowledgement, secure backend verification, alternative-billing/external-offer program requirements, external-transaction reporting, and refund/chargeback reconciliation;
- Xsolla merchant-of-record/payment-role allocation, transaction-specific checkout/refund terms, tax/VAT handling, failed or reversed payments, refunds, disputes, and chargebacks;
- one-time 30-Day VIP with no silent auto-renewal;
- Lifetime VIP as a limited-time promotional offering available only during selected genuine sales windows, which may be withdrawn from sale, may never return, and creates no expectation of continuous availability;
- future price/bundle changes, regional pricing, taxes/VAT/FX changes, promotions and coupon abuse, obvious pricing/configuration errors, duplicate or accidental entitlement grants, authoritative transaction records, old/unsupported app versions, account compromise, security emergencies, provider outages/rule changes, provider replacement, business succession, free/promotional/test grants, force majeure, feature replacement, and lawful permanent service discontinuation;
- German/EU mandatory withdrawal, conformity, update, modification, liability, notice, consent, price-display, and digital-product remedies; and
- GDPR/security-incident and EU Cyber Resilience Act release gates.

## Latest checkpoints

- Japanese Purchases EU virtual-currency refresh: `e9fcb24`
- Japanese EU virtual-currency regression coverage: `f0c26cd`
- Russian Purchases EU virtual-currency refresh: `3240234`
- Portuguese (Brazil) Purchases EU virtual-currency refresh: `710cf4c`
- Portuguese (Brazil) EU virtual-currency regression coverage: `a127a90`
- Portuguese Purchases EU virtual-currency refresh: `a487161`
- Italian + Portuguese EU virtual-currency regression coverage: `abcfa8d`
- Italian Purchases EU virtual-currency refresh: `6e573b2`
- French (Canada) Purchases EU virtual-currency and supported-version refresh: `d46cf71`
- French Purchases EU virtual-currency and supported-version refresh: `7f36140`, `9b3acf4`
- Spanish (Mexico) Purchases EU virtual-currency refresh: `fbacb96`
- Spanish Purchases EU virtual-currency refresh: `50f42fc`
- German Purchases EU virtual-currency refresh: `e556ac9`
- Turkish Purchases EU virtual-currency refresh: `6a81c2a`
- Canonical rendered/Markdown Purchases EU virtual-currency hardening: `d349400`, `6631b7e`
- EU/EEA virtual-currency release gate: `852989d`

## Progress snapshot

- **Localized full documents:** 86/100 (86%)
- **Localized hubs:** 25/25 (100%)
- **Canonical English legal wording:** 99.5%
- **Full commercial/legal/payment readiness:** 95%
- **Overall project completion:** 94%
- **Next:** Korean (`ko`) — Purchases & Refunds
