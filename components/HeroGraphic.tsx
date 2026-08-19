

// "use client";

// import { motion } from "framer-motion";
// import {
//   BarChart3,
//   Box,
//   Code2,
//   Rocket,
// } from "lucide-react";

// /* =========================================================
//    DATA
// ========================================================= */

// const ITEMS = [
//   {
//     id: "analysis",
//     title: "Analysis",
//     description: ["Understand", "your needs"],
//     icon: BarChart3,

//     lineStart: { x: 36.0, y: 39.5 },
//     lineEnd: { x: 23.8, y: 20.8 },

//     iconPosition: {
//       left: "15%",
//       top: "10%",
//     },

//     textPosition: {
//       left: "-3%",
//       top: "-5%",
//     },
//   },

//   {
//     id: "deployment",
//     title: "Deployment",
//     description: ["Ensure performance", "and scalability"],
//     icon: Rocket,

//     lineStart: { x: 35.5, y: 61 },
//     lineEnd: { x: 23.8, y: 85 },

//     iconPosition: {
//       left: "15%",
//       top: "80%",
//     },

//     textPosition: {
//       left: "-3%",
//       top: "90%",
//     },
//   },

//   {
//     id: "design",
//     title: "Design",
//     description: ["Design", "effective", "solutions"],
//     icon: Box,

//     lineStart: { x: 64.5, y: 49 },
//     lineEnd: { x: 88.2, y: 22.8 },

//     iconPosition: {
//       left: "88%",
//       top: "10%",
//     },

//     textPosition: {
//       left: "98%",
//       top: "-9%",
//     },
//   },

//   {
//     id: "development",
//     title: "Development",
//     description: ["Build with modern", "technologies"],
//     icon: Code2,

//     lineStart: { x: 72.8, y: 61 },
//     lineEnd: { x: 87.5, y: 85 },

//     iconPosition: {
//       left: "88%",
//       top: "80%",
//     },

//     textPosition: {
//       left: "88%",
//       top: "95%",
//     },
//   },
// ];

// /* =========================================================
//    MOBILE DATA
// ========================================================= */

// const MOBILE_ITEMS = [
//   {
//     id: "analysis-mobile",
//     title: "Analysis",
//     description: ["Understand", "your needs"],
//     icon: BarChart3,
//   },

//   {
//     id: "design-mobile",
//     title: "Design",
//     description: ["Design effective", "solutions"],
//     icon: Box,
//   },

//   {
//     id: "deployment-mobile",
//     title: "Deployment",
//     description: ["Ensure performance", "and scalability"],
//     icon: Rocket,
//   },

//   {
//     id: "development-mobile",
//     title: "Development",
//     description: ["Build with modern", "technologies"],
//     icon: Code2,
//   },
// ];

// /* =========================================================
//    COMPONENT
// ========================================================= */

// export default function HeroGraphic() {
//   return (
//     <>
//       {/* =====================================================
//           DESKTOP / TABLET VERSION

//           >= 1230px
//           → original size

//           1024 - 1229px
//           → 90%

//           768 - 1023px
//           → 78%

//           < 768px
//           → hidden
//       ===================================================== */}

//       <div
//         className="
//           relative
//           w-full
//           aspect-[16/9]
//           overflow-visible

//           max-[767px]:hidden
//         "
//       >
//         {/* ===================================================
//             RESPONSIVE STAGE

//             IMPORTANT:
//             Everything inside this stage is scaled together.

//             This prevents:
//             - image drifting
//             - icons drifting
//             - lines drifting
//             - text drifting
//         =================================================== */}

//         <div
//           className="
//             absolute
//             inset-0
//             origin-center

//             scale-100

//             max-[1229px]:scale-[0.90]

//             max-[1023px]:scale-[0.78]
//           "
//         >
//           {/* =================================================
//               GLOBAL SVG DEFINITIONS
//           ================================================= */}

//           <svg
//             className="absolute w-0 h-0"
//             aria-hidden="true"
//           >
//             <defs>

//               {/* =================================================
//                   BLUE + VIOLET GRADIENT
//               ================================================= */}

//               <linearGradient
//                 id="heroNeonBlueViolet"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="100%"
//               >
//                 <stop
//                   offset="0%"
//                   stopColor="#4F7CFF"
//                 />

//                 <stop
//                   offset="30%"
//                   stopColor="#6378FF"
//                 />

//                 <stop
//                   offset="50%"
//                   stopColor="#806FFF"
//                 />

//                 <stop
//                   offset="70%"
//                   stopColor="#716FFF"
//                 />

//                 <stop
//                   offset="100%"
//                   stopColor="#4F7CFF"
//                 />
//               </linearGradient>

//               {/* =================================================
//                   MOVING BLUE / VIOLET
//               ================================================= */}

//               <linearGradient
//                 id="heroNeonMoving"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="0%"
//               >
//                 <stop
//                   offset="0%"
//                   stopColor="#397BFF"
//                 />

//                 <stop
//                   offset="25%"
//                   stopColor="#5C76FF"
//                 />

//                 <stop
//                   offset="50%"
//                   stopColor="#8B6CFF"
//                 />

//                 <stop
//                   offset="75%"
//                   stopColor="#6475FF"
//                 />

//                 <stop
//                   offset="100%"
//                   stopColor="#397BFF"
//                 />
//               </linearGradient>

//             </defs>
//           </svg>

//           {/* ===================================================
//               CENTRAL IMAGE
//           =================================================== */}

//           <motion.div
//             className="
//               absolute
//               left-1/3
//               top-1

//               -translate-x-1/2
//               -translate-y-1/2

//               w-[42%]

//               z-20
//             "
//             initial={{
//               opacity: 0,
//               scale: 0.96,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >

//             {/* =================================================
//                 SOFT LIGHT
//             ================================================= */}

//             <motion.div
//               className="
//                 absolute

//                 left-1/5
//                 top-1/3

//                 -translate-x-1/3
//                 -translate-y-1/2

//                 w-[100%]
//                 aspect-square

//                 rounded-full

//                 bg-[linear-gradient(135deg,#286BFF,#735CFF,#4B72FF)]

//                 blur-[80px]

//                 -z-10
//               "
//               initial={{
//                 opacity: 0,
//                 scale: 0.72,
//               }}
//               animate={{
//                 opacity: [
//                   0.18,
//                   0.30,
//                   0.22,
//                   0.31,
//                   0.20,
//                 ],

//                 scale: [
//                   0.78,
//                   1,
//                   0.91,
//                   1.03,
//                   0.94,
//                 ],
//               }}
//               transition={{
//                 delay: 0.4,
//                 duration: 5.5,
//                 repeat: Infinity,
//                 repeatType: "mirror",
//                 ease: "easeInOut",
//               }}
//             />

//             {/* =================================================
//                 ORIGINAL PNG
//             ================================================= */}

//             <img
//               src="/images/hero-stack.png"
//               alt="Technology stack"
//               className="
//                 relative
//                 block

//                 w-full
//                 h-auto

//                 select-none
//               "
//               draggable={false}
//             />

//           </motion.div>

//           {/* ===================================================
//               CONNECTING LINES
//           =================================================== */}

//           <svg
//             className="
//               absolute
//               inset-0

//               w-full
//               h-full

//               z-10

//               pointer-events-none

//               overflow-visible
//             "
//             viewBox="0 0 100 100"
//             preserveAspectRatio="none"
//           >

//             <defs>

//               {/* ===============================================
//                   ANIMATED LINE GRADIENT
//               =============================================== */}

//               <motion.linearGradient
//                 id="heroLineGradient"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="0%"
//                 animate={{
//                   x1: [
//                     "0%",
//                     "25%",
//                     "0%",
//                   ],

//                   x2: [
//                     "100%",
//                     "75%",
//                     "100%",
//                   ],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >

//                 <stop
//                   offset="0%"
//                   stopColor="#4F7CFF"
//                   stopOpacity="0.75"
//                 />

//                 <stop
//                   offset="50%"
//                   stopColor="#806FFF"
//                   stopOpacity="0.95"
//                 />

//                 <stop
//                   offset="100%"
//                   stopColor="#4F7CFF"
//                   stopOpacity="0.75"
//                 />

//               </motion.linearGradient>

//             </defs>

//             {ITEMS.map((item, index) => {

//               const {
//                 lineStart,
//                 lineEnd,
//               } = item;

//               /* ===============================================
//                   SPACE BEFORE END DOT
//               =============================================== */

//               const gap = 0.9;

//               const dx =
//                 lineEnd.x -
//                 lineStart.x;

//               const dy =
//                 lineEnd.y -
//                 lineStart.y;

//               const length =
//                 Math.sqrt(
//                   dx * dx +
//                   dy * dy
//                 );

//               const endX =
//                 lineEnd.x -
//                 (dx / length) *
//                   gap;

//               const endY =
//                 lineEnd.y -
//                 (dy / length) *
//                   gap;

//               const path = `
//                 M ${lineStart.x} ${lineStart.y}
//                 L ${endX} ${endY}
//               `;

//               return (
//                 <g
//                   key={item.id}
//                 >

//                   {/* =========================================
//                       SOFT DOTTED GLOW
//                   ========================================= */}

//                   <motion.path
//                     d={path}
//                     fill="none"

//                     stroke="url(#heroLineGradient)"

//                     strokeWidth="0.55"

//                     strokeDasharray="0.08 1.15"

//                     strokeLinecap="round"

//                     opacity="0.14"

//                     filter="blur(1.2px)"

//                     pathLength={1}

//                     initial={{
//                       pathLength: 0,
//                       opacity: 0,
//                     }}

//                     animate={{
//                       pathLength: 1,
//                       opacity: 0.14,
//                     }}

//                     transition={{
//                       delay:
//                         1 +
//                         index * 0.12,

//                       duration: 0.9,

//                       ease: [
//                         0.22,
//                         1,
//                         0.36,
//                         1,
//                       ],
//                     }}
//                   />

//                   {/* =========================================
//                       MAIN DOTTED LINE

//                       NEVER CONTINUOUS
//                   ========================================= */}

//                   <motion.path
//                     d={path}
//                     fill="none"

//                     stroke="url(#heroLineGradient)"

//                     strokeWidth="0.24"

//                     strokeDasharray="0.12 1.05"

//                     strokeLinecap="round"

//                     pathLength={1}

//                     initial={{
//                       pathLength: 0,
//                       opacity: 0,
//                     }}

//                     animate={{
//                       pathLength: 1,
//                       opacity: 0.82,

//                       strokeDashoffset: [
//                         0,
//                         -2.2,
//                       ],
//                     }}

//                     transition={{
//                       pathLength: {
//                         delay:
//                           1 +
//                           index * 0.12,

//                         duration: 0.8,

//                         ease: [
//                           0.22,
//                           1,
//                           0.36,
//                           1,
//                         ],
//                       },

//                       opacity: {
//                         delay:
//                           1 +
//                           index * 0.12,

//                         duration: 0.5,
//                       },

//                       strokeDashoffset: {
//                         delay:
//                           1.8 +
//                           index * 0.12,

//                         duration: 3.2,

//                         repeat: Infinity,

//                         ease: "linear",
//                       },
//                     }}
//                   />

//                   {/* =========================================
//                       SEPARATED END DOT
//                   ========================================= */}

//                   <motion.circle
//                     cx={lineEnd.x}
//                     cy={lineEnd.y}

//                     r="0.38"

//                     fill="url(#heroLineGradient)"

//                     initial={{
//                       opacity: 0,
//                       scale: 0.4,
//                     }}

//                     animate={{
//                       opacity: [
//                         0.55,
//                         0.95,
//                         0.55,
//                       ],

//                       scale: [
//                         0.9,
//                         1.12,
//                         0.9,
//                       ],
//                     }}

//                     transition={{
//                       delay:
//                         1.9 +
//                         index * 0.12,

//                       duration: 2.8,

//                       repeat: Infinity,

//                       ease: "easeInOut",
//                     }}
//                   />

//                 </g>
//               );
//             })}

//           </svg>

//           {/* ===================================================
//               ICON CONTAINERS
//           =================================================== */}

//           {ITEMS.map(
//             (item, index) => {

//               const Icon =
//                 item.icon;

//               return (
//                 <motion.div
//                   key={`${item.id}-icon`}

//                   className="
//                     absolute
//                     z-30

//                     -translate-x-1/2
//                     -translate-y-1/2
//                   "

//                   style={{
//                     left:
//                       item.iconPosition
//                         .left,

//                     top:
//                       item.iconPosition
//                         .top,
//                   }}

//                   initial={{
//                     opacity: 0,
//                     scale: 0.7,
//                     y: 5,
//                   }}

//                   animate={{
//                     opacity: 1,
//                     scale: 1,

//                     y: [
//                       0,
//                       -1.5,
//                       0,
//                     ],
//                   }}

//                   transition={{
//                     opacity: {
//                       delay:
//                         1.65 +
//                         index * 0.12,

//                       duration: 0.45,
//                     },

//                     scale: {
//                       delay:
//                         1.65 +
//                         index * 0.12,

//                       duration: 0.55,

//                       ease: [
//                         0.22,
//                         1,
//                         0.36,
//                         1,
//                       ],
//                     },

//                     y: {
//                       delay:
//                         2.3 +
//                         index * 0.12,

//                       duration: 3.5,

//                       repeat: Infinity,

//                       ease: "easeInOut",
//                     },
//                   }}
//                 >

//                   {/* =========================================
//                       HEXAGON
//                   ========================================= */}

//                   <motion.div
//                     className="
//                       relative

//                       w-[46px]
//                       h-[46px]

//                       max-[1229px]:w-[42px]
//                       max-[1229px]:h-[42px]

//                       max-[1023px]:w-[38px]
//                       max-[1023px]:h-[38px]
//                     "

//                     animate={{
//                       opacity: [
//                         0.92,
//                         1,
//                         0.92,
//                       ],
//                     }}

//                     transition={{
//                       duration: 3.5,

//                       repeat: Infinity,

//                       ease: "easeInOut",
//                     }}
//                   >

//                     <svg
//                       viewBox="0 0 100 100"

//                       className="
//                         absolute
//                         inset-0

//                         w-full
//                         h-full

//                         overflow-visible
//                       "
//                     >

//                       {/* =====================================
//                           HEXAGON
//                           90 DEGREE ROTATION
//                       ===================================== */}

//                       <polygon
//                         points="
//                           50,5
//                           89,27.5
//                           89,72.5
//                           50,95
//                           11,72.5
//                           11,27.5
//                         "

//                         fill="rgba(3, 7, 24, 0.62)"

//                         stroke="url(#heroNeonBlueViolet)"

//                         strokeWidth="1.5"

//                         strokeLinejoin="round"

//                         transform="
//                           rotate(90 50 50)
//                         "
//                       />

//                       {/* =====================================
//                           SUBTLE GLOW
//                       ===================================== */}

//                       <motion.polygon
//                         points="
//                           50,5
//                           89,27.5
//                           89,72.5
//                           50,95
//                           11,72.5
//                           11,27.5
//                         "

//                         fill="none"

//                         stroke="url(#heroNeonMoving)"

//                         strokeWidth="2"

//                         strokeLinejoin="round"

//                         opacity="0.22"

//                         transform="
//                           rotate(90 50 50)
//                         "

//                         animate={{
//                           opacity: [
//                             0.12,
//                             0.30,
//                             0.12,
//                           ],
//                         }}

//                         transition={{
//                           duration: 3,

//                           repeat: Infinity,

//                           ease: "easeInOut",
//                         }}
//                       />

//                     </svg>

//                     {/* =========================================
//                         INTERNAL LIGHT
//                     ========================================= */}

//                     <motion.div
//                       className="
//                         absolute
//                         inset-[27%]

//                         rounded-full

//                         bg-[linear-gradient(135deg,rgba(55,120,255,.18),rgba(145,95,255,.20))]

//                         blur-[8px]

//                         pointer-events-none
//                       "

//                       animate={{
//                         opacity: [
//                           0.18,
//                           0.34,
//                           0.18,
//                         ],

//                         scale: [
//                           0.88,
//                           1.06,
//                           0.88,
//                         ],
//                       }}

//                       transition={{
//                         duration: 3.2,

//                         repeat: Infinity,

//                         ease: "easeInOut",
//                       }}
//                     />

//                     {/* =========================================
//                         ICON
//                     ========================================= */}

//                     <motion.div
//                       className="
//                         absolute
//                         inset-0

//                         flex
//                         items-center
//                         justify-center
//                       "

//                       animate={{
//                         opacity: [
//                           0.82,
//                           1,
//                           0.82,
//                         ],
//                       }}

//                       transition={{
//                         duration: 3,

//                         repeat: Infinity,

//                         ease: "easeInOut",
//                       }}
//                     >

//                       <Icon
//                         className="
//                           relative
//                           z-10

//                           w-[19px]
//                           h-[19px]

//                           max-[1229px]:w-[17px]
//                           max-[1229px]:h-[17px]

//                           max-[1023px]:w-[15px]
//                           max-[1023px]:h-[15px]
//                         "

//                         stroke="url(#heroNeonBlueViolet)"

//                         strokeWidth={1.8}
//                       />

//                     </motion.div>

//                   </motion.div>

//                 </motion.div>
//               );
//             }
//           )}

//           {/* ===================================================
//               DESKTOP TEXT
//           =================================================== */}

//           {ITEMS.map(
//             (item, index) => (

//               <motion.div
//                 key={`${item.id}-text`}

//                 className="
//                   absolute
//                   z-30

//                   w-[180px]

//                   max-[1229px]:w-[165px]

//                   max-[1023px]:w-[145px]
//                 "

//                 style={{
//                   left:
//                     item.textPosition
//                       .left,

//                   top:
//                     item.textPosition
//                       .top,
//                 }}

//                 initial={{
//                   opacity: 0,
//                   y: 10,
//                 }}

//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}

//                 transition={{
//                   delay:
//                     1.9 +
//                     index * 0.1,

//                   duration: 0.65,

//                   ease: [
//                     0.22,
//                     1,
//                     0.36,
//                     1,
//                   ],
//                 }}
//               >

//                 <h3
//                   className="
//                     text-[17px]

//                     max-[1229px]:text-[16px]

//                     max-[1023px]:text-[14px]

//                     font-semibold

//                     tracking-[-0.02em]

//                     text-[#AFAEFF]

//                     mb-2

//                     max-[1023px]:mb-1
//                   "
//                 >
//                   {item.title}
//                 </h3>

//                 <div
//                   className="
//                     text-[14px]

//                     max-[1229px]:text-[13px]

//                     max-[1023px]:text-[12px]

//                     leading-[1.65]

//                     text-white/70
//                   "
//                 >
//                   {item.description.map(
//                     (line) => (
//                       <div
//                         key={`${item.id}-${line}`}
//                       >
//                         {line}
//                       </div>
//                     )
//                   )}
//                 </div>

//               </motion.div>
//             )
//           )}

//         </div>
//       </div>


//       {/* =====================================================
//           MOBILE VERSION

//           < 768px

//           We DON'T try to force the desktop coordinates
//           into a phone screen.

//           Instead:
//           - image centered
//           - four items arranged around it
//           - everything remains inside the viewport
//       ===================================================== */}

//       <div
//         className="
//           hidden

//           max-[767px]:block

//           relative

//           w-full

//           min-h-[620px]

//           overflow-hidden
//         "
//       >

//         {/* ===================================================
//             MOBILE CENTRAL AREA
//         =================================================== */}

//         <div
//           className="
//             absolute

//             left-1/2
//             top-[42%]

//             -translate-x-1/2
//             -translate-y-1/2

//             w-[58%]

//             max-[480px]:w-[62%]

//             z-20
//           "
//         >

//           {/* ===============================================
//               MOBILE LIGHT
//           =============================================== */}

//           <motion.div
//             className="
//               absolute

//               left-1/2
//               top-1/2

//               -translate-x-1/2
//               -translate-y-1/2

//               w-[110%]
//               aspect-square

//               rounded-full

//               bg-[linear-gradient(135deg,#286BFF,#735CFF,#4B72FF)]

//               blur-[55px]

//               -z-10
//             "

//             animate={{
//               opacity: [
//                 0.18,
//                 0.30,
//                 0.20,
//                 0.28,
//                 0.18,
//               ],

//               scale: [
//                 0.85,
//                 1,
//                 0.92,
//                 1.03,
//                 0.90,
//               ],
//             }}

//             transition={{
//               duration: 5,

//               repeat: Infinity,

//               repeatType: "mirror",

//               ease: "easeInOut",
//             }}
//           />

//           <motion.img
//             src="/images/hero-stack.png"
//             alt="Technology stack"

//             className="
//               relative

//               block

//               w-full
//               h-auto

//               select-none
//             "

//             draggable={false}

//             initial={{
//               opacity: 0,
//               scale: 0.9,
//             }}

//             animate={{
//               opacity: 1,
//               scale: 1,
//             }}

//             transition={{
//               duration: 0.8,

//               ease: [
//                 0.22,
//                 1,
//                 0.36,
//                 1,
//               ],
//             }}
//           />

//         </div>


//         {/* ===================================================
//             MOBILE ITEMS
//         =================================================== */}

//         {MOBILE_ITEMS.map(
//           (item, index) => {

//             const Icon =
//               item.icon;

//             const positions = [
//               {
//                 left: "7%",
//                 top: "8%",
//                 align: "left",
//               },

//               {
//                 right: "7%",
//                 top: "8%",
//                 align: "right",
//               },

//               {
//                 left: "7%",
//                 bottom: "5%",
//                 align: "left",
//               },

//               {
//                 right: "7%",
//                 bottom: "5%",
//                 align: "right",
//               },
//             ];

//             const position =
//               positions[index];

//             return (
//               <motion.div
//                 key={item.id}

//                 className="
//                   absolute

//                   z-30

//                   w-[125px]

//                   max-[480px]:w-[112px]
//                 "

//                 style={{
//                   left:
//                     "left" in position
//                       ? position.left
//                       : undefined,

//                   right:
//                     "right" in position
//                       ? position.right
//                       : undefined,

//                   top:
//                     "top" in position
//                       ? position.top
//                       : undefined,

//                   bottom:
//                     "bottom" in position
//                       ? position.bottom
//                       : undefined,
//                 }}

//                 initial={{
//                   opacity: 0,
//                   y: 10,
//                 }}

//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}

//                 transition={{
//                   delay:
//                     0.8 +
//                     index * 0.12,

//                   duration: 0.5,

//                   ease: [
//                     0.22,
//                     1,
//                     0.36,
//                     1,
//                   ],
//                 }}
//               >

//                 <div
//                   className={`
//                     flex
//                     flex-col
//                     gap-2

//                     ${
//                       position.align ===
//                       "right"
//                         ? "items-end text-right"
//                         : "items-start text-left"
//                     }
//                   `}
//                 >

//                   {/* =========================================
//                       MOBILE HEXAGON
//                   ========================================= */}

//                   <motion.div
//                     className="
//                       relative

//                       w-[38px]
//                       h-[38px]

//                       max-[480px]:w-[34px]
//                       max-[480px]:h-[34px]
//                     "

//                     animate={{
//                       opacity: [
//                         0.9,
//                         1,
//                         0.9,
//                       ],

//                       y: [
//                         0,
//                         -1,
//                         0,
//                       ],
//                     }}

//                     transition={{
//                       duration: 3,

//                       repeat: Infinity,

//                       ease: "easeInOut",
//                     }}
//                   >

//                     <svg
//                       viewBox="0 0 100 100"

//                       className="
//                         absolute
//                         inset-0

//                         w-full
//                         h-full
//                       "
//                     >

//                       <defs>

//                         <linearGradient
//                           id={`mobile-gradient-${index}`}

//                           x1="0%"
//                           y1="0%"

//                           x2="100%"
//                           y2="100%"
//                         >

//                           <stop
//                             offset="0%"
//                             stopColor="#4F7CFF"
//                           />

//                           <stop
//                             offset="50%"
//                             stopColor="#806FFF"
//                           />

//                           <stop
//                             offset="100%"
//                             stopColor="#4F7CFF"
//                           />

//                         </linearGradient>

//                       </defs>

//                       <polygon
//                         points="
//                           50,5
//                           89,27.5
//                           89,72.5
//                           50,95
//                           11,72.5
//                           11,27.5
//                         "

//                         fill="rgba(3,7,24,.68)"

//                         stroke={`url(#mobile-gradient-${index})`}

//                         strokeWidth="1.7"

//                         strokeLinejoin="round"

//                         transform="
//                           rotate(90 50 50)
//                         "
//                       />

//                     </svg>

//                     <div
//                       className="
//                         absolute
//                         inset-0

//                         flex
//                         items-center
//                         justify-center
//                       "
//                     >

//                       <Icon
//                         className="
//                           w-[16px]
//                           h-[16px]

//                           max-[480px]:w-[14px]
//                           max-[480px]:h-[14px]
//                         "

//                         stroke="#6578FF"

//                         strokeWidth={1.8}
//                       />

//                     </div>

//                   </motion.div>


//                   {/* =========================================
//                       MOBILE TEXT
//                   ========================================= */}

//                   <div>

//                     <h3
//                       className="
//                         text-[14px]

//                         max-[480px]:text-[13px]

//                         font-semibold

//                         text-[#AFAEFF]

//                         mb-1
//                       "
//                     >
//                       {item.title}
//                     </h3>

//                     <div
//                       className="
//                         text-[11px]

//                         max-[480px]:text-[10px]

//                         leading-[1.5]

//                         text-white/65
//                       "
//                     >

//                       {item.description.map(
//                         (line) => (
//                           <div
//                             key={`${item.id}-${line}`}
//                           >
//                             {line}
//                           </div>
//                         )
//                       )}

//                     </div>

//                   </div>

//                 </div>

//               </motion.div>
//             );
//           }
//         )}

//       </div>
//     </>
//   );
// }


"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Box,
  Code2,
  Rocket,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const ITEMS = [
  {
    id: "analysis",
    title: "Analysis",
    description: ["Understand", "your needs"],
    icon: BarChart3,

    lineStart: { x: 36.0, y: 39.5 },
    lineEnd: { x: 23.8, y: 20.8 },

    iconPosition: {
      left: "15%",
      top: "10%",
    },

    textPosition: {
      left: "-3%",
      top: "-5%",
    },
  },

  {
    id: "deployment",
    title: "Deployment",
    description: ["Ensure performance", "and scalability"],
    icon: Rocket,

    lineStart: { x: 35.5, y: 61 },
    lineEnd: { x: 23.8, y: 85 },

    iconPosition: {
      left: "15%",
      top: "80%",
    },

    textPosition: {
      left: "-3%",
      top: "90%",
    },
  },

  {
    id: "design",
    title: "Design",
    description: ["Design", "effective", "solutions"],
    icon: Box,

    lineStart: { x: 64.5, y: 49 },
    lineEnd: { x: 88.2, y: 22.8 },

    iconPosition: {
      left: "88%",
      top: "10%",
    },

    textPosition: {
      left: "98%",
      top: "-9%",
    },
  },

  {
    id: "development",
    title: "Development",
    description: ["Build with modern", "technologies"],
    icon: Code2,

    lineStart: { x: 72.8, y: 61 },
    lineEnd: { x: 87.5, y: 85 },

    iconPosition: {
      left: "88%",
      top: "80%",
    },

    textPosition: {
      left: "88%",
      top: "95%",
    },
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function HeroGraphic() {
  return (
    <>
      {/* =====================================================
          DESKTOP / TABLET VERSION

          >= 1230px
          → original size

          1024 - 1229px
          → 90%

          768 - 1023px
          → 78%

          < 768px
          → ENTIRE HERO GRAPHIC IS HIDDEN
      ===================================================== */}

      <div
        className="
          relative
          w-full
          aspect-[16/9]

          max-[767px]:hidden
        "
      >
        {/* ===================================================
            RESPONSIVE STAGE
        =================================================== */}

        <div
          className="
            absolute
            inset-0
            origin-center

            scale-100

            max-[1229px]:scale-[0.90]

            max-[1023px]:scale-[0.78]
          "
        >
          {/* =================================================
              GLOBAL SVG DEFINITIONS
          ================================================= */}

          <svg
            className="absolute w-0 h-0"
            aria-hidden="true"
          >
            <defs>

              {/* =================================================
                  BLUE + VIOLET GRADIENT
              ================================================= */}

              <linearGradient
                id="heroNeonBlueViolet"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#4F7CFF"
                />

                <stop
                  offset="30%"
                  stopColor="#6378FF"
                />

                <stop
                  offset="50%"
                  stopColor="#806FFF"
                />

                <stop
                  offset="70%"
                  stopColor="#716FFF"
                />

                <stop
                  offset="100%"
                  stopColor="#4F7CFF"
                />
              </linearGradient>

              {/* =================================================
                  MOVING BLUE / VIOLET
              ================================================= */}

              <linearGradient
                id="heroNeonMoving"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="#397BFF"
                />

                <stop
                  offset="25%"
                  stopColor="#5C76FF"
                />

                <stop
                  offset="50%"
                  stopColor="#8B6CFF"
                />

                <stop
                  offset="75%"
                  stopColor="#6475FF"
                />

                <stop
                  offset="100%"
                  stopColor="#397BFF"
                />
              </linearGradient>

            </defs>
          </svg>

          {/* ===================================================
              CENTRAL IMAGE
          =================================================== */}

          <motion.div
            className="
              absolute

              left-1/3
              top-1

              -translate-x-1/2
              -translate-y-1/2

              w-[42%]

              z-20
            "
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* =================================================
                SOFT LIGHT
            ================================================= */}

            <motion.div
              className="
                absolute

                left-1/5
                top-1/3

                -translate-x-1/3
                -translate-y-1/2

                w-[100%]
                aspect-square

                rounded-full

                bg-[linear-gradient(135deg,#286BFF,#735CFF,#4B72FF)]

                blur-[80px]

                -z-10
              "
              initial={{
                opacity: 0,
                scale: 0.72,
              }}
              animate={{
                opacity: [
                  0.18,
                  0.30,
                  0.22,
                  0.31,
                  0.20,
                ],

                scale: [
                  0.78,
                  1,
                  0.91,
                  1.03,
                  0.94,
                ],
              }}
              transition={{
                delay: 0.4,
                duration: 5.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />

            {/* =================================================
                ORIGINAL PNG
            ================================================= */}

            <img
              src="/images/hero-stack.png"
              alt="Technology stack"
              className="
                relative
                block

                w-full
                h-auto

                select-none
              "
              draggable={false}
            />

          </motion.div>

          {/* ===================================================
              CONNECTING LINES
          =================================================== */}

          <svg
            className="
              absolute
              inset-0

              w-full
              h-full

              z-10

              pointer-events-none

              overflow-visible
            "
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >

            <defs>

              {/* ===============================================
                  ANIMATED LINE GRADIENT
              =============================================== */}

              <motion.linearGradient
                id="heroLineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
                animate={{
                  x1: [
                    "0%",
                    "25%",
                    "0%",
                  ],

                  x2: [
                    "100%",
                    "75%",
                    "100%",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <stop
                  offset="0%"
                  stopColor="#4F7CFF"
                  stopOpacity="0.75"
                />

                <stop
                  offset="50%"
                  stopColor="#806FFF"
                  stopOpacity="0.95"
                />

                <stop
                  offset="100%"
                  stopColor="#4F7CFF"
                  stopOpacity="0.75"
                />

              </motion.linearGradient>

            </defs>

            {ITEMS.map((item, index) => {

              const {
                lineStart,
                lineEnd,
              } = item;

              /* ===============================================
                  SPACE BEFORE END DOT
              =============================================== */

              const gap = 0.9;

              const dx =
                lineEnd.x -
                lineStart.x;

              const dy =
                lineEnd.y -
                lineStart.y;

              const length =
                Math.sqrt(
                  dx * dx +
                  dy * dy
                );

              const endX =
                lineEnd.x -
                (dx / length) *
                  gap;

              const endY =
                lineEnd.y -
                (dy / length) *
                  gap;

              const path = `
                M ${lineStart.x} ${lineStart.y}
                L ${endX} ${endY}
              `;

              return (
                <g
                  key={item.id}
                >

                  {/* =========================================
                      SOFT DOTTED GLOW
                  ========================================= */}

                  <motion.path
                    d={path}
                    fill="none"

                    stroke="url(#heroLineGradient)"

                    strokeWidth="0.55"

                    strokeDasharray="0.08 1.15"

                    strokeLinecap="round"

                    opacity="0.14"

                    filter="blur(1.2px)"

                    pathLength={1}

                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}

                    animate={{
                      pathLength: 1,
                      opacity: 0.14,
                    }}

                    transition={{
                      delay:
                        1 +
                        index * 0.12,

                      duration: 0.9,

                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                  />

                  {/* =========================================
                      MAIN DOTTED LINE
                  ========================================= */}

                  <motion.path
                    d={path}
                    fill="none"

                    stroke="url(#heroLineGradient)"

                    strokeWidth="0.24"

                    strokeDasharray="0.12 1.05"

                    strokeLinecap="round"

                    pathLength={1}

                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}

                    animate={{
                      pathLength: 1,
                      opacity: 0.82,

                      strokeDashoffset: [
                        0,
                        -2.2,
                      ],
                    }}

                    transition={{
                      pathLength: {
                        delay:
                          1 +
                          index * 0.12,

                        duration: 0.8,

                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      },

                      opacity: {
                        delay:
                          1 +
                          index * 0.12,

                        duration: 0.5,
                      },

                      strokeDashoffset: {
                        delay:
                          1.8 +
                          index * 0.12,

                        duration: 3.2,

                        repeat: Infinity,

                        ease: "linear",
                      },
                    }}
                  />

                  {/* =========================================
                      SEPARATED END DOT
                  ========================================= */}

                  <motion.circle
                    cx={lineEnd.x}
                    cy={lineEnd.y}

                    r="0.38"

                    fill="url(#heroLineGradient)"

                    initial={{
                      opacity: 0,
                      scale: 0.4,
                    }}

                    animate={{
                      opacity: [
                        0.55,
                        0.95,
                        0.55,
                      ],

                      scale: [
                        0.9,
                        1.12,
                        0.9,
                      ],
                    }}

                    transition={{
                      delay:
                        1.9 +
                        index * 0.12,

                      duration: 2.8,

                      repeat: Infinity,

                      ease: "easeInOut",
                    }}
                  />

                </g>
              );
            })}

          </svg>

          {/* ===================================================
              ICON CONTAINERS
          =================================================== */}

          {ITEMS.map(
            (item, index) => {

              const Icon =
                item.icon;

              return (
                <motion.div
                  key={`${item.id}-icon`}

                  className="
                    absolute
                    z-30

                    -translate-x-1/2
                    -translate-y-1/2
                  "

                  style={{
                    left:
                      item.iconPosition
                        .left,

                    top:
                      item.iconPosition
                        .top,
                  }}

                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    y: 5,
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1,

                    y: [
                      0,
                      -1.5,
                      0,
                    ],
                  }}

                  transition={{
                    opacity: {
                      delay:
                        1.65 +
                        index * 0.12,

                      duration: 0.45,
                    },

                    scale: {
                      delay:
                        1.65 +
                        index * 0.12,

                      duration: 0.55,

                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    },

                    y: {
                      delay:
                        2.3 +
                        index * 0.12,

                      duration: 3.5,

                      repeat: Infinity,

                      ease: "easeInOut",
                    },
                  }}
                >

                  {/* =========================================
                      HEXAGON
                  ========================================= */}

                  <motion.div
                    className="
                      relative

                      w-[46px]
                      h-[46px]

                      max-[1229px]:w-[42px]
                      max-[1229px]:h-[42px]

                      max-[1023px]:w-[38px]
                      max-[1023px]:h-[38px]
                    "

                    animate={{
                      opacity: [
                        0.92,
                        1,
                        0.92,
                      ],
                    }}

                    transition={{
                      duration: 3.5,

                      repeat: Infinity,

                      ease: "easeInOut",
                    }}
                  >

                    <svg
                      viewBox="0 0 100 100"

                      className="
                        absolute
                        inset-0

                        w-full
                        h-full

                        overflow-visible
                      "
                    >

                      {/* =====================================
                          HEXAGON
                          90 DEGREE ROTATION
                      ===================================== */}

                      <polygon
                        points="
                          50,5
                          89,27.5
                          89,72.5
                          50,95
                          11,72.5
                          11,27.5
                        "

                        fill="rgba(3, 7, 24, 0.62)"

                        stroke="url(#heroNeonBlueViolet)"

                        strokeWidth="1.5"

                        strokeLinejoin="round"

                        transform="
                          rotate(90 50 50)
                        "
                      />

                      {/* =====================================
                          SUBTLE GLOW
                      ===================================== */}

                      <motion.polygon
                        points="
                          50,5
                          89,27.5
                          89,72.5
                          50,95
                          11,72.5
                          11,27.5
                        "

                        fill="none"

                        stroke="url(#heroNeonMoving)"

                        strokeWidth="2"

                        strokeLinejoin="round"

                        opacity="0.22"

                        transform="
                          rotate(90 50 50)
                        "

                        animate={{
                          opacity: [
                            0.12,
                            0.30,
                            0.12,
                          ],
                        }}

                        transition={{
                          duration: 3,

                          repeat: Infinity,

                          ease: "easeInOut",
                        }}
                      />

                    </svg>

                    {/* =========================================
                        INTERNAL LIGHT
                    ========================================= */}

                    <motion.div
                      className="
                        absolute
                        inset-[27%]

                        rounded-full

                        bg-[linear-gradient(135deg,rgba(55,120,255,.18),rgba(145,95,255,.20))]

                        blur-[8px]

                        pointer-events-none
                      "

                      animate={{
                        opacity: [
                          0.18,
                          0.34,
                          0.18,
                        ],

                        scale: [
                          0.88,
                          1.06,
                          0.88,
                        ],
                      }}

                      transition={{
                        duration: 3.2,

                        repeat: Infinity,

                        ease: "easeInOut",
                      }}
                    />

                    {/* =========================================
                        ICON
                    ========================================= */}

                    <motion.div
                      className="
                        absolute
                        inset-0

                        flex
                        items-center
                        justify-center
                      "

                      animate={{
                        opacity: [
                          0.82,
                          1,
                          0.82,
                        ],
                      }}

                      transition={{
                        duration: 3,

                        repeat: Infinity,

                        ease: "easeInOut",
                      }}
                    >

                      <Icon
                        className="
                          relative
                          z-10

                          w-[19px]
                          h-[19px]

                          max-[1229px]:w-[17px]
                          max-[1229px]:h-[17px]

                          max-[1023px]:w-[15px]
                          max-[1023px]:h-[15px]
                        "

                        stroke="url(#heroNeonBlueViolet)"

                        strokeWidth={1.8}
                      />

                    </motion.div>

                  </motion.div>

                </motion.div>
              );
            }
          )}

          {/* ===================================================
              DESKTOP TEXT
          =================================================== */}

          {ITEMS.map(
            (item, index) => (

              <motion.div
                key={`${item.id}-text`}

                className="
                  absolute
                  z-30

                  w-[180px]

                  max-[1229px]:w-[165px]

                  max-[1023px]:w-[145px]
                "

                style={{
                  left:
                    item.textPosition
                      .left,

                  top:
                    item.textPosition
                      .top,
                }}

                initial={{
                  opacity: 0,
                  y: 10,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay:
                    1.9 +
                    index * 0.1,

                  duration: 0.65,

                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
              >

                <h3
                  className="
                    text-[17px]

                    max-[1229px]:text-[16px]

                    max-[1023px]:text-[14px]

                    font-semibold

                    tracking-[-0.02em]

                    text-[#AFAEFF]

                    mb-2

                    max-[1023px]:mb-1
                  "
                >
                  {item.title}
                </h3>

                <div
                  className="
                    text-[14px]

                    max-[1229px]:text-[13px]

                    max-[1023px]:text-[12px]

                    leading-[1.65]

                    text-white/70
                  "
                >
                  {item.description.map(
                    (line) => (
                      <div
                        key={`${item.id}-${line}`}
                      >
                        {line}
                      </div>
                    )
                  )}
                </div>

              </motion.div>
            )
          )}

        </div>
      </div>
    </>
  );
}