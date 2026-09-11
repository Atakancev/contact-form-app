# TycoonX German DDG Impressum and Provider Identification Gate

Status: production compliance gate for CK-Labs controlled TycoonX websites, legal pages, support surfaces, and web purchase entry points.

This document is an implementation and release-control checklist. It does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, Community Standards, or transaction-specific checkout disclosures.

## 1. Purpose

German provider-identification law requires certain information for business-like digital services to be easy to recognize, directly reachable, and permanently available. TycoonX already has a dedicated `/tycoonx-impressum` page. This gate exists to make sure that page and the routes leading to it remain correct when CK-Labs changes business details, payment providers, support infrastructure, ownership, or web structure.

The goal is not to publish unnecessary personal or business data. The goal is to publish the information actually required by law, keep it accurate, and avoid stale or guessed information.

## 2. Current legal reference

For a commercial digital service within the scope of § 5 DDG, the provider information must be:

- easily recognizable;
- directly reachable; and
- permanently available.

Depending on the provider and activity, § 5 DDG can require:

1. the legal name and establishment address;
2. information enabling rapid electronic contact and direct communication, including an email address;
3. the competent supervisory authority where the activity requires official authorization;
4. the relevant commercial or comparable register and registration number where the provider is registered;
5. regulated-profession information where applicable;
6. a VAT identification number or German economic identification number where the provider possesses one of the numbers covered by the statute;
7. liquidation information for certain company forms where applicable; and
8. special information for audiovisual media-service providers where applicable.

Other information duties remain separately applicable. The Impressum must therefore be read together with consumer, privacy, DSA, accessibility, dispute-resolution, checkout, and platform-specific requirements rather than treated as a complete legal notice for every subject.

## 3. Current TycoonX repository state reviewed

The current `app/tycoonx-impressum/page.tsx` already contains the core provider-identification structure:

- the legal operator name together with the CK-Labs trading name;
- a German postal address;
- an email address;
- a direct phone contact;
- a dedicated DSA contact-point section;
- the current consumer-dispute explanation; and
- links to the main TycoonX legal and support pages.

The main `/tycoonx-legal` page and `/tyconx-support` page currently link to `/tycoonx-impressum`.

No missing register number, VAT identification number, economic identification number, supervisory authority, regulated-profession information, or liquidation statement should be invented merely to make the page look more complete. Those fields must be added only if the corresponding legal fact actually applies.

## 4. P0 operator-identity rule

Every CK-Labs controlled TycoonX legal or commerce surface must identify the real contracting or service operator consistently.

The trade name `CK-Labs` must not replace the legal operator identity where German law requires the legal name.

Safe pattern when factually correct:

`[legal operator name], trading as CK-Labs`

Unsafe patterns include:

- identifying only `TycoonX` as though the game itself were a legal person;
- identifying only `CK-Labs` while hiding the legally required operator name;
- showing a former operator after a sale, merger, restructuring, or succession;
- showing one operator in the Impressum and a conflicting operator in checkout or Terms without explaining the actual contractual roles; or
- copying the legal identity of Apple, Google, Xsolla, RevenueCat, a hosting provider, or another vendor into CK-Labs' provider notice merely because that vendor participates in the service.

## 5. P0 address and contact accuracy

The provider address and direct electronic contact must remain real and current.

Release checks:

- the postal address is the legally appropriate establishment/service address for the operator;
- the email inbox is monitored and capable of receiving legal and consumer communications;
- links using `mailto:` resolve to the same published address;
- the page does not knowingly publish an obsolete address after relocation;
- a provider migration or support-tool outage does not make the statutory contact route disappear; and
- any optional phone number published is kept current or removed if no longer valid.

A support form may supplement direct contact, but the current statutory requirement for an email address must not be replaced by a form-only contact design.

## 6. Conditional company and tax fields

The following fields are conditional and must be verified from authoritative business records before publication.

### Register information

If the legal operator is entered in a commercial register or another register covered by § 5 DDG, publish the actual register and registration number.

Do not invent an HRB/HRA or other number for a sole proprietor merely because corporate Impressum templates contain such a field.

### VAT identification number and economic identification number

If the operator possesses a VAT identification number covered by § 27a UStG or a German economic identification number covered by § 139c AO and § 5 DDG requires publication of that number, publish the applicable number.

Do not confuse any of the following merely because all can be called a tax number in informal conversation:

- personal German tax identification number;
- local tax-office tax number;
- VAT identification number;
- German economic identification number;
- foreign TIN used on payment-provider or tax forms.

Only the number legally required for the Impressum should be published. Personal tax identifiers that are not legally required should not be exposed publicly.

### Supervisory authority

Add a competent supervisory authority only where the digital service is offered in the course of an activity requiring official authorization and the field is legally applicable.

### Regulated profession

Add chamber, professional title, state of award, and professional rules only if the operator is providing the service in a regulated profession to which those fields apply.

### Liquidation

If a company form covered by the statutory liquidation rule enters liquidation or winding-up, the Impressum must reflect that status where required.

## 7. P0 reachability and navigation

A technically correct Impressum can still fail operationally if users cannot reach it reliably.

For CK-Labs controlled TycoonX web surfaces, the Impressum should be reachable from obvious legal/support navigation without requiring login, purchase, account creation, or acceptance of optional cookies/analytics.

At minimum, verify reachability from the relevant public surfaces, including as applicable:

- TycoonX legal hub;
- TycoonX support page;
- CK-Labs controlled TycoonX webshop entry pages;
- checkout-preparation pages controlled by CK-Labs;
- account deletion/privacy pages;
- security/contact pages; and
- any future public TycoonX marketing website that qualifies as a covered digital service.

A legal link should not be hidden behind a transient modal, rotating banner, login wall, inaccessible menu, or JavaScript state that disappears when optional tracking consent is refused.

The exact technical route may continue to use an existing legacy spelling if changing the route would break deployed links, but all rendered player-facing text must say `TycoonX`.

## 8. Platform and payment-provider separation

Apple App Store, Google Play, Xsolla, RevenueCat, banks, card networks, authentication providers, hosting vendors, and cloud providers may have their own identities and legal notices. Their involvement does not automatically replace CK-Labs' own provider-identification duty for CK-Labs controlled TycoonX services.

The legal role should be described according to the actual transaction.

Examples:

- Apple may process an App Store purchase and control the App Store transaction record, while CK-Labs still operates TycoonX and delivers the game entitlement.
- Google may process a Google Play transaction, while CK-Labs still operates the TycoonX service.
- Xsolla may act as merchant of record for a specific webshop transaction, while CK-Labs remains responsible for the TycoonX game entitlement and its own controlled web/service information.

The presence of a provider-specific receipt or checkout legal notice does not justify removing CK-Labs' provider information from CK-Labs controlled public surfaces.

## 9. Business sale, merger, restructuring, or successor operator

Before a business sale, asset transfer, merger, incorporation, conversion of legal form, or other successor-operator event affects TycoonX, perform one coordinated legal-identity migration.

The migration checklist must include:

- Impressum operator name and address;
- Terms contracting-party references;
- Privacy controller identity and contact details;
- Purchases & Refunds wording where merchant/operator roles change;
- DSA contact points where applicable;
- support contact information;
- Apple App Store seller/developer information where affected;
- Google Play developer information where affected;
- Xsolla publisher/merchant configuration where affected;
- payment receipts and customer support templates;
- required consumer notices or consent where the legal change triggers them; and
- retention of historic transaction provenance so old purchases can still be reconciled correctly.

Do not silently change the operator in only one page while leaving conflicting identities elsewhere.

## 10. Provider or infrastructure outage

A CDN, deployment, DNS, authentication, support, or payment-provider outage must not be treated as permission to remove legally required provider information for an extended period.

Operational response should prioritize restoring public legal/contact access alongside other critical customer-facing services.

Where a third-party provider is replaced, the replacement must not accidentally:

- remove the Impressum link;
- hide the Impressum behind authentication;
- rewrite the operator identity to the provider's identity;
- break email links;
- serve a stale cached legal page after a real operator/address change; or
- cause regional visitors to receive a different and inaccurate operator notice.

## 11. Privacy minimization

Provider-identification duties do not justify publishing unrelated personal data.

Do not add publicly unless legally required and verified:

- personal German tax identification number;
- private bank account data;
- passport or identity-card data;
- date of birth;
- payment-provider account IDs;
- private authentication details;
- private residential information beyond an address that is actually legally required for the provider notice; or
- internal security contacts that would create unnecessary risk.

If a legally required public detail creates a safety concern, obtain legal advice about lawful alternatives rather than silently omitting the field or replacing it with false information.

## 12. Changes that require an immediate Impressum review

Trigger a same-release review if any of the following occurs:

- operator name changes;
- CK-Labs legal form changes;
- establishment/service address changes;
- support/legal email changes;
- a register entry is created, changed, or removed;
- a VAT identification number or economic identification number becomes legally publishable under § 5 DDG;
- a regulated or licensed activity becomes relevant;
- the business enters liquidation where the statutory rule applies;
- TycoonX is transferred to another operator;
- Xsolla or another payment arrangement changes the contracting-party presentation materially;
- the legal hub, support navigation, domain, or website architecture changes;
- the Impressum route changes;
- geo-routing or localization starts serving materially different legal navigation; or
- a redesign removes persistent legal links.

## 13. Release QA scenarios

### Scenario A: ordinary legal-hub visit

A user opens `/tycoonx-legal` without logging in. The user can directly reach the Impressum and see the current legal operator, address, and electronic contact.

Expected result: pass.

### Scenario B: support visitor rejects optional analytics

A user rejects optional analytics/tracking and opens TycoonX Support.

Expected result: the Impressum link and provider information remain accessible. Legal access must not depend on optional tracking consent.

### Scenario C: business address changes

CK-Labs changes its legally relevant establishment/service address.

Expected result: update the Impressum promptly and review Terms, Privacy Policy, checkout/support identity, and provider dashboards for conflicting old data.

### Scenario D: new VAT identification number

CK-Labs receives a VAT identification number that falls within the publication rule.

Expected result: verify the number from authoritative records and add the correct VAT identification number. Do not publish the personal tax identification number by mistake.

### Scenario E: no register entry exists

A generic website template asks for a commercial-register number, but the operator is not registered in a covered register.

Expected result: do not invent a register or registration number.

### Scenario F: Xsolla is merchant of record

A German consumer completes a TycoonX webshop transaction where the checkout identifies the relevant Xsolla entity as merchant of record.

Expected result: preserve the accurate Xsolla transaction-party information for that checkout while continuing to identify CK-Labs correctly on CK-Labs controlled TycoonX service/legal pages.

### Scenario G: Apple refund request

A player follows Apple’s refund process for an App Store transaction.

Expected result: Apple’s payment/refund role does not transform Apple into the operator of TycoonX or justify removing CK-Labs provider information.

### Scenario H: successor operator

TycoonX is legally transferred to a successor company.

Expected result: coordinated identity migration across Impressum, Terms, Privacy, support, payment-provider configuration, and relevant notices. Historic transaction provenance remains auditable.

### Scenario I: stale cached page

The origin has correct provider information, but a CDN serves an older legal notice after a real operator/address change.

Expected result: invalidate the stale version and treat legal-page cache correctness as part of deployment QA.

### Scenario J: legacy technical route

A technical route contains `tyconx` because changing it would break existing URLs.

Expected result: the route may remain, but every rendered heading, title, description, link label, legal sentence, support sentence, and checkout sentence uses `TycoonX`.

## 14. Evidence to retain

Maintain enough evidence to show that provider information was intentionally reviewed rather than copied from a generic template.

Useful records include:

- date of the most recent identity/address/contact review;
- authoritative source used to verify any register entry;
- authoritative source used to verify any VAT identification or economic identification number before publication;
- reason a conditional § 5 DDG field is applicable or not applicable;
- screenshots or automated checks showing the Impressum is reachable from core public legal/support surfaces;
- change record for operator/address/contact updates; and
- deployment evidence showing stale versions were invalidated when materially necessary.

Do not place sensitive tax or identity evidence in a public repository merely to prove the review occurred.

## 15. Compliance ownership

Before each material business-identity change, assign an owner for the legal identity migration. For a solo-operated business this can be the same person who manages TycoonX, but the checklist should still be followed explicitly so one provider dashboard or public page is not forgotten.

## 16. Current repository conclusion

At the time of this gate, the existing TycoonX Impressum contains the core legal operator, postal address, and electronic-contact structure required for the present audit. The main TycoonX legal and support pages also expose an Impressum link.

The unresolved work is fact verification, not speculative copy expansion:

1. confirm periodically whether any § 5 DDG conditional field has become applicable;
2. keep the operator/address/contact data current;
3. preserve direct public reachability as TycoonX web architecture changes; and
4. trigger a coordinated legal-identity migration if CK-Labs changes legal form, operator, address, or ownership.

Do not publish guessed register, tax, regulatory, or corporate information.

## 17. Localization impact

This gate does not materially change the canonical English TycoonX Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards. It therefore does not by itself require reopening the completed 25-locale, 100-document localization set.

If the canonical legal operator identity, contracting party, privacy controller, or materially relevant contact information later changes in canonical player-facing documents, update the English canonical source first and synchronize every affected localized document while updating `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`.

## 18. Release decision

Do not block a release merely because a generic Impressum template contains an inapplicable blank field.

Block or urgently correct the affected public legal surface when:

- legally required provider information is missing, false, stale, or internally contradictory;
- the Impressum is no longer directly reachable from relevant CK-Labs controlled public legal/support surfaces;
- a known operator/address change has not been propagated;
- a required register/VAT/economic-identification field is omitted after applicability has been verified; or
- player-facing legal text displays `TyconX` instead of `TycoonX`.

Mandatory consumer and digital-product rights remain unaffected by this gate.
