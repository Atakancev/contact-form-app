# TycoonX Google Play 2026 Payment Transition Gate

Last reviewed: August 30, 2026

This is an operational/commercial release gate for the Google Play build of TycoonX. It complements the public TycoonX Terms of Service and Purchases & Refunds Policy. It does not replace Google Play program terms, mandatory law, or transaction-specific Xsolla/Google obligations.

## Why this gate exists

Google Play materially changed its payment-program and service-fee framework during 2026. The official TycoonX webshop using Xsolla must not be treated as a globally linkable, zero-reporting alternative to Google Play Billing.

TycoonX must determine, per user/storefront and per payment flow, whether the transaction is:

- a normal Google Play Billing purchase;
- an eligible alternative-billing purchase inside the app;
- an eligible external-web-link purchase after a Google-approved external link flow; or
- a purchase that must not be promoted from the Play-distributed app in that market.

## P0 before enabling any Google Play -> Xsolla purchase path

### 1. Program enrollment and market eligibility

- Do not show an Xsolla purchase button, external web link, or alternative in-app billing flow merely because the webshop exists.
- Verify that the user is in a market covered by the applicable Google Play program and that CK-Labs/TycoonX is enrolled for that exact program and market.
- Keep Play Console enrollment state, app behavior, backend reporting, customer support, and public legal wording aligned.
- If Google requires user choice between Google Play Billing and an alternative method, do not suppress or visually disadvantage the required Google Play option.

### 1A. Billing Choice versus EEA External Offers: do not mix program rules

Google currently exposes multiple monetization-outside-Play programs with materially different requirements. A generic "external checkout" flag is not enough to decide what TycoonX may show.

**Billing Choice program:**

- Use it only where CK-Labs/TycoonX is enrolled and the user/storefront is eligible for that program.
- Google currently requires Play Billing Library **9.1 or higher** for Billing Choice.
- If external web links are enabled through Billing Choice, update the choice-screen preference and external-web-links preference in Play Console before implementing the flow.
- Billing Choice requires the user to be given a choice between Google Play Billing and either the approved alternative in-app billing option or the approved external web-link option. Do not remove Google Play Billing from a Billing Choice screen.
- If CK-Labs renders its own choice screen, follow Google's current UX requirements and invoke the Play Billing APIs needed for the mandatory information/parental-control flow. For Google-rendered choice screens, verify that the Google-provided flow is actually used rather than imitating it with custom UI.
- Supervised users must receive the mandatory parental controls and information screens required by Google. Do not bypass those controls merely because the destination is the TycoonX webshop.
- Every alternative Billing Choice transaction, including an external-link transaction, must be securely reported to Google using the required external transaction token and the correct `DeveloperBillingType` classification.

**EEA External Offers Program:**

- Treat this as a distinct program rather than as another name for Billing Choice.
- Current Google eligibility states that the app may be an app or game, must not target only children, the developer must be registered as a business, and external offers must be limited to EEA users. Verify CK-Labs/TycoonX satisfies those conditions before relying on this route.
- Current Google program requirements state that an enrolled Play-managed app using this EEA External Offers Program is eligible for alternative billing without user choice for in-app purchases and may **not** simultaneously use Google Play Billing or user choice billing under that program. Do not combine mutually incompatible program modes on the same storefront merely because both can eventually reach Xsolla.
- Use Google's current external-offers APIs so Google can surface the required information screen and user protections. Do not replace those APIs with a plain browser URL.
- Provide direct customer support for external transactions, including a process to dispute unauthorized transactions and an appropriate refund route. A checkout statement that something is "non-refundable" must never be treated as overriding a mandatory EU/EEA withdrawal, conformity, refund, price-reduction, or other non-waivable consumer right.
- Inform the user in-app about the destination and purpose before linking out. Do not place unsecured personally identifiable information in the external URL, and do not redirect or mislead the user to a materially different destination from the one presented.
- Google currently requires applicable authorized External Offers transactions to be reported within **24 hours of the external transaction**. Treat this as an operational deadline with retry/idempotency monitoring, not a best-effort batch job.
- Keep Play Store listing metadata free of off-Play purchase promotion where the applicable External Offers program rules prohibit it.

**Release rule:** maintain a storefront/program decision table showing, at minimum, market, enrolled Google program, whether Google Play Billing is shown, whether alternative in-app billing is allowed, whether an external web link is allowed, required Play Billing Library/API version, parental-control behavior, reporting API/token type, reporting deadline, and customer-support/refund owner. If the row is unknown or conflicting, do not expose the Xsolla steering flow for that storefront.

### 2. June 30, 2026 new-install / existing-install cohort

For the EEA, UK, and US, Google states that the service-fee treatment for relevant transactions starting June 30, 2026 depends on whether the transacting user's install is new or existing.

Current Google definitions:

- New install: the user's first-time install or first update of TycoonX from Google Play occurred on or after June 30, 2026.
- Existing install: the user's first-time install or first update of TycoonX from Google Play occurred before June 30, 2026.

Operational rules:

- Do not infer this cohort from TycoonX account creation date, signup date, device age, first purchase date, or Xsolla customer creation date.
- Preserve the Google reporting/attribution data required to let Google apply the correct cohort treatment.
- Do not hard-code one Google service-fee percentage into TycoonX finance logic. The applicable fee can depend on market, program, product type, annual earnings tier, program participation, payment path, and install cohort.

### 3. United States external content links: October 1, 2026 reporting/fee start

Google's current US external content links program states that, following its July 22, 2026 update, enrolled developers must report qualifying transactions and successful downloads and pay the relevant Google Play service fee starting October 1, 2026.

Before October 1, 2026, if TycoonX intends to use a Play-distributed US app to link users to Xsolla for in-app digital items:

- confirm the app is enrolled in the correct US external content links program;
- implement the current Google external-link APIs rather than opening an arbitrary checkout URL;
- create and preserve the Google reporting token/transaction context required for each qualifying linkout;
- report the qualifying Xsolla transaction through Google's required external-transaction path;
- reconcile cancellations, refunds, reversals, chargebacks, and invalid transactions against both the Xsolla transaction and the Google external-transaction record;
- preserve evidence that the linkout and later transaction belong to the same reportable flow; and
- include Google service fees in commercial margin calculations rather than treating Xsolla gross receipts as CK-Labs net revenue.

### 4. 24-hour external-link attribution window

Google currently states that relevant service-fee treatment can apply when a user completes a transaction within 24 hours after following an eligible external web/content link.

TycoonX must therefore:

- preserve the Google-provided external-link/reporting context across browser/app transitions;
- not reset attribution merely because the user closes and reopens TycoonX;
- not deliberately route through extra redirects, accounts, domains, or checkout sessions to evade attribution or reporting;
- reconcile multiple purchases made from the same linkout according to the applicable Google program rules; and
- keep enough audit data to explain why a transaction was or was not reported if Google or CK-Labs finance reconciliation flags a discrepancy.

### 5. External transaction backend authority

Google's current backend guidance says developers integrating alternative billing or external-offer APIs should use the Externaltransactions APIs to report and manage completed transactions.

For TycoonX:

- Xsolla payment success remains the payment-provider authority for the Xsolla charge itself;
- TycoonX server state remains the entitlement-delivery authority for Diamonds/VIP after valid payment confirmation;
- Google external-transaction state remains an additional reporting/commercial obligation where the Play program requires it;
- none of those records should silently overwrite the others;
- use stable cross-references between TycoonX order ID, Xsolla transaction ID, Google external transaction/reporting token, user/account ID, product ID, storefront, and entitlement ledger event;
- make reporting retries idempotent; and
- keep refunded/charged-back transactions reconcilable even after the user's TycoonX account is deleted, subject to privacy/retention law.

### 6. Service-fee margin protection

Google's current service-fee documentation for EEA/UK/US transactions starting June 30, 2026 distinguishes new and existing installs for non-recurring transactions and also provides separate treatment for external web links.

This is an internal commercial control, not player-facing legal copy:

- do not advertise an Xsolla price as cheaper solely because CK-Labs assumes Google takes no service fee;
- model gross price, VAT/tax, Xsolla/payment costs, refunds/chargebacks, and any applicable Google service fee before setting regional Diamond/VIP prices;
- keep price decisions independent of any attempt to manipulate install cohort or reporting status;
- if Google changes a fee, program, or market rule, update future pricing where commercially necessary without retroactively repricing already completed one-time purchases; and
- keep the public TycoonX price-change language aligned with the actual checkout behavior.

### 7. Upcoming regional rollout checkpoints

Google's current lower-service-fee timeline states:

- June 30, 2026: EEA, UK, and US rollout;
- September 30, 2026: Australia and Japan rollout;
- December 31, 2026: South Korea rollout;
- September 30, 2027: rest-of-world rollout.

Before each date:

- re-check Google Play's current program documentation rather than assuming today's details remain unchanged;
- re-check whether TycoonX is enrolled/eligible in that market;
- re-check external-link/alternative-billing API requirements;
- re-check reporting and service-fee treatment; and
- re-check whether the app UI or Play Console declarations must change.

For the September 30, 2026 Australia/Japan transition in particular, perform the recheck before enabling or expanding any Xsolla steering from the Play build in those markets.

### 8. Refunds, chargebacks, and entitlement corrections

A Google reportable external transaction and an Xsolla payment can change state independently in different systems.

TycoonX must:

- never let a Google reporting retry grant Diamonds or VIP;
- never let an Xsolla webhook retry duplicate the Google external-transaction report;
- remove/correct only the paid value tied to a refunded, reversed, charged-back, duplicated, fraudulent, or invalid transaction, subject to mandatory law;
- preserve unrelated legitimate purchases;
- keep negative-balance or equivalent-value corrections proportionate and tied to the invalid transaction; and
- maintain support evidence showing which provider handled the payment/refund and which system changed the TycoonX entitlement.

### 9. Google collaborative chargeback review: 24-hour operational deadline

Google's July 6, 2026 Developer API update introduced a collaborative chargeback-review flow. A `PendingRefundReviewNotification` can be sent when a chargeback requires developer review, and Google's `orders.reviewrefund` flow allows a response with the developer's refund preference and relevant usage evidence. Google states that the developer response window is 24 hours.

For TycoonX Google Play purchases:

- route `PendingRefundReviewNotification` events into an operational queue that is checked often enough to meet the 24-hour response window;
- fetch authoritative purchase/account usage state before responding;
- respond only with accurate evidence already lawfully held for fraud, security, entitlement, support, or transaction purposes;
- never fabricate IP, geography, consumption, login, gameplay, or entitlement evidence simply to oppose a chargeback;
- where Google permits it and the evidence supports it, include relevant purchase-use information such as whether Diamonds were consumed/transferred or whether VIP was activated and used;
- keep evidence proportionate and avoid sending unrelated private chat, support content, or other excessive personal data;
- record the Google review outcome and reconcile any later refund/reversal against the matching TycoonX entitlement;
- do not punish an account merely because a user initiated a good-faith payment dispute; enforcement should target fraud, abusive chargebacks, false claims, or retained refunded value only when supported by evidence and the TycoonX Terms; and
- if the 24-hour window cannot be met reliably, do not rely on the collaborative review process as the sole fraud-loss control.

### 10. App Review / Play review evidence

Maintain a short internal review packet containing:

- the Google Play programs/markets TycoonX is enrolled in;
- screenshots of the current Play Console enrollment state;
- the storefront/program decision table required above;
- the exact Android UI shown for Google Play Billing, alternative billing, and external web links;
- evidence of the Play Billing Library version and relevant Play Console choice/external-link preferences where Billing Choice is used;
- backend mapping fields for Google reporting token <-> Xsolla transaction <-> TycoonX entitlement;
- sample success, refund, chargeback, and duplicate-report reconciliations;
- evidence that applicable External Offers transactions are reported within the current program deadline;
- one sample supervised-user/parental-control path for any enabled alternative-payment program;
- one sample `PendingRefundReviewNotification` handling path if the collaborative review flow is enabled; and
- the current public TycoonX Terms/Purchases sections describing channel-specific payment responsibilities.

## Manual verification

Run the main local legal verifier:

```bash
node scripts/verify-tycoonx-legal.mjs
```

Before any Google Play -> Xsolla production launch, also manually verify the current official Google Play program pages because eligibility, fees, reporting, and rollout dates can change.
