import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Brand Identity Design",
    desc: "Building strong visual identities that reflect personality and voice.",
    img: "https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?w=300&h=180&fit=crop",
  },
  {
    id: "02",
    title: "Web Design & Development",
    desc: "Powerful branding that captures attention and builds trust.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=180&fit=crop",
  },
  {
    id: "03",
    title: "UI/UX Design",
    desc: "Intuitive interfaces and seamless user experiences that keep users engaged.",
    img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?w=300&h=180&fit=crop",
  },
  {
    id: "04",
    title: "Digital Marketing",
    desc: "Scaling brands through data-driven positioning and creative content.",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=180&fit=crop",
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
              With every client, we bring forth a deep passion for solving problems and moving thinking boundaries.
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