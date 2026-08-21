import { prisma } from "@/shared/lib/db";
import { Prisma } from "@/generated/prisma";

export type TechStatItem = Prisma.TechnologyGetPayload<{
  select: {
    id: true;
    name: true;
    _count: {
      select: { projects: true };
    };
  };
}>;

export async function getTechStats(): Promise<TechStatItem[]> {
  return await prisma.technology.findMany({
    select: {
      id: true,
      name: true,
      _count: {
        select: {
          projects: true,
        },
      },
    },
    orderBy: {
      projects: {
        _count: "desc",
      },
    },
  });
}
