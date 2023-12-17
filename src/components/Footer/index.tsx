import React from "react";
import FooterScrollAnimation from "./FooterScrollAnimation";
import ButtonHoverAnimation from "../shared/ButtonHoverAnimation";
import MagneticAnimation from "../shared/MagneticAnimation";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="relative  pt-10 pb-5 bg-dark text-slate-50 ">
        <div
          className="relative py-28 pb-5 px-36 "
          data-scroll
          data-scroll-speed="0.2"
          data-scroll-position="bottom"
        >
          <div className="flex flex-col w-[50%]">
            <div className="relative  gap-5 flex items-center ">
              <div className="w-[20%] aspect-square block bg-neutral-950 rounded-full"></div>
              <span className="text-7xl font-[500]">Let's Work</span>
            </div>
            <div>
              <span className="text-7xl font-[500]">together</span>
            </div>
          </div>

          <div className="mt-28 h-[2px]  flex  bg-slate-300 ">
            <div className="ml-auto ">
              {/* <ButtonHoverAnimation> */}
              <div className="absolute w-[12%] aspect-square block bg-blue-700 rounded-full flex flex-col items-center justify-center translate-y-[-50%] translate-x-[-120%]">
                Gen in touch
              </div>
              {/* </ButtonHoverAnimation> */}
            </div>
          </div>

          <div className="relative gap-5 mt-16 flex ">
            <ButtonHoverAnimation style={undefined} magneticStifness={0.8}>
              <div className="relative px-10 py-4 rounded-full flex items-center justify-center text-lg font-semibold border-[1px] border-slate-400">
                <span className="z-[20]  ">irfan@gmail.com</span>
              </div>
            </ButtonHoverAnimation>
            <ButtonHoverAnimation magneticStifness={0.8}>
              <div className="px-10 py-4 rounded-full text-lg flex items-center justify-center font-semibold border-[1px] border-slate-400">
                <span className="z-[20]"> 6363520187</span>
              </div>
            </ButtonHoverAnimation>
          </div>
        </div>

        <div className="mt-20 px-16 flex ">
          <div className="gap-2 flex flex-col">
            <span className="text-xs text-slate-300">VERSION</span>
            <span className="text-base">2023@edition</span>
          </div>
          <div className="ml-5 gap-2 flex flex-col">
            <span className="text-xs text-slate-300">VERSION</span>
            <span className="text-base">2023@edition</span>
          </div>
          <div className="gap-2 ml-auto flex flex-col">
            <span className="text-xs text-slate-300">VERSION</span>
            <div className="gap-5 flex ">
              <MagneticAnimation>
                <span className="py-1 text-base ">Github</span>
              </MagneticAnimation>
              <MagneticAnimation>
                <span className="py-1 text-base ">Instagram</span>
              </MagneticAnimation>
              <MagneticAnimation>
                <span className="py-1 text-base ">Twitter</span>
              </MagneticAnimation>
              <MagneticAnimation>
                <span className="py-1 text-base ">Linedin </span>
              </MagneticAnimation>
            </div>
          </div>
        </div>

        <FooterScrollAnimation />
      </div>
    </div>
  );
};

export default Footer;
