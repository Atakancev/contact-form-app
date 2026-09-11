# TycoonX German TDDDG / Cloudflare Turnstile Support Privacy Gate

Status: implementation and privacy compliance gate
Last reviewed: 2026-09-11
Owner: CK-Labs / TycoonX

## Purpose

TycoonX support and contact surfaces currently use Cloudflare Turnstile to reduce automated abuse. This gate defines the minimum privacy, terminal-device, accessibility, support-availability and evidentiary controls that should be verified before treating that integration as production-complete for Germany and the EU.

This document does not assume that every security technology requires cookie consent. It also does not assume that calling a technology "strictly necessary" makes it exempt automatically. The actual Turnstile configuration, actual terminal-device access, actual purposes and actual data flows must be reviewed.

## Current repository observation

The shared contact form:

- renders a Cloudflare Turnstile widget before a message can be submitted;
- requires a successful Turnstile token before enabling submission;
- sends that token to the CK-Labs contact endpoint; and
- validates the token server-side with Cloudflare Siteverify before sending the support email.

That server-side verification is the correct security pattern for a Turnstile token. A client-side success event alone must never be treated as proof of a valid challenge.

The Turnstile token is anti-bot evidence only. It is not proof of identity, age, account ownership, contractual consent, payment authorization, refund eligibility, chargeback fraud, or entitlement ownership.

## 1. German TDDDG section 25 analysis

Section 25 TDDDG regulates storing information in an end user's terminal equipment and accessing information already stored there.

Consent is generally required unless a statutory exception applies. One relevant exception covers storage or access that is strictly necessary so that the provider can supply a digital service expressly requested by the user.

For TycoonX, do not apply a blanket rule such as either:

- "Turnstile is security, therefore consent is never required"; or
- "Turnstile is third party, therefore a cookie banner is always required."

Instead, document the actual implementation.

### Required terminal-device inventory

For every production Turnstile widget used by CK-Labs, record:

1. widget hostname and route;
2. widget mode and relevant Cloudflare configuration;
3. whether Turnstile pre-clearance is enabled;
4. whether a `cf_clearance` cookie is issued;
5. any other cookies, local storage, browser storage or terminal-device reads/writes attributable to the integration;
6. the purpose of each storage/access operation;
7. whether it is strictly necessary for the expressly requested security-protected service; and
8. the legal conclusion under section 25 TDDDG, including why consent is or is not required.

Cloudflare currently documents that a normal Turnstile widget issues a one-time token by default and that `cf_clearance` is an optional addition when pre-clearance is enabled. Therefore, the legal analysis must follow the actual CK-Labs widget configuration rather than assuming pre-clearance is active.

### Founder-safe rule

A proportionate anti-bot mechanism can be important for protecting CK-Labs and players from spam and malicious automation. The lawful founder-protective position is to use only what is genuinely needed, document why it is needed, and avoid adding unrelated analytics, advertising or tracking purposes to a security exception.

If the implementation later adds non-essential purposes, those purposes require their own TDDDG/GDPR assessment and must not silently inherit the security justification.

## 2. GDPR remains a separate analysis

A TDDDG section 25 exception does not itself provide the GDPR legal basis for personal-data processing.

The controller must separately document the GDPR basis for the processing carried out on CK-Labs' behalf. Depending on the verified facts, network and information security and fraud prevention may support a legitimate-interest analysis under Article 6(1)(f), but the interests, necessity and balancing assessment must be documented rather than merely asserted.

Where Article 6(1)(f) is used, the assessment should address at least:

- the concrete anti-abuse/security interest;
- why the processing is necessary for that purpose;
- whether a materially less intrusive practical alternative exists;
- the reasonable expectations of TycoonX users;
- the categories and sensitivity of signals involved;
- safeguards and minimization;
- effects on children and other vulnerable users; and
- the user's Article 21 objection right where applicable.

## 3. Cloudflare role split must be recorded accurately

Cloudflare's current Turnstile Privacy Addendum describes a dual role:

- for Signals processed to provide Turnstile and protect the customer's website, Cloudflare describes itself as processor and the website operator as controller; and
- for Signals Cloudflare processes to improve Turnstile's bot-detection capabilities, Cloudflare describes itself as an independent controller relying on its own legitimate interests.

Do not collapse those two roles into a single inaccurate statement such as "Cloudflare is only our processor" or "Cloudflare alone decides all Turnstile processing."

The live contract, Data Processing Addendum where applicable, privacy terms, transfer mechanism and current provider documentation must be retained with the compliance record.

## 4. Data categories and minimization

Cloudflare's current Turnstile disclosure identifies Signals including client IP address, TLS fingerprint, User-Agent header, sitekey and associated origin.

CK-Labs should not intentionally send Turnstile data it does not need for the challenge. In particular, Turnstile must not be given the user's:

- support-message body;
- purchase receipt contents;
- Apple, Google Play or Xsolla credentials;
- payment-card information;
- password;
- private chat contents;
- Diamond balance;
- VIP history; or
- unrelated account attributes.

If a future implementation passes extra metadata to a security provider, the metadata must receive a fresh necessity, minimization and transparency review before release.

## 5. Privacy transparency

Article 13 GDPR requires appropriate information when personal data are collected, including the controller, purposes, legal basis, legitimate interests where applicable, recipients or recipient categories, relevant transfers, retention information and data-subject rights.

The canonical English TycoonX Privacy Policy must remain the source of truth for material TycoonX privacy meaning.

Before marking this gate complete, verify whether the current Privacy Policy already describes the Turnstile/security-provider processing with enough specificity to satisfy the actual production data flow. At minimum the review must consider:

- Cloudflare or an adequately specific security-provider category;
- anti-bot and service-security purpose;
- applicable legal basis;
- relevant controller/processor role split;
- recipient information;
- international-transfer information where applicable;
- retention or retention criteria where CK-Labs controls it; and
- rights and contact routes.

If that review requires a material new canonical disclosure, update the English Privacy Policy first and then synchronize the complete Privacy Policy meaning across all 25 required TycoonX locales. Do not patch only German or only the support page and leave the localized legal set inconsistent.

## 6. International transfers

Do not state that Cloudflare processing is entirely EU-local unless that is verified for the actual service and contract.

Where personal data are transferred to a third country, the applicable GDPR Chapter V mechanism and transparency must be verified. The compliance record should identify, as applicable:

- adequacy decision;
- standard contractual clauses or other Article 46 safeguard;
- supplementary safeguards where required; and
- where users can obtain information about the safeguard.

Do not use an Article 49 derogation as a routine replacement for an appropriate recurring-transfer mechanism.

## 7. Support and legal-rights availability

Turnstile is an anti-abuse layer, not a lawful reason to make important user rights practically impossible to exercise.

A user must have a reasonable alternative route if Turnstile or its provider is unavailable, blocked by accessibility technology, blocked by a privacy tool, incompatible with an old browser, or suffering a regional outage, especially for time-sensitive matters such as:

- privacy/data-subject requests;
- account-compromise reports;
- payment/refund disputes;
- withdrawal or mandatory consumer-right notices;
- DSA illegal-content reports or complaints where applicable; and
- security reports.

The alternative can use proportionate anti-abuse controls. It does not need to accept unlimited anonymous spam.

If a direct CK-Labs email address is the fallback, it must remain discoverable from the relevant legal/support area without requiring the failed Turnstile challenge itself.

## 8. Accessibility

The Turnstile integration must not create an inaccessible dead end. Cloudflare currently states that Turnstile is WCAG 2.2 AA compliant, but CK-Labs remains responsible for the accessibility of the complete CK-Labs-controlled support journey where applicable.

Test at least:

- keyboard-only navigation;
- VoiceOver/TalkBack or another common screen reader;
- focus behavior after challenge success/failure;
- challenge expiry and retry;
- high zoom and mobile layout; and
- the alternative contact route when the challenge cannot be completed.

This requirement complements the separate TycoonX BFSG/EAA accessibility gate and does not replace it.

## 9. Outage, provider change and security emergency

If Cloudflare is unavailable or materially changes Turnstile:

- do not classify every failed challenge as fraud or hacking;
- do not suspend a TycoonX account merely because a challenge cannot load;
- preserve an alternative route for legally important contact where reasonably required;
- reassess TDDDG/GDPR implications before enabling materially different storage, tracking or profiling behavior; and
- update privacy disclosures if the provider or material data flow changes.

If CK-Labs replaces Cloudflare with another anti-bot provider, the replacement must pass this gate again rather than inheriting Turnstile's analysis automatically.

## 10. Evidence and retention

Keep enough evidence to prove the production configuration and assessment without collecting unnecessary user data.

Recommended compliance evidence includes:

- date of review;
- widget configuration screenshots/export;
- pre-clearance setting;
- provider privacy terms/addendum version;
- applicable contract/DPA status;
- TDDDG section 25 conclusion;
- GDPR lawful-basis assessment;
- transfer assessment;
- privacy-policy version reviewed;
- accessibility test result;
- fallback-contact test result; and
- responsible reviewer.

Security logs and Turnstile results should have a defined retention purpose and period. Do not retain challenge data indefinitely merely because storage is technically available.

## 11. Payment and entitlement isolation

Turnstile must remain completely separate from TycoonX payment and entitlement authority.

A Turnstile pass or failure must never by itself:

- grant or remove Diamonds;
- grant, extend or revoke one-time 30-Day VIP;
- grant or revoke Lifetime VIP;
- prove that an Apple, Google Play or Xsolla payment succeeded;
- prove that a refund, reversal or chargeback is valid;
- override authoritative store/payment records; or
- justify correction of an unrelated entitlement.

Apple, Google Play, Xsolla and CK-Labs server/payment records must continue to control transaction-specific payment and entitlement reconciliation under the relevant TycoonX payment gates.

## 12. Account compromise and abuse reports

A successful Turnstile challenge only indicates that the anti-bot check succeeded. It must not be treated as authentication of the account owner.

For account-compromise, payment or entitlement disputes, support should verify ownership using proportionate, transaction-relevant evidence. Do not request passwords or full payment-card details.

Likewise, repeated Turnstile failures can be a risk signal, but they are not conclusive evidence that the user is a hacker, exploiter or fraudster.

## 13. QA / tabletop cases

Before declaring this gate complete, test at least these cases:

1. Normal German user submits a TycoonX support request and Turnstile succeeds.
2. Turnstile token is omitted and server-side submission fails safely.
3. Forged client-side success without a valid Siteverify result does not submit.
4. Reused or expired token fails safely.
5. Cloudflare outage occurs while a user needs to report account compromise.
6. Privacy blocker prevents the widget from loading and the user can find an alternative contact route.
7. Screen-reader user can complete or reasonably bypass the support journey through the documented fallback.
8. Pre-clearance is disabled and the compliance record reflects that actual configuration.
9. Pre-clearance is later enabled and TDDDG/cookie analysis is reopened before release.
10. `cf_clearance` begins being issued after a configuration change and is not silently ignored.
11. Cloudflare changes its Turnstile Privacy Addendum or data categories and the vendor/privacy assessment is rechecked.
12. User fails Turnstile repeatedly but no automatic TycoonX suspension or entitlement removal occurs solely for that reason.
13. User passes Turnstile but cannot use that fact as proof that an Xsolla payment succeeded.
14. A child uses the support form and the GDPR/minor analysis does not rely on a generic adult assumption.
15. A user submits a privacy-rights request during a Turnstile outage.
16. A user submits a refund dispute and only the relevant Apple/Google/Xsolla transaction is reconciled.
17. Old browser cannot run the widget and a discoverable fallback remains available.
18. Cloudflare is replaced by another provider and the new provider receives a fresh TDDDG/GDPR review.
19. Security emergency requires temporary anti-abuse hardening and the change is documented and proportionate.
20. Privacy Policy wording is materially changed and all 25 localized Privacy Policies are synchronized before the change is marked complete.

## 14. Release severity

P1 until the live production configuration is verified and the privacy/fallback assessment is documented.

Escalate to P0 if any of the following is found:

- legally important TycoonX contact is effectively impossible when Turnstile fails and no reasonable fallback exists;
- non-essential tracking is being placed under a false "strictly necessary" classification;
- the live data flow materially contradicts the canonical Privacy Policy;
- a provider change introduces undisclosed material data processing; or
- Turnstile outcome is used as payment/entitlement authority.

## 15. Completion checklist

This gate is complete only when all applicable items below are verified against production:

- [ ] Actual Turnstile widget configuration recorded.
- [ ] Pre-clearance / `cf_clearance` behavior verified.
- [ ] Section 25 TDDDG conclusion documented for actual terminal-device access.
- [ ] GDPR legal basis documented separately.
- [ ] Cloudflare processor/controller role split recorded accurately.
- [ ] Relevant provider contract/DPA and current privacy addendum retained.
- [ ] International-transfer mechanism assessed where applicable.
- [ ] Canonical TycoonX Privacy Policy checked against actual Turnstile processing.
- [ ] Any material canonical Privacy change synchronized to all 25 locales.
- [ ] Data minimization verified.
- [ ] Security/log retention documented.
- [ ] Accessibility tested.
- [ ] Discoverable fallback contact path tested.
- [ ] Provider outage behavior tested.
- [ ] Turnstile outcome isolated from payment and entitlement authority.
- [ ] Account-compromise workflow does not treat Turnstile as identity proof.
- [ ] QA cases above completed or documented as not applicable.

## Primary references checked on 2026-09-11

- German TDDDG, section 25, protection of privacy in terminal equipment: https://www.gesetze-im-internet.de/ttdsg/__25.html
- GDPR, Regulation (EU) 2016/679, especially Articles 5, 6, 13, 21 and Chapter V: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- Cloudflare Turnstile documentation: https://developers.cloudflare.com/turnstile/
- Cloudflare Turnstile pre-clearance documentation: https://developers.cloudflare.com/turnstile/additional-configuration/hostname-management/pre-clearance/
- Cloudflare Turnstile Privacy Addendum: https://www.cloudflare.com/turnstile-privacy-policy/

## Canonical/localization consequence

This gate itself does not change canonical player-facing TycoonX legal meaning.

Do not reopen completed localized documents merely because this implementation gate was added. If production verification proves that the canonical Privacy Policy requires a material new disclosure, make that English canonical change first and synchronize the corresponding complete Privacy Policy meaning across all required locales, updating `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md` accurately in the same localization cycle.
