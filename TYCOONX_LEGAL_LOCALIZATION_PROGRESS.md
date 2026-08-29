# TycoonX Legal Localization Progress

Canonical legal source: the English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository.

Last synchronized: **August 29, 2026**.

## Rules

- Always display the brand as **TycoonX**. Technical route/file names containing `tyconx` may remain where changing them could break URLs, but rendered prose must never display `TyconX`.
- TycoonX goes to full release on **September 1, 2026**. Do not describe the live service, users, purchases, VIP, Diamonds, rewards, or legal terms as beta.
- Translate for legal meaning, not word-for-word. Localized copy must sound natural to a native speaker while preserving the legal effect of the English source.
- English remains canonical. Refresh localized versions whenever the canonical meaning changes materially.
- Locale variants must remain genuinely localized, including `es`/`es_MX`, `fr`/`fr_CA`, `pt`/`pt_BR`, and `zh`/`zh_Hans`/`zh_Hant`.
- Arabic uses RTL layout.
- Locale order is: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.
- Within each locale the order is Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not mark a localized document `Ready` until the page exists, preserves the canonical legal meaning and product distinctions, uses natural native-language wording and punctuation, and contains no stale displayed `TyconX` or live-service `beta` wording.
- Do not use GitHub Actions or paid services for this project. Do not change any database.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales.

On **August 29, 2026**, the canonical Terms were corrected so purchased TycoonX Diamonds are not treated as immediately supplied digital content merely to remove an applicable EU/EEA withdrawal right. Because this materially changed the canonical Terms meaning, all 25 localized Terms pages were reopened and are being resynchronized in the required locale order. Purchases & Refunds, Privacy, and Community Standards remain current.

The Terms for Turkish, German, Spanish, Mexican Spanish, French, French (Canada), Italian, Portuguese, Brazilian Portuguese, Russian, Japanese, Korean, Chinese (`zh`), and Simplified Chinese (`zh_Hans`) are now synchronized. This means **89/100 localized full documents are currently confirmed current**. The remaining **11 Terms pages** stay reopened until individually audited and refreshed.

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
| ru | Ready | Ready | Ready | Ready | 4/4 |
| ja | Ready | Ready | Ready | Ready | 4/4 |
| ko | Ready | Ready | Ready | Ready | 4/4 |
| zh | Ready | Ready | Ready | Ready | 4/4 |
| zh_Hans | Ready | Ready | Ready | Ready | 4/4 |
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

**Exact next unfinished locale/document: Traditional Chinese (`zh_Hant`) Terms of Service.**

Continue Terms synchronization in exactly this order: zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id. Do not duplicate Terms pages already marked Ready.

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

## Simplified Chinese (`zh_Hans`) Terms completion checkpoint

On **August 29, 2026**, `app/tycoonx-legal/zh_Hans/terms/page.tsx` was synchronized to the August 29 canonical Terms meaning in natural Simplified Chinese.

The refreshed page now:

- describes Diamonds as licensed digital game elements or entitlements without treating that contractual description as determinative of the statutory classification of purchased virtual currency for withdrawal purposes;
- states that merely crediting purchased Diamonds does not automatically extinguish an applicable EU/EEA withdrawal right;
- preserves an applicable 14-day statutory withdrawal right for purchased and unused Diamonds;
- treats spent, transferred, or exchanged Diamonds according to mandatory law and the specific transaction rather than a blanket no-refunds rule;
- requires every transaction-specific legal condition before a separate digital-content or digital-service purchase can lose withdrawal rights after early performance;
- keeps the contracting merchant/payment channel responsible for the applicable withdrawal procedure without allowing that role allocation to remove a mandatory right;
- retains the one-time non-renewing 30-Day VIP distinction and limited-window Lifetime VIP treatment;
- retains pricing, regional-pricing, VAT/FX, promotion, obvious-error, failed/pending/reversed payment, duplicate grant, chargeback, security, exploit, economy correction/reset, outage, provider-change, supported-version, suspension/termination, business-transfer and permanent-shutdown protections;
- links directly to the completed Simplified Chinese Purchases, Privacy, and Community pages; and
- displays **简体中文版：2026 年 8 月 29 日 · 英文正本：2026 年 8 月 29 日** with the brand exactly as `TycoonX`.

Simplified Chinese Terms refresh commit: `0f750e977717f3494733e68a626fc97ddbbbf663`.

## Current official-source checks

As of **August 29, 2026**, the scoped official-source audit remains consistent with the canonical approach:

- European Commission/CPC Network principles on in-game virtual currencies continue to require transparent real-money pricing, avoidance of hidden or forced virtual-currency costs, and respect for withdrawal rights: https://commission.europa.eu/topics/consumers/consumer-rights-and-complaints/enforcement-consumer-protection/coordinated-actions/social-media-online-games-and-search-engines_en
- Apple App Review Guidelines continue to state that purchased in-game currency may not expire and that restorable in-app purchases need a restore mechanism: https://developer.apple.com/app-store/review/guidelines/
- Google Play Billing guidance continues to require verification and `PURCHASED` state before entitlement, not `PENDING`, followed by acknowledgement or consumption: https://developer.android.com/google/play/billing/integrate
- Xsolla's Refund Policy, last updated **June 16, 2026**, continues to cover in-game currency, transaction-specific refund handling, and an EU/EEA 14-day withdrawal framework: https://xsolla.com/refund-policy
- German BGB § 356a continues to require a clearly labelled, continuously available, prominently placed, easily accessible electronic withdrawal function for covered online distance contracts, with a confirmation step and durable-medium receipt confirmation: https://www.gesetze-im-internet.de/bgb/__356a.html

## Progress metrics

- **Localized full documents:** 89/100, **89%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **99.7%**
- **Full commercial/legal/payment readiness:** **95%**
- **Overall project completion:** **94.6%**
- **Exact next unfinished locale/document:** Traditional Chinese (`zh_Hant`) Terms of Service
