import { motion } from 'motion/react';

const amenities = [
  { icon: '🍽', name: 'Fine Dining', sub: 'Syrian & International Cuisine' },
  { icon: '☕', name: 'Lobby Café', sub: 'Arabic Coffee & Pastries' },
  { icon: '🛎', name: 'Concierge', sub: '24-Hour Personal Service' },
  { icon: '🌿', name: 'Wellness Spa', sub: 'Traditional Hammam & Massages' },
  { icon: '🅿', name: 'Valet Parking', sub: 'Complimentary & Secure' },
  { icon: '📶', name: 'High-Speed Wi-Fi', sub: 'Throughout the Property' },
];

export default function Amenities() {
  return (
    <section id="amenities" className="relative bg-dark3 px-6 md:px-16 py-[120px] overflow-hidden">
      {/* Decorative radial gradient */}
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.04)_0%,transparent_70%)]" />

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-20 items-start relative z-10">
        <div>
          <p className="text-[0.65rem] tracking-[0.45em] uppercase text-gold mb-4">Hotel Facilities</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-normal text-warm-white leading-[1.15] mb-6">Every Detail, Perfected</h2>
          <p className="font-serif text-[1.25rem] leading-[1.8] text-text-light max-w-[560px] mb-6">
            From the first breath of jasmine at arrival to the last sip of Arabic coffee at dawn — we craft moments you will treasure forever.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 bg-gold/10 mt-6">
            {amenities.map((item, i) => (
              <motion.div
                key={i}
                className="bg-dark3 p-6 flex gap-3.5 items-start transition-colors duration-300 hover:bg-gold/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="text-[1.3rem] text-gold shrink-0">{item.icon}</div>
                <div>
                  <div className="font-serif text-[1rem] text-cream">{item.name}</div>
                  <div className="text-[0.65rem] tracking-[0.1em] text-text-light uppercase">{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
           className="relative p-[60px] border border-gold/20 bg-linear-to-br from-gold/5 to-transparent backdrop-blur-sm"
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <div className="font-serif text-[8rem] text-gold opacity-20 leading-[0.6] absolute top-10 left-10 pointer-events-none select-none">"</div>
          <p className="font-serif italic text-[1.55rem] leading-[1.7] text-cream relative z-10">
            Damascus is not merely a city — it is a living poem etched in stone and perfume.
            At Golden Mazzeh, we invite you to become part of its eternal story.
          </p>
          <p className="mt-6 text-[0.7rem] tracking-[0.25em] uppercase text-gold">
            — The Golden Mazzeh Experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}
