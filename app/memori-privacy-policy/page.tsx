export default function MemoriPrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content: (
        <p>Memori (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a private memory app focused on local photo capture, album organization, and video creation. This Privacy Policy explains what information is handled when you use the Memori mobile application.</p>
      ),
    },
    {
      title: "Information We Store On Your Device",
      content: (
        <>
          <p className="mb-3">Memori is designed to keep your core memory data on your device.</p>
          <p className="mb-3">The app may store locally:</p>
          <ul className="space-y-2">
            {[
              "Photos and videos: selfies, imported photos, and generated memory videos",
              "Album data: album names, emojis, and album assignments",
              "App settings: language, reminders, camera guide choices, and other preferences",
              "Progress data: streaks, totals, and lightweight profile or achievement data used by the app experience",
            ].map((item) => (
              <li key={item} className="flex gap-3"><span className="text-indigo-500 mt-0.5">-</span><span>{item}</span></li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "Information We Do Not Store On Our Own Servers",
      content: (
        <ul className="space-y-2">
          {[
            "We do not run a cloud account system for Memori",
            "We do not store your memories on our own remote servers",
            "We do not require you to create an account to use the app",
          ].map((item) => (
            <li key={item} className="flex gap-3"><span className="text-indigo-500 mt-0.5">-</span><span>{item}</span></li>
          ))}
        </ul>
      ),
    },
    {
      title: "Third-Party Services Used In Specific Flows",
      content: (
        <div className="space-y-4">
          <div>
            <p className="font-medium text-zinc-300 mb-2">1. Google AdMob Rewarded Ads</p>
            <p className="mb-3">Memori may show optional rewarded ads through Google AdMob when a user chooses to watch an ad to unlock a save action.</p>
            <p className="mb-3">If an AdMob ad request is made, Google and its partners may process data such as:</p>
            <ul className="space-y-2">
              {[
                "device and app identifiers",
                "IP address",
                "approximate location inferred from IP",
                "ad performance and fraud-prevention signals",
                "diagnostic and interaction data related to ad delivery",
              ].map((item) => (
                <li key={item} className="flex gap-3"><span className="text-indigo-500 mt-0.5">-</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="mt-3 mb-3">Memori does not control how Google processes data for ad delivery, measurement, fraud prevention, or policy compliance. For more information, please review Google&apos;s documentation and policies:</p>
            <ul className="space-y-2">
              <li className="flex gap-3"><span className="text-indigo-500 mt-0.5">-</span><span>Google Mobile Ads / AdMob app privacy disclosure guide: <a href="https://developers.google.com/admob/ios/privacy/data-disclosure" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition">https://developers.google.com/admob/ios/privacy/data-disclosure</a></span></li>
              <li className="flex gap-3"><span className="text-indigo-500 mt-0.5">-</span><span>Google AdMob policies for ad units that offer rewards: <a href="https://support.google.com/admob/answer/7313578" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition">https://support.google.com/admob/answer/7313578</a></span></li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-zinc-300 mb-2">2. Apple In-App Purchases</p>
            <p className="mb-3">Memori offers an optional one-time <strong>No Ads</strong> purchase through Apple&apos;s StoreKit and App Store infrastructure.</p>
            <p className="mb-3">When you make or restore a purchase:</p>
            <ul className="space-y-2">
              {[
                "payment processing is handled by Apple, not by us",
                "we do not receive your full payment card or billing details",
                "we may receive purchase status information needed to unlock or restore the entitlement on your device",
              ].map((item) => (
                <li key={item} className="flex gap-3"><span className="text-indigo-500 mt-0.5">-</span><span>{item}</span></li>
              ))}
            </ul>
            <p className="mt-3 mb-3">For more information, see Apple&apos;s in-app purchase documentation:</p>
            <ul className="space-y-2">
              <li className="flex gap-3"><span className="text-indigo-500 mt-0.5">-</span><span><a href="https://developer.apple.com/in-app-purchase/" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition">https://developer.apple.com/in-app-purchase/</a></span></li>
              <li className="flex gap-3"><span className="text-indigo-500 mt-0.5">-</span><span><a href="https://developer.apple.com/documentation/storekit/offering-completing-and-restoring-in-app-purchases" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition">https://developer.apple.com/documentation/storekit/offering-completing-and-restoring-in-app-purchases</a></span></li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-zinc-300 mb-2">3. External Support Link</p>
            <p className="mb-3">Memori may include an optional external support link such as Buy Me a Coffee.</p>
            <p className="mb-3">If you open that link:</p>
            <ul className="space-y-2">
              {[
                "you leave the app and visit a third-party website",
                "that website operates under its own privacy policy and terms",
                "support payments on that site do not unlock app features unless explicitly stated inside the app",
              ].map((item) => (
                <li key={item} className="flex gap-3"><span className="text-indigo-500 mt-0.5">-</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "How We Use Data",
      content: (
        <>
          <p className="mb-3">Data handled by Memori is used to:</p>
          <ul className="space-y-2">
            {[
              "capture and organize memories",
              "generate videos from selected memories",
              "remember your preferences",
              "show optional rewarded ads if you choose that flow",
              "unlock or restore the optional No Ads purchase",
            ].map((item) => (
              <li key={item} className="flex gap-3"><span className="text-indigo-500 mt-0.5">-</span><span>{item}</span></li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "Purchases, Ads, And User Choice",
      content: (
        <ul className="space-y-2">
          {[
            "Rewarded ads are optional and user-initiated",
            "The one-time No Ads purchase is optional",
            "If ads are unavailable, the app may allow the user to continue without watching an ad",
            "External support links are optional and do not unlock digital features by themselves",
          ].map((item) => (
            <li key={item} className="flex gap-3"><span className="text-indigo-500 mt-0.5">-</span><span>{item}</span></li>
          ))}
        </ul>
      ),
    },
    {
      title: "Notifications",
      content: <p>If you enable reminders, Memori uses local notification permissions provided by iOS to schedule reminders on your device.</p>,
    },
    {
      title: "Data Control",
      content: (
        <>
          <p className="mb-3">You can:</p>
          <ul className="space-y-2">
            {[
              "delete memories from within the app",
              "remove app data from your device",
              "manage photo and notification permissions in iOS Settings",
              "restore eligible purchases through the app's restore flow",
            ].map((item) => (
              <li key={item} className="flex gap-3"><span className="text-indigo-500 mt-0.5">-</span><span>{item}</span></li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "Children's Privacy",
      content: <p>Memori is not directed to children under 13.</p>,
    },
    {
      title: "Changes to This Policy",
      content: <p>We may update this Privacy Policy from time to time. Continued use of the app after an update means the new version will apply going forward.</p>,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="border-b border-white/5 px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-indigo-400 text-xs font-medium tracking-wide">Memori</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm">Last updated July 5, 2026</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12 space-y-1">
        {sections.map((section, i) => (
          <div key={i} className="group rounded-xl p-6 hover:bg-white/[0.03] transition">
            <div className="flex gap-4">
              <span className="text-xs text-zinc-600 font-mono mt-1 w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="text-white font-semibold mb-3">{section.title}</h2>
                <div className="text-zinc-400 text-sm leading-relaxed">{section.content}</div>
              </div>
            </div>
          </div>
        ))}

        <div className="rounded-xl border border-white/10 bg-[#111111] p-6 mt-8">
          <div className="flex gap-4">
            <span className="text-xs text-zinc-600 font-mono mt-1 w-5 shrink-0">12</span>
            <div>
              <h2 className="text-white font-semibold mb-3">Contact</h2>
              <p className="text-zinc-400 text-sm mb-2">If you have questions about this Privacy Policy, contact:</p>
              <p className="text-zinc-400 text-sm mb-4">CK Labs</p>
              <a
                href="mailto:info@ck-labs.de"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium px-4 py-2 rounded-lg"
              >
                info@ck-labs.de
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
