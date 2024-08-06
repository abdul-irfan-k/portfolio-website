import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="gap-10 flex flex-col justify-center items-center  px-5 sm:px-10 md:px-20 xl:px-40 md:flex-row md:items-center  ">
        <div className=" relative w-[50%] max-w-[200px] aspect-square rounded-full overflow-hidden">
          <Image src={"/Asset/person1.svg"} fill alt="peson-image" />
        </div>
        <div className="gap-5  w-[80%] flex  flex-col text-xl md:w-[50%]  ">
          <span>
            I'm Abdul Irfan, a self-taught developer passionate about digitally
            solving problems with cutting-edge technologies. Specializing in web
            technologies, I'm eager to learn and adapt to the latest trends. My
            coding journey began in 11th standard, and I bring over a year of
            expertise in the MERN stack.I built video conferencing, e-commerce,
            and other impactful projects. I also actively contribute to top
            open-source initiatives. feel free to connect with me and lets have
            a talk....
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
