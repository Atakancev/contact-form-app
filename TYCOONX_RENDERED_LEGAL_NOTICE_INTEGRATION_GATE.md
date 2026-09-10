# TycoonX Rendered Legal Notice Integration Gate

Last checked: **September 10, 2026**

## Purpose

This gate verifies that legal wording which already exists in localized TycoonX notice components is actually rendered on the intended legal routes. A translated component that exists in the repository but is never mounted does not protect CK-Labs and does not count as delivered player-facing legal information.

## Finding fixed in this run

Three existing localized legal components were present in `app/tycoonx-legal/` but were not mounted from `app/layout.tsx`:

1. `RealMoneyTradingNotice.tsx`
2. `OfficialPurchaseRefundNotice.tsx`
3. `ControllerIdentityPrivacyNotice.tsx`

`app/layout.tsx` now imports and renders all three components. Each component self-filters by pathname, so it appears only on its intended TycoonX legal routes.

## Route coverage

### Terms

`RealMoneyTradingNotice.tsx` renders on:

- canonical English Terms: `/tyconx-terms-of-service`
- localized Terms: `/tycoonx-legal/{locale}/terms`

The notice expressly distinguishes prohibited off-platform real-money trading from authorized purchases through Apple App Store, Google Play and the official TycoonX webshop using Xsolla. It also preserves proportionate enforcement and non-waivable rights.

### Purchases & Refunds

`OfficialPurchaseRefundNotice.tsx` renders on:

- canonical English Purchases & Refunds: `/tyconx-purchase-refund-policy`
- localized Purchases & Refunds: `/tycoonx-legal/{locale}/purchases`

The notice distinguishes official CK-Labs purchases from player-to-player game-value transfers and unauthorized off-platform deals. It states that CK-Labs is not the seller, escrow service or refund provider for an unauthorized user-to-user deal while preserving mandatory rights for unrelated valid Apple, Google Play or Xsolla purchases.

### Privacy

`ControllerIdentityPrivacyNotice.tsx` renders on:

- localized Privacy routes: `/tycoonx-legal/{locale}/privacy`

The canonical English Privacy Policy already contains a dedicated controller/contact section. The localized component closes the presentation gap by giving localized Privacy readers the controller identity and contact route directly rather than only referring them onward to the legal notice/imprint.

This matters under GDPR Articles 12 and 13: required privacy information must be concise, transparent, intelligible and easily accessible, and Article 13(1)(a) requires the identity and contact details of the controller when personal data are collected from the data subject.

## Localization requirements

The three components already contain the required localized copy for the supported TycoonX locale set applicable to their routes. Existing regional-language distinctions must remain intact, including `es` vs `es_MX`, `fr` vs `fr_CA`, `pt` vs `pt_BR`, and `zh` vs `zh_Hans` vs `zh_Hant`.

Arabic must continue to render RTL. Displayed prose must always spell the game name exactly as **TycoonX**. Compatibility-sensitive route/file identifiers containing `tyconx` may remain where required to preserve existing URLs.

## Regression checks

A release should fail this gate if any of the following becomes true:

- `RealMoneyTradingNotice` is no longer imported and mounted from a shared rendered layout or equivalent route-level integration.
- `OfficialPurchaseRefundNotice` is no longer imported and mounted from a shared rendered layout or equivalent route-level integration.
- `ControllerIdentityPrivacyNotice` is no longer imported and mounted for localized Privacy routes.
- the controller/contact information disappears from the canonical English Privacy Policy without an equivalent accessible replacement.
- a supported localized Terms route no longer receives the RMT notice.
- a supported localized Purchases route no longer receives the official-purchase distinction.
- a supported localized Privacy route no longer receives the controller/contact notice.
- Arabic loses RTL presentation.
- a regional locale silently falls back to materially different generic wording where a genuine variant exists.
- player-facing copy displays the legacy misspelled game name.
- any current legal copy describes the live TycoonX service, purchases, VIP, Diamonds, rewards or users as beta.

## Legal effect and limits

Mounting these notices does not create a waiver of mandatory consumer, privacy, platform or payment-provider rights. It also does not convert backend implementation defects into permitted behavior. Enforcement against RMT or entitlement abuse still requires reasonable evidence and proportionate handling, and unrelated valid paid value must not be destroyed merely because another transaction or account action is disputed.

## Current status

**PASS for repository rendering integration after this run**, subject to ordinary application build/runtime verification.

The higher-priority unresolved readiness blockers remain source-authoritative VIP/payment reconciliation, refund/reversal handling, VIP expiry-message authority, profile/server-authority defects and the other P0/P1 implementation findings already recorded in the TycoonX release-gate documents.
