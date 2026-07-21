## 📊 Fullstack Dev Portfolio & Real-Time Metrics Hub

A high-performance, single-page fullstack engineer portfolio built with an elite focus on production-grade standards. Designed in a deep, distraction-free IDE-inspired aesthetic specifically tailored for technical leaders, this hub features a custom, hand-coded real-time analytics engine that records page views, outbound project clicks, and resume downloads dynamically without third-party analytics bloat.

🔗 **Live Demo:** Under Construction 🚧 <br />
📄 **Developer Resume:** Under Construction 🚧 <br />
🐙 **Source Code:** [GitHub](https://github.com/Diamond-FoxUA/my-portfolio) <br />

---

## 🌟 Advanced Technical Highlights

### 🏗️ Feature-Driven Modular Architecture (FSD)

• **Scalable Layer Boundaries:** Structured entirely around strict Feature-Driven Design principles inside the Next.js App Router layer mapping. Code is rigorously isolated across clear structural layers (widgets, features, entities, shared).
• **Zero-Bundle Server Components:** Core structural layouts and static sections are rendered exclusively as React Server Components (RSC). This slashes client-side JavaScript delivery, guarantees instant initial page loads, and yields perfect Core Web Vitals scores.

### ⚡ Unified Fullstack Architecture & Monolithic API Handling

- **Zero-CORS Internal Server API:** Eliminates the infrastructure bloat of spinning up separate Express/Node services. Next.js backend routing (`app/api/`) runs secure, headless server environments directly inside the application boundaries.
- **Atomic ORM Transactions:** Integrates **Prisma ORM** interacting with a cloud-hosted **Neon PostgreSQL** cluster. Heavy dynamic logging actions utilize database `upsert` transactions and native numeric `increment` mechanics to handle fast interaction hits safely.

### 🏎️ Automated React Compiler Optimization

- **Zero-Overhead Memos:** Completely bypasses legacy, manual UI memoization (`useMemo`, `useCallback`) by utilizing the native **React Compiler** built into React 19.
- **Strict Structural Enforcement:** Maintained via defensive programming and pure function implementations that rigorously honor the "Rules of React", enabling automated build-time performance optimization across client modules.

### ♿ Elite A11y Standards & Semantic HTML

- **Custom Font-Variant Ligatures:** Leverages hand-optimized local files for **Cascadia Code** and **Impact** compiled via `next/font/local`. Implements native browser subpixel font smoothing (`antialiased`) alongside strict `font-variant-ligatures` CSS properties to mimic a true production IDE environment.
- **Dynamic Social Graph & Semantic Metadata:** Fully optimized for crawler indexing and rich-media link preview sharing across Telegram, LinkedIn, and X (Twitter) utilizing declarative Next.js `Metadata` objects integrated with comprehensive **OpenGraph (OG)** image configurations.
- **Native Modal Form Controls:** Implements the native HTML `<dialog>` element to anchor the interactive contact form wrapper. This delivers native keyboard focus traps, automated `Escape` key close boundaries, and semantic screen-reader focus redirection out of the box.

---

## 🚀 General Core Features

- **App Router System:** Leverages modern Next.js 16 directory layouts, native route configurations, and fast initial HTML rendering.
- **Real-Time Data Viz:** Renders interactive engagement telemetry dynamically inside a responsive dashboard engine utilizing declarative React components powered by **Recharts**.
- **Non-Blocking Toast Notifications:** Features accessible, lightweight toast notifications powered by **Sonner** to visually and programmatically (`aria-live="polite"`) broadcast form submission feedback.
- **Robust Server-Side Validation:** Form handlers secure incoming API payload boundaries through schema-driven object type verification using **Zod**.

---

## 🛠️ Tech Stack & Dependencies

### Core Framework & Build Systems

- **React & React-DOM (v19.2.4)** — Component-driven declarative views.
- **Next.js (v16.2.6)** — Hybrid server-side framework featuring file-based routing.
- **TypeScript (v5.x)** — Strict static typing across front-to-back codebases.

### Database & Analytics Server

- **@prisma/client & Prisma (v6.x)** — Type-safe Object-Relational Mapping (ORM) layer.
- **Neon PostgreSQL** — Serverless relational database for live metrics storage.
- **Recharts (v2.x)** — Light, composable charts built with native SVG elements.

### Form Processing & UI Graphics

*   **React Hook Form (v7.x)** — High-performance, un-controlled form validation engine.
*   **Zod (v3.x)** — TypeScript-first schema declaration and type-safe verification.
*   **Lucide React (v0.x)** — High-performance, tree-shakable native SVG icon wrappers.
*   **Cascadia Code & Impact Fonts** — Variable high-end typography providing native code ligatures and bold brutalist headers.

---

## 📂 Project Structure (Feature-Driven Design)

```text

my-portfolio/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts
│   │   └── metrics/
│   │       └── route.ts
│   ├── layout.tsx
│   └── page.tsx
├── src/
│   ├── widgets/
│   │   ├── header/
│   │   │   └── ui/
│   │   ├── hero/
│   │   │   └── ui/
│   │   ├── tech-stack/
│   │   │   └── ui/
│   │   └── footer/
│   │       └── ui/
│   ├── features/
│   │   ├── track-analytics/
│   │   └── send-message/
│   ├── entities/
│   │   └── project-card/
│   └── shared/
│       ├── ui/
│       ├── lib/
│       │   └── prisma.ts
│       └── types/
├── prisma/
│   └── schema.prisma
├── public/
│   └── Dmytro_Farbun_Fullstack_Developer.pdf
├── .env
├── tailwind.config.ts
├── tsconfig.json
└── package.json

```

---

## 💻 Getting Started

### Prerequisites

Ensure you have **Node.js** (v20.x or higher) and **npm/yarn** active in your workspace.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Diamond-FoxUA/my-portfolio
   cd my-portfolio
   ```

2. **Install project dependencies:**

   ```bash
   npm install
   ```

3. **Configure local environment parameters:**
   Create a `.env` file in the root directory and append your Neon PostgreSQL connection string:

   ```env
   DATABASE_URL="postgresql://username:password@ep-cool-darkness-123456.eu-central-1.aws.neon.tech/neondb?sslmode=require"
   ```

4. **Sync the Prisma schema to your remote cloud database:**

   ```bash
   npx prisma migrate dev --name init_portfolio_metrics
   ```

5. **Fire up the hot-reloading development engine:**
   ```bash
   npm run dev
   ```
   Open **`http://localhost:3000`** in your browser to inspect the application.

---

## 📄 License

This project is licensed under the **MIT License** — check the [LICENSE](LICENSE) file for more information.
