# TycoonX Xsolla Refund & Chargeback Release Gate

Last reviewed: September 4, 2026

This is an operational release gate for purchases made through the official CK-Labs TycoonX webshop using Xsolla. It complements the public TycoonX Terms of Service, Purchases & Refunds Policy, and Privacy Policy. It does not replace the transaction-specific Xsolla checkout terms, mandatory consumer law, or Xsolla's current Partner/Publisher terms.

## Why this gate exists

Xsolla's current Refund Policy says the refund-policy type that applies to a purchase is shown in the checkout. The Xsolla group company that is party to the transaction can also depend on the chosen payment method and is identified in checkout and on the receipt. TycoonX must therefore not hard-code one universal Xsolla merchant entity or one universal refund rule into support, checkout copy, or entitlement logic.

Xsolla's current chargeback documentation also says that Xsolla can resolve most chargebacks from its own payment and fraud information, but may contact a game developer when additional information about player behavior is needed. That makes evidence handling, privacy minimization, and entitlement reconciliation release-critical.

Xsolla's current evidence-submission documentation adds an important operational constraint: partner evidence requests are selective, must currently be answered within **3 calendar days from the request date**, accept a **PDF** through the Publisher Account chargeback registry, and cannot be replaced through that registry after submission. A missed evidence deadline is therefore a commercial/process risk for CK-Labs, not proof of player fraud and not an entitlement event by itself.

Xsolla's current webhook documentation also distinguishes between **combined** and **separate** Store/Payments webhook models. Newer Publisher Accounts registered after January 22, 2025 receive payment, transaction and item information through combined `order_paid` / `order_canceled` webhooks, while accounts registered on or before January 22, 2025 can receive separate `payment` / `refund` plus `order_paid` / `order_canceled` webhooks unless migrated. TycoonX must implement the model actually configured for the CK-Labs project rather than assuming one webhook shape from sample code.

## P0 before enabling or scaling the Xsolla webshop

### 1. Transaction authority and idempotent fulfillment

- Never grant Diamonds, 30-Day VIP, Lifetime VIP, or another paid entitlement solely because the browser returned from checkout, a client-side success screen appeared, or a local order was created.
- Grant paid value only after valid server-side confirmation from the configured Xsolla integration.
- Verify webhook authenticity and make payment-event processing idempotent so retries, duplicate callbacks, delayed notifications, and out-of-order events cannot create duplicate value.
- Keep a stable mapping between the Xsolla transaction identity, the TycoonX order, the purchasing account, the product, the amount/currency, the entitlement delivery event, and any later refund/reversal/chargeback event.
- Never use a mutable client-side identifier as the sole authority for entitlement grant, refund, or revocation.

### 2. Confirm the actual Xsolla webhook model

Before go-live, record in the release evidence which webhook mode the CK-Labs Xsolla project actually uses:

- **Combined mode:** for Publisher Accounts registered after January 22, 2025, Xsolla currently documents `order_paid` as carrying payment data, transaction details and purchased-item information, and `order_canceled` as carrying canceled-payment, transaction and purchased-item information. In this mode, Store/Payments fulfillment should not depend on legacy `payment` / `refund` webhooks that the project is not configured to receive.
- **Separate mode:** for Publisher Accounts registered on or before January 22, 2025, Xsolla currently documents `payment` / `refund` for payment and transaction data plus `order_paid` / `order_canceled` for purchased-item state. Process all required incoming webhooks for this mode and correlate the events idempotently.
- Do not infer the mode from account age alone when the project may have been migrated. Verify the current Publisher Account webhook settings and run Xsolla's webhook tests for the exact project.
- Treat `order_paid` or the configured successful-payment authority as the entitlement-grant event only after signature verification and transaction/account/product validation.
- Treat `order_canceled`, `refund`, partial-refund events, chargeback/dispute events, and authoritative provider status changes as reconciliation inputs. Never rely on a missing webhook as proof that a refund or cancellation did not happen.

Xsolla currently states that required webhooks can be sent sequentially and that failure to process one can prevent later webhooks from being sent. A handler that accepts one event but permanently fails before durable recording can therefore strand later entitlement or cancellation state.

### 3. Webhook security, acknowledgement, retries, and durable processing

- Use HTTPS with a valid certificate for the webhook endpoint.
- Verify the Xsolla webhook signature against the **raw request body** before parsing/re-encoding it. Do not verify a reconstructed JSON string.
- Use constant-time comparison where practical and protect the Xsolla project secret from logs, client code, analytics, and error responses.
- Follow the current Xsolla IP allowlist guidance where compatible with the deployment architecture, without using IP checks as a substitute for signature verification.
- Return only the response codes appropriate to the verified event. Xsolla currently documents `200`, `201`, or `204` for success, `400` for invalid user/signature-type problems, and `5xx` for temporary server failures.
- Durably record the verified event and its idempotency key/transaction identity before acknowledging success. Business logic may then run asynchronously so a process crash after `2xx` does not silently lose the event.
- For current combined `order_paid` / `order_canceled` webhooks, Xsolla documents retries after no response or `5xx`, up to 20 delivery attempts within 12 hours. Build idempotency for the whole retry window.
- For current third-party-initiated `refund` webhooks, Xsolla documents increasing-interval retries after `5xx`, up to 12 attempts within 48 hours. Do not let repeated delivery subtract Diamonds or revoke VIP more than once.
- Do not intentionally return an error in an attempt to stop a provider-initiated refund. Xsolla expressly notes that an Xsolla-initiated refund can still complete even if the webhook receives `4xx`, `5xx`, or exhausts retries. The TycoonX handler must reconcile to authoritative payment state rather than trying to veto the refund through HTTP status codes.

### 4. Transaction-specific refund policy

- Do not promise that every Xsolla purchase is governed by the same refund policy. Xsolla currently states that the applicable refund-policy type is shown at the bottom of checkout.
- Do not promise that every Xsolla purchase is refundable or non-refundable. Eligibility can depend on the actual transaction, item type, use/redemption state, payment method, applicable Xsolla policy, and mandatory consumer law.
- For duplicate or mistaken purchases, verify the exact transaction and whether the digital value was redeemed or consumed before giving a support answer. Provider rules can distinguish unused in-game currency from already redeemed value.
- Never use a blanket "no refunds" statement for Diamonds, 30-Day VIP, and Lifetime VIP. Their legal and provider treatment can differ, and mandatory EU/German rights remain intact.
- Support must distinguish a refund request from a technical delivery problem. Where the payment provider controls the refund, TycoonX Support can identify the purchase and entitlement but must not pretend CK-Labs controls the provider's refund decision.
- Do not promise an instant card/bank refund. Xsolla's current operational documentation says the actual refund period depends on the payment method and may take approximately **5–10 banking days**.
- Once a refund has actually been issued, Xsolla currently states it cannot be canceled. Staff must therefore confirm the exact transaction and requested scope before submitting a manual refund action.

### 5. Partial refunds are payment-method and transaction specific

Xsolla currently supports partial refunds only for eligible payment methods and transaction states. Before CK-Labs attempts a partial refund:

- verify that the payment method supports it;
- verify that the transaction status allows a refund and that cumulative partial refunds will not exceed the original payment;
- do not assume discounted purchases, subscription payments, Xsolla-balance payments, or older transactions are eligible for partial refund merely because a full refund route exists;
- preserve the original transaction/entitlement mapping because Xsolla can report a partial refund as a related transaction and send a dedicated partial-refund webhook;
- reconcile only the refunded portion of the entitlement where technically and legally possible, rather than deleting unrelated paid value; and
- if the product cannot be meaningfully divided, route the case for a transaction-specific full-refund or other lawful remedy instead of inventing an unsupported partial entitlement state.

Current Xsolla documentation also notes that refund mechanics can vary by payment method, including automatic refunds, support-assisted refunds, and alternative refund routes such as PayPal or Xsolla balance for payment methods that cannot return funds normally. Support copy must not promise a specific return rail before the provider confirms it for the actual transaction.

### 6. Merchant-of-record and tax responsibility

- Identify the actual Xsolla group company shown for the transaction before describing who is merchant of record, receipt issuer, or payment counterparty.
- Keep the TycoonX public wording conditional: when Xsolla is merchant of record, the transaction-specific Xsolla entity may handle payment processing, fraud screening, transaction taxes/VAT, refunds, payment disputes, and chargebacks under the applicable checkout terms.
- CK-Labs remains responsible for delivering or correcting the TycoonX entitlement after valid provider confirmation and for fixing TycoonX-side delivery defects.
- Do not promise that CK-Labs can edit, reissue, or alter an invoice or tax receipt issued by a separate Xsolla merchant entity.

### 7. Chargeback evidence integrity and privacy

When Xsolla asks CK-Labs for additional information about player behavior for a chargeback or payment dispute:

- provide only accurate evidence that CK-Labs lawfully holds;
- send only information reasonably necessary for the disputed transaction and stated purpose;
- prefer transaction status, delivery timestamp, entitlement activation, consumption percentage or item use, relevant login/session facts, and support-contact history over unrelated gameplay or communications;
- do not fabricate evidence, infer facts that cannot be verified, or exaggerate usage merely to improve the chance of winning a dispute;
- do not send unrelated private chats, private messages, contact lists, unrelated purchases, unrelated account history, or unnecessary sensitive/personal information;
- redact or aggregate data where the dispute can be handled without directly identifying unrelated people;
- use a secure Xsolla-provided support/dispute channel rather than ordinary public chat, community posts, or an unsecured ad-hoc message;
- record what evidence was disclosed, for which Xsolla transaction, for what purpose, and when, so CK-Labs can answer privacy, support, or regulatory questions later; and
- keep the evidence only for the period reasonably necessary for the dispute, fraud prevention, accounting, legal claims, or a mandatory retention duty.

The canonical TycoonX Privacy Policy already permits reasonably necessary sharing with Xsolla and other payment partners for purchase validation, refunds, fraud, and disputes. This gate limits operational disclosure to that purpose rather than expanding it.

### 7A. Xsolla evidence-request lifecycle and strict deadline

Xsolla's current chargeback evidence documentation says partner evidence requests are **selective**, rather than required for every chargeback. Xsolla may already have enough payment/fraud evidence itself, while partner evidence is more likely to be requested for matters such as non-delivery, order cancellation, or a payment-system request for additional proof.

Operationally:

- keep the email address configured in Xsolla Publisher Account current and monitored;
- also check **Analytics > Overview > Anti-fraud > Chargeback registry** for the `Action required` state so a missing/spam-filtered email does not hide a request;
- treat the current **3-calendar-day period from the evidence-request date** as a strict operational deadline;
- verify the Xsolla transaction ID before preparing or uploading anything;
- use the currently required **PDF** format and make the file transaction-specific;
- before upload, review the final PDF for unrelated chats, unrelated users, payment secrets, hidden metadata, or data that is not needed for the dispute;
- record the request date, deadline, transaction/dispute ID, evidence categories, upload timestamp, and the operator who approved the submission;
- after upload, record that the chargeback registry moved to the provider's evidence-received / `In progress` state rather than treating upload as proof that CK-Labs won the dispute;
- do not represent the dispute as finally resolved until the authoritative provider/payment-system outcome exists. Xsolla currently says a decision typically takes **30–60 days** after evidence is submitted;
- once a file has been submitted, do not assume it can be silently replaced in the registry. Xsolla currently says replacement is unavailable there; corrected or additional data requires contacting its chargeback management team;
- if the three-day deadline is missed, record the operational failure and allow Xsolla to proceed with the evidence it already has. A missed deadline is not proof that the player was right, wrong, fraudulent, or abusive; and
- never remove Diamonds, cancel 30-Day VIP, revoke Lifetime VIP, suspend an account, create a negative balance, or mark a payment fraudulent **merely because Xsolla requested evidence, because the evidence request is still pending, or because CK-Labs missed the evidence deadline**. Any entitlement/enforcement action needs its own authoritative payment state, valid contract/legal basis, or independently supported fraud/exploit finding.

For an account-compromise dispute, login/device/session evidence can be relevant, but it must be interpreted carefully. Activity from a compromised account does not automatically prove that the legitimate account owner personally authorized the disputed purchase or intentionally committed fraud.

Because the evidence window is currently only three calendar days, a production webshop should not rely on an occasional manual inbox check. CK-Labs should maintain a lightweight routine that can notice `Action required` disputes promptly without introducing unnecessary player surveillance or a paid monitoring service.

### 8. Refund, reversal, and chargeback reconciliation

- A refund or chargeback must reconcile against the exact purchased entitlement or virtual value connected to that transaction.
- If refunded Diamonds remain unused, remove or correct only the refunded value where lawful.
- If refunded value was consumed or transferred, use the narrowest lawful account/economy correction necessary to unwind the invalid paid value. Do not confiscate unrelated legitimate purchases merely because one transaction was disputed.
- A refunded or reversed Lifetime VIP may be removed only where the underlying transaction is actually refunded, reversed, invalid, fraudulent, or otherwise no longer valid, subject to mandatory law.
- A chargeback request alone is not proof of fraud. Do not permanently terminate an account solely because a dispute was opened. Temporary purchase/economy restrictions may be appropriate when proportionate and necessary while a real payment-integrity investigation is active.
- If a chargeback is won or withdrawn and the payment remains valid, ensure the legitimate entitlement is not left revoked by a stale intermediate event.
- Keep refund and chargeback event handling idempotent so repeated provider events cannot repeatedly subtract Diamonds, repeatedly revoke VIP, or produce a negative correction more than once.
- Reconcile provider state after outages or webhook-processing incidents. A successfully refunded payment must not remain active merely because the cancellation webhook was missed, and a valid paid transaction must not remain revoked merely because a transient dispute state was later reversed.

### 9. Support response rules

For an Xsolla purchase problem, support should first establish:

1. the TycoonX account;
2. the Xsolla transaction/order identifier available to the customer;
3. product purchased;
4. payment status from authoritative provider records;
5. entitlement-delivery state in TycoonX;
6. whether value was consumed, activated, transferred, or restored; and
7. whether a refund, reversal, partial refund, or chargeback event already exists.

Do not ask users for full payment-card numbers, online-banking credentials, one-time codes, passwords, or other secrets. Where Xsolla needs payment-method verification, direct the user to Xsolla's own secure support/payment flow.

If a full refund may require an email address for an alternative refund route, obtain only the address reasonably necessary for the provider flow and use it only for that purpose. Do not ask the user to send payment secrets by ordinary support message.

### 10. Commercial chargeback-cost monitoring

Xsolla currently documents chargeback/dispute fees in its Publisher Account materials. These are CK-Labs commercial/payment costs and should be monitored in webshop margin calculations, especially for low-price Diamond packs and promotional VIP sales.

- Do not automatically add a surprise "chargeback fee" to a player's TycoonX balance or unrelated future purchase merely because CK-Labs incurred a provider dispute fee.
- If CK-Labs ever intends to recover a specific provider fee from a user, obtain legal review and ensure the basis is transparent, proportionate, contractually valid, and permitted by mandatory consumer law before implementing it.
- Track chargeback rates by product, region, payment method, and promotion so abusive patterns can be controlled without punishing legitimate customers.

### 11. Shutdown, major change, or delivery failure

Xsolla's chargeback documentation notes that disputes may arise from game-condition changes or a game shutdown. Therefore:

- preserve the TycoonX permanent-shutdown and material-change consumer protections already present in the canonical Terms and Purchases Policy;
- do not delete transaction/entitlement evidence immediately when a product is discontinued if it is still needed for refunds, disputes, restoration, accounting, mandatory retention, or legal claims;
- if a paid product cannot be delivered, do not manufacture a successful-delivery event simply to resist a refund or chargeback; and
- where mandatory law gives a consumer a refund, price reduction, termination, conformity remedy, or other right, that right overrides this operational gate.

## Current Xsolla checkpoint

As of September 4, 2026:

- Xsolla's legal index lists its Refund Policy as updated June 16, 2026 and its Privacy Policy as updated June 3, 2026.
- Xsolla states that the applicable Refund Policy type is identified in checkout.
- Xsolla states that the relevant Xsolla group company for a purchase depends on the transaction/payment method and is shown in checkout/receipt.
- Xsolla's current Store/Payments webhook documentation distinguishes combined and separate webhook modes based on Publisher Account setup, with January 22, 2025 as the documented default split and migration possible through Xsolla.
- Xsolla currently documents sequential required-webhook delivery, combined-webhook retries up to 20 attempts within 12 hours, and third-party refund-webhook retries up to 12 attempts within 48 hours.
- Xsolla currently requires signature verification against the raw request body and documents HTTPS, valid certificates and IP allowlisting as webhook-security practices.
- Xsolla's refund documentation says refunds can take approximately 5–10 banking days depending on payment method, an issued refund cannot be canceled, and partial-refund eligibility depends on payment method and transaction conditions.
- Xsolla's chargeback evidence documentation, last updated August 5, 2026, says evidence requests are selective; a requested file must currently be uploaded as PDF through Publisher Account within **3 calendar days from the request date**; late evidence cannot be submitted through the registry; a submitted file cannot be replaced there; and a payment-system decision typically takes **30–60 days** after evidence submission.
- Xsolla currently identifies potentially useful evidence such as proof of digital delivery, relevant user activity/login logs, purchase confirmation/details, screenshots of item use, applicable refund-policy excerpts, or correspondence about the disputed transaction, while expressly instructing partners to include only data necessary for the chargeback.
- Xsolla's Publisher Account documentation currently describes a dispute/chargeback fee that can be charged when a chargeback reaches a final status. Treat that as a commercial-cost input, not as permission to impose an undisclosed fee on players.

Recheck these points before materially changing webshop refund or dispute handling. Provider documentation can change without a TycoonX app update.

## Manual verification

Run locally without GitHub Actions or paid services:

```bash
node scripts/verify-tycoonx-xsolla-chargebacks.mjs
```
