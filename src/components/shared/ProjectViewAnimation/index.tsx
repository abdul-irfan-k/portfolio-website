import Image from "next/image";
import React, { FC } from "react";
import { motion, Variants } from "framer-motion";

interface projectDetailInterface {
  name: string;
  bannerUrl: string;
}
interface ProjectViewAnimationProps {
  projects: projectDetailInterface[];
  currentIndex: number;
  isActive: boolean;
}

const scaleAnimation: Variants = {
  initial: { scale: 0 },
  enter: { scale: 1 },
  exit: { scale: 0 },
};

const ProjectViewAnimation: FC<ProjectViewAnimationProps> = ({
  projects,
  currentIndex,
  isActive,
}) => {
  return (
    <div className="relative " style={{ pointerEvents: "none" }}>
      <motion.div
        className="elative   w-[25vw] gap-2 aspect-square overflow-hidden pointer-events-none"
        initial="initial"
        variants={scaleAnimation}
        animate={isActive ? "enter" : "exit"}
      >
        <div
          className="w-full h-full "
          style={{
            transform: `translateY(-${currentIndex * 100}%)`,
            transition: "all 0.4s ease",
            pointerEvents:"none"
          }}
        >
          {projects.map((project, index) => {
            return (
              <div
                className=" relative  px-8 py-16 bg-dark w-full aspect-square block overflow-hidden"
                key={index}
              >
                <div className="relative w-full h-full">
                  <Image src={project.bannerUrl} alt="image" fill />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectViewAnimation;
