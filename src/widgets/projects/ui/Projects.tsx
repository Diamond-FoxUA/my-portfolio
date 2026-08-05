"use client";
import { useRef, useState } from "react";
import ProjectCard from "../entities/ProjectCard";
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
      {/* TODO: Remove grid, add starting coordinates to cards, add relative to
      parent, add absolute to cards */}
      <ul
        ref={constraintsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 w-full bg-transparent transition-colors duration-0"
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
