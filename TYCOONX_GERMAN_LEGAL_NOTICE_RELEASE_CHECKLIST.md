# TycoonX German Legal Notice Release Checklist

Last reviewed: September 2, 2026

This checklist governs the public TycoonX legal notice at `/tycoonx-impressum`. It supplements the Terms, Purchases & Refunds Policy, Privacy Policy, Community Standards, Apple Custom EULA, store/payment release gates, and platform-specific compliance settings.

TycoonX is in full release. Treat this as a live-production compliance gate, not a pre-release placeholder checklist.

## Current public legal notice

The public page currently identifies:

- Atakan Cevik, trading as CK-Labs;
- Prämonstratenserstraße 80, 51069 Köln, Germany;
- telephone +49 15750464587;
- email cevikdev@gmail.com;
- a conditional DSA contact point for TycoonX functions to which Articles 11 or 12 DSA apply;
- German and English as contact languages; and
- the TycoonX Support form as an additional non-fully-automated contact route.

The current legal-notice route is already implemented. Do not leave stale checklist wording saying that an Impressum still needs to be added.

## DDG § 5 gate

For current production and after any operator/contact change, verify the public page against the facts that actually apply to CK-Labs. German DDG § 5 requires the relevant provider information to be easily recognizable, directly reachable, and constantly available for commercial digital services.

Verify:

- the legal provider name and establishment address are current;
- the address is a complete serviceable street address for the relevant establishment, not merely a post-office box;
- email remains actively monitored and supports rapid electronic contact;
- any additional direct-communication route shown publicly remains usable;
- if CK-Labs has a commercial-register or comparable register entry that must be disclosed, add the register and number;
- if CK-Labs possesses a German VAT identification number under § 27a UStG or a business identification number under § 139c AO, add the applicable number;
- if a future TycoonX activity becomes subject to official authorization, regulated-profession disclosure, liquidation disclosure, or another special DDG § 5 category, add the information that category requires; and
- the Impressum remains reachable without login and without forcing consent to optional tracking or marketing.

Do not invent a VAT ID, register number, supervisory authority, chamber membership, professional title, or legal form when it does not apply.

### Contact-method caution

The face of DDG § 5 requires information enabling rapid electronic contact and direct communication, including an email address. Current German guidance recognizes that direct and efficient communication is not necessarily limited to a telephone call in every case.

TycoonX currently publishes a telephone number voluntarily and Apple separately requires a verified phone number for an EU App Store trader. While the number is displayed, keep it accurate and usable. Do not state in TycoonX legal copy that a telephone number is universally mandatory under DDG § 5 merely because one is currently provided.

## Placement and reachability gate

Do not treat the presence of the operator information somewhere in Terms or Privacy as a substitute for an accessible Impressum.

Production expectations:

- keep a clearly named `Impressum / Legal Notice` route;
- keep it publicly accessible without account authentication;
- keep it directly linked from `/tyconx-support` and `/tycoonx-legal`;
- keep it reachable in no more than a small number of ordinary navigation steps from CK-Labs-controlled TycoonX commercial pages;
- add a direct legal-notice/footer link on any CK-Labs-controlled TycoonX web shop or commercial landing page where the existing navigation would otherwise make the provider information difficult to find; and
- regression-test the link after route, framework, localization, footer, or hosting changes.

A cookie banner, regional redirect, maintenance page, age gate, or logged-out state must not accidentally make the legally required provider information unavailable where the duty applies.

## Apple EU App Store trader-status parity

Apple currently requires developers to declare trader status for App Store distribution and, for apps distributed in the EU by a trader, Apple verifies and displays trader contact information on the App Store product page. Apple states that verified trader information includes an address, phone number, and email address. For an individual developer, Apple permits an address or P.O. Box for its trader display and requires phone/email verification plus supporting documentation.

For TycoonX EU App Store distribution:

- perform and retain a dated trader-status assessment rather than choosing `not a trader` merely to avoid public contact information;
- if TycoonX is distributed in the EU in a commercial/business capacity, make sure the applicable app-level trader status is configured and verified in App Store Connect;
- keep the Apple-displayed trader name/contact information consistent with the real CK-Labs operator and current support/legal-notice information;
- verify the Apple email and phone remain under CK-Labs control and can receive verification/support communications;
- retain the supporting document used for Apple verification according to an appropriate secure retention policy;
- recheck trader status after an Apple Developer account conversion, operator/address change, business sale, succession, or app transfer; and
- verify the EU App Store product page after any change rather than assuming App Store Connect saved state equals the public state.

Do not confuse Apple’s platform-specific trader display with the German DDG Impressum. In particular, an Apple-accepted P.O. Box does not by itself replace the serviceable establishment street address required for the German legal notice where DDG § 5 applies.

Apple’s trader verification/display obligation is part of Apple’s role as the App Store platform. CK-Labs remains responsible for supplying truthful information and keeping its own legally required provider disclosures accurate. The Apple trader card does not replace TycoonX Terms, Privacy, Purchases & Refunds, withdrawal information, or the German legal notice.

Apple has stated that, since February 18, 2025, apps without the required trader status are removed from the App Store in the EU until status is provided and verified. Treat an unverified/mismatched trader status as an EU distribution blocker, not as a cosmetic metadata issue.

### Apple status must not mutate paid entitlements

A trader-verification failure, metadata correction, temporary EU delisting, app transfer, or later successful verification must not by itself:

- delete or duplicate purchased Diamonds;
- restart, extend, shorten, or duplicate the original one-time 30-Day VIP period;
- introduce an expiry into an otherwise valid Lifetime VIP;
- convert Lifetime VIP into 30-Day VIP;
- create a refund, chargeback, or fraud finding without the corresponding provider/legal basis; or
- replay an Apple transaction that has already been processed.

If distribution becomes unavailable for a material period, assess the separate conformity, notice, outage, termination, and mandatory consumer-remedy rules instead of treating trader metadata as a universal entitlement clawback.

## Google Play and Xsolla identity boundaries

Apple trader verification does not prove that Google Play or Xsolla displays the correct contracting or merchant information.

For Google Play and Xsolla:

- verify the actual current developer/merchant information independently in the relevant console/checkout;
- keep CK-Labs-controlled legal pages consistent with the real operator;
- do not claim CK-Labs is the payment processor or merchant of record where a transaction-specific provider has that role;
- do not let a provider’s address, tax entity, or merchant descriptor replace CK-Labs’ own provider identity where German law requires CK-Labs to disclose it; and
- after a provider replacement, merger, business transfer, or successor-operator change, update each affected surface separately.

## DDG § 6 commercial-communications cross-check

The Impressum is not the only German transparency control. TycoonX commercial communications and promotions must separately pass `TYCOONX_EU_GERMAN_DIRECT_MARKETING_COMMUNICATIONS_RELEASE_GATE.md`.

Where DDG § 6 applies, commercial communications must not disguise their commercial character or the person/business on whose behalf they are made, and promotion conditions must be accessible, clear, and unambiguous. Do not use the existence of an Impressum as a substitute for truthful campaign-level sender/promotion disclosures.

## Digital Services Act contact-point gate

TycoonX has community and user-generated-content functionality. For each function that legally qualifies as an intermediary service under the DSA, verify whether Articles 11 and 12 apply to CK-Labs in the relevant provider role.

Current public wording is deliberately conditional rather than asserting that every TycoonX function is an intermediary service.

If the DSA contact-point duties apply:

- keep the electronic contact point publicly accessible and up to date;
- keep at least German available for authority communications because CK-Labs is established in Germany;
- keep a broadly understood language, currently English, available in addition;
- ensure recipients can communicate directly and rapidly through a user-friendly electronic route;
- do not make the recipient contact route rely solely on automated tools; and
- keep the Support form and email operational.

Do not confuse Apple’s App Store trader-information obligations with CK-Labs’ own DSA Article 11/12 contact-point duties where those duties apply to a TycoonX feature.

## Consumer dispute-resolution gate

German VSBG § 36 contains general website/Terms information duties about participation in consumer conciliation, but § 36(3) exempts a trader from the § 36(1) no. 1 information duty when the trader employed ten or fewer persons on 31 December of the preceding year.

Do not infer the applicable headcount or participation status from stale data. Recheck the legally relevant facts for the current year and whenever the business structure changes.

If § 36 requires a general statement, add the required clear information to the website and Terms. If CK-Labs becomes obliged or commits to participate before a specific consumer conciliation body, include the body, address, website, and participation statement required by § 36.

Independently, after a consumer-contract dispute cannot be resolved directly, follow § 37 VSBG and provide the consumer in text form with the competent consumer conciliation body and whether CK-Labs is willing or obliged to participate.

Do not treat an Apple, Google Play, Xsolla, card-network, chargeback, or platform-support process as automatically satisfying a separate statutory German ADR information duty.

## EU ODR platform

Do **not** add the old EU Online Dispute Resolution platform link. Regulation (EU) 2024/3228 repealed the ODR Regulation with effect from July 20, 2025 and discontinued the platform.

Audit copied templates, old website footers, App Store/Google Play metadata, checkout templates, and localized legal pages so an obsolete ODR link is not reintroduced.

## Release evidence packet

Keep a small dated evidence packet for each material operator/contact change containing:

1. screenshot or archived output of `/tycoonx-impressum` while logged out;
2. proof that Support and the main legal hub link to the Impressum;
3. the current operator name/address/email/phone verification checklist;
4. register/VAT/business-ID determination showing either the disclosed value or why no disclosure is currently applicable;
5. VSBG § 36 headcount/participation assessment for the legally relevant date;
6. Apple App Store Connect trader-status screenshot/export and the public EU App Store trader display;
7. Google Play developer/merchant identity checkpoint where relevant;
8. representative Xsolla checkout/receipt merchant identity; and
9. a record of any operator/address/business-transfer change and the surfaces updated because of it.

Do not store identity-verification documents or other personal data in this public repository. Keep sensitive evidence in an appropriately protected location.

## Brand and release QA

- Display `TycoonX` exactly in all rendered text.
- Technical legacy route/file names containing `tyconx` may remain where changing them risks breaking URLs.
- TycoonX has been in full release since September 1, 2026. Do not describe the current service, purchases, VIP, Diamonds, users, or legal terms as beta.
- Do not copy legal-disclaimer language from competing games.
- Keep provider details synchronized with the Apple Custom EULA, current EU App Store trader information, and the real current operator.
- Recheck all facts whenever CK-Labs changes address, phone, email, legal status, register status, VAT/business-identification status, Apple Developer account status, or operator structure.
