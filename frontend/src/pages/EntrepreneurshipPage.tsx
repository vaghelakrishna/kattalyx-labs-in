import { motion } from "framer-motion";
import { Rocket, Lightbulb, Users, TrendingUp, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pillars = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Ideation Labs",
    desc: "Structured workshops to validate your idea before writing a single line of code.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Launch Programs",
    desc: "From MVP to market — guided cohorts that take your startup from 0 to 1.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Founder Network",
    desc: "Connect with 500+ student founders, mentors, and investors across India.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth Mentorship",
    desc: "1-on-1 sessions with founders who've scaled real businesses.",
  },
];

const stories = [
  {
    name: "Vansh Jain",
    role: "Founder, Kattalyx Labs",
    quote: "I started with just an idea in my dorm room. The ecosystem here turned it into a registered company.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    tag: "EdTech",
  },
  {
    name: "Priya Mehta",
    role: "Co-Founder, GreenLoop",
    quote: "The mentorship program connected me with investors I never thought I'd have access to as a student.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    tag: "CleanTech",
  },
  {
    name: "Arjun Singh",
    role: "Founder, DevSprint",
    quote: "Kattalyx gave me the confidence and tools to quit my job and build full-time.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    tag: "SaaS",
  },
];

const stats = [
  { value: "200+", label: "Student Startups" },
  { value: "₹2Cr+", label: "Funding Raised" },
  { value: "50+", label: "Mentors" },
  { value: "15+", label: "Cities" },
];

const EntrepreneurshipPage = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A]">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-black translate-x-[2px] translate-y-[2px] rounded-full" />
            <div className="relative flex items-center gap-2 px-4 py-1.5 bg-[#FFD100] border-2 border-black rounded-full text-[10px] font-black uppercase tracking-wider">
              <Rocket className="w-3.5 h-3.5 stroke-[2.5px]" /> Entrepreneurship Cell
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-slate-900 max-w-4xl">
            Build Something <br />
            <span className="text-blue-600">That Matters.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-xl leading-relaxed">
            India's most ambitious student founders start here. Ideate, validate, launch, and scale — with the right people by your side.
          </p>

          <div className="flex gap-4 mt-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all">
              Join the Cohort
            </button>
            <button className="border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
              Meet the Founders
            </button>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-black text-blue-600">{s.value}</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Our Programs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl hover:border-blue-100 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {p.icon}
              </div>
              <h3 className="font-black text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOUNDER STORIES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Founder Stories</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl transition-all cursor-pointer"
            >
              <span className="text-[9px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{s.tag}</span>
              <p className="text-slate-600 italic mt-6 mb-8 leading-relaxed">"{s.quote}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <img src={s.image} className="w-12 h-12 rounded-full object-cover" alt={s.name} />
                <div>
                  <p className="font-bold text-sm">{s.name}</p>
                  <p className="text-xs text-slate-400">{s.role}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-blue-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-900 rounded-[3rem] p-16 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            The Next Big Thing <br />
            <span className="text-[#FFD100]">Starts With You.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Apply to our next entrepreneurship cohort and build alongside India's most driven student founders.
          </p>
          <button className="bg-[#FFD100] text-black px-10 py-4 rounded-2xl font-black hover:scale-105 transition-all">
            Apply Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EntrepreneurshipPage;
