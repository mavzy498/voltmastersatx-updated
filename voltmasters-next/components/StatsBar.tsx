'use client';

import { motion } from 'motion/react';

const stats = [
  { value: '500+', label: 'Installs Completed' },
  { value: '5.0★', label: 'Average Rating' },
  { value: '$1,200', label: 'Max Rebate We Secure' },
  { value: '48hr', label: 'Avg. Turnaround' },
];

export function StatsBar() {
  return (
    <section className="bg-zinc-950 py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 rounded-2xl overflow-hidden">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-zinc-950 px-8 py-8 text-center"
            >
              <div className="text-3xl lg:text-4xl font-black text-accent mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
