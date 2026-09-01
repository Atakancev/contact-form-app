# TycoonX EU/German SCA & 3-D Secure Payment Authentication Release Gate

Last reviewed: September 1, 2026

This is an operational release gate for TycoonX purchases through Apple App Store, Google Play, and the official CK-Labs TycoonX webshop using Xsolla. It complements the public TycoonX legal documents and the existing payment/entitlement gates. It does not replace mandatory payment-services law, the rules of the payment service providers, or transaction-specific consumer rights.

## 1. Release invariant

**A payment-authentication challenge is not a completed purchase, and a completed authentication challenge is not by itself authority to grant a TycoonX entitlement.**

For every paid TycoonX product, keep these concepts separate:

1. the player initiated a checkout;
2. a bank, wallet, store, card issuer, acquirer, or processor requested authentication or another verification step;
3. the authentication step succeeded, failed, expired, was abandoned, or remained pending;
4. the payment provider established the transaction's authoritative payment state;
5. CK-Labs verified that provider state and mapped the transaction to the correct TycoonX account and product;
6. CK-Labs delivered the entitlement exactly once; and
7. later refund, reversal, revocation, cancellation, chargeback, or correction events are reconciled against that same transaction.

A browser redirect, app callback, local `success` page, completed 3-D Secure screen, bank-app approval screen, or client-side receipt display must not skip steps 4-6.

## 2. Current EU/German legal baseline

As of September 1, 2026, TycoonX should continue to design EU payment flows against the current PSD2 framework unless and until a replacement instrument has been formally adopted, entered into force, and reached its applicable date.

Directive (EU) 2015/2366 defines strong customer authentication as authentication using two or more independent elements from the categories of knowledge, possession, and inherence. Article 97 places strong-customer-authentication duties on payment service providers in specified circumstances, including when a payer initiates an electronic payment transaction. For remote electronic payments, the framework also requires authentication that dynamically links the transaction to a specific amount and payee where the rule applies.

Commission Delegated Regulation (EU) 2018/389 contains the detailed regulatory technical standards and exemptions. Whether a particular transaction qualifies for a lawful SCA exemption is a payment-services decision under the applicable provider/acquirer/issuer framework. CK-Labs must not invent an exemption, falsify the transaction context to obtain one, or promise players that a transaction will never require authentication.

The Deutsche Bundesbank currently summarizes the German PSD2 position by explaining that online/card payments generally require two independent factors and that the obligation to carry out strong customer authentication in internet payments rests with payment service providers.

The proposed PSD3/Payment Services Regulation package is a future-law watch item. The European Parliament's official legislative tracker records the political agreement of November 27, 2025 and ECON approval on May 5, 2026. Do not label the proposed replacement framework as already applicable TycoonX law until formal adoption, Official Journal publication, entry into force, and the relevant application/transposition dates have been verified.

## 3. Responsibility split

### CK-Labs is responsible for

- presenting the correct TycoonX product and checkout entry point;
- sending only accurate product/account/order context to the authorized payment channel;
- not interfering with or bypassing provider-required authentication;
- not granting Diamonds or VIP from an authentication screen or return URL alone;
- verifying authoritative provider transaction state before delivery;
- idempotent entitlement delivery and reconciliation;
- keeping the public TycoonX product description, price logic, refund route, and entitlement behavior accurate; and
- preserving mandatory consumer remedies that remain CK-Labs' responsibility.

### Apple, Google, Xsolla, banks, issuers, acquirers, card networks, wallets, and other payment participants may be responsible for

- determining whether their payment flow requires authentication;
- presenting provider-controlled authentication or bank approval interfaces;
- applying lawful exemptions or risk analysis available to them;
- accepting or rejecting payment credentials;
- processing payment authorization/capture under their own role;
- operating fraud screening within their systems; and
- producing the provider records CK-Labs later uses for reconciliation.

Do not write public support text that makes CK-Labs appear to control a bank's 3-D Secure decision, an issuer's one-time code, Apple's purchase confirmation, or Google Play's payment verification when CK-Labs does not control it.

## 4. Provider-neutral payment state model

The TycoonX server-side purchase model should be capable of representing, without collapsing them into one boolean:

- `created` / checkout initiated;
- `authentication_required` or equivalent provider challenge state where known;
- `pending` / provider still processing or waiting for player/provider action;
- `paid_verified` / authoritative successful transaction verified by CK-Labs;
- `fulfilled` / TycoonX entitlement delivered exactly once;
- `failed`;
- `player_canceled` where distinguishable;
- `provider_canceled` / expired;
- `refunded`;
- `reversed` / revoked;
- `chargeback` / payment dispute where reported; and
- `manual_review` where authoritative provider state is incomplete or inconsistent.

The exact provider vocabulary may differ. The invariant is more important than the names: **only a verified state that the relevant provider recognizes as successfully completed may authorize paid entitlement delivery.**

When provider state is temporarily unavailable or contradictory, freeze the risky write and reconcile. Do not guess in favor of either granting or confiscating paid value.

## 5. Xsolla webshop and 3-D Secure

Xsolla currently describes Pay Station as supporting dynamic 3-D Secure 2.0 and additional verification. The TycoonX webshop must therefore tolerate an authentication step that opens outside the original page, takes time, fails, is canceled, or completes after the original browser context has changed.

Required safeguards:

- Do not grant Diamonds, 30-Day VIP, or Lifetime VIP because the browser reached a success-looking page.
- Do not grant because a 3-D Secure challenge itself reports completion without the configured Xsolla payment confirmation also establishing the transaction as paid.
- Verify Xsolla webhook authenticity and reconcile against the transaction/order identity used by the configured CK-Labs integration.
- Make payment webhooks and browser-return handling idempotent. Repeated redirects, repeated webhooks, page refreshes, and retry delivery must not duplicate an entitlement.
- If the user closes the 3-D Secure tab, loses connectivity, or returns later, the order remains governed by Xsolla's authoritative state, not by TycoonX guessing that it failed or succeeded.
- If an authentication attempt expires or the bank rejects it, do not create a TycoonX entitlement and do not automatically classify the player as fraudulent.
- If Xsolla or a bank later reports a completed payment after an earlier pending state, reconcile and deliver exactly once.
- If Xsolla later reports a transaction-specific refund, reversal, or chargeback, correct only the entitlement/value attributable to that transaction where legally permitted.

### Embedded checkout / Content Security Policy

Xsolla currently documents that 3-D Secure verification can fail when Pay Station is opened inside an iframe with Content Security Policy restrictions unless the integration is configured to allow the 3-D Secure step in an independent window. If CK-Labs embeds Pay Station, regression-test the real production CSP and the configured independent-window behavior. A technical 3-D Secure launch failure must not be labeled player fraud.

### Card-verification holds

Xsolla also documents a card-verification flow in which a small temporary amount may be placed on a card and later released. If the live CK-Labs configuration ever uses such a provider verification mechanism:

- the verification hold is not a TycoonX Diamond/VIP purchase;
- it must not grant an entitlement;
- it must not be recorded as TycoonX product revenue merely because it appears on a bank statement;
- support must distinguish the verification hold from the actual product charge; and
- public/support wording must not promise a release timing that CK-Labs cannot control beyond the provider's documented process.

## 6. Apple App Store

StoreKit currently distinguishes a successful verified transaction from a `pending` purchase that still requires customer action. A pending StoreKit purchase can complete later and then arrive through transaction updates.

TycoonX release rules:

- Do not grant a paid entitlement for `Product.PurchaseResult.pending`.
- Do not grant for `userCancelled`.
- Do not grant from an unverified StoreKit transaction merely because the UI previously displayed Apple's purchase confirmation flow.
- Deliver only after receiving and validating the transaction state required by the current Apple/StoreKit integration.
- Start and maintain the transaction-update/reconciliation path early enough that a purchase that completes after account verification, parental approval, or other delayed action is not lost.
- Finish Apple transactions only after the TycoonX delivery/reconciliation logic has safely processed them in the manner required by the current StoreKit architecture.
- A repeated Apple authentication prompt or delayed purchase is not by itself evidence of fraud, account compromise, or entitlement abuse.

Apple controls its App Store payment/authentication sheet. TycoonX Support must not ask a player for an Apple Account password, Apple verification code, bank one-time password, card PIN, CVV, or another secret authentication factor to troubleshoot an App Store purchase.

## 7. Google Play

Google Play currently requires TycoonX to distinguish `PENDING` from `PURCHASED`. The app/backend should verify the purchase, grant only after it is in `PURCHASED`, and acknowledge or consume as appropriate after valid delivery.

TycoonX release rules:

- Never grant Diamonds or VIP while Google reports `PENDING`.
- Do not treat a successful bank challenge, cash-payment instruction, payment-method screen, or client callback as equivalent to `PURCHASED`.
- Verify purchase state on the secure backend before final entitlement delivery.
- Use the purchase token as the important verification/idempotency identity rather than assuming every transaction has an order ID.
- Reconcile purchases that transition from `PENDING` to `PURCHASED` while the app is closed.
- A canceled or expired pending transaction creates no paid entitlement, but is not automatically fraud.
- Do not acknowledge a purchase while it remains `PENDING`.
- Keep acknowledgement/consumption logic separate from entitlement identity so a network retry cannot grant twice.

Google Play controls the payment/authentication experience for Play Billing purchases. TycoonX Support must not ask for Google Account passwords, bank OTPs, PINs, CVVs, or other authentication secrets.

## 8. Authentication failure is not automatically fraud

The following events are risk signals only when the surrounding evidence supports that conclusion. They must not, alone, automatically trigger a permanent account ban, confiscation of unrelated purchases, or a fraud label:

- repeated 3-D Secure challenges;
- failed or expired SCA challenges;
- a bank declining a payment;
- a user canceling an authentication screen;
- switching from one payment method to another;
- travel, roaming, VPN use, or an IP-country mismatch;
- an unsupported browser or blocked popup;
- a provider outage;
- an interrupted App Store or Google Play purchase;
- a provider fraud-screening review; or
- a legitimate unauthorized-payment claim after account/card compromise.

Deliberate payment fraud, forged receipts, manipulated clients, region falsification, stolen payment instruments, coordinated chargeback abuse, or attempts to bypass provider controls can still be investigated and acted on using authoritative evidence and proportionate enforcement.

## 9. Never collect player authentication secrets

TycoonX Support, moderation tools, and CK-Labs incident workflows must never request or store a player's:

- Apple or Google password;
- online-banking password;
- 3-D Secure password or challenge secret;
- one-time password, TAN, SMS code, authenticator code, or bank-app approval code;
- card PIN;
- CVV/CVC;
- full payment-card number merely to identify a purchase; or
- authentication recovery/backup code.

Reasonable purchase evidence can instead include provider transaction/order identifiers, non-secret receipts, product identifiers, timestamps, amounts/currency where appropriate, and the minimum account information necessary to match the purchase.

If a user voluntarily sends a secret or excessive card data, do not copy it into additional systems. Follow the applicable security/privacy incident procedure and redact/delete it where legally and operationally appropriate.

## 10. Price, amount, currency, tax, and dynamic-link integrity

A payment-authentication step must never be used to substitute a different TycoonX product or silently change the final purchase terms.

Before sending a user into an external/provider authentication flow, preserve enough order context to reconcile:

- TycoonX product/SKU;
- quantity or entitlement type;
- final consumer price and currency presented by the applicable checkout;
- tax/VAT treatment where available and relevant;
- region/storefront/payment channel;
- CK-Labs account attribution data that is lawful and necessary; and
- provider transaction/order identity once assigned.

If the amount, currency, product, or merchant context materially changes before final confirmation, use the applicable provider flow that lawfully presents/re-authenticates the changed transaction rather than silently mutating the already-authenticated order.

A later FX change, tax change, provider fee, or regional price change does not retroactively alter a completed transaction. Merchant/provider processing fees also do not reduce the number of Diamonds or VIP duration that the player validly purchased.

## 11. Refunds, unauthorized payments, and chargebacks

A successful SCA/3-D Secure event is relevant security evidence but is **not a TycoonX contractual waiver of refund, withdrawal, conformity, unauthorized-payment, or other mandatory rights**.

Do not state that a player can never dispute a transaction merely because 3-D Secure or another authentication mechanism was used. The applicable payment provider, bank, card network, merchant terms, evidence, and mandatory law determine the payment dispute.

A payment dispute can arise from account compromise, card compromise, duplicate billing, provider/integration error, product non-delivery, misunderstanding, or deliberate abuse. TycoonX must classify the actual case before imposing account punishment.

Where a provider confirms a refund/reversal/chargeback, entitlement correction remains transaction-specific. Do not confiscate unrelated purchased Diamonds, restart/shorten unrelated 30-Day VIP, or revoke a separate valid Lifetime VIP merely because another transaction is disputed.

## 12. 30-Day VIP and Lifetime VIP isolation

SCA and 3-D Secure affect payment completion, not the intrinsic clock/model of a valid TycoonX entitlement.

- A valid one-time 30-Day VIP begins according to the authoritative activation rule after successful verified payment. An authentication retry must not start multiple 30-day periods.
- A delayed authentication completion must not backdate the VIP clock to an earlier failed/pending attempt unless the applicable contract/provider record actually requires that result.
- Reinstalling the app or repeating provider authentication must not reset the original 30-Day VIP expiry.
- One valid Lifetime VIP purchase produces one Lifetime VIP entitlement. Re-authentication, restore, transaction replay, provider migration, or support recovery must not duplicate it.
- Authentication failure on a new purchase does not remove an already-valid Lifetime VIP or purchased Diamond balance.

## 13. Outages and degraded mode

If CK-Labs cannot reliably reach the payment provider or verify its transaction state:

- do not grant from a client success state alone;
- do not revoke from a client failure state alone;
- keep the transaction pending/manual-review as appropriate;
- allow later reconciliation from authoritative provider records;
- preserve idempotency across retries; and
- communicate a neutral pending/payment-verification message rather than accusing the player of fraud.

If Xsolla's 3-D Secure window cannot open due to TycoonX CSP, popup, browser, or integration configuration, fix the integration or disable the affected purchase path until reliable. Do not accept money through a flow CK-Labs knows cannot reliably complete authentication or return state.

## 14. Provider migration and rule changes

Replacing Xsolla, adding another webshop processor, changing an acquirer, or changing Apple/Google payment integration does not authorize CK-Labs to rewrite old transaction history.

Historic transactions remain associated with their actual provider, merchant/payment route, product, price, currency, tax treatment, authentication/payment evidence available from that transaction, refund route, and entitlement record.

Before enabling a replacement payment provider for EU/German players, document:

- who performs SCA/3-D Secure and under which role;
- how authentication-required/pending/paid/failed states map into TycoonX;
- the authoritative server-side success signal;
- webhook/API authenticity controls;
- retry/idempotency behavior;
- refund/reversal/chargeback state;
- support escalation route;
- data-protection role and data flows; and
- how historic purchases remain restorable/reconcilable.

## 15. Privacy and logging

Authentication-security evidence can be personal data. Log only what is reasonably necessary for transaction reconciliation, fraud/security, accounting, support, and legal obligations.

Prefer provider transaction references and status metadata over storing authentication secrets. Do not log OTPs, TANs, CVVs, bank passwords, raw authentication challenges, or other secrets that CK-Labs does not need.

Retention of payment-authentication metadata must follow the TycoonX Privacy Policy and the applicable retention gate. Access should be limited to the operational roles that need it.

A new authentication/fraud provider must also pass the applicable GDPR processor/controller, security, and international-transfer review before personal data is sent to it.

## 16. Product and checkout messaging

Player-facing messages should describe the state without overclaiming. Examples:

- Good: `Your payment still needs confirmation from your payment provider. Your TycoonX purchase will be delivered after payment is confirmed.`
- Good: `Payment was not completed. No TycoonX entitlement has been granted for this attempt.`
- Good: `We are verifying the payment status with the provider. You do not need to buy the item again while verification is pending.`
- Avoid: `3-D Secure passed, so your TycoonX purchase is complete.`
- Avoid: `Your bank rejected the payment, so your TycoonX account is fraudulent.`
- Avoid: `Send us your bank code so we can approve the purchase.`

## 17. Mandatory regression scenarios

Before a material payment-integration release, verify at least these scenarios in the relevant test environments and, where lawful/practical, with a low-value production smoke test:

1. Xsolla card checkout with a completed 3-D Secure challenge and a confirmed paid server-side state grants exactly once.
2. Xsolla 3-D Secure challenge is canceled. No entitlement is granted and the account is not marked fraudulent solely for canceling.
3. Xsolla 3-D Secure completes but the browser closes before returning to TycoonX. A later authoritative payment confirmation still fulfills exactly once.
4. Xsolla challenge cannot open in an embedded/CSP flow. No false success is recorded.
5. Duplicate Xsolla webhook plus repeated browser return does not duplicate Diamonds or VIP.
6. Xsolla payment remains pending during an outage and later succeeds. The same transaction is delivered once after reconciliation.
7. Apple StoreKit returns `.pending`. No entitlement is granted until a later verified transaction arrives.
8. Apple purchase is canceled. Existing Diamonds/VIP are unchanged.
9. Google purchase remains `PENDING`. No entitlement or acknowledgement occurs.
10. Google purchase changes from `PENDING` to `PURCHASED` while the app is closed. Backend/app reconciliation delivers once and acknowledges appropriately.
11. Bank/issuer declines a payment after an authentication attempt. The failed transaction creates no entitlement and no automatic fraud ban.
12. A player reports account/card compromise after a transaction that used SCA. Support opens the correct payment/security review instead of claiming SCA makes the dispute impossible.
13. A provider-confirmed refund removes/corrects only value from the matching transaction and preserves unrelated paid value.
14. A second authentication attempt for an already-owned Lifetime VIP does not create a duplicate Lifetime VIP.
15. A delayed 30-Day VIP payment completion starts the entitlement according to the authoritative activation rule, not from an abandoned earlier attempt.
16. Support requests a payment identifier for investigation without requesting OTP, TAN, password, PIN, CVV, or full card number.
17. Payment-provider API outage after checkout leaves the transaction reconcilable and does not rely on a local success page.
18. A new processor/provider is enabled only after its SCA/authentication, authoritative state, retry, refund, and privacy mappings are documented.

## 18. Release evidence

Keep a dated, privacy-minimized evidence sample for representative Apple, Google Play, and Xsolla purchase paths. For the Xsolla EU/German card path, include at minimum:

- product/SKU and TycoonX entitlement type;
- displayed final price/currency and tax presentation;
- whether authentication was requested;
- provider transaction/order identifier;
- authoritative final payment state;
- webhook/API evidence used for server verification;
- TycoonX entitlement-delivery record and idempotency key;
- refund/reversal path; and
- support wording for pending/failed authentication.

Do not store authentication secrets as release evidence.

## 19. Current-law watch

Re-check the PSD3/Payment Services Regulation legislative status before any material EU payment architecture change after September 1, 2026. The legal rule must be updated only when the new instruments' formal adoption, Official Journal publication, entry into force, application/transposition timetable, and effect on the actual CK-Labs/provider roles are known.

Also re-check current Apple, Google Play, and Xsolla documentation when their purchase APIs, payment states, authentication behavior, external-purchase programs, or merchant/payment roles change.

## 20. Canonical legal-document impact

This gate operationalizes meaning already present in the canonical TycoonX Terms, Purchases & Refunds Policy, and Privacy Policy: provider-controlled payment processing, no entitlement before valid confirmation, authoritative transaction records, transaction-specific refund/reversal handling, security/data minimization, and preservation of mandatory consumer rights.

It does **not** by itself change the public contractual meaning. Therefore it does not reopen the completed localization queue unless a future implementation decision requires a material canonical English change.

## Reference anchors checked September 1, 2026

- Directive (EU) 2015/2366 (PSD2), especially the definition of strong customer authentication and Article 97.
- Commission Delegated Regulation (EU) 2018/389, including dynamic-linking and SCA/exemption requirements.
- Deutsche Bundesbank PSD2 guidance on strong customer authentication and merchant impact.
- Apple StoreKit `Product.PurchaseResult` documentation for success, pending, and user-cancelled states.
- Google Play Billing documentation for purchase verification, `PENDING`/`PURCHASED`, backend reconciliation, and acknowledgement.
- Xsolla Pay Station security documentation for 3-D Secure 2.0 and additional verification.
- Xsolla documentation on Content Security Policy and independent-window 3-D Secure behavior.
- European Parliament Legislative Train status for the PSD3/Payment Services Regulation proposals.