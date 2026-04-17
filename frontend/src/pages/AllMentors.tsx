import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";
import SEO from "@/components/ui/SEO";

import { dashboardAPI } from "@/services/api";
import vansh from "../assets/vansh.jpg";
import ishika from "../assets/ishika.jpg";
import puspak from "../assets/puspak.jpg";
import person from "../assets/person-1.jpg";
import mentor1 from "../assets/mentor1.jpg";
import mentor2 from "../assets/mentor2.jpg";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { TrendingDomain } from "@/sections/aboutussection/TrendingDomain";
import { cn } from "@/lib/utils";
import FAQSection from "@/components/FAQ";

interface Mentor {
  name: string;
  role: string;
  company: string;
  experience: string;
  rating: number;
  sessions: string;
  image: string;
  verified: boolean;
  expertise: string[];
}

interface Speaker {
  user?: { name: string };
  expertise?: string[];
  bio?: string;
  rating?: number;
  sessionsCount?: number;
  profileImage?: string | null;
  status: string;
}

export default function AllMentors() {
  const navigate = useNavigate(); // Navigation logic
  const [displayedMentors, setDisplayedMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 320,
          behavior: "smooth",
        });

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth - 10
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const heroMentors = [
    { id: 1, img: ishika, className: "top-16 left-20", delay: 0 },
    { id: 2, img: vansh, className: "top-40 left-44", delay: 0.6 },
    { id: 3, img: puspak, className: "bottom-28 left-24", delay: 1.2 },
    { id: 4, img: person, className: "top-20 right-24", delay: 0 },
    { id: 5, img: mentor1, className: "top-44 right-48", delay: 0.6 },
    { id: 6, img: mentor2, className: "bottom-32 right-28", delay: 1.2 },
  ];

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
    },
  };

  useEffect(() => {
    const mentors: Mentor[] = [
      { name: "Vansh Jain", role: "Founder & CEO", company: "Kattalyx Labs", experience: "Entrepreneur", rating: 4.9, sessions: "50+", image: vansh, verified: true, expertise: ["Personality", "Startup"] },
      { name: "Ishika Sharma", role: "Tech Expert", company: "Industry Pro", experience: "Tech Specialist", rating: 4.8, sessions: "30+", image: ishika, verified: true, expertise: ["Tech", "Women Empowerment"] },
      { name: "Pushpak", role: "AI Specialist", company: "Tech Innovator", experience: "AI Expert", rating: 4.9, sessions: "40+", image: puspak, verified: true, expertise: ["AI", "Cyber"] },
      { name: "Harsh Mishra", role: "Developer", company: "Tech Pro", experience: "Dev Expert", rating: 4.7, sessions: "35+", image: person, verified: true, expertise: ["Dev", "Tech"] },
    ];

    const fetchSpeakers = async () => {
      try {
        const response = await dashboardAPI.getSpeakers(1, 50);
        const apiSpeakers = response.data.data.speakers || [];
        const approvedSpeakers = apiSpeakers.filter((s: Speaker) => s.status === "Approved");
        const mappedSpeakers = approvedSpeakers.map((speaker: Speaker) => ({
          name: speaker.user?.name || "Speaker",
          role: speaker.expertise?.[0] || "Expert",
          company: "Industry Professional",
          experience: speaker.bio || "Professional Speaker",
          rating: speaker.rating || 4.5,
          sessions: `${speaker.sessionsCount || 0}+`,
          image: speaker.profileImage || null,
          verified: true,
          expertise: speaker.expertise || [],
        }));
        setDisplayedMentors([...mentors, ...mappedSpeakers]);
      } catch (err) {
        console.error("Error fetching speakers:", err);
        setDisplayedMentors(mentors);
      } finally {
        setLoading(false);
      }
    };
    fetchSpeakers();
  }, []);

  return (
    <>
      <SEO
        title="Our Mentors"
        description="Connect with industry experts and innovators at Kattalyx Labs."
      />
      <Navbar />
      <div className="min-h-screen bg-slate-50/50 overflow-x-hidden">

        {/* Hero */}
        <section className="relative max-w-7xl mx-auto w-full flex flex-col mt-20 mb-10 rounded-[32px] border border-gray-200 bg-white px-4 py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:120px_120px]" />

          <div className="hidden md:block">
            {heroMentors.map((heroMentor) => (
              <motion.div
                key={heroMentor.id}
                className={`absolute ${heroMentor.className} z-10 cursor-pointer`}
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: heroMentor.delay,
                }}
              >
                <div className="h-28 w-28 rounded-full bg-white p-1 shadow-lg">
                  <img
                    src={heroMentor.img}
                    alt="Mentor"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative z-20 mx-auto max-w-3xl text-center px-4">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
              Mentors Stories
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-black md:text-6xl">
              The best mentors <br className="hidden md:block" /> guide builders like you.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Learn directly from industry experts who have built, scaled, and
              shipped world-class products across startups and enterprises.
            </p>
          </div>
          <Link to="/register">
            <div className="items-center justify-center mt-10 flex">
              <AnimatedButton text="Apply as Mentor" />
            </div>
          </Link>
        </section>

        <section className="relative w-full h-screen max-h-[900px] bg-[#F8FAFC] flex items-center overflow-hidden py-12">


          <div className="max-w-7xl mx-auto px-6 w-full flex flex-col justify-center">
            {/* --- HEADER --- */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase bg-white border border-blue-100 shadow-sm px-5 py-2 rounded-full mb-6"
              >
                 Built for Everyone
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter"
              >
                Mentorship <br />
                <span className="relative inline-block text-blue-600 italic px-2">
                  Redefined
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400" viewBox="0 0 300 20" preserveAspectRatio="none">
                    <path d="M5,15 Q150,5 295,15" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                for all
              </motion.h2>
            </div>

            {/* --- COMPACT BENTO GRID (H-SCREEN OPTIMIZED) --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full max-h-[500px]">
              {[
                { src: "src/assets/student.png", label: "Students", color: "bg-blue-50/50", border: "border-blue-100" },
                { src: "src/assets/college.png", label: "Grads", color: "bg-purple-50/50", border: "border-purple-100" },
                { src: "src/assets/professional.jpg", label: "Pros", color: "bg-orange-50/50", border: "border-orange-100" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className={cn(
                    "relative group flex flex-col items-center justify-between p-8 rounded-[3rem] border bg-white/80 backdrop-blur-sm transition-all duration-500",
                    item.border
                  )}
                >
                  {/* Top Label */}
                  <div className="w-full flex justify-between items-start">
                    <span className="text-sm font-bold text-slate-400">0{idx + 1}</span>
                    <div className={cn("p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity", item.color)}>
                      <ArrowRight size={16} className="text-slate-900" />
                    </div>
                  </div>

                  {/* Centered Image - Sized to keep section compact */}
                  <div className="relative">
                    <div className={cn("absolute inset-0 blur-3xl opacity-20 rounded-full", item.color)} />
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Bottom Title */}
                  <div className="text-center">
                    <h4 className="text-xl font-black text-slate-900">{item.label}</h4>
                    <div className="mt-2 h-1 w-0 group-hover:w-full bg-slate-900 rounded-full transition-all duration-500 mx-auto" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-white">
          <TrendingDomain />
        </section>

        <div className="max-w-7xl mx-auto px-6 py-12 ">
          {loading ? (
            <div className="text-center py-20 text-slate-400">Loading mentors...</div>
          ) : (
            <>
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">Featured Mentors</h2>
                    <p className="text-slate-500 mt-2 font-medium">Real-world mentoring and guidance.</p>
                  </div>
                  <div className="hidden md:flex gap-3">
                    <button onClick={() => scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" })} className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-900 hover:text-white transition"><ArrowLeft /></button>
                    <button onClick={() => scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" })} className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-900 hover:text-white transition"><ArrowRight /></button>
                  </div>
                </div>

                <div
                  ref={scrollRef}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
                >
                  {displayedMentors.map((mentor, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -10 }}
                      // OnClick logic added here
                      onClick={() => navigate(`/mentors/${mentor.name.toLowerCase().replace(/\s+/g, '-')}`)}
                      className="group relative h-[420px] min-w-[300px] md:min-w-[320px] flex-shrink-0 rounded-[2.5rem] overflow-hidden cursor-pointer snap-start"
                    >
                      {mentor.image ? (
                        <img src={mentor.image} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt={mentor.name} />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                          <span className="text-white text-6xl font-bold">{mentor.name.charAt(0)}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300" />
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-2xl font-black text-white leading-tight">{mentor.name}</h3>
                        <p className="text-sm text-white/80 mt-2">{mentor.role}</p>
                        <div className="mt-4 flex items-center gap-4">
                          <div className="flex items-center text-white text-xs"><Star className="w-3.5 h-3.5 fill-blue-400 text-blue-400 mr-1" />{mentor.rating}</div>
                          <span className="text-white text-xs">{mentor.sessions} Sessions</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div className="grid lg:grid-cols-2 items-center gap-10 md:gap-20">
                <div className="relative order-2 lg:order-1">
                  <div className="absolute -top-6 -left-6 w-full h-full rounded-[32px] bg-blue-100 hidden md:block" />
                  <img src="https://images.unsplash.com/photo-1507537509458-b8312d35a233?auto=format&fit=crop&w=1200&q=80" alt="Mentor" className="relative rounded-[32px] object-cover w-full h-[300px] md:h-[420px]" />
                </div>
                <div className="order-1 lg:order-2 text-center lg:text-left">
                  <span className="text-sm uppercase tracking-widest text-blue-600 font-medium bg-blue-100 p-2 rounded-2xl">Join Our Network</span>
                  <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">Teach what you’ve mastered. <br className="hidden md:block" /><span className="text-slate-400">Inspire what comes next.</span></h2>
                  <p className="mt-6 text-lg text-slate-600 max-w-md mx-auto lg:mx-0">Mentor ambitious learners, share real-world insights, and build your authority while making real impact.</p>
                  <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                    <a href="/programs" className="inline-flex items-center gap-3 rounded-full bg-black text-white px-8 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105">Become a Mentor →</a>
                    <a href="/learn-more" className="text-sm font-medium text-slate-600 hover:text-black transition">Learn more</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <FAQSection/>
        <Footer />
      </div>
    </>
  );
}