import WorkPageContainer from "@/components/Work/WorkPageContainer";
import { fetchProjects } from "@/utils/fetchProjects";

const WorkPage = async () => {
  const projects = await fetchProjects();
  return (
    <div>
      <WorkPageContainer projects={projects} />
    </div>
  );
};

export default WorkPage;
