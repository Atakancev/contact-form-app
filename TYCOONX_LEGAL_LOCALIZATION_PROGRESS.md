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

On **August 29, 2026**, repository-wide QA found that the canonical Terms and at least the Turkish Terms still used the older formulation that treated a Diamond bundle as immediately supplied digital content for withdrawal purposes. This conflicts with the August 28 Purchases treatment and the European Commission/CPC Network principle that purchased in-game virtual currency should not be treated as digital content merely to remove the withdrawal right.

The canonical English Terms were corrected on August 29. Because this is a material legal-meaning change, all 25 localized Terms pages are conservatively reopened until each is audited and synchronized in the required locale order. Purchases & Refunds, Privacy, and Community Standards remain current.

This means **75/100 localized full documents are currently confirmed current**. The drop from 100/100 is intentional and prevents stale localized Terms from being incorrectly counted as complete.

### Locale status

| Locale | Terms | Purchases & Refunds | Privacy | Community | Total current |
| --- | --- | --- | --- | --- | --- |
| tr | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| de | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| es | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| es_MX | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| fr | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| fr_CA | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| it | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| pt | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| pt_BR | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| ru | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| ja | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| ko | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| zh | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| zh_Hans | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| zh_Hant | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| ar | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| nl | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| sv | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| nb | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| pl | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| th | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| vi | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| uk | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| hi | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |
| id | Needs Aug 29 Terms refresh | Ready | Ready | Ready | 3/4 |

## Localization queue

A material canonical Terms change on August 29 reopened the Terms localization queue.

**Exact next unfinished locale/document: Turkish (`tr`) Terms of Service.**

Continue Terms synchronization in exactly this order: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id. Do not duplicate already refreshed Terms pages once they are marked Ready again.

## August 29, 2026 Terms withdrawal invariant

Every canonical and localized Terms page must preserve all of the following:

- purchased in-game virtual currency such as TycoonX Diamonds must not be characterized as digital content merely to remove an applicable EU/EEA statutory withdrawal right;
- merely crediting purchased Diamonds to a TycoonX account does not automatically extinguish an applicable withdrawal right;
- where a **14-day statutory withdrawal right** applies to purchased in-game virtual currency, purchased and unused Diamonds remain subject to that right during the statutory period;
- if purchased Diamonds have already been spent, transferred, or exchanged, the consequences of withdrawal are determined under mandatory law and the circumstances of the specific transaction rather than a blanket no-refunds rule;
- a separate purchase of digital content or a digital service may lose a withdrawal right after early performance only where every legally required condition for that transaction is satisfied, including any required transaction-specific request or consent, acknowledgement, and contractual confirmation;
- the contracting merchant or payment channel may control how a withdrawal request is submitted or processed without that role allocation removing a mandatory right; and
- 30-Day VIP and Lifetime VIP remain separately treated ongoing/time-limited digital entitlements whose immediate activation or one-time price does not by itself eliminate all withdrawal or digital-service remedies.

Canonical English Terms correction commits:

- `7e6bbc70eab68417246620f6f8a93ed322c8adfd` for `tyconx-terms-of-service.md`;
- `18a655b9dbe9c204345a9128a99942d5a59e75ee` for `app/tyconx-terms-of-service/page.tsx`.

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

## Indonesian (`id`) Purchases completion checkpoint

On **August 29, 2026**, `app/tycoonx-legal/id/purchases/page.tsx` was refreshed to the canonical August 28 Purchases meaning. The Purchases page remains current while the Indonesian Terms page is separately reopened for the August 29 Terms change.

Indonesian Purchases refresh commit: `37fbaf738607a1cb6db047de5b73f7d5b8913d85`.

## Canonical source status

- English Terms: materially refreshed **August 29, 2026** to align purchased-Diamond withdrawal treatment with the August 28 Purchases policy and the EU/CPC virtual-currency principles. It no longer treats a Diamond bundle as immediately supplied digital content that can automatically lose withdrawal rights merely because it was credited.
- English Purchases & Refunds: materially refreshed **August 28, 2026** for EU/EEA purchased-Diamond withdrawal rights and virtual-currency real-money price transparency.
- English Privacy Policy: refreshed **August 26, 2026** for third-party data protection and third-party AI disclosure/permission safeguards.
- English Community Standards: refreshed **August 26, 2026** for age-gating and child-safety flexibility around any future anonymous/random-chat feature.
- Repository QA requires zero displayed `TyconX` branding and zero stale `beta` wording in player-facing TycoonX legal copy.

## Current reference checks

As of **August 29, 2026**, the scoped official-source audit remains consistent with the canonical English approach:

- the European Commission/CPC Network's in-game virtual-currency principles state that consumers' withdrawal rights should be respected, identify purchased in-game virtual currency as distinct from digital content for this purpose, and identify as practices to avoid both exempting purchased in-game virtual currency from withdrawal on a digital-content theory and denying withdrawal within 14 days for unused purchased virtual currency;
- the same principles call for clear and transparent real-money pricing and pre-contractual information and avoidance of practices that hide in-game digital costs or force virtual-currency purchases;
- Apple continues to state that purchased in-game currency may not expire and that restorable In-App Purchases need a restore mechanism;
- Google Play continues to require verification and a `PURCHASED` state before entitlement, not `PENDING`, followed by timely acknowledgement or consumption; and
- Xsolla's current Refund Policy remains transaction-specific and includes EU/EEA withdrawal treatment plus refund eligibility for unused or unredeemed in-game currency in relevant cases.

Germany's electronic withdrawal-function requirement has been in force since **June 19, 2026**. The canonical Terms and Purchases policy allocate that obligation according to the contracting trader and legally relevant purchase interface without attempting to remove mandatory rights.

## Progress snapshot

- **Localized full documents:** 75/100 (75%)
- **Localized hubs:** 25/25 (100%)
- **Canonical English legal wording:** 99.7%
- **Full commercial/legal/payment readiness:** 95%
- **Overall project completion:** 89%
- **Exact next unfinished locale/document:** Turkish (`tr`) Terms of Service
- **Next hardening task:** propagate the August 29 Terms withdrawal correction through all 25 locales in the required locale order, then resume final repository-wide legal QA and commercial/payment readiness audit.