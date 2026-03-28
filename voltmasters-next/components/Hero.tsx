'use client';

import Image from 'next/image';
import { Phone, ChevronDown, ShieldCheck, Star, Zap } from 'lucide-react';

const PHONE = '(512) 537-5145';
const PHONE_HREF = 'tel:+15125375145';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1692052626528-cb97a934a63b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFViUyMGVsZWN0cmljJTIwdmVoaWNsZSUyMGNoYXJnZXIlMjBob21lJTIwZ2FyYWdlJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3MjIyNTk3OXww&ixlib=rb-4.1.0&q=80&w=1920';

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt="EV charger installation Austin Texas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 w-full pt-28 pb-20 lg:pt-36 lg:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-1.5 mb-7">
              <Zap className="w-3.5 h-3.5 text-accent fill-accent" />
              <span className="text-sm text-accent font-semibold tracking-wide">Austin&apos;s #1 EV Charger Installer</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[80px] text-white leading-[1.0] tracking-tight mb-6 font-black">
              Power Up Your
              <br />
              <span className="text-accent">EV</span> The Right Way.
            </h1>

            <p className="text-lg lg:text-xl text-zinc-300 mb-10 max-w-xl leading-relaxed">
              End-to-end EV charger installation across Austin. Charger, install, and{' '}
              <strong className="text-white">Austin Energy rebate filing</strong> — all included.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToForm}
                className="bg-accent text-black px-8 py-4 rounded-full text-base font-bold hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg shadow-accent/20"
              >
                Get My Free Quote →
              </button>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { icon: ShieldCheck, label: 'Licensed & Insured' },
                { icon: Star, label: '5-Star Rated' },
                { icon: Zap, label: 'Austin Energy Approved' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-accent" />
                  <span className="text-sm text-zinc-300 font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-1 text-white/40 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
