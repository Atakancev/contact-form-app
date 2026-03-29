export default function CountFitPrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content: (
        <p>CountFit ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your information is handled when you use the CountFit mobile application.</p>
      ),
    },
    {
      title: "Information Storage",
      content: (
        <ul className="space-y-2">
          {["All data is stored locally on your device only", "No personal information is collected or transmitted to external servers", "You have full control over your data"].map(i => <li key={i} className="flex gap-3"><span className="text-indigo-500 mt-0.5">—</span><span>{i}</span></li>)}
        </ul>
      ),
    },
    {
      title: "App Functionality",
      content: (
        <>
          <p className="mb-3">The app may store:</p>
          <ul className="space-y-2">
            {["Profile information (optional): name, age, weight, height", "Workout data: exercise records, sets, reps, weights", "App preferences and settings"].map(i => <li key={i} className="flex gap-3"><span className="text-indigo-500 mt-0.5">—</span><span>{i}</span></li>)}
          </ul>
        </>
      ),
    },
    {
      title: "Data Usage",
      content: (
        <>
          <p className="mb-3">Your data is used only to:</p>
          <ul className="space-y-2">
            {["Provide workout tracking features", "Show your progress statistics", "Enable app functionality"].map(i => <li key={i} className="flex gap-3"><span className="text-indigo-500 mt-0.5">—</span><span>{i}</span></li>)}
          </ul>
        </>
      ),
    },
    {
      title: "Data Control",
      content: (
        <>
          <p className="mb-3">You can:</p>
          <ul className="space-y-2">
            {["Access your data anytime", "Delete your data from the app", "Export your data", "Control app notifications"].map(i => <li key={i} className="flex gap-3"><span className="text-indigo-500 mt-0.5">—</span><span>{i}</span></li>)}
          </ul>
        </>
      ),
    },
    {
      title: "Data Backup",
      content: (
        <ul className="space-y-2">
          {["The app creates local backups on your device", "Backups are stored only on your device", "You can manually create or delete backups"].map(i => <li key={i} className="flex gap-3"><span className="text-indigo-500 mt-0.5">—</span><span>{i}</span></li>)}
        </ul>
      ),
    },
    {
      title: "Third-Party Content",
      content: (
        <p>Sound effects are from <a href="https://pixabay.com" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition">Pixabay</a> under their free-to-use license.</p>
      ),
    },
    {
      title: "Age Restriction",
      content: <p>This app is not intended for use by children under 13 years of age.</p>,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">CountFit</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm">Last updated January 5, 2025</p>
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
            <span className="text-xs text-zinc-600 font-mono mt-1 w-5 shrink-0">09</span>
            <div>
              <h2 className="text-white font-semibold mb-3">Contact</h2>
              <p className="text-zinc-400 text-sm mb-4">For questions about this privacy policy or the app, please reach out.</p>
              <a
                href="mailto:cevikdev@gmail.com"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg"
              >
                cevikdev@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
