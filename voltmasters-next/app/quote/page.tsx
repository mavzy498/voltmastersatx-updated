'use client';

import { useState } from 'react';
import { CheckCircle2, Phone, Star, ShieldCheck, Zap, AlertCircle } from 'lucide-react';
import { Logo } from '@/components/Logo';
import type { Metadata } from 'next';

const PHONE = '(512) 537-5145';
const PHONE_HREF = 'tel:+15125375145';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    garageType: '',
    panelDistance: '',
    panelSize: '',
    message: '',
  });
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Submission failed');

      setFormState('success');

      // Fire Meta Pixel lead event
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please call us directly.';
      setErrorMsg(message);
      setFormState('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formState === 'error') setFormState('idle');
  };

  return (
    <div className="min-h-screen bg-zinc-950">

      {/* Minimal header */}
      <header className="border-b border-zinc-900 px-5 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Logo className="h-12" variant="light" />
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 text-white font-semibold text-sm hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4 text-accent" />
            {PHONE}
          </a>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Value prop */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3.5 h-3.5 text-accent fill-accent" />
              <span className="text-sm text-accent font-semibold">Austin Energy Approved Contractor</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              EV Charger Installed
              <br />
              <span className="text-accent">for as low as $700</span>
              <br />
              <span className="text-zinc-400 text-3xl lg:text-4xl">after the rebate.</span>
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Austin Energy gives you up to <strong className="text-white">$1,200 back</strong> on your EV charger install. We handle the paperwork. You just enjoy charging at home.
            </p>

            {/* Price breakdown card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
              <p className="text-zinc-400 text-sm mb-4 font-semibold uppercase tracking-widest">Typical Cost Breakdown</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Charger + Installation</span>
                  <span className="text-white font-semibold">$1,900</span>
                </div>
                <div className="flex justify-between text-sm border-t border-zinc-800 pt-3">
                  <span className="text-accent font-semibold">Austin Energy Rebate</span>
                  <span className="text-accent font-bold">− $1,200</span>
                </div>
                <div className="flex justify-between border-t border-zinc-700 pt-3">
                  <span className="text-white font-bold text-lg">Your Final Cost</span>
                  <span className="text-4xl font-black text-white">$700</span>
                </div>
              </div>
            </div>

            {/* Trust points */}
            <div className="space-y-3 mb-8">
              {[
                'All-in pricing — charger, install & rebate filing included',
                'We call or text you within a few hours',
                'Installed in as little as 1–3 hours',
                'Licensed, bonded & insured master electricians',
                'Most quotes don\'t require an on-site visit',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-sm">5.0 · 100+ Google Reviews</p>
                <p className="text-zinc-500 text-xs">Austin's #1 rated EV charger installer</p>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-6">
              {['TECL Licensed', 'Fully Bonded', 'Liability Insured', 'Austin Energy Approved'].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <span className="text-zinc-500 text-xs font-semibold">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:sticky lg:top-8">
            {formState === 'success' ? (
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl text-white font-bold mb-3">We got it!</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Thanks for reaching out. We'll call or text you within a few hours with your quote.
                </p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-accent text-zinc-950 px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call us now: {PHONE}
                </a>
              </div>
            ) : (
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
                {/* Form header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3 py-1 mb-3">
                    <span className="text-xs text-accent font-semibold">Free Quote — No Obligation</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Get your price in minutes</h2>
                  <p className="text-zinc-500 text-sm mt-1">Answer 3 quick questions — no on-site visit needed for most quotes.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {formState === 'error' && (
                    <div className="flex items-start gap-3 bg-red-950/50 border border-red-900 rounded-xl p-4">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-red-300 text-sm">{errorMsg}</p>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block mb-1.5 text-sm text-zinc-300 font-semibold">Full Name *</label>
                    <input
                      type="text" id="name" name="name" value={formData.name}
                      onChange={handleChange} required disabled={formState === 'loading'}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all text-sm disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block mb-1.5 text-sm text-zinc-300 font-semibold">Email *</label>
                      <input
                        type="email" id="email" name="email" value={formData.email}
                        onChange={handleChange} required disabled={formState === 'loading'}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all text-sm disabled:opacity-50"
                        placeholder="john@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-1.5 text-sm text-zinc-300 font-semibold">Phone *</label>
                      <input
                        type="tel" id="phone" name="phone" value={formData.phone}
                        onChange={handleChange} required disabled={formState === 'loading'}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all text-sm disabled:opacity-50"
                        placeholder="(512) 555-0123"
                      />
                    </div>
                  </div>

                  <div className="border-t border-zinc-800 pt-1">
                    <p className="text-xs text-zinc-500 mb-3">3 quick questions so we can quote you fast:</p>
                  </div>

                  {/* Q1 */}
                  <div>
                    <label htmlFor="garageType" className="block mb-1.5 text-sm text-zinc-300 font-semibold">1. Where will the charger be installed? *</label>
                    <select
                      id="garageType" name="garageType" value={formData.garageType}
                      onChange={handleChange} required disabled={formState === 'loading'}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all text-sm appearance-none disabled:opacity-50"
                    >
                      <option value="">Select an option…</option>
                      <option value="attached-garage">Attached garage</option>
                      <option value="detached-garage">Detached garage</option>
                      <option value="carport">Carport</option>
                      <option value="driveway-exterior">Driveway / exterior wall</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  {/* Q2 */}
                  <div>
                    <label htmlFor="panelDistance" className="block mb-1.5 text-sm text-zinc-300 font-semibold">2. How far is your panel from the charger? *</label>
                    <select
                      id="panelDistance" name="panelDistance" value={formData.panelDistance}
                      onChange={handleChange} required disabled={formState === 'loading'}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all text-sm appearance-none disabled:opacity-50"
                    >
                      <option value="">Select an option…</option>
                      <option value="under-25ft">Under 25 feet (same wall / nearby)</option>
                      <option value="25-50ft">25–50 feet</option>
                      <option value="over-50ft">Over 50 feet</option>
                      <option value="not-sure">Not sure</option>
                    </select>
                  </div>

                  {/* Q3 */}
                  <div>
                    <label htmlFor="panelSize" className="block mb-1.5 text-sm text-zinc-300 font-semibold">3. What size is your electrical panel? *</label>
                    <select
                      id="panelSize" name="panelSize" value={formData.panelSize}
                      onChange={handleChange} required disabled={formState === 'loading'}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all text-sm appearance-none disabled:opacity-50"
                    >
                      <option value="">Select an option…</option>
                      <option value="100a">100 amp</option>
                      <option value="150a">150 amp</option>
                      <option value="200a">200 amp</option>
                      <option value="not-sure">Not sure — I can send a photo</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="message" className="block mb-1.5 text-sm text-zinc-300 font-semibold">
                      Anything else? <span className="text-zinc-600 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="message" name="message" value={formData.message}
                      onChange={handleChange} rows={2} disabled={formState === 'loading'}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all text-sm resize-none disabled:opacity-50"
                      placeholder="Vehicle type, preferred charger brand, questions…"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="w-full bg-accent text-zinc-950 py-4 rounded-xl font-black text-base hover:bg-yellow-400 transition-all hover:scale-[1.02] shadow-lg shadow-accent/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {formState === 'loading' ? 'Sending…' : 'Get My Free Quote →'}
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-zinc-600" />
                    <p className="text-xs text-zinc-600 text-center">
                      No spam, ever. We'll only contact you about your installation.
                    </p>
                  </div>
                </form>

                {/* Or call */}
                <div className="mt-5 pt-5 border-t border-zinc-800 text-center">
                  <p className="text-zinc-500 text-xs mb-2">Prefer to talk now?</p>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 text-white font-bold hover:text-accent transition-colors"
                  >
                    <Phone className="w-4 h-4 text-accent" />
                    {PHONE}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 py-6 px-5 text-center">
        <p className="text-zinc-600 text-xs">
          © {new Date().getFullYear()} VoltMasters ATX · Austin, TX ·{' '}
          <a href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy</a>
          {' · '}
          <a href="/terms" className="hover:text-zinc-400 transition-colors">Terms</a>
        </p>
      </div>
    </div>
  );
}
