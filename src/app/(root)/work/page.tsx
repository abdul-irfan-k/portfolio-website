import WorkPageContainer from "@/components/Work/WorkPageContainer";
import { Project } from "@/types/Project";
import { fetchProjects } from "@/utils/fetchProjects";

const WorkPage = async () => {
  const projects = (await fetchProjects()) as Project[];
  return (
    <div>
      <WorkPageContainer projects={projects} />
    </div>
  );
};

export default WorkPage;
