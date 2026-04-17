import { useEffect, useState } from "react";
import {
  Mic2, Calendar, Users, Globe, School,
  Lightbulb, Presentation,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

import logo from "@/assets/logo.png";

const words = ["Ecosystem", "Community", "Platform", "Future", "Network"];

const ecosystemTags = [
  { id: 1, icon: Mic2, text: "Podcasts", color: "text-purple-500", x: 18, y: 15 },
  { id: 2, icon: Calendar, text: "Events", color: "text-emerald-500", x: 8, y: 35 },
  { id: 3, icon: Users, text: "Sessions", color: "text-blue-500", x: 12, y: 55, large: true },
  { id: 4, icon: Globe, text: "Online/Offline", color: "text-orange-500", x: 10, y: 75 },
  { id: 6, icon: Lightbulb, text: "E-Cell", color: "text-amber-600", x: 82, y: 15 },
  { id: 8, icon: Presentation, text: "Workshops", color: "text-cyan-500", x: 92, y: 35 },
  { id: 7, icon: School, text: "Online Lectures", color: "text-indigo-600", x: 88, y: 55, large: true },
  { id: 9, icon: GraduationCap, text: "Skill Development", color: "text-rose-500", x: 90, y: 75 },
];

const Connector = ({ x, y }: { x: number; y: number }) => {
  const isLeft = x < 50;
  const trunkX = isLeft ? 35 : 65;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        d={`M ${x} ${y} H ${trunkX} V 50 H 50`}
        fill="none"
        stroke="#CBD5E1"
        strokeWidth="0.2"
        strokeDasharray="1 1"
      />
    </svg>
  );
};

const FeatureNode = ({
  icon: Icon,
  text,
  color,
  x,
  y,
  large,
}: {
  icon: LucideIcon;
  text: string;
  color: string;
  x: number;
  y: number;
  large?: boolean;
}) => (
  <div
    className="absolute flex items-center gap-2 sm:gap-3 
    bg-white px-2 sm:px-4 py-1.5 sm:py-2.5 
    rounded-xl sm:rounded-2xl shadow-lg 
    border border-gray-100 
    transition-all duration-300 hover:scale-105 
    z-20 whitespace-nowrap 
    -translate-x-1/2 -translate-y-1/2"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <div
      className={`p-1 sm:p-2 rounded-lg sm:rounded-xl bg-gray-50 shrink-0 ${
        large ? "ring-2 ring-blue-50" : ""
      }`}
    >
      <Icon
        size={16}
        className={color}
        strokeWidth={2.5}
      />
    </div>
    <span className="text-slate-900 font-extrabold text-[9px] sm:text-sm tracking-tight">
      {text}
    </span>
  </div>
);

const KattalyxExtendedMap = () => {
  const [index, setIndex] = useState(0); 
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-20 overflow-hidden px-8">

      {/* Heading */}
      <div className="text-center mb-10 sm:mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
          Our{" "}
          <span
            className={`text-blue-600 transition-all duration-500 inline-block ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {words[index]}
          </span>
        </h2>
        <p className="mt-2 text-slate-500 font-medium text-xs sm:text-base md:text-lg">
          Innovation. Education. Opportunity.
        </p>
      </div>

      {/* Map Area */}
      <div className="w-full flex justify-center px-2 sm:px-4">
        <div className="relative w-full max-w-7xl aspect-square sm:aspect-[16/10] md:h-[700px]">

          {ecosystemTags.map((tag) => (
            <Connector key={`line-${tag.id}`} x={tag.x} y={tag.y} />
          ))}

          {/* Center Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
            <div className="relative">
              <div className="absolute -inset-8 sm:-inset-12 bg-blue-500/10 blur-[60px] sm:blur-[100px] rounded-full" />
              <div className="relative w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 bg-white rounded-2xl sm:rounded-[3rem] shadow-2xl flex items-center justify-center p-3 sm:p-6 border-b-4 sm:border-b-8 border-gray-100 transition-transform duration-500 hover:rotate-3">
                <img
                  src={logo}
                  alt="Kattalyx"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {ecosystemTags.map((tag) => (
            <FeatureNode key={tag.id} {...tag} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KattalyxExtendedMap;
