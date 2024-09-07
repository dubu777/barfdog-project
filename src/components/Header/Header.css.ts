import { globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const headerContainer = style({
  width: "100dvw",
  padding: "0 0.25rem",
  boxShadow: "0 .3125rem .9375rem rgba(0, 0, 0, .08)",
  "@media": {
    "screen and (max-width: 900px)": {
      borderBottom: "none",
      boxShadow: "none",
    },
  },
});
export const headerWrapper = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const innerHeaderWrapper = style({
  maxWidth: "120rem",
  width: "75rem",
  display: "flex",
  flexDirection: "column",
});
export const headerWrap = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "3.875rem",
});

export const navContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "3.875rem",
});

export const navLeft = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "3.625rem",
  "@media": {
    "screen and (max-width: 56.25rem)": {
      gap: "0",
    },
  },
});

export const navRight = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.625rem",
});

export const subscribe = style({
  width: "8.3125rem",
  height: "2.5625rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const menu = style({
  position: "relative",
  padding: "0.9375rem 1.25rem",
  cursor: "pointer",
  fontSize: themeVars.fontSize.l,
  height: "2rem",
  fontWeight: "700",
});

export const submenuContainer = style({
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
  minWidth: "9.375rem",
  gap: "0.625rem",
});

export const submenu = style({
  padding: "0.55rem 1.875rem",
  textAlign: "center",
  fontSize: "0.9375rem",
  cursor: "pointer",
  display: "block",
  transitionTimingFunction: "ease",
  transitionDuration: "0.3s",
  transitionProperty: "background, color",
  selectors: {
    "&:hover": {
      backgroundColor: themeVars.colors.gray4,
      color: themeVars.colors.danger,
    },
  },
});
export const navImage = style({
  width: "1.75rem",
  height: "1.75rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const menuContainer = style({
  position: "relative",
});

globalStyle(`${menuContainer}:hover ${submenuContainer}`, {
  display: "flex",
  opacity: 1,
  transform: "translateX(-50%) translateY(10px)",
});
