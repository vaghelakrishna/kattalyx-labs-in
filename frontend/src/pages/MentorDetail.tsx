"use client";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, BookOpen,
  MessageSquare, Calendar, X,
  ChevronDown, Quote, Star, TrendingUp, Users, CheckCircle2,
} from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- MENTORS DATA (Mock Database) ---
const mentorsData = {
  "vansh-jain": {
    name: "Vansh Jain",
    role: "Founder & CEO",
    avatar: "/src/assets/vansh.jpg",
    bio: "Visionary leader with a passion for building scalable tech ecosystems. Vansh has mentored over 500+ students in startup ideation and tech architecture.",
    skills: ["Startup Strategy", "Product Design", "Cloud Architecture"],
    linkedin: "https://linkedin.com/in/vansh-jain26/",
    twitter: "#",
    experience: "8+ Years",
    workshops: [
      { title: "Zero to One: Startup Ideation", date: "Jan 2024", duration: "4 Hours", thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80" },
      { title: "Building Scalable SaaS", date: "Nov 2023", duration: "6 Hours", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
    ],
    testimonials: [
      {
        text: "The way he explains complex architecture is just mind-blowing.",
        author: "Rahul Mehta",
        role: "SDE @ Google",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"
      },
      {
        text: "Direct, honest, and extremely knowledgeable. Best 1-on-1 session.",
        author: "Sanya Gupta",
        role: "UX Designer",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
      }
    ]
  },
  // ... Add other mentors here with same slug as MeetMentor page
};

export default function MentorDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const mentor = mentorsData[slug as keyof typeof mentorsData];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!mentor) {
    return (
      <div className="h-screen flex flex-col items-center justify-center font-black uppercase tracking-widest text-slate-400">
        <p>Mentor Not Found</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-xs underline">Go Back</button>
      </div>
    );
  }

  const faqs = [
    { q: "Is this a recorded or live session?", a: "Every 1-on-1 session is 100% live and personalized to your specific goals." },
    { q: "Can I bring my startup idea to the call?", a: "Absolutely! Vansh specializes in Zero-to-One strategy and will give you a direct roadmap." },
    { q: "What happens if I need to reschedule?", a: "You can reschedule up to 24 hours before the session via the dashboard." }
  ];

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white pb-32"
      >
        {/* 1. TOP NAV / BACK BUTTON */}
        <nav className="w-fit mt-20 mx-4 md:mx-10 px-4  py-2 z-[60]  rounded-full border border-slate-100 shadow-sm">
          <button onClick={() => navigate(-1)} className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back
          </button>
        </nav>

        <div className="max-w-7xl mx-auto px-6 py-12">

          {/* 2. HERO SECTION with Shared Element Transition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 md:mb-32">
            <motion.div
              layoutId={`card-${slug}`}
              transition={{ type: "spring", duration: 0.8, bounce: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] md:border-[10px] border-slate-50 relative group">
                <img src={mentor.avatar} alt={mentor.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
            >
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{mentor.role}</span>
              <h1 className="text-5xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.85] mb-8">
                {mentor.name.split(' ')[0]} <br />
                <span className="text-slate-200 italic font-serif">{mentor.name.split(' ')[1]}</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">{mentor.bio}</p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <button className="bg-black text-white px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/10 active:scale-95">
                  Book 1-on-1 Session <MessageSquare size={16} />
                </button>
                <div className="flex gap-3 justify-center">
                  <a href={mentor.linkedin} className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-lg font-bold">in</a>
                  <a href={mentor.twitter} className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all">𝕏</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3. QUICK STATS BAR */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-slate-100 mb-32"
          >
            {[
              { label: "Students Trained", value: "2.5k+", icon: <Users size={20} className="text-blue-500" /> },
              { label: "Expertise", value: mentor.experience, icon: <TrendingUp size={20} className="text-emerald-500" /> },
              { label: "User Rating", value: "4.9/5", icon: <Star size={20} className="text-orange-400" fill="currentColor" /> },
              { label: "Sessions", value: "150+", icon: <CheckCircle2 size={20} className="text-purple-500" /> }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="mb-3 p-4 rounded-2xl bg-slate-50 group-hover:bg-white group-hover:shadow-xl transition-all duration-300">{stat.icon}</div>
                <div className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* 4. BENTO GRID SKILLS */}
          <div className="mb-32">
            <div className="flex flex-col mb-12">
              <p className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-2">Expertise</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900">Core Mastery.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[450px]">
              <motion.div whileHover={{ y: -5 }} className="md:col-span-2 md:row-span-2 bg-slate-900 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group">
                <div className="relative z-10 text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-xl border border-white/10"><TrendingUp size={24} /></div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">{mentor.skills[0]}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-[250px]">Scaling architectures and startup ideation from zero to one.</p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 blur-[80px]" />
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="md:col-span-2 bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex items-center gap-6 group hover:bg-white hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-[1.5rem] bg-blue-100 flex items-center justify-center text-blue-600 shrink-0"><BookOpen size={28} /></div>
                <div><h4 className="text-xl font-bold text-slate-900">{mentor.skills[1]}</h4><p className="text-slate-500 text-xs mt-1 uppercase font-black tracking-widest">Mastery Level</p></div>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-emerald-50 rounded-[2.5rem] p-8 border border-emerald-100 flex flex-col justify-center items-center text-center group hover:bg-white hover:shadow-xl transition-all">
                <div className="text-emerald-600 mb-2 font-black text-[10px] uppercase tracking-widest text-center">Certified</div>
                <h4 className="text-lg font-bold text-slate-900">{mentor.skills[2]}</h4>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-purple-50 rounded-[2.5rem] p-8 border border-purple-100 flex flex-col justify-center items-center text-center group hover:bg-white hover:shadow-xl transition-all">
                <div className="text-purple-600 mb-2 font-black text-[10px] uppercase tracking-widest">Industry</div>
                <h4 className="text-lg font-bold text-slate-900">Tech Strategy</h4>
              </motion.div>
            </div>
          </div>

          {/* 5. WORKSHOPS (Existing) */}
          <div className="pt-20 border-t border-slate-100 mb-32">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">Masterclasses.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mentor.workshops.map((ws, i) => (
                <motion.div key={i} whileHover={{ y: -8 }} className="group bg-slate-50 rounded-[2.5rem] overflow-hidden p-4 flex flex-col sm:flex-row gap-6 border border-transparent hover:border-slate-200 transition-all">
                  <div className="w-full sm:w-48 aspect-video sm:aspect-square rounded-2xl overflow-hidden shrink-0">
                    <img src={ws.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-[9px] font-black text-blue-500 uppercase tracking-widest mb-3">
                      <span className="bg-white px-2 py-1 rounded border border-slate-100">{ws.date}</span>
                      <span>{ws.duration}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 leading-tight">{ws.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 6. REVIEW SLIDER (Wall of Love) */}
          <div className="py-20 bg-slate-50 -mx-6 px-6 md:rounded-[4rem] mb-32">
            <div className="max-w-7xl mx-auto overflow-hidden">
              <div className="flex items-center gap-3 mb-12 justify-center">
                <Quote size={40} className="text-blue-500 opacity-20" />
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-center">The Wall of Love.</h2>
              </div>
              <div className="flex gap-6 overflow-x-auto no-scrollbar pb-10 snap-x">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div key={item} className="shrink-0 w-[85vw] md:w-[450px] bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 snap-center">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" className="text-amber-500" />)}
                    </div>
                    <p className="text-slate-600 italic mb-10 text-lg leading-relaxed">
                      "The session with {mentor.name.split(' ')[0]} changed how I view cloud architecture. His direct feedback on my startup was invaluable."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
                        <img src={`https://i.pravatar.cc/150?u=${item}`} alt="user" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-base">Student #{item}</h5>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mentee Since 2023</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* 7. FAQ SECTION */}
          <div className="max-w-3xl mx-auto mb-32 px-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-16">FAQs.</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-slate-100 rounded-[2rem] overflow-hidden bg-white hover:border-slate-300 transition-all">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-8 text-left">
                    <span className="font-bold text-slate-900 text-lg">{faq.q}</span>
                    <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }}><ChevronDown className="text-slate-400" /></motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="bg-slate-50 overflow-hidden">
                        <div className="p-8 pt-0 text-slate-600 text-base leading-relaxed">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* 8. FOOTER CTA */}
          <motion.div whileInView={{ y: [40, 0], opacity: [0, 1] }} className="p-12 md:p-24 bg-slate-950 rounded-[4rem] text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-none">Ready for your <br /><span className="text-blue-500 italic">Success Story?</span></h3>
              <button className="bg-white text-black px-12 py-6 rounded-full font-black uppercase text-[11px] tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95">
                Reserve My Spot Now
              </button>
            </div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full" />
          </motion.div>
        </div>

        {/* 9. STICKY MOBILE BOOKING BAR */}
        <motion.div
          initial={{ y: 100 }} animate={{ y: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90vw] md:w-auto md:min-w-[500px] z-[70] bg-white/80 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-full p-2 pl-6 flex items-center justify-between gap-6"
        >
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <img src={mentor.avatar} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-wider leading-none text-slate-900">Book {mentor.name.split(' ')[0]}</p>
              <p className="text-[9px] text-blue-600 font-bold uppercase mt-1">Limited Slots Left</p>
            </div>
          </div>
          <button className="bg-black text-white px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 transition-all flex items-center gap-2 group active:scale-95">
            Reserve Slot <Calendar size={14} />
          </button>
        </motion.div>

        {/* 10. VIDEO TESTIMONIAL MODAL */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
              <button onClick={() => setSelectedVideo(null)} className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform"><X size={40} /></button>
              <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-black border border-white/10 relative">
                <video src={selectedVideo} controls autoPlay className="w-full h-full object-contain" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </motion.div>



      <Footer />
    </>
  );
}


