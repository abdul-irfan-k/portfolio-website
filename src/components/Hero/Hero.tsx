import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="px-5 mt-20 flex flex-col items-center sm:px-10 md:px-20 xl:px-40">
      <span className="text-3xl font-semibold capitalize text-center md:text-5xl ">
        Self taught Full stack developer
      </span>
      <span className="mt-2 px-5 text-lg text-center">
        I design and code beautifully simple things, and I love what I do.
      </span>
      <div className="mt-5 relative w-[40%] max-w-[200px] aspect-square rounded-full overflow-hidden">
        <Image src={"/Asset/person1.svg"} fill alt="peson-image" />
      </div>
      <div className="relative w-[90%]  aspect-video md:w-[65%] xl:w-[50%]">
        <Image src={"/Asset/device.svg"} fill alt="device-image" />
      </div>
    </div>
  );
};

export default Hero;
