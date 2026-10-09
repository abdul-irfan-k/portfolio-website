"use client";
import Image from "next/image";
import React from "react";

import FooterInfoAndLinkBox from "@/components/Footer/FooterInfoAndLinkBox";

import ContactForm from "../ContactForm";
import ContactInformation from "../ContactInformation";

const ContactPageContainer = () => {
  return (
    <div className=" text-slate-50">
      <div className="px-5 gap-[10%] relative flex items-end sm:px-10 md:py-10 md:px-48">
        <div className="flex flex-col font-display text-4xl md:text-8xl md:w-[60%]">
          <span className="ml-[17%] md:ml-0">{"Let’s start a "}</span>
          <span>project together</span>
        </div>
        <div className="absolute w-[12%] top-0 aspect-square rounded-full block md:w-[8%] md:top-auto md:left-[64%]">
          <Image
            src={"/Asset/person1.svg"}
            fill
            alt="Person portrait"
            sizes="(min-width: 768px) 8vw, 12vw"
          />
        </div>
      </div>

      <div className="px-5 flex flex-col flex-col-reverse justify-between sm:px-10 md:flex-row md:py-10 md:px-48">
        <div className="pt-10  w-full md:w-[60%] md:pt-28 ">
          <ContactForm />
        </div>
        <div className="pt-10  md:w-[30%] md:pt-28">
          <ContactInformation />
        </div>
      </div>

      <div className="mt-14 md:mt-20">
        <FooterInfoAndLinkBox />
      </div>
    </div>
  );
};

export default ContactPageContainer;
