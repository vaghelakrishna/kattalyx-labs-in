import { motion } from "framer-motion";
import { Link } from "react-router";

function OurExpertise() {
  return (
    <section className="py-12 bg-white">
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
            OUR MODULES
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            What We Help You <BigBrushUnderline text="Build" />
          </h2>

          <p className="mt-3 max-w-3xl mx-auto text-sm text-slate-600 leading-relaxed">
            We combine real-world skill education, hybrid learning, digital infrastructure, and career pathways into one unstoppable system.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Highlight Card */}
         <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ 
    y: -5, 
    scale: 1.01,
    transition: { duration: 0.2 } 
  }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="md:row-span-2 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-500 p-4 text-white flex flex-col cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-blue-200/50 transition-shadow duration-300"
>
            <span className="mb-4 w-fit rounded-full border border-white/30 px-4 py-2 text-xs font-medium">
              Real-World Learning Layer
            </span>

            <h3 className="text-lg font-semibold mb-2">
              Hybrid Learning Model
            </h3>

            <p className="text-sm text-white/90 mb-4">
              Offline workshops, online live sessions, and real-world competitions that bring industry exposure directly to students.
            </p>

            <div className="mt-auto overflow-hidden rounded-2xl bg-white">
    <motion.img
      whileHover={{ scale: 1.1 }} // Internal image zoom effect
      transition={{ duration: 0.4 }}
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      alt="Students learning"
      className="h-40 w-full object-cover"
    />
  </div>
          </motion.div>

          {/* Card 2 */}
         <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ 
    y: -8, 
    scale: 1.02,
    borderColor: "#3b82f6", // blue-500
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" 
  }}
  transition={{ 
    duration: 0.6, 
    delay: 0.2,
    borderColor: { duration: 0.2 }, // Fast border change
    y: { duration: 0.2 }           // Fast lift
  }}
  className="rounded-3xl border border-slate-200 p-4 flex flex-col bg-white cursor-pointer"
>
            <span className="mb-3 w-fit rounded-full border px-3 py-1 text-sm font-medium text-slate-600">
              Digital Infrastructure
            </span>

            <h3 className="text-base font-semibold text-slate-900 mb-2">
              EliteVerse Platform
            </h3>

            <p className="text-sm text-slate-500 mb-4">
              Complete school digitization with ERP, mobile app, and website — total automation for modern institutions.
            </p>
            <Link to="https://eliteverse-portfolio.vercel.app/" target="_blank">
            <button className="mt-auto text-sm font-medium text-blue-600 hover:underline">
              Learn More →
            </button>
            </Link>
          </motion.div>


          {/* Card 3 */}
         <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ 
    y: -8, 
    scale: 1.02,
    borderColor: "#3b82f6", // blue-500
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" 
  }}
  transition={{ 
    duration: 0.6, 
    delay: 0.2,
    borderColor: { duration: 0.2 }, // Fast border change
    y: { duration: 0.2 }           // Fast lift
  }}
  className="rounded-3xl border border-slate-200 p-4 flex flex-col bg-white cursor-pointer"
>
            <span className="mb-3 w-fit rounded-full border px-3 py-1 text-sm font-medium text-slate-600">
              Career Pathway Layer
            </span>

            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Guaranteed Opportunities
            </h3>

            <p className="text-sm text-slate-500 mb-4">
              Internships, job opportunities, and a strong alumni network with mentorship loops for lifelong career support.
            </p>
 <Link to="/programs">
            <button className="mt-auto text-sm font-medium text-blue-600 hover:underline">
              Explore Careers →
            </button>
            </Link>
          </motion.div>

          {/* Card 4 */}
         <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ 
    y: -8, 
    scale: 1.02,
    borderColor: "#3b82f6", // blue-500
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" 
  }}
  transition={{ 
    duration: 0.6, 
    delay: 0.2,
    borderColor: { duration: 0.2 }, // Fast border change
    y: { duration: 0.2 }           // Fast lift
  }}
  className="rounded-3xl border border-slate-200 p-4 flex flex-col bg-white cursor-pointer"
>
            <span className="mb-3 w-fit rounded-full border px-3 py-1 text-sm font-medium text-slate-600">
              School Growth Layer
            </span>

            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Branding & Reputation
            </h3>

            <p className="text-sm text-slate-500 mb-4">
              Digital branding support, reputation building via events, results, and social media campaigns.
            </p>
            <Link to="/programs">
            <button className="mt-auto text-sm font-medium text-blue-600 hover:underline">
              Build Your Brand →
            </button>
            </Link>
          </motion.div>

          {/* Card 5 */}
         <motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ 
    y: -8, 
    scale: 1.02,
    borderColor: "#3b82f6", // blue-500
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" 
  }}
  transition={{ 
    duration: 0.6, 
    delay: 0.2,
    borderColor: { duration: 0.2 }, // Fast border change
    y: { duration: 0.2 }           // Fast lift
  }}
  className="rounded-3xl border border-slate-200 p-4 flex flex-col bg-white cursor-pointer"
>
            <span className="mb-3 w-fit rounded-full border px-3 py-1 text-sm font-medium text-slate-600">
              Student Development
            </span>

            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Community & Leadership
            </h3>

            <p className="text-sm text-slate-500 mb-4">
              Leadership programs, personality development, and community projects that shape future-ready students.
            </p>
              <Link to="/programs">
            <button className="mt-auto text-sm font-medium text-blue-600 hover:underline">
              Join Community →
            </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-6 text-center"
      >
        <a
          href="/programs"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-2 text-sm font-medium text-slate-900 transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white"
        >
          Explore Our Modules
          <span className="text-lg">→</span>
        </a>
      </motion.div>
    </section>
  );
}

export default OurExpertise;
const BigBrushUnderline = ({ text }: { text: string }) => {
  return (
    <span className="relative inline-block px-1">
      {/* The Text - Needs to be on top */}
      <span className="relative z-10">{text}</span>

      {/* The Heavy Brush SVG */}
      <svg
        className="absolute bottom-1 left-[-5%] w-[110%] h-[40%] pointer-events-none z-0"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The "Main" Heavy Stroke */}
        <path
          d="M2 15 Q 25 13, 50 14 T 98 10"
          stroke="#FFD65A"
          strokeWidth="6" /* Very thick for big headings */
          strokeLinecap="round"
          className="opacity-70" /* Transparency makes it look like ink */
        />
        {/* The "Dry Marker" Scratch - adds texture */}
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

