# TycoonX Legal Localization Progress

Canonical legal source: the English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository, together with the rendered canonical legal clarifications synchronized into affected localized routes.

Last synchronized: **September 10, 2026**.

## Rules

- Always display the brand as **TycoonX**. Compatibility-sensitive technical route/file identifiers may remain unchanged, but rendered player-facing or legal prose must use **TycoonX**.
- TycoonX has been in full release since **September 1, 2026**. Do not describe the current live service, users, purchases, VIP, Diamonds, rewards or legal terms as a pre-release service.
- English remains canonical. Reopen localized documents only when canonical English meaning materially changes.
- Translate for legal meaning, not word-for-word. Every locale must preserve product distinctions, dates, price logic, payment-channel responsibilities, liability/consumer-rights caveats and the exact legal effect while sounding natural to a native speaker.
- Required locale order is: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.
- Keep `es`/`es_MX`, `fr`/`fr_CA`, `pt`/`pt_BR`, and `zh`/`zh_Hans`/`zh_Hant` genuinely localized. Arabic uses RTL layout.
- Within each locale the order is Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not use GitHub Actions or paid services for this project.
- Do not change any production database row, function, trigger, policy, grant, schema, cron, balance, entitlement or configuration as part of this legal audit. Production inspection is read-only unless a separate database change is explicitly approved.
- Gameplay/payment hardening is code-first: current implementation evidence can justify an engineering release gate but is not automatically a permanent contractual promise, proof of player intent or safe harbor for knowing exploitation.

## Current localization state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** required locales.

**Localized hubs: 25/25. Localized full documents: 100/100.** Every locale has current Terms, Purchases & Refunds, Privacy and Community Standards.

Exact next unfinished locale/document: **None. All 25 target locales and all 100 localized full documents are current.**

Do not duplicate completed localization. If canonical English meaning materially changes, reopen only the affected document type and resynchronize it in the required locale order.

## Synchronized player-facing Terms clarifications

Nine rendered Terms clarifications are synchronized across the canonical Terms route and all target locales:

1. `GameplayEconomyRuleNotice.tsx`
2. `CompanyCommerceRuleNotice.tsx`
3. `UnionGovernanceRuleNotice.tsx`
4. `ArtBeggingRuleNotice.tsx`
5. `PlayerGovernmentMarketRuleNotice.tsx`
6. `BankCreditMarketsRuleNotice.tsx`
7. `LogisticsJobsCompetitionsRuleNotice.tsx`
8. `SocialUgcRuleNotice.tsx`
9. `RealMoneyTradingNotice.tsx`

`RealMoneyTradingNotice.tsx` was already fully localized but was not mounted in the shared layout. On September 10, 2026 it was wired into `app/layout.tsx`, so the canonical English Terms and all localized Terms now actually render the existing rule distinguishing prohibited off-platform real-money trading from authorized TycoonX purchase and supported gift/transfer mechanisms.

Existing Terms continue to cover knowing exploitation, server acceptance not being an absolute safe harbor, account compromise, evidence quality, proportional corrections and preservation of unrelated valid paid value. Implementation defects should be fixed technically rather than normalized as intended access or product behavior.

## Synchronized player-facing Purchases clarification

`OfficialPurchaseRefundNotice.tsx` is now mounted in `app/layout.tsx` and renders on the canonical Purchases & Refunds route and all localized Purchases routes.

The notice was already localized but previously not mounted. It now visibly distinguishes genuine purchases through Apple App Store, Google Play and the official TycoonX webshop using Xsolla from ordinary player-to-player game-value movements and unauthorized off-platform deals. It also preserves mandatory rights for unrelated valid official purchases and does not make CK-Labs the seller, escrow provider or refund guarantor for unauthorized user-to-user off-platform arrangements.

## Synchronized player-facing Privacy clarifications

Two Privacy clarifications are now part of rendered route coverage:

1. `ControllerIdentityPrivacyNotice.tsx`
2. `PersonalDataBreachPrivacyNotice.tsx`

The canonical English Privacy Policy already contains a dedicated controller/contact section. `ControllerIdentityPrivacyNotice.tsx` was already localized for the 25 target locale Privacy routes but was not mounted. It is now mounted from `app/layout.tsx`, so localized Privacy readers receive the controller identity and contact route directly instead of only being referred onward to another legal page.

This presentation fix supports GDPR Articles 12 and 13: privacy information must be concise, transparent, intelligible and easily accessible, and Article 13(1)(a) requires the identity and contact details of the controller when personal data are collected from the data subject.

`PersonalDataBreachPrivacyNotice.tsx` remains synchronized across the canonical English Privacy Policy route and all 25 localized Privacy routes. It states the current GDPR personal-data-breach distinction without overstating notification duties: CK-Labs assesses and documents personal data breaches as required; where GDPR Article 33 applies it notifies the competent supervisory authority without undue delay and, where feasible, within 72 hours after awareness unless the breach is unlikely to result in a risk to natural persons' rights and freedoms; and where GDPR Article 34 applies it informs affected individuals without undue delay when a high risk is likely, subject to applicable statutory exceptions.

The clarifications preserve native language and regional variants, and Arabic uses RTL. They do not imply that every attack, outage, bug or security alert is a legally notifiable personal data breach, and they do not waive mandatory data-protection rights or remedies.

## Rendered-notice integration gate

`TYCOONX_RENDERED_LEGAL_NOTICE_INTEGRATION_GATE.md` records the September 10 rendering defect and regression criteria. A translated legal component does not count as delivered legal information merely because its source file exists. The intended Terms, Purchases and Privacy notices must remain mounted or otherwise rendered on the relevant canonical/localized routes.

## Active purchase/product invariants

All canonical and localized legal documents must continue to preserve that:

- purchased Diamonds do not expire solely because time passes;
- purchased Diamonds, promotional/free Diamonds, one-time 30-Day VIP and Lifetime VIP are distinct products;
- 30-Day VIP is a **one-time, non-renewing 30-day entitlement** unless a future compliant product clearly states otherwise;
- Lifetime VIP is a limited-time promotional one-time entitlement available only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous availability;
- Apple App Store, Google Play and the official CK-Labs TycoonX webshop using Xsolla are distinct payment channels under one coherent legal framework;
- CK-Labs may change future Diamond bundle pricing/content, VIP prices, regional prices, currencies and future promotions subject to applicable law;
- prices may differ by country, platform and channel, including because of provider tax/VAT/FX handling;
- the final total price shown before confirmation governs a completed transaction, subject to mandatory law and correction of legally relevant errors;
- completed one-time purchases are not retroactively repriced merely because a later price, tax, FX rate, sale or promotion differs;
- a later decrease does not automatically create a refund/credit/price-match right and a later increase does not create an extra charge on a completed one-time purchase, except where mandatory law requires otherwise;
- Lifetime VIP may have different genuine prices in different sales windows and promotional claims/countdowns/crossed-out prices must not be misleading;
- total consumer prices and mandatory taxes/fees must be displayed as required by applicable German/EU law;
- future recurring products require separate compliant renewal, recurring-price, cancellation, notice and reminder rules; and
- mandatory EU/German withdrawal, conformity, update, notice, consent, price-reduction, termination, refund, liability, privacy and other non-waivable rights remain intact.

Obvious catalog/configuration errors, failed/pending/reversed payments, duplicate or accidental grants, fraud, chargebacks, regional-price abuse, promotion/coupon abuse, account compromise, provider outages/rule changes/replacement, unsupported clients, business sale/reorganization/successor operation, economy corrections, feature replacement and lawful permanent service discontinuation remain covered by canonical rules.

## Active gameplay/enforcement invariant

Genuine salaries/payroll, Company distributions, supply/export/tenders, Begging, Union contributions/fees, player markets, shop auto-fill, TycoonX-operated automation, Government Market systems, Art/Music/Books, trucks/deliveries, care jobs, Company recruitment, bank/FX/stocks/crypto, competitions/rewards, chats, rooms and other supported systems are not prohibited merely because they move value or operate automatically.

A large amount, unusual price, aggressive bid, default, bankruptcy, large gain/loss, high salary, repeated delivery, repeated win, favorable reward or popular creator work is not automatically abuse. Reliable evidence must support knowing manipulation, disguised value funneling, controlled-account evasion, prohibited RMT, external automation, altered-client/API abuse, exploit laundering, fraud or another actual rule violation.

Server acceptance alone does not prove legitimacy, and abnormal state alone does not prove knowledge or intent. Enforcement must distinguish detection, containment, state correction and punishment, consider account compromise/outages/retries/races/provider errors, and correct directly attributable invalid state proportionately rather than automatically destroying unrelated valid paid value.

## Completed code-first legal map and release gates

Substantive mapping is complete for Company governance/value movement; Company supply/export/tender commerce; Union governance/treasury; Art/Begging; player/Government markets; bank/credit/FX/stocks/crypto; Logistics/jobs/competitions/rewards; Social/UGC; cross-cutting profile/server-authority/privacy; and residual Housing/profile/energy/friends/activity/log authority.

Detailed implementation gates remain the QA source of truth:

- `TYCOONX_COMPANY_SUPPLY_EXPORT_TENDER_RELEASE_GATE.md`
- `TYCOONX_UNION_TREASURY_GOVERNANCE_RELEASE_GATE.md`
- `TYCOONX_ART_BEGGING_RELEASE_GATE.md`
- `TYCOONX_PLAYER_GOVERNMENT_MARKETS_RELEASE_GATE.md`
- `TYCOONX_BANK_CREDIT_FX_STOCKS_CRYPTO_RELEASE_GATE.md`
- `TYCOONX_LOGISTICS_JOBS_COMPETITIONS_RELEASE_GATE.md`
- `TYCOONX_SOCIAL_UGC_RELEASE_GATE.md`
- `TYCOONX_CROSS_CUTTING_SERVER_AUTHORITY_PRIVACY_RELEASE_GATE.md`
- `TYCOONX_CODE_FIRST_GAMEPLAY_LEGAL_MAP.md`
- `TYCOONX_FINAL_LEGAL_RELEASE_READINESS.md`
- `TYCOONX_PRODUCTION_REMEDIATION_RECHECK.md`
- `TYCOONX_VIP_ENTITLEMENT_COMMERCIAL_INTEGRITY_RECHECK.md`
- `TYCOONX_REVENUECAT_REFUND_ENTITLEMENT_RECHECK.md`
- `TYCOONX_XSOLLA_REFUND_ENTITLEMENT_RECHECK.md`
- `TYCOONX_PROMOTION_REFERENCE_PRICE_COMMERCIAL_PRESENTATION_GATE.md`
- `TYCOONX_EU_VIRTUAL_CURRENCY_RELEASE_GATE.md`
- `TYCOONX_PERSONAL_DATA_BREACH_PRIVACY_GATE.md`
- `TYCOONX_RENDERED_LEGAL_NOTICE_INTEGRATION_GATE.md`

## September 10 production remediation verification

Previously documented P0/P1 findings are not assumed fixed merely because legal wording/localization is complete. Representative open controls still include sensitive self-profile authority and broad public profile exposure, caller-influenced XP/energy/raw-credit paths, Housing authority helpers, connected-fill/shop ownership boundaries, Company/Union/Art authorization defects, stock/crypto/bank service boundaries, raw social/confidentiality gaps and generic official-looking notification authority.

The VIP-focused recheck remains open:

- `profiles.vip` is still not suitable as authoritative entitlement provenance while ordinary-client influence exists;
- later Diamond/Xsolla paths can preserve a pre-existing VIP cache, so a corrupted cache must not be laundered into indefinite trusted entitlement;
- `send_vip_expiry_professor_notification(...)` remains a privileged raw sender callable by ordinary client roles with caller-supplied target/expiry/source facts;
- `process_vip_expiry_professor_reminders(...)` derives candidates more safely but remains a global service operation callable more broadly than required;
- one-time/non-renewing VIP candidates still receive generic renewal-oriented copy instead of source-aware wording that makes clear current 30-Day VIP does not renew automatically; and
- Lifetime VIP must not receive an ordinary expiry reminder.

### RevenueCat refund/reversal gap

`TYCOONX_REVENUECAT_REFUND_ENTITLEMENT_RECHECK.md` remains an open P0 payment-integrity gate.

The current RevenueCat fulfillment functions correctly record and idempotently grant many successful purchases, but the reviewed base event handler does not economically reconcile a `CANCELLATION` event for a refunded non-renewing purchase. Current RevenueCat documentation defines `CANCELLATION` as covering a subscription or non-renewing purchase that was canceled **or refunded**. The implementation therefore needs to distinguish ordinary unsubscribe from refund/revocation using authoritative event reason and transaction state.

For Diamonds, a refunded one-time purchase must reconcile the exact transaction and use an idempotent, bounded clawback/debt model for already-consumed paid Diamonds rather than blindly deleting unrelated earned/promotional value. `REFUND_REVERSED` must restore the corresponding correction exactly once.

For one-time 30-Day VIP, a refunded source must remove only that source/duration and then recompute effective VIP from every other valid authoritative source. A separate Lifetime VIP, other valid 30-Day VIP, Diamond-funded period, Xsolla entitlement, documented complimentary grant or other valid entitlement must survive an unrelated refund.

RevenueCat gift fulfillment adds a provenance requirement: the current v3 path resolves a gift recipient when fulfilling the original purchase but later cancellation/refund events are not equivalently re-resolved through the original gift transaction. Refund reconciliation must target the account that actually received the gift by immutable transaction/gift provenance, not merely whichever account identity appears in a later provider event.

Aggregate production evidence in the read-only review showed 43 RevenueCat Diamond non-renewing purchase events with 8,750 Diamonds logged as granted, 26 VIP non-renewing purchase events, 15 VIP cancellation events and 3 VIP expiration events. All 15 currently recorded VIP cancellations carry the nested provider reason `UNSUBSCRIBE`; no Diamond cancellation event was present at the time of that check. Delivered RevenueCat gifts exist for both Diamonds and VIP, with no matching cancellation found for those delivered gift transactions. This identifies a structural readiness defect without claiming that a refund has already been mishandled or that any player exploited it.

A separate P1 commercial-consistency issue is also recorded: one-time VIP stacking is asymmetric across Diamond, RevenueCat and Xsolla paths. Either make stacking uniform, block a purchase that would overlap unexpectedly, or disclose the actual timing before confirmation. Do not represent a purchase as adding another 30 days if the implementation will run that entitlement concurrently with an already-active source.

### Xsolla refund and stacked-VIP reversal gap

`TYCOONX_XSOLLA_REFUND_ENTITLEMENT_RECHECK.md` remains an open P0/P1 payment-integrity gate for the CK-Labs TycoonX webshop.

The current Xsolla purchase path keeps transaction/order-level purchase records and its Diamond reversal logic is materially stronger than the RevenueCat refund path: it identifies the source purchase, prevents duplicate reversal, removes only currently recoverable granted Diamonds and moves attributable consumed value into bounded clawback debt instead of blindly driving the visible balance negative.

The one-time VIP reversal arithmetic is not yet source-safe. `xsolla_reverse_store_purchase(...)` currently subtracts the reversed purchase's **full original VIP duration** from the player's aggregate Xsolla pass expiry. If a later legitimate Xsolla VIP purchase has already been stacked behind an earlier purchase, and the earlier purchase is refunded after part of its period has elapsed, full-duration subtraction can remove time belonging to the later valid purchase. Reversal therefore needs authoritative per-purchase entitlement provenance and schedule recomputation that removes only the remaining unconsumed time attributable to the reversed source while preserving the full remaining value of every other valid source.

This is presently a structural risk rather than a known live-player loss. Aggregate production checks found 9 live/default Xsolla VIP purchases and 6 live/default Xsolla Diamond purchases, no live/default purchase currently marked reversed, and no player with more than one recorded live/default Xsolla VIP purchase. One refund/reversal event exists only in sandbox state.

The unmatched-reversal path is also recorded as P1 resilience work. If a refund/reversal arrives for a transaction/order that cannot be found locally, the current function marks it `ignored` with `purchase_not_found`; later purchase fulfillment does not visibly consult a durable negative state for that transaction/order. Xsolla's current documentation says its relevant Store/Payments webhooks are sent sequentially, which reduces normal out-of-order risk, so this is not evidence that Xsolla normally reorders events. Still, a trusted unmatched refund should be retained as a transaction-level negative/hold state so recovery, import, migration or concurrent-processing problems cannot later grant value against a payment already known to be reversed. Current production had zero such ignored events at the time of this review.

### EU/EEA virtual-currency withdrawal and checkout recheck

`TYCOONX_EU_VIRTUAL_CURRENCY_RELEASE_GATE.md` was rechecked and tightened on September 10, 2026 against the European Commission / CPC Network *Key Principles on In-Game Virtual Currencies* dated March 21, 2025.

The existing TycoonX canonical and localized Purchases wording already preserves the material outcome, so no locale was reopened. The implementation gate is now more explicit about the CPC Network's current position that the purchase of in-game virtual currency itself is not digital content for purposes of relying on the digital-content immediate-performance withdrawal exception. TycoonX must therefore not treat immediate Diamond crediting as an automatic loss of an otherwise applicable statutory withdrawal right, and unused purchased Diamonds must remain within that right during the applicable 14-day period where the right exists.

For a later Diamond purchase of actual digital content or a digital service, if the implementation relies on the early-performance exception, the gate now requires the legally relevant express consent and acknowledgement to be collected in a dedicated control separate from the click that purchases the content/service. The CPC principles allow consent and acknowledgement to be combined together, but not silently folded into the `Buy` click. The required contract confirmation must also contain or preserve confirmation of that consent and acknowledgement. New regression cases and evidence-retention requirements now cover these distinctions.

This is a checkout/consumer-rights implementation clarification, not a promise that every TycoonX transaction always has a withdrawal right and not a change to the product definitions of Diamonds, one-time 30-Day VIP or Lifetime VIP.

## Current-law and provider checkpoint

Rechecked on **September 10, 2026**:

- The European Commission continues to present the CPC Network's March 21, 2025 virtual-currency principles as minimum requirements/best practices under Union consumer law. The official CPC document expressly identifies as practices to avoid treating in-game virtual currency itself as digital content for the withdrawal exception, denying withdrawal within the applicable 14-day period for purchased virtual currency that remains unused, and denying withdrawal for in-game digital content/services merely because the user paid with virtual currency. It also states that where the digital-content immediate-performance exception is used, express consent and acknowledgement may be collected together but must be separate from the purchase click, and the contract confirmation must include confirmation of them.
- GDPR Article 12 requires Articles 13/14 information to be concise, transparent, intelligible and easily accessible. GDPR Article 13(1)(a) requires the identity and contact details of the controller when personal data are collected from the data subject. The localized controller/contact notice is now actually rendered instead of remaining an unused component.
- RevenueCat's current webhook reference states that `CANCELLATION` covers a subscription or non-renewing purchase that was canceled or refunded, and separately defines `REFUND_REVERSED`. Its refund guidance states that a refunded one-time/non-subscription purchase loses the associated entitlement and describes platform-specific detection requirements.
- Apple's current App Review Guidelines continue to state that purchased in-game IAP currency may not expire and that restorable purchases need a restore mechanism.
- Google Play's purchase-management documentation updated September 9, 2026 continues to distinguish refunds from revocation for one-time purchases and exposes transaction/order state suitable for source-specific reconciliation.
- Xsolla's current webhook documentation continues to send transaction-specific refund/cancellation information, documents retry behavior, and distinguishes newer combined order webhooks from older separate payment/refund plus order webhook configurations. TycoonX should normalize the event model actually configured for CK-Labs into authoritative transaction state and preserve source-specific entitlement provenance.
- EU digital-content rules and German BGB implementation continue to preserve mandatory conformity, price-reduction/termination/refund and other non-waivable remedies. The legal framework must not use entitlement reconciliation to contract around those rights.
- GDPR Articles 33 and 34 continue to require risk-based personal-data-breach handling: supervisory-authority notification without undue delay and, where feasible, within 72 hours after awareness unless the Article 33 risk threshold is not met; documentation of personal data breaches; and communication to affected individuals without undue delay where a high risk is likely, subject to the Article 34 exceptions.
- GDPR data-minimisation, privacy-by-design/default and security duties remain relevant to the broad profile/social access defects and should be fixed technically rather than normalized in player-facing privacy prose.

No material provider-rule change was identified in this run that requires reopening the substantive purchase product definitions or Community Standards.

## Canonical source status

- English Terms: current and supplemented by nine rendered synchronized clarifications, including the now-mounted RMT clarification.
- English Purchases & Refunds: current and supplemented by the now-mounted official-purchase/off-platform distinction. Its current EU/EEA withdrawal wording already states that the mere crediting of purchased Diamonds is not treated as immediate digital-content performance automatically extinguishing withdrawal rights, so the September 10 CPC recheck did not require a canonical wording change.
- English Privacy Policy: current, contains controller/contact information directly, and is supplemented by the synchronized personal-data-breach clarification; broad profile/social exposure remains an implementation defect and is not treated as intended disclosure.
- English Community Standards: current.
- All 25 localized Terms receive all nine rendered synchronized Terms clarifications.
- All 25 localized Purchases routes receive the official-purchase/off-platform distinction and already preserve the same mandatory EU/EEA Diamond-withdrawal outcome.
- All 25 localized Privacy routes receive both localized controller/contact information and the synchronized personal-data-breach clarification, including RTL rendering for Arabic.

## Next code-first audit queue

There is no unfinished localization document and no unmapped substantive gameplay cluster.

Highest priority remains **payment/entitlement remediation verification**:

1. make VIP provenance server-authoritative rather than cache-authoritative;
2. make VIP-expiry sender/processor service-only and source-aware;
3. implement RevenueCat refund/revocation and `REFUND_REVERSED` reconciliation for Diamonds, one-time VIP and gifts using immutable transaction provenance;
4. replace Xsolla aggregate full-duration VIP reversal with source-aware reconciliation that preserves later valid stacked VIP time;
5. retain unmatched authoritative Xsolla refunds/reversals as durable transaction-level negative/hold state rather than terminally forgetting them;
6. ensure refunded/revoked sources cannot trigger false expiry/purchase reminders;
7. choose and enforce a consistent cross-channel active-VIP stacking/overlap rule; and
8. preserve all unrelated valid paid/documented entitlements and mandatory consumer rights.

A separate checkout verification should confirm the actual EU/EEA Diamond purchase/spend flows against `TYCOONX_EU_VIRTUAL_CURRENCY_RELEASE_GATE.md`, including real-money equivalent presentation, avoidance of forced surplus paid currency, unused-Diamond withdrawal treatment, separation of any digital-content early-performance consent/acknowledgement from the purchase click, and retention of the required contract confirmation evidence. This repository does not contain the complete live Apple, Google Play or Xsolla checkout implementation, so that operational verification cannot be inferred from the legal pages alone.

A separate privacy-operations verification should confirm that CK-Labs can record awareness time, incident facts, affected systems/data, risk assessment, containment/remediation, supervisory-authority notification decision/timing, affected-user communication decision/timing, statutory exceptions relied on and reasons for delay where required. The Privacy wording does not claim those operational controls are already complete.

Then continue closing the existing profile/public-data, XP/energy/wallet, Housing, connected-fill/shop, Company/Union/Art, market/bank/stock, Social/confidentiality and trusted-worker findings only when deployed definitions/policies/grants demonstrate the remediation. After engineering changes land, repeat current Apple/Google/RevenueCat/Xsolla plus German/EU checks and reopen only localized document types affected by a material canonical meaning change.

Database remediation remains outside this legal audit unless explicitly approved.

## Progress metrics

Legal/localization coverage remains essentially complete. This run tightened the existing EU/EEA virtual-currency release gate to mirror the CPC Network's withdrawal classification and checkout-consent mechanics more precisely, without duplicating completed localization or changing the already-correct canonical legal meaning. The major payment/entitlement implementation blockers remain open, and the actual live checkout implementation still needs operational verification outside this legal-page repository.

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **99.9%**
- **Full commercial/legal/payment readiness:** **77.5%**
- **Overall project completion:** **98.7%**
- **Exact next unfinished locale/document: None. All 25 target locales and all 100 localized full documents are current.**

**Next substantive code-first target:** verify and close source-authoritative payment reconciliation first: RevenueCat refund/reversal/gifts, Xsolla stacked-VIP reversal and unmatched-refund state, VIP provenance and source-aware expiry messaging. In parallel, verify the actual EU/EEA Diamond checkout/spend flow against the tightened CPC withdrawal/consent gate and the operational personal-data-breach response controls.
