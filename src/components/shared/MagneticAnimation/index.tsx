"use client";
import React, { FC, useEffect, useRef } from "react";
import gsap from "gsap";

interface MagneticAnimationProps {
  children: React.ReactNode;
  magneticStifness?: number;
}
const MagneticAnimation: FC<MagneticAnimationProps> = ({
  children,
  magneticStifness,
}) => {
  const magneticRef = useRef<HTMLDivElement | HTMLSpanElement>(null);

  useEffect(() => {
    if (!magneticRef.current) return;

    const scollContainerSelector = gsap.utils.selector(magneticRef.current);
    const xMove = gsap.quickTo(magneticRef.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yMove = gsap.quickTo(magneticRef.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const xTextMove = gsap.quickTo(scollContainerSelector(".text"), "x", {
      duration: 1.5,
      ease: "elastic.out(1, 0.3)",
    });

    const yTextMove = gsap.quickTo(scollContainerSelector(".text"), "y", {
      duration: 1.5,
      ease: "elastic.out(1, 0.3)",
    });

    magneticRef.current.addEventListener("mousemove", (e) => {
      if (!magneticRef.current) return;
      const { width, height, left, top } =
        magneticRef.current.getBoundingClientRect();

      //@ts-ignore
      const { clientX, clientY } = e;
      const stiffness = magneticStifness == undefined ? 1 : magneticStifness;

      const xMoveMent = (clientX - (left + width / 2)) * 0.5 * stiffness;
      const yMoveMent = (clientY - (top + height / 2)) * 0.5 * stiffness;
      xMove(xMoveMent);
      yMove(yMoveMent);

      xTextMove(xMoveMent / 2);
      yTextMove(yMoveMent / 2);
    });

    magneticRef.current.addEventListener("mouseleave", () => {
      xMove(0);
      yMove(0);
      xTextMove(0);
      yTextMove(0);
    });
  }, [magneticRef.current]);
  //@ts-ignore
  return React.cloneElement(children, { ref: magneticRef });
};

export default MagneticAnimation;
