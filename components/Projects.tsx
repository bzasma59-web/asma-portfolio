"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink,FileText } from "lucide-react";
import { projectsByYear, categories, type YearProject, type Category } from "@/lib/content";
import MediaGallery from "./MediaGallery";
import Lightbox, { type LightboxContent } from "./Lightbox";

const allProjects: YearProject[] = [...projectsByYear].reverse().flatMap((y) => y.projects);

export default function Projects() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [lightbox, setLightbox] = useState<LightboxContent | null>(null);

  const visible = filter === "All" ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="eyebrow">Projects</p>
          <span className="section-underline" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-6 flex flex-wrap gap-2"
      >
        {(["All", ...categories] as const).map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
              filter === c ? "bg-accent text-on-accent" : "bg-bg-elevated-2 text-muted hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </motion.div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            className="card-lift flex flex-col overflow-hidden rounded-2xl border border-line bg-bg-elevated shadow-card hover:border-accent/40 hover:shadow-card-hover"
          >
            <MediaGallery
              gallery={project.media?.gallery ?? []}
              title={project.title}
              aspect="aspect-[16/10]"
              onOpen={setLightbox}
            />
            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-[0.65rem] uppercase tracking-wider text-accent-bright">
                {project.category}
              </p>
              <h3 className="mt-1.5 font-display text-base font-medium text-ink">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-bg-elevated-2 px-2.5 py-1 font-mono text-[0.65rem] text-ink">
                    {tag}
                  </span>
                ))}
              </div>
              {project.media?.doc?.map((doc, index) => (
  <a
    key={doc}
    href={doc}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 flex items-center gap-1.5 border-t border-line pt-3 text-xs font-medium text-muted transition-colors hover:text-accent-bright"
  >
    <FileText className="h-3.5 w-3.5" />
    {project.media!.doc!.length > 1 ? `Report ${index + 1}` : "Report"}
  </a>
))}
              

              {/* External Project Link */}
              {project.lien && (
                <a
                  href={project.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-1.5 border-t border-line pt-3 text-xs font-medium text-muted transition-colors hover:text-accent-bright"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  View Project
                </a>
              )}

            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox content={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}
