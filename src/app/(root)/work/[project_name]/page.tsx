import WorkDetailPageContainer from "@/components/Work/WorkDetailPageContainer";
import { Project } from "@/types/Project";
import { fetchProjects } from "@/utils/fetchProjects";

//@ts-ignore
const WorkProjectDetailPage = async ({ params }) => {
  const { project_name } = await params;
  const par = await params;
  const projects = (await fetchProjects()) as Project[];

  const project = projects.find(
    (project) => project.project_name === decodeURIComponent(project_name)
  );
  return (
    <div>
      <WorkDetailPageContainer
        //@ts-ignore
        project={project ?? {}}
      />
      {/* <Footer /> */}
    </div>
  );
};

export default WorkProjectDetailPage;
