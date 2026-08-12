export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  architectureFeature: string;
  seoPerformance: string;
  ariaAudit: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  positionClasses: string;
  githubLink: string;
  liveLink: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "p1",
    slug: "petlove",
    title: "PetLove — Pet Care Web Application",
    techStack: [
      "Next.js",
      "React",
      "Redux Toolkit",
      "React Hook Form",
      "Yup",
      "Axios",
      "Sonner",
      "Cookies",
    ],
    description:
      "Architected and built a scalable web application using Next.js App Router and Feature-Driven Architecture to guarantee high code isolation, structured component tiers, and strict long-term maintainability.",
    architectureFeature:
      "FSD Layout Integration with React Server Components (RSC) optimization for dynamic public routing",
    seoPerformance:
      "Top-tier SEO compliance backed by semantic HTML5 structures and automated dynamic metadata routing engines",
    ariaAudit:
      "Advanced Web Accessibility (A11y) with screen-reader attributes, aria-labels, and fluid manual keyboard navigation paths",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    positionClasses: "top-[4%] md:left-[5%] lg:top-[10%] lg:left-[10%]",
    githubLink: "https://github.com/Diamond-FoxUA/petlove-web-app",
    liveLink: "https://petlove-web-app.vercel.app/",
  },
  {
    id: "p2",
    slug: "psychologist-app",
    title: "Psychologist App",
    techStack: ["React", "React Router", "TanStack Query", "Firebase"],
    description:
      "Engineered a responsive medical specialist web layout featuring state-of-the-art server-state management. Implemented dynamic client-side filtering, multi-criteria data sorting, and robust user authentication workflows.",
    architectureFeature:
      "Efficient server-state synchronization with localized client caches via TanStack Query",
    seoPerformance:
      "Clean document structure optimized for responsive rendering and OpenGraph data compliance",
    ariaAudit:
      "Accessible custom component interactions with focus state management and local theme persistence triggers",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    positionClasses: "top-[33%] left-[12%] md:top-[37%] md:left-[45%] lg:top-[30%] lg:left-[50%]",
    githubLink: "https://github.com/Diamond-FoxUA/psychologist-app",
    liveLink: "https://psychologist-app-lyart.vercel.app/",
  },
  {
    id: "p3",
    slug: "google-forms-lite",
    title: "Google Forms Lite Clone",
    techStack: [
      "React",
      "React Router",
      "Tailwind CSS",
      "TanStack Query",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    description:
      "Developed a dynamic, interactive fullstack form builder and live compiler featuring instant response reviews. Managed automated multi-package infrastructure using modern workspace routing tools.",
    architectureFeature:
      "Monorepo workspace system architecture utilizing npm/pnpm workflows for package isolation",
    seoPerformance:
      "Strict semantic form parsing trees optimized for speed, lightweight data layers, and search indexing",
    ariaAudit:
      "Semantic form field mapping, accessible input descriptions, and custom native validation focus alerts",
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    positionClasses: "top-[65%] left-[4%] md:top-[62%] md:left-[13%] lg:top-[65%] lg:left-[15%]",
    githubLink: "https://github.com/Diamond-FoxUA/google-forms-lite",
    liveLink: "https://google-forms-lite-client-pied.vercel.app/",
  },
];
