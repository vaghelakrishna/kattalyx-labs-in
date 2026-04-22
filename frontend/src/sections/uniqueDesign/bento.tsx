import React from 'react';
import { motion } from 'framer-motion';
import { Star, Home, ArrowUpRight } from 'lucide-react';

const PinterestHero = () => {
  return (
    <section className="relative min-h-screen bg-[#0A0A0B] py-20 px-6 overflow-hidden selection:bg-[#D4FF00] selection:text-black">

      {/* BACKGROUND GRID UI (Inspired by Image 1 & 2) */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{ backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP SECTION: MASSIVE BOLD TEXT (Image 1 style) */}
        <div className="flex flex-col mb-16">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-[clamp(4rem,18vw,15rem)] font-[1000] leading-[0.75] tracking-tighter text-white uppercase"
          >
            BUILT FOR
          </motion.h1>

          <div className="flex items-center justify-end -mt-4 md:-mt-10">
            {/* FLOATING IMAGE 1 (Image 1: DJ/Crowd vibe) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden md:block w-72 aspect-video rounded-3xl overflow-hidden border-4 border-white/5 shadow-2xl rotate-3"
            >
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800" alt="Vibe" className="w-full h-full object-cover" />
            </motion.div>

            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-[clamp(4rem,18vw,15rem)] font-[1000] leading-[0.75] tracking-tighter text-white uppercase"
            >
              GROWTH
            </motion.h1>
          </div>
        </div>

        {/* BENTO GRID AREA (Image 3 & 4 inspiration) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* LEFT: Pinterest Property Card (Image 4 Style) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-4 bg-white rounded-[2.5rem] p-4 shadow-2xl shadow-indigo-500/10"
          >
            <div className="relative aspect-[4/3] rounded-[1.8rem] overflow-hidden mb-6">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                <Star className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                <span className="text-[10px] font-bold text-black uppercase tracking-wider">Prime Pick</span>
              </div>
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" className="w-full h-full object-cover" alt="Estate" />
            </div>

            <div className="px-2 pb-4 space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-3xl font-black text-zinc-900 leading-none">$250,000</h2>
                  <p className="text-zinc-400 text-xs font-bold mt-1 uppercase tracking-widest">List Price</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-zinc-800">Guillaume Briard</p>
                  <p className="text-[10px] text-zinc-400 font-medium">Harry Konigsberg's, 1063 AG</p>
                </div>
              </div>

              <div className="h-[1px] bg-zinc-100" />

              <div className="flex gap-6 text-zinc-500 font-bold text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center"><Home className="w-4 h-4" /></div>
                  29m² Living
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center">🏠</div>
                  2 Rooms
                </div>
              </div>

              <button className="w-full py-4 bg-zinc-900 text-white rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#D4FF00] hover:text-black transition-colors">
                View Details
              </button>
            </div>
          </motion.div>

          {/* MIDDLE/RIGHT: Scrolling "Shop" Tiles (Image 3 Style) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { title: "SMASH", color: "#FF85C0", img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=400" },
              { title: "LUMAR", color: "#E3A3FF", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400" },
              { title: "COHO+", color: "#91F2CC", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" },
              { title: "KAHUNA", color: "#FFE066", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400" },
              { title: "VYBRANCE", color: "#D4FF00", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400" },
              { title: "NEW", color: "#FFFFFF", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 0.95 }}
                className="group relative aspect-square rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10"
              >
                <img src={item.img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">{item.title}</span>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PinterestHero;