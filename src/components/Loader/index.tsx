"use client";
import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div>
      <div className=" w-screen h-screen flex items-center justify-center items-center bg-black text-slate-50 ">
        <div className="flex gap-4 items-center h-16 ">
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
            {/* <div
              className="w-10 aspect-square rounded-full block bg-red-400 "
         
            > */}
                <svg className="fill-slate-200" viewBox="0 0 100 100" width={"100px"} height={"100px"}>
                    <circle  className="fill-none " cx="50" cy={"50"} r={"40"} strokeLinecap="round" stroke="#000" strokeWidth={"5px"}  />
                    <circle  className="fill-none " cx="50" cy={"50"} r={"40"} strokeLinecap="round" stroke="red" strokeWidth={"5px"} strokeDashoffset={"240px"} strokeDasharray={"300px"} />
                </svg>
            {/* </div> */}
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
    </div>
  );
};

export default Loader;
