import Link from "next/link";
import type { FeaturedProject } from "./types";

const mockData: FeaturedProject = {
  title: "EcoTote — Premium Eco-Commerce Single Page Application",
  description:
    "An engineering-grade, highly optimized eco-commerce landing platform built using modern architectural patterns in Next.js 16 (App Router) and TypeScript. This production-ready single-page application showcases cutting-edge frontend capabilities, fluid interactive state-stitching, comprehensive internationalization (i18n), and an automated Server Action serverless data routing architecture that converts raw form interactions directly into an instant Telegram CRM notification network.",
  imgUrl: "/wrongUrl",
  features: [
    {
      id: 1,
      title: "Live Async Form Pipeline & Telegram CRM Integration",
      description:
        "Uses Next.js Server Actions to safely process data on the server side, mapping payloads via HTML formatting into real-time streams targeting dedicated Telegram monitoring channels, with asynchronous loading states managed via Sonner toast promise chains.",
    },
    {
      id: 2,
      title: "Intelligent Anti-Spam Honeypot Interceptors",
      description:
        "Integrates an invisible input honeypot shield into form nodes. Server-side validation guards detect automated bot inputs, silently short-circuiting execution with a counterfeit success response to deflect spam without hitting API limits or wasting server bandwidth.",
    },
    {
      id: 3,
      title: "Universal Type-Safe i18n & Validation Infrastructure",
      description:
        "Features a modular static JSON dictionary system managed via global context. Zod schemas emit static translation keys instead of hardcoded strings, allowing server-side request rejections to seamlessly translate to the user's selected language in real-time.",
    },
    {
      id: 4,
      title: "Accessible Semantic Design Constants",
      description:
        "Utilizes native HTML5 dialog elements with focus management, Esc key dismissals, and screen reader optimizations (aria-invalid, role='alert'). Single-page navigation uses modern scrollIntoView API to maintain layout purity without address bar clutter.",
    },
  ],
  liveUrl: "https://...",
  githubUrl: "https://...",
  extraUrl: {
    text: "Notification Bot",
    link: "https://...",
  },
  stack: [
    {
      id: 1,
      value: "Next.js",
    },
    {
      id: 2,
      value: "TypeScript",
    },
    {
      id: 3,
      value: "Zod",
    },
    {
      id: 4,
      value: "React Hook Form",
    },
    {
      id: 5,
      value: "Tailwind CSS",
    },
    {
      id: 6,
      value: "Sonner",
    },
  ],
};

export default function Featured() {
  return (
    <section
      id="featured"
      aria-describedby="featured-title"
      className="py-10 md:py-15 lg:py-28 scroll-mt-5"
    >
      <h2
        id="featured-title"
        className="text-2xl font-black tracking-tight pb-15 uppercase text-white font-sans"
      >
        Featured
      </h2>

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10">
          <Link
            href={mockData.liveUrl as string}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open live demo of ${mockData.title}`}
            className="w-full aspect-16/10"
          >
            <div className="w-full h-full bg-sky-700"></div>
          </Link>

          <div className="w-full h-auto flex flex-col gap-5">
            <h3 className="text-xl text-center font-bold uppercase tracking-wide">
              {mockData.title}
            </h3>

            <ul className="flex flex-col gap-3">
              {mockData.features.map((f) => (
                <li key={f.id} className="text-xs flex flex-col gap-1">
                  <h4 className="flex items-center gap-2 text-sm">
                    <span
                      aria-hidden="true"
                      className="w-2 h-2 block bg-emerald-500 animate-pulse"
                    ></span>
                    {f.title}
                  </h4>
                  <p>{f.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-sm flex gap-3 items-center">
          <h4 className="font-mono font-semibold">Stack:</h4>
          <ul className="flex flex-wrap items-center gap-2 text-sm text-ayu-tag">
            {mockData.stack.map((i) => (
              <li key={i.id}>{i.value}</li>
            ))}
          </ul>
        </div>
        <p>{mockData.description}</p>

        <div className="flex items-center gap-3 pt-5">
          <Link
            href={mockData.liveUrl as string}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ayu-string hover:text-ayu-string/80 active:text-ayu-string/50 underline transition-colors duration-300"
          >
            Live
          </Link>
          <Link
            href={mockData.githubUrl as string}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ayu-string hover:text-ayu-string/80 active:text-ayu-string/50 underline transition-colors duration-300"
          >
            GitHub
          </Link>
          {mockData.extraUrl && (
            <Link
              href={mockData.extraUrl.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ayu-string hover:text-ayu-string/80 active:text-ayu-string/50 underline transition-colors duration-300 pl-5"
            >
              {mockData.extraUrl.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
