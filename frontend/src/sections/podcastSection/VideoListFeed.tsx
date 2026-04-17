import { motion } from "framer-motion";
import { MoreVertical, CheckCircle2 } from "lucide-react";



const listData = [
  {
    id: "1",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800",
    duration: "1:45:12",
    badge: "TRENDING #1",
    title: "The Psychology of Money & Growth: Why Most People Stay Poor",
    views: "4.2M views",
    postedAt: "2 days ago",
    channel: "Raj Shamani",
    isVerified: true,
    description: "In this episode, we dive deep into the invisible scripts that run our financial lives and how to break them.",
    color: "bg-blue-600"
  },
  {
    id: "2",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=800",
    duration: "2:10:05",
    badge: "NEW RELEASE",
    title: "Decoding the Indian Startup Ecosystem: What's Next in 2026?",
    views: "850K views",
    postedAt: "5 hours ago",
    channel: "Raj Shamani",
    isVerified: true,
    description: "A masterclass on venture capital, valuations, and the real truth about sustainable business growth.",
    color: "bg-purple-600"
  },
  {
    id: "3",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800",
    duration: "2:05:45",
    badge: "MUST WATCH",
    title: "Inside the Mind of a Billionaire: Startup Secrets Revealed",
    views: "950K views",
    postedAt: "10 days ago",
    channel: "Raj Shamani",
    isVerified: true,
    description: "How to scale from 0 to 100 Crore? We talk about hiring, firing, and the lonely road of entrepreneurship.",
    color: "bg-emerald-600"
  },
  {
    id: "4",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2fccd2c7d902?q=80&w=800",
    duration: "1:22:30",
    badge: "EDITOR'S CHOICE",
    title: "Building a Brand that Lasts: Lessons from Global Giants",
    views: "1.2M views",
    postedAt: "1 month ago",
    channel: "Raj Shamani",
    isVerified: true,
    description: "Marketing isn't just ads; it's emotions. Learn how to craft a story that people remember forever.",
    color: "bg-orange-600"
  }
];

const VideoListFeed = () => {
  return (
    <section className="bg-[#0F0F0F] min-h-screen py-10 px-4 md:px-10 text-white font-sans">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {listData.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col md:flex-row gap-4 cursor-pointer"
          >
            {/* Thumbnail Logic */}
            <div className={`relative flex-shrink-0 overflow-hidden rounded-xl bg-neutral-900 ${item.type === 'short' ? 'w-full md:w-[360px] aspect-video flex justify-center' : 'w-full md:w-[360px] aspect-video'
              }`}>

              {item.type === 'short' ? (
                /* Shorts Pillar-box Style */
                <div className="relative h-full aspect-[9/16] bg-black">
                  <img src={item.thumbnail} className="h-full w-full object-cover" alt="short" />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-[10px] font-bold px-1 py-0.5 rounded flex items-center gap-1">
                    <span className="italic tracking-tighter">S</span> SHORTS
                  </div>
                </div>
              ) : (
                /* Standard Video Style */
                <>
                  <img src={item.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="video" />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-[11px] font-bold px-1.5 py-0.5 rounded">
                    {item.duration}
                  </div>
                  {item.badge && (
                    <div className="absolute bottom-2 left-2 bg-white text-black text-[10px] font-black px-1.5 py-0.5 rounded-sm">
                      {item.badge}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Meta Data */}
            <div className="flex-1 flex flex-col gap-1 min-w-0">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-[18px] font-medium leading-snug line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <MoreVertical className="w-5 h-5 text-neutral-400 shrink-0 mt-1" />
              </div>

              <p className="text-[12px] text-neutral-400">
                {item.views} • {item.postedAt}
              </p>

              <div className="flex items-center gap-2 mt-3 mb-2">
                <div className="w-6 h-6 rounded-full bg-neutral-700 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.channel}`} alt="avatar" />
                </div>
                <span className="text-[13px] text-neutral-400 flex items-center gap-1">
                  {item.channel} {item.isVerified && <CheckCircle2 className="w-3.5 h-3.5 fill-neutral-400 text-black" />}
                </span>
              </div>

              <p className="text-[13px] text-neutral-400 line-clamp-1">
                {item.description}
              </p>


            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoListFeed;