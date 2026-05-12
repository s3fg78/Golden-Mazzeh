import { motion } from 'motion/react';

const rooms = [
  {
    number: '01',
    icon: '🌙',
    name: 'Classic Room',
    desc: 'Thoughtfully designed for the discerning traveller, blending comfort with Damascene artistry and all essential amenities.',
    features: ['King Bed', 'City View', 'Wi-Fi']
  },
  {
    number: '02',
    icon: '✦',
    name: 'Deluxe Room',
    desc: 'An elevated retreat featuring premium furnishings, panoramic views, and a palette of gold and ivory tones inspired by the ancient city.',
    features: ['King Bed', 'Panoramic View', 'Mini Bar']
  },
  {
    number: '03',
    icon: '♔',
    name: 'Golden Suite',
    desc: 'The pinnacle of luxury — a sprawling suite adorned with hand-crafted details, a private lounge, and unrivalled views over Damascus.',
    features: ['Living Area', 'Butler Service', 'Jacuzzi']
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="bg-dark px-6 md:px-16 py-[120px]">
      <div className="text-center mb-[70px]">
        <p className="text-[0.65rem] tracking-[0.45em] uppercase text-gold mb-4">Accommodations</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-normal text-warm-white leading-[1.15]">Rooms &amp; Suites</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-0.5 bg-gold/10">
        {rooms.map((room, i) => (
          <motion.div
            key={i}
            className="group relative bg-dark2 p-12 overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
          >
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-linear-to-br from-gold/5 transition-opacity duration-400 opacity-0 group-hover:opacity-100" />
            
            <div className="relative z-10">
              <div className="absolute top-[-24px] right-[-10px] font-display text-[4rem] text-gold/5 leading-none pointer-events-none">
                {room.number}
              </div>
              <div className="w-14 h-14 border border-gold/30 flex items-center justify-center mb-7 text-gold text-[1.4rem]">
                {room.icon}
              </div>
              <h3 className="font-display text-[1.2rem] text-warm-white mb-3">{room.name}</h3>
              <p className="font-serif text-[1.05rem] leading-[1.7] text-text-light mb-7">{room.desc}</p>
              <div className="flex flex-wrap gap-2">
                {room.features.map((feature, idx) => (
                  <span key={idx} className="text-[0.62rem] tracking-[0.15em] uppercase text-gold border border-gold/30 px-3 py-1.5">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
