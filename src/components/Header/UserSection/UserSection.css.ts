import { globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";


export const userContainer = style({
  width: '100%',
  padding: '.625rem 1.375rem .625rem 0',
  "@media": {
    "screen and (max-width: 600px)": {
      display: 'none',
    },
  },
});

export const userWrapper = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const userClassWrapper = style({
  display: "flex",
  fontSize: themeVars.fontSize.s,
  justifyContent: "center",
  alignItems: "center",
  gap: "1.25rem",
});

export const userClassButton = style({
  fontSize: themeVars.fontSize.s,
  padding: "0.125rem 0.875rem",
  color: themeVars.colors.gray1,
  border: `0.0625rem solid ${themeVars.colors.gray2}`,
  borderRadius: '0.875rem',
  fontWeight: '400',
  backgroundColor: 'transparent',
  cursor: "pointer",
});

export const username = style({
  position: "relative",
  padding: "0.9375rem 1.25rem",
  cursor: "pointer",
});

export const userEm = style({
  marginRight: '0.1875rem',
});

export const serviceWrapper = style({
  margin: '0 1.5625rem',
  padding: '0 1.5625rem',
  fontSize: themeVars.fontSize.s,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});
export const serviceButton = style({
  fontWeight: '400',
  padding: '0.5rem 0',
  cursor: "pointer",
});

export const serviceMenuContainer = style({
  display: "none",
  flexDirection: "column",
  position: "absolute",
  left: "50%",
  top: "100%",
  backgroundColor: themeVars.colors.white,
  boxShadow: "0 0 .9375rem rgba(0, 0, 0, .15)",
  padding: "0.625rem 0",
  zIndex: "10",
  opacity: 0,
  transform: "translateX(-50%) translateY(-15px)",
  transition: "opacity 0.3s ease, transform 0.3s ease",
  minWidth: '9.375rem',
  gap: '0.625rem',
});

export const serviceMenu = style({
  padding: '0.55rem 0',
  textAlign: 'center',
  fontSize: themeVars.fontSize.s,
  cursor: "pointer",
  display: 'block',
  transitionTimingFunction: 'ease',
  transitionDuration: '0.3s',
  transitionProperty: 'background, color',
  selectors: {
    '&:hover': {
      backgroundColor: themeVars.colors.gray4,
      color: themeVars.colors.danger,
    },
  },
});

export const logoutButton = style({
  background: 'none',
  border: 'none',
  fontSize: themeVars.fontSize.s,
  cursor: "pointer",
});


globalStyle(`${serviceWrapper}:hover ${serviceMenuContainer}`, {
  display: 'flex',
  opacity: 1,
  transform: 'translateX(-50%) translateY(0)', 
});