"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import NavSlider from "./NavSlider";
import ButtonHoverAnimation from "../shared/ButtonHoverAnimation";
import gsap from "gsap";
import Link from "next/link";
import MagneticAnimation from "../shared/MagneticAnimation";
import { usePathname } from "next/navigation";
import { useLenisContext } from "@/provider/SmoothScrollProvider";

const Header = () => {
  const [navbarButtonClicked, setNavbarButtonClicked] =
    useState<boolean>(false);

  const headerContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isFirstRender, setIsFirstRender] = useState(true);

  const lenis = useLenisContext();

  useEffect(() => {
    if (isFirstRender) return setIsFirstRender(false);
    if (lenis) lenis.start();
    setNavbarButtonClicked(false);
  }, [pathname]);
  useEffect(() => {
    const element = headerContainerRef.current;
    if (!element) return;
    const headerContainerSelector = gsap.utils.selector(element);
    gsap.to(headerContainerSelector(".navBtn"), {
      scrollTrigger: {
        trigger: element,
        start: "-800 top",
        end: "-500 top",
        scrub: 1,
        onEnter: () => enterHandler(),
        onLeave: () => leaveHandler(),
        onEnterBack: () => enterHandler(),
        onLeaveBack: () => leaveHandler(),
        // markers: true,
      },
    });

    const leaveHandler = () => {
      gsap.to(headerContainerSelector(".navBtn"), {
        scale: "1",
      });
    };

    const enterHandler = () => {
      if (!navbarButtonClicked) {
        gsap.to(headerContainerSelector(".navBtn"), {
          scale: "0",
        });
      }
    };
  }, [headerContainerRef.current]);
  return (
    <>
      <div
        className="relative w-screen overflow-x-hidden z-[110] "
        ref={headerContainerRef}
      >
        <div className="fixed right-0 w-fit py-5 px-5  flex  justify-end ">
          <div
            className="w-[6vw] min-w-[80px] scale-0 navBtn "
            style={{
              transition: "scale  0.4s cubic-bezier(0.36, 0, 0.66, 0)",
            }}
          >
            <ButtonHoverAnimation>
              <div
                className={`ml-auto relative  w-full aspect-square rounded-full overflow-hidden flex items-center justify-center   ${
                  navbarButtonClicked ? "bg-blue-600" : "bg-blackprimary"
                } `}
                onClick={() => {
                  if (!navbarButtonClicked && lenis) lenis.stop();
                  if (navbarButtonClicked && lenis) lenis.start();
                  setNavbarButtonClicked(!navbarButtonClicked);
                }}
              >
                <div className="text relative h-6 flex  justify-center w-full z-[60] ">
                  <motion.div
                    className="absolute w-[40%] h-[1.5px]  bg-white block md:h-[3px]"
                    variants={{
                      active: { top: "5px", transform: "rotate(45deg)" },
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ top: "0px" }}
                    animate={navbarButtonClicked ? "active" : "notActive"}
                  ></motion.div>
                  <motion.div
                    className="absolute w-[40%] h-[1.5px]  bg-white block md:h-[3px]"
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

        <div className="relative px-5 py-10  w-full flex text-xl z-[130] sm:px-5 md:px-10 xl:px-16">
          <MagneticAnimation>
            <Link href={"/"}>
              <span className="">Abdul Irfan</span>
            </Link>
          </MagneticAnimation>
          <div className="hidden gap-5 ml-auto   sm:flex">
            <MagneticAnimation>
              <Link href={"/work"}>
                <span className="">Work</span>
              </Link>
            </MagneticAnimation>
            <MagneticAnimation>
              <Link href={"/about"}>
                <span className="">About</span>
              </Link>
            </MagneticAnimation>
            <MagneticAnimation>
              <Link href={"/contact"}>
                <span className="">Contact</span>
              </Link>
            </MagneticAnimation>
          </div>
          <div className="relative ml-auto sm:hidden ">
            <MagneticAnimation>
              <span
                className="font-light text-base"
                onClick={() => setNavbarButtonClicked(!navbarButtonClicked)}
              >
                more
              </span>
            </MagneticAnimation>
          </div>
        </div>
      </div>
      <NavSlider isActive={navbarButtonClicked} />
    </>
  );
};

export default Header;
