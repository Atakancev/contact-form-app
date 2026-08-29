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
- Do not mark a localized document `Ready` until the page exists, preserves every canonical section and legal distinction, uses natural native-language wording and punctuation, and contains no stale displayed `TyconX` or live-service `beta` wording.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales and provides localized navigation and summaries.

All 25 locales have current Terms, Privacy Policy, and Community Standards. That accounts for **75 current localized full documents**. Purchases & Refunds is now current in the first **21 locales**, bringing the current total to **96/100**.

### Locale status

| Locale | Terms | Purchases & Refunds | Privacy | Community | Total |
| --- | --- | --- | --- | --- | --- |
| tr | Ready | Ready | Ready | Ready | 4/4 |
| de | Ready | Ready | Ready | Ready | 4/4 |
| es | Ready | Ready | Ready | Ready | 4/4 |
| es_MX | Ready | Ready | Ready | Ready | 4/4 |
| fr | Ready | Ready | Ready | Ready | 4/4 |
| fr_CA | Ready | Ready | Ready | Ready | 4/4 |
| it | Ready | Ready | Ready | Ready | 4/4 |
| pt | Ready | Ready | Ready | Ready | 4/4 |
| pt_BR | Ready | Ready | Ready | Ready | 4/4 |
| ru | Ready | Ready | Ready | Ready | 4/4 |
| ja | Ready | Ready | Ready | Ready | 4/4 |
| ko | Ready | Ready | Ready | Ready | 4/4 |
| zh | Ready | Ready | Ready | Ready | 4/4 |
| zh_Hans | Ready | Ready | Ready | Ready | 4/4 |
| zh_Hant | Ready | Ready | Ready | Ready | 4/4 |
| ar | Ready | Ready | Ready | Ready | 4/4 |
| nl | Ready | Ready | Ready | Ready | 4/4 |
| sv | Ready | Ready | Ready | Ready | 4/4 |
| nb | Ready | Ready | Ready | Ready | 4/4 |
| pl | Ready | Ready | Ready | Ready | 4/4 |
| th | Ready | Ready | Ready | Ready | 4/4 |
| vi | Ready | Refresh needed | Ready | Ready | 3/4 |
| uk | Ready | Refresh needed | Ready | Ready | 3/4 |
| hi | Ready | Refresh needed | Ready | Ready | 3/4 |
| id | Ready | Refresh needed | Ready | Ready | 3/4 |

### Current localization refresh queue

1. Vietnamese (`vi`) - Purchases & Refunds
2. Ukrainian (`uk`) - Purchases & Refunds
3. Hindi (`hi`) - Purchases & Refunds
4. Indonesian (`id`) - Purchases & Refunds

**Exact next unfinished locale/document: Vietnamese (`vi`) - Purchases & Refunds.**

## August 28, 2026 Purchases refresh requirements

The canonical English Purchases & Refunds Policy materially changed after review of the CPC Network's March 21, 2025 *Key Principles on In-Game Virtual Currencies*. Every refreshed localized Purchases page must preserve all of the following:

- merely crediting purchased Diamonds to the TycoonX account does not automatically extinguish an applicable EU/EEA statutory withdrawal right;
- where a **14-day statutory withdrawal right** applies to purchased in-game virtual currency, purchased and unused Diamonds remain covered during that statutory period;
- already spent, transferred, or exchanged Diamonds are handled under mandatory law and the circumstances of the specific transaction rather than a blanket no-refunds rule;
- Apple, Google, Xsolla, or another contracting merchant/payment provider may remain the procedural withdrawal/refund route without that allocation removing a mandatory right;
- legally required real-money price information must be shown clearly for paid Diamonds and for digital content/services offered for purchasable Diamonds where EU/EEA rules apply;
- virtual-currency layers, conversion structures, or bundle design must not obscure real cost or force consumers to buy materially unwanted surplus currency where applicable law prohibits that practice;
- Diamonds, one-time 30-Day VIP, and limited-window Lifetime VIP remain legally and commercially distinct products;
- Lifetime VIP remains a limited-time promotional offering available only in selected genuine sales windows, may be withdrawn from sale, may never return, and creates no expectation of continuous availability;
- Apple App Store, Google Play, Xsolla, refund, chargeback, regional pricing, tax/VAT/FX, promotion, entitlement, obvious-error, security, supported-version/update, Family Sharing, and permanent-service-discontinuation protections remain intact; and
- mandatory consumer remedies, withdrawal, conformity, update, notice, consent, termination, price reduction, liability, and other non-waivable rights remain intact.

## Thai (`th`) checkpoint

On **August 29, 2026**, `app/tycoonx-legal/th/purchases/page.tsx` was refreshed to the canonical August 28 meaning. The page now:

- preserves an applicable 14-day statutory withdrawal right for purchased and unused Diamonds instead of treating account crediting as immediate digital-content supply that automatically ends the right;
- explains that already spent, transferred, or exchanged Diamonds are handled under mandatory law and the circumstances of the individual transaction;
- preserves Apple, Google, Xsolla, or another contracting merchant/payment provider as the procedural withdrawal/refund route where applicable without allowing that allocation to remove mandatory rights;
- adds clear real-money price transparency for paid Diamonds and for digital content/services offered for purchasable Diamonds where EU/EEA consumer rules require it;
- rejects virtual-currency layers or bundle design used to obscure real cost or force materially unwanted surplus currency where prohibited;
- preserves the one-time non-renewing 30-Day VIP distinction and the limited-window Lifetime VIP model, including the rule that Lifetime VIP may be withdrawn from sale, may never return, may use different genuine sales-window prices, and means the commercial operating lifetime of TycoonX rather than a promise that the Service will exist forever;
- keeps Apple App Store, Google Play `PENDING`/`PURCHASED`, Xsolla merchant/payment roles, future and regional pricing, taxes/VAT/FX, promotion abuse, obvious pricing/configuration errors, duplicate grants, failed/reversed payments, authoritative records, account compromise/fraud, chargebacks, entitlement recovery, required updates/supported versions, Family Sharing, and permanent-service-discontinuation protections;
- uses natural Thai legal wording and preserves the exact displayed `TycoonX` brand; and
- is synchronized to **August 28, 2026** for both the Thai version and canonical English Purchases policy.

Thai Purchases refresh commit: `fb65bc09ce9c8ef74c650ac101d7d534036d5afc`.

## Canonical source status

- English Terms: refreshed **August 25, 2026** to remove stale pre-release wording without weakening legal protections.
- English Purchases & Refunds: materially refreshed **August 28, 2026** for EU/EEA purchased-Diamond withdrawal rights and virtual-currency real-money price transparency.
- English Privacy Policy: refreshed **August 26, 2026** for third-party data protection and third-party AI disclosure/permission safeguards.
- English Community Standards: refreshed **August 26, 2026** for age-gating and child-safety flexibility around any future anonymous/random-chat feature.
- Repository QA requires zero displayed `TyconX` branding and zero stale `beta` wording in player-facing TycoonX legal copy.

## Commercial/legal/payment checkpoints already covered

The canonical legal documents and release gates cover the main current TycoonX commercial risks, including:

- Apple App Store In-App Purchase, non-expiring purchased in-game currency, restoration of restorable purchases, storefront-specific external-purchase linking, and paid-feature metadata clarity;
- Google Play `PENDING` versus `PURCHASED`, acknowledgement, secure backend verification, applicable billing/external-offer arrangements, and refund/chargeback reconciliation;
- Xsolla merchant-of-record/payment-role allocation, transaction-specific checkout/refund terms, tax/VAT handling, failed or reversed payments, refunds, disputes, and chargebacks;
- one-time 30-Day VIP with no silent auto-renewal;
- Lifetime VIP as a limited-time promotional offering available only during selected genuine sales windows, which may be withdrawn from sale, may never return, and creates no expectation of continuous availability;
- future price/bundle changes, regional pricing and regional-price abuse, taxes/VAT/FX changes, promotions and coupon abuse, obvious pricing/configuration errors, duplicate or accidental entitlement grants, authoritative transaction records, old/unsupported app versions, account compromise, security emergencies, provider outages/rule changes, provider replacement, business sale/merger/reorganization/successor operator, free/promotional/test grants, force majeure, fraud, chargebacks, entitlement migration/restoration, feature replacement, and lawful permanent service discontinuation;
- German/EU mandatory withdrawal, conformity, update, modification, liability, notice, consent, price-display, and digital-product remedies; and
- GDPR/security-incident and EU Cyber Resilience Act release gates.

## Current reference checks

As of **August 29, 2026**, the scoped official-source audit remains consistent with the canonical English approach:

- the European Commission/CPC Network continues to identify clear real-money pricing, avoidance of hidden or forced virtual-currency costs, respect for withdrawal rights, and protection of vulnerable consumers as core principles for in-game virtual currencies;
- Apple continues to state that purchased in-game currency may not expire and that restorable In-App Purchases need a restore mechanism;
- Google Play continues to require verification and a `PURCHASED` state before entitlement, not `PENDING`, followed by timely acknowledgement/consumption; and
- Xsolla's current Refund Policy remains transaction-specific and includes EU/EEA 14-day withdrawal treatment plus refund eligibility for unused/unredeemed in-game currency in relevant cases.

Germany's electronic withdrawal-function requirement has been in force since **June 19, 2026**, and the canonical Purchases policy already allocates that obligation according to the contracting trader and legally relevant purchase interface without attempting to remove mandatory rights.

## Progress snapshot

- **Localized full documents:** 96/100 (96%)
- **Localized hubs:** 25/25 (100%)
- **Canonical English legal wording:** 99.5%
- **Full commercial/legal/payment readiness:** 95%
- **Overall project completion:** 98.6%
- **Next:** Vietnamese (`vi`) - Purchases & Refunds
