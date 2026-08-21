import { cacheLife, cacheTag } from "next/cache";

import prisma from "@/lib/prisma";

async function getProjectsFromDb() {
  console.log("Fetching projects from database");
  return prisma.project.findMany({ orderBy: { order: "asc" } });
}

async function getCachedProjects() {
  "use cache";
  cacheLife("projects");
  cacheTag("projects");
  return getProjectsFromDb();
}

export async function fetchProjects() {
  if (process.env.NODE_ENV === "development") {
    return getProjectsFromDb();
  }
  return getCachedProjects();
}
