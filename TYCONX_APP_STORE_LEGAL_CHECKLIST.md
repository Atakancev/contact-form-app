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

### Pending transaction / approval-flow gate
Apple purchase flows can remain pending, including approval-style flows such as Ask to Buy. TycoonX must not treat a pending result as a completed paid transaction.

Test explicitly:
- pending purchase before a Lifetime VIP sales window closes;
- approval/completion after the advertised sales window closes;
- decline/cancellation after the window closes;
- app restart while a purchase remains pending; and
- duplicate callbacks or transaction updates.

Expected rule: no paid entitlement while the transaction is only pending. If Apple later confirms a valid completed transaction that legitimately belongs to the original offer, grant it once and only once, even if confirmation happens after the promotional window ended.

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

### Family Sharing decision gate
Lifetime VIP is an Apple non-consumable and is therefore the kind of product for which Apple can support Family Sharing, but **do not enable Family Sharing casually**.

Before enabling it in App Store Connect:
- make an explicit product decision whether a single Lifetime VIP purchase should be shareable with eligible Apple family members;
- remember that Apple says Family Sharing cannot be turned off for that In-App Purchase after it is enabled;
- if enabled, display the shareable status accurately in TycoonX purchase UI;
- process Apple shared/restored transactions and entitlement-revocation events so a family member does not retain access after Apple reports that sharing ended;
- never convert shared access into a separately owned, transferable, or separately refundable TycoonX purchase; and
- test refund, family-leave, share-disable, reinstall, and account-relink scenarios before launch.

Until CK-Labs explicitly chooses and implements Family Sharing, do not market Lifetime VIP as family-shareable.

### Refunds
- Do not promise “no refunds.”
- Apple controls its App Store refund-request process.
- CK-Labs may troubleshoot entitlement delivery but should not claim control over Apple’s refund decision.
- When Apple reports a refund/revocation, reconcile the associated TycoonX entitlement or virtual value without confiscating unrelated legitimate purchases.

### Current-version expectations
Apple’s current App Review guidance expects submitted apps to be complete, functional, compatible with current platform behavior, and maintained as Apple evolves its operating systems and deprecated technologies. Treat forced/supported-version logic as a security and compatibility tool, not as a substitute for CK-Labs’ own obligation to maintain a conforming paid digital product where mandatory law applies.

## 4. Google Play

- Use Google Play Billing for in-app digital products where Google Play policy requires it, unless a valid regional/program/legal exception applies.
- Configure Lifetime VIP as a one-time **non-consumable** product if that remains the intended Google Play model. Google currently describes non-consumables as purchased once and permanently associated with the purchaser’s Google Account.
- Configure one-time 30-Day VIP so it does not silently become recurring billing.
- If players may legitimately buy another 30-Day VIP later, confirm the Google product configuration is repeatable after the prior entitlement is provisioned/expired; a non-consumable configuration would permanently block repurchase.
- Use Google’s current one-time-product purchase-option/offer model deliberately; do not create overlapping purchase options or offers that accidentally produce duplicate entitlements or misleading regional promotion states.
- Product metadata, price, duration, and promotional claims must be accurate and not misleading.
- Regional prices may differ. Keep country/region eligibility and storefront rules separate from any truly personalized automated price.
- **Do not grant any paid TycoonX entitlement while Google reports the purchase state as `PENDING`. Grant only after the purchase becomes `PURCHASED` and verification succeeds.**
- Reconcile refunds, cancellations, chargebacks, and invalid purchases to the corresponding TycoonX entitlement or paid value.
- If Google processes the refund, TycoonX should consume the resulting provider status rather than promise an independent contradictory refund outcome.
- Test account deletion and later entitlement recovery so a still-valid non-consumable Lifetime VIP can be re-linked to the same verified purchaser without recreating deleted gameplay state or Diamond consumables.

### Google pending-purchase test gate
Google explicitly requires pending purchases to be handled separately from completed purchases.

Test at least:
- PENDING → PURCHASED;
- PENDING → cancelled/expired;
- app closed while pending and reopened after completion;
- completion after a Lifetime VIP promotional window has closed;
- duplicate Real-time Developer Notification / purchase callbacks; and
- acknowledgement/consumption only after a valid completed purchase has been granted.

Expected rule: the original pending state grants nothing. A later valid `PURCHASED` transition grants the applicable entitlement once. If Google validly completes the transaction after a promotion closes, reconcile against the provider-confirmed purchase rather than silently discarding or duplicating it.

Google also warns that an unacknowledged valid purchase can be automatically refunded. Make sure valid completed purchases are acknowledged or consumed using the correct product flow after entitlement is granted.

### P0 Google Play target-API gate for 31 August 2026
Google’s published deadline for **31 August 2026** requires new Android apps and app updates for mobile to target **Android 16 / API level 36 or higher**. Existing mobile apps generally need to target **Android 15 / API level 35 or higher** to remain available to new users on devices running a newer Android version than the app targets. Google indicates that an extension to **1 November 2026** may be requestable through Play Console where applicable.

Before the next Android release or the deadline:
- verify the actual TycoonX production Android `targetSdk` / target API level in the game repository and release artifact;
- do not assume this legal/web repository proves Android compliance;
- if the app is below the required level, plan the platform upgrade before submitting an update;
- if additional time is genuinely needed and Google offers the extension for the app, decide deliberately whether to request it before the deadline; and
- recheck Google’s current requirement immediately before submission because platform deadlines can change.

### Google Play EEA external offers / Xsolla linkouts
Users may be able to consume TycoonX content purchased outside Google Play, but that does **not** mean TycoonX should insert an Xsolla web-shop link into the Google Play app without checking the current program rules.

Before any EEA in-app Xsolla promotion or linkout:
- verify the current Google Play external-offers rules for games;
- enroll in the applicable program if required;
- implement required user notices and transaction flow requirements;
- account for current Google fees/reporting obligations where applicable; and
- keep off-Play purchases and Play purchases idempotently mapped to the same TycoonX entitlement model.

Off-app promotion by email, website, or other lawful channels should still be checked against the applicable platform/program and consumer-law rules, but it is legally and operationally different from an in-app linkout.

## 5. Official TycoonX web shop using Xsolla

Before launch, verify the exact Xsolla contract and checkout configuration in use rather than assuming every Xsolla setup is identical.

Where an Xsolla entity acts as merchant of record, the transaction-specific checkout/receipt should identify the applicable merchant and govern payment processing, payment methods, transaction taxes/VAT, fraud checks, refunds, disputes, and chargebacks under its terms and mandatory law.

CK-Labs remains responsible for correctly delivering the corresponding TycoonX entitlement after valid transaction confirmation.

For Xsolla fulfillment:
- do not trust a browser return URL or client-side success message as final payment authority;
- grant paid value only after the configured server-side Xsolla confirmation flow reports a successful paid order/transaction;
- verify Xsolla webhook signatures server-side;
- make webhook handling idempotent so retries never duplicate Diamonds, VIP, or entitlement records;
- process cancellation/refund events against the same authoritative transaction identity; and
- test retry, duplicate webhook, delayed confirmation, cancellation, refund, and webhook-delivery failure scenarios.

The web shop must not be linked or promoted inside Apple/Google apps in a way that violates the applicable platform, country, program, or law.

For Lifetime VIP sold through the web shop, maintain enough lawful transaction/entitlement evidence to distinguish account deletion from cancellation/refund of the underlying purchase. Define a verified re-link process for a purchaser who deletes a TycoonX account and later proves control of the same purchase identity, subject to the Xsolla contract, privacy law, and mandatory consumer rights.

Xsolla’s public Refund Policy was reverified on **24 August 2026** and is currently dated **16 June 2026**. It says the applicable refund-policy type is shown at checkout and the relevant Xsolla contracting company can depend on the payment method. Do not hard-code one universal Xsolla refund policy or entity into TycoonX legal copy unless the actual CK-Labs Xsolla setup makes that statement true.

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
- opening a product page or beginning checkout before a future price change does not by itself reserve the old price unless the applicable provider/contract has already made that price binding;
- do not retroactively charge more for an already completed one-time purchase because the price later increases;
- do not promise an automatic refund, credit, price match, extra Diamonds, or extra VIP time merely because a later price is lower;
- include or display mandatory taxes and unavoidable price components as required;
- let platform/provider FX, tax, and local pricing mechanisms update local prices where applicable;
- never use fake countdowns, fake scarcity, fake crossed-out prices, or false discount claims;
- where a jurisdiction imposes a reference-price or price-history rule for the specific product/offer, apply it to that offer;
- if automated decision-making ever truly personalizes an individual consumer price and the law requires disclosure, disclose that fact before purchase.

Ordinary country-based, storefront-based, tax-based, currency-based, or generally available regional pricing should not be described internally as “personalized pricing” merely because prices differ by region.

### German price-reduction scope caution
German §11 PAngV expressly uses the term **“Waren”** for its 30-day lowest-price rule. Do not automatically represent that specific statutory rule as applying identically to every digital entitlement or digital service without confirming the legal classification of the actual offer.

For TycoonX, still keep reliable promotion and price-history records and avoid misleading reference prices, fake savings, or fabricated crossed-out prices. Broader German/EU consumer-protection rules against misleading commercial practices can apply even where a particular goods-specific price-history rule is not the direct legal basis.

### Public-statement conformity gate
German digital-product conformity rules can make public statements and advertising about product characteristics relevant to what a consumer may objectively expect. Before a paid-product launch or material campaign:
- compare App Store, Google Play, webshop, website, screenshots, release notes, ads, and Lifetime VIP sales copy against the actual current product;
- do not promise permanence, benefits, compatibility, automation, availability, or support that the product does not actually provide;
- correct materially outdated statements before purchase using the legally appropriate method; and
- treat prominent “Lifetime”, “limited time”, discount, feature, and compatibility claims as contractual-risk surfaces, not just marketing copy.

## 7. Obvious errors and accidental grants

Terms and server behavior should distinguish a genuine completed purchase from a technical mistake.

Where legally permitted:
- correct future catalog/configuration errors;
- cancel and refund an unfulfilled obviously erroneous transaction rather than grant unintended extreme value;
- remove duplicate grants caused by retry/replay/webhook/store-notification bugs;
- delay entitlement delivery while a payment remains pending or fails validation;
- use reliable server/store/payment records when a stale or manipulated client display conflicts with authoritative records;
- never use an “error” clause to override a genuinely binding consumer contract where mandatory law says otherwise.

For limited-time offers, define the cutoff by authoritative provider transaction state, not by a client clock or purchase-button tap. A pending state is not itself a paid entitlement, but a provider-confirmed transaction that validly completes later must be reconciled according to the provider record, the actual offer, and mandatory law.

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

Refunds should ordinarily follow the payment channel/provider and original payment method where the provider requires it. Do not promise CK-Labs can control bank/card FX differences, provider fees, or settlement timing it does not control.

Where Apple, Google, Xsolla, or another provider is the contracting merchant or invoice/receipt issuer, do not promise that CK-Labs can rewrite that provider’s tax or billing document. Keep a support path that can identify the TycoonX entitlement/transaction, while the provider controls correction/reissue of its own merchant documents. If CK-Labs itself is legally the invoice issuer for a transaction, follow the applicable invoice/credit-note rules instead.

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

Under German digital-product rules, required updates are not only a user obligation. Where applicable, CK-Labs must provide and inform consumers about updates necessary to keep the paid digital product in conformity during the legally relevant period, including security updates.

### Founder-protective §327f update workflow
To preserve the protection available when a consumer does not install a required update:
- actually make the required/security update available;
- clearly inform the affected user that the update is available;
- clearly explain the relevant consequences of not installing it;
- provide adequate installation/update instructions or a reliable normal store-update path;
- allow a reasonable period for installation where the law requires one;
- retain reasonable evidence of the version, release date, notice text, notice channel, and date/time of the notice; and
- rely on this protection only for a lack of conformity caused **solely** by the missing update, never for an unrelated defect or a failure by CK-Labs to supply the update correctly.

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

## 18. Cross-platform entitlements and duplicate-benefit prevention

TycoonX may recognize one valid purchase across supported devices or platforms where platform rules allow, but recognition must remain idempotent.

Test at least:
- Apple purchase → same TycoonX account on another Apple device;
- Google purchase → same TycoonX account on another Android device;
- Xsolla web purchase → supported mobile account recognition where permitted;
- platform reinstall and account re-link;
- duplicate provider/webhook notifications;
- same receipt replayed from multiple devices; and
- multiple account-link attempts to one provider purchase.

Expected result: the valid benefit follows the supported entitlement model, but the same underlying purchase never creates duplicate Diamonds, a second 30-Day period, or multiplied Lifetime VIP benefits.

If a user genuinely completed two separate valid transactions, do not silently collapse them as a “duplicate” without determining the actual product semantics and preserving applicable refund/consumer rights.

## 19. German consumer dispute resolution and discontinued EU ODR platform

Do not add a stale EU Online Dispute Resolution link. Regulation (EU) 2024/3228 discontinued the European Commission ODR platform and repealed the old ODR Regulation with effect from 20 July 2025.

For German VSBG compliance:
- determine before launch whether the general §36 VSBG information duty applies to the actual CK-Labs business circumstances, including any applicable small-business exemption;
- if §36 applies, clearly state whether CK-Labs is willing or legally obliged to participate in consumer conciliation and identify a competent body where required;
- do **not** voluntarily promise general participation unless CK-Labs actually intends to make that commitment;
- independently prepare a §37 VSBG post-dispute response workflow, because after an unresolved consumer-contract dispute the trader may need to identify the competent consumer conciliation body, give its address and website, and state in text form whether participation is voluntary or mandatory; and
- keep this information consistent between the website, Terms, and support responses.

The Terms may remain founder-protective by preserving court rights and not imposing mandatory arbitration, while avoiding an unnecessary voluntary ADR commitment.

## 20. Future paid randomized items guardrail

TycoonX currently does not need a random-paid-item rule merely because it sells Diamonds or VIP. If a future product lets users pay for a randomized virtual item or loot-box-like outcome, stop release until the applicable platform and consumer-law requirements are reviewed.

At minimum, Apple currently requires apps offering paid randomized virtual-item mechanisms to disclose the odds of receiving each type of item before purchase. Do not add a paid random-reward mechanic without the required disclosures and a separate fairness/age/consumer-protection review.

## 21. Release gate

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
- [ ] Google pending purchases grant nothing until `PURCHASED`, and PENDING → PURCHASED / cancelled flows are tested across a Lifetime VIP sale-window cutoff.
- [ ] Google completed purchases are acknowledged/consumed using the correct product flow after valid entitlement delivery.
- [ ] Google Play Android target-API compliance is verified for the **31 August 2026** deadline, or a valid Google extension to **1 November 2026** is confirmed if needed.
- [ ] Google Play EEA Xsolla/external-offer linkouts are used only under the current applicable program/rules.
- [ ] Apple pending/approval-style purchases grant nothing until completion and are tested across a Lifetime VIP sale-window cutoff.
- [ ] Purchased Diamonds do not expire solely because time passes.
- [ ] Lifetime VIP limited-time and commercial-lifetime disclosure is visible before purchase.
- [ ] Lifetime VIP restoration works after reinstall/new supported device where applicable.
- [ ] Lifetime VIP restoration after TycoonX account deletion is tested for the same verified purchaser without restoring deleted gameplay/consumables.
- [ ] Apple Family Sharing is either intentionally disabled/not promised, or intentionally enabled with accurate UI and revoke/refund/family-change handling tested.
- [ ] Cross-platform entitlement recognition is idempotent and cannot multiply paid benefits.
- [ ] Account deletion UI clearly explains the effect on gameplay data versus restorable paid entitlements where required.
- [ ] Valid 30-Day VIP restores without extending/duplicating its period.
- [ ] Refund/revocation/chargeback events reconcile server-side idempotently.
- [ ] Xsolla fulfillment trusts verified server-side payment/order confirmation, validates webhook signatures, and handles duplicate/retry/cancellation events idempotently.
- [ ] No client-only paid entitlement trust path exists.
- [ ] Limited-time offer cutoffs use authoritative provider transaction state rather than a client clock, purchase-button tap, or browser return URL.
- [ ] Checkout clearly displays total price, product, duration/renewal status, and other required pre-contract information.
- [ ] German payment-obligation button/order flow is compliant where CK-Labs controls an applicable German consumer checkout.
- [ ] German §356a electronic withdrawal function responsibility is verified and implemented for every covered web/UI purchase channel.
- [ ] Diamond early-supply withdrawal consent/acknowledgement/contract confirmation is implemented where legally required.
- [ ] Required/security-update notices record availability, consequences of non-installation, and adequate update instructions where German §327f applies.
- [ ] Store listings, website, webshop, screenshots, ads, and Lifetime VIP sales copy are checked for materially outdated or overpromising public statements before paid launch.
- [ ] Promotions/countdowns/discount claims are genuine and not misleading.
- [ ] German/EU reference-price claims are reviewed for the actual legal classification of the digital offer instead of mechanically assuming the goods-specific §11 PAngV rule applies identically.
- [ ] Apple Lifetime VIP sales-window implementation has been checked against current IAP removal/availability guidance; a short promotional end is not implemented by blindly toggling Remove from Sale.
- [ ] Store privacy disclosures match actual code/SDK behavior.
- [ ] Merchant-of-record and refund responsibility is verified for the actual Xsolla configuration.
- [ ] Receipt/invoice responsibility is verified per channel and CK-Labs does not promise to alter third-party merchant tax documents it does not issue.
- [ ] Apple/Google external-payment linking is checked per current country/platform/program rules.
- [ ] German VSBG §36 applicability/statement is verified and a §37 unresolved-dispute response process exists.
- [ ] No current legal page links users to the discontinued EU ODR platform.
- [ ] Any future paid randomized-item mechanic receives a fresh odds/fairness/age/platform review before release.
- [ ] App review/release metadata accurately explains the paid product types.

## 22. Current blockers

The strongest remaining blockers before calling the complete TycoonX legal/payment setup production-ready are:

1. **German legal notice / Impressum:** exact legal operator identity and public address are not established in this repository.
2. **Checkout implementation evidence:** the legal documents cannot prove that the real Apple, Google, and Xsolla purchase screens provide every required disclosure and consent.
3. **German §356a withdrawal function:** responsibility and implementation must be verified on the real web purchase interface for every covered transaction.
4. **Withdrawal consent implementation for immediate Diamond delivery:** the transaction-specific flow must be verified, not only described in Terms.
5. **Pending-payment and sale-window lifecycle:** Apple pending/approval flows, Google PENDING → PURCHASED/cancelled, and delayed Xsolla confirmation must be tested so a limited Lifetime VIP offer neither grants unpaid value nor loses a valid later-confirmed transaction.
6. **Xsolla webhook authority:** production fulfillment must verify signatures, trust authoritative server-side payment/order events, and remain idempotent across retries, duplicates, cancellations, and refunds.
7. **Entitlement lifecycle testing:** account deletion, reinstall/new-device restoration, cross-platform idempotency, Apple Family Sharing decision/status, Google 30-Day repeat-purchase behavior, and the Apple limited-time Lifetime VIP sales-window implementation must be tested against the final store configuration.
8. **Google Play 31 August 2026 target-API gate:** the actual TycoonX Android target SDK/API level must be verified in the game/release artifact; this legal repository alone cannot establish compliance.
9. **Google/Xsolla route compliance:** any EEA Google Play in-app external-offer/linkout must be verified against the current Google program before it is exposed.
10. **German consumer-dispute process:** §36 VSBG applicability/statement and §37 post-dispute workflow need final operator-specific verification; do not use the discontinued EU ODR platform.
11. **Store/privacy/configuration parity:** App Store, Google Play, Xsolla, receipt/invoice responsibility, and storefront settings must be checked against the final public legal copy before launch.
12. **Operational §327f evidence:** if CK-Labs wants to rely on the user-not-installed-update protection, the actual update availability/consequence notices and adequate instructions must be implemented and evidenced; Terms wording alone is not enough.