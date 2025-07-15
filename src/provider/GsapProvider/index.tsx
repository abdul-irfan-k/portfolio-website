"use client";
import gsap from "gsap";
import  ScrollTrigger  from "gsap/ScrollTrigger";
import React, { FC, useEffect } from "react";

interface GsapProviderProps {
  children: React.ReactNode;
}
const GsapProvider: FC<GsapProviderProps> = ({ children }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return <>{children}</>;
};

export default GsapProvider;
