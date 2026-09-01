# TycoonX DSA Intermediary Liability & Authority Orders Release Gate

Last reviewed: September 1, 2026  
Owner: CK-Labs  
Scope: TycoonX community, chat, UGC, support and other features that qualify as intermediary or hosting services under Regulation (EU) 2022/2065 (Digital Services Act, DSA).

## Purpose

TycoonX already has release gates for DSA contact points, illegal-content notices, statements of reasons, emergency escalation, complaints, misuse and transparency reporting. This gate closes a different operational gap: the liability framework in DSA Articles 6 to 8 and the intake, verification and execution of authority orders under Articles 9 and 10.

The goal is to let CK-Labs moderate decisively and cooperate with legitimate authorities without making three dangerous mistakes:

1. assuming that voluntary moderation destroys the hosting liability exemption;
2. promising or implementing blanket monitoring of all user activity when the DSA imposes no general monitoring obligation; or
3. treating any email that claims to be from an authority as a valid order to remove content or disclose player data.

This is an operational compliance gate, not a promise that every TycoonX feature is legally classified as an intermediary or hosting service and not a substitute for case-specific legal advice.

## P0: classify the TycoonX feature first

For each social/community function, record whether CK-Labs is acting as:

- an intermediary service provider under the DSA;
- a hosting service because it stores information provided by a recipient at that recipient's request;
- an online platform because the hosting service additionally disseminates recipient-provided information to the public, subject to the statutory definition and exclusions; or
- a first-party game/service function outside those classifications.

Do not apply a hosting safe-harbour conclusion to first-party CK-Labs content merely because it appears inside the same app. Conversely, do not assume that chat or UGC falls outside the DSA merely because TycoonX is primarily a game.

## DSA Article 6: hosting liability exemption

Where Article 6 applies to information stored at the request of a recipient, the DSA hosting exemption is conditional. In simplified operational terms, CK-Labs should preserve the following model:

- CK-Labs does not have actual knowledge of illegal activity or illegal content and, for damages claims, is not aware of facts or circumstances from which illegality is apparent; or
- after obtaining the relevant knowledge or awareness, CK-Labs acts expeditiously to remove or disable access to the illegal content.

The exemption is not a contractual immunity from all legal responsibility. Article 6 also contains statutory limits, including where the recipient acts under CK-Labs' authority or control, and it does not prevent a judicial or administrative authority from requiring action in accordance with the applicable legal system.

### Operational consequence

- Do not write public legal copy promising that CK-Labs can never be liable for user content.
- Do not promise that every reported item will be removed merely because someone alleges illegality.
- Do not leave clearly illegal content untouched after the applicable knowledge/awareness threshold has actually been met.
- Preserve a timestamped record of the notice, evidence reviewed, decision, action and reason where needed for compliance or legal claims.
- Keep removal or access restriction targeted to the content/account/scope justified by the evidence and applicable law.

## Article 16(3): when a notice can create Article 6 knowledge

A TycoonX Article 16 notice does not automatically prove that the reported material is illegal merely because the reporter uses the word `illegal`.

Under Article 16(3), a notice is considered to give rise to actual knowledge or awareness for Article 6 with respect to the specific information concerned where the notice lets a diligent hosting provider identify the illegality **without a detailed legal examination**.

Therefore:

- route sufficiently precise and substantiated illegal-content notices promptly;
- assess the specific reported item rather than an entire account by default;
- distinguish obvious illegality from difficult, contested or context-dependent legal questions;
- escalate genuinely difficult legal questions where appropriate rather than inventing certainty;
- do not treat a vague report such as `this user is illegal` as equivalent to a valid, sufficiently substantiated notice; and
- do not deliberately demand unnecessary detail merely to avoid reaching the Article 16(3) threshold.

The separate Article 16 receipt, decision, redress and non-arbitrary-processing duties remain governed by the Community Moderation release checklist.

## DSA Article 7: voluntary moderation does not destroy the safe harbour by itself

CK-Labs may use good-faith, diligent voluntary own-initiative investigations and measures aimed at detecting, identifying, removing or disabling access to illegal content. Under Article 7, doing so does not **solely because of that activity** make the provider ineligible for the Articles 4 to 6 liability exemptions.

This is important for TycoonX anti-abuse and moderation systems:

- human moderation may review reports and suspicious public content;
- proportionate automated rules/classifiers may assist detection and prioritization;
- CK-Labs may investigate suspected scams, phishing, child-safety risks, credible threats or other serious abuse;
- CK-Labs may voluntarily remove or restrict content under the Community Standards where lawful; and
- CK-Labs may take measures required to comply with Union law or national law compatible with Union law.

Do not interpret Article 7 as permission for careless, discriminatory or arbitrary moderation. Existing Article 14, Article 17, GDPR, consumer, contractual and redress safeguards remain relevant where they apply.

## DSA Article 8: no general monitoring or active fact-finding obligation

The DSA says that providers of intermediary services are not to be subjected to a **general obligation to monitor** the information they transmit or store, or generally to actively seek facts or circumstances indicating illegal activity.

For TycoonX this means:

- do not promise players, authorities or stores that CK-Labs pre-screens every chat message, post, company description or other UGC before publication;
- do not design a legal workflow that assumes every private communication has been proactively read by CK-Labs;
- do not infer actual knowledge merely because automated moderation exists somewhere in the service; and
- do not use Article 8 as an excuse to ignore a specific valid notice, specific authority order, Article 18 life/safety trigger or another targeted duty under applicable law.

Targeted moderation, specific investigations and proportionate automated assistance can coexist with Article 8.

## P0: DSA Article 9 orders to act against illegal content

An Article 9 order is not the same thing as a normal user report, a trusted-flagger notice, a store complaint, a lawyer's demand letter or a generic email claiming that content is unlawful.

When CK-Labs receives an apparent Article 9 order, the authority-order workflow must capture and verify at least:

- the issuing judicial or administrative authority;
- the legal basis under Union or national law;
- the statement of reasons explaining why the identified information is illegal, with reference to the applicable legal provision where required;
- sufficiently clear information locating the specific illegal content, such as an exact URL, message/post identifier or equivalent TycoonX locator;
- the redress information provided for CK-Labs and the affected recipient;
- any authority designated to receive information about the effect given to the order;
- the territorial scope of the order;
- the language and Article 11 contact-point requirements; and
- authenticity, competence/jurisdiction and any applicable procedural requirements.

The territorial scope should be recorded exactly. The DSA requires the scope under the applicable law to be limited to what is strictly necessary to achieve the order's objective. Do not silently turn a Member-State-specific restriction into a worldwide removal if the actual order does not support that scope.

### Article 9 execution

After a valid order is received:

- act according to the order and applicable law;
- inform the issuing authority, or another authority specified in the order, of the effect given **without undue delay**, including whether and when effect was given;
- preserve the order, verification result, action timestamp, content/account locator, territorial scope and response record where lawfully necessary;
- inform the affected recipient at the time required by Article 9(5), including the required reasons, redress information and territorial-scope description, unless applicable procedural law or the order lawfully changes or delays that notification; and
- do not disclose security-sensitive or unrelated third-party information merely because a removal order exists.

A valid content order does not automatically authorize disclosure of all account information. If information about a recipient is demanded, assess the applicable Article 10 or other lawful information-request process separately.

## P0: DSA Article 10 orders to provide information

Article 10 concerns a different act: an order to provide **specific information about one or more specific individual recipients of the service**.

The intake record should verify at least:

- the Union or national legal basis;
- identity and authenticity of the issuing judicial or administrative authority;
- the specific recipient/account identifier(s), such as account name or unique ID;
- the stated objective and necessity/proportionality reasoning where the law requires that statement;
- available redress information;
- which authority should receive CK-Labs' effect response where applicable;
- the accepted language and Article 11 electronic-contact-point requirements; and
- whether the requested information is information already collected for providing the service and lies within CK-Labs' control, as Article 10 requires for an Article 10 order.

Do not collect a new category of data merely to satisfy an Article 10 order that only lawfully reaches information already collected for the service and under CK-Labs' control. Do not expand a request for one account into a search across unrelated players.

### Article 10 execution

For a valid Article 10 order:

- inform the issuing authority, or the authority specified in the order, **without undue delay** of receipt and the effect given, including whether and when effect was given;
- disclose only the information required by the valid legal scope and applicable law;
- apply GDPR/data-minimization, confidentiality and security controls alongside the compulsory legal process;
- keep passwords, card PINs, CVVs, OTPs, authentication secrets and similarly sensitive credentials outside ordinary disclosure workflows because TycoonX should not possess or request those merely to answer an order;
- retain an auditable record of what was disclosed, to whom, under what authority and when, where legally necessary; and
- inform the affected recipient at the time required by Article 10(5), with the required reasons and redress information, unless applicable law or a valid procedural restriction lawfully delays or prevents that notice.

An Article 10 request must not be used as a pretext to disclose an entire account database or unrelated payment/support records.

## Germany: distinguish the DSC from an illegality/removal authority

For CK-Labs as a Germany-established operator, the Digital Services Coordinator is located at the **Bundesnetzagentur** and is the central German coordination/supervision point for DSA compliance.

However, the Bundesnetzagentur's current public guidance expressly states that the German DSC does **not** itself decide whether individual content is illegal and cannot itself delete/block individual content or issue a content-removal order merely in its role as DSC. Courts and other competent authorities continue to determine illegality under the relevant law, and police or other legally competent authorities may have separate order powers.

Operational rule:

- do not ignore a legitimate DSC supervisory communication;
- do not treat a normal DSC complaint-forwarding or supervision email as though it were automatically an Article 9 removal order;
- verify the precise authority, legal basis and instrument being used; and
- never rely only on the sender display name `Bundesnetzagentur`, `DSC`, `Police`, `Court` or `EU` to authenticate a compulsory request.

## Fake authority orders and phishing

Authority impersonation is a foreseeable attack against player data and moderation systems.

If an apparent order contains unusual domains, mismatched reply-to addresses, suspicious attachments, credential requests, pressure to bypass normal verification, requests for unrelated data or other authenticity concerns:

1. preserve the message safely;
2. do not click unsafe links or send credentials;
3. verify the authority through a known official channel independent of the message where appropriate;
4. confirm the case/order reference and competent official where feasible;
5. escalate genuine emergency circumstances through the proper emergency route; and
6. do not notify an affected user prematurely if applicable law or a valid order prohibits or delays notice.

A failed phishing attempt should not itself cause sanctions against the player whose account was named in the fake request.

## Keep Article 9, Article 10, Article 16 and Article 18 separate

The workflows can interact but are not interchangeable:

- **Article 9:** authority order to act against specific illegal content;
- **Article 10:** authority order to provide specific information about specific recipient(s);
- **Article 16:** notice-and-action mechanism for alleged illegal content submitted to a hosting provider; and
- **Article 18:** prompt authority notification by a hosting provider when the statutory threat-to-life/safety criminal-offence suspicion threshold is met.

Do not require an Article 16 reporter to obtain an Article 9 court/authority order before TycoonX will assess a valid notice. Do not use Article 18 as a general-purpose account-data disclosure mechanism. Do not assume that receiving an Article 9 removal order automatically authorizes all disclosures that could be requested under Article 10.

## Apple, Google Play and Xsolla provider boundary

Apple, Google, Xsolla, hosting providers or other vendors may independently receive lawful orders relating to data or systems they control. Their responsibilities do not automatically replace CK-Labs' responsibilities for information or content controlled by CK-Labs.

Likewise:

- a provider telling CK-Labs that it received an order is not by itself proof that CK-Labs received the same legally operative order;
- CK-Labs should not disclose extra TycoonX data merely because Apple, Google or Xsolla supplied separate information;
- transaction/payment evidence should stay separated from UGC-removal evidence unless both are relevant to the lawful scope; and
- provider outages or provider changes should not destroy pending authority-order records or deadlines.

## Paid-entitlement and enforcement isolation

An authority communication about content or account information is not automatically a finding of payment fraud, exploit use, chargeback abuse, entitlement abuse or regional-pricing abuse.

Unless the valid legal order itself requires a broader account restriction, or there is an independent lawful basis under the Terms/payment rules:

- an Article 9 content restriction must not wipe unrelated purchased Diamonds;
- an Article 10 information request must not restart, shorten or duplicate the original one-time 30-Day VIP period;
- neither kind of order creates a hidden expiry for valid Lifetime VIP or converts Lifetime VIP into 30-Day VIP;
- a lawful request for information does not permit CK-Labs to reverse unrelated completed purchases; and
- a player must not be banned merely for being named in a request when the request itself does not establish a Terms violation.

If a valid order specifically requires suspension, termination, seizure/preservation, access restriction or another broader action, follow the legally required scope while preserving non-waivable consumer rights and maintaining an auditable separation between legal-process action and payment correction.

## Fundamental-rights and proportionality safeguard

Content moderation and legal-order execution can affect freedom of expression, privacy, data protection, property/consumer interests and access to redress.

CK-Labs should therefore:

- target the specific content/account/data covered by the valid legal basis;
- apply territorial limits where the order has territorial limits;
- avoid volunteering unrelated personal data;
- protect reporters, victims and third parties where appropriate;
- keep legally required user notice/redress information intact;
- preserve security-sensitive anti-abuse methods where disclosure is not required; and
- document the reason when an emergency or legal prohibition requires delayed user notice.

## Outage, provider migration and business continuity

Authority-order processing is a P0 legal workflow.

- The Article 11 authority contact point must remain monitored.
- Mail/provider outages need a documented recovery/fallback process.
- A support-tool migration must preserve open orders, deadlines, attachments/evidence and action logs lawfully.
- A merger, sale, reorganization or successor operator must preserve pending compulsory legal-process records where required and establish a working Article 11 contact point for the continuing service.
- Do not let a server migration replay an enforcement event so that content, accounts or entitlements are altered twice.

## Release test matrix

Before treating this gate as production-ready, test at least:

1. a vague user report that does not establish illegality without detailed legal examination;
2. a sufficiently precise Article 16 notice that clearly reaches the Article 16(3) knowledge threshold;
3. good-faith voluntary moderation that does not get labelled as a waiver of the Article 6 exemption;
4. a request to monitor all TycoonX chats continuously for unspecified illegality;
5. a valid German Article 9 order identifying one specific item and one territorial scope;
6. an Article 9 order with missing legal basis or unclear content locator;
7. a forged `DSC` or `police` removal request;
8. a genuine DSC supervisory communication that is not itself treated as a content-removal order;
9. a valid Article 10 order for one specific account and existing data within CK-Labs' control;
10. an Article 10 demand attempting to obtain unrelated players' data;
11. an authority order that lawfully delays user notice;
12. duplicate delivery of the same authority order;
13. an Article 9 content action that leaves unrelated purchased Diamonds intact;
14. an Article 10 request that leaves the original 30-Day VIP clock intact;
15. an order affecting UGC on an account with Lifetime VIP, without creating an unauthorized Lifetime VIP expiry;
16. an Article 18 life/safety case that bypasses the normal Article 9/10 queue where prompt emergency escalation is required;
17. an email-provider outage followed by recovery before a legal deadline; and
18. a provider/business migration with pending authority-order evidence preserved.

## Evidence to retain

Keep proportionate, access-controlled evidence of:

- DSA feature classification and date;
- the Article 11 authority contact point and accepted languages;
- authority/order identity and authenticity verification;
- legal basis, scope, content/account locator and territorial scope;
- receipt timestamp and applicable deadline;
- action taken and exact time;
- response sent to the issuing/designated authority;
- user notification, delay or lawful non-disclosure basis;
- data fields actually disclosed for Article 10 orders;
- legal/moderation escalation where required;
- duplicate-order/idempotency controls; and
- retention/deletion rule for the order file after the legal purpose ends.

Do not keep unrelated personal data indefinitely merely because one authority request once existed.

## Current legal checkpoint

Reviewed against Regulation (EU) 2022/2065 and current German DSC guidance on September 1, 2026:

- **Article 6:** conditional hosting liability exemption for recipient-provided stored information, including expeditious action after the relevant knowledge/awareness threshold is reached;
- **Article 7:** good-faith, diligent voluntary own-initiative investigations or measures do not solely by themselves remove eligibility for the Articles 4 to 6 exemptions;
- **Article 8:** no general monitoring or active fact-finding obligation;
- **Article 9:** specific illegal-content orders from relevant national judicial/administrative authorities, minimum order safeguards, scope/language/contact-point rules, effect response without undue delay, and affected-recipient information subject to applicable procedural law;
- **Article 10:** specific-recipient information orders, necessity/proportionality and identification safeguards, limitation to service information already collected and within the provider's control, effect response without undue delay, and affected-recipient information subject to applicable procedural law;
- **Article 16(3):** sufficiently precise/substantiated notices create Article 6 knowledge or awareness only where a diligent hosting provider can identify the illegality of the specific information without a detailed legal examination; and
- **German DSC:** Bundesnetzagentur coordinates/supervises DSA compliance in Germany but its public guidance states that, as DSC, it does not decide individual content illegality or itself issue individual content-removal orders.

## Founder-protective interpretation

This framework lets CK-Labs investigate and moderate TycoonX in good faith without promising universal surveillance, lets CK-Labs challenge or verify malformed/forged authority demands instead of blindly disclosing player data, and preserves the ability to act rapidly on valid specific orders. It does **not** authorize CK-Labs to ignore valid legal process, deliberately remain ignorant of clearly illegal content, over-collect player data, suppress redress, remove unrelated paid entitlements, or claim that mandatory rights have been waived.