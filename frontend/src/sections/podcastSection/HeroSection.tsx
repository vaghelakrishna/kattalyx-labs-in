import { motion } from "framer-motion";
import { Mic2 } from "lucide-react";

// Platform Icon URLs (using official branding)
const platformIcons = [
  { name: "Apple Podcast", url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Podcasts_%28iOS%29.svg" },
  { name: "Google Podcast", url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Google_Podcasts_%282018-2021%29.svg" },
  { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Sound Cloud", url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Soundcloud_icon.svg" },
];

const PodcastHero = () => {
  return (
    <section className="bg-[#F8F9FA] min-h-screen text-[#1A1A1A] pt-32 pb-20 relative overflow-hidden">
      {/* Background Grid Accent - Light Mode */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Floating Plus Icons */}
      <div className="absolute top-1/4 left-1/2 opacity-30 text-[#A0AEC0]">+</div>
      <div className="absolute top-1/2 right-1/4 opacity-30 text-[#A0AEC0]">+</div>
      <div className="absolute bottom-1/4 right-1/2 opacity-30 text-[#A0AEC0]">+</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-16 lg:gap-0 relative z-10">

        {/* --- LEFT TEXT CONTENT --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 lg:max-w-xl xl:max-w-2xl"
        >

          <p className="text-[#718096] text-[13px] font-black uppercase tracking-[0.3em] mb-4">Podcasts</p>
          <h1 className="text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-12 text-[#1A202C]">
            Life <br /> Science <br /> Culture
          </h1>

          {/* Platform Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-6 mt-16 max-w-sm">
            {platformIcons.map((icon, i) => (
              <motion.div
                key={icon.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <img src={icon.url} alt={icon.name} className="w-6 h-6 object-contain group-hover:scale-110 transition-all" />
                <div className="flex flex-col">
                  <span className="text-[#718096] text-[9px] font-medium leading-none uppercase tracking-wider">Available on</span>
                  <span className="text-[13px] font-semibold text-[#2D3748] group-hover:text-blue-600 transition-colors">{icon.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- RIGHT VISUAL STACK --- */}
        <div className="flex-1 relative min-h-[500px] md:min-h-[600px] lg:min-h-0">

          {/* Large Vertical Mic Shape - Adjusted for Light Mode */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="absolute top-8 right-10 w-[300px] h-[400px] md:w-[350px] md:h-[450px] rounded-[6rem] bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-10 flex items-center justify-center"
          >
            <Mic2 className="w-48 h-48 md:w-64 md:h-64 text-[#E2E8F0] stroke-[0.5px]" />
            <div className="absolute inset-x-1/2 h-0.5 w-16 bg-slate-100 -translate-x-1/2" />
          </motion.div>

          {/* Host Photo Pill (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-10 md:bottom-15 right-[-5px] w-[200px] h-[300px] md:w-[240px] md:h-[340px] rounded-[6rem] overflow-hidden border-[6px] border-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] group"
          >
            <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800" alt="Host" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PodcastHero;