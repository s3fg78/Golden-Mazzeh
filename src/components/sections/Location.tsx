import { motion } from 'motion/react';

export default function Location() {
  return (
    <section id="location" className="bg-dark2 grid md:grid-cols-2 p-0">
      <div className="px-6 md:px-16 py-[100px] flex flex-col justify-center">
        <p className="text-[0.65rem] tracking-[0.45em] uppercase text-gold mb-4">Find Us</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-normal text-warm-white leading-[1.15] mb-6">In the Heart of Mazzeh, Damascus</h2>
        <p className="font-serif text-[1.25rem] leading-[1.8] text-text-light max-w-[560px] mb-12">
          Conveniently situated in one of Damascus' most prestigious districts, within easy reach of major landmarks, embassies, and cultural treasures.
        </p>

        <div className="flex flex-col gap-0.5 bg-gold/10 mt-12 overflow-hidden">
          {[
            { 
               icon: '📍', 
               label: 'Address', 
               value: 'F6WW+3PH, Mazzeh, Damascus, Syria',
               href: 'https://maps.google.com/?q=F6WW%2B3PH+Damascus+Syria' 
            },
            { 
               icon: '📞', 
               label: 'Telephone', 
               value: '+963 11 9663',
               href: 'tel:+963119663' 
            },
            { 
               icon: '💬', 
               label: 'WhatsApp Reservations', 
               value: '+963 946 900 059',
               href: 'https://wa.me/963946900059' 
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark2 p-5 flex items-center gap-4 decoration-none transition-colors duration-300 hover:bg-gold/5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold text-base shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-[0.6rem] tracking-[0.2em] uppercase text-text-light mb-1">{item.label}</div>
                <div className="font-serif text-[1.1rem] text-cream">{item.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="relative min-h-[500px] bg-dark3 overflow-hidden">
        <iframe
          src="https://www.google.com/maps?q=F6WW%2B3PH%D8%8C+%D8%AF%D9%85%D8%B4%D9%82%D8%8C+%D8%B3%D9%88%D8%B1%D9%8A%D8%A7&output=embed"
          className="w-full h-full border-none grayscale-[80%] sepia-[30%] contrast-[1.1] opacity-85"
          allowFullScreen
          loading="lazy"
          title="Golden Mazzeh Hotel Location"
        />
        <div className="absolute inset-0 bg-linear-to-r from-dark2/30 via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
