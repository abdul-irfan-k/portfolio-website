import { useRouter } from "next/navigation";
import React, { FC } from "react";

import { projectDetailInterface } from "@/project";

interface ProjectRowProps {
  onMouseEnterHandler(): void;
  project: projectDetailInterface;
}
const ProjectRow: FC<ProjectRowProps> = ({ onMouseEnterHandler, project }) => {
  const router = useRouter();
  return (
    <div
      className=" py-10 flex  items-center text-slate-800  "
      onMouseEnter={onMouseEnterHandler}
      onClick={() => router.push(`/work/${project.name}`)}
    >
      <h1 className="w-[70%] text-4xl lg:text-5xl  xl:text-6xl ">
        {project.name}
      </h1>
      <span className="w-[30%] text-lg">Design & Development</span>
      <span className="ml-auto  text-lg">2023</span>
    </div>
  );
};

export default ProjectRow;
