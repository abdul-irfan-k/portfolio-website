"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const FooterScrollAnimation = () => {
  const divContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = divContainerRef.current;

    if (!element) return;
    const scollContainerSelector = gsap.utils.selector(element);
    gsap.to(scollContainerSelector(".svgpath"), {
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        markers: true,
        scrub: 1,
        toggleActions: "restart none none none",
      },
      attr: {
        d: `M0 0 L0 0 Q ${window.innerWidth / 2} ${25} ${window.innerWidth} 0`,
      },
    });
  }, []);
  return (
    <>
      <div
        className="absolute top-0 w-full h-48  block fill-white "
        ref={divContainerRef}
      >
        <div className="relative w-full h-full">
          <div className="relative z-[50] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={"full"}
              width={"full"}
            >
              <motion.path
                d={`M0 0 L0 0 Q ${window.innerWidth / 2} ${300} ${
                  window.innerWidth
                } 0`}
                initial="initial"
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
