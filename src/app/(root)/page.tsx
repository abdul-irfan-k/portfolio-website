import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import Project from "@/components/Project";
import ProjectHorizontalScroll from "@/components/ProjectHorizontalScroll";
import React, { useState } from "react";

const HomePage = () => {
  return (
    <div >
      {/* <Loader /> */}
      {/* <div className="block h-screen"></div> */}
      {/* <Header /> */}
      <About />
      <Project />
      <ProjectHorizontalScroll />
      <Footer />

    </div>
  );
};

export default HomePage;
