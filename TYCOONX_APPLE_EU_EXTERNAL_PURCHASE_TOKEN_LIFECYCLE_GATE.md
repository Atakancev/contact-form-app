# TycoonX Apple EU External Purchase Token Lifecycle Gate

**Status:** release/payment operations gate  
**Reviewed against current Apple documentation:** September 3, 2026

TycoonX went to full release on **September 1, 2026**. This gate is an operational companion to `TYCOONX_APPLE_EU_OCTOBER_2026_TRANSITION_GATE.md`. It focuses narrowly on Apple StoreKit external-purchase token creation, account binding, reporting lineage, sandbox isolation, retries, and TycoonX entitlement safety for EU alternative-payment flows. It does not replace the canonical Terms of Service, Purchases & Refunds Policy, Privacy Policy, Apple Custom EULA, or mandatory consumer rights.

## 1. Why this gate exists

Apple's current `ExternalPurchaseCustomLink` documentation for EU apps requires more than simply opening an Xsolla page.

For the EU custom-link flow, the current StoreKit implementation requires the app to:

1. verify the relevant StoreKit external-purchase entitlement and region configuration;
2. check `canMakePayments` and `ExternalPurchaseCustomLink.isEligible` where applicable;
3. request the EU external-purchase token types **`ACQUISITION`** and **`SERVICES`** using `ExternalPurchaseCustomLink.token(for:)`;
4. request those tokens when the app launches and keep them current, including before a potential transaction;
5. associate the tokens promptly with the correct customer account on the server;
6. present Apple's required disclosure/notice flow after a deliberate customer action and before sending the user into the external purchase path; and
7. report the external-purchase tokens and associated transactions to Apple using the then-current required reporting route.

A normal browser link, a TycoonX-generated UUID, an Xsolla invoice ID, or a successful deep-link return is not a substitute for the Apple token flow where Apple requires it.

**Official Apple source:** https://developer.apple.com/documentation/storekit/external-purchase

**Current `token(for:)` reference:** https://developer.apple.com/documentation/storekit/externalpurchasecustomlink/token(for:)

## 2. P0 invariant: an Apple token is not proof of payment

An Apple external-purchase token proves only that StoreKit produced token context for an eligible external-purchase flow. It does **not** prove that:

- Xsolla successfully charged the player;
- a payment is final rather than pending, failed, reversed, refunded, or disputed;
- the player bought a particular Diamond bundle;
- 30-Day VIP should start;
- Lifetime VIP should be granted;
- a refund or chargeback occurred; or
- a second entitlement should be issued after a retry.

TycoonX must grant paid value only from its authoritative payment-and-entitlement state machine after server-side confirmation from the actual payment channel.

A browser return, StoreKit token, `showNotice` completion, Xsolla redirect parameter, client callback, screenshot, receipt pasted into Support, or local app state must never be sufficient by itself to grant paid value.

## 3. EU token types must remain distinct

For the current EU `ExternalPurchaseCustomLink` flow, Apple documents the token types:

- **`ACQUISITION`**; and
- **`SERVICES`**.

Do not replace them with token types documented for another region such as `IN_APP` or `LINK_OUT` unless Apple later changes the EU requirements and the implementation is deliberately migrated.

Do not invent local meanings for the Apple token types. Store the Apple-provided type and token data as received, with the corresponding Apple documentation/version used by the implementation.

## 4. Request timing and freshness

For an EU custom-link implementation:

- request the required token types at app launch when the Apple API and entitlement are available;
- request/check current tokens again before every potential external-purchase transaction;
- do not rely indefinitely on a token cached from an earlier session;
- handle `token(for:)` returning `nil` without creating a purchase or entitlement;
- handle an eligibility/API error without falling back to an untracked direct Xsolla link where Apple requires the StoreKit flow; and
- treat expired or unusable tokens as a reason to reacquire valid token context, not as a reason to fabricate local token data.

If the player's storefront, Apple eligibility, parental status, TycoonX account, or external-purchase entitlement changes during a session, re-evaluate the flow before presenting or completing another external purchase.

## 5. Server-side account binding

Immediately associate Apple external-purchase token context with the correct TycoonX customer/order context on the server.

At minimum preserve, where available and lawful:

- TycoonX internal user/account identifier;
- TycoonX order-attempt identifier;
- Apple token type;
- Apple `externalPurchaseId` or other reporting identifier contained in the token;
- token creation/expiry metadata needed for correct reporting;
- storefront/region and app/bundle context;
- expected TycoonX product/SKU;
- Xsolla order/transaction identifier once one exists;
- authoritative payment status;
- entitlement status;
- Apple reporting status; and
- timestamps for creation, payment confirmation, entitlement action, refund/reversal, and Apple reporting.

Do **not** bind one Apple token to two unrelated TycoonX users or two unrelated order attempts merely because the same device is used.

Do **not** let a logout/login switch silently carry an earlier user's token-to-order mapping into a later user's purchase.

Where the Apple account and TycoonX account can change independently, server-side ownership and transaction mapping must fail safely rather than guessing.

## 6. Refreshed tokens and token periods are not duplicate purchases

Apple's current sandbox documentation explains that a refreshed custom-link token can have the same token-period creation/expiration dates as the original token while using a different `externalPurchaseId`.

Therefore:

- a refreshed token is not automatically a new sale;
- a changed `externalPurchaseId` is not automatically a new paid entitlement;
- duplicate/refreshed token records must remain linkable to the correct customer and token period;
- Apple reporting retries must not duplicate TycoonX entitlement delivery; and
- downstream reconciliation must use transaction/order provenance, not simply `number of tokens = number of purchases`.

Apple's sandbox documentation also states that the `ACQUISITION` token behavior models a maximum of one active acquisition-token period for a customer/app, while `SERVICES` token periods can continue after expiry. Do not build entitlement logic that assumes both token types have identical lifecycle semantics.

**Official Apple sandbox-token source:** https://developer.apple.com/documentation/storekit/testing-transactions-that-use-custom-link-tokens

## 7. Sandbox isolation is mandatory

Apple's sandbox custom-link tokens use sandbox-only identifiers, including an `externalPurchaseId` beginning with **`SANDBOX`** according to Apple's current documentation.

Release rules:

- sandbox Apple tokens must never create a production TycoonX paid entitlement;
- sandbox Xsolla transactions must never create a production entitlement;
- production and sandbox Apple reporting endpoints/state must remain separated;
- a sandbox `ACQUISITION` token limitation must not be worked around by copying tokens between test users;
- production reconciliation must reject sandbox identifiers in production payment provenance; and
- Support/admin tools must make environment provenance visible enough to avoid manually granting production Diamonds or VIP from test evidence.

## 8. Product-specific entitlement safety

### Diamonds

A valid Apple external-purchase token does not grant Diamonds.

Only the authoritative completed payment for the mapped Diamond order may grant the purchased quantity and any genuine bundle bonus. Duplicate callbacks, refreshed tokens, browser returns, Apple reporting retries, or Xsolla webhook retries must not duplicate the Diamond grant.

If that specific completed transaction is later authoritatively refunded, reversed, or charged back, apply the existing transaction-specific entitlement/economy-correction rules. Do not remove unrelated legitimately purchased Diamonds merely because another token or transaction is disputed.

### One-time 30-Day VIP

30-Day VIP remains a **one-time, non-renewing 30-day entitlement**.

- An Apple token must not start the 30-day clock.
- The mapped authoritative completed payment may start the clock exactly once under the existing 30-Day VIP rules.
- Retrying the external-payment flow must not reset or extend the original clock unless a distinct valid purchase and the published product rules lawfully provide it.
- A refunded/invalid transaction must be reconciled transaction-specifically and must not silently alter unrelated Diamonds or Lifetime VIP.

### Lifetime VIP

Lifetime VIP remains a **limited-time promotional one-time entitlement available only during selected genuine sales windows**. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability.

- An Apple external-purchase token must not itself grant Lifetime VIP.
- A token obtained during a sales window does not preserve a price or create a purchase after the genuine offer has ended unless the actual checkout/order rules lawfully do so.
- A later sales window may use a different genuine price.
- Apple reporting retries, refreshed tokens, provider outages, or later price changes must not add an expiry to a valid Lifetime VIP entitlement or retroactively reprice a completed purchase.

## 9. Browser return, process death, and asynchronous Xsolla confirmation

The external purchase can outlive the foreground app process.

Test at minimum:

1. StoreKit token exists, player closes the app before opening Xsolla;
2. player opens Xsolla but never pays;
3. player pays while TycoonX is backgrounded;
4. player pays, then the app process is killed before returning;
5. Xsolla confirms payment before the client returns;
6. Xsolla confirms payment after the client returns;
7. the browser redirects twice;
8. the Xsolla webhook is delivered twice;
9. the player changes TycoonX account before reopening the app;
10. Apple reporting is retried after entitlement delivery; and
11. the payment later becomes refunded, reversed, or charged back.

The server must be able to reconstruct the correct transaction and entitlement state without trusting the client to be alive or without issuing a second paid entitlement.

## 10. Apple reporting is a separate state machine

Keep at least these states logically separate:

- Apple token state;
- Xsolla/payment state;
- TycoonX entitlement state; and
- Apple external-purchase reporting state.

Apple's current reporting guidance requires reporting qualifying external-purchase tokens and transactions, including applicable tokens that did not result in a completed purchase, through the required current reporting route and deadline.

A successfully reported Apple token does not mean the user paid. A failed Apple report does not mean a valid Xsolla payment should be withheld from a player when the purchase is otherwise authoritative and lawful. A report retry must not grant value again.

The broader deadline, OS-version split, VAT-ID, commission, invoice, child-safety, and unified-EU-terms requirements remain governed by `TYCOONX_APPLE_EU_OCTOBER_2026_TRANSITION_GATE.md`.

**Current Apple reporting guidance:** https://developer.apple.com/help/app-store-connect/making-payments-to-apple/reporting-tokens-and-transactions

## 11. Refund, reversal, and chargeback reconciliation

For each external-payment correction, reconcile against the exact mapped transaction.

Do not infer that:

- every Apple token has a refundable transaction;
- every browser-return event is a completed order;
- every Xsolla refund means all account entitlements are invalid;
- a chargeback automatically proves the TycoonX account owner committed fraud; or
- an account-compromise report automatically invalidates every historical purchase.

Keep payment authorization, payment completion, refund/reversal, chargeback, account compromise, fraud investigation, and TycoonX entitlement correction as separate facts.

A legitimate refund/reversal can justify transaction-specific correction where lawful. Mandatory consumer remedies remain intact.

## 12. Account compromise and token leakage

Treat Apple external-purchase tokens and transaction mappings as security-sensitive identifiers.

- do not log them unnecessarily in client-visible analytics, crash messages, chat, or Support screenshots;
- do not put reusable token values in public URLs beyond Apple's required mechanism;
- redact token data from ordinary support exports where full values are unnecessary;
- rotate/revoke internal credentials used for Apple reporting if compromised;
- investigate whether a leaked token was actually used for a paid transaction before changing entitlements; and
- do not punish a player solely because their account or device was compromised.

A token leak is not proof of payment fraud. Apply account-compromise, security-incident, GDPR, and payment-abuse procedures independently as their facts require.

## 13. Privacy and data minimization

External-purchase tokens, transaction mappings, storefront information, and purchase history can be personal data or linked to personal data.

Use them only for lawful purposes such as transaction processing, entitlement delivery, fraud/security controls, statutory/platform reporting, accounting, tax, dispute handling, and legal claims where applicable.

Do not retain full token payloads forever merely because they might someday be useful. Align retention with Apple reporting/audit needs, payment/accounting rules, disputes, security requirements, and the TycoonX Privacy Policy. Restrict internal access and preserve only what is proportionate.

If the actual Apple/Xsolla implementation begins processing materially different personal data from what the canonical Privacy Policy describes, update the canonical policy and reopen the affected localized Privacy pages before deployment.

## 14. Regional and parental eligibility

The EU token flow is region/program specific.

- do not expose it globally because one EU storefront is eligible;
- do not substitute IP geolocation for Apple's required runtime eligibility checks;
- honor `canMakePayments` and the current Apple parental/child-safety requirements;
- do not use a direct Xsolla URL to bypass a blocked or ineligible StoreKit flow; and
- re-check eligibility when storefront, account, parental status, OS version, entitlement, or Apple program status changes.

A different regional StoreKit implementation may use different token types and disclosure rules. Never reuse the EU `ACQUISITION`/`SERVICES` implementation in another country merely because the payment processor is still Xsolla.

## 15. Outages and provider changes

If Apple token generation, Apple's reporting API, Xsolla, authentication, or TycoonX backend infrastructure is unavailable:

- fail closed before presenting an external purchase if Apple requires token context that cannot be obtained;
- do not fabricate tokens;
- do not pre-grant Diamonds or VIP while payment is only expected;
- preserve authoritative Xsolla completion events for later reconciliation where lawful;
- retry Apple reporting idempotently when the reporting service returns;
- preserve original transaction timestamps and token provenance; and
- communicate an outage accurately without promising a refund or entitlement that the transaction state does not support.

A provider outage does not waive mandatory consumer remedies or justify deleting unrelated paid value.

## 16. Security and anti-abuse checks

Flag for manual/security review where appropriate if:

- one Apple token is mapped to unrelated TycoonX accounts;
- a production order contains a sandbox Apple identifier;
- one Xsolla transaction attempts to grant multiple paid entitlements unexpectedly;
- a client attempts to supply or overwrite the authoritative token-to-order mapping;
- an external transaction has incompatible product, price, currency, account, or environment provenance; or
- token/reporting behavior materially conflicts with Apple's current documentation.

Do not automatically suspend an account on the first anomaly. Preserve evidence and distinguish client bugs, provider retries, account compromise, test traffic, configuration errors, and intentional abuse.

## 17. Release evidence packet

Before the EU external-purchase route is enabled under the applicable Apple terms, preserve a dated test packet containing at least:

- App Store Connect entitlement/program evidence;
- production bundle/App ID and allowed-region configuration;
- supported OS version matrix;
- successful `canMakePayments`/`isEligible` checks;
- evidence that both EU token types are requested as currently required;
- server mapping showing token type and customer/order association;
- `nil`/error handling test for `token(for:)`;
- Apple disclosure/notice test;
- Xsolla success/failure/pending paths;
- process-death/browser-return test;
- duplicate webhook/redirect test;
- sandbox-versus-production isolation test;
- Apple reporting test, including a token with no completed purchase where required;
- refund/reversal reconciliation test;
- Diamond idempotency test;
- one-time 30-Day VIP clock test;
- Lifetime VIP sales-window and restoration test; and
- evidence that no unrelated entitlement is modified by an Apple reporting retry.

## 18. Canonical/localization trigger

This gate is implementation guidance, so it does not itself reopen the 100 completed localized legal documents.

Reopen the canonical document and then the corresponding 25 localized documents only if implementation changes the player-facing legal meaning, for example by:

- introducing a new payment channel or contracting party;
- introducing an auto-renewing product;
- materially changing refund responsibility;
- materially changing personal-data processing; or
- changing the promised duration or legal nature of Diamonds, 30-Day VIP, or Lifetime VIP.

Do not copy internal token names or reporting mechanics into player-facing legal prose unless needed for transparency. Public legal copy should stay understandable to ordinary players.

## 19. Release decision

The Apple EU external-purchase path is **not ready** merely because TycoonX can open the Xsolla webshop.

Release only when the production build can demonstrate all of the following for the applicable EU Apple configuration:

- correct StoreKit eligibility and entitlement;
- current EU `ACQUISITION` and `SERVICES` token acquisition;
- server-side customer/order binding;
- Apple's required disclosure flow;
- authoritative Xsolla payment confirmation;
- exactly-once TycoonX entitlement delivery;
- sandbox isolation;
- monthly Apple reporting and reconciliation;
- refund/reversal/chargeback correction without unrelated entitlement loss;
- parental/region safeguards; and
- reproducible evidence after process death and provider retries.

Until then, keep the affected alternative-payment path disabled and retain a compliant Apple-permitted purchase configuration.

## Source checkpoint

Apple documentation rechecked on **September 3, 2026**:

- External Purchase API overview: https://developer.apple.com/documentation/storekit/external-purchase
- `ExternalPurchaseCustomLink.token(for:)`: https://developer.apple.com/documentation/storekit/externalpurchasecustomlink/token(for:)
- Custom-link sandbox token testing: https://developer.apple.com/documentation/storekit/testing-transactions-that-use-custom-link-tokens
- Reporting tokens and transactions to Apple: https://developer.apple.com/help/app-store-connect/making-payments-to-apple/reporting-tokens-and-transactions
- Current EU transition context: https://developer.apple.com/support/apps-in-the-eu/

If Apple changes the EU token types, token request timing, entitlement, reporting API, disclosure flow, allowed storefronts, or unified EU terms, revalidate this gate before relying on the changed behavior.