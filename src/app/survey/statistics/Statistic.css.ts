import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const statisticsContainer = style({
  width: "60rem",
  display: "grid",
  gridTemplateAreas: `
    "top top"
    "left t_right"
    "left b_right"
  `,
  gridTemplateColumns: "1fr 1fr",
  gridGap: "2.125rem",
  "@media": {
    "screen and (max-width: 1100px)": {
      gridTemplateAreas: `
        "top t_right"
        "top b_right"
        "left left"
      `,
      gridTemplateColumns: "1fr 1fr", 
    },
    "screen and (max-width: 900px)": {
      gridTemplateAreas: `
        "top"
        "left"
        "t_right"
        "b_right"
      `,
      gridTemplateColumns: "1fr",  
      width: 'auto',
      gap: '1.25rem',
    },
  },
});



export const statisticsWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
export const statisticsTopContainer = style({
  gridArea: "top",
  padding: "2.625rem 4.0625rem",
  boxShadow: "0 0 1.25rem rgba(69, 69, 83, 0.08)",
  borderRadius: "1.5rem",
});

export const statisticsTopWrapper = style({
  display: "flex",
});
export const statisticsTopBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "33%",
  gap: "1.875rem",
});

export const statisticsTitle = style({
  fontSize: themeVars.fontSize.l,
  fontWeight: 700,
  letterSpacing: "-0.01em",
  textAlign: "center",
  marginBottom: "2.5rem",
});
export const statisticsMainTitle = style({
  fontSize: themeVars.fontSize.xl,
  fontWeight: 700,
  letterSpacing: "-0.02em",
  lineHeight: '140%',
  textAlign: "center",
});
export const statisticsNotificationWrapper = style({
  fontSize: themeVars.fontSize.s,
  fontWeight: 400,
  color: themeVars.colors.gray2,
  letterSpacing: "-0.02em",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: '140%',
  textAlign: "center",
  gap: '0.175rem',
  paddingTop: '2.625rem',
});
export const statisticsMainTitleWrapper = style({
  padding: '3.75rem 0 2.5rem',
  gap: '0.625rem',
});
export const confirmButtonWrapper = style({
  display: "flex",
  justifyContent: "center",
  padding: "1.0625rem 0",
  borderRadius: "0.25rem",
  paddingTop: '2.625rem',
  paddingBottom: '3rem',
  width: "100%",
});
export const confirmButton = style({
  width: "100%",
  maxWidth: "19.6875rem",
  backgroundColor: themeVars.colors.danger,
  textAlign: "center",
  color: themeVars.colors.white,
  fontSize:  themeVars.fontSize.m,
  lineHeight: "100%",
  letterSpacing: "-0.01em",
  padding: "1.0625rem 0",
  borderRadius: "0.25rem",
});
export const statisticsMainSubtitle = style({
  fontSize: themeVars.fontSize.m,
  fontWeight: 400,
  letterSpacing: "-0.01em",
  lineHeight: '140%',
  color: themeVars.colors.gray2,

});

export const surveyGuideWrapper = style({
  width: "75rem",
  maxWidth: "120rem",
});

export const surveyWrapper = style({
  display: "flex",
  justifyContent: "center",
  paddingTop: "6.25rem",
  flexDirection: "column",
  alignItems: "center",
});
export const surveyBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0.75rem",
  height: "17.25rem",
  width: "35rem",
  backgroundColor: themeVars.colors.gray5,
});
export const imageBox = style({
  width: "9.375rem",
  height: "9.375rem",
  borderRadius: "100%",
  backgroundColor: themeVars.colors.white,
});

export const guideMessageWrapper = style({
  paddingTop: "0.625rem",
  fontSize: themeVars.fontSize.l,
  textAlign: "center",
  lineHeight: "1.5",
  fontWeight: "600",
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
  marginTop: "2.5rem",
});
