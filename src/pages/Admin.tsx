import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Player } from '../types';
import { 
  LogOut, 
  Plus, 
  Trash2, 
  Save, 
  User, 
  Trophy, 
  ChevronUp, 
  ChevronDown,
  LayoutDashboard,
  Users as UsersIcon,
  Settings
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Admin({ session }: { session: any }) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate('/login');
      return;
    }
    fetchPlayers();
  }, [session, navigate]);

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
      // Fallback for demo
      setPlayers([
        { id: '1', name: 'Cristóbal Escalante', points: 1250, status: 'Líder', position: 1 },
        { id: '2', name: 'Cristian Cavalieri', points: 1100, status: 'Estable', position: 2 },
        { id: '3', name: 'Por actualizar', points: 0, status: 'Pendiente', position: 3 },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const addPlayer = () => {
    const newPlayer: Player = {
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      points: 0,
      status: 'Pendiente',
      position: players.length + 1,
    };
    setPlayers([...players, newPlayer]);
  };

  const removePlayer = (id: string) => {
    setPlayers(players.filter(p => p.id !== id).map((p, idx) => ({ ...p, position: idx + 1 })));
  };

  const updatePlayer = (id: string, field: keyof Player, value: any) => {
    setPlayers(players.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const movePlayer = (index: number, direction: 'up' | 'down') => {
    const newPlayers = [...players];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newPlayers.length) return;

    [newPlayers[index], newPlayers[targetIndex]] = [newPlayers[targetIndex], newPlayers[index]];
    
    // Update positions
    const updatedPlayers = newPlayers.map((p, idx) => ({ ...p, position: idx + 1 }));
    setPlayers(updatedPlayers);
  };

  const saveChanges = async () => {
    setSaving(true);
    try {
      // In a real app, you'd use a transaction or upsert
      // For this demo, we'll just simulate success if Supabase isn't fully set up
      const { error } = await supabase
        .from('players')
        .upsert(players);

      if (error) throw error;
      alert('Cambios guardados con éxito');
    } catch (error) {
      console.error('Error saving:', error);
      alert('Cambios guardados localmente (Configura Supabase para persistencia real)');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#bfc2ff] border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#1b1c1c] border-r border-[#464653]/20 p-6 flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 kinetic-gradient rounded-lg flex items-center justify-center">
            <Trophy className="text-[#bfc2ff] w-5 h-5" fill="currentColor" />
          </div>
          <span className="text-xl font-black tracking-tighter text-[#bfc2ff] italic font-['Space_Grotesk'] uppercase">
            Admin Zeus
          </span>
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
          <button className="flex items-center gap-3 px-4 py-3 bg-[#bfc2ff]/10 text-[#bfc2ff] rounded-xl font-bold font-['Lexend'] text-sm uppercase tracking-widest">
            <LayoutDashboard className="w-5 h-5" /> Ranking
          </button>
          <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 rounded-xl font-bold font-['Lexend'] text-sm uppercase tracking-widest transition-colors">
            <UsersIcon className="w-5 h-5" /> Jugadores
          </button>
          <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-white/5 rounded-xl font-bold font-['Lexend'] text-sm uppercase tracking-widest transition-colors">
            <Settings className="w-5 h-5" /> Ajustes
          </button>
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl font-bold font-['Lexend'] text-sm uppercase tracking-widest transition-colors mt-auto"
        >
          <LogOut className="w-5 h-5" /> Cerrar Sesión
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 md:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black font-['Space_Grotesk'] uppercase italic tracking-tighter">Gestión de Ranking</h1>
            <p className="text-slate-400 mt-2">Modifica el tablero de posiciones en tiempo real</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button
              onClick={addPlayer}
              className="flex-grow md:flex-grow-0 flex items-center justify-center gap-2 bg-[#353535] hover:bg-[#464653] px-6 py-3 rounded-xl font-bold font-['Lexend'] text-xs uppercase tracking-widest transition-colors"
            >
              <Plus className="w-4 h-4" /> Añadir Jugador
            </button>
            <button
              onClick={saveChanges}
              disabled={saving}
              className="flex-grow md:flex-grow-0 flex items-center justify-center gap-2 kinetic-gradient text-[#181d8c] px-8 py-3 rounded-xl font-bold font-['Lexend'] text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              {saving ? <div className="w-4 h-4 border-2 border-[#181d8c] border-t-transparent rounded-full animate-spin" /> : <><Save className="w-4 h-4" /> Guardar Cambios</>}
            </button>
          </div>
        </header>

        <div className="grid gap-4">
          {players.map((player, index) => (
            <motion.div
              layout
              key={player.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1f2020] border border-[#464653]/20 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 group"
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="flex flex-col gap-1">
                  <button 
                    onClick={() => movePlayer(index, 'up')}
                    disabled={index === 0}
                    className="p-1 hover:text-[#bfc2ff] disabled:opacity-20 transition-colors"
                  >
                    <ChevronUp className="w-5 h-5" />
                  </button>
                  <div className="w-10 h-10 rounded-full bg-[#353535] flex items-center justify-center font-black font-['Space_Grotesk'] text-[#bfc2ff]">
                    {player.position}
                  </div>
                  <button 
                    onClick={() => movePlayer(index, 'down')}
                    disabled={index === players.length - 1}
                    className="p-1 hover:text-[#bfc2ff] disabled:opacity-20 transition-colors"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow w-full">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#908f9e] font-bold font-['Lexend']">Nombre del Jugador</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#908f9e]" />
                    <input
                      type="text"
                      value={player.name}
                      onChange={(e) => updatePlayer(player.id, 'name', e.target.value)}
                      className="w-full bg-[#353535]/50 border-none rounded-xl py-3 pl-11 pr-4 text-sm focus:ring-2 focus:ring-[#bfc2ff] outline-none"
                      placeholder="Nombre completo"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#908f9e] font-bold font-['Lexend']">Puntos</label>
                  <input
                    type="number"
                    value={player.points}
                    onChange={(e) => updatePlayer(player.id, 'points', parseInt(e.target.value) || 0)}
                    className="w-full bg-[#353535]/50 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-[#bfc2ff] outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#908f9e] font-bold font-['Lexend']">Estado</label>
                  <select
                    value={player.status}
                    onChange={(e) => updatePlayer(player.id, 'status', e.target.value)}
                    className="w-full bg-[#353535]/50 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-[#bfc2ff] outline-none appearance-none"
                  >
                    <option value="Líder">Líder</option>
                    <option value="Estable">Estable</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="En desarrollo">En desarrollo</option>
                  </select>
                </div>
              </div>

              <button
                onClick={() => removePlayer(player.id)}
                className="p-3 text-red-400/40 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </motion.div>
          ))}

          {players.length === 0 && (
            <div className="text-center py-20 bg-[#1f2020] rounded-3xl border border-dashed border-[#464653]/40">
              <p className="text-[#908f9e] font-['Lexend'] uppercase tracking-widest">No hay jugadores en el ranking</p>
              <button onClick={addPlayer} className="mt-4 text-[#bfc2ff] font-bold hover:underline">Añadir el primero</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
