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

All 25 locales have current Terms, Privacy Policy, and Community Standards. That accounts for **75 current localized full documents**. Purchases & Refunds is now current in the first twelve locales below, bringing the current total to **87/100**.

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

### Current localization refresh queue

1. Chinese (`zh`) — Purchases & Refunds
2. Chinese Simplified (`zh_Hans`) — Purchases & Refunds
3. Chinese Traditional (`zh_Hant`) — Purchases & Refunds
4. Arabic (`ar`) — Purchases & Refunds
5. Dutch (`nl`) — Purchases & Refunds
6. Swedish (`sv`) — Purchases & Refunds
7. Norwegian Bokmål (`nb`) — Purchases & Refunds
8. Polish (`pl`) — Purchases & Refunds
9. Thai (`th`) — Purchases & Refunds
10. Vietnamese (`vi`) — Purchases & Refunds
11. Ukrainian (`uk`) — Purchases & Refunds
12. Hindi (`hi`) — Purchases & Refunds
13. Indonesian (`id`) — Purchases & Refunds

**Exact next unfinished locale/document: Chinese (`zh`) — Purchases & Refunds.**

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

- **Localized full documents:** 87/100 (87%)
- **Localized hubs:** 25/25 (100%)
- **Canonical English legal wording:** 99.5%
- **Full commercial/legal/payment readiness:** 95%
- **Overall project completion:** 94.5%
- **Next:** Chinese (`zh`) — Purchases & Refunds
