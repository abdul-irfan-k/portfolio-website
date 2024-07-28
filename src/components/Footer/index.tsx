"use client";
import React, { useEffect, useRef } from "react";
import ButtonHoverAnimation from "../shared/ButtonHoverAnimation";
import FooterInfoAndLinkBox from "./FooterInfoAndLinkBox";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
      <motion.div className="relative    w-full  block " style={{ height }}>
        <div
          className="absolute h-[1550%] w-[120%] left-[-10%] z-[1] bg-white    "
          style={{
            boxShadow: "0px 60px 60px rgba(0,0,0,0.72)",
            borderRadius: "0 0 50% 50%",
          }}
        ></div>
      </motion.div>
      <div className="relative   pb-5  bg-dark text-slate-50 md:pt-20 ">
        <div
          className="relative pt-28 pb-5  px-5 translate-y-[-10%] sm:px-10  md:px-20 md:py-20 xl:px-40 md:translate-y-0   "
          ref={footerContainerRef}
        >
          <div className=" flex flex-col  text-5xl   md:text-7xl   ">
            <div className="relative  gap-5 flex items-center ">
              <div className="w-[25%] max-w-[100px] aspect-square block bg-neutral-950 rounded-full md:w-[15%]"></div>
              <span className=" ">Let{"'"}s Work</span>
            </div>
            <div>
              <span className=" ">together</span>
            </div>
          </div>

          <div className="mt-10 h-[2px]  flex  border-[1px] border-neutral-600 md:mt-28  ">
            <motion.div style={{ marginLeft: contactButtonMarginLeft }}>
              <div className="absolute w-[25%] min-w-[150px] aspect-square   translate-y-[-50%] translate-x-[-70%] md:translate-x-[-25%] md:w-[20%] xl:w-[15%] ">
                <ButtonHoverAnimation
                  style={{ height: "100%", width: "100%" }}
                  // onClickHandler={() => router.push("/contact")}
                >
                  <Link
                    href={"/contact"}
                    className="h-full w-full bg-blue-600 rounded-full flex flex-col items-center justify-center"
                  >
                    <span className="text z-20">Get in touch</span>
                  </Link>
                </ButtonHoverAnimation>
              </div>
            </motion.div>
          </div>

          <div className="relative gap-5 mt-24 flex  flex-col md:flex-row md:mt-20">
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
