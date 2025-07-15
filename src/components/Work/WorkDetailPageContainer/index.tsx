import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import NorthArrow from "@/components/Icons/north-arrow";
import ButtonHoverAnimation from "@/components/shared/ButtonHoverAnimation";
import Video from "@/components/shared/Video";
import { Project } from "@/types/Project";

interface WorkDetailPageContainerProps {
  project: Project;
}
const WorkDetailPageContainer: FC<WorkDetailPageContainerProps> = ({
  project,
}) => {
  return (
    <div>
      <div className="mt-10  px-5 sm:px-10 md:px-20 lg:px-32 xl:px-60  ">
        <div className="relative  ">
          <div className="relative ">
            <h1
              className="w-[80%]  text-6xl md:text-7xl lg:text-8xl xl:text-9xl "
              data-speed="10"
            >
              {project.project_name}
            </h1>

            <div className="absolute  top-full right-0  translate-y-[-40%] z-20 md:top-[80%] ">
              <ButtonHoverAnimation style={{ marginTop: "5rem" }}>
                <Link
                  href={project.website_url ? project.website_url : "#"}
                  className=" w-[35vw] max-w-44 aspect-square rounded-full flex items-center justify-center fill-slate-50 text-slate-50 bg-blue-600"
                >
                  <span className="gap-1 text w-auto  flex  items-center z-20 ">
                    Live Site
                    <NorthArrow className="w-6 h-6" />
                  </span>
                </Link>
              </ButtonHoverAnimation>
            </div>
          </div>

          <div className="mt-20">
            <div className="relative   aspect-square">
              <Image
                src={"/Asset/monitor4.png"}
                alt="image"
                fill
                className="object-contain"
              />

              <div className="absolute w-[83%] left-[8%] top-[20%]  ml-[0.6%]     block">
                <Video
                  videoSrc={
                    project.video_url
                      ? project.video_url
                      : process.env.NEXT_PUBLIC_DEFAULT_VIDEO || ""
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPageContainer;
