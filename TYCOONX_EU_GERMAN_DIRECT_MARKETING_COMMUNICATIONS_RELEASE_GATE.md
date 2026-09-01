# TycoonX EU/German Direct Marketing & Communications Release Gate

Last reviewed: 2026-09-01  
Owner: CK-Labs  
Scope: TycoonX promotional email, SMS or similar messages, push notifications, in-app inbox messages, banners, webshop campaigns, VIP/Diamond promotions, service notices, security messages, legal notices, purchase/entitlement communications, and provider-mediated communications.

## Purpose

TycoonX may lawfully communicate genuine promotions, price changes, selected Lifetime VIP sales windows, new features, events, and other commercial offers. The compliance risk is not the existence of marketing itself. The risk is mixing marketing with service-critical messages, sending direct marketing through a channel without the required permission or exception, ignoring an objection, hiding the sender or commercial character, or treating a player's refusal of marketing as a loss of game or purchase rights.

This gate separates:

1. **service/transactional communications** needed to operate TycoonX, secure an account, deliver or reconcile a purchase, handle support, or comply with law;
2. **direct marketing communications** whose main purpose is to promote TycoonX, Diamonds, VIP, a sale, a bundle, a promotion, or another commercial offer; and
3. **mixed communications**, which must not use a necessary service message as a pretext to deliver material promotional content that would otherwise require marketing permission.

This is an operational release gate. It supplements the Privacy Policy, Terms of Service, Purchases & Refunds Policy, promotion/dark-pattern gate, platform rules, and mandatory consumer/data-protection law. It does not create a new recurring product or change any paid entitlement.

## P0 rules

### 1. Classify the message by its real primary purpose

Before a campaign or automated communication is enabled, classify it as one of the following:

- **security**: suspicious login, password/account recovery, account-compromise warning, security incident, required security action;
- **purchase/entitlement**: receipt/confirmation, pending-payment status, failed/reversed payment, refund/revocation, restore result, entitlement delivery, chargeback/dispute status;
- **support/legal/regulatory**: support case, Terms/Privacy change notice where required, withdrawal/remedy information, account enforcement/redress, DSA/GDPR communications, permanent-shutdown notice where legally required;
- **service/operational**: material outage, required update, provider migration, feature availability necessary to use the Service;
- **marketing**: VIP/Diamond offer, price promotion, Lifetime VIP sales window, coupon, sale countdown, bundle, cross-sell, re-engagement promotion, commercial event, or feature announcement primarily intended to encourage purchase or engagement; or
- **mixed**: a necessary service message containing a material promotional component.

The classification follows substance, not the internal template name. Calling a promotional email `service`, `system`, `receipt`, or `important` does not make it non-marketing.

### 2. German UWG § 7 baseline for electronic marketing

For recipients in Germany, the release baseline for advertising using electronic mail is **prior express consent**, unless the narrow existing-customer exception in UWG § 7(3) is actually satisfied.

Do not infer express marketing consent merely from:

- creating a TycoonX account;
- accepting the Terms or Privacy Policy;
- buying Diamonds, 30-Day VIP, or Lifetime VIP;
- using the webshop;
- enabling general app notifications at OS level;
- contacting Support;
- participating in a free event;
- receiving a promotional/test/goodwill grant; or
- failing to untick a hidden or preselected marketing box.

Where consent is the basis, keep evidence sufficient to show who consented, when, through which surface, for which channel/purpose, what wording was shown, and the source/version of the consent flow.

### 3. Existing-customer exception under UWG § 7(3) is narrow

CK-Labs may rely on the German existing-customer electronic-mail exception only when all statutory conditions are met. The operational record must support that:

1. CK-Labs obtained the electronic contact address from the customer **in connection with the sale of a product or service**;
2. CK-Labs uses it for direct advertising of **its own similar products or services**;
3. the customer has **not objected**; and
4. the customer was clearly informed, both when the address was collected and in every use, that they may object at any time without costs beyond basic transmission costs.

Do not stretch this exception to unrelated products, third-party marketing, addresses obtained only through support or account registration, or a user who has already objected.

A purchase through Apple, Google Play, or Xsolla does not automatically mean CK-Labs received the player's electronic address in the legally relevant sale context. Verify the actual data flow and merchant/controller role before relying on the exception.

### 4. EU ePrivacy rule remains part of the channel analysis

Directive 2002/58/EC Article 13 provides the EU framework for unsolicited direct marketing by electronic mail, including prior consent and the existing-customer similar-products exception. German UWG § 7 implements the relevant German marketing-channel rules.

Do not treat GDPR legitimate interest by itself as permission to ignore a channel-specific consent rule. A campaign needs both:

- a lawful data-protection basis for processing personal data; and
- compliance with the applicable electronic-communications/marketing rule for the channel.

### 5. GDPR consent and direct-marketing objection

Where consent is relied on for personal-data processing:

- the request must be distinguishable, intelligible, accessible, and sufficiently specific;
- CK-Labs must be able to demonstrate the consent;
- withdrawal must be possible at any time for future processing; and
- withdrawing consent must be as easy as giving it.

Under GDPR Article 21, a person may object at any time to processing of personal data for direct marketing, including related profiling. Once the person objects, the data must no longer be processed for that direct-marketing purpose.

Bring the direct-marketing objection right clearly and separately to the person's attention no later than the first direct-marketing communication where Article 21 applies.

### 6. Unsubscribe and suppression must actually work

Every electronic-marketing route that requires an objection mechanism must have a usable way to stop future marketing.

Operational rules:

- process unsubscribe/objection signals without unnecessary friction;
- do not require the player to log in merely to stop email marketing when the message can safely identify the subscription record without login;
- do not require a Support ticket, explanation, survey, or account deletion as the only way to unsubscribe;
- do not send another promotional message asking the person to reconfirm that they really meant to unsubscribe;
- maintain the minimum suppression evidence reasonably necessary to honor the objection and defend compliance;
- do not treat a suppression record as active marketing consent; and
- ensure provider migrations and campaign-tool changes preserve opt-outs before sending resumes.

A one-click or similarly low-friction mechanism is preferred where technically appropriate, but the exact implementation must follow the then-applicable channel and legal requirements.

### 7. Opting out of marketing must not damage TycoonX rights

A player who refuses or withdraws marketing permission, or objects to direct marketing, must not lose:

- purchased Diamonds;
- the original one-time 30-Day VIP period;
- Lifetime VIP;
- a valid refund, withdrawal, conformity, price-reduction, or other mandatory remedy;
- access to Support or an appeal/redress route;
- legally required notices;
- security/account-compromise warnings;
- transaction confirmations or entitlement-reconciliation messages that are genuinely necessary; or
- ordinary access to TycoonX merely because promotional contact was refused.

Marketing consent is not consideration for already purchased digital content unless a separate lawful product model expressly and validly provides otherwise. TycoonX currently does not use such a model for Diamonds, one-time 30-Day VIP, or Lifetime VIP.

### 8. Service messages must not become disguised advertisements

A necessary security, purchase, support, legal, refund, or outage communication may be sent where the applicable lawful basis permits it even if the recipient has opted out of marketing.

But do not append a material sales pitch solely to exploit the service-message exception. Examples:

- a receipt should not add a large `Buy Lifetime VIP now` promotion when the recipient opted out;
- an account-compromise warning should not contain a Diamond sale;
- a refund confirmation should not pressure the consumer to rebuy with a coupon;
- a mandatory Terms notice should not be padded with unrelated promotional offers.

Incidental brand presentation, navigation, legally required trader information, or a neutral link back to TycoonX does not automatically make a necessary service message marketing. Assess the actual content and prominence.

### 9. DDG § 6 commercial-communication transparency

For commercial communications within the scope of German DDG § 6:

- the commercial nature must be recognizable;
- the person/business on whose behalf the communication is made must be clearly identifiable;
- sales promotions such as discounts, bonuses, gifts, coupons, or similar offers must be recognizable as such and their conditions must be easily accessible, clear, and unambiguous; and
- promotional competitions must likewise be identifiable with accessible, clear conditions where applicable.

For commercial communications by electronic mail, do not intentionally hide or disguise the sender or the commercial character in the header or subject line.

Do not use deceptive subject lines such as `Security alert` or `Payment problem` merely to improve open rates for a sale.

### 10. Push notifications require two separate checks

For promotional push notifications, treat these as separate questions:

1. **technical notification permission**: may the operating system display notifications for the app? and
2. **legal direct-marketing permission**: may CK-Labs use the relevant personal/device data and channel for this promotional purpose?

Apple currently requires apps to request user authorization for local and remote notification interactions. Android 13/API 33+ uses the `POST_NOTIFICATIONS` runtime permission for non-exempt app notifications.

Neither technical permission should be treated as blanket legal consent to promotional processing. Conversely, a valid marketing consent does not bypass a device-level denial of notifications.

Because the exact legal classification of a particular push implementation can depend on its technical and factual design, the TycoonX release baseline is conservative: do not send promotional push to a German/EU recipient unless the relevant legal basis/permission has been documented for that use. If counsel or a regulator-supported interpretation establishes a lawful exception for a specific implementation, record that assessment before relying on it.

Security, purchase, or operational pushes should remain separately classified and limited to their necessary purpose.

### 11. In-app commercial messages are not a consent loophole

An in-app banner, inbox card, modal, home-screen offer, or event tile is not automatically governed by the same prior-consent rule as an unsolicited electronic-mail message. But it remains subject to applicable commercial-practice, DDG, consumer, privacy, age-safety, and dark-pattern rules.

Do not use an in-app surface to:

- falsely claim scarcity or urgency;
- hide the total price or product identity;
- disguise advertising as a security/system warning;
- pressure children to purchase or persuade adults to purchase;
- make dismissal intentionally difficult; or
- infer consent for off-platform email/SMS/push marketing merely because the user saw or clicked an in-app promotion.

### 12. Apple, Google, Xsolla, and CK-Labs roles stay separate

#### Apple

Apple controls its platform notification APIs, device-level notification authorization, App Store transaction communications, and communications Apple sends under its own role. CK-Labs remains responsible for the purpose and content of TycoonX marketing that CK-Labs sends or instructs a provider to send.

An Apple transaction, receipt, App Store account, or notification authorization does not automatically authorize CK-Labs promotional email or push.

#### Google Play / Android

Google controls Play transaction communications and Android provides the notification-permission framework. CK-Labs remains responsible for TycoonX marketing purpose, audience selection, message content, and suppression logic where CK-Labs controls the campaign.

A Google Play purchase or Android notification permission does not automatically create consent to unrelated CK-Labs direct marketing.

#### Xsolla

Where Xsolla acts as merchant of record or sends transaction/security/refund communications under its own role, those communications must not be silently treated as CK-Labs marketing consent. Conversely, CK-Labs marketing consent must not be represented as consent to unrelated Xsolla or third-party marketing.

If CK-Labs asks Xsolla or another processor/provider to send a TycoonX campaign on CK-Labs' behalf, the provider relationship does not remove CK-Labs' responsibility to ensure the campaign has the required permission, purpose limitation, suppression, and truthful offer content.

### 13. Lifetime VIP marketing remains limited and genuine

Lifetime VIP may be promoted only during genuine selected sales windows or in truthful advance communications about an actual planned window.

Marketing must preserve the canonical meaning:

- Lifetime VIP is a one-time entitlement, not a subscription;
- it is available only during selected promotional sales windows;
- a sales window may be ended and the product may never return;
- prior availability creates no promise of future availability;
- different genuine sales windows may use different future prices; and
- completed earlier purchases are not retroactively repriced merely because a later window is cheaper or more expensive, except where mandatory law requires otherwise.

Marketing opt-out does not change an already valid Lifetime VIP entitlement.

### 14. 30-Day VIP must never be marketed as recurring unless the product changes lawfully

Current 30-Day VIP is a **one-time, non-renewing** entitlement.

Do not use email, push, in-app messaging, or webshop remarketing that describes it as automatically renewing, a monthly subscription, or a recurring charge.

If a future recurring VIP product is introduced, it must pass the separate recurring-subscription gate before any campaign is sent. A marketing consent does not constitute subscription consent or authorization for recurring charges.

### 15. Diamonds and promotions

A Diamond marketing campaign may advertise current genuine bundles and future price changes, but it must not:

- imply purchased Diamonds expire solely because the user unsubscribes from marketing;
- promise a bundle quantity or price that no longer exists in the applicable checkout;
- use an old regional price as if it were current;
- silently personalize a price where the applicable personalized-pricing disclosure is required; or
- threaten loss of already purchased Diamonds to pressure a sale.

### 16. Refunds, chargebacks, disputes, and account compromise

A refund request, withdrawal request, chargeback dispute, consumer complaint, ADR request, or account-compromise report must not be converted into marketing permission.

If a payment or account is under investigation:

- send only necessary transaction/security/support communications under the appropriate lawful basis;
- do not use the incident as an excuse for a promotional campaign;
- do not treat a marketing opt-out as evidence of fraud or abuse; and
- do not treat opening a promotional message or clicking a sale link as proof that a disputed purchase was authorized.

An attacker who gains temporary account access and changes marketing preferences does not gain authority to make payments, accept new Terms on behalf of the genuine account holder, or waive statutory rights. Where compromise is suspected, preference changes may require security review before being treated as reliable.

### 17. Minors and vulnerable users

TycoonX marketing must remain consistent with the separate minor-purchase, youth-protection, Apple age, Google family, and dark-pattern gates.

Do not:

- direct advertising at children with an exhortation to buy Diamonds/VIP or persuade parents/another adult to buy;
- treat parental authorization for one purchase as permission for future marketing;
- infer a child's marketing consent from a family payment approval; or
- use profiling or purchase-pressure tactics that would be unfair given the user's age or vulnerability.

Where consent by or for a minor is legally required for the relevant personal-data processing, perform the separate age/consent analysis. Purchase authorization and marketing/privacy consent remain separate questions.

### 18. Provider migration, business transfer, and campaign-tool replacement

Before moving email, push, CRM, notification, or campaign infrastructure:

- export the minimum necessary consent/objection provenance lawfully;
- migrate suppression records before active subscriber records where feasible;
- verify that channel and purpose scopes still map correctly;
- do not convert `unknown` or `not migrated` into `subscribed`;
- do not send a mass campaign merely to test whether old addresses still work;
- verify processor/controller roles and international-transfer safeguards where personal data moves; and
- retain only evidence needed for current consent, objections, legal claims, or required recordkeeping.

A sale, merger, reorganization, or successor operator does not automatically expand the purpose of old marketing consent. Reassess whether the original consent/exception still covers the new sender and purpose.

### 19. Promotions, price changes, tax/FX changes, and regional pricing

CK-Labs may lawfully announce genuine future changes to Diamond bundles, VIP prices, regional prices, currencies, taxes, FX-driven local prices, and promotions.

The communication itself must still have a lawful marketing route where it is promotional. It must also remain truthful:

- clearly distinguish a planned future price from the current final checkout price;
- do not imply that a later increase will create an extra charge on an already completed one-time purchase;
- do not promise a price match or refund after a later decrease unless actually offered or legally required;
- do not misstate provider tax/FX adjustments as a CK-Labs charge already imposed; and
- do not send a country-specific offer to a user solely because an IP address momentarily appeared in that country without a reasonable regional-eligibility basis.

### 20. Retention and evidence

For each material marketing system or campaign type, preserve a proportionate record of:

- sender/controller or sender-on-behalf-of role;
- purpose and channel;
- legal basis/marketing permission relied on;
- consent wording/version or UWG § 7(3) exception evidence where applicable;
- timestamp/source of consent;
- objection/unsubscribe timestamp and suppression propagation;
- target audience rules;
- campaign creative/subject and offer window;
- provider/tool used;
- any material delivery or suppression incident; and
- remediation/retest record.

Do not keep the full gameplay profile, chat history, payment credentials, or unrelated personal data merely to prove a marketing permission or objection.

## Channel decision table

| Scenario | Default classification | Release rule |
|---|---|---|
| Purchase receipt | Transactional | Send only as needed for purchase; avoid material sales payload |
| Payment pending/reversed/refunded | Transactional | Send status/remedy information; do not infer marketing consent |
| Account compromise warning | Security | May remain available despite marketing opt-out where lawful/necessary |
| Mandatory Terms/Privacy notice | Legal/service | Do not bundle an unrelated Diamond/VIP sale |
| General outage notice | Service | Keep operational; avoid converting it into a promotion |
| `Lifetime VIP sale ends Sunday` email | Marketing | Require lawful electronic-marketing route; deadline must be genuine |
| `20% more Diamonds this weekend` push | Marketing | Check both legal marketing permission and OS notification permission |
| In-app Lifetime VIP card | Commercial in-app | Apply truthful-offer, age, DDG/UWG/dark-pattern rules |
| Receipt plus large VIP ad | Mixed | Remove/separate promo or ensure lawful marketing permission |
| Xsolla receipt | Provider transaction communication | Do not treat it as CK-Labs marketing consent |
| Support case reply | Support | Do not add a marketing campaign to exploit the support relationship |

## Release QA

Before enabling or materially changing direct marketing:

- [ ] Every outbound template is classified by actual purpose.
- [ ] German electronic-marketing consent or UWG § 7(3) exception is documented where applicable.
- [ ] GDPR basis and channel-specific marketing permission are treated as separate checks.
- [ ] Consent evidence stores purpose/channel/version/timestamp/source.
- [ ] Unsubscribe/objection works without requiring account deletion.
- [ ] Suppression propagates to every active marketing provider/tool.
- [ ] A marketing opt-out leaves Diamonds, 30-Day VIP, Lifetime VIP, refunds, support, security and mandatory notices unaffected.
- [ ] Transactional/security/legal templates contain no disguised material sales payload.
- [ ] Email sender and commercial character are not intentionally hidden.
- [ ] Promotion conditions and sender identity are clear where DDG § 6 applies.
- [ ] Apple notification authorization is not treated as legal marketing consent.
- [ ] Android `POST_NOTIFICATIONS` permission is not treated as legal marketing consent.
- [ ] A legal marketing permission is not used to bypass device notification settings.
- [ ] Xsolla merchant communications are not treated as CK-Labs marketing consent.
- [ ] Lifetime VIP campaign dates match a real selected sales window.
- [ ] 30-Day VIP is described as one-time and non-renewing.
- [ ] Regional/price/tax/FX claims match the actual planned/current offer.
- [ ] Child-directed purchase exhortations are absent.
- [ ] Provider migration preserves objections before campaign sending resumes.
- [ ] A suppression-list dry run proves an opted-out test user receives no marketing but still receives necessary purchase/security communications.

## Incident playbook

If TycoonX discovers that a promotional campaign was sent without the required permission, after an objection, or with a broken suppression mechanism:

1. stop or pause the affected campaign/automation;
2. preserve the minimum logs needed to determine scope and cause;
3. repair suppression/consent propagation before resuming;
4. do not send a promotional `sorry` campaign to the same unlawfully contacted audience;
5. assess whether a neutral compliance/service notice is legally necessary or appropriate;
6. assess GDPR/security implications if the incident also involved unauthorized disclosure or wrong-recipient data;
7. document the provider/tool configuration that failed;
8. verify affected users' paid entitlements were not altered; and
9. retest with subscribed, unsubscribed, unknown-status, minor/restricted, and service-message-only accounts.

## Current legal and platform checkpoint

As reviewed on September 1, 2026:

- **German UWG § 7(2)(2)** treats advertising using electronic mail without the recipient's prior express consent as an unreasonable nuisance, subject to the statutory exception in **§ 7(3)**.
- **UWG § 7(3)** requires all four existing-customer conditions: address obtained in connection with a sale, own similar products/services, no objection, and clear objection information at collection and every use.
- **Directive 2002/58/EC Article 13** provides the EU unsolicited-communications framework, including prior consent for electronic-mail direct marketing and the existing-customer similar-products exception.
- **GDPR Article 7** requires demonstrable consent where consent is relied on and says withdrawal must be as easy as giving consent.
- **GDPR Article 21(2)-(4)** gives an unconditional objection right for direct marketing, including related profiling; after objection the personal data may no longer be processed for that marketing purpose, and the right must be brought clearly and separately to the person's attention no later than the first communication.
- **German DDG § 6** requires commercial communications within its scope to be recognizable and identify the person on whose behalf they are made, and prohibits intentionally concealing the sender or commercial nature in electronic-mail header/subject information.
- **Apple User Notifications** requires the app to request authorization for local/remote notification interactions before scheduling notifications/registering for APNs as described by Apple's current developer documentation.
- **Android 13/API 33+** uses the `POST_NOTIFICATIONS` runtime permission for non-exempt app notifications, as documented by Android Developers.

## Founder-protective interpretation

Nothing in this gate prevents CK-Labs from lawfully marketing TycoonX, announcing genuine Lifetime VIP windows, sending truthful Diamond/VIP offers, using a properly documented existing-customer exception where every condition is met, or sending necessary security/purchase/legal/service communications under an appropriate lawful basis.

The protection comes from keeping the classifications clean: **a purchase is not marketing consent, OS notification permission is not marketing consent, a marketing opt-out is not an account cancellation, and a provider's communication permission is not automatically CK-Labs' permission**.

If the legal classification of a new channel or communication format is uncertain, default to the narrower non-marketing use or obtain the necessary permission before scaling the campaign. Do not solve uncertainty by silently treating every TycoonX user as subscribed.
