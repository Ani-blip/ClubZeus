import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-[#1b1c1c] relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 relative group"
        >
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#bfc2ff]/20 rounded-xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
          <img
            src="https://images.unsplash.com/photo-1611067227653-c0d695a00228?q=80&w=1000&auto=format&fit=crop"
            className="rounded-xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700 w-full h-[500px] object-cover"
            alt="Training Facility"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 space-y-8"
        >
          <h2 className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl italic tracking-tighter uppercase">
            ALTO RENDIMIENTO EN <br />
            <span className="text-[#bfc2ff]">QUINTA NORMAL</span>
          </h2>
          <div className="h-1 w-24 kinetic-gradient" />
          <div className="font-['Inter'] text-lg text-slate-400 leading-relaxed space-y-4">
            <p>
              Ubicados en el corazón de Quinta Normal, Santiago, Club Zeus es el epicentro de la precisión y la técnica.
              Nuestra misión es elevar el nivel del tenis de mesa nacional a través de una metodología rigurosa y un
              ambiente competitivo de élite.
            </p>
            <p>
              Ofrecemos un enfoque integral con clases grupales e individuales diseñadas para todos los niveles, desde
              principiantes entusiastas hasta atletas de alta competencia que buscan perfeccionar cada golpe.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <span className="font-['Space_Grotesk'] font-black text-4xl text-[#bfc2ff]">15+</span>
              <p className="font-['Lexend'] text-sm uppercase tracking-widest text-[#908f9e]">Mesas Profesionales</p>
            </div>
            <div>
              <span className="font-['Space_Grotesk'] font-black text-4xl text-[#bfc2ff]">100+</span>
              <p className="font-['Lexend'] text-sm uppercase tracking-widest text-[#908f9e]">Atletas Activos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
