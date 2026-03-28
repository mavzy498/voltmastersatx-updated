'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How much does EV charger installation cost in Austin?',
    answer: 'Most standard Level 2 installations range from $1,400\u2013$2,200 all-in \u2014 that includes the charger, labor, and materials. After the Austin Energy rebate (up to $1,200), many customers pay under $1,000. We provide free, all-in quotes with no surprises.',
  },
  {
    question: 'What is the Austin Energy EV charger rebate?',
    answer: 'Austin Energy offers up to $1,200 back on the purchase and installation of a Wi-Fi enabled Level 2 charger. We file your rebate application after install \u2014 you receive a check within 6\u20138 weeks. You don\u2019t have to do anything.',
  },
  {
    question: 'Do you include the charger in the price?',
    answer: 'Yes. We include a Tesla Wall Connector as the default since it\u2019s the most popular. If you prefer a different brand (ChargePoint, JuiceBox, Wallbox, etc.), we\u2019ll recommend the best option for your car and include it in the all-in price.',
  },
  {
    question: 'Does my electrical panel need to be upgraded?',
    answer: 'Many homes can handle a Level 2 charger without upgrades. If you\u2019re not sure, just send us a photo of your panel when you request a quote \u2014 we\u2019ll let you know right away.',
  },
  {
    question: 'How long does the installation take?',
    answer: 'Most installs are complete in 1\u20133 hours. Larger jobs that require additional wiring runs or panel work may take longer \u2014 we\u2019ll give you a clear time estimate upfront.',
  },
  {
    question: 'Do you serve areas outside of Austin?',
    answer: 'Yes \u2014 we serve the full Austin metro including Round Rock, Cedar Park, Georgetown, Pflugerville, Kyle, Buda, Lakeway, and more. If you\u2019re within about 40 miles of downtown Austin, we can help.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. All work is performed by TECL-licensed master electricians. We\u2019re fully bonded and carry general liability insurance.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white border-t border-zinc-100">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5"
          >
            <span className="text-sm text-zinc-800 font-semibold">FAQ</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl lg:text-5xl text-zinc-950 tracking-tight mb-4"
          >
            Questions? Answered.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg"
          >
            Everything you need to know before booking your installation.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-accent/40 shadow-sm' : 'border-zinc-100 hover:border-zinc-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-zinc-50/50 transition-colors"
              >
                <span className="text-zinc-900 font-semibold pr-8 text-[15px] leading-snug">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-accent' : 'bg-zinc-100'
                }`}>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180 text-zinc-950' : 'text-zinc-500'
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed border-t border-zinc-100">
                      <div className="pt-4">{faq.answer}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
