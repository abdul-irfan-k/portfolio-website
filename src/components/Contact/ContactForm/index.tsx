"use client";
import React, { useState } from "react";

import ButtonHoverAnimation from "@/components/shared/ButtonHoverAnimation";

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe2Eiuk4QW6A8ItTpmv2gKhpVDLoWzxTOXoAG4ZJzDWO0jYRg/formResponse";
const GOOGLE_FORM_ENTRY_NAME = "entry.2019754861";
const GOOGLE_FORM_ENTRY_EMAIL = "entry.562295922";
const GOOGLE_FORM_ENTRY_MESSAGE = "entry.1261157478";

const ContactForm = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;

    setStatus("submitting");
    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          [GOOGLE_FORM_ENTRY_NAME]: formDetails.name,
          [GOOGLE_FORM_ENTRY_EMAIL]: formDetails.email,
          [GOOGLE_FORM_ENTRY_MESSAGE]: formDetails.message,
        }),
      });
      setStatus("sent");
    } catch {
      setStatus("idle");
    }
  };

  const sendLabel =
    status === "sent" ? "sent" : status === "submitting" ? "…" : "send";

  return (
    <form
      className="flex flex-col  text-xl md:text-2xl "
      onSubmit={onSubmitHandler}
    >
      <div className="gap-10 py-8 flex text-slate-300 border-t-[1px] border-neutral-500">
        <span className="text-slate-300 text-base">01</span>
        <div className="gap-1 flex flex-col flex-1 ">
          <span className="text-slate-50 ">{"What’s your name?"}</span>
          <div className="flex-1">
            <input
              type="text"
              className="bg-transparent  w-full text-slate-50 border-none outline-none hover:outline-none text-xl"
              name="name"
              placeholder="name"
              value={formDetails.name}
              onChange={onChangeHandler}
              required
              disabled={status !== "idle"}
            />
          </div>
        </div>
      </div>
      <div className="gap-10 py-8 flex text-slate-300 border-t-[1px] border-neutral-500">
        <span className="text-slate-300 text-base">02</span>
        <div className="gap-1 flex flex-col flex-1 ">
          <span className="text-slate-50 ">{"What’s your email?"}</span>
          <div className="flex-1">
            <input
              type="email"
              className="bg-transparent  w-full text-slate-50 border-none outline-none hover:outline-none text-xl"
              placeholder="email"
              name="email"
              value={formDetails.email}
              onChange={onChangeHandler}
              required
              disabled={status !== "idle"}
            />
          </div>
        </div>
      </div>
      <div className="gap-10 py-8 flex text-slate-300 border-t-[1px] border-neutral-500">
        <span className="text-slate-300 text-base">03</span>
        <div className="gap-1 flex flex-col flex-1 ">
          <span className=" text-slate-50 ">
            What would you like to talk about?
          </span>
          <div className="flex-1">
            <textarea
              className="bg-transparent  w-full h-[35vh] text-slate-50 border-none outline-none hover:outline-none text-xl"
              placeholder="message"
              name="message"
              value={formDetails.message}
              onChange={onChangeHandler}
              maxLength={5000}
              required
              disabled={status !== "idle"}
            />
          </div>
        </div>
      </div>

      <div className="h-[1px] mb-24 bg-neutral-500 w-full flex items-center justify-end ">
        <div className="absolute  w-[25%] aspect-square rounded-full  overflow-hidden  md:w-[12%]">
          <ButtonHoverAnimation style={undefined}>
            <button
              type="submit"
              className=" flex items-center justify-center w-[100%] aspect-square rounded-full bg-blue-600 border-none cursor-pointer disabled:cursor-default"
              disabled={status !== "idle"}
            >
              <span className="z-[20] text-xl text-slate-50">{sendLabel}</span>
            </button>
          </ButtonHoverAnimation>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
