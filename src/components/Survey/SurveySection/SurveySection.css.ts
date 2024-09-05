import { style } from "@vanilla-extract/css";

export const surveySectionContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3.75rem",
  padding: "5rem 0",
});

export const walkingInputWrapper = style({
  display: "flex",
  flexDirection: "row",
  gap: "1.25rem",
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "screen and (max-width: 40.625rem)": {
      flexDirection: "column",
      gap: "1.5625rem",
    },
  },
});
