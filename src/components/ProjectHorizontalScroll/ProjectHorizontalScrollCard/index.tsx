import Video from "@/components/shared/Video";
import Image from "next/image";
import React, { FC } from "react";

interface ProjectHorizontalScrollCardProps {
  type: "video" | "image";
  src: string;
}
const ProjectHorizontalScrollCard: FC<ProjectHorizontalScrollCardProps> = ({
  src,
  type = "image",
}) => {
  return (
    <div className="relative  flex-shrink-0 flex-grow-0  bg-[#d6d7db] rounded-md block aspect-[12/9] md:basis-[35%] xl:basis-[26%]">
      <div className="relative h-full rounded-md overflow-hidden">
        {type == "image" && <Image src={src} fill alt="image" />}
        {type == "video" && <Video videoSrc={src} />}
      </div>
    </div>
  );
};

export default ProjectHorizontalScrollCard;
