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

## Apple minimum-term parity gate

Before every submission after a material EULA change, verify that the Custom EULA still contains all Apple-required minimum categories:

1. **Acknowledgement**: the EULA is between the user and CK-Labs, not Apple; CK-Labs is responsible for the app and content.
2. **Scope of License**: non-transferable license for Apple-branded products owned or controlled by the user, subject to Apple Usage Rules and supported sharing/access mechanisms.
3. **Maintenance and Support**: CK-Labs is responsible; Apple has no maintenance/support obligation.
4. **Warranty**: CK-Labs bears applicable warranty obligations; Apple’s required refund/warranty allocation remains stated.
5. **Product Claims**: CK-Labs, not Apple, is responsible for product, regulatory, consumer, privacy, and similar claims concerning TycoonX.
6. **Intellectual Property Claims**: CK-Labs, not Apple, handles third-party infringement claims concerning the Licensed Application.
7. **Legal Compliance**: required U.S. embargo and prohibited/restricted-party representation is present.
8. **Developer Identity and Contact**: legal provider name, postal address, phone number, and email are present and match the current App Store trader information.
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

## Public App Store metadata/legal links

Keep the dedicated App Store fields and public legal links consistent:

- Privacy Policy: `/tyconx-privacy-policy`
- Support: `/tyconx-support`
- Terms of Service: `/tyconx-terms-of-service`
- Purchases & Refunds: `/tyconx-purchase-refund-policy`
- Community Standards: `/tycoonx-community-standards`
- Apple Custom EULA public mirror: `/tycoonx-eula`

The App Store description may include a short legal/support footer for transparency, but the Privacy Policy and Support URLs still belong in their dedicated App Store Connect fields, and the Custom EULA must still be configured in the License Agreement field.

## Release QA

Before the September 1, 2026 full release:

- confirm App Store Connect contains the same substantive EULA as `TYCOONX_APPLE_CUSTOM_EULA.md`;
- confirm the legal provider identity/contact details still match the App Store trader information;
- confirm all intended countries/regions are selected for the Custom EULA;
- open the public `/tycoonx-eula` route and verify every rendered brand reference says `TycoonX`;
- verify there is no stale pre-release or beta wording in the current EULA;
- verify the public EULA links to Terms, Purchases & Refunds, Privacy, Community Standards, and Support;
- verify App Review notes explain TycoonX paid products clearly enough for review, including Diamonds, one-time 30-Day VIP, and limited-time Lifetime VIP;
- recheck Apple’s current minimum-EULA terms immediately before a material EULA update or new release.
