export interface StackItem {
  name: string;
  isPriority: boolean;
}

export interface StackData {
  coreFrontend: StackItem[];
  backendInfrastructure: StackItem[];
  engineeringFocus: StackItem[];
}

export const stackData: StackData = {
  coreFrontend: [
    { name: "Next.js", isPriority: true },
    { name: "React", isPriority: true },
    { name: "TypeScript", isPriority: true },
    { name: "JavaScript (ES6+)", isPriority: false },
    { name: "Tailwind CSS", isPriority: false },
    { name: "CSS modules", isPriority: false },
    { name: "Redux", isPriority: false },
    { name: "Zustand", isPriority: false },
    { name: "TanStack Query", isPriority: false },
  ],
  backendInfrastructure: [
    { name: "Node.js", isPriority: false },
    { name: "Express", isPriority: false },
    { name: "MongoDB", isPriority: false },
    { name: "Prisma ORM", isPriority: false },
    { name: "PostgreSQL", isPriority: false },
    { name: "REST APIs", isPriority: false },
    { name: "JWT Auth", isPriority: false },
    { name: "Firebase", isPriority: false },
  ],
  engineeringFocus: [
    { name: "Semantic HTML", isPriority: true },
    { name: "ARIA Accessibility", isPriority: true },
    { name: "SEO Optimization", isPriority: true },
  ]
};
