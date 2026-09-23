import { prisma } from "@/shared/lib/db";
import { Prisma } from "@/generated/prisma";

export type ProjectWithTech = Prisma.ProjectGetPayload<{
  include: { technologies: true }
}>;

export async function getProjects(): Promise<ProjectWithTech[]> {
  return await prisma.project.findMany({
    include: {
      technologies: true,
    },
    orderBy: {
      title: "asc",
    },
  });
}
