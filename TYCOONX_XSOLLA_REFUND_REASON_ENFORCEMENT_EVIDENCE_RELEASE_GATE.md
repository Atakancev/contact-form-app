# TycoonX Xsolla Refund-Reason & Enforcement-Evidence Release Gate

**Last reviewed:** September 9, 2026  
**Owner:** CK-Labs  
**Scope:** Official TycoonX webshop purchases processed through Xsolla

This is a focused companion to `TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md`, `TYCOONX_XSOLLA_PARTIAL_REFUND_OCCURRENCE_RECONCILIATION_GATE.md`, and the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, and Community Standards.

It closes one narrow but important production gap: Xsolla can attach structured refund/fraud reason codes to payment events. Those codes are useful provider evidence, but they must not be confused with the separate questions of whether money actually settled or was refunded, whether TycoonX delivered or must correct an entitlement, whether the TycoonX account holder committed misconduct, or whether mandatory consumer remedies apply.

TycoonX went to full release on **September 1, 2026**. Nothing in this gate may describe the live service, current purchases, users, VIP, Diamonds, rewards, or legal terms as beta.

## 1. Core invariant: reason code is evidence, not an automatic sanction

A verified Xsolla `refund_details.code`, `refund_details.reason`, anti-fraud classification, or blocklist recommendation is **provider-supplied transaction/risk evidence**. It is not by itself an automatic TycoonX account-ban command, an admission by the player, a final court finding, proof that the TycoonX account holder personally committed fraud, or authority to confiscate unrelated paid value.

Always keep these decisions separate:

1. **payment/refund state** — what Xsolla/payment-system records say happened to the transaction;
2. **entitlement state** — what TycoonX granted, consumed, restored, reversed, or still owes for that transaction;
3. **security/risk state** — whether the transaction/account needs protection, restriction, or investigation;
4. **player-enforcement state** — whether there is enough supportable evidence to impose a TycoonX account sanction under the Terms; and
5. **consumer-rights state** — whether withdrawal, conformity, cure, price reduction, termination, refund, liability, notice, or another mandatory remedy applies.

A single boolean such as `fraud=true` must not collapse those five states.

## 2. Current Xsolla refund-code checkpoint

Xsolla's current webhook documentation exposes structured refund reasons. As of the review date above, the documented set includes ordinary cancellation/integration/test reasons, fraud or risk reasons, duplicate-payment reasons, and more specific fraud categories.

The current documented codes relevant to TycoonX include:

- `1` — cancellation by user request / game request;
- `2` — chargeback;
- `3` — integration error;
- `4` — potential fraud / AFS reject;
- `5` — test payment;
- `6` — user invoice expired;
- `7` — fraud notification from the payment system;
- `8` — cancellation by payment-system request;
- `9` — cancellation by user request;
- `10` — cancellation by game request;
- `11` — account holder reports that they did not make the transaction;
- `12` — potential/friendly fraud;
- `13` — duplicate transaction for the same invoice;
- `21` — potential fraud / BIN attack;
- `22` — potential fraud / monetization fraud;
- `23` — potential fraud / low-scale card fraud;
- `24` — potential fraud / regional-price abuse;
- `25` — potential fraud / partner or payment-system exploit;
- `26` — fraud confirmed but exact attack type not definable; and
- `27` — payment-system fraud notification for linked transactions, where the transaction itself was not specified in the payment-system fraud report but is connected to fraud-refunded transactions through correlation such as a shared card or device.

Do **not** freeze this list forever. Before changing enforcement automation, compare it with Xsolla's current official webhook documentation. Unknown, newly introduced, renamed, or semantically changed codes must fail closed for irreversible player enforcement until reviewed.

Official references:

- https://developers.xsolla.com/webhooks/payments/refund
- https://developers.xsolla.com/webhooks/payments/partial-refund
- https://developers.xsolla.com/webhooks/anti-fraud

## 3. Codes that must not become automatic player-fraud findings

Several current Xsolla reasons are expressly compatible with non-player-fraud situations.

### Code 3 — integration error

Xsolla describes this as an issue in the integration between Xsolla and the game and currently recommends not adding the user to the blocklist.

For TycoonX:

- classify it first as a provider/integration incident;
- reconcile the payment and entitlement from authoritative records;
- do not create a fraud strike, exploit flag, regional-price-abuse finding, or account-compromise finding merely because this code exists;
- do not deduct unrelated Diamonds or VIP to make CK-Labs whole for an integration defect; and
- investigate CK-Labs-side webhook, mapping, catalog, account-binding, or entitlement failures before blaming the player.

### Code 5 — test payment

Xsolla describes this as a test transaction followed by cancellation and currently recommends not adding the user to the blocklist.

For TycoonX:

- keep the transaction outside production paid value and production revenue;
- do not turn test cancellation into a player fraud or chargeback strike;
- do not let a test Lifetime VIP event open a production Lifetime VIP sales window; and
- preserve any unrelated genuine production purchase made by the same account.

### Codes 8, 9, and 10 — ordinary payment-system/user/game cancellation

A payment-system cancellation, user cancellation/dissatisfaction, or game-requested cancellation is not automatically fraud. Reconcile the affected transaction and apply the appropriate refund/entitlement result without inventing a misconduct narrative.

### Code 13 — duplicate transaction

A duplicate transaction can arise without hacking or exploit use. Treat the provider's duplicate classification as a payment/reconciliation signal:

- identify which charge(s) actually settled;
- identify which entitlement grant(s) actually occurred;
- prevent duplicate entitlement delivery or duplicate clawback;
- refund/correct the duplicated transaction where required by provider state, policy, or mandatory law; and
- do not ban the player merely because two records were created for the same invoice.

## 4. Fraud-labelled codes are risk evidence, not unlimited enforcement authority

Xsolla currently documents stronger fraud-related categories, and for some codes its documentation recommends blocklisting. CK-Labs may use those signals to protect the webshop and TycoonX economy, but a provider recommendation must be translated into proportionate, transaction-specific game action rather than copied mechanically into permanent account punishment.

### Codes 4, 7, and 11

Potential fraud/AFS reject, payment-system fraud notification, and an account holder stating that they did not make the transaction can justify immediate payment-risk controls, transaction quarantine, purchase restrictions, session protection, or account-security review.

They do **not** automatically prove that the TycoonX account holder was the fraudster. For example:

- a stolen payment instrument can be used by an attacker;
- a TycoonX account can be compromised;
- a legitimate account owner can be the victim of credential theft;
- a household/payment method can be shared or misused without the TycoonX account owner knowing; or
- provider identity and TycoonX account identity can be mapped incorrectly.

If independent evidence supports deliberate fraud by the player, CK-Labs may enforce under the Terms and mandatory law. If the evidence instead indicates account compromise, prioritize account protection, transaction correction, credential/session reset, and restoration of unrelated legitimate value.

### Code 12 — friendly fraud

A cardholder dispute classified by Xsolla as friendly fraud is relevant commercial/risk evidence. It is not permission to ignore the actual chargeback/refund outcome, deny mandatory consumer rights, or automatically confiscate unrelated purchases.

If repeated transaction-specific evidence supports deliberate refund cycling or chargeback abuse, CK-Labs may restrict future purchases or enforce proportionately. Preserve the evidence and do not infer intent solely from one label.

## 5. Codes 21–23: card-fraud patterns must remain transaction-scoped

Xsolla's current categories for BIN attacks, monetization fraud, and lower-scale card fraud may indicate serious stolen-card activity. Treat them as high-priority security signals, but preserve the distinction between the compromised payment instrument, the TycoonX account, and the human account holder.

Minimum rules:

- stop or quarantine affected payment activity where lawful;
- reconcile the exact refunded/invalid transaction and value attributable to it;
- investigate linked purchases using provider and TycoonX evidence rather than nickname, language, nationality, or country alone;
- do not remove unrelated valid Apple, Google Play, or Xsolla purchases merely because the same TycoonX account has one fraud-coded transaction;
- do not collect or reconstruct full card numbers, CVV, or unnecessary payment credentials from the player; and
- preserve only privacy-minimized fraud evidence reasonably needed for security, dispute handling, legal claims, accounting, and required records.

## 6. Code 24 — regional-price abuse needs real eligibility evidence

Xsolla currently describes code `24` as potential regional-pricing/key-resale abuse involving exploitation of regional prices, typically through misrepresentation of location or payment method to obtain lower-priced items for resale.

This is relevant evidence for TycoonX, but the code must not be expanded beyond what it actually establishes.

Do not automatically infer:

- the player's nationality or legal residence;
- that every VPN/proxy use was intended to obtain a lower price;
- that a country mismatch caused by CK-Labs/Xsolla configuration proves abuse;
- that a user legitimately travelling or moving countries committed fraud;
- that a later IP/country change retroactively changes the price of a completed one-time purchase; or
- that one provider-coded transaction justifies repricing unrelated historical purchases.

Before a TycoonX regional-price-abuse sanction, reconcile the transaction's actual provider country/eligibility inputs, final price/currency, payment method constraints where available, TycoonX checkout configuration, account/order mapping, sale window, and any independent evidence of intentional circumvention or resale.

A completed purchase is not retroactively repriced solely because the user later appears in another country or because CK-Labs changes future regional pricing. Mandatory law and lawful obvious-error remedies remain preserved.

## 7. Code 25 — partner/payment-system exploit can point away from the player

Xsolla currently describes code `25` as credential theft/account takeover involving abuse on the partner or payment-system side rather than direct card abuse.

This reason is especially important for fair incident handling:

- treat it as a possible provider/partner/integration compromise until evidence identifies the responsible actor;
- do not automatically accuse the TycoonX player of hacking merely because their transaction carries this code;
- preserve and rotate affected CK-Labs credentials/secrets if there is a plausible partner-side compromise;
- check webhook, API-key, admin-account, support-account, checkout-token, and account-mapping integrity; and
- correct only the provably affected transaction/value while preserving unrelated legitimate entitlements.

A CK-Labs credential leak, Xsolla/payment-system compromise, or attacker account takeover is not converted into player misconduct by contract language.

## 8. Code 26 — confirmed fraud without an attack type does not authorize invented facts

Xsolla's current code `26` says fraud is confirmed but there is not enough evidence to determine the exact attack type.

TycoonX may treat the affected transaction as fraud-confirmed provider evidence to the extent supported by authoritative records, but must not invent whether it was card theft, account takeover, regional-price abuse, friendly fraud, exploit use, or another mechanism.

Enforcement and support records should say only what the evidence supports. This protects CK-Labs from making unnecessary or inaccurate accusations while still allowing transaction-specific correction and protective restrictions.

## 9. Code 27 — linked transaction is correlation, not direct fraud proof

Xsolla's current code `27` is particularly easy to over-read. Xsolla says the transaction itself was not specified in the payment-system fraud report but is linked, for example through a shared card or device, to transactions refunded for fraud.

For TycoonX:

- store it as a linked-risk signal, not a statement that this transaction itself was directly reported as fraudulent;
- do not permanently ban or confiscate unrelated value solely because two transactions share a device, payment instrument, household context, or other correlation;
- investigate whether the shared attribute reflects an attacker, family/shared-device use, compromised account, payment-method reuse, support/admin testing, or another legitimate explanation;
- use authoritative provider transaction state to decide whether the specific payment is refunded/invalidated; and
- require stronger, supportable evidence before a durable TycoonX misconduct finding.

## 10. `refund_details.author` is not the identity of the fraudster

Xsolla can also identify who initiated a refund, for example API/game-side action, a Publisher Account user, Xsolla Customer Support, or Xsolla itself under the documented flow.

Do not interpret the refund author as the person who committed the underlying misconduct. `author` answers who initiated/processed the refund action in the provider workflow, not who used the payment instrument or controlled the TycoonX account at purchase time.

Preserve author and reason as separate fields where needed for reconciliation/audit. Do not overwrite one with the other.

## 11. Payment state still controls entitlement correction

A reason code can explain why a provider action happened, but the **authoritative refund/reversal/chargeback state and settlement evidence** control whether the corresponding paid transaction must be corrected.

Do not:

- revoke Diamonds or VIP because a fraud-like reason appears before the provider transaction is actually invalidated/refunded where the applicable flow requires settlement confirmation;
- keep refunded value active merely because the reason looks non-fraudulent;
- run the same clawback twice when `refund`, `partial_refund`, `order_canceled`, chargeback evidence, or later provider reconciliation describe the same economic occurrence; or
- use a missing callback as proof that no provider-side refund/reversal happened.

The dedicated Xsolla refund settlement and partial-refund occurrence gates remain authoritative for request-versus-settlement timing and idempotency.

## 12. Entitlement corrections must remain transaction-specific

### Purchased Diamonds

Purchased Diamonds do not expire merely because time passes.

If an Xsolla transaction is authoritatively refunded, reversed, charged back, duplicated, or invalidated, reconcile the purchased Diamond quantity attributable to that transaction exactly once, subject to the canonical Terms, Purchases & Refunds Policy, actual downstream value, and mandatory law.

Do not confiscate unrelated legitimately purchased Diamonds merely because a separate transaction has a fraud-coded refund reason.

### One-time 30-Day VIP

30-Day VIP remains a **one-time, non-renewing entitlement lasting 30 consecutive days**.

A refund reason must not restart, extend, renew, or convert the original purchase. If the underlying transaction is validly reversed, apply the transaction-specific reconciliation/remedy without rewriting the product definition or affecting unrelated VIP purchases.

### Lifetime VIP

Lifetime VIP remains a **limited-time promotional one-time entitlement available only during selected genuine sales windows**. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability for purchase.

A refund/fraud reason, support case, account-recovery event, or restoration flow must not reopen a closed Lifetime VIP sales window. A valid historical Lifetime VIP from a genuine sales window must not be removed merely because another transaction on the account carries a fraud code.

## 13. Cross-channel isolation

Xsolla refund/fraud metadata applies to the relevant Xsolla transaction. It is not authority over Apple App Store or Google Play transaction state.

Do not revoke an Apple or Google Play purchase because an Xsolla transaction on the same TycoonX account received code `7`, `11`, `24`, `25`, `26`, or `27` unless there is independent authoritative evidence affecting that separate purchase and the action is lawful.

Likewise, Apple/Google refund or fraud metadata does not silently rewrite the Xsolla transaction ledger.

## 14. Account-compromise handling

Where the evidence plausibly indicates that a TycoonX account was compromised:

- secure the account and active sessions;
- preserve provider transaction evidence;
- prevent additional suspicious purchases where proportionate;
- distinguish attacker-generated activity from the legitimate player's historical purchases and gameplay;
- do not demand full payment-card credentials from the player;
- restore unrelated legitimate entitlements when account mapping/security is corrected; and
- do not make the victim repay CK-Labs for losses caused by CK-Labs/provider compromise except where a valid legal basis actually exists.

A chargeback or unauthorized-payment report can be evidence of account compromise rather than evidence that the player is the attacker.

## 15. Privacy and data minimization

Refund/fraud reasons can reveal security, payment-dispute, location, device-correlation, or account-compromise information. Treat them as purpose-bound payment/security evidence.

Do not:

- copy raw provider risk payloads into public support chats;
- expose fraud codes or internal risk scores to other players;
- use fraud-reason data for advertising or unrelated behavioral profiling;
- retain full webhook payloads indefinitely merely because a risk code exists; or
- collect extra card/bank data from the player when provider records are sufficient.

Retain the minimum evidence reasonably necessary for payment reconciliation, fraud/security protection, disputes, accounting/tax, legal claims, and mandatory recordkeeping, subject to the canonical Privacy Policy and GDPR purpose limitation/data minimization.

## 16. Unknown or changed Xsolla reason codes

Provider taxonomies change. The handler must be forward-compatible.

If a verified webhook contains an unknown/new refund code or a known numeric code whose documented meaning has changed:

- preserve the raw code and provider transaction identity in the privacy-minimized reconciliation record;
- do not coerce it into the nearest known fraud category;
- do not default to permanent account suspension, Lifetime VIP removal, or unrelated entitlement confiscation;
- reconcile authoritative payment/refund state separately;
- quarantine only the affected transaction/purchase path where necessary for security; and
- update the TycoonX mapping only after reviewing current Xsolla documentation and regression tests.

## 17. Mandatory EU/German consumer-rights boundary

Nothing in a provider fraud/refund code waives mandatory consumer rights.

A user can still have statutory rights concerning withdrawal where applicable, digital-product conformity, cure, price reduction, termination, reimbursement, updates, liability, unfair commercial practices, privacy, or other non-waivable protections.

A refund request, chargeback, provider dispute, ADR/regulator contact, or exercise of a statutory remedy is not by itself proof of hacking, exploit use, regional-price abuse, or entitlement abuse.

Conversely, mandatory consumer law does not require CK-Labs to tolerate proven fraud, forged receipts, exploit-generated entitlements, stolen payment instruments, deliberate regional-price circumvention, or coordinated refund abuse. CK-Labs may investigate, secure accounts, correct invalid value, restrict future purchases, and enforce the Terms where supported by evidence and law.

## 18. Minimum regression matrix

Before production changes to Xsolla fraud/refund automation, test at least:

1. code `3` integration error -> transaction reconciled, no player fraud strike;
2. code `5` test payment -> no production Diamonds/VIP/revenue and no fraud strike;
3. code `8` payment-system cancellation -> transaction correction without automatic ban;
4. code `9` user cancellation -> refund/correction path without automatic fraud classification;
5. code `10` game-requested cancellation -> no player sanction merely from the reason;
6. code `13` duplicate -> duplicate charge/grant reconciled once, no automatic hack finding;
7. code `11` unauthorized-transaction report -> payment risk + account-compromise review, not automatic proof the TycoonX player was the fraudster;
8. code `12` friendly-fraud classification -> risk review, no unrelated entitlement confiscation;
9. code `21` BIN-attack category -> affected transaction quarantined/reconciled without collecting full card data;
10. code `22` monetization fraud -> affected transaction/value investigated without automatic cross-channel clawback;
11. code `23` low-scale card fraud -> transaction-scoped action, no nickname/country-based guilt inference;
12. code `24` regional-price abuse -> country/payment/configuration evidence reviewed before a TycoonX sanction; historical completed purchases are not retroactively repriced merely from the code;
13. code `25` partner/payment-system exploit -> CK-Labs/provider compromise review occurs before accusing the player;
14. code `26` confirmed fraud / type unknown -> no invented attack narrative;
15. code `27` linked transaction -> correlation stored as risk evidence, not direct fraud proof;
16. same transaction delivered through duplicate/retried webhook -> one entitlement correction only;
17. fraud-coded transaction on an account with unrelated valid Apple/Google/Xsolla purchases -> unrelated purchases remain intact absent independent evidence;
18. compromised TycoonX account with attacker purchase -> secure/correct attacker transaction while preserving legitimate historical value;
19. unknown future refund code -> no irreversible enforcement; payment state reconciled separately;
20. closed Lifetime VIP sales window + refund/fraud workflow -> no reopening of Lifetime VIP sales;
21. 30-Day VIP affected transaction -> original product remains one-time/non-renewing/30 consecutive days;
22. Xsolla reason code received before refund settlement -> reason recorded but entitlement reversal waits for the applicable authoritative transaction/refund state;
23. `refund_details.author` indicates Xsolla/support/API -> no inference that the refund author committed the underlying fraud; and
24. lawful consumer complaint/ADR/refund request with no independent fraud evidence -> no retaliatory account sanction.

## 19. Release evidence

Keep dated evidence of:

- the Xsolla refund-code documentation reviewed;
- which refund/reason fields are enabled for the actual CK-Labs project/webhook model;
- the mapping from provider reason codes to TycoonX **risk/reconciliation states**, not direct permanent bans;
- unknown-code fail-closed behavior;
- transaction-specific entitlement correction and cross-channel isolation;
- account-compromise handling;
- regional-price-abuse review inputs;
- privacy-minimized logging/retention;
- test/sandbox isolation; and
- regression results for the matrix above.

## Release decision

**PASS** only when Xsolla refund/fraud reason codes are authenticated, preserved, and interpreted as transaction/risk evidence; authoritative provider payment state remains separate from entitlement state; provider classifications do not automatically become unlimited TycoonX account sanctions; account-compromise and integration failures are handled fairly; unrelated legitimate paid value stays isolated; and mandatory consumer rights remain intact.

**FAIL CLOSED** for irreversible player enforcement if the reason code is unknown, the provider transaction cannot be mapped confidently, the environment is ambiguous, account ownership is disputed, regional-price eligibility/configuration evidence conflicts, or the only evidence is a correlation/label that does not establish the player's conduct.