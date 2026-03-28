'use client';

import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, Menu, X } from 'lucide-react';

const PHONE = '(512) 537-5145';
const PHONE_HREF = 'tel:+15125375145';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Rebate', href: '#rebate' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-[80px]">
            <Logo className="h-16" variant={scrolled ? 'dark' : 'light'} />

            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    scrolled ? 'text-zinc-600 hover:text-zinc-900' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={PHONE_HREF}
                className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                  scrolled ? 'text-zinc-800' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
              <button
                onClick={scrollToForm}
                className="bg-accent text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-all hover:scale-105 shadow-md"
              >
                Free Quote
              </button>
            </div>

            <div className="lg:hidden flex items-center gap-3">
              <a
                href={PHONE_HREF}
                className={`flex items-center gap-1.5 text-sm font-semibold ${
                  scrolled ? 'text-zinc-800' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled ? 'text-zinc-800 hover:bg-zinc-100' : 'text-white hover:bg-white/10'
                }`}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-zinc-100 shadow-xl">
            <div className="max-w-7xl mx-auto px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-4 text-sm font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 pb-1">
                <button
                  onClick={scrollToForm}
                  className="w-full bg-accent text-black py-3 rounded-xl text-sm font-semibold hover:bg-yellow-400 transition-all"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-zinc-950 border-t border-zinc-800 px-4 py-3 flex gap-3">
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-white py-3 rounded-xl text-sm font-semibold hover:bg-zinc-700 transition-colors"
        >
          <Phone className="w-4 h-4" />
          {PHONE}
        </a>
        <button
          onClick={scrollToForm}
          className="flex-1 bg-accent text-black py-3 rounded-xl text-sm font-semibold hover:bg-yellow-400 transition-all"
        >
          Free Quote
        </button>
      </div>
    </>
  );
}
