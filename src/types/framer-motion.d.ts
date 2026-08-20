import type { CSSProperties, ReactNode } from "react";

declare module "framer-motion" {
  interface MotionProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
  }
}
