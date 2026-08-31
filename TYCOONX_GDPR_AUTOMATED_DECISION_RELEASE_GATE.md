# TycoonX GDPR Automated Decision & Human Review Release Gate

Last reviewed: **August 31, 2026**  
Operator/business name used in player-facing documents: **CK-Labs**

Purpose: keep TycoonX fraud, anti-cheat, moderation, payment-risk, entitlement-abuse, account-security, regional-pricing-abuse and other automated systems compatible with the GDPR while preserving CK-Labs' ability to react quickly to real abuse and security incidents.

This is an operational release gate. It does **not** state that every listed automated system currently exists in TycoonX, and it does not replace the canonical TycoonX Privacy Policy, Terms of Service, Community Standards, mandatory consumer law, the DSA, or platform/payment-provider rules.

## 1. Current legal baseline

As of August 31, 2026, GDPR Article 22 remains the operative EU rule for decisions based solely on automated processing, including profiling, that produce legal effects concerning a person or similarly significantly affect them.

Article 22 is not a general ban on automation. The gate is triggered only after classifying the actual decision and its effect.

For every materially automated TycoonX decision, record:

1. whether personal data is used;
2. whether the decision is **solely automated** or involves meaningful human judgment;
3. whether the result produces a legal effect or similarly significant effect for the player;
4. the Article 6 legal basis for the underlying personal-data processing;
5. if Article 22(1) applies, the specific Article 22(2) exception relied on, if any;
6. the human-review, contest, transparency and audit safeguards; and
7. whether a DPIA or another impact/risk review is required.

Do not treat proposed future amendments to the GDPR as current law before they are adopted, enter into force and become applicable. The Digital Omnibus proposal must therefore be monitored separately from the currently applicable GDPR text.

## 2. TycoonX decision inventory

Before production release and after material changes, inventory automated or heavily algorithm-assisted decisions involving at least:

- login/account-takeover risk;
- suspected hacking, exploit use or manipulated clients;
- anti-cheat or anti-bot detection;
- suspicious company, stock, market, tender, deposit/withdrawal or other transfer patterns;
- chargeback/refund cycling or payment-fraud signals;
- duplicate purchase/entitlement detection;
- regional-pricing or coupon-abuse detection;
- automated moderation, mute, content removal, visibility restriction or account enforcement;
- device/IP/session risk scoring;
- automated entitlement restoration or revocation;
- automated refund eligibility recommendations;
- support-ticket prioritisation or risk scoring;
- personalised pricing, if ever introduced; and
- any AI or classifier whose output can materially affect account access, purchased value or community participation.

For each system, retain a short decision card with owner, data inputs, output, threshold, possible action, human role, retention period, appeal route and last review date.

## 3. What counts as solely automated

A workflow is not made "human" merely because a staff member can theoretically inspect it later.

Meaningful human involvement requires a person who:

- reviews the relevant facts rather than merely clicking `approve`;
- has sufficient competence and context to assess the case;
- has genuine authority to change or reverse the proposed result;
- is not instructed to follow the automated score in almost every case; and
- can consider information submitted by the affected player.

A rubber-stamp review does not safely remove a decision from Article 22.

## 4. Significant-effect classification

The impact must be assessed case by case. The following TycoonX outcomes should receive heightened Article 22 review because they can plausibly become similarly significant depending on duration, scope, money/value involved and player circumstances:

- permanent account termination;
- a long or indefinite account suspension;
- blocking access to a valid paid entitlement;
- permanently revoking Lifetime VIP;
- cancelling remaining 30-Day VIP time;
- removing a material amount of legitimately purchased Diamonds;
- denying restoration of a valid paid entitlement;
- a payment/fraud decision that effectively prevents a player from using a material paid service;
- a repeated or prolonged automated restriction that excludes the player from major community or economic features; or
- user-specific automated pricing based on behavioural/profile signals where the effect becomes significant.

The following are **not automatically** Article 22 decisions merely because automation is used:

- spam filtering that only prioritises a queue;
- a reversible short-lived security hold while a human investigation starts promptly;
- bot detection that generates an internal risk flag but no player-facing consequence;
- recommendation or ranking logic with no legal or similarly significant effect; or
- purchase-state reconciliation that mechanically reflects an authoritative completed/refunded/revoked store transaction without an additional significant CK-Labs decision.

However, repeated temporary restrictions, cumulative effects or automation that effectively determines a supposedly human decision can still cross the threshold.

## 5. Article 22 exceptions are narrow and separate from Article 6

If Article 22(1) applies, do not assume that having a normal Article 6 legal basis automatically authorises the solely automated significant decision.

Article 22(2) provides separate routes only where the decision is:

- necessary for entering into or performing a contract;
- authorised by applicable Union or Member State law that also provides suitable safeguards; or
- based on the player's **explicit consent**.

Founder-protective rule: ordinary anti-fraud, security and game-integrity processing can still rely on appropriate GDPR legal bases where justified, but this does not create a blanket right to impose every severe consequence solely by automation.

Do not write `fraud prevention` in a decision card and assume Article 22 is solved. If relying on a statutory-authorisation route, identify the actual Union or Member State rule and its safeguards. If relying on contractual necessity, document why the solely automated decision is genuinely necessary for that contract rather than merely convenient.

Do not bundle Article 22 explicit consent into acceptance of the TycoonX Terms, account creation, a Diamond purchase, 30-Day VIP purchase or Lifetime VIP purchase.

## 6. Mandatory safeguards where Article 22 permits the decision

Where Article 22(2)(a) or (c) permits a solely automated significant decision, implement at least the Article 22(3) safeguards:

- a real route to obtain human intervention from CK-Labs;
- a route for the player to express their point of view;
- a route to contest the decision; and
- a reviewer with authority to change the result.

The review must be capable of correcting bad input data, mistaken identity, false positives, duplicate notifications, compromised-account activity and provider-state mismatches.

A player must not be punished merely for exercising a mandatory review or data-protection right.

## 7. Explainability and access rights

Where Articles 13, 14 or 15(1)(h) require information about Article 22 automated decision-making, provide meaningful information about the logic involved and the significance and envisaged consequences of the processing.

The Court of Justice judgment of **February 27, 2025 in C-203/22, Dun & Bradstreet Austria** confirms that `meaningful information about the logic involved` requires an intelligible explanation of the procedure and principles actually applied so the person can understand how their personal data was used to obtain the result.

Operationally:

- do not answer an access request only with `our algorithm detected suspicious activity`;
- do not dump an unreadable mathematical formula or source code and call that an explanation;
- explain the relevant categories of input data, the decision logic/principles, the role those data played and the consequence in a concise and understandable way where the GDPR requires it;
- where useful and feasible, explain how materially different input could have produced a different result without exposing exploit-enabling security secrets;
- do not use `trade secret` as a blanket reason to provide no meaningful information; and
- protect third-party personal data and genuine security-sensitive information while still satisfying the player's rights.

The C-203/22 judgment also confirms that claimed trade-secret or third-party-data conflicts may require balancing by the competent supervisory authority or court rather than a blanket refusal by the controller.

## 8. SCHUFA / meaningful-human-review checkpoint

The Court of Justice's **December 7, 2023 judgment in C-634/21, SCHUFA** confirms that Article 22(1) is a prohibition in principle where its conditions are met and that an automated score can itself fall within Article 22 when a third party draws strongly on it in making the consequential decision.

TycoonX implementation rule:

- CK-Labs must not assume that adding a nominal human step cures Article 22 if the reviewer simply follows the automated risk score;
- CK-Labs must also assess its own responsibility where it imports a provider/store/payment-fraud score and then automatically or near-automatically imposes a separate TycoonX restriction; and
- Apple, Google Play or Xsolla making an independent provider-side decision does not automatically make CK-Labs responsible for that provider's internal Article 22 compliance, but CK-Labs remains responsible for its own subsequent processing and entitlement/account action.

## 9. DPIA gate

GDPR Article 35(3)(a) specifically identifies systematic and extensive evaluation of personal aspects based on automated processing, including profiling, on which decisions producing legal or similarly significant effects are based as a DPIA case.

A DPIA assessment must therefore be triggered before deploying a TycoonX system that systematically scores players and can itself drive significant account, payment, entitlement or moderation consequences.

The assessment should cover at least:

- necessity and proportionality;
- false-positive and false-negative risks;
- data quality and source reliability;
- discriminatory or unfair effects;
- special-category or inferred-sensitive-data risk;
- account compromise and shared-device false attribution;
- children/minors where relevant;
- human-review design;
- explanation/appeal design;
- retention and audit logging;
- security and access controls; and
- impact on purchased Diamonds, 30-Day VIP and Lifetime VIP.

If the DPIA shows residual high risk that cannot be sufficiently mitigated, follow the GDPR prior-consultation path where applicable rather than shipping the system unchanged.

## 10. Children and sensitive data

Recital 71 GDPR says a solely automated significant measure should not concern a child. Treat child/minor cases as a high-risk design area and avoid severe fully automated decisions against minors without a fresh legal review.

Article 22(4) also places additional limits on significant solely automated decisions based on special categories of personal data. TycoonX fraud/moderation systems should not infer or use sensitive traits merely because doing so could improve a risk score.

Never use race, ethnicity, religion, political opinion, trade-union membership, health, sexual orientation, biometric identification or another Article 9 category as a punishment/risk shortcut without a specific lawful basis and Article 22(4) analysis.

## 11. Emergency security action remains possible

Nothing in this gate prevents CK-Labs from using proportionate automation to protect TycoonX quickly.

Safe pattern:

- an automated system detects a high-confidence account-compromise signal;
- risky transfers or purchases are temporarily frozen;
- the user receives an appropriate security message where safe and lawful;
- a human review begins promptly for a prolonged or severe restriction; and
- legitimate purchased value is preserved while the incident is investigated.

Unsafe pattern:

- a risk score immediately and permanently bans the account and deletes purchased Diamonds plus Lifetime VIP with no meaningful review, no transaction isolation and no contest route.

## 12. Payment and entitlement separation

Automated enforcement must preserve the distinction between payment-provider state and game enforcement.

- A verified Apple/Google/Xsolla refund or revocation can justify correcting the corresponding entitlement or purchased value under the Terms and mandatory law.
- A provider fraud flag that is not itself a final authoritative transaction state must not automatically become proof that every TycoonX entitlement is invalid.
- A chargeback on one transaction must not automatically erase unrelated legitimate purchases.
- A suspicious Diamond purchase must not automatically revoke Lifetime VIP purchased in a different valid transaction.
- An account-compromise signal must not automatically convert valid purchases into fraud.
- Duplicate-grant correction must target the duplicate or invalid grant, not unrelated legitimate value.

For each automated correction, preserve transaction-level references so Support/human review can reconstruct what happened.

## 13. DSA and Community moderation separation

Where TycoonX community functionality falls within the DSA, DSA moderation duties remain separate from GDPR Article 22.

A moderation decision can require a DSA Article 17 statement of reasons, including information about automation, even where GDPR Article 22 does not apply because the effect is not legally or similarly significant.

Conversely, satisfying a DSA statement-of-reasons or internal-complaint obligation does not automatically satisfy GDPR transparency, access, human-intervention or DPIA duties.

The current EDPB Guidelines 3/2025 on the DSA/GDPR interplay remain published as consultation guidance rather than a final adopted text as of this review. They are useful risk guidance, particularly on meaningful human involvement, but the release gate relies first on the GDPR itself and binding CJEU case law.

## 14. Privacy Policy parity

The canonical Privacy Policy already states that TycoonX may use automated security/moderation signals and that, where applicable law restricts solely automated decisions producing legal or similarly significant effects, CK-Labs will apply required safeguards including human involvement or review.

This operational gate does not materially change that public meaning.

If TycoonX later actually deploys a solely automated significant decision process that requires more specific Articles 13/14 transparency, materially changes the categories/purposes of personal-data processing, introduces automated personalised pricing, or changes the player's mandatory rights, update the canonical English Privacy Policy first and **reopen all 25 localized Privacy documents** in the required locale order.

## 15. Release evidence

Keep a dated evidence sample for each high-impact automated system showing:

- system/decision name and version;
- input data categories;
- decision output and possible player consequence;
- Article 6 basis;
- Article 22 classification and exception if applicable;
- whether human involvement is meaningful;
- human-review and contest route;
- player-facing notice/reason where required;
- one false-positive correction test;
- one account-compromise/shared-device test where relevant;
- one payment-provider mismatch test where relevant;
- proof that unrelated purchased value was preserved; and
- DPIA reference where required.

## 16. P0 before September 1, 2026 release

- [ ] Inventory every automated fraud, security, anti-cheat, moderation and entitlement-enforcement decision actually enabled in production.
- [ ] Confirm no severe account/payment/entitlement consequence is treated as `human reviewed` through a rubber-stamp workflow.
- [ ] Ensure permanent bans and material paid-value removals have a meaningful review path where required.
- [ ] Verify Support can reconstruct the transaction/evidence basis for automated Diamond, 30-Day VIP or Lifetime VIP corrections.
- [ ] Verify player challenges can reach a person with authority to reverse an incorrect decision.
- [ ] Trigger a DPIA assessment for any systematic extensive scoring that can drive legal or similarly significant effects.
- [ ] Verify Privacy Policy and actual processing remain aligned.
- [ ] Re-check the status of EU Digital Omnibus amendments before relying on any proposed Article 22 change.

## 17. Official references checked August 31, 2026

- GDPR Regulation (EU) 2016/679, especially Articles 13(2)(f), 14(2)(g), 15(1)(h), 22 and 35: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- EDPB small-business guidance on the right not to be subject to solely automated significant decisions: https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en
- EDPB automated decision-making and profiling guideline page, endorsing WP251rev.01: https://www.edpb.europa.eu/documents/guideline/automated-decision-making-and-profiling_en
- CJEU, C-634/21, SCHUFA, judgment of December 7, 2023.
- CJEU, C-203/22, Dun & Bradstreet Austria, judgment of February 27, 2025.
- EDPB Guidelines 3/2025 DSA/GDPR consultation page: https://www.edpb.europa.eu/public-consultations/guidelines-32025-on-the-interplay-between-the-dsa-and-the-gdpr_en

## 18. Founder-protective rule

Use automation aggressively for triage, detection, prioritisation, duplicate prevention, temporary safety controls and evidence gathering where lawful and proportionate. Do **not** create avoidable Article 22 exposure by letting an opaque score silently make irreversible high-impact decisions when a meaningful human decision or narrower temporary control can achieve the security/game-integrity purpose.

The objective is not `never automate`. The objective is: **automate detection and reversible protection, preserve authoritative evidence, and add meaningful human judgment before severe irreversible consequences where the law requires it.**
