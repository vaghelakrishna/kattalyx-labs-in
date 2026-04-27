import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Premium high-quality images for a design studio vibe
const images = [
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
];

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
            <button className="bg-[#111111] text-white px-14 py-5 rounded-full font-semibold text-xl hover:scale-105 transition-transform duration-300 shadow-xl active:scale-95">
              Book a Call
            </button>
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