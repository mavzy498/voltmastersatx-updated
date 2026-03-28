'use client';

import { motion } from 'motion/react';

const CHARGER_IMAGE = 'https://images.unsplash.com/photo-1765272088009-100c96a4cd4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMGNoYXJnaW5nJTIwc3RhdGlvbiUyMG1vZGVybiUyMGhvbWV8ZW58MXx8fHwxNzcyMTIxNDk0fDA&ixlib=rb-4.1.0&q=80&w=1080';

const services = [
  {
    number: '01',
    title: 'Residential Level 2 Installation',
    description: 'The most popular upgrade for homeowners. A Level 2 charger adds 25–30 miles of range per hour — meaning you wake up every morning to a full battery. We handle wiring, mounting, and city permits.',
  },
  {
    number: '02',
    title: 'Tesla Wall Connector',
    description: 'Optimized for Tesla vehicles, the Wall Connector delivers up to 44 miles of range per hour. We are experienced Tesla-certified installers and know exactly how to maximize your setup.',
  },
  {
    number: '03',
    title: 'Panel Upgrades & Sub-Panels',
    description: 'Older homes often need an electrical panel upgrade before adding a 240V circuit. Our licensed master electricians handle everything from 100A to 200A+ upgrades.',
  },
  {
    number: '04',
    title: 'Commercial & Multi-Unit',
    description: 'Charging stations for businesses, apartment complexes, HOAs, and commercial properties. We design, permit, and install multi-port systems that scale with your needs.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 px-5 lg:px-8 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="text-sm text-zinc-800 font-semibold">Our Services</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl lg:text-5xl text-zinc-950 tracking-tight mb-5"
            >
              Every type of EV charging, covered.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-500 leading-relaxed mb-8"
            >
              From a single-family home to a commercial parking lot, we design and install the right charging solution for your situation.
            </motion.p>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
            >
              <img
                src={CHARGER_IMAGE}
                alt="EV charger installation service"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Service list */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-zinc-100 rounded-2xl p-8 hover:border-accent/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <span className="text-xs font-black text-accent/60 tracking-widest uppercase mt-1 flex-shrink-0">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="text-zinc-900 mb-2.5 group-hover:text-zinc-950 transition-colors">{service.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
