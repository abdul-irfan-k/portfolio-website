import { projectDetailInterface } from "@/project";
import Image from "next/image";
import React, { FC } from "react";

interface ProjectCardProps {
  onMouseEnterHandler(): void;
  onMouseLeaveHandler?(): void;
  project: projectDetailInterface;
}
const ProjectCard: FC<ProjectCardProps> = ({
  onMouseEnterHandler,
  project,
  onMouseLeaveHandler,
}) => {
  return (
    <div
      className="w-full flex flex-col"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className="relative w-full aspect-square ">
        <Image alt="image" src={project.bannerUrl} fill />
      </div>
      <span className="mt-2 text-4xl ">{project.name}</span>
      <div className="mt-2 flex justify-between ">
        <span className="text-base">Design & Development</span>
        <span className="text-base">2023</span>
      </div>
    </div>
  );
};

export default ProjectCard;
