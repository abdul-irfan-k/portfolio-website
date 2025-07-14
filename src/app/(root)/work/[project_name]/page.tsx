import WorkDetailPageContainer from "@/components/Work/WorkDetailPageContainer";
import { fetchProjects } from "@/utils/fetchProjects";

//@ts-ignore
const WorkProjectDetailPage = async ({ params }) => {
  const { project_name } = await params;
  const par = await params;
  const projects = await fetchProjects();

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
