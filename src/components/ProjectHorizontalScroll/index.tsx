"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import ProjectHorizontalScrollCard from "./ProjectHorizontalScrollCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ProjectHorizontalScroll = () => {
  const leftContainerRef = useRef<HTMLDivElement>(null);
  const rightcontainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (
      leftContainerRef.current == null ||
      leftContainerRef == null ||
      rightcontainerRef.current == null ||
      rightcontainerRef == null ||
      typeof window === "undefined"
    )
      return;
    const element = leftContainerRef.current;
    console.log("rendered");
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "-400 bottom",
        end: "bottom top",
        // markers: true,
        scrub: 1,
        toggleActions: "restart none none none",
      },
      x: "-10%",
      // transform: "translateX(-10%)",
    });
    gsap.to(rightcontainerRef.current, {
      scrollTrigger: {
        trigger: rightcontainerRef.current,
        start: "-700 bottom",
        end: "bottom top",
        markers: true,
        scrub: 1,
        toggleActions: "restart none none none",
      },
      transform: "translateX(10%)",
    });
  }, [leftContainerRef, rightcontainerRef]);
  return (
    <div className="my-10">
      <div
        ref={leftContainerRef}
        className="leftscrollcontainer  gap-10 flex  translate-x-[-40%] "
      >
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
      </div>
      <div
        ref={rightcontainerRef}
        className="rightscrollcontainer relative  mt-5 left-[-40%] gap-10 flex rightscrollcontainer translate-x-[40%]"
      >
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
      </div>
    </div>
  );
};

export default ProjectHorizontalScroll;
