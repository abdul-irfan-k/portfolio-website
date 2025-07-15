import Image from "next/image";
import React, { FC } from "react";

import Video from "@/components/shared/Video";

interface ProjectHorizontalScrollCardProps {
  type: "video" | "image";
  src: string;
}

const ProjectHorizontalScrollCard: FC<ProjectHorizontalScrollCardProps> = ({
  src,
  type = "image",
}) => {
  return (
    <div
      className="relative flex-shrink-0 flex-grow-0 rounded-md block aspect-[12/9] md:basis-[35%] xl:basis-[26%]"
      style={{
        backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
      }}
    >
      <div className="relative h-full w-full rounded-md overflow-hidden">
        {type === "image" && (
          <Image
            src={src}
            fill
            alt="project"
            className="object-contain p-2 md:p-4"
          />
        )}
        {type === "video" && <Video videoSrc={src} />}
      </div>
    </div>
  );
};

export default ProjectHorizontalScrollCard;
