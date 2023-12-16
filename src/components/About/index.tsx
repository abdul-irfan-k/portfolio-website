import React from "react";
import ButtonHoverAnimation from "../shared/ButtonHoverAnimation";

const About = () => {
  return (
    <div className="px-32">
      <div className="gap-10  flex justify-between">
        <div className="text-3xl  font-semibold">
          An accomplished full-stack MERN developer with 2+ years of experience
          crafting high-performance web applications, I bring a blend of
        </div>

        <div className="flex flex-col items-center">
          <div className="text-lg font-normal">
            My freelance experience has equipped me with the ability to manage
            projects from inception to completion
          </div>

          <ButtonHoverAnimation style={{ marginTop: "5rem" }}>
            <div className=" w-44 aspect-square rounded-full flex items-center justify-center text-slate-50 bg-dark">
              <span className="z-20">About Me</span>
            </div>
          </ButtonHoverAnimation>
        </div>
      </div>
    </div>
  );
};

export default About;
