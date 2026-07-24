'use client';

import { useState, KeyboardEvent } from 'react';
import Image from 'next/image';
import { Turnstile } from '@marsidev/react-turnstile';

type Step = 'project' | 'name' | 'email' | 'message' | 'success';

const PROJECTS = [
  { label: 'General', icon: null },
  { label: 'TyconX', icon: 'https://www.atakancevik.com/_next/image?url=%2Ftyconx.jpg&w=128&q=75' },
  { label: 'MafiaX', icon: 'https://www.atakancevik.com/_next/image?url=%2Fmafiax.jpg&w=128&q=75' },
  { label: 'CountFit', icon: 'https://www.atakancevik.com/_next/image?url=%2Fcountfit.jpg&w=128&q=75' },
  { label: 'Memori', icon: 'https://www.atakancevik.com/_next/image?url=%2Fmemori.jpg&w=128&q=75' },
  { label: 'Keşan', icon: null },
];

const inputClass =
  'w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-base';

const btnClass =
  'bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:text-indigo-400 text-white font-medium px-6 py-2.5 rounded-lg text-sm transition';

export default function ContactForm({ initialProject, language = 'en' }: { initialProject?: string; language?: 'en' | 'tr' }) {
  const isTurkish = language === 'tr';
  const [step, setStep] = useState<Step>(initialProject ? 'name' : 'project');
  const [project, setProject] = useState(initialProject ?? '');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMsg('');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message: `[${project}]\n\n${message}`, turnstileToken }),
    });
    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      setStep('success');
    } else {
      setErrorMsg(data.error || 'Something went wrong.');
    }
  };

  const handleEnter = (e: KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter') action();
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        {/* Step: project */}
        {step === 'project' && (
          <div className="animate-fadeIn">
            <p className="text-zinc-500 text-sm mb-3 uppercase tracking-widest">{isTurkish ? 'İletişime geç' : 'Get in touch'}</p>
            <h1 className="text-2xl font-bold text-white mb-8">{isTurkish ? 'Ne hakkında iletişime geçiyorsun?' : 'What are you reaching out about?'}</h1>
            <div className="flex flex-col gap-3">
              {PROJECTS.map(({ label, icon }) => (
                <button
                  key={label}
                  onClick={() => { setProject(label); setStep('name'); }}
                  className="w-full text-left bg-[#111111] border border-white/10 hover:border-indigo-500 hover:bg-[#1a1a1a] text-white rounded-xl px-5 py-4 text-sm font-medium transition flex items-center gap-3"
                >
                  {icon && (
                    <Image
                      src={icon}
                      alt={label}
                      width={28}
                      height={28}
                      className="rounded-md object-cover flex-shrink-0"
                      unoptimized
                    />
                  )}
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step: name */}
        {step === 'name' && (
          <div className="animate-fadeIn">
            <p className="text-zinc-500 text-sm mb-3 uppercase tracking-widest">{project}</p>
            <h1 className="text-2xl font-bold text-white mb-8">{isTurkish ? 'Adın nedir?' : "What's your name?"}</h1>
            <input
              autoFocus
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              onKeyDown={e => handleEnter(e, () => name.trim() && setStep('email'))}
              placeholder={isTurkish ? 'Adın' : 'Your name'}
              className={inputClass}
            />
            <div className="flex justify-between items-center mt-4">
              <button onClick={() => { setStep('project'); if (initialProject) setProject(initialProject); }} className="text-sm text-zinc-500 hover:text-zinc-300 transition">{isTurkish ? '← Geri' : '← Back'}</button>
              <button
                onClick={() => setStep('email')}
                disabled={!name.trim()}
                className={btnClass}
              >
                {isTurkish ? 'Devam et →' : 'Continue →'}
              </button>
            </div>
          </div>
        )}

        {/* Step: email */}
        {step === 'email' && (
          <div className="animate-fadeIn">
            <p className="text-zinc-500 text-sm mb-3 uppercase tracking-widest">{project}</p>
            <h1 className="text-2xl font-bold text-white mb-2">{isTurkish ? `Merhaba ${name}!` : `Hi ${name}!`}</h1>
            <p className="text-zinc-400 mb-8 text-sm">{isTurkish ? 'Sana geri dönüş yapabilmemiz için — sana ulaşabileceğimiz en iyi e-posta adresi nedir?' : "In case we need to contact you back — where's the best email to reach you?"}</p>
            <input
              autoFocus
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => handleEnter(e, () => isValidEmail(email) && setStep('message'))}
              placeholder={isTurkish ? 'sen@example.com' : 'you@example.com'}
              className={inputClass}
            />
            <div className="flex justify-between items-center mt-4">
              <button onClick={() => setStep('name')} className="text-sm text-zinc-500 hover:text-zinc-300 transition">{isTurkish ? '← Geri' : '← Back'}</button>
              <button
                onClick={() => setStep('message')}
                disabled={!isValidEmail(email)}
                className={btnClass}
              >
                {isTurkish ? 'Devam et →' : 'Continue →'}
              </button>
            </div>
          </div>
        )}

        {/* Step: message */}
        {step === 'message' && (
          <div className="animate-fadeIn">
            <p className="text-zinc-500 text-sm mb-3 uppercase tracking-widest">{project}</p>
            <h1 className="text-2xl font-bold text-white mb-2">{isTurkish ? 'Aklında ne var?' : "What's on your mind?"}</h1>
            <p className="text-zinc-400 mb-8 text-sm">{isTurkish ? 'Bize her şeyi anlat — seni dinliyoruz.' : "Tell us everything — we're listening."}</p>
            <textarea
              autoFocus
              rows={6}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder={isTurkish ? 'Mesajını buraya yaz...' : 'Write your message here...'}
              className={`${inputClass} resize-none`}
            />
            {errorMsg && <p className="text-sm text-red-400 mt-2">{errorMsg}</p>}
            <Turnstile
              siteKey="0x4AAAAAACxrQEHugGkQcOI6"
              onSuccess={setTurnstileToken}
              className="mt-4"
            />
            <div className="flex justify-between items-center mt-4">
              <button onClick={() => setStep('email')} className="text-sm text-zinc-500 hover:text-zinc-300 transition">{isTurkish ? '← Geri' : '← Back'}</button>
              <button
                onClick={handleSubmit}
                disabled={!message.trim() || loading || !turnstileToken}
                className={btnClass}
              >
                {loading ? (isTurkish ? 'Gönderiliyor...' : 'Sending...') : (isTurkish ? 'Mesajı gönder →' : 'Send Message →')}
              </button>
            </div>
          </div>
        )}

        {/* Step: success */}
        {step === 'success' && (
          <div className="animate-fadeIn text-center">
            <div className="w-16 h-16 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-3">{isTurkish ? `Mesajını aldık, ${name}!` : `We've got your message, ${name}!`}</h1>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              {isTurkish ? <><span className="text-indigo-400 font-medium">{project}</span> hakkında bizimle iletişime geçtiğin için teşekkürler.<br />Ekibimiz mesajını dikkatle inceleyecek ve en kısa sürede <span className="text-white font-medium">{email}</span> adresinden sana dönüş yapacak.</> : <>Thank you for reaching out about <span className="text-indigo-400 font-medium">{project}</span>.<br />Our team will carefully review your message and get back to you at <span className="text-white font-medium">{email}</span> as soon as possible. We're excited to connect!</>}
            </p>
            <button
              onClick={() => { setStep('project'); setProject(initialProject ?? ''); setName(''); setEmail(''); setMessage(''); }}
              className="text-sm text-zinc-500 hover:text-zinc-300 transition"
            >
              {isTurkish ? 'Başka bir mesaj gönder' : 'Send another message'}
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
