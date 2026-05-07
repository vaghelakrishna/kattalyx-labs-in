import { motion } from "framer-motion";
// import { Link } from "react-router";
import {
  Target,
  School,
  Mic2,
  Handshake,
  Zap,
  // ArrowRight
} from "lucide-react";
import Event1 from "../../assets/events/Event1.webp";
const BigBrushUnderline = ({ text }: { text: string }) => {
  return (
    <span className="relative inline-block px-1">
      <span className="relative z-10">{text}</span>
      <svg
        className="absolute bottom-1 left-[-5%] w-[110%] h-[40%] pointer-events-none z-0"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 15 Q 25 13, 50 14 T 98 10"
          stroke="#FFD65A"
          strokeWidth="6"
          strokeLinecap="round"
          className="opacity-70"
        />
        <path
          d="M5 16 L 35 15 L 75 12 L 95 8"
          stroke="#FFD65A"
          strokeWidth="2"
          strokeLinecap="round"
          className="opacity-40"
        />
      </svg>
    </span>
  );
};

function OurExpertise() {
  const services = [
    {
      id: 1,
      tag: "Skill Development",
      title: "Events in Schools & Colleges",
      icon: <Target className="w-5 h-5" />,
      description: "High-impact entrepreneurship events covering 60+ domains. 2–3 hours of real industry exposure — not just a lecture.",
      details: "Topics: Entrepreneurship · AI/ML · Cybersecurity · and 55 more",
      image: Event1,
      // link: "/events",
      btnText: "View Domains",
      highlight: true
    },
    {
      id: 2,
      tag: "Digital Identity",
      title: "Institutional Branding",
      icon: <School className="w-5 h-5" />,
      description: "Complete digital infrastructure. Websites, apps, and brand strategy for modern institutions.",
      details: "Includes: Web/App Dev · Digital Marketing · ERP · CRM",
      // link: "/branding",
      btnText: "Build Brand"
    },
    {
      id: 3,
      tag: "Industry Insight",
      title: "Podcasting for Education",
      icon: <Mic2 className="w-5 h-5" />,
      description: "Pure industry insight from CEOs and C-suite executives shared directly with students.",
      details: "Guests: CEOs · founders · VCs · Experts",
      // link: "/podcast",
      btnText: "Listen Now"
    },
    {
      id: 4,
      tag: "Capital & Growth",
      title: "Investor–Founder Networking",
      icon: <Handshake className="w-5 h-5" />,
      description: "Curated rooms where early-stage founders meet investors for high-quality connections.",
      details: "Focus: Seed Funding · Angel Investment",
      // link: "/networking",
      btnText: "Get Funded"
    },
    {
      id: 5,
      tag: "Innovation Hub",
      title: "E-Cell Establishment",
      icon: <Zap className="w-5 h-5" />,
      description: "We help institutions establish fully functional E-Cells to build a permanent innovation culture.",
      details: "Includes: Structure · Mentorship · Events",
      // link: "/ecell",
      btnText: "Start E-Cell"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            OUR SERVICES
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            What We Help You <BigBrushUnderline text="Build" />
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-slate-500 leading-relaxed tracking-tight font-medium">
            We <span className="text-slate-900 italic">orchestrate</span> the convergence of real-world intelligence, digital infrastructure, and
            <span className="text-slate-900 font-bold ml-1">
              elite career pathways into a singular, unstoppable ecosystem.
            </span>
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={`relative group rounded-2xl p-5 flex flex-col transition-all duration-300 border ${service.highlight
                  ? "md:row-span-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-transparent shadow-xl"
                  : "bg-white border-slate-200 hover:border-blue-500 hover:shadow-lg shadow-sm"
                }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-xl ${service.highlight ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"}`}>
                  {service.icon}
                </div>
                <span className={`text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border ${service.highlight ? "border-white/30 text-white" : "border-slate-200 text-slate-400"
                  }`}>
                  {service.tag}
                </span>
              </div>

              {/* Card Body */}
              <h4 className={`text-lg font-bold mb-2 ${service.highlight ? "text-white" : "text-slate-900"}`}>
                {service.title}
              </h4>

              <p className={`text-xs leading-relaxed mb-4 ${service.highlight ? "text-blue-50" : "text-slate-500"}`}>
                {service.description}
              </p>

              {/* Conditional Image for Highlight Card */}
              {service.highlight && service.image && (
                <div className="my-4 overflow-hidden rounded-xl bg-white shadow-inner">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={service.image}
                    alt={service.title}
                    className="h-52 w-full object-cover"
                  />
                </div>
              )}

              {/* Card Footer */}
              <div className={`mt-auto pt-3 border-t ${service.highlight ? "border-white/10" : "border-slate-100"}`}>
                <p className={`text-[10px] font-medium mb-3 italic ${service.highlight ? "text-blue-200" : "text-slate-400"}`}>
                  {service.details}
                </p>
                {/* <Link to={service.link} className="inline-flex items-center group/link">
                  <span className={`text-xs font-bold transition-all ${service.highlight ? "text-white" : "text-blue-600 group-hover/link:translate-x-1"}`}>
                    {service.btnText}
                  </span>
                  <ArrowRight className={`ml-1 w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1 ${service.highlight ? "text-white" : "text-blue-600"}`} />
                </Link> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-xs font-bold text-white transition-all hover:bg-blue-600"
          >
            Explore All Solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}

export default OurExpertise;