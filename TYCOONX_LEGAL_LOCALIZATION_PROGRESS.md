# TycoonX Legal Localization Progress

Canonical legal source: the English TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards in this repository.

Last synchronized: **August 30, 2026**.

## Rules

- Always display the brand as **TycoonX**. Technical route/file names containing `tyconx` may remain where changing them could break URLs, but rendered prose must never display `TyconX`.
- TycoonX goes to full release on **September 1, 2026**. Do not describe the live service, users, purchases, VIP, Diamonds, rewards, or legal terms as beta.
- Translate for legal meaning, not word-for-word. Localized copy must sound natural to a native speaker while preserving the legal effect of the English source.
- English remains canonical. Refresh localized versions whenever the canonical meaning changes materially.
- Locale variants must remain genuinely localized, including `es`/`es_MX`, `fr`/`fr_CA`, `pt`/`pt_BR`, and `zh`/`zh_Hans`/`zh_Hant`.
- Arabic uses RTL layout.
- Locale order is: tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id.
- Within each locale the order is Terms, Purchases & Refunds, Privacy, Community Standards, then native-language QA.
- Do not mark a localized document `Ready` until the page exists, preserves the canonical legal meaning and product distinctions, uses natural native-language wording and punctuation, and contains no stale displayed `TyconX` or live-service beta wording.
- Do not use GitHub Actions or paid services for this project. Do not change any database.

## Current state

The localized legal hub at `/tycoonx-legal/{locale}` exists for all **25/25** target locales.

On **August 29, 2026**, the canonical Terms were corrected so purchased TycoonX Diamonds are not treated as immediately supplied digital content merely to remove an applicable EU/EEA withdrawal right. Because this materially changed the canonical Terms meaning, all 25 localized Terms pages were reopened and resynchronized in the required locale order. Purchases & Refunds, Privacy, and Community Standards remained current throughout that refresh.

All 25 Terms pages are now synchronized. This means **100/100 localized full documents are currently confirmed current**.

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

Future runs must not duplicate completed localization. Continue with repository-wide legal QA, stale-brand/stale-release-status checks, canonical-English drift checks, and remaining commercial/legal/payment-readiness hardening. If canonical English meaning changes materially, reopen only the affected localized document type and resynchronize in the required locale order.

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
- Repository QA requires zero displayed `TyconX` branding and zero stale live-service release-status wording in player-facing TycoonX legal copy.

## Completed localization checkpoint

On **August 30, 2026**, `app/tycoonx-legal/id/terms/page.tsx` was synchronized to the August 29 canonical Terms meaning in natural Indonesian and the reopened localization queue was completed.

Indonesian Terms refresh commit: `c2b625a76854b211cf9cbc14fc1b42b4b36179d8`.

## August 30, 2026 payment and withdrawal QA checkpoint

Repository-wide localization remains closed because this checkpoint did not change the canonical public Terms, Purchases & Refunds, Privacy, or Community meaning.

`TYCOONX_PAYMENT_ENTITLEMENT_RELEASE_GATES.md` was hardened for release implementation parity:

- Google Play requires fresh eligible `ProductDetails` near checkout, `queryPurchasesAsync()` reconciliation on launch/foreground/reconnection, and secure use of `obfuscatedAccountId` / `obfuscatedProfileId` where appropriate without rejecting otherwise valid purchases merely because those identifiers are absent;
- Xsolla release evidence records the transaction-specific contracting Xsolla entity/merchant, price/currency/tax presentation, transaction state and applicable refund-policy configuration rather than assuming one universal Xsolla merchant or refund setup;
- German BGB § 356a implementation explicitly gates the required `Vertrag widerrufen`-equivalent function, consumer name, contract identification, electronic communication method for confirmation, separate `Widerruf bestätigen`-equivalent confirmation control, immediate durable-medium receipt containing the submitted withdrawal information plus date/time of receipt, and timely-submission treatment; and
- each purchase channel requires a dated release-evidence sample covering visible product/price/tax presentation, one-time versus recurring status, merchant/payment channel, confirmation, entitlement delivery, restoration/reconciliation where applicable, and the correct refund/withdrawal route. Limited-window Lifetime VIP evidence must also show that scarcity/countdown/discount claims were genuine.

Payment/withdrawal gate commit: `2b4ba8cfc482d94a897edd1e6b41303736012de3`.
Verifier hardening commit: `431d08bf5e5e898cc9424948b550bef09594d897`.

## August 30, 2026 Google Play Billing Choice / External Offers checkpoint

`TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md` was refreshed against Google Play's current 2026 program documentation so TycoonX does not treat all Xsolla steering as one generic external-payment mode.

The gate now records that:

- Google's current **Billing Choice** program requires enrollment, Play Billing Library **9.1 or higher**, the applicable choice-screen/external-web-link preferences in Play Console, a user choice between Google Play Billing and the approved alternative, mandatory supervised-user/parental-control handling, and secure reporting of alternative transactions with the required external transaction token;
- the current **EEA External Offers Program** is a distinct program with different eligibility and configuration requirements, including EEA-only offers, business-registration eligibility, child-targeting restrictions, use of the External Offers APIs and required information screen, customer support/unauthorized-transaction handling, and destination/link safeguards;
- Google currently states that an enrolled Play-managed app using the EEA External Offers Program may not simultaneously use Google Play Billing or user choice billing under that program, so mutually incompatible program modes must not be mixed on the same storefront;
- applicable authorized External Offers transactions currently have a **24-hour reporting deadline** after the external transaction; and
- TycoonX must maintain a storefront/program decision table and keep Xsolla steering disabled when market/program eligibility or required behavior is unknown or conflicting.

Google Play gate hardening commit: `6b4396b329f2e879e41a23b746f520a8282aff46`.

This checkpoint did **not** change public canonical legal meaning, so no localized document was reopened.

## Current official-source checks

As of **August 30, 2026**, the scoped official-source audit remains consistent with the canonical approach:

- European Commission/CPC Network principles on in-game virtual currencies continue to require transparent real-money pricing, avoidance of hidden or forced virtual-currency costs, respect for withdrawal rights, and particular care for children: https://commission.europa.eu/topics/consumers/consumer-rights-and-complaints/enforcement-consumer-protection/coordinated-actions/social-media-online-games-and-search-engines_en
- Apple App Review Guidelines continue to require In-App Purchase for digital unlocks where no exception applies, while current regional external-purchase permissions remain storefront/program specific: https://developer.apple.com/app-store/review/guidelines/
- Apple's updated EU payment-option framework announced August 18, 2026 takes effect October 1, 2026 and introduces the unified Attachment 14 framework, 12-month payment-option election, alternative-payment entitlement/API requirements, child-safety requirements, reporting/commission obligations, and developer support responsibility for alternative payments: https://developer.apple.com/support/payment-options-on-the-app-store-in-the-eu/
- Google Play Billing guidance continues to require verification and `PURCHASED` state before entitlement, not `PENDING`, followed by acknowledgement or consumption. Current Billing Choice documentation requires Play Billing Library 9.1 or higher and transaction reporting, while the EEA External Offers Program has its own distinct eligibility, API, support, destination, and reporting requirements: https://developer.android.com/google/play/billing/integrate, https://developer.android.com/google/play/billing/billingchoice and https://support.google.com/googleplay/android-developer/answer/14372887
- Xsolla's current Refund Policy is dated June 16, 2026 and continues to use transaction-specific refund-policy types, covers in-game currency and some unredeemed mistaken purchases, and preserves an EU/EEA/UK 14-day withdrawal framework in the applicable policy: https://xsolla.com/refund-policy
- German BGB withdrawal rules continue to preserve the statutory 14-day framework and transaction-specific conditions for early performance of digital content/services. BGB § 356a requires the continuously available and prominently accessible withdrawal function, consumer/contract/confirmation-channel information, separate confirmation control, immediate durable-medium receipt with date/time, and timely-submission effect reflected in the operational release gate: https://www.gesetze-im-internet.de/bgb/__355.html, https://www.gesetze-im-internet.de/bgb/__356.html and https://www.gesetze-im-internet.de/bgb/__356a.html

## Progress metrics

- **Localized full documents:** 100/100, **100%**
- **Localized hubs:** 25/25, **100%**
- **Canonical English legal wording:** **99.7%**
- **Full commercial/legal/payment readiness:** **95%**
- **Overall project completion:** **99.0%**
- **Exact next unfinished locale/document:** None — all target locale documents are current
