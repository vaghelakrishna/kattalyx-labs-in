import CircularTextBadge from "@/components/ui/CircularTextBadge";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Stat Component (For the left side numbers)
function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="lg:mb-10">
      <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
        {number}
      </h3>
      <p className="text-slate-500 font-medium mt-1 text-sm md:text-base uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}

export default function AboutCompany() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* items-start dala hai taki expansion par image niche na khiske */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr_1fr] gap-12 lg:gap-10 items-start">

        {/* LEFT – STATS */}
        <motion.div
          className="flex lg:flex-col justify-between lg:justify-start border-l-2 border-blue-600 pl-6 lg:mt-4" // thoda top margin for alignment
        >
          <Stat number="16+" label="Events Hosted" />
          <Stat number="50+" label="Modules Learned" />
          <Stat number="10+" label="Years of Exp" />
        </motion.div>

        {/* CENTER – IMAGE + BADGE */}
        <motion.div
          className="relative flex justify-center lg:sticky lg:top-24" // Sticky use kar sakte ho taki image wahi rahe
        >
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000"
            alt="About Kattalyx Labs"
            className="rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-[520px] object-cover h-[450px]"
          />
          <div className="absolute -left-4 -top-6 md:-left-12 md:-top-8 scale-75 md:scale-110">
            <CircularTextBadge text=" • ABOUT • KATTALYX • LABS • ABOUT US •" />
          </div>
        </motion.div>

        {/* RIGHT – TEXT */}
        <motion.div className="text-center lg:text-left lg:mt-4">
          <p className="text-blue-600 font-bold uppercase tracking-widest mb-3 text-xs">
            About Company
          </p>

          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6 text-slate-900">
            We Make Real Learning Happen
          </h2>

          <div className="text-slate-600 leading-relaxed text-sm md:text-base">
            <p>
              India has 3.17 lakh schools and over 40,000 colleges. Yet 42.6% of graduates step into the real world with no practical skills, no industry exposure, and no clarity on what they want to build with their lives.
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mt-4 space-y-4"
                >
                  <p className="font-bold text-slate-800">Kattalyx Labs was built to fix that.</p>
                  <p>
                    We bring India's most driven young founders, CEOs, and industry leaders directly into classrooms, transforming passive students into active thinkers.
                  </p>
                  <p>
                    Beyond learning, we build digital infrastructure — websites, apps, and brand strategies — that help institutions stand out.
                  </p>
                  <p className="font-semibold text-blue-600 italic">
                    This is not EdTech. This is institutional transformation.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex justify-center lg:justify-start mt-8">
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              className="rounded-full px-8 py-6 font-bold flex items-center gap-2 group shadow-lg hover:shadow-blue-200 transition-all"
            >
              {isExpanded ? "Show Less" : "Read More"}
              {isExpanded ? <ChevronUp size={18} /> : <ArrowUpRight size={18} />}
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}