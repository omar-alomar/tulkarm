"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-orange-600 font-medium mb-8 tracking-wide text-sm uppercase"
        >
          Software Engineer &amp; Product Builder
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 leading-[1.05] tracking-tight mb-6"
        >
          Most software
          <br />
          projects fail.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-orange-600 leading-[1.1] tracking-tight mb-12"
        >
          Yours won&apos;t.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-xl text-stone-500 max-w-2xl leading-relaxed mb-12"
        >
          I partner with startups and businesses to design, build, and ship
          custom software — on time, on budget, without the usual chaos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-start gap-6"
        >
          <a
            href="#contact"
            className="group px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-medium rounded-xl transition-all duration-300"
          >
            Book a Free Strategy Call
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </a>
          <p className="text-sm text-stone-400 self-center">
            Currently booking for Q2 2026 &middot; 2 spots left
          </p>
        </motion.div>
      </div>
    </section>
  );
}
