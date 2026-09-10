# TycoonX Rendered Legal Deduplication, Metadata & Withdrawal Recheck

Rechecked: **September 10, 2026**

Scope: CK-Labs TycoonX legal presentation and current German/EU electronic-withdrawal requirements. This review is repository-only and does not change any production database, balance, entitlement, purchase, policy, grant, function, trigger, cron, or player account.

## 1. Rendered legal notice duplication found and corrected

The September 10 root-layout integration exposed an existing route-layout overlap that needed a second pass.

Before this recheck:

- `app/layout.tsx` mounted the route-aware `RealMoneyTradingNotice`, `OfficialPurchaseRefundNotice`, and `ControllerIdentityPrivacyNotice` components.
- `app/tycoonx-legal/layout.tsx` still mounted those same three components for every localized TycoonX legal route.
- `app/tyconx-terms-of-service/layout.tsx` still mounted `RealMoneyTradingNotice` for the canonical Terms route.

Because the components are route-aware, this caused the same legal clarification to render twice on affected pages rather than merely importing the component twice harmlessly.

### Corrected rendering architecture

The shared root remains the single mount point for:

- `RealMoneyTradingNotice`
- `OfficialPurchaseRefundNotice`
- `ControllerIdentityPrivacyNotice`
- `PersonalDataBreachPrivacyNotice`
- the other route-aware TycoonX Terms clarification components already mounted there

The localized TycoonX legal layout now keeps only the legal helpers that are not mounted globally:

- `LegalInlineFormatting`
- `TransferRuleNotice`
- `TransferRiskPrivacyNotice`

The canonical Terms layout likewise keeps `TransferRuleNotice` but no longer mounts a second copy of `RealMoneyTradingNotice`.

### Acceptance criterion

Every legal clarification must render **exactly once** on every intended route and zero times on unrelated routes. A source component being translated and a source component being mounted are separate requirements; a component being mounted twice is also a defect.

Regression checks should include at least:

1. canonical Terms: each intended Terms clarification exactly once;
2. localized Terms: each intended Terms clarification exactly once;
3. canonical Purchases & Refunds: `OfficialPurchaseRefundNotice` exactly once;
4. localized Purchases & Refunds: `OfficialPurchaseRefundNotice` exactly once;
5. canonical Privacy: controller and personal-data-breach notices exactly once;
6. localized Privacy: controller and personal-data-breach notices exactly once;
7. Community Standards: purchase/Terms-only notices do not render;
8. unrelated CK-Labs pages: TycoonX route-aware legal notices do not render.

## 2. Legal browser metadata was inheriting an unrelated root product name

The application root metadata is currently for another CK-Labs surface. The TycoonX legal routes did not consistently override it, so a browser tab, crawler, search result, or link preview could inherit unrelated metadata even while the page body itself correctly displayed TycoonX.

This recheck adds route-level TycoonX metadata for:

- the full `/tycoonx-legal/...` localized legal tree;
- canonical TycoonX Terms of Service;
- canonical TycoonX Purchases & Refunds;
- canonical TycoonX Privacy Policy;
- canonical TycoonX Community Standards;
- TycoonX Legal Notice / Impressum;
- TycoonX Apple Custom EULA;
- TycoonX Security & Vulnerability Reporting.

Compatibility-sensitive historical route names remain unchanged. Rendered metadata uses the exact player-facing brand **TycoonX**.

### Metadata acceptance criterion

A TycoonX legal URL must not present another product name as its browser title or primary description. At minimum, the title must identify TycoonX and CK-Labs and the description must match the legal surface being viewed. Future locale-specific metadata may be localized further, but it must never regress to an unrelated product title or a misspelled TycoonX brand.

## 3. German electronic withdrawal function: current implementation gate

The canonical Terms and Purchases & Refunds Policy already preserve mandatory withdrawal rights and already state the high-level electronic withdrawal-function requirement. This section records the **implementation detail that must be verified at checkout**, rather than adding a blanket promise that every transaction always has a withdrawal right.

### Current legal baseline

Since **June 19, 2026**, German BGB § 356a applies to covered distance contracts concluded through an online user interface where a statutory withdrawal right is running.

Where § 356a applies, the trader must ensure that the online interface provides an electronic withdrawal function that:

- is labelled `Vertrag widerrufen` or another unambiguous equivalent;
- is continuously available throughout the withdrawal period;
- is prominently placed and easily accessible;
- lets the consumer easily provide or confirm their name;
- lets the consumer identify the contract, or the relevant part of the contract, they wish to withdraw from;
- lets the consumer provide the electronic means to which the receipt confirmation should be sent;
- provides a separate confirmation function labelled `Widerruf bestätigen` or another unambiguous equivalent; and
- after submission, sends an acknowledgement on a durable medium without undue delay containing the withdrawal statement and the date and time of submission.

German EGBGB Article 246a § 1 also requires, where applicable, pre-contract information about the **existence and placement** of the electronic withdrawal function, in addition to the normal information about conditions, time limits, procedure and the model withdrawal form.

These requirements implement the amended EU Consumer Rights Directive, including Article 11a inserted by Directive (EU) 2023/2673. The EU rule has applied from **June 19, 2026**.

### Do not over-apply the button rule

The rule does not create a new withdrawal right where none exists under applicable law and does not revive a right that has already lawfully expired or been lost after every statutory condition for loss was satisfied. Conversely, a generic acceptance of the TycoonX Terms must not be treated as a substitute for a transaction-specific consent, request, acknowledgement, notice, or confirmation where the law requires one.

### Channel responsibility must be verified transaction by transaction

TycoonX purchases can use different contracting and interface structures:

- Apple App Store In-App Purchase;
- Google Play;
- the official TycoonX web shop using Xsolla.

The legal documents correctly avoid pretending that CK-Labs always controls the provider checkout. For release readiness, the actual merchant/interface role must nevertheless be verified for each channel and country. If Apple, Google, Xsolla, or another provider is legally responsible for the contracting interface and compliant withdrawal flow, CK-Labs may rely on the applicable provider flow only to the extent that allocation is legally correct. Provider involvement must never be used as wording to remove a mandatory right.

### Product distinctions must remain intact

Do not collapse all TycoonX paid products into one withdrawal treatment:

- **Diamonds** are purchasable in-game virtual currency. Purchased Diamonds must not be treated as automatically non-withdrawable merely because they were credited to an account.
- **One-time 30-Day VIP** is a non-renewing 30-day entitlement. Immediate activation does not transform it into an auto-renewing subscription and does not automatically erase every statutory withdrawal remedy.
- **Lifetime VIP** is a limited-time promotional one-time entitlement supplied for the commercial operating lifetime described in the legal terms. Its one-time price does not by itself remove mandatory withdrawal or digital-product remedies.
- Any future recurring product needs separate subscription disclosures and cannot reuse the one-time VIP wording.

### Evidence and audit requirements

For a covered TycoonX transaction, the responsible checkout/provider should make it possible to reconstruct at least:

- contracting merchant and payment channel;
- product and transaction/order identifier;
- country/storefront and applicable withdrawal regime;
- purchase/contract time;
- withdrawal-period start and end or the lawful reason no withdrawal right exists;
- the withdrawal information shown before purchase;
- existence and placement of the electronic withdrawal function where required;
- any transaction-specific early-performance request, express consent, and acknowledgement that applicable law requires;
- submitted withdrawal statement;
- submission timestamp;
- durable-medium receipt confirmation and its destination;
- provider/merchant decision and refund/entitlement reconciliation outcome.

A user-facing button without reliable receipt evidence is not enough for dispute handling, and backend records without an accessible user-facing function are not enough for § 356a compliance when the function is required.

## 4. Current provider checkpoint

No canonical product-definition change was required by this recheck.

- Apple continues to require In-App Purchase for covered in-app digital functionality and currency, states that purchased in-game IAP currency may not expire, requires a restore mechanism for restorable purchases, and supports server-side transaction/refund status updates.
- Google Play continues to treat virtual currency and premium digital functionality as one-time digital products within its billing framework, with current one-time-product APIs supporting purchase-state, cancellation/refund and entitlement reconciliation.
- Xsolla continues to provide transaction-specific payment/refund or combined order-paid/order-canceled webhooks depending on project configuration, with documented retry behavior. Those provider events remain evidence inputs; CK-Labs must still reconcile TycoonX entitlements correctly.

The previously documented RevenueCat and Xsolla refund/VIP provenance blockers therefore remain implementation priorities and are not solved by legal wording alone.

## 5. Release gate

Do not mark the rendered legal layer complete unless all of the following are true:

- every intended legal notice renders exactly once;
- TycoonX legal URLs present TycoonX/CK-Labs metadata rather than unrelated product metadata;
- localized pages retain their existing 25-locale body copy and Arabic RTL handling;
- the current live service is not described as a beta;
- the player-facing brand is always `TycoonX`;
- the electronic withdrawal function is actually present, discoverable, correctly labelled, two-step, and durably acknowledged wherever § 356a/Article 11a requires it;
- pre-contract information states the existence and placement of that function where required;
- provider/merchant responsibility is verified by channel rather than assumed;
- transaction-specific consent/acknowledgement evidence is retained where loss of a withdrawal right or early-performance consequences depend on it; and
- mandatory consumer remedies are never replaced by an internal policy shortcut.

This gate is an implementation and presentation control. It does not expand or waive the statutory rights already preserved by the canonical TycoonX Terms and Purchases & Refunds Policy.
