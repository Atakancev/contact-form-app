# TycoonX Google Play Billing Choice PBL 9.1 Implementation Gate

Last reviewed: September 3, 2026

This is a narrow Android implementation companion to `TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md`. It exists because Google materially refreshed its Billing Choice integration guidance on September 2, 2026. It does not create a new TycoonX product or payment channel and does not replace Google Play program terms, the public TycoonX Terms of Service, the Purchases & Refunds Policy, or mandatory consumer law.

TycoonX went to full release on September 1, 2026. Do not describe this live payment flow, Diamonds, VIP, users, rewards, or the current service as beta.

## P0 rule

Do not expose a Google Play -> Xsolla Billing Choice path merely because a browser can be opened.

A production path is allowed only when all of the following are true for the actual user/storefront:

1. CK-Labs/TycoonX is enrolled in the applicable Google Play program for that market.
2. The current Play Billing integration reports Billing Choice as available for that user.
3. The app uses the current Billing Choice APIs and the correct Google-rendered or developer-rendered scenario.
4. Required Google information/choice/parental-control UI is not bypassed.
5. The external transaction token survives app -> browser -> Xsolla -> backend reconciliation without being duplicated or reassigned.
6. Every reportable authorized external transaction is reported to Google within the applicable current deadline.
7. The TycoonX entitlement ledger grants value only after authoritative payment confirmation and remains idempotent across retries.

If any of those facts is unknown, fall back to a lawful available payment path rather than guessing.

## 1. Current API baseline

The broader transition gate currently requires Play Billing Library 9.1 or higher for Billing Choice. Before every Android production release, re-check Google's current minimum/version requirement rather than freezing that number forever.

PBL 9.1.0 was released on June 18, 2026 and added Billing Choice APIs including:

- `BillingClient.getBillingChoiceInfoAsync()` / `getBillingChoiceInfo()`;
- `BillingChoiceInfo` and `GetBillingChoiceInfoParams`;
- `BillingClient.showBillingProgramInformationDialog()`;
- `BillingProgramInformationDialogParams`;
- `BillingProgramAvailabilityDetails.BillingChoiceAvailabilityDetails`; and
- `ChoiceScreenType`.

The September 2, 2026 Billing Choice integration guide also uses the unified billing-program APIs, including:

- `EnableBillingProgramParams`;
- `BillingProgram.BILLING_CHOICE`;
- `BillingClient.Builder.enableBillingProgram(...)`;
- `isBillingProgramAvailableAsync(...)` / the Kotlin availability wrapper;
- `BillingProgramReportingDetailsParams`;
- `createBillingProgramReportingDetailsAsync(...)` / the Kotlin reporting-details wrapper;
- `DeveloperBillingOptionParams`;
- `BillingFlowParams.Builder.enableDeveloperBillingOption(...)`;
- `DeveloperProvidedBillingListener` where the Google-rendered scenario requires it;
- `launchBillingFlow(...)` where the selected scenario uses the Play billing flow; and
- `launchExternalLink(...)` with `LaunchExternalLinkParams` for the developer-rendered external-link scenario.

Do not build a new Billing Choice implementation around an obsolete alternative-billing/external-offer API merely because an old blog post, sample, or cached implementation still compiles. Google has deprecated or removed multiple older APIs across recent PBL releases. Keep the exact APIs aligned with the current program and current PBL version.

## 2. Availability is runtime state, not a country guess

Do not decide that Billing Choice is available merely because:

- the device language is German, English, or another supported language;
- the profile country says Germany/EEA/UK;
- an IP appears to be in an eligible market;
- the user previously saw Billing Choice on another device; or
- CK-Labs has enrolled TycoonX somewhere in Play Console.

For the current integration, enable `BillingProgram.BILLING_CHOICE` on the `BillingClient`, establish the Billing service connection, and use the current billing-program availability API before exposing the flow.

Inspect `BillingProgramAvailabilityDetails.billingChoiceAvailabilityDetails` and its `ChoiceScreenType`. Where external web linking is intended, also verify the current external-link availability signal rather than assuming every Billing Choice user can be sent to Xsolla.

If Google returns unavailable, an error, a disconnected service, a blocked Play Store, or inconsistent details, do not fake a choice screen or silently redirect to Xsolla.

## 3. Lock the exact scenario before rendering UI

Google's September 2 guide describes four Billing Choice integration scenarios:

| Scenario | Choice screen | Alternative payment location |
| --- | --- | --- |
| 1A | Google-rendered | in-app |
| 1B | developer-rendered | in-app |
| 2A | Google-rendered | external web link |
| 2B | developer-rendered | external web link |

TycoonX must record which scenario it actually ships. Do not mix implementation steps from different rows in one purchase attempt.

### Scenario 1A: Google-rendered, alternative billing in-app

- Enable Billing Choice with `EnableBillingProgramParams` and the required `DeveloperProvidedBillingListener`.
- Verify `ChoiceScreenType.GOOGLE_RENDERED` before launching the product flow.
- Use `DeveloperBillingOptionParams` with `BillingProgram.BILLING_CHOICE` when enabling the developer billing option in the billing flow.
- If the user selects Google Play Billing, process the normal Play purchase path.
- If the user selects the alternative option, obtain the `externalTransactionToken` from the developer-provided-billing callback and use it for the required reporting flow.

### Scenario 1B: developer-rendered, alternative billing in-app

- Enable Billing Choice without pretending Google rendered the choice screen.
- Verify the developer-rendered choice-screen availability returned by Google.
- Create billing-program reporting details with `DeveloperBillingType.IN_APP` and persist the returned `externalTransactionToken` before the alternative transaction.
- Show Google's required billing-program information dialog before presenting the developer-rendered alternative choice experience where the current guide requires it.
- Do not proceed to the custom choice UI if Google's information-dialog call fails.

### Scenario 2A: Google-rendered, external web link

This is a likely TycoonX -> Xsolla architecture if Google renders the choice screen.

- Verify both Google-rendered Billing Choice and external-link availability.
- Create reporting details using `DeveloperBillingType.EXTERNAL_LINK` and preserve the returned `externalTransactionToken`.
- Pass the current token and Xsolla/CK-Labs destination through `DeveloperBillingOptionParams` as required by the current API flow.
- Use the launch mode required by Google's current guidance rather than manually opening a browser before Google completes its Billing Choice flow.
- Treat the callback as permission to continue the external payment journey, not as proof that an Xsolla payment completed.

### Scenario 2B: developer-rendered, external web link

This is a likely TycoonX -> Xsolla architecture if CK-Labs renders the choice screen.

- Verify the developer-rendered Billing Choice and external-link availability.
- Create reporting details with `DeveloperBillingType.EXTERNAL_LINK` and persist the `externalTransactionToken`.
- Show Google's required information dialog before the developer-rendered choice UI when required by the current flow.
- If the user chooses the external option, call `launchExternalLink(...)` with `LaunchExternalLinkParams`, the correct billing program, current external transaction token, approved destination URI, link type, and launch mode.
- Continue to Xsolla only after the Play API indicates that the external-link launch may proceed.

## 4. Supervised users and parental controls

Google's current Billing Choice integration guidance states that parental control is displayed for supervised users in the relevant flows.

TycoonX must not:

- suppress the Google information/parental-control UI;
- treat an external browser as a way around a supervised-user restriction;
- silently fall back to a direct Xsolla URL if the Play-controlled step is blocked;
- infer adulthood merely because the user has a TycoonX account, VIP, or previous purchase; or
- store extra age/child data just to recreate controls Google already supplies.

If the required Play flow refuses the transaction, preserve the user's existing legitimate Diamonds and VIP and return a clear non-punitive failure state.

## 5. Token lifecycle and Xsolla handoff

The Google `externalTransactionToken` is transaction/reporting context. It is not payment proof and it is not a TycoonX entitlement.

For every Billing Choice -> Xsolla attempt:

- bind the token to a single TycoonX order attempt and expected product/SKU server-side;
- record the applicable Google program, storefront/market, Billing Choice scenario, `DeveloperBillingType`, TycoonX account/order ID, and Xsolla transaction reference when one exists;
- prevent one token from being reused to report unrelated orders or another player's purchase;
- preserve the token across app/browser/provider transitions and recoverable process death;
- do not expose account credentials, payment credentials, session secrets, or unnecessary personal data in the external URL;
- treat a browser return/deep link as navigation evidence, not as authoritative payment confirmation;
- grant Diamonds/VIP only after authoritative payment confirmation is validated; and
- make both entitlement delivery and Google reporting idempotent.

If the Xsolla transaction is `PENDING`, failed, canceled, reversed, refunded, or disputed, do not reinterpret a successful Play linkout callback as a completed purchase.

## 6. Reporting deadline and retry safety

Google's current Billing Choice enrollment requirements state that authorized transactions must be reported to Google Play within 24 hours using the Billing Choice APIs.

Operationally:

- enqueue the Google report as soon as authoritative payment completion is known;
- retry transient failures without creating a second TycoonX entitlement or duplicate external transaction record;
- alert before the 24-hour deadline is at risk rather than relying on a once-per-day batch;
- preserve evidence of reporting success/failure and the external transaction ID returned/used by the backend reporting flow;
- reconcile later refunds, reversals and chargebacks against the same payment/reporting identifiers; and
- never delay reporting to wait for a promotion, accounting close, support response, or chargeback-risk window.

A Google reporting outage does not authorize CK-Labs to fabricate a successful report. Preserve the original transaction facts, retry lawfully, and follow Google's current incident/program instructions.

## 7. Product-specific TycoonX protections

### Diamonds

A successful report or linkout must never itself grant Diamonds. The entitlement service must validate the actual completed purchase and grant the purchased Diamond quantity exactly once. A later refund/reversal/chargeback may justify correcting only the affected paid value, subject to mandatory law and the canonical TycoonX policies.

### One-time 30-Day VIP

30-Day VIP is a one-time, non-renewing 30-day entitlement. Billing Choice must not transform it into a recurring subscription, restart its clock on app relaunch, or stack duplicate callbacks into extra paid time unless the user actually completed an additional valid purchase whose product rules allow it.

### Lifetime VIP

Lifetime VIP is a limited-time promotional one-time entitlement offered only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability.

Billing Choice availability, a failed linkout, a Play/Xsolla outage, a later sales window, or a later price difference does not change a previously completed valid Lifetime VIP entitlement. Completed purchases are not retroactively repriced except where mandatory law requires otherwise.

## 8. Future recurring products are a separate launch gate

TycoonX does not currently treat 30-Day VIP or Lifetime VIP as an auto-renewing subscription.

Google's current Billing Choice guide contains separate subscription-replacement rules, including preserving the original billing choice and using the original external transaction ID for applicable alternative-billing subscription upgrades/downgrades.

Do not copy those rules onto the current one-time VIP products. If CK-Labs later introduces a recurring subscription:

- reopen `TYCOONX_FUTURE_RECURRING_SUBSCRIPTION_RELEASE_GATE.md`;
- implement the current Google subscription replacement flow, including `setOriginalExternalTransactionId(...)` where applicable;
- add compliant renewal/price-change/cancellation disclosures and consent handling; and
- update canonical and localized legal wording if the public contract changes.

## 9. PBL migration hazards

Before shipping the Billing Choice build, explicitly test:

- `DeveloperProvidedBillingDetails.getLinkUri()` being `null` or empty where the current API permits it;
- `BILLING_UNAVAILABLE`, service-disconnected, network-error, user-canceled and developer-error paths;
- process death after a token is generated but before Xsolla completes;
- browser close without payment;
- Xsolla payment success while the app is killed;
- duplicate provider callbacks;
- Google-reporting retry after entitlement delivery;
- refund/reversal after Diamonds were consumed or VIP was activated;
- supervised-user denial/parental-control paths; and
- a user switching Play accounts/devices between attempts.

Do not parse a nullable link URI before validating it. Do not grant value merely because `launchBillingFlow(...)` or `launchExternalLink(...)` returned `OK`.

## 10. Evidence required before production steering

Keep a dated evidence packet containing at minimum:

- Android app version/build and Play Billing Library version;
- Play Console Billing Choice enrollment markets;
- the exact shipped scenario (1A, 1B, 2A, or 2B);
- screenshots/video of the Google/developer choice flow and supervised-user path;
- evidence of runtime Billing Choice and external-link availability checks;
- a sample `externalTransactionToken` lifecycle with secrets/redactions as appropriate;
- TycoonX order ID <-> Google token/report <-> Xsolla transaction <-> entitlement ledger mapping;
- successful Diamond, 30-Day VIP, and any currently sold Lifetime VIP test cases;
- failed/pending/canceled browser-return tests proving no entitlement is granted;
- duplicate callback/report tests proving idempotency;
- a completed authorized external transaction reported within 24 hours;
- refund/reversal/chargeback reconciliation preserving unrelated legitimate purchases; and
- current official Google documentation snapshots/links used for the release decision.

## 11. No legal shortcut through platform configuration

Google's Billing Choice program determines what the Play-distributed Android app may do and what must be reported to Google. It does not waive CK-Labs's separate legal duties.

Where applicable, the TycoonX/Xsolla web purchase must still satisfy the relevant consumer-law requirements, including clear final price/tax presentation, lawful promotional claims, German order-button rules, applicable withdrawal/conformity remedies, and any applicable cancellation-button requirement. Xsolla's Merchant-of-Record role also does not authorize TycoonX to grant entitlements before valid payment confirmation or to ignore provider-specific refund/reversal records.

## 12. Manual verification

Run:

```bash
node scripts/verify-tycoonx-google-play-billing-choice-pbl91.mjs
node scripts/verify-tycoonx-google-refunds.mjs
node scripts/verify-tycoonx-legal.mjs
```

Then manually re-check Google's current Billing Choice integration and Play Console enrollment documentation. Google program availability, APIs, rollout dates, service fees, and reporting rules can change independently of TycoonX legal prose.

## Source checkpoints

Re-check the live official sources before production changes:

- Android Developers: Billing Choice in-app integration guidance, last updated September 2, 2026 at this review.
- Android Developers: Google Play Billing Library release notes, including PBL 9.1.0 (June 18, 2026).
- Google Play Console Help: Billing Choice enrollment, market availability, service-fee and 24-hour reporting requirements.
- `TYCOONX_GOOGLE_PLAY_2026_PAYMENT_TRANSITION_GATE.md` for the wider EEA/UK/US/JP/AU rollout, external-offers, service-fee, RTDN/refund and chargeback controls.
