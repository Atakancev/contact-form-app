# TycoonX Apple EU DSA Trader-Status Release Gate

Last reviewed: September 2, 2026  
Owner: CK-Labs  
Scope: TycoonX App Store distribution in the European Union, Apple Developer/App Store Connect trader declarations, public App Store trader contact information, and consistency with the TycoonX German legal notice and purchase/legal surfaces.

## Purpose

TycoonX is a commercial game with paid products including Diamonds, one-time 30-Day VIP, and limited-window Lifetime VIP. EU App Store distribution therefore needs a deliberate Apple trader-status decision and verified public contact information where the developer is acting as a trader.

This gate prevents four classes of failure:

1. an incorrect `not a trader` declaration used to avoid public contact information;
2. an unverified or stale trader status that can block EU App Store distribution;
3. inconsistent operator/contact information across Apple, the TycoonX Impressum, legal documents, and payment/support surfaces; and
4. trader-metadata changes accidentally mutating paid entitlements.

This is an operational release/compliance gate. It does not change the canonical Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards and therefore does not reopen localization unless public contractual meaning changes later.

## 1. Legal/platform role separation

DSA Articles 30 and 31 impose traceability/compliance-by-design duties on online platforms that allow consumers to conclude distance contracts with traders. Apple implements those duties for App Store distribution by requiring developers to declare trader status and, for EU-distributed apps where the developer is a trader, by verifying and displaying trader contact information.

Do not rewrite this as though CK-Labs itself operates the App Store marketplace merely because TycoonX is listed there.

CK-Labs must nevertheless:

- make a truthful trader-status assessment;
- provide accurate information to Apple;
- complete Apple verification where required;
- keep the information current; and
- preserve its own separate German/EU provider, pre-contract, privacy, consumer, and purchase disclosures.

## 2. Trader-status assessment

Before every material EU App Store release/compliance review, preserve a dated assessment of whether the TycoonX developer is acting as a trader for that app.

Relevant indicators include whether the app is developed and distributed in a professional/business capacity, generates revenue through paid apps, in-app purchases, advertising, or other commercial activity, and is promoted to consumers as part of a business.

Operational rule:

- do not choose `not a trader` merely to avoid publishing an address, phone number, or email;
- do not assume individual Apple Developer enrollment means `not a trader`;
- do not assume lack of a corporation or commercial-register entry means `not a trader`;
- do not assume a free download makes the app non-commercial where paid in-app products or other business activity exist; and
- reassess after a genuine business-model or operator change.

If legal classification is genuinely uncertain, record the facts and legal basis used. Do not use uncertainty as a silent default to the less transparent option.

## 3. Current Apple EU trader requirements

Apple currently states that all developers need to declare trader status and that traders distributing apps on the App Store in the EU must provide verified contact information that Apple displays on the App Store product page.

For an individual Apple Developer account acting as a trader, Apple currently requests for public display:

- address or P.O. Box;
- phone number; and
- email address.

Apple also requires verification of the email and phone and supporting documentation for the name/address information. Organizations have a different address-source flow tied to organization/D-U-N-S information and still provide public phone/email information.

Apple also asks traders to have payment account information completed and to certify that they only offer products or services complying with applicable EU law.

Apple has stated that, since February 18, 2025, apps without the required trader status are removed from the App Store in the EU until trader status is provided and verified.

Release rule: an incomplete, rejected, stale, or accidentally disabled trader status is an EU distribution blocker.

## 4. App-specific status and public-page verification

Account-level setup is not enough evidence by itself because Apple permits app-specific trader-status configuration.

For TycoonX:

1. open the TycoonX App Information / applicable App Store Connect compliance surface;
2. confirm the app-specific EU DSA trader status;
3. confirm verification is complete;
4. verify the public EU App Store product page actually displays the expected current contact information;
5. preserve a dated screenshot/export; and
6. repeat after any operator, Apple-account, app-transfer, or contact-information change.

Do not rely solely on an old App Store Connect screenshot. Public output is part of the evidence.

## 5. Contact-information parity

The Apple trader information and TycoonX-controlled legal information should identify the same real operator without creating a false impression about who operates TycoonX.

Check at least:

- developer/trader name versus the real CK-Labs operator;
- public Apple address versus the documented trader identity;
- phone number control;
- email control;
- `/tycoonx-impressum` operator identity;
- Apple Custom EULA provider identity;
- canonical Terms contact/operator wording;
- Privacy contact/controller wording; and
- Support contact information.

Small formatting differences are acceptable where they do not change identity or mislead. Material identity/address differences require investigation and correction.

### German Impressum is separate

Apple currently permits an individual trader to use an address or P.O. Box for the App Store trader display. That does not mean a P.O. Box alone satisfies the German DDG legal-notice address duty.

The TycoonX Impressum must independently preserve the complete serviceable establishment/street address required where DDG § 5 applies. Do not replace the German establishment address with a P.O. Box merely because Apple accepts that address type for its own trader display.

Similarly, Apple requires a phone number for its trader flow. Do not misstate that Apple-specific requirement as the universal wording of DDG § 5.

## 6. Public-data and security handling

Apple trader contact information is intended for public display. Treat that as a deliberate publication decision.

- do not accidentally submit a private phone/email/address that CK-Labs did not intend to publish when an appropriate verified business contact route is available;
- do not store Apple verification identity documents in this public repository;
- restrict internal access to verification documents;
- keep enough evidence to prove the verified status without unnecessarily copying identity documents into support tickets or analytics;
- investigate unexpected Apple verification prompts or changed trader data as potential account-security signals; and
- after Apple account compromise, verify trader metadata before trusting any simultaneous payout, banking, app-transfer, or contact changes.

A change to public trader contact information is not proof of a change in ownership of TycoonX by itself.

## 7. Business sale, reorganization, app transfer, and successor operator

A business transfer or successor operator can require coordinated changes across Apple and TycoonX legal surfaces.

Before completing an Apple app transfer or operator change:

- determine the actual successor operator and effective date;
- determine whether the receiving Apple developer is a trader and complete the required verification;
- update the TycoonX Impressum, Terms/Privacy/Purchases or other canonical documents only where the public legal identity/meaning genuinely changes;
- if canonical meaning changes materially, reopen only the affected localization document types and resynchronize all 25 locales in the established order;
- map purchase and entitlement restoration to authoritative Apple transaction history; and
- ensure the transition does not create duplicate ownership records or paid-value grants.

Do not announce a successor as the legal operator before the relevant transfer is actually effective.

## 8. Provider boundaries

### Apple

Apple controls App Store trader-verification workflow, public App Store trader display, App Store transaction infrastructure, and platform distribution decisions. CK-Labs controls the truthfulness of information it supplies and its TycoonX legal/support content.

### Google Play

Apple trader verification does not satisfy Google Play developer identity, merchant, verification, or store-disclosure requirements. Verify Google Play independently.

### Xsolla

Apple trader verification does not determine which Xsolla entity is merchant of record or contracting payment entity for a particular webshop transaction. Preserve the transaction-specific Xsolla role separately.

A user may therefore see CK-Labs as the TycoonX operator, Apple as the App Store platform/payment channel for an Apple purchase, or a transaction-specific Xsolla entity as merchant/payment provider for a webshop purchase. Those roles must be explained accurately rather than collapsed into one fictional merchant.

## 9. Paid-entitlement isolation

A trader-status change, verification retry, metadata correction, EU delisting, account transfer, or platform compliance hold must never directly rewrite paid entitlements.

### Diamonds

- do not delete purchased Diamonds merely because the app is temporarily unavailable in an EU storefront;
- do not duplicate Diamonds when distribution is restored;
- do not replay a consumable transaction merely because the developer account or trader status changed; and
- correct only value tied to an independently evidenced refund, chargeback, duplicate grant, fraud/exploit event, or other lawful basis.

### One-time 30-Day VIP

- do not restart the 30-day clock after trader verification succeeds;
- do not pause or extend it automatically merely because Apple temporarily delists the app, unless a separate lawful remediation/compensation decision is made;
- do not convert it into a subscription; and
- do not duplicate it during app transfer or entitlement restoration.

### Lifetime VIP

- do not introduce a hidden expiry because trader verification failed;
- do not downgrade valid Lifetime VIP to 30-Day VIP;
- do not make a prior valid purchase depend on Lifetime VIP remaining continuously on sale;
- continue to treat Lifetime VIP as a limited-time promotional offering available only during genuine selected sales windows for new purchases; and
- preserve mandatory consumer remedies if a distribution/service issue materially affects the purchased digital service.

## 10. Distribution outage and mandatory consumer rights

An Apple trader-status failure can cause an EU distribution interruption, but the legal consequence for existing purchasers depends on the actual effect on the digital product/service.

Do not use a platform-compliance hold as a blanket force-majeure/no-liability clause or as an automatic reason to erase paid value.

Instead:

1. determine whether existing users can still access TycoonX and their paid entitlements;
2. identify whether updates, security fixes, restoration, or reinstallation are affected;
3. fix trader verification promptly;
4. provide truthful service information where the impact is material;
5. preserve mandatory German/EU conformity, update, termination, price-reduction, refund, withdrawal, and liability rights; and
6. apply compensation only where required or deliberately granted, without implying every future incident has the same remedy.

## 11. Fraud, spoofing, and account compromise

Treat messages claiming `Apple trader verification failed` as security-sensitive until the sender and App Store Connect state are verified.

Do not:

- upload identity documents through an unverified email link;
- disclose Apple credentials or 2FA codes to a supposed reviewer;
- change payout/bank information solely because a trader-status message asks for it;
- infer that a player account is fraudulent because the developer’s Apple trader verification is under review; or
- use a platform compliance issue to justify unrelated account suspensions.

If the Apple developer account itself is compromised, use the separate security/account-compromise response process and reconcile trader metadata, app ownership, banking/payout details, certificates/keys, and transaction-notification endpoints independently.

## 12. Regression scenarios

Before treating EU App Store trader compliance as production-ready, test/document at least:

1. current TycoonX EU listing shows verified trader information;
2. individual developer trader address/phone/email are current;
3. Apple public data and TycoonX Impressum identify the same real operator;
4. Apple uses a P.O. Box while the German Impressum still keeps a valid street establishment address;
5. email changes and the old address is removed after successful verification;
6. phone changes and public display updates correctly;
7. app-specific trader status is accidentally disabled;
8. Apple verification is pending during an app update;
9. Apple temporarily removes EU distribution for compliance;
10. existing purchased Diamonds remain unchanged during that interruption;
11. 30-Day VIP does not restart after restoration;
12. Lifetime VIP remains valid for an existing purchaser;
13. a genuine Lifetime VIP sales window closes during a trader-status incident;
14. an Apple app transfer occurs without duplicate entitlements;
15. a successor operator changes legal identity and triggers only the necessary canonical/localization updates;
16. an unexpected verification email is a phishing attempt;
17. Google Play information differs and is corrected independently;
18. Xsolla merchant details differ for a transaction and remain correctly disclosed;
19. a refund/revocation arrives during trader-status remediation and is processed exactly once; and
20. a user seeks a mandatory remedy because a prolonged distribution issue materially affects the service.

## 13. Evidence packet

Keep a dated production evidence packet containing:

- the trader-status assessment;
- App Store Connect account-level trader-status screenshot/export;
- TycoonX app-specific trader-status screenshot/export;
- public EU App Store product-page trader-information screenshot;
- current `/tycoonx-impressum` screenshot while logged out;
- contact-parity checklist;
- verification completion date;
- any Apple rejection/remediation correspondence;
- operator/app-transfer history where applicable; and
- regression-test result summary.

Do not commit identity-verification documents, personal IDs, bank documents, or other sensitive verification material to this repository.

## 14. Change triggers

Re-run this gate when any of the following changes:

- operator/legal status;
- address, phone, or email;
- Apple Developer enrollment type;
- App Store Connect account holder;
- TycoonX app ownership/app transfer;
- EU distribution status;
- Apple trader-status rules;
- Apple public trader display;
- business sale, merger, or successor operator;
- App Store payment/merchant arrangement; or
- applicable DSA/platform rules.

## 15. Current official reference checkpoint

Reverify these official sources before a material change because platform instructions can change:

- Apple App Store Connect Help, `Manage European Union Digital Services Act trader requirements`;
- Apple Developer `Upcoming Requirements` / current EU trader-status notices; and
- Regulation (EU) 2022/2065, especially Articles 30 and 31 for the online-platform traceability/compliance-by-design framework.

The September 2, 2026 checkpoint confirms Apple still states that EU App Store trader contact information is verified and displayed and that apps lacking required trader status are removed from EU App Store distribution until compliance is completed.
