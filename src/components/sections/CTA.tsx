import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="cta" className="relative bg-dark px-6 md:px-16 py-[100px] text-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-gold/5 to-transparent pointer-events-none" />
      <div className="absolute inset-10 border border-gold/12 pointer-events-none" />
      
      <div className="relative z-10">
        <p className="text-[0.65rem] tracking-[0.45em] uppercase text-gold mb-4">Begin Your Journey</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-normal text-warm-white leading-[1.15] mb-4">Reserve Your Golden Stay</h2>
        <p className="font-serif italic text-[1.3rem] text-text-light mb-12">Experience Damascus through the lens of luxury</p>
        
        <div className="flex flex-wrap justify-center gap-5">
           <a
            href="https://wa.me/963946900059"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-12 py-4.5 bg-gold text-dark font-sans font-normal text-[0.72rem] tracking-[0.3em] uppercase decoration-none transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5"
          >
            Book via WhatsApp
          </a>
          <a
            href="tel:+963119663"
            className="inline-flex items-center gap-2.5 px-12 py-4.5 border border-gold text-gold font-sans font-light text-[0.72rem] tracking-[0.3em] uppercase decoration-none transition-all duration-300 hover:bg-gold/8 hover:-translate-y-0.5"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
