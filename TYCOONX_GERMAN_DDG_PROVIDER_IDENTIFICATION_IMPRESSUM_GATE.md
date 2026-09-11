# TycoonX German DDG Provider Identification / Impressum Gate

**Last reviewed: September 11, 2026.**
Owner: CK-Labs
Scope: internal legal/commercial readiness control for the German-facing TycoonX website, legal hub, official webshop links and other CK-Labs-controlled digital-service surfaces.

This document does not replace the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy or Community Standards. It records a separate German provider-identification requirement that must be satisfied by the deployed service itself.

## 1. Current conclusion

The repository contains extensive TycoonX legal documents and localized legal routes, but the current legal audit did not identify a dedicated German provider-identification / Impressum implementation gate. A legal-document footer, privacy controller notice, support form or payment-provider page is not automatically a substitute for the provider information required by German digital-services law.

For a business-operated TycoonX website or webshop made available in Germany, CK-Labs must verify that the legally responsible provider information is easy to recognize, directly reachable and permanently available from the relevant controlled surfaces.

The public page must identify the actual legal operator. Do not publish invented company details, a brand name without the legal operator, an obsolete address, or a payment provider as though it were CK-Labs.

## 2. Current legal basis

### 2.1 Section 5 DDG

Section 5(1) of the German Digital Services Act, Digitale-Dienste-Gesetz (DDG), requires providers of businesslike digital services that are generally offered for remuneration to keep specified information easily recognizable, directly accessible and permanently available.

Depending on the actual operator and business status, that information includes:

1. the provider's legal name and establishment address;
2. for a legal entity, additional legal-form and representative information required by Section 5(1)(1) DDG;
3. information enabling rapid electronic contact and direct communication, including an email address;
4. the competent supervisory authority where the activity itself requires official authorization;
5. the applicable public register and registration number where the provider is entered in such a register;
6. regulated-profession information where applicable;
7. a VAT identification number under Section 27a UStG or a German economic identification number under Section 139c AO where the provider possesses one; and
8. special liquidation or audiovisual-service information where legally applicable.

Official source: https://www.gesetze-im-internet.de/ddg/__5.html

Do not add fields merely to make the page look more formal. For example, do not claim a commercial-register entry that does not exist, do not publish a tax number where the statute calls for a VAT ID / economic ID if possessed, and do not invent a supervisory authority.

### 2.2 EU e-commerce baseline

Article 5 of Directive 2000/31/EC requires Member States to ensure that service-provider identity, geographic address and rapid/direct contact details are easily, directly and permanently accessible, together with register, authorization and regulated-profession details where applicable.

Official source: https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex:32000L0031

The TycoonX German provider-identification implementation should therefore be treated as a durable service-level compliance control, not as marketing copy that may disappear during a redesign.

### 2.3 Contact method nuance

The CJEU held in Case C-298/07 that Article 5(1)(c) requires, in addition to an email address, other information that permits rapid contact and direct and effective communication. The judgment did not establish a universal rule that every provider must publish a telephone number in every case. An alternative electronic contact route can satisfy the requirement if it genuinely provides rapid, direct and effective communication and does not create an artificial access barrier.

Official source: https://infocuria.curia.europa.eu/tabs/redirect/juris/liste.jsf?language=en&num=298%2F07

For TycoonX, do not rely on a dead mailbox, a no-reply address, an inaccessible in-game-only support route, or a form that gives the user no realistic way to communicate with the legal operator. The final contact design should be assessed on how it actually works.

### 2.4 Section 18 MStV

Section 18(1) of the German Interstate Media Treaty (Medienstaatsvertrag, MStV) separately requires non-purely-personal/family telemedia providers to keep name/address information easily recognizable, directly reachable and permanently available. Section 18(2) adds a responsible-person requirement for qualifying journalistically and editorially designed offerings.

Current MStV information and text: https://www.die-medienanstalten.de/service/rechtsgrundlagen/medienstaatsvertrag/

Do not automatically label ordinary TycoonX game news, patch notes or system-generated stories as journalistically editorial content. Assess the real nature of the public website content. If a CK-Labs-controlled surface actually becomes a qualifying journalistically editorial offering, perform the Section 18(2) MStV classification and add the required responsible-person information.

## 3. Enforcement significance

Section 33 DDG treats failure to provide Section 5(1) information correctly and completely as an administrative offence. Under the current fine structure, the remaining Section 33(2) cases can be fined up to EUR 50,000.

Official source: https://www.gesetze-im-internet.de/ddg/__33.html

This does not mean an automatic EUR 50,000 penalty applies to any minor typo. It means provider identification is a real compliance requirement and should not be treated as optional website decoration.

## 4. TycoonX implementation boundary

The provider-identification page should cover CK-Labs-controlled TycoonX surfaces, including where applicable:

- the main TycoonX legal website;
- `/tycoonx-legal/...` routes;
- support/contact pages controlled by CK-Labs;
- the CK-Labs-controlled storefront or landing page that sends users to Xsolla;
- promotional landing pages for Diamonds, one-time 30-Day VIP or Lifetime VIP;
- public TycoonX web pages linked from Apple App Store or Google Play listings; and
- any future account-management or checkout surface operated directly by CK-Labs.

A payment screen hosted and legally operated by Apple, Google or Xsolla can have its own provider/payment disclosures. That does not remove CK-Labs' duty to identify itself correctly on CK-Labs-controlled services where German law applies.

## 5. Minimum deployment acceptance criteria

Before this gate can be closed, verify the production-equivalent TycoonX website against all of the following.

### A. Legal operator identity

- The page identifies the actual legal operator behind CK-Labs.
- `CK-Labs` may be shown as the business/trading name, but it must not replace the legal operator identity where the legal name is required.
- If the operator is an individual proprietor rather than a separate legal entity, do not present CK-Labs as though it were a GmbH, UG, AG or other legal form.
- If the legal form changes later, the provider page must be updated promptly.

### B. Service address

- A real establishment/service address is provided where legally required.
- The address is current and suitable for the required legal identification function.
- Do not use an obviously fictional, obsolete or unrelated address.
- A payment provider's address is not a substitute for CK-Labs' own provider address.

### C. Electronic contact

- A working email address is shown.
- At least one additional route supports rapid, direct and effective communication in the circumstances, consistent with the Article 5/C-298/07 standard.
- Contact routes are tested from a logged-out browser and do not depend on possessing an active TycoonX account.
- Contact does not silently fail because of an unsupported language, region or authentication state.

### D. Conditional statutory fields

Verify and publish only if applicable:

- public commercial/trade register and registration number;
- VAT identification number under Section 27a UStG;
- economic identification number under Section 139c AO;
- supervisory authority for an activity requiring authorization;
- regulated-profession information;
- liquidation status for a covered legal entity; and
- audiovisual-service information.

Record `not applicable` internally where useful for audit evidence, but do not clutter the public page with fictional placeholders.

### E. Discoverability

- A user can reach the provider-identification page from the main TycoonX legal/web surface in no more than a straightforward navigation action.
- The link is named clearly, such as `Impressum`, `Legal Notice`, or an equally recognizable label for the German-facing service.
- The link is not hidden behind login, a purchase, a support ticket or an app-only flow.
- Mobile layout does not hide the link behind an inaccessible footer or overflow state.
- The page remains available when the webshop is closed, Lifetime VIP is out of sale, or purchases are temporarily disabled.

### F. Consistency

- Legal operator identity is consistent with the Privacy Policy controller identity.
- Support/contact details do not contradict the provider-identification page.
- Apple App Store, Google Play and Xsolla merchant/developer information is reviewed for material identity inconsistencies.
- A provider migration, business sale, merger, reorganization or successor operator triggers a provider-information review before stale identity remains live.

## 6. Relation to TycoonX purchase products

Provider identification must not blur product distinctions.

### Diamonds

The Impressum does not need to repeat Diamond bundle terms, but it must make clear who operates the CK-Labs-controlled service. Apple, Google Play and Xsolla may separately act in payment-processing, storefront, tax/VAT, fraud-screening or merchant roles depending on the channel.

### One-time 30-Day VIP

The current TycoonX 30-Day VIP remains a one-time, non-renewing 30-day entitlement. Provider identification must not describe CK-Labs as operating a recurring subscription where none exists.

### Lifetime VIP

Lifetime VIP remains a limited-time promotional one-time offering available only during selected genuine sales windows. A provider-identification page must remain accessible even while Lifetime VIP is not being offered and must not contain stale claims that the product is continuously available.

## 7. Provider responsibility separation

The public provider page should not create false responsibility allocations.

- Apple controls substantial parts of App Store purchase presentation and payment processing for Apple-channel transactions.
- Google controls substantial parts of Google Play purchase presentation and payment processing for Google-channel transactions.
- Xsolla can operate payment/merchant infrastructure for the official TycoonX webshop flow according to the actual contracted setup.
- CK-Labs remains responsible for its own service identity, truthful TycoonX product presentation, entitlement delivery within its control, support obligations within its control and non-waivable consumer-law duties that cannot lawfully be shifted to another provider.

Do not write an Impressum sentence that says Apple, Google or Xsolla is the operator of TycoonX merely because that provider processes a payment.

## 8. Privacy and DSA separation

The provider-identification page is not the same thing as the Privacy Policy.

The Privacy Policy must continue to identify the data controller and satisfy GDPR information duties. The provider page satisfies separate service-provider identification duties. They should agree factually but can serve different legal purposes.

Similarly, DSA contact-point obligations for authorities/users, where applicable, are not automatically satisfied just because an Impressum exists. Keep DSA operational contacts and DDG provider identity separately testable even if one page links to the other.

## 9. Localization rule for the provider page

A single authoritative German provider-identification page can be the legal source of truth for German statutory provider data. It does not need to create 25 divergent legal identities.

If localized legal hubs link to a translated `Legal Notice` presentation:

- keep names, addresses, register identifiers, VAT/economic IDs and legal-form facts identical to the authoritative source;
- translate only explanatory labels and surrounding prose;
- never transliterate or "localize" a legal operator name, registration number or address into a different legal fact;
- keep `TycoonX` spelled exactly as `TycoonX`; and
- do not describe the live service as beta.

A provider-data change is an identity/compliance update, not automatically a material change to all four canonical player contracts. Reopen the 100 localized legal documents only if the contractual/privacy meaning itself changes.

## 10. Regression scenarios

The following scenarios should be tested before this gate is marked closed.

1. Logged-out German user opens the TycoonX website and reaches the Impressum/legal notice easily.
2. German user opens a localized TycoonX legal route and can still identify the legal operator.
3. Mobile user can reach the provider page without purchasing or logging in.
4. The support email is valid and accepts a real inbound message.
5. The additional rapid/direct contact route works without requiring an active account.
6. Lifetime VIP is not currently on sale, but the provider page remains available.
7. Purchases are temporarily disabled during a provider outage, but the provider page remains available.
8. Apple purchase flow hands off to Apple while CK-Labs identity remains clear on CK-Labs-controlled pages.
9. Google Play purchase flow hands off to Google while CK-Labs identity remains clear on CK-Labs-controlled pages.
10. Xsolla checkout displays Xsolla/payment-role information without replacing CK-Labs as TycoonX service operator on the CK-Labs surface.
11. A refund/chargeback dispute does not cause support to incorrectly tell the user that the payment provider is the operator of TycoonX.
12. A business-address change triggers an update before the old address remains indefinitely live.
13. A newly obtained VAT ID or economic ID triggers a Section 5 DDG review.
14. A future register entry or legal-form change triggers a Section 5 DDG review.
15. Public TycoonX news expands into a genuinely journalistically editorial service and triggers an MStV Section 18(2) classification review.
16. A translated legal page never renders `TyconX` or current-service beta wording in its provider/legal-notice links.

## 11. Evidence required for closure

Keep durable audit evidence of:

- the production URL of the provider-identification page;
- screenshots on desktop and mobile;
- the exact legal operator name and current service address source used for publication;
- email/contact-route test evidence;
- register status and registration number where applicable;
- VAT ID / economic ID applicability decision;
- regulated-profession/supervisory-authority applicability decision;
- MStV Section 18(2) editorial classification decision;
- links from the main TycoonX site and localized legal hubs; and
- a dated review after any operator, address, provider, merger/reorganization or storefront change.

Do not commit sensitive tax records, identity documents or private proof files to the public repository merely to satisfy this evidence requirement. The repository should record the legal control and public information, while sensitive substantiation remains in an appropriate private business record.

## 12. Closure rule

This gate is closed only when the actual deployed TycoonX German-facing service has a compliant, current and directly accessible provider-identification implementation and the conditional fields have been checked against the real CK-Labs legal/business status.

A Markdown gate alone is not proof of compliance.

No database change is authorized by this document.