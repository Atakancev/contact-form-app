# TycoonX EU/German Consumer ADR & Dispute Release Gate

**Status:** release/legal operations gate

**Reviewed against current law and official guidance:** September 2, 2026

This document is an implementation and support-operations gate for **TycoonX**. It does not replace the canonical English Terms of Service, Purchases & Refunds Policy, Privacy Policy, or Community Standards.

The purpose is to prevent CK-Labs from accidentally using stale EU Online Dispute Resolution wording, missing German post-dispute information duties, overpromising participation in consumer arbitration, or importing provider-specific dispute clauses into the TycoonX contract in a way that weakens mandatory consumer rights.

## 1. Core release invariant

A TycoonX consumer dispute must be handled according to the **actual transaction, contracting party, applicable mandatory law, and dispute type**.

Do not assume that:

- Apple, Google Play, or Xsolla handling a payment or refund means CK-Labs has no separate legal duties;
- a payment-provider support process replaces a German statutory consumer-dispute information duty;
- a user complaint or chargeback is automatically fraud or entitlement abuse;
- a contractual arbitration clause in a provider's own terms can simply be copied into CK-Labs Terms;
- the former EU Online Dispute Resolution platform still exists;
- a consumer loses court, withdrawal, conformity, refund, data-protection, or other mandatory rights merely because an ADR route exists; or
- CK-Labs must voluntarily participate in every consumer conciliation proceeding merely because it must provide information about a competent conciliation body.

## 2. The old EU ODR platform is discontinued

Regulation (EU) 2024/3228 repealed Regulation (EU) No 524/2013 with effect from **July 20, 2025**.

The old European Commission Online Dispute Resolution platform was discontinued. New complaints stopped on **March 20, 2025**, and the platform was discontinued by **July 20, 2025**.

### Release rules

- Do **not** add the old ODR platform link to TycoonX Terms, Purchases pages, checkout, support, legal notices, footer text, receipts, or email templates.
- If an old ODR link or statement is found, remove or replace it only after checking whether another current information duty applies.
- Do not describe the discontinued ODR platform as a current consumer remedy.
- Do not confuse the future multilingual EU ADR information tool contemplated by Directive (EU) 2025/2647 with the former ODR platform.
- Do not publish a placeholder link to a future EU tool until the official destination and applicable legal requirement have been verified.

**Official source:** Regulation (EU) 2024/3228, especially Articles 1 and 2: https://eur-lex.europa.eu/eli/reg/2024/3228/oj

## 3. German VSBG § 36: website/Terms information duty

Current German law distinguishes the general information duty in **§ 36 VSBG** from the post-dispute duty in **§ 37 VSBG**.

Under § 36(1) VSBG, a trader that maintains a website or uses standard terms must, where applicable, provide consumers with clear and easily accessible information about the extent to which it is willing or obliged to participate in dispute-resolution proceedings before a consumer conciliation body.

If the trader has committed itself, or is legally obliged, to participate before a particular consumer conciliation body, the information must identify that body and include the information required by § 36(1)(2) VSBG.

### Small-business employee exemption

Under **§ 36(3) VSBG**, the information duty in **§ 36(1)(1)** does not apply to a trader that employed **10 or fewer persons on December 31 of the preceding year**.

Important limits:

- the threshold is based on the number of persons employed, not FTE weighting;
- the exemption applies to § 36(1)(1), not automatically to every VSBG duty;
- it does not remove § 36(1)(2) if CK-Labs has independently committed or is legally obliged to participate before a specific consumer conciliation body; and
- it does **not** remove the post-dispute duty in § 37 VSBG.

### Release evidence

At least once each calendar year, preserve a dated record of:

- the number of persons employed by the relevant CK-Labs trader on **December 31 of the preceding year**;
- whether § 36(1)(1) is currently applicable or the § 36(3) exemption is relied upon;
- whether CK-Labs has voluntarily committed to ADR participation;
- whether any law, platform arrangement, association membership, settlement, or other binding commitment creates an ADR-participation obligation; and
- whether any public TycoonX statement about ADR participation remains accurate.

Do not hard-code permanent reliance on the small-business exemption. Re-check it after hiring, restructuring, transfer to a successor operator, merger, sale, or change of contracting entity.

**Official German source:** § 36 VSBG: https://www.gesetze-im-internet.de/vsbg/__36.html

**Federal Office of Justice guidance:** https://www.bundesjustizamt.de/DE/Themen/Verbraucherrechte/Verbraucherstreitbeilegung/Unternehmen/Unternehmen.html

## 4. German VSBG § 37: duty after an unresolved consumer-contract dispute

This is the most important operational gap.

Under **§ 37 VSBG**, if a dispute arising from a consumer contract could not be resolved between the trader and the consumer, the trader must inform the consumer of a competent consumer conciliation body, including its **address and website**, and must state whether the trader is **willing or obliged** to participate in dispute-resolution proceedings before that body.

The notice must be provided **in text form**.

The Federal Office of Justice states that this duty applies regardless of employee headcount.

### Trigger

A § 37 workflow is required when all of the following are true:

1. the matter is a dispute arising from a consumer contract or about the existence of such a contract;
2. German VSBG applies to the relevant trader/dispute;
3. the consumer and trader have actually attempted resolution; and
4. the dispute could not be settled through that exchange.

Do not send the statutory post-dispute notice mechanically after every first support message. Also do not omit it merely because the support ticket is marked `closed`, `denied`, or `resolved internally` if the consumer continues to dispute the outcome.

### Required § 37 notice data

Before closing an unresolved covered consumer dispute, Support/legal operations must have a text-form template containing:

- the name of the competent consumer conciliation body;
- its current postal address;
- its current website;
- a statement whether CK-Labs is willing to participate;
- a statement whether CK-Labs is legally or contractually obliged to participate; and
- where CK-Labs is willing or obliged to participate before more than one competent body, the applicable body or bodies.

Do not state that CK-Labs is willing to participate if it has not made that business/legal decision. A § 37 information duty and a voluntary participation commitment are different things.

**Official German source:** § 37 VSBG appears in the current VSBG text: https://www.gesetze-im-internet.de/vsbg/BJNR025410016.html

## 5. Selecting the competent German consumer conciliation body

Do not permanently hard-code a consumer conciliation body without rechecking competence.

The Federal Office of Justice says that when no special-sector body has priority, the **Universalschlichtungsstelle des Bundes** may be competent in cases within its remit.

As of the current BfJ list reviewed for this gate, the federal universal body is:

**Universalschlichtungsstelle des Bundes - Zentrum für Schlichtung e. V.**  
Straßburger Str. 8  
77694 Kehl  
Germany  
https://www.universalschlichtungsstelle.de

This information must be revalidated before being placed into a production § 37 template because competence, address, website, statutory remit, or organizational details can change.

Do not use the universal body if a specifically competent consumer conciliation body has priority under applicable law.

**Current BfJ list:** https://www.bundesjustizamt.de/SharedDocs/Downloads/DE/Verbraucherschutz/Liste_Verbraucherschlichtungsstellen.pdf

## 6. Safe CK-Labs participation position

The public TycoonX legal documents should not accidentally create a broader ADR obligation than CK-Labs intends or applicable law requires.

Unless CK-Labs deliberately adopts a participation commitment after legal/business review:

- do not state broadly that CK-Labs “will participate in consumer arbitration”;
- do not state that every dispute “must” be resolved through ADR;
- do not describe ADR as a mandatory substitute for a consumer's court rights;
- do not add a binding-arbitration/class-action waiver copied from a third-party provider's contract; and
- do not promise acceptance of every proposal made by a conciliation body.

If CK-Labs later chooses to participate voluntarily, document:

- the relevant conciliation body;
- scope of disputes covered;
- start date;
- whether the commitment is public or transaction-specific;
- any fees or process consequences;
- whether the commitment changes § 36 website/Terms wording; and
- whether the canonical English legal meaning changed materially enough to reopen localization.

## 7. Transaction/channel allocation: Apple App Store

For an Apple App Store In-App Purchase:

- Apple controls the App Store transaction and Apple's own refund route;
- CK-Labs remains responsible for TycoonX entitlement delivery, product conformity obligations that belong to CK-Labs, account state, and game-specific support;
- a complaint sent to Apple does not automatically resolve a separate contractual dispute with CK-Labs;
- an Apple refund does not automatically prove user fraud;
- an App Store refund decision must be reconciled transaction-specifically against Diamonds, 30-Day VIP, Lifetime VIP, or another entitlement; and
- if a separate German consumer dispute with CK-Labs remains unresolved and § 37 VSBG applies, the Apple support/refund route does not by itself replace the required CK-Labs text-form § 37 notice.

For EU alternative-payment configurations, Apple's current guidance states that where the developer uses alternative payment options, the developer is responsible for timely customer support for those alternative-payment issues. Do not tell an EU alternative-payment customer to obtain support from Apple for a transaction Apple did not process.

**Current Apple EU alternative-payment support guidance:** https://developer.apple.com/support/payment-options-on-the-app-store-in-the-eu

## 8. Transaction/channel allocation: Google Play

For a Google Play purchase:

- Google controls the Google Play transaction infrastructure and can process eligible refunds;
- CK-Labs can have its own refund responsibilities and tools under Google Play rules and applicable law;
- CK-Labs remains responsible for correct TycoonX entitlement delivery and game-state reconciliation after authoritative Google transaction changes;
- a Google refund or refund request is not automatically fraud or chargeback abuse; and
- if a separate German consumer dispute with CK-Labs remains unresolved and § 37 VSBG applies, the Play refund/support route does not by itself replace the required CK-Labs text-form § 37 notice.

Google's current developer guidance states that developers are responsible for their own refund policies and must ensure they comply with applicable law.

**Current Google Play developer refund guidance:** https://support.google.com/googleplay/android-developer/answer/2741495

## 9. Transaction/channel allocation: Xsolla webshop

Xsolla can act as merchant of record for a TycoonX webshop transaction depending on the actual checkout arrangement.

For each dispute, preserve the transaction-specific evidence showing:

- the contracting merchant/entity shown at checkout and on the receipt;
- transaction ID;
- product and entitlement;
- price and currency;
- tax/VAT treatment;
- applicable Xsolla refund-policy version/type;
- payment/refund/chargeback state;
- CK-Labs entitlement action; and
- whether the unresolved issue is fundamentally a payment-contract dispute with Xsolla, a TycoonX delivery/conformity dispute with CK-Labs, or both.

Do not copy Xsolla's own arbitration or dispute clause into CK-Labs Terms merely because Xsolla is merchant of record for a transaction. Xsolla's own current Refund Policy/General Terms contain provider-specific dispute provisions, but those provisions govern the relationship defined in Xsolla's documents and remain subject to applicable mandatory consumer law.

If CK-Labs has its own unresolved German consumer-contract dispute, a provider dispute process does not automatically replace § 37 VSBG.

**Current Xsolla legal agreements:** https://xsolla.com/legal-agreements

**Current Xsolla refund policy:** https://xsolla.com/refund-policy

## 10. Dispute type must be separated from account enforcement

Support/moderation/payment operations must distinguish at least:

1. **purchase not delivered**;
2. **duplicate or accidental purchase**;
3. **withdrawal request**;
4. **defective/non-conforming digital product or service**;
5. **refund/reversal/chargeback**;
6. **unauthorized payment or account compromise**;
7. **regional-pricing or tax disagreement**;
8. **promotion/coupon dispute**;
9. **Diamond balance or entitlement correction**;
10. **30-Day VIP clock dispute**;
11. **Lifetime VIP validity/restoration dispute**;
12. **suspension/termination dispute**;
13. **privacy/data-protection complaint**;
14. **Community Standards/moderation complaint**; and
15. **consumer ADR/court escalation**.

Do not use a generic `fraud` or `chargeback` status to collapse these categories.

A consumer can pursue a refund, statutory withdrawal, conformity remedy, ADR, regulator complaint, data-protection complaint, or court claim without that procedural act itself proving abuse.

Deliberate forged receipts, coordinated refund cycling, stolen payment instruments, manipulated regional eligibility, exploit-generated entitlements, or repeated bad-faith payment abuse may still be investigated and enforced separately where supported by evidence.

## 11. No retaliation for lawful consumer redress

CK-Labs must not suspend, terminate, reduce unrelated paid value, or otherwise punish an account **solely because** the user:

- contacted Support;
- requested a refund;
- exercised or attempted to exercise a statutory withdrawal right;
- requested cure, termination, or price reduction for a digital-product conformity issue;
- contacted Apple, Google, Xsolla, a bank, a regulator, a consumer organization, or a consumer conciliation body;
- challenged a decision through a lawful DSA redress route where applicable; or
- brought a lawful court claim.

Transaction-specific entitlement correction after an actual refund, reversal, invalid payment, or confirmed abuse remains permitted where lawful. The protected procedural act and the substantive transaction state must be analyzed separately.

## 12. Product isolation during disputes

### Diamonds

A dispute concerning one Diamond transaction must not automatically remove unrelated legitimately purchased Diamonds.

If the disputed transaction is refunded or invalidated, correct only the corresponding paid value and any provably related downstream invalid value, subject to mandatory law and the existing economy-correction/provenance rules.

### One-time 30-Day VIP

A support dispute, ADR request, or payment-provider complaint must not restart the original 30-Day VIP clock.

If the specific 30-Day VIP purchase is validly refunded or invalidated, correct that entitlement transaction-specifically. Do not remove unrelated purchased Diamonds or Lifetime VIP merely because a separate 30-Day VIP payment is disputed.

### Lifetime VIP

A dispute or ADR request does not create a hidden Lifetime VIP expiry and does not convert Lifetime VIP into 30-Day VIP.

A provider-confirmed refund, reversal, or proven invalid Lifetime VIP purchase can justify a transaction-specific entitlement correction where lawful. A consumer's use of ADR, Support, a court, or another lawful remedy is not by itself grounds to revoke valid Lifetime VIP.

## 13. Court rights and mandatory consumer protections remain intact

Consumer ADR is an additional dispute-resolution mechanism. It must not be described as removing mandatory access to courts or other statutory remedies.

Nothing in this gate authorizes CK-Labs to waive or contract around non-waivable rights concerning, where applicable:

- withdrawal;
- digital-product conformity and cure;
- updates;
- termination;
- price reduction;
- refunds and repayment deadlines;
- unfair commercial practices;
- unfair contract terms;
- data protection;
- DSA redress;
- product accessibility;
- payment authorization; or
- jurisdiction/choice-of-law protections for consumers.

Any future dispute-resolution clause added to the canonical Terms must be reviewed for EU/German unfair-terms and consumer-jurisdiction consequences before publication.

## 14. Current EU ADR reform: Directive (EU) 2025/2647

Directive (EU) **2025/2647** amended the EU consumer ADR framework after discontinuation of the old ODR platform.

As of September 2, 2026:

- the Directive is **in force** at EU level;
- it entered into force on **January 19, 2026**;
- Member States have until **March 20, 2028** for transposition measures identified in the Directive; and
- the amended national rules are scheduled to apply from **September 20, 2028** under the Directive's timetable.

Therefore:

- do not treat every future-rule detail as already applicable German law on September 2, 2026;
- keep a legal-watch item for German implementation;
- re-audit VSBG, Support templates, ADR-response deadlines, Terms/website disclosures, and cross-border tooling before the 2028 application date; and
- do not revive the old EU ODR link when the Commission launches the newer ADR information/tooling infrastructure.

The updated EU framework also introduces future obligations/expectations around trader responses to ADR-entity contact and modernized cross-border ADR. Implementation timing must be checked against German transposition before converting those future rules into hard production statements.

**Official source:** Directive (EU) 2025/2647: https://eur-lex.europa.eu/eli/dir/2025/2647/oj

## 15. Support workflow for an unresolved German consumer-contract dispute

Before final closure:

1. **Identify the contracting relationship.** Apple, Google Play, Xsolla merchant-of-record transaction, or direct CK-Labs relationship.
2. **Identify the disputed product.** Diamonds, 30-Day VIP, Lifetime VIP, another entitlement, free service, account action, or another TycoonX feature.
3. **Preserve authoritative evidence.** Transaction/provider record, entitlement ledger, account state, offer terms, price/tax display, support conversation, relevant legal-version timestamp, and correction history.
4. **Try to resolve the substance.** Delivery, restore, refund route, withdrawal, correction, conformity cure, account recovery, or explanation as appropriate.
5. **Separate payment status from account enforcement.** Do not convert a normal unresolved dispute into a fraud label without evidence.
6. **If unresolved and § 37 VSBG applies, send the current text-form ADR information notice.** Verify the competent conciliation body immediately before sending.
7. **State participation accurately.** Do not imply willingness or obligation that does not exist.
8. **Preserve the notice.** Keep the sent text, date/time, recipient/account reference, dispute reference, named body, and body details current at the time sent.
9. **Do not remove unrelated entitlements.** Any correction must remain transaction-specific and proportionate.
10. **Escalate material legal uncertainty.** Especially disputed Lifetime VIP, mass refund events, recurring patterns, regulator correspondence, association claims, or formal ADR/court papers.

## 16. Minimum production evidence

A release/legal evidence pack should include:

- annual § 36 employee-threshold assessment;
- current ADR willingness/obligation decision;
- evidence that no stale EU ODR link exists in TycoonX legal/support/checkout copy;
- current § 37 German text-form template;
- current competent conciliation-body verification source/date;
- Support trigger rule for when a dispute is actually unresolved;
- Apple refund/support allocation example;
- Google Play refund/support allocation example;
- Xsolla merchant-of-record dispute example;
- example where a user disputes one Diamond purchase but unrelated paid value remains untouched;
- example where 30-Day VIP is disputed without resetting its clock;
- example where Lifetime VIP remains intact during a separate payment dispute;
- example where a lawful chargeback/refund/ADR request does not automatically create a fraud ban; and
- calendar reminder for Directive (EU) 2025/2647 German implementation review before September 20, 2028.

## 17. QA scenarios

Release review must be able to answer these correctly:

1. **CK-Labs has 10 or fewer employees on the relevant December 31.** The § 36(3) exemption may apply to § 36(1)(1), but do not claim that all VSBG duties disappear.
2. **CK-Labs later exceeds the § 36 threshold.** Reassess website/Terms information before continuing to rely on the exemption.
3. **A German consumer dispute remains unresolved after Support exchange.** Send a compliant § 37 text-form notice with the competent body and accurate participation statement.
4. **A user asks for the former EU ODR platform.** Do not provide the discontinued platform as a current remedy.
5. **Support copied a 2024 template containing the old ODR link.** Treat it as stale legal copy and correct it.
6. **A consumer obtains an Apple refund.** Reconcile the specific Apple transaction; do not label the account fraudulent merely because Apple granted a refund.
7. **A Google Play consumer asks CK-Labs for a refund.** Follow provider/current legal routes and do not falsely say only Google can ever help if CK-Labs has relevant developer tools or legal duties.
8. **Xsolla is merchant of record and the user disputes billing.** Preserve the Xsolla transaction/merchant/refund path while separately addressing CK-Labs entitlement or conformity issues.
9. **Xsolla's own terms contain arbitration wording.** Do not paste that wording into CK-Labs Terms as if it automatically governs TycoonX disputes.
10. **A user starts ADR over 500 Diamonds.** Do not freeze unrelated Lifetime VIP merely because the account has an open dispute.
11. **A user challenges a 30-Day VIP delivery issue.** Do not restart the clock just because Support re-verifies the purchase.
12. **A user contests suspension while a payment dispute is also open.** Analyze moderation/security evidence separately from the payment complaint.
13. **A user threatens court action.** Do not revoke purchased value or terminate solely because the user intends to pursue a legal remedy.
14. **An ADR body contacts CK-Labs in 2026 referencing the future EU reform.** Apply current German law and actual obligations; keep the 2028 reform timeline distinct.
15. **A future EU ADR information tool launches.** Verify the legal basis and current official destination before adding it; never restore the old ODR URL by habit.

## 18. Localization rule

This gate does **not** by itself change the public canonical English Terms, Purchases & Refunds Policy, Privacy Policy, or Community Standards.

Therefore it does not reopen the completed 25-locale queue.

If CK-Labs later adds a material public ADR commitment, dispute-resolution clause, mandatory-arbitration clause, court/jurisdiction change, or legally required § 36 statement to the canonical Terms, reopen the affected localized document type and resynchronize it in the required order:

`tr, de, es, es_MX, fr, fr_CA, it, pt, pt_BR, ru, ja, ko, zh, zh_Hans, zh_Hant, ar, nl, sv, nb, pl, th, vi, uk, hi, id`.

## 19. Release / brand invariants

- The game is displayed as **TycoonX** in all legal and player-facing prose.
- Technical route/file names containing `tyconx` may remain when needed for compatibility.
- TycoonX is in full release from **September 1, 2026** and must not be described as a beta service.
- No GitHub Actions or paid service is required by this gate.
- No database change is required by this gate.

## 20. Current official references

- German VSBG current text: https://www.gesetze-im-internet.de/vsbg/BJNR025410016.html
- § 36 VSBG: https://www.gesetze-im-internet.de/vsbg/__36.html
- § 37 VSBG: https://www.gesetze-im-internet.de/vsbg/__37.html
- Federal Office of Justice business guidance for §§ 36 and 37 VSBG: https://www.bundesjustizamt.de/DE/Themen/Verbraucherrechte/Verbraucherstreitbeilegung/Unternehmen/Unternehmen.html
- Federal Office of Justice list of consumer conciliation bodies: https://www.bundesjustizamt.de/SharedDocs/Downloads/DE/Verbraucherschutz/Liste_Verbraucherschlichtungsstellen.pdf
- Regulation (EU) 2024/3228 discontinuing the old ODR platform: https://eur-lex.europa.eu/eli/reg/2024/3228/oj
- Directive (EU) 2025/2647 updating EU ADR rules: https://eur-lex.europa.eu/eli/dir/2025/2647/oj
- Apple EU alternative-payment customer-support guidance: https://developer.apple.com/support/payment-options-on-the-app-store-in-the-eu
- Google Play developer order/refund guidance: https://support.google.com/googleplay/android-developer/answer/2741495
- Xsolla legal agreements: https://xsolla.com/legal-agreements
- Xsolla Refund Policy: https://xsolla.com/refund-policy

## 21. Final go/no-go rule

Do not mark German/EU consumer-dispute handling ready unless CK-Labs can demonstrate all of the following without guessing:

- current § 36 applicability assessment;
- current § 37 unresolved-dispute workflow;
- current competent consumer conciliation-body lookup;
- no stale EU ODR platform link;
- accurate willingness/obligation statement;
- text-form evidence for unresolved disputes;
- Apple/Google/Xsolla dispute-role separation;
- no automatic fraud punishment merely for lawful consumer redress;
- transaction-specific Diamonds/30-Day VIP/Lifetime VIP correction;
- preservation of mandatory consumer and court rights; and
- a dated legal-watch item for German implementation of Directive (EU) 2025/2647 before the 2028 application date.

## 22. DSA Article 21 and public Impressum boundary

German VSBG consumer conciliation must remain separate from **DSA Article 21** out-of-court dispute settlement for eligible platform-moderation decisions. The same underlying facts can produce more than one route, but they do not share the same legal basis, scope, deadlines, decision-maker, or consequences.

Do not collapse any of the following into one generic `appeal` flow:

- a § 37 VSBG consumer-contract notice;
- a DSA Article 20 internal complaint;
- DSA Article 21 certified out-of-court dispute settlement;
- an Apple, Google Play, or Xsolla refund/reversal process;
- a GDPR complaint or data-subject request; or
- a court claim.

The current public TycoonX Impressum contains provider information under § 5 DDG, a DSA contact-point section, a conditional § 37 VSBG statement, and an accurate statement that the former EU ODR platform was discontinued. Preserve those safeguards.

However, the Impressum's conditional § 37 statement is **not a substitute** for a § 36(1)(1) website/Terms participation-status statement if that general duty actually applies to CK-Labs. Likewise, a generic Impressum link is not a substitute for the transaction-specific text-form § 37 notice after an unresolved covered consumer-contract dispute.

Before relying on the § 36(3) employee-count exemption, keep a dated record based on the actual number of persons employed on December 31 of the preceding year. Do not infer the exemption from labels such as `indie`, `solo`, `small`, `individual`, or from a store-account type.

## 23. Single source of truth

This file is the **single TycoonX EU/German consumer ADR / VSBG / former-ODR operational release gate**.

Do not create a second overlapping ADR gate for the same §§ 36/37 VSBG and former-ODR subject. Future legal changes should be merged here, and the surviving verifier should enforce this single-source-of-truth rule.
