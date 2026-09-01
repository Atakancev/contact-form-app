# TycoonX DSA Articles 11 and 12 Contact-Points Release Gate

Last reviewed: September 1, 2026
Owner: CK-Labs
Scope: TycoonX community, UGC, chat, support, moderation and other features that qualify as intermediary services under Regulation (EU) 2022/2065 (Digital Services Act, DSA).

## Purpose

TycoonX already has detailed DSA gates for illegal-content notices, statements of reasons, moderation redress, misuse and transparency reporting. This gate closes a separate basic due-diligence requirement: where TycoonX provides an intermediary service, CK-Labs must have public, usable contact points for both competent authorities and recipients of the service.

This gate does not assume that every TycoonX feature is an intermediary service. Classification remains feature-specific. However, public UGC, chat or similar hosting functionality should not be released on the assumption that Articles 11 and 12 disappear merely because CK-Labs is a small developer.

## P0: DSA Article 11 authority contact point

Where Article 11 applies, CK-Labs must designate a **single point of contact** that enables direct electronic communication with:

- Member State authorities;
- the European Commission; and
- the European Board for Digital Services.

The information necessary to identify and communicate with that point of contact must be public, easily accessible and kept current.

### Current TycoonX authority contact

Until CK-Labs deliberately replaces it with another public address, the production TycoonX Support page designates:

- **Email:** `cevikdev@gmail.com`
- **Purpose:** DSA communications from Member State authorities, the European Commission and the European Board for Digital Services
- **Languages accepted for Article 11 communications:** German and English

The public page must not hide this information only inside a long Terms document, require login to view it, or present an address that is not actually monitored.

German must remain accepted because CK-Labs is established in Germany. English may also be accepted as the broadly understood additional language. If the main establishment changes, re-check the Article 11 language requirement instead of assuming the same language set remains sufficient.

### Authority-message handling

- Monitor the authority contact reliably enough that formal DSA communications are not lost in an ordinary support queue.
- A subject label such as `DSA Authority` can help routing, but a message must not be ignored merely because the sender omitted that label.
- Before disclosing account or player data, verify the authority, legal basis, scope and authenticity of the request as appropriate.
- Preserve the request, response, legal basis and relevant timestamps where necessary for compliance and legal claims.
- Do not disclose unrelated player data merely because the sender claims to be an authority.
- Escalate orders or requests under DSA Articles 9 or 10, criminal-process requests, emergency life/safety cases and other compulsory legal processes to the correct legal workflow rather than treating them as ordinary support tickets.

The Article 11 contact point is a communication channel. It is not a blanket authorization for every authority request and does not remove applicable procedural, confidentiality, data-protection or jurisdiction safeguards.

## P0: DSA Article 12 recipient contact point

Where Article 12 applies, CK-Labs must designate a **single point of contact** allowing recipients of the service to communicate directly and rapidly with CK-Labs by electronic means in a user-friendly manner.

The recipient must be allowed to choose the means of communication, and the available route must **not rely solely on automated tools**.

### Current TycoonX recipient contact

The public TycoonX Support page provides both:

1. the Support web form; and
2. direct email to `cevikdev@gmail.com`.

These routes may feed the same support operation, but the player must remain able to choose the route. A chatbot, AI triage or automated acknowledgement can assist intake, but it must not become the only way a recipient can communicate with CK-Labs where Article 12 applies.

The Support page should clearly identify these routes as the DSA recipient contact point for relevant TycoonX intermediary/community services and state that communications are capable of human review.

## Article 12 is not the Article 16 illegal-content mechanism

Do not confuse the general recipient contact point with the separate DSA Article 16 notice-and-action mechanism.

A general support form or mailbox does **not automatically prove Article 16 compliance**. Where a TycoonX feature is a hosting service, the Article 16 flow still needs the applicable structured elements, including a sufficiently substantiated explanation, a precise electronic location of the allegedly illegal information, reporter contact information where required, the statutory good-faith statement and the required receipt/decision handling.

Operationally:

- a player may use the Article 12 contact point for general DSA questions or complaints;
- if the communication is actually an Article 16 illegal-content notice, route it into the Article 16 workflow without forcing the reporter to start over where the necessary information is already available;
- if required Article 16 information is missing, request only the missing information that is reasonably necessary;
- do not falsely tell users that sending a generic support message is the only legally available notice route; and
- do not falsely label every Community Standards report as an allegation of illegal content.

## Articles 17, 18, 20 and 21 remain separate

The contact points do not replace other DSA workflows.

- **Article 17:** if a hosting-service restriction requires a statement of reasons, the reason must still be provided at the legally required time and with the required substance.
- **Article 18:** information giving rise to suspicion of a criminal offence involving a threat to life or safety must use the emergency authority-escalation workflow rather than waiting in a normal support queue.
- **Article 20:** if the online-platform internal complaint system applies, a generic Support email is not a substitute for the required complaint-handling system.
- **Article 21:** where applicable, certified out-of-court dispute settlement remains separate from ordinary Support correspondence.

## Micro/small-enterprise status does not erase Articles 11 and 12

Articles 11 and 12 sit in DSA Chapter III, Section 1, which applies to providers of intermediary services generally. The online-platform micro/small-enterprise exemption in Article 19 concerns additional Section 3 duties and must not be used as a shortcut to ignore Articles 11 or 12.

CK-Labs should still document its current enterprise-size status because that status matters for other DSA obligations, but the contact-point release gate is not passed merely by writing `micro enterprise` in an internal note.

## Security, privacy and anti-abuse safeguards

A public contact point creates its own abuse and security risks. The safe approach is to keep the channel usable without treating every inbound claim as authoritative.

- Do not ask users or authorities to send passwords, card PINs, CVVs, full authentication secrets, one-time codes or backup codes.
- Minimize identity and transaction data to what is reasonably necessary for the issue.
- Protect reporter and third-party identities where disclosure is not legally required or strictly necessary.
- Do not expose internal anti-fraud detection logic merely because a user used the DSA contact point.
- Spam filtering may be used, but it must not be configured so aggressively that legitimate authority or recipient communications are systematically discarded.
- A suspicious attachment or phishing attempt can be quarantined without treating the underlying sender as having no right to contact CK-Labs.
- Keep human review available for escalated or substantive recipient communications where Article 12 applies.

## Provider outage, migration and business-transfer continuity

The DSA contact point must survive ordinary provider changes.

If CK-Labs replaces the email provider, support form, hosting provider or customer-support tooling:

1. keep the old public contact route working or forwarding for a reasonable transition where feasible;
2. update the public Support page promptly;
3. test both recipient and authority contact routes before retiring the old route;
4. preserve necessary open-case history and timestamps lawfully;
5. do not lose pending moderation, illegal-content or authority communications merely because a SaaS provider changed; and
6. re-check privacy disclosures and processor/transfer safeguards where a new provider processes personal data.

A sale, merger, reorganization or successor operator must similarly preserve a working public DSA contact route while the relevant TycoonX intermediary service continues.

## Paid-entitlement isolation

Using, failing to use, or disputing something through a DSA contact point does not itself change a paid TycoonX transaction.

- A DSA complaint must not automatically remove unrelated purchased Diamonds.
- A DSA contact request must not restart, shorten or duplicate a valid one-time 30-Day VIP period.
- A DSA complaint must not create a hidden expiry for Lifetime VIP or convert it into 30-Day VIP.
- Filing a DSA complaint is not evidence of chargeback abuse, fraud, exploit use or account compromise.

A separate, valid payment refund/reversal, proven exploit, Terms breach or lawful enforcement decision can still be handled under its own evidence and rules.

## Release test matrix

Before treating this gate as production-ready, verify at least:

1. an ordinary player can find the DSA recipient contact information without signing in;
2. the player can choose between the web form and direct email;
3. a substantive message can reach human review and is not trapped behind an automated-only flow;
4. an authority can find the Article 11 email publicly and see that German and English are accepted;
5. an authority message without the preferred subject label is still triaged correctly;
6. a forged authority email is verified before sensitive data is disclosed;
7. an Article 16 illegal-content notice arriving through general Support is recognized and routed appropriately;
8. an Article 18 life/safety escalation is not left in the normal support queue;
9. a support-provider or email-provider outage has a documented fallback/recovery path;
10. a change of contact address updates the public page before the old address is abandoned; and
11. a DSA complaint leaves unrelated Diamonds, 30-Day VIP and Lifetime VIP untouched.

## Evidence to retain

Keep lightweight, dated evidence of:

- the public Support page showing Article 11 and Article 12 contact information;
- the date the contact details and languages were last verified;
- monitoring/triage ownership for the inbox and form;
- a test proving the form reaches the support operation;
- a test proving direct email reaches the support operation;
- a test showing a recipient can obtain human review;
- the Article 16 routing procedure;
- the Article 18 emergency escalation procedure;
- contact-provider migration/fallback instructions; and
- the DSA feature-classification and enterprise-size assessment used for other duties.

Do not retain unnecessary personal messages merely to prove that the contact point works.

## Current legal checkpoint

Reviewed against Regulation (EU) 2022/2065 on September 1, 2026:

- **Article 11(1):** providers of intermediary services designate a single point of contact for direct electronic communication with Member State authorities, the Commission and the Board;
- **Article 11(2):** the identifying/contact information must be public, easily accessible and kept up to date;
- **Article 11(3):** the provider specifies accepted official language(s), including at least one official language of the Member State of its main establishment/legal representative, in addition to a language broadly understood by the largest possible number of Union citizens;
- **Article 12(1):** recipients get a single point of contact for direct and rapid electronic communication in a user-friendly manner, including a choice of communication means that does not rely solely on automated tools;
- **Article 12(2):** the recipient contact information must be public, easily accessible and kept up to date; and
- **Recital 43:** recipient contact may use accessible means such as email, electronic forms, chatbots or instant messaging, but recipients must have a direct and efficient option that is not solely automated.

## Founder-protective interpretation

This gate does not require CK-Labs to maintain a call center, promise instant answers, accept unsafe attachments, waive moderation rules, disclose confidential fraud logic, comply blindly with unauthenticated authority claims, or leave abusive users unrestricted. It requires a real, findable and monitored electronic contact route with human-accessible recipient communication, correct authority-language information and proper routing into the other DSA workflows where those rules apply.
