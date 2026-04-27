import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const modules = [
  {
    id: "step-1",
    label: "Step 01",
    title: "Book a Free Consultation",
    description: "Fill our partner form and our team reaches out within 24 hours to understand your institution's specific needs, audience, and goals.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "step-2",
    label: "Step 02",
    title: "Get a Custom Proposal",
    description: "We build a tailored proposal — event topics, podcast format, branding plan, E-Cell structure — designed specifically for your institution.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "step-3",
    label: "Step 03",
    title: "We Set Everything Up",
    description: "From speaker coordination to event logistics, branding assets to digital infrastructure — we handle every detail end to end.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "step-4",
    label: "Step 04",
    title: "Your Institution Transforms",
    description: "Students gain real-world exposure. Your institution gains a modern brand. Founders find their network. Results are visible from day one.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
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