import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import vansh from "../assets/vansh.jpg";
// import image from "../assets/loginslider1.avif"
import AboutCompany from "@/sections/aboutussection/AboutCompany";
// import { Link } from "react-router-dom"
import { useEffect } from "react";
import {
  ArrowRight,
  Rocket, Target, Zap, Users,
  Eye,
  Plus,
  X
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
// import SuccessCardSlider from "@/sections/aboutussection/SuccessCardSection";
// import { useRef } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import FAQSection from "@/components/FAQ";
import { useRef, useState } from "react";
import Founder from "@/sections/aboutussection/Founder";
import Event1 from '../assets/events/Event1.webp';
import Event2 from '../assets/events/Event2.webp';
// import Event3 from '../assets/events/Event3.webp';
import Event4 from '../assets/events/Event4.webp';
// import Event5 from '../assets/events/Event5.webp';
import Event6 from '../assets/events/Event6.webp';
import Event7 from '../assets/events/Event7.webp';
// import Event8 from '../assets/events/Event8.webp';
import Event10 from '../assets/events/Event10.webp';
// import Event11 from '../assets/events/Event11.webp';
// import Event12 from '../assets/events/Event12.webp';
// import Event15 from '../assets/events/Event15.webp';
// import Event16 from '../assets/events/Event16.webp';


const stats = [
  { num: "50+", label: "Topics  Covered " },
  { num: "15+", label: "Institutions  Partnered " },
  { num: "20+", label: "Events Conducted" },
];

const galleryImages = [
  { src: Event1, h: "h-[450px]" },
  { src: Event2, h: "h-[450px]" },
  { src: Event2, h: "h-[450px]" },
  { src: Event4, h: "h-[450px]" },
  { src: Event2, h: "h-[450px]" },
];
const steps = [
  {
    title: "Discovery & Institutional Audit",
    desc: "We analyze your institution’s culture, existing infrastructure, and student demographics to architect a customized roadmap for transformation."
  },
  {
    title: "Ecosystem Integration",
    desc: "We infuse your campus with real-world learning modules—from establishing high-impact E-Cells to hosting founder residencies and practical industry workshops."
  },
  {
    title: "Execution & Real-World Exposure",
    desc: "C-suite leaders and industry founders engage directly with your students, catalyzing the shift from passive learning to active, entrepreneurial thinking."
  },
  {
    title: "Institutional Identity Transformation",
    desc: "We go beyond mere branding to engineer your institution’s entire identity—elevating your digital footprint, reputation, and the prestige that makes you the first choice for parents and a launchpad for students."
  },
  
];
const AboutUsPage = () => {
  const images = [
    { id: 1, src: Event1, h: 'h-80' },
    { id: 2, src: Event2, h: 'h-96' },
    { id: 3, src: Event2, h: 'h-[400px]' },
    { id: 4, src: Event4, h: 'h-80' },
    { id: 5, src: Event2, h: 'h-96' },
    { id: 6, src: Event6, h: 'h-72' },
    { id: 7, src: Event7, h: 'h-80' },
  ];

  const features = [
    {
      title: "Events in Schools & Colleges", desc: "From entrepreneurship bootcamps to AI workshops — we bring real founders and industry experts into your institution, turning every session into a live mentorship experience that textbooks cannot replicate.", icon: Rocket },
    { title: " Institutional Branding Services", desc: "Your institution's reputation is built on outcomes and visibility. We build websites, apps, and brand strategies that position your school or college as a forward-thinking, future-ready institution.", icon: Users },
    { title: "Podcasting for Real-World Education", desc: "We bring CEOs, CFOs, and CMOs onto our podcast to share raw, unfiltered real-world knowledge with students — giving them a front-row seat to conversations that no classroom has ever hosted.", icon: Zap },
    {
      title: " Investor–Founder Networking Events", desc:"We curate high- signal rooms where startup founders meet the right investors.Meaningful connections, real conversations, and funding opportunities — all in one room.", icon: Target },
  ];

  const cards = [
    { id: 1, title: "Modern Labs", img: Event1 },
    { id: 2, title: "Live Mentorship", img: Event2 },
    { id: 3, title: "Our Ecosystem", img: Event2 },
    { id: 4, title: "Skill Mastery", img: Event4 },
    { id: 5, title: "Future Careers", img: Event2 },
  ];

  const missionCards = [
    {
      id: "01",
      title: "Bridging Classrooms With the Real World",
      desc: "We exist to end the gap between what students learn and what the world actually demands — one event, one institution at a time."
    },
    {
      id: "02",
      title: "Entrepreneurship as a Language",
      desc: "It is a mindset, not a course. We make sure every student understands how to think, build, and lead, regardless of background."
    },
    {
      id: "03",
      title: "Empowering Institutional Leadership",
      desc: "We give schools and colleges the edge to attract better talent and outcomes through real-world learning and branding."
    }
  ];
  // Image pools for Row 1 and Row 2
  const row1Images = [
    Event1,
    Event2,
    Event2
  ];

  // const row2Images = [
  //   Event4,
  //   Event5,
  //   Event6
  // ];

  // const [activeIndex, setActiveIndex] = useState(0);

  // Switch image every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // setActiveIndex((prev) => (prev + 1) % row1Images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [row1Images.length]);




  // Team members can be added here when real team is ready
  const team: { name: string; role: string; suffix: string; linkedin: string }[] = [];

  const purposeRef = useRef(null);

  // const differentiators = [
  //   { icon: Video, title: "Live Mentorship", desc: "Connect with industry experts for personalized guidance." },
  //   { icon: Layers, title: "4 Learning Formats", desc: "Workshops, seminars, hackathons, and mentorship circles." },
  //   { icon: Handshake, title: "Collaborations", desc: "Partner with colleges, corporates, and NGOs." },
  //   { icon: LineChart, title: "Impact Tracking", desc: "Monitor progress and continuously improve outcomes." }
  // ];



  const targetRef = useRef<HTMLDivElement>(null);

  // Tracks scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"] // Starts moving when top of section hits bottom of viewport
  });
  // Maps vertical scroll (0 to 1) to horizontal movement (-20% to 20%)
  // Adjust these values to make the slide more or less dramatic
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages];

  const [expanded, setExpanded] = useState<number | null>(0);
  return (

    <>
      <Navbar />
      <section className="relative w-full py-30 bg-[#FFFCF9] overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,252,249,1)_85%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Top Icon Badge */}
          {/* <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-orange-100 flex items-center justify-center">
              <img src={Watermark} width="28" height="28" />
            </div>
          </div> */}

          {/* Updated Heading Content */}
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter mb-4 uppercase">
            Building the Bridge
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-20 font-medium">
            Kattalyx Labs is more than a platform—it's a commitment to bringing <br className="hidden md:block" />
            world-class industry standards into every educational institution.
          </p>

          {/* 3D PERSPECTIVE GALLERY */}
          <div className="relative flex justify-center items-center h-[400px] md:h-[500px] w-full" style={{ perspective: '2000px' }}>
            <div className="flex items-center -space-x-16 md:-space-x-24">
              {cards.map((card, index) => {
                const isCenter = index === 2;
                const rotationY = index === 0 ? 35 : index === 1 ? 20 : index === 3 ? -20 : index === 4 ? -35 : 0;
                const scale = isCenter ? 1.15 : index === 1 || index === 3 ? 0.95 : 0.8;
                const opacity = index === 0 || index === 4 ? 0.3 : index === 1 || index === 3 ? 0.7 : 1;

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, scale: 0.8, rotateY: 0 }}
                    whileInView={{ opacity: opacity, scale: scale, rotateY: rotationY }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    style={{
                      transformStyle: 'preserve-3d',
                      zIndex: isCenter ? 50 : 10 - Math.abs(index - 2)
                    }}
                    className="relative w-[180px] md:w-[300px] h-[320px] md:h-[420px] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.35)] bg-white border-[10px] border-white group"
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Subtle Text Overlay for Center Card */}
                    {isCenter && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                        <p className="text-white font-black uppercase tracking-widest text-sm">Main Campus Ecosystem</p>
                      </div>
                    )}

                    {/* Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/5 to-transparent opacity-50" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white py-24 overflow-hidden font-mono text-black">
        {/* 1. RAW MINIMAL STATS */}
        <div className="flex flex-wrap gap-x-20 gap-y-10 px-10 md:px-20 mb-32">
          {stats.map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              <span className="text-7xl md:text-8xl font-normal tracking-tighter leading-none">
                {item.num}
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] max-w-[90px] leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* 2. INFINITE MASONRY SCROLL */}
        <div className="relative flex">
          <motion.div
            className="flex gap-10 items-start whitespace-nowrap"
            animate={{ x: [0, -2500] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {duplicatedImages.map((img, i) => (
              <div
                key={i}
                className={`shrink-0 overflow-hidden bg-zinc-100 border border-zinc-50 $ ${img.h}`}
              >
                <img
                  src={img.src}
                  alt="Studio Work"
                  className="w-full h-full object-cover transition-all duration-1000"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* 
       <HeroSection/> */}
      {/* <section className="relative w-full min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans overflow-hidden">

      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />


      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
        alt="Students studying"
        className="absolute inset-0 w-full h-full object-cover"
      />


      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />

 
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto    ">

         
          <div className="mb-6 flex items-center gap-3 text-black/40 uppercase tracking-[0.35em] text-[10px] font-bold">
            <span className="w-10 h-[1px] bg-black/20"></span>
            About Kattalyx Labs
          </div>

 
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95]">
           Discover Your Journey  
            <span className="block text-gray-400 mt-2">
              What Drives Us
            </span>
          </h1>


          <p className="mt-8 max-w-xl text-gray-600 text-base md:text-lg leading-relaxed font-medium">
           schools don’t just upgrade — they evolve into future-ready institutions with
                automation, innovation, and lifelong student impact.
          </p>

     
          <div className="mt-10 flex flex-wrap gap-6">
            <Link to="/contact">
            <button className="group flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-wide hover:pr-8 transition-all">
              Contact Us
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
          </div>
        </div>
      </div>


      <div className="absolute bottom-10 right-10 hidden md:flex items-center gap-2 text-black/30 uppercase tracking-[0.3em] text-[10px] font-bold">
        <Globe size={14} />
        Global Ecosystem
      </div>
    </section> */}
      <AboutCompany />





      {/* <ProblemsSolutions /> */}
      <section className="bg-white py-32 px-5  font-sans text-black overflow-hidden border-t border-zinc-100">
        <div className="max-w-8xl mx-auto">

          {/* Section Header for Features */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-600 block mb-4">Core Features</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.8]">
                The <span className="text-zinc-200">Toolkit</span>.
              </h2>
            </div>
            <p className="max-w-[240px] text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-loose">
              Precision tools designed to bridge the gap between classroom and industry.
            </p>
          </div>

          {/* Studio Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-100">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: "#FAFAFA" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className={`
                group p-12 relative transition-colors cursor-default
                border-r border-b border-zinc-100
                ${i === 0 ? "lg:col-span-1" : ""}
              `}
              >
                {/* Subtle Index Number (Top Right) */}
                <span className="absolute top-8 right-8 text-[10px] font-black text-zinc-200 group-hover:text-blue-200 transition-colors">
                  0{i + 1}
                </span>

                {/* Icon with Pastel Circle Background */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-10 group-hover:scale-110 transition-all duration-500"
                  style={{
                    backgroundColor: i % 3 === 0 ? '#A0D2FF' : i % 3 === 1 ? '#FFADF0' : '#C4FF8E'
                  }}
                >
                  <f.icon size={20} className="text-black/80" />
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-black tracking-tighter uppercase leading-none group-hover:text-blue-600 transition-colors">
                    {f.title.split(' ').map((word, index) => (
                      <span key={index}>{word} </span>
                    ))}
                  </h3>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-[240px]">
                    {f.desc}
                  </p>
                </div>

                {/* Bottom Decorative Line (Modern Touch) */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}

            {/* Optional: Empty Grid Fillers (to keep the grid symmetrical if items are less) */}
            {features.length % 3 !== 0 && (
              <div className="hidden lg:block p-12 border-r border-b border-zinc-100 bg-zinc-50/30" />
            )}
          </div>


        </div>
      </section>


      <section className="bg-[#0A0A0A] text-white py-32 px-6 md:px-20 font-sans">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-20">
            How we work.
          </h2>

          {/* List Container */}
          <div className="border-t border-zinc-800">
            {steps.map((step, i) => (
              <div key={i} className="border-b border-zinc-800">
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full flex items-start justify-between py-10 text-left group transition-all"
                >
                  {/* Index Number */}
                  <span className="text-xs font-bold tracking-widest text-zinc-500 mt-2">
                    0{i + 1}
                  </span>

                  {/* Title & Description Container */}
                  <div className="flex-1 md:ml-40 max-w-2xl">
                    <h3 className={`text-2xl md:text-4xl font-medium tracking-tight transition-colors ${expanded === i ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                      {step.title}
                    </h3>

                    <AnimatePresence>
                      {expanded === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="mt-8 text-zinc-500 text-lg leading-relaxed font-normal">
                            {step.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Icon Switch */}
                  <div className="mt-2 ml-4">
                    {expanded === i ? (
                      <X size={20} className="text-zinc-500" />
                    ) : (
                      <Plus size={20} className="text-zinc-500 group-hover:text-white transition-colors" />
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- SECTION 2: OUR PURPOSE (DARK MODERN GLASS) --- */}
      <section
        ref={purposeRef}
        className="relative h-screen max-h-screen min-h-[900px] w-full bg-black overflow-hidden flex items-center py-20 border-t border-white/5"
      >
        {/* Background Watermark */}
        <div className="absolute top-0 left-4 pointer-events-none select-none">
          <span className="text-[clamp(100px,15vw,200px)] font-black text-white/5 leading-none uppercase">
            GOAL
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">

          {/* LEFT SIDE: TYPOGRAPHY */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#D4FF00]"></div>
              <span className="text-[#D4FF00] font-black uppercase tracking-[0.3em] text-[10px]">
                Our Purpose
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tighter text-white uppercase">
              Transform <br />
              <span className="text-[#D4FF00]">Reality.</span>
            </h2>

            <p className="mt-8 text-white/70 max-w-sm leading-relaxed text-lg md:text-xl font-medium tracking-tight">
              Everything we do is driven by one belief—that real education happens outside the textbook.
              <span className="text-white font-extrabold ml-1">
                Here is why we exist.
              </span>
            </p>
          </motion.div>

          {/* RIGHT SIDE: BENTO FLOATING GRID */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-[600px] w-full flex items-center justify-center">

            {/* Central Unique Image: Squircle Mask */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute w-[70%] h-[75%] bg-zinc-900 rounded-[60px] lg:rounded-[80px] overflow-hidden shadow-2xl shadow-[#D4FF00]/5 max-sm:hidden"
            >
              {/* Replace src with your Event7 import */}
              <div className="w-full h-full bg-zinc-800 relative">
                <img
                  src={Event1}
                  className="w-full h-full object-cover  transition-all duration-1000"
                  alt="Mission focus"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4FF00]/10 to-transparent" />
            </motion.div>

            {/* Staggered Floating Cards */}
            <div className="relative w-full h-full flex flex-col lg:block gap-6 items-center px-4 sm:px-8 lg:px-0">
              {missionCards.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`
                  relative lg:absolute z-20 
                  bg-white/5 backdrop-blur-xl shadow-2xl 
                  flex flex-col rounded-[32px] p-6 lg:p-8 
                  border border-white/10 w-full lg:w-72 
                  group hover:bg-[#D4FF00] transition-all duration-500
                  ${index === 0 ? "lg:top-0 lg:-right-4" : ""}
                  ${index === 1 ? "lg:top-[35%] lg:-left-12" : ""}
                  ${index === 2 ? "lg:bottom-0 lg:right-4" : ""}
                `}
                >
                  <div className="flex flex-col gap-3 text-left">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[#D4FF00] font-black text-4xl group-hover:text-black transition-colors tracking-tighter">
                        {item.id}
                      </span>
                      <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-black/20 flex items-center justify-center group-hover:bg-black/5">
                        <ArrowRight className="text-white/40 group-hover:text-black transition-colors" size={20} />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-white group-hover:text-black tracking-tight uppercase leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-xs mt-3 leading-relaxed group-hover:text-black/70 transition-colors font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



      <section className="bg-white py-32 px-6 md:px-10 font-sans text-black overflow-hidden">
        <div className="max-w-8xl mx-auto">

          {/* Section Header */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-20 text-center lg:text-left leading-none"
          >
            WHERE WE COME FROM.<br />
            <span className="text-zinc-400">WHERE WE'RE GOING.</span>
          </motion.h2>

          {/* The Grid - Pure Lines, No Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-y border-zinc-100">

            {/* Vision Segment */}
            <motion.div
              whileHover={{ backgroundColor: "#FAFAFA" }}
              className="group p-10 lg:p-14 lg:border-r border-zinc-100 transition-colors cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-[#A0D2FF] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <Eye size={22} className="text-blue-900" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 block mb-6">01 / Vision</span>
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                Default <br /> Layer
              </h3>
              <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed">
                To become the default real-world learning layer for every institution in India.
                <span className="text-black block mt-4">We aren't building EdTech; we're building the infrastructure of an entrepreneurial generation.</span>
              </p>
            </motion.div>

            {/* Mission Segment */}
            <motion.div
              whileHover={{ backgroundColor: "#FAFAFA" }}
              className="group p-10 lg:p-14 lg:border-r border-zinc-100 transition-colors cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-[#FFADF0] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <Target size={22} className="text-pink-900" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 block mb-6">02 / Mission</span>
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                Bridge <br /> The Gap
              </h3>
              <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed">
                Connecting 12 lakh institutions to the real world. High-impact events, branding, and networking.
                <span className="text-black block mt-4">Every student deserves exposure. Every institution deserves a world-class brand. We make both happen.</span>
              </p>
            </motion.div>

            {/* History Segment */}
            <motion.div
              whileHover={{ backgroundColor: "#FAFAFA" }}
              className="group p-10 lg:p-14 transition-colors cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-[#C4FF8E] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <Zap size={22} className="text-emerald-900" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 block mb-6">03 / History</span>
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                How It <br /> Started
              </h3>
              <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed">
                At 21 Vansh Jain realized students study for marks while the real world moves on. Kattalyx Labs was born to fix that.
                <span className="text-black block mt-4 font-bold">20+ events. 15+ institutions. 96% satisfaction. The scale is just beginning.</span>
              </p>
            </motion.div>

          </div>
        </div>
      </section>


      <section ref={targetRef} className="bg-black w-full overflow-hidden py-32">
        <div className="flex flex-col items-center">


          {/* Scroll-Linked Motion Div */}
          <div className="flex justify-center w-full">
            <motion.div
              style={{ x }}
              className="flex gap-4 md:gap-8 items-center px-10"
            >
              {images.map((img) => (
                <div
                  key={img.id}
                  className={`
                  relative flex-shrink-0 
                  ${img.h} w-60 md:w-80
                  rounded-2xl overflow-hidden 
                  group transition-all duration-700
                `}
                >
                  <img
                    src={img.src}
                    alt="Team work"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


<Founder/>


      {/* --- 4. FOUNDER SECTION --- */}
      {/* <section className="relative z-10 py-32 px-10 md:px-20 border-t border-white/[0.05] bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative order-1">
            <div className="relative aspect-[2/2] overflow-hidden rounded-sm grayscale group border border-white/5">
              <div className="absolute inset-0 z-10 opacity-20 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, #fff 0.5px, transparent 0.5px)`, backgroundSize: '15px 15px' }} />
              <img src={vansh} className="w-full h-full object-cover scale-105 group-hover:scale-100 " alt="Vansh Jain" />
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12 order-2">
            <div className="space-y-4">
              <span className="text-[9px] font-black uppercase tracking-[0.6em] text-blue-600">Leadership Protocol</span>
              <h2 className="text-[clamp(3.5rem,8vw,6.5rem)] font-[1000] text-white leading-[0.85] tracking-tighter uppercase">VANSH JAIN<span className="text-blue-600">.</span></h2>
              <div className="flex gap-4 pt-2">
                <span className="text-[10px] font-bold text-white bg-blue-600/10 border border-blue-600/20 px-3 py-1 rounded-sm uppercase tracking-widest">Founder & CEO</span>
                <span className="text-[10px] font-bold text-zinc-500 border border-white/10 px-3 py-1 rounded-sm uppercase tracking-widest">Lead Architect</span>
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-medium text-zinc-300 leading-snug tracking-tight max-w-xl">
              Architecting a <span className="text-white italic">full-stack ecosystem</span> to bridge the gap between academia and the digital economy.
            </p>
            <motion.a href="https://www.linkedin.com/in/vansh-jain26/" target="_blank" whileHover={{ x: 10 }} className="flex items-center gap-5 group pt-8">
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-600 transition-colors">
                <ArrowUpRight className="w-5 h-5 text-white group-hover:text-blue-600 transition-colors" />
              </div>
              <div>
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Network</p>
                <p className="text-sm font-bold text-white uppercase group-hover:text-blue-600 transition-colors">LinkedIn Profile</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section> */}


      {/* Team Cards - Only shown when team members exist */}
      {team.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {team.map((member, i) => (
              <motion.div key={i} className="flex-shrink-0 w-72" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                  <CardContent className="p-5 flex flex-col h-full min-h-[180px]">
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{member.name}<span className="font-normal text-slate-400">{member.suffix}</span></h4>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">{member.role}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">LinkedIn</span>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition"><ArrowRight className="w-4 h-4 text-white" /></a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Mission */}


      {/* CTA */}

      <section className="relative overflow-hidden py-[100px] text-center bg-white">
        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2 className="text-[2.5rem] leading-tight font-extrabold tracking-[-0.02em] text-black">
            Let&apos;s Bring Our Ecosystem <br /> To Your Classroom
          </h2>

          <p className="mt-4 text-[1.1rem] text-zinc-700">
            Institutions already transforming their students' learning experience with real-world industry connections. Your Institution is next.
          </p>
          <p className="font-bold pt-4">The only question is — when does yours begin?</p>
          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-8 py-3 text-sm font-medium text-slate-900 transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white"
            >
              Register Yourself
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>

        {/* FLOATING IMAGES */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
          {/* Image 1 */}
          <div className="absolute top-[10%] left-[10%] w-[120px] rotate-[-10deg] rounded-xl shadow-xl">
            <img
              src={Event10}
              alt=""
              className="rounded-xl"
            />
          </div>

          {/* Image 2 */}
          <div className="absolute bottom-[10%] left-[20%] w-[150px] rotate-[5deg] rounded-xl shadow-xl">
            <img
              src={Event2}
              alt=""
              className="rounded-xl"
            />
          </div>

          {/* Image 3 */}
          <div className="absolute top-[15%] right-[10%] w-[130px] rotate-[8deg] rounded-xl shadow-xl">
            <img
              src={Event2}
              alt=""
              className="rounded-xl"
            />
          </div>

          {/* Image 4 */}
          <div className="absolute bottom-[6%] right-[20%] w-[180px] rotate-[-5deg] rounded-xl shadow-xl">
            <img
              src={Event4}
              alt=""
              className="rounded-xl"
            />
          </div>
        </div>
      </section>




      {/* <section className="relative bg-[#050508] py-40 px-6 md:px-12 overflow-hidden">

        <div className="absolute top-[48%] left-0 w-full h-[1px] bg-white/10 z-0 flex items-center">
          <div className="w-[60%] h-full bg-transparent" />
          <div className="w-24 h-[2px] bg-[#D4FF00] shadow-[0_0_15px_#D4FF00]" />
        </div>

        <div className="max-w-[1800px] mx-auto relative z-10 space-y-4">

          <div className="flex flex-col md:flex-row items-baseline md:items-center gap-6 md:gap-12">
            <h2 className="text-[clamp(4.5rem,15vw,18rem)] font-[1000] leading-none tracking-[-0.08em] text-white uppercase shrink-0">
              BUILT FOR
            </h2>

            <div className="relative w-full md:w-[500px] h-[100px] md:h-[180px] lg:h-[220px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 grayscale opacity-80">
              <AnimatePresence mode="wait">
                <motion.img
                  key={row1Images[activeIndex]}
                  src={row1Images[activeIndex]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Build context"
                />
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-baseline md:items-center justify-end gap-6 md:gap-12 md:-mt-8">
            <div className="relative w-full md:w-[400px] h-[100px] md:h-[180px] lg:h-[220px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 grayscale opacity-80">
              <AnimatePresence mode="wait">
                <motion.img
                  key={row2Images[activeIndex]}
                  src={row2Images[activeIndex]}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Growth context"
                />
              </AnimatePresence>
            </div>

            <h2 className="text-[clamp(4.5rem,15vw,18rem)] font-[1000] leading-none tracking-[-0.08em] text-white uppercase shrink-0">
              GROWTH
            </h2>
          </div>

        </div>

        <div className="absolute bottom-10 left-10 flex items-center gap-4 opacity-20">
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white">
            Scale Strategy / v.2026
          </span>
        </div>

      </section> */}

      {/* <WorkMarquee5Col /> */}

      <FAQSection />
      <Footer />

      <style>{`
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .animate-slideIn { animation: slideIn 0.35s ease-out forwards; }
      `}</style>
    </>
  );
};

export default AboutUsPage;


