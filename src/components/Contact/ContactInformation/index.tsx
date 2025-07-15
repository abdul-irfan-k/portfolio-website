import React from "react";

import MagneticAnimation from "@/components/shared/MagneticAnimation";

const ContactInformation = () => {
  return (
    <div className="text-slate-50 text-xl">
      <div className=" text-lg flex flex-col md:text-lg">
        <span className="py-1 text-slate-300">Contact Details</span>
        <MagneticAnimation magneticStifness={0.3}>
          <span className="py-1">irfan@gmail.com</span>
        </MagneticAnimation>
        <MagneticAnimation magneticStifness={0.3}>
          <span className="py-1">6363520187</span>
        </MagneticAnimation>
      </div>
      <div className=" mt-5 text-lg flex flex-col md:text-xl">
        <span className="text-slate-300">Social</span>
        <MagneticAnimation magneticStifness={0.3}>
          <span className="py-1">Instagram</span>
        </MagneticAnimation>
        <MagneticAnimation magneticStifness={0.3}>
          <span className="py-1">Twitter</span>
        </MagneticAnimation>
        <MagneticAnimation magneticStifness={0.3}>
          <span className="py-1">Linkedin</span>
        </MagneticAnimation>
        <MagneticAnimation magneticStifness={0.3}>
          <span className="py-1">Facebook</span>
        </MagneticAnimation>
      </div>
    </div>
  );
};

export default ContactInformation;
