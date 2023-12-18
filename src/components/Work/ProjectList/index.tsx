"use client";
import { projectDetails } from "@/project";
import React, { useState } from "react";
import ProjectRow from "./ProjectRow";
import ProjectViewAnimation from "@/components/shared/ProjectViewAnimation";

const ProjectList = () => {
  const [projectViewIndex, setProjectViewIndex] = useState<number | undefined>(
    undefined
  );

  const [isPreviewActive, setIsPreviewActive] = useState<boolean>(false);
  return (
    <div className="mt-10">
      <div className="px-48 flex items-center text-slate-300 border-slate-300 border-b-[2px]">
        <span className="w-[40%]">CLIENT</span>
        <span className="w-[15%]">LOCATION</span>
        <span className="w-[30%]">SERVICE</span>
        <span className="w-[15%]">YEAR</span>
      </div>
      <div
        className="flex flex-col"
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
          />
    </div>
  );
};

export default ProjectList;
