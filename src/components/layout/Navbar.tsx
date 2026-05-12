import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-7 flex justify-between items-center transition-all duration-400 ${
        isScrolled
          ? 'bg-dark/95 backdrop-blur-xl py-4.5 border-b border-gold/15'
          : 'bg-linear-to-b from-dark/95 to-transparent'
      }`}
    >
      <a href="#hero" className="font-display text-lg tracking-[0.25em] text-gold uppercase decoration-none">
        GOLDEN <span className="text-cream">MAZZEH</span>
      </a>

      <ul className="hidden md:flex gap-10 list-none">
        {['About', 'Rooms', 'Amenities', 'Location'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="relative font-sans font-light text-[0.75rem] tracking-[0.2em] uppercase text-text-light hover:text-gold transition-colors duration-300 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://wa.me/963946900059"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-light text-[0.75rem] tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors duration-300"
          >
            Book Now
          </a>
        </li>
      </ul>

      {/* Mobile Menu Placeholder - could be expanded if needed */}
      <div className="md:hidden text-gold">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </div>
    </nav>
  );
}
