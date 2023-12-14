"use client";
import React, { useEffect } from "react";

const SmothScrollScrollProvider = () => {
  useEffect(() => {
    (async () => {
      if (typeof window === "undefined") return;
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });
  return <div></div>;
};

export default SmothScrollScrollProvider;
