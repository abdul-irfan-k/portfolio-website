import Image from "next/image";
import React from "react";

const ProjectHorizontalScrollCard = () => {
  return (
    <div
      className="relative  px-6 py-6 bg-[#d6d7db] rounded-md block aspect-video"
      style={{ flex: "0 0 26%" }}
    >
      <div className="relative h-full rounded-md overflow-hidden">
        <Image src={"/Asset/banner.jpg"} fill alt="image" />
      </div>
    </div>
  );
};

export default ProjectHorizontalScrollCard;
