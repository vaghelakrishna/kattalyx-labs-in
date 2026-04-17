import { motion } from "framer-motion";
import { Play, SkipBack, SkipForward, ArrowLeft, ExternalLink } from "lucide-react";
import { useRef } from "react";

const albumData = [
  {
    id: 1,
    artist: "Christopher Cross",
    title: "Sailing",
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800",
    center: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800",
    color: "bg-blue-600"
  },
  {
    id: 2,
    artist: "Fleetwood Mac",
    title: "Dreams",
    cover: "https://images.unsplash.com/photo-1627773755683-dfcf2774596a?q=80&w=800",
    center: "https://images.unsplash.com/photo-1459749411177-042180ce673f?q=80&w=800",
    color: "bg-emerald-600"
  },
  {
    id: 3,
    artist: "Tame Impala",
    title: "Currents",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800",
    center: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800",
    color: "bg-purple-600"
  }
];

const MusicPortfolio = () => {
  return (
    <section className="w-full h-screen max-h-screen bg-[#F5F5F7] flex flex-col overflow-hidden">

      {/* 1. FIXED HEADER (Title visible at all times) */}
      <header className="w-full pt-10 pb-6 px-10 flex flex-col items-center shrink-0 z-50 bg-[#F5F5F7]/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-1">Portfolio Showcase</p>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Interactive Vinyls</h1>
        </motion.div>
      </header>

      {/* 2. SCROLLABLE CONTENT AREA */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory flex items-center px-10 gap-10 lg:gap-20">
        {albumData.map((album) => (
          <div key={album.id} className="snap-center shrink-0">
            <MusicCard album={album} />
          </div>
        ))}
      </div>

      {/* 3. FOOTER */}
      <footer className="py-6 px-10 flex justify-center shrink-0">
        <div className="flex items-center gap-3 opacity-30 text-[10px] font-bold tracking-[0.2em] uppercase">
          <div className="w-12 h-[1px] bg-slate-900" />
          Swipe or Scroll to Explore
          <div className="w-12 h-[1px] bg-slate-900" />
        </div>
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

const MusicCard = ({ album }: { album: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      className="w-[90vw] max-w-[720px] bg-white/80 backdrop-blur-2xl rounded-[3.5rem] p-8 md:p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] border border-white/50"
    >
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/50 text-slate-500 text-[10px] font-black uppercase tracking-widest border border-slate-200/20">
          Selected Work
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/50 hover:bg-slate-200 transition-colors text-slate-600 text-[10px] font-black uppercase tracking-widest group">
          Spotify <ExternalLink className="w-3 h-3" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-40">
        {/* VINYL ANIMATION */}
        <div className="relative perspective-1000 group">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-[-60px] w-[200px] h-[200px] md:w-[240px] md:h-[240px] bg-[#111] rounded-full shadow-2xl flex items-center justify-center border-[6px] border-[#1a1a1a]"
            style={{ backgroundImage: `repeating-radial-gradient(circle, #222 0%, #111 1.5%, #222 3%)` }}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden border-[3px] border-[#333]">
              <img src={album.center} className="w-full h-full object-cover" alt="center" />
            </div>
            <div className="absolute w-3 h-3 bg-[#F5F5F7] rounded-full" />
          </motion.div>

          <motion.div
            whileHover={{ rotateY: -15, scale: 1.05 }}
            className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-[5px] border-white"
          >
            <img src={album.cover} className="w-full h-full object-cover" alt={album.title} />
          </motion.div>
        </div>

        {/* INFO & CONTROLS */}
        <div className="flex-1 text-center md:text-left">
          <div className="mb-6">
            <h3 className="text-sm font-bold text-slate-400 mb-1">{album.artist}</h3>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">{album.title}</h2>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4 mb-8">
            <div className="text-lg font-bold text-slate-300">0:01 / 0:15</div>
            <div className="w-full max-w-[150px] h-1 bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full ${album.color} w-1/4`} />
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 text-slate-300">
              <SkipBack className="w-4 h-4 fill-current" />
            </button>
            <button className="w-14 h-14 rounded-full flex items-center justify-center bg-slate-900 text-white shadow-xl hover:scale-105 transition-transform">
              <Play className="w-5 h-5 fill-current ml-1" />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 text-slate-300">
              <SkipForward className="w-4 h-4 fill-current" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPortfolio;