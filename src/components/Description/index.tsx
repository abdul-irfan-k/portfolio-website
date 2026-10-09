"use client";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import React, { useRef } from "react";

import ArrowRight from "@/components/Icons/arrow-right";

import ButtonHoverAnimation from "../shared/ButtonHoverAnimation";
import { opacity, slideUp } from "./anim";

const About = () => {
  const description = useRef<HTMLDivElement>(null);
  const isInView = useInView(description as React.RefObject<Element>);
  const aboutDescription =
    "An accomplished full-stack MERN developer with 2+ years of experience crafting high-performance web applications, I bring a blend of technical skill and product thinking.";

  return (
    <div
      className="mt-14 gap-5 flex flex-col justify-between px-5 sm:px-10 md:mt-20 md:flex-row md:gap-10 md:px-20 xl:px-40"
      ref={description}
    >
      <p
        className="gap-2 font-display text-lg md:text-3xl xl:text-3xl"
        style={{ lineHeight: 1.3 }}
      >
        {aboutDescription.split(" ").map((word, index) => {
          return (
            <span
              className="relative mr-[0.25em] overflow-hidden inline-flex"
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
          className="w-[75%] mr-auto text-base font-normal text-pretty md:mb-10 md:w-full md:mr-0 md:text-lg"
          variants={opacity}
          animate={isInView ? "open" : "closed"}
        >
          My freelance experience has equipped me with the ability to manage
          projects from inception to completion
        </motion.span>

        <ButtonHoverAnimation>
          <div className="w-28 aspect-square rounded-full flex items-center justify-center text-white bg-blackprimary max-md:text-sm md:w-40">
            <span className="gap-1 text z-20 flex items-center">
              About Me
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </span>
          </div>
        </ButtonHoverAnimation>
      </div>
    </div>
  );
};

export default About;
