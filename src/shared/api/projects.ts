import { prisma } from "@/shared/lib/db";
import { Prisma } from "@/generated/prisma";

export type ProjectWithTech = Prisma.ProjectGetPayload<{
  include: { technologies: true };
}>;
export type FeaturedProjectWithRelations = Prisma.ProjectGetPayload<{
  include: { technologies: true; features: true };
}>;

export async function getProjects(): Promise<ProjectWithTech[]> {
  return await prisma.project.findMany({
    where: {
      isFeatured: false,
    },
    orderBy: [
      {
        createdAt: "desc",
      },
      {
        title: "asc",
      },
    ],
    include: {
      technologies: true,
    },
  });
}

export async function getFeaturedProject(): Promise<FeaturedProjectWithRelations | null> {
  return await prisma.project.findFirst({
    where: {
      isFeatured: true,
    },
    include: {
      features: true,
      technologies: true,
    },
  });
}
