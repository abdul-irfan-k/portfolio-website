import type { Variants } from "framer-motion";

export const slideUp: Variants = {
  initial: {
    y: "100%",
  },

  open: (i) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.2 + 0.01 * i },
  }),

  closed: {
    y: "100%",

    transition: { duration: 0.5 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },

  open: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.2 },
  },

  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
