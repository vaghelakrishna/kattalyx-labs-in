// import { motion } from "framer-motion";
import { motion } from "framer-motion";
import { MoreVertical, CheckCircle2, Play, ArrowRight } from "lucide-react";

const videoData = [
  {
    id: "1",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800",
    duration: "1:38:21",
    viewsBadge: "12M+ VIEWS",
    title: "Khan Sir on World War 3, India vs Pakistan, China, Trump & Epstein Files",
    channel: "Raj Shamani",
    isVerified: true,
    views: "13M views",
    postedAt: "3 weeks ago",
  },
  {
    id: "2",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800",
    duration: "2:12:46",
    viewsBadge: "1M+ VIEWS",
    title: "Your Parents Are Making You Poor Without You Realising | Mitesh & Indu",
    channel: "Raj Shamani",
    isVerified: true,
    views: "1M views",
    postedAt: "2 months ago",
  },
  {
    id: "3",
    thumbnail: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800",
    duration: "1:50:41",
    viewsBadge: "1.5M+ VIEWS",
    title: "Indian Law Exposed: Courts, Crime, Bail, Power & Police | Utkarsh Dave",
    channel: "Raj Shamani",
    isVerified: true,
    views: "1.8M views",
    postedAt: "5 months ago",
  },
  {
    id: "4",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    duration: "0:45:12",
    viewsBadge: "NEW",
    title: "Degrees vs Skills Debate: ROI, Job Market & Future Career Outcomes",
    channel: "Raj Shamani",
    isVerified: true,
    views: "98K views",
    postedAt: "17 hours ago",
  },
];

const VideoFeed = () => {
  return (
    <section className="bg-[#050505] py-20 px-8 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header Area */}
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
              The Archive
            </span>
            <h2 className="text-4xl font-bold tracking-tighter uppercase">Recent Podcasts</h2>
          </div>
          <button className="group flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-all uppercase">
            Explore All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {videoData.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#1A1A1A] mb-4">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Badge Overlay (Top Left) */}
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-[9px] font-black px-2 py-1 rounded-sm tracking-tighter shadow-lg">
                  {video.viewsBadge}
                </div>

                {/* Duration Badge (Bottom Right) */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md border border-white/10">
                  {video.duration}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                  >
                    <Play className="fill-black text-black w-6 h-6 ml-1" />
                  </motion.div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 px-1">
                <div className="flex justify-between items-start gap-3">
                  <h3 className="text-[15px] font-bold leading-[1.3] line-clamp-2 tracking-tight group-hover:text-blue-400 transition-colors">
                    {video.title}
                  </h3>
                  <button className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="w-4 h-4 text-slate-500 hover:text-white" />
                  </button>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    <span>{video.channel}</span>
                    {video.isVerified && (
                      <CheckCircle2 className="w-3 h-3 fill-blue-500 text-black border-none" />
                    )}
                  </div>
                  <div className="text-[12px] text-slate-500 font-medium">
                    {video.views} <span className="mx-1">•</span> {video.postedAt}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoFeed;