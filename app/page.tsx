'use client';

import { useState, KeyboardEvent } from 'react';

type Step = 'project' | 'name' | 'email' | 'message' | 'success';

const PROJECTS = ['General', 'TyconX', 'MafiaX', 'CountFit', 'Memori'];

const inputClass =
  'w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition text-base';

const btnClass =
  'bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:text-indigo-400 text-white font-medium px-6 py-2.5 rounded-lg text-sm transition';

export default function ContactPage() {
  const [step, setStep] = useState<Step>('project');
  const [project, setProject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMsg('');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message: `[${project}]\n\n${message}` }),
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
            <p className="text-zinc-500 text-sm mb-3 uppercase tracking-widest">Get in touch</p>
            <h1 className="text-2xl font-bold text-white mb-8">What are you reaching out about?</h1>
            <div className="flex flex-col gap-3">
              {PROJECTS.map(p => (
                <button
                  key={p}
                  onClick={() => { setProject(p); setStep('name'); }}
                  className="w-full text-left bg-[#111111] border border-white/10 hover:border-indigo-500 hover:bg-[#1a1a1a] text-white rounded-xl px-5 py-4 text-sm font-medium transition"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step: name */}
        {step === 'name' && (
          <div className="animate-fadeIn">
            <p className="text-zinc-500 text-sm mb-3 uppercase tracking-widest">{project}</p>
            <h1 className="text-2xl font-bold text-white mb-8">What's your name?</h1>
            <input
              autoFocus
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              onKeyDown={e => handleEnter(e, () => name.trim() && setStep('email'))}
              placeholder="Your name"
              className={inputClass}
            />
            <div className="flex justify-between items-center mt-4">
              <button onClick={() => setStep('project')} className="text-sm text-zinc-500 hover:text-zinc-300 transition">← Back</button>
              <button
                onClick={() => setStep('email')}
                disabled={!name.trim()}
                className={btnClass}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step: email */}
        {step === 'email' && (
          <div className="animate-fadeIn">
            <p className="text-zinc-500 text-sm mb-3 uppercase tracking-widest">{project}</p>
            <h1 className="text-2xl font-bold text-white mb-2">Hi {name}!</h1>
            <p className="text-zinc-400 mb-8 text-sm">In case we need to contact you back — where's the best email to reach you?</p>
            <input
              autoFocus
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => handleEnter(e, () => email.trim() && setStep('message'))}
              placeholder="you@example.com"
              className={inputClass}
            />
            <div className="flex justify-between items-center mt-4">
              <button onClick={() => setStep('name')} className="text-sm text-zinc-500 hover:text-zinc-300 transition">← Back</button>
              <button
                onClick={() => setStep('message')}
                disabled={!email.trim()}
                className={btnClass}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step: message */}
        {step === 'message' && (
          <div className="animate-fadeIn">
            <p className="text-zinc-500 text-sm mb-3 uppercase tracking-widest">{project}</p>
            <h1 className="text-2xl font-bold text-white mb-2">What's on your mind?</h1>
            <p className="text-zinc-400 mb-8 text-sm">Tell us everything — we're listening.</p>
            <textarea
              autoFocus
              rows={6}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className={`${inputClass} resize-none`}
            />
            {errorMsg && <p className="text-sm text-red-400 mt-2">{errorMsg}</p>}
            <div className="flex justify-between items-center mt-4">
              <button onClick={() => setStep('email')} className="text-sm text-zinc-500 hover:text-zinc-300 transition">← Back</button>
              <button
                onClick={handleSubmit}
                disabled={!message.trim() || loading}
                className={btnClass}
              >
                {loading ? 'Sending...' : 'Send Message →'}
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
            <h1 className="text-2xl font-bold text-white mb-3">We've got your message, {name}!</h1>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Thank you for reaching out about <span className="text-indigo-400 font-medium">{project}</span>.<br />
              Our team will carefully review your message and get back to you at <span className="text-white font-medium">{email}</span> as soon as possible. We're excited to connect!
            </p>
            <button
              onClick={() => { setStep('project'); setProject(''); setName(''); setEmail(''); setMessage(''); }}
              className="text-sm text-zinc-500 hover:text-zinc-300 transition"
            >
              Send another message
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
