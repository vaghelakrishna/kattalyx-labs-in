import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowUpRight, MapPin, ArrowLeft, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const COLLEGE_EVENTS = [
  {
    id: "1",
    title: "Bridging Academia & Industry",
    college: "University of Delhi",
    city: "New Delhi",
    type: "Seminar",
    date: "01 Apr 2026",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800",
    description: "An interactive seminar on aligning academic journeys with real-world industry demands.",
    fullStory: "The auditorium was packed as we discussed the gap between textbooks and the market. Over 500 students joined us to talk about building MVPs while still in dorms. We also had a 1-on-1 session with 10 budding campus startups.",
    stats: { attendees: "500+", startups: "10", duration: "4 Hours" }
  }
];

const CollegePage = () => {
  // Logic to handle "Page" switching
  const [selectedEvent, setSelectedEvent] = useState<typeof COLLEGE_EVENTS[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A]">
      <Navbar />

      <AnimatePresence mode="wait">
        {!selectedEvent ? (
          /* --- MAIN PAGE VIEW --- */
          <motion.div
            key="main-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* HERO */}
            <section className="pt-40 pb-16 max-w-6xl mx-auto px-6">
              <div className="flex flex-col items-start gap-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-black translate-x-[2px] translate-y-[2px] rounded-full"></div>
                  <div className="relative flex items-center gap-2 px-4 py-1.5 bg-[#FFD100] border-2 border-black rounded-full text-[10px] font-black uppercase tracking-wider">
                    <Globe className="w-3.5 h-3.5 stroke-[2.5px]" /> Campus Tour '26
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-slate-900 max-w-4xl">
                  Where <span className="text-blue-600">Founders</span> Meet <br />
                  <span className="relative inline-block">
                    Future
                    <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#FFD100]" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="6" fill="transparent" />
                    </svg>
                  </span> Builders.
                </h1>

                <p className="text-lg md:text-xl text-slate-500 font-medium max-w-xl leading-relaxed">
                  Bridging the gap between the classroom and the boardroom through hands-on campus visits.
                </p>
              </div>
            </section>

            {/* GRID */}
            <section className="max-w-6xl mx-auto px-6 py-12">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {COLLEGE_EVENTS.map((event) => (
                  <div
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="cursor-pointer break-inside-avoid group bg-white rounded-[2rem] p-4 border border-slate-100 hover:shadow-xl transition-all duration-500"
                  >
                    <div className="relative overflow-hidden rounded-[1.5rem] aspect-square mb-5">
                      <img src={event.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-tight">{event.date}</div>
                    </div>
                    <div className="px-1">
                      <div className="flex items-center gap-2 mb-3 text-[9px] font-black uppercase tracking-widest">
                        <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{event.type}</span>
                        <span className="text-slate-400"><MapPin className="inline w-3 h-3 mr-1" />{event.city}</span>
                      </div>
                      <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{event.description}</p>
                      <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <span className="group-hover:text-blue-600 transition-colors">View Recap</span>
                        <ArrowUpRight className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        ) : (
          /* --- DEDICATED RECAP VIEW (The "Second Page") --- */
          <motion.div
            key="recap-page"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 max-w-5xl mx-auto px-6"
          >
            {/* Back Nav */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="flex items-center gap-2 text-slate-400 hover:text-black font-bold text-[10px] uppercase tracking-[0.2em] mb-12 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Campus
            </button>

            {/* Content Heading */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-3 text-blue-600 font-black text-[10px] uppercase tracking-widest">
                <span>{selectedEvent.type}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                <span className="text-slate-400">{selectedEvent.college}</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                {selectedEvent.title}
              </h2>
            </div>

            {/* Featured Image */}
            <div className="relative border-2 rounded-[2.5rem] overflow-hidden  mb-16">
              <img src={selectedEvent.image} className="w-full aspect-video object-cover" alt="" />
            </div>

            {/* Recap Details */}
            <div className="grid md:grid-cols-3 gap-16">
              <div className="md:col-span-2 space-y-8">
                <div className="flex gap-12 py-6 border-y border-slate-100">
                  <div>
                    <p className="text-3xl font-black">{selectedEvent.stats.attendees}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Students</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black">{selectedEvent.stats.startups}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Startups</p>
                  </div>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed font-medium italic">
                  "{selectedEvent.fullStory}"
                </p>
              </div>

              <aside className="space-y-8">
                <div className="p-8 bg-[#FFD100]rounded-[2rem] ">
                  <h4 className="font-black uppercase text-xs mb-4 tracking-widest">Quick Info</h4>
                  <ul className="space-y-4 text-sm font-bold">
                    <li className="flex items-center gap-3"><Calendar className="w-4 h-4" /> {selectedEvent.date}</li>
                    <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> {selectedEvent.city}</li>
                  </ul>
                </div>
              </aside>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default CollegePage;