# TycoonX Store, Webshop & Legal Release Checklist

Last reviewed: 2026-08-24  
Operator/business name used in player-facing documents: **CK-Labs**

This is an operational release checklist for TycoonX purchases through Apple App Store, Google Play, and the official web shop using Xsolla. It is not a substitute for qualified legal advice.

## 1. Public legal URLs

### Required or strongly recommended
- **Privacy Policy** → `/tyconx-privacy-policy`
- **Support** → `/tyconx-support`
- **Terms of Service** → `/tyconx-terms-of-service`
- **Purchases & Refunds Policy** → `/tyconx-purchase-refund-policy`
- **German legal notice / Impressum** → must be added before the commercial setup is treated as complete.

Technical route names may remain `tyconx` for compatibility, but every rendered title, heading, description, checkout message, legal paragraph, and support message must spell the game name **TycoonX**.

## 2. Product definitions

| TycoonX product | Intended purchase type | Core rule |
| --- | --- | --- |
| Diamond packs | Consumable / one-time digital content | Purchased Diamonds do not expire solely because time passes. Do not create duplicate value on restore. |
| One-time 30-Day VIP | Non-renewing / one-time 30-day entitlement | Exactly 30 consecutive days. No automatic renewal unless a separate recurring product is explicitly introduced. |
| Lifetime VIP | One-time non-consumable entitlement | Limited-time promotional sale only. Restorable while valid. “Lifetime” means the commercial operating lifetime of TycoonX for that account. |

Lifetime VIP must never be marketed as a permanently available product. CK-Labs may run genuine sales windows, stop selling it, change the price for later genuine sales windows, or never offer it again. Previous availability does not create an expectation of return.

## 3. Apple App Store

### Product configuration
- Diamond packs: **Consumable**.
- Lifetime VIP: **Non-Consumable**.
- 30-Day VIP: use an Apple-approved non-renewing entitlement structure; do not configure it as auto-renewable unless TycoonX intentionally launches a recurring subscription with separate recurring disclosures.

### Purchase screen
Before triggering the Apple purchase sheet, clearly show the product, current localized App Store price, important benefits or quantity, duration where applicable, one-time/non-renewing status, and links to Terms and Purchases & Refunds.

For Lifetime VIP, clearly show near the purchase control:
- limited-time promotional availability;
- one-time purchase;
- current price;
- current material VIP benefits; and
- that “Lifetime” means the commercial operating lifetime of TycoonX while the Service continues, subject to mandatory consumer law.

Do not use wording such as “VIP forever no matter what” or “guaranteed forever.”

### Limited-time Lifetime VIP sales window
Apple currently tells developers to announce an intended In-App Purchase removal from sale and stop merchandising it at least 31 days before removal, and notes that customers who already bought a removed non-consumable retain access through StoreKit/App Store Server API records.

Operational rule for TycoonX:
- do **not** use App Store Connect “Remove from Sale” as a casual short-sale countdown mechanism without first checking the current Apple removal guidance;
- for a shorter Lifetime VIP promotion, verify an App Review-safe product/offer presentation that closes new purchases at the genuine advertised end while preserving restoration for prior purchasers, rather than assuming the underlying non-consumable SKU itself must be removed from sale;
- stop any App Store merchandising/promotion of the Lifetime VIP when the genuine offer closes;
- if the IAP itself will actually be removed from sale, follow Apple’s then-current notice/removal guidance and preserve restoration for existing purchasers.

### Restore Purchases
TycoonX should expose an obvious user-initiated Restore Purchases action where applicable.

- validate authoritative transaction/entitlement state;
- restore valid Lifetime VIP;
- restore a still-valid 30-Day VIP without extending it;
- never duplicate Diamond consumables;
- keep restore idempotent;
- log enough transaction and entitlement information for support/audit purposes;
- never grant paid value solely because a client claims payment succeeded.

### Account deletion + restore test
Account deletion must not be implemented as an accidental paid-entitlement destruction mechanism.

Test this explicitly:
1. user purchases Lifetime VIP through Apple;
2. user deletes the TycoonX account and the deletable gameplay/profile data is removed;
3. the Apple purchase record remains independently verifiable where Apple retains it;
4. the same purchaser creates or signs into an eligible TycoonX account;
5. Restore Purchases re-links the valid Lifetime VIP after reasonable verification;
6. deleted gameplay progress, consumed Diamonds, inventory, and social history are **not** recreated merely because VIP was restored.

Explain the consequence of account deletion before final confirmation where platform rules or applicable law require it.

### Refunds
- Do not promise “no refunds.”
- Apple controls its App Store refund-request process.
- CK-Labs may troubleshoot entitlement delivery but should not claim control over Apple’s refund decision.
- When Apple reports a refund/revocation, reconcile the associated TycoonX entitlement or virtual value without confiscating unrelated legitimate purchases.

## 4. Google Play

- Use Google Play Billing for in-app digital products where Google Play policy requires it, unless a valid regional/program/legal exception applies.
- Configure Lifetime VIP as a one-time **non-consumable** product if that remains the intended Google Play model. Google currently describes non-consumables as purchased once and permanently associated with the purchaser’s Google Account.
- Configure one-time 30-Day VIP so it does not silently become recurring billing.
- If players may legitimately buy another 30-Day VIP later, confirm the Google product configuration is repeatable after the prior entitlement is provisioned/expired; a non-consumable configuration would permanently block repurchase.
- Product metadata, price, duration, and promotional claims must be accurate and not misleading.
- Regional prices may differ. Keep country/region eligibility and storefront rules separate from any truly personalized automated price.
- Reconcile refunds, cancellations, chargebacks, and invalid purchases to the corresponding TycoonX entitlement or paid value.
- If Google processes the refund, TycoonX should consume the resulting provider status rather than promise an independent contradictory refund outcome.
- Test account deletion and later entitlement recovery so a still-valid non-consumable Lifetime VIP can be re-linked to the same verified purchaser without recreating deleted gameplay state or Diamond consumables.

## 5. Official TycoonX web shop using Xsolla

Before launch, verify the exact Xsolla contract and checkout configuration in use rather than assuming every Xsolla setup is identical.

Where an Xsolla entity acts as merchant of record, the transaction-specific checkout/receipt should identify the applicable merchant and govern payment processing, payment methods, transaction taxes/VAT, fraud checks, refunds, disputes, and chargebacks under its terms and mandatory law.

CK-Labs remains responsible for correctly delivering the corresponding TycoonX entitlement after valid transaction confirmation.

The web shop must not be linked or promoted inside Apple/Google apps in a way that violates the applicable platform, country, program, or law.

For Lifetime VIP sold through the web shop, maintain enough lawful transaction/entitlement evidence to distinguish account deletion from cancellation/refund of the underlying purchase. Define a verified re-link process for a purchaser who deletes a TycoonX account and later proves control of the same purchase identity, subject to the Xsolla contract, privacy law, and mandatory consumer rights.

## 6. Prices and promotions

CK-Labs may change for future purchases:
- Diamond bundle prices or quantities;
- 30-Day VIP price;
- Lifetime VIP price in a future genuine sales window;
- regional prices;
- supported currencies;
- product availability; and
- promotions.

Operational rules:
- use the final total price shown before confirmation for that transaction, subject to lawful correction of obvious errors;
- do not retroactively charge more for an already completed one-time purchase because the price later increases;
- do not promise an automatic refund, credit, price match, extra Diamonds, or extra VIP time merely because a later price is lower;
- include or display mandatory taxes and unavoidable price components as required;
- let platform/provider FX, tax, and local pricing mechanisms update local prices where applicable;
- never use fake countdowns, fake scarcity, fake crossed-out prices, or false discount claims;
- where a jurisdiction imposes a reference-price or price-history rule for the specific product/offer, apply it to that offer;
- if automated decision-making ever truly personalizes an individual consumer price and the law requires disclosure, disclose that fact before purchase.

Ordinary country-based, storefront-based, tax-based, currency-based, or generally available regional pricing should not be described internally as “personalized pricing” merely because prices differ by region.

## 7. Obvious errors and accidental grants

Terms and server behavior should distinguish a genuine completed purchase from a technical mistake.

Where legally permitted:
- correct future catalog/configuration errors;
- cancel and refund an unfulfilled obviously erroneous transaction rather than grant unintended extreme value;
- remove duplicate grants caused by retry/replay/webhook/store-notification bugs;
- delay entitlement delivery while a payment remains pending or fails validation;
- use reliable server/store/payment records when a stale or manipulated client display conflicts with authoritative records;
- never use an “error” clause to override a genuinely binding consumer contract where mandatory law says otherwise.

## 8. Promotions, coupons, free grants, and goodwill

Promotions may have genuine eligibility conditions such as time, country, platform, account, redemption count, purchase history, or quantity.

Protect against:
- duplicate coupon redemption;
- refund cycling;
- account farming;
- false region/tax/eligibility information;
- automated redemption abuse; and
- exploiting a technical promotion bug.

Corrections should target the invalid promotional value and not unrelated legitimate purchases.

A voluntary goodwill credit, free VIP extension, discretionary refund, compensation item, beta benefit, tester grant, or bonus beyond a legal obligation should be recorded as discretionary. It should not be worded as an admission of liability or a promise that every future user will receive the same treatment.

## 9. Refunds, chargebacks, and payment reversals

Subject to mandatory law, a refunded/reversed purchase should not leave the user with both the returned money and the corresponding paid digital value.

The legal and server model should allow CK-Labs to:
- revoke the refunded VIP entitlement;
- remove corresponding unspent purchased Diamonds;
- reverse directly linked invalid downstream game transactions where reasonably necessary;
- apply an equivalent correction if the refunded value has already been consumed/transferred, only where lawful;
- temporarily restrict purchase/economy functions during a genuine payment investigation; and
- enforce against proven deliberate payment fraud or abusive chargebacks.

Do not use a refund correction to confiscate unrelated legitimate paid value.

Refunds should ordinarily follow the payment channel/provider and original payment method where the provider requires it. Do not promise CK-Labs can control bank/card FX differences or provider fees it does not control.

## 10. German/EU digital-product and withdrawal rules

Do not attempt to waive mandatory consumer law.

Important areas include:
- supply of digital products;
- conformity and defects;
- required/security updates;
- cure and remedy rights;
- price reduction;
- termination and reimbursement;
- lawful modifications of continuously supplied digital products; and
- statutory withdrawal rights.

For immediately supplied paid digital content such as Diamonds, do not assume the statutory withdrawal right automatically disappears. Where applicable, the legally required express consent to early performance, acknowledgement of loss of the withdrawal right, and contractual confirmation must actually be obtained.

30-Day VIP and Lifetime VIP are supplied over time and must not be treated as legally identical to a consumed Diamond bundle merely because they use a one-time payment.

## 11. German checkout requirements

Where German consumer e-commerce rules apply and CK-Labs is the contracting trader for the relevant online checkout:

- show required pre-contract information clearly and at the required time;
- immediately before the order, prominently show the material information required for a payment obligation;
- make the final order control clearly communicate that the order creates a payment obligation;
- provide technical means to identify/correct input errors where required;
- electronically acknowledge receipt of the order where required; and
- allow the contractual terms/AGB to be retrieved and stored in reproducible form where required.

Do not rely on hidden text or an ambiguous “Continue” button to create a German consumer payment obligation.

## 12. German electronic withdrawal function, effective 19 June 2026

This is a **P0 web-checkout compliance item**.

For covered distance contracts concluded through an online user interface while a statutory withdrawal period is running, German §356a BGB requires an electronic withdrawal function.

When CK-Labs is the responsible contracting trader/interface, verify that the function is:
- clearly labelled with “Vertrag widerrufen” or an equivalent unambiguous wording;
- continuously available during the withdrawal period;
- prominently placed and easy to access;
- able to collect the legally required identification/contact information;
- followed by a separate clear confirmation action; and
- followed by an immediate receipt confirmation on a durable medium containing the required information, date, and time.

If Apple, Google, or Xsolla is the contracting merchant or controls the relevant purchase/withdrawal interface, verify which party actually provides the legally compliant route. Do not merely assume that “the payment provider handles it.” Record the verified responsibility per channel before launch.

The electronic function does not replace other legally valid withdrawal methods.

## 13. Security, exploits, and corrupted game state

Terms should preserve CK-Labs’ ability, subject to mandatory law, to:
- investigate exploits, manipulated clients, invalid receipts, unauthorized scripts/bots/APIs, bypasses, and payment abuse;
- rely on reliable authoritative server logs, signed store records, transaction records, backups, and audit evidence;
- reverse exploit-generated trades, transfers, or rewards;
- recalculate corrupted balances, inventory, company state, market activity, scores, or entitlements;
- temporarily freeze risky functions during a security incident; and
- restore compromised accounts where reasonably verifiable without promising that every unauthorized action can always be undone.

## 14. Updates, providers, and supported versions

TycoonX may reasonably require supported versions for security, anti-fraud, compatibility, legal, or platform reasons.

Plan for lawful replacement/discontinuation of:
- payment providers;
- hosting/database/storage providers;
- authentication providers;
- APIs/platform integrations; and
- unsupported app/OS versions.

Do not promise that a particular provider, device, OS, or platform will exist forever. Preserve valid paid entitlements through transitions where required and reasonably possible.

## 15. Permanent shutdown and business transfer

Public legal copy must explain that online operation depends on the continued commercial operation of TycoonX.

- Lifetime VIP means the commercial lifetime of TycoonX for that purchasing account, not the biological lifetime of the customer.
- TycoonX may be discontinued for valid legal, technical, security, platform, commercial, force-majeure, or business reasons.
- Virtual assets do not automatically become cash-redeemable on shutdown.
- Mandatory refund, termination, price-reduction, warranty, notice, and other remedies remain intact.
- A sale, merger, reorganization, or successor operator may transfer the TycoonX business and relevant contracts/data where legally permitted, with required notice/consent/objection rights preserved.
- A business transfer should not by itself erase an otherwise valid paid entitlement if the successor continues TycoonX.

## 16. Privacy and payment data

The Privacy Policy and store privacy disclosures should match actual behavior for:
- account identifiers;
- gameplay/economy state;
- transaction and entitlement validation data;
- refund/revocation/chargeback data;
- entitlement restore/re-link evidence;
- support communications;
- security/fraud/abuse logs;
- device/technical/diagnostic information;
- community content;
- analytics actually used;
- processors and platform/payment partners;
- retention/deletion; and
- international-transfer safeguards.

Do not say that using TycoonX means consent to all processing. Use the appropriate GDPR legal basis per purpose.

## 17. German legal notice / operator identity

Before treating the commercial legal setup as complete, publish an easily recognizable, directly accessible, permanently available legal notice/Impressum with the information required for the actual CK-Labs legal form and activity.

Do not invent operator details. Confirm and publish, as applicable:
- exact legal trader name behind CK-Labs;
- public business postal address;
- direct electronic contact details;
- registration details where applicable;
- VAT/business identification numbers where applicable; and
- any other legally required operator information.

The same legal trader identity must be consistent across the website, Terms, Privacy Policy, checkout, invoices/receipts where CK-Labs is the seller, and platform developer information.

## 18. Release gate

Do not treat paid TycoonX purchases as legally production-ready until all applicable items pass:

- [ ] Privacy Policy works publicly over HTTPS.
- [ ] Support route works publicly and provides a real contact method.
- [ ] Terms of Service works publicly over HTTPS.
- [ ] Purchases & Refunds Policy works publicly over HTTPS.
- [ ] German legal notice/Impressum is complete for the real operator.
- [ ] Every rendered legal/checkout/support reference spells **TycoonX** correctly.
- [ ] Product type/configuration is correct per Apple/Google/Xsolla channel.
- [ ] Google Lifetime VIP is non-consumable if sold under the intended permanent-benefit model.
- [ ] Google 30-Day VIP repeat-purchase behavior is verified if users may buy another 30-day period later.
- [ ] Purchased Diamonds do not expire solely because time passes.
- [ ] Lifetime VIP limited-time and commercial-lifetime disclosure is visible before purchase.
- [ ] Lifetime VIP restoration works after reinstall/new supported device where applicable.
- [ ] Lifetime VIP restoration after TycoonX account deletion is tested for the same verified purchaser without restoring deleted gameplay/consumables.
- [ ] Account deletion UI clearly explains the effect on gameplay data versus restorable paid entitlements where required.
- [ ] Valid 30-Day VIP restores without extending/duplicating its period.
- [ ] Refund/revocation/chargeback events reconcile server-side idempotently.
- [ ] No client-only paid entitlement trust path exists.
- [ ] Checkout clearly displays total price, product, duration/renewal status, and other required pre-contract information.
- [ ] German payment-obligation button/order flow is compliant where CK-Labs controls an applicable German consumer checkout.
- [ ] German §356a electronic withdrawal function responsibility is verified and implemented for every covered web/UI purchase channel.
- [ ] Diamond early-supply withdrawal consent/acknowledgement/contract confirmation is implemented where legally required.
- [ ] Promotions/countdowns/discount claims are genuine and not misleading.
- [ ] Apple Lifetime VIP sales-window implementation has been checked against current IAP removal/availability guidance; a short promotional end is not implemented by blindly toggling Remove from Sale.
- [ ] Store privacy disclosures match actual code/SDK behavior.
- [ ] Merchant-of-record and refund responsibility is verified for the actual Xsolla configuration.
- [ ] Apple/Google external-payment linking is checked per current country/platform/program rules.
- [ ] App review/release metadata accurately explains the paid product types.

## 19. Current blockers

The strongest remaining blockers before calling the complete TycoonX legal/payment setup production-ready are:

1. **German legal notice / Impressum:** exact legal operator identity and public address are not established in this repository.
2. **Checkout implementation evidence:** the legal documents cannot prove that the real Apple, Google, and Xsolla purchase screens provide every required disclosure and consent.
3. **German §356a withdrawal function:** responsibility and implementation must be verified on the real web purchase interface for every covered transaction.
4. **Withdrawal consent implementation for immediate Diamond delivery:** the transaction-specific flow must be verified, not only described in Terms.
5. **Entitlement lifecycle testing:** account deletion, reinstall/new-device restoration, Google 30-Day repeat-purchase behavior, and the Apple limited-time Lifetime VIP sales-window implementation must be tested against the final store configuration.
6. **Store/privacy configuration parity:** App Store, Google Play, and Xsolla settings must be checked against the final public legal copy before launch.