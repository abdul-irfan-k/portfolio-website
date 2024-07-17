"use client";
import React, { FC, useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import LoaderBottomAnimation from "../LoaderBottomAnimation";
import PageLoader from "../PageLoader";

interface HomePageLoaderProps {
  children: React.ReactNode;
}
const HomePageLoader: FC<HomePageLoaderProps> = ({ children }) => {
  const offset = useMotionValue(0);
  // const dataOffset = useTransform(offset, ["300px", "opx"]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div
      style={{
        height: isLoading ? "100vh" : "auto",
        overflowY: "hidden",
        overflowX: "hidden",
      }}
    >
      {/* <AnimatePresence> */}
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center items-center bg-black text-slate-50 z-[10000] "
        variants={{
          exit: { translateY: "-120vh" },
        }}
        exit="exit"
        transition={{
          duration: 0.7,
          delay: 1,
        }}
        animate={isLoading ? "live" : "exit"}
      >
        <div className="flex gap-4  items-center h-16 overflow-hidden">
          <motion.span
            className="text-4xl font-bold  text-right   "
            initial="initial"
            variants={{
              initial: { translateY: "-120%" },
              visible: { translateY: "0%" },
            }}
            transition={{ duration: 0.72 }}
            whileInView={"visible"}
          >
            Abdul Irfan
          </motion.span>

          <div className="relative ">
            <svg
              className="fill-slate-200"
              viewBox="0 0 100 100"
              width={"100px"}
              height={"100px"}
            >
              <circle
                className="fill-white"
                cx="50"
                cy={"50"}
                r={"25"}
                strokeLinecap="round"
                stroke="#000"
                strokeWidth={"5px"}
              />
              <motion.circle
                className="fill-none "
                cx="50"
                cy={"50"}
                r={"30"}
                strokeLinecap="round"
                stroke="#fff"
                strokeWidth={"5px"}
                strokeDashoffset={"300px"}
                initial={{ strokeDashoffset: "300px" }}
                animate={{ strokeDashoffset: "90px" }}
                transition={{ duration: 1.4 }}
                strokeDasharray={"300px"}
              />
            </svg>
          </div>
          <motion.span
            className="text-4xl font-bold  "
            initial="initial"
            variants={{
              initial: { translateY: "120%" },
              visible: { translateY: "0%" },
            }}
            transition={{ duration: 0.72 }}
            whileInView={"visible"}
          >
            Full Stack Developer
          </motion.span>
        </div>
        <div className="absolute bottom-0 w-full">
          <LoaderBottomAnimation isExit={!isLoading} />
        </div>
      </motion.div>
      {/* </AnimatePresence> */}
      <motion.div
        style={{ paddingTop: !isLoading ? "100vh" : "0" }}
        variants={{
          visible: { paddingTop: "0vh" },
        }}
        transition={{
          duration: 0.7,
        }}
        animate={isLoading ? "initial" : "visible"}
        className="relative"
      >
        {children}
      </motion.div>

      {!isLoading && <PageLoader />}
    </div>
  );
};

export default HomePageLoader;
