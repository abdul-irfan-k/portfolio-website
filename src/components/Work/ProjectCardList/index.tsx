"use client";
import React, { useRef, useState } from "react";

import ButtonHoverAnimation from "@/components/shared/ButtonHoverAnimation";
import ProjectViewAnimation from "@/components/shared/ProjectViewAnimation";
import { projectDetails } from "@/project";

import ProjectCard from "./ProjectCard";
// import ProjectViewAnimation from "@/components/shared/ProjectViewAnimation";

const ProjectCardList = () => {
  const [projectViewIndex, setProjectViewIndex] = useState<number | undefined>(
    undefined
  );
  const animationContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div className=" mt-10  ">
      <div className="relative" ref={animationContainerRef}>
        <div className=" gap-x-3  flex w-full flex-wrap  justify-between  px-10 md:px-20 lg:px-32 xl:px-60">
          {projectDetails.map((project, index) => {
            return (
              <div
                key={index}
                className="mt-20 flex-[0_0_100%] md:flex-[0_0_45%] "
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
      <ProjectViewAnimation
        currentIndex={projectViewIndex}
        isActive={projectViewIndex == undefined ? false : true}
        //@ts-ignore
        projects={projectDetails}
        isListView={false}
        animationContainerRef={animationContainerRef}
      />
      <div className="my-20 flex items-center justify-center">
        <ButtonHoverAnimation>
          <div className=" px-10 py-5 bg-dark text-slate-50 text-lg">
            <span className="z-[20] text ">Archive</span>
          </div>
        </ButtonHoverAnimation>
      </div>
    </div>
  );
};

export default ProjectCardList;
