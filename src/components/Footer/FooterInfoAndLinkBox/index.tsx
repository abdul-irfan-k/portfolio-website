import Link from "next/link";
import React from "react";

import MagneticAnimation from "@/components/shared/MagneticAnimation";

const FooterInfoAndLinkBox = () => {
  return (
    <div className="  px-5 flex flex-col-reverse md:flex-row  md:px-16  md:py-5">
      <div className="mt-5 flex justify-between md:mt-0">
        <div className="gap-2 flex flex-col">
          <span className="text-xs text-slate-300">VERSION</span>
          <span className="text-sm md:text-base">2023 © Edition</span>
        </div>
        <div className="ml-5 gap-2 flex flex-col">
          <span className="text-xs text-slate-300">VERSION</span>
          <span className="text-sm md:text-base">2023 © Edition</span>
        </div>
      </div>
      <div className="gap-2 flex flex-col md:ml-auto ">
        <span className="text-xs text-slate-300">SOCIALS</span>
        <div className="gap-x-4 gap-y-1 flex flex-wrap text-sm items-center md:gap-5 md:flex-nowrap md:text-base">
          <MagneticAnimation>
            <Link href={"https://github.com/abdul-irfan-k/"}>
              <span className="py-1  ">GitHub</span>
            </Link>
          </MagneticAnimation>
          <MagneticAnimation>
            <span className="py-1  ">
              <Link href={"https://www.linkedin.com/in/abdulirfan/"}>
                LinkedIn
              </Link>
            </span>
          </MagneticAnimation>
          <MagneticAnimation>
            <Link href={"https://www.instagram.com/irfan_76_k/"}>
              <span className="py-1  ">Instagram</span>
            </Link>
          </MagneticAnimation>

          <MagneticAnimation>
            <Link href={"https://twitter.com/AbdulIrfanK"}>
              <span className="py-1  ">Twitter</span>
            </Link>
          </MagneticAnimation>
        </div>
      </div>
    </div>
  );
};

export default FooterInfoAndLinkBox;
