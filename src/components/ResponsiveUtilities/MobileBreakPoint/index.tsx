import React, { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface MobileBreakPointProps {
  children: React.ReactNode;
}
const MobileBreakPoint: FC<MobileBreakPointProps> = ({ children }) => {
  const isMobileHook = useMediaQuery({ maxWidth: 768 });

  const [isSmartPhone, setIsSmartPhone] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    setIsSmartPhone(isMobileHook);
  }, [isMobileHook]);
  return isSmartPhone ? children : null;
};

export default MobileBreakPoint;
