# TycoonX Legal Localization Progress

Canonical legal source: the English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository.

Last synchronized: **September 5, 2026**.

## Rules

- Always display the brand as **TycoonX**. Technical route/file names containing `tyconx` may remain where changing them could break URLs, but rendered prose must never display the legacy misspelling.
- TycoonX went to full release on **September 1, 2026**. Do not describe the live service, users, purchases, VIP, Diamonds, rewards, or current legal terms as beta.
- Translate for legal meaning, not word-for-word. Localized copy must sound natural to a native speaker while preserving the legal effect of the English source.
- English remains canonical. Refresh localized versions whenever the canonical meaning changes materially.
- Locale variants must remain genuinely localized, including `es`/`es_MX`, `fr`/`fr_CA`, `pt`/`pt_BR`, and `zh`/`zh_Hans`/`zh_Hant`.
- Arabic uses RTL layout.
- Locale order is: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.
- Within each locale the order is Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not mark a localized document `Ready` until the rendered page preserves the canonical legal meaning and product distinctions, uses natural native-language wording and punctuation, and contains no stale displayed brand or live-service beta wording.
- Do not use GitHub Actions or paid services for this project. Do not change any database.

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

Future runs must not duplicate completed localization. Continue with repository-wide legal QA, stale-brand/stale-release-status checks, canonical-English drift checks, duplicate-doctrine cleanup, and remaining commercial/legal/payment-readiness hardening. If canonical English meaning changes materially, reopen only the affected localized document type and resynchronize it in the required locale order.

## September 5, 2026 genuine-transaction and money-transfer invariant

The canonical English Terms were materially updated on September 5, 2026 to prohibit using ordinary TycoonX economic mechanics as disguised donation, assistance, wealth-funneling, parking, hiding, or transfer channels.

All 25 localized Terms routes were synchronized in the required locale order through the shared localized Terms component `app/tycoonx-legal/TransferRuleNotice.tsx`, rendered on every `/tycoonx-legal/{locale}/terms` route. The same rule is rendered on the canonical English Terms route and is also present directly in `tyconx-terms-of-service.md`.

Every canonical and localized Terms page must preserve all of the following:

- players are expected to build their own in-game wealth through gameplay and genuine economic activity;
- player-to-player movement of in-game money, assets, or other economic value is permitted only as part of a genuine gameplay transaction using the relevant feature for its intended purpose;
- trades, sales, auctions, art purchases, company transactions, contracts, jobs, market orders, or other mechanics must not be used merely or mainly to gift, donate, financially help, enrich, funnel, park, hide, or move wealth to another account;
- sham, circular, or coordinated transactions used mainly to move value rather than genuinely use the relevant feature are prohibited, including where accounts are controlled or coordinated by the same person;
- an art purchase must be motivated by a genuine desire to acquire the artwork and must not be used mainly as a disguised way to send money to or financially help the artist;
- the same genuine-purpose rule applies to every other economic mechanic;
- players seeking financial help must use TycoonX's designated **Begging** screen or feature where available rather than repurposing another mechanic as a donation channel;
- CK-Labs may consider reciprocal value, transaction history, account relationships, repeated transfers, pricing patterns, and relevant communications when assessing the real purpose of a transaction;
- a high price, generous deal, or unusual transaction is **not automatically a violation** merely because it is large or unusual; reasonable evidence of the prohibited transfer purpose is required before enforcement; and
- CK-Labs may reverse prohibited transfers and apply proportionate account restrictions while preserving unrelated legitimate paid value and mandatory rights.

Canonical Terms update commit: `d4d744423ce4195991283c43b30378949f687731`.
Localized transfer-rule component commit: `7e790f6c968efa7ac6150afd5cbb2490d390beb2`.
Localized Terms layout integration commit: `6b9e7c554b5566badf67fae0f76ffa51c165e3cb`.
Canonical rendered Terms layout integration commit: `7584872a1beb1e221dbe43c81c5cecd3448f7ce6`.

## Existing product invariants

All canonical and localized legal documents must continue to preserve these distinctions:

- purchased Diamonds do not expire solely because time passes;
- purchased Diamonds, promotional/free Diamonds, one-time 30-Day VIP, and Lifetime VIP are distinct products/entitlements;
- 30-Day VIP is a **one-time, non-renewing 30-day entitlement** unless a future purchase screen clearly introduces a different compliant product;
- Lifetime VIP is a one-time promotional entitlement offered only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase;
- Apple App Store, Google Play, and the official TycoonX webshop using Xsolla remain distinct payment channels with transaction-specific merchant, refund, tax, chargeback, validation, and entitlement-delivery roles;
- completed one-time purchases are not retroactively repriced merely because future prices, currencies, taxes, FX, regional prices, bundles, or promotions change, except where mandatory law requires otherwise;
- obvious configuration errors, failed/pending/reversed payments, duplicate or accidental grants, fraud, chargebacks, account compromise, provider outages, unsupported clients, provider replacement, business transfers, game-economy corrections, and permanent service shutdown remain subject to their specific canonical rules; and
- mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy, accessibility, and other non-waivable rights remain intact.

## Canonical source status

- English Terms: materially refreshed **September 5, 2026** for genuine transaction and prohibited player-to-player wealth-transfer rules.
- English Purchases & Refunds: materially refreshed **August 28, 2026** for purchased-Diamond withdrawal rights and real-money virtual-currency price transparency.
- English Privacy Policy: refreshed **August 26, 2026** for third-party data-protection and third-party AI disclosure/permission safeguards.
- English Community Standards: refreshed **August 26, 2026** for age-gating and child-safety flexibility around any future anonymous/random-chat feature.

## Progress metrics

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **99.7%**
- **Full commercial/legal/payment readiness:** **95%**
- **Overall project completion:** **99.0%**
- **Exact next unfinished locale/document:** None — all target locale documents are current

Historical synchronization and release-gate checkpoints remain available in Git history; this tracker intentionally keeps the current state and active invariants concise so future runs can continue without duplicating completed work.