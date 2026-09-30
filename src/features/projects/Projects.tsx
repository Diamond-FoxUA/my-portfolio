import Link from "next/link";
import DummyButtons from "@/shared/ui/DummyButtons";
import Image from "next/image";

import { getProjects } from "@/shared/api/projects";

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
            <article className="flex flex-col h-full border border-ayu-border rounded-lg">
              <div className="flex justify-between items-center bg-ayu-border/70 border-b border-ayu-border py-2 px-3 rounded-t-lg">
                <span aria-hidden="true" className="font-mono text-xs">
                  {p.slug}.config.ts
                </span>
                <DummyButtons />
              </div>

              <div className="flex flex-col flex-1 gap-3 p-2">
                {p.imgUrl && (
                  <Link
                    href={p.liveLink || p.githubLink || "#"}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`Open live demo of ${p.title}`}
                  >
                    <div className="w-full aspect-16/10 overflow-hidden rounded-lg group border border-slate-800 bg-slate-900 block relative transition-colors duration-300 hover:border-cyan-500/50 focus-visible:border-cyan-500/50 focus:outline-none">
                      <Image
                        src={p.imgUrl}
                        alt=""
                        fill
                        sizes="..."
                        className="block w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01] group-focus-visible:scale-[1.01]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-slate-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]"
                      >
                        <div className="font-mono text-xs text-cyan-400 bg-slate-900/90 border border-cyan-500/30 px-4 py-2 rounded-md shadow-lg tracking-wider flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></span>
                          click_to_view_live()
                        </div>
                      </div>
                    </div>
                  </Link>
                )}

                <h3 className="text-lg font-mono font-normal">{p.title}</h3>
                <div className="flex gap-3 gap-y-1 flex-wrap">
                  {p.technologies.map((t) => (
                    <p key={t.id} className="text-xs text-ayu-tag">
                      {t.name}
                    </p>
                  ))}
                </div>
                <p className="text-sm flex-1">{p.description}</p>

                <div className="flex items-center justify-end gap-3 p-2">
                  {p.extraLink && (
                    <Link
                      href={p.extraLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ayu-string underline"
                    >
                      {p.extraLinkText}
                    </Link>
                  )}
                  {p.liveLink && (
                    <Link
                      href={p.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ayu-string underline"
                    >
                      Live
                    </Link>
                  )}
                  {p.githubLink && (
                    <Link
                      href={p.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ayu-string underline"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
