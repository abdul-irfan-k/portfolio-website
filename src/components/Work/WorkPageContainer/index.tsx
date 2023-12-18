"use client";
import React, { useEffect, useState } from "react";
import ProjectList from "../ProjectList";
import ProjectCardList from "../ProjectCardList";
import { useMediaQuery } from "react-responsive";
import DesktopBreakPoint from "@/components/ResponsiveUtilities/DesktopBreakPoint";
import MobileBreakPoint from "@/components/ResponsiveUtilities/MobileBreakPoint";

const WorkPageContainer = () => {
  const [isListView, setIsListView] = useState(true);

  return (
    <div>
      <div className="mt-20 px-10 md:px-20 ">
        <div className=" md:px-48 ">
          <h1 className=" text-6xl md:text-8xl ">
            Creating Next Level Digital Product
          </h1>

          <div className="mt-16 flex items-center ">
            <div className="px-12 py-6 rounded-full bg-dark text-slate-50">
              <span>All</span>
            </div>
            <div className="ml-2 px-12 py-6 rounded-full bg-dark text-slate-50">
              <span>Fronted</span>
            </div>
            <div className="ml-2 px-12 py-6 rounded-full bg-dark text-slate-50">
              <span>Backend</span>
            </div>

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
        <DesktopBreakPoint>
          {isListView && <ProjectList />}
          {!isListView && <ProjectCardList />}
        </DesktopBreakPoint>
        <MobileBreakPoint>
          <ProjectCardList />
        </MobileBreakPoint>
      </div>
    </div>
  );
};

export default WorkPageContainer;
