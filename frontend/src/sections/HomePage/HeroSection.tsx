import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import heroStudent from "@/assets/heroAv3.png"; // ✅ IMPORTANT (fix image path)

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center pt-22 md:pt-6 mt-11">
      
      {/* Background Text */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none uppercase font-black text-[18vw] sm:text-[15vw] leading-none overflow-hidden">
        Kattalyx Kattalyx Kattalyx
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-8 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT SIDE */}
          <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 border-2 border-black rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-widest mb-6 -rotate-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] w-fit">
              <GraduationCap className="w-4 h-4" />
              Your Future Starts Here!
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[1000] leading-[1.1] tracking-[-0.04em] uppercase text-slate-900">
              Real-World <br />
              Learning Ecosystem <br />
              <span className="text-blue-600 relative inline-block mt-1">
                for Schools.
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M1 10.5C50 3.5 150 1.5 299 10.5" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-4 max-w-lg text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              Kattalyx Labs is a full-stack{" "}
              <span className="text-black font-bold bg-blue-50 px-1 rounded">
                education ecosystem
              </span>{" "}
              transforming schools through real-world learning, hybrid education, and unified digital infrastructure.
            </p>

            <div className="mt-6 flex justify-center lg:justify-start">
              <Link to="/about">
                <button className="group flex items-center gap-3 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-bold uppercase tracking-wider hover:bg-black transition-all active:scale-95">
                  Start Exploring
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-md">
              <Stat value="50+" label="Topics" color="bg-blue-50" />
              <Stat value="9+" label="Schools" color="bg-yellow-50" />
              <Stat value="16+" label="Events" color="bg-purple-50" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full max-w-[520px] h-[480px] sm:h-[550px] flex items-center justify-center mx-auto mt-14 lg:mt-0">

            {/* Live Card */}
            <div className="absolute top-20 right-1/2 translate-x-1/2 sm:right-4 sm:translate-x-0 z-30">
              <div className="bg-white/95 backdrop-blur-md rounded-[2rem] w-64 sm:w-72 p-6 border border-white">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded-full">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">
                      Live Now
                    </span>
                  </div>

                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        alt="user"
                      />
                    ))}
                    <div className="w-8 h-8 rounded-full bg-slate-50 border-2 border-white flex items-center justify-center text-[10px] text-slate-600 font-bold">
                      +12
                    </div>
                  </div>
                </div>

                <h3 className="text-slate-900 text-lg font-[1000] leading-tight mb-2 uppercase tracking-tight">
                  Mastering Hybrid <br /> Infrastructure
                </h3>

                <Link to="/events">
                  <button className="w-full py-3 rounded-2xl bg-slate-900 text-white text-xs font-black uppercase tracking-[0.15em] hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group">
                    Join Sessions
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Program Card */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2   sm:translate-x-0 sm:-left-4 z-20">
              <div className="relative bg-white/70 backdrop-blur-xl rounded-[3rem] w-72 sm:w-[340px] py-8 px-6 border border-white/50">

                {/* Student Image */}
               <div className="hidden sm:block absolute -top-60 left-8">
  <div className="absolute inset-0 bg-blue-400/20 blur-[60px] rounded-full" />
  <img
    src={heroStudent}
    alt="Student"
    className="relative w-52 z-30 drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
  />
</div>


                <div className="mt-20 sm:mt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-[2px] w-8 bg-blue-600" />
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
                      Next Milestone
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-[1000] text-slate-900 mb-6 uppercase tracking-tighter italic">
                    Career Pathways
                  </h4>

                  <div className="grid gap-3">
                    <ProgramItem title="Machine Learning" sub="8 Modules · Advanced" bg="bg-yellow-400" />
                    <ProgramItem title="System Thinking" sub="12 Modules · Hybrid" bg="bg-purple-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-200/30 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProgramItemProps {
  title: string;
  sub: string;
  bg: string;
}

function ProgramItem({ title, sub, bg }: ProgramItemProps) {
  return (
    <div className="flex items-center gap-4 p-2 bg-white/50 rounded-[1.5rem] border border-white hover:bg-white transition-all">
      <div className={`h-10 w-10 shrink-0 rounded-2xl ${bg} flex items-center justify-center border-2 border-black`}>
        <span className="text-lg font-black">{title.slice(0, 2)}</span>
      </div>
      <div>
        <p className="text-sm font-black text-slate-900 uppercase">{title}</p>
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{sub}</p>
      </div>
    </div>
  );
}

interface StatProps {
  value: string;
  label: string;
  color: string;
}

function Stat({ value, label, color }: StatProps) {
  return (
    <div className={`${color} p-3 rounded-3xl border-2 border-black/5 text-center`}>
      <p className="text-2xl sm:text-3xl font-black text-black leading-none">{value}</p>
      <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-black/50 mt-2">
        {label}
      </p>
    </div>
  );
}


// import { ArrowRight, GraduationCap } from "lucide-react";
// import { Link } from "react-router-dom";
// import heroStudent from "@/assets/heroAv3.png";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full min-h-screen overflow-hidden flex items-center pt-22 md:pt-6 mt-11">

//       {/* Background Text */}
//       <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none uppercase font-black text-[18vw] sm:text-[15vw] leading-none overflow-hidden">
//         Kattalyx Kattalyx Kattalyx
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-8 z-10 w-full">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

//           {/* LEFT SIDE */}
//           <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">

//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 border-2 border-black rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-widest mb-6 -rotate-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] w-fit">
//               <GraduationCap className="w-4 h-4" />
//               Your Future Starts Here!
//             </div>

//             {/* SEO Primary Keyword Heading */}
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[1000] leading-[1.1] tracking-[-0.04em] uppercase text-slate-900">
//               Real-World <br />
//               Learning & Branding <br />
//               <span className="text-blue-600 relative inline-block mt-1">
//                 Ecosystem for Institutions.
//                 <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none">
//                   <path d="M1 10.5C50 3.5 150 1.5 299 10.5" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
//                 </svg>
//               </span>
//             </h1>

//             {/* Updated H2/Description */}
//             <h2 className="mt-6 max-w-lg text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
//               Kattalyx Labs is a full-stack <span className="text-black font-bold">branding and learning ecosystem</span> for schools and colleges — bringing young founders of India, unified digital infrastructure, and real-world podcasting into one powerful platform.
//             </h2>

//             {/* Fixed CTA Buttons (Removed nested Link) */}
//             <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
//               <Link to="/contact" className="w-full sm:w-auto">
//                 <button className="group w-full flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl text-sm sm:text-base font-bold uppercase tracking-wider hover:bg-black transition-all active:scale-95 shadow-lg">
//                   Partner With Us
//                   <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </Link>

//               <Link to="/events" className="w-full sm:w-auto">
//                 <button className="group w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-2xl text-sm sm:text-base font-bold uppercase tracking-wider hover:border-blue-600 transition-all active:scale-95">
//                   Explore Our Work
//                 </button>
//               </Link>
//             </div>

//             {/* Updated Stats Bar */}
//             <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-md">
//               <Stat value="50+" label="Topics Covered" color="bg-blue-50" />
//               <Stat value="12+" label="Institutions Partnered" color="bg-yellow-50" />
//               <Stat value="16+" label="Events Conducted" color="bg-purple-50" />
//             </div>
//           </div>

//           {/* RIGHT SIDE (Visual Components) */}
//           <div className="relative w-full max-w-[520px] h-[480px] sm:h-[550px] flex items-center justify-center mx-auto mt-14 lg:mt-0">

//             {/* RIGHT BOX (Live Card Style) */}
//             <div className="absolute top-20 right-1/2 translate-x-1/2 sm:right-4 sm:translate-x-0 z-30">
//               <div className="bg-white/95 backdrop-blur-md rounded-[2rem] w-64 sm:w-72 p-6 border border-white shadow-xl">
//                 <div className="flex justify-between items-start mb-6">
//                   <div className="flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded-full">
//                     <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
//                     <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Live Now</span>
//                   </div>
//                 </div>

//                 <h1 className="text-slate-900 text-lg font-[1000] leading-tight mb-2 uppercase tracking-tight">
//                   Connecting Young <br /> Entrepreneurs <br /> With Future Ones
//                 </h1>

//                 <h2 className="text-slate-600 text-[10px] font-bold uppercase mb-4">
//                   We bring India's most driven young founders, CEOs, and industry leaders directly into classrooms.
//                 </h2>

//                 <Link to="/events">
//                   <button className="w-full py-3 rounded-2xl bg-slate-900 text-white text-xs font-black uppercase tracking-[0.15em] hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group">
//                     Explore Work
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </Link>
//               </div>
//             </div>

//             {/* LEFT BOX (Program Card Style) */}
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:-left-4 z-20">
//               <div className="relative bg-white/70 backdrop-blur-xl rounded-[3rem] w-72 sm:w-[340px] py-8 px-6 border border-white/50 shadow-2xl">

//                 {/* Student Image */}
//                 <div className="hidden sm:block absolute -top-60 left-8">
//                   <div className="absolute inset-0 bg-blue-400/20 blur-[60px] rounded-full" />
//                   <img src={heroStudent} alt="Student" className="relative w-52 z-30 drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]" />
//                 </div>

//                 <div className="mt-20 sm:mt-2">
//                   <div className="flex items-center gap-3 mb-2">
//                     <div className="h-[2px] w-8 bg-blue-600" />
//                     <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Ecosystem</span>
//                   </div>
//                   <h4 className="text-lg sm:text-xl font-[1000] text-slate-900 mb-6 uppercase tracking-tighter italic">Institutional Growth</h4>
//                   <div className="grid gap-3">
//                     <ProgramItem title="High Impact" sub="Workshops" bg="bg-yellow-400" />
//                     <ProgramItem title="Branding" sub="Infrastructure" bg="bg-purple-400" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Background Glow */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-200/30 rounded-full blur-[100px] -z-10" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// interface ProgramItemProps {
//   title: string;
//   sub: string;
//   bg: string;
// }

// function ProgramItem({ title, sub, bg }: ProgramItemProps) {
//   return (
//     <div className="flex items-center gap-4 p-2 bg-white/50 rounded-[1.5rem] border border-white hover:bg-white transition-all">
//       <div className={`h-10 w-10 shrink-0 rounded-2xl ${bg} flex items-center justify-center border-2 border-black`}>
//         <span className="text-lg font-black">{title.slice(0, 2)}</span>
//       </div>
//       <div>
//         <p className="text-sm font-black text-slate-900 uppercase">{title}</p>
//         <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{sub}</p>
//       </div>
//     </div>
//   );
// }

// interface StatProps {
//   value: string;
//   label: string;
//   color: string;
// }

// function Stat({ value, label, color }: StatProps) {
//   return (
//     <div className={`${color} p-3 rounded-3xl border-2 border-black/5 text-center`}>
//       <p className="text-2xl sm:text-3xl font-black text-black leading-none">{value}</p>
//       <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-black/50 mt-2">
//         {label}
//       </p>
//     </div>
//   );
// }