import About from "@/components/About";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import ProjectHorizontalScroll from "@/components/ProjectHorizontalScroll";
// import DesktopBreakPoint from "@/components/ResponsiveUtilities/DesktopBreakPoint";

const HomePage = () => {
  return (
    <div>
      <div className="w-screen h-screen block b "></div>
      <About />
      <Project />
      {/* <DesktopBreakPoint> */}
      <ProjectHorizontalScroll />
      {/* </DesktopBreakPoint> */}
      <Footer />
    </div>
  );
};

export default HomePage;
const sample = "asdf";
