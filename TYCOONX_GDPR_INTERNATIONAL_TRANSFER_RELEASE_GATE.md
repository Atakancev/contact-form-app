# TycoonX GDPR International Transfer Release Gate

Last reviewed: **August 31, 2026**

Purpose: operationalize the international-transfer language already present in the canonical TycoonX Privacy Policy without expanding the public data practices described there. This gate applies to CK-Labs-controlled disclosures of personal data from the EEA to recipients in third countries, including remote access from a third country where that access constitutes a transfer under GDPR Chapter V.

This is a release/compliance gate, not a substitute for transaction-specific legal advice. Mandatory data-protection rights remain unaffected.

## P0 release rule

Before CK-Labs enables or materially changes any TycoonX provider, SDK, support tool, AI service, authentication service, analytics service, hosting/database/storage service, payment integration, fraud/security service, notification service, or other recipient that can receive EEA personal data outside the EEA, CK-Labs must be able to identify and document:

1. the exporter and importer;
2. their controller/processor roles for the relevant processing;
3. the categories of personal data and affected users;
4. the purposes and frequency of the transfer;
5. the countries from which the data can be accessed, stored, supported, or onward-transferred;
6. the applicable GDPR Article 45, 46, or 49 transfer mechanism;
7. the Article 28 processor/subprocessor terms where applicable;
8. any transfer-impact assessment and supplementary measures needed for an Article 46 route;
9. onward-transfer/subprocessor controls;
10. the matching Privacy Policy/records-of-processing information; and
11. the owner and review date for re-checking the mechanism.

A vendor being well known, having an EU office, or hosting an EU region does **not** by itself prove that every support, telemetry, backup, subprocessor, fraud-review, or administrator-access path remains inside the EEA.

## 1. What counts as an international transfer

Use the EDPB's final Guidelines 05/2021 as the classification baseline. A Chapter V transfer can exist where:

- a controller or processor subject to the GDPR for the relevant processing discloses or otherwise makes personal data available to another controller or processor; and
- the recipient is in a third country or is an international organisation, regardless of whether the recipient may itself be subject to parts of the GDPR.

Remote administrator, support, moderation, security, or developer access from a third country can therefore matter even when the database is physically hosted in the EEA.

Do not classify a provider only from the advertised storage region. Check actual access, support and subprocessor paths.

Official source: EDPB, Guidelines 05/2021, final version 2.0, adopted February 14, 2023 and published February 24, 2023:
https://www.edpb.europa.eu/documents/guideline/guidelines-052021-on-the-interplay-between-the-application-of-article-3-and-the_en

## 2. Transfer-mechanism decision tree

For each third-country flow, record one defensible route.

### A. Article 45 adequacy

If the European Commission has adopted an adequacy decision covering the relevant destination, recipient and data, the transfer may rely on that decision while it remains valid and applicable to the exact transfer.

Do not treat an adequacy decision as permanent. Record the decision relied on and re-check it periodically and after material legal developments.

Commission adequacy information:
https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en

### B. Article 46 appropriate safeguards

Where there is no applicable adequacy decision, determine whether an Article 46 mechanism is available, commonly including the Commission's applicable Standard Contractual Clauses.

Where the 2021 transfer SCCs are used:

- select the correct controller/processor module;
- complete the annexes with the real parties, transfers, categories, purposes, retention/context and technical/organisational measures;
- identify the competent supervisory authority as required;
- complete Article 28 requirements where the selected module covers a processor relationship;
- document subprocessors/onward transfers;
- perform the required assessment of the destination-country law and practices for the actual transfer;
- document any supplementary technical, contractual or organisational measures needed to provide an essentially equivalent level of protection; and
- suspend or change the transfer if the importer can no longer comply and adequate protection cannot be restored.

Do **not** treat signing an SCC template as the whole compliance exercise.

Commission SCC page and Q&A:
https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en
https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/new-standard-contractual-clauses-questions-and-answers-overview_en

### Important 2026 SCC scope check

The Commission's current SCC guidance continues to state that Implementing Decision (EU) 2021/914 is designed for transfers to importers whose processing of the transferred data is **not itself subject to the GDPR**. The Commission also states that it is developing an additional SCC set for transfers to controllers/processors outside the EU whose processing is directly subject to the GDPR.

Therefore, if a non-EEA importer is itself directly subject to the GDPR for the same processing, do not blindly attach the 2021/914 transfer SCCs and mark the issue solved. Verify the transfer tool actually available and appropriate at the time of contracting.

### C. Article 49 derogations

Article 49 derogations are not the default architecture for routine TycoonX hosting, analytics, support, AI, security, or payment integrations. Use a derogation only where its actual statutory conditions are met for the specific transfer and document why a normal Article 45/46 mechanism is unavailable or inapplicable.

User acceptance of the TycoonX Terms or general Privacy Policy is not blanket consent to unrestricted third-country transfers.

## 3. EU-U.S. Data Privacy Framework, current 2026 position

As of **August 31, 2026**, the EU-U.S. Data Privacy Framework adequacy decision remains operative.

On **September 3, 2025**, the General Court dismissed the annulment action in **T-553/23, Latombe v Commission**, leaving the DPF adequacy decision in place. An appeal, **C-703/25 P**, is currently pending before the Court of Justice. CK-Labs must therefore rely on the DPF only while the adequacy decision remains legally effective and applicable to the specific recipient.

Official case status:
https://infocuria.curia.europa.eu/tabs/affair?lang=EN&publishedId=T-553%2F23
https://infocuria.curia.europa.eu/tabs/affair?lang=EN&publishedId=C-703%2F25+P

### Before relying on DPF for any U.S. recipient

The EDPB's **January 23, 2026, version 2.0 FAQ for European businesses** requires an EEA exporter to verify that the U.S. organisation has an **active self-certification**, that certifications are renewed annually, and that the certification covers the relevant data. For a subsidiary or affiliate, verify that the certified organisation's listed scope actually covers that entity.

Required evidence:

- date checked;
- exact legal entity receiving the data;
- active/inactive status on the official DPF List;
- certification scope relevant to the TycoonX data;
- any covered U.S. subsidiary/affiliate relied on; and
- next re-check date.

Official DPF List:
https://www.dataprivacyframework.gov/list

EDPB 2026 FAQ:
https://www.edpb.europa.eu/documents/other-guidance/eu-us-data-privacy-framework-faq-for-european-businesses-version-20_en

Do not rely on a vendor's marketing page saying `DPF compliant` if the exact receiving legal entity and scope have not been verified on the official list.

If a U.S. recipient loses active certification, do not continue **new** transfers on the theory that its old certification is enough. Establish another valid Chapter V route before continuing. The EDPB notes that an organisation removed from the DPF List must continue applying the DPF Principles to data received while it participated for as long as it retains that data, but this does not permit an EEA exporter to rely on inactive certification for new transfers.

## 4. DPF does not replace the rest of GDPR

Active DPF certification can satisfy the Chapter V adequacy mechanism for an in-scope U.S. recipient, but it does not replace:

- a lawful basis under Article 6;
- transparency under Articles 13/14;
- purpose limitation and data minimisation;
- Article 28 processor terms where the recipient is a processor;
- security under Article 32;
- DPIA obligations where applicable;
- data-subject rights;
- retention limits; or
- valid instructions and subprocessor controls.

Do not treat a DPF listing as a processor DPA, security assessment, or permission for a provider to use TycoonX data for unrelated purposes.

## 5. SCC transfer-impact assessment gate

Where TycoonX relies on SCCs or another Article 46 safeguard requiring an essentially equivalent level of protection, the file must contain a documented assessment proportionate to the transfer.

At minimum record:

- destination country and applicable laws/practices relevant to the importer and data;
- categories and sensitivity of the data;
- transfer purposes and frequency;
- whether data is encrypted in transit and at rest;
- who holds decryption keys and whether the importer needs data in the clear;
- likelihood and legal context of public-authority access relevant to this transfer;
- onward-transfer/subprocessor exposure;
- retention period;
- technical, contractual and organisational supplementary measures; and
- conclusion, reviewer and review date.

Examples of potentially relevant supplementary measures include strong encryption where effective for the threat model, pseudonymisation before transfer where the importer does not need identifying information, strict access controls, minimised fields, regional routing, reduced retention, transparency commitments and challenge/notification procedures for government requests where lawful.

A measure counts only if it actually reduces the identified risk for the transfer. Saying `encrypted` is not enough if the importer necessarily receives the data in readable form and holds the keys.

## 6. Article 28 and subprocessor chain

Where CK-Labs uses a processor, the processor agreement must identify or govern subprocessors and international-transfer permissions as required by the GDPR.

The transfer inventory must capture not only the direct vendor but also relevant subprocessors that can store or access TycoonX data outside the EEA.

For each material subprocessor change:

1. determine whether a new third-country transfer is created;
2. verify the applicable transfer mechanism;
3. evaluate whether the change alters the SCC/TIA/DPF analysis;
4. update records and privacy disclosures where legally required; and
5. exercise an objection/termination right if the new arrangement cannot lawfully protect the data.

A vendor's statement that it uses `global infrastructure` is not enough to establish Chapter V compliance.

## 7. Concrete repository/provider checkpoint

The current `contact-form-app` repository includes `@marsidev/react-turnstile` and `resend` dependencies. The support form uses Cloudflare Turnstile. These are concrete examples of services for which CK-Labs must verify the **deployed** legal entity, data flow, processing role, locations, subprocessors and transfer mechanism rather than inferring compliance from the npm package name.

This gate does **not** assert that either provider necessarily creates an unlawful transfer or that a particular DPF/SCC route applies. The deployed account, region, legal entity and current provider documentation must be checked.

The same requirement applies to the actual TycoonX mobile/backend stack, including Apple, Google, Xsolla, authentication, database, storage, analytics, crash reporting, push notifications, anti-fraud/anti-cheat, moderation and any third-party AI service.

## 8. Apple, Google and Xsolla responsibility split

Apple, Google, Xsolla, banks, card networks and other payment participants may act as independent controllers for parts of their own payment, fraud, tax, account and platform processing, as already described in the canonical Privacy Policy.

CK-Labs must not promise that it controls an independent provider's entire international-transfer architecture. CK-Labs remains responsible for:

- the data CK-Labs itself chooses to disclose;
- selecting and configuring CK-Labs processors lawfully;
- obtaining Article 28 terms where required;
- documenting the Chapter V route for CK-Labs-controlled transfers;
- minimising the data sent;
- accurately describing CK-Labs disclosures; and
- responding correctly to provider/subprocessor changes that affect CK-Labs-controlled processing.

Merchant-of-record or app-store status does not automatically make every data transfer by CK-Labs lawful, and CK-Labs processor obligations do not automatically extend to a provider's legally independent controller processing.

## 9. Third-party AI and support content

Do not send private chats, support attachments, account-security evidence, purchase records, identity data, or other personal data to a third-party AI or support provider merely because the provider offers an AI feature.

Before such a transfer:

- confirm that the processing is actually allowed under the Privacy Policy and applicable platform rules;
- establish an Article 6 legal basis and any separate consent/permission required by law or platform policy;
- determine controller/processor role;
- identify the international-transfer mechanism;
- disable provider training/secondary use where contractually required for the intended processor role;
- minimise/redact data where possible; and
- retain evidence of the provider terms and configuration used at the time.

A third-party AI provider being DPF-certified, where true, does not itself authorize a new purpose of processing.

## 10. Account compromise, security incidents and transfers

Security emergencies may justify fast defensive processing, but they do not erase Chapter V obligations.

If a compromised provider or emergency replacement vendor requires a new third-country transfer, document the temporary route and legal mechanism rather than silently treating `emergency` as a permanent transfer derogation.

Preserve transaction and entitlement evidence needed to protect valid TycoonX purchases. An international-transfer incident does not by itself revoke purchased Diamonds, 30-Day VIP or Lifetime VIP, and it does not by itself create or eliminate a refund right.

If the incident is also a personal data breach, run the separate GDPR breach gate and its Article 33/34 clocks independently.

## 11. Provider replacement or service discontinuation

If CK-Labs replaces a hosting, authentication, storage, support, AI, payment, analytics, fraud, or notification provider:

- stop new transfers to the old provider when no longer necessary;
- confirm deletion/return obligations and any lawful retention;
- preserve only the evidence CK-Labs must lawfully retain;
- classify the replacement provider before production transfer;
- verify its Article 28 and Chapter V route;
- update the subprocessor/transfer inventory; and
- update the Privacy Policy or notices if the public meaning materially changes.

Do not delay a necessary security provider migration solely to preserve an old transfer mechanism, but do not turn an emergency migration into undocumented indefinite processing.

## 12. Data-subject transparency and safeguard requests

The canonical Privacy Policy already states that, where applicable, users may request further information or an available copy of transfer safeguards subject to lawful redactions and third-party confidentiality.

Support must therefore be able to identify the actual mechanism used for the relevant transfer rather than answering every request with a generic `we use SCCs` statement.

Where SCCs or another Article 46 safeguard is relied on, provide the information/copy required by law while protecting legitimate confidential information through lawful redaction rather than refusing the request wholesale.

## 13. Evidence pack required before release

Maintain a dated international-transfer register with at least these columns:

| Field | Required evidence |
| --- | --- |
| Provider / legal entity | Exact contracting/receiving entity |
| TycoonX feature | Hosting, support, auth, payment, AI, analytics, etc. |
| Role | Controller, processor, subprocessor, independent controller |
| Data | Specific categories, not `user data` |
| Exporter / importer | Exact entities |
| Countries | Storage plus remote/support/onward-access countries |
| Mechanism | Adequacy, DPF, SCC/module, other Art. 46 tool, narrowly applicable Art. 49 derogation |
| DPF evidence | Active-list date, scope, affiliate coverage, renewal re-check |
| SCC evidence | Executed clauses, module, annexes, TIA, supplementary measures |
| Article 28 | DPA/subprocessor terms where applicable |
| Retention/deletion | Contractual and operational treatment |
| Privacy parity | Privacy Policy / notice / ROPA mapping |
| Review owner/date | Named internal owner and next review |

For a solo operator, `owner` may be CK-Labs' responsible operator, but ownership must still be explicit so the review is not forgotten.

## 14. Release-blocking failures

Treat the following as blockers for the affected transfer, not as documentation debt to fix later:

- unknown receiving legal entity;
- unknown third-country access or subprocessor location where that uncertainty is material to the transfer;
- relying on U.S. DPF without verifying an active, in-scope certification;
- relying on an inactive DPF certification for new transfers;
- using SCCs with blank or fictional annexes;
- using the wrong SCC scope without checking whether the importer is itself subject to GDPR for the same processing;
- no Article 28 processor terms where required;
- no transfer-impact assessment/supplementary-measure analysis where required;
- routine reliance on Article 49 as a substitute for a stable transfer mechanism;
- provider secondary use/training inconsistent with CK-Labs' disclosed purpose or role;
- inability to identify relevant subprocessors/onward transfers; or
- continuing transfers after CK-Labs knows the chosen mechanism no longer provides a lawful basis and no replacement route has been established.

## 15. Canonical/localization rule

This gate currently **does not materially change** the canonical public Privacy Policy. Section 7 already states that TycoonX may involve processing outside the user's country, that CK-Labs uses an appropriate legally recognized transfer mechanism such as an adequacy decision or Standard Contractual Clauses where required, that use of TycoonX is not blanket transfer consent, and that users may request information about safeguards.

Therefore the 25 localized Privacy documents remain current.

If future implementation changes require the canonical Privacy Policy to name a new transfer purpose, recipient category, mechanism commitment, country-specific representation, material AI disclosure, or other public meaning that is not already covered, **reopen all 25 localized Privacy documents** and resynchronize them in the required order before marking localization complete again.

## 16. Safe verification only

No production personal data, live payment data, user credentials, database contents, or provider secrets are needed to execute this legal gate. Use provider contracts, DPAs, subprocessor lists, account configuration, official certification registries and documented architecture.

Do not create a real international-transfer incident or expose player data merely to test compliance.

## Current official-source snapshot, August 31, 2026

- EDPB Guidelines 05/2021 final version 2.0 remain the main EDPB guidance for identifying Chapter V transfers.
- The Commission's 2021/914 SCCs remain the standard transfer SCCs for their stated scope; the Commission's current SCC page still says additional SCCs are being developed for importers whose processing is directly subject to GDPR.
- The EU-U.S. DPF adequacy decision remains operative as of this review date.
- The General Court dismissed T-553/23 on September 3, 2025; the appeal C-703/25 P remains pending as of this review.
- The EDPB's January 23, 2026 DPF FAQ version 2.0 requires verification of active annual certification and scope before relying on DPF.

Re-check these facts before a later release if the legal position changes.