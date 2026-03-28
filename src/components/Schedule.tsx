import { Calendar, Moon, Sun, MessageCircle } from 'lucide-react';

const scheduleData = [
  {
    day: 'MARTES',
    time: '07:30 — 22:30',
    description: 'El día más largo de entrenamiento. Ideal para calentar temprano o jugar hasta tarde.',
    footer: '15 horas de actividad',
    icon: Calendar,
    color: 'text-blue-400',
    glow: 'shadow-blue-500/10',
  },
  {
    day: 'JUEVES',
    time: '20:00 — 22:30',
    description: 'Sesión nocturna perfecta para después del trabajo. Enfoque en juego y práctica.',
    footer: 'Noche de juego',
    icon: Moon,
    color: 'text-yellow-400',
    glow: 'shadow-yellow-500/10',
  },
  {
    day: 'DOMINGO',
    time: '09:00 — 14:00',
    description: 'La mejor mañana para entrenar en comunidad. Ambiente familiar y relajado.',
    footer: 'Mañana familiar',
    icon: Sun,
    color: 'text-cyan-400',
    glow: 'shadow-cyan-500/10',
  },
];

export default function Schedule() {
  return (
    <section id="horarios" className="py-24 bg-[#0d1117] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-yellow-500 font-bold text-sm uppercase tracking-widest mb-2">
             <Calendar className="w-4 h-4" /> Horarios
          </div>
          <h2 className="font-['Space_Grotesk'] font-bold text-5xl md:text-6xl text-white tracking-tight">
            Días y horarios de <br />
            <span className="text-yellow-500">entrenamiento</span>
          </h2>
          <p className="font-['Inter'] text-slate-400 max-w-2xl mx-auto text-lg">
            Horarios publicados y consistentes para organizar tus entrenamientos durante la semana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {scheduleData.map((item) => (
            <div
              key={item.day}
              className={`group relative bg-[#161b22] border border-slate-800 p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:border-slate-700 shadow-2xl ${item.glow}`}
            >
              <div className="mb-8">
                <item.icon className={`w-10 h-10 ${item.color}`} />
              </div>
              
              <div className="space-y-6">
                <div>
                  <span className="font-['Lexend'] text-blue-500 font-bold tracking-widest text-sm uppercase">
                    {item.day}
                  </span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <h3 className="font-['Space_Grotesk'] font-bold text-5xl text-white tracking-tighter">
                      {item.time.split(' — ')[0]}
                    </h3>
                    <span className="text-slate-600 text-3xl">—</span>
                  </div>
                  <h3 className="font-['Space_Grotesk'] font-bold text-5xl text-yellow-500 tracking-tighter -mt-2">
                    {item.time.split(' — ')[1]}
                  </h3>
                </div>

                <p className="font-['Inter'] text-slate-400 text-sm leading-relaxed min-h-[60px]">
                  {item.description}
                </p>

                <div className="pt-6 border-t border-slate-800 flex items-center gap-3">
                  {item.day === 'MARTES' && <div className="w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center"><div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" /></div>}
                  {item.day === 'JUEVES' && <div className="text-yellow-500">★</div>}
                  {item.day === 'DOMINGO' && <div className="text-cyan-400">👥</div>}
                  <span className={`font-['Lexend'] text-xs font-bold uppercase tracking-widest ${item.color}`}>
                    {item.footer}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center space-y-8">
          <p className="font-['Inter'] text-slate-500 text-lg italic">
            ¿Tienes dudas sobre los horarios? Escríbenos y te orientamos.
          </p>
          <a 
            href="https://wa.me/56952341950" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-['Lexend'] font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-yellow-500/20 uppercase tracking-widest text-sm"
          >
            <MessageCircle className="w-5 h-5" /> Consultar horarios
          </a>
        </div>
      </div>
    </section>
  );
}
