import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const logoContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  padding: "3.125rem 0 1.875rem",
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
