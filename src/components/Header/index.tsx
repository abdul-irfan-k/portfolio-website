"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import NavSlider from "./NavSlider";

const Header = () => {
  const [navbarButtonClicked, setNavbarButtonClicked] =
    useState<boolean>(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex items-center overflow-hidden">
        <div className="py-5 px-5 w-full">
          <div
            className={
              `ml-auto relative  w-[7%] aspect-square rounded-full overflow-hidden flex items-center justify-center  z-[110] ${navbarButtonClicked ? "bg-blue-600":"bg-dark"} `
            }
            onClick={() => setNavbarButtonClicked(!navbarButtonClicked)}
          >
            <div className="relative h-5 flex  justify-center w-full ">
              <motion.div
                className="absolute w-[40%] h-1 bg-white block"
                variants={{
                  active: { top: "5px", transform: "rotate(45deg)" },
                }}
                transition={{ duration: 0.3 }}
                style={{ top: "0px" }}
                animate={navbarButtonClicked ? "active" : "notActive"}
              ></motion.div>
              <motion.div
                className="absolute w-[40%] h-1 bg-white block"
                variants={{
                  active: {
                    position: "absolute",
                    top: "5px",
                    transform: "rotate(-45deg)",
                  },
                }}
                transition={{ duration: 0.3 }}
                style={{ top: "10px" }}
                animate={navbarButtonClicked ? "active" : "notActive"}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
      <NavSlider isActive={navbarButtonClicked} />
    </>
  );
};

export default Header;
