import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ContactFormData {
  email: string;
  phone: string;
  purpose: string;
  description: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    email: '',
    phone: '',
    purpose: 'scaling',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxZo1F_jEya1LGwWJrKeippSzIfU9eVUHuUiMRXO3RAAphdztdPJO2GxvQS6TLU1Ifj/exec";

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation before the network call
    if (!formData.email.includes('@')) {
      alert("Please enter a valid business email.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (!GOOGLE_SHEET_URL) {
        throw new Error('Contact endpoint is not configured.');
      }

      // Calling the hidden URL from your .env
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
      });

      setIsSuccess(true);
    } catch (error) {
      console.error("Submission failed", error);
      alert("Unable to submit the form right now. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#fcfcfc] text-slate-900 px-6 pt-40 pb-20 lg:px-20 font-sans">
        <header className="max-w-7xl mx-auto mb-20 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-6xl font-black tracking-tighter uppercase"
          >
            Kattalyx <span className="text-blue-700">Labs</span>
          </motion.h1>
        </header>

        <main className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="space-y-10 bg-white p-8 md:p-12 shadow-2xl shadow-blue-900/5 rounded-sm border-t-4 border-blue-700"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Email */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                    <input required name="email" type="email" value={formData.email} onChange={handleChange} className="border-b-2 border-slate-100 py-2 outline-none focus:border-blue-700 transition-all text-lg" />
                  </div>
                  {/* Phone */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Phone Number</label>
                    <input required name="phone" type="tel" value={formData.phone} onChange={handleChange} className="border-b-2 border-slate-100 py-2 outline-none focus:border-blue-700 transition-all text-lg" maxLength={10} />
                  </div>
                </div>

                {/* Purpose */}
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Inquiry Purpose</label>
                  <select name="purpose" value={formData.purpose} onChange={handleChange} className="border-b-2 border-slate-100 py-2 outline-none focus:border-blue-700 transition-all text-lg bg-transparent">
                    <option value="Event">Event</option>
                    <option value="Classes">Classes</option>
                    <option value="Podcast">Podcast</option>
                    <option value="Infrastructure">Infrastructure</option>
                  </select>
                </div>

                {/* Description */}
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Description</label>
                  <textarea required name="description" rows={3} value={formData.description} onChange={handleChange} className="border-b-2 border-slate-100 py-2 outline-none focus:border-blue-700 transition-all text-lg resize-none" />
                </div>

                <motion.button
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-blue-700 text-white py-5 font-bold uppercase tracking-widest text-xs shadow-lg shadow-blue-700/30 disabled:bg-slate-400 transition-colors"
                >
                  {isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20 space-y-6"
              >
                <div className="text-6xl text-blue-700 font-bold tracking-tighter">Done.</div>
                <p className="text-xl text-slate-500 max-w-md mx-auto">
                  Your data has been logged into the Kattalyx core. Our team will reach out shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-blue-700 font-bold uppercase tracking-widest text-xs border-b border-blue-700 pb-1"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
