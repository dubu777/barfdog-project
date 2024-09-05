import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

const birthContainer = style([{
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: '1.25rem',
  fontSize: themeVars.fontSize.m,
}])

export {birthContainer}