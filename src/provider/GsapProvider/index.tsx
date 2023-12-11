"use client";
import React, { FC, useEffect } from "react";
import GsapScrollTrigger from 'gsap/ScrollTrigger'
import gsap from "gsap";

interface GsapProviderProps {
  children: React.ReactNode;
}
const GsapProvider: FC<GsapProviderProps> = ({ children }) => {
   useEffect(() => {
    gsap.registerPlugin(GsapScrollTrigger)
   },[])

  return <>{children}</>;
};

export default GsapProvider;
