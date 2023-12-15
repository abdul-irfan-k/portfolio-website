import { projectDetailInterface } from "@/project";
import React, { FC } from "react";

interface ProjectRowProps {
  onMouseEnterHandler(): void;
  project: projectDetailInterface;
}
const ProjectRow: FC<ProjectRowProps> = ({ onMouseEnterHandler, project }) => {
  return (
    <div
      className="px-48 py-10 flex  items-center text-slate-800"
      onMouseEnter={onMouseEnterHandler}
    >
      <h1 className="w-[40%] text-4xl ">{project.name}</h1>
      <span className="w-[15%] text-lg">India</span>
      <span className="w-[30%] text-lg">Design & Development</span>
      <span className="w-[15%] text-lg">2023</span>
    </div>
  );
};

export default ProjectRow;
