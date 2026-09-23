import { getProjects } from "@/api/getProjects";
import Link from "next/link";
import DummyButtons from "@/shared/ui/DummyButtons";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-10 md:py-15 lg:py-28 scroll-mt-5"
    >
      <h2
        id="projects-title"
        className="text-2xl font-black tracking-tight pb-15 uppercase text-white font-sans"
      >
        PROJECTS
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <li key={p.id}>
            <article className="border border-ayu-border">
              <div className="flex justify-between items-center bg-ayu-border/70 border-b border-ayu-border py-2 px-3">
                <span aria-hidden="true" className="font-mono text-xs">
                  {p.slug}.config.ts
                </span>
                <DummyButtons />
              </div>

              <div className="flex flex-col gap-3 p-2">
                <h3 className="text-lg font-mono font-normal">{p.title}</h3>
                <div className="flex gap-3 gap-y-1 flex-wrap">
                  {p.technologies.map((t) => (
                    <p key={t.id} className="text-xs text-ayu-tag">
                      {t.name}
                    </p>
                  ))}
                </div>
                <p className="text-sm">{p.description}</p>

                <div className="flex justify-end gap-3 p-2">
                  <Link
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ayu-string underline"
                  >
                    Live
                  </Link>
                  <Link
                    href={p.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ayu-string underline"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
