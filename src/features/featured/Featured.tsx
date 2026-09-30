import Link from "next/link";
import Image from "next/image";

import { getFeaturedProject } from "@/shared/api/projects";

export default async function Featured() {
  const project = await getFeaturedProject();

  if (!project) return null;

  const isValidImage =
    project.imgUrl && project.imgUrl.includes("res.cloudinary.com");
  const displayImage = isValidImage
    ? project.imgUrl!
    : "/img/placeholders/featured-placeholder.jpg";

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
            href={(project.liveLink || project.githubLink || "#") as string}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open live demo of ${project.title}`}
            className="w-full aspect-16/10 overflow-hidden rounded-lg group border border-slate-800 bg-slate-900 block relative transition-colors duration-300 hover:border-cyan-500/50 focus-visible:border-cyan-500/50 focus:outline-none"
          >
            <Image
              src={displayImage}
              alt=""
              width={800}
              height={500}
              className="block w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01] group-focus-visible:scale-[1.01]"
              priority
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
          </Link>

          <div className="w-full h-auto flex flex-col gap-5">
            <h3 className="text-xl text-center font-bold uppercase tracking-wide">
              {project.title}
            </h3>

            <ul className="flex flex-col gap-3">
              {project.features.map((f) => (
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
            {project.technologies.map((i) => (
              <li key={i.id}>{i.name}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-3 pt-5">
          {project.liveLink && (
            <Link
              href={project.liveLink as string}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ayu-string hover:text-ayu-string/80 active:text-ayu-string/50 underline transition-colors duration-300"
            >
              Live
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink as string}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ayu-string hover:text-ayu-string/80 active:text-ayu-string/50 underline transition-colors duration-300"
            >
              GitHub
            </Link>
          )}
          {project.extraLink && (
            <Link
              href={project.extraLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ayu-string hover:text-ayu-string/80 active:text-ayu-string/50 underline transition-colors duration-300"
            >
              {project.extraLinkText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
