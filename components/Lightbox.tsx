// "use client";

// import { useEffect } from "react";
// import { createPortal } from "react-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";

// export type LightboxContent = { type: "image" | "video"; src: string; caption?: string };

// export default function Lightbox({
//   content,
//   onClose
// }: {
//   content: LightboxContent | null;
//   onClose: () => void;
// }) {
//   useEffect(() => {
//     if (!content) return;
//     const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
//     window.addEventListener("keydown", onKey);
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//   }, [content, onClose]);

//   if (typeof window === "undefined") return null;

//   return createPortal(
//     <AnimatePresence>
//       {content && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.96, y: 10 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.97 }}
//             transition={{ duration: 0.2 }}
//             className="relative max-h-[88vh] max-w-4xl overflow-hidden rounded-xl bg-bg shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={onClose}
//               aria-label="Close"
//               className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-white backdrop-blur-sm transition-colors hover:bg-ink"
//             >
//               <X className="h-4 w-4" />
//             </button>
//             {content.type === "image" ? (
//               // eslint-disable-next-line @next/next/no-img-element
//               <img src={content.src} alt={content.caption ?? ""} className="max-h-[88vh] w-auto object-contain" />
//             ) : (
//               <video src={content.src} controls autoPlay className="max-h-[88vh] w-auto" />
//             )}
//             {content.caption && (
//               <p className="border-t border-line bg-bg px-4 py-3 text-sm text-muted">{content.caption}</p>
//             )}
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>,
//     document.body
//   );
// }
"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export type LightboxContent = {
  type: "image" | "video";
  src: string;
  caption?: string;
};

export default function Lightbox({
  content,
  onClose,
}: {
  content: LightboxContent | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!content) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [content, onClose]);

  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {content && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[100]

            flex
            items-center
            justify-center

            bg-ink/85
            p-4

            backdrop-blur-sm
          "
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              relative

              max-h-[88vh]
              max-w-4xl

              overflow-hidden

              rounded-xl

              bg-bg

              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              onClick={onClose}
              aria-label="Close"
              className="
                group

                absolute
                right-3
                top-3

                z-10

                flex
                h-9
                w-9

                items-center
                justify-center

                rounded-full

                border
                border-accent/30

                bg-bg/80

                text-accent-bright

                backdrop-blur-sm

                transition-all
                duration-200

                hover:border-accent/60
                hover:bg-accent
                hover:text-on-accent

                hover:shadow-[0_0_18px_rgba(99,120,255,0.25)]
              "
            >
              <X
                className="
                  h-4
                  w-4

                  transition-transform
                  duration-200

                  group-hover:rotate-90
                "
              />
            </button>

            {/* =================================================
                IMAGE
            ================================================= */}

            {content.type === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={content.src}
                alt={content.caption ?? ""}
                className="
                  max-h-[88vh]
                  w-auto

                  object-contain
                "
              />
            ) : (
              /* =================================================
                 VIDEO
              ================================================= */

              <video
                src={content.src}
                controls
                autoPlay
                className="
                  max-h-[88vh]
                  w-auto
                "
              />
            )}

            {/* =================================================
                CAPTION
            ================================================= */}

            {content.caption && (
              <p
                className="
                  border-t
                  border-line

                  bg-bg

                  px-4
                  py-3

                  text-sm
                  text-muted
                "
              >
                {content.caption}
              </p>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}