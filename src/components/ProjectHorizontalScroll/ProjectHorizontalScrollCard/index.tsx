import Image from "next/image";
import React from "react";

const ProjectHorizontalScrollCard = () => {
  return (
    <div className="relative  px-7 py-7 flex-shrink-0 flex-grow-0  bg-[#d6d7db] rounded-md block aspect-video md:basis-[35%] xl:basis-[26%]">
      <div className="relative h-full rounded-md overflow-hidden">
        <Image src={"/Asset/banner.jpg"} fill alt="image" />
      </div>
    </div>
  );
};

export default ProjectHorizontalScrollCard;
