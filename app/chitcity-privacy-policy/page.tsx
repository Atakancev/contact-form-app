const sections = [
  {
    title: 'Information We Collect',
    content: (
      <p>
        ChitCity collects the email address and password information needed to create and authenticate your account. You may also provide a display name, age, gender, and avatar during profile setup. When you use social features, we process your room membership, online presence, avatar movement state, and chat messages.
      </p>
    ),
  },
  {
    title: 'How We Use Information',
    content: (
      <p>
        We use this information to provide account access, create and display your profile, place you in city rooms, synchronize multiplayer activity, show online participants, deliver room chat, maintain service security, prevent abuse, and provide support.
      </p>
    ),
  },
  {
    title: 'Public and Social Features',
    content: (
      <p>
        Your display name, selected avatar, room presence, and messages may be visible to other players in the ChitCity room where you participate. Do not share sensitive personal information in your display name or chat messages.
      </p>
    ),
  },
  {
    title: 'Age Requirement',
    content: (
      <p>
        ChitCity is intended for users who are at least 13 years old. The app collects age during profile setup to support this requirement. If you believe a child has provided personal information, please contact us so we can investigate and take appropriate action.
      </p>
    ),
  },
  {
    title: 'Service Providers and Storage',
    content: (
      <p>
        ChitCity uses Supabase for authentication, database storage, and realtime service functionality. Information is retained for as long as needed to operate the service, provide support, meet legal obligations, or resolve disputes. We apply access controls and database security policies to protect account and gameplay data.
      </p>
    ),
  },
  {
    title: 'Your Choices',
    content: (
      <p>
        You may stop using ChitCity at any time. For questions about your information, account deletion, correction requests, or privacy rights, contact us at the address below. We may need to verify your request before completing it.
      </p>
    ),
  },
  {
    title: 'Changes to This Policy',
    content: (
      <p>
        We may update this Privacy Policy when ChitCity or applicable requirements change. The updated version will be published on this page with a revised date.
      </p>
    ),
  },
];

export default function ChitCityPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">ChitCity</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm">Last updated August 8, 2026</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12 space-y-1">
        <p className="text-zinc-400 text-sm leading-relaxed px-6 mb-6">
          This Privacy Policy explains how ChitCity handles information when you use the mobile application.
        </p>

        {sections.map((section, index) => (
          <div key={section.title} className="group rounded-xl p-6 hover:bg-white/[0.03] transition">
            <div className="flex gap-4">
              <span className="text-xs text-zinc-600 font-mono mt-1 w-5 shrink-0">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="text-white font-semibold mb-3">{section.title}</h2>
                <div className="text-zinc-400 text-sm leading-relaxed">{section.content}</div>
              </div>
            </div>
          </div>
        ))}

        <div className="rounded-xl border border-white/10 bg-[#111111] p-6 mt-8">
          <h2 className="text-white font-semibold mb-3">Contact</h2>
          <p className="text-zinc-400 text-sm mb-4">For privacy questions, account requests, or support, contact CK-Labs.</p>
          <a href="mailto:info@ck-labs.de" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg">
            info@ck-labs.de
          </a>
        </div>

        <div className="flex gap-4 px-6 pt-8 text-sm">
          <a href="/chitcity-support" className="text-zinc-500 hover:text-zinc-300 underline underline-offset-4 transition">ChitCity Support</a>
          <a href="/" className="text-zinc-500 hover:text-zinc-300 underline underline-offset-4 transition">Contact form</a>
        </div>
      </div>
    </main>
  );
}
