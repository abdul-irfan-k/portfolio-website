"use client";
import React, { useEffect, useState } from "react";
import ProjectList from "../ProjectList";
import ProjectCardList from "../ProjectCardList";
import DesktopBreakPoint from "@/components/ResponsiveUtilities/DesktopBreakPoint";
import MobileBreakPoint from "@/components/ResponsiveUtilities/MobileBreakPoint";
import ButtonHoverAnimation from "@/components/shared/ButtonHoverAnimation";
import Link from "next/link";
import { projectDetails } from "@/project";
import MenuIcon from "@/components/Icons/menu";
import GridIcon from "@/components/Icons/grid";
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
            <ButtonHoverAnimation
              onClickHandler={() => setSelectedProject("all")}
            >
              <div
                className={
                  "px-10 py-6 rounded-full flex items-center justify-center  " +
                  (selectedProject == "all"
                    ? "bg-dark text-slate-50"
                    : "text-dark border-2 border-slate-400")
                }
              >
                <span className="text z-20">All</span>
              </div>
            </ButtonHoverAnimation>
            <ButtonHoverAnimation
              onClickHandler={() => setSelectedProject("frontend")}
            >
              <div
                className={
                  "ml-2 px-10 py-6 rounded-full flex items-center  " +
                  (selectedProject == "frontend"
                    ? "bg-dark text-slate-50"
                    : "text-dark border-2 border-slate-400")
                }
              >
                <span className="text z-20"> Fronted</span>
              </div>
            </ButtonHoverAnimation>
            <ButtonHoverAnimation
              onClickHandler={() => setSelectedProject("backend")}
            >
              <div
                className={
                  "ml-2 px-10 py-6 rounded-full flex items-center  " +
                  (selectedProject == "backend"
                    ? "bg-dark text-slate-50"
                    : "text-dark border-2 border-slate-400")
                }
              >
                <span className="text z-20"> Backend</span>
              </div>
            </ButtonHoverAnimation>

            <DesktopBreakPoint>
              <div className="gap-4 ml-auto flex  fill-slate-50 ">
                <ButtonHoverAnimation
                  onClickHandler={() => setIsListView(true)}
                >
                  <div
                    className={
                      "ml-auto w-16 aspect-square rounded-full block flex items-center justify-center " +
                      (isListView
                        ? "bg-dark  "
                        : " fill-dark border-2 border-slate-400")
                    }
                  >
                    <span className="text z-20 ">
                      <MenuIcon className="w-7 aspect-square" />
                    </span>
                  </div>
                </ButtonHoverAnimation>
                <ButtonHoverAnimation
                  onClickHandler={() => setIsListView(false)}
                >
                  <div
                    className={
                      " w-16 aspect-square rounded-full block flex items-center justify-center " +
                      (!isListView
                        ? "bg-dark  "
                        : " fill-dark border-2 border-slate-400")
                    }
                  >
                    <span className="text z-20 ">
                      <GridIcon className="w-7 aspect-square" />
                    </span>
                  </div>
                </ButtonHoverAnimation>
              </div>
            </DesktopBreakPoint>
          </div>
        </div>
      </div>
      <DesktopBreakPoint>
        {isListView && (
          <ProjectList
            //@ts-ignore
            projectDetails={
              selectedProject == "all"
                ? projectDetails
                : projectDetails.slice(0, 3)
            }
          />
        )}
        {!isListView && <ProjectCardList />}
      </DesktopBreakPoint>
      <MobileBreakPoint>
        <ProjectCardList />
      </MobileBreakPoint>
    </div>
  );
};

export default WorkPageContainer;
