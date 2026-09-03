# TycoonX CRA Sensitive Notification Dissemination Gate

Last reviewed: 2026-09-03

This is a narrow operational companion to `TYCOONX_EU_CYBER_RESILIENCE_ACT_2026_REPORTING_GATE.md` and `TYCOONX_CRA_SRP_ROUTING_USER_NOTIFICATION_RELEASE_GATE.md`. It covers only the Cyber Resilience Act rules for delaying onward dissemination of sensitive CRA notifications under Article 16(2) and Commission Delegated Regulation (EU) 2026/881. It does not replace the core 24-hour, 72-hour, final-report, user-notification, GDPR, platform, payment, or incident-response gates.

TycoonX went to full release on **September 1, 2026**. CRA Article 14 mandatory manufacturer reporting begins on **September 11, 2026**. The sensitive-dissemination mechanism is a confidentiality and routing safeguard. It is not permission to postpone a mandatory filing.

## Official references

- Regulation (EU) 2024/2847, especially Articles 14 and 16: https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng
- Commission Delegated Regulation (EU) 2026/881 of 11 December 2025, published 20 April 2026 and in force from 10 May 2026: https://eur-lex.europa.eu/eli/reg_del/2026/881/oj/eng
- ENISA CRA Single Reporting Platform: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp
- ENISA CRA SRP FAQ, updated 31 August 2026: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/frequently-asked-questions
- ENISA Assigned Representative notification-submission guidance: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/cra-srp-guidance-ar-notification-submission-and-update

## P0 rule 1: Do not confuse filing with dissemination

The manufacturer files the required CRA notification on the statutory timetable. The receiving CSIRT decides whether onward dissemination can be delayed under the legal conditions.

- [ ] Never delay a 24-hour early warning, 72-hour notification, requested update, or final report merely because the information is sensitive.
- [ ] Never reset the incident awareness timestamp because CK-Labs is considering a dissemination restriction.
- [ ] Never wait for the receiving CSIRT to approve a confidentiality request before submitting the notification itself.
- [ ] Treat a delayed-dissemination request as a field or decision within the live CRA reporting workflow, not as a replacement for that workflow.
- [ ] If the SRP is unavailable, follow the separate SRP-outage contingency. Sensitivity does not justify inventing a later awareness time or an unofficial filing endpoint.

A useful mental model is: **CK-Labs must report on time; the competent CSIRT controls whether and for how long onward dissemination is delayed.**

## P0 rule 2: The manufacturer does not own the delay decision

Under CRA Article 16(2) and Delegated Regulation (EU) 2026/881, the CSIRT designated as coordinator that initially receives the notification may delay dissemination in exceptional circumstances on justified cybersecurity-related grounds. A manufacturer can request or support that treatment, but cannot impose it unilaterally.

- [ ] Do not promise a researcher, vendor, player, employee, contractor, investor, or business partner that a CRA notification will remain confined to CK-Labs and one CSIRT.
- [ ] Do not state that marking information `confidential`, `sensitive`, `TLP:RED`, or similar automatically prevents statutory dissemination.
- [ ] Do not describe a request as an approved delay until the competent CSIRT has actually made that decision.
- [ ] Record the CSIRT decision, any reason supplied, and the expected or actual onward-dissemination timing where available.
- [ ] If the CSIRT refuses the request or later disseminates the information, do not obstruct a lawful transmission.

The delegated regulation permits a delay only for a period strictly necessary. CK-Labs must not invent a permanent secrecy right.

## P0 rule 3: Use the ordinary exceptional-circumstances test only when the risk is real

Delegated Regulation (EU) 2026/881 permits delayed dissemination to relevant CSIRTs only under the specified cybersecurity-related conditions. The regulation is designed for situations where dissemination itself creates a concrete cybersecurity risk, not for ordinary commercial embarrassment or reputational concerns.

Before requesting delayed dissemination, preserve a short assessment covering:

- what exact information is sensitive;
- what concrete cybersecurity harm could result from wider dissemination at that time;
- why the security risk of dissemination outweighs the security benefit of immediate wider sharing;
- why handling restrictions such as the Traffic Light Protocol or Permissible Actions Protocol would not adequately mitigate that risk;
- whether an effective risk mitigation measure such as a security update or user guidance is expected shortly;
- whether the notification contains information capable of materially facilitating an exploitation technique;
- whether sufficient reduced information can be shared to support mitigation without disclosing the most sensitive details; and
- whether a coordinated vulnerability disclosure process is relevant.

Do not request a delay merely because:

- the incident is embarrassing;
- a promotion, Lifetime VIP sales window, Diamond sale, or product launch is active;
- app-store review is pending;
- CK-Labs wants more time to prepare public relations messaging;
- a provider asked for secrecy without identifying a legally relevant cybersecurity risk; or
- disclosure could increase refund, support, or chargeback volume.

Commercial inconvenience is not the same thing as a justified cybersecurity-related ground.

## P0 rule 4: A promised mitigation within 72 hours needs an evidence-backed plan

One condition in Delegated Regulation (EU) 2026/881 concerns a manufacturer telling the receiving CSIRT that an effective risk mitigation measure, such as a security update or user guidance, is expected to be available within 72 hours.

If CK-Labs relies on that factual position:

- [ ] record what the proposed mitigation is;
- [ ] record who owns it and the expected availability time;
- [ ] distinguish a tested mitigation from a hoped-for fix;
- [ ] update the CSIRT if the forecast materially changes; and
- [ ] do not claim a 72-hour mitigation merely to seek confidentiality where no realistic delivery path exists.

The delegated regulation does not let CK-Labs turn a speculative patch estimate into a guaranteed dissemination freeze. The receiving CSIRT retains the legal decision.

## P0 rule 5: Particularly exceptional circumstances are narrower than ordinary sensitivity

ENISA's 31 August 2026 SRP FAQ uses **particularly exceptional circumstances (PEC)** for the special Article 16(2) situation in which ENISA does not initially receive the full content of the 72-hour vulnerability notification.

ENISA currently instructs manufacturers to assess during the **first 72-hour window** whether PEC applies. PEC can be invoked only where at least one of CRA Article 16(2), third-subparagraph points (a) to (c), applies.

Those three statutory situations concern a notified actively exploited vulnerability where the manufacturer indicates that:

1. the malicious exploitation is, according to the information available, confined to the Member State of the receiving coordinator CSIRT;
2. immediate further dissemination would likely supply information whose disclosure would be contrary to that Member State's essential interests; or
3. the vulnerability poses an imminent high cybersecurity risk stemming from further dissemination.

- [ ] Do not use PEC as a generic `high severity` checkbox.
- [ ] Do not invoke PEC merely because the vulnerability affects personal data, payments, Diamonds, VIP, authentication, or a large number of users.
- [ ] For any selected PEC condition, preserve the facts supporting that exact statutory condition.
- [ ] If the facts are uncertain, state the uncertainty rather than inventing a basis.
- [ ] Reassess the condition when new evidence shows exploitation in another Member State or otherwise undermines the original basis.

## P0 rule 6: PEC must be actively marked in the 72-hour vulnerability notification

ENISA's current FAQ states that the special restriction on ENISA receiving the full 72-hour vulnerability notification applies only where the manufacturer **actively marks in that 72-hour notification** that at least one Article 16(2)(a) to (c) condition applies.

For TycoonX:

- [ ] Make the PEC assessment before submitting the 72-hour vulnerability stage when the facts could support it.
- [ ] If PEC is relied on, actively select/mark the applicable legal condition in the SRP rather than assuming an earlier `sensitive` description carries forward automatically.
- [ ] Preserve a screenshot/export or equivalent immutable evidence of the selected condition and submitted 72-hour notification.
- [ ] Preserve the exact factual basis and approval/review time used for the selection.
- [ ] If PEC is not supportable, do not select it merely to reduce distribution of an uncomfortable notification.

A general request for confidentiality is not a substitute for the explicit PEC marking that ENISA's current workflow requires.

## P0 rule 7: Know what PEC changes and what it does not

Where the Article 16(2) particularly exceptional circumstances mechanism applies to the 72-hour vulnerability notification, the CRA limits what is simultaneously made available to ENISA. The information still made available includes that a manufacturer made a notification, general product information, the general nature of the exploit, and the fact that security-related grounds were raised.

PEC does **not** mean:

- no report was filed;
- CK-Labs can omit the 24-hour early warning;
- the 72-hour deadline disappears;
- the final-report duty disappears;
- user-notification duties disappear;
- GDPR, DSA, Apple, Google Play, Xsolla, law-enforcement, contractual, or other reporting duties disappear; or
- CK-Labs controls all later dissemination.

ENISA's Assigned Representative guidance currently states that ENISA automatically receives the 72-hour notification and final report only when particularly exceptional circumstances have not been invoked. The operational runbook must therefore preserve the actual SRP behavior and not assume one recipient pattern for every stage.

## P0 rule 8: Keep the sensitive payload minimal even when the channel is protected

A protected regulatory workflow is not a reason to over-collect or over-share secrets.

- [ ] Never submit passwords, signing keys, private keys, reusable API tokens, session secrets, or full payment credentials unless a competent authority specifically and lawfully requires information that cannot be supplied safely in another form.
- [ ] Minimise player personal data to what is necessary for the CRA notification.
- [ ] Prefer hashes, ranges, indicators, technical descriptions, redacted examples, or other proportionate evidence where they answer the regulatory need without exposing reusable secrets.
- [ ] Keep access to the internal incident packet on a need-to-know basis.
- [ ] Preserve a clean distinction between regulatory evidence and ordinary customer-support data.

GDPR data-minimisation, confidentiality, security, and retention rules continue to apply.

## P0 rule 9: Provider secrecy requests do not decide the CRA route

Apple, Google Play, Xsolla, cloud, authentication, analytics, CDN, AI, communications, or security vendors may mark incident material confidential or impose contractual notification limits. Those arrangements can matter, but they do not override mandatory CRA reporting.

- [ ] Record any provider confidentiality restriction that affects incident handling.
- [ ] Escalate a direct conflict between a provider NDA and mandatory legal reporting rather than silently withholding the CRA report.
- [ ] Share no more provider-confidential detail than the lawful regulatory purpose requires.
- [ ] Do not assume a provider has made CK-Labs' manufacturer filing unless the legal role and actual filing are verified.
- [ ] If a provider incident is the root cause, keep provider responsibility and CK-Labs' manufacturer duties analytically separate.

## P0 rule 10: Paid entitlements remain isolated from confidentiality decisions

The decision to request, obtain, reject, or end delayed CRA dissemination does not itself alter a purchase.

- [ ] Do not delete or duplicate legitimately purchased **Diamonds** because an account or payment path appears in a sensitive incident.
- [ ] Do not restart, pause, shorten, extend, or duplicate the original one-time **30-Day VIP** period because a report is sensitive or restricted.
- [ ] Do not add an expiry to valid **Lifetime VIP**, downgrade it, or require a replacement purchase because an incident is being handled under a restricted-dissemination process.
- [ ] Do not manufacture a refund, chargeback, fraud flag, account sanction, or entitlement-abuse finding from a CRA confidentiality decision.
- [ ] If the security incident itself created invalid value, correct only the affected state from reliable authoritative TycoonX, Apple, Google Play, Xsolla, or other relevant evidence.

Lifetime VIP remains a one-time entitlement offered only during selected genuine promotional sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future availability.

## P0 rule 11: Account compromise and reporter identity require separate treatment

A sensitive security report can involve a compromised TycoonX account, a good-faith security researcher, a malicious actor, or several of these at once.

- [ ] Do not classify the legitimate owner of a compromised account as the attacker merely because the compromised account generated malicious traffic.
- [ ] Do not treat a good-faith vulnerability reporter as an exploiter solely because they supplied technical reproduction information.
- [ ] Preserve identity/contact information only where necessary and lawful.
- [ ] Keep sanctions, moderation, fraud, chargeback, and account-compromise decisions on their own evidence and legal basis.

## P0 rule 12: Evidence packet for every delayed-dissemination request

Preserve at least:

- incident identifier and first reliable awareness timestamp;
- product name and affected TycoonX version/service component;
- notification type and stage;
- selected coordinator CSIRT;
- exact sensitive fields or sections;
- ordinary exceptional-circumstances assessment;
- whether TLP/PAP or another handling restriction could mitigate the risk;
- any expected mitigation and its forecast availability time;
- whether PEC was assessed during the first 72-hour window;
- exact Article 16(2)(a), (b), or (c) PEC condition selected, if any;
- facts supporting the selected condition;
- immutable copy of the 24-hour and 72-hour submissions;
- proof of the active PEC selection in the 72-hour stage where relied on;
- the receiving CSIRT's decision or response where available;
- actual later dissemination timing where known;
- any correction when facts changed; and
- user-notice, GDPR, store/provider, and payment-entitlement workstreams triggered by the same incident.

Do not rewrite the historical incident packet to make a later conclusion appear obvious at the earlier timestamp. Preserve corrections as corrections.

## Release test cases

Before September 11, 2026, walk through these tabletop cases:

1. A vulnerability is actively exploited, but the technical details are not especially sensitive. File on time without inventing a dissemination restriction.
2. An exploit description could let low-skill attackers reproduce the attack before a patch is available. Prepare the ordinary delayed-dissemination assessment without delaying the filing.
3. A credible patch is expected within 72 hours. Record the real delivery plan and do not represent it as guaranteed if it is not.
4. A vulnerability appears exploited only in the receiving CSIRT's Member State. Assess the exact Article 16(2)(a) PEC facts and actively mark the 72-hour notification only if supportable.
5. New evidence before the 72-hour submission shows exploitation in a second Member State. Reassess and do not keep the single-Member-State PEC basis merely because it was considered earlier.
6. A cloud vendor marks its root-cause report confidential. File the CRA notification on time and minimise vendor-confidential information rather than treating the NDA as a reporting veto.
7. The incident affects payment reconciliation and some players temporarily see incorrect Diamond balances. Keep regulatory confidentiality and entitlement correction as separate workflows.
8. A compromised account is used to exploit the vulnerability. Investigate the attacker and legitimate account owner separately.
9. The receiving CSIRT refuses a requested dissemination delay. Do not obstruct the lawful dissemination.
10. The SRP is unavailable near the deadline. Use the established outage contingency; do not claim sensitivity paused the clock.

## Canonical/legal localization rule

This gate does not materially change the canonical TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, or Community Standards. It operationalises a regulatory reporting/confidentiality process. Therefore the completed 25-locale legal set does not need to be reopened merely because this gate was added.

If a future implementation changes player-facing rights, security notices, data disclosures, entitlement treatment, or contractual meaning, update the relevant canonical English document first and then reopen only that affected localized document type across all 25 locales in the prescribed order.

## Current release decision

**PASS for legal-runbook wording, subject to production evidence.** Before September 11, CK-Labs still needs to verify the live SRP interface and public URL, the actual coordinator-CSIRT route, and the production steps for actively marking a particularly exceptional circumstance in a 72-hour vulnerability notification. Do not claim production validation until that has actually been tested or verified against the live ENISA workflow.
