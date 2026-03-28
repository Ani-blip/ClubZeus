import { Instagram, Twitter, Facebook } from 'lucide-react';
import { ZeusLogo } from './ZeusLogo';

export default function Footer() {
  return (
    <footer className="bg-[#131313] w-full py-12 border-t border-[#2a2a2a]">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
        <div className="flex items-center gap-3">
          {/* High quality logo placeholder */}
          <img 
            src="/logo-zeus.png" 
            alt="Club Zeus Logo" 
            className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(191,194,255,0.4)]"
          />
          <div className="flex flex-col">
            <span className="font-['Space_Grotesk'] font-bold text-[#bfc2ff] text-2xl italic uppercase tracking-tighter">
              Club Zeus
            </span>
            <p className="font-['Inter'] text-sm text-slate-500">
              © 2026 Club Zeus Tenis de Mesa. Kinetic Precision.
            </p>
          </div>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-slate-500 hover:text-[#bfc2ff] transition-colors opacity-80 hover:opacity-100 font-['Inter'] text-sm">
            Privacidad
          </a>
          <a href="#" className="text-slate-500 hover:text-[#bfc2ff] transition-colors opacity-80 hover:opacity-100 font-['Inter'] text-sm">
            Términos
          </a>
          <a href="#" className="text-slate-500 hover:text-[#bfc2ff] transition-colors opacity-80 hover:opacity-100 font-['Inter'] text-sm">
            Soporte
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="https://instagram.com/clubzeus.tdm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-slate-400 hover:text-[#bfc2ff] transition-all hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>
          {[Twitter, Facebook].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-slate-400 hover:text-[#bfc2ff] transition-all hover:scale-110"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
