"use client";

import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="py-32 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-800 leading-snug tracking-tight mb-10"
        >
          &ldquo;Omar is the rare developer who thinks like a founder. He
          didn&apos;t just build what we asked — he challenged our assumptions
          and delivered something better than we imagined.&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="font-semibold text-stone-900">Sarah Chen</div>
          <div className="text-stone-400 text-sm">CEO at MedFlow</div>
        </motion.div>
      </div>
    </section>
  );
}
