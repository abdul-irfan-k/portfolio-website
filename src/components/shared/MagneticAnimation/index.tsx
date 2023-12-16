"use client";
import React, { FC, useEffect, useRef } from "react";
import gsap from "gsap";

interface MagneticAnimationProps {
  children: React.ReactNode;
}
const MagneticAnimation: FC<MagneticAnimationProps> = ({ children }) => {
  const magneticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!magneticRef.current) return;

    const xMove = gsap.quickTo(magneticRef.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yMove = gsap.quickTo(magneticRef.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    magneticRef.current.addEventListener("mousemove", (e) => {
      if (!magneticRef.current) return;
      const { width, height, left, top } =
        magneticRef.current.getBoundingClientRect();

      const { clientX, clientY } = e;

      xMove(clientX - (left + width / 2));
      yMove(clientY - (top + height / 2));
    });

    magneticRef.current.addEventListener("mouseleave", () => {
      xMove(0);
      yMove(0);
    });
  }, []);
  return React.cloneElement(children, { ref: magneticRef });
};

export default MagneticAnimation;
