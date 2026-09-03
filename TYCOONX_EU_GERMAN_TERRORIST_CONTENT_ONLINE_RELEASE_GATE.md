# TycoonX EU/German Terrorist Content Online Release Gate

Last reviewed: September 3, 2026  
Owner/operator: CK-Labs  
Scope: TycoonX public UGC/community features that may qualify as hosting services disseminating user-provided information to the public under Regulation (EU) 2021/784 (Terrorist Content Online Regulation, TCO Regulation) and Germany's Terroristische-Online-Inhalte-Bekämpfungs-Gesetz (TerrOIBG).

TycoonX went to full release on September 1, 2026. This is an operational compliance gate for the live service. It does not claim that every TycoonX communication feature falls within the TCO Regulation and is not a substitute for case-specific legal advice.

## Why this gate exists

The TCO Regulation has applied since June 7, 2022. It creates a specialized process for terrorist content disseminated to the public through qualifying hosting services. It sits alongside, rather than replacing, the Digital Services Act (DSA), criminal law, GDPR, the Community Standards, Apple/Google platform rules, and ordinary TycoonX moderation.

For CK-Labs, the highest-risk failure would be receiving a valid removal order and treating it like an ordinary support ticket. A qualifying TCO removal order can require removal or disabling access across all EU Member States within one hour of receipt.

The founder-protective model is therefore to classify the feature first, authenticate and timestamp legal orders, execute valid orders within the statutory clock, preserve review and evidence safeguards, avoid unnecessary over-removal, and keep payment/entitlement state separate from content enforcement.

## P0: classify each TycoonX surface first

The TCO Regulation applies to hosting service providers offering services in the Union insofar as they disseminate information to the public at the request of the content provider.

Assess each TycoonX surface separately. Potentially relevant examples, depending on the production design and audience, include:

- public global chat or public community channels;
- public player profiles or profile text;
- public company, union or listing descriptions;
- publicly displayed player art, music, books or other creative uploads;
- public comments, posts or forums; and
- public images, audio or other UGC made available at the player's request.

Do not assume the whole game is in scope because one feature is. Conversely, do not assume a gaming service is outside scope merely because its main purpose is economic simulation. The Bundesnetzagentur's current guidance expressly lists gaming platforms among examples that can qualify where the statutory hosting and public-dissemination elements are met.

### Private communications are different

The Regulation's recitals distinguish interpersonal communications such as email and private messaging from public dissemination. A genuinely private one-to-one or selected-recipient message is therefore not automatically a TCO public-dissemination surface.

Operational rules:

- document whether a TycoonX communication is public, automatically open to a potentially unlimited audience, or limited by genuine human selection;
- do not convert a private-message classification into a public-hosting conclusion merely because the message is stored on a server; and
- re-audit if TycoonX changes audience controls, discoverability, auto-join behavior, public sharing, reposting, embeds or web visibility.

## Protected lawful material must not be mislabeled

The Regulation excludes material disseminated to the public for educational, journalistic, artistic or research purposes, or for preventing/countering terrorism, where its true purpose supports that characterization. Polemic or controversial views in public debate are not automatically terrorist content.

This is relevant to TycoonX creative features. Do not automatically remove an artwork, book, music item, historical discussion, news discussion, satire or other controversial content as terrorist content merely because it depicts, quotes or discusses terrorism.

The assessment must be contextual and proportionate. Community Standards can independently restrict content for another valid reason, but that is a separate moderation basis and should be recorded as such.

## P0: one-hour removal-order clock

Under Article 3, a valid removal order requires the identified terrorist content to be removed or access to it disabled in all EU Member States as soon as possible and in any event within **one hour of receipt**.

The production workflow must preserve at least:

- exact receipt timestamp, including timezone/offset;
- sending authority and authenticated sender/channel evidence;
- order/case reference;
- exact content locator, URL, object ID, message ID or equivalent TycoonX identifier;
- account/content owner identifier where lawfully relevant;
- required EU territorial scope;
- action taken and exact action timestamp;
- feedback sent to the competent authority using the required process/template;
- any legal review or cross-border scrutiny request; and
- any later reinstatement decision.

Do not start the one-hour timer when a moderator happens to open the ticket. Preserve the legally relevant receipt time.

## First-order 12-hour advance information is not a grace period

Where a competent authority has not previously issued a removal order to the hosting service provider, Article 3(2) generally requires the authority to provide information on applicable procedures and deadlines at least **12 hours before issuing the first removal order**, except in duly justified emergencies.

This does **not** convert the one-hour execution rule into a 13-hour period. Once the removal order itself is received, the one-hour clock applies.

If CK-Labs receives advance procedural information, verify it immediately, put the responders on alert, verify access to moderation/admin controls, test the authority feedback route, and prepare for the possible order rather than waiting until the clock starts.

## Authenticate the order without wasting the statutory clock

TCO orders are transmitted electronically to the Article 15 contact point through a channel capable of creating a written record and supporting authentication of the sender and receipt time.

Authority impersonation and phishing are foreseeable. Required safeguards include:

- preserve the original message and transport/header evidence where available;
- verify the authority, order reference and authenticated channel;
- never send passwords, card credentials, OTPs, API secrets or unrelated player data because a message says `urgent`;
- use an independently known official channel for verification where authenticity is genuinely doubtful and verification can be performed without avoidable delay;
- distinguish a TCO removal order from a DSA Article 9 order, ordinary user report, police inquiry, lawyer letter, Apple/Google complaint or platform moderation request; and
- keep the emergency escalation route usable before an order arrives.

## Germany: BKA and Bundesnetzagentur have different roles

Under the current German TerrOIBG allocation:

- the **Bundeskriminalamt (BKA)** is responsible for issuing removal orders and scrutinizing removal orders under Articles 3 and 4; and
- the **Bundesnetzagentur** supervises Article 5 specific measures and imposes penalties under Article 18.

Do not treat a generic Bundesnetzagentur communication as though it were automatically a BKA removal order. Do not ignore a legitimate Bundesnetzagentur Article 5 supervision request merely because it is not itself the German removal-order authority.

## Cross-border orders: comply first, preserve scrutiny rights

A removal order can come from a competent authority in another EU Member State. The one-hour rule still applies.

Where the Article 4 cross-border procedure applies:

- execute the valid order within the statutory clock;
- preserve the right to request scrutiny by the competent authority in the Member State of CK-Labs' main establishment;
- record the **48-hour** deadline for a reasoned scrutiny request where applicable;
- preserve the authority's **72-hour** scrutiny timeline;
- be technically able to reinstate the content if the order later ceases to have legal effect; and
- avoid irreversible destruction where disabling access plus lawful preservation can satisfy the order and preserve review rights.

## Force majeure, technical impossibility and manifest errors

The Regulation provides narrow procedures where compliance is impossible because of force majeure or de facto impossibility not attributable to the provider, including objectively justifiable technical or operational reasons, and where an order contains manifest errors or lacks enough information.

If one applies:

- inform the issuing authority without undue delay using the applicable Annex III process;
- state the actual reason rather than a generic `technical issue`;
- preserve outage/error evidence and timestamps;
- continue remediation and comply as soon as the obstacle is resolved; and
- never alter the original receipt timestamp to make late execution appear timely.

A hosting/cloud outage, authentication-provider failure, moderation-admin outage or staff unavailability needs a documented fallback. Avoidable lack of preparation should not be treated as force majeure.

## Article 6 preservation: removal is not the same as destruction

Content and related data removed or disabled because of an Article 3 removal order or Article 5 specific measure can require preservation for administrative/judicial review, complaint handling, or prevention/detection/investigation/prosecution of terrorist offences.

Article 6 uses a **six-month** preservation period from removal/disablement, with a further specified period possible on request by a competent authority or court where the statutory conditions are met.

Operational safeguards:

- preserve only content and related data required by the applicable purpose/legal basis;
- segregate preserved evidence from user-visible content;
- strictly limit staff access;
- protect sensitive evidence with appropriate technical and organizational safeguards;
- record legal basis, start date, scheduled review/deletion date and any lawful extension;
- do not turn a TCO preservation event into indefinite retention of the user's whole account; and
- coordinate preservation with GDPR storage limitation, legal holds and security controls.

## Article 10 complaints: two-week outcome clock

Article 10 applies to content removed or disabled as a result of Article 5 specific measures. It requires an effective and accessible complaint mechanism for the affected content provider.

The provider must examine the complaint expeditiously, restore content/access without undue delay where removal was unjustified, and inform the complainant of the outcome **within two weeks of receipt of the complaint**. If the complaint is rejected, the provider must give reasons.

Preserve:

- what was removed/disabled and why;
- whether automation materially contributed;
- complaint timestamp;
- review evidence and human review where appropriate;
- decision and reason;
- outcome-notification timestamp; and
- reinstatement timestamp where applicable.

Do not design an anti-terrorism system with no correction path for false positives. At the same time, the complaint process does not require disclosure of confidential authority information, security-sensitive anti-abuse methods or information lawfully withheld.

## Article 11 information to content providers

A TCO removal/disablement is not automatically secret. Article 11 generally requires the hosting service provider to make information about the removal/disablement available to the content provider. On request, the provider must either explain the reasons and the right to challenge the removal order or provide a copy of the removal order.

There is an important public-security exception. Where the issuing competent authority decides that non-disclosure is necessary and proportionate for public-security reasons, CK-Labs must respect that direction. Under Article 11(3), the non-disclosure period is limited to the statutory period and may be extended only as the Regulation permits.

Operationally:

- store whether user notification is permitted, delayed or prohibited;
- do not notify early where a valid order requires lawful non-disclosure;
- do not keep a case secret forever merely because it was initially restricted;
- preserve the legal basis and expiry/review time for non-disclosure; and
- ensure the later user-facing explanation does not reveal unrelated third-party personal data or sensitive investigative information.

## Article 5: special duties only after a formal exposure decision

Do not treat one offensive post, one user report or one removal order as automatically making TycoonX an `exposed` provider under Article 5.

Exposure follows a decision by the competent authority based on objective factors. The Regulation identifies, as an example, receipt of two or more final removal orders in the previous 12 months.

If CK-Labs receives a formal exposure decision:

- record the decision and effective date;
- review whether canonical Community Standards/Terms need a specific terrorist-content misuse provision;
- if player-facing canonical meaning changes, reopen and synchronize the affected document type across all 25 locales;
- choose appropriate, effective and proportionate specific measures;
- preserve human oversight and verification for technical/automated measures;
- avoid a general monitoring obligation or blanket scanning promise;
- submit the required specific-measures report within **three months** of the decision and annually thereafter while the obligation remains active; and
- request review/revocation when objective conditions later support that the service is no longer exposed.

The choice of measures remains with the hosting service provider, subject to the Regulation and authority supervision. Do not volunteer a permanent, expensive or privacy-invasive monitoring system if a narrower effective measure is sufficient.

## Article 15 contact point: the one-hour workflow must actually be reachable

A qualifying hosting provider must designate or establish a contact point for electronic receipt and expeditious processing of TCO removal orders and make the contact-point information publicly available.

The operational record should include:

- monitored electronic address/channel;
- official languages in which it can be addressed;
- primary and backup CK-Labs responders;
- nights/weekends/holidays escalation instructions;
- order-authentication procedure;
- access to moderation/removal controls;
- Annex II/III response process; and
- fallback for email/provider outage.

If TycoonX is formally exposed to terrorist content, a public mailbox that is not actually monitored consistently is not a credible one-hour response system.

## Article 7 provider transparency reporting

Do not confuse provider reporting with **Article 8**, which concerns competent authorities' transparency reports.

Under Article 7, a hosting service provider that has taken action to address terrorist content, or was required to take action under the Regulation, in a given calendar year must make a public transparency report for that year available **before March 1 of the following year**.

The production evidence model must be capable of producing the required categories, including as applicable:

- measures used to identify/remove/disable terrorist content;
- measures addressing reappearance, including relevant automated tools;
- numbers of content items removed/disabled following orders or specific measures;
- non-executed orders and grounds;
- complaints and outcomes;
- administrative/judicial review proceedings; and
- reinstatements after review or complaint.

Do not mix TCO statistics with ordinary DSA moderation statistics without a mapping that prevents double counting. Do not include information in a public report where the Regulation excludes information that could prejudice ongoing prevention, investigation, prosecution or national-security interests.

## Imminent threat to life or suspected terrorist offence

Where CK-Labs becomes aware of terrorist content involving an imminent threat to life, the Regulation requires prompt authority notification under the applicable process. This is separate from the DSA Article 18 serious-criminal-offence escalation even though one incident may trigger both analyses.

Operationally:

- escalate immediately to the emergency legal/safety path;
- preserve the content locator and evidence;
- identify the Member State concerned where reasonably possible;
- use the statutory fallback route where it is not possible to identify the Member State concerned;
- do not warn a suspected offender in advance where doing so could endanger people, evidence or an investigation; and
- do not disclose unrelated account, purchase or private-message data merely because the content is serious.

No rule here creates a general obligation to proactively search all TycoonX content for criminal evidence.

## Separate TCO from DSA and ordinary moderation

A single item may trigger several workflows, but the legal bases and clocks must remain distinct:

- a Community Standards violation is not automatically terrorist content;
- a DSA Article 16 notice is not automatically a TCO removal order;
- a DSA Article 18 escalation does not replace a TCO one-hour removal order;
- a TCO removal order does not automatically authorize disclosure of all player information;
- TCO preservation does not automatically justify indefinite GDPR retention; and
- Apple/Google policy action does not itself prove a TCO legal finding by CK-Labs.

Where several regimes apply, preserve one incident timeline with separate legal clocks and actions.

## Apple, Google Play, Xsolla and infrastructure-provider boundary

Apple, Google Play, Xsolla, hosting/CDN providers, authentication vendors and other providers may receive separate orders or take independent policy action. Their action does not automatically satisfy CK-Labs' own obligation where CK-Labs is the relevant hosting provider and receives a valid TCO order.

- Do not forward an order containing unnecessary personal data merely because a vendor is in the stack.
- If CDN/hosting action is needed, preserve who performed it and when.
- Provider migration must not break the TCO contact point or moderation controls.
- Keep TCO evidence separate from Xsolla payment data unless transaction information is genuinely relevant to a lawful investigation.
- Do not treat a store/provider suspension as a substitute for removing specific ordered public content where CK-Labs still controls it elsewhere.

## Paid-entitlement isolation

A terrorist-content report, removal order or authority contact is not automatically evidence of payment fraud, entitlement abuse, chargeback abuse, regional-pricing abuse or an exploit.

Unless a valid legal order itself requires broader action or CK-Labs has a separate lawful basis under the Terms:

- removing public UGC must not wipe unrelated legitimately purchased Diamonds;
- it must not create a negative Diamond balance;
- it must not restart, extend, shorten or duplicate a legitimate one-time 30-Day VIP period;
- it must not add an expiry to valid Lifetime VIP;
- it must not convert Lifetime VIP into 30-Day VIP or Diamonds;
- it must not invent a refund, chargeback or payment reversal; and
- merely being named in an order must not automatically produce a fraud flag or permanent account ban.

Lifetime VIP remains a one-time entitlement offered only during selected genuine promotional sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous future sale availability.

If a valid order or separate lawful safety/Terms basis requires account suspension or termination, execute the justified restriction while keeping content enforcement, account enforcement and payment/entitlement correction separately auditable.

## Account compromise and impersonation

If terrorist content appears from a TycoonX account that may have been compromised:

- comply with a valid content-removal order regardless of who authored the content;
- separately investigate compromise using proportionate security evidence;
- secure the account where appropriate;
- do not automatically accuse the legitimate account owner of terrorism or fraud;
- preserve required evidence without keeping unrelated personal data indefinitely; and
- restore unrelated legitimate account access/entitlements where appropriate after the restriction ends.

A compromised account is not a reason to falsify who actually controlled the account at the relevant time.

## Old clients, outages and feature changes

The one-hour legal workflow must not depend on one current mobile client being online.

- Moderation must be server/admin capable where the architecture permits.
- An old unsupported client must not keep ordered public content available through a stale cache or legacy endpoint where CK-Labs can reasonably disable it.
- CDN/cache invalidation belongs in the removal test where content is cached.
- Provider outages must preserve receipt time, statutory clocks and eventual action evidence.
- Feature or storage migrations must preserve stable content identifiers needed to locate old public UGC.
- Permanent discontinuation of a community feature does not erase preservation or reporting duties already triggered.

## Business sale, merger or successor operator

A sale, merger, reorganization or successor transition must not orphan an open TCO order or Article 5 exposure decision.

Before control changes, inventory open orders, complaints, preservation holds, reporting duties and authority correspondence; preserve the Article 15 contact point; identify the responsible legal entity during cutover; transfer only legally necessary records; and confirm the successor can operate moderation controls before CK-Labs access is removed.

## Release test matrix

Before treating the workflow as production-ready, test at least:

1. A valid German BKA-style order reaches the monitored contact point and starts an immutable one-hour clock.
2. A cross-border order is executed while the 48-hour scrutiny-request option remains recorded.
3. A fake authority email does not receive credentials or unrelated player data.
4. An order with a manifest locator error follows the Annex III path promptly.
5. A real provider outage preserves the original receipt timestamp.
6. Ordered public content becomes inaccessible across relevant EU delivery/cache paths.
7. Removed content is preserved under the correct legal-hold rule rather than destroyed or retained forever.
8. A successful review can reinstate content.
9. Artistic, historical, news or satirical false positives receive contextual review.
10. An Article 5 complaint receives its outcome within two weeks and an unjustified removal can be restored.
11. Article 11 user information is sent when allowed and withheld only for the lawful non-disclosure period when ordered.
12. A TCO action does not mutate unrelated Diamonds, 30-Day VIP or Lifetime VIP.
13. A compromised account is secured without automatically labelling the legitimate owner a terrorist or payment fraudster.
14. DSA Article 16/17/18 workflows remain separately identifiable.
15. A formal Article 5 exposure decision triggers the three-month report timer, terms/localization review and annual follow-up.
16. Article 7 provider reporting can produce accurate counts before March 1 without double counting DSA moderation.

## Canonical/legal-localization rule

This operational gate does not by itself materially amend the canonical TycoonX Terms, Privacy Policy, Purchases & Refunds Policy or Community Standards.

If CK-Labs later receives an Article 5 exposure decision and changes player-facing Terms/Community Standards to add a specific terrorist-content misuse clause, or another TCO development materially changes canonical player-facing meaning:

1. update the canonical English source first;
2. reopen the corresponding document type for all 25 required locales;
3. translate the full legal meaning naturally rather than word-for-word;
4. preserve locale-specific style and Arabic RTL; and
5. update `TYCOONX_LEGAL_LOCALIZATION_PROGRESS.md` after synchronization.

Do not add an English-only clause and leave localized Community Standards legally stale.

## Official reference checkpoint

Re-check these official sources if the TCO workflow is activated or materially changed:

- Regulation (EU) 2021/784, especially Articles 1, 3-7, 9-12, 15, 17 and 18 and Annexes I-III.
- Bundesnetzagentur, `Terrorist Content Online`, including current German competence, provider-classification, specific-measures and provider-transparency guidance.
- Germany's TerrOIBG, especially the current BKA/Bundesnetzagentur competence and penalty rules.
- The then-current DSA and CK-Labs DSA gates, because TCO and DSA obligations can overlap but are not interchangeable.

The current checkpoint as of September 3, 2026 confirms that the TCO Regulation has applied since June 7, 2022; the BKA is the German removal-order/scrutiny authority; the Bundesnetzagentur supervises specific measures and penalties; qualifying removal orders carry the one-hour execution requirement; Article 10 complaints have a two-week outcome requirement; and provider transparency reporting sits in Article 7, not Article 8.
