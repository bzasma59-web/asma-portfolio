// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { profile } from "@/lib/content";
// import { Mail, MapPin, Phone, Send, Github, Linkedin, AtSign } from "lucide-react";
// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const body = `From: ${form.name} (${form.email})%0D%0A%0D%0A${encodeURIComponent(form.message)}`;
//     window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
//       form.subject || "Portfolio contact"
//     )}&body=${body}`;
//   };
 
//   // function ContactOrbit() {
//   //   return (
//   //     <div className="relative mx-auto mb-8 h-[360px] w-[360px] overflow-visible">
//   //       {/* =========================================================
//   //           BACKGROUND GLOW
//   //       ========================================================= */}
//   //       <motion.div
//   //         className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[70px]"
//   //         animate={{
//   //           opacity: [0.35, 0.6, 0.35],
//   //           scale: [0.9, 1.08, 0.9],
//   //         }}
//   //         transition={{
//   //           duration: 4,
//   //           repeat: Infinity,
//   //           ease: "easeInOut",
//   //         }}
//   //       />
  
//   //       {/* =========================================================
//   //           ORBIT
//   //       ========================================================= */}
//   //       <motion.svg
//   //         viewBox="0 0 360 360"
//   //         className="absolute inset-0 h-full w-full"
//   //         animate={{ rotate: 360 }}
//   //         transition={{
//   //           duration: 26,
//   //           repeat: Infinity,
//   //           ease: "linear",
//   //         }}
//   //       >
//   //         <circle
//   //           cx="180"
//   //           cy="180"
//   //           r="150"
//   //           fill="none"
//   //           stroke="currentColor"
//   //           strokeWidth="1.5"
//   //           strokeDasharray="3 8"
//   //           strokeLinecap="round"
//   //           className="text-accent/60"
//   //         />
//   //       </motion.svg>
  
//   //       {/* =========================================================
//   //           ORBITING ELEMENTS
//   //       ========================================================= */}
//   //       <motion.div
//   //         className="absolute inset-0"
//   //         animate={{ rotate: 360 }}
//   //         transition={{
//   //           duration: 26,
//   //           repeat: Infinity,
//   //           ease: "linear",
//   //         }}
//   //       >
//   //         {/* ---------------- LEFT PAPER PLANE ---------------- */}
//   //         <motion.div
//   //           className="absolute left-[5px] top-[105px] z-20"
//   //           animate={{
//   //             y: [0, -6, 0],
//   //             rotate: [-2, 2, -2],
//   //           }}
//   //           transition={{
//   //             y: {
//   //               duration: 3,
//   //               repeat: Infinity,
//   //               ease: "easeInOut",
//   //             },
//   //             rotate: {
//   //               duration: 4,
//   //               repeat: Infinity,
//   //               ease: "easeInOut",
//   //             },
//   //           }}
//   //         >
//   //           <div className="relative">
//   //             {/* Glow */}
//   //             <div className="absolute inset-0 scale-110 rounded-full bg-accent/30 blur-xl" />
  
//   //             {/* Paper plane */}
//   //             <Send
//   //               className="relative h-16 w-16 -rotate-[28deg] fill-accent/30 text-accent-bright drop-shadow-[0_0_12px_rgba(130,100,255,0.8)]"
//   //               strokeWidth={1.2}
//   //             />
//   //           </div>
//   //         </motion.div>
  
//   //         {/* ---------------- RIGHT @ ICON ---------------- */}
//   //         <motion.div
//   //           className="absolute right-[-2px] top-[125px] z-20"
//   //           animate={{
//   //             y: [0, -5, 0],
//   //             scale: [1, 1.04, 1],
//   //           }}
//   //           transition={{
//   //             y: {
//   //               duration: 3.2,
//   //               repeat: Infinity,
//   //               ease: "easeInOut",
//   //             },
//   //             scale: {
//   //               duration: 2.8,
//   //               repeat: Infinity,
//   //               ease: "easeInOut",
//   //             },
//   //           }}
//   //         >
//   //           <div className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-bg-elevated/90 shadow-[0_10px_35px_rgba(0,0,0,0.45)] backdrop-blur-md">
//   //             {/* Glow */}
//   //             <div className="absolute inset-0 rounded-xl bg-accent/10 blur-md" />
  
//   //             <AtSign
//   //               className="relative h-9 w-9 text-accent-bright drop-shadow-[0_0_10px_rgba(140,110,255,0.9)]"
//   //               strokeWidth={1.5}
//   //             />
//   //           </div>
//   //         </motion.div>
  
//   //         {/* ---------------- ORBIT STAR LEFT ---------------- */}
//   //         <motion.div
//   //           className="absolute bottom-[70px] left-[38px]"
//   //           animate={{
//   //             rotate: [0, 180, 360],
//   //             scale: [0.8, 1.1, 0.8],
//   //           }}
//   //           transition={{
//   //             duration: 4,
//   //             repeat: Infinity,
//   //             ease: "easeInOut",
//   //           }}
//   //         >
//   //           <div className="text-accent-bright drop-shadow-[0_0_12px_rgba(140,110,255,0.9)]">
//   //             ✦
//   //           </div>
//   //         </motion.div>
  
//   //         {/* ---------------- TOP STAR ---------------- */}
//   //         <motion.div
//   //           className="absolute right-[90px] top-[35px] text-accent-bright"
//   //           animate={{
//   //             rotate: [0, 90, 180, 270, 360],
//   //             scale: [0.8, 1.15, 0.8],
//   //           }}
//   //           transition={{
//   //             duration: 5,
//   //             repeat: Infinity,
//   //             ease: "easeInOut",
//   //           }}
//   //         >
//   //           <div className="text-2xl drop-shadow-[0_0_14px_rgba(140,110,255,1)]">
//   //             ✦
//   //           </div>
//   //         </motion.div>
//   //       </motion.div>
  
//   //       {/* =========================================================
//   //           SMALL PARTICLES
//   //       ========================================================= */}
//   //       <motion.div
//   //         className="absolute left-[82px] top-[35px] h-2.5 w-2.5 rounded-full bg-accent-bright shadow-[0_0_12px_rgba(140,110,255,1)]"
//   //         animate={{
//   //           opacity: [0.3, 1, 0.3],
//   //           scale: [0.7, 1.3, 0.7],
//   //         }}
//   //         transition={{
//   //           duration: 2.4,
//   //           repeat: Infinity,
//   //           ease: "easeInOut",
//   //         }}
//   //       />
  
//   //       <motion.div
//   //         className="absolute right-[55px] top-[100px] h-2 w-2 rounded-full bg-accent-bright shadow-[0_0_10px_rgba(140,110,255,0.9)]"
//   //         animate={{
//   //           opacity: [0.2, 1, 0.2],
//   //         }}
//   //         transition={{
//   //           duration: 2,
//   //           repeat: Infinity,
//   //           ease: "easeInOut",
//   //         }}
//   //       />
  
//   //       <motion.div
//   //         className="absolute bottom-[90px] right-[35px] h-1.5 w-1.5 rounded-full bg-accent-bright"
//   //         animate={{
//   //           opacity: [0.2, 1, 0.2],
//   //         }}
//   //         transition={{
//   //           duration: 1.8,
//   //           repeat: Infinity,
//   //           ease: "easeInOut",
//   //         }}
//   //       />
  
//   //       {/* =========================================================
//   //           CENTRAL ENVELOPE
//   //       ========================================================= */}
//   //       <motion.div
//   //         className="absolute left-1/2 top-1/2 z-10 h-[190px] w-[220px] -translate-x-1/2 -translate-y-1/2"
//   //         animate={{
//   //           y: [-3, -9, -3],
//   //         }}
//   //         transition={{
//   //           duration: 3.5,
//   //           repeat: Infinity,
//   //           ease: "easeInOut",
//   //         }}
//   //       >
//   //         {/* Envelope glow */}
//   //         <div className="absolute left-1/2 top-1/2 h-40 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
  
//   //         {/* =====================================================
//   //             ENVELOPE BODY
//   //         ===================================================== */}
//   //         <div
//   //           className="
//   //             absolute bottom-0 left-0
//   //             h-[135px] w-full
//   //             overflow-hidden
//   //             rounded-b-[18px]
//   //             border border-white/10
//   //             bg-gradient-to-br
//   //             from-[#25225f]
//   //             via-[#121534]
//   //             to-[#070b1d]
//   //             shadow-[0_25px_50px_rgba(0,0,0,0.55)]
//   //           "
//   //         >
//   //           {/* Left bottom flap */}
//   //           <div
//   //             className="
//   //               absolute bottom-0 left-0
//   //               h-[95px] w-[155px]
//   //               origin-bottom-left
//   //               -rotate-[31deg]
//   //               bg-gradient-to-br
//   //               from-[#302b78]
//   //               to-[#0c1027]
//   //             "
//   //           />
  
//   //           {/* Right bottom flap */}
//   //           <div
//   //             className="
//   //               absolute bottom-0 right-0
//   //               h-[95px] w-[155px]
//   //               origin-bottom-right
//   //               rotate-[31deg]
//   //               bg-gradient-to-bl
//   //               from-[#292568]
//   //               to-[#090d21]
//   //             "
//   //           />
  
//   //           {/* Center bottom triangle */}
//   //           <div
//   //             className="
//   //               absolute bottom-[-2px] left-1/2
//   //               h-[100px] w-[100px]
//   //               -translate-x-1/2
//   //               rotate-45
//   //               bg-gradient-to-br
//   //               from-[#171b3d]
//   //               to-[#070a19]
//   //             "
//   //           />
//   //         </div>
  
//   //         {/* =====================================================
//   //             ENVELOPE BACK / LETTER
//   //         ===================================================== */}
//   //         <motion.div
//   //           className="
//   //             absolute left-[9px] top-0
//   //             z-20
//   //             h-[125px] w-[202px]
//   //             rounded-t-[18px]
//   //             border border-accent-bright/30
//   //             bg-gradient-to-br
//   //             from-[#6c50ff]
//   //             via-[#4a35d8]
//   //             to-[#29216e]
//   //             shadow-[0_0_30px_rgba(100,70,255,0.25)]
//   //           "
//   //           animate={{
//   //             boxShadow: [
//   //               "0 0 25px rgba(100,70,255,0.18)",
//   //               "0 0 40px rgba(100,70,255,0.32)",
//   //               "0 0 25px rgba(100,70,255,0.18)",
//   //             ],
//   //           }}
//   //           transition={{
//   //             duration: 3,
//   //             repeat: Infinity,
//   //             ease: "easeInOut",
//   //           }}
//   //         >
//   //           {/* Inner letter fold */}
//   //           <div
//   //             className="
//   //               absolute left-1/2 top-[35px]
//   //               h-[75px] w-[75px]
//   //               -translate-x-1/2
//   //               rotate-45
//   //               border-l border-b border-white/10
//   //             "
//   //           />
  
//   //           {/* Envelope icon */}
//   //           <Mail
//   //             className="
//   //               absolute left-1/2 top-[54px]
//   //               h-5 w-5
//   //               -translate-x-1/2
//   //               text-white/80
//   //               drop-shadow-[0_0_7px_rgba(255,255,255,0.7)]
//   //             "
//   //             strokeWidth={1.5}
//   //           />
  
//   //           {/* Message line 1 */}
//   //           <div
//   //             className="
//   //               absolute bottom-[21px] left-1/2
//   //               h-[6px] w-[95px]
//   //               -translate-x-1/2
//   //               rounded-full
//   //               bg-white/90
//   //               shadow-[0_0_10px_rgba(255,255,255,0.7)]
//   //             "
//   //           />
  
//   //           {/* Message line 2 */}
//   //           <div
//   //             className="
//   //               absolute bottom-[9px] left-1/2
//   //               h-[4px] w-[55px]
//   //               -translate-x-1/2
//   //               rounded-full
//   //               bg-white/70
//   //               shadow-[0_0_8px_rgba(255,255,255,0.5)]
//   //             "
//   //           />
//   //         </motion.div>
  
//   //         {/* =====================================================
//   //             FRONT ENVELOPE FLAP
//   //         ===================================================== */}
//   //         <div
//   //           className="
//   //             absolute bottom-[0px] left-1/2
//   //             z-30
//   //             h-[90px] w-[90px]
//   //             -translate-x-1/2
//   //             rotate-45
//   //             border-b border-r border-white/10
//   //             bg-gradient-to-br
//   //             from-[#25235e]
//   //             via-[#111532]
//   //             to-[#080b1c]
//   //             shadow-[10px_10px_25px_rgba(0,0,0,0.25)]
//   //           "
//   //         />
//   //       </motion.div>
//   //     </div>
//   //   );
//   // }
//   function ContactOrbit() {
//     return (
//       <div className="relative mx-auto mb-8 h-[360px] w-[360px] overflow-visible">
//         {/* GLOW DE FOND */}
//         <motion.div
//           className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[70px]"
//           animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.9, 1.08, 0.9] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         />
  
//         {/* ANNEAU EN POINTILLÉS — seul élément qui tourne réellement */}
//         <motion.svg
//           viewBox="0 0 360 360"
//           className="absolute inset-0 h-full w-full"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//         >
//           <circle
//             cx="180"
//             cy="180"
//             r="150"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             strokeDasharray="3 8"
//             strokeLinecap="round"
//             className="text-accent/50"
//           />
//         </motion.svg>
  
//         {/* ÉTOILES SVG — nettes, avec glow réel */}
//         <motion.div
//           className="absolute right-[75px] top-[30px]"
//           animate={{ rotate: [0, 180, 360], scale: [0.85, 1.15, 0.85] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <svg width="26" height="26" viewBox="0 0 24 24" className="drop-shadow-[0_0_10px_rgba(150,120,255,0.9)]">
//             <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" fill="currentColor" className="text-accent-bright" />
//           </svg>
//         </motion.div>
  
//         <motion.div
//           className="absolute bottom-[75px] left-[40px]"
//           animate={{ rotate: [0, -180, -360], scale: [0.75, 1.05, 0.75] }}
//           transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <svg width="16" height="16" viewBox="0 0 24 24" className="drop-shadow-[0_0_8px_rgba(150,120,255,0.8)]">
//             <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" fill="currentColor" className="text-accent-bright" />
//           </svg>
//         </motion.div>
  
//         {/* PARTICULES */}
//         {[
//           { cls: "left-[85px] top-[35px]", size: "h-2.5 w-2.5", dur: 2.4 },
//           { cls: "right-[55px] top-[110px]", size: "h-2 w-2", dur: 2 },
//           { cls: "bottom-[95px] right-[35px]", size: "h-1.5 w-1.5", dur: 1.8 },
//         ].map((p, i) => (
//           <motion.div
//             key={i}
//             className={`absolute ${p.cls} ${p.size} rounded-full bg-accent-bright shadow-[0_0_12px_rgba(150,120,255,0.9)]`}
//             animate={{ opacity: [0.25, 1, 0.25], scale: [0.7, 1.2, 0.7] }}
//             transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut" }}
//           />
//         ))}
  
//         {/* AVION EN PAPIER — position fixe, flottement léger seulement */}
//         <motion.div
//           className="absolute left-[10px] top-[110px] z-20"
//           animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
//           transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
//         >
//           <div className="absolute inset-0 scale-125 rounded-full bg-accent/30 blur-xl" />
//           <Send className="relative h-14 w-14 -rotate-[28deg] text-accent-bright drop-shadow-[0_0_14px_rgba(140,110,255,0.9)]" strokeWidth={1.2} />
//         </motion.div>
  
//         {/* BADGE @ — position fixe, flottement léger seulement */}
//         <motion.div
//           className="absolute right-[0px] top-[130px] z-20"
//           animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
//           transition={{ y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 2.8, repeat: Infinity, ease: "easeInOut" } }}
//         >
//           <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-bg-elevated/90 shadow-[0_10px_35px_rgba(0,0,0,0.45)] backdrop-blur-md">
//             <div className="absolute inset-0 rounded-xl bg-accent/15 blur-md" />
//             <AtSign className="relative h-8 w-8 text-accent-bright drop-shadow-[0_0_10px_rgba(150,120,255,0.9)]" strokeWidth={1.5} />
//           </div>
//         </motion.div>
  
//         {/* ENVELOPPE CENTRALE */}
//         <motion.div
//           className="absolute left-1/2 top-1/2 z-10 h-[190px] w-[220px] -translate-x-1/2 -translate-y-1/2"
//           animate={{ y: [-3, -9, -3] }}
//           transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <div className="absolute left-1/2 top-1/2 h-40 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
  
//           {/* Corps de l'enveloppe : flap avant en triangle propre via clip-path */}
//           <div
//             className="absolute bottom-0 left-0 h-[135px] w-full rounded-b-[18px] border border-white/10 bg-gradient-to-br from-[#25225f] via-[#121534] to-[#070b1d] shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
//             style={{ clipPath: "polygon(0 0, 50% 62%, 100% 0, 100% 100%, 0 100%)" }}
//           />
  
//           {/* Carte / lettre qui dépasse en haut */}
//           <motion.div
//             className="absolute left-[9px] top-0 z-20 h-[125px] w-[202px] rounded-t-[18px] border border-accent-bright/30 bg-gradient-to-br from-[#6c50ff] via-[#4a35d8] to-[#29216e]"
//             animate={{
//               boxShadow: [
//                 "0 0 25px rgba(100,70,255,0.18)",
//                 "0 0 40px rgba(100,70,255,0.32)",
//                 "0 0 25px rgba(100,70,255,0.18)",
//               ],
//             }}
//             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//           >
//             <Mail className="absolute left-1/2 top-[40px] h-5 w-5 -translate-x-1/2 text-white/80 drop-shadow-[0_0_7px_rgba(255,255,255,0.7)]" strokeWidth={1.5} />
//             <div className="absolute bottom-[21px] left-1/2 h-[6px] w-[95px] -translate-x-1/2 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
//             <div className="absolute bottom-[9px] left-1/2 h-[4px] w-[55px] -translate-x-1/2 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
//           </motion.div>
  
//           {/* Flap avant (triangle du bas) */}
//           <div
//             className="absolute bottom-0 left-0 z-30 h-[135px] w-full border-t border-white/10 bg-gradient-to-br from-[#25235e] via-[#111532] to-[#080b1c]"
//             style={{ clipPath: "polygon(0 100%, 50% 38%, 100% 100%)" }}
//           />
//         </motion.div>
//       </div>
//     );
//   }
//   return (
//     <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
//       <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//         <p className="eyebrow">Contact</p>
//         <span className="section-underline" />
//       </motion.div>

//       <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="rounded-2xl border border-line bg-bg-elevated p-8 shadow-card"
//         >
//           <h3 className="font-display text-xl font-medium text-ink">Let's talk</h3>
//           <ContactOrbit />

//           <h3 className="font-display text-xl font-medium text-ink">Let's talk</h3>
//           <p className="mt-3 text-sm leading-relaxed text-muted">
//             Open to internships, freelance work and junior engineering roles. Reach out directly or use the
//             form.
//           </p>

//           <ul className="mt-7 space-y-4 text-sm">
//             <li className="flex items-center gap-3 text-muted">
//               <Mail className="h-4 w-4 text-accent-bright" /> {profile.email}
//             </li>
//             <li className="flex items-center gap-3 text-muted">
//               <Phone className="h-4 w-4 text-accent-bright" /> {profile.phone}
//             </li>
//             <li className="flex items-center gap-3 text-muted">
//               <MapPin className="h-4 w-4 text-accent-bright" /> {profile.location}
//             </li>
//           </ul>

//           <div className="mt-7 flex gap-3">
//             <a
//               href={profile.linkedinUrl}
//               target="_blank"
//               rel="noreferrer"
//               className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent-bright"
//             >
//               <Linkedin className="h-4 w-4" />
//             </a>
//             <a
//               href={profile.githubUrl}
//               target="_blank"
//               rel="noreferrer"
//               className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent-bright"
//             >
//               <Github className="h-4 w-4" />
//             </a>
//           </div>
//         </motion.div>

//         <motion.form
//           onSubmit={onSubmit}
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="rounded-2xl border border-line bg-bg-elevated p-8 shadow-card"
//         >
//           <div className="grid gap-4 sm:grid-cols-2">
//             <input
//               required
//               placeholder="Your name"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               className="rounded-lg border border-line bg-bg-soft px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-accent"
//             />
//             <input
//               required
//               type="email"
//               placeholder="Your email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               className="rounded-lg border border-line bg-bg-soft px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-accent"
//             />
//           </div>
//           <input
//             placeholder="Subject"
//             value={form.subject}
//             onChange={(e) => setForm({ ...form, subject: e.target.value })}
//             className="mt-4 w-full rounded-lg border border-line bg-bg-soft px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-accent"
//           />
//           <textarea
//             required
//             rows={5}
//             placeholder="Your message"
//             value={form.message}
//             onChange={(e) => setForm({ ...form, message: e.target.value })}
//             className="mt-4 w-full resize-none rounded-lg border border-line bg-bg-soft px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-accent"
//           />
//           <button
//             type="submit"
//             className="mt-5 flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-on-accent shadow-glow transition-transform hover:-translate-y-0.5"
//           >
//             Send message <Send className="h-4 w-4" />
//           </button>
//           <p className="mt-3 text-xs text-muted">Opens your e-mail app with the message pre-filled.</p>
//         </motion.form>
        
//       </div>
//     </section>
//   );
// }




"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/content";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  AtSign,
} from "lucide-react";

function ContactOrbit() {
  return (
    <div className="relative mx-auto h-[220px] w-[220px] overflow-visible sm:h-[250px] sm:w-[250px] xl:h-[260px] xl:w-[260px]">
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[60px] sm:h-48 sm:w-48"
        animate={{
          opacity: [0.35, 0.6, 0.35],
          scale: [0.9, 1.08, 0.9],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          DOTTED ORBIT
      ===================================================== */}
      <motion.svg
        viewBox="0 0 360 360"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <circle
          cx="180"
          cy="180"
          r="150"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 8"
          strokeLinecap="round"
          className="text-accent/50"
        />
      </motion.svg>

      {/* =====================================================
          STARS
      ===================================================== */}
      <motion.div
        className="absolute right-[12%] top-[8%]"
        animate={{
          rotate: [0, 180, 360],
          scale: [0.85, 1.15, 0.85],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="drop-shadow-[0_0_10px_rgba(150,120,255,0.9)]"
        >
          <path
            d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
            fill="currentColor"
            className="text-accent-bright"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-[10%]"
        animate={{
          rotate: [0, -180, -360],
          scale: [0.75, 1.05, 0.75],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          className="drop-shadow-[0_0_8px_rgba(150,120,255,0.8)]"
        >
          <path
            d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
            fill="currentColor"
            className="text-accent-bright"
          />
        </svg>
      </motion.div>

      {/* =====================================================
          PARTICLES
      ===================================================== */}
      {[
        {
          cls: "left-[23%] top-[10%]",
          size: "h-2 w-2",
          dur: 2.4,
        },
        {
          cls: "right-[15%] top-[30%]",
          size: "h-1.5 w-1.5",
          dur: 2,
        },
        {
          cls: "bottom-[26%] right-[10%]",
          size: "h-1 w-1",
          dur: 1.8,
        },
      ].map((p, i) => (
        <motion.div
          key={i}
          className={`absolute ${p.cls} ${p.size} rounded-full bg-accent-bright shadow-[0_0_12px_rgba(150,120,255,0.9)]`}
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [0.7, 1.2, 0.7],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* =====================================================
          PAPER PLANE
      ===================================================== */}
      <motion.div
        className="absolute left-[2%] top-[30%] z-20"
        animate={{
          y: [0, -6, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div className="absolute inset-0 scale-125 rounded-full bg-accent/30 blur-xl" />

        <Send
          className="relative h-9 w-9 -rotate-[28deg] text-accent-bright drop-shadow-[0_0_14px_rgba(140,110,255,0.9)] sm:h-10 sm:w-10"
          strokeWidth={1.2}
        />
      </motion.div>

      {/* =====================================================
          @ BADGE
      ===================================================== */}
      <motion.div
        className="absolute right-2.5 top-[35%] z-20"
        animate={{
          y: [0, -5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          y: {
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-bg-elevated/90 shadow-[0_10px_35px_rgba(0,0,0,0.45)] backdrop-blur-md sm:h-11 sm:w-11">
          <div className="absolute inset-0 rounded-xl bg-accent/15 blur-md" />

          <AtSign
            className="relative h-5 w-5 text-accent-bright drop-shadow-[0_0_10px_rgba(150,120,255,0.9)] sm:h-6 sm:w-6"
            strokeWidth={1.5}
          />
        </div>
      </motion.div>

      {/* =====================================================
          CENTRAL ENVELOPE
      ===================================================== */}
{/* =====================================================
    CENTRAL ENVELOPE
===================================================== */}

{/* Static positioning layer — keeps envelope centered */}
<div
  className="
    absolute
    left-1/2
    top-1/2
    z-10
    h-[120px]
    w-[140px]
    -translate-x-1/2
    -translate-y-1/2

    sm:h-[130px]
    sm:w-[150px]
  "
>
  {/* Animated layer — only controls floating */}
  <motion.div
    className="relative h-full w-full"
    animate={{
      y: [-2, -7, -2],
    }}
    transition={{
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >

    {/* =================================================
        GLOW
    ================================================= */}

    <div
      className="
        absolute
        left-1/2
        top-1/2
        h-28
        w-32
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-accent/20
        blur-2xl
      "
    />


    {/* =================================================
        PURPLE LETTER
        BEHIND ENVELOPE BODY
    ================================================= */}

    <motion.div
      className="
        absolute
        left-[6px]
        top-0
        z-10

        h-[78px]
        w-[128px]

        rounded-t-[14px]

        border
        border-accent-bright/30

        bg-gradient-to-br
        from-[#6c50ff]
        via-[#4a35d8]
        to-[#29216e]

        sm:h-[84px]
        sm:w-[138px]
      "
      animate={{
        boxShadow: [
          "0 0 18px rgba(100,70,255,0.18)",
          "0 0 30px rgba(100,70,255,0.32)",
          "0 0 18px rgba(100,70,255,0.18)",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >

      <Mail
        className="
          absolute
          left-1/2
          top-[24px]

          h-3.5
          w-3.5

          -translate-x-1/2

          text-white/80

          drop-shadow-[0_0_7px_rgba(255,255,255,0.7)]
        "
        strokeWidth={1.5}
      />

      <div
        className="
          absolute
          bottom-[14px]
          left-1/2

          h-[4px]
          w-[60px]

          -translate-x-1/2

          rounded-full

          bg-white/90

          shadow-[0_0_10px_rgba(255,255,255,0.7)]
        "
      />

      <div
        className="
          absolute
          bottom-[6px]
          left-1/2

          h-[3px]
          w-[35px]

          -translate-x-1/2

          rounded-full

          bg-white/70

          shadow-[0_0_8px_rgba(255,255,255,0.5)]
        "
      />

    </motion.div>


    {/* =================================================
        ENVELOPE BODY
        ABOVE LETTER
    ================================================= */}

    <div
      className="
        absolute
        bottom-0
        left-0
        z-20

        h-[85px]
        w-full

        rounded-b-[14px]

        border
        border-white/10

        bg-gradient-to-br
        from-[#25225f]
        via-[#121534]
        to-[#070b1d]

        shadow-[0_20px_40px_rgba(0,0,0,0.5)]
      "
      style={{
        clipPath:
          "polygon(0 0, 50% 62%, 100% 0, 100% 100%, 0 100%)",
      }}
    />


    {/* =================================================
        FRONT FLAP
        ABOVE EVERYTHING
    ================================================= */}

    <div
      className="
        absolute
        bottom-0
        left-0
        z-30

        h-[85px]
        w-full

        border-t
        border-white/10

        bg-gradient-to-br
        from-[#25235e]
        via-[#111532]
        to-[#080b1c]
      "
      style={{
        clipPath:
          "polygon(0 100%, 50% 38%, 100% 100%)",
      }}
    />

  </motion.div>
</div>
    
    
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = `From: ${form.name} (${form.email})%0D%0A%0D%0A${encodeURIComponent(
      form.message
    )}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio contact"
    )}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      {/* =====================================================
          SECTION TITLE
      ===================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">Contact</p>
        <span className="section-underline" />
      </motion.div>

      {/* =====================================================
          MAIN CONTACT LAYOUT
          
          ONLY TWO COLUMNS:
          LEFT  = Let's talk + illustration
          RIGHT = Form
      ===================================================== */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">

        {/* ===================================================
            LEFT CARD
        =================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            min-w-0
            rounded-2xl
            border border-line
            bg-bg-elevated
            p-6
            shadow-card
            sm:p-8
          "
        >
          <div className="grid h-full min-w-0 grid-cols-1 items-center gap-4 xl:grid-cols-[minmax(0,1fr)_220px]">
            
            {/* -----------------------------------------------
                CONTACT INFORMATION
            ------------------------------------------------ */}
            <div className="min-w-0">
              <h3 className="font-display text-xl font-medium text-ink">
                Let's talk
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                Open to internships, freelance work and junior engineering
                roles. Reach out directly or use the form.
              </p>

              <ul className="mt-7 space-y-4 text-sm">
                <li className="flex min-w-0 items-start gap-3 text-muted">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-bright" />

                  <span className="break-all">
                    {profile.email}
                  </span>
                </li>

                <li className="flex items-center gap-3 text-muted">
                  <Phone className="h-4 w-4 shrink-0 text-accent-bright" />
                  <span>{profile.phone}</span>
                </li>

                <li className="flex items-center gap-3 text-muted">
                  <MapPin className="h-4 w-4 shrink-0 text-accent-bright" />
                  <span>{profile.location}</span>
                </li>
              </ul>

              {/* Social links */}
              <div className="mt-7 flex gap-3">
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
              </div>
            </div>

            {/* -----------------------------------------------
                ANIMATED ILLUSTRATION

                IMPORTANT:
                It is INSIDE the left card.
                It can never overflow the card horizontally.
            ------------------------------------------------ */}
            <div className="flex min-w-0 justify-center xl:justify-end">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="max-w-full"
              >
                <ContactOrbit />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            RIGHT: CONTACT FORM
        =================================================== */}
        <motion.form
          onSubmit={onSubmit}
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="
            flex
            min-w-0
            flex-col
            rounded-2xl
            border border-line
            bg-bg-elevated
            p-6
            shadow-card
            sm:p-8
          "
        >
          {/* Name + Email */}
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="
                min-w-0
                rounded-lg
                border border-line
                bg-bg-soft
                px-4 py-3
                text-sm text-ink
                outline-none
                placeholder:text-muted
                focus:border-accent
              "
            />

            <input
              required
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="
                min-w-0
                rounded-lg
                border border-line
                bg-bg-soft
                px-4 py-3
                text-sm text-ink
                outline-none
                placeholder:text-muted
                focus:border-accent
              "
            />
          </div>

          {/* Subject */}
          <input
            placeholder="Subject"
            value={form.subject}
            onChange={(e) =>
              setForm({
                ...form,
                subject: e.target.value,
              })
            }
            className="
              mt-4
              w-full
              rounded-lg
              border border-line
              bg-bg-soft
              px-4 py-3
              text-sm text-ink
              outline-none
              placeholder:text-muted
              focus:border-accent
            "
          />

          {/* Message */}
          <textarea
            required
            rows={7}
            placeholder="Your message"
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            className="
              mt-4
              min-h-[180px]
              w-full
              flex-1
              resize-none
              rounded-lg
              border border-line
              bg-bg-soft
              px-4 py-3
              text-sm text-ink
              outline-none
              placeholder:text-muted
              focus:border-accent
            "
          />

          {/* Button */}
          <button
            type="submit"
            className="
              mt-5
              flex
              w-fit
              items-center
              gap-2
              rounded-lg
              bg-accent
              px-6
              py-3
              text-sm
              font-semibold
              text-on-accent
              shadow-glow
              transition-transform
              hover:-translate-y-0.5
            "
          >
            Send message
            <Send className="h-4 w-4" />
          </button>

          <p className="mt-3 text-xs text-muted">
            Opens your e-mail app with the message pre-filled.
          </p>
        </motion.form>
      </div>
    </section>
  );
}