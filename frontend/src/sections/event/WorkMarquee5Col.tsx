import { motion } from "framer-motion";
import Event1 from '../../assets/events/Event1.webp'
import Event2 from '../../assets/events/Event2.webp'
import Event3 from '../../assets/events/Event3.webp'
import Event4 from '../../assets/events/Event4.webp'
import Event5 from '../../assets/events/Event5.webp'
import Event6 from '../../assets/events/Event6.webp'

export const WorkMarquee5Col = () => {
  const allProjects = [
    { title: "Smash Foods", img: Event1 },
    { title: "Lumar", img: Event2 },
    { title: "Vybrance Labs", img: Event3 },
    { title: "Coho+", img: Event4 },
    { title: "Kahuna", img: Event5 },
    { title: "A La Maison", img: Event6 },
  ];

  const ColumnTrack = ({ items, reverse = false, duration = 30 }: { items: any[]; reverse?: boolean; duration?: number }) => (
    <div className="flex flex-col gap-4 overflow-hidden h-[700px] relative shrink-0">
      <motion.div
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: duration, repeat: Infinity }}
        className="flex flex-col gap-4"
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-zinc-100 bg-white group relative shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.03)] transition-all duration-500"
          >
            <img
              src={item.img}
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              alt={item.title}
            />
            {/* Elegant light-themed overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
              <h3 className="text-zinc-900 font-black uppercase tracking-[0.1em] text-xs translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                {item.title}
              </h3>
            </div>
            {item.video && (
              <div className="absolute top-5 right-5">
                <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center border border-zinc-100">
                  {/* <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-zinc-900 border-b-[4px] border-b-transparent ml-0.5" /> */}
                </div>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="bg-[#FCFCFD] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="mb-20 flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Archive / 2026</span>
            <div className="w-12 h-[1.5px] bg-zinc-200" />
          </div>
          <h2 className="text-5xl md:text-8xl font-[1000] text-zinc-900 tracking-tighter uppercase leading-[0.8]">
            WORK CYCLE<span className="text-blue-700">.</span>
          </h2>
        </div>

        {/* 5-COLUMN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 h-[700px] relative overflow-hidden px-2">

          <ColumnTrack items={[allProjects[0], allProjects[1], allProjects[2]]} duration={28} />
          <ColumnTrack items={[allProjects[3], allProjects[4], allProjects[5]]} reverse duration={38} />
          <ColumnTrack items={[allProjects[2], allProjects[0], allProjects[4]]} duration={22} />
          <ColumnTrack items={[allProjects[1], allProjects[5], allProjects[3]]} reverse duration={45} />
          <ColumnTrack items={[allProjects[4], allProjects[2], allProjects[1]]} duration={32} />

          {/* Fading Mask Overlays - Match background color */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#FCFCFD] via-[#FCFCFD]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#FCFCFD] via-[#FCFCFD]/80 to-transparent z-20 pointer-events-none" />
        </div>

      </div>
    </section>
  );
};
