"use client";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import React, { useRef } from "react";

import ButtonHoverAnimation from "../shared/ButtonHoverAnimation";
import { opacity, slideUp } from "./anim";

const About = () => {
  const description = useRef(null);
  const isInView = useInView(description);
  const aboutDescription =
    "An accomplished full-stack MERN developer with 2+ years of experience crafting high-performance web applications, I bring a blend of";

  return (
    <div
      className="mt-20 gap-5 flex flex-col justify-between px-5  md:flex-row md:gap-10 sm:px-10 md:px-20 xl:px-40 "
      ref={description}
    >
      <p
        className=" gap-2   text-xl md:text-3xl  xl:text-3xl  "
        style={{ lineHeight: 1.3 }}
      >
        {aboutDescription.split(" ").map((word, index) => {
          return (
            <span
              className="relative mr-2  overflow-hidden inline-flex"
              key={index}
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </p>

      <div className="flex  flex-col items-end md:items-start">
        <motion.span
          className="w-[50%] text-base mr-auto text-lg font-normal md:mb-10 md:w-full md:mr-0"
          variants={opacity}
          animate={isInView ? "open" : "closed"}
        >
          My freelance experience has equipped me with the ability to manage
          projects from inception to completion
        </motion.span>

        <ButtonHoverAnimation>
          <div className=" w-40 aspect-square rounded-full flex items-center justify-center text-white bg-blackprimary">
            <span className="text z-20">About Me</span>
          </div>
        </ButtonHoverAnimation>
      </div>
    </div>
  );
};

export default About;
