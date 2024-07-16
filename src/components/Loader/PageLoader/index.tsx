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
  useEffect(() => {
    if (isLoading == undefined) return setIsLoading(false);
    (async () => {
      await controls.start({
        y: "0%",
        opacity: 1,
        transition: { duration: 0 },
      });

      setTimeout(() => {
        await controls.start({
          y: "-200%",
          opacity: 1,
          transition: { duration: 1 },
        });
        await controls.start({
          opacity: 0,
        });
        await controls.start({
          opacity: 0,
          y: "0%",
        });
      }, 2000);
      // await controls.start({
      //   y: "20%",
      //   opacity: 1,
      //   transition: { duration: 0 },
      // });
      // setIsLoading(true);
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 2000);
    })();
  }, [pathname]);

  const ref = useRef<HTMLDivElement>(null);

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
        {/* <div className="absolute bottom-0 w-full">
          <LoaderBottomAnimation isExit={!isLoading} />
        </div> */}
      </motion.div>
      {/* </AnimatePresence> */}
    </div>
  );
};

export default PageLoader;
