# TycoonX German BGB § 312k Cancellation-Button Release Gate

**Review date: September 3, 2026**  
Owner: CK-Labs

TycoonX went to full release on **September 1, 2026**. This is a production compliance gate for German consumer contracts that may fall within **BGB § 312k**. It is intentionally separate from withdrawal, refunds, account deletion, digital-product remedies, chargebacks and provider dispute flows.

The highest-risk TycoonX scenario is a paid VIP entitlement sold through a website. The Bundesgerichtshof held on **May 22, 2025 (I ZR 161/24)** that § 312k can apply to a fixed-term continuing contract even when the consumer pays only **one upfront fee** and the contract **ends automatically** after its agreed term. A one-time price, non-renewal and automatic expiry are therefore not safe reasons to dismiss § 312k for a web-sold one-time 30-Day VIP or another continuing digital service.

A second Bundesgerichtshof judgment on **July 16, 2026 (I ZR 200/25)** materially tightens the implementation rule: the statutory confirmation page is functionally limited to the cancellation process. It must not be used for retention offers, pause alternatives, promotional messaging or other additional information that is not part of the statutory cancellation function.

This gate does not assert that every TycoonX product or every Apple, Google Play or Xsolla transaction is subject to § 312k. It requires CK-Labs to classify the real contract, website, product and contracting party instead of assuming that `one-time`, `non-renewing`, `Lifetime`, `Merchant of Record` or `app purchase` automatically resolves the issue.

## 1. Statutory trigger to classify

Under current **BGB § 312k(1)**, the special cancellation-button duties apply where consumers are enabled **via a website** to conclude an electronic-commerce contract aimed at establishing a **Dauerschuldverhältnis** under which an entrepreneur owes a **paid performance**, subject to the statutory exceptions such as financial services.

For every German TycoonX paid product that can be obtained through a website, record:

1. the product or entitlement;
2. the website or hosted purchase surface that enables the transaction;
3. the consumer-facing contracting party or parties;
4. whether CK-Labs, Xsolla or another party owes the continuing digital performance;
5. whether the contract is a continuing obligation rather than a completed one-off delivery;
6. whether an exception in § 312k(1) actually applies; and
7. who is responsible for the required cancellation surface if the rule applies.

Do not infer the answer solely from the payment processor, Merchant-of-Record label, internal SKU type, app-store product type, billing frequency or the fact that the price is paid once.

## 2. BGH I ZR 161/24 closes the `one-time fee` shortcut

In **BGH, judgment of May 22, 2025, I ZR 161/24**, the Court held that an entrepreneur that lets consumers conclude through a website a contract for recurring delivery of goods or provision of services must provide the § 312k cancellation button even where:

- the consumer pays a **single one-time fee** at the beginning; and
- the contract **automatically ends** after the agreed fixed term.

The Court treated the entrepreneur's continuing or repeated performance during the term as capable of creating the relevant continuing obligation. The consumer's payment frequency is not what gives such a contract its characteristic nature.

### TycoonX consequence

- **One-time 30-Day VIP:** if a German consumer can conclude the relevant VIP service contract through a website and the relevant entrepreneur owes continuing VIP performance throughout the 30 days, treat § 312k as a **P0 classification issue**. `It is non-renewing` is not enough to dismiss the rule.
- **Lifetime VIP:** if a German consumer can conclude through a website a contract under which the relevant entrepreneur owes continuing VIP performance for the commercial operating lifetime of TycoonX, treat § 312k as a **P0 classification issue** even though Lifetime VIP is purchased once and is offered only during selected genuine sales windows.
- **Diamonds:** an ordinary Diamond pack intended as a one-off delivery of virtual currency is not automatically the same type of continuing obligation. Do not force it into § 312k merely because the player later spends the Diamonds. Reassess if a future Diamond product itself includes continuing paid services or recurring delivery.

Lifetime VIP remains a limited-time promotional offering that may be available only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous future sale availability. The § 312k analysis concerns termination mechanics for an existing contract, not whether CK-Labs must keep Lifetime VIP on sale.

## 3. Cancellation submission is not automatically a refund

The duty to provide the cancellation mechanism is not a promise that every submission produces a full refund or that every contract has an ordinary early-termination right.

Therefore:

- do not hide or disable the statutory route merely because a 30-Day VIP has a fixed end date;
- do not reject access merely because Lifetime VIP has no ordinary short notice period in the Terms;
- accept and timestamp the consumer's declaration first, then determine its legal effect;
- do not promise that every button submission automatically creates a full refund;
- do not characterize an unsuccessful ordinary cancellation as fraud, chargeback abuse or entitlement abuse merely because no ordinary termination right exists; and
- preserve mandatory extraordinary-termination, conformity, withdrawal and digital-product rights that apply separately.

If a valid termination creates a refund, price reduction, pro-rata consequence or entitlement adjustment under mandatory law or the applicable contract, process that consequence through the correct Apple, Google Play, Xsolla or CK-Labs route. Do not invent a refund rule solely from the existence of the button.

## 4. Missing or defective button creates a serious founder risk

Under **BGB § 312k(6)**, if required buttons and the confirmation page are not provided in accordance with the statutory requirements, a consumer may cancel a covered contract **at any time and without observing a notice period**.

This consequence makes `we do not offer subscriptions` an unsafe compliance assumption. A fixed-term, one-time-fee continuing service can still be covered after BGH I ZR 161/24.

Treat a missing or materially defective § 312k flow as a production legal incident for any product classified as in scope. Preserve affected-contract dates, page versions and remediation timing so CK-Labs can assess consumer consequences consistently rather than inventing case-by-case answers.

## 5. Required first cancellation control

Where § 312k applies, the website must provide a clearly readable cancellation control labelled with nothing other than **`Verträge hier kündigen`** or an equivalently unambiguous formulation.

For a German TycoonX surface, use the statutory German wording unless qualified counsel has approved another equally clear formulation for the specific presentation.

The control must:

- be continuously available;
- be immediate and easy to access;
- lead directly to the statutory confirmation page;
- not be buried only in Terms, Privacy Policy, support FAQs or account deletion;
- not require the consumer to contact support, chat, Discord or email first;
- not be disguised behind wording such as `manage account`, `membership info` or `contact us` where the cancellation purpose is unclear; and
- not be made materially harder to find than the purchase route.

As a conservative German implementation, make the statutory route usable **without requiring a prior account login**. The consumer can still be asked on the confirmation page for proportionate information needed to identify the contract.

## 6. Confirmation page requirements

The first cancellation control must lead directly to a confirmation page that allows the consumer to provide the information contemplated by **BGB § 312k(2)**, including:

- the type of cancellation and, for an extraordinary cancellation, the reason;
- information sufficient to identify the consumer;
- information sufficient to identify the contract;
- the requested termination time; and
- an electronic destination to which the confirmation can be sent quickly.

Implementation safeguards:

- do not make a **reason** mandatory for an ordinary cancellation;
- do not make a requested termination date mandatory in a way that blocks submission, because § 312k(5) supplies the earliest possible time if no time is stated;
- ask only for information reasonably needed to identify the consumer and contract;
- do not demand unnecessary payment-card, identity-document or unrelated personal data merely to discourage cancellation;
- if a purchase, order or transaction identifier is unknown, provide a reasonable alternative identification route; and
- do not preselect a cancellation type that creates an unintended legal declaration.

A July 14, 2026 decision of the **LG München I (33 O 14294/25)**, reported as not yet final, is an additional implementation warning concerning ambiguous parallel buttons, a mandatory reason for ordinary cancellation and multi-step visibility.

## 7. BGH I ZR 200/25: confirmation page must stay function-only

In **BGH, judgment of July 16, 2026, I ZR 200/25**, the Court held that the content of the § 312k confirmation page is exhaustively defined by the statute. The confirmation page exists to collect the information required to identify and process the cancellation and to provide the final confirmation button. Additional information, offers or alternative decision options do not belong on that page.

For TycoonX, once a consumer has activated the first statutory cancellation control, the confirmation page must **not** contain:

- `pause VIP` or `keep VIP` alternatives;
- a discounted replacement offer;
- extra Diamonds or a coupon for staying;
- a Lifetime VIP upsell;
- a promotional countdown;
- a survey or feedback step that is not necessary for the declaration;
- marketing banners, news or unrelated service information;
- a support-chat detour; or
- another optional decision path that adds a step before the final cancellation declaration.

Do not attempt to cure this by making the retention offer visually small or non-blocking. The July 16, 2026 BGH rule is stronger: the statutory confirmation page itself should contain only the functional cancellation elements contemplated by § 312k(2).

Retention, win-back and feedback activity may be handled **outside the statutory confirmation page and outside the path that must immediately lead to the cancellation declaration**, subject to ordinary marketing, consent and dark-pattern rules.

## 8. Final confirmation control

The confirmation page must contain a clear final button labelled with nothing other than **`jetzt kündigen`** or an equivalently unambiguous formulation.

Do not:

- make the user call support before the final button becomes available;
- swap the final button's meaning based on a dark-pattern choice;
- preselect a paid replacement product;
- place retention or pause offers on the statutory confirmation page; or
- convert the cancellation into account deletion, a chargeback, a refund request or a product downgrade unless the consumer separately asks for that action through the appropriate route.

## 9. Durable evidence and immediate text confirmation

Under **BGB § 312k(3)-(4)**, the consumer must be able to preserve the submitted cancellation declaration with its submission date and time on a durable medium, and the entrepreneur must immediately confirm electronically in text form:

- the content of the cancellation declaration;
- the date and time it was received; and
- the time at which the contract is intended to end.

TycoonX implementation should preserve an immutable server-side event containing at least:

- contract or product identifier;
- consumer, account or transaction identifier used for matching;
- submission timestamp;
- selected cancellation type;
- requested end time, if supplied;
- confirmation destination;
- generated confirmation ID;
- page or surface version identifier; and
- the confirmation-send result.

Do not silently rewrite the original submission because an agent later decides the legal effect is different. Store the original declaration and the later decision as separate events.

## 10. Do not confuse § 312k with withdrawal or another remedy

The § 312k cancellation button is **not** the same as:

- the German/EU withdrawal right;
- the electronic withdrawal function required where separately applicable;
- a refund request;
- a defect or non-conformity remedy;
- the right to terminate a digital-product contract following a qualifying detrimental modification;
- an Apple or Google refund request;
- an Xsolla refund request; or
- TycoonX account deletion.

Preserve those separate paths instead of funneling every legal remedy into one button. A player can have a valid statutory digital-product remedy even if an ordinary contractual cancellation would not itself create a refund.

## 11. Website and channel mapping

### CK-Labs TycoonX web shop

If a CK-Labs-controlled website enables a German consumer to conclude an in-scope continuing-service contract, perform the § 312k analysis on that website and the relevant contracting relationship.

Do not treat a redirect, iframe, hosted checkout or provider widget as proof that CK-Labs has no duty. Map who actually offers the continuing service and who contracts with the consumer.

### Xsolla

Xsolla currently describes itself as a **Merchant of Record** for Web Shop and other game-commerce transactions. Its Publisher Account Terms, last updated June 30, 2026, also state that Xsolla acts as merchant of record for Digital Content according to the applicable agreement while publisher responsibilities remain separately relevant.

That allocation is important but is **not a substitute for a contract map**. Before relying on Xsolla for a German § 312k flow, preserve evidence showing:

- which Xsolla legal entity is seller or Merchant of Record for the German transaction;
- which party is the entrepreneur owing the continuing VIP performance;
- whose website legally enables conclusion of that contract;
- whether Xsolla supplies a compliant § 312k route for the relevant contract;
- whether CK-Labs has a separate service contract that can itself be terminated; and
- how a cancellation event reaches TycoonX so the service state is reconciled once, without duplicate entitlement changes.

Do not tell a consumer `Xsolla handles everything` unless the actual agreement and implementation support that statement.

### Apple App Store and Google Play

Section 312k is specifically framed around contracts that consumers can conclude **via a website**. A native Apple App Store or Google Play purchase therefore must not be mechanically treated as a CK-Labs website transaction.

However, do not assume that `bought in the app store` ends the entire classification. If the same relevant continuing contract can currently be concluded through a website, map the contract and entrepreneur rather than relying only on purchase origin.

Keep platform refund and transaction functions separate from the German cancellation-submission mechanism. A cancellation declaration must not replay an Apple transaction, consume a Google purchase token twice or manufacture a provider refund that has not actually occurred.

## 12. September 3 repository parity checkpoint

A recursive review of the current `Atakancev/contact-form-app` `main` tree on September 3, 2026 found **no repository path named `checkout`, `webshop` or `shop`**, and repository searches found no current `Verträge hier kündigen` or `kündigen` implementation.

This is **not evidence that the live TycoonX/Xsolla webshop is non-compliant**. It means this repository appears to contain TycoonX legal, support and informational surfaces rather than the live commerce implementation, so production § 312k parity cannot be proven from this repository alone.

Do **not** add a fake or disconnected cancellation button to this legal repository merely to satisfy a static check. The button must be attached to the real consumer contract and must submit a legally meaningful declaration to the correct entrepreneur.

The unresolved P0 evidence item is therefore external production parity:

1. identify the actual live German TycoonX web purchase URL;
2. record whether 30-Day VIP and Lifetime VIP are currently purchasable there;
3. capture the checkout contracting-party and Merchant-of-Record disclosure;
4. determine which entrepreneur owes the continuing VIP performance;
5. determine whether § 312k applies to each VIP contract;
6. if it applies, capture the actual logged-out first cancellation control and direct confirmation page;
7. prove that the confirmation page contains no retention, pause, promotional or other non-functional content;
8. submit a test declaration against a test or otherwise safe contract where legally and operationally appropriate;
9. verify immediate text confirmation and timestamp evidence; and
10. verify exactly-once entitlement reconciliation without creating a refund or chargeback that did not occur.

Until that evidence exists, this gate can pass **repository legal-text QA** but cannot be used to claim **production § 312k compliance**.

## 13. Product-specific TycoonX handling

### Diamonds

- A one-time Diamond pack is not automatically a continuing-service contract.
- A cancellation request concerning VIP must not erase unrelated legitimately purchased Diamonds.
- A refund or reversal of one Diamond transaction may correct only the value traceable to that transaction, subject to mandatory rights and the Purchases & Refunds Policy.

### One-time 30-Day VIP

- It is exactly 30 consecutive days and does not auto-renew.
- Non-renewal does **not** by itself remove § 312k after BGH I ZR 161/24.
- Submitting a cancellation must not restart, extend or duplicate the original 30-day clock.
- If the cancellation has no substantive early-termination effect, confirm receipt and explain the legal or contractual result accurately rather than pretending the submission was never received.
- If a mandatory early-termination or refund right applies, adjust the affected period or value precisely.

### Lifetime VIP

- It is a one-time entitlement available only during selected genuine promotional sales windows.
- It may be withdrawn from future sale and may never return.
- `Lifetime` refers to the commercial operating lifetime of TycoonX for the account, subject to mandatory law and the canonical Terms.
- Closing the sales window does not remove a compliant cancellation route for already existing contracts if § 312k remains applicable to them.
- A cancellation request must not silently convert Lifetime VIP into 30-Day VIP, Diamonds, a subscription or an expiring entitlement.
- A later price or sales-window change does not retroactively reprice an earlier completed Lifetime VIP transaction.

## 14. Account compromise, fraud and abuse

The cancellation route is a sensitive account-change surface. Protect it without making it unusable.

- Use proportionate identity and contract matching.
- Rate-limit obvious automation abuse where necessary without blocking legitimate consumers.
- Do not require secrets that a compromised consumer may no longer possess if another reasonable identification route exists.
- Preserve evidence of suspicious repeated attempts.
- Do not label a cancellation submission itself as fraud, chargeback abuse or regional-price abuse.
- If account compromise is suspected, preserve the declaration and investigate whether it is authentic before applying irreversible entitlement changes where lawful.
- Security review must not become a pretext for indefinitely suppressing the statutory submission route.

## 15. Provider outages and failed confirmations

If the website, email provider, Xsolla integration, authentication system or TycoonX backend is partially unavailable:

- fail safely and preserve the consumer's submitted declaration where technically possible;
- do not change the apparent submission time to a later recovery time;
- retry the text confirmation idempotently;
- do not duplicate termination events or refunds after retry;
- provide a fallback human-reachable route while the incident is being remediated; and
- document material downtime affecting the statutory cancellation surface.

An outage does not justify deleting unrelated paid entitlements or changing a completed purchase price.

## 16. Business transfer, provider replacement and permanent shutdown

A sale of TycoonX, successor operator, Xsolla replacement, authentication migration or website redesign must include the § 312k route in the migration inventory where applicable.

Before cutover:

- identify every in-scope contract still capable of being terminated;
- preserve cancellation submissions and confirmation records;
- map the new contracting party and notification duties;
- verify the new website keeps the statutory route continuously and easily accessible;
- test the confirmation channel; and
- preserve Apple, Google Play and Xsolla transaction authority and entitlement history.

Permanent service discontinuation follows the canonical shutdown and mandatory-consumer-remedy rules. Do not present a shutdown as a consumer-requested cancellation merely to avoid remedies or notice duties.

## 17. Minimum regression scenarios

For any German web surface capable of selling 30-Day VIP, Lifetime VIP or another continuing TycoonX service, test at least:

1. A logged-out German visitor can find the statutory cancellation entry point directly and easily.
2. The first control clearly means `Verträge hier kündigen` and does not lead first to support or retention marketing.
3. The confirmation page allows contract and consumer identification without unnecessary data.
4. Ordinary cancellation can be submitted without a mandatory reason.
5. A missing requested end date does not block submission.
6. The final action clearly means `jetzt kündigen`.
7. The confirmation page contains no pause, save, retention, upgrade, coupon, Diamond, Lifetime VIP or unrelated informational offer.
8. The submitted declaration can be saved with date and time.
9. Immediate electronic text confirmation contains the declaration, receipt date and time, and intended end time.
10. A one-time 30-Day VIP is not incorrectly excluded merely because it auto-expires.
11. A one-time Lifetime VIP is not incorrectly excluded merely because it is non-renewing.
12. A pure one-off Diamond pack is not incorrectly classified as a continuing service without a reasoned basis.
13. A cancellation submission does not itself create a chargeback or fraud flag.
14. A cancellation submission does not erase unrelated purchased Diamonds.
15. A cancellation submission does not restart or duplicate the 30-Day VIP clock.
16. A cancellation submission does not expire or downgrade Lifetime VIP unless the contract actually ends through a valid legal effect.
17. A failed confirmation-email send retries without creating a duplicate cancellation event.
18. Xsolla Merchant-of-Record routing maps to the actual consumer contract instead of relying only on the label.
19. Apple and Google Play refund mechanisms remain separate from the § 312k submission route.
20. Account deletion remains separate from contract cancellation.
21. Withdrawal and digital-product statutory remedies remain separately accessible where applicable.
22. The route continues to work after authentication or provider migration.
23. German wording remains clear on mobile and desktop without hidden multi-step disclosure.
24. Static repository QA is not presented as proof that the external production webshop has passed these tests.

## 18. Evidence packet

Retain a lightweight dated evidence packet containing:

- current product, channel and contracting-party classification;
- reasoned § 312k in-scope or out-of-scope decision for Diamonds, 30-Day VIP and Lifetime VIP;
- screenshots of the first button and confirmation page where applicable;
- URL or path and logged-out accessibility test;
- form fields and which are mandatory;
- proof that the confirmation page has no additional offers or non-functional information;
- sample final confirmation;
- durable-record evidence;
- sample immediate text confirmation;
- Xsolla Merchant-of-Record and service-performance mapping;
- Apple and Google Play separation analysis;
- regression results;
- outage and fallback procedure; and
- owner and date for the next legal review.

Retention must remain proportionate under the Privacy Policy. Do not retain unnecessary payment or identity data simply to prove the button existed.

## 19. Current legal and provider checkpoint

Reviewed September 3, 2026 against:

- **BGB § 312k**, current official German statutory text: https://www.gesetze-im-internet.de/bgb/__312k.html
- **BGH, judgment of May 22, 2025, I ZR 161/24 (`Kündigungsschaltfläche`)**, confirming that one upfront fee and automatic expiry do not exclude a fixed-term continuing service from § 312k.
- **BGH, judgment of July 16, 2026, I ZR 200/25**, holding that the statutory confirmation page is exhaustively defined and must not contain additional offers or alternative decision options such as a contract pause.
- **Verbraucherzentrale, updated August 7, 2026**, summarizing current cancellation-button implementation and the July 16, 2026 BGH confirmation-page rule: https://www.verbraucherzentrale.de/kuendigungsbutton-nicht-gefunden-so-muss-die-onlinekuendigung-aussehen-78472
- **Verbraucherzentrale NRW, July 16, 2026 report on LG München I 33 O 14294/25**, used only as a non-final implementation warning concerning ambiguous buttons, mandatory ordinary-cancellation reasons and multi-step visibility: https://www.verbraucherzentrale.de/urteile/lg-muenchen-i-kuendigungsbutton-von-sky-erneut-rechtswidrig-124198
- **Xsolla Publisher Account Terms of Use, last updated June 30, 2026**: https://xsolla.com/terms-of-use
- **Xsolla Web Shop documentation**, which confirms Web Shop can be published as a live external website and can use a publisher-controlled custom domain: https://developers.xsolla.com/solutions/web-shop/test-and-publish-web-shop/publish-site/

Revalidate this gate if § 312k changes, the BGH issues materially new guidance, the TycoonX webshop contracting structure changes, Xsolla's role changes, or CK-Labs introduces any recurring subscription.

## 20. Release decision

A German TycoonX website flow is **not commercially or legally ready** for an in-scope continuing paid service if:

- CK-Labs has no documented § 312k classification;
- the analysis dismisses a one-time 30-Day VIP or Lifetime VIP solely because payment is one-time or the product is non-renewing;
- the contracting-party analysis relies only on `Xsolla is Merchant of Record` without mapping the continuing service contract;
- a required first or final cancellation control is missing, hidden or ambiguous;
- login or support contact is used to obstruct the statutory route;
- ordinary cancellation requires a reason;
- the statutory confirmation page contains retention, pause, promotional or other additional information contrary to BGH I ZR 200/25;
- the consumer cannot preserve the declaration with timestamp evidence;
- immediate text confirmation is not produced;
- a cancellation request is automatically treated as a refund, fraud, chargeback or account deletion;
- a cancellation event can duplicate or erase unrelated paid entitlements; or
- the implementation collapses § 312k cancellation, withdrawal, statutory digital-product remedies and provider refund procedures into one legally ambiguous action.

**Repository status on September 3, 2026:** legal-text QA can be hardened here, but production § 312k compliance remains **unverified** because the actual live TycoonX/Xsolla web commerce surface and contracting flow are not implemented in this repository.

This gate is founder-protective because it reduces the much larger § 312k(6) risk created by an absent or defective cancellation mechanism without inventing refund rights or weakening TycoonX's lawful entitlement, fraud, pricing or shutdown protections.