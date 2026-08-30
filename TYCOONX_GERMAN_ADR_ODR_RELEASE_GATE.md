# TycoonX German Consumer ADR / ODR Sunset Release Gate

**Last reviewed: August 30, 2026**

This release gate keeps TycoonX consumer-dispute information aligned with the current German **Verbraucherstreitbeilegungsgesetz (VSBG)** and the EU shutdown of the former Online Dispute Resolution platform. It is an implementation and support-process gate. It does not create a voluntary commitment by CK-Labs to participate in consumer conciliation unless CK-Labs expressly chooses that commitment or applicable law requires participation.

Nothing in this gate limits mandatory consumer rights, court access, statutory withdrawal rights, conformity remedies, refund rights, or any other non-waivable remedy.

## 1. Do not use the discontinued EU ODR platform

The former EU Online Dispute Resolution platform is no longer an active consumer-redress route.

Current legal timeline under Regulation (EU) 2024/3228:

- new complaints to the former ODR platform stopped on **March 20, 2025**;
- Regulation (EU) No 524/2013 was repealed with effect from **July 20, 2025**; and
- information, including personal data, relating to ODR-platform cases had to be deleted by **July 20, 2025**.

Release requirement:

- TycoonX legal pages, support templates, checkout copy and receipts controlled by CK-Labs must not direct users to the old EU ODR platform as an active complaint mechanism;
- do not preserve a stale `ec.europa.eu/consumers/odr` link merely because an older legal template contained it;
- do not replace the old ODR link with an invented successor portal unless the new route is actually official and applicable; and
- ordinary TycoonX Support, the competent consumer conciliation body where VSBG requires a reference, and the courts remain distinct routes.

## 2. VSBG § 36 general website / Terms information

Under current **§ 36 VSBG**, a trader that maintains a website or uses terms and conditions can have a general duty to state clearly and accessibly whether it is willing or obliged to participate in dispute-resolution proceedings before a consumer conciliation body.

The release decision must be based on the actual statutory position, not on a generic website template.

### Annual employee-count checkpoint

§ 36(3) VSBG exempts a trader that employed **ten or fewer persons on December 31 of the previous year** from the information duty in § 36(1) no. 1.

Before each calendar-year legal refresh, record:

- the number of persons employed on December 31 of the previous year;
- whether the § 36(3) threshold is met;
- whether CK-Labs has separately committed itself to participate in a particular consumer conciliation procedure; and
- whether another law independently obliges CK-Labs to participate.

The small-business exception is **not** a blanket exemption from all VSBG duties. It only addresses the general information duty identified in § 36(1) no. 1. Do not use the threshold to suppress a statement or body reference that is separately required because CK-Labs has committed itself to participation or is legally obliged to participate.

### If § 36 information is required

Where applicable, the information must be easy to access, clear and understandable and must appear:

- on the CK-Labs website; and
- together with the applicable terms and conditions where terms and conditions are used.

If CK-Labs is committed or legally obliged to participate before a particular consumer conciliation body, the information must identify the competent body, its address and website, and state that CK-Labs participates as required.

Do **not** state that CK-Labs is generally willing to participate unless that is a deliberate and operationally supported decision. A public promise can create expectations and may trigger additional information duties.

## 3. VSBG § 37 after an unresolved consumer-contract dispute

The post-dispute rule is separate from the general § 36 website statement.

When a dispute about a consumer contract cannot be resolved directly between CK-Labs and the consumer, current **§ 37 VSBG** requires the trader to provide, **in text form**:

1. a reference to a consumer conciliation body competent for the dispute;
2. that body's address and website; and
3. a statement saying whether CK-Labs is willing or obliged to participate in a dispute-resolution procedure before that body.

This post-dispute information duty is not treated as disappearing merely because the trader has ten or fewer employees. The Bundesamt für Justiz currently explains the § 37 duty as applying after an unresolved consumer-contract dispute independently of employee count.

### Support implementation

TycoonX Support must have a closing/escalation template for unresolved German consumer-contract disputes with structured fields for:

- user / case reference;
- date on which direct resolution was considered unsuccessful;
- competent conciliation body name;
- postal address;
- current website;
- whether CK-Labs is willing to participate;
- whether CK-Labs is legally obliged to participate; and
- the legal/support owner who verified the information before sending.

The notice must be delivered in text form, for example by email or another durable written communication that satisfies the applicable rule.

Do not send the § 37 notice merely because a user opened a normal support ticket. The trigger is an unresolved dispute concerning a consumer contract.

## 4. Competent body selection

Do not hard-code a conciliation body without checking competence for the actual dispute.

The Bundesamt für Justiz currently explains that:

- where a specific legal participation obligation applies, the competent body follows from that obligation or the governing law;
- otherwise the competent body should be determined from the official list of consumer conciliation bodies; and
- where there is no competent sector-specific body, the **Universalschlichtungsstelle des Bundes** is generally the residual body to consider.

Current public contact information for that residual body should be verified at the time the notice is sent. As of this review, its website identifies:

**Universalschlichtungsstelle des Bundes**  
Zentrum für Schlichtung e.V.  
Straßburger Straße 8  
77694 Kehl am Rhein  
Germany

Website: `https://www.universalschlichtungsstelle.de/`

Do not assume this body is competent if a sector-specific conciliation body governs the dispute.

## 5. Relationship to TycoonX Terms and Support

The canonical TycoonX Terms currently use a deliberately conditional consumer-dispute section. That is appropriate while CK-Labs has not published a separate blanket promise to participate in every consumer conciliation proceeding.

Operational rules:

- TycoonX Support remains the first practical route for account, purchase and entitlement issues;
- the Terms must not imply that Support replaces mandatory ADR information, statutory withdrawal, platform refund channels or court access;
- Apple, Google Play and Xsolla refund/payment procedures remain separate from German consumer conciliation obligations;
- a provider-controlled refund process does not remove a VSBG information duty that applies to CK-Labs; and
- a VSBG notice does not itself admit liability, accept the consumer's factual position or waive a defence.

If CK-Labs later makes a public general commitment to participate in a named conciliation procedure, or becomes legally obliged to do so, update the canonical English Terms and the relevant German website information promptly. If that changes the canonical public Terms meaning materially, reopen the **25 localized Terms pages** and resynchronize them in the required locale order.

## 6. No stale ODR language in legal surfaces

Before release and after material legal-template changes, search at minimum for:

- `Online Dispute Resolution`
- `ODR platform`
- `ec.europa.eu/consumers/odr`
- `524/2013`
- `Verbraucherschlichtungsstelle`
- `Universalschlichtungsstelle`

Any reference to Regulation (EU) No 524/2013 or the former ODR platform must make clear that the ODR platform has been discontinued if the reference is retained for historical/legal explanation.

## 7. 2028 ADR Directive transition horizon

Directive (EU) **2025/2647** entered into force in January 2026 and modernizes the EU ADR framework after the ODR shutdown. Its implementation timetable is later than the current TycoonX September 2026 release.

Current EUR-Lex metadata sets:

- **March 20, 2028** as the transposition deadline; and
- **September 20, 2028** as the application date for the relevant national measures.

Release rule for 2026:

- do not present future Directive 2025/2647 duties as if they were already the current German VSBG rule;
- keep a dated 2028 review reminder in legal/commercial operations; and
- re-audit the German implementation before the application date because German transposition can change the exact process, response duties or information wording.

## 8. Evidence required before marking this gate complete

Keep dated evidence of:

- the December 31 previous-year employee-count assessment used for § 36(3);
- the decision whether CK-Labs is voluntarily willing, contractually committed or legally obliged to participate in consumer conciliation;
- the exact website / Terms statement used if § 36 requires one;
- a support template satisfying § 37 after an unresolved consumer-contract dispute;
- the official source used to identify the competent consumer conciliation body;
- removal or correction of any stale active ODR-platform link;
- one test case showing that an ordinary support complaint does **not** automatically trigger a false § 37 notice; and
- one test case showing that a genuinely unresolved German consumer-contract dispute produces the required text-form notice with current body details.

## 9. Brand and release invariants

- All rendered legal/support prose must display **TycoonX**, never `TyconX`.
- TycoonX goes to full release on **September 1, 2026**. Do not describe the current service, purchases, VIP, Diamonds, rewards, users or legal terms as beta.
- Technical route/file names containing `tyconx` may remain only where changing them risks breaking URLs or integrations.

## Official sources reviewed

- German VSBG § 36, current federal text: `https://www.gesetze-im-internet.de/vsbg/__36.html`
- German VSBG § 37, current federal text: `https://www.gesetze-im-internet.de/vsbg/__37.html`
- Bundesamt für Justiz, information duties for businesses: `https://www.bundesjustizamt.de/DE/Themen/Verbraucherrechte/Verbraucherstreitbeilegung/Unternehmen/Unternehmen.html`
- Universalschlichtungsstelle des Bundes: `https://www.universalschlichtungsstelle.de/`
- Regulation (EU) 2024/3228 discontinuing the ODR platform: `https://eur-lex.europa.eu/eli/reg/2024/3228/oj/eng`
- Directive (EU) 2025/2647 modernizing consumer ADR: `https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32025L2647`
