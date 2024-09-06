import { Variants } from 'framer-motion';

export const slideDownVariants: Variants = {
  hidden: {
    opacity: 1,
    y: -20, 
  },
  visible: {
    opacity: 1,
    y: 0, 
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const expandFromTopVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: 'easeInOut',
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: 'easeInOut',
    },
  },
};



export const sectionVariants = {
  hiddenLeft: {
    x: -400,
    opacity: 0,
  },
  hiddenRight: {
    x: 400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: "easeInOut",
    },
  },
};
