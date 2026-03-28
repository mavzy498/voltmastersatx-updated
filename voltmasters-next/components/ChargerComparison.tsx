'use client';

import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const tiers = [
  {
    name: 'Level 1',
    subtitle: 'Standard Outlet',
    range: '3–5 mi/hr',
    amperage: '15–20A',
    voltage: '120V',
    installTime: '~1 hr',
    cost: '$0 hardware',
    rebateEligible: false,
    recommended: false,
    features: [
      { label: 'Works with any EV', yes: true },
      { label: 'Needs panel upgrade', yes: false },
      { label: 'Overnight full charge', yes: false },
      { label: 'Austin Energy rebate', yes: false },
      { label: 'Smart scheduling', yes: false },
    ],
    cta: 'Good for low-mileage drivers',
    ctaStyle: 'outline',
  },
  {
    name: 'Level 2',
    subtitle: 'Home Charger — Most Popular',
    range: '20–30 mi/hr',
    amperage: '40–50A',
    voltage: '240V',
    installTime: '2–4 hrs',
    cost: '$300–$900',
    rebateEligible: true,
    recommended: true,
    features: [
      { label: 'Works with any EV', yes: true },
      { label: 'Needs panel upgrade', yes: false },
      { label: 'Overnight full charge', yes: true },
      { label: 'Austin Energy rebate', yes: true },
      { label: 'Smart scheduling', yes: true },
    ],
    cta: 'Best value for most homeowners',
    ctaStyle: 'filled',
  },
  {
    name: 'Commercial',
    subtitle: 'Business / Multi-Unit',
    range: '20–30 mi/hr per port',
    amperage: '40A+ per port',
    voltage: '240V',
    installTime: 'Custom',
    cost: 'Custom quote',
    rebateEligible: true,
    recommended: false,
    features: [
      { label: 'Multiple ports', yes: true },
      { label: 'Load management', yes: true },
      { label: 'Usage reporting', yes: true },
      { label: 'Austin Energy rebate', yes: true },
      { label: 'Network management', yes: true },
    ],
    cta: 'Perfect for businesses & HOAs',
    ctaStyle: 'outline',
  },
];

export function ChargerComparison() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 lg:py-32 px-5 lg:px-8 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5"
          >
            <span className="text-sm text-accent font-semibold">Charger Types</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl lg:text-5xl text-white tracking-tight mb-4"
          >
            Which charger is right for you?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg leading-relaxed"
          >
            Not sure what you need? Here&apos;s a quick breakdown. Most Austin homeowners choose Level 2.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.recommended
                  ? 'bg-accent text-zinc-950 shadow-2xl shadow-accent/30 scale-[1.02]'
                  : 'bg-zinc-900 border border-zinc-800 text-white'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-950 text-accent text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full border border-accent/30">
                  ★ Recommended
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${tier.recommended ? 'text-zinc-600' : 'text-zinc-500'}`}>
                  {tier.subtitle}
                </p>
                <h3 className={`text-2xl ${tier.recommended ? 'text-zinc-950' : 'text-white'}`}>{tier.name}</h3>
              </div>

              {/* Specs */}
              <div className={`rounded-xl p-5 mb-6 space-y-3 ${tier.recommended ? 'bg-black/10' : 'bg-zinc-800/60'}`}>
                {[
                  { key: 'Range Added', val: tier.range },
                  { key: 'Amperage', val: tier.amperage },
                  { key: 'Voltage', val: tier.voltage },
                  { key: 'Install Time', val: tier.installTime },
                  { key: 'Hardware Cost', val: tier.cost },
                ].map(({ key, val }) => (
                  <div key={key} className="flex justify-between items-center text-sm">
                    <span className={tier.recommended ? 'text-zinc-700' : 'text-zinc-400'}>{key}</span>
                    <span className={`font-semibold ${tier.recommended ? 'text-zinc-950' : 'text-white'}`}>{val}</span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map(({ label, yes }) => (
                  <li key={label} className="flex items-center gap-3 text-sm">
                    {yes ? (
                      <Check className={`w-4 h-4 flex-shrink-0 ${tier.recommended ? 'text-zinc-800' : 'text-accent'}`} />
                    ) : (
                      <X className={`w-4 h-4 flex-shrink-0 ${tier.recommended ? 'text-zinc-500' : 'text-zinc-600'}`} />
                    )}
                    <span className={tier.recommended ? (yes ? 'text-zinc-800' : 'text-zinc-500') : (yes ? 'text-zinc-300' : 'text-zinc-600')}>
                      {label}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToForm}
                className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] ${
                  tier.recommended
                    ? 'bg-zinc-950 text-white hover:bg-zinc-800'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-zinc-500 text-sm mt-8"
        >
          Not sure which option fits your home? <button onClick={scrollToForm} className="text-accent hover:underline font-semibold">Request a free consultation →</button>
        </motion.p>
      </div>
    </section>
  );
}