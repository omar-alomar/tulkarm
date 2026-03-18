"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    metric: "8 weeks",
    label: "to working product",
    story:
      "A fintech startup came to me after burning through $150k with an agency that delivered a buggy, half-finished product. I rebuilt their core platform in 8 weeks. They closed their seed round 3 months later.",
  },
  {
    metric: "+40%",
    label: "conversion rate",
    story:
      "An e-commerce brand was losing $30k/month to cart abandonment. I redesigned their checkout flow and rebuilt it from scratch. Conversion rate jumped 40% in the first month.",
  },
  {
    metric: "50K+",
    label: "patients served",
    story:
      "A healthcare company needed HIPAA-compliant scheduling their existing system couldn't handle. I delivered a complete platform in 12 weeks that now serves over 50,000 patients.",
  },
];

export default function Results() {
  return (
    <section className="py-32 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl mb-20 tracking-tight"
        >
          Results, not promises
        </motion.h2>

        <div className="space-y-20">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-16 items-start"
            >
              <div>
                <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-1">
                  {study.metric}
                </div>
                <div className="text-stone-400 text-sm uppercase tracking-wider">
                  {study.label}
                </div>
              </div>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl">
                {study.story}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
