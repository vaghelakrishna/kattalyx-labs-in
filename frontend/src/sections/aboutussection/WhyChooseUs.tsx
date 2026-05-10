import React from "react";
import {
  BrainCircuit,
  Briefcase,
  Building2,
  Navigation,
  Wifi,
  Zap,
  type LucideIcon, // Import the type for Lucide icons
} from "lucide-react";

// 1. Define the Interface for the Props
interface CardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  highlight?: boolean; // Optional boolean
}

// 2. Apply the interface to the Card component
const Card: React.FC<CardProps> = ({ icon: Icon, title, desc, color, highlight }) => {
  // Mapping background colors to their respective hover text colors
  // We use Record<string, string> to satisfy TS index signature requirements
  const hoverColorMap: Record<string, string> = {
    "bg-blue-500": "group-hover:text-blue-500",
    "bg-cyan-500": "group-hover:text-cyan-500",
    "bg-green-500": "group-hover:text-green-500",
    "bg-orange-500": "group-hover:text-orange-500",
    "bg-purple-500": "group-hover:text-purple-500",
    "bg-red-500": "group-hover:text-red-500",
  };

  return (
    <div
      className={`group text-center transition-all duration-300 ${highlight ? "transform hover:-translate-y-2" : ""
        }`}
    >
      {/* Icon Container */}
      <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${color}`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Title */}
      <h3
        className={`mt-8 text-xl font-semibold text-slate-800 transition-colors duration-300 ${hoverColorMap[color] || "group-hover:text-slate-600"
          }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-slate-500 leading-relaxed max-w-sm mx-auto">
        {desc}
      </p>
    </div>
  );
};

export default function WhyChooseUs() {
  // 3. Type the array to ensure data consistency
  const cards: CardProps[] = [
    {
      icon: BrainCircuit,
      title: "Digital Infrastructure Layer",
      desc: "School ERP • School App • School Website",
      color: "bg-blue-500",
      highlight: true,
    },
    {
      icon: Building2,
      title: "Career Pathway Layer",
      desc: "Guaranteed internships • Job opportunities across our ecosystem • A strong alumni network & mentorship loop",
      color: "bg-cyan-500",
      highlight: true,
    },
    {
      icon: Zap,
      title: "Media & Influence Layer",
      desc: "Kattalyx Global Educators • Podcast • Featuring top educators, founders, CEOs, and innovators",
      color: "bg-green-500",
      highlight: true,
    },
    {
      icon: Navigation,
      title: "Real-World Learning Layer",
      desc: "Offline workshops • Online live sessions • Real-world competitions",
      color: "bg-orange-500",
      highlight: true,
    },
    {
      icon: Wifi,
      title: "Student Development & Community Layer",
      desc: "Competitions • Leadership programs • Personality development • Community projects",
      color: "bg-purple-500",
      highlight: false,
    },
    {
      icon: Briefcase,
      title: "School Growth & Branding Layer",
      desc: "Digital branding support • Reputation building via events, results & activities",
      color: "bg-red-500",
      highlight: true,
    },
  ];

  return (
    <section id="whychooseus" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800">
          Why Choose KATTALYX Labs?
        </h2>

        <p className="mt-6 text-lg text-slate-500 max-w-3xl mx-auto">
          Revolutionizing education with cutting-edge technology and unparalleled efficiency.
        </p>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-16">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}