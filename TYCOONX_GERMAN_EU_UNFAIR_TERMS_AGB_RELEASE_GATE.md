# TycoonX German/EU Unfair Terms & AGB Release Gate

**Release QA reference. Last reviewed: September 3, 2026.**

This gate audits the TycoonX Terms of Service, Purchases & Refunds Policy and related player-facing commerce/enforcement wording against the current German rules for standard business terms in **BGB §§ 305c, 307, 308 and 309** and the EU **Unfair Terms Directive 93/13/EEC**.

It is intentionally a contract-clause QA gate. It does not replace the separate TycoonX digital-product, withdrawal, payment-provider, DSA, privacy, accessibility or platform release gates. It must not be used to waive mandatory consumer rights.

The current canonical English legal wording already contains important safeguards such as mandatory-rights carve-outs, valid-reason language for product changes, narrow payment corrections, account-compromise protection and non-waivable liability carve-outs. This gate exists so future edits do not accidentally turn those protections into an unfair or unenforceable blanket clause.

## 1. Why this gate matters for TycoonX

TycoonX uses pre-formulated consumer terms. Founder-protective wording is useful only if it is likely to survive applicable mandatory consumer-law control.

A clause can create more risk, not less, if it appears to give CK-Labs an unlimited right to:

- change a paid product for any reason;
- terminate a consumer contract whenever it wants;
- permanently shut down a paid service with no remedy in every case;
- decide conclusively whether CK-Labs performed correctly;
- treat internal records as irrebuttable proof;
- impose punitive charges for refunds or chargebacks;
- transfer the consumer contract to any unknown third party without required safeguards;
- exclude liability that German law does not permit to be excluded; or
- force a consumer to complete support or ADR steps before using statutory remedies or going to court.

The objective is not to remove legitimate CK-Labs discretion. The objective is to define that discretion clearly, tie it to real operational reasons, preserve mandatory remedies, and avoid clauses that promise more legal power than CK-Labs actually has.

## 2. BGB § 305c: no surprising or hidden legal traps

Under **BGB § 305c(1)**, an unusually surprising standard term can fail to become part of the contract. Under **§ 305c(2)**, ambiguity in standard terms is interpreted against the party using them.

### TycoonX release rules

Do not hide a commercially important restriction inside an unrelated section, tooltip, FAQ or support article.

High-impact terms should be visible where a reasonable player would expect them, especially:

- Lifetime VIP means the commercial operating lifetime of TycoonX, not the biological lifetime of the player or CK-Labs;
- Lifetime VIP is sold only during selected genuine promotional sales windows and may never return;
- 30-Day VIP is a one-time, non-renewing 30-day entitlement;
- Diamonds are in-game virtual currency and are not cash-redeemable merely because TycoonX later changes or closes;
- valid paid value can be corrected after an actual refund, reversal, chargeback, duplication, fraud or technical error;
- material product changes remain subject to mandatory digital-product rights;
- serious/repeated Terms violations can lead to suspension or termination; and
- permanent service discontinuation does not erase mandatory remedies that apply in the circumstances.

Do not make a checkout headline say one thing while a buried legal clause quietly creates the opposite result.

## 3. BGB § 307: transparency and no unreasonable disadvantage

Under **BGB § 307**, a standard term can be ineffective if it unreasonably disadvantages the consumer contrary to good faith. Lack of clarity or comprehensibility can itself create that problem. A clause is especially risky where it conflicts with a core statutory principle or strips essential contractual rights so far that the contract purpose is endangered.

### TycoonX drafting standard

Every founder-protective clause should answer, where relevant:

1. **What event triggers the power?**
2. **Why can CK-Labs act?**
3. **What may CK-Labs actually do?**
4. **How narrowly is the action tied to the event?**
5. **What unrelated paid value is preserved?**
6. **What mandatory consumer rights remain?**
7. **Can the player challenge an incorrect factual decision?**

Avoid phrases such as `for any reason`, `at our sole discretion`, `final and binding in all cases`, `no refunds under any circumstances`, `we may remove any purchase at any time`, or `our records are conclusive and cannot be challenged` in German/EU consumer-facing terms.

A clause does not become fair merely because it ends with `to the extent permitted by law`. The substantive power must itself be drafted reasonably.

## 4. Unilateral feature and benefit changes: BGB § 308 no. 4 plus digital-product law

**BGB § 308 no. 4** subjects a contractual right to change or deviate from the promised performance to a reasonableness test taking the other party's interests into account.

For covered continuously supplied digital products, **BGB § 327r** and Directive (EU) 2019/770 Article 19 impose additional specific requirements. The existing `TYCOONX_EU_DIGITAL_PRODUCT_CHANGE_SHUTDOWN_GATE.md` remains the primary implementation gate for those rules.

### Allowed founder protection

TycoonX may preserve contractual flexibility for real reasons such as:

- security and anti-abuse measures;
- technical compatibility and supported-platform changes;
- mandatory law or platform requirements;
- accessibility improvements;
- infrastructure/provider migration;
- multiplayer economy health and balance;
- anti-inflation measures;
- correction of exploits or technically invalid game state; and
- reasonable evolution, replacement or improvement of Service features.

### Not allowed as a blanket shortcut

Do not draft or implement a power that effectively says CK-Labs may remove any paid feature at any time with no real reason and no remedy regardless of the impact.

A material reduction of an active 30-Day VIP feature, Lifetime VIP benefit or ongoing paid digital service must pass both the contractual fairness analysis and any applicable digital-product modification rules.

The interests of CK-Labs and the consumer must be considered together. A reason that is commercially real can still require notice, continued access to an unchanged version, termination, price reduction, refund or another mandatory remedy depending on the contract and jurisdiction.

## 5. Permanent shutdown and unavailability: do not overclaim the right to walk away

**BGB § 308 no. 3** restricts standard clauses allowing the business to escape its performance obligation without an objectively justified contractual reason, subject to its statutory scope. **BGB § 308 no. 8** also requires specific safeguards where a permissible non-availability reservation is used, including prompt information and repayment of counter-performance where the provision applies.

The EU Unfair Terms Directive Annex also identifies discretionary termination by the trader, termination of indefinite contracts without reasonable notice absent serious grounds, and unilateral alteration without a valid reason as examples that can be unfair.

### TycoonX shutdown rule

The current Terms correctly define Lifetime VIP by the commercial operating lifetime of the Service and expressly preserve mandatory remedies. Keep that structure.

A permanent shutdown clause must not be rewritten as:

- `TycoonX can close at any time for any reason and you get nothing`;
- `Lifetime VIP has no legal remedy if servers close`; or
- `all unused paid value is automatically forfeited on shutdown`.

A lawful closure plan can still recognize severe technical/security problems, law or regulatory requirements, platform removal, provider restrictions, unsustainable operations, force majeure or a genuine business decision to cease the Service. But the actual notice, repayment, price-reduction, termination, conformity or other remedy consequences must be assessed product by product under applicable law.

Ending future sales of Lifetime VIP is different from terminating an already valid Lifetime VIP entitlement.

## 6. Price changes: future prices are safer than retroactive repricing

**BGB § 309 no. 1** restricts certain short-term price-increase clauses, while continuing contractual relationships are treated differently. The EU Unfair Terms Directive also flags clauses that let a trader increase price without adequate consumer protection in covered circumstances.

TycoonX should continue to use the cleaner commercial model already in the canonical Terms and Purchases policy:

- CK-Labs may change Diamond bundle pricing/content, VIP prices, regional prices, currencies and promotions for **future purchases**;
- prices may differ by platform, country, currency, tax treatment and channel;
- Apple, Google Play, Xsolla, tax or FX changes may affect local future prices;
- the final total price shown before confirmation governs a completed transaction, subject to legally permissible correction of an obvious pricing/configuration error;
- a completed one-time purchase is not retroactively repriced merely because a later price changes;
- a later decrease does not automatically create a refund, credit or price-match right unless mandatory law requires it; and
- a later increase does not create an extra charge for an already completed one-time purchase.

Lifetime VIP may have different genuine prices in different selected sales windows. That does not authorize a hidden post-purchase surcharge.

Any future auto-renewing subscription needs its own compliant recurring-price-change, renewal, notice, consent and cancellation rules. Do not copy the current one-time VIP wording into a recurring product.

## 7. Refunds, chargebacks and exploit corrections: no punitive contractual penalty

**BGB § 309 nos. 5 and 6** restrict certain standardized damages amounts and contractual penalties.

### TycoonX rule

A refund, reversal or chargeback can justify reconciling the corresponding paid value. It does not justify inventing a punitive `fee`, `penalty Diamonds`, arbitrary negative balance or unrelated entitlement removal merely because the user used a payment-dispute mechanism.

Likewise, exploit remediation may reverse invalid exploit-generated value and directly related transactions, but it should not use a fictional contractual penalty unrelated to the actual correction.

If CK-Labs ever seeks standardized monetary damages or a standardized reimbursement amount from a German consumer, obtain a fresh AGB-law review before release. Do not silently convert an entitlement correction into a damages clause.

Genuine fraud and knowingly abusive chargebacks can still support reasonable investigation and account/payment restrictions. Genuine unauthorized-payment reporting must not be punished merely because it creates operational cost.

## 8. Liability: preserve the current non-waivable carve-outs

**BGB § 309 no. 7** prohibits standard-term exclusions/limitations for certain liability involving injury to life, body or health and for gross fault.

The current TycoonX Terms are intentionally structured to keep liability unlimited where limitation is prohibited by law, including for intent, gross negligence, injury to life/body/health, fraudulently concealed defects, expressly assumed guarantees and mandatory product-liability rules.

Do not replace that structure with a generic clause such as:

`CK-Labs is never liable for any loss under any circumstances.`

For simple negligence, limitations should remain tied to the legally permissible framework, including essential contractual obligations and foreseeable/typical damage where applicable.

Platform/provider outages, force majeure and cyberattacks can be relevant factual causes. They are not automatic waivers of every mandatory liability or digital-product remedy.

## 9. Successor operator and business transfer: BGB § 309 no. 10 checkpoint

**BGB § 309 no. 10** can invalidate certain standard clauses that allow a third party to replace the trader in specified consumer contracts unless the clause identifies the third party by name or gives the other party a right to end the contract, where the statutory rule applies.

The existing TycoonX business-transfer clause already says that notice, consent, termination and objection rights will be preserved where applicable law requires them. Keep that safeguard.

Before a real merger, asset sale, operator migration or transfer of player contracts:

- identify whether CK-Labs is transferring only infrastructure/assets or the actual consumer contract;
- identify the legal successor before presenting it as the new contracting party;
- determine whether consent, notice, objection or termination rights apply;
- preserve valid Diamonds/VIP transaction records and restoration evidence;
- do not use a business transfer to erase an existing mandatory claim; and
- update the Privacy Policy/controller information where legally required.

A successor can continue valid TycoonX entitlements. A sale of the business is not itself a refund, chargeback, cancellation or exploit event.

## 10. Authoritative records are strong evidence, not an irrebuttable legal presumption

**BGB § 309 no. 12** restricts standard clauses that shift the burden of proof to the consumer in prohibited ways.

TycoonX may and should use reliable server logs, signed store records, Xsolla transaction records, Apple/Google purchase records, verified backups and idempotent entitlement ledgers to reconstruct game/payment state.

But player-facing Terms should not say that CK-Labs internal records are legally conclusive in every dispute or that the consumer can never challenge them.

Keep the current model:

- reliable authoritative records can control operational reconciliation when client state conflicts;
- provider/store records can establish transaction state;
- obvious client manipulation or stale screenshots do not override better evidence;
- the player retains an appropriate support/dispute route; and
- statutory burden-of-proof rules remain untouched.

Example: a signed Google Play refund record can justify reversing the entitlement associated with that purchase token. It does not prove that every other purchase on the account was fraudulent.

## 11. Consumer declarations and support routes: BGB § 309 no. 13

**BGB § 309 no. 13** restricts standard clauses that require consumer notices/declarations to use a stricter form than permitted by the statute or impose special receipt requirements.

Do not make a consumer's valid legal notice ineffective merely because it did not use a preferred CK-Labs support template where the law accepts another form.

This is especially relevant to:

- withdrawal declarations;
- termination declarations;
- defect/conformity complaints;
- dispute notices; and
- requests to exercise mandatory consumer rights.

CK-Labs can provide structured support forms because they improve routing and evidence. The form must not silently become the only legally valid channel unless applicable law actually permits that restriction.

The separate German electronic withdrawal-function requirements remain governed by their dedicated TycoonX gate.

## 12. ADR must not become a mandatory gate to court: BGB § 309 no. 14

**BGB § 309 no. 14** restricts a standard term that forces the consumer to attempt an out-of-court settlement before bringing a claim in court.

TycoonX Support can encourage direct resolution. Where applicable, CK-Labs can provide the legally required German consumer-ADR information.

Do not write:

`You may sue CK-Labs only after completing our support appeal and ADR process.`

Voluntary support, platform refund channels and consumer ADR do not remove access to courts or other mandatory remedies.

The existing `TYCOONX_GERMAN_CONSUMER_ADR_ODR_RETIREMENT_RELEASE_GATE.md` remains the operational ADR reference.

## 13. Account suspension and termination must be tied to real grounds

The Terms currently allow enforcement for serious or repeated violations, fraud, cheating, security threats, unlawful activity, abuse, payment abuse and conduct materially harming users or the Service. They also preserve immediate emergency suspension where reasonably necessary, with later investigation.

Keep that structure instead of replacing it with a pure discretionary termination clause.

### Emergency action

CK-Labs may temporarily act first where necessary to protect users, payments, infrastructure or game integrity. Record the factual trigger and review the restriction afterward.

### Final culpability

Do not automatically treat:

- an account compromise;
- a single payment-provider anomaly;
- a mistaken fraud classifier;
- a duplicated webhook;
- a player report; or
- an appeal/ADR complaint

as conclusive proof of intentional abuse by the legitimate account owner.

Account compromise, payment state and misconduct findings should remain separately auditable.

## 14. Platform and payment-provider roles do not expand CK-Labs contractual powers

Apple App Store, Google Play and the CK-Labs TycoonX webshop using Xsolla can each control parts of checkout, transaction confirmation, refund routing, VAT/tax handling, fraud screening, chargebacks and regional availability.

Their rules can require CK-Labs to take an operational action. They do not automatically make an otherwise unfair CK-Labs consumer term enforceable.

Examples:

- Apple or Google reversing a transaction can justify reconciling the corresponding TycoonX entitlement;
- Xsolla acting as merchant of record can determine the transaction-specific payment/refund route;
- a store/platform policy change can justify replacing a payment integration or modifying future availability;
- none of those facts authorizes CK-Labs to erase unrelated legitimate purchases or waive a non-waivable statutory remedy.

Keep payment-provider responsibility and CK-Labs service/entitlement responsibility distinct.

## 15. Diamonds, 30-Day VIP and Lifetime VIP invariants

### Diamonds

- Purchased Diamonds do not expire solely because time passes.
- Refund/reversal/chargeback/duplicate/fraud corrections should remain transaction-specific.
- Purchased and unused Diamonds keep any applicable statutory withdrawal protection.
- A broad Terms clause must not transform Diamonds into a general penalty balance.

### 30-Day VIP

- It remains a **one-time, non-renewing 30-day entitlement**.
- A suspension, restore, provider callback or app reinstall must not silently restart the 30-day clock.
- A material service defect/change during the active period can trigger mandatory digital-product remedies where applicable.

### Lifetime VIP

- It remains a **limited-time promotional one-time entitlement** sold only during selected genuine sales windows.
- It may be withdrawn from future sale and may never return.
- It creates no expectation of continuous future availability for purchase.
- Ending a sales window does not by itself cancel an already valid purchase.
- Its commercial-lifetime definition must remain clear and must not be used as a blanket waiver of mandatory remedies if the Service is materially changed or permanently discontinued.

## 16. Obvious errors are not a universal cancellation key

TycoonX may protect itself against genuine obvious catalog, tax, currency, SKU, quantity or entitlement-configuration errors.

Keep the current narrow formulation:

- correct the configuration for future transactions;
- where legally permitted, cancel an unfulfilled erroneous transaction and refund what was actually paid;
- respect any already binding contract and mandatory law; and
- do not label a merely unprofitable promotion or unexpectedly popular Lifetime VIP sale an `obvious error` after the fact.

A genuine mistaken `€0.01` price caused by a decimal/configuration failure is legally different from a valid promotion that CK-Labs later regrets.

## 17. Promotions and regional pricing must remain genuine

A clause allowing future promotion or regional-price changes is not permission for misleading marketing.

TycoonX must continue to keep:

- countdowns genuine;
- closing dates genuine;
- crossed-out prices and discount claims supportable;
- regional eligibility rules clear enough for the offer;
- coupon restrictions disclosed before redemption where material; and
- total consumer prices/taxes displayed as required.

Regional-price abuse, coupon abuse or account farming can be investigated and the affected invalid benefit can be corrected where legally permitted. Do not use a general anti-abuse clause to confiscate unrelated legitimate value.

## 18. Mandatory-rights language is necessary but not sufficient

The Terms repeatedly preserve mandatory consumer rights. Keep those clauses.

However, release QA must also ask whether the operative clause itself is reasonably drafted. A court or authority does not have to rescue an intentionally overbroad term merely because a final sentence says `mandatory rights remain unaffected`.

For each high-risk clause, prefer a narrow power + real trigger + proportional consequence + preserved remedy.

## 19. Clause review matrix before canonical Terms changes

Before materially changing any of the following, run this gate and the specialized gate listed below:

| Proposed canonical change | Minimum additional review |
| --- | --- |
| Paid feature removal/rebalance | BGB §§ 307/308 + `TYCOONX_EU_DIGITAL_PRODUCT_CHANGE_SHUTDOWN_GATE.md` |
| Permanent service closure | BGB §§ 307/308 + digital-product shutdown gate + Lifetime VIP impact |
| New liability exclusion | BGB § 309 no. 7 + mandatory liability law |
| New payment/chargeback penalty | BGB § 309 nos. 5/6 + payment-provider/refund gates |
| Business/successor transfer | BGB § 309 no. 10 + business-transfer gate + Privacy |
| `our records are final` wording | BGB § 309 no. 12 + evidence/appeal design |
| Mandatory support form/legal notice | BGB § 309 no. 13 + withdrawal/termination law |
| Mandatory ADR before lawsuit | BGB § 309 no. 14 + German ADR gate |
| Auto-renewing VIP | BGB § 309 no. 9 + recurring-product release gate + withdrawal/cancellation rules |
| Future price-change clause | BGB § 309 no. 1 + consumer-price/transparency rules |

If canonical English legal meaning changes materially, reopen only the affected localized document type and synchronize all 25 target locales in the required order.

## 20. Release blockers

Do not ship a canonical Terms/Purchases change if any of the following is true:

- a paid-product change clause uses unlimited `sole discretion` language without meaningful limits;
- a shutdown clause purports to eliminate all mandatory remedies;
- a chargeback clause imposes a punitive fixed penalty not separately reviewed for legality;
- a liability clause purports to exclude injury-to-life/body/health liability or gross fault where German law prohibits it;
- a successor clause can transfer the consumer contract to an unknown third party without the safeguards required by applicable law;
- an evidence clause makes CK-Labs records legally irrebuttable or shifts a prohibited burden of proof;
- a consumer declaration is made invalid solely because the player did not use CK-Labs's preferred support template where law accepts another form;
- a clause forces ADR before access to court;
- 30-Day VIP is described as recurring;
- Lifetime VIP loses its selected-sales-window/promotional/no-expectation wording;
- completed one-time purchases can be retroactively repriced merely because future prices change;
- a platform/payment-provider rule is used as a blanket waiver of CK-Labs obligations; or
- player-facing prose displays `TyconX` or describes the live TycoonX service as beta.

## 21. Evidence to retain

For each canonical legal release affecting a high-risk clause, retain:

- previous and new clause text;
- reason for the change;
- affected product(s) and player group;
- German/EU legal provision reviewed;
- specialized TycoonX release gate reviewed;
- whether the meaning changed materially;
- whether localized documents had to be reopened;
- date localization synchronization completed, if required; and
- legal/support/product owner sign-off appropriate to the risk.

## 22. Practical examples

### Example A: economy rebalance

CK-Labs lowers an automation multiplier for economy stability while preserving the feature and no additional payment is charged. Document the balance reason and run the digital-product change analysis. Do not rely only on `we can change anything` language.

### Example B: genuine refunded Diamond purchase

Google Play confirms a full refund. Reverse the directly corresponding paid Diamond value under the payment/entitlement rules. Do not add an unrelated contractual `fraud penalty` merely because a refund occurred.

### Example C: compromised account

An attacker spends purchased Diamonds and triggers a payment dispute. Freeze the affected payment/economy functions if needed, investigate account compromise, and reconcile authoritative records. Do not treat the legitimate player's account-compromise report as automatic proof of chargeback abuse.

### Example D: Lifetime VIP sale ends

A genuine selected Lifetime VIP sales window closes. Future purchase availability ends. Existing valid Lifetime VIP purchases continue according to their terms. The closing of the sales window is not a service termination event.

### Example E: TycoonX permanently closes

Stop future sales at an appropriate point, prepare the closure runbook, identify active 30-Day VIP, valid Lifetime VIP, unused purchased Diamonds and other paid rights, give the notice required in the circumstances, and apply mandatory remedies. Do not assume that `Lifetime means until shutdown` alone settles every German/EU consumer claim.

## 23. Current-source checkpoint

This gate was checked on **September 3, 2026** against:

- German **BGB § 305c** (surprising and ambiguous standard terms);
- German **BGB § 307** (unreasonable disadvantage and transparency);
- German **BGB § 308**, especially nos. 3, 4 and 8 (withdrawal/performance reservations, modification reservations and unavailability safeguards);
- German **BGB § 309**, especially nos. 1, 5, 6, 7, 9, 10, 12, 13 and 14; and
- Council Directive **93/13/EEC**, especially Articles 3, 5 and 6 and the Annex examples concerning discretionary termination, unreasonable notice, unilateral alteration, price increases, exclusive interpretation, transfers reducing guarantees and restrictions on legal remedies.

Use current official sources again before a material canonical rewrite because statutory text, enforcement practice and case law can change.
