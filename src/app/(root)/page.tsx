import About from "@/components/About";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import ProjectHorizontalScroll from "@/components/ProjectHorizontalScroll";
import DesktopBreakPoint from "@/components/ResponsiveUtilities/DesktopBreakPoint";
import MobileBreakPoint from "@/components/ResponsiveUtilities/MobileBreakPoint";
import ProjectCardList from "@/components/Work/ProjectCardList";
import { projectDetails } from "@/project";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div className="w-screen h-screen block b "></div>
      <About />
      <DesktopBreakPoint>
        <Project />
      </DesktopBreakPoint>
      <MobileBreakPoint>
        <div className=" mt-10  px-5 sm:px-10">
          <div className=" gap-x-3  flex w-full flex-wrap  justify-between  ">
            {projectDetails.map((project, index) => {
              return (
                <Link
                  key={index}
                  className="mt-20 flex-[0_0_100%]    sm:flex-[0_0_45%] "
                  href={`/work/${project.name}`}
                >
                  <div className="relative w-full aspect-square ">
                    <Image alt="image" src={project.bannerUrl} fill />
                  </div>
                  <span className="mt-2 text-4xl ">{project.name}</span>
                  <div className="mt-2 flex justify-between ">
                    <span className="text-base">Design & Development</span>
                    <span className="text-base">2023</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </MobileBreakPoint>
      <DesktopBreakPoint>
        <ProjectHorizontalScroll />
      </DesktopBreakPoint>
      <Footer />
    </div>
  );
};

export default HomePage;
const sample = "asdf";
