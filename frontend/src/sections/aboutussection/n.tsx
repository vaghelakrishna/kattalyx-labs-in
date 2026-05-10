import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiUsers, FiGlobe, FiAward } from 'react-icons/fi'; // Icons library

const StatsSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0.6, 0.3]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const STATS = [
    { label: "Topics Covered", value: '50+', icon: FiUsers, color: "#FFADF0" },
    { label: "Institutions Partnered", value: '15+', icon: FiGlobe, color: "#A0D2FF" },
    { label: "Events Conducted", value: '20+', icon: FiAward, color: "#C4FF8E" },
  ];

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-[#fcfcfc]">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">

        {/* 1. BACKGROUND TEXT (Ghost Typography - Subtle Grey in Light Mode) */}
        <motion.div
          style={{ opacity: bgOpacity, scale: bgScale }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
        >
          <h2 className="text-[18vw] font-black text-zinc-100/80 leading-[0.8] tracking-tighter uppercase whitespace-nowrap select-none">
            KATTALYX <br /> METRICS
          </h2>
        </motion.div>

        {/* 2. SECTION HEADER (Black text on Light bg) */}
        <div className="absolute top-16 left-8 md:left-20 z-20">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[1.5px] w-8 bg-red-600" />
            <span className="text-zinc-400 font-mono text-[9px] uppercase tracking-[0.3em] font-bold italic">Lab Archive // 2026</span>
          </div>
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-zinc-900 leading-[0.9] uppercase">
            Proven <br /> <span className="text-zinc-300 italic font-serif lowercase text-4xl">by</span> Numbers.
          </h3>
        </div>

        {/* 3. HORIZONTAL SLIDING CARDS */}
        <motion.div style={{ x }} className="relative z-30 flex gap-8 items-center pl-[15%]">
          {STATS.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -15, rotate: 0, scale: 1.02 }}
                style={{
                  backgroundColor: stat.color,
                  rotate: i % 2 === 0 ? -2 : 2,
                }}
                className="min-w-[300px] md:min-w-[400px] h-[240px] md:h-[300px] p-8 md:p-10 rounded-[3rem] shadow-xl flex flex-col justify-between border border-black/5 cursor-pointer group transition-all"
              >
                {/* Card Top */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-black/20 font-bold">
                    PRTC // 0{i + 1}
                  </p>
                </div>

                {/* Stat Content */}
                <div>
                  <h4 className="text-7xl md:text-8xl font-black tracking-[-0.05em] leading-none text-zinc-900 -ml-1">
                    {stat.value}
                  </h4>
                  <p className="font-black uppercase tracking-[0.3em] text-[11px] text-zinc-900/60 ml-1 mt-2">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 4. DYNAMIC PROGRESS BAR (Grey track for light mode) */}
        {/* <div className="absolute bottom-12 left-10 right-10 h-[2px] bg-zinc-200 rounded-full overflow-hidden">
          <motion.div
            style={{ scaleX: scrollYProgress, originX: 0 }}
            className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.3)]"
          />
        </div> */}

      </div>
    </section>
  );
};

export default StatsSection;