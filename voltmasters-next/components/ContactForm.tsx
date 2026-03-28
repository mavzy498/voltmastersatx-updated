'use client';

import { useState } from 'react';
import { CheckCircle2, Phone, AlertCircle } from 'lucide-react';

const PHONE = '(512) 537-5145';
const PHONE_HREF = 'tel:+15125375145';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
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

      if (!res.ok) {
        throw new Error(data.error ?? 'Submission failed');
      }

      setFormState('success');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please call us directly.';
      setErrorMsg(message);
      setFormState('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formState === 'error') setFormState('idle');
  };

  return (
    <section id="contact-form" className="py-24 lg:py-32 px-5 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Headline & info */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-accent font-semibold">Free Quote</span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-white tracking-tight mb-5">
              Get your free quote<br />in minutes.
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Answer 3 quick questions and we&apos;ll get back to you with a clear, all-in price. No on-site visit needed for most quotes.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'All-in pricing — charger, install, and rebate filing included',
                'We call or text you within a few hours',
                'Most quotes don\u2019t require an on-site visit',
                'Schedule your install at a time that works for you',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl px-6 py-4 transition-all group"
            >
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-zinc-950" />
              </div>
              <div>
                <p className="text-zinc-400 text-xs">Prefer to call?</p>
                <p className="text-white font-bold">{PHONE}</p>
              </div>
            </a>
          </div>

          {/* Right: Form */}
          <div>
            {formState === 'success' ? (
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl text-white mb-3">We got it!</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Thanks for reaching out. We&apos;ll call or text you within a few hours to discuss your installation and give you a clear, all-in price.
                </p>
                <button
                  onClick={() => {
                    setFormState('idle');
                    setFormData({ name: '', email: '', phone: '', garageType: '', panelDistance: '', panelSize: '', message: '' });
                  }}
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-10 space-y-5"
              >
                {/* Error banner */}
                {formState === 'error' && (
                  <div className="flex items-start gap-3 bg-red-950/50 border border-red-900 rounded-xl p-4">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-300 text-sm">{errorMsg}</p>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm text-zinc-300 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={formState === 'loading'}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all text-sm disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-zinc-300 font-semibold">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={formState === 'loading'}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all text-sm disabled:opacity-50"
                      placeholder="john@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm text-zinc-300 font-semibold">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={formState === 'loading'}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all text-sm disabled:opacity-50"
                      placeholder="(512) 555-0123"
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-zinc-800 pt-2">
                  <p className="text-xs text-zinc-500 mb-4">Answer these 3 questions so we can quote you fast:</p>
                </div>

                {/* Q1 */}
                <div>
                  <label htmlFor="garageType" className="block mb-2 text-sm text-zinc-300 font-semibold">
                    1. Where will the charger be installed? *
                  </label>
                  <select
                    id="garageType"
                    name="garageType"
                    value={formData.garageType}
                    onChange={handleChange}
                    required
                    disabled={formState === 'loading'}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all text-sm appearance-none disabled:opacity-50"
                  >
                    <option value="">Select an option&hellip;</option>
                    <option value="attached-garage">Attached garage</option>
                    <option value="detached-garage">Detached garage</option>
                    <option value="carport">Carport</option>
                    <option value="driveway-exterior">Driveway / exterior wall</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                {/* Q2 */}
                <div>
                  <label htmlFor="panelDistance" className="block mb-2 text-sm text-zinc-300 font-semibold">
                    2. How far is your electrical panel from the charger location? *
                  </label>
                  <select
                    id="panelDistance"
                    name="panelDistance"
                    value={formData.panelDistance}
                    onChange={handleChange}
                    required
                    disabled={formState === 'loading'}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all text-sm appearance-none disabled:opacity-50"
                  >
                    <option value="">Select an option&hellip;</option>
                    <option value="under-25ft">Under 25 feet (same wall / nearby)</option>
                    <option value="25-50ft">25–50 feet</option>
                    <option value="over-50ft">Over 50 feet</option>
                    <option value="not-sure">Not sure</option>
                  </select>
                </div>

                {/* Q3 */}
                <div>
                  <label htmlFor="panelSize" className="block mb-2 text-sm text-zinc-300 font-semibold">
                    3. What size is your electrical panel? *
                  </label>
                  <select
                    id="panelSize"
                    name="panelSize"
                    value={formData.panelSize}
                    onChange={handleChange}
                    required
                    disabled={formState === 'loading'}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all text-sm appearance-none disabled:opacity-50"
                  >
                    <option value="">Select an option&hellip;</option>
                    <option value="100a">100 amp</option>
                    <option value="150a">150 amp</option>
                    <option value="200a">200 amp</option>
                    <option value="not-sure">Not sure — I can send a photo</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm text-zinc-300 font-semibold">
                    Anything else? <span className="text-zinc-600 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    disabled={formState === 'loading'}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all text-sm resize-none disabled:opacity-50"
                    placeholder="Vehicle type, preferred charger brand, questions&hellip;"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full bg-accent text-zinc-950 py-4 rounded-xl font-bold text-base hover:bg-yellow-400 transition-all hover:scale-[1.02] shadow-lg shadow-accent/20 mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {formState === 'loading' ? 'Sending…' : 'Get My Free Quote →'}
                </button>

                <p className="text-xs text-zinc-600 text-center pt-1">
                  No spam, ever. We&apos;ll only contact you about your installation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
