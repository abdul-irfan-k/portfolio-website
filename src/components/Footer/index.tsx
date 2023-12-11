import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="py-10 bg-dark text-slate-50 ">
        <div className="py-5 px-36 ">
          <div className="flex flex-col w-[50%]">
            <div className="relative  gap-5 flex items-center ">
              <div className="w-[20%] aspect-square block bg-neutral-950 rounded-full"></div>
              <span className="text-7xl font-[500]">Let's Work</span>
            </div>
            <div>
              <span className="text-7xl font-[500]">together</span>
            </div>
          </div>

          <div className="mt-28 h-[2px] block flex  bg-slate-300 ">
            <div className="ml-auto ">
              <div className="absolute w-[12%] aspect-square block bg-blue-700 rounded-full flex flex-col items-center justify-center translate-y-[-50%] translate-x-[-120%]">
                Gen in touch
              </div>
            </div>
          </div>

          <div className="gap-5 mt-16 flex ">
            <div className="px-10 py-4 rounded-full text-lg font-semibold border-[1px] border-slate-400">
              irfan@gmail.com
            </div>
            <div className="px-10 py-4 rounded-full text-lg font-semibold border-[1px] border-slate-400">
              6363520187
            </div>
          </div>
        </div>

        <div className="mt-20 px-16 flex ">
          <div className="gap-2 flex flex-col">
            <span className="text-xs text-slate-300">VERSION</span>
            <span className="text-base">2023@edition</span>
          </div>
          <div className="ml-5 gap-2 flex flex-col">
            <span className="text-xs text-slate-300">VERSION</span>
            <span className="text-base">2023@edition</span>
          </div>
          <div className="gap-2 ml-auto flex flex-col">
            <span className="text-xs text-slate-300">VERSION</span>
            <div className="gap-5 flex ">
              <span className="text-base">Github</span>
              <span className="text-base">Instagram</span>
              <span className="text-base">Twitter</span>
              <span className="text-base">Linedin </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
