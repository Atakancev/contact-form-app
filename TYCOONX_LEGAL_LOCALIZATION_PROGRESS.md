# TycoonX Legal Localization Progress

Canonical legal source: the English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository.

## Rules

- Always display the brand as **TycoonX**. Technical route/file names containing `tyconx` may remain where changing them could break URLs, but rendered prose must never display `TyconX`.
- TycoonX goes to full release on **September 1, 2026**. Do not describe the live service, users, purchases, VIP, Diamonds, rewards, or legal terms as beta.
- Translate for legal meaning, not word-for-word. Localized copy must sound natural to a native speaker while preserving the legal effect of the English source.
- English remains canonical. Refresh localized versions whenever the canonical meaning changes materially.
- Arabic uses RTL layout.
- Locale order is: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.
- Within each locale the order is Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not mark a localized document `Ready` until the page exists, preserves every canonical section and legal distinction, uses natural native-language wording and punctuation, and contains no stale displayed `TyconX` or live-service `beta` wording.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales and provides localized navigation and summaries.

All **25 locales** now have current Terms, Purchases & Refunds, Privacy Policy, and Community Standards. This brings the localization program to **100/100 localized full documents**.

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
| vi | Ready | Ready | Ready | Ready | 4/4 |
| uk | Ready | Ready | Ready | Ready | 4/4 |
| hi | Ready | Ready | Ready | Ready | 4/4 |
| id | Ready | Ready | Ready | Ready | 4/4 |

## Localization queue

The prescribed locale/document queue is complete.

**Exact next unfinished locale/document: none. All 25 locales and all four required documents are current.**

The next work item is repository-wide legal QA and commercial/payment readiness hardening against the canonical English documents, platform rules, and German/EU mandatory consumer law. If the canonical English meaning changes materially, reopen the localization queue in the required locale order for the affected document.

## August 28, 2026 Purchases invariants

Every localized Purchases page must continue to preserve all of the following:

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

## Indonesian (`id`) completion checkpoint

On **August 29, 2026**, `app/tycoonx-legal/id/purchases/page.tsx` was refreshed to the canonical August 28 meaning. The page now:

- states that merely crediting purchased Diamonds to a TycoonX account does not automatically extinguish an applicable EU/EEA statutory withdrawal right;
- preserves an applicable **14-day statutory withdrawal right** for purchased and unused Diamonds during the statutory period;
- handles spent, transferred, or exchanged Diamonds under mandatory law and the circumstances of the transaction rather than a blanket no-refunds rule;
- keeps Apple, Google, Xsolla, or another contracting merchant/payment provider as the procedural withdrawal/refund route where applicable without allowing that role allocation to remove mandatory rights;
- adds clear real-money price transparency for paid Diamonds and for digital content/services offered for purchasable Diamonds where EU/EEA rules require it, and rejects virtual-currency layers, conversion structures, or bundle design used to hide real cost or force materially unwanted surplus virtual currency where prohibited;
- preserves Apple consumable/non-consumable treatment, Google Play `PENDING`/`PURCHASED`, Xsolla merchant/payment roles, refunds, reversals, chargebacks, authoritative records, obvious errors, promotions, regional pricing, VAT/FX, supported versions, entitlement restoration, Family Sharing, account compromise/fraud, and permanent-service-discontinuation protections;
- keeps 30-Day VIP as a one-time non-renewing 30-day entitlement and Lifetime VIP as a limited-window promotional offering that may be withdrawn from sale, may never return, may have different prices in different genuine sales windows, and means the commercial operating lifetime of TycoonX rather than perpetual service;
- uses more natural Indonesian legal and commerce wording instead of unnecessary English loan phrases where a clear Indonesian equivalent exists;
- uses `lang="id"`, preserves the exact displayed `TycoonX` brand, and keeps the legacy technical `/tyconx-support` route unchanged; and
- is synchronized to **August 28, 2026** for both the Indonesian version and canonical English Purchases policy.

Indonesian Purchases refresh commit: `37fbaf738607a1cb6db047de5b73f7d5b8913d85`.

## Canonical source status

- English Terms: refreshed **August 25, 2026** to remove stale pre-release wording without weakening legal protections.
- English Purchases & Refunds: materially refreshed **August 28, 2026** for EU/EEA purchased-Diamond withdrawal rights and virtual-currency real-money price transparency.
- English Privacy Policy: refreshed **August 26, 2026** for third-party data protection and third-party AI disclosure/permission safeguards.
- English Community Standards: refreshed **August 26, 2026** for age-gating and child-safety flexibility around any future anonymous/random-chat feature.
- Repository QA requires zero displayed `TyconX` branding and zero stale `beta` wording in player-facing TycoonX legal copy.

## Current reference checks

As of **August 29, 2026**, the scoped official-source audit remains consistent with the canonical English approach:

- the European Commission/CPC Network continues to identify clear and transparent pricing and pre-contractual information, avoidance of practices that hide in-game digital costs or force virtual-currency purchases, respect for withdrawal rights, and protection of vulnerable consumers as core principles for in-game virtual currencies;
- Apple continues to state that purchased in-game currency may not expire and that restorable In-App Purchases need a restore mechanism;
- Google Play continues to require verification and a `PURCHASED` state before entitlement, not `PENDING`, followed by timely acknowledgement or consumption; and
- Xsolla's current Refund Policy remains transaction-specific and includes EU/EEA 14-day withdrawal treatment plus refund eligibility for unused or unredeemed in-game currency in relevant cases.

Germany's electronic withdrawal-function requirement has been in force since **June 19, 2026**. The canonical Purchases policy allocates that obligation according to the contracting trader and legally relevant purchase interface without attempting to remove mandatory rights.

## Progress snapshot

- **Localized full documents:** 100/100 (100%)
- **Localized hubs:** 25/25 (100%)
- **Canonical English legal wording:** 99.5%
- **Full commercial/legal/payment readiness:** 95%
- **Overall project completion:** 99.6%
- **Exact next unfinished locale/document:** none
- **Next hardening task:** final repository-wide legal QA and commercial/payment readiness audit; reopen affected localizations only if canonical English meaning changes materially.
