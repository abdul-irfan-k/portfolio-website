import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="px-5 mt-8 flex flex-col items-center sm:px-10 md:mt-20 md:px-20 xl:px-40">
      <span className="font-display text-2xl font-medium capitalize text-center md:text-5xl">
        Self-taught Full Stack Developer
      </span>
      <span className="mt-2 px-5 text-base text-center text-pretty md:text-lg">
        I design and code beautifully simple things, and I love what I do.
      </span>
      <div className="mt-5 relative w-[30%] max-w-[200px] aspect-square rounded-full overflow-hidden md:w-[40%]">
        <Image
          src={"/Asset/person1.svg"}
          fill
          alt="Person portrait"
          sizes="200px"
          priority
        />
      </div>
      <div className="relative w-[90%]  aspect-video md:w-[65%] xl:w-[50%]">
        <Image
          src={"/Asset/device.svg"}
          fill
          alt="device-image"
          sizes="(min-width: 1280px) 50vw, (min-width: 768px) 65vw, 90vw"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
