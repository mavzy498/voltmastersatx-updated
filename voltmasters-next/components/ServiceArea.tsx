'use client';

import { motion } from 'motion/react';
import { MapPin, Phone } from 'lucide-react';

const areas = [
  'Austin (All Areas)',
  'Round Rock',
  'Cedar Park',
  'Georgetown',
  'Pflugerville',
  'Kyle',
  'Buda',
  'San Marcos',
  'Westlake Hills',
  'Rollingwood',
  'Lakeway',
  'Bee Cave',
  'Manor',
  'Hutto',
  'Liberty Hill',
  'Leander',
  'Dripping Springs',
  'Wimberley',
];

const AUSTIN_IMAGE = 'https://images.unsplash.com/photo-1494984652182-224bfe1b094e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdXN0aW4lMjBUZXhhcyUyMGNpdHklMjBza3lsaW5lJTIwYWVyaWFsfGVufDF8fHx8MTc3MjIyNTk4M3ww&ixlib=rb-4.1.0&q=80&w=1200';

export function ServiceArea() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={AUSTIN_IMAGE} alt="Austin Texas" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-zinc-950/88" />
      </div>

      <div className="relative z-10 py-24 lg:py-32 px-5 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6"
              >
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span className="text-sm text-accent font-semibold">Service Coverage</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="text-4xl lg:text-5xl text-white tracking-tight mb-5"
              >
                Serving all of Austin &amp; the surrounding metro.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-zinc-400 text-lg leading-relaxed mb-10"
              >
                Whether you&apos;re in a downtown high-rise, a Westlake estate, or a new build in Dripping Springs — we come to you. Fast scheduling, on-time arrivals, and clean installs guaranteed.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={scrollToForm}
                  className="bg-accent text-zinc-950 px-7 py-3.5 rounded-full text-sm font-bold hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/20"
                >
                  Check My Area →
                </button>
                <a
                  href="tel:+15125375145"
                  className="flex items-center justify-center gap-2 border border-zinc-700 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-white/5 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  (512) 537-5145
                </a>
              </motion.div>
            </div>

            {/* Right: Area list */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm"
            >
              <h3 className="text-white mb-6">Areas We Cover</h3>
              <div className="grid grid-cols-2 gap-3">
                {areas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.03 }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-zinc-300 text-sm font-medium">{area}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-800">
                <p className="text-zinc-500 text-xs">
                  Don&apos;t see your city? Call us — we may still be able to serve your area.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}