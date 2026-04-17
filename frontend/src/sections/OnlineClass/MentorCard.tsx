import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Mentor } from './data';

const MentorCard: React.FC<{ mentor: Mentor }> = React.memo(({ mentor }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={`group/card relative w-[320px] bg-[#F8F9FB] rounded-[40px] p-8 border border-transparent transition-all duration-500 ${mentor.border} overflow-hidden cursor-pointer`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${mentor.lightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 mb-8 flex items-center justify-between w-full">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-16 h-16 rounded-[22px] bg-[#2D3142] flex items-center justify-center text-xl font-bold text-white group-hover/card:${mentor.accent} transition-colors duration-500 shadow-xl relative overflow-hidden`}
        >
          {/* moving shine omitted for brevity */}
          <div className="absolute inset-0 animate-[spin_3s_linear_infinite] opacity-20">
            <div className="w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0" />
          </div>
          <span className="relative z-10 text-sm">{mentor.name.split(' ')[0][0]}</span>
        </motion.div>
        <div className="text-right">
          <p className="text-sm font-bold text-[#2D3142]">{mentor.expert}</p>
          <p className="text-xs text-slate-500">{mentor.company}</p>
        </div>
      </div>
      <svg className="absolute -bottom-4 -right-4 w-24 h-24 opacity-5 group-hover/card:opacity-20 transition-all duration-700  group-hover/card:scale-150" viewBox="0 0 100 100">
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="20" className={mentor.text} />
      </svg>
    </motion.div>
  );
});

export default MentorCard;
