"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-dim font-display text-[0.65rem] font-bold text-white">
            AB
          </span>
          <span className="text-xs text-muted">© {new Date().getFullYear()} {profile.name}</span>
        </div>
        <a
          href="#top"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent-bright"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
