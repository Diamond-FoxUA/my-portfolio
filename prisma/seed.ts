import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma";

// Створюємо пул з'єднань, використовуючи твою змінну з .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
const adapter = new PrismaPg(pool);

// Передаємо адаптер у клієнт Prisma за новими стандартами v7+
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Starting seeding...");

  await prisma.feature.deleteMany();
  await prisma.project.deleteMany();
  await prisma.technology.deleteMany();

  const nextjs = await prisma.technology.create({ data: { name: "Next.js" } });
  const ts = await prisma.technology.create({ data: { name: "TypeScript" } });
  const zod = await prisma.technology.create({ data: { name: "Zod" } });
  const rhf = await prisma.technology.create({
    data: { name: "React Hook Form" },
  });
  const yup = await prisma.technology.create({ data: { name: "Yup" } });
  const tailwind = await prisma.technology.create({
    data: { name: "Tailwind CSS" },
  });
  const sonner = await prisma.technology.create({ data: { name: "Sonner" } });
  const react = await prisma.technology.create({ data: { name: "React" } });
  const cookies = await prisma.technology.create({ data: { name: "Cookies" } });
  const redux = await prisma.technology.create({
    data: { name: "Redux Toolkit" },
  });

  const featuredProject = await prisma.project.create({
    data: {
      title: "EcoTote — Premium Eco-Commerce Single Page Application",
      slug: "ecotote",
      description:
        "An engineering-grade, highly optimized eco-commerce landing platform built using modern architectural patterns in Next.js 16 (App Router) and TypeScript. This production-ready single-page application showcases cutting-edge frontend capabilities, fluid interactive state-stitching, comprehensive internationalization (i18n), and an automated Server Action serverless data routing architecture that converts raw form interactions directly into an instant Telegram CRM notification network.",
      githubLink: "https://github.com/Diamond-FoxUA/ecotote-ecommerce-landing",
      liveLink: "https://ecotote-ecommerce-landing.vercel.app/",
      isFeatured: true,
      extraLink: "https://t.me/ecotote_notifications_demo",
      extraLinkText: "Notification Bot",
      imgUrl: "https://cloudinary.com",

      technologies: {
        connect: [
          { id: nextjs.id },
          { id: ts.id },
          { id: zod.id },
          { id: rhf.id },
          { id: tailwind.id },
          { id: sonner.id },
        ],
      },
    },
  });

  const prevProject = await prisma.project.create({
    data: {
      title: "PetLove",
      slug: "petlove-web-app",
      description:
        "PetLove is a modern, full-featured web application designed for pet care management, booking doctor appointments, and exploring community pet services. Built with a robust frontend architecture using React 19, Next.js 16 (App Router), and Redux Toolkit, this project stands out due to its extreme focus on modern web standards: semantic HTML, comprehensive accessibility (A11y), search engine optimization (SEO), modular folder architecture, and optimized hybrid data-fetching patterns.",
      githubLink: "https://github.com/Diamond-FoxUA/petlove-web-app",
      liveLink: "https://petlove-web-app.vercel.app/",
      isFeatured: false,
      imgUrl:
        "https://res.cloudinary.com/dcneehirn/image/upload/v1790702340/Screenshot_2026-09-29_at_20.18.06_ky7yjb.png",
      technologies: {
        connect: [
          { id: nextjs.id },
          { id: react.id },
          { id: rhf.id },
          { id: yup.id },
          { id: redux.id },
          { id: tailwind.id },
        ],
      },
    },
  });

  await prisma.feature.createMany({
    data: [
      {
        title: "Live Async Form Pipeline & Telegram CRM Integration",
        description:
          "Uses Next.js Server Actions to safely process data on the server side, mapping payloads via HTML formatting into real-time streams targeting dedicated Telegram monitoring channels, with asynchronous loading states managed via Sonner toast promise chains.",
        projectId: featuredProject.id,
      },
      {
        title: "Intelligent Anti-Spam Honeypot Interceptors",
        description:
          "Integrates an invisible input honeypot shield into form nodes. Server-side validation guards detect automated bot inputs, silently short-circuiting execution with a counterfeit success response to deflect spam without hitting API limits or wasting server bandwidth.",
        projectId: featuredProject.id,
      },
      {
        title: "Universal Type-Safe i18n & Validation Infrastructure",
        description:
          "Features a modular static JSON dictionary system managed via global context. Zod schemas emit static translation keys instead of hardcoded strings, allowing server-side request rejections to seamlessly translate to the user's selected language in real-time.",
        projectId: featuredProject.id,
      },
      {
        title: "Accessible Semantic Design Constants",
        description:
          "Utilizes native HTML5 dialog elements with focus management, Esc key dismissals, and screen reader optimizations (aria-invalid, role='alert'). Single-page navigation uses modern scrollIntoView API to maintain layout purity without address bar clutter.",
        projectId: featuredProject.id,
      },
    ],
  });

  console.log(
    "✅ Seeding finished successfully! Added 1 project, 6 technologies, 4 features.",
  );
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
