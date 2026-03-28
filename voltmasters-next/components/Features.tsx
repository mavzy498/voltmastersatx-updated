'use client';

import { motion } from 'motion/react';
import { Award, FileCheck, ShieldCheck, Clock, MapPin, Package } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: 'True End-to-End Service',
    description: 'Charger, installation, and rebate filing — all included in one turnkey package. One call, one price, done.',
  },
  {
    icon: Award,
    title: 'Premium Materials Only',
    description: 'Every install uses code-compliant wiring, weatherproof hardware, and UL-listed components built to last.',
  },
  {
    icon: FileCheck,
    title: 'Rebate Paperwork Done For You',
    description: 'We file your Austin Energy rebate application so you collect up to $1,200 without lifting a finger.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed, Bonded & Insured',
    description: 'All work performed by TECL-licensed master electricians. Fully bonded and insured for your peace of mind.',
  },
  {
    icon: Clock,
    title: 'Installed in Hours, Not Days',
    description: 'Most installs are complete in 1\u20133 hours. We respect your time and show up on schedule.',
  },
  {
    icon: MapPin,
    title: 'All Austin Metro Served',
    description: 'From South Congress to Round Rock, Cedar Park to Buda — if you\u2019re in the greater Austin area, we come to you.',
  },
];

export function Features() {
  return (
    <section id="why-us" className="py-24 lg:py-32 px-5 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5"
          >
            <span className="text-sm text-zinc-800 font-semibold">Why Voltmasters</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl lg:text-5xl text-zinc-950 tracking-tight mb-4"
          >
            We don&apos;t just install &mdash;<br />we handle <span className="text-accent" style={{ WebkitTextStroke: '2px #0a0a0a', color: '#FCD34D' }}>everything.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-500 leading-relaxed"
          >
            Charger, install, rebate &mdash; all in one. Here&apos;s what makes VoltMasters the easiest choice in Austin.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group bg-white border border-zinc-100 rounded-2xl p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <Icon className="w-5 h-5 text-white group-hover:text-zinc-950 transition-colors duration-300" />
                </div>
                <h3 className="text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
