import { useEffect, useState } from "react";
import {
  Building2, Heart, Globe,
  Mail, Phone, MapPin, ExternalLink, Sparkles,
  CheckCircle2,  Share2, Layers, ArrowRight, X,
  Users,
  Cpu
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { dashboardAPI } from "@/services/api";
import commudleImg from "../assets/commudle.jpg";
import ngoImg from "../assets/Ngo.jpg";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import FAQSection from "@/components/FAQ";

const CollaborationsPage = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSchool, setSelectedSchool] = useState<number | null>(null);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        // await dashboardAPI.getSchools(1, 50);
      } catch (err) {
        console.error("Error fetching schools:", err);
      }
    };
    fetchSchools();
  }, []);
  const PARTNER_SCHOOLS = [
    { name: "Delhi Public School", img: "https://images.unsplash.com/photo-1541339907198-e087563f02b3?q=80&w=1000&auto=format&fit=crop" },
    { name: "Ryan International", img: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1000&auto=format&fit=crop" },
    { name: "Modern School", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop" },
    { name: "Amity International", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop" },
    { name: "DPS Ghaziabad", img: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=1000&auto=format&fit=crop" },
    { name: "St. Xavier's", img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000&auto=format&fit=crop" },
    { name: "Lotus Valley", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" },
    { name: "Bal Bharati", img: "https://images.unsplash.com/photo-1525921429624-479b6a29d84c?q=80&w=1000&auto=format&fit=crop" },
    { name: "Sanskriti School", img: "https://images.unsplash.com/photo-1510531704581-5b2870972060?q=80&w=1000&auto=format&fit=crop" }
  ];
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans">
      <Navbar />

      <main className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto z-10">

        {/* --- 1. HEADING SECTION --- */}
        <section className="mb-24 text-center lg:text-left">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 border-2 border-black rounded-full text-[10px] font-black uppercase mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Globe size={16} /> Global Collaboration Network
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-[1000] uppercase tracking-tighter leading-none mb-6 text-black">
            Build {" "}
            {/* For the Pink Loop Style */}
            <span className="text-blue-700">

              <ZScribbleUnderline text="Together." />
            </span>

            {/* OR For the Yellow Fat Scribble Style */}
            {/* <FatScribble text="Together." color="#6EE7B7" /> */}
          </h1>
          <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed">
            Kattalyx Labs integrates with industry leaders, elite schools, and social organizations
            to transform the landscape of modern education.
          </p>
        </section>

        {/* --- 2. PARTNERSHIP MODEL SECTION (NEW) --- */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Layers, title: "Resource Sharing", desc: "Access to our curriculum, tools, and technical modules for your students." },
              { icon: Share2, title: "Industry Bridge", desc: "Direct connection between academic learning and corporate expectations." },
              { icon: CheckCircle2, title: "Verified Network", desc: "Become a part of a globally recognized hub of educational excellence." }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all">
                <feature.icon className="text-blue-600 mb-4" size={28} />
                <h3 className="text-lg font-black uppercase  mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

        </section>

        {/* --- 3. COMPANY PARTNERS SECTION (LIGHT MODERN MARQUEE) --- */}
        <section className="mb-40 -mx-6 overflow-hidden">
          <div className="px-6 flex flex-col md:flex-row md:items-end gap-4 mb-12 group">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-600 rounded-[1.25rem] text-white shadow-[8px_8px_0px_0px_rgba(37,99,235,0.1)] group-hover:shadow-none transition-all duration-300">
                <Building2 size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-1">Affiliations</p>
                <h2 className="text-4xl md:text-5xl font-[1000] uppercase  tracking-tighter text-slate-900 leading-none">
                  Company <span className="text-blue-600">Partners.</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="relative flex py-12 bg-slate-50/50 overflow-hidden border-y border-slate-200">
            {/* Overlay Gradients - adjusted to match light background */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

            <div className="flex whitespace-nowrap animate-marquee-fast items-center">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-8 mx-6 bg-white border border-slate-200 p-8 rounded-[2.5rem] min-w-[400px] shadow-sm group hover:shadow-xl hover:border-blue-200 transition-all duration-500 cursor-default"
                >
                  <div className="relative">
                    {/* Removed 'invert' so the logo looks natural on light bg */}
                    <img
                      src={commudleImg}
                      className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      alt="Commudle"
                    />
                    <div className="absolute -top-2 -right-2 bg-blue-600 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <ExternalLink size={12} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-slate-900 text-2xl font-black uppercase  tracking-tighter">Commudle</h4>
                      <Badge className="bg-blue-50 text-blue-600 border border-blue-100 text-[8px] uppercase px-2 py-0">Tier 1 Partner</Badge>
                    </div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Global Tech Ecosystem</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNER SCHOOLS SECTION */}
        <section className="bg-white py-24 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">

            {/* TOP HEADING: Separated from the grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[2px] bg-blue-600" />
                <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em]">Institutional Trust</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                Partner <br />
                <span className="text-slate-300 ">Schools.</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-16 items-start">

              {/* LEFT SIDE: STICKY IMAGE */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 order-2 lg:order-1">
                <div className="relative aspect-[5/5] w-full rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={PARTNER_SCHOOLS[activeImage].img}
                      initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                      transition={{ duration: 0.6, ease: "circOut" }}
                      className="h-full w-full object-cover opacity-80"
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                  <motion.div
                    key={`text-${activeImage}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute bottom-10 left-10 right-10"
                  >
                    <p className="text-blue-400 font-mono text-[10px] uppercase tracking-widest mb-2">Network Campus</p>
                    <h4 className="text-white text-3xl font-black tracking-tighter uppercase leading-tight">
                      {PARTNER_SCHOOLS[activeImage].name}
                    </h4>
                  </motion.div>
                </div>
              </div>

              {/* RIGHT SIDE: SCROLLING LIST */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                {PARTNER_SCHOOLS.map((school, i) => (
                  <motion.div
                    key={i}
                    onViewportEnter={() => setActiveImage(i)}
                    viewport={{ amount: 0.7 }}
                    className="group relative py-12 md:py-16 border-b border-slate-100 cursor-pointer"
                  >
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-10">
                        <span className={`font-mono text-sm transition-colors duration-300 ${activeImage === i ? 'text-blue-600 font-bold' : 'text-slate-300'}`}>
                          / 0{i + 1}
                        </span>
                        <h3 className={`text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none transition-all duration-500 ${activeImage === i ? 'text-slate-900 translate-x-4' : 'text-slate-200'}`}>
                          {school.name}
                        </h3>
                      </div>

                      <div
                        onClick={() => setSelectedSchool(i)}
                        className={`flex flex-col items-end gap-2 transition-all duration-500 cursor-pointer ${activeImage === i ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                      >
                        <ArrowRight className="text-blue-600 -rotate-45" size={32} />
                        <span className="text-[9px] font-black uppercase tracking-tighter text-blue-600">View History</span>
                      </div>
                    </div>

                    {/* Hover background effect */}
                    <div className={`absolute inset-0 bg-blue-50/50 rounded-2xl -z-10 transition-transform duration-700 origin-left ${activeImage === i ? 'scale-x-100' : 'scale-x-0'}`} />
                  </motion.div>
                ))}
                {/* Extra padding to allow the last item to trigger the sticky image */}
                <div className="h-[20vh]" />
              </div>

            </div>
          </div>
        </section>
        {/* SCHOOL HISTORY MODAL */}
        {selectedSchool !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setSelectedSchool(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSchool(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={PARTNER_SCHOOLS[selectedSchool].img}
                className="w-full h-64 object-cover"
                alt="School"
              />

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-black uppercase tracking-wider">
                    Partner School
                  </span>
                  <span className="text-slate-400 text-sm font-mono">Since 2023</span>
                </div>

                <h2 className="text-4xl font-black text-slate-900 mb-6">
                  {PARTNER_SCHOOLS[selectedSchool].name}
                </h2>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-slate-50">
                    <p className="text-3xl font-black text-blue-600 mb-1">12+</p>
                    <p className="text-sm font-bold text-slate-600">Events Hosted</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50">
                    <p className="text-3xl font-black text-blue-600 mb-1">850+</p>
                    <p className="text-sm font-bold text-slate-600">Students Reached</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50">
                    <p className="text-3xl font-black text-blue-600 mb-1">95%</p>
                    <p className="text-sm font-bold text-slate-600">Satisfaction Rate</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-black text-slate-900 mb-4">Recent Events</h3>
                  <div className="space-y-3">
                    {[
                      { title: "AI & Machine Learning Workshop", date: "March 2024", students: 120 },
                      { title: "Career Guidance Session", date: "February 2024", students: 200 },
                      { title: "Entrepreneurship Bootcamp", date: "January 2024", students: 150 },
                    ].map((event, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors">
                        <div>
                          <p className="font-bold text-slate-900">{event.title}</p>
                          <p className="text-sm text-slate-500">{event.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-blue-600">{event.students} students</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-4 rounded-full font-bold hover:bg-blue-700 transition-colors">
                  Schedule New Event
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* --- 5. NGO PARTNERS SECTION (COMPACT GRID) --- */}
        <section className="mb-40">
          {/* Section Heading */}
          <div className="px-6 flex flex-col md:flex-row md:items-end gap-4 mb-10 group">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-[6px_6px_0px_0px_rgba(16,185,129,0.1)] transition-all duration-300">
                <Heart size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-0.5">Philanthropy</p>
                <h2 className="text-3xl md:text-4xl font-[1000] uppercase  tracking-tighter text-slate-900 leading-none">
                  Social <span className="text-blue-600">Impact.</span>
                </h2>
              </div>
            </div>
          </div>

          {/* 3-Column Grid with Reduced Height */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
            {[1].map((item) => (
              <div key={item} className="relative group overflow-hidden bg-white border border-slate-200 rounded-[2rem] p-4 hover:border-blue-500/30 transition-all duration-500 shadow-lg shadow-slate-200/40 flex flex-col">

                {/* Shorter Image Aspect Ratio (video instead of square) */}
                <div className="relative w-full aspect-video rounded-[1.5rem] overflow-hidden mb-4">
                  <img
                    src={ngoImg}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Impact"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
                </div>

                {/* Compact Content Body */}
                <div className="flex flex-col flex-grow px-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="text-blue-500" size={14} />
                    <span className="text-[9px] font-black uppercase tracking-widest text-blue-600">Impact Story</span>
                  </div>

                  <h3 className="text-2xl font-[1000] uppercase  tracking-tighter text-slate-900 mb-2 leading-none">
                    Ma Saathi
                  </h3>

                  <p className="text-slate-500 text-xs font-medium leading-relaxed mb-4 line-clamp-2">
                    Quality tech education accessible to rural communities across the nation.
                  </p>

                  {/* Impact Mini-Stats - Compact */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <div>
                      <p className="text-lg font-black text-slate-900 leading-none">5k+</p>
                      <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">Students</p>
                    </div>
                    <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-tighter bg-slate-900 text-white px-4 py-2.5 rounded-lg hover:bg-blue-600 transition-colors">
                      Read <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* --- 6. FINAL CTA SECTION (KATTALYX ECOSYSTEM COLLABORATION) --- */}
        <section className="px-2 mb-5">
          <div className="max-w-7xl mx-auto relative">

            {/* Engineering Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 -z-10" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/40 overflow-hidden"
            >
              {/* Brand Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100%] opacity-60" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Left Side: Strategic Messaging */}
                <div className="text-center lg:text-left max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg mb-4">
                    <Users size={14} className="text-blu-600" />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Collaborative Network</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-[1000] text-slate-900 tracking-tighter leading-[0.9] mb-6">
                    Partner with <span className=" text-blu-600 font-serif">Kattalyx Lab.</span>
                  </h2>

                  <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed">
                    Whether you are a <span className="text-slate-900 font-bold">School</span> looking for elite tech labs, an <span className="text-slate-900 font-bold">NGO</span> driving social impact, or a <span className="text-slate-900 font-bold">Company</span> seeking top-tier talent—let's build the infrastructure of tomorrow together.
                  </p>
                </div>

                {/* Right Side: Partnership Actions */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
                  <Link to="/collaborate">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-56 py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-slate-900/20 hover:bg-blue-600 transition-colors"
                    >
                      Become a Partner
                    </motion.button>
                  </Link>

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="w-full sm:w-56 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all"
                    >
                      Discuss Synergy
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Compact Stats Row */}

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-12 px-4">

                {[

                  { label: "Partners", value: "200+" },

                  { label: "Course Modules", value: "45" },

                  { label: "Success Rate", value: "98%" }

                ].map((stat, i) => (

                  <div key={i} className="flex flex-col">

                    <p className="text-xl font-black text-slate-900 leading-none">{stat.value}</p>

                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">{stat.label}</p>

                  </div>

                ))}

              </div>

              {/* Background Technical Watermark */}
              <Cpu size={120} className="absolute -bottom-8 -right-8 opacity-[0.03] rotate-12 pointer-events-none text-slate-900" />
            </motion.div>
          </div>
        </section>

        {/* --- 7. CONTACT GRID (CLEAN ACADEMIC STYLE) --- */}
        <section className="pt-20 border-t border-slate-100 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { icon: Mail, label: "Partner Relations", value: "official@kattalyxlabs.com" },
              { icon: Phone, label: "Direct Inquiries", value: "+91 82735 15100" },
              { icon: MapPin, label: "HQ Location", value: "Ghaziabad, India" }
            ].map((item, i) => (
              <div
                key={i}
                className={`group p-8 transition-all duration-300 hover:bg-slate-50 flex flex-col items-center md:items-start
          ${i !== 2 ? 'md:border-r border-slate-100' : ''} 
          ${i !== 0 ? 'border-t md:border-t-0 border-slate-100' : ''}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blu-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600">
                    <item.icon size={18} strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-600 transition-colors">
                    {item.label}
                  </span>
                </div>

                <p className="text-xl font-[1000]  uppercase tracking-tighter text-slate-900 leading-none">
                  {item.value}
                </p>

                {/* Subtle decorative underline that expands on hover */}
                <div className="mt-4 h-0.5 w-8 bg-slate-200 group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <FAQSection/>
      <Footer />
    </div>
  );
};

export default CollaborationsPage;

const ZScribbleUnderline = ({ text, color = "#FACC15" }: { text: string; color?: string }) => (
  <span className="relative inline-block px-1">
    <span className="relative z-10">{text}</span>
    <svg
      className="absolute -bottom-3 left-0 w-[105%] h-6 pointer-events-none"
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
    >
      {/* Animated Main Stroke */}
      <motion.path
        d="M2 10 C 10 10, 25 8, 30 10 C 10 15, 5 18, 40 14 C 70 12, 90 12, 98 12"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeInOut",
        }}
      />

      {/* Background 'Ink' Fill (Optional: Animates slightly after) */}
      {/* <motion.path
        d="M2 10 Q 15 8, 25 10 L 5 15 Q 20 18, 40 14 L 98 12"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.3, // Slight stagger for the messy effect
          ease: "easeInOut",
        }}
      /> */}
    </svg>
  </span>
);

