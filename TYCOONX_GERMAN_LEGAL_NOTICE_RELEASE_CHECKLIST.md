# TycoonX German Legal Notice Release Checklist

Last reviewed: September 4, 2026

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

German VSBG §§ 36 and 37 impose different duties and must be treated as separate state transitions, not as one generic “ADR notice” checkbox.

### Current § 36 VSBG annual assessment

Under current § 36 VSBG, a trader that maintains a website or uses general terms and conditions may have to state clearly and accessibly whether it is willing or obliged to participate in consumer-conciliation proceedings.

The § 36(3) small-business exemption is narrow:

- it exempts only the § 36(1) no. 1 general participation-status information duty;
- it applies where the trader employed **ten or fewer persons on 31 December of the preceding year**;
- the legally relevant measure is headcount, not full-time-equivalent working hours; and
- it does **not** remove § 36(1) no. 2 if CK-Labs has legally or contractually committed to participate before a particular consumer conciliation body.

For TycoonX, keep a dated annual record of the legally relevant December 31 headcount and the actual ADR participation/commitment status. Recheck after a business sale, merger, incorporation, employment growth, contractual ADR commitment, or sector change. Do not assume today’s solo-developer structure permanently resolves next year’s § 36 position.

If § 36 requires a general statement, put the required information both on the relevant CK-Labs website and with the applicable consumer Terms where current German law requires it. If CK-Labs is obliged or has committed to participate before a particular body, include the body’s current address and website plus the required participation statement.

Do not add a voluntary participation promise merely because a template contains one. A public statement that CK-Labs will participate can itself become legally relevant and should reflect the founder’s actual decision.

### Current § 37 VSBG unresolved-dispute workflow

The § 36(3) headcount exemption does **not** exempt CK-Labs from § 37. Current Bundesamt für Justiz guidance expressly treats §§ 36 and 37 as parallel duties and states that § 37 applies to all businesses where a consumer-contract dispute could not be resolved directly, irrespective of employee count.

When a TycoonX consumer-contract dispute reaches that unresolved state:

1. identify a consumer conciliation body actually competent for the subject matter;
2. provide the body’s **current postal address and website** to the consumer;
3. state whether CK-Labs is willing or obliged to participate in proceedings before that body; and
4. provide that information in **text form** and retain evidence of what was sent and when.

If CK-Labs is not willing to participate and no specialist body applies, the current BfJ guidance says a reference to a competent body is still required; in doubt, the **Universalschlichtungsstelle des Bundes** can be the competent general body. As of this review, the BfJ list identifies:

- Universalschlichtungsstelle des Bundes, Zentrum für Schlichtung e. V.;
- Straßburger Str. 8, 77694 Kehl, Germany; and
- `https://www.universalschlichtungsstelle.de`.

Treat those details as operational evidence, not timeless hard-coded truth. Verify the current BfJ list immediately before sending a § 37 notice because competence, name, address, or website can change.

A payment-provider support case, Apple refund request, Google Play refund, Xsolla dispute, card-network chargeback, DSA appeal, GDPR request, or ordinary TycoonX support ticket does not automatically satisfy the separate § 37 information duty.

### Entitlement and enforcement isolation

An ADR request, a § 37 notice, or a consumer’s decision to contact a conciliation body is not by itself evidence of fraud, chargeback abuse, exploit activity, account compromise, or a Terms violation. It must not automatically:

- remove purchased Diamonds;
- restart, shorten, extend, or duplicate the one-time non-renewing 30-Day VIP entitlement;
- cancel a valid Lifetime VIP;
- reopen a closed Lifetime VIP sales window;
- create a refund or payment reversal without the applicable provider/legal basis; or
- suspend an account merely because the consumer used a lawful redress channel.

Payment, entitlement, security, moderation, and ADR records should remain independently attributable while still allowing the same transaction to be reconciled where a real remedy is agreed or legally required.

## EU ADR Directive 2025/2647 transition checkpoint

Directive (EU) **2025/2647** entered into force on **January 19, 2026** and amends the EU consumer ADR framework after discontinuation of the former ODR platform. It is in force as an EU directive, but its new trader-facing rules are **not a substitute for current German VSBG duties today**.

Member States must adopt and publish transposition measures by **March 20, 2028** and apply them from **September 20, 2028**. Therefore:

- continue applying the current German VSBG until German transposition law changes it;
- do not prematurely remove the current § 36/§ 37 workflow merely because the 2025 Directive modernizes Article 13;
- re-audit TycoonX Terms, Impressum, support macros, dispute workflows, and this checklist when Germany publishes its transposition law; and
- preserve current consumer rights and court access regardless of any ADR participation decision.

### Future ADR-entity response duty

Under the amended EU framework to be applied after national transposition, when a competent ADR entity decides to consider a consumer complaint and contacts an EU-established trader, the trader generally must say whether it agrees to participate within a period that must not exceed **20 working days**. In complex disputes or exceptional circumstances the ADR entity may extend that period, but not beyond **30 working days**.

The Directive contains exceptions where that reply duty does not apply, including where participation is already mandatory, the ADR entity can reach an outcome without the trader’s consent, or the trader has already contractually committed to use ADR.

Do not implement these future deadlines as a current German statutory deadline before the applicable German transposition rules take effect. Instead, create a calendar/compliance checkpoint for 2028 and design support tooling so an ADR-entity request can later be routed and answered without rebuilding the dispute system.

### Consumer Redress Portal versus discontinued ODR platform

The European Commission now operates the **Consumer Redress Portal**, an interactive tool established under the amended ADR framework. It provides a directory of certified ADR entities, cross-border redress guidance, machine translation, and links to complaint routes where available.

This portal is **not** the former EU ODR platform and its existence does not create a blanket obligation for CK-Labs to participate in every ADR proceeding. Do not reintroduce the discontinued ODR platform link or describe the Consumer Redress Portal as if it were the same service.

If TycoonX chooses to link to the Consumer Redress Portal for consumer-help purposes, describe it accurately as a current information/redress-navigation tool and do not imply that using it automatically creates a refund, entitlement restoration, or binding settlement.

## EU ODR platform

Do **not** add the old EU Online Dispute Resolution platform link. Regulation (EU) 2024/3228 repealed the ODR Regulation with effect from July 20, 2025 and discontinued the platform.

Audit copied templates, old website footers, App Store/Google Play metadata, checkout templates, and localized legal pages so an obsolete ODR link is not reintroduced.

## Release evidence packet

Keep a small dated evidence packet for each material operator/contact change containing:

1. screenshot or archived output of `/tycoonx-impressum` while logged out;
2. proof that Support and the main legal hub link to the Impressum;
3. the current operator name/address/email/phone verification checklist;
4. register/VAT/business-ID determination showing either the disclosed value or why no disclosure is currently applicable;
5. VSBG § 36 headcount/participation assessment for the legally relevant December 31 date;
6. the current § 37 unresolved-dispute text-form template plus a dated competent-body verification source;
7. a 2028 transition reminder for Directive (EU) 2025/2647 and German implementing legislation;
8. Apple App Store Connect trader-status screenshot/export and the public EU App Store trader display;
9. Google Play developer/merchant identity checkpoint where relevant;
10. representative Xsolla checkout/receipt merchant identity; and
11. a record of any operator/address/business-transfer change and the surfaces updated because of it.

Do not store identity-verification documents or other personal data in this public repository. Keep sensitive evidence in an appropriately protected location.

## Brand and release QA

- Display `TycoonX` exactly in all rendered text.
- Technical legacy route/file names containing `tyconx` may remain where changing them risks breaking URLs.
- TycoonX has been in full release since September 1, 2026. Do not describe the current service, purchases, VIP, Diamonds, users, or legal terms as beta.
- Do not copy legal-disclaimer language from competing games.
- Keep provider details synchronized with the Apple Custom EULA, current EU App Store trader information, and the real current operator.
- Recheck all facts whenever CK-Labs changes address, phone, email, legal status, register status, VAT/business-identification status, Apple Developer account status, or operator structure.
