import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { LogIn, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ZeusLogo } from '../components/ZeusLogo';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      navigate('/admin');
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#bfc2ff]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#000080]/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
            {/* High quality logo placeholder */}
            <img 
              src="https://picsum.photos/seed/zeus-logo/200/200" 
              alt="Club Zeus Logo" 
              className="w-12 h-12 object-cover group-hover:rotate-12 transition-transform duration-300 rounded-full border-2 border-[#bfc2ff]"
              referrerPolicy="no-referrer"
            />
            <span className="text-3xl font-black tracking-tighter text-[#bfc2ff] italic font-['Space_Grotesk'] uppercase">
              Club Zeus
            </span>
          </Link>
          <h2 className="text-2xl font-bold font-['Space_Grotesk'] uppercase italic tracking-tight text-[#e5e2e1]">Bienvenido de vuelta</h2>
          <p className="text-slate-400 font-['Inter'] mt-2">Inicia sesión para acceder a tu perfil</p>
        </div>

        <div className="bg-[#1f2020]/80 backdrop-blur-2xl p-8 rounded-3xl border border-[#464653]/20 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-950/40 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="font-['Lexend'] text-xs uppercase tracking-widest text-[#908f9e]">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#353535] border-none rounded-xl focus:ring-2 focus:ring-[#bfc2ff] py-4 px-5 text-[#e5e2e1] outline-none transition-all"
                placeholder="tu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="font-['Lexend'] text-xs uppercase tracking-widest text-[#908f9e]">Contraseña</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#353535] border-none rounded-xl focus:ring-2 focus:ring-[#bfc2ff] py-4 px-5 text-[#e5e2e1] outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full kinetic-gradient text-[#181d8c] font-['Lexend'] font-bold py-5 rounded-full hover:scale-[1.02] active:scale-95 transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-[#181d8c] border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn className="w-5 h-5" /> Iniciar Sesión
                </>
              )}
            </button>
          </form>
        </div>

        <div className="text-center mt-8">
          <Link to="/" className="text-slate-500 hover:text-[#bfc2ff] text-sm font-['Lexend'] uppercase tracking-widest transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
