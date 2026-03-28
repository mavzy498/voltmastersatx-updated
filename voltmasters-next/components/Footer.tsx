import { Logo } from './Logo';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const PHONE = '(512) 537-5145';
const PHONE_HREF = 'tel:+15125375145';

const serviceAreas = [
  'Austin', 'Round Rock', 'Cedar Park', 'Georgetown',
  'Pflugerville', 'Kyle', 'Buda', 'Lakeway',
];

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo className="h-16 mb-5" variant="light" />
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
              Austin&apos;s premier EV charger installation company. High-end materials, expert electricians, and full Austin Energy rebate service — all in one.
            </p>

            <div className="space-y-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-accent" />
                </div>
                {PHONE}
              </a>
              <a
                href="mailto:info@voltmastersatx.com"
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-accent" />
                </div>
                info@voltmastersatx.com
              </a>
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                </div>
                Austin, TX &amp; surrounding metro
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center hover:border-zinc-600 hover:bg-zinc-800 transition-all">
                <Instagram className="w-4 h-4 text-zinc-400" />
              </a>
              <a href="#" className="w-9 h-9 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center hover:border-zinc-600 hover:bg-zinc-800 transition-all">
                <Facebook className="w-4 h-4 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-bold mb-5 uppercase tracking-widest">Services</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              {['Residential Level 2', 'Tesla Wall Connector', 'Commercial Installation', 'Panel Upgrades', 'Austin Energy Rebate', 'Site Assessment'].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white text-sm font-bold mb-5 uppercase tracking-widest">Service Areas</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-accent rounded-full" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6">
              {['TECL Licensed', 'Fully Bonded', 'Liability Insured', 'Austin Energy Approved'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-zinc-500 text-xs font-semibold">{badge}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} Voltmasters ATX ·{' '}
              <a href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy</a>
              {' · '}
              <a href="/terms" className="hover:text-zinc-400 transition-colors">Terms</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
