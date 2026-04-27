import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import vansh from "../../assets/vansh.jpg";
export default function Founder() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section className="bg-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">

        {/* LEFT: COMPACT STICKY IMAGE */}
        <div className="sticky top-24 hidden lg:block rounded-[1.5rem] overflow-hidden bg-slate-100 aspect-[4/5]">
          <motion.div style={{ y: imageY }} className="h-[120%] w-full">
            <img
              src={vansh}
              alt="Vansh Jain"
              className="w-full h-full object-cover  contrast-125"
            />
          </motion.div>
        </div>

        {/* RIGHT: COMPRESSED EDITORIAL CONTENT */}
        <div className="flex flex-col">

          {/* Top: Bold Condensed Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="border-b border-slate-100 pb-10 mb-12"
          >
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] block mb-4">Founder</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.8] uppercase italic">
              Vansh <br /> <span className="text-slate-300 group-hover:text-black transition-colors">Jain.</span>
            </h2>
          </motion.div>

          {/* Middle: Two-Column Text (Saves Vertical Space) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-xl font-bold leading-tight text-slate-900">
                19. Founder. Obsessed with making real learning happen in every institution.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Visionary', 'Disruptor', 'Founder'].map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-slate-50 text-slate-400 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-slate-500 text-sm leading-relaxed font-medium space-y-4">
              <p>
                At 19, Vansh realized the classroom-to-real world gap is a generational crisis. 42.6% of graduates are unemployable, and 12 lakh institutions are stuck in the past.
              </p>
              <p>
                Kattalyx Labs is his answer. He doesn't just talk about change; he shows up in Kendriya Vidyalayas and Doon School to make it happen.
              </p>
            </div>
          </div>

          {/* Bottom: The "Impact" Strip */}
          <div className="mt-12  rounded-2xl p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6">

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2"
            >
              Contact <ArrowUpRight size={14} />
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}