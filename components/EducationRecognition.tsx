// "use client";

// import { motion } from "framer-motion";
// import { Award, GraduationCap } from "lucide-react";

// const formation = [
//   {
//     period: "2025 — 2026",
//     title: "Master's Degree — Computer Systems Engineering (ISI)",
//     place: "ESI-SBA · Zero Trust security thesis, defended July 2026",
//     degreeImage: "/degrees/master-degree.png",

//   },
//   {
//     period: "2021 — 2026",
//     title: "Engineering Degree — Computer Systems Engineering (ISI)",
//     place: "École Supérieure en Informatique, Sidi Bel Abbès",
//     degreeImage: "/degrees/engineering-degree.png",

//   }
// ];

// const recognition = [
//   {
//     title: "Innovative Project Award — Flutter Mobile App",
//     place: "Certificate awarded by the National Startup Committee"
//   }
// ];

// export default function EducationRecognition() {
//   return (
//     <section id="education" className="mx-auto max-w-6xl px-6 py-20">
//       <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//         <p className="eyebrow">Education &amp; Recognition</p>
//         <span className="section-underline" />
//       </motion.div>

//       <div className="mt-8 grid gap-6 lg:grid-cols-2">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="rounded-2xl border border-line bg-bg-elevated p-8 shadow-card"
//         >
//           <p className="flex items-center gap-2 font-display text-lg font-medium text-ink">
//             <GraduationCap className="h-5 w-5 text-accent-bright" /> Formation
//           </p>
//           <div className="mt-5 space-y-5">
//             {formation.map((f) => (
//               <div key={f.title} className="flex gap-4">
//                 <span className="w-20 shrink-0 font-mono text-xs text-accent-bright">{f.period}</span>
//                 <div>
//                   <p className="text-sm font-medium leading-snug text-ink">{f.title}</p>
//                   <p className="mt-1 text-xs text-muted">{f.place}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="rounded-2xl border border-line bg-bg-elevated p-8 shadow-card"
//         >
//           <p className="flex items-center gap-2 font-display text-lg font-medium text-ink">
//             <Award className="h-5 w-5 text-accent-bright" /> Recognition
//           </p>
//           <div className="mt-5 space-y-5">
//             {recognition.map((r) => (
//               <div key={r.title} className="flex gap-4">
//                 <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-bright">
//                   <Award className="h-4 w-4" />
//                 </span>
//                 <div>
//                   <p className="text-sm font-medium leading-snug text-ink">{r.title}</p>
//                   <p className="mt-1 text-xs text-muted">{r.place}</p>
//                 </div>
//               </div>
//             ))}
//             <p className="border-t border-line pt-4 text-xs leading-relaxed text-muted">
//               Full project reports, the PFE and Master's thesis, and detailed transcripts are available on
//               request — see the report links throughout the Projects section, or get in touch.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

const formation = [
  {
    period: "2025 — 2026",
    title: "Master's Degree — Computer Systems Engineering (ISI)",
    place: "ESI-SBA · Zero Trust security thesis, defended July 2026",
    degreeImage: "/degrees/master.jpg",
  },
  {
    period: "2021 — 2026",
    title: "Engineering Degree — Computer Systems Engineering (ISI)",
    place: "École Supérieure en Informatique, Sidi Bel Abbès",
    degreeImage: "/degrees/engineering.jpg",
  },
];

const recognition = [
  {
    title: "Innovative Project Award — Flutter Mobile App",
    place: "Certificate awarded by the National Startup Committee",
  },
];

export default function EducationRecognition() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20">
      {/* =========================================================
          SECTION HEADER
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">Education &amp; Recognition</p>
        <span className="section-underline" />
      </motion.div>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* =======================================================
            FORMATION
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-line bg-bg-elevated p-8 shadow-card"
        >
          <p className="flex items-center gap-2 font-display text-lg font-medium text-ink">
            <GraduationCap className="h-5 w-5 text-accent-bright" />
            Formation
          </p>

          <div className="mt-5 space-y-6">
            {formation.map((f) => (
              <div key={f.title} className="flex gap-4">
                {/* Period */}
                <span className="w-20 shrink-0 font-mono text-xs text-accent-bright">
                  {f.period}
                </span>

                {/* Degree information */}
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-snug text-ink">
                    {f.title}
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {f.place}
                  </p>

                  {/* View degree */}
                  <a
                    href={f.degreeImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-accent-bright transition-opacity hover:opacity-80"
                  >
                    View degree
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =======================================================
            RECOGNITION
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-line bg-bg-elevated p-8 shadow-card"
        >
          <p className="flex items-center gap-2 font-display text-lg font-medium text-ink">
            <Award className="h-5 w-5 text-accent-bright" />
            Recognition
          </p>

          <div className="mt-5 space-y-5">
            {recognition.map((r) => (
              <div key={r.title} className="flex gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-bright">
                  <Award className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-sm font-medium leading-snug text-ink">
                    {r.title}
                  </p>

                  <p className="mt-1 text-xs text-muted">
                    {r.place}
                  </p>
                </div>
              </div>
            ))}

            <p className="border-t border-line pt-4 text-xs leading-relaxed text-muted">
              Full project reports, the PFE and Master's thesis, and detailed
              transcripts are available on request — see the report links
              throughout the Projects section, or get in touch.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}