import React from "react";
import ContactForm from "../ContactForm";
import ContactInformation from "../ContactInformation";

const ContactPageContainer = () => {
  return (
    <div className="py-10 px-48 text-slate-50">
      <div className="gap-[10%] relative flex items-end ">
        <span className="w-[60%] text-8xl ">
          {"Let's start a project together"}
        </span>
        <div className="relative w-[10%] aspect-square rounded-full block bg-neutral-600"></div>
      </div>

      <div className="flex justify-between">
        <div className="pt-28 w-[60%] ">
            <ContactForm />
        </div>
        <div className="pt-28 w-[30%]">
            <ContactInformation />
        </div>
      </div>
    </div>
  );
};

export default ContactPageContainer;
