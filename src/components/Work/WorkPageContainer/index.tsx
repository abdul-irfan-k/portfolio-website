import React from "react";

const WorkPageContainer = () => {
  return (
    <div className="px-20 mt-20">
      <h1 className="text-7xl font-bold">
        Creating Next Level Digital Product
      </h1>

      <div className="mt-20 flex items-center">
        <div className="px-5 py-2 rounded-full bg-dark text-slate-50">
          <span>All</span>
        </div>
        <div className="ml-2 px-5 py-2 rounded-full bg-dark text-slate-50">
          <span>Fronted</span>
        </div>
        <div className="ml-2 px-5 py-2 rounded-full bg-dark text-slate-50">
          <span>Backend</span>
        </div>

        <div className="ml-auto w-16 aspect-square rounded-full block"></div>
        <div className="ml-2 w-16 aspect-square rounded-full block"></div>
      </div>
    </div>
  );
};

export default WorkPageContainer;
