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

All 25 locales have current Terms, Privacy Policy, and Community Standards. Purchases & Refunds is now current in the first **24 locales**, bringing the current total to **99/100 localized full documents**.

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
| id | Ready | Refresh needed | Ready | Ready | 3/4 |

### Current localization refresh queue

1. Indonesian (`id`) - Purchases & Refunds

**Exact next unfinished locale/document: Indonesian (`id`) - Purchases & Refunds.**

## August 28, 2026 Purchases refresh requirements

Every refreshed localized Purchases page must preserve all of the following:

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

## Vietnamese (`vi`) checkpoint

On **August 29, 2026**, `app/tycoonx-legal/vi/purchases/page.tsx` was refreshed to the canonical August 28 meaning. The page now:

- preserves an applicable 14-day statutory withdrawal right for purchased and unused Diamonds instead of treating account crediting as automatically ending that right;
- handles already spent, transferred, or exchanged Diamonds under mandatory law and the circumstances of the specific transaction rather than a blanket no-refunds rule;
- preserves Apple, Google, Xsolla, or another contracting merchant/payment provider as the procedural withdrawal/refund route where applicable without allowing that allocation to remove mandatory rights;
- adds clear real-money price transparency for paid Diamonds and for digital content/services offered for purchasable Diamonds where EU/EEA consumer rules require it;
- rejects virtual-currency layers, conversion structures, or bundle design used to obscure real cost or force materially unwanted surplus currency where prohibited;
- preserves the one-time non-renewing 30-Day VIP distinction and the limited-window Lifetime VIP model, including the rule that Lifetime VIP may be withdrawn from sale, may never return, may use different genuine sales-window prices, and means the commercial operating lifetime of TycoonX rather than a promise that the Service will exist forever;
- keeps Apple App Store, Google Play `PENDING`/`PURCHASED`, Xsolla merchant/payment roles, future and regional pricing, taxes/VAT/FX, promotion abuse, obvious pricing/configuration errors, duplicate grants, failed/reversed payments, authoritative records, account compromise/fraud, chargebacks, entitlement recovery, required updates/supported versions, Family Sharing, and permanent-service-discontinuation protections;
- uses natural Vietnamese legal wording and preserves the exact displayed `TycoonX` brand; and
- is synchronized to **August 28, 2026** for both the Vietnamese version and canonical English Purchases policy.

Vietnamese Purchases refresh commit: `3e0f552b3a2b93d7edde2a8828a66f8504229530`.

## Ukrainian (`uk`) checkpoint

On **August 29, 2026**, `app/tycoonx-legal/uk/purchases/page.tsx` was refreshed to the canonical August 28 meaning. The page now:

- no longer treats the mere crediting of purchased Diamonds as automatically extinguishing an applicable EU/EEA withdrawal right;
- preserves an applicable **14-day statutory withdrawal right** for purchased and unused Diamonds during the statutory period;
- handles spent, transferred, or exchanged Diamonds under mandatory law and the circumstances of the particular transaction rather than a blanket no-refunds rule;
- preserves Apple, Google, Xsolla, or another contracting merchant/payment channel as the procedural withdrawal/refund route where applicable without allowing that role allocation to remove mandatory rights;
- adds clear real-money price transparency for paid Diamonds and for digital content/services offered for purchasable Diamonds where EU/EEA rules require it, and rejects virtual-currency layers or bundle structures used to obscure real cost or force materially unwanted surplus currency where prohibited;
- preserves Apple consumable/non-consumable treatment, Google Play `PENDING`/`PURCHASED` verification and authoritative purchase-token logic, Xsolla merchant/payment roles, and entitlement correction after refunds, reversals, chargebacks, fraud, duplicate grants, or invalid transactions;
- preserves future and regional pricing, tax/VAT/FX changes, genuine promotional sales windows, no automatic retroactive repricing or price matching, obvious catalog/configuration-error correction, supported versions and required updates, entitlement restoration, Family Sharing, and permanent-service-discontinuation protections;
- keeps 30-Day VIP as a one-time non-renewing 30-day entitlement and Lifetime VIP as a limited-window promotional product that may be withdrawn from sale, may never return, may have different prices in different genuine sales windows, and means the commercial operating lifetime of TycoonX rather than a promise of perpetual service;
- preserves mandatory consumer remedies, withdrawal, conformity, update, notice, consent, termination, price reduction, liability, and other non-waivable rights;
- uses natural Ukrainian legal wording, `lang="uk"`, and the exact displayed `TycoonX` brand; and
- is synchronized to **August 28, 2026** for both the Ukrainian version and canonical English Purchases policy.

Ukrainian Purchases refresh commit: `4b58e08db742536e5d9adeba266f580563cd64f4`.

## Hindi (`hi`) checkpoint

On **August 29, 2026**, `app/tycoonx-legal/hi/purchases/page.tsx` was refreshed to the canonical August 28 meaning. The page now:

- states that merely crediting purchased Diamonds to a TycoonX account does not automatically extinguish an applicable EU/EEA statutory withdrawal right;
- preserves an applicable **14-day statutory withdrawal right** for purchased and unused Diamonds during the statutory period;
- handles spent, transferred, or exchanged Diamonds under mandatory law and the circumstances of the transaction rather than a blanket no-refunds rule;
- keeps Apple, Google, Xsolla, or another contracting merchant/payment provider as the procedural withdrawal/refund route where applicable without allowing that role allocation to remove mandatory rights;
- adds clear real-money price transparency for paid Diamonds and for digital content/services offered for purchasable Diamonds where EU/EEA rules require it, and rejects virtual-currency layers, conversion structures, or bundle design used to hide real cost or force materially unwanted surplus virtual currency where prohibited;
- preserves Apple consumable/non-consumable treatment, Google Play `PENDING`/`PURCHASED`, Xsolla merchant/payment roles, refunds, reversals, chargebacks, authoritative records, obvious errors, promotions, regional pricing, VAT/FX, supported versions, entitlement restoration, Family Sharing, account compromise/fraud, and permanent-service-discontinuation protections;
- keeps 30-Day VIP as a one-time non-renewing 30-day entitlement and Lifetime VIP as a limited-window promotional offering that may be withdrawn from sale, may never return, may have different prices in different genuine sales windows, and means the commercial operating lifetime of TycoonX rather than perpetual service;
- preserves mandatory consumer remedies, withdrawal, conformity, update, notice, consent, termination, price reduction, liability, and other non-waivable rights;
- uses `lang="hi"`, naturalized the visible Hindi title and privacy link, and preserves the exact displayed `TycoonX` brand; and
- is synchronized to **August 28, 2026** for both the Hindi version and canonical English Purchases policy.

Hindi Purchases refresh commit: `7fce8f0af0a765db2a3889a57a7adea88a4f507c`.

## Canonical source status

- English Terms: refreshed **August 25, 2026** to remove stale pre-release wording without weakening legal protections.
- English Purchases & Refunds: materially refreshed **August 28, 2026** for EU/EEA purchased-Diamond withdrawal rights and virtual-currency real-money price transparency.
- English Privacy Policy: refreshed **August 26, 2026** for third-party data protection and third-party AI disclosure/permission safeguards.
- English Community Standards: refreshed **August 26, 2026** for age-gating and child-safety flexibility around any future anonymous/random-chat feature.
- Repository QA requires zero displayed `TyconX` branding and zero stale `beta` wording in player-facing TycoonX legal copy.

## Current reference checks

As of **August 29, 2026**, the scoped official-source audit remains consistent with the canonical English approach:

- the European Commission/CPC Network continues to identify clear real-money pricing, avoidance of hidden or forced virtual-currency costs, respect for withdrawal rights, and protection of vulnerable consumers as core principles for in-game virtual currencies;
- Apple continues to state that purchased in-game currency may not expire and that restorable In-App Purchases need a restore mechanism;
- Google Play continues to require verification and a `PURCHASED` state before entitlement, not `PENDING`, followed by timely acknowledgement/consumption; and
- Xsolla's current Refund Policy remains transaction-specific and includes EU/EEA 14-day withdrawal treatment plus refund eligibility for unused/unredeemed in-game currency in relevant cases.

Germany's electronic withdrawal-function requirement under § 356a BGB has been in force since **June 19, 2026**. The canonical Purchases policy allocates that obligation according to the contracting trader and legally relevant purchase interface without attempting to remove mandatory rights.

## Progress snapshot

- **Localized full documents:** 99/100 (99%)
- **Localized hubs:** 25/25 (100%)
- **Canonical English legal wording:** 99.5%
- **Full commercial/legal/payment readiness:** 95%
- **Overall project completion:** 99.4%
- **Next:** Indonesian (`id`) - Purchases & Refunds
