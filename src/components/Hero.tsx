import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ZeusLogo } from './ZeusLogo';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#131313]/80 to-[#131313] z-10" />
        <img
          src="https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=2000&auto=format&fit=crop"
          className="w-full h-full object-cover grayscale opacity-40 scale-110"
          alt="Table Tennis Action"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center md:text-left grid md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="font-['Space_Grotesk'] font-black italic text-6xl md:text-8xl leading-none tracking-tighter uppercase text-[#e5e2e1]">
            CLUB ZEUS <br />
            <span className="text-[#bfc2ff] drop-shadow-[0_0_15px_rgba(191,194,255,0.3)]">TENIS DE MESA</span>
          </h1>
          <p className="font-['Inter'] text-xl md:text-2xl text-slate-400 max-w-xl font-light">
            Energía, Precisión y Poder. Domina la arena en el club más prestigioso de Quinta Normal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/register" className="kinetic-gradient text-center text-[#181d8c] font-['Lexend'] font-bold px-10 py-4 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest text-sm shadow-xl shadow-[#bfc2ff]/20">
              Únete hoy
            </Link>
            <button className="bg-[#353535]/20 border border-[#464653]/30 text-[#e5e2e1] font-['Lexend'] font-bold px-10 py-4 rounded-full hover:bg-[#353535]/40 transition-all duration-300 uppercase tracking-widest text-sm backdrop-blur-sm">
              Ver Sedes
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block relative"
        >
          <div className="absolute -inset-4 bg-[#bfc2ff]/10 blur-3xl rounded-full" />
          <div className="relative z-10 w-full aspect-square rounded-tl-[100px] rounded-br-[100px] shadow-2xl border border-[#bfc2ff]/20 bg-[#1b1c1c]/30 p-12 flex items-center justify-center overflow-hidden">
             {/* High quality logo placeholder */}
             <img 
               src="/logo-zeus.png" 
               alt="Club Zeus Logo" 
               className="w-48 h-48 object-contain animate-pulse drop-shadow-[0_0_20px_rgba(191,194,255,0.4)]"
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
