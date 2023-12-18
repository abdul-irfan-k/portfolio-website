"use client";
import ButtonHoverAnimation from "@/components/shared/ButtonHoverAnimation";
import React, { useState } from "react";

const ContactForm = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    service: "",
    messageContent: "",
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col  text-xl md:text-2xl ">
      <div className="gap-10 py-8 flex text-slate-300 border-t-[1px] border-neutral-500">
        <span className="text-slate-300 text-base">01</span>
        <div className="gap-1 flex flex-col flex-1 ">
          <span className="text-slate-50 ">{"What's your name?"}</span>
          <div className="flex-1">
            <input
              type="text"
              className="bg-transparent  w-full text-slate-50 border-none outline-none hover:outline-none text-xl"
              placeholder="irfan"
              name="name"
              onChange={onChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="gap-10 py-8 flex text-slate-300 border-t-[1px] border-neutral-500">
        <span className="text-slate-300 text-base">02</span>
        <div className="gap-1 flex flex-col flex-1 ">
          <span className="text-slate-50 ">{"What's your email?"}</span>
          <div className="flex-1">
            <input
              type="text"
              className="bg-transparent  w-full text-slate-50 border-none outline-none hover:outline-none text-xl"
              placeholder="...@gmail.com"
              name="email"
              onChange={onChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="gap-10 py-8 flex text-slate-300 border-t-[1px] border-neutral-500">
        <span className="text-slate-300 text-base">03</span>
        <div className="gap-1 flex flex-col flex-1 ">
          <span className=" text-slate-50 ">
            What services are you looking for?
          </span>
          <div className="flex-1">
            <input
              type="text"
              className="bg-transparent  w-full  text-slate-50 border-none outline-none hover:outline-none text-xl"
              placeholder="service "
              name="service"
              onChange={onChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="gap-10 py-8 flex text-slate-300 border-t-[1px] border-neutral-500">
        <span className="text-slate-300 text-base">03</span>
        <div className="gap-1 flex flex-col flex-1 ">
          <span className=" text-slate-50 ">Your Messaage</span>
          <div className="flex-1">
            <textarea
              className="bg-transparent  w-full h-[35vh] text-slate-50 border-none outline-none hover:outline-none text-xl"
              placeholder="message"
              name="messageContent"
              onChange={(e) =>
                setFormDetails({
                  ...formDetails,
                  messageContent: e.target.value,
                })
              }
              maxLength={5000}
            />
          </div>
        </div>
      </div>

      <div className="h-[1px] mb-24 bg-neutral-500 w-full flex items-center justify-end ">
        <div className="absolute  w-[25%] aspect-square rounded-full  overflow-hidden  md:w-[12%]">
          <ButtonHoverAnimation style={undefined}>
            <div className=" flex items-center justify-center w-[100%] aspect-square rounded-full bg-blue-600 ">
              <span className="z-[20] text-xl">send</span>
            </div>
          </ButtonHoverAnimation>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
