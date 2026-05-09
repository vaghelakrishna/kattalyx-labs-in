import React, { useState, useRef, type ChangeEvent, type FormEvent } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  purpose: string;
  description: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    email: '', name: '', phone: '', purpose: 'General', description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background Text Parallax Effect
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyO65tPSTD4XrdOktL4HLX-bqkn1vpaOBgU2lMCOd8w2T8GTfL7sxBXHB8NghXjjeXS-A/exec";

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email.includes('@')) return alert("Invalid email.");
    
    setIsSubmitting(true);
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
      });
      setIsSuccess(true);
    } catch (error) {
      alert("Submission failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white selection:bg-red-500 selection:text-white overflow-hidden">
      <Navbar />
      
      {/* BACKGROUND "GHOST" TEXT */}
      <motion.div 
        style={{ y: bgY, opacity: bgOpacity }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <h2 className="text-[15vw] font-black text-zinc-100 leading-none tracking-tighter uppercase text-center">
          Kattalyx <br /> Labs
        </h2>
      </motion.div>

      <section className="relative min-h-screen pt-40 pb-20 px-6 md:px-20 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* LEFT: EDITORIAL CONTENT */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-red-500 font-mono text-[10px] uppercase tracking-[0.6em] font-bold block">
                Transmission Office
              </span>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-7xl md:text-8xl italic text-black leading-none">
                Let's Build <br /> 
                <span className="not-italic text-zinc-400">Something Real.</span>
              </h1>
            </div>

            <div className="space-y-6 max-w-sm">
              <p className="text-zinc-500 text-lg leading-relaxed font-light">
                Whether it's a DU seminar, a podcasting marathon, or a full-scale brand overhaul—the execution starts here.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center group cursor-pointer hover:bg-red-600 transition-colors">
                  <div className="w-2.5 h-2.5 bg-white rounded-full group-hover:scale-150 transition-transform" />
                </div>
                <p className="text-xs uppercase tracking-widest font-bold self-center">Based in Delhi, India</p>
              </div>
            </div>
          </div>

          {/* RIGHT: THE "SCRAPBOOK" FORM */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, x: 50, rotate: 2 }}
                  animate={{ opacity: 1, x: 0, rotate: -1 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: -10 }}
                  onSubmit={handleSubmit}
                  className="bg-[#f9f9f9] border border-black/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative z-10"
                >
                  {/* Decorative "Pin" */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg" />

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <InputField label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="Vansh Jain" />
                      <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="vansh@labs.com" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <InputField label="Phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="98765 43210" />
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">I'm interested in</label>
                        <select 
                          name="purpose" 
                          value={formData.purpose} 
                          onChange={handleChange}
                          className="bg-transparent border-b-2 border-zinc-200 py-2 outline-none focus:border-red-500 transition-all font-medium italic"
                        >
                          {["General", "Events", "Collaboration", "Podcasting", "Branding"].map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Tell us about the project</label>
                      <textarea 
                        name="description" 
                        rows={3} 
                        value={formData.description} 
                        onChange={handleChange}
                        className="bg-transparent border-b-2 border-zinc-200 py-2 outline-none focus:border-red-500 transition-all resize-none italic"
                        placeholder="What's the vision?"
                      />
                    </div>

                    <motion.button
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-black text-white py-6 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-red-600 transition-colors shadow-xl"
                    >
                      {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <SuccessMessage onReset={() => setIsSuccess(false)} />
              )}
            </AnimatePresence>

            {/* Decorative Card Peeking Out */}
            <div className="absolute top-10 -right-4 w-full h-full bg-blue-100 rounded-[2.5rem] -z-10 rotate-3 border border-black/5" />
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
};

const InputField = ({ label, ...props }: any) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">{label}</label>
    <input 
      {...props}
      required
      className="bg-transparent border-b-2 border-zinc-200 py-2 outline-none focus:border-red-500 transition-all font-medium"
    />
  </div>
);

const SuccessMessage = ({ onReset }: { onReset: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-black text-white p-16 rounded-[2.5rem] text-center space-y-8 shadow-2xl"
  >
    <div className="w-20 h-20 bg-red-500 rounded-full mx-auto flex items-center justify-center">
      <div className="w-4 h-4 bg-white rounded-full animate-ping" />
    </div>
    <h2 className="text-5xl font-serif italic">Received.</h2>
    <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto">
      Your inquiry has been logged into Kattalyx Labs core. Expect a transmission back shortly.
    </p>
    <button onClick={onReset} className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-red-500 pb-2 text-red-500 hover:text-white hover:border-white transition-all">
      Write another
    </button>
  </motion.div>
);

export default ContactPage;