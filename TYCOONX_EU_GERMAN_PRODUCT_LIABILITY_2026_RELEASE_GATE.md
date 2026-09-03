# TycoonX EU/German Software Product Liability 2026 Release Gate

**Review date: September 3, 2026**

Owner: CK-Labs

Scope: TycoonX software, app releases, updates, server-delivered software, security-relevant components, integrated SDKs, AI functionality, backend-controlled software behavior, incident evidence, and the interaction between future EU/German product-liability rules and the existing TycoonX Terms, Privacy Policy, Purchases & Refunds Policy, security process, and entitlement records.

## Purpose

TycoonX went to full release on September 1, 2026. This gate prepares CK-Labs for the modernized EU product-liability framework that applies to products placed on the market or put into service **after December 9, 2026**.

This is primarily a future-readiness and engineering-evidence gate. It must not be presented as though the new German implementing law is already in force on September 3, 2026.

The legal source is Directive (EU) 2024/2853 on liability for defective products. Germany has a government bill, Bundestag document 21/4297, intended to modernize the Produkthaftungsgesetz. As of this review, the official Bundestag materials show the bill was introduced and received its first reading on March 4, 2026 and a committee hearing on April 13, 2026. Re-check the enacted German text before December 9, 2026 and update this gate if the final national text or commencement provisions differ from the current government bill.

## 1. Effective-date boundary must stay explicit

Directive (EU) 2024/2853:

- must be transposed by Member States by **December 9, 2026**;
- applies to products placed on the market or put into service **after December 9, 2026**; and
- repeals the old Product Liability Directive from December 9, 2026, while the old directive continues to govern products placed on the market or put into service before that date.

Do not describe the new regime as already governing the September 1, 2026 TycoonX full release merely because CK-Labs is preparing for it now.

For TycoonX, preserve release lineage so CK-Labs can identify which app build, software component, update, backend-controlled software version, or substantial modification is alleged to have caused damage and when it was made available.

## 2. Software is expressly a product under the new directive

The new directive expressly includes **software** in the definition of a product. Its recitals make clear that software can be covered regardless of whether it is:

- stored on a device;
- accessed through a communications network or cloud technology; or
- supplied through a software-as-a-service model.

A commercial proprietary game such as TycoonX must therefore not rely on the old assumption that intangible software is outside product-liability law.

The exclusion for free and open-source software is narrow. It concerns free and open-source software developed or supplied outside the course of a commercial activity. It does not convert TycoonX itself into exempt software merely because TycoonX uses open-source libraries.

## 3. Do not classify every TycoonX dispute as product liability

The new regime is important, but it is not a universal refund or game-balance law.

Directive (EU) 2024/2853 covers specified damage caused by a defective product, including:

- death or personal injury, including medically recognized damage to psychological health;
- damage to or destruction of qualifying property; and
- destruction or corruption of data that are not used for professional purposes.

The directive does not turn every gameplay or purchase dispute into a product-liability claim.

Examples that are **not automatically product-liability damage merely because software was involved** include:

- a disputed Diamond balance;
- loss of fictional in-game money;
- an economy rebalance;
- a VIP feature change;
- an account suspension;
- a failed purchase;
- a refund disagreement;
- a missed promotion;
- a server outage causing only temporary inability to play; or
- a purely contractual complaint about the commercial-lifetime meaning of Lifetime VIP.

Those matters may still trigger contract, consumer, digital-content, privacy, payment, platform, or other legal rights. This gate must never be used to deny those separate rights.

## 4. Defectiveness is a safety question, not simply a bug count

Under the new directive, a product is defective where it does not provide the safety that a person is entitled to expect or that is required under Union or national law.

The assessment can include:

- product presentation and characteristics;
- reasonably foreseeable use;
- the effect of learning or newly acquired features;
- reasonably foreseeable effects of interconnected products;
- the period during which the manufacturer retains control;
- relevant product-safety requirements, including safety-relevant cybersecurity requirements;
- recalls or other safety interventions; and
- the needs of the intended user group.

A bug does not automatically prove legal defectiveness. Conversely, calling behavior `expected`, `game balance`, `third-party`, or `unsupported` does not automatically disprove a safety defect.

A later better version or later update does not by itself prove that an earlier version was defective.

## 5. Security vulnerabilities and updates require lifecycle evidence

The directive specifically recognizes cybersecurity in the defectiveness analysis.

Where software remains within the manufacturer's control, liability can remain relevant where defectiveness arises from:

- a related service within that control;
- software, including an update or upgrade;
- a missing software update or upgrade necessary to maintain safety; or
- a substantial modification within the manufacturer's control.

For TycoonX, the safe engineering practice is therefore to retain proportionate evidence of:

- supported app versions;
- security-relevant release dates;
- release hashes/build identifiers;
- material backend deployment timestamps where relevant to the alleged event;
- critical dependency and SDK versions;
- vulnerability reports and severity decisions;
- security update availability;
- material notices urging or requiring an update;
- reasons for ending support for an old version;
- emergency mitigations;
- incident start, awareness, containment, fix, and deployment timestamps; and
- whether a provider-controlled component was replaced, disabled, or isolated.

This should reuse the existing TycoonX CRA, GDPR breach, account-compromise, logging, and security-evidence processes rather than creating parallel facts for the same incident.

## 6. Old or unsupported versions: do not overstate user fault

CK-Labs may stop supporting old TycoonX app versions for legitimate security, compatibility, platform, infrastructure, or operational reasons.

Where continued use of an obsolete version creates a real security or safety risk, CK-Labs may use proportionate measures such as:

- a clear update notice;
- disabling a dangerous function;
- requiring a minimum supported version; or
- blocking an unsafe version where reasonably necessary.

However, do not write or enforce a blanket rule saying that use of an old version automatically transfers all legal risk to the user.

The directive allows liability to be reduced or disallowed where the injured person's own fault contributed to the damage. It does **not** make every failure to update automatic contributory fault.

Record whether the safety update was actually made available, whether the user had a reasonable opportunity to install it, what warning was given, and whether failure to update actually contributed to the alleged damage.

## 7. A hacker or third party does not automatically break causation

A malicious third party may exploit a vulnerability, compromise an account, attack infrastructure, tamper with traffic, or abuse a provider.

Do not automatically state that the existence of an attacker eliminates CK-Labs product-liability exposure. Under the new directive, liability is not automatically reduced merely because a third party's act or omission contributed alongside a defective product.

For each serious security incident, separately determine:

- whether the product was defective;
- whether the attacker exploited that defect;
- whether required or reasonably expected security controls existed;
- whether a safety-relevant update was available;
- whether the event instead resulted from stolen credentials, provider compromise, social engineering, or another cause outside a product defect; and
- which damage, if any, falls within the product-liability damage categories.

An account compromise report must also continue to follow the existing TycoonX account-security, GDPR, CRA, DSA, payment, and support rules where applicable.

## 8. Third-party SDKs and providers do not erase manufacturer responsibility

TycoonX can depend on Apple, Google, Xsolla, Supabase, authentication services, analytics/crash tools, security providers, AI providers, SDKs, libraries, hosting, and other third parties.

Provider responsibility and contractual indemnities can matter between businesses, but they must not be described to an injured person as automatically eliminating a mandatory product-liability right.

Where CK-Labs authorizes, integrates, interconnects, or controls software/components in the manner contemplated by the directive, preserve evidence of:

- the component and version;
- why it was integrated;
- permissions/data access;
- security configuration;
- vendor advisories;
- update history;
- incident correspondence; and
- replacement/disable decisions.

B2B contracts may allocate contribution or recourse where lawful, but Article 15 of Directive (EU) 2024/2853 does not permit liability toward the injured person under the directive to be excluded or limited by contract.

## 9. Apple, Google Play, and Xsolla roles remain distinct

Apple, Google Play, and Xsolla can control payment, storefront, checkout, refund, tax, fraud, or transaction functions. Those commercial roles do not by themselves make them the manufacturer of TycoonX software.

Likewise, a product-liability allegation does not automatically turn a valid Apple, Google, or Xsolla payment into a refund or chargeback.

Keep separate records for:

- software release and safety state;
- payment state;
- entitlement state;
- provider outage or provider defect;
- account compromise;
- consumer refund/withdrawal rights; and
- any alleged personal injury, property damage, or non-professional data destruction/corruption.

Do not use a product-liability allegation to manufacture a payment reversal, and do not use a successful payment record as proof that the software was safe.

## 10. Diamonds, 30-Day VIP, and Lifetime VIP remain isolated

Product-liability evidence must not corrupt entitlement accounting.

### Diamonds

A safety incident or product-liability complaint does not by itself authorize deleting unrelated legitimately purchased Diamonds, creating a negative Diamond balance, or reclassifying valid purchased Diamonds as promotional value.

A separately valid refund, reversal, fraud finding, duplicate grant, or transaction-specific correction can still be handled under the authoritative payment and entitlement rules.

### One-time 30-Day VIP

A safety investigation does not itself restart, extend, shorten, duplicate, or convert the original one-time 30-Day VIP period.

A separate mandatory remedy may require a price reduction, refund, contract termination, or other adjustment. Record that legal basis independently.

### Lifetime VIP

Lifetime VIP remains a one-time entitlement available only during selected genuine promotional sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future sales availability.

A product-liability investigation does not itself add an expiry date to an otherwise valid Lifetime VIP or convert it into 30-Day VIP or Diamonds.

Permanent lawful discontinuation of TycoonX remains governed by the existing Terms and mandatory consumer rights. Product-liability rights for qualifying damage are not waived merely because the Service later closes.

## 11. AI and automated systems

AI systems are software and can fall within the new product definition.

For TycoonX AI-assisted moderation, support, generation, fraud detection, security, or game systems:

- keep the existing AI Act and GDPR classifications separate;
- record model/provider/version information where necessary for a safety-relevant incident;
- do not treat a wrong moderation decision or hallucinated support answer as personal injury merely because AI was involved;
- do not use an AI output as sole proof that a product defect existed or did not exist; and
- preserve human-review and incident evidence where an AI-controlled function plausibly contributed to qualifying damage.

The AI Act, GDPR, DSA, contract law, and product-liability law can apply independently to the same facts.

## 12. Evidence disclosure changes the value of engineering records

Article 9 of Directive (EU) 2024/2853 requires Member States to provide for disclosure of relevant evidence in qualifying court proceedings where the statutory conditions are met. Disclosure must be limited to what is necessary and proportionate, with protection for confidential information and trade secrets.

Article 10 also introduces rebuttable presumptions in specified situations, including where a defendant fails to disclose relevant evidence ordered under Article 9, where the product violates relevant mandatory safety requirements, or where damage results from an obvious malfunction during reasonably foreseeable use or ordinary circumstances.

Founder-protective practice is therefore **good, contemporaneous evidence**, not indiscriminate deletion and not unlimited surveillance.

For material safety incidents, preserve the records needed to explain:

- what version was operating;
- what failed;
- what CK-Labs knew and when;
- what safety/security requirements applied;
- what mitigation was available;
- what was deployed;
- what provider or third-party component was involved; and
- why the final engineering decision was reasonable.

Do not retain unrelated player data merely because a future claim is theoretically possible. Privacy, data minimization, legal-hold, and retention rules still apply.

## 13. Trade secrets and security-sensitive evidence

Do not respond to a claim by publicly publishing exploit details, signing keys, access tokens, security architecture, anti-cheat internals, or another player's personal data.

The directive expressly contemplates proportionate disclosure and protection of trade secrets in court proceedings.

Where evidence is sensitive:

- preserve it securely;
- separate legal evidence from public support communication;
- use redaction or restricted-access procedures where legally available;
- maintain chain-of-custody and integrity metadata for important logs; and
- avoid editing an incident record after the fact without an auditable correction history.

## 14. Liability cannot be waived by a broad Terms sentence

Do not add language such as:

- `CK-Labs has no liability for any software defect`;
- `use is entirely at your own risk in all circumstances`;
- `third-party involvement removes all CK-Labs liability`; or
- `you waive all claims caused by security vulnerabilities`.

Article 15 of Directive (EU) 2024/2853 requires that liability under the directive not be limited or excluded in relation to the injured person by contractual provision or national law.

The TycoonX Terms may continue to use lawful limitations, exclusions, causation rules, user-responsibility clauses, and mandatory-rights caveats for claims where those clauses are legally effective. The final German implementation must be reviewed before relying on a specific limitation against a product-liability claim arising after the new regime applies.

## 15. Limitation and expiry evidence

The directive provides:

- a **3-year limitation period** running from when the injured person knew or should reasonably have known the damage, defectiveness, and identity of the relevant liable economic operator;
- a general **10-year expiry period** from the relevant placing on the market or putting into service; and
- a **25-year** long-stop period in the specified latent personal-injury situation.

A substantially modified product can create a new relevant expiry period under the directive.

For live software, do not rely on a single `game release date` for every future version. Preserve enough version and substantial-modification evidence to identify the legally relevant date.

## 16. Updates, upgrades, and substantial modification

Not every TycoonX patch or balance update is a substantial modification.

Before classifying a major change as substantial for product-liability purposes, examine the statutory criteria and the final German implementation, including whether the change:

- changes original performance, purpose, or type in a way not foreseen in the initial risk assessment; and
- changes the nature of a hazard, creates a new hazard, or increases the level of risk where no more specific product-safety threshold governs.

Maintain a short safety-impact note for genuinely major technical changes. Ordinary content updates, server tuning, economy changes, pricing updates, and cosmetic changes should not be labelled `substantial modification` without a legal and technical reason.

## 17. Permanent shutdown, sale, merger, and successor operation

A lawful permanent service shutdown, sale, merger, reorganization, or successor operator can change who controls future TycoonX operations, but it must not destroy evidence needed for existing legal claims.

Before a material business transfer or shutdown:

- preserve applicable release and incident records under the established retention/legal-hold rules;
- identify who will hold legally required records;
- preserve open security and product-liability claims;
- preserve provider transaction evidence separately from safety evidence;
- preserve valid entitlement continuity or consumer remedies as required by the existing business-transfer and shutdown gates; and
- document the cutoff between CK-Labs-controlled and successor-controlled releases where reasonably possible.

Do not promise that a buyer, platform, provider, or successor automatically assumes every liability unless the legal transaction and applicable law actually produce that result.

## 18. Incident intake triage

Support or security reports should be escalated for product-liability review where facts plausibly allege a software defect caused:

- physical injury;
- medically recognized psychological injury;
- damage to qualifying personal property; or
- destruction/corruption of non-professional data outside ordinary in-game state.

The intake should preserve the report without admitting defect, causation, liability, fraud, or user fault.

A useful internal incident packet can include:

- claimant/contact reference;
- affected TycoonX account only where relevant;
- app/build/server version evidence;
- device/OS only where relevant;
- event timestamp/time zone;
- alleged harm category;
- relevant logs and integrity metadata;
- known security incident linkage;
- provider/SDK involvement;
- relevant updates available before the event;
- prior notices/warnings;
- remediation; and
- links to any GDPR, CRA, DSA, Apple, Google, Xsolla, insurance, or legal workflow triggered by the same event.

## 19. Product-liability insurance is a review item, not an automatic purchase

Before the new regime begins applying, CK-Labs should review whether any existing business, cyber, professional, or product-liability insurance actually covers commercial software and the relevant damage categories.

Do not assume that a general liability policy covers software product liability, data corruption, cybersecurity defects, or claims under the new regime.

This gate does **not** authorize purchasing a paid insurance product or paid legal/compliance service. Any new paid service remains a separate business decision.

## 20. Minimum December 2026 regression scenarios

Before treating TycoonX as ready for the post-December-9 product-liability regime, test or document at least:

1. A release can be tied to a build/version and deployment date.
2. A critical security fix can be tied to the affected versions and release timestamp.
3. An unsupported-version block records the real safety/compatibility reason rather than a generic liability waiver.
4. A third-party SDK vulnerability can be mapped to the integrated version and remediation decision.
5. An account compromise is not automatically labelled a product defect.
6. A hacker exploiting a vulnerability is not automatically treated as eliminating CK-Labs exposure.
7. A provider outage is distinguished from a TycoonX software defect.
8. A successful Apple/Google/Xsolla payment is not treated as proof of product safety.
9. A product-liability report does not delete unrelated purchased Diamonds.
10. A product-liability report does not restart or alter the one-time 30-Day VIP clock.
11. A product-liability report does not add an expiry to valid Lifetime VIP.
12. A game-economy correction is not automatically classified as qualifying product-liability damage.
13. A safety-related AI incident preserves the model/provider/version evidence reasonably available.
14. A material incident can preserve evidence without retaining unrelated player data.
15. Security-sensitive evidence can be preserved without publishing exploit details.
16. Terms and support scripts do not claim that all product-liability rights are waived.
17. Major technical changes have a substantial-modification assessment where genuinely relevant.
18. Shutdown/successor procedures preserve open claim and release evidence.
19. The final enacted German law is rechecked before December 9, 2026.
20. Current canonical legal pages still preserve mandatory non-waivable rights.

## 21. Current legal checkpoint reviewed September 3, 2026

Primary EU source:

- Directive (EU) 2024/2853 on liability for defective products, including Articles 2, 4, 6, 7, 9, 10, 11, 13, 15, 16, 17, 21 and 22.

Current German legislative checkpoint:

- Bundesregierung/Bundestag government bill: **BT-Drs. 21/4297**, `Entwurf eines Gesetzes zur Modernisierung des Produkthaftungsrechts`.
- Bundestag first reading: **March 4, 2026**.
- Bundestag Committee on Legal Affairs and Consumer Protection public hearing: **April 13, 2026**.
- The official Bundestag hearing page was current as of **September 2, 2026** and still presented the measure as a government bill rather than an enacted statute.

Before December 9, 2026, re-check:

- the final Bundesgesetzblatt text;
- the final German effective/application provisions;
- any deviations in the enacted German statute relevant to software, evidence, limitation, or defenses; and
- whether CK-Labs' operational role or TycoonX software architecture has materially changed.

## 22. Canonical legal wording and localization rule

This gate does not itself materially change the public contractual meaning of the current TycoonX Terms, Privacy Policy, Purchases & Refunds Policy, or Community Standards.

Therefore it does not by itself require reopening the completed 25-locale localization set.

If the canonical English Terms are later changed to reflect the enacted German product-liability law, any material player-facing change must be propagated to all localized legal documents under `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md` without silently omitting mandatory-rights caveats.

## 23. Release decision

For releases placed on the market or put into service after December 9, 2026, TycoonX is **not product-liability evidence-ready** if CK-Labs cannot:

- identify the relevant software release/version;
- preserve material safety/security update history;
- distinguish product-liability damage from ordinary gameplay/payment disputes;
- identify integrated third-party software relevant to a serious incident;
- preserve proportionate incident evidence;
- avoid blanket contractual waivers of non-waivable liability;
- keep Diamonds, 30-Day VIP, Lifetime VIP, refunds, chargebacks, and safety claims in separate authoritative state machines; or
- demonstrate that the final enacted German implementation was reviewed before relying on this gate.

This gate protects CK-Labs by combining narrow legal classification, lifecycle evidence, security discipline, provider separation, and mandatory-rights preservation rather than by attempting an unenforceable waiver.