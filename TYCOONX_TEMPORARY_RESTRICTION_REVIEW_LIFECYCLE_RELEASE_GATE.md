# TycoonX Temporary Restriction Review Lifecycle Release Gate

**Last reviewed: September 5, 2026**

Owner: CK-Labs  
Scope: temporary TycoonX security freezes, payment-risk holds, marketplace/transfer restrictions, moderation restrictions, exploit containment, login restrictions, and other non-final account limitations.

## Purpose

This gate closes a narrow operational gap that remains after the broader account-suspension, compromise, termination, DSA-redress, payment, exploit, and entitlement gates: a restriction labelled `temporary` must not silently become an indefinite unresolved state merely because nobody revisits the case.

This gate does **not** create new player-facing violation grounds. The canonical TycoonX Terms of Service and Community Standards remain the public source for what conduct is prohibited and when CK-Labs may restrict, suspend, correct, or terminate an account. The existing `TYCOONX_ACCOUNT_SUSPENSION_COMPROMISE_TERMINATION_RELEASE_GATE.md` remains controlling for action classification, compromise recovery, German termination analysis, paid-entitlement isolation, and final termination.

Founder-protective objective: CK-Labs must be able to freeze a dangerous situation immediately, keep the freeze in place for as long as it is objectively necessary, and extend it when new evidence or unresolved risk justifies that extension. What CK-Labs should not have is a stale `temporary=true` state with no owner, no review point, no current reason, and no path to release, narrow, extend, or convert the case lawfully.

## 1. Every temporary restriction needs a reviewable lifecycle

A material temporary restriction should have a case record containing at least:

- case ID;
- affected TycoonX account or feature;
- action classification, such as security containment, moderation restriction, payment-risk restriction, exploit/economy containment, or contractual suspension;
- restriction scope;
- start time;
- current factual/Terms/security basis;
- evidence or trigger references;
- responsible reviewer or team/role;
- review status;
- `next_review_at`, review event, or another explicit review trigger;
- current expected release condition where one can reasonably be identified;
- whether the restriction affects purchased Diamonds, active 30-Day VIP, Lifetime VIP, purchases, transfers, login, chat, markets, or another feature;
- notice/reason information sent where applicable; and
- appeal/complaint status where applicable.

Do not require a false calendar end date where the risk genuinely depends on an external event, such as provider settlement of a disputed payment, completion of account recovery, restoration from an outage, or closure of an active exploit. In those cases, use a real review trigger plus a periodic review point rather than inventing a date that staff already expect to ignore.

## 2. Temporary does not mean fixed-duration, but it does mean actively reviewable

There is no single universal German/EU rule requiring every TycoonX temporary restriction to end after a fixed number of hours or days. This gate therefore does not invent one.

Instead:

- keep the restriction only while its current factual and legal basis remains reasonably supportable;
- review it as soon as reasonably practicable when material new evidence arrives;
- give high-impact restrictions a closer review cadence than low-impact restrictions;
- shorten or narrow the restriction when the risk can be controlled less intrusively;
- release the restriction when the basis no longer exists;
- convert it to a properly reasoned final enforcement state only when the evidence and applicable procedural/legal safeguards support that different decision; and
- document any material extension rather than allowing a temporary flag to renew itself silently.

A long-running investigation can justify a long-running restriction where the continuing risk remains real. The problem is not duration alone. The problem is an unresolved restriction with no current review, no current basis, or no accountable owner.

## 3. Extension requires a fresh reason, not a stale flag

When a material temporary restriction is extended, the case record should show:

- what risk remains unresolved;
- what evidence or event justifies continuation;
- whether the scope is still necessary;
- whether a narrower control would now be sufficient;
- what information is still being awaited;
- when or on what event the case will be reviewed again; and
- whether the player-facing notice or reason statement must be updated under applicable law or the applicable TycoonX procedure.

Do not use `investigation ongoing` as a permanent placeholder when no investigative step remains open.

## 4. Security containment must not turn into an unproved misconduct finding

A security freeze may be imposed before CK-Labs knows whether the legitimate account owner, an attacker, a bot, or another person caused the suspicious activity.

During review:

- preserve the compromise hypothesis where credible;
- separate device/session/account-recovery evidence from conduct evidence;
- do not use the mere fact that a freeze has lasted a long time as proof that the owner committed fraud or cheating;
- restore access promptly once account control is sufficiently secured and no separate restriction remains justified; and
- if separate misconduct evidence later supports enforcement, record a distinct decision rather than relabelling the original security event without explanation.

## 5. Payment-risk holds must follow transaction state, not become account punishment by inertia

A temporary purchase, transfer, or economy hold can be appropriate while Apple, Google Play, Xsolla, a bank/payment network, or CK-Labs verifies a disputed or suspicious transaction.

The hold must remain tied to the actual risk:

- pending payment is not completed payment;
- a provider fraud-screening delay is not itself proof of user fraud;
- a refund, reversal, or chargeback is transaction-specific evidence and does not automatically invalidate unrelated purchases;
- a resolved provider state should trigger reconciliation of the hold;
- a payment investigation must not remain open merely because an old risk flag was never cleared; and
- a provider-controlled refund/dispute procedure must not be replaced with a fake CK-Labs debt collection mechanism.

If the payment issue is resolved but separate evidence supports fraud, RMT, transfer abuse, exploit activity, or another Terms violation, open or continue that separate enforcement theory explicitly.

## 6. Exploit containment and state correction are separate from suspension duration

An active exploit can justify immediate restrictions on markets, transfers, company treasury, purchases, or other affected systems even before individual player intent is known.

When the exploit is patched or the invalid state is reconciled:

- reassess whether each account-level restriction is still necessary;
- do not keep a player frozen merely because they once received invalid value that has already been corrected;
- intentional exploit abuse can still support separate conduct enforcement where evidence exists; and
- innocent or uncertain recipients can have invalid state corrected without automatically inheriting a permanent misconduct finding.

## 7. Paid-entitlement clocks and access consequences need explicit review

### Purchased Diamonds

A temporary restriction does not by itself invalidate purchased Diamonds. If only transfer or market functions are restricted, unrelated purchased Diamond ownership remains separate. Transaction-specific refunded, reversed, duplicated, fraudulent, or exploit-generated value can still be corrected under the applicable purchase/economy rules.

### One-time 30-Day VIP

30-Day VIP remains a one-time, non-renewing 30-day entitlement. A temporary restriction does not automatically pause or restart the clock.

If a later review concludes that CK-Labs imposed an erroneous or excessively broad restriction that materially deprived the player of paid VIP use, assess the legally appropriate remedy, which can include restoration of conformity, extension, price reduction, termination, refund, or another remedy where applicable. Do not silently ignore lost paid time and do not automatically duplicate the original purchase.

A valid restriction caused by the player's own serious misconduct does not automatically promise a clock pause or extension unless the contract, platform rule, or mandatory law requires it.

### Lifetime VIP

A temporary review state does not itself revoke Lifetime VIP. Lifetime VIP remains the one-time promotional entitlement offered only during selected genuine sales windows. It may be withdrawn from future sale and may never return, but an investigation flag does not create a second entitlement, a refund, or an independent basis to cancel a valid existing entitlement.

## 8. DSA Article 17 and Article 20 are conditional, but the lifecycle must preserve them where they apply

Where the DSA applies to a covered hosting-service restriction based on user-provided information being illegal or incompatible with TycoonX Terms, Article 17 can require a clear and specific statement of reasons at the relevant time.

Where TycoonX qualifies as an online platform for the relevant feature and the Article 19 micro/small-enterprise exclusion does not apply, Article 20 can require an effective internal complaint-handling system for eligible decisions. That system must be electronic and free of charge and remain available for at least six months from the day the recipient is informed of the relevant decision.

Operational rules:

- preserve the user-notification timestamp that starts any applicable six-month Article 20 period;
- do not start that period from an internal timestamp the user never received;
- a later extension or changed scope may require an updated reason/decision record where the legal conditions are met;
- do not claim Article 20 applies to every TycoonX restriction globally;
- preserve the existing Article 19 enterprise-size analysis and feature classification; and
- do not let a temporary-state cleanup job erase an appeal that must remain available.

## 9. German BGB § 314 final termination must not be replaced by endless temporary suspension

Where German law applies and the account relationship is a continuing obligation, BGB § 314 can require an individual good-cause analysis for extraordinary termination. Where the ground is a contractual breach, a warning or cure opportunity is generally required unless a statutory exception justifies immediate termination.

A temporary restriction may be appropriate while facts are investigated or while an urgent risk remains. It should not be used indefinitely as a substitute for making the actual legal decision when CK-Labs already has the decisive facts.

When the evidence is mature enough, choose the correct state:

- release;
- narrow restriction;
- proportionate temporary contractual suspension with a current reason;
- final termination supported by the applicable good-cause/warning analysis; or
- another lawful outcome.

Do not keep a player in permanent practical exclusion merely to avoid the safeguards that would apply to a final termination.

## 10. Automation can remind and contain, but stale automation cannot decide the case forever

Automated systems may:

- create a case;
- place an emergency hold where the configured risk threshold is met;
- calculate the next review date;
- remind staff that review is due;
- reconcile authoritative provider status;
- clear a hold automatically when a safe, deterministic release condition is met; or
- flag evidence for human review.

Release safeguards:

- a scheduled job must not extend a high-impact restriction forever merely because no one opened the case;
- an expired or stale risk score must not be treated as current evidence;
- a human review must be available where applicable law or the seriousness of the final decision requires it;
- GDPR Article 22 safeguards remain separate where a solely automated decision produces legal or similarly significant effects and falls within that provision; and
- the production system must retain enough audit information to explain why the restriction was active on a given date.

## 11. Privacy and retention follow purpose limitation, minimisation, accuracy, and storage limitation

Temporary restriction records can contain personal data, security signals, payment references, device/session information, communications, or fraud-risk data.

Under GDPR Article 5 where applicable, process that information lawfully and for specified purposes, keep it adequate/relevant/limited to what is necessary, keep material case information accurate where needed, and do not retain identifiable personal data longer than necessary merely because an enforcement case once existed.

Operational safeguards:

- retain the decision/audit record needed for security, repeat-abuse detection, appeals, legal claims, provider reconciliation, or legal obligations;
- do not keep every raw security event indefinitely when a smaller case record is sufficient;
- update or annotate materially inaccurate enforcement data discovered during review;
- access-control sensitive case evidence; and
- distinguish an archived historical decision from an active restriction flag.

## 12. Outages and mass-security events need bulk review triggers

A provider outage, compromised authentication service, widespread payment incident, exploit, or infrastructure emergency may justify broad temporary restrictions affecting many players.

Bulk containment must still be reviewable:

- create an incident-level owner and status;
- link account restrictions to the incident where practicable;
- define the release/review trigger;
- do not require individual manual unbanning if the incident can be safely reconciled in bulk;
- preserve any account-specific reason that survives after the incident-wide restriction ends; and
- once the emergency is resolved, clear broad restrictions that no longer have an independent basis.

A mass incident must not leave thousands of stale account flags after normal service has returned.

## 13. Stop-ship conditions

Do not rely on the production temporary-restriction system for high-impact account enforcement if any of the following is true:

- a material temporary restriction can exist without an owner or review trigger;
- a restriction can silently auto-renew forever;
- staff cannot tell whether the current basis is security, payment, moderation, exploit containment, or contractual enforcement;
- a resolved payment/provider state does not trigger reconciliation;
- security containment is treated as proof that the legitimate owner committed misconduct;
- an expired risk score alone can keep an account restricted;
- 30-Day VIP lost-time consequences cannot be identified for later remedy review;
- a temporary restriction automatically revokes Lifetime VIP;
- appeal records can disappear when a restriction is renewed or reclassified;
- incident-wide restrictions require unsafe manual database edits to clear after the incident ends;
- an archived historical case remains indistinguishable from an active restriction; or
- a practical permanent exclusion can be maintained indefinitely without the review that would accompany a final termination.

## 14. Regression scenarios

Before treating the lifecycle system as release-ready, verify at least:

1. **Compromised login:** login is frozen immediately; a recovery review is created; successful recovery releases the freeze without a fraud finding.
2. **Provider payment pending:** purchase/economy hold remains until authoritative resolution; successful settlement clears the hold without manual database surgery.
3. **Chargeback review:** affected transaction is isolated; unrelated Lifetime VIP remains untouched.
4. **Active exploit:** transfers are frozen during the incident; exploit patch and reconciliation trigger a bulk review/release.
5. **Stale risk score:** an old score cannot renew the restriction by itself.
6. **No staff activity:** a due review creates escalation rather than silently extending the restriction forever.
7. **Scope reduction:** login can be restored while marketplace transfer restrictions remain where that narrower control is sufficient.
8. **Mistaken 30-Day VIP suspension:** the original entitlement is not duplicated and lost paid access is routed to remedy review.
9. **Lifetime VIP investigation:** a temporary case does not revoke or duplicate the entitlement.
10. **DSA-covered suspension:** applicable Article 17 reasons and Article 20 complaint availability survive an extension/reclassification.
11. **German final termination:** the system cannot leave the player permanently excluded merely to avoid the BGB § 314 good-cause/warning decision.
12. **Incident-wide auth outage:** broad login restrictions clear in bulk after the incident without deleting independent account-specific enforcement.
13. **Evidence changes:** a disproven compromise/fraud signal is corrected or annotated in the active case record.
14. **Appeal succeeds:** the active restriction clears while the historical audit record remains appropriately retained.
15. **Unsupported old client:** a version-specific safety block does not become a permanent whole-account ban after the player upgrades to a supported version.
16. **Player moves countries:** a temporary regional-payment review can be cleared after legitimate migration is verified and does not retroactively reprice completed purchases.

## 15. Current external reference points

Current sources checked on September 5, 2026:

- German BGB § 314, extraordinary termination of continuing obligations for good cause: https://www.gesetze-im-internet.de/bgb/__314.html
- EU Digital Services Act, especially Articles 17, 19, and 20: https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng
- GDPR Article 5 processing principles: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng
- Apple App Review Guidelines 1.2, which currently requires UGC apps to support reporting, timely responses to concerns, blocking abusive users, and ongoing enforcement of terms/community standards: https://developer.apple.com/app-store/review/guidelines/
- Google Play User-generated Content policy, which currently requires robust, effective, ongoing moderation, in-app reporting/blocking where applicable, and action against UGC or users where appropriate: https://support.google.com/googleplay/android-developer/answer/9876937

## 16. Founder-protective rule of thumb

The strongest defensible temporary-restriction model is:

> Freeze first when a real emergency requires it. Keep the restriction while the current risk remains objectively supportable. Give every material temporary state an owner and a real review trigger. Narrow or release it when the risk falls. Convert it to final enforcement only when the evidence and applicable safeguards support that separate decision. Never let an old flag become a permanent substitute for review.
