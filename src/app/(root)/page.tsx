import Image from "next/image";
import Link from "next/link";

import About from "@/components/Description";
import Hero from "@/components/Hero/Hero";
import Project from "@/components/Project";
import ProjectHorizontalScroll from "@/components/ProjectHorizontalScroll";
import DesktopBreakPoint from "@/components/ResponsiveUtilities/DesktopBreakPoint";
import MobileBreakPoint from "@/components/ResponsiveUtilities/MobileBreakPoint";
import { Project as IProject } from "@/types/Project";
import { fetchProjects } from "@/utils/fetchProjects";

const HomePage = async () => {
  const projects = (await fetchProjects()) as IProject[];

  const projectWithBanner = projects.filter((project) => project.banner_url);
  return (
    <div>
      <Hero />
      <About />
      <DesktopBreakPoint>
        <Project projects={projectWithBanner.slice(0, 6)} />
      </DesktopBreakPoint>
      <MobileBreakPoint>
        <div className=" mt-10  px-5 sm:px-10">
          <div className=" gap-x-3  flex w-full flex-wrap  justify-between  ">
            {projects.slice(0, 5).map((project, index) => {
              return (
                <Link
                  key={index}
                  className="mt-20 flex-[0_0_100%]    sm:flex-[0_0_45%] "
                  href={`/work/${project.id}`}
                >
                  <div className="relative w-full aspect-square ">
                    <Image
                      alt="image"
                      src={
                        project.banner_url ??
                        (process.env.NEXT_PUBLIC_DEFAULT_IMAGE || "")
                      }
                      fill
                    />
                  </div>
                  <span className="mt-2 text-4xl ">{project.project_name}</span>
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
        <ProjectHorizontalScroll projects={projects} />
      </DesktopBreakPoint>
    </div>
  );
};

export default HomePage;
