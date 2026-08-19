"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="eyebrow">Experience</p>
        <span className="section-underline" />
      </motion.div>

      <div className="relative mt-10 pl-8">
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-line" />
        {experiences.map((item, index) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative pb-10 last:pb-0"
          >
            <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>

            <div className="flex flex-col gap-1 rounded-2xl border border-line bg-bg-elevated p-6 shadow-card transition-colors hover:border-accent/40 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div>
                <p className="font-mono text-xs text-accent-bright">{item.period}</p>
                <h3 className="mt-1 font-display text-lg font-medium text-ink">{item.role}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{item.details}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
