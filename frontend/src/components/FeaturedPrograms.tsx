// import { motion } from "framer-motion";
// import { ArrowRight, Clock, Users } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// const programs = [
//   {
//     title: "AI & Machine Learning",
//     sessions: "8 Sessions",
//     students: "2,500+",
//     tag: "Popular",
//     description: "From fundamentals to real-world applications with industry practitioners.",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Entrepreneurship",
//     sessions: "6 Sessions",
//     students: "1,800+",
//     tag: "New",
//     description: "Learn from founders who've built successful companies from scratch.",
//     image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Cybersecurity",
//     sessions: "5 Sessions", 
//     students: "1,200+",
//     tag: null,
//     description: "Practical security skills taught by industry security experts.",
//     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//   },
// ];

// export default function FeaturedProgramsSection() {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
//           <div>
//             <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-3">
//               Featured Programs
//             </p>
//             <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
//               Popular learning tracks
//             </h2>
//           </div>
//           <Link to="/programs">
//             <Button variant="ghost" className="text-slate-600 hover:text-slate-900 group p-0 h-auto">
//               View all programs
//               <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>
//         </div>

//         {/* Programs Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {programs.map((program, i) => (
//             <motion.div
//               key={program.title}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               viewport={{ once: true }}
//               className="group rounded-xl border border-slate-100 hover:border-slate-200 bg-white overflow-hidden transition-all cursor-pointer hover:shadow-lg"
//             >
//               {/* Image */}
//               <div className="aspect-video overflow-hidden bg-slate-100">
//                 <img
//                   src={program.image}
//                   alt={program.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
              
//               {/* Content */}
//               <div className="p-5">
//                 {/* Tag */}
//                 {program.tag && (
//                   <span className={`inline-block text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded-full mb-3 ${
//                     program.tag === "Popular" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"
//                   }`}>
//                     {program.tag}
//                   </span>
//                 )}
                
//                 <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
//                   {program.title}
//                 </h3>
//                 <p className="text-sm text-slate-500 mb-4 leading-relaxed">
//                   {program.description}
//                 </p>
                
//                 <div className="flex items-center gap-4 text-xs text-slate-400">
//                   <span className="flex items-center gap-1">
//                     <Clock className="w-3 h-3" />
//                     {program.sessions}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Users className="w-3 h-3" />
//                     {program.students}
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useModules } from "@/hooks/useModules";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&fit=crop";

export default function FeaturedProgramsSection() {
  const { modules, loading } = useModules(3); // 👈 fetch only 3 modules

  if (loading) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-3">
              Featured Programs
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
              Popular learning tracks
            </h2>
          </div>

          <Link to="/programs">
            <Button variant="ghost" className="group p-0 h-auto">
              View all programs
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((module, i) => (
            <motion.div
              key={module._id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-slate-100 hover:border-slate-200 bg-white overflow-hidden transition-all cursor-pointer hover:shadow-lg"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img
                  src={module.image || DEFAULT_IMAGE}
                  alt={module.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {module.title}
                </h3>

                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  {module.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {(module.duration || module.durationMinutes || 60)} min
                  </span>

                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    Students
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
