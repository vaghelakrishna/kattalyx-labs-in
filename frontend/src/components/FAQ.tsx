import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronDown } from "lucide-react"; // ChevronDown icon add kiya hai
import { useState, useEffect } from "react";

// 1. Saara Data yahan define kar do (Page routes ke hisab se)
const allPageFaqs: Record<string, { q: string, a: string }[]> = {
  "/": [
    {
      q: "What is Kattalyx Labs?",
      a: "Kattalyx Labs is India's real-world learning and branding ecosystem for schools and colleges. We bring young founders and entrepreneurs directly into classrooms through high-impact events, institutional branding, podcasts with industry leaders, and E-Cell establishment. Founded in 2025 by Vansh Jain, we have conducted 20+ events across 15+ institutions Pan India with a 9.6/10 rating. We are the bridge between the classroom and the real world."
    },
    {
      q: "How is Kattalyx Labs different from traditional education programs?",
      a: "Traditional education teaches from textbooks; we bring the real world inside the classroom. We put actual builders and industry leaders in front of students—not motivational speakers or trainers. Our sessions are live, interactive, and entrepreneurship-first. We don't test students; we change how they think. 96% of students say the experience was unlike anything school ever gave them."
    },
    {
      q: "What does 'real-world education' mean at Kattalyx Labs?",
      a: "It means a Class 11 student hearing a 24-year-old founder explain how they built a startup from zero—not from a case study, but from the person who lived it. It means learning to pitch, validate ideas, and handle rejection before graduation. Real-world education isn't just a methodology here; it's the only thing we do, with entrepreneurship always at the center."
    },
    {
      q: "Who can benefit from Kattalyx Labs services?",
      a: "Schools and colleges across India—government or private, across every board and stream (Grade 8 to PG). This includes science, commerce, arts, engineering, and design. Our mission also extends to foster homes, orphanages, and every space where student empowerment matters. We also help founders looking to connect with investors and industry leaders wanting to give back."
    },
    {
      q: "Is Kattalyx Labs aligned with NEP 2020?",
      a: "Completely. NEP 2020 mandates skill-based, experiential, and industry-integrated learning—which is exactly what we do. Our entrepreneurship events fulfill the experiential mandate, our E-Cells handle vocational requirements, and our branding services support digital infrastructure goals. Partnering with us is a direct way for institutions to demonstrate NEP 2020 compliance."
    },
    {
      q: "How many institutions has Kattalyx Labs worked with?",
      a: "As of 2025, we've worked with 15+ institutions Pan India, including Kendriya Vidyalaya, Doon School, Cambridge School, Growell, Saifia, Takshashila, and Godwin School. With 20+ completed events and a 9.6/10 average rating, our network grows every month."
    },
    {
      q: "What is the student satisfaction rate?",
      a: "96% of students rated their experience as satisfactory or above. We collect direct post-event feedback across all sessions to ensure we aren't just measuring attendance, but actual impact. Our average session rating stands at 9.6 out of 10."
    },
    {
      q: "What is the process to collaborate with Kattalyx Labs?",
      a: "Fill our partner form on the website. Our team will reach out within 24 hours to understand your institution's needs. We then build a customized proposal and handle everything end-to-end—from speakers and logistics to execution—usually in under 14 days."
    },
    {
      q: "Are your programs available across India?",
      a: "Yes. We operate Pan India across Tier 1, Tier 2, and Tier 3 cities. We believe real-world learning and entrepreneurship exposure shouldn't be a metro privilege, so we take our offline events everywhere."
    },
    {
      q: "Do you conduct events offline or online?",
      a: "Primarily offline and in-person because the energy of a founder standing in front of students is irreplaceable. However, we do offer online and hybrid formats based on an institution's infrastructure and specific preferences."
    }
  ],
  "/about": [
    {
      q: "What is the story behind Kattalyx Labs?",
      a: "Kattalyx Labs was born from a simple frustration—India's brightest students were graduating unprepared because no one showed them the real world. Vansh Jain founded the labs in 2025 to bring real founders and industry builders directly into institutions. Our goal is to ensure every classroom in India feels as real as the world outside it, one institution at a time."
    },
    {
      q: "Who founded Kattalyx Labs?",
      a: "Kattalyx Labs was founded by Vansh Jain in 2025. Having already conducted 20+ events across 15+ institutions Pan India with a 9.6/10 rating, Vansh built this platform to change how Indian education feels from the inside, moving beyond simple events to create a multi-vertical ecosystem for student growth."
    },
    {
      q: "What is Kattalyx Labs' mission?",
      a: "To bridge the gap between academic education and real-world industry through entrepreneurship-first events, institutional branding, podcasting, investor networking, and E-Cell establishment. We aim to serve every institution in India that believes its students deserve more than what a textbook can offer."
    },
    {
      q: "What is Kattalyx Labs' vision?",
      a: "To make real-world learning the standard—not the exception—in every school and college across India. We envision a future where every student graduates knowing exactly who they are, what they can build, and how the world actually works."
    },
    {
      q: "What are the core values of Kattalyx Labs?",
      a: "Everything we build is based on four values: Real over theoretical (lived experience), Entrepreneurship first (as a mindset, not just a subject), Access for all (removing the 'elite' barrier), and Impact over optics (measuring success by how students think, not just how events look)."
    },
    {
      q: "Where is Kattalyx Labs based and where does it operate?",
      a: "We are registered in India and operate Pan India—across Tier 1, Tier 2, and Tier 3 cities. We serve institutions regardless of their city, board, or budget because real-world learning has no geography."
    },
    {
      q: "What makes Kattalyx Labs the right partner for an institution?",
      a: "We offer a unified ecosystem that combines events, branding, podcasting, and networking with a 9.6/10 student rating. Entrepreneurship isn't just a topic for us; it’s a philosophy. We don't ask for trust on a promise—we show the proof through our 20+ completed events."
    },
    {
      q: "Is Kattalyx Labs only for private institutions?",
      a: "No. We work with every type of institution—government, private, CBSE, ICSE, state board, and regional language mediums. Every institution that wants to provide real-world exposure and entrepreneurship culture deserves access to our ecosystem."
    },
    {
      q: "How has Kattalyx Labs grown since its founding?",
      a: "Since 2025, we have rapidly scaled to 20+ events and 15+ institutional partners with a 96% student satisfaction rate. With a Pan India presence already established, we are obsessed with making every classroom feel more real than it did yesterday."
    },
    {
      q: "How long are your events?",
      a: "Standard event duration is 2 to 3 hours. This can be adjusted based on your institution's schedule and specific requirements. We fit into your calendar—not the other way around."
    },
    {
      q: "Which age groups do you work with?",
      a: "For schools, we work with Grade 8 to Grade 12. For colleges, we engage with students across all years and all courses—including Science, Commerce, Arts, B.Tech, BBA, and Design."
    }
  ],
  "/events": [
    {
      q: "What kind of events does Kattalyx Labs conduct in schools and colleges?",
      a: "We host high-impact, live, entrepreneurship-first events where real founders and industry builders talk to students like equals. While entrepreneurship is our core energy, we cover over 50 topics including AI, tech, financial literacy, career development, leadership, and mental wellness."
    },
    {
      q: "How do your entrepreneurship events help students in real life?",
      a: "Students stop waiting for instructions and start thinking about what they can build. By hearing from founders who started at their age, entrepreneurship feels possible rather than distant. They learn to pitch, handle rejection, and solve real-world problems—life skills that no exam can take away."
    },
    {
      q: "What topics are covered in your student workshops?",
      a: "Our primary domain includes startup building, branding, and Shark Tank-style pitching. We also offer modules on AI/ML basics, stock markets, cybersecurity, LinkedIn branding, and IKIGAI. Every session is taught by someone who has actually done the work, not just studied it."
    },
    {
      q: "Are your events practical or theory-based?",
      a: "100% practical. Our speakers don't read from slides; they share real stories, including their failures. Students brainstorm, debate, and pitch throughout the session. If it could have been a YouTube video, we wouldn't conduct it—we believe in real people asking real questions in a real room."
    },
    {
      q: "How long are the events and workshops?",
      a: "Standard duration is 2 to 3 hours—deep enough for interaction but short enough to fit your schedule. We work around your institution's timetable and student count to ensure the format is effective."
    },
    {
      q: "Do you offer one-day workshops or long-term programs?",
      a: "Both. We provide single high-power sessions, multi-session semester programs for structured curriculum building, and full annual partnerships that cover events, E-Cell support, and podcast collaborations throughout the academic year."
    },
    {
      q: "Can schools customize the event topics?",
      a: "Completely. You can choose from our library of 50+ topics or request a custom combination. We match the right speaker to your specific audience and goals. Customization isn't an 'extra' service—it's how we always operate."
    },
    {
      q: "What age groups are eligible for these events?",
      a: "For schools, we engage Grade 8 to Grade 12 with content calibrated for each level. For colleges, we are open to all years and streams—from B.Tech and MBA to Arts and Design. There is no 'wrong' stream for entrepreneurship."
    },
    {
      q: "How do institutions book an event with Kattalyx Labs?",
      a: "Fill out our partner form at kattalyxlabs.com. We’ll call within 24 hours to match a speaker and send a proposal. Once confirmed, we handle everything—logistics, content, and execution—getting your first event live in under 14 days."
    },
    {
      q: "What is the cost of organizing a Kattalyx Labs event?",
      a: "Pricing is institution-specific based on event type, location, and student count. We offer flexible, transparent pricing so institutions of all sizes can access our programs without hidden charges or surprises."
    },
    {
      q: "What is an E-Cell in schools and colleges?",
      a: "An E-Cell (Entrepreneurship Cell) is a permanent ecosystem within an institution that fosters innovation and startup culture. It features student leadership, faculty advisors, and a mentor network, serving as the launchpad where India’s next founders get their start."
    },
    {
      q: "How can Kattalyx Labs help set up an Entrepreneurship Cell?",
      a: "We provide end-to-end support: designing the organizational structure, building the annual activity calendar, providing access to our mentor network, and training the founding student council. We don't just hand you a manual; we build it with you."
    },
    {
      q: "What activities are conducted under an E-Cell?",
      a: "Activities include monthly founder sessions, 'Shark Tank 2.0' competitions, hackathons, startup validation workshops, and an annual E-Cell Summit. It’s a weekly community where students build and iterate on their ideas together."
    },
    {
      q: "What are the benefits of having an E-Cell?",
      a: "Students gain direct access to investors, portfolio-building experience, and a community of ambitious peers. For the institution, it provides clear differentiation, improved admissions appeal, and the prestige of producing successful alumni founders."
    },
    {
      q: "How does an E-Cell help students become future entrepreneurs?",
      a: "It provides three things the standard classroom doesn't: Access to mentors, a Community of builders, and Practice. By repeatedly pitching and failing in a safe environment, students gain the mental toughness required for the real world."
    }
  ],

  "/collaborations": [
    {
      q: "What are investor-founder networking events?",
      a: "These are curated, high-quality environments where startup founders and investors meet for structured conversations rather than casual networking. We select founders based on the quality of their ideas and stage, inviting angels, VCs, and family offices who are actively deploying capital to ensure genuine connections and potential deals."
    },
    {
      q: "How does Kattalyx Labs connect startups with investors?",
      a: "We use pre-matched introductions, structured pitch sessions, and follow-up facilitation. We prepare founders beforehand and brief investors on what to expect, ensuring every connection is intentional and aligned with the investor’s thesis and the startup's stage. It’s about being intentional, not accidental."
    },
    {
      q: "Who can attend these networking events?",
      a: "Early-stage founders (ideation to seed), angel investors, venture capitalists, and family offices. We also invite select students from our E-Cell network who are building their first ventures. Attendance is strictly curated by application to maintain the quality of the room."
    },
    {
      q: "Do startups get funding opportunities through these events?",
      a: "Yes. While we can't guarantee an investment outcome, we create the environment where those conversations happen. Many connections made at our events have progressed to active investor discussions. We provide the room and the introductions; the founders provide the pitch."
    },
    {
      q: "How can founders register for these networking events?",
      a: "Fill out the partner form on kattalyxlabs.com and select 'Investor-Founder Networking'. Our team will reach out within 24 hours to understand your stage and goals. Accepted founders receive preparation guidance and pre-event introductions to relevant investors."
    },
    {
      q: "Who are the experts or speakers in your sessions?",
      a: "We feature young Indian founders who have built companies from scratch, alongside domain experts in AI, finance, and leadership. Every speaker—from CAs to tech founders—is verified for credibility and briefed specifically for a student audience. We prioritize the right person for the right students over just 'famous' names."
    },
    {
      q: "Do you provide testimonials or case studies?",
      a: "Yes. We document outcomes from our E-Cell setups, events, and branding projects. We have testimonials from school principals, college administrators, and students. For detailed case studies regarding specific institutional partnerships, you can contact our team directly."
    },
    {
      q: "How do we partner with Kattalyx Labs?",
      a: "Fill out our contact form below. Our team will reach out within 24 hours to understand your institution's specific needs and provide a detailed collaboration proposal. The first conversation is always free."
    }
  ],
  "/branding": [
    {
      q: "What branding services does Kattalyx Labs provide to institutions?",
      a: "We provide website and mobile app development, digital marketing, social media management, ERP-CRM development, and complete brand identity creation. We build everything a school or college needs to be modern and credible—from logos and brand guidelines to Google rankings—ensuring your institution is the first choice for parents and students."
    },
    {
      q: "How can Kattalyx Labs improve our institution's digital presence?",
      a: "We perform a full audit of your current assets and build what's missing: a fast, mobile-optimized website, a parent-facing app, active social channels, and a Google-visible content strategy. In today’s world, your digital presence is how parents decide where to send their children."
    },
    {
      q: "Do Kattalyx Labs build websites and mobile apps for institutions?",
      a: "Yes. Our websites are custom-built for speed and SEO. Our mobile apps connect parents, students, and administration with features like attendance tracking, fee management, announcements, and direct communication—all designed specifically for the daily needs of an educational environment."
    },
    {
      q: "What makes Kattalyx Labs branding different from regular agencies?",
      a: "We aren't a general agency; we only work with education. We understand how principals think and what parents look for. Because we also conduct on-ground events and E-Cell programs, we understand institutional culture from the inside, allowing us to build an identity that reflects your specific history and vision."
    },
    {
      q: "Does Kattalyx Labs build ERP systems for educational institutions?",
      a: "Yes. We build complete ERP systems that replace manual registers and spreadsheets. Our platform covers student management, attendance, fee collection, timetables, and staff workflows, allowing your entire institution to run digitally in one unified system."
    },
    {
      q: "What is an institution ERP and why does your institution need one?",
      a: "An ERP (Enterprise Resource Planning) is the digital backbone of a modern school. It connects administration, academics, and finance into one platform. It saves time, prevents data loss, and gives leadership real-time visibility while letting faculty spend less time on paperwork."
    },
    {
      q: "Does Kattalyx Labs build CRM systems for educational institutions?",
      a: "Yes. Our CRM systems help you manage admission pipelines, prospective student inquiries, and alumni networks. Every inquiry is tracked and every follow-up is scheduled, ensuring no lead falls through the gaps for institutions serious about growing their admissions."
    },
    {
      q: "What is the difference between an institution ERP and a CRM?",
      a: "An ERP manages internal operations like fees and exams, while a CRM manages external relationships like admission inquiries and parent follow-ups. Kattalyx Labs builds integrated systems where both work together seamlessly so data flows from an inquiry straight into your operations."
    },
    {
      q: "Can Kattalyx Labs integrate the ERP with our existing app or website?",
      a: "Yes. Every system we build is designed to sync with your website and communication channels. Parents access info through the app, admissions teams track leads on the CRM, and admins manage the ERP—all connected in one real-time ecosystem."
    },
    {
      q: "Do you offer digital marketing for schools and colleges?",
      a: "Yes. We manage Instagram, Facebook, Google Ads, and LinkedIn with a focus on visible returns. We handle the content strategy and ad campaigns to ensure your marketing budget actually converts into student enrollment."
    },
    {
      q: "Can you redesign our existing website?",
      a: "Absolutely. We audit your current site and redesign it using modern design principles, SEO optimization, and mobile responsiveness to ensure it converts visitors into inquiries effectively."
    }
  ],
  "/podcasting": [
    {
      q: "What is the Kattalyx Labs podcast initiative?",
      a: "It is our media arm for real-world education. We bring India's young entrepreneurs onto our podcast to share unfiltered knowledge with students—stories of how they started, their failures, and their fundraising journeys. With no scripts or PR polish, these are real conversations that provide the industry perspective no classroom ever will."
    },
    {
      q: "Who are the speakers featured in your podcasts?",
      a: "We feature CEOs, CFOs, CMOs, investors, and domain experts. We prioritize young founders—those who started building in their 20s—because their stories are relatable for students. Every speaker is a verified expert briefed to speak directly to a student audience rather than self-promote."
    },
    {
      q: "How do podcasts help students learn real-world skills?",
      a: "Our podcast fills the gap left by traditional curricula by showing students how business decisions are actually made and how industries really work. Students learn about pivoting businesses, handling financial hurdles, and the reality of building from scratch. It’s the most accessible form of real-world education, available anytime on a phone."
    },
    {
      q: "Can institutions collaborate for podcast sessions?",
      a: "Yes. Schools and colleges can host on-campus recording sessions where a guest records an episode in front of a live student audience. This combines the depth of a podcast with the energy of a live event, giving students the chance to ask questions while the institution gets featured in our wider distribution network."
    },
    {
      q: "Are the podcasts live or recorded?",
      a: "Both. Standard episodes are recorded and edited for major platforms, while campus collaboration sessions can be recorded in front of a live audience. All episodes are available on-demand after release, allowing students and institutions to revisit any conversation at any time."
    }
  ],

};
export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentFaqs, setCurrentFaqs] = useState<{ q: string, a: string }[]>([]);

  // 1. Pagination State: Shuru mein sirf 5 FAQs dikhane ke liye
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const path = window.location.pathname;
    const data = allPageFaqs[path] || allPageFaqs["/"];
    setCurrentFaqs(data);
    // Jab page change ho toh wapas count 5 kar dena chahiye
    setVisibleCount(5);
  }, []);

  // 2. Load More Handler
  const handleLoadMore = () => {
    setVisibleCount(currentFaqs.length); // Saare FAQs dikha dega
  };

  return (
    <section className="max-w-[1400px] mx-auto py-16 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-4">
          Common Questions
        </h2>
        <p className="text-slate-500 font-medium">Everything you need to know.</p>
      </div>

      <div className="space-y-4 max-w-6xl mx-auto">
        {/* 3. Slice lagaya hai taaki sirf visibleCount tak data dikhe */}
        {currentFaqs.slice(0, visibleCount).map((faq, i) => (
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

      {/* 4. Load More Button - Sirf tab dikhega jab aur content baaki ho */}
      {visibleCount < currentFaqs.length && (
        <div className="mt-12 text-center">
          <button
            onClick={handleLoadMore}
            className="group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-200"
          >
            Load More Questions
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}
    </section>
  );
}


