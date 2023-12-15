import React from "react";
import ProjectList from "../ProjectList";

const WorkPageContainer = () => {
  return (
    <div className="px-20 mt-20">
      <div className="px-48 ">
        <h1 className=" text-8xl ">Creating Next Level Digital Product</h1>

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

          <div className="ml-auto w-16 aspect-square rounded-full block bg-dark text-slate-50"></div>
          <div className="ml-2 w-16 aspect-square rounded-full block bg-dark text-slate-50"></div>
        </div>
      </div>
      <ProjectList />
      <div></div>
    </div>
  );
};

export default WorkPageContainer;
