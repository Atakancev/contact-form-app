const sections = [
  {
    title: 'Where this Policy applies',
    body: [
      'This Community Standards & Moderation Policy supplements the TycoonX Terms of Service and applies to user-generated content and social features made available through TycoonX, operated by CK-Labs.',
      'It covers content or conduct submitted, transmitted, displayed, or made available through TycoonX community features, including public or group chat, direct messages, profile text, company or union content, names, descriptions, comments, reports, images, creative works, and other user-generated content.',
      'You are responsible for content you submit and must have the rights and permissions necessary to submit it.',
    ],
  },
  {
    title: 'Prohibited content and conduct',
    body: [
      'You must not use TycoonX to submit, promote, request, threaten, coordinate, or distribute content or conduct that is unlawful or that reasonably creates a serious safety, abuse, fraud, or platform-compliance risk.',
      'This includes credible threats, targeted harassment, hateful abuse, child sexual abuse or exploitation, non-consensual intimate content, unlawful disclosure of another person’s private information, impersonation, phishing, scams, malicious links, spam, coordinated abuse, intellectual-property infringement, prohibited facilitation of illegal activity, or attempts to evade lawful moderation or safety restrictions.',
      'Context matters. Ordinary criticism, disagreement, satire, competitive game talk, or isolated mild profanity is not automatically treated as prohibited merely because another user dislikes it.',
    ],
  },
  {
    title: 'Reporting, blocking, and safety tools',
    body: [
      'TycoonX may provide in-app tools to report content or users and to block or otherwise limit interaction with abusive users. Users should use those tools when available, especially for content that requires CK-Labs review.',
      'Apple App Store and Google Play rules may require specific in-app reporting, filtering, blocking, and moderation functionality for user-generated-content features. This Policy does not replace those product-level safeguards.',
      'Where a TycoonX feature qualifies as a hosting service under the EU Digital Services Act, CK-Labs will provide the legally required electronic notice-and-action mechanism for reporting specific information alleged to be illegal.',
      'Good-faith reporting is permitted. Knowingly false, malicious, repetitive, or abusive reports intended to harass another user, manipulate moderation, or overwhelm Support may themselves lead to proportionate restrictions.',
    ],
  },
  {
    title: 'How moderation may work',
    body: [
      'CK-Labs may use a combination of user reports, platform signals, rate limits, keyword or pattern filters, automated rules or classifiers, transaction/security signals, and human review to detect or investigate content or conduct that may violate this Policy, the Terms, law, or platform requirements.',
      'Automated signals may prioritize content for review or support temporary protective restrictions. They do not guarantee that every violation is detected, and CK-Labs does not promise that every item of user-generated content is manually reviewed before publication.',
      'Where applicable law requires information about automated moderation, human review, reasons for a restriction, or a particular complaint process, CK-Labs will provide the legally required information and safeguards.',
    ],
  },
  {
    title: 'Moderation actions',
    body: [
      'Depending on context, severity, recurrence, evidence, and legal or platform requirements, CK-Labs may take proportionate measures including no action after review, warnings, content removal, visibility or interaction restrictions, temporary chat mutes, feature restrictions, protective suspensions, or account termination for serious or repeated violations where permitted by the Terms and applicable law.',
      'Immediate temporary action may be taken before a full review where reasonably necessary to protect users, evidence, payments, game integrity, or infrastructure. CK-Labs may later reverse or modify a restriction if additional information changes the assessment.',
      'Moderation decisions should target the relevant content or conduct and should not be used to confiscate unrelated legitimate paid digital value unless a separate lawful reason applies.',
    ],
  },
  {
    title: 'Reasons, notice, and review',
    body: [
      'Users may contact TycoonX Support to challenge a moderation or enforcement decision unless a different in-app appeal route is provided.',
      'Where the Digital Services Act or another mandatory law requires a clear and specific statement of reasons for a content, payment, service, or account restriction based on user content being illegal or incompatible with the Terms, CK-Labs will provide that statement when the legal conditions apply and the required contact information is available.',
      'Where law requires an internal complaint-handling system, out-of-court redress information, or another formal review mechanism for the relevant service and business status, CK-Labs will provide the applicable procedure.',
    ],
  },
  {
    title: 'Illegal-content notices',
    body: [
      'When a legally required illegal-content notice mechanism applies, CK-Labs will process sufficiently precise notices in a timely, diligent, non-arbitrary, and objective manner as required by law.',
      'A report does not automatically prove that content is illegal. CK-Labs may assess the report, the content, context, applicable law, and available evidence before deciding whether to remove, restrict, preserve, or leave the content available.',
      'CK-Labs may preserve relevant content and records where reasonably necessary for a legal claim, security investigation, mandatory reporting obligation, evidence preservation, or lawful authority request, subject to applicable data-protection law.',
    ],
  },
  {
    title: 'Public content and private communications',
    body: [
      'You retain rights you hold in your user-generated content. You grant CK-Labs a non-exclusive, worldwide, royalty-free license to host, store, reproduce, format, translate, transmit, display, moderate, back up, and technically adapt user-generated content only as reasonably necessary to operate, secure, moderate, support, and improve TycoonX, subject to applicable privacy and intellectual-property law.',
      'For content you intentionally make public in TycoonX, the license also permits CK-Labs to display that public content as part of the Service and, where consistent with the context, your settings, applicable law, and third-party rights, to feature or reproduce public content for TycoonX community or promotional purposes.',
      'Private direct messages, private support communications, and non-public reports are not licensed for public promotional use merely because CK-Labs must process them to provide, secure, moderate, or support the Service.',
      'The license ends when the relevant content is deleted from active systems except to the extent continued processing is reasonably necessary for backups, legal obligations, security, moderation evidence, dispute handling, or other lawful purposes, or where the content has been lawfully shared by other users in a way that cannot reasonably be recalled.',
    ],
  },
  {
    title: 'Intellectual-property complaints',
    body: [
      'Rights holders may report content they believe infringes their intellectual-property rights through TycoonX Support or another designated reporting route. A report should provide enough information to identify the content and the claimed right.',
      'CK-Labs may remove or restrict allegedly infringing content where required or reasonably justified after review. Users remain responsible for having the rights needed for content they upload.',
    ],
  },
  {
    title: 'Platform requirements',
    body: [
      'TycoonX community features must also comply with the rules of the platform through which the app is distributed. Apple and Google may require in-app reporting, blocking, filtering, terms acceptance, contact information, and ongoing moderation independently of this Community Policy.',
      'CK-Labs may change, restrict, or discontinue a community feature if necessary to comply with law, App Store or Google Play rules, safety requirements, technical constraints, or material abuse patterns. Paid digital-product rights remain subject to the separate TycoonX Terms and mandatory consumer law.',
    ],
  },
  {
    title: 'Changes to this Community Policy',
    body: [
      'CK-Labs may update this Community Policy for valid reasons such as changes in law, platform rules, moderation tools, safety risks, community features, or abuse patterns.',
      'Significant changes will be communicated where applicable law requires it. A policy change does not retroactively make past lawful conduct a violation.',
    ],
  },
];

export default function TycoonXCommunityStandards() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TycoonX · CK-Labs</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Community Standards & Moderation</h1>
          <p className="text-zinc-500 text-sm">Last updated August 24, 2026</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-6">
            This Policy explains the rules for user-generated content, reporting, blocking, moderation, illegal-content notices, enforcement, and review in TycoonX community features.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-2">
        {sections.map((section, i) => (
          <section key={section.title} className="rounded-xl p-6 hover:bg-white/[0.03] transition">
            <div className="flex gap-4">
              <span className="text-xs text-zinc-600 font-mono mt-1 w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="text-white font-semibold mb-3">{section.title}</h2>
                <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-white/10 bg-[#111111] p-6 mt-8">
          <h2 className="text-white font-semibold mb-3">Reports, appeals & legal links</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">For content reports, moderation questions, appeals, intellectual-property complaints, or other community-safety concerns, use TycoonX Support.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/tyconx-support" className="inline-flex bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">TycoonX Support</a>
            <a href="/tyconx-terms-of-service" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Terms of Service</a>
            <a href="/tyconx-privacy-policy" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">Privacy Policy</a>
            <a href="mailto:cevikdev@gmail.com" className="inline-flex border border-white/10 hover:bg-white/5 transition text-zinc-300 text-sm font-medium px-4 py-2 rounded-lg">cevikdev@gmail.com</a>
          </div>
          <p className="text-zinc-600 text-xs leading-relaxed mt-4">Nothing in this Policy limits rights or reporting routes that cannot legally be waived. Additional legally required operator identity and address details must be available through the applicable TycoonX legal notice or imprint.</p>
        </section>
      </div>
    </main>
  );
}
