import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { ZeusLogo } from './ZeusLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Horarios', href: '#horarios' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Ranking', href: '#ranking' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-[#131313]/80 backdrop-blur-xl py-3 shadow-2xl' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo-zeus.png" 
            alt="Club Zeus Logo" 
            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(191,194,255,0.4)]"
          />
          <span className="text-2xl font-black tracking-tighter text-[#bfc2ff] italic font-['Space_Grotesk'] uppercase">
            Club Zeus
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-['Space_Grotesk'] font-bold tracking-tighter uppercase text-slate-400 hover:text-white transition-all duration-300 hover:scale-105 text-sm"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/register"
            className="kinetic-gradient text-[#181d8c] font-bold px-6 py-2 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest text-xs"
          >
            Únete
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#bfc2ff]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#131313] border-b border-[#bfc2ff]/10 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-['Space_Grotesk'] font-bold tracking-tighter uppercase text-slate-400 hover:text-white text-lg"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/register"
            onClick={() => setIsMobileMenuOpen(false)}
            className="kinetic-gradient text-[#181d8c] font-bold px-6 py-3 rounded-full text-center uppercase tracking-widest text-sm"
          >
            Únete
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
