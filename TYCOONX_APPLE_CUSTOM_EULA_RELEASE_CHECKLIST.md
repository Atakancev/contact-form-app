# TycoonX Apple Custom EULA Release Checklist

Last reviewed: August 27, 2026

This is an operational App Store release checklist for the TycoonX Custom End User License Agreement. The current legal source is `TYCOONX_APPLE_CUSTOM_EULA.md`, with a public mirror at `/tycoonx-eula`.

## App Store Connect setup

- In **App Store Connect → Apps → TycoonX → App Information → License Agreement**, choose **Apply a custom EULA to all chosen countries or regions**.
- Use the Custom License Agreement field for the actual EULA. Apple accepts plain text; HTML is stripped and only line breaks are preserved.
- Select **all countries and regions where TycoonX is distributed** if CK-Labs wants the same Custom EULA to govern everywhere. If a country or region is not selected, Apple’s Standard EULA applies there instead.
- If localized EULA text is later added, Apple requires the localized versions to be included in the same Custom License Agreement text field.
- Keep the public `/tycoonx-eula` page synchronized with the App Store Connect text whenever the legal meaning changes.
- A public EULA URL is useful for transparency, support, and external legal navigation, but the App Store Connect Custom License Agreement field remains the mechanism that makes the custom EULA apply to the App Store license.
- When a Custom EULA is configured, Apple displays a License Agreement link on the App Store product page. Do not rely on an App Store description URL as the mechanism that creates the license agreement.
- **Live storefront evidence:** on August 27, 2026 the public French TycoonX App Store page displays a `Contrat de licence` link. Apple states that the License Agreement link is not shown when only Apple’s Standard EULA applies, so this is strong evidence that a Custom EULA is active for that storefront. It does **not** prove that every intended country/region is selected or that the live App Store Connect text is byte-for-byte/substantively identical to the repository source; those checks remain required.

## Apple minimum-term parity gate

Before every submission after a material EULA change, verify that the Custom EULA still contains all Apple-required minimum categories:

1. **Acknowledgement**: the EULA is between the user and CK-Labs, not Apple; CK-Labs is responsible for the app and content.
2. **Scope of License**: non-transferable license for Apple-branded products owned or controlled by the user, subject to Apple Usage Rules and supported sharing/access mechanisms.
3. **Maintenance and Support**: CK-Labs is responsible; Apple has no maintenance/support obligation.
4. **Warranty**: CK-Labs bears applicable warranty obligations; Apple’s required refund/warranty allocation remains stated.
5. **Product Claims**: CK-Labs, not Apple, is responsible for product, regulatory, consumer, privacy, and similar claims concerning TycoonX.
6. **Intellectual Property Claims**: CK-Labs, not Apple, handles third-party infringement claims concerning the Licensed Application.
7. **Legal Compliance**: required U.S. embargo and prohibited/restricted-party representation is present.
8. **Developer Identity and Contact**: legal provider name, postal address, phone number, and email are present and match the current App Store trader information and `/tycoonx-impressum`.
9. **Third-Party Terms**: users must comply with applicable third-party terms, including Apple Media Services Terms and Usage Rules.
10. **Apple Third-Party Beneficiary**: Apple and its subsidiaries are expressly identified as third-party beneficiaries with enforcement rights.

## Current TycoonX-specific protections

The current EULA also preserves, subject to mandatory law:

- TycoonX virtual assets are fictional game elements and not real-world money, securities, investments, bank deposits, or ownership interests.
- Purchased Diamonds do not expire solely because time passes.
- 30-Day VIP is one-time and non-renewing unless a future purchase screen expressly introduces a different recurring product.
- Lifetime VIP is a limited-time promotional one-time entitlement, may be withdrawn from future sale, may never return, and does not promise that TycoonX operates forever.
- Future prices, Diamond bundle sizes, VIP prices, regional prices, currencies, taxes, and genuine promotions may change for future purchases without retroactively repricing completed one-time purchases.
- Fraud, forged receipts, chargebacks, duplicated grants, exploits, and invalid transaction state may be corrected using reliable server/store/payment records.
- Security emergencies, unsupported versions, third-party-provider replacement, lawful feature changes, and permanent service discontinuation are covered without waiving mandatory consumer remedies.
- Community moderation, suspension/termination, privacy, third-party AI safeguards, and user-content obligations are cross-referenced consistently with the broader TycoonX legal framework.

## Storefront-specific external purchase gate

TycoonX has an official Xsolla-powered webshop, but the iOS app and App Store metadata must not treat that webshop as globally linkable.

- Apple’s current Guideline 3.1.1(a) permits buttons, external links, or other calls to action to alternative purchase methods in **United States storefront** apps without the StoreKit External Purchase Link Entitlement.
- For storefronts outside the United States, use an applicable StoreKit external-purchase-link entitlement or other Apple-authorized regional program where required before exposing a webshop purchase link or call to action.
- In storefronts where the applicable permission is unavailable or not enabled for TycoonX, do not include in the app **or its metadata** buttons, external links, or calls to action that direct users to Xsolla or another non-IAP purchasing mechanism.
- Do not assume that a website link that is allowed in one storefront is automatically lawful or Apple-compliant in every other storefront.
- If TycoonX lets an iOS user access a digital entitlement bought on another platform or on the web, verify the applicable cross-platform-service rule and whether the same item must also be offered through Apple IAP.
- App Review notes must state truthfully whether any external-purchase link exists, in which storefronts it can appear, and which entitlement/program supports it.

## App Store metadata and review disclosure gate

Apple App Review Guidelines require clear, accurate metadata and enough information for reviewers to understand paid functionality.

- If screenshots, previews, descriptions, promotional text, or feature callouts show Diamonds, VIP benefits, premium automation, or another feature that requires an additional purchase, clearly indicate that the item or feature requires an additional purchase where necessary under Guideline 2.3.2.
- Do not present Lifetime VIP, Diamonds, or another paid benefit as though it is included free with the base download when it is not.
- Keep stale or hard-coded prices out of screenshots and descriptions unless CK-Labs is prepared to maintain them accurately across storefronts, currencies, taxes, and genuine future promotions.
- In App Review notes, explain the TycoonX business model and where the reviewer can test Diamonds, one-time 30-Day VIP, limited-time Lifetime VIP, restore behavior, and any storefront-specific external-purchase behavior.
- If an IAP is configured but intentionally unavailable in the submitted build or storefront, explain the reason to App Review rather than leaving a reviewer unable to find it.

## Public App Store metadata/legal links

Keep the dedicated App Store fields and public legal links consistent:

- Privacy Policy: `/tyconx-privacy-policy`
- Support: `/tyconx-support`
- Terms of Service: `/tyconx-terms-of-service`
- Purchases & Refunds: `/tyconx-purchase-refund-policy`
- Community Standards: `/tycoonx-community-standards`
- Apple Custom EULA public mirror: `/tycoonx-eula`
- German Legal Notice / Impressum: `/tycoonx-impressum`

The App Store description may include a short legal/support footer for transparency, but the Privacy Policy and Support URLs still belong in their dedicated App Store Connect fields, and the Custom EULA must still be configured in the License Agreement field.

Legal/support URLs are not the same thing as a purchase call to action. A Terms, Privacy, Support, Community, EULA, or Impressum link may be appropriate for transparency, but do not turn those legal links into indirect wording that steers users to an external digital-goods checkout in storefronts where Apple does not permit that behavior.

## P0 live App Store metadata drift

A public App Store recheck on **August 27, 2026** still surfaces historical version-history copy using the old `TyconX` spelling. The currently indexed French storefront exposes those stale references in **version 1.0.3** release notes. This is outside the legal repository but remains player-visible.

Before the September 1, 2026 full release:

- if App Store Connect permits editing released version metadata, replace the stale spelling with `TycoonX` and remove any historical wording that could incorrectly imply the current service is still a beta;
- if released version-history metadata is immutable, do not reuse the old wording anywhere and ensure the current app description, promotional text, screenshots, subtitle, keywords, support copy, EULA, legal pages, and new release notes consistently use `TycoonX` and full-release language;
- recheck the major localized App Store storefronts after the next release so stale copy is not accidentally copied forward.

## Release QA

Before the September 1, 2026 full release:

- confirm App Store Connect contains the same substantive EULA as `TYCOONX_APPLE_CUSTOM_EULA.md`;
- confirm the legal provider identity/contact details still match both the App Store trader information and `/tycoonx-impressum`;
- confirm all intended countries/regions are selected for the Custom EULA;
- open the public `/tycoonx-eula` route and verify every rendered brand reference says `TycoonX`;
- open `/tycoonx-impressum` and verify the legal provider address, phone, email, and any applicable register/VAT/business-identification disclosures are current;
- verify there is no stale pre-release or beta wording in the current EULA;
- verify the public EULA links to Terms, Purchases & Refunds, Privacy, Community Standards, and Support;
- verify App Review notes explain TycoonX paid products clearly enough for review, including Diamonds, one-time 30-Day VIP, and limited-time Lifetime VIP;
- verify any iOS link or call to action to the Xsolla webshop is enabled only for storefronts where the actual Apple rules/entitlements permit it;
- verify App Store descriptions/screenshots/previews do not imply that paid VIP or Diamond features are free with the base download;
- recheck Apple’s current minimum-EULA terms and payment-link rules immediately before a material EULA update or new release.
