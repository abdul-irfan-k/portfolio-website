import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePageLoader from "@/components/Loader/HomepageLoader";
import Project from "@/components/Project";
import ProjectHorizontalScroll from "@/components/ProjectHorizontalScroll";

const HomePage = () => {
  return (
    <div>
      <HomePageLoader>
        <Header />
        <div className="w-screen h-screen block"></div>
        <About />
        <Project />
        <ProjectHorizontalScroll />
        <Footer />
      </HomePageLoader>
    </div>
  );
};

export default HomePage;
