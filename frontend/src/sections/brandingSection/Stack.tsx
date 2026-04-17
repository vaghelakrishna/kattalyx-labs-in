import React from 'react';

const services = [
  {
    id: "001",
    title: "Brand Strategy",
    description: "Your brand's compass. It defines purpose, sharpens positioning, and ensures every decision resonates.",
    items: ["Research & Insights", "Go-to-Market Strategy (GTM)", "Brand Architecture", "Purpose, Mission, Vision"],
    media: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000",
    bgColor: "bg-[#f8f8f8]"
  },
  {
    id: "002",
    title: "Brand Identity",
    description: "The visual heartbeat of your brand: we shape a distinct visual language that turns heads.",
    items: ["Logotype & Symbol Design", "Typography & Color Systems", "Brand Book & Guidelines", "Illustrations & 3D Visuals"],
    media: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000",
    bgColor: "bg-white"
  },
  {
    id: "003",
    title: "Digital Design",
    description: "Creating seamless digital experiences that bridge the gap between users and technology.",
    items: ["UI/UX Design", "Responsive Web Design", "App Interface", "Prototyping"],
    media: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000",
    bgColor: "bg-[#f8f8f8]"
  }
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  return (
    <div className={`sticky top-0 w-full h-[85vh] ${service.bgColor} border-t border-gray-100 flex flex-col p-8 md:px-16 lg:px-20 py-10 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]`}>
      <div className="flex justify-between items-start mb-6">
        <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400">{service.id}</span>
        <div className="max-w-[240px]">
          <p className="text-[12px] leading-relaxed text-gray-500 font-medium italic">
            {service.description}
          </p>
        </div>
      </div>

      <div className="flex-grow flex flex-col lg:flex-row justify-between items-end pb-10">
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
            {service.title}
          </h2>
          <ul className="space-y-1">
            {service.items.map((item, i) => (
              <li key={i} className="text-[16px] md:text-[18px] font-medium text-black/80 hover:text-black transition-colors cursor-default">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full max-w-[400px] aspect-[1.5/1] rounded-sm overflow-hidden shadow-md self-end mb-4 bg-gray-100">
          <img src={service.media} alt={service.title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

const ServicesStack = () => {
  return (
    <div className="relative w-full bg-[#f8f8f8]">

      {/* HEADER SECTION - Fixing the "Partner" issue */}
      <div className="w-full pt-24 pb-16 px-8 md:px-16 lg:px-20 border-b border-gray-100">
        <span className="text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase mb-12 block">
          Our Expertise
        </span>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl leading-[1.05] uppercase">
            WE NAVIGATE TRANSFORMATION <br />
            AT EVERY STAGE.
          </h2>
          <div className="max-w-[200px] lg:mt-2">
            <p className="text-[10px] leading-tight text-gray-400 font-bold uppercase tracking-widest">
              From Ideation to <br /> Final Execution.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* LET'S BEGIN Button remains sticky */}
      <div className="sticky bottom-10 left-10 md:left-20 z-[60] pointer-events-none">
        <button className="pointer-events-auto bg-white border border-gray-200 text-black px-7 py-3 rounded-full text-[10px] font-bold flex items-center gap-3 shadow-sm hover:scale-105 transition-all uppercase tracking-widest">
          <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-pulse"></span>
          Let's Begin
        </button>
      </div>
    </div>
  );
};

export default ServicesStack;