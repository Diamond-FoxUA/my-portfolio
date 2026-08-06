"use client";
import Link from "next/link";
import { useDragControls, motion } from "framer-motion";
import type { ProjectItem } from "../widgets/projects/model/projectsData";
import { RefObject } from "react";
import { X } from "lucide-react";

type ProjectCardProps = {
  item: ProjectItem;
  constraintsRef: RefObject<HTMLUListElement | null>;
  isActive: boolean;
  onActivate: () => void;
};

export default function ProjectCard({
  item,
  constraintsRef,
  isActive,
  onActivate,
}: ProjectCardProps) {
  const dragControls = useDragControls();
  return (
    <motion.li
      drag
      dragConstraints={constraintsRef}
      dragControls={dragControls}
      dragListener={false}
      dragElastic={0.1}
      onMouseDown={onActivate}
      style={{ x: item.defaultX, y: item.defaultY }}
      className={`absolute w-85 list-none border border-ayu-border bg-ayu-bg shadow-2xl ${isActive ? "z-50" : "z-10"}`}
      whileDrag={{
        borderColor: "#10b981",
        boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.2)",
      }}
    >
      <article aria-labelledby={`title-${item.id}`}>
        <div
          aria-hidden="true"
          onPointerDown={(e) => dragControls.start(e)}
          className="flex items-center justify-between bg-ayu-border w-full p-2 cursor-default"
        >
          <span className="font-mono text-xs text-ayu-heading">
            {item.slug}.config.ts
          </span>
          <div className="flex items-center">
            <X className="w-3 h-3 text-ayu-heading" />
          </div>
        </div>

        <div className="flex flex-col gap-3 p-2">
          <h3 id={`title-${item.id}`}>{item.title}</h3>
          <p className="text-xs text-ayu-tag font-mono">{item.techStack.join(", ")}</p>
          <p className="text-sm">{item.description}</p>

          <div className="font-mono text-sm justify-end flex gap-3 pr-3">
            <Link
              className="text-ayu-string hover:text-ayu-string/80 active:text-ayu-string/50 underline"
              target="_blank"
              href={item.githubLink}
            >
              GitHub
            </Link>
            <Link
              className="text-ayu-string hover:text-ayu-string/80 active:text-ayu-string/50 underline"
              target="_blank"
              href={item.liveLink}
            >
              Live
            </Link>
          </div>
        </div>
      </article>
    </motion.li>
  );
}
