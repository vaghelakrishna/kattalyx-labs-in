import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Play, Star, Layers } from 'lucide-react';
import { categories, trendingSections } from './data';

const KnowledgeBase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredCategoryClasses = React.useMemo(
    () => trendingSections.find((s) => s.category === activeCategory)?.classes || [],
    [activeCategory]
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
          Knowledge Base
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
          Pick one <span className="text-blue-600">Topic</span>
        </h2>
        <p className="text-slate-500 font-medium max-w-md">
          Select a category to discover specialized masterclasses tailored to your goals.
        </p>
      </div>

      {/* Category Selection Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-2xl text-xs font-black transition-all duration-300 border-2 ${activeCategory === cat
                ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-200 scale-105'
                : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200 hover:text-slate-600'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* The "Opened" Cards Grid */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCategoryClasses.length > 0 ? (
              filteredCategoryClasses.map((cls, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="group bg-white border border-slate-200 rounded-[2.5rem] p-4 transition-all duration-500 hover:border-blue-400 hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.15)] cursor-pointer"
                >
                  {/* Media */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-6">
                    <img
                      src={cls.img}
                      alt={cls.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Course+Image';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform scale-90 group-hover:scale-100 transition-all">
                        <Play size={20} className="text-white fill-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl flex items-center gap-1 shadow-sm">
                      <Star size={10} fill="#FACC15" className="text-yellow-400" />
                      <span className="text-slate-900 text-[10px] font-black">{cls.rating}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="px-2 pb-2">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-lg">
                        {cls.provider}
                      </span>
                      <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                        {cls.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2 h-14">
                      {cls.title}
                    </h3>
                    <div className="border-t border-slate-50 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Start Learning</span>
                        <span className="text-sm font-black text-slate-900">View Details</span>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full py-32 text-center">
                <div className="inline-flex flex-col items-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mb-4 text-slate-300">
                    <Layers size={32} />
                  </div>
                  <p className="text-slate-400 font-black uppercase text-xs tracking-widest">
                    Classes for {activeCategory} are coming soon
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default KnowledgeBase;
