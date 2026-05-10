
import { cn } from "@/lib/utils"
import { Marquee } from "../../components/ui/marquee"
import { Building2, Compass, Megaphone, MessageSquare, Rocket, Trophy, FileCheck, Video, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const trendingDomains = [
  { icon: FileCheck, title: "CV Review", color: "bg-blue-50 text-blue-600" },
  { icon: Video, title: "Mock Prep", color: "bg-purple-50 text-purple-600" },
  { icon: Trophy, title: "Case Comp", color: "bg-amber-50 text-amber-600" },
  { icon: Building2, title: "Placements", color: "bg-emerald-50 text-emerald-600" },
  { icon: MessageSquare, title: "Interviews", color: "bg-rose-50 text-rose-600" },
  { icon: Compass, title: "Career", color: "bg-cyan-50 text-cyan-600" },
  { icon: Megaphone, title: "Branding", color: "bg-orange-50 text-orange-600" },
  { icon: Rocket, title: "Startups", color: "bg-indigo-50 text-indigo-600" },
  { icon: Code2, title: "Coding", color: "bg-slate-50 text-slate-600" },
];

const ReviewCard = ({
  icon: Icon,
  title,
  color,
}: {
  icon: any
  title: string
  color: string
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn(
        "group relative h-44 w-52 flex flex-col items-center justify-center gap-4 rounded-[2rem] bg-white",
        "border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]",
        "transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-blue-100"
      )}
    >


      <div className={cn("p-4 rounded-2xl transition-transform duration-500 group-hover:rotate-6", color)}>
        <Icon className="h-8 w-8" />
      </div>

      <span className="text-slate-900 font-bold tracking-tight">{title}</span>

      {/* Modern bottom indicator */}
      <div className="absolute bottom-6 w-8 h-1 bg-slate-100 rounded-full overflow-hidden">
        <div className={cn("h-full w-0 group-hover:w-full transition-all duration-500", color.split(' ')[1].replace('text', 'bg'))} />
      </div>
    </motion.div>
  )
}

export function TrendingDomain() {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-6 uppercase">
          <Sparkles size={12} /> Explore More
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Our Trending <ZScribbleUnderline text="Domains" />
        </h2>

        <p className="max-w-xl text-slate-500 text-lg font-medium leading-relaxed">
          Industry leaders collaborate with us to bring you the best expertise.
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee reverse pauseOnHover className="[--duration:30s] py-8">
          {trendingDomains.map((domain) => (
            <ReviewCard
              key={domain.title}
              icon={domain.icon}
              title={domain.title}
              color={domain.color}
            />
          ))}
        </Marquee>

        {/* Modern Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white via-white/40 to-transparent"></div>
      </div>
    </div>
  )
}

const ZScribbleUnderline = ({ text, color = "#FACC15" }: { text: string; color?: string }) => (
  <span className="relative inline-block px-1">
    <span className="relative z-10">{text}</span>
    <svg
      className="absolute -bottom-2 left-0 w-[105%] h-4 pointer-events-none"
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M2 10 C 10 10, 25 8, 30 10 C 10 15, 5 18, 40 14 C 70 12, 90 12, 98 12"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      />
    </svg>
  </span>
);
