"use client";
import React, { FC, useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import LoaderBottomAnimation from "../LoaderBottomAnimation";
import PageLoader from "../PageLoader";

interface HomePageLoaderProps {}
const HomePageLoader: FC<HomePageLoaderProps> = ({}) => {
  // const dataOffset = useTransform(offset, ["300px", "opx"]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
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
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center  bg-black text-slate-50 z-[10000] "
            variants={{
              exit: { translateY: "-100vh" },
            }}
            exit="exit"
            transition={{
              duration: 0.7,
              delay: 1,
            }}
            initial="live"
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
                  className="fill-black"
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
