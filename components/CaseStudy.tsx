"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Users } from "lucide-react";
import { caseStudy } from "@/lib/content";
import MediaGallery from "./MediaGallery";
import Lightbox, { type LightboxContent } from "./Lightbox";

const tabs = ["Problem", "Approach", "Architecture", "Skills demonstrated"] as const;
type Tab = (typeof tabs)[number];

export default function CaseStudy() {
  const [tab, setTab] = useState<Tab>("Problem");
  const [lightbox, setLightbox] = useState<LightboxContent | null>(null);

  return (
    <section className="section-underline-none mx-auto max-w-6xl px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="eyebrow">Featured — Graduation Project</p>
        <span className="section-underline" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 overflow-hidden rounded-2xl border border-accent/25 bg-bg-elevated shadow-card"
      >
        <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
          <div className="p-8 md:p-10">
            <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">{caseStudy.title}</h3>
            <p className="mt-1 text-sm text-accent-bright">{caseStudy.subtitle}</p>
            <p className="mt-1 font-mono text-xs text-muted">{caseStudy.meta}</p>

            <div className="mt-6 flex flex-wrap gap-2 border-b border-line pb-5">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    tab === t
                      ? "bg-accent text-on-accent"
                      : "bg-bg-elevated-2 text-muted hover:text-ink"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-5 min-h-[220px]">
              {tab === "Problem" && (
                <p className="text-sm leading-relaxed text-muted">{caseStudy.problem}</p>
              )}
              {tab === "Approach" && (
                <p className="text-sm leading-relaxed text-muted">{caseStudy.approach}</p>
              )}
              {tab === "Architecture" && (
                <ol className="space-y-4">
                  {caseStudy.architecture.map((step) => (
                    <li key={step.step} className="flex gap-4">
                      <span className="font-mono text-sm font-semibold text-accent-bright">{step.step}</span>
                      <div>
                        <p className="text-sm font-medium text-ink">{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
              {tab === "Skills demonstrated" && (
                <div className="flex flex-wrap gap-2">
                  {caseStudy.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-accent/25 bg-accent-soft px-3 py-1.5 text-xs text-accent-bright"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-5">
              <div className="flex flex-wrap gap-1.5">
                {caseStudy.stack.map((t) => (
                  <span key={t} className="rounded-md bg-bg-elevated-2 px-2.5 py-1 font-mono text-[0.65rem] text-ink">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-5 text-xs">
              <span className="flex items-center gap-1.5 text-muted">
                <Users className="h-3.5 w-3.5" /> {caseStudy.role}
              </span>
            </div>

            <a
              href={caseStudy.doc}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold text-on-accent transition-transform hover:-translate-y-0.5"
            >
              <FileText className="h-3.5 w-3.5" /> Read the full PFE presentation PDF
            </a>
          </div>

          <div className="min-h-[280px] lg:min-h-full">
            <MediaGallery
              gallery={caseStudy.gallery}
              title={caseStudy.title}
              aspect="h-full aspect-auto"
              onOpen={setLightbox}
            />
          </div>
        </div>
      </motion.div>

      <Lightbox content={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}
