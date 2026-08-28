# TycoonX Xsolla Refund & Chargeback Release Gate

Last reviewed: August 28, 2026

This is an operational release gate for purchases made through the official CK-Labs TycoonX webshop using Xsolla. It complements the public TycoonX Terms of Service, Purchases & Refunds Policy, and Privacy Policy. It does not replace the transaction-specific Xsolla checkout terms, mandatory consumer law, or Xsolla's current Partner/Publisher terms.

## Why this gate exists

Xsolla's current Refund Policy says the refund-policy type that applies to a purchase is shown in the checkout. The Xsolla group company that is party to the transaction can also depend on the chosen payment method and is identified in checkout and on the receipt. TycoonX must therefore not hard-code one universal Xsolla merchant entity or one universal refund rule into support, checkout copy, or entitlement logic.

Xsolla's current chargeback documentation also says that Xsolla can resolve most chargebacks from its own payment and fraud information, but may contact a game developer when additional information about player behavior is needed. That makes evidence handling, privacy minimization, and entitlement reconciliation release-critical.

## P0 before enabling or scaling the Xsolla webshop

### 1. Transaction authority and idempotent fulfillment

- Never grant Diamonds, 30-Day VIP, Lifetime VIP, or another paid entitlement solely because the browser returned from checkout, a client-side success screen appeared, or a local order was created.
- Grant paid value only after valid server-side confirmation from the configured Xsolla integration.
- Verify webhook authenticity and make payment-event processing idempotent so retries, duplicate callbacks, delayed notifications, and out-of-order events cannot create duplicate value.
- Keep a stable mapping between the Xsolla transaction identity, the TycoonX order, the purchasing account, the product, the amount/currency, the entitlement delivery event, and any later refund/reversal/chargeback event.
- Never use a mutable client-side identifier as the sole authority for entitlement grant, refund, or revocation.

### 2. Transaction-specific refund policy

- Do not promise that every Xsolla purchase is governed by the same refund policy. Xsolla currently states that the applicable refund-policy type is shown at the bottom of checkout.
- Do not promise that every Xsolla purchase is refundable or non-refundable. Eligibility can depend on the actual transaction, item type, use/redemption state, payment method, applicable Xsolla policy, and mandatory consumer law.
- For duplicate or mistaken purchases, verify the exact transaction and whether the digital value was redeemed or consumed before giving a support answer. Provider rules can distinguish unused in-game currency from already redeemed value.
- Never use a blanket "no refunds" statement for Diamonds, 30-Day VIP, and Lifetime VIP. Their legal and provider treatment can differ, and mandatory EU/German rights remain intact.
- Support must distinguish a refund request from a technical delivery problem. Where the payment provider controls the refund, TycoonX Support can identify the purchase and entitlement but must not pretend CK-Labs controls the provider's refund decision.

### 3. Merchant-of-record and tax responsibility

- Identify the actual Xsolla group company shown for the transaction before describing who is merchant of record, receipt issuer, or payment counterparty.
- Keep the TycoonX public wording conditional: when Xsolla is merchant of record, the transaction-specific Xsolla entity may handle payment processing, fraud screening, transaction taxes/VAT, refunds, payment disputes, and chargebacks under the applicable checkout terms.
- CK-Labs remains responsible for delivering or correcting the TycoonX entitlement after valid provider confirmation and for fixing TycoonX-side delivery defects.
- Do not promise that CK-Labs can edit, reissue, or alter an invoice or tax receipt issued by a separate Xsolla merchant entity.

### 4. Chargeback evidence integrity and privacy

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

### 5. Refund, reversal, and chargeback reconciliation

- A refund or chargeback must reconcile against the exact purchased entitlement or virtual value connected to that transaction.
- If refunded Diamonds remain unused, remove or correct only the refunded value where lawful.
- If refunded value was consumed or transferred, use the narrowest lawful account/economy correction necessary to unwind the invalid paid value. Do not confiscate unrelated legitimate purchases merely because one transaction was disputed.
- A refunded or reversed Lifetime VIP may be removed only where the underlying transaction is actually refunded, reversed, invalid, fraudulent, or otherwise no longer valid, subject to mandatory law.
- A chargeback request alone is not proof of fraud. Do not permanently terminate an account solely because a dispute was opened. Temporary purchase/economy restrictions may be appropriate when proportionate and necessary while a real payment-integrity investigation is active.
- If a chargeback is won or withdrawn and the payment remains valid, ensure the legitimate entitlement is not left revoked by a stale intermediate event.
- Keep refund and chargeback event handling idempotent so repeated provider events cannot repeatedly subtract Diamonds, repeatedly revoke VIP, or produce a negative correction more than once.

### 6. Support response rules

For an Xsolla purchase problem, support should first establish:

1. the TycoonX account;
2. the Xsolla transaction/order identifier available to the customer;
3. product purchased;
4. payment status from authoritative provider records;
5. entitlement-delivery state in TycoonX;
6. whether value was consumed, activated, transferred, or restored; and
7. whether a refund, reversal, or chargeback event already exists.

Do not ask users for full payment-card numbers, online-banking credentials, one-time codes, passwords, or other secrets. Where Xsolla needs payment-method verification, direct the user to Xsolla's own secure support/payment flow.

### 7. Commercial chargeback-cost monitoring

Xsolla currently documents chargeback/dispute fees in its Publisher Account materials. These are CK-Labs commercial/payment costs and should be monitored in webshop margin calculations, especially for low-price Diamond packs and promotional VIP sales.

- Do not automatically add a surprise "chargeback fee" to a player's TycoonX balance or unrelated future purchase merely because CK-Labs incurred a provider dispute fee.
- If CK-Labs ever intends to recover a specific provider fee from a user, obtain legal review and ensure the basis is transparent, proportionate, contractually valid, and permitted by mandatory consumer law before implementing it.
- Track chargeback rates by product, region, payment method, and promotion so abusive patterns can be controlled without punishing legitimate customers.

### 8. Shutdown, major change, or delivery failure

Xsolla's chargeback documentation notes that disputes may arise from game-condition changes or a game shutdown. Therefore:

- preserve the TycoonX permanent-shutdown and material-change consumer protections already present in the canonical Terms and Purchases Policy;
- do not delete transaction/entitlement evidence immediately when a product is discontinued if it is still needed for refunds, disputes, restoration, accounting, mandatory retention, or legal claims;
- if a paid product cannot be delivered, do not manufacture a successful-delivery event simply to resist a refund or chargeback; and
- where mandatory law gives a consumer a refund, price reduction, termination, conformity remedy, or other right, that right overrides this operational gate.

## Current Xsolla checkpoint

As of August 28, 2026:

- Xsolla's legal index lists its Refund Policy as updated June 16, 2026 and its Privacy Policy as updated June 3, 2026.
- Xsolla states that the applicable Refund Policy type is identified in checkout.
- Xsolla states that the relevant Xsolla group company for a purchase depends on the transaction/payment method and is shown in checkout/receipt.
- Xsolla's chargeback documentation, last updated August 5, 2026, says Xsolla resolves most chargebacks from its own data and contacts developers when additional player-behavior information is needed.
- Xsolla's Publisher Account documentation currently describes a dispute/chargeback fee that can be charged when a chargeback reaches a final status. Treat that as a commercial-cost input, not as permission to impose an undisclosed fee on players.

Recheck these points before materially changing webshop refund or dispute handling. Provider documentation can change without a TycoonX app update.

## Manual verification

Run locally without GitHub Actions or paid services:

```bash
node scripts/verify-tycoonx-xsolla-chargebacks.mjs
```
