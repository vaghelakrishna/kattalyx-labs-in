import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Sparkles } from "lucide-react";
// import { Link } from "react-router-dom";

// Components & UI
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { dashboardAPI } from "@/services/api";
import FAQSection from "@/components/FAQ";
import { SCHOOL_EVENTS, COLLEGE_EVENTS, UNI_EVENTS } from '@/data/events';

// Assets
import Event1 from "@/assets/events/Event1.webp";
import Event2 from "@/assets/events/Event2.webp";
import Event3 from "@/assets/events/Event3.webp";
import Event4 from "@/assets/events/Event4.webp";
import Event5 from "@/assets/events/Event5.webp";
import Event6 from "@/assets/events/Event6.webp";
import Event7 from "@/assets/events/Event7.webp";
import Event8 from "@/assets/events/Event8.webp";
import Event10 from "@/assets/events/Event10.webp";
import Event11 from "@/assets/events/Event11.webp";
import Event12 from "@/assets/events/Event12.webp";
import Event15 from "@/assets/events/Event15.webp";
import Event16 from "@/assets/events/Event16.webp";
import DU1 from "@/assets/events/DU1.webp";
import DU2 from "@/assets/events/DU2.webp";
import DU3 from "@/assets/events/DU3.webp";
import DU4 from "@/assets/events/DU4.webp";
import DU5 from "@/assets/events/DU5.webp";

// --- MAGNETIC BUTTON COMPONENT ---
const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { damping: 15, stiffness: 150 });
  const mouseY = useSpring(y, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set(clientX - (left + width / 2));
    y.set(clientY - (top + height / 2));
  };


  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: mouseX, y: mouseY }}
      className="relative inline-block"
    >
      {children}
    </motion.div>
  );
};


// --- SCROLLING ROW ---
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

// --- MAIN PAGE ---
const EventsPage = () => {
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

  const DU_ASSETS = [DU1, DU2, DU3, DU4, DU5];

  const heroImages = [...EVENT_ASSETS, ...DU_ASSETS];
  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       // const response = await dashboardAPI.getEvents(1, 50);
  //       console.log(response?.data?.data?.events);
  //     } catch (error) { console.error(error); }
  //   };
  //   fetchEvents();
  // }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-indigo-500 selection:text-white">
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x { animation: gradient-x 5s ease infinite; }
      `}</style>

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-20 mt-20 pb-16 overflow-hidden bg-slate-50/40">
        <div className="max-w-[1400px] mx-auto text-center mb-16 px-6 relative z-20 group">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-bold tracking-widest text-indigo-600 uppercase bg-white rounded-full border border-indigo-100 shadow-sm">
              <Sparkles className="w-4 h-4" /> Discover the Future
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-[1000] text-slate-900 tracking-tighter leading-[0.8] mb-12">
              Grow with a <br />
              <span className="relative inline-block">
                <span
                  className="relative bg-gradient-to-r from-blue-600  via-purple-600 to-pink-500 bg-clip-text text-transparent  bg-[length:200%_auto]"
                >
                  Diverse Ecosystem
                </span>
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1.5 }}
                  className="absolute -bottom-5 left-0 h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent shadow-[0_0_25px_rgba(99,102,241,0.8)]"
                />
              </span>
            </h1>

            <p className="text-slate-500 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed mb-12">
              A <span className="text-slate-900">seamless platform</span> where knowledge meets high-impact collaboration.
            </p>

            <MagneticButton>
              <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-indigo-600 transition-all duration-300 shadow-2xl shadow-indigo-200 active:scale-95">
                Explore Events
              </button>
            </MagneticButton>
          </motion.div>
        </div>

        <div className="relative z-10">
          <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-slate-50 via-slate-50/40 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-slate-50 via-slate-50/40 to-transparent z-10" />
          <div className="flex flex-col gap-6">
            <ScrollingRow items={heroImages} baseVelocity={35} />
            <ScrollingRow items={heroImages} baseVelocity={50} reverse />
          </div>
        </div>
      </section>

      <WorkMarquee5Col />

      <section className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-slate-100 pt-12 py-16">
        <div>
          <p className="text-4xl font-black text-slate-900">20+</p>
          <p className="text-slate-500 font-medium">Events Delivered</p>
        </div>
        <div>
          <p className="text-4xl font-black text-blue-600">10K+</p>
          <p className="text-slate-500 font-medium">Students Impacted</p>
        </div>
        <div>
          <p className="text-4xl font-black text-slate-900">12+</p>
          <p className="text-slate-500 font-medium">Partner Schools & Colleges</p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto bg-[#f8fafc] px-6 py-16 text-slate-900 font-sans">
        <div className="max-w-[1400px] mx-auto">
          <header className="mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">
              Events for Schools
            </h2>
            <p className="text-slate-500 mt-2 font-medium">Curated programs and workshops for school communities.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCHOOL_EVENTS.slice().reverse().map((event, idx) => (
              <div
                key={`${event.id}-${idx}`}
                className="group relative bg-white rounded-[2.5rem] p-3 border border-slate-200/60 transition-all duration-500 hover:border-blue-500/20 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)]"
              >
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden rounded-[2rem]">
                  {/* Subtle overlay for the text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-40" />
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Floating Date Badge - Glassmorphism style */}
                  <div className="absolute top-5 right-5 z-20 bg-white/70 backdrop-blur-xl border border-white/40 px-4 py-2 rounded-2xl shadow-sm">
                    <p className="text-lg font-bold text-slate-900 tracking-tighter">{event.date}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
                      {event.category}
                    </span>
                    <span className="text-slate-300 text-xs">•</span>
                    <span className="text-slate-500 text-xs font-semibold">{event.time}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={`avatar-${idx}-${i}`} className="h-8 w-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" />
                        </div>
                      ))}
                      <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-[10px] text-slate-500 font-bold">
                        +12
                      </div>
                    </div>

                    <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-blue-200">
                      Join Event
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto bg-[#f8fafc] px-6 pb-16 text-slate-900 font-sans">
        <div className="max-w-[1400px] mx-auto">
          <header className="mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">
              Events for Colleges
            </h2>
            <p className="text-slate-500 mt-2 font-medium">Industry-ready experiences and campus-level collaborations.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COLLEGE_EVENTS.slice().reverse().map((event, idx) => (
              <div
                key={`${event.id}-${idx}`}
                className="group relative bg-white rounded-[2.5rem] p-3 border border-slate-200/60 transition-all duration-500 hover:border-blue-500/20 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)]"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-[2rem]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-40" />
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-5 right-5 z-20 bg-white/70 backdrop-blur-xl border border-white/40 px-4 py-2 rounded-2xl shadow-sm">
                    <p className="text-lg font-bold text-slate-900 tracking-tighter">{event.date}</p>
                  </div>
                </div>

                <div className="p-5 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
                      {event.category}
                    </span>
                    <span className="text-slate-300 text-xs">•</span>
                    <span className="text-slate-500 text-xs font-semibold">{event.time}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="mt-2 text-sm uppercase tracking-[0.17em] text-slate-400 font-bold">
                    {event.location}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={`avatar-college-${idx}-${i}`} className="h-8 w-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i + 18}`} alt="user" />
                        </div>
                      ))}
                      <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-[10px] text-slate-500 font-bold">
                        +18
                      </div>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-blue-200">
                      Join Event
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto bg-[#f8fafc] px-6 py-16 text-slate-900 font-sans">
        <div className="max-w-[1400px] mx-auto">
          <header className="mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">
              Events for Universities
            </h2>
            <p className="text-slate-500 mt-2 font-medium">Higher education and campus-focused sessions from our university partners.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UNI_EVENTS.slice().reverse().map((event, idx) => (
              <div
                key={`${event.id}-${idx}`}
                className="group relative bg-white rounded-[2.5rem] p-3 border border-slate-200/60 transition-all duration-500 hover:border-blue-500/20 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)]"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-[2rem]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-40" />
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-5 right-5 z-20 bg-white/70 backdrop-blur-xl border border-white/40 px-4 py-2 rounded-2xl shadow-sm">
                    <p className="text-lg font-bold text-slate-900 tracking-tighter">{event.date}</p>
                  </div>
                </div>

                <div className="p-5 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
                      {event.category}
                    </span>
                    <span className="text-slate-300 text-xs">•</span>
                    <span className="text-slate-500 text-xs font-semibold">{event.time}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="mt-2 text-sm uppercase tracking-[0.17em] text-slate-400 font-bold">
                    {event.location}
                  </div>

                  <div className="mt-6 text-sm text-slate-600 leading-relaxed">
                    {event.description}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">{event.segment}</span>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-blue-200">
                      View Details
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto py-16 px-6">
        <div className="relative overflow-hidden rounded-[3rem] bg-white border border-slate-400 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]">
          {/* Decorative Grid Pattern (Common in Lab/Tech designs) */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }}
          />

          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">Enrollment Open</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
                Build the future, <br />
                <span className="text-blue-600">byte by byte.</span>
              </h2>

              <p className="mt-6 text-slate-500 text-lg max-w-md font-medium leading-relaxed">
                Don’t just watch the evolution—engineer it. Join school and college events designed for real campus collaboration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-4 w-full md:w-auto">
              <button className="group relative overflow-hidden bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:bg-blue-600 active:scale-95 shadow-xl shadow-slate-200">
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-blue-400 to-blue-600 transition-transform duration-300 group-hover:translate-y-0" />
              </button>

              <button className="flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all">
                Schedule a Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>


        <FAQSection />
      </section>
      <Footer />
    </div>
  );
};

export default EventsPage;



// import { useEffect, useState, useRef } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";
// import { Sparkles } from "lucide-react";
// // import { Link } from "react-router-dom";

// // Components & UI
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { dashboardAPI } from "@/services/api";
// import FAQSection from "@/components/FAQ";

// // Assets
// // import eventimage from "@/assets/eventimage.jpg";

// // --- MAGNETIC BUTTON COMPONENT ---
// const MagneticButton = ({ children }: { children: React.ReactNode }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const mouseX = useSpring(x, { damping: 15, stiffness: 150 });
//   const mouseY = useSpring(y, { damping: 15, stiffness: 150 });

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!ref.current) return;
//     const { clientX, clientY } = e;
//     const { left, top, width, height } = ref.current.getBoundingClientRect();
//     x.set(clientX - (left + width / 2));
//     y.set(clientY - (top + height / 2));
//   };


//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => { x.set(0); y.set(0); }}
//       style={{ x: mouseX, y: mouseY }}
//       className="relative inline-block"
//     >
//       {children}
//     </motion.div>
//   );
// };

// interface EducationEvent {
//   id: string;
//   title: string;
//   date: string;
//   time: string;
//   category: string;
//   image: string;
// }



// const LIGHT_EVENTS: EducationEvent[] = [
//   {
//     id: '1',
//     title: 'Advanced Quantum Computing',
//     date: '18 Feb',
//     time: '18:00 PM',
//     category: 'Physics',
//     image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop',
//   },
//   {
//     id: '2',
//     title: 'Digital Marketing Pro',
//     date: '12 Mar',
//     time: '16:00 PM',
//     category: 'Marketing',
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
//   },
//   {
//     id: '3',
//     title: 'Machine Learning Basics',
//     date: '26 Feb',
//     time: '10:00 AM',
//     category: 'AI',
//     image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600&auto=format&fit=crop',
//   },
//   {
//     id: '4',
//     title: 'Web Development Bootcamp',
//     date: '01 Mar',
//     time: '09:00 AM',
//     category: 'Coding',
//     image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
//   },
//   {
//     id: '5',
//     title: 'Modern Business Strategy',
//     date: '05 Mar',
//     time: '14:00 PM',
//     category: 'Business',
//     image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
//   },
//   {
//     id: '6',
//     title: 'Data Science Intensive',
//     date: '10 Mar',
//     time: '11:00 AM',
//     category: 'Data',
//     image: 'https://images.unsplash.com/photo-1551288049-bbda4e18f7ad?q=80&w=600&auto=format&fit=crop',
//   },
//   {
//     id: '7',
//     title: 'Digital Marketing Pro',
//     date: '12 Mar',
//     time: '16:00 PM',
//     category: 'Marketing',
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
//   },
//   {
//     id: '8',
//     title: 'Creative Photography',
//     date: '15 Mar',
//     time: '13:00 PM',
//     category: 'Arts',
//     image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=600&auto=format&fit=crop',
//   }
// ];

// // --- SCROLLING ROW ---
// const ScrollingRow = ({ items, baseVelocity = 20, reverse = false }: { items: string[], baseVelocity?: number, reverse?: boolean }) => {
//   const tripledItems = [...items, ...items, ...items];
//   return (
//     <div className="flex overflow-hidden py-4">
//       <motion.div
//         className="flex gap-6 pr-6"
//         animate={{ x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }}
//         transition={{ ease: "linear", duration: baseVelocity, repeat: Infinity }}
//       >
//         {tripledItems.map((src, idx) => (
//           <div key={idx} className="w-60 md:w-80 shrink-0">
//             <img
//               src={src}
//               alt="Community"
//               className="w-full h-36 md:h-48 object-cover rounded-[2.5rem] shadow-sm border border-slate-100"
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// // --- MAIN PAGE ---
// const EventsPage = () => {
//   const [visibleCount, setVisibleCount] = useState(4);

//   const heroImages = [
//     "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=600", // Chalkboard/Books
//     "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600", // Library
//     "https://images.pexels.com/photos/159844/science-lab-glassware-159844.jpeg?auto=compress&cs=tinysrgb&w=600", // Science Lab
//     "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600", // Classroom
//     "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=600", // Student with Laptop
//     "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600", // Stacked Books
//     "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600", // Art/Design Studio
//     "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600", // Online Learning
//     "https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg?auto=compress&cs=tinysrgb&w=600", // Writing/Journaling
//     "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600", // Students Discussing
//     "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=600", // Modern Campus
//     "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600", // Collaborative Workshop
//     "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=600", // Scientific Research
//     "https://images.pexels.com/photos/7092456/pexels-photo-7092456.jpeg?auto=compress&cs=tinysrgb&w=600", // Teacher/Presentation
//     "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600", // Architecture/Engineering
//     "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600", // Graduation Cap
//     "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600", // Stacked Books
//   ];
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await dashboardAPI.getEvents(1, 50);
//         console.log(response?.data?.data?.events);
//       } catch (error) { console.error(error); }
//     };
//     fetchEvents();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white selection:bg-indigo-500 selection:text-white">
//       <style>{`
//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient-x { animation: gradient-x 5s ease infinite; }
//       `}</style>

//       <Navbar />

//       {/* HERO SECTION */}
//       <section className="relative pt-20 mt-20 pb-16 overflow-hidden bg-slate-50/40">
//         <div className="max-w-[1400px] mx-auto text-center mb-16 px-6 relative z-20 group">
//           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
//             <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
//               className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-bold tracking-widest text-indigo-600 uppercase bg-white rounded-full border border-indigo-100 shadow-sm">
//               <Sparkles className="w-4 h-4" /> Discover the Future
//             </motion.span>

//             <h1 className="text-5xl md:text-7xl font-[1000] text-slate-900 tracking-tighter leading-[0.8] mb-12">
//               Grow with a <br />
//               <span className="relative inline-block">
//                 {/* Modern Breathing Text Effect */}
//                 <span
//                   // animate={{ letterSpacing: ["-0.05em", "-0.02em", "-0.05em"] }}
//                   // transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                   className="relative bg-gradient-to-r from-blue-600  via-purple-600 to-pink-500 bg-clip-text text-transparent  bg-[length:200%_auto]"
//                 >
//                   Diverse Ecosystem
//                 </span>
//                 {/* Modern Lens Flare Line */}
//                 <motion.div
//                   initial={{ width: 0, opacity: 0 }}
//                   whileInView={{ width: "100%", opacity: 1 }}
//                   transition={{ delay: 0.8, duration: 1.5 }}
//                   className="absolute -bottom-5 left-0 h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent shadow-[0_0_25px_rgba(99,102,241,0.8)]"
//                 />
//               </span>
//             </h1>

//             <p className="text-slate-500 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed mb-12">
//               A <span className="text-slate-900">seamless platform</span> where knowledge meets high-impact collaboration.
//             </p>

//             <MagneticButton>
//               <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-indigo-600 transition-all duration-300 shadow-2xl shadow-indigo-200 active:scale-95">
//                 Explore Events
//               </button>
//             </MagneticButton>
//           </motion.div>
//         </div>

//         <div className="relative z-10">
//           <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-slate-50 via-slate-50/40 to-transparent z-10" />
//           <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-slate-50 via-slate-50/40 to-transparent z-10" />
//           <div className="flex flex-col gap-6">
//             <ScrollingRow items={heroImages} baseVelocity={35} />
//             <ScrollingRow items={heroImages} baseVelocity={50} reverse />
//           </div>
//         </div>
//       </section>


//       <section className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-slate-100 pt-12 py-16">
//         <div>
//           <p className="text-4xl font-black text-slate-900">45k+</p>
//           <p className="text-slate-500 font-medium">Active Learners</p>
//         </div>
//         <div>
//           <p className="text-4xl font-black text-blue-600">98%</p>
//           <p className="text-slate-500 font-medium">Satisfaction Rate</p>
//         </div>
//         <div>
//           <p className="text-4xl font-black text-slate-900">120+</p>
//           <p className="text-slate-500 font-medium">Expert Mentors</p>
//         </div>
//       </section>

//       <div className="min-h-screen bg-[#f8fafc] px-6 py-16 text-slate-900 font-sans">
//         <div className="max-w-[1400px] mx-auto">
//           <header className="mb-12">
//             <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">
//               Upcoming Events
//             </h2>
//             <p className="text-slate-500 mt-2 font-medium">Elevate your skills through immersive learning.</p>
//           </header>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {LIGHT_EVENTS.slice(0, visibleCount).map((event, idx) => (
//               <div
//                 key={`${event.id}-${idx}`}
//                 className="group relative bg-white rounded-[2.5rem] p-3 border border-slate-200/60 transition-all duration-500 hover:border-blue-500/20 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)]"
//               >
//                 {/* Image Section */}
//                 <div className="relative h-48 w-full overflow-hidden rounded-[2rem]">
//                   {/* Subtle overlay for the text contrast */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-40" />
//                   <img
//                     src={event.image}
//                     alt={event.title}
//                     className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
//                   />

//                   {/* Floating Date Badge - Glassmorphism style */}
//                   <div className="absolute top-5 right-5 z-20 bg-white/70 backdrop-blur-xl border border-white/40 px-4 py-2 rounded-2xl shadow-sm">
//                     <p className="text-lg font-bold text-slate-900 tracking-tighter">{event.date}</p>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-5 pt-6">
//                   <div className="flex items-center gap-3 mb-4">
//                     <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
//                       {event.category}
//                     </span>
//                     <span className="text-slate-300 text-xs">•</span>
//                     <span className="text-slate-500 text-xs font-semibold">{event.time}</span>
//                   </div>

//                   <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
//                     {event.title}
//                   </h3>

//                   <div className="mt-6 flex items-center justify-between">
//                     <div className="flex -space-x-3">
//                       {[1, 2, 3].map((i) => (
//                         <div key={`avatar-${idx}-${i}`} className="h-8 w-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] overflow-hidden">
//                           <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" />
//                         </div>
//                       ))}
//                       <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-[10px] text-slate-500 font-bold">
//                         +12
//                       </div>
//                     </div>

//                     <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-blue-200">
//                       Join Event
//                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {visibleCount < LIGHT_EVENTS.length && (
//             <div className="text-center mt-12">
//               <button
//                 onClick={() => setVisibleCount(prev => prev + 4)}
//                 className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-blue-600 transition-all duration-300 shadow-lg"
//               >
//                 Load More Events
//               </button>
//             </div>
//           )}
//         </div>
//       </div>



//       <section className="max-w-[1400px] mx-auto py-16 px-6">
//         <div className="relative overflow-hidden rounded-[3rem] bg-white border border-slate-400 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]">
//           {/* Decorative Grid Pattern (Common in Lab/Tech designs) */}
//           <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
//             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }}
//           />

//           <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
//             <div className="flex-1 text-center md:text-left">
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
//                 </span>
//                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">Enrollment Open</span>
//               </div>

//               <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
//                 Build the future, <br />
//                 <span className="text-blue-600">byte by byte.</span>
//               </h2>

//               <p className="mt-6 text-slate-500 text-lg max-w-md font-medium leading-relaxed">
//                 Don’t just watch the evolution—engineer it. Join the Kattalyx cohort and gain access to exclusive labs and mentorship.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row md:flex-col gap-4 w-full md:w-auto">
//               <button className="group relative overflow-hidden bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:bg-blue-600 active:scale-95 shadow-xl shadow-slate-200">
//                 <span className="relative z-10">Start Your Journey</span>
//                 <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-blue-400 to-blue-600 transition-transform duration-300 group-hover:translate-y-0" />
//               </button>

//               <button className="flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all">
//                 Schedule a Demo
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>


//         <FAQSection />
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default EventsPage;


const WorkMarquee5Col = () => {
  const allProjects = [
    { title: "Smash Foods", img: "https://images.unsplash.com/photo-1569058242253-92a9c71f9867?q=80&w=800" },
    { title: "Lumar", img: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800" },
    { title: "Vybrance Labs", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800", video: true },
    { title: "Coho+", img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=800" },
    { title: "Kahuna", img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800" },
    { title: "A La Maison", img: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800" },
  ];

  const ColumnTrack = ({ items, reverse = false, duration = 30 }: { items: any[]; reverse?: boolean; duration?: number }) => (
    <div className="flex flex-col gap-4 overflow-hidden h-[700px] relative shrink-0">
      <motion.div
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: duration, repeat: Infinity }}
        className="flex flex-col gap-4"
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-zinc-100 bg-white group relative shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
          >
            <img
              src={item.img}
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
              alt={item.title}
            />
            {/* Elegant light-themed overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
              <h3 className="text-zinc-900 font-black uppercase tracking-[0.1em] text-xs translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                {item.title}
              </h3>
            </div>
            {item.video && (
              <div className="absolute top-5 right-5">
                <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center border border-zinc-100">
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-zinc-900 border-b-[4px] border-b-transparent ml-0.5" />
                </div>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="bg-[#FCFCFD] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="mb-20 flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Archive / 2026</span>
            <div className="w-12 h-[1.5px] bg-zinc-200" />
          </div>
          <h2 className="text-5xl md:text-8xl font-[1000] text-zinc-900 tracking-tighter uppercase leading-[0.8]">
            WORK CYCLE<span className="text-zinc-300">.</span>
          </h2>
        </div>

        {/* 5-COLUMN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 h-[700px] relative overflow-hidden px-2">

          <ColumnTrack items={[allProjects[0], allProjects[1], allProjects[2]]} duration={28} />
          <ColumnTrack items={[allProjects[3], allProjects[4], allProjects[5]]} reverse duration={38} />
          <ColumnTrack items={[allProjects[2], allProjects[0], allProjects[4]]} duration={22} />
          <ColumnTrack items={[allProjects[1], allProjects[5], allProjects[3]]} reverse duration={45} />
          <ColumnTrack items={[allProjects[4], allProjects[2], allProjects[1]]} duration={32} />

          {/* Fading Mask Overlays - Match background color */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#FCFCFD] via-[#FCFCFD]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#FCFCFD] via-[#FCFCFD]/80 to-transparent z-20 pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

