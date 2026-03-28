'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function RebateHighlight() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="rebate" className="py-24 lg:py-32 bg-zinc-950 text-white overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-semibold text-accent">Austin Energy Approved Contractor</span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-white tracking-tight mb-6">
              Save up to{' '}
              <span className="text-accent">$1,200</span>
              <br />on your installation.
            </h2>

            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Austin Energy offers up to $1,200 back on your EV charger install. We handle 100% of the paperwork &mdash; you just enjoy charging at home.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Up to $1,200 back on charger + installation',
                'Works with Tesla, ChargePoint, JuiceBox & more',
                'We handle 100% of the application and filing',
                'Rebate check arrives in 6\u20138 weeks',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center bg-accent text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/20"
            >
              Check My Rebate Eligibility →
            </button>
          </motion.div>

          {/* Right: Rebate card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-accent/30 transition-colors duration-300">
              {/* Watermark icon */}
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg className="w-40 h-40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl text-white mb-1">Typical Savings Breakdown</h3>
                <p className="text-zinc-500 text-sm mb-8">Based on a standard home Level 2 installation</p>

                <div className="space-y-5">
                  {[
                    { label: 'Tesla Wall Connector (included)', value: '$500', highlight: false },
                    { label: 'Professional Installation', value: '$1,400', highlight: false },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center border-b border-zinc-800/80 pb-4">
                      <span className="text-zinc-400 text-sm">{label}</span>
                      <span className="text-white font-semibold">{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center border-b border-zinc-800/80 pb-4">
                    <span className="text-accent font-semibold">Austin Energy Rebate</span>
                    <span className="text-accent text-xl font-black">−$1,200</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-white text-lg font-semibold">Your Final Cost</span>
                    <span className="text-4xl font-black text-white">$700</span>
                  </div>
                </div>

                <div className="mt-8 bg-accent/10 border border-accent/20 rounded-xl p-4">
                  <p className="text-accent text-sm font-semibold text-center">
                    Most customers pay under $1,000 after the rebate
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-accent rounded-2xl px-5 py-3 shadow-xl shadow-black/30">
              <p className="text-zinc-950 text-xs font-semibold">Austin Energy</p>
              <p className="text-zinc-950 font-black text-sm">Approved Contractor</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}