# TycoonX Apple Send Consumption Information V2 Release Gate

Last reviewed: September 8, 2026

This is an internal release, privacy, refund-evidence, and operations gate for TycoonX. It is intentionally narrow. It governs CK-Labs participation in Apple's refund-decision process through **Send Consumption Information V2** after a verified `CONSUMPTION_REQUEST` notification. It does not replace `TYCOONX_APPLE_REFUND_ENTITLEMENT_RELEASE_GATE.md`, `TYCOONX_APPLE_SIGNED_DATA_JWS_VERIFICATION_RELEASE_GATE.md`, the TycoonX Privacy Policy, Purchases & Refunds Policy, mandatory EU/German consumer law, or Apple rules.

The existing Apple refund gate remains authoritative for the later `REFUND`, `REFUND_DECLINED`, revocation, Diamond correction, 30-Day VIP correction, and Lifetime VIP reconciliation. This gate prevents refund-decision evidence from being confused with the final refund outcome.

## P0 release rule

TycoonX must not use Apple's consumption-information endpoint unless all of the following are true for the specific refund request:

1. the `CONSUMPTION_REQUEST` and relevant transaction identity have passed the existing Apple JWS, app, bundle, and environment verification controls;
2. CK-Labs has valid, current consent to share the requested consumption information with Apple for refund review;
3. the V2 payload is derived from transaction-specific TycoonX records and is factually supportable;
4. production and sandbox remain isolated;
5. sending the evidence cannot itself mutate Diamonds, VIP, suspension state, fraud state, or chargeback state; and
6. the TycoonX Privacy Policy and App Store privacy disclosures remain accurate for the data flow actually deployed.

If any condition fails, fail closed: do not fabricate consent, do not guess consumption, do not default to a refund denial, and do not punish the player for an operational or provider failure.

## 1. Use the current V2 endpoint, not a new V1 integration

For ordinary App Store In-App Purchases, the current production endpoint is:

`PUT https://api.storekit.apple.com/inApps/v2/transactions/consumption/{transactionId}`

Sandbox uses the corresponding `api.storekit-sandbox.apple.com` V2 endpoint.

Apple has deprecated Send Consumption Information V1. Do not start a new TycoonX implementation on V1 merely because older examples contain more fields. The current V2 request has five fields in total:

- required: `customerConsented`;
- required: `deliveryStatus`;
- required: `sampleContentProvided`;
- optional: `consumptionPercentage`; and
- optional: `refundPreference`.

Do not keep transmitting deprecated V1-style fields such as account tenure, lifetime purchase/refund totals, play-time bands, platform, or user-status classifications under a misleading "V2" wrapper. The smaller V2 payload is also the preferred data-minimization boundary.

Apple supports the V2 endpoint for consumables, non-consumables, non-renewing subscriptions, and auto-renewable subscriptions. Product support does not change TycoonX's existing product definitions.

## 2. Twelve-hour response window does not override consent or truthfulness

Apple asks developers to respond within **12 hours** of receiving `CONSUMPTION_REQUEST` so the evidence can inform the refund decision.

The deadline is not permission to:

- infer consent because time is running out;
- send stale or guessed consumption data;
- mark a failed delivery as successful;
- default to `DECLINE` because the review worker is uncertain;
- turn an Apple outage or CK-Labs outage into player misconduct; or
- send the same transaction through production and sandbox to increase the chance that one request succeeds.

If CK-Labs cannot produce a lawful, accurate payload in time, the safe outcome is to omit the response and preserve the transaction for later authoritative refund reconciliation. Missing the evidence window does not create a right to claw back value before Apple actually grants a refund.

## 3. Consent must be separate, affirmative, current, and provable

Apple requires valid customer consent before CK-Labs shares consumption information for this purpose. If the customer has not consented, **do not respond** to the `CONSUMPTION_REQUEST`. Calling the endpoint with `customerConsented=false` is rejected.

For TycoonX, consent for this optional refund-evidence sharing must not be silently bundled into:

- acceptance of the Terms of Service;
- acceptance or mere availability of the Privacy Policy;
- account creation or login;
- the fact that the customer made an App Store purchase;
- the act of requesting a refund;
- a pre-ticked box, inactivity, or implied acceptance;
- App Tracking Transparency permission; or
- a generic "fraud prevention" switch that does not clearly cover this Apple refund-review sharing.

When this feature is enabled, keep evidence of the consent scope, wording/version, time, and withdrawal state sufficient to demonstrate the permission relied upon. The player must be told in clear language that CK-Labs may send Apple transaction-related consumption information to assist Apple's review of an App Store refund request, and that consent can be withdrawn for future sharing.

If consent is withdrawn, expires, or becomes invalid because the purpose or data sharing materially changes, do not send further consumption information based on that old consent. Withdrawal does not retroactively make earlier lawful sharing unlawful, and it does not itself grant or deny a refund.

Where GDPR consent is the applicable legal basis for this optional sharing, apply the GDPR standard of freely given, specific, informed and unambiguous consent, and make withdrawal as easy as giving consent. Do not make continued access to ordinary TycoonX gameplay conditional on consent to this optional Apple refund-evidence sharing unless a separate lawful necessity can actually be established.

## 4. `202 Accepted` is not a refund decision

A successful Send Consumption Information call returns **HTTP 202 Accepted**. Treat that response only as confirmation that Apple received the consumption information.

It does **not** mean:

- the refund was denied;
- the refund was granted;
- Apple accepted CK-Labs' preferred outcome;
- a chargeback was resolved;
- the purchase is permanently valid;
- Diamonds may be deducted;
- 30-Day VIP may be stopped or extended; or
- Lifetime VIP may be revoked.

Wait for authoritative Apple refund/revocation state under the existing Apple refund gate. Apple's later `REFUND`/`REFUND_DECLINED`, current signed transaction state, refund history, and App Store Connect financial records remain distinct evidence from the earlier consumption submission.

## 5. `deliveryStatus` must describe what actually happened

Use `DELIVERED` only when the purchased content or service was successfully delivered and worked as intended for the transaction being reviewed.

Current V2 statuses include:

- `DELIVERED`;
- `UNDELIVERED_QUALITY_ISSUE`;
- `UNDELIVERED_WRONG_ITEM`;
- `UNDELIVERED_SERVER_OUTAGE`; and
- `UNDELIVERED_OTHER`.

If `deliveryStatus` is not `DELIVERED`, `consumptionPercentage` must be `0`. Apple rejects a non-zero consumption percentage for an undelivered request.

A TycoonX entitlement outage, database incident, provider outage, or fulfillment bug must therefore be represented honestly. Do not mark content `DELIVERED` merely because doing so would support a preferred denial. Conversely, do not mark a correctly delivered product as undelivered merely to obtain a goodwill refund without preserving the factual support for that classification.

## 6. `sampleContentProvided` is factual, not a refund-defense switch

Set `sampleContentProvided=true` only when the player actually received, before purchase, a free sample/trial of the purchased content or information about the content and how it works of the kind Apple describes.

Do not automatically mark every TycoonX purchase `true` simply because the base game is free, screenshots exist, or the player has seen a store button. The implementation must document what specific pre-purchase experience qualifies for each product type.

## 7. `refundPreference` is optional and must never become blanket denial automation

Current V2 values are:

- `DECLINE`;
- `GRANT_FULL`; and
- `GRANT_PRORATED`.

Apple treats the developer preference as only one factor in its refund decision. TycoonX must not configure every refund request as `DECLINE` by default.

Use a preference only where CK-Labs has a documented, transaction-specific basis that is consistent with the actual delivery/consumption evidence and mandatory consumer rights. If the evidence is incomplete or the product cannot be mapped fairly, omitting this optional field is preferable to manufacturing certainty.

A refund preference is not a fraud finding and must not be copied into account sanctions, chargeback-abuse flags, exploit enforcement, or account-compromise conclusions.

## 8. `consumptionPercentage` means consumed share, not Apple's final refund share

`consumptionPercentage` uses integer milliunits from **0 through 100000**. Examples:

- `0` = 0% consumed;
- `25000` = 25% consumed;
- `40000` = 40% consumed;
- `100000` = 100% consumed.

This field describes CK-Labs' evidence about how much of the relevant purchase was consumed. It is **not** Apple's final refund percentage. Apple expressly states that the final refund percentage may differ.

For consumables, non-consumables, and non-renewing subscriptions, a `GRANT_PRORATED` preference requires a `consumptionPercentage` greater than 0 and less than 100000. Do not provide `consumptionPercentage` for auto-renewable subscriptions; Apple calculates that automatically.

Never feed submitted `consumptionPercentage` into code that expects Apple's later `refundPercentage` or signed `revocationPercentage`. The existing Apple refund gate remains authoritative for final transaction-specific correction.

## 9. Diamonds: derive consumption from the exact Apple transaction

For a Diamond purchase, calculate any submitted consumption percentage from the verified grant associated with the exact Apple transaction, not from the player's total wallet balance and not from other Diamond purchases.

Example: a verified Apple transaction granted **1,000 Diamonds**. If TycoonX can reliably attribute **400 Diamonds** from that transaction as consumed under the documented ledger method, the consumption evidence is `40000` milliunits (40%). It does not mean Apple will refund 60%, 40%, or any specific amount; Apple makes the refund decision.

Additional rules:

- never report consumption above 100000;
- multi-quantity purchases use the full verified grant represented by that one Apple transaction as the denominator;
- do not treat purchased Diamonds as consumed merely because time passed;
- do not use unrelated promotional/free Diamonds to inflate the consumed share of a paid transaction;
- do not count the same spending event against two purchase transactions;
- if purchased value was legitimately transferred, use the existing transferred-value reconciliation doctrine rather than automatically blaming the current account; and
- if attribution cannot be made reliably, omit the optional percentage/preference instead of choosing the number most favorable to CK-Labs.

A `CONSUMPTION_REQUEST` alone never authorizes a Diamond deduction. A later final Apple refund/revocation is required for transaction-specific correction.

## 10. One-time 30-Day VIP remains exactly 30 consecutive days

V2 supports non-renewing subscriptions, but that technical support does not turn TycoonX's one-time 30-Day VIP into a recurring product.

If CK-Labs submits consumption evidence for a 30-Day VIP transaction:

- the public entitlement remains exactly one non-renewing **30-consecutive-day** access period;
- evidence must relate to the specific transaction and actual delivered service period;
- the evidence submission itself cannot start, restart, pause, extend, shorten, or stack the VIP clock;
- do not manufacture a fractional VIP entitlement from the evidence submission; and
- if fair consumption cannot be quantified consistently, omit the optional percentage/preference and wait for Apple's final decision.

Any final refund correction remains governed by authoritative Apple state, the existing TycoonX refund doctrine, and mandatory law.

## 11. Lifetime VIP remains a limited-time promotional entitlement

V2 also supports non-consumables, but Lifetime VIP remains a limited-time promotional offering available only during selected genuine sales windows. It may be withdrawn from sale, may never return, and creates no expectation of continuous availability for future buyers.

For refund-evidence purposes:

- do not equate "Lifetime VIP was delivered" with "100% consumed" automatically merely to support `DECLINE`;
- do not invent an elapsed-time formula unless CK-Labs can explain and apply it fairly to the actual non-consumable entitlement;
- a `CONSUMPTION_REQUEST` or `202 Accepted` response cannot revoke Lifetime VIP;
- a later verified refund/revocation may correct that exact entitlement under the existing refund gate; and
- no refund request, old transaction, consumption response, restore flow, or historical evidence may reopen a closed Lifetime VIP sales window.

A valid historical Lifetime VIP that has not been refunded/revoked remains restorable without making the product available for new purchase.

## 12. Refund evidence is not fraud, chargeback, compromise, or entitlement-abuse evidence by itself

The existence of a `CONSUMPTION_REQUEST` means Apple is asking for information to help review a refund request. It does not by itself prove:

- fraud;
- friendly fraud;
- chargeback abuse;
- account compromise;
- regional-price abuse;
- hacking or an exploit;
- entitlement abuse; or
- dishonest use of TycoonX.

Likewise, a declined refund does not automatically prove abuse, and a granted refund does not automatically prove that the original purchase was unauthorized. Separate evidence and the applicable TycoonX enforcement rules are required before broader account action.

## 13. Transaction identity, environment, retries, and outages

The transaction identifier used in the V2 path must come from a verified Apple `CONSUMPTION_REQUEST`/authoritative Apple record that has already passed the existing app identity and environment checks. Do not let an iOS client, support message, query string, or admin free-text field choose an arbitrary Apple transaction and cause consumption evidence to be submitted for it.

Keep production and sandbox credentials, endpoints, ledgers, and evidence isolated. A sandbox refund request cannot affect production Diamonds or VIP.

An Apple `400`, `401`, `404`, `429`, `500`, transport failure, expired server token, CK-Labs outage, or worker crash is an operational/reconciliation condition. It is not player abuse. Retry only while the evidence remains timely, truthful, consented, and safe to send. Do not mutate paid value simply because the evidence call failed.

## 14. Privacy disclosure, minimization, retention, and access/deletion handling

Before enabling this flow in production:

- confirm the TycoonX Privacy Policy accurately describes the categories shared with Apple and the refund-review purpose;
- keep App Store Connect privacy answers accurate and up to date for the deployed data flow;
- collect/share no more than the current V2 payload and the minimum transaction context needed to produce it;
- retain only the evidence reasonably necessary to prove what was sent, under which consent, for which transaction, and Apple's response/status;
- do not place App Store Connect private keys, bearer tokens, or unnecessary full payloads into general analytics, crash logs, or support transcripts; and
- distinguish CK-Labs-held records from consumption data Apple independently holds. Apple's current documentation directs customers seeking access to or deletion of consumption information Apple holds to Apple's own privacy-request channel.

The current canonical TycoonX Privacy Policy already states that consent-required processing is requested separately, that purchase/refund/entitlement data is processed, and that Apple may receive information needed for refunds and entitlement validation. If the deployed consumption-information implementation introduces data categories, purposes, or retention materially beyond that description, update the canonical Privacy Policy first and synchronize all 25 localized Privacy Policies before release.

## 15. EU/German mandatory rights remain outside this optional evidence shortcut

Participation in Apple's refund-decision process does not replace CK-Labs' own obligations under mandatory German/EU consumer and data-protection law.

In particular:

- do not use `DECLINE` systematically to resist a remedy that mandatory law requires;
- an Apple refund decision cannot contract away statutory conformity, cure, price-reduction, termination, repayment, withdrawal, liability, or other non-waivable rights where they apply;
- a player who refuses optional Apple consumption-data sharing must not lose ordinary contractual gameplay/service merely for refusing that consent; and
- where GDPR consent is relied upon, withdrawal applies prospectively and must not be treated as fraud or bad faith.

Payment-channel responsibilities and CK-Labs responsibilities remain distinct: Apple controls its App Store refund decision and payment rails, while CK-Labs remains responsible for truthful evidence it submits, correct TycoonX entitlement reconciliation, accurate privacy disclosures, and mandatory legal remedies that apply to CK-Labs.

## Release evidence matrix

Do not enable or rely on this integration in production until test evidence covers at least these cases:

1. verified `CONSUMPTION_REQUEST` + valid current consent -> V2 submission may proceed;
2. no consent -> no Send Consumption Information call;
3. withdrawn consent -> no future consumption-data submission;
4. Terms acceptance alone -> not treated as consent;
5. App Tracking Transparency permission alone -> not treated as consent;
6. V1-only new implementation -> release fails;
7. V2 uses exactly the three required and two optional current fields rather than the deprecated V1 profile/spend/play-time payload;
8. `202 Accepted` -> no entitlement mutation and no assumption about refund outcome;
9. server outage prevented delivery -> appropriate undelivered status and `consumptionPercentage=0`;
10. non-`DELIVERED` + non-zero percentage -> blocked before Apple rejects it;
11. 1,000-Diamond transaction with 400 reliably attributable consumed Diamonds -> `40000`, not `400`, not `60000`;
12. unrelated Diamond wallet balance -> never used as the denominator for the reviewed transaction;
13. multi-quantity Diamond transaction -> one transaction-wide denominator and no duplicate consumption accounting;
14. uncertain Diamond attribution -> optional percentage/preference omitted rather than guessed;
15. 30-Day VIP consumption evidence -> does not restart, pause, extend, or convert the 30-consecutive-day entitlement;
16. Lifetime VIP consumption request -> does not reopen a closed Lifetime VIP sales window;
17. blanket automatic `DECLINE` policy -> release fails;
18. `CONSUMPTION_REQUEST` alone -> no fraud/chargeback/compromise flag and no clawback;
19. later `REFUND` -> final correction uses Apple's final refund/revocation evidence, not the earlier submitted consumption percentage;
20. sandbox request -> cannot mutate production state;
21. arbitrary client/support-provided transaction ID -> cannot trigger provider evidence submission;
22. Apple/CK-Labs outage or rate limit -> reconciliation/retry, not player sanction;
23. privacy label or Privacy Policy no longer matches deployed sharing -> production use blocked until corrected;
24. consent withdrawal -> future sharing stops without retroactively changing prior valid Apple refund decisions; and
25. mandatory EU/German remedy -> remains available independently of CK-Labs' optional refund preference.

## Operational owner checklist

Before release, the payment/privacy owner should be able to answer yes to all of these:

- [ ] We use Send Consumption Information V2 for ordinary current TycoonX App Store IAP refund evidence.
- [ ] We do not call the endpoint without valid current customer consent.
- [ ] Consent is separate from Terms, Privacy Policy acceptance, ATT, login, and checkout.
- [ ] We can prove consent scope/version/time and process withdrawal for future sharing.
- [ ] Every payload is transaction-specific and derived from the durable TycoonX ledger.
- [ ] `deliveryStatus`, `sampleContentProvided`, `consumptionPercentage`, and `refundPreference` are truthful rather than optimized for denial.
- [ ] A `202` response cannot mutate paid entitlement state.
- [ ] Final Diamond/VIP correction happens only from authoritative Apple refund/revocation evidence.
- [ ] Production and sandbox are isolated.
- [ ] Privacy Policy and App Store privacy disclosures match the implementation.
- [ ] Mandatory German/EU remedies remain available.
- [ ] No player-facing or legal copy describes current TycoonX as beta.
- [ ] Player-facing and legal prose spells the game name exactly `TycoonX`.

## Current primary references

- Apple Developer Documentation, **Send Consumption Information**: https://developer.apple.com/documentation/appstoreserverapi/send-consumption-information
- Apple Developer Documentation, **ConsumptionRequest**: https://developer.apple.com/documentation/appstoreserverapi/consumptionrequest
- Apple Developer Documentation, **customerConsented**: https://developer.apple.com/documentation/appstoreserverapi/customerconsented
- Apple Developer Documentation, **consumptionPercentage**: https://developer.apple.com/documentation/appstoreserverapi/consumptionpercentage
- Apple Developer Documentation, **deliveryStatus**: https://developer.apple.com/documentation/appstoreserverapi/deliverystatus
- Apple Developer Documentation, **refundPreference**: https://developer.apple.com/documentation/appstoreserverapi/refundpreference
- Apple WWDC25, **Dive into App Store server APIs for In-App Purchase**: https://developer.apple.com/videos/play/wwdc2025/249/
- Apple, **App privacy details on the App Store**: https://developer.apple.com/app-store/app-privacy-details/
- GDPR, Regulation (EU) 2016/679, Articles 4 and 7: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- European Data Protection Board, **Guidelines 05/2020 on consent under Regulation 2016/679**: https://www.edpb.europa.eu/documents/guideline/guidelines-052020-on-consent-under-regulation-2016679_en

## Release decision

**FAIL CLOSED** if TycoonX sends consumption information without valid consent, relies on V1 for a new implementation, reports unsupported delivery/consumption facts, treats `202 Accepted` as a refund decision, uses a `CONSUMPTION_REQUEST` as entitlement or fraud authority, lets the evidence submission alter 30-Day VIP/Lifetime VIP semantics, reopens Lifetime VIP sales, or uses optional refund evidence to bypass mandatory consumer/data-protection rights.
