"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Loader = () => {
  const offset = useMotionValue(0);
  // const dataOffset = useTransform(offset, ["300px", "opx"]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {isLoading && (
        <div className=" w-screen h-screen flex items-center justify-center items-center bg-black text-slate-50 ">
          <div className="flex gap-4 items-center h-16 overflow-hidden">
            <motion.span
              className="text-4xl font-bold w-[400px] text-right   "
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
              className="text-4xl font-bold w-[400px] "
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
        </div>
      )}
    </div>
  );
};

export default Loader;
