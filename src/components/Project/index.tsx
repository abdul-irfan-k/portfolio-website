"use client";
import { projectDetails } from "@/project";
import React, { useEffect, useRef, useState } from "react";
import ProjectViewAnimation from "../shared/ProjectViewAnimation";
import gsap from "gsap";
import ButtonHoverAnimation from "../shared/ButtonHoverAnimation";

const Project = () => {
  const [projectViewIndex, setProjectViewIndex] = useState<number | undefined>(
    undefined
  );

  const [isPreviewActive, setIsPreviewActive] = useState<boolean>(false);

  return (
    <div>
      <div className="py-5 px-20 ">
        <div
          className="relative  flex flex-col"
          onMouseEnter={() => setIsPreviewActive(true)}
          onMouseLeave={() => setIsPreviewActive(false)}
        >
          {projectDetails.map((project, index) => {
            return (
              <div
                className="px-20 py-14 flex justify-between items-center"
                key={index}
                onMouseEnter={() => setProjectViewIndex(index)}
              >
                <h1 className="text-7xl ">{project.name}</h1>
                <span className="text-base">Design & Development</span>
              </div>
            );
          })}
        </div>

        <div className="my-10 flex justify-center">
          <ButtonHoverAnimation style={undefined}>
            <div className="px-8 py-4 rounded-full flex items-center justify-center border-[1px] border-dark text-lg">
              <span className="z-[20]">More Work </span>
            </div>
          </ButtonHoverAnimation>
        </div>
      </div>
      <ProjectViewAnimation
        currentIndex={projectViewIndex}
        isActive={isPreviewActive}
        projects={projectDetails}
        isListView={true}
      />
    </div>
  );
};

export default Project;
