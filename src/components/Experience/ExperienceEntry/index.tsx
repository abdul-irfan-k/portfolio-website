"use client";
import { motion, useInView } from "framer-motion";
import React, { FC, useRef } from "react";

import { Experience } from "@/types/Experience";

import { fadeUp, slideUp } from "../anim";
import TimelineItem from "../TimelineItem";

interface ExperienceEntryProps {
  experience: Experience;
}

const CurrentRoleBadge = () => {
  return (
    <span className="gap-2 px-3 py-1 flex items-center rounded-full border-[1px] border-slate-300 text-sm text-dark">
      <span className="relative w-2 h-2 flex">
        <span className="absolute w-full h-full inline-flex rounded-full bg-blueprimary opacity-75 animate-ping" />
        <span className="relative w-2 h-2 inline-flex rounded-full bg-blueprimary" />
      </span>
      Now
    </span>
  );
};

const ExperienceEntry: FC<ExperienceEntryProps> = ({ experience }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef as React.RefObject<Element>, {
    once: true,
    margin: "0px 0px -15% 0px",
  });
  const animationState = isInView ? "open" : "closed";

  return (
    <article className="gap-12 flex flex-col lg:flex-row lg:gap-16">
      <div className="lg:w-[35%]" ref={headerRef}>
        <h2 className="overflow-hidden font-display text-5xl uppercase tracking-normal md:text-6xl xl:text-7xl">
          <motion.span
            className="block"
            variants={slideUp}
            initial="closed"
            animate={animationState}
          >
            {experience.company}
          </motion.span>
        </h2>

        <motion.div
          className="mt-5 gap-3 flex flex-col"
          variants={fadeUp}
          custom={0.2}
          initial="closed"
          animate={animationState}
        >
          <span className="text-xl font-medium">{experience.role}</span>
          <div className="gap-3 flex flex-wrap items-center text-base text-slate-500">
            <span>{experience.period}</span>
            {experience.isCurrent && <CurrentRoleBadge />}
          </div>
        </motion.div>
      </div>

      <ul className="gap-8 flex flex-col text-lg text-slate-800 lg:w-[65%] lg:pt-2 xl:text-xl">
        {experience.highlights.map((highlight, index) => (
          <TimelineItem
            key={highlight}
            text={highlight}
            isLast={index === experience.highlights.length - 1}
          />
        ))}
      </ul>
    </article>
  );
};

export default ExperienceEntry;
