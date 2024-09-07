import { globalStyle, style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";



export const navContainer = style({
  display: "flex",
  alignItems: "center",
  height: "3rem",
});

export const navWrapper = style({
  width: "100%",
  display: "flex",
  justifyContent: 'space-between',
  alignItems: "center",
  padding: '0 0.625rem',
});


export const menu = style({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  fontSize: themeVars.fontSize.m,
  height: "3rem",
  fontWeight: '700',
  color: themeVars.colors.gray3,
  border: 'none',
  background: 'transparent',
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
  minWidth: '9.375rem',
  gap: '0.625rem',
});


export const submenu = style({
  padding: '0.55rem 1.875rem',
  textAlign: 'center',
  fontSize: '0.9375rem',
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
export const navImage = style({
  width: "1.75rem",
  height: "1.75rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const menuContainer = style({
  position: 'relative',
});

globalStyle(`${menuContainer}:hover ${submenuContainer}`, {
  display: 'flex',
  opacity: 1,
  transform: 'translateX(-50%) translateY(10px)', 
});