import Experience from "@/components/Experience";

const WorkPage = () => {
  return (
    <div className="mb-32">
      <div className="mt-20 px-5 sm:px-10 md:px-20 xl:px-40">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl">Work</h1>
      </div>
      <Experience spacingClassName="mt-20 md:mt-28" />
    </div>
  );
};

export default WorkPage;
