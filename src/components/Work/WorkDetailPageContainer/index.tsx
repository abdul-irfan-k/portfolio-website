import ButtonHoverAnimation from "@/components/shared/ButtonHoverAnimation";
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
              <div className="absolute top-0 right-0 translate-x-[-40%] translate-y-[-40%] z-20 ">
                <ButtonHoverAnimation style={{ marginTop: "5rem" }}>
                  <div className=" w-44 aspect-square rounded-full flex items-center justify-center text-slate-50 bg-blue-600">
                    <span className="text flex justify-center z-20 ">Live Site</span>
                  </div>
                </ButtonHoverAnimation>
              </div>
              <div className="absolute w-[98.8%] ml-[0.6%]  top-[8%] aspect-[1.6/1] bg-red-300 block">
                <Video videoSrc="/Asset/project-video-demo.mp4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPageContainer;
