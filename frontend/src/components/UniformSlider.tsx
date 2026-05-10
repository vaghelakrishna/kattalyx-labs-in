import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoveLeft, MoveRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    label: 'AI & Machine Learning',
    title: 'COMPREHENSIVE TESTING OF PERFORMANCE MARKERS AND BIOMARKERS',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
  },
  {
    id: '02',
    label: 'Startup & Entrepreneurship',
    title: 'AI-POWERED ANALYSIS OF YOUR COMPLETE HEALTH PROFILE',
    img: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80',
  },
  {
    id: '03',
    label: 'Financial Literacy',
    title: 'PERSONALIZED TRAINING AND NUTRITION OPTIMIZATION',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
  },
  {
    id: '04',
    label: 'Digital Marketing',
    title: 'REAL-TIME MONITORING AND PROTOCOL ADJUSTMENTS',
    img: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80',
  },
   {
    id: '05',
    label: 'Cyber Awareness',
    title: 'COMPREHENSIVE TESTING OF PERFORMANCE MARKERS AND BIOMARKERS',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
  },
  {
    id: '06',
    label: 'Emotional Intelligence',
    title: 'AI-POWERED ANALYSIS OF YOUR COMPLETE HEALTH PROFILE',
    img: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80',
  },
  {
    id: '07',
    label: 'Leadership & Strategic Thinking',
    title: 'PERSONALIZED TRAINING AND NUTRITION OPTIMIZATION',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
  },
  {
    id: '08',
    label: 'Coding & Tech Explorers',
    title: 'REAL-TIME MONITORING AND PROTOCOL ADJUSTMENTS',
    img: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80',
  },
  {
    id: '09',
    label: 'Mental Health & Psychology',
    title: 'PERSONALIZED TRAINING AND NUTRITION OPTIMIZATION',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
  },
  {
    id: '10',
    label: 'Career Counselling',
    title: 'REAL-TIME MONITORING AND PROTOCOL ADJUSTMENTS',
    img: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80',
  },
    {
    id: '11',
    label: 'Public Speaking',
    title: 'PERSONALIZED TRAINING AND NUTRITION OPTIMIZATION',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
  },
  {
    id: '12',
    label: 'Career Counselling',
    title: 'REAL-TIME MONITORING AND PROTOCOL ADJUSTMENTS',
    img: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80',
  },
];

export default function UniformSlider() {
  const [index, setIndex] = useState(0);

  // Card dimensions defined here for consistency
  const cardWidth = "w-[580px]";
  const cardHeight = "h-[420px]";

  const next = () => setIndex((prev) => (prev + 1) % steps.length);
  const prev = () => setIndex((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <div className="min-h-screen bg-[#111111] text-white p-8 md:p-20 overflow-hidden font-sans selection:bg-white selection:text-black">
      {/* Grainy Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="flex-1">
            <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-bold mb-4">Your Journey To</p>
            <h1 className="text-6xl md:text-[100px] font-bold uppercase tracking-tighter leading-[0.8] mix-blend-difference">
              Peak <br /> Performance
            </h1>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
            >
              <MoveLeft size={28} strokeWidth={1.5} />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
            >
              <MoveRight size={28} strokeWidth={1.5} />
            </button>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex gap-1 mb-12 bg-white/5 p-1 rounded-full w-fit backdrop-blur-sm border border-white/10">
          {steps.map((step, i) => (
            <button
              key={step.id}
              onClick={() => setIndex(i)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${index === i ? 'bg-white text-black' : 'text-gray-500 hover:text-white'
                }`}
            >
              {step.id} {step.label}
            </button>
          ))}
        </nav>

        {/* Slider Track */}
        <div className="relative flex gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {/* Displaying a loop of cards */}
            {[0, 1, 2, 3].map((offset) => {
              const itemIndex = (index + offset) % steps.length;
              const item = steps[itemIndex];
              const isActive = offset === 0;

              return (
                <motion.div
                  key={`${item.id}-${itemIndex}`}
                  layout
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: "spring", damping: 25, stiffness: 150 }}
                  className={`relative flex-shrink-0 rounded-[2.5rem] overflow-hidden flex ${cardWidth} ${cardHeight} ${isActive ? 'bg-white text-black' : 'bg-[#1a1a1a] text-white opacity-40'
                    }`}
                >
                  {/* Left Side: Content */}
                  <div className="w-1/2 p-10 flex flex-col justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? 'opacity-40' : 'opacity-20'}`}>
                      {item.id} {item.label}
                    </span>
                    <h3 className="text-3xl font-bold leading-[1.1] uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Right Side: Image Container */}
                  <div className="w-1/2 p-4">
                    <div className="w-full h-full rounded-[2rem] overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className={`w-full h-full object-cover transition-all duration-1000 ${isActive ? 'scale-100' : 'scale-110 grayscale'}`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}