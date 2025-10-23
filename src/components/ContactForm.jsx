import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  function validate() {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.';
    if (form.message.trim().length < 10) return 'Please provide a bit more detail.';
    return '';
  }

  async function onSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setError('');
    setStatus('sending');
    // Simulate async submission for this demo
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Let's discuss your project</h2>
          <p className="mt-4 text-neutral-600">
            Whether it's a new build, a thoughtful renovation, or early concept development — I'd love to hear about it. I typically respond within one business day.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6 text-sm">
            <a href="mailto:studio@example.com" className="group flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white">
                <Mail className="h-4 w-4" />
              </span>
              <span className="group-hover:underline underline-offset-4">studio@example.com</span>
            </a>
            <a href="tel:+10000000000" className="group flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white">
                <Phone className="h-4 w-4" />
              </span>
              <span className="group-hover:underline underline-offset-4">+1 (000) 000-0000</span>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="grid gap-5">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-500 placeholder:text-neutral-400"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-500 placeholder:text-neutral-400"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-500 placeholder:text-neutral-400"
                placeholder="Tell me about the site, scope, timeline, and any references you love."
                required
              />
            </div>

            {error && (
              <div className="text-sm text-red-600">{error}</div>
            )}
            {status === 'success' && (
              <div className="text-sm text-emerald-600">Thanks — your message has been noted. I'll be in touch shortly.</div>
            )}

            <div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
