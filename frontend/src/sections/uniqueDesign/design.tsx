import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Clock, Eye } from 'lucide-react';

const listData = [
  {
    id: "1",
    thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800",
    duration: "1:45:12",
    badge: "TRENDING #1",
    title: "The Psychology of Money & Growth: Why Most People Stay Poor",
    views: "4.2M views",
    postedAt: "2 days ago",
    category: "Mindset",
    description: "In this episode, we dive deep into the invisible scripts that run our financial lives and how to break them.",
    color: "#FFADF0" // Pink
  },
  {
    id: "2",
    thumbnail: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=800",
    duration: "2:10:05",
    badge: "NEW RELEASE",
    title: "Decoding the Indian Startup Ecosystem: What's Next in 2026?",
    views: "850K views",
    postedAt: "5 hours ago",
    category: "Startups",
    description: "A masterclass on venture capital, valuations, and the real truth about sustainable business growth.",
    color: "#A0D2FF" // Blue
  },
  {
    id: "3",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800",
    duration: "2:05:45",
    badge: "MUST WATCH",
    title: "Inside the Mind of a Billionaire: Startup Secrets Revealed",
    views: "950K views",
    postedAt: "10 days ago",
    category: "Business",
    description: "How to scale from 0 to 100 Crore? We talk about hiring, firing, and the lonely road of entrepreneurship.",
    color: "#C4FF8E" // Green
  },
  {
    id: "4",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2fccd2c7d902?q=80&w=800",
    duration: "1:22:30",
    badge: "EDITOR'S CHOICE",
    title: "Building a Brand that Lasts: Lessons from Global Giants",
    views: "1.2M views",
    postedAt: "1 month ago",
    category: "Branding",
    description: "Marketing isn't just ads; it's emotions. Learn how to craft a story that people remember forever.",
    color: "#FFE16A" // Yellow
  }
];

const MatchedPodcastFeed = () => {
  return (
    <section className="bg-white py-24 px-8 md:px-20 font-sans text-black">
      <div className="max-w-6xl mx-auto">

        {/* Header - Consistent with your Challenges section */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold mb-4 tracking-tight uppercase italic font-black">Recent Episodes</h3>
          <p className="text-zinc-500 text-lg max-w-md leading-snug">
            Insights and conversations from Raj Shamani with people who are actually building the future.
          </p>
        </div>

        {/* Clean Card List */}
        <div className="flex flex-col gap-8">
          {listData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="group flex flex-col lg:flex-row items-center gap-8 p-8 rounded-[2.5rem] bg-[#f9f9f9] border border-black/5 hover:border-black/10 transition-all shadow-sm hover:shadow-md"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full lg:w-72 aspect-video rounded-[2rem] overflow-hidden bg-zinc-200 shrink-0 shadow-inner">
                <img src={item.thumbnail} className="w-full h-full object-cover" alt="thumb" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                  {item.duration}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl scale-90 group-hover:scale-100 transition-transform">
                    <Play size={24} className="fill-black translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Info Area */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Badge/Category */}
                    <span
                      style={{ backgroundColor: item.color }}
                      className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-black/5"
                    >
                      {item.badge}
                    </span>

                    {/* Views & Time */}
                    <div className="flex items-center gap-4 text-zinc-400 text-[11px] font-bold uppercase tracking-tight">
                      <span className="flex items-center gap-1"><Eye size={12} /> {item.views}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {item.postedAt}</span>
                    </div>
                  </div>

                  <h4 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight group-hover:text-zinc-700 transition-colors uppercase">
                    {item.title}
                  </h4>

                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 max-w-2xl font-medium">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Arrow Button - Clean & Round */}
              <div className="shrink-0">
                <button className="w-16 h-16 rounded-full bg-white border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-sm hover:rotate-45">
                  <ArrowUpRight size={28} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center border-t border-zinc-100 pt-16">
          <button className="flex items-center gap-3 font-black text-zinc-400 hover:text-black transition-all uppercase text-xs tracking-[0.3em]">
            View full archive <ArrowUpRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default MatchedPodcastFeed;