# TycoonX Google Play Billing Choice PBL 9.1 Implementation Gate

Last reviewed: September 5, 2026

This is a narrow Android implementation companion to `TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md`. It exists because Google materially refreshed its Billing Choice integration guidance in September 2026 and because the Play Console routes alternative billing and external links through different programs by market. It does not create a new TycoonX product or payment channel and does not replace Google Play program terms, the public TycoonX Terms of Service, the Purchases & Refunds Policy, or mandatory consumer law.

TycoonX went to full release on September 1, 2026. Do not describe this live payment flow, Diamonds, VIP, users, rewards, or the current service as beta.

## P0 rule

Do not expose a Google Play -> Xsolla path merely because the app can open a browser.

A production Billing Choice path is allowed only when all of the following are true for the actual user/storefront:

1. CK-Labs/TycoonX is enrolled in the applicable Google Play program for that market and payment mode.
2. The current Play Billing integration reports the relevant billing program and, where needed, external-link capability as available for that user.
3. The app uses the API sequence for the exact Google-rendered or developer-rendered scenario returned by Play.
4. Required Google information, choice, branding, loyalty and parental-control UI is not bypassed, imitated, hidden, or replaced with stale hard-coded content.
5. The external transaction token survives app -> browser -> Xsolla -> backend reconciliation without duplication or reassignment.
6. Every reportable authorized external transaction is reported to Google within the applicable current deadline.
7. The TycoonX entitlement ledger grants value only after authoritative payment confirmation and remains idempotent across retries.

If any required fact is unknown, use a lawful available fallback rather than guessing.

## 0. Market routing is a legal/commercial control, not an API guess

The same Play Billing library can expose several technical programs, but technical capability does not mean the same enrollment program governs every country.

As of this September 5, 2026 checkpoint, keep at least this decision table:

| User market | Alternative billing inside the app | External web link |
| --- | --- | --- |
| United Kingdom | Billing Choice program | Billing Choice program |
| European Economic Area (EEA) | Billing Choice / existing eligible EEA alternative-billing routes as actually enrolled | **Existing EEA External Offers Program** for the external-link route |
| United States | Existing US alternative-billing program as actually enrolled | **Existing US External Content Links program** |

Google's current Billing Choice eligibility materials state that the program can apply to an **app or game** in supported markets. That does not collapse the rows above into one global TycoonX implementation.

**Release rule:** maintain a server-readable market -> Google program -> payment-mode decision table. Do not infer the program from language, IP alone, TycoonX profile country, account nationality, a prior purchase, or the presence of Billing Choice classes in the Android binary.

### EEA external links are not a Billing Choice shortcut

For an EEA user, do not route a TycoonX -> Xsolla external link through Billing Choice scenario 2A/2B when the enrolled route is the **EEA External Offers Program (EOP)**.

Current operational safeguards include:

- use the EOP APIs and required Google information/user-protection flow rather than an arbitrary browser redirect;
- do not combine Google Play Billing or user-choice billing with an EOP mode where the current EOP rules prohibit that combination;
- report applicable authorized EOP external transactions within the current 24-hour reporting deadline;
- do not assume CK-Labs has joined a future or optional Apps & Games program merely because a rate is published; and
- keep service-fee percentages as dated accounting inputs, never entitlement logic or player-facing tax claims.

### United States and United Kingdom routing

- For US users, use the enrolled US alternative-billing or US External Content Links program as applicable. Do not label a US flow Billing Choice merely because PBL 9.1 contains unified billing-program APIs.
- For UK users, the current enrollment map places alternative billing and external web links under Billing Choice. Scenarios 2A/2B below are therefore relevant only where Billing Choice external-link enrollment is actually active for that storefront.

## 1. Current API baseline

The current TycoonX Billing Choice baseline is Play Billing Library 9.1 or higher, subject to re-check before production release.

PBL 9.1.0 introduced or exposes the Billing Choice integration building blocks used by the current guide, including:

- `BillingProgram.BILLING_CHOICE`;
- `EnableBillingProgramParams` and `enableBillingProgram(...)`;
- `isBillingProgramAvailableAsync(...)` / the Kotlin availability wrapper;
- `BillingProgramAvailabilityDetails.BillingChoiceAvailabilityDetails`;
- `ChoiceScreenType.GOOGLE_RENDERED` and `ChoiceScreenType.DEVELOPER_RENDERED`;
- `BillingClient.getBillingChoiceInfoAsync()` / `getBillingChoiceInfo()`;
- `GetBillingChoiceInfoParams` and `BillingChoiceInfo`;
- `BillingClient.showBillingProgramInformationDialog()`;
- `BillingProgramInformationDialogParams`;
- `BillingProgramReportingDetailsParams` and `createBillingProgramReportingDetailsAsync(...)` / Kotlin equivalent;
- `DeveloperBillingType.IN_APP` and `DeveloperBillingType.EXTERNAL_LINK`;
- `DeveloperBillingOptionParams` and `BillingFlowParams.Builder.enableDeveloperBillingOption(...)`;
- `DeveloperProvidedBillingListener` only in the Google-rendered scenarios that require it;
- `launchBillingFlow(...)`; and
- `launchExternalLink(...)` with `LaunchExternalLinkParams` for the developer-rendered external-link scenario.

Do not build a new implementation around an obsolete alternative-billing or external-offer API merely because an old sample still compiles.

## 2. Availability is runtime state, not a country guess

For a storefront actually routed to Billing Choice:

1. enable `BillingProgram.BILLING_CHOICE` when constructing `BillingClient`;
2. connect to the Play Billing service;
3. call the current billing-program availability API; and
4. inspect `billingChoiceAvailabilityDetails.choiceScreenType` before selecting an implementation path.

Where an external web link is intended, also verify `isExternalLinkAvailable` for the current user. Do not assume every Billing Choice user can be linked to Xsolla.

If Google returns unavailable, an error, a disconnected service, null/inconsistent availability details, the wrong `ChoiceScreenType`, or a market governed by another Google program, do not fake a choice screen or silently redirect to Xsolla.

## 3. Lock the exact scenario before rendering UI

Google's current Billing Choice integration guide defines four scenarios:

| Scenario | Choice screen | Alternative payment location |
| --- | --- | --- |
| 1A | Google-rendered | in-app |
| 1B | developer-rendered | in-app |
| 2A | Google-rendered | external web link |
| 2B | developer-rendered | external web link |

TycoonX must record which scenario it actually ships **and the market/program row that authorizes it**. Do not splice steps from different scenarios into the same purchase attempt.

### Scenario 1A: Google-rendered choice, alternative billing in-app

- Construct Billing Choice with the required `DeveloperProvidedBillingListener`.
- Verify `ChoiceScreenType.GOOGLE_RENDERED` before launching the product flow.
- Use `DeveloperBillingOptionParams` with `BillingProgram.BILLING_CHOICE` when enabling the developer billing option in `launchBillingFlow(...)`.
- If the user selects Google Play Billing, use the normal Play purchase path.
- If the user selects alternative billing, obtain the `externalTransactionToken` from `DeveloperProvidedBillingDetails` and use it only for the corresponding external-transaction reporting flow.
- Do not interpret the listener callback as payment success.

### Scenario 1B: developer-rendered choice, alternative billing in-app

This scenario has additional UI duties and must not be implemented as a home-made copy of the Google-rendered screen.

- Construct Billing Choice **without `DeveloperProvidedBillingListener`** for this developer-rendered scenario.
- Require `ChoiceScreenType.DEVELOPER_RENDERED`. If Google returns another screen type, do not show the custom choice UI.
- Call `getBillingChoiceInfoAsync(...)` / `getBillingChoiceInfo(...)` with `GetBillingChoiceInfoParams` before rendering the choice.
- Use the current `playBillingChoiceImageUrl` supplied through `BillingChoiceInfo` for the Google Play Billing banner, using the supported image layout such as `GetBillingChoiceInfoParams.ImageLayout.RECTANGULAR_FOUR_BY_ONE` where that is the selected current layout.
- Render `playBillingLoyaltyInfo` when Google supplies it. Do not invent, translate, shorten, rewrite, or permanently hard-code Google loyalty wording in place of the current returned value.
- Do not ship a stale local screenshot or custom imitation of Google's Play Billing banner as a substitute for the current Billing Choice information returned by Play.
- If the Billing Choice information request fails or required returned data cannot be rendered correctly, fail closed to another lawful available path instead of showing an incomplete or misleading developer-rendered choice screen.
- When the user shows intent to buy, create reporting details with `DeveloperBillingType.IN_APP` and persist the returned `externalTransactionToken`.
- Call `showBillingProgramInformationDialog(...)` with the current billing program and transaction token before presenting the developer-rendered choice screen.
- **Launch the custom choice screen only when the information-dialog result is `OK`.** A dismissal, error, parental-control block, service failure, or other non-OK result must not fall through to the alternative checkout.
- If the user chooses Play Billing, call the standard `launchBillingFlow(...)` path. If the user chooses alternative billing, CK-Labs handles the transaction and reports it using the token created for that attempt.

### Scenario 2A: Google-rendered choice, external web link

Use this only where Billing Choice external links are the enrolled market route, not as the EEA EOP or US External Content Links implementation.

- Construct the Google-rendered scenario with the required `DeveloperProvidedBillingListener`.
- Require `ChoiceScreenType.GOOGLE_RENDERED` and `isExternalLinkAvailable == true`.
- Create reporting details using `DeveloperBillingType.EXTERNAL_LINK` and preserve the returned `externalTransactionToken`.
- Pass the current token and approved destination through `DeveloperBillingOptionParams` as required by the current Play flow.
- Let the Play API control the external-link handoff; do not pre-empt it with an arbitrary browser `Intent`.
- Treat the Play callback as permission/navigation state, not proof that Xsolla completed a payment.

### Scenario 2B: developer-rendered choice, external web link

Use this only where Billing Choice external links are the enrolled market route.

- Construct Billing Choice **without `DeveloperProvidedBillingListener`** for this developer-rendered scenario.
- Require `ChoiceScreenType.DEVELOPER_RENDERED` and `isExternalLinkAvailable == true` before showing the custom choice UI.
- Call `getBillingChoiceInfoAsync(...)` / `getBillingChoiceInfo(...)` and populate the developer-rendered UI with the current Google Play Billing banner and `playBillingLoyaltyInfo` in the same manner as scenario 1B.
- Do not hard-code or imitate Google-supplied Billing Choice branding/loyalty content.
- Create reporting details with `DeveloperBillingType.EXTERNAL_LINK` and persist the `externalTransactionToken` for that purchase attempt.
- Do not blindly import the scenario 1B information-dialog sequence into scenario 2B if the then-current Google guide uses a different prescribed flow. Follow the current 2B sequence exactly.
- If the user chooses Play Billing, use the standard Play billing flow.
- If the user chooses the external option, call `launchExternalLink(...)` with `LaunchExternalLinkParams`, the correct billing program, current transaction token, approved destination URI, link type and launch mode.
- Continue to Xsolla only when the Play API returns the current successful launch result. The launch result still is not payment confirmation.
- Preserve the Google-controlled parental/supervised-user behavior in the external-link launch and never bypass a blocked result with a direct browser redirect.

## 4. Developer-rendered UI integrity

For scenarios 1B and 2B, the developer-rendered screen is part of the regulated Play billing choice flow, not ordinary TycoonX marketing UI.

Release blockers:

- `getBillingChoiceInfoAsync` / `getBillingChoiceInfo` is never called;
- the returned Play Billing banner is omitted, replaced with a stale local asset, or materially obscured;
- Google loyalty information is available but hidden, rewritten, or replaced with TycoonX-created claims about Play benefits;
- the UI is rendered before Play confirms `ChoiceScreenType.DEVELOPER_RENDERED`;
- scenario 1B reaches the custom choice screen after a non-OK `showBillingProgramInformationDialog` result;
- Play Billing is made visually deceptive or practically unusable compared with the alternative option where the applicable Billing Choice rules require a genuine choice; or
- a supervised-user/parental-control denial is converted into a direct Xsolla browser launch.

Keep dated screenshots/video from a real eligible Play test account for each developer-rendered scenario actually shipped.

## 5. Token lifecycle and Xsolla handoff

The Google `externalTransactionToken` is transaction/reporting context. It is not payment proof and it is not a TycoonX entitlement.

For every Billing Choice -> Xsolla attempt:

- bind the token to one TycoonX order attempt and expected product/SKU server-side;
- store the Google program, storefront, scenario, `DeveloperBillingType`, TycoonX order/account reference, and Xsolla transaction reference when one exists;
- never reuse one token for another player, another product, or another order attempt;
- preserve the token across recoverable process death and browser/app transitions;
- treat browser return/deep-link events as navigation evidence only;
- grant Diamonds/VIP only after authoritative provider payment confirmation; and
- make entitlement delivery and Google reporting idempotent.

If the Xsolla transaction is pending, failed, canceled, reversed, refunded, or disputed, do not reinterpret a successful Play callback as a completed purchase.

## 6. Reporting deadline and retry safety

Google's current Billing Choice enrollment requirements require authorized Billing Choice transactions to be reported to Google Play within the current 24-hour deadline. The EEA External Offers Program separately has its own 24-hour reporting requirement. Keep those reporting queues program-labelled.

Operational rules:

- enqueue the Google report as soon as authoritative payment completion is known;
- retry transient failures without a second TycoonX entitlement or duplicate external transaction;
- alert before the deadline is at risk rather than relying on a once-per-day batch;
- preserve reporting success/failure and the relevant external transaction identifiers;
- reconcile refunds, reversals and chargebacks against the same payment/reporting identifiers; and
- never delay reporting for promotion timing, accounting close, support review, or a chargeback-risk window.

A Google reporting outage is not permission to fabricate a successful report.

## 7. Service-fee and price safeguards

Current Play fee schedules can distinguish market, program, install cohort, transaction type and optional program participation. Treat published percentages as dated accounting inputs only.

TycoonX must not:

- infer CK-Labs's fee tier from player behavior, VIP status or a local guess;
- describe a Google service fee as a government tax or Xsolla fee;
- change a completed user's Diamonds/VIP because Google later invoices CK-Labs differently than expected; or
- retroactively reprice a completed purchase because a service-fee table changes.

Before setting future regional prices, reconcile gross price, mandatory taxes/VAT, Xsolla/payment costs, refunds/chargebacks and the then-current applicable Google fee.

## 8. Product-specific TycoonX protections

### Diamonds

A successful Play choice, token creation, information dialog, external-link launch or reporting call must never itself grant Diamonds. Grant the purchased quantity exactly once only after authoritative payment confirmation. Purchased Diamonds do not expire solely because time passes. Refund/reversal correction remains limited to affected paid value subject to mandatory law.

### One-time 30-Day VIP

30-Day VIP is a one-time, non-renewing 30-day entitlement. Billing Choice or an external-link callback must not turn it into a subscription, restart its clock, or duplicate paid time unless a separate valid purchase actually occurred.

### Lifetime VIP

Lifetime VIP is a limited-time promotional one-time entitlement offered only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability. A failed Billing Choice/Xsolla path, a later sales window, or a later price difference does not alter a previously completed valid Lifetime VIP entitlement.

## 9. Future recurring products are a separate launch gate

TycoonX does not currently treat 30-Day VIP or Lifetime VIP as auto-renewing subscriptions.

If CK-Labs later introduces a recurring subscription, reopen `TYCOONX_FUTURE_RECURRING_SUBSCRIPTION_RELEASE_GATE.md`, implement Google's then-current subscription replacement/original-external-transaction rules, and update canonical/localized legal wording if the public contract changes.

## 10. PBL migration hazards and regression tests

Before shipping, test at minimum:

- wrong-market routing: an EEA external-link attempt must not fall into Billing Choice 2A/2B when EOP governs it;
- wrong-program retry: an EOP report must not be retried as Billing Choice;
- wrong `ChoiceScreenType`: custom UI must not appear for `GOOGLE_RENDERED`, and Google-rendered logic must not be faked when Play returns `DEVELOPER_RENDERED`;
- scenario 1B and 2B BillingClient construction without `DeveloperProvidedBillingListener`;
- developer-rendered `getBillingChoiceInfoAsync` success and failure paths;
- Play Billing banner loading failure and loyalty-info-present / loyalty-info-absent cases;
- scenario 1B information dialog `OK`, dismissal, error and supervised-user/parental-control denial;
- `createBillingProgramReportingDetails` failure before alternative checkout;
- external-link unavailable even though Billing Choice itself is available;
- `DeveloperProvidedBillingDetails.getLinkUri()` being `null` or empty where the current PBL API permits it;
- `BILLING_UNAVAILABLE`, service-disconnected, network-error, user-canceled and developer-error paths;
- process death after token generation but before Xsolla completion;
- browser close without payment;
- Xsolla success while the app is killed;
- duplicate provider callbacks and Google-reporting retries;
- refund/reversal after Diamonds were consumed or VIP activated; and
- a user switching Play accounts/devices between attempts.

PBL 9 migration explicitly made `DeveloperProvidedBillingDetails.getLinkUri()` nullable. Do not parse or launch a browser from a null/empty link URI. Do not grant value merely because `launchBillingFlow(...)`, `launchExternalLink(...)`, or an information dialog returned `OK`.

## 11. Evidence required before production steering

Keep a dated evidence packet containing at minimum:

- Android app version/build and Play Billing Library version;
- market -> Google program -> payment-mode decision table for EEA, UK and US;
- Play Console enrollment evidence for the exact programs actually used;
- the shipped scenario (1A/1B/2A/2B) only for markets routed to Billing Choice;
- `ChoiceScreenType` and external-link availability evidence;
- for developer-rendered scenarios, evidence that current `BillingChoiceInfo` populated the Play Billing banner and loyalty field where supplied;
- scenario 1B evidence that the custom choice screen is shown only after an `OK` billing-program information dialog;
- supervised-user/parental-control test evidence;
- a sample `externalTransactionToken` lifecycle with sensitive data redacted;
- TycoonX order <-> Google program/token/report <-> Xsolla transaction <-> entitlement-ledger mapping;
- successful Diamond, 30-Day VIP and any currently sold Lifetime VIP test cases;
- failed/pending/canceled return tests proving no entitlement is granted;
- duplicate callback/report tests proving idempotency;
- a completed authorized external transaction reported within the current deadline; and
- refund/reversal/chargeback reconciliation preserving unrelated legitimate purchases.

## 12. No legal shortcut through platform configuration

Google Billing Choice, EEA External Offers, US Alternative Billing and US External Content Links determine what the Play-distributed Android app may do and what must be reported to Google. None waives CK-Labs's separate legal duties.

Where applicable, the TycoonX/Xsolla purchase still must satisfy consumer-law requirements including clear final price/tax presentation, lawful promotions, German order-button rules, applicable withdrawal/conformity remedies and any applicable cancellation-button requirement. Xsolla's transaction-specific merchant/payment role also does not authorize entitlement delivery before valid payment confirmation or override mandatory rights.

## 13. Manual verification

Run locally:

```bash
node scripts/verify-tycoonx-google-play-billing-choice-pbl91.mjs
node scripts/verify-tycoonx-google-refunds.mjs
node scripts/verify-tycoonx-legal.mjs
```

Then manually re-check Google's current Billing Choice integration guide, Billing Library release/migration notes, Play Console Billing Choice enrollment, EEA External Offers, US External Content Links and current service-fee documentation before any production steering change.

## Source checkpoints

Current official sources rechecked on September 5, 2026:

- Android Developers: **In-app integration guidance for billing choice**, including scenarios 1A, 1B, 2A and 2B; `ChoiceScreenType`; `getBillingChoiceInfoAsync`; Play Billing banner and loyalty information; reporting-token creation; scenario 1B information dialog; `launchBillingFlow`; `launchExternalLink`; and supervised-user parental control.
- Android Developers: **Migrate to Google Play Billing Library 9 from 7 or 8**, including the nullable `DeveloperProvidedBillingDetails.getLinkUri()` migration requirement.
- Play Console Help: **Enrolling in the Billing Choice program**, including current eligible market/program routing, user choice, customer-support obligations, fees and the 24-hour external-transaction reporting requirement.
- `TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md` for the wider EEA/UK/US/AU/JP rollout, service-fee, RTDN/refund and chargeback controls.
