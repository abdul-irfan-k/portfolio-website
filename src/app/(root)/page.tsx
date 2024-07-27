import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePageLoader from "@/components/Loader/HomepageLoader";
import Project from "@/components/Project";
import ProjectHorizontalScroll from "@/components/ProjectHorizontalScroll";
import DesktopBreakPoint from "@/components/ResponsiveUtilities/DesktopBreakPoint";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomePage = () => {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <div>
      <div className="w-screen h-screen block b "></div>
      <About />
      <Project />
      <DesktopBreakPoint>
        <ProjectHorizontalScroll />
      </DesktopBreakPoint>
      <Footer />
    </div>
  );
};

export default HomePage;
const sample = "asdf";
