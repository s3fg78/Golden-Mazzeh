export default function Footer() {
  return (
    <footer className="bg-[#050503] border-t border-gold/10">
      <div className="px-6 md:px-16 py-15 grid md:grid-cols-3 gap-10 md:gap-20">
        <div>
          <div className="font-display text-[1.3rem] text-gold tracking-[0.2em] mb-4">
            GOLDEN <span className="text-cream">MAZZEH</span>
          </div>
          <p className="font-serif italic text-[1rem] text-text-light leading-[1.7]">
            A sanctuary of timeless elegance in the ancient heart of Damascus, Syria.
          </p>
        </div>

        <div>
          <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-5">Navigation</p>
          <ul className="list-none space-y-2.5">
            {['About', 'Rooms', 'Amenities', 'Location'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-[0.85rem] text-text-light hover:text-gold transition-colors duration-300 tracking-[0.05em] decoration-none">
                  {item === 'About' ? 'About the Hotel' : item === 'Rooms' ? 'Rooms & Suites' : item === 'Location' ? 'Location & Contact' : item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-5">Contact</p>
          <ul className="list-none space-y-2.5">
            <li>
              <a href="tel:+963119663" className="text-[0.85rem] text-text-light hover:text-gold transition-colors duration-300 tracking-[0.05em] decoration-none">
                +963 11 9663
              </a>
            </li>
            <li>
              <a href="https://wa.me/963946900059" target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-text-light hover:text-gold transition-colors duration-300 tracking-[0.05em] decoration-none">
                +963 946 900 059 (WhatsApp)
              </a>
            </li>
            <li>
              <span className="text-[0.85rem] text-text-light tracking-[0.05em]">
                Mazzeh, Damascus, Syria
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-6 md:px-16 py-6 bg-[#050503] border-t border-gold/5 flex flex-col md:flex-row justify-between items-center gap-3 text-center">
        <p className="text-[0.7rem] text-[#4A4030] tracking-[0.1em]">
          © 2026 Golden Mazzeh Hotel · Damascus, Syria · All Rights Reserved
        </p>
        <div className="flex items-center gap-2.5">
          <span className="w-7.5 h-[1px] bg-gold/20" />
          <div className="w-1 h-1 bg-gold/50 rotate-45" />
          <span className="w-7.5 h-[1px] bg-gold/20" />
        </div>
      </div>
    </footer>
  );
}
