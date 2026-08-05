"use client";
import { useDragControls, motion } from "framer-motion";
import type { ProjectItem } from "../model/projectsData";
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
      onPointerDown={onActivate}
      style={{ zIndex: isActive ? 50 : 10 }}
    >
      <article className="border border-ayu-border  shadow-2xl">
        <div
          onPointerDown={(e) => dragControls.start(e)}
          className="flex items-center justify-between bg-ayu-border w-full p-2"
        >
          <span className="font-mono text-xs text-ayu-heading">
            {item.slug}.config.ts
          </span>
          <div className="flex items-center">
            <X className="w-3 h-3 text-ayu-heading" />
          </div>
        </div>

        <div className="p-2">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </article>
    </motion.li>
  );
}
