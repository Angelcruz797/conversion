export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r mt-10 from-slate-900 via-slate-800 to-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">
            NovaSis
          </h2>
          <p className="text-sm text-slate-400">
            Construyendo soluciones digitales
          </p>
        </div>

        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} · Creado por el equipo {" "}
          <span className="text-sky-400 font-medium">NovaSis</span>
        </div>
      </div>
    </footer>
  );
};