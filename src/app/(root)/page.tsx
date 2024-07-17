import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePageLoader from "@/components/Loader/HomepageLoader";
import Project from "@/components/Project";
import ProjectHorizontalScroll from "@/components/ProjectHorizontalScroll";

const HomePage = () => {
  return (
    <div>
      {/* <HomePageLoader> */}
      <div className="w-screen h-screen block b "></div>
      <About />
      <Project />
      <ProjectHorizontalScroll />
      <Footer />
      {/* </HomePageLoader> */}
    </div>
  );
};

export default HomePage;
const sample = "asdf";
