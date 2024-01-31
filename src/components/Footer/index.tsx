"use client";
import React, { useEffect, useRef } from "react";
import FooterScrollAnimation from "./FooterScrollAnimation";
import ButtonHoverAnimation from "../shared/ButtonHoverAnimation";
import FooterInfoAndLinkBox from "./FooterInfoAndLinkBox";
import gsap from "gsap";

const Footer = () => {
  const footerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = footerContainerRef.current;
    if (!element) return;

    const footerContainerSelector = gsap.utils.selector(footerContainerRef);
    gsap.to(footerContainerSelector(".getintouchbtn"), {
      scrollTrigger: {
        trigger: element,
        start: "top +500",
        end: "top top",
        scrub: 1,
      },
      marginLeft: "80%",
    });
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top +500",
        end: "top top",
        scrub: 1,
      },
      translateY: "0%",
    });
  }, [footerContainerRef]);
  return (
    <div className="mt-20 overflow-hidden z-[50]">
      <div className="relative  pt-10 pb-5 bg-dark text-slate-50 ">
        <div
          className="relative pt-28 pb-5  px-10 md:px-36 translate-y-[-20%] "
          ref={footerContainerRef}
        >
          <div className=" flex flex-col  text-5xl md:text-7xl  md:w-[50%] header">
            <div className="relative  gap-5 flex items-center ">
              <div className="w-[20%] aspect-square block bg-neutral-950 rounded-full"></div>
              <span className=" font-[500]">Let{"'"}s Work</span>
            </div>
            <div>
              <span className=" font-[500]">together</span>
            </div>
          </div>

          <div className="mt-28 h-[2px]  flex  bg-slate-300 ">
            <div className="ml-[65%] getintouchbtn ">
              <div className="absolute w-[25%] aspect-square   translate-y-[-50%] translate-x-[-25%] md:w-[12%] ">
                <ButtonHoverAnimation style={{ height: "100%", width: "100%" }}>
                  <div className="h-full w-full bg-blue-700 rounded-full flex flex-col items-center justify-center">
                    <span className="text z-20">Gen in touch</span>
                  </div>
                </ButtonHoverAnimation>
              </div>
            </div>
          </div>

          <div className="relative gap-5 mt-24 flex  flex-col md:flex-row md:mt-16">
            <ButtonHoverAnimation style={undefined} magneticStifness={0.8}>
              <div className=" relative px-10 py-4 rounded-full flex items-center justify-center text-lg font-semibold border-[1px] w-full border-slate-400 md:w-auto">
                <span className="text z-[20]  ">abdulirfank2@gmail.com</span>
              </div>
            </ButtonHoverAnimation>
            <ButtonHoverAnimation magneticStifness={0.8}>
              <div className="px-10 py-4 rounded-full text-lg flex items-center justify-center font-semibold border-[1px] w-full border-slate-400 md:w-auto">
                <span className="text z-[20]"> 6363520187</span>
              </div>
            </ButtonHoverAnimation>
          </div>
        </div>
        <div className="mt-20">
          <FooterInfoAndLinkBox />
        </div>

        <FooterScrollAnimation />
      </div>
    </div>
  );
};

export default Footer;
