import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";


export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (

    < section className = "max-w-[1400px] mx-auto py-16 px-6" >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-4">Common Questions</h2>
          <p className="text-slate-500 font-medium">Everything you need to know about our events</p>
        </div>
        <div className="space-y-4">
          {[
            { q: "How can my school partner with Kattalyx Labs?", a: "Contact us through the Partner With Us button. We'll schedule a call to understand your needs and customize an event plan." },
            { q: "What is the typical event duration?", a: "Most workshops run for 2-3 hours, while conferences can span a full day. We customize based on your schedule." },
            { q: "Are events free for students?", a: "Yes! All events are free for students at our partner schools. Schools cover a nominal partnership fee." },
            { q: "What age groups do you cater to?", a: "We design events for students from Grade 8 to Grade 12, with content tailored to each age group." },
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <h3 className="font-bold text-slate-900 pr-4">{faq.q}</h3>
                {openFaq === i ? (
                  <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section >
  );
}