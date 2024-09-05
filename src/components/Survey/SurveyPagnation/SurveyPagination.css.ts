import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const paginationWrapper = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  width: "100%",
  maxWidth: "22.75rem",
  marginTop: "6.5625rem",
  ":before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: 0,
    width: "100%",
    height: ".25rem",
    backgroundColor: themeVars.colors.gray4,
    transform: "translateY(-50%)",
    zIndex: -1,
  },
  '@media': {
    'screen and (max-width: 40.625rem)': {
      width: "11.25rem",
    },
  },
});

export const progressBar = style({
  position: "absolute",
  top: "50%",
  left: 0,
  height: ".25rem",
  backgroundColor: themeVars.colors.danger,
  zIndex: -1,
  transform: "translateY(-50%)",
  transition: "width 0.4s ease",
});

export const bulletContainer = recipe({
  base: {
    position: "relative",
    width: "1.625rem",
    height: "1.625rem",
    padding: ".3125rem",
    borderRadius: "50%",
    backgroundColor: themeVars.colors.white,
    border: `.3125rem solid ${themeVars.colors.gray4}`,
    display: "inline-block",
    ":before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      height: "100%",
      border: `.125rem solid transparent`,
      transform: "translate(-50%, -50%)",
      borderRadius: "50%",
      transition: "transform .1s linear",
    },
  },
  variants: {
    status: {
      inactive: {},
      active: {
        ":before": {
          borderColor: themeVars.colors.danger,
          backgroundColor: themeVars.colors.white,
          transform: "translate(-50%, -50%) scale(2.1)",
          backgroundImage: 'url(/pagination-logo.png)',
          backgroundSize: '80% 80%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        },
      },
      completed: {
        backgroundColor: themeVars.colors.danger,
        borderColor: themeVars.colors.danger,
        ":after": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          opacity: "1",
          backgroundImage: 'url(/checked.png)',
          backgroundSize: '80% 80%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: "translate(-50%, -50%)",
        },
      },
    },
  },
});

export const bulletText = recipe({
  base: {
    position: "absolute",
    bottom: "-2.3rem",
    left: "50%",
    transform: "translateX(-50%)",
    color: themeVars.colors.gray3,
    fontSize: '0.85rem',
    textAlign: "center",
    width: "12.5rem",
    '@media': {
      'screen and (max-width: 40.625rem)': {
        transform: 'Translate(-50%, 100%) translateY(-.125rem)',
        width: "11.25rem",
        fontSize: '0.7rem',
      },
    },
  },
  variants: {
    status: {
      inactive: {},
      active: {
        color: themeVars.colors.black,
      },
      completed: {
        
      },
    },
  },
});
