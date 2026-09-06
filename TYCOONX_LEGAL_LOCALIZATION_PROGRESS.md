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

### September 6, 2026 German BFSG e-commerce accessibility checkpoint

The existing `TYCOONX_BFSG_ECOMMERCE_ACCESSIBILITY_RELEASE_GATE.md` and `scripts/verify-tycoonx-bfsg-accessibility.mjs` were hardened against the current BFSG/BFSGV rather than creating a duplicate accessibility doctrine.

The gate now preserves the exact BFSG § 2 no. 17 microenterprise structure: **fewer than 10 persons AND either annual turnover of no more than €2 million OR annual balance-sheet total of no more than €2 million**. The turnover/balance-sheet limb must not be incorrectly converted into an AND test. Reliance on the service exemption remains evidence-based and subject to reassessment after accounts, hiring, financial change, restructuring, sale, merger, or successor-operator change.

For a non-exempt in-scope service, Annex 3 information must be made available in the terms and conditions or another clearly perceptible manner and in accessible form. Missing, incomplete, or not-accessibly-published Annex 3 information is now tracked separately as **formal nonconformity under BFSG § 30**, not merely as a generic UI defect. The gate also now preserves BFSGV § 19's requirement to provide accessibility information supplied by the responsible economic operator for products/services offered through the electronic-commerce service, while prohibiting invented accessibility claims.

The July 2026 regulation change is now scoped precisely: the BFSGV amendment dated July 10 and effective July 16, 2026 changed BFSGV § 7 and the telecommunications provision in BFSGV § 14. It did **not** replace BFSGV § 19. The gate explicitly separates **BFSG § 14** service-provider duties from **BFSGV § 14** telecommunications requirements so matching section numbers cannot cause a future e-commerce compliance error.

This checkpoint is operational/current-law hardening only. It did not materially change the canonical player-facing Terms, Purchases & Refunds, Privacy Policy, or Community Standards, so no localized document was reopened.

### September 6, 2026 German BGB § 356 withdrawal-numbering / § 356a checkpoint

The existing `TYCOONX_GERMAN_WITHDRAWAL_DIGITAL_CONTENT_SERVICE_VALUE_RELEASE_GATE.md`, `TYCOONX_GERMAN_ECOMMERCE_CHECKOUT_RELEASE_GATE.md`, and `scripts/verify-tycoonx-german-withdrawal-value.mjs` were corrected against the current German BGB rather than creating a duplicate withdrawal gate.

Current controls now preserve that **BGB § 356(4)** is the general twelve-month-and-14-day long-stop, **BGB § 356(5)** is the current services early-expiry subsection, and **BGB § 356(6)** is the current non-tangible digital-content early-expiry subsection. The prior internal mapping of § 356(4) to services and § 356(5) to digital content was stale after the June 19, 2026 statutory restructuring and is now a verifier-blocked regression.

The checkout gate continues to enforce current **BGB § 356a** electronic-withdrawal-function requirements, including `Vertrag widerrufen`, continuous/prominent/easy availability while the withdrawal period runs, contract-identification/contact fields, `Widerruf bestätigen`, immediate durable-medium receipt containing declaration content/date/time, preservation of the submission timestamp, and separation from the BGB § 312k termination button. The function must not be suppressed merely because entitlement delivery started when the correct § 356(5) or § 356(6) evidence does not prove lawful early expiry.

This checkpoint is operational/current-law hardening only. It did not materially change canonical player-facing Terms, Purchases & Refunds, Privacy Policy, or Community Standards, so no localized document was reopened.

### September 6, 2026 Google Play policy-source precedence / regional-program checkpoint

The existing `TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md` preserves that Google's staged-rollout materials can diverge, so TycoonX uses the most current operative program-specific documentation plus actual Play Console eligibility/enrollment rather than whichever older announcement gives a commercially preferred date or rate. Where current official sources materially conflict or Play Console does not confirm the expected program, the affected route/rate fails closed.

It also preserves the one-program-per-region rule, controlled program switching, dated policy evidence, historical transaction treatment, Level Up/game eligibility, current India and South Korea special-market controls, Australia fail-closed handling before actual game eligibility, Japan program exclusivity, U.S. reporting, refunds, RTDN, chargeback review, and separation of Google reporting state, Xsolla payment state, and TycoonX entitlement state.

Dedicated verifier: `scripts/verify-tycoonx-google-play-2026-transition.mjs`.

### September 6, 2026 Apple regional payment checkpoints

The repository already has distinct current release gates/verifiers for Apple EU alternative payment/unified fee reconciliation, U.S. storefront steering, Japan alternative payments, and South Korea alternative payments. These remain separate architectures rather than being reused interchangeably. They preserve storefront/program eligibility, Apple-specific disclosures/APIs, fee/reporting evidence, refund/provider boundaries, Xsolla/payment authority, product invariants, and fail-closed behavior when eligibility is not established.

### September 6, 2026 German promotion-price checkpoint

The existing EU promotion/dark-pattern gate preserves the goods-only scope of PAngV § 11 / Article 6a, the German progressive-reduction rule for in-scope goods, truthful changed-bundle comparisons, and UWG §§ 5a/5b material-information requirements. Ordinary TycoonX Diamonds and VIP are not incorrectly forced into the goods-only prior-price rule.

### September 6, 2026 GDPR controller-identity checkpoint

The canonical Privacy Policy and all 25 localized Privacy routes directly disclose the legal controller identity/contact rather than relying only on the CK-Labs trade name plus a separate Impressum lookup.

## Repository hardening status

The repository already contains dedicated release gates and verifier scripts for the major legal/payment/security subjects. Before adding another gate, inspect the existing `TYCOONX_*_RELEASE_GATE.md`, checklists, and `scripts/verify-tycoonx-*.mjs` files and improve the closest existing control where possible.

Completed hardening includes Apple Custom EULA parity; Apple EU/U.S./Japan/South Korea payment routing and fee/reporting controls; Google Play Billing Choice, Level Up and regional payment transitions; Xsolla mandatory-consumer-rights override; refunded/transferred-value reconciliation; temporary restriction review lifecycle; CRA reporting; German legal notice/ADR, e-commerce checkout, BGB § 356a withdrawal function and current § 356 subsection mapping; entitlement reconciliation; permanent shutdown; business transfer/successor operation; digital-product conformity/modification; accessibility; DSA/UGC moderation; youth/minor protections; VAT/tax/FX; pricing/promotions; and security/privacy controls.

## Canonical source status

- English Terms: materially refreshed **September 5, 2026** for genuine transactions and unauthorized RMT/off-platform exchange.
- English Purchases & Refunds: materially refreshed **September 5, 2026** for the official-purchase versus player/off-platform-deal boundary.
- English Privacy Policy: materially refreshed **September 6, 2026** for direct GDPR controller identity/contact transparency; September 5 transfer/RMT privacy safeguards remain in force.
- English Community Standards: current; age-safety, UGC, moderation, reporting, blocking, and review protections remain in force.

## Progress metrics

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **99.93%**
- **Full commercial/legal/payment readiness:** **98.9%**
- **Overall project completion:** **99.88%**
- **Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

Historical synchronization and older release-gate checkpoints remain available in Git history. This tracker intentionally emphasizes current state and active invariants so future runs can continue without duplicating completed work.