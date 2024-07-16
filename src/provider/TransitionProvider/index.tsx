"use client";
import React, { useState, createContext, useCallback, FC } from "react";
import gsap from "gsap";
import TransitionLayout from "./TransitionLayout";

export const TransitionContext = createContext({});

interface TransitionProviderProps {
  children: React.ReactNode;
}
const TransitionProvider: FC<TransitionProviderProps> = ({ children }) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  );

  return (
    <TransitionContext.Provider
      value={{
        timeline,
        setTimeline,
      }}
    >
      <TransitionLayout>{children}</TransitionLayout>
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
