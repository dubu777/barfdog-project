import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const outerContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const innerContainer = style({
  width: '47.5rem',
  maxWidth: '47.5rem',
  padding: "0 1.25rem",
  "@media": {
    "screen and (max-width: 600px)": {
      padding: "0 1.25rem",
    },
  },
});
export const orderTitle = style({
  padding: "3.75rem 0 2.1875rem",
  textAlign: 'center',
  fontSize: themeVars.fontSize.xl,
  fontWeight: '500',
});
export const orderContainer = style({
  padding: "0 1.25rem",
});

















export const SuscribeTitle = style({
  fontSize: themeVars.fontSize.xxl,
  color: themeVars.colors.black,
  letterSpacing: "-0.02em",
  textAlign: "center",
  lineHeight: "1.4",
  paddingBottom: "3.125rem",
  fontWeight: "700",
});
export const SuscribeResultWrapper = style({
  display: "flex",
  justifyContent: "center",
});







export const prevButton = style({
  border: '.0625rem solid #ddd',
  borderRadius: '.25rem',
  padding: '.6875rem 0',
  boxSizing: 'border-box',
  cursor: 'pointer',
  width: '100%',
  fontSize: '1rem',
});
export const nextButton = style({
  border: '.0625rem solid #ddd',
  borderRadius: '.25rem',
  padding: '.6875rem 0',
  boxSizing: 'border-box',
  cursor: 'pointer',
  width: '100%',
  fontSize: '1rem',
  backgroundColor: themeVars.colors.danger,
  color: '#fff',
});


export const SuscribeResultLeft = style({
  gridRow: "1 / span 2",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 0 1.5625rem rgba(0, 0, 0, 0.15)",
  paddingBottom: "0.925rem",
});

export const SuscribeRightTitleWrapper = style({
  maxWidth: "26rem",
  fontSize: "1.4rem",
  letterSpacing: "-0.02em",
  lineHeight: "120%",
  fontWeight: 300,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});
