# TycoonX Unauthorized Payment, PSD2 & Account-Takeover Release Gate

**Release QA reference. Last reviewed: September 5, 2026.**

Owner: CK-Labs  
Scope: TycoonX unauthorized-payment reports, account compromise, card/bank/payment-account compromise, Apple App Store purchases, Google Play purchases, the CK-Labs TycoonX webshop using Xsolla, chargebacks, refunds, entitlement correction, payment-service-law routing, German/EU consumer safeguards, and fraud enforcement.

## Purpose

TycoonX already separates security containment, payment-risk restrictions, chargebacks, account compromise, refunds, and final account enforcement. This gate closes a narrower but important gap:

> An unauthorized **payment transaction**, an unauthorized **TycoonX account action**, and an unauthorized **store/provider purchase** are not the same legal or technical event.

CK-Labs must not decide all three with one generic `fraud = true` or `chargeback = true` flag.

This is founder-protective because it prevents CK-Labs from:

- promising bank/payment-service refunds that are legally the responsibility of a payer's payment service provider;
- admitting that a TycoonX security failure caused a payment merely because a cardholder disputes the transaction;
- treating a genuine unauthorized-payment complaint as automatic player fraud;
- losing a defensible chargeback because transaction, delivery, security, and account evidence were mixed together;
- refunding twice through both a payment provider and CK-Labs;
- revoking unrelated purchased Diamonds, 30-Day VIP, or Lifetime VIP; or
- relying on a login, StoreKit, Google Play, Xsolla, SCA, or card-authentication record as conclusive proof of who intentionally authorized the purchase when the applicable payment law says more evidence may be required.

The canonical English Terms of Service and Purchases & Refunds Policy already preserve mandatory consumer rights, distinguish Apple, Google, Xsolla and CK-Labs responsibilities, protect good-faith compromise reports, and keep entitlement corrections transaction-specific. This gate operationalizes that existing meaning and does not materially change the canonical public legal meaning by itself.

## 1. Classify the complaint before acting

Every report about a disputed payment should be classified into one or more of these states:

1. **TycoonX account compromise**: someone may have gained unauthorized access to the player's TycoonX account.
2. **Apple Account / Google Account / Xsolla checkout account compromise**: the platform or provider account may have been used without the legitimate holder's permission.
3. **Payment-instrument compromise**: card, bank-account, wallet, payment credentials, or another payment instrument may have been misused.
4. **Accidental or family purchase**: the transaction may have been made by a household/family/device user without being payment fraud in the legal sense.
5. **Duplicate or configuration error**: the consumer may have been charged twice, charged the wrong amount, or charged because of a provider/integration problem.
6. **Non-delivery or entitlement-delivery dispute**: the payment may be valid but TycoonX failed to deliver the paid product correctly.
7. **Ordinary refund/withdrawal/conformity request**: the player may be exercising a lawful consumer or provider refund right without alleging unauthorized payment.
8. **Chargeback/payment dispute**: the issuing bank/payment system/provider has opened a payment dispute whose final reason and outcome may still change.
9. **Suspected intentional payment abuse**: evidence may support knowingly false fraud claims, refund cycling, stolen-payment use, regional-price/payment manipulation, or another deliberate scheme.

Do not use one state as proof of another.

Examples:

- A cardholder chargeback does not by itself prove the TycoonX account owner committed fraud.
- A compromised TycoonX account does not automatically prove that the bank/card transaction was legally unauthorized under payment-services law.
- A bank's SCA/authentication record does not by itself prove that the TycoonX account owner intentionally made the purchase.
- A successful Apple/Google/Xsolla purchase record proves a provider transaction state, not necessarily the civil identity of the person who intentionally initiated it.
- A delivery failure can justify a refund/remedy without implying account compromise.

## 2. Current EU/German payment-law boundary: PSD2 remains the operational baseline

As of the September 5, 2026 review, Directive (EU) 2015/2366 (PSD2) remains the current EU payment-services baseline for the rules addressed in this gate. The Council and Parliament reached a political agreement on the PSD2 review package in November 2025, but CK-Labs must not treat proposed/replacement rules as already applicable until final adoption, publication, entry into force, transition periods, and German implementation/applicability are verified.

For German consumer payment-service relationships, current BGB provisions implementing the payment-services framework include:

- **BGB § 675j**: a payment transaction is effective against the payer only if the payer consented to it in the agreed manner;
- **BGB § 675u**: for an unauthorized payment transaction, the payer's payment service provider generally has the statutory reimbursement/restoration obligation, subject to the statutory framework;
- **BGB § 675v**: payer liability for misuse of a payment instrument is limited and depends on the statutory circumstances, including fraud, intent/gross negligence, and strong customer authentication rules;
- **BGB § 675w**: when authorization is disputed, authentication/recording evidence alone does not necessarily prove that the payer authorized the transaction or acted fraudulently, intentionally, or with gross negligence; supporting evidence may be required from the payment service provider;
- **BGB § 676b**: the payment service user must notify the payment service provider without undue delay after discovering an unauthorized or incorrectly executed transaction, with the statutory long-stop rules applying; and
- **BGB § 675e**: consumer payment-service protections generally cannot simply be contracted away to the consumer's detriment except where the statute allows it.

### Critical CK-Labs role rule

These payment-service duties attach to the legally relevant **payment service provider / contracting payment relationship**. They do not automatically turn CK-Labs into the payer's bank, card issuer, wallet provider, or payment service provider.

Therefore TycoonX Support must not promise, deny, or calculate a PSD2/BGB bank-account reimbursement as though CK-Labs were the payer's payment service provider unless CK-Labs actually holds that regulated role for the specific transaction.

Instead, CK-Labs must:

- identify the purchase channel and contracting/payment actors;
- preserve the TycoonX transaction and entitlement evidence;
- route the user to the legally relevant provider where that provider controls the payment dispute/refund process;
- separately investigate TycoonX account compromise and entitlement delivery; and
- cooperate with lawful provider/bank dispute evidence requests without over-disclosing player data.

## 3. Strong customer authentication is payment evidence, not universal fraud proof

PSD2 Article 97 and the related regulatory technical standards require strong customer authentication in defined payment situations, subject to lawful exemptions and provider-specific implementation.

TycoonX should treat SCA or provider authentication as an important payment signal, but not as a magic conclusion that:

- the TycoonX account holder personally made the purchase;
- the player can never have been socially engineered or otherwise compromised;
- the TycoonX account itself was secure;
- a family/device user could not have initiated the purchase;
- a provider or integration error is impossible; or
- every later chargeback is fraudulent.

German BGB § 675w expressly makes the evidence point important: provider authentication/recording alone is not necessarily enough to prove authorization, fraud, intent, or gross negligence where those matters are disputed.

Operationally, store/payment authentication should be stored as a separate evidence field, not a `user_committed_fraud = true` field.

## 4. Apple App Store purchase routing

For an Apple In-App Purchase:

- Apple provides the App Store purchase and transaction record;
- Apple operates its consumer refund/request flow for App Store-billed purchases;
- CK-Labs remains responsible for correct TycoonX entitlement delivery, account security, and reconciliation to authoritative Apple transaction state;
- an Apple refund/revocation/reversal can support transaction-specific entitlement correction; and
- an Apple refund request or unfamiliar-charge report is not itself proof of TycoonX account misconduct.

Apple's current support flow allows consumers to review purchase history, investigate unfamiliar charges, and request refunds for eligible App Store purchases.

### EU alternative-payment distinction

Apple also currently tells EU users that digital purchases made using an alternative payment system or through a developer website link are **not billed through the App Store/In-App Purchase system** and that the user should contact the developer for support.

TycoonX must therefore not route an Xsolla transaction back to Apple merely because the purchase was initiated from an iPhone app. The actual merchant/payment channel and transaction evidence control the support route.

## 5. Google Play purchase routing

For a Google Play-billed TycoonX purchase:

- preserve the Google order/purchase token and authoritative transaction state;
- distinguish successful, pending, canceled, refunded, reversed, charged-back, and voided states;
- route unfamiliar/unauthorized Google Play charge reports through Google's current official reporting/refund/account-security processes where Google controls that process;
- independently investigate whether the TycoonX account was compromised;
- do not grant a second entitlement because a user re-submits an old receipt; and
- do not revoke unrelated value because one Google transaction is disputed.

A Google purchase token or order record is strong transaction evidence, but it is not by itself conclusive proof that the legitimate TycoonX account owner intentionally authorized the underlying payment.

## 6. Xsolla webshop and chargeback routing

For the official CK-Labs TycoonX webshop using Xsolla, preserve the exact transaction-specific checkout and receipt evidence, including the Xsolla entity/merchant role actually shown for that transaction.

Xsolla's current chargeback documentation expressly recognizes that chargebacks can arise from several situations, including unfamiliar/fraudulent transactions, non-delivery, incorrect amount, or duplicate invoicing. Xsolla as merchant of record receives chargeback notifications for applicable transactions and exposes dispute states such as new, in progress, accepted, won, and lost.

TycoonX therefore must not implement:

`chargeback_opened -> permanent fraud ban`

Instead:

- preserve the Xsolla transaction ID and chargeback/dispute status;
- preserve the stated dispute reason where available;
- preserve whether CK-Labs was asked to supply evidence;
- submit only necessary, accurate evidence for the correct dispute;
- do not fabricate delivery, login, identity, or product-use evidence;
- do not include unrelated private messages, full payment credentials, or excessive personal data in a chargeback evidence package;
- reconcile final entitlement action to the authoritative final payment outcome and applicable law; and
- keep intentional abuse enforcement as a separate factual decision.

Xsolla currently notes that a chargeback can remain in progress and can later be won or lost. A temporary dispute state must therefore not be treated as immutable proof of user fraud.

## 7. Build one transaction identity across security, payment and entitlement systems

For every disputed purchase, CK-Labs should be able to reconstruct one case using channel-specific identifiers without merging unrelated purchases.

Recommended dispute evidence fields:

- `case_id`;
- `tycoonx_user_id`;
- `purchase_channel` (`apple_iap`, `google_play`, `xsolla_webshop`, other authorized channel);
- `product_id`;
- `product_type` (`diamonds`, `vip_30_day`, `lifetime_vip`, other);
- purchase/checkout timestamp;
- final consumer price and currency;
- Apple transaction/original transaction identifiers where applicable;
- Google order ID/purchase token where applicable;
- Xsolla transaction/order identifiers where applicable;
- provider transaction state;
- entitlement-ledger event ID;
- delivery timestamp and delivery result;
- whether value was later consumed/transferred;
- account-compromise case link, if any;
- payment-instrument-compromise claim, if any;
- provider refund/chargeback/dispute case link;
- provider dispute reason and current status;
- final provider/payment outcome;
- final TycoonX entitlement action;
- separate fraud/enforcement decision and evidence, if any; and
- support communications/notice timestamps.

Never use a single mutable `payment_status` field to overwrite all historical states. A dispute can move from paid to in-progress chargeback to won/lost, and the evidence trail must remain reconstructable.

## 8. Entitlement action follows authoritative transaction outcome, not accusation alone

A user's allegation that a payment was unauthorized can justify a temporary payment-risk hold where proportionate, but it should not automatically delete paid value before the payment/provider state and the surrounding facts are understood.

Likewise, a provider refund/reversal/chargeback that becomes authoritative can justify transaction-specific entitlement correction even if CK-Labs never proves intentional abuse by the account holder.

Those are separate questions:

1. **Was the payment/transaction reversed or invalidated?**
2. **Who, if anyone, intentionally committed misconduct?**

The first can require economic/entitlement reconciliation. The second can support account enforcement only when the evidence is sufficient.

## 9. Purchased Diamonds

Purchased Diamonds remain governed by the transaction-specific purchase and entitlement ledger.

- Purchased Diamonds do not expire solely because time passes.
- A good-faith unauthorized-payment report does not itself remove unrelated Diamonds.
- If the corresponding Diamond purchase is authoritatively refunded, reversed, charged back, duplicated, fraudulent, or otherwise invalid, CK-Labs may correct the corresponding value subject to applicable law.
- If the affected purchased Diamonds were already spent or transferred, any negative-balance, linked-transaction unwind, equivalent correction, or other remedy must remain tied to the affected purchase and applicable law.
- Do not replay historical fulfillment when a dispute closes in CK-Labs's favor.
- A won chargeback does not create a second Diamond grant if the original valid grant already exists.
- A lost chargeback on one Diamond purchase does not justify deleting unrelated valid Diamond purchases.

## 10. One-time 30-Day VIP

30-Day VIP remains a one-time, non-renewing 30-day entitlement.

- An unauthorized-payment investigation does not restart the 30-day clock.
- A security freeze does not silently reset the entitlement start date.
- If the underlying purchase is authoritatively refunded/reversed/invalidated, the corresponding entitlement can be corrected subject to mandatory rights.
- If a dispute is won and the purchase remains valid, restore/reconcile the authoritative original entitlement period rather than granting another 30 days.
- If CK-Labs's own erroneous restriction materially prevented use of a valid paid period, assess the legally appropriate conformity, extension, price reduction, termination, refund, or voluntary goodwill remedy separately.

## 11. Limited-time Lifetime VIP

Lifetime VIP remains a one-time promotional entitlement available only during selected genuine sales windows. It may be withdrawn from future sale, may never return, and creates no expectation of continuous availability for purchase.

Unauthorized-payment handling must preserve that product distinction:

- opening a dispute does not reopen a closed Lifetime VIP sales window;
- a provider refund/reversal can invalidate the affected Lifetime VIP transaction where lawful;
- if the dispute is resolved in favor of the valid transaction, reconciliation must recognize one valid Lifetime VIP, not grant a second one;
- account recovery cannot use an old Lifetime VIP receipt to create duplicate entitlements on multiple TycoonX accounts;
- a later Lifetime VIP sale at another genuine price does not change the completed historical transaction; and
- unrelated account/payment disputes do not expire or silently shorten a valid Lifetime VIP.

## 12. Refund, chargeback, and unauthorized-payment paths must not double-pay

TycoonX must prevent duplicate monetary remedies and duplicate entitlement mutations.

Examples:

- Apple approves a refund, then the player also opens a bank dispute: do not issue another CK-Labs cash refund unless a separate legal obligation actually exists.
- Xsolla already refunded a transaction and a chargeback later arrives: reconcile to the provider's final transaction/dispute state rather than treating the events as two separate purchases.
- Google voids/refunds a purchase after TycoonX already corrected the entitlement: the new notification must be idempotent.
- CK-Labs voluntarily credits Diamonds as goodwill during investigation: that goodwill is not automatically a second refund and must be recorded separately from the disputed paid transaction.

The system needs an idempotency/reconciliation key per provider transaction and per entitlement correction.

## 13. Account compromise and payment-instrument compromise may diverge

A useful support investigation asks two independent questions:

### A. Was the TycoonX account compromised?

Evidence can include session/device changes, credential resets, unusual marketplace/transfers, linked-account changes, security reports, or provider-account anomalies.

### B. Was the payment instrument/payment account transaction unauthorized?

That determination may belong to the issuing bank, wallet/payment provider, Apple, Google, Xsolla, or another legally relevant payment actor, applying its own evidence and the mandatory payment-services framework.

Possible outcomes include:

- TycoonX compromised, payment legally unauthorized;
- TycoonX compromised, payment provider still determines the payment was authorized under its rules/law;
- TycoonX not compromised, payment instrument compromised elsewhere;
- accidental family/device purchase without account compromise;
- valid payment but entitlement non-delivery;
- intentional chargeback abuse; or
- unresolved/inconclusive evidence.

TycoonX enforcement must be capable of representing those outcomes instead of forcing every case into `fraud` or `not fraud`.

## 14. Support language must avoid legal overreach

Do not use support macros such as:

- "SCA was successful, so the payment was definitely authorized by you."
- "Your account was logged in, therefore you are legally responsible for every purchase."
- "A chargeback proves fraud and permanently voids your whole TycoonX account."
- "Contacting your bank waives all TycoonX consumer rights."
- "Because Apple/Google/Xsolla processed the payment, CK-Labs has no responsibility for entitlement delivery."
- "Because CK-Labs delivered the entitlement, your bank has no unauthorized-payment obligations."

Safer operational position:

- identify the actual transaction;
- explain which provider controls the payment/refund/dispute route;
- preserve CK-Labs responsibility for TycoonX entitlement/security issues;
- avoid making the payer's PSP liability decision for them;
- preserve mandatory consumer rights; and
- investigate intentional abuse separately where evidence supports it.

## 15. Evidence minimization and privacy

Chargeback and unauthorized-payment evidence can contain personal data and should be handled under the TycoonX Privacy Policy and applicable data-protection law.

- Share only evidence reasonably necessary for the specific dispute.
- Prefer transaction IDs, delivery timestamps, entitlement ledger records, and narrowly relevant activity evidence over broad account exports.
- Do not send full card numbers, CVV/CVC, passwords, authentication backup codes, or unrelated banking credentials.
- Do not upload unrelated private chat merely to make a chargeback packet look stronger.
- Redact unrelated third-party personal data.
- Keep access to dispute/security evidence limited to roles that need it.
- Keep fraud/account-takeover evidence for a proportionate legal/security/dispute retention period rather than forever by default.

## 16. Future PSD3 / Payment Services Regulation transition watch

The November 27, 2025 Council/Parliament political agreement on the PSD2 review signals that the EU payment-fraud framework is changing.

CK-Labs must maintain a transition watch, but must not implement draft/provisional provisions as current binding law before verifying:

1. final adopted text;
2. Official Journal publication;
3. entry-into-force date;
4. application/transposition dates;
5. German implementing changes where a directive requires them;
6. any transition rules for existing payment contracts; and
7. whether a duty applies to CK-Labs, the merchant of record, the acquirer, the payer's PSP, or another payment actor.

When the replacement framework becomes applicable, update this gate and only update canonical player-facing documents if the public legal meaning materially changes.

## 17. Release regression scenarios

Before relying on production unauthorized-payment handling, verify at least these cases:

1. **Stolen TycoonX credentials, valid card charge disputed**: security containment starts, but bank/payment-law authorization is not decided by a TycoonX login record alone.
2. **Card compromised elsewhere, TycoonX account secure**: payment dispute can exist without inventing a TycoonX account-takeover event.
3. **Apple unfamiliar App Store purchase**: player is routed to Apple purchase-history/refund support while CK-Labs preserves entitlement/security evidence.
4. **EU iOS Xsolla purchase**: support does not incorrectly send the user to Apple merely because the purchase began on iPhone.
5. **Google unfamiliar charge**: Google transaction state and reporting route are preserved separately from TycoonX account-compromise status.
6. **Xsolla chargeback opened**: the account is not permanently banned merely because the dispute is `New` or `In progress`.
7. **Xsolla chargeback won**: one existing valid entitlement remains; historical fulfillment is not replayed.
8. **Xsolla chargeback lost**: only the affected transaction/value is corrected unless separate evidence supports wider enforcement.
9. **Duplicate provider charge**: duplicate-billing correction does not become an intentional-fraud finding against the user.
10. **Entitlement non-delivery**: valid payment plus missing Diamonds/VIP is handled as delivery/remedy failure, not unauthorized-payment fraud.
11. **SCA present**: system stores the authentication signal but does not automatically set `user_committed_fraud = true` when the payment is later disputed.
12. **Good-faith bank report**: user is not banned merely for exercising a lawful payment dispute right.
13. **Knowingly false repeated chargebacks**: independent evidence can support proportionate payment restrictions/enforcement after investigation.
14. **Purchased Diamonds already spent**: a later authoritative reversal produces one scoped ledger correction, not deletion of every Diamond purchase.
15. **30-Day VIP dispute after day 10**: dispute review does not restart the 30-day entitlement from day 1.
16. **Lifetime VIP dispute after sales window closes**: the dispute does not reopen the sales window; a valid reinstatement restores exactly one entitlement.
17. **Refund plus later chargeback**: monetary and entitlement effects remain idempotent and cannot be applied twice.
18. **Appeal/account recovery succeeds**: legitimate account access is restored without duplicating Diamonds, 30-Day VIP, or Lifetime VIP.
19. **Provider evidence request**: CK-Labs supplies only necessary transaction/delivery evidence and excludes unrelated private communications/payment secrets.
20. **Future PSD3/PSR publication**: repository does not silently treat a political agreement or proposal as current law; transition is explicitly reviewed first.

## 18. Stop-ship conditions

Do not rely on the production payment-risk/enforcement flow if any of the following is true:

- `chargeback = fraud` is hard-coded;
- a successful login or payment authentication is treated as conclusive proof that the legitimate player personally authorized the payment;
- a disputed Apple/Google/Xsolla transaction cannot be linked to one specific TycoonX entitlement-ledger event;
- support cannot distinguish a bank/payment-instrument compromise from TycoonX account compromise;
- Apple-billed and alternative/Xsolla EU iOS purchases use the same refund/support routing regardless of actual merchant/channel;
- a chargeback opened/in-progress state permanently revokes unrelated paid value;
- a won dispute can replay fulfillment and duplicate Diamonds or VIP;
- a lost dispute on one transaction removes unrelated legitimate purchases;
- a security freeze restarts 30-Day VIP;
- a dispute reopens a closed Lifetime VIP sales window;
- provider refund and bank chargeback events can produce duplicate monetary or entitlement corrections;
- support promises or denies the payer's statutory PSD2/BGB reimbursement as though CK-Labs were the payer's payment service provider when it is not;
- chargeback evidence includes unnecessary passwords, card security data, unrelated private communications, or excessive third-party personal data;
- a good-faith unauthorized-payment report automatically triggers permanent-account fraud enforcement; or
- future PSD3/PSR rules are applied before their final legal status and applicability are verified.

## 19. Canonical public-language invariants

The canonical public legal documents should continue to preserve all of these meanings:

- TycoonX is operated by CK-Labs and has been fully released since September 1, 2026;
- users should protect credentials and report suspected compromise;
- CK-Labs may use proportionate temporary security/payment restrictions while investigating credible risks;
- good-faith account-compromise, refund, withdrawal, conformity, and payment-dispute rights are not automatically fraud;
- Apple, Google, Xsolla, CK-Labs, banks, and payment providers have transaction-specific responsibilities that must not be collapsed into one role;
- CK-Labs remains responsible for TycoonX entitlement delivery where the payment is valid even when another provider processes the payment;
- provider refunds/reversals/chargebacks can support transaction-specific entitlement correction;
- unrelated legitimately purchased value is not automatically removed;
- purchased Diamonds do not expire solely because time passes;
- 30-Day VIP is one-time and non-renewing;
- Lifetime VIP is a one-time promotional entitlement available only during selected genuine sales windows, may be withdrawn from future sale, may never return, and creates no expectation of continuous availability for purchase;
- mandatory EU/German consumer and payment-service rights are not waived; and
- exact displayed branding remains **TycoonX**.

## 20. Current external reference points

Checked for the September 5, 2026 review:

- Directive (EU) 2015/2366 (PSD2), especially Articles 71-74 and 97: https://eur-lex.europa.eu/eli/dir/2015/2366/2025-01-17/eng
- German BGB § 675e: https://www.gesetze-im-internet.de/bgb/__675e.html
- German BGB § 675j: https://www.gesetze-im-internet.de/bgb/__675j.html
- German BGB § 675u: https://www.gesetze-im-internet.de/bgb/__675u.html
- German BGB § 675v: https://www.gesetze-im-internet.de/bgb/__675v.html
- German BGB § 675w: https://www.gesetze-im-internet.de/bgb/__675w.html
- German BGB § 676b: https://www.gesetze-im-internet.de/bgb/__676b.html
- EBA strong-customer-authentication reference: https://www.eba.europa.eu/publications-and-media/press-releases/eba-clarifies-application-strong-customer-authentication
- Council, November 27, 2025 political agreement on the PSD2 review: https://www.consilium.europa.eu/en/press/press-releases/2025/11/27/payment-services-council-and-parliament-agree-to-step-up-the-fight-against-fraud-and-increase-transparency/
- European Commission payment-services status page: https://finance.ec.europa.eu/consumer-finance-and-payments/payment-services/payment-services_en
- Apple billing/refund/unfamiliar-charge support: https://support.apple.com/billing
- Apple EU alternative-payment purchase-history/support distinction: https://support.apple.com/118212
- Google Play Help, including refund and unrecognized-charge routes: https://support.google.com/googleplay
- Xsolla chargeback process: https://developers.xsolla.com/payment-ui-and-flow/anti-fraud/chargeback/
- Xsolla evidence submission: https://developers.xsolla.com/payment-ui-and-flow/anti-fraud/evidence-submission/

## 21. Founder-protective rule of thumb

The strongest defensible TycoonX position is not "every disputed payment is fraud" and not "CK-Labs must personally refund every bank dispute."

It is:

> CK-Labs identifies the real merchant/payment channel, preserves transaction and entitlement evidence, separates TycoonX account compromise from payment-instrument compromise, routes payment-service rights to the legally responsible provider, corrects only the value tied to an authoritative invalid/refunded/reversed transaction, investigates intentional abuse independently, protects good-faith consumer disputes, and keeps every refund, chargeback, Diamond correction, 30-Day VIP state, and Lifetime VIP state idempotent and auditable.
