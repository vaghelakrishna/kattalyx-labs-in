
import { motion } from 'framer-motion';
import {   Calendar, MapPin, Users, Star, X, Globe,  Briefcase, type LucideIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {  POPULAR_EVENTS, UNI_EVENTS } from '@/data/events';
import Event1 from '@/assets/events/Event1.webp';
import Event2 from '@/assets/events/Event2.webp';
import Event3 from '@/assets/events/Event3.webp';
import Event4 from '@/assets/events/Event4.webp';
import Event5 from '@/assets/events/Event5.webp';
import Event6 from '@/assets/events/Event6.webp';
import Event7 from '@/assets/events/Event7.webp';
import Event8 from '@/assets/events/Event8.webp';
import Event10 from '@/assets/events/Event10.webp';
import Event11 from '@/assets/events/Event11.webp';
import Event12 from '@/assets/events/Event12.webp';
import Event15 from '@/assets/events/Event15.webp';
import Event16 from '@/assets/events/Event16.webp';
import { useState } from 'react';
import FAQSection from '@/components/FAQ';
import Hero from '@/sections/event/Hero';
import { WorkMarquee5Col } from '@/sections/event/WorkMarquee5Col';
import { Marquee } from '@/sections/event/Marquee';
import AllEvents from './AllEvents';




interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

const STATS: StatItem[] = [
  {
    label: "Total Events",
    value: "20+",
    icon: Briefcase,
    color: "from-indigo-500 to-purple-600"
  },
  {
    label: "Students Reached",
    value: "10K+",
    icon: Users,
    color: "from-blue-600 to-indigo-700"
  },
  {
    label: "Schools & Institutions",
    value: "12+",
    icon: Globe,
    color: "from-slate-800 to-slate-900"
  },
  {
    label: "Event Feedback",
    value: "9.4/10",
    icon: Star,
    color: "from-yellow-400 to-orange-500"
  }
];


// Extract icons as Capitalized Components for TSX compliance
const Icon0 = STATS[0].icon;
const Icon1 = STATS[1].icon;
const Icon2 = STATS[2].icon;
const Icon3 = STATS[3].icon;



const EventPortfolio = () => {
  const [visibleEvents, setVisibleEvents] = useState(8);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);


  // const stories = [
  //   {
  //     student: "Rohan Mehta",
  //     school: "DPS Ghaziabad",
  //     achievement: "Secured internship at Google after our AI workshop",
  //     tag: "Tech Placement",
  //     color: "bg-blue-500",
  //     img: DU1
  //   },
  //   {
  //     student: "Sneha Kapoor",
  //     school: "Ryan International",
  //     achievement: "Started her tech startup after the Summit",
  //     tag: "Entrepreneurship",
  //     color: "bg-indigo-600",
  //     img: DU2
  //   },
  // ];
  const EVENT_ASSETS = [
    Event1,
    Event2,
    Event3,
    Event4,
    Event5,
    Event6,
    Event7,
    Event8,
    Event10,
    Event11,
    Event12,
    Event15,
    Event16,
  ];
  const ScrollingRow = ({ items, baseVelocity = 20, reverse = false }: { items: string[], baseVelocity?: number, reverse?: boolean }) => {
    const tripledItems = [...items, ...items, ...items];
    return (
      <div className="flex overflow-hidden py-4">
        <motion.div
          className="flex gap-6 pr-6"
          animate={{ x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }}
          transition={{ ease: "linear", duration: baseVelocity, repeat: Infinity }}
        >
          {tripledItems.map((src, idx) => (
            <div key={idx} className="w-60 md:w-80 shrink-0">
              <img
                src={src}
                alt="Community"
                className="w-full h-36 md:h-48 object-cover rounded-[2.5rem] shadow-sm border border-slate-100"
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 ">
      <Navbar />

      {/* 1. TOP EVENT SLIDER (HERO) */}
<Hero/>

<Marquee/>

<AllEvents/>

      {/* 2. POPULAR EVENTS (MODERN GRID) */}
      <section className="max-w-[1400px] mx-auto py-16 px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">Featured Events</h2>
            <p className="text-slate-500 mt-2 font-medium">Real-world learning experiences transforming students.</p>
          </div>
          <div className="h-px flex-1 mx-12 bg-slate-100 hidden md:block" />
          {/* <button className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 border-b-2 border-blue-600 pb-1">
            View All
          </button> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_EVENTS.slice(0, visibleEvents).map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer"
            >
              <img
                src={event.img}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={event.title}
              />
              {/* Soft overlay that darkens on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300" />

              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-black text-white leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {event.title}
                </h3>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedEvent(event.id)}
                    className="text-[10px] font-black text-blue-400 uppercase tracking-widest hover:text-blue-300 transition-colors"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {visibleEvents < POPULAR_EVENTS.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleEvents(prev => prev + 8)}
              className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all"
            >
              Load More Events
            </button>
          </div>
        )}
      </section>





      <div className="relative z-10">
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-slate-50 via-slate-50/40 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-slate-50 via-slate-50/40 to-transparent z-10" />
        <div className="flex flex-col gap-6">
          <ScrollingRow items={EVENT_ASSETS} baseVelocity={35} />
          <ScrollingRow items={EVENT_ASSETS} baseVelocity={50} reverse />
        </div>
      </div>


      <section className="relative h-screen max-h-screen min-h-[700px] flex flex-col justify-center overflow-hidden bg-white text-slate-900 py-12">
        {/* Soft Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full relative">
          {/* Compact Header */}
          <div className="flex items-center justify-between mb-8 gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-[1px] w-6 bg-blue-600" />
                <span className="text-blue-600 font-bold text-[8px] uppercase tracking-[0.4em]">Impact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none text-slate-900">
                Empowering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">next generation.</span>
              </h2>
            </div>
            <p className="hidden md:block max-w-[200px] text-slate-500 text-[11px] leading-relaxed border-l border-slate-200 pl-4">
              A decade of academic rigor and global networking.
            </p>
          </div>

          {/* Responsive Bento Grid */}
          <div className="grid grid-cols-12 gap-4 h-full max-h-[60vh]">

            {/* Card 01 - Large Feature (Main Metric) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-8 bg-slate-50 border border-slate-100 rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between shadow-sm"
            >
              <div className="relative z-10 flex justify-between items-center">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                  <Icon0 className="w-6 h-6 text-blue-600" />
                </div>
                <span className="font-mono text-[9px] text-slate-400 tracking-widest uppercase italic">Database // V.01</span>
              </div>
              <div className="relative z-10 mt-4">
                <h3 className="text-8xl md:text-9xl font-black leading-none tracking-tighter -ml-1 text-slate-900">
                  {STATS[0].value}
                </h3>
                <p className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mt-2 ml-1">{STATS[0].label}</p>
              </div>
              {/* Subtle accent color instead of heavy glow */}
              <div className={`absolute -right-10 -bottom-10 w-64 h-64 bg-gradient-to-br ${STATS[0].color} opacity-[0.08] rounded-full blur-[60px] group-hover:opacity-[0.12] transition-opacity duration-700`} />
            </motion.div>

            {/* Card 02 - Accent Color (Keeps your gradient for impact) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`col-span-12 md:col-span-6 lg:col-span-4 bg-gradient-to-br ${STATS[1].color} rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-indigo-200/50`}
            >
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                  <Icon1 className="w-5 h-5 text-white" />
                </div>
                <p className="text-white/80 uppercase tracking-widest text-[9px] font-bold mb-1">{STATS[1].label}</p>
                <h3 className="text-6xl font-black tracking-tighter text-white">{STATS[1].value}</h3>
              </div>
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#fff_1.2px,_transparent_0)] [background-size:16px_16px]" />
            </motion.div>

            {/* Card 03 - Course Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-6 lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 flex items-center gap-6 shadow-sm hover:border-blue-200 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                <Icon2 className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h4 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">{STATS[2].value}</h4>
                <p className="text-slate-500 text-[9px] uppercase tracking-[0.3em] font-bold mt-2">{STATS[2].label}</p>
              </div>
            </motion.div>

            {/* Card 04 - Global Reach */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-7 bg-slate-900 rounded-3xl p-6 flex items-center justify-between group overflow-hidden shadow-2xl"
            >
              <div className="relative z-10 px-4">
                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.4em] mb-2">{STATS[3].label}</p>
                <div className="flex items-baseline gap-2 text-white">
                  <h4 className="text-6xl font-black tracking-tighter leading-none">{STATS[3].value}</h4>
                  <span className="text-blue-400 text-2xl font-bold italic">Avg Feedback</span>
                </div>
              </div>
              <div className="hidden md:block opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Icon3 size={120} className="text-white -mr-6 rotate-12" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <WorkMarquee5Col />


      {/* 5. PHOTO FEED SECTION (DYNAMIC INFINITE MARQUEE) */}
     



      <FAQSection />
      <Footer />
    </div>
  );
};

export default EventPortfolio;


