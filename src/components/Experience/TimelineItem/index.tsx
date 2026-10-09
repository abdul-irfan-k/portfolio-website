"use client";
import { motion, useInView } from "framer-motion";
import React, { FC, useRef } from "react";

import { dotFill, fadeUp } from "../anim";
import TimelineConnector from "../TimelineConnector";

interface TimelineItemProps {
  text: string;
  isLast: boolean;
}

const TimelineItem: FC<TimelineItemProps> = ({ text, isLast }) => {
  const itemRef = useRef<HTMLLIElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  const isRevealed = useInView(itemRef as React.RefObject<Element>, {
    once: true,
    margin: "0px 0px -10% 0px",
  });
  const isReached = useInView(dotRef as React.RefObject<Element>, {
    margin: "0px 0px -35% 0px",
  });

  return (
    <motion.li
      ref={itemRef}
      className="relative gap-4 flex items-start md:gap-6"
      variants={fadeUp}
      initial="closed"
      animate={isRevealed ? "open" : "closed"}
    >
      <span className="h-[1.4em] flex items-center shrink-0" aria-hidden>
        <motion.span
          ref={dotRef}
          className="relative z-10 w-[10px] h-[10px] block rounded-full border-[1px] border-dark md:w-[15px] md:h-[15px]"
          variants={dotFill}
          initial="idle"
          animate={isReached ? "reached" : "idle"}
        />
      </span>
      {!isLast && <TimelineConnector />}
      <p className="leading-[1.4] text-pretty">{text}</p>
    </motion.li>
  );
};

export default TimelineItem;
