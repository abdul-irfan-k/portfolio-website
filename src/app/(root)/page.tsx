import Image from "next/image";
import Link from "next/link";

import About from "@/components/Description";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero/Hero";
import ArrowRight from "@/components/Icons/arrow-right";
import Project from "@/components/Project";
import ProjectHorizontalScroll from "@/components/ProjectHorizontalScroll";
import DesktopBreakPoint from "@/components/ResponsiveUtilities/DesktopBreakPoint";
import MobileBreakPoint from "@/components/ResponsiveUtilities/MobileBreakPoint";
import SectionLabel from "@/components/shared/SectionLabel";
import { Project as IProject } from "@/types/Project";
import { fetchProjects } from "@/utils/fetchProjects";

const HomePage = async () => {
  const projects = (await fetchProjects()) as IProject[];

  const projectWithBanner = projects.filter((project) => project.banner_url);
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <div className="mt-24 px-5 sm:px-10 md:mt-40 md:px-20 xl:px-40">
        <SectionLabel title="Projects" index="02" />
      </div>
      <DesktopBreakPoint>
        <Project projects={projectWithBanner.slice(0, 6)} />
      </DesktopBreakPoint>
      <MobileBreakPoint>
        <div className="mt-2 px-5 sm:px-10">
          <div className="gap-x-3 flex w-full flex-wrap justify-between">
            {projects.slice(0, 5).map((project, index) => {
              return (
                <Link
                  key={index}
                  className="mt-10 flex-[0_0_100%] sm:flex-[0_0_47%]"
                  href={`/projects/${project.project_name}`}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      alt={project.project_name}
                      src={
                        project.banner_url ??
                        (process.env.NEXT_PUBLIC_DEFAULT_IMAGE || "")
                      }
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 47vw, 100vw"
                    />
                  </div>
                  <span className="mt-4 block font-display text-2xl">
                    {project.project_name}
                  </span>
                  <div className="mt-1 flex justify-between text-sm text-slate-500">
                    <span>Design & Development</span>
                    <span>2023</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-14 flex justify-center">
            <Link
              href={"/projects"}
              className="gap-2 px-6 py-3 flex items-center rounded-full border-[1px] border-dark text-sm"
            >
              More Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
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
