"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

// --- DATA ---
const cards = [
  {
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=75",
    date: "08.12.24",
    title: "Kattalyx Tech Meetup 2024",
    isLive: true
  },
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=75",
    date: "09.05.24",
    title: "Startup Ideation Lab",
    progress: 40
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=75",
    date: "10.01.24",
    title: "Full-Stack Development Bootcamp",
    progress: 75
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=75",
    date: "11.18.24",
    title: "AI & Automation Workshop",
    progress: 15
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=75",
    date: "12.10.24",
    title: "Community Demo Day",
    progress: 90
  }
];

const transformStyles = [
  "translate(-260px, 50px) rotate(-14deg)",
  "translate(-130px, 25px) rotate(-7deg)",
  "translate(0px, 0px) rotate(0deg)",
  "translate(130px, 25px) rotate(7deg)",
  "translate(260px, 50px) rotate(14deg)"
];

export default function UpComingEvent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  // const [isMuted, setIsMuted] = useState(true);
  // const [watchlist, setWatchlist] = useState<number[]>([]);

  // 1. Responsive Check
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // 2. Desktop Animation (GSAP)
  useEffect(() => {
    if (!containerRef.current || isMobile) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".card",
        { scale: 0, y: 80, opacity: 0 },
        {
          scale: 1, y: 0, opacity: 1,
          stagger: 0.1,
          ease: "elastic.out(1, 0.6)",
          delay: 0.5,
          onComplete: () => {
            cards.forEach((_, i) => {
              gsap.to(`.card-${i}`, {
                transform: transformStyles[i % transformStyles.length],
                duration: 0.8,
                ease: "power3.out"
              });
            });
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [isMobile]);

  // const toggleWatchlist = (id: number) => {
  //   setWatchlist(prev =>
  //     prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
  //   );
  // };

  return (
    <section className="relative px-4 py-18 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">

        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-8"
        >
          <div className="max-w-xl">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4"> Explore the Glimpse of Our Events</p>
            <h2 className="text-5xl md:text-4xl font-bold text-slate-900 tracking-tighter">
              Here is what real-world learning looks like.
            </h2>
          </div>
          <Link to="/mentors">
            <button className="group flex items-center gap-3 bg-transparent text-slate-900 border border-slate-900 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:bg-black hover:text-white">
              All Events
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

        {/* MAIN DISPLAY CONTAINER */}
        <section className="relative bg-black rounded-[2rem] md:rounded-[4rem] flex flex-col items-center justify-center overflow-hidden py-10 md:py-20 shadow-2xl">

          {isMobile ? (
            /* --- MOBILE VIEW (JIOHOTSTAR SLIDER) --- */
            <div className="w-full flex gap-4 overflow-x-auto px-6 py-4 scrollbar-hide snap-x snap-mandatory">
              {cards.map((card, idx) => (
                <div key={idx} className="min-w-[280px] h-[420px] relative rounded-[2.5rem] overflow-hidden snap-center border border-white/10 shadow-2xl">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />

                  {/* Action Buttons (Top Right) */}
                  {/* <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                    <button onClick={() => setIsMuted(!isMuted)} className="p-2.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20 text-white">
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                    <button onClick={() => toggleWatchlist(idx)} className="p-2.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20 text-white">
                      {watchlist.includes(idx) ? <Check size={18} className="text-green-400" /> : <Plus size={18} />}
                    </button>
                  </div> */}

                  {/* Badges */}
                  {card.isLive && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-red-600 px-3 py-1 rounded-lg z-10 animate-in fade-in zoom-in">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      <span className="text-white text-[10px] font-black uppercase">Live</span>
                    </div>
                  )}

                  {/* Central Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/10 backdrop-blur-xl border border-white/20 text-white/80">
                      <Play fill="currentColor" size={28} className="ml-1" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 w-full p-6 text-white space-y-4">
                    <div>
                      <span className="text-[10px] opacity-60 uppercase font-black tracking-widest">{card.date}</span>
                      <h3 className="text-xl font-bold leading-tight line-clamp-2">{card.title}</h3>
                    </div>
                    {/* <button className="w-full bg-blue-600 py-3.5 rounded-2xl font-black text-sm active:scale-95 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40">
                      <Play size={16} fill="currentColor" /> {card.isLive ? "WATCH LIVE" : "RESUME"}
                    </button> */}
                  </div>

                  {/* Progress Bar */}
                  {card.progress && !card.isLive && (
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${card.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-blue-500 shadow-[0_0_12px_#3b82f6]"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* --- DESKTOP VIEW (ORIGINAL GSAP ANIMATION) --- */
            <div ref={containerRef} className="relative h-[360px] w-full flex items-center justify-center">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className={`card card-${idx} absolute group cursor-pointer`}
                  style={{
                    width: 220,
                    height: 300,
                    borderRadius: 24,
                    overflow: "hidden",
                    border: "8px solid #f5f5dc",
                    background: "#000",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.45)",
                  }}
                >
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/65 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white/70 text-xs mb-1 uppercase tracking-widest">{card.date}</span>
                    <h3 className="text-white text-lg font-bold leading-tight">{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SECTION TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12 md:mt-24 px-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">What’s Coming Up</h2>
            <p className="mt-3 text-slate-400">Join our upcoming events and master your craft with industry leaders.</p>
            <button className="mt-8 px-10 py-4 rounded-full bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] hover:bg-slate-200 transition-colors">
              Explore All Events
            </button>
          </motion.div>
        </section>
      </div>
    </section>
  );
}