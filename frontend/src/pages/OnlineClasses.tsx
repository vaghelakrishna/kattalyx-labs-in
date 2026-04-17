
import React from 'react';
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
} from "lucide-react";

// local components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Slider from '@/sections/OnlineClass/Slider';
import WhyKattalyx from '@/sections/OnlineClass/WhyKattalyx';

// section sub-components
import KnowledgeBase from '@/sections/OnlineClass/KnowledgeBase';
import TrendingClasses from '@/sections/OnlineClass/TrendingClasses';
import UpcomingClasses from '@/sections/OnlineClass/UpcomingClasses';
import ExpertNetwork from '@/sections/OnlineClass/ExpertNetwork';
import Partners from '@/sections/OnlineClass/Partners';
import HeroSection from '@/sections/OnlineClass/HeroSection';
import FAQSection from '@/components/FAQ';



const floating: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as any // cast to satisfy Easing type
    }
  }
};

// simple data used by the LiveLabs section below
const liveLabsClasses = [
  {
    title: "Quantum UI Architectures",
    provider: "CyberDyne",
    category: "Design",
    price: "199",
    color: "bg-blue-600",
    lightColor: "bg-blue-50/80",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800",
  },
  {
    title: "Neural Network Alchemy",
    provider: "Vercel Elite",
    category: "Development",
    price: "249",
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50/80",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800",
  },
  {
    title: "Spatial Product Design",
    provider: "Visionary",
    category: "Product",
    price: "159",
    color: "bg-purple-600",
    lightColor: "bg-purple-50/80",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800",
  }
];

export default function OnlineClasses() {
  // all interactive state now lives inside the individual section components




  return (
    <div className="bg-white font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      
      <HeroSection />

      <Slider />

      <WhyKattalyx />

      {/* Knowledge Base Categories section moved to separate component */}
      <KnowledgeBase />

      {/* Trending classes moved to its own component */}
      <TrendingClasses />


      {/* Upcoming classes section now extracted */}
      <UpcomingClasses />
      {/* expert network and partner stream have been refactored */}
      <ExpertNetwork />
      <Partners />
      {/* render live labs section */}
      <LiveLabsSection />

      <section className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Purple Card */}
          <div className="relative overflow-hidden bg-[#8B5CF6] rounded-[2.5rem] py-24 px-8 text-center flex flex-col items-center justify-center min-h-[450px]">

            {/* Decorative Floating Avatars */}
            {/* Top Left - Green Squareish */}
            <motion.div
              variants={floating}
              initial="initial"
              animate="animate"
              className="absolute top-10 left-[10%] hidden lg:block"
            >
              <div className="w-20 h-20 bg-[#7EE7C7] rounded-2xl rotate-[-10deg] overflow-hidden border-4 border-white/20">
                <img src="https://i.pravatar.cc/150?u=1" alt="student" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Top Right - Orange Hexagon */}
            <motion.div
              variants={floating}
              initial="initial"
              animate="animate"
              className="absolute top-12 right-[12%] hidden lg:block"
              style={{ transitionDelay: '0.5s' }}
            >
              <div className="w-20 h-20 bg-[#FCA5A5] rounded-[2rem] rotate-[15deg] overflow-hidden border-4 border-white/20">
                <img src="https://i.pravatar.cc/150?u=2" alt="student" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Bottom Left - Red Octagon-ish */}
            <motion.div
              variants={floating}
              initial="initial"
              animate="animate"
              className="absolute bottom-10 left-[20%] hidden lg:block"
              style={{ transitionDelay: '1s' }}
            >
              <div className="w-24 h-24 bg-[#F87171] rounded-full overflow-hidden border-4 border-white/20">
                <img src="https://i.pravatar.cc/150?u=3" alt="student" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Bottom Right - Green Star-ish */}
            <motion.div
              variants={floating}
              initial="initial"
              animate="animate"
              className="absolute bottom-12 right-[15%] hidden lg:block"
              style={{ transitionDelay: '1.5s' }}
            >
              <div className="w-24 h-24 bg-[#86EFAC] rounded-3xl rotate-[-5deg] overflow-hidden border-4 border-white/20">
                <img src="https://i.pravatar.cc/150?u=4" alt="student" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-10">
                Take the First Step – <br />
                Start Learning Today!
              </h2>

              <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection/>
      <Footer />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  @keyframes scroll-hint {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(200%); }
  }
  .animate-scroll-hint {
    animation: scroll-hint 2s infinite ease-in-out;
  }
      `}
      </style>
    </div>
  );
}


// small independent section for the ad-hoc 'Live Labs' grid
const LiveLabsSection: React.FC = () => (
  <section className="relative w-full py-18 bg-white overflow-hidden font-sans">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center mb-10 border-b border-slate-50 pb-8">
        <div>
          <span className="text-[#3EC1A1] text-[10px] font-black uppercase tracking-[0.3em] mb-1 block">Live Labs</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#2D3142] tracking-tighter">
            TRENDING <span className="text-blue-600 italic">INTEL</span>
          </h2>
        </div>
        <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">
          View Catalog +
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {liveLabsClasses.map((cls, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-[#F8F9FB] rounded-[32px] p-3 transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]"
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] ${cls.lightColor}`} />
            <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden mb-5 z-10">
              <img
                src={cls.img}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl shadow-sm">
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#2D3142]">
                    {cls.category}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative z-10 px-3 pb-3">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-1 h-1 rounded-full ${cls.color}`} />
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{cls.provider}</span>
              </div>
              <h3 className="text-xl font-black text-[#2D3142] leading-tight mb-6 line-clamp-1 group-hover:text-blue-600 transition-colors">
                {cls.title}
              </h3>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100/50">
                <span className="text-lg font-black text-[#2D3142]">${cls.price}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 bg-[#2D3142] text-white rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-all shadow-md"
                >
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

