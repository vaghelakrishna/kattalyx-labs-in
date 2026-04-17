import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { upcomingClasses } from './data';

const UpcomingClasses: React.FC = () => (
  <section className="max-w-7xl mx-auto px-6 py-24">
    <div className="flex flex-col items-center text-center mb-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-4">
        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Our Specializations</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">
        Upcoming <span className="underline decoration-blue-600"><DoubleUnderline text="Classes" /></span>
      </h2>
    </div>

    <div className="min-h-[500px]">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {upcomingClasses.map((cls, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group bg-white border border-slate-100 rounded-[3rem] p-5 transition-all duration-500 hover:border-blue-200 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.2rem] mb-6 bg-slate-100">
                <img
                  src={cls.img}
                  alt={cls.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-black text-white px-4 py-1.5 rounded-2xl flex flex-col items-center shadow-lg">
                  <span className="text-[8px] font-black uppercase tracking-tighter opacity-70">Starts</span>
                  <span className="text-xs font-black">{cls.startDate}</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-2xl flex items-center gap-1.5 shadow-sm">
                  <Star size={12} fill="#FACC15" className="text-yellow-400" />
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.15em] bg-blue-50 px-3 py-1 rounded-lg">
                    {cls.provider}
                  </span>
                </div>
                <h4 className="text-xl font-black text-slate-900 leading-tight mb-6 line-clamp-2 h-14 group-hover:text-blue-600 transition-colors">
                  {cls.title}
                </h4>
                <div className="flex items-center justify-between pt-5 border-t border-slate-50">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Cohort Type</span>
                    <span className="text-sm font-black text-slate-900">{cls.type}</span>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-[-45deg] transition-all duration-300">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  </section>
);

export default UpcomingClasses;

const DoubleUnderline = React.memo(({ text }: { text: string }) => (
  <span className="relative inline-block px-1">
    <span className="relative z-10 italic">{text}</span>
    <svg
      className="absolute -bottom-2 left-0 w-full h-4 pointer-events-none"
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
    >
      {/* First stroke */}
      <motion.path
        d="M5 12C20 12 40 10 95 12"
        stroke="#2563eb" // blue-600
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      {/* Second messy stroke */}
      <motion.path
        d="M2 16C30 16 60 14 98 15"
        stroke="#2563eb"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      />
    </svg>
  </span>
));