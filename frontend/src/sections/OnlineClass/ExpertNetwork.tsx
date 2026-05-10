import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import MentorCard from './MentorCard';
import { mentors } from './data';

const ExpertNetwork: React.FC = () => {
  const duplicatedMentors = useMemo(() => [...mentors, ...mentors, ...mentors], []);
  const mentorScrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <span className="text-[#3EC1A1] text-sm font-bold tracking-[0.3em] uppercase mb-3 block">Expert Network</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D3142] tracking-tight">
            Learn from <span className="text-blue-600">                <PowerUnderline text="Titans." color="#2563eb" />
</span>
          </h2>
        </div>
        <button className="group flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-[#2D3142] transition-all uppercase tracking-[0.2em]">
          View All Mentors <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="relative flex overflow-hidden py-12">
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <motion.div
          ref={mentorScrollRef}
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1200] }}
          transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' } }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {duplicatedMentors.map((mentor, i) => (
            <MentorCard key={i} mentor={mentor} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertNetwork;

const PowerUnderline = React.memo(({ text, color = "#2563eb" }: { text: string; color?: string }) => (
  <span className="relative inline-block">
    <span className="relative z-10">{text}</span>
    <motion.div
      style={{ backgroundColor: color + "33" }}
      className="absolute -bottom-1 left-0 w-full h-3 blur-sm -z-0"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.5 }}
    />
    <motion.div
      style={{ backgroundColor: color }}
      className="absolute -bottom-1 left-0 w-full h-1 -z-0"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    />
  </span>
));