import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,168,76,0.08)_0%,transparent_60%),radial-gradient(ellipse_50%_80%_at_80%_20%,rgba(201,168,76,0.05)_0%,transparent_50%),linear-gradient(160deg,#0F0D08_0%,#1A1508_40%,#0B0A07_100%)]" />

      {/* Geometric ornament */}
      <motion.div
        className="absolute w-[700px] h-[700px] top-1/2 left-1/2 pointer-events-none opacity-10"
        initial={{ rotate: 0, x: '-50%', y: '-50%' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="198" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="160" stroke="#C9A84C" strokeWidth="0.3" />
          <circle cx="200" cy="200" r="120" stroke="#C9A84C" strokeWidth="0.3" />
          <polygon points="200,10 390,300 10,300" stroke="#C9A84C" strokeWidth="0.4" fill="none" />
          <polygon points="200,390 10,100 390,100" stroke="#C9A84C" strokeWidth="0.4" fill="none" />
          <polygon points="200,50 350,275 50,275" stroke="#C9A84C" strokeWidth="0.3" fill="none" />
          <polygon points="200,350 50,125 350,125" stroke="#C9A84C" strokeWidth="0.3" fill="none" />
          <line x1="200" y1="2" x2="200" y2="398" stroke="#C9A84C" strokeWidth="0.2" />
          <line x1="2" y1="200" x2="398" y2="200" stroke="#C9A84C" strokeWidth="0.2" />
          <rect x="185" y="185" width="30" height="30" stroke="#C9A84C" strokeWidth="0.5" transform="rotate(45 200 200)" />
          <rect x="165" y="165" width="70" height="70" stroke="#C9A84C" strokeWidth="0.3" transform="rotate(45 200 200)" />
        </svg>
      </motion.div>

      {/* Arabesque border lines */}
      <div className="absolute inset-[60px] border border-gold/15 pointer-events-none">
        <div className="absolute top-[-1px] left-[10%] right-[10%] h-[1px] bg-linear-to-r from-transparent via-gold to-transparent" />
        <div className="absolute bottom-[-1px] left-[10%] right-[10%] h-[1px] bg-linear-to-r from-transparent via-gold to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.p
          className="font-sans font-light text-[0.7rem] tracking-[0.45em] uppercase text-gold mb-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Damascus · Syria · Est. Excellence
        </motion.p>
        <motion.h1
          className="font-display text-[clamp(3.5rem,8vw,7rem)] font-normal leading-none tracking-[0.1em] text-warm-white mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <span className="text-gold">Golden</span><br />Mazzeh
        </motion.h1>
        <motion.p
          className="font-serif italic text-[clamp(1.4rem,3vw,2.2rem)] text-gold-pale tracking-[0.08em] mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          Where Luxury Meets Damascene Soul
        </motion.p>

        <motion.div
           className="flex items-center justify-center gap-4 mb-12"
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, delay: 0.9 }}
        >
          <span className="w-15 h-[1px] bg-linear-to-r from-transparent to-gold" />
          <div className="w-2 h-2 bg-gold rotate-45" />
          <span className="w-15 h-[1px] bg-linear-to-l from-transparent to-gold" />
        </motion.div>

        <motion.a
          href="https://wa.me/963946900059"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-3 px-11 py-4.5 border border-gold font-sans font-light text-[0.72rem] tracking-[0.3em] uppercase text-gold decoration-none group overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1 }}
        >
          <span className="absolute inset-0 bg-gold translate-x-[-100%] transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0" />
          <span className="relative z-10 transition-colors duration-400 group-hover:text-dark">Reserve Your Stay</span>
        </motion.a>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-text-light">Discover</p>
        <motion.div
          className="w-[1px] h-[50px] bg-linear-to-b from-gold to-transparent"
          animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
