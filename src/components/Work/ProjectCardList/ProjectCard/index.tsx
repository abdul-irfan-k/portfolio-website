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
      <div className="relative w-full aspect-square ">
        <Image
          alt="image"
          src={
            project.banner_url || process.env.NEXT_PUBLIC_DEFAULT_IMAGE || ""
          }
          fill
          sizes="(min-width: 640px) 45vw, 100vw"
        />
      </div>
      <span className="mt-2 font-display text-4xl">{project.project_name}</span>
      <div className="mt-2 flex justify-between ">
        <span className="text-base">Design & Development</span>
        <span className="text-base">2023</span>
      </div>
    </div>
  );
};

export default ProjectCard;
