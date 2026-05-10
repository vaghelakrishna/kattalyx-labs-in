import { motion } from 'framer-motion';

const WhyChooseXschool = () => {
  const cards = [
    {
      title: "Powerful platform",
      desc: "The platform provides a powerful way to access educational material. It allows users to participate in interactive activities and take tests.",
      lightColor: "bg-blue-50/60", // Added light color
      icon: (
        <div className="relative w-10 h-10">
          <div className="absolute top-0 left-0 w-6 h-6 bg-blue-700 rounded-sm" />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-400 rounded-full" />
        </div>
      )
    },
    {
      title: "Expert teachers",
      desc: "These teachers can provide guidance and support to the users as they learn, helping them to stay motivated and engaged.",
      lightColor: "bg-emerald-50/60", // Added light color
      icon: (
        <div className="relative w-10 h-10">
          <div className="absolute bottom-0 left-0 w-8 h-4 bg-orange-400 rounded-b-full" />
          <div className="absolute top-0 right-2 w-5 h-5 bg-emerald-400 rounded-full" />
        </div>
      )
    },
    {
      title: "50+ Categories",
      desc: "It offers more than 50 categories, so that the user can find the materials he needs to achieve his learning objectives.",
      lightColor: "bg-pink-50/60", // Added light color
      icon: (
        <div className="w-10 h-10 rounded-full border-[6px] border-pink-300 flex items-center justify-center">
          <div className="w-4 h-4 bg-blue-400 rounded-full" />
        </div>
      )
    },
    {
      title: "100+ courses",
      desc: "Offering more than 100 courses covering a wide range of topics, you can explore different fields and areas of study.",
      lightColor: "bg-orange-50/60", // Added light color
      icon: (
        <div className="relative w-10 h-10">
          <div className="absolute top-0 left-0 w-6 h-6 bg-yellow-300 rounded-full opacity-80" />
          <div className="absolute top-2 left-3 w-5 h-5 bg-pink-400 rounded-full opacity-80" />
          <div className="absolute bottom-1 right-2 w-5 h-5 bg-blue-300 rounded-full opacity-80" />
        </div>
      )
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-white py-20 overflow-hidden font-sans flex items-center justify-center">

      {/* --- BACKGROUND DECORATIONS --- */}
      <motion.div
        initial={{ x: -100, y: 100, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#0084FF] rounded-full z-0 hidden md:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">

        {/* Right Side Illustration */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute -right-10 top-40 z-0 hidden lg:flex flex-row-reverse items-center gap-4"
        >
          <div className="w-16 h-32 bg-[#FFD954] rounded-r-full shadow-sm" />
          <div className="w-16 h-32 bg-[#FFAD4D] rounded-r-full opacity-90 shadow-sm" />
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 relative z-20"
        >
          <span className="text-[#3EC1A1] text-sm font-bold tracking-widest uppercase">Why us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D3142] mt-3 mb-6 leading-tight">
            Why choose <WideUnderline text="Kattlayx Labs?" color="#3B82F6" />
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Kattalyx Labs is a great elearning platform that provides an
            excellent balance between ease of use and powerful features.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="relative bg-[#F8F9FB] p-10 rounded-[44px] flex flex-col items-start transition-all duration-500 hover:shadow-xl hover:bg-white group cursor-default overflow-hidden"
            >
              {/* --- NEW: Interactive Background Color Glow --- */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${card.lightColor}`} />

              <div className="relative z-10 mb-10 transform transition-transform duration-500 group-hover:scale-110">
                {card.icon}
              </div>

              <h3 className="relative z-10 text-xl font-bold text-[#2D3142] mb-4 transition-colors duration-500">
                {card.title}
              </h3>

              <p className="relative z-10 text-gray-400 text-[15px] leading-7 font-light">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseXschool;



const WideUnderline = ({ text, color = "#3B82F6" }: { text: string; color?: string }) => (
  <span className="relative inline-block">
    {/* The Text */}
    <span className="relative z-10">{text}</span>

    {/* The Underline SVG */}
    <svg
      // We set width to 110% and nudge it left to ensure it starts/ends past the text
      className="absolute -bottom-2 left-[-0%] w-[90%] h-4 pointer-events-none overflow-visible"
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
    >
      <motion.path
        // Path spans from 0 to 100 in the viewBox
        d="M0 10 Q 25 10, 50 12 T 100 10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      />
    </svg>
  </span>
);