import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Eye } from 'lucide-react';

const videoData = [
  {
    id: "01",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800",
    duration: "1:38:21",
    badge: "12M+ VIEWS",
    title: "Khan Sir on World War 3 & Global Power",
    views: "13M views",
    color: "#FFADF0", // Pink
  },
  {
    id: "02",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800",
    duration: "2:12:46",
    badge: "TRENDING",
    title: "How Traditional Mindsets Impact Wealth",
    views: "1M views",
    color: "#A0D2FF", // Blue
  },
  {
    id: "03",
    thumbnail: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800",
    duration: "1:50:41",
    badge: "MUST WATCH",
    title: "Exposing the Indian Judicial System",
    views: "1.8M views",
    color: "#C4FF8E", // Green
  },
  {
    id: "04",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    duration: "0:45:12",
    badge: "NEW",
    title: "The ROI of Modern Skills vs Degrees",
    views: "98K views",
    color: "#FFE16A", // Yellow
  }
];

const HorizontalVideoFeed = () => {
  const scrollRef = useRef(null);

  return (
    <section className="bg-white py-32 overflow-hidden font-sans text-black">
      <div className="px-8 md:px-20 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-400 block mb-3">Studio Archive</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.8]">
            Selected <br /> <span className="text-zinc-200 group-hover:text-black transition-colors">Episodes</span>
          </h2>
        </div>
        <p className="max-w-[240px] text-xs font-bold text-zinc-400 uppercase tracking-widest leading-relaxed">
          Deep-dives into power, wealth, and the future of India.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-20 px-8 md:px-20 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videoData.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ y: -10 }}
              className="min-w-[320px] md:min-w-[450px] snap-center"
            >
              {/* Card Structure */}
              <div className="relative group">
                {/* ID Number Floating */}
                <span className="absolute -top-6 -left-2 text-6xl font-black text-zinc-100 z-0 transition-colors group-hover:text-black/5">
                  {video.id}
                </span>

                {/* Main Card */}
                <div className="relative z-10 bg-[#fbfbfb] border border-black/5 rounded-[2.5rem] p-6 transition-all group-hover:border-black/10 group-hover:shadow-2xl">

                  {/* Image/Thumbnail */}
                  <div className="relative aspect-video rounded-[1.8rem] overflow-hidden mb-8 shadow-inner">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />

                    {/* Floating Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                        <Play size={20} className="fill-black ml-1" />
                      </div>
                    </div>

                    {/* Duration Overlay */}
                    <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-[10px] font-bold text-white px-2 py-1 rounded-md">
                      {video.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span
                        style={{ backgroundColor: video.color }}
                        className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-black/5"
                      >
                        {video.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-zinc-400 text-[10px] font-bold">
                        <Eye size={12} /> {video.views}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black tracking-tighter leading-[1.1] uppercase">
                      {video.title}
                    </h3>

                    <div className="pt-4 flex justify-between items-center border-t border-black/5">
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Watch Episode</span>
                      <div className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Spacer for scroll padding */}
          <div className="min-w-[100px] h-full" />
        </div>
      </div>

      {/* Custom Scroll Progress Bar */}
      <div className="px-8 md:px-20 mt-8 flex items-center gap-4">
        <div className="h-[2px] w-32 bg-zinc-100 relative overflow-hidden">
          <motion.div className="absolute inset-0 bg-black origin-left" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest">Scroll to Explore</span>
      </div>
    </section>
  );
};

export default HorizontalVideoFeed;