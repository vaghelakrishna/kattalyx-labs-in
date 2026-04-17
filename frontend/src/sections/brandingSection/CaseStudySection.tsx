import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cases = [
  {
    id: "01",
    title: "Rize",
    tag: "Fintech brand",
    description: "RIZE — a bold fintech brand making crypto spending as easy as tapping a card.",
    details: "Built around a glass prism that symbolizes instant crypto-to-fiat conversion, the brand combines smart symbolism with vibrant, unconventional visuals.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    bgText: "RIZE"
  },
  {
    id: "02",
    title: "Kattalyx",
    tag: "Creative Lab",
    description: "Next-gen creative solutions for technical founders and prestige brands.",
    details: "Focusing on high-end editorial layouts and liquid motion, Kattalyx redefines the standard for modern web design aesthetics.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
    bgText: "LABS"
  }
];

const CaseStudySection = () => {
  const [activeCase, setActiveCase] = useState(0);

  // --- LOGIC: NEXT & PREV FUNCTIONS ---
  const handleNext = () => {
    setActiveCase((prev) => (prev + 1) % cases.length);
  };

  const handlePrev = () => {
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="min-h-screen bg-black text-white flex flex-col md:flex-row overflow-hidden font-sans">

      {/* LEFT CONTENT (Sticky) */}
      <div className="w-full md:w-[40%] p-10 md:p-20 flex flex-col justify-between sticky top-0 h-screen z-20 bg-black">
        <div>
          <h2 className="text-6xl font-bold tracking-tighter mb-16 italic">Cases</h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <h3 className="text-3xl font-bold">{cases[activeCase].title}</h3>
                <span className="px-3 py-1 border border-zinc-700 rounded-full text-[10px] uppercase tracking-widest text-zinc-400">
                  {cases[activeCase].tag}
                </span>
              </div>
              <div className="space-y-6 max-w-sm">
                <p className="text-zinc-400 text-lg leading-relaxed font-medium">{cases[activeCase].description}</p>
                <p className="text-zinc-600 text-sm leading-relaxed">{cases[activeCase].details}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-4">
          {cases.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveCase(index)}
              className={`w-12 h-12 rounded-full border transition-all flex items-center justify-center font-bold text-sm ${activeCase === index ? "bg-white text-black border-white" : "bg-transparent text-white border-zinc-800"
                }`}
            >
              {item.id}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: IMAGE & GIANT TEXT */}
      <div className="w-full md:w-[60%] relative h-screen z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full relative"
          >
            <img src={cases[activeCase].image} className="w-full h-full object-cover grayscale-[0.3]" alt="case" />

            <div className="absolute inset-0 flex items-end justify-center pb-10 overflow-hidden">
              <motion.h1
                key={`text-${activeCase}`}
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }}
                className="text-[25vw] font-[1000] tracking-tighter text-white leading-none pointer-events-none"
              >
                {cases[activeCase].bgText}
              </motion.h1>
            </div>

            {/* --- WORKING ARROWS --- */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-10 pointer-events-none">
              <button
                onClick={handlePrev}
                className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center pointer-events-auto backdrop-blur-md hover:bg-white hover:text-black transition-all active:scale-90"
              >
                <span className="text-2xl">←</span>
              </button>
              <button
                onClick={handleNext}
                className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center pointer-events-auto backdrop-blur-md hover:bg-white hover:text-black transition-all active:scale-90"
              >
                <span className="text-2xl">→</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudySection;