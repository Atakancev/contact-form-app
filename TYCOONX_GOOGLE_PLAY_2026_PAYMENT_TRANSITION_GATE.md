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

### 1A. Current market/program map: do not treat every market as Billing Choice

As of this September 6, 2026 review, Google's current Billing Choice enrollment page maps the major current markets as follows:

- **United Kingdom:** Billing Choice program for alternative billing and external web links.
- **EEA:** Billing Choice is available for alternative billing; Google's existing EEA External Offers Program remains a separate route for external offers, and legacy EEA user-choice/EEA program paths may also remain available where Google says they do.
- **United States:** use Google's **existing alternative billing in the United States** program for alternative billing, and the **existing external content links program** for external web links. Do not assume the US is enrolled through the new UK/EEA Billing Choice program merely because the Android APIs share concepts or because older pilot documentation names the US.

This mapping is an operational checkpoint, not a permanent promise by Google. If Google's current program-specific page, Play Console enrollment, or governing program terms change, update the TycoonX routing table before changing production behavior.

### 1B. Billing Choice program controls

Where TycoonX uses Billing Choice:

- use it only where CK-Labs/TycoonX is enrolled and the user/storefront is eligible;
- use Play Billing Library **9.1 or higher** while that remains Google's current requirement;
- if external web links are enabled, update the external-web-link preference in Play Console before implementing the flow;
- if CK-Labs renders its own choice screen, update that preference in Play Console and follow Google's current UX requirements;
- give the user the required choice between Google Play Billing and either the approved alternative in-app billing option or the approved external web-link option;
- use Google's current Billing Choice APIs for the required information, parental-control, and reporting flow rather than imitating Google UI with a static screenshot or hard-coded copy;
- preserve supervised-user and parental-control handling;
- provide customer support for alternative/external purchases and a process for unauthorized-transaction disputes;
- provide the post-purchase links Google currently requires, including order history, subscription management where a subscription exists, customer service, and refund requests;
- where external web links are used, disclose the destination and purpose before linkout, protect PII in URLs, and do not redirect users to a materially different destination; and
- securely report authorized transactions within Google's applicable deadline using the correct reporting token and `DeveloperBillingType` classification.

The separate `TYCOONX_GOOGLE_PLAY_BILLING_CHOICE_PBL_9_1_IMPLEMENTATION_GATE.md` remains the implementation-level source for the current developer-rendered versus Google-rendered Billing Choice API sequence.

### 1C. EEA External Offers Program controls

Treat the EEA External Offers Program as a distinct program rather than another name for Billing Choice.

- Verify current app/game eligibility, business-registration requirements, market scope, and enrollment before relying on it.
- Do not combine mutually incompatible billing modes on the same storefront merely because both can eventually reach Xsolla.
- Use Google's current external-offers APIs so Google can surface the required information screen and user protections. Do not replace those APIs with a plain browser URL.
- Provide direct customer support, an unauthorized-transaction dispute process, and an appropriate refund route.
- A provider or checkout statement that a transaction is `non-refundable` must never be treated as overriding mandatory EU/EEA withdrawal, conformity, price-reduction, termination, refund, or other non-waivable consumer rights.
- Inform the user in-app about the destination and purpose before linking out. Do not put unsecured personal information into the external URL or misdirect the user to another destination.
- Report applicable authorized External Offers transactions within Google's current deadline and monitor retry/idempotency failures.
- Keep Play Store listing metadata and in-app steering compliant with the exact program rules in force for that storefront.

### 1D. Storefront/program decision table

Maintain a live decision table containing at least:

- user market/storefront;
- exact enrolled Google program;
- enrollment/approval evidence and date;
- whether Google Play Billing is shown;
- whether alternative in-app billing is allowed;
- whether an external web link is allowed;
- required Play Billing Library/API version;
- choice/information/parental-control behavior;
- reporting token/API and transaction classification;
- reporting deadline;
- service-fee model and install-cohort dependency;
- payment/refund/chargeback authority;
- customer-support owner and unauthorized-transaction route;
- order-history/subscription-management/refund links where required; and
- last official-source recheck date.

If the row is unknown, contradictory, stale, or not backed by actual enrollment, fail closed and do not expose the Xsolla steering flow for that storefront.

## 2. June 30, 2026 new-install / existing-install cohort

For the EEA, UK, and US, Google's current service-fee framework distinguishes relevant transactions by whether the transacting user's install is `new` or `existing` using the regional rollout date.

For those June 30, 2026 markets:

- **New install:** the user's first-time install or first update of TycoonX from Google Play occurred on or after June 30, 2026.
- **Existing install:** the user's first-time install or first update of TycoonX from Google Play occurred before June 30, 2026.

Operational rules:

- do not infer the cohort from TycoonX account creation, signup date, device age, first purchase date, Xsolla customer creation date, or a user-selected region;
- preserve the Google reporting/attribution data needed to apply the correct cohort treatment;
- do not manipulate install/update routing to manufacture a cheaper cohort;
- do not hard-code one service-fee percentage into TycoonX finance logic; and
- model market, program, product type, annual earnings tier, program participation, billing path, and install cohort separately.

Google currently applies an additional billing fee where its rules say the transaction uses Google Play Billing. Do not apply that billing fee mechanically to an external-web-link transaction where Google's current fee table excludes it, and do not assume external billing is fee-free.

## 3. United States alternative billing: October 1, 2026 reporting/fee transition

Google's current US alternative-billing program, updated July 22, 2026, says enrolled developers must report transactions and successful downloads and pay the relevant Play service fee starting **October 1, 2026**.

This is separate from the US external content links program.

Before October 1, 2026, if TycoonX intends to offer Xsolla or another alternative billing method **inside the Play-distributed US app**:

- verify TycoonX is enrolled in the exact US alternative-billing program;
- verify the app/game and mobile/tablet form factor remain eligible;
- implement Google's current alternative-billing APIs and Play Console settings;
- provide customer support and a process to dispute unauthorized alternative-billing transactions;
- provide links that let users see their order history, manage any subscriptions sold through that route, contact customer service, and initiate refund requests;
- if Google Play Billing is also offered, keep it consistently and reliably accessible to all relevant users rather than showing it selectively to steer purchases;
- if CK-Labs or a provider handles card data, confirm the applicable PCI-DSS responsibility rather than assuming Xsolla automatically resolves every CK-Labs-controlled step;
- keep the alternative payment's provider/merchant/refund role distinct from CK-Labs' TycoonX entitlement-delivery role; and
- implement reporting so that, once the October 1 requirement applies, all authorized US alternative-billing transactions can be reported to Google within **24 hours** without manual intervention.

A successful Xsolla payment may authorize TycoonX entitlement delivery, but it does not by itself prove the required Google external/alternative transaction report was submitted. Conversely, a Google reporting success must never grant the paid entitlement without authoritative payment confirmation.

## 4. United States external content links: October 1, 2026 reporting/fee transition

Google's current US external content links program, also updated July 22, 2026, says enrolled developers must report transactions and successful downloads and pay the relevant Play service fee starting **October 1, 2026**.

If TycoonX links a US Play user to its Xsolla webshop for in-app digital items:

- enroll and obtain approval for TycoonX in the exact US external content links program before showing the link;
- limit that program's link behavior to the eligible US/territory users Google permits;
- integrate Google's external content links APIs so the required information screen, parental controls, and reporting context are used;
- if Google Play Billing is also used, keep it consistently and reliably accessible;
- provide support for purchases completed outside Play and a process to dispute unauthorized transactions;
- provide a refund method where Google's program requires one. A `non-refundable` disclosure may satisfy a Google program condition only where it is truthful and legally effective for that transaction; it can never override a mandatory statutory remedy;
- tell the user the destination and purpose before linkout;
- do not place personal information in the URL without sufficient security/encryption;
- do not redirect or mislead the user to a destination materially different from the one presented;
- create and preserve the Google reporting token/context for each qualifying linkout;
- keep track of reportable transactions once required, including **$0 transactions arising from free-trial purchases** if TycoonX ever introduces such a product; and
- report the qualifying transaction through Google's required reporting path and reconcile later refunds, reversals, cancellations, and chargebacks.

### Purchase links versus external-app-download links

TycoonX's current use case is an external link to purchase TycoonX digital items, not a link to install a separate external app. Do not classify a webshop purchase link as an external-app-download event merely because both use the External Content Links program.

If CK-Labs later adds links to download an external app, build a separate reviewed flow because Google currently applies different registration, destination, reporting, and fixed-fee rules to external app download events.

## 5. 24-hour attribution and reporting are different concepts

Google currently uses a **24-hour linkout window** for relevant external-content-link fee attribution and also uses a **24-hour transaction-reporting deadline** in applicable alternative/external billing programs. Do not collapse these into one timestamp.

TycoonX must preserve at least:

- linkout time;
- Google reporting token/context;
- Xsolla/payment-provider transaction time;
- payment-success/finalization time used by the applicable Google reporting rule;
- report-submission time and result;
- refund/reversal/chargeback state; and
- any separate app-download event if that feature is ever introduced.

The system must:

- preserve link/reporting context across browser/app transitions and app restarts;
- not reset attribution merely because the user closes and reopens TycoonX;
- not route through unnecessary domains, sessions, or redirects to evade attribution or reporting;
- reconcile multiple purchases from one linkout under the exact Google program rule; and
- retain enough audit evidence to explain why a transaction was or was not reportable.

## 6. External transaction backend authority

For alternative/external transactions:

- Xsolla payment success remains the payment-provider authority for the Xsolla charge itself;
- the TycoonX server remains the entitlement-delivery authority for Diamonds/VIP after valid payment confirmation;
- Google external/alternative transaction state remains an additional platform reporting/commercial obligation where the applicable Play program requires it;
- none of these records may silently overwrite the others;
- use stable cross-references between TycoonX order ID, Xsolla transaction ID, Google reporting token/external transaction ID, user/account ID, product ID, storefront/program, install cohort, and entitlement-ledger event;
- make payment webhook handling, Google reporting, refunds, and entitlement corrections idempotent; and
- retain transaction evidence needed for refunds/chargebacks after account deletion only for a lawful and proportionate retention period.

Do not expose payment, Google reporting, or entitlement endpoints that allow a client-supplied `success=true`, price, product ID, country, or amount to become authoritative without server/provider validation.

## 7. Service-fee and margin protection

This is an internal commercial control, not player-facing legal copy.

- Do not advertise Xsolla as cheaper merely because CK-Labs assumes Google takes no fee.
- Model gross price, VAT/tax, Xsolla/payment costs, refunds/chargebacks, Google service fees, and any applicable billing fee before setting a regional Diamond/VIP price.
- Keep price decisions independent of attempts to manipulate install cohort, enrollment status, or reporting status.
- Do not hard-code current percentage tables into player-facing legal terms. Fees can change without changing the consumer's completed-purchase price rights.
- If Google changes fees or program rules, update future pricing where commercially necessary without retroactively repricing completed one-time purchases.
- Preserve the TycoonX rule that a later price decrease does not automatically create a refund/credit/price-match right and a later price increase does not create an extra charge on an already completed one-time purchase, except where mandatory law requires otherwise.
- Lifetime VIP can have different prices in different genuine sales windows, but fee changes must not be used to fabricate a fake discount or fake scarcity claim.

## 8. September 30, 2026 and later rollout checkpoints

Google's current lower-service-fee timeline states:

- June 30, 2026: EEA, UK, and US fee/billing-choice changes;
- September 30, 2026: Australia and Japan fee/billing-choice rollout;
- December 31, 2026: South Korea rollout;
- September 30, 2027: rest-of-world rollout.

Google's current page also says the new **Apps Experience Program / revamped Play Games Level Up Program** is scheduled for initial availability on **September 30, 2026** in Australia, EEA, Japan, UK, and US, while also saying program details will be shared as they become available.

Therefore:

- do not book a lower fee into TycoonX pricing merely because the future program appears in a fee table;
- do not claim TycoonX participates until CK-Labs has reviewed the final eligibility/integration requirements and actual Play Console acceptance/enrollment;
- perform a specific September 30 recheck before enabling or expanding Xsolla steering in Australia or Japan;
- also recheck whether TycoonX qualifies for the Games Level Up program and whether any integration commitments create new release obligations; and
- repeat this process before the South Korea and rest-of-world dates.

A dated official-source snapshot, Play Console evidence, and the exact production configuration should be retained for each major transition.

## 9. Refunds, chargebacks, and entitlement corrections

A Google reportable external transaction and an Xsolla payment can change state independently in different systems.

TycoonX must:

- never let a Google reporting retry grant Diamonds or VIP;
- never let an Xsolla webhook retry duplicate a Google report;
- correct only the paid value tied to the refunded, reversed, charged-back, duplicated, fraudulent, or invalid transaction, subject to mandatory law;
- preserve unrelated legitimate purchases;
- keep equivalent-value or negative-balance corrections proportionate and tied to the invalid transaction; and
- maintain support evidence showing which provider handled the payment/refund and which system changed the TycoonX entitlement.

The refunded/transferred-value single-correction-budget rule in `TYCOONX_REFUNDED_TRANSFERRED_VALUE_RECONCILIATION_RELEASE_GATE.md` still applies. Google reporting does not authorize double recovery.

## 10. Google Play RTDN and voided-purchase reconciliation

Google Play Billing refunds, cancellations, and chargebacks must not depend on the Android client being open or on one notification arriving successfully.

For Google Play Billing purchases, TycoonX must:

- enable and securely process applicable **Real-time Developer Notifications (RTDN)** for one-time purchases and voided purchases where supported;
- treat RTDN as a state-change signal and query the Google Play Developer API where needed before making a final entitlement decision;
- deduplicate Pub/Sub processing and make entitlement corrections idempotent;
- persist the Google `purchaseToken`, `orderId`, product identifier, TycoonX account/order reference, event time, refund type, and resulting ledger action needed to explain the reconciliation;
- distinguish a voided purchase from a pending purchase that never completed;
- run periodic server-side pull reconciliation using the **Voided Purchases API (`purchases.voidedpurchases.list`)** so missed RTDN events do not leave refunded value active forever;
- keep durable backend purchase history rather than relying on device-local purchase history;
- distinguish `REFUND_TYPE_FULL_REFUND` from `REFUND_TYPE_QUANTITY_BASED_PARTIAL_REFUND`;
- for quantity-based partial refunds, correct only the actually refunded quantity/value;
- where multi-quantity purchases are used, use the current authoritative product state, including `refundableQuantity` where applicable, rather than inventing a synthetic partial-refund model; and
- keep lawful refunds, chargebacks, fraud, and pending cancellations distinct so support tooling does not convert every refund into a cheating finding.

Release evidence should include a successful purchase, a pending purchase canceled before completion, a fully voided/refunded purchase after delivery, a duplicate notification proving idempotency, and a partial-quantity refund if TycoonX enables Google multi-quantity purchases.

## 11. Google collaborative chargeback review

Where Google sends a `PendingRefundReviewNotification` and the collaborative review flow is available:

- route it to a queue monitored often enough for Google's current response deadline;
- fetch authoritative purchase/account state before responding;
- submit only accurate evidence lawfully held for transaction, fraud, security, entitlement, or support purposes;
- never fabricate IP, geography, consumption, login, gameplay, or entitlement evidence;
- keep evidence proportionate and avoid unrelated private chat or excessive personal data;
- record the Google outcome and reconcile any later refund/reversal exactly once; and
- do not punish a player merely for using a good-faith payment-dispute route.

If the response deadline cannot be met reliably, do not rely on the collaborative review process as the only fraud-loss control.

## 12. Product invariants across every Google payment program

### Diamonds

Purchased Diamonds do not expire solely because time passes. Google enrollment, reporting, service-fee calculation, retry, migration, or program changes must not duplicate or delete valid unrelated Diamonds.

### One-time 30-Day VIP

30-Day VIP remains a **one-time, non-renewing 30-day entitlement**. Google program labels, API migrations, reporting retries, or support tooling must not convert it into an auto-renewing subscription, restart its clock, or create a second entitlement without a separate valid purchase or lawful remedy.

### Lifetime VIP

Lifetime VIP remains a **one-time promotional entitlement available only during selected genuine sales windows**. It may be withdrawn from future sale and may never return. A Google program/fee change, external-link retry, refund flow, or later promotion must not reopen a closed sales window or create an expectation of continuous availability.

## 13. Privacy, minors, and security boundaries

- Use obfuscated or server-side identifiers where Google's APIs support them rather than exposing raw personal identifiers unnecessarily.
- Do not put unprotected email addresses, profile names, account IDs, payment details, or other PII into an external URL.
- Keep payment/reporting evidence only as long as needed for the applicable contract, tax, accounting, fraud, dispute, platform-reporting, or legal purpose.
- Do not bypass Google parental/supervised-user controls to reach Xsolla.
- A minor's access to a payment route must also satisfy applicable age/parental-authorization law and the TycoonX minor-purchase gates.
- A failed reporting call, store outage, enrollment problem, or parental-control denial is not evidence that the player committed fraud.

## 14. Play review and audit evidence

Maintain a dated internal packet containing:

1. Google programs/markets TycoonX is actually enrolled in;
2. Play Console enrollment screenshots or exports;
3. the storefront/program decision table;
4. Android UI for Play Billing, alternative billing, and external web links;
5. Play Billing Library version and relevant preference settings;
6. backend mapping for Google token/external transaction <-> Xsolla transaction <-> TycoonX entitlement;
7. sample success, refund, chargeback, duplicate-report, and missed-notification reconciliation;
8. evidence that reportable transactions are submitted within the current deadline;
9. a supervised-user/parental-control path for each enabled alternative/external program;
10. US post-purchase order-history/support/refund links where required;
11. the September 30, 2026 Australia/Japan and Apps/Games program recheck;
12. current public TycoonX Terms/Purchases channel-responsibility wording; and
13. a dated capture of the official Google program pages relied on for the production decision.

Do not store payment credentials, identity documents, or sensitive user evidence in this public repository.

## 15. Regression cases

Fail release or disable the affected steering flow if any of these occur:

- a US user is routed through UK/EEA Billing Choice enrollment assumptions without the correct US program;
- a storefront has no proven program enrollment;
- Xsolla is exposed globally from the Play app using one feature flag;
- Google Play Billing is required to remain available but is selectively hidden or degraded;
- the user is linked to a destination different from the one disclosed;
- a raw email/account identifier is put into a linkout URL without appropriate protection;
- an Oct 1 US alternative-billing transaction cannot be reported within the required window;
- an Oct 1 US external-link transaction cannot be reported/reconciled;
- a report retry grants Diamonds or VIP;
- a payment webhook retry creates a second Google report or second entitlement;
- linkout attribution time is confused with reporting-deadline time;
- a refund removes unrelated legitimate value or is recovered twice;
- 30-Day VIP becomes recurring because a generic subscription model is reused;
- Lifetime VIP becomes permanently purchasable because a storefront migration ignores its sales window;
- a future Games Level Up fee is assumed before actual eligibility/enrollment; or
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

Before a material Google Play -> Xsolla production change, manually verify the current official Google Play program pages and actual Play Console state because market eligibility, court-order programs, fees, reporting, and rollout dates can change.