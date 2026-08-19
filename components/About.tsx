"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Target,
  Users,
  ArrowUpRight,
  Layers,
  CalendarDays,
  Wrench,
  Heart,
} from "lucide-react";

import { about, skillGroups, projectsByYear } from "@/lib/content";

/* =========================================================
   PORTRAIT CONFIGURATION
========================================================= */

/*
  DESKTOP ONLY

  Controls how far the portrait continues below
  the stats bar.
*/
const PORTRAIT_BELOW_BAR = 35;

/*
  Small floating animation.
*/
const PORTRAIT_FLOAT = 2;


/* =========================================================
   FACTS
========================================================= */

const facts = [
  {
    Icon: GraduationCap,
    text: "Engineering Degree & Master's Degree, Computer Systems Engineering — ESI-SBA",
  },

  {
    Icon: Target,
    text: "Solo-built and defended a full graduation project end-to-end",
  },
  {
    Icon: Users,
    text: "Comfortable both leading a technical track and working in a team",
  },
];


/* =========================================================
   COUNTERS
========================================================= */

const projectCount = projectsByYear.reduce(
  (sum, year) => sum + year.projects.length,
  0
);

const skillCount = skillGroups.reduce(
  (sum, group) => sum + group.items.length,
  0
);


/* =========================================================
   STATS
========================================================= */
/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    Icon: CalendarDays,
    value: "5",
    label: "Years of Study",
  },
  {
    Icon: Layers,
    value: "66+",
    label: "Academic Modules",
  },
  {
    Icon: Users,
    value: "10+",
    label: "Team Projects",
  },
  {
    Icon: Heart,
    value: "100%",
    label: "Commitment",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        mx-auto
        w-full
        max-w-6xl
        px-4
        py-12
        sm:px-6
        sm:py-16
        lg:px-8
        lg:py-24
      "
    >

      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <p className="eyebrow">About Me</p>
        <span className="section-underline" />
      </motion.div>


      {/* =====================================================
          MAIN ABOUT AREA
      ===================================================== */}

      <div className="relative mt-6 sm:mt-8">

        {/* ===================================================
            BACKGROUND LIGHT
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[-120px]
            top-[-140px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#6647ff]/[0.055]
            blur-[110px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-180px]
            top-[-160px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#4f6cff]/[0.035]
            blur-[120px]
          "
        />


        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-10
            grid
            gap-5

            md:grid-cols-[205px_minmax(0,1fr)]
            md:gap-7

            lg:grid-cols-[225px_minmax(0,1fr)]
            lg:gap-8

            xl:grid-cols-[245px_minmax(0,1fr)]
            xl:gap-9
          "
        >

          {/* =================================================
              DESKTOP PORTRAIT SPACE

              This only exists on desktop.

              On mobile we don't reserve this empty space.
          ================================================= */}

          <div
            className="
              relative
              hidden

              md:block
              md:h-[310px]

              lg:h-[330px]

              xl:h-[345px]
            "
          />


          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div className="min-w-0">


            {/* =================================================
                MOBILE INTRO

                IMAGE LEFT
                TEXT RIGHT

                ONLY MOBILE
            ================================================= */}

            <div
              className="
                flex
                items-center
                gap-3

                md:hidden
              "
            >

              {/* -----------------------------------------------
                  MOBILE PORTRAIT
              ----------------------------------------------- */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -12,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                }}
                className="
                  relative
                  flex
                  w-[105px]
                  shrink-0
                  items-end
                  justify-center
                  self-stretch
                  overflow-visible
                "
              >

                {/* Purple glow */}

                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    h-[125px]
                    w-[90px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#754cff]/[0.16]
                    blur-[38px]
                  "
                  animate={{
                    opacity: [0.4, 0.62, 0.4],
                    scale: [0.96, 1.03, 0.96],
                  }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.img
                  src="/portrait/asma-portrait.png"
                  alt="Asma Benzaoucha"
                  draggable={false}
                  className="
                    relative
                    z-10
                    block
                    h-[145px]
                    w-auto
                    max-w-none
                    object-contain
                    object-bottom
                  "
                  style={{
                    filter:
                      "drop-shadow(0 0 5px rgba(112,76,255,0.42)) drop-shadow(0 0 14px rgba(112,76,255,0.18))",
                  }}

                  animate={{
                    y: [
                      PORTRAIT_FLOAT,
                      0,
                      -PORTRAIT_FLOAT,
                      0,
                      PORTRAIT_FLOAT,
                    ],
                  }}
                  transition={{
                    duration: 5.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

              </motion.div>


              {/* -----------------------------------------------
                  MOBILE INTRO TEXT
              ----------------------------------------------- */}

              <motion.p
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.08,
                }}
                className="
                  min-w-0
                  flex-1
                  text-[0.70rem]
                  leading-[1.55]
                  text-muted

                  xs:text-[0.74rem]
                  sm:text-[0.84rem]
                "
              >
                {about.paragraphs[0]}
              </motion.p>

            </div>


            {/* =================================================
                DESKTOP INTRO

                ONLY DESKTOP
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.08,
              }}
              className="
                hidden

                max-w-3xl
                text-[0.86rem]
                leading-[1.75]
                text-muted

                md:block
                md:text-[0.94rem]

                lg:text-[0.96rem]
              "
            >
              {about.paragraphs[0]}
            </motion.p>


            {/* =================================================
                FACTS
            ================================================= */}

            <div
              className="
                mt-4

                sm:mt-5
              "
            >

              {facts.map((fact, index) => {
                const Icon = fact.Icon;

                return (
                  <motion.div
                    key={fact.text}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.12 + index * 0.07,
                    }}
                    className="
                      relative
                      flex
                      items-start
                      gap-2.5
                      py-2.5

                      sm:gap-3.5
                      sm:py-3
                    "
                  >

                    {/* ---------------------------------------
                        DIVIDER
                    --------------------------------------- */}

                    {index > 0 && (
                      <span
                        className="
                          pointer-events-none
                          absolute
                          left-0
                          right-0
                          top-0
                          h-px
                          bg-white/[0.085]
                        "
                      />
                    )}


                    {/* ---------------------------------------
                        ICON
                    --------------------------------------- */}

                    <span
                      className="
                        mt-0.5
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-accent-soft
                        text-accent-bright

                        sm:h-9
                        sm:w-9
                      "
                    >
                      <Icon
                        className="
                          h-[15px]
                          w-[15px]

                          sm:h-[17px]
                          sm:w-[17px]
                        "
                      />
                    </span>


                    {/* ---------------------------------------
                        TEXT
                    --------------------------------------- */}

                    <span
                      className="
                        min-w-0
                        pt-0.5
                        text-[0.65rem]
                        leading-[1.5]
                        text-ink

                        sm:pt-1
                        sm:text-[0.77rem]

                        md:text-[0.79rem]

                        lg:text-[0.81rem]
                      "
                    >
                      {fact.text}
                    </span>

                  </motion.div>
                );
              })}

            </div>


            {/* =================================================
                LEARN MORE
            ================================================= */}

            <motion.a
              href="#skills"
              initial={{
                opacity: 0,
                y: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                delay: 0.48,
              }}
              className="
                mt-1
                inline-flex
                items-center
                gap-2
                text-[0.78rem]
                font-medium
                text-accent-bright
                transition-all
                duration-200
                hover:gap-3
                hover:text-accent

                sm:mt-2
                sm:text-sm
              "
            >
              Learn More
              <ArrowUpRight
                className="
                  h-3.5
                  w-3.5

                  sm:h-4
                  sm:w-4
                "
              />
            </motion.a>

          </div>
        </div>


        {/* ===================================================
            DESKTOP PORTRAIT

            IMPORTANT:

            This remains EXACTLY the old concept on desktop.

            It is hidden on mobile because mobile has its
            own portrait beside the intro text.
        =================================================== */}

        {/* <motion.img
          src="/portrait/asma-portrait.png"
          alt="Asma Benzaoucha"
          draggable={false}
          className="
            pointer-events-none
            absolute
            left-0
            z-10
            hidden

            h-[275px]
            w-auto
            max-w-none
            object-contain
            object-bottom

            md:block
            md:h-[340px]

            lg:h-[360px]

            xl:h-[375px]
          "
          style={{
            bottom: `calc(
              var(--portrait-bar-offset, 0px)
              + ${PORTRAIT_BELOW_BAR}px
            )`,
            filter:
              "drop-shadow(0 0 7px rgba(112,76,255,0.42)) drop-shadow(0 0 20px rgba(112,76,255,0.20))",
          }}
          animate={{
            y: [
              PORTRAIT_FLOAT,
              0,
              -PORTRAIT_FLOAT,
              0,
              PORTRAIT_FLOAT,
            ],
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        /> */}

<motion.div
  initial={{
    opacity: 0,
    x: -15,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{
    once: true,
  }}
  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}
  className="
    pointer-events-none
    absolute
    left-0
    z-10
    hidden

    md:block
  "
  style={{
    bottom: `calc(
      var(--portrait-bar-offset, 0px)
      + ${PORTRAIT_BELOW_BAR}px
    )`,
  }}
>
  <motion.img
    src="/portrait/asma-portrait.png"
    alt="Asma Benzaoucha"
    draggable={false}
    className="
      block
      h-[275px]
      w-auto
      max-w-none
      object-contain
      object-bottom

      md:h-[340px]

      lg:h-[360px]

      xl:h-[375px]
    "
    style={{
      filter:
        "drop-shadow(0 0 7px rgba(112,76,255,0.42)) drop-shadow(0 0 20px rgba(112,76,255,0.20))",
    }}
    animate={{
      y: [
        PORTRAIT_FLOAT,
        0,
        -PORTRAIT_FLOAT,
        0,
        PORTRAIT_FLOAT,
      ],
    }}
    transition={{
      duration: 5.2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.div>
        {/* ===================================================
            DESKTOP PURPLE GLOW
        =================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            bottom-[35px]
            left-[90px]
            z-0
            hidden
            h-[190px]
            w-[145px]
            -translate-x-1/2
            rounded-full
            bg-[#754cff]/[0.18]
            blur-[52px]

            md:block
          "
          animate={{
            opacity: [0.42, 0.68, 0.42],
            scale: [0.95, 1.04, 0.95],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        {/* ===================================================
            STATS BAR
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.55,
            delay: 0.15,
          }}
          className="
            relative
            z-30
            mt-4
            overflow-hidden
            rounded-xl
            border
            border-line
            bg-bg-elevated
            shadow-card

            sm:mt-5

            md:mt-4
          "
        >

          <div
            className="
              grid
              grid-cols-2

              md:grid-cols-4
            "
          >

            {stats.map((stat, index) => {
              const Icon = stat.Icon;

              return (
                <motion.div
                  key={stat.label}
                  whileHover={{
                    backgroundColor:
                      "rgba(105, 82, 255, 0.035)",
                  }}
                  className={`
                    relative
                    flex
                    items-center
                    gap-2.5
                    px-3
                    py-3.5

                    sm:gap-3
                    sm:px-5
                    sm:py-4

                    lg:px-6

                    ${
                      index < stats.length - 1
                        ? "md:border-r md:border-white/[0.10]"
                        : ""
                    }

                    ${
                      index < 2
                        ? "border-b border-white/[0.08] md:border-b-0"
                        : ""
                    }
                  `}
                >

                  {/* =====================================
                      STAT ICON
                  ===================================== */}

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-accent-soft
                      text-accent-bright

                      sm:h-10
                      sm:w-10
                    "
                  >
                    <Icon
                      className="
                        h-[15px]
                        w-[15px]

                        sm:h-[17px]
                        sm:w-[17px]
                      "
                    />
                  </span>


                  {/* =====================================
                      STAT TEXT
                  ===================================== */}

                  <div className="min-w-0">

                    <p
                      className="
                        font-display
                        text-base
                        font-semibold
                        leading-none
                        text-ink

                        sm:text-xl
                      "
                    >
                      {stat.value}
                    </p>

                    <p
                      className="
                        mt-1
                        whitespace-nowrap
                        text-[0.52rem]
                        leading-tight
                        text-muted

                        sm:text-[0.65rem]
                      "
                    >
                      {stat.label}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </motion.div>

      </div>


      {/* =====================================================
          TECHNICAL SKILLS
      ===================================================== */}

      <motion.div
        id="skills"
        initial={{
          opacity: 0,
          y: 16,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.55,
        }}
        className="
          mt-6
          rounded-2xl
          border
          border-line
          bg-bg-elevated
          p-5
          shadow-card

          sm:mt-10
          sm:p-8
        "
      >

        <p
          className="
            font-display
            text-lg
            font-medium
            text-ink
          "
        >
          Technical Skills
        </p>


        <div
          className="
            mt-5
            grid
            gap-5

            sm:grid-cols-2
          "
        >

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{
                opacity: 0,
                x: -8,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
            >

              <p
                className="
                  font-mono
                  text-[0.68rem]
                  uppercase
                  tracking-wider
                  text-accent-bright
                "
              >
                {group.label}
              </p>


              <div
                className="
                  mt-2
                  flex
                  flex-wrap
                  gap-2
                "
              >

                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-md
                      bg-bg-elevated-2
                      px-3
                      py-1.5
                      text-xs
                      text-ink
                      transition-colors
                      hover:bg-accent-soft
                      hover:text-accent-bright
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </motion.div>

    </section>
  );
}