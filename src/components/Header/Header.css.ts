import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const headerContainer = style({
  width: "100dvw",
  padding: "0 1.25rem",
  boxShadow: '0 .3125rem .9375rem rgba(0, 0, 0, .08)',
});
export const headerWrapper = style({
  width: "100%",
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
});
export const innerHeaderWrapper = style({
  maxWidth: "120rem",
  width: "75rem",
  display: "flex",
  flexDirection: "column",
});
