import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const logoContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  padding: "3.125rem 0 1.875rem",
  "@media": {
    "screen and (max-width: 600px)": {
      padding: '0',
      maxWidth: '9.125rem',
    },
  },
});

export const logoImg = style({
  width: "100%",
  maxWidth: "280px",
  height: "auto",
  "@media": {
    "screen and (max-width: 600px)": {
      maxWidth: "17.5rem",
    },
  },
});

export const logoWrapper = style({
  width: '100%',
});

export const innerHeaderWrapper = style({
  maxWidth: "120rem",
  width: "75rem",
  display: "flex",
  flexDirection: "column",
});
