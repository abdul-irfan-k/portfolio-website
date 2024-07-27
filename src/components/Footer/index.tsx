"use client";
import React, { useEffect, useRef } from "react";
import ButtonHoverAnimation from "../shared/ButtonHoverAnimation";
import FooterInfoAndLinkBox from "./FooterInfoAndLinkBox";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const footerContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerContainerRef,
    offset: ["start end", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const contactButtonMarginLeft = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["70%", "80%"]
  );
  return (
    <div className=" z-[50] overflow-visible">
      <motion.div
        className="relative  mt-20   w-full  block "
        style={{ height }}
      >
        <div
          className="absolute h-[1550%] w-[120%] left-[-10%] z-[1] bg-white    "
          style={{
            boxShadow: "0px 60px 60px rgba(0,0,0,0.72)",
            borderRadius: "0 0 50% 50%",
          }}
        ></div>
      </motion.div>
      <div className="relative  pt-20 pb-5  bg-dark text-slate-50 ">
        <div
          className="relative pt-28 pb-5  px-5  md:px-20 xl:px-40 translate-y-[-20%] "
          ref={footerContainerRef}
        >
          <div className=" flex flex-col  text-5xl md:text-7xl   header">
            <div className="relative  gap-5 flex items-center ">
              <div className="w-[25%] max-w-[100px] aspect-square block bg-neutral-950 rounded-full md:w-[15%]"></div>
              <span className=" font-[500]">Let{"'"}s Work</span>
            </div>
            <div>
              <span className=" font-[500]">together</span>
            </div>
          </div>

          <div className="mt-28 h-[2px]  flex  bg-slate-300 ">
            <motion.div style={{ marginLeft: contactButtonMarginLeft }}>
              <div className="absolute w-[45%] aspect-square   translate-y-[-50%] translate-x-[-70%] md:translate-x-[-25%] md:w-[18%] xl:w-[15%] ">
                <ButtonHoverAnimation
                  style={{ height: "100%", width: "100%" }}
                  onClickHandler={() => router.push("/contact")}
                >
                  <div className="h-full w-full bg-blue-700 rounded-full flex flex-col items-center justify-center">
                    <span className="text z-20">Get in touch</span>
                  </div>
                </ButtonHoverAnimation>
              </div>
            </motion.div>
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
        <div className="mt-0 md:mt-20">
          <FooterInfoAndLinkBox />
        </div>
      </div>
    </div>
  );
};

export default Footer;
