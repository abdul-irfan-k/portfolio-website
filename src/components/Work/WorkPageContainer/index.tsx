"use client";
import React, { useEffect, useState } from "react";
import ProjectList from "../ProjectList";
import ProjectCardList from "../ProjectCardList";
import DesktopBreakPoint from "@/components/ResponsiveUtilities/DesktopBreakPoint";
import MobileBreakPoint from "@/components/ResponsiveUtilities/MobileBreakPoint";
import ButtonHoverAnimation from "@/components/shared/ButtonHoverAnimation";
import Link from "next/link";
const WorkPageContainer = () => {
  const [isListView, setIsListView] = useState(true);
  const [selectedProject, setSelectedProject] = useState<
    "all" | "frontend" | "backend"
  >("all");

  return (
    <div>
      <div className="mt-20 px-10 md:px-20 ">
        <div className=" md:px-48 ">
          <h1 className=" text-6xl md:text-8xl ">
            Creating Next Level Digital Product
          </h1>

          <div className="gap-4 mt-16 flex items-center ">
            <ButtonHoverAnimation>
              <div
                className={
                  "px-12 py-6 rounded-full flex items-center justify-center  " +
                  (selectedProject == "all"
                    ? "bg-dark text-slate-50"
                    : "text-dark border-2 border-slate-400")
                }
                onClick={() => {
                  setSelectedProject("all");
                }}
              >
                <span className="text z-20">All</span>
              </div>
            </ButtonHoverAnimation>
            <ButtonHoverAnimation>
              <div
                className={
                  "ml-2 px-12 py-6 rounded-full flex items-center  " +
                  (selectedProject == "frontend"
                    ? "bg-dark text-slate-50"
                    : "text-dark border-2 border-slate-400")
                }
              >
                <span className="text z-20"> Fronted</span>
              </div>
            </ButtonHoverAnimation>
            <ButtonHoverAnimation>
              <div
                className={
                  "ml-2 px-12 py-6 rounded-full flex items-center  " +
                  (selectedProject == "backend"
                    ? "bg-dark text-slate-50"
                    : "text-dark border-2 border-slate-400")
                }
              >
                <span className="text z-20"> Backend</span>
              </div>
            </ButtonHoverAnimation>

            <DesktopBreakPoint>
              <div
                className="ml-auto w-16 aspect-square rounded-full block bg-dark text-slate-50"
                onClick={() => setIsListView(true)}
              ></div>

              <div
                className="ml-2 w-16 aspect-square rounded-full block bg-dark text-slate-50"
                onClick={() => setIsListView(false)}
              ></div>
            </DesktopBreakPoint>
          </div>
        </div>
      </div>
      <DesktopBreakPoint>
        {isListView && <ProjectList />}
        {!isListView && <ProjectCardList />}
      </DesktopBreakPoint>
      <MobileBreakPoint>
        <ProjectCardList />
      </MobileBreakPoint>
    </div>
  );
};

export default WorkPageContainer;
