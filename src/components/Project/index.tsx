"use client";
import { projectDetails } from "@/project";
import React, { useEffect, useRef, useState } from "react";
import ProjectViewAnimation from "../shared/ProjectViewAnimation";
import gsap from "gsap";

const Project = () => {
  const projectContainerRef = useRef<HTMLDivElement>(null);
  const projectViewContainerRef = useRef<HTMLDivElement>(null);

  const [projectViewIndex, setProjectViewIndex] = useState<number | undefined>(
    undefined
  );

  const [isPreviewActive, setIsPreviewActive] = useState<boolean>(false);

  useEffect(() => {
    if (
      projectContainerRef == null ||
      projectContainerRef.current == null ||
      projectViewContainerRef == null ||
      projectViewContainerRef.current == null
    )
      return;

    const xMoveContainerRef = gsap.quickTo(
      projectViewContainerRef.current,
      "x",
      { duration: 0.8, ease: "power3" }
    );

    const yMoveontainerRef = gsap.quickTo(
      projectViewContainerRef.current,
      "top",
      { duration: 0.5, ease: "power3" }
    );

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY ,clientY} = e;
      xMoveContainerRef(pageX);
      yMoveontainerRef(pageY);
    });
  }, [projectContainerRef.current, projectViewContainerRef.current]);

  return (
    <div>
      <div className="py-5 px-20 ">
        <div
          className=" flex flex-col"
          ref={projectContainerRef}
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
          <div className="px-8 py-4 rounded-full border-[1px] border-dark text-lg">
            More Work
          </div>
        </div>
      </div>
      {projectViewIndex != undefined && (
        <div className="absolute pointer-events-none" ref={projectViewContainerRef} 
        >
          <ProjectViewAnimation
            projects={projectDetails}
            currentIndex={projectViewIndex}
            isActive={isPreviewActive}
          />
        </div>
      )}
    </div>
  );
};

export default Project;
