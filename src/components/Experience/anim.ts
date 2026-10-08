import type { Variants } from "framer-motion";

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

export const slideUp: Variants = {
  closed: {
    y: "100%",
  },
  open: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const fadeUp: Variants = {
  closed: {
    opacity: 0,
    y: 24,
  },
  open: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutQuart, delay },
  }),
};

export const dotFill: Variants = {
  idle: {
    backgroundColor: "rgb(255, 255, 255)",
    scale: 1,
    transition: { duration: 0.3 },
  },
  reached: {
    backgroundColor: "rgb(28, 29, 32)",
    scale: 1.15,
    transition: { duration: 0.3 },
  },
};
