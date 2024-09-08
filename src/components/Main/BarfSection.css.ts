import { style } from "@vanilla-extract/css";

export const premiumSection = style({
  padding: "7.5rem 0 9.375rem",
  position: "relative",
  height: "51.5rem",
  display: 'block',
  width: "100%",
  "@media": {
    "screen and (max-width: 600px)": {
      height: "100%",
    },
  },
});

export const premiumTitle = style({
  display: "block",
  fontSize: "2rem",
  textAlign: "center",
  width: "100%",
  fontWeight: 700,
});

export const gridContainer = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  position: "relative",
  "@media": {
    "screen and (max-width: 600px)": {
      position: "static",
      rowGap: "1.25rem",
    },
  },
});

export const imageContainer = style({
  minWidth: "12.5rem",
  width: "28.75rem",
  height: "26.25rem",
  margin: "0 auto",
  transform: "translateX(-12.5rem)",
  "@media": {
    "screen and (max-width: 600px)": {
      display: "flex",
      transform: "translateX(-1.5625rem)",
      maxWidth: "18.96875rem",
      width: "100%",
      // height: "100%",
    },
  },
});

export const textbox = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%) translate(14.375rem,1.40625rem)",
  "@media": {
    "screen and (max-width: 600px)": {
      position: "static",
      transform: "translate(0)",
      margin: "0 auto",
    },
  },
});

export const textList = style({
  width: "100%",
});
export const textLi = style({
  left: 0,
  top: 0,
  fontSize: "1.125rem",
  display: "block",
  position: "relative",
  marginBottom: "2.3875rem",
  textAlign: "left",
  ":before": {
    content: '""',
    width: "1.5625rem",
    height: "1.5rem",
    backgroundImage: "url('/check-img.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "1.5625rem 1.5rem",
    position: "absolute",
    top: "-.125rem",
    left: "-1.875rem",
    margin: "auto",
  },
});
