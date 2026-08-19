import { video } from "framer-motion/client";

export const profile = {
  name: "Asma Benzaoucha",
  role: "Computer Systems Engineer",
  tagline: "Building intelligent, secure and scalable enterprise systems.",
  location: "Relizane, Algeria",
  email: "benzaoucha.asma@gmail.com",
  phone: "+213699407649",
  linkedin: "linkedin.com/in/asma-benzaoucha-60894b282",
  linkedinUrl: "https://linkedin.com/in/asma-benzaoucha-60894b282",
  github: "github.com/asma-benzaoucha",
  githubUrl: "https://github.com/asma-benzaoucha",
  domains: [
    "Artificial Intelligence",
    "Enterprise Systems",
    "Cybersecurity",
    "Identity & Access Management",
    "Full-Stack Development"
  ]
};

export const about = {
  paragraphs: [
    "Computer Systems Engineer with a solid technical background and a strong interest in system architecture, Network, cybersecurity, Data Analysis and artificial intelligence. I'm constantly looking for new challenges and learning opportunities."
  ]
};

export const education = [
  {
    degree: "Engineering Degree & Master's Degree, Computer Systems Engineering (ISI)",
    school: "École Supérieure en Informatique — 08 Mai 1945, Sidi Bel Abbès (ESI-SBA)",
    period: "2021 — 2026"
  }
];

export const experiences = [
  {
    role: "Intern — Sonatrach",
    period: "February 2026 · Hassi Messaoud",
    details:
      "Explored industrial IT infrastructure and the datacenter environment. Worked hands-on with Hyper-V, Active Directory and Exchange, and examined cybersecurity challenges specific to IT/OT environments — the context that later shaped AegisAIMail."
  },
  {
    role: "Freelance Full-Stack & Mobile Developer",
    period: "2025",
    details:
      "Delivered client-facing digital products using React, Django and Flutter — covering UI/UX, API design and end-to-end system flows."
  },

  {
    role: "Intern — SAA",
    period: "September 2024 · Relizane",
    details:
      "Gained exposure to enterprise IT systems: Active Directory, network architecture, support operations and incident handling."
  }
];

export const research = {
  title: "Zero Trust Security Analysis of AegisAIMail",
  subtitle: "Master's Thesis — Computer Systems Engineering (ISI), ESI-SBA · Defended July 2026",
  summary:
    "A security analysis of AegisAIMail, the AI-assisted Access Management orchestrator I built for my graduation project. The thesis models the system's attack surface with STRIDE, scores threat scenarios with a semi-quantitative model inspired by DREAD and the OWASP Risk Rating, and maps each scenario to Zero Trust controls. The central finding: securing an AI-assisted access system depends less on model performance than on strictly separating understanding, decision, execution and auditability — the AI extracts and structures a request, but only an explicit, policy-driven engine can authorize it.",
  interests: [
    "Zero Trust Architecture",
    "Identity & Access Management",
    "AI Security & Threat Modeling",
    "Natural Language Processing",
    "Enterprise Security",
    "Intelligent Automation"
  ]
};

export const finalYearProject = {
  title: "AegisAIMail — AI-Assisted, Policy-Driven Access Management Orchestrator",
  subtitle: "Engineering Graduation Project — with Sonatrach · Defended July 2026",
  description:
    "Designed and built AegisAIMail end-to-end: a system that ingests temporary access requests sent by e-mail, uses an AI/NLP pipeline to extract and structure each request, then routes it through a policy-driven decision engine — never the AI itself — before any access is granted.",
  stack: ["Python", "FastAPI", "PostgreSQL", "NLP", "Active Directory", "Exchange", "systemd"],
  testEnvironment:
    "Validated in a virtualized enterprise environment (VMware Workstation) with Active Directory, Exchange and Outlook, plus a PowerShell script simulating a realistic organization — users, RBAC permission groups, approval roles and interim-access scenarios."
};

// ---- Graduation project case study (deep dive) ------------------------
export type GalleryItem = { type: "image" | "video"; src: string };

export const caseStudy = {
  title: "AegisAIMail",
  subtitle: "AI-Assisted, Policy-Driven Access Management Orchestrator",
  meta: "Solo Engineering Graduation Project · with Sonatrach · Defended July 2026",
  problem:
    "Enterprises grant temporary access constantly — a contractor needs a share for two weeks, an engineer needs elevated rights for an incident. Today that flows through free-text e-mails to an administrator, who reads, judges and provisions by hand. It's slow, inconsistent, and leaves a thin audit trail. AI can read that e-mail. The open question was whether an AI could be trusted to also decide — and the answer I designed around was no: understanding and authorization have to be two separate, independently auditable steps.",
  approach:
    "I built AegisAIMail as an orchestrator, not a decision-maker. An NLP pipeline reads the incoming e-mail and extracts a structured request — who, what resource, how long, why. That structured request is then evaluated by a deterministic, policy-driven decision engine against an access catalog, relationship rules, approval workflows and security guardrails. Only the engine can output ALLOW_JIT, HUMAN_REVIEW, CLARIFY, BLOCK or DENY. Authorized actions pass through a policy enforcement point with a dry-run mode before touching Active Directory, and every e-mail, extraction, decision and action is logged for audit.",
  architecture: [
    {
      step: "01",
      title: "Test environment",
      detail:
        "Built a 4-VM virtualized environment in VMware Workstation: a Windows Server running Active Directory & Exchange, an Ubuntu server hosting the orchestrator, a Windows machine for the admin dashboard, and a Windows client simulating a requester sending e-mails."
    },
    {
      step: "02",
      title: "AI / NLP pipeline",
      detail:
        "Constructed the training dataset, then handled preprocessing and model training so incoming e-mails are parsed into structured, typed access requests."
    },
    {
      step: "03",
      title: "Policy decision engine",
      detail:
        "Designed the rule-based engine that checks the access catalog, relationship rules, approval workflows, sensitivity levels and security guardrails — and is the only component allowed to authorize an action."
    },
    {
      step: "04",
      title: "Execution & audit",
      detail:
        "Wired a controlled enforcement point against Active Directory with dry-run/sandbox mode, automatic expiration and revocation (systemd), and full audit logging."
    }
  ],
  role: "Solo — I scoped, designed and built every layer myself: infrastructure, AI pipeline, decision engine, enforcement and security hardening.",
  skills: [
    "Requirements analysis & solo project scoping",
    "Enterprise environment design (Active Directory, Exchange, Hyper-V/VMware)",
    "NLP pipeline: dataset construction, preprocessing, model training",
    "Backend API development — Python, FastAPI, PostgreSQL",
    "Policy-driven authorization design",
    "Automated provisioning & revocation (systemd)",
    "Threat modeling — STRIDE",
    "Risk scoring — DREAD/OWASP-inspired",
    "Audit logging & traceability design"
  ],
  stack: ["Python", "FastAPI", "PostgreSQL", "NLP", "Active Directory", "Exchange", "systemd", "VMware Workstation"],
  testEnvironment:
    "Validated in a virtualized enterprise environment (VMware Workstation) with Active Directory, Exchange and Outlook, plus a PowerShell script simulating a realistic organization — users, RBAC permission groups, approval roles and interim-access scenarios.",
  gallery: [

    { type: "video", src: "/projects/videos/aegisaimail-architecture.mp4" },
    { type: "image", src: "/projects/PFE-ARCH.png" },
    { type: "image", src: "/projects/Network-PFE-ARCHI.png" }
  ] as GalleryItem[],
  doc:[ "/docs/Presentation final PFE.pdf"]
};

// export const skillGroups = [
//   { label: "Programming", items: ["Python", "Java", "JavaScript",  "SQL"] },
//   { label: "Frameworks", items: ["React", "Django", "Flutter", "FastAPI", "Django REST Framework"] },
//   { label: "Enterprise", items: ["Active Directory", "Exchange", "PowerShell", "Hyper-V","VMware Workstation"] },
//   { label: "AI & Security", items: ["Machine Learning", "NLP", "LLMs", "IAM","STRIDE", "Zero Trust"] },
//   { label: "Systems", items: ["Linux", "systemd", "Networks", "Distributed Systems","embedded system", "PostgreSQL"] }
// ];
export const skillGroups = [
  {
    label: "Languages & Programming",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "SQL",
      "Data Structures & Algorithms",
    ],
  },

  {
    label: "Web Technologies",
    items: [
      "HTML",
      "CSS",
      "XML",
      "JavaScript",
      "REST APIs",
      "Web Services",
    ],
  },

  {
    label: "Frameworks & Development",
    items: [
      "React",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Flutter",
    ],
  },

  {
    label: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "Database Design",
      "SQL",
      "Database Management",
    ],
  },

  {
    label: "Networking",
    items: [
      "TCP/IP",
      "Network Configuration",
      "Network Monitoring",
      "Cisco Packet Tracer",
      "GNS3",
    ],
  },

  {
    label: "Cybersecurity",
    items: [
      "Network Security",
      "Intrusion Detection",
      "Information Security",
      "Threat Modeling",
      "STRIDE",
      "IAM",
      "Zero Trust",
    ],
  },

  {
    label: "Systems & Virtualization",
    items: [
      "Linux",
      "Windows",
      "PowerShell",
      "Hyper-V",
      "VMware Workstation",
      "systemd",
    ],
  },

  {
    label: "Artificial Intelligence & Data",
    items: [
      "Machine Learning",
      "Natural Language Processing",
      "Data Mining",
      "Data Analysis",
      "Big Data",
      "Information Retrieval",
      "Large Language Models",
    ],
  },

  {
    label: "Cloud & Distributed Systems",
    items: [
      "Cloud Computing",
      "Distributed Systems",
      "Web Services",
    ],
  },

  {
    label: "IoT & Embedded Systems",
    items: [
      "Internet of Things",
      "Embedded Systems",
      "Microcontrollers (Arduino,Raspberry Pi)",
    ],
  },
];
// ---- Projects, grouped by year, with category + scrollable media ------
export type Category =
  | "AI & Machine Learning"
  | "Cybersecurity"
  | "Web Development"
  | "Mobile Development"
  | "Systems & Cloud";

export const categories: Category[] = [
  "AI & Machine Learning",
  "Cybersecurity",
  "Web Development",
  "Mobile Development",
  "Systems & Cloud"
];

// Add more items to `gallery` (image or video) as files become available —
// see /public/README.md for exactly where to drop them.
export type YearProjectMedia = { gallery?: GalleryItem[]; doc?: string[]  };
export type YearProject = {
  title: string;
  description: string;
  tags: string[];
  category: Category;
  media?: YearProjectMedia;
  lien?:string;
};
export type YearEntry = { year: string; label: string; projects: YearProject[] };

export const projectsByYear: YearEntry[] = [
  {
    year: "2021",
    label: "1st Year",
    projects: []
  },
  {
    year: "2022",
    label: "2nd Year",
    projects: [
      {
        title: "Mobile Book Exchange App",
        description:
          "Team project (group of 6) — a mobile app for buying, selling, donating and exchanging books. I built the backend; not published to the Play Store.",
        tags: ["Mobile", "Backend", "Team Project"],
        category: "Mobile Development",
        media: {
          gallery: [
            { type: "image", src: "/projects/bookhub-onboarding.jpg" },
            { type: "image", src: "/projects/bookhub-favorites.jpg" }
          ],
          doc:[ "/docs/bookhub-user-manual.pdf"]
          
        }
      }
    ]
  },
  {
    year: "2023",
    label: "3rd Year",
    projects: [
      {
        title: "Hajj Management Platform",
        description:
          "Team information system covering registration, lottery, medical visits, and flight and hotel reservations for pilgrimage management. I worked as backend developer.",
        tags: ["Information Systems", "Web", "Team Project"],
        category: "Web Development",
        media: {
          gallery: [{ type: "video", src: "/projects/videos/hajj.mp4" }],
          doc: ["/docs/hajj-architecture-report.pdf","docs/hajj-cahier-de-charge.pdf"]
        }
      },
      {
        title: "Java Desktop Stock Manager",
        description:
          "Desktop inventory management application in Java with an object-oriented architecture. Core features are functional; the project is not fully finished.",
        tags: ["Java", "Desktop", "OOP"],
        category: "Systems & Cloud",
        media:{gallery:[{type:"video",src:"/projects/videos/stock.mp4"}]}
      }
    ]
  },
  {
    year: "2024",
    label: "4th Year",
    projects: [
      {
        title: "Intelligent Intrusion Detection System",
        description:
          "Team project detecting and classifying 21 network attack types from simulated network traffic. I led the AI track — data preprocessing, model training and evaluation — and contributed to the networking side.",
        tags: ["Machine Learning", "Cybersecurity", "Networks"],
        category: "Cybersecurity",
        media: {
          gallery: [
            { type: "image", src: "/projects/ids-landing.jpg" },
            { type: "image", src: "/projects/ids-taxonomy.jpg" }
          ],
          doc:[ "/docs/ids-report.pdf"]
        }
      },
      {
        title: "Internship — SAA",
        description:
          "Exposure to enterprise IT systems: Active Directory, network architecture, support operations and incident handling.",
        tags: ["Enterprise IT", "Active Directory"],
        category: "Systems & Cloud",
        media:{gallery:[{type:"image",src:"/projects/saa.png"},{type:"image",src:"/projects/sonatrach1.png"},{type:"image",src:"/projects/sonatrach2.png"}],
    doc:["/docs/rapport de stage de saa.pdf"]}
      }
    ]
  },
  {
    year: "2025",
    label: "Between 4th & 5th Year",
    projects: [
      {
        title: "CanHygiene — AI-for-HR Hackathon",
        description:
          "48-hour team hackathon project integrating AI into HR processes, built for a national innovation competition.",
        tags: ["Hackathon", "AI", "HR Tech"],
        category: "AI & Machine Learning",
        media: { 
          gallery:[{type:"video", src:"/projects/videos/canHygiene.mp4"}],
          
          doc:[ "/docs/canhygiene-report.pdf"] }
      },
      {
        title: "Freelance Web Platform",
        description:
          "Large freelance website built with one other developer, from requirements specification through design, front-end and back-end development, and system integration.",
        tags: ["React", "Django", "PostgreSQL"],
        category: "Web Development",

        media:{gallery:[{type:"image", src:"/projects/kadi.jpg"}]},
        lien:"https://kadi-inv.store/"
      },
      {
        title: "Awarded Flutter Mobile App",
        description:
          "Mobile app recognized as an Innovative Project and awarded a certificate by the National Startup Committee.",
        tags: ["Flutter", "Mobile", "Award"],
        category: "Mobile Development",
        media: { 
          gallery:[{type:"video", src:"/projects/videos/Kwitley.mp4"}],
          }
      }
      
    ]
  },
  {
    year: "2026",
    label: "5th Year — PFE & Master",
    projects: [
      {
        title: "Cloud Visualization Mini-Project",
        description:
          "Team mini-project (3 members) for the Cloud Computing module: virtualizing and networking Windows and Ubuntu VMs and visualizing the setup.",
        tags: ["Cloud Computing", "Virtualization", "Team Project"],
        category: "Systems & Cloud",
        media: {
          gallery: [{ type: "image", src: "/projects/VMware.png" }],
          doc:[ "/docs/cloud-visualization-report.pdf" ]
        }
      },
      {
        title: "Fake vs. Real Image Detector (CNN)",
        description:
          "Convolutional neural network built to classify images as real or AI-generated, developed as a mini-project in the Advanced AI module.",
        tags: ["CNN", "Deep Learning", "Computer Vision"],
        category: "AI & Machine Learning",
        media:{gallery:[{type:"video", src:"/projects/videos/CNN.mp4"}] , doc:["/docs/CNN.pdf"]}
      
      },
      {
        title: "Internship — Sonatrach",
        description:
          "Explored industrial IT infrastructure: Hyper-V, Active Directory and Exchange, and cybersecurity challenges in IT/OT environments.",
        tags: ["Enterprise IT", "Cybersecurity"],
        category: "Systems & Cloud",
        media:{gallery:[{type:"image",src:"/projects/sonatrach-direction-informatique.png"},{type:"image",src:"/projects/sonatrach1.png"},{type:"image",src:"/projects/sonatrach2.png"}],
      doc:["/docs/Stage rapport pour sonatrach centre de formation.pdf"]}
      },
      {
        title: "AegisAIMail — Graduation Project (PFE)",
        description:
          "AI-assisted, policy-driven system that turns e-mailed temporary access requests into structured, auditable access decisions. Built solo, validated in a virtualized enterprise environment (VMware Workstation). Full case study below.",
        tags: ["AI/NLP", "IAM", "Python", "FastAPI"],
        category: "Cybersecurity",
        media: {
          gallery: [
            { type: "image", src: "/projects/PFE2.png" },
            { type: "image", src: "/projects/aegisaimail-decision-engine.jpg" }
          ],
          doc:[ "/docs/aegisaimail-pfe-report.pdf"]
        }
      },
      {
        title: "Master's Thesis — Zero Trust Security Analysis",
        description:
          "Security analysis of AegisAIMail using STRIDE and a DREAD/OWASP-inspired scoring model, mapped to Zero Trust controls. Defended July 2026.",
        tags: ["Zero Trust", "STRIDE", "Security"],
        category: "Cybersecurity",
        media: {
          gallery: [{ type: "image", src: "/projects/master2.png" },{ type: "image", src: "/projects/master.png" }],
          doc:[ "/docs/Page_de_garde_Master_ENG.pdf"]
          
        }
      }
    ]
  }
];
