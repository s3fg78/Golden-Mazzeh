import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="bg-dark2 px-6 md:px-16 py-[120px] grid md:grid-cols-2 gap-20 items-center">
      <div className="relative h-[400px] md:h-[560px]">
        <div className="absolute inset-0 bg-linear-to-br from-[#1A1508] via-[#2A2010] to-[#1A1508] border border-gold/20 overflow-hidden">
          <div className="absolute inset-5 border border-gold/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[70%] h-[70%] text-gold opacity-15">
              <g stroke="currentColor" strokeWidth="0.8" fill="none">
                <circle cx="150" cy="150" r="130" />
                <circle cx="150" cy="150" r="90" />
                <circle cx="150" cy="150" r="50" />
                <polygon points="150,20 270,245 30,245" />
                <polygon points="150,280 30,55 270,55" />
                <line x1="150" y1="20" x2="150" y2="280" />
                <line x1="20" y1="150" x2="280" y2="150" />
                <line x1="50" y1="50" x2="250" y2="250" />
                <line x1="250" y1="50" x2="50" y2="250" />
                <rect x="130" y="130" width="40" height="40" transform="rotate(45 150 150)" />
                <rect x="110" y="110" width="80" height="80" transform="rotate(45 150 150)" />
              </g>
              <text x="150" y="158" textAnchor="middle" className="font-display text-2xl fill-current opacity-60">فندق</text>
              <text x="150" y="180" textAnchor="middle" className="font-display text-[11px] fill-current opacity-40 tracking-[3px]">GOLDEN MAZZEH</text>
            </svg>
          </div>
        </div>
        <div className="absolute -bottom-6 -right-6 w-[150px] h-[150px] md:w-[200px] md:h-[200px] border border-gold/25 hidden md:block">
           <div className="absolute inset-4 border border-gold/15" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[0.65rem] tracking-[0.45em] uppercase text-gold mb-4">Our Story</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-normal text-warm-white leading-[1.15] mb-6">A Crown Jewel in the Heart of Damascus</h2>
        <p className="font-serif text-[1.25rem] leading-[1.8] text-text-light max-w-[560px] mb-12">
          Nestled in the prestigious Mazzeh district, Golden Mazzeh Hotel is a sanctuary of refined elegance
          and warm Syrian hospitality. Every corner whispers the timeless charm of Damascus — a city
          where ancient grandeur and modern comfort intertwine seamlessly.
        </p>

        <div className="grid grid-cols-2 gap-px bg-gold/15 mt-12">
          {[
            { label: 'Star Excellence', value: '★ 4.5' },
            { label: 'Concierge Service', value: '24/7' },
            { label: 'Guest Satisfaction', value: '100%' },
            { label: 'Lasting Memories', value: '∞' },
          ].map((stat, i) => (
            <div key={i} className="bg-dark2 p-7 md:p-8">
              <div className="font-display text-[2.5rem] text-gold leading-none mb-2">{stat.value}</div>
              <div className="text-[0.7rem] tracking-[0.2em] uppercase text-text-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
