import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Player } from '../types';
import { Trophy, Crown, TrendingUp, Minus, Clock, Info, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Ranking() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlayers();
  }, []);

  async function fetchPlayers() {
    try {
      const { data, error } = await supabase
        .from('players')
        .select('*')
        .order('position', { ascending: true });

      if (error) throw error;
      setPlayers(data || []);
    } catch (error) {
      console.error('Error fetching players:', error);
      // Fallback data if table doesn't exist yet
      setPlayers([
        { id: '1', name: 'Cristóbal Escalante', points: 1250, status: 'Líder', position: 1 },
        { id: '2', name: 'Cristian Cavalieri', points: 1100, status: 'Estable', position: 2 },
        { id: '3', name: 'Por actualizar', points: 0, status: 'Pendiente', position: 3 },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const topThree = [
    players.find(p => p.position === 2),
    players.find(p => p.position === 1),
    players.find(p => p.position === 3),
  ];

  return (
    <section id="ranking" className="py-24 bg-[#1b1c1c]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="font-['Lexend'] text-[#bfc2ff] uppercase tracking-[0.3em] text-sm font-bold">Elite de Quinta Normal</span>
          <h2 className="font-['Space_Grotesk'] font-bold text-5xl italic tracking-tighter uppercase">TABLA DE POSICIONES</h2>
        </div>

        {/* Podium Visual */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 mb-20">
          {topThree.map((player, idx) => {
            if (!player) return null;
            const isFirst = player.position === 1;
            const isSecond = player.position === 2;
            const isThird = player.position === 3;

            return (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col items-center group ${isFirst ? '-translate-y-4 order-1 md:order-2' : isSecond ? 'order-2 md:order-1' : 'order-3'}`}
              >
                <div className="relative mb-4">
                  <div className={`rounded-full border-4 p-1 flex items-center justify-center bg-[#353535] shadow-2xl ${
                    isFirst ? 'w-32 h-32 border-[#FFD700]' : 'w-24 h-24 border-slate-400'
                  }`}>
                    <span className={`font-['Space_Grotesk'] font-black ${isFirst ? 'text-5xl text-[#FFD700]' : 'text-3xl text-slate-400'}`}>
                      {player.position}
                    </span>
                    {isFirst ? (
                      <Crown className="absolute -top-2 -right-2 text-[#FFD700] bg-[#131313] rounded-full p-1 w-8 h-8" fill="currentColor" />
                    ) : (
                      <Trophy className="absolute -top-1 -right-1 text-slate-400 bg-[#131313] rounded-full p-0.5 w-6 h-6" fill="currentColor" />
                    )}
                  </div>
                </div>
                <p className={`font-['Space_Grotesk'] font-bold uppercase tracking-tight ${isFirst ? 'text-2xl text-[#bfc2ff]' : 'text-lg text-[#e5e2e1]'}`}>
                  {player.name}
                </p>
                <p className={`font-['Lexend'] text-xs uppercase tracking-widest mb-4 ${isFirst ? 'text-[#FFD700] font-bold' : 'text-[#908f9e]'}`}>
                  {player.position}º Lugar
                </p>
                <div className={`bg-gradient-to-b from-[#bfc2ff]/20 to-transparent rounded-t-xl border-x border-t border-[#bfc2ff]/20 flex items-center justify-center ${
                  isFirst ? 'w-48 h-32' : isSecond ? 'w-40 h-24' : 'w-40 h-20'
                }`}>
                  {isFirst && <Trophy className="w-10 h-10 text-[#FFD700]/50" />}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Leaderboard Table */}
        <div className="bg-[#1f2020]/60 backdrop-blur-2xl rounded-2xl border border-[#464653]/20 overflow-hidden">
          <div className="p-6 border-b border-[#464653]/20 bg-[#2a2a2a]/40">
            <h3 className="font-['Space_Grotesk'] font-bold text-xl uppercase italic tracking-tight">Tabla de posiciones</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#353535]/30">
                <tr>
                  <th className="px-6 py-4 font-['Lexend'] text-xs uppercase tracking-widest text-[#908f9e]">POS</th>
                  <th className="px-6 py-4 font-['Lexend'] text-xs uppercase tracking-widest text-[#908f9e]">JUGADOR</th>
                  <th className="px-6 py-4 font-['Lexend'] text-xs uppercase tracking-widest text-[#908f9e]">PUNTOS</th>
                  <th className="px-6 py-4 font-['Lexend'] text-xs uppercase tracking-widest text-[#908f9e]">ESTADO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#464653]/10">
                {players.map((player) => (
                  <tr key={player.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-6">
                      <div className={`w-8 h-8 rounded-full font-['Space_Grotesk'] font-bold flex items-center justify-center text-sm ${
                        player.position === 1 ? 'bg-[#FFD700] text-black' : 
                        player.position === 2 ? 'bg-slate-400 text-black' : 
                        player.position === 3 ? 'bg-[#CD7F32] text-black' : 'bg-[#353535] text-[#908f9e]'
                      }`}>
                        {player.position}
                      </div>
                    </td>
                    <td className="px-6 py-6 font-['Space_Grotesk'] font-bold uppercase text-[#e5e2e1]">{player.name}</td>
                    <td className="px-6 py-6 font-['Inter'] font-medium text-[#908f9e]">{player.points || '-'}</td>
                    <td className="px-6 py-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                        player.status === 'Líder' ? 'bg-green-950/40 text-green-400 border-green-500/20' :
                        player.status === 'Estable' ? 'bg-blue-950/40 text-blue-400 border-blue-500/20' :
                        player.status === 'Pendiente' ? 'bg-yellow-950/40 text-yellow-400 border-yellow-500/20' :
                        'bg-[#353535]/40 text-[#908f9e] border-[#464653]/20'
                      }`}>
                        {player.status === 'Líder' && <TrendingUp className="w-3 h-3" />}
                        {player.status === 'Estable' && <Minus className="w-3 h-3" />}
                        {player.status === 'Pendiente' && <Clock className="w-3 h-3" />}
                        {player.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-[#2a2a2a]/20 border-t border-[#464653]/10">
            <p className="font-['Inter'] text-xs text-[#908f9e] flex items-center gap-2">
              <Info className="w-4 h-4 text-[#bfc2ff]" />
              Ranking en constante actualización. Consulta con el club para más información.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="#" className="font-['Lexend'] text-sm uppercase tracking-widest text-[#FFD700] hover:text-white transition-colors flex items-center justify-center gap-2 group">
            Ver todos los jugadores
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
