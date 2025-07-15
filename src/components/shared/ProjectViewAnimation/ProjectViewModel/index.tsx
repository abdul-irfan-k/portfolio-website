import Image from "next/image";
import React, { FC } from "react";
import { motion, Variants } from "framer-motion";

interface projectDetailInterface {
  name: string;
  banner_url: string;
}
interface ProjectViewModelProps {
  projects: projectDetailInterface[];
  currentIndex?: number;
  isActive: boolean;
}

const scaleAnimation: Variants = {
  initial: { scale: 0 },
  enter: { scale: 1 },
  exit: { scale: 0 },
};

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
                <Image src={project.banner_url} alt="image" fill />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectViewModel;
