"use client";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

const TimelineConnector = () => {
  const connectorRef = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: connectorRef as React.RefObject<HTMLElement>,
    offset: ["start 65%", "end 65%"],
  });

  return (
    <span
      ref={connectorRef}
      className="absolute left-[4.5px] top-[0.7em] w-[1px] h-[calc(100%+1rem)] block bg-slate-300 md:left-[7px] md:h-[calc(100%+1.5rem)]"
      aria-hidden
    >
      <motion.span
        className="absolute inset-0 block bg-dark origin-top"
        style={{ scaleY: scrollYProgress }}
      />
    </span>
  );
};

export default TimelineConnector;
