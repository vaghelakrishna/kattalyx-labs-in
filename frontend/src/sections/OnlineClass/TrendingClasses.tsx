import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { curatedCurriculum, allAvailableClasses } from './data';

const TrendingClasses: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 3);

  return (
    <section className="w-full bg-[#FCFCFC] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
        {/* Header & Search are assumed handled externally if needed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {curatedCurriculum.flatMap((section) =>
            section.classes.slice(0, visibleCount).map((cls, idx) => (
              <motion.article
                key={`${cls.title}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="group bg-white rounded-[2rem] p-3 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-slate-100 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#BDC8B3] flex items-center justify-center">
                  <img
                    src={cls.img}
                    alt={cls.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 bg-white pt-3 pb-5 px-7 rounded-bl-[2.2rem] z-20 shadow-sm min-w-[100px] text-center">
                    <span className="text-[11px] font-black text-slate-900 uppercase tracking-wider">
                      {section.category}
                    </span>
                    <div className="absolute top-0 -left-[32px] w-[32px] h-[32px] bg-transparent rounded-tr-[1rem] shadow-[15px_-15px_0_0_white] pointer-events-none" />
                    <div className="absolute -bottom-[32px] right-0 w-[32px] h-[32px] bg-transparent rounded-tr-[1rem] shadow-[15px_-15px_0_0_white] pointer-events-none" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-black/20 backdrop-blur-md py-2 text-center">
                    <p className="text-[8px] md:text-[9px] font-black text-white uppercase tracking-[0.2em]">
                      {cls.type} Enrollment
                    </p>
                  </div>
                </div>
                <div className="px-2 pt-5 pb-2 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <div className="flex-1">
                      <p className="text-[#7A866E] text-[9px] font-black uppercase tracking-widest mb-1">
                        {cls.provider}
                      </p>
                      <h3 className="text-base md:text-lg font-bold text-slate-900 leading-tight tracking-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {cls.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-slate-900 border-b-2 border-slate-900 pb-0.5 group-hover:text-blue-600 group-hover:border-blue-600 transition-all shrink-0 mt-1">
                      <span className="text-[9px] font-black uppercase tracking-tight">Enroll</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="bg-[#F1F3EE] text-[#7A866E] text-[9px] font-black px-3 py-1.5 rounded-full flex items-center gap-1">
                      ★ {cls.rating} Rating
                    </span>
                    <span className="bg-slate-50 text-slate-400 text-[9px] font-black px-3 py-1.5 rounded-full">
                      Full Access
                    </span>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </div>
        {visibleCount < allAvailableClasses.length && (
          <div className="mt-12 md:mt-20 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="group relative px-10 md:px-12 py-3 md:py-4 bg-black border-2 border-slate-900 rounded-full overflow-hidden text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span className="relative z-10 flex items-center gap-3 font-bold text-xs md:text-sm uppercase tracking-widest">
                View More Classes
              </span>
              <div className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingClasses;
