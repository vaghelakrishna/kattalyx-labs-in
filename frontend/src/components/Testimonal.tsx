import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Final Year Student",
    company: "IIT Delhi",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    text:
      "The AI masterclass by Dr. Sarah completely transformed my understanding of machine learning. Within 8 weeks, I landed a ₹5.2L job offer at a top tech company!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "MBA Student",
    company: "ISB Hyderabad",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
    text:
      "The FinTech sessions opened doors I never knew existed. Raj Mehta's insights helped me secure an internship at JP Morgan.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rohan Kumar",
    role: "Computer Science Student",
    company: "IIT Bombay",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    text:
      "From zero coding knowledge to building production ML models — this platform made it possible.",
    rating: 5,
  },
  {
    id: 4,
    name: "Dr. Sarah Chen",
    role: "AI Research Lead",
    company: "Google",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    text:
      "Teaching 2.4K students live was incredible. The engagement quality exceeded expectations.",
    rating: 5,
  },
  {
    id: 5,
    name: "Raj Mehta",
    role: "Vice President",
    company: "JP Morgan",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
    text:
      "The perfect bridge between industry and academia. Student engagement is phenomenal.",
    rating: 5,
  },
  {
    id: 6,
    name: "Anita Sharma",
    role: "CEO",
    company: "TechStart Inc",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=50&h=50&fit=crop&crop=face",
    text:
      "Meaningful mentor-student connections that drive real career transformation.",
    rating: 5,
  },
];

export default function Testimonial() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const autoScrollRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHovering = useRef(false);

  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  // animated heading state
  const words = ["students", "educators"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const checkScroll = () => {
    const el = sliderRef.current;
    if (!el) return;

    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  const scroll = (dir: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  // arrow visibility
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  // auto scroll
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    autoScrollRef.current = setInterval(() => {
      if (isHovering.current) return;

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 360, behavior: "smooth" });
      }
    }, 3000);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, []);

  return (
    <section className="relative pt-16 overflow-hidden">
      {/* blur bg */}
      <div className="absolute -left-60 top-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-blue-200 rounded-full blur-[140px] opacity-30" />
      <div className="absolute -right-60 top-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-indigo-200 rounded-full blur-[140px] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600"
          >
            TESTIMONIALS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-slate-900 mt-2 flex justify-center gap-2"
          >
            <span>Loved by</span>

            <AnimatePresence mode="wait">
              <motion.span
                key={words[wordIndex]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="inline-block text-blue-600"
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h2>
        </div>

        {/* arrows */}
        {canLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border shadow flex items-center justify-center hover:bg-slate-100"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>
        )}

        {canRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border shadow flex items-center justify-center hover:bg-slate-100"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>
        )}

        {/* slider */}
        <div
          ref={sliderRef}
          onMouseEnter={() => (isHovering.current = true)}
          onMouseLeave={() => (isHovering.current = false)}
          className="flex gap-8 scrollbar-hide overflow-x-scroll pb-6 px-2"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              className="relative min-w-[340px] md:min-w-[380px] group !shadow-none"
            >
              {/* Background Soft Glow (Fixes boxy shadow issue) */}
              <div className="absolute inset-4 bg-blue-400/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 border border-slate-100 !shadow-none group-hover:-translate-y-2 transition-all duration-500 overflow-hidden">

                {/* Decorative Quote Mark */}
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500">
                  <Quote size={80} strokeWidth={3} />
                </div>

                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-blue-50 text-[10px] font-bold text-blue-600 tracking-widest uppercase">
                    Verified Success
                  </div>
                </div>

                <p className="text-slate-700 font-medium leading-relaxed mb-10 min-h-[80px]">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-full group-hover:scale-110 transition-transform duration-500" />
                    <img
                      src={t.avatar}
                      className="relative w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                      alt={t.name}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-base font-black text-slate-900 leading-tight">
                      {t.name}
                    </h4>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-0.5">
                      {t.company}
                    </span >
                    <span className="text-xs text-slate-400 font-medium italic">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
