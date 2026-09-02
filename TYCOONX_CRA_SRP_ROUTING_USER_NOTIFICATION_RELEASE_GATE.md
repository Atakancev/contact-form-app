# TycoonX CRA SRP Routing and User/Public Notification Companion Gate

Last reviewed: 2026-09-02

This is a release and incident-response companion checklist for CK-Labs. It supplements `TYCOONX_EU_CYBER_RESILIENCE_ACT_2026_REPORTING_GATE.md`; it does not replace the core Cyber Resilience Act reporting gate or case-specific legal advice.

## Why this companion gate exists

TycoonX went to full release on **September 1, 2026**. The Cyber Resilience Act (Regulation (EU) 2024/2847, "CRA") Article 14 mandatory reporting duties begin on **September 11, 2026**.

The existing TycoonX CRA gate already covers scope, the 24-hour and 72-hour reporting stages, final reports, EU Login, the Single Reporting Platform ("SRP"), vulnerability intake, privacy, security hotfixes, and paid-entitlement isolation. This companion gate closes four narrower implementation risks that become important when a real incident occurs:

1. selecting the legally correct **CSIRT designated as coordinator** under CRA Article 14(7), including every statutory fallback;
2. giving the CRA Article 14(8) **impacted-user notice** in the form and timing the Regulation contemplates;
3. handling the possibility that the coordinator CSIRT informs users or the public under Articles 14(8) and 17(2); and
4. preventing Apple, Google Play, Xsolla, cloud location, storefront, or payment routing from accidentally being treated as the CRA manufacturer-establishment test.

## Official references

- Cyber Resilience Act, Regulation (EU) 2024/2847: https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng
- European Commission CRA reporting guidance: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting
- ENISA CRA Single Reporting Platform: https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp

As of **September 2, 2026**, ENISA says the SRP is to be used for mandatory CRA reporting from September 11, 2026. ENISA's Assigned Representative registration and notification guidance was updated on **August 3, 2026**, and its Assigned Representative interface-functions guidance was updated on **August 14, 2026**. ENISA expressly warns that its current user guidance can change, so CK-Labs must re-check the official SRP instructions immediately before the reporting duties start and again when a real report is filed.

## P0 gate 1: Determine the Article 14(7) reporting Member State correctly

Do not choose a coordinator CSIRT merely because it is convenient, English-speaking, familiar, or geographically close to a server, payment provider, store, or user.

### A. Manufacturer with a main establishment in the Union

For CRA Article 14(7), the manufacturer's main establishment in the Union is the Member State where decisions related to the cybersecurity of its products with digital elements are **predominantly taken**.

- [ ] Record where the material TycoonX cybersecurity decisions are actually taken.
- [ ] Record who makes or approves those decisions, using evidence that reflects reality rather than a paper-only address.
- [ ] Treat a registered office, mailing address, hosting region, app-store country, or payment-provider location as evidence only where the CRA test actually makes it relevant.
- [ ] Do not treat an Apple storefront, Google Play storefront, Xsolla merchant entity, cloud data centre, CDN region, or authentication provider as the TycoonX manufacturer's CRA main establishment merely because that provider is located there.

If the Member State where cybersecurity decisions are predominantly taken **cannot be determined**, Article 14(7) uses a specific fallback: the main establishment is the Member State where the manufacturer has the establishment with the **highest number of employees in the Union**.

- [ ] Use this employee-count fallback only when the predominant-cybersecurity-decision Member State genuinely cannot be determined.
- [ ] Preserve the date and source of any employee-count calculation used for the fallback.
- [ ] Do not manufacture a preferred reporting venue by moving a nominal employee, contractor, or mailbox while cybersecurity decisions remain elsewhere.

A solo developer or microenterprise can still have a determinable main establishment. Small size does not itself activate a different Article 14(7) route.

### B. Manufacturer with no main establishment in the Union

If a future CK-Labs successor or manufacturer has **no main establishment in the Union**, Article 14(7) requires the reporting Member State to be selected in the following order, based on the information available to the manufacturer:

1. the Member State where the **authorised representative acting for the highest number of the manufacturer's products with digital elements** is established;
2. if that does not resolve the route, the Member State where the **importer placing the highest number of those products on the market** is established;
3. if that does not resolve the route, the Member State where the **distributor making the highest number of those products available on the market** is established; and
4. if that does not resolve the route, the Member State where the **highest number of users of the manufacturer's products with digital elements are located**.

- [ ] Follow this order. Do not skip directly to the Member State with the largest user base because it is easier to calculate.
- [ ] Preserve the information used for each unavailable or inapplicable higher-priority step.
- [ ] If the user-count route in point 4 is used, preserve the methodology and date used to identify the largest Member State population.
- [ ] Do not infer "authorised representative", "importer", or "distributor" status merely because Apple, Google Play, Xsolla, a hosting company, or another vendor provides a service to TycoonX. Apply the actual CRA definitions and contractual facts.

Where Article 14(7)'s user-count fallback is used, the CRA permits subsequent notifications concerning another actively exploited vulnerability or severe incident to be submitted to the **same CSIRT designated as coordinator to which the manufacturer first reported**. Preserve the first-routing decision so later incident responders can use that continuity option lawfully instead of recomputing a different venue from ordinary user fluctuations.

## P0 gate 2: Re-check routing when the business structure materially changes

A CRA reporting route can become stale after a business sale, merger, reorganisation, change of operator, relocation of cybersecurity decision-making, or other structural change.

Before relying on a previously recorded route:

- [ ] confirm the current CRA manufacturer for TycoonX;
- [ ] confirm where cybersecurity decisions are predominantly taken;
- [ ] if necessary, re-run the Article 14(7) fallback in the statutory order;
- [ ] preserve the effective date of the change; and
- [ ] do not retroactively rewrite which coordinator received an earlier valid report.

A provider migration alone does not automatically change the manufacturer or the main-establishment test. Moving databases, payments, authentication, CDN, analytics, or hosting between providers is not itself a legal relocation of CK-Labs' cybersecurity decision-making.

## P0 gate 3: Freeze the current SRP operational path before September 11

The SRP implementation is still close to its statutory go-live date. Treat official instructions as a change-controlled dependency.

- [ ] Re-check the ENISA SRP landing page and Assigned Representative guidance no later than September 10, 2026 and again before a real submission.
- [ ] Record the then-current SRP public URL, user-guide revision dates, and the selected coordinator CSIRT.
- [ ] Keep the responsible CK-Labs representative's **EU Login** usable.
- [ ] Keep a secondary responsible person or documented emergency-access process where reasonably possible.
- [ ] Do not delay a statutory report merely because Assigned Representative validation is still running where the current ENISA process allows submission while validation proceeds.
- [ ] Do not assume a future API exists merely because internal TycoonX incident handling is automated. Follow the then-current ENISA submission method.
- [ ] Preserve a copy or screenshot/export of each submitted stage and any SRP acknowledgement, receipt, status, correction, or follow-up request.

If ENISA changes the interface, required fields, authentication method, or submission procedure, update the operational runbook. Do not silently change the legal trigger, awareness timestamp, or statutory deadline to fit a tool limitation.

## P0 gate 4: Article 14(8) user communication is a separate legal workstream

After becoming aware of an actively exploited vulnerability or a severe incident having an impact on product security, the CRA requires the manufacturer to inform the **impacted users**, and where appropriate **all users**, of the vulnerability or incident and, where necessary, of risk-mitigation or corrective measures users can deploy.

For TycoonX:

- [ ] decide which users are impacted using the best available evidence rather than guessing or delaying for perfect certainty;
- [ ] assess whether all TycoonX users should receive the notice because impact cannot reliably be bounded or because broader action is necessary;
- [ ] tell users what is known, what remains under investigation, and what action they should take;
- [ ] distinguish a required security notice from ordinary outage, marketing, promotion, moderation, refund, or balancing communications;
- [ ] do not suppress a required notice merely to avoid reputational harm;
- [ ] avoid exploit instructions, reusable secrets, credentials, private keys, access tokens, or unnecessary security details that would materially increase attack risk;
- [ ] preserve the notice content, languages used, audience definition, channels, send/publication timestamps, and later corrections.

### Structured and machine-readable communication

Article 14(8) expressly says the user information should be provided, **where appropriate, in a structured, machine-readable format that is easily automatically processable**.

That does not mean every incident notice must be a raw JSON file. It means CK-Labs must make and record the actual "where appropriate" decision instead of assuming that an in-app paragraph always satisfies every communication need.

Possible implementations can include:

- a normal human-readable TycoonX security notice plus a structured incident/status representation for automated clients or administrators where useful;
- stable incident identifiers, affected-version ranges, mitigation status, minimum safe version, and timestamps in a predictable structured format;
- a public status/security feed that can be processed automatically where the incident and security model make that appropriate.

- [ ] Keep the human-readable notice understandable even if a machine-readable representation is also provided.
- [ ] Do not expose personal data or sensitive exploit details merely to make the notice machine-readable.
- [ ] Keep accessibility and reasonable language coverage in scope for the actual affected audience.
- [ ] Preserve why a structured machine-readable notice was or was not considered appropriate.

## P0 gate 5: CK-Labs cannot promise that only CK-Labs will communicate the incident

CRA Article 14(8) states that where the manufacturer fails to inform users in a timely manner, the notified **CSIRTs designated as coordinators may provide the information to users** when that is considered proportionate and necessary to prevent or mitigate the impact.

Operational consequence:

- [ ] Do not tell players, researchers, providers, or staff that a CRA incident will remain confidential simply because CK-Labs prefers to control the announcement.
- [ ] Do not draft settlement, support, or incident language that purports to prevent a competent CSIRT from exercising its statutory role.
- [ ] If a CSIRT plans to inform users, coordinate factual accuracy where possible, but do not obstruct a lawful notice.
- [ ] Reconcile any CSIRT communication with CK-Labs' own correction/mitigation instructions so players are not given contradictory remediation steps.

This is separate from whether a specific vulnerability detail can lawfully have delayed dissemination within the SRP under the CRA's exceptional cybersecurity-related mechanisms.

## P0 gate 6: Article 17(2) public-awareness authority

For a **severe incident**, the CRA provides an additional public-awareness route. Where public awareness is necessary to prevent or mitigate the severe incident, to handle an ongoing incident, or where disclosure is otherwise in the public interest, the relevant coordinator CSIRT may, after consulting the manufacturer and where appropriate in cooperation with ENISA:

- inform the public about the incident; or
- require the manufacturer to do so.

For TycoonX:

- [ ] treat a valid Article 17(2) communication from the coordinator as a separate incident-response workstream;
- [ ] verify the authority and scope of the communication before disclosing unnecessary information;
- [ ] provide accurate facts and user mitigations without turning the notice into marketing;
- [ ] do not promise absolute secrecy to a provider or researcher where mandatory/public-interest disclosure can lawfully occur;
- [ ] use the CRA sensitivity and secure-dissemination mechanisms where applicable instead of assuming they create a unilateral CK-Labs veto over lawful public disclosure.

Article 17(2) does not authorize CK-Labs to publish another user's personal data, payment details, private messages, credentials, or unrelated evidence. The disclosure must remain limited to what is lawful and necessary for the incident communication.

## P0 gate 7: Third-party voluntary reports can create an urgent inbound signal

CRA Article 15 allows manufacturers and other natural or legal persons to make voluntary vulnerability and incident reports. If a person other than the manufacturer reports an **actively exploited vulnerability** or **severe incident**, the coordinator CSIRT must inform the manufacturer without undue delay.

For CK-Labs:

- [ ] treat an authenticated coordinator-CSIRT message about a third-party report as an urgent security signal;
- [ ] immediately assess whether CK-Labs has reached the Article 14 awareness threshold and start the applicable clocks when it has;
- [ ] do not treat the third-party allegation as automatically proven merely because it came through the CRA channel;
- [ ] preserve the original notice, authenticity verification, investigation evidence, awareness decision, and resulting report/user-notice steps;
- [ ] keep spoofed regulator or CSIRT messages in the phishing/fake-authority workflow until independently verified.

A third-party report is not a reason to delete unrelated paid entitlements, suspend an unrelated account, or publicly identify a reporter without a lawful basis.

## P0 gate 8: Apple, Google Play, Xsolla and infrastructure providers remain separate roles

Provider security alerts can be important evidence, but they do not replace the CRA manufacturer analysis.

### Apple

Apple may provide App Store, account, StoreKit, server-notification, review, security, or platform information. That can trigger investigation, but Apple is not automatically the TycoonX CRA coordinator, manufacturer, or Article 14 reporting endpoint.

### Google Play

Google may provide Play integrity, billing, account, developer-console, security, or policy information. That does not make the Google Play storefront the manufacturer's CRA main establishment or replace a required SRP notification.

### Xsolla

Xsolla may process webshop payments, merchant-of-record functions, fraud screening, refunds, chargebacks, or payment-security incidents. An Xsolla legal entity shown on a receipt does not by itself become the TycoonX CRA manufacturer or determine the Article 14(7) reporting Member State.

### Cloud, authentication, analytics and communications providers

A provider's data-centre location, corporate headquarters, incident-response team, or contractual governing law does not by itself determine where CK-Labs predominantly takes TycoonX cybersecurity decisions.

- [ ] Record provider incidents and provider-side reporting separately.
- [ ] Escalate provider facts into the CRA analysis when they materially affect TycoonX product security.
- [ ] Do not assume a provider filed CK-Labs' CRA manufacturer report unless the legal role and filing are actually verified.

## P0 gate 9: Paid entitlements stay isolated during CRA routing and communication

A CRA report, CSIRT route, security notice, or public-awareness event does not itself change a purchase transaction.

- [ ] Do not delete or duplicate legitimately purchased **Diamonds** merely because an account, server, region, or provider appears in a security incident.
- [ ] Do not restart, pause, shorten, extend, or duplicate the original one-time **30-Day VIP** period merely because security access is temporarily restricted.
- [ ] Do not create a hidden expiry for valid **Lifetime VIP**, downgrade it to 30-Day VIP, or require a new purchase merely because an incident requires account recovery, provider migration, or a security hotfix.
- [ ] Do not replay Apple, Google Play, or Xsolla entitlement events while restoring from a security incident.
- [ ] If an exploit actually created invalid Diamonds, entitlement duplication, unauthorized transfers, or fraudulent purchases, correct only the affected state using reliable authoritative evidence and preserve mandatory consumer/payment remedies.
- [ ] Keep a security containment action separate from a refund, chargeback, store revocation, Terms sanction, or account-compromise correction unless the evidence supports both.

## P0 gate 10: Minimum evidence packet

For every reportable event, preserve enough evidence to reconstruct both the legal route and the communication decisions.

### Routing evidence

- manufacturer/operator identity at the time;
- why that entity is the CRA manufacturer;
- where product-cybersecurity decisions were predominantly taken;
- if that could not be determined, the relevant Union employee-count evidence;
- if there was no Union main establishment, the authorised-representative, importer, distributor, and user-count fallback analysis in statutory order;
- selected coordinator CSIRT and electronic endpoint;
- date/time the route was checked; and
- any later structural change that changed the route.

### Reporting evidence

- first reliable awareness timestamp;
- 24-hour, 72-hour, intermediate, and final submissions as applicable;
- SRP acknowledgements and follow-up requests;
- whether information was marked sensitive and why;
- any delayed-dissemination request or decision; and
- any third-party/CSIRT notification that caused investigation.

### User/public communication evidence

- impacted-user population and rationale;
- whether all users were included and why;
- human-readable notice versions and timestamps;
- machine-readable/structured representation where used;
- the recorded "where appropriate" decision for machine-readable communication;
- mitigation instructions;
- any CSIRT-provided user notice;
- any Article 17(2) public-awareness request or publication; and
- corrections, translations, accessibility adjustments, and final closure notice where appropriate.

## Regression scenarios

Release/incident tabletop tests should include at least these cases:

1. **Cybersecurity decisions clearly taken in Germany:** the German coordinator route is documented from the predominant-decision test rather than from server location.
2. **Predominant decision Member State genuinely indeterminable:** the highest-employee Union establishment fallback is used and evidenced.
3. **No Union main establishment, authorised representative exists:** the authorised-representative step is assessed first.
4. **No applicable authorised representative, importer controls highest product volume:** importer route is used before distributor or user-count fallback.
5. **No applicable representative/importer, distributor controls highest product volume:** distributor route is used before user count.
6. **Only user-count fallback resolves the route:** the largest Member State user population is documented and the continuity option for later reports is preserved.
7. **Cloud moved to Ireland:** route does not change solely because hosting moved.
8. **Xsolla merchant entity changes:** route does not change solely because the webshop merchant or payment entity changes.
9. **Apple or Google storefront changes:** storefront selection does not determine CRA establishment.
10. **Future business sale or successor operator:** manufacturer and Article 14(7) route are reassessed prospectively without rewriting prior valid reports.
11. **Actively exploited authentication bypass:** SRP clocks and Article 14(8) user-notice assessment run in parallel.
12. **Impacted version can be identified:** notice reaches that population and explains the safe version/mitigation.
13. **Impact cannot reliably be bounded:** assess notifying all users rather than silently restricting the notice to a guessed subset.
14. **Machine-readable communication is appropriate:** structured version contains stable incident/version/mitigation fields without secrets or unnecessary personal data.
15. **CK-Labs user communication is materially late:** incident plan recognises that a coordinator CSIRT may inform users when proportionate and necessary.
16. **Severe ongoing incident creates public-interest need:** Article 17(2) public-awareness handling is triggered without promising absolute secrecy.
17. **Third party reports through a coordinator CSIRT:** authenticity is verified, awareness is assessed promptly, but the allegation is not treated as automatic proof.
18. **Provider webhook or incident callback retries:** reporting/communication retries remain idempotent and do not replay Diamonds or VIP entitlements.
19. **Temporary account lockdown:** security containment does not alter valid Lifetime VIP or restart 30-Day VIP.
20. **Exploit actually created invalid paid-looking value:** only the evidenced invalid state is corrected; unrelated purchases remain intact.

## Canonical-document and localization trigger

This companion gate does **not** by itself change the current public contractual meaning of the TycoonX Terms of Service, Purchases & Refunds Policy, Privacy Policy, or Community Standards. It therefore does not reopen the completed 25-locale localization queue.

Reopen only the affected localized document type if CK-Labs later makes a **material public legal change**, for example by adding a new contractual security-notice obligation, changing the legal operator, changing a public support/security contact in a way that is part of the canonical legal text, or materially changing player remedies or entitlement rules.

Operational routing records, SRP screenshots, internal incident worksheets, and incident-specific notices are not a reason to retranslate all four legal documents unless the canonical public legal meaning changes.

## Release invariant

This gate is satisfied only when CK-Labs can answer, without improvising during an incident:

1. **Which coordinator CSIRT receives the report and why?**
2. **What exact awareness timestamp controls the clock?**
3. **Which users must be told, through which channels, and what mitigation can they take?**
4. **Was a structured, machine-readable user communication appropriate?**
5. **Can a coordinator CSIRT lawfully communicate to users or the public if the statutory conditions are met?**
6. **Can CK-Labs complete all of that without destroying or duplicating unrelated Diamonds, 30-Day VIP, Lifetime VIP, refunds, chargebacks, or provider entitlements?**

If any answer depends on guessing during a live security event, the operational CRA reporting path is not release-ready.
