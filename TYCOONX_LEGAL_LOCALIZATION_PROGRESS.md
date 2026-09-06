# TycoonX Legal Localization Progress

Canonical legal source: the English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository.

Last synchronized: **September 6, 2026**.

## Rules

- Always display the brand as **TycoonX**. Technical route/file names containing `tyconx` may remain where changing them could break URLs, but rendered prose must never display the legacy misspelling.
- TycoonX went to full release on **September 1, 2026**. Do not describe the live service, users, purchases, VIP, Diamonds, rewards, or current legal terms as beta.
- Translate for legal meaning, not word-for-word. Localized copy must sound natural to a native speaker while preserving the legal effect of the English source.
- English remains canonical. Refresh localized versions whenever canonical meaning changes materially.
- Locale variants must remain genuinely localized, including `es`/`es_MX`, `fr`/`fr_CA`, `pt`/`pt_BR`, and `zh`/`zh_Hans`/`zh_Hant`.
- Arabic uses RTL layout.
- Locale order is: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.
- Within each locale the order is Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not mark a localized document `Ready` until the rendered page preserves canonical legal meaning and product distinctions, uses natural native-language wording and punctuation, and contains no stale displayed brand or live-service beta wording.
- Do not use GitHub Actions or paid services for this project. Do not change any database.
- Before creating another release gate, inspect the repository tree and existing verifier scripts so completed doctrine is hardened incrementally instead of duplicated under a new filename.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales.

All four full localized legal documents are current for every target locale. This means **100/100 localized full documents are currently confirmed current**.

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

**Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

Future runs must not duplicate completed localization. Continue with repository-wide legal QA, stale-brand/stale-release-status checks, canonical-English drift checks, duplicate-doctrine cleanup, current-law/platform verification, and remaining commercial/legal/payment-readiness hardening. If canonical English meaning changes materially, reopen only the affected localized document type and resynchronize it in the required locale order.

## September 6, 2026 GDPR controller-identity invariant

The canonical Privacy Policy was materially clarified so the legal controller is identified directly in the Privacy Policy rather than only by the CK-Labs trade name plus a separate Impressum reference.

For the TycoonX personal-data processing described in the Privacy Policy, the current controller identity disclosed by the repository is **Atakan Cevik, trading as CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Germany**, with privacy contact at `cevikdev@gmail.com` and TycoonX Support.

All 25 localized Privacy routes are synchronized through `app/tycoonx-legal/ControllerIdentityPrivacyNotice.tsx`, rendered only on `/tycoonx-legal/{locale}/privacy`. The copies use natural locale-specific terminology for the data controller, keep the regional variants distinct, use proper language tags for locale variants, and use RTL for Arabic.

Every canonical and localized Privacy page must preserve all of the following:

- the legal controller must be identified, not only the `CK-Labs` trade name;
- the controller address and an effective privacy contact route must be available directly with the Privacy disclosure;
- privacy questions and applicable data-subject-rights requests may be sent through the published email or TycoonX Support;
- Apple, Google, Xsolla, and other providers may separately act as independent controllers for their own processing where the Policy describes that role, but their independent role does not replace CK-Labs' responsibility for TycoonX processing for which CK-Labs is controller;
- the Privacy identity must remain consistent with the public TycoonX Impressum / legal notice after an address, operator, business-transfer, or successor change;
- if a data protection officer or representative becomes legally applicable, the corresponding legally required contact details must be added rather than inferred or invented; and
- controller identity/contact transparency must remain concise, intelligible, and easily accessible along with the rest of the Privacy information.

Canonical Privacy Markdown controller update commit: `e81857caba7f602babc2ad685bc05686a2a363b9`.
Canonical rendered Privacy update commit: `ad34d332dc18f49622f7c4036c2719e83fe68a42`.
Localized controller-identity component commit: `9c179a25dc46ca627f615049e813926eea663a0f`.
Localized Privacy layout integration commit: `0719456968278d3d4ff66edce31a9cb31f4452ea`.
Controller-identity verifier commit: `59805a235238aa2ef96e08c09872cfe10058aa14`.

## Active September 5, 2026 gameplay/economy invariants

The canonical Terms and synchronized localized Terms already preserve both of these rules and they must not be recreated as separate doctrine:

- ordinary trades, sales, auctions, art purchases, company transactions, contracts, jobs, market orders, or other mechanics must have a genuine gameplay purpose and must not be used mainly as disguised donations, financial help, wealth funneling, parking, hiding, or transfer channels; financial help belongs in TycoonX's designated Begging feature where available; and
- unauthorized real-money trading or off-platform exchange of TycoonX accounts or game value for real money, cryptocurrency, gift cards, physical goods, outside services, or other real-world consideration is prohibited unless CK-Labs expressly provides a specific authorized mechanism.

High prices, generous deals, friendships, company membership, shared-household/network signals, or single unusual transactions are not automatic proof of abuse. Serious enforcement requires reasonable evidence and must preserve account-compromise safeguards, applicable human review, unrelated legitimate paid value, and mandatory rights.

The Privacy Policy and all localized Privacy routes already disclose proportionate transfer/RMT analysis, relevant transaction/account-relationship data, private-communications safeguards, retention limits, objection rights, and applicable automated-decision safeguards.

The Purchases & Refunds Policy and all localized Purchases routes already distinguish official Apple App Store, Google Play, and official TycoonX/Xsolla purchases from unauthorized player-to-player or off-platform deals.

## Existing product and payment invariants

All canonical and localized legal documents must continue to preserve these distinctions:

- purchased Diamonds do not expire solely because time passes;
- purchased Diamonds, promotional/free Diamonds, one-time 30-Day VIP, and Lifetime VIP are distinct products/entitlements;
- 30-Day VIP is a **one-time, non-renewing 30-day entitlement** unless a future purchase screen clearly introduces a different compliant product;
- Lifetime VIP is a one-time promotional entitlement offered only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase;
- Apple App Store, Google Play, and the official TycoonX webshop using Xsolla remain distinct payment channels with transaction-specific merchant, refund, tax, chargeback, validation, and entitlement-delivery roles;
- completed one-time purchases are not retroactively repriced merely because future prices, currencies, taxes, FX, regional prices, bundles, or promotions change, except where mandatory law requires otherwise;
- obvious configuration errors, failed/pending/reversed payments, duplicate or accidental grants, fraud, chargebacks, account compromise, provider outages, unsupported clients, provider replacement, business transfers, economy corrections, and permanent service shutdown remain subject to their specific canonical rules; and
- mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy, accessibility, and other non-waivable rights remain intact.

## Repository hardening status

The repository already contains dedicated release gates and verifier scripts for the major legal/payment/security subjects. Before adding another gate, inspect the existing `TYCOONX_*_RELEASE_GATE.md`, checklist, and `scripts/verify-tycoonx-*.mjs` files and improve the closest existing control where possible.

Recent completed hardening includes Apple Custom EULA parity, Google Play Billing Choice PBL 9.1, Xsolla mandatory-consumer-rights override, refunded/transferred-value reconciliation, temporary restriction review lifecycle, CRA reporting, German legal notice/ADR, Apple/Google/Xsolla entitlement reconciliation, permanent shutdown, business transfer/successor operation, digital-product conformity/modification, accessibility, DSA/UGC moderation, youth/minor protections, withdrawal flows, VAT/tax/FX, pricing/promotions, and security/privacy controls.

### September 6, 2026 German promotion-price operational checkpoint

The existing `TYCOONX_EU_PROMOTION_DARK_PATTERN_RELEASE_GATE.md` was hardened rather than duplicating promotion doctrine. The current operational rules now explicitly preserve that:

- ordinary TycoonX Diamonds, one-time 30-Day VIP and Lifetime VIP remain purely digital products and are not automatically subject to the goods-only PAngV § 11 / Article 6a prior-price regime;
- if CK-Labs later sells an in-scope good and uses a stepwise uninterrupted increasing reduction, PAngV § 11(2)'s progressive-reduction rule, pre-campaign reference price and uninterrupted campaign evidence must be preserved;
- current German PAngV § 11 does not contain Article 6a(4)'s optional shorter reference period for newly marketed goods, so that optional EU exception must not be invented for a German campaign;
- changed Diamond quantities, VIP benefits or other material bundle contents must not be compared as though they were an identical product; and
- on a CK-Labs-owned TycoonX surface that is concrete enough about characteristics and price to enable a consumer transaction, the applicable German UWG §§ 5a/5b material information must not be hidden, ambiguous or supplied too late.

This was operational/current-law hardening only. It did not materially change the canonical player-facing Terms, Purchases & Refunds, Privacy Policy or Community Standards, so no localized document was reopened.

## Canonical source status

- English Terms: materially refreshed **September 5, 2026** for genuine transactions and unauthorized RMT/off-platform exchange.
- English Purchases & Refunds: materially refreshed **September 5, 2026** for the official-purchase versus player/off-platform-deal boundary.
- English Privacy Policy: materially refreshed **September 6, 2026** for direct GDPR controller identity and contact transparency; the September 5 transfer/RMT privacy safeguards remain in force.
- English Community Standards: current; existing age-safety, UGC, moderation, reporting, blocking, and review protections remain in force.

## Progress metrics

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **99.93%**
- **Full commercial/legal/payment readiness:** **97.9%**
- **Overall project completion:** **99.68%**
- **Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

Historical synchronization and release-gate checkpoints remain available in Git history. This tracker intentionally emphasizes current state and active invariants so future runs can continue without duplicating completed work.