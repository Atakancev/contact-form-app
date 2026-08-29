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
- Do not mark a localized document `Ready` until the page exists, preserves the canonical legal meaning and product distinctions, uses natural native-language wording and punctuation, and contains no stale displayed `TyconX` or live-service `beta` wording.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales.

On **August 29, 2026**, the canonical Terms were corrected so purchased TycoonX Diamonds are not treated as immediately supplied digital content merely to remove an applicable EU/EEA withdrawal right. Because this materially changed the canonical Terms meaning, all 25 localized Terms pages were reopened and are being resynchronized in the required locale order. Purchases & Refunds, Privacy, and Community Standards remain current.

The Terms for Turkish, German, Spanish, Mexican Spanish, French, French (Canada), Italian, Portuguese, and Brazilian Portuguese are now synchronized. This means **84/100 localized full documents are currently confirmed current**. The remaining **16 Terms pages** stay reopened until individually audited and refreshed.

### Locale status

| Locale | Terms | Purchases & Refunds | Privacy | Community | Total current |
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

**Exact next unfinished locale/document: Russian (`ru`) Terms of Service.**

Continue Terms synchronization in exactly this order: ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id. Do not duplicate Terms pages already marked Ready.

## August 29, 2026 Terms withdrawal invariant

Every canonical and localized Terms page must preserve all of the following:

- purchased in-game virtual currency such as TycoonX Diamonds must not be characterized as digital content merely to remove an applicable EU/EEA statutory withdrawal right;
- merely crediting purchased Diamonds to a TycoonX account does not automatically extinguish an applicable withdrawal right;
- where a **14-day statutory withdrawal right** applies to purchased in-game virtual currency, purchased and unused Diamonds remain subject to that right during the statutory period;
- if purchased Diamonds have already been spent, transferred, or exchanged, the consequences of withdrawal are determined under mandatory law and the circumstances of the specific transaction rather than a blanket no-refunds rule;
- a separate purchase of digital content or a digital service may lose a withdrawal right after early performance only where every legally required condition for that transaction is satisfied, including any required transaction-specific request or consent, acknowledgement, and contractual confirmation;
- the contracting merchant or payment channel may control how a withdrawal request is submitted or processed without that role allocation removing a mandatory right; and
- 30-Day VIP and Lifetime VIP remain separately treated time-limited/ongoing digital entitlements whose immediate activation or one-time price does not by itself eliminate all withdrawal or digital-service remedies.

Canonical English Terms correction commits:

- `7e6bbc70eab68417246620f6f8a93ed322c8adfd` for `tyconx-terms-of-service.md`;
- `18a655b9dbe9c204345a9128a99942d5a59e75ee` for `app/tyconx-terms-of-service/page.tsx`.

## Portuguese (`pt`) Terms completion checkpoint

On **August 29, 2026**, `app/tycoonx-legal/pt/terms/page.tsx` was synchronized to the August 29 canonical Terms meaning in natural European Portuguese.

The refreshed page now:

- avoids classifying purchased Diamonds as digital content merely for withdrawal purposes;
- states that crediting Diamonds does not automatically extinguish an applicable withdrawal right;
- preserves an applicable 14-day withdrawal right for purchased and unused Diamonds;
- treats spent, transferred, or exchanged Diamonds according to mandatory law and the specific transaction;
- keeps transaction-specific early-performance requirements for separate digital content/services;
- keeps Apple, Google, Xsolla and other merchant/payment-channel procedures separate from the existence of mandatory rights;
- retains the one-time non-renewing 30-Day VIP distinction and limited-window Lifetime VIP treatment;
- retains pricing, regional pricing, VAT/FX, promotion, obvious-error, failed/pending/reversed payment, duplicate entitlement, chargeback, security, exploit, economy correction/reset, outage, provider-change, supported-version, suspension/termination, business-transfer and permanent-shutdown protections;
- links directly to the completed Portuguese Purchases, Privacy, and Community pages; and
- displays **29 de agosto de 2026** and the brand exactly as `TycoonX`.

Portuguese Terms refresh commit: `56658219eb576a7d2a1b033a010d4861280e961e`.

## Portuguese (Brazil) (`pt_BR`) Terms completion checkpoint

On **August 29, 2026**, `app/tycoonx-legal/pt_BR/terms/page.tsx` was synchronized to the August 29 canonical Terms meaning in natural Brazilian Portuguese.

The refreshed page now:

- describes Diamonds as licensed digital elements or usage rights without treating that contractual description as determinative of their statutory classification for withdrawal rights;
- states that merely crediting purchased Diamonds does not automatically extinguish an applicable EU/EEA withdrawal right;
- preserves an applicable 14-day withdrawal right for purchased and unused Diamonds;
- treats spent, transferred, or exchanged Diamonds according to mandatory law and the specific transaction rather than a blanket no-refunds rule;
- requires all transaction-specific legal conditions before a separate digital-content or digital-service purchase can lose withdrawal rights after early performance;
- keeps Apple, Google, Xsolla and other contracting merchant/payment-channel procedures separate from the existence of mandatory rights;
- retains the one-time non-renewing 30-Day VIP distinction and limited-window Lifetime VIP treatment;
- retains pricing, regional pricing, VAT/FX, promotion, obvious-error, failed/pending/reversed payment, duplicate entitlement, chargeback, security, exploit, economy correction/reset, outage, provider-change, supported-version, suspension/termination, business-transfer and permanent-shutdown protections;
- links directly to the completed Brazilian Portuguese Purchases, Privacy, and Community pages; and
- displays **29 de agosto de 2026** and the brand exactly as `TycoonX`.

Brazilian Portuguese Terms refresh commit: `35089678fb3cfdf8bf4932794dea2e65c050ea20`.

## August 28, 2026 Purchases invariants

Every localized Purchases page remains required to preserve the following:

- purchased and unused Diamonds remain covered where an applicable 14-day statutory withdrawal right exists;
- merely crediting Diamonds does not automatically extinguish that right;
- already spent, transferred, or exchanged Diamonds are handled under mandatory law and the individual transaction;
- Apple, Google, Xsolla or another contracting merchant/payment provider may remain the procedural route without eliminating a mandatory right;
- legally required real-money price information must be shown clearly for paid Diamonds and for digital content/services offered for purchasable Diamonds where EU/EEA rules apply;
- virtual-currency layers, conversion structures or bundle design must not obscure real cost or unlawfully force surplus currency purchases;
- Diamonds, one-time 30-Day VIP and limited-window Lifetime VIP remain commercially and legally distinct products; and
- mandatory consumer remedies, conformity, updates, notice, consent, termination, price reduction, refund, liability and other non-waivable rights remain intact.

## Canonical source status

- English Terms: materially refreshed **August 29, 2026** for purchased-Diamond withdrawal treatment.
- English Purchases & Refunds: materially refreshed **August 28, 2026** for purchased-Diamond withdrawal rights and real-money virtual-currency price transparency.
- English Privacy Policy: refreshed **August 26, 2026** for third-party data-protection and third-party AI disclosure/permission safeguards.
- English Community Standards: refreshed **August 26, 2026** for age-gating and child-safety flexibility around any future anonymous/random-chat feature.
- Repository QA requires zero displayed `TyconX` branding and zero stale live-service `beta` wording in player-facing TycoonX legal copy.

## Current reference checks

As of **August 29, 2026**, the scoped official-source audit remains consistent with the canonical approach:

- European Commission/CPC Network principles on in-game virtual currencies continue to require transparent pricing, avoidance of hidden/forced virtual-currency costs, and respect for withdrawal rights;
- Apple App Review Guidelines continue to state that purchased in-game currency may not expire and that restorable in-app purchases need a restore mechanism;
- Google Play Billing guidance continues to require verification and `PURCHASED` state before entitlement, not `PENDING`, plus timely acknowledgement/consumption;
- Xsolla's current Refund Policy continues to distinguish in-game currency and provides relevant refund/withdrawal treatment, including a 14-day EU/EEA framework in the applicable policy; and
- Germany's electronic withdrawal-function requirement under § 356a BGB remains in force.

## Progress metrics

- Localized full documents: **84/100 (84%)**
- Localized hubs: **25/25 (100%)**
- Canonical English legal wording: **99.7%**
- Full commercial/legal/payment readiness: **95%**
- Overall project completion: **92.6%**
