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
        <div className="sticky top-24  lg:block rounded-[1.5rem] overflow-hidden bg-slate-100 aspect-[4/5]">
          <motion.div style={{ y: imageY }} className="h-[120%] w-full">
            <img
              src={vansh}
              alt="Vansh Jain"
              className="w-full h-full object-cover contrast-125"
            />
          </motion.div>
        </div>

        {/* RIGHT: COMPRESSED EDITORIAL CONTENT */}
        <div className="flex flex-col">

          {/* Top: Bold Condensed Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="border-b border-slate-100  mb-8"
          >
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] block mb-4">
              The person who decided India's classrooms deserved better.
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.8] uppercase italic">
              Vansh <br /> <span className="text-slate-300">Jain.</span>
            </h2>
          </motion.div>

          {/* Middle: Two-Column Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-xl font-bold leading-tight text-slate-900">
                 Founder. Obsessed with making real learning happen in every institution in India.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Builder', 'Visionary', 'Connector', 'Disruptor', 'Founder'].map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-slate-50 text-slate-400 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-black text-slate-900">16+</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Events Led</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">9.6/10</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Avg Rating</p>
                </div>
              </div>
              <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">

              <motion.a
                  href="https://www.linkedin.com/in/vansh-jain26/"
                  target="_blank"
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 px-8 py-4 rounded-full text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-blue-200"
                >
                Get in touch <ArrowUpRight size={14} />
              </motion.a>
                </div> 
            </div>

            <div className="text-slate-500 text-sm leading-relaxed font-medium space-y-4">
              <p>
                Vansh Jain is the Founder and CEO of Kattalyx Labs — India's real-world learning and branding ecosystem for schools and colleges. While his peers navigated exams, Vansh was building one of India's most promising institutional transformation platforms.
              </p>
              <p>
                He views the classroom-to-real-world gap as a generational crisis. With 42.6% of graduates unemployable, Kattalyx Labs is his answer.
              </p>
              <p>
                In under a year, he has led 16+ events across 12+ institutions including <strong>Kendriya Vidyalaya</strong> and <strong>Doon School</strong>, maintaining a 93.9% student satisfaction rate. He doesn't talk about changing education; he shows up and changes it.
              </p>
            </div>
          </div>

          {/* Bottom: Impact Strip / CTA */}
          {/* <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
 
          </div> */}

        </div>
      </div>
    </section>
  );
}