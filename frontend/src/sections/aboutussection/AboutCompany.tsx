import CircularTextBadge from "@/components/ui/CircularTextBadge";
import * as CountUpModule from "react-countup";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CountUp = CountUpModule.default;
export default function AboutCompany() {
  const scrollToMission = () => {
    document
      .getElementById("whychooseus")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="w-full bg-white">
        {/* ===== HERO BANNER ===== */}


        {/* ===== MAIN CONTENT ===== */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-12 lg:gap-10 items-center">

          {/* LEFT – STATS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 border-l border-gray-200 pl-6 lg:pl-6 lg:border-l
               flex lg:block justify-between lg:justify-start"
          >
            {/* <Stat number="16+" label="Events Hosted" />
            <Stat number="50+" label="Modules Learned" />
            <Stat number="10+" label="Years of Experience" /> */}
          </motion.div>

          {/* CENTER – IMAGE + BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:-translate-x-8"
          >
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000"
              alt="About Kattalyx Labs"
              className="rounded-2xl md:rounded-3xl shadow-xl 
                 w-full max-w-[520px] md:max-w-[720px] 
                 h-[300px] md:h-auto object-cover"
            />

            {/* Rotating Badge */}
            <div className="absolute 
                    -left-4 -top-6 
                    md:-left-12 md:-top-8 
                    scale-75 md:scale-110">
              <CircularTextBadge text=" • BOUT • KATTALYX • LABS • ABOUT US •" />
            </div>
          </motion.div>

          {/* RIGHT – TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <p className="text-blue-600 font-semibold uppercase tracking-wider mb-3 text-sm">
              About Company
            </p>

            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-5">
              Creative agency & their <br className="hidden md:block" />
              best solutions
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
              At Kattalyx Labs, we bridge the gap between education and industry by
              delivering real-world learning experiences, mentorship, and innovation-driven programs.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button
                onClick={scrollToMission}
                className="rounded-full px-6 py-5 flex items-center gap-2 group"
              >
                Read More
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-y-1 group-hover:-translate-x-1" />
              </Button>
            </div>
          </motion.div>

        </section>

      </div>
    </>
  );
}

/* ===== STAT COMPONENT ===== */
function Stat({ number, label }: { number: string; label: string }) {
  const numericValue = parseFloat(number.replace(/[^\d.]/g, ""));
  const suffix = number.replace(/[\d.]/g, "");

  return (
    <div>
      <h3 className="text-2xl md:text-4xl font-bold text-gray-900">

        <CountUp
          end={numericValue}
          duration={2}
          enableScrollSpy
          scrollSpyOnce
        />
        {suffix}
      </h3>
      <p className="text-gray-500 mt-1 text-xs md:text-sm">
        {label}</p>
    </div>
  );
}