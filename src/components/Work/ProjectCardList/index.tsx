"use client";
import React, { FC, useRef, useState } from "react";

import ButtonHoverAnimation from "@/components/shared/ButtonHoverAnimation";
import ProjectViewAnimation from "@/components/shared/ProjectViewAnimation";
import { Project } from "@/types/Project";

import ProjectCard from "./ProjectCard";
// import ProjectViewAnimation from "@/components/shared/ProjectViewAnimation";

interface ProjectCardListProps {
  projects: Project[];
  isHoverPreviewEnabled?: boolean;
}
const ProjectCardList: FC<ProjectCardListProps> = ({
  projects,
  isHoverPreviewEnabled = true,
}) => {
  const [projectViewIndex, setProjectViewIndex] = useState<number | undefined>(
    undefined
  );
  const animationContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="mt-4 md:mt-10">
      <div className="relative" ref={animationContainerRef}>
        <div className="gap-x-3 flex w-full flex-wrap justify-between px-5 sm:px-10 md:px-20 lg:px-32 xl:px-60">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="mt-12 flex-[0_0_100%] md:mt-20 md:flex-[0_0_45%]"
              >
                <ProjectCard
                  onMouseEnterHandler={() => setProjectViewIndex(index)}
                  project={project}
                  onMouseLeaveHandler={() => setProjectViewIndex(undefined)}
                />
              </div>
            );
          })}
        </div>
      </div>
      {isHoverPreviewEnabled && (
        <ProjectViewAnimation
          currentIndex={projectViewIndex}
          isActive={projectViewIndex == undefined ? false : true}
          //@ts-ignore
          projects={projects}
          isListView={false}
          animationContainerRef={animationContainerRef}
        />
      )}
      <div className="my-14 flex items-center justify-center md:my-20">
        <ButtonHoverAnimation>
          <div className="px-8 py-4 bg-dark text-slate-50 text-sm md:px-10 md:py-5 md:text-lg">
            <span className="z-[20] text ">Archive</span>
          </div>
        </ButtonHoverAnimation>
      </div>
    </div>
  );
};

export default ProjectCardList;
