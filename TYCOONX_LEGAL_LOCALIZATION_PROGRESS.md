# TycoonX Legal Localization Progress

Canonical legal source: the English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository.

## Rules

- Always display the brand as **TycoonX**. Technical route/file names containing `tyconx` may remain where changing them could break URLs, but rendered prose must never display `TyconX`.
- TycoonX goes to full release on **September 1, 2026**. Do not describe the live service, users, purchases, VIP, Diamonds, rewards, or legal terms as beta.
- Translate for legal meaning, not word-for-word. Localized copy must sound natural to a native speaker while preserving the legal effect of the English source.
- Do not omit mandatory-rights language, CK-Labs protections, payment-channel responsibilities, refund/chargeback rules, price-change rules, Lifetime VIP limitations, security clauses, privacy rights, community-safety obligations, or service-discontinuation language.
- English remains canonical. Refresh localized versions whenever the canonical meaning changes materially.
- Arabic uses RTL layout.
- Locale order is: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.
- Within each locale the order is Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not mark a localized document `Ready` until the page exists, contains every canonical section, preserves product/payment/legal distinctions, uses native punctuation and terminology, and contains no stale English legal paragraphs except protected product, company, platform, and legal-proper names where appropriate.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales and provides native-language navigation plus localized summaries.

All 25 locales have current Terms, Privacy Policy, and Community Standards. That accounts for **75 current localized full documents**. Purchases & Refunds is now current in the first twenty locales below, bringing the current total to **95/100**.

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
- **Korean (`ko`) 4/4**
- **Chinese (`zh`) 4/4**
- **Chinese Simplified (`zh_Hans`) 4/4**
- **Chinese Traditional (`zh_Hant`) 4/4**
- **Arabic (`ar`) 4/4**
- **Dutch (`nl`) 4/4**
- **Swedish (`sv`) 4/4**
- **Norwegian Bokmål (`nb`) 4/4**
- **Polish (`pl`) 4/4**

### Current localization refresh queue

1. Thai (`th`) — Purchases & Refunds
2. Vietnamese (`vi`) — Purchases & Refunds
3. Ukrainian (`uk`) — Purchases & Refunds
4. Hindi (`hi`) — Purchases & Refunds
5. Indonesian (`id`) — Purchases & Refunds

**Exact next unfinished locale/document: Thai (`th`) — Purchases & Refunds.**

## August 28, 2026 Purchases refresh

The canonical English Purchases & Refunds Policy materially changed after review of the CPC Network's March 21, 2025 *Key Principles on In-Game Virtual Currencies*. The current canonical policy:

- does not treat the mere crediting of purchased Diamonds as automatically extinguishing an EU/EEA statutory withdrawal right;
- preserves any applicable 14-day withdrawal right for unused purchased Diamonds;
- keeps provider/merchant refund-routing responsibilities without using them to remove a mandatory right;
- requires legally applicable real-money price transparency for paid Diamonds and content/services offered for purchasable Diamonds; and
- rejects virtual-currency layers or package design used to obscure real cost or force materially unwanted surplus currency where applicable law prohibits that practice.

The refreshed localized Purchases pages must preserve those points while keeping the existing distinctions among Diamonds, one-time 30-Day VIP, and limited-window Lifetime VIP, together with Apple App Store, Google Play, Xsolla, refund, chargeback, pricing, promotion, entitlement, update, security, and permanent-discontinuation rules.

### Korean checkpoint

On **August 28, 2026**, `app/tycoonx-legal/ko/purchases/page.tsx` was refreshed to the canonical meaning. The page now:

- preserves an applicable 14-day withdrawal right for purchased and unused Diamonds instead of characterizing a Diamond bundle as immediately supplied digital content;
- explains that Diamonds already spent, transferred, or exchanged for digital content/services are handled according to mandatory law and the circumstances of the specific transaction;
- preserves Apple, Google, Xsolla, or another contracting merchant/payment channel as the procedural withdrawal or refund route where applicable without allowing that allocation to remove a mandatory right;
- adds clear real-money price transparency for paid Diamonds and digital content/services offered for purchasable Diamonds where EU/EEA rules require it;
- rejects virtual-currency layers or bundle structures used to hide real cost or force materially unwanted surplus currency where prohibited;
- keeps the canonical required-updates/supported-versions section and the existing Apple, Google Play, Xsolla, Lifetime VIP, 30-Day VIP, refund, chargeback, entitlement, obvious-error, pricing, promotion, Family Sharing, and permanent-service-discontinuation protections;
- remains naturally localized in Korean (`ko`) while preserving the exact `TycoonX` brand; and
- is synchronized to **August 28, 2026** for both the Korean version and canonical English version.

Korean refresh commit: `2e07a6b`. Korean regression coverage commit: `1c76e2d`.

### Chinese (`zh`) checkpoint

On **August 28, 2026**, `app/tycoonx-legal/zh/purchases/page.tsx` was refreshed to the canonical meaning. The page now:

- preserves an applicable 14-day withdrawal right for purchased and unused Diamonds instead of treating account crediting as automatically extinguishing withdrawal rights;
- explains that Diamonds already spent, transferred, or exchanged for digital content/services are handled under mandatory law and the specific transaction rather than a blanket no-refunds rule;
- preserves Apple, Google, Xsolla, or another contracting merchant/payment channel as the procedural withdrawal or refund route where applicable without allowing that role allocation to remove a mandatory right;
- adds clear real-money price transparency for paid Diamonds and digital content/services offered for purchasable Diamonds where EU/EEA rules require it;
- rejects virtual-currency layers, bundle design, or conversion structures used to hide real cost or force materially unwanted surplus currency where prohibited;
- keeps the canonical required-updates/supported-versions section and the existing Apple, Google Play, Xsolla, Lifetime VIP, 30-Day VIP, refund, chargeback, entitlement, obvious-error, pricing, promotion, Family Sharing, and permanent-service-discontinuation protections;
- remains naturally localized in Chinese (`zh`) while preserving the exact `TycoonX` brand; and
- is synchronized to **August 28, 2026** for both the Chinese version and canonical English version.

Chinese refresh commit: `6c3a48e`. Chinese regression coverage commit: `7a9d0af`.

### Chinese Simplified (`zh_Hans`) checkpoint

On **August 28, 2026**, `app/tycoonx-legal/zh_Hans/purchases/page.tsx` was refreshed to the canonical meaning. The page now:

- preserves any applicable 14-day statutory withdrawal right for purchased and unused Diamonds instead of treating the mere account credit as automatic immediate digital-content supply;
- explains that already used, transferred, or exchanged Diamonds are handled under mandatory law and the specific transaction rather than a blanket no-refunds rule;
- preserves Apple, Google, Xsolla, or another contracting merchant/payment channel as the procedural withdrawal or refund route where applicable without allowing that role allocation to remove mandatory rights;
- adds real-money price transparency for paid Diamonds and for digital content/services offered for purchasable Diamonds where EU/EEA rules require it;
- rejects multi-layer virtual currencies, bundle design, or conversion structures used to obscure real cost or force materially unwanted surplus currency where prohibited;
- keeps the existing Apple App Store, Google Play, Xsolla, 30-Day VIP, limited-window Lifetime VIP, pricing, promotion, entitlement, obvious-error, update/support-version, Family Sharing, chargeback, security, and permanent-service-discontinuation protections;
- remains naturally localized in Simplified Chinese (`zh-Hans`) and preserves the exact `TycoonX` brand; and
- is synchronized to **August 28, 2026** for both the Simplified Chinese version and canonical English version.

Chinese Simplified refresh commit: `cfe8e3a`.

### Chinese Traditional (`zh_Hant`) checkpoint

On **August 28, 2026**, `app/tycoonx-legal/zh_Hant/purchases/page.tsx` was refreshed to the canonical meaning. The page now:

- preserves any applicable 14-day statutory withdrawal right for purchased and unused Diamonds instead of treating the mere account credit as automatically extinguishing withdrawal rights;
- explains that Diamonds already used, transferred, or exchanged for digital content/services are handled under mandatory law and the specific transaction rather than a blanket no-refunds rule;
- preserves Apple, Google, Xsolla, or another contracting merchant/payment channel as the procedural withdrawal or refund route where applicable without allowing that role allocation to remove mandatory rights;
- adds clear real-money price transparency for paid Diamonds and for digital content/services offered for purchasable Diamonds where EU/EEA rules require it;
- rejects virtual-currency layers, bundle design, or conversion structures used to obscure real cost or force materially unwanted surplus currency where prohibited;
- keeps the existing Apple App Store, Google Play, Xsolla, one-time 30-Day VIP, limited-window Lifetime VIP, pricing, promotion, entitlement, obvious-error, required-update/supported-version, Family Sharing, chargeback, security, and permanent-service-discontinuation protections;
- remains naturally localized in Traditional Chinese (`zh-Hant`) and preserves the exact `TycoonX` brand; and
- is synchronized to **August 28, 2026** for both the Traditional Chinese version and canonical English version.

Chinese Traditional refresh commit: `369a74f`. Chinese Traditional regression coverage commit: `4e545ff`.

### Arabic (`ar`) checkpoint

On **August 28, 2026**, `app/tycoonx-legal/ar/purchases/page.tsx` was refreshed to the canonical meaning. The page now:

- preserves any applicable 14-day statutory withdrawal right for purchased and unused Diamonds instead of treating the mere account credit as automatically extinguishing withdrawal rights;
- explains that Diamonds already used, transferred, or exchanged for digital content/services are handled under mandatory law and the specific transaction rather than a blanket no-refunds rule;
- preserves Apple, Google, Xsolla, or another contracting merchant/payment channel as the procedural withdrawal or refund route where applicable without allowing that allocation to remove mandatory rights;
- adds clear real-money price transparency for paid Diamonds and for digital content/services offered for purchasable Diamonds where EU/EEA rules require it;
- rejects virtual-currency layers or bundle design used to obscure real cost or force materially unwanted surplus currency where prohibited;
- keeps the existing Apple App Store, Google Play, Xsolla, one-time 30-Day VIP, limited-window Lifetime VIP, pricing, promotion, entitlement, obvious-error, required-update/supported-version, Family Sharing, chargeback, security, and permanent-service-discontinuation protections;
- keeps proper RTL rendering with `dir="rtl"` and `lang="ar"`, remains naturally localized in Arabic, and preserves the exact `TycoonX` brand; and
- is synchronized to **August 28, 2026** for both the Arabic version and canonical English version.

Arabic refresh commit: `96ec33b`. Arabic regression coverage commit: `42bddea`.

### Dutch (`nl`) checkpoint

On **August 28, 2026**, `app/tycoonx-legal/nl/purchases/page.tsx` was refreshed to the canonical meaning. The page now:

- preserves any applicable 14-day statutory withdrawal right for purchased and unused Diamonds instead of treating the mere account credit as automatically extinguishing withdrawal rights;
- explains that Diamonds already spent, transferred, or exchanged for digital content/services are handled under mandatory law and the specific transaction rather than a blanket no-refunds rule;
- preserves Apple, Google, Xsolla, or another contracting merchant/payment channel as the procedural withdrawal or refund route where applicable without allowing that allocation to remove mandatory rights;
- adds clear real-money price transparency for paid Diamonds and for digital content/services offered for purchasable Diamonds where EU/EEA rules require it;
- rejects virtual-currency layers or bundle structures used to obscure real cost or force materially unwanted surplus currency where prohibited;
- keeps the existing Apple App Store, Google Play, Xsolla, one-time 30-Day VIP, limited-window Lifetime VIP, pricing, promotion, entitlement, obvious-error, required-update/supported-version, Family Sharing, chargeback, security, and permanent-service-discontinuation protections;
- remains naturally localized in Dutch (`nl`) and preserves the exact `TycoonX` brand; and
- is synchronized to **August 28, 2026** for both the Dutch version and canonical English version.

Dutch refresh commit: `7f31175`.

### Swedish (`sv`) checkpoint

On **August 28, 2026**, `app/tycoonx-legal/sv/purchases/page.tsx` was refreshed to the canonical meaning. The page now:

- preserves any applicable 14-day statutory withdrawal right for purchased and unused Diamonds instead of treating account crediting as immediate digital-content supply that automatically ends the right;
- explains that Diamonds already used, transferred, or exchanged for digital content/services are handled under mandatory law and the specific transaction rather than a blanket no-refunds rule;
- preserves the contracting merchant or applicable payment channel as the procedural withdrawal or refund route without allowing that allocation to remove mandatory rights;
- adds clear real-money price transparency for paid Diamonds and digital content/services offered for purchasable Diamonds where EU/EEA rules require it;
- rejects virtual-currency layers or bundle structures used to obscure real cost or force materially unwanted surplus currency where prohibited;
- keeps the existing Apple App Store, Google Play, Xsolla, one-time 30-Day VIP, limited-window Lifetime VIP, pricing, promotion, entitlement, obvious-error, required-update/supported-version, Family Sharing, chargeback, security, and permanent-service-discontinuation protections;
- remains naturally localized in Swedish (`sv`) and preserves the exact `TycoonX` brand; and
- is synchronized to **August 28, 2026** for both the Swedish version and canonical English version.

Swedish refresh commit: `9f8466a`.

### Norwegian Bokmål (`nb`) checkpoint

On **August 29, 2026**, `app/tycoonx-legal/nb/purchases/page.tsx` was refreshed to the canonical August 28 meaning. The page now:

- preserves any applicable 14-day statutory withdrawal right for purchased and unused Diamonds instead of treating mere account crediting as automatically ending the right;
- explains that Diamonds already used, transferred, or exchanged for digital content/services are handled under mandatory law and the circumstances of the specific transaction;
- preserves Apple, Google, Xsolla, or another contracting merchant/payment channel as the procedural withdrawal or refund route where applicable without allowing that allocation to remove mandatory rights;
- adds clear real-money price transparency for paid Diamonds and digital content/services offered for purchasable Diamonds where EU/EEA rules require it;
- rejects virtual-currency layers or bundle design used to obscure real cost or force materially unwanted surplus currency where prohibited;
- keeps the existing Apple App Store, Google Play, Xsolla, one-time 30-Day VIP, limited-window Lifetime VIP, pricing, promotion, entitlement, obvious-error, required-update/supported-version, Family Sharing, chargeback, security, and permanent-service-discontinuation protections;
- remains naturally localized in Norwegian Bokmål (`nb`) and preserves the exact `TycoonX` brand; and
- shows **28 August 2026** as the localized policy update date, matching the current canonical Purchases refresh.

Norwegian Bokmål refresh commit: `48d13fa`.

### Polish (`pl`) checkpoint

On **August 29, 2026**, `app/tycoonx-legal/pl/purchases/page.tsx` was refreshed to the canonical August 28 meaning. The page now:

- preserves any applicable 14-day statutory withdrawal right for purchased and unused Diamonds instead of treating mere account crediting as immediate digital-content supply that automatically ends the right;
- explains that Diamonds already used, transferred, or exchanged for digital content/services are handled under mandatory law and the circumstances of the specific transaction rather than a blanket no-refunds rule;
- preserves Apple, Google, Xsolla, or another contracting merchant/payment channel as the procedural withdrawal or refund route where applicable without allowing that allocation to remove mandatory rights;
- adds clear real-money price transparency for paid Diamonds and digital content/services offered for purchasable Diamonds where EU/EEA rules require it;
- rejects virtual-currency layers or bundle structures used to obscure real cost or force materially unwanted surplus currency where prohibited;
- keeps the existing Apple App Store, Google Play, Xsolla, one-time 30-Day VIP, limited-window Lifetime VIP, pricing, promotion, entitlement, obvious-error, required-update/supported-version, Family Sharing, chargeback, security, and permanent-service-discontinuation protections;
- remains naturally localized in Polish (`pl`) and preserves the exact `TycoonX` brand; and
- is synchronized to **August 28, 2026** for both the Polish version and canonical English Purchases policy.

Polish refresh commit: `00a2e88`. Polish regression coverage commit: `45445c1`.

## Canonical source status

- English Terms: refreshed **August 25, 2026** to remove stale pre-release wording without weakening legal protections.
- English Purchases & Refunds: materially refreshed **August 28, 2026** for EU/EEA purchased-Diamond withdrawal rights and virtual-currency real-money price transparency.
- English Privacy Policy: refreshed **August 26, 2026** for third-party data protection and third-party AI disclosure/permission safeguards.
- English Community Standards: refreshed **August 26, 2026** for age-gating and child-safety flexibility around any future anonymous/random-chat feature.
- Repository QA requires zero displayed `TyconX` branding and zero stale `beta` wording in player-facing TycoonX legal copy.

## Commercial/legal/payment checkpoints already covered

The canonical legal documents and release gates cover the main current TycoonX commercial risks, including:

- Apple App Store In-App Purchase, non-expiring purchased in-game currency, restoration of restorable purchases, storefront-specific external-purchase linking, and paid-feature metadata clarity;
- Google Play `PENDING` versus `PURCHASED`, acknowledgement, secure backend verification, alternative-billing/external-offer program requirements, external-transaction reporting, and refund/chargeback reconciliation;
- Xsolla merchant-of-record/payment-role allocation, transaction-specific checkout/refund terms, tax/VAT handling, failed or reversed payments, refunds, disputes, and chargebacks;
- one-time 30-Day VIP with no silent auto-renewal;
- Lifetime VIP as a limited-time promotional offering available only during selected genuine sales windows, which may be withdrawn from sale, may never return, and creates no expectation of continuous availability;
- future price/bundle changes, regional pricing, taxes/VAT/FX changes, promotions and coupon abuse, obvious pricing/configuration errors, duplicate or accidental entitlement grants, authoritative transaction records, old/unsupported app versions, account compromise, security emergencies, provider outages/rule changes, provider replacement, business succession, free/promotional/test grants, force majeure, feature replacement, and lawful permanent service discontinuation;
- German/EU mandatory withdrawal, conformity, update, modification, liability, notice, consent, price-display, and digital-product remedies; and
- GDPR/security-incident and EU Cyber Resilience Act release gates.

## Progress snapshot

- **Localized full documents:** 95/100 (95%)
- **Localized hubs:** 25/25 (100%)
- **Canonical English legal wording:** 99.5%
- **Full commercial/legal/payment readiness:** 95%
- **Overall project completion:** 98.3%
- **Next:** Thai (`th`) — Purchases & Refunds
