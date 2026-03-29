export default function TyconXPrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: (
        <div className="space-y-4">
          <div>
            <p className="font-medium text-zinc-300 mb-2">Account and Profile Data</p>
            <ul className="space-y-2">
              {[
                "Credentials and identifiers you provide or that are provided by third-party sign-in services (for example, your email, display name, or avatar).",
                "Language preferences, time zone, and other settings you configure inside TyconX.",
              ].map((i) => (
                <li key={i} className="flex gap-3"><span className="text-indigo-500 mt-0.5">—</span><span>{i}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium text-zinc-300 mb-2">Gameplay and Economy Data</p>
            <ul className="space-y-2">
              {[
                "Progress such as skills, levels, quests, inventory, virtual currency balances, contracts, loans, stock portfolios, and other in-game state.",
                "Housing choices, company rosters, production queues, transaction history, chat participation, and support tickets.",
              ].map((i) => (
                <li key={i} className="flex gap-3"><span className="text-indigo-500 mt-0.5">—</span><span>{i}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium text-zinc-300 mb-2">Device and Technical Data</p>
            <ul className="space-y-2">
              {[
                "Device type, operating system, app version, hardware identifiers exposed by the platform, IP address, crash logs, diagnostic data, and performance metrics.",
                "Cookies or similar technologies on our website to maintain sessions and remember preferences.",
              ].map((i) => (
                <li key={i} className="flex gap-3"><span className="text-indigo-500 mt-0.5">—</span><span>{i}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium text-zinc-300 mb-2">Communications</p>
            <ul className="space-y-2">
              {[
                "Messages, chat content, beg requests, support conversations, bug reports, and any attachments you submit.",
                "Metadata about communications such as timestamps and participants to enforce community safety.",
              ].map((i) => (
                <li key={i} className="flex gap-3"><span className="text-indigo-500 mt-0.5">—</span><span>{i}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium text-zinc-300 mb-2">Usage and Analytics</p>
            <ul className="space-y-2">
              {[
                "Aggregate engagement statistics (feature usage, retention, session counts), referral codes, and marketing campaign performance captured through analytics providers.",
              ].map((i) => (
                <li key={i} className="flex gap-3"><span className="text-indigo-500 mt-0.5">—</span><span>{i}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium text-zinc-300 mb-2">Information from Third Parties</p>
            <ul className="space-y-2">
              {[
                "Platform stores (Apple App Store, Google Play), authentication providers, and payment processors may send us confirmation data (purchase receipts, entitlement status, token validation) needed to operate the Service.",
              ].map((i) => (
                <li key={i} className="flex gap-3"><span className="text-indigo-500 mt-0.5">—</span><span>{i}</span></li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "How We Use Information",
      content: (
        <ul className="space-y-2">
          {[
            "Create, maintain, and secure accounts; process logins; prevent unauthorized access.",
            "Operate the TyconX simulation, store progress, synchronize data across devices, and power multiplayer interactions.",
            "Balance the economy, detect exploits or fraud, monitor compliance with our Terms, and enforce community safety rules.",
            "Provide customer support, respond to requests, and resolve disputes.",
            "Send transactional messages such as security alerts, gameplay notifications, feature announcements, or required legal notices. You may opt out of non-essential communications through in-app settings where available.",
            "Analyze usage to improve stability, performance, localization, accessibility, monetization experiments, and new gameplay systems.",
            "Comply with legal obligations, enforce agreements, and protect our rights or the rights of players.",
          ].map((i) => (
            <li key={i} className="flex gap-3"><span className="text-indigo-500 mt-0.5">—</span><span>{i}</span></li>
          ))}
        </ul>
      ),
    },
    {
      title: "Legal Bases",
      content: (
        <>
          <p className="mb-3">Where required by law (such as the EU, UK, or Brazil), we process personal data under the following legal bases:</p>
          <ul className="space-y-2">
            {[
              "Performance of a contract: Operating TyconX, providing gameplay features, and delivering support.",
              "Legitimate interests: Securing the Service, analyzing engagement, preventing abuse, and communicating with players about TyconX.",
              "Consent: Optional features like marketing emails, beta experiments, or cookies, where we request your consent.",
              "Legal obligation: Responding to lawful requests, verifying age requirements, or maintaining transaction records.",
            ].map((i) => (
              <li key={i} className="flex gap-3"><span className="text-indigo-500 mt-0.5">—</span><span>{i}</span></li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "How We Share Information",
      content: (
        <>
          <p className="mb-3">We do not sell personal data. We share information only as needed with:</p>
          <ul className="space-y-2">
            {[
              "Service providers that host infrastructure, authentication, databases (for example, Supabase), cloud storage, analytics, crash reporting, moderation, or push notification services. These providers are bound by confidentiality and data-processing agreements.",
              "Platform partners (Apple, Google, or other sign-in/payment partners) to verify entitlements, purchases, or compliance with their policies.",
              "Other players when you voluntarily participate in social features (chat, contracts, leaderboards, market listings, loan requests, or company rosters). Information you publish becomes visible to the community according to your privacy settings.",
              "Law enforcement or authorities if we believe disclosure is reasonably necessary to comply with legal process, protect the rights or safety of players, or prevent fraud.",
              "Business transfers if we engage in a merger, acquisition, asset sale, or financing. We will continue to protect your data and provide notice where required.",
            ].map((i) => (
              <li key={i} className="flex gap-3"><span className="text-indigo-500 mt-0.5">—</span><span>{i}</span></li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "International Transfers",
      content: (
        <p>TyconX infrastructure may be hosted in the United States or other countries. By using the Service, you consent to the transfer and processing of your information outside your country of residence. Where required, we use contractual safeguards (such as Standard Contractual Clauses) or rely on adequacy decisions to protect data transferred internationally.</p>
      ),
    },
    {
      title: "Data Retention",
      content: (
        <p>We retain information for as long as your account is active or as needed to provide the Service. When you request deletion or when your account becomes inactive for an extended period, we will delete or anonymize data unless we must keep it for legal, tax, fraud-prevention, dispute resolution, or archival purposes. Backup copies may persist for a limited time before being purged.</p>
      ),
    },
    {
      title: "Your Choices & Rights",
      content: (
        <>
          <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="space-y-2">
            {[
              "Access, correct, or update your account and gameplay data.",
              "Request deletion of your account through the in-app Support Center. Deleting your account permanently removes progress and may take up to 30 days to complete.",
              "Withdraw consent for optional communications or analytics where such consent was previously provided.",
              "Object to or restrict certain processing, or request that we provide your data in a portable format (where technically feasible).",
            ].map((i) => (
              <li key={i} className="flex gap-3"><span className="text-indigo-500 mt-0.5">—</span><span>{i}</span></li>
            ))}
          </ul>
          <p className="mt-3">You can exercise most controls inside the app (Profile → Support) or by contacting us using the details below. We may ask you to verify your identity before fulfilling a request. Certain data (for example, security logs or aggregated metrics) may be exempt from deletion where permitted by law.</p>
        </>
      ),
    },
    {
      title: "Children",
      content: (
        <p>TyconX is not directed to children under 13 (or the minimum age required in your jurisdiction). We do not knowingly collect personal information from children. If we learn that a child provided personal data without verifiable parental consent, we will delete the information and may suspend the account. Parents or guardians who believe their child has provided data should contact us immediately.</p>
      ),
    },
    {
      title: "Security",
      content: (
        <p>We implement technical and organizational safeguards such as encryption in transit, role-based access controls, rate limiting, monitoring, and regular backups. Despite these efforts, no system is completely secure. You are responsible for keeping your login credentials confidential and for promptly notifying us of any suspected compromise.</p>
      ),
    },
    {
      title: "Third-Party Links & Content",
      content: (
        <p>TyconX may contain links to third-party sites, tools, or community resources. We do not control these third parties and are not responsible for their privacy practices. Review their policies before providing personal information.</p>
      ),
    },
    {
      title: "Changes to This Policy",
      content: (
        <p>We may update this Privacy Policy to reflect new features, legal requirements, or operational needs. We will revise the &quot;Last updated&quot; date and, where required, provide additional notice (such as in-app messaging or email). Continued use of TyconX after changes take effect constitutes acceptance of the revised Policy.</p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">TyconX</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm">Last updated November 30, 2025</p>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-1">
        {sections.map((section, i) => (
          <div key={i} className="group rounded-xl p-6 hover:bg-white/[0.03] transition">
            <div className="flex gap-4">
              <span className="text-xs text-zinc-600 font-mono mt-1 w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="text-white font-semibold mb-3">{section.title}</h2>
                <div className="text-zinc-400 text-sm leading-relaxed">{section.content}</div>
              </div>
            </div>
          </div>
        ))}

        {/* Contact */}
        <div className="rounded-xl border border-white/10 bg-[#111111] p-6 mt-8">
          <div className="flex gap-4">
            <span className="text-xs text-zinc-600 font-mono mt-1 w-5 shrink-0">12</span>
            <div>
              <h2 className="text-white font-semibold mb-3">Contact Us</h2>
              <p className="text-zinc-400 text-sm mb-4">
                If you have questions, requests, or concerns about this Policy or our data practices, contact TyconX Support through the in-app Support Center or email us. Residents of the European Economic Area or the United Kingdom may also have the right to contact their local data protection authority.
              </p>
              <a
                href="mailto:cevikdev@gmail.com"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg"
              >
                cevikdev@gmail.com
              </a>
            </div>
          </div>
        </div>

        <p className="text-zinc-600 text-xs text-center pt-4 pb-2">
          By using TyconX, you acknowledge that you have read and understood this Privacy Policy.
        </p>
      </div>
    </main>
  );
}
