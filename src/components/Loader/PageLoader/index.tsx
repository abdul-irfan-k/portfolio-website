"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useAnimationControls,
  useMotionValue,
} from "framer-motion";
import LoaderBottomAnimation from "../LoaderBottomAnimation";
import { usePathname } from "next/navigation";

interface PageLoaderProps {}
const PageLoader: FC<PageLoaderProps> = ({}) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);

  const controls = useAnimationControls();
  const pathControlls = useAnimationControls();
  const topPathControlls = useAnimationControls();
  useEffect(() => {
    if (isLoading == undefined) return setIsLoading(false);
    (async () => {
      await controls.start({
        y: "0%",
        opacity: 1,
        transition: { duration: 0 },
      });
      await controls.start({
        y: "-100%",
        opacity: 1,
        transition: { duration: 1 },
      });
      await topPathControlls.start({
        d: `M0 0 L0 0 Q ${window.innerWidth / 2} 0 ${window.innerWidth} 0`,
      });

      await controls.start({
        y: "-200%",
        opacity: 1,
        transition: { duration: 1, delay: 3 },
      });
      await controls.start({
        opacity: 0,
      });
      await controls.start({
        opacity: 0,
        y: "0%",
      });
      await topPathControlls.start({
        d: `M0 0 L-250 0 Q ${window.innerWidth / 2} 300 ${
          window.innerWidth
        } 50`,
      });
      // }, 2000);
    })();
  }, [pathname]);

  if (typeof window == "undefined") return;
  useEffect(() => {}, [topPathControlls]);

  const pathRef = useRef<SVGPathElement>(null);

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
        className="fixed top-[100%] left-0 w-screen h-screen flex flex-col items-center justify-center items-center bg-black text-slate-50 z-[10000] "
        // variants={{
        //   live: {
        //     y: "0%",
        //   },
        //   exit: {
        //     y: "-120%",
        //   },
        //   initial: {
        //     y: "120%",
        //   },
        // }}
        // transition={{
        //   duration: 0.7,
        // }}
        // initial="initial"
        // onAnimationComplete={() => {
        //   if (!isLoading && ref.current) {
        //     console.log("true");
        //     ref.current.style.opacity = 0;
        //     ref.current.style.translateY = "120%";
        //     ref.current.style.opacity = 1;
        //   }
        // }}
        // animate={isLoading == undefined ? "" : isLoading ? "live" : "exit"}
        animate={controls}
        // ref={ref}
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
            page
          </motion.span>
        </div>
        <div className="absolute top-[-20%] w-full ">
          <div className="relative w-full h-full translate-y-[100%] ">
            <div className="relative h-24 w-full fill-black ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={"full"}
                width={"full"}
                className="w-full rotate-180"
              >
                <motion.path
                  d={`M0 0 L-250 0 Q ${window.innerWidth / 2} 300 ${
                    window.innerWidth
                  } 50`}
                  animate={topPathControlls}
                  style={{ transition: "all 0.7s ease-out" }}
                />
              </svg>
            </div>
          </div>

          {/* <div className="top-0 absolute w-full h-full z-20 overlary"></div> */}
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="relative w-full h-full translate-y-[100%]">
            <div className="relative h-24 w-full  fill-black  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={"full"}
                width={"full"}
                className="w-full"
              >
                <motion.path
                  d={`M0 0 L0 0 Q ${window.innerWidth / 2} 300 ${
                    window.innerWidth
                  } 0`}
                  animate={pathControlls}
                  style={{ transition: "all 0.7s ease-out" }}
                />
              </svg>
            </div>

            {/* <div className="top-0 absolute w-full h-full z-20 overlary"></div> */}
          </div>
          {/* <LoaderBottomAnimation isExit={!isLoading} /> */}
        </div>
      </motion.div>
      {/* </AnimatePresence> */}
    </div>
  );
};

export default PageLoader;
