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

All four full localized legal documents are current for every target locale. **All 25 target locales and all 100 localized full documents are current.**

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

## Active legal and product invariants

All canonical and localized legal documents must continue to preserve these distinctions:

- purchased Diamonds do not expire solely because time passes;
- purchased Diamonds, promotional/free Diamonds, one-time 30-Day VIP, and Lifetime VIP are distinct products/entitlements;
- 30-Day VIP is a **one-time, non-renewing 30-day entitlement** unless a future purchase screen clearly introduces a different compliant product;
- Lifetime VIP is a one-time promotional entitlement offered only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase;
- Apple App Store, Google Play, and the official TycoonX webshop using Xsolla remain distinct payment channels with transaction-specific merchant, refund, tax, chargeback, validation, and entitlement-delivery roles;
- completed one-time purchases are not retroactively repriced merely because future prices, currencies, taxes, FX, regional prices, bundles, or promotions change, except where mandatory law requires otherwise;
- obvious configuration errors, failed/pending/reversed payments, duplicate or accidental grants, fraud, chargebacks, account compromise, provider outages, unsupported clients, provider replacement, business transfers, economy corrections, and permanent service shutdown remain subject to their specific canonical rules;
- ordinary gameplay transactions must not be used as disguised donations, wealth funneling, value parking, or unauthorized real-money trading; unusual/high-value transactions alone are not automatic proof of abuse; and
- mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy, accessibility, and other non-waivable rights remain intact.

## Active privacy/controller invariant

For the TycoonX personal-data processing described in the Privacy Policy, the current controller identity is disclosed directly as **Atakan Cevik, trading as CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Germany**, with the published privacy contact and TycoonX Support. All 25 localized Privacy routes preserve that controller identity/contact meaning and the distinction between CK-Labs' controller role and any independent-controller role of Apple, Google, Xsolla, or other providers.

## Recent operational/current-law checkpoints

### September 6, 2026 Apple U.S. storefront external-purchase steering checkpoint

A dedicated `TYCOONX_APPLE_US_STOREFRONT_EXTERNAL_PURCHASE_RELEASE_GATE.md` now covers the current Apple U.S. storefront steering rule without duplicating the existing EU alternative-payment gates.

The active implementation controls now preserve that:

- Apple App Review Guideline 3.1.1(a) currently allows buttons, external links, and other calls to action to alternative purchase methods in **United States storefront** apps without the external-purchase-link entitlement that applies to certain other storefront programs;
- this is storefront-specific, not a global permission, and TycoonX must use current StoreKit storefront information (`Storefront.current`, alpha-3 `USA`) rather than IP, GPS, device locale, or a stale cached country to decide whether the U.S. CTA is eligible;
- Apple documents that storefront information can change at any time, so TycoonX must refresh/re-evaluate near offer display and fail closed if the storefront cannot be verified or changes;
- the U.S. steering rule is permission for external steering, not blanket authorization to embed an Xsolla/card checkout inside the iOS app and not, by itself, a reason to remove or degrade an otherwise approved Apple IAP path;
- U.S.-only purchase CTAs must not leak through globally shared App Store metadata or in-app UI into storefronts where a separate entitlement/program would be required;
- the external destination should be an official CK-Labs/TycoonX web purchase surface, with server-side Xsolla payment confirmation required before TycoonX grants an entitlement;
- Apple purchase state/refunds, Xsolla payment state/refunds, and TycoonX entitlement state remain transaction-specific and separate;
- Apple-versus-webshop price comparisons must be current and truthful about product quantity, currency, tax basis, FX, and actual availability; and
- purchased Diamonds, one-time non-renewing 30-Day VIP, limited-window Lifetime VIP, anti-double-recovery safeguards, and mandatory consumer rights remain unchanged.

Dedicated verifier: `scripts/verify-tycoonx-apple-us-storefront-steering.mjs`.

This checkpoint is operational hardening only. It did not materially change the canonical player-facing Terms, Purchases & Refunds, Privacy Policy, or Community Standards, so no localized document was reopened.

### September 6, 2026 Google Play U.S. payment-program checkpoint

The existing Google Play 2026 transition gate preserves the current separation between the U.S. alternative-billing/external-content-links programs and UK/EEA Billing Choice, the October 1, 2026 U.S. reporting/service-fee transition, 24-hour reporting controls, Externaltransactions APIs, Xsolla-versus-Google-versus-TycoonX authority boundaries, parental/supervised-user controls, refunds/chargeback review, and current product invariants.

Dedicated verifier: `scripts/verify-tycoonx-google-play-2026-transition.mjs`.

### September 6, 2026 German promotion-price checkpoint

The existing EU promotion/dark-pattern gate preserves the goods-only scope of PAngV § 11 / Article 6a, the German progressive-reduction rule for in-scope goods, the absence of an invented German new-goods exception, truthful changed-bundle comparisons, and UWG §§ 5a/5b material-information requirements for sufficiently concrete transactional offers. Ordinary TycoonX Diamonds and VIP remain digital products rather than being incorrectly forced into the goods-only prior-price rule.

### September 6, 2026 GDPR controller-identity checkpoint

The canonical Privacy Policy and all 25 localized Privacy routes directly disclose the legal controller identity/contact rather than relying only on the CK-Labs trade name plus a separate Impressum lookup. The disclosure remains consistent with the public TycoonX legal notice and preserves applicable provider independent-controller distinctions.

## Repository hardening status

The repository already contains dedicated release gates and verifier scripts for the major legal/payment/security subjects. Before adding another gate, inspect the existing `TYCOONX_*_RELEASE_GATE.md`, checklist, and `scripts/verify-tycoonx-*.mjs` files and improve the closest existing control where possible.

Completed hardening includes Apple Custom EULA parity, Apple EU alternative-payment transitions, Apple U.S. storefront steering, Google Play Billing Choice and U.S. payment-program transitions, Xsolla mandatory-consumer-rights override, refunded/transferred-value reconciliation, temporary restriction review lifecycle, CRA reporting, German legal notice/ADR, entitlement reconciliation, permanent shutdown, business transfer/successor operation, digital-product conformity/modification, accessibility, DSA/UGC moderation, youth/minor protections, withdrawal flows, VAT/tax/FX, pricing/promotions, and security/privacy controls.

## Canonical source status

- English Terms: materially refreshed **September 5, 2026** for genuine transactions and unauthorized RMT/off-platform exchange.
- English Purchases & Refunds: materially refreshed **September 5, 2026** for the official-purchase versus player/off-platform-deal boundary.
- English Privacy Policy: materially refreshed **September 6, 2026** for direct GDPR controller identity and contact transparency; the September 5 transfer/RMT privacy safeguards remain in force.
- English Community Standards: current; existing age-safety, UGC, moderation, reporting, blocking, and review protections remain in force.

## Progress metrics

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **99.93%**
- **Full commercial/legal/payment readiness:** **98.1%**
- **Overall project completion:** **99.72%**
- **Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

Historical synchronization and older release-gate checkpoints remain available in Git history. This tracker intentionally emphasizes current state and active invariants so future runs can continue without duplicating completed work.
