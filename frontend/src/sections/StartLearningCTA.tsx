import { motion } from "framer-motion";

function StartLearningCTA() {
  return (
    <section className="px-6 py-24 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          max-w-7xl mx-auto
          rounded-3xl overflow-hidden
          bg-black text-white
        "
      >
        <div className="grid md:grid-cols-2 items-center">
          {/* LEFT CONTENT */}
          <div className="p-8 md:p-14">
            {/* CTA badge */}
            <span className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/10 px-4 py-1 text-xs font-medium text-white">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              CTA
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-semibold leading-tight"
            >
              Ready to Transform <br />
              Your School?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-4 text-sm md:text-base text-white/70 max-w-md"
            >
              Join 9+ schools already transforming their students' learning experience with real-world industry connections and digital infrastructure.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                mt-8 inline-flex items-center justify-center
                rounded-full bg-white px-7 py-3
                text-sm font-medium text-black
                transition hover:bg-white/90
              "
            >
              Start Exploring
            </motion.button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-full w-full p-4 md:p-6">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Learning journey"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default StartLearningCTA;
