import { unstable_cache } from "next/cache";

import prisma from "@/lib/prisma";

export const fetchProjects = unstable_cache(
  async () => {
    console.log("Fetching projects from database");
    return await prisma.project.findMany({ orderBy: { order: "asc" } });
  },
  ["projects"],
  { revalidate: 60 }
);
