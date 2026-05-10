import { TOP_EVENTS } from '@/data/events';
import  { useState } from 'react'
  import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
export default function Hero() {

    const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % TOP_EVENTS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + TOP_EVENTS.length) % TOP_EVENTS.length);

  return (
    <div>
      <section className="relative w-full px-4 pt-28 pb-10 bg-[#FBFCFE]">
        {/* Main Container - Responsive Height */}
        <div className="relative min-h-[500px] md:h-[80vh] w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-slate-900 shadow-2xl shadow-blue-900/10">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              {/* Background Image with refined overlay */}
              <img
                src={TOP_EVENTS[currentSlide].image}
                className="h-full w-full object-cover opacity-50 md:opacity-60"
                alt="Event Spotlight"
              />
              {/* Multilayered Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent hidden md:block" />
            </motion.div>
          </AnimatePresence>

          {/* Content Area - Flexbox for perfect mobile centering */}
          <div className="relative h-full w-full flex flex-col justify-end p-6 md:p-16 lg:p-24">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl"
            >
              {/* Floating Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-6 md:mb-8">
                {/* <span className="bg-blue-600 text-white text-[10px] md:text-xs font-black px-3 py-1 rounded-lg uppercase tracking-widest">
                  Live Now
                </span> */}
                <div className="flex items-center gap-4 text-white/70 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-blue-500" /> {TOP_EVENTS[currentSlide].date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-blue-500" /> {TOP_EVENTS[currentSlide].location}
                  </span>
                </div>
              </div>

              {/* Dynamic Typography - Fluid scaling */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1] md:leading-[0.9] mb-8 md:mb-12">
                {TOP_EVENTS[currentSlide].title}
              </h1>

              {/* Action Buttons - Stacked on mobile, row on desktop */}
              {/* <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Get Tickets <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
                  Learn More
                </button>
              </div> */}
            </motion.div>
          </div>

          {/* Navigation Controls - Relocated for better thumb reach on mobile */}
          <div className="absolute top-6 right-6 md:top-auto md:bottom-10 md:right-10 flex flex-col md:flex-row items-center gap-4">
            {/* Slide Indicator Dots */}
            <div className="flex md:flex-row gap-2 mb-2 md:mb-0">
              {TOP_EVENTS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 transition-all duration-300 rounded-full ${currentSlide === i ? 'w-8 bg-blue-500' : 'w-2 bg-white/30'}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-3 md:p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 text-white hover:bg-white hover:text-slate-900 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 md:p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 text-white hover:bg-white hover:text-slate-900 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
   </div>
  )
}
