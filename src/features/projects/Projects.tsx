import Link from "next/link";
import DummyButtons from "@/shared/ui/DummyButtons";
import { ScanEye } from "lucide-react";
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

                <div className="flex items-center justify-end gap-3 p-2">
                  <div className="flex items-center justify-end gap-3 mr-auto">
                    <div className="relative group/eye cursor-help p-1">
                      <ScanEye
                        size={24}
                        aria-hidden="true"
                        className="stroke-ayu-string transition-colors duration-200 group-hover/eye:stroke-ayu-tag"
                      />

                      {p.imgUrl && (
                        <div className="hidden group-hover/eye:block absolute bottom-full left-0 mb-2 w-64 aspect-16/10 rounded-lg overflow-hidden border border-slate-700 bg-slate-950 p-1 shadow-2xl z-50 pointer-events-none">
                          <div className="relative w-full h-full">
                            <Image
                              src={p.imgUrl}
                              alt=""
                              fill
                              sizes="256px"
                              className="object-cover rounded-md bg-slate-900"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {p.extraLink && (
                    <Link
                      href={p.extraLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ayu-string underline mr-5"
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
