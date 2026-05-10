import  { useState, useMemo } from "react";
import {
  Rocket,
  MessageCircle,
  Briefcase,
  ArrowRight,
  Search,
  GraduationCap,
  ArrowLeft,
  Cpu,
  Lightbulb,
  Landmark,
  HeartPulse,
  TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQ";

// --- DATA MAPPED DIRECTLY FROM BROCHURE ---

// interface Module {
//   id: number;
//   title: string;
//   cat: string;
//   layer: string;
//   level: string;
//   image: string;
// }

const ECOSYSTEM_LAYERS = [
  {
    id: "tech",
    name: "21st Century Tech Fluency",
    icon: Cpu,
    description: "AI, ChatGPT, Cyber Awareness, and IOT.",
    gradient: "bg-blue-600",
  },
  {
    id: "growth",
    name: "Personality & Growth",
    icon: Rocket,
    description: "Soft Skills, Habits, and Networking.",
    gradient: "bg-purple-600 ",
  },
  {
    id: "startup",
    name: "Startup & Innovation",
    icon: Lightbulb,
    description: "Shark Tank 2.0 and Brand Building.",
    gradient: "bg-amber-500 ",
  },
  {
    id: "finance",
    name: "Financial Advancement",
    icon: Landmark,
    description: "Stock Market and Investment Banking.",
    gradient: "bg-emerald-600 to-teal-500",
  },
  {
    id: "career",
    name: "Digital Career Mastery",
    icon: Briefcase,
    description: "LinkedIn, Personal Branding, and UI/UX.",
    gradient: "bg-rose-600 ",
  },
  {
    id: "wellness",
    name: "Mental Health",
    icon: HeartPulse,
    description: "Emotional Intelligence and Psychology.",
    gradient: "bg-indigo-600",
  },
  {
    id: "leadership",
    name: "Leadership & Strategy",
    icon: TrendingUp,
    description: "Negotiation, Mindset, and Time Management.",
    gradient: "bg-slate-800 ",
  },
  {
    id: "influence",
    name: "Social Influence",
    icon: MessageCircle,
    description: "Public Speaking and Communication.",
    gradient: "bg-orange-600 ",
  },
];

const MODULE_DATA = [
  {
    id: 1,
    title: "AI/ML",
    cat: "Tech",
    layer: "tech",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    id: 2,
    title: "ChatGPT & AI Tools",
    cat: "Tech",
    layer: "tech",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a",
  },
  {
    id: 3,
    title: "Cyber Awareness",
    cat: "Tech",
    layer: "tech",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    id: 4,
    title: "Soft Skills",
    cat: "Growth",
    layer: "growth",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
  },
  {
    id: 5,
    title: "Habits",
    cat: "Growth",
    layer: "growth",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
  },
  {
    id: 6,
    title: "Shark Tank 2.0",
    cat: "Startup",
    layer: "startup",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
  },
  {
    id: 7,
    title: "Brand Building",
    cat: "Startup",
    layer: "startup",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48",
  },
  {
    id: 8,
    title: "Stock Market",
    cat: "Finance",
    layer: "finance",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1611974714652-960201ca8378",
  },
  {
    id: 9,
    title: "Investment Banking",
    cat: "Finance",
    layer: "finance",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b",
  },
  {
    id: 10,
    title: "Negotiation",
    cat: "Leadership",
    layer: "leadership",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
  },
  {
    id: 11,
    title: "Time Management",
    cat: "Leadership",
    layer: "leadership",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
  },
];

export default function ProgramPage() {
  // const [selectedModules, setSelectedModules] = useState<Module[]>([]);
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const subModules = useMemo(() => {
    if (!activeLayer) return [];
    return MODULE_DATA.filter((m) => {
      const matchLayer = m.layer === activeLayer;
      const matchSearch = m.title.toLowerCase().includes(search.toLowerCase());
      return matchLayer && matchSearch;
    });
  }, [activeLayer, search]);

  // const toggleSelection = (mod: Module) => {
  //   setSelectedModules((prev) =>
  //     prev.find((x) => x.id === mod.id)
  //       ? prev.filter((x) => x.id !== mod.id)
  //       : [...prev, mod],
  //   );
  // };

  const currentCategory = ECOSYSTEM_LAYERS.find((l) => l.id === activeLayer);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 overflow-x-hidden font-sans">
      <Navbar />

      <main className="relative pt-40 pb-48 px-6 max-w-7xl mx-auto z-10">
        {/* --- HEADER --- */}
        <section className="mb-16 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 border-2 border-black rounded-full text-[10px] font-black uppercase mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <GraduationCap size={16} /> Kattalyx Labs Catalog
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-[1000] uppercase tracking-tighter leading-none">
            Explore{" "}
            <ZScribbleUnderline text="EcoSystem" />
          </h1>
          <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed pt-4">
            Kattalyx Labs integrates with industry leaders, elite schools, and social organizations
            to transform the landscape of modern education.
          </p>
        </section>

        <AnimatePresence mode="wait">
          {!activeLayer ? (
            /* --- MODERNIZED VIEW 1: MAIN MODULE CARDS --- */
            <motion.div
              key="main-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {ECOSYSTEM_LAYERS.map((layer, idx) => (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: idx * 0.05 },
                  }}
                  whileHover={{ y: -10 }}
                  onClick={() => setActiveLayer(layer.id)}
                  className="group relative cursor-pointer h-[340px] bg-white border border-slate-200 rounded-[2.5rem] p-8 transition-all hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:border-gray-300"
                >
                  {/* Glassy Background Icon Container */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${layer.gradient} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transform `}
                  >
                    <layer.icon size={30} />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-[1000] leading-[1.1] uppercase text-slate-800 transition-colors group-hover:text-black">
                      {layer.name}
                    </h3>
                    <p className="text-slate-500 text-xs font-bold leading-relaxed uppercase tracking-tight opacity-80 group-hover:opacity-100">
                      {layer.description}
                    </p>
                  </div>

                  {/* Bottom Action Area */}
                  <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between border-t border-slate-100 pt-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-black transition-colors">
                      View Modules
                    </span>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* --- VIEW 2: SPECIFIC MODULE LIST (Remains same as requested) --- */
            <motion.div
              key="sub-grid"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-10"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <button
                  onClick={() => setActiveLayer(null)}
                  className="flex items-center gap-2 px-6 py-4 bg-white  rounded-2xl text-[11px] font-black uppercase hover:bg-slate-50  transition-all active:translate-y-1 border-1 "
                >
                  <ArrowLeft size={16} /> Back to Module
                </button>
                <div className="relative flex-1">
                  <Search
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                    size={20}
                  />
                  <input
                    placeholder="Search modules..."
                    className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-black/5 focus:border-black outline-none font-bold"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {subModules.length > 0 ? (
                  subModules.map((m) => {
                    // const isSelected = selectedModules.some(
                    //   (s) => s.id === m.id,
                    // );
                    return (
                      <motion.div
                        layout
                        key={m.id}
                        // onClick={() => toggleSelection(m)}
                        className={`cursor-pointer rounded-[2.5rem] bg-white border border-slate-200 p-8 transition-all hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:border-gray-300"
                        `}
                      >
                        <img
                          src={m.image}
                          className="w-full aspect-video object-cover rounded-[1.8rem] mb-4"
                        />
                        <h4 className="text-xl font-black uppercase tracking-tighter">
                          {m.title}
                        </h4>
                        <p className="text-blue-600 text-[10px] font-black uppercase mt-1">
                          {m.level}
                        </p>
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="col-span-full py-20 text-center opacity-20 text-2xl font-black uppercase">
                    Coming Soon: {currentCategory?.name}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* --- FLOATING SELECTION TRAY --- */}
      {/* <AnimatePresence>
        {selectedModules.length > 0 && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl"
          >
            <div className="bg-slate-900 text-white p-6 rounded-[2.5rem] flex items-center justify-between shadow-2xl border-2 border-white/10">
              <span className="font-black uppercase text-sm">
                {selectedModules.length} Modules Selected
              </span>
              <button className="px-8 py-4 bg-blue-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Request Proposal{" "}
                <ArrowRight size={16} className="inline ml-2" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      <FAQSection/>
      <Footer />
    </div>
  );
}

const ZScribbleUnderline = ({ text, color = "#FACC15" }: { text: string; color?: string }) => (
  <span className="relative inline-block px-1">
    <span className="relative z-10">{text}</span>
    <svg
      className="absolute -bottom-3 left-0 w-[105%] h-6 pointer-events-none"
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
    >
      {/* Animated Main Stroke */}
      <motion.path
        d="M2 10 C 10 10, 25 8, 30 10 C 10 15, 5 18, 40 14 C 70 12, 90 12, 98 12"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeInOut",
        }}
      />

      {/* Background 'Ink' Fill (Optional: Animates slightly after) */}
      {/* <motion.path
        d="M2 10 Q 15 8, 25 10 L 5 15 Q 20 18, 40 14 L 98 12"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.3, // Slight stagger for the messy effect
          ease: "easeInOut",
        }}
      /> */}
    </svg>
  </span>
);
