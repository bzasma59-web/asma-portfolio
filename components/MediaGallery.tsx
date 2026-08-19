// "use client";

// import { useRef, useState } from "react";
// import { Play } from "lucide-react";
// import type { GalleryItem } from "@/lib/content";
// import type { LightboxContent } from "./Lightbox";

// export default function MediaGallery({
//   gallery,
//   title,
//   aspect = "aspect-[16/10]",
//   onOpen
// }: {
//   gallery: GalleryItem[];
//   title: string;
//   aspect?: string;
//   onOpen: (content: LightboxContent) => void;
// }) {
//   const scrollerRef = useRef<HTMLDivElement>(null);
//   const [active, setActive] = useState(0);

//   if (!gallery || gallery.length === 0) {
//     return (
//       <div className={`flex w-full items-center justify-center bg-bg-soft ${aspect}`}>
//         <span className="font-mono text-xs text-muted">No preview yet</span>
//       </div>
//     );
//   }

//   const onScroll = () => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     const index = Math.round(el.scrollLeft / el.clientWidth);
//     setActive(index);
//   };

//   const goTo = (i: number) => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
//   };

//   return (
//     <div className="relative">
//       <div ref={scrollerRef} onScroll={onScroll} className={`media-scroll w-full bg-bg-soft ${aspect}`}>
//         {gallery.map((item, i) => (
//           <button
//             key={item.src + i}
//             onClick={() => onOpen({ type: item.type, src: item.src, caption: title })}
//             className="group relative h-full w-full shrink-0"
//           >
//             {item.type === "image" ? (
//               // eslint-disable-next-line @next/next/no-img-element
//               <img
//                 src={item.src}
//                 alt={`${title} — ${i + 1}`}
//                 className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
//               />
//             ) : (
//               <>
//                 <video src={item.src} muted playsInline className="h-full w-full object-cover" />
//                 <span className="absolute inset-0 flex items-center justify-center bg-ink/25">
//                   <span className="flex h-11 w-11 items-center justify-center rounded-full bg-on-accent/90">
//                     <Play className="h-4 w-4 translate-x-0.5 text-ink" />
//                   </span>
//                 </span>
//               </>
//             )}
//           </button>
//         ))}
//       </div>

//       {gallery.length > 1 && (
//         <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center gap-1.5 [filter:drop-shadow(0_1px_2px_rgb(0_0_0_/_0.5))]">
//           {gallery.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goTo(i)}
//               aria-label={`Show item ${i + 1}`}
//               className={`pointer-events-auto h-1.5 rounded-full bg-white transition-all ${
//                 i === active ? "w-4 opacity-100" : "w-1.5 opacity-60"
//               }`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import type { GalleryItem } from "@/lib/content";
import type { LightboxContent } from "./Lightbox";

export default function MediaGallery({
  gallery,
  title,
  aspect = "aspect-[16/10]",
  onOpen,
}: {
  gallery: GalleryItem[];
  title: string;
  aspect?: string;
  onOpen: (content: LightboxContent) => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const [active, setActive] = useState(0);

  if (!gallery || gallery.length === 0) {
    return (
      <div
        className={`flex w-full items-center justify-center bg-bg-soft ${aspect}`}
      >
        <span className="font-mono text-xs text-muted">
          No preview yet
        </span>
      </div>
    );
  }

  /* =========================================================
     SCROLL
  ========================================================= */

  const onScroll = () => {
    const el = scrollerRef.current;

    if (!el) return;

    const index = Math.round(
      el.scrollLeft / el.clientWidth
    );

    setActive(index);
  };

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const goTo = (i: number) => {
    const el = scrollerRef.current;

    if (!el) return;

    el.scrollTo({
      left: i * el.clientWidth,
      behavior: "smooth",
    });
  };

  /* =========================================================
     VIDEO HOVER — PLAY
  ========================================================= */

  const handleVideoMouseEnter = (index: number) => {
    const video = videoRefs.current[index];

    if (!video) return;

    video.play().catch(() => {
      // Browser can still block playback in some environments.
    });
  };

  /* =========================================================
     VIDEO HOVER — PAUSE
  ========================================================= */

  const handleVideoMouseLeave = (index: number) => {
    const video = videoRefs.current[index];

    if (!video) return;

    video.pause();
  };

  return (
    <div className="relative">

      {/* =====================================================
          MEDIA SCROLLER
      ===================================================== */}

      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className={`media-scroll w-full bg-bg-soft ${aspect}`}
      >
        {gallery.map((item, i) => (
          <button
            key={item.src + i}
            onClick={() =>
              onOpen({
                type: item.type,
                src: item.src,
                caption: title,
              })
            }
            className="group relative h-full w-full shrink-0"
          >

            {/* =================================================
                IMAGE
            ================================================= */}

            {item.type === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.src}
                alt={`${title} — ${i + 1}`}
                className="
                  h-full
                  w-full
                  object-cover

                  transition-transform
                  duration-300

                  group-hover:scale-[1.03]
                "
              />
            ) : (

              /* =================================================
                 VIDEO
              ================================================= */

              <div
                className="relative h-full w-full"
                onMouseEnter={() =>
                  handleVideoMouseEnter(i)
                }
                onMouseLeave={() =>
                  handleVideoMouseLeave(i)
                }
              >

                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={item.src}
                  muted
                  playsInline
                  preload="metadata"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                {/* =============================================
                    VIDEO OVERLAY
                ============================================= */}

                <span
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    flex
                    items-center
                    justify-center

                    bg-ink/20

                    transition-colors
                    duration-200

                    group-hover:bg-ink/10
                  "
                >

                  {/* =========================================
                      PLAY BUTTON
                  ========================================= */}

                  <span
                    className="
                      flex
                      h-11
                      w-11

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-accent/30

                      bg-bg/85

                      text-accent-bright

                      backdrop-blur-sm

                      shadow-[0_0_18px_rgba(99,120,255,0.15)]

                      transition-all
                      duration-200

                      group-hover:border-accent/60
                      group-hover:bg-accent
                      group-hover:text-on-accent

                      group-hover:shadow-[0_0_22px_rgba(99,120,255,0.25)]

                      group-hover:scale-105
                    "
                  >
                    <Play
                      className="
                        h-4
                        w-4

                        translate-x-0.5

                        transition-transform
                        duration-200

                        group-hover:scale-105
                      "
                    />
                  </span>

                </span>

              </div>
            )}
          </button>
        ))}
      </div>

      {/* =====================================================
          GALLERY INDICATORS
      ===================================================== */}

      {gallery.length > 1 && (
        <div
          className="
            pointer-events-none

            absolute
            inset-x-0
            bottom-2

            flex
            justify-center
            gap-1.5

            [filter:drop-shadow(0_1px_2px_rgb(0_0_0_/_0.5))]
          "
        >
          {gallery.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Show item ${i + 1}`}
              className={`
                pointer-events-auto

                h-1.5

                rounded-full

                bg-white

                transition-all

                ${
                  i === active
                    ? "w-4 opacity-100"
                    : "w-1.5 opacity-60"
                }
              `}
            />
          ))}
        </div>
      )}

    </div>
  );
}