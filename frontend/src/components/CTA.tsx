import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/85" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4">
            Get Started Today
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Ready to bring industry experts
            <br />
            <span className="text-slate-400">to your classroom?</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
            Join 60+ schools already transforming their students' learning experience with real-world industry connections.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/collaborations">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 h-12 px-6">
                Partner with us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="ghost" size="lg" className="text-slate-300 hover:text-white h-12 px-6">
                Explore programs
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
