import WorkDetailPageContainer from "@/components/Work/WorkDetailPageContainer";
import { Project } from "@/types/Project";
import { fetchProjects } from "@/utils/fetchProjects";

export async function generateStaticParams() {
  const projects = await fetchProjects();
  return projects.map((project) => ({
    project_name: project.project_name,
  }));
}

const WorkProjectDetailPage = async ({
  params,
}: {
  params: Promise<{ project_name: string }>;
}) => {
  const { project_name } = await params;
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
    </div>
  );
};

export default WorkProjectDetailPage;
