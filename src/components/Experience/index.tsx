import React, { FC } from "react";

import SectionLabel from "../shared/SectionLabel";
import ExperienceEntry from "./ExperienceEntry";
import { experiences } from "./experiences";

interface ExperienceProps {
  spacingClassName?: string;
}

const Experience: FC<ExperienceProps> = ({
  spacingClassName = "mt-32 md:mt-40",
}) => {
  return (
    <section
      className={`px-5 sm:px-10 md:px-20 xl:px-40 ${spacingClassName}`}
    >
      <SectionLabel title="Experience" index="01" />
      <div className="mt-14 gap-24 flex flex-col md:mt-20">
        {experiences.map((experience) => (
          <ExperienceEntry key={experience.company} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
