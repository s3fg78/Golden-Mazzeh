import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Rooms from './components/sections/Rooms';
import Amenities from './components/sections/Amenities';
import Location from './components/sections/Location';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="relative selection:bg-gold selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Location />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
