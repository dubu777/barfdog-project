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


export const textBoxVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // 자식 요소 간의 애니메이션 간격
    },
  },
};

export const listItemVariants = {
  hidden: {
    opacity: 0,
    y: 70, // 아래에서 위로 올라오도록
  },
  visible: (custom: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1, // 순차적 딜레이
      duration: 0.4, // 각 리스트 항목의 애니메이션 지속 시간
    },
  }),
};
