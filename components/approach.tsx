"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "I own the outcome",
    description:
      "Most developers build what you ask for. I build what you need. I challenge assumptions, validate ideas, and make sure every line of code serves your business goals.",
  },
  {
    title: "Speed without shortcuts",
    description:
      "I ship MVPs in weeks, not months. But fast doesn't mean sloppy — it means focused. Clean architecture, tested code, no technical debt you'll regret.",
  },
  {
    title: "Total transparency",
    description:
      "No disappearing acts. Weekly demos, async updates, and direct access to me. You'll never wonder what's happening with your project.",
  },
];

export default function Approach() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-stone-900 mb-16 tracking-tight"
        >
          How I&apos;m different
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-stone-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-stone-500 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
