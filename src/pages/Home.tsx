import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Ranking from '../components/Ranking';
import Schedule from '../components/Schedule';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Ranking />
      <Schedule />
      <Contact />
      <Footer />
    </main>
  );
}
