import React from "react";

const ContactInformation = () => {
  return (
    <div className="text-slate-50 text-xl">
      <div className="gap-2 text-lg flex flex-col">
        <span className="text-slate-300">Contact Details</span>
        <span>irfan@gmail.com</span>
        <span>6363520187</span>
      </div>
      <div className="gap-2 mt-5 flex flex-col">
        <span className="text-slate-300">Social</span>
        <span>Instagram</span>
        <span>Twitter</span>
        <span>Linkedin</span>
        <span>Facebook</span>
      </div>
    </div>
  );
};

export default ContactInformation;
