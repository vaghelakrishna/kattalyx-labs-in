import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import vansh from "../assets/vansh.jpg";
// import image from "../assets/loginslider1.avif"
import AboutCompany from "@/sections/aboutussection/AboutCompany";
// import { Link } from "react-router-dom"
import { useEffect } from "react";
import {
  ArrowRight, ArrowUpRight,
  Rocket, Target, Zap, Users,
  Eye,
  Landmark,
  Plus,
  X
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
// import SuccessCardSlider from "@/sections/aboutussection/SuccessCardSection";
// import { useRef } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import FAQSection from "@/components/FAQ";
import { useRef, useState } from "react";



const stats = [
  { num: "9", label: "YEARS' EXPERIENCE" },
  { num: "12", label: "INDUSTRIES SERVED" },
  { num: "10+", label: "GLOBAL PARTNERSHIPS" },
  { num: "135+", label: "COMPLETED PROJECTS" },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070", w: "w-[300px]", h: "h-[450px]" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070", w: "w-[400px]", h: "h-[300px]", mt: "mt-24" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070", w: "w-[280px]", h: "h-[400px]" },
  { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084", w: "w-[350px]", h: "h-[350px]", mt: "mt-12" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070", w: "w-[450px]", h: "h-[380px]" },
];
const steps = [
  {
    title: "Your Team, Your Champions",
    desc: "We don't just join your project, we become part of your journey. Think of us as an extension of your team, bringing expertise and fresh ideas while leaving egos at the door. Together, we'll create something extraordinary and maybe even have a little fun along the way.",
  },
  {
    title: "Straight Talk, Always",
    desc: "Transparency is our foundation. We provide honest feedback and clear communication at every stage of the process.",
  },
  {
    title: "Let's Build Together",
    desc: "Collaboration is key. We work closely with you to ensure your vision is translated into a digital reality that exceeds expectations.",
  },
  {
    title: "Big Ideas, No Big Egos",
    desc: "We focus on what works best for the project. Innovation comes from everywhere, and we listen to every voice.",
  },
  {
    title: "Results That Actually Matter",
    desc: "We don't just deliver code; we deliver impact. Our goal is to ensure your investment drives real growth and value.",
  },
];
const AboutUsPage = () => {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400', h: 'h-80' },
    { id: 2, src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400', h: 'h-96' },
    { id: 3, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400', h: 'h-[400px]' },
    { id: 4, src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400', h: 'h-80' },
    { id: 5, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400', h: 'h-96' },
    { id: 6, src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400', h: 'h-72' },
    { id: 7, src: 'https://images.unsplash.com/photo-1600880210119-75914674661a?w=400', h: 'h-80' },
  ];

  const features = [
    { title: "Industry Immersion", desc: "Real-world projects that mirror actual workplace challenges.", icon: Rocket },
    { title: "Expert Mentorship", desc: "Learn directly from veterans who have built what you're studying.", icon: Users },
    { title: "Rapid Upskilling", desc: "Accelerated pathways designed to get you job-ready in weeks.", icon: Zap },
    { title: "Outcome Driven", desc: "We don't just teach; we ensure you achieve your career goals.", icon: Target },
  ];

  const cards = [
    { id: 1, title: "Modern Labs", img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format" },
    { id: 2, title: "Live Mentorship", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format" },
    { id: 3, title: "Our Ecosystem", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format" },
    { id: 4, title: "Skill Mastery", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format" },
    { id: 5, title: "Future Careers", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format" },
  ];


  // Image pools for Row 1 and Row 2
  const row1Images = [
    "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800"
  ];

  const row2Images = [
    "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=800",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800",
    "https://images.unsplash.com/photo-1569058242253-92a9c71f9867?q=80&w=800"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Switch image every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % row1Images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [row1Images.length]);




  // Team members can be added here when real team is ready
  const team: { name: string; role: string; suffix: string; linkedin: string }[] = [];

  // const differentiators = [
  //   { icon: Video, title: "Live Mentorship", desc: "Connect with industry experts for personalized guidance." },
  //   { icon: Layers, title: "4 Learning Formats", desc: "Workshops, seminars, hackathons, and mentorship circles." },
  //   { icon: Handshake, title: "Collaborations", desc: "Partner with colleges, corporates, and NGOs." },
  //   { icon: LineChart, title: "Impact Tracking", desc: "Monitor progress and continuously improve outcomes." }
  // ];


  const missionCards = [
    { id: 1, title: "School-Centric Transformation", desc: "Empowering schools with integrated systems that modernize learning, operations, and outcomes." },
    { id: 2, title: "Ecosystem-Led Innovation", desc: "Unifying education, technology, and digital infrastructure into one scalable school ecosystem." },
    { id: 3, title: "Future-Ready Institutions", desc: "Enabling schools to evolve with automation, hybrid learning, and career-aligned programs." }
  ];


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
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-orange-100 flex items-center justify-center">
              {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg> */}
              <img src="./src/assets/Watermark.png" width="28" height="28" />
            </div>
          </div>

          {/* Updated Heading Content */}
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter mb-4 uppercase">
            Building the Bridge
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-20 font-medium">
            Kattalyx Labs is more than a platform—it's a commitment to bringing <br className="hidden md:block" />
            world-class industry standards into every school classroom.
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
                className={`shrink-0 overflow-hidden bg-zinc-100 border border-zinc-50 ${img.w} ${img.h} ${img.mt || ""}`}
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
      <section className="bg-white py-32 px-6 md:px-20 font-sans text-black overflow-hidden border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">

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
                      <span key={index}>{word} <br /></span>
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


      {/* Our purpose */}
      <section className="relative h-screen max-h-screen min-h-[1000px] w-full bg-[#FAFBFF] overflow-hidden flex items-center">
        {/* Background Watermark - Adjusted for screen fit */}
        <div className="absolute top-0 left-4 pointer-events-none select-none">
          <span className="text-[clamp(100px,15vw,200px)] font-black text-slate-200/30 leading-none">GOAL</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">

          {/* Left Side: Typography */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-blue-600"></div>
              <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px]">Our Purpose</span>
            </div>

            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tighter text-slate-950  uppercase">
              Transform <br />
              <span className="text-blue-600 ">Reality.</span>
            </h2>

            <p className="mt-6 text-slate-500 max-w-sm leading-relaxed text-lg font-medium">
              We don't just upgrade schools; we rewrite their DNA through a
              <span className="text-slate-900 font-bold"> 360° integrated ecosystem.</span>
            </p>
          </motion.div>

          {/* Right Side: Bento Floating Grid - Scaled for Viewport */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-[600px] w-full flex items-center justify-center">

            {/* Central Unique Image: Squircle Mask */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute w-[70%] h-[75%] bg-blue-100 rounded-[60px] lg:rounded-[80px] overflow-hidden shadow-2xl max-sm:hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover mix-blend-multiply opacity-70"
                alt="Mission"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent" />
            </motion.div>

            {/* Staggered Floating Cards - Using Percentages for absolute positioning */}
            <div className="relative w-full h-full flex flex-col lg:block gap-6 items-center px-4 sm:px-8 lg:px-0">
              {missionCards.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  // Responsive classes:
                  // Mobile: relative aur w-full (margin parent ke px-4 se control hogi)
                  // Desktop: absolute aur fixed width (w-68)
                  className={`
        relative lg:absolute z-20 
        bg-white/90 backdrop-blur-md shadow-xl 
        flex flex-col rounded-[32px] p-6 lg:p-7 
        border border-white/50 w-full lg:w-68 
        group hover:bg-blue-600 transition-all duration-500
        ${index === 0 ? "lg:top-[5%] lg:right-0 lg:-right-4" : ""}
        ${index === 1 ? "lg:top-[40%] lg:left-0 lg:-left-8" : ""}
        ${index === 2 ? "lg:bottom-[5%] lg:right-0 lg:right-4" : ""}
      `}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-black text-3xl group-hover:text-white transition-colors tracking-tighter">
                        {item.id}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-white/30 flex items-center justify-center group-hover:bg-white/10">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:bg-white" />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-slate-900 group-hover:text-white tracking-tight uppercase">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm mt-2 leading-relaxed group-hover:text-blue-50 transition-colors">
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






      {/* <SuccessCardSlider /> */}


      {/* vission mission history cards */}
      {/* <section className="bg-white px-5 md:px-16 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10">

          <div
            className="
        flex lg:block
        gap-4
        overflow-x-auto
        snap-x snap-mandatory
        lg:overflow-visible
        lg:space-y-6
        no-scrollbar
      "
          >

            <div className="snap-center shrink-0 w-[85%] sm:w-[70%] lg:w-auto rounded-2xl md:rounded-3xl bg-blue-200 p-6 md:p-8">
              <span className="inline-block bg-white text-gray-800 px-4 md:px-5 py-2 rounded-full font-medium mb-4 text-sm md:text-base">
                Our Vision
              </span>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-md">
                To build India’s most powerful real-world learning ecosystem for schools.
              </p>
            </div>

            <div className="snap-center shrink-0 w-[85%] sm:w-[70%] lg:w-auto rounded-2xl md:rounded-3xl bg-blue-200 p-6 md:p-8">
              <span className="inline-block bg-white text-gray-800 px-4 md:px-5 py-2 rounded-full font-medium mb-4 text-sm md:text-base">
                Our Mission
              </span>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-md">
                To transform schools through skills, systems, and long-term partnerships.
              </p>
            </div>

            <div className="snap-center shrink-0 w-[85%] sm:w-[70%] lg:w-auto rounded-2xl md:rounded-3xl bg-blue-400 p-6 md:p-8 text-white">
              <span className="inline-block bg-white text-gray-800 px-4 md:px-5 py-2 rounded-full font-medium mb-4 text-sm md:text-base">
                Our History
              </span>
              <p className="leading-relaxed text-sm md:text-base max-w-md">
                Born from real classrooms. Built for real impact.
                <br />
                Kattalyx Labs started with one clear insight:
                schools don’t need more tools — they need a connected system.
              </p>
            </div>

          </div>

          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[420px] md:min-h-[600px]">

            <img
              src={image}
              alt="about us"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 h-full p-6 md:p-10 flex flex-col justify-start md:justify-between">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-white leading-snug max-w-md">
                  Our Plan Is To Shape The Future Of Education Through Our Ideas
                </h2>

                <p className="mt-4 text-white/80 max-w-md leading-relaxed text-sm md:text-base">
                  Building Long Term Partnerships with Schools, Empowering Students
                  with Real-World Skills, and Creating a Connected Ecosystem for
                  Lasting Impact.
                </p>
              </div>

              <Link
                to="/contact"
                className="mt-8 md:mt-0 self-start md:self-end bg-gradient-to-br from-blue-300 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
              >
              </Link>
            </div>
          </div>

        </div>
      </section> */}

      <section className="bg-white py-32 px-6 md:px-20 font-sans text-black overflow-hidden">
        <div className="max-w-7xl mx-auto">



          {/* The Grid - Pure Lines, No Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-b border-zinc-100">

            {/* Vision Segment */}
            <motion.div
              whileHover={{ backgroundColor: "#FAFAFA" }}
              className="group p-12 lg:border-r border-zinc-100 transition-colors cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-[#A0D2FF] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <Eye size={18} className="text-blue-900" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 block mb-4">01 / Vision</span>
              <h3 className="text-3xl font-black tracking-tighter uppercase leading-none mb-6">
                Empower <br /> The System
              </h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-[240px]">
                Building India’s most powerful real-world learning ecosystem for schools.
              </p>
            </motion.div>

            {/* Mission Segment */}
            <motion.div
              whileHover={{ backgroundColor: "#FAFAFA" }}
              className="group p-12 lg:border-r border-zinc-100 transition-colors cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFADF0] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <Target size={18} className="text-pink-900" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 block mb-4">02 / Mission</span>
              <h3 className="text-3xl font-black tracking-tighter uppercase leading-none mb-6">
                Transform <br /> The Skills
              </h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-[240px]">
                Evolving classrooms through modern skills and sustainable systems.
              </p>
            </motion.div>

            {/* History Segment */}
            <motion.div
              whileHover={{ backgroundColor: "#FAFAFA" }}
              className="group p-12 transition-colors cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-[#C4FF8E] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <Landmark size={18} className="text-emerald-900" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 block mb-4">03 / History</span>
              <h3 className="text-3xl font-black tracking-tighter uppercase leading-none mb-6">
                Born From <br /> Impact
              </h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-[240px]">
                Started with a simple realization: schools need connections, not just tools.
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


      {/* FOUNDER SECTION - DOSSIER UI DESIGN */}
      <section className="bg-white py-24 overflow-hidden mx-6">
        <div className="max-w-6xl mx-auto">

          {/* 1. INTERACTIVE TRANSFORMING HEADING */}
          <div className="border-b border-slate-100 pb-12 mb-20 relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

              <div className="relative group">
                {/* Background Decorative Text - Ultra Light */}
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 0.03, x: 0 }}
                  className="absolute -top-12 -left-4 text-8xl font-black select-none pointer-events-none"
                >
                  ORIGIN
                </motion.span>

                <motion.div
                  initial="initial"
                  whileHover="hover"
                  className="relative cursor-default"
                >
                  {/* Main Heading with Character Animation */}
                  <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter flex items-center overflow-hidden">
                    {"Our Founder".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={{
                          initial: { y: 0 },
                          hover: { y: -10, color: "#2563eb" }
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        className="inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </h2>

                  {/* Sub-heading with a 'Slide-and-Fade' reveal */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-4 flex items-center gap-4 overflow-hidden whitespace-nowrap"
                  >
                    <span className="text-blue-600 font-bold text-lg md:text-xl tracking-tight">
                      The vision behind <span >Kattalyx Labs</span>
                    </span>
                    <div className="h-[1px] flex-1 bg-blue-100" />
                  </motion.div>
                </motion.div>
              </div>

            </div>
          </div>

          {/* 2. THE DOSSIER GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">

            {/* LEFT COLUMN - THE VISUAL PROFILE */}
            <div className="lg:col-span-5 relative">
              <motion.div

                className="relative z-10"
              >
                <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                  <img
                    src={vansh}
                    alt="Vansh Jain"
                    className="w-full h-[500px] object-cover scale-150"
                  />
                </div>

              </motion.div>
            </div>

            {/* RIGHT COLUMN - THE DATA POINTS */}
            <div className="lg:col-span-7 lg:pl-20 flex flex-col justify-center">
              <div className="space-y-12">

                {/* Actionable Quote with 'Progress' feel */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 h-full w-1 bg-blue-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 1.5 }}
                      className="w-full bg-blue-600"
                    />
                  </div>
                  <p className="text-slate-800 text-2xl md:text-3xl font-bold leading-tight tracking-tight pl-8">
                    "We focus on the <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">skills</span> that actually get students hired."
                  </p>
                </div>

                {/* Clean Bio with pill labels */}
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {['Mission-Driven', 'Industry-First', 'Digital-Native'].map((pill) => (
                      <span key={pill} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        {pill}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">
                    Vansh founded Kattalyx Labs to transform schools into future-ready institutions. By building a full-stack ecosystem, he's empowering schools to bridge the gap between academic education and industry demands.
                  </p>
                </div>

                {/* Interactive Footer Action */}
                <div className="pt-8 flex items-center gap-8">
                  <motion.a
                    href="https://www.linkedin.com/in/vansh-jain26/"
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-200 flex items-center gap-3 group"
                  >
                    Get in Touch
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a>

                  <div className="hidden sm:block">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-tighter">Verified Profile</p>
                    <p className="text-slate-900 font-bold text-sm">Active Community Mentor</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* --- 4. FOUNDER SECTION --- */}
      <section className="relative z-10 py-32 px-10 md:px-20 border-t border-white/[0.05] bg-black">
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
      </section>
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
            Schools already Transforming their Students learning Experience with Real-World Industry Connections.
          </p>

          <div className="mt-16 text-center">
            <a
              href="/programs"
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
              src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=300&h=300&fit=crop"
              alt=""
              className="rounded-xl"
            />
          </div>

          {/* Image 2 */}
          <div className="absolute bottom-[10%] left-[20%] w-[150px] rotate-[5deg] rounded-xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=300&h=300&fit=crop"
              alt=""
              className="rounded-xl"
            />
          </div>

          {/* Image 3 */}
          <div className="absolute top-[15%] right-[10%] w-[130px] rotate-[8deg] rounded-xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop"
              alt=""
              className="rounded-xl"
            />
          </div>

          {/* Image 4 */}
          <div className="absolute bottom-[6%] right-[20%] w-[180px] rotate-[-5deg] rounded-xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=300&h=300&fit=crop"
              alt=""
              className="rounded-xl"
            />
          </div>
        </div>
      </section>




      <section className="relative bg-[#050508] py-40 px-6 md:px-12 overflow-hidden">

        {/* 1. BACKGROUND PROGRESS LINE (image_ee1be1 match) */}
        <div className="absolute top-[48%] left-0 w-full h-[1px] bg-white/10 z-0 flex items-center">
          <div className="w-[60%] h-full bg-transparent" />
          <div className="w-24 h-[2px] bg-[#D4FF00] shadow-[0_0_15px_#D4FF00]" />
        </div>

        <div className="max-w-[1800px] mx-auto relative z-10 space-y-4">

          {/* ROW 1: BUILT FOR + IMAGE (Slideshow) */}
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

          {/* ROW 2: IMAGE (Slideshow) + GROWTH */}
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

        {/* SYSTEM PROTOCOL LABEL */}
        <div className="absolute bottom-10 left-10 flex items-center gap-4 opacity-20">
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white">
            Scale Strategy / v.2026
          </span>
        </div>

      </section>

      <WorkMarquee5Col />

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



const WorkMarquee5Col = () => {
  const allProjects = [
    { title: "Smash Foods", img: "https://images.unsplash.com/photo-1569058242253-92a9c71f9867?q=80&w=800" },
    { title: "Lumar", img: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800" },
    { title: "Vybrance Labs", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800", video: true },
    { title: "Coho+", img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=800" },
    { title: "Kahuna", img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800" },
    { title: "A La Maison", img: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800" },
  ];

  // Helper component for each vertical track
  const ColumnTrack = ({ items, reverse = false, duration = 30 }: { items: Array<{ title: string; img: string; video?: boolean;[key: string]: unknown }>; reverse?: boolean; duration?: number }) => (
    <div className="flex flex-col gap-4 overflow-hidden h-[700px] relative shrink-0">
      <motion.div
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: duration, repeat: Infinity }}
        className="flex flex-col gap-4"
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="w-full aspect-[4/5] rounded-[1.8rem] overflow-hidden border border-white/5 bg-zinc-900 group relative"
          >
            <img
              src={item.img}
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              alt={item.title}
            />
            {/* Minimal label on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end">
              <h3 className="text-white font-bold uppercase tracking-tighter text-sm">{item.title}</h3>
            </div>
            {item.video && (
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-full bg-[#D4FF00] flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-black border-b-[4px] border-b-transparent ml-0.5" />
                </div>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="bg-[#050508] py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* SECTION HEADER */}
        <div className="mb-12 flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Continuous Output</span>
            <div className="w-12 h-[1px] bg-zinc-800" />
          </div>
          <h2 className="text-5xl md:text-7xl font-[1000] text-white tracking-tighter uppercase leading-none">
            WORK CYCLE<span className="text-[#D4FF00]">.</span>
          </h2>
        </div>

        {/* 5-COLUMN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 h-[700px] relative overflow-hidden">

          {/* Col 1: UP */}
          <ColumnTrack items={[allProjects[0], allProjects[1], allProjects[2]]} duration={25} />

          {/* Col 2: DOWN */}
          <ColumnTrack items={[allProjects[3], allProjects[4], allProjects[5]]} reverse duration={35} />

          {/* Col 3: UP */}
          <ColumnTrack items={[allProjects[2], allProjects[0], allProjects[4]]} duration={20} />

          {/* Col 4: DOWN */}
          <ColumnTrack items={[allProjects[1], allProjects[5], allProjects[3]]} reverse duration={40} />

          {/* Col 5: UP */}
          <ColumnTrack items={[allProjects[4], allProjects[2], allProjects[1]]} duration={28} />

          {/* Fading Mask Overlays */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050508] to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050508] to-transparent z-20 pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

