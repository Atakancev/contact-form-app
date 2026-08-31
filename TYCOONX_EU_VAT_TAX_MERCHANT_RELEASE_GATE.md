# TycoonX EU VAT, Tax & Merchant Responsibility Release Gate

Last reviewed: 2026-08-31
Owner: CK-Labs
Scope: TycoonX Apple App Store purchases, Google Play purchases, the official TycoonX webshop using Xsolla, any future alternative billing or external purchase flow, refunds, chargebacks, regional pricing, promotions, receipts and tax evidence.

## Purpose

TycoonX uses several payment channels that can allocate merchant, payment, VAT and refund responsibilities differently. The legal risk is not simply whether VAT is mentioned in the Terms. The operational risk is charging, reporting, refunding or recording tax as though every channel has the same seller and tax model.

This gate keeps those roles separate while preserving CK-Labs' commercial flexibility. It is an implementation and accounting evidence gate. It does not replace professional tax advice, the TycoonX Terms of Service, the Purchases & Refunds Policy, platform agreements, Xsolla's transaction-specific terms, or mandatory consumer law.

## P0 rules

### 1. Classify the merchant and tax model before enabling a checkout

For every purchasable TycoonX SKU and channel, record at minimum:

- product ID and product type: Diamonds, one-time 30-Day VIP, Lifetime VIP, or another product;
- channel and checkout route;
- consumer-facing seller or merchant shown for that transaction;
- payment processor;
- who determines the applicable indirect tax;
- who charges and collects that tax from the consumer;
- who remits that tax to the authority;
- who issues the transaction receipt or tax document where required;
- who controls refunds and tax reversals;
- country/storefront and currency;
- whether the displayed consumer price is tax-inclusive where required; and
- the contract, platform rule, provider configuration or other evidence supporting that allocation.

Do not infer merchant or tax responsibility merely from the fact that a provider SDK is installed. The actual transaction configuration and current contractual terms control.

### 2. Apple App Store purchases and alternative payments are different tax paths

For Apple In-App Purchase:

- preserve the relevant App Store transaction, proceeds and tax reports and the applicable Apple legal-entity/agent/commissionaire arrangement;
- do not create a second CK-Labs consumer VAT charge on top of a completed Apple checkout simply because TycoonX also maintains an internal entitlement ledger;
- do not assume that Apple's tax treatment is identical in every storefront, because the Paid Apps Agreement and tax treatment vary by region and developer status; and
- reconcile refunds and reversals against Apple-authoritative transaction state rather than manually inventing a separate VAT adjustment inside the game.

For an EU alternative payment method or external purchase route permitted under Apple's applicable terms:

- treat it as a separate tax/compliance path from Apple In-App Purchase;
- Apple's current EU guidance says the developer is responsible for determining taxability, charging and collecting applicable taxes, remitting them, providing required documentation and meeting country-specific tax obligations for alternative-payment sales;
- Apple's current EU guidance also requires an EU-specific VAT ID for use of alternative payment options on EU storefronts;
- if CK-Labs uses Xsolla or another provider that acts as merchant of record for the external transaction, verify that the actual provider contract and Apple program terms fit together. Do not assume that saying "merchant of record" automatically satisfies every obligation CK-Labs has toward Apple or a tax authority; and
- retain the alternative-transaction reporting and tax evidence required by the applicable Apple terms.

Apple's unified EU business terms take effect on October 1, 2026. Re-check this section against the then-current Apple Developer Program License Agreement before enabling or materially changing any EU alternative payment flow.

### 3. Google Play Billing and alternative billing are different VAT paths

For EU customer purchases using Google Play's billing system, Google's current Play Console guidance states that Google is responsible for determining, charging and remitting VAT. CK-Labs should not calculate and remit a second consumer VAT amount for the same Google Play Billing transaction.

For an EU purchase using an eligible Google alternative billing system, Google's current guidance places responsibility for determining, charging and remitting the VAT due on the developer. Therefore:

- do not reuse the Google Play Billing tax assumption for an alternative transaction;
- preserve the seller choice, alternative transaction record and required Google reporting;
- confirm the actual contracting seller and payment-provider arrangement before launch;
- if another provider is intended to act as merchant of record, confirm that this structure is permitted by the applicable Google program and is reflected consistently in the consumer-facing checkout; and
- do not grant paid TycoonX value merely because a local alternative-payment screen says success. Grant only after the authoritative transaction is validly confirmed.

Google currently supports tax-inclusive pricing in Germany and many other markets. Where the consumer-facing legal regime requires an all-in price, the TycoonX marketing surface must not contradict the final tax-inclusive checkout total.

### 4. Xsolla merchant-of-record status must be verified for the actual TycoonX project

Xsolla currently describes itself as Merchant and Seller of Record for its covered commerce model and states that, in that role, it calculates, collects and pays taxes including VAT.

For the TycoonX webshop:

- verify the signed CK-Labs/Xsolla agreement and live project configuration rather than relying only on a public marketing statement;
- retain the exact Xsolla legal entity shown for the transaction where available;
- retain transaction ID/order ID, price, currency, tax summary and receipt evidence;
- preserve Xsolla's transaction-specific refund and chargeback state;
- do not issue a second CK-Labs VAT charge for a consumer transaction where Xsolla is actually the seller/merchant responsible for that VAT;
- do not describe CK-Labs as the payment merchant on a receipt if the actual transaction names Xsolla as the merchant; and
- if a future Xsolla arrangement stops using a merchant-of-record model, reclassify tax, receipt, refund and consumer-contract responsibilities before accepting the first affected payment.

The canonical TycoonX legal wording intentionally says an Xsolla group company **may** act as merchant of record depending on the checkout arrangement. Keep that qualification.

### 5. Direct CK-Labs EU consumer sales require a separate VAT go-live decision

If CK-Labs ever becomes the direct seller for an EU consumer purchase instead of using the tax model of Apple, Google Play Billing or an Xsolla merchant-of-record transaction, do not launch merely because the payment processor can charge a card.

For electronically supplied B2C services, EU VAT Directive Article 58 generally places taxation where the consumer is established, has a permanent address or usually resides. The Article 59c EUR 10,000 threshold is a narrow exception that applies only when all statutory conditions are met, including the supplier-establishment conditions. It is not a generic "first EUR 10,000 is tax-free" rule.

Before a direct EU consumer sale, document:

- whether CK-Labs is the direct supplier for VAT purposes;
- the customer's VAT place of supply;
- the applicable VAT rate and tax-inclusive consumer price;
- the registration route, including whether the Union or non-Union One Stop Shop is available and appropriate;
- legally sufficient customer-location evidence and retention;
- refund/credit-note treatment;
- invoice/receipt obligations; and
- any local special rule that changes the general outcome.

Do not collect extra location or identity data merely because tax compliance exists. Collect only what is lawfully necessary for the actual tax and fraud purpose, and apply the Privacy Policy and retention rules.

### 6. No double VAT, no double refund, no double entitlement correction

A single purchase must have one coherent tax and entitlement lifecycle.

Never:

- add CK-Labs VAT on top of a provider checkout that already treated the displayed amount as the tax-inclusive final consumer price unless a lawful transaction structure specifically requires it;
- remit the same consumer VAT twice because both CK-Labs and a provider report tax fields;
- refund a tax amount independently when the merchant/provider controls the transaction refund and will already reverse the tax;
- grant Diamonds or VIP twice because a provider refund/reversal webhook and a tax/accounting correction arrive separately; or
- remove unrelated paid entitlements because one transaction has a tax correction.

For a refund or chargeback, reconcile the monetary transaction first and then apply the corresponding TycoonX entitlement correction once. A refunded Diamond bundle can justify correction of that bundle. It does not by itself justify revoking an unrelated valid Lifetime VIP or active 30-Day VIP.

### 7. Tax and FX changes affect future prices, not completed one-time purchases

CK-Labs may change future Diamond bundle prices/content, 30-Day VIP prices, Lifetime VIP prices, regional prices, currencies and promotions. Platform/provider tax rates, VAT treatment and FX conversion can also change local future prices.

For a completed one-time transaction:

- the final binding checkout total and currency remain the transaction's price, subject to mandatory-law remedies and lawful correction of an obvious error;
- a later VAT-rate decrease does not automatically create a price-match or retroactive credit;
- a later VAT-rate increase does not create a new extra charge on that completed one-time purchase;
- a later exchange-rate movement does not rewrite the completed purchase price; and
- provider/bank FX effects on the settlement or refund must not be misrepresented as CK-Labs retroactively changing the original price.

Lifetime VIP may use different genuine gross prices in different countries or genuine sales windows. This does not create an expectation of continuous availability or a right to a later lower price.

### 8. Promotions and coupons must feed the tax-authoritative transaction, not bypass it

A promotion, coupon, regional price or Lifetime VIP sale must resolve to a legally supportable final transaction total before entitlement is granted.

- Do not hard-code a separate "VAT amount" into the TycoonX gameplay ledger as though it were part of the player's Diamond or VIP entitlement.
- Preserve enough offer and transaction evidence to explain the gross price, discount and tax result where required.
- A coupon abuse correction must target the affected offer/transaction and must not automatically alter unrelated purchases.
- An invalid region/tax representation can be investigated, but ordinary travel, migration, a different device language, or a provider-routing difference is not by itself proof of tax fraud.

### 9. Receipts, invoices and accounting records must match the actual transaction role

Keep the consumer receipt and the CK-Labs accounting record conceptually separate.

For each material transaction or settlement period, preserve the provider evidence reasonably needed to reconcile:

- transaction/order ID;
- product/SKU;
- gross consumer price and currency;
- tax amount or tax status where the provider exposes it;
- merchant/seller/legal entity where available;
- provider fees/commission separately from consumer VAT;
- refund, reversal or chargeback amount;
- payout/proceeds amount; and
- the authoritative entitlement action taken in TycoonX.

A provider fee invoice to CK-Labs is not the same document as the consumer's purchase receipt. A CK-Labs internal accounting entry is not proof that the consumer paid a different amount from the provider-confirmed checkout.

### 10. German e-invoicing rules must not be misapplied to consumers

Germany's current mandatory e-invoicing transition under UStG § 14 concerns transactions between domestic businesses, subject to the statutory transition rules. The Federal Ministry of Finance's March 23, 2026 FAQ expressly says private end consumers are not affected by these B2B e-invoicing rules.

Therefore:

- do not force TycoonX consumers to receive XRechnung/ZUGFeRD solely because Germany has introduced mandatory B2B e-invoicing;
- do assess e-invoice obligations for relevant domestic B2B relationships, such as qualifying CK-Labs supplier/provider transactions, separately; and
- keep consumer contract-confirmation and durable-medium obligations separate from B2B tax-invoice rules.

### 11. ViDA is a monitoring item, not a reason to invent 2026 duties

The EU VAT in the Digital Age package was adopted in March 2025 and entered into force in April 2025, but significant measures are phased in through 2035. The European Commission currently identifies OSS/IOSS clarifications from January 1, 2027, later single VAT registration changes, and cross-border B2B digital reporting from July 1, 2030.

Do not rewrite TycoonX consumer terms as though all future ViDA obligations already apply on September 1, 2026. Instead, re-check the tax operating model when each relevant phase becomes applicable.

## Channel matrix to maintain

| Channel | Consumer payment/tax checkpoint | CK-Labs release rule |
| --- | --- | --- |
| Apple In-App Purchase | Apple transaction and applicable agent/commissionaire/tax arrangement | Preserve Apple tax/proceeds evidence; do not double-charge consumer VAT |
| Apple-permitted EU alternative payment | Developer tax responsibility under current Apple EU guidance | Confirm VAT registration, tax engine, merchant/provider structure and required Apple reporting before launch |
| Google Play Billing | Google currently determines, charges and remits EU VAT | Do not separately remit the same consumer VAT; reconcile Google-authoritative order state |
| Google eligible alternative billing | Developer currently responsible for VAT under Google's guidance | Confirm seller, tax engine, reporting and receipt model before first sale |
| TycoonX webshop with Xsolla MoR | Xsolla tax responsibility where the live transaction is actually within its MoR model | Verify signed agreement/configuration and preserve transaction-specific merchant/tax evidence |
| Future direct CK-Labs EU checkout | CK-Labs may become direct supplier | Complete Article 58/place-of-supply, VAT registration/OSS and invoice/record analysis before launch |

## Refund and chargeback example

A German player buys a Diamond bundle through Google Play Billing for a tax-inclusive price. Google later confirms a full refund. The safe TycoonX flow is:

1. treat Google's completed order/refund state as the monetary transaction source;
2. do not create a second manual CK-Labs consumer VAT refund for the same purchase;
3. correct the corresponding Diamond value once according to the Purchases & Refunds Policy and mandatory law;
4. preserve unrelated 30-Day VIP and Lifetime VIP; and
5. reconcile the refund in CK-Labs accounting using the provider statement rather than changing the historic checkout price.

The same logic applies to an Xsolla MoR transaction, except the transaction-specific Xsolla merchant/tax/refund record is the relevant monetary source.

## Release QA

- [ ] Apple IAP, Google Play Billing and Xsolla web purchases have separate documented merchant/tax paths.
- [ ] Any Apple EU alternative payment path has a current VAT-registration and tax-responsibility review.
- [ ] Any Google alternative billing path has a current VAT and seller-responsibility review.
- [ ] Xsolla merchant-of-record status is verified against the actual TycoonX agreement/project, not assumed from marketing copy.
- [ ] No checkout can charge the same consumer VAT twice.
- [ ] No refund path can reverse the same monetary transaction or entitlement twice.
- [ ] Final consumer prices include mandatory taxes/charges where applicable law requires an all-in price.
- [ ] Tax/FX changes only affect future purchase pricing unless mandatory law or a lawful transaction correction requires otherwise.
- [ ] Lifetime VIP remains a one-time limited-window offer and is not converted into recurring billing for tax convenience.
- [ ] Purchased Diamonds, 30-Day VIP and Lifetime VIP are isolated from unrelated tax corrections.
- [ ] Receipts identify the real merchant/payment channel and do not falsely attribute Xsolla/Apple/Google transactions to a different seller.
- [ ] Provider fee/commission invoices are not confused with consumer purchase receipts.
- [ ] German B2B e-invoicing is not presented as a consumer-purchase requirement.
- [ ] Direct CK-Labs EU sales cannot go live without an Article 58/OSS/place-of-supply decision.
- [ ] Privacy retention/minimization is applied to tax-location and payment evidence.

## Current legal and provider checkpoint

This gate reflects the position checked on August 31, 2026, including:

- Council Directive 2006/112/EC, especially Article 58 for B2C electronically supplied services and Article 59c's limited EUR 10,000 exception;
- European Commission VAT One Stop Shop guidance, including the Union and non-Union schemes;
- European Commission VAT in the Digital Age roadmap, with phased measures through 2035;
- German Federal Ministry of Finance e-invoice FAQ dated March 23, 2026, which distinguishes the domestic B2B e-invoice regime from private end consumers;
- Apple's current App Store Connect EU tax guidance for alternative payment transactions and the October 1, 2026 unified EU terms transition;
- Google's current Play Console VAT guidance distinguishing Google Play Billing from eligible alternative billing; and
- Xsolla's current published Merchant and Seller of Record tax explanation, subject to verification of CK-Labs' signed transaction arrangement.

## Founder-protective interpretation

Nothing in this gate prevents CK-Labs from using regional prices, changing future gross prices, changing Diamond bundle sizes, using genuine promotions, changing currencies, ending a Lifetime VIP sales window, choosing a different payment provider, or replacing an infrastructure/payment arrangement where lawful. The protection comes from knowing which entity is the merchant/tax actor for each transaction, preventing double taxation and double entitlement corrections, preserving authoritative records, and keeping mandatory consumer rights intact.

A provider's tax service does not eliminate CK-Labs' own accounting, income-tax or business-record obligations. Conversely, CK-Labs' internal accounting obligations do not justify charging a consumer VAT twice or rewriting a completed provider transaction.