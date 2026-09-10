# TycoonX Personal Data Breach Privacy Gate

Date reviewed: **September 10, 2026**

## Purpose

This gate records the privacy-law meaning added to the canonical TycoonX Privacy Policy and every localized TycoonX Privacy route. It is an operational/legal safeguard for security incidents involving personal data and does not claim that every technical incident is a legally notifiable personal data breach.

## Current EU/German baseline

Under GDPR Article 33, where CK-Labs is the controller and becomes aware of a personal data breach, it must notify the competent supervisory authority without undue delay and, where feasible, no later than 72 hours after awareness, unless the breach is unlikely to result in a risk to the rights and freedoms of natural persons. Where notification is late, reasons for the delay must accompany it. Article 33 also requires personal data breaches to be documented so the supervisory authority can verify compliance.

Under GDPR Article 34, where a personal data breach is likely to result in a high risk to the rights and freedoms of natural persons, the controller must communicate the breach to affected data subjects without undue delay in clear and plain language, subject to the exceptions set out in Article 34.

Primary source: Regulation (EU) 2016/679, Articles 33 and 34, EUR-Lex: https://eur-lex.europa.eu/eli/reg/2016/679/oj

## TycoonX policy rule

The TycoonX Privacy Policy must therefore preserve all of the following distinctions:

- a security incident is not automatically a personal data breach;
- a personal data breach is not automatically reportable to users or the public;
- where GDPR Article 33 applies, the supervisory-authority notification threshold is risk, with the statutory 72-hour framework applying after awareness where feasible;
- where GDPR Article 34 applies, individual communication uses the higher high-risk threshold and must be clear and understandable;
- legally applicable exceptions to individual notification remain available;
- CK-Labs must document personal data breaches as required and retain enough incident evidence to show the assessment and response;
- provider incidents must be assessed according to the actual controller/processor roles and facts rather than automatically attributed to CK-Labs or automatically excluded from CK-Labs responsibilities; and
- nothing in the Privacy Policy may waive mandatory data-protection rights or remedies.

## Synchronized implementation

`app/tycoonx-legal/PersonalDataBreachPrivacyNotice.tsx` supplies the new privacy clarification in canonical English and all 25 required localized languages. `app/layout.tsx` renders it only on the canonical English Privacy Policy route and the localized `/tycoonx-legal/{locale}/privacy` routes.

The localized notice follows the required locale distinctions, including separate wording for Spanish/Mexican Spanish, French/Canadian French, Portuguese/Brazilian Portuguese, and Chinese variants. Arabic is rendered RTL.

## Operational acceptance criteria

A real incident-response process should be able to record at least awareness time, incident facts, affected systems/data, likely consequences, risk assessment, containment/remediation, supervisory-authority decision and timing, affected-user communication decision and timing, any Article 34 exception relied on, and the reason for any delay where required.

The legal wording does not authorize CK-Labs to conceal a breach that must legally be reported. It also does not require CK-Labs to publish every unsuccessful attack, outage, bug, or security alert when the legal notification threshold is not met.

## Current status

Canonical and localized privacy wording: **synchronized**.

Operational incident-response implementation: **must be verified separately**. This gate does not assert that production logging, escalation, notification tooling, or provider incident workflows already meet every acceptance criterion.
