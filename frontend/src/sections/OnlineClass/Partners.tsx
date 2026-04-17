import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { partners } from './data';

const Partners: React.FC = () => {
  const duplicatedPartners = useMemo(() => [...partners, ...partners, ...partners], []);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6"
        >
          <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            Our Partners
          </span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D3142] tracking-tight mb-6">
          Our Trusted <span className="underline decoration-[#FACC15]"><WideUnderline text="Partners" color="#FACC15" /></span>
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          We collaborate with industry leaders and organizations to bring you the best resources, expertise, and opportunities for success.
        </p>
      </div>
      <div className="relative w-full overflow-hidden flex items-center py-6">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' } }}
        >
          {duplicatedPartners.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                {p.icon}
              </div>
              <span className="text-xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors tracking-tighter uppercase">
                {p.brand}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;


const WideUnderline = ({ text, color }: { text: string; color: string }) => (
  <span className="relative inline-block">
    <span className="relative z-10">{text}</span>
    <svg
      className="absolute -bottom-2 left-0 w-full h-3 pointer-events-none"
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 15 Q 25 5, 50 15 T 100 15"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </svg>
  </span>
);

