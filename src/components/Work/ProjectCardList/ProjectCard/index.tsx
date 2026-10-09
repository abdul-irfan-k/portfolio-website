"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

import { Project } from "@/types/Project";

interface ProjectCardProps {
  onMouseEnterHandler(): void;
  onMouseLeaveHandler?(): void;
  project: Project;
}
const ProjectCard: FC<ProjectCardProps> = ({
  onMouseEnterHandler,
  project,
  onMouseLeaveHandler,
}) => {
  const router = useRouter();
  return (
    <div
      className="w-full flex flex-col"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onClick={() => router.push(`/projects/${project.project_name}`)}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 md:aspect-square md:overflow-visible md:rounded-none md:bg-transparent">
        <Image
          alt="image"
          src={
            project.banner_url || process.env.NEXT_PUBLIC_DEFAULT_IMAGE || ""
          }
          fill
          className="object-cover md:object-fill"
          sizes="(min-width: 640px) 45vw, 100vw"
        />
      </div>
      <span className="mt-4 font-display text-2xl md:mt-2 md:text-4xl">
        {project.project_name}
      </span>
      <div className="mt-1 flex justify-between max-md:text-slate-500 md:mt-2">
        <span className="text-sm md:text-base">Design & Development</span>
        <span className="text-sm md:text-base">2023</span>
      </div>
    </div>
  );
};

export default ProjectCard;
