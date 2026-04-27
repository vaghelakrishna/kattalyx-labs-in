import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/sections/brandingSection/Services";
import { useState } from "react";
import LightInfiniteBurst from "@/sections/podcastSection/Mushic";
import CaseStudiesSection from "@/components/CaseStudy";
import FinalStudioFeed from "@/sections/uniqueDesign/unique";
import WorkCarousel from "@/sections/uniqueDesign/Scrollani";
import KattalyxUnifiedFlow from "@/sections/uniqueDesign/NewScroll";


// Using the same staggered online image layout for consistency
// const studioImages = [
//   { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600", w: "w-[160px]", h: "h-[220px]" },
//   { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600", w: "w-[200px]", h: "h-[160px]", mt: "mt-12" },
//   { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600", w: "w-[150px]", h: "h-[200px]" },
// ];

const logos = [
  { name: 'BENTLEY', style: 'font-bold italic text-xl' },
  { name: 'DEPT OF MUNICIPALITIES', style: 'text-[10px] font-semibold leading-none text-center' },
  { name: 'MERCEDES', style: 'w-10 h-10 border-2 border-black rounded-full flex items-center justify-center font-bold' },
  { name: 'Builder.ai', style: 'text-2xl font-black tracking-tighter' },
  { name: 'knowsmoke', style: 'text-2xl font-bold lowercase tracking-tighter' },
  { name: 'KINSHIP', style: 'text-2xl font-light tracking-[0.2em]' },
];

const faqs = [
  {
    question: "How long does a typical branding project take?",
    answer: "Most branding identities are completed within 4-6 weeks, including research, concept development, and final delivery of assets."
  },
  {
    question: "Do you offer custom ERP/CRM solutions?",
    answer: "Yes, we specialize in building custom digital structures tailored to your specific business workflows and scaling needs."
  },
  {
    question: "Can you help position our school in a competitive market?",
    answer: "Absolutely. We handle the tech chores and combine them with strategic positioning to make your institution stand out."
  },
  {
    question: "What is your pricing model for long-term marketing?",
    answer: "We offer both project-based and monthly retainer models depending on the scope and growth targets of your brand."
  }
];

// const services = [
//   {
//     icon: <Palette className="w-6 h-6" />,
//     title: "Brand Identity",
//     desc: "Logo, color palette, typography — everything that makes you recognizable.",
//   },
//   {
//     icon: <Megaphone className="w-6 h-6" />,
//     title: "Brand Storytelling",
//     desc: "Craft narratives that connect emotionally with your audience.",
//   },
//   {
//     icon: <TrendingUp className="w-6 h-6" />,
//     title: "Brand Strategy",
//     desc: "Positioning, messaging, and go-to-market strategy built for growth.",
//   },
//   {
//     icon: <Star className="w-6 h-6" />,
//     title: "Personal Branding",
//     desc: "Build your authority as a founder, speaker, or industry expert.",
//   },
// ];

// const caseStudies = [
//   {
//     title: "How a student startup 10x'd their reach with a rebrand",
//     category: "CASE STUDY",
//     image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800",
//   },
//   {
//     title: "Building a personal brand from zero to 50k followers",
//     category: "PERSONAL BRAND",
//     image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800",
//   },
//   {
//     title: "Why storytelling shapes brand success in 2025",
//     category: "BRANDING",
//     image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800",
//   },
// ];

const BrandingPage = () => {
  const displayLogos = [...logos, ...logos, ...logos];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A]">
      <Navbar />

      {/* HERO */}
      {/* <section className="pt-40 pb-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-black translate-x-[2px] translate-y-[2px] rounded-full" />
            <div className="relative flex items-center gap-2 px-4 py-1.5 bg-[#FFD100] border-2 border-black rounded-full text-[10px] font-black uppercase tracking-wider">
              <Palette className="w-3.5 h-3.5 stroke-[2.5px]" /> Branding Studio
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-slate-900 max-w-4xl">
            Build a Brand <br />
            <span className="text-blue-600">People Remember.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-xl leading-relaxed">
            From identity to strategy — we help students, startups, and institutions build brands that stand out in a noisy world.
          </p>

          <div className="flex gap-4 mt-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all">
              Start Your Brand Journey
            </button>
            <button className="border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </section> */}


      <LightInfiniteBurst />

      {/* SERVICES GRID */}
      {/* <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">What We Offer</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl hover:border-blue-100 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {s.icon}
              </div>
              <h3 className="font-black text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      <Services />


      {/* CASE STUDIES */}
      {/* <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Case Studies</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-white rounded-[2rem] p-4 border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-video mb-5">
                <img src={c.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={c.title} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{c.category}</span>
              <h3 className="text-lg font-bold mt-3 group-hover:text-blue-600 transition-colors">{c.title}</h3>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span>Read More</span>
                <ArrowUpRight className="w-4 h-4 text-blue-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* <FinalStudioFeed /> */}



      {/* <section className="bg-white py-20 overflow-hidden text-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Partners</span>
          <hr className="mt-4 border-gray-100" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8 mb-24">
          <h2 className="text-4xl md:text-6xl font-medium leading-[1.05] max-w-4xl tracking-tight">
            Trusted by teams at every stage startups, scale-ups, and seasoned giants.
          </h2>
          <div className="text-sm font-medium mt-2">
            <p className="text-gray-400 italic">Our secret sauce?</p>
            <p className="font-bold">Execution.</p>
          </div>
        </div>

        <div className="relative flex overflow-hidden group">
          <div className="flex animate-scroll whitespace-nowrap items-center">
            {displayLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-12 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer"
              >
                <div className={logo.style}>{logo.name}</div>
              </div>
            ))}
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}} />

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>

        <div className="flex justify-center mt-20">
          <button className="flex items-center gap-3 px-10 py-3.5 border border-gray-200 rounded-full hover:border-black transition-all text-[13px] font-semibold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
            Our Partners
          </button>
        </div>
      </section> */}


      {/* <CaseStudiesSection /> */}

      {/* <section className="bg-[#f9f9fb] text-zinc-900 py-24 px-6 md:px-20 font-sans selection:bg-black selection:text-white">
        <div className="max-w-4xl mx-auto">

          <div className="mb-16 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-600 rounded-full" />
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400">Inquiry</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tighter uppercase italic text-black">Common Queries</h2>
          </div>

          <div className="border-t-[0.5px] border-zinc-200">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b-[0.5px] border-zinc-200 group">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-8 flex items-center justify-between text-left transition-all"
                >
                  <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${openIndex === i ? 'text-blue-600' : 'text-zinc-500 group-hover:text-black'}`}>
                    {faq.question}
                  </span>

                  <div className={`transform transition-transform duration-500 ${openIndex === i ? 'rotate-45 text-blue-600' : 'rotate-0 text-zinc-300 group-hover:text-zinc-900'}`}>
                    <Plus size={20} strokeWidth={2.5} />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-zinc-500 text-sm leading-relaxed max-w-2xl font-medium">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              Still have questions? <span className="text-black font-black underline underline-offset-4 cursor-pointer ml-2 hover:text-blue-600 transition-colors">Reach out directly</span>
            </p>
          </div>
        </div>
      </section> */}

      {/* <WorkCarousel /> */}



      {/* <KattalyxUnifiedFlow /> */}

      <section className="bg-white py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto border-t-2 border-black pt-20">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">

            {/* Left: Heading with Hover-to-Slide Image */}
            <div className="max-w-4xl">
              <span className="text-[8px] font-black uppercase tracking-[0.5em] text-blue-600 block mb-8">
                Next Phase
              </span>

              <h2
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-[clamp(3rem,5vw,7.5rem)] font-[1000] leading-[0.8] tracking-tighter uppercase italic text-zinc-900 cursor-default"
              >
                Let's <br />

                <span className="flex items-center flex-wrap">
                  {/* THE DYNAMIC SLIDE IMAGE */}
                  <motion.div
                    initial={{ width: 0, opacity: 0, marginRight: 0 }}
                    animate={{
                      width: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0,
                      marginRight: isHovered ? "2rem" : 0
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="relative w-28 h-18 md:w-60 md:h-35 overflow-hidden rounded-2xl md:rounded-[3rem] bg-zinc-100 border border-zinc-200 shadow-2xl my-2">
                      <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600"
                        alt="Work"
                        className="w-full h-full object-cover "
                      />
                      {/* Visual Marker (Blue Dot) */}
                      <div className="absolute bottom-4 left-8 w-3 h-3 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
                    </div>
                  </motion.div>

                  <span className={`transition-colors duration-500 ${isHovered ? 'text-black' : 'text-zinc-200'}`}>
                    Scale Your
                  </span>
                </span>

                Visions<span className="text-blue-600 not-italic">.</span>
              </h2>
            </div>

            {/* Right Column */}
            <div className="md:self-end flex flex-col items-start md:items-end gap-10">
              <p className="max-w-[300px] text-xs font-bold text-zinc-400 uppercase tracking-widest leading-loose md:text-right">
                Join the ecosystem of students and startups redefining the digital DNA of modern education.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-4 bg-black text-white px-6 py-2 rounded-full overflow-hidden transition-all"
              >
                <span className="relative z-10 text-xs font-black uppercase tracking-[0.3em]">
                  Get Started Today
                </span>
                <div className="relative z-10 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight size={20} />
                </div>
                <div className="absolute inset-0 bg-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </motion.button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandingPage;


