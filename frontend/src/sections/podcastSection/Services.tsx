import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Precise card data from screenshots
const challengeCards = [
  { color: "#FFADF0", text: "You don't have a design team", rotate: -5 },
  { color: "#A0D2FF", text: "You're launching next week", rotate: 8 },
  { color: "#C4FF8E", text: "You need assets fast", rotate: -3 },
  { color: "#FFE16A", text: "You're tired of chasing freelancers", rotate: 6 },
];

const PremiumPortfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Sticky Reveal Logic
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-20%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <main className="bg-white font-sans antialiased selection:bg-black selection:text-white">
      

      {/* SECTION 2: STICKY CHALLENGES (LIGHT THEME) */}
      <section ref={containerRef} className="relative h-[300vh] bg-white">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-8 md:px-20">
          
          {/* Background Text */}
          <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <h2 className="text-[8vw] font-black text-black leading-[0.8] tracking-tighter uppercase whitespace-nowrap ">
              WHAT <br /> CHALLENGES <br /> WE TACKLE
            </h2>
          </motion.div>

          {/* Intro Info */}
          <div className="relative z-20 mb-40 self-start">
            <h3 className="text-4xl font-bold mb-4 tracking-tight">This will help if:</h3>
            <p className="text-zinc-500 text-lg max-w-sm leading-snug">
              You've got work to get done. We're here to take the creative tasks off your plate.
            </p>
          </div>

          {/* Horizontal Sliding Cards */}
          <motion.div style={{ x }} className="relative z-30 flex gap-10 items-center pl-[20%]">
            {challengeCards.map((card, i) => (
              <div 
                key={i}
                style={{ backgroundColor: card.color, rotate: `${card.rotate}deg` }}
                className="min-w-[340px] h-[220px] p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between border border-black/5"
              >
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-white rounded-full translate-x-[1px] translate-y-[-1px]" />
                </div>
                <p className="text-black font-bold text-2xl leading-tight tracking-tight">
                  {card.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      

    </main>
  );
};

export default PremiumPortfolio;