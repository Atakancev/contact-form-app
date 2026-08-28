# TycoonX Legal Localization Progress

Canonical legal source: English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository.

## Rules

- Always display the brand as **TycoonX**.
- TycoonX goes to full release on **September 1, 2026**. Do not describe the live service as beta.
- Translate for meaning, not word-for-word.
- Localized legal copy must sound natural to a native speaker while preserving the legal effect of the English source.
- Do not omit mandatory-rights language, CK-Labs protections, payment-channel responsibilities, refund/chargeback rules, price-change rules, Lifetime VIP limitations, security clauses, privacy rights, community-safety obligations, or service-discontinuation language.
- English remains canonical. Refresh localized versions whenever the canonical meaning changes materially.
- Arabic uses RTL layout.
- Locale order is: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.
- Within each locale the order is Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not mark a localized document `Ready` until the corresponding page exists, contains every canonical section, preserves product/payment/legal distinctions, uses native punctuation and terminology, and contains no stale English legal paragraphs except protected product, company, platform, and legal-proper names where appropriate.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all 25 target locales and provides native-language navigation plus localized summaries.

On **August 28, 2026**, the canonical English Purchases & Refunds Policy materially changed after a fresh audit of the CPC Network's March 21, 2025 *Key Principles on In-Game Virtual Currencies*. The old Diamond withdrawal wording treated a Diamond bundle as immediately supplied digital content. The current CPC position expressly warns against applying the digital-content withdrawal exception to the purchase of in-game virtual currency itself and against denying withdrawal within 14 days for unused purchased virtual currency.

The canonical English Purchases & Refunds Policy now:

- does not treat the mere crediting of purchased Diamonds as automatically extinguishing an EU/EEA statutory withdrawal right;
- preserves any applicable 14-day withdrawal right for unused purchased Diamonds;
- keeps provider/merchant refund-routing responsibilities without using them to remove a mandatory right;
- adds EU/EEA real-money price-transparency protection for paid Diamonds and content/services offered for purchasable Diamonds; and
- rejects virtual-currency layers or package design used to obscure real cost or force materially unwanted surplus currency where applicable law prohibits that practice.

**Turkish (`tr`) and German (`de`) Purchases & Refunds have been refreshed to the August 28 canonical meaning. The remaining 23 localized Purchases & Refunds pages require refresh in the prescribed locale order.**

Current fully aligned locale sets:

- **Turkish (`tr`) 4/4**
- **German (`de`) 4/4**

Current localization refresh queue:

1. Spanish (`es`) — Purchases & Refunds
2. Spanish (Mexico) (`es_MX`) — Purchases & Refunds
3. French (`fr`) — Purchases & Refunds
4. French (Canada) (`fr_CA`) — Purchases & Refunds
5. Italian (`it`) — Purchases & Refunds
6. Portuguese (`pt`) — Purchases & Refunds
7. Portuguese (Brazil) (`pt_BR`) — Purchases & Refunds
8. Russian (`ru`) — Purchases & Refunds
9. Japanese (`ja`) — Purchases & Refunds
10. Korean (`ko`) — Purchases & Refunds
11. Chinese (`zh`) — Purchases & Refunds
12. Chinese Simplified (`zh_Hans`) — Purchases & Refunds
13. Chinese Traditional (`zh_Hant`) — Purchases & Refunds
14. Arabic (`ar`) — Purchases & Refunds
15. Dutch (`nl`) — Purchases & Refunds
16. Swedish (`sv`) — Purchases & Refunds
17. Norwegian Bokmål (`nb`) — Purchases & Refunds
18. Polish (`pl`) — Purchases & Refunds
19. Thai (`th`) — Purchases & Refunds
20. Vietnamese (`vi`) — Purchases & Refunds
21. Ukrainian (`uk`) — Purchases & Refunds
22. Hindi (`hi`) — Purchases & Refunds
23. Indonesian (`id`) — Purchases & Refunds

## Canonical source status

- English Terms were refreshed on **August 25, 2026** to remove stale pre-release wording without weakening legal protections.
- English Purchases & Refunds was materially refreshed on **August 28, 2026** for EU/EEA purchased-Diamond withdrawal rights and virtual-currency real-money price transparency.
- English Privacy Policy was refreshed on **August 26, 2026** to make third-party data protection and third-party AI disclosure/permission safeguards explicit.
- English Community Standards were refreshed on **August 26, 2026** to preserve age-gating and child-safety flexibility for any future anonymous/random-chat feature under current Google Play rules.
- Repository QA requires zero displayed `TyconX` branding and zero stale `beta` wording in player-facing TycoonX legal copy.

## Current policy checkpoint, August 27, 2026

- Apple App Review Guideline 3.1.1 continues to require In-App Purchase for covered digital unlocks, states that purchased in-game currencies may not expire, and requires a restore mechanism for restorable In-App Purchases.
- Apple App Review Guideline 3.1.1(a) now receives an explicit TycoonX release gate: United States storefront apps may include external purchase buttons/links/calls to action without the StoreKit external-purchase-link entitlement, while other storefronts remain subject to the applicable StoreKit entitlement/regional-program rules. TycoonX must not assume its Xsolla webshop can be linked from every iOS storefront or from App Store metadata globally.
- Apple App Review Guideline 2.3.2 is now an explicit metadata gate: if descriptions, screenshots, previews, or promotional text feature Diamonds, VIP, premium automation, or other functionality requiring an additional purchase, the paid nature must be made clear and metadata must not imply those items are included free with the base download.
- Apple App Review privacy rules continue to require clear disclosure of personal-data sharing with third parties, including third-party AI, and explicit permission before sharing where required.
- Google Play Billing guidance continues to require entitlement only after a transaction reaches `PURCHASED`, never while it remains `PENDING`. Completed purchases must be acknowledged promptly; Google states that an unacknowledged purchase can be automatically refunded after three days, and the three-day window starts only after a pending transaction becomes `PURCHASED`.
- Google Play guidance recommends secure-backend verification and checking that a purchase token has not already been used before granting entitlement again.
- Google Play storefront/payment hardening now explicitly covers the official Xsolla webshop: if the Play-distributed TycoonX app offers alternative billing in-app or sends users to an external web purchase flow for in-app digital goods, CK-Labs must verify the applicable country/program eligibility, enroll in the required Google billing-choice/external-offers program, and use required external-transaction reporting APIs instead of assuming that web checkout promotion is globally permitted.
- Google Play's current Billing Library guidance says that where an EU price is personalized using automated decision-making, the billing flow should use `setIsOfferPersonalized(true)` so the Play UI discloses it. Ordinary country/storefront/currency/tax/regional pricing is not automatically individualized personalized pricing.
- Google Play's User Data policy explicitly applies to third-party AI integrations. CK-Labs remains responsible for limited use, disclosure, consent, security, retention/deletion behavior, and Play Console Data Safety accuracy when a connected AI service processes app user data.
- EU AI Act Article 50 transparency obligations apply from **August 2, 2026**. Current European Commission guidance says that providers of AI systems that interact directly with natural persons, such as chatbots, agents, or avatars, must ensure users are informed they are interacting with AI from the start of the first interaction unless the AI nature is genuinely obvious. Background AI that does not directly communicate with the user is treated differently. The limited transition until **December 2, 2026** concerns the Article 50(2) marking/detectability duty for certain AI systems placed on the market before August 2, 2026; it is not a general delay of the direct-interaction transparency duty.
- TycoonX now has a dedicated AI transparency release gate requiring an inventory of user-facing/background AI, role classification, direct-interaction disclosure, Apple/Google third-party AI data checks, and separate review before emotion recognition, biometric categorisation, deepfakes, or public-interest AI publication features are used.
- German BGB § 356a continues to require, for covered online distance contracts, an electronic withdrawal function that is continuously available during the withdrawal period, a clear confirmation function, and prompt confirmation on a durable medium.
- German BGB § 327f continues to require necessary updates, including security updates, during the legally relevant period and preserves the limited statutory protection for a defect caused solely by failure to install a properly supplied and explained update when all statutory conditions are met.
- German BGB § 327r continues to govern qualifying changes to continuously supplied digital products beyond what is necessary to maintain conformity, including advance durable-medium information and termination rights for certain more-than-insignificant impairments.
- Xsolla's legal index continues to show its Privacy Policy as updated **June 3, 2026** and Refund Policy as updated **June 16, 2026**; the applicable refund-policy type is identified in Xsolla checkout.
- German DDG § 5 provider-information requirements were hardened with a dedicated public TycoonX legal notice at `/tycoonx-impressum`, linked from Support and the legal-language hub. The legal notice uses the current CK-Labs provider address, telephone, and email already used in the Apple Custom EULA.
- The legal notice includes a conditional DSA Articles 11/12 contact point for TycoonX functionality to which the intermediary-service contact-point duties apply, with German and English communication and a Support route that does not rely solely on automated tools.
- Regulation (EU) 2024/3228 repealed the former EU ODR regime with effect from **July 20, 2025**. TycoonX therefore does not publish an obsolete EU ODR-platform link. VSBG §§ 36 and 37 remain separately relevant where their conditions are met.
- The manual legal verifier now checks the required public Terms, Purchases, Privacy, Community, Support, Apple EULA, Impressum and account-deletion routes plus the core release-source/checklist files, including the AI transparency gate, in addition to all localized documents, hubs, brand/release wording, Arabic RTL, and shared inline formatting.

## Current policy checkpoint, August 28, 2026

- Google Play's current service-fee framework for users in the **EEA, UK, and US** distinguishes relevant transactions by whether the user's first-time install or first update from Google Play occurred before or on/after **June 30, 2026**. TycoonX must not derive this cohort from account creation, first purchase, device age, or Xsolla customer creation.
- Google Play's current United States external content links program states that enrolled developers must begin reporting qualifying transactions and successful downloads and paying the relevant Play service fee from **October 1, 2026** following Google's July 22 update.
- Current Google external-link/billing-choice documentation applies service-fee treatment to qualifying transactions completed within **24 hours** after following an eligible external web/content link. TycoonX must preserve the required Google reporting/attribution context instead of treating a browser/Xsolla checkout as unrelated to the Play linkout.
- Google backend guidance, last updated **August 14, 2026**, says alternative-billing/external-offer integrations should use the `Externaltransactions` APIs to report and manage completed external transactions. TycoonX must maintain idempotent mapping between Google reporting context, Xsolla transaction IDs, TycoonX orders, and entitlement ledger events.
- Google's current rollout timeline identifies **September 30, 2026** for Australia and Japan, **December 31, 2026** for South Korea, and **September 30, 2027** for the rest of the world. These dates are recheck gates, not permanent assumptions about future program details.
- Google Play's July 6, 2026 Developer API update introduced collaborative chargeback review. `PendingRefundReviewNotification` can require developer review and `orders.reviewrefund` allows a response with relevant usage evidence; Google states a **24-hour** response window. TycoonX must use only accurate, proportionate, lawfully held evidence and must not fabricate or over-share private data when disputing chargebacks.
- A dedicated `TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md` protects Google Play -> Xsolla program enrollment, install-cohort treatment, US October reporting, 24-hour external-link attribution, external transaction reporting, service-fee margin modeling, rollout dates, refund/chargeback reconciliation, and collaborative chargeback review.
- Current Xsolla legal materials still identify the applicable Refund Policy type in checkout, and the Refund Policy remains dated **June 16, 2026**. The public TycoonX policy correctly leaves transaction-specific Xsolla refund conditions subject to the actual checkout/provider terms plus mandatory consumer law.
- The CPC Network's March 21, 2025 *Key Principles on In-Game Virtual Currencies* now receives a dedicated TycoonX release gate. The CPC position says paid in-game virtual currency itself should not be exempted from withdrawal as though it were digital content, warns against denying withdrawal within 14 days for unused purchased virtual currency, expects real-world-money price transparency for purchasable virtual currency and content/services bought with it, and warns against virtual-currency designs that obscure real cost or force unwanted surplus currency.
- Canonical rendered Purchases & Refunds and the canonical Markdown source were corrected on August 28. Turkish and German Purchases & Refunds have now been refreshed. Remaining localized Purchases pages must be updated in locale order before they return to `Ready` parity.

## Latest checkpoints

- German Purchases EU virtual-currency refresh: `e556ac9`
- Canonical rendered Purchases EU virtual-currency hardening: `d349400`
- Canonical Purchases Markdown EU virtual-currency sync: `6631b7e`
- Turkish Purchases EU virtual-currency refresh: `6a81c2a`
- EU/EEA virtual-currency release gate: `852989d`
- EU virtual-currency regression verifier: `2b9e77f`
- Google Play 2026 payment transition gate baseline: `756c104`
- Google Play collaborative chargeback hardening: `d419437`
- Google Play transition regression checks: `4cc5fd7`
- EU AI Act / Apple / Google AI transparency release gate: `55edf86`
- AI transparency regression verification: `2dc023a`
- Storefront/Xsolla/payment release hardening: `decfd7e`
- Apple external-purchase and metadata release gates: `4ebc8b5`
- Expanded manual public legal-surface verifier: `24a64af`
- Payment and entitlement release gates baseline: `f803f0c`
- Manual legal regression verifier baseline: `5c483c0`
- Shared legal inline-formatting pre-paint fix: `ba9d43a`
- German legal-notice source: `9e14c46`
- Public `/tycoonx-impressum` page: `816eb435`
- Support → Impressum routing: `62e727e`
- Legal hub → Impressum routing: `28981d6`
- German legal-notice release checklist: `bf2a6f3`
- Apple EULA release-checklist Impressum parity: `e7fb40e`
- Hindi Purchases & Refunds: `869de5d`
- Hindi Privacy Policy: `292a8c9`
- Hindi Community Standards: `3f26d5c`
- Indonesian Terms: `d01595d`
- Indonesian Purchases & Refunds: `17b507f`
- Indonesian Privacy Policy: `b0e1793`
- Indonesian Community Standards: `6d379c4`
- Complete Hindi + Indonesian hub routing: `8e64489`
- Hindi Terms: `a45a7fa`
- Complete Ukrainian hub routing: `1b0a591`
- Complete Vietnamese hub routing: `94388ed`
- Complete Thai hub routing: `5c833e64`
- Complete Polish hub routing: `4702080`
- Complete Norwegian Bokmål hub routing: `8c51827`
- Complete Swedish hub routing: `db6cc19`
- Complete Dutch hub routing: `f5cfaa4`
- Canonical rendered Privacy AI hardening: `90b0d70`
- Canonical Privacy Markdown AI sync: `0ed9286`
- Canonical Community child-safety hardening: `b73903c`
- Canonical Community Markdown sync: `0215590`

Full-document localization progress: **77 / 100 current (77%)** across the 25 requested locales. All **25 / 25 localized legal hubs exist (100%)**.

| Order | Locale | Language | Legal hub | Full Terms | Purchases & Refunds | Privacy | Community Standards |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | tr | Türkçe | Ready | Ready | Ready | Ready | Ready |
| 2 | de | Deutsch | Ready | Ready | Ready | Ready | Ready |
| 3 | es | Español | Ready | Ready | Refresh needed | Ready | Ready |
| 4 | es_MX | Español (México) | Ready | Ready | Refresh needed | Ready | Ready |
| 5 | fr | Français | Ready | Ready | Refresh needed | Ready | Ready |
| 6 | fr_CA | Français (Canada) | Ready | Ready | Refresh needed | Ready | Ready |
| 7 | it | Italiano | Ready | Ready | Refresh needed | Ready | Ready |
| 8 | pt | Português | Ready | Ready | Refresh needed | Ready | Ready |
| 9 | pt_BR | Português (Brasil) | Ready | Ready | Refresh needed | Ready | Ready |
| 10 | ru | Русский | Ready | Ready | Refresh needed | Ready | Ready |
| 11 | ja | 日本語 | Ready | Ready | Refresh needed | Ready | Ready |
| 12 | ko | 한국어 | Ready | Ready | Refresh needed | Ready | Ready |
| 13 | zh | 中文 | Ready | Ready | Refresh needed | Ready | Ready |
| 14 | zh_Hans | 简体中文 | Ready | Ready | Refresh needed | Ready | Ready |
| 15 | zh_Hant | 繁體中文 | Ready | Ready | Refresh needed | Ready | Ready |
| 16 | ar | العربية | Ready | Ready | Refresh needed | Ready | Ready |
| 17 | nl | Nederlands | Ready | Ready | Refresh needed | Ready | Ready |
| 18 | sv | Svenska | Ready | Ready | Refresh needed | Ready | Ready |
| 19 | nb | Norsk bokmål | Ready | Ready | Refresh needed | Ready | Ready |
| 20 | pl | Polski | Ready | Ready | Refresh needed | Ready | Ready |
| 21 | th | ไทย | Ready | Ready | Refresh needed | Ready | Ready |
| 22 | vi | Tiếng Việt | Ready | Ready | Refresh needed | Ready | Ready |
| 23 | uk | Українська | Ready | Ready | Refresh needed | Ready | Ready |
| 24 | hi | हिन्दी | Ready | Ready | Refresh needed | Ready | Ready |
| 25 | id | Bahasa Indonesia | Ready | Ready | Refresh needed | Ready | Ready |

**Exact next unfinished locale/document: Spanish (`es`) — Purchases & Refunds.**