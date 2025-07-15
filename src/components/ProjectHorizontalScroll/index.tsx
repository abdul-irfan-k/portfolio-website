"use client";
import React, { FC, useRef } from "react";
import ProjectHorizontalScrollCard from "./ProjectHorizontalScrollCard";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { Project } from "@/types/Project";

interface ProjectHorizontalScrollProps {
  projects: Project[];
}
const ProjectHorizontalScroll: FC<ProjectHorizontalScrollProps> = ({
  projects,
}) => {
  const conatinerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: conatinerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -100]);

  const projectsContainingBanner = projects.filter(
    (project) => project.banner_url
  );
  projectsContainingBanner.sort((a, b) => a.order - b.order);

  return (
    <div className="my-10" ref={conatinerRef}>
      <motion.div
        className="leftscrollcontainer  gap-10 flex  "
        style={{ x: x1 }}
      >
        {projectsContainingBanner.slice(0, 6).map((project, index) => (
          <ProjectHorizontalScrollCard
            key={index}
            type="image"
            //@ts-ignore
            src={project.banner_url}
          />
        ))}
      </motion.div>
      <motion.div
        className="rightscrollcontainer relative  mt-5  gap-10 flex rightscrollcontainer translate-x-[40%]"
        style={{ x: x2 }}
      >
        {projectsContainingBanner.slice(4, 10).map((project, index) => (
          <ProjectHorizontalScrollCard
            key={index}
            type="image"
            //@ts-ignore

            src={project.banner_url}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectHorizontalScroll;
