import { useEffect, useRef, useState } from "react";

const events = [
  {
    title: "Startup Launchpad Session",
    date: "Dec 14, 2024",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    description: "Helping early-stage founders validate ideas and launch faster with expert guidance."
  },
  {
    title: "Design & Brand Strategy Workshop",
    date: "Dec 21, 2024",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    description: "Building strong brand identities that connect emotionally with users."
  },
  {
    title: "Web & Product Development Bootcamp",
    date: "Jan 05, 2025",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    description: "Hands-on sessions focused on scalable web and product development."
  },
  {
    title: "Growth & Digital Marketing Meetup",
    date: "Jan 18, 2025",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    description: "Strategies, tools, and insights to grow startups in the digital-first world."
  },
  {
    title: "AI & Automation for Founders",
    date: "Feb 02, 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    description: "Leveraging AI tools and automation to scale smarter, not harder."
  }
];


export default function PastEventsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const CARD_WIDTH = 360;

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: index * CARD_WIDTH,
      behavior: "smooth"
    });
    setActiveIndex(index);
  };

  const scrollNext = () => {
    const nextIndex = (activeIndex + 1) % events.length;
    scrollToIndex(nextIndex);
  };

  // 🔁 Auto Scroll
  useEffect(() => {
    if (isHovering) return;

    intervalRef.current = setInterval(scrollNext, 3500);
    return () => clearInterval(intervalRef.current);
  }, [activeIndex, isHovering]);

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Popular Past Events
          </h2>
          <p className="mt-3 text-white/60">
            Moments that made an impact
          </p>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="
            flex gap-6 overflow-x-auto scroll-smooth
            scrollbar-hide px-10
          "
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="
                group flex-shrink-0
                w-[320px] h-[420px]
                rounded-3xl overflow-hidden
                relative cursor-pointer
              "
            >
              <img
                src={event.image}
                alt={event.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* Hover Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/80 via-black/40 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  flex items-end
                "
              >
                <div className="p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs uppercase tracking-widest text-white/60">
                    {event.date}
                  </p>
                  <h3 className="text-xl font-semibold text-white mt-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-white/70 mt-2">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${activeIndex === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/70"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// option
// import { useEffect, useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const events = [
//   {
//     title: "Startup Launchpad Session",
//     date: "Dec 14, 2024",
//     image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format",
//     description: "Helping early-stage founders validate ideas and launch faster with expert guidance."
//   },
//   {
//     title: "Design & Brand Strategy Workshop",
//     date: "Dec 21, 2024",
//     image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format",
//     description: "Building strong brand identities that connect emotionally with users."
//   },
//   {
//     title: "Web & Product Development Bootcamp",
//     date: "Jan 05, 2025",
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format",
//     description: "Hands-on sessions focused on scalable web and product development."
//   },
//   {
//     title: "Growth & Digital Marketing Meetup",
//     date: "Jan 18, 2025",
//     image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format",
//     description: "Strategies, tools, and insights to grow startups in the digital-first world."
//   }
// ];

// export default function PastEventsSlider() {
//   const [index, setIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   // Auto-play logic
//   useEffect(() => {
//     if (isHovered) return;
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % events.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, [isHovered]);

//   return (
//     <section className="bg-white py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Optimized Vibey Heading */}
//         <header className="mb-16">
//           <motion.span
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-400 block mb-2"
//           >
//             Our Legacy
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter"
//           >
//             Moments that <br />
//             <span className="text-slate-300 italic font-serif">made history.</span>
//           </motion.h2>
//         </header>

//         {/* GPU Accelerated Slider */}
//         <div
//           className="relative overflow-visible"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <motion.div
//             animate={{ x: `-${index * 100}%` }}
//             transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }} // Custom smooth ease
//             className="flex gap-6 cursor-grab active:cursor-grabbing"
//             style={{ touchAction: "pan-y" }}
//           >
//             {events.map((event, i) => (
//               <div
//                 key={i}
//                 className="relative shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-none border border-slate-100"
//               >
//                 <img
//                   src={event.image}
//                   alt={event.title}
//                   className="absolute inset-0 w-full h-full object-cover"
//                   loading="lazy" // Optimization: only load images when needed
//                 />

//                 {/* Content Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
//                   <span className="text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase mb-2">
//                     {event.date}
//                   </span>
//                   <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
//                     {event.title}
//                   </h3>
//                   <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
//                     {event.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Minimalist Progress Bar */}
//         <div className="mt-12 flex items-center gap-6">
//           <div className="flex gap-2">
//             {events.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setIndex(i)}
//                 className={`h-1 transition-all duration-500 rounded-full ${index === i ? "w-12 bg-slate-900" : "w-4 bg-slate-200"
//                   }`}
//               />
//             ))}
//           </div>
//           <div className="h-[1px] flex-1 bg-slate-100" />
//           <div className="flex gap-4">
//             <button
//               onClick={() => setIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1))}
//               className="p-4 border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-colors"
//             >
//               <ArrowRight className="rotate-180 w-4 h-4" />
//             </button>
//             <button
//               onClick={() => setIndex((prev) => (prev + 1) % events.length)}
//               className="p-4 border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-colors"
//             >
//               <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }