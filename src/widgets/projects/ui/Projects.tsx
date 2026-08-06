"use client";
import { useRef, useState } from "react";
import ProjectCard from "../../../entities/ProjectCard";
import { projectsData } from "../model/projectsData";

export default function Projects() {
  const constraintsRef = useRef<HTMLUListElement>(null);
  const [activeWindow, setActiveWindow] = useState<null | string>(null);

  return (
    <section id="projects" aria-describedby="projects-title" className="py-15">
      <h2
        id="projects-title"
        className="text-2xl font-black tracking-tight pb-10 uppercase text-white font-sans"
      >
        My projects
      </h2>

      <p className="text-sm font-mono text-center text-ayu-keyword/70">
        <span aria-hidden="true" className="animate-pulse">
          ➔&nbsp;
        </span>
        <span>
          Interactive workspace. Drag file headers to rearrange layout.
        </span>
      </p>

      <ul
        ref={constraintsRef}
        className="relative h-175 w-full bg-transparent transition-colors duration-0"
      >
        {projectsData.map((item) => (
          <ProjectCard
            key={item.id}
            item={item}
            constraintsRef={constraintsRef}
            isActive={activeWindow === item.id}
            onActivate={() => setActiveWindow(item.id)}
          />
        ))}
      </ul>
    </section>
  );
}
