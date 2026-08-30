# TycoonX EU/German Digital Product Change, Outage & Shutdown Release Gate

**Release QA reference. Last reviewed: August 31, 2026.**

This gate turns the existing TycoonX Terms into operational release checks for feature changes, economy corrections, outages, provider migrations and permanent service discontinuation. It is designed around Directive (EU) 2019/770 and the German digital-product rules in BGB §§ 327 et seq. It does not replace transaction-specific legal analysis and must never be used to waive mandatory consumer rights.

The canonical English TycoonX Terms and Purchases & Refunds Policy remain the player-facing source. If this gate reveals that their legal meaning must materially change, reopen only the affected localized document type and resynchronize all 25 locales in the required order.

## 1. Product classification must be transaction-specific

Do not treat every TycoonX asset or purchase as legally identical.

- **Purchased Diamonds** are paid in-game virtual currency. Their purchased-Diamond withdrawal treatment remains separate from ongoing-service modification rules. Merely crediting Diamonds to an account does not automatically extinguish an applicable statutory withdrawal right.
- **30-Day VIP** is a one-time, non-renewing entitlement supplied over a defined 30-day period. It is not a recurring subscription.
- **Lifetime VIP** is a one-time entitlement offered only during genuine limited promotional sales windows. It is intended to last for the commercial operating lifetime of TycoonX for the purchasing account while the Service continues and the entitlement remains valid. The limited sales window and the lifetime of the Service are different concepts.
- Core TycoonX online functionality, account-linked functionality, and other paid or data-for-service digital functionality can fall within mandatory digital-product rules depending on the contract and jurisdiction.

The merchant, platform, payment method and technical product type do not by themselves decide which mandatory consumer rules apply. Record the actual transaction and product characteristics.

## 2. Separate maintenance from a contractual modification

Before shipping a change, classify it as one of the following:

1. **Conformity, security or required update:** a change needed to keep the digital product conforming, secure or technically functional.
2. **Change beyond what is necessary for conformity:** for example a material rebalance, removal or replacement of a paid benefit, major functionality change, provider migration that changes access, supported-platform change, or another alteration to an ongoing digital product.
3. **Temporary operational incident:** for example an outage, emergency security suspension, failed provider dependency or maintenance event.
4. **Permanent discontinuation:** permanent closure of all TycoonX or a paid part of the Service.

Do not label a permanent removal as "maintenance" merely to avoid change or termination rights. Do not label a security fix as a discretionary benefit reduction when it is genuinely needed to restore conformity or safety.

## 3. BGB § 327r and Directive (EU) 2019/770 Article 19 modification gate

Where TycoonX is supplied continuously and German BGB § 327r applies, a change beyond what is necessary to maintain conformity may be made only where all applicable requirements are satisfied, including:

- the contract provides for that possibility and contains a **valid reason** for it;
- the change creates **no additional cost** for the consumer; and
- the consumer is informed about the change **clearly and comprehensibly**.

Directive (EU) 2019/770 Article 19 follows the same core model for modifications of continuously supplied digital content or services.

The existing TycoonX Terms identify legitimate categories such as game balance, economy health, security, abuse prevention, technical compatibility, platform requirements, legal compliance, accessibility and evolution of the Service. Those categories must still correspond to the real reason for the actual change. A generic clause is not a substitute for having and documenting a genuine reason.

Examples requiring this assessment can include:

- materially reducing a VIP automation or convenience feature;
- replacing a paid feature with a function that is substantially less useful;
- removing support for a platform or authentication method in a way that materially affects access;
- changing a server or infrastructure provider where the migration alters access, functionality or compatibility;
- a large economy redesign that changes the practical utility of an ongoing paid entitlement; or
- a material change to how an ongoing entitlement can be used.

Routine tuning that has no more than insignificant effect on access or usability can have a different legal treatment, but the conclusion must be supportable rather than assumed.

## 4. More-than-insignificant impairment requires stronger notice

Under BGB § 327r(2), where a covered modification impairs access to or usability of the digital product by more than an insignificant amount, TycoonX must not rely on a silent server-side rollout.

Where CK-Labs is the responsible trader, the consumer must be informed within a reasonable time **before** the change on a **durable medium**. The notice must identify at least:

- the characteristics of the change;
- when the change takes effect; and
- the consumer's applicable rights under BGB § 327r, including the termination right and the unchanged-version exception where relevant.

A transient in-app toast, disappearing news card or editable web page is not automatically a durable medium. For a German consumer notice, prefer a channel that the consumer can retain unchanged, such as an account email or another legally suitable durable-medium message.

Release evidence must record the notice text, audience, send date, effective date, version and delivery method.

## 5. The 30-day termination right must be operational

Where BGB § 327r(3) applies because a modification impairs access or usability by more than an insignificant amount, the consumer can terminate the affected contract **without cost within 30 days**.

The 30-day period begins when the required information is received. If the change takes effect later, the later modification date controls the start instead.

Do not make that statutory route conditional on:

- deleting the entire TycoonX account;
- filing a chargeback;
- waiving unrelated claims;
- surrendering unrelated legitimate purchases;
- accepting a new recurring product; or
- losing unrelated account content merely because one affected entitlement is terminated.

Under BGB § 327r(4), this special termination right is excluded if the impairment is only insignificant or if the consumer can continue using the unchanged, conforming version without additional cost. If CK-Labs relies on the unchanged-version route, verify that the version actually remains accessible and conforming, not merely technically present.

## 6. Defect and conformity remedies remain separate

A modification problem can also become a conformity problem. Do not treat § 327r as the only consumer remedy.

Where German digital-product law applies, the operational flow must preserve the applicable sequence and remedies under BGB §§ 327i to 327o, including where relevant:

- cure or restoration of conformity under **BGB § 327l**;
- contract termination in the cases allowed by **BGB § 327m**;
- price reduction under **BGB § 327n**; and
- repayment consequences under **BGB § 327o**.

Under BGB § 327n(4), an overpayment resulting from a valid price reduction must be refunded without undue delay and in any event within **14 days** after the reduction declaration is received. The same payment method must generally be used unless the consumer expressly agrees otherwise and incurs no costs. BGB § 327o applies the corresponding repayment mechanism to covered contract termination.

A TycoonX support or payment runbook must therefore distinguish:

- a voluntary goodwill credit;
- a store/provider refund;
- a statutory withdrawal;
- a statutory price reduction;
- a statutory digital-product termination; and
- a chargeback or fraud reversal.

These events can have different entitlement and payment consequences and must not be collapsed into one generic "refund" status.

## 7. Economy resets and rollbacks need a paid-value impact review

A technical or economic correction can be legitimate, but a broad reset must not be treated as an unlimited confiscation right.

Before a reset, rollback or migration that can affect legitimate paid value, produce a written impact review covering at least:

- purchased and unused Diamonds;
- active 30-Day VIP periods;
- valid Lifetime VIP entitlements;
- paid items or benefits obtained directly from a covered purchase;
- values generated only through exploits, duplication or invalid transactions; and
- unrelated legitimate purchases that must remain untouched.

Invalid exploit-generated state can be corrected using reliable authoritative records. Legitimate paid value must receive the treatment required by the applicable contract and mandatory law.

Example: if an exploit created 10,000 invalid Diamonds but the same account also has 500 verified purchased and unused Diamonds, the correction path should isolate the invalid 10,000 rather than treating the account's entire balance as disposable.

## 8. Temporary outages are not automatically permanent termination

A brief outage, scheduled maintenance window or emergency security suspension does not automatically equal permanent discontinuation. But duration, recurrence, severity and the promised product characteristics matter.

For a significant incident, record:

- start and end time;
- affected countries, platforms and functions;
- whether purchases or entitlement delivery were disabled;
- whether paid 30-Day VIP time continued running while the service was unavailable;
- whether a Lifetime VIP benefit or purchased-Diamond use was materially unavailable;
- root cause category, including third-party provider failure where relevant; and
- any mandatory cure, extension, price reduction, termination or refund analysis.

Do not promise automatic compensation for every outage unless an offer or mandatory law requires it. Equally, do not use a blanket "no compensation for downtime" rule to override a mandatory remedy for a non-conforming digital product.

## 9. Security emergencies can justify immediate protective action, not unlimited waiver

TycoonX may temporarily disable purchases, transfers, markets, logins or other features when reasonably necessary for security, fraud prevention or infrastructure protection.

If advance notice is genuinely impossible because immediate action is necessary, document the reason, affected scope, start time and review point. Inform affected users as soon as reasonably appropriate and preserve any mandatory conformity or remedy rights.

Force majeure, cyberattack, platform action or provider outage can explain why performance changed, but those labels do not automatically erase every non-waivable consumer remedy.

## 10. Permanent shutdown needs a product-by-product closure runbook

A lawful permanent TycoonX shutdown must not be implemented only by turning off servers.

Before permanent discontinuation, prepare a dated closure plan that identifies:

- the legal and operational reason for closure;
- the proposed last service date;
- the notice period and notice channel required for affected consumers;
- the final date for new purchases and why purchasing remains enabled until that date, if it does;
- treatment of **purchased and unused Diamonds**;
- treatment of **active 30-Day VIP**, including remaining paid time;
- treatment of **valid Lifetime VIP**;
- treatment of pending, failed, reversed or already refunded transactions;
- Apple, Google Play and Xsolla refund/withdrawal responsibilities for the affected transactions;
- account/data deletion and any required export path;
- retention of legally necessary transaction, tax, security and dispute records; and
- the support route available after the game itself becomes unavailable.

Lifetime VIP ends with the commercial operating lifetime of TycoonX under the existing Terms, but that definition does **not** by itself eliminate a mandatory remedy arising from the timing, circumstances or legal effect of the shutdown.

Purchased virtual items do not automatically become cash-redeemable merely because TycoonX closes. The opposite extreme is also prohibited: do not state that shutdown can never produce a refund, price reduction, termination or other mandatory remedy.

For 30-Day VIP, identify the exact paid service period remaining at shutdown. For Lifetime VIP, preserve the purchase date, transaction, sales-window representation and duration actually supplied. For purchased Diamonds, preserve the purchased-versus-promotional ledger distinction needed to evaluate any mandatory claim.

## 11. Provider discontinuation and business transfers do not erase CK-Labs duties

If Apple, Google, Xsolla, an authentication provider, hosting provider or another infrastructure provider changes rules, becomes unavailable or is replaced, record the migration impact on valid entitlements.

A provider-controlled payment or refund process remains provider-controlled where applicable. CK-Labs remains responsible for its own entitlement-delivery and other non-transferable obligations.

If TycoonX is sold, merged, reorganized or transferred to a successor operator and the Service continues, a business transfer must not silently erase valid paid entitlements. Provide notice, obtain consent, preserve objection rights or provide remedies where the applicable law requires them.

## 12. Contract termination and user-created non-personal content

Where BGB § 327p applies after a valid digital-product contract termination:

- the consumer must stop using the terminated digital product;
- CK-Labs must not continue using qualifying non-personal content that the consumer provided or created except where a statutory exception applies; and
- on request, qualifying content that must be returned must be provided free of charge, without hindrance, within a reasonable time and in a common machine-readable format.

This is separate from GDPR rights over personal data. Account-deletion logic, privacy deletion, content export and digital-product contract termination must not be treated as one undifferentiated operation.

## 13. Release evidence scenarios

Before declaring production parity, test and retain evidence for these scenarios:

| Scenario | Minimum evidence |
| --- | --- |
| Material removal of a Lifetime VIP or 30-Day VIP feature | Valid reason, product scope, impairment assessment, notice, durable-medium evidence if required, effective date, termination/remedy route |
| Economy reset touching verified purchased Diamonds | Purchased/promotional split, authoritative transaction evidence, exploit-value isolation, remediation decision |
| Significant multi-hour or multi-day outage | Incident duration, paid-product impact, whether paid time continued, remedy assessment, provider responsibility |
| Authentication or infrastructure provider migration | Access impact, continuity plan, old/new provider state, entitlement preservation, consumer notice if required |
| Unsupported app/version migration | Security/conformity reason, required update notice, supported-version path, no loss of valid entitlement merely from stale local display |
| Permanent TycoonX shutdown | Closure date, purchase cutoff, consumer notice, Diamonds/30-Day VIP/Lifetime VIP treatment, Apple/Google/Xsolla roles, post-shutdown support route |
| Change followed by consumer termination under § 327r | Notice receipt, modification date, 30-day calculation, transaction-specific termination, repayment route, unrelated purchases preserved |

## 14. Authoritative records and entitlement corrections

For every scenario above, use reliable server, store and payment-provider records rather than a stale client display. Preserve enough evidence to explain a decision to the consumer and to correct an erroneous decision.

A provider receipt or server record can establish purchase state, but it does not authorize CK-Labs to ignore a mandatory statutory remedy. Likewise, a local screenshot does not create paid value that was never validly purchased.

## 15. Brand and release-status invariants

- Player-facing and legal prose must display **TycoonX** exactly.
- Technical paths containing `tyconx` may remain only where changing them could break URLs or integrations.
- TycoonX goes to full release on **September 1, 2026**.
- Do not describe the live game, current purchases, current VIP, Diamonds, rewards, users or legal terms as beta.
- Genuine test, staging, review, promotional or complimentary grants may be described as such only where useful and must not imply that the live Service is a beta.

## 16. Localization reopening rule

This gate does not itself change canonical player-facing legal meaning. The existing English Terms already preserve valid reasons, no-extra-cost modification rules, durable-medium notice, termination/remedy rights, economy-reset safeguards, update duties, outage limits, provider-change rules and permanent-shutdown mandatory remedies.

If a future implementation decision requires materially changing that public meaning:

1. update the canonical English document first;
2. mark the affected localized document type as reopened in `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md`;
3. resynchronize locales in the exact required order; and
4. do not mark a locale current until native-language QA is complete.

## 17. Official legal references checked August 31, 2026

- German BGB digital-product framework, §§ 327 et seq.: https://www.gesetze-im-internet.de/bgb/
- BGB § 327n, price reduction and 14-day repayment mechanics: https://www.gesetze-im-internet.de/bgb/__327n.html
- BGB § 327o, declaration and consequences of contract termination: https://www.gesetze-im-internet.de/bgb/__327o.html
- BGB § 327p, further use and return of qualifying non-personal user content after termination: https://www.gesetze-im-internet.de/bgb/__327p.html
- BGB § 327r, modifications to digital products: https://www.gesetze-im-internet.de/bgb/__327r.html
- Directive (EU) 2019/770 on contracts for digital content and digital services, including Article 19: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0770

## Release decision

Do not mark the digital-product change/shutdown path complete until production operations can prove the required product classification, change reason, notice, entitlement isolation and remedy handling for the scenarios above. A strong Terms clause is not a substitute for an executable closure and modification process.