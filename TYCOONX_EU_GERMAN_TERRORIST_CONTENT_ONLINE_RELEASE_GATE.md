# TycoonX EU/German Terrorist Content Online Release Gate

Last reviewed: September 3, 2026  
Owner/operator: CK-Labs  
Scope: TycoonX public UGC/community features that may qualify as hosting services disseminating user-provided information to the public under Regulation (EU) 2021/784 (Terrorist Content Online Regulation, TCO Regulation) and Germany's Terroristische-Online-Inhalte-Bekämpfungs-Gesetz (TerrOIBG).

TycoonX went to full release on September 1, 2026. This gate is operational legal hardening for the live service. It is not a statement that every TycoonX communication feature falls within the TCO Regulation, and it is not a substitute for case-specific legal advice.

## Why this gate exists

The TCO Regulation has applied since June 7, 2022. It creates a specialized process for terrorist content disseminated to the public through qualifying hosting services. It sits alongside, rather than replacing, the Digital Services Act (DSA), criminal law, GDPR, the Community Standards, Apple/Google platform rules, and ordinary TycoonX moderation.

For a small game operator, the highest-risk failure is not merely having objectionable content online. It is receiving a valid removal order and treating it like an ordinary support ticket. A valid TCO removal order can require removal or disabling access across all EU Member States within one hour of receipt.

The founder-protective model is therefore:

- classify the feature before applying the TCO workflow;
- maintain a real emergency legal-order intake path;
- authenticate the order and preserve receipt time;
- execute a valid order within the statutory clock;
- preserve the statutory review, complaint, evidence and fundamental-rights safeguards;
- do not over-remove unrelated lawful content or paid entitlements; and
- do not promise blanket monitoring of every TycoonX communication.

## P0: classify each TycoonX surface before treating it as TCO hosting

The TCO Regulation applies to hosting service providers offering services in the Union insofar as they disseminate information to the public at the request of the content provider.

For TycoonX, assess each surface separately. Public or potentially public user-created areas can be materially different from private communications.

Potentially relevant examples include, depending on the production design and audience:

- public global chat or public community channels;
- public player profiles or profile text;
- public company, union or listing descriptions;
- publicly displayed player art, music, books or other creative uploads;
- public comments, posts or forums;
- public images, audio or other UGC made available at the player's request.

Do not assume the entire game is in scope simply because one feature is. Conversely, do not assume a gaming service is outside scope merely because its main purpose is economic simulation. The Bundesnetzagentur's current TCO guidance expressly lists gaming platforms among services that can qualify where the statutory hosting/public-dissemination elements are met.

### Private communications

The Regulation's recitals distinguish interpersonal communications such as email and private messaging from public dissemination. A genuinely private one-to-one or selected-recipient message is therefore not automatically a TCO public-dissemination surface.

Operational rule:

- document whether a TycoonX communication is public, automatically open to an unlimited/potentially unlimited audience, or limited by genuine human selection;
- do not silently convert a private-message classification into a public-hosting conclusion merely because the message is stored on a server; and
- re-audit the classification if TycoonX changes audience controls, discoverability, auto-join behavior, public sharing, reposting, embeds or web visibility.

## Protected lawful material must not be mislabeled

The TCO Regulation excludes material disseminated to the public for educational, journalistic, artistic or research purposes, or for preventing/countering terrorism, where the true purpose supports that characterization. Polemic or controversial views in public debate are not automatically terrorist content either.

This matters for TycoonX because the game includes creative and social features. Do not automatically remove an artwork, book, music item, historical discussion, news discussion, satire or other controversial content as terrorist content merely because it depicts, quotes or discusses terrorism.

The assessment must be contextual and proportionate. Normal Community Standards may independently restrict content for another valid reason, but that is a separate moderation basis and should be recorded as such.

## P0: one-hour removal-order clock

Under Article 3, a valid removal order requires the identified terrorist content to be removed or access to it disabled in all EU Member States as soon as possible and in any event within **one hour of receipt**.

The production workflow must therefore preserve at least:

- exact receipt timestamp, including timezone/offset;
- sending authority and authenticated sender/channel evidence;
- order/case reference;
- exact content locator, URL, object ID, message ID or equivalent TycoonX identifier;
- account/content owner identifier where lawfully relevant;
- required EU territorial scope;
- action taken and exact action timestamp;
- feedback sent to the competent authority using the required form/process;
- any legal review or cross-border scrutiny request; and
- any later reinstatement decision.

Do not start the one-hour timer when a moderator happens to open the ticket. Preserve the legally relevant receipt time.

## First-order 12-hour advance information is not a grace period

Where a competent authority has not previously issued a removal order to the hosting service provider, Article 3(2) generally requires the authority to provide information on applicable procedures and deadlines at least **12 hours before issuing the first removal order**, except in duly justified emergencies.

This does **not** convert the one-hour execution rule into a 13-hour period. Once the removal order itself is received, the one-hour clock applies.

If CK-Labs receives advance procedural information:

- verify and record it immediately;
- place the relevant legal/moderation responders on alert;
- verify access to the affected moderation/admin controls;
- test the feedback templates and authority contact path; and
- do not wait for the later removal order before preparing the operational response.

## Authenticate the order without wasting the statutory clock

TCO orders are transmitted electronically to the Article 15 contact point through a channel capable of creating a written record and supporting sender authentication and receipt timing.

Authority impersonation and phishing are foreseeable. The same email inbox that can receive a valid one-hour order can also receive a fake demand for player data or credentials.

Required controls:

- preserve the original message and headers/transport evidence where available;
- verify the authority, order reference and authenticated channel;
- never send passwords, card credentials, OTPs, API secrets or unrelated player data merely because a message says `urgent`;
- use a known official channel for independent verification where authenticity is genuinely doubtful and verification can be performed without avoidable delay;
- distinguish a TCO removal order from a DSA Article 9 order, ordinary user report, police inquiry, lawyer letter, Apple/Google complaint or platform moderation request; and
- keep the emergency escalation route staffed/configured so authentication is not being invented from scratch after receipt.

## Germany: BKA and Bundesnetzagentur roles are different

For Germany, the current official division of responsibility under the TerrOIBG is important:

- the **Bundeskriminalamt (BKA)** is responsible for issuing removal orders and scrutinizing removal orders under Articles 3 and 4; and
- the **Bundesnetzagentur** supervises Article 5 specific measures and imposes penalties under Article 18.

Do not treat a generic Bundesnetzagentur communication as though it were automatically a BKA terrorist-content removal order. Likewise, do not ignore a legitimate Bundesnetzagentur supervision request concerning Article 5 measures merely because it is not itself the removal-order authority.

## Cross-border orders: comply first, preserve the scrutiny right

A removal order can come from a competent authority in another EU Member State. The one-hour removal/disablement requirement still applies.

Where the Article 4 cross-border procedure applies:

- execute the valid order within the statutory clock;
- preserve the right to request scrutiny by the competent authority in the Member State of CK-Labs' main establishment;
- record the **48-hour** deadline for a reasoned scrutiny request where applicable;
- preserve the authority's **72-hour** scrutiny timeline in the case file;
- be technically able to reinstate the content if the cross-border order later ceases to have legal effect; and
- do not make an irreversible data deletion the default if disabling access plus lawful preservation can satisfy the order and preserve review rights.

## Force majeure, technical impossibility and manifest errors

The Regulation contains procedures for situations in which compliance within one hour is impossible because of force majeure or de facto impossibility not attributable to the provider, including objectively justifiable technical or operational reasons. It also provides a process where an order has manifest errors or lacks enough information to execute.

These are narrow operational exceptions, not a convenience extension.

If one applies:

- inform the issuing competent authority without undue delay using the applicable Annex III process;
- state the actual reason rather than a generic `technical issue`;
- preserve outage/error evidence and timestamps;
- continue remediation and comply as soon as the obstacle is resolved; and
- never alter the original receipt timestamp to make a late execution appear timely.

A hosting/cloud outage, authentication-provider failure, moderation-admin outage or staff unavailability should have a documented fallback. Avoidable lack of internal preparation should not be treated as force majeure.

## Article 6 preservation: do not confuse removal with destruction

Content and related data removed or disabled under the Regulation may need to be preserved for review, complaint, investigation or prosecution purposes. The Regulation uses a **six-month** baseline preservation period, subject to the statutory rules and possible longer preservation requested by the competent authority or court.

Operational requirements:

- preserve only the content and related data required by the applicable legal basis;
- segregate preserved material from ordinary user-visible content;
- strictly limit employee access;
- protect especially sensitive or disturbing evidence;
- record the legal basis, start date, scheduled deletion/review date and any lawful extension;
- do not use TCO preservation as a justification for indefinite retention of the user's entire account; and
- coordinate the preservation rule with GDPR storage limitation, legal-hold requirements and security controls.

## Article 10 complaints and reinstatement

A content provider whose content was removed or disabled through specific measures under Article 5 must have the complaint protections required by the Regulation where they apply. The workflow must be capable of handling erroneous removals and reinstatement.

Do not design an anti-terrorism system with no path to correct false positives.

At minimum, preserve:

- what was removed/disabled;
- the basis for the action;
- whether automation was used;
- the complaint and its timestamp;
- human review where required/appropriate;
- the outcome and reason; and
- the reinstatement timestamp if the content is restored.

A TCO complaint process does not require CK-Labs to reveal sensitive anti-abuse methods, confidential authority information or information whose disclosure is lawfully restricted.

## Article 5: special duties only after a formal exposure decision

Do not treat one offensive post, one user report or one removal order as automatically making TycoonX an `exposed` provider under Article 5.

For Article 5, exposure follows a decision by the competent authority based on objective factors. The Regulation identifies, as an example, receipt of two or more final removal orders in the previous 12 months.

If CK-Labs receives a formal exposure decision:

- record the decision and effective date;
- review whether the canonical Community Standards/Terms need an explicit terrorist-content misuse provision;
- if canonical player-facing meaning changes, reopen and synchronize the affected clause across all 25 localized legal documents rather than editing English only;
- choose appropriate, effective and proportionate specific measures;
- preserve human oversight and verification for technical/automated measures;
- avoid a general monitoring obligation or blanket scanning promise;
- submit the required specific-measures report within **three months** of the decision and annually thereafter while the obligation remains active; and
- calendar a review/request for revocation if objective conditions later support that the service is no longer exposed.

The choice of specific measures remains with the hosting service provider, subject to the Regulation and competent-authority supervision. Do not volunteer a permanent, expensive or privacy-invasive monitoring architecture if a narrower effective measure is sufficient.

## Article 15 contact point: the one-hour workflow must be reachable

A qualifying hosting provider must designate or establish a contact point for electronic receipt and expeditious processing of TCO removal orders and make the contact-point information publicly available.

The contact-point record should include:

- monitored electronic address/channel;
- official languages in which it can be addressed, including at least the required language linked to the main establishment/legal representative;
- primary and backup CK-Labs responders;
- escalation instructions for nights/weekends/holidays;
- order-authentication process;
- access to moderation/removal controls;
- Annex II/III response process; and
- fallback for mail/provider outage.

If TycoonX is formally `exposed` to terrorist content, ensure the contact point can actually satisfy the round-the-clock operational expectation associated with the one-hour obligation. A public email address that nobody reads outside business hours is not a real one-hour response system.

## Article 8 transparency reporting

Where the Regulation requires a hosting provider transparency report, the report must accurately cover the required categories for the relevant reporting period. Zero events should be reported as zero where the reporting duty requires information even when there were no cases.

Preserve source data for, as applicable:

- removal orders and execution/non-execution outcomes;
- specific-measure removals/disabling;
- complaints and outcomes;
- administrative/judicial review proceedings;
- reinstatements following review; and
- reinstatements following complaints.

Do not mix TCO reporting statistics with ordinary DSA moderation statistics without a mapping that prevents double counting.

## Imminent threat to life or suspected terrorist offence

Where CK-Labs becomes aware of terrorist content involving an imminent threat to life, the Regulation requires prompt authority notification under the applicable process. This is separate from the DSA Article 18 serious-criminal-offence escalation even though a single event may trigger both legal analyses.

Operationally:

- escalate immediately to the emergency legal/safety path;
- preserve the content locator and evidence;
- identify the Member State concerned where reasonably possible;
- use the statutory fallback/contact route where it is not possible to identify the Member State concerned;
- do not warn a suspected offender in advance where doing so could endanger people, evidence or a lawful investigation; and
- do not disclose unrelated account, purchase or private-message data merely because the content is serious.

No rule here creates a general obligation to proactively search all TycoonX content for criminal evidence.

## Separate TCO from the DSA and ordinary moderation

A single item may trigger multiple workflows, but the records and legal bases should remain distinct.

- A normal Community Standards violation is not automatically terrorist content.
- A DSA Article 16 notice is not automatically a TCO removal order.
- A DSA Article 18 escalation does not replace a TCO one-hour removal order.
- A TCO removal order does not automatically authorize disclosure of all player information.
- A TCO-specific preservation duty does not automatically justify indefinite GDPR retention.
- Apple or Google removing content/app availability does not prove a TCO legal finding by CK-Labs.

Where several regimes apply, preserve one incident timeline with separate legal clocks and actions.

## Apple, Google Play, Xsolla and infrastructure-provider boundary

Apple, Google Play, Xsolla, hosting/CDN providers, authentication vendors and other third parties may receive their own legal orders or take independent policy action.

Their action does not automatically satisfy CK-Labs' own obligation if CK-Labs is the relevant hosting service provider and receives a valid TCO order.

Likewise:

- do not forward an authority order containing unnecessary personal data to a vendor merely because the vendor is involved somewhere in the stack;
- if a CDN/hosting provider is needed to disable access, preserve who performed the action and when;
- ensure provider migration does not break the TCO contact point or moderation controls;
- keep TCO evidence separate from Xsolla payment data unless transaction information is genuinely relevant to a lawful investigation; and
- do not treat a store/provider account suspension as a substitute for removing the specific ordered public content where CK-Labs still controls it elsewhere.

## Paid-entitlement isolation

A terrorist-content report, TCO removal order or authority contact is not automatically evidence of payment fraud, entitlement abuse, chargeback abuse, regional-pricing abuse or an exploit.

Unless a valid legal order itself requires broader action or CK-Labs has a separate lawful basis under the Terms:

- removing public UGC must not wipe unrelated legitimately purchased Diamonds;
- it must not create a negative Diamond balance;
- it must not restart, extend, shorten or duplicate a legitimate one-time 30-Day VIP period;
- it must not add an expiry to valid Lifetime VIP;
- it must not convert Lifetime VIP into 30-Day VIP or Diamonds;
- it must not invent a refund, chargeback or payment reversal; and
- merely being named in an order must not automatically produce a fraud flag or permanent account ban.

Lifetime VIP remains a one-time entitlement offered only during selected genuine promotional sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future sale availability. That sales rule is separate from enforcement against unlawful public content.

If a valid order or separate lawful safety/Terms basis requires an account suspension or termination, execute the justified restriction while maintaining a clear audit trail separating content enforcement, account enforcement and payment/entitlement correction.

## Account compromise and impersonation

If terrorist content appears from a TycoonX account that may have been compromised:

- comply with a valid content-removal order regardless of whether the legitimate account owner authored the content;
- separately investigate account compromise using proportionate security evidence;
- secure the account where appropriate;
- do not automatically accuse the legitimate account owner of terrorism or fraud;
- preserve required evidence without keeping unrelated personal data indefinitely; and
- restore unrelated legitimate account access/entitlements where appropriate after the security/legal restriction ends.

A compromised account is not a reason to falsify the record of who actually controlled the account at the relevant time.

## Old clients, outages and feature changes

The one-hour legal workflow must not depend on one current mobile client being online.

- Moderation must be server/admin capable where the controlled architecture permits.
- An old unsupported client must not be able to keep ordered public content available through a stale cache or legacy endpoint when CK-Labs can reasonably disable access.
- CDN/cache invalidation should be part of the removal test where public content is cached.
- Provider outages must preserve order receipt, statutory clocks and eventual action evidence.
- A feature rename, route migration or database/storage migration must preserve stable content identifiers needed to locate old public UGC.
- Permanent discontinuation of a community feature does not eliminate legal preservation or reporting duties already triggered before shutdown.

## Business sale, merger or successor operator

A sale, merger, reorganization or successor transition must not orphan an open TCO order or Article 5 exposure decision.

Before operational control changes:

- inventory open removal orders, complaints, preservation holds, reporting duties and authority correspondence;
- confirm which legal entity remains responsible during the cutover;
- maintain the Article 15 contact point through the transition;
- transfer legally necessary records securely where lawful;
- do not transfer unrelated player data merely because a legal-process file exists; and
- confirm the successor's moderation/admin access before disabling CK-Labs' access.

## Release test matrix

Before treating the TCO workflow as production-ready, test at least:

1. A valid German BKA-style order reaches the monitored contact point and starts an immutable one-hour clock.
2. A cross-border order is authenticated, executed, and the 48-hour scrutiny-request option is recorded without delaying execution.
3. A fake authority email does not receive credentials or unrelated player data.
4. An order with a manifest content locator error follows the Annex III clarification/impossibility path promptly.
5. A real hosting-provider outage preserves the original receipt time and evidence rather than resetting the clock.
6. Ordered public content is inaccessible across relevant EU delivery paths and stale cache/CDN copies are addressed.
7. Content is preserved under the correct legal-hold rule rather than immediately destroyed or indefinitely retained.
8. A successful review can reinstate content without reconstructing it from unsafe ad-hoc backups.
9. A false positive concerning artistic/historical/news content receives contextual human review.
10. A TCO action does not remove unrelated Diamonds, 30-Day VIP or Lifetime VIP.
11. A compromised account is secured without automatically labelling the legitimate owner a terrorist or payment fraudster.
12. DSA Article 16/17/18 workflows remain separately identifiable in the incident record.
13. The contact point and moderation controls still work during a support/email/provider migration.
14. A future formal Article 5 exposure decision triggers the three-month report timer, terms/localization review and annual follow-up.
15. Transparency reporting can produce accurate zero and non-zero counts without double counting ordinary DSA moderation.

## Canonical/legal-localization rule

This operational gate does not by itself materially amend the canonical TycoonX Terms, Privacy Policy, Purchases & Refunds Policy or Community Standards.

If CK-Labs later receives an Article 5 exposure decision and changes player-facing Terms/Community Standards to add a specific terrorist-content misuse clause, or if another TCO change materially changes canonical player-facing meaning:

1. update the canonical English source first;
2. reopen the corresponding document type for all 25 required locales;
3. translate the full legal meaning naturally rather than word-for-word;
4. preserve locale-specific style and Arabic RTL;
5. update `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md` after the synchronization is complete.

Do not silently add the English clause and leave localized Community Standards legally stale.

## Official reference checkpoint

Re-check these official sources if the TCO workflow is activated or materially changed:

- Regulation (EU) 2021/784 on addressing the dissemination of terrorist content online, especially Articles 1, 3-8, 10, 12, 15, 17 and 18 and Annexes I-III.
- Bundesnetzagentur, `Terrorist Content Online`, including current German competence, provider-classification, specific-measures and transparency guidance.
- Germany's Terroristische-Online-Inhalte-Bekämpfungs-Gesetz (TerrOIBG), especially the current allocation of BKA/Bundesnetzagentur responsibilities and penalty rules.
- The then-current DSA and CK-Labs DSA release gates, because TCO and DSA duties can overlap but are not interchangeable.

The current checkpoint as of September 3, 2026 confirms that the TCO Regulation has applied since June 7, 2022; the BKA is the German removal-order/scrutiny authority; the Bundesnetzagentur supervises specific measures and penalties; and qualifying removal orders carry the one-hour execution requirement.
