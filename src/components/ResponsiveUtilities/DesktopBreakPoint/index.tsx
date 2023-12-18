"use client";
import React, { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface DesktopBreakPointProps {
  children: React.ReactNode;
}
const DesktopBreakPoint: FC<DesktopBreakPointProps> = ({ children }) => {
  const isDesktopHook = useMediaQuery({ minWidth: 770 });

  const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setIsDesktop(isDesktopHook);
  }, [isDesktopHook]);
  return isDesktop ? children : <></>;
};

export default DesktopBreakPoint;
