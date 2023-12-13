import React, { FC } from "react";
import { motion } from "framer-motion";

interface NavSliderProps {
  isActive: boolean;
}
const NavSlider: FC<NavSliderProps> = ({ isActive }) => {
  return (
    <>
      <motion.div
        className="top-0 fixed right-0 w-[35vw] h-full bg-dark text-slate-50 z-[50]"
        animate={isActive ? "active" : "notActive"}
        variants={{
          active: { transform: "translateX(100%)" },
          notActive: { transform: "translateX(0%)" },
        }}
      >
        <div className="px-20 py-20 flex flex-col h-full ">
          <div className="py-5 text-slate-300 border-b-[1px] border-slate-300">
            <span className="text-sm">NAVIGATION</span>
          </div>
          <div className="gap-5 mt-10 flex flex-col">
            <h1 className="text-5xl font-medium">Home</h1>
            <h1 className="text-5xl font-medium">Work</h1>
            <h1 className="text-5xl font-medium">About</h1>
            <h1 className="text-5xl font-medium">Contact</h1>
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
        </div>
      </motion.div>
      ;
    </>
  );
};

export default NavSlider;
