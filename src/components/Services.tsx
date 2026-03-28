import { Users, Trophy, Table } from 'lucide-react';

const services = [
  {
    title: 'Entrenamiento Grupal',
    description: 'Sesiones dinámicas para adultos y niños. Fomentamos la competitividad sana y el aprendizaje acelerado en equipo.',
    icon: Users,
    features: ['Niveles: Inicial / Intermedio', 'Preparación física específica'],
    bg: 'bg-[#2a2a2a]',
  },
  {
    title: 'Clases Individuales',
    description: 'Técnica avanzada personalizada. Un coach dedicado exclusivamente a corregir tu postura, efecto y estrategia.',
    icon: Trophy,
    features: ['Análisis de video', 'Perfeccionamiento de servicios'],
    bg: 'bg-[#353535]',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#131313]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-4">
            <span className="font-['Lexend'] text-[#bfc2ff] uppercase tracking-[0.3em] text-sm font-bold">Entrenamiento</span>
            <h2 className="font-['Space_Grotesk'] font-bold text-5xl italic tracking-tighter uppercase">NUESTROS SERVICIOS</h2>
          </div>
          <p className="font-['Inter'] text-slate-400 max-w-sm text-right">
            Programas diseñados para potenciar tus reflejos, agilidad y mentalidad ganadora.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group ${service.bg} p-8 rounded-tl-3xl rounded-br-none border-b-4 border-transparent hover:border-[#bfc2ff] transition-all duration-500 hover:-translate-y-2`}
            >
              <div className="w-16 h-16 rounded-full bg-[#bfc2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#bfc2ff] transition-colors">
                <service.icon className="text-[#bfc2ff] group-hover:text-[#181d8c] w-8 h-8" />
              </div>
              <h3 className="font-['Space_Grotesk'] font-bold text-2xl uppercase mb-4 tracking-tighter italic">
                {service.title}
              </h3>
              <p className="font-['Inter'] text-slate-400 mb-6">{service.description}</p>
              <ul className="space-y-3 font-['Lexend'] text-sm text-[#908f9e] mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#bfc2ff]" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
