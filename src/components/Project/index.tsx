"use client";
// import { projectDetails } from "@/project";
import React, { useRef, useState } from "react";
import ProjectViewAnimation from "../shared/ProjectViewAnimation";
import ButtonHoverAnimation from "../shared/ButtonHoverAnimation";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Project = () => {
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

  const projectDetails: projectDetailInterface[] = [
    {
      name: "E commerce Project",
      bannerUrl: "/Asset/banner.jpg",
    },
    {
      name: "Weather App",
      bannerUrl: "/Asset/infinixlaptop.jpg",
    },
    {
      name: "Social Media App",
      bannerUrl: "/Asset/macbooklaptop.jpeg",
    },
    {
      name: "Chat App",
      bannerUrl: "/Asset/wachbanner2.jpg",
    },
    {
      name: "Social Media App",
      bannerUrl: "/Asset/macbooklaptop.jpeg",
    },
  ];

  return (
    <div>
      <div className="relative py-5 px-20 " ref={testRef}>
        <div
          className="relative  flex flex-col  "
          onMouseEnter={() => setIsPreviewActive(true)}
          onMouseLeave={() => setIsPreviewActive(false)}
        >
          {projectDetails.map((project, index) => {
            return (
              <div
                className="px-20 py-14 flex justify-between items-center"
                key={index}
                onMouseEnter={() => setProjectViewIndex(index)}
                onClick={() =>
                  router.push(`/work/${project.name.replace(/\s/g, "")}`)
                }
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
        projects={projectDetails}
        isListView={true}
        animationContainerRef={testRef}
      />
    </div>
  );
};

export default Project;
