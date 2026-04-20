import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cases = [
  {
    id: "01",
    title: "Rize",
    tag: "Fintech brand",
    description: "RIZE — a bold fintech brand making crypto spending as easy as tapping a card.",
    details: "Built around a glass prism that symbolizes instant crypto-to-fiat conversion, the brand combines smart symbolism with vibrant, unconventional visuals for a new generation of crypto users.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200", // Replace with your image
    bgText: "RIZE"
  },
  {
    id: "02",
    title: "Kattalyx",
    tag: "Creative Lab",
    description: "Next-gen creative solutions for technical founders and prestige brands.",
    details: "Focusing on high-end editorial layouts and liquid motion, Kattalyx redefines the standard for modern web development and design aesthetics.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
    bgText: "LABS"
  }, {
    id: "03",
    title: "Rize",
    tag: "Fintech brand",
    description: "RIZE — a bold fintech brand making crypto spending as easy as tapping a card.",
    details: "Built around a glass prism that symbolizes instant crypto-to-fiat conversion, the brand combines smart symbolism with vibrant, unconventional visuals for a new generation of crypto users.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200", // Replace with your image
    bgText: "RIZE"
  }, {
    id: "04",
    title: "Rize",
    tag: "Fintech brand",
    description: "RIZE — a bold fintech brand making crypto spending as easy as tapping a card.",
    details: "Built around a glass prism that symbolizes instant crypto-to-fiat conversion, the brand combines smart symbolism with vibrant, unconventional visuals for a new generation of crypto users.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200", // Replace with your image
    bgText: "RIZE"
  },
  {
    id: "05",
    title: "Rize",
    tag: "Fintech brand",
    description: "RIZE — a bold fintech brand making crypto spending as easy as tapping a card.",
    details: "Built around a glass prism that symbolizes instant crypto-to-fiat conversion, the brand combines smart symbolism with vibrant, unconventional visuals for a new generation of crypto users.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200", // Replace with your image
    bgText: "RIZE"
  },
];

const CaseStudySection = () => {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section className="max-h-screen bg-black text-white flex flex-col md:flex-row overflow-hidden font-sans selection:bg-white selection:text-black">

      {/* --- LEFT SIDE: STICKY CONTENT --- */}
      <div className="w-full md:w-[40%] p-10 md:p-20 flex flex-col justify-between sticky top-0 max-h-screen">
        <div>
          <h2 className="text-6xl font-bold tracking-tighter mb-16 italic">Cases</h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <h3 className="text-3xl font-bold">{cases[activeCase].title}</h3>
                <span className="px-3 py-1 border border-zinc-700 rounded-full text-[10px] uppercase tracking-widest text-zinc-400">
                  {cases[activeCase].tag}
                </span>
              </div>

              <div className="space-y-6 max-w-sm">
                <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                  {cases[activeCase].description}
                </p>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {cases[activeCase].details}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <div className="flex gap-4">
          {cases.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveCase(index)}
              className={`w-12 h-12 rounded-full border transition-all flex items-center justify-center font-bold text-sm ${activeCase === index
                ? "bg-white text-black border-white"
                : "bg-transparent text-white border-zinc-800 hover:border-zinc-500"
                }`}
            >
              {item.id}
            </button>
          ))}
        </div>
      </div>

      {/* --- RIGHT SIDE: IMAGE & GIANT TEXT --- */}
      <div className="w-full md:w-[50%] relative max-h-screen h-130 m-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            {/* Background Image */}
            <img
              src={cases[activeCase].image}
              className="w-full h-full object-cover grayscale-[0.2]"
              alt={cases[activeCase].title}
            />

            {/* Giant Overlapping Text (RIZE) */}
            <div className="absolute inset-0 flex items-end justify-center pb-10 overflow-hidden">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-[25vw] font-[1000] tracking-tighter text-white leading-none select-none"
              >
                {cases[activeCase].bgText}
              </motion.h1>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-10 pointer-events-none">
              <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center pointer-events-auto backdrop-blur-sm hover:bg-white hover:text-black transition-all">
                ←
              </button>
              <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center pointer-events-auto backdrop-blur-sm hover:bg-white hover:text-black transition-all">
                →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
};

export default CaseStudySection;