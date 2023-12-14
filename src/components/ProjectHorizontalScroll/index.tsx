"use client";
import React, { useEffect, useRef } from "react";
import ProjectHorizontalScrollCard from "./ProjectHorizontalScrollCard";
import gsap from "gsap";

const ProjectHorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef == null) return;
    const element = containerRef.current;
    const scollContainerSelector = gsap.utils.selector(element);
    console.log("not null");
    gsap
      .to(scollContainerSelector(".leftscrollcontainer"), {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          markers: true,
          scrub: 1,
          toggleActions: "restart none none none",
        },
        transform: "translateX(-10%)",
      })
    gsap
      .to(scollContainerSelector(".rightscrollcontainer"), {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          markers: true,
          scrub: 1,
          toggleActions: "restart none none none",
        },
        transform: "translateX(10%)",
      })
 
 
  }, []);
  return (
    <div ref={containerRef} className="my-10">
      <div className="  gap-10 flex leftscrollcontainer translate-x-[-40%] ">
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
      </div>
      <div className="relative  mt-5 left-[-40%] gap-10 flex rightscrollcontainer translate-x-[40%]">
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
