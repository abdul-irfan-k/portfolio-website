import { Project } from "../generated/prisma";

export async function fetchProjects(): Promise<Project[]> {
  const apiUrl = process.env.API_URL || "http://localhost:3000/api";
  const res = await fetch(`${apiUrl}/projects`, {
    cache: "force-cache",
    next: { tags: ["projects"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}
