"use client";
import React, { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import ProjectViewModel from "./ProjectViewModel";
import { Variants, motion } from "framer-motion";

interface projectDetailInterface {
  name: string;
  bannerUrl: string;
}
interface ProjectViewAnimationProps {
  projects: projectDetailInterface[];
  currentIndex?: number;
  isActive: boolean;
  isListView: boolean;
  animationContainerRef: React.RefObject<HTMLDivElement>;
}

const scaleAnimation: Variants = {
  // initial: { width: "0%", height: "0%" },
  enter: { width: "100%" },
  exit: { width: "0px" },
};
const ProjectViewAnimation: FC<ProjectViewAnimationProps> = ({
  currentIndex,
  isActive,
  projects,
  isListView,
  animationContainerRef
}) => {
  const projectContainerRef = useRef<HTMLDivElement>(null);
  const projectViewLableRef = useRef<HTMLDivElement>(null);
  const projectViewCursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (
      !projectContainerRef.current ||
      !projectViewLableRef.current ||
      !projectViewCursorRef ||
      !animationContainerRef.current
    )
      return;

    const xMove = gsap.quickTo(projectContainerRef.current, "x", {
      duration: 0.8,
      ease: "power3",
    });

    const yMove = gsap.quickTo(projectContainerRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const xMoveOnLabel = gsap.quickTo(projectViewLableRef.current, "x", {
      duration: 0.4,
      ease: "power3",
    });
    const YMoveOnLabel = gsap.quickTo(projectViewLableRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const xMoveOnCursor = gsap.quickTo(projectViewCursorRef.current, "x", {
      duration: 0.5,
      ease: "power3",
    });
    const YMoveOnCursor = gsap.quickTo(projectViewCursorRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    console.log("test ref");
    // yMove(y)
    animationContainerRef.current.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      if (
        !projectContainerRef.current ||
        !projectViewLableRef.current ||
        !projectViewCursorRef.current
      )
        return;

      xMove(pageX - projectContainerRef.current.clientWidth / 2);
      yMove(pageY - projectContainerRef.current.clientHeight / 2);

      xMoveOnLabel(pageX - projectViewLableRef.current.clientWidth / 2);
      YMoveOnLabel(pageY - projectViewLableRef.current.clientHeight / 2);

      xMoveOnCursor(pageX - projectViewCursorRef.current.clientWidth / 2);
      YMoveOnCursor(pageY - projectViewCursorRef.current.clientHeight / 2);
    });
  }, [projectContainerRef.current,animationContainerRef.current]);

  return (
    <>
      <div
        className={
          "absolute pointer-events-none  aspect-square overflow-hidden  " +
          (isListView ? " w-[27vw]" : "w-0")
        }
        ref={projectContainerRef}
      >
        <motion.div
          className="relative  pointer-events-none   overflow-hidden  left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
          variants={scaleAnimation}
          animate={isActive ? "enter" : "exit"}
          style={{
            transition: "width  0.4s cubic-bezier(0.36, 0, 0.66, 0)",
          }}
        >
          <ProjectViewModel
            projects={projects}
            currentIndex={currentIndex}
            isActive={isActive}
          />
        </motion.div>
      </div>
      <div
        className="absolute w-24 pointer-events-none aspect-square rounded-full overflow-hidden   z-[60]"
        ref={projectViewCursorRef}
      >
        <motion.div
          className="relative bg-blue-600 pointer-events-none  rounded-full aspect-square left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] "
          variants={scaleAnimation}
          animate={isActive ? "enter" : "exit"}
          style={{
            transition: "width  .4s cubic-bezier(0.36, 0, 0.66, 0)",
          }}
        ></motion.div>
      </div>
      <div
        ref={projectViewLableRef}
        className="absolute pointer-events-none z-[70] w-16 aspect-square text-center  flex items-center "
      >
        <motion.div
          className="relative  pointer-events-none  text-lg  w-full overflow-hidden text-slate-50 "
          variants={scaleAnimation}
          animate={isActive ? "enter" : "exit"}
          style={{
            transition: "width  .4s cubic-bezier(0.36, 0, 0.66, 0)",
          }}
        >
          View
        </motion.div>
      </div>
    </>
  );
};

export default ProjectViewAnimation;
