"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to your backend / email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side — pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 tracking-tight">
              Let&apos;s talk about
              <br />
              your project.
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-8">
              15 minutes. No sales pitch — just honest answers about what it
              would take to build your idea, and whether we&apos;d be a good
              fit.
            </p>

            <div className="space-y-3 text-stone-400 text-sm">
              <p>
                Prefer email?{" "}
                <a
                  href="mailto:hello@tulkarm.ai"
                  className="text-stone-900 underline underline-offset-4"
                >
                  hello@tulkarm.ai
                </a>
              </p>
              <p>Currently booking for Q2 2026 &middot; 2 spots remaining</p>
            </div>
          </motion.div>

          {/* Right side — form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-5 py-4 bg-white border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-5 py-4 bg-white border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition-colors"
            />
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-5 py-4 bg-white border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={submitted}
              className="w-full px-8 py-4 bg-orange-600 hover:bg-orange-500 disabled:bg-orange-400 text-white font-medium rounded-xl transition-colors"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
