import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import WorkPageContainer from "@/components/Work/WorkPageContainer";
import React, { startTransition } from "react";
const WorkPage = async () => {
  return (
    <div>
        <WorkPageContainer />
        <Footer />
    </div>
  );
};

export default WorkPage;
