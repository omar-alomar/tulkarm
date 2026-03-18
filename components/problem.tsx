"use client";

import { motion } from "framer-motion";

const painPoints = [
  "You've been quoted six figures for a basic MVP",
  "Your last developer ghosted mid-project",
  "Your launch is months behind schedule",
  "The code you received is unmaintainable",
];

export default function Problem() {
  return (
    <section className="py-32 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-stone-400 text-lg mb-16"
        >
          Sound familiar?
        </motion.p>

        <div className="space-y-8">
          {painPoints.map((point, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-800 leading-tight"
            >
              {point}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-orange-600 text-xl font-medium"
        >
          There&apos;s a better way.
        </motion.p>
      </div>
    </section>
  );
}
