import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";

const KattalyxUnifiedFlow = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [progress, setProgress] = useState(0);

  const dragX = useMotionValue(0);
  const smoothProgress = useSpring(0, { damping: 25, stiffness: 120 });

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const offsetWidth = scrollRef.current.offsetWidth;
        setConstraints({ left: -(scrollWidth - offsetWidth), right: 0 });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useMotionValueEvent(dragX, "change", (latest) => {
    if (constraints.left !== 0) {
      const pct = (latest / constraints.left) * 100;
      setProgress(Math.min(Math.max(pct, 0), 100));
    }
  });

  useEffect(() => {
    smoothProgress.set(progress);
  }, [progress, smoothProgress]);

  const projects = [
    { company: "A LA MAISON", category: "BEAUTY & PERSONAL CARE", desc: "Designed and developed a Shopify landing experience to support the introduction of a premium collection.", img: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800" },
    { company: "KOHLER", category: "HOME & LIVING", desc: "Created an interactive Shopify website featuring video, 3D models, and augmented reality.", img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=800" },
    { company: "WILD MANNERED", category: "FOOD & BEVERAGE", desc: "Customized a Shopify theme to support a rebrand and expanded product line.", img: "https://images.unsplash.com/photo-1569058242253-92a9c71f9867?q=80&w=800" }
  ];

  return (
    <main className="bg-[#050508] text-white overflow-x-hidden relative">

      {/* --- GLOBAL SHARED BACKGROUND DESIGN --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Left Side Grid (Scaling design reference) */}
        <div className="absolute inset-y-0 left-0 w-1/2 opacity-[0.1]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Right Side Concentric Circles (Scaling design reference) */}
        <div className="absolute right-[-15%] top-1/2 -translate-y-1/2 flex items-center justify-center opacity-[0.06]">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="absolute rounded-full border border-white" style={{ width: `${(i + 1) * 150}px`, height: `${(i + 1) * 150}px` }} />
          ))}
        </div>
        {/* Center Vertical Divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/[0.05]" />
      </div>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-[clamp(3.5rem,8vw,10.5rem)] font-[1000] leading-[0.8] tracking-[-0.05em] uppercase text-white text-center">
          SCALING THE<br />NEXT WAVE OF<br />CONSUMER BRANDS
        </h1>
        <p className="mt-16 text-[10px] md:text-[11px] font-bold text-white/40 uppercase tracking-[0.3em]">
          Select partners and brands we've built alongside
        </p>
      </section>

      {/* --- 2. WORK TRANSITION --- */}
      <section className="relative z-10 pt-32 pb-16 px-10 md:px-20">
        <h2 className="text-[clamp(3rem,6vw,7rem)] font-black tracking-tighter flex items-center gap-6 leading-none text-white uppercase">
          <div className="hidden md:block relative w-36 h-20 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
            <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600" className="w-full h-full object-cover grayscale opacity-50" />
            <div className="absolute bottom-3 left-3 w-2.5 h-2.5 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,1)]" />
          </div>
          WORK<span className="text-blue-600">.</span>
        </h2>
      </section>

      {/* --- 3. DRAGGABLE CARDS (Reduced Size & Tight Spacing) --- */}
      <section className="relative z-10 w-full overflow-hidden px-10 md:px-20" ref={scrollRef}>
        <motion.div
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.05}
          style={{ x: dragX, width: "max-content", touchAction: "none" }}
          className="flex gap-6" // Gap thoda kam kiya
        >
          {projects.map((project, i) => (
            <div
              key={i}
              // Height 400px se 340px ki, Width 800px se 720px ki
              className="shrink-0 w-[85vw] md:w-[720px] h-[340px] flex flex-col md:flex-row bg-[#08080A]/80 backdrop-blur-md rounded-[1.5rem] border border-white/[0.08] overflow-hidden group pointer-events-none"
            >
              {/* Image Side (40% width for a slimmer look) */}
              <div className="w-full md:w-[40%] h-[40%] md:h-full relative overflow-hidden border-r border-white/5">
                <img
                  src={project.img}
                  className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  alt={project.company}
                />
              </div>

              {/* Content Side (60% width) */}
              <div className="w-full md:w-[60%] p-7 md:p-9 flex flex-col justify-between pointer-events-auto">
                <div>
                  <span className="text-[8px] font-black tracking-[0.4em] bg-white/5 px-2.5 py-1 rounded-full text-zinc-500 uppercase border border-white/5">
                    {project.category}
                  </span>

                  {/* Heading size 5xl se 3xl/4xl kiya */}
                  <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter mt-6 text-white uppercase leading-none">
                    {project.company}
                  </h3>

                  {/* Description text size aur width optimize ki */}
                  <p className="mt-4 text-[10px] font-bold text-zinc-400 uppercase leading-relaxed tracking-widest max-w-[260px]">
                    {project.desc}
                  </p>
                </div>

                <div className="flex items-center gap-4 opacity-30">
                  <div className="h-[1px] w-8 bg-white" />
                  <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white">Project / 0{i + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* --- 4. NEON PROGRESS BAR (image_ee1be1) --- */}
      <section className="relative z-10 py-8 flex justify-center">
        <div className="relative w-[300px] md:w-[400px] h-[1px] bg-white/10 overflow-hidden">
          <motion.div
            style={{ scaleX: smoothProgress.get() / 100, originX: 0 }}
            className="absolute inset-0 bg-[#D4FF00] shadow-[0_0_20px_rgba(212,255,0,0.6)]"
          />
        </div>
      </section>

    </main>
  );
};

export default KattalyxUnifiedFlow;