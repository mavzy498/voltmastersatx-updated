'use client';

import { motion } from 'motion/react';

const galleryItems = [
  {
    img: 'https://images.unsplash.com/photo-1670332361736-62045cce7a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUZXNsYSUyMGVsZWN0cmljJTIwdmVoaWNsZSUyMGNoYXJnaW5nJTIwd2FsbCUyMGNvbm5lY3RvcnxlbnwxfHx8fDE3NzIyMjU5ODB8MA&ixlib=rb-4.1.0&q=80&w=800',
    label: 'Tesla Wall Connector — Westlake',
    tag: 'Residential',
  },
  {
    img: 'https://images.unsplash.com/photo-1692052626528-cb97a934a63b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFViUyMGVsZWN0cmljJTIwdmVoaWNsZSUyMGNoYXJnZXIlMjBob21lJTIwZ2FyYWdlJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3MjIyNTk3OXww&ixlib=rb-4.1.0&q=80&w=800',
    label: 'Level 2 Install — Circle C Ranch',
    tag: 'Residential',
  },
  {
    img: 'https://images.unsplash.com/photo-1467733238130-bb6846885316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHByb2Zlc3Npb25hbCUyMHdvcmtpbmclMjBlbGVjdHJpY2FsJTIwcGFuZWx8ZW58MXx8fHwxNzcyMjI1OTgzfDA&ixlib=rb-4.1.0&q=80&w=800',
    label: 'Panel Upgrade — South Austin',
    tag: 'Panel Upgrade',
  },
  {
    img: 'https://images.unsplash.com/photo-1765272088009-100c96a4cd4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMGNoYXJnaW5nJTIwc3RhdGlvbiUyMG1vZGVybiUyMGhvbWV8ZW58MXx8fHwxNzcyMTIxNDk0fDA&ixlib=rb-4.1.0&q=80&w=800',
    label: 'ChargePoint Home — Travis Heights',
    tag: 'Residential',
  },
  {
    img: 'https://images.unsplash.com/photo-1715163793418-0e3f2181b241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob21lJTIwZ2FyYWdlJTIwY2xlYW4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIyMjU5ODR8MA&ixlib=rb-4.1.0&q=80&w=800',
    label: 'Luxury Garage Setup — Rollingwood',
    tag: 'Premium',
  },
  {
    img: 'https://images.unsplash.com/photo-1494984652182-224bfe1b094e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdXN0aW4lMjBUZXhhcyUyMGNpdHklMjBza3lsaW5lJTIwYWVyaWFsfGVufDF8fHx8MTc3MjIyNTk4M3ww&ixlib=rb-4.1.0&q=80&w=800',
    label: 'Downtown Austin — Commercial Multi-Port',
    tag: 'Commercial',
  },
];

export function WorkGallery() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 lg:py-32 px-5 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="text-sm text-zinc-800 font-semibold">Our Work</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl lg:text-5xl text-zinc-950 tracking-tight"
            >
              Clean installs.<br />Every time.
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={scrollToForm}
            className="flex-shrink-0 bg-zinc-950 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-all hover:scale-105"
          >
            Get a Quote →
          </motion.button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-zinc-100">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="bg-accent text-zinc-950 text-xs font-bold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-white text-sm font-semibold">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
