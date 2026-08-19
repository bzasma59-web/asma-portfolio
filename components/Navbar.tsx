"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-dim font-display text-xs font-bold text-white">
            AB
          </span>
        </a>

        <ul className="hidden gap-7 md:flex">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href} className="relative py-1">
                <a
                  href={l.href}
                  className={`text-sm transition-colors ${
                    isActive ? "font-medium text-accent-bright" : "text-muted hover:text-accent-bright"
                  }`}
                >
                  {l.label}
                </a>
                {isActive && (
                  <span className="absolute left-1/2 top-full mt-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-bright shadow-glow" />
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="/cv/Benzaoucha_Asma_CV.pdf"
            download
            className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-on-accent shadow-card transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-3.5 w-3.5" /> Download CV
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 text-sm ${
                      isActive ? "font-medium text-accent-bright" : "text-muted hover:text-accent-bright"
                    }`}
                  >
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />}
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="/cv/asma-benzaoucha-cv.pdf"
            download
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
        </div>
      )}
    </header>
  );
}
