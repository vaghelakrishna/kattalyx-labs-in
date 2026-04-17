import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Mic2,
  Building,
  Users,
  Zap,
  Target,
  BookOpen,
  ArrowLeft, ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Mic2,
    title: "Expert Speakers",
    description: "500+ verified industry professionals delivering real-world insights",
  },
  {
    icon: Building,
    title: "Partner Schools",
    description: "60+ institutions trust us to enhance their curriculum",
  },
  {
    icon: Users,
    title: "Student Community",
    description: "10,000+ learners gaining practical skills for careers",
  },
  {
    icon: Zap,
    title: "Live Sessions",
    description: "Interactive workshops and Q&A with industry leaders",
  },
  {
    icon: Target,
    title: "Career Focus",
    description: "Programs designed around actual job market requirements",
  },
  {
    icon: BookOpen,
    title: "Curated Content",
    description: "Carefully selected topics across AI, Tech, and Business",
  },
];

export default function FeaturesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-24 overflow-hidden">

      {/* side blur */}
      <div className="absolute -left-60 top-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-purple-200 rounded-full blur-[140px] opacity-40" />
      <div className="absolute -right-60 top-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-blue-200 rounded-full blur-[140px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* header */}
        <div className="mb-16 flex items-start justify-between gap-6">
          {/* LEFT: Heading */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4"
            >
              Why Kattalyx Labs
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight max-w-xl"
            >
              We’re not improving education.
              <br />
              <span className="text-slate-400">
                We’re building the ecosystem that will run it.
              </span> 
            </motion.h2>
          </div>

          {/* RIGHT: Arrow buttons */}
          <div className="flex gap-2 mt-20">
            <button
              onClick={() => scroll("left")}
              disabled={!showLeft}
              className="w-9 h-9 rounded-lg border border-slate-200 bg-white
                 flex items-center justify-center
                 text-slate-600 shadow-sm
                 hover:bg-slate-50 transition
                 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!showRight}
              className="w-9 h-9 rounded-lg border border-slate-200 bg-white
                 flex items-center justify-center
                 text-slate-600 shadow-sm
                 hover:bg-slate-50 transition
                 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>


        {/* slider */}
        <div className="relative">

          {/* LEFT BUTTON
          {showLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20
                w-11 h-11 rounded-full bg-white border shadow-md
                flex items-center justify-center
                hover:bg-slate-50 transition"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>
          )}

          RIGHT BUTTON
          {showRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20
                w-11 h-11 rounded-full bg-white border shadow-md
                flex items-center justify-center
                hover:bg-slate-50 transition"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>
          )} */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">

            {/* {showLeft && (
              <button
                onClick={() => scroll("left")}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md
                 flex items-center justify-center
                 hover:bg-slate-50 transition"
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-4 h-4 text-slate-700" />
              </button>
            )}

            {showRight && (
              <button
                onClick={() => scroll("right")}
                className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md
                 flex items-center justify-center
                 hover:bg-slate-50 transition"
                aria-label="Scroll right"
              >
                <ArrowRight className="w-4 h-4 text-slate-700" />
              </button>
            )} */}

          </div>

          {/* cards */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-8 overflow-x-hidden scroll-smooth overflow-y-hidden"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="min-w-[300px]"
              >
                {/* CARD */}
                <div
                  className="relative h-full rounded-2xl p-7 
                    bg-gradient-to-br from-slate-50/80 via-white to-white
                    border border-slate-200/60
                    backdrop-blur-xl
                    shadow-sm hover:shadow-md transition-all
                  "
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-100/30 to-purple-100/20 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center mb-5">
                      <feature.icon className="w-5 h-5 text-slate-700" />
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}