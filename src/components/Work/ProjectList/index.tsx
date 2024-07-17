"use client";
import React, { FC, useRef, useState } from "react";
import ProjectRow from "./ProjectRow";
import ProjectViewAnimation from "@/components/shared/ProjectViewAnimation";
// import ProjectViewAnimation from "@/components/shared/ProjectViewAnimation";

interface ProjectListProps {
  projectDetails: {
    client: string;
    location: string;
    service: string;
    year: string;
    description: string;
    images: string[];
  }[];
}
const ProjectList: FC<ProjectListProps> = ({ projectDetails }) => {
  const animationContainerRef = useRef<HTMLDivElement>(null);
  const [projectViewIndex, setProjectViewIndex] = useState<number | undefined>(
    undefined
  );
  const [isPreviewActive, setIsPreviewActive] = useState<boolean>(false);

  return (
    <div className=" mt-10">
      <div className="px-[17rem] w-full">
        <div className="flex items-center text-slate-900 border-slate-300 border-b-[2px]">
          <span className="w-[40%]">CLIENT</span>
          <span className="w-[15%]">LOCATION</span>
          <span className="w-[30%]">SERVICE</span>
          <span className="w-[15%]">YEAR</span>
        </div>
      </div>
      <div
        className="relative flex flex-col px-20"
        ref={animationContainerRef}
        onMouseEnter={() => setIsPreviewActive(true)}
        onMouseLeave={() => setIsPreviewActive(false)}
      >
        {projectDetails.map((project, index) => {
          return (
            <ProjectRow
              key={index}
              onMouseEnterHandler={() => setProjectViewIndex(index)}
              project={project}
            />
          );
        })}
      </div>
      <ProjectViewAnimation
        currentIndex={projectViewIndex}
        isActive={isPreviewActive}
        projects={projectDetails}
        isListView
        animationContainerRef={animationContainerRef}
      />
    </div>
  );
};

export default ProjectList;
