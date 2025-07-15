import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { FC } from "react";

import { Project } from "@/types/Project";

interface ProjectViewModelProps {
  projects: Project[];
  currentIndex?: number;
  isActive: boolean;
}

const ProjectViewModel: FC<ProjectViewModelProps> = ({
  projects,
  currentIndex,
  isActive,
}) => {
  return (
    <motion.div className="relative   w-full gap-2 aspect-square   overflow-hidden pointer-events-none ">
      <div
        className="w-full h-full "
        style={{
          transform: `translateY(-${
            currentIndex != undefined ? currentIndex * 100 : 0
          }%)`,
          transition: "all 0.4s ease",
          pointerEvents: "none",
        }}
      >
        {projects.map((project, index) => {
          return (
            <div
              className=" relative  px-8 py-16 bg-dark w-full  aspect-square block overflow-hidden z-[60]"
              key={index}
            >
              <div className="relative w-full h-full">
                <Image
                  src={
                    project.banner_url ||
                    process.env.NEXT_PUBLIC_DEFAULT_IMAGE ||
                    ""
                  }
                  alt="image"
                  fill
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectViewModel;
