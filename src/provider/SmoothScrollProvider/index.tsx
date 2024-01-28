"use client";
import React, { useEffect } from "react";

const SmothScrollScrollProvider = () => {
  useEffect(() => {
    (async () => {
      if (typeof window === "undefined") return;
      //@ts-ignore
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  });
  return <div></div>;
};

export default SmothScrollScrollProvider;
