import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";

// 1. Saara Data yahan define kar do (Page routes ke hisab se)
const allPageFaqs: Record<string, { q: string, a: string }[]> = {
  "/": [
    {
      q: "Who is the primary target of Kattalyx Labs?",
      a: "Our primary audience is schools and colleges across India — government and private, every board, every language medium. Our secondary mission extends to foster homes, orphanages, and every space where student empowerment can make an impact."
    },
    {
      q: "Do you work with government or private schools?",
      a: "Both. We work with all types of institutions — from elite private CBSE and ICSE schools to government schools and regional language medium institutions. Every standard, every language, every type of school is welcome."
    },
    {
      q: "How long are your events?",
      a: "Standard event duration is 2 to 3 hours. This can be adjusted based on your institution's schedule and specific requirements. We fit into your calendar — not the other way around."
    },
    {
      q: "Which age groups do you work with?",
      a: "For schools — Grade 8 to Grade 12. For colleges — all years, all courses. Science, Commerce, Arts, B.Tech, BBA, Design, or any other stream. Every student is welcome."
    },
    {
      q: "Which streams and courses are eligible?",
      a: "All of them. Science, Commerce, Arts, Humanities, B.Tech, BBA, BCA, B.Design, B.Com, BA — if a student is curious, they belong in our sessions. There is no wrong course for real-world learning."
    },
    {
      q: "How do we partner with Kattalyx Labs?",
      a: "Fill our contact form below. Our team will reach out within 24 hours, understand your institution's needs, and give you a detailed collaboration proposal. First conversation is always free."
    }
  ],
  "/about": [ // Events Page
    { q: "How long are your events?", a: "Standard duration is 2-3 hours." },
    { q: "Which age groups?", a: "Grade 8 to Grade 12 and all college years." }
  ],
  "/events": [ // Events Page
    { q: "How long are your events?", a: "Standard duration is 2-3 hours." },
    { q: "Which age groups?", a: "Grade 8 to Grade 12 and all college years." }
  ],
  "/event-portfolio": [
    { q: "How long are your events?", a: "Standard duration is 2-3 hours." },
    { q: "Which age groups?", a: "Grade 8 to Grade 12 and all college years." }

  ],

  "/collaborations": [ // Collaborations Page
    { q: "How do we partner with Kattalyx Labs?", a: "Fill our contact form. We will reach out within 24 hours." },
    { q: "Is there a cost to partner?", a: "First conversation is always free. We will provide a custom proposal based on your needs." }
  ],
  "/branding": [ // Branding Page
    { q: "How do we start institution branding?", a: "Contact us for a custom proposal." },
    { q: "Is it for schools only?", a: "No, colleges and universities too." }
  ],
    "/podcasting": [ // Branding Page
    { q: "How do we start institution branding?", a: "Contact us for a custom proposal." },
    { q: "Is it for schools only?", a: "No, colleges and universities too." }
  ],
    "/blog": [ // Branding Page
    { q: "How do we start institution branding?", a: "Contact us for a custom proposal." },
    { q: "Is it for schools only?", a: "No, colleges and universities too." }
  ],
};

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentFaqs, setCurrentFaqs] = useState<{ q: string, a: string }[]>([]);

  useEffect(() => {
    // Ye line check karegi ki user abhi kaunse page par hai
    const path = window.location.pathname;
    // Agar path match nahi hota toh default "/" (home) ka data dikhayega
    setCurrentFaqs(allPageFaqs[path] || allPageFaqs["/"]);
  }, []);

  return (
    <section className="max-w-[1400px] mx-auto py-16 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-4">
          Common Questions
        </h2>
        <p className="text-slate-500 font-medium">Everything you need to know.</p>
      </div>

      <div className="space-y-4 max-w-6xl mx-auto">
        {currentFaqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
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
            <AnimatePresence>
              {openFaq === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 overflow-hidden"
                >
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}