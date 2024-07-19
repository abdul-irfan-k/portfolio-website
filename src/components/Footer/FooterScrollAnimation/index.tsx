"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const FooterScrollAnimation = () => {
  const divContainerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (!divContainerRef.current || !divContainerRef.current || width == 0)
      return;
    const element = divContainerRef.current;

    const scollContainerSelector = gsap.utils.selector(element);
    console.log(scollContainerSelector(".svgpath"));
    // setTimeout(() => {
    gsap.to(scollContainerSelector(".svgpath"), {
      scrollTrigger: {
        trigger: element,
        start: "-500 bottom",
        end: "bottom 150",
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
      console.log("handle resize");
      setWidth(divContainerRef.current.offsetWidth);
    };

    divContainerRef.current.addEventListener("resize", handleResize);

    return () => {
      if (!divContainerRef.current) return;
      divContainerRef.current.removeEventListener("resize", handleResize);
    };
  }, [divContainerRef]);

  useEffect(() => {
    if (!divContainerRef.current) return;

    if (!pathRef || !pathRef.current) return;
    //@ts-ignore
    pathRef.current.setAttribute(
      "d",
      `M0 0 L0 0 Q ${width / 2} ${300} ${width} 0`
    );
  }, [pathRef, width]);

  return (
    <>
      <div
        className="absolute top-0 w-full h-48  block fill-white z-[10]"
        ref={divContainerRef}
      >
        <div className="relative w-full h-full">
          <div className="relative z-[50]  ">
            <motion.svg
              style={{ rotate: "120", scale: 2 }}
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                fill="white"
              />
            </motion.svg>
          </div>

          <div className="top-0 absolute w-full h-full z-20 overlary"></div>
        </div>
      </div>
    </>
  );
};

export default FooterScrollAnimation;
