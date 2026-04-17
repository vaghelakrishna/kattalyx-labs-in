
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Star, X, Globe, GraduationCap, ArrowUpRight, CheckCircle2, Briefcase, type LucideIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import FAQSection from '@/components/FAQ';




interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

const STATS: StatItem[] = [
  {
    label: "Active Students",
    value: "150K+",
    icon: Users,
    color: "from-blue-600 to-indigo-700"
  },
  {
    label: "Years of Excellence",
    value: "12+",
    icon: Briefcase,
    color: "from-indigo-500 to-purple-600"
  },
  {
    label: "Professional Courses",
    value: "450+",
    icon: GraduationCap,
    color: "from-blue-400 to-blue-600"
  },
  {
    label: "Global Reach",
    value: "25+",
    icon: Globe,
    color: "from-slate-800 to-slate-900"
  }
];


// Extract icons as Capitalized Components for TSX compliance
const Icon0 = STATS[0].icon;
const Icon1 = STATS[1].icon;
const Icon2 = STATS[2].icon;
const Icon3 = STATS[3].icon;



const TOP_EVENTS = [
  {
    id: 1,
    title: "AI & LinkedIn Masterclass",
    location: "Delhi Public School",
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Startup Business Conference",
    location: "Ryan International School",
    date: "April 2024",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200",
  }
];

const POPULAR_EVENTS = [
  { id: 1, title: "Digital Marketing Workshop", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600", desc: "Learn digital marketing strategies and social media management from industry experts.", date: "March 15, 2024", location: "DPS Noida" },
  { id: 2, title: "Tech Innovation Summit", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600", desc: "Explore cutting-edge technologies and innovation in AI, ML, and emerging tech.", date: "March 20, 2024", location: "Ryan International" },
  { id: 3, title: "Leadership Development", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600", desc: "Build essential leadership skills and learn to inspire teams effectively.", date: "March 25, 2024", location: "Modern School" },
  { id: 4, title: "Industry Mentorship", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600", desc: "Connect with industry professionals and get personalized career guidance.", date: "April 1, 2024", location: "Amity International" },
  { id: 5, title: "Coding Bootcamp", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600", desc: "Intensive coding workshop covering web development and programming fundamentals.", date: "April 5, 2024", location: "DPS Ghaziabad" },
  { id: 6, title: "Public Speaking Masterclass", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600", desc: "Master the art of public speaking and presentation skills.", date: "April 10, 2024", location: "St. Xavier's" },
  { id: 7, title: "Financial Literacy Session", img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=600", desc: "Understand personal finance, investments, and money management basics.", date: "April 15, 2024", location: "Lotus Valley" },
  { id: 8, title: "Design Thinking Workshop", img: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=600", desc: "Learn design thinking methodology to solve real-world problems creatively.", date: "April 20, 2024", location: "Bal Bharati" },
  { id: 9, title: "Robotics Competition", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600", desc: "Hands-on robotics competition with exciting challenges and prizes.", date: "April 25, 2024", location: "Sanskriti School" },
  { id: 10, title: "Career Guidance Workshop", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600", desc: "Comprehensive career counseling and pathway exploration session.", date: "April 30, 2024", location: "Delhi Public School" },
  { id: 11, title: "Design Thinking Workshop", img: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=600", desc: "Learn design thinking methodology to solve real-world problems creatively.", date: "April 20, 2024", location: "Bal Bharati" },
  { id: 12, title: "Robotics Competition", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600", desc: "Hands-on robotics competition with exciting challenges and prizes.", date: "April 25, 2024", location: "Sanskriti School" },
  { id: 13, title: "Career Guidance Workshop", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600", desc: "Comprehensive career counseling and pathway exploration session.", date: "April 30, 2024", location: "Delhi Public School" },
];

const PHOTO_GALLERY = [
  { url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000", tag: "Workshop" },
  { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000", tag: "Innovation" },
  { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000", tag: "Mentorship" },
  { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000", tag: "Leadership" },
  { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000", tag: "Collaboration" },
];



const EventPortfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleEvents, setVisibleEvents] = useState(8);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % TOP_EVENTS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + TOP_EVENTS.length) % TOP_EVENTS.length);

  const stories = [
    {
      student: "Rohan Mehta",
      school: "DPS Ghaziabad",
      achievement: "Secured internship at Google after our AI workshop",
      tag: "Tech Placement",
      color: "bg-blue-500",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
    },
    {
      student: "Sneha Kapoor",
      school: "Ryan International",
      achievement: "Started her tech startup after the Summit",
      tag: "Entrepreneurship",
      color: "bg-indigo-600",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 ">
      <Navbar />

      {/* 1. TOP EVENT SLIDER (HERO) */}
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
                <span className="bg-blue-600 text-white text-[10px] md:text-xs font-black px-3 py-1 rounded-lg uppercase tracking-widest">
                  Live Now
                </span>
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
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Get Tickets <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
                  Learn More
                </button>
              </div>
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

      {/* EVENT MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setSelectedEvent(null)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {POPULAR_EVENTS.find(e => e.id === selectedEvent) && (
              <>
                <img 
                  src={POPULAR_EVENTS.find(e => e.id === selectedEvent)!.img} 
                  className="w-full h-64 object-cover rounded-t-3xl"
                  alt="Event"
                />
                <div className="p-8">
                  <h2 className="text-4xl font-black text-slate-900 mb-4">
                    {POPULAR_EVENTS.find(e => e.id === selectedEvent)!.title}
                  </h2>
                  <div className="flex gap-4 mb-6">
                    <span className="flex items-center gap-2 text-slate-600 text-sm font-bold">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      {POPULAR_EVENTS.find(e => e.id === selectedEvent)!.date}
                    </span>
                    <span className="flex items-center gap-2 text-slate-600 text-sm font-bold">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      {POPULAR_EVENTS.find(e => e.id === selectedEvent)!.location}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {POPULAR_EVENTS.find(e => e.id === selectedEvent)!.desc}
                  </p>
                  <button className="w-full bg-blue-600 text-white py-4 rounded-full font-bold hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}




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
                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.4em] mb-2">Network Expansion</p>
                <div className="flex items-baseline gap-2 text-white">
                  <h4 className="text-6xl font-black tracking-tighter leading-none">{STATS[3].value}</h4>
                  <span className="text-blue-400 text-2xl font-bold italic">Nations</span>
                </div>
              </div>
              <div className="hidden md:block opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Icon3 size={120} className="text-white -mr-6 rotate-12" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 5. PHOTO FEED SECTION (DYNAMIC INFINITE MARQUEE) */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Inside the Experience</h2>
            <p className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
              Moments in <span className="text-slate-300">Motion.</span>
            </p>
          </div>
          <p className="text-slate-500 font-medium max-w-xs text-sm leading-relaxed">
            A glimpse into the workshops, energy, and breakthroughs from our global sessions.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex flex-col gap-6">
          {/* First Row - Moving Right */}
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...PHOTO_GALLERY, ...PHOTO_GALLERY].map((photo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 0.98 }}
                className={`relative flex-shrink-0 overflow-hidden rounded-[2.5rem] bg-slate-100 group cursor-none
            ${i % 3 === 0 ? 'w-[300px] md:w-[400px]' : i % 2 === 0 ? 'w-[400px] md:w-[600px]' : 'w-[250px] md:w-[350px]'} 
            h-[350px] md:h-[500px]`}
              >
                <img
                  src={photo.url}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-110"
                  alt="Event highlight"
                />
                {/* Subtle Glass Tag */}
                <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                    {photo.tag}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Reverse Row - Optional: Use if you want a second row moving left for more depth */}
        </div>

        {/* CSS for the Marquee Animation */}
        <style>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: fit-content;
      animation: marquee 40s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `}</style>
      </section>



      {/* 7. VIDEO SECTION - PREMIUM CINEMATIC GRID */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-[1400px] mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em]">Aftermovies</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                EVENT <span className="text-blue-600">RECAPS.</span>
              </h2>
            </div>
            <p className="text-slate-500 font-medium max-w-xs text-sm leading-relaxed border-l-2 border-slate-200 pl-6">
              Relive the energy and the breakthroughs. Cinematic highlights from our latest workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {[
              {
                title: "AI Workshop Highlights",
                duration: "2:45",
                tags: ["Technology", "2024"],
                thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
                cols: "md:col-span-7"
              },
              {
                title: "Startup Conference",
                duration: "3:12",
                tags: ["Business", "Delhi"],
                thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200",
                cols: "md:col-span-5"
              }
            ].map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`${video.cols} group relative h-[400px] md:h-[550px] rounded-[3rem] overflow-hidden cursor-pointer bg-slate-200`}
              >
                {/* Background Image */}
                <img
                  src={video.thumbnail}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
                  alt={video.title}
                />

                {/* Intelligent Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-slate-950/90 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Info (Duration/Tags) */}
                <div className="absolute top-8 left-8 right-8 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                  <div className="flex gap-2">
                    {video.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-white text-xs bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-md">
                    {video.duration}
                  </span>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-blue-600 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-2xl">
                      <div className="w-0 h-0 border-l-[18px] border-l-white group-hover:border-l-blue-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2 transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Bottom Title Area */}
                <div className="absolute bottom-10 left-10 right-10">
                  <motion.div className="flex flex-col gap-2">
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none group-hover:text-blue-400 transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] overflow-hidden h-0 group-hover:h-5 transition-all duration-500">
                      Click to play full recap
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f0f4f8] py-16 font-sans selection:bg-blue-100 selection:text-blue-900">
        <div className="max-w-[1400px] mx-auto px-6">

          {/* Header with Color Accents */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-blue-600 font-black uppercase tracking-widest text-[10px] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Testimonials
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mt-4">
                Real Impact, <span className="text-blue-600">Real Stories</span>
              </h2>
            </div>
            <p className="text-slate-500 font-medium max-w-xs text-sm">
              Join the ranks of thousands of students who redefined their future with us.
            </p>
          </div>

          {/* Two Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex h-[280px]"
              >
                {/* Left Side: Image with Color Overlay on Hover */}
                <div className="w-1/3 h-full relative overflow-hidden">
                  <img
                    src={story.img}
                    alt={story.student}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 ${story.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>

                {/* Right Side: Content */}
                <div className="w-2/3 p-6 md:p-8 flex flex-col justify-between relative">
                  {/* Achievement Badge */}
                  <div className="absolute top-4 right-6">
                    <div className={`px-3 py-1 rounded-full ${story.color} text-white text-[9px] font-black uppercase tracking-tighter`}>
                      {story.tag}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-snug">
                      "{story.achievement}"
                    </h3>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${story.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                        {story.student[0]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{story.student}</p>
                        <p className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
                          <GraduationCap size={12} className="text-blue-500" />
                          {story.school}
                        </p>
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Minimalist Footer Stat */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <CheckCircle2 size={18} className="text-green-500" />
            <p className="text-slate-500 text-sm font-semibold">
              Over <span className="text-slate-900 font-black">5,000+</span> workshops conducted across India
            </p>
          </div>
        </div>
      </section>




<FAQSection/>
      <Footer />
    </div>
  );
};

export default EventPortfolio;




