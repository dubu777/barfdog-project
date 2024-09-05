import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const checkBoxListContainer = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: 'space-between',
  textAlign: "center",
  width: '26.5rem',
  fontSize: themeVars.fontSize.l,
  lineHeight: "100%",
  letterSpacing: "-0.01em",
  '@media': {
    'screen and (max-width: 40.625rem)': {
      width: 'auto',
    },
  },
});
