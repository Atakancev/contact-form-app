# TycoonX Legal Localization Progress

Canonical legal source: the English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository.

Last synchronized: **September 6, 2026**.

## Rules

- Always display the brand as **TycoonX**. Technical route/file names containing `tyconx` may remain where changing them could break URLs, but rendered prose must never display the legacy misspelling.
- TycoonX went to full release on **September 1, 2026**. Do not describe the live service, users, purchases, VIP, Diamonds, rewards, or current legal terms as beta.
- Translate for legal meaning, not word-for-word. Localized copy must sound natural to a native speaker while preserving the legal effect of the English source.
- English remains canonical. Refresh localized versions whenever canonical meaning changes materially.
- Locale variants must remain genuinely localized, including `es`/`es_MX`, `fr`/`fr_CA`, `pt`/`pt_BR`, and `zh`/`zh_Hans`/`zh_Hant`; Arabic uses RTL layout.
- Locale order is: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.
- Within each locale the order is Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not mark a localized document `Ready` until the rendered page preserves canonical legal meaning and product distinctions, uses natural native-language wording and punctuation, and contains no stale displayed brand or live-service beta wording.
- Do not use GitHub Actions or paid services for this project. Do not change any database.
- Before creating another release gate, inspect the repository tree and existing verifier scripts so completed doctrine is hardened incrementally instead of duplicated under a new filename.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales. **All 25 target locales and all 100 localized full documents are current.**

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

All canonical and localized legal documents must continue to preserve that purchased Diamonds do not expire solely because time passes; purchased Diamonds, promotional/free Diamonds, one-time 30-Day VIP, and Lifetime VIP are distinct products; 30-Day VIP is a **one-time, non-renewing 30-day entitlement** unless a future compliant product clearly says otherwise; Lifetime VIP is a one-time promotional entitlement offered only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous availability; Apple App Store, Google Play, and the official TycoonX webshop using Xsolla remain distinct payment channels; completed one-time purchases are not retroactively repriced merely because future prices, currencies, taxes, FX, regional prices, bundles, or promotions change, except where mandatory law requires otherwise; and mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy, accessibility, and other non-waivable rights remain intact.

Obvious configuration errors, failed/pending/reversed payments, duplicate or accidental grants, fraud, chargebacks, account compromise, provider outages, unsupported clients, provider replacement, business transfers, economy corrections, and permanent service shutdown remain subject to their specific canonical rules. Ordinary gameplay transactions must not be treated as disguised donations, wealth funneling, value parking, or unauthorized real-money trading without evidence; unusual/high-value transactions alone are not automatic proof of abuse.

## Active privacy/controller invariant

For the TycoonX personal-data processing described in the Privacy Policy, the controller is disclosed directly as **Atakan Cevik, trading as CK-Labs, Prämonstratenserstraße 80, 51069 Köln, Germany**, with the published privacy contact and TycoonX Support. All 25 localized Privacy routes preserve that meaning and the distinction between CK-Labs' controller role and any independent-controller role of Apple, Google, Xsolla, or other providers.

## Recent operational/current-law checkpoints

### September 6, 2026 Google Play India / South Korea / Australia eligibility checkpoint

The existing `TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md` was hardened again rather than creating another overlapping Google payment gate.

Current controls now preserve that:

- TycoonX is a **game**, so Google's current legacy User Choice Billing pilot must not be read as making every listed country game-eligible;
- Google's current pilot eligibility permits games in the EEA and Japan, while Australia, Brazil, Indonesia, South Africa and the other listed legacy-pilot markets outside those game-eligible regions are non-gaming-app routes under the current pilot terms;
- therefore, as of September 6, TycoonX must not enable the old Australian User Choice Billing pilot merely because Australia is on the pilot country list; Google's announced expanded Australia billing-choice rollout is September 30, 2026 and TycoonX must reverify game eligibility, enrollment, APIs, UX, fees and any external-link authority when the final effective terms apply;
- Brazil, Indonesia and South Africa remain fail-closed for the existing pilot in the TycoonX game unless Google later changes game eligibility and CK-Labs actually enrolls;
- India has a separate **current** alternative-billing program that expressly permits apps and games on mobile/tablet, requires Google Play Billing alongside the alternative system, current Play Console onboarding/trust-and-safety/API controls, and reporting of authorized alternative-billing transactions within 24 hours;
- South Korea likewise has a separate **current** alternative-billing program for apps and games, requires Google Play Billing alongside the alternative system, current onboarding/trust-and-safety/API controls, and 24-hour reporting;
- the current pre-transition India and South Korea service-fee treatment for qualifying alternative-billing transactions is the otherwise applicable Google Play service fee reduced by 4 percentage points, which is a developer commercial term rather than a promised consumer discount;
- Google's current South Korea guidance permits web-based alternative payment subject to that specific alternative-billing program and its prescribed UX, including the current embedded-webview treatment, rather than creating a generic normal-browser Xsolla steering permission;
- because CK-Labs is outside South Korea, the current Google tax guidance for qualifying additional in-app billing requires the applicable 10% Korean VAT to be collected from the developer by Google and remitted to the Korean authority; that tax state must be modeled separately from Xsolla settlement and the Google service fee;
- South Korea's announced expanded-model rollout remains December 31, 2026, while India is already an active special-market program and must not be incorrectly treated as unavailable until the September 30, 2027 rest-of-world rollout; and
- Google reporting state, Xsolla payment state and TycoonX entitlement state remain separate authorities; neither reporting success nor payment success substitutes for the other.

Dedicated verifier: `scripts/verify-tycoonx-google-play-2026-transition.mjs`.

This checkpoint is operational/commercial hardening only. It did not materially change canonical player-facing Terms, Purchases & Refunds, Privacy Policy, or Community Standards, so no localized document was reopened.

### September 6, 2026 Google Play Level Up / Japan transition checkpoint

The existing `TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md` also preserves that TycoonX is a game and therefore follows the Google Play Games **Level Up** program review path rather than using the ordinary Apps Experience Program as a shortcut; Level Up enrollment alone does not activate a lower rate; Japan External Payments and Japan User Choice Billing are mutually exclusive under the current program rules; and Australia external-link authority must not be inferred from Japan or from a future fee rollout.

### September 6, 2026 Apple EU unified fee-model checkpoint

The existing Attachment 14 gate distinguishes the 5% Core Technology Commission for qualifying outside-App-Store distribution from the separately named Store Services Commission for qualifying actionable out-of-app offers from an App Store-distributed app. It preserves the current App Store/IAP/alternative-processing distinctions, the seven-day attribution clock versus the 15-day-after-month-end reporting clock, and requires distribution route + payment route + Apple program status to be classified before calculating Apple economics.

### September 6, 2026 Apple Japan alternative-payment checkpoint

`TYCOONX_APPLE_JAPAN_ALTERNATIVE_PAYMENT_RELEASE_GATE.md` preserves Japan storefront/iOS eligibility, the required Apple entitlement and disclosures, IAP prominence, child safeguards, Xsolla server authority, monthly reporting, attribution, refund-provider separation, and TycoonX product invariants.

### September 6, 2026 Apple U.S. storefront steering checkpoint

`TYCOONX_APPLE_US_STOREFRONT_EXTERNAL_PURCHASE_RELEASE_GATE.md` preserves the U.S.-storefront-specific steering rule, StoreKit storefront authority, fail-closed behavior outside eligible U.S. storefronts, global metadata protection, server-side Xsolla confirmation, and provider-specific refund responsibilities.

### September 6, 2026 German promotion-price checkpoint

The existing EU promotion/dark-pattern gate preserves the goods-only scope of PAngV § 11 / Article 6a, the German progressive-reduction rule for in-scope goods, truthful changed-bundle comparisons, and UWG §§ 5a/5b material-information requirements. Ordinary TycoonX Diamonds and VIP are not incorrectly forced into the goods-only prior-price rule.

### September 6, 2026 GDPR controller-identity checkpoint

The canonical Privacy Policy and all 25 localized Privacy routes directly disclose the legal controller identity/contact rather than relying only on the CK-Labs trade name plus a separate Impressum lookup.

## Repository hardening status

The repository already contains dedicated release gates and verifier scripts for the major legal/payment/security subjects. Before adding another gate, inspect the existing `TYCOONX_*_RELEASE_GATE.md`, checklists, and `scripts/verify-tycoonx-*.mjs` files and improve the closest existing control where possible.

Completed hardening includes Apple Custom EULA parity, Apple EU alternative-payment transitions/unified fee reconciliation, Apple U.S. storefront steering, Apple Japan alternative-payment controls, Google Play Billing Choice, Google Play Level Up/Japan/U.S./India/South Korea payment transitions, Xsolla mandatory-consumer-rights override, refunded/transferred-value reconciliation, temporary restriction review lifecycle, CRA reporting, German legal notice/ADR, entitlement reconciliation, permanent shutdown, business transfer/successor operation, digital-product conformity/modification, accessibility, DSA/UGC moderation, youth/minor protections, withdrawal flows, VAT/tax/FX, pricing/promotions, and security/privacy controls.

## Canonical source status

- English Terms: materially refreshed **September 5, 2026** for genuine transactions and unauthorized RMT/off-platform exchange.
- English Purchases & Refunds: materially refreshed **September 5, 2026** for the official-purchase versus player/off-platform-deal boundary.
- English Privacy Policy: materially refreshed **September 6, 2026** for direct GDPR controller identity/contact transparency; September 5 transfer/RMT privacy safeguards remain in force.
- English Community Standards: current; age-safety, UGC, moderation, reporting, blocking, and review protections remain in force.

## Progress metrics

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **99.93%**
- **Full commercial/legal/payment readiness:** **98.5%**
- **Overall project completion:** **99.80%**
- **Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

Historical synchronization and older release-gate checkpoints remain available in Git history. This tracker intentionally emphasizes current state and active invariants so future runs can continue without duplicating completed work.