"use client";
import React, { useRef } from "react";
import ProjectHorizontalScrollCard from "./ProjectHorizontalScrollCard";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const ProjectHorizontalScroll = () => {
  const conatinerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: conatinerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -100]);

  return (
    <div className="my-10" ref={conatinerRef}>
      <motion.div
        className="leftscrollcontainer  gap-10 flex  "
        style={{ x: x1 }}
      >
        <ProjectHorizontalScrollCard type="image" src={"/Asset/banner2.png"} />
        <ProjectHorizontalScrollCard
          type="image"
          src={"/Asset/images/makepill.png"}
        />
        <ProjectHorizontalScrollCard
          type="image"
          src={"/Asset/images/makepill.png"}
        />
        <ProjectHorizontalScrollCard
          type="video"
          src={"/Asset/Untitled design.mp4"}
        />
        <ProjectHorizontalScrollCard type="image" src={"/Asset/banner2.png"} />
      </motion.div>
      <motion.div
        className="rightscrollcontainer relative  mt-5  gap-10 flex rightscrollcontainer translate-x-[40%]"
        style={{ x: x2 }}
      >
        <ProjectHorizontalScrollCard type="image" src={"/Asset/banner2.png"} />
        <ProjectHorizontalScrollCard type="image" src={"/Asset/banner3.png"} />
        <ProjectHorizontalScrollCard type="image" src={"/Asset/banner3.png"} />
        <ProjectHorizontalScrollCard type="image" src={"/Asset/banner2.png"} />
        <ProjectHorizontalScrollCard type="image" src={"/Asset/banner2.png"} />
      </motion.div>
    </div>
  );
};

export default ProjectHorizontalScroll;
