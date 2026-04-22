// ─────────────────────────────────────────────────────────────────────────────
// Skills
// ─────────────────────────────────────────────────────────────────────────────

export const skills = {
  "Frameworks & Libraries": [
    "React",
    "Next.js",
    "Vue 3",
    "Nuxt.js",
    "Node.js",
    "Babel",
  ],
  "Styling & UI": [
    "Tailwind CSS",
    "Sass / SCSS",
    "HeroUI",
    "DaisyUI",
    "MUI",
    "Vuetify",
    "CSS Modules",
  ],
  "State Management": ["Zustand", "Pinia", "Vuex", "React Query"],
  "Tools & DevOps": [
    "Docker",
    "Linux (Ubuntu)",
    "NVM",
    "Oh My Zsh",
    "Git",
    "Vercel",
    "VS Code",
  ],
  "Other & Expanding": [
    "REST API",
    "TypeScript",
    "JavaScript ES6+",
    "SEO Optimization",
    "AI Prompting",
    "Performance Optimization",
    "Responsive Design",
  ],
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Projects
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectType = "personal" | "collaboration" | "freelance" | "on-site";

export interface Project {
  id: string;
  nameKey: string;
  descKey: string;
  tech: string[];
  url?: string;
  github?: string;
  type: ProjectType;
  featured: boolean;
  stats?: string;
  /**
   * Paths relative to /public — e.g. "/screenshots/sib-1.png"
   * Add as many as you like; the lightbox handles them all.
   */
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "sib",
    nameKey: "sib_name",
    descKey: "sib_desc",
    tech: ["Vue 3", "Vuex", "Vuetify", "JavaScript", "CSS"],
    url: "https://sib.behdasht.gov.ir",
    type: "on-site",
    featured: true,
    stats: "80M+ users",
    screenshots: [
      "/screenshots/sib-login.jpg",
      "/screenshots/sib-home.jpg",
      "/screenshots/sib-page.jpg",
    ],
  },
  {
    id: "slicegames",
    nameKey: "slicegames_name",
    descKey: "slicegames_desc",
    tech: ["Next.js", "Node.js", "DaisyUI", "SEO"],
    url: "https://slicegames.io",
    type: "personal",
    featured: true,
    stats: "500+ daily users",
    screenshots: [
      "/screenshots/slicegames-home.png",
      "/screenshots/slicegames-game.png",
      "/screenshots/slicegames-sudoku.png",
    ],
  },
  {
    id: "mentorjet",
    nameKey: "mentorjet_name",
    descKey: "mentorjet_desc",
    tech: ["Next.js", "MUI", "Tailwind CSS"],
    url: "https://mentorjet.org",
    type: "collaboration",
    featured: true,
    stats: "Core Team",
    screenshots: [
      "/screenshots/mentorjet-home.png",
      "/screenshots/mentorjet-ai-chat.png",
    ],
  },
  {
    id: "varzeshkar",
    nameKey: "varzeshkar_name",
    descKey: "varzeshkar_desc",
    tech: ["React", "REST API", "AI Integration"],
    url: "https://varzeshkar.com",
    type: "collaboration",
    featured: true,
    stats: "Nationwide",
    screenshots: [
      "/screenshots/varzeshkar-home.png",
      "/screenshots/varzeshkar-register-gym.png",
      "/screenshots/varzeshkar-coach.png",
    ],
  },
  {
    id: "23pixel",
    nameKey: "23pixel_name",
    descKey: "23pixel_desc",
    tech: ["Next.js", "Performance", "CSS"],
    url: "https://23pixel.com",
    type: "freelance",
    featured: false,
    stats: "+114% perf",
    screenshots: [
      "/screenshots/23pixel-home.webp",
      "/screenshots/23pixel-plans.webp",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Experience / Career
//
// The old flat ExperienceEntry (one row per role) is replaced by CareerEntry
// which groups multiple roles under a single company — matching the LinkedIn-
// style timeline in Experience.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface RoleEntry {
  roleKey: string;
  periodKey: string;
  descKey: string;
  /** Marks the role currently held — drives the glowing dot. */
  isCurrent: boolean;
}

export interface CareerEntry {
  id: string;
  companyKey: string;
  locationKey: string;
  /** True when this is the current employer — drives card glow + green badge. */
  current: boolean;
  roles: RoleEntry[];
}

export const career: CareerEntry[] = [
  {
    id: "dapa",
    companyKey: "dapa_company",
    locationKey: "dapa_location",
    current: true,
    roles: [
      {
        roleKey: "dapa_role_senior",
        periodKey: "dapa_period_senior",
        descKey: "dapa_desc_senior",
        isCurrent: true,
      },
      {
        roleKey: "dapa_role_mid",
        periodKey: "dapa_period_mid",
        descKey: "dapa_desc_mid",
        isCurrent: false,
      },
    ],
  },
  {
    id: "vofour",
    companyKey: "vofour_company",
    locationKey: "vofour_location",
    current: false,
    roles: [
      {
        roleKey: "vofour_role_junior",
        periodKey: "vofour_period_junior",
        descKey: "vofour_desc_junior",
        isCurrent: false,
      },
      {
        roleKey: "vofour_role_intern",
        periodKey: "vofour_period_intern",
        descKey: "vofour_desc_intern",
        isCurrent: false,
      },
    ],
  },
];