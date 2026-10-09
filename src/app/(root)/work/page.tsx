import Experience from "@/components/Experience";

const WorkPage = () => {
  return (
    <div className="mb-20 md:mb-32">
      <div className="mt-10 px-5 sm:px-10 md:mt-20 md:px-20 xl:px-40">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Work
        </h1>
      </div>
      <Experience spacingClassName="mt-12 md:mt-28" />
    </div>
  );
};

export default WorkPage;
