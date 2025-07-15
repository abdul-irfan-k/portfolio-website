"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";

import PageLoader from "../PageLoader";

const HomePageLoader = () => {
  // const dataOffset = useTransform(offset, ["300px", "opx"]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 500);
  }, []);
  return (
    <div
      style={{
        height: isLoading ? "100vh" : "auto",
        overflowY: "hidden",
        overflowX: "hidden",
      }}
    >
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center  bg-blacksecondary text-slate-50 z-[10000] "
            variants={{
              exit: { translateY: "-100vh" },
            }}
            exit="exit"
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            initial="live"
          >
            <div className="relative flex gap-0 w-fit  items-center h-16 md:gap-2 xl:gap-4">
              <div className="absolute right-[100%] w-max overflow-hidden ">
                <motion.div
                  className="   w-max text-xl font-medium  text-right md:text-3xl xl:text-4xl  "
                  initial="initial"
                  variants={{
                    initial: { translateY: "-100%" },
                    visible: { translateY: "0%" },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  whileInView={"visible"}
                >
                  Abdul Irfan
                </motion.div>
              </div>

              <div className="relative ">
                <svg
                  className="fill-slate-200"
                  viewBox="0 0 100 100"
                  width={"80px"}
                  height={"80px"}
                >
                  <circle
                    className="fill-white"
                    cx="50"
                    cy={"50"}
                    r={"25"}
                    strokeLinecap="round"
                    stroke="#000"
                    strokeWidth={"2px"}
                  />
                  <motion.circle
                    className="fill-none "
                    cx="50"
                    cy={"50"}
                    r={"30"}
                    strokeLinecap="round"
                    stroke="#fff"
                    strokeWidth={"3px"}
                    strokeDashoffset={"300px"}
                    initial={{ strokeDashoffset: "300px" }}
                    animate={{ strokeDashoffset: "90px" }}
                    transition={{ duration: 0.85 }}
                    strokeDasharray={"300px"}
                  />
                </svg>
              </div>
              <div className="absolute left-[100%] w-max overflow-hidden ">
                <motion.div
                  className=" text-xl font-medium  md:text-3xl xl:text-4xl "
                  initial="initial"
                  variants={{
                    initial: { translateY: "100%" },
                    visible: { translateY: "0%" },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  whileInView={"visible"}
                >
                  Full Stack Developer
                </motion.div>
              </div>
            </div>
            <div className="absolute top-[100%] w-full ">
              {/* <LoaderBottomAnimation isExit={!isLoading} /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={"full"}
                width={"full"}
                className="w-full"
                viewBox="0 0 1536 300"
              >
                <motion.path
                  className="fill-blacksecondary"
                  d={`M0 0 L0 0 Q ${1536 / 2} 300 1536 0`}
                  variants={{
                    initial: {
                      d: `M0 0 L0 0 Q ${1536 / 2} 300 1536 0`,
                      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
                    },
                    exit: {
                      d: `M0 0 L0 0 Q ${1536 / 2} 0 1536 0`,
                      transition: {
                        duration: 0.7,
                        ease: [0.76, 0, 0.24, 1],
                        delay: 0.3,
                      },
                    },
                  }}
                  initial="initial"
                  exit={"exit"}
                  style={{ transition: "all 0.7s ease-out" }}
                />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && <PageLoader />}
    </div>
  );
};

export default HomePageLoader;
