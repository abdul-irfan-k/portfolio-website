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
  const titleControlls = useAnimationControls();

  useEffect(() => {
    if (isLoading == undefined) return setIsLoading(false);

    (async () => {
      await controls.start({
        y: "-20%",
        opacity: 1,
        transition: { duration: 0 },
      });

      await Promise.all([
        topPathControlls.start(
          {
            d: `M0 0 L0 0 Q ${1536 / 2} 0 ${1536} 0`,
          },
          { duration: 0.45 }
        ),
        controls.start({
          y: "-120%",
          opacity: 1,
          transition: { duration: 0.45 },
        }),
      ]);
      await titleControlls.start(
        {
          y: "0%",
        },
        { duration: 0.3 }
      );

      await Promise.all([
        controls.start({
          y: "-230%",
          opacity: 1,
          transition: { duration: 0.45, delay: 0.3 },
        }),
        pathControlls.start(
          {
            d: `M0 0 L0 0 Q ${1536 / 2} 0 ${1536} 0`,
          },
          { delay: 0.3, duration: 0.45 }
        ),
      ]);
      await controls.start({
        opacity: 0,
      });
      await controls.start({
        opacity: 0,
        y: "0%",
      });
      topPathControlls.start({
        d: `M0 0 L0 0 Q ${1536 / 2} 300 ${1536} 0`,
      });
      pathControlls.start({
        d: `M0 0 L0 0 Q ${1536 / 2} 300 ${1536} 0`,
      });
      titleControlls.start(
        {
          y: "-130%",
        },
        { duration: 0 }
      );
      // }, 2000);
    })();
  }, [pathname]);

  if (typeof window == "undefined") return;
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
        className="fixed top-[120%] left-0 w-screen h-screen flex flex-col items-center justify-center items-center bg-black text-slate-50 z-[10000] "
        animate={controls}
        // ref={ref}
      >
        <div className="bottom-[100%] absolute w-full fill-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={"full"}
            className="w-full rotate-180"
            viewBox="0 0 1536 300"
          >
            <motion.path
              d={`M0 0 L0 0 Q ${1536 / 2} 300 ${1536} 0`}
              animate={topPathControlls}
              style={{ transition: "all 0.7s ease-out" }}
            />
          </svg>
        </div>
        <div className="flex gap-4  items-center h-16 overflow-hidden">
          <motion.span
            className="text-6xl font-bold  text-right ] uppercase "
            animate={titleControlls}
          >
            {pathname == "/"
              ? "Home"
              : decodeURIComponent(
                  pathname.split("/").filter(Boolean).pop() ?? ""
                )
                  .split("-")
                  .map(
                    (segment) =>
                      segment.charAt(0).toUpperCase() + segment.slice(1)
                  )
                  .join(" ")}
          </motion.span>
        </div>

        <div className="absolute top-[100%] w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={"full"}
            width={"full"}
            viewBox="0 0 1536 300"
          >
            <motion.path
              d={`M0 0 L0 0 Q ${1536 / 2} 300 ${1536} 0`}
              animate={pathControlls}
              style={{ transition: "all 0.7s ease-out" }}
            />
          </svg>
          {/* <LoaderBottomAnimation isExit={!isLoading} /> */}
        </div>
      </motion.div>
      {/* </AnimatePresence> */}
    </div>
  );
};

export default PageLoader;
