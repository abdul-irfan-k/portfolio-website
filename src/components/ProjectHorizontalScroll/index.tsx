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
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          markers: true,
        },
      })
      .to(scollContainerSelector(".leftscrollcontainer "), {
        transalteX: "50%",
      });
  }, []);
  return (
    <div ref={containerRef}>
      <div className="my-[100vh]  gap-10 flex leftscrollcontainer ">
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
      </div>
      <div className="mt-5 gap-10 flex rightscrollcontainer ">
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
        <ProjectHorizontalScrollCard />
      </div>
    </div>
  );
};

export default ProjectHorizontalScroll;
