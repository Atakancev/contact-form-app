# TycoonX Google Play 2026 Payment Transition Gate

Last reviewed: September 6, 2026

This is the operational and commercial release gate for the Google Play build of TycoonX. It complements the public TycoonX Terms of Service and Purchases & Refunds Policy. It does not replace Google Play program terms, mandatory law, or transaction-specific Xsolla/Google obligations.

TycoonX is in full release. Treat this as a live-production control, not a launch or beta checklist.

## Why this gate exists

Google Play materially changed its payment-program and service-fee framework during 2026. The official TycoonX webshop using Xsolla must not be treated as a globally linkable, zero-reporting alternative to Google Play Billing.

For every user/storefront and payment flow, TycoonX must determine whether the transaction is:

- a normal Google Play Billing purchase;
- an eligible alternative-billing purchase inside the app;
- an eligible external-web-link purchase after the applicable Google-approved flow; or
- a purchase that must not be promoted or initiated from the Play-distributed app in that market.

A generic `external_checkout_enabled` flag is not enough. Program, market, install cohort, API flow, reporting obligation, service-fee treatment, customer-support obligation, refund route, parental-control behavior, and payment authority must be determined separately.

## P0 before enabling any Google Play -> Xsolla purchase path

### 1. Program enrollment and market eligibility

- Do not show an Xsolla purchase button, external web link, or alternative in-app billing flow merely because the webshop exists.
- Verify that the user is in a market covered by the exact Google Play program being used and that CK-Labs/TycoonX is actually enrolled for that program and market.
- Keep Play Console enrollment state, app behavior, backend reporting, customer support, and public legal wording aligned.
- If the applicable Google program requires a choice between Google Play Billing and an alternative method, do not suppress, degrade, delay, or visually disadvantage the required Google Play option.
- If the program permits alternative billing in lieu of Google Play Billing, do not accidentally import a user-choice requirement from a different program.
- Reverify current Google documentation and Play Console state before a material rollout because eligibility, court-order programs, fees, APIs, and market coverage can change.
- Where Google offers more than one program option for the same region, do not enroll or operate TycoonX in two mutually exclusive programs for that region at the same time. Google's current User Choice Billing overview states that an app may enroll in more than one program overall, but if a region has multiple program options the app can be enrolled in only **one program per region at a time**. Treat a program switch as a controlled Play Console/backend transition, not as two simultaneous client feature flags.

### 1A. Current market/program map: do not treat every market as Billing Choice

As of this September 6, 2026 review, Google's current program materials require market-specific routing rather than one global Xsolla path.

- **United Kingdom:** Billing Choice program for alternative billing and external web links where TycoonX is enrolled and eligible.
- **EEA:** Billing Choice is available for alternative billing; Google's existing EEA External Offers Program remains a separate route for external offers, and legacy EEA program paths may remain available where Google says they do.
- **United States:** use Google's **existing alternative billing in the United States** program for alternative billing, and the **existing external content links program** for external web links. Do not assume the US is enrolled through the new UK/EEA Billing Choice program merely because Android APIs share concepts.
- **Japan:** current Google materials distinguish User Choice Billing from the Japan-only External Payments program. These programs are not interchangeable and, under Google's current External Payments enrollment rules, an enrolled app cannot offer External Payments and User Choice Billing at the same time in Japan.
- **Australia:** as of September 6, 2026, the existing User Choice Billing pilot does **not** make a game such as TycoonX eligible merely because Australia is listed as a pilot market; Google's current pilot eligibility allows games in the EEA and Japan, while the other listed pilot markets are non-gaming-app routes. Google's announced expanded billing-choice rollout for Australia is September 30, 2026. Until the new Australian program terms are actually effective and TycoonX is eligible/enrolled, fail closed for alternative billing and external web steering from the Play-distributed game. Do not infer that the September 30 fee/billing-choice rollout automatically authorizes an external web purchase link; a linkout needs its own current Google program authority.
- **India:** India has a separate current alternative-billing program that expressly permits apps **and games** on mobile/tablet to offer an alternative billing system alongside Google Play Billing. TycoonX may use that route only after completing the India-specific Play Console onboarding and current alternative-billing API requirements. This is not the same as permission to place a generic browser link to the TycoonX webshop.
- **South Korea:** South Korea has a separate current alternative-billing program that expressly permits apps **and games** on mobile/tablet to offer an alternative billing system alongside Google Play Billing. TycoonX may use that route only after South-Korea-specific onboarding and alternative-billing API integration. Google's separate 2026 expanded-billing-choice/service-fee rollout for South Korea is scheduled for December 31, 2026; that future transition does not erase the current South Korea program before then.
- **Brazil, Indonesia, and South Africa:** these markets appear in Google's existing User Choice Billing pilot, but Google's current pilot eligibility outside the EEA and Japan is for **non-gaming** mobile/tablet apps. TycoonX is a game, so do not expose the pilot alternative-billing flow in these markets unless Google later makes the game eligible under the applicable expanded program and CK-Labs actually enrolls.

Google's consumer-facing material may describe users in additional countries as sometimes seeing a choice of billing systems, but developer eligibility is controlled by the applicable developer program. Consumer-facing availability text is not a substitute for TycoonX game eligibility, enrollment, API, fee, reporting, or storefront requirements.

If Google's current program-specific page, Play Console enrollment, or governing terms change, update the TycoonX routing table before changing production behavior.

### 1B. Billing Choice program controls

Where TycoonX uses Billing Choice:

- use it only where CK-Labs/TycoonX is enrolled and the user/storefront is eligible;
- use Play Billing Library **9.1 or higher** while that remains Google's current requirement;
- if external web links are enabled, update the external-web-link preference in Play Console before implementing the flow;
- if CK-Labs renders its own choice screen, update that preference in Play Console and follow Google's current UX requirements;
- give the user the required choice between Google Play Billing and either the approved alternative in-app billing option or the approved external web-link option;
- use Google's current Billing Choice APIs for required information, parental-control, and reporting flow rather than imitating Google UI with a static screenshot or hard-coded copy;
- preserve supervised-user and parental-control handling;
- provide customer support for alternative/external purchases and a process for unauthorized-transaction disputes;
- provide post-purchase links Google currently requires, including order history, subscription management where a subscription exists, customer service, and refund requests;
- where external web links are used, disclose the destination and purpose before linkout, protect PII in URLs, and do not redirect users to a materially different destination; and
- securely report authorized transactions within Google's applicable deadline using the correct reporting token and `DeveloperBillingType` classification.

The separate `TYCOONX_GOOGLE_PLAY_BILLING_CHOICE_PBL_9_1_IMPLEMENTATION_GATE.md` remains the implementation-level source for the current developer-rendered versus Google-rendered Billing Choice API sequence.

### 1C. EEA External Offers Program controls

Treat the EEA External Offers Program as a distinct program rather than another name for Billing Choice.

- Verify current app/game eligibility, business-registration requirements, market scope, and enrollment before relying on it.
- Do not combine mutually incompatible billing modes on the same storefront merely because both can eventually reach Xsolla.
- Use Google's current external-offers APIs so Google can surface required information and user protections. Do not replace those APIs with a plain browser URL.
- Provide direct customer support, an unauthorized-transaction dispute process, and an appropriate refund route.
- A provider or checkout statement that a transaction is `non-refundable` must never override mandatory EU/EEA withdrawal, conformity, price-reduction, termination, refund, or other non-waivable consumer rights.
- Inform the user in-app about the destination and purpose before linking out. Do not put unsecured personal information into the external URL or misdirect the user to another destination.
- Report applicable authorized External Offers transactions within Google's current deadline and monitor retry/idempotency failures.

### 1D. Storefront/program decision table

Maintain a live decision table containing at least the user market/storefront, exact enrolled Google program, enrollment/approval evidence and date, whether Google Play Billing is shown, whether alternative in-app billing is allowed, whether an external web link is allowed, required Play Billing Library/API version, choice/information/parental-control behavior, reporting token/API and transaction classification, reporting deadline, service-fee model and install-cohort dependency, payment/refund/chargeback authority, customer-support owner, and last official-source recheck date.

For each material rollout or fee decision, retain the official source title/URL, source publication or last-update date where Google exposes one, the date CK-Labs retrieved it, the effective date relied on, the applicable Play Console program/enrollment state, and the version/date of any accepted program terms. A blog announcement is evidence of an announcement, not a substitute for later operative program terms or actual account eligibility.

If a row is unknown, contradictory, stale, or not backed by actual enrollment, fail closed and do not expose Xsolla steering for that storefront.

### 1E. India and South Korea current-program controls

India and South Korea are active special-market programs now; do not wait for the global 2027 rollout to model them correctly, and do not force them through a UK/EEA Billing Choice flow.

For **India**:

- TycoonX is currently game-eligible on mobile/tablet under Google's India alternative-billing program.
- Google Play Billing remains alongside the alternative billing system under the current program.
- Complete India-specific Play Console onboarding, current trust/safety requirements, PCI-DSS responsibility where CK-Labs or its provider handles card data, payment-method configuration, and the alternative billing APIs before enabling the route.
- Report all authorized India alternative-billing transactions to Google within **24 hours** using the applicable APIs.
- If any legacy active subscription ever existed from an older manual/non-automated flow, migrate it as Google's current ExternalTransactions requirements prescribe. Current TycoonX 30-Day VIP is not a subscription and must not be treated as one merely because the API also supports subscriptions.
- Pay the applicable Google service fee. Under Google's current pre-global-rollout model, qualifying India alternative-billing transactions use the otherwise applicable Play service fee reduced by 4%; do not advertise that commercial reduction to players as a guaranteed consumer discount.
- Do not turn India alternative billing into a generic external-webshop steering permission. If TycoonX wants to open the official Xsolla webshop outside the app, verify a separately applicable current Google program before doing so.

For **South Korea**:

- TycoonX is currently game-eligible on mobile/tablet under Google's South Korea alternative-billing program.
- Google Play Billing must remain alongside the alternative billing system under the current program.
- Complete South-Korea-specific Play Console onboarding, trust/safety requirements, PCI-DSS responsibility where applicable, payment-method configuration, and the current alternative billing APIs.
- Report all authorized South Korea alternative-billing transactions within **24 hours**.
- Under Google's current pre-December-31 model, qualifying alternative-billing transactions use the otherwise applicable Play service fee reduced by 4%.
- Google's current South Korea program also permits a web-based alternative-payment method subject to that program's requirements. Do not replace the prescribed alternative-billing UX with an arbitrary normal-browser redirect. Google's current South Korea guidance describes the outlink payment as being presented through the required in-app alternative-billing experience, including an embedded webview and the applicable Google UX/trust-and-safety controls. Reverify this before shipping any Xsolla web flow there.
- CK-Labs is outside South Korea. Google's current tax guidance says Google collects the required 10% Korean VAT from developers for sales to South Korean customers processed through qualifying additional in-app billing systems and remits it to the Korean authority. Finance must therefore model the South Korea tax treatment separately from Xsolla settlement and from the Google service fee; do not assume the alternative processor alone settles every Korean tax obligation.

For both markets, a successful Xsolla payment may support TycoonX entitlement delivery only after authoritative server confirmation, but it does not prove that the required Google transaction report was submitted. Likewise, Google reporting success does not prove payment or authorize an entitlement.

## 2. New-install / existing-install cohorts

For the EEA, UK, and US, Google's current service-fee framework distinguishes relevant transactions by whether the transacting user's first-time install or first update from Google Play occurred before or on/after June 30, 2026.

Do not infer this cohort from TycoonX account creation, signup date, device age, first purchase date, Xsolla customer creation date, or a user-selected region. Preserve Google reporting/attribution data needed to apply the correct treatment, do not manipulate install/update routing to manufacture a cheaper cohort, and model market, program, product type, earnings tier, program participation, billing path, and install cohort separately.

For Australia and Japan, the corresponding rollout boundary is September 30, 2026. For South Korea, the announced expanded-model rollout boundary is December 31, 2026. Do not reuse the June 30 cohort date in those markets after their respective new models apply.

Google currently applies an additional billing fee where its rules say a transaction uses Google Play Billing. Do not apply that fee mechanically to an external-web-link transaction where Google's current fee table excludes it, and do not assume external billing is fee-free.

## 3. United States alternative billing: October 1, 2026 reporting/fee transition

Google's current US alternative-billing program, updated July 22, 2026, says enrolled developers must report transactions and successful downloads and pay the relevant Play service fee starting **October 1, 2026**.

Before that transition, if TycoonX intends to offer Xsolla or another alternative billing method inside the Play-distributed US app, verify enrollment and eligibility, implement Google's current alternative-billing APIs and Play Console settings, provide customer support and unauthorized-transaction dispute handling, provide required order-history/subscription-management/customer-service/refund links, keep Google Play Billing consistently available where required, confirm any PCI-DSS responsibility, and implement reporting so all authorized US alternative-billing transactions can be reported to Google within **24 hours** once the obligation applies.

A successful Xsolla payment may authorize TycoonX entitlement delivery, but it does not prove the required Google report was submitted. Conversely, a Google reporting success must never grant a paid entitlement without authoritative payment confirmation.

## 4. United States external content links: October 1, 2026 reporting/fee transition

Google's current US external content links program, also updated July 22, 2026, says enrolled developers must report transactions and successful downloads and pay the relevant Play service fee starting **October 1, 2026**.

If TycoonX links a US Play user to its Xsolla webshop for in-app digital items, enroll and obtain approval first, limit the flow to eligible users, integrate Google's required external-content-link APIs and parental-control handling, provide support and a dispute/refund route, disclose destination and purpose, protect personal information in URLs, preserve Google reporting context, track reportable transactions including **$0 transactions arising from free-trial purchases** if TycoonX ever introduces such a product, and reconcile later refunds, reversals, cancellations, and chargebacks.

### Purchase links versus external-app-download links

TycoonX's current use case is an external link to purchase TycoonX digital items, not a link to install a separate external app. Do not classify a webshop purchase link as an external-app-download event merely because both may use the External Content Links program.

## 5. 24-hour external-link attribution and reporting are different concepts

Google currently uses a **24-hour external-link attribution window** for relevant external-content-link fee treatment and also uses a **24-hour transaction-reporting deadline** in applicable alternative/external billing programs. Do not collapse these into one timestamp.

Preserve at least linkout time, Google reporting token/context, Xsolla/payment-provider transaction time, payment-success/finalization time, report-submission time/result, refund/reversal/chargeback state, and any separate app-download event. Preserve this context across app/browser transitions and restarts and retain enough evidence to explain why a transaction was or was not reportable.

## 6. External transaction backend authority

Use Google's **Externaltransactions APIs** where the applicable alternative/external program requires backend transaction reporting or management.

- Xsolla payment success remains the payment-provider authority for the Xsolla charge itself.
- The TycoonX server remains the entitlement-delivery authority for Diamonds/VIP after valid payment confirmation.
- Google external transaction state remains an additional platform reporting/commercial obligation where the applicable Play program requires it.
- Use stable cross-references between TycoonX order ID, **Xsolla transaction ID**, **Google external transaction ID** or reporting token, user/account ID, product ID, storefront/program, install cohort, and entitlement-ledger event.
- Make payment webhook handling, Google reporting, refunds, and entitlement corrections idempotent.

Do not expose endpoints that let client-supplied `success=true`, price, product ID, country, or amount become authoritative without server/provider validation.

## 7. Service-fee and margin protection

Do not advertise Xsolla as cheaper merely because CK-Labs assumes Google takes no fee. Model gross price, VAT/tax, Xsolla/payment costs, refunds/chargebacks, Google service fees, and any applicable billing fee before setting regional Diamond/VIP prices. Do not hard-code current percentage tables into player-facing legal terms.

For India and South Korea before their respective expanded-model transitions, keep the current special-market 4-percentage-point service-fee reduction for qualifying alternative-billing transactions separate from Xsolla/payment costs and tax treatment. In South Korea, also account for Google's current collection/remittance mechanics for the applicable 10% Korean VAT on qualifying additional-billing sales by developers located outside South Korea. Do not treat the 4-point service-fee reduction as a tax reduction or as permission to omit tax-inclusive consumer pricing where required.

If Google changes fees or program rules, future TycoonX prices may be changed where commercially necessary, but completed one-time purchases are not retroactively repriced. A later price decrease does not automatically create a refund/credit/price-match right and a later increase does not create an extra charge on an already completed one-time purchase, except where mandatory law requires otherwise. Lifetime VIP can have different prices in different genuine sales windows, but fee changes must not be used to fabricate a fake discount or fake scarcity claim.

## 8. September 30, 2026 and later rollout checkpoints

Google's current Play Console Help page **Understanding Google Play's lower service fees**, retrieved for this September 6, 2026 review, states:

- June 30, 2026: EEA, UK, and US fee/billing-choice changes;
- September 30, 2026: Australia and Japan fee/billing-choice rollout;
- December 31, 2026: South Korea rollout;
- September 30, 2027: rest-of-world rollout.

### 8A. Source-precedence and conflicting-date control

Google's 2026 public materials have not always shown the same Japan rollout date. An earlier Google/Android Developers announcement listed **Japan with the December 31, 2026 Korea phase**, while the current Play Console Help timeline now lists **Japan with Australia on September 30, 2026**. Treat this as a live policy-source divergence, not as permission to pick whichever date produces the lower fee sooner.

For production routing, entitlement/payment UX, and fee accrual, use the most current operative program-specific Google Play documentation and actual Play Console eligibility/enrollment available to CK-Labs at the decision time. A dated developer blog announcement does not override later operative Help Center/program terms or the Play Console state of the TycoonX app. If current official Google sources still conflict materially, or Play Console does not yet expose/confirm the expected program for TycoonX, **fail closed** for the new route and do not book the lower fee until the conflict is resolved by the operative program terms/account state.

Never rewrite historical economics because Google later changes a rollout date or documentation. Preserve the policy snapshot and program state that governed each historical transaction, while applying later valid changes prospectively where required.

### 8B. TycoonX is a game: Level Up, not Apps Experience Program

Google published the revamped **Google Play Games Level Up** guidelines on September 3, 2026. TycoonX is a game, so do not model it as an ordinary app merely to obtain the Apps Experience Program rate card. The relevant new games program is Play Games Level Up unless Google expressly classifies TycoonX otherwise in Play Console.

Enrollment being available does not equal approval, and a future rollout date does not itself create a lower rate. Before using a Level Up rate in TycoonX pricing or finance:

- explicitly enroll through Play Console only after reviewing the current Level Up terms and every applicable guideline;
- preserve the enrollment submission, guideline version, package/version, validation/approval result, effective date, and any later eligibility change;
- do not book or advertise a lower fee until Google has actually validated/approved TycoonX for the program and the applicable regional rollout date has arrived;
- treat continued compliance as an ongoing condition, not a one-time checkbox;
- if status is rejected, suspended, lost, or uncertain, use the otherwise applicable service-fee model prospectively and do not retroactively reprice player transactions.

Current Level Up technical/experience checkpoints include Google Play Games Services v2 platform authentication, achievements/game stats/rewards where applicable, cloud save/conflict handling, large-screen quality, distribution requirements, performance/stability requirements, and other current program rules. Exact applicability/exemptions must be taken from Google's then-current guideline set rather than guessed.

For the September 30, 2026 phase specifically, Google's current Level Up guideline set requires distribution across **Mobile, Foldables, and Tablets** with the applicable quality requirements. It also sets game-specific crash/ANR/performance criteria and a title-availability rule affecting comparable non-Android launches from September 30, 2026 onward. Do not claim Level Up eligibility while TycoonX knowingly fails a mandatory applicable guideline or while a required exemption has not been established.

### 8C. Japan: external payments and User Choice Billing are mutually exclusive

Google's current Japan External Payments enrollment page states that the program is limited to users in Japan, allows games to participate, requires external payment links to be offered side-by-side with Google Play Billing through Google's External Payments API, and says enrolled apps cannot offer External Payments and User Choice Billing at the same time.

Therefore TycoonX must maintain one authoritative Japan program state. If External Payments is selected, do not also expose User Choice Billing for the same enrolled app/region. If User Choice Billing is selected, do not expose the Japan External Payments link flow as a second parallel program. Switching programs requires a reviewed Play Console/configuration transition, not a client-side feature-flag race.

For Japan External Payments, preserve Google's required user experience, parental controls, transaction reporting, customer support, unauthorized-transaction dispute process, and refund method. Any statement that a transaction is `non-refundable` is effective only where it is truthful and lawful and never overrides mandatory consumer remedies.

Google's consumer-facing help currently identifies external payment links as available in Japan. Do not infer an Australia external-link permission from Japan's program or from the September 30 Australia fee/billing-choice rollout.

### 8D. Apps Experience Program is not an automatic fallback

Google's Apps Experience Program opened Play Console enrollment on September 1, 2026 and requires explicit enrollment, implementation/maintenance of applicable guidelines, Google validation, and approval before its program rate card applies to eligible transactions. If a future TycoonX companion app or other non-game product is considered for AEP, apply those requirements to that separate product. Do not use AEP enrollment as a workaround for TycoonX game-program eligibility.

### 8E. Australia pre-September-30 fail-closed rule

Do not confuse an announced future expansion with present game eligibility. As of this September 6 review, Google's existing User Choice Billing pilot says games are eligible in the EEA and Japan, while the other listed pilot locations are non-gaming mobile/tablet apps. TycoonX therefore must not ship Australian alternative billing under that old pilot merely because Australia appears in the pilot country list.

Before September 30, 2026, the Australian Play build should remain on the currently authorized payment path unless Google has separately approved a TycoonX-specific alternative route. On or after September 30, re-read the then-effective expanded Billing Choice terms, confirm game eligibility and Play Console enrollment, confirm API/UX/reporting/service-fee requirements, and only then enable any new route. If the final terms are delayed, incomplete, or contradictory, continue to fail closed.

### 8F. India and South Korea are not waiting-room markets

India and South Korea already have current alternative-billing programs for games. The later expanded-billing-choice dates govern future model changes, not whether the current special programs exist.

- **India:** keep using the current India program requirements until Google actually replaces or migrates them. Do not assume the September 30, 2027 rest-of-world rollout retroactively defines current India reporting, fees, or UX.
- **South Korea:** keep using the current South Korea program requirements through the applicable December 31, 2026 transition unless Google publishes an earlier mandatory migration. Before December 31, preserve the current 24-hour reporting, side-by-side Google Play Billing, adjusted service-fee, and trust/safety requirements. Revalidate the new install cohort, fee model, API path, and any external-web-link treatment before switching to the expanded model.

A dated official-source snapshot, Play Console evidence, and exact production configuration should be retained for every major transition. Repeat the same review before South Korea on December 31, 2026 and rest-of-world rollout on September 30, 2027.

## 9. Refunds, chargebacks, and entitlement corrections

A Google reportable external transaction and an Xsolla payment can change state independently in different systems. Never let a Google reporting retry grant Diamonds or VIP, never let an Xsolla webhook retry duplicate a Google report, correct only value tied to the refunded/reversed/invalid transaction, preserve unrelated legitimate purchases, and keep equivalent-value corrections proportionate.

The refunded/transferred-value single-correction-budget rule in `TYCOONX_REFUNDED_TRANSFERRED_VALUE_RECONCILIATION_RELEASE_GATE.md` still applies. Google reporting does not authorize double recovery.

## 10. Google Play RTDN and voided-purchase reconciliation

For Google Play Billing purchases, TycoonX must securely process applicable Real-time Developer Notifications, treat notifications as state-change signals rather than unquestionable entitlement commands, query the Google Play Developer API where needed, deduplicate processing, persist purchase/order/refund identifiers and ledger actions, periodically reconcile through the **Voided Purchases API (`purchases.voidedpurchases.list`)**, and distinguish full refunds from quantity-based partial refunds so only actually refunded value is corrected.

Lawful refunds, chargebacks, fraud, and pending cancellations remain distinct states. A refund alone is not proof of cheating.

## 11. Google collaborative chargeback review

Where Google sends a `PendingRefundReviewNotification` and the collaborative review flow is available, use the current Google developer flow including `orders.reviewrefund` where it remains the applicable endpoint. Preserve the current **24-hour response window** while Google's documentation requires it. Submit only accurate, proportionate evidence lawfully held and do not punish a player merely for using a good-faith payment-dispute route.

## 12. Product invariants across every Google payment program

### Diamonds

Purchased Diamonds do not expire solely because time passes. Google enrollment, reporting, service-fee calculation, retry, migration, or program changes must not duplicate or delete valid unrelated Diamonds.

### One-time 30-Day VIP

30-Day VIP remains a **one-time, non-renewing 30-day entitlement**. Google program labels, API migrations, reporting retries, or support tooling must not convert it into an auto-renewing subscription, restart its clock, or create a second entitlement without a separate valid purchase or lawful remedy.

### Lifetime VIP

Lifetime VIP remains a **one-time promotional entitlement available only during selected genuine sales windows**. It may be withdrawn from future sale and may never return. A Google program/fee change, external-link retry, refund flow, or later promotion must not reopen a closed sales window or create an expectation of continuous availability.

## 13. Privacy, minors, and security boundaries

Use obfuscated/server-side identifiers where supported, do not put unprotected personal data into linkout URLs, retain payment/reporting evidence only for a lawful proportionate period, and **Do not bypass Google parental/supervised-user controls to reach Xsolla.** A failed reporting call, store outage, enrollment problem, or parental-control denial is not evidence that the player committed fraud.

## 14. Play review and audit evidence

Maintain a dated internal packet with enrolled programs/markets, Play Console evidence, storefront/program routing, Android purchase UI, Play Billing Library/API versions, Google-token/Xsolla/TycoonX entitlement mapping, success/refund/chargeback/idempotency evidence, reporting-deadline evidence, supervised-user paths, required US support links, September 30 Australia/Japan evidence, India and South Korea enrollment/API/reporting evidence, South Korea tax treatment, Level Up enrollment/validation and applicable guideline evidence, source-publication/retrieval/effective dates for policy decisions, any official-source conflict and how it was resolved, and dated copies of official Google materials relied on for production decisions.

Do not store payment credentials, identity documents, or sensitive user evidence in this public repository.

## 15. Regression cases

Fail release or disable the affected steering flow if any of these occur:

- a US user is routed through UK/EEA Billing Choice enrollment assumptions without the correct US program;
- a storefront has no proven program enrollment;
- Xsolla is exposed globally from the Play app using one feature flag;
- Google Play Billing is required to remain available but is selectively hidden or degraded;
- two mutually exclusive Google billing/steering programs are enabled for the same region at the same time;
- an older blog-announcement rollout date is used to override a later operative Play Console Help/program term or actual TycoonX enrollment state;
- an unresolved conflict between current official Google sources is resolved by choosing the commercially cheaper date instead of failing closed;
- an Oct 1 US transaction cannot be reported within the required window;
- linkout attribution time is confused with reporting-deadline time;
- a report or payment retry duplicates a Google report or TycoonX entitlement;
- a refund removes unrelated legitimate value or is recovered twice;
- 30-Day VIP becomes recurring;
- Lifetime VIP becomes permanently purchasable because a storefront/program migration ignores its sales window;
- TycoonX books a Level Up/AEP lower fee merely because enrollment was submitted or a rollout date arrived, without actual program approval;
- TycoonX, as a game, is routed into AEP as a shortcut around Level Up eligibility;
- Japan External Payments and Japan User Choice Billing are simultaneously enabled for the same enrolled app/region;
- an Australia user is shown a Japan-style external-payment link without independent Google authority;
- before September 30, 2026, TycoonX enables the old Australia User Choice Billing pilot merely because Australia is listed, without accounting for the current non-gaming eligibility restriction;
- TycoonX enables the existing UCB pilot for the game in Brazil, Indonesia, or South Africa without a later game-eligibility change and actual enrollment;
- an India alternative-billing transaction is granted but cannot be reported to Google within 24 hours;
- a South Korea alternative-billing transaction is granted but cannot be reported to Google within 24 hours;
- an India flow turns current alternative-billing permission into an unsupported generic browser link to Xsolla;
- a South Korea flow bypasses the current Google-required alternative-billing UX or tax treatment;
- Google reporting success is treated as payment success, or payment success is treated as Google reporting success; or
- a Google/provider outage is treated as proof of player fraud.

## Manual verification

Run the main local legal verifier:

```bash
node scripts/verify-tycoonx-legal.mjs
```

Run the dedicated Google Play 2026 transition verifier:

```bash
node scripts/verify-tycoonx-google-play-2026-transition.mjs
```

Also run the Google refund/reconciliation verifier:

```bash
node scripts/verify-tycoonx-google-refunds.mjs
```

Before a material Google Play -> Xsolla production change, manually verify the current official Google Play program pages and actual Play Console state because market eligibility, program classification, fees, reporting, rollout dates, and Level Up requirements can change.