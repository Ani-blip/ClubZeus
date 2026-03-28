import { MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-[#1b1c1c]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="font-['Space_Grotesk'] font-bold text-5xl italic tracking-tighter uppercase">
            ESTAMOS EN EL <br /> <span className="text-[#bfc2ff] text-6xl">CAMPO DE BATALLA</span>
          </h2>
          <p className="font-['Inter'] text-slate-400 text-lg">
            Visítanos en nuestra sede de Quinta Normal. Estamos listos para recibirte y llevar tu juego al siguiente nivel.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#000080] flex items-center justify-center">
                <MapPin className="text-[#bfc2ff] w-6 h-6" />
              </div>
              <div>
                <p className="font-['Lexend'] text-sm text-[#908f9e] uppercase tracking-widest">Dirección</p>
                <p className="font-['Space_Grotesk'] font-bold text-xl">Quinta Normal, Santiago, Chile</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#000080] flex items-center justify-center">
                <Phone className="text-[#bfc2ff] w-6 h-6" />
              </div>
              <div>
                <p className="font-['Lexend'] text-sm text-[#908f9e] uppercase tracking-widest">WhatsApp</p>
                <p className="font-['Space_Grotesk'] font-bold text-xl">+56 9 5234 1950</p>
              </div>
            </div>
          </div>
          <div className="h-64 rounded-xl overflow-hidden grayscale contrast-125 border border-[#464653]/30">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Map Location"
            />
          </div>
        </div>

        <div className="bg-[#353535]/60 backdrop-blur-2xl p-10 rounded-tl-[60px] rounded-br-none border border-[#464653]/20">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-['Space_Grotesk'] font-bold text-3xl italic uppercase mb-8">Escríbenos</h3>
            <div className="space-y-2">
              <label className="font-['Lexend'] text-xs uppercase tracking-widest text-[#908f9e]">Nombre Guerrero/a</label>
              <input
                type="text"
                className="w-full bg-[#353535] border-none rounded-lg focus:ring-2 focus:ring-[#bfc2ff] py-4 text-[#e5e2e1] outline-none"
                placeholder="Tu nombre"
              />
            </div>
            <div className="space-y-2">
              <label className="font-['Lexend'] text-xs uppercase tracking-widest text-[#908f9e]">Email de contacto</label>
              <input
                type="email"
                className="w-full bg-[#353535] border-none rounded-lg focus:ring-2 focus:ring-[#bfc2ff] py-4 text-[#e5e2e1] outline-none"
                placeholder="email@ejemplo.com"
              />
            </div>
            <div className="space-y-2">
              <label className="font-['Lexend'] text-xs uppercase tracking-widest text-[#908f9e]">Mensaje</label>
              <textarea
                className="w-full bg-[#353535] border-none rounded-lg focus:ring-2 focus:ring-[#bfc2ff] py-4 text-[#e5e2e1] outline-none"
                placeholder="Cuéntanos tus objetivos..."
                rows={4}
              />
            </div>
            <button className="w-full kinetic-gradient text-[#181d8c] font-['Lexend'] font-bold py-5 rounded-full hover:scale-[1.02] active:scale-95 transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-2">
              <Send className="w-5 h-5" /> Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
