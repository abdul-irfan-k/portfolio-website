import Footer from "@/components/Footer";
import WorkPageContainer from "@/components/Work/WorkPageContainer";
import { fetchProjects } from "@/utils/fetchProjects";
const WorkPage = async () => {
  const projects = await fetchProjects();
  return (
    <div>
      <WorkPageContainer />
      {/* <Footer /> */}
    </div>
  );
};

export default WorkPage;
