# TycoonX German Data-for-Digital-Service & User-Created-Content Exit Release Gate

Last reviewed: September 2, 2026
Owner: CK-Labs
Scope: German/EU consumer contracts for TycoonX digital content and digital services where a consumer pays money, provides a digital representation of value, or provides/undertakes to provide personal data; contract termination; privacy-right exercises; user-created content; account closure; and paid-entitlement isolation.

## Purpose

TycoonX is free to access in important parts and also offers paid Diamonds, one-time 30-Day VIP, and limited-window Lifetime VIP. German digital-product law does not become irrelevant merely because a particular player did not pay money.

This gate closes a separate implementation gap under BGB §§ 327 et seq.:

1. when a consumer contract for a digital product can fall within the German digital-product regime because the consumer provides personal data instead of, or in addition to, money;
2. how a consumer's later GDPR/privacy choices interact with the contract under BGB § 327q;
3. how defect remedies differ for a contract within BGB § 327(3);
4. what happens to non-personal content the consumer created or supplied after contract termination under BGB § 327p; and
5. how these rules must coexist with GDPR erasure/portability, account deletion, Apple/Google/Xsolla purchase records, Diamonds, 30-Day VIP, and Lifetime VIP.

This is an operational release gate. It does not replace the canonical TycoonX Terms, Privacy Policy, Purchases & Refunds Policy, Community Standards, mandatory law, or provider terms. English remains canonical. Do not reopen completed localization unless public contractual meaning changes materially.

## 1. BGB § 327(3): a free-looking digital service can still be in scope

BGB § 327 applies to consumer contracts for digital content or digital services. Under § 327(3), the digital-product rules can also apply where the consumer **provides personal data or undertakes to provide personal data**, unless the exception linked to BGB § 312(1a) sentence 2 applies.

The exception is narrow: it applies where the trader processes the provided personal data **exclusively** to perform its contractual obligation or comply with legal requirements and does not process those data for another purpose.

### TycoonX classification rule

Do not use either of these shortcuts:

- `The game is free, so §§ 327 ff. cannot apply.`
- `The user has an account, so §§ 327 ff. always apply.`

Instead record, for each relevant consumer service relationship:

1. **Contract:** is there a consumer contract for the supply of digital content or a digital service?
2. **Data supplied/committed:** what personal data does the consumer provide or agree will be processed?
3. **Purpose:** is that data processed exclusively for supply/legal compliance, or also for another purpose?
4. **Other-purpose evidence:** analytics, advertising, profiling, cross-service improvement, optional personalization, attribution, or another secondary purpose must be classified accurately rather than hidden under `service operation`.
5. **Result:** document whether the relationship is within BGB § 327(1), § 327(3), another rule, or outside the relevant consumer-contract scope.

A payment, Apple/Google/Xsolla purchase, or Diamond purchase can create its own paid contract analysis. The data-for-service analysis concerns the underlying digital-service relationship and must not be used to merge every TycoonX product into one contract automatically.

## 2. Do not call personal data a price under GDPR

BGB § 327(3) gives consumer-contract consequences to certain data-backed digital-product contracts. It does **not** mean CK-Labs owns the user's personal data, that privacy rights are waived, or that GDPR consent becomes irrevocable because the player received a service.

Operational rules:

- keep GDPR legal-basis analysis separate from BGB contract-scope analysis;
- do not describe personal data as property transferred to CK-Labs;
- do not say a user `paid with data` in a way that suggests GDPR rights were sold away;
- do not require consent to unnecessary processing merely because the free service has economic value; and
- continue to honor valid access, erasure, restriction, objection, portability, consent-withdrawal, complaint, and other applicable privacy rights.

The TDDDG terminal-access gate also remains separate. A BGB contract analysis does not authorize cookies, SDK identifiers, local storage, fingerprinting, or other terminal access that independently requires consent under German law.

## 3. BGB § 327q: privacy rights do not automatically invalidate the contract

Under BGB § 327q(1), exercising data-protection rights or making a data-protection declaration after contract conclusion does not by itself make the contract invalid.

Therefore TycoonX must not implement rules such as:

- `withdraw analytics consent = account automatically void`;
- `GDPR objection = purchase fraud`;
- `erasure request = chargeback`; or
- `privacy request = waiver of paid entitlements`.

A privacy request can require technical or contractual consequences, but those consequences must be based on the actual processing purpose, remaining lawful processing, product design, and applicable contract/consumer law.

## 4. BGB § 327q(2): immediate termination after privacy withdrawal is conditional, not automatic

For a contract requiring a series of individual supplies of digital products or continuous supply, BGB § 327q(2) can allow the trader to terminate without notice after a consumer withdraws consent or objects to further processing **only if**, after considering the data processing that remains lawful and balancing both sides' interests, continuing the contract until its agreed end or ordinary notice date cannot reasonably be expected of the trader.

### Release rule

Before CK-Labs terminates or materially disables a German consumer's continuing TycoonX service specifically because of a privacy withdrawal/objection, preserve:

- the exact privacy right/declaration exercised;
- the processing purpose affected;
- what processing can still lawfully continue;
- why the affected processing is genuinely necessary for the continuing contractual service rather than merely useful for analytics, marketing, monetization, or convenience;
- alternatives considered, such as disabling the optional feature or processing instead of the whole account;
- the interests-balancing decision;
- whether only a particular feature/contract should end rather than the entire TycoonX relationship; and
- any notice, remedy, export, repayment, or paid-entitlement consequence required by law.

Do not use § 327q(2) as a general anti-privacy clause. Optional analytics consent, for example, should normally be capable of being withdrawn without treating the consumer as an abuser or automatically deleting the account.

## 5. BGB § 327q(3): no damages claim merely because the consumer exercised privacy rights

BGB § 327q(3) excludes compensation claims by the trader against the consumer for restrictions on permissible data processing caused by the exercise of privacy rights or data-protection declarations.

TycoonX must therefore not create a `privacy withdrawal fee`, negative Diamond balance, VIP clawback penalty, account debt, or damages charge merely because the consumer lawfully withdrew consent or exercised another applicable privacy right.

This does not prevent CK-Labs from correcting genuinely invalid purchases, fraud, chargebacks, duplicate grants, hacks, exploits, or other independently evidenced abuse. The evidence and legal basis must be separate from the privacy-right exercise.

## 6. Defects in a BGB § 327(3) data-backed contract have a special termination rule

BGB § 327m(2) normally excludes contract termination for an **insignificant defect**. The statute expressly says that this insignificant-defect exclusion does **not** apply to consumer contracts within BGB § 327(3).

Operational consequence:

- do not assume that a defect in a data-backed digital-service contract can never justify termination merely because CK-Labs labels it `minor`;
- still apply the actual § 327m prerequisites, cure rules, contract scope, and circumstances;
- do not promise automatic cash compensation where no money price exists; and
- distinguish termination, cure, damages, data-protection rights, and any paid-product remedy instead of collapsing them into one `refund` state.

The existing TycoonX digital-product conformity gate remains controlling for cure, non-supply, conformity, updates, price reduction, repayment, and paid-entitlement remedy operations.

## 7. BGB § 327p(1): after valid contract termination, CK-Labs may stop further use of the terminated digital product

After contract termination, BGB § 327p(1) provides that the consumer may no longer use the digital product or make it available to third parties, and the trader may prevent further use, subject to the statute's content-return rule.

For TycoonX this can support proportionate access revocation for the **terminated contract/product** after the legal termination becomes effective.

Do not stretch that rule into unrelated confiscation. Ending one defective or data-backed contract does not automatically prove that every separate Apple, Google, or Xsolla transaction is invalid.

## 8. BGB § 327p(2): CK-Labs cannot automatically keep using every non-personal user-created item after termination

After contract termination, the trader generally may not continue using **non-personal content** that the consumer supplied or created while using the digital product.

BGB § 327p(2) contains specific exceptions where continued use can remain permissible, including content that:

1. has no utility outside the context of the digital product;
2. relates only to the consumer's use of the digital product;
3. has been aggregated with other data and cannot be disaggregated, or can be disaggregated only with disproportionate effort; or
4. was generated jointly with other consumers and other consumers can continue to use it.

### TycoonX content classification examples

Do not blanket-classify all game state as exportable or all game state as non-exportable. Classify the actual content.

Potentially relevant examples include:

- user-created **art**, images, designs, books, text, music, beats, or other creative submissions;
- custom descriptions or other content that has utility independently of TycoonX;
- jointly created community/union/company material;
- game-only inventory, virtual balances, transaction state, leaderboard state, upgrade values, production state, or economy data that may have no utility outside TycoonX or may relate only to in-game use; and
- aggregated statistics that cannot reasonably be separated from other users' data.

The statutory exception must be applied to the specific content. Do not use `it is in a game database` as the sole reason to keep using or refuse return of independently useful user-created content.

## 9. BGB § 327p(3): certain non-personal user-created content must be provided back on request

For content covered by § 327p(2) sentence 1 and not excluded by the statutory exceptions in § 327p(2) sentence 2 numbers 1 to 3, CK-Labs must be able to provide the content to the consumer **on request**:

- free of charge;
- without obstruction by CK-Labs;
- within a reasonable period; and
- in a commonly used and machine-readable format.

The joint-content rule in § 327p(2) sentence 2 number 4 is treated differently by § 327p(3): do not assume jointly created content can always be withheld merely because other users are involved. Review the exact statutory treatment, third-party rights, personal data, and technical format.

### Safe deletion/termination workflow

Where this rule can apply, account deletion or contract termination should not irreversibly destroy potentially returnable non-personal user-created content before CK-Labs has handled a timely content-return request or otherwise satisfied the applicable rule.

A practical flow can include:

1. telling the user how to request eligible content before or around final deletion/termination;
2. classifying requested content into personal data, non-personal § 327p content, game-only/exception content, joint content, and legally retained records;
3. generating an export in a common machine-readable form, plus original media files where reasonably appropriate;
4. protecting third-party personal data, confidential data, anti-abuse secrets, and unrelated users' content; and
5. deleting or ceasing use of content after the applicable return/retention obligations are resolved.

This is not a promise that CK-Labs must export source code, server secrets, anti-cheat logic, other players' data, internal fraud models, proprietary game systems, or every derived gameplay statistic.

## 10. GDPR rights and BGB § 327p content-return rights are separate

BGB § 327p(2)-(3) addresses **non-personal content** created or supplied by the consumer in the digital product. Personal data remain governed by GDPR and other applicable privacy law.

Do not collapse these concepts:

- **GDPR access / portability / erasure** can apply to personal data under their own conditions;
- **BGB § 327p return** can apply to qualifying non-personal user-created/supplied content after contract termination;
- **provider purchase records** can remain lawfully retained where necessary for tax, accounting, fraud, disputes, or entitlement restoration; and
- **TycoonX game state** can include both personal and non-personal elements with different legal treatment.

A single export tool can technically serve multiple rights, but the evidence must preserve which legal request was handled and which categories were included or lawfully excluded.

## 11. Account deletion must not defeat a valid content-return right

The existing TycoonX account-deletion flow remains valid, but the implementation must distinguish `delete my personal data` from `return eligible non-personal content created/supplied under a terminated digital-product contract`.

Release rules:

- do not require a consumer to keep an unwanted account active indefinitely merely to receive qualifying content;
- do not erase eligible export content solely because the consumer also requested account deletion;
- do not keep the entire deleted account indefinitely merely because one export file is pending;
- isolate the minimum content needed to complete the request and delete it after the applicable purpose ends;
- do not disclose third-party personal data or another user's private content merely because it appears in a shared project; and
- preserve account-deletion confirmation and export-delivery evidence separately.

## 12. User-generated creative content, licences, and moderation

A TycoonX licence to host/display user content during service operation does not automatically become a perpetual post-termination licence where mandatory § 327p restrictions apply.

At the same time, § 327p does not require CK-Labs to:

- republish removed illegal or policy-violating material;
- restore public access to content removed for a lawful moderation reason;
- expose another person's rights or personal data;
- return content that falls within a statutory exception; or
- retain prohibited content longer than lawfully necessary.

For art, music, books, text, images, or similar creator features, maintain a content record capable of distinguishing:

- creator/account;
- whether content contains personal data;
- whether it was solely or jointly created;
- whether it has independent utility outside TycoonX;
- moderation/legal hold status;
- export format/original file where available;
- licence/use state after termination; and
- deletion/retention reason.

## 13. Paid-value isolation: Diamonds, 30-Day VIP, and Lifetime VIP

The data-for-service and content-return rules must not corrupt paid entitlement accounting.

### Diamonds

- Exercising a privacy right must not itself delete legitimately purchased Diamonds or create a negative Diamond balance as a penalty.
- If the underlying TycoonX account/service lawfully ends, unused purchased value and unresolved statutory remedies must be assessed under the applicable purchase, conformity, withdrawal, refund, and termination rules rather than silently confiscated.
- Promotional or gameplay-earned Diamonds remain distinct from purchased Diamonds.

### One-time 30-Day VIP

- Privacy withdrawal does not restart, extend, or duplicate the original 30-day period.
- If a service contract must end because continued performance truly becomes unreasonable under § 327q(2), assess the affected paid period and mandatory remedies separately.
- A content export must not replay the VIP purchase or create a second entitlement.

### Lifetime VIP

- Lifetime VIP remains a one-time entitlement sold only during selected genuine sales windows, which may be withdrawn from future sale and may never return.
- A privacy-right exercise does not by itself make a valid Lifetime VIP fraudulent or void.
- If continued service to the account lawfully ends, preserve the authoritative purchase record and apply the actual contract, provider-restoration rules, digital-product remedies, and mandatory law.
- A content export or account deletion must not create a hidden Lifetime VIP expiry, duplicate Lifetime VIP, or convert it to 30-Day VIP.

## 14. Apple, Google Play, and Xsolla do not erase the underlying service-contract analysis

Apple App Store, Google Play, and Xsolla can control payment, purchase confirmation, refunds, tax handling, or transaction records for their respective channels. Their role does not automatically decide whether the **underlying CK-Labs TycoonX digital-service relationship** is a BGB § 327(3) data-backed consumer contract.

Conversely, a BGB § 327(3) service relationship does not make CK-Labs the merchant for an Apple, Google, or Xsolla purchase that is contractually handled by another entity.

Keep these records separate:

- underlying TycoonX account/service contract classification;
- privacy-processing/legal-basis classification;
- individual Apple/Google/Xsolla transaction contract;
- entitlement state;
- termination state; and
- content-return/export state.

## 15. Provider outage, platform exit, successor operator, and permanent shutdown

A provider migration, platform-rule change, business sale, merger, reorganization, successor operator, or permanent TycoonX shutdown does not automatically erase a qualifying content-return request.

Where technically and legally possible, the shutdown/successor plan should decide before destructive deletion:

- which consumer contracts are ending;
- whether BGB § 327p applies;
- how consumers can request eligible non-personal content;
- how long the export mechanism remains practically available;
- which personal data remain governed by GDPR erasure/portability rules;
- which purchase/entitlement records must be preserved for mandatory remedies; and
- whether a successor operator lawfully assumes the relevant obligations.

Do not promise indefinite operation merely to satisfy this gate. A lawful permanent shutdown remains possible subject to the existing TycoonX shutdown, conformity, notice, refund/remedy, and mandatory-rights rules.

## 16. Release evidence packet

Maintain a dated evidence packet containing at least:

- the current German BGB § 327(3) classification for the ordinary TycoonX account/service relationship;
- the personal-data purposes relied on for that classification;
- the BGB § 312(1a) sentence 2 exception analysis where relevant;
- the list of optional analytics/advertising/profiling purposes that are **not** being mislabeled as strictly necessary service performance;
- the § 327q decision path for consent withdrawal / objection;
- confirmation that no privacy-right penalty or damages charge exists;
- the user-created-content classification table;
- exportable formats for art, music, books, text, images, or other independently useful user-created content where applicable;
- the deletion/termination order of operations;
- one successful export test;
- one test where requested content falls within a statutory exception;
- one shared-content test protecting other users' rights;
- one privacy-withdrawal test that leaves unrelated paid value intact;
- one account deletion + export test; and
- one paid-entitlement restoration/reconciliation test after account termination/deletion.

## 17. Release blockers

Block release of a materially affected feature or destructive account-flow change if any of the following is unresolved:

- CK-Labs assumes a free TycoonX service is automatically outside §§ 327 ff. without analyzing § 327(3);
- the § 312(1a) sentence 2 exception is claimed while personal data are actually used for another purpose;
- optional analytics/marketing consent withdrawal automatically terminates or punishes the account without a § 327q analysis;
- CK-Labs charges a fee, debt, Diamond penalty, or damages amount merely for exercising a privacy right;
- a data-backed contract is denied termination solely because CK-Labs labels a defect insignificant;
- account deletion irreversibly destroys potentially returnable non-personal user-created content without handling an applicable § 327p request;
- TycoonX continues using qualifying non-personal creator content after termination without a statutory basis/exception;
- export exposes other users' personal/private data or internal security secrets;
- an export/deletion event duplicates or corrupts Diamonds, 30-Day VIP, Lifetime VIP, or provider purchases; or
- the operator cannot distinguish contract termination, GDPR erasure, provider refund, and account deletion as separate events.

## 18. Regression scenarios

1. **Free account, only necessary data:** A consumer creates a TycoonX account and CK-Labs processes only data strictly needed to supply the service and meet legal duties. Record whether the § 312(1a) sentence 2 exception applies instead of assuming § 327(3).
2. **Free account plus optional analytics:** Optional analytics uses personal data for another purpose. Re-run the § 327(3) classification and do not hide the secondary purpose under `service operation`.
3. **Withdraw analytics consent:** Analytics stops; the account and paid purchases are not automatically terminated.
4. **Withdraw consent needed for a genuinely continuous feature:** Assess remaining lawful processing, alternatives, and both sides' interests before any § 327q(2) termination.
5. **GDPR objection:** The objection is not recorded as fraud, chargeback abuse, or exploit activity.
6. **Privacy-right penalty:** The system attempts to create a negative Diamond balance after consent withdrawal. Block the action.
7. **Minor defect in data-backed contract:** Do not deny termination solely because the defect is labeled insignificant; apply § 327m correctly.
8. **Art export:** A user-created artwork with independent utility is requested after termination. Classify and provide it where § 327p(3) applies.
9. **Music/beat export:** Return an eligible original or common machine-readable file without charging an export fee.
10. **Book/text export:** Provide eligible creator text while removing unrelated private data of other users where necessary.
11. **Pure game-state request:** Evaluate whether the requested in-game production values/inventory fall within a § 327p exception rather than promising a universal export.
12. **Aggregated statistics:** Data cannot be disaggregated except with disproportionate effort. Record the statutory exception analysis.
13. **Joint creation:** A union/company/community item was jointly created. Apply the joint-content rule and protect co-users' rights.
14. **Moderated illegal content:** A lawful removal/retention duty is not defeated by an export request; preserve only what law requires and do not republish prohibited material.
15. **Account deletion plus export:** Personal-data deletion proceeds while the minimum eligible non-personal export content is isolated long enough to complete the request.
16. **Purchased Diamonds:** Privacy withdrawal/export does not delete unrelated legitimately purchased Diamonds.
17. **30-Day VIP:** Export/account deletion does not restart the original 30-day clock.
18. **Lifetime VIP:** Export/account deletion does not duplicate, downgrade, or silently expire a valid Lifetime VIP.
19. **Apple/Google/Xsolla:** Underlying service-contract termination does not fabricate a provider refund or payment reversal.
20. **Permanent shutdown:** The shutdown plan contains a reasonable content-return path for qualifying requests without promising indefinite service operation.
21. **Successor operator:** The successor-transfer plan records whether outstanding content-return requests and paid-entitlement records transfer lawfully.
22. **Provider outage during export:** Retry the export idempotently without replaying purchase fulfillment or losing the request timestamp.
23. **Third-party personal data inside creator file:** Provide the creator's eligible content in a privacy-safe way rather than exposing another user's private data.
24. **Privacy request after purchase dispute:** Keep the privacy request, payment dispute, and content-return state independent so one cannot silently decide the others.

## Official references checked September 2, 2026

- German Civil Code, **BGB § 327**, scope including personal-data-backed digital-product contracts: https://www.gesetze-im-internet.de/bgb/__327.html
- German Civil Code, **BGB § 312(1a)**, personal-data consumer contracts and the exclusive-performance/legal-duty exception: https://www.gesetze-im-internet.de/bgb/__312.html
- German Civil Code, **BGB § 327m**, termination for defective digital products and the § 327(3) insignificant-defect exception: https://www.gesetze-im-internet.de/bgb/__327m.html
- German Civil Code, **BGB § 327p**, post-termination use and return of non-personal consumer-created/supplied content: https://www.gesetze-im-internet.de/bgb/__327p.html
- German Civil Code, **BGB § 327q**, contractual consequences of privacy-right exercises: https://www.gesetze-im-internet.de/bgb/__327q.html
- Directive (EU) 2019/770, contracts for the supply of digital content and digital services: https://eur-lex.europa.eu/eli/dir/2019/770/oj

## Current status

Legal rule mapping: **documented**.

Localization impact: **none in this run**. The canonical TycoonX Terms/Privacy/Purchases already preserve mandatory consumer and privacy rights generally; this gate adds production classification and exit-operation safeguards without changing the current public contractual meaning.

Still requires production evidence: **real § 327(3) classification of the deployed free/account service, actual data-purpose mapping, current creator-content inventory, and an end-to-end termination/deletion + eligible-content export test.**
