import { motion } from "framer-motion";
import Event1 from '../../assets/events/Event1.webp'
import Event2 from '../../assets/events/Event2.webp'
// import Event3 from '../../assets/events/Event3.webp'
import Event4 from '../../assets/events/Event4.webp'
// import Event5 from '../../assets/events/Event5.webp'
import Event6 from '../../assets/events/Event6.webp'
import Event7 from '../../assets/events/Event7.webp'
import Event8 from '../../assets/events/Event8.webp'
import Event10 from '../../assets/events/Event10.webp'
import Event11 from '../../assets/events/Event11.webp'
import Event12 from '../../assets/events/Event12.webp'
import Event15 from '../../assets/events/Event15.webp'
import Event16 from '../../assets/events/Event16.webp'
import DU1 from '../../assets/events/DU1.webp'
import DU2 from '../../assets/events/DU2.webp'
import DU3 from '../../assets/events/DU3.webp'
import DU4 from '../../assets/events/DU4.webp'
import DU5 from '../../assets/events/DU5.webp'


export const Marquee = () => {
  const PHOTO_GALLERY = [
    { url: Event1, tag: "Highlights" },
    { url: Event2, tag: "Innovation" },
    { url: Event2, tag: "Mentorship" },
    { url: Event4, tag: "Leadership" },
    { url: Event2, tag: "Cybersecurity" },
    { url: Event6, tag: "Confidence" },
    { url: Event7, tag: "Technology" },
    { url: Event8, tag: "Career" },
    { url: Event10, tag: "Community" },
    { url: Event11, tag: "Journey" },
    { url: Event12, tag: "Expression" },
    { url: Event15, tag: "Empowerment" },
    { url: Event16, tag: "Impact" },
    { url: DU1, tag: "AI" },
    { url: DU2, tag: "Bootcamp" },
    { url: DU3, tag: "Startup" },
    { url: DU4, tag: "Guidance" },
    { url: DU5, tag: "Collaboration" },
  ];
  return (
     <section className="bg-white py-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Inside the Experience</h2>
                <p className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
                  Moments in <span className="text-slate-300">Motion.</span>
                </p>
              </div>
              <p className="text-slate-500 font-medium max-w-xs text-sm leading-relaxed">
                A glimpse into the workshops, energy, and breakthroughs from our global sessions.
              </p>
            </div>
    
            {/* Marquee Container */}
            <div className="relative flex flex-col gap-6">
              {/* First Row - Moving Right */}
              <div className="flex gap-6 animate-marquee whitespace-nowrap">
                {[...PHOTO_GALLERY, ...PHOTO_GALLERY].map((photo, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 0.98 }}
                    className={`relative flex-shrink-0 overflow-hidden rounded-[2.5rem] bg-slate-100 group cursor-none
                ${i % 3 === 0 ? 'w-[300px] md:w-[300px]' : i % 2 === 0 ? 'w-[400px] md:w-[600px]' : 'w-[250px] md:w-[350px]'} 
                h-[350px] md:h-[350px]`}
                  >
                    <img
                      src={photo.url}
                      className="h-full w-full object-cover  transition-all duration-1000 ease-in-out group-hover:scale-110"
                      alt="Event highlight"
                    />
                    {/* Subtle Glass Tag */}
                    <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                        {photo.tag}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
    
              {/* Reverse Row - Optional: Use if you want a second row moving left for more depth */}
            </div>
    
            {/* CSS for the Marquee Animation */}
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
          </section>
  )
}