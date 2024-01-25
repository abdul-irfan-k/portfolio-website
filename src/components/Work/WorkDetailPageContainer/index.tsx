import Video from "@/components/shared/Video";
import Image from "next/image";
import React from "react";

const WorkDetailPageContainer = () => {
  return (
    <div>
      <div className="mt-20 px-10 md:px-10 ">
        <div className="relative md:px-24 ">
          <div className="px-24">
            <h1 className=" text-6xl md:text-9xl ">FABRIC</h1>
          </div>

          <div className="px-24">
            <div className="relative  mt-10 aspect-square">
              <Image
                src={"/Asset/device.png"}
                alt="image"
                fill
                className="object-contain"
              />
              <div className="absolute w-[98.8%] ml-[0.6%]  top-[8%] aspect-[1.6/1] bg-red-300 block">
                <Video videoSrc="/Asset/project-video-demo.mp4"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPageContainer;
