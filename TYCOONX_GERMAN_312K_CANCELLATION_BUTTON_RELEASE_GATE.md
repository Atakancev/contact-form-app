# TycoonX German BGB § 312k Cancellation-Button Release Gate

**Review date: September 3, 2026**  
Owner: CK-Labs

TycoonX went to full release on **September 1, 2026**. This is a production compliance gate for German consumer contracts that may fall within **BGB § 312k**. It is intentionally separate from withdrawal, refund, account-deletion, digital-product-remedy and provider-dispute flows.

The highest-risk TycoonX scenario is a paid VIP entitlement sold through a website: the Bundesgerichtshof held on **May 22, 2025 (I ZR 161/24)** that § 312k can apply to a fixed-term continuing contract even when the consumer pays only **one upfront fee** and the contract **ends automatically** after its agreed term. That means a one-time price and automatic expiry are not safe reasons to dismiss § 312k for a web-sold one-time 30-Day VIP or another continuing digital service.

This gate does not assert that every TycoonX product or every Apple, Google Play or Xsolla transaction is subject to § 312k. It requires CK-Labs to classify the real contract, channel and contracting party instead of assuming that `one-time`, `non-renewing`, `Lifetime`, `Merchant of Record`, or `app purchase` automatically resolves the issue.

## 1. Statutory trigger to classify

Under current **BGB § 312k(1)**, the special cancellation-button duties apply where consumers are enabled **via a website** to conclude an electronic-commerce contract aimed at establishing a **Dauerschuldverhältnis** under which an entrepreneur owes a **paid performance**, subject to the statutory exceptions such as financial services.

For every German TycoonX paid product that can be obtained through a website, record:

1. the product/entitlement;
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

The Court treated the entrepreneur's continuing/repeated performance during the term as capable of creating the relevant continuing obligation. The Court also emphasized the consumer-protection purpose of keeping termination as easy to declare as online conclusion.

### TycoonX consequence

- **One-time 30-Day VIP:** if a German consumer can conclude the relevant VIP service contract through a website and the relevant entrepreneur owes continuing VIP performance throughout the 30 days, treat § 312k as a **P0 classification issue**. `It is non-renewing` is not enough to dismiss the rule.
- **Lifetime VIP:** if a German consumer can conclude through a website a contract under which the relevant entrepreneur owes continuing VIP performance for the commercial operating lifetime of TycoonX, treat § 312k as a **P0 classification issue** even though Lifetime VIP is purchased once and is offered only during selected genuine sales windows.
- **Diamonds:** an ordinary Diamond pack intended as a one-off delivery of virtual currency is not automatically the same type of continuing obligation. Do not force it into § 312k merely because the player later spends the Diamonds. Reassess if a future Diamond product itself includes continuing paid services or recurring delivery.

Lifetime VIP remains a limited-time promotional offering that may be available only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous future sale availability. The § 312k analysis concerns termination mechanics for an existing contract, not whether CK-Labs must keep Lifetime VIP on sale.

## 3. The right to submit a cancellation is not the same as a substantive refund right

The legislative materials for § 312k state that the duty to provide the cancellation mechanism does **not depend on whether the consumer actually has a substantive right to ordinary cancellation in the individual case**. The button is a means of transmitting a cancellation declaration.

Therefore:

- do not hide or disable the button merely because a 30-Day VIP has a fixed end date;
- do not reject access to the button merely because Lifetime VIP has no ordinary short notice period in the Terms;
- accept and timestamp the consumer's declaration first, then determine its legal effect;
- do not promise that every button submission automatically creates a full refund;
- do not describe a failed ordinary cancellation request as fraud, chargeback abuse or entitlement abuse merely because no ordinary termination right exists; and
- preserve any mandatory extraordinary-termination, conformity, withdrawal or digital-product rights that apply separately.

If a valid termination produces a refund, price reduction, pro-rata consequence or entitlement adjustment under mandatory law or the applicable contract, process that consequence through the correct Apple, Google Play, Xsolla or CK-Labs route. Do not invent a refund rule solely from the existence of the button.

## 4. Missing or defective button creates a serious founder risk

Under **BGB § 312k(6)**, if the required buttons and confirmation page are not provided in accordance with the statutory requirements, a consumer may cancel a covered contract **at any time and without observing a notice period**.

This consequence makes `we do not offer subscriptions` an unsafe compliance assumption. A fixed-term, one-time-fee continuing service can still be covered after BGH I ZR 161/24.

Treat a missing or materially defective § 312k flow as a production legal incident for any product classified as in scope. Preserve affected-contract dates, surface versions and remediation timing so CK-Labs can assess consumer consequences consistently rather than inventing case-by-case answers.

## 5. Required first cancellation control

Where § 312k applies, the website must provide a clearly readable cancellation control labeled with nothing other than **`Verträge hier kündigen`** or an equivalently unambiguous formulation.

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
- do not make a requested termination date mandatory in a way that blocks submission, because § 312k(5) supplies the earliest possible time in case no time is stated;
- ask only for information reasonably needed to identify the consumer and contract;
- do not demand unnecessary payment-card, identity-document or unrelated personal data merely to discourage cancellation;
- if a purchase/order/transaction identifier is unknown, provide a reasonable alternative identification route; and
- do not preselect a cancellation type that creates an unintended legal declaration.

A July 14, 2026 decision of the **LG München I (33 O 14294/25)**, reported by Verbraucherzentrale NRW and noted as not yet final, is an additional implementation warning: the court objected to an ambiguous parallel-button design, a mandatory reason for ordinary cancellation, and a form whose relevant content became visible only after multiple steps. Treat those patterns as high-risk even while the decision remains non-final.

## 7. Final confirmation control

The confirmation page must contain a clear final button labeled with nothing other than **`jetzt kündigen`** or an equivalently unambiguous formulation.

Do not:

- place a retention offer between the first statutory button and the final cancellation submission in a way that obstructs the statutory route;
- make the user call support before the final button becomes available;
- swap the final button's meaning based on a dark-pattern choice;
- preselect a paid replacement product; or
- convert the cancellation into an account deletion, chargeback, refund request or product downgrade unless the consumer separately asks for that action.

A voluntary save/retention offer can be shown in a manner that does not block, delay, obscure or replace the statutory cancellation route.

## 8. Durable evidence and immediate text confirmation

Under **BGB § 312k(3)-(4)**, the consumer must be able to preserve the submitted cancellation declaration with its submission date and time on a durable medium, and the entrepreneur must immediately confirm electronically in text form:

- the content of the cancellation declaration;
- the date and time it was received; and
- the time at which the contract is intended to end.

TycoonX implementation should preserve an immutable server-side event containing at least:

- contract/product identifier;
- consumer/account or transaction identifier used for matching;
- submission timestamp;
- selected cancellation type;
- requested end time, if supplied;
- confirmation destination;
- generated confirmation ID;
- surface/version identifier; and
- the confirmation-send result.

Do not silently rewrite the original submission because an agent later decides the legal effect is different. Store the original declaration and the later decision as separate events.

## 9. Do not confuse § 312k with withdrawal

The § 312k cancellation button is **not** the same as:

- the German/EU withdrawal right;
- the electronic withdrawal function required where separately applicable;
- a refund request;
- a defect/non-conformity remedy;
- the right to terminate a digital-product contract following a qualifying detrimental modification;
- an Apple or Google refund request;
- an Xsolla refund request; or
- TycoonX account deletion.

The legislative materials expressly distinguish ordinary/extraordinary `Kündigung` under § 312k from other contract-ending rights, including digital-product termination rights for non-provision, defects or detrimental changes. Preserve those separate paths instead of funneling every legal remedy into one button.

A player can therefore have a valid statutory digital-product remedy even if an ordinary contractual cancellation would not itself create a refund.

## 10. Website/channel mapping

### CK-Labs TycoonX web shop

If a CK-Labs-controlled website enables a German consumer to conclude an in-scope continuing-service contract, perform the § 312k analysis on that website and the relevant contracting relationship.

Do not treat a redirect, iframe, hosted checkout or provider widget as proof that CK-Labs has no duty. Map who actually offers the continuing service and who contracts with the consumer.

### Xsolla

Xsolla currently describes itself as a **Merchant of Record** for Web Shop and other game-commerce transactions and says it handles payment, tax, refund and commerce-compliance functions. Xsolla's Publisher Account Terms also state that Xsolla acts as merchant of record for Digital Content according to the applicable agreement, while publisher compliance responsibilities remain separately relevant.

That allocation is important but is **not a substitute for a contract map**. Before relying on Xsolla for a German § 312k flow, preserve evidence showing:

- which Xsolla legal entity is seller/Merchant of Record for the German transaction;
- which party is the entrepreneur owing the continuing VIP performance;
- whose website legally enables conclusion of that contract;
- whether Xsolla supplies a compliant § 312k route for the relevant contract;
- whether CK-Labs has a separate service contract that can itself be terminated; and
- how a cancellation event reaches TycoonX so the service state is reconciled once, without duplicate entitlement changes.

Do not tell a consumer `Xsolla handles everything` unless the actual agreement and implementation support that statement.

### Apple App Store and Google Play

Section 312k is specifically framed around contracts that consumers can conclude **via a website**. A native Apple App Store or Google Play purchase therefore must not be mechanically treated as a CK-Labs website transaction.

However, do not assume that `bought in the app store` ends the analysis. The legislative materials explain that the entrepreneur's duty is not limited to contracts originally concluded electronically; what matters includes whether, at the relevant time, the entrepreneur enables conclusion of the relevant contract through a website. Contracting-party and product equivalence must be mapped carefully.

Keep platform refund/transaction functions separate from the German cancellation-submission mechanism. A cancellation declaration must not replay an Apple transaction, consume a Google purchase token twice, or manufacture a provider refund that has not actually occurred.

## 11. Product-specific TycoonX handling

### Diamonds

- A one-time Diamond pack is not automatically a continuing-service contract.
- A cancellation request concerning VIP must not erase unrelated legitimately purchased Diamonds.
- A refund/reversal of one Diamond transaction may correct only the value traceable to that transaction, subject to mandatory rights and the Purchases & Refunds Policy.

### One-time 30-Day VIP

- It is exactly 30 consecutive days and does not auto-renew.
- Non-renewal does **not** by itself remove § 312k after BGH I ZR 161/24.
- Submitting a cancellation must not restart, extend or duplicate the original 30-day clock.
- If the cancellation has no substantive early-termination effect, confirm receipt and explain the legal/contractual result accurately rather than pretending the submission was never received.
- If a mandatory early-termination/refund right applies, adjust the affected period/value precisely.

### Lifetime VIP

- It is a one-time entitlement available only during selected genuine promotional sales windows.
- It may be withdrawn from future sale and may never return.
- `Lifetime` refers to the commercial operating lifetime of TycoonX for the account, subject to mandatory law and the canonical Terms.
- Closing the sales window does not remove a compliant cancellation route for already existing contracts if § 312k remains applicable to them.
- A cancellation request must not silently convert Lifetime VIP into 30-Day VIP, Diamonds, a subscription or an expiring entitlement.
- A later price or sales-window change does not retroactively reprice an earlier completed Lifetime VIP transaction.

## 12. Account compromise, fraud and abuse

The cancellation route is a sensitive account-change surface. Protect it without making it unusable.

- Use proportionate identity/contract matching.
- Rate-limit obvious automation abuse where necessary without blocking legitimate consumers.
- Do not require secrets that a compromised consumer may no longer possess if another reasonable identification route exists.
- Preserve evidence of suspicious repeated attempts.
- Do not label a cancellation submission itself as fraud, chargeback abuse or regional-price abuse.
- If account compromise is suspected, preserve the declaration and investigate whether it is authentic before applying irreversible entitlement changes where lawful.
- Security review must not become a pretext for indefinitely suppressing the statutory submission route.

## 13. Provider outages and failed confirmations

If the website, email provider, Xsolla integration, authentication system or TycoonX backend is partially unavailable:

- fail safely and preserve the consumer's submitted declaration where technically possible;
- do not change the apparent submission time to a later recovery time;
- retry the text confirmation idempotently;
- do not duplicate termination events or refunds after retry;
- provide a fallback human-reachable route while the incident is being remediated; and
- document material downtime affecting the statutory cancellation surface.

An outage does not justify deleting unrelated paid entitlements or changing a completed purchase price.

## 14. Business transfer, provider replacement and permanent shutdown

A sale of TycoonX, successor operator, Xsolla replacement, authentication migration or website redesign must include the § 312k route in the migration inventory where applicable.

Before cutover:

- identify every in-scope contract still capable of being terminated;
- preserve cancellation submissions and confirmation records;
- map the new contracting party and notification duties;
- verify the new website keeps the statutory route continuously and easily accessible;
- test the confirmation channel; and
- preserve Apple/Google/Xsolla transaction authority and entitlement history.

Permanent service discontinuation follows the canonical shutdown and mandatory-consumer-remedy rules. Do not present a shutdown as a consumer-requested cancellation merely to avoid remedies or notice duties.

## 15. Minimum regression scenarios

For any German web surface capable of selling 30-Day VIP, Lifetime VIP or another continuing TycoonX service, test at least:

1. A logged-out German visitor can find the statutory cancellation entry point directly and easily.
2. The first control clearly means `Verträge hier kündigen` and does not lead first to support or retention marketing.
3. The confirmation page allows contract and consumer identification without unnecessary data.
4. Ordinary cancellation can be submitted without a mandatory reason.
5. A missing requested end date does not block submission.
6. The final action clearly means `jetzt kündigen`.
7. The submitted declaration can be saved with date and time.
8. Immediate electronic text confirmation contains the declaration, receipt date/time and intended end time.
9. A one-time 30-Day VIP is not incorrectly excluded merely because it auto-expires.
10. A one-time Lifetime VIP is not incorrectly excluded merely because it is non-renewing.
11. A pure one-off Diamond pack is not incorrectly classified as a continuing service without a reasoned basis.
12. A cancellation submission does not itself create a chargeback or fraud flag.
13. A cancellation submission does not erase unrelated purchased Diamonds.
14. A cancellation submission does not restart or duplicate the 30-Day VIP clock.
15. A cancellation submission does not expire or downgrade Lifetime VIP unless the contract actually ends through a valid legal effect.
16. A failed confirmation-email send retries without creating a duplicate cancellation event.
17. Xsolla Merchant-of-Record routing maps to the actual consumer contract instead of relying only on the label.
18. Apple and Google refund mechanisms remain separate from the § 312k submission route.
19. Account deletion remains separate from contract cancellation.
20. Withdrawal and digital-product statutory remedies remain separately accessible where applicable.
21. The route continues to work after authentication/provider migration.
22. German wording remains clear on mobile and desktop without hidden multi-step disclosure.

## 16. Evidence packet

Retain a lightweight dated evidence packet containing:

- current product/channel/contracting-party classification;
- reasoned § 312k in-scope/out-of-scope decision for Diamonds, 30-Day VIP and Lifetime VIP;
- screenshots of the first button and confirmation page where applicable;
- URL/path and logged-out accessibility test;
- form fields and which are mandatory;
- sample final confirmation;
- durable-record evidence;
- sample immediate text confirmation;
- Xsolla Merchant-of-Record and service-performance mapping;
- Apple/Google separation analysis;
- regression results;
- outage/fallback procedure; and
- owner/date for the next legal review.

Retention must remain proportionate under the Privacy Policy. Do not retain unnecessary payment or identity data simply to prove the button existed.

## 17. Current legal and provider checkpoint

Reviewed September 3, 2026 against:

- **BGB § 312k**, current official German statutory text: https://www.gesetze-im-internet.de/bgb/__312k.html
- **BGH, judgment of May 22, 2025, I ZR 161/24 (`Kündigungsschaltfläche`)**, confirming that one upfront fee and automatic expiry do not exclude a fixed-term continuing service from § 312k: https://juris.bundesgerichtshof.de/cgi-bin/rechtsprechung/document.py?Art=en&Blank=1.pdf&Datum=Aktuell&Gericht=bgh&Sort=12288&anz=1111&nr=141921&pos=11
- **Bundestag BT-Drs. 19/30840**, including the explanation that button availability is independent of whether a substantive cancellation right exists in the individual case and distinguishing other digital-product termination rights: https://dserver.bundestag.de/btd/19/308/1930840.pdf
- **Verbraucherzentrale NRW, July 16, 2026 report on LG München I 33 O 14294/25**, used only as a non-final implementation warning concerning ambiguous buttons, mandatory ordinary-cancellation reasons and multi-step visibility: https://www.verbraucherzentrale.de/urteile/lg-muenchen-i-kuendigungsbutton-von-sky-erneut-rechtswidrig-124198
- **Xsolla current Merchant-of-Record description**: https://xsolla.com/merchant-of-record
- **Xsolla Publisher Account Terms of Use, last updated June 30, 2026**: https://xsolla.com/terms-of-use

Revalidate this gate if § 312k changes, the BGH issues materially new guidance, the TycoonX webshop contracting structure changes, Xsolla's role changes, or CK-Labs introduces any recurring subscription.

## 18. Release decision

A German TycoonX website flow is **not commercially/legal ready** for an in-scope continuing paid service if:

- CK-Labs has no documented § 312k classification;
- the analysis dismisses a one-time 30-Day VIP or Lifetime VIP solely because payment is one-time or the product is non-renewing;
- the contracting-party analysis relies only on `Xsolla is Merchant of Record` without mapping the continuing service contract;
- a required first or final cancellation control is missing, hidden or ambiguous;
- login/support contact is used to obstruct the statutory route;
- ordinary cancellation requires a reason;
- the consumer cannot preserve the declaration with timestamp evidence;
- immediate text confirmation is not produced;
- a cancellation request is automatically treated as a refund, fraud, chargeback or account deletion;
- a cancellation event can duplicate or erase unrelated paid entitlements; or
- the implementation collapses § 312k cancellation, withdrawal, statutory digital-product remedies and provider refund procedures into one legally ambiguous action.

This gate is founder-protective because it reduces the much larger § 312k(6) risk created by an absent or defective cancellation mechanism without inventing refund rights or weakening TycoonX's lawful entitlement, fraud, pricing or shutdown protections.