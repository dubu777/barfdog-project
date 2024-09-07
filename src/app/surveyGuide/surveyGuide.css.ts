import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";


export const surveyWrapper = style({
  display: "flex",
  justifyContent: 'center',
  paddingTop: '6.25rem',
  flexDirection: 'column',
  alignItems: 'center',
});
export const surveyBox = style({
  display: "flex",
  flexDirection: 'column',
  justifyContent: "center",
  alignItems: "center",
  borderRadius: '0.75rem',
  height: '17.25rem',
  width: '35rem',
  backgroundColor: themeVars.colors.gray5,
  "@media": {
    "screen and (max-width: 600px)": {
      width: '90dvw',
    },
  },
});
export const imageBox = style({
  width: '9.375rem',
  height: '9.375rem',
  borderRadius: '100%',
  backgroundColor: themeVars.colors.white,
});

export const guideMessageWrapper = style({
  paddingTop: "0.625rem",
  fontSize: themeVars.fontSize.l,
  textAlign: 'center',
  lineHeight: '1.5',
  fontWeight: '600',
});
export const guideButtonWrapper = style({
  paddingBottom: "22.625rem",
  display: "flex",
  justifyContent: "center",
});
export const guideButton = style({
  padding: ".625rem 1.25rem",
  maxWidth: "17.5rem",
  backgroundColor: themeVars.colors.danger,
  borderRadius: ".25rem",
  color: themeVars.colors.white,
  boxSizing: "border-box",
  fontSize: themeVars.fontSize.m,
  cursor: "pointer",
  border: "none",
  marginTop: '2.5rem',
});