import { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, GraduationCap } from 'lucide-react';

const KattalyxSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const classes = [
    {
      title: "Full Stack Development",
      desc: "Master the MERN stack with industry experts. Build real-world applications and get job-ready in 24 weeks.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
      bg: "bg-[#E0F2FE]", // Soft Sky Blue
      highlight: "text-blue-600"
    },
    {
      title: "Data Science & ML",
      desc: "Unlock the power of data. Learn Python, SQL, and Machine Learning algorithms to drive business decisions.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
      bg: "bg-[#F0F9FF]", // Very Light Blue
      highlight: "text-cyan-600"
    },
    {
      title: "Cyber Security Pro",
      desc: "Protect digital assets. Dive deep into ethical hacking, network security, and advanced threat protection.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
      bg: "bg-[#E0E7FF]", // Soft Indigo
      highlight: "text-indigo-600"
    },
    {
      title: "AI & Neural Networks",
      desc: "The future is here. Explore Generative AI, LLMs, and neural architecture with hands-on lab sessions.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
      bg: "bg-[#F5F3FF]", // Soft Violet
      highlight: "text-violet-600"
    }
  ];

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cards = container.children;
      if (cards[index]) {
        const targetScroll = (cards[index] as HTMLElement).offsetLeft - container.offsetLeft;
        container.scrollTo({ left: targetScroll, behavior: 'smooth' });
        setActiveIndex(index);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        const nextIndex = (activeIndex + 1) % classes.length;
        scrollToCard(nextIndex);
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  return (
    <section
      className="bg-white py-20 mt-8 px-6 md:px-12 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">

        {/* --- Kattalyx Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="text-blue-600" size={20} />
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Online Classes</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#1a1a1a] leading-[1.1]">
              Advanced Labs <br />
              For <span className="text-blue-600">Future Tech</span>
            </h2>
          </div>

          <button className="flex items-center gap-3 mt-8 md:mt-0 group">
            <span className="text-xs font-bold text-gray-500 tracking-tighter">VIEW ALL LABS</span>
            <div className="bg-slate-100 p-3 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <ArrowUpRight size={20} />
            </div>
          </button>
        </div>

        {/* --- Slider Container --- */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden py-10 px-2 scroll-smooth"
        >
          {classes.map((lab, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={idx}
                onClick={() => scrollToCard(idx)}
                className={`shrink-0 rounded-[40px] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer relative overflow-hidden
                  ${isActive
                    ? 'bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-[90%] md:w-[750px] p-8 md:p-12'
                    : `w-[70%] md:w-[350px] p-10 opacity-60 ${lab.bg}`
                  }
                `}
              >
                <div className={`flex flex-col md:flex-row gap-10 h-full`}>

                  <div className="flex-1 flex flex-col justify-between min-w-[260px]">
                    <div>
                      <h3 className={`font-black text-slate-800 leading-tight transition-all duration-700 ${isActive ? 'text-3xl md:text-4xl mb-6' : 'text-2xl mb-4'}`}>
                        {lab.title}
                      </h3>

                      <div className={`transition-all duration-700 overflow-hidden ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-[340px]">
                          {lab.desc}
                        </p>
                      </div>
                    </div>

                    {/* <div className="flex items-center gap-4 mt-8 group">
                      <span className="font-bold text-slate-900 text-sm">Enroll Now</span>
                      <div className={`p-3 rounded-full transition-all duration-500 ${isActive ? 'bg-blue-600 text-white' : 'bg-white text-slate-400 shadow-sm'}`}>
                        {isActive ? <ArrowRight size={22} /> : <ArrowUpRight size={22} />}
                      </div>
                    </div> */}
                  </div>

                  <div className={`transition-all duration-1000 ease-in-out overflow-hidden rounded-[30px] 
                    ${isActive ? 'w-full md:w-[350px] h-[300px] opacity-100 translate-x-0' : 'w-0 h-0 opacity-0 translate-x-10'}`}>
                    <img src={lab.img} alt={lab.title} className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                  </div>

                  {!isActive && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    </div>
                  )}
                </div>

                {!isActive && (
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/5 rounded-full" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KattalyxSlider;