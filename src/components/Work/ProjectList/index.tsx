"use client";
import React, { FC, useRef, useState } from "react";

import ProjectViewAnimation from "@/components/shared/ProjectViewAnimation";
import { Project } from "@/types/Project";

import ProjectRow from "./ProjectRow";
// import ProjectViewAnimation from "@/components/shared/ProjectViewAnimation";

interface ProjectListProps {
  projects: Project[];
}
const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  const animationContainerRef = useRef<HTMLDivElement>(null);
  const [projectViewIndex, setProjectViewIndex] = useState<number | undefined>(
    undefined
  );
  const [isPreviewActive, setIsPreviewActive] = useState<boolean>(false);

  return (
    <div className=" mt-20">
      <div className=" w-full md:px-20 lg:px-32 xl:px-60">
        <div className="flex items-center text-slate-900 border-slate-300 border-b-[2px]">
          <span className="w-[70%]">CLIENT</span>
          <span className="w-[30%]">SERVICE</span>
          <span className="ml-auto">YEAR</span>
        </div>
      </div>
      <div className="px-10 md:px-20 lg:px-32 xl:px-60  ">
        <div
          className="relative flex flex-col   "
          ref={animationContainerRef}
          onMouseEnter={() => setIsPreviewActive(true)}
          onMouseLeave={() => setIsPreviewActive(false)}
        >
          {projects.map((project, index) => {
            return (
              <ProjectRow
                key={index}
                project={project}
                onMouseEnterHandler={() => setProjectViewIndex(index)}
              />
            );
          })}
        </div>
      </div>
      <ProjectViewAnimation
        currentIndex={projectViewIndex}
        isActive={isPreviewActive}
        //@ts-ignore
        projects={projects}
        isListView
        animationContainerRef={animationContainerRef}
      />
    </div>
  );
};

export default ProjectList;
