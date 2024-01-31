"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import NavSlider from "./NavSlider";
import ButtonHoverAnimation from "../shared/ButtonHoverAnimation";
import gsap from "gsap";

const Header = () => {
  const [navbarButtonClicked, setNavbarButtonClicked] =
    useState<boolean>(false);

  const headerContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = headerContainerRef.current;
    if (!element) return;
    const headerContainerSelector = gsap.utils.selector(element);
    gsap.to(headerContainerSelector(".navBtn"), {
      scrollTrigger: {
        trigger: element,
        start: "-100 top",
        end: "+300 top",
        scrub: 1,
        onEnter: () => enterHandler(),
        onLeave: () => leaveHandler(),
        onEnterBack: () => enterHandler(),
        onLeaveBack: () => leaveHandler(),
      },
    });

    const leaveHandler = () => {
      gsap.to(headerContainerSelector(".navBtn"), {
        scale: "1",
      });
    };

    const enterHandler = () => {
      gsap.to(headerContainerSelector(".navBtn"), {
        scale: "0",
      });
    };
  }, [headerContainerRef.current]);
  return (
    <>
      <div className="relative z-[110]" ref={headerContainerRef}>
        <div className="fixed top-0 left-0 w-full flex items-center overflow-hidden">
          <div className="py-5 px-5 w-full flex  justify-end ">
            <div
              className="w-[6%] scale-0 navBtn"
              style={{
                transition: "scale  0.4s cubic-bezier(0.36, 0, 0.66, 0)",
              }}
            >
              <ButtonHoverAnimation>
                <div
                  className={`ml-auto relative  w-full aspect-square rounded-full overflow-hidden flex items-center justify-center   ${
                    navbarButtonClicked ? "bg-blue-600" : "bg-dark"
                  } `}
                  onClick={() => setNavbarButtonClicked(!navbarButtonClicked)}
                >
                  <div className="text relative h-5 flex  justify-center w-full z-20 ">
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
                      style={{ top: "15px" }}
                      animate={navbarButtonClicked ? "active" : "notActive"}
                    ></motion.div>
                  </div>
                </div>
              </ButtonHoverAnimation>
            </div>
          </div>
        </div>
      </div>
      <NavSlider isActive={navbarButtonClicked} />
    </>
  );
};

export default Header;
