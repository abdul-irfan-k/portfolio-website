import React from "react";
import ButtonHoverAnimation from "../shared/ButtonHoverAnimation";

const About = () => {
  return (
    <div className="gap-5 flex flex-col justify-between px-5  md:flex-row md:gap-10 sm:px-10 md:px-20 xl:px-40 ">
      <div className="text-2xl md:text-3xl  xl:text-[35.3648px]  ">
        An accomplished full-stack MERN developer with 2+ years of experience
        crafting high-performance web applications, I bring a blend of
      </div>

      <div className="flex  flex-col items-end md:items-start">
        <div className="w-[50%] text-base mr-auto text-lg font-normal md:mb-10 md:w-full md:mr-0">
          My freelance experience has equipped me with the ability to manage
          projects from inception to completion
        </div>

        <ButtonHoverAnimation>
          <div className=" w-40 aspect-square rounded-full flex items-center justify-center text-slate-50 bg-dark">
            <span className="text z-20">About Me</span>
          </div>
        </ButtonHoverAnimation>
      </div>
    </div>
  );
};

export default About;
