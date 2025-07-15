"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useRef, useState } from "react";

import { Project as IProject } from "@/generated/prisma";

import ButtonHoverAnimation from "../shared/ButtonHoverAnimation";
import ProjectViewAnimation from "../shared/ProjectViewAnimation";

interface ProjectProps {
  projects: IProject[];
}
const Project: FC<ProjectProps> = ({ projects }) => {
  const [projectViewIndex, setProjectViewIndex] = useState<number | undefined>(
    undefined
  );

  const [isPreviewActive, setIsPreviewActive] = useState<boolean>(false);
  const router = useRouter();
  const testRef = useRef<HTMLDivElement>(null);

  interface projectDetailInterface {
    name: string;
    bannerUrl: string;
  }

  return (
    <div>
      <div className="relative py-5 md:px-10 xl:px-20  " ref={testRef}>
        <div
          className="relative  flex flex-col  "
          onMouseEnter={() => setIsPreviewActive(true)}
          onMouseLeave={() => setIsPreviewActive(false)}
        >
          {projects.map((project, index) => {
            return (
              <div
                className=" py-14 flex justify-between items-center md:px-10 md:py-12 xl:px-20 "
                key={index}
                onMouseEnter={() => setProjectViewIndex(index)}
                onClick={() => router.push(`/work/${project.project_name}`)}
              >
                <h1 className="text-7xl md:text-6xl  xl:text-7xl uppercase">
                  {project.project_name}
                </h1>
                <span className="text-base">Design & Development</span>
              </div>
            );
          })}
        </div>

        <div className="my-10 flex justify-center">
          <ButtonHoverAnimation style={undefined}>
            <div className="px-8 py-4 rounded-full flex items-center justify-center border-[1px] border-dark text-lg">
              <span className="text z-[20]">
                <Link href={"/work"}>More Work</Link>
              </span>
            </div>
          </ButtonHoverAnimation>
        </div>
      </div>
      <ProjectViewAnimation
        currentIndex={projectViewIndex}
        isActive={isPreviewActive}
        //@ts-ignore
        projects={projects}
        isListView={true}
        animationContainerRef={testRef}
      />
    </div>
  );
};

export default Project;
