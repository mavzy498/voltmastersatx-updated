'use client';

import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Travis Heights, Austin',
    vehicle: 'Tesla Model Y owner',
    text: 'Voltmasters handled my Tesla Wall Connector installation flawlessly. They even filed the Austin Energy rebate for me, which saved me $1,200 without any effort on my part. Total pros.',
    rating: 5,
  },
  {
    name: 'James D.',
    location: 'Circle C Ranch, Austin',
    vehicle: 'Ford F-150 Lightning owner',
    text: 'Professional, clean, and fast. The conduit work in my garage looks incredibly neat — you\'d never know it wasn\'t part of the original construction. Highly recommend for any EV owner in Austin.',
    rating: 5,
  },
  {
    name: 'Emily R.',
    location: 'Westlake, Austin',
    vehicle: 'Rivian R1T owner',
    text: 'Best experience I\'ve had with any home service company. They explained everything upfront, showed up exactly when they said, and the price matched the quote to the dollar.',
    rating: 5,
  },
  {
    name: 'Marcus T.',
    location: 'Cedar Park, TX',
    vehicle: 'Chevy Bolt owner',
    text: 'I was nervous about the panel upgrade but the team made it completely painless. They handled the city permit and inspection, and I woke up the next day with a fully charged car for the first time.',
    rating: 5,
  },
  {
    name: 'Priya K.',
    location: 'South Congress, Austin',
    vehicle: 'BMW i4 owner',
    text: 'I got three quotes and Voltmasters was the most transparent about what was included. No hidden fees, no upsells. Just clean work and a rebate check in the mail 6 weeks later.',
    rating: 5,
  },
  {
    name: 'David L.',
    location: 'Lakeway, TX',
    vehicle: 'Porsche Taycan owner',
    text: 'Extremely clean install in my garage. The crew was in and out in under 3 hours and walked me through the charger setup before leaving. 10/10 would absolutely use again.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5"
          >
            <span className="text-sm text-zinc-800 font-semibold">Customer Reviews</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl lg:text-5xl text-zinc-950 tracking-tight mb-4"
          >
            Austin homeowners<br />trust Voltmasters.
          </motion.h2>
          {/* Star display */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-zinc-600 font-semibold text-sm">5.0 · 100+ Google Reviews</span>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="bg-white border border-zinc-100 p-8 rounded-2xl hover:border-accent/30 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex text-accent mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-zinc-700 text-sm leading-relaxed mb-6 flex-1">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <div className="w-10 h-10 bg-zinc-950 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent text-sm font-black">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-zinc-900 text-sm">{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.location} · {t.vehicle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}