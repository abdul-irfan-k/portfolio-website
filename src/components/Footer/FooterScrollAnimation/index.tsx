"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const FooterScrollAnimation = () => {
  const divContainerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (!divContainerRef.current || !divContainerRef.current || width == 0)
      return;
    const element = divContainerRef.current;

    const scollContainerSelector = gsap.utils.selector(element);
    // setTimeout(() => {
    gsap.to(scollContainerSelector(".svgpath"), {
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        // markers: true,
        scrub: 1,
        toggleActions: "restart none none none",
      },
      attr: {
        d: `M0 0 L0 0 Q ${width / 2} ${10} ${width} 0`,
      },
    });
    // }, 3000);
  }, [divContainerRef, width]);

  useEffect(() => {
    if (!divContainerRef.current) return;
    const handleResize = () => {
      if (!divContainerRef.current) return;
      if (!divContainerRef.current) return;

      setWidth(divContainerRef.current.offsetWidth);
    };

    divContainerRef.current.addEventListener("resize", handleResize);

    return () => {
      if (!divContainerRef.current) return;
      divContainerRef.current.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!divContainerRef.current) return;
    setWidth(divContainerRef.current.offsetWidth);

    if (!pathRef || !pathRef.current) return;
    //@ts-ignore
    pathRef.current.setAttribute(
      "d",
      `M0 0 L0 0 Q ${divContainerRef.current.offsetWidth / 2} ${300} ${
        divContainerRef.current.offsetWidth
      } 0`
    );
  }, [pathRef]);

  return (
    <>
      <div
        className="absolute top-0 w-full h-48  block fill-white z-[10]"
        ref={divContainerRef}
      >
        <div className="relative w-full h-full">
          <div className="relative z-[50] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={"full"}
              width={"full"}
            >
              <path
                ref={pathRef}
                d={`M0 0 L0 0 Q ${0} ${300} ${0} 0`}
                // initial="initial"
                className={"svgpath"}
              />
            </svg>
          </div>

          <div className="top-0 absolute w-full h-full z-20 overlary"></div>
        </div>
      </div>
    </>
  );
};

export default FooterScrollAnimation;
