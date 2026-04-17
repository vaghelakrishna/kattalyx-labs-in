"use client";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, Fingerprint, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FiLinkedin } from "react-icons/fi";
// ✅ Local Images
import vanshImg from "@/assets/vansh.jpg";
import pushpakImg from "@/assets/puspak.jpg";
import ishikaImg from "@/assets/ishika.jpg";

function MeetMentor() {
  const navigate = useNavigate();
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showTapHint, setShowTapHint] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const initialTeam = [
    { slug: "vansh-jain", name: "Vansh Jain", role: "Founder & CEO", linkedin: "#", avatar: vanshImg },
    { slug: "pushpak", name: "Pushpak", role: "AI Specialist", linkedin: "#", avatar: pushpakImg },
    { slug: "ishika-sharma", name: "Ishika Sharma", role: "Tech Expert", linkedin: "#", avatar: ishikaImg },
    { slug: "mentor-4", name: "Mentor Four", role: "Design Lead", linkedin: "#", avatar: ishikaImg },
    { slug: "mentor-5", name: "Mentor Five", role: "Marketing", linkedin: "#", avatar: ishikaImg }
  ];

  const [team, setTeam] = useState(initialTeam);

  // --- Scroll Logic ---
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef;
      const scrollAmount = container.offsetWidth * 0.8; // Dynamic width based on screen
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/dashboard/speakers");
        if (response.data && response.data.length > 0) setTeam(response.data);
      } catch   {
        console.warn("Backend not found, using mock data.");
      }
    };
    fetchSpeakers();
  }, []);

  // --- Cursor Setup ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    const timer = setTimeout(() => setShowTapHint(false), 4000);
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    if (!isMobile) window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [isMobile, mouseX, mouseY]);

  return (
    <section className="relative px-6 py-20 bg-white overflow-hidden">

      {/* Custom Cursor */}
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 w-24 h-24 bg-black rounded-full pointer-events-none z-[9999] flex items-center justify-center text-white text-[10px] font-black uppercase tracking-[0.2em] text-center shadow-2xl"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
            scale: isHoveringCard ? 1 : 0,
            opacity: isHoveringCard ? 1 : 0,
          }}
        >
          View<br />Profile
        </motion.div>
      )}

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4">The Faculty</p>
            <h2 className="text-5xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.85]">
              Mastered by <br />
              <span className="text-slate-300 italic font-serif">the best.</span>
            </h2>
          </div>

          <button className="group flex items-center gap-3 border border-slate-900 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500">
            View All Experts
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="group/container relative">

          {/* Navigation Buttons */}
          {!isMobile && (
            <>
              <button
                onClick={() => scroll("left")}
                className="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-40 bg-white border border-slate-100 p-5 rounded-full shadow-xl hover:bg-slate-900 hover:text-white transition-all duration-300 opacity-0 group-hover/container:opacity-100 hidden md:flex active:scale-90"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-40 bg-white border border-slate-100 p-5 rounded-full shadow-xl hover:bg-slate-900 hover:text-white transition-all duration-300 opacity-0 group-hover/container:opacity-100 hidden md:flex active:scale-90"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Mobile Hint */}
          <AnimatePresence>
            {isMobile && showTapHint && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xl"
              >
                <Fingerprint size={14} className="animate-pulse text-blue-400" />
                Tap to view
              </motion.div>
            )}
          </AnimatePresence>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-10 overflow-x-auto pb-12 no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {team.map((member, index) => (
              <motion.div
                key={`${member.slug}-${index}`}
                onMouseEnter={() => !isMobile && setIsHoveringCard(true)}
                onMouseLeave={() => !isMobile && setIsHoveringCard(false)}
                // ✅ Bounce Animation on Click
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/mentors/${member.slug}`);
                }}
                className="relative shrink-0 w-[82vw] md:w-[350px] snap-center group cursor-pointer z-10"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-slate-100 border border-slate-100 transition-all duration-500 group-hover:border-slate-300 shadow-sm pointer-events-none">
                  <img
                    src={member.avatar}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    alt={member.name}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
                    <div className="group-hover:-translate-y-2 transition-transform duration-500">
                      <h4 className="text-3xl font-bold text-white mb-1 tracking-tight">{member.name}</h4>
                      <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-6">{member.role}</p>
                    </div>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl text-white flex items-center justify-center self-end hover:bg-white hover:text-blue-600 transition-all border border-white/20 z-20 pointer-events-auto active:scale-90"
                    >
                      <FiLinkedin size={20} fill="currentColor" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

export default MeetMentor;