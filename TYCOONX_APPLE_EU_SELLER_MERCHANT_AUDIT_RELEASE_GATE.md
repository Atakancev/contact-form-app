# TycoonX Apple EU Seller, Merchant and Audit Release Gate

**Reviewed against current Apple terms: September 4, 2026**

Owner: CK-Labs  
Status: post-release commercial/payment operations gate

TycoonX went to full release on **September 1, 2026**.

## Purpose and scope

This is a narrow companion gate for the Apple EU unified business terms introduced on August 18, 2026 and taking effect for the CK-Labs developer account on **October 1, 2026 or the date the Account Holder agrees to the updated Apple Developer Program License Agreement including Attachment 14, whichever is later**.

It does not duplicate:

- `TYCOONX_APPLE_EU_OCTOBER_2026_TRANSITION_GATE.md`, which controls payment-election, entitlement, StoreKit, reporting, VAT-ID, child-safety and App Review readiness;
- `TYCOONX_APPLE_EU_EXTERNAL_PURCHASE_TOKEN_LIFECYCLE_GATE.md`, which controls Apple external-purchase tokens and transaction lineage;
- `TYCOONX_EU_VAT_TAX_MERCHANT_RELEASE_GATE.md`, which controls the broader tax and merchant model across Apple, Google Play and Xsolla; or
- `TYCOONX_XSOLLA_REFUND_CHARGEBACK_RELEASE_GATE.md`, which controls Xsolla refund and chargeback handling.

This gate closes one specific contractual and accounting gap: under current Apple Attachment 14, a sale can involve an Apple contractual **seller** rule while the live checkout may separately identify Xsolla or another provider as merchant or seller of record for its own payment relationship. CK-Labs must record both layers accurately rather than treating either label as a universal answer to every legal, tax, reporting, refund or entitlement question.

## 1. P0: Apple Attachment 14 seller status must be recognized

Current Attachment 14 Section 5 applies to sales subject to commissions and/or fees owed to Apple under the relevant EU terms. For those Section 5 sales, Apple currently states that the developer acts **as the seller in its own name and on its own account**, solely for the purpose of those covered sales.

For TycoonX operations this means:

- do not tell Apple, internal accounting, or an Apple audit that Xsolla's merchant-of-record role automatically means CK-Labs has no seller, reporting, commission, tax-information or recordkeeping obligations to Apple;
- do not interpret Apple's seller wording as proof that Apple itself is the merchant for an external Xsolla transaction;
- do not automatically rewrite a transaction-specific Xsolla receipt that truthfully identifies an Xsolla entity as merchant or seller of record;
- keep the Apple contractual seller layer and the consumer-facing payment-provider/merchant layer separately documented; and
- escalate any real conflict between the Apple agreement and the signed Xsolla arrangement before enabling the affected EU flow rather than solving it with inconsistent public wording.

The phrase `seller in its own name and on its own account` in this internal gate describes the current Apple contractual allocation. It does not by itself determine every consumer-law or VAT consequence in every country.

## 2. If someone other than CK-Labs makes the covered sale, provider contract coverage becomes P0

Current Attachment 14 Section 5.2(D) states that where a sale subject to Apple commissions and/or fees is made by someone other than the developer, the developer must have an agreement with that party applying the relevant Attachment requirements to those sales, and remains responsible for ensuring the required sales reports and Apple commissions/fees are handled in accordance with Apple's requirements.

Before TycoonX relies on Xsolla or another third party for an Apple-EU external purchase that falls inside this rule, retain evidence of:

- the provider legal entity used for the relevant project/transaction;
- the signed agreement or incorporated terms governing that provider relationship;
- whether the agreement allocates the Apple-required reporting inputs, cooperation and payment data needed by CK-Labs;
- who actually submits any Apple-required transaction report;
- who pays Apple where the current arrangement assigns that operational step to a third party;
- how CK-Labs can verify successful and failed reporting rather than blindly trusting a provider dashboard;
- how corrections, refunds and reversals are propagated; and
- what happens if the provider agreement, merchant model, API, project configuration or legal entity changes.

A public Xsolla marketing page saying `Merchant of Record` is not sufficient evidence of the exact CK-Labs contractual arrangement.

If the signed provider terms do not allow CK-Labs to satisfy the applicable Apple requirements, keep the affected Apple EU external-payment configuration disabled until the conflict is resolved.

## 3. Seller, merchant, processor and entitlement roles must not be collapsed

For every material Apple-EU alternative-payment transaction, the reconciliation record should be able to answer separately:

1. **Apple contractual seller layer:** what Attachment 14 requires CK-Labs to do for the covered sale.
2. **Consumer checkout layer:** which legal entity is identified to the player as merchant, seller, payment recipient or contracting party for that transaction.
3. **Payment-processing layer:** which provider processed, authorized, settled, refunded, reversed or charged back the payment.
4. **Tax layer:** which party calculated, collected, documented and remitted the relevant indirect tax under the actual arrangement and applicable law.
5. **TycoonX entitlement layer:** which authoritative payment event caused CK-Labs to grant, preserve, restore, reverse or correct Diamonds or VIP.
6. **Apple reporting/invoice layer:** what token, transaction, correction, commission, fee, report and invoice state exists with Apple.

One label cannot safely answer all six questions.

## 4. Required transaction lineage

For a qualifying Apple-EU external purchase, retain enough structured lineage to reconcile, where applicable:

- TycoonX account/internal customer identifier;
- TycoonX order-attempt identifier;
- TycoonX product/SKU and exact entitlement;
- Apple external-purchase token/reporting identifier;
- Apple token/reporting status;
- storefront/country and currency;
- Xsolla or other provider order/transaction identifier;
- transaction-specific merchant/provider legal entity where shown;
- gross checkout price and relevant tax status/amount where available;
- authoritative payment state;
- refund, reversal or chargeback state;
- TycoonX entitlement action and idempotency key;
- Apple-reportable correction/refund state;
- Apple commission/fee invoice or reconciliation reference where applicable; and
- timestamps sufficient to prove purchase, entitlement and reporting sequence.

Do not use a browser return, client success screen, Apple external-purchase token, Xsolla redirect parameter, Support screenshot, local receipt cache or marketing price as authoritative proof of a completed paid entitlement.

## 5. Apple reporting remains separate from TycoonX entitlement delivery

Apple's current reporting guidance requires qualifying external-purchase reports **within 15 days after the end of the calendar month** and requires all applicable external-purchase tokens to be reported, including tokens that did not result in a completed purchase.

Therefore:

- an Apple token with no completed transaction must not grant Diamonds or VIP;
- a valid completed Xsolla transaction must not be granted twice because Apple reporting is retried;
- an Apple reporting outage must not create a fake payment failure for an otherwise authoritative completed purchase;
- a failed Apple report must enter a retry/reconciliation queue without recreating the TycoonX entitlement;
- transactionless tokens must remain distinguishable from completed payments; and
- late corrections must retain the original transaction identity rather than becoming a second purchase.

Reporting state and entitlement state are separate state machines.

## 6. Refunds, reversals, chargebacks and Apple's commission credit

Current Attachment 14 states that when submitted reports show a refund, Apple reimburses the commission paid on the affected sale through a credit on future invoices.

Operational consequences:

- map the refund to the exact original transaction and Apple reporting lineage;
- report the correction using Apple's then-current required method;
- do not treat an Apple invoice credit as a second refund to the player;
- do not refund the consumer twice because both Xsolla and CK-Labs can see the refund state;
- do not re-grant paid value because an Apple credit or corrected invoice arrives after the entitlement was already unwound; and
- keep chargebacks distinct from ordinary refunds where the provider and Apple reporting model distinguish them.

A chargeback is evidence of a payment dispute. It is not automatically proof that the legitimate TycoonX account owner committed fraud, especially where account compromise or unauthorized payment activity is plausible.

## 7. Three-year Apple audit record requirement

Current Attachment 14 requires complete and accurate books and records concerning amounts payable to Apple from covered sales and refunds claimed, including taxes, for **three years following the date reports are transmitted to Apple**. Apple may audit the records relevant to determining the accuracy of its commission, payments and refunds, and the current text requires the developer to allow the audit to take place **within 30 days of the request**.

CK-Labs should therefore maintain a proportionate Apple-EU evidence set capable of reproducing:

- reported gross sales and corrections;
- refunds claimed;
- taxes relevant to the Apple calculation;
- transaction-to-token/report mapping;
- Apple commission/fee calculations or invoices;
- provider transaction evidence needed to substantiate the report; and
- entitlement reconciliation where necessary to explain a transaction dispute.

Do not interpret the audit clause as a reason to retain every piece of TycoonX player data for three years. Apple's current text limits the audit to data relevant to the Apple commission, payments and refunds. Apply data minimization, access control and retention segmentation.

Where possible, keep accounting/audit records linked through stable transaction identifiers rather than retaining raw chat logs, passwords, full payment credentials, unrelated gameplay history or unnecessary personal data.

## 8. Tax administration and merchant-of-record services do not erase Apple obligations

Xsolla may, for a transaction actually within its merchant-of-record model, administer checkout tax, payment processing, fraud screening, refunds and chargebacks under its own arrangement. That operational service can be valuable, but it does not automatically erase a separate Apple Attachment 14 obligation that applies to CK-Labs.

Likewise, Apple's statement that CK-Labs acts as seller for Section 5 purposes does not authorize CK-Labs to:

- add a second VAT charge where the actual consumer transaction already has a lawful tax-inclusive total;
- contradict the legal entity shown on the transaction receipt;
- issue a second independent monetary refund after the payment merchant has already refunded the same transaction; or
- ignore the signed Xsolla arrangement and applicable consumer law.

The safe rule is reconciliation, not label substitution.

## 9. Product-specific entitlement protection

### Diamonds

Purchased Diamonds are transaction-specific consumable value and do not expire solely because time passes.

- Seller/merchant reconciliation does not grant Diamonds.
- An Apple report does not grant Diamonds.
- A provider refund or reversal may justify correction of the affected purchase where lawful.
- Unrelated legitimately purchased Diamonds must not be deleted merely because another Apple/Xsolla transaction has a seller, tax, invoice or reporting problem.

### One-time 30-Day VIP

30-Day VIP remains a **one-time, non-renewing 30-day entitlement**.

- It begins only from the authoritative valid purchase/activation state under the published product rules.
- Reporting retries, Apple invoice corrections, Xsolla retries or a merchant-record mismatch must not restart or extend the 30-day clock.
- A transaction-specific lawful refund or correction must not silently alter unrelated Diamonds or Lifetime VIP.

### Lifetime VIP

Lifetime VIP remains a **one-time promotional entitlement available only during selected genuine sales windows**. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability.

- Apple seller/reporting treatment does not keep a closed Lifetime VIP window open.
- A token generated during a window is not a completed Lifetime VIP purchase.
- A later genuine sales window may have a different future price.
- Correcting Apple/Xsolla reporting must not add an expiry to a valid Lifetime VIP or retroactively reprice a completed purchase.
- Ending future sales does not cancel an already valid Lifetime VIP solely because the product is no longer in the catalog.

## 10. Pricing, regional pricing and promotions

The existing TycoonX pricing gates continue to control price truthfulness.

For Apple-EU external purchases:

- preserve the final checkout total and currency for the completed transaction;
- preserve enough Apple/provider information to reconcile the commissionable amount;
- do not call an Xsolla or Apple tax/FX movement a CK-Labs sale unless it genuinely is one;
- do not retroactively reprice a completed one-time purchase because a later Apple invoice, fee rate, exchange rate, VAT rule or provider settlement changed;
- do not manufacture a Lifetime VIP discount by briefly increasing the comparison price; and
- keep genuine regional pricing separate from user-specific automated personalized pricing.

A later price decrease does not automatically create a refund, credit or price-match right, and a later increase does not create an additional charge on the already completed one-time purchase, except where mandatory law requires otherwise.

## 11. Account compromise and entitlement abuse

If a player reports that an Apple-EU external purchase or chargeback occurred during an account compromise:

- preserve the payment and account-security investigations as separate factual tracks;
- do not infer that possession of an Apple external-purchase token proves the legitimate account owner authorized the payment;
- do not treat a merchant-record mismatch as proof of player abuse;
- do not freeze unrelated paid value merely because internal reconciliation is incomplete unless a separate proportionate security basis exists; and
- restore or correct state where reasonably verifiable and technically feasible under the existing account-compromise and payment rules.

Fraud findings should be evidence-based, not inferred from the existence of a dispute alone.

## 12. Provider outage, replacement and contract change

If Apple reporting, Xsolla, authentication or another required provider is unavailable:

- do not fabricate Apple reports or provider transaction states;
- do not grant value on an expected payment;
- preserve authoritative completed events for later idempotent reconciliation;
- keep Apple reporting retries separate from entitlement retries;
- preserve original timestamps and transaction identity; and
- communicate accurately without promising a refund or entitlement unsupported by the transaction state.

Before replacing Xsolla or materially changing its merchant model for Apple-EU transactions, repeat the Section 5.2(D) provider-contract analysis and the seller/merchant/tax/reporting matrix before the first affected purchase.

## 13. Business sale, merger, reorganization and successor operator

The Apple Developer Program License Agreement has its own assignment and account-transfer rules. A sale of the TycoonX business does not automatically transfer every Apple contractual obligation to a successor merely because the public TycoonX Terms allow a lawful business transfer.

Before a successor operates an affected Apple-EU payment path:

- verify the Apple developer-account/app-transfer or assignment path;
- determine which entity is responsible for pre-transfer Apple reports, invoices, audit records and later corrections;
- preserve the three-year audit evidence for the legally responsible entity;
- preserve valid TycoonX paid entitlements through the transition where required; and
- do not use a business transfer to erase mandatory consumer remedies or reporting obligations.

## 14. Permanent TycoonX shutdown

Permanent service discontinuation does not erase transaction, tax, refund, accounting or Apple audit obligations that survive the live service.

If TycoonX permanently closes:

- stop future paid offers in an orderly channel-specific sequence;
- preserve records needed for pending transactions, refunds, chargebacks and Apple reports;
- retain Apple-audit records for the required applicable period even if gameplay servers are gone;
- keep privacy/security access controls on the retained records; and
- preserve mandatory consumer remedies relating to undelivered or non-conforming paid digital products.

Lifetime VIP remains defined by the commercial operating lifetime of the TycoonX Service and does not promise perpetual operation. Shutdown does not authorize CK-Labs to waive remedies required by mandatory law.

## 15. Minimum production regression scenarios

Before enabling or materially changing the Apple-EU external-payment path, test at least:

1. Xsolla checkout identifies its actual transaction legal entity while internal Apple reconciliation separately records CK-Labs's Attachment 14 seller responsibility.
2. An Apple external-purchase token with no Xsolla payment creates no entitlement.
3. A completed Xsolla Diamond purchase grants once even if Apple reporting retries.
4. A duplicate Xsolla webhook and duplicate Apple report do not duplicate Diamonds.
5. A 30-Day VIP payment starts the one-time 30-day entitlement once and reporting retries do not reset it.
6. A closed Lifetime VIP window cannot be reopened by a stale token, cached product or reporting retry.
7. A Lifetime VIP purchase made in a valid genuine window remains valid when future sales close.
8. A provider refund unwinds only the affected entitlement/value and is reported to Apple without creating a second player refund.
9. An Apple refund-related invoice credit does not re-grant the entitlement.
10. A chargeback with an account-compromise claim enters both payment and security review without automatically finding fraud.
11. A failed Apple report retries idempotently while the authoritative completed payment remains mapped correctly.
12. A transactionless Apple token is included in reporting where required but never treated as a sale.
13. A provider outage does not create fabricated payment or report state.
14. A merchant/provider legal-entity change blocks new affected purchases until the contract/reporting/tax matrix is revalidated.
15. A sample Apple audit packet can trace report to transaction/refund/invoice without exposing unrelated player data.
16. A simulated business transfer preserves responsibility for pre-transfer reports, refunds and retained audit evidence.

## 16. Release evidence packet

Keep a lightweight dated packet containing:

- current Apple Attachment 14 effective-date evidence for the CK-Labs account;
- selected Apple EU payment election;
- relevant Xsolla/provider legal entity and signed relationship evidence;
- seller/merchant/payment/tax/entitlement/reporting role matrix;
- one representative external-purchase token/report mapping;
- one representative successful transaction reconciliation;
- one representative refund/correction reconciliation;
- Apple invoice/commission reconciliation evidence where applicable;
- audit-retention owner and deletion date calculation;
- provider-change escalation owner;
- Support routing for unauthorized payment/refund disputes; and
- regression results from Section 15.

Do not place full card data, passwords, raw authentication secrets, unnecessary support conversations or unrelated gameplay data in this packet.

## 17. P0 blockers

Do not enable or materially expand the affected Apple-EU external-purchase flow if:

- CK-Labs cannot determine which Apple Attachment 14 terms currently apply to the account;
- the provider relationship cannot satisfy the Section 5.2(D) third-party sale/reporting obligations where they apply;
- Apple contractual seller status and the transaction-specific Xsolla/other merchant role are being treated as mutually exclusive without analysis;
- transaction-to-token-to-entitlement-to-report lineage cannot be reproduced;
- Apple reporting can duplicate a TycoonX entitlement;
- refunds can produce a double monetary refund or double entitlement correction;
- the Apple audit record set cannot be retained for the current required period;
- a provider or business transfer would orphan required reports, invoices or audit evidence;
- the flow can delete unrelated purchased Diamonds, reset an unrelated 30-Day VIP clock or invalidate a valid unrelated Lifetime VIP; or
- the implementation attempts to waive mandatory EU/German consumer rights.

## 18. Current official source checkpoint

Rechecked **September 4, 2026**:

- Apple Developer Program License Agreement, Attachment 14: https://developer.apple.com/support/terms/apple-developer-program-license-agreement/
- Apple Developer News, August 18, 2026 EU business-term update: https://developer.apple.com/news/
- Apple reporting tokens and transactions: https://developer.apple.com/help/app-store-connect/making-payments-to-apple/reporting-tokens-and-transactions
- Apple payment options in the EU: https://developer.apple.com/support/payment-options-on-the-app-store-in-the-eu/

The current Apple source states, among other things, that:

- Attachment 14 is effective October 1, 2026 or the date the developer signs the agreement including Attachment 14, whichever is later;
- for covered Section 5 sales the developer acts as seller in its own name and on its own account;
- where a covered sale is made by someone other than the developer, the developer must have an agreement applying the Attachment requirements and remains responsible for ensuring the required reports and Apple commissions/fees are handled;
- qualifying external-purchase reports are due within 15 days after calendar month-end and include applicable tokens that did not result in a purchase;
- refund reporting can produce a future Apple invoice credit for the commission on the refunded sale;
- records concerning covered amounts payable to Apple, refunds claimed and taxes must currently be retained for three years following report transmission; and
- an Apple audit request under this section must currently be accommodated within 30 days.

Recheck the live Apple agreement before implementation because Apple program terms, rates, reporting mechanics and provider requirements can change.

## 19. Canonical legal and localization impact

This gate is operational. It does not change the current player-facing meaning of the canonical TycoonX Terms, Purchases & Refunds Policy, Privacy Policy or Community Standards.

The canonical public framework already:

- identifies Apple, Google Play and the official TycoonX webshop using Xsolla as authorized channels;
- says an Xsolla group company **may** act as merchant of record depending on the checkout arrangement;
- keeps CK-Labs responsible for TycoonX entitlement delivery after valid payment confirmation;
- preserves mandatory consumer rights;
- keeps 30-Day VIP one-time and non-renewing;
- keeps Lifetime VIP limited to selected genuine sales windows; and
- keeps refunds, chargebacks, fraud, account compromise and entitlement correction transaction-specific.

Accordingly, adding this internal Apple seller/merchant/audit gate does not by itself require reopening the already completed localized legal documents. If the public consumer-facing seller, merchant, tax, refund or contracting-party meaning later changes materially, update the canonical English source first and then synchronize all affected localized pages.