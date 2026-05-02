import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import Event1 from '../../assets/events/Event1.webp';
import Event2 from '../../assets/events/Event2.webp';
import Event3 from '../../assets/events/Event3.webp';
import Event4 from '../../assets/events/Event4.webp';
import Event5 from '../../assets/events/Event5.webp';
import Event6 from '../../assets/events/Event6.webp';
import Event7 from '../../assets/events/Event7.webp';
import Event8 from '../../assets/events/Event8.webp';
import Event10 from '../../assets/events/Event10.webp';
import Event11 from '../../assets/events/Event11.webp';
import Event12 from '../../assets/events/Event12.webp';
import Event15 from '../../assets/events/Event15.webp';
import Event16 from '../../assets/events/Event16.webp';
import { useRef } from 'react';

const images = [
  Event1,
  Event2,
  Event3,
  Event4,
  Event5,
  Event6,
  Event7,
  Event8,
  Event10,
  Event11,
  Event12,
  Event15,
  Event16

];
const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { damping: 15, stiffness: 150 });
  const mouseY = useSpring(y, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set(clientX - (left + width / 2));
    y.set(clientY - (top + height / 2));
  };


  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: mouseX, y: mouseY }}
      className="relative inline-block"
    >
      {children}
    </motion.div>
  );
};
const LightInfiniteBurst = () => {
  return (
    <section className="relative min-h-screen mt-15 w-full  flex items-center justify-center overflow-hidden font-sans ">

      {/* --- Infinite Burst Layer --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {images.map((src, index) => {
          // Circle distribution logic
          const angle = (index / images.length) * Math.PI * 2;
          const targetX = Math.cos(angle) * 900; // Moving far out
          const targetY = Math.sin(angle) * 600;

          return (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0, x: 0, y: 0, rotate: 0 }}
              animate={{
                scale: [0, 1, 1.3],       // Growing from center
                opacity: [0, 1, 1, 0],    // Fade in -> hold -> fade out at edges
                x: targetX,
                y: targetY,
                rotate: index % 2 === 0 ? 15 : -15 // Alternating tilt
              }}
              transition={{
                duration: 6,              // Smooth slow travel
                repeat: Infinity,
                delay: index * 0.75,      // Seamless staggered entry
                ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for "prestige" feel
              }}
              className="absolute w-[220px] md:w-[320px] z-10"
            >
              <img
                src={src}
                alt="Studio Work"
                // Light theme requires soft shadows (black/5) and a thin border
                className="w-full h-auto rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-white"
              />
            </motion.div>
          );
        })}
      </div>

      {/* --- Main Content (High Contrast) --- */}
      <div className="relative z-50 text-center flex flex-col items-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-[#111111] text-6xl md:text-[70px] font-bold tracking-tighter leading-[0.85] mb-12">
            Your Institution Deserves <br />
            <span className="text-zinc-400">a Brand That Commands Respect.</span>
          </h1>

          <div className="flex flex-col items-center gap-8">
            <Link to="/contact">  
              <MagneticButton>
                <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-indigo-600 transition-all duration-300 shadow-2xl shadow-indigo-200 active:scale-95">
              Book a Call                </button>
              </MagneticButton>
            </Link>

          </div>
        </motion.div>


      </div>

      {/* Optional: Soft background noise or gradient for extra "Prestige" */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

    </section>
  );
};

export default LightInfiniteBurst;