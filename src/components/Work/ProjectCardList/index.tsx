import React, { useState } from "react";
import { projectDetails } from "@/project";
import ProjectCard from "./ProjectCard";
import ButtonHoverAnimation from "@/components/shared/ButtonHoverAnimation";
import ProjectViewAnimation from "@/components/shared/ProjectViewAnimation";

const ProjectCardList = () => {
  const [projectViewIndex, setProjectViewIndex] = useState<number | undefined>(
    undefined
  );
  return (
    <div className="mt-10  md:px-48">
      <div className="gap-x-3  flex w-full flex-wrap  justify-between">
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
      <div className="my-20 flex items-center justify-center">
        <ButtonHoverAnimation>
          <div className=" px-10 py-5 bg-dark text-slate-50 text-lg">
            <span className="z-[20] text ">Archive</span>
          </div>
        </ButtonHoverAnimation>
      </div>
      <ProjectViewAnimation
        currentIndex={projectViewIndex}
        isActive={projectViewIndex == undefined ? false : true}
        projects={projectDetails}
        isListView={false}
      />
    </div>
  );
};

export default ProjectCardList;
