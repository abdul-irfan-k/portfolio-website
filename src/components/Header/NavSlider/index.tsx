import React, { FC } from "react";
import { Variants, motion } from "framer-motion";
import { transform } from "next/dist/build/swc";

interface NavSliderProps {
  isActive: boolean;
}

const textSlideVariants: Variants = {
  active: (i) => {
    return {
      transform: "translateX(0%)",
      transition: { duration: 0.3, delay: 0.12 * i },
    };
  },
  initial: {
    transform: "translateX(60%)",
  },
  notActive: (i) => {
    return {
      transform: "translateX(60%)",
      transition: { duration: 0.6, delay: 0.05 * i },
    };
  },
};

const NavSlider: FC<NavSliderProps> = ({ isActive }) => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;

  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;
  const curve: Variants = {
    initial: {
      d: initialPath,
    },

    enter: {
      d: targetPath,

      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },

    exit: {
      d: initialPath,

      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <div className="relative h-0 z-[20]">
      <motion.div
        className="top-0 fixed right-0 w-[35vw] h-full bg-dark text-slate-50"
        animate={isActive ? "active" : "notActive"}
        initial="initial"
        variants={{
          initial: { transform: "translateX(calc(100% + 6rem))" },
          active: {
            transform: "translateX(0%)",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
          },
          notActive: {
            transform: "translateX(calc(100% + 6rem))",
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          },
        }}
      >
        <div className="px-20 py-20 flex flex-col h-full ">
          <div className="py-7 text-slate-300 border-b-[1px] border-slate-300">
            <span className="text-sm">NAVIGATION</span>
          </div>
          <div className="gap-5 mt-10 flex flex-col">
            <motion.h1
              className="text-5xl font-medium"
              initial="initial"
              animate={isActive ? "active" : "notActive"}
              variants={textSlideVariants}
              custom={1}
            >
              Home
            </motion.h1>
            <motion.h1
              className="text-5xl font-medium"
              initial="initial"
              animate={isActive ? "active" : "notActive"}
              variants={textSlideVariants}
              custom={2}
            >
              Work
            </motion.h1>
            <motion.h1
              className="text-5xl font-medium"
              initial="initial"
              animate={isActive ? "active" : "notActive"}
              variants={textSlideVariants}
              custom={3}
            >
              About
            </motion.h1>
            <motion.h1
              className="text-5xl font-medium"
              initial="initial"
              animate={isActive ? "active" : "notActive"}
              variants={textSlideVariants}
              custom={4}
            >
              Contact
            </motion.h1>
          </div>
          <div className="gap-1 mt-auto flex flex-col">
            <span className="text-slate-300">SOCIALS</span>
            <div className="flex justify-between text-sm ">
              <span>Awwards</span>
              <span>Instagram</span>
              <span>Twitter</span>
              <span>Linkedin</span>
            </div>
          </div>
          <div className="left-0 top-0 absolute h-full w-full ">
            {/* <div> */}
          </div>
          <div className="absolute top-0 left-0 translate-x-[-100%]  h-full w-24  block fill-dark">
            <svg xmlns="http://www.w3.org/2000/svg" height={"full"}>
              <motion.path
                variants={curve}
                initial="initial"
                animate={isActive ? "enter" : "exit"}
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NavSlider;
