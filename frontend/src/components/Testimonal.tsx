import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "This was not like any other event our school has hosted. The speaker talked to our students like they were equals — not children. The energy in the room was unlike anything we have seen in 12 years of running this institution.",
    rating: 5,
  },
  {
    id: 2,
    text: "Our students came out of the entrepreneurship session asking questions we have never heard before — about funding, about market validation, about building products. Kattalyx Labs did in 3 hours what we could not do in 3 years.",
    rating: 5,
  },
  {
    id: 3,
    text: "I always thought entrepreneurship was for someone else. After this session I realized it was for me. I have already started working on my first idea. This event changed everything about how I see my future.",
    rating: 5,
  },
  {
    id: 4,
    text: "The branding work Kattalyx did for our institution was exceptional. Our new website and app have completely changed how parents perceive us during admission season. Inquiries went up by 40% within the first month.",
    rating: 5,
  },
  {
    id: 5,
    text: "I have attended dozens of investor networking events. Kattalyx Labs curated something genuinely different — the founders in the room were serious, the conversations were real, and I found two deals I am actively pursuing.",
    rating: 5,
  },
  {
    id: 6,
    text: "Our college had been talking about setting up an E-Cell for years. Kattalyx Labs made it happen in 3 weeks — structure, events, mentors, everything. Our students now have a real launchpad for their startup ideas.",
    rating: 5,
  },
  {
    id: 7,
    text: "The podcast session was broadcast to our entire student body. Hearing a real CFO explain how money works in a business — not a textbook, but a real conversation — was something our commerce students had never experienced.",
    rating: 5,
  },
  {
    id: 8,
    text: "What sets Kattalyx apart is the energy. Every person they bring in is genuinely passionate. Our students felt that. They were not sitting and listening — they were engaged, asking questions, exchanging contacts. Real impact.",
    rating: 5,
  },
  {
    id: 9,
    text: "We partnered with Kattalyx for three events this academic year. Each one better than the last. The team understands our students, respects our institution's culture, and delivers every single time. We have renewed for next year.",
    rating: 5,
  },
  {
    id: 10,
    text: "I am a first-year BBA student who had no idea what entrepreneurship really meant. After the Kattalyx session I went home and spent 4 hours researching how to validate a business idea. That is the kind of spark they create.",
    rating: 5,
  },
  {
    id: 11,
    text: "As a founder who has spoken at many school events, I can say Kattalyx Labs is in a different league. The curation, the student preparation, the format — it is professional in a way that most EdTech events are not.",
    rating: 5,
  },
  {
    id: 12,
    text: "Our school's digital presence was nonexistent before Kattalyx Labs. They built our website, our app, and coached our admin team on digital communication. Parents now say our school looks as good as any private school in the city.",
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

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
