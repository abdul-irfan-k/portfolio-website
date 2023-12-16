"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import MagneticAnimation from "../MagneticAnimation";

interface ButtonHoverAnimationProps {
  children: React.ReactNode;
  style: React.CSSProperties | undefined;
}
const ButtonHoverAnimation: FC<ButtonHoverAnimationProps> = ({
  children,
  style,
}) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline>(null);

  useEffect(() => {
    const timelineObj = gsap
      .timeline({ paused: true })
      .to(
        circleRef.current,
        {
          top: "-10%",
          width: "150%",
          duration: "0.4",
          ease: "power3.in",
        },
        "enter"
      )
      .to(
        circleRef.current,
        {
          top: "-150%",
          width: "120%",
          duration: "0.4",
          ease: "power3.in",
        },
        "exit"
      );
    timeline.current = timelineObj;
  }, []);

  const onMouseEnterHandler = () => {
    if (!timeline.current) return;
    timeline.current.tweenFromTo("enter", "exit");
  };

  const onMouseLeaveHandler = () => {
    if (!timeline.current) return;
    timeline.current.play();
  };

  return (
    <MagneticAnimation>
      <div
        className="relative  flex justify-center overflow-hidden rounded-full "
        style={style}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        {children}
        <div
          className="absolute w-[120%] h-[150%]  rounded-full top-[100%] bg-blue-500 block z-[10]"
          ref={circleRef}
          style={{ borderRadius: "50%" }}
        ></div>
      </div>
     </MagneticAnimation>
  );
};

export default ButtonHoverAnimation;
