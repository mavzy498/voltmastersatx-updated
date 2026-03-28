'use client';

import { motion } from 'motion/react';

const brands = [
  'Tesla',
  'ChargePoint',
  'Wallbox',
  'JuiceBox',
  'Enel X',
  'Grizzl-E',
  'Electrify America',
  'Blink',
  'ClipperCreek',
  'Siemens',
  'Rivian',
  'Ford',
  'Chevrolet',
  'BMW',
  'Porsche',
];

export function BrandsSupported() {
  return (
    <section className="py-14 bg-zinc-50 border-y border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
          We install & support all major EV brands and chargers
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee whitespace-nowrap flex gap-14 items-center">
          {brands.concat(brands).map((brand, index) => (
            <span
              key={index}
              className="text-xl lg:text-2xl font-black text-zinc-200 hover:text-zinc-700 transition-colors duration-300 cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-14 items-center">
          {brands.concat(brands).map((brand, index) => (
            <span
              key={`clone-${index}`}
              className="text-xl lg:text-2xl font-black text-zinc-200 hover:text-zinc-700 transition-colors duration-300 cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 35s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}
