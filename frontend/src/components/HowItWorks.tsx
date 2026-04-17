import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const modules = [
  {
    id: "module-1",
    label: "Layer 01",
    title: "Real-World Learning",
    description: "Offline workshops, online sessions, and real-world competitions.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "module-2",
    label: "Layer 02",
    title: "Digital Infrastructure",
    description: "School ERP, mobile app, and website for complete digitization.",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "module-3",
    label: "Layer 03",
    title: "Career Pathways",
    description: "Guaranteed internships, job opportunities, and alumni network.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "module-4",
    label: "Layer 04",
    title: "School Growth & Branding",
    description: "Digital branding, reputation building via events and results.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function HowItWorks() {
  const [activeId, setActiveId] = useState(modules[0].id);

  // Fix 1: Added proper typing for the ref object
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    // Fix 2: Safety check for window and screen size
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
    );

    modules.forEach((m) => {
      const el = sectionRefs.current[m.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-slate-950 text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* LEFT COLUMN */}
        <div className="md:col-span-5">
          <div className="md:sticky md:top-24 space-y-6">
            <p className="text-xs uppercase tracking-widest text-slate-500">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Modular learning. <br />
              <span className="text-slate-400">Real-world outcomes.</span>
            </h2>

            {/* Nav - Desktop Only */}
            <div className="hidden md:block mt-10 space-y-4 border-l border-slate-800 pl-6">
              {modules.map((m) => (
                <div
                  key={m.id}
                  className={`relative py-2 transition-all duration-300 ${activeId === m.id ? 'opacity-100 translate-x-1' : 'opacity-40'
                    }`}
                >
                  {activeId === m.id && (
                    <span className="absolute -left-[25px] top-4 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
                  )}
                  <p className="text-xs uppercase text-slate-500">{m.label}</p>
                  <p className="text-lg font-medium">{m.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-7">
          {/* ✅ MOBILE VIEW (Stacked with Motion) */}
          <div className="flex flex-col gap-24 md:hidden">
            {modules.map((m) => (
              <motion.div
                key={`mobile-${m.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-4"
              >
                <div>
                  <p className="text-blue-500 text-xs font-bold uppercase tracking-widest">{m.label}</p>
                  <h3 className="text-2xl font-bold">{m.title}</h3>
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                  <img src={m.image} alt={m.title} className="w-full h-72 object-cover" />
                </div>
                <p className="text-slate-400 leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </div>

          {/* ✅ DESKTOP VIEW (Original Scroll Logic) */}
          <div className="hidden md:block space-y-64 pb-64">
            {modules.map((m) => (
              <motion.div
                key={m.id}
                id={m.id}
                ref={(el) => { sectionRefs.current[m.id] = el; }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="h-[450px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-slate-400 text-xl leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}