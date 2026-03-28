'use client';

import { motion } from 'motion/react';
import { MessageSquare, DollarSign, FileCheck, BatteryCharging } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Free Quote in Minutes',
    description: 'Answer a few quick questions and get a clear, all-in price — no surprises.',
  },
  {
    icon: DollarSign,
    step: '02',
    title: 'All-In Pricing',
    description: 'Charger, installation, and materials — one transparent price, nothing hidden.',
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'We Handle the Rebate',
    description: 'We file your Austin Energy rebate paperwork so you get up to $1,200 back.',
  },
  {
    icon: BatteryCharging,
    step: '04',
    title: 'You Enjoy Charging at Home',
    description: 'Installed in as little as 1\u20133 hours. Plug in and never visit a charging station again.',
  },
];

export function ProcessSteps() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5"
          >
            <span className="text-sm text-zinc-800 font-semibold">Why VoltMasters?</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl lg:text-5xl text-zinc-950 tracking-tight mb-4"
          >
            End-to-end service.<br />Quote to charger, done.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg leading-relaxed"
          >
            From free quote to installed charger in as little as 1&ndash;3 hours. We take everything off your plate.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group text-center"
            >
              {/* Icon circle */}
              <div className="relative inline-flex mb-8">
                <div className="w-28 h-28 bg-zinc-50 border-2 border-zinc-200 rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-zinc-400 group-hover:text-zinc-800 transition-colors duration-300" />
                </div>
                {/* Step number badge */}
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-zinc-950 group-hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-xs font-black text-white group-hover:text-zinc-950 transition-colors duration-300">{index + 1}</span>
                </div>
              </div>

              <h3 className="text-zinc-900 mb-3 px-2">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed px-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
