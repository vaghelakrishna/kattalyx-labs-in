import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Star, ArrowRight, Zap, Play } from 'lucide-react';

const KineticPinterestHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth springs for that "premium" feel
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.8]), { stiffness: 100, damping: 30 });
  const rotate = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, -5]), { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-[#080808]">
      <section className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#fdfdfd] selection:bg-[#D4FF00]">

        {/* 1. KINETIC TYPOGRAPHY LAYER */}
        <motion.div style={{ scale, rotate }} className="relative z-10 w-full px-6 pointer-events-none">
          <div className="max-w-[1600px] mx-auto">
            <h1 className="text-[clamp(4rem,20vw,18rem)] font-[1000] leading-[0.7] tracking-[-0.06em] uppercase text-zinc-900 mix-blend-difference">
              Kattalyx<br />
              <span className="flex items-center gap-8">
                Labs <div className="h-[2px] flex-1 bg-zinc-900 mt-8" />
              </span>
            </h1>
          </div>
        </motion.div>

        {/* 2. THE FLOATING PIN-BOARD (The "Amaze" Factor) */}
        <div className="absolute inset-0 z-20 pointer-events-auto">

          {/* Card 1: The "Property" Card (Pinterest Style) */}
          <motion.div
            drag
            dragConstraints={containerRef}
            initial={{ x: "10%", y: "20%", rotate: -8 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            className="absolute w-[320px] bg-white p-3 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] cursor-grab active:cursor-grabbing"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-4">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                <span className="text-[10px] font-black text-black tracking-widest uppercase">Curated</span>
              </div>
              <img src="https://images.unsplash.com/photo-1579546678181-7f17d396ec06?q=80&w=800" className="w-full h-full object-cover" />
            </div>
            <div className="px-3 pb-4">
              <h3 className="text-2xl font-black tracking-tighter text-zinc-900">$1,250 <span className="text-xs text-zinc-400 font-bold uppercase tracking-widest ml-2">Digital Asset</span></h3>
              <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2">Design Infrastructure v.02</p>
              <button className="mt-6 w-full py-4 bg-zinc-900 text-white rounded-full font-black uppercase text-[10px] tracking-widest">View Details</button>
            </div>
          </motion.div>

          {/* Card 2: The Video Play Card (Image 1 Vibe) */}
          <motion.div
            drag
            dragConstraints={containerRef}
            initial={{ x: "65%", y: "10%", rotate: 5 }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
            className="absolute w-[280px] aspect-square bg-[#D4FF00] rounded-[3rem] p-1 cursor-grab"
          >
            <div className="w-full h-full rounded-[2.8rem] bg-black overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600" className="w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#D4FF00] flex items-center justify-center">
                  <Play className="fill-black w-6 h-6 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Institutional Reel</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Minimalist Typography Tag */}
          <motion.div
            drag
            dragConstraints={containerRef}
            initial={{ x: "40%", y: "60%", rotate: 12 }}
            whileHover={{ scale: 1.1, zIndex: 50 }}
            className="absolute px-10 py-8 bg-zinc-900 rounded-full border border-white/10 cursor-grab"
          >
            <div className="flex items-center gap-6">
              <Zap className="text-[#D4FF00] w-8 h-8 fill-[#D4FF00]" />
              <span className="text-white text-3xl font-[1000] tracking-tighter uppercase italic">Move Fast.</span>
            </div>
          </motion.div>

        </div>

        {/* 3. SCROLL HINT (Pinterest Editorial style) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4">
          <div className="w-[1px] h-20 bg-gradient-to-b from-zinc-200 to-transparent" />
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em] rotate-90 origin-left mt-10">Scroll to Explore</span>
        </div>

      </section>

      
    </div>
  );
};

export default KineticPinterestHero;import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Star, ArrowRight, Zap, Play } from 'lucide-react';

const KineticPinterestHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth springs for that "premium" feel
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.8]), { stiffness: 100, damping: 30 });
  const rotate = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, -5]), { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-[#080808]">
      <section className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#fdfdfd] selection:bg-[#D4FF00]">

        {/* 1. KINETIC TYPOGRAPHY LAYER */}
        <motion.div style={{ scale, rotate }} className="relative z-10 w-full px-6 pointer-events-none">
          <div className="max-w-[1600px] mx-auto">
            <h1 className="text-[clamp(4rem,20vw,18rem)] font-[1000] leading-[0.7] tracking-[-0.06em] uppercase text-zinc-900 mix-blend-difference">
              Kattalyx<br />
              <span className="flex items-center gap-8">
                Labs <div className="h-[2px] flex-1 bg-zinc-900 mt-8" />
              </span>
            </h1>
          </div>
        </motion.div>

        {/* 2. THE FLOATING PIN-BOARD (The "Amaze" Factor) */}
        <div className="absolute inset-0 z-20 pointer-events-auto">

          {/* Card 1: The "Property" Card (Pinterest Style) */}
          <motion.div
            drag
            dragConstraints={containerRef}
            initial={{ x: "10%", y: "20%", rotate: -8 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            className="absolute w-[320px] bg-white p-3 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] cursor-grab active:cursor-grabbing"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-4">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                <span className="text-[10px] font-black text-black tracking-widest uppercase">Curated</span>
              </div>
              <img src="https://images.unsplash.com/photo-1579546678181-7f17d396ec06?q=80&w=800" className="w-full h-full object-cover" />
            </div>
            <div className="px-3 pb-4">
              <h3 className="text-2xl font-black tracking-tighter text-zinc-900">$1,250 <span className="text-xs text-zinc-400 font-bold uppercase tracking-widest ml-2">Digital Asset</span></h3>
              <p className="text-zinc-500 text-[10px] font-bold uppercase mt-2">Design Infrastructure v.02</p>
              <button className="mt-6 w-full py-4 bg-zinc-900 text-white rounded-full font-black uppercase text-[10px] tracking-widest">View Details</button>
            </div>
          </motion.div>

          {/* Card 2: The Video Play Card (Image 1 Vibe) */}
          <motion.div
            drag
            dragConstraints={containerRef}
            initial={{ x: "65%", y: "10%", rotate: 5 }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
            className="absolute w-[280px] aspect-square bg-[#D4FF00] rounded-[3rem] p-1 cursor-grab"
          >
            <div className="w-full h-full rounded-[2.8rem] bg-black overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600" className="w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#D4FF00] flex items-center justify-center">
                  <Play className="fill-black w-6 h-6 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Institutional Reel</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Minimalist Typography Tag */}
          <motion.div
            drag
            dragConstraints={containerRef}
            initial={{ x: "40%", y: "60%", rotate: 12 }}
            whileHover={{ scale: 1.1, zIndex: 50 }}
            className="absolute px-10 py-8 bg-zinc-900 rounded-full border border-white/10 cursor-grab"
          >
            <div className="flex items-center gap-6">
              <Zap className="text-[#D4FF00] w-8 h-8 fill-[#D4FF00]" />
              <span className="text-white text-3xl font-[1000] tracking-tighter uppercase italic">Move Fast.</span>
            </div>
          </motion.div>

        </div>

        {/* 3. SCROLL HINT (Pinterest Editorial style) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4">
          <div className="w-[1px] h-20 bg-gradient-to-b from-zinc-200 to-transparent" />
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em] rotate-90 origin-left mt-10">Scroll to Explore</span>
        </div>

      </section>

      
    </div>
  );
};

export default KineticPinterestHero;