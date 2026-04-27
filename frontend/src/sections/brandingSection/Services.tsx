import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Website Development",
    desc: "We build fast, SEO-optimized websites that transform your institution's digital first impression into a position of leadership.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop", 
  },
  {
    id: "02",
    title: "App Development",
    desc: "Custom mobile apps that put your institution in every pocket—streamlining communication, fees, and engagement in one branded experience.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop", 
  },
  {
    id: "03",
    title: "Digital Marketing",
    desc: "Data-driven strategies and creative campaigns that put your institution in front of the right families to drive consistent admissions.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", 
  },
  {
    id: "04",
    title: "Brand Strategy & Identity",
    desc: "Complete visual systems and brand guidelines that make your institution instantly recognizable and deeply trusted across every touchpoint.",
    img: "https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?w=600&h=400&fit=crop", 
  }
];

const SleekServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-black min-h-screen text-zinc-100 py-16 px-6 md:px-20 font-sans antialiased">
      <div className="max-w-6xl mx-auto">

        {/* Header Section - Reduced Sizes */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full" />
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-none italic">
              What we offer
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              We do not just build websites and apps. We build the complete digital identity of your institution.
            </p>
            <button className="group flex items-center gap-3 border border-zinc-800 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-all duration-300">
              <span className="text-[10px] font-bold uppercase tracking-widest">Let's Talk</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* List Body - Thin Lines */}
        <div className="border-t-[0.5px] border-zinc-800/60">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative border-b-[0.5px] border-zinc-800/60 py-8 flex flex-col md:flex-row items-center justify-between group transition-all duration-500 cursor-pointer"
            >
              {/* Left Side Content */}
              <div className="flex items-center gap-6 md:gap-12 z-10 w-full md:w-auto">
                <span className="text-zinc-600 font-mono text-sm group-hover:text-blue-500 transition-colors">
                  {service.id}
                </span>

                <div className="flex items-center gap-4">
                  {/* Minimized Image Reveal */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 100, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="hidden lg:block h-14 overflow-hidden rounded-xl shadow-2xl border border-white/5"
                      >
                        <img
                          src={service.img}
                          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-700"
                          alt=""
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Right Side Description & Action */}
              <div className="mt-4 md:mt-0 flex items-center gap-12 z-10 w-full md:w-auto justify-between md:justify-end">
                <p className="max-w-[240px] text-[13px] text-zinc-500 group-hover:text-zinc-400 transition-colors leading-snug">
                  {service.desc}
                </p>

                <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300">
                  <ArrowRight size={14} />
                </div>
              </div>

              {/* Subtle Overlay Highlight */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SleekServices;