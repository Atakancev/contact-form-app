# TycoonX AI Transparency Release Gate

Last reviewed: September 3, 2026

Purpose: prevent TycoonX from shipping user-facing AI, AI-assisted support or moderation, generative-content features, or internal AI workflows that conflict with the EU AI Act, data-protection law, Apple App Review rules, Google Play rules, or the existing TycoonX legal framework.

This is a release and implementation gate. It does not state that every listed AI feature currently exists in TycoonX. Article 50 of the EU AI Act has applied since **2 August 2026**. Article 4 AI-literacy duties already apply and were amended in July 2026. TycoonX went to full release on **September 1, 2026**.

## P0 release decisions

- [ ] Inventory every AI system or AI-assisted workflow used for TycoonX, including support assistants, in-game assistants, moderation, translation, recommendations, content generation, fraud or security analysis, image/audio/text generation, player-facing news, and developer tools that can affect production decisions.
- [ ] For each item, record the actual system/model provider, product/version where reasonably available, purpose, production surface, whether personal data is transmitted, categories of inputs and outputs, retention configuration, and whether the output can affect a player account, moderation result, purchase, entitlement, or public-facing content.
- [ ] Classify CK-Labs' AI Act role for each item. Record whether CK-Labs is a **provider**, **deployer**, **downstream provider**, or more than one role. Using a third-party model does not automatically mean CK-Labs is only a deployer if CK-Labs integrates an AI model into an AI system and places or puts that system into service under its own name or trademark.
- [ ] Do not copy the underlying model provider's compliance statement and treat it as proof of CK-Labs' own downstream or deployer compliance. Preserve provider documentation, but separately document the obligations that attach to the TycoonX implementation.
- [ ] Do not claim that CK-Labs is a signatory to, certified under, or compliant through the **Code of Practice on Transparency of AI-generated Content** unless that is actually true and evidence is retained.

## Article 50(1): direct AI interaction

For each user-facing AI feature, apply the Commission's direct-interaction test before relying on an exception.

A direct-interaction case normally requires all of the following features:

1. the feature is an AI system;
2. there is a genuine two-way exchange rather than only passive data collection or a fixed automated acknowledgement;
3. the AI communicates directly with the natural person rather than merely assisting a human intermediary; and
4. the recipient is a natural person.

Where Article 50(1) applies, or where an equivalent disclosure is otherwise appropriate to avoid deception:

- [ ] inform the person that they are interacting with AI **from the start of the first interaction**;
- [ ] make the disclosure clear, distinguishable and accessible in the actual interface rather than only in Terms or Privacy;
- [ ] do not present an automated assistant as a human employee, moderator, founder, developer, or another real person;
- [ ] make the disclosure work in the relevant localized interface and with applicable accessibility features;
- [ ] preserve the disclosure text/version, surface, language and deployment date as evidence; and
- [ ] treat the exception for interactions whose AI nature is genuinely obvious as a narrow, evidence-based exception rather than a default assumption.

A background AI tool that only summarizes a ticket for a human operator is not automatically a direct AI interaction. If the human genuinely reviews and sends the response, classify the background tool separately. Conversely, putting a human-looking name or avatar in front of an autonomous AI response does not turn the AI interaction into human support.

## Article 50(5): disclosure timing, clarity and accessibility

Article 50(5) is a horizontal safeguard for the human-facing information required by Article 50. Where Article 50 requires CK-Labs to inform a natural person about an AI interaction, permitted emotion-recognition/biometric-categorisation exposure, a deepfake, or covered AI-generated/manipulated public-interest text:

- [ ] provide the required information in a **clear and distinguishable manner** no later than the person's first interaction or exposure, as applicable;
- [ ] meet applicable accessibility requirements rather than assuming that visual text alone is sufficient for every user;
- [ ] do not hide a required disclosure only in Terms, Privacy, a help article, settings screen, hover state, collapsed menu, or post-interaction notice;
- [ ] ensure the disclosure remains understandable in the language and interface actually shown to the user;
- [ ] preserve screenshots or equivalent evidence of the disclosure in the production context; and
- [ ] keep Article 50(5) human-facing disclosure separate from Article 50(2) machine-readable marking. One does not automatically substitute for the other.

A small `AI` icon can support disclosure, but do not assume an icon by itself is sufficient where the user would not reasonably understand what it means. The Commission has published EU icons for some AI-generated-content labelling use cases, but using an icon does not remove the duty to satisfy the legal clarity, timing and accessibility requirements that apply to the actual feature.

## Article 50(2): machine-readable marking of synthetic content

If CK-Labs is a provider of an AI system that generates or manipulates synthetic audio, image, video or text, assess **Article 50(2)** separately from player-visible labelling.

- [ ] Determine whether CK-Labs is the provider of the relevant generative AI system or only a deployer of another provider's system.
- [ ] Where Article 50(2) applies to CK-Labs, ensure the system's outputs are marked in a machine-readable format and detectable as artificially generated or manipulated in the manner required by the AI Act and current technical guidance.
- [ ] Record the actual marking, provenance or detection method and test that normal export or publication paths do not unintentionally strip it where CK-Labs controls those paths.
- [ ] Assess the statutory and guideline exceptions rather than assuming every output needs the same treatment. Standard editing, certain narrow technical/M2M scenarios and other defined exceptions must be documented if relied on.
- [ ] The limited transition to **2 December 2026** applies only to the Article 50(2) marking/detectability obligation for qualifying AI systems placed on the market before 2 August 2026. It is not a general grace period for Article 50 and it does not postpone direct-interaction disclosure.
- [ ] Content created before 2 August 2026 does not become subject to a retroactive labelling requirement merely because it remains stored after that date, although voluntary labelling may still be appropriate.

If a third-party provider bears the provider-side Article 50(2) duty, CK-Labs should still preserve reasonable evidence of the provider's marking/provenance behavior if TycoonX depends on it, and should not knowingly strip or misrepresent the provenance when TycoonX republishes the content.

## Article 50(4): deepfakes and certain public-interest text

### Deepfakes

Where TycoonX deploys AI-generated or manipulated image, audio or video that meets the AI Act definition of a deepfake:

- [ ] provide the required human-perceivable disclosure no later than the person's **first exposure** to the relevant content;
- [ ] do not rely only on a hidden or machine-readable mark to satisfy a player-facing disclosure duty;
- [ ] use a disclosure that is clear and understandable in the context in which the content is shown; and
- [ ] where the content is evidently artistic, creative, satirical, fictional or analogous, assess the special proportionality rule so the disclosure can be appropriate without unnecessarily impairing enjoyment of the work.

A stylized fictional TycoonX character or obviously fictional in-game scene is not automatically a deepfake. The classification depends on whether the content appreciably resembles existing persons, objects, places, entities or events and would falsely appear authentic or truthful under the statutory definition and current guidance.

### AI-generated text on matters of public interest

If TycoonX publishes AI-generated or manipulated text with the purpose of informing the public on matters of public interest, assess the Article 50(4) disclosure rule. Current Commission guidance treats subjects such as politics, government, law, fundamental rights, public safety, health, environment, consumer safety, and significant economic, financial, scientific or cultural developments as potentially relevant depending on context.

A purely fictional in-game business newspaper about the simulated TycoonX economy is not automatically real-world public-interest journalism. However, a TycoonX surface that starts publishing real-world market, political, legal, health, scientific or other public-information claims must not be classified as fictional merely because it appears inside a game.

- [ ] If the public-interest text rule applies, clearly disclose that the text is AI-generated or manipulated unless the statutory human-review/editorial-control exception actually applies.
- [ ] Do not treat spelling, grammar, formatting or other superficial review as substantive human review.
- [ ] If relying on the human-review/editorial-control exception, preserve evidence that a knowledgeable person actually reviewed the substance and that the responsible editorial person or entity had authority to approve, alter or reject publication and bears editorial responsibility for it.
- [ ] If the reviewer merely presses Publish on an AI draft without substantive review, do not label the process "human reviewed" for legal purposes.

## Emotion recognition and biometric categorisation

Do not introduce emotion recognition, biometric categorisation, face inference, voice inference or similar sensitive AI functionality as an ordinary product experiment.

- [ ] Require a separate AI Act, GDPR, platform and product-safety review before implementation.
- [ ] Determine whether the practice is prohibited, high-risk, subject to Article 50 disclosure, or otherwise restricted in the actual context.
- [ ] If a permitted deployer-side Article 50 disclosure duty applies, ensure affected persons are informed in a clear and accessible manner before or when they are exposed as required.
- [ ] Do not infer a player's protected or highly sensitive characteristics merely because an AI vendor technically offers that feature.

## Article 4 AI literacy

**Article 4** applies to providers and deployers of AI systems. Following the July 2026 amendment, CK-Labs must take measures to support development of AI literacy for staff and other persons operating or using AI systems on its behalf, taking into account their knowledge, experience, training, the use context, and people affected. The amended rule does **not** require CK-Labs to guarantee a specific level of AI literacy for every individual.

The Commission's current AI-literacy Q&A states that Article 4 has applied since **2 February 2025** and that the relevant supervision and enforcement rules apply from **3 August 2026 onwards**. Do not treat AI literacy as a future-only obligation merely because TycoonX is a small or solo operation.

For a small or solo operation, compliance should be proportionate rather than bureaucratic:

- [ ] maintain a short dated inventory of AI tools actually used for TycoonX;
- [ ] keep role-appropriate written guidance covering hallucinations, confidentiality, personal data, copyright/content provenance, unsafe automation, moderation bias, security, purchase/entitlement authority and when human review is mandatory;
- [ ] ensure any contractor or other person using AI on CK-Labs' behalf receives guidance appropriate to the task and risk;
- [ ] record material training, guidance updates or acknowledgement where reasonably useful as evidence; and
- [ ] revisit the guidance when a materially different AI system or higher-risk use is introduced.

No AI officer, certificate or large formal training programme should be invented as a legal requirement where the law does not require one. A generic one-time "AI training completed" checkbox is also not a substitute for risk-appropriate measures.

## Article 50 enforcement checkpoint

Article 50 is already in force for covered systems. The Commission's current Article 50 Q&A states that enforcement will mainly sit with national competent market-surveillance authorities, with more limited AI Office competence for specified systems under its supervision. The Commission also states that applicable AI Act fines for Article 50 non-compliance can reach **EUR 15 million or 3% of total worldwide turnover for the preceding financial year**, with proportionality taken into account for SMEs and small mid-cap companies.

- [ ] Treat those figures as statutory maxima, not as an automatic fine for every mistake.
- [ ] Preserve proportionality evidence appropriate to CK-Labs' size, role, risk and remediation where an issue is identified.
- [ ] Fix a detected missing disclosure or provenance control promptly and preserve the correction rather than attempting to conceal the historic configuration.
- [ ] Do not use a possible penalty as a reason to overstate CK-Labs' AI Act role or claim a feature is prohibited when it is merely subject to a transparency obligation.

## Code of Practice on Transparency of AI-generated Content

The Commission published the **Code of Practice on Transparency of AI-generated Content** on 10 June 2026. It is voluntary. On 8 July 2026 the Commission concluded that it adequately covers Articles 50(2), 50(4) and 50(5), and the AI Board issued its adequacy assessment.

- [ ] If CK-Labs falls within Article 50(2) or 50(4), decide whether joining the Code is useful for the actual TycoonX implementation.
- [ ] A provider or deployer can in principle sign after the initial July 2026 signatory window.
- [ ] If CK-Labs does not sign, document the alternative **equivalently adequate means** used to meet applicable marking or labelling obligations.
- [ ] Signing the Code may simplify compliance evidence but does not constitute conclusive proof that every implementation is compliant.

Do not sign the Code solely to create a marketing badge if TycoonX does not actually implement the commitments that would apply.

## AI-assisted moderation, fraud and account decisions

AI may assist investigation, triage or risk scoring, but an AI output is not an authoritative Apple, Google Play or Xsolla payment record and is not automatically proof of cheating, chargeback abuse, account compromise, regional-price abuse or fraud.

- [ ] Serious adverse actions must have an independent factual basis and the safeguards required by the TycoonX Terms, Community Standards, GDPR and applicable platform rules.
- [ ] Where a decision may be subject to GDPR restrictions on solely automated decisions with legal or similarly significant effects, follow `TYCOONX_GDPR_AUTOMATED_DECISION_RELEASE_GATE.md` and provide the required human involvement or review.
- [ ] Preserve material evidence used for a suspension, termination, fraud action or entitlement correction rather than preserving only the model's risk score or generated explanation.
- [ ] Do not train or prompt an AI system to treat a good-faith refund request, statutory withdrawal request, accessibility complaint, privacy request or account-compromise report as abuse merely because it creates operational cost.

### Paid-entitlement isolation

An AI error, hallucination, moderation label or fraud score must never itself alter paid value.

- purchased **Diamonds** may be corrected only from authoritative transaction/entitlement evidence and the applicable legal basis;
- a one-time **30-Day VIP** must not be restarted, shortened or removed merely because an AI tool classified a support case incorrectly;
- valid **Lifetime VIP** must not be revoked, duplicated, migrated or converted to another product because an AI assistant guessed the entitlement state; and
- AI-assisted reconciliation must remain idempotent and transaction-specific so one disputed order cannot remove unrelated legitimate value.

## Apple, Google Play and third-party AI data

### Apple

If personal data from the Apple app is shared with a third-party AI service, verify the current Apple disclosure and permission requirements before transmission. A Privacy Policy clause alone is not enough if Apple's current rule requires an in-product disclosure or explicit permission.

### Google Play

For Google Play, verify that third-party AI SDKs/services comply with the current User Data policy, including limited use, secure handling, required disclosure/consent, deletion and retention behavior, and consistency with the Play Console Data Safety form.

### Xsolla and payment data

Do not send complete payment credentials, reusable authentication secrets, or unnecessary Apple, Google Play or Xsolla transaction data to a general AI service for convenience. If payment/support information is processed by an AI service, minimize it to what is necessary, document the legal basis and provider role, and preserve the authoritative payment record outside the AI system.

## Privacy and security controls

- [ ] Keep the existing TycoonX Privacy Policy language on third-party AI accurate. If a new AI provider receives personal data, update the real privacy disclosures and consent/permission flow before production use where required.
- [ ] Record the legal basis and data categories for AI processing involving personal data. "The AI provider has a privacy policy" is not CK-Labs' legal basis.
- [ ] Do not paste passwords, signing keys, API secrets, complete payment credentials, private keys or other reusable secrets into AI prompts.
- [ ] Configure provider retention, training/data-use options, regional processing and access controls appropriately for the actual data sent.
- [ ] Where the AI provider processes personal data on CK-Labs' behalf, confirm the required processor terms, transfer mechanism and subprocessor position rather than assuming the service is EU-compliant by default.
- [ ] If an AI provider materially changes its terms, model behavior, data use, hosting region or subprocessors, re-evaluate the affected TycoonX workflow before continuing sensitive use.

## Release evidence packet

For every material production AI feature, preserve enough evidence to answer all of the following without reconstructing the system from memory:

- feature name and production surface;
- provider/deployer/downstream-provider classification and reasoning;
- AI provider/system/model and material version where reasonably available;
- purpose and affected player groups;
- input/output data categories and whether personal data is involved;
- Article 50(1), 50(2), 50(4) and 50(5) applicability decisions;
- user-facing disclosure or label text, locale and screenshot where applicable;
- machine-readable marking/provenance method where applicable;
- any exception or transition period relied on and its factual basis;
- human-review/editorial-control evidence where relied on;
- Apple/Google privacy or permission checks where relevant;
- privacy/processor/international-transfer documentation where personal data is shared;
- AI-literacy guidance appropriate to the operator or contractor;
- date last tested and owner of the workflow; and
- a kill switch or safe fallback for a material provider failure or unsafe model behavior.

## Practical TycoonX examples

**Direct assistant:** A TycoonX support assistant autonomously replies to a player. The interface identifies it as AI from the first interaction. The player is not led to believe the bot is a human moderator. Personal-data sharing with the AI provider follows the required privacy and platform flow.

**AI-assisted human support:** An internal tool summarizes a ticket, but a human reviews the source ticket, edits or rejects the draft, and sends the final response under their own authority. The background AI use is documented, but the player is not falsely told that a hidden bot is a human.

**Fictional in-game news:** AI writes a fictional article about a simulated TycoonX crop shortage. The team records the generative workflow and evaluates Article 50, but does not automatically misclassify the fictional story as real-world public-interest reporting merely because it uses economic language.

**Real-world public-interest text:** A TycoonX page begins publishing AI-written commentary about real financial regulation or elections for the purpose of informing the public. That requires a separate Article 50(4) assessment. A quick grammar check is not enough to invoke the substantive human-review/editorial-control exception.

**Entitlement investigation:** An AI tool says a Lifetime VIP purchase "looks fraudulent." That output can be a lead for investigation, but it cannot revoke Lifetime VIP. CK-Labs must verify the authoritative Apple, Google Play or Xsolla record and the account evidence before any transaction-specific correction.

## Current official reference checkpoint

Rechecked on September 3, 2026 against current European Commission and EUR-Lex material, including:

- European Commission, Guidelines on transparency obligations for providers and deployers of certain AI systems, last updated **6 August 2026**;
- European Commission, Article 50 transparency Q&A, including the current 2 December 2026 Article 50(2) transition and enforcement checkpoint;
- European Commission, Code of Practice on Transparency of AI-generated Content, published 10 June 2026 and adequacy opinion of July 2026;
- European Commission, AI Literacy Questions & Answers and AI-literacy repository, with the repository last updated **10 August 2026**; and
- consolidated Regulation (EU) 2024/1689 as amended by Regulation (EU) 2026/1744, applicable consolidated text dated **27 July 2026**.

Recheck the current official material before enabling a materially new AI feature because guidance, standards, signatory status and national enforcement arrangements can evolve.

## Source-of-truth rule

This gate supplements, and does not replace, the TycoonX Terms of Service, Privacy Policy, Community Standards, Apple Custom EULA, Purchases & Refunds Policy, platform rules, or mandatory law. If an AI feature materially changes personal-data processing or player-facing legal meaning, update the canonical English legal source first and then refresh every affected localization in the required locale order.