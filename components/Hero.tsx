"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { profile } from "@/lib/content";
import HeroGraphic from "./HeroGraphic";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] dark:bg-accent/25" />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-14 md:pt-20">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 font-mono text-xs text-accent-bright"
            >
              <Sparkles className="h-3.5 w-3.5" /> {profile.role}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl"
            >
              Designing systems.
              <br />
              Solving problems.
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">
                Creating value.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted"
            >
              Computer Systems Engineer passionate about designing robust, secure and scalable
              solutions. I combine logic, creativity and technology to turn ideas into
              high-performing systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-on-accent shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Discover my work
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-lg border border-line-strong px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent-bright"
              >
                Contact me <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent-bright"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent-bright"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent-bright"
              >
                <Mail className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <HeroGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
