import { useRef } from "react";
import { motion } from "framer-motion";

const WorkCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const cards = [
    { type: "black", icon: "⬚", label: "Studio" },
    { type: "neon", icon: "+" },
    { type: "black", text: "TII" },
    { type: "blueprint", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400" },
    { type: "red", icon: "///" },
    { type: "black", icon: "▣" },
    { type: "neon", icon: "✳" },
    { type: "black", text: "LABS" },
    { type: "neon", icon: "+" },
    { type: "black", text: "NEXT" },
  ];

  return (
    <section className="relative bg-[#F4F4F4] py-32 overflow-hidden font-sans">

      {/* Background Blueprint Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full border-l border-zinc-400 rotate-[30deg] origin-top" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full border-r border-zinc-400 -rotate-[30deg] origin-top" />
      </div>

      <div className="relative z-20 px-10 md:px-20 mb-20 pointer-events-none">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">Portfolio Archive</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black">
            Our Work<span className="text-[#D4FF00]">.</span>
          </h2>
          <div className="w-20 h-[2px] bg-black mt-4" />
        </div>
      </div>

      <div className="relative z-10 overflow-visible">
        {/* DRAGGABLE CONTAINER */}
        <motion.div
          ref={containerRef}
          drag="x"
          // dragConstraints ko cards ki total width ke hisab se set kiya hai
          dragConstraints={{ left: -1600, right: 0 }}
          // Drag chodne ke baad kitni der tak slide hoga
          dragTransition={{ power: 0.2, timeConstant: 200 }}
          // Kinaro par bounce effect
          dragElastic={0.2}
          className="flex gap-6 px-10 md:px-20 cursor-grab active:cursor-grabbing"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              // Hover par thoda lift aur shadow
              whileHover={{ y: -15, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className={`
                shrink-0 w-64 h-40 md:w-80 md:h-52 rounded-2xl md:rounded-[2.5rem]
                flex flex-col items-center justify-center relative overflow-hidden
                transition-shadow duration-300 hover:shadow-2xl
                ${card.type === 'black' ? 'bg-[#0A0A0A] text-white' : ''}
                ${card.type === 'neon' ? 'bg-[#D4FF00] text-black' : ''}
                ${card.type === 'red' ? 'bg-[#FF4D4D] text-black' : ''}
                ${card.type === 'blueprint' ? 'bg-white border border-zinc-200' : ''}
              `}
            >
              {card.text && <span className="text-4xl font-black italic tracking-tighter">{card.text}</span>}
              {card.icon && <span className="text-6xl font-light">{card.icon}</span>}
              {card.img && (
                <img src={card.img} className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Work" />
              )}

              {card.label && (
                <span className="absolute bottom-6 left-8 text-[10px] font-black uppercase tracking-widest opacity-40">
                  {card.label}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 px-10 md:px-20 flex items-center justify-between">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
          Scroll or Drag to Explore
        </span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-black" />
          <div className="w-12 h-[2px] bg-black self-center" />
        </div>
      </div>
    </section>
  );
};

export default WorkCarousel;