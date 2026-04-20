import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';

const listData = [
  {
    id: "01",
    thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800",
    duration: "1:45:12",
    badge: "TRENDING #1",
    title: "The Psychology of Money & Growth",
    subtitle: "Why Most People Stay Poor",
    views: "4.2M views",
    postedAt: "2 days ago",
    category: "Mindset",
    color: "#FFADF0", // Pastel Pink
  },
  {
    id: "02",
    thumbnail: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=800",
    duration: "2:10:05",
    badge: "NEW RELEASE",
    title: "Decoding the Indian Startup Ecosystem",
    subtitle: "What's Next in 2026?",
    views: "850K views",
    postedAt: "5 hours ago",
    category: "Startups",
    color: "#A0D2FF", // Pastel Blue
  },
  {
    id: "03",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800",
    duration: "2:05:45",
    badge: "MUST WATCH",
    title: "Inside the Mind of a Billionaire",
    subtitle: "Startup Secrets Revealed",
    views: "950K views",
    postedAt: "10 days ago",
    category: "Business",
    color: "#C4FF8E", // Pastel Green
  },
  {
    id: "04",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2fccd2c7d902?q=80&w=800",
    duration: "1:22:30",
    badge: "EDITOR'S CHOICE",
    title: "Building a Brand that Lasts",
    subtitle: "Lessons from Global Giants",
    views: "1.2M views",
    postedAt: "1 month ago",
    category: "Branding",
    color: "#FFE16A", // Pastel Yellow
  }
];

const FinalStudioFeed = () => {
  return (
    <section className="bg-white py-24 px-8 md:px-20 font-sans text-black">
      <div className="max-w-6xl mx-auto">

        {/* Header - Consistent with your other sections */}
        <div className="mb-20 border-b border-black pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-400 block mb-2">
              The Archive
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase italic leading-[0.8]">
              Conversations
            </h2>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-loose">
              Selected Episodes / 2026 <br />
              Featuring Raj Shamani
            </p>
          </div>
        </div>

        {/* Minimalist Studio List */}
        <div className="flex flex-col">
          {listData.map((item) => (
            <motion.div
              key={item.id}
              className="group relative border-b border-zinc-100 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 cursor-pointer overflow-hidden"
            >
              {/* Info Column */}
              <div className="flex items-start gap-8 z-10 w-full md:w-auto">
                <span className="text-xs font-black pt-2 tabular-nums text-zinc-300 group-hover:text-black transition-colors">
                  {item.id}
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      style={{ backgroundColor: item.color }}
                      className="px-2 py-0.5 rounded-sm text-[9px] font-black uppercase tracking-widest border border-black/[0.05] shadow-sm"
                    >
                      {item.badge}
                    </span>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">
                      {item.duration} • {item.views}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[0.9] uppercase group-hover:italic transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2 font-medium uppercase tracking-tight">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Floating Image Reveal (Hidden on Mobile) */}
              <div className="absolute left-[55%] top-1/2 -translate-y-1/2 w-64 aspect-video rounded-2xl overflow-hidden opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-2 transition-all duration-500 pointer-events-none z-0 hidden lg:block border-[4px] border-white shadow-2xl">
                <img src={item.thumbnail} className="w-full h-full object-cover" alt="preview" />
              </div>

              {/* Action Column */}
              <div className="flex items-center gap-4 z-10 self-end md:self-center">
                <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Play Now
                </span>
                <div className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300 shadow-sm">
                  <ArrowUpRight size={24} />
                </div>
              </div>

              {/* Background Slide Effect (Matches your card colors) */}
              <div
                style={{ backgroundColor: item.color }}
                className="absolute inset-0 translate-y-full group-hover:translate-y-[96%] transition-transform duration-500 opacity-30"
              />
            </motion.div>
          ))}
        </div>

        {/* Minimal Footer */}
        <div className="mt-20 flex justify-between items-center border-t border-zinc-100 pt-10">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">© 2026 Archive</span>
          <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] hover:text-blue-500 transition-colors">
            View All <Play size={10} className="fill-current" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalStudioFeed;