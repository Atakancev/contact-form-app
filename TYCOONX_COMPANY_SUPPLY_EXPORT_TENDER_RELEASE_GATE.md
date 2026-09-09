# TycoonX Company Supply, Export and Tender Legal / Release Gate

**Status:** code-first legal hardening and implementation QA  
**Reviewed:** September 10, 2026  
**Operator:** CK-Labs  
**Database safety:** read-only production inspection only. This document authorizes no database, function, trigger, policy, schema or configuration change.

## 1. Why this gate exists

TycoonX Company commerce is not a generic player-to-player transfer surface. The deployed client and production backend contain several distinct Company systems with different actors, permissions, settlement moments and economic effects:

- Company supply requests;
- member deliveries from personal inventory;
- authorized warehouse fulfillment;
- Company export/procurement offers;
- live and blind tenders;
- tender award to a supplier Company;
- Company-to-Company contract completion;
- failure/penalty handling; and
- insolvency and treasury consequences.

The legal rule therefore cannot be “money moved, so it was a donation” or “the server allowed it, so it can never be abuse.” The correct rule is purpose- and evidence-based: genuine use of the deployed commercial mechanic is allowed; sham procurement, collusion, controlled-account self-dealing, artificial settlement and knowing exploit use are not protected merely because a button or RPC accepted the action.

This gate also records implementation differences that matter before CK-Labs relies on a transaction pattern for enforcement.

## 2. Current implementation sources inspected

This September 10 review used:

- the current Flutter Company supply UI and Company commerce paths in `Atakancev/terrax-flutter`;
- read-only `pg_proc` / `pg_get_functiondef(...)` inspection on the production TycoonX Supabase project;
- current economy/Finance V2 research in the Flutter repository; and
- the current TycoonX Terms/legal repository.

Important production functions reviewed include:

- `company_supply_request_create(...)`;
- `company_supply_request_update(...)`;
- `company_supply_request_delete(...)`;
- `company_supply_request_close(...)`;
- `company_supply_deliver(...)` and its current Finance V2 inner implementation;
- `company_supply_deliver_from_warehouse(...)`;
- `new_company_offer_create(...)`;
- `new_company_tender_bid(...)`;
- `new_company_tenders_sweep()`;
- `new_company_export_accept(...)`;
- `new_company_export_complete(...)`;
- `new_company_export_fail(...)`;
- `new_company_export_fail_internal(...)`; and
- `new_company_export_sweep_overdue()`.

No production write was made during this review.

## 3. Supply requests are a real procurement mechanic

### Current server purpose

The richer current `company_supply_request_create(...)` path requires an authenticated Company actor with `manage_supply`, validates quantity and quality, supports a deadline and note, blocks creation for an insolvent Company, and can link a supply request to an export contract or a current V2 export offer.

For an ordinary unlinked request, the current richer overload applies a configurable/catalog-derived price guard that presently rejects a unit price above 10x the product base price. Older retained overloads use different historic guards. These numeric ceilings are implementation configuration, not promises that every price under the ceiling is fair or that every price over a former ceiling is abusive.

For a linked request, the creation path checks that the request belongs to the Company and that its price does not exceed the relevant export contract/offer price. It also carries forward the required quality in the current V2 path.

### Legal consequence

A genuine Company supply request is permitted gameplay. A Company may choose to procure stock from its members at a commercially unusual price within the game without that fact alone establishing wrongdoing.

However, a request can be reviewed when there is reasonable evidence that its real purpose is sham procurement, a disguised transfer, circular self-dealing, exploit laundering, RMT or another prohibited arrangement. Price is a signal, not a verdict.

## 4. Member delivery is an intended value transfer backed by goods

The current ordinary `company_supply_deliver(...)` path ultimately uses the Finance V2 inner implementation. In the deployed design, an active Company member supplies qualifying personal inventory into the Company supply flow; the Company treasury pays the supplying player; qualifying stock and quality are checked; the request progresses; and the transaction is recorded.

That is an intentionally supported Company-to-member transfer when backed by a genuine delivery of the required product.

Therefore:

- a member being paid by their Company for actual qualifying goods is not automatically a gift or donation;
- a high profit margin is not automatically abuse;
- Company membership itself is not evidence of collusion; and
- enforcement must be based on the whole arrangement, not merely the fact that treasury money reached a member.

Review is appropriate where evidence shows false fulfillment, controlled-account circular transfers, knowingly manipulated request terms, duplicated stock, exploit-generated goods, deliberate quality bypass or another non-genuine purpose.

## 5. Warehouse fulfillment has a specialist-transfer semantic and needs special care

The current `company_supply_deliver_from_warehouse(...)` path requires `manage_supply`, consumes Company warehouse stock, subtracts the supply-request value from Company treasury and credits that value to the acting user. Existing Finance V2 research classifies this as a **specialist supply transfer** rather than a system expense.

This means CK-Labs must not write or enforce a hidden rule that assumes every warehouse fulfillment should move no personal value. The deployed mechanic currently does move value to the authorized acting specialist.

At the same time, technical availability is not an unlimited safe harbor. In particular:

- an acting manager must not knowingly loop, coordinate or manipulate the mechanic mainly to extract Company treasury outside its genuine supply purpose;
- an artificial supply price used mainly to enrich the actor or a controlled account can be relevant evidence;
- a compromised manager account is a different causation question from voluntary self-dealing; and
- a one-off ordinary use of a visible Company control should not automatically be treated as intentional exploit abuse without evidence that the player knew or should reasonably have understood that the result was invalid.

If product intent later changes so that warehouse fulfillment should not compensate the acting specialist, engineering must change the gameplay implementation and player-facing presentation rather than attempting to create that new rule only through retroactive enforcement.

## 6. Important integrity finding: linked-request update price revalidation is not symmetric

The current richer `company_supply_request_create(...)` path checks a linked legacy export contract or V2 offer and prevents the initial supply-request unit price from exceeding the linked contract/offer price.

The current richer `company_supply_request_update(...)` path preserves important linked-request fields, but the reviewed definition does **not clearly reapply the linked contract/V2-offer price ceiling before writing the new `unit_price`**. Older retained overloads contain different checks.

This is a live implementation/legal-enforcement risk because a `manage_supply` actor may be able to produce a server-accepted linked request state that could not have been created initially under the same commercial terms.

Legal rule:

- server acceptance of such an edited price is not conclusive proof that the economic state is valid;
- knowingly using an obviously inconsistent linked-request price mainly to funnel Company value can fall under exploit/self-dealing rules;
- accidental or ordinary use must be distinguished from knowing/repeated extraction; and
- CK-Labs may correct directly attributable invalid settlement while preserving unrelated legitimate state and mandatory rights.

Engineering follow-up, **not performed by this legal run**:

1. make linked-price validation symmetric between create and update for every supported overload;
2. decide which legacy overloads remain intentionally callable;
3. make the authoritative contract/offer price cap explicit in one shared server helper where practicable; and
4. add regression tests proving that an edit cannot create a linked request that the creation path would reject.

Until that is completed, a server-success response for the edited price should be treated as implementation evidence, not decisive legal authorization.

## 7. Export/procurement offers are Company-to-Company commitments

The current `new_company_offer_create(...)` path supports `export` and `tender` channels. It uses `manage_exports` for export offers and `manage_tenders` for tenders, rejects insolvent Companies, checks available treasury and warehouse capacity, applies current catalog-related price boundaries, limits penalty size, and supports targeted visibility.

For the current `export` channel, the issuer is a Company buyer/procurer seeking specified goods. Another Company with `manage_exports` can accept the offer through `new_company_export_accept(...)`. Acceptance records the supplier Company and actor but does not itself complete delivery or settle the full commercial exchange.

Legal consequence:

- creating or accepting an offer is a gameplay commitment, not proof that goods were delivered;
- an authorized officer may legitimately accept a commercially risky contract;
- accepting through a controlled second Company solely to manufacture a transfer or evade a restriction can still be reviewed; and
- an account-compromise or stale-permission incident must be considered before treating the Company as intentionally abusive.

## 8. Export completion is the economic settlement point

The current `new_company_export_complete(...)` path requires the accepted supplier Company and `manage_exports`, verifies accepted status and deadline, checks supplier warehouse quantity and quality, and for a Company procurement request checks the buyer Company treasury and free warehouse capacity before settlement.

On successful completion the current path:

- removes the qualifying goods from the supplier Company warehouse;
- debits the buyer Company treasury;
- adds the goods to the buyer Company warehouse;
- credits the supplier Company treasury;
- records Company/market transactions; and
- marks the offer completed.

That transaction is a genuine goods-for-Company-value settlement when the server facts are valid.

Accordingly:

- the supplier being paid is not automatically wealth funneling;
- a profitable contract is not automatically manipulation;
- a buyer choosing an expensive supplier is not automatically collusion; and
- completed server settlement remains subject to correction only where there is a concrete defect such as duplicate settlement, invalid stock, manipulated linked terms, fraud or exploit activity.

## 9. Tender bidding and award are competitive Company mechanics

Current `new_company_tender_bid(...)`:

- authenticates the actor;
- derives the actor’s current Company;
- requires `manage_tenders`;
- blocks an insolvent Company;
- blocks the issuing Company from bidding on its own tender;
- respects targeted visibility;
- supports live and blind tenders;
- permits one sealed bid per Company for a blind tender;
- permits updates in a live tender; and
- currently contains anti-sniping time-extension behavior near the end of bidding.

Current `new_company_tenders_sweep()` selects the lowest bid, with bid creation time as the tie-breaker, and creates an accepted export contract for the winning supplier Company.

Legal consequence:

Ordinary competitive bidding is permitted. The following may be reviewed when supported by evidence:

- bid rigging or coordinated tender allocation;
- fake competition between Companies under common control;
- sacrificial bids intended primarily to transfer value or manipulate another Company;
- coordination to defeat blind-tender integrity;
- deliberately false bids where the real plan is non-performance or penalty manipulation;
- timing/duplicate-state exploit use; and
- RMT consideration connected to bid or award outcomes.

A low bid, repeated wins, one Company being commercially stronger, or a tender loss is not enough on its own to prove collusion.

## 10. Failure and penalty are normal possible outcomes, not misconduct by themselves

The current `new_company_export_fail_internal(...)` distinguishes an unaccepted expired offer from an accepted failed contract. For an accepted contract, it calculates the configured/current penalty, debits the supplier Company, and for a Company procurement request can credit the buyer Company. It also updates insolvency state and records the result.

The overdue sweep processes accepted contracts after their deadline and also performs cleanup of old unresolved offers.

Therefore:

- a contract failure or penalty is a built-in gameplay outcome and is not automatically a Terms violation;
- insolvency caused by a legitimate contractual loss is not automatically cheating;
- intentionally engineering failure between controlled Companies to move value, manipulate insolvency or exploit state transitions can be reviewed separately;
- outages, stale UI, delayed jobs or backend errors must be separated from voluntary non-performance; and
- a later correction must not double-penalize the same economic event.

## 11. Permission model: feature authority is specific, not universal

Current Company commerce uses feature-specific permissions:

- `manage_supply` for supply-request management and warehouse fulfillment;
- `manage_exports` for current export acceptance/completion/failure paths; and
- `manage_tenders` for current tender creation/bidding paths.

A user’s current role or custom Company permissions can change over time. A permission that authorizes one feature does not create a contractual promise that the same user will always be authorized, and authority in one module does not imply authority in every Company module.

For enforcement and support:

- record the actor and Company at the relevant time;
- use authoritative server records rather than a later screenshot of a changed role;
- treat account compromise or permission drift as evidence questions; and
- do not automatically punish the whole Company for one compromised or rogue actor without considering causation and proportionality.

## 12. Server authority does not mean server infallibility

For these Company systems, authoritative server transaction/state records are the primary operational evidence. They are still capable of reflecting a bug, stale state, duplicated job, source-drifted overload or configuration error.

The legal doctrine is therefore:

1. the client display is not final authority over server state;
2. a successful RPC is not an absolute safe harbor for knowing exploit use;
3. a server record is not immune from correction when objective technical evidence shows it is invalid;
4. correction should target the directly attributable invalid state rather than unrelated legitimate wealth;
5. punitive sanctions require stronger evidence than a mechanical reconciliation; and
6. ordinary outages, accidental one-off use and compromised accounts must be distinguished from deliberate or repeated abuse.

## 13. State correction versus punishment

When Company commerce produces invalid state, CK-Labs may, where lawful and technically supportable:

- restore duplicated or wrongly removed goods;
- remove directly attributable duplicate or invalid goods;
- reverse directly attributable invalid Company or player credits;
- restore directly attributable wrongly debited Company value;
- reconcile an invalid penalty once;
- correct a delivery/request/offer/tender state;
- prevent a late duplicate completion after an already final resolution; and
- temporarily contain affected commerce while the event is investigated.

Those actions are economic-state correction. They are not automatically a finding of fraud or cheating.

Warnings, trade restrictions, suspensions or termination should depend on evidence of intent, repetition, coordination, concealment, prior notice, severity or another appropriate factor. A player should not lose unrelated legitimate paid Diamonds, VIP or other unrelated paid value merely because a Company commerce record needed correction, except where a distinct lawful basis requires otherwise.

## 14. Consumer-law boundary

These gameplay rules do not waive mandatory German/EU digital-product rights.

In particular:

- German BGB § 307 requires standard terms to remain clear and not unreasonably disadvantage the contractual counterparty;
- BGB § 327d requires covered digital products to be supplied in conformity with the applicable statutory requirements; and
- BGB § 327i preserves qualifying consumer remedies for defective digital products, including cure and, where the statutory conditions are met, termination, price reduction and damages/remedies referenced there.

Accordingly, CK-Labs cannot label a genuine service defect “gameplay punishment” merely to avoid a mandatory remedy. Conversely, mandatory consumer rights do not create a right to keep value knowingly obtained through fraud, duplication or exploit abuse where lawful correction is available.

## 15. Player-facing wording synchronized by this run

`CompanyCommerceRuleNotice.tsx` renders a concise clarification on:

- the canonical English Terms route; and
- every localized `/tycoonx-legal/{locale}/terms` route.

The notice states that Company supply, warehouse fulfillment, exports and tenders are genuine gameplay mechanics; prohibits sham procurement, collusion, controlled-account self-dealing, false fulfillment, deliberate non-performance, artificial value-funneling prices and knowing settlement/state exploitation; rejects automatic guilt from price/profit/failure alone; and preserves proportional correction, account-compromise/outage distinctions, unrelated legitimate paid value and mandatory consumer rights.

This is a clarification of the existing genuine-purpose/exploit doctrine, not a new retroactive prohibition on ordinary Company gameplay.

## 16. Regression scenarios

The following scenarios should remain legally and technically distinguishable:

1. Member sells genuinely owned qualifying goods into a real Company supply request at the displayed terms -> allowed gameplay.
2. Company member makes a large legitimate profit on a delivery -> not automatically abuse.
3. `manage_supply` actor creates a genuine high-priced unlinked procurement request within current server rules -> price alone is not proof.
4. Controlled accounts create a sham request mainly to move Company treasury -> reviewable when evidence supports the real purpose.
5. Linked supply request is edited into a price state inconsistent with its underlying contract/offer because the server update path failed to revalidate the cap -> correct attributable state; server acceptance is not decisive authorization.
6. Player uses such an inconsistency once through ordinary UI without reason to recognize the defect -> do not automatically classify as intentional exploit abuse.
7. Player repeatedly coordinates the inconsistency to drain Company treasury after recognizing the abnormal settlement -> strong exploit/self-dealing signal.
8. Authorized warehouse specialist uses the current warehouse-fulfillment mechanic for its genuine purpose and receives the mechanic’s recorded specialist transfer -> not automatically abuse.
9. Compromised manager account performs warehouse fulfillment -> contain and investigate compromise before attributing intent to the owner.
10. Tender participant submits the lowest legitimate bid and wins repeatedly -> not automatically collusion.
11. Two commonly controlled Companies coordinate bids to create fake competition -> reviewable collusion/self-dealing signal.
12. Blind-tender bidder attempts multiple identities/Companies to defeat the one-sealed-bid design -> reviewable anti-evasion signal.
13. A tender is lost normally -> no misconduct.
14. A tender award becomes an accepted export contract -> award is not yet proof of delivery.
15. Supplier completes with sufficient quantity/quality and receives Company treasury payment -> legitimate settlement.
16. Supplier lacks stock and cannot complete -> ordinary gameplay failure unless other evidence shows intentional manipulation.
17. Contract reaches deadline and system applies the configured failure/penalty state -> not automatically a Terms violation.
18. Backend outage or stale job causes an incorrect failure/penalty -> reconcile defect and preserve mandatory remedies; do not call the outage fraud.
19. Duplicate completion credits supplier twice -> remove only directly attributable duplicate value and fix state.
20. Correct completion appears twice in a stale client -> client display alone does not create a second entitlement/value right.
21. Old overload and new overload enforce different historic price guards -> engineering source drift, not automatic player wrongdoing.
22. Company becomes insolvent after a legitimate penalty -> gameplay outcome, not automatic cheating.
23. Controlled Companies deliberately trigger penalties to transfer value -> reviewable when evidence establishes the arrangement.
24. Officer loses a permission after the transaction -> later role state does not retroactively prove the earlier action unauthorized.
25. Account compromise changes permissions or acts through an authorized role -> security review and containment precede punitive attribution.
26. CK-Labs corrects an invalid Company settlement -> correction does not authorize confiscation of unrelated valid purchased Diamonds or VIP.
27. A player challenges a correction with transaction evidence -> support reviews authoritative server records and known incident data rather than relying only on screenshots.
28. A valid Company transaction is unusual but follows the mechanic’s genuine purpose -> unusual economics alone is not a breach.

## 17. Release decision

The legal wording is safe to publish with the synchronized Company commerce clarification.

The **engineering integrity follow-up remains open** for linked supply-request update price revalidation and retained overload drift. That engineering issue does not justify a database change during this legal audit and does not justify retroactive punishment of ordinary users without evidence of knowing abuse.

Next code-first legal target after this Company commerce cluster: **Union treasury/governance**, including membership fees, leader deposits/withdrawals, projects/rewards, polls, upgrades, closure and alternate-account/limit-evasion behavior.
